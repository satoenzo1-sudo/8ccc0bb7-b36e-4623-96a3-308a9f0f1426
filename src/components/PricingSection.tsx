import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Download } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="case-file rounded-lg p-8 md:p-12 text-center relative">
            {/* Background elements */}
            <div className="absolute inset-0 vhs-scanlines opacity-10 rounded-lg"></div>
            
            {/* Confidential stamps */}
            <motion.div 
              className="absolute -top-6 -right-6 stamp text-sm"
              animate={{ 
                rotate: [15, 12, 18, 15],
                scale: [0.8, 1, 0.9, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ACESSO LIBERADO
            </motion.div>

            {/* Product Cover */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/8970d588-9b1d-4841-8e17-b61893bf84c3.png" 
                alt="Red Ridge Case Cover" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-typewriter text-vhs-red mb-8"
            >
              Arquivo VHS 13
            </motion.h2>

            {/* Price */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="text-6xl md:text-7xl font-typewriter text-evidence-gold font-bold mb-2">
                R$ 37,90
              </div>
              <p className="font-mono text-aged-paper text-lg">
                Acesso imediato ao arquivo digital
              </p>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center justify-center space-x-3">
                <Zap className="w-6 h-6 text-vhs-red" />
                <span className="font-mono text-aged-paper">Entrega instantânea</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Download className="w-6 h-6 text-vhs-red" />
                <span className="font-mono text-aged-paper">PDF de 39 páginas</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-vhs-red" />
                <span className="font-mono text-aged-paper">7 dias de garantia</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px hsl(var(--vhs-red) / 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-investigation px-12 py-4 text-xl font-bold rounded-lg w-full md:w-auto relative overflow-hidden"
              onClick={() => {
                window.open('https://pay.kiwify.com.br/0Ja4ags', '_blank');
              }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                ACESSAR O CASO AGORA
              </motion.span>
              
              {/* Button glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-vhs-red via-red-500 to-vhs-red opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Security note */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="font-mono text-muted-foreground text-sm mt-6"
            >
              Pagamento seguro • Arquivo protegido • Investigação confidencial
            </motion.p>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="evidence-card rounded-lg p-8 text-center relative">
            {/* Badge */}
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-evidence-gold text-carbon-black px-6 py-2 rounded-full font-typewriter font-bold text-sm"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              7 DIAS DE GARANTIA
            </motion.div>

            <div className="pt-4">
              <ShieldCheck className="w-16 h-16 text-evidence-gold mx-auto mb-6" />
              <h3 className="text-2xl font-typewriter text-aged-paper mb-4 font-bold">
                Garantia Incondicional
              </h3>
              <p className="font-mono text-muted-foreground leading-relaxed">
                Se você não ficar satisfeito com a investigação, reembolsamos 100% do valor — 
                sem burocracia, sem perguntas. Sua satisfação é nossa prioridade.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Urgency indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div 
            className="inline-block border-2 border-vhs-red px-6 py-3 rounded-lg"
            animate={{ 
              borderColor: ['hsl(var(--vhs-red))', 'hsl(var(--evidence-gold))', 'hsl(var(--vhs-red))']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="font-mono text-vhs-red font-bold">
              ⚠️ ARQUIVO CONFIDENCIAL • ACESSO LIMITADO
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;