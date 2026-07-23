"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-foreground">The Poki999</span>
          <span className="text-sm text-muted-foreground">Product Designer</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-1 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-4xl flex-col px-6 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}