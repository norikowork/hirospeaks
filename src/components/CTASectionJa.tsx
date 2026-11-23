import { useState, useEffect } from 'react';
import { Send, FileText } from 'lucide-react';
import ContactFormModalJa from './ContactFormModalJa';
import InfoRequestModalJa from './InfoRequestModalJa';

const CTASectionJa = () => {
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundImage = isMobile ? '/content/contactm.jpg' : '/content/contact.jpg';

  return (
    <>
      <section id="contact" className="relative py-32 px-6 text-cream overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Hiro Iwamotoを、あなたのステージへ
          </h2>

          <p className="font-inter text-cream/70 mb-12 max-w-lg mx-auto">
            カンファレンス、リーダーシップサミット、エグゼクティブイベントへのキーノート登壇について、お気軽にお問い合わせください。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <button
              onClick={() => setIsAvailabilityModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-gold text-white font-inter font-medium px-8 py-4 rounded-sm border-2 border-gold hover:bg-navy hover:border-navy transition-all duration-300"
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
              お問い合わせ
            </button>
          </div>

          {/* Note */}
          <p className="mt-8 text-sm text-cream/50 font-inter">
            通常48時間以内に回答
          </p>
        </div>
      </section>

      <ContactFormModalJa 
        isOpen={isAvailabilityModalOpen} 
        onClose={() => setIsAvailabilityModalOpen(false)} 
      />
      
      <InfoRequestModalJa 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </>
  );
};

export default CTASectionJa;
