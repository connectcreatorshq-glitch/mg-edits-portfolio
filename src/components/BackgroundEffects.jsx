function BackgroundEffects() {
  return (
    <>
      {/* GRID */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* PURPLE GLOW TOP */}
      <div className="pointer-events-none fixed left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600 opacity-20 blur-[150px]" />

      {/* PURPLE GLOW BOTTOM */}
      <div className="pointer-events-none fixed bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500 opacity-10 blur-[180px]" />

      {/* NOISE */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  )
}

export default BackgroundEffects