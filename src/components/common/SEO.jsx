import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactInfo, socialLinks } from '../../data/contact';

const SITE_URL = 'https://soukhyatech.com';
const SITE_NAME = 'Soukhya Tech';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const pageMetadata = {
  '/': {
    title: 'IoT, IIoT & Managed IT Solutions for Connected Industries',
    description:
      'Soukhya Tech delivers secure IoT and IIoT solutions, managed IT, cybersecurity, cloud, and digital operations services for connected industries.',
    type: 'WebSite',
  },
  '/services': {
    title: 'Managed IT, Cloud, Network & Cybersecurity Services',
    description:
      'Explore Soukhya Tech managed IT services, cybersecurity, cloud, network management, remote monitoring, and IT audit and advisory solutions.',
    type: 'Service',
  },
  '/solutions': {
    title: 'Custom IoT, Smart Systems & Data Center Solutions',
    description:
      'Build connected operations with Soukhya Tech custom IoT solutions, smart systems, data center solutions, edge computing, and decision intelligence.',
    type: 'Service',
  },
  '/product': {
    title: 'Intelligent Earth-Pit Monitoring System (I-ES)',
    description:
      'I-ES by Soukhya Tech is an intelligent earth-pit monitoring system that helps protect assets, improve electrical safety, and drive operational efficiency.',
    type: 'Product',
  },
  '/about': {
    title: 'About Soukhya Tech | Connected Intelligence',
    description:
      'Learn how Soukhya Tech combines devices, data, intelligence, and operations to create secure and measurable digital transformation.',
    type: 'AboutPage',
  },
  '/contact': {
    title: 'Contact Soukhya Tech | IoT & IT Experts in Bangalore',
    description:
      'Contact Soukhya Tech in Bangalore for custom IoT and IIoT engineering, managed IT, cybersecurity, cloud, network, and earth-pit monitoring solutions.',
    type: 'ContactPage',
  },
};

const setMetaTag = (attribute, value, content) => {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, value);
    tag.dataset.seo = 'true';
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setLinkTag = (rel, href) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    tag.dataset.seo = 'true';
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const keywords =
      'IoT solutions, IIoT, managed IT services, cybersecurity, cloud services, network services, earth-pit monitoring, Bangalore';

    document.title = `${metadata.title} | ${SITE_NAME}`;
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', `${metadata.title} | ${SITE_NAME}`);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:image', DEFAULT_IMAGE);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${metadata.title} | ${SITE_NAME}`);
    setMetaTag('name', 'twitter:description', metadata.description);
    setMetaTag('name', 'twitter:image', DEFAULT_IMAGE);
    setLinkTag('canonical', canonicalUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: DEFAULT_IMAGE,
          email: contactInfo.email,
          telephone: contactInfo.phone,
          sameAs: Object.values(socialLinks),
          address: {
            '@type': 'PostalAddress',
            streetAddress: contactInfo.companyLocation.street,
            addressLocality: 'Bangalore',
            postalCode: '560098',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': metadata.type,
          '@id': `${canonicalUrl}#page`,
          name: metadata.title,
          description: metadata.description,
          url: canonicalUrl,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
        },
      ],
    };

    let script = document.head.querySelector('script[data-seo="structured-data"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'structured-data';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}

export default SEO;
