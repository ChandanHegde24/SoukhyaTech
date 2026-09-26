import React from 'react';
import CTA from '../components/CTA/CTA';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/shared/Breadcrumb/Breadcrumb';
import Reveal from '../components/shared/Reveal/Reveal';
import { aboutContent } from '../data/siteContent';
import './About.css';

/* ── Reveal Animation Wrapper ── */
/* ── About Hero Interactive Geometric Network Visual ── */
function EngineeringDnaVisual() {
  const steps = [
    { num: '01', title: 'DEVICES', desc: 'Hardware Design & Sensors', color: '#25A449' },
    { num: '02', title: 'DATA', desc: 'Edge Telemetry & Transmission', color: '#007CC4' },
    { num: '03', title: 'INTELLIGENCE', desc: 'Predictive Models & Analytics', color: '#2C3694' },
    { num: '04', title: 'OPERATIONS', desc: 'Automated Decisions & Action', color: '#E68324' },
  ];

  return (
    <div className="engineering-dna-box">
      <div className="engineering-dna-box__header">
        <span className="dna-chip">ENGINEERING DNA // CONTINUOUS LOOP</span>
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

                <div className="about-hero__eyebrow">
                  <span className="about-hero__eyebrow-dot" />
                  <span className="about-hero__eyebrow-line" />
                  <span>WHO WE ARE · SOUKHYA TECH</span>
                </div>

                <h1 id="about-title" className="heading-display about-hero__heading">
                  About Soukhya Tech
                </h1>

                <p className="body-large about-hero__desc">
                  {aboutContent.overview}
                </p>

              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. STICKY ABOUT NAVIGATION
          ============================================================ */}
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
                <div className="about-section__badge">
                  <span className="about-section__badge-dot dot--blue" />
                  <span>01 // {aboutContent.overviewTitle}</span>
                </div>

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
          4. MISSION SECTION (EDITORIAL BLUE STATEMENT)
          ============================================================ */}
      <section id="about-mission" className="about-section about-section--mission section section--mission-bg" aria-labelledby="mission-heading">
        <div className="container">
          <div className="about-mission__watermark" aria-hidden="true">
            02
          </div>

          <Reveal>
            <div className="about-section__badge">
              <span className="about-section__badge-dot dot--green" />
              <span>02 // OUR PURPOSE</span>
            </div>

            <h2 id="mission-heading" className="heading-xl about-mission__title">
              {aboutContent.missionTitle}
            </h2>

            <p className="about-mission__statement body-large">
              {aboutContent.mission}
            </p>
          </Reveal>

          {aboutContent.missionPoints && (
            <div className="mission-points-grid">
              {aboutContent.missionPoints.map((pt, idx) => (
                <Reveal key={idx} delay={idx * 0.06} className="mission-point-card">
                  <div className="mission-point-card__check">
                    <span className="point-check-num">0{idx + 1}</span>
                  </div>
                  <span className="mission-point-card__text">{pt}</span>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          5. VISION SECTION (EXPANSIVE OPEN CANVAS)
          ============================================================ */}
      <section id="about-vision" className="about-section about-section--vision section section--white" aria-labelledby="vision-heading">
        <div className="container">
          <div className="about-vision__watermark" aria-hidden="true">
            03
          </div>

          <div className="about-vision__grid">
            <div className="about-vision__text-col">
              <Reveal>
                <div className="about-section__badge">
                  <span className="about-section__badge-dot dot--indigo" />
                  <span>03 // FUTURE HORIZON</span>
                </div>

                <h2 id="vision-heading" className="heading-xl about-vision__title">
                  {aboutContent.visionTitle}
                </h2>

                <p className="about-vision__statement body-large">
                  {aboutContent.vision}
                </p>

                <div className="about-vision__action">
                  <Link to="/contact" className="btn btn--secondary">
                    <span>Partner with Soukhya</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="about-vision__visual-col">
              <Reveal delay={0.15}>
                <div className="vision-network-card">
                  <svg className="vision-network-svg" viewBox="0 0 480 320" fill="none">
                    <circle cx="240" cy="160" r="120" className="vision-orbit orbit-1" />
                    <circle cx="240" cy="160" r="80" className="vision-orbit orbit-2" />
                    <circle cx="240" cy="160" r="40" className="vision-orbit orbit-3" />

                    <circle cx="240" cy="160" r="24" className="vision-core-node" />
                    <text x="240" y="164" textAnchor="middle" className="vision-core-text">FUTURE</text>

                    <circle cx="120" cy="160" r="14" className="vision-satellite node--cyan" />
                    <circle cx="360" cy="160" r="14" className="vision-satellite node--green" />
                    <circle cx="240" cy="40" r="14" className="vision-satellite node--blue" />
                    <circle cx="240" cy="280" r="14" className="vision-satellite node--amber" />

                    <path d="M 120 160 L 360 160 M 240 40 L 240 280" className="vision-axis-line" />
                  </svg>
                  <div className="vision-network-card__caption">
                    <span>AUTONOMOUS & INTERCONNECTED FUTURE</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. WHY CHOOSE SOUKHYA (OUR STRENGTHS — 9 AUTHENTIC ITEMS)
          ============================================================ */}
      {/* ============================================================
          7. CTA SECTION (AUTHENTIC SOUKHYA INDIGO)
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
