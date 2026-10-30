import React, { useState, useEffect, useRef, useMemo } from 'react'
import { soundManager } from '../utils/sound'


// Selected key skills for the 3D Sphere cloud
const SPHERE_SKILLS: { name: string; category: string; color: string; glyph: string }[] = [
  { name: 'React 19', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'TypeScript', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'Node.js', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'Express.js', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'MongoDB', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'REST APIs', category: 'mern', color: '#ffb347', glyph: '✦' },
  { name: 'OAuth 2.0', category: 'auth', color: '#ff6b5e', glyph: '◆' },
  { name: 'JWT & RBAC', category: 'auth', color: '#ff6b5e', glyph: '◆' },
  { name: 'Token Rotation', category: 'auth', color: '#ff6b5e', glyph: '◆' },
  { name: 'API Security', category: 'auth', color: '#ff6b5e', glyph: '◆' },
  { name: 'Gemini Vision', category: 'genai', color: '#ffb347', glyph: '✿' },
  { name: 'OpenAI APIs', category: 'genai', color: '#ffb347', glyph: '✿' },
  { name: 'Prompt Eng', category: 'genai', color: '#ffb347', glyph: '✿' },
  { name: 'Function Calling', category: 'genai', color: '#ffb347', glyph: '✿' },
  { name: 'Structured Outputs', category: 'genai', color: '#ffb347', glyph: '✿' },
  { name: 'RAG Pipelines', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'Pinecone Vector DB', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'LangChain', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'LangGraph', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'AI Agents', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'Multi-Agent', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'MCP Spec', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'Agent Memory', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'Human-in-the-Loop', category: 'advanced-genai', color: '#4fd1c5', glyph: '▲' },
  { name: 'RAG Evaluation', category: 'ai-eng', color: '#ffaba2', glyph: '◆' },
  { name: 'LangSmith', category: 'ai-eng', color: '#ffaba2', glyph: '◆' },
  { name: 'Langfuse', category: 'ai-eng', color: '#ffaba2', glyph: '◆' },
  { name: 'Guardrails', category: 'ai-eng', color: '#ffaba2', glyph: '◆' },
  { name: 'Docker', category: 'devops', color: '#fff4e0', glyph: '☁' },
  { name: 'CI/CD Actions', category: 'devops', color: '#fff4e0', glyph: '☁' },
  { name: 'Vercel Edge', category: 'devops', color: '#fff4e0', glyph: '☁' },
  { name: 'Jest & Supertest', category: 'devops', color: '#fff4e0', glyph: '☁' },
]

