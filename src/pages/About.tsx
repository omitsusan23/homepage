export default function About() {
  return (
    <section className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        会社概要
        <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">会社名</dt>
          <dd className="mb-2 md:mb-0">株式会社REPLAY</dd>
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">所在地</dt>
          <dd className="mb-2 md:mb-0">〒060-0063 北海道札幌市中央区南6条西3丁目10 セントラルビル三階</dd>
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">電話番号</dt>
          <dd className="mb-2 md:mb-0">011-252-9336</dd>
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">代表者名</dt>
          <dd className="mb-2 md:mb-0">代表取締役 先﨑 成光</dd>
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">設立</dt>
          <dd className="mb-2 md:mb-0">2024年4月17日</dd>
          <dt className="font-bold text-primary border-b-2 border-primary pb-1">資本金</dt>
          <dd className="mb-2 md:mb-0">300万円</dd>
        </dl>
      </div>
    </section>
  )
}
