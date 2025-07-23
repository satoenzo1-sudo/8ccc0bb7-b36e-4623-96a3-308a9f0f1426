import { useRef } from 'react';

const TestimonialCarouselNovo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    '/lovable-uploads/541e2071-31fc-4a94-b096-95b7fb52fa36.png',
    '/lovable-uploads/23cda1bf-36d2-43aa-8cac-757bfa7f62d1.png',
    '/lovable-uploads/9b9ec543-349e-446a-88eb-5dcb4af29b0d.png',
    '/lovable-uploads/d6b87898-f620-451c-b333-1d28bbb9fea3.png'
  ];

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="overflow-hidden w-full max-w-[1200px] mx-auto my-10">
      <div
        ref={containerRef}
        className="flex gap-6 animate-marquee"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...slides, ...slides].map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Depoimento ${index + 1}`}
            className="w-60 h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarouselNovo;
