import React from 'react';
import { engineeringDnaSteps } from '../../data/about';

export default function EngineeringDnaVisual({ steps = engineeringDnaSteps }) {
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
