import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const messages = [
  { id: 64, title: "太平洋からの学び #53", date: "2026-11-10" },
  { id: 63, title: "熊本県知事を表敬訪問しました", date: "2026-11-11" },
  { id: 62, title: "現代のリーダーのための日本の知恵 #7", date: "2026-09-08" },
  { id: 61, title: "感謝のリーダーシップ Vol.17", date: "2026-09-10" },
  { id: 60, title: "何について話したいですか?", date: "2026-09-12" },
  { id: 59, title: "太平洋からの学び #46", date: "2026-09-14" },
  { id: 58, title: "現代のリーダーのための日本の知恵 #8", date: "2026-09-16" },
  { id: 57, title: "感謝のリーダーシップ Vol.18", date: "2026-09-18" },
  { id: 56, title: "太平洋からの学び #47", date: "2026-09-20" },
  { id: 55, title: "現代のリーダーのための日本の知恵 #9", date: "2026-09-22" },
  { id: 54, title: "感謝のリーダーシップ Vol.19", date: "2026-09-23" },
  { id: 53, title: "太平洋からの学び #48", date: "2026-09-25" },
  { id: 52, title: "現代のリーダーのための日本の知恵 #10", date: "2026-09-26" },
  { id: 51, title: "太平洋からの学び #49", date: "2026-09-28" },
  { id: 50, title: "新しいスピーカーリールを公開しました", date: "2026-09-30" },
  { id: 49, title: "現代のリーダーのための日本の知恵 #11", date: "2026-10-01" },
  { id: 48, title: "太平洋からの学び #50", date: "2026-10-02" },
  { id: 47, title: "感謝のリーダーシップ Vol.21", date: "2026-09-30" },
  { id: 46, title: "感謝のリーダーシップ Vol.22", date: "2026-10-06" },
  { id: 45, title: "現代のリーダーに贈る日本の知恵 #14", date: "2026-10-08" },
  { id: 44, title: "感謝のリーダーシップ Vol.23", date: "2026-10-10" },
  { id: 43, title: "現代のリーダーに贈る日本の知恵 #13", date: "2026-10-13" },
  { id: 42, title: "太平洋からの学び #51", date: "2026-10-18" },
  { id: 41, title: "現代のリーダーに贈る日本の知恵 #14", date: "2026-10-21" },
  { id: 40, title: "Arigatofulness for Leaders #24", date: "2026-10-23" },
  { id: 39, title: "Lessons from the Pacific #52", date: "2026-10-25" },
  { id: 38, title: "現代のリーダーに贈る日本の知恵 #15", date: "2026-10-26" },
  {
    id: 37,
    title: "Arigatofulness for Leaders #25",
    date: "2026-10-27",
  },
  {
    id: 36,
    title: "挑戦することに、遅すぎるということはない。",
    date: "2026-10-30",
  },
  {
    id: 35,
    title: "太平洋からの学び #41",
    date: "2026-08-11",
  },
  {
    id: 34,
    title: "感謝のリーダーシップ Vol.11",
    date: "2026-08-06",
  },
  {
    id: 33,
    title: "現代のリーダーへの日本の知恵 Vol.1",
    date: "2026-08-01",
  },
  {
    id: 32,
    title: "太平洋からの学び #40",
    date: "2026-07-20",
  },
  {
    id: 31,
    title: "感謝のリーダーシップ Vol.10",
    date: "2026-07-15",
  },
  {
    id: 30,
    title: "太平洋からの学び #39",
    date: "2026-07-10",
  },
  {
    id: 29,
    title: "ハーバードで学んだ「人は一人では輝けない」",
    date: "2026-07-08",
  },
  {
    id: 27,
    title: "感謝のリーダーシップ Vol.9",
    date: "2026-06-29",
  },
  {
    id: 26,
    title: "太平洋からの学び #37",
    date: "2026-06-25",
  },
  {
    id: 28,
    title: "太平洋からの学び #38",
    date: "2026-06-21",
  },
  {
    id: 25,
    title: "感謝のリーダーシップ Vol.8",
    date: "2026-06-20",
  },
  {
    id: 24,
    title: "太平洋からの学び #36",
    date: "2026-06-15",
  },
];

