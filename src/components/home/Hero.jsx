import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroVideoMp4 from '../../assets/images/hero-video.mp4';
import heroVideoWebm from '../../assets/images/hero-video.webm';
import heroPosterWebp from '../../assets/images/hero-poster.webp';
import heroPosterJpg from '../../assets/images/hero-poster.jpg';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const handlePlaying = () => {
      setIsVideoPlaying(true);
    };

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Autoplay restricted (e.g. mobile battery saver).
            // Graceful degradation: pristine poster remains visible.
            setIsVideoPlaying(false);
          });
      }
    };

    video.addEventListener('playing', handlePlaying);

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('loadeddata', attemptPlay, { once: true });
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('loadeddata', attemptPlay);
      video.removeEventListener('canplay', attemptPlay);
    };
  }, []);

  return (
    <section className="hero-cinematic" aria-labelledby="hero-title">
      <div className="hero-cinematic__canvas" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero-cinematic__video ${isVideoPlaying ? 'hero-cinematic__video--playing' : ''}`}
          poster={heroPosterWebp}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
          <img src={heroPosterJpg} alt="" className="hero-cinematic__poster-fallback" />
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
            <p className="hero-cinematic__description">
              Monitor earth pit resistance, current and voltage in real time to identify potential faults early and improve electrical safety.
            </p>
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
