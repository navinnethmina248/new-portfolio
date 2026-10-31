import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { navItems } from "./data/site";
import { useScroll } from "./hooks/useScroll";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Skills from "./sections/Skills";

// Module-level so the array identity is stable across renders.
const sectionIds = navItems.map((item) => item.id);

export default function App() {
  const { scrolled, activeSection } = useScroll(sectionIds);

  return (
    <>
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
