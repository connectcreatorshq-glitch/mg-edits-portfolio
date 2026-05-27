import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Stats from "./components/Stats"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import CustomCursor from "./components/CustomCursor"
import BackgroundEffects from "./components/BackgroundEffects"
import SectionDivider from "./components/SectionDivider"
import ScrollProgress from "./components/ScrollProgress"
import { revealOnScroll, heroAnimation } from "./animations/gsapAnimations"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      revealOnScroll()
      heroAnimation()
    }
  }, [loading])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="min-h-screen bg-[#0F0A19] text-[#F5F3FF]">
      <BackgroundEffects />

      <ScrollProgress />

      <CustomCursor />

      <Navbar />

      <Hero />

      <SectionDivider />

      <Projects />

      <SectionDivider />

      <Stats />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <About />

      <SectionDivider />

      <Contact />

      <Footer />
    </main>
  )
}

export default App