import React from 'react';
import { expertServices, managedServices } from '../data/siteContent';

const Services = () => {
  return (
    <div className="page-shell services-page">
      <section className="page-hero">
        <p>Services</p>
        <h1>Managed technology services and full-stack IoT delivery.</h1>
        <span>
          Soukhya Tech supports connected products, secure IT operations, cloud platforms, and remote monitoring.
        </span>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p>Managed Services</p>
          <h2>Operational support for secure, resilient environments.</h2>
        </div>
        <div className="page-card-grid">
          {managedServices.map((service) => (
            <article className="page-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p>IoT Expertise</p>
          <h2>From device design to deployment planning.</h2>
        </div>
        <div className="page-card-grid compact-grid">
          {expertServices.map((service) => (
            <article className="page-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
