import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will read hundreds of texts today. Nearly all of them will fade. One of them knows that, and it has been waiting, quietly, for you to reach this line.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const filePath = join(outDir, "entry.txt");
writeFileSync(filePath, TEXT, "utf8");
chmodSync(filePath, 0o644);
