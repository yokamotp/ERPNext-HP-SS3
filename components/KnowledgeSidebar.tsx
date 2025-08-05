'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface KnowledgeCategory {
  title: string;
  articles: string[];
}

const knowledgeCategories: KnowledgeCategory[] = [
  {
    title: '使ってみる',
    articles: [
      'ERPNextとは？',
      '最初の設定',
      '基本的な操作方法',
      'ユーザー管理の基本'
    ]
  },
  {
    title: 'ERPの比較',
    articles: [
      '他ERPとの比較',
      'コスト分析',
      '機能比較表'
    ]
  },
  {
    title: 'ERPNextを知る',
    articles: [
      'システム構成',
      'モジュール一覧',
      'ワークフロー機能',
      'レポート機能'
    ]
  },
  {
    title: 'チュートリアル',
    articles: [
      '売上管理の流れ',
      '購買管理の流れ',
      '在庫管理の基本',
      '会計設定'
    ]
  },
  {
    title: 'カスタマイズ',
    articles: [
      'カスタムフィールド',
      'カスタムスクリプト',
      '印刷フォーマット',
      'メールテンプレート'
    ]
  },
  {
    title: 'アプリを開発する',
    articles: [
      'Frappeフレームワーク',
      'アプリ構造',
      'API開発',
      'デプロイメント'
    ]
  },
  {
    title: '導入',
    articles: [
      '導入計画',
      'データ移行',
      'ユーザー研修',
      '本稼働'
    ]
  },
  {
    title: 'よくある質問',
    articles: [
      '一般的な質問',
      '技術的な質問',
      '料金に関する質問',
      'サポートについて'
    ]
  }
];

interface KnowledgeSidebarProps {
  className?: string;
}

export default function KnowledgeSidebar({ className = '' }: KnowledgeSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['使ってみる', 'ERPの比較']) // デフォルトで展開するカテゴリ
  );

  const toggleCategory = (categoryTitle: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryTitle)) {
      newExpanded.delete(categoryTitle);
    } else {
      newExpanded.add(categoryTitle);
    }
    setExpandedCategories(newExpanded);
  };

  const handleArticleClick = (articleTitle: string) => {
    // 実際の実装では記事ページへのナビゲーション
    console.log(`Navigate to article: ${articleTitle}`);
  };

  return (
    <nav className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">ナレッジ記事</h3>
        <p className="text-sm text-gray-600 mt-1">カテゴリ別に学習</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-2">
          {knowledgeCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.title);
            
            return (
              <div key={category.title}>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="flex items-center justify-between w-full py-2 px-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>{category.title}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1">
                    {category.articles.map((article) => (
                      <button
                        key={article}
                        onClick={() => handleArticleClick(article)}
                        className="block w-full py-2 px-3 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                      >
                        {article}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}