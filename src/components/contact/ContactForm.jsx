import React, { useState } from 'react';
import Reveal from '../common/Reveal';
import { contactInfo, inquiryTypes } from '../../data/contact';
import { validateContactForm } from '../../utils/formValidation';
import { createMailtoUrl, triggerMailto } from '../../utils/mailto';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: inquiryTypes[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const url = createMailtoUrl(formData, contactInfo.email);
      setMailtoLink(url);
      triggerMailto(url);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Mailto trigger error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setMailtoLink('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: inquiryTypes[0],
      message: '',
    });
  };

  return (
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
          <div className="contact-success-state" role="status" aria-live="polite">
            <div
              className="success-icon-wrap"
              style={{
                background: 'rgba(24, 200, 232, 0.12)',
                borderColor: 'rgba(24, 200, 232, 0.35)',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brand-blue, #087DB9)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            <span className="contact-badge" style={{ marginBottom: 0 }}>
              Action Required
            </span>

            <h3 className="heading-md" style={{ color: 'var(--heading-color)', margin: '4px 0' }}>
              Your Enquiry is Ready in Email
            </h3>

            <p className="body-muted" style={{ maxWidth: '480px', lineHeight: 1.6 }}>
              Your default email application should open automatically with your enquiry pre-formatted.
              <br />
              <br />
              <strong style={{ color: 'var(--text-primary)' }}>
                Please review your message in your email client and manually click &quot;Send&quot;
              </strong>{' '}
              to deliver it to{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                style={{ color: 'var(--brand-blue, #087DB9)', fontWeight: 600 }}
              >
                {contactInfo.email}
              </a>
              .
            </p>

            <div
              className="form-status-alert"
              style={{
                backgroundColor: '#F0F9FF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                textAlign: 'left',
                width: '100%',
                maxWidth: '520px',
                borderRadius: 'var(--radius-lg, 8px)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                <strong>Email application didn&apos;t open automatically?</strong>
                <br />
                Ensure your device has a default email client configured (such as Outlook, Apple Mail, or Thunderbird), or click below:
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              {mailtoLink && (
                <a
                  href={mailtoLink}
                  className="btn btn--primary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Open Email Client Again</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}

              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Edit Form Details
              </button>

              <button
                type="button"
                className="btn btn--secondary"
                onClick={resetForm}
              >
                New Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                <span>Preparing Email...</span>
              ) : (
                <>
                  <span>Submit Message</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}
