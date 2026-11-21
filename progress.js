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

  return { APP, emptyState, normalizeState, acceptImport, summarize, reconcileChecks, applyToggle };
});
