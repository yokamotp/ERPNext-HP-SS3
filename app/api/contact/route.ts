import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // フォームデータの検証
    const { name, email, company, requestTypes, message } = body;
    
    if (!name || !email) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの簡単な検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // フォームデータをログに出力（開発用）
    console.log('Contact form submission:', {
      name,
      email,
      company,
      requestTypes,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: 実際のメール送信処理
    // 本番環境では以下のような外部サービスを使用してメール送信を実装してください：
    // - SendGrid
    // - Mailgun  
    // - Amazon SES
    // - Nodemailer + SMTP
    
    /*
    例：SendGridを使用した場合
    
    import sgMail from '@sendgrid/mail';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    
    const msg = {
      to: 'yohei.okamoto@gmail.com',
      from: 'noreply@myhatch.jp',
      subject: `お問い合わせ - ${name}様`,
      html: `
        <h2>お問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>会社名:</strong> ${company || '未入力'}</p>
        <p><strong>ご希望の対応:</strong> ${requestTypes.join(', ') || '未選択'}</p>
        <p><strong>ご相談内容:</strong></p>
        <p>${message || '未入力'}</p>
      `
    };
    
    await sgMail.send(msg);
    */

    // 成功レスポンス
    return NextResponse.json(
      { 
        message: 'お問い合わせを受け付けました',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}