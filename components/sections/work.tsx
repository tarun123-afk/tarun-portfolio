"use client"

import { useRef, useState } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { toggleVideoSound } from "@/lib/audio"
import { works, type WorkItem } from "@/lib/site"

function PublishedCard({ work }: { work: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  /** Landscape clips fill the frame; vertical/square ones fit inside it uncropped. */
  const fit = work.ratio === "16/9" || !work.ratio ? "object-cover" : "object-contain"

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
    } else {
      v.pause()
    }
  }

  const toggleSound = async (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (v.paused) void v.play()
    setMuted(await toggleVideoSound(v))
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative aspect-video cursor-pointer bg-black"
        onClick={togglePlay}
        onMouseEnter={() => {
          const v = videoRef.current
          if (v && v.paused) void v.play()
        }}
        onMouseLeave={() => {
          const v = videoRef.current
          // Leave a video that the visitor has unmuted alone — they're watching it.
          if (v && !v.paused && v.muted) v.pause()
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
          className={`h-full w-full ${fit}`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
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

export function Work() {
  const published = works.filter((w) => w.status === "published")

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
              {published.length} published pieces. Full feed lives on Instagram.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((work, i) => (
            <Reveal key={work.id} delay={(i % 3) * 90}>
              <PublishedCard work={work} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
