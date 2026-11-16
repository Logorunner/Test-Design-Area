# Test Design Area

A place to play. Astro, static, no CMS, no server.

## Running it

```bash
npm install     # once
npm run dev     # http://localhost:4321
```

## Where things go

- `src/pages/*.astro` — each file becomes a page at that path
- `public/*` — copied through untouched. `public/dots.html` is served at
  `/dots.html` exactly as written, which is the right place for a
  self-contained experiment that doesn't need Astro's help

## Building

```bash
npm run build   # writes dist/
npm run preview # serves dist/ to check it before it goes anywhere
```
