import React, { useState, useEffect } from 'react'
import { soundManager } from '../utils/sound'
import { statsList } from '../data/portfolioData'

export const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState(statsList.map(() => 0))

  useEffect(() => {
    const duration = 1800
    const steps = 60
    const intervalTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounts(
        statsList.map((stat) => Math.round(stat.value * easeOut))
      )

      if (currentStep >= steps) clearInterval(timer)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsList.map((stat, idx) => {
          const colors = [
            'text-[#ffb347]', // saffron
            'text-[#ff6b5e]', // coral
            'text-[#4fd1c5]', // aqua
          ]
          const colorClass = colors[idx % colors.length]

          return (
            <li
              key={stat.label}
              onMouseEnter={() => soundManager.playHover()}
              className="p-8 sm:p-10 rounded-[22px] border border-[rgba(255,244,224,0.14)] bg-[#0a0f1c]/75 backdrop-blur-xl hover:border-[#ffb347]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="flex items-baseline mb-4">
                <span className={`text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight ${colorClass} font-display`}>
                  {counts[idx].toLocaleString()}
                </span>
                <span className={`text-4xl sm:text-5xl font-extrabold ml-1 ${colorClass}`}>
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#fff4e0]/80 font-normal leading-relaxed">
                {stat.label}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
