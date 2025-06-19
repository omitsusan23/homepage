export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12 shadow-inner">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-sm px-4">
        <div className="text-left space-y-1">
          <div className="font-bold text-base mb-1">株式会社 REPLAY</div>
          <div>〒060-0063 北海道札幌市中央区南6条西3丁目10 セントラルビル三階</div>
          <div>TEL: 011-252-9336</div>
          <div>Email: info@replay.co.jp</div>
          <div>代表取締役: 矢﨑 成光</div>
          <div>資本金: 300万円</div>
          <div>設立: 2024年4月17日</div>
        </div>
        <div className="text-center space-y-2">
          <div className="font-semibold">サービス</div>
          <div>SNSマーケティング<br/>コンテンツ制作<br/>デジタル広告<br/>データ分析</div>
        </div>
        <div className="text-right space-y-2">
          <div className="font-semibold">ソーシャルメディア</div>
          <div className="flex justify-end space-x-3">
            <a href="https://twitter.com/" target="_blank" rel="noopener" className="hover:text-primary">Twitter</a>
            <a href="https://facebook.com/" target="_blank" rel="noopener" className="hover:text-primary">Facebook</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener" className="hover:text-primary">Instagram</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" className="hover:text-primary">LinkedIn</a>
          </div>
          <div className="mt-2 text-xs text-gray-500">https://replay-0417.info</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">© {new Date().getFullYear()} 株式会社REPLAY</div>
    </footer>
  )
}
