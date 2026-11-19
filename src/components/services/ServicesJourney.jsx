import React from 'react';
import Reveal from '../common/Reveal';
import { processSteps } from '../../data/services';

export default function ServicesJourney({ steps = processSteps }) {
  return (
    <section className="section section--white process-journey-section" aria-labelledby="journey-title">
      <div className="container">
        <Reveal className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
          <span className="eyebrow">Continuous Operational Lifecycle</span>
          <h2 id="journey-title" className="heading-xl">
            From Infrastructure to Intelligence
          </h2>
          <p className="body-muted process-journey-subtitle mx-auto max-w-xl">
            Our 5 interconnected service capabilities provide an uninterrupted pipeline from initial security audit to predictive operational intelligence.
          </p>
        </Reveal>

        <div className="process-journey-grid">
          {steps.map((p, idx) => (
            <Reveal key={p.step} delay={idx * 0.08} className="process-step-card">
              <div className="process-step-card__top">
                <span className="process-step-card__num">{p.step}</span>
                <span className="process-step-card__dot" style={{ background: p.color }} />
              </div>
              <h3 className="process-step-card__title">{p.title}</h3>
              <p className="process-step-card__desc">{p.desc}</p>
              {idx < steps.length - 1 && (
                <div className="process-step-card__arrow" aria-hidden="true">
                  →
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
