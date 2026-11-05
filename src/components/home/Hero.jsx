import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/images/Herovid.mp4';
import './Hero.css';

const signalRows = [['Earth pit resistance', '0.42 Ω', 'stable'], ['Last sync', '2 sec ago', 'live'], ['System health', '99.8%', 'healthy']];

export default function Hero() {
  return (
    <section className="hero-cinematic" aria-labelledby="hero-title">
      <div className="hero-cinematic__canvas" aria-hidden="true"><video className="hero-cinematic__video" autoPlay muted loop playsInline preload="metadata"><source src={heroVideo} type="video/mp4" /></video><div className="hero-cinematic__ambient" /><div className="hero-cinematic__light-overlay" /></div>
      <div className="container hero-cinematic__container">
        <div className="hero-cinematic__content"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <h1 id="hero-title" className="hero-cinematic__headline">
            <span>Build what’s next.</span><span className="hero-headline-line--accent">Connect everything.</span></h1>
          <p className="hero-cinematic__description">Soukhya Tech helps ambitious teams turn connected devices, cloud infrastructure and operational data into safer, smarter decisions.</p>
          <div className="hero-cinematic__actions"><Link to="/solutions" className="btn btn--primary hero-cinematic__btn-primary">Explore our solutions <span aria-hidden="true">→</span></Link><Link to="/contact" className="btn btn--secondary hero-cinematic__btn-secondary">Contact us</Link></div>
        </motion.div></div>
        {/* <motion.div className="hero-system-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25, duration: .7 }}>
          <div className="hero-system-card__header"><span><i className="status-pulse" /> I-ES / LIVE SYSTEM</span><span>Dashboard preview</span></div>
          <div className="hero-system-card__metric"><span>Asset intelligence</span><strong>Operational</strong></div>
          <div className="hero-system-card__chart"><div className="chart-grid" /><svg viewBox="0 0 430 150" preserveAspectRatio="none" aria-hidden="true"><path d="M0 118 C35 108 42 125 78 94 S126 106 160 78 S212 91 244 56 S290 67 323 44 S374 62 430 20" fill="none" stroke="#37C8F5" strokeWidth="3" /><path d="M0 118 C35 108 42 125 78 94 S126 106 160 78 S212 91 244 56 S290 67 323 44 S374 62 430 20 V150 H0Z" fill="url(#area)" opacity=".3" /><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#37C8F5"/><stop offset="1" stopColor="#37C8F5" stopOpacity="0"/></linearGradient></defs></svg></div>
          <div className="hero-system-card__rows">{signalRows.map(([label, value, status]) => <div className="hero-system-card__row" key={label}><span>{label}</span><strong>{value}</strong><em className={`signal-${status}`}>{status}</em></div>)}</div>
          <Link to="/product" className="hero-system-card__link">Explore I-ES product <span>↗</span></Link>
        </motion.div> */}
      </div><div className="hero-scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
    </section>
  );
}
