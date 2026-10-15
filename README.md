# Ogunsola Faruk · Software Developer — Web & Mobile

A production-oriented portfolio built with React, TypeScript, Tailwind CSS 4 and Vite. Features two flagship case studies, Nexus web/mobile work, an earlier-project archive, capability groups, factual experience, a local CV, and direct contact.

## Develop

Requires Node 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run check-content
npm run build
npm run preview
```

Deploy `dist/` to static hosting. The build pre-renders the page for SEO and immediate content; React adds the interactions on load. No server, secret, database or external form service is needed.

## Update content

Edit `src/content/portfolio.ts`. Add a project object to `projects` with its image, links, stack and engineering notes; `ProjectFeature` renders it automatically. Capability groups, experience, navigation, social links and archived work also come from data. Put optimized screenshots in `public/images/` and provide accurate alt text and image dimensions in the component if adding a new image format.

- Components: `src/components/`
- Component styling: Tailwind utilities in `src/components/*.tsx`
- Shared utility combinations: `src/components/styles.ts`
- Theme tokens, fonts, base styles and specialized motion: `src/index.css`
- Reusable motion behavior: `src/hooks/useScrollEffects.ts`
- Build-time HTML rendering: `scripts/prerender.mjs`
- Factual sources and project selection: `docs/content-audit.md`

The original Google Docs CV is retained as `profile.originalCvUrl`, but returned 401 anonymously. The public site uses `public/ogunsola-faruk-cv.pdf`. Regenerate it after changing experience or project content (Python with ReportLab required):

```sh
node --experimental-strip-types --input-type=module -e "import {profile,experience,education,projects,capabilities} from './src/content/portfolio.ts'; console.log(JSON.stringify({profile,experience,education,projects,capabilities}))" > /tmp/portfolio-content.json
python3 scripts/generate-cv.py /tmp/portfolio-content.json
```

The CV generator uses DejaVu Sans fonts from `/usr/share/fonts/truetype/dejavu/`; adjust those paths on other operating systems. The generated PDF is committed as a static asset, so deployment does not require Python.

## SEO and domain

The verified existing homepage is `https://ogunsolafaruk.vercel.app/`. If the domain changes, update `profile.siteUrl`, canonical/Open Graph/JSON-LD URLs in `index.html`, `public/sitemap.xml`, and `public/robots.txt`. Replace `public/social-preview.png` when changing visual identity. Production content is emitted into `dist/index.html` by the build step.

## Interaction and accessibility

Native anchor navigation; mobile disclosure menu closes with Escape and returns focus to its button. Case studies and the archive use native keyboard-operable disclosures. Focus rings, skip link, semantic headings, named controls and polite copy feedback are included. Animations respect `prefers-reduced-motion`; content remains visible with JavaScript disabled in the production build. All contact is direct mail/copy; there are no fake form-success states.

The original source images remain in `src/assets/` as historical source material and are not included in the runtime bundle. The user's untracked `src/assets/parvis` is preserved.

## Styling architecture

Use Tailwind utilities in JSX for component layout, typography, spacing, colors, borders, responsive behavior and interaction states. Theme utilities such as `bg-paper`, `text-ink` and `text-accent` resolve to the existing CSS variables, including section-specific overrides. Keep complete class strings so Tailwind can discover them at build time.

The `wide`, `tablet`, `stack`, `mobile` and `compact` variants preserve the original inclusive breakpoints (1600, 1100, 900, 760 and 380px). Exact arbitrary values intentionally preserve the existing design. Shared class strings cover repeated containers, headings, copy and links; avoid adding a separate style object for every component.

The global stylesheet retains the existing reset instead of Tailwind Preflight to avoid browser-default changes. Keep font declarations, theme tokens, shared accessibility defaults, reveal lifecycle classes, keyframes, reduced-motion and print fallbacks there. `useScrollEffects` still owns reveal observation and the scroll-progress variable.
