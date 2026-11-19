import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactInfo, socialLinks } from '../../data/contact';
import { formatDocumentTitle, BRAND_NAME } from '../../hooks/useDocumentTitle';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const SITE_URL = 'https://soukhyatech.com';
const SITE_NAME = BRAND_NAME; // "Soukhya Tech"
const LOGO_URL = `${SITE_URL}/logo.png`;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export const pageMetadata = {
  '/': {
    pageTitle: 'Home',
    description:
      'Soukhya Tech delivers secure IoT and IIoT solutions, managed IT, cybersecurity, cloud, and digital operations services for connected industries.',
    type: 'WebSite',
  },
  '/services': {
    pageTitle: 'Services',
    description:
      'Explore Soukhya Tech managed IT services, cybersecurity, cloud, network management, remote monitoring, and IT audit and advisory solutions.',
    type: 'Service',
  },
  '/solutions': {
    pageTitle: 'Solutions',
    description:
      'Build connected operations with Soukhya Tech custom IoT solutions, smart systems, data center solutions, edge computing, and decision intelligence.',
    type: 'Service',
  },
  '/product': {
    pageTitle: 'Product',
    description:
      'I-ES by Soukhya Tech is an intelligent earth-pit monitoring system that helps protect assets, improve electrical safety, and drive operational efficiency.',
    type: 'Product',
  },
  '/about': {
    pageTitle: 'About',
    description:
      'Learn how Soukhya Tech combines devices, data, intelligence, and operations to create secure and measurable digital transformation.',
    type: 'AboutPage',
  },
  '/contact': {
    pageTitle: 'Contact',
    description:
      'Contact Soukhya Tech in Bangalore for custom IoT and IIoT engineering, managed IT, cybersecurity, cloud, network, and earth-pit monitoring solutions.',
    type: 'ContactPage',
  },
};

const defaultFallbackMetadata = {
  pageTitle: 'Page Not Found',
  description: 'The requested resource could not be found on Soukhya Tech.',
  type: 'WebPage',
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

function SEO({ title, description }) {
  const { pathname } = useLocation();

  useIsomorphicLayoutEffect(() => {
    // Normalize path by stripping trailing slash (e.g. '/about/' -> '/about')
    const normalizedPath =
      pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    const metadata = pageMetadata[normalizedPath] || defaultFallbackMetadata;
    const finalPageTitle = title || metadata.pageTitle;
    const fullDocumentTitle = formatDocumentTitle(finalPageTitle);
    const finalDescription = description || metadata.description;
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
    const keywords =
      'IoT solutions, IIoT, managed IT services, cybersecurity, cloud services, network services, earth-pit monitoring, Bangalore';

    // Synchronously update browser tab title
    document.title = fullDocumentTitle;

    // Primary Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow');

    // Open Graph Metadata
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', fullDocumentTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:image', DEFAULT_IMAGE);
    setMetaTag('property', 'og:image:secure_url', DEFAULT_IMAGE);
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', `${SITE_NAME} Logo`);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', fullDocumentTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', DEFAULT_IMAGE);
    setMetaTag('name', 'twitter:image:alt', `${SITE_NAME} Logo`);

    // Canonical & Alternate Links
    setLinkTag('canonical', canonicalUrl);
    setLinkTag('image_src', DEFAULT_IMAGE);

    // JSON-LD Structured Data Graph
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: LOGO_URL,
          image: DEFAULT_IMAGE,
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
          name: fullDocumentTitle,
          description: finalDescription,
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
  }, [pathname, title, description]);

  return null;
}

export default SEO;
