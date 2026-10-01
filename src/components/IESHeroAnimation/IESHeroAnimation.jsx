import React, { useRef } from 'react';
import hero1Img from '../../assets/images/image2.png';
import './IESHeroAnimation.css';

/**
 * IESHeroAnimation
 * Industrial Intelligent Monitoring Visualization Component for Product Showcase.
 * Pure cinematic animation preserving original hardware visual without artificial/fake telemetry.
 */
export default function IESHeroAnimation({ className = '', isInteractive = true }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  // Subtle interactive parallax on mouse move
  const handleMouseMove = (e) => {
    if (!isInteractive || !containerRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 6, y: y * 4 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`ies-anim-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Intelligent Earth Pit Monitoring System (I-ES) Animated Industrial Visualization"
    >
      {/* 1. CINEMATIC CAMERA WRAPPER with smooth push-in & parallax drift */}
      <div
        className="ies-anim-camera"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {/* BASE VISUAL — EXACT hero 1.png PRESERVED */}
        <img
          src={hero1Img}
          alt="Intelligent Earth Pit Monitoring System (I-ES)"
          className="ies-base-img"
          loading="eager"
          decoding="async"
        />

        {/* 2. ATMOSPHERIC & LIGHTING LAYER */}
        <div className="ies-atmosphere" aria-hidden="true" />
        <div className="ies-subtle-scan" aria-hidden="true" />

        {/* 3. PRECISION SVG DATA STREAMS & GROUNDING PULSES */}
        <svg
          className="ies-svg-overlay"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="cyanStream" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#007CC4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2C3694" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="orangeStream" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E68324" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#FFA000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ED1C24" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="cloudUplink" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007CC4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── EARTH GROUNDING RIPPLE WAVES ── */}
          <ellipse
            cx="1100"
            cy="840"
            rx="280"
            ry="90"
            className="ies-ground-wave wave-1"
          />
          <ellipse
            cx="1100"
            cy="840"
            rx="210"
            ry="70"
            className="ies-ground-wave wave-2"
          />
          <ellipse
            cx="1100"
            cy="840"
            rx="140"
            ry="45"
            className="ies-ground-wave wave-3"
          />

          {/* ── VERTICAL GROUNDING ELECTRODE CURRENT LINE ── */}
          <line
            x1="1100"
            y1="960"
            x2="1100"
            y2="510"
            className="ies-electrode-beam"
          />

          {/* ── DATA STREAM PATHWAYS (Matching exact hero 1.png traces) ── */}
          {/* Path 1: I-ES -> Left Top Node */}
          <path
            id="pathResistance"
            d="M 1040 460 C 960 400, 890 320, 830 230"
            className="ies-stream-line ies-stream-resistance"
          />

          {/* Path 2: I-ES -> Left Mid Node */}
          <path
            id="pathVoltage"
            d="M 1040 500 C 940 480, 860 450, 780 430"
            className="ies-stream-line ies-stream-voltage"
          />

          {/* Path 3: I-ES -> Right Mid Node */}
          <path
            id="pathCurrent"
            d="M 1160 450 C 1220 380, 1270 310, 1315 235"
            className="ies-stream-line ies-stream-current"
          />

          {/* Path 4: I-ES -> Right Low Node */}
          <path
            id="pathFault"
            d="M 1160 500 C 1220 480, 1270 460, 1320 440"
            className="ies-stream-line ies-stream-fault"
          />

          {/* Path 5: I-ES -> Cloud & Analytics Uplink */}
          <path
            id="pathCloud"
            d="M 1140 330 C 1200 220, 1360 140, 1660 100"
            className="ies-stream-line ies-stream-cloud"
          />

          {/* ── ANIMATED DATA PACKETS (Travelling particles) ── */}
          {/* Earth Pit to I-ES upward packet */}
          <circle r="3.5" className="ies-data-packet packet-ground">
            <animateMotion
              path="M 1100 920 L 1100 480"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* I-ES to Cloud packet */}
          <circle r="3.5" className="ies-data-packet packet-cloud">
            <animateMotion
              path="M 1140 330 C 1200 220, 1360 140, 1660 100"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* I-ES to Left Node packet */}
          <circle r="3" className="ies-data-packet packet-resistance">
            <animateMotion
              path="M 1040 460 C 960 400, 890 320, 830 230"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* I-ES to Right Node packet */}
          <circle r="3" className="ies-data-packet packet-current">
            <animateMotion
              path="M 1160 450 C 1220 380, 1270 310, 1315 235"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* 4. I-ES DEVICE STATUS BEACON & PULSE */}
        <div className="ies-device-beacon" aria-hidden="true">
          <div className="beacon-ring" />
          <div className="beacon-core" />
        </div>
      </div>
    </div>
  );
}
