import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/ui/hero-section"
import { FeaturedItems } from "@/components/ui/featured-items"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedItems />
    </main>
  )
}
