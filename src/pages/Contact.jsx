import React from 'react';
import { contactInfo, product } from '../data/siteContent';

const Contact = () => {
  return (
    <div className="page-shell contact-page">
      <section className="page-hero">
        <p>Contact</p>
        <h1>{product.title}</h1>
        <span>{product.subtitle}</span>
      </section>

      <section className="contact-grid">
        <article className="page-panel contact-lead">
          <h2>Contact a Soukhya Tech expert today</h2>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-action">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="contact-action secondary-action">
            {contactInfo.email}
          </a>
        </article>

        <article className="page-panel">
          <h2>Working hours</h2>
          <ul className="plain-list">
            {contactInfo.hours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="page-panel">
          <h2>Company location</h2>
          <ul className="plain-list">
            {contactInfo.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Contact;
