import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ProductHero from '../components/product/ProductHero';
import ProductShowcase from '../components/product/ProductShowcase';
import IntelligenceFlow from '../components/product/IntelligenceFlow';
import CTA from '../components/common/CTA';
import './Product.css';

export default function Product() {
  useDocumentTitle('Product');

  return (
    <div className="product-page">
      {/* 1. Editorial Hero Section */}
      <ProductHero />

      {/* 2. Flagship Product Showcase Chapter (I-ES) */}
      <section className="product-flagship-section" aria-label="Flagship Product Chapter">
        <ProductShowcase />
      </section>

      {/* 3. Connected Intelligence Lifecycle Story */}
      <IntelligenceFlow />

      {/* 4. Call to Action Section */}
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
