import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const defaultTransition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Premium viewport scroll reveal with fail-safe visibility
 * and reduced-motion support.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.55,
  y = 20,
  className = '',
  style,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-6% 0px' });
  const shouldReduceMotion = useReducedMotion();
  const [fallbackVisible, setFallbackVisible] = useState(false);

  // Fail-safe guarantee: Content will NEVER remain hidden if IntersectionObserver fails or stalls
  useEffect(() => {
    const timer = setTimeout(() => {
      setFallbackVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = shouldReduceMotion || inView || fallbackVisible;

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        ease: defaultTransition.ease,
        delay: fallbackVisible && !inView ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
