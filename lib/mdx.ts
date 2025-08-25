import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MDXArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  path: string;
  // メタ情報を追加
  author?: string;
  publishDate?: string;
  lastModified?: string;
  readTime?: string;
  tags?: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  status?: 'draft' | 'published' | 'archived';
}

export interface MDXCategory {
  name: string;
  articles: MDXArticle[];
}

export function getMDXArticles(): MDXCategory[] {
  const knowledgeDir = path.join(process.cwd(), 'content/knowledge');
  const categories: MDXCategory[] = [];

  // ルートディレクトリのMDXファイル
  const rootFiles = fs.readdirSync(knowledgeDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(knowledgeDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        slug: file.replace('.mdx', ''),
        title: data.title || file.replace('.mdx', ''),
        description: data.description || '',
        category: '基本',
        path: filePath,
        author: data.author || '',
        publishDate: data.publishDate || '',
        lastModified: data.lastModified || '',
        readTime: data.readTime || '15分',
        tags: data.tags || [],
        isPopular: data.isPopular || false,
        isRecommended: data.isRecommended || false,
        difficulty: data.difficulty || 'beginner',
        status: data.status || 'published'
      };
    });

  if (rootFiles.length > 0) {
    // ファイル名でソート（数字プレフィックス順）
    rootFiles.sort((a, b) => a.slug.localeCompare(b.slug));
    categories.push({
      name: '基本',
      articles: rootFiles
    });
  }

  // サブディレクトリのMDXファイル
  const subdirs = fs.readdirSync(knowledgeDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  subdirs.forEach(subdir => {
    const subdirPath = path.join(knowledgeDir, subdir);
    const files = fs.readdirSync(subdirPath)
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const filePath = path.join(subdirPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
          slug: `${subdir}/${file.replace('.mdx', '')}`,
          title: data.title || file.replace('.mdx', ''),
          description: data.description || '',
          category: subdir,
          path: filePath,
          author: data.author || '',
          publishDate: data.publishDate || '',
          lastModified: data.lastModified || '',
          readTime: data.readTime || '15分',
          tags: data.tags || [],
          isPopular: data.isPopular || false,
          isRecommended: data.isRecommended || false,
          difficulty: data.difficulty || 'beginner',
          status: data.status || 'published'
        };
      });

    if (files.length > 0) {
      // ファイル名でソート（数字プレフィックス順）
      files.sort((a, b) => a.slug.localeCompare(b.slug));
      categories.push({
        name: getCategoryDisplayName(subdir),
        articles: files
      });
    }
  });

  return categories;
}

export function getMDXArticleBySlug(slug: string): { data: any; content: string } | null {
  try {
    const knowledgeDir = path.join(process.cwd(), 'content/knowledge');

    // ルートディレクトリのファイルをチェック
    const rootPath = path.join(knowledgeDir, `${slug}.mdx`);

    if (fs.existsSync(rootPath)) {
      const fileContent = fs.readFileSync(rootPath, 'utf8');
      const { data, content } = matter(fileContent);
      return { data, content };
    }

    // サブディレクトリのファイルをチェック
    const subdirs = fs.readdirSync(knowledgeDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const subdir of subdirs) {
      // slugがsubdirで始まる場合（例: "customization/develop-app"）
      if (slug.startsWith(`${subdir}/`)) {
        const fileName = slug.substring(subdir.length + 1); // "+1"は"/"をスキップ
        const filePath = path.join(knowledgeDir, subdir, `${fileName}.mdx`);

        if (fs.existsSync(filePath)) {

          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContent);
          return { data, content };
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

export function getAllMDXSlugs(): string[] {
  const knowledgeDir = path.join(process.cwd(), 'content/knowledge');
  const slugs: string[] = [];

  // ルートディレクトリのファイル
  const rootFiles = fs.readdirSync(knowledgeDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
  slugs.push(...rootFiles);

  // サブディレクトリのファイル
  const subdirs = fs.readdirSync(knowledgeDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  subdirs.forEach(subdir => {
    const subdirPath = path.join(knowledgeDir, subdir);
    const files = fs.readdirSync(subdirPath)
      .filter(file => file.endsWith('.mdx'))
      .map(file => `${subdir}/${file.replace('.mdx', '')}`);
    slugs.push(...files);
  });

  return slugs;
}

function getCategoryDisplayName(dirName: string): string {
  const nameMap: { [key: string]: string } = {
    'erp-comparison': 'ERPの比較',
    'customization': 'カスタマイズ',
    'tutorial': 'チュートリアル',
    'implementation': '導入',
    'basic-operations': '基本操作',
    '01basic': 'はじめに'

  };
  return nameMap[dirName] || dirName;
}

// 階層的なパンくずリストを生成する関数
export function getBreadcrumbItems(slug: string): Array<{ name: string; href: string }> {
  const items = [
    { name: 'ナレッジ', href: '/knowledge' }
  ];

  // ルートディレクトリのファイルの場合
  if (!slug.includes('/')) {
    return items;
  }

  // サブディレクトリのファイルの場合
  const parts = slug.split('/');
  const category = parts[0];
  const categoryDisplayName = getCategoryDisplayName(category);

  // カテゴリのデフォルト記事へのリンク
  items.push({
    name: categoryDisplayName,
    href: `/knowledge/${category}/index`
  });

  // ファイル名がindexでない場合、ファイル名も追加
  if (parts[1] && parts[1] !== 'index') {
    // ファイルのタイトルを取得（簡易版）
    const fileName = parts[1];
    items.push({
      name: fileName,
      href: `/knowledge/${slug}`
    });
  }

  return items;
}
