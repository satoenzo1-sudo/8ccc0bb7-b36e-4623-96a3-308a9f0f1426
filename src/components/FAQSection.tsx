import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "Como funciona?",
      answer: "Após a compra, você recebe acesso imediato a um arquivo digital confidencial contendo documentos, imagens e pistas relacionadas ao Caso Red Ridge VHS 13. Sua missão é investigar cada detalhe, conectar fragmentos de informação e chegar às próprias conclusões. Não há atalhos — apenas o seu raciocínio e a sua habilidade investigativa."
    },
    {
      question: "Para quem é o caso?",
      answer: "Para todos que gostam de mistérios, true crime, narrativas investigativas e experiências imersivas. Pode ser jogado individualmente, com o(a) namorado(a) ou em grupos de amigos — ideal para transformar qualquer encontro em uma noite de investigação."
    },
    {
      question: "Quanto tempo leva para ter acesso ao produto após a compra?",
      answer: "O acesso é liberado automaticamente logo após a confirmação do pagamento. Em poucos minutos, você já poderá iniciar sua investigação."
    },
    {
      question: "O produto tem acesso vitalício?",
      answer: "Sim. Uma vez adquirido, o arquivo permanece disponível para você sem prazo de expiração. O caso pode ser revisitado quantas vezes desejar."
    },
    {
      question: "O caso é autoral da The Forgotten VHS?",
      answer: "Sim. Todo o enredo, arquivos e materiais do Caso Red Ridge VHS 13 foram desenvolvidos pela equipe da The Forgotten VHS, garantindo originalidade e exclusividade."
    },
    {
      question: "Tem a solução correta do caso? Como saber se solucionei?",
      answer: "Sim. O Caso Red Ridge VHS 13 já vem com a conclusão oficial incluída no material. Porém, ela está em um arquivo separado, para que você escolha o momento de acessá-la. Assim, pode conduzir sua própria investigação primeiro e depois comparar suas descobertas com o desfecho oficial."
    },
    {
      question: "É possível pedir reembolso?",
      answer: "Sim. Caso não esteja satisfeito, você pode solicitar reembolso em até 7 dias após a compra, conforme o Código de Defesa do Consumidor."
    }
  ];

  return (
    <section id="faq-section" className="py-20 px-4 bg-gradient-to-b from-case-file-bg to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-typewriter text-evidence-gold mb-4 tracking-wider">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-24 h-1 bg-vhs-red mx-auto mb-6"></div>
          <p className="text-foreground/80 font-mono text-lg max-w-2xl mx-auto leading-relaxed">
            Esclareça suas dúvidas sobre o Caso Red Ridge VHS 13
          </p>
        </div>

        <div className="case-file rounded-lg p-8 border border-evidence-gold/20 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-evidence-gold/20 pb-4"
              >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 w-full">
                    <span className="text-vhs-red font-typewriter font-bold min-w-fit">
                      {String(index + 1).padStart(2, '0')})
                    </span>
                    <span className="text-evidence-gold font-typewriter text-lg font-bold tracking-wide group-hover:text-vhs-red transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="ml-12">
                    <p className="text-foreground/90 font-mono leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block stamp">
            <span className="font-typewriter text-sm">
              CONFIDENCIAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;