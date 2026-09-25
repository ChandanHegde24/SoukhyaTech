import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import hero1Img from '../../assets/images/hero 1.png';
import hero2Img from '../../assets/images/hero 2.png';
import './Hero.css';

const slidesData = [
  {
    id: 'ies',
    index: 0,
    badge: 'I-ES PLATFORM',
    words: ['Intelligent', 'Earth-Pit Monitoring', 'System (I-ES)'],
    primaryCTA: { label: 'Know More', to: '/product' },
    secondaryCTA: { label: 'Contact Us', to: '/contact' },
    img: hero1Img,
    alt: 'Intelligent Earth-Pit Monitoring System (I-ES) Hardware and Grounding Environment',
    type: 'ies',
  },
  {
    id: 'network',
    index: 1,
    badge: 'CONNECTED INFRASTRUCTURE',
    words: ['VISIBILITY', 'CONTROL', 'EFFICIENCY'],
    primaryCTA: { label: 'Know More', to: '/services' },
    secondaryCTA: { label: 'Our Solutions', to: '/solutions' },
    img: hero2Img,
    alt: 'Visibility, Control, and Efficiency Connected Digital Infrastructure',
    type: 'network',
  },
];

// Exact 7-second display duration
const SLIDE_DURATION = 7000;
const TRANSITION_DURATION = 950; // ms

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDir, setTransitionDir] = useState('next');
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);

  const heroRef = useRef(null);
  const imageCache = useRef(new Set());
  const startTimeRef = useRef(Date.now());
  const elapsedBeforePauseRef = useRef(0);
  const animFrameRef = useRef(null);

  // 1. Intelligent Image Preloading & Decoding with Image.decode()
  const preloadAndDecode = useCallback(async (src) => {
    if (imageCache.current.has(src)) return true;
    try {
      const img = new Image();
      img.src = src;
      if ('decode' in img) {
        await img.decode();
      } else {
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      }
      imageCache.current.add(src);
      return true;
    } catch (e) {
      imageCache.current.add(src); // Graceful fallback
      return true;
    }
  }, []);

  // Preload and decode both hero images immediately on mount
  useEffect(() => {
    slidesData.forEach((s) => preloadAndDecode(s.img));
  }, [preloadAndDecode]);

  // 2. Safe Zero-Blank Transition Trigger
  const triggerTransition = useCallback(async (nextIdx, dir = 'next') => {
    if (isTransitioning || nextIdx === activeSlide) return;

    const targetImg = slidesData[nextIdx].img;

    // Ensure image is fully loaded and decoded BEFORE beginning transition
    if (!imageCache.current.has(targetImg)) {
      await preloadAndDecode(targetImg);
    }

    setIsTransitioning(true);
    setTransitionDir(dir);
    setPrevSlideIndex(activeSlide);
    setActiveSlide(nextIdx);

    // Reset progress timers
    elapsedBeforePauseRef.current = 0;
    setProgress(0);

    setTimeout(() => {
      setIsTransitioning(false);
      startTimeRef.current = Date.now();
    }, TRANSITION_DURATION);
  }, [activeSlide, isTransitioning, preloadAndDecode]);

  // 3. Exact 7000ms Timer with Hover Pause & Exact Remaining Time Resume
  useEffect(() => {
    if (isTransitioning) {
      cancelAnimationFrame(animFrameRef.current);
      return;
    }

    if (isHovered) {
      // Pause: accumulate elapsed time and freeze progress
      elapsedBeforePauseRef.current += Date.now() - startTimeRef.current;
      cancelAnimationFrame(animFrameRef.current);
      return;
    }

    // Start / Resume counting
    startTimeRef.current = Date.now();

    const loop = () => {
      const totalElapsed = elapsedBeforePauseRef.current + (Date.now() - startTimeRef.current);
      const currentPct = Math.min(100, (totalElapsed / SLIDE_DURATION) * 100);
      setProgress(currentPct);

      if (totalElapsed >= SLIDE_DURATION) {
        const nextIdx = (activeSlide + 1) % slidesData.length;
        triggerTransition(nextIdx, 'next');
      } else {
        animFrameRef.current = requestAnimationFrame(loop);
      }
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeSlide, isHovered, isTransitioning, triggerTransition]);

  // Hover detection handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  // 4. Manual Navigation
  const goToSlide = useCallback((index) => {
    if (index === activeSlide || isTransitioning) return;
    const dir = index > activeSlide ? 'next' : 'prev';
    triggerTransition(index, dir);
  }, [activeSlide, isTransitioning, triggerTransition]);

  const handleNextSlide = useCallback(() => {
    if (isTransitioning) return;
    const nextIdx = (activeSlide + 1) % slidesData.length;
    triggerTransition(nextIdx, 'next');
  }, [activeSlide, isTransitioning, triggerTransition]);

  const handlePrevSlide = useCallback(() => {
    if (isTransitioning) return;
    const prevIdx = (activeSlide - 1 + slidesData.length) % slidesData.length;
    triggerTransition(prevIdx, 'prev');
  }, [activeSlide, isTransitioning, triggerTransition]);

  // Desktop mouse parallax
  const handleMouseMove = (e) => {
    if (!heroRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 4, y: y * 3 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNextSlide();
      else if (e.key === 'ArrowLeft') handlePrevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  // Mobile Touch Swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextSlide();
      else handlePrevSlide();
    }
    setTouchStart(null);
  };

  const currentSlideData = slidesData[activeSlide];

  return (
    <section
      ref={heroRef}
      className="hero-cinematic"
      aria-labelledby="hero-title"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ============================================================
          1. DOUBLE-BUFFERED PERSISTENT VISUAL CANVAS (ZERO BLANK)
          ============================================================ */}
      <div className="hero-cinematic__canvas" aria-hidden="true">
        {slidesData.map((s, idx) => {
          const isCurrent = activeSlide === idx;
          const isPrevious = prevSlideIndex === idx && isTransitioning;

          // Only render layers involved in current view or active transition
          if (!isCurrent && !isPrevious) return null;

          const zIndex = isCurrent ? 2 : 1;

          return (
            <motion.div
              key={s.id}
              className={`hero-cinematic__slide ${isCurrent ? 'is-active-layer' : 'is-under-layer'}`}
              style={{
                zIndex,
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
              initial={
                isTransitioning && isCurrent
                  ? {
                      opacity: 0,
                      scale: 1.025,
                      clipPath:
                        transitionDir === 'next'
                          ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                          : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                    }
                  : { opacity: 1, scale: 1.0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
              }
              animate={{
                opacity: 1,
                scale: 1.0,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* FULL-WIDTH HIGH DEFINITION BASE IMAGE */}
              <img
                src={s.img}
                alt={s.alt}
                className={`hero-cinematic__img hero-cinematic__img--${s.type}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
              />

              {/* Atmospheric Ambient Glow */}
              <div className="hero-cinematic__ambient" />

              {/* Diagonal Data Sweep Wave during transition */}
              {isTransitioning && isCurrent && (
                <div className={`hero-cinematic__data-sweep sweep--${transitionDir}`} />
              )}

              {/* Slide 01: Enhanced I-ES Grounding & Telemetry SVG */}
              {s.type === 'ies' && (
                <svg
                  className="hero-cinematic__svg"
                  viewBox="0 0 1920 1080"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="cloudStreamGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#007CC4" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="electrodeCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.95" />
                      <stop offset="40%" stopColor="#EC008C" stopOpacity="0.8" />
                      <stop offset="80%" stopColor="#25A449" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  <ellipse cx="1100" cy="830" rx="340" ry="105" className="hero-soil-wave wave-3" />
                  <ellipse cx="1100" cy="830" rx="250" ry="78" className="hero-soil-wave wave-2" />
                  <ellipse cx="1100" cy="830" rx="160" ry="50" className="hero-soil-wave wave-1" />

                  <line x1="1100" y1="520" x2="1100" y2="920" stroke="url(#electrodeCoreGrad)" className="hero-electrode-core" />
                  <line x1="1092" y1="530" x2="1092" y2="910" stroke="#00E5FF" className="hero-electrode-subline" />
                  <line x1="1108" y1="530" x2="1108" y2="910" stroke="#00E5FF" className="hero-electrode-subline delay-sub" />

                  <circle r="3" className="hero-ion-dot ion-1">
                    <animateMotion path="M 1100 900 L 1100 520" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2.5" className="hero-ion-dot ion-2">
                    <animateMotion path="M 1093 880 L 1093 540" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2.5" className="hero-ion-dot ion-3">
                    <animateMotion path="M 1107 890 L 1107 530" dur="2.5s" repeatCount="indefinite" />
                  </circle>

                  <path d="M 1140 320 C 1220 210, 1380 140, 1670 100" stroke="url(#cloudStreamGrad)" className="hero-cloud-path path-primary" />
                  <path d="M 1130 330 C 1240 240, 1420 160, 1670 110" stroke="url(#cloudStreamGrad)" className="hero-cloud-path path-secondary" />

                  <circle r="4" className="hero-data-packet">
                    <animateMotion path="M 1140 320 C 1220 210, 1380 140, 1670 100" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" className="hero-data-packet packet-alt">
                    <animateMotion path="M 1130 330 C 1240 240, 1420 160, 1670 110" dur="3.4s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="1670" cy="100" r="45" className="hero-cloud-halo" />
                  <circle cx="1670" cy="100" r="60" className="hero-cloud-halo halo-outer" />

                  <circle cx="850" cy="225" r="18" className="hero-beacon-ring cyan-beacon" />
                  <circle cx="850" cy="225" r="3.5" className="hero-beacon-dot cyan-dot" />

                  <circle cx="800" cy="425" r="18" className="hero-beacon-ring blue-beacon" />
                  <circle cx="800" cy="425" r="3.5" className="hero-beacon-dot blue-dot" />

                  <circle cx="1380" cy="225" r="18" className="hero-beacon-ring amber-beacon" />
                  <circle cx="1380" cy="225" r="3.5" className="hero-beacon-dot amber-dot" />

                  <circle cx="1380" cy="425" r="18" className="hero-beacon-ring coral-beacon" />
                  <circle cx="1380" cy="425" r="3.5" className="hero-beacon-dot coral-dot" />

                  <rect x="1035" y="240" width="130" height="180" rx="12" className="hero-hardware-aura" />
                </svg>
              )}

              {/* Slide 02: Enhanced Global Network & Cyber Shield SVG */}
              {s.type === 'network' && (
                <svg
                  className="hero-cinematic__svg"
                  viewBox="0 0 1920 1080"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="globalArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#2C3694" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="cyberBusbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#25A449" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  <path d="M 850 320 C 1050 180, 1400 160, 1680 260" stroke="url(#globalArcGrad)" className="hero-orbital-arc arc-1" />
                  <path d="M 1000 380 C 1220 220, 1500 240, 1720 360" stroke="url(#globalArcGrad)" className="hero-orbital-arc arc-2" />
                  <path d="M 720 440 C 950 280, 1300 300, 1580 440" stroke="url(#globalArcGrad)" className="hero-orbital-arc arc-3" />

                  <circle r="3.5" className="hero-orbit-dot dot-1">
                    <animateMotion path="M 850 320 C 1050 180, 1400 160, 1680 260" dur="3.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" className="hero-orbit-dot dot-2">
                    <animateMotion path="M 1000 380 C 1220 220, 1500 240, 1720 360" dur="4.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" className="hero-orbit-dot dot-3">
                    <animateMotion path="M 720 440 C 950 280, 1300 300, 1580 440" dur="3.0s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="1380" cy="495" r="40" className="hero-shield-pulse pulse-1" />
                  <circle cx="1380" cy="495" r="70" className="hero-shield-pulse pulse-2" />
                  <circle cx="1380" cy="495" r="105" className="hero-shield-pulse pulse-3" />

                  <ellipse cx="1380" cy="600" rx="280" ry="85" className="hero-platform-ring ring-1" />
                  <ellipse cx="1380" cy="600" rx="200" ry="60" className="hero-platform-ring ring-2" />

                  <path d="M 820 570 L 1180 610 L 1380 600" stroke="url(#cyberBusbarGrad)" className="hero-fiber-stream busbar-1" />
                  <path d="M 1380 670 L 1400 780 L 1640 810" stroke="url(#cyberBusbarGrad)" className="hero-fiber-stream busbar-2" />
                  <path d="M 1480 580 L 1660 420" stroke="url(#cyberBusbarGrad)" className="hero-fiber-stream busbar-3" />

                  <circle r="3.5" className="hero-busbar-pulse">
                    <animateMotion path="M 820 570 L 1180 610 L 1380 600" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5" className="hero-busbar-pulse">
                    <animateMotion path="M 1380 670 L 1400 780 L 1640 810" dur="2.1s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" className="hero-busbar-pulse">
                    <animateMotion path="M 1480 580 L 1660 420" dur="2.6s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="780" cy="520" r="4" className="hero-edge-beacon" />
                  <circle cx="950" cy="680" r="4" className="hero-edge-beacon" />
                  <circle cx="1060" cy="710" r="3.5" className="hero-edge-beacon" />
                  <circle cx="1660" cy="380" r="4.5" className="hero-edge-beacon cyan-beacon" />
                  <circle cx="1780" cy="760" r="4" className="hero-edge-beacon" />
                </svg>
              )}
            </motion.div>
          );
        })}

        {/* ULTRA-SUBTLE LOCAL READABILITY TREATMENT */}
        <div className="hero-cinematic__contrast-guard" />
        <div className="hero-cinematic__grid" />
      </div>

      {/* ============================================================
          2. LAYERED HTML CONTENT OVERLAY — INTELLIGENCE SIGNAL REVEAL
          ============================================================ */}
      <div className="container hero-cinematic__container">
        <div className="hero-cinematic__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideData.id}
              className={`hero-cinematic__text-wrap hero-cinematic__text-wrap--${currentSlideData.type}`}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Subtle Signal Trace Geometry behind content */}
              <div className="hero-signal-trace" aria-hidden="true">
                <svg viewBox="0 0 240 32" fill="none" className="hero-signal-trace__svg">
                  <circle cx="4" cy="12" r="3" className="hero-signal-node" />
                  <path d="M 4 12 L 60 12 L 95 24 L 200 24" className="hero-signal-path" />
                  <circle cx="200" cy="24" r="2" className="hero-signal-node-end" />
                </svg>
              </div>

              {/* Micro-Particles */}
              <div className="hero-micro-particles" aria-hidden="true">
                <span className="hero-particle hero-particle--1" />
                <span className="hero-particle hero-particle--2" />
                <span className="hero-particle hero-particle--3" />
              </div>

              {/* 01: Eyebrow with Signal Node & Line */}
              <motion.div
                className="hero-cinematic__eyebrow"
                variants={{
                  initial: { opacity: 0, x: -14 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: {
                    opacity: 0,
                    x: -16,
                    transition: { duration: 0.25, ease: 'easeIn' },
                  },
                }}
              >
                <span className="hero-cinematic__eyebrow-node" />
                <span className="hero-cinematic__eyebrow-line" />
                <span className="hero-cinematic__eyebrow-text">{currentSlideData.badge}</span>
              </motion.div>

              {/* 02: Split-Line Masked Headline */}
              <h1 id="hero-title" className={`hero-cinematic__headline hero-cinematic__headline--${currentSlideData.type}`}>
                {currentSlideData.words.map((line, wIdx) => {
                  const isHighlighted = currentSlideData.type === 'ies' && wIdx === 1;
                  return (
                    <div key={line} className="hero-headline-line-mask">
                      <motion.span
                        className={`hero-headline-line ${
                          isHighlighted ? 'hero-headline-line--highlight' : ''
                        } hero-headline-line--idx-${wIdx}`}
                        custom={wIdx}
                        variants={{
                          initial: {
                            y: '105%',
                            opacity: 0,
                            filter: 'blur(6px)',
                          },
                          animate: {
                            y: '0%',
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                              duration: 0.6,
                              delay: 0.22 + wIdx * 0.16,
                              ease: [0.16, 1, 0.3, 1],
                            },
                          },
                          exit: {
                            y: '-90%',
                            opacity: 0,
                            filter: 'blur(4px)',
                            transition: {
                              duration: 0.3,
                              delay: wIdx * 0.04,
                              ease: [0.7, 0, 0.84, 0],
                            },
                          },
                        }}
                      >
                        {line}
                        {currentSlideData.type === 'network' && (
                          <span className="hero-headline-word-trace" aria-hidden="true" />
                        )}
                      </motion.span>
                    </div>
                  );
                })}
              </h1>

              {/* 03: Direct CTAs with Data Pulse */}
              <motion.div
                className="hero-cinematic__actions"
                variants={{
                  initial: { opacity: 0, scale: 0.96, y: 12 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      delay: 0.76,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.98,
                    y: -8,
                    transition: { duration: 0.25, ease: 'easeIn' },
                  },
                }}
              >
                <div className="hero-actions-pulse-line" aria-hidden="true" />

                <Link to={currentSlideData.primaryCTA.to} className="btn btn--primary hero-cinematic__btn-primary">
                  <span>{currentSlideData.primaryCTA.label}</span>
                  <svg className="hero-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to={currentSlideData.secondaryCTA.to} className="btn btn--secondary hero-cinematic__btn-secondary">
                  <span>{currentSlideData.secondaryCTA.label}</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ============================================================
          3. MINIMALIST DUAL-NODE PROGRESS INDICATOR (●━━━━   ○)
             (7000ms display duration with pause & exact resume)
          ============================================================ */}
      <div className="hero-cinematic__nav">
        <div className="container hero-cinematic__nav-inner">
          <div className="hero-cinematic__nodes" role="tablist" aria-label="Hero Slide Navigation">
            {slidesData.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Switch to Slide ${idx + 1}`}
                  className={`hero-cinematic__node ${isActive ? 'is-active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <span className="hero-cinematic__node-circle" />
                  {isActive && (
                    <span className="hero-cinematic__node-track">
                      <span
                        className="hero-cinematic__node-fill"
                        style={{
                          width: `${progress}%`,
                          transition: isHovered ? 'none' : 'width 0.05s linear',
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
