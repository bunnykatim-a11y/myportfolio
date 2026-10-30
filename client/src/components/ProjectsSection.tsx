import React, { useState } from 'react'
import { soundManager } from '../utils/sound'
import { projectsData } from '../data/portfolioData'
import type { Project } from '../types'
import { ProjectModal } from './ProjectModal'
import { ArrowLeft, ArrowRight, ExternalLink, LayoutGrid, SlidersHorizontal } from 'lucide-react'

export const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const activeProject = projectsData[carouselIdx]

  const handlePrev = () => {
    if (projectsData.length === 0) return
    soundManager.playClick()
    setCarouselIdx((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    if (projectsData.length === 0) return
    soundManager.playClick()
    setCarouselIdx((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-[rgba(255,244,224,0.1)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3 flex items-center gap-2">
              <span>✦</span>
              <span>02 // SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#fff4e0] tracking-tight">
              PROJECTS<span className="text-[#ffb347]">.</span>
            </h2>
          </div>

          {/* View Mode Toggle Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/80 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => {
                soundManager.playClick()
                setViewMode('carousel')
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-[#4fd1c5] text-[#0a0f1c] font-bold shadow-md'
                  : 'text-[#fff4e0]/70 hover:text-[#fff4e0]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Carousel</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick()
                setViewMode('grid')
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#4fd1c5] text-[#0a0f1c] font-bold shadow-md'
                  : 'text-[#fff4e0]/70 hover:text-[#fff4e0]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Projects Showcase Container */}
        {projectsData.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-[rgba(255,244,224,0.12)] bg-[#0d1b2a]/30 p-12 sm:p-16 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[#fff4e0]/40">
              No projects added yet. Ready for showcase entries.
            </p>
          </div>
        ) : (
          <>
            {/* View Mode 1: Interactive 3D Carousel Stage */}
            {viewMode === 'carousel' && activeProject && (
              <div className="space-y-6">
            {/* Carousel Stage Container */}
            <div className="relative rounded-[24px] overflow-hidden border border-[rgba(255,244,224,0.14)] bg-gradient-to-b from-[#0d1b2a]/80 to-[#0a0f1c]/90 backdrop-blur-xl p-6 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Image / Motif Preview */}
                <div className="lg:col-span-7 relative rounded-[20px] overflow-hidden aspect-[16/10] bg-black/60 border border-[rgba(255,244,224,0.1)] group">
                  {activeProject.image ? (
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] to-[#0a0f1c]">
                      <span className="font-serif italic text-6xl text-[#ffb347]/40">
                        {activeProject.title}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Accent Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#0a0f1c]/80 border border-[rgba(255,244,224,0.15)] backdrop-blur-md text-xs font-mono text-[#ffb347]">
                    <span>0{carouselIdx + 1} / 0{projectsData.length}</span>
                  </div>
                </div>

                {/* Project Details Panel */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#4fd1c5] mb-2 block">
                      {activeProject.kind}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#fff4e0] tracking-tight mb-4">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#fff4e0]/80 leading-relaxed font-light mb-6">
                      {activeProject.summary}
                    </p>

                    {/* Key Metric Highlight */}
                    <div className="p-4 rounded-xl border border-[rgba(255,244,224,0.1)] bg-white/[0.02] mb-6">
                      <span className="text-2xl font-display font-extrabold text-[#ffb347] mr-2">
                        {activeProject.stat.value}
                      </span>
                      <span className="text-xs text-[#fff4e0]/70 font-mono">
                        {activeProject.stat.label}
                      </span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[rgba(255,244,224,0.1)] bg-white/[0.03] text-[#fff4e0]/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Panel Actions */}
                  <div className="pt-6 border-t border-[rgba(255,244,224,0.1)] flex items-center justify-between gap-4">
                    <button
                      onClick={() => {
                        soundManager.playClick()
                        setSelectedProject(activeProject)
                      }}
                      onMouseEnter={() => soundManager.playHover()}
                      className="btn-primary text-xs cursor-pointer"
                      data-cursor="open"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="btn-ghost text-xs cursor-pointer"
                        data-cursor="live"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-[#fff4e0]/50 tracking-wider">
                DRAG OR USE CONTROLS TO EXPLORE
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-12 h-12 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/80 hover:border-[#ffb347] text-[#fff4e0] hover:text-[#ffb347] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous project"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-12 h-12 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/80 hover:border-[#ffb347] text-[#fff4e0] hover:text-[#ffb347] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next project"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Responsive Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => {
              const accentColor =
                project.accent === 'saffron'
                  ? 'text-[#ffb347]'
                  : project.accent === 'coral'
                  ? 'text-[#ff6b5e]'
                  : 'text-[#4fd1c5]'

              const accentBorder =
                project.accent === 'saffron'
                  ? 'hover:border-[#ffb347]/50'
                  : project.accent === 'coral'
                  ? 'hover:border-[#ff6b5e]/50'
                  : 'hover:border-[#4fd1c5]/50'

              return (
                <div
                  key={project.slug}
                  onClick={() => {
                    soundManager.playClick()
                    setSelectedProject(project)
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`group relative p-8 rounded-[24px] border border-[rgba(255,244,224,0.14)] ${accentBorder} bg-[#0a0f1c]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer shadow-xl`}
                  data-cursor="open"
                >
                  <div>
                    {/* Top Row: Number & Kind */}
                    <div className="flex items-baseline justify-between mb-6">
                      <span className={`font-serif italic text-4xl font-normal ${accentColor}`}>
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#fff4e0]/60">
                        {project.kind}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-extrabold text-[#fff4e0] group-hover:text-[#ffb347] transition-colors mb-3">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#fff4e0]/75 font-light leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Stat Highlight */}
                    <div className="py-3 border-t border-dashed border-[rgba(255,244,224,0.1)] text-xs text-[#fff4e0]/80 mb-4">
                      <strong className={`${accentColor} text-base font-bold mr-1.5`}>
                        {project.stat.value}
                      </strong>
                      <span>{project.stat.label}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-[rgba(255,244,224,0.08)] bg-white/[0.03] text-[#fff4e0]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </>
    )}
  </div>

      {/* Project Detail Modal Dialog */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
