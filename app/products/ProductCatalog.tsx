"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaCartArrowDown, FaEye, FaHeart, FaSliders, FaStar, FaXmark } from "react-icons/fa6";
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation"; 
import { DataALLProducts } from "@/lib/data/AllProducts"; 
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: string | number;
  name: string;
  brand: string;
  image: string;
  sale_price: number;
  retail_price: number;
  has_variants?: boolean;
}

// Fixed classification logic to map products into your store's 5 primary categories
const getCategory = (product: Product): string => {
  const name = product.name.toLowerCase();
  const brand = product.brand.toLowerCase();
  
  if (
    name.includes('phone') || 
    name.includes('iphone') || 
    name.includes('galaxy s') || 
    name.includes('pixel') || 
    name.includes('xperia')
  ) return 'Smartphones';
  
  if (
    name.includes('playstation') || 
    name.includes('xbox') || 
    name.includes('nintendo') || 
    name.includes('switch') || 
    name.includes('g pro x') || 
    name.includes('blackwidow') || 
    name.includes('fc 25') ||
    name.includes('gta') || 
    name.includes('grand theft') || 
    name.includes('minecraft') || 
    name.includes('call of duty') || 
    name.includes('cyberpunk') || 
    brand.includes('ea sports') || 
    brand.includes('rockstar') || 
    brand.includes('mojang') || 
    brand.includes('activision') || 
    brand.includes('cd projekt')
  ) return 'Gaming';
  
  if (
    name.includes('fryer') || 
    name.includes('microwave') || 
    name.includes('refrigerator') || 
    name.includes('dishwasher') || 
    name.includes('mixer') || 
    name.includes('blender') || 
    name.includes('cooker') || 
    name.includes('kettle') || 
    name.includes('espresso') || 
    name.includes('cooktop')
  ) return 'Kitchen Application';
  
  if (
    name.includes('earbuds') || 
    name.includes('earphones') || 
    name.includes('headphone') || 
    name.includes('buds') || 
    name.includes('audio') ||
    brand.includes('sony') && name.includes('wh')
  ) return 'Headphones';
  
  // Default fallback for computing, components, monitors, and laptops
  return 'Laptop';
};

