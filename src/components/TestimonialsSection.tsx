import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import TestimonialSlideshow from './TestimonialSlideshow';
import ProductShowcase from './ProductShowcase';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana P.",
      quote: "Me senti dentro de um filme de terror dos anos 80. Imersivo demais!",
      role: "Investigadora",
      delay: 0.1
    },
    {
      name: "Lucas & Carol",
      quote: "Passei a madrugada inteira tentando resolver com meu namorado.",
      role: "Casal de Detetives",
      delay: 0.3
    },
    {
      name: "Felipe R.",
      quote: "Nunca vi nada tão realista, parecia uma investigação de verdade.",
      role: "True Crime Fan",
      delay: 0.5
    },
    {
      name: "Mariana S.",
      quote: "Consegui resolver o caso, mas não foi nada fácil. Recomendo!",
      role: "Detetive Amadora",
      delay: 0.7
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Social movement trigger before testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-block bg-evidence-gold/10 border border-evidence-gold px-8 py-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-evidence-gold font-bold text-lg">
              📈 MOVIMENTO CRESCENTE
            </p>
            <p className="font-mono text-aged-paper text-sm mt-2">
              +127 novos investigadores entraram no caso apenas hoje
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-typewriter text-evidence-gold mb-4">
            O que dizem os detetives amadores:
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <p className="font-mono text-aged-paper text-lg">
              ⭐ 2.834+ investigadores já resolveram o caso
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block stamp text-sm"
          >
            DEPOIMENTOS VERIFICADOS
          </motion.div>
        </motion.div>

        {/* Slideshow de Depoimentos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TestimonialSlideshow />
        </motion.div>

        {/* Product Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-typewriter text-evidence-gold text-center mb-8">
            Veja por dentro do caso Red Ridge:
          </h3>
          <ProductShowcase />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: testimonial.delay }}
              viewport={{ once: true }}
              className="evidence-card p-8 rounded-lg relative group"
            >
              {/* VHS scanlines */}
              <div className="absolute inset-0 vhs-scanlines opacity-5 rounded-lg"></div>
              
              {/* Quote icon */}
              <motion.div 
                className="absolute -top-3 -left-3 w-6 h-6 bg-vhs-red rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-3 h-3 text-aged-paper" />
              </motion.div>

              {/* Quote text */}
              <motion.p 
                className="font-mono text-aged-paper text-lg leading-relaxed mb-6 italic relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                "{testimonial.quote}"
              </motion.p>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-typewriter text-evidence-gold font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="font-mono text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
                
                {/* Evidence badge */}
                <motion.div 
                  className="w-12 h-12 border-2 border-evidence-gold rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, borderColor: 'hsl(var(--vhs-red))' }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-evidence-gold font-typewriter font-bold text-xs">
                    ★
                  </span>
                </motion.div>
              </div>

              {/* Corner effect */}
              <motion.div 
                className="absolute bottom-0 right-0 w-0 h-0 border-r-[15px] border-r-transparent border-b-[15px] border-b-vhs-red opacity-20"
                whileHover={{ opacity: 40, scale: 1.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="case-file rounded-lg p-8 max-w-2xl mx-auto relative">
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="text-4xl md:text-6xl font-typewriter text-evidence-gold opacity-5 transform -rotate-12">
                RESOLVIDO
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-xl font-serif-italic text-evidence-gold mb-6">
                Seja o próximo a descobrir a verdade sobre Red Ridge
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-investigation px-8 py-3 text-lg rounded-lg"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                INVESTIGAR AGORA
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;