import React from 'react';
import { solutions } from '../data/siteContent';

const Solutions = () => {
  return (
    <div className="page-shell solutions-page">
      <section className="page-hero">
        <p>Solutions</p>
        <h1>Connected systems for industries, infrastructure, and intelligent operations.</h1>
        <span>
          Soukhya Tech designs secure, scalable IoT and IIoT solutions that connect devices, cloud platforms, and edge intelligence.
        </span>
      </section>

      <section className="page-card-grid solution-detail-grid">
        {solutions.map((solution, index) => (
          <article className="page-card solution-detail-card" key={solution.title}>
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="solution-detail-content">
              <div className="solution-detail-media">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-detail-image"
                />
              </div>
              <div className="solution-detail-copy">
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Solutions;
