import { useState, useEffect } from 'react';

const WhyHiroSectionJa = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundImage = isMobile ? '/content/hiro_aboutm.jpg' : '/content/hiro-about.jpg';

  const reasons = [
    "視界が限られた状況で、決断する力",
    "プレッシャーの中で、責任あるリーダーシップを発揮する力",
    "迷うことに代償がある場面で、勇気を持って行動する力"
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      
      {/* Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-white/50" />
      
      <div className="relative max-w-3xl mx-auto">
        {/* Section Label */}
        <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-6">
          なぜ主催者はHiroを招くのか
        </p>

        {/* Context */}
        <p className="font-inter text-lg md:text-xl text-navy leading-relaxed mb-4">
          現代のリーダーには、強いプレッシャーの中で、不完全な情報をもとに判断し、その結果に責任を持つ力が求められています。
        </p>
        <p className="font-inter text-lg md:text-xl text-navy leading-relaxed mb-12">
          Hiroのキーノートは、単なる感動のストーリーではありません。
        </p>
        <p className="font-inter text-lg md:text-xl text-navy leading-relaxed mb-8">
          見えない状況の中で決断し、責任を持って前へ進むための、本質的なリーダーシップを伝えます。
        </p>

        {/* Reasons List */}
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 group"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-navy/10 text-sm font-inter text-slate-warm group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                {index + 1}
              </span>
              <p className="font-inter text-lg text-slate-warm pt-1">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHiroSectionJa;
