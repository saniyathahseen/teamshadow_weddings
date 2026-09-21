# Teamshadow Weddings

Teamshadow Weddings is a Vite and React website for wedding photography, cinematic films, pre-wedding shoots, and event enquiries.

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- React Router
- React Hook Form and Zod

## Development

```bash
npm ci
npm run dev
```

The development server starts with route messaging enabled for the hosting preview environment. Use `npm run build` to create a production build and `npm run preview` to serve it locally.

## Validation

```bash
npm run lint
npx tsc --noEmit -p tsconfig.app.json --strict
npm run build
```

See [Integration.md](./Integration.md) for the current frontend, contact, backend, and deployment integration status.

## Project structure

```text
src/
  config/site.ts       # global routes, brand, and contact settings
  assets/images.ts     # remote image catalog
  components/          # shared page and UI components
  hooks/               # reusable React hooks
  lib/index.ts         # typed business content
  lib/motion.ts        # animation presets
  pages/               # route-level screens
  App.tsx              # providers and routes
public/                # files copied unchanged to the deployed site
```

Update `src/config/site.ts` for global business details and `src/lib/index.ts` for repeated page content.
