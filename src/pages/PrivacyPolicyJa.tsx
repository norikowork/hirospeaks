import Header from '../components/Header';
import FooterJa from '../components/FooterJa';

const PrivacyPolicyJa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-6 pt-24">
        <h1 className="font-playfair text-3xl md:text-4xl text-navy mb-8">プライバシーポリシー</h1>

        <div className="prose prose-navy max-w-none font-inter text-sm md:text-base text-navy/80">
          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">施行日</h2>
            <p>2026年1月28日</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">1. 収集する情報</h2>
            <p className="mb-4">本ウェブサイトからお問い合わせいただく際に、お客様から直接ご提供いただく次の情報を収集します。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>お名前、メールアドレス、その他の連絡先</li>
              <li>お問い合わせ内容やイベントのご要望の詳細</li>
              <li>組織名（該当する場合）</li>
              <li>その他、お客様が任意でご提供される情報</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">2. 情報の利用目的</h2>
            <p className="mb-4">収集した情報は、次の目的で利用します。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>講演のご依頼に関するお問い合わせへの回答</li>
              <li>講演の空き状況に関する情報のご提供</li>
              <li>当方のサービスに関するご連絡</li>
              <li>本ウェブサイトおよびサービスの改善</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">3. 情報の共有</h2>
            <p className="mb-4">お客様の個人情報を第三者に販売、交換、貸与することはありません。次の場合に限り、情報を共有することがあります。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>本ウェブサイトの運営を支援するサービス提供者との共有（必要な範囲に限ります）</li>
              <li>法令により求められる場合、または当方の権利を守るために必要な場合</li>
              <li>特定の目的について、お客様の同意がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">4. データの安全管理</h2>
            <p>お客様の情報を不正なアクセス、改ざん、破壊から守るため、合理的な安全対策を講じています。ただし、インターネット上の通信方法に完全に安全なものはなく、絶対的な安全を保証することはできません。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">5. お客様の権利</h2>
            <p className="mb-4">お客様には、次の権利があります。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ご自身の個人情報の開示を求め、確認すること</li>
              <li>情報の訂正または削除を求めること</li>
              <li>当方からの連絡を停止すること</li>
              <li>いつでも同意を撤回すること</li>
            </ul>
            <p>これらの権利を行使される場合は、本ウェブサイトのお問い合わせフォームからご連絡ください。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">6. Cookie（クッキー）</h2>
            <p>本ウェブサイトでは、利便性を高めるためにCookieを使用することがあります。ブラウザの設定でCookieを拒否することもできますが、その場合、サイトの一部の機能が正しく動作しないことがあります。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">7. 外部サイトへのリンク</h2>
            <p>本ウェブサイトには、外部のウェブサイトへのリンクが含まれることがあります。外部サイトのプライバシーへの取り組みや内容について、当方は責任を負いません。外部サイトをご利用の際は、各サイトのプライバシーポリシーをご確認ください。</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">8. 本ポリシーの変更</h2>
            <p>本プライバシーポリシーは、必要に応じて変更することがあります。変更した場合は、新しい施行日とともにこのページでお知らせします。</p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-navy mb-4">9. お問い合わせ</h2>
            <p>本プライバシーポリシーについてご質問がある場合は、本ウェブサイトの<a href="/ja#contact" className="text-[#b8860b] hover:underline">お問い合わせフォーム</a>からご連絡ください。</p>
          </section>
        </div>
      </main>
      <FooterJa />
    </div>
  );
};

export default PrivacyPolicyJa;
