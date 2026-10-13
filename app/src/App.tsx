import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pipeline from "./components/Pipeline";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CodeShowcase from "./components/CodeShowcase";
import FutureAI from "./components/FutureAI";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pipeline />
        <Skills />
        <Experience />
        <Projects />
        <CodeShowcase />
        <FutureAI />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
