import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  isPopular: boolean;
  isRecommended: boolean;
  content?: string;
}

export async function getArticles(): Promise<Article[]> {
  if (!process.env.NOTION_SECRET_KEY || !DATABASE_ID) {
    console.warn('Notion API credentials not configured. Using fallback data.');
    return getFallbackArticles();
  }

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'published',
        checkbox: {
          equals: true
        }
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending'
        }
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || '',
        slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        category: properties.Category?.select?.name || '',
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        readTime: properties.ReadTime?.rich_text?.[0]?.plain_text || '5分',
        publishDate: properties.PublishDate?.date?.start || '',
        isPopular: properties.IsPopular?.checkbox || false,
        isRecommended: properties.IsRecommended?.checkbox || false,
      };
    });
  } catch (error) {
    console.error('Error fetching articles from Notion:', error);
    console.warn('Using fallback data due to Notion API error.');
    return getFallbackArticles();
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!process.env.NOTION_SECRET_KEY || !DATABASE_ID) {
    console.warn('Notion API credentials not configured. Using fallback data.');
    const fallbackArticles = getFallbackArticles();
    return fallbackArticles.find(article => article.slug === slug) || null;
  }

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published'
            }
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug
            }
          }
        ]
      }
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0] as any;
    const properties = page.properties;

    // 記事の詳細内容を取得
    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
    });

    const content = blocksResponse.results
      .map((block: any) => {
        if (block.type === 'paragraph') {
          return block.paragraph.rich_text.map((text: any) => text.plain_text).join('');
        }
        if (block.type === 'heading_1') {
          return `# ${block.heading_1.rich_text.map((text: any) => text.plain_text).join('')}`;
        }
        if (block.type === 'heading_2') {
          return `## ${block.heading_2.rich_text.map((text: any) => text.plain_text).join('')}`;
        }
        if (block.type === 'heading_3') {
          return `### ${block.heading_3.rich_text.map((text: any) => text.plain_text).join('')}`;
        }
        if (block.type === 'bulleted_list_item') {
          return `- ${block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
        }
        if (block.type === 'numbered_list_item') {
          return `1. ${block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
        }
        return '';
      })
      .join('\n\n');

    return {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || '',
      slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: properties.Category?.select?.name || '',
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      readTime: properties.ReadTime?.rich_text?.[0]?.plain_text || '5分',
      publishDate: properties.PublishDate?.date?.start || '',
      isPopular: properties.IsPopular?.checkbox || false,
      isRecommended: properties.IsRecommended?.checkbox || false,
      content,
    };
  } catch (error) {
    console.error('Error fetching article from Notion:', error);
    console.warn('Using fallback data due to Notion API error.');
    const fallbackArticles = getFallbackArticles();
    return fallbackArticles.find(article => article.slug === slug) || null;
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const articles = await getArticles();
  return articles.map(article => article.slug);
}

// フォールバック用のサンプルデータ
function getFallbackArticles(): Article[] {
  return [
    {
      id: '1',
      title: 'ERPNextとは？中小企業が選ぶべき理由',
      slug: 'erpnext-introduction',
      excerpt: 'ERPNextの基本概念から、なぜ中小企業に適しているのかを分かりやすく解説します。',
      category: '使ってみる',
      tags: ['基本', 'おすすめ'],
      readTime: '5分',
      publishDate: '2025-01-15',
      isPopular: true,
      isRecommended: true,
      content: `# ERPNextとは？

ERPNextは、中小企業向けに設計されたオープンソースのERPシステムです。

## 中小企業に適している理由

- コストが安い
- カスタマイズが容易
- 日本語対応が充実

## 主要機能

1. 会計管理
2. 在庫管理
3. 顧客管理
4. 人事管理`
    },
    {
      id: '2',
      title: '他ERPとの比較：SAP vs NetSuite vs ERPNext',
      slug: 'erp-comparison',
      excerpt: '主要ERPシステムの機能・コスト・導入期間を詳細比較。あなたの会社に最適な選択肢は？',
      category: 'ERPの比較',
      tags: ['比較', 'コスト'],
      readTime: '8分',
      publishDate: '2025-01-12',
      isPopular: true,
      isRecommended: true,
      content: `# ERPシステム比較

## コスト比較

- SAP: 高額
- NetSuite: 中程度
- ERPNext: 低コスト

## 機能比較

各システムの特徴を詳しく解説します。`
    },
    {
      id: '3',
      title: '売上管理の流れ：見積から請求まで',
      slug: 'sales-management-flow',
      excerpt: 'ERPNextで売上管理を行う際の基本的な流れを、実際の画面を使って説明します。',
      category: 'チュートリアル',
      tags: ['売上', '基本操作'],
      readTime: '10分',
      publishDate: '2025-01-10',
      isPopular: false,
      isRecommended: true,
      content: `# 売上管理の流れ

## 1. 見積作成

見積書の作成方法を説明します。

## 2. 受注処理

受注から出荷までの流れ。

## 3. 請求処理

請求書の作成と管理。`
    }
  ];
} 