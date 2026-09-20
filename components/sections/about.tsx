const skills = [
  "Color Grading",
  "Sound Design",
  "DaVinci Resolve",
  "Premiere Pro",
  "After Effects",
  "Beat Syncing",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-secondary">
            <img
              src="/images/tarun-portrait.jpg"
              alt="Portrait of Tarun"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">About</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              I edit for the feeling, not just the footage
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              For the last few years I&apos;ve cut travel films, music videos, documentaries, and brand
              commercials — always chasing the same thing: a rhythm that makes people feel something before
              they can explain why. Every project starts with the story, then the color, sound, and pace
              follow.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
