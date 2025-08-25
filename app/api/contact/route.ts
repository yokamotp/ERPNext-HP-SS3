import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, requestTypes, message } = await req.json();

    // ---- minimal validation ----
    if (!name || !email) {
      return NextResponse.json({ error: '必須項目が入力されていません' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '正しいメールアドレスを入力してください' }, { status: 400 });
    }

    const to = 'y-okamoto@maihatch.com'; // 常に自分宛に届く
    const subject = `【お問い合わせ】${name} 様`;

    const safe = (s: unknown) =>
      String(s ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

    const html = `
      <h2>お問い合わせがありました</h2>
      <p><strong>お名前:</strong> ${safe(name)}</p>
      <p><strong>メール:</strong> ${safe(email)}</p>
      <p><strong>会社名:</strong> ${safe(company || '未入力')}</p>
      <p><strong>ご希望の対応:</strong> ${Array.isArray(requestTypes) && requestTypes.length ? requestTypes.map(safe).join(', ') : '未選択'}</p>
      <p><strong>ご相談内容:</strong></p>
      <pre style="white-space:pre-wrap;margin:0">${safe(message || '未入力')}</pre>
    `;
    const text =
      `お問い合わせがありました\n` +
      `お名前: ${name}\n` +
      `メール: ${email}\n` +
      `会社名: ${company || '未入力'}\n` +
      `ご希望の対応: ${Array.isArray(requestTypes) && requestTypes.length ? requestTypes.join(', ') : '未選択'}\n\n` +
      `ご相談内容:\n${message || '未入力'}\n`;

    // 送信：自分宛。返信先は送信者 → メールクライアントで「返信」すると送信者へ返る
    await resend.emails.send({
      from: 'MyHatch <noreply@maihatch.com>', // Resendで認証したドメインのアドレス
      to,
      replyTo: email, // ← これが正
      subject,
      html,
      text,
    });

    return NextResponse.json({ success: true, message: 'お問い合わせを受け付けました' }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
