import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon-black/90 backdrop-blur-sm border-b border-evidence-gold/20">
      <div className="container mx-auto px-4 py-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <img 
            src="/lovable-uploads/85d76c86-2d00-4213-8bd2-7dbbeb962693.png" 
            alt="The Forgotten VHS Logo" 
            className="h-12 w-auto"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;