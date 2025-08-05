'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Phone, Home, Building2, Grid3X3, Users, DollarSign as Yen, BookOpen, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const YenIcon = () => (
    <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>￥</span>
  );

  const navigationItems = [
    { href: '/', label: 'ホーム', icon: Home },
    { href: '/company', label: '会社案内', icon: Building2 },
    { href: '/erpnext', label: 'ERPNext', icon: Grid3X3 },
    { href: '/crm', label: 'CRM', icon: Users },
    { href: '/hr-payroll', label: 'HR', icon: Users },
    { href: '/pricing', label: '価格', icon: YenIcon },
    { href: '/knowledge', label: 'ナレッジ記事', icon: BookOpen },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo_bee1.png"
                alt="MY HATCHロゴ"
                width={40}
                height={40}
                priority
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MyHatch</h1>
              <p className="text-xs text-gray-600">ERPNext導入支援</p>
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">03-1234-5678</span>
            </div>
            <div className="text-xs">
              平日 9:00-18:00
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="メニューを開く"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-gray-100 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link flex items-center space-x-2 transition-colors duration-200 ${isActive(item.href)
                    ? 'text-orange-600 font-semibold border-b-2 border-orange-500 pb-1'
                    : 'text-gray-600 hover:text-orange-500'
                    }`}
                >
                  <item.icon className="w-4 h-4 stroke-2" />
                  {item.href === '/' ? (
                    <span className="sr-only">ホーム</span>
                  ) : (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-3">
              <a href="/#consultation-section" className="cta-primary text-sm">
                🟧 無料相談・デモ検証
              </a>
              <a href="/#contact-section" className="cta-secondary text-sm">
                🟦 資料請求・お問い合わせ
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="py-4">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.href)
                      ? 'bg-orange-50 text-orange-600 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500'
                      }`}
                  >
                    <item.icon className="w-5 h-5 stroke-2" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="px-4 py-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">03-1234-5678</span>
                  </div>
                  <div className="text-xs ml-6">平日 9:00-18:00</div>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-4 px-4 space-y-3">
                <a
                  href="/#consultation-section"
                  onClick={closeMobileMenu}
                  className="block w-full text-center cta-primary"
                >
                  🟧 無料相談・デモ検証
                </a>
                <a
                  href="/#contact-section"
                  onClick={closeMobileMenu}
                  className="block w-full text-center cta-secondary"
                >
                  🟦 資料請求・お問い合わせ
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}