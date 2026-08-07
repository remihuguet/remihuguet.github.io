# Handoff: remihuguet.dev — WIP landing + blog

## Overview
A ground-up redesign of the personal site remihuguet.dev. This first milestone ships only:
1. A **"work in progress" landing page** (the site root) with a subtle typewriter animation.
2. A **blog index** (list of posts) and a **blog article detail** page.

No other pages (no CV, no About, no freelance marketing) for now. Aesthetic: pure, elegant, terminal / "nerdy software-engineer" inspired — restrained, typographic, one bright accent.

The positioning has changed: the owner is **no longer a freelancer**. He is a **product engineer & manager** (currently a hands-on engineering manager) with a software-craft background and an interest in organizations. Copy should reflect that calmer, personal tone — not a services/sales pitch.

## About the Design Files
`Redesign Explorations.dc.html` in this bundle is a **design reference created in HTML** — a prototype showing the intended look, layout, typography, theming, and micro-interactions. It is **not production code to copy directly**: it runs on a small in-house component runtime (`support.js`) and uses `{{ }}` template bindings that are irrelevant to your stack.

Your task is to **recreate these designs in the target codebase / new tech stack**, using that stack's idioms (components, routing, i18n, theming). If no stack is chosen yet, pick an appropriate modern one — a static-site generator or React/Vue framework suits a personal blog well (e.g. Astro, Next.js, SvelteKit, or Eleventy). The current site is built on Gridsome (Vue); migrating away from it is expected.

The file contains three "artboards" laid out side by side on a canvas — treat each as one page/route:
- **1a → the landing page** (`/`)
- **1d → the blog index** (`/blog`)
- **1e → an article detail** (`/blog/:slug`)

The top bar of the prototype (round-01 label, DARK/LIGHT, EN/FR, ACCENT swatches) is **authoring scaffolding for review only** — do NOT reproduce it. It exists so the reviewer could preview theme/language/accent combinations. The real product keeps: a dark/light theme toggle, an EN/FR language toggle, and **one fixed accent** (orange — see tokens; the swatch picker was just for choosing it).

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and interactions are final. Recreate the UI to match. The two things intentionally left as placeholders: the **blog post data** (titles/dates/excerpts are representative samples, not final content — they come from real posts) and the **article body** (one sample article demonstrating the prose styles: h2, paragraph, code block, blockquote, author footer).

## Global system

### Layout container
Each page is centered content on the page background. Prototype artboards are drawn at **900px wide**; in production treat that as a **max content width ≈ 720–780px** for reading pages, centered, with generous padding. The prototype wraps content in a rounded "card" (`--surface`, 1px `--border`, radius 12px, `--shadow`) to read as a window on the canvas — **for the real full-page site you can drop the card** and let content sit directly on the page background, OR keep a single centered card. Recommended for a real site: no card, content on `--bg`, max-width column, comfortable vertical rhythm.

### Type families
- **JetBrains Mono** (Google Fonts) — weights 400/500/700, plus italic 400. Used for: eyebrow/meta lines, nav, links, the landing headline, code, and all "UI" text.
- **Newsreader** (Google Fonts) — serif, weights 400/500, optical sizing `6..72`, plus italic. Used for: long-form prose (the WIP tagline, blog post titles + excerpts, article body + blockquote).

Load: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap`

### Theming
Implement dark + light via CSS custom properties on the document root (`data-theme="dark" | "light"`). Default: **dark**. Persist the user's choice (localStorage) and respect `prefers-color-scheme` on first visit. Add a `transition` on background/color for a soft switch.

### Accent
**Single accent, shared by both themes: orange `--accent:#ff7a18`, `--accent2:#ff9a4d`** (hover/lighter). Used for: the animated headline, links, the blinking caret, tag labels, the article `##` heading prefix, the blockquote left border, the avatar glyph. `::selection` uses `background:var(--accent); color:var(--bg)`.
(The other swatches in the prototype — gold, magenta, cyan, lime, green, violet — are not needed; orange was the final pick.)

### Internationalization (EN / FR)
UI + landing/blog chrome copy is bilingual with a toggle. Only the strings below switch; post data and the sample article can stay in their source language. Default **EN**, persist choice.

## Design Tokens

### Dark theme (default)
| token | value | use |
|---|---|---|
| `--bg` | `#010409` | page background base |
| page gradient | `radial-gradient(1200px 600px at 30% -5%, #0d1117 0%, #010409 60%)` | page backdrop |
| `--surface` | `#0d1117` | card surface |
| `--border` | `#30363d` | card / strong borders |
| `--soft` | `#21262d` | row dividers, subtle borders, code border |
| `--fg` | `#e6edf3` | primary text |
| `--dim` | `#c9d1d9` | body prose text |
| `--muted` | `#8b949e` | meta, secondary text |
| `--green` | `#3fb950` | code accent (`$`, `assert`) |
| `--code` | `#161b22` | code block background |
| `--avatar` | `#161b22` | author avatar background |
| `--shadow` | `0 30px 70px rgba(0,0,0,.55)` | card shadow (drop if no card) |

