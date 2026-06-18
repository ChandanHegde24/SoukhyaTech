import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent scrolling on the body when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="site-navbar" aria-label="Primary navigation">
      <div className="navbar-shell">
        <Link to="/" className="navbar-brand" aria-label="Soukhya Tech home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Soukhya Tech</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/solutions" onClick={toggleMenu}>Solutions</Link>
          <Link to="/product" onClick={toggleMenu}>Product</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
        </div>

        <Link to="/contact" className="nav-cta">
          Contact
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}
