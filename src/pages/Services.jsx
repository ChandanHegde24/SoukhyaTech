import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ServicesHero from '../components/services/ServicesHero';
import ServicesChapters from '../components/services/ServicesChapters';
import ServicesJourney from '../components/services/ServicesJourney';
import CTA from '../components/common/CTA';
import './Services.css';

export default function Services() {
  useDocumentTitle('Services');

  return (
    <div className="services-page">
      {/* 1. Editorial Hero Section */}
      <ServicesHero />

      {/* 2. Main Cinematic Service Chapters (Alternating Asymmetric) */}
      <ServicesChapters />

      {/* 3. Service Process Journey: From Infrastructure to Intelligence */}
      <ServicesJourney />

      {/* 4. Final Call to Action */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Connect with our experts at + 91 97317 47999 or sales@soukhyatech.com to architect your managed IT and cybersecurity roadmap."
        primaryLabel="Schedule a Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore Our Solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
