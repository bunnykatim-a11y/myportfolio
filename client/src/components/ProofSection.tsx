import React, { useState, useEffect, useCallback } from 'react'
import { soundManager } from '../utils/sound'
import { educationList, certificatesList } from '../data/portfolioData'
import type { Certificate } from '../types'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ExternalLink,
  Calendar,
  Building2,
  Award,
  Users,
  FileText,
  Sparkles,
  School,
  BookOpen,
  GraduationCap,
  MapPin,
  ArrowRight,
} from 'lucide-react'

export const ProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [lightboxCert, setLightboxCert] = useState<Certificate | null>(null)

  const total = certificatesList.length
  const currentCert = certificatesList[activeIndex]

  const handlePrev = useCallback(() => {
    soundManager.playClick()
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleNext = useCallback(() => {
    soundManager.playClick()
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  // Smooth automatic rotation with pause on hover
  useEffect(() => {
    if (isHovered || lightboxCert !== null) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, 4500)

    return () => clearInterval(timer)
  }, [isHovered, lightboxCert, total])

  // Handle keyboard navigation & lightbox escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxCert) {
        if (e.key === 'Escape') setLightboxCert(null)
      } else {
        if (e.key === 'ArrowLeft') handlePrev()
        if (e.key === 'ArrowRight') handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxCert, handlePrev, handleNext])

  // Compute 3D rotation transform for each certificate card
  const getCardTransformClass = (idx: number) => {
    const diff = (idx - activeIndex + total) % total

    if (diff === 0) {
      // Center / Active Certificate
      return {
        style: {
          transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
          zIndex: 30,
          opacity: 1,
        },
        containerClass:
          'border-[#ffb347]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,179,71,0.22)] ring-1 ring-[#ffb347]/40 cursor-zoom-in',
        isActive: true,
      }
    } else if (diff === 1) {
      // Right / Next Certificate
      return {
        style: {
          transform: 'translateX(45%) translateZ(-140px) rotateY(-20deg) scale(0.86)',
          zIndex: 20,
          opacity: 0.55,
        },
        containerClass:
          'border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:opacity-85 cursor-pointer filter brightness-75 hover:brightness-95',
        isActive: false,
      }
    } else if (diff === total - 1) {
      // Left / Previous Certificate
      return {
        style: {
          transform: 'translateX(-45%) translateZ(-140px) rotateY(20deg) scale(0.86)',
          zIndex: 20,
          opacity: 0.55,
        },
        containerClass:
          'border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:opacity-85 cursor-pointer filter brightness-75 hover:brightness-95',
        isActive: false,
      }
    } else {
      // Distant background cards
      return {
        style: {
          transform: diff < total / 2
            ? 'translateX(70%) translateZ(-260px) rotateY(-30deg) scale(0.72)'
            : 'translateX(-70%) translateZ(-260px) rotateY(30deg) scale(0.72)',
          zIndex: 5,
          opacity: 0,
          pointerEvents: 'none' as const,
        },
        containerClass: 'border-transparent shadow-none',
        isActive: false,
      }
    }
  }

  return (
    <section id="proof" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-[rgba(255,244,224,0.1)]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3 flex items-center gap-2">
              <span>✦</span>
              <span>04 // PROOF &amp; TRACK RECORD</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#fff4e0] tracking-tight mb-4">
              PROOF<span className="text-[#ffb347]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#fff4e0]/70 font-light max-w-xl leading-relaxed">
              Verified credentials, competitive programming track record, and academic foundation.
            </p>
          </div>

          {/* Quick Counter Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/80 backdrop-blur-md self-start md:self-auto text-xs font-mono text-[#ffb347]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb347]" />
            <span>{total} Verified Credentials</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. 3D ROTATING CERTIFICATE SHOWCASE                       */}
        {/* ======================================================== */}
        <div
          className="relative rounded-[32px] border border-[rgba(255,244,224,0.14)] bg-gradient-to-b from-[#0d1b2a]/90 via-[#0a0f1c]/95 to-[#060812]/98 p-5 sm:p-10 xl:p-14 overflow-hidden shadow-2xl backdrop-blur-2xl select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle Ambient Radial Backlight Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-gradient-to-br from-[#ffb347]/15 via-[#ff6b5e]/10 to-transparent rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 bg-[#4fd1c5]/10 rounded-full blur-[120px]" />

          {/* Top Stage Header */}
          <div className="relative z-20 flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffb347] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#fff4e0]/80 font-medium">
                Verified Credentials Showcase
              </span>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-wider text-[#fff4e0]/45 hidden sm:inline-block">
              {isHovered ? 'Paused on hover · Click to inspect' : 'Auto-rotating · Hover to pause'}
            </span>
          </div>

          {/* 3D Certificate Stage Container */}
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] flex items-center justify-center [perspective:1400px]">
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center [transform-style:preserve-3d]">
              {certificatesList.map((cert, idx) => {
                const { style, containerClass, isActive } = getCardTransformClass(idx)

                return (
                  <div
                    key={cert.id}
                    onClick={() => {
                      soundManager.playClick()
                      if (isActive) {
                        setLightboxCert(cert)
                      } else {
                        setActiveIndex(idx)
                      }
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    style={style}
                    className={`absolute w-[86%] sm:w-[76%] md:w-[70%] max-w-[680px] aspect-[1.414/1] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a0f1c] border transition-all duration-700 ease-out will-change-transform ${containerClass}`}
                  >
                    {/* Glossy Sheen Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-10" />

                    {/* Certificate Image Frame */}
                    <div className="relative w-full h-full bg-[#0a0f1c] flex items-center justify-center p-1 sm:p-2">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
                        loading="eager"
                      />

                      {/* Hover action hint overlay on active card */}
                      {isActive && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 rounded-2xl backdrop-blur-[2px] z-20">
                          <span className="px-4 py-2 rounded-full bg-[#0a0f1c]/90 border border-[#ffb347]/60 text-xs font-mono font-bold text-[#ffb347] flex items-center gap-2 shadow-xl">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>CLICK TO INSPECT</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Corner Tag for Active Card */}
                    {isActive && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-3 py-1 rounded-full bg-[#0a0f1c]/85 border border-white/15 backdrop-blur-md font-mono text-[10px] text-[#ffb347] flex items-center gap-1.5 shadow-md">
                        <Award className="w-3 h-3 text-[#ffb347]" />
                        <span>VERIFIED</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[rgba(255,244,224,0.2)] bg-[#0a0f1c]/80 hover:bg-[#ffb347] hover:border-[#ffb347] text-[#fff4e0] hover:text-[#0a0f1c] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md group"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[rgba(255,244,224,0.2)] bg-[#0a0f1c]/80 hover:bg-[#ffb347] hover:border-[#ffb347] text-[#fff4e0] hover:text-[#0a0f1c] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md group"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Active Certificate Info Panel */}
          {currentCert && (
            <div className="relative z-20 mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ffb347]/10 text-[#ffb347] border border-[#ffb347]/30">
                    <Building2 className="w-3 h-3" />
                    <span>{currentCert.organization}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-[#fff4e0]/80 border border-white/10">
                    <Award className="w-3 h-3 text-[#4fd1c5]" />
                    <span>{currentCert.type}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-[#fff4e0]/70 border border-white/10">
                    <Calendar className="w-3 h-3 text-[#ffaba2]" />
                    <span>{currentCert.date}</span>
                  </span>

                  {currentCert.team && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-[#4fd1c5] border border-[#4fd1c5]/30">
                      <Users className="w-3 h-3" />
                      <span>Team: {currentCert.team}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-[#fff4e0] tracking-tight">
                  {currentCert.title}
                </h3>
              </div>

              {/* Action Buttons & Pagination */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                <button
                  onClick={() => {
                    soundManager.playClick()
                    setLightboxCert(currentCert)
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className="btn-primary text-xs cursor-pointer flex items-center gap-2"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>INSPECT FULL VIEW</span>
                </button>

                {currentCert.pdf && (
                  <a
                    href={currentCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="btn-ghost text-xs cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>VIEW PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Pagination Indicators */}
          <div className="relative z-20 mt-6 pt-4 flex items-center justify-center gap-2.5">
            {certificatesList.map((cert, idx) => (
              <button
                key={cert.id}
                onClick={() => {
                  soundManager.playClick()
                  setActiveIndex(idx)
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-9 h-2.5 bg-[#ffb347] shadow-[0_0_12px_rgba(255,179,71,0.8)]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to certificate ${idx + 1}: ${cert.title}`}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. ACADEMIC FOUNDATION / EDUCATION JOURNEY               */}
        {/* ======================================================== */}
        <div className="space-y-8">
          {/* Section Subheading with Journey Flow */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#fff4e0] flex items-center gap-2">
                <span className="font-serif italic text-2xl sm:text-3xl text-[#4fd1c5]">Academic</span> Foundation
              </h3>
              <p className="text-xs sm:text-sm text-[#fff4e0]/70 font-light mt-1">
                Structured progression of foundational schooling and engineering education.
              </p>
            </div>

            {/* Visual Pathway Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fff4e0]/80 self-start sm:self-auto">
              <span className="text-[#ffb347]">School</span>
              <span className="text-white/40">→</span>
              <span className="text-[#ff6b5e]">Intermediate</span>
              <span className="text-white/40">→</span>
              <span className="text-[#4fd1c5] font-semibold">B.Tech</span>
            </div>
          </div>

          {/* Connected Education Timeline / Pathway Grid */}
          <div className="relative">
            {/* Desktop Glowing Connector Track */}
            <div
              className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#ffb347]/40 via-[#ff6b5e]/40 to-[#4fd1c5]/60 -translate-y-1/2 z-0 hidden lg:block"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
              {educationList.map((edu, idx) => {
                const stepThemes = [
                  {
                    accent: '#ffb347',
                    badgeBg: 'bg-[#ffb347]/10 text-[#ffb347] border-[#ffb347]/30',
                    borderHover: 'hover:border-[#ffb347]/50',
                    icon: School,
                  },
                  {
                    accent: '#ff6b5e',
                    badgeBg: 'bg-[#ff6b5e]/10 text-[#ff6b5e] border-[#ff6b5e]/30',
                    borderHover: 'hover:border-[#ff6b5e]/50',
                    icon: BookOpen,
                  },
                  {
                    accent: '#4fd1c5',
                    badgeBg: 'bg-[#4fd1c5]/10 text-[#4fd1c5] border-[#4fd1c5]/30',
                    borderHover: 'hover:border-[#4fd1c5]/50',
                    icon: GraduationCap,
                  },
                ]

                const theme = stepThemes[idx % stepThemes.length]
                const IconComponent = theme.icon

                return (
                  <div
                    key={edu.id}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`group relative p-7 sm:p-8 rounded-[24px] border border-[rgba(255,244,224,0.12)] ${theme.borderHover} bg-[#0a0f1c]/80 backdrop-blur-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl`}
                  >
                    <div>
                      {/* Top Row: Step Index, Stage & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-8 h-8 rounded-full border ${theme.badgeBg} flex items-center justify-center font-mono font-bold text-xs shadow-md`}
                          >
                            0{idx + 1}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-wider text-[#fff4e0]/80 font-semibold">
                            {edu.stage}
                          </span>
                        </div>

                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10"
                          style={{
                            backgroundColor: `${theme.accent}15`,
                            color: theme.accent,
                          }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Middle: Institution & Academic Details */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-xl sm:text-2xl font-display font-extrabold text-[#fff4e0] group-hover:text-[#ffb347] transition-colors leading-snug">
                          {edu.institution}
                        </h4>

                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#fff4e0]/70">
                            <BookOpen className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{edu.level}</span>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                            <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Status Badge (if current) or Stage Completion Tag */}
                    <div className="pt-4 border-t border-[rgba(255,244,224,0.08)] flex items-center justify-between">
                      {edu.status ? (
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{edu.status}</span>
                        </div>
                      ) : (
                        <span className="text-[11px] font-mono text-neutral-500">
                          Completed
                        </span>
                      )}

                      {/* Direction arrow to next step (if not last) */}
                      {idx < educationList.length - 1 && (
                        <span className="text-neutral-500 group-hover:text-[#ffb347] transition-colors hidden sm:inline-block">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. FULL RESOLUTION LIGHTBOX DIALOG                        */}
      {/* ======================================================== */}
      {lightboxCert && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxCert(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#0d1b2a] border border-[#ffb347]/40 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0f1c]/90">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#ffb347] font-bold">
                  {lightboxCert.organization}
                </span>
                <span className="text-white/30">|</span>
                <span className="font-mono text-xs text-neutral-300">
                  {lightboxCert.type}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {lightboxCert.pdf && (
                  <a
                    href={lightboxCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                    title="Open original PDF in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setLightboxCert(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close certificate lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container (Uncropped Full Quality) */}
            <div className="relative flex-1 min-h-[300px] overflow-auto p-4 sm:p-6 bg-black/80 flex items-center justify-center">
              <img
                src={lightboxCert.image}
                alt={lightboxCert.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Lightbox Footer Bar */}
            <div className="px-6 py-3 border-t border-white/10 bg-[#0a0f1c]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-neutral-300">
              <span className="font-bold text-white tracking-wide">
                {lightboxCert.title}
              </span>
              <div className="flex items-center gap-4 text-neutral-400">
                {lightboxCert.team && <span>Team: {lightboxCert.team}</span>}
                <span>Issued: {lightboxCert.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
