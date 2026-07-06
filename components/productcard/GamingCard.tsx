"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DataGamingProducts } from "@/lib/data/GamingData";
import {
  FaAnglesRight,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaEye,
  FaStar,
} from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function GamingCard() {
  const [hovered, setHovered] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-ring/5 py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="bg-background p-4 sm:p-6 md:p-10 rounded-3xl shadow-sm">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-text-primary">
             Popular in Gaming
            </h2>
            <button className="flex items-center text-muted-foreground gap-1.5 text-xs md:text-sm font-medium hover:text-primary transition-colors">
              View All
              <FaAnglesRight size={12} />
            </button>
          </div>

          {/* Slider Container */}
          <div className="relative group/slider">
            {/* Left Button */}
            <button
              onClick={scrollPrev}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-background hover:bg-muted shadow-md border border-border/50 rounded-full w-9 h-9 md:w-11 md:h-11 hidden md:flex items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100"
              aria-label="Previous Slide"
            >
              <FaChevronLeft size={14} />
            </button>

            {/* Right Button */}
            <button
              onClick={scrollNext}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-background hover:bg-muted shadow-md border border-border/50 rounded-full w-9 h-9 md:w-11 md:h-11 hidden md:flex items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100"
              aria-label="Next Slide"
            >
              <FaChevronRight size={14} />
            </button>

            {/* Carousel Viewport Wrapper */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex gap-4 md:gap-6">
                {DataGamingProducts.map((item) => {
                  const discountPercentage = item.has_discount 
                    ? Math.round(((item.retail_price - item.sale_price) / item.retail_price) * 100) 
                    : 0;

                  const isCurrentHovered = hovered === item.id;

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      onTouchStart={() => setHovered(item.id)}
                      className="flex-none w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 group flex flex-col h-auto select-none"
                    >
                      {/* IMAGE BOX */}
                      <div className="relative bg-muted/30 aspect-square w-full flex items-center justify-center p-3 md:p-4 overflow-hidden select-none">
                        {/* Primary Image */}
                        <img
                          src={item.images?.[0]}
                          alt={item.name}
                          className={`object-contain w-full h-full max-h-[140px] sm:max-h-[220px] transition-all duration-700 ease-out transform group-hover:scale-105 ${
                            isCurrentHovered ? "opacity-0" : "opacity-100"
                          }`}
                        />
                        {/* Hover Image */}
                        {item.images?.[1] && (
                          <img
                            src={item.images[1]}
                            alt={`${item.name} alternative`}
                            className={`absolute inset-0 m-auto object-contain w-full h-full max-h-[140px] sm:max-h-[220px] transition-all duration-700 ease-out transform ${
                              isCurrentHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                            }`}
                          />
                        )}

                        {/* DISCOUNT BADGE */}
                        {item.has_discount && discountPercentage > 0 && (
                          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-ring/10 text-destructive-foreground text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-md shadow-sm z-10 backdrop-blur-sm bg-opacity-90">
                            -{discountPercentage}%
                          </div>
                        )}

                        {/* ACTION BUTTONS */}
                        <div
                          className={`
                            absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 px-2.5 py-1.5 rounded-xl bg-background/90 backdrop-blur-md shadow-lg border border-border/40 transition-all duration-300 transform
                            ${isCurrentHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
                            md:opacity-0 md:translate-y-4 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto
                          `}
                        >
                          <button 
                            onTouchStart={(e) => e.stopPropagation()} 
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-95 transition-all" 
                            title="Add to Wishlist"
                          >
                            <FaHeart className="w-3.5 h-3.5 pointer-events-none" />
                          </button>

                          <div className="w-[1px] h-3 bg-border" />

                          <button 
                            onTouchStart={(e) => e.stopPropagation()} 
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 active:scale-95 transition-all" 
                            title="Quick View"
                          >
                            <FaEye className="w-3.5 h-3.5 pointer-events-none" />
                          </button>

                          <div className="w-[1px] h-3 bg-border" />

                          <button 
                            onTouchStart={(e) => e.stopPropagation()} 
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 active:scale-95 transition-all" 
                            title="Add to Cart"
                          >
                            <FaShoppingCart className="w-3.5 h-3.5 pointer-events-none" />
                          </button>
                        </div>
                      </div>

                      {/* DETAILS/CONTENT BOX */}
                      <Link href={`/products/${item.slug || item.id}`} className="p-3 md:p-4 flex flex-col flex-grow group/link">
                        <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase font-medium">{item.brand}</p>
                        <h2 className="text-xs md:text-sm text-card-foreground font-semibold mt-0.5 group-hover/link:text-primary transition-colors line-clamp-2 min-h-[2rem]">
                          {item.name}
                        </h2>

                        {/* RATING */}
                        <div className="flex items-center gap-1 ">
                          <div className="flex text-amber-400 text-[10px] md:text-xs">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < Math.floor(item.review) ? "fill-current" : "text-muted/40"} 
                              />
                            ))}
                          </div>
                          <span className="text-[10px] md:text-xs text-muted-foreground font-medium">({item.review})</span>
                        </div>

                        {/* PRICING */}
                        <div className="flex flex-wrap items-baseline gap-1 md:gap-2 mt-auto pt-1">
                          <span className="text-sm md:text-base font-bold tracking-tight text-primary">
                            BDT {item.sale_price.toLocaleString()}
                          </span>
                          {item.has_discount && (
                            <span className="line-through text-muted-foreground text-[10px] md:text-xs font-normal">
                              BDT {item.retail_price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Scroll Hint */}
            <div className="flex justify-center mt-4 text-[11px] md:text-xs text-muted-foreground select-none md:hidden">
              ← Swipe to explore →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}