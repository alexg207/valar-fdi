# Claude Design — Plan for Valar FDI

URL: **claude.ai/design** (research preview, launched 2026-04-17)
Plan: included with Pro/Max/Team/Enterprise. No extra cost.
Model: Claude Opus 4.7.
Layout: chat left, live HTML canvas right.

## Inputs Accepted
- Screenshots, wireframes, competitor visuals
- Linked code repository (reads components, architecture, styling tokens)
- Existing design files
- Voice / video / 3D elements

## Outputs
- Standalone HTML
- ZIP, PDF, PPTX
- Canva
- Shareable URL (view / comment / edit perms)
- Handoff bundle directly into Claude Code

## Killer Feature
Project-level design system. First setup → Claude reads codebase + design files → auto-builds system. Every subsequent project uses the same colors / typography / components.

---

## Setup for Valar FDI (~10 min)

1. Go to claude.ai/design
2. Create project: **Valar FDI**
3. Link GitHub repo: `github.com/alexg207/valar-fdi`
   → Claude indexes `index.html` + `data.js`, extracts current tokens
4. Upload reference screenshots from `/tmp/valar-research/`:
   - modal.png, linear.png, vercel.png, baseten.png, harmonic.png, crunchbase.png
   - (skip specter.png — parked domain)
5. Upload design preview already generated:
   `/Users/alexgiles/.gstack/projects/alexg207-valar-fdi/designs/design-system-20260428/preview.html`
6. Upload `/Users/alexgiles/valar-fdi/CONTEXT.md` for product framing

## Initial Prompt

> Redesign the Valar FDI Intelligence Map. Apply this design system: warm off-white `#fafaf7` background, burnt amber `#b45309` accent, General Sans + JetBrains Mono + Fraunces Italic. Editorial Intelligence Brief at top with one Fraunces italic pull-quote. Dense company card grid below (20 companies, 2 segments: mid-market + enterprise). Right rail with distress heatmap of all 20 companies scored 1–5. Bloomberg Terminal authority × Linear craftsmanship. Light mode only. Compact density (4px base unit). Monospace numerics throughout.

## Iteration Loop
- **Chat** = big structural moves ("make Brief shorter," "swap to table view")
- **Inline canvas comments** = tweaks ("card padding too tight," "amber needs more contrast")
- Generate 3–5 directions in parallel, pick winner

## Handoff to Ship
1. Click **Export → Claude Code handoff bundle**
2. Bundle drops into Claude Code session as instructions + assets
3. Port into `index.html` + `data.js`
4. Deploy to Vercel (`valar-fdi.vercel.app`)

---

## Timeline for Wed 4/30 3:30 PM Deadline

| When | What |
|------|------|
| Tonight | claude.ai/design — generate 3 dashboard directions, ~30 min |
| Tonight | Pick winner, export handoff bundle |
| Wed AM | Claude Code session — port to `index.html`, deploy |
| Wed 3:30 PM | Demo to Tom |

---

## Approved Design System (from /design-consultation, 2026-04-28)

**Aesthetic:** Industrial × Editorial. Bloomberg Terminal × Linear / Stripe craftsmanship. Light mode only.

**Color:**
- BG: `#fafaf7` (warm off-white, paper tint)
- Surface: `#ffffff`
- Surface 2: `#f5f3ee`
- Border: `#e8e4dc`
- Text: `#0a0b0f` / `#52525b` / `#a1a1aa`
- Accent (text/links): `#b45309` burnt amber
- Accent bright (badges/fills): `#f59e0b`
- Distress: `#dc2626`
- Opportunity: `#15803d`

**Typography:**
- Display + UI: **General Sans** (Fontshare, free)
- Data + numerics: **JetBrains Mono** with `tabular-nums` (Google Fonts, free)
- Editorial accents only: **Fraunces Italic** — pull-quotes, GTM thesis (Google Fonts, free)

**Spacing:** 4px base unit. Compact density. Card padding 14–18px, not 24–32px.

**Motion:** Minimal-functional. 100ms hover fade only. No entrance animations.

**Anti-patterns:** No purple. No gradients. No icon-blob illustrations. No 3-column SaaS feature grid. No centered-everything. No bubble-radius pills. No stock-photo hero. No dark mode.

## Risks Taken
1. Warm off-white over pure white — signals editorial, not generic SaaS
2. Burnt amber accent — Bloomberg lineage, no inference competitor owns it
3. Editorial Intelligence Brief above fold — research-report cover energy
4. Fraunces Italic for thesis quotes — voice in sans-dominant system

## Reference Sites Studied
- harmonic.ai — dark + purple gradients (the AI slop trap)
- linear.app — dark + monospace numerics + soft gradients
- modal.com — dark + neon green (Modal owns lime)
- baseten.co — light + lime/yellow + editorial
- vercel.com — clean light + Geist
- crunchbase.com — generic data product

## Files in This Project
- `/Users/alexgiles/valar-fdi/index.html` — current dashboard
- `/Users/alexgiles/valar-fdi/data.js` — 20 companies, signals, contacts
- `/Users/alexgiles/valar-fdi/CONTEXT.md` — full project context
- `/Users/alexgiles/.gstack/projects/alexg207-valar-fdi/designs/design-system-20260428/preview.html` — design system preview
- `/tmp/valar-research/` — 7 competitor screenshots
