import { motion } from 'framer-motion';
import { Download, Search, Puzzle, Eye } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Receba os arquivos secretos no seu e-mail.",
      description: "Download instantâneo após a compra",
      delay: 0.2
    },
    {
      icon: Search,
      title: "Explore relatórios, laudos e documentos antigos.",
      description: "Analise cada evidência com cuidado",
      delay: 0.4
    },
    {
      icon: Puzzle,
      title: "Conecte pistas e descubra novos segredos.",
      description: "Monte sua teoria sobre o caso",
      delay: 0.6
    },
    {
      icon: Eye,
      title: "Tente resolver o caso antes que seja tarde.",
      description: "Descubra a verdade sobre Red Ridge",
      delay: 0.8
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-typewriter text-evidence-gold mb-4">
            Como funciona a investigação?
          </h2>
          <p className="text-lg md:text-xl font-mono text-aged-paper leading-relaxed max-w-3xl mx-auto mb-6">
            Você recebe todos os arquivos digitais imediatamente após a compra.
            Cada pista, cada documento e cada detalhe vai aproximar (ou afastar) você da solução.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block bg-evidence-gold/10 border border-evidence-gold px-6 py-3 rounded-lg mb-4"
          >
            <p className="font-mono text-evidence-gold text-lg font-bold">
              ⏰ Entrega em menos de 2 minutos
            </p>
          </motion.div>
          <div className="w-32 h-1 bg-vhs-red mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              viewport={{ once: true }}
              className="evidence-card p-6 rounded-lg text-center relative group"
            >
              {/* Step Number */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-vhs-red text-aged-paper rounded-full flex items-center justify-center font-typewriter font-bold text-sm"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {index + 1}
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-12 h-12 text-evidence-gold mx-auto" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-typewriter text-aged-paper mb-4 font-bold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Hover Effect Border */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-lg"
                whileHover={{ borderColor: 'hsl(var(--evidence-gold))' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="case-file rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-xl font-serif-italic text-evidence-gold mb-6">
              "Cada pista te leva mais fundo no mistério..."
            </p>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px hsl(var(--vhs-red) / 0.5)",
                textShadow: "0 0 8px hsl(var(--vhs-red) / 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-investigation px-8 py-3 text-lg rounded-lg relative overflow-hidden"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <motion.div
                className="absolute inset-0 vhs-scanlines opacity-0"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">COMEÇAR INVESTIGAÇÃO</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;