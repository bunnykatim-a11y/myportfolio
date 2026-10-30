import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import emailjs from '@emailjs/browser'
import { soundManager } from '../utils/sound'
import { personalInfo } from '../data/portfolioData'
import {
  Send,
  Mail,
  Copy,
  Check,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  Loader2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

// EmailJS Vite Environment Configuration with safe fallbacks
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '0509'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xks8w0y'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'NZZt_XoWuyNKqaFjK'
const RECEIVING_EMAIL = import.meta.env.VITE_EMAILJS_RECEIVING_EMAIL || 'bunny.kati.m@gmail.com'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleCopyEmail = () => {
    soundManager.playClick()
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prevent duplicate submissions while in flight
    if (status === 'submitting') return

    // Form validation
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      soundManager.playClick()
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and message before transmitting.')
      return
    }

    if (trimmedName.length < 2) {
      soundManager.playClick()
      setStatus('error')
      setErrorMessage('Please provide a valid name (at least 2 characters).')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      soundManager.playClick()
      setStatus('error')
      setErrorMessage('Please provide a valid email address (e.g., name@domain.com).')
      return
    }

    if (trimmedMessage.length < 5) {
      soundManager.playClick()
      setStatus('error')
      setErrorMessage('Please include a brief message (at least 5 characters).')
      return
    }

    // Set loading state & sound
    setStatus('submitting')
    soundManager.playClick()
    setErrorMessage('')

    try {
      // Mapping fields strictly according to EmailJS template:
      // from_name, from_email, subject, message, and target recipient
      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        subject: trimmedSubject || `Portfolio Inquiry from ${trimmedName}`,
        message: trimmedMessage,
        to_email: RECEIVING_EMAIL,
        recipient: RECEIVING_EMAIL,
      }

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      if (response.status === 200 || response.text === 'OK') {
        setStatus('success')
        soundManager.playSuccess()

        // Confetti celebration
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.7 },
          colors: ['#ffb347', '#ff6b5e', '#4fd1c5', '#fff4e0'],
        })

        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error(response.text || 'Transmission failed')
      }
    } catch (err: unknown) {
      console.error('EmailJS transmission error:', err)
      soundManager.playClick()
      setStatus('error')
      const message =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: unknown }).text)
          : err instanceof Error
          ? err.message
          : 'Unable to deliver message right now. Please check your connection or email directly.'
      setErrorMessage(message)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-[rgba(255,244,224,0.1)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3 flex items-center gap-2">
            <span>✦</span>
            <span>05 // INITIATE TRANSMISSION</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold text-[#fff4e0] tracking-tight leading-[0.92] mb-6">
            SAY HELLO<span className="text-[#ffb347]">.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#fff4e0]/80 font-light max-w-2xl leading-relaxed">
            Have a project, challenge, or engineering collaboration in mind? I'd love to talk.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Email & Social Pills */}
          <div className="lg:col-span-5 space-y-8">
            {/* Clickable Large Direct Email Card */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#fff4e0]/60 mb-2 block">
                DIRECT INBOX
              </span>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => soundManager.playHover()}
                className="w-full text-left p-6 sm:p-7 rounded-[22px] border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/70 hover:border-[#ffb347]/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-xl"
                data-cursor="copy"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-[#ffb347] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#fff4e0]/60 uppercase block">
                      Click to copy address
                    </span>
                    <span className="text-lg sm:text-xl font-display font-bold text-[#fff4e0] group-hover:text-[#ffb347] transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-[rgba(255,244,224,0.1)] flex items-center justify-center text-[#fff4e0]/70 group-hover:text-[#ffb347] transition-colors">
                  {copiedEmail ? <Check className="w-4 h-4 text-[#ffb347]" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>
            </div>

            {/* Social Network Pills */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#fff4e0]/60 mb-3 block">
                DEVELOPER NETWORKS
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-5 py-3 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/60 hover:border-[#4fd1c5] hover:text-[#4fd1c5] text-[#fff4e0] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-5 py-3 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/60 hover:border-[#4fd1c5] hover:text-[#4fd1c5] text-[#fff4e0] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="p-5 rounded-[20px] border border-[rgba(79,209,197,0.25)] bg-[#0a0f1c]/70 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fd1c5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4fd1c5]"></span>
              </span>
              <p className="text-xs text-[#fff4e0]/80 font-mono leading-relaxed">
                Currently open for software engineering opportunities, AI research collaborations, and full-stack systems projects.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[28px] border border-[rgba(255,244,224,0.14)] bg-[#0a0f1c]/80 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-display font-extrabold text-[#fff4e0] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-[#fff4e0]/70 tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-[14px] bg-[#0d1b2a]/60 border border-[rgba(255,244,224,0.14)] focus:border-[#ffb347] focus:ring-1 focus:ring-[#ffb347] text-[#fff4e0] placeholder-[#fff4e0]/30 outline-none transition-all font-display text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-[#fff4e0]/70 tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="from_email"
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-[14px] bg-[#0d1b2a]/60 border border-[rgba(255,244,224,0.14)] focus:border-[#ffb347] focus:ring-1 focus:ring-[#ffb347] text-[#fff4e0] placeholder-[#fff4e0]/30 outline-none transition-all font-display text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-[#fff4e0]/70 tracking-wider mb-2">
                    Subject / Purpose
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    disabled={status === 'submitting'}
                    placeholder="Engineering collaboration / Project inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-[14px] bg-[#0d1b2a]/60 border border-[rgba(255,244,224,0.14)] focus:border-[#ffb347] focus:ring-1 focus:ring-[#ffb347] text-[#fff4e0] placeholder-[#fff4e0]/30 outline-none transition-all font-display text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-[#fff4e0]/70 tracking-wider mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={status === 'submitting'}
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-[14px] bg-[#0d1b2a]/60 border border-[rgba(255,244,224,0.14)] focus:border-[#ffb347] focus:ring-1 focus:ring-[#ffb347] text-[#fff4e0] placeholder-[#fff4e0]/30 outline-none transition-all font-display text-sm resize-none disabled:opacity-50"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-2.5 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-[#0d1b2a] border border-[#ffb347]/50 text-[#fff4e0] text-xs space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-2 text-[#ffb347] font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Transmission received &amp; forwarded!</span>
                    </div>
                    <p className="text-[#fff4e0]/70 text-[11px] leading-relaxed">
                      Thank you for reaching out. Your message has been sent to my inbox and I will get back to you shortly.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  onMouseEnter={() => soundManager.playHover()}
                  className="btn-primary w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0a0f1c]" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND TRANSMISSION</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
