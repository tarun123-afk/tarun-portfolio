/**
 * Single source of truth for every piece of personal / contact data on the site.
 * Edit this file and the whole site updates.
 */

export const site = {
  name: "Tarun",
  role: "Video Editor & Motion Designer",
  email: "tarunkumarkps66@gmail.com",
  location: "India",
  available: true,

  instagram: {
    main: { handle: "@tarun66985", url: "https://instagram.com/tarun66985", label: "Personal" },
    work: { handle: "@txrun_ae", url: "https://instagram.com/txrun_ae", label: "Edits & Motion" },
  },

  /** Tools you actually work in. */
  tools: [
    "Video Editor",
    "After Effects",
    "DaVinci Resolve",
    "CapCut",
    "Blender",
    "Motion Design",
    "Typography",
  ],
} as const

export type WorkStatus = "published" | "upcoming"

export interface WorkItem {
  id: string
  /** Factual title — no invented client names. */
  title: string
  /** What the piece actually is. */
  type: string
  /** Plain description of what was done. */
  description: string
  /** Tools genuinely used on this piece. */
  tools: string[]
  status: WorkStatus
  /** Path under /public/videos — only for published items. */
  video?: string
  poster?: string
  /** 4:5 for vertical/reels, 16:9 for landscape. Drives the card frame. */
  ratio?: "4/5" | "1/1" | "16/9" | "9/16"
}

export const works: WorkItem[] = [
  {
    id: "apple-watch",
    title: "Apple Watch — Product Showcase",
    type: "3D product animation · personal project",
    description:
      "Self-initiated product piece: watch model animated in Blender, interface screens and transitions built and tracked in After Effects, finished with a colour pass in DaVinci Resolve.",
    tools: ["Blender", "After Effects", "DaVinci Resolve"],
    status: "published",
    video: "/videos/apple-watch-showcase.mp4",
    poster: "/images/apple-watch-poster.jpg",
    ratio: "4/5",
  },
  {
    id: "espresso",
    title: "Espresso — Motion Graphics & Visual Design",
    type: "Lyric edit · motion graphics",
    description:
      "A dynamic motion graphics piece built around the song's visual identity, combining bold typography, product-focused composition, smooth transitions, and rhythmic animation to create an engaging visual presentation.",
    tools: ["After Effects", "Motion Design", "Typography"],
    status: "published",
    video: "/videos/espresso-lyric-edit.mp4",
    poster: "/images/espresso-lyric-edit-poster.jpg",
    ratio: "1/1",
  },
  {
    id: "porsche-gt3rs",
    title: "Porsche 911 GT3 RS — Cinematic Automotive Edit",
    type: "Automotive edit · cinematic",
    description:
      "A cinematic automotive edit focused on the Porsche 911 GT3 RS, combining dynamic pacing, detailed visual composition, transitions, sound design, and colour treatment to create a high-impact presentation.",
    tools: ["DaVinci Resolve", "After Effects", "Sound Design"],
    status: "published",
    video: "/videos/porsche-911-gt3-rs.mp4",
    poster: "/images/porsche-911-gt3-rs-poster.jpg",
    ratio: "16/9",
  },
  {
    id: "rdr2",
    title: "Cinematic RDR2 Character Edit — Visual Storytelling",
    type: "Character edit · visual storytelling",
    description:
      "A cinematic character-focused edit using dramatic pacing, monochrome visuals, typography, transitions, and carefully timed cuts to create a dark and atmospheric visual style.",
    tools: ["After Effects", "DaVinci Resolve", "Typography"],
    status: "published",
    video: "/videos/rdr2-character-edit.mp4",
    poster: "/images/rdr2-character-edit-poster.jpg",
    ratio: "16/9",
  },
  {
    id: "seamless-loop",
    title: "Seamless Loop — Motion Graphics Animation",
    type: "Looping animation · motion graphics",
    description:
      "A seamless looping animation created with clean geometric forms, smooth movement, and continuous transitions. Designed to maintain visual flow while creating a polished and repeatable motion graphic.",
    tools: ["After Effects", "Motion Design"],
    status: "published",
    video: "/videos/seamless-loop.mp4",
    poster: "/images/seamless-loop-poster.jpg",
    ratio: "16/9",
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan — Cinematic Typography Edit",
    type: "Anime edit · typography & compositing",
    description:
      "A cinematic anime edit combining typography, motion graphics, compositing, transitions, and atmospheric visuals to enhance the intensity and storytelling of the original footage.",
    tools: ["After Effects", "Typography", "Motion Design"],
    status: "published",
    video: "/videos/attack-on-titan-typography.mp4",
    poster: "/images/attack-on-titan-typography-poster.jpg",
    ratio: "16/9",
  },
]
