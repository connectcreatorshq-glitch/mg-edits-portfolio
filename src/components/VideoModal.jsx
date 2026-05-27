function VideoModal({ video, title, onClose }) {
  if (!video) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 animate-modalFade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-3xl border border-[#2A2045] bg-[#151022] p-3 animate-modalScale md:p-4"
      >
        <button
          onClick={onClose}
          className="mb-3 rounded-full border border-[#2A2045] px-4 py-2 text-sm text-white transition hover:border-[#8B5CF6] md:absolute md:-top-12 md:right-0 md:mb-0"
        >
          Close
        </button>

        <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>

        <video
          src={video}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="max-h-[70vh] w-full rounded-2xl bg-black object-contain md:max-h-[75vh]"
        />
      </div>
    </div>
  )
}

export default VideoModal