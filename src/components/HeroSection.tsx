import { useState, useEffect, useRef } from 'react';
import { Send, FileText } from 'lucide-react';
import ContactFormModal from './ContactFormModal';
import InfoRequestModal from './InfoRequestModal';
import VideoPauseButton from './VideoPauseButton';

const HeroSection = () => {
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
      <VideoPauseButton key={useSmallVideo ? 'pause-mobile' : 'pause-desktop'} videoRef={videoRef} />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Name / Credibility Line */}
        <div className="opacity-0 animate-fade-in mb-10 mt-[30px] md:mt-0">
          <span className="inline-block text-sm tracking-[0.15em] uppercase text-cream/80 font-inter font-medium">
            Navigate the Unseen™ — A Keynote by Hiro Iwamoto
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="opacity-0 animate-fade-in-up animate-delay-100 font-playfair text-cream leading-tight mb-8">
          <span className="block text-5xl md:text-6xl lg:text-7xl mb-4">
            Navigate the Unseen™
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-cream/90 font-light">
            Leadership When the Future Isn’t Clear
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-in-up animate-delay-200 font-inter text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto mb-12">
          Hiro Iwamoto helps leaders make courageous decisions, build trust, and move forward when certainty disappears.
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button
            onClick={() => setIsAvailabilityModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-cream/40 text-cream font-inter font-medium px-8 py-4 rounded-sm hover:border-cream hover:bg-cream/10 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Check Availability
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsInfoModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-cream/40 text-cream font-inter font-medium px-8 py-4 rounded-sm hover:border-cream hover:bg-cream/10 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Request Speaker Info
          </button>
        </div>

        {/* Speaker Credibility */}
        <div className="opacity-0 animate-fade-in-up animate-delay-400 mt-16 text-center">
          <p className="text-cream font-playfair text-xl md:text-2xl font-medium mb-2">
            Hiro Iwamoto
          </p>
          <p className="text-cream/70 font-inter text-sm md:text-base">
            Keynote Speaker for Global Organizations
          </p>
          <p className="text-cream/60 font-inter text-xs md:text-sm mt-1">
            First Totally Blind Sailor to Cross the Pacific | World Economic Forum Speaker
          </p>
        </div>

      </div>

      {/* Modals */}
      <ContactFormModal 
        isOpen={isAvailabilityModalOpen} 
        onClose={() => setIsAvailabilityModalOpen(false)} 
      />
      
      <InfoRequestModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
