"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight, Instagram, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"
import { toggleVideoSound } from "@/lib/audio"
import { site, works } from "@/lib/site"

const featured = works.find((w) => w.status === "published")

export function Hero() {
  const words = "Video Editor & Motion Designer".split(" ")
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = async () => {
    const v = videoRef.current
    if (!v) return
    setMuted(await toggleVideoSound(v))
  }

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient brand glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.22), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-[460px] w-[460px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(0,194,255,0.16), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-12 md:pb-24">
        {/* ---------------- Left: copy ---------------- */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance work
          </div>

          <p className="mb-4 text-base text-muted-foreground md:text-lg">
            I&apos;m {site.name} — based in {site.location}
          </p>

          <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {words.map((word, i) => (
              <span
                key={i}
                className={`hero-word mr-[0.22em] ${word === "Motion" || word === "Designer" ? "gradient-text" : ""}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build 3D product animations, motion graphics and typography-driven edits — working in After
            Effects, Blender, DaVinci Resolve and CapCut. Early in my career, obsessive about the craft, and
            putting out new work constantly.
          </p>

          {/* ---- Instagram, highlighted ---- */}
          <div className="mt-9">
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Find my work on Instagram
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={site.instagram.work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full p-[1.5px] transition-transform hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #f9ce34, #ee2a7b 45%, #6228d7 100%)" }}
              >
                <span className="inline-flex items-center gap-2.5 rounded-full bg-background px-4 py-2.5">
                  <Instagram className="h-4 w-4" />
                  <span className="text-sm font-semibold">{site.instagram.work.handle}</span>
                  <span className="text-xs text-muted-foreground">{site.instagram.work.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href={site.instagram.main.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/50 px-4 py-2.5 transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm font-medium">{site.instagram.main.handle}</span>
                <span className="text-xs text-muted-foreground">{site.instagram.main.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium text-white transition-transform hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, #00c2ff 100%)",
                boxShadow: "0 8px 30px hsl(var(--primary) / 0.28)",
              }}
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
            >
              See the work
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ---------------- Right: featured reel ---------------- */}
        {featured?.video && (
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] blur-2xl"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.22), rgba(0,194,255,0.14))" }}
            />
            <figure className="relative mx-auto w-full max-w-[420px]">
              <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl">
                <div className="relative aspect-[4/5] bg-black">
                  <video
                    ref={videoRef}
                    src={featured.video}
                    poster={featured.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={muted ? "Unmute showreel" : "Mute showreel"}
                    className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{featured.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{featured.tools.join(" · ")}</p>
                  </div>
                  <Link
                    href="#work"
                    className="shrink-0 text-xs font-medium"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    Details
                  </Link>
                </figcaption>
              </div>
            </figure>
          </div>
        )}
      </div>

      {/* ---------------- Tool marquee ---------------- */}
      <div className="marquee-mask border-y border-border py-5">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16" aria-hidden={dup === 1}>
              {site.tools.map((tool) => (
                <span
                  key={`${dup}-${tool}`}
                  className="whitespace-nowrap text-sm uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
