import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERPNext導入支援の料金プラン - 段階的導入で安心の価格体系｜MyHatch',
  description: 'ERPNext導入支援の料金プランをご紹介。無料相談から本格導入まで、お客様の状況に合わせた段階的なプランをご用意。OSS活用で高額ライセンス費用を削減します。',
  keywords: 'ERPNext,導入支援,料金,価格,プラン,OSS,コスト削減,Fit&Gap,段階導入',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}