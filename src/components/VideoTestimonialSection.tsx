import { motion } from 'framer-motion';

const VideoTestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-typewriter text-evidence-gold mb-8">
            Veja o que nossos detetives dizem:
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block stamp text-sm mb-8"
          >
            DEPOIMENTO EM VÍDEO
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="evidence-card p-8 rounded-lg relative">
            {/* VHS scanlines */}
            <div className="absolute inset-0 vhs-scanlines opacity-5 rounded-lg"></div>
            
            {/* Confidential watermark */}
            <motion.div 
              className="absolute top-4 right-4 stamp text-xs opacity-30"
              animate={{ 
                rotate: [12, 15, 10, 12],
                scale: [0.8, 1, 0.9, 0.8]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CONFIDENCIAL
            </motion.div>

            {/* Video embed */}
            <div className="aspect-video relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/FI7qlIjCgsM"
              title="Depoimento - Red Ridge Case"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            </div>

            {/* Video description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="font-mono text-aged-paper text-lg">
                "Uma experiência única que nos deixou vidrados por horas..."
              </p>
              <p className="font-typewriter text-evidence-gold mt-2">
                - Ana & Carlos, Casal de Investigadores
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA after video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px hsl(var(--vhs-red) / 0.8), 0 0 80px hsl(var(--vhs-red) / 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-investigation px-10 py-4 text-xl font-bold rounded-lg relative overflow-hidden"
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              🎯 Quero investigar agora
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;