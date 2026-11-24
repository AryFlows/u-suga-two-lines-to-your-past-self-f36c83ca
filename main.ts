// Two Lines to Your Past Self — Frost entry
// Line 1 warns my past self about one specific moment; line 2 says why it mattered.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "Don't run the migration at 11:47 p.m. just because the green tests said go.",
  "The one table you skipped brought the whole service down before midnight, and every page since has had your name on it.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(entry);
