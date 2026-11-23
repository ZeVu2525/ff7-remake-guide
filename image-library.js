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

  function folderParent(folder) {
    if (!folder) return "";
    if (typeof folder.parent === "string") return folder.parent;
    const slash = String(folder.id || "").lastIndexOf("/");
    return slash < 0 ? "" : folder.id.slice(0, slash);
  }

  function isRootFolder(id) {
    return defaults().some(folder => folder.id === id);
  }

  async function ensureFolders() {
    const rows = await withStore(FOLDERS, "readonly", store => requestResult(store.getAll()));
    const have = new Set((rows || []).map(row => row.id));
    const missing = defaults().filter(folder => !have.has(folder.id));
    if (!missing.length) return;
    await withStore(FOLDERS, "readwrite", store => {
      missing.forEach(folder => store.put({ id: folder.id, label: folder.label, parent: "" }));
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
    return (rows || []).map(folder => Object.assign({}, folder, { parent: folderParent(folder) })).sort((a, b) => {
      const ai = order.indexOf(a.id);
      const bi = order.indexOf(b.id);
      if (ai >= 0 || bi >= 0) return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      return String(a.label || a.id) < String(b.label || b.id) ? -1 : 1;
    });
  }

  async function ensurePath(folderPath) {
    const parts = String(folderPath || "").split("/").filter(Boolean);
    let parent = "";
    for (const part of parts) {
      const id = parent ? parent + "/" + part : part;
      const known = (await folders()).some(folder => folder.id === id);
      if (!known) {
        await withStore(FOLDERS, "readwrite", store => store.put({ id, label: part, parent }));
      }
      parent = id;
    }
    return parent;
  }

  async function createFolder(label, parent) {
    const segment = folderId(String(label || "").split(/[\\/]/).pop());
    if (!segment) return "";
    const parentPath = progress() ? progress().libraryFolderPath(parent || "") : String(parent || "");
    const id = parentPath ? parentPath + "/" + segment : segment;
    const display = String(label || segment).split(/[\\/]/).pop().trim() || segment;
    await withStore(FOLDERS, "readwrite", store => store.put({ id, label: display, parent: parentPath }));
    return id;
  }

  function folderDir(key) {
    const parts = String(key || "").split("/");
    parts.pop();
    return parts.join("/");
  }

  async function rewritePrefix(fromId, toId) {
    const moved = [];
    const rows = (await list()).filter(row => row.folder === fromId || row.folder.indexOf(fromId + "/") === 0);
    for (const row of rows) {
      const record = await getRecord(row.id);
      if (!record) continue;
      const next = toId + String(record.id).slice(fromId.length);
      if (next !== record.id) {
        await moveRecord(record, next);
        moved.push([record.id, next]);
      }
    }
    const tree = (await folders()).filter(folder => folder.id === fromId || folder.id.indexOf(fromId + "/") === 0);
    tree.sort((a, b) => b.id.length - a.id.length);
    await withStore(FOLDERS, "readwrite", store => {
      tree.forEach(folder => {
        const nextId = toId + folder.id.slice(fromId.length);
        const parent = folder.id === fromId ? folderDir(toId) : toId + String(folder.parent || "").slice(fromId.length);
        store.delete(folder.id);
        store.put({ id: nextId, label: folder.id === fromId ? folder.label : folder.label, parent });
      });
    });
    return { id: toId, moved };
  }

  async function renameFolder(id, label) {
    const folder = (await folders()).find(item => item.id === id);
    if (!folder) return { id, moved: [] };
    const nextLabel = String(label || "").trim() || folder.label;
    if (isRootFolder(id)) {
      await withStore(FOLDERS, "readwrite", store => store.put({ id, label: nextLabel, parent: "" }));
      return { id, moved: [] };
    }
    const segment = folderId(nextLabel);
    const parent = folder.parent || "";
    const nextId = parent ? parent + "/" + segment : segment;
    if (!segment || nextId === id) {
      await withStore(FOLDERS, "readwrite", store => store.put({ id, label: nextLabel, parent }));
      return { id, moved: [] };
    }
    const result = await rewritePrefix(id, nextId);
    await withStore(FOLDERS, "readwrite", store => store.put({ id: nextId, label: nextLabel, parent }));
    return result;
  }

  async function moveFolder(id, parent) {
    const folder = (await folders()).find(item => item.id === id);
    if (!folder || isRootFolder(id)) return { id, moved: [] };
    const parentPath = progress() ? progress().libraryFolderPath(parent || "") : String(parent || "");
    if (parentPath === id || parentPath.indexOf(id + "/") === 0) return { id, moved: [] };
    const segment = id.split("/").pop();
    let nextId = parentPath ? parentPath + "/" + segment : segment;
    const taken = new Set((await folders()).map(item => item.id));
    if (taken.has(nextId) && nextId !== id) nextId += "-2";
    if (nextId === id) return { id, moved: [] };
    return rewritePrefix(id, nextId);
  }

  async function deleteFolder(id) {
    const folder = (await folders()).find(item => item.id === id);
    if (!folder || isRootFolder(id)) return { ok: false, moved: [] };
    const parent = folder.parent || "images";
    const moved = [];
    for (const row of await list(id)) {
      const next = await move(row.id, parent);
      if (next && next !== row.id) moved.push([row.id, next]);
    }
    for (const child of (await folders()).filter(item => item.parent === id)) {
      const result = await moveFolder(child.id, parent);
      (result.moved || []).forEach(pair => moved.push(pair));
    }
    await withStore(FOLDERS, "readwrite", store => store.delete(id));
    return { ok: true, moved };
  }

  async function putFile(id, blob, name, folder) {
    const key = id && String(id).indexOf("/") > 0 ? normalize(id) : makeKey(folder || "images", name || id);
    const record = {
      id: key,
      folder: folderDir(key) || "images",
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
    const copy = Object.assign({}, record, { id: next, folder: folderDir(next) || "images", name: next.split("/").pop() });
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
      folder: folderDir(row.id) || row.folder || "images",
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
    folders, createFolder, renameFolder, deleteFolder, moveFolder, ensurePath, ensureFolders, resolve, makeKey
  };
})();
