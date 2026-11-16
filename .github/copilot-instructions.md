# Working in this repository

A scratch area for design experiments. Astro, static, deployed to GitHub
Pages at https://logorunner.github.io/Test-Design-Area/

## Never commit to `main`

Work on a branch and open a pull request. `main` deploys straight to the
live Pages site the moment anything lands on it, and more than one person
works here — pushing to `main` directly causes the collisions this rule
exists to prevent.

```
git switch -c some-short-name
# …changes…
git push -u origin some-short-name
gh pr create --fill
```

If a push is rejected because the remote has moved, **rebase, do not force**:
`git pull --rebase origin main`

## Where things go

- `src/pages/*.astro` — a file here becomes a page at that path
- `public/*` — copied through untouched and served as-is. A single
  self-contained HTML file with inline CSS and JS belongs here, not
  rewritten as a component
- `src/layouts/` — shared page chrome

## Things that will bite

- This is a **project page** served from `/Test-Design-Area`, not from the
  root. Links must carry `import.meta.env.BASE_URL` or they 404 once
  deployed, while working perfectly on localhost
- Astro **scopes `<style>`** by adding an attribute to markup it can see.
  Elements created in JavaScript never get it, so those rules silently miss.
  Use `:global()` for anything the page builds at runtime
- `<script>` is bundled and runs **once**. With view transitions, navigating
  back does not re-run it. Use `is:inline`, or hook `astro:page-load`

## Before opening a PR

`npm run build` must pass. The build check runs it anyway, but finding out
locally is quicker.