const productsWithCategories = DataALLProducts.map(p => ({
  ...p,
  category: getCategory(p as unknown as Product)
}));

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter(); 

  // Core Config Constants
  const prices = productsWithCategories.map(p => p.sale_price);
  const maxProductPrice = Math.max(...prices, 0);
  const minProductPrice = Math.min(...prices, 0);

  const uniqueCategories = Array.from(new Set(productsWithCategories.map(p => p.category)));
  const uniqueBrands = Array.from(new Set(productsWithCategories.map(p => p.brand)));

  // Multi-Select & Sorting States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [hasVariantsOnly, setHasVariantsOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Parse URL parameters safely on mount/update
  useEffect(() => {
    const catsParam = searchParams.get('categories');
    setSelectedCategories(catsParam ? catsParam.split(',') : []);

    const brandsParam = searchParams.get('brands');
    setSelectedBrands(brandsParam ? brandsParam.split(',') : []);

    const priceParam = searchParams.get('maxPrice');
    if (priceParam) setMaxPrice(Number(priceParam));

    setHasVariantsOnly(searchParams.get('variants') === 'true');
    setSortBy(searchParams.get('sortBy') || 'default');
  }, [searchParams]);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  // Sync state values cleanly into search params
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategories.length > 0) {
      params.set('categories', selectedCategories.join(','));
    } else {
      params.delete('categories');
    }

    if (selectedBrands.length > 0) {
      params.set('brands', selectedBrands.join(','));
    } else {
      params.delete('brands');
    }

    if (maxPrice < maxProductPrice) {
      params.set('maxPrice', maxPrice.toString());
    } else {
      params.delete('maxPrice');
    }

    if (hasVariantsOnly) {
      params.set('variants', 'true');
    } else {
      params.delete('variants');
    }

    if (sortBy !== 'default') {
      params.set('sortBy', sortBy);
    } else {
      params.delete('sortBy');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }, [selectedCategories, selectedBrands, maxPrice, hasVariantsOnly, sortBy, maxProductPrice, router, searchParams]);

  // Multi-Select Toggle Handlers
  const handleToggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleToggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMaxPrice(maxProductPrice);
    setHasVariantsOnly(false);
    setSortBy('default');
  };

  // Comprehensive Filter & Sort Logic Processing Array
  const filteredProducts = useMemo(() => {
    let result = productsWithCategories.filter(product => {
      if (searchQuery) {
        const matchesName = product.name?.toLowerCase().includes(searchQuery);
        const matchesBrand = product.brand?.toLowerCase().includes(searchQuery);
        if (!matchesName && !matchesBrand) return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (product.sale_price > maxPrice) return false;
      if (hasVariantsOnly && !product.has_variants) return false;
      
      return true;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.sale_price - b.sale_price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.sale_price - a.sale_price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
   
    return result;
  }, [selectedCategories, selectedBrands, maxPrice, hasVariantsOnly, searchQuery, sortBy]);
   const [hovered, setHovered] = useState<number | null>(null);


  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-tight text-text-primary">Filters</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleReset} 
            className="text-sm font-semibold text-destructive hover:text-destructive/50 transition"
          >
            Reset All
          </button>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-ring hover:text-text-primary p-1">
            <FaXmark className="text-xl text-text-primary" />
          </button>
        </div>
      </div>

      {/* Sorting Control */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Sort By</h3>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-background border border-sidebar-ring rounded-xl p-2.5 text-sm text-text-primary focus:ring-2 focus:ring-primary/40 focus:outline-none cursor-pointer"
        >
          <option value="default">Default Popularity</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Alphabetical (A-Z)</option>
        </select>
      </div>

      {/* Upgraded Multi-Select Categories Section */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Categories</h3>
        <div className="space-y-2">
          {uniqueCategories.map(cat => (
            <label key={cat} className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-text-primary transition">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(cat)} 
                onChange={() => handleToggleCategory(cat)}
                className="h-4 w-4 rounded border-sidebar-ring text-primary focus:ring-primary/50 mr-3 cursor-pointer"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Upgraded Multi-Select Brands Section */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Brands</h3>
        <div className="max-h-48 overflow-y-auto pr-2 space-y-2 scrollbar-thin border border-sidebar-ring/30 p-2 rounded-xl bg-ring/5">
          {uniqueBrands.map(brand => (
            <label key={brand} className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-text-primary transition">
              <input 
                type="checkbox" 
                checked={selectedBrands.includes(brand)} 
                onChange={() => handleToggleBrand(brand)}
                className="h-4 w-4 rounded border-sidebar-ring text-primary focus:ring-primary/50 mr-3 cursor-pointer"
              />
              {brand || "Generic"}
            </label>
          ))}
        </div>
      </div>

      {/* Price Slider Section */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ring">Max Price</h3>
          <span className="text-base font-bold text-primary">৳{maxPrice.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min={minProductPrice} 
          max={maxProductPrice} 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-ring/10 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs font-semibold text-ring mt-2">
          <span>৳{minProductPrice.toLocaleString()}</span>
          <span>৳{maxProductPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Specifications Control Checkbox */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Specifications</h3>
        <label className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-text-primary transition">
          <input 
            type="checkbox" 
            checked={hasVariantsOnly} 
            onChange={(e) => setHasVariantsOnly(e.target.checked)}
            className="h-4 w-4 rounded border-sidebar-ring text-primary focus:ring-primary/60 mr-3 cursor-pointer"
          />
          Multiple Variants
        </label>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background antialiased text-ring w-full">
      <div className="container mx-auto px-4 md:px-16 flex relative gap-8 sm:py-5 md:py-10">
        
        {/* DESKTOP FILTER SIDEBAR CONTAINER */}
        <aside className="w-64 bg-background p-6 border border-sidebar-ring rounded-2xl sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hidden md:block select-none flex-shrink-0 shadow-sm scrollbar-none">
          <FilterContent />
        </aside>

        {/* MOBILE DRAWER FILTER CONTAINER */}
        <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div onClick={() => setIsMobileOpen(false)} className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-background p-6 shadow-2xl overflow-y-auto transition-transform duration-300 ease-out transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <FilterContent />
          </div>
        </div>

        {/* PRODUCT INVENTORY MAIN CONTAINER GRID */}
        <section className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">Product Catalog</h1>
              {searchQuery && (
                <p className="text-sm text-primary font-medium">
                  Filtered by query: <span className="italic font-bold">"{searchQuery}"</span>
                </p>
              )}
              <p className="text-sm font-medium text-ring mt-1">Showing {filteredProducts.length} items available</p>
            </div>
            
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden flex items-center gap-2 bg-foreground text-text-secondary px-4 py-2.5 rounded-full font-semibold text-sm active:scale-95 shadow-md transition"
            >
              <FaSliders className="text-xs" />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {filteredProducts.map((item) => {
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
                className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 group flex flex-col h-full select-none"
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
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-ring/10 text-destructive-foreground text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg shadow-sm z-10 backdrop-blur-sm bg-opacity-90">
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

          {/* Empty Fallback Screen Result */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-background border border-dashed border-sidebar-ring rounded-2xl mt-4">
              <p className="text-ring font-semibold text-base">No products matched your current filtering targets.</p>
              <button 
                onClick={handleReset} 
                className="mt-3 text-sm font-bold text-primary hover:text-primary/70 underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}