'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { MDXCategory } from '@/lib/mdx';

interface KnowledgeSidebarProps {
  categories: MDXCategory[];
  className?: string;
}

export default function KnowledgeSidebar({ categories, className = '' }: KnowledgeSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['基本', 'ERPの比較']) // デフォルトで展開するカテゴリ
  );

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <nav className={`bg-white border-r border-gray-200 ${className}`}>

      <div className="p-4">
        <div className="space-y-2">
          {categories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);

            return (
              <div key={category.name}>
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between w-full py-2 px-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>{category.name}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1">
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/knowledge/${article.slug}`}
                        className="block w-full py-2 px-3 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                      >
                        {article.title}
                      </Link>
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