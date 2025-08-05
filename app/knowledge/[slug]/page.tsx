import { Metadata } from 'next';
import { getArticleBySlug, getAllArticleSlugs, Article } from '@/lib/notion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgeSidebar from '@/components/KnowledgeSidebar';
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
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: '記事が見つかりません | ERPNextナレッジ',
    };
  }

  return {
    title: `${article.title} | ERPNextナレッジ`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
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
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 ml-4">
            {line.substring(2)}
          </li>
        );
      }
      if (line.startsWith('1. ')) {
        return (
          <li key={index} className="text-gray-700 ml-4">
            {line.substring(3)}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <KnowledgeSidebar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container-width section-padding py-12">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/knowledge" className="hover:text-orange-600">
                    ナレッジ
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900">{article.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <article className="max-w-4xl mx-auto">
              <header className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                    {article.category}
                  </span>
                  {article.isRecommended && (
                    <div className="flex items-center text-yellow-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs ml-1">おすすめ</span>
                    </div>
                  )}
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {article.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(article.publishDate)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                  <button className="flex items-center hover:text-orange-600 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    シェア
                  </button>
                </div>

                {article.tags.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
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
                {article.content && renderContent(article.content)}
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

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                      <Share2 className="w-4 h-4 mr-2" />
                      シェア
                    </button>
                  </div>
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
      </div>

      <Footer />
    </div>
  );
} 