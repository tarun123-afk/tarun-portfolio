import Link from "next/link"
import { ArrowUpRight, Instagram, Mail, MapPin } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { site } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[110px]"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)" }}
            />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Got footage, or just an idea?
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  Send me the brief and the deadline. I&apos;ll tell you honestly whether I&apos;m the right
                  editor for it and what it would take.
                </p>

                <Link
                  href={`mailto:${site.email}?subject=Project%20enquiry`}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-white transition-transform hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, #00c2ff 100%)",
                    boxShadow: "0 8px 30px hsl(var(--primary) / 0.3)",
                  }}
                >
                  Email me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                <Link
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </span>
                    <span className="block truncate text-sm font-medium">{site.email}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                {[site.instagram.work, site.instagram.main].map((ig) => (
                  <Link
                    key={ig.handle}
                    href={ig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Instagram className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Instagram · {ig.label}
                      </span>
                      <span className="block truncate text-sm font-medium">{ig.handle}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Based in
                    </span>
                    <span className="block text-sm font-medium">{site.location} · works remotely</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
