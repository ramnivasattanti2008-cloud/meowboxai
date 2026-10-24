import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Cpu, 
  Volume2, 
  Radio,
  CheckCircle2
} from 'lucide-react';
import { FUNDING_DETAILS } from '../data/startups';

export default function Hero({ onOpenWaitlistModal, onOpenFundingModal, onScrollToSimulator, onOpenVerifyPage }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern border-b border-mono-800 light:border-mono-200">
      {/* Decorative Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_80%)] light:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.85)_80%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={onOpenFundingModal}
            className="group inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-mono-700 light:border-mono-300 bg-mono-900/60 light:bg-mono-100 hover:border-white light:hover:border-black transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-white light:bg-black animate-ping" />
            <span className="font-mono text-xs font-semibold text-white light:text-black">
              PRESS RELEASE: MeowBoxAI closes {FUNDING_DETAILS.amount} Pre-Seed
            </span>
            <span className="text-mono-400 light:text-mono-500 text-xs font-mono group-hover:translate-x-0.5 transition-transform">
              Learn More →
            </span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-mono-400 light:text-mono-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>NPU ENGINE: v2.4 OPERATIONAL</span>
          </div>
        </div>

        {/* Main Grid: Copy on Left, Hardware Concept on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white light:text-black">
              Decipher the mind of your cat. <br className="hidden sm:inline" />
              <span className="text-mono-400 light:text-mono-600 font-normal">
                In real time.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-mono-300 light:text-mono-700 max-w-2xl leading-relaxed font-normal">
              MeowBoxAI is an autonomous, on-device AI companion that translates acoustic meows into human intent, evaluates stress biometrics, and delivers calibrated enrichment. Fully funded with <span className="text-white light:text-black font-semibold underline decoration-mono-600">{FUNDING_DETAILS.amount} in pre-seed backing</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenWaitlistModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white dark:bg-white text-black dark:text-black light:bg-black light:text-white font-semibold text-sm hover:bg-mono-200 light:hover:bg-mono-800 transition-all shadow-lg active:scale-95"
              >
                <span>Reserve Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToSimulator}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg border border-mono-700 light:border-mono-300 text-mono-200 light:text-mono-800 hover:bg-mono-900 light:hover:bg-mono-100 font-mono text-xs font-semibold transition-all"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                <span>Try Live Audio Engine</span>
              </button>

              <button
                onClick={onOpenFundingModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-mono-400 light:text-mono-600 hover:text-white light:hover:text-black font-mono text-xs transition-colors"
              >
                <span>$25K Round Memo</span>
                <span>↗</span>
              </button>

              <button
                onClick={onOpenVerifyPage}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-mono-700 light:border-mono-300 text-mono-300 light:text-mono-700 hover:text-white light:hover:text-black font-mono text-xs transition-colors bg-mono-900/40 light:bg-mono-100"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Groq Partner Code: APX-GROQ-25K-MBX-2026</span>
              </button>
            </div>

            {/* Value Guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-mono-400 light:text-mono-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white light:text-black" />
                <span>Zero Cloud Streaming (100% On-Device)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white light:text-black" />
                <span>Veterinary Ethologist Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white light:text-black" />
                <span>Pre-Seed Syndicate Backed</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Hardware Monolith Simulation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-mono-700 light:border-mono-300 bg-mono-950/90 light:bg-mono-50 p-6 shadow-2xl backdrop-blur-md overflow-hidden">
              
              {/* Top Bar inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-mono-800 light:border-mono-200 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white light:bg-black" />
                  <span className="text-white light:text-black font-semibold">MEOWBOX-STATION // HW-01</span>
                </div>
                <span className="text-mono-400 light:text-mono-500">REV-2.4 // 2026</span>
              </div>

              {/* Hardware Visualization Artwork (Pure Black & White SVG / Geometric Mockup) */}
              <div className="my-6 relative rounded-xl border border-mono-800 light:border-mono-200 bg-void light:bg-paper p-6 flex flex-col items-center justify-center min-h-[260px]">
                
                {/* Hardware Isometric Monolith */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  
                  {/* Subtle Radar Ring Pulse */}
                  <div className="absolute inset-0 rounded-full border border-mono-700 light:border-mono-300 animate-ping opacity-25" />
                  <div className="absolute inset-4 rounded-full border border-dashed border-mono-600 light:border-mono-400 animate-spin duration-[20000ms] opacity-40" />

                  {/* Physical Box Mockup */}
                  <div className="w-36 h-36 rounded-2xl bg-mono-900 light:bg-mono-100 border-2 border-white light:border-black flex flex-col items-center justify-between p-3.5 shadow-2xl relative z-10 transition-transform hover:scale-105 duration-300">
                    
                    {/* Top Sensory Bar */}
                    <div className="w-full flex items-center justify-between">
                      {/* Dual Mic Ports */}
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white light:bg-black" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white light:bg-black" />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-mono-400 light:text-mono-600">
                        1.8 TOPS
                      </span>
                      <div className="w-2 h-2 rounded-full border border-white light:border-black flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white light:bg-black animate-pulse" />
                      </div>
                    </div>

                    {/* Center OLED Display Face */}
                    <div className="w-full py-2 px-2.5 rounded-lg bg-void light:bg-paper border border-mono-800 light:border-mono-300 text-center">
                      <div className="text-[10px] font-mono text-mono-400 light:text-mono-500 mb-0.5">
                        ACOUSTIC SPECTRUM
                      </div>
                      <div className="flex items-center justify-center gap-1 h-6">
                        <div className="w-1 bg-white light:bg-black h-2 animate-soundwave" style={{ animationDelay: '0.1s' }} />
                        <div className="w-1 bg-white light:bg-black h-4 animate-soundwave" style={{ animationDelay: '0.3s' }} />
                        <div className="w-1 bg-white light:bg-black h-6 animate-soundwave" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1 bg-white light:bg-black h-3 animate-soundwave" style={{ animationDelay: '0.4s' }} />
                        <div className="w-1 bg-white light:bg-black h-5 animate-soundwave" style={{ animationDelay: '0.15s' }} />
                        <div className="w-1 bg-white light:bg-black h-2 animate-soundwave" style={{ animationDelay: '0.35s' }} />
                      </div>
                      <div className="text-[9px] font-mono text-white light:text-black font-semibold truncate">
                        INTENT: HUNGER (98.7%)
                      </div>
                    </div>

                    {/* Bottom Dispenser Port & Status */}
                    <div className="w-full flex items-center justify-between pt-1 border-t border-mono-800 light:border-mono-300">
                      <div className="h-1.5 w-12 rounded-full bg-mono-700 light:bg-mono-300" />
                      <span className="text-[8px] font-mono text-mono-400 light:text-mono-500">
                        TREAT DISPENSER
                      </span>
                    </div>

                  </div>
                </div>

                {/* Live Telemetry readout */}
                <div className="w-full mt-4 grid grid-cols-3 gap-2 text-center text-xs font-mono border-t border-mono-800 light:border-mono-200 pt-3">
                  <div>
                    <div className="text-mono-400 light:text-mono-500 text-[10px]">ACOUSTIC LATENCY</div>
                    <div className="text-white light:text-black font-bold">42 ms</div>
                  </div>
                  <div>
                    <div className="text-mono-400 light:text-mono-500 text-[10px]">DEVICE STATUS</div>
                    <div className="text-white light:text-black font-bold">LISTENING</div>
                  </div>
                  <div>
                    <div className="text-mono-400 light:text-mono-500 text-[10px]">BATTERY CYCLE</div>
                    <div className="text-white light:text-black font-bold">14 DAYS</div>
                  </div>
                </div>

              </div>

              {/* Fund Tag below hardware */}
              <div className="bg-mono-900/50 light:bg-mono-100 rounded-lg p-3 text-xs font-mono flex items-center justify-between border border-mono-800 light:border-mono-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white light:text-black" />
                  <span className="text-mono-300 light:text-mono-700">Backed by Apex Frontier Syndicate</span>
                </div>
                <span className="font-bold text-white light:text-black font-mono">$25,000 USD</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Metric Bar */}
        <div className="mt-16 pt-8 border-t border-mono-800 light:border-mono-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FUNDING_DETAILS.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-mono-400 light:text-mono-500">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white light:text-black">
                {metric.value}
              </div>
              <div className="text-[11px] text-mono-400 light:text-mono-600 font-mono">
                {metric.change}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
