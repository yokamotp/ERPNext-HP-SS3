import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
  title: '利用規約｜合同会社MyHaTch',
  description: '合同会社MyHaTchの利用規約です。本ウェブサイト上で提供するサービスの利用条件について詳しく説明しています。',
  keywords: '利用規約,サービス利用条件,MyHaTch,合同会社',
  openGraph: {
    title: '利用規約｜合同会社MyHaTch',
    description: '合同会社MyHaTchの利用規約です。本ウェブサイト上で提供するサービスの利用条件について詳しく説明しています。',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
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
              <FileText className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold">Terms of Service</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">利用規約</h1>
          </div>

          {/* Content */}
          <div className="text-gray-300 leading-relaxed">
            <p className="mb-6">
              合同会社MyHaTch（以下「当社」といいます）は、本ウェブサイト上で提供するサービス（以下「本サービス」といいます）の利用条件を、以下のとおり定めます。本サービスをご利用いただく際には、本規約に同意いただいたものとみなします。
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第1条（適用）</h2>
              <p className="mb-6">
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第2条（利用登録）</h2>
              <p className="mb-6">
                利用希望者が当社の定める方法によって利用登録を申請し、当社が承認することで、利用登録が成立します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第3条（禁止事項）</h2>
              <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他の利用者、または第三者の権利を侵害する行為</li>
                <li>当社のサーバーやネットワークの機能を破壊または妨害する行為</li>
                <li>不正アクセスやそれを試みる行為</li>
                <li>他の利用者に関する個人情報を収集または蓄積する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第4条（本サービスの提供の停止等）</h2>
              <p className="mb-4">当社は、以下の場合には、ユーザーに事前通知することなく本サービスの全部または一部を停止または中断できるものとします。</p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>システムの保守点検や更新を行う場合</li>
                <li>火災、停電、天災地変など不可抗力により本サービスの提供が困難な場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第5条（利用制限および登録抹消）</h2>
              <p className="mb-6">
                当社は、ユーザーが本規約に違反した場合、事前の通知なく利用制限や登録抹消を行うことができます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第6条（免責事項）</h2>
              <p className="mb-6">
                当社は、本サービスに関して、事実上または法律上の瑕疵がないことを保証するものではありません。本サービスの利用により生じたいかなる損害についても、当社は責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第7条（規約の変更）</h2>
              <p className="mb-6">
                当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができます。変更後の規約は、本ウェブサイト上に掲載した時点で効力を生じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">第8条（準拠法・裁判管轄）</h2>
              <p className="mb-6">
                本規約の解釈には、日本法を準拠法とします。本サービスに関して紛争が生じた場合は、当社所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-400">【お問い合わせ先】</h2>
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