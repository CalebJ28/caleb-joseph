import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;
