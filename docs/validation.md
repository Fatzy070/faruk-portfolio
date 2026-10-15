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

## Tailwind migration · 11 October 2026

- Tailwind CSS 4 with the Vite plugin; UI utilities live in TSX, with seven shared utility combinations. Global CSS reduced from 1,876 to approximately 215 lines.
- Production build/prerender, strict TypeScript, lint, content checks and `git diff --check` pass.
- Compared 514 rendered DOM elements against a frozen pre-refactor build at 320, 390, 768, 900 and 1440px. Corrected letter-spacing and the hero badge transition found during comparison. Also checked the 1800px layout.
- Final 1440/1800px comparisons matched the recorded visible layout, typography, colors, borders and transition values. Remaining differences were styles on clipped screen-reader text. Desktop screenshots were also visually inspected; minor screenshot differences were hover/focus/scrollbar state.
- Verified mobile navigation, Escape focus return, dark theme, expanded case studies, archive disclosure, navigation hover underline, keyboard focus ring, hero animation name and scroll-reveal/progress updates. No observed browser warnings/errors.
- Inspected tablet and mobile screenshots; no horizontal overflow at the checked mobile/tablet widths.
- Audited reduced-motion and print cascade. Their utility overrides are important so layout breakpoint variants cannot restore motion or override print styles. OS-level reduced-motion emulation remains unavailable through the browser tools.
- No content, contact handlers, CV targets, project data or reveal-hook logic changed.
