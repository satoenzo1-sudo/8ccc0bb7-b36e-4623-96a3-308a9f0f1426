const HorizontalScrollZoom = () => {
  const slides = [
    '/lovable-uploads/541e2071-31fc-4a94-b096-95b7fb52fa36.png',
    '/lovable-uploads/23cda1bf-36d2-43aa-8cac-757bfa7f62d1.png',
    '/lovable-uploads/9b9ec543-349e-446a-88eb-5dcb4af29b0d.png',
    '/lovable-uploads/d6b87898-f620-451c-b333-1d28bbb9fea3.png'
  ];

  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex gap-4 px-4 w-max">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollZoom;
