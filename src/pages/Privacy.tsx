export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        プライバシーポリシー
        <span className="block w-32 h-1 bg-primary mx-auto mt-2 rounded" />
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <ol className="space-y-6 text-sm">
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第1条（個人情報）</div>
            <div>「個人情報」とは、個人情報保護法にいう「個人情報」を指します。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第2条（個人情報の収集方法）</div>
            <div>当社は、ユーザーが利用登録をする際に氏名・住所・電話番号・メールアドレス等の個人情報をお尋ねすることがあります。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第3条（個人情報を収集・利用する目的）</div>
            <div>当社が個人情報を収集・利用する目的は以下のとおりです。
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため</li>
                <li>メンテナンス・重要なお知らせ等のご案内のため</li>
                <li>利用規約に違反する行為への対応のため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第4条（利用目的の変更）</div>
            <div>利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第5条（個人情報の第三者提供）</div>
            <div>当社は、法令に定める場合を除き、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供しません。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第6条（個人情報の開示）</div>
            <div>本人から個人情報の開示を求められたときは、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないことがあります。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第7条（個人情報の訂正および削除）</div>
            <div>ユーザーは、当社が保有する自己の個人情報が誤った情報である場合には、当社に対して訂正・追加・削除を請求できます。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第8条（プライバシーポリシーの変更）</div>
            <div>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除き、ユーザーに通知することなく変更することができるものとします。</div>
          </li>
          <li>
            <div className="font-bold text-primary border-l-4 border-primary pl-2 mb-1">第9条（お問い合わせ窓口）</div>
            <div>
              本ポリシーに関するお問い合わせは、下記窓口までお願いいたします。
              <div className="mt-2">
                株式会社REPLAY<br />
                〒060-0063 北海道札幌市中央区南6条西3丁目10 セントラルビル三階<br />
                TEL: 011-252-9336<br />
                Email: info@replay.co.jp
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
