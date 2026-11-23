import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sample blog data - this will be replaced with database content later
const messages = [
  {
    id: 64,
    title: "Lessons from the Pacific #53",
    excerpt: "Our team postponed my solo nonstop Pacific crossing from 2027 to 2028. Letting go of my own timeline taught me that leadership protects the mission, not the plan.",
    date: "2026-11-10",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 63,
    title: "Courtesy Visit to the Governor of Kumamoto Prefecture",
    excerpt: "I had the honor of a courtesy visit to the Governor of Kumamoto Prefecture, and the moment was broadcast on Kumamoto television.",
    date: "2026-11-11",
    category: ["Arigato"]
  },
  {
    id: 62,
    title: "Japanese Wisdom for Modern Leaders #7",
    excerpt: "Organizations often look outside for something new. Mottainai invites leaders to notice the knowledge, experience, and potential already within their teams.",
    date: "2026-09-08",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 61,
    title: "Arigatofulness for Leaders #17",
    excerpt: "During an NHK Radio recording, a voice message from my daughter Leena helped me finally understand her long, tight hug before my 2019 voyage.",
    date: "2026-09-10",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 60,
    title: "What do you want to talk about?",
    excerpt: "My dream of crossing the Pacific ended in 2013 when a whale sank our boat. A message from my uncle changed how I saw it.",
    date: "2026-09-12",
    category: ["Leadership"]
  },
  {
    id: 59,
    title: "Lessons from the Pacific #46",
    excerpt: "On the same boat, in the same ocean, Doug and I received different information. Together, it helped us see the storm coming.",
    date: "2026-09-14",
    category: ["Leadership"]
  },
  {
    id: 58,
    title: "Japanese Wisdom for Modern Leaders #8",
    excerpt: "Zanshin, the Japanese idea of remaining awareness, reminds us that leadership does not end when the decision is made.",
    date: "2026-09-16",
    category: ["Leadership"]
  },
  {
    id: 57,
    title: "Arigatofulness for Leaders #18",
    excerpt: "Three high school students volunteered to help plan a youth seminar, and they showed me why young people need to help shape the room, not just sit in it.",
    date: "2026-09-18",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 56,
    title: "Lessons from the Pacific #47",
    excerpt: "Our sailboat heeled at nearly 45 degrees, yet never capsized. The keel, unseen beneath the water, made the difference.",
    date: "2026-09-20",
    category: ["Leadership"]
  },
  {
    id: 55,
    title: "Japanese Wisdom for Modern Leaders #9",
    excerpt: "Applause does not tell me if a keynote succeeded. Sanpo Yoshi asks: who benefits now, and who else could benefit later?",
    date: "2026-09-22",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 54,
    title: "Arigatofulness for Leaders #19",
    excerpt: "Thank you for guiding me. Before we decide what young people cannot do, let them discover what they can contribute.",
    date: "2026-09-23",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 53,
    title: "Lessons from the Pacific #48",
    excerpt: "A plan can be excellent and still stop working. Our job was not to protect the plan. Our job was to protect the mission.",
    date: "2026-09-25",
    category: ["Leadership"]
  },
  {
    id: 52,
    title: "Japanese Wisdom for Modern Leaders #10",
    excerpt: "Sometimes the breakthrough comes from combining old wisdom with new possibilities. What have we already learned that we are in danger of forgetting?",
    date: "2026-09-26",
    category: ["Leadership"]
  },
  {
    id: 51,
    title: "Lessons from the Pacific #49",
    excerpt: "Reaching Japan was not the end of the journey. An achievement is what you accomplish. A legacy is what continues because of it.",
    date: "2026-09-28",
    category: ["Leadership"],
  },
  {
    id: 50,
    title: "My New Speaker Reel Is Here",
    excerpt: "I'm excited to finally share my new Speaker Reel. You do not need to see the entire path to take the next step.",
    date: "2026-09-30",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 49,
    title: "Japanese Wisdom for Modern Leaders #11",
    excerpt: "Practice the fundamentals until they are available when pressure arrives. Do not wait for a crisis to decide how you want your team to behave.",
    date: "2026-10-01",
    category: ["Leadership"]
  },
  {
    id: 48,
    title: "Lessons from the Pacific #50",
    excerpt: "On a two-person boat, waking the other person can be a leadership decision. Asking for help early is one of the strongest forms of risk management.",
    date: "2026-10-02",
    category: ["Leadership"]
  },
  {
    id: 47,
    title: "Arigatofulness for Leaders #21",
    excerpt: "I thought I had no choice. But I did. Small freedoms are easy to miss, and gratitude can start with the most ordinary moment.",
    date: "2026-09-30",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 46,
    title: "Arigatofulness for Leaders #22",
    excerpt: "At Moonlight Beach, one person's gratitude awakened another's. An unspoken thank-you creates a feeling; a spoken one creates a connection.",
    date: "2026-10-06",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 45,
    title: "Japanese Wisdom for Modern Leaders #14",
    excerpt: "I am deeply grateful to the World Economic Forum for sharing this story. Courage is the choice to move forward despite fear.",
    date: "2026-10-08",
    category: ["Leadership"]
  },
  {
    id: 44,
    title: "Arigatofulness for Leaders #23",
    excerpt: "Last week I delivered a keynote at Nihon Keiei's Tokyo kickoff. I shared one idea, TEAM: Trust, Empathy, Act, Mission. It became the company's shared theme.",
    date: "2026-10-10",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 43,
    title: "Japanese Wisdom for Modern Leaders #13",
    excerpt: "Was any of this really “my” success? In Japanese we say Okagesama de — “thanks to you.” Behind every visible achievement are people standing in the shadows.",
    date: "2026-10-13",
    category: ["Leadership"]
  },
  {
    id: 42,
    title: "Lessons from the Pacific #51",
    excerpt: "On Day 38 of our Pacific crossing, Doug and I faced one of the biggest decisions of our voyage. The technology did not make the decision for us.",
    date: "2026-10-18",
    category: ["Leadership"]
  },
  {
    id: 41,
    title: "Japanese Wisdom for Modern Leaders #14",
    excerpt: "When something goes wrong, what does your team ask first? “Who caused this?” Or “What can we learn?”",
    date: "2026-10-21",
    category: ["Leadership"]
  },
  {
    id: 40,
    title: "Arigatofulness for Leaders #24",
    excerpt: "Some of the most valuable words a leader can hear are also some of the hardest: “I don’t agree.”",
    date: "2026-10-23",
    category: ["Leadership"]
  },
  {
    id: 39,
    title: "Lessons from the Pacific #52",
    excerpt: "What if the biggest problem in your organization isn’t a lack of talent—but a failure to connect the talent you already have?",
    date: "2026-10-25",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 38,
    title: "Japanese Wisdom for Modern Leaders #15",
    excerpt: "What if the person who could change your life is someone you haven’t met yet?",
    date: "2026-10-26",
    category: ["Leadership"]
  },
  {
    id: 37,
    title: "Arigatofulness for Leaders #25",
    excerpt: "Sometimes, one person’s belief in you can change the direction of your entire life.",
    date: "2026-10-27",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 36,
    title: "It's Never Too Late to Take on a New Challenge.",
    excerpt: "After my talk in Kojimachi, Tokyo — even the smallest step can lead to meaningful change.",
    date: "2026-10-30",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 35,
    title: "Lessons from the Pacific #41",
    excerpt: "The Meal I Didn’t Feel Like Eating — Self-care is not selfish. It is preparation.",
    date: "2026-08-11",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 34,
    title: "Arigatofulness for Leaders #11",
    excerpt: "Thank You to the Sound of My White Cane — Not every warning is loud. The most important signals are often small and quiet.",
    date: "2026-08-06",
    category: ["Leadership", "Arigato", "Keynote Speaker"]
  },
  {
    id: 33,
    title: "Japanese Wisdom for Modern Leaders #1",
    excerpt: "Wa: Harmony Is Not the Absence of Disagreement — The ability to hold different perspectives without breaking trust.",
    date: "2026-08-01",
    category: ["Leadership"]
  },
  {
    id: 32,
    title: "Lessons from the Pacific #40",
    excerpt: "The Decision I Made With Only Partial Information — Real decisions often arrive before certainty does.",
    date: "2026-07-20",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 31,
    title: "Arigatofulness for Leaders #10",
    excerpt: "Thank You, Breeze — AI cannot carry the scent of a memory or awaken your heart through one unexpected moment.",
    date: "2026-07-15",
    category: ["Arigato", "Leadership"]
  },
  {
    id: 30,
    title: "Lessons from the Pacific #39",
    excerpt: "The Strength to Sail Without Seeing — Leadership begins when you can no longer depend on what you see.",
    date: "2026-07-10",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 29,
    title: "Harvard Showed Me Why No One Thrives Alone",
    excerpt: "No one thrives alone — People grow when other people invest in them.",
    date: "2026-07-08",
    category: ["Leadership", "Personal Journey"]
  },
  {
    id: 27,
    title: "Arigatofulness for Leaders #9",
    excerpt: "Thank You, Shadow — Gratitude grows when we learn to appreciate what is often unseen.",
    date: "2026-06-29",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 26,
    title: "Lessons from the Pacific #37",
    excerpt: "Every Drop Feels Like a Gift — Gratitude begins with awareness.",
    date: "2026-06-25",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 28,
    title: "Lessons from the Pacific #38",
    excerpt: "The Leadership Lesson I Learned After a Whale Sank My Boat — A setback is not always the opposite of success.",
    date: "2026-06-21",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 25,
    title: "Arigatofulness for Leaders #8",
    excerpt: "Thank You, Waiting Time — Attention shapes experience.",
    date: "2026-06-20",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 24,
    title: "Lessons from the Pacific #36",
    excerpt: "The Power of One Degree — Major outcomes are often created by small adjustments.",
    date: "2026-06-15",
    category: ["Leadership"]
  },
  {
    id: 23,
    title: "Arigato Share for Leaders #2",
    excerpt: "Thank You, Comfortable Shoes — Sometimes the strongest support is also the least visible.",
    date: "2026-06-06",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 22,
    title: "Lessons from the Pacific #35",
    excerpt: "The Sound of an Unhealthy Boat — Major problems usually announce themselves quietly before they arrive.",
    date: "2026-06-04",
    category: ["Leadership", "Resilience", "Arigato"]
  },
  {
    id: 21,
    title: "The Leadership Lessons from Stable Connection",
    excerpt: "Before strategy and performance, leaders must create stable connection built on trust, listening, and presence.",
    date: "2026-05-30",
    category: ["Leadership", "Arigato"]
  },
  {
    id: 20,
    title: "Lessons from the Pacific #34",
    excerpt: "The Weight of Wet Clothes — You cannot lead well while wearing emotional 'wet clothes.'",
    date: "2026-05-29",
    category: ["Leadership", "Resilience", "Arigato"]
  },
  {
    id: 19,
    title: "The Quiet Strength of Accepting Help",
    excerpt: "Sometimes true strength is not in enduring everything alone, but in allowing connection.",
    date: "2026-05-28",
    category: ["Leadership", "Resilience", "Arigato"]
  },
  {
    id: 18,
    title: "Leadership Lessons from Waikiki .",
    excerpt: "The ocean reminded me this morning: True presence has its own quiet power. Calm creates trust, clarity, and impact.",
    date: "2026-05-10",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 17,
    title: "Lessons from Toyama, Japan .",
    excerpt: "From Craftsmanship to Confidence — Great leadership lives in the details no one notices and the preparation no one applauds.",
    date: "2026-05-01",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 16,
    title: "From my keynote in Türkiye.",
    excerpt: "Sometimes inclusion is not about big changes—but about understanding what helps someone show up at their best.",
    date: "2026-04-28",
    category: ["Leadership", "Keynote Speaker"]
  },
  {
    id: 15,
    title: "After speaking in Türkiye,",
    excerpt: "Leaders don't need more information. They need a moment that shifts how they see.",
    date: "2026-04-27",
    category: ["Leadership"]
  },
  {
    id: 14,
    title: "Gratitude from the Stage in Türkiye",
    excerpt: "Leadership in action at Limak Group's 50th Anniversary: Trust, Action, Persistence.",
    date: "2026-04-26",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 13,
    title: "Arigato Share for Leaders #5",
    excerpt: "Leadership doesn't always begin with strategy. Sometimes, it begins with one person who chooses to act.",
    date: "2026-04-25",
    category: ["Arigato", "Leadership"]
  },
  {
    id: 12,
    title: "I'm in Antalya, Türkiye.",
    excerpt: "Tomorrow, I will be delivering a keynote at Limak's 50th Anniversary.",
    date: "2026-04-23",
    category: "Personal Journey"
  },
  {
    id: 11,
    title: "Lessons from the Pacific #32",
    excerpt: "Confidence can save you. But overconfidence… can sink you.",
    date: "2026-04-21",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 10,
    title: "Arigato Share for Leaders #4",
    excerpt: "Most leaders try to eliminate fatigue. But what if fatigue isn't the enemy?",
    date: "2026-04-20",
    category: ["Arigato", "Leadership", "Resilience"]
  },
  {
    id: 9,
    title: "Lessons from the Pacific #31",
    excerpt: "Most leaders don't fail because of strategy. They fail because trust breaks.",
    date: "2026-04-17",
    category: ["Leadership", "Resilience"]
  },
  {
    id: 1,
    title: "Arigato Share for Leaders #3",
    excerpt: "When something feels off, it is not the time to move faster. It is the time to pay attention.",
    date: "2026-04-11",
    category: ["Arigato", "Leadership", "Resilience"]
  },
  {
    id: 3,
    title: "Lessons from the Pacific 30",
    excerpt: "Most leaders don't fail because they make the wrong decision. They fail because they wait too long to make one.",
    date: "2026-04-05",
    category: "Resilience"
  },
  {
    id: 2,
    title: "Arigato Share for Leaders #2",
    excerpt: "Today, I feel deep gratitude for my connection with Ross Bernstein. His life itself is the message.",
    date: "2026-04-03",
    category: ["Arigato", "Leadership", "Resilience"]
  },
  {
    id: 4,
    title: "I Was Not Standing There Alone",
    excerpt: "One month after Davos, I reflect on what leadership really means — it's not built on stages, but around tables.",
    date: "2026-03-18",
    category: "Leadership"
  },
  {
    id: 5,
    title: "All That Was Left Was a Decision",
    excerpt: "I once drifted in a life raft for 11 hours. In the middle of the Pacific. After hitting a whale. No land. No engine. No certainty.",
    date: "2026-03-16",
    category: "Leadership"
  },
  {
    id: 6,
    title: "Why I Chose to Sail Across the Pacific Blind",
    excerpt: "After losing my sight at 16, I had a choice: surrender to circumstance, or take ownership of how I would live. The ocean became my teacher.",
    date: "2024-01-15",
    category: "Personal Journey"
  },
  {
    id: 7,
    title: "Leadership in Uncertainty: What the Ocean Taught Me",
    excerpt: "When you can't see what's ahead, you learn to trust your instruments, your team, and your intuition. Here's what 55 days at sea taught me about leadership.",
    date: "2024-01-10",
    category: "Leadership"
  },
  {
    id: 8,
    title: "Turning Failure into Fuel: My First Pacific Attempt",
    excerpt: "In 2013, my first attempt ended in collision with a whale. That failure didn't define me—it prepared me for what came six years later.",
    date: "2024-01-05",
    category: "Resilience"
  }
];

