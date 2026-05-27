function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F0A19]">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-widest text-white">
          MG Edits
        </h1>

        <div className="mx-auto mt-6 h-1 w-40 overflow-hidden rounded-full bg-[#1B1430]">
          <div className="h-full w-full animate-loader rounded-full bg-[#8B5CF6]" />
        </div>
      </div>
    </div>
  )
}

export default Loader