import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Reveal from '../common/Reveal';

export default function ServicesHero({
  title = 'Our Services',
  description = 'Comprehensive information security, managed IT infrastructure, 24/7 network monitoring, cloud lifecycle management, and remote supervision.',
}) {
  return (
    <section className="services-hero section section--white" aria-labelledby="services-hero-title">
      <div className="services-hero__bg-grid" aria-hidden="true" />
      <div className="services-hero__bg-ambient" aria-hidden="true" />

      <div className="container services-hero__container">
        <div className="services-hero__grid">
          <div className="services-hero__content">
            <Reveal>
              <Breadcrumb currentPage="Services" />

              <h1 id="services-hero-title" className="heading-display services-hero__heading">
                {title}
              </h1>

              <p className="body-large services-hero__desc">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
