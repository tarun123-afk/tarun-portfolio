"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const titleText = "TARUN - CINEMATIC EDITOR"
  const words = titleText.split(" ")

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-background">
      {/* Full-screen looping background video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-20 bg-background"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32 relative z-10">
        <div className="max-w-4xl">
          {/* Logo */}
          <img src="/T.png" alt="Tarun logo" className="h-12 md:h-16 w-auto mb-8" />

          <p className="text-muted-foreground mb-6 text-lg font-normal">I&apos;m Tarun, Cinematic Video Editor</p>

          {/* Main Title with animated words */}
          <h1 className="text-5xl sm:text-6xl lg:text-[96px] font-semibold tracking-tight leading-[1] text-balance md:text-9xl">
            {words.map((word, index) => (
              <span
                key={index}
                className={`hero-word my-0 py-2 font-mono font-normal text-5xl md:text-7xl ${word === "CINEMATIC" ? "ai-gradient-word" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  marginRight: index < words.length - 1 ? "0.25em" : "0",
                  ...(word === "CINEMATIC"
                    ? {
                        background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(0 0 20px rgba(255, 0, 110, 0.3)) drop-shadow(0 0 30px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.2))",
                      }
                    : {}),
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl leading-relaxed text-left text-lg text-zinc-500 ml-0">
            I craft raw, cinematic edits that turn footage into feeling — blending color grading, sound design,
            and rhythm-driven cuts to tell stories that hit hard. Let&apos;s build something unforgettable,
            frame by frame.
          </p>

          <div className="flex flex-row items-start gap-4 mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full transition-all relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(32, 62, 236, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(32, 62, 236, 0.3)"
              }}
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#works"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium transition-colors"
              style={{ color: "#203eec" }}
            >
              View Works
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
