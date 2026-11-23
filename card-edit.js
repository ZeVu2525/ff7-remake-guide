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
    "body.is-card-edit{padding-bottom:128px}",
    ".card-edit-tools,.card-edit-chapter{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}",
    ".card-edit-tools button,.card-edit-chapter button,.subch-tools button,.chapter-tools .icon-edit{min-height:32px;padding:2px 8px;border:1px solid var(--line);border-radius:6px;background:var(--bg3);color:var(--fg);font-size:13px;line-height:1.3;cursor:pointer}",
    ".card-edit-tools button[data-card-delete]{color:var(--red)}",
    ".card-drag-handle{flex:0 0 auto;touch-action:none;cursor:grab;width:32px;height:32px;padding:0;border:1px solid var(--line);border-radius:8px;background:var(--bg3);color:var(--fg);font-size:14px;font-weight:700;line-height:1}",
    ".card-drag-handle:active,body.is-card-dragging .card-drag-handle{cursor:grabbing}",
    "body.is-card-dragging{user-select:none;cursor:grabbing}",
    "article.it.is-dragging{opacity:.4}",
    "section.ch.is-chapter-drop{box-shadow:inset 0 0 0 3px #39c9ff}",
    "#card-drop-line{position:fixed;z-index:260;height:6px;margin-top:-3px;border-radius:3px;background:#39c9ff;box-shadow:0 0 0 1px #10202c;pointer-events:none}",
    "#card-drop-line.is-nest{height:4px}",
    "#card-drop-line.is-blocked{background:#c44949}",
    "article.it.is-nest-blocked{box-shadow:inset 0 0 0 3px #c44949}",
    "#card-drop-label{position:fixed;z-index:262;padding:2px 8px;border-radius:999px;background:#39c9ff;color:#10202c;font:700 12px/1.4 sans-serif;pointer-events:none}",
    "#card-drag-ghost{position:fixed;z-index:261;max-width:min(280px,70vw);padding:8px 12px;border-radius:8px;background:#14324a;color:#fff;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.35);pointer-events:none}",
    "#card-edit-dialog{position:fixed;z-index:270;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:12px;background:rgba(2,10,18,.55);box-sizing:border-box}",
    "#card-edit-dialog[hidden]{display:none}",
    "#card-edit-dialog form{width:min(640px,100%);max-height:min(88vh,760px);overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;padding:14px;border-radius:12px 12px 0 0;background:var(--bg2);color:var(--fg)}",
    "#card-edit-fields{overflow:auto;min-height:0;overscroll-behavior:contain}",
    "#card-edit-dialog form{overscroll-behavior:contain}",
    "#card-edit-dialog h2{margin:0 0 8px;font-size:20px}",
    "#card-edit-dialog label{display:block;margin:10px 0 4px;font-weight:700}",
    "#card-edit-dialog input,#card-edit-dialog textarea,#card-edit-dialog select{width:100%;box-sizing:border-box;min-height:44px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg);font:16px/1.45 inherit}",
    "#card-edit-dialog input[type=checkbox]{width:auto;min-height:0;margin-right:8px}",
    "#card-edit-dialog textarea{min-height:120px}",
    "#card-edit-dialog .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}",
    "#card-edit-dialog .row button{min-height:44px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg3);color:var(--fg);font:inherit;cursor:pointer}",
    "#item-picker[hidden]{display:none}",
    "#item-picker select,#item-picker input{width:100%;box-sizing:border-box;min-height:44px;margin-top:6px}",
    "#item-picker-results{display:flex;flex-direction:column;gap:4px;max-height:180px;overflow:auto;margin-top:6px}",
    "#item-picker-results button,#item-picker-selected button{min-height:36px;text-align:left}",
    "#card-edit-head{display:flex;align-items:center;justify-content:space-between;gap:8px}",
    "#card-edit-close{min-width:44px;min-height:44px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg);font:700 20px/1 inherit;cursor:pointer}",
    "#map-preview{display:block;max-width:100%;max-height:180px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#fff}",
    "#map-preview[hidden]{display:none}",
    "#map-file-note{margin:6px 0;color:var(--fg3);font-size:13px}",
    "#map-size-warn{margin:6px 0;color:#8a5a00;font-weight:700}",
    "#map-clear{min-height:44px;margin-top:8px;padding:8px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg3);color:var(--fg);font:inherit;cursor:pointer}",
    "#card-edit-error{min-height:1.3em;margin:8px 0 0;color:var(--red);font-weight:700}",
    "#card-edit-toggle{min-height:32px;margin-left:8px;padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:transparent;color:inherit;font-size:12px;cursor:pointer}",
    "#card-drag-ghost .drag-count{display:inline-flex;align-items:center;justify-content:center;min-width:1.4em;margin-left:6px;padding:0 6px;border-radius:99px;background:#39c9ff;color:#04222d;font-weight:800}",
    "#block-editor{display:grid;gap:8px}",
    ".card-edit-tabs{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;gap:4px;margin:0 0 8px;padding:4px 0;background:var(--bg2)}",
    ".card-edit-tabs button{flex:1 1 auto;min-height:40px;padding:6px 8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg);font:inherit;cursor:pointer}",
    ".card-edit-tabs button.on{background:#14324a;color:#fff;border-color:#14324a}",
    ".card-tab-panel[hidden]{display:none}",
    ".place-field{position:relative}",
    ".place-suggest{position:absolute;z-index:6;left:0;right:0;top:100%;max-height:240px;overflow:auto;margin:4px 0 0;padding:4px;border:1px solid var(--line);border-radius:8px;background:var(--bg2);box-shadow:0 8px 24px rgba(0,0,0,.18)}",
    ".place-suggest[hidden]{display:none}",
    ".place-suggest button{display:flex;width:100%;min-height:36px;align-items:center;gap:8px;padding:4px 8px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}",
    ".place-suggest button.on,.place-suggest button:hover{background:color-mix(in srgb,var(--accent) 18%,transparent)}",
    ".place-suggest .place-drop{flex:1;min-width:0}",
    ".place-suggest .place-x{flex:none;width:28px;text-align:center}",
    "#card-menu{position:fixed;z-index:290;display:grid;min-width:160px;padding:6px;border:1px solid var(--line);border-radius:10px;background:var(--bg2);box-shadow:0 8px 24px rgba(0,0,0,.28)}",
    "#card-menu button{min-height:40px;padding:6px 10px;border:0;border-radius:8px;background:transparent;color:var(--fg);font:inherit;text-align:left;cursor:pointer}",
    "#card-menu button:hover,#card-menu button:focus-visible{background:color-mix(in srgb,var(--fg) 8%,transparent)}",
    ".blk-row.is-block-focus{outline:2px solid #39c9ff}",
    ".blk-row{padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg2)}",
    ".blk-tools{display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin-bottom:6px}",
    ".blk-handle{touch-action:none;cursor:grab}",
    ".blk-tools button,.blk-add button,.rt-bar button{min-height:28px;padding:1px 6px;border:1px solid var(--line);border-radius:6px;background:var(--bg3);color:inherit;font-size:12px;line-height:1.3;cursor:pointer}",
    ".rt-bar{display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin-bottom:6px}",
    ".rt-pop{position:relative;display:inline-flex}",
    ".rt-menu{position:absolute;z-index:8;top:calc(100% + 4px);left:0;display:flex;flex-direction:column;gap:2px;min-width:4.5em;padding:4px;border:1px solid var(--line);border-radius:8px;background:var(--bg2);box-shadow:0 8px 20px rgba(0,0,0,.18)}",
    ".rt-menu.above{top:auto;bottom:calc(100% + 4px)}",
    ".rt-menu[hidden]{display:none}",
    ".rt-menu button.on,.rt-bar [data-rt-menu].is-set{box-shadow:inset 0 -2px 0 var(--accent)}",
    ".rt-menu button.key{outline:2px solid var(--accent)}",
    ".rt-bar [data-rt=color]{width:22px;min-height:22px;padding:0}",
    ".rt-edit{min-height:72px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);white-space:pre-wrap}",
    ".blk-file input{max-width:100%}",
    ".blk-preview{max-width:180px;max-height:120px;margin-top:6px;background:#fff}",
    "#tag-pop{position:fixed;z-index:280;display:grid;gap:4px;min-width:180px;max-width:min(280px,80vw);padding:8px;border:1px solid var(--line);border-radius:10px;background:var(--bg2);box-shadow:0 8px 24px rgba(0,0,0,.25)}",
    "#tag-pop label{display:flex;gap:8px;align-items:center;min-height:36px;margin:0;font-weight:700}",
    "body.is-card-edit .tag-spot{cursor:pointer}",
    "@media(pointer:coarse){.card-edit-tools button,.card-edit-chapter button,.subch-tools button,.blk-tools button,.rt-bar button{min-height:40px;padding:4px 10px}.card-drag-handle{width:40px;height:40px}}",
    "@media(max-width:640px){#card-edit-bar button{flex:1 1 calc(50% - 6px)}#card-edit-info{flex:0 0 auto}}"
  ].join("");
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "card-edit-root";
  root.innerHTML = [
    '<div id="card-edit-bar" hidden>',
    '<button type="button" id="card-edit-export">書き出す</button>',
    '<button type="button" id="card-edit-import">読み込む</button>',
    '<button type="button" id="card-edit-reset">編集をすべて戻す</button>',
    '<button type="button" id="card-edit-info" aria-label="書き出しと読み込みの説明">ⓘ</button>',
    '<input id="card-edit-file" type="file" accept="application/json,.json" hidden>',
    '</div>',
    '<div id="card-edit-dialog" hidden role="dialog" aria-modal="true" aria-labelledby="card-edit-title">',
    '<form id="card-edit-form">',
    '<div id="card-edit-head"><h2 id="card-edit-title">カード</h2><button type="button" id="card-edit-close" aria-label="閉じる">×</button></div>',
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
    const button = document.getElementById("edit-toggle");
    const on = document.body.classList.contains("is-card-edit");
    if (button) {
      button.checked = on;
      button.setAttribute("aria-checked", on ? "true" : "false");
    }
    const labels = globalThis.GuideProgress && GuideProgress.labelText;
    if (!labels) return;
    const current = book();
    const named = {
      "card-edit-export": "export",
      "card-edit-import": "import",
      "card-edit-reset": "resetEdits"
    };
    Object.keys(named).forEach(id => {
      const node = document.getElementById(id);
      if (node) node.textContent = GuideProgress.labelText(current, named[id]);
    });
    paintGithub();
  }

  function githubAccount() {
    try {
      const parsed = JSON.parse(localStorage.getItem(GuideProgress.GITHUB_STORE) || "null");
      if (!parsed || typeof parsed.token !== "string" || !parsed.token || parsed.push !== true) return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function paintGithub() {
    const importButton = document.getElementById("card-edit-import");
    let box = document.getElementById("github-admin-actions");
    if (!githubAccount() || !importButton) {
      if (box) box.remove();
      return;
    }
    if (box) return;
    box = document.createElement("span");
    box.id = "github-admin-actions";
    box.innerHTML = '<button type="button" id="github-push">GitHubに書き出す</button><button type="button" id="github-pull">GitHubから読み込む</button>';
    importButton.insertAdjacentElement("afterend", box);
    document.getElementById("github-push").addEventListener("click", () => { githubPush().catch(error => window.alert(error.message || "書き出せませんでした。")); });
    document.getElementById("github-pull").addEventListener("click", () => { githubPull().catch(error => window.alert(error.message || "読み込めませんでした。")); });
  }

  function setOn(on) {
    if (!on && !dialog.hidden && formDirty()) {
      if (!window.confirm("保存していない変更があります。破棄して閉じますか。")) {
        paintToggle();
        return;
      }
    }
    document.body.classList.toggle("is-card-edit", !!on);
    if (globalThis.GuideText && GuideText.setOn) GuideText.setOn(!!on);
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
    if (globalThis.GuideApp && GuideApp.paintUndo) GuideApp.paintUndo();
    if (globalThis.GuideApp) GuideApp.setCardBook(book());
  }

  function locate(id) {
    for (const track of GAME.tracks) {
      for (const chapter of GuideProgress.mergeTrack(ROUTE, GAME.chapters[track.id] || [], book(), track.id) || []) {
        if (GuideApp.currentIds(track.id, chapter.chapterId).indexOf(id) >= 0) {
          return { kind: "route", trackId: track.id, chapterId: chapter.chapterId };
        }
      }
    }
    const catalogs = new Set();
    GAME.hubs.forEach(hub => {
      if (hub.catalog) catalogs.add(hub.catalog);
      (hub.sections || []).forEach(section => { if (section.catalog) catalogs.add(section.catalog); });
    });
    for (const catalogId of catalogs) {
      if (GuideApp.currentCatalogIds(catalogId).indexOf(id) >= 0) return { kind: "catalog", catalogId };
    }
    if (GuideApp.currentEnemyIds && GuideApp.currentEnemyIds().indexOf(id) >= 0) return { kind: "enemy" };
    return null;
  }

  function field(label, html) {
    return "<label>" + label + "</label>" + html;
  }

  function tabbedFields(tabs) {
    const bar = `<div class="card-edit-tabs" role="tablist">${tabs.map(tab => `<button type="button" data-card-tab="${tab.id}">${tab.label}</button>`).join("")}</div>`;
    const panels = tabs.map(tab => `<div data-tab-panel="${tab.id}" hidden>${tab.body}</div>`).join("");
    return bar + panels;
  }

  const MAP_FILE_MAX = Math.round(1.2 * 1024 * 1024);
  let formBaseline = "";

  function formSnapshot() {
    const data = new FormData(form);
    const parts = [];
    for (const pair of data.entries()) {
      parts.push(pair[0] + "=" + (typeof pair[1] === "string" ? pair[1] : pair[1].name));
    }
    parts.push("links=" + JSON.stringify((editing && editing.links) || []));
    return parts.join("\n");
  }

  function captureBaseline() {
    formBaseline = formSnapshot();
  }

  function formDirty() {
    return formSnapshot() !== formBaseline;
  }

  function repoMaps() {
    return globalThis.MAP_FILES || [];
  }

  function chosenMap() {
    if (!form.elements.mapUrl) return editing && editing.map ? editing.map : "";
    return String(form.elements.mapUrl.value || "").trim();
  }

  function mapPreviewSrc(value) {
    if (!value) return "";
    const repo = repoMaps().find(item => item.id === value || item.file === value);
    if (repo) return repo.file;
    const resolved = globalThis.GuideImages ? GuideImages.resolve(value) : GuideProgress.normalizeLibraryKey(value, "maps");
    if (GuideProgress.isLibraryKey(resolved)) return resolved;
    if (/^maps\//.test(value) && !GuideProgress.isLibraryKey(value)) return value;
    if (/^chapter[0-9-]+$/.test(value)) return GuideProgress.libraryKey("maps", "jun-field-" + value + ".png");
    return GuideProgress.imageKeyFromUrl(value, "maps") || value;
  }

  async function paintMapPreview() {
    const image = document.getElementById("map-preview");
    const warn = document.getElementById("map-size-warn");
    if (!image) return;
    const value = chosenMap();
    if (!value) {
      image.hidden = true;
      image.removeAttribute("src");
      if (warn) warn.hidden = true;
      return;
    }
    image.hidden = false;
    const shown = mapPreviewSrc(value);
    if (GuideProgress.isLibraryKey(shown) && globalThis.GuideImages) {
      const url = await GuideImages.objectUrl(shown);
      image.alt = url ? "地図のプレビュー" : "地図画像が未登録";
      if (url) image.src = url;
      else image.removeAttribute("src");
    } else {
      image.alt = "地図のプレビュー";
      image.src = shown;
    }
    if (warn) warn.hidden = true;
  }

  function mapLibraryValue(current) {
    const value = String(current || "").trim();
    if (GuideProgress.isLibraryKey(value)) return value;
    const normalized = GuideProgress.normalizeLibraryKey(value, "maps");
    return GuideProgress.isLibraryKey(normalized) ? normalized : "";
  }

  function mapFields(current) {
    const value = String(current || "");
    const library = mapLibraryValue(value);
    const folder = library ? library.split("/").slice(0, -1).join("/") : "maps";
    return [
      `<input type="hidden" name="mapUrl" value="${escapeAttr(value)}">`,
      field("画像ライブラリ", `<select data-lib-folder data-picker="map" data-current="${escapeAttr(folder || "maps")}"></select><select data-img-lib data-picker="map" data-folder="${escapeAttr(folder || "maps")}" data-current="${escapeAttr(library)}"><option value="">このブラウザの地図は使わない</option></select>`),
      '<label class="map-file">画像ファイル<input id="map-file" name="mapFile" type="file" accept="image/png,image/jpeg,image/gif,image/webp"></label>',
      '<p id="map-file-note">選んだ画像は、このブラウザの画像ライブラリにファイル名で保存します。書き出しや GitHub には画像そのものは入りません。</p>',
      '<p id="map-size-warn" hidden></p>',
      '<img id="map-preview" alt="地図のプレビュー" hidden>',
      '<button type="button" id="map-clear">地図を外す</button>'
    ].join("");
  }

  function bindMapField() {
    const url = form.elements.mapUrl;
    const file = document.getElementById("map-file");
    const clear = document.getElementById("map-clear");
    const image = document.getElementById("map-preview");
    if (image) image.addEventListener("error", () => {
      image.alt = "この画像は表示できません";
    });
    if (clear) clear.addEventListener("click", () => {
      if (url) url.value = "";
      if (file) file.value = "";
      const library = form.querySelector('[data-img-lib][data-picker="map"]');
      if (library) library.value = "";
      error.textContent = "";
      paintMapPreview();
    });
    if (file) file.addEventListener("change", async () => {
      const picked = file.files && file.files[0];
      if (!picked) return;
      if (!/^image\/(png|jpeg|gif|webp)$/.test(picked.type)) {
        error.textContent = "PNG、JPEG、GIF、WebPの画像にしてください。";
        file.value = "";
        return;
      }
      if (!globalThis.GuideImages) return;
      const key = GuideProgress.libraryKey("maps", picked.name);
      await GuideImages.putFile(key, picked, picked.name, "maps");
      if (url) url.value = key;
      const library = form.querySelector('[data-img-lib][data-picker="map"]');
      if (library) {
        library.setAttribute("data-current", key);
        library.setAttribute("data-folder", "maps");
      }
      error.textContent = "";
      fillLibrarySelects(form);
      paintMapPreview();
    });
    const mapFolder = form.querySelector('[data-lib-folder][data-picker="map"]');
    if (mapFolder) mapFolder.addEventListener("change", () => {
      const imageSelect = form.querySelector('[data-img-lib][data-picker="map"]');
      if (imageSelect) imageSelect.setAttribute("data-folder", mapFolder.value);
      fillLibrarySelects(form);
    });
    const mapLibrary = form.querySelector('[data-img-lib][data-picker="map"]');
    if (mapLibrary) mapLibrary.addEventListener("change", () => {
      if (!url) return;
      url.value = mapLibrary.value;
      paintMapPreview();
    });
    fillLibrarySelects(form);
    paintMapPreview();
  }

  const RICH_COLORS = ["#1d4e89", "#c44949", "#1f7a4d", "#8a5a00", "#5b3a8c", "#222222"];

  function freshBlocks(seed) {
    const stored = GuideProgress.normalizeBlocks(seed && seed.blocks);
    if (stored.length) return stored;
    const fromDetail = GuideProgress.blocksFromDetail(seed && seed.detail);
    if (fromDetail.length) return fromDetail;
    if (!seed || !seed.id) return [{ type: "text", html: "" }];
    return [];
  }

  function setBlock(path, block) {
    const parts = String(path || "").split(".").map(Number);
    if (!editing || !editing.blocks) return;
    if (parts.length === 1) editing.blocks[parts[0]] = block;
    else if (editing.blocks[parts[0]] && editing.blocks[parts[0]].columns) editing.blocks[parts[0]].columns[parts[1]][parts[2]] = block;
  }

  function blockAt(path) {
    const parts = String(path || "").split(".").map(Number);
    const block = editing && editing.blocks && editing.blocks[parts[0]];
    if (!block) return null;
    if (parts.length === 1) return block;
    if (block.type !== "columns" || !block.columns) return null;
    const col = block.columns[parts[1]] || [];
    return col[parts[2]] || null;
  }

  function syncBlocks() {
    const root = document.getElementById("block-editor");
    if (!root || !editing || !editing.blocks) return;
    root.querySelectorAll("[data-block-path]").forEach(node => {
      const block = blockAt(node.getAttribute("data-block-path"));
      if (!block) return;
      const editor = node.querySelector(":scope > .rt-wrap .rt-edit");
      if (editor && (block.type === "text" || block.type === "callout")) block.html = editor.innerHTML;
      if (block.type === "image") readImageFields(node, block);
      if (block.type === "tiles") {
        node.querySelectorAll(":scope > [data-tile]").forEach(tile => {
          const item = block.items[Number(tile.getAttribute("data-tile"))];
          if (item) readImageFields(tile, item, true);
        });
      }
      if (block.type === "list") {
        const heading = node.querySelector("[data-list-heading]");
        const items = node.querySelector("[data-list-items]");
        const cols = node.querySelector("[data-list-cols]");
        if (heading) block.heading = heading.value;
        if (items) block.items = items.value.split(/\n/);
        if (cols) block.columns = Number(cols.value) === 1 || Number(cols.value) === 3 ? Number(cols.value) : 2;
      }
      if (block.type === "columns") {
        const count = node.querySelector(":scope > .blk-tools [data-col-count]");
        const arrow = node.querySelector(":scope > .blk-tools [data-col-arrow]");
        if (count) {
          const next = count.value === "3" ? 3 : 2;
          block.count = next;
          block.columns = block.columns || [];
          while (block.columns.length < next) block.columns.push([]);
          block.columns = block.columns.slice(0, next);
          if (next === 3) block.arrow = false;
        }
        if (arrow) block.arrow = !!arrow.checked && block.count !== 3;
      }
    });
    const hidden = document.getElementById("block-json");
    const detail = form.elements.detail;
    if (hidden) hidden.value = JSON.stringify(editing.blocks);
    if (detail) detail.value = GuideProgress.plainFromBlocks(editing.blocks);
  }

  function readImageFields(node, block, tile) {
    const input = node.querySelector("[data-img-url]");
    const repo = node.querySelector("[data-img-repo]");
    if (input && input.value.trim()) block.src = input.value.trim();
    else if (repo && repo.value) block.src = repo.value;
    else block.src = "";
    if (!tile) {
      const caption = node.querySelector("[data-img-caption]");
      const width = node.querySelector("[data-img-width]");
      const align = node.querySelector("[data-img-align]");
      if (caption) block.caption = caption.value;
      if (width) block.width = width.value;
      if (align) block.align = align.value;
    } else {
      const label = node.querySelector("[data-tile-label]");
      if (label) block.label = label.value;
    }
  }

  function imageLibrary() {
    return (globalThis.IMAGE_FILES || []).concat(globalThis.MAP_FILES || []);
  }

  function imageField(block, tile) {
    const saved = imageLibrary();
    const current = block.src || "";
    const repo = saved.find(item => item.file === current);
    const options = ['<option value="">保存済みの画像は使わない</option>'].concat(saved.map(item => `<option value="${escapeAttr(item.file)}"${repo && item.file === repo.file ? " selected" : ""}>${escapeText(item.label || item.file)}</option>`)).join("");
    const libraryCurrent = GuideProgress.isLibraryKey(GuideProgress.normalizeLibraryKey(current, "images")) ? GuideProgress.normalizeLibraryKey(current, "images") : "";
    const preview = libraryCurrent
      ? `<img class="blk-preview" alt="画像が未登録" data-lib="${escapeAttr(libraryCurrent)}">`
      : (current ? `<img class="blk-preview" alt="" src="${escapeAttr(current)}">` : "");
    return [
      `<div class="blk-file">`,
      `<select data-img-repo>${options}</select>`,
      `<select data-lib-folder data-current="images"></select>`,
      `<select data-img-lib data-folder="images" data-current="${escapeAttr(libraryCurrent)}"><option value="">このブラウザの画像は使わない</option></select>`,
      `<input data-img-url value="${escapeAttr(repo ? "" : current)}" placeholder="images/ または maps/ のキー">`,
      `<input data-img-file type="file" accept="image/png,image/jpeg,image/gif,image/webp">`,
      tile ? `<input data-tile-label value="${escapeAttr(block.label || "")}" placeholder="ラベル">` : [
        `<input data-img-caption value="${escapeAttr(block.caption || "")}" placeholder="説明（空でもよい）">`,
        `<select data-img-width><option value="s"${block.width === "s" ? " selected" : ""}>小</option><option value="m"${!block.width || block.width === "m" ? " selected" : ""}>中</option><option value="l"${block.width === "l" ? " selected" : ""}>大</option><option value="full"${block.width === "full" ? " selected" : ""}>幅いっぱい</option></select>`,
        `<select data-img-align><option value="left"${block.align === "left" ? " selected" : ""}>左</option><option value="center"${!block.align || block.align === "center" ? " selected" : ""}>中央</option><option value="right"${block.align === "right" ? " selected" : ""}>右</option></select>`
      ].join(""),
      preview,
      `</div>`
    ].join("");
  }

  function richMenu(kind, rows) {
    const buttons = rows.map(item => `<button type="button" data-rt="${kind}" data-rt-value="${item[0]}">${item[1]}</button>`).join("");
    const icon = kind === "size" ? "aA" : "T";
    const label = kind === "size" ? "大きさ" : "字体";
    return `<span class="rt-pop"><button type="button" data-rt-menu="${kind}" title="${label}" aria-label="${label}" aria-expanded="false">${icon}</button><span class="rt-menu" hidden>${buttons}</span></span>`;
  }

  function richBox(html) {
    const colors = RICH_COLORS.map(color => `<button type="button" data-rt="color" data-rt-value="${color}" style="background:${color}" aria-label="${color}"></button>`).join("");
    const size = richMenu("size", [["0.85em", "小"], ["1em", "中"], ["1.25em", "大"]]);
    const font = richMenu("font", [["serif", "明朝"], ["monospace", "等幅"]]);
    return `<div class="rt-wrap"><div class="rt-bar"><button type="button" data-rt="bold" title="太字"><b>B</b></button><button type="button" data-rt="italic" title="斜体"><i>I</i></button><button type="button" data-rt="underline" title="下線"><u>U</u></button><button type="button" data-rt="strike" title="打消し"><s>S</s></button><button type="button" data-rt="clear" title="書式を消す">書式を消す</button>${size}${font}<label>色 <input type="color" data-rt="color" value="#1d4e89"></label>${colors}<label>背景 <input type="color" data-rt="bg" value="#fff3bf"></label></div><div class="rt-edit" contenteditable="true">${GuideProgress.sanitizeRich(html || "")}</div></div>`;
  }

  function listField(block) {
    const columns = block.columns === 1 || block.columns === 3 ? block.columns : 2;
    return [
      '<label>見出し<input data-list-heading value="' + escapeAttr(block.heading || "") + '" placeholder="第一段階で使用するアクション"></label>',
      '<label>列数<select data-list-cols><option value="1"' + (columns === 1 ? " selected" : "") + '>1列</option><option value="2"' + (columns === 2 ? " selected" : "") + '>2列</option><option value="3"' + (columns === 3 ? " selected" : "") + '>3列</option></select></label>',
      '<label>項目（1行に1つ）<textarea data-list-items rows="6">' + escapeText((block.items || []).join("\n")) + "</textarea></label>"
    ].join("");
  }

  function addButtons(path) {
    const kinds = path ? [["text", "文章"], ["image", "画像"], ["list", "リスト"]] : [["text", "文章"], ["image", "画像"], ["list", "リスト"], ["callout", "囲み"], ["columns", "2列"], ["tiles", "小画像"]];
    return kinds.map(item => `<button type="button" data-add-block="${item[0]}" data-add-path="${escapeAttr(path)}">${item[1]}</button>`).join("");
  }

  function blockRow(block, path) {
    const top = path.indexOf(".") < 0;
    const nested = path.indexOf(".") >= 0;
    const kinds = nested
      ? [["text", "文章"], ["callout", "囲み"], ["image", "画像"], ["list", "リスト"], ["tiles", "小画像"]]
      : [["text", "文章"], ["callout", "囲み"], ["image", "画像"], ["list", "リスト"], ["columns", "2列"], ["tiles", "小画像"]];
    const typeSelect = `<select data-block-type="${escapeAttr(path)}" aria-label="種類">${kinds.map(item => `<option value="${item[0]}"${block.type === item[0] ? " selected" : ""}>${item[1]}</option>`).join("")}</select>`;
    const tools = `<div class="blk-tools">${top ? `<button type="button" class="blk-handle" data-drag-block="${escapeAttr(path)}" aria-label="並べ替え">≡</button>` : ""}${typeSelect}<button type="button" data-del-block="${escapeAttr(path)}">この部分を消す</button></div>`;
    let body = "";
    if (block.type === "text" || block.type === "callout") body = richBox(block.html);
    else if (block.type === "list") body = listField(block);
    else if (block.type === "image") body = imageField(block, false);
    else if (block.type === "tiles") {
      body = (block.items || []).map((item, index) => `<div data-tile="${index}">${imageField(item, true)}<button type="button" data-del-tile="${escapeAttr(path)}" data-tile-index="${index}">外す</button></div>`).join("") + `<p class="blk-add"><button type="button" data-add-tile="${escapeAttr(path)}">小画像を足す</button></p>`;
    } else if (block.type === "columns") {
      const count = block.count === 3 ? 3 : 2;
      body = `<div class="blk-tools"><select data-col-count><option value="2"${count === 2 ? " selected" : ""}>2列</option><option value="3"${count === 3 ? " selected" : ""}>3列</option></select>${count === 2 ? `<label><input type="checkbox" data-col-arrow${block.arrow ? " checked" : ""}> 間に矢印</label>` : ""}</div>` + (block.columns || []).slice(0, count).map((col, index) => `<div class="blk-col-edit"><p>列 ${index + 1}</p>${col.map((child, childIndex) => blockRow(child, path + "." + index + "." + childIndex)).join("")}<p class="blk-add">${addButtons(path + "." + index)}</p></div>`).join("");
    }
    return `<div class="blk-row" data-block-path="${escapeAttr(path)}">${tools}${body}</div>`;
  }

  function paintBlocks() {
    const host = document.getElementById("block-editor");
    if (!host || !editing) return;
    host.innerHTML = (editing.blocks || []).map((block, index) => blockRow(block, String(index))).join("") + `<p class="blk-add">${addButtons("")}</p>`;
    syncBlocks();
    fillLibrarySelects(host);
    if (globalThis.GuideImages) GuideImages.hydrate(host);
  }

  async function fillLibrarySelects(root) {
    if (!globalThis.GuideImages) return;
    const folders = await GuideImages.folders();
    const rows = await GuideImages.list();
    const children = {};
    folders.forEach(folder => {
      const parent = folder.parent || "";
      children[parent] = children[parent] || [];
      children[parent].push(folder);
    });
    const folderOptions = (current) => {
      const lines = [];
      const walk = (parent, depth) => {
        (children[parent] || []).forEach(folder => {
          lines.push(`<option value="${escapeAttr(folder.id)}"${folder.id === current ? " selected" : ""}>${"　".repeat(depth)}${escapeText(folder.label)}</option>`);
          walk(folder.id, depth + 1);
        });
      };
      walk("", 0);
      return lines.join("");
    };
    root.querySelectorAll("[data-lib-folder]").forEach(select => {
      if (select.dataset.ready === "1") return;
      const current = select.getAttribute("data-current") || "images";
      select.innerHTML = folderOptions(current);
      select.dataset.ready = "1";
    });
    root.querySelectorAll("[data-img-lib], [data-enemy-lib]").forEach(select => {
      const picker = select.getAttribute("data-picker");
      const paired = picker && select.parentElement ? select.parentElement.querySelector('[data-lib-folder][data-picker="' + picker + '"]') : select.previousElementSibling;
      const folder = (paired && paired.value) || select.getAttribute("data-folder") || "images";
      const current = select.getAttribute("data-current") || "";
      const mine = rows.filter(row => row.folder === folder);
      select.innerHTML = '<option value="">このブラウザの画像は使わない</option>' + mine.map(row => `<option value="${escapeAttr(row.id)}"${row.id === current ? " selected" : ""}>${escapeText(row.name)}</option>`).join("");
    });
  }

  function makeBlock(type) {
    if (type === "callout") return { type: "callout", html: "" };
    if (type === "image") return { type: "image", src: "", caption: "", width: "m", align: "center" };
    if (type === "columns") return { type: "columns", count: 2, arrow: false, columns: [[{ type: "text", html: "" }], [{ type: "text", html: "" }]] };
    if (type === "tiles") return { type: "tiles", items: [{ src: "", label: "" }] };
    if (type === "list") return { type: "list", heading: "", items: [], columns: 2 };
    return { type: "text", html: "" };
  }

  function insertBlock(type, path) {
    syncBlocks();
    const block = makeBlock(type);
    if (!path) editing.blocks.push(block);
    else {
      const parts = path.split(".").map(Number);
      const parent = editing.blocks[parts[0]];
      if (!parent || parent.type !== "columns") return;
      parent.columns[parts[1]] = parent.columns[parts[1]] || [];
      parent.columns[parts[1]].push(block);
    }
    paintBlocks();
  }

  function selectionHtml() {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return "";
    const box = document.createElement("div");
    box.appendChild(sel.getRangeAt(0).cloneContents());
    return box.innerHTML;
  }

  function applyRich(editor, kind, value) {
    if (!editor) return;
    editor.focus();
    const saved = editor._rtRange;
    if (saved) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(saved);
    }
    document.execCommand("styleWithCSS", false, true);
    if (kind === "bold") document.execCommand("bold");
    else if (kind === "italic") document.execCommand("italic");
    else if (kind === "underline") document.execCommand("underline");
    else if (kind === "strike") document.execCommand("strikeThrough");
    else if (kind === "clear") {
      document.execCommand("removeFormat");
      document.execCommand("unlink");
    } else if (kind === "color" && value) document.execCommand("foreColor", false, value);
    else if (kind === "bg" && value) document.execCommand("hiliteColor", false, value);
    else if ((kind === "size" || kind === "font") && value) {
      const html = selectionHtml();
      if (!html) return;
      const css = kind === "size" ? "font-size:" + value : (value === "serif" ? "font-family:serif" : "font-family:ui-monospace,monospace");
      document.execCommand("insertHTML", false, '<span style="' + css + '">' + html + "</span>");
    }
    syncBlocks();
    refreshRichMarks(editor);
  }

  function placeRichMenu(panel) {
    panel.classList.remove("above");
    const host = panel.closest("#card-edit-fields") || panel.closest("form");
    const limit = host ? host.getBoundingClientRect().bottom : window.innerHeight;
    if (panel.getBoundingClientRect().bottom > limit - 8) panel.classList.add("above");
  }

  function closeRichMenus(root) {
    (root || document).querySelectorAll(".rt-menu").forEach(menu => {
      menu.hidden = true;
      const button = menu.parentElement && menu.parentElement.querySelector("[data-rt-menu]");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  }

  function richStyle(editor, kind) {
    const sel = window.getSelection();
    const node = sel && sel.anchorNode;
    let el = node && (node.nodeType === 1 ? node : node.parentElement);
    if (!el || !editor || !editor.contains(el)) return "";
    while (el && el !== editor) {
      const style = el.style || {};
      if (kind === "size" && style.fontSize) return style.fontSize;
      if (kind === "font" && style.fontFamily) {
        const family = style.fontFamily.toLowerCase();
        if (family.indexOf("mono") >= 0) return "monospace";
        if (family.indexOf("serif") >= 0) return "serif";
      }
      el = el.parentElement;
    }
    return "";
  }

  function refreshRichMarks(editor) {
    const wrap = editor && editor.closest && editor.closest(".rt-wrap");
    if (!wrap) return;
    ["size", "font"].forEach(kind => {
      const current = richStyle(editor, kind);
      const button = wrap.querySelector('[data-rt-menu="' + kind + '"]');
      if (button) button.classList.toggle("is-set", !!current);
      wrap.querySelectorAll('[data-rt="' + kind + '"]').forEach(item => {
        item.classList.toggle("on", item.getAttribute("data-rt-value") === current);
      });
    });
  }

  function missingImage(blocks) {
    return (blocks || []).some(block => {
      if (!block) return false;
      if (block.type === "image") return !GuideProgress.validImageValue(block.src);
      if (block.type === "tiles") return !(block.items || []).length || block.items.some(item => !GuideProgress.validImageValue(item.src));
      if (block.type === "columns") return (block.columns || []).some(col => missingImage(col));
      return false;
    });
  }

  function paintFlags() {
    const host = document.getElementById("flag-chips");
    if (!host || !editing) return;
    const selected = new Set(editing.flags || []);
    host.innerHTML = GAME.flags.map(flag => `<button type="button" class="chip${selected.has(flag.id) ? " on" : ""}" data-flag-toggle="${flag.id}">${escapeText(flag.label)}</button>`).join("");
    if (form.elements.flag) form.elements.flag.value = (editing.flags || ["story"])[0] || "story";
    const trophy = document.getElementById("trophy-field");
    if (trophy) trophy.hidden = !selected.has("trophy");
    const deadline = document.getElementById("deadline-field");
    if (deadline) deadline.hidden = !(selected.has("deadline") || selected.has("missable"));
    const battle = document.getElementById("battle-field");
    if (battle) battle.hidden = !selected.has("battle");
    paintItemPicker();
    if (selected.has("battle")) paintBattle();
    paintTagHint();
  }

  function paintBattle() {
    const host = document.getElementById("battle-field");
    if (!host) return;
    if (!document.getElementById("enemy-pick-q")) {
      const enemyCurrent = GuideProgress.normalizeLibraryKey(editing.enemyImage || "", "enemies");
      host.innerHTML = `<p>戦闘タグのカードだけ、敵の情報を結びます。タグを外しても、選んだ敵は残ります。</p><input id="enemy-pick-q" role="combobox" aria-autocomplete="list" aria-controls="enemy-pick-results" aria-expanded="false" placeholder="敵の名前や番号" autocomplete="off" value="${escapeAttr(editing.enemyQuery || "")}"><div id="enemy-pick-results" role="listbox"></div><ul id="enemy-pick-chosen"></ul><label>メモ<textarea id="enemy-note">${escapeText(editing.enemyNote || "")}</textarea></label><label>戦闘用の画像<input id="enemy-image" value="${escapeAttr(editing.enemyImage || "")}" placeholder="enemies/ のキー、または空"></label><label>エネミーの画像<select data-lib-folder data-current="enemies"></select><select data-enemy-lib data-folder="enemies" data-current="${escapeAttr(GuideProgress.isLibraryKey(enemyCurrent) ? enemyCurrent : "")}"><option value="">このブラウザの画像は使わない</option></select></label>`;
      fillLibrarySelects(host);
      bindEnemyPick();
    }
    refreshEnemyPick();
  }

  function bindEnemyPick() {
    const query = document.getElementById("enemy-pick-q");
    if (!query || query.dataset.bound) return;
    query.dataset.bound = "1";
    const battle = document.getElementById("battle-field");
    if (battle) battle.addEventListener("change", event => {
      const target = event.target;
      if (target.hasAttribute("data-lib-folder")) {
        const imageSelect = target.parentElement.querySelector("[data-enemy-lib], [data-img-lib]");
        if (imageSelect) imageSelect.setAttribute("data-folder", target.value);
        fillLibrarySelects(battle);
      }
      if (target.hasAttribute("data-enemy-lib") && target.value) {
        const input = document.getElementById("enemy-image");
        if (input) input.value = target.value;
      }
    });
    let composing = false;
    let active = -1;
    const refresh = () => {
      if (composing) return;
      editing.enemyQuery = query.value;
      active = -1;
      refreshEnemyPick();
    };
    query.addEventListener("compositionstart", () => { composing = true; });
    query.addEventListener("compositionend", () => { composing = false; refresh(); });
    query.addEventListener("input", refresh);
    query.addEventListener("keydown", event => {
      if (composing) return;
      const options = [...document.querySelectorAll("#enemy-pick-results [data-enemy-pick]")];
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!options.length) return;
        active = event.key === "ArrowDown" ? Math.min(options.length - 1, active + 1) : Math.max(0, active - 1);
        options.forEach((button, index) => button.setAttribute("aria-selected", index === active ? "true" : "false"));
        options[active].focus();
        query.focus();
      } else if (event.key === "Enter" && active >= 0 && options[active]) {
        event.preventDefault();
        options[active].click();
      } else if (event.key === "Escape") {
        document.getElementById("enemy-pick-results").hidden = true;
        query.setAttribute("aria-expanded", "false");
      }
    });
  }

  function refreshEnemyPick() {
    const results = document.getElementById("enemy-pick-results");
    const chosen = document.getElementById("enemy-pick-chosen");
    const query = document.getElementById("enemy-pick-q");
    if (!results || !chosen) return;
    const enemies = globalThis.ENEMIES || [];
    const matches = GuideProgress.suggestMatches(enemies, query ? query.value : editing.enemyQuery, 8);
    results.hidden = !(query && query.value.trim());
    if (query) query.setAttribute("aria-expanded", results.hidden ? "false" : "true");
    results.innerHTML = matches.map(enemy => `<button type="button" role="option" data-enemy-pick="${escapeAttr(enemy.id)}">${escapeText((enemy.no ? enemy.no + " " : "") + enemy.name)}</button>`).join("") || "<p>一致する敵がいません。</p>";
    chosen.innerHTML = (editing.enemies || []).map(id => {
      const enemy = enemies.find(item => item.id === id);
      return `<li>${escapeText(enemy ? enemy.name : id)} <button type="button" data-enemy-remove="${escapeAttr(id)}">外す</button></li>`;
    }).join("");
  }

  function onBlockClick(event) {
    const flagToggle = event.target.closest("[data-flag-toggle]");
    if (flagToggle && editing) {
      const id = flagToggle.getAttribute("data-flag-toggle");
      const set = new Set(editing.flags || []);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      if (!set.size) set.add("story");
      editing.flags = [...set];
      paintFlags();
      return;
    }
    const enemyRemove = event.target.closest("[data-enemy-remove]");
    if (enemyRemove && editing) {
      editing.enemies = (editing.enemies || []).filter(id => id !== enemyRemove.getAttribute("data-enemy-remove"));
      paintBattle();
      return;
    }
    const enemyPick = event.target.closest("[data-enemy-pick]");
    if (enemyPick && editing) {
      const id = enemyPick.getAttribute("data-enemy-pick");
      editing.enemies = editing.enemies || [];
      if (editing.enemies.indexOf(id) < 0) editing.enemies.push(id);
      paintBattle();
      return;
    }
    const menuButton = event.target.closest("[data-rt-menu]");
    if (menuButton) {
      event.preventDefault();
      const panel = menuButton.parentElement.querySelector(".rt-menu");
      const willOpen = panel.hidden;
      closeRichMenus(fields);
      panel.hidden = !willOpen;
      menuButton.setAttribute("aria-expanded", willOpen ? "true" : "false");
      if (willOpen) {
        placeRichMenu(panel);
        refreshRichMarks(menuButton.closest(".rt-wrap").querySelector(".rt-edit"));
      }
      return;
    }
    const rt = event.target.closest("[data-rt]");
    if (rt && rt.tagName === "BUTTON") {
      event.preventDefault();
      applyRich(rt.closest(".rt-wrap").querySelector(".rt-edit"), rt.getAttribute("data-rt"), rt.getAttribute("data-rt-value") || "");
      closeRichMenus(fields);
      return;
    }
    const add = event.target.closest("[data-add-block]");
    if (add) { insertBlock(add.getAttribute("data-add-block"), add.getAttribute("data-add-path")); return; }
    const del = event.target.closest("[data-del-block]");
    if (del) {
      syncBlocks();
      const parts = del.getAttribute("data-del-block").split(".").map(Number);
      if (parts.length === 1) editing.blocks.splice(parts[0], 1);
      else editing.blocks[parts[0]].columns[parts[1]].splice(parts[2], 1);
      paintBlocks();
      return;
    }
    const tile = event.target.closest("[data-add-tile]");
    if (tile) {
      syncBlocks();
      blockAt(tile.getAttribute("data-add-tile")).items.push({ src: "", label: "" });
      paintBlocks();
      return;
    }
    const dropTile = event.target.closest("[data-del-tile]");
    if (dropTile) {
      syncBlocks();
      blockAt(dropTile.getAttribute("data-del-tile")).items.splice(Number(dropTile.getAttribute("data-tile-index")), 1);
      paintBlocks();
    }
  }

  function onBlockChange(event) {
    const target = event.target;
    if (!target || !target.closest || !target.closest("#block-editor")) return;
    if (target.getAttribute("data-rt") === "color" || target.getAttribute("data-rt") === "bg") {
      applyRich(target.closest(".rt-wrap").querySelector(".rt-edit"), target.getAttribute("data-rt"), target.value);
      target.value = target.tagName === "SELECT" ? "" : target.value;
      return;
    }
    if (target.hasAttribute("data-lib-folder")) {
      const imageSelect = target.parentElement.querySelector("[data-img-lib]");
      if (imageSelect) imageSelect.setAttribute("data-folder", target.value);
      fillLibrarySelects(target.parentElement);
      return;
    }
    if (target.hasAttribute("data-img-repo") || target.hasAttribute("data-img-lib")) {
      const input = target.parentElement.querySelector("[data-img-url]");
      if (target.value && input) input.value = target.value;
      syncBlocks();
      paintBlocks();
      return;
    }
    if (target.hasAttribute("data-img-file")) {
      const picked = target.files && target.files[0];
      if (!picked || !globalThis.GuideImages) return;
      if (!/^image\/(png|jpeg|gif|webp)$/.test(picked.type)) {
        error.textContent = "PNG、JPEG、GIF、WebPの画像にしてください。";
        return;
      }
      const input = target.parentElement.querySelector("[data-img-url]");
      const folderSelect = target.parentElement.querySelector("[data-lib-folder]");
      const folder = (folderSelect && folderSelect.value) || "images";
      GuideImages.putFile(GuideProgress.libraryKey(folder, picked.name), picked, picked.name, folder).then(key => {
        if (input) input.value = key;
        error.textContent = "";
        syncBlocks();
        paintBlocks();
      });
      return;
    }
    if (target.hasAttribute("data-block-type")) {
      syncBlocks();
      const path = target.getAttribute("data-block-type");
      const current = blockAt(path);
      const converted = GuideProgress.convertBlock(current, target.value);
      if (converted.loss && !window.confirm("この種類に変えると、残せる文章は残します。画像などは外れます。変えますか。")) {
        paintBlocks();
        return;
      }
      setBlock(path, converted.block);
      paintBlocks();
      return;
    }
    if (target.hasAttribute("data-col-count") || target.hasAttribute("data-col-arrow")) {
      syncBlocks();
      paintBlocks();
      return;
    }
    syncBlocks();
  }

  fields.addEventListener("click", event => {
    const tab = event.target.closest && event.target.closest("[data-card-tab]");
    if (tab) {
      syncBlocks();
      showEditorTab(tab.getAttribute("data-card-tab"));
      return;
    }
    onBlockClick(event);
  });
  fields.addEventListener("change", onBlockChange);
  fields.addEventListener("input", event => {
    if (event.isComposing || (event.target && event.target.isComposing)) return;
    if (event.target && event.target.closest && event.target.closest("#block-editor")) syncBlocks();
  });
  fields.addEventListener("focusout", event => {
    const editor = event.target.closest && event.target.closest(".rt-edit");
    if (!editor || event.target.isComposing) return;
    const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const next = GuideProgress.toHalfWidth(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
      node = walker.nextNode();
    }
    syncBlocks();
  });
  fields.addEventListener("mouseup", event => {
    const editor = event.target.closest && event.target.closest(".rt-edit");
    if (editor) refreshRichMarks(editor);
  });
  fields.addEventListener("keyup", event => {
    const editor = event.target.closest && event.target.closest(".rt-edit");
    if (editor) refreshRichMarks(editor);
  });
  fields.addEventListener("mousedown", event => {
    const tool = event.target.closest && event.target.closest(".rt-bar button, .rt-menu button");
    if (tool) {
      event.preventDefault();
      const editor = tool.closest(".rt-wrap") && tool.closest(".rt-wrap").querySelector(".rt-edit");
      const sel = window.getSelection();
      if (editor && sel && sel.rangeCount && editor.contains(sel.anchorNode)) editor._rtRange = sel.getRangeAt(0).cloneRange();
    }
    if (!event.target.closest(".rt-pop")) closeRichMenus(fields);
  });
  fields.addEventListener("keydown", event => {
    const panel = fields.querySelector(".rt-menu:not([hidden])");
    if (!panel) return;
    const wrap = panel.closest(".rt-wrap");
    if (wrap && event.target && !wrap.contains(event.target)) return;
    if (event.isComposing || event.keyCode === 229) return;
    const options = [...panel.querySelectorAll("button")];
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      let index = options.findIndex(button => button.classList.contains("key"));
      if (index < 0) index = options.findIndex(button => button.classList.contains("on"));
      index = event.key === "ArrowDown" ? (index + 1) % options.length : (index <= 0 ? options.length - 1 : index - 1);
      options.forEach(button => button.classList.remove("key"));
      options[index].classList.add("key");
    } else if (event.key === "Enter") {
      const chosen = options.find(button => button.classList.contains("key")) || options.find(button => button.classList.contains("on"));
      if (!chosen) return;
      event.preventDefault();
      chosen.click();
    }
  });
  fields.addEventListener("paste", event => {
    const clipboard = event.clipboardData;
    if (!clipboard) return;
    const text = clipboard.getData("text/plain");
    const target = event.target;
    if (target && target.closest && target.closest(".rt-edit")) {
      event.preventDefault();
      const editor = target.closest(".rt-edit");
      editor.focus();
      document.execCommand("insertHTML", false, GuideProgress.plainInsertHtml(text));
      syncBlocks();
      return;
    }
    if (!target || (target.tagName !== "TEXTAREA" && target.tagName !== "INPUT")) return;
    if (target.type === "file" || target.type === "checkbox" || target.type === "color") return;
    event.preventDefault();
    const insert = target.tagName === "INPUT" ? String(text || "").replace(/\s*\n\s*/g, " ") : String(text || "");
    const start = target.selectionStart == null ? target.value.length : target.selectionStart;
    const end = target.selectionEnd == null ? start : target.selectionEnd;
    target.setRangeText(insert, start, end, "end");
    target.dispatchEvent(new Event("input", { bubbles: true }));
  });

  let blockDrag = null;

  function clearBlockMarks() {
    document.querySelectorAll(".is-block-before,.is-block-after").forEach(node => node.classList.remove("is-block-before", "is-block-after"));
  }

  function markBlockTarget(clientX, clientY) {
    clearBlockMarks();
    if (!blockDrag) return;
    const hit = document.elementFromPoint(clientX, clientY);
    const row = hit && hit.closest && hit.closest("#block-editor [data-block-path]");
    if (!row) return;
    const path = row.getAttribute("data-block-path");
    if (!path || path.indexOf(".") >= 0) return;
    const rect = row.getBoundingClientRect();
    const before = clientY < rect.top + rect.height / 2;
    row.classList.add(before ? "is-block-before" : "is-block-after");
    blockDrag.to = path;
    blockDrag.before = before;
  }

  fields.addEventListener("pointerdown", event => {
    const handle = event.target.closest && event.target.closest("[data-drag-block]");
    if (!handle || event.button > 0) return;
    event.preventDefault();
    try { handle.setPointerCapture(event.pointerId); } catch (error) {}
    blockDrag = { path: handle.getAttribute("data-drag-block"), id: event.pointerId, x: event.clientX, y: event.clientY, before: false };
    document.body.classList.add("is-block-dragging");
    startEdgeScroll(() => blockDrag);
  });
  fields.addEventListener("pointermove", event => {
    if (!blockDrag || event.pointerId !== blockDrag.id) return;
    blockDrag.x = event.clientX;
    blockDrag.y = event.clientY;
    markBlockTarget(event.clientX, event.clientY);
  });
  function finishBlockDrag() {
    const current = blockDrag;
    blockDrag = null;
    document.body.classList.remove("is-block-dragging");
    clearBlockMarks();
    if (!current || current.to == null || current.to === current.path) return;
    syncBlocks();
    const from = Number(current.path);
    let to = Number(current.to);
    if (!editing.blocks[from]) return;
    const moved = editing.blocks.splice(from, 1)[0];
    if (from < to) to -= 1;
    editing.blocks.splice(current.before ? to : to + 1, 0, moved);
    paintBlocks();
  }
  fields.addEventListener("pointerup", event => {
    if (!blockDrag || event.pointerId !== blockDrag.id) return;
    finishBlockDrag();
  });
  fields.addEventListener("pointercancel", event => {
    if (!blockDrag || event.pointerId !== blockDrag.id) return;
    blockDrag = null;
    document.body.classList.remove("is-block-dragging");
    clearBlockMarks();
  });

  function gatheredPlaces() {
    const records = Object.assign({}, book().places || {});
    const take = name => {
      const key = GuideProgress.placeKey(name);
      if (!key || records[key]) return;
      records[key] = { name: GuideProgress.placeName(name), usedAt: 0 };
    };
    Object.keys(book().custom || {}).forEach(id => take(book().custom[id] && book().custom[id].location));
    Object.keys(book().patches || {}).forEach(id => take(book().patches[id] && book().patches[id].location));
    return records;
  }

  function placeUsed(name) {
    const key = GuideProgress.placeKey(name);
    const current = book();
    const hit = item => item && GuideProgress.placeKey(item.location) === key;
    return Object.keys(current.custom || {}).some(id => hit(current.custom[id])) || Object.keys(current.patches || {}).some(id => hit(current.patches[id]));
  }

  function bindPlaceField() {
    const input = form.elements.location;
    const list = document.getElementById("place-suggest");
    if (!input || !list) return;
    let placeComposing = false;
    let placeIndex = -1;
    const paint = () => {
      const rows = GuideProgress.suggestPlaces(gatheredPlaces(), input.value, input.value.trim() ? 20 : 10);
      if (placeIndex >= rows.length) placeIndex = rows.length - 1;
      list.innerHTML = rows.map((row, index) => `<button type="button" class="place-option${index === placeIndex ? " on" : ""}" data-place="${escapeAttr(row.name)}" role="option"><span class="place-drop">${escapeText(row.name)}</span><span class="place-x" data-place-forget="${escapeAttr(row.name)}" aria-label="候補から消す">×</span></button>`).join("");
      list.hidden = !rows.length;
      input.setAttribute("aria-expanded", list.hidden ? "false" : "true");
    };
    input.addEventListener("focus", () => { placeIndex = -1; paint(); });
    input.addEventListener("compositionstart", () => { placeComposing = true; });
    input.addEventListener("compositionend", () => { placeComposing = false; placeIndex = -1; paint(); });
    input.addEventListener("input", event => {
      if (placeComposing || event.isComposing) return;
      placeIndex = -1;
      paint();
    });
    input.addEventListener("keydown", event => {
      if (placeComposing || event.isComposing || event.keyCode === 229) return;
      if (event.key === "Escape") {
        if (!list.hidden) {
          list.hidden = true;
          input.setAttribute("aria-expanded", "false");
          event.preventDefault();
        }
        return;
      }
      const options = () => [...list.querySelectorAll(".place-option")];
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const items = options();
        if (!items.length) { paint(); return; }
        list.hidden = false;
        const delta = event.key === "ArrowDown" ? 1 : -1;
        placeIndex = (placeIndex + delta + items.length) % items.length;
        paint();
        return;
      }
      if (event.key === "Enter" && !list.hidden && placeIndex >= 0) {
        const chosen = options()[placeIndex];
        if (!chosen) return;
        event.preventDefault();
        input.value = chosen.getAttribute("data-place") || "";
        list.hidden = true;
        input.setAttribute("aria-expanded", "false");
      }
    });
    list.addEventListener("mousedown", event => {
      const forget = event.target.closest && event.target.closest("[data-place-forget]");
      const option = event.target.closest && event.target.closest("[data-place]");
      if (!forget && !option) return;
      event.preventDefault();
      if (forget) {
        const name = forget.getAttribute("data-place-forget");
        if (placeUsed(name) && !window.confirm("この場所はカードに残っています。候補から消しますか。")) return;
        GuideApp.setCardBook(GuideProgress.forgetPlace(JSON.parse(JSON.stringify(book())), name), "場所");
        placeIndex = -1;
        paint();
        return;
      }
      input.value = option.getAttribute("data-place") || "";
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
    });
    input.addEventListener("blur", () => {
      setTimeout(() => {
        list.hidden = true;
        input.setAttribute("aria-expanded", "false");
      }, 160);
    });
  }

  function openRouteForm(seed) {
    editing = seed;
    error.textContent = "";
    document.getElementById("card-edit-title").textContent = seed.id ? "カードを直す" : "カードを追加";
    document.getElementById("card-edit-id").textContent = seed.id ? "ID: " + seed.id : "IDは保存時に付きます。あとから変わりません。";
    const trophies = ['<option value="">選ばない</option>'].concat(GuideApp.trophyChoices().map(item => `<option value="${item.id}"${item.id === seed.trophy ? " selected" : ""}>${item.name}</option>`)).join("");
    const chapterRows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[seed.trackId] || [], book(), seed.trackId) || [];
    const chapterRow = chapterRows.find(row => row.chapterId === seed.chapterId);
    editing.links = (seed.items || []).map(link => ({ id: link.id, qty: link.qty || 1 }));
    editing.section = seed.section || "";
    editing.parent = seed.parent || "";
    const templates = GuideProgress.activeTemplates(book(), globalThis.TEMPLATES);
    const templateOptions = ['<option value="">自由入力</option>'].concat(templates.map(item => `<option value="${escapeAttr(item.id)}"${item.id === seed.template ? " selected" : ""}>${escapeText(item.label)}</option>`)).join("");
    const sectionList = chapterSections(seed.trackId, seed.chapterId);
    const sectionName = (sectionList.find(item => item.id === editing.section) || {}).title || "";
    const tabs = ["main", "blocks", "image", "options"].map(id => {
      const label = { main: "メイン", blocks: "ブロック", image: "画像", options: "タグオプション" }[id];
      return `<button type="button" data-card-tab="${id}">${label}</button>`;
    }).join("");
    fields.innerHTML = [
      `<div class="card-edit-tabs" role="tablist">${tabs}</div>`,
      `<div data-tab-panel="main">`,
      `<p class="lead">章: ${escapeText((chapterRow && chapterRow.title) || seed.chapterId || "")}${sectionName ? " / " + escapeText(sectionName) : ""}</p>`,
      field("見出しの定型文", `<select name="template">${templateOptions}</select>`),
      field("見出し", `<input name="title" value="${escapeAttr(seed.title || "")}" placeholder="定型文を選んだときは空でも保存できます">`),
      field("場所", `<div class="place-field"><input name="location" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="place-suggest" value="${escapeAttr(seed.location || "")}" placeholder="自由入力できます"><div id="place-suggest" class="place-suggest" hidden role="listbox"></div></div>`),
      '<p id="template-preview"></p>',
      '<div id="flag-chips"></div><input type="hidden" name="flag" value="">',
      `</div>`,
      `<div data-tab-panel="blocks">`,
      '<p>本文は、文章・画像・リスト・列・囲みを上から順に並べます。種類は各ブロックの欄で変えられます。貼り付けは文字と改行だけが入ります。</p>',
      '<div id="block-editor"></div>',
      `<textarea name="detail" hidden>${escapeText(seed.detail || "")}</textarea>`,
      '<input type="hidden" id="block-json" name="blocks" value="">',
      `</div>`,
      `<div data-tab-panel="image">${mapFields(seed.map || "")}</div>`,
      `<div data-tab-panel="options">`,
      '<p id="tag-options-hint" class="lead">タグを選ぶと、期限やアイテムなどの欄がここに出ます。</p>',
      `<div id="deadline-field">${field("期限", `<input name="deadline" value="${escapeAttr(seed.deadline || "")}" placeholder="期限・取り逃しのとき">`)}</div>`,
      `<div id="trophy-field">${field("トロフィー", `<select name="trophy">${trophies}</select>`)}</div>`,
      '<div id="battle-field"></div>',
      '<div id="item-picker"></div>',
      `</div>`
    ].join("");
    editing.blocks = freshBlocks(seed);
    editing.flags = GuideProgress.cardFlags(seed);
    if (!editing.flags.length) editing.flags = ["story"];
    editing.enemies = GuideProgress.enemyLinks(seed.enemies);
    editing.enemyNote = seed.enemyNote || "";
    editing.enemyImage = seed.enemyImage || "";
    paintBlocks();
    paintFlags();
    paintItemPicker();
    form.elements.flag.addEventListener("change", paintItemPicker);
    bindMapField();
    bindPlaceField();
    dialog.hidden = false;
    captureBaseline();
    showEditorTab(seed.focusBlock ? "blocks" : (seed.tab || rememberedEditorTab()));
    if (seed.focusBlock) focusEditorBlock(seed.focusBlock);
    else if ((seed.tab || rememberedEditorTab()) === "main" && form.elements.title) form.elements.title.focus();
  }

  function rememberedEditorTab() {
    try {
      const saved = sessionStorage.getItem("ff7r-card-editor-tab");
      if (saved === "blocks" || saved === "image" || saved === "options" || saved === "main") return saved;
    } catch (error) {}
    return "main";
  }

  function rememberedChapterTab() {
    try {
      const saved = sessionStorage.getItem("ff7r-chapter-editor-tab");
      if (saved === "map" || saved === "main") return saved;
    } catch (error) {}
    return "main";
  }

  function showEditorTab(id) {
    const buttons = [...fields.querySelectorAll("[data-card-tab]")];
    const known = buttons.map(button => button.getAttribute("data-card-tab"));
    const tab = known.indexOf(id) >= 0 ? id : (known[0] || "main");
    buttons.forEach(button => {
      const on = button.getAttribute("data-card-tab") === tab;
      button.classList.toggle("on", on);
      button.setAttribute("aria-selected", on ? "true" : "false");
    });
    fields.querySelectorAll("[data-tab-panel]").forEach(panel => { panel.hidden = panel.getAttribute("data-tab-panel") !== tab; });
    const cardTabs = ["main", "blocks", "image", "options"];
    try {
      if (cardTabs.indexOf(tab) >= 0 && known.indexOf("blocks") >= 0) sessionStorage.setItem("ff7r-card-editor-tab", tab);
      if ((tab === "main" || tab === "map") && known.indexOf("map") >= 0) sessionStorage.setItem("ff7r-chapter-editor-tab", tab);
    } catch (error) {}
    if (tab === "options") paintTagHint();
  }

  function focusEditorBlock(path) {
    const row = fields.querySelector('[data-block-path="' + path + '"]');
    if (!row) return;
    row.classList.add("is-block-focus");
    row.scrollIntoView({ block: "nearest" });
    const focus = row.querySelector("[contenteditable='true'], textarea, input");
    if (focus) focus.focus();
  }

  function paintTagHint() {
    const hint = document.getElementById("tag-options-hint");
    if (!hint) return;
    const shown = ["deadline-field", "trophy-field", "battle-field", "item-picker"].some(id => {
      const node = document.getElementById(id);
      return node && !node.hidden;
    });
    hint.hidden = shown;
  }

  const pickerState = { hub: "consumables", query: "", selected: "", qty: "1" };

  function paintItemPicker() {
    const host = document.getElementById("item-picker");
    if (!host || !form.elements.flag) return;
    if (!(editing && editing.flags && editing.flags.indexOf("item") >= 0)) {
      host.hidden = true;
      host.innerHTML = "";
      paintTagHint();
      return;
    }
    host.hidden = false;
    const choices = GuideApp.itemChoices();
    if (!choices.length) {
      host.innerHTML = "<p class=\"is-missing-item\">台帳を読み込めないので、アイテムを探せません。</p>";
      return;
    }
    const hubs = [];
    choices.forEach(item => {
      if (!hubs.some(hub => hub.id === item.hubId)) hubs.push({ id: item.hubId, label: item.hubLabel });
    });
    hubs.sort((a, b) => (a.id === "consumables" ? -1 : b.id === "consumables" ? 1 : 0));
    if (!hubs.some(hub => hub.id === pickerState.hub) && hubs[0]) pickerState.hub = hubs[0].id;
    const selected = (editing.links || []).map(link => {
      const found = choices.find(item => item.id === link.id);
      return `<li><span class="${found ? "" : "is-missing-item"}">${escapeText((found ? found.name : link.id) + " ×" + link.qty)}</span> <button type="button" data-link-remove="${escapeAttr(link.id)}">外す</button></li>`;
    }).join("");
    host.innerHTML = [
      "<p>先にアイテムを選び、そのあと個数を決めて追加します。</p>",
      `<select id="item-picker-hub">${hubs.map(hub => `<option value="${escapeAttr(hub.id)}"${hub.id === pickerState.hub ? " selected" : ""}>${escapeText(hub.label)}</option>`).join("")}</select>`,
      `<input id="item-picker-q" type="search" placeholder="名前で探す" autocomplete="off" value="${escapeAttr(pickerState.query)}">`,
      '<div id="item-picker-results"></div>',
      `<label>個数 <input id="item-picker-qty" type="number" min="1" max="99" value="${escapeAttr(pickerState.qty || "1")}"></label>`,
      '<button type="button" id="item-picker-add">このアイテムを追加</button>',
      `<ul id="item-picker-selected">${selected}</ul>`
    ].join("");
    refreshItemResults();
    paintTagHint();
  }

  function refreshItemResults() {
    const host = document.getElementById("item-picker-results");
    const hub = document.getElementById("item-picker-hub");
    const query = document.getElementById("item-picker-q");
    if (!host || !hub || !query) return;
    const needle = query.value.trim().toLowerCase();
    const rows = GuideApp.itemChoices().filter(item => item.hubId === hub.value && (!needle || (item.name + item.area).toLowerCase().includes(needle))).slice(0, 12);
    host.innerHTML = rows.map(item => `<button type="button" data-link-pick="${escapeAttr(item.id)}"${item.id === pickerState.selected ? ' style="outline:2px solid #39c9ff"' : ""}>${escapeText(item.name)}${item.area ? "（" + escapeText(item.area) + "）" : ""}</button>`).join("") || "<p>一致する項目がありません。</p>";
  }

  function openCatalogForm(seed) {
    editing = seed;
    error.textContent = "";
    document.getElementById("card-edit-title").textContent = seed.id ? "台帳を直す" : "台帳に追加";
    document.getElementById("card-edit-id").textContent = seed.id ? "ID: " + seed.id : "IDは保存時に付きます。";
    const mapEditor = seed.catalogId === "quests" || seed.map ? mapFields(seed.map || "") : "";
    const questFields = ["client", "place", "when", "condition", "clear", "level"];
    const itemFields = ["obtain", "buy", "sell", "use", "ability"];
    const itemCatalogs = ["keyItems", "consumables", "accessories", "weapons", "armor", "materia", "summons"];
    const shownFields = seed.catalogId === "quests" ? questFields : itemCatalogs.indexOf(seed.catalogId) >= 0 ? itemFields : [];
    const extras = [
      ["obtain", "入手"], ["buy", "買値"], ["sell", "売値"], ["use", "用途"], ["ability", "アビリティ"],
      ["client", "依頼人"], ["place", "受注場所"], ["when", "時期"], ["condition", "条件"], ["clear", "クリア"], ["level", "レベル"]
    ].filter(pair => shownFields.indexOf(pair[0]) >= 0 || seed[pair[0]]);
    fields.innerHTML = [
      field("名前", `<input name="name" required value="${escapeAttr(seed.name || "")}">`),
      field("場所", `<div class="place-field"><input name="location" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="place-suggest" value="${escapeAttr(seed.location || "")}" placeholder="自由入力できます"><div id="place-suggest" class="place-suggest" hidden role="listbox"></div></div>`),
      field("説明", `<textarea name="detail" required>${escapeText(seed.detail || "")}</textarea>`),
      field("場所・種別", `<input name="area" value="${escapeAttr(seed.area || "")}">`),
      extras.map(pair => field(pair[1], `<input name="${pair[0]}" value="${escapeAttr(seed[pair[0]] || "")}">`)).join(""),
      mapEditor,
      `<label><input type="checkbox" name="missable"${seed.missable ? " checked" : ""}> 取り逃し</label>`
    ].join("");
    if (mapEditor) bindMapField();
    bindPlaceField();
    dialog.hidden = false;
    captureBaseline();
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
    const sectionId = editing.section || "";
    const section = chapterSections(editing.trackId, editing.chapterId).find(item => item.id === sectionId);
    syncBlocks();
    if (missingImage(editing.blocks)) {
      error.textContent = "画像が空です。ファイル、https:// のURL、保存済みの画像のどれかを選んでください。";
      return;
    }
    const rawMap = chosenMap();
    const checked = GuideProgress.validateRouteFields({
      title: data.get("title"),
      detail: data.get("detail"),
      flag: data.get("flag"),
      deadline: data.get("deadline"),
      source: editing.source || "",
      trophy: data.get("trophy"),
      map: section && rawMap === section.map ? "" : rawMap,
      parent: editing.parent || "",
      section: editing.section || "",
      flag: (editing.flags || ["story"])[0],
      flags: editing.flags,
      template: data.get("template") || "",
      location: data.get("location"),
      quest: editing.quest || "",
      items: editing.links || [],
      blocks: editing.blocks,
      enemies: editing.enemies || [],
      enemyNote: document.getElementById("enemy-note") ? document.getElementById("enemy-note").value : editing.enemyNote || "",
      enemyImage: document.getElementById("enemy-image") ? document.getElementById("enemy-image").value : editing.enemyImage || ""
    }, flagIds, GuideApp.trophyChoices().map(item => item.id));
    if (checked.error) {
      error.textContent = checked.error;
      return;
    }
    const place = currentRoute(editing);
    const id = editing.id || GuideProgress.createCardId(usedIds());
    const parentId = checked.value.parent;
    const order = GuideProgress.orderForSave(place.ids, id, parentId, editing.parent || "", editing.insertAfter || "");
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
    GuideProgress.rememberPlace(next, checked.value.location);
    GuideApp.setCardBook(next);
  }

  function saveCatalog() {
    const data = new FormData(form);
    const checked = GuideProgress.validateCatalogFields({
      name: data.get("name"),
      detail: data.get("detail"),
      area: data.get("area"),
      source: editing.source || "",
      map: chosenMap(),
      location: data.get("location"),
      missable: data.get("missable") === "on"
    });
    if (checked.error) {
      error.textContent = checked.error;
      return;
    }
    const ids = GuideApp.currentCatalogIds(editing.catalogId).filter(item => item !== (editing.id || ""));
    const id = editing.id || GuideProgress.createCardId(usedIds());
    const at = editing.insertAfter ? ids.indexOf(editing.insertAfter) : -1;
    const order = ids.slice();
    order.splice(at < 0 ? order.length : at + 1, 0, id);
    ["obtain", "buy", "sell", "use", "ability", "client", "place", "when", "condition", "clear", "level"].forEach(key => {
      if (form.elements[key]) checked.value[key] = GuideProgress.toHalfWidth(form.elements[key].value || "").trim();
    });
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
    GuideProgress.rememberPlace(next, checked.value.location);
    GuideApp.setCardBook(next);
  }

  function shift(id, delta) {
    const place = locate(id);
    if (!place) return;
    if (place.kind === "enemy") {
      const ids = GuideApp.currentEnemyIds();
      const index = ids.indexOf(id);
      const nextIndex = index + delta;
      if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
      ids.splice(index, 1);
      ids.splice(nextIndex, 0, id);
      GuideApp.setCardBook(GuideProgress.saveEnemyOrder(book(), ids), "並べ替え");
      return;
    }
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
      chapter.innerHTML = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[track.value] || [], book(), track.value) || []).map(item => `<option value="${item.chapterId}"${item.chapterId === place.chapterId && track.value === place.trackId ? " selected" : ""}>${item.title || item.chapterId}</option>`).join("");
    };
    track.addEventListener("change", fill);
    fill();
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
  }

  function requestClose() {
    if (formDirty() && !window.confirm("保存していない変更があります。破棄して閉じますか。")) return;
    dialog.hidden = true;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (editing && editing.chooser) {
      if (editing.onOk) editing.onOk();
      return;
    }
    if (editing && editing.mapOnly) {
      saveMapOnly();
      return;
    }
    if (editing && editing.sectionEdit) {
      saveSectionEdit();
      return;
    }
    if (editing && editing.chapterEdit) {
      saveChapterEdit();
      return;
    }
    if (editing && editing.kind === "enemy") {
      saveEnemy();
      return;
    }
    if (editing && editing.move) {
      moveRoute(editing.id, form.elements.track.value, form.elements.chapter.value);
      dialog.hidden = true;
      return;
    }
    if (editing && editing.kind === "catalog") saveCatalog();
    else saveRoute();
  });
  document.getElementById("card-edit-cancel").addEventListener("click", requestClose);
  document.getElementById("card-edit-close").addEventListener("click", requestClose);
  dialog.addEventListener("click", event => {
    if (event.target === dialog) event.stopPropagation();
  });
  dialog.addEventListener("wheel", event => {
    if (dialog.hidden) return;
    const form = dialog.querySelector("form");
    const scroller = document.getElementById("card-edit-fields");
    if (form && form.contains(event.target) && scroller) {
      event.preventDefault();
      scroller.scrollTop += event.deltaY;
      return;
    }
    event.preventDefault();
    window.scrollBy(0, event.deltaY);
  }, { passive: false });
  document.addEventListener("click", event => {
    const pop = document.getElementById("tag-pop");
    if (!pop || event.target.closest("#tag-pop, [data-tag-spot]")) return;
    pop.remove();
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (blockDrag) {
      blockDrag = null;
      document.body.classList.remove("is-block-dragging");
      clearBlockMarks();
      event.preventDefault();
      return;
    }
    if (layoutDrag) {
      endLayoutDrag(false);
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    const pop = document.getElementById("tag-pop");
    if (!pop || dialog.hidden === false) return;
    pop.remove();
    event.preventDefault();
  }, true);
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || dialog.hidden) return;
    if (dialog.querySelector(".rt-menu:not([hidden])")) closeRichMenus(dialog);
    event.preventDefault();
    event.stopPropagation();
  }, true);

  let cardPress = null;
  document.addEventListener("contextmenu", event => {
    if (!document.body.classList.contains("is-card-edit") || dialog.hidden === false) return;
    const card = event.target.closest && event.target.closest("article.it[data-id]");
    if (!card || event.target.closest("input, textarea, a")) return;
    event.preventDefault();
    openCardMenu(card.getAttribute("data-id"), event.clientX, event.clientY);
  });
  document.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" || !document.body.classList.contains("is-card-edit")) return;
    const card = event.target.closest && event.target.closest("article.it[data-id]");
    if (!card || event.target.closest("button, a, input, textarea")) return;
    const point = { x: event.clientX, y: event.clientY, id: card.getAttribute("data-id") };
    cardPress = setTimeout(() => openCardMenu(point.id, point.x, point.y), 550);
  });
  document.addEventListener("pointerup", () => { clearTimeout(cardPress); });
  document.addEventListener("pointermove", event => {
    if (!cardPress) return;
    if (Math.hypot(event.movementX || 0, event.movementY || 0) > 8) clearTimeout(cardPress);
  });
  document.addEventListener("click", event => {
    const menuCopy = event.target.closest && event.target.closest("[data-menu-copy]");
    const menuHead = event.target.closest && event.target.closest("[data-menu-head]");
    if (menuCopy || menuHead) {
      const id = (menuCopy || menuHead).getAttribute(menuCopy ? "data-menu-copy" : "data-menu-head");
      closeCardMenu();
      if (menuCopy) duplicateCard(id);
      else headerCopy(id);
      return;
    }
    if (!event.target.closest || !event.target.closest("#card-menu")) closeCardMenu();
    if (!document.body.classList.contains("is-card-edit")) return;
    const tagSpot = event.target.closest("[data-tag-spot]");
    if (tagSpot) { openTagPop(tagSpot.getAttribute("data-tag-spot"), tagSpot); event.preventDefault(); return; }
    const copy = event.target.closest("[data-card-copy]");
    if (copy) { duplicateCard(copy.getAttribute("data-card-copy")); return; }
    const sectionEdit = event.target.closest("[data-section-edit]");
    if (sectionEdit) { openSectionEdit(sectionEdit.getAttribute("data-section-edit")); return; }
    const sectionUp = event.target.closest("[data-section-up]");
    if (sectionUp) { moveSection(sectionUp.getAttribute("data-section-up"), -1); return; }
    const sectionDown = event.target.closest("[data-section-down]");
    if (sectionDown) { moveSection(sectionDown.getAttribute("data-section-down"), 1); return; }
    const sectionDelete = event.target.closest("[data-section-delete]");
    if (sectionDelete) { removeSection(sectionDelete.getAttribute("data-section-delete")); return; }
    const sectionInsert = event.target.closest("[data-section-insert]");
    if (sectionInsert) {
      const sectionId = sectionInsert.getAttribute("data-section-insert");
      const place = sectionPlace(sectionId);
      if (place) addSection(place.trackId, place.chapterId, sectionId);
      return;
    }
    const sectionAdd = event.target.closest("[data-section-add]");
    if (sectionAdd) { addSection(sectionAdd.getAttribute("data-card-track"), sectionAdd.getAttribute("data-section-add")); return; }
    const moveHere = event.target.closest("[data-move-here]");
    if (moveHere) {
      const place = sectionPlace(moveHere.getAttribute("data-move-here"));
      if (!place || moveHere.disabled) return;
      moveCardsToSection(place.trackId, place.chapterId, moveHere.getAttribute("data-move-here"), selectedInChapter(place.trackId, place.chapterId));
      return;
    }
    const moveSelected = event.target.closest("[data-move-selected]");
    if (moveSelected) { askMoveSelected(moveSelected.getAttribute("data-card-track"), moveSelected.getAttribute("data-move-selected")); return; }
    const pick = event.target.closest("[data-card-pick]");
    if (pick) { togglePick(pick, event.shiftKey); return; }
    const enemyAdd = event.target.closest("[data-enemy-add]");
    if (enemyAdd) {
      openEnemyForm({ enemyKind: enemyAdd.getAttribute("data-enemy-add") || "normal" });
      return;
    }
    const chapterEdit = event.target.closest("[data-chapter-edit]");
    if (chapterEdit) {
      openChapterEdit(chapterEdit.getAttribute("data-card-track"), chapterEdit.getAttribute("data-chapter-edit"));
      return;
    }
    const addAfter = event.target.closest("[data-card-add-after]");
    if (addAfter) {
      const id = addAfter.getAttribute("data-card-add-after");
      const place = locate(id);
      if (place && place.kind === "catalog") {
        openCatalogForm({ kind: "catalog", catalogId: place.catalogId, name: "", detail: "", area: "", source: "", missable: false, insertAfter: id });
        return;
      }
      if (place && place.kind === "enemy") {
        openEnemyForm({ enemyKind: "normal", insertAfter: id });
        return;
      }
      const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
      if (!place || !item) return;
      openRouteForm({
        kind: "route",
        trackId: place.trackId,
        chapterId: place.chapterId,
        flag: item.flag || "story",
        parent: item.parent || "",
        section: item.section || "",
        insertAfter: id,
        title: "",
        detail: "",
        deadline: "",
        source: "",
        trophy: ""
      });
      return;
    }
    const add = event.target.closest("[data-card-add]");
    if (add) {
      openRouteForm({
        kind: "route",
        trackId: add.getAttribute("data-card-track"),
        chapterId: add.getAttribute("data-card-chapter"),
        flag: "story",
        section: add.getAttribute("data-card-section") || "",
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
      if (place.kind === "enemy") {
        const enemy = (GuideApp.currentEnemyIds ? GuideProgress.mergeEnemies(globalThis.ENEMIES || [], book()) : []).find(item => item.id === id);
        if (!enemy) return;
        openEnemyForm(enemy);
        return;
      }
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
      const place = locate(id);
      if (place && place.kind === "enemy") {
        if (!window.confirm("この敵を一覧から外します。元の原稿に戻すには「編集をすべて戻す」を使います。")) return;
        GuideApp.setCardBook(GuideProgress.removeEnemy(book(), id), "エネミー");
        return;
      }
      if (!window.confirm("このカードを削除します。チェックも外れます。元の原稿に戻すには「編集をすべて戻す」を使います。")) return;
      GuideApp.dropCard(id);
    }
  });

  function routeRecord(trackId, chapterId, id) {
    const chapter = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || []).find(row => row.chapterId === chapterId);
    return chapter && (chapter.items || []).find(item => item.id === id);
  }
  function catalogRecord(catalogId, id) {
    if (!CATALOGS[catalogId]) return null;
    return GuideProgress.mergeCatalog(CATALOGS[catalogId], book(), catalogId).find(item => item.id === id);
  }

  function chapterSections(trackId, chapterId) {
    const rows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || [];
    const row = rows.find(item => item.chapterId === chapterId);
    return row && row.sections ? row.sections.map(item => Object.assign({}, item)) : [];
  }

  let lastPick = "";

  function chapterDisplayIds(trackId, chapterId) {
    const row = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || []).find(item => item.chapterId === chapterId);
    return GuideProgress.displayItems(row && row.items || [], row && row.sections || []).map(item => item.id);
  }

  function selectedInChapter(trackId, chapterId) {
    const ids = chapterDisplayIds(trackId, chapterId);
    return ids.filter(id => GuideSelect.has(id));
  }

  function togglePick(box, shift) {
    const id = box.getAttribute("data-card-pick");
    const ordered = [...document.querySelectorAll("[data-card-pick]")].map(item => item.getAttribute("data-card-pick"));
    if (shift && lastPick && ordered.indexOf(lastPick) >= 0) {
      const a = ordered.indexOf(lastPick);
      const b = ordered.indexOf(id);
      const low = Math.min(a, b);
      const high = Math.max(a, b);
      for (let i = low; i <= high; i += 1) GuideSelect.add(ordered[i]);
    } else if (box.checked) GuideSelect.add(id);
    else GuideSelect.delete(id);
    lastPick = id;
    document.querySelectorAll("[data-card-pick]").forEach(item => {
      item.checked = GuideSelect.has(item.getAttribute("data-card-pick"));
    });
    refreshMoveButtons();
  }

  function refreshMoveButtons() {
    const on = GuideSelect.size > 0;
    document.querySelectorAll("[data-move-here], [data-move-selected]").forEach(button => {
      button.disabled = !on;
    });
  }

  function clearSelect() {
    GuideSelect.clear();
    lastPick = "";
    refreshMoveButtons();
  }

  function moveCardsToSection(trackId, chapterId, sectionId, rawIds) {
    const row = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || []).find(item => item.chapterId === chapterId);
    const items = row && row.items || [];
    const moving = GuideProgress.withChildIds(rawIds, items);
    if (!moving.length) return;
    const order = GuideApp.currentIds(trackId, chapterId);
    const nextOrder = GuideProgress.orderAfterSectionMove(order, moving, id => {
      const item = items.find(entry => entry.id === id);
      return item && item.section || "";
    }, sectionId);
    const baseIds = GuideApp.baseItems(trackId, chapterId).map(entry => entry.id);
    let next = book();
    moving.forEach(id => {
      const item = items.find(entry => entry.id === id);
      if (!item) return;
      const base = GuideApp.findBaseRoute(id);
      next = GuideProgress.upsertRouteCard(
        next, base && base.item, id,
        cardFields(Object.assign({}, item, { section: sectionId }), item.parent || ""),
        trackId, chapterId, nextOrder, baseIds
      );
    });
    clearSelect();
    GuideApp.setCardBook(next);
  }

  function askMoveSelected(trackId, chapterId) {
    const sections = chapterSections(trackId, chapterId);
    const ids = selectedInChapter(trackId, chapterId);
    if (!ids.length) {
      window.alert("先にカードの「選択」を付けてください。Shiftを押しながら選ぶと範囲になります。");
      return;
    }
    const options = sections.map((item, index) => `<option value="${escapeAttr(item.id)}">${index + 1} ${escapeText(GuideProgress.sectionName(item.title) || "区分")}</option>`).join("");
    editing = { chooser: true };
    document.getElementById("card-edit-title").textContent = "選択を移動";
    document.getElementById("card-edit-id").textContent = ids.length + "件。親を選ぶと、その子カードも一緒に移ります。";
    fields.innerHTML = field("子チャプター", `<select name="target-section">${options}</select>`);
    error.textContent = "";
    const submit = form.querySelector("[type=submit]");
    if (submit) submit.textContent = "移動";
    dialog.hidden = false;
    captureBaseline();
    editing.onOk = () => {
      const target = String(new FormData(form).get("target-section") || "");
      dialog.hidden = true;
      if (target) moveCardsToSection(trackId, chapterId, target, ids);
    };
  }

  function storeSections(trackId, chapterId, sections) {
    const next = JSON.parse(JSON.stringify(book()));
    GuideProgress.saveSections(next, trackId + ":" + chapterId, sections);
    GuideApp.setCardBook(next);
  }

  function openTagPop(id, anchor) {
    const old = document.getElementById("tag-pop");
    if (old) old.remove();
    const place = locate(id);
    const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
    if (!item || !anchor) return;
    const selected = new Set(GuideProgress.cardFlags(item));
    const pop = document.createElement("div");
    pop.id = "tag-pop";
    pop.setAttribute("role", "dialog");
    pop.setAttribute("aria-label", "タグ");
    pop.innerHTML = GAME.flags.map(flag => `<label><input type="checkbox" data-tag-flip="${flag.id}"${selected.has(flag.id) ? " checked" : ""}>${escapeText(flag.label)}</label>`).join("");
    document.body.appendChild(pop);
    const rect = anchor.getBoundingClientRect();
    const width = Math.min(240, window.innerWidth - 16);
    pop.style.width = width + "px";
    pop.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)) + "px";
    pop.style.top = Math.max(8, Math.min(rect.bottom + 6, window.innerHeight - 220)) + "px";
    pop.addEventListener("change", event => {
      const box = event.target.closest && event.target.closest("[data-tag-flip]");
      if (!box) return;
      const flags = [...pop.querySelectorAll("[data-tag-flip]")].filter(input => input.checked).map(input => input.getAttribute("data-tag-flip"));
      if (!flags.length) {
        box.checked = true;
        return;
      }
      saveCardFlags(id, flags);
    });
  }

  function saveCardFlags(id, flags) {
    const place = locate(id);
    const item = place && routeRecord(place.trackId, place.chapterId, id);
    if (!item) return;
    const fields = cardFields(item, item.parent || "");
    fields.flags = flags;
    fields.flag = flags[0];
    const base = GuideApp.findBaseRoute(id);
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(), base && base.item, id, fields, place.trackId, place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    ));
  }

  function addSection(trackId, chapterId, afterId) {
    const sections = chapterSections(trackId, chapterId);
    const id = chapterId + "-sec-" + Date.now().toString(36);
    const section = { id: id, title: "", map: "", note: "" };
    const at = afterId ? sections.findIndex(item => item.id === afterId) : -1;
    if (at >= 0) sections.splice(at + 1, 0, section);
    else sections.push(section);
    storeSections(trackId, chapterId, sections);
    const node = document.querySelector('[data-section="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (node) {
      node.classList.add("is-new-section");
      node.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => node.classList.remove("is-new-section"), 1600);
    }
    openSectionEdit(id);
    const title = form.querySelector("[name=title]");
    if (title) title.focus();
  }

  function moveSection(sectionId, delta) {
    const place = sectionPlace(sectionId);
    if (!place) return;
    const sections = chapterSections(place.trackId, place.chapterId);
    const index = sections.findIndex(item => item.id === sectionId);
    const next = index + delta;
    if (index < 0 || next < 0 || next >= sections.length) return;
    const moved = sections.splice(index, 1)[0];
    sections.splice(next, 0, moved);
    storeSections(place.trackId, place.chapterId, sections);
  }

  function sectionPlace(sectionId) {
    for (const track of GAME.tracks) {
      for (const chapter of GAME.chapters[track.id] || []) {
        if (chapterSections(track.id, chapter.id).some(item => item.id === sectionId)) {
          return { trackId: track.id, chapterId: chapter.id };
        }
      }
    }
    return null;
  }

  function removeSection(sectionId) {
    const place = sectionPlace(sectionId);
    if (!place) return;
    const sections = chapterSections(place.trackId, place.chapterId);
    const index = sections.findIndex(item => item.id === sectionId);
    if (index < 0) return;
    const previous = sections[index - 1];
    const ids = GuideApp.currentIds(place.trackId, place.chapterId).filter(id => {
      const item = routeRecord(place.trackId, place.chapterId, id);
      return item && item.section === sectionId;
    });
    if (previous && window.confirm("カードを前の子チャプターへ移します。残すカードがない場合も、この区分だけ消します。")) {
      ids.forEach(id => retagSection(id, previous.id));
    } else if (window.confirm("この子チャプターと、中のカードを削除します。")) {
      ids.forEach(id => GuideApp.dropCard(id));
    } else return;
    storeSections(place.trackId, place.chapterId, sections.filter(item => item.id !== sectionId));
  }

  function retagSection(id, sectionId) {
    const place = locate(id);
    const item = place && routeRecord(place.trackId, place.chapterId, id);
    if (!item) return;
    const base = GuideApp.findBaseRoute(id);
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(), base && base.item, id, cardFields(Object.assign({}, item, { section: sectionId }), item.parent || ""),
      place.trackId, place.chapterId, GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    ));
  }

  function openChapterEdit(trackId, chapterId) {
    const list = GuideApp.chapterList(trackId);
    const chapter = list.find(item => item.id === chapterId);
    if (!chapter) return;
    editing = { chapterEdit: true, trackId, chapterId };
    document.getElementById("card-edit-title").textContent = "チャプター";
    document.getElementById("card-edit-id").textContent = chapter.id;
    fields.innerHTML = tabbedFields([
      { id: "main", label: "メイン", body: field("名前", `<input name="title" value="${escapeAttr(chapter.title || "")}">`) }
    ]);
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
    showEditorTab("main");
    if (form.elements.title) form.elements.title.focus();
  }

  function saveChapterEdit() {
    const title = GuideProgress.toHalfWidth(new FormData(form).get("title") || "").trim();
    if (!title) {
      error.textContent = "名前が空です。";
      return;
    }
    const list = GuideApp.chapterList(editing.trackId);
    const next = JSON.parse(JSON.stringify(book()));
    next.chapterLists = Object.assign({}, next.chapterLists, {
      [editing.trackId]: GuideProgress.renameChapter(list, editing.chapterId, title)
    });
    dialog.hidden = true;
    GuideApp.setCardBook(next, "チャプター");
  }

  function openEnemyForm(seed) {
    const enemy = seed || {};
    editing = {
      kind: "enemy",
      id: enemy.id || "",
      insertAfter: enemy.insertAfter || "",
      enemyKind: enemy.kind || enemy.enemyKind || "normal"
    };
    document.getElementById("card-edit-title").textContent = enemy.id ? "エネミーを直す" : "エネミーを追加";
    document.getElementById("card-edit-id").textContent = enemy.id || "IDは保存時に付きます。";
    const kind = editing.enemyKind;
    fields.innerHTML = [
      field("名前", `<input name="name" required value="${escapeAttr(enemy.name || "")}">`),
      field("番号", `<input name="no" value="${escapeAttr(enemy.no || "")}">`),
      field("種類", `<select name="enemyKind"><option value="normal"${kind === "normal" ? " selected" : ""}>通常</option><option value="boss"${kind === "boss" ? " selected" : ""}>ボス</option><option value="summon"${kind === "summon" ? " selected" : ""}>召喚</option></select>`),
      field("攻略", `<textarea name="tactic">${escapeText(enemy.tactic || "")}</textarea>`),
      field("出典", `<input name="source" value="${escapeAttr(enemy.source || "")}">`)
    ].join("");
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
  }

  function saveEnemy() {
    const data = new FormData(form);
    const name = GuideProgress.toHalfWidth(data.get("name") || "").trim();
    if (!name) {
      error.textContent = "名前が空です。";
      return;
    }
    const source = String(data.get("source") || "").trim();
    if (source && !/^https:\/\//i.test(source)) {
      error.textContent = "出典は https:// から始めるか、空にします。";
      return;
    }
    const id = editing.id || GuideProgress.createCardId(usedIds());
    const base = (globalThis.ENEMIES || []).find(item => item.id === id) || null;
    const ids = GuideApp.currentEnemyIds();
    dialog.hidden = true;
    GuideApp.setCardBook(GuideProgress.upsertEnemy(book(), base, id, {
      name: name,
      no: GuideProgress.toHalfWidth(data.get("no") || "").trim(),
      kind: data.get("enemyKind") || "normal",
      tactic: GuideProgress.toHalfWidth(data.get("tactic") || "").trim(),
      source: source,
      image: base && base.image || "",
      insertAfter: editing.insertAfter || ""
    }, ids), "エネミー");
  }

  function openSectionEdit(sectionId) {
    const place = sectionPlace(sectionId);
    if (!place) return;
    const section = chapterSections(place.trackId, place.chapterId).find(item => item.id === sectionId);
    if (!section) return;
    editing = { sectionEdit: true, sectionId, trackId: place.trackId, chapterId: place.chapterId };
    const colors = GuideProgress.calloutColors(book(), section);
    document.getElementById("card-edit-title").textContent = "小見出し";
    document.getElementById("card-edit-id").textContent = section.id;
    fields.innerHTML = tabbedFields([
      { id: "main", label: "メイン", body: [
        field("区分名", `<input name="title" value="${escapeAttr(GuideProgress.sectionName(section.title))}" placeholder="区分名を入力">`),
        field("小見出し", `<textarea name="note">${escapeText(section.note || "")}</textarea>`),
        field("背景", `<input name="bg" type="color" value="${escapeAttr(colors.bg)}">`),
        field("枠", `<input name="border" type="color" value="${escapeAttr(colors.border)}">`)
      ].join("") },
      { id: "map", label: "MAP", body: mapFields(section.map || "") }
    ]);
    bindMapField();
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
    showEditorTab(rememberedChapterTab());
    if (fields.querySelector('[data-tab-panel="main"]:not([hidden])') && form.elements.title) form.elements.title.focus();
  }

  function saveSectionEdit() {
    const sections = chapterSections(editing.trackId, editing.chapterId);
    const section = sections.find(item => item.id === editing.sectionId);
    if (!section) return;
    const data = new FormData(form);
    const globalColors = GuideProgress.calloutColors(book(), null);
    section.title = GuideProgress.toHalfWidth(data.get("title") || "").trim() || section.title;
    section.note = GuideProgress.toHalfWidth(data.get("note") || "").trim();
    const nextBg = String(data.get("bg") || "");
    const nextBorder = String(data.get("border") || "");
    section.bg = nextBg && nextBg.toLowerCase() !== globalColors.bg ? nextBg : "";
    section.border = nextBorder && nextBorder.toLowerCase() !== globalColors.border ? nextBorder : "";
    const previousMap = section.map || "";
    section.map = chosenMap();
    dialog.hidden = true;
    storeSections(editing.trackId, editing.chapterId, sections);
    if (previousMap && previousMap !== section.map) {
      const row = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[editing.trackId] || [], book(), editing.trackId) || []).find(item => item.chapterId === editing.chapterId);
      (row && row.items || []).forEach(item => {
        if (item.section === section.id && item.map === previousMap) retagMap(item.id, "");
      });
    }
  }

  function retagMap(id, map) {
    const place = locate(id);
    const item = place && routeRecord(place.trackId, place.chapterId, id);
    if (!item || (item.map || "") === (map || "")) return;
    const base = GuideApp.findBaseRoute(id);
    const fields = cardFields(item, item.parent || "");
    fields.map = map || "";
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(), base && base.item, id, fields, place.trackId, place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    ));
  }

  function openCardMap(id) {
    const place = locate(id);
    const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
    if (!item) return;
    editing = Object.assign({ kind: "route", mapOnly: true, trackId: place.trackId, chapterId: place.chapterId }, item);
    document.getElementById("card-edit-title").textContent = "地図を変える";
    document.getElementById("card-edit-id").textContent = item.title || id;
    const sections = chapterSections(place.trackId, place.chapterId);
    const section = sections.find(entry => entry.id === item.section);
    const own = item.map && (!section || item.map !== section.map) ? item.map : "";
    fields.innerHTML = "<p>空のまま保存すると、子チャプターの地図を使います。ここに入れた地図だけ、このカード専用になります。</p>" + mapFields(own);
    bindMapField();
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
  }

  function saveMapOnly() {
    const place = { trackId: editing.trackId, chapterId: editing.chapterId };
    const item = routeRecord(place.trackId, place.chapterId, editing.id);
    if (!item) return;
    const base = GuideApp.findBaseRoute(editing.id);
    const fields = cardFields(item, item.parent || "");
    const sections = chapterSections(place.trackId, place.chapterId);
    const section = sections.find(entry => entry.id === item.section);
    const chosen = chosenMap();
    fields.map = section && chosen === section.map ? "" : chosen;
    dialog.hidden = true;
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(), base && base.item, editing.id, fields, place.trackId, place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    ));
  }

  function duplicateCard(id) {
    const place = locate(id);
    const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
    if (!item) return;
    const orderIds = GuideApp.currentIds(place.trackId, place.chapterId);
    const items = orderIds.map(cid => routeRecord(place.trackId, place.chapterId, cid)).filter(Boolean);
    const plan = GuideProgress.planCardCopy(orderIds, items, id, true);
    if (!plan) return;
    const taken = usedIds();
    const idMap = {};
    plan.sources.forEach(sourceId => {
      idMap[sourceId] = GuideProgress.createCardId(taken);
      taken.add(idMap[sourceId]);
    });
    const order = orderIds.slice();
    order.splice(plan.anchor, 0, ...plan.sources.map(sourceId => idMap[sourceId]));
    const baseIds = GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id);
    let next = book();
    plan.sources.forEach(sourceId => {
      const source = items.find(entry => entry.id === sourceId);
      const parent = idMap[plan.parents[sourceId]] || plan.parents[sourceId] || "";
      next = GuideProgress.upsertRouteCard(next, null, idMap[sourceId], cardFields(source, parent), place.trackId, place.chapterId, order, baseIds);
    });
    GuideApp.setCardBook(next, "カードのコピー");
    const created = routeRecord(place.trackId, place.chapterId, idMap[id]);
    if (created) openRouteForm(Object.assign({ kind: "route", id: idMap[id], trackId: place.trackId, chapterId: place.chapterId }, created));
  }

  function headerCopy(id) {
    const place = locate(id);
    const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
    if (!item) return;
    const orderIds = GuideApp.currentIds(place.trackId, place.chapterId);
    const items = orderIds.map(cid => routeRecord(place.trackId, place.chapterId, cid)).filter(Boolean);
    const plan = GuideProgress.planCardCopy(orderIds, items, id, false);
    if (!plan) return;
    const newId = GuideProgress.createCardId(usedIds());
    const order = orderIds.slice();
    order.splice(plan.anchor, 0, newId);
    const fields = GuideProgress.headerCopyFields(item);
    fields.parent = plan.parents[id] || "";
    const next = GuideProgress.upsertRouteCard(
      book(), null, newId, fields,
      place.trackId, place.chapterId, order,
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    );
    GuideApp.setCardBook(next, "見出しコピー");
    revealCard(place.trackId, place.chapterId, newId);
  }

  function openCardMenu(id, x, y) {
    let menu = document.getElementById("card-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.id = "card-menu";
      menu.setAttribute("role", "menu");
      document.body.appendChild(menu);
    }
    menu.innerHTML = `<button type="button" data-menu-copy="${escapeAttr(id)}">コピー</button><button type="button" data-menu-head="${escapeAttr(id)}">見出しコピー</button>`;
    menu.hidden = false;
    menu.style.left = Math.max(8, Math.min(x, window.innerWidth - 180)) + "px";
    menu.style.top = Math.max(8, Math.min(y, window.innerHeight - 100)) + "px";
  }

  function closeCardMenu() {
    const menu = document.getElementById("card-menu");
    if (menu) menu.remove();
  }

  document.addEventListener("dblclick", event => {
    if (!document.body.classList.contains("is-card-edit")) return;
    const block = event.target.closest && event.target.closest("[data-bpath]");
    const host = block && block.closest("article.it[data-id]");
    if (block && host && !event.target.closest(".map-open, .blk-resize, .blk-split")) {
      event.preventDefault();
      event.stopPropagation();
      const id = host.getAttribute("data-id");
      const place = locate(id);
      const item = place && place.kind === "route" ? routeRecord(place.trackId, place.chapterId, id) : null;
      if (!item) return;
      openRouteForm(Object.assign({ kind: "route", id, trackId: place.trackId, chapterId: place.chapterId, focusBlock: block.getAttribute("data-bpath") }, item));
      return;
    }
    const button = event.target.closest && event.target.closest(".map-open");
    if (button) {
      event.preventDefault();
      event.stopPropagation();
      const owner = button.getAttribute("data-map-owner");
      const ownerId = button.getAttribute("data-owner-id");
      if (owner === "section") openSectionEdit(ownerId);
      else openCardMap(ownerId);
      return;
    }
    const chapterTitle = event.target.closest && event.target.closest(".cht");
    if (chapterTitle) {
      const section = chapterTitle.closest("section.ch");
      if (section) {
        event.preventDefault();
        openChapterEdit(section.getAttribute("data-card-track"), section.getAttribute("data-chapter"));
        return;
      }
    }
    const subhead = event.target.closest && event.target.closest(".subhead-callout, .subch-name");
    if (subhead) {
      const section = subhead.closest("[data-section]");
      if (section) {
        event.preventDefault();
        openSectionEdit(section.getAttribute("data-section"));
        return;
      }
    }
    const enemyRow = event.target.closest && event.target.closest(".enemy-row[data-id], .enemy-page[data-id]");
    if (enemyRow) {
      event.preventDefault();
      const enemy = GuideProgress.mergeEnemies(globalThis.ENEMIES || [], book()).find(item => item.id === enemyRow.getAttribute("data-id"));
      if (enemy) openEnemyForm(enemy);
      return;
    }
    const row = event.target.closest && event.target.closest("tr[data-id], article.quest[data-id], article.materia-block[data-id]");
    if (row && !event.target.closest(".card-edit-tools, a, input, textarea, select")) {
      const id = row.getAttribute("data-id");
      const place = locate(id);
      if (place && place.kind === "catalog") {
        event.preventDefault();
        const item = catalogRecord(place.catalogId, id);
        if (item) openCatalogForm(Object.assign({ kind: "catalog", catalogId: place.catalogId, id }, item));
        return;
      }
    }
    if (event.target.closest("button, a, input, textarea, select")) return;
    const card = event.target.closest("article.it[data-id], article.quest[data-id]");
    if (!card) return;
    const id = card.getAttribute("data-id");
    const place = locate(id);
    if (!place) return;
    if (place.kind === "catalog") {
      const item = catalogRecord(place.catalogId, id);
      if (!item) return;
      event.preventDefault();
      openCatalogForm(Object.assign({ kind: "catalog", catalogId: place.catalogId, id }, item));
      return;
    }
    if (place.kind !== "route") return;
    const item = routeRecord(place.trackId, place.chapterId, id);
    if (!item) return;
    event.preventDefault();
    openRouteForm(Object.assign({ kind: "route", id, trackId: place.trackId, chapterId: place.chapterId }, item));
  });

  function clearDragVisuals() {
    document.body.classList.remove("is-card-dragging");
    document.querySelectorAll("article.it.is-dragging, article.it.is-nest-drop, section.ch.is-chapter-drop").forEach(node => {
      node.classList.remove("is-dragging", "is-chapter-drop", "is-nest-drop");
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
    document.querySelectorAll("section.ch.is-chapter-drop, article.it.is-nest-drop, article.it.is-nest-blocked").forEach(node => node.classList.remove("is-chapter-drop", "is-nest-drop", "is-nest-blocked"));
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
    if (target.type === "nest") target.element.classList.add("is-nest-drop");
    if (target.type === "blocked") target.element.classList.add("is-nest-blocked");
    const rect = anchor.getBoundingClientRect();
    const indented = target.type === "nest" || target.type === "blocked";
    const top = target.type === "chapter" || target.after ? rect.bottom : (indented ? rect.bottom - 4 : rect.top);
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
    const inset = indented ? 36 : 0;
    line.className = target.type === "blocked" ? "is-blocked" : (target.type === "nest" ? "is-nest" : "");
    line.style.top = top + "px";
    line.style.left = (rect.left + inset) + "px";
    line.style.width = Math.max(48, rect.width - inset) + "px";
    label.textContent = target.type === "nest" ? "このカードの中へ" : target.type === "blocked" ? "入れ子にできません" : target.type === "chapter" ? "この章の末尾へ" : (target.unnest ? "外に出す" : "ここに置く");
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
        const ratio = rect.height ? (y - rect.top) / rect.height : 1;
        const targetId = card.getAttribute("data-id");
        if (from.kind !== "route") {
          return { type: "card", id: targetId, after: ratio >= 0.5, element: card };
        }
        const edge = ratio < 0.22 || ratio > 0.78;
        const draggedRight = drag.x - drag.startX > 28;
        const draggedLeft = drag.startX - drag.x > 28;
        const indented = !draggedLeft && (draggedRight || x >= rect.left + 48);
        const targetItem = routeRecord(to.trackId, to.chapterId, targetId);
        const targetIsChild = !!(targetItem && targetItem.parent);
        const movingHasChildren = cardHasChildren(from.trackId, from.chapterId, drag.id);
        if (drag.ids && drag.ids.length > 1) {
          if (!edge && indented) {
            const anyKids = drag.ids.some(itemId => cardHasChildren(from.trackId, from.chapterId, itemId));
            if (targetIsChild || anyKids || drag.ids.indexOf(targetId) >= 0) return { type: "blocked", id: targetId, element: card };
            return { type: "nest", id: targetId, element: card };
          }
          return { type: "card", id: targetId, after: ratio >= 0.5, unnest: draggedLeft, element: card };
        }
        if (!edge && indented) {
          if (targetIsChild || movingHasChildren || targetId === drag.id) {
            return { type: "blocked", id: targetId, element: card };
          }
          return { type: "nest", id: targetId, element: card };
        }
        return { type: "card", id: targetId, after: ratio >= 0.5, unnest: draggedLeft, element: card };
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

  function cardFields(item, parentId) {
    return {
      title: item.title || "",
      detail: item.detail || "",
      flag: (GuideProgress.cardFlags(item)[0]) || item.flag,
      flags: GuideProgress.cardFlags(item),
      enemies: item.enemies || [],
      enemyNote: item.enemyNote || "",
      enemyImage: item.enemyImage || "",
      deadline: item.deadline || "",
      source: item.source || "",
      trophy: item.trophy || "",
      map: item.map || "",
      parent: parentId || "",
      quest: item.quest || "",
      section: item.section || "",
      template: item.template || "",
      location: item.location || "",
      items: item.items || [],
      blocks: item.blocks && item.blocks.length ? item.blocks : GuideProgress.blocksFromDetail(item.detail)
    };
  }

  function nestGroup(ids, targetId) {
    const placed = GuideProgress.nestMany(ids, chapterItems(ids[0]), targetId);
    const to = locate(targetId);
    const from = locate(ids[0]);
    if (!placed || !to || !from) return;
    let next = book();
    const known = GuideApp.baseItems(to.trackId, to.chapterId).map(item => item.id);
    ids.forEach(id => {
      const item = routeRecord(from.trackId, from.chapterId, id);
      if (!item || !placed.parents[id]) return;
      const base = GuideApp.findBaseRoute(id);
      next = GuideProgress.upsertRouteCard(
        next, base && base.item, id, cardFields(item, placed.parents[id]),
        to.trackId, to.chapterId, placed.order, known
      );
    });
    clearSelect();
    GuideApp.setCardBook(next, "入れ子");
    revealCard(to.trackId, to.chapterId, targetId);
  }

  function chapterItems(id) {
    const place = locate(id);
    if (!place) return [];
    const row = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[place.trackId] || [], book(), place.trackId) || []).find(item => item.chapterId === place.chapterId);
    return row && row.items || [];
  }

  function nestRoute(id, from, targetId) {
    const to = locate(targetId);
    if (!to || to.kind !== "route" || targetId === id) return;
    const moving = routeRecord(from.trackId, from.chapterId, id);
    const target = routeRecord(to.trackId, to.chapterId, targetId);
    if (!moving || !target || target.parent) return;
    const homeRows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[from.trackId] || [], book(), from.trackId) || [];
    const home = homeRows.find(row => row.chapterId === from.chapterId);
    if (home && (home.items || []).some(item => item.parent === id)) return;
    const parentId = target.parent || targetId;
    if (parentId === id) return;
    let ids = GuideApp.currentIds(to.trackId, to.chapterId).filter(item => item !== id);
    const atParent = ids.indexOf(parentId);
    let insertAt = atParent < 0 ? ids.length : atParent + 1;
    const destRows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[to.trackId] || [], book(), to.trackId) || [];
    const dest = destRows.find(row => row.chapterId === to.chapterId);
    const siblings = ((dest && dest.items) || []).filter(item => item.parent === parentId && item.id !== id).map(item => item.id);
    for (const sibling of siblings) {
      const pos = ids.indexOf(sibling);
      if (pos >= insertAt) insertAt = pos + 1;
    }
    ids.splice(insertAt, 0, id);
    let next = book();
    if (from.trackId !== to.trackId || from.chapterId !== to.chapterId) {
      const fromIds = GuideApp.currentIds(from.trackId, from.chapterId).filter(item => item !== id);
      next = GuideProgress.saveOrder(next, from.trackId + ":" + from.chapterId, fromIds, GuideApp.baseItems(from.trackId, from.chapterId).map(item => item.id));
      if (next.custom[id] && next.custom[id].kind === "route") {
        next.custom[id].trackId = to.trackId;
        next.custom[id].chapterId = to.chapterId;
      }
    }
    const base = GuideApp.findBaseRoute(id);
    next = GuideProgress.upsertRouteCard(
      next,
      base && base.item,
      id,
      cardFields(moving, parentId),
      to.trackId,
      to.chapterId,
      ids,
      GuideApp.baseItems(to.trackId, to.chapterId).map(item => item.id)
    );
    GuideApp.setCardBook(next, "入れ子");
    revealCard(to.trackId, to.chapterId, id);
  }

  function cardHasChildren(trackId, chapterId, id) {
    const rows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[trackId] || [], book(), trackId) || [];
    const row = rows.find(item => item.chapterId === chapterId);
    return !!row && (row.items || []).some(item => item.parent === id);
  }

  function setParent(id, parentId) {
    const place = locate(id);
    if (!place || place.kind !== "route") return;
    const moving = routeRecord(place.trackId, place.chapterId, id);
    if (!moving || (moving.parent || "") === (parentId || "")) return;
    const base = GuideApp.findBaseRoute(id);
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(),
      base && base.item,
      id,
      cardFields(moving, parentId),
      place.trackId,
      place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(item => item.id)
    ));
  }

  function alignParent(id, neighborId) {
    const place = locate(id);
    const neighborPlace = locate(neighborId);
    if (!place || !neighborPlace || place.kind !== "route") return;
    const moving = routeRecord(place.trackId, place.chapterId, id);
    const neighbor = routeRecord(neighborPlace.trackId, neighborPlace.chapterId, neighborId);
    if (!moving || !neighbor) return;
    const parentId = neighbor.parent || "";
    if ((moving.parent || "") === parentId) return;
    const base = GuideApp.findBaseRoute(id);
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(),
      base && base.item,
      id,
      cardFields(moving, parentId),
      place.trackId,
      place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(item => item.id)
    ));
  }

  function groupIds(id) {
    const from = locate(id);
    if (!from || from.kind !== "route" || !GuideSelect.has(id) || GuideSelect.size < 2) return [id];
    const row = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[from.trackId] || [], book(), from.trackId) || []).find(item => item.chapterId === from.chapterId);
    const items = row && row.items || [];
    const picked = items.map(item => item.id).filter(itemId => GuideSelect.has(itemId));
    if (picked.length < 2) return [id];
    return GuideProgress.withChildIds(picked, items);
  }

  function commitGroup(current, ids) {
    const target = current.target;
    const from = locate(current.id);
    if (!from || from.kind !== "route" || target.type === "blocked") return;
    let trackId = from.trackId;
    let chapterId = from.chapterId;
    let beforeId = null;
    let after = false;
    let sectionId = "";
    let neighborParent = null;
    let unnest = false;
    if (target.type === "card" || target.type === "nest") {
      const to = locate(target.id);
      if (!to || to.kind !== "route") return;
      trackId = to.trackId;
      chapterId = to.chapterId;
      beforeId = target.id;
      after = target.type === "nest" ? true : !!target.after;
      unnest = !!target.unnest;
      const neighbor = routeRecord(trackId, chapterId, target.id);
      sectionId = neighbor && neighbor.section || "";
      neighborParent = neighbor && neighbor.parent || "";
    } else if (target.type === "chapter" && target.trackId && target.chapterId) {
      trackId = target.trackId;
      chapterId = target.chapterId;
      const sections = chapterSections(trackId, chapterId);
      sectionId = sections.length ? sections[sections.length - 1].id : "";
    } else return;
    const sourceRow = (GuideProgress.mergeTrack(ROUTE, GAME.chapters[from.trackId] || [], book(), from.trackId) || []).find(item => item.chapterId === from.chapterId);
    const sourceItems = sourceRow && sourceRow.items || [];
    const moving = GuideProgress.withChildIds(ids, sourceItems).filter(itemId => itemId !== beforeId);
    if (!moving.length) return;
    const same = from.trackId === trackId && from.chapterId === chapterId;
    const sourceOrder = GuideApp.currentIds(from.trackId, from.chapterId);
    const destOrder = same ? sourceOrder : GuideApp.currentIds(trackId, chapterId);
    const nextOrder = GuideProgress.orderInsertGroup(same ? sourceOrder : destOrder.concat(moving), moving, beforeId, after);
    let next = book();
    if (!same) {
      next = GuideProgress.saveOrder(
        next,
        from.trackId + ":" + from.chapterId,
        sourceOrder.filter(itemId => moving.indexOf(itemId) < 0),
        GuideApp.baseItems(from.trackId, from.chapterId).map(item => item.id)
      );
    }
    const known = GuideApp.baseItems(trackId, chapterId).map(item => item.id);
    moving.forEach(itemId => {
      const item = sourceItems.find(entry => entry.id === itemId) || routeRecord(trackId, chapterId, itemId);
      if (!item) return;
      const hasKids = sourceItems.some(entry => entry.parent === itemId);
      let parent = item.parent || "";
      if (moving.indexOf(parent) >= 0) parent = item.parent || "";
      else if (unnest) parent = "";
      else if (neighborParent !== null) parent = hasKids && neighborParent ? "" : neighborParent;
      else if (parent && !same) parent = "";
      const base = GuideApp.findBaseRoute(itemId);
      if (next.custom[itemId] && next.custom[itemId].kind === "route") {
        next.custom[itemId].trackId = trackId;
        next.custom[itemId].chapterId = chapterId;
      }
      next = GuideProgress.upsertRouteCard(
        next, base && base.item, itemId,
        cardFields(Object.assign({}, item, { section: sectionId || item.section || "" }), parent),
        trackId, chapterId, nextOrder, known
      );
    });
    clearSelect();
    GuideApp.setCardBook(next);
  }

  function commitDrag(current) {
    const target = current && current.target;
    if (!target) return;
    const id = current.id;
    const from = locate(id);
    if (!from) return;
    if (current.ids && current.ids.length > 1 && from.kind === "route") {
      if (target.type === "nest") {
        nestGroup(current.ids, target.id);
        return;
      }
      commitGroup(current, current.ids);
      return;
    }
    if (target.type === "blocked") return;
    if (target.type === "nest" && from.kind === "route") {
      nestRoute(id, from, target.id);
      return;
    }
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
      const neighbor = routeRecord(to.trackId, to.chapterId, target.id);
      if (neighbor && neighbor.section) retagSection(id, neighbor.section);
      if (target.unnest) setParent(id, "");
      else alignParent(id, target.id);
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
    const dragId = card.getAttribute("data-id");
    const ids = groupIds(dragId);
    drag = {
      id: dragId,
      ids: ids,
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
    ids.forEach(itemId => {
      const node = document.querySelector('article.it[data-id="' + (window.CSS && CSS.escape ? CSS.escape(itemId) : itemId) + '"]');
      if (node) node.classList.add("is-dragging");
    });
    const ghost = document.createElement("div");
    ghost.id = "card-drag-ghost";
    const title = card.querySelector(".it-title");
    ghost.textContent = title ? title.textContent : drag.id;
    if (ids.length > 1) {
      const badge = document.createElement("span");
      badge.className = "drag-count";
      badge.textContent = String(ids.length);
      ghost.appendChild(badge);
    }
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

  let itemComposing = false;
  dialog.addEventListener("compositionstart", event => {
    if (event.target && event.target.id === "item-picker-q") itemComposing = true;
  });
  dialog.addEventListener("compositionend", event => {
    if (!event.target || event.target.id !== "item-picker-q") return;
    itemComposing = false;
    pickerState.query = event.target.value;
    refreshItemResults();
  });
  dialog.addEventListener("input", event => {
    if (!event.target) return;
    if (event.target.id === "item-picker-q") {
      pickerState.query = event.target.value;
      if (!itemComposing) refreshItemResults();
    }
    if (event.target.id === "item-picker-qty") pickerState.qty = event.target.value;
    if (event.target.id === "item-picker-hub") {
      pickerState.hub = event.target.value;
      refreshItemResults();
    }
  });
  dialog.addEventListener("change", event => {
    if (event.target && event.target.id === "item-picker-hub") {
      pickerState.hub = event.target.value;
      refreshItemResults();
    }
  });
  dialog.addEventListener("click", event => {
    const pick = event.target.closest && event.target.closest("[data-link-pick]");
    if (pick && editing) {
      pickerState.selected = pick.getAttribute("data-link-pick");
      const hub = document.getElementById("item-picker-hub");
      const query = document.getElementById("item-picker-q");
      if (hub) pickerState.hub = hub.value;
      if (query) pickerState.query = query.value;
      refreshItemResults();
      return;
    }
    if (event.target && event.target.id === "item-picker-add" && editing) {
      const id = pickerState.selected;
      if (!id) {
        error.textContent = "先にアイテムを選んでください。";
        return;
      }
      const qty = Math.max(1, Math.min(99, Number(pickerState.qty || (document.getElementById("item-picker-qty") || {}).value) || 1));
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

  function mergedCatalogs() {
    return GuideProgress.exportCatalogs(globalThis.CATALOGS, book());
  }

  function rejectPartialCatalogs(route, catalogs) {
    const errors = GuideProgress.validateExportBundle(route, catalogs, globalThis.CATALOGS).concat(GuideProgress.validateEnemies(GuideProgress.exportEnemies(globalThis.ENEMIES || [], book())));
    if (!errors.length) return;
    throw new Error("書き出せません。台帳が欠けています。\n" + errors.slice(0, 8).join("\n"));
  }

  function collectDataUrls(route, catalogs) {
    const urls = [];
    const seen = new Set();
    const take = value => {
      if (value && /^data:image\//i.test(value) && !seen.has(value)) {
        seen.add(value);
        urls.push(value);
      }
    };
    for (const trackId of Object.keys(route || {})) {
      for (const row of route[trackId] || []) {
        for (const item of row.items || []) take(item && item.map);
      }
    }
    for (const name of Object.keys(catalogs || {})) {
      for (const item of (catalogs[name].items || [])) take(item && item.map);
    }
    return urls;
  }

  async function hashDataUrl(dataUrl) {
    const payload = String(dataUrl).split(",")[1] || "";
    const binary = atob(payload);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest)).map(part => part.toString(16).padStart(2, "0")).join("");
  }

  function dataUrlBlob(dataUrl) {
    const match = String(dataUrl).match(/^data:(image\/(?:png|jpeg|gif|webp));base64,([\s\S]*)$/i);
    if (!match) return null;
    const binary = atob(match[2]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: match[1] });
  }

  function mapExt(dataUrl) {
    const type = (String(dataUrl).match(/^data:image\/(png|jpeg|gif|webp)/i) || [])[1] || "png";
    return type.toLowerCase() === "jpeg" ? "jpg" : type.toLowerCase();
  }

  async function prepareMaps(route, catalogs) {
    const urls = collectDataUrls(route, catalogs);
    let manifest = repoMaps().map(item => Object.assign({}, item));
    const lookup = {};
    const fresh = [];
    for (const url of urls) {
      const hash = await hashDataUrl(url);
      const assigned = GuideProgress.assignMapFile(hash, mapExt(url), manifest);
      manifest = assigned.manifest;
      lookup[url] = assigned.file;
      if (assigned.added) fresh.push({ file: assigned.file, blob: dataUrlBlob(url) });
    }
    const replaced = GuideProgress.replaceMapValues(route, catalogs, lookup);
    return { route: replaced.route, catalogs: replaced.catalogs, manifest, fresh };
  }

  function collectBlockUrls(route) {
    const urls = [];
    const seen = new Set();
    const take = src => {
      if (!src || !/^data:image\//i.test(src) || seen.has(src)) return;
      seen.add(src);
      urls.push(src);
    };
    const walk = blocks => {
      (blocks || []).forEach(block => {
        if (!block) return;
        if (block.type === "image") take(block.src);
        if (block.type === "tiles") (block.items || []).forEach(item => take(item && item.src));
        if (block.type === "columns") (block.columns || []).forEach(walk);
      });
    };
    for (const trackId of Object.keys(route || {})) {
      for (const row of route[trackId] || []) {
        for (const item of row.items || []) walk(item && item.blocks);
      }
    }
    return urls;
  }

  async function prepareImages(route) {
    const urls = collectBlockUrls(route);
    let manifest = (globalThis.IMAGE_FILES || []).map(item => Object.assign({}, item));
    const lookup = {};
    const fresh = [];
    for (const url of urls) {
      const hash = await hashDataUrl(url);
      const assigned = GuideProgress.assignImageFile(hash, mapExt(url), manifest);
      manifest = assigned.manifest;
      lookup[url] = assigned.file;
      if (assigned.added) fresh.push({ file: assigned.file, blob: dataUrlBlob(url) });
    }
    const replaced = GuideProgress.replaceMapValues(route, {}, lookup);
    return { route: replaced.route, manifest, fresh };
  }

  async function exportChosen(flags) {
    const prepared = await prepareMaps(GuideProgress.mergedRoute(ROUTE, GAME.chapters, book()), mergedCatalogs());
    if (flags.catalog) rejectPartialCatalogs(prepared.route, prepared.catalogs);
    const images = await prepareImages(prepared.route);
    prepared.route = images.route;
    if (flags.route) download("data-route.js", GuideProgress.routeModuleSource(prepared.route), "text/javascript");
    if (flags.catalog) {
      download("data-catalogs.js", GuideProgress.catalogsModuleSource(prepared.catalogs), "text/javascript");
      const enemies = GuideProgress.exportEnemies(globalThis.ENEMIES || [], book());
      const enemyErrors = GuideProgress.validateEnemies(enemies);
      if (enemyErrors.length) throw new Error(enemyErrors.slice(0, 4).join("\n"));
      download("data-enemies.js", GuideProgress.enemiesModuleSource(enemies), "text/javascript");
    }
    if (flags.json) download("ff7r-card-edits.json", JSON.stringify({ app: GuideProgress.APP, cards: book() }, null, 2), "application/json");
    if (flags.templates) {
      const templates = GuideProgress.activeTemplates(book(), globalThis.TEMPLATES);
      download("templates.js", "const TEMPLATES = " + JSON.stringify(templates, null, 2) + ";\n\nglobalThis.TEMPLATES = TEMPLATES;\n", "text/javascript");
    }
    if (flags.text && globalThis.GuideText) download("ff7r-text-edits.json", JSON.stringify(GuideText.payload(), null, 2), "application/json");
    if (flags.settings) {
      download("ff7r-settings.json", JSON.stringify({
        app: GuideProgress.APP,
        labels: book().labels || {},
        difficulty: book().difficulty || "normal",
        callout: book().callout || {},
        places: book().places || {},
        templates: GuideProgress.activeTemplates(book(), globalThis.TEMPLATES)
      }, null, 2), "application/json");
    }
    if (flags.images) {
      download("images.js", "const IMAGE_FILES = " + JSON.stringify(images.manifest, null, 2) + ";\n\nglobalThis.IMAGE_FILES = IMAGE_FILES;\n", "text/javascript");
      images.fresh.forEach(item => {
        if (!item.blob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(item.blob);
        link.download = item.file.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 1500);
      });
    }
    if (flags.maps) {
      download("maps.js", "const MAP_FILES = " + JSON.stringify(prepared.manifest, null, 2) + ";\n\nglobalThis.MAP_FILES = MAP_FILES;\n", "text/javascript");
      prepared.fresh.forEach(item => {
        if (!item.blob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(item.blob);
        link.download = item.file.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 1500);
      });
    }
    dialog.hidden = true;
    const submit = form.querySelector("[type=submit]");
    if (submit) submit.textContent = "保存";
  }

  function openChooser(title, body, onOk, label) {
    editing = { chooser: true, onOk: onOk };
    document.getElementById("card-edit-title").textContent = title;
    document.getElementById("card-edit-id").textContent = "";
    fields.innerHTML = body;
    error.textContent = "";
    const submit = form.querySelector("[type=submit]");
    if (submit) submit.textContent = label || "書き出す";
    dialog.hidden = false;
    captureBaseline();
  }
  function closeOnly() { dialog.hidden = true; }

  let layoutDrag = null;
  let edgeScrollOn = false;

  function edgeDelta(clientY, top, bottom) {
    const margin = 72;
    const maxSpeed = 26;
    if (clientY < top + margin) return -Math.max(1, Math.ceil((1 - Math.max(0, clientY - top) / margin) * maxSpeed));
    if (clientY > bottom - margin) return Math.max(1, Math.ceil((1 - Math.max(0, bottom - clientY) / margin) * maxSpeed));
    return 0;
  }

  function scrollNearPointer(clientY) {
    const windowDelta = edgeDelta(clientY, 0, window.innerHeight);
    if (windowDelta) window.scrollBy(0, windowDelta);
    const scroller = document.getElementById("card-edit-fields");
    if (!scroller) return;
    const rect = scroller.getBoundingClientRect();
    const inner = edgeDelta(clientY, rect.top, rect.bottom);
    if (inner) scroller.scrollTop += inner;
  }

  function startEdgeScroll(active) {
    if (edgeScrollOn) return;
    edgeScrollOn = true;
    const step = () => {
      const state = active();
      if (!state) {
        edgeScrollOn = false;
        return;
      }
      if (state.moved !== false && typeof state.y === "number") scrollNearPointer(state.y);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function clearLayoutMarks() {
    document.querySelectorAll(".is-drop-before,.is-drop-after,.is-drop-left,.is-drop-right").forEach(node => {
      node.classList.remove("is-drop-before", "is-drop-after", "is-drop-left", "is-drop-right");
    });
  }

  function removeLayoutGhost() {
    const ghost = document.getElementById("layout-ghost");
    if (ghost) ghost.remove();
  }

  function placeLayoutGhost(node, x, y) {
    let ghost = document.getElementById("layout-ghost");
    if (!ghost) {
      ghost = node.cloneNode(true);
      ghost.id = "layout-ghost";
      ghost.querySelectorAll("[id]").forEach(item => item.removeAttribute("id"));
      document.body.appendChild(ghost);
    }
    const width = Math.min(Math.max(node.getBoundingClientRect().width, 120), 360);
    ghost.style.width = width + "px";
    ghost.style.left = Math.round(x + 14) + "px";
    ghost.style.top = Math.round(y + 14) + "px";
  }

  function markLayoutDrop(card, clientX, clientY) {
    clearLayoutMarks();
    const hit = document.elementFromPoint(clientX, clientY);
    const targetNode = hit && hit.closest && hit.closest("[data-bpath]");
    if (!targetNode || !card.contains(targetNode)) return;
    const path = targetNode.getAttribute("data-bpath");
    if (!path || path === layoutDrag.path) return;
    const rect = targetNode.getBoundingClientRect();
    const rx = rect.width ? (clientX - rect.left) / rect.width : 0.5;
    const ry = rect.height ? (clientY - rect.top) / rect.height : 0.5;
    let side = "after";
    if (rx < 0.28) side = "left";
    else if (rx > 0.72) side = "right";
    else side = ry < 0.5 ? "before" : "after";
    targetNode.classList.add("is-drop-" + side);
    layoutDrag.drop = { path, side };
  }

  function blocksOf(item) {
    const stored = item && item.blocks && item.blocks.length ? item.blocks : GuideProgress.blocksFromDetail(item && item.detail);
    return JSON.parse(JSON.stringify(GuideProgress.normalizeBlocks(stored)));
  }

  function saveLayout(id, blocks) {
    const place = locate(id);
    const item = place && routeRecord(place.trackId, place.chapterId, id);
    if (!place || !item) return;
    const fields = cardFields(item, item.parent || "");
    fields.blocks = blocks;
    const base = GuideApp.findBaseRoute(id);
    GuideApp.setCardBook(GuideProgress.upsertRouteCard(
      book(), base && base.item, id, fields, place.trackId, place.chapterId,
      GuideApp.currentIds(place.trackId, place.chapterId),
      GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id)
    ));
  }

  function takeBlock(blocks, path) {
    const parts = String(path || "").split(".").map(Number);
    if (parts.length === 1) return { list: blocks, index: parts[0], block: blocks[parts[0]] };
    const parent = blocks[parts[0]];
    if (!parent || parent.type !== "columns" || !parent.columns[parts[1]]) return null;
    return { list: parent.columns[parts[1]], index: parts[2], block: parent.columns[parts[1]][parts[2]], parent, parentIndex: parts[0] };
  }

  function tidyColumns(blocks) {
    for (let i = blocks.length - 1; i >= 0; i -= 1) {
      const block = blocks[i];
      if (!block || block.type !== "columns") continue;
      block.columns = (block.columns || []).filter(col => col && col.length);
      if (block.columns.length < 2) {
        blocks.splice(i, 1, ...((block.columns[0]) || []));
        continue;
      }
      block.count = block.columns.length > 2 ? 3 : 2;
      block.arrow = block.arrow === true && block.count === 2;
      const share = Math.round(100 / block.columns.length);
      block.widths = block.columns.map(() => share);
      block.widths[block.widths.length - 1] = 100 - share * (block.columns.length - 1);
    }
  }

  function detachBlock(blocks, path) {
    const spot = takeBlock(blocks, path);
    if (!spot || !spot.block) return null;
    const block = spot.list.splice(spot.index, 1)[0];
    tidyColumns(blocks);
    return block;
  }

  function findHolder(blocks, target) {
    for (let i = 0; i < blocks.length; i += 1) {
      if (blocks[i] === target) return { list: blocks, index: i };
      if (blocks[i] && blocks[i].type === "columns") {
        for (let c = 0; c < blocks[i].columns.length; c += 1) {
          const col = blocks[i].columns[c];
          for (let k = 0; k < col.length; k += 1) {
            if (col[k] === target) return { list: col, index: k, parent: blocks[i] };
          }
        }
      }
    }
    return null;
  }

  function placeBlock(blocks, moving, target, side) {
    if (!moving) return;
    if (!target) {
      blocks.push(moving);
      return;
    }
    const spot = findHolder(blocks, target);
    if (!spot) {
      blocks.push(moving);
      return;
    }
    if (side === "before" || side === "after") {
      spot.list.splice(spot.index + (side === "after" ? 1 : 0), 0, moving);
      return;
    }
    if (spot.parent && spot.parent.columns.length < 3) {
      const at = spot.parent.columns.indexOf(spot.list);
      spot.parent.columns.splice(side === "left" ? at : at + 1, 0, [moving]);
      tidyColumns([spot.parent]);
      return;
    }
    if (!spot.parent && target.type !== "columns") {
      const row = {
        type: "columns",
        count: 2,
        arrow: false,
        widths: [50, 50],
        columns: side === "left" ? [[moving], [target]] : [[target], [moving]]
      };
      spot.list.splice(spot.index, 1, row);
      return;
    }
    spot.list.splice(spot.index + (side === "right" ? 1 : 0), 0, moving);
  }

  document.addEventListener("pointerdown", event => {
    if (!document.body.classList.contains("is-card-edit") || dialog.hidden === false) return;
    if (event.target.closest(".card-drag-handle, a, input, label, #card-edit-root")) return;
    if (event.target.closest("button") && !event.target.closest(".blk-zoom, .blk-resize")) return;
    const resize = event.target.closest(".blk-resize");
    const split = event.target.closest(".blk-split");
    const block = resize || split ? null : event.target.closest("[data-bpath]");
    const handle = resize || split || block;
    if (!handle) return;
    const card = handle.closest("article.it[data-id]");
    if (!card) return;
    try { handle.setPointerCapture(event.pointerId); } catch (error) {}
    layoutDrag = {
      id: card.getAttribute("data-id"),
      path: handle.getAttribute("data-bpath"),
      selected: handle.getAttribute("data-bpath"),
      mode: resize ? "resize" : split ? "split" : "move",
      splitIndex: split ? Number(split.getAttribute("data-split")) : 0,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: event.clientX,
      y: event.clientY,
      moved: false
    };
    if (layoutDrag.mode === "move") startEdgeScroll(() => layoutDrag);
    document.querySelectorAll(".is-layout-selected").forEach(node => node.classList.remove("is-layout-selected"));
    const selected = card.querySelector('[data-bpath="' + (window.CSS && CSS.escape ? CSS.escape(layoutDrag.path) : layoutDrag.path) + '"]');
    if (selected) selected.classList.add("is-layout-selected");
    event.preventDefault();
  }, true);

  document.addEventListener("pointermove", event => {
    if (!layoutDrag) return;
    layoutDrag.x = event.clientX;
    layoutDrag.y = event.clientY;
    if (Math.hypot(event.clientX - layoutDrag.startX, event.clientY - layoutDrag.startY) > 6) layoutDrag.moved = true;
    if (!layoutDrag.moved) return;
    const card = document.querySelector('article.it[data-id="' + (window.CSS && CSS.escape ? CSS.escape(layoutDrag.id) : layoutDrag.id) + '"]');
    if (!card) return;
    if (layoutDrag.mode === "move") {
      document.body.classList.add("is-layout-dragging");
      const source = card.querySelector('[data-bpath="' + (window.CSS && CSS.escape ? CSS.escape(layoutDrag.path) : layoutDrag.path) + '"]');
      if (source) {
        placeLayoutGhost(source, event.clientX, event.clientY);
        source.style.opacity = "0.35";
      }
      markLayoutDrop(card, event.clientX, event.clientY);
    }
    if (layoutDrag.mode === "resize") {
      const figure = card.querySelector('[data-bpath="' + layoutDrag.path + '"]');
      const host = card.querySelector(".blocks");
      if (!figure || !host) return;
      const width = Math.max(20, Math.min(100, Math.round(((event.clientX - host.getBoundingClientRect().left) / host.getBoundingClientRect().width) * 20) * 5));
      figure.style.width = width + "%";
      layoutDrag.pct = width;
    }
    if (layoutDrag.mode === "split") {
      const row = card.querySelector('.blk-cols[data-bpath="' + layoutDrag.path + '"]');
      if (!row) return;
      const rect = row.getBoundingClientRect();
      const ratio = Math.max(20, Math.min(80, Math.round(((event.clientX - rect.left) / rect.width) * 20) * 5));
      row.style.gridTemplateColumns = ratio + "% " + (100 - ratio) + "%";
      layoutDrag.widths = [ratio, 100 - ratio];
    }
  });

  function endLayoutDrag(commit) {
    const current = layoutDrag;
    layoutDrag = null;
    document.body.classList.remove("is-layout-dragging");
    clearLayoutMarks();
    removeLayoutGhost();
    document.querySelectorAll("[data-bpath]").forEach(node => { node.style.opacity = ""; });
    if (!current || !commit) return null;
    return current;
  }

  document.addEventListener("pointerup", event => {
    const current = endLayoutDrag(true);
    if (!current) return;
    const place = locate(current.id);
    const item = place && routeRecord(place.trackId, place.chapterId, current.id);
    if (!item) return;
    const blocks = blocksOf(item);
    if (current.mode === "resize" && current.pct) {
      const spot = takeBlock(blocks, current.path);
      if (spot && spot.block && spot.block.type === "image") spot.block.pct = current.pct;
      saveLayout(current.id, blocks);
      return;
    }
    if (current.mode === "split" && current.widths) {
      const spot = takeBlock(blocks, current.path);
      if (spot && spot.block && spot.block.type === "columns") spot.block.widths = current.widths;
      saveLayout(current.id, blocks);
      return;
    }
    if (!current.moved || current.mode !== "move") return;
    const moving = detachBlock(blocks, current.path);
    const drop = current.drop;
    const target = drop && drop.path !== current.path ? takeBlock(blocks, drop.path) : null;
    placeBlock(blocks, moving, target && target.block, drop ? drop.side : "after");
    tidyColumns(blocks);
    saveLayout(current.id, blocks);
  });

  document.getElementById("card-edit-export").addEventListener("click", () => {
    openChooser("書き出す", [
      "<p>必要なものだけ選んでください。選んだファイルがダウンロードされます。</p>",
      '<label><input type="checkbox" name="exp-route" checked> ルート（カードと子チャプター）。data/route.js と置き換えます。</label>',
      '<label><input type="checkbox" name="exp-catalog" checked> 台帳（アイテムや依頼）。data/catalogs.js と置き換えます。</label>',
      '<label><input type="checkbox" name="exp-json"> 編集データの控え。このブラウザの差分だけです。</label>',
      '<label><input type="checkbox" name="exp-maps"> 新しく追加した地図画像と data/maps.js。</label>',
      '<label><input type="checkbox" name="exp-images"> カードに追加した画像と data/images.js。</label>',
      '<label><input type="checkbox" name="exp-templates"> 見出しの定型文。data/templates.js と置き換えます。</label>',
      '<label><input type="checkbox" name="exp-settings"> 設定（ボタン名など）。ff7r-settings.json です。</label>',
      '<label><input type="checkbox" name="exp-text"> 表示文の修正。進行とは別のJSONです。</label>'
    ].join(""), () => {
      const data = new FormData(form);
      exportChosen({
        route: data.get("exp-route") === "on",
        catalog: data.get("exp-catalog") === "on",
        json: data.get("exp-json") === "on",
        maps: data.get("exp-maps") === "on",
        images: data.get("exp-images") === "on",
        templates: data.get("exp-templates") === "on",
        settings: data.get("exp-settings") === "on",
        text: data.get("exp-text") === "on"
      }).catch(error => window.alert(error && error.message ? error.message : "書き出しに失敗しました。"));
    });
  });
  document.getElementById("card-edit-info").addEventListener("click", () => {
    openChooser("書き出しと読み込み", [
      "<p>編集は、書き出すまでこのブラウザの中だけに残ります。別の端末やGitHubには自動では送られません。</p>",
      "<p>「書き出す」でファイルを保存し、GitHubの Add file → Upload files で同じ名前の場所に置きます。</p>",
      "<ul><li>ルートは data/route.js です。カード、子チャプター、見出しの番号の元になります。</li>",
      "<li>台帳は data/catalogs.js です。アイテムや依頼の中身です。</li>",
      "<li>編集データの控えは、差分だけのJSONです。「読み込む」でこのブラウザに戻せます。</li>",
      "<li>地図は maps/ の画像と data/maps.js です。掲載元の地図画像は入れません。</li>",
      "<li>カードの画像は images/ と data/images.js です。掲載元の画像は入れません。</li>",
      "<li>設定の「画像ライブラリ」は MAP、エネミー、その他のフォルダに分かれます。書き出しにも GitHub にも画像は入りません。残るのは maps/jun-ch01-01.png のようなキーだけです。zip の一番上のフォルダが、ライブラリのフォルダになります。</li>",
      "<li>地図の zip は「画像をまとめて読み込む」で入れます。iPhone ではファイル App から zip を選ぶか、写真を複数選べます。</li>",
      "<li>定型文は data/templates.js です。宝箱① のような見出しの元です。設定タブでも直せます。</li>",
      "<li>設定はボタン名などのJSONです。「読み込む」でこのブラウザに戻せます。</li>",
      "<li>表示文の修正は、画面の文章を直接直した分です。</li>",
      "<li>管理者は、設定タブのトークンで、同じ原稿を main に1回で書き出せます。トークンはファイルに入りません。</li></ul>",
      "<p>「読み込む」は、編集データの控えJSONをこのブラウザに反映します。原稿ファイルそのものは置き換わりません。GitHubから読み込む場合は、リポジトリの原稿でこのブラウザのカード編集を置き換えます。</p>"
    ].join(""), () => { dialog.hidden = true; }, "閉じる");
  });
  function bytesToBase64(bytes) {
    let binary = "";
    for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  async function repoFiles() {
    const prepared = await prepareMaps(GuideProgress.mergedRoute(ROUTE, GAME.chapters, book()), mergedCatalogs());
    const images = await prepareImages(prepared.route);
    prepared.route = images.route;
    rejectPartialCatalogs(prepared.route, prepared.catalogs);
    const templates = GuideProgress.activeTemplates(book(), globalThis.TEMPLATES);
    const files = [
      { path: "data/route.js", text: GuideProgress.routeModuleSource(prepared.route) },
      { path: "data/catalogs.js", text: GuideProgress.catalogsModuleSource(prepared.catalogs) },
      { path: "data/maps.js", text: "const MAP_FILES = " + JSON.stringify(prepared.manifest, null, 2) + ";\n\nglobalThis.MAP_FILES = MAP_FILES;\n" },
      { path: "data/images.js", text: "const IMAGE_FILES = " + JSON.stringify(images.manifest, null, 2) + ";\n\nglobalThis.IMAGE_FILES = IMAGE_FILES;\n" },
      { path: "data/templates.js", text: "const TEMPLATES = " + JSON.stringify(templates, null, 2) + ";\n\nglobalThis.TEMPLATES = TEMPLATES;\n" },
      { path: "data/enemies.js", text: GuideProgress.enemiesModuleSource(GuideProgress.exportEnemies(globalThis.ENEMIES || [], book())) },
      { path: "data/settings.js", text: "const UI_SETTINGS = " + JSON.stringify({ difficulty: book().difficulty || "normal", labels: book().labels || {}, callout: book().callout || {}, places: book().places || {} }, null, 2) + ";\n\nglobalThis.UI_SETTINGS = UI_SETTINGS;\n" }
    ];
    for (const item of prepared.fresh.concat(images.fresh)) {
      if (!item.blob) continue;
      files.push({ path: item.file, base64: bytesToBase64(new Uint8Array(await item.blob.arrayBuffer())) });
    }
    const libraryFiles = GuideProgress.libraryExportPlan([], { includeLibrary: false });
    libraryFiles.forEach(item => files.push({ path: item.path, base64: "" }));
    return GuideProgress.excludeLibraryExports(files.map(file => ({ path: file.path, base64: file.base64 || GuideProgress.utf8ToBase64(file.text) })));
  }

  function stamp() {
    const now = new Date();
    const pad = value => String(value).padStart(2, "0");
    return now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) + " " + pad(now.getHours()) + ":" + pad(now.getMinutes());
  }

  async function githubPush() {
    const account = githubAccount();
    if (!account) return;
    if (!window.confirm("今の編集を main に、1件のコミットとして書き出します。")) return;
    const status = document.getElementById("github-status");
    if (status) status.textContent = "ファイルをまとめています。";
    const files = await repoFiles();
    if (status) status.textContent = "GitHubへ送っています。";
    const result = await GuideProgress.githubCommit(fetch, account.token, {
      owner: account.owner || "ZeVu2525",
      repo: account.repo || "ff7-remake-guide",
      branch: account.branch || "main",
      message: "編集内容を書き出し (" + stamp() + ")",
      files: files
    });
    if (status) status.innerHTML = "書き出しました。<a href=\"" + result.url + "\" target=\"_blank\" rel=\"noopener noreferrer\">コミットを開く</a>。GitHub Pages の反映には1〜2分かかります。";
    else window.alert("書き出しました。 " + result.url);
    if (window.confirm("リポジトリに入ったので、このブラウザのカード編集を消しますか。消したあとは、Pages の反映後に再読み込みしてください。")) {
      GuideApp.setCardBook(GuideProgress.emptyCardBook(), "編集をすべて戻す");
    }
  }

  async function githubPull() {
    const account = githubAccount();
    if (!account) return;
    if (!window.confirm("GitHubの原稿で、このブラウザのカード編集を置き換えます。")) return;
    const status = document.getElementById("github-status");
    if (status) status.textContent = "原稿を受け取っています。";
    const files = await GuideProgress.githubReadFiles(fetch, account.token, account.owner || "ZeVu2525", account.repo || "ff7-remake-guide", account.branch || "main", [
      "data/route.js", "data/catalogs.js", "data/maps.js", "data/images.js", "data/templates.js", "data/enemies.js", "data/settings.js"
    ]);
    Object.keys(files).forEach(path => { (0, eval)(files[path]); });
    const next = GuideProgress.emptyCardBook();
    if (globalThis.UI_SETTINGS) {
      next.labels = UI_SETTINGS.labels || {};
      next.difficulty = UI_SETTINGS.difficulty || "normal";
      if (UI_SETTINGS.callout) next.callout = UI_SETTINGS.callout;
      if (UI_SETTINGS.places) next.places = UI_SETTINGS.places;
    }
    GuideApp.setCardBook(next, "GitHubから読み込む");
    if (status) status.textContent = "GitHubの原稿を読み込みました。";
  }

  globalThis.GuideCardEdit = { paintGithub: paintGithub };

  document.getElementById("card-edit-import").addEventListener("click", () => document.getElementById("card-edit-file").click());
  document.getElementById("card-edit-file").addEventListener("change", async event => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed && (parsed.labels || parsed.templates || parsed.difficulty) && !parsed.cards && !parsed.state) {
        const next = JSON.parse(JSON.stringify(book()));
        if (parsed.labels && typeof parsed.labels === "object") next.labels = parsed.labels;
        if (parsed.difficulty) next.difficulty = parsed.difficulty;
        if (parsed.callout && typeof parsed.callout === "object") next.callout = parsed.callout;
        if (parsed.places && typeof parsed.places === "object") next.places = parsed.places;
        if (Array.isArray(parsed.templates)) next.templates = parsed.templates;
        GuideApp.setCardBook(next, "読み込む");
        return;
      }
      const bundle = GuideProgress.acceptBundle(parsed);
      if (!bundle || !bundle.cards) throw new Error("no cards");
      GuideApp.setCardBook(bundle.cards, "読み込む");
    } catch (e) {
      window.alert("カードの編集データとして読めませんでした。");
    }
  });
  document.getElementById("card-edit-reset").addEventListener("click", () => {
    if (!window.confirm("このブラウザのカード編集をすべて消し、原稿の並びに戻します。チェックした進行は残ります。")) return;
    GuideApp.setCardBook(GuideProgress.emptyCardBook(), "編集をすべて戻す");
  });

  const footerToggle = document.getElementById("edit-toggle");
  if (footerToggle) footerToggle.addEventListener("change", () => setOn(footerToggle.checked));
  let start = false;
  try { start = localStorage.getItem(MODE_KEY) === "1" || localStorage.getItem(GAME.storage.textEditMode) === "1"; } catch (e) {}
  try {
    const params = new URL(location.href).searchParams;
    if (params.get("cards") === "1" || params.get("edit") === "1") start = true;
  } catch (e) {}
  paintToggle();
  if (start) setOn(true);
})();
