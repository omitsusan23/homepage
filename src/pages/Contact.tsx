export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        お問い合わせ
        <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="mb-6 text-gray-700">お問い合わせは、メールまたはお電話で承ります。</p>
        <div className="flex flex-col gap-4">
          <a href="mailto:info@replay.co.jp" className="bg-primary text-white px-6 py-3 rounded font-bold text-center hover:bg-red-700">
            メールで問い合わせる
          </a>
          <p className="text-sm text-gray-600">メールアプリが開きます。宛先：info@replay.co.jp</p>
          <a href="tel:0112529336" className="border border-primary text-primary px-6 py-3 rounded font-bold text-center hover:bg-red-50">
            電話：011-252-9336
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <div>株式会社RePlay</div>
        <div>〒060-0063 北海道札幌市中央区南６条西３丁目11-3 セントラルビル３階</div>
        <div>TEL: 011-252-9336</div>
        <div>Email: info@replay.co.jp</div>
      </div>
    </section>
  )
}
