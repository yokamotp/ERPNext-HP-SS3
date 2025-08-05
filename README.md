# ERPNext-HP3-SSG-v2

Next.js 14 + Notion API + Tailwind CSS を使用したSSG（静的サイト生成）構成のナレッジサイトです。

## 🚀 特徴

- **SSG構成**: 全ページが静的HTMLとして生成され、SEOに最適化
- **Notion CMS**: 記事データはNotion APIから自動取得
- **高速表示**: プリレンダリングされたHTMLで高速な表示を実現
- **SEO対応**: メタデータ、OGP、構造化データに対応

## 📋 必要な環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# Notion API Configuration
NOTION_SECRET_KEY=your_notion_secret_key_here
NOTION_DATABASE_ID=your_notion_database_id_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Notion API設定手順

1. **Notion Integration の作成**
   - [Notion Developers](https://developers.notion.com/) にアクセス
   - "New integration" をクリック
   - 適切な権限を設定（Read content が必要）

2. **Database の設定**
   - Notionでデータベースを作成
   - 以下のプロパティを設定：
     - `Title` (Title)
     - `Slug` (Text)
     - `Excerpt` (Text)
     - `Category` (Select)
     - `Tags` (Multi-select)
     - `ReadTime` (Text)
     - `PublishDate` (Date)
     - `Status` (Select: Draft, Published)
     - `IsPopular` (Checkbox)
     - `IsRecommended` (Checkbox)

3. **Integration の共有**
   - データベースページで "Share" をクリック
   - 作成したIntegrationを追加

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
├── lib/
│   └── notion.ts             # Notion API ユーティリティ
└── ...
```

## 🔧 技術スタック

- **Framework**: Next.js 14 (App Router)
- **CMS**: Notion API
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build**: SSG (Static Site Generation)

## 📝 記事の追加・更新

1. Notionデータベースに新しい記事を追加
2. 必要なプロパティを設定（Title, Slug, Excerpt等）
3. Statusを "Published" に設定
4. 再ビルドで自動的にサイトに反映

## 🚀 パフォーマンス最適化

- 全ページがSSGでプリレンダリング
- 画像の最適化
- コード分割と遅延読み込み
- SEO対応のメタデータ

## 📞 サポート

ご質問やご要望がございましたら、お気軽にお問い合わせください。
