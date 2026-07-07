"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
import Link from "next/link";
import { DatapcComponentsProducts } from "@/lib/data/pc&component";
import { useCart } from "@/app/context/CartContext";

const PcComponent = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { addToCart } = useCart();

  return (
    <section className="w-full bg-background">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {DatapcComponentsProducts.map((item) => {
            // Calculate discount percentage dynamically if applicable
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
                className="bg-ring/2 text-card-foreground rounded-2xl overflow-hidden border border-border/60 hover:shadow-ring  transition-all duration-500 hover:-translate-y-1.5 group flex flex-col h-full select-none"
              >
                {/* IMAGE BOX */}
                <div className="relative bg-muted/30 aspect-square w-full flex items-center justify-center p-4 overflow-hidden select-none">
                  {/* Primary Image */}
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className={`object-contain w-full h-full max-h-[160px] sm:max-h-[240px] transition-all duration-700 ease-out transform group-hover:scale-105 ${
                      isCurrentHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* Hover Image */}
                  {item.images[1] && (
                    <img
                      src={item.images[1]}
                      alt={`${item.name} alternative`}
                      className={`absolute inset-0 m-auto object-contain w-full h-full max-h-[160px] sm:max-h-[240px] transition-all duration-700 ease-out transform ${
                        isCurrentHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                      }`}
                    />
                  )}

                  {/* DISCOUNT BADGE */}
                  {item.has_discount && discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-ring/10 text-text-primary text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg shadow-sm z-10 backdrop-blur-sm bg-opacity-90">
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
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                         price: Number(item.sale_price),
                        image: item.images[0],
                      })
                    }
                      onTouchStart={(e) => e.stopPropagation()}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 active:scale-95 transition-all" 
                      title="Add to Cart"
                    >
                      <FaShoppingCart className="w-3.5 h-3.5 pointer-events-none" />
                    </button>
                  </div>
                </div>

                {/* DETAILS/CONTENT BOX */}
                <Link href={`/products/${item.id}`} className="p-3 md:p-4 flex flex-col flex-grow group/link">
                  <p className="text-[10px] md:text-xs text-text-primary tracking-wider uppercase font-medium">{item.brand}</p>
                  <h2 className="text-xs md:text-sm text-text-primary font-semibold mt-0.5 group-hover/link:text-primary transition-colors line-clamp-2 min-h-[2rem]">
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
                    <span className="text-[10px] md:text-xs text-ring font-medium">({item.review})</span>
                  </div>

                  {/* PRICING */}
                  <div className="flex flex-wrap items-baseline gap-1 md:gap-2 mt-auto pt-1">
                    <span className="text-sm md:text-base font-bold tracking-tight text-primary">
                      BDT {item.sale_price.toLocaleString()}
                    </span>
                    {item.has_discount && (
                      <span className="line-through text-ring text-[10px] md:text-xs font-normal">
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
    </section>
  );
};

export default PcComponent;