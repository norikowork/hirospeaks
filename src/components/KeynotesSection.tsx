import { useState } from 'react';
import { Send, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactFormModal from './ContactFormModal';
import InfoRequestModal from './InfoRequestModal';

const KeynotesSection = () => {
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keynotes = [
    {
      number: "01",
      mainTitle: "Navigating\nUncertainty",
      subtitle: "How Leaders Decide When the Path Is Invisible",
      description: "When familiar strategies no longer provide clear answers, leaders must learn how to move forward without complete certainty. This keynote helps leaders reconnect with their inner compass and make thoughtful, calm decisions.",
      bestFor: "Executive leadership summits, annual meetings, global conferences."
    },
    {
      number: "02",
      mainTitle: "Clarity Under\nPressure",
      subtitle: "Calm Leadership in Times of Rapid Change",
      description: "In fast-moving environments, pressure often leads to reactive choices. This keynote invites leaders to slow down internally, creating space for clarity, trust, and steadier leadership. Audiences leave feeling grounded.",
      bestFor: "Company kickoffs, organizational change initiatives, all-hands events."
    },
    {
      number: "03",
      mainTitle: "The Power\nof Choice",
      subtitle: "What Truly Sustains Resilient Organizations",
      description: "Resilience is not built through motivation alone. It grows through everyday choices—how leaders listen, respond, and decide. This keynote explores how small, intentional decisions shape culture and long-term strength.",
      bestFor: "Leadership development programs, culture and values events."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + keynotes.length) % keynotes.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % keynotes.length);
  };

  return (
    <section className="py-32 px-6 text-navy" style={{backgroundImage: 'url(/content/keynote.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-xs tracking-[0.2em] uppercase font-inter font-medium mb-6" style={{color: '#b8860b'}}>
          Keynote Topics
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl mb-16">
          Keynote Topics
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {keynotes.map((keynote) => (
                <div key={keynote.number} className="w-full flex-shrink-0 p-8 border border-navy/20 bg-white/60">
                  {/* Number */}
                  <div className="font-inter text-sm tracking-widest mb-4" style={{color: '#b8860b'}}>
                    {keynote.number}
                  </div>

                  {/* Main Title (with line breaks) */}
                  <h3 className="font-playfair text-xl mb-3 leading-tight whitespace-pre-line">
                    {keynote.mainTitle}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-inter text-sm mb-6" style={{color: '#b8860b'}}>
                    {keynote.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-navy/80 text-sm leading-relaxed mb-6">
                    {keynote.description}
                  </p>

                  {/* Best For */}
                  <div className="pt-4 border-t border-navy/10">
                    <p className="font-inter text-xs tracking-widest uppercase text-navy/60 mb-2">
                      Best for
                    </p>
                    <p className="font-inter text-navy/90 text-sm">
                      {keynote.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              className="p-2 border border-navy/20 rounded-full hover:bg-navy/10 transition-colors"
              aria-label="Previous keynote"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {keynotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-navy' : 'bg-navy/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 border border-navy/20 rounded-full hover:bg-navy/10 transition-colors"
              aria-label="Next keynote"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
          {keynotes.map((keynote) => (
            <div
              key={keynote.number}
              className="p-8 border border-navy/20 bg-white/60"
            >
              {/* Number */}
              <div className="font-inter text-sm tracking-widest mb-4" style={{color: '#b8860b'}}>
                {keynote.number}
              </div>

              {/* Main Title (with line breaks) */}
              <h3 className="font-playfair text-xl md:text-2xl mb-3 leading-tight whitespace-pre-line">
                {keynote.mainTitle}
              </h3>

              {/* Subtitle */}
              <p className="font-inter text-sm mb-6" style={{color: '#b8860b'}}>
                {keynote.subtitle}
              </p>

              {/* Description */}
              <p className="font-inter text-navy/80 text-sm leading-relaxed mb-6">
                {keynote.description}
              </p>

              {/* Best For */}
              <div className="pt-4 border-t border-navy/10">
                <p className="font-inter text-xs tracking-widest uppercase text-navy/60 mb-2">
                  Best for
                </p>
                <p className="font-inter text-navy/90 text-sm">
                  {keynote.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          {/* Primary CTA */}
          <button
            onClick={() => setIsAvailabilityModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-white/60 text-navy font-inter font-medium px-8 py-4 rounded-sm border border-navy/20 hover:bg-white/70 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Check Availability
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsInfoModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-white/60 text-navy font-inter font-medium px-8 py-4 rounded-sm border border-navy/20 hover:bg-white/70 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Request Speaker Info
          </button>
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
      </div>
    </section>
  );
};

export default KeynotesSection;
