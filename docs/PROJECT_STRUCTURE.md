# Soukhya Tech — Project Architecture & Component Mapping

Welcome to the technical architecture guide for the **Soukhya Tech** web application. This document details the component architecture, data flow, shared design tokens, and best practices for safe modifications.

---

## 1. System Overview & Technology Stack

The Soukhya Tech web application is built with a high-performance modern frontend stack:

- **Core Framework**: React 18 (`react`, `react-dom`)
- **Build Tool**: Vite 7 (`@vitejs/plugin-react`)
- **Routing**: React Router DOM v6 (`BrowserRouter`, `Routes`, `Route`, `Navigate`)
- **Animation Engine**: Framer Motion (`framer-motion`) & GPU-accelerated CSS keyframe animations
- **Styling Architecture**: Vanilla CSS with CSS Custom Properties (Theme tokens in `src/styles/variables.css` and base resets in `src/styles/globals.css`)
- **Production Server**: Single Page Application (SPA) with rewrite rules in `.htaccess` (Apache) and `vercel.json` (Vercel)

---

## 2. Directory Structure & Responsibilities

```
SoukhyaTech/
├── .htaccess                      # Apache rewrite rules for HTML5 PushState routing
├── index.html                     # HTML5 entry with metadata, Open Graph & preconnects
├── package.json                   # Dependency definitions and scripts
├── vercel.json                    # Vercel deployment and SPA routing rewrite rules
├── vite.config.js                 # Vite bundler configuration
│
├── docs/                          # Developer documentation
│   └── PROJECT_STRUCTURE.md       # Detailed architectural reference (this file)
│
├── public/                        # Static assets served from root
│   ├── favicon.ico / favicon.png  # Site favicons
│   ├── og-image.png               # Social share preview image (1200x630)
│   ├── robots.txt                 # Search engine crawler directives
│   └── sitemap.xml                # XML sitemap for SEO indexation
│
└── src/
    ├── main.jsx                   # Application bootstrapping and React 18 createRoot
    ├── App.jsx                    # Root component mounting AppRoutes and global providers
    │
    ├── assets/                    # Bundled binary assets
    │   ├── icons/                 # High-resolution logos and icons
    │   └── images/                # Hardware renders, hero visuals, and background assets
    │
    ├── components/                # Modular UI components
    │   ├── about/                 # Section components for About page
    │   ├── common/                # Reusable design system primitives (Buttons, Heading, SEO)
    │   ├── contact/               # Section components for Contact page & form
    │   ├── home/                  # Section components for Home page
    │   ├── layout/                # Shell components (Navbar, Footer)
    │   ├── product/               # Section components for Product (I-ES) page
    │   ├── services/              # Section components for Services page & animations
    │   └── solutions/             # Section components for Solutions page & animations
    │
    ├── config/                    # Application configuration shims
    │   ├── contact.js             # Re-exports contact settings from src/data/contact
    │   └── navigation.js          # Re-exports navigation links from src/data/navigation
    │
    ├── data/                      # Centralized data modules (Single Source of Truth)
    │   ├── about.js               # About page copy, DNA lifecycle steps, purpose statements
    │   ├── contact.js             # Direct contact channels, addresses, and inquiry categories
    │   ├── home.js                # Hero copy, offerings, mastery cards, core strengths
    │   ├── navigation.js          # Main header links, footer links, legal links
    │   ├── product.js             # Flagship product specs, benefit metrics, intelligence flow
    │   ├── services.js            # Managed services, process steps, core strengths
    │   ├── siteContent.js         # Aggregator re-exporting all data modules
    │   ├── solutionCatalog.js     # Solutions re-export shim
    │   └── solutions.js           # Industry solutions, lifecycle steps, engineering journey
    │
    ├── hooks/                     # Custom React hooks
    │   └── useDocumentTitle.js    # Synchronous layout hook for dynamic browser tab titles
    │
    ├── layouts/                   # Shared page wrappers
    │   └── MainLayout.jsx         # Global shell with Navbar, Footer, ScrollProgress, Ripple
    │
    ├── pages/                     # Declarative page compositions (30-40 lines each)
    │   ├── About.jsx & .css       # /about route container
    │   ├── Contact.jsx & .css     # /contact route container
    │   ├── Home.jsx & .css        # / route container
    │   ├── NotFound.jsx & .css    # 404 fallback container
    │   ├── Product.jsx & .css     # /product route container
    │   ├── Services.jsx & .css    # /services route container
    │   └── Solutions.jsx & .css   # /solutions route container
    │
    ├── routes/                    # Declarative routing
    │   ├── AppRoutes.jsx          # Route switcher and browser router setup
    │   └── routeDefinitions.jsx   # Route path definitions array with SEO titles
    │
    ├── styles/                    # Global styling system
    │   ├── globals.css            # Base element resets, typography, container utilities
    │   └── variables.css          # Design tokens (colors, gradients, typography, shadows)
    │
    └── utils/                     # Pure utility functions
        ├── formValidation.js      # Contact form client-side validation logic
        └── mailto.js              # RFC 6068 mailto URI generator and dispatcher
```

