import React from 'react';

/* ============================================================
   IT AUDIT & ADVISORY: AUDIT LIFECYCLE PROCESS ANIMATION
   Sequential 8-stage audit workflow (Information Gathering -> ... -> Remediation/Reporting)
   ============================================================ */
export default function AuditProcessAnimation() {
  return (
    <svg className="service-anim-svg audit-anim" viewBox="0 0 720 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="auditArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#087DB9" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#20A4D8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#25A449" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Stable Central Core Glow */}
      <circle cx="360" cy="230" r="44" className="audit-core-highlight" />

      {/* Circular Process Track & Sequential Traveling Highlight Arc */}
      <circle cx="360" cy="230" r="142" className="audit-track-base" />
      <circle cx="360" cy="230" r="142" className="audit-track-active" />

      {/* 8 Surrounding Audit Stage Node Highlights */}
      {/* 1. Information Gathering (Top) */}
      <g className="audit-stage stage-1" transform="translate(360, 88)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 2. Goal & Objectives (Top-Right) */}
      <g className="audit-stage stage-2" transform="translate(460, 130)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 3. Project Scoping (Right) */}
      <g className="audit-stage stage-3" transform="translate(502, 230)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 4. Vulnerability Detection (Bottom-Right) */}
      <g className="audit-stage stage-4" transform="translate(460, 330)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 5. Exploitation / Penetration (Bottom) */}
      <g className="audit-stage stage-5" transform="translate(360, 372)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 6. Analysis Assessment (Bottom-Left) */}
      <g className="audit-stage stage-6" transform="translate(260, 330)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 7. Policy & Governance (Left) */}
      <g className="audit-stage stage-7" transform="translate(218, 230)">
        <circle r="22" className="audit-stage-ring" />
      </g>
      {/* 8. Remediation / Reporting (Top-Left - Verified Green) */}
      <g className="audit-stage stage-8 stage--verified" transform="translate(260, 130)">
        <circle r="23" className="audit-stage-ring" />
      </g>
    </svg>
  );
}
