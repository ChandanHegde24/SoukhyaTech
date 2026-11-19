import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const BRAND_NAME = 'Soukhya Tech';

/**
 * Formats a given page title with the standardized brand suffix: "<title> | Soukhya Tech".
 * If already formatted or empty, handles gracefully.
 *
 * @param {string} title - The title prefix, e.g. "Home", "Services", "About"
 * @returns {string} Fully qualified browser title, e.g. "Home | Soukhya Tech"
 */
export const formatDocumentTitle = (title) => {
  if (!title) return BRAND_NAME;
  const trimmed = title.trim();
  if (trimmed.endsWith(`| ${BRAND_NAME}`) || trimmed === BRAND_NAME) {
    return trimmed;
  }
  return `${trimmed} | ${BRAND_NAME}`;
};

/**
 * Custom hook to dynamically update document.title synchronously before paint.
 * Ensures instant browser tab title updates without showing previous titles during navigation.
 *
 * @param {string} title - Page title prefix or full title
 */
export function useDocumentTitle(title) {
  useIsomorphicLayoutEffect(() => {
    if (title) {
      document.title = formatDocumentTitle(title);
    }
  }, [title]);
}

export default useDocumentTitle;
