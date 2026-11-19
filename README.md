# Soukhya Tech — Modern Enterprise IoT & IT Infrastructure Website

Official production web application for **Soukhya Tech**, specializing in integrated IoT platforms, IIoT telemetry, managed security, cloud infrastructure, and intelligent grounding monitoring (I-ES).

---

## 🚀 Key Highlights & Architectural Strengths

- **⚡ Blazing Fast Build & Load**: Powered by Vite 7 and React 18, bundling optimized production assets in under 5 seconds.
- **🧱 Clean Modular Architecture**: Fully decoupled domain structure. Pages are lightweight declarative orchestrators (~30 lines), delegating layout to isolated section components.
- **📄 Centralized Data Modules**: 100% of website copy, specifications, feature lists, and contact data are centralized in `src/data/`. Content can be edited without touching React markup.
- **🎨 Design System & Theme Tokens**: Comprehensive CSS variable architecture in `src/styles/variables.css` featuring deep enterprise navies, IoT telemetry greens, and Midnight Aurora accents.
- **📱 Responsive & Accessible**: Optimized across mobile (390px), tablet (768px), and ultra-wide desktop (1440px+) viewports with zero horizontal overflow.
- **🔍 Production SEO Ready**: Open Graph social previews (`og-image.png`), JSON-LD structured data, dynamic document titles, canonical URLs, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Technology Stack

| Technology | Role | Version |
| :--- | :--- | :--- |
| **React** | Component UI library & runtime | `^18.2.0` |
| **Vite** | Next-generation build tool & dev server | `^7.3.6` |
| **React Router DOM** | Client-side declarative routing (SPA) | `^6.22.0` |
| **Framer Motion** | Physics-based animations & transitions | `^13.4.4` |
| **Vanilla CSS** | Scoped component styling & global theme tokens | Native CSS3 |

---

## 📂 Directory Structure

