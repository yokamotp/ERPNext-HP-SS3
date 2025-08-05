'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import ERPComparisonTabs from '@/components/ERPComparisonTabs';
import Link from 'next/link';
import {
  Database,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  DollarSign,
  Clock,
  FileText,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ERPNextPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const challenges = [
    {
      problem: '業務の属人化',
      solution: 'ワークフロー + 権限管理',
      description: '承認プロセスを可視化し、誰でも業務を引き継げる仕組みを構築',
      icon: Users
    },
    {
      problem: 'Excel限界',
      solution: '統合DB + 帳票出力',
      description: 'データを一元管理し、必要な帳票を自動生成。転記ミスを防止',
      icon: FileText
    },
    {
      problem: 'コストが不安',
      solution: 'OSS + 段階導入',
      description: 'ライセンス費用不要。必要な機能から段階的に導入可能',
      icon: DollarSign
    }
  ];

  const coverageData = [
    { category: '会計・請求', alternatives: '弥生会計、マネーフォワード、Freee' },
    { category: '顧客・案件管理', alternatives: 'Salesforce、kintone、Zoho CRM' },
    { category: '人事・勤怠', alternatives: 'SmartHR、ジョブカン' },
    { category: '在庫・製造', alternatives: 'SAP、NetSuite、電脳工場' },
    { category: '請求管理', alternatives: 'kintone + Excelベース等' }
  ];

  const features = [
    {
      title: 'ノーコードのワークフロー作成',
      description: 'プログラミング不要で承認フローを設計',
      icon: Settings
    },
    {
      title: '帳票・申請・承認プロセスの自動化',
      description: '見積から請求まで一連の流れを自動化',
      icon: Zap
    },
    {
      title: '多言語・多通貨・多拠点対応',
      description: 'グローバル展開にも対応した柔軟性',
      icon: Globe
    },
    {
      title: 'REST API / Webhook 連携',
      description: '既存システムとの連携も簡単',
      icon: Database
    },
    {
      title: 'ローカル/クラウド導入選択自由',
      description: 'セキュリティ要件に応じて選択可能',
      icon: Shield
    },
    {
      title: '軽量なFrappe Frameworkで構成',
      description: '高速動作と拡張性を両立',
      icon: TrendingUp
    }
  ];

  const tips = [
    '見積 → 受注 → 請求 → 入金 が1クリック',
    '日本語帳票テンプレ標準搭載',
    '操作ログや履歴で変更追跡も安心',
    '全社員が1つのシステムで仕事できる',
    'スマホ・タブレットからも操作可能',
    'バックアップ・復旧機能も標準装備'
  ];

  const faqs = [
    {
      question: '無料でどこまで使える？',
      answer: 'ERPNextのコア機能（会計、CRM、在庫管理、人事など）はすべて無料で利用できます。費用が発生するのは、サーバー費用、カスタマイズ、サポートのみです。'
    },
    {
      question: 'カスタマイズにはプログラミングが必要？',
      answer: '基本的なカスタマイズ（フィールド追加、ワークフロー設定、帳票デザイン）はノーコードで可能です。高度なカスタマイズが必要な場合のみプログラミングが必要になります。'
    },
    {
      question: 'クラウドとローカル、どちらがいい？',
      answer: 'セキュリティを重視する場合はローカル、運用コストを抑えたい場合はクラウドがおすすめです。どちらも同じ機能が利用でき、後から移行も可能です。'
    },
    {
      question: '会計や請求など、日本の業務に本当に対応してる？',
      answer: '日本の商習慣に対応した機能（消費税計算、日本語帳票、銀行振込データ作成など）が標準で搭載されています。不足部分はカスタマイズで対応可能です。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <div className="w-64 hidden lg:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
          <TableOfContents className="bg-white border-r border-gray-200" />
        </div>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-trust-blue via-white to-trust-blue-dark py-16">
            <div className="container-width section-padding">
              <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4 sm:px-0">
                    そのERP、<span className="text-orange-500">高すぎませんか？</span>
                  </h1>
                  <h2 className="text-lg sm:text-xl text-gray-700 font-medium px-4 sm:px-0">
                    ERPNextは"賢くて育てられるERP"。<br />
                    OSS×AIの時代に、中小企業が選べるERPの答えです。
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium px-4 sm:px-0">
                    ERPに必要なのは「高機能」より「育てられる仕組み」。<br />
                    ERPNextなら、無料・柔軟・AI対応の軽量ERPを自社流にフィットできます。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                  <Link href="/consultation" className="cta-primary text-base sm:text-lg w-full sm:w-auto text-center">
                    無料相談してみる
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-base sm:text-lg w-full sm:w-auto text-center">
                    ナレッジ記事を読む
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  よくある課題 × ERPNextでの解決方法
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  多くの企業が抱える業務課題を、ERPNextの仕組みで解決します
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 mx-4 sm:mx-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 lg:mb-6">
                      <challenge.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">困りごと</h3>
                        <p className="text-sm sm:text-base text-red-600 font-medium">{challenge.problem}</p>
                      </div>
                      <div className="border-t border-gray-300 pt-4">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">ERPNextで解決</h3>
                        <p className="text-sm sm:text-base text-orange-600 font-medium mb-2">{challenge.solution}</p>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Coverage Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  ERPNextがカバーする他社ソフト比較
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  ERPNextならこれらを1つに統合して、サーバ費用だけで運用可能です
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mx-4 sm:mx-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-gray-900">業務領域</th>
                        <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-gray-900">ERPNextが代替可能なサービス</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {coverageData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900">{row.category}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">{row.alternatives}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  ERPNextの特徴と"仕組み"での差別化ポイント
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  他のERPシステムにはない、ERPNext独自の強みをご紹介します
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mx-4 sm:mx-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cost Comparison Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  他ERP・業務ツールとの比較（コスト視点）
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  主要ERPシステムとの機能・コスト比較をご覧ください
                </p>
              </div>

              <div className="mx-4 sm:mx-0">
                <ERPComparisonTabs />
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  「これは便利！」と思える細部の作りこみTips
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  実際に使ってみると分かる、ERPNextの使いやすさの秘密
                </p>
              </div>

              <div className="max-w-3xl mx-auto px-4 sm:px-0">
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4 bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                  よくある質問
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                  ERPNext導入前によくいただく質問にお答えします
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4 px-4 sm:px-0">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-gray-100">
                        <p className="text-xs sm:text-sm text-gray-700 pt-3 sm:pt-4 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 border-t border-orange-200">
            <div className="container-width section-padding">
              <div className="text-center space-y-6 lg:space-y-8 px-4 sm:px-0">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    ERPNext導入を検討してみませんか？
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                    無料相談では、お客様の業務に合わせたERPNextの活用方法をご提案します。
                    まずはお気軽にご相談ください。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-base sm:text-lg w-full sm:w-auto text-center">
                    無料相談してみる
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-base sm:text-lg w-full sm:w-auto text-center">
                    ナレッジ記事を読む
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}