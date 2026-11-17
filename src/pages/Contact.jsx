import React from 'react';
import { useState } from 'react';
import { contactInfo, inquiryTypes } from '../data/contact';
import Breadcrumb from '../components/common/Breadcrumb';
import Reveal from '../components/common/Reveal';
import './Contact.css';

/* ── Reveal Animation Wrapper ── */
/* ── Contact Hero Visual Component ── */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: inquiryTypes[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      nextErrors.name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      nextErrors.email = 'Please provide a valid business email address.';
    }

    const trimmedPhone = formData.phone.trim();
    if (trimmedPhone && !/^[+0-9\s\-()]{7,20}$/.test(trimmedPhone)) {
      nextErrors.phone = 'Please provide a valid phone number (e.g. +91 97317 47999).';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage || trimmedMessage.length < 10) {
      nextErrors.message = 'Please provide a brief message (minimum 10 characters).';
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),
            inquiryType: formData.inquiryType,
            message: formData.message.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error(`Server returned error code: ${response.status}`);
        }
      } else {
        // Controlled transmission latency for client-only / static deployment
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        'Unable to transmit your inquiry at this moment. Please reach out directly to sales@soukhyatech.com or call +91 97317 47999.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contactInfo.addressShort
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="contact-page">
      {/* ============================================================
          1. EDITORIAL CONTACT HERO
          ============================================================ */}
      <section className="contact-hero section section--white" aria-labelledby="contact-title">
        <div className="contact-hero__bg-grid" aria-hidden="true" />
        <div className="contact-hero__bg-ambient" aria-hidden="true" />

        <div className="container contact-hero__container">
          <div className="contact-hero__grid">
            {/* Left Content */}
            <div className="contact-hero__content">
              <Reveal>
                <Breadcrumb currentPage="Contact" />

                {/* <div className="contact-hero__eyebrow">
                  <span className="contact-hero__eyebrow-dot" />
                  <span className="contact-hero__eyebrow-line" />
                  <span>LET'S CONNECT · SOUKHYA TECH</span>
                </div> */}

                <h1 id="contact-title" className="heading-display contact-hero__heading">
                  Contact
                </h1>

                <p className="contact-hero__tagline">
                  {contactInfo.tagline}
                </p>

                <p className="contact-hero__prompt">
                  CONTACT A SOUKHYA TECH EXPERT TODAY AT{' '}
                  <a href="tel:+919731747999" className="contact-hero__phone-highlight">
                    + 91 97317 47999
                  </a>
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. MAIN CONTACT SECTION (FORM & DIRECT CHANNELS)
          ============================================================ */}
      <section className="section section--bg contact-main-section" aria-labelledby="form-heading">
        <div className="container">
          <div className="contact-layout">
            {/* Form Column (Left) */}
            <div className="contact-form-container">
              <Reveal>
                <div className="contact-card">
                  <div className="contact-card__header">
                    <span className="contact-badge">Direct Outreach</span>
                    <h2 id="form-heading" className="heading-lg contact-card__title">
                      {contactInfo.chatPrompt}
                    </h2>
                    <p className="body-muted contact-card__subtitle">
                      {contactInfo.selfServicePrompt}
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="contact-success-state">
                      <div className="success-icon-wrap">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="heading-md">Inquiry Transmitted</h3>
                      <p className="body-muted">
                        Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>. Your inquiry regarding <em>{formData.inquiryType}</em> has been received.
                      </p>
                      <button
                        className="btn btn--secondary"
                        onClick={() => {
                          setIsSubmitted(false);
                          setErrors({});
                          setSubmitError(null);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            inquiryType: inquiryTypes[0],
                            message: '',
                          });
                        }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                      {submitError && (
                        <div className="form-status-alert form-status-alert--error" role="alert">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span>{submitError}</span>
                        </div>
                      )}

                      {/* Inquiry Type Selector */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="inquiryType">
                          Inquiry Category
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          className="form-select"
                          value={formData.inquiryType}
                          onChange={handleChange}
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Row: Name & Email */}
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your Name"
                            className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <p id="name-error" className="form-error-msg" role="alert">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="email">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="name@company.com"
                            className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p id="email-error" className="form-error-msg" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row: Phone & Company */}
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label" htmlFor="phone">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 97317 47999"
                            className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="form-error-msg" role="alert">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="company">
                            Company / Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Organization Name"
                            className="form-input"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          required
                          placeholder="How can we help your team?"
                          className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <p id="message-error" className="form-error-msg" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn--primary submit-btn"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Submit Message</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Info Column (Right) */}
            <div className="contact-info-container">
              {/* Direct Communications */}
              <Reveal delay={0.1}>
                <div className="contact-info-card">
                  <h3 className="contact-info-card__title">Direct Contact Details</h3>

                  <div className="contact-channel">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="channel-label">Phone</span>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="channel-value">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-channel">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <span className="channel-label">E-Mail</span>
                      <a href={`mailto:${contactInfo.email}`} className="channel-value">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="contact-hours-block">
                    <span className="channel-label">{contactInfo.workingHours.title}</span>
                    <p className="body-muted contact-hours-sub">
                      {contactInfo.workingHours.subtitle}
                    </p>
                    <ul className="hours-list">
                      <li>{contactInfo.workingHours.schedule}</li>
                      <li>{contactInfo.workingHours.saturday}</li>
                      <li>{contactInfo.workingHours.sunday}</li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Company Location & Map */}
              <Reveal delay={0.2}>
                <div className="contact-info-card">
                  <h3 className="contact-info-card__title">{contactInfo.companyLocation.title}</h3>
                  <div className="contact-channel">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="channel-label">{contactInfo.companyLocation.area}</span>
                      <p className="address-text">
                        <span>Street: {contactInfo.companyLocation.street}</span>
                        <span>City: {contactInfo.companyLocation.city}</span>
                        <span>Country: {contactInfo.companyLocation.country}</span>
                      </p>
                    </div>
                  </div>

                  <div className="map-embed-wrapper">
                    <iframe
                      title="Soukhya Tech location"
                      src={mapSrc}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
