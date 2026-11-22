(function () {
  const DB_NAME = "ff7r-image-library";
  const FILES = "files";
  const FOLDERS = "folders";
  const ALIAS_KEY = "ff7r-image-aliases-v1";
  const urls = new Map();

  function progress() {
    return globalThis.GuideProgress || null;
  }

  function defaults() {
    const known = progress() && progress().LIBRARY_FOLDERS;
    return known || [
      { id: "maps", label: "MAP" },
      { id: "enemies", label: "エネミー" },
      { id: "images", label: "その他" }
    ];
  }

  function folderId(value) {
    return progress() ? progress().libraryFolderId(value) : String(value || "").trim();
  }

  function fileName(value) {
    return progress() ? progress().libraryFileName(value) : String(value || "image.png").split(/[\\/]/).pop();
  }

  function makeKey(folder, name) {
    return progress() ? progress().libraryKey(folder, name) : (folderId(folder) || "images") + "/" + fileName(name);
  }

  function normalize(value, folder) {
    return progress() ? progress().normalizeLibraryKey(value, folder) : value;
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 2);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(FILES)) db.createObjectStore(FILES, { keyPath: "id" });
        if (!db.objectStoreNames.contains(FOLDERS)) db.createObjectStore(FOLDERS, { keyPath: "id" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function txDone(tx) {
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  }

  function requestResult(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function aliases() {
    try { return JSON.parse(localStorage.getItem(ALIAS_KEY) || "{}") || {}; } catch (error) { return {}; }
  }

  function writeAliases(map) {
    try { localStorage.setItem(ALIAS_KEY, JSON.stringify(map)); } catch (error) {}
  }

  function resolve(id) {
    const map = aliases();
    let current = normalize(id);
    const seen = new Set();
    while (map[current] && !seen.has(current)) {
      seen.add(current);
      current = map[current];
    }
    return current;
  }

  function rememberAlias(from, to) {
    if (!from || !to || from === to) return;
    const map = aliases();
    map[from] = to;
    Object.keys(map).forEach(key => { if (map[key] === from) map[key] = to; });
    writeAliases(map);
  }

  async function withStore(name, mode, run) {
    const db = await openDb();
    const tx = db.transaction(name, mode);
    const result = await run(tx.objectStore(name));
    await txDone(tx);
    db.close();
    return result;
  }

  async function ensureFolders() {
    const rows = await withStore(FOLDERS, "readonly", store => requestResult(store.getAll()));
    const have = new Set((rows || []).map(row => row.id));
    const missing = defaults().filter(folder => !have.has(folder.id));
    if (!missing.length) return;
    await withStore(FOLDERS, "readwrite", store => {
      missing.forEach(folder => store.put({ id: folder.id, label: folder.label }));
    });
  }

  async function migrateFiles() {
    const rows = await withStore(FILES, "readonly", store => requestResult(store.getAll()));
    const legacy = (rows || []).filter(row => row && row.id && row.id.indexOf("/") < 0);
    for (const row of legacy) {
      const next = normalize(row.id, /buppanasu/i.test(row.id) ? "images" : "maps");
      if (!next || next === row.id) continue;
      row.folder = next.split("/")[0];
      row.name = row.name || next.split("/").pop();
      const copy = Object.assign({}, row, { id: next });
      await withStore(FILES, "readwrite", async store => {
        store.put(copy);
        store.delete(row.id);
      });
      rememberAlias(row.id, next);
      revoke(row.id);
    }
  }

  async function folders() {
    await ensureFolders();
    const rows = await withStore(FOLDERS, "readonly", store => requestResult(store.getAll()));
    const order = defaults().map(folder => folder.id);
    return (rows || []).slice().sort((a, b) => {
      const ai = order.indexOf(a.id);
      const bi = order.indexOf(b.id);
      if (ai >= 0 || bi >= 0) return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      return String(a.label || a.id) < String(b.label || b.id) ? -1 : 1;
    });
  }

  async function createFolder(label) {
    const id = folderId(label);
    if (!id) return "";
    await withStore(FOLDERS, "readwrite", store => store.put({ id, label: String(label || id).trim() || id }));
    return id;
  }

  async function renameFolder(id, label) {
    const current = folderId(id);
    const folder = (await folders()).find(item => item.id === current);
    if (!folder) return { id: current, moved: [] };
    const nextLabel = String(label || "").trim() || folder.label;
    const builtin = defaults().some(item => item.id === current);
    if (builtin) {
      await withStore(FOLDERS, "readwrite", store => store.put({ id: current, label: nextLabel }));
      return { id: current, moved: [] };
    }
    const nextId = folderId(nextLabel);
    if (!nextId || nextId === current) {
      await withStore(FOLDERS, "readwrite", store => store.put({ id: current, label: nextLabel }));
      return { id: current, moved: [] };
    }
    const rows = (await list()).filter(row => row.folder === current);
    const moved = [];
    for (const row of rows) {
      const next = await move(row.id, nextId);
      if (next && next !== row.id) moved.push([row.id, next]);
    }
    await withStore(FOLDERS, "readwrite", store => {
      store.delete(current);
      store.put({ id: nextId, label: nextLabel });
    });
    return { id: nextId, moved };
  }

  async function deleteFolder(id) {
    const current = folderId(id);
    if (!current || defaults().some(item => item.id === current)) return { ok: false, moved: [] };
    const rows = (await list()).filter(row => row.folder === current);
    const moved = [];
    for (const row of rows) {
      const next = await move(row.id, "images");
      if (next) moved.push([row.id, next]);
    }
    await withStore(FOLDERS, "readwrite", store => store.delete(current));
    return { ok: true, moved };
  }

  async function putFile(id, blob, name, folder) {
    const key = id && String(id).indexOf("/") > 0 ? normalize(id) : makeKey(folder || "images", name || id);
    const record = {
      id: key,
      folder: key.split("/")[0],
      name: fileName(name || key.split("/").pop()),
      type: (blob && blob.type) || "image/png",
      blob,
      updatedAt: Date.now()
    };
    await withStore(FILES, "readwrite", store => store.put(record));
    revoke(key);
    return key;
  }

  async function getRecord(id) {
    const key = resolve(id);
    return withStore(FILES, "readonly", store => requestResult(store.get(key)));
  }

  async function objectUrl(id) {
    const key = resolve(id);
    if (urls.has(key)) return urls.get(key);
    const record = await getRecord(key);
    if (!record || !record.blob) return "";
    const url = URL.createObjectURL(record.blob);
    urls.set(key, url);
    return url;
  }

  function revoke(id) {
    const url = urls.get(id);
    if (url) URL.revokeObjectURL(url);
    urls.delete(id);
  }

  function revokeAll() {
    urls.forEach(url => URL.revokeObjectURL(url));
    urls.clear();
  }

  async function remove(id) {
    const key = resolve(id);
    await withStore(FILES, "readwrite", store => store.delete(key));
    revoke(key);
  }

  async function rename(id, name) {
    const record = await getRecord(id);
    if (!record) return "";
    const next = makeKey(record.folder || record.id.split("/")[0], name);
    if (next === record.id) {
      record.name = fileName(name);
      await withStore(FILES, "readwrite", store => store.put(record));
      return record.id;
    }
    return moveRecord(record, next);
  }

  async function moveRecord(record, next) {
    const previous = record.id;
    if (previous === next) return previous;
    const copy = Object.assign({}, record, { id: next, folder: next.split("/")[0], name: next.split("/").pop() });
    await withStore(FILES, "readwrite", store => {
      store.put(copy);
      store.delete(previous);
    });
    rememberAlias(previous, next);
    revoke(previous);
    revoke(next);
    return next;
  }

  async function move(id, folder) {
    const record = await getRecord(id);
    if (!record) return "";
    return moveRecord(record, makeKey(folder, record.name || record.id.split("/").pop()));
  }

  async function list(folder) {
    await migrateFiles();
    const rows = await withStore(FILES, "readonly", store => requestResult(store.getAll()));
    return (rows || []).map(row => ({
      id: row.id,
      folder: row.folder || String(row.id).split("/")[0],
      name: row.name || String(row.id).split("/").pop(),
      type: row.type,
      size: row.blob ? row.blob.size : 0
    })).filter(row => !folder || row.folder === folder).sort((a, b) => a.id < b.id ? -1 : 1);
  }

  async function usage() {
    const rows = await list();
    return rows.reduce((sum, row) => sum + row.size, 0);
  }

  async function allBlobs() {
    await migrateFiles();
    return withStore(FILES, "readonly", store => requestResult(store.getAll()));
  }

  function isKey(value) {
    return progress() ? progress().isLibraryKey(value) : String(value || "").indexOf("/") > 0;
  }

  function safeName(name) {
    return fileName(name);
  }

  async function hydrate(root) {
    const nodes = (root || document).querySelectorAll("[data-lib]");
    for (const img of nodes) {
      const key = resolve(img.getAttribute("data-lib"));
      if (!key || img.dataset.libReady === key) continue;
      const url = await objectUrl(key);
      if (!url) {
        img.hidden = true;
        if (!img.nextElementSibling || !img.nextElementSibling.classList || !img.nextElementSibling.classList.contains("lib-missing")) {
          const note = document.createElement("span");
          note.className = "lib-missing map-missing";
          note.textContent = "地図画像が未登録 ";
          const button = document.createElement("button");
          button.type = "button";
          button.dataset.libAdd = key;
          button.textContent = "追加";
          note.appendChild(button);
          img.after(note);
        }
        continue;
      }
      img.hidden = false;
      if (img.nextElementSibling && img.nextElementSibling.classList && img.nextElementSibling.classList.contains("lib-missing")) img.nextElementSibling.remove();
      img.dataset.libReady = key;
      img.src = url;
    }
  }

  globalThis.GuideImages = {
    putFile, getRecord, objectUrl, revoke, revokeAll, remove, rename, move, list, usage, allBlobs, isKey, hydrate, safeName,
    folders, createFolder, renameFolder, deleteFolder, ensureFolders, resolve, makeKey
  };
})();
