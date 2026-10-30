import React, { useState } from 'react'
import { soundManager } from '../utils/sound'
import { Sparkles, Code, Cpu, Boxes, ArrowRight, Check } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Modern, responsive websites with thoughtful design and smooth interactions.',
      deliverables: [
        'Single Page Applications (React / TypeScript)',
        'Responsive mobile-first layouts & clean semantics',
        'High-speed optimization & Core Web Vitals excellence',
        'Custom Tailwind CSS component architectures',
      ],
      icon: Code,
      accent: 'group-hover:border-[#ccff00]/40 group-hover:text-[#ccff00]',
      highlight: '#ccff00',
    },
    {
      number: '02',
      title: 'AI-Powered Applications',
      description:
        'Useful web applications that integrate AI-powered functionality.',
      deliverables: [
        'LLM & multimodal assistant integrations',
        'Streaming chat interfaces & real-time intent parsing',
        'Intelligent search & knowledge retrieval flows',
        'Practical automation workflows for end users',
      ],
      icon: Cpu,
      accent: 'group-hover:border-purple-400/40 group-hover:text-purple-400',
      highlight: '#a855f7',
    },
    {
      number: '03',
      title: 'Interactive Experiences',
      description:
        'Creative interfaces, animations, and immersive web experiences.',
      deliverables: [
        'WebGL & Three.js 3D interactive graphics',
        'Framer Motion choreography & micro-interactions',
        'Dynamic audio-responsive visual feedback',
        'Custom cursor physics and tactile user gestures',
      ],
      icon: Boxes,
      accent: 'group-hover:border-cyan-400/40 group-hover:text-cyan-400',
      highlight: '#06b6d4',
    },
  ]

  return (
    <section id="services" className="relative py-28 px-5 sm:px-8 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[36rem] h-[36rem] bg-purple-950/20 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>04 // CAPABILITIES &amp; OFFERINGS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white uppercase">
            WHAT I CAN BUILD<span className="text-[#ccff00]">.</span>
          </h2>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={service.number}
                onMouseEnter={() => {
                  soundManager.playHover()
                  setHoveredIndex(index)
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#101322] to-[#0a0d18] border border-white/10 ${service.accent} transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl`}
                style={{
                  boxShadow: isHovered ? `0 20px 40px -15px ${service.highlight}25` : 'none',
                }}
              >
                <div>
                  {/* Top Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white/30 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-6 border-t border-white/[0.08]">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <Check className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link indicator */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>Explore Collaboration</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
