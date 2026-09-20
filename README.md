# Tarun — Cinematic Video Editor Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio site, built around the layout
generated on v0.app.

## 1. Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Adding your videos

Drop your video files into `public/videos/` with these exact names (or edit the `src` in the
component if you'd rather rename them):

| File               | Used in                                    |
|--------------------|---------------------------------------------|
| `hero.mp4`         | `components/sections/hero.tsx` (background) |
| `project1.mp4`     | `components/sections/selected-works.tsx` — "Wanderlust" |
| `project2.mp4`     | "Solstice" |
| `project3.mp4`     | "Echoes" |
| `project4.mp4`     | "Ignite" |

**Compress before committing.** Git repos (and GitHub) aren't built for large binary files:
GitHub warns above 50MB per file and hard-blocks anything over 100MB. Keep each clip small:

```bash
# Example with ffmpeg — re-encode to H.264, cap width at 1920px, drop audio bitrate
ffmpeg -i input.mov -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 96k public/videos/hero.mp4
```

Aim for roughly 5–15MB per clip. If your raw footage is much larger than that, host the video
externally instead (Cloudinary, Mux, Vimeo, or a Vercel Blob/S3 bucket) and point `src` at that
URL instead of a local path — this keeps the git repo small and your builds fast.

Also add:
- `public/T.png` — your logo (used in the hero)
- `public/images/tarun-portrait.jpg` — your photo (used in the About section)

## 3. Push this to GitHub

This project isn't in a git repo yet. From the project folder:

```bash
git init
git add .
git commit -m "Initial commit: cinematic portfolio"
git branch -M main
```

Then create an empty repository on GitHub (no README/license — this project already has them),
copy its URL, and:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## 4. Deploy

The project is set up for zero-config deployment on Vercel:

1. Push to GitHub as above.
2. Go to vercel.com → New Project → import the repo.
3. Leave the default Next.js build settings and deploy.

## Notes on the code (fixed while scaffolding)

- `hero.tsx` and the footer use inline `onMouseEnter`/`onMouseLeave` handlers, which require a
  Client Component in the App Router — `hero.tsx` was missing the `"use client"` directive
  (added). `final-cta.tsx` doesn't use handlers so it stays a Server Component.
- The sticky "stacking cards" effect in `selected-works.tsx` had every card at the same
  `top` offset (`index * 0`), which cancels the stacking effect — changed to `index * 24` so
  each card peeks out from behind the last as you scroll.
- `MagneticCursor` and `SectionTitle` were imported by the given files but not included in what
  you sent — both are now built out in `components/ui/`.
- Your footer and header nav link to `#about` and `#insights`, which weren't in the original
  files — added minimal `About` and `Insights` sections, plus a `Header` for navigation, so the
  anchor links resolve to something instead of a blank scroll.
- `T.png` (logo) and `public/images/tarun-portrait.jpg` (photo) are referenced but not included —
  see `public/images/PLACE_IMAGES_HERE.md`.
