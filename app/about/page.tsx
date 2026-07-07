"use client"
import React from 'react';
import { 
  Smartphone, 
  Gamepad2, 
  ChefHat, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  Headphones,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'; // Make sure to run: npm install lucide-react

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
            Discover Taskco Tech
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            Welcome to the Future of Tech & Home Living
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At Taskco Tech, we believe that technology should seamlessly integrate into your life, making every day smarter, easier, and endlessly more exciting.
          </p>
        </div>
      </section>

      {/* Narrative Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100 text-center sm:text-left">
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Whether you are upgrading your mobile setup, expanding your immersive gaming realm, or reimagining your kitchen with smart appliances, we are here to connect you with the world's most innovative brands. 
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the latest flagship smartphones to high-performance gaming gear and cutting-edge home essentials, we curate a premium selection of electronics tailored entirely to power your modern lifestyle.
          </p>
        </div>
      </section>

      {/* Core Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Product Collections
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Electronics */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Electronics</h3>
            <p className="text-slate-600 leading-relaxed">
              Stay beautifully connected with the newest smartphones, wearable tech, and premium audio accessories designed for high-paced life on the go.
            </p>
          </div>

          {/* Ultimate Gaming Gear */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ultimate Gaming Gear</h3>
            <p className="text-slate-600 leading-relaxed">
              Level up your battlefield immersion with next-gen consoles, ultra-responsive peripherals, and the hottest trending gaming titles.
            </p>
          </div>

          {/* Next-Gen Appliances */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Next-Gen Appliances</h3>
            <p className="text-slate-600 leading-relaxed">
              Transform your daily space with smart kitchen innovations—from air fryers and espresso machines to intelligent climate control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Shop With Us (Value Propositions) */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Shop With Us?</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-4 border border-slate-700">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Curated Excellence</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                We select premium products from global giants like Apple, Microsoft, Sony, Samsung, and Logitech.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-4 border border-slate-700">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Unbeatable Offers</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                With our daily hot deals and limited-time promotions, premium tech is always within your budget's reach.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-4 border border-slate-700">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Convenience Reimagined</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enjoy a secure shopping journey from seamless product discovery down to reliable real-time tracking.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-4 border border-slate-700">
                <Headphones className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Customer-First Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your satisfaction is our priority. Our dedicated support tier handles inquiries swiftly and seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Brand Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
              <p className="text-blue-100 mb-8">
                Have a question about an order or want to find out more about a product release? We’d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-100 text-sm">Our Location</h5>
                    <p className="text-white font-light">1060 Cudahy Pl, San Diego, CA 92110</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-100 text-sm">Call Center</h5>
                    <p className="text-white font-light">(686) 492-1041</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-100 text-sm">Email Address</h5>
                    <p className="text-white font-light">xtemos.mail@mail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 text-xs text-blue-200">
              WoodMart theme © 2026 WooCommerce Themes.
            </div>
          </div>

          {/* Quick Newsletter Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-slate-50/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Taskco Community</h3>
            <p className="text-slate-600 mb-6">
              Want to stay ahead of the curve? Subscribe to receive the latest tech updates, exclusive product drops, and flash sales right in your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-md">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm placeholder:text-slate-400 transition-all text-sm"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Sign Up Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400">
                Will be used in accordance with our <a href="#privacy" className="underline hover:text-slate-600">Privacy Policy</a>.
              </p>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}