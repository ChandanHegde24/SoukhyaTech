import React from 'react';
import { contactInfo } from '../../data/siteContent';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>Soukhya Tech</strong>
          <p>{contactInfo.addressShort}</p>
        </div>
        <div>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Soukhya Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
