import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable SecondaryButton component
 * Adheres strictly to the unified Enterprise Button Design System
 */
export default function SecondaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const content = <span>{children}</span>;
  const combinedClass = `btn btn--secondary ${className}`.trim();

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
