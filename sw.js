const CACHE_NAME = 'cosy-v4';
const STATIC_ASSETS = [
  '/COSYlanguages/',
  '/COSYlanguages/index.html',
  '/COSYlanguages/practice.html',
  '/COSYlanguages/events.html',
  '/COSYlanguages/days.html',
  '/COSYlanguages/css/mobile.css',
  '/COSYlanguages/js/mobile.js',
  '/COSYlanguages/js/srs.js',
  '/COSYlanguages/images/cosylanguages.png',
  '/COSYlanguages/images/cosyenglish.png',
  '/COSYlanguages/images/cosyfrench.png',
  '/COSYlanguages/images/cosyitalian.png',
  '/COSYlanguages/images/cosyrussian.png',
  '/COSYlanguages/images/cosygreek.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip Supabase
  if (url.hostname.includes('supabase.co')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // Network-First for HTML files (always see latest content)
  if (e.request.mode === 'navigate' || e.request.url.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Stale-While-Revalidate for other assets (JS, CSS, Images)
  e.respondWith(
    caches.match(e.request).then(cached => {
      const networked = fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => null);

      return cached || networked;
    })
  );
});
