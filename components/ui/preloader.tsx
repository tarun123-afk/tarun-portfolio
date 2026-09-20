"use client"

import { useEffect, useState } from "react"

/**
 * Full-screen loading screen. Counts to 100 while the page settles, then
 * curtains away. Unlocks scroll only when it's gone.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true)
      return
    }

    document.body.style.overflow = "hidden"
    let value = 0
    let raf = 0
    let finished = false

    const tick = () => {
      // Ease towards 90, then wait for window load to finish the last 10.
      const target = finished ? 100 : 90
      value += (target - value) * 0.045 + 0.35
      if (value > target) value = target
      setProgress(Math.min(100, Math.round(value)))

      if (finished && value >= 99.4) {
        setProgress(100)
        setDone(true)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const finish = () => {
      finished = true
    }
    if (document.readyState === "complete") {
      setTimeout(finish, 450)
    } else {
      window.addEventListener("load", finish)
    }
    // Hard ceiling so the loader can never trap a visitor.
    const safety = setTimeout(finish, 3500)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(safety)
      window.removeEventListener("load", finish)
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ""
    }, 850)
    return () => clearTimeout(t)
  }, [done])

  if (hidden) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-[opacity,visibility] duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* soft brand glow behind the mark */}
      <div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.28), transparent 70%)" }}
      />

      <div className="relative flex flex-col items-center">
        <span className="preloader-logo inline-flex aspect-video h-20 items-center justify-center md:h-24">
          <img
            src="/T.png"
            alt=""
            className="h-full w-auto aspect-square rounded-full object-cover object-center"
          />
        </span>

        <div className="mt-10 h-px w-56 overflow-hidden bg-border md:w-72">
          <div
            className="preloader-bar h-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(var(--primary)), #00c2ff)",
            }}
          />
        </div>

        <div className="mt-5 flex w-56 items-center justify-between md:w-72">
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Loading portfolio
          </span>
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </div>

    </div>
  )
}
