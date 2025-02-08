import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="logo">
          <span className="gradient-text">A</span>BH<span className="gradient-text">A</span>Y
        </a>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="#About">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          
        </div>
      </div>
    </nav>
  )
}