import React from 'react';
import Reveal from './Reveal';

/**
 * Reusable SectionHeading component
 * Standardizes section headers across Home, Services, Solutions, About, Product, Contact
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleId,
}) {
  const isCenter = align === 'center';

  return (
    <Reveal className={`section-header-block ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 id={titleId} className="heading-xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`body-muted ${isCenter ? 'mx-auto max-w-xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