---

## 3. Data Flow Architecture

The codebase enforces strict separation of concerns:
```
[src/data/*.js]                <- Single Source of Truth for all text, metrics & lists
      │
      ▼
[src/components/<domain>/]     <- Modular UI components consuming data via props or imports
      │
      ▼
[src/pages/<Page>.jsx]         <- Declarative page orchestrators combining sections + SEO
      │
      ▼
[src/layouts/MainLayout.jsx]   <- Global layout wrapper (Navbar, Footer, Scroll-to-Top)
      │
      ▼
[src/routes/AppRoutes.jsx]     <- Client-side routing engine
```

### Benefits of this Architecture:
1. **Zero Markup Bloat**: Copywriters or designers can change any text, headline, or metric in `src/data/` without touching JSX.
2. **Encapsulated Scope**: Component CSS styles are co-located or isolated in page-specific style sheets, avoiding global cascade bleed.
3. **High Cohesion**: Each section (e.g., `AboutHero`, `ServicesChapters`, `SolutionsLifecycle`) owns its layout, responsive behavior, and accessibility attributes.

---

## 4. Component Hierarchy by Page

### 1. Home Page (`/`)
- `MainLayout`:
  - `SEO` (Page title, meta tags, schema)
  - `Hero`: Video background, headline, CTA triggers
  - `ConnectedIntelligence`: Two-column value proposition with media frame
  - `CoreTechnologyCards`: 3-card grid (Sensors, Edge Processing, Cloud/AI)
  - `TechnicalMastery`: Engineering capabilities overview with visual asset
  - `EnterpriseSolutions`: 4 enterprise pillars with feature lists
  - `OurStrengths`: 4 differentiator cards with stat badges
  - `CTA`: Universal bottom call-to-action banner

### 2. Services Page (`/services`)
- `MainLayout`:
  - `SEO`: Managed services metadata
  - `Breadcrumb`: `Home / Services`
  - `ServicesHero`: Section badge, title, subtitle
  - `ServicesChapters`: Alternating presentation of all 5 managed services
    - `ServiceChapterCard`: Individual service layout
    - `ServiceVisual`: Responsive image + interactive micro-animation overlay:
      - `AuditProcessAnimation`
      - `SecurityScanAnimation`
      - `NetworkSignalAnimation`
      - `CloudOrchestrationAnimation`
      - `RemoteMonitoringAnimation`
  - `ServicesJourney`: 5-step Continuous Operational Lifecycle pipeline
  - `CTA`: Consultation booking banner

### 3. Solutions Page (`/solutions`)
- `MainLayout`:
  - `SEO`: Industry solutions metadata
  - `Breadcrumb`: `Home / Solutions`
  - `SolutionsHero`: Section badge, title, subtitle
  - `SolutionsChapters`: Alternating presentation of all 3 enterprise solutions:
    - `SolutionChapterCard`: Solution title, description, architecture chips
    - `SolutionVisual`: High-resolution imagery with lazy loading and badge overlays
  - `SolutionsLifecycle`: 5-stage Engineering Lifecycle flow
  - `CTA`: Solution inquiry banner

### 4. About Page (`/about`)
- `MainLayout`:
  - `SEO`: About Soukhya Tech metadata
  - `Breadcrumb`: `Home / About`
  - `AboutHero`: Two-column layout with animated orbital logo
  - `AboutOverview`: Strategic overview column paired with:
    - `EngineeringDnaVisual`: 4-stage continuous loop diagram (Assess -> Architect -> Integrate -> Optimize)
  - `AboutPurpose`: Mission & Vision dual cards with milestone checklists
  - `CTA`: Partnership banner

