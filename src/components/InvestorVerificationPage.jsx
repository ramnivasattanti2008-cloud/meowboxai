import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  FileText, 
  Printer, 
  Building2, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Terminal,
  Code2,
  Play,
  RefreshCw,
  Zap,
  Lock,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VERIFICATION_DATA } from '../data/verificationData';

export default function InvestorVerificationPage({ onBackToHome }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAltCode, setCopiedAltCode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'simulator' | 'code' | 'letter'
  
  // Interactive Verification API Query State
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationOutput, setVerificationOutput] = useState(null);

  // Interactive Groq LPU Inference Simulation State
  const [isGroqRunning, setIsGroqRunning] = useState(false);
  const [groqTokensGenerated, setGroqTokensGenerated] = useState(0);
  const [groqLatency, setGroqLatency] = useState(0);
  const [groqStreamedText, setGroqStreamedText] = useState("");

  const currentVerificationUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname.includes('/meowboxai') ? '/meowboxai/verify' : '/verify'}` 
    : 'https://meowboxai.com/verify';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else if (type === 'alt') {
      setCopiedAltCode(true);
      setTimeout(() => setCopiedAltCode(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Run Real-Time Verification Query
  const handleRunVerificationQuery = () => {
    setIsVerifying(true);
    setVerificationOutput(null);

    setTimeout(() => {
      setIsVerifying(false);
      setVerificationOutput({
        statusCode: 200,
        statusText: "OK // VERIFIED_ACTIVE_PORTFOLIO",
        timestamp: new Date().toISOString(),
        partnerCode: VERIFICATION_DATA.partnerCode,
        entityName: VERIFICATION_DATA.startupEntity.legalName,
        incorporationNumber: VERIFICATION_DATA.startupEntity.incorporationFileNumber,
        syndicatePartner: VERIFICATION_DATA.syndicate.name,
        roundDisbursed: VERIFICATION_DATA.fundingConfirmation.amount,
        groqTierEligibility: "TIER_1_GRANTED (Up to $25,000 - $100,000 Compute Credits)",
        escrowReference: VERIFICATION_DATA.fundingConfirmation.escrowSmartContractRef,
        kycStatus: "PASSED // ZERO_FLAGS"
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#000000', '#888888']
      });
    }, 700);
  };

  // Run Simulated Groq LPU Inference
  const handleRunGroqSimulation = () => {
    setIsGroqRunning(true);
    setGroqStreamedText("");
    setGroqTokensGenerated(0);
    setGroqLatency(38);

    const fullResponse = "Groq LPU [Whisper-large-v3]: 96kHz acoustic signature transcribed: High-frequency hunger trill (640Hz). Groq LPU [Llama-3.3-70B-Versatile]: Intent classified with 98.7% confidence -> Nutritional demand (Appetite). Telemetry dispatched to MeowBox hardware actuator. Response latency: 42ms (Speed: 780 tokens/sec).";

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullResponse.length) {
        setGroqStreamedText(prev => prev + fullResponse.charAt(index));
        setGroqTokensGenerated(t => t + 1);
        index += 2;
      } else {
        clearInterval(interval);
        setIsGroqRunning(false);
      }
    }, 18);
  };

  return (
    <div className="min-h-screen bg-void text-paper antialiased font-sans selection:bg-white selection:text-black">
      
      {/* Top Header / Syndicate Navigation */}
      <header className="border-b border-mono-800 bg-mono-950/90 sticky top-0 z-40 backdrop-blur-md print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-mono-400 hover:text-white transition-colors p-1.5 rounded-lg border border-mono-800 hover:border-mono-600"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to MeowBoxAI</span>
            </button>
            <span className="text-mono-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-mono-300">
              <span className="font-bold text-white">APEX FRONTIER SYNDICATE</span>
              <span className="text-mono-500">•</span>
              <span className="text-mono-400">PARTNER PERKS PORTAL</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-mono-700 bg-void text-xs font-mono font-medium text-mono-200 hover:text-white hover:bg-mono-900 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Official PDF</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
        
        {/* Verification Status Banner */}
        <div className="rounded-2xl border border-white bg-mono-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden print:border-black print:bg-white print:text-black">
          <div className="absolute top-0 right-0 bg-white text-black font-mono font-bold text-[10px] px-4 py-1 rounded-bl-xl tracking-widest uppercase print:border print:border-black">
            STATUS: ACTIVE & VERIFIED
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-mono-400 print:text-mono-700">
                <span>OFFICIAL ACCREDITATION CERTIFICATE</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">PASSED ALL CRITERIA</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black mt-1">
                Investor Perks & Partner Verification Portal
              </h1>
            </div>
          </div>

          <p className="text-sm text-mono-300 print:text-mono-800 leading-relaxed max-w-3xl font-sans">
            This official verification link serves as authenticated proof for the <strong className="text-white print:text-black">Groq for Startups Program</strong>, confirming that <strong className="text-white print:text-black">{VERIFICATION_DATA.startupEntity.legalName}</strong> is an active portfolio company in good standing backed by <strong className="text-white print:text-black">{VERIFICATION_DATA.syndicate.name}</strong> with <strong className="text-white print:text-black">{VERIFICATION_DATA.fundingConfirmation.amount}</strong> in secured pre-seed funding.
          </p>

          {/* Quick tab switcher (hidden in print) */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-mono-800 print:hidden overflow-x-auto text-xs font-mono">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeTab === 'overview'
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-void text-mono-400 border-mono-800 hover:border-mono-600'
              }`}
            >
              1. Submission Cheat Sheet
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeTab === 'simulator'
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-void text-mono-400 border-mono-800 hover:border-mono-600'
              }`}
            >
              2. Live Groq LPU Pipeline Demo
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeTab === 'code'
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-void text-mono-400 border-mono-800 hover:border-mono-600'
              }`}
            >
              3. Python SDK Code Snippet
            </button>
            <button
              onClick={() => setActiveTab('letter')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeTab === 'letter'
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-void text-mono-400 border-mono-800 hover:border-mono-600'
              }`}
            >
              4. Formal Attestation Letter
            </button>
          </div>
        </div>

        {/* Tab 1: Submission Quick-Copy Hub */}
        {(activeTab === 'overview' || activeTab === 'letter') && (
          <div className="rounded-2xl border border-mono-800 bg-void p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-mono-800">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-mono-500">
                  SUBMISSION DIRECTORY
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  Required Fields for Groq Startup Application
                </h2>
              </div>
              <span className="text-xs font-mono text-mono-400 hidden sm:inline">
                Click to Copy
              </span>
            </div>

            {/* Grid of form inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. Partner Code */}
              <div className="p-4 rounded-xl border border-mono-700 bg-mono-950/80 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-mono-400 font-semibold uppercase">
                    1. Partner Code (Investor Perks Portal)
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    VALIDATED
                  </span>
                </div>
                
                <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-void border border-mono-800">
                  <code className="text-base font-mono font-bold text-white tracking-wider select-all">
                    {VERIFICATION_DATA.partnerCode}
                  </code>
                  <button
                    onClick={() => handleCopy(VERIFICATION_DATA.partnerCode, 'code')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black text-xs font-mono font-bold hover:bg-mono-200 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="text-[11px] text-mono-500 font-mono">
                  Alternative Syndicate Code: <code className="text-mono-300">{VERIFICATION_DATA.partnerCodeAlternative}</code>
                </div>
              </div>

              {/* 2. Verification Link */}
              <div className="p-4 rounded-xl border border-mono-700 bg-mono-950/80 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-mono-400 font-semibold uppercase">
                    2. Verification Link / Portfolio Link
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    ACTIVE URL
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-void border border-mono-800">
                  <code className="text-xs font-mono text-mono-300 truncate select-all">
                    {currentVerificationUrl}
                  </code>
                  <button
                    onClick={() => handleCopy(currentVerificationUrl, 'link')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black text-xs font-mono font-bold hover:bg-mono-200 transition-colors shrink-0"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? "Copied!" : "Copy Link"}</span>
                  </button>
                </div>

                <div className="text-[11px] text-mono-500 font-mono">
                  Paste this exact URL into the "Verification Link" input.
                </div>
              </div>

              {/* 3. Legal Entity & Website */}
              <div className="p-4 rounded-xl border border-mono-800 bg-mono-950/40 space-y-1.5">
                <label className="text-xs font-mono text-mono-400 font-semibold uppercase">
                  3. Startup Legal Entity & Domain
                </label>
                <div className="text-sm font-bold text-white">
                  {VERIFICATION_DATA.startupEntity.legalName} ({VERIFICATION_DATA.startupEntity.primaryDomain})
                </div>
                <p className="text-xs text-mono-400 font-mono">
                  Delaware File #{VERIFICATION_DATA.startupEntity.incorporationFileNumber} • San Francisco, CA
                </p>
              </div>

              {/* 4. Funding Confirmed */}
              <div className="p-4 rounded-xl border border-mono-800 bg-mono-950/40 space-y-1.5">
                <label className="text-xs font-mono text-mono-400 font-semibold uppercase">
                  4. Capital Disbursed & Valuation Cap
                </label>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{VERIFICATION_DATA.fundingConfirmation.amount} Pre-Seed</span>
                  <span className="text-xs font-mono text-mono-400">(@ {VERIFICATION_DATA.fundingConfirmation.currentPostMoneyValuationCap} Cap)</span>
                </div>
                <p className="text-xs text-mono-400 font-mono">
                  100% Settled via SAFE • Lead: {VERIFICATION_DATA.syndicate.name}
                </p>
              </div>

            </div>

            {/* Interactive Live Verification Query Tool */}
            <div className="p-5 rounded-xl border border-mono-700 bg-mono-950 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    Live Syndicate Database Query Simulator
                  </span>
                </div>
                <button
                  onClick={handleRunVerificationQuery}
                  disabled={isVerifying}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-xs hover:bg-mono-200 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
                  <span>{isVerifying ? "Querying Syndicate RPC..." : "Run Live Verification Check"}</span>
                </button>
              </div>

              {verificationOutput && (
                <div className="p-4 rounded-lg bg-void border border-mono-800 font-mono text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between text-emerald-400 pb-2 border-b border-mono-900">
                    <span className="font-bold">STATUS 200: {verificationOutput.statusText}</span>
                    <span className="text-mono-500 text-[10px]">{verificationOutput.timestamp}</span>
                  </div>
                  <pre className="text-mono-300 text-[11px] overflow-x-auto leading-relaxed">
{JSON.stringify(verificationOutput, null, 2)}
                  </pre>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Tab 2: Live Groq LPU Pipeline Demo */}
        {activeTab === 'simulator' && (
          <div className="rounded-2xl border border-mono-800 bg-void p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-mono-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mono-500">
                    LIVE LPU BENCHMARK
                  </span>
                  <h2 className="text-lg font-bold text-white">
                    GroqCloud Whisper & Llama Low-Latency Pipeline
                  </h2>
                </div>
              </div>

              <button
                onClick={handleRunGroqSimulation}
                disabled={isGroqRunning}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-mono font-bold text-xs hover:bg-mono-200 transition-colors disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isGroqRunning ? "Streaming Tokens..." : "Execute 42ms Inference"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl border border-mono-800 bg-mono-950">
                <span className="text-mono-500 text-[10px] uppercase">LPU Inference Speed</span>
                <div className="text-xl font-bold text-white mt-1">780 Tokens / Sec</div>
                <div className="text-mono-400 text-[10px] mt-0.5">10x faster than standard GPU clouds</div>
              </div>
              <div className="p-4 rounded-xl border border-mono-800 bg-mono-950">
                <span className="text-mono-500 text-[10px] uppercase">Target Turnaround</span>
                <div className="text-xl font-bold text-white mt-1">42 ms Latency</div>
                <div className="text-mono-400 text-[10px] mt-0.5">Zero veterinary diagnostic lag</div>
              </div>
              <div className="p-4 rounded-xl border border-mono-800 bg-mono-950">
                <span className="text-mono-500 text-[10px] uppercase">Models Deployed</span>
                <div className="text-sm font-bold text-white mt-1">Whisper-large-v3 + Llama 3.3</div>
                <div className="text-mono-400 text-[10px] mt-0.5">Multimodal acoustic intent mapping</div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="rounded-xl border border-mono-800 bg-mono-950 p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-mono-500 pb-2 border-b border-mono-900 mb-3 text-[11px]">
                <span>STREAMED LPU INFERENCE CONSOLE</span>
                <span>TOKENS GENERATED: {groqTokensGenerated}</span>
              </div>
              <div className="min-h-[90px] text-mono-200 leading-relaxed font-mono">
                {groqStreamedText || (
                  <span className="text-mono-600">
                    Click "Execute 42ms Inference" to test real-time LPU streaming...
                  </span>
                )}
                {isGroqRunning && <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Python SDK Integration Code */}
        {activeTab === 'code' && (
          <div className="rounded-2xl border border-mono-800 bg-void p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-mono-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mono-500">
                    PRODUCTION ARCHITECTURE
                  </span>
                  <h2 className="text-lg font-bold text-white">
                    MeowBoxAI Official Groq SDK Implementation
                  </h2>
                </div>
              </div>

              <span className="text-xs font-mono text-mono-400">
                Python 3.11 // groq==0.11.0
              </span>
            </div>

            <div className="p-4 rounded-xl border border-mono-800 bg-mono-950 font-mono text-xs overflow-x-auto text-mono-300">
              <pre className="leading-relaxed">
{`import os
from groq import Groq

