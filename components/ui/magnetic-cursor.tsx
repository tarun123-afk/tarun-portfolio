"use client"

import { useEffect, useRef } from "react"

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch devices — a synthetic cursor doesn't make sense there.
    if (window.matchMedia("(pointer: coarse)").matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    const onEnterInteractive = () => ring.classList.add("cursor-ring--active")
    const onLeaveInteractive = () => ring.classList.remove("cursor-ring--active")

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(animateRing)

    const interactiveEls = document.querySelectorAll("a, button, [role='button']")
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive)
      el.addEventListener("mouseleave", onLeaveInteractive)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive)
        el.removeEventListener("mouseleave", onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-white md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border transition-[width,height] duration-200 md:block"
        style={{ willChange: "transform", borderColor: "#203eec" }}
      />
      <style jsx global>{`
        .cursor-ring--active {
          width: 3rem;
          height: 3rem;
          background: rgba(32, 62, 236, 0.08);
        }
      `}</style>
    </>
  )
}
