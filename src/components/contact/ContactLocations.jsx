import React from 'react';
import Reveal from '../common/Reveal';
import { contactInfo } from '../../data/contact';

export default function ContactLocations({ info = contactInfo }) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    info.addressShort
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <Reveal delay={0.2}>
      <div className="contact-info-card">
        <h3 className="contact-info-card__title">{info.companyLocation.title}</h3>
        <div className="contact-channel">
          <div className="channel-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <span className="channel-label">{info.companyLocation.area}</span>
            <p className="address-text">
              <span>Street: {info.companyLocation.street}</span>
              <span>City: {info.companyLocation.city}</span>
              <span>Country: {info.companyLocation.country}</span>
            </p>
          </div>
        </div>

        <div className="map-embed-wrapper">
          <iframe
            title="Soukhya Tech location"
            src={mapSrc}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Reveal>
  );
}
