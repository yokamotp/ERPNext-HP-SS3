import { Metadata } from 'next';

import { getMDXArticles } from '@/lib/mdx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgeSidebar from '@/components/KnowledgeSidebar';
import KnowledgeTabNavigation from '@/components/KnowledgeTabNavigation';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import {
  BookOpen,
  TrendingUp,
  Star,
  Clock,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Calendar
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

  const mdxCategories = getMDXArticles();

  // 「はじめに」の記事を取得
  const introductionArticle = mdxCategories
    .flatMap(category => category.articles)
    .find(article => article.slug === 'introduction');


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
                <li className="text-gray-900">ナレッジ</li>
              </ol>
            </nav>

            {/* Introduction Article */}
            {introductionArticle && (
              <section className="mb-12">
                <div className="bg-white rounded-lg border border-gray-200 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                      基本
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    {introductionArticle.title}
                  </h1>

                  {introductionArticle.description && (
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {introductionArticle.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {introductionArticle.readTime || '15分'}
                    </div>
                    {introductionArticle.lastModified && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        最終更新: {new Date(introductionArticle.lastModified).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/knowledge/${introductionArticle.slug}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    続きを読む
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </section>
            )}

            {/* Categories Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">カテゴリ別記事</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mdxCategories.map((category) => (
                  <div key={category.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.articles.length}件の記事
                    </p>
                    <div className="space-y-2 mb-4">
                      {category.articles.slice(0, 3).map((article) => (
                        <Link
                          key={article.slug}
                          href={`/knowledge/${article.slug}`}
                          className="block text-sm text-gray-700 hover:text-orange-600 transition-colors"
                        >
                          • {article.title}
                        </Link>
                      ))}
                      {category.articles.length > 3 && (
                        <span className="text-xs text-gray-500">
                          他 {category.articles.length - 3}件
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/knowledge/${category.name === '基本' ? 'introduction' : `${category.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}/index`}`}
                      className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium"
                    >
                      カテゴリを見る
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
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