#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = __dirname;

function loadGuide() {
  const sandbox = { console };
  sandbox.globalThis = sandbox;
  const context = vm.createContext(sandbox);
  for (const file of ["data/game.js", "data/route.js", "data/catalogs.js", "data/maps.js"]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }
  return { GAME: sandbox.GAME, ROUTE: sandbox.ROUTE, CATALOGS: sandbox.CATALOGS, MAP_FILES: sandbox.MAP_FILES };
}

function validateGuide(guide) {
  const errors = [];
  const fail = message => errors.push(message);
  const { GAME, ROUTE, CATALOGS } = guide;
  if (!GAME || !ROUTE || !CATALOGS) {
    fail("data/game.js、data/route.js、data/catalogs.js を読めなかった");
    return errors;
  }

  if (GAME.storage.state !== "ff7r-guide-state-v1") fail("進行の保存キーが ff7r-guide-state-v1 ではない");
  if (GAME.storage.textEdits !== "ff7r-text-edits-v1") fail("編集の保存キーが ff7r-text-edits-v1 ではない");
  if (GAME.storage.cardEdits !== "ff7r-card-edits-v1") fail("カード編集の保存キーが ff7r-card-edits-v1 ではない");
  if (GAME.cache !== "ff7r-guide-v8") fail("キャッシュ名が ff7r-guide-v8 ではない");
  const mapFiles = guide.MAP_FILES;
  if (!Array.isArray(mapFiles)) fail("data/maps.js の MAP_FILES が配列ではない");
  else mapFiles.forEach(entry => {
    if (!entry || !/^maps\/[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g|gif|webp)$/i.test(entry.file || "")) fail("地図ファイルのパスが不正");
    else if (!fs.existsSync(path.join(root, entry.file))) fail("地図ファイルがない: " + entry.file);
  });
  if (!fs.existsSync(path.join(root, "maps", "README.md"))) fail("maps/README.md がない");

  const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  if (!sw.includes(GAME.cache)) fail("sw.js のキャッシュ名が GAME.cache と違う");
  if (sw.includes("importScripts(")) fail("sw.js が importScripts で古いキャッシュ名を引き戻せる");
  if (!sw.includes("async function networkFirst") || /return cached \|\|/.test(sw) || !sw.includes("async function cacheFirstImage")) fail("sw.js が network-first ではない");
  if (!sw.includes('cache: "reload"') || !sw.includes("skipWaiting") || !sw.includes("clients.claim") || !sw.includes("client.navigate") || !sw.includes("ff7r-sw")) {
    fail("sw.js が更新時に古い画面を置き換えない");
  }
  for (const file of GAME.cacheFiles) {
    if (!sw.includes(file)) fail("sw.js の対象に " + file + " がない");
  }
  for (const file of ["data/game.js", "data/route.js", "data/catalogs.js", "data/maps.js", "progress.js", "app.js", "edit-mode.js", "card-edit.js"]) {
    if (!html.includes(file + "?v=" + GAME.cache)) fail("index.html の " + file + " に版のクエリがない");
  }
  if (!html.includes("新しいバージョンがあります") || !app.includes('updateViaCache: "none"') || !app.includes("ff7r-reload") || !app.includes("ff7r-sw") || !app.includes("すべて表示") || !app.includes("data-map") || !app.includes("data-open-item") || !app.includes("data-item-section") || !app.includes("map-zoom") || !app.includes("中のカード") || !app.includes("data-open-weapon")) {
    fail("画面がサービスワーカーの更新を見ていない");
  }
  if (/xc1de|xcde-guide|xenoblade/i.test(sw + fs.readFileSync(path.join(root, "app.js"), "utf8") + fs.readFileSync(path.join(root, "edit-mode.js"), "utf8"))) {
    fail("画面のコードに、流用元の保存キーや識別子が残っている");
  }
  const edit = fs.readFileSync(path.join(root, "edit-mode.js"), "utf8");
  if (!edit.includes("GAME.storage.textEdits") || !edit.includes("編集モードを終了")) {
    fail("編集モードがゲーム設定と繋がっていない");
  }
  const cardEdit = fs.readFileSync(path.join(root, "card-edit.js"), "utf8");
  if (!cardEdit.includes("GAME.storage.cardEdits") || !cardEdit.includes("カード編集を終了")) {
    fail("カード編集がゲーム設定と繋がっていない");
  }
  if (cardEdit.includes("event.target === dialog) dialog.hidden = true") || !cardEdit.includes("保存していない変更があります")) {
    fail("カード編集が外側のクリックで閉じる");
  }
  if (!edit.includes("保存していない変更があります") || edit.includes('if (event.key === "Escape" && dialogOpen) { event.preventDefault(); closeDialog(); }')) {
    fail("表示文の編集がEscで破棄される");
  }
  if (!cardEdit.includes("pointerdown") || !cardEdit.includes("card-drop-line") || !cardEdit.includes("orderWithMove") || !app.includes("data-card-drag")) {
    fail("カード移動がポインタのドラッグになっていない");
  }
  if (!html.includes("card-edit.js")) {
    fail("index.html が card-edit.js を読んでいない");
  }

  const flagIds = new Set((GAME.flags || []).map(flag => flag.id));
  const band = new Set((GAME.flags || []).filter(flag => flag.band).map(flag => flag.id));
  if (!band.has("deadline") || !band.has("missable")) fail("期限と取り逃しが帯の対象になっていない");
  for (const id of ["trophy", "item", "tips"]) {
    if (!flagIds.has(id)) fail("フラグがない: " + id);
  }

  const tracks = new Set((GAME.tracks || []).map(track => track.id));
  for (const name of ["main", "hard", "intermission"]) {
    if (!tracks.has(name)) fail("進行の枠がない: " + name);
    if (!Array.isArray(GAME.chapters[name])) fail("章一覧がない: " + name);
    if (!Array.isArray(ROUTE[name])) fail("ルートがない: " + name);
  }

  const main = GAME.chapters.main || [];
  if (main.length !== 18) fail("本編の章は 18 個である必要がある");
  main.forEach((chapter, index) => {
    const number = index + 1;
    const id = "ch" + String(number).padStart(2, "0");
    if (!chapter || chapter.id !== id) fail("章IDがずれている: " + (chapter && chapter.id));
    if (!chapter || chapter.title !== "Chapter " + number) fail("章名は番号だけにする: " + (chapter && chapter.title));
  });

  const ids = new Map();
  function claim(id, where) {
    if (typeof id !== "string" || !id) {
      fail(where + " に id がない");
      return;
    }
    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/.test(id)) fail("id の形が安定していない: " + id);
    if (ids.has(id)) fail("id が重複: " + id);
    else ids.set(id, where);
  }

  for (const trackId of ["main", "hard", "intermission"]) {
    const known = new Set((GAME.chapters[trackId] || []).map(chapter => chapter.id));
    const seen = new Set();
    for (const row of ROUTE[trackId]) {
      if (!row || typeof row.chapterId !== "string") {
        fail(trackId + " の章に chapterId がない");
        continue;
      }
      if (!known.has(row.chapterId)) fail(trackId + " の未知の章: " + row.chapterId);
      if (seen.has(row.chapterId)) fail(trackId + " の章が重複: " + row.chapterId);
      seen.add(row.chapterId);
      if (!Array.isArray(row.items)) {
        fail(row.chapterId + " の items がない");
        continue;
      }
      for (const item of row.items) {
        claim(item && item.id, trackId + " " + row.chapterId);
        if (!item) continue;
        for (const key of ["flag", "title", "detail"]) {
          if (item[key] == null || item[key] === "") fail(item.id + " に " + key + " がない");
        }
        if (!flagIds.has(item.flag)) fail(item.id + " の flag が未定義: " + item.flag);
        if (item.example === true && !String(item.title).includes("例")) fail(item.id + " は仮データなのに「例」がない");
        if (String(item.title).includes("例") && item.example !== true) fail(item.id + " は「例」なのに example がない");
        if (item.source && !/^https?:\/\//i.test(item.source)) fail(item.id + " の source は http のURLか空にする");
        if (item.flag === "trophy" && !item.trophy) fail(item.id + " はトロフィーなのに trophy がない");
        if (item.trophy && item.flag !== "trophy") fail(item.id + " の trophy はトロフィーカードだけに付ける");
      }
    }
    if (trackId === "main") {
      for (const chapter of GAME.chapters.main) {
        if (!seen.has(chapter.id)) fail("本編ルートに章の枠がない: " + chapter.id);
      }
    }
  }

  const catalogs = ["quests", "trophies", "summons", "skills", "materia", "weapons", "keyItems", "consumables", "accessories", "armor"];
  const hubCatalogs = new Set((GAME.hubs || []).filter(hub => hub.kind === "catalog").map(hub => hub.catalog));
  const itemCatalogs = new Set(((GAME.hubs || []).find(hub => hub.kind === "items") || {}).sections?.map(section => section.catalog) || []);
  for (const name of catalogs) {
    const catalog = CATALOGS[name];
    if (!catalog || !Array.isArray(catalog.items)) {
      fail("台帳がない: " + name);
      continue;
    }
    if (!hubCatalogs.has(name) && !itemCatalogs.has(name)) fail("画面がない: " + name);
    for (const item of catalog.items) {
      claim(item && item.id, name);
      if (!item) continue;
      for (const key of ["name", "detail"]) {
        if (!item[key]) fail((item.id || name) + " に " + key + " がない");
      }
      if (item.example === true && !String(item.name).includes("例")) fail(item.id + " は仮データなのに「例」がない");
      if (item.source && !/^https?:\/\//i.test(item.source)) fail(item.id + " の source は http のURLか空にする");
    }
  }

  const trophyItems = (CATALOGS.trophies && CATALOGS.trophies.items) || [];
  const trophyIds = new Set(trophyItems.map(item => item && item.id));
  if (trophyItems.length !== 54) fail("トロフィーは54件である必要がある");
  const autos = trophyItems.filter(item => item && item.auto === "rest");
  if (autos.length !== 1) fail("残りのトロフィーでオンになる項目は1件である必要がある");
  const catalogIds = new Set();
  for (const name of Object.keys(CATALOGS)) {
    for (const item of (CATALOGS[name] && CATALOGS[name].items) || []) {
      if (item && item.id) catalogIds.add(item.id);
    }
  }
  const mapIds = new Set((GAME.maps || []).map(map => map.id));
  for (const trackId of ["main", "hard", "intermission"]) {
    for (const row of ROUTE[trackId] || []) {
      const storySteps = [];
      for (const item of row.items || []) {
        if (item && item.trophy && !trophyIds.has(item.trophy)) fail(item.id + " の trophy が台帳にない: " + item.trophy);
        if (item && item.map && !mapIds.has(item.map) && !/^https:\/\//i.test(item.map) && !/^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(item.map) && !/^maps\/[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g|gif|webp)$/i.test(item.map)) fail(item.id + " の地図が未定義: " + item.map);
        if (item && item.parent) {
          const parent = (row.items || []).find(other => other && other.id === item.parent);
          if (!parent) fail(item.id + " の親がない");
          else if (parent.parent) fail(item.id + " の親がさらに子カード");
        }
        if (item && item.items) {
          if (!Array.isArray(item.items)) fail(item.id + " の items が配列ではない");
          else item.items.forEach(link => {
            if (!link || !catalogIds.has(link.id) || !(link.qty >= 1)) fail(item.id + " のアイテムリンクが不正");
          });
        }
        if (trackId === "main" && item && item.flag === "story") storySteps.push(item.step);
      }
      if (trackId === "main") {
        if (!storySteps.length) fail(row.chapterId + " に手順カードがない");
        storySteps.forEach(step => {
          if (!Number.isInteger(step) || step < 1) fail(row.chapterId + " の手順番号が不正");
        });
      }
    }
  }
  if (!CATALOGS.quests || CATALOGS.quests.items.length < 26) fail("依頼が26件未満");
  if (!CATALOGS.quests.items.some(item => item && item.id === "quest-chadley" && item.reports && item.reports.length >= 4)) {
    fail("チャドリーレポートの表がない");
  }
  const chapter18 = (ROUTE.main || []).find(row => row.chapterId === "ch18");
  if (chapter18 && (chapter18.items || []).some(item => item && item.map)) fail("Chapter 18 に地図を出している");

  return errors;
}

function main() {
  const errors = validateGuide(loadGuide());
  if (errors.length) {
    for (const error of errors) console.error("error: " + error);
    process.exit(1);
  }
  console.log("validate-guide: ok");
}

if (require.main === module) main();

module.exports = { loadGuide, validateGuide };
