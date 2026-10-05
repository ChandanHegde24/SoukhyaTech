import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { homeSolutionShowcase } from '../../data/solutions';

/* ============================================================
   ENTERPRISE SOLUTIONS — "ENTERPRISE SOLUTION SHOWCASE"
   Asymmetric Composition:
   - Compact Top Header
   - Enterprise Signal Rail + Interactive Editorial Index
   - Dominant Editorial Visual Stage with smooth clip reveal
   ============================================================ */
export default function EnterpriseSolutions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const sectionRef = useRef(null);

  const activeSolution = homeSolutionShowcase[activeIdx];

  const handleSelect = (index) => {
    if (index !== activeIdx) {
      setPrevIdx(activeIdx);
      setActiveIdx(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="editorial-block editorial-block--solutions"
      aria-labelledby="enterprise-solutions-title"
    >
      <div className="container">
        {/* Compact Top Header */}
        <div className="solutions-showcase-top">
          <div className="solutions-showcase-top__heading-group">
            <span className="eyebrow">ENTERPRISE SOLUTIONS <span className="eyebrow"></span></span>
            <h2 id="enterprise-solutions-title" className="editorial-main-heading">
              Our Solutions
            </h2>
          </div>
          <div className="solutions-showcase-top__desc-group">
            <p className="editorial-main-desc">
              Custom IoT architectures, smart systems, and durable data center solutions tailored to unique operational demands.
            </p>
            <Link to="/solutions" className="editorial-inline-link">
              <span>Explore All Solutions</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Enterprise Solution Showcase Arena */}
        <div className="solutions-showcase-arena">
          {/* Left: Enterprise Signal Rail + Solution Index */}
          <div className="solutions-showcase-rail-col">
            {/* Signature Enterprise Signal Rail */}
            <div className="enterprise-signal-rail" aria-hidden="true">
              <div
                className="enterprise-signal-rail__tracker"
                style={{
                  transform: `translateY(${activeIdx * 100}%)`,
                  height: `${100 / homeSolutionShowcase.length}%`,
                }}
              >
                <span className="enterprise-signal-rail__glow-node" />
              </div>
            </div>

            {/* Interactive Solution Rows */}
            <div className="solutions-showcase-index" role="tablist" aria-label="Enterprise Solutions">
              {homeSolutionShowcase.map((sol, index) => {
                const isActive = activeIdx === index;
                return (
                  <div
                    key={sol.id}
                    role="tab"
                    id={`solution-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`solution-panel-${index}`}
                    tabIndex={0}
                    className={`solution-showcase-row ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleSelect(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect(index);
                      }
                    }}
                  >
                    <div className="solution-showcase-row__head">
                      <span className="solution-showcase-row__num">0{index + 1}</span>
                      <div className="solution-showcase-row__title-wrap">
                        <span className="solution-showcase-row__code">{sol.code}</span>
                        <h3 className="solution-showcase-row__title">{sol.title}</h3>
                      </div>
                      <span className="solution-showcase-row__node" aria-hidden="true" />
                    </div>

                    {/* Active Expanded Narrative */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`solution-panel-${index}`}
                          role="tabpanel"
                          aria-labelledby={`solution-tab-${index}`}
                          className="solution-showcase-row__narrative"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="solution-showcase-row__paragraphs">
                            {sol.paragraphs?.map((paragraph, pIdx) => (
                              <p key={pIdx} className="solution-showcase-row__desc">
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          <div className="solution-showcase-row__tags">
                            {sol.tags?.map((tag) => (
                              <span key={tag} className="solution-tech-chip">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="solution-showcase-row__line" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dominant Editorial Solution Visual */}
          <div className="solutions-showcase-visual-col" aria-live="polite">
            <div className="solution-visual-stage">
              {/* Main Image Viewport with 0-flash preloaded crossfade */}
              <div className="solution-visual-stage__canvas">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSolution.id}
                    src={activeSolution.img}
                    alt={activeSolution.title}
                    className="solution-visual-stage__image"
                    initial={{
                      opacity: 0,
                      clipPath: activeIdx >= prevIdx ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
                      scale: 1.02,
                    }}
                    animate={{
                      opacity: 1,
                      clipPath: 'inset(0 0 0 0)',
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.99,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
