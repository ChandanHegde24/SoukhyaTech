import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollPos / scrollHeight, 0), 1) : 0;

      setScrollProgress(progress);
      setIsVisible(scrollPos > 280);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // SVG circular geometry
  const radius = 23.5;
  const circumference = 2 * Math.PI * radius; // ~147.65
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Back to Top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Circular SVG Scroll Progress Indicator */}
          <svg
            className="scroll-to-top__progress-svg"
            viewBox="0 0 52 52"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="stt-progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3563FF" />
                <stop offset="100%" stopColor="#18C8E8" />
              </linearGradient>
            </defs>
            {/* Background Track Circle */}
            <circle
              className="scroll-to-top__circle-track"
              cx="26"
              cy="26"
              r={radius}
            />
            {/* Dynamic Progress Circle */}
            <circle
              className="scroll-to-top__circle-progress"
              cx="26"
              cy="26"
              r={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>

          {/* Elegant Custom Upward Arrow Icon */}
          <svg
            className="scroll-to-top__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12L12 5L19 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Accessible Tooltip */}
          <span className="scroll-to-top__tooltip" role="tooltip">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
