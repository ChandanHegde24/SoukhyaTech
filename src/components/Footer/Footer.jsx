import { Link } from 'react-router-dom';
import logoSrc from '../../assets/icons/logo@2x.png';
import { contactInfo, socialLinks } from '../../data/siteContent';
import './Footer.css';

const navGroups = [
  {
    label: 'Navigation',
    links: [
      { to: '/',          label: 'Home' },
      { to: '/services',  label: 'Services' },
      { to: '/solutions', label: 'Solutions' },
      { to: '/product',   label: 'Product' },
      { to: '/about',     label: 'About' },
      { to: '/contact',   label: 'Contact' },
    ],
  },
  {
    label: 'Services',
    links: [
      { to: '/services', label: 'IT Audit & Advisory' },
      { to: '/services', label: 'Managed Security Services' },
      { to: '/services', label: 'Managed Network Services' },
      { to: '/services', label: 'Managed Cloud Services' },
      { to: '/services', label: 'Remote Monitoring and Management' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { to: '/solutions', label: 'Custom IoT Solutions' },
      { to: '/solutions', label: 'Smart Systems' },
      { to: '/solutions', label: 'Data Center Solutions' },
      { to: '/product',   label: 'Earth-Pit Monitoring (I-ES)' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Subtle compact network line */}
      <div className="footer__network-line" aria-hidden="true">
        <div className="footer__network-pulse" />
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand & Contact summary */}
          <div className="footer__brand-col">
            <Link to="/" aria-label="Soukhya Tech — Home" className="footer__logo-link">
              <img src={logoSrc} alt="Soukhya Tech" className="footer__logo" width="130" height="36" />
            </Link>
            <p className="footer__tagline">
              Intelligent Earth-Pit Monitoring System (IES)
              <br />
              Securing Assets, Protecting People, Driving Efficiency...
            </p>
            
            <div className="footer__direct-channels">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="footer__channel-item">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6.5 2.5c-.8-1.2-2.3-1.5-3.3-.5L2 3.2C.8 4.4 1.2 7 3.6 9.4 6 11.8 8.6 12.2 9.8 11L11 9.8c1-.9.7-2.5-.5-3.3l-4-4Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="footer__channel-item">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="m1 5 7 4.5L15 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <span>{contactInfo.email}</span>
              </a>
            </div>

            <div className="footer__address-row">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 0 1 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              <span>{contactInfo.addressShort}</span>
            </div>
          </div>

          {/* Navigation link columns */}
          <div className="footer__nav-cols">
            {navGroups.map((group) => (
              <div key={group.label} className="footer__col">
                <h4 className="footer__col-heading">{group.label}</h4>
                <ul className="footer__col-links">
                  {group.links.map(({ to, label }) => (
                    <li key={label}>
                      <Link to={to} className="footer__link">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom legal & social bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copyright">
            &copy; 2026 Soukhya Tech. All Rights Reserved.
          </p>

          <div className="footer__social-group">
            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn footer__social-btn--linkedin"
              aria-label="Soukhya Tech on LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.85 18.5V10.13H5.06V18.5h2.79Z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn footer__social-btn--instagram"
              aria-label="Soukhya Tech on Instagram"
              title="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
