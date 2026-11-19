import React from 'react';
import Reveal from '../common/Reveal';
import EngineeringDnaVisual from './EngineeringDnaVisual';
import { aboutContent } from '../../data/about';

export default function AboutOverview({
  title = aboutContent.overviewTitle,
  overview = aboutContent.overview,
}) {
  return (
    <section id="about-overview" className="about-section about-section--overview section section--bg" aria-labelledby="overview-heading">
      <div className="container">
        <div className="about-overview__grid">
          <div className="about-overview__text-col">
            <Reveal>
              <h2 id="overview-heading" className="heading-xl about-overview__title">
                {title}
              </h2>

              <p className="body-large about-overview__paragraph">
                {overview}
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
  );
}