const imageMap: Record<number, string> = {
    64: '/content/11102026.jpeg',
    63: '/content/11112026.jpg',
    42: '/content/10182026.jpeg',
    53: '/content/09252026.svg',
      61: '/content/09102026.jpeg',
      62: '/content/09082026.jpeg',
     59: '/content/09142026.jpeg',
     58: '/content/09162026.jpeg',
     57: '/content/09182026.jpeg',
     56: '/content/09202026.jpeg',
     55: '/content/09222026.jpeg',
    54: '/content/09232026.jpeg',
    46: '/content/10062026.jpeg',
    47: '/content/09302026.svg',
    49: '/content/10012026.jpeg',
    52: '/content/09262026.jpeg',
     50: '/content/09302026.png',
     51: '/content/09282026.jpeg',
    48: '/content/10022026.jpeg',
    45: '/content/videoframe_75890.png',
    44: '/content/10102026_1.jpeg',
    43: '/content/10132026.jpeg',
  36: '/content/10312026_1.jpeg',
  37: '/content/10272026.jpeg',
  38: '/content/10262026.jpeg',
  39: '/content/10252026.jpeg',
  40: '/content/10232026_b.jpeg',
  41: '/content/10212026.jpeg',
  35: '/content/1783896502700.jpeg',
  34: '/content/1783330165201.jpeg',
  33: '/content/1783417322436.jpeg',
  32: '/content/1783329931125.jpeg',
  31: '/content/07152026.jpeg',
  30: '/content/07102026.jpeg',
  29: '/content/harvard.jpeg',
  28: '/content/sun.jpeg',
  27: '/content/shade.jpeg',
  26: '/content/hirojune.jpeg',
  25: '/content/bus.jpeg',
  24: '/content/ocean.jpeg',
  23: '/content/shoes.jpeg',
  22: '/content/june4.jpeg',
  21: '/content/connection.jpeg',
  20: '/content/weight1.jpeg',
  19: 'https://images.pexels.com/photos/34297452/pexels-photo-34297452.jpeg',
  18: '/content/hawaii.jpeg',
  17: '/content/toyama.jpeg',
  16: '/content/fromturkey.jpeg',
  15: '/content/afterturkey.jpeg',
  14: '/content/turkey.jpeg',
  13: '/content/arigato5.jpeg',
  12: '/content/personaljourney.jpeg',
  11: '/content/pacific32.jpeg',
  10: '/content/leader4.jpeg',
  9: '/content/pacific31.jpeg',
  1: '/content/arigatolesson3.jpeg',
  3: '/content/pacific30.jpeg',
  2: '/content/hiromeeting.jpg'
};

const latest = messages
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id))
  .slice(0, 3);

const LatestMessagesSectionJa = () => {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-6">
            ヒロの洞察
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            最新のメッセージ
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((message) => (
            <Link
              key={message.id}
              to={`/ja/message/${message.id}`}
              className="group bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                {imageMap[message.id] ? (
                <img
                  src={imageMap[message.id]}
                  alt={message.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                ) : (
                <div className="w-full h-full bg-navy flex items-center justify-center">
                  <span className="font-playfair text-2xl text-gold">HiroSpeaks</span>
                </div>
                )}
              </div>
              <div className="p-6">
                <p className="font-inter text-xs text-slate-warm/70 mb-2">{message.date}</p>
                <h3 className="font-playfair text-xl text-navy group-hover:text-gold transition-colors duration-300 leading-snug">
                  {message.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/ja/messages"
            className="inline-flex items-center gap-2 font-inter font-medium text-navy border-b-2 border-gold hover:text-gold transition-colors duration-300 pb-1"
          >
            すべてのメッセージを見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestMessagesSectionJa;
