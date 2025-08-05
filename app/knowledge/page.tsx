import { Metadata } from 'next';
import { getArticles, Article } from '@/lib/notion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgeSidebar from '@/components/KnowledgeSidebar';
import KnowledgeTabNavigation from '@/components/KnowledgeTabNavigation';
import Link from 'next/link';
import {
  BookOpen,
  TrendingUp,
  Star,
  Clock,
  Tag,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ERPNextナレッジ | 導入から活用まで実践的な情報',
  description: 'ERPNextの導入から活用まで、段階的に学べる実践的な情報をお届けします。他ERPとの比較、チュートリアル、カスタマイズ方法など。',
  openGraph: {
    title: 'ERPNextナレッジ | 導入から活用まで実践的な情報',
    description: 'ERPNextの導入から活用まで、段階的に学べる実践的な情報をお届けします。',
    type: 'website',
  },
};

export default async function KnowledgePage() {
  const articles = await getArticles();

  const latestArticles = articles.sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const popularArticles = articles.filter(article => article.isPopular);
  const recommendedArticles = articles.filter(article => article.isRecommended);

  const categories = ['最新記事', '人気記事', 'おすすめシリーズ', 'カテゴリ別'];

  const ArticleCard = ({ article }: { article: Article }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
            {article.category}
          </span>
          {article.isRecommended && (
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          )}
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {article.readTime}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
        <Link href={`/knowledge/${article.slug}`}>
          {article.title}
        </Link>
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {article.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center text-xs text-gray-500">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/knowledge/${article.slug}`}
          className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium"
        >
          続きを読む
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );

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
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-trust-blue via-white to-trust-blue-dark py-16">
            <div className="container-width section-padding">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    ERPNext<span className="text-orange-500">ナレッジ</span>
                  </h1>
                  <h2 className="text-xl text-gray-700 font-medium">
                    導入から活用まで、段階的に学べる実践的な情報をお届けします
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談してみる
                  </Link>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="記事を検索..."
                      className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full sm:w-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="container-width section-padding py-12">
            {/* Tab Navigation */}
            <KnowledgeTabNavigation />

            {/* Latest Articles Section */}
            <section id="latest-articles" className="mb-16 scroll-mt-32">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">最新記事</h2>
                <Link href="/knowledge/latest" className="text-orange-600 hover:text-orange-700 font-medium">
                  すべて見る →
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {latestArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Popular Articles Section */}
            {popularArticles.length > 0 && (
              <section id="popular-articles" className="mb-16 scroll-mt-32">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">人気記事</h2>
                  <Link href="/knowledge/popular" className="text-orange-600 hover:text-orange-700 font-medium">
                    すべて見る →
                  </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {popularArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}

            {/* Recommended Series Section */}
            {recommendedArticles.length > 0 && (
              <section id="recommended-articles" className="mb-16 scroll-mt-32">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">おすすめシリーズ</h2>
                  <Link href="/knowledge/recommended" className="text-orange-600 hover:text-orange-700 font-medium">
                    すべて見る →
                  </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {recommendedArticles.slice(0, 2).map((article) => (
                    <div key={article.id} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <Star className="w-5 h-5 text-orange-500 fill-current" />
                        <span className="text-sm font-medium text-orange-700">おすすめ</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        <Link href={`/knowledge/${article.slug}`} className="hover:text-orange-600 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-700 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                          <span>{article.category}</span>
                        </div>
                        <Link
                          href={`/knowledge/${article.slug}`}
                          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                          読む
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Category Overview */}
            <section id="category-articles" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">カテゴリ別記事</h2>

              <div className="grid lg:grid-cols-4 gap-6">
                {['使ってみる', 'ERPの比較', 'チュートリアル', 'カスタマイズ'].map((category) => {
                  const categoryArticles = articles.filter(article => article.category === category);

                  return (
                    <div key={category} className="bg-white rounded-lg border border-gray-200 p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
                      <div className="space-y-3">
                        {categoryArticles.slice(0, 3).map((article) => (
                          <Link
                            key={article.id}
                            href={`/knowledge/${article.slug}`}
                            className="block text-sm text-gray-700 hover:text-orange-600 transition-colors"
                          >
                            {article.title}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/knowledge/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium mt-4"
                      >
                        もっと見る
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
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
                    ナレッジ記事で解決しない疑問は、無料相談でお気軽にご質問ください。
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