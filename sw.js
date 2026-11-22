/* 版は data/game.js の GAME.cache と同じ文字列にする。importScripts は使わない。
   古いサービスワーカーが data/game.js を横取りすると、新しい戦略まで古い版に戻る。 */
const CACHE = "ff7r-guide-v23";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.svg",
  "./app.js",
  "./edit-mode.js",
  "./progress.js",
  "./card-edit.js",
  "./data/game.js",
  "./data/route.js",
  "./data/catalogs.js",
  "./data/maps.js",
  "./data/templates.js",
  "./data/settings.js",
  "./data/images.js",
  "./data/enemies.js"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(async path => {
      try {
        const response = await fetch(path, { credentials: "same-origin" });
        if (response && response.ok) await cache.put(path, response.clone());
      } catch (error) {}
    }));
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const old = keys.filter(key => key.startsWith("ff7r-") && key !== CACHE);
    await Promise.all(old.map(key => caches.delete(key)));
    await self.clients.claim();
    if (!old.length) return;
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.all(windows.map(async client => {
      if (typeof client.navigate === "function") {
        try {
          const next = new URL(client.url);
          next.searchParams.set("ff7r-sw", CACHE);
          await client.navigate(next.href);
          return;
        } catch (error) {}
      }
      client.postMessage({ type: "ff7r-reload" });
    }));
  })());
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "ff7r-skip-waiting") self.skipWaiting();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (/\/(?:maps|images)\/[^/]+\.(?:png|jpe?g|gif|webp)$/i.test(url.pathname)) {
    event.respondWith(cacheFirstImage(event.request));
    return;
  }
  event.respondWith(networkFirst(event.request));
});

async function cacheFirstImage(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request.url, { cache: "reload", credentials: "same-origin" });
  if (response && response.ok) await cache.put(request, response.clone());
  return response;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request.url, { cache: "reload", credentials: "same-origin" });
    if (response && response.ok) await cache.put(request.url, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === "navigate") {
      const home = await caches.match("./index.html");
      if (home) return home;
    }
    throw error;
  }
}
