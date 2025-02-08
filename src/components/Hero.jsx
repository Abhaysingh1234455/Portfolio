/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";

export default function Hero() {
  const handleScrollToContact = () => {
    // Use native JavaScript to scroll to the 'contact' section
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero container">
      <div className="hero-content">
        {/* <div className="profile-image">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%201.55.01%E2%80%AFPM-CeE2JuIFaeqWXh5AIZW7MiKmYoRihR.png" alt="Profile" />
        </div> */}
        <h1>
          I'm <span className="gradient-text">Abhay Singh</span>
        </h1>
        <p>
          I am a learner,developer and a genreal admirer of anything that has
          something to do with computers.
        </p>
        <div className="hero-buttons">
          <button onClick={handleScrollToContact} className="gradient-bg">Connect with me</button>
          <a href="/resume.pdf" download="My_Resume.pdf"/>
          <button
             onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}
            className="outline"
          >
            My resume
          </button>
        </div>
      </div>
    </section>
  );
}
