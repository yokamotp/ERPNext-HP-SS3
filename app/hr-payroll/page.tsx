import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import { 
  Users, 
  Clock, 
  DollarSign, 
  Target,
  FileText,
  BarChart3,
  CheckCircle,
  Database,
  Zap,
  Globe,
  Calendar,
  Award,
  BookOpen,
  Settings,
  UserCheck,
  TrendingUp
} from 'lucide-react';

export default function HRPayrollPage() {
  const challenges = [
    {
      problem: '採用業務が属人化／紙ベース',
      solution: '応募から入社まで一元管理',
      description: '求人公開・応募者管理・面接評価・オファー管理を統合。採用プロセスを標準化',
      icon: Users
    },
    {
      problem: '勤怠・休暇・経費のルールが属人化',
      solution: '申請／承認／集計をテンプレ化',
      description: '複雑なルールもワークフローで自動化。承認者不在でも業務が止まらない',
      icon: Clock
    },
    {
      problem: '評価が曖昧・場当たり',
      solution: 'KPI/OKRベースの多面的評価が仕組み化',
      description: '目標設定から評価まで透明性のある仕組み。成長支援も自動化',
      icon: Target
    },
    {
      problem: '給与・控除・天引が複雑',
      solution: '構成項目別に設計、明細・振込まで自動化',
      description: '複雑な給与体系も柔軟に設定。計算ミス防止と業務効率化を実現',
      icon: DollarSign
    }
  ];

  const coverageData = [
    { category: '採用・求人管理', alternatives: 'HERP、HRMOS、エン転職など' },
    { category: '勤怠・休暇管理', alternatives: 'ジョブカン勤怠、KING OF TIME、SmartHR' },
    { category: '経費精算／出張申請', alternatives: '楽楽精算、マネーフォワードクラウド経費' },
    { category: '人事評価（KPI/OKR）', alternatives: 'Co:TEAM、あしたのチーム' },
    { category: '給与計算／明細発行', alternatives: 'マネーフォワード給与、弥生給与、freee給与など' },
    { category: 'eラーニング・研修', alternatives: 'learningBOX、Schooなど' }
  ];

  const features = [
    {
      title: '採用管理',
      description: '求人公開〜面接〜オファーまでの採用プロセスを一元管理',
      icon: UserCheck
    },
    {
      title: '勤怠管理',
      description: 'シフト・自動集計・遅刻ルールなど柔軟な勤怠システム',
      icon: Clock
    },
    {
      title: '休暇管理',
      description: '有給・特別・繰越・ブロック日など複雑な休暇制度に対応',
      icon: Calendar
    },
    {
      title: '経費・出張申請',
      description: '仮払・給与天引・社用車管理まで経費業務を効率化',
      icon: FileText
    },
    {
      title: '人事評価',
      description: '自己／上司／360度評価、レポート自動化で公正な評価',
      icon: Award
    },
    {
      title: '給与計算',
      description: '支給・控除・税・振込データまで給与業務を完全自動化',
      icon: DollarSign
    },
    {
      title: '従業員ライフサイクル',
      description: '入社〜退職までの状態遷移を体系的に管理',
      icon: TrendingUp
    },
    {
      title: 'セルフポータル',
      description: '社員自身の申請・打刻・確認をセルフサービス化',
      icon: Settings
    },
    {
      title: 'スキル／組織図／アサイン管理',
      description: '人材配置と組織運営を戦略的にサポート',
      icon: Users
    },
    {
      title: 'LMS（社内研修・進捗管理）',
      description: '社内教育から進捗管理まで学習環境を統合',
      icon: BookOpen
    }
  ];

  const comparisonData = [
    {
      item: '導入費',
      frappeHR: '無料（OSS + テンプレ活用）',
      multiple: '各ツールごとに初期設定・有償サポート有',
      description: 'オープンソースで初期費用を大幅削減'
    },
    {
      item: '月額費用',
      frappeHR: 'サーバー費用のみ',
      multiple: '各サービス数千円〜数万円／人',
      description: '人数が増えても固定費で運用可能'
    },
    {
      item: 'データ連携',
      frappeHR: '統合DB上で自動連携',
      multiple: 'CSVやAPIで個別連携対応が必要',
      description: 'データの整合性と業務効率を両立'
    },
    {
      item: 'カスタマイズ性',
      frappeHR: '高（ノーコード・コード両対応）',
      multiple: 'プラン次第／制限あり',
      description: '自社の制度に完全適合可能'
    },
    {
      item: '保守・継続運用',
      frappeHR: 'OSSベースで自社保守も可',
      multiple: '契約／更新／ライセンス次第',
      description: '長期的な運用コストを抑制'
    }
  ];

  const tips = [
    '有給の繰越ルールやブロック日を柔軟に設定できる',
    '打刻方法：PC／顔認証／GPS連携まで対応可',
    '面接評価や採用報酬も給与へ自動連携',
    'OKRとスキルマップがつながる評価設計',
    '部門別KPIをレポート＆インセンティブ設計へ活用',
    '給与明細PDF自動生成＋銀行振込データ一括出力'
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
                    人事って属人的。<br />
                    でも、<span className="text-orange-500">仕組み</span>に変えれば、変わる。
                  </h1>
                  <h2 className="text-xl text-gray-700 font-medium">
                    FrappeHRは、ただの人事システムではありません。<br />
                    <span className="text-orange-600">"採用から給与まで一元管理"</span>、<span className="text-orange-600">"引き継げる人事業務"</span>の仕組みがここにあります。
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
                  人事・労務の悩み、こうして"仕組み"で解決
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  「人事業務がバラバラ・属人的・コストが高い」悩みに対し、FrappeHRが"仕組みで解決"できることをお伝えします
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
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
                        <h3 className="font-bold text-gray-900 mb-2">FrappeHRで解決</h3>
                        <p className="text-orange-600 font-medium mb-2">{challenge.solution}</p>
                        <p className="text-gray-700 text-sm">{challenge.description}</p>
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
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  FrappeHRがカバーする業務と有名サービス対比
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  「普段使ってるあのサービス、これ1つでまかなえるんだ！」を実感してください
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">業務カテゴリ</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">FrappeHRが代替できる有名サービス</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {coverageData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                          <td className="px-6 py-4 text-gray-700">{row.alternatives}</td>
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
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  FrappeHRの全体像と主要機能（モジュール構成）
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  「人事領域の全部をカバーできる」構造的強さをご覧ください
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  他ツールとの比較（コスト・一元化・カスタマイズ性）
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  「別々に導入していたらコストも連携も大変。FrappeHRなら1つで解決」できる理由を明示します
                </p>
              </div>

              <div className="space-y-8">
                {comparisonData.map((row, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <div className="grid lg:grid-cols-3 gap-6 items-center">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{row.item}</h3>
                        <p className="text-gray-600 text-sm">{row.description}</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <h4 className="font-semibold text-orange-600 mb-2">FrappeHR</h4>
                        <p className="text-gray-900 font-medium">{row.frappeHR}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-600 mb-2">複数ツール組み合わせ</h4>
                        <p className="text-gray-700">{row.multiple}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-16 bg-white">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  「これは便利！」細部のつくり込みTips
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  見た目以上に"実務が回る仕組み"が入っていることをお伝えします
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
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
          <section className="py-16 bg-gray-50">
            <div className="container-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  よくある質問
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  FrappeHR導入前によくいただく質問にお答えします
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 勤怠や給与だけでも部分導入できますか？</h3>
                      <p className="text-gray-700">はい。必要な機能から段階的に導入可能です。勤怠管理のみから始めて、後から給与計算や人事評価を追加することもできます。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 他システムからの乗り換えは簡単ですか？</h3>
                      <p className="text-gray-700">CSV形式でのデータ移行が可能です。既存の勤怠データや従業員情報を分析し、最適な移行方法をご提案します。段階的な移行も対応可能です。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. 海外拠点の制度にも対応できますか？</h3>
                      <p className="text-gray-700">多言語・多通貨・多拠点に対応しています。国や地域ごとの労働法規や給与制度に合わせてカスタマイズ可能です。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. eラーニング機能は追加アドオンですか？</h3>
                      <p className="text-gray-700">LMS（学習管理システム）は標準機能として含まれています。研修コンテンツの作成から進捗管理まで、追加費用なしで利用できます。</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Q. セルフポータルはスマホ対応していますか？</h3>
                      <p className="text-gray-700">スマートフォン・タブレットに最適化されたレスポンシブデザインで、外出先からでも打刻や申請が可能です。</p>
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
                    "人事の仕組み化"、あなたの会社でも始めてみませんか？
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    無料相談では、お客様の人事業務に合わせたFrappeHRの活用方法をご提案します。
                    まずはお気軽にご相談ください。
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation" className="cta-primary text-lg">
                    🟧 無料相談・お試し検証
                  </Link>
                  <Link href="/knowledge" className="cta-secondary text-lg">
                    🟦 ナレッジ記事で詳しく知る
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