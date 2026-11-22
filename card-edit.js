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
    "#card-drop-line.is-nest{height:4px}",
    "#card-drop-line.is-blocked{background:#c44949}",
    "article.it.is-nest-blocked{box-shadow:inset 0 0 0 3px #c44949}",
    "#card-drop-label{position:fixed;z-index:262;padding:2px 8px;border-radius:999px;background:#39c9ff;color:#10202c;font:700 12px/1.4 sans-serif;pointer-events:none}",
    "#card-drag-ghost{position:fixed;z-index:261;max-width:min(280px,70vw);padding:8px 12px;border-radius:8px;background:#14324a;color:#fff;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.35);pointer-events:none}",
    "#card-edit-dialog{position:fixed;z-index:270;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:12px;background:rgba(2,10,18,.55);box-sizing:border-box}",
    "#card-edit-dialog[hidden]{display:none}",
    "#card-edit-dialog form{width:min(640px,100%);max-height:min(88vh,760px);overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;padding:14px;border-radius:12px 12px 0 0;background:var(--bg2);color:var(--fg)}",
    "#card-edit-fields{overflow:auto;min-height:0}",
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
    ".blk-row{padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg2)}",
    ".blk-tools{display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin-bottom:6px}",
    ".blk-tools button,.blk-add button,.rt-bar button{min-height:32px;padding:2px 8px;border:1px solid var(--line);border-radius:6px;background:var(--bg3);color:inherit;font:inherit;cursor:pointer}",
    ".rt-bar{display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin-bottom:6px}",
    ".rt-bar [data-rt=color]{width:22px;min-height:22px;padding:0}",
    ".rt-edit{min-height:72px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);white-space:pre-wrap}",
    ".blk-file input{max-width:100%}",
    ".blk-preview{max-width:180px;max-height:120px;margin-top:6px;background:#fff}",
    "@media(max-width:640px){#card-edit-bar button{flex:1 1 calc(50% - 6px)}#card-edit-exit{flex-basis:100%}}"
  ].join("");
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "card-edit-root";
  root.innerHTML = [
    '<div id="card-edit-bar" hidden>',
    '<button type="button" id="card-edit-exit">編集を終了</button>',
    '<strong>編集</strong>',
    '<button type="button" id="card-edit-export">書き出す</button>',
    '<button type="button" id="card-edit-info" aria-label="書き出しと読み込みの説明">ⓘ</button>',
    '<button type="button" id="card-edit-import">読み込む</button>',
    '<button type="button" id="card-edit-templates">設定</button>',
    '<button type="button" id="card-edit-reset">編集をすべて戻す</button>',
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
    if (!button) return;
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.textContent = on ? "編集：オン" : "編集：オフ";
    const labels = globalThis.GuideProgress && GuideProgress.labelText;
    if (!labels) return;
    const current = book();
    const named = {
      "card-edit-exit": "endEdit",
      "card-edit-export": "export",
      "card-edit-import": "import",
      "card-edit-templates": "openSettings",
      "card-edit-reset": "resetEdits"
    };
    Object.keys(named).forEach(id => {
      const node = document.getElementById(id);
      if (node) node.textContent = GuideProgress.labelText(current, named[id]);
    });
  }

  function setOn(on) {
    if (!on && !dialog.hidden && formDirty()) {
      if (!window.confirm("保存していない変更があります。破棄して閉じますか。")) return;
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
    if (!form.elements.mapUrl && !form.elements.mapPreset && !form.elements.mapRepo) return editing && editing.map ? editing.map : "";
    const url = String((form.elements.mapUrl && form.elements.mapUrl.value) || "").trim();
    if (url) return url;
    const repoId = String((form.elements.mapRepo && form.elements.mapRepo.value) || "").trim();
    if (repoId) {
      const found = repoMaps().find(item => item.id === repoId);
      return found ? found.file : repoId;
    }
    return String((form.elements.mapPreset && form.elements.mapPreset.value) || "").trim();
  }

  function mapPreviewSrc(value) {
    if (!value) return "";
    const repo = repoMaps().find(item => item.id === value || item.file === value);
    if (repo) return repo.file;
    if (/^maps\//.test(value)) return value;
    if (/^chapter[0-9-]+$/.test(value)) return "https://finalfantasy-jun-site.com/ff7_remake/field/images/" + value + ".png";
    return value;
  }

  function paintMapPreview() {
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
    image.alt = "地図のプレビュー";
    image.src = mapPreviewSrc(value);
    if (warn) {
      if (/^data:/i.test(value) && value.length > 400 * 1024) {
        warn.hidden = false;
        warn.textContent = "この画像は約" + Math.round(value.length / 1024) + "KBです。ブラウザの保存容量を使います。";
      } else warn.hidden = true;
    }
  }

  function mapFields(current) {
    const maps = GAME.maps || [];
    const saved = repoMaps();
    const repo = saved.find(item => item.id === current || item.file === current);
    const presetId = !repo && maps.some(map => map.id === current) ? current : "";
    const options = ['<option value="">掲載元の地図は使わない</option>'].concat(maps.map(map => `<option value="${map.id}"${map.id === presetId ? " selected" : ""}>${escapeText(map.label)}</option>`)).join("");
    const repoOptions = ['<option value="">保存した地図は使わない</option>'].concat(saved.map(item => `<option value="${escapeAttr(item.id)}"${repo && item.id === repo.id ? " selected" : ""}>${escapeText(item.label || item.file)}</option>`)).join("");
    const custom = presetId || repo ? "" : (current || "");
    return [
      field("掲載元の地図", `<select name="mapPreset">${options}</select>`),
      field("保存した地図", `<select name="mapRepo">${repoOptions}</select>`),
      field("地図の画像", `<input name="mapUrl" value="${escapeAttr(custom)}" placeholder="https:// の画像URL。空なら上の地図">`),
      '<label class="map-file">画像ファイル<input id="map-file" name="mapFile" type="file" accept="image/png,image/jpeg,image/gif,image/webp"></label>',
      '<p id="map-file-note">新しい画像は、書き出しのときに maps/ 用のファイルとして保存します。同じ中身は同じファイルを使います。400KBを超えると警告し、1.2MBを超える画像は入れられません。</p>',
      '<p id="map-size-warn" hidden></p>',
      '<img id="map-preview" alt="地図のプレビュー" hidden>',
      '<button type="button" id="map-clear">地図を外す</button>'
    ].join("");
  }

  function bindMapField() {
    const preset = form.elements.mapPreset;
    const url = form.elements.mapUrl;
    const file = document.getElementById("map-file");
    const clear = document.getElementById("map-clear");
    const image = document.getElementById("map-preview");
    const repo = form.elements.mapRepo;
    if (preset) preset.addEventListener("change", () => {
      if (preset.value) {
        if (url) url.value = "";
        if (repo) repo.value = "";
      }
      paintMapPreview();
    });
    if (repo) repo.addEventListener("change", () => {
      if (repo.value) {
        if (url) url.value = "";
        if (preset) preset.value = "";
      }
      paintMapPreview();
    });
    if (url) url.addEventListener("input", () => {
      if (url.value.trim()) {
        if (preset) preset.value = "";
        if (repo) repo.value = "";
      }
      paintMapPreview();
    });
    if (image) image.addEventListener("error", () => {
      image.alt = "この画像は表示できません";
    });
    if (clear) clear.addEventListener("click", () => {
      if (preset) preset.value = "";
      if (form.elements.mapRepo) form.elements.mapRepo.value = "";
      if (url) url.value = "";
      if (file) file.value = "";
      error.textContent = "";
      paintMapPreview();
    });
    if (file) file.addEventListener("change", () => {
      const picked = file.files && file.files[0];
      if (!picked) return;
      if (!/^image\/(png|jpeg|gif|webp)$/.test(picked.type)) {
        error.textContent = "PNG、JPEG、GIF、WebPの画像にしてください。";
        file.value = "";
        return;
      }
      if (picked.size > MAP_FILE_MAX) {
        error.textContent = "画像が大きすぎます。1.2MBまでにしてください。";
        file.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        if (!url) return;
        url.value = result;
        if (preset) preset.value = "";
        if (form.elements.mapRepo) form.elements.mapRepo.value = "";
        error.textContent = "";
        paintMapPreview();
      };
      reader.onerror = () => { error.textContent = "画像を読めませんでした。"; };
      reader.readAsDataURL(picked);
    });
    paintMapPreview();
  }

  const RICH_COLORS = ["#1d4e89", "#c44949", "#1f7a4d", "#8a5a00", "#5b3a8c", "#222222"];

  function freshBlocks(seed) {
    const stored = GuideProgress.normalizeBlocks(seed && seed.blocks);
    if (stored.length) return stored;
    return GuideProgress.blocksFromDetail(seed && seed.detail);
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
    const warn = /^data:/i.test(current) && current.length > 400 * 1024 ? `<p class="map-warn">この画像は約${Math.round(current.length / 1024)}KBです。</p>` : "";
    return [
      `<div class="blk-file">`,
      `<select data-img-repo>${options}</select>`,
      `<input data-img-url value="${escapeAttr(repo ? "" : current)}" placeholder="https:// またはファイル">`,
      `<input data-img-file type="file" accept="image/png,image/jpeg,image/gif,image/webp">`,
      tile ? `<input data-tile-label value="${escapeAttr(block.label || "")}" placeholder="ラベル">` : [
        `<input data-img-caption value="${escapeAttr(block.caption || "")}" placeholder="説明（空でもよい）">`,
        `<select data-img-width><option value="s"${block.width === "s" ? " selected" : ""}>小</option><option value="m"${!block.width || block.width === "m" ? " selected" : ""}>中</option><option value="l"${block.width === "l" ? " selected" : ""}>大</option><option value="full"${block.width === "full" ? " selected" : ""}>幅いっぱい</option></select>`,
        `<select data-img-align><option value="left"${block.align === "left" ? " selected" : ""}>左</option><option value="center"${!block.align || block.align === "center" ? " selected" : ""}>中央</option><option value="right"${block.align === "right" ? " selected" : ""}>右</option></select>`
      ].join(""),
      current ? `<img class="blk-preview" alt="" src="${escapeAttr(current)}">` : "",
      warn,
      `</div>`
    ].join("");
  }

  function richBox(html) {
    const colors = RICH_COLORS.map(color => `<button type="button" data-rt="color" data-rt-value="${color}" style="background:${color}" aria-label="${color}"></button>`).join("");
    return `<div class="rt-wrap"><div class="rt-bar"><button type="button" data-rt="bold"><b>B</b></button><button type="button" data-rt="italic"><i>I</i></button><button type="button" data-rt="underline"><u>U</u></button><button type="button" data-rt="strike"><s>S</s></button><button type="button" data-rt="clear">書式を消す</button><select data-rt="size"><option value="">大きさ</option><option value="0.85em">小</option><option value="1em">中</option><option value="1.25em">大</option></select><select data-rt="font"><option value="">字体</option><option value="serif">明朝</option><option value="monospace">等幅</option></select><label>色 <input type="color" data-rt="color" value="#1d4e89"></label>${colors}<label>背景 <input type="color" data-rt="bg" value="#fff3bf"></label></div><div class="rt-edit" contenteditable="true">${GuideProgress.sanitizeRich(html || "")}</div></div>`;
  }

  function addButtons(path) {
    const kinds = path ? [["text", "文章"], ["image", "画像"]] : [["text", "文章"], ["image", "画像"], ["callout", "囲み"], ["columns", "2列"], ["tiles", "小画像"]];
    return kinds.map(item => `<button type="button" data-add-block="${item[0]}" data-add-path="${escapeAttr(path)}">${item[1]}</button>`).join("");
  }

  function blockRow(block, path) {
    const top = path.indexOf(".") < 0;
    const tools = `<div class="blk-tools">${top ? `<button type="button" class="blk-handle" draggable="true" data-drag-block="${escapeAttr(path)}" aria-label="並べ替え">≡</button>` : ""}<button type="button" data-del-block="${escapeAttr(path)}">この部分を消す</button></div>`;
    let body = "";
    if (block.type === "text" || block.type === "callout") body = richBox(block.html);
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
  }

  function makeBlock(type) {
    if (type === "callout") return { type: "callout", html: "" };
    if (type === "image") return { type: "image", src: "", caption: "", width: "m", align: "center" };
    if (type === "columns") return { type: "columns", count: 2, arrow: false, columns: [[{ type: "text", html: "" }], [{ type: "text", html: "" }]] };
    if (type === "tiles") return { type: "tiles", items: [{ src: "", label: "" }] };
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

  function onBlockClick(event) {
    const rt = event.target.closest("[data-rt]");
    if (rt && rt.tagName === "BUTTON") {
      event.preventDefault();
      applyRich(rt.closest(".rt-wrap").querySelector(".rt-edit"), rt.getAttribute("data-rt"), rt.getAttribute("data-rt-value") || "");
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
    if (target.getAttribute("data-rt") === "size" || target.getAttribute("data-rt") === "font" || target.getAttribute("data-rt") === "color" || target.getAttribute("data-rt") === "bg") {
      applyRich(target.closest(".rt-wrap").querySelector(".rt-edit"), target.getAttribute("data-rt"), target.value);
      target.value = target.tagName === "SELECT" ? "" : target.value;
      return;
    }
    if (target.hasAttribute("data-img-repo")) {
      const input = target.parentElement.querySelector("[data-img-url]");
      if (target.value && input) input.value = target.value;
      syncBlocks();
      paintBlocks();
      return;
    }
    if (target.hasAttribute("data-img-file")) {
      const picked = target.files && target.files[0];
      if (!picked) return;
      if (!/^image\/(png|jpeg|gif|webp)$/.test(picked.type)) {
        error.textContent = "PNG、JPEG、GIF、WebPの画像にしてください。";
        return;
      }
      if (picked.size > MAP_FILE_MAX) {
        error.textContent = "画像が大きすぎます。1.2MBまでにしてください。";
        return;
      }
      const input = target.parentElement.querySelector("[data-img-url]");
      const reader = new FileReader();
      reader.onload = () => {
        if (input) input.value = String(reader.result || "");
        error.textContent = "";
        syncBlocks();
        paintBlocks();
      };
      reader.readAsDataURL(picked);
      return;
    }
    if (target.hasAttribute("data-col-count") || target.hasAttribute("data-col-arrow")) {
      syncBlocks();
      paintBlocks();
      return;
    }
    syncBlocks();
  }

  fields.addEventListener("click", onBlockClick);
  fields.addEventListener("change", onBlockChange);
  fields.addEventListener("input", event => {
    if (event.target && event.target.closest && event.target.closest("#block-editor")) syncBlocks();
  });
  fields.addEventListener("mousedown", event => {
    if (event.target.closest && event.target.closest(".rt-bar button")) event.preventDefault();
  });
  fields.addEventListener("dragstart", event => {
    const handle = event.target.closest && event.target.closest("[data-drag-block]");
    if (!handle || !event.dataTransfer) return;
    event.dataTransfer.setData("text/plain", handle.getAttribute("data-drag-block"));
    event.dataTransfer.effectAllowed = "move";
  });
  fields.addEventListener("dragover", event => {
    if (event.target.closest && event.target.closest("[data-block-path]")) event.preventDefault();
  });
  fields.addEventListener("drop", event => {
    const from = event.dataTransfer && event.dataTransfer.getData("text/plain");
    const row = event.target.closest && event.target.closest("[data-block-path]");
    if (!from || !row || from.indexOf(".") >= 0) return;
    const to = row.getAttribute("data-block-path");
    if (to.indexOf(".") >= 0) return;
    event.preventDefault();
    syncBlocks();
    const a = Number(from);
    const b = Number(to);
    if (a === b || !editing.blocks[a]) return;
    const moved = editing.blocks.splice(a, 1)[0];
    editing.blocks.splice(b, 0, moved);
    paintBlocks();
  });

  function openRouteForm(seed) {
    editing = seed;
    error.textContent = "";
    document.getElementById("card-edit-title").textContent = seed.id ? "カードを直す" : "カードを追加";
    document.getElementById("card-edit-id").textContent = seed.id ? "ID: " + seed.id : "IDは保存時に付きます。あとから変わりません。";
    const flags = GAME.flags.map(flag => `<option value="${flag.id}"${flag.id === seed.flag ? " selected" : ""}>${flag.label}</option>`).join("");
    const trophies = ['<option value="">選ばない</option>'].concat(GuideApp.trophyChoices().map(item => `<option value="${item.id}"${item.id === seed.trophy ? " selected" : ""}>${item.name}</option>`)).join("");
    const chapterRows = GuideProgress.mergeTrack(ROUTE, GAME.chapters[seed.trackId] || [], book(), seed.trackId) || [];
    const chapterRow = chapterRows.find(row => row.chapterId === seed.chapterId);
    const parents = ((chapterRow && chapterRow.items) || []).filter(item => item.id !== seed.id && !item.parent);
    const parentOptions = ['<option value="">親なし（章の直下）</option>'].concat(parents.map(item => `<option value="${escapeAttr(item.id)}"${item.id === seed.parent ? " selected" : ""}>${escapeText(item.title || item.id)}</option>`)).join("");
    editing.links = (seed.items || []).map(link => ({ id: link.id, qty: link.qty || 1 }));
    const templates = GuideProgress.activeTemplates(book(), globalThis.TEMPLATES);
    const templateOptions = ['<option value="">自由入力</option>'].concat(templates.map(item => `<option value="${escapeAttr(item.id)}"${item.id === seed.template ? " selected" : ""}>${escapeText(item.label)}</option>`)).join("");
    const sectionList = chapterSections(seed.trackId, seed.chapterId);
    const sectionId = seed.section || (sectionList[0] && sectionList[0].id) || "";
    const sectionOptions = sectionList.map(item => `<option value="${escapeAttr(item.id)}"${item.id === sectionId ? " selected" : ""}>${escapeText(item.title)}</option>`).join("");
    fields.innerHTML = [
      field("見出しの定型文", `<select name="template">${templateOptions}</select>`),
      field("見出し", `<input name="title" value="${escapeAttr(seed.title || "")}" placeholder="定型文を選んだときは空でも保存できます">`),
      '<p id="template-preview"></p>',
      '<p>本文は、文章・画像・列・囲みを上から順に並べます。文章の中の改行も、カードにそのまま出ます。</p>',
      '<div id="block-editor"></div>',
      `<textarea name="detail" hidden>${escapeText(seed.detail || "")}</textarea>`,
      '<input type="hidden" id="block-json" name="blocks" value="">',
      field("タグ", `<select name="flag">${flags}</select>`),
      field("期限", `<input name="deadline" value="${escapeAttr(seed.deadline || "")}" placeholder="期限・取り逃しのとき">`),
      field("トロフィー", `<select name="trophy">${trophies}</select>`),
      mapFields(seed.map || ""),
      field("子チャプター", `<select name="section">${sectionOptions}</select>`),
      field("親カード", `<select name="parent">${parentOptions}</select>`),
      '<div id="item-picker"></div>'
    ].join("");
    editing.blocks = freshBlocks(seed);
    paintBlocks();
    paintItemPicker();
    form.elements.flag.addEventListener("change", paintItemPicker);
    bindMapField();
    dialog.hidden = false;
    captureBaseline();
    form.elements.title.focus();
  }

  const pickerState = { hub: "consumables", query: "", selected: "", qty: "1" };

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
    hubs.sort((a, b) => (a.id === "consumables" ? -1 : b.id === "consumables" ? 1 : 0));
    if (!hubs.some(hub => hub.id === pickerState.hub) && hubs[0]) pickerState.hub = hubs[0].id;
    const selected = (editing.links || []).map(link => {
      const found = choices.find(item => item.id === link.id);
      return `<li><span>${escapeText((found ? found.name : link.id) + " ×" + link.qty)}</span> <button type="button" data-link-remove="${escapeAttr(link.id)}">外す</button></li>`;
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
    fields.innerHTML = [
      field("名前", `<input name="name" required value="${escapeAttr(seed.name || "")}">`),
      field("説明", `<textarea name="detail" required>${escapeText(seed.detail || "")}</textarea>`),
      field("場所・種別", `<input name="area" value="${escapeAttr(seed.area || "")}">`),
      mapEditor,
      `<label><input type="checkbox" name="missable"${seed.missable ? " checked" : ""}> 取り逃し</label>`
    ].join("");
    if (mapEditor) bindMapField();
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
    const sectionId = String(data.get("section") || editing.section || "");
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
      parent: data.get("parent"),
      section: data.get("section") || editing.section || "",
      template: data.get("template") || "",
      quest: editing.quest || "",
      items: editing.links || [],
      blocks: editing.blocks
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
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || dialog.hidden) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  document.addEventListener("click", event => {
    if (!document.body.classList.contains("is-card-edit")) return;
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
    const addAfter = event.target.closest("[data-card-add-after]");
    if (addAfter) {
      const id = addAfter.getAttribute("data-card-add-after");
      const place = locate(id);
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
    const bodyOpen = event.target.closest(".blocks");
    if (bodyOpen && !event.target.closest("button, a, input, label")) {
      const card = bodyOpen.closest("article.it[data-id]");
      const opener = card && card.querySelector("[data-card-edit]");
      if (opener) opener.click();
      return;
    }
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
    const options = sections.map((item, index) => `<option value="${escapeAttr(item.id)}">(${index + 1}) ${escapeText(GuideProgress.sectionName(item.title) || "区分")}</option>`).join("");
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

  function addSection(trackId, chapterId) {
    const sections = chapterSections(trackId, chapterId);
    const id = chapterId + "-sec-" + Date.now().toString(36);
    sections.push({
      id: id,
      title: "新しい区分",
      map: "",
      note: ""
    });
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

  function openSectionEdit(sectionId) {
    const place = sectionPlace(sectionId);
    if (!place) return;
    const section = chapterSections(place.trackId, place.chapterId).find(item => item.id === sectionId);
    if (!section) return;
    editing = { sectionEdit: true, sectionId, trackId: place.trackId, chapterId: place.chapterId };
    document.getElementById("card-edit-title").textContent = "子チャプター";
    document.getElementById("card-edit-id").textContent = section.id;
    fields.innerHTML = [
      field("名前", `<input name="title" required value="${escapeAttr(GuideProgress.sectionName(section.title))}">`),
      field("共通のメモ", `<textarea name="note">${escapeText(section.note || "")}</textarea>`),
      mapFields(section.map || "")
    ].join("");
    bindMapField();
    error.textContent = "";
    dialog.hidden = false;
    captureBaseline();
  }

  function saveSectionEdit() {
    const sections = chapterSections(editing.trackId, editing.chapterId);
    const section = sections.find(item => item.id === editing.sectionId);
    if (!section) return;
    section.title = String(new FormData(form).get("title") || "").trim() || section.title;
    section.note = String(new FormData(form).get("note") || "").trim();
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
    const children = orderIds.map(cid => routeRecord(place.trackId, place.chapterId, cid)).filter(entry => entry && entry.parent === id);
    const taken = usedIds();
    const newId = GuideProgress.createCardId(taken);
    taken.add(newId);
    const childIds = children.map(() => {
      const childId = GuideProgress.createCardId(taken);
      taken.add(childId);
      return childId;
    });
    const order = orderIds.slice();
    const at = order.indexOf(id);
    order.splice(at < 0 ? order.length : at + 1, 0, newId, ...childIds);
    let next = book();
    const copyFields = cardFields(item, item.parent || "");
    next = GuideProgress.upsertRouteCard(next, null, newId, copyFields, place.trackId, place.chapterId, order, GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id));
    children.forEach((child, index) => {
      const fields = cardFields(child, newId);
      next = GuideProgress.upsertRouteCard(next, null, childIds[index], fields, place.trackId, place.chapterId, order, GuideApp.baseItems(place.trackId, place.chapterId).map(entry => entry.id));
    });
    GuideApp.setCardBook(next);
    const created = routeRecord(place.trackId, place.chapterId, newId);
    if (created) openRouteForm(Object.assign({ kind: "route", id: newId, trackId: place.trackId, chapterId: place.chapterId }, created));
  }

  document.addEventListener("dblclick", event => {
    if (!document.body.classList.contains("is-card-edit")) return;
    const button = event.target.closest && event.target.closest(".map-open");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const owner = button.getAttribute("data-map-owner");
    const id = button.getAttribute("data-owner-id");
    if (owner === "section") openSectionEdit(id);
    else openCardMap(id);
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
          return { type: "card", id: targetId, after: !edge && indented ? true : ratio >= 0.5, unnest: draggedLeft, element: card };
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
      flag: item.flag,
      deadline: item.deadline || "",
      source: item.source || "",
      trophy: item.trophy || "",
      map: item.map || "",
      parent: parentId || "",
      quest: item.quest || "",
      section: item.section || "",
      template: item.template || "",
      items: item.items || [],
      blocks: item.blocks && item.blocks.length ? item.blocks : GuideProgress.blocksFromDetail(item.detail)
    };
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
    GuideApp.setCardBook(next);
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

  dialog.addEventListener("input", event => {
    if (!event.target) return;
    if (event.target.id === "item-picker-q") pickerState.query = event.target.value;
    if (event.target.id === "item-picker-qty") pickerState.qty = event.target.value;
    if (event.target.id === "item-picker-q" || event.target.id === "item-picker-hub") {
      if (event.target.id === "item-picker-hub") pickerState.hub = event.target.value;
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

  document.getElementById("card-edit-exit").addEventListener("click", () => setOn(false));
  function mergedCatalogs() {
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
    return catalogs;
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
    const images = await prepareImages(prepared.route);
    prepared.route = images.route;
    if (flags.route) download("data-route.js", GuideProgress.routeModuleSource(prepared.route), "text/javascript");
    if (flags.catalog) download("data-catalogs.js", GuideProgress.catalogsModuleSource(prepared.catalogs), "text/javascript");
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
      }).catch(() => window.alert("書き出しに失敗しました。"));
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
      "<li>定型文は data/templates.js です。宝箱① のような見出しの元です。設定タブでも直せます。</li>",
      "<li>設定はボタン名などのJSONです。「読み込む」でこのブラウザに戻せます。</li>",
      "<li>表示文の修正は、画面の文章を直接直した分です。</li></ul>",
      "<p>「読み込む」は、編集データの控えJSONをこのブラウザに反映します。原稿ファイルそのものは置き換わりません。</p>"
    ].join(""), () => { dialog.hidden = true; }, "閉じる");
  });
  document.getElementById("card-edit-templates").addEventListener("click", () => {
    if (globalThis.GuideApp && GuideApp.showHub) GuideApp.showHub("settings");
  });
  document.getElementById("card-edit-import").addEventListener("click", () => document.getElementById("card-edit-file").click());
  document.getElementById("card-edit-file").addEventListener("change", async event => {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed && (parsed.labels || parsed.templates) && !parsed.cards && !parsed.state) {
        const next = JSON.parse(JSON.stringify(book()));
        if (parsed.labels && typeof parsed.labels === "object") next.labels = parsed.labels;
        if (Array.isArray(parsed.templates)) next.templates = parsed.templates;
        GuideApp.setCardBook(next);
        return;
      }
      const bundle = GuideProgress.acceptBundle(parsed);
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

  const footerToggle = document.getElementById("edit-toggle");
  if (footerToggle) footerToggle.addEventListener("click", () => setOn(!document.body.classList.contains("is-card-edit")));
  let start = false;
  try { start = localStorage.getItem(MODE_KEY) === "1" || localStorage.getItem(GAME.storage.textEditMode) === "1"; } catch (e) {}
  try {
    const params = new URL(location.href).searchParams;
    if (params.get("cards") === "1" || params.get("edit") === "1") start = true;
  } catch (e) {}
  paintToggle();
  if (start) setOn(true);
})();
