import { motion } from 'framer-motion';
import { FileX, Zap, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden vhs-noise pt-20">
      {/* Background VHS Static Effect */}
      <div className="absolute inset-0 vhs-scanlines opacity-40"></div>
      
      {/* Floating Confidential Stamps */}
      <motion.div 
        className="absolute top-20 left-10 stamp text-xs opacity-30"
        animate={{ 
          rotate: [-15, -12, -18, -15],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        CONFIDENCIAL
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 right-12 stamp text-xs opacity-20"
        animate={{ 
          rotate: [12, 8, 15, 12],
          scale: [0.8, 1.2, 0.9, 0.8]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        CASO FECHADO
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-typewriter font-bold text-aged-paper mb-4">
            <span 
              className="glitch block text-vhs-red" 
              data-text="The Forgotten VHS"
            >
              The Forgotten VHS
            </span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-typewriter text-evidence-gold mb-2"
          >
            Caso Red Ridge
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block px-6 py-2 border-2 border-vhs-red text-vhs-red font-mono font-bold text-xl tracking-widest"
          >
            VHS 13
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl font-serif-italic text-aged-paper max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          "Entre no arquivo proibido. Resolva o mistério que a polícia tentou enterrar entre 1982 e 1985."
        </motion.p>

        {/* Quick Highlight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="case-file rounded-lg p-8 max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-typewriter text-evidence-gold mb-6">
            O jogo viral no TikTok para quem ama mistério antigo.
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Zap className="w-8 h-8 text-vhs-red mb-3" />
              <p className="font-mono text-aged-paper">Dificuldade: Médio para Difícil</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Download className="w-8 h-8 text-vhs-red mb-3" />
              <p className="font-mono text-aged-paper">Entrega digital instantânea</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <FileX className="w-8 h-8 text-vhs-red mb-3" />
              <p className="font-mono text-aged-paper">Mistério profundo sem spoilers</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-investigation px-12 py-4 text-xl font-bold rounded-lg"
          onClick={() => {
            window.open('https://pay.kiwify.com.br/0Ja4ags', '_blank');
          }}
        >
          QUERO INVESTIGAR AGORA
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-evidence-gold rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-evidence-gold rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;