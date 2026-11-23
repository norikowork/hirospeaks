import { useState, useEffect } from "react";

const OutcomesSection = () => {
  const [useSmallVideo, setUseSmallVideo] = useState(false);

  useEffect(() => {
    const checkVideoSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Small video for mobile and tablet portrait
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

  const outcomes = [
    {
      number: "01",
      mainText: "A renewed sense of calm under pressure.",
      subText: "Leaders feel less reactive and more grounded."
    },
    {
      number: "02",
      mainText: "Stronger trust across teams.",
      subText: "Conversations become more open, human, and sincere."
    },
    {
      number: "03",
      mainText: "Greater clarity in decision-making.",
      subText: "Not because the future becomes clear, but because their inner compass does."
    }
  ];

  return (
    <section className="py-32 px-6 text-cream relative overflow-hidden">
      {/* Video Background */}
      <video
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        src={`/content/${useSmallVideo ? 'wavebkm.mp4' : 'wavebk.mp4'}`}
      />
      
      {/* Blue gradient overlay for readability */}
      <div className="absolute inset-0 bg-navy/85 -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-6">
          Audience Outcomes
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl mb-20">
          What Your Audience Will Walk Away With
        </h2>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {outcomes.map((outcome) => (
            <div 
              key={outcome.number}
              className="bg-navy-light/30 p-8 border border-cream/10"
            >
              {/* Number */}
              <div className="text-gold/60 font-inter text-sm tracking-widest mb-4">
                OUTCOME {outcome.number}
              </div>

              {/* Main Text */}
              <h3 className="font-playfair text-xl md:text-2xl text-cream mb-6 leading-tight">
                {outcome.mainText}
              </h3>

              {/* Sub Text */}
              <p className="font-inter text-cream/70 leading-relaxed">
                {outcome.subText}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="font-playfair text-xl md:text-3xl text-cream italic leading-relaxed">
            Your audience will leave able to:
          </blockquote>

          <div className="mt-12 space-y-4 max-w-2xl mx-auto">
            <p className="font-inter text-cream/70 text-lg">
              Make decisions even when they do not have all the information.
            </p>
            <p className="font-inter text-cream/70 text-lg">
              Build trust across teams during uncertainty and change.
            </p>
            <p className="font-inter text-cream/70 text-lg">
              Move from hesitation to purposeful action.
            </p>
            <p className="font-inter text-gold text-lg font-medium">
              Reconnect everyday decisions with a shared mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;