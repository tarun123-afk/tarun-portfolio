import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { Work } from "@/components/sections/work"
import { About } from "@/components/sections/about"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
