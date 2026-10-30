import { useState } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { ThreeHeroCanvas } from './components/ThreeHeroCanvas'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MarqueeBanner } from './components/MarqueeBanner'
import { IntroSection } from './components/IntroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { StackSection } from './components/StackSection'
import { ProofSection } from './components/ProofSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0a0f1c] text-[#fff4e0] selection:bg-[#ffb347] selection:text-[#0a0f1c] font-display">
      {/* Fallback ambient color gradients */}
      <div className="bg-ambient fixed inset-0 pointer-events-none z-[-2]" aria-hidden="true" />

      {/* Interactive custom cursor with contextual labels */}
      <CustomCursor />

      {/* Interactive Three.js WebGL particle and geometric background */}
      <ThreeHeroCanvas />

      {/* Fixed Capsule Navigation Bar */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Hero Section with large Bricolage & Instrument Serif typography */}
        <HeroSection />

        {/* Infinite Dual-Styled Marquee */}
        <MarqueeBanner />

        {/* Bio, Day-to-Day Focus & Perspectives */}
        <IntroSection />

        {/* Selected Works with 3D Carousel & Grid view toggle */}
        <ProjectsSection />

        {/* 3D Orbiting Tag Sphere & Categorized Stack */}
        <StackSection />

        {/* Track Record, DSA metrics, Education, Certifications & Achievements */}
        <ProofSection />

        {/* Contact transmission & Direct Email */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  )
}

export default App
