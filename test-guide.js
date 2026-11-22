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
assert.strictEqual(guide.GAME.storage.cardEdits, "ff7r-card-edits-v1");
assert.strictEqual(guide.GAME.cache, "ff7r-guide-v10");
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
for (const name of ["skills"]) {
  assert.ok(Array.isArray(guide.CATALOGS[name].items));
  assert.ok(guide.CATALOGS[name].items.length >= 1);
  assert.strictEqual(guide.CATALOGS[name].items[0].example, true);
}
assert.ok(guide.CATALOGS.summons.items.length >= 6);
assert.ok(guide.CATALOGS.summons.items.every(item => Array.isArray(item.growth) && item.growth.length === 7));
const buster = guide.CATALOGS.weapons.items.find(item => item.name === "バスタードソード");
assert.ok(buster && buster.levels.length === 6);
assert.strictEqual(buster.levels[0].core, "コア");
assert.strictEqual(buster.total.atk, "69");
assert.strictEqual(buster.total.sp, "356");
assert.ok(guide.CATALOGS.weapons.items.every(item => item.levels.length === 6 && item.total && item.total.sp));
assert.strictEqual(guide.CATALOGS.weapons.items.find(item => item.name === "ツィンスティンガー").levels.length, 6);
assert.ok(!guide.CATALOGS.weapons.items.some(item => item.area === "ユフィ" || item.area === "武器アビリティ"));
const cure = guide.CATALOGS.materia.items.find(item => item.name === "かいふく");
assert.strictEqual(cure.buy, "600");
assert.strictEqual(cure.levels.map(level => level.sell).join(","), "300,600,1200,2400");
assert.match(cure.levels[1].effect, /13/);
const hpUp = guide.CATALOGS.materia.items.find(item => item.id === "mat-im-015");
assert.strictEqual(hpUp && hpUp.name, "HPアップ");
assert.strictEqual(hpUp.area, "独立");
assert.ok(hpUp.tables[0].body.length >= 5);
assert.ok(!guide.CATALOGS.materia.items.some(item => item.area === "召喚" || item.id === "mat-im-014" || item.id.startsWith("mat-sup-")));
assert.ok(guide.CATALOGS.intermission.items.some(item => item.id === "mat-im-014"));
assert.ok(!guide.CATALOGS.intermission.items.some(item => item.id === "mat-im-015"));
for (const name of ["materia", "weapons", "keyItems", "consumables", "accessories", "armor"]) {
  assert.ok(guide.CATALOGS[name].items.length > 1);
  assert.notStrictEqual(guide.CATALOGS[name].items[0].example, true);
}
const potion = guide.CATALOGS.consumables.items.find(item => item.name === "ポーション");
assert.ok(potion);
assert.match(potion.detail, /350/);
const firstStory = guide.ROUTE.main[0].items.find(item => item.flag === "story");
assert.ok(firstStory.step >= 1);
const chest = guide.ROUTE.main[0].items.find(item => item.id === "ch01-02");
assert.ok(chest.items.some(link => link.id === potion.id && link.qty >= 2));
assert.strictEqual(chest.parent && chest.parent.length > 0, true);
assert.deepStrictEqual(progress.numberCards([
  { id: "a" },
  { id: "b", parent: "a" },
  { id: "c", parent: "a" },
  { id: "d" }
]), { a: "1", b: "1-1", c: "1-2", d: "2" });
assert.ok(guide.CATALOGS.quests.items.length >= 26);
assert.ok(guide.CATALOGS.quests.items.every(item => /^https:\/\//.test(item.source)));
assert.ok(guide.CATALOGS.consumables.items.find(item => item.name === "ポーション").buy);
assert.ok(Array.isArray(guide.CATALOGS.trophies.items));

const baseRoute = {
  main: [{
    chapterId: "ch01",
    items: [
      { id: "a", flag: "story", title: "A", detail: "da", source: "https://example.com/a" },
      { id: "b", flag: "item", title: "B", detail: "db" }
    ]
  }, {
    chapterId: "ch02",
    items: [
      { id: "c", flag: "story", title: "C", detail: "dc" }
    ]
  }]
};
const baseDefs = {
  main: [
    { id: "ch01", title: "Chapter 1" },
    { id: "ch02", title: "Chapter 2" }
  ]
};
const plain = progress.mergeTrack(baseRoute, baseDefs.main, progress.emptyCardBook(), "main");
assert.deepStrictEqual(plain[0].items.map(item => item.id), ["a", "b"]);

let edited = progress.upsertRouteCard(
  progress.emptyCardBook(),
  baseRoute.main[0].items[0],
  "a",
  { title: "A2", detail: "da", flag: "story", deadline: "", source: "https://example.com/a", trophy: "" },
  "main",
  "ch01",
  ["b", "a"],
  ["a", "b"]
);
let merged = progress.mergeTrack(baseRoute, baseDefs.main, edited, "main");
assert.deepStrictEqual(merged[0].items.map(item => item.id), ["b", "a"]);
assert.strictEqual(merged[0].items[1].title, "A2");
assert.strictEqual(merged[0].items[1].detail, "da");

const grown = {
  main: [{
    chapterId: "ch01",
    items: baseRoute.main[0].items.concat({ id: "d", flag: "tips", title: "D", detail: "dd" })
  }, baseRoute.main[1]]
};
merged = progress.mergeTrack(grown, baseDefs.main, edited, "main");
assert.deepStrictEqual(merged[0].items.map(item => item.id), ["b", "d", "a"]);

edited = progress.removeCard(edited, "b");
merged = progress.mergeTrack(baseRoute, baseDefs.main, edited, "main");
assert.deepStrictEqual(merged[0].items.map(item => item.id), ["a"]);

const newId = progress.createCardId(new Set(["a", "b"]));
assert.match(newId, /^user-[a-z0-9]+-[a-z0-9]+$/);
const added = progress.upsertRouteCard(
  progress.emptyCardBook(),
  null,
  newId,
  { title: "追加", detail: "本文", flag: "tips", deadline: "", source: "", trophy: "" },
  "main",
  "ch02",
  ["c", newId],
  ["c"]
);
merged = progress.mergeTrack(baseRoute, baseDefs.main, added, "main");
assert.deepStrictEqual(merged[1].items.map(item => item.id), ["c", newId]);
assert.strictEqual(merged[1].items[1].title, "追加");

let moved = progress.saveOrder(added, "main:ch02", ["c"], ["c"]);
moved = progress.saveOrder(moved, "main:ch01", ["a", "b", newId], ["a", "b"]);
if (moved.custom[newId]) {
  moved.custom[newId].trackId = "main";
  moved.custom[newId].chapterId = "ch01";
}
merged = progress.mergeTrack(baseRoute, baseDefs.main, moved, "main");
assert.deepStrictEqual(merged[1].items.map(item => item.id), ["c"]);
assert.ok(merged[0].items.some(item => item.id === newId));
assert.deepStrictEqual(progress.orderWithMove(["a", "b", "c"], "a", "c", false), ["b", "a", "c"]);
assert.deepStrictEqual(progress.orderWithMove(["a", "b", "c"], "a", "c", true), ["b", "c", "a"]);
assert.deepStrictEqual(progress.orderWithMove(["a", "b"], "c", null, false), ["a", "b", "c"]);
assert.deepStrictEqual(progress.orderWithMove(["a", "b", "c"], "b", "missing", true), ["a", "c", "b"]);

const emptyBody = progress.validateRouteFields({ title: "t", detail: "", flag: "story" }, ["story"], []);
assert.strictEqual(emptyBody.error, undefined);
assert.strictEqual(emptyBody.value.detail, "");
assert.deepStrictEqual(progress.orderForSave(["p", "c1", "c2"], "c2", "p", "p", ""), ["p", "c1", "c2"]);
assert.deepStrictEqual(progress.orderForSave(["p", "c1", "c2"], "new", "p", "", "c2"), ["p", "c1", "c2", "new"]);
const childRoute = { main: [{ chapterId: "ch01", items: [
  { id: "p", flag: "story", title: "P", detail: "d", source: "https://example.com/p" },
  { id: "c1", flag: "item", title: "C1", detail: "d", parent: "p" },
  { id: "c2", flag: "item", title: "C2", detail: "d", parent: "p" }
] }] };
const childDefs = { main: [{ id: "ch01", title: "Chapter 1" }] };
const childOrder = progress.orderForSave(["p", "c1", "c2"], "c2", "p", "p", "");
const childBook = progress.upsertRouteCard(progress.emptyCardBook(), childRoute.main[0].items[2], "c2", {
  title: "C2b", detail: "d", flag: "item", deadline: "", source: "", trophy: "", map: "", parent: "p", quest: "", items: []
}, "main", "ch01", childOrder, ["p", "c1", "c2"]);
const childMerged = progress.mergeTrack(childRoute, childDefs.main, childBook, "main");
assert.deepStrictEqual(childMerged[0].items.map(item => item.id), ["p", "c1", "c2"]);
assert.strictEqual(childMerged[0].items[2].title, "C2b");
assert.strictEqual(childMerged[0].items[2].parent, "p");
assert.deepStrictEqual(progress.numberCards(childMerged[0].items), { p: "1", c1: "1-1", c2: "1-2" });
assert.strictEqual(progress.circledNumber(1), "①");
assert.strictEqual(progress.circledNumber(20), "⑳");
assert.strictEqual(progress.circledNumber(21), "(21)");
assert.deepStrictEqual(progress.templateHeadings([
  { id: "a", template: "tpl-chest" },
  { id: "b", template: "tpl-chest" },
  { id: "c", template: "tpl-shinra" }
], progress.DEFAULT_TEMPLATES), { a: "宝箱①", b: "宝箱②", c: "神羅ボックス①" });
assert.deepStrictEqual(progress.numbersFromTitle("宝箱①②", "宝箱"), [1, 2]);
assert.deepStrictEqual(progress.numbersFromTitle("宝箱①〜③", "宝箱"), [1, 2, 3]);
assert.deepStrictEqual(progress.templateHeadings([
  { id: "free", title: "宝箱①②" },
  { id: "child", template: "tpl-chest", parent: "p" },
  { id: "next", template: "tpl-chest" }
], progress.DEFAULT_TEMPLATES), { child: "宝箱③", next: "宝箱④" });
assert.strictEqual(progress.visibleMap({ map: "" }, { map: "chapter01" }), "chapter01");
assert.strictEqual(progress.visibleMap({ map: "chapter01" }, { map: "chapter01" }), "chapter01");
assert.strictEqual(progress.visibleMap({ map: "maps/01.png" }, { map: "chapter01" }), "maps/01.png");
assert.strictEqual(progress.visibleMap({ map: "" }, { map: "" }), "");
const blank = progress.validateRouteFields({ title: "", detail: "", flag: "item", template: "tpl-chest" }, ["item"], []);
assert.strictEqual(blank.error, undefined);
assert.strictEqual(blank.value.template, "tpl-chest");
assert.deepStrictEqual(progress.withChildIds(["p"], [
  { id: "p" }, { id: "c", parent: "p" }, { id: "x" }
]), ["p", "c"]);
assert.deepStrictEqual(progress.orderAfterSectionMove(
  ["a", "b", "c"], ["b"], id => id === "a" ? "s1" : "s2", "s1"
), ["a", "b", "c"]);
const ch1 = guide.ROUTE.main.find(row => row.chapterId === "ch01");
assert.ok(ch1.sections && ch1.sections.length >= 1);
assert.ok(ch1.items.every(item => item.section === ch1.sections[0].id));
assert.ok(ch1.items.every(item => !item.map));
assert.ok(ch1.sections[0].map);
const firstMap = progress.assignMapFile("abcdef1234567890", "png", []);
const sameMap = progress.assignMapFile("abcdef1234567890", "png", firstMap.manifest);
assert.strictEqual(sameMap.file, firstMap.file);
assert.strictEqual(sameMap.added, null);
const rewritten = progress.replaceMapValues({
  main: [{ chapterId: "ch01", items: [{ id: "a", map: "data:image/png;base64,aa" }] }]
}, {}, { "data:image/png;base64,aa": "maps/user-abcdef123456.png" });
assert.strictEqual(rewritten.route.main[0].items[0].map, "maps/user-abcdef123456.png");
const repoMap = progress.validateRouteFields({ title: "t", detail: "d", flag: "story", map: "maps/user-abcdef123456.png" }, ["story"], []);
assert.strictEqual(repoMap.value.map, "maps/user-abcdef123456.png");
const bad = progress.validateRouteFields({ title: "", detail: "x", flag: "story" }, ["story"], []);
assert.ok(bad.error);
const url = progress.validateRouteFields({ title: "t", detail: "d", flag: "story", source: "http://example.com" }, ["story"], []);
assert.ok(url.error);
const ok = progress.validateRouteFields({
  title: "t",
  detail: "d",
  flag: "trophy",
  source: "https://example.com",
  trophy: "trophy-ch01"
}, ["trophy"], ["trophy-ch01"]);
assert.strictEqual(ok.value.trophy, "trophy-ch01");
const imageMap = progress.validateRouteFields({
  title: "t",
  detail: "d",
  flag: "story",
  map: "data:image/png;base64,aaaa"
}, ["story"], []);
assert.strictEqual(imageMap.value.map, "data:image/png;base64,aaaa");
const badMap = progress.validateRouteFields({ title: "t", detail: "d", flag: "story", map: "javascript:alert(1)" }, ["story"], []);
assert.ok(badMap.error);
const questBase = { items: [{ id: "q", name: "Q", detail: "d", map: "https://example.com/a.png", steps: ["s"] }] };
const questBook = progress.upsertCatalogCard(progress.emptyCardBook(), questBase.items[0], "q", {
  name: "Q",
  detail: "d",
  area: "",
  source: "",
  missable: false,
  map: "https://example.com/b.png"
}, "quests", ["q"], ["q"]);
const questMerged = progress.mergeCatalog(questBase, questBook, "quests");
assert.strictEqual(questMerged[0].map, "https://example.com/b.png");
assert.deepStrictEqual(questMerged[0].steps, ["s"]);
const bundle = progress.acceptBundle({
  app: "ff7r-guide",
  cards: added,
  state: { checks: { "ch01-01": true } }
});
assert.strictEqual(bundle.state.checks["ch01-01"], true);
assert.strictEqual(bundle.cards.custom[newId].title, "追加");
const source = progress.routeModuleSource(progress.mergedRoute(baseRoute, baseDefs, added));
assert.ok(source.startsWith("const ROUTE = "));
assert.ok(source.includes("追加"));
assert.ok(source.includes("globalThis.ROUTE = ROUTE;"));

console.log("test-guide: ok");
