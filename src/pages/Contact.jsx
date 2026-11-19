import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactDirectCards from '../components/contact/ContactDirectCards';
import ContactLocations from '../components/contact/ContactLocations';
import './Contact.css';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <div className="contact-page">
      {/* 1. Editorial Contact Hero */}
      <ContactHero />

      {/* 2. Main Contact Section (Form & Direct Channels) */}
      <section className="section section--bg contact-main-section" aria-labelledby="form-heading">
        <div className="container">
          <div className="contact-layout">
            {/* Form Column (Left) */}
            <div className="contact-form-container">
              <ContactForm />
            </div>

            {/* Info Column (Right) */}
            <div className="contact-info-container">
              <ContactDirectCards />
              <ContactLocations />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
