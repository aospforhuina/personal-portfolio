
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/_hui062/" },
  { label: "GitHub", href: "https://github.com/aospforhuina" },
];
export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-sm text-muted-foreground">Contact</h2>

        <p className="max-w-xl text-pretty text-2xl font-normal leading-snug tracking-tight text-foreground md:text-3xl">
          bone46730@gmail.com
        </p>

        <a
          href="mailto:bone46730@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          bone46730@gmail.com
          <ArrowUpRight className="size-4" />
        </a>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
              <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} The Poki999. All rights reserved.</span>
          <span>Designed &amp; built with care.</span>
        </div>
      </div>
    </section>
  )
}

