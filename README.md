# Tarun — Video Editor & Motion Designer

Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (run this before pushing) |
| `npm run start` | Serve the production build |

Requires **Node.js 18.17+**.

---

## 2. Where to edit things

Almost everything you'll want to change lives in **one file: `lib/site.ts`**.

| What | Where |
|---|---|
| Email, Instagram handles, location, tool list | `lib/site.ts` → `site` |
| Projects (titles, descriptions, videos) | `lib/site.ts` → `works` |
| Page section order | `app/page.tsx` |
| Colours (light + dark) | `app/globals.css` → `:root` and `.dark` |
| Loading screen | `components/ui/preloader.tsx` |
| Dark/light switch | `components/ui/theme-toggle.tsx` |

### Section files

```
components/
├── layout/
│   ├── header.tsx      nav, theme toggle, mobile menu
│   └── footer.tsx      contact details + links
├── sections/
│   ├── hero.tsx        intro, Instagram, featured video, tool marquee
│   ├── work.tsx        project grid (real + reserved slots)
│   ├── about.tsx       bio + capability cards
│   ├── process.tsx     4-step working process
│   └── contact.tsx     contact card block
└── ui/
    ├── preloader.tsx      loading screen
    ├── theme-toggle.tsx   dark/light switch
    ├── reveal.tsx         scroll-in animation wrapper
    ├── magnetic-cursor.tsx custom desktop cursor
    └── section-title.tsx
```

---

## 3. Adding your 5 remaining videos

There are **5 reserved slots** in `lib/site.ts`. They render as clean
"In production" cards until you fill them in. Pick **one** of the two
routes below.

### Route A — Compress and host in the repo (simplest)

GitHub warns above 50MB per file and hard-blocks 100MB. Your Apple Watch
clip went from **19MB → 722KB** with no visible quality loss, so your
50MB+ files will almost certainly fit after compression.

**Step 1 — install ffmpeg**

- Windows: `winget install ffmpeg`
- macOS: `brew install ffmpeg`

**Step 2 — compress each video**

Vertical (Reels / 4:5 / 9:16):

```bash
ffmpeg -i raw-video.mp4 -vf "scale=1080:-2" -c:v libx264 -crf 28 \
  -preset slow -profile:v main -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 96k public/videos/my-project.mp4
```

Landscape (16:9):

```bash
ffmpeg -i raw-video.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 26 \
  -preset slow -profile:v main -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 96k public/videos/my-project.mp4
```

Add `-an` at the end if the clip doesn't need audio — it shrinks further.
Higher `-crf` = smaller file. Target **under 8MB** per clip.

**Step 3 — generate a poster frame** (shows instantly before the video loads)

```bash
ffmpeg -i public/videos/my-project.mp4 -ss 3 -vframes 1 -q:v 3 \
  public/images/my-project-poster.jpg
```

Pick a `-ss` timestamp on a strong frame, not a fade-to-black.

**Step 4 — fill the slot in `lib/site.ts`**

Replace one of the `slot-*` entries:

```ts
{
  id: "my-project",
  title: "Real title of the piece",
  type: "What it actually is · client or personal",
  description: "What you did, in plain language.",
  tools: ["After Effects", "Blender"],
  status: "published",
  video: "/videos/my-project.mp4",
  poster: "/images/my-project-poster.jpg",
  ratio: "4/5",
},
```

Set `status: "published"` — that's the switch that turns a reserved card
into a real one. Repeat for all five, then `git add . && git commit && git push`.

### Route B — Host externally (if a file still won't compress small enough)

Keeps the repo light and builds fast. Free tiers that work well:

| Service | Free tier | Best for |
|---|---|---|
| **Cloudinary** | 25GB bandwidth/mo | Easiest — auto-compresses on upload |
| **Vercel Blob** | 1GB storage | Already on Vercel, zero extra account |
| **Mux** | Trial credits | Proper streaming + analytics |
| **Bunny Stream** | ~$1/mo | Cheapest paid option, very fast |

Upload the file, copy the direct `.mp4` URL, and paste it straight into
the `video` field — the component doesn't care whether it's local or remote:

```ts
video: "https://res.cloudinary.com/your-account/video/upload/v1/my-project.mp4",
poster: "/images/my-project-poster.jpg",
```

Keep the poster local so it loads instantly.

### Route C — More than 6 projects

Add more objects to the `works` array in `lib/site.ts`. The grid reflows
automatically; no component changes needed.

> **Note:** don't use a plain Instagram or YouTube page link as `video` —
> those are web pages, not video files. You need a direct `.mp4` URL.

---

## 4. Other assets to swap

| File | Used in |
|---|---|
| `public/T.png` | Logo — header, footer, preloader, favicon |
| `public/images/apple-watch-poster.jpg` | Featured video poster frame |

---

## 5. Deploy to Vercel

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Then vercel.com → **New Project** → import the repo → deploy with the
default Next.js settings.

After your domain is live, set the environment variable
`NEXT_PUBLIC_SITE_URL` to your real URL (e.g. `https://tarun.dev`) so link
previews on WhatsApp, Instagram DMs and Twitter show the right thumbnail.

---

## 6. Features in this build

- **Loading screen** — logo animation with a real progress counter, unlocks on page load, 3.5s hard ceiling so it can never trap a visitor
- **Dark / light mode** — toggle in the header, saved to `localStorage`, applied before first paint so there's no white flash
- **Featured video in the hero** — Apple Watch showcase autoplays muted with an unmute button
- **Reserved project slots** — 5 placeholders that look deliberate, not broken
- **Scroll reveals, film grain, custom cursor, tool marquee**
- **Responsive** — mobile menu, safe-area insets for notched phones
- **Accessible** — skip link, focus rings, ARIA labels, full `prefers-reduced-motion` support
