import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CaseHistorySection from '@/components/CaseHistorySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IncludedSection from '@/components/IncludedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TopNotice from '@/components/TopNotice';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-case-file-bg to-background">
      <TopNotice />
      <Header />
      <HeroSection />
      <CaseHistorySection />
      <HowItWorksSection />
      <IncludedSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
