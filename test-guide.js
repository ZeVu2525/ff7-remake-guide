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
assert.strictEqual(guide.GAME.cache, "ff7r-guide-v33");
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
assert.strictEqual(guide.CATALOGS.trophies.items[5].name, "プランE展開");
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
const chapterBase = [{ id: "ch01", title: "Chapter 1" }];
const chapterRoute = { main: [{ chapterId: "ch01", items: [{ id: "card-1", flag: "story", title: "t", detail: "d" }], sections: [{ id: "s1", title: "本章", map: "", note: "" }] }] };
const chapterBook = progress.emptyCardBook();
const addedChapter = progress.insertChapter(progress.resolveChapterList(chapterBase, chapterRoute.main, chapterBook, "main"), "ch01");
chapterBook.chapterLists.main = addedChapter.list;
const chapterMerged = progress.mergeTrack(chapterRoute, chapterBase, chapterBook, "main");
assert.strictEqual(chapterMerged.length, 2);
assert.strictEqual(chapterMerged[1].chapterId, addedChapter.id);
assert.strictEqual(chapterMerged[1].title, addedChapter.title);
assert.ok(chapterMerged[1].sections.length >= 1);
const chapterSource = progress.routeModuleSource({ main: chapterMerged });
assert.ok(chapterSource.includes(addedChapter.id));
assert.ok(chapterSource.includes(addedChapter.title));
const chapterGlobal = {};
new Function("globalThis", chapterSource)(chapterGlobal);
const chapterAgain = progress.resolveChapterList(chapterBase, chapterGlobal.ROUTE.main, progress.emptyCardBook(), "main");
assert.deepStrictEqual(chapterAgain.map(chapter => chapter.id), addedChapter.list.map(chapter => chapter.id));
assert.deepStrictEqual(progress.moveChapter(addedChapter.list, addedChapter.id, -1).map(chapter => chapter.id), [addedChapter.id, "ch01"]);
assert.deepStrictEqual(progress.deleteChapter(addedChapter.list, addedChapter.id).map(chapter => chapter.id), ["ch01"]);
assert.ok(guide.ROUTE.hard.some(row => row.chapterId === "ch01" && row.items.some(item => item.id === "hard-ch01-01")));
assert.ok(guide.ROUTE.intermission.some(row => row.items.some(item => item.id === "im01-01")));
assert.ok(!guide.CATALOGS.skills);
assert.ok(guide.GAME.hubs.every(hub => hub.id !== "skills" && hub.id !== "summons"));
assert.ok(guide.GAME.hubs.find(hub => hub.kind === "items").sections.some(section => section.catalog === "summons"));
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
assert.deepStrictEqual(progress.numberCards([
  { id: "a" },
  { id: "b", parent: "a" },
  { id: "c", parent: "b" },
  { id: "d" }
]), { a: "1", b: "1-1", c: "1-1-1", d: "2" });
const folded = progress.foldCards({}, "c", { p: ["c"], c: ["g"] }, true);
assert.strictEqual(folded.c, true);
assert.strictEqual(folded.g, true);
assert.strictEqual(folded["kids:c"], true);
assert.strictEqual(folded.p, undefined);
const allFolded = progress.foldAll({}, ["p", "c"], true);
assert.strictEqual(allFolded.p, true);
assert.strictEqual(allFolded.c, true);
assert.strictEqual(allFolded["kids:p"], true);
assert.strictEqual(allFolded["kids:c"], true);
const allOpened = progress.foldAll(allFolded, ["p", "c"], false);
assert.strictEqual(allOpened.p, false);
assert.strictEqual(allOpened["kids:c"], false);
const opened = progress.foldCards(folded, "p", { p: ["c"], c: ["g"] }, false);
assert.strictEqual(opened.p, false);
assert.strictEqual(opened.c, false);
assert.strictEqual(opened.g, false);
const deskMap = progress.defaultMapFrame({ width: 1200, height: 800 });
assert.strictEqual(deskMap.width, 320);
assert.ok(deskMap.left > 800);
assert.ok(deskMap.top > 400);
const phoneMap = progress.defaultMapFrame({ width: 390, height: 700 });
assert.ok(phoneMap.width <= 260);
assert.ok(phoneMap.left + phoneMap.width <= 382);
assert.ok(phoneMap.top + phoneMap.height <= 692);
const shifted = progress.defaultMapFrame({ width: 1200, height: 800 }, { left: 900, top: 520, right: 1000, bottom: 560 });
assert.ok(shifted.top < 80);
assert.strictEqual(progress.imageKeyFromUrl("https://finalfantasy-jun-site.com/ff7_remake/story/chapter01/01.png"), "maps/jun-ch01-01.png");
assert.strictEqual(progress.imageKeyFromUrl("https://finalfantasy-jun-site.com/ff7_remake/story/chapter03/q01.png"), "maps/jun-ch03-q01.png");
assert.strictEqual(progress.imageKeyFromUrl("https://finalfantasy-jun-site.com/ff7_remake/quest/images/15b.png"), "maps/jun-quest-15b.png");
assert.strictEqual(progress.imageKeyFromUrl("https://finalfantasy-jun-site.com/ff7_remake/field/images/chapter01.png"), "maps/jun-field-chapter01.png");
assert.strictEqual(progress.imageKeyFromUrl("https://finalfantasy-jun-site.com/ff7_remake/enemy/img/001.png"), "enemies/jun-enemy-001.png");
assert.deepStrictEqual(progress.LIBRARY_FOLDERS.map(folder => folder.label), ["MAP", "エネミー", "その他"]);
assert.strictEqual(progress.libraryKey("maps", "Jun-ch01-01.PNG"), "maps/jun-ch01-01.png");
assert.strictEqual(progress.moveLibraryKey("maps/jun-ch01-01.png", "enemies"), "enemies/jun-ch01-01.png");
assert.strictEqual(progress.normalizeLibraryKey("jun-ch01-01.png"), "maps/jun-ch01-01.png");
assert.strictEqual(progress.isLibraryKey("maps/jun-ch01-01.png"), true);
assert.strictEqual(progress.isLibraryKey("jun-ch01-01.png"), true);
assert.strictEqual(progress.isLibraryKey("https://example.com/a.png"), false);
globalThis.MAP_FILES = [{ file: "maps/01.png" }];
assert.strictEqual(progress.isLibraryKey("maps/01.png"), false);
delete globalThis.MAP_FILES;
assert.deepStrictEqual(progress.libraryExportPlan([
  { id: "maps/jun-ch01-01.png" },
  { id: "images/photo.png" }
], { includeLibrary: true }).map(file => file.path), ["images/photo.png"]);
assert.deepStrictEqual(progress.libraryExportPlan([
  { id: "images/photo.png" }
]).map(file => file.path), []);
assert.strictEqual(progress.replaceLibraryKey({ map: "maps/a.png", blocks: [{ src: "maps/a.png" }] }, "maps/a.png", "enemies/a.png").blocks[0].src, "enemies/a.png");
assert.strictEqual(progress.hideMapAfterError(true, "blob:map", "blob:map"), false);
assert.strictEqual(progress.hideMapAfterError(false, "blob:old", "blob:map"), false);
assert.strictEqual(progress.hideMapAfterError(false, "blob:map", "blob:map"), true);
assert.deepStrictEqual(progress.excludeLibraryExports([
  { path: "data/route.js" },
  { path: "image-library/jun-ch01-01.png" },
  { path: "ff7r-maps.zip" },
  { path: "maps/own.png" }
]).map(file => file.path), ["data/route.js", "maps/own.png"]);
const zip = require("./zip-store.js");
const packed = zip.zipStore([{ name: "maps/jun-ch01-01.png", bytes: new TextEncoder().encode("png-bytes") }]);
const unpacked = zip.unzip(packed);
assert.strictEqual(unpacked.length, 1);
assert.strictEqual(unpacked[0].name, "maps/jun-ch01-01.png");
assert.strictEqual(new TextDecoder().decode(unpacked[0].bytes), "png-bytes");
const routeSource = require("fs").readFileSync(require("path").join(__dirname, "data/route.js"), "utf8");
const catalogSource = require("fs").readFileSync(require("path").join(__dirname, "data/catalogs.js"), "utf8");
assert.ok(!/finalfantasy-jun-site\.com[^"']+\.png/.test(routeSource + catalogSource));
assert.ok(routeSource.includes("maps/jun-ch01-01.png"));
assert.ok(routeSource.includes("images/jun-ch01-buppanasu.png"));
const fitted = progress.fitMapPanel({ left: 20, top: 30, imageWidth: 200, ratio: 2, chrome: 80, padX: 16 }, { width: 1200, height: 800 });
assert.strictEqual(fitted.width, 216);
assert.strictEqual(fitted.height, 180);
assert.strictEqual(fitted.left, 20);
assert.strictEqual(fitted.top, 30);
const fromLeft = progress.fitMapPanel({ anchorRight: 400, top: 40, imageWidth: 200, ratio: 2, chrome: 80, padX: 16 }, { width: 1200, height: 800 });
assert.strictEqual(fromLeft.left + fromLeft.width, 400);
const squeezed = progress.fitMapPanel({ left: 8, top: 8, imageWidth: 5000, ratio: 2, chrome: 80, padX: 16 }, { width: 400, height: 700 });
assert.ok(squeezed.width <= 384);
assert.ok(Math.abs((squeezed.width - 16) / (squeezed.height - 80) - 2) < 0.08);
const shoved = progress.clampMapFrame({ left: 5000, top: -40, width: 9000, height: 20 }, { width: 800, height: 600 });
assert.ok(shoved.left >= 8);
assert.ok(shoved.top >= 8);
assert.ok(shoved.left + shoved.width <= 792);
assert.ok(shoved.width < 800);
const appMap = require("fs").readFileSync(require("path").join(__dirname, "app.js"), "utf8");
assert.ok(appMap.includes("ff7r-map-panel-v1"));
assert.ok(appMap.includes("map-pop-resize"));
assert.ok(appMap.includes("pointerdown"));
assert.ok(appMap.includes("mapIgnoreClick"));
assert.ok(appMap.includes('map.id !== "map-pop"'));
assert.ok(appMap.includes("if (!next) hideMap();"));
const editMode = require("fs").readFileSync(require("path").join(__dirname, "edit-mode.js"), "utf8");
assert.ok(editMode.includes('addEventListener("dblclick", onInteract, true)'));
assert.ok(!editMode.includes('if (event.type === "click") beginEdit(event)'));
const appSource = require("fs").readFileSync(require("path").join(__dirname, "app.js"), "utf8");
const pageSource = require("fs").readFileSync(require("path").join(__dirname, "index.html"), "utf8");
assert.ok(appSource.includes("kids-disclosure"));
assert.ok(appSource.includes("（${kids.length}枚）"));
assert.ok(appSource.includes('aria-controls="kids-'));
assert.ok(pageSource.includes(".kids-panel.is-shut"));
assert.ok(pageSource.includes("prefers-reduced-motion"));
assert.ok(!pageSource.includes("kids-chevron{display:inline-flex"));
assert.ok(guide.CATALOGS.quests.items.length >= 26);
assert.ok(guide.CATALOGS.quests.items.every(item => /^https:\/\//.test(item.source)));
assert.ok(guide.CATALOGS.consumables.items.find(item => item.name === "ポーション").buy);
const roundTrip = progress.exportCatalogs(guide.CATALOGS, progress.emptyCardBook());
Object.keys(guide.CATALOGS).forEach(name => {
  assert.strictEqual(roundTrip[name].items.length, guide.CATALOGS[name].items.length, name);
});
const partialCatalogs = { quests: guide.CATALOGS.quests, trophies: guide.CATALOGS.trophies };
assert.ok(progress.validateExportBundle(guide.ROUTE, partialCatalogs, guide.CATALOGS).some(line => line.includes("consumables")));
assert.deepStrictEqual(progress.validateExportBundle(guide.ROUTE, roundTrip, guide.CATALOGS), []);
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
assert.deepStrictEqual(progress.numberChapter([
  { id: "a", section: "s1" },
  { id: "a1", section: "s1", parent: "a" },
  { id: "b", section: "s2" },
  { id: "c", section: "s2" },
  { id: "c1", section: "s2", parent: "c" }
], [{ id: "s1" }, { id: "s2" }]), { a: "1", a1: "1-1", b: "2", c: "3", c1: "3-1" });
assert.deepStrictEqual(progress.numberChapter([
  { id: "a", section: "s1" },
  { id: "b", section: "s2" }
], [{ id: "s2" }, { id: "s1" }]), { b: "1", a: "2" });
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
const ch1Sections = new Set(ch1.sections.map(section => section.id));
assert.ok(ch1.items.every(item => !item.section || ch1Sections.has(item.section)));
assert.ok(ch1.sections.some(section => section.map));
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
assert.strictEqual(progress.sectionName("(1) 壱番魔晄炉"), "壱番魔晄炉");
assert.strictEqual(progress.sectionName("（12） 陥没道路"), "陥没道路");
assert.strictEqual(progress.sectionName("3. 本章"), "本章");
assert.strictEqual(progress.sectionName("新しい区分"), "新しい区分");
assert.deepStrictEqual(progress.orderInsertGroup(["a", "b", "c", "d"], ["b", "d"], "c", false), ["a", "b", "d", "c"]);
assert.deepStrictEqual(progress.orderInsertGroup(["a", "b", "c"], ["a", "c"], "b", true), ["b", "a", "c"]);
const labeled = progress.normalizeCardBook({ labels: { "delete": "消す", "empty": "  " }, templates: [{ id: "tpl-x", label: "宝箱" }] });
assert.strictEqual(labeled.labels.delete, "消す");
assert.strictEqual(labeled.labels.empty, undefined);
assert.strictEqual(progress.labelText(labeled, "delete"), "消す");
assert.strictEqual(progress.labelText(labeled, "copy"), "コピー");
const named = progress.resolveSections({ sections: [{ id: "s", title: "(2) 六番街", map: "", note: "" }] }, progress.emptyCardBook(), "main", "ch09");
assert.strictEqual(named[0].title, "六番街");
const broken = progress.blocksFromDetail("1行目\n2行目<script>alert(1)</script>");
assert.ok(broken[0].html.includes("<br>"));
assert.ok(!broken[0].html.includes("<script"));
assert.ok(progress.blockHtml(broken).includes("1行目<br>2行目"));
const rich = progress.sanitizeRich('<b onclick="x">太</b><span style="color:red;background-color:#fff3bf;font-size:1.25em;font-family:serif">字</span><i>斜</i>');
assert.strictEqual(rich.includes("onclick"), false);
assert.ok(rich.includes("<b>太</b>"));
assert.ok(rich.includes("background-color:#fff3bf"));
assert.ok(rich.includes("font-size:1.25em"));
assert.ok(rich.includes("font-family:serif"));
assert.ok(!rich.includes("color:red"));
assert.deepStrictEqual(progress.normalizeBlocks([{ type: "image", src: "javascript:alert(1)" }]), []);
const columns = progress.normalizeBlocks([{
  type: "columns",
  count: 2,
  arrow: true,
  columns: [[{ type: "text", html: "左" }], [{ type: "image", src: "https://example.com/a.png", width: "l", align: "left" }]]
}]);
assert.strictEqual(columns[0].arrow, true);
assert.strictEqual(columns[0].columns[1][0].width, "l");
const untouched = progress.upsertRouteCard(progress.emptyCardBook(), { id: "a", title: "t", detail: "そのまま", flag: "story" }, "a", {
  title: "t", detail: "そのまま", flag: "story", deadline: "", source: "", trophy: "", map: "", parent: "", quest: "", section: "", template: "", items: [],
  blocks: progress.blocksFromDetail("そのまま")
}, "main", "ch01", ["a"], ["a"]);
assert.strictEqual(untouched.patches.a, undefined);
const imageFile = progress.assignImageFile("abc123abc123", "png", []);
assert.strictEqual(imageFile.file, "images/user-abc123abc123.png");
const again = progress.assignImageFile("abc123abc123", "png", imageFile.manifest);
assert.strictEqual(again.added, null);

assert.deepStrictEqual(progress.cardFlags({ flag: "story" }), ["story"]);
assert.deepStrictEqual(progress.cardFlags({ flag: "story", flags: ["tips", "battle"] }), ["tips", "battle"]);
const multiFlags = progress.validateRouteFields({
  title: "t", detail: "d", flags: ["story", "battle"], enemies: ["e001"], trophy: "trophy-ch01"
}, ["story", "battle", "trophy", "item"], ["trophy-ch01"]);
assert.strictEqual(multiFlags.error, undefined);
assert.deepStrictEqual(multiFlags.value.flags, ["story", "battle"]);
assert.deepStrictEqual(multiFlags.value.enemies, ["e001"]);
assert.strictEqual(multiFlags.value.trophy, "trophy-ch01");
const listed = progress.normalizeBlocks([{
  type: "list",
  heading: " 第一段階で使用するアクション ",
  columns: 2,
  items: ["98式機関砲", "電磁フィールド", "ジャンプ", "電磁ブレス", "スコーピオンテイル", "クローアーム", "ターゲットサーチ", "なぎはらい", "99式小型ミサイル", ""]
}]);
assert.strictEqual(listed[0].heading, "第一段階で使用するアクション");
assert.strictEqual(listed[0].columns, 2);
assert.strictEqual(listed[0].items.length, 9);
assert.deepStrictEqual(progress.listColumns(listed[0].items, 2).map(col => col.length), [5, 4]);
assert.deepStrictEqual(progress.listColumns(listed[0].items, 3).map(col => col.length), [3, 3, 3]);
assert.deepStrictEqual(progress.listColumns(listed[0].items, 1).map(col => col.length), [9]);
const nestedList = progress.normalizeBlocks([{
  type: "columns",
  count: 2,
  columns: [[{ type: "text", html: "左" }, { type: "list", heading: "手順", items: ["A", "B"] }], [{ type: "image", src: "https://example.com/a.png" }]]
}]);
assert.strictEqual(nestedList[0].columns[0][1].type, "list");
const listHtml = progress.blockHtml(listed);
assert.ok(listHtml.includes("blk-list-head"));
assert.ok(listHtml.includes("98式機関砲"));
assert.ok(listHtml.includes("99式小型ミサイル"));
assert.strictEqual(progress.plainInsertHtml("太字\n<b>次</b>"), "太字<br>&lt;b&gt;次&lt;/b&gt;");
const textBlock = { type: "text", html: "98式機関砲<br>電磁フィールド" };
const asList = progress.convertBlock(textBlock, "list");
assert.strictEqual(asList.loss, false);
assert.deepStrictEqual(asList.block.items, ["98式機関砲", "電磁フィールド"]);
const backText = progress.convertBlock(asList.block, "text");
assert.ok(backText.block.html.includes("98式機関砲"));
assert.ok(backText.block.html.includes("電磁フィールド"));
const callout = progress.convertBlock(textBlock, "callout");
assert.strictEqual(callout.loss, false);
assert.strictEqual(callout.block.html, textBlock.html);
const toImage = progress.convertBlock(textBlock, "image");
assert.strictEqual(toImage.loss, true);
assert.strictEqual(toImage.block.caption, "98式機関砲");
const headed = progress.headerCopyFields({ title: "宝箱", flag: "story", flags: ["story", "item"], section: "s1", map: "maps/01.png", blocks: [{ type: "image", src: "maps/01.png" }] });
assert.strictEqual(headed.title, "宝箱");
assert.deepStrictEqual(headed.flags, ["story", "item"]);
assert.deepStrictEqual(headed.blocks, [{ type: "text", html: "" }]);
assert.strictEqual(headed.map, "");
const nest = progress.nestMany(["b", "c"], [
  { id: "a" },
  { id: "b" },
  { id: "c" },
  { id: "d", parent: "a" }
], "a");
assert.deepStrictEqual(nest.order, ["a", "d", "b", "c"]);
assert.deepStrictEqual(nest.parents, { b: "a", c: "a" });
assert.strictEqual(progress.nestMany(["p"], [{ id: "p" }, { id: "k", parent: "p" }, { id: "t" }], "t"), null);
const childClosed = progress.foldChildDetails({ p: false, "kids:p": false }, "p", { p: ["c"], c: ["g"] });
assert.strictEqual(childClosed.p, false);
assert.strictEqual(childClosed["kids:p"], false);
assert.strictEqual(childClosed.c, true);
assert.strictEqual(childClosed.g, true);
const childToggle = progress.toggleChildDetails({ p: false, "kids:p": false, c: true, g: true }, "p", { p: ["c"], c: ["g"] });
assert.strictEqual(childToggle.closed, false);
assert.strictEqual(childToggle.flags.c, false);
assert.strictEqual(childToggle.flags.g, false);
assert.strictEqual(childToggle.flags.p, false);
assert.strictEqual(childToggle.flags["kids:p"], false);
const childClose = progress.toggleChildDetails(childToggle.flags, "p", { p: ["c"], c: ["g"] });
assert.strictEqual(childClose.closed, true);
assert.strictEqual(childClose.flags.c, true);
assert.deepStrictEqual(progress.achieveTagList({}), ["trophy", "deadline", "missable", "request", "item"]);
assert.deepStrictEqual(progress.achieveTagList({ achieveTags: ["trophy", "nope"] }, ["trophy", "story"]), ["trophy"]);
assert.strictEqual(progress.hasAchievementTag({ flags: ["story", "request"] }, progress.DEFAULT_ACHIEVE_TAGS), true);
assert.strictEqual(progress.hasAchievementTag({ flag: "story" }, progress.DEFAULT_ACHIEVE_TAGS), false);
const counted = [{ id: "a", flags: ["trophy"] }, { id: "b", flag: "story" }].filter(item => progress.hasAchievementTag(item, progress.DEFAULT_ACHIEVE_TAGS));
assert.deepStrictEqual(progress.summarize(counted, { a: true }, []), { total: 1, done: 1, openBand: 0 });
const tagsBefore = JSON.stringify({ book: progress.emptyCardBook() });
const tagsAfter = JSON.stringify({ book: Object.assign(progress.emptyCardBook(), { achieveTags: ["trophy"] }) });
assert.strictEqual(progress.toHalfWidth("Ａ１！　、。「」・"), "A1!　、。「」・");
assert.strictEqual(progress.toHalfWidth("カタカナ"), "カタカナ");
const enemyBase = [{ id: "e001", name: "警備兵", kind: "normal", tactic: "近い" }];
const enemyMerged = progress.mergeEnemies(enemyBase, { enemyEdits: { patches: { e001: { name: "兵" } }, deleted: {}, custom: { e9: { id: "e9", name: "追加", kind: "boss" } }, order: ["e9", "e001"] } });
assert.strictEqual(enemyMerged[0].name, "追加");
assert.strictEqual(enemyMerged[1].name, "兵");
assert.strictEqual(enemyMerged[1].tactic, "近い");
assert.strictEqual(progress.mergeEnemies(enemyBase, { enemyEdits: { deleted: { e001: true }, patches: {}, custom: {}, order: [] } }).length, 0);
assert.ok(progress.validateEnemies([]).some(line => line.includes("空")));
const colored = progress.saveSections(progress.emptyCardBook(), "main:ch01", [{ id: "s", title: "見出し", note: "小", map: "", bg: "#abc", border: "rgb(1, 2, 3)" }]);
assert.strictEqual(colored.chapters["main:ch01"].sections[0].bg, "#aabbcc");
assert.strictEqual(colored.chapters["main:ch01"].sections[0].border, "#010203");
assert.strictEqual(colored.chapters["main:ch01"].sections[0].note, "小");
assert.strictEqual(progress.describeEdit(tagsBefore, tagsAfter), "達成表示するタグ");
assert.ok(progress.plainFromBlocks(listed).includes("第一段階で使用するアクション"));
const historyBefore = JSON.stringify({ book: progress.emptyCardBook() });
const historyDeleted = JSON.stringify({ book: progress.removeCard(progress.emptyCardBook(), "card-a") });
assert.strictEqual(progress.describeEdit(historyBefore, historyDeleted), "カード削除");
const historyAdded = progress.emptyCardBook();
historyAdded.custom.card = { kind: "route", id: "card", title: "追加" };
assert.strictEqual(progress.describeEdit(historyBefore, JSON.stringify({ book: historyAdded })), "カード追加");
const historyOrder = progress.emptyCardBook();
historyOrder.chapters["main:ch01"] = { order: ["b", "a"], known: ["a", "b"] };
const historyOrderNext = progress.emptyCardBook();
historyOrderNext.chapters["main:ch01"] = { order: ["a", "b"], known: ["a", "b"] };
assert.strictEqual(progress.describeEdit(JSON.stringify({ book: historyOrder }), JSON.stringify({ book: historyOrderNext })), "並べ替え");
const historyMap = progress.emptyCardBook();
historyMap.patches.card = { map: "maps/01.png" };
assert.strictEqual(progress.describeEdit(historyBefore, JSON.stringify({ book: historyMap })), "地図");
const historyReset = progress.emptyCardBook();
historyReset.deleted.card = true;
assert.strictEqual(progress.describeEdit(JSON.stringify({ book: historyReset }), historyBefore), "編集をすべて戻す");
let edits = progress.emptyEditHistory(2);
edits = progress.pushEditHistory(edits, { before: "1", after: "2", label: "カード削除" }, 1000);
edits = progress.pushEditHistory(edits, { before: "2", after: "3", label: "並べ替え" }, 2000);
edits = progress.pushEditHistory(edits, { before: "3", after: "4", label: "本文" }, 3000);
assert.strictEqual(edits.undo.length, 2);
assert.strictEqual(edits.undo[0].label, "並べ替え");
const undone = progress.undoEditHistory(edits);
assert.strictEqual(undone.entry.label, "本文");
assert.strictEqual(undone.entry.before, "3");
const redone = progress.redoEditHistory(undone.history);
assert.strictEqual(redone.entry.after, "4");
const branched = progress.pushEditHistory(undone.history, { before: "3", after: "9", label: "タグ" }, 4000);
assert.strictEqual(branched.redo.length, 0);
const typed = progress.pushEditHistory(progress.pushEditHistory(progress.emptyEditHistory(), { before: "a", after: "ab", label: "ボタン名", coalesce: true }, 5000), { before: "a", after: "abc", label: "ボタン名", coalesce: true }, 5400);
assert.strictEqual(typed.undo.length, 1);
assert.strictEqual(typed.undo[0].after, "abc");
assert.strictEqual(progress.pushEditHistory(progress.emptyEditHistory(), { before: "same", after: "same", label: "編集" }).undo.length, 0);
const sized = progress.normalizeBlocks([{ type: "image", src: "https://example.com/a.png", pct: 33, width: "m", align: "left" }]);
assert.strictEqual(sized[0].pct, 35);

assert.deepStrictEqual(progress.suggestMatches([
  { no: "001", name: "警備兵" },
  { no: "002", name: "上級警備兵" },
  { no: "015", name: "ガードハウンド" }
], "警備", 8).map(item => item.no), ["001", "002"]);
assert.strictEqual(progress.statForMode({ easy: "10", normal: "20", hard: "30" }, "hard").value, "30");
assert.strictEqual(progress.statForMode({ normal: "20" }, "hard").note, "NORMALの値");
assert.strictEqual(progress.normalizeCardBook({ difficulty: "hard" }).difficulty, "hard");
const cardEdit = require("fs").readFileSync(require("path").join(__dirname, "card-edit.js"), "utf8");
assert.ok(cardEdit.includes("refreshEnemyPick"));
assert.ok(cardEdit.includes("compositionstart"));
assert.ok(!cardEdit.includes("editing.enemyQuery = query.value; paintBattle()"));

const appSrc = require("fs").readFileSync(require("path").join(__dirname, "app.js"), "utf8");
const editSrc = require("fs").readFileSync(require("path").join(__dirname, "card-edit.js"), "utf8");
assert.ok(appSrc.includes("ff7r-tab-scroll-v1"));
assert.ok(appSrc.includes("data-section-insert"));
assert.ok(editSrc.includes("id=\"tag-pop\"") || editSrc.includes('pop.id = "tag-pop"'));

assert.ok(require("fs").readFileSync(require("path").join(__dirname, "card-edit.js"), "utf8").includes('return [{ type: "text", html: "" }]'));
function mockFetch(handler) {
  return async (url, options) => {
    const hit = await handler(url, options || {});
    return { ok: hit.status < 300, status: hit.status, text: async () => JSON.stringify(hit.body) };
  };
}
(async () => {
  const denied = await progress.githubTest(mockFetch(async () => ({ status: 200, body: { permissions: { push: false }, full_name: "ZeVu2525/ff7-remake-guide" } })), "secret-token", "ZeVu2525", "ff7-remake-guide");
  assert.strictEqual(denied.push, false);
  let patches = 0;
  const calls = [];
  const fetchImpl = mockFetch(async (url, options) => {
    const method = options.method || "GET";
    calls.push(method + " " + url);
    assert.ok(!String(options.body || "").includes("secret-token"));
    if (method === "GET" && url.endsWith("/repos/ZeVu2525/ff7-remake-guide")) return { status: 200, body: { permissions: { push: true }, full_name: "ZeVu2525/ff7-remake-guide" } };
    if (method === "GET" && url.includes("/git/ref/heads/main")) return { status: 200, body: { object: { sha: "head" + calls.length } } };
    if (method === "GET" && url.includes("/git/commits/")) return { status: 200, body: { tree: { sha: "base-tree" } } };
    if (method === "POST" && url.endsWith("/git/blobs")) return { status: 201, body: { sha: "blob" } };
    if (method === "POST" && url.endsWith("/git/trees")) return { status: 201, body: { sha: "tree" } };
    if (method === "POST" && url.endsWith("/git/commits")) return { status: 201, body: { sha: "commitsha", html_url: "https://github.com/ZeVu2525/ff7-remake-guide/commit/commitsha" } };
    if (method === "PATCH" && url.includes("/git/refs/heads/main")) {
      patches += 1;
      if (patches === 1) return { status: 409, body: { message: "not a fast forward" } };
      return { status: 200, body: {} };
    }
    if (method === "GET" && url.includes("/contents/data/route.js")) return { status: 200, body: { content: progress.utf8ToBase64("const ROUTE = {};\n") } };
    return { status: 404, body: { message: "missing" } };
  });
  const allowed = await progress.githubTest(fetchImpl, "secret-token", "ZeVu2525", "ff7-remake-guide");
  assert.strictEqual(allowed.push, true);
  const committed = await progress.githubCommit(fetchImpl, "secret-token", {
    owner: "ZeVu2525", repo: "ff7-remake-guide", branch: "main", message: "編集内容を書き出し",
    files: [{ path: "data/route.js", base64: progress.utf8ToBase64("const ROUTE = {};\n") }]
  });
  assert.strictEqual(patches, 2);
  assert.strictEqual(committed.sha, "commitsha");
  assert.ok(!JSON.stringify(committed).includes("secret-token"));
  const read = await progress.githubReadFiles(fetchImpl, "secret-token", "ZeVu2525", "ff7-remake-guide", "main", ["data/route.js"]);
  assert.strictEqual(read["data/route.js"], "const ROUTE = {};\n");
  console.log("test-guide: ok");
})().catch(error => { console.error(error); process.exit(1); });
