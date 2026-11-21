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
      else if (band.has(item.flag)) openBand += 1;
    }
    return { total: list.length, done, openBand };
  }

  const CARD_FIELDS = ["title", "detail", "flag", "deadline", "source", "trophy"];
  const CATALOG_FIELDS = ["name", "detail", "area", "source", "missable"];

  function emptyCardBook() {
    return { version: 1, deleted: {}, patches: {}, custom: {}, chapters: {} };
  }

  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }

  function stringList(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(item => typeof item === "string" && item);
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
      for (const key of ["title", "detail", "flag", "deadline", "source", "trophy", "name", "area"]) {
        if (Object.prototype.hasOwnProperty.call(raw, key) && (typeof raw[key] === "string" || raw[key] == null)) {
          patch[key] = raw[key] == null ? "" : String(raw[key]);
        }
      }
      if (Object.prototype.hasOwnProperty.call(raw, "missable")) patch.missable = raw.missable === true;
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
      } else {
        card.catalogId = typeof raw.catalogId === "string" ? raw.catalogId : "";
        card.name = raw.name == null ? "" : String(raw.name);
        card.detail = raw.detail == null ? "" : String(raw.detail);
        card.area = raw.area == null ? "" : String(raw.area);
        card.source = raw.source == null ? "" : String(raw.source);
        card.missable = raw.missable === true;
        if (raw.auto === "rest") card.auto = "rest";
      }
      book.custom[id] = card;
    }
    for (const key of Object.keys(asObject(src.chapters))) {
      const raw = asObject(src.chapters[key]);
      book.chapters[key] = { order: stringList(raw.order), known: stringList(raw.known) };
    }
    return book;
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
      return card;
    }
    const base = routeIndex.byId.get(id);
    if (!base) return null;
    const card = applyPatch(base, book.patches && book.patches[id]);
    card.custom = false;
    return card;
  }

  function mergeTrack(route, chapterDefs, book, trackId) {
    const safeBook = normalizeCardBook(book);
    const routeIndex = indexRoute(route || {});
    const rows = (route && route[trackId]) || [];
    const byChapter = new Map(rows.map(row => [row.chapterId, row.items || []]));
    return (chapterDefs || []).map(chapter => {
      const baseItems = byChapter.get(chapter.id) || [];
      const ids = mergeIdList(baseItems.map(item => item && item.id).filter(Boolean), safeBook, chapterKey(trackId, chapter.id));
      for (const id of Object.keys(safeBook.custom)) {
        const custom = safeBook.custom[id];
        if (custom.kind !== "route" || custom.trackId !== trackId || custom.chapterId !== chapter.id) continue;
        if (safeBook.deleted[id] || ids.indexOf(id) >= 0 || ownedElsewhere(safeBook, id, chapterKey(trackId, chapter.id))) continue;
        ids.push(id);
      }
      return {
        chapterId: chapter.id,
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

  function saveOrder(book, key, order, baseIds) {
    const prev = book.chapters[key];
    const known = new Set(prev && prev.known && prev.known.length ? prev.known : baseIds);
    for (const id of baseIds) {
      if (order.indexOf(id) >= 0) known.add(id);
    }
    book.chapters[key] = { order: order.slice(), known: [...known] };
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
      trophy: fields.flag === "trophy" ? fields.trophy || "" : ""
    };
  }

  function upsertRouteCard(book, baseItem, id, fields, trackId, chapterId, order, baseIds) {
    const next = cloneBook(book);
    if (next.custom[id] && next.custom[id].kind === "route") {
      rememberRouteCustom(next, id, fields, trackId, chapterId);
    } else if (baseItem) {
      const patch = diffFields(baseItem, fields, CARD_FIELDS);
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

  function validateRouteFields(fields, flagIds, trophyIds) {
    const title = String(fields && fields.title || "").trim();
    const detail = String(fields && fields.detail || "").trim();
    const flag = fields && fields.flag;
    const source = String(fields && fields.source || "").trim();
    const deadline = String(fields && fields.deadline || "").trim();
    const trophy = String(fields && fields.trophy || "").trim();
    if (!title) return { error: "見出しが空です。" };
    if (!detail) return { error: "本文が空です。" };
    if (!flagIds || flagIds.indexOf(flag) < 0) return { error: "タグが未定義です。" };
    if (source && !/^https:\/\//i.test(source)) return { error: "出典は https:// から始めるか、空にします。" };
    if (flag === "trophy" && !trophy) return { error: "トロフィーを選んでください。" };
    if (trophy && trophyIds && trophyIds.indexOf(trophy) < 0) return { error: "選んだトロフィーが台帳にありません。" };
    if (flag !== "trophy" && trophy) return { error: "トロフィーの紐付けは、タグがトロフィーのときだけです。" };
    return { value: { title, detail, flag, source, deadline, trophy: flag === "trophy" ? trophy : "" } };
  }

  function validateCatalogFields(fields) {
    const name = String(fields && fields.name || "").trim();
    const detail = String(fields && fields.detail || "").trim();
    const area = String(fields && fields.area || "").trim();
    const source = String(fields && fields.source || "").trim();
    if (!name) return { error: "名前が空です。" };
    if (!detail) return { error: "説明が空です。" };
    if (source && !/^https:\/\//i.test(source)) return { error: "出典は https:// から始めるか、空にします。" };
    return { value: { name, detail, area, source, missable: !!(fields && fields.missable) } };
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
        items: (row.items || []).map(item => {
          const copy = Object.assign({}, item);
          delete copy.custom;
          if (!copy.trophy) delete copy.trophy;
          if (!copy.deadline) delete copy.deadline;
          if (!copy.source) delete copy.source;
          return copy;
        })
      }));
    }
    return "const ROUTE = " + sourceValue(clean, 0) + ";\n\nglobalThis.ROUTE = ROUTE;\n";
  }

  function catalogsModuleSource(catalogs) {
    return "const CATALOGS = " + sourceValue(catalogs, 0) + ";\n\nglobalThis.CATALOGS = CATALOGS;\n";
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
    mergeCatalog,
    mergedRoute,
    saveOrder,
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
