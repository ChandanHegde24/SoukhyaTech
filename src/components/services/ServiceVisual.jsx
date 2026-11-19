import React from 'react';
import AuditProcessAnimation from './AuditProcessAnimation';
import SecurityScanAnimation from './SecurityScanAnimation';
import NetworkSignalAnimation from './NetworkSignalAnimation';
import CloudOrchestrationAnimation from './CloudOrchestrationAnimation';
import RemoteMonitoringAnimation from './RemoteMonitoringAnimation';

export default function ServiceVisual({ service, index }) {
  return (
    <div className={`service-visual-wrapper service-visual--${service.id}`}>
      <div className="service-visual-frame">
        <div className="service-visual-media">
          <img
            src={service.image}
            alt={service.title}
            className="service-visual-img"
            loading="lazy"
            width="720"
            height="460"
          />

          {/* Exact Functional Micro-Animation Overlays Directly Mapped to Infographic Content */}
          <div className="service-anim-container" aria-hidden="true">
            {service.id === 'it-audit' && <AuditProcessAnimation />}
            {service.id === 'managed-security' && <SecurityScanAnimation />}
            {service.id === 'managed-network' && <NetworkSignalAnimation />}
            {service.id === 'managed-cloud' && <CloudOrchestrationAnimation />}
            {service.id === 'remote-monitoring' && <RemoteMonitoringAnimation />}
          </div>
        </div>
      </div>
    </div>
  );
}
