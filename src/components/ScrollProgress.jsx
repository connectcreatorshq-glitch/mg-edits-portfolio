import { useEffect, useState } from "react"

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const currentProgress = (scrollTop / documentHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", updateProgress)

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-[#8B5CF6]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress