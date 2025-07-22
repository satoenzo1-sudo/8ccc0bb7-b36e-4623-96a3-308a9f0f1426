import { motion } from 'framer-motion';

const CaseHistorySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 vhs-noise opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-typewriter text-vhs-red mb-8">
            <span className="glitch" data-text="O que esconde o VHS 13?">
              O que esconde o VHS 13?
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="case-file rounded-lg p-8 md:p-12 text-center relative"
          >
            {/* Floating Confidential Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 stamp text-xs"
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
              EVIDÊNCIA
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 stamp text-xs opacity-60"
              animate={{ 
                rotate: [-12, -8, -15, -12],
                scale: [0.9, 1.1, 0.8, 0.9]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              ARQUIVADO
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-mono text-aged-paper leading-relaxed"
            >
              Entre <span className="text-vhs-red font-bold">1982 e 1985</span>, sete mulheres foram brutalmente assassinadas em 
              <span className="text-evidence-gold font-bold"> Red Ridge</span>. Um suspeito foi preso — e morreu pouco depois. 
              Mas uma nova vítima apareceu. O caso foi 
              <span 
                className="text-vhs-red font-bold glitch cursor-pointer" 
                data-text="enterrado"
              > 
                enterrado
              </span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="my-8 h-px bg-gradient-to-r from-transparent via-evidence-gold to-transparent"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-mono text-aged-paper leading-relaxed"
            >
              Décadas depois, um arquivo secreto rotulado como 
              <span 
                className="text-vhs-red font-bold px-2 py-1 border border-vhs-red mx-2 glitch" 
                data-text="VHS 13"
              >
                'VHS 13'
              </span> 
              reaparece, trazendo documentos não protocolados, fotos, transcrições e laudos omitidos pela polícia.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-2xl md:text-3xl font-serif-italic text-evidence-gold">
                Agora é você quem investiga.
              </p>
            </motion.div>

            {/* VHS Effect Lines */}
            <div className="absolute inset-0 vhs-scanlines opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseHistorySection;