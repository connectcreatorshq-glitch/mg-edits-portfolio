import Lenis from "lenis"

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 0.8,
    smoothWheel: true,
    anchors: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}