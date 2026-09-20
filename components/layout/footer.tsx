import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { site } from "@/lib/site"

const footerLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div
        className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 md:py-20"
        style={{ paddingBottom: "calc(3.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <img src="/T.png" alt="" className="h-8 w-auto" />
              <span className="text-xl font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.role} — motion graphics, 3D product animation and typography-led edits.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Get in touch</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </Link>
              </li>
              {[site.instagram.work, site.instagram.main].map((ig) => (
                <li key={ig.handle}>
                  <Link
                    href={ig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    {ig.handle}
                    <span className="text-xs opacity-70">{ig.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
