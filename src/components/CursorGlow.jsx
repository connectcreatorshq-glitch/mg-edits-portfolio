import { useEffect, useState } from "react"

function CursorGlow() {
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
      className="pointer-events-none fixed z-[999] h-[300px] w-[300px] rounded-full bg-purple-500 opacity-10 blur-[120px] transition-transform duration-200"
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    />
  )
}

export default CursorGlow