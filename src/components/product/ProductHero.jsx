import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Reveal from '../common/Reveal';

export default function ProductHero({
  title = 'Our Product',
  description = 'I-ES, continuous real-time monitoring and safety infrastructure engineered to prevent electrical hazards and protect critical enterprise assets.',
}) {
  return (
    <section className="product-hero section section--white" aria-labelledby="product-hero-title">
      <div className="product-hero__bg-grid" aria-hidden="true" />
      <div className="product-hero__bg-ambient" aria-hidden="true" />

      <div className="container product-hero__container">
        <div className="product-hero__grid">
          <div className="product-hero__content">
            <Reveal>
              <Breadcrumb currentPage="Product" />

              <h1 id="product-hero-title" className="heading-display product-hero__heading">
                {title}
              </h1>

              <p className="body-large product-hero__desc">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
