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


## Everlasting Grace

`/invitation/everlasting-grace` is the Timeless Grace reference recreation requested by the owner, personalised for Younuz & Amelia. It includes a custom Y & A envelope seal, an animated opening, cinematic hero, scratch-date interaction with keyboard button alternatives, Nikkah panel, illustrated timeline, countdown, optional embedded map, dress palette, gift dialog and sample RSVP dialog. It is selectable in the collection and enquiry configurator.

The sample date is 20 January 2027 at 18:00 Dubai time. Family names are intentionally not invented. RSVP responses are local demonstrations, and the gift panel is a sample rather than a live registry. The map only loads after the visitor chooses to show it. Music is a generated Web Audio melody activated by the visitor. Spatial transitions honour reduced motion; background video has a pause control.

This template reuses decorative artwork from the specifically requested reference, unlike the original six designs. Original asset URLs are recorded in `public/assets/grace/sources.json`. The decorative hero video comes from `https://pub-4dc8201144ca418fb604349c73e8c724.r2.dev/Newbeautifulvideo.mp4`; its local mobile version is silent and compressed from 17.1 MB to 616 KB. The personalised envelope was edited using the built-in image generation tool to change only the seal initials to Y & A, then converted to WebP. The reference company's name, logo, family identities, RSVP destination and soundtrack are not used. The envelope opening is recreated with CSS rather than reusing footage with the reference couple's initials.
