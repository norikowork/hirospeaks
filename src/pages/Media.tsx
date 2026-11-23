import { useMemo, useRef, useState } from 'react';
import { ExternalLink, PlayCircle, Headphones, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import Footer from '../components/Footer';
import FooterJa from '../components/FooterJa';
import BackToTop from '../components/BackToTop';
import { mediaItems, MediaItem, MediaKind } from '../data/mediaCoverage';
import { mediaItemsJa, countryJa } from '../data/mediaCoverageJa';

type Lang = 'en' | 'ja';

const filterKeys = ['all', 'news', 'official', 'av', 'column'] as const;
type FilterKey = (typeof filterKeys)[number];

const ITEMS_PER_PAGE = 10;

const text = {
  en: {
    locale: 'en-US',
    eyebrow: 'In the News',
    title: 'Media',
    intro: 'Coverage of Hiro’s solo, nonstop Pacific crossing and his 2026 appearance at the World Economic Forum in Davos.',
    stats: ['Publications', 'News stories', 'Countries'],
    featuredIn: 'Featured in',
    featured: ['World Economic Forum', 'Nikkei', 'Forbes JAPAN', 'NHK', 'NBC 7 San Diego', 'TV Globo', 'The San Diego Union-Tribune', 'Business Wire'],
    filters: { all: 'All', news: 'News Coverage', official: 'Official & Partners', av: 'Video & Audio', column: 'Columns' } as Record<FilterKey, string>,
    kinds: { news: 'News Story', official: 'Official', roundup: 'News Roundup', column: 'Column', release: 'Press Release' } as Record<MediaKind, string>,
    video: 'Video',
    audio: 'Audio',
    watch: 'Watch',
    listen: 'Listen',
    read: 'Read',
    alsoOn: (n: number) => `Also available on ${n} more ${n === 1 ? 'site' : 'sites'}`,
    empty: 'No items found in this category.',
    previous: 'Previous',
    next: 'Next Page',
    showing: (from: number, to: number, total: number) => `Showing ${from}–${to} of ${total}`,
  },
  ja: {
    locale: 'ja-JP',
    eyebrow: 'メディア掲載',
    title: 'メディア',
    intro: '単独・無寄港での太平洋横断への挑戦と、2026年の世界経済フォーラム（ダボス会議）への登壇についての掲載記事・番組です。',
    stats: ['掲載数', 'ニュース記事', '国・地域'],
    featuredIn: '主な掲載先',
    featured: ['世界経済フォーラム', '日本経済新聞', 'Forbes JAPAN', 'NHK', 'NBC 7 San Diego', 'TV Globo', 'The San Diego Union-Tribune', 'Business Wire'],
    filters: { all: 'すべて', news: 'ニュース', official: '公式・パートナー', av: '動画・音声', column: 'コラム' } as Record<FilterKey, string>,
    kinds: { news: 'ニュース', official: '公式', roundup: 'まとめ記事', column: 'コラム', release: 'プレスリリース' } as Record<MediaKind, string>,
    video: '動画',
    audio: '音声',
    watch: '見る',
    listen: '聴く',
    read: '読む',
    alsoOn: (n: number) => `ほかに${n}件の掲載先`,
    empty: 'このカテゴリーには掲載がありません。',
    previous: '前へ',
    next: '次のページ',
    showing: (from: number, to: number, total: number) => `${total}件中 ${from}〜${to}件を表示`,
  },
};

type Text = (typeof text)['en'];

const matchesFilter = (item: MediaItem, filter: FilterKey) => {
  switch (filter) {
    case 'all':
      return true;
    case 'news':
      return item.kind === 'news' || item.kind === 'roundup';
    case 'official':
      return item.kind === 'official' || item.kind === 'release';
    case 'av':
      return !!item.format;
    case 'column':
      return item.kind === 'column';
  }
};

const formatMonth = (date: string, locale: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString(locale, { month: 'long', year: 'numeric' });

const MediaCard = ({ item, lang, t }: { item: MediaItem; lang: Lang; t: Text }) => {
  const [open, setOpen] = useState(false);
  const d = new Date(`${item.date}T00:00:00`);
  const ja = lang === 'ja' ? mediaItemsJa[item.ref] : undefined;
  const country = (c: string) => (lang === 'ja' ? countryJa[c] ?? c : c);
  const actionLabel = item.format === 'video' ? t.watch : item.format === 'audio' ? t.listen : t.read;

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex overflow-hidden">
      {/* Date block */}
      <div className="flex-shrink-0 w-16 sm:w-20 bg-navy/5 flex flex-col items-center justify-start pt-5 text-navy">
        <span className="text-[11px] uppercase tracking-wider font-inter text-navy/70">
          {d.toLocaleDateString(t.locale, { month: 'short' })}
        </span>
        <span className="font-playfair text-2xl sm:text-3xl leading-none mt-1">{d.getDate()}</span>
      </div>

      <div className="flex-1 min-w-0 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[11px] tracking-wider uppercase text-[#C9A23A] font-inter font-semibold">
            {t.kinds[item.kind]}
          </span>
          {item.format && (
            <span className="inline-flex items-center gap-1 text-[11px] font-inter font-medium text-navy bg-navy/5 px-2 py-0.5 rounded-full">
              {item.format === 'video' ? <PlayCircle size={12} /> : <Headphones size={12} />}
              {item.format === 'video' ? t.video : t.audio}
            </span>
          )}
        </div>

        <h3 className="font-playfair text-lg sm:text-xl text-navy leading-snug">
          {ja?.outlet ?? item.outlet}
        </h3>
        <p className="text-xs font-inter text-navy/50 mb-3">{country(item.country)}</p>

        <p className="font-inter text-navy/70 leading-relaxed mb-4">{ja?.title ?? item.title}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            // Many cards share "Read"/"Watch"; name the outlet so link lists make sense
            aria-label={
              lang === 'ja'
                ? `${ja?.outlet ?? item.outlet}を${actionLabel}（新しいタブで開きます）`
                : `${actionLabel}: ${item.outlet} (opens in a new tab)`
            }
            className="inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#C9A23A] hover:text-[#C9A23A]/80 transition-colors"
          >
            {actionLabel}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          {item.alsoOn && item.alsoOn.length > 0 && (
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 text-sm font-inter text-navy/70 hover:text-navy transition-colors"
            >
              {t.alsoOn(item.alsoOn.length)}
              <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

        {open && item.alsoOn && (
          <ul className="mt-4 pt-4 border-t border-navy/10 space-y-2">
            {item.alsoOn.map((link, i) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-inter text-navy/80 hover:text-[#C9A23A] transition-colors"
                >
                  {ja?.alsoOn?.[i] ?? link.label}
                  {link.country && <span className="text-navy/50">· {country(link.country)}</span>}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

const Media = ({ lang = 'en' }: { lang?: Lang }) => {
  const t = text[lang];
  const [filter, setFilter] = useState<FilterKey>('all');
  const [page, setPage] = useState(1);
  const listTopRef = useRef<HTMLDivElement>(null);

  const sorted = useMemo(
    () => [...mediaItems].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
    []
  );

  const stats = useMemo(() => {
    const countries = new Set<string>();
    let links = 0;
    mediaItems.forEach((item) => {
      countries.add(item.country);
      links += 1 + (item.alsoOn?.length ?? 0);
      item.alsoOn?.forEach((l) => l.country && countries.add(l.country));
    });
    return {
      links,
      stories: mediaItems.filter((i) => i.kind === 'news').length,
      countries: countries.size,
    };
  }, []);

  const filtered = sorted.filter((item) => matchesFilter(item, filter));
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const pageStart = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const goToPage = (n: number) => {
    setPage(n);
    listTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeFilter = (key: FilterKey) => {
    setFilter(key);
    setPage(1);
  };

  const groups = pageItems.reduce<{ month: string; items: MediaItem[] }[]>((acc, item) => {
    const month = formatMonth(item.date, t.locale);
    const last = acc[acc.length - 1];
    if (last && last.month === month) last.items.push(item);
    else acc.push({ month, items: [item] });
    return acc;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C9A23A] font-inter font-medium mb-4">
              {t.eyebrow}
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
              {t.title}
            </h1>
            <p className="font-inter text-lg text-navy/70 max-w-2xl mx-auto">{t.intro}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-12">
            {[stats.links, stats.stories, stats.countries].map((value, i) => (
              <div key={t.stats[i]} className="bg-white rounded-lg shadow-sm py-5 text-center">
                <p className="font-playfair text-3xl sm:text-4xl text-navy">{value}</p>
                <p className="text-[11px] sm:text-xs tracking-wider uppercase text-navy/70 font-inter mt-1">
                  {t.stats[i]}
                </p>
              </div>
            ))}
          </div>

          {/* Featured in */}
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy/50 font-inter mb-4">{t.featuredIn}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {t.featured.map((name) => (
                <span key={name} className="font-playfair text-base sm:text-lg text-navy/80">
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div ref={listTopRef} className="flex flex-wrap justify-center gap-3 mb-12 scroll-mt-28">
            {filterKeys.map((key) => {
              const count = sorted.filter((item) => matchesFilter(item, key)).length;
              return (
                <button
                  key={key}
                  onClick={() => changeFilter(key)}
                  className={`px-4 py-2 text-sm font-inter font-medium rounded-full transition-all duration-300 ${
                    filter === key ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/5'
                  }`}
                >
                  {t.filters[key]} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Timeline grouped by month, newest first */}
          <div className="space-y-12">
            {groups.map((group) => (
              <section key={group.month}>
                <h2 className="font-playfair text-2xl text-navy mb-5 pb-2 border-b border-navy/10">
                  {group.month}
                </h2>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <MediaCard key={item.ref} item={item} lang={lang} t={t} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-inter text-navy/50 text-lg">{t.empty}</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-2">
                <Button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.previous}
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Button
                    key={n}
                    onClick={() => goToPage(n)}
                    variant={page === n ? 'default' : 'outline'}
                    aria-current={page === n ? 'page' : undefined}
                    className={
                      page === n
                        ? 'bg-navy text-white w-10 px-0'
                        : 'border-navy text-navy hover:bg-navy hover:text-white w-10 px-0'
                    }
                  >
                    {n}
                  </Button>
                ))}
                <Button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.next}
                </Button>
              </div>
              <p className="text-center text-sm font-inter text-navy/50 mt-4">
                {t.showing(pageStart + 1, Math.min(pageStart + ITEMS_PER_PAGE, filtered.length), filtered.length)}
              </p>
            </div>
          )}
        </div>
      </main>
      {lang === 'ja' ? <FooterJa /> : <Footer />}
      <BackToTop />
    </div>
  );
};

export default Media;
