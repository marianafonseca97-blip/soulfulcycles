# soulfulcycles.pt — instructions for AI agents

<!-- Same content as CLAUDE.md. Keep both files in sync. A Portuguese guide for Mariana is in GUIA.md. -->

Static website of **Mariana Fonseca**, sex educator in Lisbon and founder of **Soulful Cycles**.
Plain HTML/CSS/JS, **no build step**. Hosted on **Cloudflare Pages**, deployed automatically from the `main` branch of
GitHub `marianafonseca97-blip/soulfulcycles`. Mariana is not technical and writes in Portuguese (Portugal);
reply to her in Portuguese, in plain language.

## The one rule that matters most

**Every page exists twice: Portuguese at the root, English under `/en/`.**
Any change to text, prices, dates, photos, links or testimonials must be made in **both** files
(unless Mariana explicitly says only one language). The `data-i="…"` attributes in the HTML are leftovers
from an old translation system: harmless, leave them, they do nothing now.

| Page | Portuguese file → URL | English file → URL |
|---|---|---|
| Homepage | `index.html` → `/` | `en/index.html` → `/en/` |
| Trips | `viagens.html` → `/viagens` | `en/trips.html` → `/en/trips` |
| Hen parties, birthdays & other celebrations | `celebracoes.html` | `en/celebrations.html` |
| Schools & universities | `escolas.html` | `en/schools.html` |
| Online counselling | `aconselhamento.html` | `en/counselling.html` |
| Trainings | `formacoes.html` | `en/trainings.html` |
| Recorded sessions library | `sessoes-gravadas.html` | `en/recorded-sessions.html` |
| Clothing collection | `colecao.html` | `en/collection.html` |
| About | `sobre-mim.html` | `en/about.html` |
| Podcast & interviews (podcast, press, interviews) | `podcast-e-entrevistas.html` | `en/podcast-and-interviews.html` |
| Recommendations | `recomendacoes.html` | `en/recommendations.html` |
| Privacy policy | `privacidade.html` | `en/privacy.html` |
| Terms and conditions (all services: booking, payment, cancellation) | `termos.html` | `en/terms.html` |
| Error page (PT only) | `404.html` | — |

`404.html` contains a **copy of the homepage service cards** (with prices and the next trip). Update it too
when those cards change.

## Shared files

- `base.css` — colours, self-hosted fonts (`/fonts`, Gloock / Figtree / DM Mono), nav, language switch.
- `site.css` — all page styles (cards, galleries, FAQ, forms, price boxes…). `recomendacoes.html` and
  `en/recommendations.html` use `base.css` plus their own inline `<style>`.
- `site.js` — mobile menu, PT/EN switch (navigates between the two versions using the
  `<link rel="alternate" hreflang>` tags in each page's `<head>`), contact form and waitlist (Web3Forms),
  and service buttons that pre-select the form subject (`data-topic`).
  **If you change `site.js`, bump the version in every page:** `site.js?v=2` → `site.js?v=3`.
  Same for `site.css` and `base.css` (`?v=N` → `?v=N+1`): the host caches CSS for 4 hours, so without a new version
  visitors (and Mariana) keep seeing the old styles.
- `_redirects` — real redirects only (old recommendations URL, internal guides). Cloudflare Pages serves clean URLs (`/viagens` → `viagens.html`) by itself, so no rewrite lines are needed.
  New pages need no `_redirects` line.
- `sitemap.xml`, `robots.txt` — add every new page (both languages) to the sitemap.

## Conventions

- **Image file names: lowercase, no spaces** (`foto-dublin.jpg`). The host is case-sensitive; mixed case broke images before.
- **Images:** JPG, max ~1600 px on the longest side, ideally under ~400 KB. iPhone photos (HEIC) must be converted.
  Gallery images use `loading="lazy" decoding="async"`; the main image at the top of a page does not.
- **Alt text:** Portuguese in Portuguese pages, English in English pages. Never name a person in an alt text
  unless it is Mariana and you are sure.
- In English pages all links and assets are **root-relative** (`/base.css`, `/foto.jpg`, `/en/trips`).
  Portuguese pages use plain relative paths for assets.
- `index.html` uses **CRLF** line endings; keep them.
- Each page `<head>` has: title, description, Open Graph tags (own `og:image` per service page),
  `canonical`, and `hreflang` alternates (pt-PT, en, x-default). Keep them consistent when adding pages.
- `index.html` contains the Google Search Console verification meta tag: **do not remove it**.

## Content rules

- **Never invent facts** (prices, dates, durations, places, who can join, what is included). Ask Mariana.
- **Testimonials are anonymous.** Only a role and service, e.g. "Cliente · Sessão de aconselhamento" /
  "Client · Counselling session". Never add names. Light punctuation fixes only; keep the person's words.
  The homepage carousel has a curated selection (one per service, currently 8); each service page shows
  all testimonials for that service.
- Photos that show other people's faces: check with Mariana that they agreed.
- **Current facts** (update this list when they change):
  - Schools: €40 per hour, sessions of at least 1h30, single session or a series per class,
    from primary school to university, anonymous form for students' questions.
  - Counselling: online via Google Meet, individuals or couples, 1h–1h30 (depends on the session). Individual €40, couple €60; individual packages: 2 for €75, 3 for €110, 4 for €140. Paid when booking, by MB WAY, Revolut or bank transfer; free rescheduling up to 24h before.
  - Next trip: Dublin, March 2027, 4 days, exact dates set together with the group, €150 deposit to secure a spot, refunded if the trip does not go ahead, €375 (min. 3, max. 6 people; flights ~€150 and accommodation ~€150 not included).
  - Recorded sessions library: €10/month, no commitment, over 100 recorded sessions.
  - Clothing: second-hand pieces, each one unique; orders open from time to time (waitlist).
  - Cancellation policies (full text in `termos.html` / `en/terms.html`, summaries in each service FAQ):
    counselling: refund or reschedule >24h, <24h or no-show counts as done; packages valid 6 months, unused sessions refunded (used ones at €40).
    trips: €150 deposit (refunded if trip doesn't happen); participant cancels >60 days: refund minus deposit; 60–30 days: 50%; <30 days: none unless spot is taken.
    celebrations: 30% deposit; >15 days: refund minus deposit; <15 days: none. schools/trainings: reschedule with 7 days' notice.
  - Contact: marianafonseca.97@gmail.com · Instagram @soulfulcycles · trips WhatsApp group.

## Services connected to the site

- **Web3Forms** — contact form and clothing waitlist send emails to Mariana. The access key in the HTML is public by design.
- **Stripe** — payment link (`buy.stripe.com/…`) for the Recorded Sessions Library subscription (€10/month) and customer portal link (`billing.stripe.com/p/login/…`) to manage/cancel; both are on `sessoes-gravadas.html` / `en/recorded-sessions.html`. Mariana shares the Google Drive folder with the buyer's Google email within 48h. Terms are in `termos.html` / `en/terms.html`. Subscribe/manage links carry `data-goatcounter-click` attributes for click counting.
- **GoatCounter** — cookie-free visitor statistics (`marianafonseca.goatcounter.com`).
- **Google Search Console** — verified via meta tag in `index.html`.
- If a new tool collects data or is loaded from another site, update `privacidade.html` **and** `en/privacy.html`.

## Before finishing a change

1. Both language versions updated (and `404.html` if the homepage cards changed).
2. No broken image paths (check exact file names, lowercase).
3. Explain to Mariana, in Portuguese, what changed and on which pages.
