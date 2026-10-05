import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const defaultTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

/** Standard viewport reveal for editorial page sections. */
export default function Reveal({ children, delay = 0, className = '', style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
