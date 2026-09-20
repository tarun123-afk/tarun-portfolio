"use client"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "Wanderlust",
    category: "Cinematic Travel Film",
    description: "A color-graded travel edit built around movement, light, and pace.",
    video: "/videos/project1.mp4",
    tags: ["Color Grade", "DaVinci Resolve", "Travel"],
  },
  {
    id: 2,
    title: "Solstice",
    category: "Music Video",
    description: "High-contrast cuts synced to a live performance track.",
    video: "/videos/project2.mp4",
    tags: ["Beat Sync", "Premiere Pro", "Music"],
  },
  {
    id: 3,
    title: "Echoes",
    category: "Short Documentary",
    description: "A quiet, narrative-driven edit built for emotional pacing.",
    video: "/videos/project3.mp4",
    tags: ["Sound Design", "Documentary", "Storytelling"],
  },
  {
    id: 4,
    title: "Ignite",
    category: "Brand Commercial",
    description: "Fast, punchy commercial cut delivered for a product launch.",
    video: "/videos/project4.mp4",
    tags: ["After Effects", "Commercial", "VFX"],
  },
]

export function SelectedWorks() {
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.controls = true
      video.play()
    }
  }

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      video.controls = false
    }
  }

  return (
    <section id="works" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Selected work
          </SectionTitle>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            View all works
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>
        <div className="relative">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="sticky"
              style={{
                top: `${70 + index * 24}px`,
                zIndex: index + 1,
              }}
            >
              <Link href="#" className="group block pt-10">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Video */}
                  <div
                    className="relative aspect-[2/1] overflow-hidden bg-secondary"
                    onMouseEnter={() => handleMouseEnter(work.id)}
                    onMouseLeave={() => handleMouseLeave(work.id)}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[work.id] = el
                      }}
                      src={work.video}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-3 md:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{work.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                        style={{ color: "#203eec" }}
                      />
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            View all works
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
