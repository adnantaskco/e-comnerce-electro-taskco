import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 'surface',
    title: 'Meet the new Surface laptop',
    subtitle: 'Gorgeous at every angle',
    buttonText: 'Buy Now',
    bgColor: 'bg-gray-100',
    image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/surface-laptop-8-thumbnail1.png', // Replace with your laptop image asset
    label: 'Surface laptop'
  },
  {
    id: 'galaxy',
    title: 'Galaxy Fold7 | Flip7',
    subtitle: 'Unlock Ultra capabilities',
    buttonText: 'Buy Now',
    bgColor: 'bg-[#eef2f7]',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GcBE_GU9wABPsxcjgyM46bhwlGSBsNmBh4VXO395Zg&s=10', // Replace with your phone image asset
    label: 'Galaxy Fold7 | Flip7'
  },
  {
    id: 'meta',
    title: 'Unwrap mixed reality with Meta Quest 3',
    subtitle: 'Step into new worlds',
    buttonText: 'Buy Now',
    bgColor: 'bg-blue-50',
    image: 'https://ls6iibytsc.eu.scalesta-cdn.com/kliauvgCQFE5gEsnD8Nxa4oka0Q=/filters:format(webp):fill(fff):quality(90)/www.gstoreq8.com/images/detailed/221/565.jpg',
    label: 'Meta Quest 3'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic 2-second rotation
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl group">
      {/* Main Slides Wrapper */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-[450px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`w-full flex-shrink-0 ${slide.bgColor} p-8 flex flex-col justify-between items-center text-center relative`}
          >
            {/* Header Typography */}
            <div className="mt-6 z-10 max-w-md">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-gray-500 mb-5 font-medium">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all shadow-sm">
                {slide.buttonText}
              </button>
            </div>

            {/* Centered Dynamic Product Showcase Image */}
            <div className="w-72 h-52 flex items-center justify-center mb-12">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-500 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Manual Left/Right Arrow Navigation Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronRight size={20} />
      </button>

      {/* Navigation Links Layer */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-xs font-semibold text-gray-400 z-10 bg-gradient-to-t from-white/10 to-transparent pt-4">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`pb-1 transition-all border-b-2 cursor-pointer ${
              currentIndex === index 
                ? 'text-gray-900 border-blue-600 font-bold' 
                : 'border-transparent hover:text-gray-700'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}