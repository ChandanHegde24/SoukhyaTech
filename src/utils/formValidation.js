/**
 * Contact Form Validation Utility
 * Validates name, business email, optional phone format, and message length.
 */
export const validateContactForm = (formData) => {
  const nextErrors = {};

  const trimmedName = (formData.name || '').trim();
  if (!trimmedName || trimmedName.length < 2) {
    nextErrors.name = 'Please provide your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = (formData.email || '').trim();
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    nextErrors.email = 'Please provide a valid business email address.';
  }

  const trimmedPhone = (formData.phone || '').trim();
  if (trimmedPhone && !/^[+0-9\s\-()]{7,20}$/.test(trimmedPhone)) {
    nextErrors.phone = 'Please provide a valid phone number (e.g. +91 97317 47999).';
  }

  const trimmedMessage = (formData.message || '').trim();
  if (!trimmedMessage || trimmedMessage.length < 10) {
    nextErrors.message = 'Please provide a brief message (minimum 10 characters).';
  }

  return nextErrors;
};
