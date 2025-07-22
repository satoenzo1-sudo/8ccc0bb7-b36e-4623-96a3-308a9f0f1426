import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-typewriter text-vhs-red font-bold mb-2">
              The Forgotten VHS
            </h3>
            <p className="font-mono text-muted-foreground text-sm">
              Caso Red Ridge • VHS 13
            </p>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            <motion.a 
              href="#" 
              className="font-mono text-evidence-gold hover:text-aged-paper transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Termos de Uso
            </motion.a>
            <motion.a 
              href="#" 
              className="font-mono text-evidence-gold hover:text-aged-paper transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Política de Privacidade
            </motion.a>
            <motion.a 
              href="#" 
              className="font-mono text-evidence-gold hover:text-aged-paper transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Contato
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <p className="font-mono text-muted-foreground text-sm">
              Copyright © 2025 The Forgotten VHS – Todos os direitos reservados.
            </p>
            <motion.p 
              className="font-mono text-muted-foreground text-xs mt-2 opacity-60"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "A verdade está nas evidências..."
            </motion.p>
          </motion.div>

          {/* VHS scanlines effect */}
          <div className="absolute inset-0 vhs-scanlines opacity-5"></div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;