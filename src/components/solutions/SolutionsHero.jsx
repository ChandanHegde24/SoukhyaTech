import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Reveal from '../common/Reveal';

export default function SolutionsHero({
  title = 'Our Solutions',
  description = 'We design and deliver custom IoT and IIoT solutions, responsive smart systems, and durable data center hardware infrastructure.',
}) {
  return (
    <section className="solutions-hero section section--white" aria-labelledby="solutions-hero-title">
      <div className="solutions-hero__bg-grid" aria-hidden="true" />
      <div className="solutions-hero__bg-ambient" aria-hidden="true" />

      <div className="container solutions-hero__container">
        <div className="solutions-hero__grid">
          <div className="solutions-hero__content">
            <Reveal>
              <Breadcrumb currentPage="Solutions" />

              <h1 id="solutions-hero-title" className="heading-display solutions-hero__heading">
                {title}
              </h1>

              <p className="body-large solutions-hero__desc">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
