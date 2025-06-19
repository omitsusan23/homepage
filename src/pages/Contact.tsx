export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold border-l-4 border-primary pl-2">お問い合わせ</h2>
      <form className="space-y-4">
        <input type="text" placeholder="お名前" className="w-full border p-2 rounded" />
        <input type="email" placeholder="メールアドレス" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="電話番号" className="w-full border p-2 rounded" />
        <textarea placeholder="お問い合わせ内容" className="w-full border p-2 rounded" rows={4}></textarea>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">送信</button>
      </form>
    </div>
  )
}
