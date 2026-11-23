import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterJa from '../components/FooterJa';
import BackToTop from '../components/BackToTop';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';

const HiroMessageJa = () => {
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const sortedMessages = [...messages].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id));
  const filteredMessages = filter === 'all' ? sortedMessages : sortedMessages.filter(msg => {
    const categories = Array.isArray(msg.category) ? msg.category : [msg.category];
    return categories.some(cat => cat.toLowerCase() === filter.toLowerCase());
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const allCategories = messages.flatMap(m => Array.isArray(m.category) ? m.category : [m.category]);
  const categories = ['all', ...Array.from(new Set(allCategories))];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-6">
              ヒロの洞察
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
              メッセージ
            </h1>
            <p className="font-inter text-lg text-slate-warm max-w-2xl mx-auto">
              リーダーシップ、レジリエンス、そして見えないものを見ることについて
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const categoryLabel = category === 'all' ? 'すべて' : 
                category === 'Leadership' ? 'リーダーシップ' :
                category === 'Resilience' ? 'レジリエンス' :
                category === 'Arigato' ? 'ありがとう' :
                category === 'Personal Journey' ? '個人の旅' :
                category === 'Keynote Speaker' ? 'キーノートスピーカー' :
                category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-inter font-medium rounded-full transition-all duration-300 ${
                    filter === category.toLowerCase()
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy hover:bg-navy/5'
                  }`}
                >
                  {categoryLabel}
                </button>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-12">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                前へ
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  className={currentPage === pageNumber ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"}
                >
                  {pageNumber}
                </Button>
              ))}
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                次へ
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentMessages.map((message) => (
              <Card 
                key={message.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden"
              >
                {(() => {
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
                  const imagePath = imageMap[message.id];
                  if (imagePath) {
                    return (
                      <Link to={`/ja/message/${message.id}`} className="block relative h-48 overflow-hidden group">
                        <img 
                          src={imagePath} 
                          alt={message.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    );
                  }
                  return null;
                })()}
                
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="text-xs tracking-wider uppercase text-gold font-inter font-medium">
                      {Array.isArray(message.category) ? message.category.join(' • ') : message.category}
                    </span>
                  </div>

                  <Link to={`/ja/message/${message.id}`}>
                    <h2 className="font-playfair text-xl md:text-2xl text-navy mb-3 leading-tight hover:text-gold transition-colors duration-300">
                      {message.title}
                    </h2>
                  </Link>

                  <p className="font-inter text-slate-warm leading-relaxed mb-6">
                    {message.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-warm/50 font-inter">
                      {new Date(message.date).toLocaleDateString('ja-JP', { 
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    {/* One link (not a button inside a link), named with the post title for screen readers */}
                    <Button
                      asChild
                      variant="ghost"
                      className="text-gold hover:text-gold/80 font-inter font-medium text-sm"
                    >
                      <Link to={`/ja/message/${message.id}`} aria-label={`もっと読む：${message.title}`}>
                        もっと読む
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                前へ
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  className={currentPage === pageNumber ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"}
                >
                  {pageNumber}
                </Button>
              ))}
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                次へ
              </Button>
            </div>
          )}
        </div>
      </main>
      <FooterJa />
      <BackToTop />
    </div>
  );
};

export default HiroMessageJa;

// Import messages from the main HiroMessage component
const messages = [
  {
    id: 64,
    title: "太平洋からの学び #53",
    excerpt: "単独無寄港の太平洋横断を2027年から2028年に延期する決断をチームで下しました。自分の予定を手放すことは、ミッションを守ることだと学びました。",
    date: "2026-11-10",
    category: ["リーダーシップ", "基調講演"]
  },
  {
    id: 63,
    title: "熊本県知事を表敬訪問しました",
    excerpt: "HiroSpeaksのプロジェクトの一環で、熊本県知事を表敬訪問させていただきました。その様子が熊本のテレビで放映されました。",
    date: "2026-11-11",
    category: ["ありがとう"]
  },
  {
    id: 62,
    title: "現代のリーダーのための日本の知恵 #7",
    excerpt: "組織はつい外に新しいものを探しがちです。「もったいない」は、チームの中にすでにある知識・経験・可能性に気づくよう、リーダーに促します。",
    date: "2026-09-08",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 61,
    title: "感謝のリーダーシップ Vol.17",
    excerpt: "NHKラジオの収録中、娘リーナからの音声メッセージを聞いて、2019年の出発前に彼女がくれた長く強いハグの意味をようやく理解しました。",
    date: "2026-09-10",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 60,
    title: "何について話したいですか?",
    excerpt: "2013年、クジラとの衝突で太平洋横断の夢は途絶えました。亡き叔父からのメッセージが、その出来事の見え方を変えてくれました。",
    date: "2026-09-12",
    category: ["リーダーシップ"]
  },
  {
    id: 59,
    title: "太平洋からの学び #46",
    excerpt: "同じ船、同じ海でも、ダグと私が受け取る情報は違いました。二つの視点が合わさって、嵐の接近に気づけたのです。",
    date: "2026-09-14",
    category: ["リーダーシップ"]
  },
  {
    id: 58,
    title: "現代のリーダーのための日本の知恵 #8",
    excerpt: "残心――行動のあとも意識を保ち続けること。リーダーシップは、決断した時点では終わりません。",
    date: "2026-09-16",
    category: ["リーダーシップ"]
  },
  {
    id: 57,
    title: "感謝のリーダーシップ Vol.18",
    excerpt: "青少年セミナーの準備を手伝ってくれた3人の高校生。若者に必要なのは席ではなく、場を形づくる機会だと教えてくれました。",
    date: "2026-09-18",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 56,
    title: "太平洋からの学び #47",
    excerpt: "ヨットは45度近く傾いても転覆しませんでした。水面下で見えないキールが、その違いを生んだのです。",
    date: "2026-09-20",
    category: ["リーダーシップ"]
  },
  {
    id: 55,
    title: "現代のリーダーのための日本の知恵 #9",
    excerpt: "拍手だけでは、基調講演の成功はわかりません。三方よしが問いかけます。今、誰が得をするのか。そして後から誰が得をするのか。",
    date: "2026-09-22",
    category: ["リーダーシップ", "基調講演"]
  },
  {
    id: 54,
    title: "感謝のリーダーシップ Vol.19",
    excerpt: "若者にできないことを決めつける前に、彼らが何を提供できるかを発見する機会を与えましょう。意味のある責任が、自信の始まりになります。",
    date: "2026-09-23",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 53,
    title: "太平洋からの学び #48",
    excerpt: "計画が優れていても、うまくいかなくなることがあります。私たちの仕事は計画を守ることではなく、使命を守ることでした。",
    date: "2026-09-25",
    category: ["リーダーシップ"]
  },
  {
    id: 52,
    title: "現代のリーダーのための日本の知恵 #10",
    excerpt: "突破口は、古い知恵と新しい可能性を組み合わせたところに生まれることがあります。忘れかけている学びは何でしょうか。",
    date: "2026-09-26",
    category: ["リーダーシップ"]
  },
  {
    id: 51,
    title: "太平洋からの学び #49",
    excerpt: "日本に着いたことは、旅の終わりではありませんでした。達成とは成し遂げたこと。レガシーとは、そこから続いていくものです。",
    date: "2026-09-28",
    category: ["リーダーシップ"],
  },
  {
    id: 50,
    title: "新しいスピーカーリールを公開しました",
    excerpt: "新しいスピーカーリールをついに公開しました。次の一歩を踏み出すために、道のりのすべてが見えている必要はありません。",
    date: "2026-09-30",
    category: ["リーダーシップ", "基調講演"]
  },
  {
    id: 49,
    title: "現代のリーダーのための日本の知恵 #11",
    excerpt: "プレッシャーが来たときに使えるよう、基本を稽古しておく。危機が来てからチームのあり方を決めるのでは遅いのです。",
    date: "2026-10-01",
    category: ["リーダーシップ"]
  },
  {
    id: 48,
    title: "太平洋からの学び #50",
    excerpt: "2人乗りのヨットでは、もうひとりを起こすことも立派なリーダーシップの判断です。早く助けを求めることは、最も強力なリスク管理のひとつです。",
    date: "2026-10-02",
    category: ["リーダーシップ"]
  },
  {
    id: 47,
    title: "感謝のリーダーシップ Vol.21",
    excerpt: "「選べない」と思っていたのに、選べました。小さな自由は見過ごしやすく、感謝はごく普通の瞬間から始まります。",
    date: "2026-09-30",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 46,
    title: "感謝のリーダーシップ Vol.22",
    excerpt: "ムーンライトビーチで、ひとりの感謝が別のひとりの感謝を目覚めさせました。言葉にした「ありがとう」は、人と人の間につながりを生みます。",
    date: "2026-10-06",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 45,
    title: "現代のリーダーに贈る日本の知恵 #14",
    excerpt: "世界経済フォーラムがこの物語を伝え続けてくださることに感謝します。勇気とは、恐れがあっても前に進むと選ぶことです。",
    date: "2026-10-08",
    category: ["リーダーシップ"]
  },
  {
    id: 44,
    title: "感謝のリーダーシップ Vol.23",
    excerpt: "日本経営の新年度キックオフで基調講演をしました。お伝えしたのは「TEAM」。Trust、Empathy、Act、Mission。この言葉が組織の共通テーマになりました。",
    date: "2026-10-10",
    category: ["リーダーシップ", "キーノートスピーカー"]
  },
  {
    id: 43,
    title: "現代のリーダーに贈る日本の知恵 #13",
    excerpt: "これは本当に「私の」成功だったのだろうか。日本語には「おかげさまで」という言葉があります。目に見える成果の陰には、光の当たらない場所で支えてくれた人たちがいます。",
    date: "2026-10-13",
    category: ["リーダーシップ"]
  },
  {
    id: 42,
    title: "太平洋からの学び #51",
    excerpt: "太平洋横断38日目、ダグと私は航海中で最も大きな決断のひとつに直面しました。情報も、専門家も、テクノロジーも、私たちの代わりに決めてはくれませんでした。",
    date: "2026-10-18",
    category: ["リーダーシップ"]
  },
  {
    id: 41,
    title: "現代のリーダーに贈る日本の知恵 #14",
    excerpt: "何かがうまくいかなかったとき、あなたのチームは最初に何を問いますか?「誰のせいか?」それとも「何を学べるか?」",
    date: "2026-10-21",
    category: ["リーダーシップ"]
  },
  {
    id: 40,
    title: "Arigatofulness for Leaders #24",
    excerpt: "リーダーにとって最も価値のある言葉は、最も聞きづらい言葉でもあります。「私は賛成できません。」",
    date: "2026-10-23",
    category: ["リーダーシップ"]
  },
  {
    id: 39,
    title: "Lessons from the Pacific #52",
    excerpt: "組織の最大の問題は、人材の不足ではなく、すでにいる人材がつながっていないことかもしれません。",
    date: "2026-10-25",
    category: ["リーダーシップ", "基調講演"]
  },
  {
    id: 38,
    title: "現代のリーダーに贈る日本の知恵 #15",
    excerpt: "もし、あなたの人生を変えてくれる人が、まだ出会っていない誰かだとしたら?",
    date: "2026-10-26",
    category: ["リーダーシップ"]
  },
  {
    id: 37,
    title: "Arigatofulness for Leaders #25",
    excerpt: "あなたを信じてくれた一人の言葉が、人生の方向を変えることがあります。",
    date: "2026-10-27",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 36,
    title: "挑戦することに、遅すぎるということはない。",
    excerpt: "麹町での講演を終えて — 小さな一歩でも、行動することで何かが変わり始めます。",
    date: "2026-10-30",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 35,
    title: "太平洋からの学び #41",
    excerpt: "食べる気になれない食事 — セルフケアは自分勝手ではない。それは準備であり、責任です。",
    date: "2026-08-11",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 34,
    title: "感謝のリーダーシップ Vol.11",
    excerpt: "白杖の音に、ありがとう — 警告はいつも大きな音で鳴るわけではありません。大切なシグナルは、小さく静かなことが多い。",
    date: "2026-08-06",
    category: ["リーダーシップ", "ありがとう", "キーノートスピーカー"]
  },
  {
    id: 33,
    title: "現代のリーダーへの日本の知恵 Vol.1",
    excerpt: "和 — 調和とは、意見の不一致を消すことではなく、信頼を壊さずに異なる視点を抱き続ける力。",
    date: "2026-08-01",
    category: ["リーダーシップ"]
  },
  {
    id: 32,
    title: "太平洋からの学び #40",
    excerpt: "不完全な情報の中で下した決断 — 本当の決断は、確信が訪れる前にやってくる。",
    date: "2026-07-20",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 31,
    title: "感謝のリーダーシップ Vol.10",
    excerpt: "ありがとう、風 — AIには、思い出の香りを運ぶことも、心をふっと目覚めさせることもできない。",
    date: "2026-07-15",
    category: ["ありがとう", "リーダーシップ"]
  },
  {
    id: 30,
    title: "太平洋からの学び #39",
    excerpt: "見えないまま航海する強さ — リーダーシップは、見えるものに頼れなくなったときに始まる。",
    date: "2026-07-10",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 29,
    title: "ハーバードで学んだ「人は一人では輝けない」",
    excerpt: "誰も一人では輝けない — 人は、誰かが投じてくれるからこそ成長する。",
    date: "2026-07-08",
    category: ["リーダーシップ", "個人の旅"]
  },
  {
    id: 27,
    title: "感謝のリーダーシップ Vol.9",
    excerpt: "ありがとう、影 — 感謝は、目に見えないものに気づくことで深くなる。",
    date: "2026-06-29",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 26,
    title: "太平洋からの学び #37",
    excerpt: "一滴一滴が贈り物 — 感謝は、気づくことから始まる。",
    date: "2026-06-25",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 28,
    title: "太平洋からの学び #38",
    excerpt: "クジラに船を沈められて学んだ、リーダーシップの教え — 挫折は、いつも成功の反対とは限らない。",
    date: "2026-06-21",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 25,
    title: "感謝のリーダーシップ Vol.8",
    excerpt: "ありがとう、待つ時間 — 注意が向けられる場所が、経験をつくる。",
    date: "2026-06-20",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 24,
    title: "太平洋からの学び #36",
    excerpt: "1度の力 — 大きな成果は、小さな調整から生まれる。",
    date: "2026-06-15",
    category: ["リーダーシップ"]
  },
  {
    id: 23,
    title: "感謝のリーダーシップ Vol.2",
    excerpt: "「ありがとう、履き心地のよい靴」— 最も強い支えは、時に最も見えない場所にある。",
    date: "2026-06-06",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 22,
    title: "太平洋からの学び #35",
    excerpt: "健康ではない船が発する音\n大きな問題は、現れる前に静かにその兆しを知らせている",
    date: "2026-06-04",
    category: ["リーダーシップ", "レジリエンス", "ありがとう"]
  },
  {
    id: 21,
    title: "安定したつながりが教えてくれたリーダーシップの学び",
    excerpt: "戦略や成果の前に、リーダーがつくるべきもの。それは、信頼、傾聴、そして存在感に支えられた、安定したつながりです。",
    date: "2026-05-30",
    category: ["リーダーシップ", "ありがとう"]
  },
  {
    id: 20,
    title: "太平洋からの学び #34",
    excerpt: "濡れた服の重さ - 心の重荷をまとったままでは、人を導けない",
    date: "2026-05-29",
    category: ["リーダーシップ", "レジリエンス", "ありがとう"]
  },
  {
    id: 19,
    title: "助けを受け入れる、静かな強さ",
    excerpt: "本当の強さは、ひとりで耐え続けることではなく、人とのつながりを受け入れることから生まれる。",
    date: "2026-05-28",
    category: ["リーダーシップ", "レジリエンス", "ありがとう"]
  },
  {
    id: 18,
    title: "ワイキキからのリーダーシップの学び",
    excerpt: "本当の存在感には、静かな力がある。穏やかさは、信頼、明確さ、そして確かな影響を生み出す。",
    date: "2026-05-10",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 17,
    title: "日本、富山から学んだこと",
    excerpt: "職人技から自信へ— 偉大なリーダーシップは、誰も気づかない詳細と、誰も拍手を送らない準備に宿っています。",
    date: "2026-05-01",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 16,
    title: "トルコでのキーノートから",
    excerpt: "時として、インクルージョンは大きな変更ではなく、誰かが最高の状態で現れるために何が役立つかを理解することです。",
    date: "2026-04-28",
    category: ["リーダーシップ", "キーノートスピーカー"]
  },
  {
    id: 15,
    title: "トルコでの講演後",
    excerpt: "リーダーはより多くの情報を必要としません。彼らは、見方を変える瞬間を必要としています。",
    date: "2026-04-27",
    category: ["リーダーシップ"]
  },
  {
    id: 14,
    title: "トルコのステージでの感謝",
    excerpt: "Limak Group 50周年記念でのリーダーシップの実践：信頼、行動、持続性。",
    date: "2026-04-26",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 13,
    title: "感謝のリーダーシップ Vol.5",
    excerpt: "リーダーシップは常に戦略から始まるわけではありません。時として、行動を選択する一人の人から始まります。",
    date: "2026-04-25",
    category: ["ありがとう", "リーダーシップ"]
  },
  {
    id: 12,
    title: "トルコ、アンタリアにいます。",
    excerpt: "明日、Limak 50周年記念でキーノートスピーチを行います。",
    date: "2026-04-23",
    category: "個人の旅"
  },
  {
    id: 11,
    title: "太平洋からの学び #32",
    excerpt: "自信は救います。しかし、過信— 沈没させる可能性があります。",
    date: "2026-04-21",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 10,
    title: "感謝のリーダーシップ Vol.4",
    excerpt: "ほとんどのリーダーは疲労を排除しようとします。しかし、もし疲労が敵ではないとしたら？",
    date: "2026-04-20",
    category: ["ありがとう", "リーダーシップ", "レジリエンス"]
  },
  {
    id: 9,
    title: "太平洋からの学び #31",
    excerpt: "ほとんどのリーダーは戦略のために失敗するわけではありません。彼らは信頼が壊れることで失敗します。",
    date: "2026-04-17",
    category: ["リーダーシップ", "レジリエンス"]
  },
  {
    id: 1,
    title: "感謝のリーダーシップ Vol.3",
    excerpt: "何かが変だと感じるとき、速く進む時ではありません。注意を払う時です。",
    date: "2026-04-11",
    category: ["ありがとう", "リーダーシップ", "レジリエンス"]
  },
  {
    id: 3,
    title: "太平洋からの学び #30",
    excerpt: "ほとんどのリーダーは間違った決定をするために失敗するわけではありません。彼らは決定を下すのを長く待ちすぎるために失敗します。",
    date: "2026-04-05",
    category: "レジリエンス"
  },
  {
    id: 2,
    title: "感謝のリーダーシップ Vol.2",
    excerpt: "今日、Ross Bernsteinとのつながりに深い感謝を感じています。彼の人生そのものがメッセージです。",
    date: "2026-04-03",
    category: ["ありがとう", "リーダーシップ", "レジリエンス"]
  },
  {
    id: 4,
    title: "私は一人では立っていなかった",
    excerpt: "ダボスから1ヶ月、リーダーシップが真に何を意味するのかを振り返ります— ステージではなく、テーブルの周りで築かれます。",
    date: "2026-03-18",
    category: "リーダーシップ"
  },
  {
    id: 5,
    title: "残されたのは決断だけだった",
    excerpt: "かつて太平洋の真ん中で、クジラに衝突した後、11時間、ライフトラフトで漂流しました。陸も、エンジンも、確信もありません。",
    date: "2026-03-16",
    category: "リーダーシップ"
  },
  {
    id: 6,
    title: "なぜ全盲で太平洋を航海することを選んだのか",
    excerpt: "16歳で視力を失った後、選択がありました：状況に降伏するか、どのように生きるかの所有権を取るか。海が私の教師になりました。",
    date: "2024-01-15",
    category: "個人の旅"
  },
  {
    id: 7,
    title: "不確実性の中のリーダーシップ：海が私に教えてくれたこと",
    excerpt: "前方が見えないとき、計器、チーム、そして直感を信頼することを学びます。海上55日間がリーダーシップについて教えてくれたこと。",
    date: "2024-01-10",
    category: "リーダーシップ"
  },
  {
    id: 8,
    title: "失敗を燃料に変える：初の太平洋挑戦",
    excerpt: "2013年、最初の挑戦はクジラとの衝突で終わりました。その失敗は私を定義しませんでした— 6年後に来たものに備えさせてくれました。",
    date: "2024-01-05",
    category: "レジリエンス"
  }
];
