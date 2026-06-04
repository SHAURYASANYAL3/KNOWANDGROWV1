# KNOW & GROW: Project Context & AI Handoff

This document provides complete context for any AI assistant or developer working on the KNOW & GROW NGO website. It outlines the technology stack, the unique design system, the project structure, and the recent architectural changes.

## 1. Project Overview
**KNOW & GROW** is a youth-led initiative focused on mental health awareness, digital safety, drug prevention, and community education. The website's goal is to feel safe, approachable, youth-centric, and emotionally trustworthy—avoiding clinical, overly polished, or fear-mongering aesthetics.

## 2. Technology Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS (v3.4+) + Custom CSS Variables
- **Animations**: Framer Motion & CSS Animations (via IntersectionObserver)
- **Icons**: Lucide React

## 3. The "Modern Sketchbook" Design System (Recent Redesign)
The website recently underwent a massive visual overhaul to a **"Modern Sketchbook"** or "Scrapbook" aesthetic. It simulates the look of a physical notebook filled with sketches, sticky notes, taped polaroids, and handwritten annotations.

### Typography
- **Headings**: `Kalam` (`font-heading`) — Bold, organic, and readable hand-drawn style.
- **Body**: `Patrick Hand` (`font-body`) — Accessible, neat handwriting for long-form text.
- **Accents/Quotes**: `Caveat` (`font-accent`) — Highly cursive, expressive handwritten text.

### Color Palette & Textures
The colors are configured in `tailwind.config.ts` and `app/globals.css`.
- **Paper Backgrounds**: 
  - `bg-paper` (warm off-white with subtle noise)
  - `bg-lined-paper` (ruled notebook lines)
  - `bg-graph-paper` (dotted graph paper)
- **Inks (Text & Borders)**: 
  - `text-ink` (charcoal pencil - default text color)
  - `text-ink-navy` (blue ballpoint pen)
  - `text-ink-red` (red grading pen)
- **Highlighters (Accents)**:
  - `highlight-yellow`, `highlight-pink`, `highlight-green`, `highlight-blue` (CSS classes that create a marker swipe behind text).
- **Sticky Notes**: Soft pastel backgrounds for the sticky note components.

### Shapes & Borders
Instead of clean geometric shapes, the site relies on drawn borders:
- **Wobbly Borders**: `rounded-wobbly-1` through `rounded-wobbly-4` use complex `border-radius` values to create asymmetrical, hand-drawn shapes.
- **Drawn Borders**: The `border-drawn` class applies wobbly radius and thick ink borders.
- **Shadows**: `shadow-sketch` creates a sharp, offset shadow simulating pencil shading.

## 4. Key Custom Components

All components are built to reinforce the sketchbook theme. When adding new features, heavily utilize these primitives located in `components/ui/`:

- **`WobblyCard.tsx`**: The core container component. 
  - Supports variants: `default` (paper cutout), `sticky-yellow/pink/blue/green` (post-it notes with curled edges), and `polaroid` (taped photos).
  - Pass the `tape` boolean prop to automatically render masking tape at the top.
- **`SketchButton.tsx`**: Buttons that look like they were circled with a marker. Hover states trigger highlighter background sweeps.
- **`Tape.tsx`**: An absolute-positioned decorative piece of semi-transparent masking tape with jagged edges (using SVG masking).
- **`ScribbleUnderline.tsx`**: An SVG path that uses CSS keyframes to draw itself when it enters the viewport. Used primarily inside `SectionHeading`.
- **`ScrollReveal.tsx`**: An `IntersectionObserver` wrapper that fades and slides content into view. *Always wrap new sections or grid items in this for smooth entrance animations.*

## 5. File Structure
- `app/` — All Next.js routes (e.g., `/about`, `/digital-safety`, `/contact`). Every page is completely styled to the sketchbook theme.
- `app/globals.css` — Contains all the custom CSS properties, paper background SVG generation, wobbly radius hover states, and drawing keyframes.
- `tailwind.config.ts` — Contains the mapped colors (ink, markers, paper), wobbly radiuses, and custom shadows.
- `components/` — Shared UI elements (`Header.tsx`, `Footer.tsx`, `SectionHeading.tsx`).
- `components/ui/` — The design system atomic components listed above.
- `lib/content.ts` — A central repository for the site's text data (Focus Areas, Stats, Testimonials, FAQs, Resources). **Update this file to change site content.**

## 6. Guidelines for the Next AI Developer
1. **Maintain the Aesthetic**: Do not use standard rounded corners (`rounded-lg`, `rounded-xl`) or soft drop shadows (`shadow-md`, `shadow-lg`). Always use the wobbly/sketch utility classes to keep the handcrafted feel.
2. **Contrast is Key**: Never put white text on a light background. Use the ink colors appropriately.
3. **Stay Human-Centered**: The tone of the website is compassionate and empowering. Avoid adding clinical terminology, corporate layouts, or fear-inducing warnings.
4. **Component Reusability**: If you need a new card, check if `WobblyCard` with a specific variant handles the layout first. If you need emphasis, use `ScribbleUnderline` or the `highlight-[color]` CSS classes.
