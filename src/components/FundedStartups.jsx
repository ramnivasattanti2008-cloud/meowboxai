import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  Tag, 
  Building2, 
  DollarSign, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { COHORT_STARTUPS } from '../data/startups';

export default function FundedStartups({ onSelectStartup }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Pet Tech & Bio',
    'Autonomous Systems',
    'Embedded Robotics OS',
    'Decentralized Mesh',
    'Bio-Acoustics AI'
  ];

  const filteredStartups = COHORT_STARTUPS.filter((startup) => {
    const matchesSearch = 
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === 'All' || 
      (selectedCategory === 'Pet Tech & Bio' && (startup.category.includes('Pet') || startup.category.includes('Feline') || startup.category.includes('Bio') || startup.category.includes('Canine'))) ||
      startup.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="cohort-section" className="py-20 md:py-28 bg-mono-950 dark:bg-mono-950 light:bg-mono-50 border-b border-mono-800 light:border-mono-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mono-700 light:border-mono-300 text-xs font-mono font-medium text-mono-300 light:text-mono-700 mb-3 bg-void light:bg-paper">
            <Layers className="w-3.5 h-3.5 text-white light:text-black" />
            <span>PORTFOLIO & COHORT SYNDICATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-black">
            Funded Startups: The 2026 Batch
          </h2>
          <p className="mt-4 text-mono-300 light:text-mono-700 text-base sm:text-lg">
            Alongside <strong className="text-white light:text-black">MeowBoxAI ($25,000)</strong>, our syndicate has deployed capital into breakthrough deep-tech ventures transforming pet biology, autonomous robotics, and edge computing.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white border-white light:border-black font-semibold'
                    : 'bg-void light:bg-paper text-mono-400 light:text-mono-600 border-mono-800 light:border-mono-200 hover:border-mono-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-mono-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ventures, tech, tags..."
              className="w-full pl-9 pr-4 py-2 rounded-lg text-xs font-mono bg-void light:bg-paper border border-mono-800 light:border-mono-300 text-white light:text-black placeholder:text-mono-500 focus:outline-none focus:border-white light:focus:border-black transition-colors"
            />
          </div>

        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <div
              key={startup.id}
              onClick={() => onSelectStartup(startup)}
              className={`group cursor-pointer rounded-2xl border p-6 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                startup.isFlagship
                  ? 'border-white light:border-black bg-void light:bg-paper shadow-2xl relative overflow-hidden'
                  : 'border-mono-800 light:border-mono-200 bg-void light:bg-paper hover:border-mono-600 light:hover:border-mono-400'
              }`}
            >
              {/* Flagship decorative badge */}
              {startup.isFlagship && (
                <div className="absolute top-0 right-0 bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white text-[9px] font-mono font-bold px-3 py-1 rounded-bl-lg tracking-widest uppercase">
                  OUR FEATURED VENTURE
                </div>
              )}

              {/* Card Top: Logo text, Funding Badge, Round */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mono-900 light:bg-mono-100 border border-mono-700 light:border-mono-300 flex items-center justify-center font-mono font-bold text-sm text-white light:text-black">
                      {startup.logoText}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-white light:text-black group-hover:underline">
                        {startup.name}
                      </h3>
                      <p className="text-xs font-mono text-mono-400 light:text-mono-500">
                        {startup.location}
                      </p>
                    </div>
                  </div>

                  {/* Funding Badge */}
                  <span className="shrink-0 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-mono-900 light:bg-mono-100 border border-mono-700 light:border-mono-300 text-white light:text-black">
                    {startup.fundingAmount}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs text-mono-300 light:text-mono-700 leading-relaxed font-sans mb-4 min-h-[48px]">
                  {startup.tagline}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {startup.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-mono-800 light:border-mono-200 text-mono-400 light:text-mono-600 bg-mono-950 light:bg-mono-50"
                    >
                      {tech}
                    </span>
                  ))}
                  {startup.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-mono-500">
                      +{startup.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom: Traction and CTA */}
              <div className="pt-4 border-t border-mono-900 light:border-mono-100 flex items-center justify-between text-xs font-mono">
                <span className="text-mono-400 light:text-mono-500 truncate max-w-[190px]">
                  {startup.traction}
                </span>
                <span className="flex items-center gap-1 font-semibold text-white light:text-black group-hover:translate-x-1 transition-transform">
                  <span>Memo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredStartups.length === 0 && (
          <div className="text-center py-12 border border-dashed border-mono-800 rounded-xl">
            <p className="text-mono-400 text-sm font-mono">No startups matched your search query "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-mono text-white underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
