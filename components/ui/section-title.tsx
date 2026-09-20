import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: "h2" | "h3"
}

export function SectionTitle({ children, className = "", as = "h2" }: SectionTitleProps) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
