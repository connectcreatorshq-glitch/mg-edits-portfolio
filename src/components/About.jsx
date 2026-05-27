function About() {
  return (
    <section id="about" className="reveal px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] border border-[#2A2045] bg-[#151022]/60 p-6 backdrop-blur-xl md:grid-cols-2 md:p-12">

        {/* LEFT */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-[#2A2045] bg-[#1B1430]/70 p-6">

          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/30 blur-3xl" />
          </div>

          <img
            src="/images/about-image.jpg"
            alt="Editor Setup"
            className="relative z-10 w-full max-w-sm rounded-2xl object-cover"
          />

        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A855F7] md:text-sm md:tracking-[0.35em]">
            About
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Editing With Story, Precision & Retention.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#B8B2D1] md:text-lg">

            <p>
              Creative video editor focused on storytelling,
              cinematic pacing, engaging visuals,
              and retention-driven editing designed
              to keep viewers watching till the end.
            </p>

            <p>
              Specialized in transforming raw footage into
              polished, impactful, and visually clean content
              tailored for creators, gaming videos,
              short-form content, and cinematic edits.
            </p>

            <p>
              Every project is crafted with attention to pacing,
              sound design, smooth transitions, and visual flow
              to deliver a clean and premium viewing experience.
            </p>

          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#8B5CF6] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
            >
              Let’s Create Something Great
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About