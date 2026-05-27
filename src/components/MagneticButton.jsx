import { useRef } from "react"

function MagneticButton({ children, className = "", href = "#" }) {
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    const button = buttonRef.current
    const rect = button.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleMouseLeave = () => {
    const button = buttonRef.current
    button.style.transform = "translate(0px, 0px)"
  }

  return (
    <a
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex transition-transform duration-300 ${className}`}
    >
      {children}
    </a>
  )
}

export default MagneticButton