import { useState, useEffect, useRef } from 'react';
import { Send, FileText } from 'lucide-react';
import ContactFormModalJa from './ContactFormModalJa';
import InfoRequestModalJa from './InfoRequestModalJa';
import VideoPauseButton from './VideoPauseButton';

const HeroSectionJa = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useSmallVideo, setUseSmallVideo] = useState(true);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  useEffect(() => {
    // Determine which video to use based on screen size and orientation
    const checkVideoSize = () => {
      const width = window.innerWidth;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      
      // Small video for mobile (< 768px) or tablet in portrait mode
      if (width < 768) {
        setUseSmallVideo(true);
      } else if (width >= 768 && width < 1024) {
        // Tablet: use small video for portrait, large video for landscape
        setUseSmallVideo(isPortrait);
      } else {
        // Desktop (>= 1024px): use large video
        setUseSmallVideo(false);
      }
    };
    
    checkVideoSize();
    window.addEventListener('resize', checkVideoSize);

    return () => {
      window.removeEventListener('resize', checkVideoSize);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh_-_300px)] md:min-h-[calc(100vh_-_200px)] flex items-center justify-center pt-20 pb-0 px-6 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        poster={useSmallVideo ? "/content/slider_m1.jpg" : "/content/hiro.webp"}
        className="absolute inset-0 w-full h-full object-cover"
        key={useSmallVideo ? 'mobile' : 'desktop'}
      >
        <source 
          src={useSmallVideo ? "/content/hirospeaksm.mp4" : "/content/hirospeaks.mp4"} 
          type="video/mp4" 
        />
      </video>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-navy/50" />
      <VideoPauseButton key={useSmallVideo ? 'pause-mobile' : 'pause-desktop'} videoRef={videoRef} lang="ja" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Name / Credibility Line */}
        <div className="opacity-0 animate-fade-in mb-10 mt-[30px] md:mt-0">
          <span className="inline-block text-sm tracking-[0.15em] uppercase text-cream/80 font-inter font-medium">
            <span className="inline-block">Navigate the Unseen™ —&nbsp;</span>
            <span className="inline-block">Hiro Iwamotoのキーノートスピーチ</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="opacity-0 animate-fade-in-up animate-delay-100 font-playfair text-cream leading-tight mb-8">
          <span className="block text-5xl md:text-6xl lg:text-7xl mb-4">
            Navigate the Unseen™
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-cream/90 font-light">
            <span className="inline-block">先が見えないときこそ、</span>
            <span className="inline-block">未来へ舵を切る。</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-in-up animate-delay-200 font-inter text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto mb-6">
          <span className="inline-block">私には、海も水平線も見えません。</span>
          <br className="hidden sm:block" />
          <span className="inline-block">それでも、</span>
          <span className="inline-block">仲間を信じ、</span>
          <span className="inline-block">太平洋を渡りました。</span>
        </p>
        <p className="opacity-0 animate-fade-in-up animate-delay-200 font-inter text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto mb-6">
          {/* Phrases are inline-block so lines only break after 、 (no lone 「す。」 line) */}
          <span className="inline-block">先の見えない未来を進むリーダーにも、</span>
          <span className="inline-block">決断する勇気と、仲間との信頼が必要です。</span>
        </p>
        <p className="opacity-0 animate-fade-in-up animate-delay-300 font-inter text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto mb-12">
          <span className="inline-block">岩本光弘は、</span>
          <span className="inline-block">自らの航海の経験を通じて、</span>
          <span className="inline-block">その一歩を支えます。</span>
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button
            onClick={() => setIsAvailabilityModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-cream/40 text-cream font-inter font-medium px-8 py-4 rounded-sm hover:border-cream hover:bg-cream/10 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            空席確認
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsInfoModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-cream/40 text-cream font-inter font-medium px-8 py-4 rounded-sm hover:border-cream hover:bg-cream/10 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            スピーカー情報リクエスト
          </button>
        </div>

        {/* Speaker Credibility */}
        <div className="opacity-0 animate-fade-in-up animate-delay-400 mt-16 text-center">
          <p className="text-cream font-playfair text-xl md:text-2xl font-medium mb-2">
            岩本光弘｜Hiro Iwamoto
          </p>
          <p className="text-cream/70 font-inter text-sm md:text-base">
            <span className="inline-block">全盲のセーラーとして世界初の太平洋横断を達成｜</span>
            <span className="inline-block">世界経済フォーラム登壇者</span>
          </p>
        </div>

      </div>

      {/* Modals */}
      <ContactFormModalJa 
        isOpen={isAvailabilityModalOpen} 
        onClose={() => setIsAvailabilityModalOpen(false)} 
      />
      
      <InfoRequestModalJa 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSectionJa;
