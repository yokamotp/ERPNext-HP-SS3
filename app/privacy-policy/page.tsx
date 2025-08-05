import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'プライバシーポリシー｜合同会社MyHaTch',
  description: '合同会社MyHaTchのプライバシーポリシーです。お客様の個人情報の取り扱いについて詳しく説明しています。',
  keywords: 'プライバシーポリシー,個人情報保護,MyHaTch,合同会社',
  openGraph: {
    title: 'プライバシーポリシー｜合同会社MyHaTch',
    description: '合同会社MyHaTchのプライバシーポリシーです。お客様の個人情報の取り扱いについて詳しく説明しています。',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
              <Shield className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold">Privacy Policy</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">プライバシーポリシー</h1>
          </div>

          {/* Content */}
          <div className="text-gray-300 leading-relaxed">
            <p className="mb-6">
              合同会社MyHaTch（以下「当社」といいます）は、お客様の個人情報を適切に取り扱い、保護することが重要な責務であると認識し、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第1条（個人情報の定義）</h2>
              <p className="mb-6">
                本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であり、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報を指します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第2条（個人情報の取得方法）</h2>
              <p className="mb-6">
                当社は、お問い合わせフォームやサービス申し込み時などに、お客様の個人情報を適正かつ公正な手段により取得します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第3条（個人情報の利用目的）</h2>
              <p className="mb-4">取得した個人情報は、以下の目的のために利用します：</p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>サービスの提供および管理</li>
                <li>お問い合わせへの対応</li>
                <li>サービスの改善および品質向上</li>
                <li>当社からのお知らせやマーケティングの配信（任意）</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第4条（個人情報の第三者提供）</h2>
              <p className="mb-4">当社は、以下の場合を除き、第三者に個人情報を提供することはありません。</p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>業務委託先に必要な範囲で提供する場合（例：サーバー運用、メール配信）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第5条（個人情報の管理）</h2>
              <p className="mb-6">
                当社は、個人情報の漏洩・改ざん・紛失・不正アクセス等を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第6条（個人情報の開示・訂正・削除等）</h2>
              <p className="mb-6">
                ご本人からの個人情報の開示、訂正、追加、削除、利用停止等の請求があった場合は、ご本人確認の上、速やかに対応します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第7条（Cookieの利用）</h2>
              <p className="mb-6">
                当社のウェブサイトでは、サービス向上やアクセス解析のためにCookieを使用する場合があります。Cookieによって個人を特定する情報は取得しません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第8条（プライバシーポリシーの変更）</h2>
              <p className="mb-6">
                本ポリシーの内容は、法令の変更やサービス内容の変更に伴い、適宜見直し・改定を行います。変更後の内容は本ウェブサイト上で速やかに公開します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第9条（お問い合わせ）</h2>
              <p className="mb-4">本ポリシーに関するお問い合わせは、以下までご連絡ください：</p>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="space-y-2">
                  <p className="text-gray-300"><strong className="text-white">会社名：</strong>合同会社MyHaTch</p>
                  <p className="text-gray-300"><strong className="text-white">住所：</strong>〒840-2205 佐賀市川副町南里５２</p>
                  <p><strong>メール：</strong>
                    <a 
                      href="mailto:yohei.okamoto@gmail.com" 
                      className="text-orange-400 hover:text-orange-300 underline"
                    >
                      yohei.okamoto@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-300"><strong className="text-white">代表者：</strong>代表社員 岡本 洋平</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                最終更新日：2025年1月15日
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}