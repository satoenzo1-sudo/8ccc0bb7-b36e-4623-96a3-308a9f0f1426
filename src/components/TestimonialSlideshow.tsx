import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/lovable-uploads/541e2071-31fc-4a94-b096-95b7fb52fa36.png',
    '/lovable-uploads/23cda1bf-36d2-43aa-8cac-757bfa7f62d1.png',
    '/lovable-uploads/9b9ec543-349e-446a-88eb-5dcb4af29b0d.png',
    '/lovable-uploads/d6b87898-f620-451c-b333-1d28bbb9fea3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative max-w-md mx-auto overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img 
            src={slides[currentSlide]} 
            alt={`Depoimento ${currentSlide + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-evidence-gold' : 'bg-aged-paper/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlideshow;