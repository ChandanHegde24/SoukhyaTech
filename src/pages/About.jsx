import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AboutHero from '../components/about/AboutHero';
import AboutOverview from '../components/about/AboutOverview';
import AboutPurpose from '../components/about/AboutPurpose';
import CTA from '../components/common/CTA';
import './About.css';

export default function About() {
  useDocumentTitle('About');

  return (
    <div className="about-page">
      {/* 1. Editorial About Hero with Orbital Logo */}
      <AboutHero />

      {/* 2. Overview Section with Engineering DNA Visual */}
      <AboutOverview />

      {/* 3. Our Mission & Our Vision */}
      <AboutPurpose />

      {/* 4. CTA Section */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Connect with our experts at + 91 97317 47999 or sales@soukhyatech.com to partner with Soukhya Tech."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="View Our Products"
        secondaryTo="/product"
      />
    </div>
  );
}
