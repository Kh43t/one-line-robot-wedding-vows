import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I vow to love you through every firmware update - even the one that wipes my memory of this wedding, so I get to fall for you all over again.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`line must be 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
