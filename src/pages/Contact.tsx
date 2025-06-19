export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        お問い合わせ
        <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">お名前</label>
            <input id="name" type="text" placeholder="お名前" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">メールアドレス</label>
            <input id="email" type="email" placeholder="メールアドレス" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label htmlFor="tel" className="block font-semibold mb-1">電話番号</label>
            <input id="tel" type="tel" placeholder="電話番号" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">お問い合わせ内容</label>
            <textarea id="message" placeholder="お問い合わせ内容" className="w-full border p-2 rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-8 py-2 rounded font-bold hover:bg-red-700 transition">送信</button>
        </form>
        <div className="mt-8 text-xs text-gray-500">
          ※本フォームは静的なサンプルです。送信機能はありません。<br />
          お急ぎの場合はお電話（011-252-9336）までご連絡ください。
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <div>株式会社REPLAY</div>
        <div>〒060-0063 北海道札幌市中央区南6条西3丁目10 セントラルビル三階</div>
        <div>TEL: 011-252-9336</div>
        <div>Email: info@replay.co.jp</div>
      </div>
    </section>
  )
}
