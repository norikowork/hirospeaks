import { useState, useEffect } from 'react';

const WhyHiroSection = () => {
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
    "Making decisions when visibility is limited",
    "Leading responsibly under pressure",
    "Acting with courage when hesitation carries a cost"
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
          Why Organizers Invite Hiro
        </p>

        {/* Context */}
        <p className="font-inter text-lg md:text-xl text-navy leading-relaxed mb-12">
          Today's leaders are expected to decide under pressure, with incomplete information and real consequences.
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

export default WhyHiroSection;
