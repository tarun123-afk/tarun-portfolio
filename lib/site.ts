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
    work: { handle: "@txrun.ae", url: "https://instagram.com/txrun.ae", label: "Edits & Motion" },
  },

  /** Tools you actually work in. */
  tools: [
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
  ratio?: "4/5" | "16/9" | "9/16"
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
  // ---------------------------------------------------------------------
  // 5 reserved slots. When a video is ready:
  //   1. set status: "published"
  //   2. add video: "/videos/your-file.mp4" (or a hosted URL — see README)
  //   3. add poster: "/images/your-poster.jpg"
  //   4. fill in the real title / type / description / tools
  // Until then they render as clean "in production" slots.
  // ---------------------------------------------------------------------
  { id: "slot-2", title: "", type: "", description: "", tools: [], status: "upcoming", ratio: "4/5" },
  { id: "slot-3", title: "", type: "", description: "", tools: [], status: "upcoming", ratio: "4/5" },
  { id: "slot-4", title: "", type: "", description: "", tools: [], status: "upcoming", ratio: "4/5" },
  { id: "slot-5", title: "", type: "", description: "", tools: [], status: "upcoming", ratio: "4/5" },
  { id: "slot-6", title: "", type: "", description: "", tools: [], status: "upcoming", ratio: "4/5" },
]
