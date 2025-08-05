import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERPNext CRMとは？案件・営業管理の仕組みを育てるOSS CRM｜MyHatch',
  description: 'ERPNextのCRM機能をご紹介。営業・顧客・案件・見積などをまとめて一元管理できるOSSベースのCRM。中小企業の営業活動を「見える化・仕組み化」します。',
  keywords: 'ERPNext,CRM,営業管理,顧客管理,案件管理,見積管理,オープンソース,中小企業',
};

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}