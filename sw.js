self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Пропускаем все запросы как есть
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
