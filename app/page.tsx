import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <SiteHeader />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
