import CTA from '../components/CTA/CTA';
import Breadcrumb from '../components/shared/Breadcrumb/Breadcrumb';
import Reveal from '../components/shared/Reveal/Reveal';
import { solutionShowcase } from '../data/solutionCatalog';
import './Solutions.css';

const technologyJourney = [
  { step: '01', title: 'DEVICES & SENSORS', desc: 'Hardware design, embedded telemetry & rugged physical instrumentation', color: '#25A449' },
  { step: '02', title: 'EDGE & GATEWAYS', desc: 'Secure local processing, OTA firmware management & protocol bridging', color: '#007CC4' },
  { step: '03', title: 'CONNECTED CLOUD', desc: 'Scalable cloud infrastructure, device fleet orchestration & storage', color: '#2C3694' },
  { step: '04', title: 'DECISION INTELLIGENCE', desc: 'AI-driven analytics, anomaly detection & operational dashboards', color: '#E68324' },
  { step: '05', title: 'SUSTAINED VALUE', desc: 'Continuous uptime, reduced operational waste & asset longevity', color: '#EC008C' },
];

/* ── Reusable Solution Visual Component (Supports Image, Hover, Parallax) ── */
function SolutionVisual({ solution, index }) {
  return (
    <div className="solution-visual-wrapper">
      <div className="solution-visual-frame">
        {/* Production Image Container */}
        <div className="solution-visual-media">
          <img
            src={solution.img}
            alt={solution.title}
            className="solution-visual-img"
            loading="lazy"
            width="720"
            height="460"
          />
          <div className="solution-visual-overlay" />
        </div>

        {/* Architectural Tech Meta Bar */}
        <div className="solution-visual-meta">
          <div className="solution-visual-meta__left">
            <span className="solution-visual-meta__dot" style={{ background: solution.accent }} />
            <span className="solution-visual-meta__chip">{solution.chip}</span>
          </div>
          <span className="solution-visual-meta__metric">{solution.metric}</span>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* ============================================================
          1. EDITORIAL SOLUTIONS HERO
          ============================================================ */}
      <section className="solutions-hero section section--white" aria-labelledby="solutions-hero-title">
        <div className="solutions-hero__bg-grid" aria-hidden="true" />
        <div className="solutions-hero__bg-ambient" aria-hidden="true" />

        <div className="container solutions-hero__container">
          <div className="solutions-hero__grid">
            {/* Left Content */}
            <div className="solutions-hero__content">
              <Reveal>
                <Breadcrumb currentPage="Solutions" />

                <div className="solutions-hero__eyebrow">
                  <span className="solutions-hero__eyebrow-dot" />
                  <span className="solutions-hero__eyebrow-line" />
                  <span>INTELLIGENT SOLUTIONS FOR CONNECTED SYSTEMS</span>
                </div>

                <h1 id="solutions-hero-title" className="heading-display solutions-hero__heading">
                  Our Solutions
                </h1>

                <p className="body-large solutions-hero__desc">
                  We design and deliver custom IoT and IIoT solutions, responsive smart systems, and durable data center hardware infrastructure.
                </p>

              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. STICKY SOLUTION ECOSYSTEM NAVIGATION
          ============================================================ */}
      {/* ============================================================
          3. SOLUTION ECOSYSTEM INTERACTIVE MAP
          ============================================================ */}
      {/* ============================================================
          4. MAIN CINEMATIC SOLUTION CHAPTERS (ALTERNATING ASYMMETRIC)
          ============================================================ */}
      <section className="solutions-chapters" aria-label="Solutions Detailed Chapters">
        {solutionShowcase.map((solution, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <article
              key={solution.id}
              id={`solution-${solution.id}`}
              className={`solution-chapter ${isReversed ? 'solution-chapter--reversed' : ''} ${
                idx % 2 === 0 ? 'section--white' : 'section--bg'
              }`}
            >
              <div className="container solution-chapter__container">
                {/* Large Low-Opacity Watermark Number */}
                <div className="solution-chapter__watermark" aria-hidden="true">
                  0{idx + 1}
                </div>

                <div className="solution-chapter__grid">
                  {/* Text Column */}
                  <div className="solution-chapter__text-col">
                    <Reveal>
                      <div className="solution-chapter__badge">
                        <span className="solution-chapter__badge-dot" style={{ background: solution.accent }} />
                        <span>{solution.code}</span>
                      </div>

                      <h2 className="heading-xl solution-chapter__title">
                        {solution.title}
                      </h2>

                      <div className="solution-chapter__paragraphs">
                        {solution.paragraphs?.map((p, pIdx) => (
                          <p key={pIdx} className="body-large solution-chapter__text">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Technical Capability Tags */}
                      <div className="solution-chapter__tags">
                        {solution.tags.map((tag) => (
                          <span key={tag} className="chip chip--solution">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="solution-chapter__action">
                        <Link to="/contact" className="btn btn--secondary">
                          <span>Consult on {solution.shortTitle}</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </Reveal>
                  </div>

                  {/* Visual / Image Column */}
                  <div className="solution-chapter__visual-col">
                    <Reveal delay={0.12}>
                      <SolutionVisual solution={solution} index={idx} />
                    </Reveal>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ============================================================
          5. CONNECTED ARCHITECTURE LIFECYCLE (FROM CONNECTIVITY TO INTELLIGENCE)
          ============================================================ */}
      <section className="section section--white solution-lifecycle-section" aria-labelledby="lifecycle-title">
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="eyebrow">End-to-End Technology Pipeline</span>
            <h2 id="lifecycle-title" className="heading-xl">
              From Connectivity to Operational Intelligence
            </h2>
            <p className="body-muted mx-auto max-w-xl">
              Our engineering lifecycle orchestrates custom hardware instrumentation, real-time edge processing, and high-performance infrastructure into actionable decision intelligence.
            </p>
          </Reveal>

          <div className="solution-lifecycle-grid">
            {technologyJourney.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08} className="lifecycle-step-card">
                <div className="lifecycle-step-card__top">
                  <span className="lifecycle-step-card__num">{step.step}</span>
                  <span className="lifecycle-step-card__dot" style={{ background: step.color }} />
                </div>
                <h3 className="lifecycle-step-card__title">{step.title}</h3>
                <p className="lifecycle-step-card__desc">{step.desc}</p>
                {idx < technologyJourney.length - 1 && (
                  <div className="lifecycle-step-card__arrow" aria-hidden="true">
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
        description="Connect with our experts at + 91 97317 47999 to discuss customized IoT engineering or enterprise infrastructure deployment."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </div>
  );
}
