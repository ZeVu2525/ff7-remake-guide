(function () {
  const storage = GAME.storage;
  const bandFlags = new Set(GAME.flags.filter(flag => flag.band).map(flag => flag.id));
  const flagById = Object.fromEntries(GAME.flags.map(flag => [flag.id, flag]));

  const ui = {
    trackId: "main",
    flag: "all",
    query: "",
    chapterId: "",
    catalogQuery: Object.create(null),
    catalogFacet: Object.create(null),
    itemSection: "keyItems",
    itemSort: { key: "name", dir: 1 },
    collapsed: Object.create(null),
    hub: "route",
    enemyId: "",
    enemyKind: "normal"
  };
  globalThis.GuideSelect = globalThis.GuideSelect || new Set();
  let chapterFilter = {};
  try {
    const saved = JSON.parse(localStorage.getItem(storage.chapterFilter) || "{}");
    if (saved && typeof saved === "object") chapterFilter = saved;
  } catch (error) {
    chapterFilter = {};
  }
  if (typeof chapterFilter.main === "string") ui.chapterId = chapterFilter.main;

  let state = GuideProgress.emptyState();
  let cardBook = GuideProgress.emptyCardBook();
  try {
    state = GuideProgress.normalizeState(JSON.parse(localStorage.getItem(storage.state) || "null"));
  } catch (error) {
    state = GuideProgress.emptyState();
  }
  try {
    cardBook = GuideProgress.normalizeCardBook(JSON.parse(localStorage.getItem(storage.cardEdits) || "null"));
  } catch (error) {
    cardBook = GuideProgress.emptyCardBook();
  }
  for (const id of Object.keys(state.checks)) {
    if (cardBook.deleted[id]) delete state.checks[id];
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function save() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(storage.state, JSON.stringify(state));
      return true;
    } catch (error) {
      setStatus("このブラウザには進行を保存できなかった。", true);
      return false;
    }
  }

  function setStatus(message, isError) {
    const el = document.getElementById("save-status");
    if (!el) return;
    el.textContent = message;
    el.classList.toggle("is-error", !!isError);
  }

  function checked(id) {
    return state.checks[id] === true;
  }

  function backup() {
    try {
      localStorage.setItem(storage.backup, JSON.stringify(state));
      updateRestore();
      return true;
    } catch (error) {
      setStatus("自動の控えを作れなかった。", true);
      return false;
    }
  }

  function updateRestore() {
    const button = document.getElementById("restore");
    if (!button) return;
    let available = false;
    try { available = !!localStorage.getItem(storage.backup); } catch (error) {}
    button.disabled = !available;
  }

  function cardEditing() {
    return document.body.classList.contains("is-card-edit");
  }

  function saveBook() {
    try {
      localStorage.setItem(storage.cardEdits, JSON.stringify(cardBook));
    } catch (error) {
      setStatus("カードの編集を保存できなかった。", true);
    }
  }

  function chaptersFor(trackId) {
    const defs = GAME.chapters[trackId] || [];
    const merged = GuideProgress.mergeTrack(ROUTE, defs, cardBook, trackId);
    const itemsByChapter = new Map(merged.map(row => [row.chapterId, row.items || []]));
    return defs.map(chapter => {
      const row = merged.find(item => item.chapterId === chapter.id);
      return {
        id: chapter.id,
        title: chapter.title,
        items: itemsByChapter.get(chapter.id) || [],
        sections: row && row.sections || []
      };
    });
  }

  function baseItems(trackId, chapterId) {
    const row = (ROUTE[trackId] || []).find(item => item.chapterId === chapterId);
    return row && row.items ? row.items.filter(item => item && item.id) : [];
  }

  function routeItems(trackId) {
    return chaptersFor(trackId).flatMap(chapter => chapter.items.map(item => ({
      trackId,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      kind: "route",
      id: item.id,
      flag: item.flag,
      example: item.example,
      title: item.title,
      detail: item.detail,
      deadline: item.deadline,
      source: item.source,
      trophy: item.trophy || "",
      step: item.step || 0,
      map: item.map || "",
      parent: item.parent || "",
      quest: item.quest || "",
      items: Array.isArray(item.items) ? item.items : []
    })));
  }

  function trophyItems() {
    return (CATALOGS.trophies && CATALOGS.trophies.items) || [];
  }

  function trophyById(id) {
    return trophyItems().find(item => item.id === id) || null;
  }

  function trophyMeta() {
    const cardToTrophy = Object.create(null);
    const trophyToCards = Object.create(null);
    for (const track of GAME.tracks) {
      for (const item of routeItems(track.id)) {
        if (!item.trophy) continue;
        cardToTrophy[item.id] = item.trophy;
        if (!trophyToCards[item.trophy]) trophyToCards[item.trophy] = [];
        trophyToCards[item.trophy].push(item.id);
      }
    }
    const platinum = trophyItems().find(item => item.auto === "rest");
    return {
      cardToTrophy,
      trophyToCards,
      trophyIds: trophyItems().map(item => item.id),
      platinumId: platinum ? platinum.id : null
    };
  }

  function cardsForTrophy(trophyId) {
    const found = [];
    for (const track of GAME.tracks) {
      for (const item of routeItems(track.id)) {
        if (item.trophy === trophyId) found.push(item);
      }
    }
    return found;
  }

  function catalogItems(catalogId) {
    const catalog = CATALOGS[catalogId];
    if (!catalog) return [];
    return GuideProgress.mergeCatalog(catalog, cardBook, catalogId).map(item => Object.assign({ kind: "catalog", catalogId }, item));
  }

  function matchesQuery(item, query) {
    if (!query) return true;
    const hay = [item.title, item.name, item.detail, item.deadline, item.area, item.id, item.chapterTitle, item.trophy]
      .filter(Boolean)
      .join("\n")
      .toLowerCase();
    return hay.includes(query.toLowerCase());
  }

  function itemVisible(item) {
    const flags = GuideProgress.cardFlags(item);
    if (ui.flag === "todo" && checked(item.id)) return false;
    if (ui.flag === "band" && !flags.some(flag => bandFlags.has(flag))) return false;
    if (ui.flag !== "all" && ui.flag !== "todo" && ui.flag !== "band" && flags.indexOf(ui.flag) < 0) return false;
    return matchesQuery(item, ui.query);
  }

  function chapterKey(id) {
    return "chapter:" + ui.trackId + ":" + id;
  }

  function sourceLine() {
    return "";
  }

  function flagTag(flagId) {
    const flag = flagById[flagId];
    if (!flag) return "";
    return `<span class="tag tone-${esc(flag.tone || flag.id)}">${esc(flag.label)}</span>`;
  }

  function flagTags(item) {
    return GuideProgress.cardFlags(item).map(flagTag).join("");
  }

  function hasFlag(item, id) {
    return GuideProgress.cardFlags(item).indexOf(id) >= 0;
  }

  function exampleMark(item) {
    return item.example ? '<span class="example-mark">例</span>' : "";
  }

  function itemSections() {
    const hub = GAME.hubs.find(item => item.kind === "items");
    return hub && hub.sections || [];
  }

  function findEntry(id) {
    for (const track of GAME.tracks) {
      for (const item of routeItems(track.id)) {
        if (item.id === id) return { hub: "route", trackId: track.id, chapterId: item.chapterId };
      }
    }
    for (const hub of GAME.hubs) {
      if (hub.kind !== "catalog") continue;
      for (const item of catalogItems(hub.catalog)) {
        if (item.id === id) return { hub: hub.id };
      }
    }
    for (const section of itemSections()) {
      for (const item of catalogItems(section.catalog)) {
        if (item.id === id) return { hub: "items", section: section.catalog };
      }
    }
    return null;
  }

  function cardElement(id) {
    const cards = document.querySelectorAll("[data-id]");
    for (const card of cards) {
      if (card.getAttribute("data-id") === id) return card;
    }
    return null;
  }

  function renderHeader() {
    document.title = GAME.title + " — 攻略ガイド";
    document.getElementById("site-title").innerHTML = `${esc(GAME.title)}<span>${esc(GAME.subtitle || "")}</span>`;
    document.getElementById("theme-select").innerHTML = GAME.themes
      .map(theme => `<option value="${esc(theme.id)}">${esc(theme.label)}</option>`)
      .join("");
  }

  function renderTabs() {
    document.getElementById("tabs").innerHTML = GAME.hubs.map(hub => {
      const on = hub.id === ui.hub;
      const text = GuideProgress.labelText(cardBook, "tab-" + hub.id, hub.label);
      return `<button type="button" id="tab-${esc(hub.id)}" role="tab" data-hub="${esc(hub.id)}" aria-selected="${on ? "true" : "false"}" aria-controls="p-${esc(hub.id)}" tabindex="${on ? "0" : "-1"}" class="${on ? "on" : ""}">${esc(text)}</button>`;
    }).join("");
  }

  function renderDash() {
    const items = routeItems(ui.trackId);
    const summary = GuideProgress.summarize(items, state.checks, [...bandFlags]);
    const progress = GuideProgress.summarize(items, state.checks, []);
    const track = GAME.tracks.find(item => item.id === ui.trackId);
    const trackLabel = track ? track.label : "";
    const dash = document.getElementById("dash");
    dash.className = "dash " + (summary.openBand ? "danger" : "ok");
    dash.innerHTML = summary.openBand
      ? `<span class="big2">${summary.openBand}</span><span><b>期限・取り逃し</b>が${esc(trackLabel)}に残っている</span><span class="hint">帯を押すと、そのカードだけを表示</span>`
      : `<span class="big2">0</span><span><b>期限・取り逃し</b>の未チェックはない</span><span class="hint">${esc(trackLabel)}</span>`;
    const pct = progress.total ? Math.round(progress.done / progress.total * 100) : 0;
    document.getElementById("pbar").style.width = pct + "%";
    const bar = document.getElementById("progress");
    bar.setAttribute("aria-valuenow", String(pct));
    document.getElementById("ptxt").textContent = progress.done + " / " + progress.total;
  }

  function saveChapterFilter() {
    chapterFilter[ui.trackId] = ui.chapterId || "";
    try { localStorage.setItem(storage.chapterFilter, JSON.stringify(chapterFilter)); } catch (error) {}
  }

  function catalogRecordById(id) {
    for (const hub of GAME.hubs) {
      if (hub.kind !== "catalog") continue;
      const found = catalogItems(hub.catalog).find(item => item.id === id);
      if (found) return Object.assign({ hubId: hub.id, hubLabel: hub.label }, found);
    }
    for (const section of itemSections()) {
      const found = catalogItems(section.catalog).find(item => item.id === id);
      if (found) return Object.assign({ hubId: "items", hubLabel: section.label, catalogId: section.catalog }, found);
    }
    const aside = catalogItems("intermission").find(item => item.id === id);
    if (aside) return Object.assign({ hubId: "items", hubLabel: "INTERmission", aside: true }, aside);
    return null;
  }

  function cardsForItem(itemId) {
    const found = [];
    for (const track of GAME.tracks) {
      for (const item of routeItems(track.id)) {
        if ((item.items || []).some(link => link.id === itemId)) found.push(item);
      }
    }
    return found;
  }

  function itemLine(item) {
    if (!hasFlag(item, "item") || !item.items || !item.items.length) return "";
    const links = item.items.map(link => {
      const found = catalogRecordById(link.id);
      const name = found ? found.name : link.id;
      return `<button type="button" class="linkish" data-open-item="${esc(link.id)}">${esc(name)} ×${esc(String(link.qty || 1))}</button>`;
    }).join("");
    return `<p class="item-links">${links}</p>`;
  }

  function enemyById(id) {
    return (globalThis.ENEMIES || []).find(enemy => enemy && enemy.id === id) || null;
  }

  function playDifficulty() {
    return cardBook && (cardBook.difficulty === "easy" || cardBook.difficulty === "hard") ? cardBook.difficulty : "normal";
  }

  function linkedLoot(text) {
    const raw = String(text || "").trim();
    if (!raw || raw === "-") return "—";
    const name = raw.replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "").trim();
    const found = findItemByName(name);
    if (!found) return esc(raw);
    return `<button type="button" class="linkish" data-open-item="${esc(found.id)}">${esc(raw)}</button>`;
  }

  function weakNames(enemy) {
    return (enemy.elements || []).filter(row => row.damage && (/×\s*[2-9]/.test(row.damage) || /×\s*1\.[1-9]/.test(row.damage) || row.damage === "弱点")).map(row => row.name.replace(/属性/, "")).join("・") || "—";
  }

  function enemyLine(item) {
    if (!hasFlag(item, "battle")) return "";
    const ids = GuideProgress.enemyLinks(item.enemies);
    if (!ids.length && !item.enemyNote) return "";
    const mode = playDifficulty();
    const cards = ids.map(id => {
      const enemy = enemyById(id);
      if (!enemy) return `<p class="enemy-mini"><button type="button" data-open-enemy="${esc(id)}">${esc(id)}</button></p>`;
      const hp = GuideProgress.statForMode(enemy.hp, mode);
      const loot = enemy.items || {};
      return `<div class="enemy-mini"><p><button type="button" class="linkish" data-open-enemy="${esc(enemy.id)}">${esc(enemy.name)}</button></p><p>HP ${esc(hp.value || "—")}${hp.note ? " <small>(" + esc(hp.note) + ")</small>" : ""}</p><p>弱点 ${esc(weakNames(enemy))}</p><p>ドロップ（通常） ${linkedLoot(loot.drop)}</p><p>ドロップ（レア） ${linkedLoot(loot.rare)}</p><p>盗む ${linkedLoot(loot.steal)}</p><p class="enemy-tactic">解説 ${esc(enemy.tactic || item.enemyNote || "")}</p></div>`;
    }).join("");
    const note = item.enemyNote ? `<p class="enemy-note">${esc(item.enemyNote)}</p>` : "";
    return `<div class="enemy-card">${cards}${note}</div>`;
  }

  function mapParts(map, id, label) {
    const files = globalThis.MAP_FILES || [];
    const repo = files.find(entry => entry && (entry.id === map || entry.file === map));
    if (repo || (map && /^maps\//.test(map))) {
      const file = repo ? repo.file : map;
      return { key: (repo && repo.id) || id || map, src: file, href: "", label: (repo && repo.label) || label || "地図" };
    }
    const preset = (GAME.maps || []).find(entry => entry.id === map);
    const src = !map ? "" : (preset ? "https://finalfantasy-jun-site.com/ff7_remake/field/images/" + map + ".png" : map);
    const href = preset
      ? "https://finalfantasy-jun-site.com/ff7_remake/field/" + map + ".html"
      : (/^https:\/\//i.test(map) ? map : "");
    return { key: preset ? map : (id || "custom"), src, href, label: preset ? preset.label : (label || "地図") };
  }

  function mapButton(item, owner) {
    if (!item || !item.map) return "";
    const parts = mapParts(item.map, item.id, "地図");
    const href = parts.href ? ` data-map-href="${esc(parts.href)}"` : "";
    return `<button type="button" class="map-open" data-map-owner="${esc(owner || "card")}" data-owner-id="${esc(item.id)}" data-map="${esc(parts.key)}" data-map-src="${esc(parts.src)}"${href} data-map-label="${esc(parts.label)}">${esc(GuideProgress.labelText(cardBook, "map"))}</button>`;
  }

  function routeCard(item, ord, children, numbers, headings, section) {
    const on = checked(item.id);
    const collapsed = ui.collapsed[item.id] === true;
    const kids = children || [];
    const kidsOpen = ui.collapsed["kids:" + item.id] !== true;
    const questLink = item.quest ? `<button type="button" class="linkish" data-open-quest="${esc(item.quest)}">依頼の詳細</button>` : "";
    const flags = GuideProgress.cardFlags(item);
    return `<article class="it ${flags.map(flag => "flag-" + esc(flag)).join(" ")}${item.example ? " is-example" : ""}${on ? " done" : ""}${collapsed ? " is-collapsed" : ""}" data-id="${esc(item.id)}">
      <span class="ord">${esc(ord || "")}</span>
      ${dragHandle(item.id)}
      <input type="checkbox" id="check-${esc(item.id)}" data-check="${esc(item.id)}"${on ? " checked" : ""}>
      <div class="ibody">
        <div class="ihead">
          <label for="check-${esc(item.id)}">${hasFlag(item, "tips") ? `<span class="hint-mark">${esc(GuideProgress.labelText(cardBook, "hint"))}</span>` : ""}${flagTags(item)}${exampleMark(item)}<span class="it-title" data-edit-text>${esc((headings && headings[item.id]) || item.title || item.id)}</span></label>
          <div class="imeta">
            ${hasFlag(item, "trophy") && item.trophy && trophyById(item.trophy) ? `<span class="tag tone-trophy">${esc(trophyById(item.trophy).name)}</span>` : ""}
            ${item.deadline ? `<span class="deadline-badge">${esc(item.deadline)}</span>` : ""}
            ${questLink}
            <button type="button" class="route-item-toggle" data-toggle-item="${esc(item.id)}" aria-expanded="${collapsed ? "false" : "true"}">${esc(GuideProgress.labelText(cardBook, "detail"))}</button>
            ${mapButton(shownMap(item, section) ? { id: item.id, map: shownMap(item, section) } : null)}
          </div>
        </div>
        <div class="route-item-content"${collapsed ? " hidden" : ""}>
          ${cardBody(item)}
          ${itemLine(item)}
          ${enemyLine(item)}
          ${sourceLine(item.source)}
          ${cardTools(item)}
        </div>
        ${kids.length ? `<div class="kids-wrap"><button type="button" class="kids-toggle" data-toggle-kids="${esc(item.id)}" aria-expanded="${kidsOpen ? "true" : "false"}">${esc(GuideProgress.labelText(cardBook, "kids"))} ${kids.length}</button><div class="kids"${kidsOpen ? "" : " hidden"}>${kids.map(child => routeCard(child, numbers[child.id], [], numbers, headings, section)).join("")}</div></div>` : ""}
      </div>
    </article>`;
  }

  function chapterBlocks(items, sections) {
    const groups = sections && sections.length ? sections : [{ id: "", title: "本章", map: "", note: "" }];
    const known = new Set(groups.map(section => section.id));
    const sectionOf = item => item.section && known.has(item.section) ? item.section : groups[0].id;
    const headings = GuideProgress.templateHeadings(GuideProgress.displayItems(items, groups), GuideProgress.activeTemplates(cardBook, globalThis.TEMPLATES));
    const numbers = GuideProgress.numberChapter(items, groups);
    let visible = 0;
    const html = groups.map((section, index) => {
      const mine = items.filter(item => sectionOf(item) === section.id);
      const built = blockCards(mine, headings, section, numbers);
      visible += built.visible;
      const closed = ui.collapsed["section:" + ui.trackId + ":" + section.id] === true;
      const name = GuideProgress.sectionName(section.title);
      const tools = cardEditing() ? `<span class="subch-tools">
        <button type="button" data-section-edit="${esc(section.id)}">${esc(GuideProgress.labelText(cardBook, "rename"))}</button>
        <button type="button" data-section-up="${esc(section.id)}">${esc(GuideProgress.labelText(cardBook, "up"))}</button>
        <button type="button" data-section-down="${esc(section.id)}">${esc(GuideProgress.labelText(cardBook, "down"))}</button>
        <button type="button" data-move-here="${esc(section.id)}"${GuideSelect.size ? "" : " disabled"}>${esc(GuideProgress.labelText(cardBook, "moveSelected"))}</button>
        <button type="button" data-section-delete="${esc(section.id)}">${esc(GuideProgress.labelText(cardBook, "delete"))}</button>
      </span>` : "";
      return `<section class="subch${closed ? " closed" : ""}" data-section="${esc(section.id)}">
        <div class="subch-bar">
          <button type="button" class="subch-toggle" data-toggle-section="${esc(section.id)}" aria-expanded="${closed ? "false" : "true"}"><span class="caret">▼</span><span class="subch-num">(${index + 1})</span></button>
          ${name ? `<span class="subch-name" data-edit-text>${esc(name)}</span>` : ""}
          ${mapButton({ id: section.id, map: section.map }, "section")}
          ${tools}
        </div>
        ${section.note ? `<p class="subch-note" data-edit-text>${esc(section.note)}</p>` : ""}
        <div class="subch-body"${closed ? " hidden" : ""}>${built.html || '<p class="empty-chapter">この区分にはカードがありません。</p>'}</div>
      </section>`;
    }).join("");
    return { html, visible, numbers: {} };
  }

  function cardBody(item) {
    const blocks = item.blocks && item.blocks.length ? item.blocks : GuideProgress.blocksFromDetail(item.detail);
    const html = GuideProgress.blockHtml(blocks);
    return html ? `<div class="blocks">${html}</div>` : "";
  }

  function shownMap(item, section) {
    return GuideProgress.visibleMap(item, section);
  }

  function blockCards(items, headings, section, numbers) {
    if (!numbers) numbers = GuideProgress.numberCards(items);
    const ids = new Set(items.map(item => item.id));
    const childOf = {};
    for (const item of items) {
      if (item.parent && ids.has(item.parent) && item.parent !== item.id) childOf[item.id] = item.parent;
    }
    for (const id of Object.keys(childOf)) {
      if (childOf[childOf[id]]) delete childOf[id];
    }
    const kids = {};
    const tops = [];
    for (const item of items) {
      const parent = childOf[item.id];
      if (parent) {
        if (!kids[parent]) kids[parent] = [];
        kids[parent].push(item);
      } else tops.push(item);
    }
    const filtering = ui.flag !== "all" || !!ui.query;
    let visible = 0;
    const html = tops.map(item => {
      const children = kids[item.id] || [];
      const self = !filtering || itemVisible(item);
      const shownKids = filtering ? children.filter(itemVisible) : children;
      if (!self && !shownKids.length) return "";
      if (self) visible += 1;
      visible += shownKids.length;
      return routeCard(item, numbers[item.id], shownKids, numbers, headings, section);
    }).join("");
    return { html, visible, numbers };
  }

  function dragHandle(id) {
    if (!cardEditing()) return "";
    return `<button type="button" class="card-drag-handle" data-card-drag="${esc(id)}" aria-label="ドラッグして移動" title="ドラッグして移動">⋮⋮</button>`;
  }

  function L(key) {
    return GuideProgress.labelText(cardBook, key);
  }

  function cardTools(item) {
    if (!cardEditing()) return "";
    return `<div class="card-edit-tools">
      <button type="button" data-card-up="${esc(item.id)}">${esc(L("up"))}</button>
      <button type="button" data-card-down="${esc(item.id)}">${esc(L("down"))}</button>
      <button type="button" data-card-edit="${esc(item.id)}">${esc(L("edit"))}</button>
      <button type="button" data-card-move="${esc(item.id)}">${esc(L("move"))}</button>
      <button type="button" data-card-add-after="${esc(item.id)}">${esc(L("add"))}</button>
      <button type="button" data-card-copy="${esc(item.id)}">${esc(L("copy"))}</button>
      <label class="pick-label"><input type="checkbox" data-card-pick="${esc(item.id)}"${globalThis.GuideSelect && GuideSelect.has(item.id) ? " checked" : ""}>${esc(L("pick"))}</label>
      <button type="button" data-card-delete="${esc(item.id)}">${esc(L("delete"))}</button>
    </div>`;
  }

  function renderRoute() {
    const chapters = chaptersFor(ui.trackId);
    if (ui.chapterId && !chapters.some(chapter => chapter.id === ui.chapterId)) ui.chapterId = "";
    const shown = ui.chapterId ? chapters.filter(chapter => chapter.id === ui.chapterId) : chapters;
    const filtering = ui.flag !== "all" || !!ui.query;
    let visible = 0;
    let total = 0;
    const host = document.getElementById("route");
    host.innerHTML = shown.map(chapter => {
      total += chapter.items.length;
      const built = chapterBlocks(chapter.items, chapter.sections);
      visible += built.visible;
      const done = chapter.items.filter(item => checked(item.id)).length;
      const closed = ui.chapterId ? false : ui.collapsed[chapterKey(chapter.id)] === true;
      const hide = filtering && built.visible === 0;
      return `<section class="ch${closed ? " closed" : ""}${hide ? " hide" : ""}" id="chapter-${esc(ui.trackId)}-${esc(chapter.id)}" data-chapter="${esc(chapter.id)}">
        <h2 class="chapter-heading"><button type="button" class="chh" data-toggle-chapter="${esc(chapter.id)}" aria-expanded="${closed ? "false" : "true"}">
          <span class="caret" aria-hidden="true">▼</span>
          <span class="cht">${esc(chapter.title)}</span>
          <span class="chl"><span class="cnt${chapter.items.length && done === chapter.items.length ? " done" : ""}">${done}/${chapter.items.length}</span></span>
        </button></h2>
        <div class="chb" data-card-track="${esc(ui.trackId)}">${cardEditing() ? `<p class="card-edit-chapter"><button type="button" data-card-add="1" data-card-track="${esc(ui.trackId)}" data-card-chapter="${esc(chapter.id)}">${esc(L("addCard"))}</button><button type="button" data-section-add="${esc(chapter.id)}" data-card-track="${esc(ui.trackId)}">${esc(L("addSection"))}</button><button type="button" data-move-selected="${esc(chapter.id)}" data-card-track="${esc(ui.trackId)}"${GuideSelect.size ? "" : " disabled"}>${esc(L("moveSelected"))}</button></p>` : ""}${built.html || '<p class="empty-chapter">項目はまだありません。</p>'}</div>
      </section>`;
    }).join("");
    document.getElementById("route-count").textContent = visible + " / " + total + " 件を表示";
    const jump = document.getElementById("chapter-jump");
    const previous = jump.value;
    jump.innerHTML = '<option value="">すべて表示</option>' + chapters
      .map(chapter => `<option value="${esc(chapter.id)}">${esc(chapter.title)}</option>`)
      .join("");
    jump.value = [...jump.options].some(option => option.value === ui.chapterId) ? ui.chapterId : "";
    if (previous && previous !== jump.value && !ui.chapterId) jump.value = "";
    const anyOpen = chapters.some(chapter => ui.collapsed[chapterKey(chapter.id)] !== true);
    const expand = document.getElementById("expand");
    expand.textContent = anyOpen ? "すべて折りたたむ" : "すべて開く";
    expand.setAttribute("aria-expanded", anyOpen ? "true" : "false");
    renderDash();
  }

  function renderCatalog(hub) {
    if (!hub) return;
    if (hub.catalog === "quests") {
      renderQuests(hub);
      return;
    }
    if (hub.catalog === "summons") {
      const host = document.getElementById("list-" + hub.id);
      const count = document.getElementById("count-" + hub.id);
      const items = catalogItems("summons").filter(item => !item.example);
      if (count) count.textContent = String(items.length);
      if (host) host.innerHTML = renderSummonTable(items);
      return;
    }
    const host = document.getElementById("list-" + hub.id);
    const count = document.getElementById("count-" + hub.id);
    const items = catalogItems(hub.catalog);
    const query = ui.catalogQuery[hub.id] || "";
    const facet = ui.catalogFacet[hub.id] || "";
    const visible = items.filter(item => {
      if (!matchesQuery(item, query)) return false;
      if (!facet) return true;
      if (facet === "INTERmission") return item.intermission === true || item.area === "INTERmission";
      return item.area === facet;
    });
    const done = items.filter(item => checked(item.id)).length;
    if (count) count.textContent = done + " / " + items.length;
    if (!host) return;
    if (!items.length && !cardEditing()) {
      host.innerHTML = `<p class="empty-chapter">まだ項目がありません。<code>data/catalogs.js</code> の ${esc(hub.catalog)} に足してください。</p>`;
      return;
    }
    const areas = [...new Set(items.map(item => item.area).filter(Boolean))];
    const facetButtons = areas.length ? `<div class="facet-switch" role="group" aria-label="絞り込み">${["", ...areas].map(area => {
      const on = facet === area;
      const label = area || "すべて";
      return `<button type="button" class="chip${on ? " on" : ""}" data-facet="${esc(area)}" data-facet-hub="${esc(hub.id)}" aria-pressed="${on ? "true" : "false"}">${esc(label)}</button>`;
    }).join("")}</div>` : "";
    const adder = cardEditing() ? `<p class="card-edit-chapter"><button type="button" data-catalog-add="${esc(hub.catalog)}">項目を追加</button></p>` : "";
    host.innerHTML = facetButtons + adder + (visible.map(item => {
      const on = checked(item.id);
      return `<article class="it${item.example ? " is-example" : ""}${on ? " done" : ""}" data-id="${esc(item.id)}" data-catalog="${esc(hub.catalog)}">
        ${dragHandle(item.id)}
        <input type="checkbox" id="check-${esc(item.id)}" data-check="${esc(item.id)}"${on ? " checked" : ""}>
        <div class="ibody">
          <div class="ihead">
            <label for="check-${esc(item.id)}">${exampleMark(item)}${item.missable ? '<span class="tag tone-missable">取り逃し</span>' : ""}<span class="it-title">${esc(item.name || item.id)}</span></label>
          </div>
          ${item.area ? `<p class="area">${esc(item.area)}${item.intermission && item.area !== "INTERmission" ? " · INTERmission" : ""}</p>` : (item.intermission ? '<p class="area">INTERmission</p>' : "")}
          ${itemObtained(item)}
          ${item.detail ? `<div class="det">${esc(item.detail)}</div>` : ""}
          ${itemSourceLine(item)}
          ${trophyLinkLine(item)}
          ${sourceLine(item.source)}
          ${cardTools(item)}
        </div>
      </article>`;
    }).join("") || '<p class="empty-chapter">一致する項目がありません。</p>');
  }

  function itemObtained(item) {
    const cards = cardsForItem(item.id);
    if (!cards.length) return "";
    return cards.some(card => checked(card.id)) ? '<p class="area"><span class="tag tone-item">入手済み</span></p>' : "";
  }

  function itemSourceLine(item) {
    const cards = cardsForItem(item.id);
    if (!cards.length) return "";
    const links = cards.map(card => `<button type="button" class="linkish" data-open-hit="${esc(card.id)}">${esc(card.chapterTitle)}「${esc(card.title)}」</button>`).join("、");
    return `<p class="area">入手: ${links}</p>`;
  }

  function trophyLinkLine(item) {
    if (!item || item.id == null || !trophyItems().some(entry => entry.id === item.id)) return "";
    if (item.auto === "rest") {
      return `<p class="area">ほかのトロフィーがすべてオンになると、ここもオンになる。</p>`;
    }
    const cards = cardsForTrophy(item.id);
    if (!cards.length) return `<p class="area">進行カードとは結んでいない。この画面で直接チェックする。</p>`;
    const links = cards.map(card => `<button type="button" class="linkish" data-open-hit="${esc(card.id)}">${esc(card.chapterTitle)}「${esc(card.title)}」</button>`).join("、");
    return `<p class="area">進行: ${links}</p>`;
  }

  function renderCatalogs() {
    GAME.hubs.filter(hub => hub.kind === "catalog").forEach(renderCatalog);
    renderItems();
  }

  const SLOT_COUNT = {
    holl01: 1, holl02: 2, holl05: 2, holl03: 3, holl04: 3, holl06: 4, holl07: 4, holl12: 4,
    holl08: 5, holl09: 5, holl15: 5, holl10: 6, holl11: 6, holl13: 6, holl14: 6
  };

  function slotGlyph(ids) {
    if (!ids || !ids.length) return "—";
    return `<span class="slots">${ids.map(id => {
      const count = SLOT_COUNT[id] || 1;
      const dots = Array.from({ length: count }, () => '<i class="slot-dot"></i>').join("");
      return `<span class="slot-row">${dots}</span>`;
    }).join("")}</span>`;
  }

  function cardLinksCell(item) {
    const links = cardsForItem(item.id);
    const got = links.some(card => checked(card.id));
    const html = links.map(card => `<button type="button" class="linkish" data-open-hit="${esc(card.id)}">${esc(card.chapterTitle)}「${esc(card.title)}」</button>`).join("、");
    return `<td>${got ? '<span class="tag tone-item">入手済み</span> ' : ""}${html}</td>`;
  }

  function sourceNote() {
    return "";
  }

  function renderItems() {
    const host = document.getElementById("list-items");
    const tabs = document.getElementById("item-subtabs");
    const count = document.getElementById("count-items");
    if (!host || !tabs) return;
    const sections = itemSections();
    if (!sections.some(section => section.catalog === ui.itemSection)) ui.itemSection = sections[0] ? sections[0].catalog : "";
    tabs.innerHTML = sections.map(section => {
      const on = section.catalog === ui.itemSection;
      return `<button type="button" class="chip${on ? " on" : ""}" data-item-section="${esc(section.catalog)}" aria-pressed="${on ? "true" : "false"}">${esc(section.label)}</button>`;
    }).join("");
    if (ui.itemSection === "summons") {
      const rows = catalogItems("summons").filter(item => !item.example);
      const query = (ui.catalogQuery.items || "").toLowerCase();
      const shown = rows.filter(item => !query || itemHay(item).toLowerCase().includes(query));
      if (count) count.textContent = shown.length + " / " + rows.length;
      host.innerHTML = renderSummonTable(shown);
      return;
    }
    if (ui.itemSection === "weapons" && ui.weaponId) {
      host.innerHTML = renderWeaponDetail(ui.weaponId);
      if (count) count.textContent = "";
      return;
    }
    const items = catalogItems(ui.itemSection).filter(item => !item.intermission && item.area !== "INTERmission" && item.area !== "ユフィ" && item.area !== "武器アビリティ");
    const query = (ui.catalogQuery.items || "").toLowerCase();
    const rows = items.filter(item => !query || itemHay(item).toLowerCase().includes(query));
    if (count) count.textContent = rows.length + " / " + items.length;
    const note = ui.asideNote ? `<p class="source">「${esc(ui.asideNote.name)}」はINTERmissionの項目なので、本編の表には入れていません。</p>` : "";
    host.innerHTML = note + renderItemTable(ui.itemSection, rows);
  }

  function itemHay(item) {
    const bits = [item.name, item.detail, item.obtain, item.area, item.ability, item.buy, item.sell];
    (item.levels || []).forEach(level => bits.push(level.spell, level.effect, level.sell));
    (item.tables || []).forEach(table => (table.body || []).forEach(row => row.forEach(cell => bits.push(cell.text))));
    return bits.filter(Boolean).join("\n");
  }

  function statPair(initial, maximum) {
    if (!initial) return "";
    const line = (label, stats) => `${label} ${esc(stats.atk || "-")} / ${esc(stats.matk || "-")} / ${esc(stats.def || "-")} / ${esc(stats.mdef || "-")}`;
    return `<div>${line("初期", initial)}</div>${maximum && maximum.atk ? `<div>${line("最大", maximum)}</div>` : ""}`;
  }

  function renderItemTable(catalogId, rows) {
    if (catalogId === "weapons") return renderWeaponTable(rows);
    if (catalogId === "materia") return renderMateriaTable(rows);
    if (catalogId === "armor") return renderArmorTable(rows);
    if (catalogId === "accessories") return renderAccessoryTable(rows);
    const head = "<th>名前</th><th>概要</th><th>入手方法</th>" + (catalogId === "keyItems" ? "<th>用途</th>" : "<th>買値</th><th>売値</th>") + "<th>入手カード</th>";
    const body = rows.map(item => `<tr data-id="${esc(item.id)}"><td>${esc(item.name)}</td><td>${esc(item.detail || "")}</td><td>${esc(item.obtain || "")}</td>${catalogId === "keyItems" ? `<td>${esc(item.use || "")}</td>` : `<td>${esc(item.buy || "")}</td><td>${esc(item.sell || "")}</td>`}${cardLinksCell(item)}</tr>`).join("");
    return `<div class="table-scroll"><table class="sheet"><thead><tr>${head}</tr></thead><tbody>${body || "<tr><td>一致する項目がありません。</td></tr>"}</tbody></table></div>`;
  }

  function renderWeaponTable(rows) {
    const groups = ["クラウド", "バレット", "エアリス", "ティファ"];
    return groups.map(character => {
      const list = rows.filter(item => item.area === character);
      if (!list.length) return "";
      const source = list[0].source || "";
      const body = list.map(item => `<tr data-id="${esc(item.id)}">
        <td><button type="button" class="linkish" data-open-weapon="${esc(item.id)}">${esc(item.name)}</button></td>
        <td>${statPair(item.initial, item.maximum)}</td>
        <td>${slotGlyph(item.initialSlots)}</td>
        <td>${esc(item.ability || "")}</td>
        <td>${esc(item.obtain || "")}</td>
        <td>${esc(item.buy || "")}</td>
        <td>${esc(item.sell || "")}</td>
        ${cardLinksCell(item)}
      </tr>`).join("");
      return `<section class="equip-section"><h3>${esc(character)}</h3>${sourceNote(source)}
        <div class="table-scroll"><table class="sheet"><thead><tr><th>名前</th><th>ステータスの上昇量<br>物攻 / 魔攻 / 物防 / 魔防</th><th>マテリア穴</th><th>武器アビリティ</th><th>入手方法</th><th>買値</th><th>売値</th><th>入手カード</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
    }).join("");
  }

  function otherStat(row) {
    const bits = [];
    if (row.luck && row.luck !== "-") bits.push("運" + row.luck);
    if (row.speed && row.speed !== "-") bits.push("すばやさ" + row.speed);
    if (row.other && row.other !== "-") bits.push(row.other);
    return bits.join("、") || "-";
  }

  function renderWeaponDetail(id) {
    const item = catalogItems("weapons").find(entry => entry.id === id);
    if (!item) return "<p>武器が見つかりません。</p>";
    const initial = item.initial || {};
    const summary = `<p class="equip-initial"><span class="badge">初期状態</span> 物攻 ${esc(initial.atk || "-")} 魔攻 ${esc(initial.matk || "-")} 物防 ${esc(initial.def || "-")} 魔防 ${esc(initial.mdef || "-")} 最大HP - 最大MP - マテリア穴 ${slotGlyph(item.initialSlots)}</p>`;
    const body = (item.levels || []).map(row => `<tr>
      <td>${esc(row.lv)}</td><td>${esc(row.core)}</td><td>${esc(row.atk)}</td><td>${esc(row.matk)}</td><td>${esc(row.defn)}</td><td>${esc(row.mdef)}</td><td>${esc(row.hp)}</td><td>${esc(row.mp)}</td><td>${esc(otherStat(row))}</td><td>${row.slots && row.slots.length ? slotGlyph(row.slots) : esc(row.slotText || "初期状態")}</td><td>${esc(row.sp)}</td>
    </tr>`).join("");
    const total = item.total ? `<tr><td>合計</td><td></td><td>${esc(item.total.atk)}</td><td>${esc(item.total.matk)}</td><td>${esc(item.total.defn)}</td><td>${esc(item.total.mdef)}</td><td>${esc(item.total.hp)}</td><td>${esc(item.total.mp)}</td><td>${esc(otherStat(item.total))}</td><td>-</td><td>${esc(item.total.sp)}</td></tr>` : "";
    return `<p><button type="button" class="linkish" data-weapon-back="1">武器一覧へ戻る</button></p>
      <h3>${esc(item.name)}</h3>
      ${summary}
      <div class="table-scroll"><table class="sheet equip-grid"><thead><tr><th>武器Lv.</th><th>コア名</th><th>物攻</th><th>魔攻</th><th>物防</th><th>魔防</th><th>最大HP</th><th>最大MP</th><th>その他</th><th>マテリア穴拡張</th><th>必要SP</th></tr></thead><tbody>${body}${total}</tbody></table></div>
      ${sourceNote(item.reinforceSource || item.source)}`;
  }

  function renderMateriaTable(rows) {
    const kinds = ["魔法", "支援", "コマンド", "独立"];
    return kinds.map(kind => {
      const list = rows.filter(item => item.area === kind);
      if (!list.length) return "";
      if (kind === "魔法") {
        const body = list.map(item => {
          const levels = item.levels && item.levels.length ? item.levels : [{ spell: "", effect: item.detail, buy: item.buy, sell: item.sell }];
          return levels.map((level, index) => `<tr data-id="${esc(item.id)}">
            ${index === 0 ? `<td rowspan="${levels.length}">${esc(item.name)}</td>` : ""}
            <td>${index + 1}</td>
            <td>${esc(level.spell || "")}</td>
            <td>${esc(level.effect || "")}</td>
            ${index === 0 ? `<td rowspan="${levels.length}">${esc(item.obtain || "")}</td>` : ""}
            ${index === 0 ? `<td rowspan="${levels.length}">${esc(item.buy || level.buy || "")}</td>` : ""}
            <td>${esc(level.sell || "")}</td>
            ${index === 0 ? cardLinksCell(item).replace("<td>", `<td rowspan="${levels.length}">`) : ""}
          </tr>`).join("");
        }).join("");
        return `<section class="equip-section"><h3>魔法</h3>${sourceNote(list[0].source)}<div class="table-scroll"><table class="sheet"><thead><tr><th>名前</th><th>Lv</th><th>魔法名</th><th>効果</th><th>入手方法</th><th>買値</th><th>売値</th><th>入手カード</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
      }
      const body = list.map(item => `<article class="materia-block" data-id="${esc(item.id)}">
        <h4>${esc(item.name)}</h4>
        <p>${esc(item.detail || "")}</p>
        ${item.showObtain && item.obtain ? `<p>入手: ${esc(item.obtain)}</p>` : ""}
        ${(item.tables || []).map(renderSheet).join("")}
        ${cardLinksLine(item)}
      </article>`).join("");
      return `<section class="equip-section"><h3>${esc(kind)}</h3>${sourceNote(list[0].source)}${body}</section>`;
    }).join("");
  }

  function spanAttr(cell) {
    return (cell.colspan > 1 ? ` colspan="${cell.colspan}"` : "") + (cell.rowspan > 1 ? ` rowspan="${cell.rowspan}"` : "");
  }

  function renderSheet(table) {
    const head = (table.head || []).map(row => `<tr>${row.map(cell => `<th${spanAttr(cell)}>${esc(cell.text)}</th>`).join("")}</tr>`).join("");
    const body = (table.body || []).map(row => `<tr>${row.map(cell => `<td${spanAttr(cell)}>${esc(cell.text)}</td>`).join("")}</tr>`).join("");
    return `<div class="table-scroll"><table class="sheet"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  function cardLinksLine(item) {
    const links = cardsForItem(item.id);
    if (!links.length) return "";
    const got = links.some(card => checked(card.id));
    const html = links.map(card => `<button type="button" class="linkish" data-open-hit="${esc(card.id)}">${esc(card.chapterTitle)}「${esc(card.title)}」</button>`).join("、");
    return `<p>入手カード: ${got ? '<span class="tag tone-item">入手済み</span> ' : ""}${html}</p>`;
  }

  function renderArmorTable(rows) {
    const body = rows.map(item => `<tr data-id="${esc(item.id)}"><td>${esc(item.name)}</td><td>${esc(item.pdef || "")}</td><td>${esc(item.mdef || "")}</td><td>${esc(item.slots || "")}</td><td>${esc(item.obtain || "")}</td><td>${esc(item.buy || "")}</td><td>${esc(item.sell || "")}</td>${cardLinksCell(item)}</tr>`).join("");
    return `<section class="equip-section"><h3>防具</h3>${sourceNote("https://finalfantasy-jun-site.com/ff7_remake/item/protector.html")}<div class="table-scroll"><table class="sheet"><thead><tr><th>名前</th><th>物理防御力</th><th>魔法防御力</th><th>マテリア穴</th><th>入手方法</th><th>買値</th><th>売値</th><th>入手カード</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
  }

  function renderAccessoryTable(rows) {
    const body = rows.map(item => `<tr data-id="${esc(item.id)}"><td>${esc(item.name)}</td><td>${esc(item.detail || "")}</td><td>${esc(item.obtain || "")}</td><td>${esc(item.buy || "")}</td><td>${esc(item.sell || "")}</td>${cardLinksCell(item)}</tr>`).join("");
    return `<section class="equip-section"><h3>アクセサリー</h3>${sourceNote("https://finalfantasy-jun-site.com/ff7_remake/item/accessory.html")}<div class="table-scroll"><table class="sheet"><thead><tr><th>名前</th><th>概要</th><th>入手方法</th><th>買値</th><th>売値</th><th>入手カード</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
  }

  function renderSummonTable(items) {
    const body = items.map(item => {
      const growth = item.growth || [];
      return `<tr data-id="${esc(item.id)}"><td>${esc(item.name)}</td><td>${esc(item.detail || "")}</td><td>${esc(item.obtain || "")}</td>${growth.map(value => `<td>${esc(value || "-")}</td>`).join("")}${cardLinksCell(item)}</tr>`;
    }).join("");
    return `<div class="table-scroll"><table class="sheet"><thead><tr><th rowspan="2">マテリア名</th><th rowspan="2">概要</th><th rowspan="2">入手方法</th><th colspan="7">ステータスの上昇率</th><th rowspan="2">入手カード</th></tr><tr><th>最大HP</th><th>最大MP</th><th>力</th><th>魔力</th><th>体力</th><th>精神</th><th>運</th></tr></thead><tbody>${body}</tbody></table></div>${sourceNote("https://finalfantasy-jun-site.com/ff7_remake/materia/summon.html")}`;
  }

  function renderQuestArticle(item) {
    const open = ui.openQuest === item.id;
    const rewards = (item.rewards || []).map(reward => `<tr><td>${esc(reward.mode || "")}</td><td>${esc(reward.reward || "")}</td></tr>`).join("");
    const steps = (item.steps || []).map((step, index) => `<li><span class="ord">${index + 1}</span>${esc(step)}</li>`).join("");
    const after = (item.after || []).map(line => `<li>${esc(line)}</li>`).join("");
    const hp = ((item.enemies && item.enemies.hp) || []).map(row => `<tr><td>${esc(row.mode)}</td><td>${esc(row.hp)}</td></tr>`).join("");
    const weak = ((item.enemies && item.enemies.weak) || []).map(line => `<li>${esc(line)}</li>`).join("");
    const actions = ((item.enemies && item.enemies.actions) || []).map(row => `<tr><td>${esc(row.name)}</td><td>${esc(row.type)}</td></tr>`).join("");
    const reports = (item.reports || []).map(report => `<tr><td>${esc(report.no)}</td><td>${esc(report.title)}</td><td>${esc(report.topic)}</td><td>${esc(report.condition)}</td><td>${esc(report.materia)}</td></tr>`).join("");
    const card = item.card ? `<button type="button" class="linkish" data-open-hit="${esc(item.card)}">進行カードを開く</button>` : "";
    const parts = item.map ? mapParts(item.map, item.id, item.name) : null;
    const map = parts ? `<button type="button" class="map-open" data-map="${esc(parts.key)}" data-map-src="${esc(parts.src)}"${parts.href ? ` data-map-href="${esc(parts.href)}"` : ""} data-map-label="${esc(parts.label)}">MAP</button>` : "";
    const edit = cardEditing() ? `<p class="card-edit-tools"><button type="button" data-card-edit="${esc(item.id)}">編集</button></p>` : "";
    return `<article class="quest" id="quest-${esc(item.id)}" data-id="${esc(item.id)}">
      <button type="button" class="quest-toggle" data-toggle-quest="${esc(item.id)}" aria-expanded="${open ? "true" : "false"}"><span class="caret" aria-hidden="true">▼</span>${esc(item.name)}</button>
      <div class="quest-body"${open ? "" : " hidden"}>
        <p>${esc(item.detail || "")} ${card} ${map}</p>
        ${edit}
        <div class="table-scroll"><table class="sheet"><tbody>
          ${item.client ? `<tr><th>依頼人</th><td>${esc(item.client)}</td></tr>` : ""}
          ${item.place ? `<tr><th>受注場所</th><td>${esc(item.place)}</td></tr>` : ""}
          ${item.when ? `<tr><th>時期</th><td>${esc(item.when)}</td></tr>` : ""}
          ${item.condition ? `<tr><th>条件</th><td>${esc(item.condition)}</td></tr>` : ""}
          ${item.clear ? `<tr><th>クリア</th><td>${esc(item.clear)}</td></tr>` : ""}
          ${item.level ? `<tr><th>レベル</th><td>${esc(item.level)}</td></tr>` : ""}
        </tbody></table></div>
        ${rewards ? `<h3>報酬</h3><div class="table-scroll"><table class="sheet"><thead><tr><th>モード</th><th>報酬</th></tr></thead><tbody>${rewards}</tbody></table></div>` : ""}
        ${steps ? `<h3>攻略手順</h3><ol class="quest-steps">${steps}</ol>` : ""}
        ${after ? `<h3>終えたあと</h3><ul>${after}</ul>` : ""}
        ${hp ? `<h3>対象の敵</h3><div class="table-scroll"><table class="sheet"><thead><tr><th>モード</th><th>最大HP</th></tr></thead><tbody>${hp}</tbody></table></div>` : ""}
        ${weak ? `<p>効きやすい属性: </p><ul>${weak}</ul>` : ""}
        ${actions ? `<div class="table-scroll"><table class="sheet"><thead><tr><th>行動</th><th>種類</th></tr></thead><tbody>${actions}</tbody></table></div>` : ""}
        ${reports ? `<h3>バトルレポート</h3><div class="table-scroll"><table class="sheet"><thead><tr><th>No.</th><th>タイトル</th><th>調査</th><th>達成条件</th><th>マテリア</th></tr></thead><tbody>${reports}</tbody></table></div>` : ""}
        ${sourceLine(item.source)}
      </div>
    </article>`;
  }

  function renderQuests(hub) {
    const host = document.getElementById("list-" + hub.id);
    const count = document.getElementById("count-" + hub.id);
    const items = catalogItems(hub.catalog);
    const query = ui.catalogQuery[hub.id] || "";
    const visible = items.filter(item => !query || [item.name, item.place, item.client, item.clear, item.detail].join("\n").toLowerCase().includes(query.toLowerCase()));
    if (count) count.textContent = visible.length + " / " + items.length;
    if (host) host.innerHTML = visible.map(renderQuestArticle).join("") || '<p class="empty-chapter">一致する依頼がありません。</p>';
  }

  function paintTracks() {
    document.querySelectorAll("[data-track]").forEach(button => {
      const on = button.dataset.track === ui.trackId;
      button.classList.toggle("on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function paintFlags() {
    document.querySelectorAll("[data-filter]").forEach(button => {
      const value = button.dataset.filter;
      const on = ui.flag === "band" ? bandFlags.has(value) : value === ui.flag;
      button.classList.toggle("on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function shell() {
    const tracks = GAME.tracks.map(track => {
      const on = track.id === ui.trackId;
      return `<button type="button" class="chip track${on ? " on" : ""}" data-track="${esc(track.id)}" aria-pressed="${on ? "true" : "false"}">${esc(track.label)}</button>`;
    }).join("");
    const flags = [`<button type="button" class="chip${ui.flag === "all" ? " on" : ""}" data-filter="all" aria-pressed="${ui.flag === "all" ? "true" : "false"}">すべて</button>`]
      .concat(GAME.flags.filter(flag => flag.chip).map(flag => {
        const on = ui.flag === flag.id;
        return `<button type="button" class="chip tone-${esc(flag.tone || flag.id)}${on ? " on" : ""}" data-filter="${esc(flag.id)}" aria-pressed="${on ? "true" : "false"}">${esc(flag.label)}</button>`;
      }))
      .concat(`<button type="button" class="chip${ui.flag === "todo" ? " on" : ""}" data-filter="todo" aria-pressed="${ui.flag === "todo" ? "true" : "false"}">未チェックのみ</button>`)
      .join("");
    const itemsHub = GAME.hubs.find(hub => hub.kind === "items");
    const itemsPanel = itemsHub ? `<section class="panel" id="p-items" role="tabpanel" aria-labelledby="tab-items" hidden>
        <h2>アイテム</h2>
        <p class="lead">名前は一覧のまま、説明は短くまとめてある。買値と売値は一覧の数値。入手カードからこの行へ移動できる。</p>
        <div class="subtabs" id="item-subtabs" role="tablist"></div>
        <div class="toolbar catalog-tools">
          <input type="search" data-catalog-search="items" aria-label="アイテムを検索" placeholder="この表を検索" enterkeyhint="search">
          <span class="lookup-count" id="count-items"></span>
        </div>
        <div class="table-scroll" id="list-items"></div>
      </section>` : "";
    const catalogs = GAME.hubs.filter(hub => hub.kind === "catalog").map(hub => {
      const catalog = CATALOGS[hub.catalog] || { title: hub.label, lead: "" };
      return `<section class="panel" id="p-${esc(hub.id)}" role="tabpanel" aria-labelledby="tab-${esc(hub.id)}" hidden>
        <h2>${esc(catalog.title || hub.label)}</h2>
        <p class="lead">${esc(catalog.lead || "")}</p>
        <div class="toolbar catalog-tools">
          <input type="search" data-catalog-search="${esc(hub.id)}" aria-label="${esc((catalog.title || hub.label) + "を検索")}" placeholder="この画面を検索" enterkeyhint="search">
          <span class="lookup-count" id="count-${esc(hub.id)}"></span>
        </div>
        <div class="list" id="list-${esc(hub.id)}"></div>
      </section>`;
    }).join("");
    document.getElementById("main").innerHTML = `
      <section class="panel on" id="p-route" role="tabpanel" aria-labelledby="tab-route">
        <div class="toolbar" id="route-tools">
          <div class="track-switch" role="group" aria-label="進行">${tracks}</div>
          <div class="flag-switch" role="group" aria-label="絞り込み">${flags}</div>
          <input type="search" id="q" aria-label="ルートを検索" placeholder="この進行を検索" enterkeyhint="search">
          <label class="chapter-jump">章へ移動<select id="chapter-jump" aria-label="章へ移動"></select></label>
          <button type="button" class="ghost" id="expand" aria-expanded="true">すべて折りたたむ</button>
          <button type="button" class="ghost safe" id="export">進行を書き出す</button>
          <button type="button" class="ghost safe" id="import">進行を読み込む</button>
          <button type="button" class="ghost safe" id="restore" disabled>直前のリセットを戻す</button>
          <button type="button" class="ghost" id="reset">進行をすべて消す</button>
          <label class="sr-only" for="import-file">読み込む進行JSONを選ぶ</label>
          <input class="sr-only" type="file" id="import-file" accept="application/json,.json">
          <div class="save-status" id="save-status" aria-live="polite"></div>
        </div>
        <p class="route-safety-key"><span class="red">赤</span>は期限と取り逃し。チェックは、今開いている進行（本編、HARD、INTERmission）ごとに別々に残る。</p>
        <div class="lookup-count" id="route-count" aria-live="polite"></div>
        <div id="route"></div>
      </section>
      ${itemsPanel}
      ${catalogs}
      <section class="panel" id="p-enemies" role="tabpanel" aria-labelledby="tab-enemies" hidden>
        <h2>エネミー</h2>
        <p class="lead">通常の敵とボス。数値は掲載元の表に合わせ、攻略の文章は短くまとめ直してある。画像は掲載元へのリンクで、このリポジトリには置いていない。</p>
        <div class="subtabs" id="enemy-subtabs" role="tablist"></div>
        <div class="toolbar catalog-tools">
          <input type="search" id="enemy-q" aria-label="エネミーを検索" placeholder="名前か番号で検索">
        </div>
        <div id="enemy-list"></div>
      </section>
      <section class="panel" id="p-settings" role="tabpanel" aria-labelledby="tab-settings" hidden>
        <h2>設定</h2>
        <p class="lead">ボタンの名前、タブの名前、見出しの定型文をここで変える。変更はこのブラウザに残り、「書き出す」から取り出せる。</p>
        <div id="settings-body"></div>
      </section>`;
    document.getElementById("expand").addEventListener("click", () => {
      const chapters = chaptersFor(ui.trackId);
      const collapse = chapters.some(chapter => ui.collapsed[chapterKey(chapter.id)] !== true);
      chapters.forEach(chapter => { ui.collapsed[chapterKey(chapter.id)] = collapse; });
      renderRoute();
    });
    document.getElementById("chapter-jump").addEventListener("change", event => {
      ui.chapterId = event.target.value;
      saveChapterFilter();
      if (ui.chapterId) ui.collapsed[chapterKey(ui.chapterId)] = false;
      renderRoute();
      const section = ui.chapterId && document.getElementById("chapter-" + ui.trackId + "-" + ui.chapterId);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    bindSearch(document.getElementById("q"), event => {
      ui.query = event.target.value.trim();
      renderRoute();
    });
    document.getElementById("export").addEventListener("click", exportProgress);
    document.getElementById("import").addEventListener("click", () => document.getElementById("import-file").click());
    document.getElementById("import-file").addEventListener("change", importProgress);
    document.getElementById("restore").addEventListener("click", restoreProgress);
    document.getElementById("reset").addEventListener("click", resetProgress);
    const enemyQuery = document.getElementById("enemy-q");
    if (enemyQuery) bindSearch(enemyQuery, () => {
      ui.enemyQuery = enemyQuery.value;
      if (ui.hub === "enemies") renderEnemies();
    });
    document.querySelectorAll("[data-catalog-search]").forEach(input => {
      bindSearch(input, () => {
        ui.catalogQuery[input.dataset.catalogSearch] = input.value.trim();
        if (input.dataset.catalogSearch === "items") {
          renderItems();
          return;
        }
        const hub = GAME.hubs.find(item => item.id === input.dataset.catalogSearch);
        if (hub) renderCatalog(hub);
      });
    });
    renderRoute();
    renderCatalogs();
    updateRestore();
  }

  function showHub(id) {
    const hub = GAME.hubs.some(item => item.id === id) ? id : "route";
    if (!ui.keepEnemy) ui.enemyId = "";
    ui.hub = hub;
    document.querySelectorAll("#tabs [data-hub]").forEach(button => {
      const on = button.dataset.hub === hub;
      button.classList.toggle("on", on);
      button.setAttribute("aria-selected", on ? "true" : "false");
      button.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll(".panel").forEach(panel => {
      const on = panel.id === "p-" + hub;
      panel.classList.toggle("on", on);
      panel.hidden = !on;
    });
    const next = hub === "enemies" && ui.enemyId ? "#/enemies/" + ui.enemyId : "#/" + hub;
    if (location.hash !== next) history.replaceState(null, "", next);
    if (hub === "settings") renderSettings();
    if (hub === "enemies") renderEnemies();
  }

  function enemyRecords() {
    return globalThis.ENEMIES || [];
  }

  function renderEnemies() {
    const root = document.getElementById("enemy-list");
    const tabs = document.getElementById("enemy-subtabs");
    if (!root || !tabs) return;
    const current = ui.enemyId && enemyById(ui.enemyId);
    if (current) {
      tabs.innerHTML = `<button type="button" id="enemy-back">一覧へ戻る</button>`;
      root.innerHTML = enemyPage(current);
      document.getElementById("enemy-back").addEventListener("click", () => showHub("enemies"));
      return;
    }
    const kinds = [["normal", "通常"], ["boss", "ボス"], ["summon", "召喚"]];
    tabs.innerHTML = kinds.map(([id, label]) => `<button type="button" class="chip${ui.enemyKind === id ? " on" : ""}" data-enemy-kind="${id}">${label}</button>`).join("");
    const query = (document.getElementById("enemy-q") && document.getElementById("enemy-q").value || ui.enemyQuery || "").trim().toLowerCase();
    const rows = enemyRecords().filter(enemy => enemy.kind === ui.enemyKind && (!query || (enemy.no + " " + enemy.name).toLowerCase().includes(query)));
    root.innerHTML = rows.map(enemy => `<button type="button" class="enemy-row" data-open-enemy="${esc(enemy.id)}"><span>${esc(enemy.no ? "No." + enemy.no : "ボス")}</span><strong>${esc(enemy.name)}</strong><span>${esc((enemy.places && enemy.places[0] && enemy.places[0].where) || "")}</span></button>`).join("") || "<p>一致する敵がいません。</p>";
    tabs.querySelectorAll("[data-enemy-kind]").forEach(button => {
      button.addEventListener("click", () => {
        ui.enemyKind = button.getAttribute("data-enemy-kind");
        renderEnemies();
      });
    });
  }

  function enemyPage(enemy) {
    const places = (enemy.places || []).map(place => `<tr><td>${esc(place.when || "")}</td><td>${esc(place.where || "")}</td><td>${esc(place.level || "")}</td></tr>`).join("");
    const mode = playDifficulty();
    const hp = ["easy", "normal", "hard"].filter(key => enemy.hp && enemy.hp[key]).map(key => `<tr class="${key === mode ? "is-diff-on" : ""}"><th>${key.toUpperCase()}</th><td>${esc(enemy.hp[key])}</td><td>${esc(enemy.atk && enemy.atk[key] && enemy.atk[key].atk || "")}</td><td>${esc(enemy.atk && enemy.atk[key] && enemy.atk[key].matk || "")}</td><td>${esc(enemy.atk && enemy.atk[key] && enemy.atk[key].def || "")}</td><td>${esc(enemy.atk && enemy.atk[key] && enemy.atk[key].mdef || "")}</td></tr>`).join("");
    const elements = (enemy.elements || []).map(row => `<tr><th>${esc(row.name)}</th><td>${esc(row.damage || "")}</td><td>${esc(row.stagger || "")}</td></tr>`).join("");
    const ailments = (enemy.ailments || []).map(row => `<tr><th>${esc(row.name)}</th><td>${esc(row.value)}</td></tr>`).join("");
    const rewards = ["easy", "normal", "hard"].filter(key => enemy.rewards && enemy.rewards[key]).map(key => `<tr class="${key === mode ? "is-diff-on" : ""}"><th>${key.toUpperCase()}</th><td>${esc(enemy.rewards[key].exp || "")}</td><td>${esc(enemy.rewards[key].ap || "")}</td><td>${esc(enemy.rewards[key].gil || "")}</td></tr>`).join("");
    const loot = enemy.items ? [["通常", enemy.items.drop], ["レア", enemy.items.rare], ["盗む", enemy.items.steal]].filter(row => row[1]).map(row => `<tr><th>${row[0]}</th><td>${lootCell(row[1])}</td></tr>`).join("") : "";
    const actions = (enemy.actions || []).map(row => `<tr><th>${esc(row.name)}</th><td>${esc(row.type || "")}</td><td>${esc(row.element || "")}</td><td>${esc(row.range || "")}</td><td>${esc(row.guard || "")}</td><td>${esc(row.down || "")}</td></tr>`).join("");
    const phases = (enemy.phases || []).map(phase => `<section class="enemy-phase"><h3>${esc(phase.title)}</h3><p>${(phase.actions || []).map(name => esc(name)).join("、") || "技名は表のとおり。"}</p></section>`).join("");
    const image = enemy.image ? `<p><img class="enemy-hero" alt="" src="${esc(enemy.image)}" loading="lazy"></p>` : "";
    return `<article class="enemy-page"><p><a href="${esc(enemy.source)}" target="_blank" rel="noopener noreferrer">掲載元の表</a></p>${image}<h2>${esc(enemy.no ? "No." + enemy.no + " " : "")}${esc(enemy.name)}</h2>
      ${places ? `<h3>出現</h3><table class="enemy-table"><thead><tr><th>時期</th><th>場所</th><th>レベル</th></tr></thead><tbody>${places}</tbody></table>` : ""}
      ${hp ? `<h3>ステータス</h3><table class="enemy-table"><thead><tr><th>モード</th><th>HP</th><th>物攻</th><th>魔攻</th><th>物防</th><th>魔防</th></tr></thead><tbody>${hp}</tbody></table>` : ""}
      ${elements ? `<h3>ダメージ倍率</h3><table class="enemy-table"><thead><tr><th></th><th>ダメージ</th><th>バースト</th></tr></thead><tbody>${elements}</tbody></table>` : ""}
      ${ailments ? `<h3>状態異常</h3><table class="enemy-table"><tbody>${ailments}</tbody></table>` : ""}
      ${rewards ? `<h3>経験値・AP・ギル</h3><table class="enemy-table"><thead><tr><th>モード</th><th>経験値</th><th>AP</th><th>ギル</th></tr></thead><tbody>${rewards}</tbody></table>` : ""}
      ${loot ? `<h3>入手</h3><table class="enemy-table"><tbody>${loot}</tbody></table>` : ""}
      ${actions ? `<h3>アクション</h3><table class="enemy-table"><thead><tr><th>名前</th><th>タイプ</th><th>属性</th><th>範囲</th><th>ガード</th><th>ダウン</th></tr></thead><tbody>${actions}</tbody></table>` : ""}
      ${phases ? `<h3>段階</h3>${phases}` : ""}
      <h3>攻略</h3><p>${esc(enemy.tactic || "")}</p></article>`;
  }

  function lootCell(text) {
    const name = String(text || "").replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "").trim();
    const found = name && catalogRecordById && findItemByName(name);
    if (!found) return esc(text);
    return `<button type="button" class="linkish" data-open-item="${esc(found.id)}">${esc(text)}</button>`;
  }

  function findItemByName(name) {
    for (const section of itemSections()) {
      const found = catalogItems(section.catalog).find(item => item && item.name === name);
      if (found) return found;
    }
    for (const id of ["summons"]) {
      if (!CATALOGS[id]) continue;
      const found = (CATALOGS[id].items || []).find(item => item && item.name === name);
      if (found) return found;
    }
    return null;
  }

  function paintChecks() {
    document.querySelectorAll("input[data-check]").forEach(input => {
      const on = checked(input.getAttribute("data-check"));
      input.checked = on;
      const card = input.closest(".it");
      if (card) card.classList.toggle("done", on);
    });
  }

  function refreshVisibleCounts() {
    if (ui.hub === "route") {
      document.querySelectorAll("#route section.ch").forEach(section => {
        const chapter = chaptersFor(ui.trackId).find(item => item.id === section.dataset.chapter);
        if (!chapter) return;
        const done = chapter.items.filter(item => checked(item.id)).length;
        const cnt = section.querySelector(".cnt");
        if (!cnt) return;
        cnt.textContent = done + "/" + chapter.items.length;
        cnt.classList.toggle("done", chapter.items.length > 0 && done === chapter.items.length);
      });
      const chapters = chaptersFor(ui.trackId);
      const visible = chapters.reduce((sum, chapter) => sum + chapter.items.filter(itemVisible).length, 0);
      const total = chapters.reduce((sum, chapter) => sum + chapter.items.length, 0);
      const count = document.getElementById("route-count");
      if (count) count.textContent = visible + " / " + total + " 件を表示";
      renderDash();
      return;
    }
    const hub = GAME.hubs.find(item => item.id === ui.hub);
    if (hub && hub.kind === "catalog") renderCatalog(hub);
    if (hub && hub.kind === "settings") renderSettings();
  }

  function renderSettings() {
    const root = document.getElementById("settings-body");
    if (!root) return;
    const labels = GuideProgress.UI_LABELS;
    const rows = Object.keys(labels).map(key => {
      const value = cardBook.labels && cardBook.labels[key] ? cardBook.labels[key] : labels[key];
      return `<label class="setting-row"><span>${esc(labels[key])}</span><input data-label-key="${esc(key)}" value="${esc(value)}"><button type="button" data-label-reset="${esc(key)}">初期値</button></label>`;
    }).join("");
    const templates = GuideProgress.activeTemplates(cardBook, globalThis.TEMPLATES || []);
    const difficulty = playDifficulty();
    root.innerHTML = `<h3>難易度</h3><p class="lead">今進めているチャートの難易度です。カードとエネミー頁のHP、経験値、AP、ギルは、この難易度の列を使います。CLASSICは操作の種類で、数値の表はありません。</p><label class="setting-row"><span>難易度</span><select id="settings-difficulty"><option value="easy"${difficulty === "easy" ? " selected" : ""}>EASY</option><option value="normal"${difficulty === "normal" ? " selected" : ""}>NORMAL</option><option value="hard"${difficulty === "hard" ? " selected" : ""}>HARD</option></select></label><h3>ボタンとタブの名前</h3><div class="setting-list">${rows}</div>
      <h3>見出しの定型文</h3>
      <p class="lead">1行が1つの定型文です。カードの見出しで選ぶと、章の中で 宝箱① のように番号が付きます。</p>
      <textarea id="settings-templates" rows="6">${esc(templates.map(item => item.label).join("\n"))}</textarea>
      <p><button type="button" id="settings-templates-save">定型文を保存</button></p>
      <h3>今後の設定</h3>
      <p class="lead">表示や操作で、あとから設定が必要になったものはこの画面に足します。</p>`;
    const difficultySelect = document.getElementById("settings-difficulty");
    if (difficultySelect) difficultySelect.addEventListener("change", () => {
      const next = JSON.parse(JSON.stringify(cardBook));
      next.difficulty = difficultySelect.value === "easy" || difficultySelect.value === "hard" ? difficultySelect.value : "normal";
      setCardBook(next);
    });
    root.querySelectorAll("[data-label-key]").forEach(input => {
      input.addEventListener("change", () => {
        const key = input.getAttribute("data-label-key");
        const next = JSON.parse(JSON.stringify(cardBook));
        next.labels = Object.assign({}, next.labels);
        const text = input.value.trim();
        if (!text || text === labels[key]) delete next.labels[key];
        else next.labels[key] = text;
        setCardBook(next);
      });
    });
    root.querySelectorAll("[data-label-reset]").forEach(button => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-label-reset");
        const next = JSON.parse(JSON.stringify(cardBook));
        next.labels = Object.assign({}, next.labels);
        delete next.labels[key];
        setCardBook(next);
      });
    });
    const saveTemplates = document.getElementById("settings-templates-save");
    if (saveTemplates) saveTemplates.addEventListener("click", () => {
      const lines = String(document.getElementById("settings-templates").value || "").split(/\n/).map(line => line.trim()).filter(Boolean);
      const current = GuideProgress.activeTemplates(cardBook, globalThis.TEMPLATES || []);
      const next = JSON.parse(JSON.stringify(cardBook));
      next.templates = lines.map(label => {
        const found = current.find(item => item.label === label);
        return { id: found ? found.id : ("tpl-" + Date.now().toString(36) + "-" + label.length), label };
      });
      setCardBook(next);
    });
  }

  function exportProgress() {
    const payload = { app: GuideProgress.APP, exportedAt: new Date().toISOString(), state, cards: cardBook };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ff7r-guide-progress-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    setStatus("進行を書き出した。");
  }

  async function importProgress(event) {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    try {
      const bundle = GuideProgress.acceptBundle(JSON.parse(await file.text()));
      if (!bundle) throw new Error("rejected");
      backup();
      if (bundle.state) state = bundle.state;
      if (bundle.cards) cardBook = bundle.cards;
      for (const id of Object.keys(state.checks)) {
        if (cardBook.deleted[id]) delete state.checks[id];
      }
      state.checks = GuideProgress.reconcileChecks(state.checks, trophyMeta());
      save();
      saveBook();
      renderRoute();
      renderCatalogs();
      setStatus("進行を読み込んだ。前の状態は「直前のリセットを戻す」で戻せる。");
    } catch (error) {
      setStatus("読み込めなかった。FF7リメイク用のJSONか確認する。", true);
    }
  }

  function restoreProgress() {
    try {
      const raw = localStorage.getItem(storage.backup);
      if (!raw) throw new Error("empty");
      state = GuideProgress.normalizeState(JSON.parse(raw));
      state.checks = GuideProgress.reconcileChecks(state.checks, trophyMeta());
      save();
      renderRoute();
      renderCatalogs();
      setStatus("直前の控えを戻した。");
    } catch (error) {
      setStatus("戻せる控えがない。", true);
    }
  }

  function resetProgress() {
    if (!window.confirm("このブラウザに保存した進行を消します。直前の状態は一度だけ戻せます。")) return;
    backup();
    state = GuideProgress.emptyState();
    save();
    renderRoute();
    renderCatalogs();
    setStatus("進行を消した。戻すには「直前のリセットを戻す」。");
  }

  function openHit(id) {
    const entry = findEntry(id);
    if (!entry) return;
    if (entry.trackId) {
      ui.trackId = entry.trackId;
      ui.flag = "all";
      ui.query = "";
      ui.chapterId = entry.chapterId || "";
      saveChapterFilter();
      ui.collapsed[chapterKey(entry.chapterId)] = false;
    }
    if (entry.section) ui.itemSection = entry.section;
    if (entry.hub !== "route") {
      ui.catalogQuery[entry.hub] = "";
      const input = document.querySelector('[data-catalog-search="' + entry.hub + '"]');
      if (input) input.value = "";
    }
    const routeSearch = document.getElementById("q");
    if (routeSearch) routeSearch.value = "";
    paintTracks();
    paintFlags();
    if (entry.hub === "route") renderRoute();
    else if (entry.hub === "items") renderItems();
    else {
      const hub = GAME.hubs.find(item => item.id === entry.hub);
      if (hub) renderCatalog(hub);
    }
    showHub(entry.hub);
    document.getElementById("guide-search-results").hidden = true;
    const card = cardElement(id);
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("is-target");
    setTimeout(() => card.classList.remove("is-target"), 1600);
  }

  function searchHits(query) {
    const hits = [];
    const needle = query.toLowerCase();
    for (const track of GAME.tracks) {
      for (const item of routeItems(track.id)) {
        const linked = item.trophy && trophyById(item.trophy);
        const text = [item.title, item.detail, item.deadline, item.id, item.chapterTitle, linked && linked.name].join("\n");
        if (!text.toLowerCase().includes(needle)) continue;
        hits.push({ id: item.id, label: item.title || item.id, where: track.label + " · " + item.chapterTitle });
      }
    }
    for (const hub of GAME.hubs) {
      if (hub.kind !== "catalog") continue;
      for (const item of catalogItems(hub.catalog)) {
        const text = [item.name, item.detail, item.area, item.id].join("\n");
        if (!text.toLowerCase().includes(needle)) continue;
        hits.push({ id: item.id, label: item.name || item.id, where: hub.label });
      }
    }
    for (const section of itemSections()) {
      for (const item of catalogItems(section.catalog)) {
        const text = [item.name, item.detail, item.area, item.obtain, item.id].join("\n");
        if (!text.toLowerCase().includes(needle)) continue;
        hits.push({ id: item.id, label: item.name || item.id, where: "アイテム · " + section.label });
      }
    }
    return hits;
  }

  document.addEventListener("click", event => {
    const hub = event.target.closest("#tabs [data-hub]");
    if (hub) {
      showHub(hub.dataset.hub);
      return;
    }
    const track = event.target.closest("[data-track]");
    if (track) {
      ui.trackId = track.dataset.track;
      ui.chapterId = typeof chapterFilter[ui.trackId] === "string" ? chapterFilter[ui.trackId] : "";
      paintTracks();
      renderRoute();
      return;
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      ui.flag = filter.dataset.filter;
      paintFlags();
      renderRoute();
      return;
    }
    const sub = event.target.closest("[data-toggle-section]");
    if (sub) {
      const id = sub.getAttribute("data-toggle-section");
      const box = sub.closest(".subch");
      const closed = box && !box.classList.contains("closed");
      if (box) box.classList.toggle("closed", closed);
      const body = box && box.querySelector(".subch-body");
      if (body) body.hidden = !!closed;
      ui.collapsed["section:" + ui.trackId + ":" + id] = !!closed;
      sub.setAttribute("aria-expanded", closed ? "false" : "true");
      return;
    }
    const chapter = event.target.closest("[data-toggle-chapter]");
    if (chapter) {
      const id = chapter.dataset.toggleChapter;
      const section = chapter.closest("section.ch");
      const closed = !section.classList.contains("closed");
      section.classList.toggle("closed", closed);
      ui.collapsed[chapterKey(id)] = closed;
      chapter.setAttribute("aria-expanded", closed ? "false" : "true");
      const expand = document.getElementById("expand");
      const anyOpen = !!document.querySelector("#route section.ch:not(.closed)");
      expand.textContent = anyOpen ? "すべて折りたたむ" : "すべて開く";
      expand.setAttribute("aria-expanded", anyOpen ? "true" : "false");
      return;
    }
    const toggle = event.target.closest("[data-toggle-item]");
    if (toggle) {
      const id = toggle.dataset.toggleItem;
      const collapsed = ui.collapsed[id] !== true;
      ui.collapsed[id] = collapsed;
      const card = toggle.closest(".it");
      card.classList.toggle("is-collapsed", collapsed);
      const body = card.querySelector(".route-item-content");
      if (body) body.hidden = collapsed;
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      return;
    }
    const questToggle = event.target.closest("[data-toggle-quest]");
    if (questToggle) {
      const id = questToggle.getAttribute("data-toggle-quest");
      ui.openQuest = ui.openQuest === id ? "" : id;
      renderCatalog(GAME.hubs.find(hub => hub.id === "quests"));
      return;
    }
    const kidsToggle = event.target.closest("[data-toggle-kids]");
    if (kidsToggle) {
      const id = kidsToggle.getAttribute("data-toggle-kids");
      ui.collapsed["kids:" + id] = ui.collapsed["kids:" + id] !== true;
      renderRoute();
      return;
    }
    const questLink = event.target.closest("[data-open-quest]");
    if (questLink) {
      ui.openQuest = questLink.getAttribute("data-open-quest");
      renderCatalog(GAME.hubs.find(hub => hub.id === "quests"));
      showHub("quests");
      const card = document.getElementById("quest-" + ui.openQuest);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const hit = event.target.closest("[data-open-hit]");
    if (hit) openHit(hit.getAttribute("data-open-hit"));
    const facet = event.target.closest("[data-facet]");
    if (facet) {
      ui.catalogFacet[facet.getAttribute("data-facet-hub")] = facet.getAttribute("data-facet") || "";
      const hub = GAME.hubs.find(item => item.id === facet.getAttribute("data-facet-hub"));
      if (hub) renderCatalog(hub);
      return;
    }
    const enemyOpen = event.target.closest("[data-open-enemy]");
    if (enemyOpen) {
      event.preventDefault();
      ui.enemyId = enemyOpen.getAttribute("data-open-enemy");
      ui.keepEnemy = true;
      showHub("enemies");
      ui.keepEnemy = false;
      return;
    }
    const itemLink = event.target.closest("[data-open-item]");
    if (itemLink) {
      const record = catalogRecordById(itemLink.getAttribute("data-open-item"));
      if (!record) return;
      if (record.aside) {
        ui.asideNote = record;
        ui.weaponId = "";
        showHub("items");
        renderItems();
        return;
      }
      ui.asideNote = null;
      if (record.catalogId) {
        ui.weaponId = "";
        ui.itemSection = record.catalogId;
        ui.catalogQuery.items = "";
        const input = document.querySelector('[data-catalog-search="items"]');
        if (input) input.value = "";
        renderItems();
        showHub("items");
        const row = document.querySelector('#list-items tr[data-id="' + record.id + '"]');
        if (row) {
          row.scrollIntoView({ behavior: "smooth", block: "center" });
          row.classList.add("is-target");
        }
        return;
      }
      showHub(record.hubId);
      const hub = GAME.hubs.find(entry => entry.id === record.hubId);
      if (hub) renderCatalog(hub);
      const card = cardElement(record.id);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("is-target");
      }
      return;
    }
    const weaponOpen = event.target.closest("[data-open-weapon]");
    if (weaponOpen) {
      ui.weaponId = weaponOpen.getAttribute("data-open-weapon");
      ui.itemSection = "weapons";
      renderItems();
      const view = document.getElementById("list-items");
      if (view) view.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (event.target.closest("[data-weapon-back]")) {
      ui.weaponId = "";
      renderItems();
      return;
    }
    const sectionTab = event.target.closest("[data-item-section]");
    if (sectionTab) {
      ui.itemSection = sectionTab.getAttribute("data-item-section");
      ui.asideNote = null;
      renderItems();
      return;
    }
    const sortHeader = event.target.closest("[data-sort]");
    if (sortHeader) {
      const key = sortHeader.getAttribute("data-sort");
      if (ui.itemSort.key === key) ui.itemSort.dir *= -1;
      else ui.itemSort = { key, dir: 1 };
      renderItems();
      return;
    }
    const zoom = event.target.closest("[data-zoom-src]");
    if (zoom && document.body.classList.contains("is-card-edit") && zoom.classList.contains("blk-zoom")) return;
    if (zoom) {
      event.preventDefault();
      openZoom(zoom.getAttribute("data-zoom-src"), "", zoom.getAttribute("data-zoom-label") || "");
      return;
    }
    const map = event.target.closest("[data-map]");
    if (map) {
      event.preventDefault();
      event.stopPropagation();
      toggleMap(map);
      return;
    }
    if (!event.target.closest("#map-pop") && !event.target.closest("#map-zoom")) hideMap(true);
  });

  document.addEventListener("change", event => {
    const box = event.target.closest("input[data-check]");
    if (!box) return;
    const id = box.getAttribute("data-check");
    state.checks = GuideProgress.applyToggle(state.checks, id, box.checked, trophyMeta());
    save();
    paintChecks();
    if (ui.hub === "route" && (ui.flag === "todo" || ui.flag === "band")) renderRoute();
    else refreshVisibleCounts();
    if (ui.hub !== "trophies") renderCatalog(GAME.hubs.find(hub => hub.id === "trophies"));
    const currentHub = GAME.hubs.find(hub => hub.id === ui.hub);
    if (currentHub && currentHub.kind === "catalog" && currentHub.id !== "trophies") renderCatalog(currentHub);
    if (ui.hub === "items") renderItems();
  });

  document.getElementById("dash").addEventListener("click", () => {
    showHub("route");
    ui.flag = "band";
    paintFlags();
    renderRoute();
  });

  const searchInput = document.getElementById("guide-search");
  const searchResults = document.getElementById("guide-search-results");

  function placeSearch() {
    const rect = searchInput.getBoundingClientRect();
    const width = Math.min(640, window.innerWidth - 24);
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
    const below = window.innerHeight - rect.bottom;
    searchResults.style.left = left + "px";
    searchResults.style.width = width + "px";
    if (below < 200 && rect.top > below) {
      searchResults.style.top = "auto";
      searchResults.style.bottom = (window.innerHeight - rect.top + 6) + "px";
      searchResults.style.maxHeight = Math.max(120, rect.top - 18) + "px";
    } else {
      searchResults.style.bottom = "auto";
      searchResults.style.top = (rect.bottom + 6) + "px";
      searchResults.style.maxHeight = Math.max(120, below - 18) + "px";
    }
  }

  function renderSearch() {
    const query = searchInput.value.trim();
    const count = document.getElementById("guide-search-count");
    if (!query) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      count.textContent = "";
      return;
    }
    const hits = searchHits(query).slice(0, 12);
    count.textContent = hits.length + "件";
    searchResults.hidden = false;
    placeSearch();
    searchResults.innerHTML = hits.length
      ? hits.map(hit => `<button type="button" class="search-hit" data-open-hit="${esc(hit.id)}"><b>${esc(hit.label)}</b><small>${esc(hit.where)}</small></button>`).join("")
      : '<p class="search-empty">一致する項目がありません。</p>';
  }

  bindSearch(searchInput, renderSearch);

  function bindSearch(input, apply) {
    if (!input) return;
    let composing = false;
    input.addEventListener("compositionstart", () => { composing = true; });
    input.addEventListener("compositionend", event => { composing = false; apply(event); });
    input.addEventListener("input", event => { if (!composing) apply(event); });
  }
  window.addEventListener("resize", () => { if (!searchResults.hidden) placeSearch(); });
  document.addEventListener("click", event => {
    if (event.target.closest("#guide-search, #guide-search-results, .global-search")) return;
    searchResults.hidden = true;
  });
  window.addEventListener("hashchange", () => {
    const id = location.hash.replace(/^#\//, "");
    if (id && id !== ui.hub) showHub(id);
  });

  function setTheme(value, persist) {
    const known = new Set(GAME.themes.map(theme => theme.id));
    const theme = known.has(value) ? value : GAME.themes[0].id;
    document.documentElement.dataset.theme = theme;
    const select = document.getElementById("theme-select");
    if (select) select.value = theme;
    const chrome = { light: "#0b2438", dark: "#090f14", accent: "#061018" };
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", chrome[theme] || chrome.light);
    if (persist) {
      try { localStorage.setItem(storage.theme, theme); } catch (error) {}
    }
  }

  const howto = document.getElementById("howto");
  document.getElementById("open-howto").addEventListener("click", () => {
    howto.hidden = false;
    document.getElementById("howto-close").focus();
  });
  document.getElementById("howto-close").addEventListener("click", () => {
    howto.hidden = true;
    document.getElementById("open-howto").focus();
  });
  howto.addEventListener("click", event => { if (event.target === howto) howto.hidden = true; });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !howto.hidden) {
      howto.hidden = true;
      document.getElementById("open-howto").focus();
    }
  });

  state.checks = GuideProgress.reconcileChecks(state.checks, trophyMeta());
  renderHeader();
  let savedTheme = GAME.themes[0].id;
  try { savedTheme = localStorage.getItem(storage.theme) || savedTheme; } catch (error) {}
  setTheme(savedTheme, false);
  document.getElementById("theme-select").addEventListener("change", event => setTheme(event.target.value, true));

  const initial = location.hash.replace(/^#\//, "");
  const enemyHash = initial.match(/^enemies\/(.+)$/);
  if (enemyHash) {
    ui.hub = "enemies";
    ui.enemyId = decodeURIComponent(enemyHash[1]);
  } else if (GAME.hubs.some(hub => hub.id === initial)) ui.hub = initial;
  renderTabs();
  shell();
  showHub(ui.hub);

  function setCardBook(book) {
    cardBook = GuideProgress.normalizeCardBook(book);
    for (const id of Object.keys(state.checks)) {
      if (cardBook.deleted[id]) delete state.checks[id];
    }
    state.checks = GuideProgress.reconcileChecks(state.checks, trophyMeta());
    save();
    saveBook();
    renderRoute();
    renderCatalogs();
    if (ui.hub === "settings") renderSettings();
  }

  function dropCard(id) {
    if (state.checks[id]) state.checks = GuideProgress.applyToggle(state.checks, id, false, trophyMeta());
    else delete state.checks[id];
    cardBook = GuideProgress.removeCard(cardBook, id);
    state.checks = GuideProgress.reconcileChecks(state.checks, trophyMeta());
    save();
    saveBook();
    renderRoute();
    renderCatalogs();
  }

  globalThis.GuideApp = {
    setCardBook,
    showHub,
    dropCard,
    getBook: () => cardBook,
    baseItems,
    baseCatalogItems(catalogId) {
      const catalog = CATALOGS[catalogId];
      return catalog && catalog.items ? catalog.items.filter(item => item && item.id) : [];
    },
    findBaseRoute(id) {
      for (const trackId of Object.keys(ROUTE)) {
        for (const row of ROUTE[trackId] || []) {
          for (const item of row.items || []) {
            if (item && item.id === id) return { trackId, chapterId: row.chapterId, item };
          }
        }
      }
      return null;
    },
    findBaseCatalog(id) {
      for (const catalogId of Object.keys(CATALOGS)) {
        for (const item of CATALOGS[catalogId].items || []) {
          if (item && item.id === id) return { catalogId, item };
        }
      }
      return null;
    },
    currentIds(trackId, chapterId) {
      const chapter = chaptersFor(trackId).find(item => item.id === chapterId);
      return chapter ? chapter.items.map(item => item.id) : [];
    },
    currentCatalogIds(catalogId) {
      return catalogItems(catalogId).map(item => item.id);
    },
    trophyChoices() {
      return trophyItems().map(item => ({ id: item.id, name: item.name }));
    },
    itemChoices() {
      const choices = [];
      for (const section of itemSections()) {
        for (const item of catalogItems(section.catalog)) {
          choices.push({ id: item.id, name: item.name, area: item.area || "", hubId: section.catalog, hubLabel: section.label, intermission: item.intermission === true });
        }
      }
      return choices;
    }
  };

  const mapPop = document.createElement("div");
  mapPop.id = "map-pop";
  mapPop.hidden = true;
  mapPop.innerHTML = '<img alt=""><p class="map-fallback" hidden>画像を表示できないので、下のリンクから開いてください。</p><p class="map-actions"><button type="button" id="map-enlarge">拡大</button> <a target="_blank" rel="noopener noreferrer">地図のページを開く</a></p>';
  document.body.appendChild(mapPop);
  mapPop.querySelector("img").addEventListener("error", () => {
    mapPop.querySelector("img").hidden = true;
    mapPop.querySelector(".map-fallback").hidden = false;
  });

  function hideMap(force) {
    if (!force && mapPop.dataset.pin === "1") return;
    mapPop.hidden = true;
    mapPop.dataset.pin = "0";
  }

  function toggleMap(button) {
    const id = button.getAttribute("data-map") || button.getAttribute("data-map-src") || "";
    if (!mapPop.hidden && mapPop.dataset.map === id && mapPop.dataset.pin === "1") {
      hideMap(true);
      return;
    }
    const label = button.getAttribute("data-map-label") || "地図";
    const image = mapPop.querySelector("img");
    const link = mapPop.querySelector("a");
    const src = button.getAttribute("data-map-src") || ("https://finalfantasy-jun-site.com/ff7_remake/field/images/" + id + ".png");
    const href = button.getAttribute("data-map-href") || "";
    mapPop.dataset.map = id;
    mapPop.dataset.src = src;
    mapPop.dataset.href = href;
    mapPop.dataset.pin = "1";
    image.hidden = false;
    mapPop.querySelector(".map-fallback").hidden = true;
    image.alt = label + "の地図";
    image.src = src;
    if (href) {
      link.hidden = false;
      link.href = href;
      link.textContent = label + "の地図ページを開く";
    } else {
      link.hidden = true;
      link.removeAttribute("href");
    }
    mapPop.hidden = false;
    const rect = button.getBoundingClientRect();
    const width = Math.min(480, window.innerWidth - 16);
    mapPop.style.width = width + "px";
    mapPop.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)) + "px";
    const below = rect.bottom + 8;
    const spaceBelow = window.innerHeight - below;
    if (spaceBelow > 200) {
      mapPop.style.top = below + "px";
      mapPop.style.maxHeight = Math.max(160, spaceBelow - 8) + "px";
    } else {
      mapPop.style.top = "8px";
      mapPop.style.maxHeight = Math.max(160, rect.top - 16) + "px";
    }
  }

  const mapZoom = document.createElement("div");
  mapZoom.id = "map-zoom";
  mapZoom.hidden = true;
  mapZoom.innerHTML = '<div class="map-zoom-bar"><span id="map-zoom-label"></span><button type="button" id="map-zoom-close">閉じる</button></div><div id="map-zoom-stage"><img alt=""></div><p><a id="map-zoom-link" target="_blank" rel="noopener noreferrer">地図のページを開く</a></p>';
  document.body.appendChild(mapZoom);
  const zoomState = { scale: 1, x: 0, y: 0, pointers: new Map(), start: null };
  const zoomImg = mapZoom.querySelector("#map-zoom-stage img");
  function applyZoom() {
    zoomImg.style.transform = "translate(" + zoomState.x + "px," + zoomState.y + "px) scale(" + zoomState.scale + ")";
  }
  function openZoom(src, href, label) {
    zoomState.scale = 1;
    zoomState.x = 0;
    zoomState.y = 0;
    zoomState.pointers.clear();
    zoomImg.src = src;
    zoomImg.alt = (label || "地図") + "の拡大";
    mapZoom.querySelector("#map-zoom-label").textContent = label || "地図";
    const link = mapZoom.querySelector("#map-zoom-link");
    if (href && /^https?:\/\//i.test(href)) {
      link.hidden = false;
      link.href = href;
    } else {
      link.hidden = true;
      link.removeAttribute("href");
    }
    mapZoom.hidden = false;
    applyZoom();
  }
  function closeZoom() {
    mapZoom.hidden = true;
    zoomState.pointers.clear();
  }
  mapZoom.querySelector("#map-zoom-close").addEventListener("click", closeZoom);
  mapPop.querySelector("#map-enlarge").addEventListener("click", event => {
    event.stopPropagation();
    openZoom(mapPop.dataset.src, mapPop.dataset.href, mapPop.querySelector("img").alt.replace(/の地図$/, ""));
  });
  mapPop.querySelector("img").addEventListener("click", () => {
    openZoom(mapPop.dataset.src, mapPop.dataset.href, mapPop.querySelector("img").alt.replace(/の地図$/, ""));
  });
  const stage = mapZoom.querySelector("#map-zoom-stage");
  stage.addEventListener("wheel", event => {
    event.preventDefault();
    const next = Math.min(6, Math.max(1, zoomState.scale * (event.deltaY < 0 ? 1.12 : 0.9)));
    zoomState.scale = next;
    applyZoom();
  }, { passive: false });
  stage.addEventListener("pointerdown", event => {
    try { stage.setPointerCapture(event.pointerId); } catch (error) {}
    zoomState.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (zoomState.pointers.size === 1) zoomState.start = { x: event.clientX - zoomState.x, y: event.clientY - zoomState.y, pinch: 0, scale: zoomState.scale };
    if (zoomState.pointers.size === 2) {
      const pts = [...zoomState.pointers.values()];
      zoomState.start.pinch = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      zoomState.start.scale = zoomState.scale;
    }
  });
  stage.addEventListener("pointermove", event => {
    if (!zoomState.pointers.has(event.pointerId)) return;
    zoomState.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (zoomState.pointers.size === 1 && zoomState.start) {
      zoomState.x = event.clientX - zoomState.start.x;
      zoomState.y = event.clientY - zoomState.start.y;
      applyZoom();
    } else if (zoomState.pointers.size === 2 && zoomState.start && zoomState.start.pinch) {
      const pts = [...zoomState.pointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      zoomState.scale = Math.min(6, Math.max(1, zoomState.start.scale * (dist / zoomState.start.pinch)));
      applyZoom();
    }
  });
  function endPointer(event) {
    zoomState.pointers.delete(event.pointerId);
    if (zoomState.pointers.size === 1) {
      const left = [...zoomState.pointers.values()][0];
      zoomState.start = { x: left.x - zoomState.x, y: left.y - zoomState.y, pinch: 0, scale: zoomState.scale };
    }
  }
  stage.addEventListener("pointerup", endPointer);
  stage.addEventListener("pointercancel", endPointer);

  document.addEventListener("mouseover", event => {
    const button = event.target.closest && event.target.closest("[data-map]");
    if (!button || !window.matchMedia("(hover: hover)").matches) return;
    if (mapPop.dataset.pin === "1") return;
    toggleMap(button);
    mapPop.dataset.pin = "0";
  });
  document.addEventListener("mouseout", event => {
    if (mapPop.dataset.pin === "1") return;
    const fromMap = event.target.closest && (event.target.closest("[data-map]") || event.target.closest("#map-pop"));
    if (!fromMap) return;
    const next = event.relatedTarget && event.relatedTarget.closest && (event.relatedTarget.closest("[data-map]") || event.relatedTarget.closest("#map-pop"));
    if (!next) hideMap(true);
  });

  try {
    const current = new URL(location.href);
    if (current.searchParams.has("ff7r-sw")) {
      current.searchParams.delete("ff7r-sw");
      history.replaceState(null, "", current.pathname + current.search + current.hash);
    }
  } catch (error) {}

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    let reloading = false;
    const reloadOnce = () => {
      if (reloading) return;
      reloading = true;
      location.reload();
    };
    navigator.serviceWorker.addEventListener("message", event => {
      if (event.data && event.data.type === "ff7r-reload") reloadOnce();
    });
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).then(registration => {
        registration.update().catch(() => {});
        const showUpdate = () => {
          const banner = document.getElementById("sw-update");
          if (banner) banner.hidden = false;
        };
        if (registration.waiting && navigator.serviceWorker.controller) showUpdate();
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdate();
          });
        });
        const button = document.getElementById("sw-update-reload");
        if (button) {
          button.addEventListener("click", () => {
            const waiting = registration.waiting;
            if (waiting) waiting.postMessage({ type: "ff7r-skip-waiting" });
            else reloadOnce();
          });
        }
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") registration.update().catch(() => {});
        });
      }).catch(() => {});
    });
  }
})();
