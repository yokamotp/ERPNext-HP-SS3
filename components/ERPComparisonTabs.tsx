'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Circle, Info } from 'lucide-react';

interface ComparisonItem {
  category: string;
  erpnext: {
    value: string;
    status: 'good' | 'bad' | 'neutral';
    tooltip?: boolean;
    tooltip?: boolean;
  };
  competitor: {
    value: string;
    status: 'good' | 'bad' | 'neutral';
  };
}

const comparisonData: Record<string, ComparisonItem[]> = {
  'Excel/Access': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good' },
      competitor: { value: 'Office 365必須', status: 'bad' }
    },
    {
      category: 'データ連携',
      erpnext: { value: '統合DB', status: 'good' },
      competitor: { value: 'ファイル共有', status: 'bad' }
    },
    {
      category: '同時アクセス',
      erpnext: { value: '無制限', status: 'good' },
      competitor: { value: '制限あり', status: 'bad' }
    },
    {
      category: 'バックアップ',
      erpnext: { value: '自動化', status: 'good' },
      competitor: { value: '手動', status: 'bad' }
    },
    {
      category: '導入難易度',
      erpnext: { value: '中（学習コスト有）', status: 'neutral' },
      competitor: { value: '低', status: 'good' }
    }
  ],
  'Kintone': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good', tooltip: true },
      competitor: { value: '約¥1,500〜¥2,300/ユーザー（スタンダード）', status: 'bad' }
    },
    {
      category: 'Office連携',
      erpnext: { value: '基本的', status: 'neutral' },
      competitor: { value: 'Outlook・Excelとの連携可能', status: 'good' }
    },
    {
      category: '他サービス連携',
      erpnext: { value: 'API連携', status: 'neutral' },
      competitor: { value: 'Zapier等で容易に外部連携', status: 'good' }
    },
    {
      category: '業務機能の網羅性',
      erpnext: { value: '会計・在庫・販売・製造まで網羅', status: 'good' },
      competitor: { value: 'アプリを作り込む必要あり（業種特化は少ない）', status: 'bad' }
    },
    {
      category: '技術サポート',
      erpnext: { value: 'コミュニティ中心（Frappeベース）', status: 'neutral' },
      competitor: { value: 'サイボウズ公式', status: 'good' }
    },
    {
      category: '導入難易度',
      erpnext: { value: '中（学習コストあるが柔軟性高い）', status: 'neutral' },
      competitor: { value: '直感的に作れるが、複雑な業務にはノーコードの限界あり', status: 'neutral' }
    },
    {
      category: 'カスタマイズ性',
      erpnext: { value: 'OSS + AI支援で柔軟（コード/ノーコード両対応）', status: 'good' },
      competitor: { value: 'ノーコード中心（複雑なロジックは困難）', status: 'bad' }
    }
  ],
  'Odoo': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good' },
      competitor: { value: '$20-45/月/人', status: 'bad' }
    },
    {
      category: 'カスタマイズ性',
      erpnext: { value: '高（ノーコード対応）', status: 'good' },
      competitor: { value: '高（有償）', status: 'neutral' }
    },
    {
      category: '日本語対応',
      erpnext: { value: '完全対応', status: 'good' },
      competitor: { value: '部分対応', status: 'neutral' }
    },
    {
      category: 'コミュニティ',
      erpnext: { value: '活発', status: 'good' },
      competitor: { value: '活発', status: 'good' }
    },
    {
      category: '技術サポート',
      erpnext: { value: 'コミュニティ中心', status: 'neutral' },
      competitor: { value: '公式サポート', status: 'good' }
    }
  ],
  'SAP Business One': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good' },
      competitor: { value: '数万円/月/人', status: 'bad' }
    },
    {
      category: '初期費用',
      erpnext: { value: '数十万円〜', status: 'good' },
      competitor: { value: '数百万円〜', status: 'bad' }
    },
    {
      category: '企業向け機能',
      erpnext: { value: '基本的', status: 'neutral' },
      competitor: { value: '充実', status: 'good' }
    },
    {
      category: 'カスタマイズ',
      erpnext: { value: '柔軟', status: 'good' },
      competitor: { value: '制限あり', status: 'neutral' }
    },
    {
      category: '導入期間',
      erpnext: { value: '3-6ヶ月', status: 'good' },
      competitor: { value: '6-12ヶ月', status: 'bad' }
    }
  ],
  'NetSuite': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good' },
      competitor: { value: '$99-499/月/人', status: 'bad' }
    },
    {
      category: 'クラウド対応',
      erpnext: { value: 'フル対応', status: 'good' },
      competitor: { value: 'フル対応', status: 'good' }
    },
    {
      category: '多通貨対応',
      erpnext: { value: '標準機能', status: 'good' },
      competitor: { value: '標準機能', status: 'good' }
    },
    {
      category: 'API連携',
      erpnext: { value: 'REST API', status: 'good' },
      competitor: { value: 'SuiteTalk API', status: 'good' }
    },
    {
      category: 'ライセンス縛り',
      erpnext: { value: 'なし', status: 'good' },
      competitor: { value: 'あり', status: 'bad' }
    }
  ],
  'Dynamics 365': [
    {
      category: '月額費用',
      erpnext: { value: 'サーバー費用のみ', status: 'good' },
      competitor: { value: '$65-210/月/人', status: 'bad' }
    },
    {
      category: 'Office連携',
      erpnext: { value: '基本的', status: 'neutral' },
      competitor: { value: '完璧', status: 'good' }
    },
    {
      category: 'Azure統合',
      erpnext: { value: 'API連携', status: 'neutral' },
      competitor: { value: 'ネイティブ', status: 'good' }
    },
    {
      category: '企業向け機能',
      erpnext: { value: '基本的', status: 'neutral' },
      competitor: { value: '充実', status: 'good' }
    },
    {
      category: '技術サポート',
      erpnext: { value: 'コミュニティ中心', status: 'neutral' },
      competitor: { value: 'Microsoft公式', status: 'good' }
    },
    {
      category: '導入難易度',
      erpnext: { value: '中（学習コスト有）', status: 'neutral' },
      competitor: { value: '高（専門知識必要）', status: 'bad' }
    }
  ]
};

