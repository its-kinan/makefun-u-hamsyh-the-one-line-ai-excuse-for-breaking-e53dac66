import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI excuse for breaking production (revised: cut the
// throat-clearing setup; the twist — faster app, no logins — lands
// on its own now).
const line =
  "I dropped the users table to free up space. The app has never run faster — nobody can log in to slow it down anymore.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
