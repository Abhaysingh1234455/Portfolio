import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import StarfieldBackground from "./components/StarfieldBackground";
import ParticleBackground from "./components/ParticleBackground";
import WaveBackground from "./components/WaveBackground";
import "./App.css";
import "tailwindcss";

function App() {
  return (
    <div className="app">
      {/* Starfield background component */}
      <StarfieldBackground />
      {/* <ParticleBackground/> */}
      {/* <WaveBackground/> */}

      {/* Main content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
