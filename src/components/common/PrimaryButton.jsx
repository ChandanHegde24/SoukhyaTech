import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable PrimaryButton component
 * Adheres strictly to the unified Enterprise Button Design System
 */
export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon = true,
  ...rest
}) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  const combinedClass = `btn btn--primary ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...rest}
    >
      {content}
    </button>
  );
}
