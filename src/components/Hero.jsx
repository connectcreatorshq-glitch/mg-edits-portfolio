import MagneticButton from "./MagneticButton"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-24 overflow-hidden">
      <div className="relative max-w-5xl text-center">
        <div className="absolute inset-0 -z-10 mx-auto h-[320px] w-[320px] rounded-full bg-purple-500 opacity-20 blur-3xl md:h-[400px] md:w-[400px]"></div>

        <p className="hero-tag mb-4 text-xs uppercase tracking-[0.3em] text-[#A855F7] md:text-sm md:tracking-[0.4em]">
          Creative Video Editor
        </p>

        <h1 className="hero-title text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          I Create Videos
          That Keep People Watching.
          <span className="block text-[#A855F7]">
            That Hold Attention.
          </span>
        </h1>

        <p className="hero-description mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#B8B2D1] md:text-xl">
          Creative video editing focused on storytelling,
          cinematic pacing, engaging visuals, and retention-driven content.
        </p>

        <div className="hero-buttons mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <MagneticButton
            href="#projects"
            className="justify-center rounded-full bg-[#8B5CF6] px-8 py-3 font-medium text-white hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="justify-center rounded-full border border-[#2A2045] bg-[#151022]/40 px-8 py-3 font-medium text-[#F5F3FF] backdrop-blur-md hover:border-[#8B5CF6] hover:bg-[#1B1430]"
          >
            Contact Me
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

export default Hero