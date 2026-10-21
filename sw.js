/**
 * COSYlanguages hub service worker.
 *
 * - Pre-caches the hub shell so the home, courses and language pages open offline.
 * - Pre-caching is best-effort: one missing file can no longer abort the whole install
 *   (the previous cache.addAll() call did exactly that).
 * - Pages and scripts are network-first, so visitors always get fresh code.
 * - Images, fonts and audio are cache-first with a background refresh.
 * - Only same-origin GET requests are handled. Sibling sites (COSYmagazine, COSYpractice, ...)
 *   run their own service workers.
 */
const CACHE_NAME = 'cosy-hub-v1';

const SHELL = [
  './',
  './index.html',
  './placement-quiz.html',
  './login.html',
  './privacy.html',
  './404.html',
  './about/index.html',
  './courses/index.html',
  './courses/general.html',
  './courses/spoken.html',
  './courses/exam-preparation.html',
  './courses/travelling.html',
  './courses/professional.html',
  './courses/relocation.html',
  './comparative/index.html',
  './hybrid/index.html',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './css/layout.css',
  './css/home.css',
  './css/mobile.css',
  './css/shared-nav.css',
  './js/core/config.js',
  './js/core/engine.js',
  './js/core/i18n.js',
  './js/core/ui.js',
  './js/data/languages.js',
  './images/logos/cosylanguages.png',
  './manifest.json'
];

async function openCache() {
  try {
    return self.caches ? await caches.open(CACHE_NAME) : null;
  } catch (err) {
    console.warn('[SW] Cache unavailable:', err);
    return null;
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await openCache();
      if (cache) {
        const results = await Promise.allSettled(SHELL.map((url) => cache.add(url)));
        const failed = results.filter((r) => r.status === 'rejected').length;
        if (failed) console.warn('[SW] ' + failed + ' shell file(s) could not be pre-cached');
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        if (self.caches) {
          const keys = await caches.keys();
          await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
        }
      } catch (err) {
        console.warn('[SW] Cleanup failed:', err);
      }
      await self.clients.claim();
    })()
  );
});

async function put(request, response) {
  const cache = await openCache();
  if (cache) await cache.put(request, response).catch(() => {});
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isCode =
    request.mode === 'navigate' ||
    /\.(html|js|css|json)$/.test(url.pathname);

  if (isCode) {
    // Network-first, fall back to cache when offline.
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) put(request, res.clone());
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          if (request.mode === 'navigate') return caches.match('./404.html');
          return Response.error();
        })
    );
    return;
  }

  // Cache-first with background refresh for media.
  event.respondWith(
    caches.match(request).then((cached) => {
      const refresh = fetch(request)
        .then((res) => {
          if (res.ok) put(request, res.clone());
          return res;
        })
        .catch(() => null);
      return cached || refresh;
    })
  );
});
