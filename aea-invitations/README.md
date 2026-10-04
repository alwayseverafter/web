# AlwaysEverafter

A complete responsive invitation studio website, built with React, TypeScript and Vinext. All fonts and artwork are served locally.

## Run

- `npm install`
- `npm run dev` — development preview at http://127.0.0.1:5173
- `npm run typecheck`
- `npm run build` — exports all pages into `dist/client`
- `npm run preview` — production preview at http://127.0.0.1:4173

The exported `dist/client` folder can be hosted on a static hosting service that supports extensionless HTML URLs. The included preview server implements that routing. Never publish the repository root, node_modules, or dist/server as static assets.

## Vercel deployment

Set the Vercel project's Root Directory to `aea-invitations` and deploy the `codex/alwayseverafter` branch. The checked-in `vercel.json` selects the Other framework preset, runs `npm run build`, and publishes `dist/client`. Clean URLs serve exported pages such as `/designs` and `/invitation/the-secret-garden` without an `.html` suffix.

This project uses Vinext's static export, not the Next.js build pipeline. Using Vercel's Next.js preset would incorrectly require `.next/routes-manifest.json`. The repository configuration overrides that preset and output directory; no `.next` manifest is needed.

## Pages and interactions

Home, filterable collection, six invitation previews, a three-step enquiry configurator, and privacy/contact information. Preview invitations include animated opening seals, sample RSVP with validation and response feedback, map links, calendar downloads, and optional synthesized music. Main-site motion uses native CSS and a single requestAnimationFrame loop with IntersectionObserver reveals. No scroll hijacking. Reduced-motion preferences disable spatial motion and continuous animation.

## Business configuration

Brand: AlwaysEverafter. Email: ashir.vp@alwayseverafter.com. WhatsApp: +49176667454311. Contact constants and design content are in `components/aea-site.tsx`.

Enquiries are prepared locally and sent by the visitor through email or WhatsApp. There is no server-side email delivery, checkout, or customer RSVP database. Sample RSVP responses are explicitly labelled demonstrations and never sent or persisted. The site makes no invented claims about prices, delivery times, guest limits, or customer reviews.

Before a public commercial launch, supply the business's final legal/imprint information and confirm service terms, pricing, hosting periods and revision policies. No domain or external publishing account has been configured in this project.

## Brand assets and artwork

Four supplied PNG brand assets have been trimmed to their transparent bounds and compressed to WebP, preserving the artwork. Originals remain untouched in Downloads. Used across the header, invitation seals, signoffs, footer and closing brand section.

Original garden artwork was generated with the built-in image generation tool and optimized to `public/assets/garden.webp`. Prompt: Romantic Italian garden in watercolor and gouache on textured ivory paper, cream limestone arch with delicate white roses and olive foliage, sage and muted gold light, large empty ivory center, distant lake; no text, logos, people, UI, or phone frame. Source: `C:/Users/ashir/.codex/visualizations/2026/10/04/01a10883-ba28-7063-9024-1e509beda381/garden-invitation.png`.

The reference was reviewed at https://webgencyinvitations.com/ including its home sections, order configurator, The Sacred Garden and Dolce Vita demos, and mobile layouts. Structure and interaction concepts informed this original implementation. No reference artwork, company name, testimonials or business claims were reused.

## Verification

TypeScript validation and production export. Browser checks at desktop, tablet and mobile sizes: navigation, design filters, FAQ accordion, required enquiry fields, review state, email/WhatsApp message contents, invitation opening, sample RSVP decline, asset loading and horizontal overflow. No real messages or RSVPs were sent during testing.

21st catalog tooling was attempted, but requires a signed-in 21st account. No 21st components were installed. The supplied reference and brand assets guide the custom implementation.

