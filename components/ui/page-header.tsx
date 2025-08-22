import type { ReactNode } from "react"
import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  backgroundImage?: string
}

export function PageHeader({ title, description, children, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
          quality={100}
          sizes="100vw"
          fill
          placeholder="blur"
          blurDataURL={backgroundImage}
          style={{
            objectFit: 'cover'
          }}
          src={backgroundImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
      )}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6">{title}</h1>
          {description && (
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
