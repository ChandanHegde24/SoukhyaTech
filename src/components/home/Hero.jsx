import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/images/Herovid.mp4';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <section className="hero-cinematic" aria-labelledby="hero-title">
      <div className="hero-cinematic__canvas" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-cinematic__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-cinematic__overlay" />
      </div>
      
      <div className="container hero-cinematic__container">
        <div className="hero-cinematic__content">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
            <h1 id="hero-title" className="hero-cinematic__headline hero-title">
              <span className="hero-headline-line">Intelligent Earth-Pit</span>
              <span className="hero-headline-line">
                Monitoring System <span className="hero-headline-highlight">(I-ES)</span>
              </span>
            </h1>
            <div className="hero-cinematic__actions">
              <Link to="/product" className="btn btn--primary hero-cinematic__btn-primary">
                Know More <span aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn btn--secondary hero-cinematic__btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <i />
      </div>
    </section>
  );
}
