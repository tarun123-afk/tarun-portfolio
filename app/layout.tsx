import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Tarun | Cinematic Video Editor",
  description: "Tarun is a cinematic video editor crafting raw, story-driven edits — color, sound, and rhythm cut into something unforgettable.",
  keywords: ["video editor", "cinematic editing", "color grading", "portfolio", "Tarun"],
  authors: [{ name: "Tarun" }],
  openGraph: {
    title: "Tarun | Cinematic Video Editor",
    description: "Tarun is a cinematic video editor crafting raw, story-driven edits — color, sound, and rhythm cut into something unforgettable.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
