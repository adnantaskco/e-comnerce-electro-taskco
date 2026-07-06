import React from 'react';

function TopNavbar() {
  return (
    <section className="hidden md:block bg-muted/40  backdrop-blur-sm ">
      <div className="container mx-auto px-4 md:px-16 border-b border-border/50">
        <div className="flex flex-col sm:flex-row items-center justify-between min-h-[40px] py-2 sm:py-0 gap-2 sm:gap-0">
          
          {/* Announcement/Promo Badging */}
          <div className="flex items-center gap-2 text-muted-foreground font-medium text-xs tracking-wider uppercase">
           
            <p>Free shipping for all orders of $1,200+</p>
          </div>

          {/* Quick Links Navigation */}
          <nav className="flex items-center gap-4 md:gap-6 text-muted-foreground text-xs md:text-sm font-medium">
            <a 
              href="#" 
              className="py-1 sm:py-3 hover:text-primary transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full hidden sm:block" />
            </a>
            <a 
              href="#" 
              className="py-1 sm:py-3 hover:text-primary transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full hidden sm:block" />
            </a>
            <a 
              href="#" 
              className="py-1 sm:py-3 hover:text-primary transition-colors duration-200 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full hidden sm:block" />
            </a>
            <a 
              href="#" 
              className="py-1 sm:py-3 hover:text-primary transition-colors duration-200 relative group"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full hidden sm:block" />
            </a>
          </nav>

        </div>
      </div>
    </section>
  );
}

export default TopNavbar;