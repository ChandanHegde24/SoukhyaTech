import React from 'react';
import Reveal from '../common/Reveal';
import { lifecycleSteps } from '../../data/solutions';

export default function SolutionsLifecycle({ steps = lifecycleSteps }) {
  return (
    <section className="section section--white solution-lifecycle-section" aria-labelledby="lifecycle-title">
      <div className="container">
        <Reveal className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
          <span className="eyebrow">End-to-End Technology Pipeline</span>
          <h2 id="lifecycle-title" className="heading-xl">
            From Connectivity to Operational Intelligence
          </h2>
          <p className="body-muted solution-lifecycle-subtitle mx-auto max-w-xl">
            Our engineering lifecycle orchestrates custom hardware instrumentation, real-time edge processing, and high-performance infrastructure into actionable decision intelligence.
          </p>
        </Reveal>

        <div className="solution-lifecycle-grid">
          {steps.map((step, idx) => (
            <Reveal
              key={step.step}
              delay={idx * 0.08}
              className="lifecycle-step-card"
              style={{
                '--flow-delay': `${idx * 0.72}s`,
                '--step-color': step.color,
              }}
            >
              <div className="lifecycle-step-card__top">
                <span className="lifecycle-step-card__num">{step.step}</span>
              </div>
              <h3 className="lifecycle-step-card__title">{step.title}</h3>
              <p className="lifecycle-step-card__desc">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
