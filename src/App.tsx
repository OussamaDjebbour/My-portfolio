import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  // const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
  //   window.scrollTo({
  //     top: elementRef.current?.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header
        home={home}
        about={about}
        skills={skills}
        projects={projects}
        contact={contact}
      />
      <main>
        <Hero home={home} about={about} />
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contact={contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
