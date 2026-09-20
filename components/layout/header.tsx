"use client"

import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#insights", label: "Insights" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-background/70 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Tarun
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all"
          style={{
            background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
          }}
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  )
}
