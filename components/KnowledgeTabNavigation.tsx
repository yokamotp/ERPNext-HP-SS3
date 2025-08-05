'use client';

import { useState, useEffect } from 'react';

interface TabItem {
  id: string;
  label: string;
  href: string;
}

const tabs: TabItem[] = [
  { id: 'latest-articles', label: '最新記事', href: '#latest-articles' },
  { id: 'popular-articles', label: '人気記事', href: '#popular-articles' },
  { id: 'recommended-articles', label: 'おすすめシリーズ', href: '#recommended-articles' },
  { id: 'category-articles', label: 'カテゴリ別', href: '#category-articles' }
];

export default function KnowledgeTabNavigation() {
  const [activeTab, setActiveTab] = useState('latest-articles');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // IntersectionObserver for section visibility
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.5, 1]
      }
    );

    // IntersectionObserver for sticky behavior
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(!entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px 0px -100% 0px',
        threshold: 0
      }
    );

    // Observe sections
    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    // Observe hero section
    const heroSection = document.querySelector('section'); // First section (Hero)
    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  const handleTabClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Spacer when sticky */}
      {isSticky && <div className="h-16 mb-8" />}
      
      {/* Tab Navigation */}
      <div className={`mb-8 transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm' 
          : ''
      }`}>
        <div className={`${isSticky ? 'container-width section-padding py-4' : ''}`}>
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}