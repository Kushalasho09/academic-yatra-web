# Academic Yatra — Design Reference (design.md)

> Use this file as the **single source of truth for visual identity** (colors, type, spacing, component styling) when generating any new section, page, or component.
>
> **Do NOT treat this file as a content/copy reference.** Do NOT reuse any layout, section order, section naming, or UI structure from the current live homepage or any existing page. Every new section must be structurally original — same brand, new composition.

---

## 1. Color Palette (LOCKED — do not alter, rename, or introduce new brand colors)

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| `brand-primary` | `#0C9253` | Main CTA buttons, active tabs, icon highlights, badge backgrounds |
| `brand-primary-hover` | `#0A7D46` | Button hover and active press state |
| `brand-accent` | `#0067E3` | Secondary CTA, link hovers, active tags, tech highlights |
| `brand-accent-dark` | `#0654A5` | Category titles, course badge backgrounds |
| `brand-navy` | `#122447` / `#223D74` | Dark section headings, dark cards, footer background |
| `brand-tint` | `#E5F0FC` | Secondary light background, card hover glows, icon backgrounds |
| `brand-green-tint` | `#E7F7EE` | Positive badge tints, feature pill backgrounds |
| `text-dark` | `#232323` | Main headings, card titles, high-contrast labels |
| `text-muted` | `#5B6B85` / `#666666` | Paragraph descriptions, meta subtitles, footer text |
| `price-green` | `#16A34A` | Pricing highlights, verified badges |
| `border-light` | `#E2E8F0` / `#D9D9D9` | Card outlines, input borders, divider lines |
| `glass-bg` | `rgba(255, 255, 255, 0.85)` | Glassmorphism cards with backdrop blur |

**Rule:** Every new section must be built entirely from this palette. No new hex values, no substitute "similar" shades, no gradients that aren't derived from these tokens (e.g. `brand-primary → brand-accent` gradients are fine; a brand-new teal is not).

---

## 2. Typography (LOCKED — do not swap fonts)

- **Headings**: `Plus Jakarta Sans` (Weights: 600, 700, 800)
- **Body & Subtitles**: `Poppins`, `DM Sans`, `Outfit` (Weights: 400, 500, 600)
- **Special Accents**: `Playfair Display` (italicized sub-headers only)

### Type Scale
- Hero Title: `text-4xl sm:text-5xl lg:text-6xl`, weight 800, tight tracking
- Section Title: `text-3xl sm:text-4xl`, weight 700
- Card Title: `text-xl sm:text-2xl`, weight 600
- Body: `text-base sm:text-lg`, weight 400/500
- Badge / Tag: `text-xs sm:text-sm`, weight 600, uppercase or pill format

**Rule:** New sections may reuse this scale, but are free to break the *rhythm* — e.g. an oversized display number, an asymmetric two-size heading split, or a rotated tag — as long as the actual font families and weights stay within the list above.

---

## 3. Core Surface & Component Styling (LOCKED tokens, FLEXIBLE application)

- **Borders**: `border-light` for outlines/dividers — thin, 1px, rounded corners (`rounded-xl`/`rounded-2xl` range).
- **Glass cards**: `glass-bg` with backdrop blur — reserved for elevated/floating elements, not full-width sections.
- **Dark sections**: `brand-navy` backgrounds pair with light/white text, `brand-primary` or `brand-accent` as pop accents.
- **Tints**: `brand-tint` / `brand-green-tint` are backgrounds for soft callouts, stat pills, or icon containers — never full-page backgrounds.
- **Buttons**: primary CTA = `brand-primary` fill with `brand-primary-hover` on hover; secondary CTA = `brand-accent` (outline or ghost style is encouraged for variety instead of always solid fill).

---

## 4. Mandatory Uniqueness & Anti-Template Rules

These rules exist because AI builders default to the same templates. Every new section generated from this file **must** actively work against that default. Before finalizing any section, check it against this list:

1. **No section may copy the layout of any existing Academic Yatra section** (current homepage or otherwise) — not the grid structure, not the card arrangement, not the CTA banner style, not the footer shape. Treat the existing site as "look" reference only, never "layout" reference.
2. **Break the centered-text-then-button-below default.** Prefer asymmetric layouts: split-screen (text one side, visual/stat block other side), overlapping cards, diagonal dividers, staggered grids, offset image bleeds.
3. **Vary structure section-to-section.** If one section is a left-right split, the next should not also be a left-right split — alternate composition types (split → grid → full-bleed banner → staggered cards → etc.).
4. **No generic AI stock-photo look.** Prefer abstract shapes, icon systems, gradient blobs, or illustrated/vector elements built from the palette above over generic stock photography.
5. **Avoid default "trendy AI" tells**: no plain 3-equal-column feature grids with a centered icon-title-paragraph pattern unless deliberately restyled (icon offset, card rotated, uneven column widths, etc.).
6. **Every section should have one distinct visual signature** — a diagonal cut, a floating glass card overlapping two zones, an oversized background numeral, an accent-colored underline/highlight on a keyword — something that makes it recognizable as *not* a template default.
7. **Content from the existing homepage bible (headlines, section copy, course lists, etc.) is copy/content reference only** — it tells you *what* the section is about, never *how* to lay it out.

---

## 5. How to Use This File in Antigravity

When prompting for a new section, reference this file plus a one-line structural instruction, e.g.:

> "Using design.md for colors/fonts/tokens, build the 'Choose Your Learning Path' section as an asymmetric staggered-card layout with an oversized background numeral per card — do not use a standard 3-column grid, do not copy the current homepage version of this section."

Always pair **design.md (visual system)** with a **fresh structural instruction per section** — never let the AI infer layout from the design file alone.
