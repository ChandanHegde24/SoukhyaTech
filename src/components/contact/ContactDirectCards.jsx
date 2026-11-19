import React from 'react';
import Reveal from '../common/Reveal';
import { contactInfo } from '../../data/contact';

export default function ContactDirectCards({ info = contactInfo }) {
  return (
    <Reveal delay={0.1}>
      <div className="contact-info-card">
        <h3 className="contact-info-card__title">Direct Contact Details</h3>

        <div className="contact-channel">
          <div className="channel-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div>
            <span className="channel-label">Phone</span>
            <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="channel-value">
              {info.phone}
            </a>
          </div>
        </div>

        <div className="contact-channel">
          <div className="channel-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <span className="channel-label">E-Mail</span>
            <a href={`mailto:${info.email}`} className="channel-value">
              {info.email}
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="contact-hours-block">
          <span className="channel-label">{info.workingHours.title}</span>
          <p className="body-muted contact-hours-sub">
            {info.workingHours.subtitle}
          </p>
          <ul className="hours-list">
            <li>{info.workingHours.schedule}</li>
            <li>{info.workingHours.saturday}</li>
            <li>{info.workingHours.sunday}</li>
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
