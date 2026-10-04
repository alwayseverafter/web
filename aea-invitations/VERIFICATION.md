# Reference and verification notes

Reference reviewed: https://webgencyinvitations.com/ (desktop and 390 px mobile), /order, /thesacredgarden and /dolcevita.

Observed: sticky navigation with mobile menu; serif headlines and sans-serif descriptions; animated headline words; continuously moving event ribbon; phone invitation playback beside progressively revealed service benefits; three-column desktop invitation cards stacked on mobile; gallery load-more affordance; included-feature grid; automatically moving testimonial strips; three-step ordering section; expanding FAQ rows; repeated enquiry actions. The ordering page has three service types and a multistep template selector. The invitation demos use sealed-envelope openings, large names, event schedules, map links, dress code, and RSVP controls. Mobile service/review areas become smaller swipeable presentations.

Adaptation: retain narrative sequence and detailed invitation emphasis, replace teal with the supplied monochrome brand plus ivory, botanical green, muted gold. Omit unsupported testimonials, prices, turnaround claims and guest limits. Original six-design collection with filters, independent preview routes, real mail/WhatsApp enquiry handoff. Native scroll progress translates the invitation within a sticky phone; entrance choreography uses clipping, translation, rotation and delayed stages. Mobile uses natural stacked scrolling; no artificial scroll interception. Reduced motion disables all continuous/spatial motion.

Checks completed:
- TypeScript --noEmit passes.
- Production static export: 11 routes, zero skipped or failed.
- HTTP checks: homepage, collection, create, privacy and all six invitation routes return 200 HTML.
- Browser viewport checks: 1440 desktop, 1280 desktop, 768 tablet, 390 and 360 mobile. No horizontal document overflow in measured views.
- Main navigation, mobile menu, gallery category filter, FAQ expansion, design query preselection.
- Required form fields reject empty name/email and focus the first invalid field.
- Review reflects entered fields and creates correctly encoded email/WhatsApp messages to supplied business contacts; no message sent.
- Invitation seal opens, reveal content is readable, sample RSVP decline returns honest local-only feedback.
- Scroll progress and invitation translation measured at a mid-scroll position.
- Fonts and images loaded; assets are self-hosted.
- 21st review: seven informational hardcoded-color findings, no errors or automatic fixes. These are intentional invitation palettes. Catalog search unavailable without 21st login; no catalog components reused.

Limitations: no public deployment connection available; production preview runs locally. Real hosted RSVP collection, payment checkout, and server-delivered enquiry emails are not configured. Enquiries use explicit email/WhatsApp handoff. Physical iOS/Android devices and real reduced-motion OS toggling were not available; responsive sizes and reduced-motion CSS were checked.
