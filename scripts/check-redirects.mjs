#!/usr/bin/env node
// Guard against reintroducing a _redirects file.
// TanStack Start SSR on Cloudflare Workers must not ship Netlify-style
// _redirects rules — Cloudflare rejects the SPA fallback as an infinite loop.
import { readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const IGNORE = new Set([
  ".git",
  "node_modules",
  ".output",
  "dist",
  ".wrangler",
  ".nitro",
  ".tanstack",
  ".vinxi",
]);

const offenders = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (IGNORE.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (name === "_redirects") offenders.push(full);
  }
}

walk(process.cwd());

const buildOutputRedirects = ".output/public/_redirects";
if (existsSync(buildOutputRedirects)) {
  offenders.push(buildOutputRedirects + " (build output)");
}

if (offenders.length) {
  console.error(
    "Redirect audit FAILED — _redirects is not permitted in this TanStack Start Cloudflare Worker project:\n" +
      offenders.map((f) => "  ✗ " + f).join("\n"),
  );
  process.exit(1);
}
console.log("Redirect audit OK — no _redirects files in source or build output.");