export const StackSection: React.FC = () => {
  const [hoveredTag, setHoveredTag] = useState<{ name: string; category: string } | null>(null)

  // 3D Sphere Interactive Projection
  const containerRef = useRef<HTMLDivElement>(null)
  const [projectedPoints, setProjectedPoints] = useState<
    {
      name: string
      category: string
      color: string
      glyph: string
      x: number
      y: number
      scale: number
      opacity: number
      zIndex: number
    }[]
  >([])

  // Rotation angles & mouse tracking
  const rotationRef = useRef({ x: 0.15, y: 0.25 })
  const velocityRef = useRef({ x: 0.002, y: 0.004 })
  const isDraggingRef = useRef(false)
  const lastMousePosRef = useRef({ x: 0, y: 0 })

  // Initialize base 3D spherical positions using Fibonacci sphere distribution
  const sphereCoordinates = useMemo(() => {
    const N = SPHERE_SKILLS.length
    const radius = 175 // 3D radius in virtual units
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden ratio

    return SPHERE_SKILLS.map((skill, i) => {
      const y = 1 - (i / (N - 1)) * 2 // -1 to 1
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i

      const x = Math.cos(theta) * r
      const z = Math.sin(theta) * r

      return {
        ...skill,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
      }
    })
  }, [])

  // Animation & 3D projection loop
  useEffect(() => {
    let animId: number

    const updateProjection = () => {
      if (!isDraggingRef.current) {
        // Apply ambient slow rotation
        rotationRef.current.y += velocityRef.current.y
        rotationRef.current.x += velocityRef.current.x
      }

      const cosX = Math.cos(rotationRef.current.x)
      const sinX = Math.sin(rotationRef.current.x)
      const cosY = Math.cos(rotationRef.current.y)
      const sinY = Math.sin(rotationRef.current.y)

      const container = containerRef.current
      const width = container ? container.clientWidth : 700
      const height = container ? container.clientHeight : 440
      // Responsive sphere radius based on container dimensions
      const responsiveRadius = Math.min(width * 0.35, height * 0.42, 170)

      const projected = sphereCoordinates.map((point) => {
        // Normalize base coordinates to responsive radius
        const normX = (point.baseX / 175) * responsiveRadius
        const normY = (point.baseY / 175) * responsiveRadius
        const normZ = (point.baseZ / 175) * responsiveRadius

        // Rotate around Y axis
        const x1 = normX * cosY - normZ * sinY
        const z1 = normZ * cosY + normX * sinY

        // Rotate around X axis
        const y2 = normY * cosX - z1 * sinX
        const z2 = z1 * cosX + normY * sinX

        // Perspective projection: coordinates centered at (0, 0)
        const fov = 360
        const scale = fov / (fov + z2)
        const x2d = x1 * scale
        const y2d = y2 * scale

        // Depth calculations: items in front are large, vibrant & opaque
        const depth = (z2 + responsiveRadius) / (2 * responsiveRadius) // 0 (back) to 1 (front)
        const clampedDepth = Math.max(0.12, Math.min(1, depth))
        const opacity = 0.32 + clampedDepth * 0.68
        const finalScale = 0.72 + clampedDepth * 0.38
        const zIndex = Math.round(clampedDepth * 100)

        return {
          name: point.name,
          category: point.category,
          color: point.color,
          glyph: point.glyph,
          x: x2d,
          y: y2d,
          scale: finalScale,
          opacity,
          zIndex,
        }
      })

      setProjectedPoints(projected)
      animId = requestAnimationFrame(updateProjection)
    }

    animId = requestAnimationFrame(updateProjection)
    return () => cancelAnimationFrame(animId)
  }, [sphereCoordinates])

  // Mouse / Drag event handlers for rotating sphere
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    lastMousePosRef.current = { x: e.clientX, y: e.clientY }
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastMousePosRef.current.x
    const dy = e.clientY - lastMousePosRef.current.y

    rotationRef.current.y += dx * 0.007
    rotationRef.current.x -= dy * 0.007

    lastMousePosRef.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  return (
    <section id="stack" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-[rgba(255,244,224,0.1)]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3 flex items-center gap-2">
            <span>✦</span>
            <span>03 // CAPABILITIES &amp; TOOLKIT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#fff4e0] tracking-tight">
            TECH STACK<span className="text-[#ffb347]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#fff4e0]/70 font-light max-w-2xl leading-relaxed mt-2">
            Production-tested technologies across the full stack, resilient authentication, generative AI, stateful multi-agent systems, and robust AI reliability engineering.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. 3D INTERACTIVE TECHNOLOGY TAG SPHERE                   */}
        {/* ======================================================== */}
        <div className="relative rounded-[28px] border border-[rgba(255,244,224,0.14)] bg-gradient-to-b from-[#0d1b2a]/90 via-[#0a0f1c]/95 to-[#0d1b2a]/80 backdrop-blur-2xl overflow-hidden p-4 sm:p-8 shadow-2xl">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffb347]/10 rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute bottom-4 right-4 w-72 h-72 bg-[#4fd1c5]/10 rounded-full blur-[120px]" />

          {/* Top Instruction Pill */}
          <div className="relative z-10 flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#fff4e0]/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ffb347] animate-ping" />
              <span>Interactive 3D Technology Sphere</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#fff4e0]/40 hidden sm:inline-block">
              Drag to spin
            </span>
          </div>

          {/* Interactive 3D Canvas Stage with TEXT LABELS AT DOTS */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full h-[400px] sm:h-[480px] overflow-hidden select-none cursor-grab active:cursor-grabbing touch-none"
            data-cursor="drag"
          >
            {/* Center Anchor: origin (0, 0) is exactly in the center of the stage */}
            <div className="absolute left-1/2 top-1/2 pointer-events-none w-0 h-0 flex items-center justify-center">
              {/* Ambient center radial core glow */}
              <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-[#ffb347]/15 via-[#4fd1c5]/10 to-[#ff6b5e]/15 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0" />

              {projectedPoints.map((point) => {
                const isHovered = hoveredTag?.name === point.name

                return (
                  <div
                    key={point.name}
                    onClick={(e) => {
                      e.stopPropagation()
                      soundManager.playClick()
                    }}
                    onMouseEnter={() => {
                      soundManager.playHover()
                      setHoveredTag({ name: point.name, category: point.category })
                    }}
                    onMouseLeave={() => setHoveredTag(null)}
                    className="absolute pointer-events-auto transition-transform duration-75 cursor-pointer will-change-transform"
                    style={{
                      left: 0,
                      top: 0,
                      transform: `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${
                        isHovered ? point.scale * 1.25 : point.scale
                      })`,
                      opacity: isHovered ? 1 : point.opacity,
                      zIndex: isHovered ? 200 : point.zIndex,
                    }}
                  >
                    {/* Glowing 3D Pill with Dot and TEXT AT DOT */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-medium text-xs whitespace-nowrap shadow-md transition-all duration-200 border ${
                        isHovered
                          ? 'bg-[#ffb347] text-[#0a0f1c] font-bold shadow-[0_0_25px_rgba(255,179,71,0.7)] scale-110'
                          : 'bg-[#0d1b2a]/85 backdrop-blur-md text-[#fff4e0]'
                      }`}
                      style={{
                        borderColor: isHovered ? '#ffb347' : point.color,
                        boxShadow: isHovered
                          ? '0 0 25px rgba(255, 179, 71, 0.7)'
                          : `0 4px 15px -2px rgba(0,0,0,0.6), 0 0 10px ${point.color}25`,
                      }}
                    >
                      {/* Glowing colored dot marker */}
                      <span
                        className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                        style={{
                          backgroundColor: point.color,
                          boxShadow: `0 0 8px ${point.color}`,
                        }}
                      />

                      {/* Actual technology text label */}
                      <span className="tracking-tight">{point.name}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dynamic Caption Pill Below Sphere */}
          <div className="relative z-10 flex items-center justify-center pt-2">
            <div className="px-5 py-2 rounded-full border border-[rgba(255,244,224,0.14)] bg-[#0a0f1c]/90 backdrop-blur-md text-xs font-mono tracking-wider flex items-center gap-2.5 shadow-lg">
              <span className="text-[#ffb347]">✦</span>
              <span className="text-[#fff4e0]/90 font-medium">
                {hoveredTag
                  ? hoveredTag.name
                  : 'Interactive 3D Technology Sphere · Drag to explore'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
