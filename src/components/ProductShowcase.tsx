import { useState, useEffect, useRef } from 'react';

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const slides = [
    '/lovable-uploads/00b09188-d93f-4500-83b1-d88a6fc7bfed.png',
    '/lovable-uploads/33436acd-c481-42bd-b437-e48cf4a29f7a.png',
    '/lovable-uploads/1bfb3859-4012-406f-b929-5eb0bb468af4.png',
    '/lovable-uploads/846bbf1d-4306-4374-b3de-f325701f7a4a.png'
  ];

  const showNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(showNextSlide, 8000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  return (
    <div 
      className="forgotten-carousel relative w-full max-w-[600px] mx-auto my-10 rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Conteúdo do produto ${index + 1}`}
          className={`forgotten-slide w-full h-auto block absolute top-0 left-0 opacity-0 transition-opacity duration-1000 rounded-xl ${
            index === currentIndex ? 'opacity-100 relative' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default ProductShowcase;