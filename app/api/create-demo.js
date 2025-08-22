// app/api/create-demo.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  try {
    // 1) 入力バリデーション（最低限）
    const { email, name, recaptchaToken } = req.body || {};
    if (!email || !name) {
      return res.status(400).json({ ok: false, error: 'missing_params' });
    }

    // 2) reCAPTCHA v3 検証（ローカル開発時は bypass 可）
    const bypass = process.env.RECAPTCHA_BYPASS === 'true';
    if (!bypass) {
      const secret = process.env.RECAPTCHA_SECRET;
      if (!secret) {
        return res.status(500).json({ ok: false, error: 'recaptcha_secret_missing' });
      }
      if (!recaptchaToken) {
        return res.status(400).json({ ok: false, error: 'recaptcha_token_missing' });
      }

      const verifyResp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret,
          response: recaptchaToken,
          // remoteip は任意（必要なら req.headers['x-forwarded-for'] などを使用）
        })
      });

      const verifyJson = await verifyResp.json();
      const score = typeof verifyJson.score === 'number' ? verifyJson.score : 0;
      const success = !!verifyJson.success;

      // スコア閾値は適宜調整（0.5〜0.7 くらいが一般的）
      if (!success || score < 0.5) {
        return res.status(403).json({ ok: false, error: 'recaptcha_failed' });
      }
    }

    // 3) n8n に送るボディ（compact JSON）
    const payload = { email, name };
    const bodyStr = JSON.stringify(payload); // compact（空白・改行なし）

    // 4) 署名生成（ASCIIキー / ts + '.' + bodyStr）
    let secret = process.env.N8N_SHARED_SECRET;
    if (!secret) return res.status(500).json({ ok: false, error: 'n8n_secret_missing' });
    secret = secret.replace(/[\r\n]+$/g, '').trim();

    const ts = Date.now().toString(); // ミリ秒
    const input = `${ts}.${bodyStr}`;
    const crypto = await import('node:crypto');
    const sig = crypto.createHmac('sha256', secret).update(input, 'utf8').digest('hex');

    // 5) n8n Webhook 宛に送信
    const webhookUrl = process.env.N8N_WEBHOOK_URL; // 例: https://n8n.maihatch.com/webhook/demo-signup
    if (!webhookUrl) return res.status(500).json({ ok: false, error: 'n8n_webhook_missing' });

    const n8nResp = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Timestamp': ts,
        'X-Signature': sig,
      },
      body: bodyStr,
    });

    // n8n の戻りをそのまま透過しない（最小限にラップ）
    if (!n8nResp.ok) {
      // n8n 側の 401/403/4xx をそのまま流すと情報が出ることがあるので、最小化
      return res.status(502).json({ ok: false, error: 'n8n_bad_gateway' });
    }
    const n8nJson = await n8nResp.json().catch(() => ({}));
    return res.status(200).json({ ok: true, result: n8nJson || {} });
  } catch (err) {
    // 内部情報は返さない
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
}
