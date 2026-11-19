import React from 'react';
import Reveal from '../common/Reveal';
import { aboutContent } from '../../data/about';

export default function AboutPurpose({
  missionTitle = aboutContent.missionTitle,
  mission = aboutContent.mission,
  missionPoints = aboutContent.missionPoints,
  visionTitle = aboutContent.visionTitle,
  vision = aboutContent.vision,
  visionPoints = aboutContent.visionPoints,
}) {
  return (
    <section className="about-purpose section" aria-labelledby="purpose-heading">
      <div className="container">
        <div className="about-purpose__intro">
          <span className="about-purpose__eyebrow">WHAT DRIVES US</span>
          <h2 id="purpose-heading" className="heading-xl">Our Mission &amp; Our Vision</h2>
        </div>

        <div className="about-purpose__grid">
          <Reveal className="about-purpose-card about-purpose-card--mission">
            <h3 className="about-purpose-card__title">{missionTitle}</h3>
            <p className="about-purpose-card__text">{mission}</p>
            {missionPoints && (
              <ul className="about-purpose-card__points">
                {missionPoints.slice(0, 4).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={0.12} className="about-purpose-card about-purpose-card--vision">
            <h3 className="about-purpose-card__title">{visionTitle}</h3>
            <p className="about-purpose-card__text">{vision}</p>
            {visionPoints && (
              <ul className="about-purpose-card__points">
                {visionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
