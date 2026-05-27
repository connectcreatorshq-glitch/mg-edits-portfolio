function VideoModal({ youtubeId, title, onClose }) {
  if (!youtubeId) return null

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

        <div className="aspect-video overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal