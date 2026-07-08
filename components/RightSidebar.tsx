"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";

// 1. Define your data structure
const hotDealsData = [
  {
    id: 1,
    name: "Audioengine A2+BT",
    dealText: "Only today, 25% discount",
    image: "https://m.media-amazon.com/images/I/51odD6JDkML.jpg",
    rating: 5,
    price: 3000,
  },
  {
    id: 2,
    name: "AirPods Pro 3",
    dealText: "Flash sale, 15% off",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoj_CzcJ1_oB3AUFtlgyFuxzaWqirPNJwkhgtgwAPAh_Z4y0rJ",
    rating: 5,
    price: 2490,
  }
];

const HotDealsSidebar = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Placeholder countdown state
  const [timeLeft, setTimeLeft] = useState({ hours: 184, minutes: 59, seconds: 24 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotDealsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotDealsData.length) % hotDealsData.length);
  };

  const activeItem = hotDealsData[currentIndex];

  return (
    <div className="lg:col-span-1 border border-ring/5 rounded-xl p-1 bg-background shadow-sm flex flex-col justify-between h-full relative group/slider">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5 text-primary font-bold text-base">
            <Flame size={18} className="fill-current text-destructive animate-pulse" />
            <h2>Hot Deals</h2>
          </div>
          {/* Tickers */}
          <div className="flex gap-2 text-sm font-mono font-bold p-2 border border-primary/20 ">
            <span className="bg-foreground/10 w-10 backdrop-blur-md border border-ring/20  shadow-lg rounded-sm text-black px-2 py-1">{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span className="bg-foreground/10 w-10 backdrop-blur-md border border-ring/20  shadow-lg rounded-sm text-black px-2 py-1">{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span className="bg-foreground/10 w-10 backdrop-blur-md border border-ting/20  shadow-lg rounded-sm text-black px-2 py-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Slider Window Container */}
        <div className="relative overflow-hidden border border-ring/10 rounded-xl p-4 bg-bacground/50 min-h-[320px] flex flex-col justify-between">
          
          {/* Slide Content */}
          <div className="text-center flex flex-col items-center flex-grow justify-between">
            <div>
              <span className="text-xs text-ring font-medium line-clamp-1">{activeItem.name}</span>
              <h3 className="text-xl sm:text:lg font-bold text-ring mt-0.5 mb-3">{activeItem.dealText}</h3>
            </div>
            
            {/* Image Wrapper */}
            <div className="w-full h-28 flex items-center justify-center my-2 overflow-hidden">
              <img 
                src={activeItem.image} 
                alt={activeItem.name} 
                className="object-contain max-h-full transition-transform duration-500 scale-100 hover:scale-105"
              />
            </div>

            <button className="mt-2 bg-primary text-text-secondary border border-ring/10 hover:bg-primary/50  text-xs font-bold px-5 py-1.5 rounded-full shadow-sm transition-all active:scale-95">
              Buy Now
            </button>
          </div>

          {/* Individual Item Footer Rating & Price */}
          <div className="mt-4 pt-3 border-t border-ring/10 flex items-center justify-between w-full">
            <div className="text-left">
              <p className="text-xs font-semibold text-ring line-clamp-1">{activeItem.name}</p>
              <div className="flex text-amber-400 text-[10px] mt-0.5">
                {Array.from({ length: activeItem.rating }).map((_, i) => "★")}
              </div>
            </div>
            <span className="text-sm font-bold text-ring">
              BDT {activeItem.price.toFixed(2)}
            </span>
          </div>

          {/* Navigation Controls (Visible on Hovering Container) */}
          {hotDealsData.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-background/90 border border-ring/20 text-gray-600 rounded-full flex items-center justify-center shadow-md hover:bg-background active:scale-90 transition-all opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-background/90 border border-ring/20 bordered-full flex items-center justify-center shadow-md hover:bg-background active:scale-90 transition-all opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Pagination Dots Indicator */}
      {hotDealsData.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {hotDealsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotDealsSidebar;