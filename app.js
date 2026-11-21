(function () {
  const storage = GAME.storage;
  const bandFlags = new Set(GAME.flags.filter(flag => flag.band).map(flag => flag.id));
  const flagById = Object.fromEntries(GAME.flags.map(flag => [flag.id, flag]));

  const ui = {
    trackId: "main",
    flag: "all",
    query: "",
    catalogQuery: Object.create(null),
    collapsed: Object.create(null),
    hub: "route"
  };

  let state = GuideProgress.emptyState();
  try {
    state = GuideProgress.normalizeState(JSON.parse(localStorage.getItem(storage.state) || "null"));
  } catch (error) {
    state = GuideProgress.emptyState();
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

  function chaptersFor(trackId) {
    const defs = GAME.chapters[trackId] || [];
    const rows = ROUTE[trackId] || [];
    const itemsByChapter = new Map(rows.map(row => [row.chapterId, row.items || []]));
    return defs.map(chapter => ({
      id: chapter.id,
      title: chapter.title,
      items: itemsByChapter.get(chapter.id) || []
    }));
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
      source: item.source
    })));
  }

  function catalogItems(catalogId) {
    const catalog = CATALOGS[catalogId];
    if (!catalog) return [];
    return (catalog.items || []).map(item => ({
      kind: "catalog",
      catalogId,
      id: item.id,
      example: item.example,
      name: item.name,
      detail: item.detail,
      area: item.area,
      source: item.source,
      missable: item.missable
    }));
  }

  function matchesQuery(item, query) {
    if (!query) return true;
    const hay = [item.title, item.name, item.detail, item.deadline, item.area, item.id, item.chapterTitle]
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

  function routeCard(item) {
    const on = checked(item.id);
    const collapsed = ui.collapsed[item.id] === true;
    return `<article class="it flag-${esc(item.flag)}${item.example ? " is-example" : ""}${on ? " done" : ""}${collapsed ? " is-collapsed" : ""}" data-id="${esc(item.id)}">
      <input type="checkbox" id="check-${esc(item.id)}" data-check="${esc(item.id)}"${on ? " checked" : ""}>
      <div class="ibody">
        <div class="ihead">
          <label for="check-${esc(item.id)}">${flagTag(item.flag)}${exampleMark(item)}<span class="it-title">${esc(item.title || item.id)}</span></label>
          <div class="imeta">
            ${item.deadline ? `<span class="deadline-badge">${esc(item.deadline)}</span>` : ""}
            <button type="button" class="route-item-toggle" data-toggle-item="${esc(item.id)}" aria-expanded="${collapsed ? "false" : "true"}">詳細</button>
          </div>
        </div>
        <div class="route-item-content"${collapsed ? " hidden" : ""}>
          ${item.detail ? `<div class="det">${esc(item.detail)}</div>` : ""}
          ${sourceLine(item.source)}
        </div>
      </div>
    </article>`;
  }

  function renderRoute() {
    const chapters = chaptersFor(ui.trackId);
    const filtering = ui.flag !== "all" || !!ui.query;
    let visible = 0;
    let total = 0;
    const host = document.getElementById("route");
    host.innerHTML = chapters.map(chapter => {
      total += chapter.items.length;
      const items = chapter.items.filter(itemVisible);
      visible += items.length;
      const done = chapter.items.filter(item => checked(item.id)).length;
      const closed = ui.collapsed[chapterKey(chapter.id)] === true;
      const hide = filtering && items.length === 0;
      return `<section class="ch${closed ? " closed" : ""}${hide ? " hide" : ""}" id="chapter-${esc(ui.trackId)}-${esc(chapter.id)}" data-chapter="${esc(chapter.id)}">
        <h2 class="chapter-heading"><button type="button" class="chh" data-toggle-chapter="${esc(chapter.id)}" aria-expanded="${closed ? "false" : "true"}">
          <span class="caret" aria-hidden="true">▼</span>
          <span class="cht">${esc(chapter.title)}</span>
          <span class="chl"><span class="cnt${chapter.items.length && done === chapter.items.length ? " done" : ""}">${done}/${chapter.items.length}</span></span>
        </button></h2>
        <div class="chb">${items.length ? items.map(routeCard).join("") : '<p class="empty-chapter">項目はまだありません。</p>'}</div>
      </section>`;
    }).join("");
    document.getElementById("route-count").textContent = visible + " / " + total + " 件を表示";
    const jump = document.getElementById("chapter-jump");
    const previous = jump.value;
    jump.innerHTML = '<option value="">章を選ぶ</option>' + chapters
      .map(chapter => `<option value="${esc(chapter.id)}">${esc(chapter.title)}</option>`)
      .join("");
    if ([...jump.options].some(option => option.value === previous)) jump.value = previous;
    const anyOpen = chapters.some(chapter => ui.collapsed[chapterKey(chapter.id)] !== true);
    const expand = document.getElementById("expand");
    expand.textContent = anyOpen ? "すべて折りたたむ" : "すべて開く";
    expand.setAttribute("aria-expanded", anyOpen ? "true" : "false");
    renderDash();
  }

  function renderCatalog(hub) {
    const catalog = CATALOGS[hub.catalog] || { title: hub.label, items: [] };
    const host = document.getElementById("list-" + hub.id);
    const count = document.getElementById("count-" + hub.id);
    const items = catalog.items || [];
    const query = ui.catalogQuery[hub.id] || "";
    const visible = items.filter(item => matchesQuery(item, query));
    const done = items.filter(item => checked(item.id)).length;
    if (count) count.textContent = done + " / " + items.length;
    if (!host) return;
    if (!items.length) {
      host.innerHTML = `<p class="empty-chapter">まだ項目がありません。<code>data/catalogs.js</code> の ${esc(hub.catalog)} に足してください。</p>`;
      return;
    }
    host.innerHTML = visible.map(item => {
      const on = checked(item.id);
      return `<article class="it${item.example ? " is-example" : ""}${on ? " done" : ""}" data-id="${esc(item.id)}">
        <input type="checkbox" id="check-${esc(item.id)}" data-check="${esc(item.id)}"${on ? " checked" : ""}>
        <div class="ibody">
          <div class="ihead">
            <label for="check-${esc(item.id)}">${exampleMark(item)}${item.missable ? '<span class="tag tone-missable">取り逃し</span>' : ""}<span class="it-title">${esc(item.name || item.id)}</span></label>
          </div>
          ${item.area ? `<p class="area">${esc(item.area)}</p>` : ""}
          ${item.detail ? `<div class="det">${esc(item.detail)}</div>` : ""}
          ${sourceLine(item.source)}
        </div>
      </article>`;
    }).join("") || '<p class="empty-chapter">一致する項目がありません。</p>';
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
      const id = event.target.value;
      if (!id) return;
      ui.collapsed[chapterKey(id)] = false;
      renderRoute();
      const section = document.getElementById("chapter-" + ui.trackId + "-" + id);
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
    const payload = { app: GuideProgress.APP, exportedAt: new Date().toISOString(), state };
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
      const imported = GuideProgress.acceptImport(JSON.parse(await file.text()));
      if (!imported) throw new Error("rejected");
      backup();
      state = imported;
      save();
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
        const text = [item.title, item.detail, item.deadline, item.id, item.chapterTitle].join("\n");
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
  });

  document.addEventListener("change", event => {
    const box = event.target.closest("input[data-check]");
    if (!box) return;
    const id = box.getAttribute("data-check");
    if (box.checked) state.checks[id] = true;
    else delete state.checks[id];
    save();
    const card = box.closest(".it");
    if (card) card.classList.toggle("done", box.checked);
    if (ui.hub === "route" && box.checked && (ui.flag === "todo" || ui.flag === "band")) renderRoute();
    else refreshVisibleCounts();
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

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
