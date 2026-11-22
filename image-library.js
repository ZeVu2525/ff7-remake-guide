(function () {
  const DB_NAME = "ff7r-image-library";
  const STORE = "files";
  const urls = new Map();

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
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

  function safeName(name) {
    const base = String(name || "image.png").split(/[\\/]/).pop().toLowerCase();
    const clean = base.replace(/[^a-z0-9._-]+/g, "-").replace(/^-+/, "");
    if (/^jun-[a-z0-9._-]+\.(?:png|jpe?g|gif|webp)$/.test(clean)) return clean;
    if (/^[a-z0-9][a-z0-9._-]*\.(?:png|jpe?g|gif|webp)$/.test(clean)) return "jun-" + clean;
    return "jun-image.png";
  }

  async function putFile(id, blob, name) {
    const key = safeName(id || name);
    const db = await openDb();
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put({ id: key, name: name || key, type: blob.type || "image/png", blob, updatedAt: Date.now() });
    await txDone(tx);
    db.close();
    revoke(key);
    return key;
  }

  async function getRecord(id) {
    const db = await openDb();
    const tx = db.transaction(STORE, "readonly");
    const request = tx.objectStore(STORE).get(id);
    const record = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    await txDone(tx);
    db.close();
    return record;
  }

  async function objectUrl(id) {
    if (urls.has(id)) return urls.get(id);
    const record = await getRecord(id);
    if (!record || !record.blob) return "";
    const url = URL.createObjectURL(record.blob);
    urls.set(id, url);
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
    const db = await openDb();
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    await txDone(tx);
    db.close();
    revoke(id);
  }

  async function rename(id, name) {
    const record = await getRecord(id);
    if (!record) return;
    record.name = String(name || id);
    const db = await openDb();
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(record);
    await txDone(tx);
    db.close();
  }

  async function list() {
    const db = await openDb();
    const tx = db.transaction(STORE, "readonly");
    const request = tx.objectStore(STORE).getAll();
    const rows = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    await txDone(tx);
    db.close();
    return rows.map(row => ({ id: row.id, name: row.name || row.id, type: row.type, size: row.blob ? row.blob.size : 0 })).sort((a, b) => a.id < b.id ? -1 : 1);
  }

  async function usage() {
    const rows = await list();
    return rows.reduce((sum, row) => sum + row.size, 0);
  }

  async function allBlobs() {
    const db = await openDb();
    const tx = db.transaction(STORE, "readonly");
    const request = tx.objectStore(STORE).getAll();
    const rows = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    await txDone(tx);
    db.close();
    return rows;
  }

  function isKey(value) {
    return globalThis.GuideProgress ? GuideProgress.isLibraryKey(value) : /^jun-[a-z0-9._-]+\.(?:png|jpe?g|gif|webp)$/i.test(String(value || ""));
  }

  async function hydrate(root) {
    const nodes = (root || document).querySelectorAll("[data-lib]");
    for (const img of nodes) {
      const key = img.getAttribute("data-lib");
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
    putFile, getRecord, objectUrl, revoke, revokeAll, remove, rename, list, usage, allBlobs, isKey, hydrate, safeName
  };
})();
