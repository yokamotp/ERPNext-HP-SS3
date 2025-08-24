import { Metadata } from 'next';

import { getMDXArticles } from '@/lib/mdx';
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
  params: Promise<{
    slug: string;
  }>;
}





export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const mdxCategories = getMDXArticles();


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

      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <KnowledgeSidebar categories={mdxCategories} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="container-width section-padding py-12">

          </div>

        </main>

        {/* Right Sidebar - Table of Contents (Placeholder for now) */}
        <div className="w-full xl:w-80 xl:flex-shrink-0 hidden xl:block">
          <div className="xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:overflow-y-auto">
            <div className="bg-white border-l border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">目次</h3>
              <p className="text-sm text-gray-600 mt-2">右サイドバー（目次）は後で実装予定</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 