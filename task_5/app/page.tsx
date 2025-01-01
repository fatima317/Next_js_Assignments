import About from "@/app/About/about";
import { Footer } from "@/app/Footer/footer";
import Header from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Projects from "@/app/Projects/projects";
import { Skills } from "@/app/Skills/skills";

export default function Home() {
  return (
  <div className="container mx-auto p-4">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
)
}
