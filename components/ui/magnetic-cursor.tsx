"use client"

import { useEffect, useRef } from "react"

/** Desktop-only custom cursor: a solid dot plus a lagging ring that grows on interactive elements. */
export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

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

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(animateRing)
    }

    // Delegated so elements added later (or re-rendered) still trigger the ring.
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest("a, button, [role='button'], input, video")) {
        ring.classList.add("cursor-ring--active")
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest("a, button, [role='button'], input, video")) {
        ring.classList.remove("cursor-ring--active")
      }
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-foreground md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border transition-[width,height,background-color] duration-200 md:block"
        style={{ willChange: "transform", borderColor: "hsl(var(--primary))" }}
      />
    </>
  )
}
