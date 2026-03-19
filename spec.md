# Tru Bond Cleaning Adelaide

## Current State
The site has 12 suburb pages sharing a single `SuburbPage.tsx` template, backed by `suburbsData.ts`. Each suburb currently has ~5 short paragraphs (~400 words). Pages use a single shared `suburb-hero.dim_1200x500.jpg` image with no extra visual content. The layout has a hero, main content, sidebar (quote card, checklist, testimonial), and why-choose-us section.

## Requested Changes (Diff)

### Add
- 3 new branded images: clean kitchen, clean property interior, and professional team at work
- Suburb-specific FAQ section (2 questions per suburb) on each suburb page
- Pricing guide section on each suburb page
- Trust/stats bar (e.g. 500+ jobs, 98% bond recovery, 10+ years experience)
- E-E-A-T content: experience proof, authority signals, expert tips, trust markers
- Expanded body content to ~1000 words per suburb with semantically optimised headings
- Multiple images per suburb page (hero + 2 inline branded images with SEO alt text)
- Open Graph image meta tag and keywords meta on each suburb page

### Modify
- `SuburbPage.tsx`: add stats bar, pricing section, suburb FAQ, second inline image, enhanced schema markup
- `suburbsData.ts`: expand all 12 suburbs to ~1000 words, add `suburbFaqs`, `pricing` hint, `stats` fields

### Remove
- Nothing removed

## Implementation Plan
1. Generate 2 new branded images (kitchen, property interior)
2. Update `SuburbData` interface to include `suburbFaqs` and expand body content
3. Expand all 12 suburbs to ~1000 words with E-E-A-T signals
4. Update `SuburbPage.tsx` layout: stats bar, pricing table, suburb FAQ accordion, second image, enhanced metadata