### 5. Product Page (`/product`)
- `MainLayout`:
  - `SEO`: Flagship I-ES product metadata
  - `Breadcrumb`: `Home / Product`
  - `ProductHero`: High-impact two-line heading and device specifications
  - `ProductShowcase`: Deep-dive device breakdown, sensor telemetry, and hardware renders
  - `IntelligenceFlow`: Step-by-step data journey from physical earth pit to enterprise dashboard
  - `CTA`: Device pilot request banner

### 6. Contact Page (`/contact`)
- `MainLayout`:
  - `SEO`: Contact and inquiry metadata
  - `Breadcrumb`: `Home / Contact`
  - `ContactHero`: Inquiry badge, headline, and SLA promise
  - `ContactDirectCards`: Quick-connect cards (Direct Telephone, Email, Operating Schedule)
  - `ContactLocations`: Physical office address, GPS coordinates, interactive Google Maps iframe
  - `ContactForm`: Enterprise inquiry form featuring:
    - Category pills selector (General, Managed Services, IoT, Enterprise)
    - Client-side validation powered by `src/utils/formValidation.js`
    - Submitting spinner and persistent confirmation state
  - `CTA`: Alternative phone consultation banner

---

## 5. Design Tokens & Styling Architecture

Global styles and design tokens are defined in `src/styles/variables.css`:

### Primary Palette
- `--primary-blue`: `#173B8F` (Deep Enterprise Navy)
- `--technology-blue`: `#087DB9` (Primary Brand Blue)
- `--cyan`: `#20A4D8` (Bright Tech Accent)
- `--green`: `#25A449` (IoT Telemetry / Health Green)

### Neutral & Surface Hierarchy
- `--white`: `#FFFFFF`
- `--light-blue`: `#F4F8FC` (Section background alternate)
- `--very-light-blue`: `#EAF4FB` (Pill & card background)
- `--heading`: `#14213D` (Primary typography heading color)
- `--body-text`: `#53657D` (Body copy color)
- `--muted-text`: `#7B8798` (Captions, footnotes, labels)
- `--border`: `#D9E5F0` (Card and divider borders)

### Midnight Aurora Accent Tokens
Used in interactive diagrams (`EngineeringDnaVisual`, `IntelligenceFlow`):
- `--aurora-mint`: `#19B879`
- `--aurora-cyan`: `#18C8E8`
- `--aurora-blue`: `#3563FF`
- `--aurora-amber`: `#E68324`

---

## 6. Developer Guide for Safe Modifications

Follow these guidelines when editing or adding features to prevent regressions:

### 1. Updating Text or Metrics
- **Never edit text directly inside component JSX** unless it is a localized layout string.
- Find the relevant file in `src/data/`:
  - Navigation links: `src/data/navigation.js`
  - Home sections: `src/data/home.js`
  - Services: `src/data/services.js`
  - Solutions: `src/data/solutions.js`
  - About copy: `src/data/about.js`
  - Product specs: `src/data/product.js`
  - Contact information: `src/data/contact.js`
- Edit the object property and save. Hot Module Replacement (HMR) will update the browser immediately.

### 2. Adding a New Section to an Existing Page
1. Create your component in `src/components/<page>/<NewSection>.jsx`.
2. Add any corresponding static copy to `src/data/<page>.js`.
3. Import the new component in `src/pages/<Page>.jsx` and place it in the JSX hierarchy.
4. Run `npm run build` to verify there are no missing imports or syntax errors.

### 3. Adding a New Route/Page
1. Create `src/pages/NewPage.jsx` and `src/pages/NewPage.css`.
2. Wrap the content with `<MainLayout>` and include the `<SEO>` component.
3. Register the new route in `src/routes/routeDefinitions.jsx`.
4. If it should appear in the navigation menu, add it to `primaryNav` in `src/data/navigation.js`.
5. Update `public/sitemap.xml` with the new URL for search engines.

### 4. Running Verification Checks
Before committing any changes:
```bash
# Verify production compilation
npm run build

# Preview production build locally
npm run preview
```
Ensure that `dist/index.html` builds without errors or missing chunk warnings.
