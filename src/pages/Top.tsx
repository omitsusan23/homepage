export default function Top() {
  return (
    <>
      {/* Heroセクション */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow mb-4">
            デジタルマーケティングの未来を創造する
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-6 drop-shadow">
            ソーシャルメディアとクリエイティブの力で、ビジネスの可能性を最大化
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-red-700 transition text-white font-bold px-8 py-3 rounded shadow-lg text-lg"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>

      {/* 会社紹介セクション */}
      <section className="max-w-4xl mx-auto mt-12 mb-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          株式会社REPLAYについて
          <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-700">
          <p className="mb-2">
            株式会社REPLAYは、北海道札幌市を拠点とするデジタルマーケティング会社です。<br />
            SNSマーケティング、広告運用、コンテンツ制作、データ分析など、<br className="hidden md:inline" />
            企業の成長を支援する幅広いサービスをワンストップでご提供します。
          </p>
          <p>
            最新のデジタル技術とクリエイティブの力で、<br className="hidden md:inline" />
            お客様のビジネスの可能性を最大化します。
          </p>
        </div>
      </section>

      {/* サービス概要セクション */}
      <section className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          サービス
          <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">SNSマーケティング</div>
            <div>ソーシャルメディア戦略立案・運用代行・インフルエンサー施策・SNS広告など、SNSを活用した集客・認知拡大をサポートします。</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">コンテンツ制作</div>
            <div>動画・画像・Webサイト・バナー・パンフレット等、クリエイティブ制作をワンストップでご提供します。</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">デジタル広告</div>
            <div>Google/Facebook等の広告運用、効果測定・最適化、リターゲティング、SEO対策まで幅広く対応します。</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">データ分析</div>
            <div>BIツール活用・KPI設計・ROI分析・ユーザー行動分析など、データドリブンな意思決定を支援します。</div>
          </div>
        </div>
      </section>

      {/* ソリューション概要セクション */}
      <section className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          業界別ソリューション
          <span className="block w-32 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">広告業界向け</div>
            <div>広告代理店向けのデジタルマーケティング支援、広告効果測定・分析システム、クリエイティブ制作など。</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">SNS運用向け</div>
            <div>SNS運用代行・コンサルティング、インフルエンサー施策、SNS投稿管理ツールなど。</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2">動画・画像デザイン向け</div>
            <div>動画制作・編集支援、デザイン素材管理システム、作業効率化ツールなど。</div>
          </div>
        </div>
      </section>

      {/* 会社概要（抜粋） */}
      <section className="max-w-3xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          会社概要
          <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="bg-white shadow rounded-lg p-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <dt className="font-bold text-primary border-b-2 border-primary pb-1">会社名</dt>
            <dd className="mb-2 md:mb-0">株式会社REPLAY</dd>
            <dt className="font-bold text-primary border-b-2 border-primary pb-1">所在地</dt>
            <dd className="mb-2 md:mb-0">〒060-0063 北海道札幌市中央区南6条西3丁目10 セントラルビル三階</dd>
            <dt className="font-bold text-primary border-b-2 border-primary pb-1">電話番号</dt>
            <dd className="mb-2 md:mb-0">011-252-9336</dd>
            <dt className="font-bold text-primary border-b-2 border-primary pb-1">代表者名</dt>
            <dd className="mb-2 md:mb-0">代表取締役 矢﨑 成光</dd>
          </dl>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="max-w-2xl mx-auto my-16 px-4 text-center">
        <div className="bg-primary text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2">ご相談・お問い合わせはこちら</h2>
          <p className="mb-4">SNS運用・広告・制作・分析など、まずはお気軽にご相談ください。</p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            お問い合わせフォームへ
          </a>
        </div>
      </section>
    </>
  );
}
