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
    <div className="w-full pt-20 pb-4 flex justify-center">
      <div className="case-file px-6 py-3 rounded-lg shadow-xl border-2 border-evidence-gold/50 bg-vhs-red/20 backdrop-blur-md">
        <Button
          onClick={scrollToFAQ}
          className="bg-vhs-red hover:bg-vhs-red/80 text-aged-paper font-typewriter text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105 border-2 border-evidence-gold/50 px-6 py-2"
        >
          🔍 Dúvidas? FAQ no final da página
        </Button>
      </div>
    </div>
  );
};

export default TopNotice;