### Light theme ("paper terminal")
| token | value |
|---|---|
| `--bg` | `#f4f1ea` |
| page gradient | `radial-gradient(1200px 600px at 30% -5%, #ffffff 0%, #f4f1ea 60%)` |
| `--surface` | `#faf8f2` |
| `--border` | `#ddd6c7` |
| `--soft` | `#e8e2d4` |
| `--fg` | `#1c1a17` |
| `--dim` | `#3f3a32` |
| `--muted` | `#726b5c` |
| `--green` | `#2f7d32` |
| `--code` | `#efeade` |
| `--avatar` | `#efeade` |
| `--shadow` | `0 22px 50px rgba(90,78,45,.16)` |

### Accent (both themes)
| token | value |
|---|---|
| `--accent` | `#ff7a18` |
| `--accent2` | `#ff9a4d` (hover) |

### Radius / misc
- Card radius: `12px`; code block radius: `10px`; toggle radius: `8px`.
- Link default color `--accent`, hover `--accent2`, no underline.

---

## Screens / Views

### 1a — Landing page (`/`)
**Purpose:** A calm "under construction" holding page that still points people to the blog and contact links.

**Layout:** Single centered column. Vertical flow, left-aligned. Prototype padding `56px 52px 60px`; min-height ~520 (full viewport in production, vertically comfortable).

**Components (top → bottom):**
1. **Eyebrow line** — JetBrains Mono, `14px`, color `--muted`. Text: `~/remi · product engineer & manager · software craft`.
2. **Animated headline** — JetBrains Mono, `42px`, weight 700, line-height 1.12, letter-spacing -.01em, color `--accent`. Text content is **typed on a loop**: types out `building something new`, holds ~1.8s, deletes, pauses ~0.7s, repeats. Typing speed ~95ms/char, deleting ~45ms/char. Followed by a **blinking block caret**: an inline block `13px × 34px`, `background:--accent`, `margin-left:5px`, `vertical-align:-4px`, `animation: blink 1s steps(1) infinite` (`@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`).
3. **Tagline** — Newsreader serif, `20px`, line-height 1.55, color `--dim`, max-width 560px. EN: "The old freelance site is retiring. Something calmer and more honest is on the way." FR: "L'ancien site freelance prend sa retraite. Quelque chose de plus calme et honnête arrive."
4. **Sub line** — JetBrains Mono, `15px`, color `--muted`, margin-top 14px. EN: "In the meantime, the writing stays online." FR: "En attendant, les articles restent en ligne."
5. **Links row** — flex, gap 26px, margin-top 40px, `14px`. Items: `→ read the blog` (FR: `→ lire le blog`) → `/blog`; `LinkedIn` → https://linkedin.com/in/remihuguet/; `Email` → mailto:me@remihuguet.dev; `RSS` → /rss.xml. All colored `--accent`, hover `--accent2`.

**Behavior:** headline animation loops forever (respect `prefers-reduced-motion`: show the full static string, no caret animation, if reduced).

### 1d — Blog index (`/blog`)
**Purpose:** Minimal, scannable list of posts with big titles.

**Layout:** Centered column, prototype padding `60px 56px`.

**Components:**
1. **Path eyebrow** — JetBrains Mono `13px`, `--muted`: `~/remi/blog`.
2. **Page title** — Newsreader `44px`, weight 500, letter-spacing -.01em, `--fg`. EN: "writing". FR: "le blog".
3. **Intro** — JetBrains Mono `15px`, `--muted`, max-width 520px, line-height 1.6. EN: "Notes on software, craft, teams, and the occasional rabbit hole." FR: "Notes sur le logiciel, le craft, les équipes, et quelques digressions."
4. **Post list** — each row is a link (`/blog/:slug`), `margin-top 38px` on the list, each row `padding: 28px 0`, separated by a `1px solid --soft` top border. Row layout: CSS grid, `grid-template-columns: 108px 1fr; gap: 28px`.
   - **Date column:** JetBrains Mono `13px`, `--muted`, `padding-top: 8px`. Format `YYYY-MM-DD`.
   - **Body column:**
     - **Title** — Newsreader `26px`, weight 500, `--fg`, letter-spacing -.01em.
     - **Excerpt** — Newsreader `17px`, line-height 1.55, `--muted`, margin-top 8px.
     - **Meta row** — flex gap 16px, margin-top 12px, `12px`. Tags in `--accent` (e.g. `#craft #tdd`), reading time in `--muted` (e.g. `9 min`).
   - Hover: whole row is clickable; suggested hover = title shifts to `--accent` (prototype leaves color inherited — add a subtle hover in production).

