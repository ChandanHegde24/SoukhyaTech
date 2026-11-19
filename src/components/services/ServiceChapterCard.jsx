import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';
import ServiceVisual from './ServiceVisual';

export default function ServiceChapterCard({ service, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      id={`service-${service.id}`}
      className={`service-chapter ${isReversed ? 'service-chapter--reversed' : ''} ${
        index % 2 === 0 ? 'section--white' : 'section--bg'
      }`}
    >
      <div className="container service-chapter__container">
        <div className="service-chapter__grid">
          {/* Text Column */}
          <div className="service-chapter__text-col">
            <Reveal>
              <h2 className="heading-xl service-chapter__title">
                {service.title}
              </h2>

              <div className="service-chapter__paragraphs">
                {service.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="body-large service-chapter__text">
                    {p}
                  </p>
                ))}
              </div>

              {/* Remote Monitoring & Management Bullet Functions */}
              {service.functions && (
                <div className="rmm-functions-block">
                  <p className="rmm-functions-intro">
                    <strong>{service.functionsIntro}</strong>
                  </p>
                  <ul className="rmm-functions-list">
                    {service.functions.map((func, fIdx) => (
                      <li key={fIdx} className="rmm-function-item">
                        <span className="rmm-function-check">✓</span>
                        <span>{func}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.concludingParagraph && (
                <p className="body-large service-chapter__text">
                  {service.concludingParagraph}
                </p>
              )}

              <div className="service-chapter__action">
                <Link to="/contact" className="btn btn--primary">
                  <span>Consult on {service.title}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Visual / Architecture Column */}
          <div className="service-chapter__visual-col">
            <Reveal delay={0.12}>
              <ServiceVisual service={service} index={index} />
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
