import type { ComponentType } from 'react';
import { Youtube, ExternalLink, Globe, Instagram, Linkedin, X } from 'lucide-react';

const GOLD = '#C9A23A';

type IconType = ComponentType<{ className?: string; style?: React.CSSProperties }>;

interface SpeechLink {
  icon: IconType;
  label: string;
  href: string;
}

interface Speech {
  organization: string;
  topic: string;
  subtitle?: string;
  description: string;
  links: SpeechLink[];
}

const LINKS = {
  wef: 'https://www.youtube.com/live/d9jK-h_1YWs',
  tbwa: 'https://www.linkedin.com/posts/tbwa-hakuhodo_disruptorseries-tbwahakuhodo-activity-6562512760855457792-p3t8/?originalSubdomain=jp',
  adobe: 'https://x.com/AdobeJapan/status/1187219225137569799',
  sony: 'https://www.sony.co.jp/corporate/sustainability/accessibility/240318.html',
  sanyoWeb: 'https://www.sanyo-trading.co.jp/company/supporting-athlete/',
  sanyoInsta: 'https://www.instagram.com/reels/DTgsPxhj_W7/',
};

const content: Record<'en' | 'ja', {
  eyebrow: string;
  heading: string;
  credentials: string[];
  recognizedBy: string;
  speechesEyebrow: string;
  speechesHeading: string;
  speeches: Speech[];
}> = {
  en: {
    eyebrow: 'Recognition',
    heading: 'Recognition & Recent Speaking Engagements',
    credentials: [
      'Invited speaker at the World Economic Forum Annual Meeting in Davos',
      'World’s first totally blind sailor to complete a nonstop Pacific Ocean crossing (2019)',
      'Recipient of the Japan Prime Minister’s Award',
      'Recipient of the Naoki Uemura Adventure Award',
      'Recipient of the Special Commendation from Amakusa City',
      'Featured by BBC, Reuters, NHK',
    ],
    recognizedBy: 'Recognized & featured by',
    speechesEyebrow: 'On Stage',
    speechesHeading: 'Recent Keynote Engagements',
    speeches: [
      {
        organization: 'World Economic Forum (Davos)',
        topic: 'Sailing Through Barriers',
        description: 'Shared my personal journey of losing sight at sixteen, facing despair, failing in my first Pacific crossing after a whale collision, choosing to try again, and ultimately completing a historic non-stop Pacific crossing—showing how choice shapes our response to uncertainty and fear.',
        links: [{ icon: Youtube, label: 'Watch Video', href: LINKS.wef }],
      },
      {
        organization: 'TBWA Hakuhodo',
        topic: 'Leadership Through Adversity',
        description: 'Shared firsthand experiences of blindness, failure at sea, and rebuilding a dream after loss—drawn directly from my Pacific crossing journey.',
        links: [{ icon: Linkedin, label: 'LinkedIn', href: LINKS.tbwa }],
      },
      {
        organization: 'Adobe Japan',
        topic: 'Choice and Resilience',
        description: 'Spoke about losing sight, confronting despair, and continuing forward by choosing hope and gratitude through real-life challenges.',
        links: [{ icon: X, label: 'X', href: LINKS.adobe }],
      },
      {
        organization: 'Sony',
        topic: 'The DREAM Framework',
        description: 'Delivered separate keynote talks in Japan and the United States, sharing lessons from extreme challenges and introducing the DREAM framework—Direction, Relationship, Environment, Action, and Meaning—as a way to move toward goals without clear visibility.',
        links: [{ icon: Globe, label: 'Website', href: LINKS.sony }],
      },
      {
        organization: 'Sanyo Trading',
        topic: 'Leadership Essentials',
        description: 'Delivered separate keynote talks in Japan and the United States, sharing lessons from the Miyakojima Long Course Triathlon and a non-stop Pacific crossing—focusing on three essential factors for leadership: Gratitude, Connection, and Hope, and how despair can be transformed into possibility.',
        links: [
          { icon: Globe, label: 'Website', href: LINKS.sanyoWeb },
          { icon: Instagram, label: 'Instagram', href: LINKS.sanyoInsta },
        ],
      },
    ],
  },
  ja: {
    eyebrow: 'Recognition',
    heading: '表彰と最近の講演活動',
    credentials: [
      '世界経済フォーラム年次総会（ダボス）の招待スピーカー',
      '世界初の全盲セーラーとして無寄港太平洋横断を達成（2019年）',
      '日本国首相賞受賞',
      '植村直己冒険賞受賞',
      '天草市からの特別表彰受賞',
      'BBC、Reuters、NHKに取り上げられました',
    ],
    recognizedBy: '主な表彰・掲載',
    speechesEyebrow: 'On Stage',
    speechesHeading: '最近のキーノート登壇',
    speeches: [
      {
        organization: '世界経済フォーラム（ダボス）',
        topic: 'Sailing Through Barriers',
        subtitle: '壁を越えて航海する',
        description: '16歳で視力を失い、絶望を経験し、最初の太平洋横断ではクジラとの衝突により失敗。それでも再び挑戦することを選び、歴史的なノンストップ太平洋横断を達成しました。このキーノートでは、不確実性や恐れに直面したとき、私たちの未来を変えるのは「選択」であることを、Hiro自身の実体験から伝えます。',
        links: [{ icon: Youtube, label: '動画を見る', href: LINKS.wef }],
      },
      {
        organization: 'TBWA 博報堂',
        topic: 'Leadership Through Adversity',
        subtitle: '逆境を越えるリーダーシップ',
        description: '視力を失い、海で失敗し、一度は失った夢を再び築き直す。Hiro自身の太平洋横断の旅を通じて、逆境の中で立ち上がり、前へ進むリーダーシップを伝えます。',
        links: [{ icon: Linkedin, label: 'LinkedIn', href: LINKS.tbwa }],
      },
      {
        organization: 'Adobe Japan',
        topic: 'Choice and Resilience',
        subtitle: '選択とレジリエンス',
        description: '視力を失い、絶望と向き合いながらも、希望と感謝を選び、前へ進み続けること。Hiro自身の実体験を通じて、逆境の中で人が持つ選択の力と、しなやかな強さを伝えました。',
        links: [{ icon: X, label: 'X', href: LINKS.adobe }],
      },
      {
        organization: 'Sony',
        topic: 'The DREAM Framework',
        subtitle: 'DREAMフレームワーク',
        description: '日本とアメリカで行ったキーノートでは、極限の挑戦から得た学びとともに、目標へ進むためのDREAMフレームワークを紹介しました。Direction、Relationship、Environment、Action、Meaning。見通しが立たない状況でも、自分の方向性を見失わず、一歩ずつ前へ進むための実践的な考え方を伝えました。',
        links: [{ icon: Globe, label: 'ウェブサイト', href: LINKS.sony }],
      },
      {
        organization: '三洋貿易',
        topic: 'Leadership Essentials',
        subtitle: 'リーダーシップの本質',
        description: '日本とアメリカで行ったキーノートでは、宮古島ロングコーストライアスロンとノンストップ太平洋横断から得た学びを共有。Gratitude、Connection、Hopeという3つの要素を軸に、絶望を可能性へと変えていくリーダーシップの本質を伝えました。',
        links: [
          { icon: Globe, label: 'ウェブサイト', href: LINKS.sanyoWeb },
          { icon: Instagram, label: 'Instagram', href: LINKS.sanyoInsta },
        ],
      },
    ],
  },
};

