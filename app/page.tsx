import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero / Home Section - Sin animación porque es la primera vista */}
      <Hero />

      {/* About Section */}
      <ScrollAnimation animation="fade-up">
        <About />
      </ScrollAnimation>

      {/* Experience Section */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <Experience />
      </ScrollAnimation>

      {/* Projects Section */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <Projects />
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <Skills />
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation animation="fade-up" delay={100}>
        <Contact />
      </ScrollAnimation>
    </main>
  );
}

