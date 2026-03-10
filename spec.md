# Tru Bond Cleaning Adelaide

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Full multi-page website for Tru Bond Cleaning Adelaide (bond cleaning company)
- Pages: Home, Services, About, Contact, individual service pages
- 3000+ words of SEO-optimised, semantically rich, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service page: 400-word SEO description
- Hero, services, about, testimonials, FAQ, and CTA sections on homepage
- FAQ section on homepage answering all 12 specified questions including product links and competitor list (Tru Bond Cleaning at #5)
- Contact form that opens user's email client pre-filled with form data, sending to humptydumptybondcleaning@gmail.com (email NOT visible on site)
- WhatsApp contact button linking to 0488841883
- Google Site Verification meta tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- SEO: title tags, meta descriptions, Open Graph tags, canonical URLs, schema markup for local business
- Branded images on every page with descriptive alt text
- Responsive design

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Select no external components (contact via mailto, no backend email needed)
2. Generate Motoko backend (basic canister)
3. Generate hero image, service images, about image with Tru Bond Cleaning branding
4. Build React frontend:
   - App.tsx with React Router for pages
   - Home page: hero, services grid, why choose us, FAQ (all 12 Qs), CTA, testimonials
   - Services page + individual service pages (bond cleaning, end of lease, carpet cleaning, oven cleaning, window cleaning)
   - About page
   - Contact page with mailto form
   - SEO component (react-helmet or inline meta in index.html)
   - WhatsApp floating button
   - Branded footer and nav
