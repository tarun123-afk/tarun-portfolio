/**
 * Only one video on the page may have sound at a time.
 * Unmuting one video mutes every other <video> on the page.
 */
export function soloAudio(target: HTMLVideoElement) {
  document.querySelectorAll("video").forEach((el) => {
    if (el !== target) el.muted = true
  })
}

/**
 * Browsers block audio until the user interacts with the page, and a video
 * that started muted needs its volume restored explicitly. Returns the
 * resulting muted state so callers can sync their UI to reality.
 */
export async function toggleVideoSound(video: HTMLVideoElement): Promise<boolean> {
  const wantMuted = !video.muted

  if (!wantMuted) {
    soloAudio(video)
    video.muted = false
    video.volume = 1
    // A muted autoplaying video may need to be re-kicked once sound is on.
    try {
      await video.play()
    } catch {
      // Autoplay with sound was refused — fall back to muted so the UI stays truthful.
      video.muted = true
      return true
    }
  } else {
    video.muted = true
  }

  return video.muted
}
