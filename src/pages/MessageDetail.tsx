import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Button } from '../components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactFormModal from '../components/ContactFormModal';

// Sample blog data - this will be replaced with database content later
const messages = [
  {
    id: 64,
    title: "Lessons from the Pacific #53",
    audio: "/content/message64.mp3",
    excerpt: "Our team postponed my solo nonstop Pacific crossing from 2027 to 2028. Letting go of my own timeline taught me that leadership protects the mission, not the plan.",
    date: "2026-11-10",
    category: ["Leadership", "Keynote Speaker"],
    content: `<h3>The Courage to Let Go of Your Own Timeline</h3><figure class="my-8"><img src="/content/11102026.jpeg" alt="Lessons from the Pacific #53" class="w-full rounded-lg shadow-lg" /></figure><p>What if the greatest obstacle to your mission is your own determination to move forward?</p><p>I have been preparing for my next challenge: sailing solo, nonstop, across the Pacific Ocean as a totally blind sailor.</p><p>Our original departure was planned for 2027.</p><p>But our project team recently made a difficult decision.</p><p>We are postponing the challenge until 2028.</p><p>Three factors influenced our decision:</p><p>1️⃣ Weather Risks</p><p>Professional meteorologists warned us about potentially severe Pacific conditions associated with a predicted Super El Niño.</p><p>2️⃣ Boat Readiness</p><p>Essential maintenance and preparations are taking longer than expected.</p><p>3️⃣ Technology</p><p>Expected advances in Starlink by 2028 could significantly improve our communication capabilities and safety.</p><p>After careful discussion, our team agreed that postponing was the wiser choice.</p><p>But emotionally, I struggled.</p><p>I want to sail. Now.</p><p>I have invested so much time, energy, and passion into this dream.</p><p>Part of me wanted to push forward regardless.</p><p>Then I asked myself:</p><p>“Am I protecting the mission, or am I protecting my attachment to the original plan?”</p><p>That question changed my perspective.</p><p>I realized that true leadership sometimes requires letting go of what we want most.</p><p>This decision taught me three important lessons:</p><p>1️⃣ Determination is not attachment.</p><p>Stay committed to your mission, but remain flexible about how and when you achieve it.</p><p>2️⃣ Listen to those who know more than you.</p><p>Leadership is not about having every answer. It is about respecting expertise and making wise decisions together.</p><p>3️⃣ Waiting can be an act of courage.</p><p>Postponement is not surrender. Sometimes, patience is the most strategic action we can take.</p><figure class="my-8"><img src="/content/11102026_2.jpeg" alt="Hiro Iwamoto" class="w-full rounded-lg shadow-lg" /></figure><p>My dream hasn’t changed.</p><p>My determination hasn’t weakened.</p><p>Only the departure date has changed.</p><p>The Pacific has taught me that leadership is not about controlling every condition.</p><p>It is about making the best possible decision with the information available.</p><p>A leader’s responsibility is not to protect the original plan.</p><p>It is to protect the mission.</p><p>🌊 To my fellow leaders:</p><p>Have you ever had to let go of a plan you deeply believed in to protect a greater goal?</p><p>What helped you make that decision?</p>`
  },
  {
    id: 63,
    title: "Courtesy Visit to the Governor of Kumamoto Prefecture",
    audio: "/content/message63.mp3",
    excerpt: "I had the honor of a courtesy visit to the Governor of Kumamoto Prefecture, and the moment was broadcast on Kumamoto television.",
    date: "2026-11-11",
    category: ["Arigato"],
    content: `<figure class="my-8"><img src="/content/11112026.jpg" alt="Courtesy visit to the Governor of Kumamoto Prefecture" class="w-full rounded-lg shadow-lg" /></figure><p>I had the honor of making a courtesy visit to the Governor of Kumamoto Prefecture as part of the HiroSpeaks project.</p><p>The visit was featured on Kumamoto television.</p><p>Being welcomed so warmly in Kumamoto reminded me, once again, how much a single word of gratitude can travel—far beyond the room where it is spoken.</p><p>Thank you to Governor Sakamoto, his staff, and everyone in Kumamoto who made this visit possible.</p><p>And thank you to everyone who watched the broadcast and sent kind messages.</p><p>🙏 Please watch the television coverage here.</p><div class="my-8 flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/MwV1KSN0zO8?si=XNwNvKlY6gY6S1CG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;aspect-ratio:16/9;height:auto"></iframe></div>`
  },
  {
    id: 62,
    title: "Japanese Wisdom for Modern Leaders #7",
    excerpt: "Organizations often look outside for something new. Mottainai invites leaders to notice the knowledge, experience, and potential already within their teams.",
    date: "2026-09-08",
    category: ["Leadership", "Arigato"],
    content: `<h3>Mottainai: Is Your Organization Overlooking the Value It Already Has?</h3><figure class="my-8"><img src="/content/09082026.jpeg" alt="Mottainai" style="width:100%;max-width:480px;aspect-ratio:1/1;object-fit:cover;margin:0 auto;display:block" class="rounded-lg shadow-lg" /></figure><p>When organizations want to grow, they often look for something new.</p><p>New talent.</p><p>New systems.</p><p>New ideas.</p><p>New strategies.</p><p>But Japanese wisdom invites us to look in the opposite direction.</p><p>Mottainai (もったいない).</p><p>The word is often used when food or useful objects are wasted.</p><p>But its meaning goes deeper.</p><p>Mottainai expresses regret when something of value is lost without being fully appreciated or used.</p><p>Organizations have their own forms of mottainai.</p><p>A talented employee whose opinion is never requested.</p><p>A quiet colleague whose experience is overlooked because of their title.</p><p>A failed project that contains important lessons—but is quickly forgotten.</p><p>A good idea that is never heard because its creator is not given space to speak.</p><p>Years of knowledge that disappear when someone leaves the organization.</p><p>Sometimes, only after that person has gone do we realize:</p><p>“They were the only one who truly understood how this worked.”</p><p>In my conversations with people from many different organizations, I have noticed that valuable knowledge does not always belong to the person with the highest title or the loudest voice.</p><p>Sometimes, it is held by the person no one has thought to ask.</p><p>Organizations may genuinely need new talent.</p><p>But before looking outside, leaders can ask whether they are fully using the abilities, experience, and wisdom already present within their teams.</p><p>Before hiring someone new, listen to the people already there.</p><p>Before seeking an outside answer, examine the knowledge inside the organization.</p><p>Before moving quickly past a failure, preserve what it taught you.</p><p>Valuing people is not only about thanking them.</p><p>It is also about recognizing what they can contribute—and creating an opportunity for that contribution to be seen.</p><p>Mottainai is not only a reminder to take care of physical things.</p><p>It is an invitation to notice human potential before it is overlooked or lost.</p><p>Your organization’s next opportunity may not come from outside.</p><p>It may already be there—within someone who has never been asked.</p><p>🇯🇵 What valuable knowledge, experience, or potential might your organization be overlooking today?</p>`
  },
  {
    id: 61,
    title: "Arigatofulness for Leaders #17",
    excerpt: "During an NHK Radio recording, a voice message from my daughter Leena helped me finally understand her long, tight hug before my 2019 voyage.",
    date: "2026-09-10",
    category: ["Leadership", "Arigato"],
    content: `<h3>I Burst Into Tears During an NHK Radio Recording—and Finally Understood My Daughter’s Hug</h3><figure class="my-8"><img src="/content/09102026.jpeg" alt="Hiro and his daughter Leena" class="w-full rounded-lg shadow-lg" /></figure><p>I am usually excited when I begin pursuing a new dream.</p><p>The challenge gives me energy.</p><p>I look ahead with joy, curiosity, and anticipation.</p><p>That was also true when I prepared to cross the Pacific in 2019.</p><p>But during a recent recording for NHK Radio in Japan, I heard an unexpected voice message from my daughter, Leena.</p><p>The moment I heard her voice, a memory returned.</p><p>Just before I departed in 2019, Leena hugged me.</p><p>The hug was longer and tighter than usual.</p><p>At the time, I was focused on the voyage ahead—the boat, the weather, the preparation, and the dream of reaching Japan.</p><p>But as I listened to her message during the recording, I suddenly understood that hug differently.</p><p>While I had been feeling the excitement of pursuing my dream, my daughter had been carrying something else:</p><p>The fear of what might happen to me.</p><p>I realized how much I had worried her.</p><p>And the tears began to flow.</p><p>Those tears were not only sadness.</p><p>They carried love.</p><p>Gratitude.</p><p>Regret.</p><p>And a new understanding of what our dreams can ask of the people who love us.</p><p>When we pursue a great challenge, we often focus on the courage of the person taking the risk.</p><p>But there are others taking an emotional risk with us.</p><p>The family members who wait.</p><p>The friends who worry.</p><p>The people who support the dream while quietly living with the possibility that something may go wrong.</p><p>They may never stand on the boat.</p><p>But they travel with us in their hearts.</p><p>My tears helped me see something I had not fully recognized before:</p><p>A personal dream is not always carried by one person alone.</p><p>Sometimes, the people closest to us carry its heaviest invisible weight.</p><p>I am grateful to Leena for her message.</p><p>I am grateful for the long, tight hug she gave me before I left in 2019.</p><p>And I am grateful for the tears that finally helped me understand what that hug had been saying.</p><p>Thank you, Leena, for believing in my dreams—even when believing also meant worrying about me.</p><p>💧 Who has quietly carried the emotional weight of one of your dreams?</p>`
  },
  {
    id: 60,
    title: "What do you want to talk about?",
    excerpt: "My dream of crossing the Pacific ended in 2013 when a whale sank our boat. A message from my uncle changed how I saw it.",
    date: "2026-09-12",
    category: ["Leadership"],
    content: `<p>In 2013, my dream of crossing the Pacific ended when our sailboat collided with a whale and sank.</p><p>For a time, I blamed the whale.</p><p>I could not understand why this had happened to me.</p><p>Then, I received a message from my uncle, who had already passed away.</p><p>That message changed the way I saw what had happened—and eventually gave me the courage to return to the Pacific.</p><p>Six years later, I tried again.</p><p>And this time, I made it across.</p><p>What was the message from my uncle that changed everything?</p><p>I believe it may help you see your own difficulties, setbacks, or suffering from a different perspective—and perhaps even begin to transform them into hope.</p><p>Please listen to this podcast.</p><div class="my-8 flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/KwKVbh71_QY?si=lfMLHYsuD2I1vMft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;aspect-ratio:16/9;height:auto"></iframe></div><p>My deepest gratitude to the World Economic Forum for inviting me to Davos in 2026 and for giving me the opportunity to share this story with the world.</p>`
  },
  {
    id: 59,
    title: "Lessons from the Pacific #46",
    excerpt: "On the same boat, in the same ocean, Doug and I received different information. Together, it helped us see the storm coming.",
    date: "2026-09-14",
    category: ["Leadership"],
    content: `<h3>When Two Sailors Experience the Same Ocean Differently</h3><figure class="my-8"><img src="/content/09142026.jpeg" alt="Two sailors" style="width:100%;max-width:480px;aspect-ratio:1/1;object-fit:cover;margin:0 auto;display:block" class="rounded-lg shadow-lg" /></figure><p>On the evening of Day 28 of our Pacific crossing, I noticed something change.</p><p>The temperature suddenly dropped.</p><p>And the air smelled different.</p><p>I could not see the sky, so I asked Doug to come into the cockpit and take a look.</p><p>A few miles away, he could see dark clouds—and flashes of lightning.</p><p>A storm was approaching.</p><p>Heavy rain was likely coming.</p><p>So we reduced sail before it reached us.</p><p>That moment stayed with me.</p><p>Doug and I were on the same boat, crossing the same ocean.</p><p>But we were receiving different information.</p><p>Doug could see the clouds and lightning.</p><p>I could feel the temperature change and notice something different in the air.</p><p>Neither perspective was complete by itself.</p><p>Together, they gave us a clearer picture—and helped us make a better decision.</p><p>Organizations are no different.</p><p>One person sees risk.</p><p>Another sees opportunity.</p><p>Someone else notices a subtle change that has not yet appeared in the data.</p><p>The danger begins when we assume:</p><p>“If you do not see what I see, you must be wrong.”</p><p>Strong teams ask a different question:</p><p>“What are you noticing that I may be missing?”</p><p>Different perspectives are not obstacles to good decisions.</p><p>Sometimes, they are what make good decisions possible.</p><p>🌊 Who on your team helps you notice what you cannot see yourself?</p><p>This is one of the lessons I share in my keynotes on leadership under uncertainty—how different perspectives can help leaders make stronger decisions before the storm arrives.</p><p>If your organization is navigating change or uncertainty, I would be honored to bring these lessons from the Pacific to your team.</p>`
  },
  {
    id: 58,
    title: "Japanese Wisdom for Modern Leaders #8",
    excerpt: "Zanshin, the Japanese idea of remaining awareness, reminds us that leadership does not end when the decision is made.",
    date: "2026-09-16",
    category: ["Leadership"],
    content: `<h3>Zanshin: Leadership Does Not End When the Action Is Over</h3><figure class="my-8"><img src="/content/09162026.jpeg" alt="Zanshin" style="width:100%;max-width:480px;aspect-ratio:1/1;object-fit:cover;margin:0 auto;display:block" class="rounded-lg shadow-lg" /></figure><p>In Japan, there is a concept called Zanshin (残心)—remaining awareness.</p><p>I first learned its importance when I practiced judo.</p><p>Sometimes, after successfully executing a technique, I would feel pleased with myself and lose focus.</p><p>And in that brief moment of satisfaction, my opponent could immediately take advantage and throw me.</p><p>I learned something important:</p><p>Success can become dangerous when it causes us to stop paying attention.</p><p>Years later, I began to recognize the same lesson in a very different place—after giving a keynote.</p><p>The speech ends.</p><p>The audience applauds.</p><p>But I do not believe my work ends there.</p><p>The questions afterward.</p><p>The short conversations with participants.</p><p>The messages I receive days later.</p><p>That is often when I discover what truly reached people.</p><p>Sometimes, the message they remember is different from the one I thought I was delivering.</p><p>What we say and what people actually receive are not always the same.</p><p>Leadership is similar.</p><p>A strategy is decided.</p><p>A transformation is announced.</p><p>A new direction is communicated.</p><p>But that is not the end.</p><p>How are people actually responding?</p><p>What is beginning to change?</p><p>What concerns have not yet been spoken?</p><p>Zanshin reminds us to remain aware after the action.</p><p>Because leadership does not end when the decision is made.</p><p>Sometimes, what happens after the decision matters even more.</p><p>🇯🇵 After an important decision or success, what do you keep paying attention to?</p>`
  },
  {
    id: 57,
    title: "Arigatofulness for Leaders #18",
    excerpt: "Three high school students volunteered to help plan a youth seminar, and they showed me why young people need to help shape the room, not just sit in it.",
    date: "2026-09-18",
    category: ["Leadership", "Arigato"],
    content: `<h3>Thank You to the Young People Who Made Me Hopeful About the Future</h3><figure class="my-8"><img src="/content/09182026.jpeg" alt="Young volunteers" class="w-full rounded-lg shadow-lg" /></figure><p>I thought we were planning a seminar for young people.</p><p>By the end of the meeting, I realized we needed to build it with them.</p><p>Each September, in recognition of Suicide Prevention Month, our 501(c)(3) nonprofit, the Global Arigato Project, hosts a half-day seminar for youth.</p><p>As we prepared for this year’s event, three high school students volunteered to help.</p><p>They shared ideas about the title, schedule, and what young people would actually want from the experience.</p><p>Some of their observations were things we adults had completely missed.</p><p>They even offered to help create the flyer and registration form.</p><p>As I listened to them, I felt something powerful:</p><p>Hope.</p><p>We often talk about what adults can teach the next generation.</p><p>But perhaps leadership also means asking:</p><p>“What can the next generation see that we cannot?”</p><p>Young people do not only need a seat in the room.</p><p>They need the opportunity to shape what happens in it.</p><p>I entered the meeting hoping to give something to young people.</p><p>I left feeling they had given something to me:</p><p>A renewed belief in the future.</p><p>🌱 When was the last time someone younger helped you see something differently?</p>`
  },
  {
    id: 56,
    title: "Lessons from the Pacific #47",
    excerpt: "Our sailboat heeled at nearly 45 degrees, yet never capsized. The keel, unseen beneath the water, made the difference.",
    date: "2026-09-20",
    category: ["Leadership"],
    content: `<h3>The Most Important Part of Our Boat Was the Part No One Could See</h3><figure class="my-8"><img src="/content/09202026.jpeg" alt="The keel" class="w-full rounded-lg shadow-lg" /></figure><p>During a storm in the Pacific, our sailboat was heeling at nearly 45 degrees.</p><p>Waves more than 20 feet high lifted us and rolled beneath us.</p><p>Our shore support team called us at the regularly scheduled time.</p><p>The moment I stood up to answer the phone, I lost my balance and nearly crashed onto the cabin floor.</p><p>Standing inside the boat felt like standing on a steep hillside that never stopped moving.</p><p>Yet the boat did not capsize.</p><p>It recovered from each wave and continued moving forward.</p><p>Above the water, people might notice the mast, the sails, and the hull.</p><p>But beneath us, hidden in the ocean, was something equally important:</p><p>The keel.</p><p>The keel is the heavy structure beneath the boat. Its weight helps the boat return upright when powerful winds and waves push it onto its side.</p><p>No one standing on shore sees the keel.</p><p>No one applauds it.</p><p>But without it, the visible parts of the boat could not perform their roles safely.</p><p>Organizations also have people who serve like a keel.</p><p>The person who carefully manages documents and schedules.</p><p>The person who keeps essential equipment and systems running.</p><p>The person who keeps the workplace clean and safe.</p><p>The person who quietly solves problems before they become crises.</p><p>Their names may rarely be mentioned.</p><p>But without them, the organization cannot remain stable and move forward.</p><p>We often focus on the mast—the visible leader.</p><p>But visibility is not the same as importance.</p><p>When an organization begins to tilt, the people working quietly behind the scenes may be the ones keeping it from capsizing.</p><p>The Pacific reminded me that some of the most important contributions are the ones we cannot see.</p><p>🌊 Who serves as the keel of your organization?</p><p>When did you last thank them?</p>`
  },
  {
    id: 55,
    title: "Japanese Wisdom for Modern Leaders #9",
    excerpt: "Applause does not tell me if a keynote succeeded. Sanpo Yoshi asks: who benefits now, and who else could benefit later?",
    date: "2026-09-22",
    category: ["Leadership", "Keynote Speaker"],
    content: `<h3>Sanpo Yoshi: A Successful Keynote Should Create Three Winners</h3><figure class="my-8"><img src="/content/09222026.jpeg" alt="Sanpo Yoshi" style="width:100%;max-width:480px;aspect-ratio:1/1;object-fit:cover;margin:0 auto;display:block" class="rounded-lg shadow-lg" /></figure><p>Applause does not tell me whether my keynote was successful.</p><p>It tells me that the audience appreciated the moment.</p><p>But I want my work to create value after everyone leaves the room.</p><p>There is a Japanese business philosophy called Sanpo Yoshi (三方よし).</p><p>It comes from the merchants of Omi and means:</p><p>Good for the seller.</p><p>Good for the buyer.</p><p>Good for society.</p><p>I believe the same principle should apply to a keynote.</p><p>First, it should be good for the speaker.</p><p>I receive the opportunity to share my experiences, fulfill my purpose, and earn a professional fee.</p><p>Second, it should be good for the organization.</p><p>The keynote should support a real objective—whether that means helping leaders navigate uncertainty, strengthening trust, or giving employees the courage to take their next step.</p><p>Third, it should be good for society.</p><p>What participants receive should not remain inside the conference room.</p><p>Perhaps someone returns to work and listens more carefully to a colleague.</p><p>Perhaps a leader responds differently to an employee who is struggling.</p><p>Perhaps someone facing a setback decides not to give up.</p><p>My story may begin with blindness and the Pacific Ocean.</p><p>But its value is determined by what other people do with it.</p><p>That is why I do not want to deliver only an inspiring hour.</p><p>I want the message to continue moving—</p><p>from the stage,</p><p>into the organization,</p><p>and eventually into the wider world.</p><p>Sanpo Yoshi offers leaders a powerful question for any important project, partnership, or event:</p><p>Who benefits now—and who else could benefit later?</p><p>Success is incomplete when value stops with only one side.</p><p>🇯🇵 If you are planning a leadership event, what would a three-way win look like for the speaker, your organization, and the people your organization serves?</p>`
  },
  {
    id: 54,
    title: "Arigatofulness for Leaders #19",
    excerpt: "Thank you for guiding me. Before we decide what young people cannot do, let them discover what they can contribute.",
    date: "2026-09-23",
    category: ["Leadership", "Arigato"],
    content: `<h3>Thank You for Guiding Me—In More Ways Than One</h3><figure class="my-8"><img src="/content/09232026.jpeg" alt="Arigatofulness for Leaders" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>Yesterday, I spent the day with four high school students visiting San Diego from Japan.</p><p>Each of them has struggled to attend school regularly.</p><p>They are spending a week on a farm—stepping outside their usual environment and taking time to look again at Japan, their lives, and themselves.</p><p>I shared what my life was like at their age.</p><p>I began losing my sight at thirteen and became totally blind at sixteen.</p><p>At that time, I could not accept my blindness.</p><p>When my mother told me to use a white cane, I became angry.</p><p>I even asked her:</p><p>“Why did you give birth to me?”</p><p>Yesterday, I was able to share those painful memories with young people who are now facing challenges of their own.</p><p>But I did not spend the entire day guiding them.</p><p>They also guided me.</p><p>Each student had an opportunity to walk beside me and help me navigate.</p><p>They described what was ahead.</p><p>They warned me about steps and obstacles.</p><p>They became my eyes.</p><p>Young people who are sometimes seen only as needing help were helping me move forward safely.</p><p>That experience reminded me of something important:</p><p>Before we decide what young people cannot do, we should give them an opportunity to discover what they can contribute.</p><p>Sometimes confidence does not begin when someone says,</p><p>“You are capable.”</p><p>It begins when someone trusts us with a meaningful responsibility.</p><p>Yesterday, these students did more than guide my steps.</p><p>They reminded me that every person—whatever they may be struggling with—has something valuable to give.</p><p>Thank you for walking beside me.</p><p>Thank you for guiding me.</p><p>And thank you for helping me see the possibility within each of you.</p><p>🌱 Who might discover their own strength if you trusted them with a meaningful responsibility today?</p>`
  },
  {
    id: 53,
    title: "Lessons from the Pacific #48",
    excerpt: "A plan can be excellent and still stop working. Our job was not to protect the plan. Our job was to protect the mission.",
    date: "2026-09-25",
    category: ["Leadership"],
    content: `<h3>What Do You Do When the Plan Stops Working?</h3><figure class="my-8"><img src="/content/09252026.svg" alt="The mission may stay. The route may not." class="w-full h-auto rounded-lg shadow-lg" /></figure><p>A plan can be excellent—and still stop working.</p><p>Before leaving San Diego, we prepared carefully for our Pacific crossing.</p><p>But the ocean never promised to follow our plan.</p><p>The wind changed.</p><p>The waves changed.</p><p>Equipment behaved differently than expected.</p><p>Sometimes progress slowed.</p><p>Sometimes the safest choice was not the one we had imagined on land.</p><p>At sea, I learned something that has stayed with me:</p><p>Our job was not to protect the plan.</p><p>Our job was to protect the mission.</p><p>The destination remained Japan.</p><p>But how we got there had to keep changing.</p><p>Organizations face the same challenge.</p><p>A strategy may have been right six months ago.</p><p>A project may have been built on reasonable assumptions.</p><p>A leader may have publicly committed to a direction.</p><p>Then reality changes.</p><p>That is when leadership becomes difficult.</p><p>Because changing the plan can feel like admitting the original plan was wrong.</p><p>But adaptation is not failure.</p><p>Sometimes, refusing to adapt is the greater failure.</p><p>The Pacific taught me three questions to ask when a plan stops working:</p><p>1️⃣ Is the destination still right?</p><p>Do not confuse commitment to the mission with commitment to one method.</p><p>2️⃣ What is reality telling us now?</p><p>Old assumptions should never be more powerful than new information.</p><p>3️⃣ What are we afraid to change because we have already invested in it?</p><p>Time, money, pride, and reputation can keep us sailing in the wrong direction.</p><p>Strong leaders are not the ones who never change course.</p><p>They are the ones who know what must remain constant—and what must change.</p><p>The mission may stay.</p><p>The route may not.</p><p>🌊 What plan in your organization may need to change—even though the goal still matters?</p><p>If your leadership team is navigating change or uncertainty, this is one of the lessons I bring from the Pacific into my keynotes: how to stay committed to the destination without becoming trapped by the original route.</p>`
  },
  {
    id: 52,
    title: "Japanese Wisdom for Modern Leaders #10",
    excerpt: "Sometimes the breakthrough comes from combining old wisdom with new possibilities. What have we already learned that we are in danger of forgetting?",
    date: "2026-09-26",
    category: ["Leadership"],
    content: `<h3>Onko Chishin: Sometimes the Future Is Hidden in What We Have Already Learned</h3><figure class="my-8"><img src="/content/09262026.jpeg" alt="Onko Chishin - Japanese Wisdom for Modern Leaders" class="w-full h-auto rounded-lg shadow-lg" style="aspect-ratio: 1 / 1; object-fit: cover; max-width: 480px; margin: 0 auto; display: block;" /></figure><p>In an age obsessed with what is new, leaders can easily overlook something valuable:</p><p>What we already know.</p><p>There is a Japanese expression:</p><p>Onko Chishin (温故知新)</p><p>It means learning from the past to discover something new.</p><p>As I prepare for my next Pacific challenge, I am surrounded by new technology.</p><p>New navigation systems.</p><p>New equipment.</p><p>New ways to access information as a blind sailor.</p><p>All of that matters.</p><p>But some of my most valuable preparation comes from looking backward.</p><p>What did the ocean teach me in 2013?</p><p>What did we learn when our first crossing ended in failure?</p><p>What worked during our successful 55-day crossing in 2019?</p><p>What small decisions helped us?</p><p>What mistakes should never be repeated?</p><p>The past is not somewhere I want to live.</p><p>But it is somewhere I want to learn from.</p><p>Organizations often rush toward the next strategy, the next technology, or the next transformation.</p><p>Especially now, with AI changing so quickly, “new” can easily become synonymous with “better.”</p><p>But before moving forward, Onko Chishin asks us to pause:</p><p>What have we already learned that we are in danger of forgetting?</p><p>Three questions may help:</p><p>1️⃣ What past success contained a principle we can use again?</p><p>2️⃣ What past failure taught us something we have not fully applied?</p><p>3️⃣ What knowledge will disappear when experienced people leave?</p><p>Innovation does not always mean abandoning the past.</p><p>Sometimes, the breakthrough comes from combining old wisdom with new possibilities.</p><p>The rearview mirror should not determine where we drive.</p><p>But ignoring it completely can make us repeat the same collision.</p><p>🇯🇵 What lesson from your organization’s past could help you make a better decision about its future?</p>`
  },
  {
    id: 51,
    title: "Lessons from the Pacific #49",
    excerpt: "Reaching Japan was not the end of the journey. An achievement is what you accomplish. A legacy is what continues because of it.",
    date: "2026-09-28",
    category: ["Leadership"],
    content: `<figure class="my-8 md:float-right md:w-[40%] md:ml-8 md:mt-0 md:mb-4"><img src="/content/09282026.jpeg" alt="Lessons from the Pacific" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>Reaching Japan was not the end of the journey.</p><p>In 2019, Doug Smith and I reached Japan after 55 days nonstop across the Pacific.</p><p>For years, reaching Japan had been the goal.</p><p>After our failed attempt in 2013, I wanted to prove that we could return and finish what we had started.</p><p>Eventually, we did.</p><p>But something unexpected happened afterward.</p><p>The journey kept moving.</p><p>People began telling me:</p><p>“My failure doesn’t feel like the end anymore.”</p><p>“You made me think differently about what is possible.”</p><p>“I shared your story with my team.”</p><p>That changed my understanding of success.</p><p>An achievement is what you accomplish.</p><p>A legacy is what continues because of it.</p><p>Leadership is the same.</p><p>Targets matter.<br/>Results matter.<br/>Projects matter.</p><p>But one day, every leader leaves the role.</p><p>What remains?</p><p>Perhaps someone became more confident because you trusted them.</p><p>Perhaps people learned that failure could be discussed honestly.</p><p>Perhaps the culture became stronger because you were there.</p><p>The Pacific taught me this:</p><p>Reaching the destination is important.</p><p>But the deeper question is what continues after you arrive.</p><p>🌊 If you left your role tomorrow, what is one thing you would hope remains stronger because you were there?</p><div style="clear:both"></div>`
  },
  {
    id: 50,
    title: "My New Speaker Reel Is Here",
    excerpt: "I'm excited to finally share my new Speaker Reel. You do not need to see the entire path to take the next step.",
    date: "2026-09-30",
    category: ["Leadership", "Keynote Speaker"],
    content: `<figure class="my-8"><img src="/content/09302026.png" alt="Speaker Reel" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>I’m excited to finally share my new Speaker Reel.</p><div class="my-8" style="aspect-ratio: 16 / 9;"><iframe src="https://www.youtube.com/embed/0b3h7nBgPQc" title="Hiro Iwamoto Speaker Reel" class="w-full h-full rounded-lg" allowfullscreen></iframe></div><p>I lost my sight completely at the age of 16.</p><p>In 2013, my first attempt to cross the Pacific ended when our sailboat collided with a whale and sank.</p><p>Six years later, I returned to the same ocean and became the first totally blind sailor to complete a nonstop Pacific crossing from San Diego to Japan.</p><p>Those experiences taught me lessons that I now share with organizations around the world:</p><p>🌊 Leadership under uncertainty<br/>🤝 Trust and teamwork<br/>🔥 Resilience after failure<br/>🧭 Courage to take the next step</p><p>This Speaker Reel captures my story and the message I hope to bring to every audience:</p><p><strong>You do not need to see the entire path to take the next step.</strong></p><p>Please watch and share it with anyone looking for a keynote speaker for an upcoming event, conference, or company gathering.</p><p>The journey continues.</p>`
  },
  {
    id: 49,
    title: "Japanese Wisdom for Modern Leaders #11",
    excerpt: "Practice the fundamentals until they are available when pressure arrives. Do not wait for a crisis to decide how you want your team to behave.",
    date: "2026-10-01",
    category: ["Leadership"],
    content: `<h3>Kata: Practice Before the Pressure Arrives</h3><figure class="my-8"><img src="/content/10012026.jpeg" alt="Kata - Japanese Wisdom for Modern Leaders" class="w-full h-auto rounded-lg shadow-lg" style="aspect-ratio: 1 / 1; object-fit: cover; max-width: 480px; margin: 0 auto; display: block;" /></figure><p>In Japanese martial arts, there is a concept called Kata — 型.</p><p>It is a repeated form or pattern of movement.</p><p>From the outside, repetition can look restrictive.</p><p>But Kata has a deeper purpose:</p><p>Practice the fundamentals until they are available when pressure arrives.</p><p>Organizations need Kata too.</p><p>Many teams wait until a crisis to decide:</p><p>How should we communicate?</p><p>Who makes the final decision?</p><p>Can someone openly disagree with the leader?</p><p>How quickly should bad news be shared?</p><p>A crisis is a terrible time to invent those behaviors.</p><p>Strong cultures practice them before they are needed.</p><p>Listen before reacting.</p><p>Bring bad news early.</p><p>Challenge ideas without attacking people.</p><p>Clarify who owns the decision.</p><p>Reflect after important actions.</p><p>None of these habits are dramatic.</p><p>But repeated consistently, they become part of how a team naturally responds.</p><p>AI can give us faster information and faster answers.</p><p>But it cannot practice courage, trust, or accountability for us.</p><p>Those remain human disciplines.</p><p>Kata teaches leaders:</p><p>Do not wait for pressure to decide how you want your team to behave.</p><p>Practice it now.</p><p>🇯🇵 Which habit would strengthen your team most right now:</p><p>Listening, speaking up, or following through?</p>`
  },
  {
    id: 48,
    title: "Lessons from the Pacific #50",
    excerpt: "On a two-person boat, waking the other person can be a leadership decision. Asking for help early is one of the strongest forms of risk management.",
    date: "2026-10-02",
    category: ["Leadership"],
    content: `<h3>Knowing When Not to Decide Alone</h3><figure class="my-8"><img src="/content/10022026.jpeg" alt="Lessons from the Pacific" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>On a two-person boat in the middle of the Pacific, waking the other person can be a leadership decision.</p><p>During our 55-day crossing, Doug and I took turns resting and keeping watch.</p><p>When one person was sleeping below deck, the other carried responsibility for the boat.</p><p>In moments like that, it is tempting to think:</p><p>“I can handle this.”</p><p>Sometimes, you can.</p><p>But responsibility is not about proving that you can do everything alone.</p><p>The ocean taught me to ask a different question:</p><p>“When does this stop being my decision alone?”</p><p>Leaders face the same question every day.</p><p>A problem appears.<br/>A customer raises a concern.<br/>The data begins to change.<br/>Something simply does not feel right.</p><p>And because we do not want to bother someone, appear uncertain, or slow things down, we keep carrying the decision ourselves.</p><p>Sometimes that works.</p><p>Sometimes it makes the problem much harder to solve later.</p><p>Before deciding alone, I believe leaders can ask three questions:</p><p><strong>1️⃣ Is this decision easily reversible?</strong></p><p>If the consequences are difficult to undo, another perspective may be worth bringing in early.</p><p><strong>2️⃣ Does someone else know something I don’t?</strong></p><p>Leadership is not having every answer. It is knowing when someone else’s knowledge matters.</p><p><strong>3️⃣ Will waiting make the problem harder to solve?</strong></p><p>Early conversations may feel inconvenient.</p><p>Late conversations can become emergencies.</p><p>The Pacific taught me that knowing when to act independently is important.</p><p>Knowing when not to is equally important.</p><p>Asking for help early is not weakness.</p><p>Sometimes, it is one of the strongest forms of risk management.</p><p>🌊 What is one kind of decision in your organization that should be escalated earlier rather than later?</p>`
  },
  {
    id: 47,
    title: "Arigatofulness for Leaders #21",
    excerpt: "I thought I had no choice. But I did. Small freedoms are easy to miss, and gratitude can start with the most ordinary moment.",
    date: "2026-09-30",
    category: ["Leadership", "Arigato"],
    content: `<h3>Thank You for the Choice</h3><figure class="my-8"><img src="/content/09302026.svg" alt="Fish or beef on a flight back to San Diego" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>On my flight back to San Diego from Japan, I was seated almost at the very back of a completely full plane.</p><p>Meal service took a long time to reach us.</p><p>As the cart slowly came closer, I thought:</p><p>“There probably won’t be a choice left.”</p><p>I had already accepted that.</p><p>Then the flight attendant asked:</p><p>“Would you like the fish or the beef?”</p><p>I smiled.</p><p>“Fish, please.”</p><p>It was such a small thing.</p><p>But because I had expected no choice at all, simply being able to choose made me surprisingly happy.</p><p>And somehow, the meal tasted even better.</p><p>That moment reminded me how many small freedoms we receive every day without noticing them.</p><p>What to eat.</p><p>What to say.</p><p>How to spend an hour.</p><p>How to respond when something unexpected happens.</p><p>We often wait for something big before feeling grateful.</p><p>But happiness can appear in a much smaller moment:</p><p>“I thought I had no choice.</p><p>But I did.”</p><p>Today, I simply want to say:</p><p>Thank you for the choice.</p><p>And thank you for reminding me that something ordinary can feel extraordinary when we stop taking it for granted.</p><p>✈️ What small choice are you grateful to have today?</p>`
  },
  {
    id: 46,
    title: "Arigatofulness for Leaders #22",
    excerpt: "At Moonlight Beach, one person's gratitude awakened another's. An unspoken thank-you creates a feeling; a spoken one creates a connection.",
    date: "2026-10-06",
    category: ["Leadership", "Arigato"],
    content: `<h3>Gratitude Sounds Different Beside the Ocean</h3><figure class="my-8"><img src="/content/10062026.jpeg" alt="Arigatofulness at Moonlight Beach" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>Yesterday, gratitude sounded different when it was spoken beside the ocean.</p><p>We gathered at Moonlight Beach in Encinitas for Arigatofulness.</p><p>The sky was blue.</p><p>A gentle breeze moved through the air.</p><p>And one by one, people began sharing what they were grateful for.</p><p>Nothing dramatic happened.</p><p>No presentation.</p><p>No big announcement.</p><p>Just people saying “thank you” out loud.</p><p>But as I listened, I noticed something.</p><p>One person’s gratitude seemed to awaken another person’s gratitude.</p><p>Someone shared a small moment.</p><p>It reminded someone else of something they had overlooked.</p><p>A memory surfaced.</p><p>A smile appeared.</p><p>And gradually, the atmosphere changed.</p><p>It reminded me that gratitude is not only something we feel privately.</p><p>When gratitude is expressed, it can move between people.</p><p>This matters in leadership too.</p><p>We may appreciate someone on our team.</p><p>We may notice their effort.</p><p>We may be thankful that they stayed late, solved a problem, supported a colleague, or quietly kept something moving.</p><p>But often, that gratitude remains inside us.</p><p>We assume:</p><p>“They know.”</p><p>Maybe they do.</p><p>But hearing it is different.</p><p>At Moonlight Beach, I was reminded:</p><p><strong>An unspoken thank-you creates a feeling in one person.</strong></p><p><strong>A spoken thank-you creates a connection between two people.</strong></p><p>And sometimes, that small exchange changes the atmosphere around them.</p><p>Thank you to everyone who joined us yesterday.</p><p>Thank you for sharing your gratitude.</p><p>And thank you for reminding me that gratitude becomes more powerful when we allow someone else to hear it.</p><p>🌱 What is one “thank you” you have been carrying silently that someone deserves to hear?</p>`
  },
  {
    id: 45,
    title: "Japanese Wisdom for Modern Leaders #14",
    excerpt: "I am deeply grateful to the World Economic Forum for sharing this story. Courage is the choice to move forward despite fear.",
    date: "2026-10-08",
    category: ["Leadership"],
    content: `<h3>Courage Is Choosing the Next Responsible Step</h3><p>I am deeply grateful to the World Economic Forum for continuing to share this story.</p><p>Crossing the Pacific as a totally blind sailor taught me something I now carry into every keynote:</p><p><strong>Courage is not the absence of fear. It is the choice to move forward despite it.</strong></p><p>In 2013, I lost my boat in the middle of the Pacific. In 2019, I returned and completed the crossing with Doug Smith.</p><p>Those experiences taught me that when the future is unclear, we do not need to see the entire path before moving forward. We need the courage to choose the next responsible step.</p><p>That lesson feels especially relevant today for leaders navigating uncertainty, disruption, and rapid change.</p><p>I now speak around the world with one hope: that my experiences can help people find courage and possibility when they cannot yet see what comes next.</p><p>Thank you again to the World Economic Forum and the #MeetTheLeader team for helping this message reach people around the world.</p><p>I hope you will take a few minutes to watch or listen to our conversation.</p><div class="my-8 flex justify-center"><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7509537271587459072" height="1024" width="504" frameborder="0" allowfullscreen title="Embedded post" style="max-width:100%"></iframe></div>`
  },
  {
    id: 44,
    title: "Arigatofulness for Leaders #23",
    excerpt: "Last week I delivered a keynote at Nihon Keiei's Tokyo kickoff. I shared one idea, TEAM: Trust, Empathy, Act, Mission. It became the company's shared theme.",
    date: "2026-10-10",
    category: ["Leadership", "Keynote Speaker"],
    content: `<h3>When a Keynote Becomes a Company’s Compass</h3><figure class="my-8"><img src="/content/10102026_1.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>Last week, I had the privilege of delivering a keynote at Nihon Keiei’s Tokyo office during the company’s new-year kickoff meeting.</p><p>More than 100 employees joined in person, with others participating online from across Japan—bringing the total audience to around 300.</p><p>Nihon Keiei is a management consulting firm with a strong focus on supporting healthcare organizations.</p><p>Their consultants navigate uncertainty every day. Clients do not always come with clear answers. Conditions change. Difficult decisions must be made. And success depends not only on individual expertise, but on how well people work together.</p><p>That is why I wanted to give them something simple they could carry into the new business year.</p><p>Drawing from my experience crossing the Pacific, I shared one idea:</p><p><strong>TEAM.</strong></p><figure class="my-8"><img src="/content/10102026_2.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" /></figure><p><strong>T — Trust</strong><br/>Trust each other enough to move forward.</p><p><strong>E — Empathy</strong><br/>Understand what others are seeing, feeling, and facing.</p><p><strong>A — Act</strong><br/>Take the next step even without a perfect answer.</p><p><strong>M — Mission</strong><br/>Stay connected to the purpose that gives the work meaning.</p><p>In uncertain times, a strong organization does not depend on one heroic individual.</p><p>It depends on people who can trust, understand, act, and stay aligned around a shared mission.</p><p>After the keynote, President Tatsuya Hashimoto told me that TEAM had stayed in people’s hearts and that he wanted to make it a shared theme for the organization this year.</p><p>That meant a great deal to me.</p><p>Because a kickoff keynote should do more than create energy for one afternoon. It should give people a common language they can return to when work becomes difficult.</p><p>If, during a challenging client meeting or an uncertain decision, someone asks:</p><p>Are we building Trust?<br/>Are we showing Empathy?<br/>Are we ready to Act?<br/>Are we still connected to our Mission?</p><p>Then the keynote has become more than a speech.</p><p>It has become a tool.</p><p>That is the kind of impact I hope to create for every organization I speak to.</p><p>My sincere thanks to President Tatsuya Hashimoto (橋本竜也), Ms. Maruyama, and everyone at Nihon Keiei for allowing me to be part of such an important beginning to the new business year.</p>`
  },
  {
    id: 43,
    title: "Japanese Wisdom for Modern Leaders #13",
    excerpt: "Was any of this really “my” success? In Japanese we say Okagesama de — “thanks to you.” Behind every visible achievement are people standing in the shadows.",
    date: "2026-10-13",
    category: ["Leadership"],
    content: `<h3>Okagesama: No Success Is Truly Ours Alone</h3><figure class="my-8"><img src="/content/10132026.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>During my recent trip to Japan, I had the privilege of delivering keynotes, meeting business leaders, recording interviews, and reconnecting with people who continue to support my journey.</p><p>After several of my speeches, people told me they felt more courageous about facing uncertainty, saw failure differently, and began thinking about their next step.</p><p>Those words meant a great deal to me.</p><p>But on my flight back to San Diego, I found myself wondering:</p><p>Was any of this really “my” success?</p><p>In Japanese, we often use a beautiful expression:</p><p>Okagesama de — おかげさまで.</p><p>It means “thanks to you” or “thanks to the support of others.”</p><p>But its meaning goes deeper.</p><p>The word kage (影) means “shadow.”</p><p>It reminds me that behind every visible achievement are people whose contributions may never appear in the spotlight.</p><p>When I stand on stage, people see one speaker.</p><p>But behind that moment are countless others.</p><p>The people who invited me.</p><p>The people who introduced me.</p><p>The people who prepared the venue and arranged transportation.</p><p>The people who listened, encouraged me, and believed in my journey.</p><p>And the family and friends who continue supporting me quietly from far away.</p><p>What looks like one person’s achievement is often the result of many people’s kindness.</p><p>The same is true in leadership.</p><p>A CEO receives recognition for growth.</p><p>A manager is praised for a successful project.</p><p>A speaker receives applause.</p><p>But meaningful success is rarely created alone.</p><p>Great leaders understand this.</p><p>They do not only ask:</p><p>“What did I accomplish?”</p><p>They also ask:</p><p>“Whose support made this possible?”</p><p>Okagesama is more than gratitude.</p><p>It is a leadership mindset.</p><p>It keeps success from becoming arrogance.</p><p>It helps us recognize contributions that are easily overlooked.</p><p>And it reminds us that even when we appear to be leading from the front, we are supported by people behind us.</p><p>Great leaders may stand in the spotlight.</p><p>But they never forget the people standing in the shadows.</p><p>As I return home from Japan, one phrase stays with me:</p><p>Okagesama de.</p><p>Because none of us truly succeeds alone.</p><p>🇯🇵 Who is standing in the shadows behind one of your recent successes?</p><p>Perhaps today is a good day to thank them.</p>`
  },
  {
    id: 42,
    title: "Lessons from the Pacific #51",
    excerpt: "On Day 38 of our Pacific crossing, Doug and I faced one of the biggest decisions of our voyage. The technology did not make the decision for us.",
    date: "2026-10-18",
    category: ["Leadership"],
    content: `<h3>What Should Never Be Automated?</h3><figure class="my-8"><img src="/content/10182026.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" /></figure><p>On Day 38 of our Pacific crossing, Doug and I faced one of the biggest decisions of our 55-day voyage.</p><p>Our original plan was to sail west to around 150° east longitude before turning north toward Fukushima, Japan.</p><p>But the ocean had other plans.</p><p>The trade winds were much weaker than expected.</p><p>So we gathered information.</p><p>We received weather data through satellite communication.</p><p>We listened to experienced sailors and weather professionals.</p><p>We compared different routes.</p><p>And then, Doug and I had to decide.</p><p>After careful discussion, we changed course much earlier than planned, turning north near 170° east longitude.</p><p>That decision shortened our route by approximately 600 miles (1,100 kilometers).</p><p>But what stayed with me was not the distance we saved.</p><p>It was something more important.</p><p>The information did not make the decision for us.</p><p>The experts did not make the decision for us.</p><p>The technology did not make the decision for us.</p><p>They helped us understand our options.</p><p>But we still had to turn the wheel.</p><p>Today, leaders have access to more information than ever before.</p><p>AI can analyze patterns.</p><p>Systems can identify risks.</p><p>Experts can recommend solutions.</p><p>Technology can help us recognize things we might otherwise miss.</p><p>But there is one thing I believe leaders should never fully automate:</p><p>Responsibility.</p><p>Someone still has to ask:</p><ul><li>What matters most?</li><li>What risks are we willing to take?</li><li>What are we protecting?</li><li>What happens if we are wrong?</li></ul><p>And ultimately, someone must own the decision.</p><p>The Pacific taught me that leadership is not about rejecting technology.</p><p>It is about using every available tool without surrendering human judgment.</p><p>AI can help us evaluate the options.</p><p>Data can help us understand the risks.</p><p>Experts can help us see beyond our own experience.</p><p>But leadership begins when someone is willing to say:</p><p>“This is the direction we will take, and I accept responsibility for it.”</p><p>Technology can help us choose a course.</p><p>But it cannot replace the responsibility of the person who decides to sail it.</p><p>🌊 As AI becomes more powerful, what is one decision in your organization that should never be handed over entirely to technology?</p>`
  },
  {
    id: 41,
    title: "Japanese Wisdom for Modern Leaders #14",
    excerpt: "When something goes wrong, what does your team ask first? “Who caused this?” Or “What can we learn?”",
    date: "2026-10-21",
    category: ["Leadership"],
    content: `<h3>Hansei: Reflection Without Blame</h3><figure class="my-8"><img src="/content/10212026.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>When something goes wrong, what does your team ask first?</p><p>“Who caused this?”</p><p>Or</p><p>“What can we learn?”</p><p>In Japan, there is a word for honest self-reflection:</p><p>Hansei — 反省.</p><p>It is often translated as reflection or self-examination.</p><p>But Hansei is not about shame.</p><p>It is about looking honestly at what happened, examining our own decisions, and asking what needs to change.</p><figure class="my-8"><img src="/content/10212026.jpeg" alt="Hiro" class="rounded-lg shadow-lg mx-auto" style="width: 100%; max-width: 420px; aspect-ratio: 1 / 1; object-fit: cover; object-position: center top;" /></figure><p>I learned this after my first attempt to cross the Pacific ended in 2013.</p><p>The boat was lost.</p><p>The challenge was over.</p><p>And there was plenty of criticism.</p><p>But eventually, I realized that the most useful questions were not about blame.</p><p>They were:</p><p>What had we assumed?</p><p>What had we missed?</p><p>What should we prepare differently?</p><p>What must never be repeated?</p><p>Those questions helped turn failure into preparation.</p><p>Six years later, in 2019, we successfully crossed the Pacific.</p><p>The failure had not disappeared.</p><p>But it had become part of what prepared us to succeed.</p><p>Organizations face the same choice.</p><p>After a failed project, a lost customer, or a poor decision, leaders can search for someone to blame.</p><p>Or they can create an environment where people feel safe enough to say:</p><p>“I missed something.”</p><p>“My assumption was wrong.”</p><p>“I should have spoken up earlier.”</p><p>“We need to change our approach.”</p><p>That does not mean avoiding accountability.</p><p>It means combining accountability with learning.</p><p>Reflection without accountability can become an excuse.</p><p>Accountability without reflection can create fear.</p><p>Strong teams need both.</p><p>Hansei is not about staying in the past.</p><p>It is about learning from the past so we do not carry the same mistakes into the future.</p><p>The purpose of reflection is not to find someone to punish.</p><p>It is to discover what we must do differently.</p><p>🇯🇵 What makes honest reflection hardest in your organization: fear, pride, or the pressure to move on too quickly?</p>`
  },
  {
    id: 40,
    title: "Arigatofulness for Leaders #24",
    excerpt: "Some of the most valuable words a leader can hear are also some of the hardest: “I don’t agree.”",
    date: "2026-10-23",
    category: ["Leadership"],
    content: `<h3>Thank You to the Person Who Told Me the Truth</h3><p>Some of the most valuable words a leader can hear are also some of the hardest:</p><p>“I don’t agree.”</p><p>“I think we may be missing something.”</p><p>“I think you may be wrong.”</p><p>My first reaction to words like these is not always gratitude.</p><p>Sometimes, it is discomfort.</p><p>Sometimes, I want to explain myself.</p><p>Sometimes, I want the other person to understand why my decision makes sense.</p><figure class="my-8"><img src="/content/10232026_b.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>But I have learned something important:</p><p>The people willing to challenge us may be giving us one of the greatest forms of support.</p><p>It takes courage to tell someone something they may not want to hear.</p><p>And the higher a person rises in an organization, the harder that conversation can become.</p><p>People hesitate.</p><p>They soften their words.</p><p>Sometimes, they decide that silence is safer than honesty.</p><p>And that is dangerous.</p><p>Because when people stop bringing us uncomfortable information, we slowly lose access to reality.</p><p>A meeting can feel positive.</p><p>A team can appear harmonious.</p><p>Everyone can nod in agreement.</p><p>And the leader can still be making the wrong decision.</p><p>This is why I have come to see honest feedback as something worthy of gratitude.</p><p>Not because the other person is always right.</p><p>They may not be.</p><p>But because they are willing to offer a perspective we might otherwise miss.</p><p>They risk a little discomfort to help us see something we cannot see ourselves.</p><p>For leaders, perhaps the most important question is not:</p><p>“Do people agree with me?”</p><p>But rather:</p><p>“Have I created an environment where people feel safe enough to disagree with me?”</p><p>Leadership is not only about having people who support our decisions.</p><p>It is also about having people who challenge our assumptions.</p><p>So today, I want to thank those who have questioned me, challenged me, and told me things I did not necessarily want to hear.</p><p>You may not always make the moment more comfortable.</p><p>But you often make the future safer.</p><p>🤍 Who in your organization can tell you, “I think you’re wrong,” without fearing the consequences?</p><p>Perhaps today is a good day to thank them.</p>`
  },
  {
    id: 39,
    title: "Lessons from the Pacific #52",
    excerpt: "What if the biggest problem in your organization isn’t a lack of talent—but a failure to connect the talent you already have?",
    date: "2026-10-25",
    category: ["Leadership", "Keynote Speaker"],
    content: `<h3>When Communication Becomes a Lifeline</h3><p>What if the biggest problem in your organization isn’t a lack of talent—but a failure to connect the talent you already have?</p><p>On Day 44 of our 55-day Pacific crossing in 2019, my sailing partner, Doug Smith, and I faced a serious problem.</p><p>Strong winds and waves surrounded our yacht, Dream Weaver.</p><p>We needed to furl our headsail before conditions worsened.</p><p>But the sail wouldn’t roll in.</p><p>Doug pulled the furling line.</p><p>Nothing.</p><p>I tried.</p><p>Still nothing.</p><p>I suspected that the rope had overlapped inside the furling drum at the bow.</p><p>Someone had to investigate.</p><p>And that someone was me—a totally blind sailor.</p><figure class="my-8"><img src="/content/10252026.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: top;" /></figure><p>The boat was heeling heavily. Waves struck from the side, making every movement dangerous.</p><p>I attached my safety harness to the jackline and crawled toward the bow.</p><p>Slowly.</p><p>Carefully.</p><p>Whenever I encountered an obstacle, I secured myself before moving forward.</p><p>Finally, I reached the drum.</p><p>I examined it with my hands.</p><p>The rope had overlapped, exactly as I had suspected.</p><p>But discovering the problem was only half the solution.</p><p>Doug was back in the cockpit.</p><p>I needed him to ease another line by about 30 centimeters while I worked to free the tangled rope.</p><p>There was just one problem.</p><p>The wind and waves were so loud that we couldn’t hear each other shouting.</p><p>Fortunately, we had hats equipped with two-way radios.</p><p>I explained what I needed.</p><p>Doug eased the line.</p><p>I lifted the overlapping rope.</p><p>The problem was solved.</p><p>And we could finally breathe easier.</p><figure class="my-8"><img src="/content/10252026_b.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: top;" /></figure><p>Looking back, I realized something important.</p><p>We both had skills.</p><p>We both understood our responsibilities.</p><p>We both wanted the same outcome.</p><p>But none of that would have been enough without effective communication.</p><p>The radio didn’t solve the problem.</p><p>It allowed two people to solve it together.</p><p>I believe this is an important lesson for leaders today.</p><p>Think about your organization.</p><p>How often does someone on the front line recognize a problem before senior management knows it exists?</p><p>How often do employees hesitate to speak up because they fear being wrong or challenging authority?</p><p>How often do departments have talented people and valuable information, yet struggle to work together?</p><p>Sometimes, the problem is not a lack of intelligence, experience, or commitment.</p><p>It is that people cannot hear one another.</p><p>When communication breaks down, even extraordinary talent can become powerless.</p><p>The real test of communication is not how much information we share.</p><p>It is whether people feel safe enough to speak, respected enough to be heard, and empowered enough to act.</p><p>🌊 A question for leaders:</p><p>If someone in your organization discovered a serious problem today, would they feel safe enough to speak up?</p><p>Or would they remain silent?</p><p>I’d love to hear your perspective.</p>`
  },
  {
    id: 38,
    title: "Japanese Wisdom for Modern Leaders #15",
    excerpt: "What if the person who could change your life is someone you haven’t met yet?",
    date: "2026-10-26",
    category: ["Leadership"],
    content: `<h3>🇯🇵 En (縁): The Connections That Change Our Lives</h3><p>What if the person who could change your life is someone you haven’t met yet?</p><p>On March 11, 2011, I was in San Diego when I heard the devastating news of the earthquake and tsunami in Japan.</p><p>Thousands of lives were lost. Entire communities were destroyed.</p><figure class="my-8"><img src="/content/10262026.jpeg" alt="Hiro" class="w-full aspect-square object-cover object-top md:aspect-auto md:h-auto rounded-lg shadow-lg md:[object-position:center_-150px] md:max-h-[400px]" /></figure><p>I felt helpless.</p><p>I wanted to do something for my home country, but what could I do from thousands of miles away?</p><p>Then a sailing friend shared something heartbreaking.</p><p>A junior sailing club in Fukushima had lost all its sailboats to the tsunami.</p><p>The children could no longer sail.</p><p>The ocean they loved had taken away something precious.</p><p>I thought:</p><p>“I want these children to experience the joy of sailing again.”</p><p>So I decided to run a charity marathon in San Diego to raise money for a new sailboat.</p><p>There was one challenge.</p><p>I am totally blind.</p><p>I needed someone to guide me through the race.</p><p>Then something extraordinary happened.</p><p>Through a mutual friend, Aki Otsuka, a former Major League Baseball pitcher for the San Diego Padres, heard about my mission.</p><p>He offered to be my running guide.</p><p>I was deeply moved.</p><p>A professional athlete was willing to run beside me—not for recognition, but to help children he had never met.</p><p>With Aki’s support and the generosity of many others, something wonderful happened.</p><p>At first, I wasn’t sure we could raise enough money for one sailboat.</p><p>But together, we raised enough to donate TWO sailboats to Fukushima.</p><p>I will never forget that experience.</p><p>In Japan, we have a beautiful word:</p><p>En (縁).</p><p>It describes the meaningful connections that bring people into our lives, often in ways we could never have planned.</p><p>That experience taught me something about leadership.</p><p>We often believe great achievements require extraordinary individual strength.</p><p>But sometimes, the greatest possibilities emerge when people connect their hearts, talents, and generosity.</p><p>Looking back, I realize my life has been shaped by countless unexpected connections.</p><p>And perhaps the most beautiful thing about En is this:</p><p>It’s not only about meeting someone who changes your life.</p><p>It’s about becoming someone who helps change another person’s life.</p><p>Great leadership is not only about what we accomplish ourselves.</p><p>It’s also about the opportunities we create for others through the connections we build.</p><p>🌸 Who entered your life unexpectedly and changed it for the better?</p><p>And whose future might you change simply by reaching out and offering your help?</p><p>I’d love to hear your story.</p>`
  },
  {
    id: 37,
    title: "Arigatofulness for Leaders #25",
    excerpt: "Sometimes, one person’s belief in you can change the direction of your entire life.",
    date: "2026-10-27",
    category: ["Leadership", "Arigato"],
    content: `<p>Sometimes, one person’s belief in you can change the direction of your entire life.</p><figure class="my-8"><img src="/content/10312026_1.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>When I was young, I had a dream.</p><p>I wanted to study in America.</p><p>But I was totally blind.</p><p>Deep inside, I believed studying abroad was something other people could do—not someone like me.</p><p>One day, I shared my dream and my doubts with Michael, my English teacher at the YMCA.</p><p>His response surprised me.</p><p>“Don’t assume you can’t do something just because you’re blind.”</p><p>He continued:</p><figure class="my-8"><img src="/content/10312026_2.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>“You already speak enough English to communicate with Americans. And when you need help, you can simply ask for it.”</p><p>Those words changed something inside me.</p><p>Michael didn’t promise that studying abroad would be easy.</p><p>Instead, he helped me recognize two things I had overlooked:</p><p>I already had abilities I could use.</p><p>And I didn’t have to do everything alone.</p><figure class="my-8"><img src="/content/10312026_3.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>Until then, I had focused on what I couldn’t do.</p><p>Michael helped me recognize what I could do—and what might become possible with the support of others.</p><p>Eventually, at the age of 22, I went to America to study.</p><p>Looking back, I realize how much that conversation changed my life.</p><p>Michael believed in a future I had not yet allowed myself to imagine.</p><p>And that is a lesson I carry into leadership today.</p><figure class="my-8"><img src="/content/10312026_4.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>How many talented people in our organizations quietly underestimate themselves?</p><p>How many dreams remain unspoken because someone believes they are not capable?</p><p>Sometimes, leadership isn’t about giving someone the answer.</p><p>It’s about helping them recognize the possibilities already within them.</p><p>A great leader doesn’t simply see who you are today.</p><p>They help you believe in who you can become.</p><figure class="my-8"><img src="/content/10312026_5.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure><p>Michael, thank you.</p><p>Your words gave me the courage to pursue a dream that once seemed beyond my reach.</p><p>And I hope I can offer that same encouragement to others.</p><p>🤍 Who believed in your potential before you could see it yourself?</p><p>And whose possibilities could you help unlock with a few words of encouragement today?</p><figure class="my-8"><img src="/content/10272026.jpeg" alt="Hiro" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>`
  },
  {
    id: 36,
    title: "It's Never Too Late to Take on a New Challenge.",
    excerpt: "After my talk in Kojimachi, Tokyo — even the smallest step can lead to meaningful change.",
    date: "2026-10-30",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8"><img src="/content/10312026_1.jpeg" alt="Talk in Kojimachi" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <p>Last Saturday, I had the wonderful opportunity to give a talk in Kojimachi, Tokyo.</p>
      <p>It was a meaningful occasion to share my personal experiences, the challenges I have faced, and the lessons I have learned through both setbacks and difficult times.</p>
      <p>Life doesn't always go as planned. There are moments when we feel discouraged, uncertain, or tempted to give up.</p>
      <p>But I believe that when we find the courage to take even one small step forward, the world around us begins to change.</p>
      <figure class="my-8"><img src="/content/10312026_2.jpeg" alt="The talk" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <p>Seeing the genuine interest, heartfelt reactions, and warm encouragement from everyone in the audience reminded me once again how powerful it can be to share our stories and experiences with others.</p>
      <p>After the talk, I had the pleasure of speaking with many of the participants during a wonderful gathering. Listening to their stories, experiences, and aspirations was truly inspiring. I walked away with new perspectives, valuable insights, and renewed energy.</p>
      <figure class="my-8"><img src="/content/10312026_3.jpeg" alt="The gathering" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <p>The message I most wanted to share is simple:</p>
      <p>You don't have to be extraordinary to take on a challenge.</p>
      <p>Even the smallest step can lead to meaningful change. What matters most is having the courage to take action.</p>
      <figure class="my-8"><img src="/content/10312026_4.jpeg" alt="The venue" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <p>If my story has inspired even one person to believe in themselves and take that first step toward something new, that would mean more to me than words can express.</p>
      <p>I would like to express my heartfelt gratitude to the organizers for making this event possible and to everyone who took the time to join us.</p>
      <figure class="my-8"><img src="/content/10312026_5.jpeg" alt="With everyone" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <p>My journey of taking on new challenges is far from over.</p>
      <p>I look forward to seeing you all again!</p>
      <figure class="my-8"><img src="/content/10312026_6.jpeg" alt="Group photo" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" /></figure>
      <div class="relative my-8 w-full" style="max-width: 720px; margin-left: auto; margin-right: auto;">
        <div class="relative w-full" style="padding-bottom: 56.25%;">
          <iframe src="https://www.youtube.com/embed/v04bbprYx9M?si=IIJN57rNKgOGw_e1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 35,
    title: "Lessons from the Pacific #41",
    excerpt: "The Meal I Didn’t Feel Like Eating — Self-care is not selfish. It is preparation.",
    date: "2026-08-11",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/1783896502700.jpeg" alt="Hiro holding retort meals on the boat" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Meal I Didn’t Feel Like Eating</figcaption>
      </figure>
      
      <p><strong>🌊 The Meal I Didn’t Feel Like Eating</strong></p>
      
      <p><strong>Lessons from the Pacific #41</strong></p>
      
      <p>In the middle of the Pacific, there were days when I did not feel like eating.</p>
      
      <p>The boat was moving constantly.</p>
      
      <p>My body was tired.</p>
      
      <p>My mind was focused on the weather, navigation, and staying safe.</p>
      
      <p>Food did not feel appealing.</p>
      
      <p>But I ate anyway.</p>
      
      <p>Not because I was hungry.</p>
      
      <p>Because I knew my future self would need the energy.</p>
      
      <p>On land, skipping one meal may not seem like a big deal.</p>
      
      <p>But at sea, small neglect can become a serious risk.</p>
      
      <p>Fatigue builds quietly.</p>
      
      <p>Judgment weakens quietly.</p>
      
      <p>Emotions become harder to manage quietly.</p>
      
      <p>The ocean taught me that leadership is not only about big decisions.</p>
      
      <p>It is also about small acts of maintenance.</p>
      
      <p>Eat.</p>
      
      <p>Rest.</p>
      
      <p>Check the equipment.</p>
      
      <p>Drink water.</p>
      
      <p>Breathe.</p>
      
      <p>Do the ordinary things before they become urgent.</p>
      
      <p>Many leaders care deeply about their teams, their mission, and their responsibilities.</p>
      
      <p>But sometimes they forget to care for the person carrying all of it.</p>
      
      <p>The meal I didn’t feel like eating reminded me:</p>
      
      <p>Self-care is not selfish.</p>
      
      <p>It is preparation.</p>
      
      <p>It is responsibility.</p>
      
      <p>It is how we remain steady enough to serve others.</p>
      
      <p>You cannot lead well for long if you keep ignoring what keeps you going.</p>
      
      <p>🌊 <strong>What is one small thing you know you need to do this week to protect your energy?</strong></p>
    `
  },
  {
    id: 34,
    title: "Arigatofulness for Leaders #11",
    excerpt: "Thank You to the Sound of My White Cane — Not every warning is loud. The most important signals are often small and quiet.",
    date: "2026-08-06",
    category: ["Leadership", "Arigato", "Keynote Speaker"],
    content: `
      <figure class="my-8">
        <img src="/content/1783330165201.jpeg" alt="Hiro's white cane" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thank You to the Sound of My White Cane</figcaption>
      </figure>
      
      <p><strong>Thank You to the Sound of My White Cane</strong></p>
      
      <p><strong>Arigatofulness for Leaders #11</strong></p>
      
      <p>Every morning, my white cane speaks before I do.</p>
      
      <p>Tap.</p>
      
      <p>Tap.</p>
      
      <p>Tap.</p>
      
      <p>It touches the ground.</p>
      
      <p>It finds the edge of the sidewalk.</p>
      
      <p>It tells me when the surface changes.</p>
      
      <p>It warns me before my body reaches danger.</p>
      
      <p>To many people, it may sound like a small tapping noise.</p>
      
      <p>But to me, it is information.</p>
      
      <p>It is protection.</p>
      
      <p>It is guidance.</p>
      
      <p>It is trust.</p>
      
      <p>The other morning, as I walked to the bus stop, my mind was already busy.</p>
      
      <p>Messages to send.</p>
      
      <p>Work to complete.</p>
      
      <p>People to meet.</p>
      
      <p>But my cane kept bringing me back to the present moment.</p>
      
      <p>Tap.</p>
      
      <p>Tap.</p>
      
      <p>Tap.</p>
      
      <p>Each sound reminded me:</p>
      
      <p>Pay attention. Stay grounded. The next step matters.</p>
      
      <p>That simple moment taught me something about leadership.</p>
      
      <p>Leaders also need to listen for signals.</p>
      
      <p>Not every warning is loud.</p>
      
      <p>Not every risk appears as a crisis.</p>
      
      <p>Not every important message comes through a report or a meeting.</p>
      
      <p>Sometimes the most important signals are small.</p>
      
      <p>A change in someone’s voice.</p>
      
      <p>A silence in a meeting.</p>
      
      <p>A repeated mistake.</p>
      
      <p>A quiet hesitation.</p>
      
      <p>A team member who no longer speaks up.</p>
      
      <p>Strong leaders don’t only respond to obvious problems.</p>
      
      <p>They notice small signals before they become big ones.</p>
      
      <p>My white cane does not show me the entire path.</p>
      
      <p>It simply gives me enough information for the next step.</p>
      
      <p>And often, that is enough.</p>
      
      <p>Leadership under uncertainty is the same.</p>
      
      <p>We may not see the whole future.</p>
      
      <p>But if we stay attentive, humble, and willing to listen, the next signal will guide us.</p>
      
      <p>So today, I simply want to say:</p>
      
      <p>Thank you to the sound of my white cane.</p>
      
      <p>Thank you for protecting me.</p>
      
      <p>Thank you for keeping me present.</p>
      
      <p>Thank you for reminding me that guidance often comes through small signals.</p>
      
      <p>🤍 <strong>What small signal in your team or life deserves more attention today?</strong></p>
    `
  },
  {
    id: 33,
    title: "Japanese Wisdom for Modern Leaders #1",
    excerpt: "Wa: Harmony Is Not the Absence of Disagreement — The ability to hold different perspectives without breaking trust.",
    date: "2026-08-01",
    category: ["Leadership"],
    content: `
      <figure class="my-8">
        <img src="/content/1783417322436.jpeg" alt="Wa — Japanese harmony" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Wa: Harmony Is Not the Absence of Disagreement</figcaption>
      </figure>
      
      <p><strong>🇯🇵 Wa: Harmony Is Not the Absence of Disagreement</strong></p>
      
      <p><strong>Japanese Wisdom for Modern Leaders #1</strong></p>
      
      <p>As a Japanese keynote speaker working with global leaders, I’ve come to believe that some answers to today’s leadership challenges are hidden in Japanese words, culture, and ways of thinking.</p>
      
      <p>That is why I am beginning this occasional series:</p>
      
      <p>Japanese Wisdom for Modern Leaders.</p>
      
      <p>My hope is to share practical wisdom for leaders navigating uncertainty, building trust, and leading people in a rapidly changing world.</p>
      
      <p>The first word is:</p>
      
      <p>Wa (和).</p>
      
      <p>It is often translated as harmony.</p>
      
      <p>But harmony does not mean everyone stays quiet.</p>
      
      <p>It does not mean avoiding difficult conversations.</p>
      
      <p>It does not mean pretending there is no conflict.</p>
      
      <p>And it certainly does not mean forcing everyone to agree.</p>
      
      <p>Real harmony is much stronger than politeness.</p>
      
      <p>Wa is the ability to hold different perspectives without breaking trust.</p>
      
      <p>In every organization, people see the world differently.</p>
      
      <p>The engineer sees risk.</p>
      
      <p>The sales leader sees opportunity.</p>
      
      <p>The CFO sees cost.</p>
      
      <p>The CEO sees urgency.</p>
      
      <p>A younger employee may see something everyone else has missed.</p>
      
      <p>A weak culture silences these differences.</p>
      
      <p>A strong culture welcomes them, organizes them, and transforms them into better decisions.</p>
      
      <p>This is especially important in the age of AI.</p>
      
      <p>AI can generate answers.</p>
      
      <p>But only leaders can create an environment where people feel safe to speak honestly, disagree respectfully, and move forward together.</p>
      
      <p>That is Wa.</p>
      
      <p>Not silence.</p>
      
      <p>Not comfort.</p>
      
      <p>Not artificial agreement.</p>
      
      <p>Wa is the leadership discipline of creating unity without sacrificing truth.</p>
      
      <p>In uncertain times, teams do not need leaders who pretend everything is simple.</p>
      
      <p>They need leaders who can hold tension, invite honest voices, and help people move in the same direction while preserving trust.</p>
      
      <p>Modern leadership needs more Wa.</p>
      
      <p>🇯🇵 <strong>Where does your team need more honest harmony?</strong></p>
    `
  },
  {
    id: 32,
    title: "Lessons from the Pacific #40",
    excerpt: "The Decision I Made With Only Partial Information — Real decisions often arrive before certainty does.",
    date: "2026-07-20",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/1783329931125.jpeg" alt="The Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Decision I Made With Only Partial Information</figcaption>
      </figure>
      
      <p><strong>🌊 The Decision I Made With Only Partial Information</strong></p>
      
      <p><strong>Lessons from the Pacific #40</strong></p>
      
      <p>On the Pacific Ocean, I rarely had complete information.</p>
      
      <p>I could not see the sky.</p>
      
      <p>I could not see the waves.</p>
      
      <p>I could not see the horizon.</p>
      
      <p>I had instruments.</p>
      
      <p>I had weather reports.</p>
      
      <p>I had the sound of the wind.</p>
      
      <p>I had the motion of the boat.</p>
      
      <p>I had my preparation.</p>
      
      <p>But I never had everything.</p>
      
      <p>One day during the crossing, I sensed that something was changing.</p>
      
      <p>The wind felt different.</p>
      
      <p>The rhythm of the boat changed.</p>
      
      <p>My instruments gave me part of the picture—but not the whole picture.</p>
      
      <p>I wanted certainty.</p>
      
      <p>But the ocean does not wait until you feel ready.</p>
      
      <p>So I had to make the best decision I could with the information I had.</p>
      
      <p>That experience taught me something important about leadership.</p>
      
      <p>Many leaders wait too long because they are looking for perfect information.</p>
      
      <p>Perfect market data.</p>
      
      <p>Perfect timing.</p>
      
      <p>Perfect agreement.</p>
      
      <p>Perfect confidence.</p>
      
      <p>Perfect conditions.</p>
      
      <p>But real decisions often arrive before certainty does.</p>
      
      <p>The question is not always:</p>
      
      <p>Do I have all the information?</p>
      
      <p>The better question is:</p>
      
      <p>Have I prepared enough to make a responsible decision with the information I have?</p>
      
      <p>There is a difference between reckless action and prepared judgment.</p>
      
      <p>The Pacific taught me that uncertainty does not remove responsibility.</p>
      
      <p>It increases it.</p>
      
      <p>Leaders do not need to see the entire ocean.</p>
      
      <p>They need to read the signs, trust their preparation, and move forward before the window closes.</p>
      
      <p>🌊 <strong>What important decision are you delaying because you are still waiting for perfect information?</strong></p>
    `
  },
  {
    id: 31,
    title: "Arigatofulness for Leaders #10",
    excerpt: "Thank You, Breeze — AI cannot carry the scent of a memory or awaken your heart through one unexpected moment.",
    date: "2026-07-15",
    category: ["Arigato", "Leadership"],
    content: `
      <figure class="my-8">
        <img src="/content/07152026.jpeg" alt="A morning breeze outside a café" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thank You, Breeze</figcaption>
      </figure>
      
      <p><strong>🌿 The breeze gave me something AI never could.</strong></p>
      
      <p><strong>Arigatofulness for Leaders #10</strong></p>
      
      <p>The other morning, I was sitting outside my favorite café, enjoying a cup of coffee while working on a LinkedIn post.</p>
      
      <p>I had been staring at the screen for several minutes, but the words wouldn’t come.</p>
      
      <p>Then, a gentle breeze brushed across my face.</p>
      
      <p>A moment later, it carried the faint fragrance of someone’s perfume.</p>
      
      <p>Instantly, I was transported back many years.</p>
      
      <p>It was the same perfume a colleague wore when I was a teacher in Japan.</p>
      
      <p>For a brief moment, I was back in that chapter of my life.</p>
      
      <p>The memories returned.</p>
      
      <p>My mind became clearer.</p>
      
      <p>The words I had been searching for began to flow naturally.</p>
      
      <p>That experience reminded me of something important.</p>
      
      <p>AI can analyze data.</p>
      
      <p>AI can generate ideas.</p>
      
      <p>AI can even write articles.</p>
      
      <p>But AI cannot carry the scent of a memory.</p>
      
      <p>It cannot send a breeze across your face.</p>
      
      <p>It cannot awaken your heart through one unexpected moment.</p>
      
      <p>Then another thought came to me.</p>
      
      <p>The breeze is always moving.</p>
      
      <p>And it quietly reminded me of something every leader needs to remember:</p>
      
      <p>Life keeps moving.</p>
      
      <p>Even when we feel stuck.</p>
      
      <p>Even when we lose our direction.</p>
      
      <p>Movement creates possibility.</p>
      
      <p>Today, I simply want to say:</p>
      
      <p>Thank you, Breeze.</p>
      
      <p>Thank you for carrying a memory.</p>
      
      <p>Thank you for bringing clarity.</p>
      
      <p>Thank you for reminding me to keep moving forward.</p>
      
      <p>Sometimes, the smallest gifts from nature become the greatest gifts for our hearts.</p>
      
      <p>🌿 <strong>Has an ordinary moment—a breeze, a familiar scent, or a simple sound—ever changed the way you think?</strong></p>
      
      <p>I’d love to hear your story.</p>
    `
  },
  {
    id: 30,
    title: "Lessons from the Pacific #39",
    excerpt: "The Strength to Sail Without Seeing — Leadership begins when you can no longer depend on what you see.",
    date: "2026-07-10",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/07102026.jpeg" alt="The Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Strength to Sail Without Seeing</figcaption>
      </figure>
      
      <p><strong>🌊 The Strength to Sail Without Seeing</strong></p>
      
      <p><strong>Lessons from the Pacific #39</strong></p>
      
      <p>Most people believe leadership begins with vision.</p>
      
      <p>The Pacific taught me something different.</p>
      
      <p>Leadership begins when you can no longer depend on what you see.</p>
      
      <p>I have been totally blind since I was sixteen.</p>
      
      <p>When I crossed the Pacific Ocean nonstop for 55 days, I never saw the waves.</p>
      
      <p>I never saw the horizon.</p>
      
      <p>I never saw the storms approaching.</p>
      
      <p>Yet somehow, I reached Japan.</p>
      
      <p>People often ask me,</p>
      
      <p><em>“How can a blind person navigate an ocean?”</em></p>
      
      <p>The answer is simple.</p>
      
      <p>I learned to trust what cannot be seen.</p>
      
      <p>I trusted preparation more than prediction.</p>
      
      <p>I trusted my instruments more than my emotions.</p>
      
      <p>Most importantly, I trusted my purpose more than my fear.</p>
      
      <p>As I reflect on that journey, I realize something surprising.</p>
      
      <p>Many leaders today are navigating in much the same way.</p>
      
      <p>No one can clearly see what AI will change.</p>
      
      <p>No one knows exactly how markets will evolve.</p>
      
      <p>No one can predict every disruption waiting beyond the horizon.</p>
      
      <p>Perhaps leadership has never been about seeing everything.</p>
      
      <p>Perhaps it has always been about moving forward without seeing everything.</p>
      
      <p>The Pacific taught me three lessons:</p>
      
      <p>1️⃣ Preparation creates confidence—not certainty.<br />
      Every hour spent preparing gave me the confidence to respond when reality changed.</p>
      
      <p>2️⃣ Trust is stronger than perfect information.<br />
      The best leaders know when to stop gathering more information and start making decisions.</p>
      
      <p>3️⃣ Direction matters more than visibility.<br />
      I couldn’t see the horizon, but I always knew where I wanted to go. Purpose becomes your compass when clarity disappears.</p>
      
      <p>As I prepare for my next challenge—the world’s first solo, nonstop trans-Pacific crossing by a totally blind sailor—I carry the same lesson with me.</p>
      
      <p>You don’t need to see the entire ocean.</p>
      
      <p>You only need the courage to trust the next wave.</p>
      
      <p>🌊 <strong>What helps you keep moving forward when the future is impossible to see clearly?</strong></p>
    `
  },
  {
    id: 29,
    title: "Harvard Showed Me Why No One Thrives Alone",
    excerpt: "No one thrives alone — People grow when other people invest in them.",
    date: "2026-07-08",
    category: ["Leadership", "Personal Journey"],
    content: `
      <figure class="my-8">
        <img src="/content/harvard.jpeg" alt="Harvard University campus" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Cambridge, Massachusetts</figcaption>
      </figure>
      
      <p><strong>🎓 Harvard Showed Me Why No One Thrives Alone</strong></p>
      
      <p>Last week, I spent several days in Cambridge, Massachusetts, visiting my daughter, who is studying at Harvard University.</p>
      
      <p>We shared breakfasts before her classes, spent Father’s Day together, walked through campus, and enjoyed meaningful conversations.</p>
      
      <p>As a father, I was grateful.</p>
      
      <p>As a leadership speaker, I was reminded of something important:</p>
      
      <p>No one thrives alone.</p>
      
      <p>This summer, my daughter is conducting astrophysics research at Harvard and recently presented her work at an academic conference.</p>
      
      <p>As we walked through campus, she shared stories about the professors, mentors, advisors, staff, friends, and many others who have supported her journey.</p>
      
      <p>Listening to her, I realized that what appears to be an individual achievement is often the result of many people investing in one person’s growth.</p>
      
      <p>That realization reminded me of a powerful leadership truth:</p>
      
      <p>People grow when other people invest in them.</p>
      
      <p>A manager who believes in someone.<br />
      A mentor who opens doors.<br />
      A colleague who offers encouragement.<br />
      A team member who quietly supports others.</p>
      
      <p>These contributions may never appear on a balance sheet, but they often create the greatest return.</p>
      
      <p>Next year, I plan to attempt the world’s first solo, nonstop trans-Pacific crossing by a totally blind sailor.</p>
      
      <p>People call it a solo challenge.</p>
      
      <p>But after visiting Harvard, I was reminded that even a solo voyage is never truly solo.</p>
      
      <p>Behind every achievement stands a community of people who helped make it possible.</p>
      
      <p>🌱 <strong>Who is thriving today because of your investment in them?</strong></p>
    `
  },
  {
    id: 27,
    title: "Arigatofulness for Leaders #9",
    excerpt: "Thank You, Shadow — Gratitude grows when we learn to appreciate what is often unseen.",
    date: "2026-06-29",
    category: ["Leadership", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/shade.jpeg" alt="The shadow of a building" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thank You, Shadow</figcaption>
      </figure>
      
      <p><strong>🌳 Thank You, Shadow</strong></p>
      
      <p><strong>Arigatofulness for Leaders #9</strong></p>
      
      <p>The other morning, I was waiting for a bus under the hot San Diego sun.</p>
      
      <p>It was much hotter than usual.</p>
      
      <p>Using my white cane, I carefully searched for shade and found the shadow of a building.</p>
      
      <p>For just a few minutes, that shadow made all the difference.</p>
      
      <p>It reminded me of something important.</p>
      
      <p>We often notice the sunlight.</p>
      
      <p>But rarely the shadow.</p>
      
      <p>Leadership is similar.</p>
      
      <p>Every organization has people who quietly make life easier for everyone else.</p>
      
      <p>They may not receive recognition.<br />
      They may not stand in the spotlight.<br />
      They may not be the ones receiving applause.</p>
      
      <p>But their support allows others to succeed.</p>
      
      <p>Administrative professionals.<br />
      Operations teams.<br />
      Assistants.<br />
      Coordinators.<br />
      The people who solve problems before anyone notices them.</p>
      
      <p>Because their work happens quietly, it is easy to overlook.</p>
      
      <p>Yet without them, many successes would never happen.</p>
      
      <p>The best leaders notice not only the stars,</p>
      
      <p>but also the people creating the conditions for those stars to shine.</p>
      
      <p>Gratitude grows when we learn to appreciate what is often unseen.</p>
      
      <p>🌳 <strong>Who is someone whose contribution may go unnoticed, but makes a real difference every day?</strong></p>
    `
  },
  {
    id: 26,
    title: "Lessons from the Pacific #37",
    excerpt: "Every Drop Feels Like a Gift — Gratitude begins with awareness.",
    date: "2026-06-25",
    category: ["Leadership", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/hirojune.jpeg" alt="Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center top;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Every Drop Feels Like a Gift</figcaption>
      </figure>
      
      <div class="flex flex-col md:flex-row gap-6 items-start">
      <div class="flex-1">
      <p><strong>🌧️ Lessons from the Pacific #37</strong></p>
      
      <p>During my 55-day nonstop Pacific crossing, fresh water was precious.</p>
      
      <p>There were no showers.</p>
      
      <p>One day, rain began to fall.</p>
      
      <p>I rushed on deck and started washing my hair with shampoo.</p>
      
      <p>It felt wonderful.</p>
      
      <p>Then the rain stopped.</p>
      
      <p>Suddenly, I found myself standing in the middle of the Pacific Ocean with shampoo still in my hair.</p>
      
      <p>To rinse it out, I had to use a small amount of our limited fresh water supply.</p>
      
      <p>I still remember how grateful I felt.</p>
      
      <p>On land, we turn on a faucet without thinking.</p>
      
      <p>In the middle of the ocean, every drop feels like a gift.</p>
      
      <p>The experience taught me something about leadership.</p>
      
      <p>We often take important resources for granted:</p>
      
      <p>• Time<br />
      • Trust<br />
      • Energy<br />
      • People</p>
      
      <p>But when something becomes limited, we finally see its value.</p>
      
      <p>The ocean taught me that gratitude begins with awareness.</p>
      
      <p>What we appreciate often depends on what we notice.</p>
      
      <p>And sometimes, the most ordinary things become extraordinary when we realize they are not guaranteed.</p>
      
      <p>🌧️ <strong>What is something you appreciate more today than you did 10 years ago?</strong></p>
      </div>
      <figure class="md:w-[30%] w-full flex-shrink-0 hidden md:block">
        <img src="/content/hirojune.jpeg" alt="Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 500px; object-fit: cover; object-position: center 20%;" />
      </figure>
      </div>
    `
  },
  {
    id: 28,
    title: "Lessons from the Pacific #38",
    excerpt: "The Leadership Lesson I Learned After a Whale Sank My Boat — A setback is not always the opposite of success.",
    date: "2026-06-21",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/sun.jpeg" alt="The sun over the Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thirteen years after the collision</figcaption>
      </figure>
      
      <p><strong>🌊 The Leadership Lesson I Learned After a Whale Sank My Boat</strong></p>
      
      <p><strong>Lessons from the Pacific #38</strong></p>
      
      <p>Thirteen years ago today, on June 21, 2013, my sailboat collided with a whale in the middle of the Pacific Ocean.</p>
      
      <p>Six days earlier, I had departed Fukushima, Japan, with the dream of crossing the Pacific Ocean.</p>
      
      <p>Then, in an instant, everything changed.</p>
      
      <p>The impact came without warning.</p>
      
      <p>Our boat was fatally damaged, and my sailing partner, Jiro Shinbo, and I were forced to abandon ship and climb into a life raft.</p>
      
      <p>We drifted for eleven hours before being rescued by the Japan Maritime Self-Defense Force.</p>
      
      <p>At the time, it felt like complete failure.</p>
      
      <p>The dream was gone.<br />
      The boat was gone.<br />
      Years of preparation seemed to have disappeared beneath the waves.</p>
      
      <p>For several months afterward, I struggled.</p>
      
      <p>Like many leaders who experience a major setback, I kept asking myself:</p>
      
      <p><em>“Why did this happen?”</em></p>
      
      <p>But over time, I discovered a more useful question:</p>
      
      <p><em>“What is this experience trying to teach me?”</em></p>
      
      <p>That question changed everything.</p>
      
      <p>I learned that resilience is not the ability to avoid failure.</p>
      
      <p>It is the willingness to continue after failure.</p>
      
      <p>I learned that courage is not moving forward when you feel confident.</p>
      
      <p>It is moving forward when confidence has disappeared.</p>
      
      <p>Most importantly, I learned that a setback is not always the opposite of success.</p>
      
      <p>Sometimes it is part of the path to success.</p>
      
      <p>Six years later, in 2019, I returned to the Pacific and successfully completed a nonstop crossing from San Diego to Fukushima, becoming the first totally blind sailor to cross the Pacific Ocean.</p>
      
      <p>Looking back now, I realize something important:</p>
      
      <p>The whale did not end the journey.</p>
      
      <p>It changed the journey.</p>
      
      <p>Many organizations today face unexpected collisions:</p>
      
      <p>• A market suddenly changes<br />
      • A major customer leaves<br />
      • A project fails<br />
      • Technology disrupts an industry<br />
      • A personal crisis impacts a leader</p>
      
      <p>These moments are painful because they destroy the plan.</p>
      
      <p>But leadership is not tested when the plan works.</p>
      
      <p>Leadership is tested when the plan no longer exists.</p>
      
      <p>The leaders who create extraordinary futures are rarely the ones who avoid storms.</p>
      
      <p>They are the ones who decide to keep sailing after them.</p>
      
      <p>Today, thirteen years after that collision, I am grateful.</p>
      
      <p>Not for the sinking.<br />
      Not for the suffering.</p>
      
      <p>But for the lesson.</p>
      
      <p>Because without that experience, I would never have discovered how much stronger we can become after we think everything is lost.</p>
      
      <p>Sometimes the obstacle that seems to stop your journey becomes the reason your journey matters.</p>
      
      <p>🌊 <strong>What setback in your life or leadership journey eventually became one of your greatest teachers?</strong></p>
    `
  },
  {
    id: 25,
    title: "Arigatofulness for Leaders #8",
    excerpt: "Thank You, Waiting Time — Attention shapes experience.",
    date: "2026-06-20",
    category: ["Leadership", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/bus.jpeg" alt="Waiting for a bus" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thank You, Waiting Time</figcaption>
      </figure>
      
      <p><strong>🌱 Thank You, Waiting Time</strong></p>
      
      <p><strong>Arigatofulness for Leaders #8</strong></p>
      
      <p>Recently, I was waiting for a bus that seemed to be taking forever to arrive.</p>
      
      <p>Thirty minutes passed.</p>
      
      <p>At first, I could have focused on my frustration.</p>
      
      <p>Why is it late?<br />
      I'm tired.<br />
      I want to get home.</p>
      
      <p>But then I began paying attention to the people around me.</p>
      
      <p>I heard friends laughing as they walked toward a restaurant.</p>
      
      <p>I heard someone talking joyfully on the phone.</p>
      
      <p>I felt the warmth of the afternoon sun and the gentle breeze.</p>
      
      <p>Without realizing it, the thirty minutes passed quickly.</p>
      
      <p>That experience reminded me of something important.</p>
      
      <p>We cannot always control what happens around us.</p>
      
      <p>But we can often choose where we place our attention.</p>
      
      <p>Leadership is similar.</p>
      
      <p>When challenges arise, leaders can focus on what is missing.</p>
      
      <p>Or they can focus on opportunities, strengths, and possibilities.</p>
      
      <p>The situation may not change immediately.</p>
      
      <p>But the experience of the situation often does.</p>
      
      <p><strong>Attention shapes experience.</strong></p>
      
      <p>And where leaders place their attention often shapes the culture around them.</p>
      
      <p>Thank you, waiting time, for reminding me of this.</p>
      
      <p>🌱 <strong>Where is your attention focused today?</strong></p>
    `
  },
  {
    id: 24,
    title: "Lessons from the Pacific #36",
    excerpt: "The Power of One Degree — Major outcomes are often created by small adjustments.",
    date: "2026-06-15",
    category: ["Leadership"],
    content: `
      <figure class="my-8">
        <img src="/content/ocean.jpeg" alt="Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Power of One Degree</figcaption>
      </figure>
      
      <p><strong>🌊 The Power of One Degree</strong></p>
      
      <p><strong>Lessons from the Pacific #36</strong></p>
      
      <p>During my Pacific crossing, we paid close attention to our course.</p>
      
      <p>A difference of just one degree didn't seem like much.</p>
      
      <p>In the moment, it was almost impossible to notice.</p>
      
      <p>But over days and weeks, that one-degree difference could put us hundreds of miles away from where we intended to go.</p>
      
      <p>The Pacific taught me an important lesson:</p>
      
      <p><strong>Major outcomes are often created by small adjustments.</strong></p>
      
      <p>Many leaders believe transformation requires dramatic change.</p>
      
      <p>Sometimes it does.</p>
      
      <p>But more often, meaningful change begins with small daily decisions.</p>
      
      <p>One more difficult conversation.<br />
      One more act of accountability.<br />
      One more moment of listening.<br />
      One more step toward a long-term vision.</p>
      
      <p>A single degree may seem insignificant today.</p>
      
      <p>But over time, it can completely change your destination.</p>
      
      <p>The question is not whether your organization is moving.</p>
      
      <p>The question is whether it is moving in the right direction.</p>
      
      <div class="flex flex-col md:flex-row gap-4 items-start my-8">
        <div class="flex-1">
          <p>One more difficult conversation.<br />
          One more moment of listening.<br />
          One more step toward a long-term vision.</p>
        </div>
        <figure class="md:w-64 w-full flex-shrink-0">
          <img src="/content/ocean2.jpeg" alt="The Pacific Ocean" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 320px; object-fit: cover;" />
          <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">One degree can change everything</figcaption>
        </figure>
      </div>
      
      <p>🌊 <strong>What is one small adjustment that could create a better future for your team?</strong></p>
    `
  },
  {
    id: 23,
    title: "Arigato Share for Leaders #2",
    excerpt: "Thank You, Comfortable Shoes — Sometimes the strongest support is also the least visible.",
    date: "2026-06-06",
    category: ["Leadership", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/shoes.jpeg" alt="Comfortable shoes" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Thank You, Comfortable Shoes</figcaption>
      </figure>
      
      <p><strong>👟 Thank You, Comfortable Shoes</strong></p>
      
      <p><strong>Arigato Share for Leaders #2</strong></p>
      
      <p>The other day, I stepped on a small rock.</p>
      
      <p>And for a moment, I felt grateful for my shoes.</p>
      
      <p>If I had been barefoot, it would have hurt.</p>
      
      <p>But because I was wearing shoes, I barely noticed it.</p>
      
      <p>That simple moment made me realize something.</p>
      
      <p>Every day, my shoes quietly support me.</p>
      
      <p>They protect my feet.<br />
      They help me move forward.</p>
      
      <p>Yet most days, I hardly think about them.</p>
      
      <p>That realization reminded me of leadership.</p>
      
      <p>In every organization, there are people just like comfortable shoes.</p>
      
      <p>They may not be the most visible.<br />
      They may not receive the most recognition.<br />
      They may not stand on the stage.</p>
      
      <p>But they make it possible for everyone else to move forward.</p>
      
      <p>Administrative staff.<br />
      Coordinators.<br />
      Assistants.<br />
      Operations teams.<br />
      Reliable employees who consistently show up and do their work well.</p>
      
      <p>Because they are dependable, we sometimes overlook how valuable they are.</p>
      
      <p>We often notice their value only when they are gone.</p>
      
      <p>Leadership is not only about celebrating the stars.</p>
      
      <p>It is also about appreciating the people who quietly support the journey.</p>
      
      <p>Sometimes the strongest support is also the least visible.</p>
      
      <p>Thank you, comfortable shoes, for reminding me of this.</p>
      
      <p>👟 <strong>Who is someone in your organization whose contribution deserves more appreciation today?</strong></p>
    `
  },
  {
    id: 22,
    title: "Lessons from the Pacific #35",
    excerpt: "The Sound of an Unhealthy Boat — Major problems usually announce themselves quietly before they arrive.",
    date: "2026-06-04",
    category: ["Leadership", "Resilience", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/june4.jpeg" alt="Pacific boat" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Sound of an Unhealthy Boat</figcaption>
      </figure>
      
      <p><strong>🌊 The Sound of an Unhealthy Boat</strong></p>
      
      <p><strong>Lessons from the Pacific #35</strong></p>
      
      <p>Most boats don't break suddenly.</p>
      
      <p>They warn you first.</p>
      
      <p>A strange vibration.<br />
      A new rattle.<br />
      An unfamiliar creak.</p>
      
      <p>The problem is not hearing the sound.</p>
      
      <p>The problem is ignoring it.</p>
      
      <p>During my Pacific crossing, I learned that small warning signs rarely stay small.</p>
      
      <p>A loose fitting becomes a broken part.<br />
      A small leak becomes a serious threat.</p>
      
      <p>The Pacific taught me that major problems usually announce themselves quietly before they arrive.</p>
      
      <p>Leadership is often the same.</p>
      
      <p>Organizations do not become unhealthy overnight.</p>
      
      <p>People do not suddenly burn out.<br />
      Trust does not disappear in a single day.</p>
      
      <p>Before larger problems appear, there are often small signs.</p>
      
      <p>A team member becomes unusually quiet.<br />
      Communication slows down.<br />
      Energy begins to fade.</p>
      
      <p>The warning signs are there.</p>
      
      <p>The question is whether we are listening.</p>
      
      <p>The healthiest boats—and the healthiest organizations—are not the ones without problems.</p>
      
      <p>They are the ones that notice problems early.</p>
      
      <p>🌊 <strong>What warning sign might your team be trying to tell you today?</strong></p>
    `
  },
  {
    id: 21,
    title: "The Leadership Lessons from Stable Connection",
    excerpt: "Before strategy and performance, leaders must create stable connection built on trust, listening, and presence.",
    date: "2026-05-30",
    category: ["Leadership", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/connection.jpeg" alt="Stable connection" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Leadership Lessons from Stable Connection</figcaption>
      </figure>
      
      <p><strong>🌱 The Leadership Lessons from Stable Connection</strong></p>
      
      <p><strong>Arigato Share for Leaders #1</strong></p>
      
      <p>The other day, my Zoom meetings kept freezing.</p>
      
      <p>Voices cut in and out.<br />
      The connection felt unstable.</p>
      
      <p>So I bought a LAN cable and an adapter for my computer.</p>
      
      <p>The moment I switched from unstable Wi-Fi<br />
      to a stable wired connection,<br />
      everything changed.</p>
      
      <p>The meetings became smoother.<br />
      The stress disappeared.<br />
      I could focus fully on the people in front of me.</p>
      
      <p>And it reminded me of leadership.</p>
      
      <p>Many organizations focus on performance and strategy.</p>
      
      <p>But before any of that,<br />
      leaders must create stable connection.</p>
      
      <p>Connection built on trust.<br />
      Connection built on listening.<br />
      Connection built on presence.</p>
      
      <p>Without strong connection,<br />
      even talented teams struggle to move together.</p>
      
      <p>Sometimes leadership is not about moving faster.</p>
      
      <p>It is simply about strengthening the connection.</p>
      
      <p>Thank you, LAN cable,<br />
      for reminding me of this.</p>
      
      <p>🌱 <strong>What helps your team stay truly connected?</strong></p>
    `
  },
  {
    id: 20,
    title: "Lessons from the Pacific #34",
    excerpt: "The Weight of Wet Clothes — You cannot lead well while wearing emotional 'wet clothes.'",
    date: "2026-05-29",
    category: ["Leadership", "Resilience", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="/content/weight1.jpeg" alt="Wet clothes at sea" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The Weight of Wet Clothes</figcaption>
      </figure>
      
      <p><strong>🌊 The Weight of Wet Clothes</strong></p>
      
      <p><strong>Lessons from the Pacific #34</strong></p>
      
      <p>During my Pacific crossing,<br />
      there were days when my clothes stayed wet for hours.</p>
      
      <p>At first, I ignored it.</p>
      
      <p>But wet clothes do more than feel uncomfortable.</p>
      
      <p>They slowly steal your energy.<br />
      And even more dangerously — your body heat.</p>
      
      <p>The frightening part?</p>
      
      <p>After wearing them long enough,<br />
      you begin to think feeling cold is normal.</p>
      
      <p>Leadership can feel the same.</p>
      
      <p>Many leaders carry stress, exhaustion, resentment, or loneliness for so long<br />
      they stop noticing how much it drains them.</p>
      
      <p>Some know it feels wrong —<br />
      but keep wearing it anyway.</p>
      
      <p>The moment I changed into dry clothes at sea,<br />
      everything changed.</p>
      
      <p>Warmth returned.<br />
      Energy returned.<br />
      Clarity returned.</p>
      
      <p>That experience taught me:</p>
      
      <p><strong>You cannot lead well<br />
      while wearing emotional "wet clothes."</strong></p>
      
      <p>And if you no longer notice them,<br />
      that may be the greatest danger of all.</p>
      
      <figure class="my-8">
        <img src="/content/weight2.jpeg" alt="Relief and clarity" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Finding relief from emotional weight</figcaption>
      </figure>
      
      <p>🌊 <strong>What emotional weight<br />
      might be draining your leadership today?</strong></p>
    `
  },
  {
    id: 19,
    title: "The Quiet Strength of Accepting Help",
    excerpt: "Sometimes true strength is not in enduring everything alone, but in allowing connection.",
    date: "2026-05-28",
    category: ["Leadership", "Resilience", "Arigato"],
    content: `
      <figure class="my-8">
        <img src="https://images.pexels.com/photos/34297452/pexels-photo-34297452.jpeg" alt="Kyoto train station" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">A moment of connection in Japan</figcaption>
      </figure>
      
      <p><strong>🌸 The Quiet Strength of Accepting Help</strong></p>
      
      <p>The other day, I was riding a crowded train in Japan.</p>
      
      <p>There were no empty seats,<br />
      so I quietly held onto the handrail and stood.</p>
      
      <p>A few minutes later, someone gently said:</p>
      
      <p>"Please, take my seat."</p>
      
      <p>I smiled and replied,</p>
      
      <p>"Thank you very much."</p>
      
      <p>As I sat down,<br />
      I remembered something about my younger self.</p>
      
      <p>After losing my sight,<br />
      I used to refuse help whenever possible.</p>
      
      <p>I thought accepting help meant weakness.</p>
      
      <p>I wanted to prove<br />
      I could do everything alone.</p>
      
      <p>But over time,<br />
      I learned something important:</p>
      
      <p><strong>Rejecting help did not make me stronger.<br />
      It only made me more isolated.</strong></p>
      
      <p>That day on the train reminded me again:</p>
      
      <p>Sometimes true strength is not in enduring everything alone,<br />
      but in allowing connection.</p>
      
      <p>Leadership can be the same.</p>
      
      <p>Many leaders carry pressure silently.</p>
      
      <p>They feel they must always appear strong, capable, and certain.</p>
      
      <p>But people do not trust leaders because they are perfect.</p>
      
      <p>They trust leaders because they are human.</p>
      
      <p>Today, I share this lesson with leadership teams as part of my message:</p>
      
      <p><strong>Strong leadership is not about pretending you need no support.</strong></p>
      
      <p>It is about creating a culture<br />
      where people feel safe to help each other.</p>
      
      <p>🌸 <strong>When was the last time you allowed someone to help you?</strong></p>
    `
  },
  {
    id: 18,
    title: "Leadership Lessons from Waikiki .",
    excerpt: "The ocean reminded me this morning: True presence has its own quiet power. Calm creates trust, clarity, and impact.",
    date: "2026-05-10",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/hawaii.jpeg" alt="Waikiki beach" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover; object-position: center 25%;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Listening Beyond the Noise</figcaption>
      </figure>
      
      <p><strong>🌊 Leadership Lessons from Waikiki — Listening Beyond the Noise</strong></p>
      
      <p>This morning in Waikiki, I sat quietly by the beach before the city fully woke up.</p>
      
      <p>The sound of the waves.<br />
      The warm breeze.<br />
      People walking slowly with coffee in their hands.</p>
      
      <p>What struck me most was this:</p>
      
      <p>Even in one of the busiest places in the world,<br />
      the ocean never rushes.</p>
      
      <p>The waves arrive steadily.<br />
      Calmly.<br />
      Without competing with anything around them.</p>
      
      <p>And it made me reflect on leadership.</p>
      
      <p>Today, many leaders live surrounded by constant noise.</p>
      
      <p>Notifications.<br />
      Meetings.<br />
      Deadlines.<br />
      Pressure to respond immediately.</p>
      
      <p>In that environment, it becomes easy to confuse speed with effectiveness.</p>
      
      <p>But the ocean reminded me of something important this morning:</p>
      
      <p><strong>True presence has its own quiet power.</strong></p>
      
      <p>Not every decision must be immediate.<br />
      Not every silence must be filled.<br />
      Not every moment requires performance.</p>
      
      <p>Sometimes the most valuable thing a leader can do is create calm.</p>
      
      <p>Calm allows people to think clearly.<br />
      Calm allows trust to grow.<br />
      Calm allows teams to breathe.</p>
      
      <p>Listening to the waves in Waikiki, I was reminded of three things:</p>
      
      <p>1️⃣ <strong>Consistency creates trust</strong><br />
      The ocean does not need to prove itself every minute.<br />
      Its steady rhythm is enough.</p>
      
      <p>2️⃣ <strong>Quiet leaders can be powerful leaders</strong><br />
      You do not always need the loudest voice<br />
      to create the strongest impact.</p>
      
      <p>3️⃣ <strong>Peace is contagious</strong><br />
      When a leader becomes calmer,<br />
      teams often become calmer too.</p>
      
      <figure class="my-8">
        <img src="/content/hawaii2.jpeg" alt="Ocean waves in Waikiki" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Calm allows trust to grow</figcaption>
      </figure>
      
      <p>This morning reminded me that leadership is not only about driving results.<br />
      It is also about creating an atmosphere<br />
      where people can think, recover, and move forward with clarity.</p>
      
      <p>🌊 <strong>In the middle of your busy schedule,<br />
      where do you find your own "Waikiki moment"?</strong></p>
    `
  },
  {
    id: 17,
    title: "Lessons from Toyama, Japan .",
    excerpt: "From Craftsmanship to Confidence — Great leadership lives in the details no one notices and the preparation no one applauds.",
    date: "2026-05-01",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/toyama.jpeg" alt="Craftsmanship in Toyama" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">From Craftsmanship to Confidence</figcaption>
      </figure>
      
      <p><strong>From Craftsmanship to Confidence — Lessons from Toyama, Japan 🇯🇵</strong></p>
      
      <p>I recently visited Toyama, where the development and production teams behind Goldwin, GOLDWIN INC. and Helly Hansen are based.</p>
      
      <p>As I prepare for my next solo Pacific crossing, they are creating custom-made sailing gear tailored specifically for this challenge.</p>
      
      <p>What struck me most was not just the technology — but the spirit behind it.</p>
      
      <p><strong>Every detail matters.<br />
      Every stitch has intention.<br />
      Every process reflects discipline and care.</strong></p>
      
      <p>During my visit, the team listened deeply to my needs as a blind sailor.</p>
      
      <p>They didn't just produce gear.<br />
      They co-created a solution with me.</p>
      
      <p>Using advanced 3D body scanning technology, they analyzed my body and movement to design gear that maximizes both safety and performance — even in the harshest conditions of the ocean.</p>
      
      <p>There was also media coverage during the visit, but what stayed with me was something quieter:</p>
      
      <p>👉 <strong>The unseen dedication behind the scenes.</strong></p>
      
      <p>Out in the middle of the Pacific, I may be alone.<br />
      But in truth, I am not.</p>
      
      <p>Because this gear carries the commitment, craftsmanship, and belief of so many people.</p>
      
      <p>And that gives me confidence — not just comfort.</p>
      
      <p><strong>A Leadership Reflection</strong></p>
      
      <p>Great leadership is not always visible.</p>
      
      <p>It lives in:<br />
      • The details no one notices<br />
      • The preparation no one applauds<br />
      • The people working quietly behind the scenes</p>
      
      <p>When leaders truly listen and build with intention,<br />
      they don't just create products.<br />
      They create trust.</p>
      
      <p>And trust travels farther than visibility ever can.</p>
      
      <p>I am deeply grateful to the teams in Toyama for supporting this journey.<br />
      This challenge may be mine —<br />
      but this mission belongs to all of us.</p>
      
      <p><strong>Arigato.</strong></p>
    `
  },
  {
    id: 16,
    title: "From my keynote in Türkiye.",
    excerpt: "Sometimes inclusion is not about big changes—but about understanding what helps someone show up at their best.",
    date: "2026-04-28",
    category: ["Leadership", "Keynote Speaker"],
    content: `
      <figure class="my-8">
        <img src="/content/fromturkey.jpeg" alt="Keynote in Türkiye" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Understanding what helps someone show up at their best</figcaption>
      </figure>
      
      <p>I'd like to share something small—but important—from my keynote in Türkiye.</p>
      
      <p>During rehearsal at Limak Group of Companies, I noticed something.<br />
      There was no podium on the stage.</p>
      
      <p>When I asked, I was told:<br />
      "It's designed this way so speakers can move freely and perform."</p>
      
      <p>I smiled and said:<br />
      "I don't dance. Could you please place a podium?"</p>
      
      <p>Here's why.</p>
      
      <p>If you can see, you always know your direction.<br />
      But when you cannot see,<br />
      you don't always realize when you've turned slightly to the side.</p>
      
      <p>As a blind keynote speaker,<br />
      I use the podium as a reference.</p>
      
      <p>When I feel it, I know:<br />
      "This is forward."</p>
      
      <p>If I sense I've shifted,<br />
      I gently touch it—and realign myself.</p>
      
      <p>It may seem like a small detail.<br />
      But for me,<br />
      it makes all the difference.</p>
      
      <p>Thanks to that small adjustment,<br />
      I was able to face the audience directly<br />
      and deliver my message with clarity.</p>
      
      <p>Sometimes, inclusion is not about big changes—<br />
      but about understanding what helps someone show up at their best.</p>
    `
  },
  {
    id: 15,
    title: "After speaking in Türkiye,",
    excerpt: "Leaders don't need more information. They need a moment that shifts how they see.",
    date: "2026-04-27",
    category: ["Leadership"],
    content: `
      <figure class="my-8">
        <img src="/content/afterturkey.jpeg" alt="After speaking in Türkiye" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Creating a moment of clarity</figcaption>
      </figure>
      
      <p><strong>After speaking in Türkiye,</strong></p>
      
      <p>I kept thinking about one thing.</p>
      
      <p>Leaders don't need more information.<br />
      They need a moment that shifts how they see.</p>
      
      <p>During my talk,<br />
      I shared three simple words:</p>
      
      <p><strong>Trust.</strong><br />
      <strong>Action.</strong><br />
      <strong>Persistence.</strong></p>
      
      <p>Nothing new.<br />
      But something changed.</p>
      
      <p>Not because the words were powerful.<br />
      But because they became real<br />
      in each leader's situation.</p>
      
      <p>That's when I realized:<br />
      Leadership is not about teaching.</p>
      
      <p>It's about creating a moment of clarity.</p>
      
      <p>🌍 <strong>Let me ask you:</strong><br />
      Which one do you need most right now?</p>
      
      <p>1️⃣ <strong>Trust</strong><br />
      2️⃣ <strong>Action</strong><br />
      3️⃣ <strong>Persistence</strong></p>
    `
  },
  {
    id: 14,
    title: "Gratitude from the Stage in Türkiye",
    excerpt: "Leadership in action at Limak Group's 50th Anniversary: Trust, Action, Persistence.",
    date: "2026-04-26",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/turkey.jpeg" alt="Stage in Türkiye" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Leadership in action at Limak's 50th Anniversary</figcaption>
      </figure>
      
      <p><strong>Gratitude from the Stage in Türkiye</strong></p>
      
      <p>Today, I had the honor of delivering a keynote at Limak Group of Companies's 50th Anniversary<br />
      in Antalya🇹🇷</p>
      
      <p>My talk, "Leadership in the Storm: Navigating When You Cannot See,"<br />
      was built on my two Pacific crossings—one failure, one success—<br />
      and focused on three core ideas:</p>
      
      <p><strong>Trust. Action. Persistence.</strong></p>
      
      <p>What moved me most was not just the stage…<br />
      but what happened around it.</p>
      
      <p>During the keynote, my 2027 project Hiro's Choice and donation page QR code<br />
      were projected on the main screen—something I did not expect.</p>
      
      <p>Even more, Limak announced a matching donation program,<br />
      doubling the impact of their employees' contributions.</p>
      
      <p><em>That is leadership in action.</em></p>
      
      <p>After the talk, leaders shared things like:</p>
      
      <p>"I've never said thank you to difficulties before. I will from now on."<br />
      "I realized I haven't truly trusted my team."<br />
      "Your three words will stay with me."</p>
      
      <p>This is why I speak—<br />
      not just to inspire, but to create real shifts<br />
      in how leaders think and act.</p>
      
      <p>I was also deeply touched when someone said:</p>
      
      <p>"I want to come to Japan to welcome your next challenge."</p>
      
      <p>A new support community has begun here in Türkiye.</p>
      
      <p>And I want to express my heartfelt gratitude to<br />
      Melih and İlkim from Limak,<br />
      who coordinated every detail, communication, and preparation<br />
      with such care and professionalism.</p>
      
      <p>Your support made this experience truly exceptional.</p>
      
      <figure class="my-8">
        <img src="/content/turkey2.jpeg" alt="Moment from the stage" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Creating real shifts in leadership</figcaption>
      </figure>
      
      <p>If you are an event planner, speaker bureau, or organization<br />
      looking for a keynote that goes beyond motivation<br />
      and creates lasting impact for your leaders and teams,<br />
      I would be honored to connect.</p>
      
      <figure class="my-8">
        <img src="/content/turkey3.jpeg" alt="Leadership in action" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Trust, Action, Persistence</figcaption>
      </figure>
    `
  },
  {
    id: 13,
    title: "Arigato Share for Leaders #5",
    excerpt: "Leadership doesn't always begin with strategy. Sometimes, it begins with one person who chooses to act.",
    date: "2026-04-25",
    category: ["Arigato", "Leadership"],
    content: `
      <figure class="my-8">
        <img src="/content/arigato5.jpeg" alt="Leadership in action" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The leadership power of one person who chooses to act</figcaption>
      </figure>
      
      <p><strong>🌱 Arigato Share for Leaders</strong></p>
      
      <p><strong>The Leadership Power of One Person Who Chooses to Act</strong></p>
      
      <p>Leadership doesn't always begin with strategy.<br />
      Sometimes, it begins with one person who chooses to act.</p>
      
      <p>Recently, I had the opportunity to speak at<br />
      Canyon Crest Academy in San Diego.</p>
      
      <p>This opportunity did not come from a formal request<br />
      or a corporate initiative.<br />
      It began with one person.</p>
      
      <p>Last September, a woman named T attended a youth seminar<br />
      hosted by the Global Arigato Project.</p>
      
      <p>She felt something deeply.<br />
      And instead of keeping that feeling to herself—<br />
      she acted.</p>
      
      <p>She said:<br />
      "I want others to hear this too."</p>
      
      <p>That one decision created a new connection.<br />
      It brought me to a school where students were curious, engaged,<br />
      and eager to learn.</p>
      
      <p>They listened with full attention.<br />
      They asked thoughtful questions.</p>
      
      <p>And in that room, I felt something powerful:<br />
      possibility.</p>
      
      <p>This experience reminded me of an important truth about leadership:</p>
      
      <p>1️⃣ <strong>Leadership is not position—it is action</strong><br />
      T did not wait for permission.<br />
      She did not wait for the perfect timing.<br />
      She moved.<br />
      And her action created opportunity for many others.</p>
      
      <p>2️⃣ <strong>What moves you is meant to move others</strong><br />
      When something truly touches you,<br />
      it is not meant to stay within you.<br />
      By sharing it,<br />
      you may reach someone who needs it even more.</p>
      
      <p>3️⃣ <strong>One action can shape unseen futures</strong><br />
      Because of her action,<br />
      I was able to speak to students who may now begin to dream bigger.</p>
      
      <p>And if even one of them starts to think:<br />
      "I want to challenge something greater."<br />
      "I want to contribute to the world."</p>
      
      <p>Then that one action has already changed the future.</p>
      
      <p>What touched me most was this:<br />
      My experiences and message are not spreading because of me alone.<br />
      They are expanding because of people like her—<br />
      people who choose to act.</p>
      
      <p>And if the young people who listened that day<br />
      begin to hold bigger dreams,<br />
      and if even a few of those dreams<br />
      are connected to creating a more peaceful world—<br />
      then the future will quietly begin to change.</p>
      
      <p>Leadership is not about doing everything yourself.<br />
      It is about creating a ripple<br />
      where others carry the message forward.</p>
      
      <p>🌍 <strong>Let me ask you:</strong><br />
      What is something that moved you recently—<br />
      that you have not yet shared?</p>
      
      <p>Your one action<br />
      might change someone's future.</p>
    `
  },
  {
    id: 12,
    title: "I'm in Antalya, Türkiye.",
    excerpt: "Tomorrow, I will be delivering a keynote at Limak's 50th Anniversary.",
    date: "2026-04-23",
    category: "Personal Journey",
    content: `
      <figure class="my-8">
        <img src="/content/personaljourney.jpeg" alt="Antalya Türkiye" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Journey to new stages</figcaption>
      </figure>
      
      <p><strong>I'm in Antalya, Türkiye.</strong></p>
      
      <p>Tomorrow, I will be delivering a keynote at Limak's 50th Anniversary.<br />
      This opportunity came from a connection after my speech at the World Economic Forum.</p>
      
      <p>I am deeply grateful.</p>
      
      <p>Years ago, my first Pacific crossing ended in failure after a collision with a whale.<br />
      At the time, it felt like the end.</p>
      
      <p>Today, I can say:<br />
      That moment created this moment.</p>
      
      <div class="flex flex-col md:flex-row gap-4 items-start">
        <div class="flex-1">
          <p>Thank you to the whale.<br />
          And thank you to everyone who has supported my journey.</p>
          
          <h3>The speech is tomorrow.</h3>
        </div>
        <div class="md:w-80">
          <figure>
            <img src="/content/personaljourney2.jpeg" alt="Journey reflection" class="w-full h-auto rounded-lg shadow-lg" style="max-width: 320px;" />
            <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Every moment leads to this one</figcaption>
          </figure>
        </div>
      </div>
    `
  },
  {
    id: 11,
    title: "Lessons from the Pacific #32",
    excerpt: "Confidence can save you. But overconfidence… can sink you.",
    date: "2026-04-21",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/pacific32.jpeg" alt="Pacific ocean waves" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The ocean rewards respect, not ego</figcaption>
      </figure>
      
      <p><strong>Lessons from the Pacific #32</strong></p>
      
      <p><strong>Why the Ocean Punishes Overconfidence</strong></p>
      
      <p>Confidence can save you.<br />
      But overconfidence… can sink you.</p>
      
      <p>In the middle of the Pacific,<br />
      the ocean does not care who you are.<br />
      It doesn't care about your experience.<br />
      It doesn't care about your past success.<br />
      And it certainly doesn't care<br />
      whether you have a disability or not.</p>
      
      <h3>On land, people may adjust.</h3>
      
      <p>They may help you.<br />
      They may be gentle.</p>
      
      <p>But the ocean is different.<br />
      It treats everyone the same.</p>
      
      <p>If you underestimate it,<br />
      it will punish you.<br />
      Immediately.<br />
      Without warning.</p>
      
      <h3>I learned this the hard way.</h3>
      
      <p>There were moments when I felt,<br />
      "I've got this."<br />
      Moments when I relaxed just a little too much.<br />
      Moments when I assumed things would be fine.</p>
      
      <p>And those were the moments<br />
      when the ocean reminded me:<br />
      "You are not in control."</p>
      
      <p>Here's what the Pacific taught me about overconfidence:</p>
      
      <p>1️⃣ <strong>The ocean rewards respect, not ego</strong><br />
      The moment you think you've mastered it,<br />
      you've already made a mistake.</p>
      
      <p>2️⃣ <strong>Small assumptions create big consequences</strong><br />
      At sea, a small misjudgment<br />
      can become a life-threatening situation.<br />
      Leadership is no different.</p>
      
      <p>3️⃣ <strong>Equality in nature is absolute</strong><br />
      The ocean doesn't see labels.<br />
      Not "leader."<br />
      Not "expert."<br />
      Not "disabled."</p>
      
      <p>Only one question matters:<br />
      Are you prepared… or not?</p>
      
      <h3>That truth is harsh.</h3>
      
      <p>But it is also powerful.</p>
      
      <p>Because it reminds us:</p>
      
      <h3>Real strength is not confidence.</h3>
      
      <p>It is humility.</p>
      
      <p>🌊 <strong>As a leader, ask yourself:</strong><br />
      Where might overconfidence be quietly putting your team at risk?</p>
      
      <p>These are the real lessons I share from the Pacific—<br />
      not just about survival, but about leading<br />
      when the stakes are real and the margin for error is small.</p>
      
      <p>If this resonates, let's connect.</p>
    `
  },
  {
    id: 10,
    title: "Arigato Share for Leaders #4",
    excerpt: "Most leaders try to eliminate fatigue. But what if fatigue isn't the enemy?",
    date: "2026-04-20",
    category: ["Arigato", "Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/leader4.jpeg" alt="Leadership reflection" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Fatigue can be proof of commitment</figcaption>
      </figure>
      
      <p><strong>Arigato Share for Leaders #4</strong></p>
      
      <p><strong>Gratitude for the Fatigue That Proves You Showed Up</strong></p>
      
      <p>Most leaders try to eliminate fatigue.<br />
      But what if fatigue isn't the enemy?</p>
      
      <p>Today, I felt tired.<br />
      Not burned out.<br />
      Not exhausted.<br />
      But a quiet, steady fatigue.</p>
      
      <p>The kind that says:<br />
      "I showed up."<br />
      "I did what I needed to do."<br />
      "I kept going."</p>
      
      <h3>In leadership, we're taught to optimize everything—</h3>
      
      <p>be efficient, stay sharp,<br />
      and avoid unnecessary strain.</p>
      
      <p>But in that process,<br />
      we sometimes lose something important.</p>
      
      <h3>Not all fatigue is negative.</h3>
      
      <p>Some fatigue is meaningful.</p>
      
      <p>Today reminded me of this:</p>
      
      <p><strong>3 Ways to Reframe Fatigue as Strength</strong></p>
      
      <p>1️⃣ <strong>Fatigue can be proof of commitment</strong><br />
      You don't feel it when you avoid challenges.</p>
      
      <p>2️⃣ <strong>Not all tiredness is burnout</strong><br />
      Some tiredness comes from doing what truly matters.</p>
      
      <p>3️⃣ <strong>Recovery is part of leadership</strong><br />
      Sustainable leaders know when to rest—<br />
      not just when to push.</p>
      
      <h3>Instead of resisting the feeling today,</h3>
      
      <p>I paused and thought:<br />
      "Thank you."</p>
      
      <p>Thank you to my body for supporting me through the day.<br />
      Thank you for allowing me to keep moving forward.</p>
      
      <h3>Leadership is not about being tireless.</h3>
      
      <p>It's about understanding<br />
      which fatigue to respect<br />
      and which to release.</p>
      
      <h3>Be honest:</h3>
      
      <p>👉 <strong>What kind of fatigue are you carrying right now?</strong><br />
      Is it draining you… or fulfilling you?</p>
      
      <p>If this resonates, I'd love to hear your experience.</p>
    `
  },
  {
    id: 9,
    title: "Lessons from the Pacific #31",
    excerpt: "Most leaders don't fail because of strategy. They fail because trust breaks.",
    date: "2026-04-17",
    category: ["Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/pacific31.jpeg" alt="Pacific ocean horizon" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Trust travels farther than control</figcaption>
      </figure>
      
      <p><strong>Lessons from the Pacific #31</strong></p>
      
      <p><strong>Trust That Travels Beyond the Horizon</strong></p>
      
      <p>Most leaders don't fail because of strategy.<br />
      They fail because trust breaks.</p>
      
      <p>In the middle of the Pacific,<br />
      I was never truly alone—<br />
      even though I couldn't see anyone.</p>
      
      <p>There were people I couldn't see:<br />
      my family, my team,<br />
      and those tracking my journey from land.</p>
      
      <p>I couldn't hear them.<br />
      I couldn't see them.<br />
      But I trusted them.</p>
      
      <p>And that trust… kept me moving forward.</p>
      
      <h3>Leadership is the same.</h3>
      
      <p>Your team doesn't just follow your vision.<br />
      They follow your trust.</p>
      
      <h3>From the ocean, I learned this:</h3>
      
      <p><strong>3 Rules of Trust in Leadership</strong></p>
      
      <p>1️⃣ <strong>Trust travels farther than control</strong><br />
      You cannot control everything,<br />
      but trust can reach places you cannot.</p>
      
      <p>2️⃣ <strong>Trust is built before the storm</strong><br />
      In calm waters, you prepare.<br />
      In storms, you rely on what you've built.</p>
      
      <p>3️⃣ <strong>When trust breaks, everything slows down</strong><br />
      Not immediately—<br />
      but inevitably.</p>
      
      <h3>In 2013, when my boat sank after hitting a whale,</h3>
      
      <p>I lost more than a vessel.<br />
      I lost trust in myself.</p>
      
      <p>And that was harder to rebuild than any boat.</p>
      
      <p>Six years later,<br />
      when I successfully crossed the Pacific,<br />
      the difference wasn't technology.</p>
      
      <p>It was trust.</p>
      
      <p>Trust in preparation.<br />
      Trust in people.<br />
      Trust in myself.</p>
      
      <h3>Leadership is not about having all the answers.</h3>
      
      <p>It's about creating an environment<br />
      where people trust enough to move forward—<br />
      even without answers.</p>
      
      <h3>Be honest:</h3>
      
      <p>👉 <strong>Where is trust breaking in your team right now?</strong></p>
      
      <p>If your organization is navigating uncertainty,<br />
      this is exactly what I focus on in my keynotes—<br />
      how leaders build trust<br />
      when they cannot see the future.</p>
      
      <p>Let's connect.</p>
    `
  },
  {
    id: 1,
    title: "Arigato Share for Leaders #3",
    excerpt: "When something feels off, it is not the time to move faster. It is the time to pay attention.",
    date: "2026-04-11",
    category: ["Arigato", "Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/arigatolesson3.jpeg" alt="Sailboat preparation" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Preparing my sailboat for the next Pacific crossing</figcaption>
      </figure>
      
      <p><strong>Arigato Share for Leaders #3</strong></p>
      
      <p><strong>Gratitude for the Decision I Didn't Make</strong></p>
      
      <p>In my previous post, I spoke about the importance of making decisions without delay.<br />
      And I stand by that.</p>
      
      <p>But this experience reminded me of something critical:</p>
      
      <p>When something feels off,<br />
      it is not the time to move faster.<br />
      It is the time to pay attention.</p>
      
      <h3>I am currently preparing my sailboat for next year's solo Pacific crossing.</h3>
      
      <p>The schedule was set.<br />
      Electrical work was supposed to begin on March 11.<br />
      Everything looked right.</p>
      
      <p>And yet…</p>
      
      <p>Something didn't feel right.</p>
      
      <p>There was no clear reason.<br />
      No visible problem.<br />
      No data suggesting risk.</p>
      
      <p>But inside me, a quiet voice said:<br />
      "Not yet."</p>
      
      <p>So I made a small decision.<br />
      I delayed the work.</p>
      
      <p>Later, we discovered something critical.<br />
      Part of the gunwale had been damaged.<br />
      (The gunwale is the upper edge of the boat's side—a structural component that supports the vessel.)</p>
      
      <p>If we had moved forward,<br />
      we would have built on top of that weakness.</p>
      
      <p>And out on the ocean—<br />
      it could have resulted in the mast breaking<br />
      in the middle of the Pacific.</p>
      
      <p>That realization stayed with me.<br />
      Because the most dangerous problems<br />
      are not the ones we see.<br />
      They are the ones we move forward without noticing.</p>
      
      <h3>Here are 3 leadership lessons:</h3>
      
      <p>1️⃣ <strong>Not all risks are visible</strong></p>
      
      <p>2️⃣ <strong>Intuition is experience speaking quietly</strong></p>
      
      <p>3️⃣ <strong>The courage to pause is leadership</strong></p>
      
      <p>Today, I feel gratitude.<br />
      Not for what happened—<br />
      but for what didn't happen.</p>
      
      <p>👉 <strong>Have you ever ignored a small signal and later realized it was right?</strong></p>
      
      <p>👉 If you want to strengthen decision-making beyond logic,<br />
      this is exactly what I help leaders develop. Let's connect.</p>
    `
  },
  {
    id: 3,
    title: "Lessons from the Pacific 30",
    excerpt: "Most leaders don't fail because they make the wrong decision. They fail because they wait too long to make one.",
    date: "2026-04-05",
    category: "Resilience",
    content: `
      <figure class="my-8">
        <img src="/content/pacific30.jpeg" alt="Pacific ocean view" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">The vast Pacific Ocean teaches decision-making under pressure</figcaption>
      </figure>
      
      <p><strong>Lessons from the Pacific 30</strong></p>
      
      <p><strong>The Decision That Cannot Be Delayed</strong></p>
      
      <p>Most leaders don't fail because they make the wrong decision.<br />
      They fail because they wait too long to make one.</p>
      
      <p>In the Pacific, there is a moment you learn to recognize.<br />
      The wind shifts.<br />
      The waves begin to change direction.<br />
      Something feels… off.</p>
      
      <p>At that moment, you have two choices:<br />
      Wait for more information.<br />
      Or act before it's too late.</p>
      
      <p>During my crossing, hesitation was dangerous.<br />
      If I waited for certainty, the situation often got worse.<br />
      If I acted early—even imperfectly—I could stay ahead of the ocean.</p>
      
      <h3>Leadership is no different.</h3>
      
      <p>You rarely have perfect information.<br />
      But delay carries its own risk.</p>
      
      <h3>Here are 3 lessons the ocean taught me about decision-making:</h3>
      
      <p>1️⃣ <strong>Clarity is a luxury — timing is survival</strong><br />
      Waiting for perfect clarity often means missing the moment.</p>
      
      <p>2️⃣ <strong>Small decisions prevent big crises</strong><br />
      Early adjustments are easier than late corrections.</p>
      
      <p>3️⃣ <strong>Confidence grows after action, not before</strong><br />
      You don't feel ready.<br />
      You become ready by deciding.</p>
      
      <p>In my keynote, I often say:<br />
      Leadership is not about making perfect decisions.<br />
      It is about making decisions you are willing to own.</p>
      
      <h3>When was the last time you delayed a decision and what did it cost you?</h3>
      
      <p>If your team is navigating uncertainty and needs stronger decision-making under pressure,<br />
      this is exactly what I work on in my keynotes. Let's connect.</p>
    `
  },
  {
    id: 2,
    title: "Arigato Share for Leaders #2",
    excerpt: "Today, I feel deep gratitude for my connection with Ross Bernstein. His life itself is the message.",
    date: "2026-04-03",
    category: ["Arigato", "Leadership", "Resilience"],
    content: `
      <figure class="my-8">
        <img src="/content/hiromeeting.jpg" alt="Hiro speaking at conference" class="w-full h-auto rounded-lg shadow-lg" style="max-height: 400px; object-fit: cover;" />
        <figcaption class="text-center text-sm text-slate-warm/60 mt-3 italic">Speaking at the National Speakers Association conference</figcaption>
      </figure>
      
      <p><strong>Arigato Share for Leaders #2</strong></p>
      
      <p><strong>"An encounter can change the course of your life."</strong></p>
      
      <p>Today, I feel deep gratitude for my connection with Ross Bernstein, CSP, CPAE, GSF.</p>
      
      <p>Through an NSA podcast, I heard his story—continuing to stand on stage while facing stage 4 cancer. I was deeply moved.</p>
      
      <p>Because his message is not just something he speaks.<br />
      His life itself is the message.</p>
      
      <h3>When I lost my sight at 16, I once thought about ending my life.</h3>
      
      <p>And during my first attempt to cross the Pacific, my boat collided with a whale. I was rescued, but I came very close to losing everything.</p>
      
      <p>Since then, I have believed that this life I am living now is not something I own—it is something I have been given again.</p>
      
      <p>That is why I choose to live for something greater than myself.</p>
      
      <h3>Ross reminded me of something important:</h3>
      
      <p>Adversity does not stop us.<br />
      It clarifies our purpose.</p>
      
      <h3>I also want to express my gratitude to the National Speakers Association (NSA).</h3>
      
      <p>A community of incredible speakers who support, uplift, and learn from one another.</p>
      
      <p>Being part of this community is a true gift.</p>
      
      <p>This July, I will attend the NSA Influence Conference in Austin, Texas for the first time. I am truly excited.</p>
      
      <p>And more than anything, I cannot wait to experience Ross's keynote in person.</p>
      
      <h3>Somewhere in the world, there are people who continue to stand—not despite their challenges, but because of them.</h3>
      
      <p>Knowing that gives me courage.</p>
      
      <p>Thank you for this connection.<br />
      Thank you for this path.<br />
      And thank you for another day to live for others.</p>
    `
  },
  {
    id: 4,
    title: "I Was Not Standing There Alone",
    excerpt: "One month after Davos, I reflect on what leadership really means — it's not built on stages, but around tables.",
    date: "2026-03-18",
    category: "Leadership",
    content: `
      <p>One month has passed since I stood on the stage in Davos.</p>
      
      <p>Sometimes I still wonder — was it real?</p>
      
      <p>People often tell me, "It was your choice that brought you there."</p>
      
      <p>And yes, choice matters.</p>
      
      <p>But from where I stand, it never felt like mine alone.</p>
      
      <h3>Security was strict.</h3>
      
      <p>The world's leaders were walking those halls.<br />
      Outside, snow covered the ground.</p>
      
      <p>I am not used to walking on snow.<br />
      I could not see the ice beneath my feet.</p>
      
      <p>I walked because Doug guided me.</p>
      
      <h3>That night, over fondue and wine, I felt something simple but powerful:</h3>
      
      <p>Leadership is not built on stages.<br />
      It is built around tables.</p>
      
      <h3>Standing in Davos, I realized something deeply personal.</h3>
      
      <p>I was not there as an individual success story.<br />
      I was there as the representative of countless unseen hands.</p>
      
      <h3>Today, as I prepare for my 2027 solo Pacific crossing, I see another miracle — AI.</h3>
      
      <p>Without it, our global team across Japan, the U.S., and Europe could not collaborate so seamlessly.</p>
      
      <p>AI does not replace humanity.<br />
      It reveals how interdependent we truly are.</p>
    `
  },
  {
    id: 5,
    title: "All That Was Left Was a Decision",
    excerpt: "I once drifted in a life raft for 11 hours. In the middle of the Pacific. After hitting a whale. No land. No engine. No certainty.",
    date: "2026-03-16",
    category: "Leadership",
    content: `
      <p>I once drifted in a life raft for 11 hours.</p>
      
      <p>In the middle of the Pacific.<br />
      After hitting a whale.</p>
      
      <p>No land.<br />
      No engine.<br />
      No certainty.</p>
      
      <p>I couldn't even see the sky.</p>
      
      <p>There was only one thing left:</p>
      
      <p>A decision.</p>
      
      <p>Not to panic.<br />
      Not to imagine the worst.<br />
      Just to breathe.<br />
      And wait for the next small action.</p>
      
      <h3>Here's what I learned:</h3>
      
      <p>In a crisis, clarity doesn't come from sight.<br />
      It comes from what you choose to believe.</p>
      
      <h3>We live in uncertain times.</h3>
      
      <p>Markets shift.<br />
      Plans collapse.<br />
      Visibility disappears.</p>
      
      <p>So I'm curious—</p>
      
      <h3>When everything feels uncertain…</h3>
      
      <p>What do you hold onto?</p>
      
      <ul>
        <li>Faith?</li>
        <li>Discipline?</li>
        <li>A person?</li>
        <li>A mission?</li>
        <li>Data?</li>
        <li>Something else?</li>
      </ul>
      
      <p>I'd really love to know.</p>
    `
  },
  {
    id: 6,
    title: "Why I Chose to Sail Across the Pacific Blind",
    excerpt: "After losing my sight at 16, I had a choice: surrender to circumstance, or take ownership of how I would live. The ocean became my teacher.",
    date: "2024-01-15",
    category: "Personal Journey",
    content: `
      <p>After losing my sight at 16, I had a choice: surrender to circumstance, or take ownership of how I would live. The ocean became my teacher.</p>
      
      <p>When I decided to sail across the Pacific Ocean without sight, many called it impossible. They said it couldn't be done—that a blind person couldn't navigate 12,000 kilometers of open ocean alone.</p>
      
      <p>But I've learned that "impossible" is often just a word we use when we can't see the path forward. And I've been navigating without sight for nearly 40 years.</p>
      
      <h3>The Decision</h3>
      <p>It wasn't a rash decision. It came from years of preparation, of learning to trust my other senses, of understanding that vision isn't just about what your eyes perceive—it's about what you choose to see in yourself and in the world.</p>
      
      <p>The ocean, I realized, was the perfect teacher. It doesn't care about your limitations. It responds to your preparation, your resolve, and your willingness to adapt.</p>
      
      <h3>The Journey</h3>
      <p>For 55 days, I sailed through storms and calm, through darkness and light. I navigated by sound, by the feel of the wind, by the rhythm of the waves. My instruments spoke to me in data points that became my eyes.</p>
      
      <p>Every decision mattered. Every adjustment of the sails, every check of the coordinates—it all required complete presence and absolute trust in my preparation.</p>
      
      <h3>The Lesson</h3>
      <p>What I learned on that ocean changed how I see leadership and life:</p>
      
      <ul>
        <li><strong>Preparation is everything:</strong> You can't control the conditions, but you can control how prepared you are to face them.</li>
        <li><strong>Trust your team:</strong> I didn't do it alone. I had a support team, and I had to trust them completely.</li>
        <li><strong>Embrace uncertainty:</strong> The ocean is never completely predictable. Neither is business or life. Learn to navigate both.</li>
        <li><strong>Your limitations don't define you:</strong> They're just conditions to work within, not barriers to stop you.</li>
      </ul>
      
      <p>When I reached the other side of that ocean, I proved something to myself—but more importantly, I learned something about all of us: we're capable of far more than we believe, if only we're willing to see beyond our perceived limitations.</p>
    `
  },
  {
    id: 7,
    title: "Leadership in Uncertainty: What the Ocean Taught Me",
    excerpt: "When you can't see what's ahead, you learn to trust your instruments, your team, and your intuition. Here's what 55 days at sea taught me about leadership.",
    date: "2024-01-10",
    category: "Leadership",
    content: `
      <p>When you can't see what's ahead, you learn to trust your instruments, your team, and your intuition. Here's what 55 days at sea taught me about leadership.</p>
      
      <p>Leadership isn't about having all the answers. It's about navigating when answers aren't clear.</p>
      
      <h3>Navigating Without Sight</h3>
      <p>On the ocean, I couldn't see the horizon. I couldn't see the weather systems approaching. I had to rely on my instruments—GPS, wind sensors, radar—and trust what they told me.</p>
      
      <p>In business, we often face the same challenge. We can't see the future. We can't see every market shift or competitor move. But we can build our instruments—our data, our systems, our teams—and learn to trust them.</p>
      
      <h3>The Role of Intuition</h3>
      <p>But instruments only tell part of the story. The ocean has rhythms that don't show up on sensors. The wind has subtle shifts that data can't capture.</p>
      
      <p>I learned to listen—to feel the change in wave patterns, to hear the pitch shift in the wind. That intuition, developed over years of practice, saved me more than once.</p>
      
      <p>In leadership, data is essential. But so is intuition. That gut feeling that something is wrong, that opportunity is emerging, that a team member is struggling—learn to trust it.</p>
      
      <h3>Trusting Your Team</h3>
      <p>I couldn't do it alone. My support team on land monitored weather, routed me around storms, and provided essential information. I had to trust them completely.</p>
      
      <p>You can't lead alone either. Build a team you trust, empower them to do their jobs, and let them support you when you need it most.</p>
    `
  },
  {
    id: 8,
    title: "Turning Failure into Fuel: My First Pacific Attempt",
    excerpt: "In 2013, my first attempt ended in collision with a whale. That failure didn't define me—it prepared me for what came six years later.",
    date: "2024-01-05",
    category: "Resilience",
    content: `
      <p>In 2013, my first attempt ended in collision with a whale. That failure didn't define me—it prepared me for what came six years later.</p>
      
      <p>Failure has a stigma. We treat it as something to avoid, something to be ashamed of. But I've learned that failure is only final if you let it be.</p>
      
      <h3>The Collision</h3>
      <p>I was 13 days into my first Pacific crossing when it happened. A collision with a whale damaged my boat beyond repair. I had to abandon the attempt.</p>
      
      <p>It could have been the end. Many would have called it a sign that it was impossible, that I should give up on this "foolish dream."</p>
      
      <p>Instead, I asked myself: What did I learn? What would I do differently?</p>
      
      <h3>The Analysis</h3>
      <p>I spent years analyzing what went wrong. The collision wasn't about bad luck—it was about preparation. I hadn't prepared enough for the unexpected. I hadn't built in enough redundancy.</p>
      
      <p>So I prepared. For six years, I trained. I learned everything I could about ocean navigation, about my boat, about emergency procedures. I built redundancy into every system.</p>
      
      <h3>The Return</h3>
      <p>In 2019, I returned. And this time, I succeeded.</p>
      
      <p>But the success wasn't just about reaching the other side. It was about proving to myself that failure isn't a verdict—it's feedback. It's information. It's preparation in disguise.</p>
    `
  }
];

const MessageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // ページ遷移時に自動的にトップにスクロール（他のフックの前に配置）
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const message = messages.find(m => m.id === parseInt(id || '0'));
  
  // Find current message index
  const currentIndex = messages.findIndex(m => m.id === parseInt(id || '0'));
  const previousMessage = currentIndex > 0 ? messages[currentIndex - 1] : null;
  const nextMessage = currentIndex < messages.length - 1 ? messages[currentIndex + 1] : null;

  if (!message) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-24 px-6 bg-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl text-navy mb-6">Message Not Found</h1>
            <Link to="/messages">
              <Button variant="outline" className="text-navy border-navy">
                Back to Messages
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/messages" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors duration-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-inter text-sm font-medium">Back to Messages</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            {/* Category */}
            <div className="mb-6">
              <span className="text-xs tracking-wider uppercase text-gold font-inter font-medium">
                {Array.isArray(message.category) ? message.category.join(' • ') : message.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              {message.title}
            </h1>

            {/* Date */}
            <p className="font-inter text-slate-warm/60 text-sm">
              {new Date(message.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
          </div>

          {/* Audio: native player so screen readers and keyboards can play it */}
          {message.audio && (
            <section aria-labelledby="listen-heading" className="mb-10 rounded-lg border border-navy/10 bg-white p-5">
              <h2 id="listen-heading" className="font-inter text-base font-semibold text-navy mb-3">
                Listen to this message
              </h2>
              <audio
                controls
                preload="metadata"
                src={message.audio}
                aria-label={`Listen to this message: ${message.title}`}
                className="w-full"
              >
                <a href={message.audio}>Download the audio of this message</a>
              </audio>
            </section>
          )}

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="font-inter text-slate-warm leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          </article>

          {/* Divider */}
          <div className="my-12 border-t border-navy/10"></div>

          {/* Navigation */}
          <nav className="flex items-center justify-between gap-4 mb-12">
            {previousMessage ? (
              <Link 
                to={`/message/${previousMessage.id}#top`}
                className="flex items-center gap-2 text-navy hover:text-gold transition-colors duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <div className="text-left">
                  <p className="text-xs text-navy/60 font-inter mb-1">Previous</p>
                  <p className="text-sm font-inter font-medium line-clamp-1 max-w-[200px]">
                    {previousMessage.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div /> // Spacer for layout
            )}

            <Link 
              to="/messages"
              className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 rounded-sm text-navy hover:bg-navy hover:text-white transition-all duration-300 font-inter text-sm font-medium"
            >
              All Messages
            </Link>

            {nextMessage ? (
              <Link 
                to={`/message/${nextMessage.id}#top`}
                className="flex items-center gap-2 text-navy hover:text-gold transition-colors duration-300 group"
              >
                <div className="text-right">
                  <p className="text-xs text-navy/60 font-inter mb-1">Next</p>
                  <p className="text-sm font-inter font-medium line-clamp-1 max-w-[200px]">
                    {nextMessage.title}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ) : (
              <div /> // Spacer for layout
            )}
          </nav>

          {/* CTA */}
          <div className="text-center">
            <p className="font-playfair text-xl text-navy mb-6">
              Interested in bringing Hiro to speak at your event?
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-navy text-white hover:bg-navy/90 font-inter font-medium"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MessageDetail;
