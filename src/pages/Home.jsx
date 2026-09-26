import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import ConnectedIntelligence from '../components/ConnectedIntelligence/ConnectedIntelligence';
import CTA from '../components/CTA/CTA';
import TechnicalMastery from '../components/TechnicalMastery/TechnicalMastery';
import { whyChooseSoukhya } from '../data/siteContent';
import { homeSolutionShowcase } from '../data/solutionCatalog';
import './Home.css';

export default function Home() {
  // Preload all solution images for instantaneous, 0-blank-frame switching
  useEffect(() => {
    homeSolutionShowcase.map(({ img }) => img).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section (Untouched) */}
      <Hero />

      {/* 2. Brand Statement: Connected Intelligence */}
      <ConnectedIntelligence />

      {/* 3. SECTION 01: Technical Mastery — Cinematic Engineering Scene */}
      <TechnicalMastery />

      {/* 3. SECTION 02: Enterprise Solutions — Enterprise Solution Showcase */}
      <EnterpriseSolutionsSection />

      {/* 4. SECTION 03: Our Strengths — The Soukhya Engineering DNA */}
      <OurStrengthsSection />

      {/* 5. Final CTA (Untouched) */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="We engineer integrated IoT and IIoT platforms that bring devices, data, and decision intelligence together for sustainable growth."
        primaryLabel="Contact Our Experts"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </div>
  );
}

/* ============================================================
   SECTION 02: ENTERPRISE SOLUTIONS — "ENTERPRISE SOLUTION SHOWCASE"
   Asymmetric Composition:
   - Compact Top Header
   - Enterprise Signal Rail + Interactive Editorial Index
   - Dominant Editorial Visual Stage with smooth clip reveal
   ============================================================ */
function EnterpriseSolutionsSection() {
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
            <span className="eyebrow">ENTERPRISE SOLUTIONS</span>
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
                    onMouseEnter={() => handleSelect(index)}
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
              {/* Technical Frame Overlays */}
              <div className="solution-visual-stage__header">
                <div className="solution-visual-stage__signal">
                  <span className="solution-visual-stage__pulse-dot" />
                  <span className="solution-visual-stage__sys-id">{activeSolution.code} / ACTIVE ARCHITECTURE</span>
                </div>
                <span className="solution-visual-stage__index">STAGE // 0{activeIdx + 1}</span>
              </div>

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
                      scale: 1.035,
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
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </AnimatePresence>
                <div className="solution-visual-stage__overlay" />
              </div>

              {/* Bottom Technical Bar */}
              <div className="solution-visual-stage__footer">
                <span className="solution-visual-stage__caption-title">{activeSolution.title}</span>
                <span className="solution-visual-stage__meta">LIVE SPECIFICATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 03: OUR STRENGTHS — "THE SOUKHYA ENGINEERING DNA"
   Asymmetric Composition:
   - 35-40% Left: Editorial Introduction + Signature Engineering Mark
   - 60-65% Right: Layered Engineering DNA Panel (9 Integrated Layers + Signal Line)
   ============================================================ */
function OurStrengthsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="editorial-block editorial-block--strengths" aria-labelledby="our-strengths-title">
      <div className="container">
        {/* Subtle section transition trace */}
        <div className="strengths-transition-trace" aria-hidden="true">
          <span className="strengths-transition-trace__line" />
          <span className="strengths-transition-trace__dot" />
        </div>

        <div className="strengths-dna-layout">
          {/* Left Column (35-40%): Editorial Introduction */}
          <motion.div
            className="strengths-dna-editorial"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="strengths-dna-editorial__sticky">
              <span className="eyebrow">OUR STRENGTHS</span>
              <h2 id="our-strengths-title" className="editorial-main-heading">
                Why Choose Soukhya
              </h2>
              <p className="editorial-main-desc">
                Engineering excellence, rugged reliability, and full-stack integration across devices, data, and decisions.
              </p>

              {/* Engineering Signature Badge */}
              <div className="strengths-dna-signature" aria-hidden="true">
                <div className="strengths-dna-signature__mark">
                  <span className="strengths-dna-signature__node" />
                  <span className="strengths-dna-signature__text">SOUKHYA TECH // ENGINEERING DNA</span>
                </div>
                <span className="strengths-dna-signature__metric">9 INTEGRATED CORE DISCIPLINES</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (60-65%): Layered Engineering DNA Panel */}
          <motion.div
            className="strengths-dna-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Engineering Panel Header */}
            <div className="strengths-dna-panel__header" aria-hidden="true">
              <div className="strengths-dna-panel__coord">
                <span className="strengths-dna-panel__plus">+</span>
                <span>ARCHITECTURE MATRIX // LAYERED DISCIPLINE</span>
              </div>
              <div className="strengths-dna-panel__status">
                <span className="strengths-dna-panel__status-dot" />
                <span>ACTIVE SPEC: 0{activeIdx + 1} / 09</span>
              </div>
            </div>

            {/* Precision Engineering Grid Background */}
            <div className="strengths-dna-panel__grid" aria-hidden="true" />

            {/* 9 Integrated Engineering Layers */}
            <div
              className="strengths-dna-layers"
              role="list"
              aria-label="Why Choose Soukhya Strengths List"
            >
              {whyChooseSoukhya.map((strength, index) => {
                const isActive = activeIdx === index;
                return (
                  <div
                    key={strength}
                    role="listitem"
                    tabIndex={0}
                    className={`strength-dna-layer ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveIdx(index)}
                    onFocus={() => setActiveIdx(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIdx(index);
                      }
                    }}
                  >
                    <div className="strength-dna-layer__content">
                      {/* Left Number & Node */}
                      <div className="strength-dna-layer__prefix">
                        <span className="strength-dna-layer__num">0{index + 1}</span>
                        <span className="strength-dna-layer__node" aria-hidden="true" />
                      </div>

                      {/* Strength Title */}
                      <h3 className="strength-dna-layer__title">{strength}</h3>

                      {/* Right Active Indicator */}
                      <div className="strength-dna-layer__suffix" aria-hidden="true">
                        <span className="strength-dna-layer__tag">DISCIPLINE_0{index + 1}</span>
                        <span className="strength-dna-layer__arrow">→</span>
                      </div>
                    </div>

                    {/* Signature Travelling Engineering Signal Line */}
                    <div className="strength-dna-layer__signal-track" aria-hidden="true">
                      <div className="strength-dna-layer__signal-line" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engineering Panel Footer */}
            <div className="strengths-dna-panel__footer" aria-hidden="true">
              <span className="strengths-dna-panel__footer-brand">SOUKHYA TECH // PRECISION ENGINEERING</span>
              <span className="strengths-dna-panel__plus">+</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
