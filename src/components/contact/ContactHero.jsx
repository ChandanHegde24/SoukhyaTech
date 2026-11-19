import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Reveal from '../common/Reveal';
import { contactInfo } from '../../data/contact';

export default function ContactHero({
  title = 'Contact',
  tagline = contactInfo.tagline,
  phone = contactInfo.phone,
}) {
  return (
    <section className="contact-hero section section--white" aria-labelledby="contact-title">
      <div className="contact-hero__bg-grid" aria-hidden="true" />
      <div className="contact-hero__bg-ambient" aria-hidden="true" />

      <div className="container contact-hero__container">
        <div className="contact-hero__grid">
          <div className="contact-hero__content">
            <Reveal>
              <Breadcrumb currentPage="Contact" />

              <h1 id="contact-title" className="heading-display contact-hero__heading">
                {title}
              </h1>

              <p className="contact-hero__tagline">
                {tagline}
              </p>

              <p className="contact-hero__prompt">
                CONTACT A SOUKHYA TECH EXPERT TODAY AT{' '}
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-hero__phone-highlight">
                  {phone}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
