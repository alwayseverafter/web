# AlwaysEverafter — mobile invitation studio

A React 19 / TypeScript invitation studio using the existing Vinext + Vite static export and Tailwind/CSS stack. No PHP, payment service, or new backend was added.

## Run locally

Use Node.js 22.13 or later. From this folder:

```sh
npm ci
npm run dev
```

Development uses http://127.0.0.1:5173. For a production preview:

```sh
npm run typecheck
npm run build
npm run preview
```

The production preview defaults to http://127.0.0.1:4173. Set `PORT` to use another port. The review session uses http://127.0.0.1:4181.

## Build and deploy

`npm run build` exports pages and assets to `dist/client`. Deploy only that directory to a static host with clean URLs (`/designs` maps to `/designs.html`). The included preview server implements this mapping. Keep the existing Vercel Other-framework configuration and project root `aea-invitations`. Do not publish repository roots, private environment files, or `dist/server` as static files. No deployment was performed for this redesign.

## Collection and architecture

All seven existing templates remain. Four were added:

- Olive & Ivory Wedding: `/templates/olive-ivory-wedding/index.html`
- Botanical Editorial: `/invitation/botanical-editorial`
- Modern Romantic: `/invitation/modern-romantic`
- Heritage Celebration: `/invitation/heritage-celebration`

All eleven have `/designs/<slug>` detail pages and connect to `/create?design=<slug>`.

- `lib/designs.ts`: shared template catalogue and preview routing.
- `components/aea-site.tsx`: studio pages, catalogue, detail view, existing previews, enquiry flow.
- `components/studio-invitation.tsx`: three new theme compositions and shared demonstration event fields.
- `app/studio.css`: mobile-first refinement and scoped theme styling.
- `components/grace-invitation.tsx`: preserved Everlasting Grace implementation.
- `public/assets/previews`: optimized WebP captures of each actual invitation. Decorative preview controls were hidden only during capture; the live controls remain functional.
- `public/templates/olive-ivory-wedding`: standalone imported page. Its document boundary isolates its CSS and JavaScript; no iframe or nested scrolling is used.

Olive & Ivory is first in the collection and uses its supplied palace video inside the hero, experience and collection phones. Videos load only when visible, pause offscreen or in background tabs, and respect reduced motion. Other cards use static screenshots. The original seven invitation openings remain; none was added to the four new designs. Main-site continuous scroll choreography and the moving ribbon were removed from rendering. Existing illustration, monogram, wordmark, fonts, names, contact links and invitation details are preserved.

## Imported ZIP provenance

The current Olive & Ivory template comes from the user-supplied `olive-ivory-wedding-code.zip` (19 October 2026 version). It replaces the earlier reconstruction with the supplied palace video, decorative media, scrolling sections and Anna & Alexander invitation. The source README is preserved alongside the page and records third-party media provenance.

Integration adds collection and selection links, a favicon, local copies of the same fonts, and `css/atelier.css` for touch targets. The full invitation opens as a standalone page; phone previews use its animated cover without embedding the full document.

## Data and services

Enquiries are assembled on the visitor's device and handed to their email application or WhatsApp. The visitor must send the message there. No message was sent in testing. Business email: ashir.vp@alwayseverafter.com; WhatsApp: +49 176 667454311.

All invitation details are demonstrations. The three new previews and original seven do not send real RSVPs. Olive & Ivory preserves its supplied local-storage RSVP (`palace-rsvp`); no response reaches a couple. Clearing site data removes it. There is no server RSVP database, payment checkout, or customer dashboard in the original flow. External map and WhatsApp links need those services to be available.

## Assets

Existing brand assets and garden illustration remain. The Everlasting Grace artwork provenance is retained in `public/assets/grace/sources.json`. Confirm rights to those pre-existing reference assets before commercial reuse.

Modern Romantic uses a bouquet photograph by Aleksandar Dimitriev, downloaded from Unsplash and served as a local WebP. Source and license links: `public/assets/romantic-bouquet-source.txt`. The photograph depicts demonstration styling, not a customer wedding. Imported fonts are served locally in their original families: Cormorant Garamond, DM Sans and Great Vibes. The main site retains Cormorant Garamond, DM Sans and Italianno.

## Recovery and review

Branch: `codex/mobile-invitation-studio`. Baseline commit: `8fd7a76775cdc8697e792db664cb9e96ea174ce7`. A ZIP of that untouched baseline and the original supplied invitation ZIP are included in `delivery` beside the updated source archive.

Read `REVIEW.md` for skill installation status, checks and limitations. Screenshots and machine-readable browser results are in `output/playwright`. Those are Chromium desktop-browser emulation captures, not physical-device results.
