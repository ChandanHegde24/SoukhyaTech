import React from 'react';
import { aboutContent, whyChooseSoukhya } from '../data/siteContent';

const About = () => {
  return (
    <div className="page-shell about-page">
      <section className="page-hero">
        <p>About Soukhya Tech</p>
        <h1>Building reliable IoT systems for a connected future.</h1>
        <span>{aboutContent.overview}</span>
      </section>

      <section className="page-split">
        <article className="page-panel">
          <h2>Our Mission</h2>
          <p>{aboutContent.mission}</p>
        </article>
        <article className="page-panel">
          <h2>Our Vision</h2>
          <p>{aboutContent.vision}</p>
        </article>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p>Why Choose Soukhya</p>
          <h2>Specialized delivery across devices, data, security, and scale.</h2>
        </div>
        <div className="why-chip-grid">
          {whyChooseSoukhya.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
