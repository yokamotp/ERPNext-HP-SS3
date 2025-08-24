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

  const mdxCategories = getMDXArticles();

  // デバッグ用: MDXデータの確認
  console.log('MDX Categories:', JSON.stringify(mdxCategories, null, 2));

  // 「はじめに」の記事を取得
  const introductionArticle = mdxCategories
    .flatMap(category => category.articles)
    .find(article => article.slug === 'introduction');

  // const latestArticles = articles.sort((a, b) =>
  //   new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  // );

  // const popularArticles = articles.filter(article => article.isPopular);
  // const recommendedArticles = articles.filter(article => article.isRecommended);

  // const categories = ['最新記事', '人気記事', 'おすすめシリーズ', 'カテゴリ別'];

  // const ArticleCard = ({ article }: { article: Article }) => (
  //   <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
  //     <div className="flex items-start justify-between mb-3">
  //       <div className="flex items-center space-x-2">
  //         <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
  //           {article.category}
  //         </span>
  //         {article.isRecommended && (
  //           <Star className="w-4 h-4 text-yellow-500 fill-current" />
  //         )}
  //       </div>
  //       <div className="flex items-center text-xs text-gray-500">
  //         <Clock className="w-3 h-3 mr-1" />
  //         {article.readTime}
  //       </div>
  //     </div>

  //     <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
  //       <Link href={`/knowledge/${article.slug}`}>
  //         {article.title}
  //       </Link>
  //     </h3>

  //     <p className="text-gray-600 text-sm mb-4 line-clamp-2">
  //       {article.excerpt}
  //     </p>

  //     <div className="flex items-center justify-between">
  //       <div className="flex items-center space-x-2">
  //         {article.tags.map((tag) => (
  //           <span key={tag} className="inline-flex items-center text-xs text-gray-500">
  //             <Tag className="w-3 h-3 mr-1" />
  //             {tag}
  //           </span>
  //         ))}
  //       </div>
  //       <Link
  //         href={`/knowledge/${article.slug}`}
  //         className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium"
  //       >
  //         続きを読む
  //         <ArrowRight className="w-4 h-4 ml-1" />
  //       </Link>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <KnowledgeSidebar categories={mdxCategories} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">


          {/* Content Sections */}
          <div className="container-width section-padding py-12">
            {/* Introduction Article Section */}
            {introductionArticle && (
              <section id="introduction" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center space-x-2 mb-6">
                    <BookOpen className="w-6 h-6 text-orange-500" />
                    <span className="text-sm font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
                      基本
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {introductionArticle.title}
                  </h2>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {introductionArticle.description}
                  </p>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      このガイドは、ERPNextの導入から活用まで、段階的に学べる実践的な情報を提供することを目的としています。中小企業から大企業まで、幅広い規模の企業で活用できるERPNextの魅力と実用性を、実際の業務フローに沿って解説していきます。
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">このガイドの構成</h3>
                    <ul className="space-y-2 mb-6">
                      <li><strong>基本セクション</strong>: ERPNextとは？、基本的な操作方法、ユーザー管理の基本</li>
                      <li><strong>ERPの比較セクション</strong>: 他ERPとの比較、コスト分析、機能比較表</li>
                      <li><strong>チュートリアルセクション</strong>: 売上管理、購買管理、在庫管理の流れ</li>
                      <li><strong>カスタマイズセクション</strong>: カスタムフィールド、スクリプト、アプリ開発</li>
                      <li><strong>導入セクション</strong>: 導入計画、データ移行、ユーザー研修</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                      <p className="text-blue-800">
                        <strong>学習のポイント:</strong> 理論だけでなく、実際の画面操作を重視し、実際の業務フローに沿った学習を提供します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        15分
                      </span>
                      <span>基本</span>
                    </div>
                    <Link
                      href={`/knowledge/${introductionArticle.slug}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                    >
                      詳しく読む
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* Tab Navigation */}
            <KnowledgeTabNavigation />

            {/*  */}


          </div>


        </main>

        {/* Right Sidebar - Table of Contents */}
        <div className="w-full xl:w-80 xl:flex-shrink-0 hidden xl:block">
          <div className="xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:overflow-y-auto">
            <TableOfContents />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}