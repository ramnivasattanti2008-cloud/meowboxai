import React from 'react';
import { Box, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenFundingModal, onOpenDeckModal, onOpenWaitlistModal, onOpenVerifyPage }) {
  return (
    <footer className="bg-mono-950 dark:bg-mono-950 light:bg-mono-100 border-t border-mono-800 light:border-mono-300 text-mono-400 light:text-mono-600 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white light:text-black">
              <div className="w-7 h-7 rounded bg-white dark:bg-white light:bg-black flex items-center justify-center text-black dark:text-black light:text-white">
                <Box className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-base tracking-tight font-sans">
                MEOWBOX<span className="text-mono-500 font-light">.AI</span>
              </span>
            </div>

            <p className="text-mono-300 light:text-mono-700 font-sans text-xs max-w-sm leading-relaxed">
              Autonomous on-device feline companion & multimodal acoustic intelligence. Backed by $25,000 USD pre-seed capital alongside deep-tech pioneers.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-mono-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>SYNDICATE PROTOCOL: ACTIVE (BATCH 2026)</span>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-white light:text-black font-bold uppercase text-[11px] tracking-wider">
              Ecosystem
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#funding-section" className="hover:text-white light:hover:text-black transition-colors">
                  $25,000 Round
                </a>
              </li>
              <li>
                <a href="#cohort-section" className="hover:text-white light:hover:text-black transition-colors">
                  Funded Startups
                </a>
              </li>
              <li>
                <a href="#simulator-section" className="hover:text-white light:hover:text-black transition-colors">
                  Audio Simulator
                </a>
              </li>
              <li>
                <a href="#specs-section" className="hover:text-white light:hover:text-black transition-colors">
                  Hardware Specs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-white light:text-black font-bold uppercase text-[11px] tracking-wider">
              Governance
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenVerifyPage} className="hover:text-white light:hover:text-black transition-colors text-left flex items-center gap-1 text-white font-semibold">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Groq Perks Portal</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenFundingModal} className="hover:text-white light:hover:text-black transition-colors text-left">
                  Round Memorandum
                </button>
              </li>
              <li>
                <button onClick={onOpenDeckModal} className="hover:text-white light:hover:text-black transition-colors text-left">
                  Investor Pitch Deck
                </button>
              </li>
              <li>
                <span className="text-mono-500">SAFE Cap Table</span>
              </li>
              <li>
                <span className="text-mono-500">FCC Verification</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Waitlist Signup */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white light:text-black font-bold uppercase text-[11px] tracking-wider">
              Batch Alpha Access
            </div>
            <p className="text-xs text-mono-400 leading-relaxed font-sans">
              Sign up for priority production notifications of our 50-unit pilot run.
            </p>
            <button
              onClick={onOpenWaitlistModal}
              className="w-full py-2.5 px-4 rounded-lg bg-white dark:bg-white text-black dark:text-black light:bg-black light:text-white font-semibold text-xs hover:bg-mono-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Join Alpha Roster</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-mono-900 light:border-mono-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} MeowBoxAI Labs Inc. All rights reserved. Strictly Black & White Architecture.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-white light:hover:text-black cursor-pointer">Privacy Charter</span>
            <span>•</span>
            <span className="hover:text-white light:hover:text-black cursor-pointer">Security Protocol</span>
            <span>•</span>
            <span className="hover:text-white light:hover:text-black cursor-pointer">Zero Cloud Telemetry</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
