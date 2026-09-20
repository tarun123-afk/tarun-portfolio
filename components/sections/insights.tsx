import { SectionTitle } from "@/components/ui/section-title"

const insights = [
  {
    title: "Why pacing matters more than cuts per minute",
    excerpt: "Fast cutting isn't the same as good rhythm — how I decide when to hold a shot.",
  },
  {
    title: "Building a color grade from a single reference frame",
    excerpt: "My workflow for turning one mood-board image into a full LUT.",
  },
  {
    title: "Syncing sound design to picture without it feeling glued on",
    excerpt: "Small habits that make sound design disappear into the edit.",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Insights
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item) => (
            <article
              key={item.title}
              className="p-6 rounded-2xl border border-border bg-card transition-colors hover:bg-secondary"
            >
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
