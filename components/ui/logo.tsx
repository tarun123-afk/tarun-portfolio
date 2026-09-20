/**
 * Logo lockup: a circular mark centred inside a 16:9 area.
 * The wrapper holds the 16:9 ratio; the mark itself is a perfect circle.
 */
export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <span className={`inline-flex aspect-video items-center justify-center ${className}`}>
      <img
        src="/T.png"
        alt=""
        className="h-full w-auto aspect-square rounded-full object-cover object-center"
      />
    </span>
  )
}
