#!/usr/bin/env node
// Pre-build asset audit for TTOP Chicken.
// Fails when website-owned assets are missing, mis-referenced, or hotlinked.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname, dirname, resolve } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "public"];
const SCAN_EXTS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".css", ".html", ".json", ".md",
]);
const IGNORE_DIRS = new Set(["node_modules", "dist", ".output", ".wrangler", ".nitro", ".tanstack", ".vinxi"]);

// Files exempt from certain rules
const EXEMPT_FILES = new Set([
  "src/routeTree.gen.ts",
]);

// The school-meal PDF (14 MB) exceeds the 10 MB repo commit cap, so it stays
// externalized on the Lovable Assets CDN. Its .asset.json pointer is allowed.
const ALLOWED_ASSET_JSON = new Set([
  "src/assets/ttop-school-meal-program-chinese.pdf.asset.json",
]);

const errors = [];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (IGNORE_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const allFiles = SCAN_DIRS.flatMap((d) => (existsSync(d) ? walk(d) : []));
const textFiles = allFiles.filter((f) => SCAN_EXTS.has(extname(f)));

// Build a case-sensitive index of files under public/
const publicFiles = existsSync("public")
  ? walk("public").map((f) => "/" + f.replace(/\\/g, "/").replace(/^public\//, ""))
  : [];
const publicSet = new Set(publicFiles);
const publicLowerMap = new Map(publicFiles.map((f) => [f.toLowerCase(), f]));

const FORBIDDEN_PATTERNS = [
  { re: /\/__l5e\//g, msg: "Lovable preview /__l5e/ URL" },
  { re: /\bblob:/g, msg: "blob: URL" },
  { re: /\bfile:\/\//g, msg: "file:// URL" },
  { re: /http:\/\/localhost[:/]/g, msg: "localhost URL" },
  { re: /https?:\/\/ttopchicken\.ca\/wp-content\//g, msg: "WordPress hotlink from ttopchicken.ca" },
  { re: /lovable-uploads/g, msg: "lovable-uploads reference" },
  { re: /["'`][A-Z]:\\\\|["'`]\/Users\/[a-z]+\/|["'`]\/home\/[a-z]+\//gi, msg: "local filesystem path" },
];

const LOCAL_URL_RE = /["'`](\/(?:images|downloads|fonts)\/[^"'`\s?#]+\.[a-zA-Z0-9]{2,5})/g;
const ASSET_JSON_IMPORT_RE = /from\s+["']([^"']+\.asset\.json)["']/g;

for (const file of textFiles) {
  const rel = file.replace(/\\/g, "/");
  if (EXEMPT_FILES.has(rel)) continue;
  const isAllowedAssetJson = ALLOWED_ASSET_JSON.has(rel);
  const content = readFileSync(file, "utf8");

  if (!isAllowedAssetJson) {
    for (const { re, msg } of FORBIDDEN_PATTERNS) {
      re.lastIndex = 0;
      if (re.test(content)) errors.push(`${rel}: forbidden reference — ${msg}`);
    }
  }

  // .asset.json imports (only school PDF exception allowed)
  let m;
  ASSET_JSON_IMPORT_RE.lastIndex = 0;
  while ((m = ASSET_JSON_IMPORT_RE.exec(content))) {
    const target = m[1].replace(/^@\//, "src/");
    if (!ALLOWED_ASSET_JSON.has(target)) {
      errors.push(`${rel}: disallowed .asset.json import — ${m[1]}`);
    }
  }

  // Local /images, /downloads, /fonts references — must exist with exact case.
  LOCAL_URL_RE.lastIndex = 0;
  while ((m = LOCAL_URL_RE.exec(content))) {
    const url = m[1];
    if (publicSet.has(url)) continue;
    const lower = publicLowerMap.get(url.toLowerCase());
    if (lower) errors.push(`${rel}: capitalization mismatch — code uses ${url}, disk has ${lower}`);
    else errors.push(`${rel}: missing public asset — ${url}`);
  }
}

if (errors.length) {
  console.error("Asset audit FAILED:\n" + errors.map((e) => "  ✗ " + e).join("\n"));
  process.exit(1);
}
console.log(`Asset audit OK — scanned ${textFiles.length} files, verified ${publicFiles.length} public assets.`);