const HiroMessage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const sortedMessages = [...messages].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id));
  const filteredMessages = filter === 'all' 
    ? sortedMessages 
    : sortedMessages.filter(msg => {
        const categories = Array.isArray(msg.category) ? msg.category : [msg.category];
        return categories.some(cat => cat.toLowerCase() === filter.toLowerCase());
      });

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Extract all unique categories from messages
  const allCategories = messages.flatMap(m => 
    Array.isArray(m.category) ? m.category : [m.category]
  );
  const categories = ['all', ...Array.from(new Set(allCategories))];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-inter font-medium mb-4">
              Hiro's Insights
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
              Hiro Message
            </h1>
            <p className="font-inter text-lg text-slate-warm max-w-2xl mx-auto">
              Thoughts on leadership, resilience, and seeing the unseen—drawn from a lifetime of navigating without sight.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-inter font-medium rounded-full transition-all duration-300 ${
                  filter === category.toLowerCase()
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy hover:bg-navy/5'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Pagination - Top */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-12">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  className={
                    currentPage === pageNumber
                      ? "bg-navy text-white"
                      : "border-navy text-navy hover:bg-navy hover:text-white"
                  }
                >
                  {pageNumber}
                </Button>
              ))}
              
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          )}

          {/* Messages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentMessages.map((message) => (
              <Card 
                key={message.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden"
              >
                {/* Article Image */}
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
                      <Link to={`/message/${message.id}`} className="block relative h-48 overflow-hidden group">
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
                  {/* Category */}
                  <div className="mb-4">
                    <span className="text-xs tracking-wider uppercase text-gold font-inter font-medium">
                      {Array.isArray(message.category) ? message.category.join(' • ') : message.category}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/message/${message.id}`}>
                    <h2 className="font-playfair text-xl md:text-2xl text-navy mb-3 leading-tight hover:text-gold transition-colors duration-300">
                      {message.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="font-inter text-slate-warm leading-relaxed mb-6">
                    {message.excerpt}
                  </p>

                  {/* Date & Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-warm/50 font-inter">
                      {new Date(message.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    {/* One link (not a button inside a link), named with the post title for screen readers */}
                    <Button
                      asChild
                      variant="ghost"
                      className="text-gold hover:text-gold/80 font-inter font-medium text-sm"
                    >
                      <Link to={`/message/${message.id}`} aria-label={`Read more: ${message.title}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredMessages.length === 0 && (
            <div className="text-center py-16">
              <p className="font-inter text-slate-warm/60 text-lg">
                No messages found in this category.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  className={
                    currentPage === pageNumber
                      ? "bg-navy text-white"
                      : "border-navy text-navy hover:bg-navy hover:text-white"
                  }
                >
                  {pageNumber}
                </Button>
              ))}
              
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HiroMessage;
