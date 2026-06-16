import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/product">Product</Link>
          <Link to="/services">Services</Link>
        </div>

        <Link to="/contact" className="nav-cta">
          Contact
        </Link>
      </div>
    </nav>
  );
}