```
SoukhyaTech/
├── .htaccess                      # Apache rewrite rules for HTML5 SPA routing
├── index.html                     # HTML5 entry with metadata, Open Graph & preconnects
├── package.json                   # Dependency definitions and scripts
├── vercel.json                    # Vercel deployment configuration
├── vite.config.js                 # Vite bundler configuration
│
├── docs/                          # In-depth architectural guides
│   └── PROJECT_STRUCTURE.md       # Full architecture & component hierarchy
│
├── public/                        # Static assets served from root
│   ├── favicon.ico / favicon.png  # Site favicons
│   ├── og-image.png               # Social share preview image (1200x630)
│   ├── robots.txt                 # Search engine crawler directives
│   └── sitemap.xml                # XML sitemap for SEO indexation
│
└── src/
    ├── main.jsx                   # React 18 entry point & bootstrapping
    ├── App.jsx                    # Root component with routing and providers
    │
    ├── assets/                    # Bundled binary assets
    │   ├── icons/                 # High-resolution logos and icons
    │   └── images/                # Hardware renders, hero visuals, backgrounds
    │
    ├── components/                # Modular UI components by domain
    │   ├── about/                 # Section components for About page
    │   │   ├── AboutHero.jsx              # Hero with orbital animated logo
    │   │   ├── AboutOverview.jsx          # Strategic overview column
    │   │   ├── AboutPurpose.jsx           # Mission & Vision dual cards
    │   │   └── EngineeringDnaVisual.jsx   # 4-stage interactive continuous loop
    │   ├── common/                # Reusable design system primitives
    │   │   ├── Breadcrumb.jsx             # Navigational breadcrumbs
    │   │   ├── ClickRipple.jsx            # Interactive click ripple effect
    │   │   ├── CTA.jsx                    # Universal call-to-action banner
    │   │   ├── GlobalScrollProgress.jsx   # Top reading progress indicator
    │   │   ├── PrimaryButton.jsx          # Reusable brand button
    │   │   ├── SecondaryButton.jsx        # Reusable outline button
    │   │   ├── SectionHeading.jsx         # Section title/badge wrapper
    │   │   ├── SEO.jsx                    # Head title/meta tag manager
    │   │   ├── ScrollToTop.jsx            # Floating scroll-to-top button
    │   │   └── SocialIcons.jsx            # SVG social media links
    │   ├── contact/               # Section components for Contact page
    │   │   ├── ContactDirectCards.jsx     # Direct phone, email, and hours
    │   │   ├── ContactForm.jsx            # Enterprise inquiry form
    │   │   ├── ContactHero.jsx            # Hero section with SLA badge
    │   │   └── ContactLocations.jsx       # Physical office & Google Maps
    │   ├── home/                  # Section components for Home page
    │   │   ├── ConnectedIntelligence.jsx  # Value proposition & media frame
    │   │   ├── CoreTechnologyCards.jsx    # 3-pillar technology cards
    │   │   ├── EnterpriseSolutions.jsx    # Enterprise solutions showcase
    │   │   ├── Hero.jsx                   # Video background hero
    │   │   ├── OurStrengths.jsx           # Core strengths & metrics
    │   │   └── TechnicalMastery.jsx       # Technical mastery overview
    │   ├── layout/                # Application shell components
    │   │   ├── Footer.jsx                 # Global site footer
    │   │   └── Navbar.jsx                 # Fixed glassmorphism navigation header
    │   ├── product/               # Section components for Flagship I-ES
    │   │   ├── IESHeroAnimation.jsx       # Interactive product telemetry canvas
    │   │   ├── IntelligenceFlow.jsx       # Telemetry to dashboard flow
    │   │   ├── ProductHero.jsx            # High-impact two-line heading hero
    │   │   └── ProductShowcase.jsx        # Product specifications & features
    │   ├── services/              # Section components for Services page
    │   │   ├── AuditProcessAnimation.jsx          # IT audit micro-animation
    │   │   ├── CloudOrchestrationAnimation.jsx    # Cloud micro-animation
    │   │   ├── NetworkSignalAnimation.jsx         # Network signal animation
    │   │   ├── RemoteMonitoringAnimation.jsx      # Monitoring micro-animation
    │   │   ├── SecurityScanAnimation.jsx          # Security scanner animation
    │   │   ├── ServiceChapterCard.jsx             # Service chapter layout
    │   │   ├── ServicesChapters.jsx               # Orchestrator for all 5 services
    │   │   ├── ServicesHero.jsx                   # Hero section
    │   │   ├── ServicesJourney.jsx                # 5-stage operational lifecycle
    │   │   └── ServiceVisual.jsx                  # Visual frame with overlay
    │   └── solutions/             # Section components for Solutions page
    │       ├── SolutionChapterCard.jsx            # Solution chapter layout
    │       ├── SolutionsChapters.jsx              # Orchestrator for all 3 solutions
    │       ├── SolutionsHero.jsx                  # Hero section
    │       ├── SolutionsLifecycle.jsx             # 5-stage engineering lifecycle
    │       └── SolutionVisual.jsx                 # Visual frame with badge
    │
    ├── config/                    # Configuration re-export shims
    │   ├── contact.js             # Re-exports contact settings
    │   └── navigation.js          # Re-exports navigation settings
    │
    ├── data/                      # Centralized data modules (Single Source of Truth)
    │   ├── about.js               # About page copy, DNA steps, mission/vision
    │   ├── contact.js             # Contact info, addresses, inquiry types
    │   ├── home.js                # Hero copy, offerings, mastery cards
    │   ├── navigation.js          # Main header links, footer links, legal
    │   ├── product.js             # Flagship I-ES specs, metrics, intelligence flow
    │   ├── services.js            # Managed services, process steps, strengths
    │   ├── siteContent.js         # Aggregator re-exporting all data modules
    │   ├── solutionCatalog.js     # Solutions re-export shim
    │   └── solutions.js           # Industry solutions, lifecycle steps
    │
    ├── layouts/                   # Global layout wrappers
    │   └── MainLayout.jsx         # Shell mounting Navbar, Footer, Scroll-to-top
    │
    ├── pages/                     # Clean declarative page components
    │   ├── About.jsx & .css       # /about
    │   ├── Contact.jsx & .css     # /contact
    │   ├── Home.jsx & .css        # /
    │   ├── NotFound.jsx & .css    # 404 Catch-all
    │   ├── Product.jsx & .css     # /product
    │   ├── Services.jsx & .css    # /services
    │   └── Solutions.jsx & .css   # /solutions
    │
    ├── routes/                    # Declarative client-side routing
    │   ├── AppRoutes.jsx          # Router provider and route switcher
    │   └── routeDefinitions.jsx   # Route path definitions with SEO titles
    │
    ├── styles/                    # Global CSS token system
    │   ├── globals.css            # Base element resets, typography, containers
    │   └── variables.css          # Design tokens (colors, gradients, shadows)
    │
    └── utils/                     # Pure utility functions
        └── formValidation.js      # Contact form validation logic
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/soukhyatech/website.git
cd website
npm install
```

