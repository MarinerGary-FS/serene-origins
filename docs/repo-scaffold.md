# Repo Scaffold Recommendation — Serene Origins

This file defines the recommended repository structure for a clean Claude-assisted build.

## Recommended structure

```text
serene-origins/
├── CLAUDE.md
├── README.md
├── package.json
├── next.config.js
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── hero-section.tsx
│   ├── pain-section.tsx
│   ├── system-section.tsx
│   ├── included-section.tsx
│   ├── how-it-works-section.tsx
│   ├── experience-preview-section.tsx
│   ├── mission-section.tsx
│   ├── pricing-section.tsx
│   ├── faq-section.tsx
│   ├── final-cta-section.tsx
│   ├── site-header.tsx
│   └── site-footer.tsx
├── public/
│   ├── logo.svg
│   ├── og-image.jpg
│   └── placeholders/
├── lib/
│   └── constants.ts
├── docs/
│   ├── project-brief.md
│   ├── brand-strategy.md
│   ├── design-direction.md
│   ├── sitemap-wireframe.md
│   ├── copy-deck.md
│   ├── technical-build-spec.md
│   ├── assets-content-checklist.md
│   ├── review-checklist.md
│   ├── master-build-prompt.md
│   └── repo-scaffold.md
└── README.md
```

## Page assembly order
The homepage should be composed in this order:

1. `SiteHeader`
2. `HeroSection`
3. `PainSection`
4. `SystemSection`
5. `IncludedSection`
6. `HowItWorksSection`
7. `ExperiencePreviewSection`
8. `MissionSection`
9. `PricingSection`
10. `FAQSection`
11. `FinalCTASection`
12. `SiteFooter`

## Suggested component rules
- each section owns one clear job
- avoid giant monolithic page files
- keep section props simple
- pull repeated constants into `lib/constants.ts` if helpful
- keep the homepage easy to review and edit

## Styling guidance
If using Tailwind:
- keep utility usage clean and organized
- use spacing rhythm consistently
- do not oversaturate the design with effects

If using plain CSS:
- organize by layout, section, typography, utilities
- keep naming intuitive and lightweight

## Initial technical priorities
- one strong homepage
- responsive layout
- CTA wiring
- strong typography and spacing
- clean metadata / page title
- presentable stakeholder-ready preview

## Nice-to-have later
- legal pages
- success / onboarding redirect page
- richer motion
- analytics
- onboarding email integrations
- webhook-driven Stripe flow
