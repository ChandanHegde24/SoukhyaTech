import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '../../assets/icons/logo@2x.png';
import { primaryNavigation } from '../../config/navigation';
import './Navbar.css';

const mobileNavigationQuery = '(max-width: 1100px)';

const menuVariants = {
  closed: { opacity: 0, x: '100%' },
  open:   { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

const itemVariants = {
  closed: { opacity: 0, x: 30 },
  open:   (i) => ({ opacity: 1, x: 0, transition: { delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled,  setIsScrolled]  = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileNavigationQuery);
    const closeMenuOnDesktop = (event) => {
      if (!event.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener('change', closeMenuOnDesktop);
    return () => mediaQuery.removeEventListener('change', closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    return () => window.removeEventListener('keydown', closeMenuOnEscape);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__brand" aria-label="Soukhya Tech — home">
          <img src={logoSrc} alt="Soukhya Tech" className="navbar__logo" width="140" height="40" />
        </Link>

        {/* Desktop Nav */}
        <div className="navbar__links" role="list">
          {primaryNavigation.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              role="listitem"
              className={`navbar__link ${isActive(to) ? 'navbar__link--active' : ''}`}
            >
              {label}
              {isActive(to) && (
                <motion.span
                  className="navbar__link-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta btn btn-primary btn-sm">
          Talk to an Expert
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="navbar__mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Glow */}
            <div className="navbar__mobile-glow" aria-hidden="true" />

            <div className="navbar__mobile-links">
              {primaryNavigation.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    to={to}
                    className={`navbar__mobile-link ${isActive(to) ? 'navbar__mobile-link--active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="navbar__mobile-link-index">0{i + 1}</span>
                    {label}
                    <span className="navbar__mobile-link-arrow">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="navbar__mobile-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Talk to an Expert
              </Link>
              <p className="navbar__mobile-contact">+91 97317 47999 · sales@soukhyatech.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
