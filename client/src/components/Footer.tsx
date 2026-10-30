import React from 'react'
import { soundManager } from '../utils/sound'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const currentYear = 2026

  const scrollToTop = () => {
    soundManager.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    soundManager.playClick()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[rgba(255,244,224,0.12)] bg-[#070b14] pt-16 pb-12 px-5 sm:px-8 text-[#fff4e0]/70 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        
        {/* Upper Row: Brand & Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[rgba(255,244,224,0.08)]">
          <div>
            <div className="flex items-center gap-1 font-serif text-3xl sm:text-4xl italic text-[#fff4e0] mb-2">
              <span>Bunny</span>
              <span className="text-[#ffb347] not-italic text-2xl">•</span>
            </div>
            <p className="text-[#fff4e0]/50 font-display font-light text-xs max-w-sm">
              Building software that watches, decides, and holds up under load.
            </p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNavClick('#hero')}
              className="uppercase hover:text-[#ffb347] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('#projects')}
              className="uppercase hover:text-[#ffb347] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('#stack')}
              className="uppercase hover:text-[#ffb347] transition-colors cursor-pointer"
            >
              Stack
            </button>
            <button
              onClick={() => handleNavClick('#proof')}
              className="uppercase hover:text-[#ffb347] transition-colors cursor-pointer"
            >
              Proof
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="uppercase hover:text-[#ffb347] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              onMouseEnter={() => soundManager.playHover()}
              className="w-10 h-10 rounded-full border border-[rgba(255,244,224,0.12)] bg-[#0d1b2a]/60 hover:text-[#ffb347] hover:border-[#ffb347] transition-all flex items-center justify-center text-[#fff4e0]/80"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              onMouseEnter={() => soundManager.playHover()}
              className="w-10 h-10 rounded-full border border-[rgba(255,244,224,0.12)] bg-[#0d1b2a]/60 hover:text-[#ffb347] hover:border-[#ffb347] transition-all flex items-center justify-center text-[#fff4e0]/80"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundManager.playHover()}
              className="w-10 h-10 rounded-full bg-[#ffb347] text-[#0a0f1c] hover:bg-[#fff4e0] transition-all flex items-center justify-center font-bold ml-2 cursor-pointer shadow-lg"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[#fff4e0]/50 gap-4">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-[#ff6b5e]">✦</span>
            <span>in React, Three.js &amp; Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
