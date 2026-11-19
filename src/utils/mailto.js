import { contactInfo } from '../data/contact.js';

/**
 * Builds the formatted subject and body for a Soukhya Tech website inquiry.
 *
 * @param {Object} formData
 * @param {string} formData.name - Visitor full name
 * @param {string} formData.email - Visitor email address
 * @param {string} [formData.phone] - Visitor phone number
 * @param {string} [formData.company] - Visitor company name
 * @param {string} [formData.inquiryType] - Selected category / subject
 * @param {string} formData.message - Visitor message
 * @returns {{ subject: string, body: string }}
 */
export const formatEnquiryEmail = (formData) => {
  const trimmedName = (formData.name || '').trim();
  const trimmedEmail = (formData.email || '').trim();
  const trimmedPhone = (formData.phone || '').trim();
  const trimmedCompany = (formData.company || '').trim();
  const trimmedMessage = (formData.message || '').trim();
  const selectedSubject = (formData.inquiryType || '').trim() || 'General Enquiry';

  const nameDisplay = trimmedCompany ? `${trimmedName} (${trimmedCompany})` : trimmedName;

  const subject = `Website Enquiry – ${trimmedName}`;

  const bodyLines = [
    'Dear Soukhya Tech Team,',
    '',
    'A new enquiry has been submitted through your website.',
    '',
    'CONTACT DETAILS',
    '',
    `Name: ${nameDisplay}`,
    '',
    `Email: ${trimmedEmail}`,
    '',
    `Phone: ${trimmedPhone || 'Not provided'}`,
    '',
    `Subject: ${selectedSubject}`,
    '',
    'MESSAGE',
    '',
    trimmedMessage,
    '',
    'Regards,',
    trimmedName,
  ];

  return {
    subject,
    body: bodyLines.join('\r\n'),
  };
};

/**
 * Constructs a fully encoded, RFC 6068-compliant mailto: URL.
 *
 * @param {Object} formData - Form input values
 * @param {string} [recipient] - Target recipient email address
 * @returns {string} - Complete mailto: URL
 */
export const createMailtoUrl = (formData, recipient = contactInfo.email) => {
  const { subject, body } = formatEnquiryEmail(formData);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Safely dispatches a mailto: link using a temporary anchor element.
 * Does not navigate the current web page or unload client state.
 *
 * @param {string} url - mailto: URL string
 * @returns {boolean} - true if dispatch succeeded
 */
export const triggerMailto = (url) => {
  if (typeof window === 'undefined') return false;

  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_self';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      try {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      } catch (err) {
        // ignore cleanup error
      }
    }, 150);
    return true;
  } catch (error) {
    console.warn('Anchor dispatch failed, falling back to window.location.href:', error);
    window.location.href = url;
    return true;
  }
};
