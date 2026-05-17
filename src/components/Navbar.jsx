import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="container nav-container">

        <a href="#home" className="logo">
          AYAT<span>360</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
            ?
            <HiX />
            :
            <HiOutlineMenuAlt3 />
          }

        </button>

      </div>

    </header>

  );

}