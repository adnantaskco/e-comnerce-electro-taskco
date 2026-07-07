"use client"
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle,
  HelpCircle
} from 'lucide-react'; // Make sure to run: npm install lucide-react

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Form Submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            We're Here to Help You
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have a question about an order, a specialized product breakdown, or tech troubleshooting? Let us know.
          </p>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Call Us */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl flex items-center space-x-5 group transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Call Center</h3>
              <p className="text-slate-900 font-semibold mt-0.5">(686) 492-1041</p>
              <p className="text-slate-500 text-xs mt-0.5">Toll-free across domestic lines</p>
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl flex items-center space-x-5 group transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Email Address</h3>
              <p className="text-slate-900 font-semibold mt-0.5">xtemos.mail@mail.com</p>
              <p className="text-slate-500 text-xs mt-0.5">Expect replies within 24 hours</p>
            </div>
          </div>

          {/* Card 3: Live Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl flex items-center space-x-5 group transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Support Hours</h3>
              <p className="text-slate-900 font-semibold mt-0.5">Mon - Fri: 9AM - 6PM</p>
              <p className="text-slate-500 text-xs mt-0.5">Sat - Sun: Live chat assistance</p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Form & Location Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Form Container */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
            <p className="text-slate-500 mt-1 text-sm">Drop your info and message directly to our dedicated ticketing desk.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/20">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Message Sent Successfully!</h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you for contacting Taskco Tech. One of our specialists will look over your details and follow up soon.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-6 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 shadow-inner text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 shadow-inner text-sm transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Order Inquiry / Tech Assistance" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 shadow-inner text-sm transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">How can we help?</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or question in detail..." 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 shadow-inner text-sm transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Submit Ticket</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Map Call-out & Extra Channel Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address Block */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 mb-6 border border-white/5 backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">Headquarters</h3>
            <p className="text-slate-300 font-light leading-relaxed mb-4">
              1060 Cudahy Pl, <br />San Diego, CA 92110
            </p>
            <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
              WoodMart theme © 2026 WooCommerce Themes.
            </div>
          </div>

          {/* Quick FAQ Redirection Box */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex items-start space-x-5 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-md">Looking for fast answers?</h4>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                Save time! Check out our dedicated FAQs space to find instantaneous answers regarding tracking links, global components, and order cancellations.
              </p>
              <a 
                href="/faqs" 
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-4 transition-colors"
              >
                <span>Browse our FAQs</span>
                <span className="ml-1 tracking-normal transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}