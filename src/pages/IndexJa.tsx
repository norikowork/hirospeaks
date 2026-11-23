import Header from '../components/Header';
import HeroSectionJa from '../components/HeroSectionJa';
import VideoSection from '../components/VideoSection';
import AboutSectionJa from '../components/AboutSectionJa';
import WhyHiroSectionJa from '../components/WhyHiroSectionJa';
import LatestMessagesSectionJa from '../components/LatestMessagesSectionJa';
import OutcomesSectionJa from '../components/OutcomesSectionJa';
import KeynotesSectionJa from '../components/KeynotesSectionJa';
import CredibilitySectionJa from '../components/CredibilitySectionJa';
import CTASectionJa from '../components/CTASectionJa';
import FooterJa from '../components/FooterJa';
import BackToTop from '../components/BackToTop';

const IndexJa = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSectionJa />
        <VideoSection />
        <AboutSectionJa />
        <WhyHiroSectionJa />
        <LatestMessagesSectionJa />
        <OutcomesSectionJa />
        <KeynotesSectionJa />
        <CredibilitySectionJa />
        <CTASectionJa />
      </main>
      <FooterJa />
      <BackToTop />
    </div>
  );
};

export default IndexJa;
