# To-Do List — Teamshadow Weddings

Last updated: 2026-09-16. Verified: `npx tsc --noEmit` ✅, `npm run lint` ✅ (0 errors, 24 pre-existing warnings), `npm run build` ✅.

## Completed (this cleanup pass)
- [x] Explain codebase (see `README.md` + `INTEGRATION.md`)
- [x] Remove unwanted code/files: `src/api/demo.ts`, `src/pages/home/`, `src/pages/not-found/`, `examples/third-party-integrations/`, dead Blog newsletter form, dead imports (`QueryClient`, `fadeInUp`, `COMPANY_INFO` in Pricing, `iconMap` in Services, unused `error` binding)
- [x] Remove unused dependencies: `axios`, `@tanstack/react-query`, `@supabase/supabase-js`, `zustand`, `date-fns`, `@iconify/react`
- [x] Confirm no backend dependency: no `src/api/*`, no axios/fetch, no Supabase client, no QueryClient in `src/`
- [x] Fix routing gaps: add `src/pages/BlogPost.tsx` (`/blog/:slug`), replace `<a href="/contact">` with `Link + ROUTE_PATHS`
- [x] Fix Portfolio double filter + Home duplicate filters: `GalleryGrid` is now controlled (`activeCategory`/`onCategoryChange`/`showFilters`); Portfolio owns pills, Home hides them
- [x] Centralize WhatsApp number: `WhatsAppButton` now uses `SOCIAL_LINKS.whatsapp`
- [x] Update `index.html` title/meta/OG (was "Skywork Generated Project")
- [x] Update docs: `README.md` rewritten, `INTEGRATION.md` created

## Pending — before production (owner action, not code bugs)
- [ ] Replace `SOCIAL_LINKS` phone/whatsapp/email/instagram in `src/lib/index.ts` with real business values
- [ ] Replace `public/placeholder.svg`, favicon, and Unsplash demo photos (`src/assets/images.ts`) with licensed images
- [ ] Add privacy/terms pages if running ads (`robots.txt` is permissive)
- [ ] Optional: remove unused shadcn scaffolding under `src/components/ui/` (only `button`, `card`, `input`, `textarea`, `label`, `select`, `toast`/`toaster`, `sonner`, `tooltip` are imported today)
- [ ] Optional: trim `react-router-dom-proxy` + CDN-image Babel code in `vite.config.ts` if no longer needed
- [ ] Optional: wire a real backend later — create `supabase/functions/<name>/index.ts`, call via `fetch`, keys in `.env` as `VITE_*` (never commit secrets)

## End-to-end re-check (manual, 5 min)
- [ ] `npm install && npm run dev` → http://localhost:8080
- [ ] Visit every nav link; open a blog card → detail → back
- [ ] Portfolio: switch category pills; open lightbox; close with X / backdrop / Esc
- [ ] Contact: submit empty (see errors) → fill → submit → WhatsApp opens with inquiry → toast appears
- [ ] `npm run build && npm run preview` serves the production bundle
