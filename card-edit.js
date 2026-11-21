/* カードの追加・修正・削除・並べ替え。data/route.js はそのままに、差分だけを保存する。 */
(function () {
  if (!globalThis.GuideApp || !globalThis.GuideProgress) return;
  const KEY = GAME.storage.cardEdits;
  const MODE_KEY = GAME.storage.cardEditMode;
  if (!KEY || !MODE_KEY) return;

  const style = document.createElement("style");
  style.textContent = [
    "#card-edit-bar{position:fixed;z-index:250;left:0;right:0;bottom:0;box-sizing:border-box;display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:8px 10px;background:#14324a;color:#fff}",
    "#card-edit-bar[hidden]{display:none}",
    "#card-edit-bar button{box-sizing:border-box;min-height:40px;padding:6px 10px;border:1px solid #8fb6cc;border-radius:6px;background:#0d2436;color:#fff;font:inherit;cursor:pointer}",
    "#card-edit-bar #card-edit-exit{flex:1 1 100%;min-height:44px;background:#f6e7c1;color:#10202c;border-color:#f6e7c1;font-weight:700}",
    "body.is-card-edit{padding-bottom:128px}",
    ".card-edit-tools,.card-edit-chapter{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}",
    ".card-edit-tools button,.card-edit-chapter button{min-height:40px;padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg3);color:var(--fg);font:inherit;cursor:pointer}",
    ".card-edit-tools button[data-card-delete]{color:var(--red)}",
    ".card-drag-handle{flex:0 0 auto;touch-action:none;cursor:grab;width:44px;height:44px;padding:0;border:1px solid var(--line);border-radius:8px;background:var(--bg3);color:var(--fg);font:700 18px/1 sans-serif}",
    ".card-drag-handle:active,body.is-card-dragging .card-drag-handle{cursor:grabbing}",
    "body.is-card-dragging{user-select:none;cursor:grabbing}",
    "article.it.is-dragging{opacity:.4}",
    "section.ch.is-chapter-drop{box-shadow:inset 0 0 0 3px #39c9ff}",
    "#card-drop-line{position:fixed;z-index:260;height:6px;margin-top:-3px;border-radius:3px;background:#39c9ff;box-shadow:0 0 0 1px #10202c;pointer-events:none}",
    "#card-drop-label{position:fixed;z-index:262;padding:2px 8px;border-radius:999px;background:#39c9ff;color:#10202c;font:700 12px/1.4 sans-serif;pointer-events:none}",
    "#card-drag-ghost{position:fixed;z-index:261;max-width:min(280px,70vw);padding:8px 12px;border-radius:8px;background:#14324a;color:#fff;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.35);pointer-events:none}",
    "#card-edit-dialog{position:fixed;z-index:270;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:12px;background:rgba(2,10,18,.55);box-sizing:border-box}",
    "#card-edit-dialog[hidden]{display:none}",
    "#card-edit-dialog form{width:min(640px,100%);max-height:min(88vh,760px);overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;padding:14px;border-radius:12px 12px 0 0;background:var(--bg2);color:var(--fg)}",
    "#card-edit-fields{overflow:auto;min-height:0}",
    "#card-edit-dialog h2{margin:0 0 8px;font-size:20px}",
    "#card-edit-dialog label{display:block;margin:10px 0 4px;font-weight:700}",
    "#card-edit-dialog input,#card-edit-dialog textarea,#card-edit-dialog select{width:100%;box-sizing:border-box;min-height:44px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg);font:16px/1.45 inherit}",
    "#card-edit-dialog textarea{min-height:120px}",
    "#card-edit-dialog .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}",
    "#card-edit-dialog .row button{min-height:44px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg3);color:var(--fg);font:inherit;cursor:pointer}",
    "#item-picker[hidden]{display:none}",
    "#item-picker select,#item-picker input{width:100%;box-sizing:border-box;min-height:44px;margin-top:6px}",
    "#item-picker-results{display:flex;flex-direction:column;gap:4px;max-height:180px;overflow:auto;margin-top:6px}",
    "#item-picker-results button,#item-picker-selected button{min-height:36px;text-align:left}",
    "#card-edit-error{min-height:1.3em;margin:8px 0 0;color:var(--red);font-weight:700}",
    "#card-edit-toggle{min-height:32px;margin-left:8px;padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:transparent;color:inherit;font-size:12px;cursor:pointer}",
    "@media(max-width:640px){#card-edit-bar button{flex:1 1 calc(50% - 6px)}#card-edit-exit{flex-basis:100%}}"
  ].join("");
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "card-edit-root";
  root.innerHTML = [
    '<div id="card-edit-bar" hidden>',
    '<button type="button" id="card-edit-exit">カード編集を終了</button>',
    '<strong>カード編集</strong>',
    '<button type="button" id="card-edit-export-route">ルートJSを書き出す</button>',
    '<button type="button" id="card-edit-export-catalog">台帳JSを書き出す</button>',
    '<button type="button" id="card-edit-export-json">編集データを書き出す</button>',
    '<button type="button" id="card-edit-import">編集データを読み込む</button>',
    '<button type="button" id="card-edit-reset">編集をすべて戻す</button>',
    '<input id="card-edit-file" type="file" accept="application/json,.json" hidden>',
    '</div>',
    '<div id="card-edit-dialog" hidden role="dialog" aria-modal="true" aria-labelledby="card-edit-title">',
    '<form id="card-edit-form">',
    '<h2 id="card-edit-title">カード</h2>',
    '<p id="card-edit-id"></p>',
    '<div id="card-edit-fields"></div>',
    '<p id="card-edit-error" role="alert"></p>',
    '<div class="row"><button type="submit">保存</button><button type="button" id="card-edit-cancel">キャンセル</button></div>',
    '</form></div>'
  ].join("");
  document.body.appendChild(root);

  const bar = document.getElementById("card-edit-bar");
  const dialog = document.getElementById("card-edit-dialog");
  const form = document.getElementById("card-edit-form");
  const fields = document.getElementById("card-edit-fields");
  const error = document.getElementById("card-edit-error");
  let editing = null;
  let drag = null;
  let suppressClick = false;

  function book() {
    return GuideApp.getBook();
  }

  function usedIds() {
    const ids = new Set(Object.keys(book().custom));
    Object.keys(book().deleted).forEach(id => ids.add(id));
    for (const trackId of Object.keys(GAME.chapters)) {
      for (const chapter of GAME.chapters[trackId] || []) {
        GuideApp.baseItems(trackId, chapter.id).forEach(item => ids.add(item.id));
      }
    }
    for (const hub of GAME.hubs) {
      if (hub.kind === "catalog") GuideApp.baseCatalogItems(hub.catalog).forEach(item => ids.add(item.id));
    }
    return ids;
  }

  function download(name, text, type) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([text], { type: type || "text/plain" }));
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  function paintToggle() {
    const button = document.getElementById("card-edit-toggle");
    const on = document.body.classList.contains("is-card-edit");
    if (!button) return;
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.textContent = on ? "カード編集：オン" : "カード編集：オフ";
  }

  function setOn(on) {
    document.body.classList.toggle("is-card-edit", !!on);
    bar.hidden = !on;
    try { localStorage.setItem(MODE_KEY, on ? "1" : "0"); } catch (e) {}
    if (!on) {
      dialog.hidden = true;
      try {
        const url = new URL(location.href);
        url.searchParams.delete("cards");
        history.replaceState(history.state, "", url.pathname + url.search + url.hash);
      } catch (e) {}
    }
    paintToggle();
    if (globalThis.GuideApp) GuideApp.setCardBook(book());
  }

  function locate(id) {
    for (const track of GAME.tracks) {
      for (const chapter of GAME.chapters[track.id] || []) {
        if (GuideApp.currentIds(track.id, chapter.id).indexOf(id) >= 0) {
          return { kind: "route", trackId: track.id, chapterId: chapter.id };
        }
      }
    }
    for (const hub of GAME.hubs) {
      if (hub.kind !== "catalog") continue;
      if (GuideApp.currentCatalogIds(hub.catalog).indexOf(id) >= 0) return { kind: "catalog", catalogId: hub.catalog };
    }
    return null;
  }

  function field(label, html) {
    return "<label>" + label + "</label>" + html;
  }

  function openRouteForm(seed) {
    editing = seed;
    error.textContent = "";
    document.getElementById("card-edit-title").textContent = seed.id ? "カードを直す" : "カードを追加";
    document.getElementById("card-edit-id").textContent = seed.id ? "ID: " + seed.id : "IDは保存時に付きます。あとから変わりません。";
    const flags = GAME.flags.map(flag => `<option value="${flag.id}"${flag.id === seed.flag ? " selected" : ""}>${flag.label}</option>`).join("");
    const trophies = ['<option value="">選ばない</option>'].concat(GuideApp.trophyChoices().map(item => `<option value="${item.id}"${item.id === seed.trophy ? " selected" : ""}>${item.name}</option>`)).join("");
    const maps = ['<option value="">地図なし</option>'].concat((GAME.maps || []).map(map => `<option value="${map.id}"${map.id === seed.map ? " selected" : ""}>${map.label}</option>`)).join("");
    editing.links = (seed.items || []).map(link => ({ id: link.id, qty: link.qty || 1 }));
    fields.innerHTML = [
      field("見出し", `<input name="title" required value="${escapeAttr(seed.title || "")}">`),
      field("本文", `<textarea name="detail" required>${escapeText(seed.detail || "")}</textarea>`),
      field("タグ", `<select name="flag">${flags}</select>`),
      field("期限", `<input name="deadline" value="${escapeAttr(seed.deadline || "")}" placeholder="期限・取り逃しのとき">`),
      field("出典", `<input name="source" value="${escapeAttr(seed.source || "")}" placeholder="https://">`),
      field("トロフィー", `<select name="trophy">${trophies}</select>`),
      field("地図", `<select name="map">${maps}</select>`),
      '<div id="item-picker"></div>'
    ].join("");
    paintItemPicker();
    form.elements.flag.addEventListener("change", paintItemPicker);
    dialog.hidden = false;
    form.elements.title.focus();
  }

  function paintItemPicker() {
    const host = document.getElementById("item-picker");
    if (!host || !form.elements.flag) return;
    if (form.elements.flag.value !== "item") {
      host.hidden = true;
      host.innerHTML = "";
      return;
    }
    host.hidden = false;
    const choices = GuideApp.itemChoices();
    const hubs = [];
    choices.forEach(item => {
      if (!hubs.some(hub => hub.id === item.hubId)) hubs.push({ id: item.hubId, label: item.hubLabel });
    });
    const selected = (editing.links || []).map(link => {
      const found = choices.find(item => item.id === link.id);
      return `<li><span>${escapeText((found ? found.name : link.id) + " ×" + link.qty)}</span> <button type="button" data-link-remove="${escapeAttr(link.id)}">外す</button></li>`;
    }).join("");
    host.innerHTML = [
      "<p>入手するアイテムを台帳から選び、個数を付ける。</p>",
      `<select id="item-picker-hub">${hubs.map(hub => `<option value="${escapeAttr(hub.id)}">${escapeText(hub.label)}</option>`).join("")}</select>`,
      '<input id="item-picker-q" type="search" placeholder="名前で探す" autocomplete="off">',
      '<label>個数 <input id="item-picker-qty" type="number" min="1" max="99" value="1"></label>',
      '<div id="item-picker-results"></div>',
      `<ul id="item-picker-selected">${selected}</ul>`
    ].join("");
    refreshItemResults();
  }

  function refreshItemResults() {
    const host = document.getElementById("item-picker-results");
    const hub = document.getElementById("item-picker-hub");
    const query = document.getElementById("item-picker-q");
    if (!host || !hub || !query) return;
    const needle = query.value.trim().toLowerCase();
    const rows = GuideApp.itemChoices().filter(item => item.hubId === hub.value && (!needle || (item.name + item.area).toLowerCase().includes(needle))).slice(0, 12);
    host.innerHTML = rows.map(item => `<button type="button" data-link-add="${escapeAttr(item.id)}">${escapeText(item.name)}${item.area ? "（" + escapeText(item.area) + "）" : ""}</button>`).join("") || "<p>一致する項目がありません。</p>";
  }

  function openCatalogForm(seed) {
    editing = seed;
    error.textContent = "";
    document.getElementById("card-edit-title").textContent = seed.id ? "台帳を直す" : "台帳に追加";
    document.getElementById("card-edit-id").textContent = seed.id ? "ID: " + seed.id : "IDは保存時に付きます。";
    fields.innerHTML = [
      field("名前", `<input name="name" required value="${escapeAttr(seed.name || "")}">`),
      field("説明", `<textarea name="detail" required>${escapeText(seed.detail || "")}</textarea>`),
      field("場所・種別", `<input name="area" value="${escapeAttr(seed.area || "")}">`),
      field("出典", `<input name="source" value="${escapeAttr(seed.source || "")}" placeholder="https://">`),
      `<label><input type="checkbox" name="missable"${seed.missable ? " checked" : ""}> 取り逃し</label>`
    ].join("");
    dialog.hidden = false;
    form.elements.name.focus();
  }

  function escapeAttr(value) {
    return String(value).replace(/[&"]/g, ch => ch === "&" ? "&amp;" : "&quot;");
  }
  function escapeText(value) {
    return String(value).replace(/[&<>]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[ch]));
  }

  function currentRoute(seed) {
    const trackId = seed.trackId;
    const chapterId = seed.chapterId;
    return {
      ids: GuideApp.currentIds(trackId, chapterId),
      baseIds: GuideApp.baseItems(trackId, chapterId).map(item => item.id)
    };
  }

  function saveRoute(event) {
    const data = new FormData(form);
    const flagIds = GAME.flags.map(flag => flag.id);
    const checked = GuideProgress.validateRouteFields({
      title: data.get("title"),
      detail: data.get("detail"),
      flag: data.get("flag"),
      deadline: data.get("deadline"),
      source: data.get("source"),
      trophy: data.get("trophy"),
      map: data.get("map"),
      items: editing.links || []
    }, flagIds, GuideApp.trophyChoices().map(item => item.id));
    if (checked.error) {
      error.textContent = checked.error;
      return;
    }
    const place = currentRoute(editing);
    const id = editing.id || GuideProgress.createCardId(usedIds());
    const order = place.ids.indexOf(id) >= 0 ? place.ids : place.ids.concat(id);
    const base = editing.id ? GuideApp.findBaseRoute(editing.id) : null;
    const next = GuideProgress.upsertRouteCard(
      book(),
      base && base.item,
      id,
      checked.value,
      editing.trackId,
      editing.chapterId,
      order,
      place.baseIds
    );
    dialog.hidden = true;
    GuideApp.setCardBook(next);
  }

  function saveCatalog() {
    const data = new FormData(form);
    const checked = GuideProgress.validateCatalogFields({
      name: data.get("name"),
      detail: data.get("detail"),
      area: data.get("area"),
      source: data.get("source"),
      missable: data.get("missable") === "on"
    });
    if (checked.error) {
      error.textContent = checked.error;
      return;
    }
    const ids = GuideApp.currentCatalogIds(editing.catalogId);
    const id = editing.id || GuideProgress.createCardId(usedIds());
    const order = ids.indexOf(id) >= 0 ? ids : ids.concat(id);
    const base = editing.id ? GuideApp.findBaseCatalog(editing.id) : null;
    const next = GuideProgress.upsertCatalogCard(
      book(),
      base && base.catalogId === editing.catalogId ? base.item : null,
      id,
      checked.value,
      editing.catalogId,
      order,
      GuideApp.baseCatalogItems(editing.catalogId).map(item => item.id)
    );
    dialog.hidden = true;
    GuideApp.setCardBook(next);
  }

  function shift(id, delta) {
    const place = locate(id);
    if (!place) return;
    if (place.kind === "catalog") {
      const ids = GuideApp.currentCatalogIds(place.catalogId);
      const index = ids.indexOf(id);
      const nextIndex = index + delta;
      if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
      ids.splice(index, 1);
      ids.splice(nextIndex, 0, id);
      GuideApp.setCardBook(GuideProgress.saveOrder(
        book(),
        "catalog:" + place.catalogId,
        ids,
        GuideApp.baseCatalogItems(place.catalogId).map(item => item.id)
      ));
      return;
    }
    const ids = GuideApp.currentIds(place.trackId, place.chapterId);
    const index = ids.indexOf(id);
    const nextIndex = index + delta;
    if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
    ids.splice(index, 1);
    ids.splice(nextIndex, 0, id);
    GuideApp.setCardBook(GuideProgress.saveOrder(
      book(),
      place.trackId + ":" + place.chapterId,
      ids,
      GuideApp.baseItems(place.trackId, place.chapterId).map(item => item.id)
    ));
  }

  function moveRoute(id, trackId, chapterId) {
    const from = locate(id);
    if (!from || from.kind !== "route") return;
    if (from.trackId === trackId && from.chapterId === chapterId) return;
    const fromIds = GuideApp.currentIds(from.trackId, from.chapterId).filter(item => item !== id);
    const toIds = GuideApp.currentIds(trackId, chapterId).concat(id);
    let next = GuideProgress.saveOrder(
      book(),
      from.trackId + ":" + from.chapterId,
      fromIds,
      GuideApp.baseItems(from.trackId, from.chapterId).map(item => item.id)
    );
    next = GuideProgress.saveOrder(
      next,
      trackId + ":" + chapterId,
      toIds,
      GuideApp.baseItems(trackId, chapterId).map(item => item.id)
    );
    if (next.custom[id] && next.custom[id].kind === "route") {
      next.custom[id].trackId = trackId;
      next.custom[id].chapterId = chapterId;
    }
    GuideApp.setCardBook(next);
  }

  function askMove(id) {
    const place = locate(id);
    if (!place || place.kind !== "route") {
      window.alert("台帳の項目は、同じ一覧の中で上下に動かせます。");
      return;
    }
    const trackOptions = GAME.tracks.map(track => `<option value="${track.id}"${track.id === place.trackId ? " selected" : ""}>${track.label}</option>`).join("");
    editing = { move: true, id, trackId: place.trackId, chapterId: place.chapterId };
    document.getElementById("card-edit-title").textContent = "カードを移動";
    document.getElementById("card-edit-id").textContent = "移動先の末尾に置きます。あとから上へ下へで順番を変えられます。";
    fields.innerHTML = [
      field("進行", `<select name="track">${trackOptions}</select>`),
      field("章", `<select name="chapter"></select>`)
    ].join("");
    const track = form.elements.track;
    const chapter = form.elements.chapter;
    const fill = () => {
      chapter.innerHTML = (GAME.chapters[track.value] || []).map(item => `<option value="${item.id}"${item.id === place.chapterId && track.value === place.trackId ? " selected" : ""}>${item.title}</option>`).join("");
    };
    track.addEventListener("change", fill);
    fill();
    error.textContent = "";
    dialog.hidden = false;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (editing && editing.move) {
      moveRoute(editing.id, form.elements.track.value, form.elements.chapter.value);
      dialog.hidden = true;
      return;
    }
    if (editing && editing.kind === "catalog") saveCatalog();
    else saveRoute();
  });
  document.getElementById("card-edit-cancel").addEventListener("click", () => { dialog.hidden = true; });
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.hidden = true; });

  document.addEventListener("click", event => {
    if (!document.body.classList.contains("is-card-edit")) return;
    const add = event.target.closest("[data-card-add]");
    if (add) {
      openRouteForm({
        kind: "route",
        trackId: add.getAttribute("data-card-track"),
        chapterId: add.getAttribute("data-card-chapter"),
        flag: "story",
        title: "",
        detail: "",
        deadline: "",
        source: "",
        trophy: ""
      });
      return;
    }
    const catalogAdd = event.target.closest("[data-catalog-add]");
    if (catalogAdd) {
      openCatalogForm({ kind: "catalog", catalogId: catalogAdd.getAttribute("data-catalog-add"), name: "", detail: "", area: "", source: "", missable: false });
      return;
    }
    const up = event.target.closest("[data-card-up]");
    if (up) { shift(up.getAttribute("data-card-up"), -1); return; }
    const down = event.target.closest("[data-card-down]");
    if (down) { shift(down.getAttribute("data-card-down"), 1); return; }
    const move = event.target.closest("[data-card-move]");
    if (move) { askMove(move.getAttribute("data-card-move")); return; }
    const edit = event.target.closest("[data-card-edit]");
    if (edit) {
      const id = edit.getAttribute("data-card-edit");
      const place = locate(id);
      if (!place) return;
      if (place.kind === "catalog") {
        const item = GuideApp.currentCatalogIds(place.catalogId).includes(id)
          ? catalogRecord(place.catalogId, id)
          : null;
        if (!item) return;
        openCatalogForm(Object.assign({ kind: "catalog", catalogId: place.catalogId, id }, item));
        return;
      }
      const item = routeRecord(place.trackId, place.chapterId, id);
      if (!item) return;
      openRouteForm(Object.assign({ kind: "route", id, trackId: place.trackId, chapterId: place.chapterId }, item));
      return;
    }
    const remove = event.target.closest("[data-card-delete]");
    if (remove) {
      const id = remove.getAttribute("data-card-delete");
      if (!window.confirm("このカードを削除します。チェックも外れます。元の原稿に戻すには「編集をすべて戻す」を使います。")) return;
      GuideApp.dropCard(id);
    }
  });

  function routeRecord(trackId, chapterId, id) {
    const chapter = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || []).find(row => row.chapterId === chapterId);
    return chapter && (chapter.items || []).find(item => item.id === id);
  }
  function catalogRecord(catalogId, id) {
    const hub = GAME.hubs.find(item => item.catalog === catalogId);
    if (!hub) return null;
    return GuideProgress.mergeCatalog(CATALOGS[catalogId], book(), catalogId).find(item => item.id === id);
  }

  function clearDragVisuals() {
    document.body.classList.remove("is-card-dragging");
    document.querySelectorAll("article.it.is-dragging, section.ch.is-chapter-drop").forEach(node => {
      node.classList.remove("is-dragging", "is-chapter-drop");
    });
    const line = document.getElementById("card-drop-line");
    if (line) line.remove();
    const label = document.getElementById("card-drop-label");
    if (label) label.remove();
    const ghost = document.getElementById("card-drag-ghost");
    if (ghost) ghost.remove();
  }

  function placeGhost(x, y) {
    const ghost = document.getElementById("card-drag-ghost");
    if (!ghost) return;
    ghost.style.left = Math.max(8, Math.min(x + 14, window.innerWidth - 48)) + "px";
    ghost.style.top = Math.max(8, Math.min(y + 14, window.innerHeight - 48)) + "px";
  }

  function paintDrop(target) {
    document.querySelectorAll("section.ch.is-chapter-drop").forEach(node => node.classList.remove("is-chapter-drop"));
    let line = document.getElementById("card-drop-line");
    let label = document.getElementById("card-drop-label");
    if (!target) {
      if (line) line.remove();
      if (label) label.remove();
      return;
    }
    const anchor = target.type === "chapter"
      ? (target.element.querySelector(".chh") || target.element)
      : target.element;
    if (target.type === "chapter") target.element.classList.add("is-chapter-drop");
    const rect = anchor.getBoundingClientRect();
    const top = target.type === "chapter" || target.after ? rect.bottom : rect.top;
    if (!line) {
      line = document.createElement("div");
      line.id = "card-drop-line";
      document.body.appendChild(line);
    }
    if (!label) {
      label = document.createElement("div");
      label.id = "card-drop-label";
      document.body.appendChild(label);
    }
    line.style.top = top + "px";
    line.style.left = rect.left + "px";
    line.style.width = rect.width + "px";
    label.textContent = target.type === "chapter" ? "この章の末尾へ" : "ここに置く";
    label.style.left = (rect.left + 12) + "px";
    label.style.top = Math.max(8, top - 22) + "px";
  }

  function dropTarget(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el || !drag) return null;
    const from = locate(drag.id);
    if (!from) return null;
    const card = el.closest("article.it[data-id]");
    if (card && card.getAttribute("data-id") === drag.id) return null;
    if (card) {
      const to = locate(card.getAttribute("data-id"));
      const sameList = to && from.kind === to.kind && (from.kind === "catalog" ? from.catalogId === to.catalogId : true);
      if (sameList) {
        const rect = card.getBoundingClientRect();
        return { type: "card", id: card.getAttribute("data-id"), after: y >= rect.top + rect.height / 2, element: card };
      }
    }
    if (from.kind !== "route") return null;
    const chapter = el.closest("section.ch[data-chapter]");
    if (!chapter) return null;
    const track = chapter.querySelector("[data-card-track]");
    if (!track) return null;
    return {
      type: "chapter",
      chapterId: chapter.getAttribute("data-chapter"),
      trackId: track.getAttribute("data-card-track"),
      element: chapter
    };
  }

  function revealCard(trackId, chapterId, id) {
    const section = document.getElementById("chapter-" + trackId + "-" + chapterId);
    if (section && section.classList.contains("closed")) {
      const button = section.querySelector("[data-toggle-chapter]");
      if (button) button.click();
    }
    const placed = document.querySelector('article.it[data-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (placed) placed.scrollIntoView({ block: "nearest" });
  }

  function commitRoute(id, from, trackId, chapterId, beforeId, after) {
    const same = from.trackId === trackId && from.chapterId === chapterId;
    const destIds = GuideProgress.orderWithMove(GuideApp.currentIds(trackId, chapterId), id, beforeId, after);
    let next = book();
    if (!same) {
      const fromIds = GuideApp.currentIds(from.trackId, from.chapterId).filter(item => item !== id);
      next = GuideProgress.saveOrder(
        next,
        from.trackId + ":" + from.chapterId,
        fromIds,
        GuideApp.baseItems(from.trackId, from.chapterId).map(item => item.id)
      );
      if (next.custom[id] && next.custom[id].kind === "route") {
        next.custom[id].trackId = trackId;
        next.custom[id].chapterId = chapterId;
      }
    }
    next = GuideProgress.saveOrder(
      next,
      trackId + ":" + chapterId,
      destIds,
      GuideApp.baseItems(trackId, chapterId).map(item => item.id)
    );
    GuideApp.setCardBook(next);
    revealCard(trackId, chapterId, id);
  }

  function commitDrag(current) {
    const target = current && current.target;
    if (!target) return;
    const id = current.id;
    const from = locate(id);
    if (!from) return;
    if (target.type === "card") {
      const to = locate(target.id);
      if (!to || from.kind !== to.kind) return;
      if (from.kind === "catalog") {
        if (from.catalogId !== to.catalogId) return;
        const ids = GuideProgress.orderWithMove(GuideApp.currentCatalogIds(from.catalogId), id, target.id, target.after);
        GuideApp.setCardBook(GuideProgress.saveOrder(
          book(),
          "catalog:" + from.catalogId,
          ids,
          GuideApp.baseCatalogItems(from.catalogId).map(item => item.id)
        ));
        return;
      }
      commitRoute(id, from, to.trackId, to.chapterId, target.id, target.after);
      return;
    }
    if (from.kind !== "route" || !target.trackId || !target.chapterId) return;
    commitRoute(id, from, target.trackId, target.chapterId, null, false);
  }

  function endDrag(commit) {
    const current = drag;
    drag = null;
    if (current && commit && current.moved) commitDrag(current);
    clearDragVisuals();
    if (current && current.moved) suppressClick = true;
  }

  document.addEventListener("pointerdown", event => {
    const handle = event.target.closest && event.target.closest("[data-card-drag]");
    if (!handle || !document.body.classList.contains("is-card-edit") || dialog.hidden === false) return;
    if (event.button != null && event.button !== 0) return;
    const card = handle.closest("article.it[data-id]");
    if (!card) return;
    event.preventDefault();
    try { if (handle.setPointerCapture) handle.setPointerCapture(event.pointerId); } catch (error) {}
    drag = {
      id: card.getAttribute("data-id"),
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      target: null,
      frame: 0
    };
    document.body.classList.add("is-card-dragging");
    card.classList.add("is-dragging");
    const ghost = document.createElement("div");
    ghost.id = "card-drag-ghost";
    const title = card.querySelector(".it-title");
    ghost.textContent = title ? title.textContent : drag.id;
    document.body.appendChild(ghost);
    placeGhost(event.clientX, event.clientY);
    const tick = () => {
      if (!drag || drag.pointerId !== event.pointerId) return;
      const edge = 72;
      let dy = 0;
      if (drag.y < edge) dy = -18;
      else if (drag.y > window.innerHeight - edge) dy = 18;
      if (dy) {
        window.scrollBy(0, dy);
        drag.target = dropTarget(drag.x, drag.y);
        paintDrop(drag.target);
      }
      drag.frame = requestAnimationFrame(tick);
    };
    drag.frame = requestAnimationFrame(tick);
  });

  document.addEventListener("pointermove", event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    event.preventDefault();
    drag.x = event.clientX;
    drag.y = event.clientY;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 8) drag.moved = true;
    placeGhost(event.clientX, event.clientY);
    drag.target = dropTarget(event.clientX, event.clientY);
    paintDrop(drag.target);
  }, { passive: false });

  document.addEventListener("pointerup", event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    endDrag(true);
  });
  document.addEventListener("pointercancel", event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    endDrag(false);
  });
  document.addEventListener("click", event => {
    if (!suppressClick) return;
    suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  dialog.addEventListener("input", event => {
    if (event.target && (event.target.id === "item-picker-q" || event.target.id === "item-picker-hub")) refreshItemResults();
  });
  dialog.addEventListener("click", event => {
    const add = event.target.closest && event.target.closest("[data-link-add]");
    if (add && editing) {
      const qty = Math.max(1, Math.min(99, Number((document.getElementById("item-picker-qty") || {}).value) || 1));
      const id = add.getAttribute("data-link-add");
      editing.links = (editing.links || []).filter(link => link.id !== id).concat({ id, qty });
      paintItemPicker();
      return;
    }
    const remove = event.target.closest && event.target.closest("[data-link-remove]");
    if (remove && editing) {
      editing.links = (editing.links || []).filter(link => link.id !== remove.getAttribute("data-link-remove"));
      paintItemPicker();
    }
  });

  document.getElementById("card-edit-exit").addEventListener("click", () => setOn(false));
  document.getElementById("card-edit-export-route").addEventListener("click", () => {
    const route = GuideProgress.mergedRoute(ROUTE, GAME.chapters, book());
    download("data-route.js", GuideProgress.routeModuleSource(route), "text/javascript");
  });
  document.getElementById("card-edit-export-catalog").addEventListener("click", () => {
    const catalogs = {};
    for (const hub of GAME.hubs) {
      if (hub.kind !== "catalog") continue;
      const base = CATALOGS[hub.catalog] || {};
      catalogs[hub.catalog] = Object.assign({}, base, {
        items: GuideProgress.mergeCatalog(base, book(), hub.catalog).map(item => {
          const copy = Object.assign({}, item);
          delete copy.custom;
          return copy;
        })
      });
    }
    download("data-catalogs.js", GuideProgress.catalogsModuleSource(catalogs), "text/javascript");
  });
  document.getElementById("card-edit-export-json").addEventListener("click", () => {
    download("ff7r-card-edits.json", JSON.stringify({ app: GuideProgress.APP, cards: book() }, null, 2), "application/json");
  });
  document.getElementById("card-edit-import").addEventListener("click", () => document.getElementById("card-edit-file").click());
  document.getElementById("card-edit-file").addEventListener("change", async event => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    try {
      const bundle = GuideProgress.acceptBundle(JSON.parse(await file.text()));
      if (!bundle || !bundle.cards) throw new Error("no cards");
      GuideApp.setCardBook(bundle.cards);
    } catch (e) {
      window.alert("カードの編集データとして読めませんでした。");
    }
  });
  document.getElementById("card-edit-reset").addEventListener("click", () => {
    if (!window.confirm("このブラウザのカード編集をすべて消し、原稿の並びに戻します。チェックした進行は残ります。")) return;
    GuideApp.setCardBook(GuideProgress.emptyCardBook());
  });

  const footer = document.querySelector("footer");
  if (footer && !document.getElementById("card-edit-toggle")) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = "card-edit-toggle";
    toggle.addEventListener("click", () => setOn(!document.body.classList.contains("is-card-edit")));
    footer.appendChild(toggle);
  }
  let start = false;
  try { start = localStorage.getItem(MODE_KEY) === "1"; } catch (e) {}
  try { if (new URL(location.href).searchParams.get("cards") === "1") start = true; } catch (e) {}
  paintToggle();
  if (start) setOn(true);
})();
