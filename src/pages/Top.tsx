export default function Top() {
  return (
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
  )
}
