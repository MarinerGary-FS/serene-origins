# Technical Build Spec — Serene Origins

## Goal
Build a polished landing page that can be reviewed quickly and then transitioned toward production with minimal rework.

## Recommended implementation
Preferred:
- Next.js
- clean component-based architecture
- simple responsive layout
- optimized performance

Fallback:
- static HTML/CSS/JS if that delivers the cleanest result faster

## Suggested page architecture
- `HeroSection`
- `PainSection`
- `SystemSection`
- `IncludedSection`
- `HowItWorksSection`
- `ExperiencePreviewSection`
- `MissionSection`
- `PricingSection`
- `FAQSection`
- `FinalCTASection`
- `Footer`

## CTA behavior
All major membership CTAs should link to:

`https://buy.stripe.com/aFa7sLbbm8UDfamgUN0gw00`

Open behavior:
- same tab is acceptable
- new tab is acceptable if preferred for external checkout consistency

## Stripe notes
Keep checkout simple.
Do not overcomplicate the purchase flow before review.

## Technical standards
- responsive across mobile, tablet, desktop
- semantic HTML
- accessible color contrast
- clean heading hierarchy
- optimized images
- lightweight motion
- no unnecessary libraries

## Nice-to-have enhancements
- anchor navigation for key sections
- tasteful sticky header
- smooth scroll behavior
- subtle card hover states
- FAQ accordion
- scroll reveal animations

## Content handling
Use real draft copy where available from `copy-deck.md`.
If placeholders are needed, make them clearly editable.

## Legal/support pages
If not building them now, include footer placeholders for:
- Privacy Policy
- Terms
- Contact / Support

## Review readiness
The preview should be polished enough to show Levy without needing heavy explanation.
That means:
- no placeholder lorem ipsum
- no broken links
- no empty sections
- consistent spacing
- production-like quality
