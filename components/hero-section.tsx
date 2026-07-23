import { ArrowDownRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-20 md:pt-28">
      <p className="mb-8 text-sm text-muted-foreground">Welcome Dear,</p>

      <h1 className="max-w-3xl text-pretty text-3xl font-normal leading-snug tracking-tight text-foreground md:text-4xl">
        The Poki999
      </h1>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
        >
          About me
          <ArrowDownRight className="size-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