### Local Development

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

Compile the application into static production assets in the `dist/` directory:

```bash
npm run build
```

### Local Production Preview

Preview the compiled production bundle locally:

```bash
npm run preview
```

---

## 📝 Content Editing Guide ("Where Do I Edit X?")

All website copy is decoupled from the user interface markup. Edit the respective data file in `src/data/` to make updates:

| Content Element | File to Edit | Key Objects / Arrays |
| :--- | :--- | :--- |
| **Navigation Menu & Links** | `src/data/navigation.js` | `primaryNav`, `footerServices`, `footerSolutions` |
| **Home Page Hero & Offerings** | `src/data/home.js` | `heroContent`, `offeringCards`, `technicalMastery` |
| **Managed Services & Journey** | `src/data/services.js` | `managedServices`, `processSteps`, `coreStrengths` |
| **Industry Solutions & Lifecycle** | `src/data/solutions.js` | `solutionShowcase`, `lifecycleSteps`, `solutionCategories` |
| **About Company, DNA & Purpose** | `src/data/about.js` | `aboutContent`, `engineeringDnaSteps`, `purposeData` |
| **Product Specifications & Telemetry** | `src/data/product.js` | `productData`, `intelligenceFlowStages`, `keyBenefits` |
| **Direct Contact Info, Phone, Email** | `src/data/contact.js` | `contactInfo`, `inquiryTypes`, `officeLocations` |

---

## ➕ How to Add a New Page or Section

### Adding a New Section to an Existing Page
1. **Define Data**: Add your content array or object to `src/data/<page>.js`.
2. **Create Component**: Create `src/components/<page>/<NewSection>.jsx`.
3. **Mount in Page**: Import and place `<NewSection />` inside `src/pages/<Page>.jsx`.
4. **Style**: Add styles directly in `src/pages/<Page>.css` or co-locate a component CSS file.
5. **Verify**: Run `npm run build` to verify clean compilation.

### Adding a Completely New Page / Route
1. **Create Page Component**: Create `src/pages/MyNewPage.jsx` and `src/pages/MyNewPage.css`:
   ```jsx
   import React from 'react';
   import MainLayout from '../layouts/MainLayout';
   import SEO from '../components/common/SEO';
   import './MyNewPage.css';

   export default function MyNewPage() {
     return (
       <MainLayout>
         <SEO title="Page Title | Soukhya Tech" description="Page description..." />
         <main className="new-page-container">
           {/* Section components */}
         </main>
       </MainLayout>
     );
   }
   ```
2. **Register Route**: Add the path, title, and component to `src/routes/routeDefinitions.jsx`.
3. **Add Navigation (Optional)**: If the page should appear in the header menu, add an entry to `primaryNav` in `src/data/navigation.js`.
4. **Update SEO**: Add the metadata to `pageMetadata` in `src/components/common/SEO.jsx` and URL to `public/sitemap.xml`.

### Dynamic Browser Titles

Every page dynamically sets its browser tab title via synchronous layout effects:
- Standard format: `<Page Title> | Soukhya Tech`
- Custom Hook: `import useDocumentTitle from '../hooks/useDocumentTitle';` -> `useDocumentTitle('New Page');`
- Centralized Metadata: Defined in `src/components/common/SEO.jsx` (`pageMetadata`) and `src/routes/routeDefinitions.jsx`.
- Inline Instant Hydration: Handled in `index.html` `<head>` for instant display before JS bundles execute.

