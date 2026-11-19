import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsChapters from '../components/solutions/SolutionsChapters';
import SolutionsLifecycle from '../components/solutions/SolutionsLifecycle';
import CTA from '../components/common/CTA';
import './Solutions.css';

export default function Solutions() {
  useDocumentTitle('Solutions');

  return (
    <div className="solutions-page">
      {/* 1. Editorial Solutions Hero */}
      <SolutionsHero />

      {/* 2. Main Cinematic Solution Chapters */}
      <SolutionsChapters />

      {/* 3. Connected Architecture Lifecycle */}
      <SolutionsLifecycle />

      {/* 4. Final Call to Action */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="Connect with our experts at + 91 97317 47999 to discuss customized IoT engineering or enterprise infrastructure deployment."
        primaryLabel="Contact a Soukhya Expert"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </div>
  );
}
