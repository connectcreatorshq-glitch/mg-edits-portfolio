import {
  Clapperboard,
  Sparkles,
  AudioWaveform,
  Flame,
  MonitorPlay,
  WandSparkles,
  Palette,
  TimerReset,
} from "lucide-react"

const skills = [
  {
    title: "Cinematic Editing",
    icon: Clapperboard,
  },

  {
    title: "Storytelling",
    icon: Sparkles,
  },

  {
    title: "Shorts Retention",
    icon: Flame,
  },

  {
    title: "Sound Design",
    icon: AudioWaveform,
  },

  {
    title: "Gaming Edits",
    icon: MonitorPlay,
  },

  {
    title: "Motion Graphics",
    icon: WandSparkles,
  },

  {
    title: "Color Grading",
    icon: Palette,
  },

  {
    title: "Pacing",
    icon: TimerReset,
  },
]

function Skills() {
  return (
    <section id="skills" className="reveal px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A855F7] md:text-sm md:tracking-[0.35em]">
          Skills
        </p>

        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Editing Skills That Make Videos Feel Premium
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.title}
                className="group rounded-3xl border border-[#2A2045] bg-[#1B1430]/60 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5CF6] hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] md:p-6"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8B5CF6]/10 text-[#A855F7] transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white md:h-14 md:w-14">

                  <Icon size={24} />

                </div>

                <h3 className="text-base font-semibold text-white md:text-lg">
                  {skill.title}
                </h3>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Skills