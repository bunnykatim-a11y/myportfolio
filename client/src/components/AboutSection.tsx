import React from 'react'
import { soundManager } from '../utils/sound'
import { Sparkles, Terminal, Cpu, Compass, Globe2, QrCode, Wifi } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const infoCards = [
    {
      icon: Terminal,
      title: 'Creative Engineering',
      desc: 'Obsessed with micro-interactions, responsive layouts, and performance-first web animations.',
      accent: 'border-lime-500/30 text-[#ccff00]',
    },
    {
      icon: Cpu,
      title: 'AI Exploration',
      desc: 'Integrating language models, neural visualizers, and intelligent automation into dynamic web tools.',
      accent: 'border-purple-500/30 text-purple-400',
    },
    {
      icon: Compass,
      title: '3D & Interactivity',
      desc: 'Experimenting with WebGL, Three.js shaders, and tactile visual depth on modern screens.',
      accent: 'border-cyan-500/30 text-cyan-400',
    },
    {
      icon: Globe2,
      title: 'Design Systems',
      desc: 'Creating coherent component architectures with crisp dark themes and refined typography.',
      accent: 'border-emerald-500/30 text-emerald-400',
    },
  ]

  return (
    <section id="about" className="relative py-28 px-5 sm:px-8 border-t border-white/[0.05]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-950/20 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>01 // BACKGROUND &amp; VISION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white uppercase">
            A LITTLE ABOUT ME<span className="text-[#ccff00]">.</span>
          </h2>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: ID Card Avatar Badge */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-2">
            
            {/* Lanyard Top Attachment (Strap & Metallic Clip) */}
            <div className="flex flex-col items-center -mb-3 z-20 pointer-events-none">
              {/* Lanyard Woven Strap */}
              <div className="w-10 h-10 bg-gradient-to-b from-neutral-800 via-[#181d2c] to-[#101422] border-x border-white/10 shadow-lg relative flex items-center justify-center">
                <div className="w-1 h-full bg-[#ccff00]/60" />
              </div>
              {/* Brushed Metal Badge Clip */}
              <div className="w-12 h-3.5 bg-gradient-to-r from-neutral-300 via-white to-neutral-300 rounded-sm shadow-md border border-white/60 flex items-center justify-center">
                <div className="w-4 h-1 bg-neutral-600 rounded-full" />
              </div>
              {/* Vinyl Clip Loop */}
              <div className="w-4 h-2.5 bg-white/20 border-x border-b border-white/40 rounded-b-sm" />
            </div>

            {/* ID Card Badge Container */}
            <div className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-[#121626]/95 via-[#0b0e1b]/95 to-[#060812]/95 border border-white/15 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(204,255,0,0.15)] hover:border-[#ccff00]/40 group">
              
              {/* Glossy Reflection Sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Lanyard Punch Hole Slot */}
              <div className="w-16 h-3 mx-auto rounded-full bg-[#03050a] border border-white/20 shadow-inner mb-4" />

              {/* ID Badge Header (Chip, Pass Type & NFC) */}
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                {/* Gold IC Contact Chip */}
                <div className="w-10 h-7 rounded bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-0.5 border border-amber-200/60 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-[1px] bg-amber-900/40 my-auto" />
                  <div className="h-full w-[1px] bg-amber-900/40 mx-auto absolute inset-0" />
                  <div className="w-2.5 h-3 border border-amber-900/50 rounded-sm mx-auto z-10" />
                </div>

                {/* Badge Identification Header */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    <span>ACCESS PASS</span>
                    <Wifi className="w-3 h-3 text-[#ccff00] rotate-90" />
                  </div>
                  <p className="text-xs font-mono font-bold text-white tracking-wider">
                    SEC-ID // LVL 04
                  </p>
                </div>
              </div>

              {/* ID Photo Frame Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/60 border-2 border-white/20 shadow-inner">
                {/* Framing Reticle / Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-white/40 text-xs font-mono select-none z-10">┌</div>
                <div className="absolute top-2 right-2 text-white/40 text-xs font-mono select-none z-10">┐</div>
                <div className="absolute bottom-2 left-2 text-white/40 text-xs font-mono select-none z-10">└</div>
                <div className="absolute bottom-2 right-2 text-white/40 text-xs font-mono select-none z-10">┘</div>

                {/* Official ID Photo */}
                <img
                  src="/assets/bunny-id-photo.jpg"
                  alt="Bunny developer portrait"
                  className="w-full h-full object-cover object-top filter contrast-[104%] brightness-[101%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Holographic Verified Watermark Tag */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-emerald-500/40 flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 z-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold tracking-wider">VERIFIED</span>
                </div>

                {/* Bottom ID Badge Stamp */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-neutral-300 z-10">
                  ID: #BN-2026-DEV
                </div>
              </div>

              {/* ID Cardholder Credentials */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-0.5">
                  <h3 className="text-2xl font-heading font-black tracking-wider text-white">BUNNY</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 tracking-widest uppercase">
                    ACTIVE
                  </span>
                </div>
                <p className="text-xs font-mono text-neutral-300 tracking-wide mb-3">
                  Creative Developer &bull; AI Systems
                </p>

                {/* ID Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-mono mb-3">
                  <div>
                    <span className="block text-neutral-500 text-[8px] uppercase tracking-wider">ROLE</span>
                    <span className="text-neutral-200 font-semibold">CORE DEV</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 text-[8px] uppercase tracking-wider">ACCESS</span>
                    <span className="text-emerald-400 font-semibold">LVL-04</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 text-[8px] uppercase tracking-wider">EXPIRES</span>
                    <span className="text-neutral-200 font-semibold">PERM</span>
                  </div>
                </div>

                {/* Barcode & Security QR Section */}
                <div className="pt-2.5 border-t border-dashed border-white/10 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    {/* Simulated High-Density Barcode */}
                    <div className="flex items-center gap-[2px] h-6 w-full overflow-hidden opacity-85 py-0.5 px-1 bg-white/[0.04] rounded border border-white/10">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 3, 1, 4, 1, 2, 3, 2, 1, 3, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2].map((w, i) => (
                        <span
                          key={i}
                          className="h-full bg-white/90 rounded-[0.5px] inline-block"
                          style={{ width: `${w * 1.4}px` }}
                        />
                      ))}
                    </div>
                    <div className="text-[8px] font-mono text-neutral-400 tracking-[0.25em] text-center mt-1">
                      * 2026-8492-BNY-PASS *
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300">
                    <QrCode className="w-5 h-5 text-neutral-300" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative & Info Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Core Description Quote */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl mb-8 relative">
              <span className="text-5xl font-heading font-black text-[#ccff00]/20 absolute top-4 left-6 select-none">
                “
              </span>
              <p className="text-xl sm:text-2xl text-neutral-100 font-normal leading-relaxed relative z-10 pt-4">
                I'm a creative developer passionate about building modern websites, experimenting with
                interactive experiences, and exploring the possibilities of artificial intelligence.
                I enjoy turning ambitious ideas into functional, visually engaging digital products.
              </p>
            </div>

            {/* Information Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, idx) => {
                const IconComponent = card.icon
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`p-2 rounded-xl bg-white/[0.03] border ${card.accent}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-heading font-bold text-white group-hover:text-[#ccff00] transition-colors">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
