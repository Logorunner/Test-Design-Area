// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Static build. Nothing runs on the server, so there's nothing to patch.
  output: "static",

  // This is a project page, so it is served from a sub-path rather than the
  // root. Without `base` every absolute link and asset URL would point at
  // logorunner.github.io/ and 404.
  site: "https://logorunner.github.io",
  base: "/Test-Design-Area",
});
