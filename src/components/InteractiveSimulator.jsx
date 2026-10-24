import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Square, 
  Volume2, 
  Radio, 
  Cpu, 
  Activity, 
  Sparkles, 
  CheckCircle, 
  Check, 
  Disc, 
  Sliders, 
  Zap,
  VolumeX,
  Gauge
} from 'lucide-react';
import { PRESET_MEOW_SAMPLES } from '../data/startups';

export default function InteractiveSimulator() {
  const [selectedSample, setSelectedSample] = useState(PRESET_MEOW_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDispensing, setIsDispensing] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState(true);
  const [analysisProgress, setAnalysisProgress] = useState(100);
  const [computeMode, setComputeMode] = useState('groq'); // 'edge' | 'groq'
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // High-fidelity FM acoustic cat vocalisation synthesizer using Web Audio API
  const playRealisticFelineAudio = (baseFreqHz) => {
    if (!audioFeedback) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const duration = 0.55;

      // Carrier Oscillator (fundamental vocal pitch)
      const carrier = ctx.createOscillator();
      carrier.type = 'triangle';

      // Modulator Oscillator (cat throat articulation / meow vibrato)
      const modulator = ctx.createOscillator();
      modulator.type = 'sine';
      modulator.frequency.setValueAtTime(14, now); // 14Hz feline flutter

      const modGain = ctx.createGain();
      modGain.gain.setValueAtTime(baseFreqHz * 0.12, now);

      modulator.connect(modGain);
      modGain.connect(carrier.frequency);

      // Natural pitch glide: Rise then soft fall (classic feline acoustic inflection)
      carrier.frequency.setValueAtTime(baseFreqHz * 0.85, now);
      carrier.frequency.exponentialRampToValueAtTime(baseFreqHz * 1.35, now + duration * 0.35);
      carrier.frequency.exponentialRampToValueAtTime(baseFreqHz * 0.75, now + duration);

      // Lowpass Filter for throat body resonance
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(baseFreqHz * 2.8, now);
      filter.Q.setValueAtTime(4.0, now);

      // Main Gain Envelope
      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.0001, now);
      mainGain.gain.linearRampToValueAtTime(0.12, now + 0.08);
      mainGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      carrier.connect(filter);
      filter.connect(mainGain);
      mainGain.connect(ctx.destination);

      modulator.start(now);
      carrier.start(now);

      modulator.stop(now + duration);
      carrier.stop(now + duration);
    } catch (e) {
      console.warn("Web Audio API Notice:", e);
    }
  };

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setIsPlaying(true);
    setAnalysisProgress(0);

    const freqNumber = parseInt(sample.frequency) || 540;
    playRealisticFelineAudio(freqNumber);

    if (sample.hardwareState === 'DISPENSE_ACTIVE') {
      setIsDispensing(true);
      setTimeout(() => setIsDispensing(false), 2400);
    }

    // Animate classification progress
    const stepSpeed = computeMode === 'groq' ? 20 : 40;
    let current = 0;
    const interval = setInterval(() => {
      current += 25;
      if (current >= 100) {
        setAnalysisProgress(100);
        clearInterval(interval);
      } else {
        setAnalysisProgress(current);
      }
    }, stepSpeed);

    setTimeout(() => {
      setIsPlaying(false);
    }, 1800);
  };

  // Oscilloscope Canvas Visualizer Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      const bars = 52;
      const barWidth = width / bars;

      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        const normalizedIndex = (i % selectedSample.audioPattern.length);
        const intensity = selectedSample.audioPattern[normalizedIndex];
        
        let amplitude = (intensity / 100) * (height * 0.38);
        if (isPlaying) {
          amplitude *= 0.6 + Math.sin(phase + i * 0.4) * 0.4;
        } else {
          amplitude *= 0.25 + Math.sin(phase * 0.3 + i * 0.2) * 0.15;
        }

        ctx.moveTo(x + barWidth / 2, centerY - amplitude);
        ctx.lineTo(x + barWidth / 2, centerY + amplitude);
      }
      ctx.stroke();

      phase += isPlaying ? (computeMode === 'groq' ? 0.28 : 0.2) : 0.04;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [selectedSample, isPlaying, computeMode]);

  return (
    <section id="simulator-section" className="py-20 md:py-28 bg-void border-b border-mono-800 light:border-mono-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mono-700 light:border-mono-300 text-xs font-mono font-medium text-mono-300 light:text-mono-700 mb-3 bg-mono-900/50 light:bg-mono-100">
              <Radio className="w-3.5 h-3.5 text-white light:text-black animate-pulse" />
              <span>INTERACTIVE NPU EMULATOR // GROQ LPU ACCELERATED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-black">
              Test the MeowBoxAI Acoustic Model
            </h2>
            <p className="mt-4 text-mono-300 light:text-mono-700 text-base sm:text-lg">
              Click any verified feline acoustic signature below to test real-time frequency decomposition, intent classification, and hardware treat dispensing.
            </p>
          </div>

          {/* Compute Acceleration Switcher */}
          <div className="p-1 rounded-xl border border-mono-800 light:border-mono-200 bg-mono-950 light:bg-mono-100 flex items-center text-xs font-mono">
            <button
              onClick={() => setComputeMode('groq')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                computeMode === 'groq'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-mono-400 hover:text-white light:hover:text-black'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Groq LPU (34ms / 780 T/s)</span>
            </button>
            <button
              onClick={() => setComputeMode('edge')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                computeMode === 'edge'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-mono-400 hover:text-white light:hover:text-black'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Edge NPU (42ms)</span>
            </button>
          </div>
        </div>

        {/* The Interactive Simulator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sample Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-mono-400 light:text-mono-500 mb-2 px-1">
              <span>SELECT AUDIO SPECTROGRAM</span>
              <button 
                onClick={() => setAudioFeedback(!audioFeedback)}
                className="flex items-center gap-1.5 hover:text-white light:hover:text-black transition-colors"
              >
                {audioFeedback ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{audioFeedback ? "Sound: ON (Synthetic Purr/Meow)" : "Muted"}</span>
              </button>
            </div>

            {PRESET_MEOW_SAMPLES.map((sample) => {
              const isSelected = selectedSample.id === sample.id;
              return (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                    isSelected 
                      ? 'border-white light:border-black bg-mono-900 light:bg-mono-100 shadow-md scale-[1.01]' 
                      : 'border-mono-800 light:border-mono-200 bg-mono-950/40 light:bg-mono-50 hover:border-mono-600 light:hover:border-mono-400'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white light:bg-black' : 'bg-mono-600'}`} />
                      <span className="font-sans font-semibold text-sm text-white light:text-black">
                        {sample.title}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-mono-400 light:text-mono-600 flex items-center gap-3">
                      <span>Freq: {sample.frequency}</span>
                      <span>•</span>
                      <span>SPL: {sample.decibels}</span>
                      <span>•</span>
                      <span className="font-bold text-mono-200 light:text-mono-800">{sample.confidence} match</span>
                    </div>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-mono-700 light:border-mono-300 bg-void light:bg-paper text-white light:text-black hover:scale-105 transition-transform">
                      {isSelected && isPlaying ? (
                        <Activity className="w-4 h-4 animate-spin text-white light:text-black" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current" />
                      )}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Terminal & Hardware Actuation Deck */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-mono-700 light:border-mono-300 bg-mono-950 light:bg-paper p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-mono-800 light:border-mono-200 text-xs font-mono">
                <div className="flex items-center gap-2">
                  {computeMode === 'groq' ? (
                    <Zap className="w-4 h-4 text-white light:text-black" />
                  ) : (
                    <Cpu className="w-4 h-4 text-white light:text-black" />
                  )}
                  <span className="font-bold text-white light:text-black">
                    {computeMode === 'groq' ? "GROQCLOUD LPU ACCELERATOR" : "ON-BOARD EDGE NPU"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-mono-400 light:text-mono-500">
                  <span className="font-bold text-white light:text-black">
                    LATENCY: {computeMode === 'groq' ? "34MS" : "42MS"}
                  </span>
                  <span>|</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
              </div>

              {/* Real-time Oscilloscope Canvas */}
              <div className="relative rounded-xl border border-mono-800 light:border-mono-200 bg-void p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-mono-400 mb-2">
                  <span>REAL-TIME 96kHz MEMS SPECTRAL ARRAY</span>
                  <span className="text-white font-mono">{selectedSample.frequency} // {selectedSample.decibels}</span>
                </div>

                <div className="w-full h-28 bg-void flex items-center justify-center overflow-hidden">
                  <canvas 
                    ref={canvasRef} 
                    width={560} 
                    height={112} 
                    className="w-full h-full block" 
                  />
                </div>

                {/* Progress bar of classification */}
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-mono-400">
                  <span>
                    {computeMode === 'groq' ? "GROQ LPU TRANSFORMER TOKENIZATION" : "LOCAL 1.8 TOPS INFERENCE"}
                  </span>
                  <span className="text-white font-bold">{analysisProgress}%</span>
                </div>
                <div className="w-full bg-mono-900 h-1.5 rounded-full overflow-hidden mt-1">
                  <div 
                    className="bg-white h-full transition-all duration-150"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
              </div>

              {/* Decoded Human Intent Box */}
              <div className="p-5 rounded-xl border border-mono-800 light:border-mono-200 bg-mono-900/60 light:bg-mono-50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-mono-400 light:text-mono-500">
                    DECODED FELINE INTENT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white">
                    {selectedSample.intent}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-medium text-white light:text-black italic">
                  {selectedSample.translation}
                </p>

                <div className="pt-2 border-t border-mono-800 light:border-mono-200 text-xs font-mono text-mono-300 light:text-mono-700 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-white light:text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="text-mono-400 font-semibold">Autonomous Actuation: </span>
                    <span>{selectedSample.recommendedAction}</span>
                  </div>
                </div>
              </div>

              {/* Hardware Actuation State Simulator */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Dispenser Chamber Status */}
                <div className="p-4 rounded-xl border border-mono-800 light:border-mono-200 bg-void light:bg-mono-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-mono-400 light:text-mono-500">
                      Smart Micro-Dispenser
                    </div>
                    <div className="text-sm font-bold font-mono text-white light:text-black mt-0.5">
                      {isDispensing ? "DISPENSING (8G)..." : "HERMETIC SEALED"}
                    </div>
                  </div>
                  <div className={`w-3.5 h-3.5 rounded-full ${isDispensing ? 'bg-white light:bg-black animate-ping' : 'bg-mono-700'}`} />
                </div>

                {/* Laser / Sensory Perch Status */}
                <div className="p-4 rounded-xl border border-mono-800 light:border-mono-200 bg-void light:bg-mono-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-mono-400 light:text-mono-500">
                      Gimbal Enrichment
                    </div>
                    <div className="text-sm font-bold font-mono text-white light:text-black mt-0.5">
                      {selectedSample.hardwareState === 'LASER_GIMBAL_ACTIVE' && isPlaying ? "ERRATIC TRACKING" : "STANDBY (IDLE)"}
                    </div>
                  </div>
                  <div className={`w-3.5 h-3.5 rounded-full ${selectedSample.hardwareState === 'LASER_GIMBAL_ACTIVE' && isPlaying ? 'bg-white light:bg-black animate-pulse' : 'bg-mono-700'}`} />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