const StatusIcon = ({ status }: { status: 'good' | 'bad' | 'neutral' }) => {
  switch (status) {
    case 'good':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'bad':
      return <XCircle className="w-5 h-5 text-red-500" />;
    case 'neutral':
      return <Circle className="w-5 h-5 text-gray-400" />;
  }
};

export default function ERPComparisonTabs() {
  const [activeTab, setActiveTab] = useState('Kintone');
  const tabs = Object.keys(comparisonData);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {activeTab} vs ERPNext
          </h3>
          <p className="text-gray-600">
            {activeTab === 'Kintone' && 'サイボウズの業務アプリ作成プラットフォーム'}
            {activeTab === 'Dynamics 365' && 'Microsoftの統合ビジネスアプリケーション'}
            {activeTab === 'NetSuite' && 'Oracle提供のクラウドERP'}
            {activeTab === 'SAP Business One' && 'SAP提供の中小企業向けERP'}
            {activeTab === 'Odoo' && 'オープンソースベースのビジネスアプリケーション'}
            {activeTab === 'Excel/Access' && 'Microsoft Office製品での業務管理'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">比較項目</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-600">{activeTab}</th>
                <th className="text-left py-4 px-6 font-semibold text-blue-600">ERPNext</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData[activeTab]?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {item.category}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <StatusIcon status={item.competitor.status} />
                      <span className="text-gray-700">{item.competitor.value}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <StatusIcon status={item.erpnext.status} />
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600 font-medium">{item.erpnext.value}</span>
                        {item.erpnext.tooltip && (
                          <div className="relative group">
                            <Info className="w-4 h-4 text-blue-500 cursor-help" />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                              <div className="space-y-1">
                                <div className="font-medium">ユーザー数に応じて柔軟に調整可能：</div>
                                <div>軽い業務利用なら$10/月〜</div>
                                <div>中〜大規模利用でも$25〜$75/月程度で運用可能（Sharedプラン）</div>
                                <div>ヘビー利用や多数のユーザーにはDedicatedプラン（$200〜）</div>
                                <div className="text-gray-300 text-xs mt-1">※ 価格参考：https://frappe.io/cloud/pricing</div>
                              </div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ERPNext優位性の説明 */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">ERPNextの優位性</h4>
              {activeTab === 'Kintone' ? (
                <p className="text-blue-800 text-sm">
                  オープンソースであるERPNextは、ノーコードでのUIカスタマイズからコードベースでの高度な機能追加まで幅広く対応可能。
                  さらに、OSSであるがゆえに<strong>AIによるライブコーディング支援（補完・提案）</strong>がしやすく、
                  ゼロからシステムを作るよりも効率的な「発射台」として非常に相性が良い。
                </p>
              ) : (
                <p className="text-blue-800 text-sm">
                  オープンソースでありながら、エンタープライズレベルの機能を提供。各システムの長所を統合し、
                  コストを大幅に削減しながら、より包括的なソリューションを実現できます。
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}