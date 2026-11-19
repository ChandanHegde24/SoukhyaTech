import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Reveal from '../common/Reveal';
import soukhyaMark from '../../assets/icons/favicon.png';

export default function AboutHero({
  title = 'About Soukhya Tech',
  description = 'We bring together IoT, IIoT and intelligent technology to help businesses innovate, connect and grow.',
}) {
  return (
    <section className="about-hero section section--white" aria-labelledby="about-title">
      <div className="about-hero__bg-grid" aria-hidden="true" />
      <div className="about-hero__bg-ambient" aria-hidden="true" />

      <div className="container about-hero__container">
        <div className="about-hero__grid">
          {/* Left Content */}
          <div className="about-hero__content">
            <Reveal>
              <Breadcrumb currentPage="About" />

              <h1 id="about-title" className="heading-display about-hero__heading">
                {title}
              </h1>

              <p className="body-large about-hero__desc">
                {description}
              </p>
            </Reveal>
          </div>

          {/* Right Hero Logo Animation */}
          <div className="about-hero__visual-wrap">
            <Reveal delay={0.15}>
              <div className="about-hero-logo" aria-label="Soukhya Tech logo">
                <span className="about-hero-logo__orbit about-hero-logo__orbit--outer" aria-hidden="true" />
                <span className="about-hero-logo__orbit about-hero-logo__orbit--inner" aria-hidden="true" />
                <div className="about-hero-logo__disc">
                  <img src={soukhyaMark} alt="Soukhya Tech" className="about-hero-logo__mark" width="120" height="120" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
