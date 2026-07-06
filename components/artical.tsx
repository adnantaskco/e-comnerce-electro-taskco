import React from 'react';

import { Dataarticles } from '@/lib/data/DataArtical';

export default function UsefulArticles() {
  return (
    <section className="">
      <div className='container mx-auto px-4 md:px-16 py-10'>
              {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Useful Articles</h2>
        <a 
          href="#all-articles" 
          className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
        >
          All Articles
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Dataarticles.map((article) => (
          <div key={article.id} className="group flex flex-col items-center text-center">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating Date Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs rounded-xl px-2.5 py-1.5 flex flex-col items-center justify-center min-w-[45px] shadow-xs">
                <span className="text-lg font-bold text-gray-800 leading-none">{article.date.day}</span>
                <span className="text-[10px] font-semibold text-gray-500 mt-0.5 tracking-wider">{article.date.month}</span>
              </div>

              {/* Category Overlay Label */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md z-10">
                {article.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="mt-4 flex flex-col items-center flex-1">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 leading-snug hover:text-blue-600 cursor-pointer transition-colors px-2">
                {article.title}
              </h3>
              
              {/* Meta info */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
                <span>Posted by</span>
                <div className="w-4 h-4 rounded-full bg-gray-200 overflow-hidden inline-flex items-center justify-center">
                  {/* Substitute with user icon or image */}
                  <span className="text-[8px] font-bold text-gray-600">M</span>
                </div>
                <span className="font-medium text-gray-500 hover:text-gray-700 cursor-pointer">{article.author}</span>
                
                {/* Share Icon Mock */}
                <svg className="w-3.5 h-3.5 ml-0.5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 10.742l4.636-2.318a3 3 0 11.894 1.78l-4.636 2.318a3 3 0 11-.894-1.78z" />
                </svg>
              </div>

              {/* Comment Bubble Counter */}
              <div className="relative mt-2 flex items-center justify-center text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="absolute text-[9px] font-bold text-white bg-blue-600 rounded-full w-3.5 h-3.5 flex items-center justify-center top-[-4px] right-[-4px]">
                  {article.comments}
                </span>
              </div>

              {/* Continue Reading Button */}
              <a 
                href={`#article-${article.id}`} 
                className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 tracking-wide uppercase border-b-2 border-transparent hover:border-blue-600 transition-all pb-0.5"
              >
                Continue Reading
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}