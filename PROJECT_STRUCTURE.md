# Soukhya Tech — Project Architecture & Mapping

> **Note**: For the comprehensive architectural reference, component breakdown, and developer maintenance guide, see [docs/PROJECT_STRUCTURE.md](file:///C:/Users/hegde/Desktop/SoukhyaTech/docs/PROJECT_STRUCTURE.md).

This document outlines the high-level component composition, data sources, visual assets, and animation modules across the Soukhya Tech codebase.

---

## 1. Global Layout & Theme System

- **Layout Shell**: `src/layouts/MainLayout.jsx`
  - Navigation: `src/components/layout/Navbar.jsx` (`Navbar.css`)
  - Footer: `src/components/layout/Footer.jsx` (`Footer.css`)
  - Interactive Ripple: `src/components/common/ClickRipple.jsx`
  - Scroll Progress Bar: `src/components/common/GlobalScrollProgress.jsx`
  - Scroll to Top: `src/components/common/ScrollToTop.jsx`
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
- **Routing Configuration**: `src/routes/AppRoutes.jsx` & `src/routes/routeDefinitions.jsx`

---

## 2. Page & Component Mapping

### Home Page (`/`)
- **Page Container**: `src/pages/Home.jsx`
- **Section Components**:
  - `Hero`: `src/components/home/Hero.jsx` (Background video & animated text)
  - `ConnectedIntelligence`: `src/components/home/ConnectedIntelligence.jsx`
  - `CoreTechnologyCards`: `src/components/home/CoreTechnologyCards.jsx`
  - `TechnicalMastery`: `src/components/home/TechnicalMastery.jsx`
  - `EnterpriseSolutions`: `src/components/home/EnterpriseSolutions.jsx`
  - `OurStrengths`: `src/components/home/OurStrengths.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/home.js`

---

### Services Page (`/services`)
- **Page Container**: `src/pages/Services.jsx` (Streamlined orchestrator)
- **Section Components**:
  - `ServicesHero`: `src/components/services/ServicesHero.jsx`
  - `ServicesChapters`: `src/components/services/ServicesChapters.jsx`
    - `ServiceChapterCard`: `src/components/services/ServiceChapterCard.jsx`
    - `ServiceVisual`: `src/components/services/ServiceVisual.jsx`
  - `ServicesJourney`: `src/components/services/ServicesJourney.jsx` (Continuous Operational Lifecycle)
  - `CTA`: `src/components/common/CTA.jsx`
- **Animation Modules**:
  - `AuditProcessAnimation`: `src/components/services/AuditProcessAnimation.jsx`
  - `SecurityScanAnimation`: `src/components/services/SecurityScanAnimation.jsx`
  - `NetworkSignalAnimation`: `src/components/services/NetworkSignalAnimation.jsx`
  - `CloudOrchestrationAnimation`: `src/components/services/CloudOrchestrationAnimation.jsx`
  - `RemoteMonitoringAnimation`: `src/components/services/RemoteMonitoringAnimation.jsx`
- **Data Source**: `src/data/services.js` (`managedServices`, `processSteps`, `coreStrengths`)

---

### Solutions Page (`/solutions`)
- **Page Container**: `src/pages/Solutions.jsx` (Streamlined orchestrator)
- **Section Components**:
  - `SolutionsHero`: `src/components/solutions/SolutionsHero.jsx`
  - `SolutionsChapters`: `src/components/solutions/SolutionsChapters.jsx`
    - `SolutionChapterCard`: `src/components/solutions/SolutionChapterCard.jsx`
    - `SolutionVisual`: `src/components/solutions/SolutionVisual.jsx`
  - `SolutionsLifecycle`: `src/components/solutions/SolutionsLifecycle.jsx` (Engineering Lifecycle flow)
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/solutions.js` (`solutionShowcase`, `lifecycleSteps`, `solutionCategories`)

---

### About Page (`/about`)
- **Page Container**: `src/pages/About.jsx` (Streamlined orchestrator)
- **Section Components**:
  - `AboutHero`: `src/components/about/AboutHero.jsx` (Two-column layout with orbital logo)
  - `AboutOverview`: `src/components/about/AboutOverview.jsx`
    - `EngineeringDnaVisual`: `src/components/about/EngineeringDnaVisual.jsx` (Interactive 4-stage loop)
  - `AboutPurpose`: `src/components/about/AboutPurpose.jsx` (Mission & Vision cards)
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/about.js` (`aboutContent`, `engineeringDnaSteps`)

---

### Product Page (`/product`)
- **Page Container**: `src/pages/Product.jsx` (Streamlined orchestrator)
- **Section Components**:
  - `ProductHero`: `src/components/product/ProductHero.jsx`
  - `ProductShowcase`: `src/components/product/ProductShowcase.jsx`
  - `IntelligenceFlow`: `src/components/product/IntelligenceFlow.jsx`
  - `IESHeroAnimation`: `src/components/product/IESHeroAnimation.jsx`
  - `CTA`: `src/components/common/CTA.jsx`
- **Data Source**: `src/data/product.js` (`productData`, `intelligenceFlowStages`)

---

### Contact Page (`/contact`)
- **Page Container**: `src/pages/Contact.jsx` (Streamlined orchestrator)
- **Section Components**:
  - `ContactHero`: `src/components/contact/ContactHero.jsx`
  - `ContactDirectCards`: `src/components/contact/ContactDirectCards.jsx`
  - `ContactLocations`: `src/components/contact/ContactLocations.jsx`
  - `ContactForm`: `src/components/contact/ContactForm.jsx`
- **Validation Utility**: `src/utils/formValidation.js`
- **Data Source**: `src/data/contact.js` (`contactInfo`, `inquiryTypes`)

---

## 3. Reusable UI Primitives (`src/components/common/`)

- `SectionHeading.jsx`: Consistent badge, heading, and description typography wrapper
- `PrimaryButton.jsx`: Solid tech-blue button with hover glow and ripple compatibility
- `SecondaryButton.jsx`: Ghost/outline button with smooth border transitions
- `SocialIcons.jsx`: SVG social network icons (LinkedIn, Twitter/X, GitHub, Instagram)
- `Breadcrumb.jsx`: Route navigation breadcrumbs with schema support
- `Reveal.jsx`: Scroll-triggered viewport animations
- `SEO.jsx`: Comprehensive React Helmet alternative injecting titles, meta, and JSON-LD schema
