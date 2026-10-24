import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FUNDING_DETAILS } from '../data/startups';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: `How was MeowBoxAI funded with ${FUNDING_DETAILS.amount}, and who backed it?`,
      a: `MeowBoxAI closed a $25,000 USD pre-seed funding round in October 2026, syndicated by Apex Frontier Syndicate and Horizon DeepTech Lab alongside distinguished feline bio-acoustics angel investors. The funding is fully disbursed under a post-money SAFE instrument at a $2.5M valuation cap to finance CNC hardware molds, on-device audio model fine-tuning, and the first 50 pilot test units.`
    },
    {
      q: "What other startups were funded in the same cohort?",
      a: "The syndicate also funded a select group of breakthrough deep-tech and companion-tech startups in the 2026 batch, including NeuroBark ($25,000 - canine cardiac & wheeze collar), Synthetix Bio ($50,000 - Fel d 1 allergen-neutralizing proteins), KittOS ($25,000 - deterministic microkernel for pet robotics), VoxelFarm ($35,000 - soft-robotic harvesters), Pawsitive Health ($25,000 - spectroscopic feline kidney health sensing), and AeroClaw X ($40,000 - indoor whisper-quiet cat exercise micro-drones)."
    },
    {
      q: "How does MeowBoxAI actually translate cat vocalisations?",
      a: "Domestic cats developed vocal meowing almost exclusively to communicate with humans. MeowBoxAI uses a directional quad-MEMS microphone array to capture 96kHz acoustic waveforms, converts them to high-resolution mel-spectrograms, and runs them through our 8-bit quantized transformer model on an on-device 1.8 TOPS NPU. It maps pitch, modulation, duration, and cadence against 145,000+ veterinary ethologist-verified audio samples to identify intent (hunger, overstimulation, affection, territorial defense, pain) in 42 milliseconds."
    },
    {
      q: "Does any audio or video stream to the cloud or third-party servers?",
      a: "Never. All neural inference and camera vision processing occur strictly on the hardware unit's local NPU. No audio recordings, video frames, or household telemetry ever leave your device without explicit cryptographically signed export by the owner. It works 100% offline even if your internet connection is severed."
    },
    {
      q: "When will the initial 50 hardware units ship?",
      a: "Alpha pilot units funded by our $25K pre-seed check will begin shipping to certified veterinary partners and Batch-01 early waitlist reservations in Q1 2027. Early waitlist members will receive priority invitation tokens."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-void border-b border-mono-800 light:border-mono-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mono-700 light:border-mono-300 text-xs font-mono font-medium text-mono-300 light:text-mono-700 mb-3 bg-mono-900/50 light:bg-mono-100">
            <HelpCircle className="w-3.5 h-3.5 text-white light:text-black" />
            <span>COMMONLY INQUIRED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-paper overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans font-semibold text-sm sm:text-base text-white light:text-black hover:text-mono-200"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white light:text-black' : 'text-mono-500'}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-mono-300 light:text-mono-700 leading-relaxed font-sans border-t border-mono-900 light:border-mono-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
