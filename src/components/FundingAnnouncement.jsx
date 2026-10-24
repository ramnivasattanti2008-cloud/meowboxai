import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  FileCheck, 
  ArrowUpRight,
  PieChart,
  Award,
  Key
} from 'lucide-react';
import { FUNDING_DETAILS } from '../data/startups';

export default function FundingAnnouncement({ onOpenFundingModal, onOpenDeckModal, onOpenVerifyPage }) {
  return (
    <section id="funding-section" className="py-20 md:py-28 bg-mono-950 dark:bg-mono-950 light:bg-mono-50 border-b border-mono-800 light:border-mono-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mono-700 light:border-mono-300 text-xs font-mono font-medium text-mono-300 light:text-mono-700 bg-void light:bg-paper mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white light:text-black" />
              <span>CAPITAL ANNOUNCEMENT // DISCLOSED 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-black">
              MeowBoxAI Secures <span className="underline decoration-mono-700">{FUNDING_DETAILS.amount}</span> Pre-Seed
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenVerifyPage}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white light:border-black bg-white light:bg-black text-black light:text-white text-xs font-mono font-bold hover:bg-mono-200 light:hover:bg-mono-800 transition-colors shadow-lg"
            >
              <Key className="w-4 h-4" />
              <span>Groq Partner Code & Verification Link →</span>
            </button>
            <button
              onClick={onOpenFundingModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-mono-700 light:border-mono-300 bg-void light:bg-paper text-mono-200 light:text-mono-800 text-xs font-mono font-semibold hover:border-white light:hover:border-black transition-colors"
            >
              <FileCheck className="w-4 h-4" />
              <span>Term Sheet Summary</span>
            </button>
            <button
              onClick={onOpenDeckModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-mono-700 light:border-mono-300 bg-void light:bg-paper text-mono-200 light:text-mono-800 text-xs font-mono font-semibold hover:border-white light:hover:border-black transition-colors"
            >
              <span>Download Press Kit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Big Announcement Card */}
        <div className="rounded-2xl border border-mono-800 light:border-mono-200 bg-void light:bg-paper p-8 lg:p-10 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Round Highlights & Lead Investor */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-mono-900 light:bg-mono-100 border border-mono-700 light:border-mono-300 text-xs font-mono font-bold text-white light:text-black uppercase">
                  Round: {FUNDING_DETAILS.round}
                </span>
                <span className="px-2.5 py-1 rounded bg-mono-900 light:bg-mono-100 border border-mono-700 light:border-mono-300 text-xs font-mono text-mono-300 light:text-mono-700">
                  Valuation Cap: {FUNDING_DETAILS.valuationCap}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-950/60 light:bg-emerald-50 border border-emerald-800 light:border-emerald-300 text-xs font-mono text-emerald-300 light:text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>100% Disbursed</span>
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-mono-400 light:text-mono-500">
                  Lead Syndicate & Institutional Backers
                </div>
                <div className="text-2xl font-bold text-white light:text-black flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-mono-400" />
                  <span>{FUNDING_DETAILS.leadInvestor}</span>
                </div>
                <p className="text-sm text-mono-300 light:text-mono-700 leading-relaxed">
                  The pre-seed funding will accelerate MeowBoxAI’s on-device acoustic model training, custom CNC hardware tooling for our dual-directional MEMS acoustic receiver, and initial production run of 50 pilot units for certified feline ethology clinics.
                </p>
              </div>

              {/* Investor Quote Box */}
              <div className="p-5 rounded-xl border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-mono-50 relative">
                <div className="text-xs font-mono text-mono-400 light:text-mono-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-white light:text-black" />
                  <span>Lead Investor Memo</span>
                </div>
                <blockquote className="text-sm italic text-mono-200 light:text-mono-800 leading-relaxed font-sans">
                  "{FUNDING_DETAILS.investorQuote.text}"
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-white light:text-black font-semibold">
                    — {FUNDING_DETAILS.investorQuote.author}
                  </span>
                  <span className="text-mono-400 light:text-mono-500">
                    {FUNDING_DETAILS.investorQuote.role}
                  </span>
                </div>
              </div>

              {/* Co-investors list */}
              <div>
                <div className="text-xs font-mono text-mono-400 light:text-mono-500 uppercase tracking-wider mb-2">
                  Participating Co-Investors & Angels
                </div>
                <div className="flex flex-wrap gap-2">
                  {FUNDING_DETAILS.participatingInvestors.map((inv, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono border border-mono-800 light:border-mono-300 bg-mono-900/40 light:bg-mono-100 text-mono-300 light:text-mono-700"
                    >
                      {inv}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Capital Allocation Chart / Progress */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-mono-800 lg:light:border-mono-200 lg:pl-8">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-mono-400 light:text-mono-500 flex items-center gap-1.5">
                  <PieChart className="w-4 h-4 text-white light:text-black" />
                  <span>Allocation of $25,000 USD</span>
                </div>
                <span className="text-xs font-mono text-mono-400">AUDITED DISBURSEMENT</span>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="h-4 w-full rounded-full overflow-hidden flex border border-mono-700 light:border-mono-300">
                <div style={{ width: '48%' }} className="bg-white light:bg-black" title="Edge Hardware (48%)" />
                <div style={{ width: '32%' }} className="bg-mono-400 light:bg-mono-500" title="Acoustic Models (32%)" />
                <div style={{ width: '20%' }} className="bg-mono-600 light:bg-mono-300" title="Safety & Cert (20%)" />
              </div>

              {/* Detail Items */}
              <div className="space-y-4">
                {FUNDING_DETAILS.useOfFunds.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-mono-800 light:border-mono-200 bg-mono-950/50 light:bg-mono-50 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div 
                          className={`w-2.5 h-2.5 rounded-full ${
                            idx === 0 ? 'bg-white light:bg-black' : 
                            idx === 1 ? 'bg-mono-400 light:bg-mono-500' : 'bg-mono-600 light:bg-mono-300'
                          }`} 
                        />
                        <span className="font-semibold text-white light:text-black">{item.category}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white light:text-black">{item.amount}</span>
                        <span className="text-mono-400">({item.percentage}%)</span>
                      </div>
                    </div>
                    <p className="text-xs text-mono-400 light:text-mono-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verification & Compliance stamp */}
              <div className="p-4 rounded-xl border border-mono-800 light:border-mono-200 text-xs font-mono text-mono-400 light:text-mono-600 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white light:text-black font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Apex Frontier Syndicate Verification</span>
                  </span>
                  <button 
                    onClick={onOpenVerifyPage}
                    className="text-white light:text-black underline font-bold"
                  >
                    View Portal →
                  </button>
                </div>
                <p className="font-sans text-[11px]">
                  Verified for startup perks programs including Groq LPU Compute credits, AWS Activate, and NVIDIA Inception.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
