import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FUNDING_DETAILS } from '../data/startups';

export function FundingModal({ isOpen, onClose, onCelebrate, onOpenVerifyPage }) {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText("0x7f9a2b5e4c8d19a0bc4578129eac5f88410d25k");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#888888', '#000000', '#cccccc']
    });
    if (onCelebrate) onCelebrate();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-mono-700 bg-mono-950 p-6 sm:p-8 text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-mono-400 hover:text-white hover:bg-mono-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-black uppercase">
            VERIFIED ROUND MEMO
          </span>
          <span className="text-xs font-mono text-mono-400">BATCH 2026</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          MeowBoxAI — {FUNDING_DETAILS.amount} Pre-Seed
        </h3>
        <p className="text-xs font-mono text-mono-400 mb-6">
          Disclosed & Released {FUNDING_DETAILS.date} • Lead: {FUNDING_DETAILS.leadInvestor}
        </p>

        {/* Core Deal Terms */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-mono-800 bg-void font-mono text-xs mb-6">
          <div>
            <div className="text-mono-500 text-[10px]">ROUND SIZE</div>
            <div className="text-white font-bold text-sm">{FUNDING_DETAILS.amount}</div>
          </div>
          <div>
            <div className="text-mono-500 text-[10px]">VALUATION CAP</div>
            <div className="text-white font-bold text-sm">{FUNDING_DETAILS.valuationCap}</div>
          </div>
          <div>
            <div className="text-mono-500 text-[10px]">INSTRUMENT</div>
            <div className="text-white font-bold text-sm">Post-Money SAFE</div>
          </div>
          <div>
            <div className="text-mono-500 text-[10px]">STATUS</div>
            <div className="text-emerald-400 font-bold text-sm">100% DISBURSED</div>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="space-y-4 text-sm text-mono-300 font-sans leading-relaxed mb-6">
          <p>
            MeowBoxAI was founded to solve a massive veterinary asymmetry: cats are notorious masters of masking pain and acute discomfort until organ damage occurs. Current smart feeders are dumb mechanical timers with cheap webcams.
          </p>
          <p>
            With this $25,000 round, our team has completed the prototype engineering of our custom 1.8 TOPS edge NPU receiver. The funds directly underwrite precision CNC tooling, 145,000 ethologist-annotated audio training tokens, and pet-contact non-toxic certifications.
          </p>
        </div>

        {/* Verification Box */}
        <div className="p-4 rounded-xl border border-mono-800 bg-mono-900/60 font-mono text-xs space-y-2 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-mono-400 uppercase text-[10px]">Escrow Verification Hash</span>
            <button 
              onClick={handleCopyHash}
              className="flex items-center gap-1 text-white hover:underline text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy Hash"}</span>
            </button>
          </div>
          <div className="p-2 rounded bg-void border border-mono-800 text-[11px] text-mono-300 font-mono select-all truncate">
            0x7f9a2b5e4c8d19a0bc4578129eac5f88410d25k-MBX
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-mono-800">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={triggerCelebration}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-mono-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebrate Round</span>
            </button>

            {onOpenVerifyPage && (
              <button
                onClick={() => {
                  onClose();
                  onOpenVerifyPage();
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-mono-700 bg-void text-white font-mono text-xs hover:bg-mono-900 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Groq Perks Portal →</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-mono-700 text-mono-300 hover:text-white font-mono text-xs transition-colors"
          >
            Close Memorandum
          </button>
        </div>

      </div>
    </div>
  );
}

export function StartupDetailModal({ startup, isOpen, onClose }) {
  if (!isOpen || !startup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-mono-700 bg-mono-950 p-6 sm:p-8 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-mono-400 hover:text-white hover:bg-mono-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-mono-900 border border-mono-700 flex items-center justify-center font-mono font-bold text-base text-white">
            {startup.logoText}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-black">
                {startup.fundingAmount}
              </span>
            </div>
            <p className="text-xs font-mono text-mono-400">
              {startup.category} • {startup.location} ({startup.year})
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold text-mono-200 mb-6 italic">
          "{startup.tagline}"
        </p>

        {/* Problem & Solution */}
        <div className="space-y-4 text-xs font-mono mb-6">
          <div className="p-4 rounded-xl border border-mono-800 bg-void space-y-1">
            <span className="text-mono-500 uppercase text-[10px]">Identified Market Pain</span>
            <p className="text-mono-300 font-sans text-sm">{startup.problem}</p>
          </div>

          <div className="p-4 rounded-xl border border-mono-800 bg-void space-y-1">
            <span className="text-mono-500 uppercase text-[10px]">DeepTech Engineering Solution</span>
            <p className="text-mono-300 font-sans text-sm">{startup.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="text-[10px] font-mono uppercase text-mono-500 mb-2">Core Architecture & Tech</div>
          <div className="flex flex-wrap gap-2">
            {startup.techStack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono border border-mono-800 bg-mono-900 text-mono-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Traction & Founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-mono-800 bg-mono-900/50 text-xs font-mono mb-6">
          <div>
            <span className="text-mono-500 text-[10px]">FOUNDING TEAM</span>
            <p className="text-white font-semibold mt-0.5">{startup.founders}</p>
          </div>
          <div>
            <span className="text-mono-500 text-[10px]">CURRENT TRACTION</span>
            <p className="text-white font-semibold mt-0.5">{startup.traction}</p>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-mono-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-mono-200 transition-colors"
          >
            Close Venture Profile
          </button>
        </div>

      </div>
    </div>
  );
}

export function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [catName, setCatName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketNo, setTicketNo] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const randomTicket = 'MB-2026-' + Math.floor(1000 + Math.random() * 9000);
    setTicketNo(randomTicket);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ffffff', '#aaaaaa', '#ffffff']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-mono-700 bg-mono-950 p-6 sm:p-8 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-mono-400 hover:text-white hover:bg-mono-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-black">
                BATCH-01 EARLY RESERVATION
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              Join MeowBoxAI Alpha
            </h3>
            <p className="text-xs text-mono-400 font-mono mb-6">
              Only 50 units funded by our $25K round will be manufactured for initial community testing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-mono-400 mb-1">
                  Owner Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-void border border-mono-800 text-white placeholder:text-mono-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-mono-400 mb-1">
                  Cat's Name & Breed (Optional)
                </label>
                <input
                  type="text"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="e.g. Mochi, British Shorthair"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-void border border-mono-800 text-white placeholder:text-mono-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="p-3 rounded-lg border border-mono-800 bg-mono-900/50 text-[11px] font-mono text-mono-400 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero Payment Required Today</span>
                </div>
                <p>You will be invited to confirm your hardware reservation when batch manufacturing begins.</p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-mono-200 transition-colors shadow-lg"
              >
                Claim Priority Alpha Spot
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Priority Spot Confirmed!</h3>
              <p className="text-xs text-mono-400 font-mono mt-1">
                Your reservation token has been minted.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-mono-700 bg-void font-mono">
              <div className="text-[10px] text-mono-500 uppercase">Reservation Pass ID</div>
              <div className="text-lg font-bold text-white tracking-widest mt-1">
                {ticketNo}
              </div>
              <div className="text-xs text-emerald-400 mt-1">
                Estimated Queue Position: #1,481
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-mono-200 transition-colors"
            >
              Back to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export function PitchDeckModal({ isOpen, onClose }) {
  const [slide, setSlide] = useState(1);
  const totalSlides = 5;

  if (!isOpen) return null;

  const slidesData = [
    {
      title: "Slide 1: Executive Summary & The $25K Round",
      content: "MeowBoxAI is developing the premier on-device multimodal acoustic & vision companion for felines. $25,000 Pre-seed round secured from Apex Frontier Syndicate.",
      bulletPoints: ["145,000+ verified audio spectrogram dataset", "1.8 TOPS local NPU zero-cloud engine", "$2.5M Valuation Cap on post-money SAFE"]
    },
    {
      title: "Slide 2: The Feline Problem",
      content: "Domestic cats conceal illness due to evolutionary survival instincts. 68% of kidney disease, osteoarthritis, and dental pain are diagnosed too late.",
      bulletPoints: ["$34B spent annually on reactive emergency vet bills in US alone", "Existing pet cameras lack acoustic intelligence", "Owners misinterpret 78% of critical distress meows"]
    },
    {
      title: "Slide 3: MeowBoxAI Engineering Solution",
      content: "A sleek, bedside-scale hardware monolith with directional acoustic beamforming and micro-dispensing.",
      bulletPoints: ["Quad MEMS 96kHz acoustic array", "Sub-45ms on-device transformer inference", "Autonomous enrichment & biometric health logs"]
    },
    {
      title: "Slide 4: Capital Deployment Breakdown",
      content: "How the $25,000 pre-seed check is deployed with extreme capital efficiency:",
      bulletPoints: ["$12,000 (48%): CNC tooling & initial 50 pilot units", "$8,000 (32%): Audio-LLM acoustic fine-tuning & ethologist labels", "$5,000 (20%): FCC/CE safety certification & pet-contact validation"]
    },
    {
      title: "Slide 5: Cohort & Syndicate Synergy",
      content: "MeowBoxAI collaborates alongside funded cohort peers (NeuroBark, KittOS, Synthetix Bio) sharing firmware and sensor supply chains.",
      bulletPoints: ["Cross-syndicate procurement discounts", "Combined distribution across 20+ veterinary clinical pilots", "Shared hardware testing facilities"]
    }
  ];

  const currentSlideData = slidesData[slide - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl border border-mono-700 bg-mono-950 p-6 sm:p-8 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-mono-400 hover:text-white hover:bg-mono-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between pb-4 border-b border-mono-800 mb-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-white" />
            <span className="font-bold text-white">MEOWBOXAI INVESTOR DECK // CONFIDENTIAL</span>
          </div>
          <span className="text-mono-400">
            SLIDE {slide} OF {totalSlides}
          </span>
        </div>

        {/* Slide Display Area */}
        <div className="p-8 rounded-xl border border-mono-800 bg-void min-h-[260px] flex flex-col justify-between mb-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">
              {currentSlideData.title}
            </h4>
            <p className="text-sm text-mono-300 font-sans leading-relaxed mb-6">
              {currentSlideData.content}
            </p>
            <ul className="space-y-2 text-xs font-mono text-mono-200">
              {currentSlideData.bulletPoints.map((bp, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-mono-900 flex items-center justify-between text-[11px] font-mono text-mono-500">
            <span>Apex Frontier Syndicate Portfolio 2026</span>
            <span>$25,000 Allocation Verified</span>
          </div>
        </div>

        {/* Slide navigation controls */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              disabled={slide === 1}
              onClick={() => setSlide(s => Math.max(1, s - 1))}
              className="p-2 rounded border border-mono-800 hover:bg-mono-900 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={slide === totalSlides}
              onClick={() => setSlide(s => Math.min(totalSlides, s + 1))}
              className="p-2 rounded border border-mono-800 hover:bg-mono-900 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-mono-400 ml-2">
              Slide {slide}/{totalSlides}
            </span>
          </div>

          <button
            onClick={() => {
              alert("Downloading MeowBoxAI_Seed_Memo_2026.pdf (Simulated)");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-mono-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Deck PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
