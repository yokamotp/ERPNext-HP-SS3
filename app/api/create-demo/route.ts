// app/api/create-demo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';

/**
 * 本番運用向け: create-demo API
 * - 受け取る JSON を payload = { email, name } の順で JSON.stringify して署名を作る
 * - 署名アルゴリズム: HMAC-SHA256（鍵は ASCII 扱い）
 * - n8n には Content-Type: application/json で送信
 * - 開発用の自己署名フラグ等は含めない（本番用）
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const { email, name, recaptchaToken } = body ?? {};

    // 必須チェック
    if (!email || !name) {
      return NextResponse.json({ ok: false, error: 'missing_parameters' }, { status: 400 });
    }

    // reCAPTCHA v3 検証（本番では必須）
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    if (!recaptchaSecret) {
      console.error('create-demo: RECAPTCHA_SECRET not configured');
      return NextResponse.json({ ok: false, error: 'server_configuration' }, { status: 500 });
    }
    if (!recaptchaToken) {
      return NextResponse.json({ ok: false, error: 'recaptcha_token_missing' }, { status: 400 });
    }

    const verifyResp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: String(recaptchaSecret), response: String(recaptchaToken) })
    });
    const verifyJson = await verifyResp.json().catch(() => ({}));
    const success = !!verifyJson.success;
    const score = typeof verifyJson.score === 'number' ? verifyJson.score : 0;
    if (!success || score < 0.5) {
      return NextResponse.json({ ok: false, error: 'recaptcha_failed' }, { status: 403 });
    }

    // canonical payload: プロパティの順序を明示して JSON.stringify と一致させる
    const payload = { email, name };
    const bodyStr = JSON.stringify(payload);

    // N8N secret の取得（必須）
    let n8nSecret = process.env.N8N_SHARED_SECRET;
    if (!n8nSecret) {
      console.error('create-demo: N8N_SHARED_SECRET not configured');
      return NextResponse.json({ ok: false, error: 'server_configuration' }, { status: 500 });
    }
    n8nSecret = String(n8nSecret).replace(/[\r\n]+$/g, '').trim();

    // タイムスタンプと署名（ASCII鍵）
    const ts = Date.now().toString();
    const input = `${ts}.${bodyStr}`;
    const sig = crypto.createHmac('sha256', n8nSecret).update(input, 'utf8').digest('hex');

    // n8n webhook URL（必須）
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('create-demo: N8N_WEBHOOK_URL not configured');
      return NextResponse.json({ ok: false, error: 'server_configuration' }, { status: 500 });
    }

    // n8n へ送信
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Timestamp': ts,
        'X-Signature': sig
      },
      body: bodyStr
    }).catch((err) => {
      console.error('create-demo: webhook fetch error', err?.message ?? err);
      return null;
    });

    if (!resp) {
      return NextResponse.json({ ok: false, error: 'n8n_unreachable' }, { status: 502 });
    }

    if (!resp.ok) {
      // サーバ側ログにだけレスポンス内容を出力（ただし大量出力防止のため切り詰める）
      const text = await resp.text().catch(() => '');
      console.error('create-demo: n8n returned non-OK', resp.status, text.slice(0, 1000));
      return NextResponse.json({ ok: false, error: 'n8n_error' }, { status: 502 });
    }

    const respJson = await resp.json().catch(() => ({}));
    return NextResponse.json({ ok: true, result: respJson }, { status: 200 });
  } catch (err: any) {
    console.error('create-demo unexpected error:', err?.message ?? err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
