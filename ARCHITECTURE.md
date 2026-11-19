# Soukhya Tech — Clean Architecture Code Guide

This guide provides immediate instructions for developers and maintainers working with the Soukhya Tech website.

---

## Architecture Principles

1. **Declarative Page Orchestrators**:
   Pages in `src/pages/` are lightweight orchestrators (~30-40 lines) responsible solely for composing section components and injecting SEO metadata.
2. **Domain-Isolated Components**:
   Components specific to a route live in `src/components/<domain>/` (e.g., `src/components/about/`, `src/components/services/`, etc.).
3. **Decoupled Data Modules**:
   Static content, product specifications, navigation links, and copy reside in `src/data/`. JSX files should never hardcode large text blocks or business lists.
4. **Reusable UI Primitives**:
   Shared design system primitives (buttons, typography wrappers, social links, breadcrumbs, animations) reside in `src/components/common/`.

---

## Where to Make Changes

| Task | File(s) to Modify |
| :--- | :--- |
| **Change Header/Footer Links** | `src/data/navigation.js` |
| **Edit Home Page Content** | `src/data/home.js` |
| **Edit Services Copy & Stages** | `src/data/services.js` |
| **Edit Solutions Copy & Lifecycle** | `src/data/solutions.js` |
| **Edit About Page DNA & Mission/Vision** | `src/data/about.js` |
| **Edit Flagship Product (I-ES) Specs** | `src/data/product.js` |
| **Update Contact Info & Form Categories**| `src/data/contact.js` |
| **Form Validation Rules** | `src/utils/formValidation.js` |
| **Add/Modify Global Colors & Theme Tokens**| `src/styles/variables.css` |
| **Add New Route/Page** | `src/routes/routeDefinitions.jsx` & `src/pages/` |

---

## Verification & Build

Always run a build check after editing files:
```bash
npm run build
```
Vite will validate all imports, assets, and React dependencies.
