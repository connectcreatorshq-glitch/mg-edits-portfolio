function Stats() {
  const stats = [
    {
      value: "80%",
      label: "Client Satisfaction",
    },

    {
      value: "30+",
      label: "Projects Completed",
    },

    {
      value: "$800",
      label: "Projected Revenue",
    },

    {
      value: "10+",
      label: "Online Clients",
    },

    {
      value: "60%",
      label: "Client Loyalty",
    },

    {
      value: "2x",
      label: "Project Turnaround Time",
    },

    {
      value: "200+",
      label: "Website Visitors",
    },

    {
      value: "30+",
      label: "Projects Delivered",
    },
  ]

  return (
    <section className="reveal px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A855F7] md:text-sm md:tracking-[0.35em]">
          Achievements
        </p>

        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Results That Build Trust
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-3xl border border-[#2A2045] bg-[#1B1430]/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5CF6] hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]"
            >

              <h3 className="text-4xl font-bold text-[#A855F7]">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#B8B2D1]">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Stats