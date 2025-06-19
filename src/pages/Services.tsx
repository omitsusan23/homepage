const services = [
  {
    title: 'SNSマーケティング',
    desc: 'ソーシャルメディア戦略立案・運用代行・インフルエンサー施策・SNS広告など、SNSを活用した集客・認知拡大をサポートします。',
  },
  {
    title: 'コンテンツ制作',
    desc: '動画・画像・Webサイト・バナー・パンフレット等、クリエイティブ制作をワンストップでご提供します。',
  },
  {
    title: 'デジタル広告',
    desc: 'Google/Facebook等の広告運用、効果測定・最適化、リターゲティング、SEO対策まで幅広く対応します。',
  },
  {
    title: 'データ分析',
    desc: 'BIツール活用・KPI設計・ROI分析・ユーザー行動分析など、データドリブンな意思決定を支援します。',
  },
]

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        サービス
        <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">{s.title}</div>
            <div className="text-gray-700 flex-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
