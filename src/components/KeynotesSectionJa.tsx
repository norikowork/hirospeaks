import { useState } from 'react';
import { Send, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactFormModal from './ContactFormModal';
import InfoRequestModalJa from './InfoRequestModalJa';

const KeynotesSectionJa = () => {
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keynotes = [
    {
      number: "01",
      mainTitle: "Navigating Uncertainty\n不確実性を進む力",
      subtitle: "見えない道で、リーダーはどう決断するのか",
      description: "これまでの戦略が、明確な答えを示さなくなったとき。リーダーに求められるのは、すべてが見えるまで待つことではなく、不確実な状況の中でも前へ進む力です。このキーノートでは、リーダーが自分の内側にあるコンパスと再びつながり、冷静で思慮深い決断をするための視点を届けます。",
      bestFor: "エグゼクティブリーダーシップサミット、年次総会、グローバルカンファレンス"
    },
    {
      number: "02",
      mainTitle: "Clarity Under Pressure\nプレッシャーの中で見出す明確さ",
      subtitle: "急速な変化の時代に必要な、冷静なリーダーシップ",
      description: "変化のスピードが速い環境では、プレッシャーによって反応的な判断に流されやすくなります。このキーノートでは、リーダーが内側で一度立ち止まり、明確さ、信頼、そして揺るがないリーダーシップを生み出すための余白を取り戻します。参加者は、より地に足のついた感覚を持ち帰ります。",
      bestFor: "カンパニーキックオフ、組織変革プロジェクト、全社会議"
    },
    {
      number: "03",
      mainTitle: "The Power of Choice\n選択の力",
      subtitle: "しなやかで強い組織を、本当に支えるもの",
      description: "レジリエンスは、モチベーションだけで築かれるものではありません。それは日々の選択の中で育まれます。リーダーがどう耳を傾け、どう応答し、どう決断するのか。このキーノートでは、小さくても意図ある選択が、組織文化と長期的な強さをどのように形づくるのかを探ります。",
      bestFor: "リーダーシップ開発プログラム、企業文化・バリュー浸透イベント"
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
          キーノートテーマ
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl mb-16">
          キーノートテーマ
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
                      最適なイベント
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
                  最適なイベント
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
            空席確認
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsInfoModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-white/60 text-navy font-inter font-medium px-8 py-4 rounded-sm border border-navy/20 hover:bg-white/70 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            スピーカー情報リクエスト
          </button>
        </div>

        {/* Modals */}
        <ContactFormModal 
          isOpen={isAvailabilityModalOpen} 
          onClose={() => setIsAvailabilityModalOpen(false)} 
        />
        
        <InfoRequestModalJa 
          isOpen={isInfoModalOpen} 
          onClose={() => setIsInfoModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default KeynotesSectionJa;
