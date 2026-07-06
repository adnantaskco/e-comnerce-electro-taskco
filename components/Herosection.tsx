"use client"
import React, { useState, useEffect } from 'react';

import HeroCarousel from './ui/carocelpart';
import HotDealsSidebar from './RightSidebar';

export default function HeroSection() {
  const categories = [
  {
    name: "Smartphones",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVuST7KHruVpUgM_twUAWdH3UCAylgEWz0KyeRR2AXp-ow6G9S",
  },
  {
    name: "Laptops, Tablets & PCs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QgzOcNrJS09f_xO1b5wEc94uC4jFXSUi9NwF3mGGWg&s=10",
  },
  {
    name: "PC Components",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWSbX1ZrJu8FqxDQRdS_nEj0DejvUelII0arKYcYZzw&s=10",
  },
  {
    name: "Gaming",
    image: "https://img.magnific.com/free-vector/cute-astronaut-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology_138676-13977.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "TV & Audio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ97V6E7HFdm71truiOtb9Tpyah5-k4EmC9L5oxtuKd8bcpsBU5sVXXnyL&s=10",
  },
  {
    name: "Home & Outdoor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKiszasQYC-3PyMtQFwqM0GiQBznIgPZHl18WOTxXHWy_ygFkyqcgPjyA&s=10",
  },
  {
    name: "Cameras",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtvd8fMT6kxNrhmR4iCg967NTW7Tw1HjcqxxmKtN6h2w&s=10",
  },
];



  return (
    <div className="container mx-auto px-4 py-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* --- LEFT SIDEBAR: CATEGORIES --- */}
        <div className="hidden md:block lg:col-span-1 rounded-2xl border border-ring/10 bg-background p-5 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-text-primary">
          Choose Your Favourite
        </h2>

        <ul className="space-y-0">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="group flex cursor-pointer items-center gap-4 rounded-xl p-1 transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center rounded-4xl justify-center rounded-xl bg-gray-100 group-hover:bg-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              <span className="text-md font-semibold text-text-primary group-hover:text-primary">
                {cat.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

        {/* --- CENTER: MAIN HERO BANNER --- */}
        
        <div className='  col-span-2'>
            <HeroCarousel></HeroCarousel>
        </div>

        {/* --- RIGHT SIDEBAR: HOT DEALS --- */}
        <div className="lg:col-span-1 border border-gray-200 rounded-lg p-2 bg-white shadow-sm flex flex-col justify-between">

              <HotDealsSidebar></HotDealsSidebar>

        </div>

      </div>
    </div>
  );
}