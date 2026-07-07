"use client"
import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ShoppingBag, 
  Truck, 
  RefreshCw, 
  Wrench, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react'; // Make sure to run: npm install lucide-react

export default function FAQPage() {
  // State to track which FAQ accordion is active
  const [activeId, setActiveId] = useState(null);
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'orders', name: 'Orders & Shopping', icon: ShoppingBag },
    { id: 'shipping', name: 'Shipping & Delivery', icon: Truck },
    { id: 'returns', name: 'Returns & Warranty', icon: RefreshCw },
    { id: 'support', name: 'Technical Support', icon: Wrench },
  ];

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'Are the products sold on Taskco Tech authentic and covered by warranty?',
      answer: 'Absolutely. Every single product we curate comes directly from global giants like Apple, Sony, Samsung, and Logitech. Everything is 100% authentic and includes the full manufacturer’s standard warranty starting from your purchase date.'
    },
    {
      id: 2,
      category: 'shipping',
      question: 'How can I track my order once it has been shipped?',
      answer: 'Once your order leaves our warehouse, you will automatically receive an email containing a secure real-time tracking link. You can also view live delivery status updates at any time via our Track Order portal.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'Can I cancel or modify my order after checking out?',
      answer: 'To ensure ultra-fast dispatch times, orders move into processing almost instantly. If you need to make changes or cancel an order, please contact our support desk within 30 minutes of checkout and we will do our absolute best to assist you.'
    },
    {
      id: 4,
      category: 'returns',
      question: 'What is your return policy for smart electronics and appliances?',
      answer: 'We offer a hassle-free 14-day return window for unopened items in their original packaging. Simply open a return ticket through your account panel, print out the shipping label, and drop it off at your nearest courier terminal.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'Do you offer international shipping options?',
      answer: 'Currently, we focus primarily on providing seamless fast shipping across domestic networks. Enter your shipping address at checkout to view specific transit times and options available for your location.'
    },
    {
      id: 6,
      category: 'support',
      question: 'How do I set up or troubleshoot my smart kitchen appliances?',
      answer: 'All next-gen appliances arrive with quick-start companion guides. If you encounter setup bottlenecks or software connection glitches, feel free to open a ticket with our Technical Support team for step-by-step guidance.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Got a question about an order, shipment, or appliance setup? Find clear answers instantly below.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Category Filter Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">
            Browse Categories
          </h3>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none snap-x">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveId(null); // Reset open accordion on category switch
                  }}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap snap-start shrink-0 w-auto lg:w-full ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10 translate-x-1'
                      : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Accordion Layout */}
        <div className="lg:col-span-8 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-200 shadow-md ring-1 ring-blue-100' 
                      : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between text-left p-6 sm:p-7 focus:outline-none transition-colors duration-200 group"
                  >
                    <span className={`font-semibold text-base sm:text-md pr-4 leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] border-t border-slate-50' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 sm:p-7 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
              <p className="text-slate-400">No questions found in this category.</p>
            </div>
          )}
        </div>

      </section>

      {/* Direct Help Call-out Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white p-8 sm:p-10 shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-200 mb-4 backdrop-blur-sm">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Still need assistance?</h3>
            <p className="text-blue-100 text-sm sm:text-base mb-6 leading-relaxed">
              If your question isn’t listed here, our dedicated customer support tier is happy to assist you directly with any inquiries.
            </p>
            <a 
              href="/contact"
              className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 font-medium text-sm rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center space-x-2 group"
            >
              <span>Contact Live Support</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}