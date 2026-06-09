---
name: Heritage Trade Portal
colors:
  surface: '#fff8f4'
  surface-dim: '#f7d4b2'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e7'
  surface-container: '#ffead9'
  surface-container-high: '#ffe3ca'
  surface-container-highest: '#ffdcbc'
  on-surface: '#291804'
  on-surface-variant: '#524436'
  inverse-surface: '#412c15'
  inverse-on-surface: '#ffeee0'
  outline: '#847464'
  outline-variant: '#d7c3b0'
  surface-tint: '#865300'
  primary: '#865300'
  on-primary: '#ffffff'
  primary-container: '#c9831a'
  on-primary-container: '#402500'
  inverse-primary: '#ffb960'
  secondary: '#805437'
  on-secondary: '#ffffff'
  secondary-container: '#fec29e'
  on-secondary-container: '#794e31'
  tertiary: '#6a5c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f907a'
  on-tertiary-container: '#342919'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb960'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#f4ba96'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#653d22'
  tertiary-fixed: '#f2e0c7'
  tertiary-fixed-dim: '#d6c4ac'
  on-tertiary-fixed: '#231a0b'
  on-tertiary-fixed-variant: '#514533'
  background: '#fff8f4'
  on-background: '#291804'
  surface-variant: '#ffdcbc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  title-lg:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  caption:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  max-width: 1200px
  section-padding-desktop: 100px
  section-padding-mobile: 40px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies the "South Indian trade house" aesthetic, blending the reliability of a traditional wholesaler with the efficiency of a modern B2B procurement engine. The personality is warm, confident, and editorial, avoiding the sterile nature of typical SaaS platforms in favor of a "Material" feel that honors the physical nature of pooja products.

The style is **Minimalist-Material**. It relies on high-quality typography and a sophisticated, warm color palette rather than decorative flourishes. Surfaces are flat and honest, emphasizing structural integrity and clear information hierarchy for bulk ordering.

## Colors
The palette is rooted in the earth and spirit of South Indian trade. 
- **Primary Saffron (#C9831A):** Used for actions, primary buttons, and key brand highlights.
- **Ivory Background (#FAF6EE):** A warm, non-white canvas that reduces eye strain and feels premium.
- **Dark Brown (#1E0E00):** High-contrast text color for maximum legibility.
- **Mid Brown (#6B4226):** Used for secondary text, labels, and metadata.
- **Cream Cards (#F5EFE4):** Subtle differentiation for surface containers against the ivory background.
- **Border (#E2D0B8):** Used for structural lines and field outlines.

## Typography
The system uses a pairing of a classical serif and a functional geometric sans-serif. 
- **Headlines:** Set in a high-quality serif (mapped to Libre Caslon Text as the closest available substitute for Cormorant Garamond) with weight 600 and tight tracking to evoke a "Trade House" editorial feel.
- **Body & UI:** Set in DM Sans for clarity and a modern procurement experience. 
- **Hierarchy:** Use display styles for hero sections and product category titles. Use uppercase labels in Mid Brown for technical product specifications (e.g., SKU, Weight).

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy centered on a 1200px max-width container for desktop environments to maintain an editorial, structured look. 

- **Vertical Rhythm:** Large 100px gaps between major landing page sections create a sense of breath and "Gallery" style browsing.
- **Mobile:** Margins reduce to 20px with section padding decreasing to 40px.
- **Grids:** Use a 12-column grid for desktop. Product listings should typically span 3 or 4 columns (3-up or 4-up) to ensure images are large and clear.

## Elevation & Depth
This design system rejects most modern depth effects in favor of a flat, architectural feel.
- **Flat Surfaces:** Almost all components (cards, headers, sections) sit flat on the Ivory background.
- **Borders:** Depth is communicated through 1px solid borders in #E2D0B8 rather than shadows.
- **Exceptions:** 
  - **Floating Cards:** Use a soft, ambient shadow (10% opacity, 20px blur) only for high-priority floating elements or tooltips.
  - **WhatsApp Button:** A persistent floating action button using a standard soft shadow to ensure it remains distinct from the flat content layers.

## Shapes
While the containers and cards are mostly sharp or subtly softened, the primary interaction language uses pill-shapes to provide a welcoming, modern touch to the procurement experience.
- **Cards & Inputs:** Use a 4px (Soft) radius to maintain a structural, reliable feel.
- **Buttons & Tags:** Use fully rounded (Pill) shapes to signify interactivity.
- **Icons:** Use Phosphor Icons with a 1.5px stroke weight. Avoid filled icons unless indicating an "active" state.

## Components
- **Buttons:** 
  - **Primary:** Pill-shaped, Saffron (#C9831A) background, White text.
  - **Secondary:** Pill-shaped, Ivory background, 1px Border (#E2D0B8), Dark Brown text.
- **Input Fields:** 1px border (#E2D0B8) with a 4px corner radius. Labels sit above the field in Mid Brown (#6B4226) using the `label-md` style.
- **Product Cards:** Cream background (#F5EFE4), no shadow, 1px border. Use high-contrast product photography against neutral backgrounds.
- **Lists:** Clean rows separated by 1px horizontal borders in #E2D0B8.
- **Chips/Tags:** Pill-shaped with Ivory background and Mid Brown text, used for product attributes like "In Stock" or "Bulk Only."
- **WhatsApp FAB:** Circular button, brand-aligned or standard green, with a soft shadow to denote its priority as a communication channel.