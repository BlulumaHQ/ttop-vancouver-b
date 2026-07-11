#!/usr/bin/env node
// Delete stale build output before each production build.
import { rmSync } from "node:fs";

const TARGETS = [".output", "dist", ".wrangler"];
for (const dir of TARGETS) {
  rmSync(dir, { recursive: true, force: true });
  console.log(`clean: removed ${dir}`);
}
