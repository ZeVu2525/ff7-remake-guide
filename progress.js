// 進行JSONの形。画面と、ブラウザを使わないテストの両方がこれを使う。
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.GuideProgress = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const APP = "ff7r-guide";

  function emptyState() {
    return { version: 1, checks: {}, updatedAt: null };
  }

  function cleanChecks(value) {
    const out = {};
    if (!value || typeof value !== "object" || Array.isArray(value)) return out;
    for (const key of Object.keys(value)) {
      if (key && value[key] === true) out[key] = true;
    }
    return out;
  }

  function normalizeState(value) {
    const src = value && typeof value === "object" && !Array.isArray(value) ? value : {};
    return {
      version: 1,
      checks: cleanChecks(src.checks),
      updatedAt: typeof src.updatedAt === "string" ? src.updatedAt : null
    };
  }

  function acceptBundle(payload) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    if (payload.app && payload.app !== APP) return null;
    let state = null;
    if (payload.state && typeof payload.state === "object" && payload.state.checks && typeof payload.state.checks === "object") {
      state = normalizeState(payload.state);
    }
    let cards = null;
    if (payload.cards && typeof payload.cards === "object") cards = normalizeCardBook(payload.cards);
    if (!state && !cards) return null;
    return { state, cards };
  }

  function acceptImport(payload) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    if (payload.app && payload.app !== APP) return null;
    const state = payload.state && typeof payload.state === "object" && !Array.isArray(payload.state)
      ? payload.state
      : payload;
    if (!state.checks || typeof state.checks !== "object" || Array.isArray(state.checks)) return null;
    return normalizeState(state);
  }

  function reconcileChecks(checks, meta) {
    const next = Object.assign({}, checks && typeof checks === "object" ? checks : {});
    const trophyToCards = meta && meta.trophyToCards || {};
    for (const trophyId of Object.keys(trophyToCards)) {
      const cards = trophyToCards[trophyId] || [];
      if (cards.some(cardId => next[cardId] === true)) next[trophyId] = true;
    }
    const platinumId = meta && meta.platinumId;
    const trophyIds = meta && meta.trophyIds || [];
    if (platinumId) {
      const rest = trophyIds.filter(id => id !== platinumId);
      if (rest.length && rest.every(id => next[id] === true)) next[platinumId] = true;
      else delete next[platinumId];
    }
    return next;
  }

  function applyToggle(checks, id, on, meta) {
    const next = Object.assign({}, checks && typeof checks === "object" ? checks : {});
    const cardToTrophy = meta && meta.cardToTrophy || {};
    const trophyToCards = meta && meta.trophyToCards || {};
    if (on) next[id] = true;
    else delete next[id];
    const trophyId = cardToTrophy[id];
    if (!on && trophyId) {
      const cards = trophyToCards[trophyId] || [];
      if (!cards.some(cardId => next[cardId] === true)) delete next[trophyId];
    }
    const linkedCards = trophyToCards[id];
    if (!on && linkedCards) {
      for (const cardId of linkedCards) delete next[cardId];
    }
    return reconcileChecks(next, meta);
  }

  function summarize(items, checks, bandFlags) {
    const list = (items || []).filter(item => item && item.id);
    const doneMap = checks && typeof checks === "object" ? checks : {};
    const band = new Set(bandFlags || []);
    let done = 0;
    let openBand = 0;
    for (const item of list) {
      const on = doneMap[item.id] === true;
      if (on) done += 1;
      else if (cardFlags(item).some(flag => band.has(flag))) openBand += 1;
    }
    return { total: list.length, done, openBand };
  }

  const CARD_FIELDS = ["title", "detail", "flag", "deadline", "source", "trophy", "map", "parent", "quest", "section", "template"];
  const DEFAULT_TEMPLATES = [
    { id: "tpl-chest", label: "宝箱" },
    { id: "tpl-shinra", label: "神羅ボックス" },
    { id: "tpl-get", label: "入手" }
  ];
  const CATALOG_FIELDS = ["name", "detail", "area", "source", "missable", "map"];

  function emptyCardBook() {
    return { version: 1, deleted: {}, patches: {}, custom: {}, chapters: {}, chapterLists: {}, templates: [], labels: {}, difficulty: "normal" };
  }

  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }

  function stringList(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(item => typeof item === "string" && item);
  }

  function suggestMatches(items, query, limit) {
    const needle = String(query || "").trim().toLowerCase();
    const cap = limit || 8;
    const list = (items || []).filter(item => item && (item.name || item.id));
    if (!needle) return list.slice(0, cap);
    return list.filter(item => ((item.no || "") + " " + (item.name || item.id)).toLowerCase().includes(needle)).slice(0, cap);
  }

  function statForMode(group, mode) {
    const key = mode === "easy" || mode === "hard" ? mode : "normal";
    if (!group || typeof group !== "object") return { value: "", note: "" };
    if (group[key]) return { value: String(group[key]), note: "" };
    for (const fallback of ["normal", "easy", "hard"]) {
      if (group[fallback]) return { value: String(group[fallback]), note: fallback.toUpperCase() + "の値" };
    }
    return { value: "", note: "" };
  }

  function cardFlags(item) {
    const listed = item && Array.isArray(item.flags) ? item.flags.filter(id => typeof id === "string" && id) : [];
    if (listed.length) return listed;
    return item && item.flag ? [item.flag] : [];
  }

  function enemyLinks(value) {
    if (!Array.isArray(value)) return [];
    const out = [];
    const seen = new Set();
    for (const entry of value) {
      const id = typeof entry === "string" ? entry : entry && entry.id;
      if (typeof id !== "string" || !/^[a-z][a-z0-9-]+$/.test(id) || seen.has(id)) continue;
      seen.add(id);
      out.push(id);
    }
    return out.slice(0, 8);
  }

  function itemLinks(value) {
    if (!Array.isArray(value)) return [];
    const out = [];
    const seen = new Set();
    for (const entry of value) {
      if (!entry || typeof entry.id !== "string" || !/^[a-z][a-z0-9-]+$/.test(entry.id) || seen.has(entry.id)) continue;
      seen.add(entry.id);
      const qty = Math.max(1, Math.min(99, Math.round(Number(entry.qty) || 1)));
      out.push({ id: entry.id, qty });
    }
    return out;
  }

  function normalizeCardBook(value) {
    const src = asObject(value);
    const book = emptyCardBook();
    for (const id of Object.keys(asObject(src.deleted))) {
      if (src.deleted[id] === true) book.deleted[id] = true;
    }
    for (const id of Object.keys(asObject(src.patches))) {
      const patch = {};
      const raw = asObject(src.patches[id]);
      for (const key of ["title", "detail", "flag", "deadline", "source", "trophy", "name", "area", "map", "parent", "quest", "section", "template"]) {
        if (Object.prototype.hasOwnProperty.call(raw, key) && (typeof raw[key] === "string" || raw[key] == null)) {
          patch[key] = raw[key] == null ? "" : String(raw[key]);
        }
      }
      if (Object.prototype.hasOwnProperty.call(raw, "missable")) patch.missable = raw.missable === true;
      if (Array.isArray(raw.items)) patch.items = itemLinks(raw.items);
      if (Array.isArray(raw.blocks)) patch.blocks = normalizeBlocks(raw.blocks);
      if (Array.isArray(raw.flags)) patch.flags = raw.flags.filter(id => typeof id === "string" && id).slice(0, 8);
      if (Array.isArray(raw.enemies)) patch.enemies = enemyLinks(raw.enemies);
      if (typeof raw.enemyNote === "string") patch.enemyNote = raw.enemyNote;
      if (typeof raw.enemyImage === "string") patch.enemyImage = raw.enemyImage;
      if (Object.keys(patch).length) book.patches[id] = patch;
    }
    for (const id of Object.keys(asObject(src.custom))) {
      const raw = asObject(src.custom[id]);
      if (raw.kind !== "route" && raw.kind !== "catalog") continue;
      const card = { kind: raw.kind, id };
      if (raw.kind === "route") {
        for (const key of CARD_FIELDS) card[key] = raw[key] == null ? "" : String(raw[key]);
        card.trackId = typeof raw.trackId === "string" ? raw.trackId : "";
        card.chapterId = typeof raw.chapterId === "string" ? raw.chapterId : "";
        card.map = typeof raw.map === "string" ? raw.map : "";
        card.items = itemLinks(raw.items);
        if (Array.isArray(raw.blocks)) card.blocks = normalizeBlocks(raw.blocks);
        if (Array.isArray(raw.flags)) card.flags = raw.flags.filter(id => typeof id === "string" && id).slice(0, 8);
        if (Array.isArray(raw.enemies)) card.enemies = enemyLinks(raw.enemies);
        if (typeof raw.enemyNote === "string") card.enemyNote = raw.enemyNote;
        if (typeof raw.enemyImage === "string") card.enemyImage = raw.enemyImage;
      } else {
        card.catalogId = typeof raw.catalogId === "string" ? raw.catalogId : "";
        card.name = raw.name == null ? "" : String(raw.name);
        card.detail = raw.detail == null ? "" : String(raw.detail);
        card.area = raw.area == null ? "" : String(raw.area);
        card.source = raw.source == null ? "" : String(raw.source);
        card.map = typeof raw.map === "string" ? raw.map : "";
        card.missable = raw.missable === true;
        if (raw.auto === "rest") card.auto = "rest";
      }
      book.custom[id] = card;
    }
    for (const key of Object.keys(asObject(src.chapters))) {
      const raw = asObject(src.chapters[key]);
      const chapter = { order: stringList(raw.order), known: stringList(raw.known) };
      if (Array.isArray(raw.sections)) {
        chapter.sections = raw.sections.filter(item => item && item.id).map(item => ({
          id: String(item.id),
          title: item.title == null ? "" : String(item.title),
          map: item.map == null ? "" : String(item.map),
          note: item.note == null ? "" : String(item.note)
        }));
      }
      book.chapters[key] = chapter;
    }
    if (Array.isArray(src.templates)) {
      book.templates = src.templates.filter(item => item && item.id && item.label).map(item => ({
        id: String(item.id),
        label: String(item.label)
      }));
    }
    const labels = asObject(src.labels);
    book.labels = {};
    Object.keys(labels).forEach(key => {
      if (typeof labels[key] === "string" && labels[key].trim()) book.labels[key] = labels[key].trim();
    });
    book.difficulty = src.difficulty === "easy" || src.difficulty === "hard" ? src.difficulty : "normal";
    book.chapterLists = {};
    const lists = asObject(src.chapterLists);
    Object.keys(lists).forEach(trackId => {
      if (!Array.isArray(lists[trackId])) return;
      book.chapterLists[trackId] = lists[trackId].filter(chapter => chapter && chapter.id).map(chapter => ({
        id: String(chapter.id),
        title: chapter.title == null ? "" : String(chapter.title)
      }));
    });
    return book;
  }

  function resolveSections(row, book, trackId, chapterId) {
    const saved = book.chapters[chapterKey(trackId, chapterId)];
    const base = row && Array.isArray(row.sections) ? row.sections : [];
    const list = saved && saved.sections && saved.sections.length ? saved.sections : base;
    if (list.length) {
      return list.map(item => ({
        id: String(item.id),
        title: sectionName(item.title || ""),
        map: item.map || "",
        note: item.note || ""
      }));
    }
    return [{ id: chapterId + "-sec-1", title: "本章", map: "", note: "" }];
  }

  function cloneBook(book) {
    return normalizeCardBook(JSON.parse(JSON.stringify(book || emptyCardBook())));
  }

  function chapterKey(trackId, chapterId) {
    return trackId + ":" + chapterId;
  }

  function catalogKey(catalogId) {
    return "catalog:" + catalogId;
  }

  function applyPatch(item, patch) {
    const out = Object.assign({}, item);
    if (!patch) return out;
    for (const key of CARD_FIELDS) {
      if (Object.prototype.hasOwnProperty.call(patch, key)) out[key] = patch[key];
    }
    if (out.flag !== "trophy") delete out.trophy;
    else if (!out.trophy) delete out.trophy;
    if (Object.prototype.hasOwnProperty.call(patch, "items")) out.items = itemLinks(patch.items);
    if (Object.prototype.hasOwnProperty.call(patch, "blocks")) out.blocks = normalizeBlocks(patch.blocks);
    if (Object.prototype.hasOwnProperty.call(patch, "flags")) out.flags = patch.flags.slice();
    if (Object.prototype.hasOwnProperty.call(patch, "enemies")) out.enemies = enemyLinks(patch.enemies);
    if (Object.prototype.hasOwnProperty.call(patch, "enemyNote")) out.enemyNote = patch.enemyNote || "";
    if (Object.prototype.hasOwnProperty.call(patch, "enemyImage")) out.enemyImage = patch.enemyImage || "";
    if (out.flag !== "item") delete out.items;
    if (!out.map) delete out.map;
    return out;
  }

  function indexRoute(route) {
    const byId = new Map();
    const home = new Map();
    for (const trackId of Object.keys(route || {})) {
      for (const row of route[trackId] || []) {
        for (const item of row.items || []) {
          if (!item || !item.id) continue;
          byId.set(item.id, item);
          home.set(item.id, { trackId, chapterId: row.chapterId });
        }
      }
    }
    return { byId, home };
  }

  function ownedElsewhere(book, id, key) {
    for (const other of Object.keys(book.chapters || {})) {
      if (other === key) continue;
      if ((book.chapters[other].order || []).indexOf(id) >= 0) return true;
    }
    return false;
  }

  function insertNew(result, baseIds, id) {
    const baseIndex = baseIds.indexOf(id);
    let at = result.length;
    for (let i = baseIndex - 1; i >= 0; i -= 1) {
      const prev = result.indexOf(baseIds[i]);
      if (prev >= 0) {
        at = prev + 1;
        break;
      }
    }
    if (at === result.length) {
      for (let i = baseIndex + 1; i < baseIds.length; i += 1) {
        const next = result.indexOf(baseIds[i]);
        if (next >= 0) {
          at = next;
          break;
        }
      }
    }
    result.splice(at, 0, id);
  }

  function mergeIdList(baseIds, book, key) {
    const entry = book.chapters[key];
    const deleted = book.deleted || {};
    if (!entry) {
      return baseIds.filter(id => !deleted[id] && !ownedElsewhere(book, id, key));
    }
    const known = new Set(entry.known || []);
    const result = [];
    const used = new Set();
    for (const id of entry.order || []) {
      if (deleted[id] || used.has(id)) continue;
      result.push(id);
      used.add(id);
    }
    baseIds.forEach(id => {
      if (used.has(id) || deleted[id] || known.has(id) || ownedElsewhere(book, id, key)) return;
      insertNew(result, baseIds, id);
      used.add(id);
    });
    return result.filter(id => !deleted[id]);
  }

  function resolveRouteCard(id, routeIndex, book) {
    if (book.deleted && book.deleted[id]) return null;
    const custom = book.custom && book.custom[id];
    if (custom && custom.kind === "route") {
      const card = {
        id,
        flag: custom.flag,
        title: custom.title,
        detail: custom.detail,
        deadline: custom.deadline || "",
        source: custom.source || "",
        custom: true
      };
      if (custom.flag === "trophy" && custom.trophy) card.trophy = custom.trophy;
      if (custom.map) card.map = custom.map;
      if (custom.parent) card.parent = custom.parent;
        if (custom.quest) card.quest = custom.quest;
        if (custom.section) card.section = custom.section;
        if (custom.template) card.template = custom.template;
        if (custom.flag === "item" && custom.items && custom.items.length) card.items = itemLinks(custom.items);
        if (custom.blocks && custom.blocks.length) card.blocks = normalizeBlocks(custom.blocks);
        if (custom.flags && custom.flags.length) card.flags = custom.flags.slice();
        if (custom.enemies && custom.enemies.length) card.enemies = enemyLinks(custom.enemies);
        if (custom.enemyNote) card.enemyNote = custom.enemyNote;
        if (custom.enemyImage) card.enemyImage = custom.enemyImage;
      return card;
    }
    const base = routeIndex.byId.get(id);
    if (!base) return null;
    const card = applyPatch(base, book.patches && book.patches[id]);
    card.custom = false;
    return card;
  }

  function resolveChapterList(baseChapters, routeRows, book, trackId) {
    const base = (baseChapters || []).filter(chapter => chapter && chapter.id).map(chapter => ({
      id: String(chapter.id),
      title: chapter.title == null ? "" : String(chapter.title)
    }));
    const saved = book && book.chapterLists && book.chapterLists[trackId];
    if (Array.isArray(saved)) {
      return saved.filter(chapter => chapter && chapter.id).map(chapter => ({
        id: String(chapter.id),
        title: chapter.title == null ? "" : String(chapter.title)
      }));
    }
    const rows = routeRows || [];
    const authored = rows.some(row => row && Object.prototype.hasOwnProperty.call(row, "title"));
    if (!authored) return base;
    const baseById = new Map(base.map(chapter => [chapter.id, chapter]));
    const list = [];
    const seen = new Set();
    rows.forEach(row => {
      if (!row || !row.chapterId || seen.has(row.chapterId)) return;
      seen.add(row.chapterId);
      const known = baseById.get(row.chapterId);
      const title = row.title != null && row.title !== "" ? String(row.title) : ((known && known.title) || "");
      list.push({ id: String(row.chapterId), title: title });
    });
    return list;
  }

  function createChapterId(list) {
    const used = new Set((list || []).map(chapter => chapter.id));
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const id = "ch-user-" + Date.now().toString(36) + "-" + attempt.toString(36);
      if (!used.has(id)) return id;
    }
    return "ch-user-" + Date.now().toString(36);
  }

  function nextChapterTitle(list) {
    let max = 0;
    (list || []).forEach((chapter, index) => {
      const match = /^Chapter\s+(\d+)$/.exec(chapter.title || "");
      const number = match ? Number(match[1]) : index + 1;
      if (number > max) max = number;
    });
    return "Chapter " + (max + 1);
  }

  function insertChapter(list, afterId) {
    const next = (list || []).map(chapter => ({ id: chapter.id, title: chapter.title || "" }));
    const id = createChapterId(next);
    const title = nextChapterTitle(next);
    let at = next.findIndex(chapter => chapter.id === afterId);
    if (at < 0) at = next.length - 1;
    next.splice(at + 1, 0, { id: id, title: title });
    return { list: next, id: id, title: title };
  }

  function renameChapter(list, id, title) {
    return (list || []).map(chapter => chapter.id === id ? { id: chapter.id, title: title } : { id: chapter.id, title: chapter.title || "" });
  }

  function moveChapter(list, id, delta) {
    const next = (list || []).map(chapter => ({ id: chapter.id, title: chapter.title || "" }));
    const at = next.findIndex(chapter => chapter.id === id);
    const to = at + delta;
    if (at < 0 || to < 0 || to >= next.length) return next;
    const item = next.splice(at, 1)[0];
    next.splice(to, 0, item);
    return next;
  }

  function deleteChapter(list, id) {
    return (list || []).filter(chapter => chapter.id !== id).map(chapter => ({ id: chapter.id, title: chapter.title || "" }));
  }

  function mergeTrack(route, chapterDefs, book, trackId) {
    const safeBook = normalizeCardBook(book);
    const routeIndex = indexRoute(route || {});
    const rows = (route && route[trackId]) || [];
    const list = resolveChapterList(chapterDefs, rows, safeBook, trackId);
    const byChapter = new Map(rows.map(row => [row.chapterId, row.items || []]));
    return list.map(chapter => {
      const baseItems = byChapter.get(chapter.id) || [];
      const ids = mergeIdList(baseItems.map(item => item && item.id).filter(Boolean), safeBook, chapterKey(trackId, chapter.id));
      for (const id of Object.keys(safeBook.custom)) {
        const custom = safeBook.custom[id];
        if (custom.kind !== "route" || custom.trackId !== trackId || custom.chapterId !== chapter.id) continue;
        if (safeBook.deleted[id] || ids.indexOf(id) >= 0 || ownedElsewhere(safeBook, id, chapterKey(trackId, chapter.id))) continue;
        ids.push(id);
      }
      const baseRow = rows.find(row => row.chapterId === chapter.id);
      return {
        chapterId: chapter.id,
        title: chapter.title || "",
        sections: resolveSections(baseRow, safeBook, trackId, chapter.id),
        items: ids.map(id => resolveRouteCard(id, routeIndex, safeBook)).filter(Boolean)
      };
    });
  }

  function resolveCatalogCard(id, baseById, book) {
    if (book.deleted && book.deleted[id]) return null;
    const custom = book.custom && book.custom[id];
    if (custom && custom.kind === "catalog") {
      const card = {
        id,
        name: custom.name,
        detail: custom.detail,
        area: custom.area || "",
        source: custom.source || "",
        map: custom.map || "",
        missable: custom.missable === true,
        custom: true
      };
      if (custom.auto === "rest") card.auto = "rest";
      return card;
    }
    const base = baseById.get(id);
    if (!base) return null;
    const patch = book.patches && book.patches[id];
    const card = Object.assign({}, base, { custom: false });
    if (patch) {
      for (const key of CATALOG_FIELDS) {
        if (Object.prototype.hasOwnProperty.call(patch, key)) card[key] = key === "missable" ? patch[key] === true : patch[key];
      }
    }
    return card;
  }

  function mergeCatalog(catalog, book, catalogId) {
    const safeBook = normalizeCardBook(book);
    const baseItems = catalog && Array.isArray(catalog.items) ? catalog.items : [];
    const baseById = new Map(baseItems.filter(item => item && item.id).map(item => [item.id, item]));
    const ids = mergeIdList([...baseById.keys()], safeBook, catalogKey(catalogId));
    for (const id of Object.keys(safeBook.custom)) {
      const custom = safeBook.custom[id];
      if (custom.kind !== "catalog" || custom.catalogId !== catalogId) continue;
      if (safeBook.deleted[id] || ids.indexOf(id) >= 0 || ownedElsewhere(safeBook, id, catalogKey(catalogId))) continue;
      ids.push(id);
    }
    return ids.map(id => resolveCatalogCard(id, baseById, safeBook)).filter(Boolean);
  }

  function exportCatalogs(baseCatalogs, book) {
    const base = baseCatalogs || {};
    const safe = normalizeCardBook(book);
    const names = new Set(Object.keys(base));
    for (const id of Object.keys(safe.custom || {})) {
      const custom = safe.custom[id];
      if (custom && custom.kind === "catalog" && custom.catalogId) names.add(custom.catalogId);
    }
    const catalogs = {};
    names.forEach(name => {
      const source = base[name] && typeof base[name] === "object" ? base[name] : { items: [] };
      catalogs[name] = Object.assign({}, source, {
        items: mergeCatalog(source, safe, name).map(item => {
          const copy = Object.assign({}, item);
          delete copy.custom;
          return copy;
        })
      });
    });
    return catalogs;
  }

  function validateExportBundle(route, catalogs, baseCatalogs) {
    const errors = [];
    const required = ["quests", "trophies", "summons", "materia", "weapons", "keyItems", "consumables", "accessories", "armor"];
    required.forEach(name => {
      const items = catalogs && catalogs[name] && catalogs[name].items;
      if (!Array.isArray(items) || !items.length) errors.push(name + " の台帳が空です");
    });
    const base = baseCatalogs || {};
    Object.keys(base).forEach(name => {
      const baseCount = (base[name] && base[name].items || []).length;
      const nextCount = (catalogs && catalogs[name] && catalogs[name].items || []).length;
      if (baseCount > 0 && nextCount === 0) errors.push(name + " の台帳が落ちています");
    });
    const ids = new Set();
    Object.keys(catalogs || {}).forEach(name => {
      (catalogs[name].items || []).forEach(item => { if (item && item.id) ids.add(item.id); });
    });
    const seen = new Set();
    Object.keys(route || {}).forEach(trackId => {
      (route[trackId] || []).forEach(row => {
        (row.items || []).forEach(item => {
          (item && item.items || []).forEach(link => {
            if (link && ids.has(link.id) && link.qty >= 1) return;
            const key = (item && item.id || "") + ":" + (link && link.id || "");
            if (seen.has(key)) return;
            seen.add(key);
            errors.push((item && item.id || "カード") + " の " + (link && link.id || "アイテム") + " が台帳にありません");
          });
        });
      });
    });
    return errors;
  }

  function orderWithMove(ids, movingId, beforeId, after) {
    const next = (Array.isArray(ids) ? ids : []).filter(id => id && id !== movingId);
    if (!beforeId) {
      next.push(movingId);
      return next;
    }
    let at = next.indexOf(beforeId);
    if (at < 0) at = next.length;
    else if (after) at += 1;
    next.splice(at, 0, movingId);
    return next;
  }

  function saveOrder(book, key, order, baseIds) {
    const prev = book.chapters[key];
    const known = new Set(prev && prev.known && prev.known.length ? prev.known : baseIds);
    for (const id of baseIds) {
      if (order.indexOf(id) >= 0) known.add(id);
    }
    book.chapters[key] = { order: order.slice(), known: [...known] };
    if (prev && prev.sections) book.chapters[key].sections = prev.sections;
    return book;
  }

  function saveSections(book, key, sections) {
    const prev = book.chapters[key] || { order: [], known: [] };
    book.chapters[key] = Object.assign({}, prev, {
      sections: (sections || []).map(item => ({
        id: String(item.id),
        title: sectionName(item.title || ""),
        map: item.map || "",
        note: item.note || ""
      }))
    });
    return book;
  }

  function diffFields(base, next, fields) {
    const patch = {};
    const from = base || {};
    for (const key of fields) {
      const before = from[key] == null ? "" : from[key];
      const after = next[key] == null ? "" : next[key];
      if (key === "missable") {
        if ((from.missable === true) !== (next.missable === true)) patch.missable = next.missable === true;
        continue;
      }
      if (String(before) !== String(after)) patch[key] = after == null ? "" : after;
    }
    return patch;
  }

  function rememberRouteCustom(book, id, fields, trackId, chapterId) {
    book.custom[id] = {
      kind: "route",
      id,
      trackId,
      chapterId,
      title: fields.title,
      detail: fields.detail,
      flag: fields.flag,
      deadline: fields.deadline || "",
      source: fields.source || "",
      trophy: fields.flag === "trophy" ? fields.trophy || "" : "",
      map: fields.map || "",
      parent: fields.parent || "",
      quest: fields.quest || "",
      section: fields.section || "",
      template: fields.template || "",
      items: itemLinks(fields.items),
      blocks: normalizeBlocks(fields.blocks),
      flags: cardFlags(fields),
      enemies: enemyLinks(fields.enemies),
      enemyNote: fields.enemyNote || "",
      enemyImage: fields.enemyImage || ""
    };
  }

  function upsertRouteCard(book, baseItem, id, fields, trackId, chapterId, order, baseIds) {
    const next = cloneBook(book);
    if (next.custom[id] && next.custom[id].kind === "route") {
      rememberRouteCustom(next, id, fields, trackId, chapterId);
    } else if (baseItem) {
      const patch = diffFields(baseItem, fields, CARD_FIELDS);
      const nextItems = itemLinks(fields.items);
      const prevItems = itemLinks(baseItem && baseItem.items);
      if (JSON.stringify(nextItems) !== JSON.stringify(prevItems)) patch.items = nextItems;
      const nextFlags = cardFlags(fields);
      if (JSON.stringify(nextFlags) !== JSON.stringify(cardFlags(baseItem))) {
        patch.flags = nextFlags;
        patch.flag = nextFlags[0] || "";
      }
      const nextEnemies = enemyLinks(fields.enemies);
      if (JSON.stringify(nextEnemies) !== JSON.stringify(enemyLinks(baseItem && baseItem.enemies))) patch.enemies = nextEnemies;
      if (String(fields.enemyNote || "") !== String(baseItem.enemyNote || "")) patch.enemyNote = fields.enemyNote || "";
      if (String(fields.enemyImage || "") !== String(baseItem.enemyImage || "")) patch.enemyImage = fields.enemyImage || "";
      const nextBlocks = blockPatchFor(baseItem, fields);
      if (nextBlocks) patch.blocks = nextBlocks;
      if (nextBlocks) {
        const plain = plainFromBlocks(nextBlocks);
        if (plain !== String(baseItem.detail || "")) patch.detail = plain;
      }
      if (Object.keys(patch).length) next.patches[id] = patch;
      else delete next.patches[id];
    } else {
      rememberRouteCustom(next, id, fields, trackId, chapterId);
    }
    delete next.deleted[id];
    return saveOrder(next, chapterKey(trackId, chapterId), order, baseIds);
  }

  function upsertCatalogCard(book, baseItem, id, fields, catalogId, order, baseIds) {
    const next = cloneBook(book);
    if (!baseItem || (next.custom[id] && next.custom[id].kind === "catalog")) {
      next.custom[id] = {
        kind: "catalog",
        id,
        catalogId,
        name: fields.name,
        detail: fields.detail,
        area: fields.area || "",
        source: fields.source || "",
        map: fields.map || "",
        missable: fields.missable === true
      };
    } else {
      const patch = diffFields(baseItem, fields, CATALOG_FIELDS);
      if (Object.keys(patch).length) next.patches[id] = patch;
      else delete next.patches[id];
    }
    delete next.deleted[id];
    return saveOrder(next, catalogKey(catalogId), order, baseIds);
  }

  function removeFromOrders(book, id) {
    for (const key of Object.keys(book.chapters)) {
      book.chapters[key].order = (book.chapters[key].order || []).filter(item => item !== id);
    }
  }

  function removeCard(book, id) {
    const next = cloneBook(book);
    next.deleted[id] = true;
    delete next.custom[id];
    delete next.patches[id];
    removeFromOrders(next, id);
    return next;
  }

  function createCardId(used) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const taken = used || new Set();
    for (let attempt = 0; attempt < 30; attempt += 1) {
      let tail = "";
      for (let i = 0; i < 4; i += 1) tail += alphabet[Math.floor(Math.random() * alphabet.length)];
      const id = "user-" + Date.now().toString(36) + "-" + tail;
      if (!taken.has(id) && /^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/.test(id)) return id;
    }
    return "user-card-" + Date.now().toString(36);
  }

  function numberCards(items) {
    const list = Array.isArray(items) ? items.filter(item => item && item.id) : [];
    const ids = new Set(list.map(item => item.id));
    const kids = {};
    for (const item of list) {
      if (!item.parent || !ids.has(item.parent) || item.parent === item.id) continue;
      const chain = new Set([item.id]);
      let cursor = item.parent;
      let loop = false;
      while (cursor && ids.has(cursor)) {
        if (chain.has(cursor)) { loop = true; break; }
        chain.add(cursor);
        const parent = list.find(entry => entry.id === cursor);
        cursor = parent && parent.parent;
      }
      if (loop) continue;
      if (!kids[item.parent]) kids[item.parent] = [];
      kids[item.parent].push(item);
    }
    const childIds = new Set();
    Object.keys(kids).forEach(id => kids[id].forEach(child => childIds.add(child.id)));
    const numbers = {};
    const seen = new Set();
    const assign = (item, label) => {
      if (!item || seen.has(item.id)) return;
      seen.add(item.id);
      numbers[item.id] = label;
      (kids[item.id] || []).forEach((child, index) => assign(child, label + "-" + (index + 1)));
    };
    list.filter(item => !childIds.has(item.id)).forEach((item, index) => assign(item, String(index + 1)));
    return numbers;
  }

  function foldCards(flags, id, childrenOf, closed) {
    const next = Object.assign(Object.create(null), flags || {});
    const seen = new Set();
    const visit = current => {
      if (!current || seen.has(current)) return;
      seen.add(current);
      next[current] = closed === true;
      next["kids:" + current] = closed === true;
      const children = childrenOf && childrenOf[current];
      if (children) children.forEach(visit);
    };
    visit(id);
    return next;
  }

  function foldAll(flags, ids, closed) {
    const next = Object.assign(Object.create(null), flags || {});
    (ids || []).forEach(id => {
      if (!id) return;
      next[id] = closed === true;
      next["kids:" + id] = closed === true;
    });
    return next;
  }

  function clampMapFrame(frame, viewport) {
    const box = viewport || { width: 0, height: 0 };
    const viewWidth = Math.max(0, Number(box.width) || 0);
    const viewHeight = Math.max(0, Number(box.height) || 0);
    const maxWidth = Math.max(96, viewWidth - 16);
    const maxHeight = Math.max(96, viewHeight - 16);
    const width = Math.min(maxWidth, Math.max(Math.min(160, maxWidth), Number(frame && frame.width) || maxWidth));
    const height = Math.min(maxHeight, Math.max(Math.min(120, maxHeight), Number(frame && frame.height) || maxHeight));
    const left = Math.min(Math.max(8, Number(frame && frame.left) || 8), Math.max(8, viewWidth - width - 8));
    const top = Math.min(Math.max(8, Number(frame && frame.top) || 8), Math.max(8, viewHeight - height - 8));
    return { left: left, top: top, width: width, height: height };
  }

  function defaultMapFrame(viewport, anchor) {
    const box = viewport || { width: 0, height: 0 };
    const mobile = (Number(box.width) || 0) < 720;
    const width = mobile ? Math.min(260, Math.max(96, (Number(box.width) || 0) - 24)) : 320;
    const height = mobile ? 200 : 280;
    const placed = clampMapFrame({
      left: (Number(box.width) || 0) - width - 12,
      top: (Number(box.height) || 0) - height - 12,
      width: width,
      height: height
    }, box);
    const hits = frame => anchor && frame.left < anchor.right && frame.left + frame.width > anchor.left && frame.top < anchor.bottom && frame.top + frame.height > anchor.top;
    if (!hits(placed)) return placed;
    const above = clampMapFrame({ left: placed.left, top: 12, width: placed.width, height: placed.height }, box);
    if (!hits(above)) return above;
    return clampMapFrame({ left: 12, top: placed.top, width: placed.width, height: placed.height }, box);
  }

  function numberChapter(items, sections) {
    return numberCards(displayItems(items, sections));
  }

  const CIRCLED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳";

  function circledNumber(value) {
    const number = Number(value);
    if (number >= 1 && number <= CIRCLED.length) return CIRCLED.charAt(number - 1);
    return "(" + number + ")";
  }

  function tokenNumber(token) {
    const circled = CIRCLED.indexOf(token);
    if (circled >= 0) return circled + 1;
    const match = /^\((\d+)\)$/.exec(token || "");
    return match ? Number(match[1]) : 0;
  }

  function numbersFromTitle(title, label) {
    if (!title || !label || title.indexOf(label) !== 0) return [];
    let rest = title.slice(label.length).replace(/\s+/g, "");
    if (!rest) return [];
    const piece = "(?:[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]|\\(\\d+\\))";
    const pattern = new RegExp("^(" + piece + ")(?:[〜~\\-－](" + piece + "))?");
    const nums = [];
    while (rest) {
      const match = rest.match(pattern);
      if (!match) break;
      const start = tokenNumber(match[1]);
      const end = match[2] ? tokenNumber(match[2]) : start;
      if (!start || !end) break;
      const low = Math.min(start, end);
      const high = Math.max(start, end);
      for (let n = low; n <= high; n += 1) nums.push(n);
      rest = rest.slice(match[0].length);
    }
    return nums;
  }

  function templateHeadings(items, templates) {
    const list = (templates || []).filter(item => item && item.id && item.label).slice().sort((a, b) => b.label.length - a.label.length);
    const byId = {};
    list.forEach(item => { byId[item.id] = item.label; });
    const used = {};
    const headings = {};
    for (const item of items || []) {
      if (!item) continue;
      if (item.template && byId[item.template]) {
        const label = byId[item.template];
        const next = (used[label] || 0) + 1;
        used[label] = next;
        headings[item.id] = label + circledNumber(next);
        continue;
      }
      const title = item.title || "";
      for (const template of list) {
        const nums = numbersFromTitle(title, template.label);
        if (!nums.length) continue;
        used[template.label] = Math.max(used[template.label] || 0, Math.max.apply(null, nums));
        break;
      }
    }
    return headings;
  }

  function visibleMap(item, section) {
    const shared = section && section.map ? section.map : "";
    const own = item && item.map ? item.map : "";
    if (own && own !== shared) return own;
    return shared;
  }

  function displayItems(items, sections) {
    const groups = sections && sections.length ? sections : [{ id: "" }];
    const known = new Set(groups.map(section => section.id));
    const sectionOf = item => item && item.section && known.has(item.section) ? item.section : groups[0].id;
    const out = [];
    groups.forEach(section => {
      const mine = (items || []).filter(item => sectionOf(item) === section.id);
      const ids = new Set(mine.map(item => item.id));
      const kids = {};
      const tops = [];
      mine.forEach(item => {
        if (item.parent && ids.has(item.parent) && item.parent !== item.id) {
          if (!kids[item.parent]) kids[item.parent] = [];
          kids[item.parent].push(item);
        } else tops.push(item);
      });
      tops.forEach(item => {
        out.push(item);
        (kids[item.id] || []).forEach(child => out.push(child));
      });
    });
    return out;
  }

  function withChildIds(ids, items) {
    const wanted = new Set(ids || []);
    (items || []).forEach(item => {
      if (item && item.parent && wanted.has(item.parent)) wanted.add(item.id);
    });
    return (items || []).filter(item => item && wanted.has(item.id)).map(item => item.id);
  }

  function orderAfterSectionMove(order, movingIds, sectionOf, targetSection) {
    const moving = new Set(movingIds || []);
    const kept = (order || []).filter(id => !moving.has(id));
    const moved = (order || []).filter(id => moving.has(id));
    let at = kept.length;
    for (let i = kept.length - 1; i >= 0; i -= 1) {
      if (sectionOf(kept[i]) === targetSection) {
        at = i + 1;
        break;
      }
    }
    return kept.slice(0, at).concat(moved, kept.slice(at));
  }

  function orderInsertGroup(order, movingIds, beforeId, after) {
    const moving = new Set(movingIds || []);
    const rest = (order || []).filter(id => !moving.has(id));
    const block = (order || []).filter(id => moving.has(id));
    let at = beforeId ? rest.indexOf(beforeId) : rest.length;
    if (at < 0) at = rest.length;
    else if (after) at += 1;
    return rest.slice(0, at).concat(block, rest.slice(at));
  }

  const UI_LABELS = {
    "delete": "削除",
    "add": "＋追加",
    "copy": "コピー",
    "pick": "選択",
    "moveSelected": "選択を移動",
    "export": "書き出す",
    "up": "上へ",
    "down": "下へ",
    "edit": "編集",
    "move": "移動",
    "detail": "詳細",
    "map": "MAP",
    "kids": "中のカード",
    "addCard": "カードを追加",
    "addSection": "子チャプターを追加",
    "rename": "名前",
    "hint": "ヒント",
    "save": "保存",
    "cancel": "キャンセル",
    "templates": "定型文",
    "import": "読み込む",
    "resetEdits": "編集をすべて戻す",
    "endEdit": "編集を終了",
    "openSettings": "設定",
    "tab-route": "ルート",
    "tab-quests": "依頼",
    "tab-trophies": "トロフィー",
    "tab-items": "アイテム",
    "tab-settings": "設定",
    "tab-enemies": "エネミー"
  };

  function labelText(book, key, fallback) {
    const custom = book && book.labels && typeof book.labels[key] === "string" ? book.labels[key].trim() : "";
    if (custom) return custom;
    if (UI_LABELS[key]) return UI_LABELS[key];
    return fallback || key;
  }

  function sectionName(title) {
    return String(title || "").replace(/^\s*(?:[（(]\s*\d+\s*[)）]|[0-9０-９]+\s*[.．、])\s*/, "").trim();
  }

  function activeTemplates(book, defaults) {
    const custom = book && Array.isArray(book.templates) ? book.templates : [];
    return custom.length ? custom : (defaults || DEFAULT_TEMPLATES);
  }

  function escapeRichText(value) {
    return String(value || "").replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  }

  function colorValue(value) {
    const raw = String(value || "").trim();
    const hex = raw.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      let h = hex[1].toLowerCase();
      if (h.length === 3) h = h.split("").map(ch => ch + ch).join("");
      return "#" + h;
    }
    const rgb = raw.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (!rgb) return "";
    return "#" + rgb.slice(1, 4).map(part => Math.max(0, Math.min(255, Number(part))).toString(16).padStart(2, "0")).join("");
  }

  function spanAttrs(raw) {
    const attr = String(raw || "");
    const styleMatch = attr.match(/style\s*=\s*"([^"]*)"|style\s*=\s*'([^']*)'/i);
    const parts = [];
    if (styleMatch) {
      String(styleMatch[1] || styleMatch[2] || "").split(";").forEach(bit => {
        const splitAt = bit.indexOf(":");
        if (splitAt < 0) return;
        const key = bit.slice(0, splitAt).trim().toLowerCase();
        const val = bit.slice(splitAt + 1).trim();
        if (key === "color" || key === "background-color") {
          const color = colorValue(val);
          if (color) parts.push(key + ":" + color);
        } else if (key === "font-size" && /^(?:0\.85em|1em|1\.25em)$/i.test(val)) {
          parts.push("font-size:" + val.toLowerCase());
        } else if (key === "font-family") {
          const fam = val.toLowerCase();
          if (fam.includes("mono")) parts.push("font-family:ui-monospace,monospace");
          else if (fam.includes("serif") && !fam.includes("sans")) parts.push("font-family:serif");
        }
      });
    }
    const colorAttr = attr.match(/\scolor\s*=\s*"([^"]*)"|\scolor\s*=\s*'([^']*)'/i);
    if (colorAttr && !parts.some(part => part.startsWith("color:"))) {
      const color = colorValue(colorAttr[1] || colorAttr[2]);
      if (color) parts.push("color:" + color);
    }
    return parts.length ? ' style="' + parts.join(";") + '"' : "";
  }

  function sanitizeRich(input) {
    const html = String(input || "").replace(/<!--[\s\S]*?-->/g, "");
    const out = [];
    const stack = [];
    const re = /<\/?([a-zA-Z0-9]+)([^<>]*)>|[^<]+/g;
    let match;
    while ((match = re.exec(html))) {
      if (match[0][0] !== "<") {
        out.push(escapeRichText(match[0]));
        continue;
      }
      const name = match[1].toLowerCase();
      const closing = match[0][1] === "/";
      if (name === "br") {
        if (!closing) out.push("<br>");
        continue;
      }
      if (name === "div" || name === "p") {
        if (closing && out.length && out[out.length - 1] !== "<br>") out.push("<br>");
        continue;
      }
      const mapped = { b: "b", strong: "b", i: "i", em: "i", u: "u", s: "s", strike: "s", span: "span", font: "span" }[name];
      if (!mapped) continue;
      if (closing) {
        const at = stack.lastIndexOf(mapped);
        if (at < 0) continue;
        while (stack.length > at) out.push("</" + stack.pop() + ">");
        continue;
      }
      if (mapped === "span") {
        const attrs = spanAttrs(match[2] || "");
        if (!attrs) continue;
        out.push("<span" + attrs + ">");
      } else out.push("<" + mapped + ">");
      stack.push(mapped);
    }
    while (stack.length) out.push("</" + stack.pop() + ">");
    return out.join("").replace(/(?:<br>)+$/g, "");
  }

  function imageKeyFromUrl(url) {
    const match = String(url || "").match(/finalfantasy-jun-site\.com\/ff7_remake\/([^?#]+)/i);
    if (!match) return "";
    const path = match[1];
    const story = path.match(/^story\/chapter(\d+)\/([^/]+)$/i);
    if (story) return "jun-ch" + String(story[1]).padStart(2, "0") + "-" + story[2].toLowerCase();
    const quest = path.match(/^quest\/images\/([^/]+)$/i);
    if (quest) return "jun-quest-" + quest[1].toLowerCase();
    const field = path.match(/^field\/images\/([^/]+)$/i);
    if (field) return "jun-field-" + field[1].toLowerCase();
    const base = path.split("/").pop();
    return base ? "jun-" + base.toLowerCase() : "";
  }

  function isLibraryKey(value) {
    return /^jun-[a-z0-9._-]+\.(?:png|jpe?g|gif|webp)$/i.test(String(value || "").trim());
  }

  function hideMapAfterError(dragging, failedSrc, currentSrc) {
    if (dragging) return false;
    if (!currentSrc || !failedSrc || failedSrc !== currentSrc) return false;
    return true;
  }

  function excludeLibraryExports(files) {
    return (files || []).filter(file => {
      const path = String(file && file.path || "");
      if (!path || path === "ff7r-maps.zip") return false;
      if (/^image-library\//.test(path)) return false;
      return true;
    });
  }

  function validImageValue(src) {
    const value = String(src || "").trim();
    return /^https:\/\//i.test(value) || /^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(value) || /^(?:maps|images)\/[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g|gif|webp)$/i.test(value) || isLibraryKey(value);
  }

  function normalizeBlocks(value) {
    if (!Array.isArray(value)) return [];
    return value.map(normalizeBlock).filter(Boolean).slice(0, 24);
  }

  function normalizeBlock(block) {
    if (!block || typeof block !== "object") return null;
    const type = block.type;
    if (type === "text" || type === "callout") {
      const html = sanitizeRich(block.html || "");
      return html ? { type, html } : null;
    }
    if (type === "image") {
      const src = String(block.src || "").trim();
      if (!validImageValue(src)) return null;
      const width = ["s", "m", "l", "full"].indexOf(block.width) >= 0 ? block.width : "m";
      const align = ["left", "center", "right"].indexOf(block.align) >= 0 ? block.align : "center";
      const image = { type: "image", src, caption: String(block.caption || "").slice(0, 200), width, align };
      const pct = Math.round(Number(block.pct) / 5) * 5;
      if (pct >= 20 && pct <= 100) image.pct = pct;
      return image;
    }
    if (type === "columns") {
      const count = block.count === 3 ? 3 : 2;
      const source = Array.isArray(block.columns) ? block.columns : [];
      const columns = [];
      for (let i = 0; i < count; i += 1) {
        const children = Array.isArray(source[i]) ? source[i] : [];
        columns.push(children.map(child => {
          const next = normalizeBlock(child);
          return next && (next.type === "text" || next.type === "image") ? next : null;
        }).filter(Boolean).slice(0, 6));
      }
      if (!columns.some(col => col.length)) return null;
      let widths = Array.isArray(block.widths) ? block.widths.map(n => Number(n)).filter(n => n > 0).slice(0, count) : [];
      if (widths.length !== count) widths = Array.from({ length: count }, () => 100 / count);
      const sum = widths.reduce((total, n) => total + n, 0) || 100;
      widths = widths.map(n => Math.max(15, Math.round((n / sum) * 20) * 5));
      const head = widths.slice(0, -1).reduce((total, n) => total + n, 0);
      widths[widths.length - 1] = Math.max(15, 100 - head);
      return { type: "columns", count, arrow: block.arrow === true && count === 2, widths, columns };
    }
    if (type === "tiles") {
      const items = (Array.isArray(block.items) ? block.items : []).map(item => {
        const src = String(item && item.src || "").trim();
        if (!validImageValue(src)) return null;
        return { src, label: String(item && item.label || "").slice(0, 40) };
      }).filter(Boolean).slice(0, 8);
      return items.length ? { type: "tiles", items } : null;
    }
    return null;
  }

  function blocksFromDetail(detail) {
    const text = String(detail || "");
    if (!text) return [];
    const html = sanitizeRich(text.replace(/\r\n/g, "\n").replace(/\n/g, "<br>"));
    return html ? [{ type: "text", html }] : [];
  }

  function plainFromHtml(html) {
    return String(html || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }

  function plainFromBlocks(blocks) {
    const parts = [];
    normalizeBlocks(blocks).forEach(block => {
      if (block.type === "text" || block.type === "callout") parts.push(plainFromHtml(block.html));
      if (block.type === "image" && block.caption) parts.push(block.caption);
      if (block.type === "columns") block.columns.forEach(col => parts.push(plainFromBlocks(col)));
      if (block.type === "tiles") block.items.forEach(item => { if (item.label) parts.push(item.label); });
    });
    return parts.filter(part => part && part.trim()).join("\n");
  }

  function blockPatchFor(baseItem, fields) {
    if (!fields || !Object.prototype.hasOwnProperty.call(fields, "blocks")) return null;
    const nextBlocks = normalizeBlocks(fields.blocks);
    const prevBlocks = normalizeBlocks(baseItem && baseItem.blocks);
    if (!prevBlocks.length && JSON.stringify(nextBlocks) === JSON.stringify(blocksFromDetail(baseItem && baseItem.detail || ""))) return null;
    if (JSON.stringify(nextBlocks) === JSON.stringify(prevBlocks)) return null;
    return nextBlocks;
  }

  function blockHtml(blocks) {
    return normalizeBlocks(blocks).map((block, index) => renderBlock(block, String(index))).join("");
  }

  function renderBlock(block, path) {
    const attr = ' data-bpath="' + path + '"';
    if (block.type === "text") return '<div class="blk-text"' + attr + ">" + block.html + "</div>";
    if (block.type === "callout") return '<div class="blk-callout"' + attr + ">" + block.html + "</div>";
    if (block.type === "image") return renderImage(block, false, path);
    if (block.type === "tiles") {
      return '<div class="blk-tiles"' + attr + ">" + block.items.map((item, index) => '<figure class="blk-tile" data-bpath="' + path + ".tile." + index + '">' + renderImage(item, true, path + ".tile." + index) + (item.label ? "<figcaption>" + escapeRichText(item.label) + "</figcaption>" : "") + "</figure>").join("") + "</div>";
    }
    const style = block.arrow
      ? ' style="grid-template-columns:' + block.widths[0] + '% auto ' + block.widths[1] + '%"'
      : ' style="grid-template-columns:' + block.widths.map(n => n + "%").join(" ") + '"';
    const cols = block.columns.map((col, index) => {
      const split = index < block.columns.length - 1 ? '<i class="blk-split" data-split="' + index + '" data-bpath="' + path + '"></i>' : "";
      return '<div class="blk-col">' + col.map((child, childIndex) => renderBlock(child, path + "." + index + "." + childIndex)).join("") + split + "</div>";
    });
    if (block.arrow) cols.splice(1, 0, '<div class="blk-arrow" aria-hidden="true">→</div>');
    return '<div class="blk-cols c' + block.count + (block.arrow ? " has-arrow" : "") + '"' + attr + style + ">" + cols.join("") + "</div>";
  }

  function renderImage(block, bare, path) {
    const src = escapeRichText(block.src);
    const caption = escapeRichText(block.caption || "");
    const width = block.width || "m";
    const align = block.align || "center";
    const pct = block.pct ? ' style="width:' + block.pct + '%"' : "";
    const library = isLibraryKey(block.src);
    const image = library
      ? '<button type="button" class="blk-zoom" data-zoom-src="' + src + '" data-zoom-label="' + (caption || escapeRichText(block.label || "")) + '"><img data-lib="' + src + '" alt="' + (caption || "画像が未登録") + '" decoding="async"></button>'
      : '<button type="button" class="blk-zoom" data-zoom-src="' + src + '" data-zoom-label="' + (caption || escapeRichText(block.label || "")) + '"><img src="' + src + '" alt="' + (caption || escapeRichText(block.label || "")) + '" loading="lazy" decoding="async"></button>';
    if (bare) return image;
    return '<figure class="blk-img w-' + width + " align-" + align + '" data-bpath="' + path + '"' + pct + ">" + image + '<i class="blk-resize" data-bpath="' + path + '"></i>' + (caption ? "<figcaption>" + caption + "</figcaption>" : "") + "</figure>";
  }

  function validateRouteFields(fields, flagIds, trophyIds) {
    const title = String(fields && fields.title || "").trim();
    const detail = String(fields && fields.detail || "").trim();
    const flags = cardFlags(fields).filter(id => !flagIds || flagIds.indexOf(id) >= 0);
    const flag = flags[0] || "";
    const source = String(fields && fields.source || "").trim();
    const deadline = String(fields && fields.deadline || "").trim();
    const trophy = String(fields && fields.trophy || "").trim();
    const template = String(fields && fields.template || "").trim();
    if (!title && !template) return { error: "見出しが空です。" };
    if (!flags.length) return { error: "タグを1つ以上選んでください。" };
    if (source && !/^https:\/\//i.test(source)) return { error: "出典は https:// から始めるか、空にします。" };
    if (flags.indexOf("trophy") >= 0 && !trophy) return { error: "トロフィーを選んでください。" };
    if (trophy && trophyIds && trophyIds.indexOf(trophy) < 0) return { error: "選んだトロフィーが台帳にありません。" };
    const map = String(fields && fields.map || "").trim();
    if (map && !validMapValue(map)) return { error: "地図は章のID、https:// の画像、または画像ファイルにしてください。" };
    const parent = String(fields && fields.parent || "").trim();
    const quest = String(fields && fields.quest || "").trim();
    const section = String(fields && fields.section || "").trim();
    const items = itemLinks(fields && fields.items);
    const enemies = enemyLinks(fields && fields.enemies);
    const enemyNote = String(fields && fields.enemyNote || "").slice(0, 400);
    const enemyImage = String(fields && fields.enemyImage || "").trim();
    if (enemyImage && !validImageValue(enemyImage)) return { error: "戦闘用の画像は https:// か、画像ファイルにしてください。" };
    const blocks = normalizeBlocks(fields && fields.blocks);
    const plain = blocks.length ? plainFromBlocks(blocks) : "";
    return { value: { title, detail: plain || detail, flag, flags, source, deadline, trophy, map, parent, quest, section, template, items, blocks, enemies, enemyNote, enemyImage } };
  }

  function validateCatalogFields(fields) {
    const name = String(fields && fields.name || "").trim();
    const detail = String(fields && fields.detail || "").trim();
    const area = String(fields && fields.area || "").trim();
    const source = String(fields && fields.source || "").trim();
    if (!name) return { error: "名前が空です。" };
    if (!detail) return { error: "説明が空です。" };
    if (source && !/^https:\/\//i.test(source)) return { error: "出典は https:// から始めるか、空にします。" };
    const map = String(fields && fields.map || "").trim();
    if (map && !validMapValue(map)) return { error: "地図は章のID、https:// の画像、または画像ファイルにしてください。" };
    return { value: { name, detail, area, source, map, missable: !!(fields && fields.missable) } };
  }

  function validMapValue(map) {
    return /^chapter[0-9-]+$/.test(map) || /^https:\/\//i.test(map) || /^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(map) || /^maps\/[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g|gif|webp)$/i.test(map);
  }

  function orderForSave(ids, id, parentId, previousParent, insertAfter) {
    const list = (Array.isArray(ids) ? ids : []).filter(item => item);
    const exists = list.indexOf(id) >= 0;
    const parent = parentId || "";
    const previous = previousParent || "";
    if (exists && parent === previous) return list.slice();
    const without = list.filter(item => item !== id);
    if (insertAfter) {
      const at = without.indexOf(insertAfter);
      without.splice(at < 0 ? without.length : at + 1, 0, id);
      return without;
    }
    if (parent) {
      const at = without.indexOf(parent);
      without.splice(at < 0 ? without.length : at + 1, 0, id);
      return without;
    }
    without.push(id);
    return without;
  }

  function assignMapFile(hash, ext, manifest) {
    const list = Array.isArray(manifest) ? manifest.slice() : [];
    const found = list.find(item => item && item.hash === hash);
    if (found) return { manifest: list, file: found.file, added: null };
    const safeExt = /^(png|jpe?g|gif|webp)$/i.test(ext) ? ext.toLowerCase().replace("jpeg", "jpg") : "png";
    const id = "user-" + String(hash || "").slice(0, 12);
    const file = "maps/" + id + "." + safeExt;
    const entry = { id, label: "追加した地図", file, hash };
    list.push(entry);
    return { manifest: list, file, added: entry };
  }

  function assignImageFile(hash, ext, manifest) {
    const list = Array.isArray(manifest) ? manifest.slice() : [];
    const found = list.find(item => item && item.hash === hash);
    if (found) return { manifest: list, file: found.file, added: null };
    const safeExt = /^(png|jpe?g|gif|webp)$/i.test(ext) ? ext.toLowerCase().replace("jpeg", "jpg") : "png";
    const id = "user-" + String(hash || "").slice(0, 12);
    const file = "images/" + id + "." + safeExt;
    const entry = { id, label: "追加した画像", file, hash };
    list.push(entry);
    return { manifest: list, file, added: entry };
  }

  function mapBlockImages(blocks, mapOf) {
    return normalizeBlocks(blocks).map(block => {
      if (block.type === "image") {
        const src = /^data:image\//i.test(block.src) ? (mapOf(block.src) || block.src) : block.src;
        return Object.assign({}, block, { src });
      }
      if (block.type === "tiles") {
        return Object.assign({}, block, {
          items: block.items.map(item => Object.assign({}, item, {
            src: /^data:image\//i.test(item.src) ? (mapOf(item.src) || item.src) : item.src
          }))
        });
      }
      if (block.type === "columns") {
        return Object.assign({}, block, { columns: block.columns.map(col => mapBlockImages(col, mapOf)) });
      }
      return block;
    });
  }

  function replaceMapValues(route, catalogs, lookup) {
    const mapOf = typeof lookup === "function" ? lookup : (value => lookup[value] || value);
    const nextRoute = {};
    for (const trackId of Object.keys(route || {})) {
      nextRoute[trackId] = (route[trackId] || []).map(row => ({
        chapterId: row.chapterId,
        sections: row.sections || [],
        items: (row.items || []).map(item => {
          if (!item) return item;
          let next = item;
          if (item.map && /^data:image\//i.test(item.map)) {
            const file = mapOf(item.map);
            next = Object.assign({}, next, { map: file || item.map });
          }
          if (next.blocks && next.blocks.length) next = Object.assign({}, next, { blocks: mapBlockImages(next.blocks, mapOf) });
          return next;
        })
      }));
    }
    const nextCatalogs = {};
    for (const name of Object.keys(catalogs || {})) {
      const catalog = catalogs[name] || {};
      nextCatalogs[name] = Object.assign({}, catalog, {
        items: (catalog.items || []).map(item => {
          if (!item || !item.map || !/^data:image\//i.test(item.map)) return item;
          const file = mapOf(item.map);
          return Object.assign({}, item, { map: file || item.map });
        })
      });
    }
    return { route: nextRoute, catalogs: nextCatalogs };
  }

  function sourceValue(value, indent) {
    const pad = " ".repeat(indent);
    const padIn = " ".repeat(indent + 2);
    if (typeof value === "string") return JSON.stringify(value);
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (Array.isArray(value)) {
      if (!value.length) return "[]";
      return "[\n" + value.map(item => padIn + sourceValue(item, indent + 2)).join(",\n") + "\n" + pad + "]";
    }
    const keys = Object.keys(value || {}).filter(key => value[key] !== undefined && value[key] !== "");
    if (!keys.length) return "{}";
    return "{\n" + keys.map(key => padIn + key + ": " + sourceValue(value[key], indent + 2)).join(",\n") + "\n" + pad + "}";
  }

  function routeModuleSource(route) {
    const clean = {};
    for (const trackId of Object.keys(route || {})) {
      clean[trackId] = (route[trackId] || []).map(row => ({
        chapterId: row.chapterId,
        title: row.title || "",
        sections: (row.sections || []).map(section => ({
          id: section.id,
          title: section.title || "",
          map: section.map || "",
          note: section.note || ""
        })),
        items: (row.items || []).map(item => {
          const copy = Object.assign({}, item);
          delete copy.custom;
          if (!copy.trophy) delete copy.trophy;
          if (!copy.deadline) delete copy.deadline;
          if (!copy.source) delete copy.source;
          if (!copy.map) delete copy.map;
          if (!copy.parent) delete copy.parent;
          if (!copy.quest) delete copy.quest;
          if (!copy.section) delete copy.section;
          if (!copy.template) delete copy.template;
          if (!copy.items || !copy.items.length) delete copy.items;
          if (!copy.blocks || !copy.blocks.length) delete copy.blocks;
          if (!copy.flags || copy.flags.length < 2) delete copy.flags;
          if (!copy.enemies || !copy.enemies.length) delete copy.enemies;
          if (!copy.enemyNote) delete copy.enemyNote;
          if (!copy.enemyImage) delete copy.enemyImage;
          return copy;
        })
      }));
    }
    return "const ROUTE = " + sourceValue(clean, 0) + ";\n\nglobalThis.ROUTE = ROUTE;\n";
  }

  function catalogsModuleSource(catalogs) {
    return "const CATALOGS = " + sourceValue(catalogs, 0) + ";\n\nglobalThis.CATALOGS = CATALOGS;\n";
  }

  function utf8ToBase64(text) {
    return btoa(unescape(encodeURIComponent(String(text))));
  }

  function base64ToUtf8(value) {
    return decodeURIComponent(escape(atob(String(value || "").replace(/\s/g, ""))));
  }

  async function githubApi(fetchImpl, token, method, path, payload) {
    const res = await fetchImpl("https://api.github.com" + path, {
      method: method,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: payload == null ? undefined : JSON.stringify(payload)
    });
    const raw = await res.text();
    let body = null;
    try { body = raw ? JSON.parse(raw) : null; } catch (error) { body = { message: String(raw).slice(0, 180) }; }
    return { ok: res.ok, status: res.status, body: body };
  }

  async function githubTest(fetchImpl, token, owner, repo) {
    const res = await githubApi(fetchImpl, token, "GET", "/repos/" + owner + "/" + repo);
    if (!res.ok) return { ok: false, push: false, error: (res.body && res.body.message) || ("HTTP " + res.status) };
    const push = !!(res.body && res.body.permissions && res.body.permissions.push === true);
    return { ok: push, push: push, fullName: res.body.full_name || "" };
  }

  async function githubCommitOnce(fetchImpl, token, spec) {
    const base = "/repos/" + spec.owner + "/" + spec.repo;
    const ref = await githubApi(fetchImpl, token, "GET", base + "/git/ref/heads/" + spec.branch);
    if (!ref.ok) throw new Error((ref.body && ref.body.message) || "ブランチを読めませんでした");
    const head = ref.body.object.sha;
    const parent = await githubApi(fetchImpl, token, "GET", base + "/git/commits/" + head);
    if (!parent.ok) throw new Error("直前のコミットを読めませんでした");
    const items = [];
    for (const file of spec.files) {
      const blob = await githubApi(fetchImpl, token, "POST", base + "/git/blobs", { content: file.base64, encoding: "base64" });
      if (!blob.ok) throw new Error((file.path || "blob") + " を送れませんでした");
      items.push({ path: file.path, mode: "100644", type: "blob", sha: blob.body.sha });
    }
    const tree = await githubApi(fetchImpl, token, "POST", base + "/git/trees", { base_tree: parent.body.tree.sha, tree: items });
    if (!tree.ok) throw new Error("ツリーを作れませんでした");
    const made = await githubApi(fetchImpl, token, "POST", base + "/git/commits", { message: spec.message, tree: tree.body.sha, parents: [head] });
    if (!made.ok) throw new Error("コミットを作れませんでした");
    const updated = await githubApi(fetchImpl, token, "PATCH", base + "/git/refs/heads/" + spec.branch, { sha: made.body.sha });
    return { updated: updated, sha: made.body.sha, url: made.body.html_url || ("https://github.com/" + spec.owner + "/" + spec.repo + "/commit/" + made.body.sha) };
  }

  async function githubCommit(fetchImpl, token, spec) {
    const first = await githubCommitOnce(fetchImpl, token, spec);
    const message = first.updated.body && first.updated.body.message || "";
    if (first.updated.status === 409 || /fast[- ]forward/i.test(message)) {
      const second = await githubCommitOnce(fetchImpl, token, spec);
      if (!second.updated.ok) throw new Error((second.updated.body && second.updated.body.message) || "main が先に更新されていたため、書き出せませんでした");
      return { sha: second.sha, url: second.url };
    }
    if (!first.updated.ok) throw new Error(message || "main を更新できませんでした");
    return { sha: first.sha, url: first.url };
  }

  const GITHUB_STORE = "ff7r-github-admin-v1";

  async function githubReadFiles(fetchImpl, token, owner, repo, branch, paths) {
    const out = {};
    for (const path of paths) {
      const res = await githubApi(fetchImpl, token, "GET", "/repos/" + owner + "/" + repo + "/contents/" + path + "?ref=" + encodeURIComponent(branch));
      if (res.status === 404) continue;
      if (!res.ok) throw new Error(path + " を読めませんでした");
      out[path] = base64ToUtf8(res.body.content || "");
    }
    return out;
  }

  function mergedRoute(route, chapterMap, book) {
    const out = {};
    for (const trackId of Object.keys(chapterMap || {})) {
      out[trackId] = mergeTrack(route, chapterMap[trackId] || [], book, trackId);
    }
    return out;
  }

  return {
    APP,
    emptyState,
    normalizeState,
    acceptImport,
    acceptBundle,
    summarize,
    reconcileChecks,
    applyToggle,
    emptyCardBook,
    normalizeCardBook,
    mergeTrack,
    resolveChapterList,
    insertChapter,
    renameChapter,
    moveChapter,
    deleteChapter,
    mergeCatalog,
    exportCatalogs,
    validateExportBundle,
    mergedRoute,
    cardFlags,
    suggestMatches,
    statForMode,
    utf8ToBase64,
    base64ToUtf8,
    githubTest,
    githubCommit,
    githubReadFiles,
    GITHUB_STORE,
    enemyLinks,
    numberCards,
    foldCards,
    foldAll,
    imageKeyFromUrl,
    isLibraryKey,
    hideMapAfterError,
    excludeLibraryExports,
    clampMapFrame,
    defaultMapFrame,
    numberChapter,
    circledNumber,
    templateHeadings,
    UI_LABELS,
    labelText,
    sectionName,
    resolveSections,
    orderInsertGroup,
    numbersFromTitle,
    visibleMap,
    displayItems,
    withChildIds,
    orderAfterSectionMove,
    activeTemplates,
    DEFAULT_TEMPLATES,
    orderWithMove,
    orderForSave,
    assignMapFile,
    assignImageFile,
    sanitizeRich,
    normalizeBlocks,
    blocksFromDetail,
    plainFromBlocks,
    blockHtml,
    validImageValue,
    replaceMapValues,
    saveOrder,
    saveSections,
    upsertRouteCard,
    upsertCatalogCard,
    removeCard,
    createCardId,
    validateRouteFields,
    validateCatalogFields,
    routeModuleSource,
    catalogsModuleSource,
    diffFields
  };
});
