const CACHE_NAME = 'cosy-v5';
const STATIC_ASSETS = [
  './',
  './index.html',
  './practice/index.html',
  './events/index.html',
  './css/base.css',
  './css/components.css',
  './css/layout.css',
  './css/home.css',
  './css/mobile.css',
  './js/core/engine.js',
  './js/core/i18n.js',
  './js/core/ui.js',
  './js/data/languages.js',
  './js/data/pricing.js',
  './practice/_engine/core.js',
  './practice/_engine/renderers.js',
  './images/logos/cosylanguages.png',
  './images/languages/cosyenglish.png',
  './images/languages/cosyfrench.png',
  './images/languages/cosyitalian.png',
  './images/languages/cosyrussian.png',
  './images/languages/cosygreek.png',
];

async function safeCacheOpen(name) {
  try {
    return await caches.open(name);
  } catch (e) {
    console.warn('[SW] Cache open failed:', e);
    return null;
  }
}

self.addEventListener('install', e => {
  e.waitUntil(
    safeCacheOpen(CACHE_NAME).then(cache => {
      if (cache) return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).catch(err => console.warn('[SW] Activation cleanup failed:', err))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-First for Code Files (HTML, JS, CSS)
  const isCodeFile = e.request.mode === 'navigate' ||
                     url.pathname.endsWith('.html') ||
                     url.pathname.endsWith('.js') ||
                     url.pathname.endsWith('.css');

  if (isCodeFile) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            safeCacheOpen(CACHE_NAME).then(cache => {
              if (cache) cache.put(e.request, clone);
            });
          }
          return res;
        })
        .catch(() => caches.match(e.request).catch(() => null))
    );
    return;
  }

  // Cache-First with background update for Media (Images, Fonts)
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        const networked = fetch(e.request)
          .then(res => {
            if (res.ok) {
              const clone = res.clone();
              safeCacheOpen(CACHE_NAME).then(cache => {
                if (cache) cache.put(e.request, clone);
              });
            }
            return res;
          })
          .catch(() => null);

        return cached || networked;
      })
      .catch(() => fetch(e.request).catch(() => null))
  );
});
