import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { SelectedWorks } from "@/components/sections/selected-works"
import { Insights } from "@/components/sections/insights"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SelectedWorks />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
