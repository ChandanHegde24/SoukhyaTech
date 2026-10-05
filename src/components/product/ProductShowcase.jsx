import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productContent } from '../../data/product';
import iesProductImage from '../../assets/images/IES product.png';
import iesBenefitsImage from '../../assets/images/IES benifit.png';
import './ProductShowcase.css';

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="product-showcase section section--bg" ref={ref} aria-labelledby="product-showcase-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="product-showcase__ambient-glow" aria-hidden="true" />

      <div className="container product-showcase__inner">
        {/* Large Chapter Watermark Number */}
        <div className="product-showcase__watermark" aria-hidden="true">
          01
        </div>

        <div className="product-showcase__product-row">
          <motion.div
            className="product-showcase__image product-showcase__image--product"
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={iesProductImage}
              alt="I-ES earth-pit monitoring device with live resistance, current, and voltage readings"
              loading="lazy"
            />
          </motion.div>

          <div className="product-showcase__copy">
          <motion.h2
            id="product-showcase-title"
            className="heading-xl product-showcase__title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Intelligent Earth Pit&nbsp;
            <span className="text-brand-blue">Monitoring System (I-ES)</span>
          </motion.h2>

          <motion.p
            className="product-showcase__desc body-large"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.6 }}
          >
            {productContent.description}
          </motion.p>
          </div>
        </div>

        <div className="product-showcase__benefits-row">
          <motion.div
            className="product-showcase__image product-showcase__image--benefits"
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.24, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={iesBenefitsImage}
              alt="I-ES mobile app screens for earth-pit monitoring, active pits, and alarms"
              loading="lazy"
            />
          </motion.div>

          <div className="product-showcase__benefits-copy">
          <motion.div
            className="product-showcase__benefits-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.6 }}
          >
            <div className="product-showcase__benefits-header">
              <h3 className="product-showcase__benefits-intro">
                <strong>{productContent.benefitsIntro}</strong>
              </h3>
            </div>

            <ul className="product-showcase__benefits" aria-label="I-ES product benefits">
              {productContent.benefits.map((b, i) => (
                <motion.li
                  key={i}
                  className="product-showcase__benefit-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.38 + i * 0.05, duration: 0.5 }}
                >
                  <div className="product-showcase__check-wrap">
                    <span className="product-showcase__benefit-num">0{i + 1}</span>
                  </div>
                  <span className="product-showcase__benefit-text">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            className="product-showcase__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Link to="/contact" className="btn btn--primary">
              <span>Know More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn--secondary">
              <span>Contact Us</span>
            </Link>
          </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
