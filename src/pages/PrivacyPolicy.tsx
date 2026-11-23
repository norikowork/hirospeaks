import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-3xl mx-auto py-16 px-6 pt-24">
        <h1 className="font-playfair text-3xl md:text-4xl text-navy mb-8">Privacy Policy</h1>
        
        <div className="prose prose-navy max-w-none font-inter text-sm md:text-base text-navy/80">
          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">Effective Date</h2>
            <p>January 28, 2026</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us when you contact us through this website, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your name, email address, and other contact information</li>
              <li>Details about your inquiry or event requirements</li>
              <li>Organization name (if applicable)</li>
              <li>Any additional information you choose to provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Respond to your inquiries about speaking engagements</li>
              <li>Provide information about booking availability</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With service providers who assist us in operating our website (only as necessary)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of communications from us</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, please contact us via the contact form on this website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">6. Cookies</h2>
            <p>This website may use cookies to enhance user experience. You can set your browser to refuse cookies, but some features of the site may not function properly.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-navy mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us using the <a href="/#contact" className="text-[#b8860b] hover:underline">contact form</a> on this website.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;