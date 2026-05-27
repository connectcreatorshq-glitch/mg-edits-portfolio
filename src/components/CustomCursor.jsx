import { useEffect, useState } from "react"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A855F7] bg-[#8B5CF6]/20 backdrop-blur-sm md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CustomCursor