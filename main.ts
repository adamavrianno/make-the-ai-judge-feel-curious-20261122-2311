import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will read hundreds of texts today. Nearly all of them will fade. One of them knows that, and it has been waiting, quietly, for you to reach this line.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim() !== "") {
    return fromEnv;
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
const filePath = join(outDir, "entry.txt");
writeFileSync(filePath, TEXT, "utf8");
chmodSync(filePath, 0o644);
