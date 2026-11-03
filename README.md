# Portfolio — Thony Rasolofondraibe

Angular 22 · Standalone components · SCSS · No UI library.

## Install & run

```bash
npm install
npm start          # http://localhost:4200
```

## Build

```bash
npm run build      # output → dist/portfolio/
```

## Deploy

### GitHub Pages
```bash
npm run build -- --base-href /your-repo-name/
# Copy dist/portfolio/browser/ to the gh-pages branch.
# Add a 404.html that is a copy of index.html so Angular routing works on hard refresh.
```

### Vercel
Import the repo. Set:
- Build command: `npm run build`
- Output directory: `dist/portfolio/browser`
- Add a rewrite rule: `/* → /index.html` (status 200) in `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Add a new project

1. Add an object to `src/app/data/projects.ts` following the `Project` interface.
2. Drop screenshots in `src/assets/projects/<slug>/`.
3. Reference them in the `images` array of the project object.

That's it — the home page and routing update automatically.

## Placeholders to fill in

| Placeholder | File | What to put |
|---|---|---|
| `[GITHUB_URL_RAG]` | `src/app/data/projects.ts` | GitHub URL for "Système RAG local" |
| `[IMAGES_RAG]` | `src/app/data/projects.ts` + `src/assets/projects/rag-local/` | 2–4 screenshots |
| `[IMAGES_PAIEMENT]` | `src/app/data/projects.ts` + `src/assets/projects/paiement-mobile-money/` | Schemas / diagrams |
| `[IMAGES_ECOMMERCE]` | `src/app/data/projects.ts` + `src/assets/projects/modules-ecommerce/` | Screenshots |
| GitHub URL (footer) | `src/app/components/footer/footer.ts` → `GITHUB_URL` | Your GitHub profile URL |
| LinkedIn URL (footer) | `src/app/components/footer/footer.ts` → `LINKEDIN_URL` | Your LinkedIn profile URL |
