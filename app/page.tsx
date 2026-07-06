"use client"
import TopNavbar from "@/components/TopNavbar";
import Image from "next/image";
import MainNav from "../components/MainNavbar";
import HeroSection from "@/components/Herosection";
import BrandLogos from "@/components/log";
import FooterSection from "@/components/fotter";
import SeoDescriptionSection from "@/components/about";
import LimitedOffersSection from "@/components/limitedOffer";

import UsefulArticles from "@/components/artical";
import IphoneCard from "@/components/productcard/Mobilecard";
import KitechenCard from "@/components/productcard/kitechencard";
import BestsellerTabs from "@/components/tab";
import GamingCard from "@/components/productcard/GamingCard";

export default function Home() {
  return (
<>
<TopNavbar></TopNavbar>
<MainNav></MainNav>
<HeroSection></HeroSection>
<BrandLogos></BrandLogos>
<BestsellerTabs/>
{/* <ProductCard></ProductCard> */}
{/* <IphoneCard/> */}
<KitechenCard></KitechenCard>
<LimitedOffersSection></LimitedOffersSection>
<GamingCard></GamingCard>
<UsefulArticles></UsefulArticles>
<SeoDescriptionSection></SeoDescriptionSection>
<FooterSection></FooterSection>


</>
  );
}
