import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import earthPitImg from '../../assets/images/IES product.png';
import digitalIntelImg from '../../assets/images/digital-intelligence.jpg';
import docImg from '../../assets/images/digital-operation-center.jpg';
import './CoreTechnologyCards.css';

const technologyModules = [
  {
    id: 'earth-pit-monitoring',
    title: 'Earth Pit Monitoring System',
    description:
      'SOUKHYA developed the Intelligent Earth Pit Monitoring System (I-ES) to monitor and maintain the effectiveness of grounding (earthing) systems in electrical installations.',
    link: '/product',
    buttonText: 'Learn more',
    image: earthPitImg,
    imageAlt: 'Earth Pit Monitoring System showing precision electrical grounding and telemetry sensor unit',
    iconType: 'lightning',
  },
  {
    id: 'digital-intelligence',
    title: 'Digital Intelligence',
    description:
      'Simple connectivity to actionable intelligence enables organizations to enhance operational efficiency, improve safety, reduce downtime, and achieve measurable digital transformation.',
    link: '/services',
    buttonText: 'Learn more',
    image: digitalIntelImg,
    imageAlt: 'Digital Intelligence operational analytics interface showing real-time IoT telemetry',
    iconType: 'intel',
  },
  {
    id: 'digital-operation-center',
    title: 'DIGITAL OPERATION CENTER',
    description:
      'Integrated platform to source and manage hybrid infrastructure environment that helps to manage the public cloud.',
    link: '/services',
    buttonText: 'Learn more',
    image: docImg,
    imageAlt: 'Digital Operation Center enterprise hybrid infrastructure monitoring console',
    iconType: 'cloud',
  },
];

export default function CoreTechnologyCards() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="core-tech-section"
      aria-label="Core Technology Systems"
    >
      <div className="container core-tech-container">
        <div className="core-tech-grid">
          {technologyModules.map((item, index) => (
            <motion.article
              key={item.id}
              className="core-tech-card"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: reduceMotion ? 0 : 0.12 * index,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Top Accent Gradient Line */}
              <div className="core-tech-card__top-bar" aria-hidden="true" />

              {/* Large Visual Area */}
              <div className="core-tech-card__visual-wrap">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="core-tech-card__image"
                  loading="lazy"
                />
                <div className="core-tech-card__visual-overlay" aria-hidden="true" />
              </div>

              {/* Card Body */}
              <div className="core-tech-card__body">
                <div className="core-tech-card__header-row">
                  <div className="core-tech-card__icon-box" aria-hidden="true">
                    {item.iconType === 'lightning' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                    {item.iconType === 'intel' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    )}
                    {item.iconType === 'cloud' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    )}
                  </div>
                  <h3 className="core-tech-card__title">
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                </div>

                <p className="core-tech-card__description">
                  {item.description}
                </p>

                <div className="core-tech-card__footer">
                  <Link
                    to={item.link}
                    className="core-tech-card__cta-btn"
                    aria-label={`${item.buttonText} about ${item.title}`}
                  >
                    <span>{item.buttonText}</span>
                    <svg
                      className="core-tech-card__cta-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.333 8h9.334M8.667 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
