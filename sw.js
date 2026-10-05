self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('44club-v10').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/index-en.html',
      '/logo11.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
