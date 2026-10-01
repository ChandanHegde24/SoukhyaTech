import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import hero1Img from '../../assets/images/image2.png';
import hero2Img from '../../assets/images/image.png';
import './Hero.css';

const slidesData = [
  {
    id: 'ies',
    index: 1,
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
    index: 0,
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
            </motion.div>
          );
        })}

        <div className="hero-cinematic__contrast-guard" />
      </div>

      {/* ============================================================
          2. LAYERED HTML CONTENT OVERLAY
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
              {/* 01: Eyebrow Badge */}
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
                      </motion.span>
                    </div>
                  );
                })}
              </h1>

              {/* 03: Direct CTAs */}
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
