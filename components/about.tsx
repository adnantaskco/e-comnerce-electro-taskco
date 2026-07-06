import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SeoDescriptionSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-4 md:px-16 py-10  text-left border-b border-ring/10">
      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
        Online store of household appliances and electronics
      </h2>
      
      {/* Intro Paragraph */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
        Then the question arises: where’s the content? Not there yet? That’s not so bad, 
        there’s some dummy copy to the rescue. But worse, what if the fish doesn’t fit in the 
        can, the foot’s too big for the boot? Or too small? To short sentences, to many headings, 
        images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.
      </p>

      {/* Collapsible Content Area */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
          Online shopping that really is convenient
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          A client that’s unhappy for a reason is a problem, a client that’s unhappy though he 
          or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, 
          communication, and checkpoints, there wasn’t a process agreed upon or specified with 
          the granularity required. It’s content strategy gone awry right from the start. If that’s 
          what you think how bout the other way around? How can you evaluate content without design? 
          No typography, no colors, no layout, no styles, all those things that convey the important 
          signals that go beyond the mere textual, hierarchies of information, weight, emphasis, 
          oblique stresses, priorities, all those subtle cues that also have visual and emotional 
          appeal to the reader.
        </p>
      </div>

      {/* Read More / Read Less Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-full transition-all border border-gray-200/40 shadow-sm"
      >
        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
        {isExpanded ? (
          <ChevronUp size={14} className="text-gray-500" />
        ) : (
          <ChevronDown size={14} className="text-gray-500" />
        )}
      </button>
    </section>
  );
}