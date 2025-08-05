import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import { 
  DollarSign, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  FileText,
  Settings,
  AlertTriangle,
  Star
} from 'lucide-react';

export default function PricingPage() {
  const reasons = [
    {
      title: 'OSS（ERPNext）ベースでライセンス費が不要',
      description: 'オープンソースソフトウェアを活用することで、高額なライセンス費用を削減。その分を導入支援とカスタマイズに集中投資できます。',
      icon: DollarSign
    },
    {
      title: 'Frappe Framework + AI支援設計',
      description: '高効率な開発フレームワークとAI活用により、開発工数を大幅削減。品質を保ちながらコストを抑制します。',
      icon: Zap
    },
    {
      title: '日本企業向けテンプレート・事前パッケージ',
      description: '日本の商習慣に合わせた設定済みテンプレートを活用。ゼロから構築する必要がなく、導入期間とコストを削減。',
      icon: FileText
    },
    {
      title: '豊富な失敗知見でムダを省いた価格体系',
      description: '100社以上の導入経験から得た知見により、よくある失敗パターンを回避。効率的な導入プロセスを実現します。',
      icon: Shield
    }
  ];

  const plans = [
    {
      name: '無料相談',
      target: 'まず話を聞いてみたい人',
      price: '¥0',
      description: '毎週火・木 16:00〜 Google Meetで実施',
      popular: false
    },
    {
      name: 'お試しプラン',
      target: 'Fit&Gapを軽くやってみたい',
      price: '¥100,000〜',
      description: 'テンプレベースの環境提供＋軽い検証支援',
      popular: true
    },
    {
      name: '導入支援（100万円パック）',
      target: '自社主導で動ける体制あり／Fit済',
      price: '¥1,000,000',
      description: '3ヶ月20営業日の短期集中支援',
      popular: false
    },
    {
      name: '安心パック（200万円〜）',
      target: '人手不足／丸投げ型をご希望の方',
      price: '¥2,000,000〜',
      description: 'MyHatch主導の実装・ミーティング・要件整理含む',
      popular: false
    },
    {
      name: '伴走支援プラン',
      target: '自力導入したい方／試行錯誤したい方',
      price: '¥200,000/月',
      description: '毎週定例 + カスタマイズチケット5P付き',
      popular: false
    }
  ];

  const planDetails = [
    {
      name: '無料相談（¥0）',
      features: [
        '毎週火・木 16:00〜17:00（Google Meet）',
        'システム比較や導入の方向性に悩む方向け',
        '簡易Fit&GapやERPNextの相性確認にも利用可'
      ],
      icon: Users
    },
    {
      name: 'お試しプラン（¥100,000〜）',
      features: [
        'ERPNextの検証環境を用意＋テンプレ初期設定済み',
        'Fit&Gapのベースや社内合意形成にも利用しやすい',
        '以後の導入支援パックの前提条件となることが多い'
      ],
      icon: Target
    },
    {
      name: '導入支援（100万円パック）',
      features: [
        '【条件付き】お試しプランにてFit&Gap済の方限定',
        '3ヶ月で20営業日を目安とした支援（MTG＋実装＋レビュー）',
        'カスタマイズは「数カ所まで」限定。特注対応は別見積',
        'スタンダードな導入パッケージをベースに最適化'
      ],
      icon: Zap
    },
    {
      name: '導入支援安心パック（¥2,000,000〜）',
      features: [
        'お客様が多忙・非IT部門の企業向け',
        '要件整理〜資料化〜実装までMyHatchが主体的に進行',
        '伴走だけでなく実作業含めて依頼したい方に最適'
      ],
      icon: Shield
    },
    {
      name: '伴走支援（¥200,000／月）',
      features: [
        '自社で導入したいけど、迷った時に助けてほしい方向け',
        '毎週定例MTG + カスタマイズチケット（5ポイント）',
        '小1P、中3P、大5P で工数感のコントロールも可能'
      ],
      icon: Settings
    }
  ];

  const mistakes = [
    {
      wrong: '「まず全業務を洗い出してから見積を…」',
      result: '高額カスタマイズ提案で断念',
      icon: XCircle
    },
    {
      wrong: '「Fit&Gapなしで一気に導入」',
      result: '思った業務にフィットせず後戻り',
      icon: XCircle
    }
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
                    高額ERPに悩む前に、<br />
                    <span className="text-orange-500">段階的導入</span>という選択肢。
                  </h1>
                  <h2 className="text-xl text-gray-700 font-medium">
                    MyHatchの料金体系は、お客様の状況に合わせた段階的アプローチ。<br />
                    <span className="text-orange-600">"無料相談から本格導入まで"</span>、安心して進められる価格設定です。
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談を予約する
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-lg">
                    🟦 導入事例を見る
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why Affordable Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  なぜ安く、安心して導入できるのか？
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  まず価格表を見る前に「なぜこの価格でここまでできるのか？」の前提を説明し、不安を払拭します
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 text-lg">{reason.title}</h3>
                      <p className="text-gray-700">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Plans Overview */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  MyHatch サービスプラン一覧
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  お客様の導入フェーズに合わせた最適なサービスプランをご用意しています
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">プラン名</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">対象フェーズ</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">価格目安</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">主な内容</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🧭 OSS診断・Fit診断</span>
                            <span className="inline-block px-2 py-1 text-xs font-bold bg-green-100 text-green-800 rounded-full">
                              無料
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">検討前</td>
                        <td className="px-6 py-4 text-green-600 font-bold">￥0</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• ERPNextとの適合度診断</li>
                            <li>• 導入方針アドバイス</li>
                            <li>• 非営業の技術者が対応</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-orange-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🛠 プロトタイプ伴走パック</span>
                            <span className="inline-block px-2 py-1 text-xs font-bold bg-orange-100 text-orange-800 rounded-full">
                              推奨
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">検討初期</td>
                        <td className="px-6 py-4 text-orange-600 font-bold">￥100,000〜</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 3画面＋1帳票の試作</li>
                            <li>• 画面共有で設定支援</li>
                            <li>• 社内稟議資料の作成支援あり</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🚀 段階導入サポートパック</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">本導入</td>
                        <td className="px-6 py-4 text-orange-600 font-bold">￥1,000,000〜</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 本番導入支援</li>
                            <li>• マスタ登録／仕訳設定</li>
                            <li>• 部門単位の段階導入も対応</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🧑‍🏫 内製化・定着サポートパック</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">導入後〜運用初期</td>
                        <td className="px-6 py-4 text-orange-600 font-bold">￥300,000〜</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 自社メンテ支援</li>
                            <li>• 管理者教育＋マニュアル化</li>
                            <li>• SlackによるQ&A対応</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🔧 継続伴走プラン（保守）</span>
                            <span className="inline-block px-2 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-full">
                              伴走型
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">運用期</td>
                        <td className="px-6 py-4 text-orange-600 font-bold">￥30,000〜／月</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 改修・改善提案</li>
                            <li>• 月1回の定例ミーティング</li>
                            <li>• Slackまたはメール対応</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">🧠 OSS人材育成パック</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">導入中〜発展期</td>
                        <td className="px-6 py-4 text-orange-600 font-bold">￥150,000〜</td>
                        <td className="px-6 py-4">
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 社内トレーニング教材</li>
                            <li>• OJT型研修と復習</li>
                            <li>• ChatGPT活用支援含む</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* 補足説明 */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>※ 上記は参考価格です。規模・範囲に応じて柔軟にお見積りします。</p>
                    <p>※ 製造業／士業／不動産／塗装業向けの「業種別テンプレート」もオプションでご用意しています。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Plan Details Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  プラン詳細と支援の違い（個別解説セクション）
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  それぞれのプランの中身を詳しく紹介し、「期待値のコントロール」を行います
                </p>
              </div>

              <div className="space-y-8">
                {planDetails.map((plan, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-xl mb-4">{plan.name}</h3>
                        <div className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  よくある誤解と価格失敗あるある
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  ターゲット顧客の「過去の失敗体験」への共感とリスク回避提案を行います
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 mb-8">
                  {mistakes.map((mistake, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 border border-red-200">
                      <div className="flex items-start space-x-4">
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-900 font-medium mb-2">{mistake.wrong}</p>
                          <p className="text-red-600">→ {mistake.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">MyHatchの解決方法</h3>
                      <p className="text-gray-700">
                        段階的Fit&Gap＋テンプレ導入＋拡張方式で無理なくスタートできます。
                        まずは小さく始めて、成功体験を積み重ねながら拡張していく安心のアプローチです。
                      </p>
                    </div>
                  </div>
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
                  料金プランについてよくいただく質問にお答えします
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Q. Fit&Gapって何をするの？どのくらい時間かかる？</h3>
                      <p className="text-gray-700">現在の業務フローとERPNextの標準機能を比較し、適合性を確認する作業です。お試しプランでは1-2週間程度で基本的な確認を行います。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. カスタマイズってどこまでが「数か所」？</h3>
                      <p className="text-gray-700">100万円パックでは、フィールド追加やワークフロー変更など軽微なカスタマイズを3-5箇所程度想定しています。大規模な機能追加は別途お見積りとなります。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 自社で導入したいけど途中で手伝ってもらえますか？</h3>
                      <p className="text-gray-700">はい。伴走支援プランがまさにそのためのサービスです。毎週の定例MTGで進捗確認し、困った時にサポートします。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 費用対効果が見えるタイミングは？</h3>
                      <p className="text-gray-700">お試しプランの段階で業務効率化の効果を実感いただけます。本格導入後は3-6ヶ月で明確な効果が現れることが多いです。</p>
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
                    この価格で、"しくみ化"まで支援する会社、他にありますか？
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    段階的導入で安心して始められる料金体系。まずは無料相談から、
                    あなたの会社に最適なプランをご提案します。
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談を予約する
                  </Link>
                  <Link href="/trial" className="cta-secondary text-lg">
                    🟦 お試しプランを申し込む
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-lg">
                    🟦 導入事例やナレッジ記事を見る
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