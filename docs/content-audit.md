# Content and architecture audit

Reviewed 9 October 2026 before rebuilding.

## Existing portfolio

React 19 / Vite, JavaScript, Tailwind 4, React Router for one route, react-icons and unused transition dependency. The old site included theme persistence, responsive navigation, direct social contact links, a Google Docs CV and ten equally weighted projects. There was no contact form/backend to preserve. The email URL was malformed. Loading was artificially delayed 700ms. SEO was limited to title and favicon. Project data had duplicate IDs; work history was separately hardcoded.

The rendered Experience component was the authority for work history. The old data file's SP Tech dates (January-June 2025) conflicted with the actual rendered June-August 2025 internship. The rebuilt site preserves the rendered roles/dates, company names and education, without adding metrics or seniority.

## Verified repositories

- Parvis: local `../parvis/learn-front`, `learn-backend`, `learn-admin`. Read manifests, learner pages, billing and certificate services, AI usage records, and model/service organization. React / TanStack Query, Express / Mongoose, Gemini, Paystack, Cloudinary and PDFKit. Billing verifies amounts/currency/reference and webhook signatures. Learner/admin frontends are separate.
- Papertrail: local website/backend/admin. Read manifests, coordinate transformer, PDF exporter, OCR entry point, document service and R2 storage implementation. TypeScript, React, PDF.js, pdf-lib, MuPDF, Zustand, TanStack Query, NestJS, MongoDB and Cloudflare R2. `recognizePage()` currently returns an empty array: OCR is explicitly NOT claimed as delivered. Installed Tesseract does not alone prove working OCR. Source PDF limitations are mentioned in the case study.
- Nexus web: GitHub `social-frontend-` manifest confirms Next.js, TypeScript, TanStack Query and Zustand.
- Nexus mobile: GitHub `social-mobile` manifest, source tree, `authStorage.ts`, `useMessages.ts` and `pushNotificationService.ts`. Verified Expo / React Native, native navigation, SecureStore, chat/voice components and push registration. No app-store release or production mobile adoption is claimed.
- Existing supporting projects: reviewed every old data entry and asset; fetched public package manifests for LogiXpress, CryptoNova, Fintech, Crypgo, Dashboard and YouthVenture. Selected the first three as supporting source-linked projects. The others do not add enough breadth to warrant equal prominence.
- LearnHub shares `learn-front` with Parvis and is superseded by that flagship entry. Zyntek's old frontend repository returned 404. Weather has no package manifest (consistent with the original vanilla JS description). Both are omitted from the new showcase rather than promoted using uncertain claims.

## Live and contact checks

Inspected Parvis and Papertrail in the browser. Parvis screenshot comes from the existing user-supplied asset; Papertrail screenshot is a fresh public landing-page capture. Both are optimized WebP. Nexus retains the existing screenshot; its image is labeled as web UI, never passed off as a native-app screenshot.

GitHub's public repository metadata identifies `https://ogunsolafaruk.vercel.app/` as this portfolio's homepage. Canonical, sitemap, social image URLs and schema use it.

The original Google Docs PDF endpoint returned HTTP 401 for an anonymous request. A local CV is generated from the same factual content data. The original URL remains in `profile.originalCvUrl` for the owner's editing reference. No external contact form or email service has been invented: `mailto:` and copy-address provide direct contact.

## Intentional architecture

- TypeScript content in `src/content/portfolio.ts`; shared rendering primitives and focused section components.
- Native anchor navigation and details/summary disclosures avoid unnecessary routing/modal state.
- Native smooth scrolling, bounded CSS entrances, one IntersectionObserver and one frame-throttled passive scroll listener. Reduced-motion preference disables animation and smooth scroll. No motion library or perpetual animation.
- Local Latin variable fonts, WebP media, explicit image dimensions and lazy loading. No runtime third-party font requests.
- Light/dark CSS tokens; stored preference is guarded for storage failures.
- Pre-rendered build HTML exposes actual content before JavaScript. Standard static Vite hosting remains supported.
- No deployment or remote repository changes were made.
