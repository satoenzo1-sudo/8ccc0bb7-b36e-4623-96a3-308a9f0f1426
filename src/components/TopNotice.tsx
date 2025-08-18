import { Button } from "@/components/ui/button";

const TopNotice = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="case-file px-4 py-2 rounded-lg shadow-lg border border-evidence-gold/30">
        <Button
          onClick={scrollToFAQ}
          className="bg-vhs-red hover:bg-vhs-red/80 text-aged-paper font-typewriter text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105"
        >
          Dúvidas? FAQ no final da página
        </Button>
      </div>
    </div>
  );
};

export default TopNotice;