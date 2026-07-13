"use client";

import HeroSection from "@/components/Herosection";
import BrandLogos from "@/components/log";
import SeoDescriptionSection from "@/components/about";
import LimitedOffersSection from "@/components/limitedOffer";
import UsefulArticles from "@/components/artical";
import KitechenCard from "@/components/productcard/kitechencard";
import BestsellerTabs from "@/components/tab";
import GamingCard from "@/components/productcard/GamingCard";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <BestsellerTabs />
      <KitechenCard />
      <LimitedOffersSection />
      <GamingCard />
      <UsefulArticles />
      <SeoDescriptionSection />
    </>
  );
}