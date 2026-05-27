import { useState } from "react"
import { projects } from "../data/projects"
import VideoModal from "./VideoModal"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="projects" className="reveal px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A855F7] md:text-sm md:tracking-[0.35em]">
            Creative Showcase
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Projects Crafted With Story & Precision
          </h2>

          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-3xl border border-[#2A2045] bg-[#1B1430]/70 p-5 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#8B5CF6] hover:shadow-[0_0_45px_rgba(139,92,246,0.18)] md:p-6"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
                </div>

                <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#2A2045]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8B5CF6] md:h-16 md:w-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="ml-1 h-6 w-6 md:h-7 md:w-7"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="relative text-sm text-[#A855F7]">
                  {project.category}
                </p>

                <h3 className="relative mt-3 text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>

                <p className="relative mt-4 text-sm leading-relaxed text-[#B8B2D1] md:text-base">
                  {project.description}
                </p>

                <p className="relative mt-5 text-sm font-medium text-[#A855F7]">
                  Click to watch →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        video={selectedProject?.video}
        title={selectedProject?.title}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects