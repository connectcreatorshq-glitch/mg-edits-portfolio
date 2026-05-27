function Contact() {
  return (
    <section id="contact" className="reveal px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#2A2045] bg-[#1B1430]/70 p-8 text-center md:p-14">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#A855F7]">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let’s Create Your Next High-Retention Video.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#B8B2D1]">
          Need cinematic storytelling, short-form editing,
          or high-retention content designed to keep viewers engaged?
          Let’s create something impactful together.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:mgedits406@gmail.com"
            className="rounded-full bg-[#8B5CF6] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
          >
            Email Me
          </a>

          <a
            href="https://www.instagram.com/_martians_gaming_18_/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#2A2045] px-8 py-3 font-medium text-white transition-all duration-300 hover:border-[#8B5CF6] hover:bg-[#151022]"
          >
            Instagram
          </a>
        </div>

        <div className="mt-8 space-y-3 text-[#B8B2D1]">
          <p>
            Email:{" "}
            <a
              href="mailto:mgedits406@gmail.com"
              className="text-[#A855F7] hover:text-white"
            >
              mgedits406@gmail.com
            </a>
          </p>

          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/_martians_gaming_18_/"
              target="_blank"
              rel="noreferrer"
              className="text-[#A855F7] hover:text-white"
            >
              @_martians_gaming_18_
            </a>
          </p>

          <p>
            Discord:{" "}
            <span className="text-[#A855F7]">
              mgedits18
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact