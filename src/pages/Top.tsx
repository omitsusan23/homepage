import { useEffect, useRef } from "react";

const corporateInfo = [
  "株式会社RePlayは、デジタルマーケティングの新たな可能性を追求する広告代理店です。",
  "ソーシャルメディアを中心としたデジタルマーケティング戦略の立案から実行まで、一貫したサービスを提供しています。",
  "クリエイティブとデータを融合させた独自のアプローチで、クライアントのビジネス成長をサポートします。",
  "最新のデジタルテクノロジーを活用し、効果的なマーケティングソリューションを提案します。",
  "経験豊富な専門家チームが、各業界の特性を理解した上で最適な戦略を構築します。",
  "データドリブンな意思決定を重視し、常に効果測定と改善を繰り返します。",
  "クライアントとのパートナーシップを大切にし、長期的な成長を目指します。",
  "地域密着型のサービスを展開し、北海道の企業様のデジタル化を支援します。",
  "常に最新のトレンドをキャッチし、イノベーティブなソリューションを提供します。",
  "企業のブランド価値を高め、持続可能な成長を実現するための戦略を提案します。",
];

const services = [
  {
    title: "SNSマーケティング",
    items: [
      "ソーシャルメディア戦略立案・コンサルティング",
      "アカウント運用・管理（Twitter, Instagram, Facebook, TikTok, YouTube）",
      "コンテンツ制作・配信（投稿スケジュール管理）",
      "インフルエンサーマーケティング（マッチング・コラボ企画）",
      "コミュニティマネジメント（フォロワー育成・エンゲージメント向上）",
      "SNS広告運用（ターゲティング・効果測定）",
      "クライシスコミュニケーション（炎上対策・リスク管理）",
      "ソーシャルリスニング（トレンド分析・競合調査）",
      "カスタマーサポート（SNS対応・クレーム対応）",
      "キャンペーン企画・運営（ハッシュタグキャンペーン・プレゼント企画）",
    ],
  },
  {
    title: "コンテンツ制作",
    items: [
      "動画制作・編集（CM, PV, プロモーション動画）",
      "画像制作・編集（バナー、ロゴ、パッケージデザイン）",
      "ライブ配信制作（イベント配信、商品説明会）",
      "Webサイト制作（ランディングページ、ECサイト）",
      "コンテンツ企画・シナリオ制作（ストーリーテリング）",
      "プロモーション素材制作（チラシ、パンフレット）",
      "商品撮影・編集（プロダクトフォト）",
      "イベント映像制作（記念映像、社内PR）",
      "モバイルコンテンツ制作（スマホ向け動画）",
      "マーケティングコンテンツ制作（販促用素材）",
    ],
  },
  {
    title: "デジタル広告",
    items: [
      "広告戦略立案（メディアミックス計画）",
      "広告運用・最適化（Google Ads, Facebook Ads）",
      "効果測定・分析（ROAS, CPA最適化）",
      "リターゲティング広告（再訪問者への訴求）",
      "SEO対策（検索エンジン最適化）",
      "コンテンツマーケティング（ブログ、メルマガ）",
      "アフィリエイトマーケティング（成果報酬型広告）",
      "DSP広告（プログラマティックバイイング）",
      "ネイティブ広告（記事広告・PR記事）",
      "メールマーケティング（メルマガ配信・自動化）",
    ],
  },
  {
    title: "データ分析",
    items: [
      "データ分析・可視化（BIツール活用）",
      "KPI設定・管理（目標達成度の測定）",
      "ROI分析（投資対効果の算出）",
      "ユーザー行動分析（ヒートマップ、行動追跡）",
      "競合分析（市場調査・ポジショニング）",
      "予測分析（需要予測・トレンド分析）",
      "カスタマージャーニーマッピング（顧客体験の可視化）",
      "セグメント分析（顧客層の細分化）",
      "アトリビューション分析（コンバージョン要因の特定）",
      "A/Bテスト（効果検証・最適化）",
    ],
  },
];

