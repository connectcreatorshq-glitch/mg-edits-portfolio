import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("")
        setScrolled(false)
        return
      }

      setScrolled(window.scrollY > 40)

      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 180

      sections.forEach((section) => {
        const id = section.getAttribute("id")
        if (!id) return

        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id)
        }
      })

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Work", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-[#3A2A60] bg-[#0F0A19]/90 py-2 shadow-[0_0_35px_rgba(139,92,246,0.12)]"
            : "border-[#2A2045] bg-[#151022]/70 py-3"
        }`}
      >
        <a href="#" className="text-lg font-bold tracking-tight text-[#F5F3FF]">
          MG Edits
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                activeSection === link.id
                  ? "text-[#A855F7]"
                  : "text-[#B8B2D1] hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#8B5CF6] px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] md:block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-4 rounded-3xl border border-[#2A2045] bg-[#151022]/95 p-6 text-[#F5F3FF] backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`transition ${
                activeSection === link.id ? "text-[#A855F7]" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-[#8B5CF6] px-5 py-3 text-center font-medium"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar