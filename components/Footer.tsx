import Link from 'next/link';
import { Database, Phone, Mail, MapPin, Facebook, Twitter, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper Footer */}
      <div className="py-12 border-b border-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-8">
            <div>
              <p className="text-xl font-medium text-gray-300 mb-2">
                ERPNext導入支援のプロフェッショナル - MyHatch
              </p>
              <p className="text-gray-400">
                お客様の業務に最適なERPソリューションをご提案します
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consultation" className="cta-primary text-lg">
                🟧 無料相談・デモ検証
              </Link>
              <Link href="/contact" className="cta-secondary text-lg">
                🟦 資料請求・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="py-12">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MyHatch</h3>
                  <p className="text-gray-400 text-sm">ERPNext導入支援</p>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>〒100-0001<br />東京都千代田区千代田1-1<br />千代田ビル5F</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <p>03-1234-5678（平日 9:00-18:00）</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <p>info@myhatch.jp</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">サービス</h4>
              <div className="space-y-2">
                <Link href="/erpnext" className="block text-gray-400 hover:text-white transition-colors">ERPNext導入支援</Link>
                <Link href="/crm" className="block text-gray-400 hover:text-white transition-colors">CRM構築</Link>
                <Link href="/hr-payroll" className="block text-gray-400 hover:text-white transition-colors">人事・給与システム</Link>
                <Link href="/training" className="block text-gray-400 hover:text-white transition-colors">研修・トレーニング</Link>
                <Link href="/support" className="block text-gray-400 hover:text-white transition-colors">運用サポート</Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4">リソース</h4>
              <div className="space-y-2">
                <Link href="/company" className="block text-gray-400 hover:text-white transition-colors">会社概要</Link>
                <Link href="/knowledge" className="block text-gray-400 hover:text-white transition-colors">ナレッジ記事</Link>
                <Link href="/news" className="block text-gray-400 hover:text-white transition-colors">ニュース</Link>
                <Link href="/case-studies" className="block text-gray-400 hover:text-white transition-colors">導入事例</Link>
                <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">よくある質問</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 border-t border-gray-800">
        <div className="container-width section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 MyHatch. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Rss className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">利用規約</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}