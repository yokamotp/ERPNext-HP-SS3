'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // ページ内のh2タグから目次を生成
    const headings = document.querySelectorAll('h2');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      let id = heading.id;
      
      // IDが設定されていない場合は自動生成
      if (!id) {
        id = `heading-${index}`;
        heading.id = id;
      }

      // スクロール時のオフセット調整用のクラスを追加
      heading.classList.add('scroll-mt-24');

      items.push({
        id,
        text: heading.textContent || '',
        level
      });
    });

    setTocItems(items);
  }, []);

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0
      }
    );

    // 各見出し要素を監視対象に追加
    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className={className}>
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">目次</h3>
      </div>
      
      <div className="p-4">
        <ul className="space-y-2">
          {tocItems.map(({ id, text, level }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`
                  block w-full text-left py-3 px-4 rounded-lg text-sm transition-all duration-200
                  ${activeId === id 
                    ? 'bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-500 pl-3' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }
                  font-medium
                `}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}