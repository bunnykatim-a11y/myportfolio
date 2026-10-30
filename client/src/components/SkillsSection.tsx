import React, { useState } from 'react'
import { soundManager } from '../utils/sound'
import {
  Sparkles,
  Code,
  Palette,
  Bot,
  Layers,
  Cpu,
  Monitor,
  Box,
  Braces,
} from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'ai' | 'creative'>('all')

  const skills = [
    {
      name: 'HTML & CSS',
      category: 'frontend',
      level: 'Modern Layouts & Semantics',
      desc: 'Semantic HTML5, CSS Grid/Flexbox, Custom Properties, Canvas API, Fluid Typography.',
      icon: Code,
      color: 'text-orange-400 border-orange-500/20 bg-orange-500/05',
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 'ESNext & Async Pipelines',
      desc: 'Modern ES6+, DOM manipulation, Web Workers, Web Audio API, Event Streams.',
      icon: Braces,
      color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/05',
    },
    {
      name: 'React',
      category: 'frontend',
      level: 'Component Architecture',
      desc: 'Custom hooks, state machines, context, concurrent rendering, and clean modular code.',
      icon: Cpu,
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/05',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 'Responsive Design Systems',
      desc: 'Utility-first rapid prototyping, theme tokens, fluid animations, and custom dark modes.',
      icon: Palette,
      color: 'text-teal-400 border-teal-500/20 bg-teal-500/05',
    },
    {
      name: 'AI Application Development',
      category: 'ai',
      level: 'LLM Orchestration & Prompting',
      desc: 'Connecting models, vector retrieval, contextual memory, and real-time streaming interfaces.',
      icon: Bot,
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/05',
    },
    {
      name: 'UI/UX Design',
      category: 'creative',
      level: 'Visual Hierarchy & Wireframing',
      desc: 'Aesthetic composition, dark-theme ergonomics, typography pairing, micro-interactions.',
      icon: Monitor,
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/05',
    },
    {
      name: 'Creative Coding',
      category: 'creative',
      level: 'Generative Canvas & Shaders',
      desc: 'Procedural graphics, geometric math, particle simulations, and dynamic audio-visuals.',
      icon: Sparkles,
      color: 'text-[#ccff00] border-[#ccff00]/20 bg-[#ccff00]/05',
    },
    {
      name: 'Interactive Web Development',
      category: 'creative',
      level: 'Transitions & 3D Integration',
      desc: 'Three.js mesh pipelines, Framer Motion choreography, gesture listeners, and physics.',
      icon: Box,
      color: 'text-pink-400 border-pink-500/20 bg-pink-500/05',
    },
  ]

  const filteredSkills =
    activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab)

  return (
    <section id="skills" className="relative py-28 px-5 sm:px-8 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-emerald-950/20 rounded-full blur-[170px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>03 // CAPABILITIES &amp; TOOLKIT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white uppercase">
              TOOLS OF MY TRADE<span className="text-[#ccff00]">.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md self-start md:self-auto">
            {(
              [
                { id: 'all', label: 'All Tools' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'creative', label: 'Creative & 3D' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playClick()
                  setActiveTab(tab.id)
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#ccff00] text-black font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHover()}
                className="group p-6 rounded-2xl bg-[#0c0f1d]/80 hover:bg-[#12162a] border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${skill.color} transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#ccff00] transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  {/* Focus Level Tag */}
                  <p className="text-xs font-mono text-[#ccff00]/80 mb-3">
                    {skill.level}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Micro hover bar */}
                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Stack Module</span>
                  <Layers className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#ccff00] transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-neutral-500">
            * Actively expanding technical competencies through continuous building, research, and experimentation.
          </p>
        </div>

      </div>
    </section>
  )
}
