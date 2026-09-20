"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { site } from "@/lib/site"

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Tarun — home">
          <Logo className="h-9" />
          <span className="text-lg font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href={site.instagram.work.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagram.work.handle}`}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/60 transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Instagram className="h-4 w-4" />
          </Link>

          <ThemeToggle />

          <Link
            href="#contact"
            className="hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:inline-flex"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, #00c2ff 100%)" }}
          >
            Hire me
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/60 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, #00c2ff 100%)" }}
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  )
}
