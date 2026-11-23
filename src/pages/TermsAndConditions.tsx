import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-3xl mx-auto py-16 px-6 pt-24">
        <h1 className="font-playfair text-3xl md:text-4xl text-navy mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-navy max-w-none font-inter text-sm md:text-base text-navy/80">
          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">Effective Date</h2>
            <p>January 28, 2026</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">1. Introduction</h2>
            <p>Welcome to the Hiro Iwamoto Keynote Speaker website. By accessing or using this website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">2. Use of the Website</h2>
            <p className="mb-4">You may use this website for lawful purposes and in accordance with these Terms and Conditions. You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the website for any fraudulent or unauthorized purpose</li>
              <li>Interfere with or disrupt the website or servers connected to the website</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">3. Intellectual Property</h2>
            <p className="mb-4">All content on this website, including but not limited to text, images, logos, and design, is the property of Hiro Iwamoto or their licensors and is protected by intellectual property laws. You may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reproduce, modify, or distribute any content without permission</li>
              <li>Use any trademarks or logos without prior written consent</li>
              <li>Remove any copyright or proprietary notices from any content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">4. Booking and Services</h2>
            <p className="mb-4">All speaking engagements are subject to availability and separate written agreement. Key terms for bookings include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bookings are confirmed only after a signed contract is received</li>
              <li>All fees, travel expenses, and accommodations are outlined in individual agreements</li>
              <li>Cancellation policies vary by engagement and are specified in contracts</li>
              <li>Content and presentation topics subject to mutual agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">5. User Submissions</h2>
            <p className="mb-4">By submitting information through our contact forms, you agree that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The information you provide is accurate and complete</li>
              <li>You have the right to provide such information</li>
              <li>We may use this information to respond to your inquiries and for business purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Hiro Iwamoto and associated parties shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or inability to use it, even if advised of the possibility of such damages.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">7. Third-Party Links</h2>
            <p>This website may contain links to third-party websites. These links are provided for your convenience only. We do not control, endorse, or take responsibility for the content, policies, or practices of any third-party websites.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">8. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Hiro Iwamoto and associated parties from any claims, damages, or expenses arising from your use of this website or violation of these Terms and Conditions.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">9. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law principles.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-xl text-navy mb-4">10. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-navy mb-4">11. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us using the <a href="/#contact" className="text-[#b8860b] hover:underline">contact form</a> on this website.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;