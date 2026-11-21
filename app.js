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
    collapsed: Object.create(null),
    hub: "route"
  };
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
    return defs.map(chapter => ({
      id: chapter.id,
      title: chapter.title,
      items: itemsByChapter.get(chapter.id) || []
    }));
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
    return GuideProgress.mergeCatalog(catalog, cardBook, catalogId).map(item => ({
      kind: "catalog",
      catalogId,
      id: item.id,
      example: item.example,
      name: item.name,
      detail: item.detail,
      area: item.area,
      source: item.source,
      missable: item.missable,
      auto: item.auto,
      intermission: item.intermission === true
    }));
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
    if (ui.flag === "todo" && checked(item.id)) return false;
    if (ui.flag === "band" && !bandFlags.has(item.flag)) return false;
    if (ui.flag !== "all" && ui.flag !== "todo" && ui.flag !== "band" && item.flag !== ui.flag) return false;
    return matchesQuery(item, ui.query);
  }

  function chapterKey(id) {
    return "chapter:" + ui.trackId + ":" + id;
  }

  function sourceLine(source) {
    if (!source) return "";
    const url = String(source);
    if (!/^https?:\/\//i.test(url)) return `<p class="source">出典: ${esc(url)}</p>`;
    return `<p class="source">出典: <a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(url)}</a></p>`;
  }

  function flagTag(flagId) {
    const flag = flagById[flagId];
    if (!flag) return "";
    return `<span class="tag tone-${esc(flag.tone || flag.id)}">${esc(flag.label)}</span>`;
  }

  function exampleMark(item) {
    return item.example ? '<span class="example-mark">例</span>' : "";
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
      return `<button type="button" id="tab-${esc(hub.id)}" role="tab" data-hub="${esc(hub.id)}" aria-selected="${on ? "true" : "false"}" aria-controls="p-${esc(hub.id)}" tabindex="${on ? "0" : "-1"}" class="${on ? "on" : ""}">${esc(hub.label)}</button>`;
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
    if (!item.items || !item.items.length) return "";
    const links = item.items.map(link => {
      const found = catalogRecordById(link.id);
      const name = found ? found.name : link.id;
      return `<button type="button" class="linkish" data-open-item="${esc(link.id)}">${esc(name)} ×${esc(String(link.qty || 1))}</button>`;
    }).join("");
    return `<p class="item-links">${links}</p>`;
  }

  function mapButton(item) {
    if (!item.map) return "";
    const map = (GAME.maps || []).find(entry => entry.id === item.map);
    const label = map ? map.label : item.map;
    return `<button type="button" class="map-open" data-map="${esc(item.map)}" data-map-label="${esc(label)}">MAP</button>`;
  }

  function routeCard(item) {
    const on = checked(item.id);
    const collapsed = ui.collapsed[item.id] === true;
    return `<article class="it flag-${esc(item.flag)}${item.example ? " is-example" : ""}${on ? " done" : ""}${collapsed ? " is-collapsed" : ""}" data-id="${esc(item.id)}">
      ${dragHandle(item.id)}
      <input type="checkbox" id="check-${esc(item.id)}" data-check="${esc(item.id)}"${on ? " checked" : ""}>
      <div class="ibody">
        <div class="ihead">
          <label for="check-${esc(item.id)}">${flagTag(item.flag)}${item.step ? `<span class="step-no">${esc(String(item.step))}</span>` : ""}${exampleMark(item)}<span class="it-title">${esc(item.title || item.id)}</span></label>
          <div class="imeta">
            ${item.trophy && trophyById(item.trophy) ? `<span class="tag tone-trophy">${esc(trophyById(item.trophy).name)}</span>` : ""}
            ${item.deadline ? `<span class="deadline-badge">${esc(item.deadline)}</span>` : ""}
            <button type="button" class="route-item-toggle" data-toggle-item="${esc(item.id)}" aria-expanded="${collapsed ? "false" : "true"}">詳細</button>
          </div>
        </div>
        <div class="route-item-content"${collapsed ? " hidden" : ""}>
          ${item.detail ? `<div class="det">${esc(item.detail)}</div>` : ""}
          ${itemLine(item)}
          ${sourceLine(item.source)}
          ${cardTools(item)}
          ${mapButton(item)}
        </div>
      </div>
    </article>`;
  }

  function dragHandle(id) {
    if (!cardEditing()) return "";
    return `<button type="button" class="card-drag-handle" data-card-drag="${esc(id)}" aria-label="ドラッグして移動" title="ドラッグして移動">⋮⋮</button>`;
  }

  function cardTools(item) {
    if (!cardEditing()) return "";
    return `<div class="card-edit-tools">
      <button type="button" data-card-up="${esc(item.id)}">上へ</button>
      <button type="button" data-card-down="${esc(item.id)}">下へ</button>
      <button type="button" data-card-edit="${esc(item.id)}">編集</button>
      <button type="button" data-card-move="${esc(item.id)}">移動</button>
      <button type="button" data-card-delete="${esc(item.id)}">削除</button>
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
      const items = chapter.items.filter(itemVisible);
      visible += items.length;
      const done = chapter.items.filter(item => checked(item.id)).length;
      const closed = ui.chapterId ? false : ui.collapsed[chapterKey(chapter.id)] === true;
      const hide = filtering && items.length === 0;
      return `<section class="ch${closed ? " closed" : ""}${hide ? " hide" : ""}" id="chapter-${esc(ui.trackId)}-${esc(chapter.id)}" data-chapter="${esc(chapter.id)}">
        <h2 class="chapter-heading"><button type="button" class="chh" data-toggle-chapter="${esc(chapter.id)}" aria-expanded="${closed ? "false" : "true"}">
          <span class="caret" aria-hidden="true">▼</span>
          <span class="cht">${esc(chapter.title)}</span>
          <span class="chl"><span class="cnt${chapter.items.length && done === chapter.items.length ? " done" : ""}">${done}/${chapter.items.length}</span></span>
        </button></h2>
        <div class="chb" data-card-track="${esc(ui.trackId)}">${cardEditing() ? `<p class="card-edit-chapter"><button type="button" data-card-add="1" data-card-track="${esc(ui.trackId)}" data-card-chapter="${esc(chapter.id)}">カードを追加</button></p>` : ""}${items.length ? items.map(routeCard).join("") : '<p class="empty-chapter">項目はまだありません。</p>'}</div>
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
      ${catalogs}`;
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
    document.getElementById("q").addEventListener("input", event => {
      ui.query = event.target.value.trim();
      renderRoute();
    });
    document.getElementById("export").addEventListener("click", exportProgress);
    document.getElementById("import").addEventListener("click", () => document.getElementById("import-file").click());
    document.getElementById("import-file").addEventListener("change", importProgress);
    document.getElementById("restore").addEventListener("click", restoreProgress);
    document.getElementById("reset").addEventListener("click", resetProgress);
    document.querySelectorAll("[data-catalog-search]").forEach(input => {
      input.addEventListener("input", () => {
        ui.catalogQuery[input.dataset.catalogSearch] = input.value.trim();
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
    const next = "#/" + hub;
    if (location.hash !== next) history.replaceState(null, "", next);
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
    const hit = event.target.closest("[data-open-hit]");
    if (hit) openHit(hit.getAttribute("data-open-hit"));
    const facet = event.target.closest("[data-facet]");
    if (facet) {
      ui.catalogFacet[facet.getAttribute("data-facet-hub")] = facet.getAttribute("data-facet") || "";
      const hub = GAME.hubs.find(item => item.id === facet.getAttribute("data-facet-hub"));
      if (hub) renderCatalog(hub);
      return;
    }
    const itemLink = event.target.closest("[data-open-item]");
    if (itemLink) {
      const record = catalogRecordById(itemLink.getAttribute("data-open-item"));
      if (!record) return;
      ui.catalogFacet[record.hubId] = "";
      ui.catalogQuery[record.hubId] = "";
      const input = document.querySelector('[data-catalog-search="' + record.hubId + '"]');
      if (input) input.value = "";
      const hub = GAME.hubs.find(entry => entry.id === record.hubId);
      if (hub) renderCatalog(hub);
      showHub(record.hubId);
      const card = cardElement(record.id);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("is-target");
      }
      return;
    }
    const map = event.target.closest("[data-map]");
    if (map) {
      event.preventDefault();
      event.stopPropagation();
      toggleMap(map);
      return;
    }
    if (!event.target.closest("#map-pop")) hideMap(true);
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

  searchInput.addEventListener("input", renderSearch);
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
  if (GAME.hubs.some(hub => hub.id === initial)) ui.hub = initial;
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
      for (const hub of GAME.hubs) {
        if (!hub.catalog || !["keyItems", "consumables", "accessories", "weapons", "armor", "materia"].includes(hub.catalog)) continue;
        for (const item of catalogItems(hub.catalog)) {
          choices.push({ id: item.id, name: item.name, area: item.area || "", hubId: hub.id, hubLabel: hub.label, intermission: item.intermission === true });
        }
      }
      return choices;
    }
  };

  const mapPop = document.createElement("div");
  mapPop.id = "map-pop";
  mapPop.hidden = true;
  mapPop.innerHTML = '<img alt=""><p class="map-fallback" hidden>画像を表示できないので、下のリンクから開いてください。</p><p><a target="_blank" rel="noopener noreferrer">地図のページを開く</a></p>';
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
    const id = button.getAttribute("data-map");
    if (!mapPop.hidden && mapPop.dataset.map === id && mapPop.dataset.pin === "1") {
      hideMap(true);
      return;
    }
    const label = button.getAttribute("data-map-label") || id;
    const image = mapPop.querySelector("img");
    const link = mapPop.querySelector("a");
    mapPop.dataset.map = id;
    mapPop.dataset.pin = "1";
    image.hidden = false;
    mapPop.querySelector(".map-fallback").hidden = true;
    image.alt = label + "の地図";
    image.src = "https://finalfantasy-jun-site.com/ff7_remake/field/images/" + id + ".png";
    link.href = "https://finalfantasy-jun-site.com/ff7_remake/field/" + id + ".html";
    link.textContent = label + "の地図ページを開く";
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
