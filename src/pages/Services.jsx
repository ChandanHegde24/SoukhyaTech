import CTA from '../components/CTA/CTA';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/shared/Breadcrumb/Breadcrumb';
import Reveal from '../components/shared/Reveal/Reveal';
import { managedServices } from '../data/siteContent';
import './Services.css';

/* ── Reveal Animation Wrapper ── */
/* ── Service Visuals (Bespoke Interactive SVG Technology Diagrams) ── */
function ServiceVisual({ type, index, activeTab, title }) {
  return (
    <div className={`service-visual-box service-visual-box--${type}`}>
      <div className="service-visual-box__ambient" />
      <div className="service-visual-box__grid" />

      {/* Visual Header Badge */}
      <div className="service-visual-box__header">
        <span className="service-visual-box__chip">SYS 0{index + 1} // ARCHITECTURE</span>
        <span className="service-visual-box__status">
          <span className="service-visual-box__status-dot" />
          ACTIVE
        </span>
      </div>

      {/* 01: IT Audit & Advisory Topology */}
      {type === 'it-audit' && (
        <svg className="service-visual-svg" viewBox="0 0 600 360" fill="none">
          <defs>
            <linearGradient id="auditGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007CC4" />
              <stop offset="100%" stopColor="#2C3694" />
            </linearGradient>
          </defs>

          {/* Governance & Architecture Framework Grid */}
          <rect x="60" y="60" width="480" height="240" rx="16" className="svg-frame" />
          <line x1="60" y1="140" x2="540" y2="140" className="svg-grid-line" />
          <line x1="60" y1="220" x2="540" y2="220" className="svg-grid-line" />
          <line x1="220" y1="60" x2="220" y2="300" className="svg-grid-line" />
          <line x1="380" y1="60" x2="380" y2="300" className="svg-grid-line" />

          {/* VAPT Assessment Nodes */}
          <circle cx="140" cy="100" r="24" className="svg-node node--blue" />
          <text x="140" y="105" textAnchor="middle" className="svg-node-text">PEOPLE</text>

          <circle cx="300" cy="100" r="28" className="svg-node node--indigo" />
          <text x="300" y="105" textAnchor="middle" className="svg-node-text">PROCESS</text>

          <circle cx="460" cy="100" r="24" className="svg-node node--green" />
          <text x="460" y="105" textAnchor="middle" className="svg-node-text">TECH</text>

          {/* VAPT Central Audit Scanner */}
          <circle cx="300" cy="220" r="45" className="svg-scanner-ring" />
          <circle cx="300" cy="220" r="24" className="svg-scanner-core" />
          <text x="300" y="224" textAnchor="middle" className="svg-scanner-text">VAPT</text>

          {/* Connected Assessment Rays */}
          <path d="M 140 124 L 270 200" className="svg-path svg-path--animated" />
          <path d="M 300 128 L 300 175" className="svg-path svg-path--animated" />
          <path d="M 460 124 L 330 200" className="svg-path svg-path--animated" />

          {/* Traveling Data Packets */}
          <circle r="3.5" className="svg-packet">
            <animateMotion path="M 140 124 L 270 200" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" className="svg-packet">
            <animateMotion path="M 460 124 L 330 200" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* 02: Managed Security Services SOC Radar */}
      {type === 'managed-security' && (
        <svg className="service-visual-svg" viewBox="0 0 600 360" fill="none">
          {/* SOC 24/7 Concentric Radar Rings */}
          <circle cx="300" cy="180" r="130" className="svg-radar-ring ring-3" />
          <circle cx="300" cy="180" r="90" className="svg-radar-ring ring-2" />
          <circle cx="300" cy="180" r="50" className="svg-radar-ring ring-1" />

          {/* Radar Sweep Beam */}
          <line x1="300" y1="180" x2="430" y2="180" className="svg-radar-sweep" />

          {/* Central Shield Core */}
          <circle cx="300" cy="180" r="22" className="svg-shield-core" />
          <text x="300" y="184" textAnchor="middle" className="svg-shield-text">SOC 24/7</text>

          {/* Threat Defense Perimeter Nodes */}
          <circle cx="160" cy="110" r="16" className="svg-perimeter-node node-firewall" />
          <text x="160" y="114" textAnchor="middle" className="svg-micro-text">SIEM</text>

          <circle cx="440" cy="110" r="16" className="svg-perimeter-node node-endpoint" />
          <text x="440" y="114" textAnchor="middle" className="svg-micro-text">IAM</text>

          <circle cx="160" cy="250" r="16" className="svg-perimeter-node node-cloud-sec" />
          <text x="160" y="254" textAnchor="middle" className="svg-micro-text">FIREWALL</text>

          <circle cx="440" cy="250" r="16" className="svg-perimeter-node node-incident" />
          <text x="440" y="254" textAnchor="middle" className="svg-micro-text">LOGS</text>

          {/* Connection Web */}
          <path d="M 160 110 L 300 180 L 440 110" className="svg-path svg-path--animated" />
          <path d="M 160 250 L 300 180 L 440 250" className="svg-path svg-path--animated" />
        </svg>
      )}

      {/* 03: Managed Network Services Mesh Topology */}
      {type === 'managed-network' && (
        <svg className="service-visual-svg" viewBox="0 0 600 360" fill="none">
          {/* Backbone WAN / LAN Flow */}
          <path d="M 80 180 C 180 100, 240 260, 340 180 C 440 100, 500 240, 540 180" className="svg-backbone-line" />

          {/* Routers, Switches, WAN/LAN Nodes */}
          <g transform="translate(100, 150)">
            <rect width="60" height="60" rx="12" className="svg-device-card" />
            <text x="30" y="35" textAnchor="middle" className="svg-device-text">ROUTER</text>
          </g>

          <g transform="translate(240, 90)">
            <rect width="60" height="60" rx="12" className="svg-device-card" />
            <text x="30" y="35" textAnchor="middle" className="svg-device-text">SWITCH</text>
          </g>

          <g transform="translate(360, 210)">
            <rect width="60" height="60" rx="12" className="svg-device-card" />
            <text x="30" y="35" textAnchor="middle" className="svg-device-text">WI-FI</text>
          </g>

          <g transform="translate(480, 150)">
            <rect width="60" height="60" rx="12" className="svg-device-card" />
            <text x="30" y="35" textAnchor="middle" className="svg-device-text">WAN/LAN</text>
          </g>

          {/* Fiber Stream Packets */}
          <circle r="4" className="svg-packet-blue">
            <animateMotion path="M 80 180 C 180 100, 240 260, 340 180 C 440 100, 500 240, 540 180" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle r="3" className="svg-packet-green">
            <animateMotion path="M 80 180 C 180 100, 240 260, 340 180 C 440 100, 500 240, 540 180" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* 04: Managed Cloud Services Multi-Cloud Ecosystem */}
      {type === 'managed-cloud' && (
        <svg className="service-visual-svg" viewBox="0 0 600 360" fill="none">
          {/* Central Cloud Orchestration Hub */}
          <ellipse cx="300" cy="180" rx="100" ry="60" className="svg-cloud-halo" />

          {/* Public Cloud */}
          <g transform="translate(140, 90)">
            <circle cx="30" cy="30" r="32" className="svg-cloud-bubble bubble--public" />
            <text x="30" y="34" textAnchor="middle" className="svg-cloud-text">PUBLIC</text>
          </g>

          {/* Private Cloud */}
          <g transform="translate(400, 90)">
            <circle cx="30" cy="30" r="32" className="svg-cloud-bubble bubble--private" />
            <text x="30" y="34" textAnchor="middle" className="svg-cloud-text">PRIVATE</text>
          </g>

          {/* Hybrid Infrastructure */}
          <g transform="translate(270, 220)">
            <circle cx="30" cy="30" r="36" className="svg-cloud-bubble bubble--hybrid" />
            <text x="30" y="34" textAnchor="middle" className="svg-cloud-text">HYBRID</text>
          </g>

          {/* Workload Migration Synchronizer Rings */}
          <path d="M 190 120 L 280 220 L 410 120" className="svg-path svg-path--dashed" />

          {/* Traveling Workload Packets */}
          <circle r="4" className="svg-packet">
            <animateMotion path="M 190 120 L 280 220 L 410 120" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* 05: Remote Monitoring and Management Console */}
      {type === 'remote-monitoring' && (
        <svg className="service-visual-svg" viewBox="0 0 600 360" fill="none">
          {/* RMM Monitoring Dashboard Panel */}
          <rect x="80" y="60" width="440" height="240" rx="14" className="svg-rmm-panel" />
          <line x1="80" y1="110" x2="520" y2="110" className="svg-grid-line" />

          {/* KPI Monitoring Bars (Conceptual) */}
          <g transform="translate(110, 140)">
            <rect x="0" y="0" width="70" height="8" rx="4" fill="rgba(0,124,196,0.15)" />
            <rect x="0" y="0" width="55" height="8" rx="4" fill="#007CC4" />
            <text x="0" y="-8" className="svg-kpi-text">CPU LOAD</text>
          </g>

          <g transform="translate(210, 140)">
            <rect x="0" y="0" width="70" height="8" rx="4" fill="rgba(37,164,73,0.15)" />
            <rect x="0" y="0" width="60" height="8" rx="4" fill="#25A449" />
            <text x="0" y="-8" className="svg-kpi-text">UPTIME</text>
          </g>

          <g transform="translate(310, 140)">
            <rect x="0" y="0" width="70" height="8" rx="4" fill="rgba(236,0,140,0.15)" />
            <rect x="0" y="0" width="40" height="8" rx="4" fill="#EC008C" />
            <text x="0" y="-8" className="svg-kpi-text">MEMORY</text>
          </g>

          <g transform="translate(410, 140)">
            <rect x="0" y="0" width="70" height="8" rx="4" fill="rgba(230,131,36,0.15)" />
            <rect x="0" y="0" width="65" height="8" rx="4" fill="#E68324" />
            <text x="0" y="-8" className="svg-kpi-text">STORAGE</text>
          </g>

          {/* Pulse Telemetry Wave */}
          <path d="M 110 240 L 220 240 L 240 210 L 260 270 L 280 230 L 300 240 L 490 240" className="svg-pulse-wave" />

          {/* Concept Badge */}
          <rect x="230" y="75" width="140" height="24" rx="12" className="svg-demo-badge" />
          <text x="300" y="91" textAnchor="middle" className="svg-demo-text">RMM ACTIVE // 24/7</text>
        </svg>
      )}

      {/* Footer System Caption */}
      <div className="service-visual-box__footer">
        <span className="service-visual-box__name">{title}</span>
        <span className="service-visual-box__protocol">SOUKHYA CONNECTED STACK</span>
      </div>
    </div>
  );
}

/* ── Interactive Process Steps Visual ── */
const processSteps = [
  { step: '01', title: 'ASSESS', desc: 'IT & Security Governance Audit', color: '#007CC4' },
  { step: '02', title: 'SECURE', desc: '24/7 SOC & Threat Defense', color: '#2C3694' },
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

                <div className="services-hero__eyebrow">
                  <span className="services-hero__eyebrow-dot" />
                  <span className="services-hero__eyebrow-line" />
                  <span>FROM INFRASTRUCTURE TO INTELLIGENCE</span>
                </div>

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
          3. MAIN CINEMATIC SERVICE CHAPTERS (ALTERNATING ASYMMETRIC)
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
                      <div className="service-chapter__badge">
                        <span className="service-chapter__badge-dot" />
                        <span>CHAPTER 0{idx + 1} // MANAGED SERVICE</span>
                      </div>

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
                          {service.concludingParagraph && (
                            <p className="rmm-concluding-text body-large">
                              {service.concludingParagraph}
                            </p>
                          )}
                        </div>
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
                        type={service.id}
                        index={idx}
                        title={service.title}
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
          4. SERVICE PROCESS JOURNEY: FROM INFRASTRUCTURE TO INTELLIGENCE
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
          6. FINAL CTA (AUTHENTIC BRAND INDIGO)
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
