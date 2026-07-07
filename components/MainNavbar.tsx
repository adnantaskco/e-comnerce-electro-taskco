"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu, FiSearch, FiHeart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import MobileSidebar from "./MobileSidebar";
import { useCart } from "@/app/context/CartContext";
import { HoverCardDemo } from "./ui/hover";

export default function MainNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const {totalItems}=useCart();

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar
        open={mobileMenu}
        setOpen={setMobileMenu}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 md:px-16 py-3">

          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">

            {/* Left */}
            <div className="flex items-center gap-3">

              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() => setMobileMenu(true)}
                className="lg:hidden flex h-10 w-10 items-center  justify-center rounded-full hover:bg-primary transition"
              >
                <FiMenu size={22} /> 
              </button>

              {/* Logo */}
              <Link href="/">
                <img
                  src="https://taskco.io/assets/taskco.svg"
                  alt="Taskco"
                  className="h-3 sm:h-4 lg:h-6 w-auto"
                />
              </Link>


              <a href=""> <HoverCardDemo/> </a>

            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-12 rounded-full border border-primary/20 bg-background pl-6 pr-14 text-sm outline-none text-text-primary transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white hover:scale-105 transition"
                >
                  <FiSearch size={18} />
                </button>

              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-3">

              <Link
                href="/discount"
                className="hidden md:flex rounded-full border bg-background border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Discount
              </Link>

              <Link
                href="/login"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ring/10 transition"
              >
                <VscAccount size={22} />
              </Link>

              <Link
                href="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-ring/10 transition"
              >
                <FiHeart size={21} />

                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  0
                </span>
              </Link>

              <Link
                href="/cart"
                className="relative flex h-10 w-10 items-center justify-center   text-text-primary  transition hover:scale-105"
              >
                <FaCartShopping size={18} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-text-secondary">
                  {totalItems}
                </span>
              </Link>

            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 lg:hidden">

            <div className="relative">

              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-11 rounded-full border border-primary/20 bg-background pl-5 pr-12 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-text-secondary"
              >
                <FiSearch size={16} />
              </button>

            </div>

          </div>

        </div>
      </header>
    </>
  );
}