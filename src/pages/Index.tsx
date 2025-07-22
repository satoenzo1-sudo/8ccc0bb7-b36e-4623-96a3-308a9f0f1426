import HeroSection from '@/components/HeroSection';
import CaseHistorySection from '@/components/CaseHistorySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IncludedSection from '@/components/IncludedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-case-file-bg to-background">
      <HeroSection />
      <CaseHistorySection />
      <HowItWorksSection />
      <IncludedSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
