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
  for (const file of ["data/game.js", "data/route.js", "data/catalogs.js"]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }
  return { GAME: sandbox.GAME, ROUTE: sandbox.ROUTE, CATALOGS: sandbox.CATALOGS };
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
  if (GAME.cache !== "ff7r-guide-v1") fail("キャッシュ名が ff7r-guide-v1 ではない");

  const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
  if (!sw.includes('importScripts("./data/game.js")') || !sw.includes("GAME.cache")) {
    fail("sw.js が GAME.cache を使っていない");
  }
  if (/xc1de|xcde-guide|xenoblade/i.test(sw + fs.readFileSync(path.join(root, "app.js"), "utf8") + fs.readFileSync(path.join(root, "edit-mode.js"), "utf8"))) {
    fail("画面のコードに、流用元の保存キーや識別子が残っている");
  }
  const edit = fs.readFileSync(path.join(root, "edit-mode.js"), "utf8");
  if (!edit.includes("GAME.storage.textEdits") || !edit.includes("編集モードを終了")) {
    fail("編集モードがゲーム設定と繋がっていない");
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

  const catalogs = ["quests", "trophies", "summons", "skills", "materia", "weapons"];
  const hubCatalogs = new Set((GAME.hubs || []).filter(hub => hub.kind === "catalog").map(hub => hub.catalog));
  for (const name of catalogs) {
    const catalog = CATALOGS[name];
    if (!catalog || !Array.isArray(catalog.items)) {
      fail("台帳がない: " + name);
      continue;
    }
    if (!hubCatalogs.has(name)) fail("画面がない: " + name);
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
  for (const trackId of ["main", "hard", "intermission"]) {
    for (const row of ROUTE[trackId] || []) {
      for (const item of row.items || []) {
        if (item && item.trophy && !trophyIds.has(item.trophy)) fail(item.id + " の trophy が台帳にない: " + item.trophy);
      }
    }
  }

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
