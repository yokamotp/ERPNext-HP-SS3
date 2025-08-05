import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Heart, 
  Target, 
  Eye, 
  Zap, 
  Code, 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Mail, 
  MapPin, 
  Phone, 
  Hash, 
  Calendar, 
  Award, 
  Trophy, 
  Globe, 
  BookOpen, 
  Wrench,
  Star,
  Lightbulb,
  Shield
} from 'lucide-react';

export const metadata = {
  title: '会社案内 - MyHatch 企業理念とビジョン | ERPNext導入支援のプロフェッショナル',
  description: 'MyHatchの代表メッセージ、企業理念、ビジョンをご紹介。オープンソースERPNextで中小企業の自立的な成長を支援する伴走型パートナーです。無料相談・資料請求承ります。',
  keywords: 'MyHatch,会社案内,企業理念,ビジョン,ERPNext,導入支援,代表メッセージ,伴走型パートナー',
  openGraph: {
    title: '会社案内 - MyHatch 企業理念とビジョン',
    description: 'オープンソースERPNextで中小企業の自立的な成長を支援する伴走型パートナー、MyHatchの企業理念とビジョンをご紹介します。',
    type: 'website',
  },
};

export default function CompanyPage() {
  const features = [
    {
      title: 'OSSを"育てる"時代の、伴走型インテグレータ',
      description: '単なる導入支援ではなく、お客様と一緒にシステムを成長させていく長期的なパートナーシップを提供します。作って終わりではなく、共に育て続ける関係性を大切にしています。',
      icon: Users
    },
    {
      title: 'ノーコードからAIコーディングまで。自社開発力を支える技術支援',
      description: '最新の開発手法とAI技術を活用し、お客様の技術力向上もサポートする包括的な技術支援を行います。内製化への道筋も一緒に描きます。',
      icon: Code
    },
    {
      title: 'ERPNext専門の低コスト導入＆継続運用ノウハウ',
      description: '長年の経験に基づく効率的な導入プロセスと運用ノウハウで、コストを抑えながら最大の効果を実現します。段階的導入で安心してスタートできます。',
      icon: DollarSign
    }
  ];

  const serviceFlow = [
    {
      step: 1,
      title: '検証ステップ',
      description: '課題ヒアリング → Fit&Gap → OSSプロトタイプ',
      detail: 'このサイクルを数回繰り返し、最適解を見つけます'
    },
    {
      step: 2,
      title: 'グラデーション移行',
      description: '旧システムからERPNextへの段階的移行',
      detail: '範囲を徐々に広げながら、リスクを最小化して移行を進めます'
    },
    {
      step: 3,
      title: '継続的改善・運用支援',
      description: '都度Fit&Gapで微修正・課題解決',
      detail: '一緒に育てる運用支援で、システムを持続的に成長させます'
    }
  ];

  const companyInfo = [
    { label: '会社名', value: 'MyHatch合同会社', icon: Building2 },
    { label: '所在地', value: '佐賀市川副町南里５２', icon: MapPin },
    { label: '代表者名', value: '岡本 洋平', icon: Users },
    { label: '設立年', value: '2025年1月', icon: Calendar },
    { label: '適格事業者番号', value: 'T630000300 2263', icon: Hash },
    { label: 'メールアドレス', value: 'yohei.okamoto@gmail.com', icon: Mail }
  ];

  const businessContent = [
    'ERP導入支援',
    'OSSコンサルティング',
    'システム開発・カスタマイズ',
    '運用保守・サポート'
  ];

  const achievements = [
    { year: '2007年8月', event: '公認会計士試験　合格', highlight: true },
    { year: '2008年3月', event: '大阪大学 経営経済学部　卒業', highlight: false },
    { year: '2008年4月', event: 'Deloitte Tohmatsu 入社', highlight: false },
    { year: '2015年4月', event: 'コタニ株式会社　入社（トヨタ系Tier2サプライヤー）', highlight: true },
    { year: '2022年1月', event: 'アステックペイント（株）入社', highlight: false },
    { year: '2025年1月', event: '合同会社　MyHaTch　設立', highlight: true }
  ];

  const projects = [
    'ERP基幹システムのリプレイス',
    '海外子会社へのOSSシステム導入',
    '自社モバイルApp（現場ポケット）のプロダクトマネージャー（PM）',
    '爆速化プロジェクトなど多数のシステム改善プロジェクト'
  ];

  const skills = [
    { category: '語学', items: ['TOEIC 910点　ビジネスレベル英会話', 'オフショア開発（フィリピン、ベトナムチーム）'] },
    { category: '資格', items: ['公認会計士', 'G検定（2023年12月）'] },
    { category: 'プログラミング', items: ['Python (Paiza試験 S級　2018年)', 'JavaScript（React/Next.js）', 'PHP(Laravel)', '強化学習（MCTS+DQN）データ分析', 'ERPNext（2018年頃～）'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section - 理念とビジョン */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat filter blur-sm"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container-width section-padding text-center">
            <div className="max-w-5xl mx-auto space-y-12" data-aos="fade-up" data-aos-duration="1000">
              {/* 理念 */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  <span className="text-white font-medium">Mission - 理念</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  「自社の仕組みは、<br />
                  <span className="text-orange-400">自分たちで育てられる</span>」<br />
                  その選択肢を、すべての中小企業に。
                </h1>
              </div>

              {/* ビジョン */}
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
                <div className="inline-flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Eye className="w-6 h-6 text-orange-400" />
                  <span className="text-white font-medium">Vision - ビジョン</span>
                </div>
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
                  <div className="space-y-6 text-gray-800">
                    <p className="text-2xl lg:text-3xl font-bold leading-tight">
                      OSSとAIの力で、<br />
                      自社に最適な仕組みを誰もが柔軟に育てられる世界をつくる。
                    </p>
                    
                    <p className="text-xl lg:text-2xl leading-relaxed">
                      自由の代わりに不安を抱える中小企業に、<br />
                      <span className="text-orange-600 font-semibold">孤独にしない自由</span>を提供する。
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <p className="font-semibold text-gray-900">私たちは、</p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>作って終わりのベンダーではなく、</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>一緒に育て続ける伴走型パートナーとして、</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>持続可能なDXの文化を共につくっていきます。</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/consultation" className="cta-primary text-lg shadow-lg">
                  🟧 無料相談・デモ検証を申し込む
                </Link>
                <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg">
                  🟦 資料請求・お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 代表メッセージ */}
        <section className="py-20 bg-white">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                  <Heart className="w-6 h-6 text-orange-500" />
                  <span className="text-orange-600 font-semibold">Representative Message</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">代表メッセージ</h2>
              </div>

              <div className="lg:flex lg:space-x-16 space-y-12 lg:space-y-0" data-aos="fade-up" data-aos-delay="200">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-orange-100">
                      <Image
                        src="/DPP_001.JPG"
                        alt="MyHatch代表 岡本洋平"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-orange-500 rounded-full p-4 shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-8">
                  {/* 強調部分 */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-500">
                    <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      自由には、責任が伴う。<br />
                      オープンソースは、自由です。<br />
                      でもその自由の先にあるのは、選び、決め、組み上げていく責任です。
                    </blockquote>
                  </div>

                  {/* 詳細メッセージ */}
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      ERPNextのようなOSSは、企業にとって最高の発射台になり得ます。<br />
                      でも、それを"自社の武器"に育てるには、迷いや壁もつきものです。
                    </p>

                    <p>
                      そんな時に必要なのは、何でも"お任せ"できる外注先ではなく、<br />
                      <strong className="text-orange-600 text-xl">ともに悩み、手を動かし、育てるための「伴走者」</strong>だと、私は信じています。
                    </p>

                    <p>
                      MyHatchは、あなたの「自社に必要な仕組みを、自分たちで育てていく」旅を、<br />
                      横で支えるパートナーでありたい。
                    </p>

                    <p>
                      魚を与えるのではなく、釣り方と一緒に仕組みを育てる。<br />
                      そんなインテグレータであることが、私たちの誇りです。
                    </p>
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">岡本 洋平</p>
                        <p className="text-orange-600 font-semibold">MyHatch代表</p>
                        <p className="text-gray-600">公認会計士 / ERPNext専門コンサルタント</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MyHatchの特徴・強み */}
        <section className="py-20 bg-gray-50">
          <div className="container-width section-padding">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <Zap className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Our Strengths</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">MyHatchの特徴・強み</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                他のインテグレータとは異なる、MyHatch独自のアプローチと強みをご紹介します
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up" 
                  data-aos-delay={index * 200}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス提供フロー */}
        <section className="py-20 bg-white">
          <div className="container-width section-padding">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <ArrowRight className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Service Flow</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">サービス提供フロー</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                段階的で安心できるアプローチで、お客様の成功を確実にサポートします
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full hidden lg:block"></div>
                
                <div className="space-y-12">
                  {serviceFlow.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative flex items-start space-x-8"
                      data-aos="fade-right" 
                      data-aos-delay={index * 200}
                    >
                      {/* Step Number */}
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 relative z-10">
                        {step.step}
                      </div>
                      
                      {/* Content */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-orange-600 font-semibold mb-3 text-lg">{step.description}</p>
                        <p className="text-gray-700">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="py-20 bg-gray-50">
          <div className="container-width section-padding">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <Building2 className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Company Overview</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">会社概要</h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* 基本情報 */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                      <Building2 className="w-6 h-6 text-orange-500" />
                      <span>基本情報</span>
                    </h3>
                    <div className="space-y-6">
                      {companyInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <dt className="font-semibold text-gray-900 mb-1">{info.label}</dt>
                            <dd className="text-gray-700">{info.value}</dd>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 事業内容 */}
                  <div className="p-8 lg:p-12 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                      <Lightbulb className="w-6 h-6 text-orange-500" />
                      <span>事業内容</span>
                    </h3>
                    <div className="space-y-4">
                      {businessContent.map((content, index) => (
                        <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-900 font-medium">{content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 社名の由来 */}
        <section className="py-20 bg-white">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <BookOpen className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Company Name Origin</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">社名の由来</h2>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 border border-green-200">
                <blockquote className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  MyHatch ＝ "私の孵化装置"<br />
                  ＝「<span className="text-orange-600">仕組みが育つ場所</span>」
                </blockquote>
                <p className="text-xl text-gray-700 leading-relaxed">
                  お客様の仕組みが孵化し、成長していく場所でありたい。<br />
                  そんな想いを込めて、MyHatchと名付けました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 実績・経験 */}
        <section className="py-20 bg-gray-50">
          <div className="container-width section-padding">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <Trophy className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Experience & Achievements</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">実績・経験</h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12" data-aos="fade-up" data-aos-delay="200">
                {/* 経歴タイムライン */}
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full hidden lg:block"></div>
                  
                  <div className="space-y-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="relative flex items-start space-x-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                          achievement.highlight 
                            ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg' 
                            : 'bg-gray-200'
                        }`}>
                          {achievement.highlight ? (
                            <Star className="w-6 h-6 text-white" />
                          ) : (
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                            <span className={`font-bold text-lg ${
                              achievement.highlight ? 'text-orange-600' : 'text-gray-600'
                            }`}>
                              {achievement.year}
                            </span>
                            <span className={`text-lg ${
                              achievement.highlight ? 'text-gray-900 font-semibold' : 'text-gray-700'
                            }`}>
                              {achievement.event}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 主要プロジェクト */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-orange-500" />
                    <span>主な経験・プロジェクト</span>
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-orange-50 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900 font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 語学・資格・スキル */}
        <section className="py-20 bg-white">
          <div className="container-width section-padding">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-3 bg-orange-50 rounded-full px-6 py-3 mb-6">
                <Award className="w-6 h-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Skills & Qualifications</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">語学・資格・スキル</h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
                    data-aos="fade-up" 
                    data-aos-delay={index * 200}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-white" />
                      </div>
                      <span>{skillGroup.category}</span>
                    </h3>
                    <div className="space-y-4">
                      {skillGroup.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 border-t border-orange-200">
          <div className="container-width section-padding">
            <div className="text-center space-y-12" data-aos="fade-up">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  あなたの会社の<span className="text-orange-600">「仕組み化」</span>を<br />
                  一緒に始めませんか？
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  無料相談では、お客様の現在の課題をお聞きし、ERPNextがどのように解決できるかを具体的にご提案します。<br />
                  まずはお気軽にご相談ください。専門家が丁寧にお答えします。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6" data-aos="fade-up" data-aos-delay="300">
                <Link href="/consultation" className="cta-primary text-xl px-10 py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  🟧 無料相談・デモ検証を申し込む
                </Link>
                <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xl border-2 border-gray-200 hover:border-orange-300">
                  🟦 資料請求・お問い合わせ
                </Link>
              </div>

              <div className="pt-8 border-t border-orange-200">
                <p className="text-gray-600 leading-relaxed">
                  ✅ 導入前のFit&Gap分析も無料　✅ オンライン対応OK　✅ 毎週火・木開催<br />
                  ✅ 非営業の技術者が対応　✅ 強引な営業は一切なし
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}