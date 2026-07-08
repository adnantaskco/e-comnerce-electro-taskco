"use client"
import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-ring  border-t  pt-16 pb-6 relative">
      <div className="container mx-auto px-4 md:px-16">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-2xl font-black text-text-primary">
             <img src="https://taskco.io/assets/taskco.svg" alt="" />
            </div>
            
            {/* Address & Contact */}
            <div className="space-y-3 pt-2 text-sm">
              <div>
                <p className="text-xs font-bold text-ring uppercase tracking-wider mb-0.5">Address:</p>
                <p className="font-semibold text-ring border-b border-transparent hover:border-ring/50 inline cursor-pointer">
                  1060 Cudahy Pl, San Diego, CA 92110
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-ring/50 uppercase tracking-wider mb-0.5">Contact:</p>
                <p className="font-semibold text-ring border-b border-transparent hover:border-gray-800 cursor-pointer block w-fit">
                  (686) 492-1041
                </p>
                <p className="font-semibold text-ring border-b border-transparent hover:border-gray-800 cursor-pointer block w-fit">
                  xtemos.mail@mail.com
                </p>
              </div>
            </div>

          
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-base font-bold text-text-primary mb-4">Useful Links</h3>
            <ul className="space-y-2.5 text-sm font-semibold text-ring">
              {['About Us', 'Contact Us', 'Blog', 'FAQs'].map((link) => (
                <li key={link} className="hover:text-primary cursor-pointer transition-colors w-fit">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Categories */}
          <div>
            <h3 className="text-base font-bold text-text-primary mb-4">Popular Categories</h3>
            <ul className="space-y-2.5 text-sm font-semibold text-ring">
              {['Smartphones', 'Gaming', 'Appliances', 'Home & Outdoor', 'PC Components', 'Cameras'].map((cat) => (
                <li key={cat} className="hover:text-primary cursor-pointer transition-colors w-fit">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Mailing List Card */}
          <div className="bg-primary text-text-secondary p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-primary/10 min-h-[220px]">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Join Our Mailing List</h3>
              <p className="text-primary/10 text-xs font-medium leading-relaxed">
                Receive any latest updates and promotions.
              </p>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex bg-background rounded-full p-1 shadow-sm items-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent text-ring placeholder-ring text-xs px-4 py-2 flex-grow focus:outline-none w-full"
                />
                <button className="bg-primary hover:bg-primary/50 text-text-secoundary text-xs font-bold px-5 py-2.5 rounded-full transition-all shrink-0">
                  Sign Up
                </button>
              </div>
              <p className="text-[10px] text-primary/20 font-medium">
                Will be used in accordance with our <span className="underline cursor-pointer hover:text-text-secondary">Privacy Policy</span>
              </p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-ring/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-ring">
          <div>
            WoodMart theme © 2026 WooCommerce Themes.
          </div>
          
          {/* Payment Badges (Clean placeholders mapped out like the screen) */}
          <div className="flex items-center gap-4 bg-background/60 px-4 py-1.5 rounded-full border border-ring/20">
            <span className="text-primary italic font-black tracking-tighter text-sm">VISA</span>
            <div className="flex -space-x-1 items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-destructive opacity-90 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500 opacity-90 inline-block"></span>
            </div>
            <span className="text-[#635bff] font-bold tracking-wide lowercase text-xs">stripe</span>
            <span className="text-primary font-bold text-[10px] tracking-wider uppercase">PayPal</span>
            <span className="text-text-primary font-semibold text-xs tracking-tight"> Pay</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-background hover:bg-background/20 text-pring p-2.5 rounded-full shadow-md border border-gray-100 transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}