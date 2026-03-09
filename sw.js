// sw.js — Pasapalabra Pro
// Cambia CACHE_VERSION cada vez que subas una versión nueva a GitHub
// (o déjalo así — se actualiza solo al detectar cambios en el archivo)

const CACHE_VERSION = 'ppro-v' + Date.now();
const CACHE_NAME = CACHE_VERSION;

const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALAR — cachear assets básicos
self.addEventListener('install', event => {
  self.skipWaiting(); // Activar inmediatamente sin esperar
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// ACTIVAR — borrar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim()) // Tomar control de todas las pestañas
  );
});

// FETCH — network first, caché como fallback
// Así siempre intenta descargar lo nuevo de GitHub
self.addEventListener('fetch', event => {
  // Solo interceptar GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la red funciona, guardar en caché y devolver
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Sin red — usar caché
        return caches.match(event.request);
      })
  );
});
