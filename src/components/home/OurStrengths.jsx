import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { whyChooseSoukhya } from '../../data/home';

/* ============================================================
   OUR STRENGTHS — "THE SOUKHYA ENGINEERING DNA"
   Asymmetric Composition:
   - 35-40% Left: Editorial Introduction + Signature Engineering Mark
   - 60-65% Right: Layered Engineering DNA Panel (9 Integrated Layers + Signal Line)
   ============================================================ */
export default function OurStrengths() {
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
              <span className="eyebrow">OUR STRENGTHS <span className="eyebrow"></span></span>
              <h2 id="our-strengths-title" className="editorial-main-heading">
                Why Choose Soukhya
              </h2>
              <p className="editorial-main-desc">
                Built to endure. Engineered to excel. Connected from devices to data, turning every decision into a smarter one.
              </p>

              <div className="strengths-system-map" role="img" aria-label="An integrated engineering system connecting rugged devices, secure data, and decisive outcomes">
                <div className="strengths-system-map__header">
                  <span className="strengths-system-map__eyebrow">ENGINEERED AS ONE SYSTEM</span>
                  <span className="strengths-system-map__status"><i /> ALWAYS ON</span>
                </div>
                <div className="strengths-system-map__flow">
                  <div className="strengths-system-map__line" aria-hidden="true" />
                  <div className="strengths-system-map__node">
                    <span className="strengths-system-map__node-mark strengths-system-map__node-mark--device" aria-hidden="true" />
                    <span>Rugged devices</span>
                  </div>
                  <div className="strengths-system-map__node">
                    <span className="strengths-system-map__node-mark strengths-system-map__node-mark--data" aria-hidden="true" />
                    <span>Trusted data</span>
                  </div>
                  <div className="strengths-system-map__node">
                    <span className="strengths-system-map__node-mark strengths-system-map__node-mark--decision" aria-hidden="true" />
                    <span>Clear decisions</span>
                  </div>
                </div>
                <div className="strengths-system-map__caption">
                  <span>FIELD-READY</span>
                  <strong>RELIABLE BY DESIGN</strong>
                  <span>FULL-STACK</span>
                </div>
              </div>

              {/* Engineering Signature Badge */}
              <div className="strengths-dna-signature" aria-hidden="true">
                <div className="strengths-dna-signature__mark">
                  <span className="strengths-dna-signature__node" />
                  <span className="strengths-dna-signature__text">SOUKHYA TECH ENGINEERING DNA</span>
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
                <span>ARCHITECTURE MATRIX LAYERED DISCIPLINE</span>
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
                        <span className="strength-dna-layer__tag">DISCIPLINE 0{index + 1}</span>
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
              <span className="strengths-dna-panel__footer-brand">SOUKHYA TECH PRECISION ENGINEERING</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
