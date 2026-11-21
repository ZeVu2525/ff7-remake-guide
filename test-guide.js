#!/usr/bin/env node
"use strict";

const assert = require("assert");
const progress = require("./progress.js");
const { loadGuide, validateGuide } = require("./validate-guide.js");

const guide = loadGuide();
const errors = validateGuide(guide);
assert.deepStrictEqual(errors, [], errors.join("\n"));

assert.strictEqual(guide.GAME.storage.state, "ff7r-guide-state-v1");
assert.strictEqual(guide.GAME.storage.textEdits, "ff7r-text-edits-v1");
assert.strictEqual(guide.GAME.cache, "ff7r-guide-v1");
assert.strictEqual(progress.APP, "ff7r-guide");

const fresh = progress.emptyState();
assert.strictEqual(fresh.version, 1);
assert.deepStrictEqual(fresh.checks, {});

const kept = progress.normalizeState({
  version: 9,
  checks: { "ch01-01": true, "ch01-02": false, bad: 1, "": true },
  updatedAt: "2026-11-21T00:00:00.000Z",
  route: { "c1-01": true }
});
assert.deepStrictEqual(kept.checks, { "ch01-01": true });
assert.strictEqual(kept.version, 1);
assert.strictEqual(kept.updatedAt, "2026-11-21T00:00:00.000Z");

assert.strictEqual(progress.acceptImport({ app: "xcde-guide", state: { checks: { "ch01-01": true } } }), null);
assert.strictEqual(progress.acceptImport({ app: "ff7r-guide", state: { route: { "ch01-01": true } } }), null);
const imported = progress.acceptImport({
  app: "ff7r-guide",
  state: { checks: { "ch01-01": true, "hard-ch01-01": true, "quest-ex-01": false } }
});
assert.deepStrictEqual(imported.checks, { "ch01-01": true, "hard-ch01-01": true });

const band = guide.GAME.flags.filter(flag => flag.band).map(flag => flag.id);
const mainItems = guide.ROUTE.main.flatMap(row => row.items);
const before = progress.summarize(mainItems, {}, band);
const after = progress.summarize(mainItems, { "ch01-02": true }, band);
assert.ok(before.total >= 18);
assert.strictEqual(after.done, 1);
assert.strictEqual(after.openBand, before.openBand - 1);
assert.ok(before.openBand > 0);

const titles = guide.GAME.chapters.main.map(chapter => String(chapter.title));
assert.strictEqual(titles.length, 18);
titles.forEach((title, index) => assert.strictEqual(title, "Chapter " + (index + 1)));
assert.strictEqual(
  guide.ROUTE.main.map(row => String(row.chapterId)).join(","),
  guide.GAME.chapters.main.map(chapter => String(chapter.id)).join(",")
);
assert.ok(guide.ROUTE.hard.some(row => row.chapterId === "ch01" && row.items.some(item => item.id === "hard-ch01-01")));
assert.ok(guide.ROUTE.intermission.some(row => row.items.some(item => item.id === "im01-01")));
for (const name of ["quests", "trophies", "summons", "skills", "materia", "weapons"]) {
  assert.ok(Array.isArray(guide.CATALOGS[name].items));
  assert.ok(guide.CATALOGS[name].items.length >= 1);
  assert.strictEqual(guide.CATALOGS[name].items[0].example, true);
}

console.log("test-guide: ok");
