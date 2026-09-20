"use client"

import { useRef, useState } from "react"
import { Clapperboard, Play, Volume2, VolumeX } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { works, type WorkItem } from "@/lib/site"

function PublishedCard({ work }: { work: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative aspect-[4/5] cursor-pointer bg-black"
        onClick={togglePlay}
        onMouseEnter={() => {
          const v = videoRef.current
          if (v && v.paused) {
            void v.play()
            setPlaying(true)
          }
        }}
      >
        <video
          ref={videoRef}
          src={work.video}
          poster={work.poster}
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {!playing && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black">
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
          </span>
        )}

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{work.type}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{work.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{work.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ReservedCard({ index }: { index: number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-dashed border-border bg-card/40">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-secondary/40">
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/70">
            <Clapperboard className="h-5 w-5 text-muted-foreground" />
          </span>
          <p className="font-mono text-2xl text-muted-foreground/70">
            {String(index).padStart(2, "0")}
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">In production</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Next release</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-muted-foreground">
          Project slot {String(index).padStart(2, "0")}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A finished edit is queued for this slot and goes live once it&apos;s uploaded.
        </p>
      </div>
    </article>
  )
}

export function Work() {
  const published = works.filter((w) => w.status === "published")
  let reservedIndex = published.length

  return (
    <section id="work" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Work</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Finished pieces, and what&apos;s next
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {published.length} published · {works.length - published.length} more being uploaded. Full
              feed lives on Instagram.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <Reveal key={work.id} delay={(i % 3) * 90}>
              {work.status === "published" ? (
                <PublishedCard work={work} />
              ) : (
                <ReservedCard index={++reservedIndex} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
