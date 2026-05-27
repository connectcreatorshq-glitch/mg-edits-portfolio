function SectionDivider() {
  return (
    <div className="relative mx-auto my-10 h-px w-full max-w-5xl overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

    </div>
  )
}

export default SectionDivider