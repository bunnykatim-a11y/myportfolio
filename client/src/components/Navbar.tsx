import React, { useState, useEffect } from 'react'
import { soundManager } from '../utils/sound'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'

interface NavbarProps {
  soundEnabled: boolean
  setSoundEnabled: (val: boolean) => void
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, setSoundEnabled }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { name: 'Home', href: '#hero', num: '01' },
    { name: 'Projects', href: '#projects', num: '02' },
    { name: 'Stack', href: '#stack', num: '03' },
    { name: 'Proof', href: '#proof', num: '04' },
    { name: 'Contact', href: '#contact', num: '05' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['hero', 'projects', 'stack', 'proof', 'contact']
      const scrollPos = window.scrollY + 220

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    soundManager.playClick()
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSoundToggle = () => {
    const newState = soundManager.toggle()
    setSoundEnabled(newState)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-[rgba(255,244,224,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          onMouseEnter={() => soundManager.playHover()}
          className="group flex items-center gap-1 font-serif text-3xl sm:text-4xl italic text-[#fff4e0] hover:text-[#ffb347] transition-colors"
          data-cursor="home"
        >
          <span>Bunny</span>
          <span className="text-[#ffb347] not-italic text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-125 inline-block">
            •
          </span>
        </a>

        {/* Center Glass Pill Capsule Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d1b2a]/80 p-1.5 rounded-full border border-[rgba(255,244,224,0.14)] backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-1.5 rounded-full text-xs uppercase font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ffb347] text-[#0a0f1c] font-bold shadow-md'
                    : 'text-[#fff4e0]/80 hover:text-[#fff4e0] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right Tools: Sound Toggle & Say Hello CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 text-xs font-mono uppercase px-3 py-1.5 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/60 text-[#fff4e0]/70 hover:text-[#ffb347] hover:border-[#ffb347]/40 transition-all cursor-pointer backdrop-blur-md"
            title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            aria-label="Toggle sounds"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#ffb347] animate-pulse" />
                <span className="text-[#ffb347]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#fff4e0]/40" />
                <span>SFX OFF</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ffb347] text-[#0a0f1c] hover:bg-[#fff4e0] transition-all shadow-md hover:shadow-[0_0_25px_rgba(255,179,71,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Say Hello</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-full border border-[rgba(255,244,224,0.14)] text-[#fff4e0]/80"
            aria-label="Toggle sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#ffb347]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#fff4e0]/40" />
            )}
          </button>

          <button
            onClick={() => {
              soundManager.playClick()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="relative w-11 h-11 rounded-full border border-[rgba(255,244,224,0.15)] bg-[#0d1b2a]/80 backdrop-blur-md flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-[#fff4e0] transition-transform duration-300 ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#fff4e0] transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#fff4e0] transition-transform duration-300 ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-[#0a0f1c]/98 backdrop-blur-3xl z-40 transition-all duration-500 flex flex-col justify-center px-8 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <ol className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="flex items-baseline gap-4 text-4xl sm:text-5xl font-heading font-extrabold text-[#fff4e0] hover:text-[#ffb347] transition-colors"
              >
                <span className="font-mono text-sm text-[#ffb347]">{link.num}</span>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-12 pt-8 border-t border-[rgba(255,244,224,0.1)] flex items-center justify-between">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="btn-primary w-full text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  )
}
