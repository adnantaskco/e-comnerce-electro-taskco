"use client";

import { DataBRANDS } from "@/lib/data/LogoData";

export default function BrandLogos() {
  // Duplicate logos for seamless infinite scrolling
  const brands = [...DataBRANDS, ...DataBRANDS];

  return (
    <section className="w-full overflow-hidden py- bg-gradient-to-b from-transparent via-gray-50/40 to-transparent">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        {/* <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Trusted Brands
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Shop by Brand
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
        </div> */}

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  h-24
                  w-40
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-border/40
                  bg-background
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="
                    max-h-10
                    max-w-[80%]
                    object-contain
                    grayscale
                    opacity-60
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}