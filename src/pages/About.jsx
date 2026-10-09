import React from 'react';
import CTA from '../components/common/CTA';
import Breadcrumb from '../components/common/Breadcrumb';
import Reveal from '../components/common/Reveal';
import { aboutContent } from '../data/about';
import soukhyaMark from '../assets/icons/favicon.png';
import './About.css';

/* ── Reveal Animation Wrapper ── */
/* ── About Hero Interactive Geometric Network Visual ── */
function EngineeringDnaVisual() {
  const steps = [
    { num: '01', title: 'DEVICES', desc: 'Hardware Design & Sensors', color: '#25A449' },
    { num: '02', title: 'DATA', desc: 'Edge Telemetry & Transmission', color: '#087DB9' },
    { num: '03', title: 'INTELLIGENCE', desc: 'Predictive Models & Analytics', color: '#173B8F' },
    { num: '04', title: 'OPERATIONS', desc: 'Automated Decisions & Action', color: '#E68324' },
  ];

  return (
    <div className="engineering-dna-box">
      <div className="engineering-dna-box__header">
        <span className="dna-chip">ENGINEERING DNA CONTINUOUS LOOP</span>
        <span className="dna-sub">DEVICE TO DECISION</span>
      </div>

      <div className="engineering-dna-grid">
        {steps.map((s, idx) => (
          <div key={s.num} className="engineering-dna-step">
            <div className="dna-step__top">
              <span className="dna-step__num" style={{ color: s.color }}>{s.num}</span>
              <span className="dna-step__dot" style={{ background: s.color }} />
            </div>
            <h4 className="dna-step__title">{s.title}</h4>
            <p className="dna-step__desc">{s.desc}</p>
            {idx < steps.length - 1 && (
              <span className="dna-step__arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* ============================================================
          1. EDITORIAL ABOUT HERO
          ============================================================ */}
      <section className="about-hero section section--white" aria-labelledby="about-title">
        <div className="about-hero__bg-grid" aria-hidden="true" />
        <div className="about-hero__bg-ambient" aria-hidden="true" />

        <div className="container about-hero__container">
          <div className="about-hero__grid">
            {/* Left Content */}
            <div className="about-hero__content">
              <Reveal>
                <Breadcrumb currentPage="About" />
                {/* <br />
                <div className="about-hero__eyebrow">
                  <span className="about-hero__eyebrow-dot" />
                  <span className="about-hero__eyebrow-line" />
                  <span>WHO WE ARE · SOUKHYA TECH</span>
                </div> */}

                <h1 id="about-title" className="heading-display about-hero__heading ">
                  About Soukhya Tech
                </h1>

                <p className="body-large about-hero__desc">
                  {aboutContent.overview}
                </p>

              </Reveal>
            </div>

            <div className="about-hero__visual-wrap">
              <Reveal delay={0.15}>
                <div className="about-hero-logo" aria-label="Soukhya Tech logo">
                  <span className="about-hero-logo__orbit about-hero-logo__orbit--outer" aria-hidden="true" />
                  <span className="about-hero-logo__orbit about-hero-logo__orbit--inner" aria-hidden="true" />
                  <div className="about-hero-logo__disc">
                    <img src={soukhyaMark} alt="Soukhya Tech" className="about-hero-logo__mark" />
                  </div>
                  {/* <span className="about-hero-logo__label">SOUKHYA TECH</span> */}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. VISION & MISSION
          ============================================================ */}
      <section className="about-purpose section" aria-labelledby="purpose-heading">
        <div className="container">
          <div className="about-purpose__intro">
            <span className="about-purpose__eyebrow">WHAT DRIVES US</span>
            <h2 id="purpose-heading" className="heading-xl">Vision and Mission</h2>
          </div>

          <div className="about-purpose__grid">
            <Reveal className="about-purpose-card about-purpose-card--vision">
              <h3 className="about-purpose-card__title">{aboutContent.visionTitle}</h3>
              <p className="about-purpose-card__text">{aboutContent.vision}</p>
              {aboutContent.visionPoints && (
                <ul className="about-purpose-card__points">
                  {aboutContent.visionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>

            <Reveal delay={0.12} className="about-purpose-card about-purpose-card--mission">
              <h3 className="about-purpose-card__title">{aboutContent.missionTitle}</h3>
              <p className="about-purpose-card__text">{aboutContent.mission}</p>
              {aboutContent.missionPoints && (
                <ul className="about-purpose-card__points">
                  {aboutContent.missionPoints.slice(0, 4).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. OVERVIEW SECTION (EDITORIAL ASYMMETRIC SPLIT)
          ============================================================ */}
      <section id="about-overview" className="about-section about-section--overview section section--bg" aria-labelledby="overview-heading">
        <div className="container">
          <div className="about-overview__watermark" aria-hidden="true">
            01
          </div>

          <div className="about-overview__grid">
            <div className="about-overview__text-col">
              <Reveal>
                {/* <div className="about-section__badge">
                  <span className="about-section__badge-dot dot--blue" />
                  <span>{aboutContent.overviewTitle}</span>
                </div> */}

                <h2 id="overview-heading" className="heading-xl about-overview__title">
                  {aboutContent.overviewTitle}
                </h2>

                <p className="body-large about-overview__paragraph">
                  {aboutContent.overview}
                </p>
              </Reveal>
            </div>

            <div className="about-overview__visual-col">
              <Reveal delay={0.15}>
                <EngineeringDnaVisual />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WHY CHOOSE SOUKHYA (OUR STRENGTHS — 9 AUTHENTIC ITEMS)
          ============================================================ */}
      {/* ============================================================
          5. CTA SECTION (AUTHENTIC SOUKHYA INDIGO)
          ============================================================ */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Connect with our experts at + 91 97317 47999 or sales@soukhyatech.com to partner with Soukhya Tech."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="View Our Products"
        secondaryTo="/product"
      />
    </div>
  );
}
