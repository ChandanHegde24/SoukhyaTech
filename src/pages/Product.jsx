import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Reveal from '../components/common/Reveal';
import CTA from '../components/common/CTA';
import ProductShowcase from '../components/product/ProductShowcase';
import IntelligenceFlow from '../components/product/IntelligenceFlow';
import './Product.css';

export default function Product() {
  return (
    <div className="product-page">
      {/* ============================================================
          1. EDITORIAL HERO SECTION (Aligned with Services / Solutions / About)
          ============================================================ */}
      <section className="product-hero section section--white" aria-labelledby="product-hero-title">
        <div className="product-hero__bg-grid" aria-hidden="true" />
        <div className="product-hero__bg-ambient" aria-hidden="true" />

        <div className="container product-hero__container">
          <div className="product-hero__grid">
            <div className="product-hero__content">
              <Reveal>
                <Breadcrumb currentPage="Product" />

                <h1 id="product-hero-title" className="heading-display product-hero__heading">
                  Our Product
                </h1>

                <p className="body-large product-hero__desc">
                  I-ES, continuous real-time monitoring and safety infrastructure engineered to prevent electrical hazards and protect critical enterprise assets.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. FLAGSHIP PRODUCT SHOWCASE CHAPTER (I-ES)
          ============================================================ */}
      <section className="product-flagship-section" aria-label="Flagship Product Chapter">
        <ProductShowcase />
      </section>

      {/* ============================================================
          3. CONNECTED INTELLIGENCE LIFECYCLE STORY
          ============================================================ */}
      <IntelligenceFlow />

      {/* ============================================================
          4. CALL TO ACTION SECTION
          ============================================================ */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Contact our experts at +91 97317 47999 or sales@soukhyatech.com to deploy the Intelligent Earth Pit Monitoring System (I-ES)."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="Explore Our Solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
