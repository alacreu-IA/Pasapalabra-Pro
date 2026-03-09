// sw.js — Pasapalabra Pro
// IMPORTANTE: Este SW nunca toca el localStorage — solo gestiona caché de archivos

const CACHE_NAME = 'ppro-v3';

const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALAR — cachear assets básicos
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// ACTIVAR — borrar cachés antiguas SOLO de versiones anteriores de esta app
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key.startsWith('ppro-'))
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH — network first, caché como fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
