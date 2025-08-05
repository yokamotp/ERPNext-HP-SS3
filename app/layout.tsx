import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { cn } from '@/lib/utils';
import AOSInit from '@/components/AOSInit';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: 'MyHatch - ERPNext導入支援のプロフェッショナル',
  description: 'ERPNextの導入支援・カスタマイズ・トレーニングをワンストップで提供。無料相談・デモ検証から始めて、安心のERP導入を実現します。',
  keywords: 'ERPNext,ERP導入,システム導入支援,業務システム,オープンソース,MyHatch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={cn(notoSansJP.variable, "font-sans antialiased")}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}