---

## 🎨 Styling System & Theme Tokens

The application uses native CSS custom properties defined in `src/styles/variables.css`:

```css
:root {
  /* Brand Palettes */
  --primary-blue: #173B8F;       /* Deep Enterprise Navy */
  --technology-blue: #087DB9;    /* Primary Brand Blue */
  --cyan: #20A4D8;               /* Bright Cyan Accent */
  --green: #25A449;              /* IoT Telemetry Green */

  /* Neutral Surfaces */
  --white: #FFFFFF;
  --light-blue: #F4F8FC;         /* Alternate section background */
  --very-light-blue: #EAF4FB;    /* Card & badge background */
  --heading: #14213D;            /* Primary typography */
  --body-text: #53657D;          /* Paragraph body copy */
  --muted-text: #7B8798;         /* Subtitles & metadata */
  --border: #D9E5F0;             /* Border separators */

  /* Midnight Aurora Accents (Data & Visualizations) */
  --aurora-mint: #19B879;
  --aurora-cyan: #18C8E8;
  --aurora-blue: #3563FF;
  --aurora-amber: #E68324;
}
```

---

## 🔒 Form Validation & Direct Mailto Submission

The contact form operates completely client-side via the standard RFC 6068 `mailto:` protocol—without any backend, API, database, SMTP server, or third-party email services.

### Form Validation (`src/utils/formValidation.js`)
```javascript
import { validateContactForm } from '../utils/formValidation';

const errors = validateContactForm(formData);
```
- **Validation Rules**:
  - Full Name: Required, minimum 2 characters.
  - Business Email: Required, validated against RFC 5322 regex.
  - Category: Required inquiry category selection.
  - Message: Required, minimum 10 characters.
  - Optional Phone: Verified for valid telephone format if entered.

### Direct Mailto Integration (`src/utils/mailto.js`)
When submitted with valid inputs:
1. Formats email subject: `Website Enquiry – [Visitor Name]`
2. Formats email body with structured sections (`Dear Soukhya Tech Team,`, `CONTACT DETAILS`, `MESSAGE`, `Regards,`)
3. Encodes parameters using `encodeURIComponent()` and dispatches `mailto:sales@soukhyatech.com`
4. Automatically opens visitor's default email client
5. Renders a transparent "Your Enquiry is Ready in Email" screen with instructions to review and click **Send**.
  - Message: Required, minimum 10 characters.
  - Optional Phone: Verified for valid telephone format if entered.

---

## 🌐 Deployment Configuration

The application compiles to a static Single Page Application (SPA). To support client-side routing on production web servers:

### Apache / cPanel / GoDaddy Shared Hosting
The project includes `.htaccess` in the root and bundles all build assets into `dist.zip`:
1. Upload `dist.zip` to your GoDaddy cPanel File Manager in the `public_html/` root directory.
2. Extract `dist.zip` directly into `public_html/`.
3. Verify the root contains `index.html`, `.htaccess`, `favicon.ico`, `favicon.svg`, `favicon-96x96.png`, and `apple-touch-icon.png`.

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Favicon & Google Search Optimization
The application uses the official Soukhya Tech brand mark across all favicon formats:
- `/favicon.svg`: Scalable vector icon for modern desktop browsers.
- `/favicon-96x96.png`: High-DPI icon optimized for Google Search results (multiple of 48px).
- `/favicon.ico`: Multi-size binary (16x16, 32x32, 48x48) for legacy browsers and direct `/favicon.ico` crawlers.
- `/apple-touch-icon.png`: 180x180 square icon with white background for iOS Safari home screens.
- `robots.txt`: Explicitly permits crawling of all site assets.

### Vercel
The project includes `vercel.json` configured for SPA rewrites:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 📄 License & Proprietary Rights

Copyright © 2026 Soukhya Tech. All rights reserved. Proprietary software and content.
