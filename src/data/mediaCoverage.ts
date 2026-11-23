// Media coverage of Hiro's solo nonstop Pacific crossing and his 2026 Davos appearance.
// Source: HIRO'S CHOICE Media Coverage Archive (research cutoff 2026-11-09), verified records only.
// Republications, PDFs, extra pages and short-form versions are nested under their original in `alsoOn`.

export type MediaKind = 'news' | 'official' | 'roundup' | 'column' | 'release';

export interface MediaLink {
  label: string;
  url: string;
  country?: string;
}

export interface MediaItem {
  ref: string;
  date: string;
  outlet: string;
  country: string;
  kind: MediaKind;
  title: string;
  url: string;
  format?: 'video' | 'audio';
  alsoOn?: MediaLink[];
}

export const mediaItems: MediaItem[] = [
  // ── November 2026 ──
  {
    ref: 'R114', date: '2026-11-14', outlet: 'KTLA 5', country: 'United States', kind: 'news', format: 'video',
    title: 'Los Angeles TV news follows Hiro as he prepares to sail solo and nonstop across the Pacific Ocean.',
    url: 'https://www.youtube.com/watch?v=wAUbfWxnxnY',
  },
  {
    ref: 'R049', date: '2026-11-06', outlet: 'KAB Kumamoto Asahi Broadcasting', country: 'Japan', kind: 'news',
    title: 'Reports on Hiro’s meeting with the Governor of Kumamoto and the planned 2028 solo crossing.',
    url: 'https://www.kab.co.jp/news/article/17022893',
  },
  {
    ref: 'R020', date: '2026-11-04', outlet: 'TKU / FNN Prime Online', country: 'Japan', kind: 'news',
    title: 'Reports the governor visit and the 2028 departure from San Diego.',
    url: 'https://www.fnn.jp/articles/-/1145670',
  },
  {
    ref: 'R021', date: '2026-11-04', outlet: 'Goguy NET Kobe', country: 'Japan', kind: 'news',
    title: 'Local coverage of Hiro’s talk in Suma and his solo crossing plan supported by the Leena audio navigation app.',
    url: 'https://kobetarumi.goguynet.jp/2026/11/04/iwamotokouenkai/',
  },
  {
    ref: 'R047', date: '2026-11-04', outlet: 'Kumamoto Prefecture', country: 'Japan', kind: 'official',
    title: 'Official record of Hiro’s November 3 visit to the Governor and the 2028 solo nonstop plan.',
    url: 'https://www.pref.kumamoto.jp/site/chiji/283704.html',
  },
  {
    ref: 'R110', date: '2026-11-04', outlet: 'Jun Mori / note', country: 'Japan', kind: 'column',
    title: 'The organizer reflects on Hiro’s October 31 talk and his upcoming solo crossing.',
    url: 'https://note.com/55worldjourney/n/n592a4e796bfb',
  },
  {
    ref: 'R038', date: '2026-11-03', outlet: 'Nippon TV NEWS NNN / KKT', country: 'Japan', kind: 'news',
    title: 'KKT reports on the planned solo crossing to Ushibuka, Amakusa, scheduled for 2028.',
    url: 'https://news.ntv.co.jp/category/society/kk99b28565573e4f18b931fd72de5d01cc',
    alsoOn: [
      { label: 'KKT video (YouTube)', url: 'https://www.youtube.com/watch?v=P5G3nqlkLe8' },
      { label: 'Livedoor News', url: 'https://news.livedoor.com/article/detail/32723127/' },
    ],
  },
  {
    ref: 'R036', date: '2026-11-03', outlet: 'RKK Kumamoto', country: 'Japan', kind: 'news', format: 'video',
    title: 'RKK video: Hiro reports his solo nonstop Pacific plan to the Governor of Kumamoto.',
    url: 'https://www.youtube.com/watch?v=MwV1KSN0zO8',
  },

  // ── October 2026 ──
  {
    ref: 'R018', date: '2026-10-27', outlet: 'World Economic Forum', country: 'Switzerland', kind: 'official', format: 'video',
    title: 'Video: “This man sailed blind across the Pacific” — Hiro’s experience and lessons in leadership.',
    url: 'https://www.weforum.org/videos/this-man-sailed-blind-across-the-pacific',
  },
  {
    ref: 'R054', date: '2026-10-26', outlet: 'Kumamoto Prefecture', country: 'Japan', kind: 'official',
    title: 'The Governor’s press conference introduces Hiro’s solo nonstop plan and his upcoming visit.',
    url: 'https://www.pref.kumamoto.jp/site/chiji/283294.html',
  },
  {
    ref: 'R017', date: '2026-10-25', outlet: 'Sun TV', country: 'Japan', kind: 'news',
    title: 'Reports on Hiro’s talk at Suma Yacht Harbor and his new solo challenge.',
    url: 'https://www.sun-tv.co.jp/suntvnews/news/2026/10/25/97483/',
    alsoOn: [
      { label: 'Sun TV News video (YouTube)', url: 'https://www.youtube.com/watch?v=K2bcXC4AXxg' },
    ],
  },
  {
    ref: 'R064', date: '2026-10-13', outlet: 'AltaSea', country: 'United States', kind: 'official',
    title: 'Announces Hiro’s appearance at the AltaSea Open House on November 14 and his upcoming crossing.',
    url: 'https://altasea.org/event/altasea-open-house-blind-sailor-charting-new-horizons/',
  },
  {
    ref: 'R109', date: '2026-10-07', outlet: 'Amagasaki Keizai Shimbun', country: 'Japan', kind: 'release',
    title: 'SUMArt DAYS announcement featuring Hiro’s talk in Suma and his solo challenge.',
    url: 'https://amagasaki.keizai.biz/release/660505/',
  },
  {
    ref: 'R059', date: '2026-10-03', outlet: 'Suma Universal Beach Project / PR TIMES', country: 'Japan', kind: 'official',
    title: 'Announces a talk by Hiro in Suma on October 25, ahead of his solo Pacific challenge.',
    url: 'https://prtimes.jp/main/html/rd/p/000000177.000074318.html',
  },

  // ── September 2026 ──
  {
    ref: 'R065', date: '2026-09-30', outlet: 'FURUNO', country: 'Japan', kind: 'official',
    title: 'Launches a website supporting ocean challengers, including Hiro.',
    url: 'https://www.furuno.co.jp/news/general/general_category.html?dispmid=1017&itemid=1873',
    alsoOn: [
      { label: 'Amagasaki Keizai Shimbun', url: 'https://amagasaki.keizai.biz/release/655573/' },
      { label: 'Zaikei Shimbun', url: 'https://www.zaikei.co.jp/releases/3638953/' },
    ],
  },
  {
    ref: 'R085', date: '2026-09-30', outlet: 'Dellows News', country: 'Japan', kind: 'roundup',
    title: 'Summarizes FURUNO’s new ocean-challenge website, including Hiro’s project.',
    url: 'https://news.dellows.jp/526129/',
  },

  // ── August 2026 ──
  {
    ref: 'R069', date: '2026-08-26', outlet: 'Gomu Hochi Shimbun NEXT', country: 'Japan', kind: 'news',
    title: 'Covers Sanyo Trading’s discussion videos and the Pacific project now in preparation.',
    url: 'https://gomuhouchi.com/news/79385/',
  },
  {
    ref: 'R112', date: '2026-08-21', outlet: 'Jun Mori / note', country: 'Japan', kind: 'column',
    title: 'A column on what drives Hiro’s solo crossing and why the author organized his talk.',
    url: 'https://note.com/55worldjourney/n/na18b5bfa858c',
  },
  {
    ref: 'R073', date: '2026-08-19', outlet: 'Sanyo Trading', country: 'Japan', kind: 'official', format: 'video',
    title: 'Three-part video series featuring Hiro, Mr. Shintani and Kasetsu Iwashi on the crossing and its support.',
    url: 'https://www.sanyo-trading.co.jp/2026/08/19/movie/',
    alsoOn: [
      { label: 'Chapter 1: Hiro’s thoughts ahead of the crossing (YouTube)', url: 'https://www.youtube.com/watch?v=-caMlyYu6bo' },
      { label: 'Chapter 3: Three-way discussion on the crossing (YouTube)', url: 'https://www.youtube.com/watch?v=d5Qw7EHjRL8' },
    ],
  },
  {
    ref: 'R111', date: '2026-08-13', outlet: 'Yosuke Yamamoto / note', country: 'Japan', kind: 'column',
    title: 'The co-organizer writes about Hiro’s talk, his Davos invitation and the solo crossing.',
    url: 'https://note.com/yosukeyjp/n/n9beb417ddea1',
  },
  {
    ref: 'R030', date: '2026-08-08', outlet: 'NHK Radio', country: 'Japan', kind: 'news', format: 'audio',
    title: 'NHK radio programme: Hiro Iwamoto, a blind adventurer preparing for a solo Pacific crossing.',
    url: 'https://www.nhk.jp/p/shikaku/rs/NYR99L5P4X/episode/re/P7X5LKL4NQ/',
  },

  // ── July 2026 ──
  {
    ref: 'R022', date: '2026-07-27', outlet: 'World Economic Forum — Meet the Leader podcast', country: 'Switzerland', kind: 'official', format: 'audio',
    title: 'Podcast: Hiro on uncertainty, partnership, fear and the decision to take action.',
    url: 'https://www.weforum.org/podcasts/meet-the-leader/hiro-iwamoto-blind-sailor-lessons-fear-decision',
    alsoOn: [
      { label: 'Japanese episode page', url: 'https://jp.weforum.org/podcasts/meet-the-leader-jp-series/hiro-iwamoto-blind-sailor-lessons-fear-decision' },
    ],
  },
  {
    ref: 'R106', date: '2026-07-15', outlet: 'VEJA', country: 'Brazil', kind: 'roundup',
    title: 'Brazilian magazine story on Hiro’s adventure, citing TV Globo’s Fantástico feature.',
    url: 'https://veja.abril.com.br/coluna/veja-gente/a-aventura-do-navegador-cego-que-cruzou-o-pacifico-sozinho-em-veleiro/',
  },
  {
    ref: 'R029', date: '2026-07-12', outlet: 'Fantástico / TV Globo', country: 'Brazil', kind: 'news', format: 'video',
    title: 'Six-minute TV feature interviewing Hiro in San Diego.',
    url: 'https://globoplay.globo.com/v/14773760/',
  },

  // ── June 2026 ──
  {
    ref: 'R070', date: '2026-06-22', outlet: 'FURUNO — umi no oto (note)', country: 'Japan', kind: 'official',
    title: 'Interview on the solo crossing, the Leena app and trust in supporters.',
    url: 'https://note.com/furuno_umi_note/n/n67f3e6c6d16d',
  },

  // ── March 2026 ──
  {
    ref: 'R074', date: '2026-03-22', outlet: 'San Diego Japanese Business Association', country: 'United States', kind: 'official',
    title: 'Event report: Hiro’s March 19 talk, Davos footage and preparations for the next crossing.',
    url: 'https://www.sdjba.org/whats-new/554213/2026-03-22',
  },
  {
    ref: 'R016', date: '2026-03-13', outlet: 'The San Diego Union-Tribune', country: 'United States', kind: 'news',
    title: 'Blind sailor to set out from Point Loma on a solo nonstop cross-Pacific voyage to Amakusa.',
    url: 'https://www.sandiegouniontribune.com/2026/03/13/blind-sailor-to-set-out-from-point-loma-on-solo-nonstop-cross-pacific-voyage/',
  },
  {
    ref: 'R044', date: '2026-03-06', outlet: 'Boat & Yacht / Marine Business', country: 'Germany', kind: 'roundup',
    title: 'Blind sailor plans an unprecedented solo trans-Pacific crossing — the plan and its support systems.',
    url: 'https://www.boat-and-yacht.com/en/blog/blind-sailor-plans-unprecedented-solo-trans-pacific-crossing',
  },

  // ── February 2026 ──
  {
    ref: 'R075', date: '2026-02-18', outlet: 'Management by Philosophy', country: 'Japan', kind: 'column',
    title: 'Jun Mori reflects on a conversation with Hiro about Davos and the solo crossing.',
    url: 'https://mbp-mj.jp/adventurer_hiro_iwamoto/',
  },
  {
    ref: 'R023', date: '2026-02-13', outlet: 'Forbes JAPAN', country: 'Japan', kind: 'news',
    title: 'Davos interview exploring Hiro’s views on dialogue and possibility.',
    url: 'https://forbesjapan.com/articles/detail/91672',
    alsoOn: [
      { label: 'Page 2', url: 'https://forbesjapan.com/articles/detail/91672/page2' },
      { label: 'Page 3', url: 'https://forbesjapan.com/articles/detail/91672/page3' },
    ],
  },
  {
    ref: 'R015', date: '2026-02-11', outlet: 'Latitude 38', country: 'United States', kind: 'news',
    title: 'The Challenged Athletes Foundation press conference and Hiro’s voyage preparations.',
    url: 'https://www.latitude38.com/lectronic/challenged-athletes-foundation-blind-sailor-hiro-iwamoto/',
  },
  {
    ref: 'R014', date: '2026-02-09', outlet: 'Scuttlebutt Sailing News', country: 'United States', kind: 'roundup',
    title: '“Giving courage to others” — a brief on Hiro’s solo challenge.',
    url: 'https://www.sailingscuttlebutt.com/2026/02/09/giving-courage-to-others/',
    alsoOn: [
      { label: 'BARCOS i BARCOS (Portuguese)', url: 'https://htttpsbarcosibarcos.blogspot.com/2026/02/scuttlebutt-6503-february-10-2026-boato.html' },
    ],
  },
  {
    ref: 'R013', date: '2026-02-05', outlet: 'Marine Industry News', country: 'United Kingdom', kind: 'news',
    title: 'Blind Japanese sailor plans a solo trans-Pacific crossing with Leena audio navigation.',
    url: 'https://marineindustrynews.co.uk/blind-japanese-sailor-solo-trans-pacific-crossing/',
  },
  {
    ref: 'R113', date: '2026-02-05', outlet: 'voice_of_i / note', country: 'Japan', kind: 'roundup',
    title: 'Shares Hiro’s Davos session video with a Japanese summary.',
    url: 'https://note.com/voice_of_i/n/nd3293a69dcdb',
  },
  {
    ref: 'R011', date: '2026-02-04', outlet: 'Times of San Diego', country: 'United States', kind: 'news',
    title: 'Reports the January 28 press conference, the solo crossing and the support behind it.',
    url: 'https://timesofsandiego.com/life/2026/02/04/blind-japanese-sailor-solo-pacific-san-diego/',
    alsoOn: [
      { label: 'San Diego Metro', url: 'https://www.sandiegometro.com/2026/02/daily-business-report-february-6-2026/' },
    ],
  },
  {
    ref: 'R063', date: '2026-02-03', outlet: 'Business Wire', country: 'United States', kind: 'official',
    title: 'Blind sailor Mitsuhiro Iwamoto redefines the limits of possibility through technology in a historic trans-Pacific project.',
    url: 'https://www.businesswire.com/news/home/20260128531637/en/',
    alsoOn: [
      { label: 'StreetInsider', url: 'https://www.streetinsider.com/Business%2BWire/Blind%2BSailor%2BMitsuhiro%2BIwamoto%2BRedefines%2Bthe%2BLimits%2Bof%2BPossibility%2BThrough%2BTechnology%2Bin%2Ba%2BHistoric%2BTrans-Pacific%2BProject/25932688.html', country: 'United States' },
      { label: 'AETOSWire', url: 'https://www.aetoswire.com/en/news/3022026529544', country: 'UAE' },
      { label: 'TT News Agency', url: 'https://via.tt.se/pressmeddelande/4234171/blind-sailor-mitsuhiro-iwamoto-redefines-the-limits-of-possibility-through-technology-in-a-historic-trans-pacific-project?lang=en&publisherId=259167', country: 'Sweden' },
      { label: 'Korea Newswire', url: 'https://www.koreanewswire.co.kr/newsRead.php?no=1028173', country: 'South Korea' },
    ],
  },
  {
    ref: 'R010', date: '2026-02-02', outlet: 'Japan Maritime Daily', country: 'Japan', kind: 'news',
    title: 'Trade report on FURUNO’s support for the crossing.',
    url: 'https://www.jmd.co.jp/article.php?no=312112',
  },
  {
    ref: 'R060', date: '2026-02-02', outlet: 'Runner’s Wellness / PR TIMES', country: 'Japan', kind: 'official',
    title: 'Release on the San Diego press conference, the technology and education plans.',
    url: 'https://prtimes.jp/main/html/rd/p/000000060.000158930.html',
    alsoOn: [
      { label: 'Tokyo Shimbun × PR TIMES', url: 'https://adv.tokyo-np.co.jp/prtimes/article116029/' },
      { label: 'Mapion News', url: 'https://www.mapion.co.jp/news/release/000000060.000158930-all/' },
    ],
  },

  // ── January 2026 ──
  {
    ref: 'R024', date: '2026-01-31', outlet: 'ABC 10News San Diego', country: 'United States', kind: 'news',
    title: 'Blind San Diego sailor prepares for a historic solo voyage across the Pacific Ocean.',
    url: 'https://www.10news.com/news/local-news/san-diego-news/blind-san-diego-sailor-prepares-for-historic-solo-voyage-across-pacific-ocean',
    alsoOn: [
      { label: 'ABC 10News video (YouTube)', url: 'https://www.youtube.com/watch?v=yUpIz5RWO_0' },
    ],
  },
  {
    ref: 'R035', date: '2026-01-29', outlet: 'Nikkei', country: 'Japan', kind: 'news',
    title: 'Reports FURUNO’s support for the solo crossing and the dedicated audio navigation app.',
    url: 'https://www.nikkei.com/article/DGXZQOUF291LW0Z20C26A1000000/',
  },
  {
    ref: 'R062', date: '2026-01-29', outlet: 'Voice of San Diego', country: 'United States', kind: 'roundup',
    title: 'Morning Report roundup featuring NBC 7’s story on Hiro’s solo crossing.',
    url: 'https://voiceofsandiego.org/2026/01/29/morning-report-vacation-home-tax-is-dead/',
  },
  {
    ref: 'R025', date: '2026-01-28', outlet: 'CBS 8 San Diego', country: 'United States', kind: 'news', format: 'video',
    title: 'Video on Hiro’s preparations for a solo voyage from San Diego to Japan.',
    url: 'https://www.youtube.com/watch?v=VV0aFItJN6c',
    alsoOn: [
      { label: 'Short version (YouTube Shorts)', url: 'https://www.youtube.com/shorts/C3aoMeaVsQQ' },
    ],
  },
  {
    ref: 'R027', date: '2026-01-28', outlet: 'FOX 5 San Diego', country: 'United States', kind: 'news', format: 'video',
    title: 'Introduces Hiro’s planned solo voyage from San Diego to Japan.',
    url: 'https://www.youtube.com/watch?v=5TKZoo9ftHA',
  },
  {
    ref: 'R028', date: '2026-01-28', outlet: 'NBC 7 San Diego', country: 'United States', kind: 'news', format: 'video',
    title: 'Blind sailor preparing to journey across the Pacific Ocean alone to Japan.',
    url: 'https://www.nbcsandiego.com/video/videos/blind-sailor-preparing-to-journey-across-the-pacific-ocean-alone-to-japan/3968719/',
  },
  {
    ref: 'R009', date: '2026-01-28', outlet: 'FURUNO', country: 'Japan', kind: 'official',
    title: 'Announces technical sponsorship — navigation equipment and audio-app development — for the solo nonstop crossing.',
    url: 'https://www.furuno.co.jp/news/general/general_category.html?dispmid=1017&itemid=1768',
    alsoOn: [
      { label: 'English announcement', url: 'https://www.furuno.co.jp/en/news/general/general_category.html?dispmid=961&itemid=1772' },
      { label: 'MIRAI PULSE explainer (English)', url: 'https://future-vision.furuno.co.jp/en/mirai-pulse/article/20260126.html' },
      { label: 'PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000000106.000089783.html' },
    ],
  },
  {
    ref: 'R031', date: '2026-01-28', outlet: 'Goldwin / HELLY HANSEN', country: 'Japan', kind: 'official',
    title: 'Announces official support through specially developed sailing wear.',
    url: 'https://about.goldwin.co.jp/news/page-39191',
    alsoOn: [
      { label: 'PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000001236.000007414.html' },
      { label: 'Sportsmania', url: 'https://sportsmania.jp/335528/' },
      { label: 'Mapion News', url: 'https://www.mapion.co.jp/news/release/000001236.000007414-all/' },
    ],
  },
  {
    ref: 'R042', date: '2026-01-23', outlet: 'Business Wire', country: 'United States', kind: 'official',
    title: '“And I Chose to Live”: blind sailor Mitsuhiro Iwamoto takes the stage at WEF.',
    url: 'https://www.businesswire.com/news/home/20260121469502/en/',
    alsoOn: [
      { label: 'Via Ritzau', url: 'https://via.ritzau.dk/pressemeddelelse/14764587/and-i-chose-to-live-the-blind-sailor-mitsuhiro-iwamoto-takes-the-stage-at-wef?lang=en&publisherId=90456', country: 'Denmark' },
      { label: 'STT Info', url: 'https://www.sttinfo.fi/tiedote/71757703/and-i-chose-to-live-the-blind-sailor-mitsuhiro-iwamoto-takes-the-stage-at-wef?lang=en&publisherId=58763726', country: 'Finland' },
      { label: 'AETOSWire', url: 'https://aetoswire.com/en/news/2301202652627', country: 'UAE' },
      { label: 'Medianet News Hub', url: 'https://newshub.medianet.com.au/2026/01/and-i-chose-to-live-the-blind-sailor-mitsuhiro-iwamoto-takes-the-stage-at-wef/136925/', country: 'Australia' },
      { label: 'Korea Newswire', url: 'https://www.newswire.co.kr/newsRead.php?no=1027538', country: 'South Korea' },
    ],
  },
  {
    ref: 'R078', date: '2026-01-22', outlet: 'World Economic Forum', country: 'Switzerland', kind: 'official', format: 'video',
    title: '“Sailing through Barriers” — official video of Hiro’s Davos session.',
    url: 'https://www.youtube.com/watch?v=d9jK-h_1YWs',
  },
  {
    ref: 'R004', date: '2026-01-22', outlet: 'Runner’s Wellness / PR TIMES', country: 'Japan', kind: 'official',
    title: 'Release on Hiro’s Davos speech and the solo nonstop Pacific crossing.',
    url: 'https://prtimes.jp/main/html/rd/p/000000058.000158930.html',
    alsoOn: [
      { label: 'Excite News', url: 'https://www.excite.co.jp/news/article/Prtimes_2026-01-22-158930-58/' },
      { label: 'Infoseek News', url: 'https://news.infoseek.co.jp/article/prtimes_000000058_000158930/' },
      { label: 'STRAIGHT PRESS', url: 'https://straightpress.jp/company_news/detail?pr=000000058.000158930' },
    ],
  },
  {
    ref: 'R089', date: '2026-01-22', outlet: 'Third News', country: 'Japan', kind: 'roundup',
    title: 'Summarizes Hiro’s Davos appearance and the solo nonstop Pacific plan.',
    url: 'https://news.3rd-in.co.jp/article/7b2d420e-f745-11f0-9d20-9ca3ba083d71',
  },
  {
    ref: 'R102', date: '2026-01-15', outlet: 'SegelReporter', country: 'Germany', kind: 'news',
    title: 'The solo Pacific plan, the boat, the technology and the preparation behind it.',
    url: 'https://segelreporter.com/panorama/blinder-japaner-segelt-einhand-ueber-den-pazifik-welche-technik-und-plaene-dahinter-stecken/',
  },
  {
    ref: 'R051', date: '2026-01-15', outlet: 'Gomu Times', country: 'Japan', kind: 'news',
    title: 'Trade report on Sanyo Trading’s support for the crossing.',
    url: 'https://www.gomutimes.co.jp/?p=210619',
  },
  {
    ref: 'R050', date: '2026-01-14', outlet: 'Gomu Hochi Shimbun NEXT', country: 'Japan', kind: 'news',
    title: 'Trade coverage of Sanyo Trading’s support and Hiro’s planned Davos appearance.',
    url: 'https://gomuhouchi.com/news/72691/',
  },
  {
    ref: 'R002', date: '2026-01-13', outlet: 'KAZI online', country: 'Japan', kind: 'news',
    title: 'Introduces Hiro’s new solo Pacific crossing challenge.',
    url: 'https://www.kazi-online.com/articles/hiro_260113/',
  },
  {
    ref: 'R068', date: '2026-01-13', outlet: 'World Economic Forum', country: 'Switzerland', kind: 'official',
    title: 'Names Hiro Iwamoto among the artistic and cultural leaders attending the Annual Meeting 2026.',
    url: 'https://www.weforum.org/media/a-spirit-of-dialogue-brings-record-numbers-of-world-leaders-to-davos-for-world-economic-forum-annual-meeting-2026',
  },
  {
    ref: 'R001', date: '2026-01-13', outlet: 'Sanyo Trading', country: 'Japan', kind: 'official',
    title: 'Announces sponsorship of the trans-Pacific crossing and Hiro’s Davos appearance.',
    url: 'https://www.sanyo-trading.co.jp/2026/01/13/trans-pacific-crossing/',
    alsoOn: [
      { label: 'PR TIMES', url: 'https://prtimes.jp/main/html/rd/p/000000063.000080925.html' },
      { label: 'Release PDF', url: 'https://www.sanyo-trading.co.jp/stc/wp-content/uploads/2026/01/20260113_Trans-Pacific-Crossing1-1.pdf' },
      { label: 'PR TIMES PDF', url: 'https://prtimes.jp/a/?c=80925&f=d80925-63-e2def35c5844b7adca8fdfd16098b4f4.pdf&r=63' },
    ],
  },
  {
    ref: 'R071', date: '2026-01-13', outlet: 'Sanyo Trading', country: 'Japan', kind: 'official', format: 'video',
    title: 'Video: why Sanyo Trading supports Hiro.',
    url: 'https://www.youtube.com/watch?v=Xz7dETXB9mc',
  },
  {
    ref: 'R052', date: '2026-01-13', outlet: 'Runner’s Wellness / PR TIMES', country: 'Japan', kind: 'official',
    title: 'Announces the project launch and Hiro’s confirmed Davos appearance.',
    url: 'https://prtimes.jp/main/html/rd/p/000000057.000158930.html',
    alsoOn: [
      { label: 'Mapion News', url: 'https://www.mapion.co.jp/news/release/000000057.000158930-all/' },
    ],
  },
  {
    ref: 'R093', date: '2026-01-10', outlet: 'HIRO’S CHOICE', country: 'Japan', kind: 'official', format: 'video',
    title: 'Official video introducing the app-based audio navigation system.',
    url: 'https://www.youtube.com/watch?v=ysi77xYiLhE',
  },
  {
    ref: 'R067', date: '2026-01-05', outlet: 'World Economic Forum', country: 'Switzerland', kind: 'official',
    title: 'Introduces Hiro as a participant in the Davos 2026 arts and culture programme.',
    url: 'https://www.weforum.org/stories/arts-and-culture/davos-2026-arts-and-culture-programme',
  },
];
