import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/common/CTA';
import Breadcrumb from '../components/common/Breadcrumb';
import Reveal from '../components/common/Reveal';
import { managedServices } from '../data/services';
import AuditProcessAnimation from '../components/services/AuditProcessAnimation';
import SecurityScanAnimation from '../components/services/SecurityScanAnimation';
import NetworkSignalAnimation from '../components/services/NetworkSignalAnimation';
import CloudOrchestrationAnimation from '../components/services/CloudOrchestrationAnimation';
import RemoteMonitoringAnimation from '../components/services/RemoteMonitoringAnimation';
import './Services.css';

/* ── Reusable Service Visual Component (Image + Exact Functional Animation Overlay) ── */
function ServiceVisual({ service, index }) {
  return (
    <div className={`service-visual-wrapper service-visual--${service.id}`}>
      <div className="service-visual-frame">
        <div className="service-visual-media">
          <img
            src={service.image}
            alt={service.title}
            className="service-visual-img"
            loading="lazy"
            width="720"
            height="460"
          />

          {/* Exact Functional Micro-Animation Overlays Directly Mapped to Infographic Content */}
          <div className="service-anim-container" aria-hidden="true">
            {service.id === 'it-audit' && <AuditProcessAnimation />}
            {service.id === 'managed-security' && <SecurityScanAnimation />}
            {service.id === 'managed-network' && <NetworkSignalAnimation />}
            {service.id === 'managed-cloud' && <CloudOrchestrationAnimation />}
            {service.id === 'remote-monitoring' && <RemoteMonitoringAnimation />}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Interactive Process Steps Visual ── */
const processSteps = [
  { step: '01', title: 'ASSESS', desc: 'IT & Security Governance Audit', color: '#087DB9' },
  { step: '02', title: 'SECURE', desc: '24/7 SOC & Threat Defense', color: '#173B8F' },
  { step: '03', title: 'CONNECT', desc: 'WAN, LAN & Network Mesh', color: '#25A449' },
  { step: '04', title: 'MANAGE', desc: 'Multi-Cloud Lifecycle', color: '#E68324' },
  { step: '05', title: 'MONITOR', desc: 'Remote Supervision & RMM', color: '#EC008C' },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* ============================================================
          1. EDITORIAL HERO SECTION
          ============================================================ */}
      <section className="services-hero section section--white" aria-labelledby="services-hero-title">
        <div className="services-hero__bg-grid" aria-hidden="true" />
        <div className="services-hero__bg-ambient" aria-hidden="true" />

        <div className="container services-hero__container">
          <div className="services-hero__grid">
            {/* Left Content */}
            <div className="services-hero__content">
              <Reveal>
                <Breadcrumb currentPage="Services" />

                <h1 id="services-hero-title" className="heading-display services-hero__heading">
                  Our Services
                </h1>

                <p className="body-large services-hero__desc">
                  Comprehensive information security, managed IT infrastructure, 24/7 network monitoring, cloud lifecycle management, and remote supervision.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. MAIN CINEMATIC SERVICE CHAPTERS (ALTERNATING ASYMMETRIC)
          ============================================================ */}
      <section className="services-chapters" aria-label="Managed Services Chapters">
        {managedServices.map((service, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className={`service-chapter ${isReversed ? 'service-chapter--reversed' : ''} ${
                idx % 2 === 0 ? 'section--white' : 'section--bg'
              }`}
            >
              <div className="container service-chapter__container">
                {/* Watermark Chapter Index */}
                <div className="service-chapter__watermark" aria-hidden="true">
                  0{idx + 1}
                </div>

                <div className="service-chapter__grid">
                  {/* Text Column */}
                  <div className="service-chapter__text-col">
                    <Reveal>
                      <h2 className="heading-xl service-chapter__title">
                        {service.title}
                      </h2>

                      <div className="service-chapter__paragraphs">
                        {service.paragraphs?.map((p, pIdx) => (
                          <p key={pIdx} className="body-large service-chapter__text">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Remote Monitoring & Management Bullet Functions */}
                      {service.functions && (
                        <div className="rmm-functions-block">
                          <p className="rmm-functions-intro">
                            <strong>{service.functionsIntro}</strong>
                          </p>
                          <ul className="rmm-functions-list">
                            {service.functions.map((func, fIdx) => (
                              <li key={fIdx} className="rmm-function-item">
                                <span className="rmm-function-check">✓</span>
                                <span>{func}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.concludingParagraph && (
                        <p className="body-large service-chapter__text">
                          {service.concludingParagraph}
                        </p>
                      )}

                      <div className="service-chapter__action">
                        <Link to="/contact" className="btn btn--secondary">
                          <span>Consult on {service.title}</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </Reveal>
                  </div>

                  {/* Visual / Architecture Column */}
                  <div className="service-chapter__visual-col">
                    <Reveal delay={0.12}>
                      <ServiceVisual
                        service={service}
                        index={idx}
                      />
                    </Reveal>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ============================================================
          3. SERVICE PROCESS JOURNEY: FROM INFRASTRUCTURE TO INTELLIGENCE
          ============================================================ */}
      <section className="section section--white process-journey-section" aria-labelledby="journey-title">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="eyebrow">Continuous Operational Lifecycle</span>
            <h2 id="journey-title" className="heading-xl">
              From Infrastructure to Intelligence
            </h2>
            <p className="body-muted mx-auto max-w-xl">
              Our 5 interconnected service capabilities provide an uninterrupted pipeline from initial security audit to predictive operational intelligence.
            </p>
          </Reveal>

          <div className="process-journey-grid">
            {processSteps.map((p, idx) => (
              <Reveal key={p.step} delay={idx * 0.08} className="process-step-card">
                <div className="process-step-card__top">
                  <span className="process-step-card__num">{p.step}</span>
                  <span className="process-step-card__dot" style={{ background: p.color }} />
                </div>
                <h3 className="process-step-card__title">{p.title}</h3>
                <p className="process-step-card__desc">{p.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="process-step-card__arrow" aria-hidden="true">
                    →
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. FINAL CTA (AUTHENTIC BRAND INDIGO)
          ============================================================ */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Contact our experts at + 91 97317 47999 to discuss managed IT services, cybersecurity audits, or custom IoT engineering."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="Explore Our Solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
