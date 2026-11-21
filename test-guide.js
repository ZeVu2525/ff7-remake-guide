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
const bandItem = mainItems.find(item => band.includes(item.flag));
assert.ok(bandItem, "期限か取り逃しが1件以上ある");
const before = progress.summarize(mainItems, {}, band);
const after = progress.summarize(mainItems, { [bandItem.id]: true }, band);
assert.ok(before.total >= 18);
assert.strictEqual(after.done, 1);
assert.strictEqual(after.openBand, before.openBand - 1);
assert.ok(before.openBand > 0);

for (const id of ["trophy", "item", "tips"]) {
  const flag = guide.GAME.flags.find(item => item.id === id);
  assert.ok(flag && flag.chip, id);
  assert.ok(mainItems.some(item => item.flag === id), id);
}
for (let number = 1; number <= 18; number += 1) {
  const trophyId = "trophy-ch" + String(number).padStart(2, "0");
  assert.ok(mainItems.some(item => item.flag === "trophy" && item.trophy === trophyId), trophyId);
}

const trophyNames = guide.CATALOGS.trophies.items.map(item => item.name);
assert.strictEqual(trophyNames.length, 54);
assert.strictEqual(trophyNames[0], "運命の覇者");
assert.strictEqual(guide.CATALOGS.trophies.items[0].detail, "すべてのトロフィーを獲得した");
assert.strictEqual(guide.CATALOGS.trophies.items[0].auto, "rest");
assert.ok(guide.CATALOGS.trophies.items.every(item => item.example !== true));
assert.strictEqual(guide.CATALOGS.trophies.items[5].name, "プランＥ展開");
assert.strictEqual(guide.CATALOGS.trophies.items[11].name, "亡霊の墓場");

const meta = {
  cardToTrophy: { "card-a": "trophy-one", "card-b": "trophy-one" },
  trophyToCards: { "trophy-one": ["card-a", "card-b"] },
  trophyIds: ["trophy-all", "trophy-one", "trophy-two"],
  platinumId: "trophy-all"
};
let synced = progress.applyToggle({}, "card-a", true, meta);
assert.strictEqual(synced["card-a"], true);
assert.strictEqual(synced["trophy-one"], true);
synced = progress.applyToggle(synced, "card-b", true, meta);
synced = progress.applyToggle(synced, "card-a", false, meta);
assert.strictEqual(synced["trophy-one"], true);
assert.strictEqual(synced["card-b"], true);
synced = progress.applyToggle(synced, "card-b", false, meta);
assert.strictEqual(synced["trophy-one"], undefined);
synced = progress.applyToggle({}, "trophy-one", true, meta);
assert.strictEqual(synced["trophy-one"], true);
assert.strictEqual(synced["card-a"], undefined);
synced = progress.applyToggle(synced, "trophy-two", true, meta);
assert.strictEqual(synced["trophy-all"], true);
synced = progress.applyToggle(synced, "trophy-one", false, meta);
assert.strictEqual(synced["trophy-all"], undefined);
assert.strictEqual(synced["trophy-one"], undefined);

const linked = mainItems.find(item => item.trophy === "trophy-ch01");
const fromCard = progress.applyToggle({}, linked.id, true, {
  cardToTrophy: { [linked.id]: "trophy-ch01" },
  trophyToCards: { "trophy-ch01": [linked.id] },
  trophyIds: guide.CATALOGS.trophies.items.map(item => item.id),
  platinumId: "trophy-all"
});
assert.strictEqual(fromCard[linked.id], true);
assert.strictEqual(fromCard["trophy-ch01"], true);
assert.strictEqual(fromCard["trophy-all"], undefined);

const titles = guide.GAME.chapters.main.map(chapter => String(chapter.title));
assert.strictEqual(titles.length, 18);
titles.forEach((title, index) => assert.strictEqual(title, "Chapter " + (index + 1)));
assert.strictEqual(
  guide.ROUTE.main.map(row => String(row.chapterId)).join(","),
  guide.GAME.chapters.main.map(chapter => String(chapter.id)).join(",")
);
assert.ok(guide.ROUTE.hard.some(row => row.chapterId === "ch01" && row.items.some(item => item.id === "hard-ch01-01")));
assert.ok(guide.ROUTE.intermission.some(row => row.items.some(item => item.id === "im01-01")));
for (const name of ["quests", "summons", "skills", "materia", "weapons"]) {
  assert.ok(Array.isArray(guide.CATALOGS[name].items));
  assert.ok(guide.CATALOGS[name].items.length >= 1);
  assert.strictEqual(guide.CATALOGS[name].items[0].example, true);
}
assert.ok(Array.isArray(guide.CATALOGS.trophies.items));

console.log("test-guide: ok");
