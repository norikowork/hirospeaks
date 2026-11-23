import { useState, useEffect } from "react";

const OutcomesSectionJa = () => {
  const [useSmallVideo, setUseSmallVideo] = useState(false);

  const textContent = {
    sectionLabel: "参加者が得られること",
    sectionDescription: "Hiroのキーノートを通じて、参加者は単なる感動ではなく、明日からの決断と行動につながる視点を持ち帰ります。",
    outcome01: {
      title: "プレッシャーの中でも、落ち着いて向き合う力",
      description: "リーダーは、感情的に反応するのではなく、より冷静に、地に足のついた判断ができるようになります。"
    },
    outcome02: {
      title: "チームの中に生まれる、より強い信頼",
      description: "対話はよりオープンに、より人間らしく、そして誠実なものへと変わっていきます。"
    },
    outcome03: {
      title: "決断に迷わない、内なる明確さ",
      description: "未来が見えるようになるのではなく、自分の中の軸がはっきりすることで、前に進む力が生まれます。"
    },
    quote: "今、組織に必要なのは、",
    point1: "さらに大きなモチベーションではありません。",
    point2: "新しい戦略資料でもありません。",
    point3: "必要なのは、人々が立ち止まり、同じ方向を見つめ直す時間です。",
    point4: "リーダーとしてどう導くのか。",
    point5: "そして、どう耳を傾けるのか。",
    point6: "その静かな変化が、組織の未来を動かします。"
  };

  useEffect(() => {
    const checkVideoSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setUseSmallVideo(width < 1024 || (width >= 768 && width < 1024 && height > width));
    };

    checkVideoSize();
    window.addEventListener('resize', checkVideoSize);
    window.addEventListener('orientationchange', checkVideoSize);

    return () => {
      window.removeEventListener('resize', checkVideoSize);
      window.removeEventListener('orientationchange', checkVideoSize);
    };
  }, []);

  return (
    <section className="py-32 px-6 text-cream relative overflow-hidden">
      <video
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        src={`/content/${useSmallVideo ? 'wavebkm.mp4' : 'wavebk.mp4'}`}
      />
      
      <div className="absolute inset-0 bg-navy/85 -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-6">
          {textContent.sectionLabel}
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl mb-6">
          {textContent.sectionDescription}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-navy-light/30 p-8 border border-cream/10">
            <div className="text-gold/60 font-inter text-sm tracking-widest mb-4">
              成果 01
            </div>
            <h3 className="font-playfair text-xl md:text-2xl text-cream mb-6 leading-tight">
              {textContent.outcome01.title}
            </h3>
            <p className="font-inter text-cream/70 leading-relaxed">
              {textContent.outcome01.description}
            </p>
          </div>

          <div className="bg-navy-light/30 p-8 border border-cream/10">
            <div className="text-gold/60 font-inter text-sm tracking-widest mb-4">
              成果 02
            </div>
            <h3 className="font-playfair text-xl md:text-2xl text-cream mb-6 leading-tight">
              {textContent.outcome02.title}
            </h3>
            <p className="font-inter text-cream/70 leading-relaxed">
              {textContent.outcome02.description}
            </p>
          </div>

          <div className="bg-navy-light/30 p-8 border border-cream/10">
            <div className="text-gold/60 font-inter text-sm tracking-widest mb-4">
              成果 03
            </div>
            <h3 className="font-playfair text-xl md:text-2xl text-cream mb-6 leading-tight">
              {textContent.outcome03.title}
            </h3>
            <p className="font-inter text-cream/70 leading-relaxed">
              {textContent.outcome03.description}
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <blockquote className="font-playfair text-xl md:text-3xl text-cream italic leading-relaxed">
            {textContent.quote}
          </blockquote>

          <div className="mt-12 space-y-4 max-w-2xl mx-auto">
            <p className="font-inter text-cream/70 text-lg">
              {textContent.point1}
            </p>
            <p className="font-inter text-cream/70 text-lg">
              {textContent.point2}
            </p>
            <p className="font-inter text-cream/70 text-lg">
              {textContent.point3}
            </p>
            <p className="font-inter text-cream/70 text-lg">
              {textContent.point4}
            </p>
            <p className="font-inter text-cream/70 text-lg">
              {textContent.point5}
            </p>
            <p className="font-inter text-gold text-lg font-medium">
              {textContent.point6}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSectionJa;
