import { useState, useEffect } from 'react';
import { SparklesIcon, BeakerIcon, BookOpenIcon, BoltIcon } from '@heroicons/react/24/outline';

const AlchemyCircle = ({ size, delay, speed }: { size: number; delay: string; speed: string }) => (
  <div 
    className="alchemy-circle animate-spin-slow"
    style={{ 
      width: size, 
      height: size, 
      animationDelay: delay,
      animationDuration: speed
    }}
  />
);

const RuneNavItem = ({ rune, label }: { rune: string; label: string }) => (
  <div className="group flex flex-col items-center cursor-pointer transition-all duration-300">
    <span className="text-2xl rune-glow group-hover:text-mutant transition-colors">{rune}</span>
    <span className="text-[10px] opacity-0 group-hover:opacity-100 font-mono tracking-tighter text-aether transition-opacity">
      {label}
    </span>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('transmute');

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center py-12 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <AlchemyCircle size={600} delay="0s" speed="40s" />
        <AlchemyCircle size={400} delay="-5s" speed="30s" />
        <div className="absolute top-1/4 right-[-100px]">
          <AlchemyCircle size={300} delay="-2s" speed="25s" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 glass-panel px-8 py-3 z-50 flex gap-8 items-center border-aether/10">
        <RuneNavItem rune="ᛉ" label="AETHER" />
        <RuneNavItem rune="ᛊ" label="KNOWLEDGE" />
        <RuneNavItem rune="ᛏ" label="TRANSMUTE" />
        <div className="w-[1px] h-6 bg-alchemy-gold/30 mx-2" />
        <RuneNavItem rune="ᛟ" label="VAULT" />
      </nav>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-5xl mt-20 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center mb-24 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-aether/30 rounded-full text-xs font-mono text-aether mb-6 bg-aether/5 backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4" />
            CELESTIAL FREQUENCY: 432HZ
          </div>
          <h1 className="text-6xl md:text-8xl mb-4 bg-gradient-to-b from-alchemy-gold via-yellow-200 to-alchemy-gold bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(184,134,11,0.3)]">
            AETHERIS
          </h1>
          <p className="text-sm md:text-lg tracking-[0.3em] text-aether/60 uppercase font-serif">
            The Celestial Alchemist's Grimoire
          </p>
        </section>

        {/* Interaction Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
          <div className={`glass-panel p-8 liquid-border cursor-pointer transition-transform hover:scale-[1.02] ${activeTab === 'transmute' ? 'border-aether/60' : ''}`}
               onClick={() => setActiveTab('transmute')}>
            <div className="flex justify-between items-start mb-6">
              <BeakerIcon className="w-8 h-8 text-aether" />
              <span className="text-[10px] font-mono text-alchemy-gold opacity-50">STG-01</span>
            </div>
            <h3 className="text-xl mb-4">Transmutation</h3>
            <p className="text-xs text-gray-400 font-serif leading-relaxed">
              Convert raw spectral energy into crystalline structures of pure knowledge.
            </p>
          </div>

          <div className="glass-panel p-8 hover:border-mutant/40 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(255,0,122,0.1)] group">
            <div className="flex justify-between items-start mb-6">
              <BookOpenIcon className="w-8 h-8 text-mutant group-hover:animate-pulse" />
              <span className="text-[10px] font-mono text-alchemy-gold opacity-50">LIB-42</span>
            </div>
            <h3 className="text-xl mb-4 text-mutant/80">Forgotten Knowledge</h3>
            <p className="text-xs text-gray-400 font-serif leading-relaxed">
              Unlock the secrets of the ancients stored within the void of the multiverse.
            </p>
          </div>

          <div className="glass-panel p-8 hover:border-alchemy-gold transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <div className="w-2 h-2 rounded-full bg-aether animate-pulse" />
            </div>
            <div className="flex justify-between items-start mb-6">
              <BoltIcon className="w-8 h-8 text-alchemy-gold" />
              <span className="text-[10px] font-mono text-alchemy-gold opacity-50">PWR-ON</span>
            </div>
            <h3 className="text-xl mb-4 text-alchemy-gold">Arcane Conduit</h3>
            <p className="text-xs text-gray-400 font-serif leading-relaxed">
              Channel the power of celestial bodies into functional digital constructs.
            </p>
          </div>
        </div>

        {/* Detail View */}
        <section className="mt-16 w-full px-6">
          <div className="glass-panel p-1 border-white/5">
            <div className="bg-void/40 backdrop-blur-xl rounded-lg p-12 border border-alchemy-gold/10 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl text-aether rune-glow">Current Operation</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[1px] bg-aether/20 group-hover:w-12 group-hover:bg-aether transition-all" />
                      <span className="text-xs font-mono text-aether/40">0{i} — INITIALIZING SEQUENCE</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-3 bg-alchemy-gold/10 border border-alchemy-gold/30 hover:bg-alchemy-gold/20 text-alchemy-gold text-xs tracking-widest uppercase transition-all mt-6">
                  Begin Synthesis
                </button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                   <div className="absolute inset-0 bg-aether/20 blur-3xl rounded-full" />
                   <div className="w-48 h-48 border-4 border-alchemy-gold/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-32 h-32 border border-aether/40 rounded-full flex items-center justify-center animate-pulse">
                         <div className="w-4 h-4 bg-aether rounded-full rune-glow" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-32 opacity-20 text-[10px] font-mono tracking-[0.5em] text-center mb-8">
          DESIGNED IN THE VOID // © 2026 CELESTIAL ALCHEMY LABS
        </footer>
      </main>
    </div>
  );
}
