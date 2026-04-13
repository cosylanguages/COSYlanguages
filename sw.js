const CACHE = 'cosy-v3';
const STATIC = [
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
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network first for API calls (Supabase), cache first for static assets
  if (e.request.url.includes('supabase.co')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    }).catch(() => caches.match('/COSYlanguages/practice.html'))
  );
});
