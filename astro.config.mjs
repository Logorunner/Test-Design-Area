// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Static build. Nothing runs on the server, so there's nothing to patch.
  output: "static",
});
