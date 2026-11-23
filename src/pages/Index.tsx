import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import WhyHiroSection from '../components/WhyHiroSection';
import LatestMessagesSection from '../components/LatestMessagesSection';
import OutcomesSection from '../components/OutcomesSection';
import KeynotesSection from '../components/KeynotesSection';
import CredibilitySection from '../components/CredibilitySection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <WhyHiroSection />
        <LatestMessagesSection />
        <OutcomesSection />
        <KeynotesSection />
        <CredibilitySection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;