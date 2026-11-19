import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Reveal from '../components/common/Reveal';
import './NotFound.css';

export default function NotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <div className="not-found-page" role="main">
      <div className="not-found-page__ambient" aria-hidden="true" />

      <div className="container not-found-page__container">
        <Reveal>
          <div className="not-found-page__badge">
            <span>HTTP 404 · Signal Not Found</span>
          </div>

          <div className="not-found-page__code" aria-hidden="true">
            404
          </div>

          <h1 className="not-found-page__heading">
            Page Not Found
          </h1>

          <p className="not-found-page__desc">
            The page or operational resource you requested does not exist or may have been relocated.
            Please return to our home page or explore our industrial IoT solutions.
          </p>

          <div className="not-found-page__actions">
            <Link to="/" className="btn btn--primary">
              Return to Homepage
            </Link>
            <Link to="/contact" className="btn btn--secondary">
              Contact Support
            </Link>
          </div>

          <div className="not-found-page__support">
            Need direct assistance? Speak with a Soukhya Tech specialist at{' '}
            <a href="tel:+919731747999">+91 97317 47999</a> or email{' '}
            <a href="mailto:sales@soukhyatech.com">sales@soukhyatech.com</a>.
          </div>
        </Reveal>
      </div>
    </div>
  );
}

