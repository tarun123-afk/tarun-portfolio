import { Reveal } from "@/components/ui/reveal"

const steps = [
  {
    step: "01",
    title: "Brief",
    body: "You send the footage or the idea, the references you like, the platform it's going out on, and the deadline.",
  },
  {
    step: "02",
    title: "First cut",
    body: "Structure, pacing and sound go in first. You see a rough version before any polish, so the shape is right early.",
  },
  {
    step: "03",
    title: "Design & motion",
    body: "Graphics, 3D, typography and transitions get built on top of the approved cut.",
  },
  {
    step: "04",
    title: "Colour & delivery",
    body: "Final grade, sound balance, and export in the sizes you need — vertical, square or landscape.",
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Process</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              How a project runs
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p
                  className="font-mono text-sm"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {item.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
