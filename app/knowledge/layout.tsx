import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERPNext導入・活用ナレッジ - 基本操作から応用まで｜MyHatch',
  description: 'ERPNext導入から活用まで、段階的に学べるナレッジ記事集。基本操作、カスタマイズ、他ERP比較など、実践的な情報を体系的にご紹介します。',
  keywords: 'ERPNext,ナレッジ,チュートリアル,導入,カスタマイズ,比較,使い方,設定方法',
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}