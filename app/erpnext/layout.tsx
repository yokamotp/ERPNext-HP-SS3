import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERPNextとは？中小企業に選ばれるOSS ERPの理由｜MyHatch',
  description: 'ERPNextは高額ERPの代替として注目されるオープンソースERP。会計・CRM・人事・在庫管理を統合し、段階導入でコストを抑えながら業務効率化を実現します。',
  keywords: 'ERPNext,ERP,オープンソース,業務システム,会計システム,CRM,在庫管理,中小企業',
};

export default function ERPNextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}