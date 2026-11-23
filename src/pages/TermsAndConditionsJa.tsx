import Header from '../components/Header';
import FooterJa from '../components/FooterJa';

const TermsAndConditionsJa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-6 pt-24">
        <h1 className="font-playfair text-3xl md:text-4xl text-navy mb-8">利用規約</h1>

        <div className="prose prose-navy max-w-none font-inter text-sm md:text-base text-navy/80">
          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">施行日</h2>
            <p>2026年1月28日</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">1. はじめに</h2>
            <p>岩本光弘（Hiro Iwamoto）キーノートスピーカーのウェブサイトへようこそ。本ウェブサイトにアクセスまたはご利用いただくことで、本利用規約に同意したものとみなされます。本規約の一部にでも同意いただけない場合は、本ウェブサイトのご利用をお控えください。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">2. ウェブサイトのご利用</h2>
            <p className="mb-4">本ウェブサイトは、法令および本利用規約に従ってご利用いただけます。次の行為は禁止します。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>詐欺的な目的や、許可のない目的で本ウェブサイトを利用すること</li>
              <li>本ウェブサイトや、それに接続するサーバーの運用を妨げること</li>
              <li>本ウェブサイトの一部に不正にアクセスしようとすること</li>
              <li>ウイルス、マルウェア、その他の有害なコードを送信すること</li>
              <li>適用される法令や規則に違反すること</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">3. 知的財産権</h2>
            <p className="mb-4">本ウェブサイトのすべてのコンテンツ（文章、画像、ロゴ、デザインなどを含みますが、これらに限りません）は、岩本光弘またはそのライセンス提供者の財産であり、知的財産に関する法律で保護されています。次の行為は禁止します。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>許可なくコンテンツを複製、改変、配布すること</li>
              <li>事前の書面による同意なく、商標やロゴを使用すること</li>
              <li>コンテンツから著作権表示や権利表示を削除すること</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">4. 講演のご依頼とサービス</h2>
            <p className="mb-4">講演はすべて、日程の空き状況と、別途交わす書面による契約に基づきます。ご依頼に関する主な条件は次のとおりです。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ご依頼は、署名済みの契約書を受け取った時点で確定します</li>
              <li>講演料、交通費、宿泊費は、個別の契約で定めます</li>
              <li>キャンセルの条件は講演ごとに異なり、契約書に記載します</li>
              <li>講演の内容やテーマは、双方の合意により決定します</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">5. ご送信いただく情報</h2>
            <p className="mb-4">お問い合わせフォームから情報を送信された場合、次の点に同意したものとみなされます。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ご提供いただく情報が正確かつ完全であること</li>
              <li>その情報を提供する権利をお持ちであること</li>
              <li>当方が、お問い合わせへの回答および業務上の目的でその情報を利用できること</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">6. 責任の制限</h2>
            <p>法律で認められる最大の範囲で、岩本光弘および関係者は、本ウェブサイトのご利用またはご利用できなかったことにより生じた間接的、付随的、特別、または結果的な損害について、その可能性を知らされていた場合であっても、責任を負いません。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">7. 外部サイトへのリンク</h2>
            <p>本ウェブサイトには、外部のウェブサイトへのリンクが含まれることがあります。これらのリンクは便宜のために提供するものです。当方は、外部サイトの内容、方針、運営について管理しておらず、推奨も責任も負いません。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">8. 補償</h2>
            <p>お客様は、本ウェブサイトのご利用または本利用規約への違反により生じた請求、損害、費用について、岩本光弘および関係者に補償し、損害を与えないことに同意するものとします。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">9. 準拠法</h2>
            <p>本利用規約は、法の抵触に関する原則にかかわらず、日本法に準拠し、日本法に従って解釈されます。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">10. 本規約の変更</h2>
            <p>当方は、いつでも本利用規約を変更できるものとします。変更した場合は、新しい施行日とともにこのページでお知らせします。変更後も本ウェブサイトを引き続きご利用いただいた場合は、変更後の規約に同意したものとみなされます。</p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-navy mb-4">11. お問い合わせ</h2>
            <p>本利用規約についてご質問がある場合は、本ウェブサイトの<a href="/ja#contact" className="text-[#b8860b] hover:underline">お問い合わせフォーム</a>からご連絡ください。</p>
          </section>
        </div>
      </main>
      <FooterJa />
    </div>
  );
};

export default TermsAndConditionsJa;
