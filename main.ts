import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The phone dies mid-word on purpose: the trailing hyphen is its last breath.
const entry =
  "1%. Your charger was in your jacket pocket the whole time. I watched you tear the house apart and said nothing. I'm taking your search history to the grave. Goodb-";

if (entry.length === 0 || entry.length > 195 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-195 characters, got ${entry.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
