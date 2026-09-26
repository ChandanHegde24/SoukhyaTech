# Soukhya Tech code guide

## Where to make changes

- `src/pages/`: page composition and page-only behavior.
- `src/components/`: reusable visual sections. `shared/` contains building blocks used by multiple pages.
- `src/data/siteContent.js`: business copy, product information, and content lists.
- `src/config/`: application settings that affect multiple areas, including navigation and contact form options.
- `src/routes/routeDefinitions.jsx`: every route and its page component.
- `src/styles/`: global tokens and shared utility styles. Component and page styles stay beside their JSX files.

## Common edits

- Add or rename a primary navigation item in `src/config/navigation.js`.
- Add a route in `src/routes/routeDefinitions.jsx`, then add its navigation item only when it should be visible in the menu.
- Update business contact details in `src/data/siteContent.js`.
- Update Contact form categories in `src/config/contact.js`.
- Use `components/shared/Reveal` and `components/shared/Breadcrumb` instead of creating page-local copies.

## Validation

Run `npm run build` after code changes. Vite reports unresolved imports and production build issues.
