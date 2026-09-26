import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { productContent } from '../../data/siteContent';
import IESHeroAnimation from '../IESHeroAnimation/IESHeroAnimation';
import Breadcrumb from '../shared/Breadcrumb/Breadcrumb';
import './ProductShowcase.css';

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="product-showcase section section--product" ref={ref} aria-labelledby="product-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="product-showcase__ambient-glow" aria-hidden="true" />

      <div className="container product-showcase__inner">
        {/* Left: Product Information & Locked Content */}
        <div className="product-showcase__copy">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="product-showcase__breadcrumbs"
          >
            <Breadcrumb currentPage="Product" />
          </motion.div>

          <motion.div
            className="product-showcase__eyebrow"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="product-showcase__eyebrow-dot" />
            <span className="product-showcase__eyebrow-line" />
            <span>FLAGSHIP PRODUCT · I-ES</span>
          </motion.div>

          <motion.h1
            id="product-title"
            className="heading-display product-showcase__title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Intelligent Earth Pit&nbsp;
            <span className="text-brand-blue">Monitoring System (I-ES)</span>
          </motion.h1>

          <motion.p
            className="product-showcase__desc body-large"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.6 }}
          >
            {productContent.description}
          </motion.p>

          {/* Benefits Sequence Block */}
          <motion.div
            className="product-showcase__benefits-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.6 }}
          >
            <div className="product-showcase__benefits-header">
              <span className="benefits-header__badge">CORE ADVANTAGES</span>
              <p className="product-showcase__benefits-intro">
                <strong>{productContent.benefitsIntro}</strong>
              </p>
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

        {/* Right: Device & Telemetry Visualization with Cinematic Industrial Animation */}
        <motion.div
          className="product-showcase__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="product-showcase__visual-frame">
            <IESHeroAnimation isInteractive={true} />
            <div className="product-showcase__visual-footer">
              <span className="visual-footer__title">I-ES HARDWARE ARCHITECTURE</span>
              <span className="visual-footer__status">
                <span className="status-dot" /> LIVE TELEMETRY
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
