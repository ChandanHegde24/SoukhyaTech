import { useEffect, useRef, useState } from 'react';
import './ClickRipple.css';

const rippleDuration = 720;

export default function ClickRipple() {
  const [ripples, setRipples] = useState([]);
  const nextId = useRef(0);
  const timers = useRef(new Set());

  useEffect(() => {
    const addRipple = (event) => {
      if (!event.isPrimary) return;

      const id = nextId.current;
      nextId.current += 1;
      setRipples((current) => [...current.slice(-5), { id, x: event.clientX, y: event.clientY }]);

      const timer = window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
        timers.current.delete(timer);
      }, rippleDuration);
      timers.current.add(timer);
    };

    window.addEventListener('pointerdown', addRipple, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', addRipple);
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current.clear();
    };
  }, []);

  return (
    <div className="click-ripple-layer" aria-hidden="true">
      {ripples.map(({ id, x, y }) => (
        <span
          key={id}
          className="click-ripple"
          style={{ left: x, top: y }}
        />
      ))}
    </div>
  );
}
