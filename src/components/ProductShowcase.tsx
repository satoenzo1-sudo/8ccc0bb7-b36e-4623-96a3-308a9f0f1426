import { useState } from 'react';

const ZoomGrid = () => {
  const slides = [
    '/lovable-uploads/zoomslide1.png',
    '/lovable-uploads/zoomslide2.png',
    '/lovable-uploads/zoomslide3.png',
    '/lovable-uploads/zoomslide4.png',
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 16, // Espaçamento entre imagens
        padding: 20,
        overflowX: 'auto', // Scroll horizontal
        scrollbarWidth: 'none', // Remove scrollbar no Firefox
        msOverflowStyle: 'none', // Remove scrollbar no IE
      }}
      className="hide-scrollbar" // Para esconder no Chrome com CSS extra
    >
      {slides.map((src, i) => (
        <div
          key={i}
          style={{
            flex: '0 0 auto', // Impede quebra de linha
            width: 200,
            height: 260,
            borderRadius: 12,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => handleClick(i)}
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 12,
              transition: 'transform 0.3s ease',
              transform: activeIndex === i ? 'scale(1.25)' : 'scale(1)',
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default ZoomGrid;
