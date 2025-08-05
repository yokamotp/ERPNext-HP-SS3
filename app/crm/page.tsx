import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  Eye, 
  FileText, 
  Mail, 
  Target,
  BarChart3,
  CheckCircle,
  DollarSign,
  Clock,
  Settings,
  ChevronDown,
  ChevronUp,
  Database,
  Zap,
  Globe
} from 'lucide-react';

export default function CRMPage() {
  const challenges = [
    {
      problem: '名刺交換後に何も起きない',
      solution: '顧客履歴タイムライン',
      description: '接触履歴・商談内容・メール履歴を時系列で一元管理。次のアクションが明確に',
      icon: Users
    },
    {
      problem: '担当者が辞めると情報が消える',
      solution: '案件パイプライン',
      description: '商談の進捗・背景・関係者情報をチーム全体で共有。引き継ぎもスムーズ',
      icon: Eye
    },
    {
      problem: '商談の進捗がブラックボックス',
      solution: '引き継ぎやKPIの可視化',
      description: 'ダッシュボードで売上予測・進捗状況・営業効率を見える化',
      icon: BarChart3
    }
  ];

  const features = [
    {
      category: '顧客DB',
      description: 'タグ・セグメント・関連付け機能で顧客を体系的に管理',
      icon: Database
    },
    {
      category: '案件管理',
      description: 'ステージ・確度・見積連携で商談を効率的に進行',
      icon: Target
    },
    {
      category: 'メール・タスク連携',
      description: 'メール履歴とタスク管理を顧客情報と自動連携',
      icon: Mail
    },
    {
      category: 'キャンペーン',
      description: '見込み客育成からフォローアップまで自動化',
      icon: Zap
    },
    {
      category: 'ダッシュボード',
      description: '売上予測・営業分析・KPI管理を一画面で確認',
      icon: BarChart3
    },
    {
      category: 'モバイル対応',
      description: '外出先からでも顧客情報・案件状況を確認・更新',
      icon: Globe
    }
  ];

  const comparisonData = [
    {
      item: '初期費用',
      frappe: '無料〜（OSS）',
      salesforce: '高額（導入支援必須）',
      zoho: '中程度（月額課金）'
    },
    {
      item: '月額費用',
      frappe: '数千円（サーバ代のみ）',
      salesforce: '数千円〜数万円/人',
      zoho: '数千円〜/人'
    },
    {
      item: 'ERP連携',
      frappe: 'ネイティブ統合',
      salesforce: 'オプション連携',
      zoho: 'API連携要設定'
    },
    {
      item: '案件管理の柔軟性',
      frappe: 'ステージ自由設定／ノーコード可',
      salesforce: 'プランによる制限あり',
      zoho: '高機能だがやや複雑'
    },
    {
      item: '自社に合う？',
      frappe: '業務に合わせて育てやすい',
      salesforce: '標準テンプレに合わせる運用設計',
      zoho: 'プラグイン次第'
    }
  ];

  const tips = [
    '案件ごとに履歴・関連書類・ToDoが一体化',
    'メール送信履歴も顧客に自動紐づけ',
    '引き継ぎしやすいコメント機能',
    '案件進捗をカンバンでチーム共有',
    '外出先からでも見積→承認→送付が完了',
    '顧客ランク・優先度の自動判定機能'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <TableOfContents className="bg-white border-r border-gray-200" />
          </div>
        </div>
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-trust-blue via-white to-trust-blue-dark py-16 lg:py-24">
            <div className="container-width section-padding">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    営業って属人的。<br />
                    でも、<span className="text-orange-500">仕組み</span>に変えれば、変わる。
                  </h1>
                  <h2 className="text-xl text-gray-700 font-medium">
                    ERPNextのCRMは、ただの顧客名簿ではありません。<br />
                    <span className="text-orange-600">"案件を見える化する"仕組み</span>、<span className="text-orange-600">"引き継げる営業"の仕組み</span>がここにあります。
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談してみる
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-lg">
                    🟦 ナレッジ記事を読む
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  よくある営業・CRMの課題 → Frappe CRMによる解決
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  多くの企業が抱える営業課題を、Frappe CRMの仕組みで解決します
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">よくある課題</h3>
                        <p className="text-red-600 font-medium">{challenge.problem}</p>
                      </div>
                      <div className="border-t border-gray-300 pt-4">
                        <h3 className="font-bold text-gray-900 mb-2">Frappe CRMで解決</h3>
                        <p className="text-orange-600 font-medium mb-2">{challenge.solution}</p>
                        <p className="text-gray-700 text-sm">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frappe CRMの主要機能と特徴
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  営業活動に必要な機能を統合し、効率的な顧客管理を実現します
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.category}</h3>
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  他CRMとの比較表（Salesforce / Zohoとの違い）
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  主要CRMサービスとの機能・コスト比較をご覧ください
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">比較項目</th>
                        <th className="px-6 py-4 text-left font-semibold text-orange-600">Frappe CRM</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Salesforce</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Zoho CRM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                          <td className="px-6 py-4 text-orange-600 font-medium">{row.frappe}</td>
                          <td className="px-6 py-4 text-gray-700">{row.salesforce}</td>
                          <td className="px-6 py-4 text-gray-700">{row.zoho}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  「これは便利！」Frappe CRMのTips集
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  実際に使ってみると分かる、Frappe CRMの使いやすさの秘密
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-900 font-medium">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  よくある質問
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Frappe CRM導入前によくいただく質問にお答えします
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 少人数の会社でも導入メリットありますか？</h3>
                      <p className="text-gray-700">はい。むしろ少人数だからこそ、情報共有と引き継ぎの仕組み化が重要です。1人でも複数の案件を効率的に管理でき、将来の組織拡大にも対応できます。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 他の顧客管理システムからの乗り換えは？</h3>
                      <p className="text-gray-700">CSV形式でのデータ移行が可能です。既存データの構造を分析し、最適な移行方法をご提案します。段階的な移行も対応可能です。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 見積・請求まで一気通貫できますか？</h3>
                      <p className="text-gray-700">はい。CRMの案件情報から見積作成、受注後の請求書発行まで、ERPNextの統合機能で一連の流れを自動化できます。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. モバイルから使えますか？</h3>
                      <p className="text-gray-700">スマートフォン・タブレットに最適化されたレスポンシブデザインで、外出先からでも顧客情報の確認・更新が可能です。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 border-t border-orange-200">
            <div className="container-width section-padding">
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    "営業の見える化"、あなたの会社でも始めてみませんか？
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    無料相談では、お客様の営業プロセスに合わせたFrappe CRMの活用方法をご提案します。
                    まずはお気軽にご相談ください。
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談・お試し検証
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-lg">
                    🟦 ナレッジ記事で詳しく見る
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