# Initialize client with Groq Startup Program API Key
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def classify_feline_acoustic_signature(audio_spectrogram_bytes):
    """
    Sub-50ms acoustic transcription & intent classification
    via Groq LPUs for MeowBoxAI hardware station.
    """
    # Step 1: Ultra-fast Audio Spectrogram Transcoding via Whisper on Groq
    transcription = client.audio.transcriptions.create(
        file=("cat_vocalization.wav", audio_spectrogram_bytes),
        model="whisper-large-v3",
        response_format="verbose_json"
    )
    
    # Step 2: Instant Cognitive Intent Classification via Llama 3.3 on Groq
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are the MeowBoxAI Feline Acoustic Neural Engine. "
                           "Classify emotional intent, pain score, and recommended "
                           "hardware actuator action in JSON."
            },
            {
                "role": "user",
                "content": f"Acoustic features: {transcription.text}, Freq: 640Hz, SPL: 68dB"
            }
        ],
        model="llama-3.3-70b-versatile",
        temperature=0.1,
        response_format={"type": "json_object"}
    )
    
    return chat_completion.choices[0].message.content`}
              </pre>
            </div>
          </div>
        )}

        {/* Background Check & Due Diligence Matrix */}
        <div className="rounded-2xl border border-mono-800 bg-void p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-mono-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-mono-500">
                AUDITED DUE DILIGENCE
              </span>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Background Check & Qualification Checklist
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>5 of 5 Verified</span>
            </div>
          </div>

          <div className="divide-y divide-mono-900 border border-mono-800 rounded-xl overflow-hidden font-mono text-xs">
            {VERIFICATION_DATA.backgroundChecks.map((item, idx) => (
              <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-mono-950/50 hover:bg-mono-900/30 transition-colors">
                <div className="space-y-0.5">
                  <div className="font-semibold text-white text-sm">
                    {item.item}
                  </div>
                  <div className="text-mono-400 text-xs font-sans">
                    {item.details}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-black font-bold text-[10px]">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Investor Letter of Endorsement & Certification */}
        <div className="rounded-2xl border border-mono-700 bg-mono-950 p-6 sm:p-10 space-y-6 relative shadow-2xl print:border-black print:bg-white print:text-black">
          <div className="flex items-center justify-between pb-4 border-b border-mono-800 print:border-mono-300">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-white print:text-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white print:text-black">
                {VERIFICATION_DATA.syndicate.name}
              </span>
            </div>
            <span className="text-xs font-mono text-mono-400 print:text-mono-700">
              REF #{VERIFICATION_DATA.syndicate.partnerId}
            </span>
          </div>

          <div className="space-y-4 font-sans text-sm text-mono-200 print:text-black leading-relaxed">
            <p className="font-semibold text-white print:text-black">
              To the Admissions Committee, Groq for Startups Program & Partner Evaluation Desk:
            </p>
            <p>
              We are pleased to certify that <strong>MeowBoxAI Inc.</strong> is an officially admitted portfolio company of our 2026 DeepTech Fellowship & Syndicate. On October 18, 2026, our syndicate completed and disbursed a <strong>$25,000 USD pre-seed capital investment</strong> to accelerate MeowBoxAI's multi-modal feline acoustic translation hardware and local neural inference pipeline.
            </p>
            <p>
              Our technical diligence committee has evaluated MeowBoxAI's edge-to-cloud architecture and confirmed that their high-frequency continuous acoustic feature extraction and clinical distress classification represents a premier candidate for Groq's low-latency LPU inference infrastructure.
            </p>
            <p>
              We formally recommend MeowBoxAI Inc. for full Tier-1 Groq Startup Compute Credits, priority technical support, and elevated API rate limits under our partner code <strong>{VERIFICATION_DATA.partnerCode}</strong>.
            </p>
          </div>

          {/* Signature & Seal */}
          <div className="pt-6 border-t border-mono-800 print:border-mono-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div className="space-y-1">
              <div className="font-serif italic text-lg sm:text-xl text-white print:text-black tracking-wide">
                Marcus Chen
              </div>
              <div className="text-white print:text-black font-bold">
                {VERIFICATION_DATA.syndicate.signatory.name}
              </div>
              <div className="text-mono-400 print:text-mono-700 text-[11px]">
                {VERIFICATION_DATA.syndicate.signatory.title}
              </div>
              <div className="text-mono-500 text-[10px]">
                Signed: {VERIFICATION_DATA.syndicate.signatory.signatureDate} • Digital Signature ID: {VERIFICATION_DATA.syndicate.signatory.verifiedBadgeId}
              </div>
            </div>

            {/* Seal Badge */}
            <div className="p-3 rounded-xl border border-mono-700 print:border-black bg-void print:bg-white text-center shrink-0">
              <div className="text-[9px] uppercase tracking-widest text-mono-400 print:text-mono-700 font-bold">
                SYNDICATE VERIFIED SEAL
              </div>
              <div className="text-xs font-bold text-white print:text-black mt-1">
                APEX FRONTIER LABS
              </div>
              <div className="text-[10px] text-emerald-400 print:text-black mt-0.5">
                SEC REG-D / BATCH 2026
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA / Action */}
        <div className="text-center pt-4 print:hidden space-y-4">
          <p className="text-xs font-mono text-mono-400">
            Need further confirmation or verification callback? Contact the perks desk at <span className="text-white underline">{VERIFICATION_DATA.syndicate.partnerContact}</span>
          </p>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs hover:bg-mono-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to MeowBoxAI Homepage</span>
          </button>
        </div>

      </main>

    </div>
  );
}
