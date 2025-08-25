'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MDXCategory } from '@/lib/mdx';

interface KnowledgeSidebarProps {
  categories: MDXCategory[];
  className?: string;
}

export default function KnowledgeSidebar({ categories, className = '' }: KnowledgeSidebarProps) {
  const pathname = usePathname();

  // 現在のURLに紐づくカテゴリを特定
  const activeCategoryName = useMemo(() => {
    const cat = categories.find(c =>
      c.articles.some(a => `/knowledge/${a.slug}` === pathname)
    );
    return cat?.name ?? null;
  }, [categories, pathname]);

  // ✅ 初期値に「アクティブカテゴリ」を含めておく（←これで“閉→開”のチラつきが消える）
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(() => {
    const init = new Set<string>(['ERPの比較']); // 初期で開いておきたい固定枠があれば残す
    if (activeCategoryName) init.add(activeCategoryName);
    return init;
  });

  // 初期化：localStorage → なければ既定 + 現在カテゴリを展開
  // localStorage 復元時も必ずアクティブカテゴリを含めて上書き
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kb_expanded');
      if (saved) {
        const next = new Set<string>(JSON.parse(saved));
        if (activeCategoryName) next.add(activeCategoryName);
        setExpandedCategories(next);
      }
    } catch { }
  }, [activeCategoryName]);

  // 永続化
  useEffect(() => {
    try {
      localStorage.setItem('kb_expanded', JSON.stringify(Array.from(expandedCategories)));
    } catch { }
  }, [expandedCategories]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      next.has(categoryName) ? next.delete(categoryName) : next.add(categoryName);
      return next;
    });
  };

  const toId = (s: string) => `cat-panel-${encodeURIComponent(s)}`;

  return (
    <nav className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-4">
        <div className="space-y-2">
          {categories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);

            return (
              <div key={category.name}>
                {/* セクション名のクリックだけで開閉 */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between w-full py-2 px-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={toId(category.name)}
                  id={toId(category.name)}
                >
                  <span className="pointer-events-none">{category.name}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-500 pointer-events-none" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-500 pointer-events-none" />
                  )}
                </button>

                {isExpanded && (
                  <div
                    id={`cat-panel-${category.name}`}
                    className="ml-4 mt-1 space-y-1"
                    role="region"
                    aria-label={`${category.name} の記事`}
                  >
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/knowledge/${article.slug}`}
                        className="block w-full py-2 px-3 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                        // ✅ 親のクリックに一切伝播させない保険
                        onClick={(e) => e.stopPropagation()}
                        onClickCapture={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
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
