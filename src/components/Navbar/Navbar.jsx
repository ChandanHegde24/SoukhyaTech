import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const closeMenu = () => setIsMenuOpen(false);

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
          <img className="logo" src="src/assets/icons/logo@2x.png" alt="Soukhya Tech" />
        </Link>

        <div className={`nav-links ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/solutions" className="nav-link" onClick={closeMenu}>
            Solutions
          </Link>
          <Link to="/product" className="nav-link" onClick={closeMenu}>
            Product
          </Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}
