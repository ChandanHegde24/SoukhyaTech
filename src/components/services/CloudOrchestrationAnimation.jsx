import React from 'react';

/* ============================================================
   MANAGED CLOUD SERVICES: CLOUD ORCHESTRATION ANIMATION
   Sequential resource orchestration from central cloud outward
   ============================================================ */
export default function CloudOrchestrationAnimation() {
  return (
    <svg className="service-anim-svg cloud-anim" viewBox="0 0 720 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* Central Cloud Soft Breathing Aura */}
      <ellipse cx="360" cy="225" rx="55" ry="36" className="cloud-core-aura" />

      {/* Connection Vectors from Central Cloud */}
      <path d="M 330,200 L 210,120" className="cloud-vector vec-public" />
      <path d="M 390,200 L 510,120" className="cloud-vector vec-private" />
      <path d="M 360,190 L 360,95" className="cloud-vector vec-hybrid" />
      <path d="M 400,240 L 520,315" className="cloud-vector vec-infra" />
      <path d="M 360,260 L 360,365" className="cloud-vector vec-backup" />
      <path d="M 320,240 L 200,315" className="cloud-vector vec-sec cloud-vec--secure" />

      {/* Orchestrated Service Node Highlights */}
      {/* Public Cloud */}
      <g className="cloud-node-hl node-pub" transform="translate(210, 120)">
        <circle r="22" className="cloud-node-glow" />
      </g>
      {/* Private Cloud */}
      <g className="cloud-node-hl node-priv" transform="translate(510, 120)">
        <circle r="22" className="cloud-node-glow" />
      </g>
      {/* Security & Compliance (Green Active Confirmation) */}
      <g className="cloud-node-hl node-sec node--secure" transform="translate(200, 315)">
        <circle r="24" className="cloud-node-glow" />
      </g>
      {/* Infrastructure & Apps */}
      <g className="cloud-node-hl node-infra" transform="translate(520, 315)">
        <circle r="22" className="cloud-node-glow" />
      </g>
      {/* Backup & Recovery */}
      <g className="cloud-node-hl node-bak" transform="translate(360, 365)">
        <circle r="22" className="cloud-node-glow" />
      </g>
    </svg>
  );
}