const mediaLogos = [
  { name: 'World Economic Forum', src: '/content/wef.jpg' },
  { name: 'Prime Minister Award', src: '/content/prime.jpg' },
  { name: 'BBC', src: '/content/bbc.jpg' },
  { name: 'Reuters', src: '/content/reuters.jpg' },
  { name: 'NHK', src: '/content/nhk.jpg' },
];

const Eyebrow = ({ children, light = false }: { children: string; light?: boolean }) => (
  <div className="flex items-center justify-center gap-4 mb-5">
    <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
    <p
      className={`text-xs tracking-[0.3em] uppercase font-inter font-semibold ${light ? '' : ''}`}
      style={{ color: GOLD }}
    >
      {children}
    </p>
    <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
  </div>
);

const LinkPills = ({ links, dark = false }: { links: SpeechLink[]; dark?: boolean }) => (
  <div className="flex flex-wrap gap-2">
    {links.map(({ icon: Icon, label, href }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-inter font-semibold transition-colors ${
          dark
            ? 'bg-cream/10 text-cream hover:bg-cream/20'
            : 'border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-cream'
        }`}
      >
        <Icon className="w-3.5 h-3.5" />
        {label}
        <ExternalLink className="w-3 h-3 opacity-60" />
      </a>
    ))}
  </div>
);

const CredibilitySection = ({ lang = 'en' }: { lang?: 'en' | 'ja' }) => {
  const c = content[lang];
  const [featured, ...others] = c.speeches;

  return (
    <section>
      {/* Recognition — dark band */}
      <div className="relative bg-navy text-cream px-6 py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[48rem] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: GOLD }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow light>{c.eyebrow}</Eyebrow>
            <h2 className="font-playfair text-3xl md:text-5xl leading-tight">{c.heading}</h2>
          </div>

          {/* Credentials */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {c.credentials.map((credential, i) => (
              <li
                key={credential}
                className="rounded-xl border border-cream/10 bg-cream/[0.04] p-6 md:p-7 transition-colors hover:border-cream/25 hover:bg-cream/[0.07]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-playfair text-lg" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
                </div>
                <p className="font-playfair text-lg md:text-xl text-cream leading-snug">{credential}</p>
              </li>
            ))}
          </ul>

          {/* Logos */}
          <div className="mt-16">
            <p className="text-center text-[11px] tracking-[0.3em] uppercase font-inter text-cream/50 mb-6">
              {c.recognizedBy}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
              {mediaLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center h-16 md:h-20 w-28 md:w-36 rounded-lg bg-white px-3 shadow-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 md:max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent keynotes */}
      <div className="bg-cream px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow>{c.speechesEyebrow}</Eyebrow>
            <h3 className="font-playfair text-3xl md:text-5xl text-navy leading-tight">{c.speechesHeading}</h3>
          </div>

          {/* Featured: WEF */}
          <article className="relative overflow-hidden rounded-2xl bg-navy text-cream p-8 md:p-12 mb-6 shadow-xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -bottom-10 font-playfair text-[10rem] md:text-[14rem] leading-none text-cream/[0.05]"
            >
              01
            </span>
            <div className="relative md:flex md:items-end md:justify-between gap-10">
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.25em] uppercase font-inter font-semibold mb-4" style={{ color: GOLD }}>
                  {featured.organization}
                </p>
                <h4 className="font-playfair text-3xl md:text-4xl leading-tight">“{featured.topic}”</h4>
                {featured.subtitle && <p className="font-inter text-cream/60 mt-2">{featured.subtitle}</p>}
                <p className="font-inter text-cream/75 leading-relaxed mt-5">{featured.description}</p>
              </div>
              <div className="mt-8 md:mt-0 flex-shrink-0">
                <LinkPills links={featured.links} dark />
              </div>
            </div>
          </article>

          {/* Others */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((speech, i) => (
              <article
                key={speech.organization}
                className="relative flex flex-col rounded-2xl bg-white p-7 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <p className="text-xs tracking-[0.25em] uppercase font-inter font-semibold" style={{ color: GOLD }}>
                    {speech.organization}
                  </p>
                  <span className="font-playfair text-2xl text-navy/15">{String(i + 2).padStart(2, '0')}</span>
                </div>
                <h4 className="font-playfair text-2xl text-navy leading-snug">“{speech.topic}”</h4>
                {speech.subtitle && <p className="font-inter text-sm text-navy/50 mt-1">{speech.subtitle}</p>}
                <p className="font-inter text-navy/70 leading-relaxed mt-4 mb-6 flex-1">{speech.description}</p>
                <LinkPills links={speech.links} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
