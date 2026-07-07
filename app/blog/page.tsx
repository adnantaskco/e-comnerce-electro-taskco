"use client"
import React, { useState } from 'react';
import { 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Grid, 
  Sparkles, 
  TrendingUp, 
  Search 
} from 'lucide-react'; // Make sure to run: npm install lucide-react

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'reviews', name: 'Product Reviews' },
    { id: 'novelty', name: 'Tech Novelties' },
    { id: 'advices', name: 'Buyer Guides & Advice' },
  ];

  const articles = [
    {
      id: 1,
      category: 'reviews',
      title: 'Review of the new MacBook Pro on the powerful M3 chip series',
      excerpt: 'We dive deep into Apple’s latest M3 architecture to evaluate processing metrics, battery lifecycle thresholds, and rendering speeds for heavy creative workloads.',
      date: '17 JUL',
      author: 'Mr. Mackay',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      category: 'novelty',
      title: 'What’s New in PlayStation 5 Slim and Release Date',
      excerpt: 'Sony reimagines its flagship console footprint. Discover the thermal efficiency enhancements, modular disc-drive alterations, and internal storage expansion capabilities.',
      date: '10 JUL',
      author: 'Mr. Mackay',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      category: 'reviews',
      title: 'Top 5 Most Powerful Vertical Vacuum Cleaners',
      excerpt: 'Ditch the cord without losing suction. We benchmark premium lightweight stick vacuums on raw airflow capacity, battery longevity, and smart floor detection.',
      date: '03 JUL',
      author: 'Mr. Mackay',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      category: 'advices',
      title: 'How Do I Share Apple AirTag With Other Users?',
      excerpt: 'Apple’s ecosystem expansion finally makes tracking shared items seamless. Follow our quick breakdown on setting up Family Sharing variables securely.',
      date: '27 JUN',
      author: 'Mr. Mackay',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1628243426702-861c8ee700cc?auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  // Filtering Logic
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = articles.find(a => a.featured);
  const regularPosts = filteredArticles.filter(a => searchQuery ? true : !a.featured);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
            Taskco Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            Useful Articles & Tech Hub
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stay updated with premier reviews, smart home installation deep-dives, and cutting-edge ecosystem breakdowns.
          </p>

          {/* Inline Search Bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-900 transition-all text-sm backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Main Blog Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Controls Layout */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-12 overflow-x-auto scrollbar-none">
          <div className="flex space-x-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs text-slate-400 font-medium tracking-wide uppercase">
            <Grid className="w-4 h-4 text-slate-300" />
            <span>{filteredArticles.length} Stories Found</span>
          </div>
        </div>

        {/* Highlighted Featured Post */}
        {featuredPost && activeCategory === 'all' && !searchQuery && (
          <div className="group bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16 transition-all duration-300 hover:shadow-2xl">
            <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full relative overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured Review
              </span>
            </div>
            
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 text-slate-400 text-xs font-medium mb-4">
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-bold text-[10px] uppercase">{featuredPost.category}</span>
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">{featuredPost.author}</h5>
                    <p className="text-[11px] text-slate-400">{featuredPost.date}</p>
                  </div>
                </div>
                <a href={`/blog/${featuredPost.id}`} className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-blue-600 hover:text-blue-700 space-x-1 group/btn">
                  <span>Continue Reading</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Regular Article Post Grid Matrix */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((article) => (
              <article 
                key={article.id} 
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Context Content Padding */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-slate-400 text-[11px] font-medium mb-3">
                      <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</div>
                      <span>•</span>
                      <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Boundary */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                    {article.date}
                  </span>
                  <a 
                    href={`/blog/${article.id}`} 
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 space-x-1 group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-slate-900 font-bold mb-1">No Articles Match Your Search</h4>
            <p className="text-slate-400 text-sm">Try broadening your category fields or clearing keywords.</p>
          </div>
        )}

      </section>

      {/* Trending Tag Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4 max-w-xl">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Never miss a major tech drop</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We release product architecture breakdowns, firmware reviews, and smart tech buying matrix sheets every week. Join our mail ecosystem to read first.
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <a 
              href="#subscribe" 
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}