'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

export default function News() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const newsItems = [
    {
      date: '2025/1/15',
      type: 'お知らせ',
      title: '無料！ERPNextの駆け込み寺開始　毎週火曜 15:30~17:00',
      tag: 'new'
    },
    {
      date: '2025/1/10',
      type: 'ブログ',
      title: 'ERPNext v15の新機能解説セミナーを開催します',
      tag: 'event'
    },
    {
      date: '2025/1/5',
      type: 'ニュース',
      title: '年始のERPNext基礎トレーニングスケジュール公開',
      tag: null
    },
    {
      date: '2024/12/28',
      type: 'お知らせ',
      title: '年末年始休業のお知らせ（12/29-1/3）',
      tag: null
    },
    {
      date: '2024/12/20',
      type: 'ブログ',
      title: 'ERPNext導入事例：製造業A社の業務効率化成功事例',
      tag: null
    },
    {
      date: '2024/12/15',
      type: 'お知らせ',
      title: 'ERPNext v15アップデート対応サービス開始',
      tag: null
    },
    {
      date: '2024/12/10',
      type: 'ニュース',
      title: '中小企業向けERPNext導入支援パッケージをリリース',
      tag: null
    },
    {
      date: '2024/12/5',
      type: 'ブログ',
      title: 'Frappe CRMとSalesforceの機能比較レポート公開',
      tag: null
    },
    {
      date: '2024/11/30',
      type: 'お知らせ',
      title: '12月のERPNext無料相談会スケジュール',
      tag: null
    },
    {
      date: '2024/11/25',
      type: 'ニュース',
      title: 'ERPNext日本語化プロジェクト進捗報告',
      tag: null
    }
  ];

  const getTagColor = (tag: string | null) => {
    switch (tag) {
      case 'new':
        return 'bg-orange-500 text-white';
      case 'event':
        return 'bg-blue-500 text-white';
      default:
        return '';
    }
  };

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  // ページネーション計算
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newsItems.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setExpandedItems(new Set()); // ページ変更時に展開状態をリセット
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ニュース＆お知らせ</h2>
          <p className="text-gray-600">ERPNextに関する最新情報をお知らせします</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* PC表示：通常のリスト表示 */}
          <div className="hidden lg:block">
            <div className="divide-y divide-gray-100">
              {currentItems.map((item, index) => (
                <div key={index} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors bg-white border-b border-gray-100 last:border-b-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                        {item.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                          {item.type}
                        </span>
                        {item.tag && (
                          <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${getTagColor(item.tag)}`}>
                            {item.tag.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="text-gray-900 font-medium leading-relaxed">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ページネーション（PC用） */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => goToPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'border border-gray-300 hover:bg-white text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* モバイル・タブレット表示：スクロール可能なリスト */}
          <div className="lg:hidden">
            <div 
              className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
              style={{ height: '400px' }}
            >
              <div className="divide-y divide-gray-100">
                {newsItems.map((item, index) => (
                  <div key={index} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors bg-white border-b border-gray-100 last:border-b-0">
                    {/* デスクトップレイアウト（タブレット用） */}
                    <div className="hidden sm:flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                          {item.date}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                            {item.type}
                          </span>
                          {item.tag && (
                            <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${getTagColor(item.tag)}`}>
                              {item.tag.toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="text-gray-900 font-medium leading-relaxed">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    
                    {/* モバイルレイアウト */}
                    <div className="sm:hidden space-y-3">
                    {/* 日付・カテゴリ・タグ行 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-500 font-medium">{item.date}</span>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      {item.tag && (
                        <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${getTagColor(item.tag)}`}>
                          {item.tag.toUpperCase()}
                        </span>
                      )}
                    </div>
                    
                    {/* タイトル・本文 */}
                    <div className="space-y-2">
                      <h3 className="text-gray-900 font-semibold leading-relaxed text-sm">
                        {item.title}
                      </h3>
                      
                      {/* 本文プレビュー（2行まで） */}
                      <div className="text-gray-600 text-sm leading-relaxed">
                        <div className={`${expandedItems.has(index) ? '' : 'line-clamp-2'}`}>
                          {/* サンプル本文 - 実際の実装では item.content などから取得 */}
                          {index === 0 && "ERPNextの無料相談会を毎週火曜日に開催しています。導入検討中の企業様、現在の業務課題でお悩みの方、お気軽にご参加ください。オンラインでの参加も可能です。"}
                          {index === 1 && "ERPNext v15の新機能について詳しく解説するセミナーを開催いたします。新しいダッシュボード機能、改善されたワークフロー、モバイル対応の強化など、最新の機能をデモを交えてご紹介します。"}
                          {index === 2 && "年始のERPNext基礎トレーニングのスケジュールを公開しました。初心者向けから上級者向けまで、レベル別のトレーニングコースをご用意しています。"}
                          {index >= 3 && "ERPNextに関する最新情報をお届けします。導入事例、機能紹介、アップデート情報など、お客様に役立つ情報を定期的に発信しています。"}
                        </div>
                        
                        {/* 続きを読む/閉じるボタン */}
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="inline-flex items-center mt-2 text-orange-600 hover:text-orange-700 text-xs font-medium transition-colors"
                        >
                          {expandedItems.has(index) ? (
                            <>
                              <span>閉じる</span>
                              <ChevronUp className="w-3 h-3 ml-1" />
                            </>
                          ) : (
                            <>
                              <span>続きを読む</span>
                              <ChevronDown className="w-3 h-3 ml-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}