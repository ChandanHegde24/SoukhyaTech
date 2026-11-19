import React from 'react';
import ServiceChapterCard from './ServiceChapterCard';
import { managedServices } from '../../data/services';

export default function ServicesChapters({ services = managedServices }) {
  return (
    <section className="services-chapters" aria-label="Managed Services Chapters">
      {services.map((service, idx) => (
        <ServiceChapterCard key={service.id} service={service} index={idx} />
      ))}
    </section>
  );
}