const solutions = [
  {
    title: "広告業向けソリューション",
    items: [
      "広告代理店向けデジタルマーケティング支援",
      "広告効果測定・分析システムの構築",
      "広告主向けレポート作成自動化",
      "広告予算最適化・配分シミュレーション",
      "広告クリエイティブ制作支援",
      "広告運用自動化ツールの導入支援",
      "広告主向けデジタル戦略コンサルティング",
      "広告効果予測AIシステムの導入",
      "広告代理店向け業務効率化ソリューション",
      "広告主向けデータ分析・可視化サービス",
    ],
  },
  {
    title: "SNS運用向けソリューション",
    items: [
      "SNS運用代行・コンサルティング",
      "インフルエンサーマーケティング支援",
      "SNS投稿スケジュール管理システム",
      "ソーシャルリスニング・分析ツール",
      "SNS広告運用・最適化サービス",
      "コミュニティマネジメント支援",
      "SNS危機管理・リスク対策",
      "SNS運用レポート作成自動化",
      "フォロワー育成・エンゲージメント向上施策",
      "SNS運用効率化ツールの導入支援",
    ],
  },
  {
    title: "動画・画像デザイン向けソリューション",
    items: [
      "動画制作・編集支援サービス",
      "画像制作・編集（バナー、ロゴ、パッケージデザイン）",
      "デザイン素材管理システム",
      "デザイン作業効率化ツール",
      "デザイン資産管理・共有プラットフォーム",
    ],
  },
];

// アニメーション背景用カスタムフック
function useAnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;
    let t = 0;
    const dpr = window.devicePixelRatio || 1;
    function resize() {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 動く抽象パターン
      for (let i = 0; i < 8; i++) {
        const x = window.innerWidth * (0.1 + 0.8 * Math.sin(t / 60 + i));
        const y = window.innerHeight * (0.1 + 0.8 * Math.cos(t / 80 + i));
        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.ellipse(x, y, 180 + 40 * Math.sin(t / 40 + i), 120 + 30 * Math.cos(t / 50 + i), t / 100 + i, 0, 2 * Math.PI);
        ctx.fillStyle = i % 2 === 0 ? "#f9a8d4" : "#67e8f9";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(() => {
        t += 1;
        draw();
      });
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return ref;
}

export default function Top() {
  const bgRef = useAnimatedBackground();
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* アニメーション背景 */}
      <canvas ref={bgRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{position:'fixed'}} />

      {/* Heroセクション */}
      <section className="relative z-10 flex flex-col items-center justify-center text-white text-center min-h-[60vh] py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow animate-fadein mb-6 tracking-tight">
          デジタルの力で<br className="hidden md:inline" />未来を創造する
        </h1>
        <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow animate-fadein2">
          SNS・広告・クリエイティブ・データ分析で<br className="hidden md:inline" />ビジネスの成長を最大化
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary hover:bg-red-700 transition text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg animate-bounce"
        >
          お問い合わせはこちら
        </a>
      </section>

      {/* コーポレート情報 */}
      <section className="relative z-10 max-w-3xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 border-4 border-black py-2 bg-white/80 inline-block rounded-lg animate-fadein">
          コーポレート情報
        </h2>
        <div className="bg-white/90 shadow-xl rounded-xl p-8 md:p-12 animate-fadein2">
          <ul className="space-y-4 text-gray-800 text-base md:text-lg">
            {corporateInfo.map((line, i) => (
              <li key={i} className="leading-relaxed">{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* サービス */}
      <section className="relative z-10 max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fadein">
          サービス
          <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={s.title} className="bg-white/90 shadow-xl rounded-xl p-6 flex flex-col hover:scale-105 transition-transform duration-300 animate-fadein2">
              <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2 flex items-center gap-2">
                <span className="inline-block animate-pop" style={{animationDelay: `${idx * 0.1}s`}}>{s.title}</span>
              </div>
              <ul className="list-disc list-inside text-sm md:text-base space-y-1 mt-2">
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ソリューション */}
      <section className="relative z-10 max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fadein">
          業界別ソリューション
          <span className="block w-32 h-1 bg-primary mx-auto mt-2 rounded" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => (
            <div key={s.title} className="bg-white/90 shadow-xl rounded-xl p-6 flex flex-col hover:scale-105 transition-transform duration-300 animate-fadein2">
              <div className="font-bold text-primary text-lg border-b-2 border-primary pb-1 mb-2 flex items-center gap-2">
                <span className="inline-block animate-pop" style={{animationDelay: `${idx * 0.1 + 0.2}s`}}>{s.title}</span>
              </div>
              <ul className="list-disc list-inside text-sm md:text-base space-y-1 mt-2">
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// アニメーション用CSS（Tailwindの@layerで追加推奨）
// .animate-fadein { animation: fadein 1s both; }
// .animate-fadein2 { animation: fadein 1.5s both; }
// .animate-pop { animation: pop 0.5s both; }
// @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
// @keyframes pop { 0% { transform: scale(0.8);} 80% { transform: scale(1.1);} 100% { transform: scale(1);} }
