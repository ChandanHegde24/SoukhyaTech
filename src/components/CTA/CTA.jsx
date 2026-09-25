import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './CTA.css';

export default function CTA({
  eyebrow = 'Get Started',
  heading = 'Ready to connect your operations?',
  subheading,
  description = 'Talk to a Soukhya Tech expert and discover how connected intelligence can transform your infrastructure.',
  primaryAction,
  secondaryAction,
  primaryLabel = 'Talk to an Expert',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Solutions',
  secondaryTo = '/solutions',
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  const pLabel = primaryAction?.label || primaryLabel;
  const pTo    = primaryAction?.to || primaryTo;
  const sLabel = secondaryAction?.label || secondaryLabel;
  const sTo    = secondaryAction?.to || secondaryTo;
  const desc   = subheading || description;

  return (
    <section className="cta-section section--cta" ref={ref} aria-labelledby="cta-title">
      {/* Decorative Network Ambient Lines */}
      <div className="cta-section__network-bg" aria-hidden="true" />

      <div className="container cta-section__inner">
        <div className="cta-section__header-group">
          <motion.div
            className="cta-section__eyebrow"
            initial={{ opacity: 0, y: -6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2
            id="cta-title"
            className="cta-section__heading"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {heading}
          </motion.h2>

          <motion.p
            className="cta-section__desc"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16, duration: 0.5 }}
          >
            {desc}
          </motion.p>
        </div>

        <motion.div
          className="cta-section__actions-group"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.24, duration: 0.5 }}
        >
          <div className="cta-section__btn-row">
            <Link to={pTo} className="btn cta-btn-primary">
              <span>{pLabel}</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {sLabel && (
              <Link to={sTo} className="btn cta-btn-secondary">
                <span>{sLabel}</span>
              </Link>
            )}
          </div>

          <div className="cta-section__contact-inline">
            <a href="tel:+919731747999" className="cta-section__contact-item">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6.5 2.5c-.8-1.2-2.3-1.5-3.3-.5L2 3.2C.8 4.4 1.2 7 3.6 9.4 6 11.8 8.6 12.2 9.8 11L11 9.8c1-.9.7-2.5-.5-3.3l-4-4Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>+91 97317 47999</span>
            </a>
            <span className="cta-section__contact-divider" aria-hidden="true">·</span>
            <a href="mailto:sales@soukhyatech.com" className="cta-section__contact-item">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                <path d="m1 5 7 4.5L15 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span>sales@soukhyatech.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
