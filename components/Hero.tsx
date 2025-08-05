import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-trust-blue via-white to-trust-blue-dark py-16 lg:py-24">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                高額ERPに悩む前に、<br />
                <span className="text-orange-500">ERPNext</span>を<br />
                知らなきゃ損。
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                OSSでここまでできる。<br />
                本物のERP体験を、無料で。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="cta-primary inline-flex items-center justify-center text-lg">
                無料相談・デモ検証を申し込む
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-medium px-6 py-3 rounded-lg transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>1分でわかる操作デモ</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                ✅ 導入前のFit&Gap分析も無料　✅ オンライン対応OK　✅ 毎週火・木開催
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ERPNext実機デモ</h3>
                    <p className="text-sm text-gray-600">実際の操作画面をご覧いただけます</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-orange-500">100+</div>
                  <div className="text-xs text-gray-600">導入実績</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-500">5年</div>
                  <div className="text-xs text-gray-600">支援経験</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-500">無料</div>
                  <div className="text-xs text-gray-600">初回相談</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}