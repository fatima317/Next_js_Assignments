import About from "@/app/About/about";
import { Footer } from "@/app/Footer/footer";
import Header from "@/app/navbar";
import Hero from "@/app/hero";
import Projects from "@/app/Projects/projects";
import { Skills } from "@/app/Skills/skills";
import './/styles.css'

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
