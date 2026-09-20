import { Reveal } from "@/components/ui/reveal"
import { site } from "@/lib/site"

const capabilities = [
  {
    title: "Motion graphics & VFX",
    body: "Compositing, tracking, transitions and effects built in After Effects.",
    tool: "After Effects",
  },
  {
    title: "3D animation",
    body: "Modelling, lighting, camera moves and product renders in Blender.",
    tool: "Blender",
  },
  {
    title: "Colour & finishing",
    body: "Grading, node-based colour work and final delivery in DaVinci Resolve.",
    tool: "DaVinci Resolve",
  },
  {
    title: "Short-form edits",
    body: "Fast-turnaround vertical cuts for Reels, Shorts and TikTok in CapCut.",
    tool: "CapCut",
  },
  {
    title: "Kinetic typography",
    body: "Text-led animation — timing, weight and movement carrying the message.",
    tool: "After Effects",
  },
  {
    title: "Design direction",
    body: "Layout, palette and motion language kept consistent across a project.",
    tool: "Motion Design",
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">About</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                New to the industry.
                <br />
                <span className="gradient-text">Not new to the work.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                I&apos;m {site.name}, a video editor and motion designer based in {site.location}. I&apos;m
                early in my career, which means I&apos;m building my reel in public — every project gets the
                full attention it deserves, and I publish what I make rather than sitting on it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Most of my time goes into After Effects and Blender, with DaVinci Resolve for colour and
                CapCut for quick vertical turnarounds. I care most about motion design and typography — how
                things move, how long they hold, and how text carries a message without narration.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If you want to see the pace I work at, the Instagram feed is the honest version.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {item.tool}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
