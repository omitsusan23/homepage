const services = [
  'SNSマーケ',
  'コンテンツ制作',
  '広告運用',
  'データ分析',
]

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold border-l-4 border-primary pl-2">サービス</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s} className="bg-white shadow p-4 rounded">
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}
