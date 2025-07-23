import { useState } from 'react';

const ZoomGrid = () => {
  const slides = [
    '/lovable-uploads/zoomslide1.png',
    '/lovable-uploads/zoomslide2.png',
    '/lovable-uploads/zoomslide3.png',
    '/lovable-uploads/zoomslide4.png',
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 12, // espaço lateral entre colunas
        rowGap: 32, // espaço vertical entre linhas
        padding: 40,
        justifyItems: 'center',
        alignItems: 'center',
        overflow: 'visible',
        width: '100%',
      }}
    >
      {slides.map((src, i) => (
        <div
          key={i}
          style={{
            width: 280,
            height: 360,
            borderRadius: 12,
            overflow: 'visible',
            position: 'relative',
            transition: 'transform 0.3s ease',
            zIndex: hoveredIndex === i ? 10 : 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
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
              transform: hoveredIndex === i ? 'scale(1.25)' : 'scale(1)',
              pointerEvents: 'none',
              userSelect: 'none',
              position: 'relative',
              zIndex: hoveredIndex === i ? 10 : 1,
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default ZoomGrid;
