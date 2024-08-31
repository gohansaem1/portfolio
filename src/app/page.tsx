import About from "@/component/About";
import Bubbles from "@/component/Bubbles";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Navigation from "@/component/Navigation";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <Navigation />
      <main className="flex-grow ">
        <div className="container mx-auto px-4 py-8">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
      <Bubbles />
    </div>
  );
}
