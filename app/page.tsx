import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

function IslandGlow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden
      className={`island-glow ${compact ? "island-glow--compact" : "island-glow--default"}`}
    >
      <div className="island-glow__orb island-glow__orb--primary" />
      <div className="island-glow__orb island-glow__orb--cyan" />
      <div className="island-glow__orb island-glow__orb--rose" />
    </div>
  )
}

const islandContainerClass = "mx-auto w-full max-w-4xl px-4 sm:px-6"

export default function Page() {
  return (
    <main className="relative min-h-svh text-foreground">
      <div
        className={`fixed inset-x-0 top-[max(1rem,env(safe-area-inset-top))] z-50 transform-gpu isolate ${islandContainerClass}`}
      >
        <div className="relative">
          <IslandGlow compact />
          <div className="island-shell">
            <SiteHeader />
          </div>
        </div>
      </div>

      <div className={`relative z-10 pt-[calc(max(1rem,env(safe-area-inset-top))+5.5rem)] ${islandContainerClass} mt-2 mb-8`}>
        <div className="relative">
          <IslandGlow />
          <div className="island-shell">
            <HeroSection />
            <WorkSection />
            <AboutSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  )
}
