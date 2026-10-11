# Validation · 9 October 2026

## Passed

- `npm run build`: strict TypeScript check, Vite production bundle, static HTML prerender.
- `npm run lint` and `npm run check-content`.
- `git diff --check`.
- Dependency audit after compatible updates: zero reported vulnerabilities.
- Browser layouts at 320, 390, 768 and 1440 CSS pixels. A 320px minimum-body-width scrollbar overflow was found and fixed; document width then matched client width.
- Light/dark theme toggle and persisted theme after reload.
- Mobile menu opens/closes; Escape closes it and returns focus to the toggle.
- Native case-study and archive disclosure interaction, including Enter key activation.
- Contact copy feedback shows success; direct `mailto:` contains the preserved address.
- One H1; all local anchor targets resolve; descriptive alt text; no broken loaded images.
- Production preview loads with no observed console warnings/errors.
- Reduced-motion media rule is present in the production stylesheet; source also disables the reveal observer and handles preference changes. OS-level reduced-motion emulation was not available through the browser tools.
- PDF CV rendered and visually inspected: one page, embedded fonts, no clipping. Static PDF signature and asset presence checked; production endpoint returned HTTP 200 with application/pdf. The browser automation download-event wait timed out, so download completion was not confirmed through that tool.
- Production HTML contains complete project content and engineering notes before client JavaScript; metadata, canonical, social image, robots and sitemap emitted.

## External links

HTTP 200 for Parvis, Papertrail, Nexus web and the seven displayed project GitHub repository URLs. Existing LinkedIn and X profile URLs are preserved; login-gated profile availability was not independently verified. No messages, registrations or payments were sent during verification.

Original Google Docs CV export returned 401 anonymously. Public CV actions now use the generated local PDF; the original URL remains in the content configuration.

## Size and scope

Production application JS: approximately 67 KB gzip. CSS: approximately 6 KB gzip. Two self-hosted Latin font files total approximately 62 KB. Four displayed WebP images total approximately 128 KB. No animation framework, router or remote font dependency.

No Lighthouse score, measured frame-rate guarantee, screen-reader certification, deployment or native-app runtime validation is claimed. The portfolio is a static build, ready for the existing hosting workflow.
