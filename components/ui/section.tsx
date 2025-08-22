import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  background?: "default" | "muted" | "primary" | "secondary"
  padding?: "sm" | "md" | "lg" | "xl"
}

export function Section({
  children,
  className,
  fullWidth = false,
  background = "default",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary/5",
    secondary: "bg-secondary/5",
  }

  const paddingClasses = {
    sm: "py-8 lg:py-12",
    md: "py-12 lg:py-16",
    lg: "py-16 lg:py-24",
    xl: "py-20 lg:py-32",
  }

  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      <div
        className={cn(fullWidth ? "w-full px-4 sm:px-6 lg:px-8 xl:px-12" : "container px-4 sm:px-6 lg:px-8 xl:px-12")}
      >
        {children}
      </div>
    </section>
  )
}
