import React, { useEffect } from 'react'
import { soundManager } from '../utils/sound'
import { X, ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const accentColor =
    project.accent === 'saffron'
      ? '#ffb347'
      : project.accent === 'coral'
      ? '#ff6b5e'
      : '#4fd1c5'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-[#0a0f1c] border border-[rgba(255,244,224,0.18)] shadow-2xl p-6 sm:p-10 text-left space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick()
            onClose()
          }}
          className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0d1b2a]/80 text-[#fff4e0]/70 hover:text-[#ffb347] hover:border-[#ffb347] flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3">
            <span>✦</span>
            <span>{project.kind} · {project.date}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#fff4e0] tracking-tight mb-4">
            {project.title}
          </h2>

          <p className="text-lg sm:text-xl text-[#fff4e0]/85 font-light leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="btn-primary text-xs"
              >
                <span>LAUNCH LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="btn-ghost text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview (if present) */}
        {project.image && (
          <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] border border-[rgba(255,244,224,0.12)] bg-black/60 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Key Metrics Row */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.stats.map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-[18px] border border-[rgba(255,244,224,0.12)] bg-[#0d1b2a]/60 backdrop-blur-md"
              >
                <div
                  className="text-2xl sm:text-3xl font-display font-extrabold mb-1"
                  style={{ color: accentColor }}
                >
                  {st.value}
                </div>
                <div className="text-xs font-mono text-[#fff4e0]/70">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* The Story & Architectural Narrative */}
        {project.story && project.story.length > 0 && (
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-4">
              THE STORY &amp; ARCHITECTURE
            </h3>
            <ol className="space-y-4">
              {project.story.map((paragraph, idx) => (
                <li
                  key={idx}
                  className="p-5 rounded-[16px] bg-[#0d1b2a]/40 border-l-[3px] border-[rgba(255,244,224,0.1)] flex items-start gap-4 text-sm sm:text-base text-[#fff4e0]/85 leading-relaxed font-light"
                  style={{ borderLeftColor: accentColor }}
                >
                  <span className="font-mono text-xs text-[#ffb347] font-bold mt-1">
                    0{idx + 1}
                  </span>
                  <span>{paragraph}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Technology Pills */}
        <div className="pt-4 border-t border-[rgba(255,244,224,0.1)]">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#fff4e0]/60 mb-3">
            Technologies &amp; Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-[rgba(255,244,224,0.12)] bg-[#0d1b2a]/60 text-xs font-mono text-[#fff4e0]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
