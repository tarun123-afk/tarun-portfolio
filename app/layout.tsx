import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import { Preloader } from "@/components/ui/preloader"
import { site } from "@/lib/site"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

const description =
  "Tarun is a video editor and motion designer working in After Effects, DaVinci Resolve, Blender and CapCut — 3D product animation, motion graphics and typography-led edits."

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tarun-portfolio.vercel.app",
  ),
  title: "Tarun — Video Editor & Motion Designer",
  description,
  keywords: [
    "video editor",
    "motion designer",
    "After Effects",
    "DaVinci Resolve",
    "Blender",
    "CapCut",
    "motion graphics",
    "typography animation",
    "Tarun",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Tarun — Video Editor & Motion Designer",
    description,
    type: "website",
    images: ["/images/apple-watch-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun — Video Editor & Motion Designer",
    description,
    images: ["/images/apple-watch-poster.jpg"],
  },
  icons: { icon: "/T.png", apple: "/T.png" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

/**
 * Applies the saved theme before first paint so there is no flash of the
 * wrong colour scheme. Must stay inline and blocking.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${interTight.className} font-sans antialiased grain`}>
        <Preloader />
        <MagneticCursor />
        <a
          href="#works"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to work
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
