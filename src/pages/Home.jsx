import React, { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../components/home/Hero';
import ConnectedIntelligence from '../components/home/ConnectedIntelligence';
import CoreTechnologyCards from '../components/home/CoreTechnologyCards';
import TechnicalMastery from '../components/home/TechnicalMastery';
import EnterpriseSolutions from '../components/home/EnterpriseSolutions';
import OurStrengths from '../components/home/OurStrengths';
import CTA from '../components/common/CTA';
import { homeSolutionShowcase } from '../data/solutions';
import './Home.css';

export default function Home() {
  useDocumentTitle('Home');

  // Defer preloading solution images to idle time so critical Hero FCP/LCP is never blocked
  useEffect(() => {
    const preloadSolutions = () => {
      homeSolutionShowcase.map(({ img }) => img).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(preloadSolutions, { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preloadSolutions, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Statement: Connected Intelligence */}
      <ConnectedIntelligence />

      {/* 2b. Core Technology Modules */}
      <CoreTechnologyCards />

      {/* 3. SECTION 01: Technical Mastery — Cinematic Engineering Scene */}
      <TechnicalMastery />

      {/* 4. SECTION 02: Enterprise Solutions — Enterprise Solution Showcase */}
      <EnterpriseSolutions />

      {/* 5. SECTION 03: Our Strengths — The Soukhya Engineering DNA */}
      <OurStrengths />

      {/* 6. Final CTA */}
      <CTA
        eyebrow="Have any questions?"
        heading="Securing Assets, Protecting People, Driving Efficiency..."
        description="We engineer integrated IoT and IIoT platforms that bring devices, data, and decision intelligence together for sustainable growth."
        primaryLabel="Contact Our Experts"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </div>
  );
}
