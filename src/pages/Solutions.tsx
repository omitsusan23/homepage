const solutions = [
  {
    title: '広告業界向けソリューション',
    desc: '広告代理店向けのデジタルマーケティング支援、広告効果測定・分析システム、クリエイティブ制作など、業務効率化と成果最大化をサポートします。',
  },
  {
    title: 'SNS運用向けソリューション',
    desc: 'SNS運用代行・コンサルティング、インフルエンサー施策、SNS投稿管理ツールなど、SNS活用を強力にバックアップします。',
  },
  {
    title: '動画・画像デザイン向けソリューション',
    desc: '動画制作・編集支援、デザイン素材管理システム、作業効率化ツールなど、クリエイターの生産性向上を実現します。',
  },
]

export default function Solutions() {
  return (
    <section className="max-w-5xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        業界別ソリューション
        <span className="block w-32 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {solutions.map((s) => (
          <div key={s.title} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">{s.title}</div>
            <div className="text-gray-700 flex-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
