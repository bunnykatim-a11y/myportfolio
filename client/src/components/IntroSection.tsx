import React from 'react'
import { personalInfo } from '../data/portfolioData'

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[rgba(255,244,224,0.1)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffb347] mb-3 flex items-center gap-2">
              <span>✦</span>
              <span>01 // PERSPECTIVE &amp; ROOTS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#fff4e0] tracking-tight leading-tight mb-6">
              Engineering with <span className="font-serif italic font-normal text-[#ffb347]">rigor</span> and aesthetic intent.
            </h2>

            <p className="text-base text-[#fff4e0]/70 font-light leading-relaxed">
              Software is most compelling when high performance under the hood meets deliberate visual craftsmanship on the surface.
            </p>
          </div>

          {/* Right Column: Bio Glass Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[24px] border border-[rgba(255,244,224,0.14)] bg-[#0a0f1c]/80 backdrop-blur-xl space-y-6 shadow-2xl">
              <p className="text-lg sm:text-xl text-[#fff4e0] leading-relaxed font-normal">
                {personalInfo.bio}
              </p>

              <div className="pt-4 border-t border-[rgba(255,244,224,0.1)]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#ffb347] mb-4">
                  Day-to-day focus:
                </h4>
                <ul className="space-y-3 font-normal text-sm sm:text-base text-[#fff4e0]/85">
                  {personalInfo.dayToDay.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#4fd1c5] text-base leading-none mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[rgba(255,244,224,0.1)] font-normal text-sm sm:text-base text-[#fff4e0]/80">
                <span className="font-serif italic text-[#ffaba2] text-lg mr-2">
                  Outside the terminal:
                </span>
                <span>{personalInfo.outside.join(', ')}.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
