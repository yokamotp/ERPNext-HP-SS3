import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FrappeHR - 採用から給与まで一元管理するOSS人事システム｜MyHatch',
  description: 'FrappeHRで人事業務を仕組み化。採用・勤怠・給与・評価を統合管理し、ジョブカンやSmartHRなど複数サービスのコストを削減。中小企業の人事DXを支援します。',
  keywords: 'FrappeHR,人事システム,給与計算,勤怠管理,採用管理,人事評価,オープンソース,中小企業,人事DX',
};

export default function HRPayrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}