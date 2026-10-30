import React, { useState, useEffect } from 'react'
import { soundManager } from '../utils/sound'
import { personalInfo } from '../data/portfolioData'
import { ArrowRight, Send } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const [activeWordIdx, setActiveWordIdx] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const phrases = personalInfo.tagline.phrases

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true)
      setTimeout(() => {
        setActiveWordIdx((prev) => (prev + 1) % phrases.length)
        setIsFlipping(false)
      }, 450)
    }, 3200)

    return () => clearInterval(interval)
  }, [phrases.length])

  const scrollTo = (id: string) => {
    soundManager.playClick()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-5 sm:px-8 pt-28 pb-16 max-w-7xl mx-auto w-full select-none"
    >
      {/* Interactive Cyber ID Card Showcase */}
      <div
        className="pointer-events-auto absolute right-2 lg:right-4 xl:right-12 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center"
      >
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-[#ffb347]/20 via-[#38bdf8]/15 to-transparent blur-3xl opacity-75 pointer-events-none" />

        {/* Lanyard Top Attachment (Strap & Clip) */}
        <div className="flex flex-col items-center -mb-3 z-30 pointer-events-none">
          {/* Lanyard Strap */}
          <div className="w-10 h-14 bg-gradient-to-b from-[#161a29] via-[#21273a] to-[#101422] border-x border-white/15 shadow-xl relative flex items-center justify-center">
            <div className="w-1.5 h-full bg-[#ffb347]/80 shadow-[0_0_8px_rgba(255,179,71,0.6)]" />
          </div>
          {/* Metallic Silver Badge Clip */}
          <div className="w-12 h-3.5 bg-gradient-to-r from-neutral-300 via-white to-neutral-300 rounded-sm shadow-md border border-white/60 flex items-center justify-center">
            <div className="w-4 h-1 bg-neutral-600 rounded-full" />
          </div>
          {/* Vinyl Clip Loop */}
          <div className="w-4 h-2.5 bg-white/25 border-x border-b border-white/40 rounded-b-sm" />
        </div>

        {/* ID Card Holder */}
        <div className="relative w-[340px] xl:w-[370px] rounded-3xl bg-gradient-to-b from-[#131728]/95 via-[#0b0e1b]/95 to-[#060812]/98 border border-white/20 p-5 xl:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,179,71,0.08)] backdrop-blur-2xl transition-all duration-500 hover:border-[#ffb347]/50 hover:shadow-[0_30px_70px_-10px_rgba(255,179,71,0.2)] hover:-translate-y-1 group">
          
          {/* Glossy Sheen Overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Lanyard Punch Hole Slot */}
          <div className="w-16 h-3 mx-auto rounded-full bg-[#03050a] border border-white/20 shadow-inner mb-5" />

          {/* ID Photo Frame Container */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-black/60 border-2 border-white/20 shadow-inner">
            {/* Official ID Photo */}
            <img
              src="/assets/bunny-id-photo.jpg"
              alt="Bunny developer portrait"
              className="w-full h-full object-cover object-top filter contrast-[104%] brightness-[101%] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* ID Cardholder Name */}
          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <h3 className="text-2xl font-heading font-black tracking-wider text-white">BUNNY</h3>
          </div>

        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#ffb347]">
          <span aria-hidden="true">✦</span>
          <span>{personalInfo.eyebrow}</span>
        </div>

        {/* Oversized Editorial Name Display */}
        <h1 className="flex flex-col tracking-[-0.045em] leading-[0.88] mb-6">
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-display font-extrabold text-[#fff4e0] drop-shadow-sm">
            {personalInfo.firstName}
          </span>
          <span className="font-serif italic font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-[#ffb347] pl-4 sm:pl-12 -mt-1 sm:-mt-4">
            {personalInfo.lastName}
          </span>
        </h1>

        {/* Dynamic 3D Tagline */}
        <div className="max-w-2xl mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl text-[#fff4e0] font-normal leading-snug">
            <span>{personalInfo.tagline.before} </span>
            <span
              className="inline-block font-serif italic text-[#ffb347] font-normal transition-all duration-300"
              style={{
                transform: isFlipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
                opacity: isFlipping ? 0 : 1,
              }}
            >
              {phrases[activeWordIdx]}
            </span>
            <span> {personalInfo.tagline.after}.</span>
          </p>
        </div>

        {/* Focus Statement */}
        <p className="font-mono text-xs sm:text-sm text-[#fff4e0]/70 max-w-xl leading-relaxed mb-10">
          {personalInfo.tagline.focus}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={() => soundManager.playHover()}
            className="btn-primary cursor-pointer text-sm"
            data-cursor="view"
          >
            <span>ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => soundManager.playHover()}
            className="btn-ghost cursor-pointer text-sm"
            data-cursor="contact"
          >
            <span>GET IN TOUCH</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollTo('intro')}
          onMouseEnter={() => soundManager.playHover()}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-[#fff4e0]/50 hover:text-[#ffb347] transition-colors cursor-pointer w-fit"
        >
          <span>SCROLL</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  )
}
