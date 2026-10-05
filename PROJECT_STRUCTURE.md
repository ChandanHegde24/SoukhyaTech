# Soukhya Tech — Project Architecture & Mapping

This document maps out every page view, component composition, data source, visual assets, and animation modules across the Soukhya Tech codebase.

---

## 1. Global Layout & Theme System

- **Layout Shell**: `src/layouts/MainLayout.jsx`
  - Navigation: `src/components/layout/Navbar.jsx` (`Navbar.css`)
  - Footer: `src/components/layout/Footer.jsx` (`Footer.css`)
  - Interactive Ripple: `src/components/common/ClickRipple.jsx`
- **Global Theme Tokens**: `src/styles/variables.css`
  - `--primary-blue`: `#173B8F` (Deep Tech Navy)
  - `--technology-blue`: `#087DB9` (Primary Brand Blue)
  - `--cyan`: `#20A4D8` (Bright Cyan Accent)
  - `--green`: `#25A449` (Vibrant IoT Green)
  - `--white`: `#FFFFFF`
  - `--light-blue`: `#F4F8FC`
  - `--very-light-blue`: `#EAF4FB`
  - `--heading`: `#14213D`
  - `--body-text`: `#53657D`
  - `--muted-text`: `#7B8798`
  - `--border`: `#D9E5F0`
- **Global Styling**: `src/styles/globals.css`
- **Routing Configuration**: `src/routes/AppRoutes.jsx`

---

## 2. Page Mapping

### Home Page (`/`)
- **Page Component**: `src/pages/Home.jsx`
- **Subcomponents**:
  - `Hero`: `src/components/home/Hero.jsx` (Animation: `Hero.css` grid & particle field)
  - `ConnectedIntelligence`: `src/components/home/ConnectedIntelligence.jsx`
  - `CoreTechnologyCards`: `src/components/home/CoreTechnologyCards.jsx`
  - `TechnicalMastery`: `src/components/home/TechnicalMastery.jsx`
  - `EnterpriseSolutions`: `src/components/home/EnterpriseSolutions.jsx`
  - `OurStrengths`: `src/components/home/OurStrengths.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/home.js`
- **Assets**:
  - `src/assets/images/image.png` (Technical mastery background visual)
  - `src/assets/images/image2.png` (Connected intelligence background visual)
  - `src/assets/images/IES product.png` (Flagship I-ES hardware render)

---

### Services Page (`/services`)
- **Page Component**: `src/pages/Services.jsx`
- **Subcomponents**:
  - `Breadcrumb`: `src/components/common/Breadcrumb.jsx`
  - `Reveal`: `src/components/common/Reveal.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Animation Modules**:
  - `ManagedSecurityAnimation`: `src/components/services/SecurityScanAnimation.jsx`
  - `ManagedNetworkAnimation`: `src/components/services/NetworkSignalAnimation.jsx`
  - `ManagedCloudAnimation`: `src/components/services/CloudOrchestrationAnimation.jsx`
  - `ITAuditAnimation`: `src/components/services/AuditProcessAnimation.jsx`
  - `RemoteMonitoringAnimation`: `src/components/services/RemoteMonitoringAnimation.jsx`
- **Data Source**: `src/data/services.js` (`servicesData`, `coreStrengths`)
- **Assets**:
  - `src/assets/images/Managed Security Services.png`
  - `src/assets/images/Managed Network Services.png`
  - `src/assets/images/Managed Cloud Services.png`
  - `src/assets/images/IT Audit _ Advisory.png`
  - `src/assets/images/Remote Monitoring and Management.png`

---

### Solutions Page (`/solutions`)
- **Page Component**: `src/pages/Solutions.jsx`
- **Subcomponents**:
  - `Breadcrumb`: `src/components/common/Breadcrumb.jsx`
  - `Reveal`: `src/components/common/Reveal.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/solutions.js` (`solutionShowcase`, `solutionCategories`)
- **Assets**:
  - `src/assets/images/Custom IoT Solutions for Connected Industries.png`
  - `src/assets/images/Smart Systems.png`
  - `src/assets/images/Data Center Solutions.png`

---

### Product Page (`/product`)
- **Page Component**: `src/pages/Product.jsx`
- **Subcomponents**:
  - `Breadcrumb`: `src/components/common/Breadcrumb.jsx`
  - `ProductShowcase`: `src/components/product/ProductShowcase.jsx`
  - `IntelligenceFlow`: `src/components/product/IntelligenceFlow.jsx`
  - `IESHeroAnimation`: `src/components/product/IESHeroAnimation.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/product.js`
- **Assets**:
  - `src/assets/images/IES product.png`
  - `src/assets/images/IES benifit.png`
  - `src/assets/images/earth-pit-monitoring.jpg`
  - `src/assets/images/digital-intelligence.jpg`
  - `src/assets/images/digital-operation-center.jpg`

---

### About Page (`/about`)
- **Page Component**: `src/pages/About.jsx`
- **Subcomponents**:
  - `Breadcrumb`: `src/components/common/Breadcrumb.jsx`
  - `EngineeringDnaVisual`: Embedded interactive loop
  - `Reveal`: `src/components/common/Reveal.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/about.js` (`aboutContent`)

---

### Contact Page (`/contact`)
- **Page Component**: `src/pages/Contact.jsx`
- **Subcomponents**:
  - `Breadcrumb`: `src/components/common/Breadcrumb.jsx`
  - `Reveal`: `src/components/common/Reveal.jsx`
- **Data Source**: `src/data/contact.js` (`contactInfo`, `inquiryTypes`)