**Sample data (placeholder — replace with real posts):**
| date | title | tags | read |
|---|---|---|---|
| 2025-11-02 | Why I stopped calling myself a freelancer | #career | 6 min |
| 2025-09-18 | TDD is a design tool, not a testing tool | #craft #tdd | 9 min |
| 2025-06-04 | Managing without losing the keyboard | #management | 7 min |
| 2025-03-21 | Domain-driven design for small teams | #ddd #architecture | 11 min |
| 2024-12-10 | From a physics PhD to shipping software | #personal | 5 min |

### 1e — Article detail (`/blog/:slug`)
**Purpose:** Comfortable long-form reading.

**Layout:** Centered reading column, **max-width 640px**, prototype outer padding `56px 0 64px` with inner `0 48px`.

**Components (top → bottom):**
1. **Back link** — JetBrains Mono `13px`, `--muted`: `← ~/remi/blog` → `/blog`.
2. **Meta line** — JetBrains Mono `13px`, `--muted`, margin-top 26px: `2025-09-18 · 9 min · ` then tags in `--accent` (`#craft #tdd`).
3. **Title** — Newsreader `40px`, weight 500, line-height 1.15, letter-spacing -.01em, `--fg`, margin-top 14px.
4. **Lead paragraph** — Newsreader `19px`, line-height 1.7, `--dim`, margin-top 30px.
5. **Section heading (h2)** — JetBrains Mono `16px`, weight 600, `--fg`, margin-top 40px, prefixed with `## ` rendered in `--accent`.
6. **Body paragraph** — Newsreader `19px`, line-height 1.7, `--dim`.
7. **Code block** — `<pre>`, `background:--code`, `1px solid --soft`, radius 10px, padding `18px 20px`, JetBrains Mono `13px`, line-height 1.65, `--dim`. Comments in `--muted`, keywords (e.g. `assert`) in `--green`. Horizontal scroll on overflow.
8. **Blockquote** — Newsreader italic `20px`, line-height 1.6, `--fg`, `border-left: 2px solid --accent`, `padding: 6px 0 6px 22px`, margin-top 28px.
9. **Author footer** — margin-top 44px, `padding-top 24px`, `border-top: 1px solid --soft`, flex align-center gap 16px. Avatar: `40×40` circle, `background:--avatar`, `1px solid --border`, centered `~` glyph in `--accent` `14px`. Text block: JetBrains Mono `13px`, `--muted`: "Rémi Huguet · product engineer & manager" then a line with `LinkedIn` · `Email` links.

Map these styles to a reusable prose/markdown renderer so real article content (written in Markdown/MDX) renders with the same treatment.

## Interactions & Behavior
- **Theme toggle:** switches `data-theme` on the root; persist to localStorage; initialize from stored value or `prefers-color-scheme`. Soft `transition` on bg/color (~.3s).
- **Language toggle (EN/FR):** swaps the bilingual strings listed above; persist choice; consider `<html lang>` + hreflang.
- **Headline typewriter (landing):** loop described in 1a. Gate behind `prefers-reduced-motion: no-preference`.
- **Caret blink:** CSS `@keyframes blink` step animation.
- **Row/link hovers:** links `--accent → --accent2`; add a post-row hover state.
- No modals, no forms, no data fetching beyond loading post content/list.

## State Management
- `theme`: 'dark' | 'light' (persisted).
- `lang`: 'en' | 'fr' (persisted).
- Landing headline typing state (local to the component).
- Blog: list of posts (from the content layer / filesystem / CMS); article: single post by slug.

## Assets
- **Fonts:** JetBrains Mono + Newsreader via Google Fonts (link above).
- **No images** in these three pages. The old avatar/portrait and logo clouds from the current site are **not** used here.
- Icons: none required — links are plain text. If you want icons for LinkedIn/RSS, source from an icon set of your choice; keep them monochrome and understated.
- RSS: `/rss.xml` should be generated by the blog stack.

## Screenshots
Reference renders of each page in both themes (accent = orange), in `screenshots/`:
- `landing-dark.png` / `landing-light.png` — 1a landing
- `blog-list-dark.png` / `blog-list-light.png` — 1d blog index
- `article-dark.png` / `article-light.png` — 1e article detail

## Files
- `Redesign Explorations.dc.html` — the HTML design reference (artboards 1a landing, 1d blog list, 1e article). Open in a browser to see it live (it self-loads its runtime). Read it for exact inline styles if any measurement here is ambiguous.
