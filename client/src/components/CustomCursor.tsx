import React, { useEffect, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [cursorLabel, setCursorLabel] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (target) {
        const cursorEl = target.closest('[data-cursor]') as HTMLElement | null
        if (cursorEl) {
          const label = cursorEl.getAttribute('data-cursor')
          setCursorLabel(label && label.length > 0 ? label : null)
        } else {
          setCursorLabel(null)
        }

        const isClickable = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-target')
        )
        setIsHovered(isClickable)
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    let animId: number
    const animateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        }
      })
      animId = requestAnimationFrame(animateTrailing)
    }
    animId = requestAnimationFrame(animateTrailing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(animId)
    }
  }, [position.x, position.y, isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {/* Saffron Center Dot */}
      {!cursorLabel && (
        <div
          className="fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
              isClicked ? 0.6 : 1
            })`,
            width: '6px',
            height: '6px',
            backgroundColor: '#ffb347',
          }}
        />
      )}

      {/* Outer Follower Ring / Label Container */}
      <div
        className="fixed top-0 left-0 rounded-full transition-all duration-200 ease-out flex items-center justify-center font-mono font-bold tracking-wider"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicked ? 0.88 : 1
          })`,
          width: cursorLabel ? '74px' : isHovered ? '54px' : '36px',
          height: cursorLabel ? '74px' : isHovered ? '54px' : '36px',
          border: cursorLabel
            ? 'none'
            : isHovered
            ? '1.5px solid #ffb347'
            : '1px solid rgba(255, 244, 224, 0.4)',
          backgroundColor: cursorLabel
            ? '#ffb347'
            : isHovered
            ? 'rgba(255, 179, 71, 0.12)'
            : 'transparent',
          color: '#0a0f1c',
          fontSize: '11px',
          boxShadow: cursorLabel
            ? '0 10px 25px rgba(255, 179, 71, 0.45)'
            : isHovered
            ? '0 0 20px rgba(255, 179, 71, 0.2)'
            : 'none',
        }}
      >
        {cursorLabel && <span className="uppercase text-[10px] tracking-widest">{cursorLabel}</span>}
      </div>
    </div>
  )
}
