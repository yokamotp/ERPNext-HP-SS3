# ERPNext-HP3-SSG-v2

Next.js 15 + Tailwind CSS を使用したSSG（静的サイト生成）構成のナレッジサイトです。

## 🚀 特徴

- **SSG構成**: 全ページが静的HTMLとして生成され、SEOに最適化
- **高速表示**: プリレンダリングされたHTMLで高速な表示を実現
- **SEO対応**: メタデータ、OGP、構造化データに対応

## 📋 必要な環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Form API Configuration
RECAPTCHA_SECRET=your_recaptcha_secret_key_here
RECAPTCHA_BYPASS=true

# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
CONTACT_RECIPIENT=your_email@example.com
```

3. **Integration の共有**
   - データベースページで "Share" をクリック
   - 作成したIntegrationを追加

### Contact Form API設定手順

1. **reCAPTCHA v3 の設定**
   - [Google reCAPTCHA](https://www.google.com/recaptcha/admin) にアクセス
   - "reCAPTCHA v3" を選択してサイトを登録
   - 取得したシークレットキーを `RECAPTCHA_SECRET` に設定
   - 開発時は `RECAPTCHA_BYPASS=true` でバイパス可能

2. **SendGrid の設定**
   - [SendGrid](https://sendgrid.com/) でアカウント作成
   - APIキーを生成し、`SENDGRID_API_KEY` に設定
   - 送信先メールアドレスを `CONTACT_RECIPIENT` に設定
   - 送信元メールアドレス（noreply@myhatch.jp）のドメイン認証が必要

## 🛠️ 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 📦 ビルドとデプロイ

```bash
# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 📁 プロジェクト構造

```
├── app/
│   ├── knowledge/
│   │   ├── page.tsx          # 記事一覧ページ（SSG）
│   │   └── [slug]/
│   │       └── page.tsx      # 記事詳細ページ（SSG）
│   └── ...
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── ...
```

## 🔧 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build**: SSG (Static Site Generation)

## 📝 記事の追加・更新

1. 必要なプロパティを設定（Title, Slug, Excerpt等）
2. Statusを "Published" に設定
3. 再ビルドで自動的にサイトに反映

## 🚀 パフォーマンス最適化

- 全ページがSSGでプリレンダリング
- 画像の最適化
- コード分割と遅延読み込み
- SEO対応のメタデータ

## 📞 サポート

ご質問やご要望がございましたら、お気軽にお問い合わせください。
