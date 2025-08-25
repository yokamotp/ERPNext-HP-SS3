import { Metadata } from 'next';
import { getMDXArticleBySlug, getAllMDXSlugs, getMDXArticles, getBreadcrumbItems } from '@/lib/mdx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgeSidebar from '@/components/KnowledgeSidebar';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  Tag,
  Calendar,
  Star,
  Share2
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllMDXSlugs();
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug.join('/');
  const mdxArticle = getMDXArticleBySlug(slugString);

  if (!mdxArticle) {
    return {
      title: '記事が見つかりません | ERPNextナレッジ',
    };
  }

  return {
    title: `${mdxArticle.data.title} | ERPNextナレッジ`,
    description: mdxArticle.data.description || '',
    openGraph: {
      title: mdxArticle.data.title,
      description: mdxArticle.data.description || '',
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const slugString = slug.join('/');
  const mdxArticle = getMDXArticleBySlug(slugString);
  const mdxCategories = getMDXArticles();

  if (!mdxArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container-width section-padding py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              記事が見つかりません
            </h1>
            <p className="text-gray-600 mb-8">
              お探しの記事は存在しないか、削除された可能性があります。
            </p>
            <Link
              href="/knowledge"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ナレッジ一覧に戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderMDXContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // 見出しの処理
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
            {line.substring(4)}
          </h3>
        );
      }
      if (line.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mt-3 mb-2">
            {line.substring(5)}
          </h4>
        );
      }

      // リストの処理
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 ml-4 mb-1">
            {line.substring(2)}
          </li>
        );
      }
      if (line.startsWith('1. ')) {
        return (
          <li key={index} className="text-gray-700 ml-4 mb-1">
            {line.substring(3)}
          </li>
        );
      }

      // 空行の処理
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // リンクの処理（Markdown形式）
      if (line.includes('[') && line.includes('](') && line.includes(')')) {
        const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const [fullMatch, text, url] = linkMatch;
          const beforeLink = line.substring(0, line.indexOf(fullMatch));
          const afterLink = line.substring(line.indexOf(fullMatch) + fullMatch.length);

          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {beforeLink}
              <Link href={url} className="text-orange-600 hover:text-orange-700 underline">
                {text}
              </Link>
              {afterLink}
            </p>
          );
        }
      }

      // 太字の処理
      if (line.includes('**') && line.includes('**')) {
        const boldMatch = line.match(/\*\*([^*]+)\*\*/g);
        if (boldMatch) {
          let processedLine = line;
          boldMatch.forEach(match => {
            const text = match.replace(/\*\*/g, '');
            processedLine = processedLine.replace(match, `<strong>${text}</strong>`);
          });

          return (
            <p
              key={index}
              className="text-gray-700 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: processedLine }}
            />
          );
        }
      }

      // 通常の段落
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  // カテゴリ名を取得
  const getCategoryDisplayName = (category: string) => {
    const nameMap: { [key: string]: string } = {
      'erp-comparison': 'ERPの比較',
      'customization': 'カスタマイズ',
      'tutorial': 'チュートリアル',
      'implementation': '導入',
      'basic-operations': '基本操作'
    };
    return nameMap[category] || category;
  };

  const category = slug.length > 1 ? slug[0] : '基本';
  const categoryDisplayName = getCategoryDisplayName(category);

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '初心者向け';
      case 'intermediate':
        return '中級者向け';
      case 'advanced':
        return '上級者向け';
      default:
        return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <KnowledgeSidebar categories={mdxCategories} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="container-width section-padding py-12">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                {getBreadcrumbItems(slug.join('/')).map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                    {index === getBreadcrumbItems(slug.join('/')).length - 1 ? (
                      <span className="text-gray-900">{item.name}</span>
                    ) : (
                      <Link href={item.href} className="hover:text-orange-600">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Article Header */}
            <article className="max-w-4xl mx-auto">
              <header className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                    {categoryDisplayName}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {mdxArticle.data.title}
                </h1>

                {mdxArticle.data.description && (
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {mdxArticle.data.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {mdxArticle.data.readTime || '15分'}
                  </div>
                  {mdxArticle.data.lastModified && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      最終更新: {new Date(mdxArticle.data.lastModified).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  )}
                </div>
                {mdxArticle.data.tags && mdxArticle.data.tags.length > 0 && (
                  <div className="flex items-center space-x-2 mb-6">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {mdxArticle.data.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {renderMDXContent(mdxArticle.content)}
              </div>

              {/* Article Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <Link
                    href="/knowledge"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    ナレッジ一覧に戻る
                  </Link>
                </div>
              </footer>
            </article>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 border-t border-orange-200">
            <div className="container-width section-padding">
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    まだ疑問が残りますか？
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    この記事で解決しない疑問は、無料相談でお気軽にご質問ください。
                    ERPNext導入の専門家が直接お答えします。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談を予約する
                  </Link>
                  <Link href="/contact" className="cta-secondary text-lg">
                    🟦 お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <div className="w-full xl:w-80 xl:flex-shrink-0 hidden xl:block">
          <div className="xl:sticky xl:top-32 xl:h-[calc(100vh-8rem)] xl:overflow-y-auto">
            <TableOfContents />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 