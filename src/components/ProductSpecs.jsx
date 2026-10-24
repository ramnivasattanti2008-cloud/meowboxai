import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Wifi, 
  Volume2, 
  Eye, 
  Feather, 
  BatteryCharging,
  Maximize2
} from 'lucide-react';

export default function ProductSpecs() {
  const [activeTab, setActiveTab] = useState('hardware');

  const hardwareSpecs = [
    { label: "Acoustic Sensor Array", val: "Quad Knowles MEMS (96kHz / 24-bit) with hardware beamforming" },
    { label: "Neural Compute Engine", val: "Custom on-device NPU delivering 1.8 TOPS @ 2.1W peak" },
    { label: "Vision Subsystem", val: "Dual 4K HDR ultra-wide sensors + 940nm invisible IR night vision" },
    { label: "Dispenser Mechanism", val: "Optically verified hermetic rotary carousel (8g to 25g precision)" },
    { label: "Enclosure Construction", val: "CNC-milled 6063 aerospace anodized aluminum with ceramic bowl" },
    { label: "Audio Output System", val: "Solid-state bone conduction & 360° diffuse acoustic driver" },
    { label: "Power & Battery", val: "Dual USB-C PD 3.0 + onboard 48-hour emergency lithium-iron backup" },
    { label: "Wireless Stack", val: "Wi-Fi 6E, BLE 5.4, Thread / Matter local automation protocol" }
  ];

  const softwareSpecs = [
    { label: "Inference Latency", val: "42ms average response time on 8-bit quantized Audio-LLM" },
    { label: "Acoustic Accuracy", val: "98.4% across 14 feline registers verified by clinical ethologists" },
    { label: "Data Privacy", val: "100% offline local processing; zero cloud audio/video transmission" },
    { label: "Firmware Kernel", val: "Hard real-time FreeRTOS with memory-safe cryptographic isolation" },
    { label: "Health Tracking", val: "Continuous daily hydration, appetite frequency, and vocal strain telemetry" },
    { label: "Smart Home Integration", val: "Apple HomeKit, Home Assistant, Matter native integration" }
  ];

  return (
    <section id="specs-section" className="py-20 md:py-28 bg-void border-b border-mono-800 light:border-mono-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mono-700 light:border-mono-300 text-xs font-mono font-medium text-mono-300 light:text-mono-700 mb-3 bg-mono-900/50 light:bg-mono-100">
              <Terminal className="w-3.5 h-3.5 text-white light:text-black" />
              <span>TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-black">
              Engineered with Extreme Rigor
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-lg border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-mono-100 text-xs font-mono">
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'hardware'
                  ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white font-bold'
                  : 'text-mono-400 light:text-mono-600 hover:text-white light:hover:text-black'
              }`}
            >
              Hardware Architecture
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'software'
                  ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white font-bold'
                  : 'text-mono-400 light:text-mono-600 hover:text-white light:hover:text-black'
              }`}
            >
              NPU & Software Stack
            </button>
          </div>
        </div>

        {/* Specs Table & Schematics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Specs Table */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-paper divide-y divide-mono-900 light:divide-mono-100 overflow-hidden shadow-xl">
              {(activeTab === 'hardware' ? hardwareSpecs : softwareSpecs).map((spec, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-mono-900/30 light:hover:bg-mono-50 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-mono-400 light:text-mono-500 font-semibold sm:w-1/3">
                    {spec.label}
                  </span>
                  <span className="font-sans text-sm text-white light:text-black font-medium sm:w-2/3 sm:text-right">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Blueprint / Wireframe Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-mono-50 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between text-xs font-mono text-mono-400 pb-3 border-b border-mono-800 light:border-mono-200">
                <span>CAD BLUEPRINT // MB-REV2</span>
                <span className="text-white light:text-black font-bold">SCALE 1:1</span>
              </div>

              {/* Blueprint Geometric Wireframe */}
              <div className="h-64 rounded-xl border border-dashed border-mono-700 light:border-mono-300 bg-void light:bg-paper p-4 relative flex items-center justify-center overflow-hidden">
                
                {/* Crosshairs & grid markers */}
                <div className="absolute top-3 left-3 text-[9px] font-mono text-mono-600">POS [0,0,0]</div>
                <div className="absolute bottom-3 right-3 text-[9px] font-mono text-mono-600">DIM 180×140×95 mm</div>
                
                {/* Wireframe Box Projection */}
                <svg className="w-52 h-52 text-white light:text-black stroke-current fill-none stroke-[1.2]" viewBox="0 0 200 200">
                  {/* Outer cube */}
                  <polygon points="50,60 150,60 180,90 80,90" className="opacity-80" />
                  <polygon points="50,60 80,90 80,160 50,130" className="opacity-90" />
                  <polygon points="80,90 180,90 180,160 80,160" className="opacity-100" />
                  
                  {/* Internal lens cylinder */}
                  <circle cx="130" cy="125" r="22" strokeDasharray="3 3" className="opacity-60" />
                  <circle cx="130" cy="125" r="8" className="opacity-90 fill-white light:fill-black" />

                  {/* Micro-dispenser slot */}
                  <rect x="95" y="145" width="70" height="8" rx="2" className="opacity-75" />

                  {/* Acoustic microphone dots */}
                  <circle cx="95" cy="105" r="3" className="fill-current" />
                  <circle cx="165" cy="105" r="3" className="fill-current" />

                  {/* Dimension lines */}
                  <line x1="40" y1="60" x2="40" y2="130" strokeDasharray="2 2" className="opacity-40" />
                  <line x1="80" y1="170" x2="180" y2="170" strokeDasharray="2 2" className="opacity-40" />
                </svg>

              </div>

              {/* Quality & Environmental Commitments */}
              <div className="space-y-3 text-xs font-mono text-mono-300 light:text-mono-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white light:text-black shrink-0" />
                  <span>100% Recyclable Billet 6063 Aluminum</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white light:text-black shrink-0" />
                  <span>Zero Lead / RoHS & Pet-Safe Ingestion Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white light:text-black shrink-0" />
                  <span>Sub-25dB Whisper-Quiet Magnetic Dispenser Steppers</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
