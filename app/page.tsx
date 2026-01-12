import Hero from "@/components/hero"
import MenuShowcase from "@/components/menu-showcase"
import Features from "@/components/features"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <MenuShowcase />
      <Features />
      <CTA />
    </main>
  )
}
