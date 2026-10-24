import React from 'react';
import { 
  Sparkles, 
  FileText, 
  Sun, 
  Moon, 
  Terminal, 
  Layers, 
  ArrowUpRight, 
  Radio,
  Box,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenFundingModal, 
  onOpenDeckModal,
  onOpenWaitlistModal,
  onOpenVerifyPage
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-void/80 dark:bg-void/85 border-b border-mono-800 light:bg-paper/85 light:border-mono-200 transition-colors duration-300">
      {/* Top Banner ticker */}
      <div className="bg-mono-950 dark:bg-mono-950 light:bg-mono-100 border-b border-mono-900 light:border-mono-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-mono-400 light:text-mono-600">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white uppercase tracking-wider">
              OFFICIAL DISCLOSURE
            </span>
            <span className="truncate">
              MeowBoxAI closes <span className="text-white light:text-black font-semibold font-mono">$25,000 USD Pre-Seed</span> round alongside 2026 DeepTech Cohort Startups.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-4 font-mono text-[11px]">
            <button 
              onClick={onOpenVerifyPage}
              className="hidden md:inline-flex items-center gap-1 text-white light:text-black font-semibold hover:underline"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Groq Partner Verification Portal →</span>
            </button>
            <button 
              onClick={onOpenFundingModal}
              className="flex items-center gap-1 text-mono-300 light:text-mono-700 hover:text-white light:hover:text-black hover:underline"
            >
              <span>Round Memo</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-white dark:bg-white light:bg-black flex items-center justify-center text-black dark:text-black light:text-white transition-transform group-hover:scale-105">
            <Box className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight font-sans text-white light:text-black">
                MEOWBOX<span className="font-mono text-mono-400 light:text-mono-500 font-light">.AI</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded border border-mono-700 light:border-mono-300 text-mono-300 light:text-mono-600 bg-mono-900/40 light:bg-mono-100">
                <span className="w-1.5 h-1.5 rounded-full bg-white light:bg-black animate-pulse" />
                <span>$25K BACKED</span>
              </span>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-mono-400 light:text-mono-500 hidden sm:block">
              Multimodal Feline Neural Engine
            </p>
          </div>
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-mono-400 light:text-mono-600">
          <a href="#funding-section" className="hover:text-white light:hover:text-black transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>$25K Round</span>
          </a>
          <button 
            onClick={onOpenVerifyPage}
            className="hover:text-white light:hover:text-black transition-colors flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded-md border border-mono-700 light:border-mono-300 text-white light:text-black bg-mono-900/50 light:bg-mono-100"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Groq Partner Code</span>
          </button>
          <a href="#simulator-section" className="hover:text-white light:hover:text-black transition-colors flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5" />
            <span>Live Audio Engine</span>
          </a>
          <a href="#cohort-section" className="hover:text-white light:hover:text-black transition-colors flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Funded Startups</span>
          </a>
          <a href="#specs-section" className="hover:text-white light:hover:text-black transition-colors flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Specs</span>
          </a>
        </nav>

        {/* Right CTA / Controls */}
        <div className="flex items-center gap-2.5">
          {/* Deck Button */}
          <button
            onClick={onOpenDeckModal}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-2 rounded-lg border border-mono-700 light:border-mono-300 text-mono-200 light:text-mono-800 hover:bg-mono-800 light:hover:bg-mono-100 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Deck & SAFE</span>
          </button>

          {/* Theme Switcher (Void vs Paper) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Void Mode"}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-mono-800 light:border-mono-200 text-mono-300 light:text-mono-700 hover:text-white light:hover:text-black hover:bg-mono-900 light:hover:bg-mono-100 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Beta Waitlist Button */}
          <button
            onClick={onOpenWaitlistModal}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white dark:bg-white text-black dark:text-black light:bg-black light:text-white hover:bg-mono-200 light:hover:bg-mono-800 transition-all shadow-sm active:scale-95"
          >
            <span>Reserve Beta</span>
            <span className="hidden sm:inline font-mono text-[10px] opacity-70">#Batch-01</span>
          </button>
        </div>
      </div>
    </header>
  );
}
