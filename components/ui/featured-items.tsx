"use client"

import { ItemCard } from "@/components/ui/item-card"

const featuredItems = [
  {
    id: 1,
    name: "Sword of Achilles",
    category: "Weapon",
    rarity: "Legendary",
    image: "/golden-legendary-sword-with-divine-engravings.jpg",
    icon: "⚔️",
  },
  {
    id: 2,
    name: "Helm of Invisibility",
    category: "Armor",
    rarity: "Mythical",
    image: "/ancient-greek-helm-that-shimmers-with-invisibility.jpg",
    icon: "🛡️",
  },
  {
    id: 3,
    name: "Golden Fleece",
    category: "Artifact",
    rarity: "Mythical",
    image: "/shimmering-golden-fleece-glowing-with-divine-power.jpg",
    icon: "✨",
  },
  {
    id: 4,
    name: "Thunderbolt of Zeus",
    category: "Weapon",
    rarity: "Legendary",
    image: "/lightning-bolt-crackling-with-electricity-and-divi.jpg",
    icon: "⚡",
  },
  {
    id: 5,
    name: "Aphrodite's Mirror",
    category: "Artifact",
    rarity: "Epic",
    image: "/ornate-ancient-greek-mirror-with-jewels.jpg",
    icon: "✨",
  },
  {
    id: 6,
    name: "Caduceus Staff",
    category: "Weapon",
    rarity: "Legendary",
    image: "/golden-staff-with-two-intertwined-serpents.jpg",
    icon: "⚔️",
  },
]

export function FeaturedItems() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#1a1f35] to-background" />

      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Legendary Artifacts</h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-4" />
          </div>
          <p className="text-lg text-muted-foreground font-light">
            Discover the most coveted treasures in our marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#ffd700]/20 text-center space-y-4">
          <p className="text-xl md:text-2xl text-foreground/80 italic font-light text-balance">
            <span className="text-[#ffd700]">"</span>Each artifact carries a story, a power, and a price worthy of the
            gods.
            <span className="text-[#ffd700]">"</span>
          </p>
        </div>
      </div>
    </section>
  )
}
