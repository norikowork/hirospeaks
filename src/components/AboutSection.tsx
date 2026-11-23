import { useEffect, useState, type ReactNode } from 'react';

const GOLD = '#C9A23A';

const Gold = ({ children }: { children: ReactNode }) => (
  <em className="not-italic" style={{ color: GOLD }}>
    {children}
  </em>
);

const content = {
  en: {
    eyebrow: 'Who Hiro Is',
    heading: (
      <>
        A globally recognized keynote speaker trusted by <Gold>international conferences</Gold> and{' '}
        <Gold>executive leadership teams</Gold>.
      </>
    ),
    milestones: [
      {
        marker: 'Age 16',
        title: 'A choice',
        text: 'After losing his sight, Hiro faced a choice: to surrender his life to circumstance—or to take full ownership of how he would live it.',
      },
      {
        marker: '2013',
        title: 'A failure',
        text: 'His first attempt to cross the Pacific Ocean ended in a life-threatening collision with a whale.',
      },
      {
        marker: '2019',
        title: 'A world first',
        text: 'He returned—and became the world’s first totally blind sailor to complete a nonstop Pacific Ocean crossing.',
      },
    ],
    stats: [
      { value: '12,000', unit: 'km', label: 'Sailed across the Pacific' },
      { value: '55', unit: 'days', label: 'Nonstop at sea' },
      { value: '1st', unit: '', label: 'Totally blind sailor to do it' },
    ],
    quote: 'Hiro does not speak from theory.',
    quoteSub: 'He speaks from lived experience—where decisions must be made without visibility, certainty, or guarantees.',
  },
  ja: {
    eyebrow: 'Hiro Iwamotoについて',
    heading: (
      <>
        世界各国の<Gold>国際カンファレンス</Gold>や<Gold>エグゼクティブリーダーシップチーム</Gold>
        から信頼される、グローバルに活躍するキーノートスピーカー。
      </>
    ),
    milestones: [
      {
        marker: '16歳',
        title: '選択',
        text: '視力を失ったとき、彼の前には二つの道がありました。運命に人生を委ねるのか。それとも、自らの生き方に責任を持ち、前へ進むのか。',
      },
      {
        marker: '2013',
        title: '挫折',
        text: '太平洋横断への初挑戦は失敗に終わりました。航海中にクジラと衝突し、命の危険にさらされる過酷な経験をしました。',
      },
      {
        marker: '2019',
        title: '世界初',
        text: 'Hiroは再び海へ戻り、全盲のセーラーとして世界で初めて、ノンストップでの太平洋横断を成し遂げました。',
      },
    ],
    stats: [
      { value: '12,000', unit: 'km', label: '太平洋を航海' },
      { value: '55', unit: '日間', label: 'ノンストップ航海' },
      { value: '世界初', unit: '', label: '全盲のセーラーとして' },
    ],
    quote: 'Hiroが語るのは、理論ではありません。',
    quoteSub: '視界も、確信も、保証もない状況の中で、それでも決断し、前に進んできた実体験です。',
  },
};

const AboutSection = ({ lang = 'en' }: { lang?: 'en' | 'ja' }) => {
  const c = content[lang];
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  // Fixed-ratio frame crops each photo; position keeps Hiro in view
  const images = [
    { src: '/content/hiroinfo.jpg', position: 'center 30%' },
    { src: '/content/hirospeach.jpg', position: '80% center' },
    { src: '/content/hiroinfo2.jpg', position: '65% center' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFadeState('in');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 bg-cream overflow-hidden">
      {/* Oversized background word */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-0 font-playfair text-[22vw] lg:text-[16rem] leading-none text-navy/[0.04] whitespace-nowrap"
      >
        HIRO
      </span>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: GOLD }} />
            <p className="text-xs tracking-[0.3em] uppercase font-inter font-semibold" style={{ color: GOLD }}>
              {c.eyebrow}
            </p>
          </div>
          <h2 className={`font-playfair text-navy ${lang === 'ja' ? 'text-2xl md:text-4xl leading-snug' : 'text-3xl md:text-5xl leading-tight'}`}>
            {c.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start lg:mb-16">
          {/* Large image with offset gold frame; stats panel overlaps its lower edge */}
          <div className="lg:col-span-7 lg:order-2 relative">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-5 md:translate-y-5 rounded-2xl border-2"
                style={{ borderColor: GOLD }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={images[currentImage].src}
                  alt="Hiro Iwamoto"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    fadeState === 'in' ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ objectPosition: images[currentImage].position }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="relative z-10 grid grid-cols-3 mt-8 lg:mt-0 lg:absolute lg:-bottom-16 lg:-left-20 lg:w-[88%] rounded-xl bg-navy text-cream overflow-hidden shadow-2xl ring-1 ring-cream/10">
              {c.stats.map((s, i) => (
                <div key={s.label} className={`p-4 md:p-6 ${i > 0 ? 'border-l border-cream/10' : ''}`}>
                  <p className="font-playfair text-2xl md:text-4xl leading-none whitespace-nowrap">
                    {s.value}
                    {s.unit && <span className="text-sm md:text-base ml-1" style={{ color: GOLD }}>{s.unit}</span>}
                  </p>
                  <p className="text-[10px] md:text-xs tracking-wider uppercase font-inter text-cream/60 mt-2 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-5 lg:order-1 lg:pt-4">
            <ol className="relative border-l border-navy/15 ml-2">
              {c.milestones.map((m) => (
                <li key={m.marker} className="relative pl-8 md:pl-10 pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-cream"
                    style={{ backgroundColor: GOLD }}
                  />
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-playfair text-2xl md:text-3xl text-navy">{m.marker}</span>
                    <span className="text-xs tracking-[0.2em] uppercase font-inter text-navy/50">{m.title}</span>
                  </div>
                  <p className="font-inter text-navy/75 leading-relaxed">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Closing statement */}
        <blockquote className="relative mt-20 md:mt-24 lg:mt-36 max-w-4xl mx-auto text-center">
          <span
            aria-hidden="true"
            className="block font-playfair text-7xl leading-none h-10"
            style={{ color: GOLD }}
          >
            “
          </span>
          <p className="font-playfair text-2xl md:text-4xl text-navy leading-snug">{c.quote}</p>
          <p className="font-inter text-base md:text-lg text-navy/70 leading-relaxed mt-4 max-w-2xl mx-auto">
            {c.quoteSub}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutSection;
