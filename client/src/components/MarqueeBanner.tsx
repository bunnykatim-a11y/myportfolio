import React from 'react'
import { marqueeWords } from '../data/portfolioData'

export const MarqueeBanner: React.FC = () => {
  const doubleWords = [...marqueeWords, ...marqueeWords]

  return (
    <div className="w-full border-y border-[rgba(255,244,224,0.14)] bg-[#0a0f1c]/60 py-6 sm:py-8 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {doubleWords.map((word, index) => {
          const isOutline = index % 2 === 1
          return (
            <div key={`${word}-${index}`} className="inline-flex items-center">
              <span
                className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight px-6 transition-colors duration-300 ${
                  isOutline
                    ? 'font-serif italic font-normal text-transparent hover:text-[#ff6b5e]'
                    : 'font-display text-[#fff4e0]'
                }`}
                style={
                  isOutline
                    ? {
                        WebkitTextStroke: '1.5px rgba(255, 244, 224, 0.75)',
                      }
                    : undefined
                }
              >
                {word}
              </span>
              <span className="text-[#ffb347] text-xl sm:text-2xl px-2">✦</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
