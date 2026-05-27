import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function revealOnScroll() {
  const elements = gsap.utils.toArray(".reveal")

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

export function heroAnimation() {
  const tl = gsap.timeline()

  tl.from(".hero-tag", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out",
  })

  tl.from(".hero-title", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  }, "-=0.3")

  tl.from(".hero-description", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.5")

  tl.from(".hero-buttons", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power3.out",
  }, "-=0.4")
}