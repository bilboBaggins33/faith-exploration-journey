
// This is the service worker with the Cache-first network
const CACHE = "pwa-cache-v4";
const IMAGE_CACHE = "pwa-images-v4";

// Add list of files to cache here.
const precacheFiles = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png'
];

// Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA] The service worker is being installed.');
  evt.waitUntil(
    caches.open(CACHE).then(function(cache) {
      console.log('[PWA] Adding files to pre-cache');
      return cache.addAll(precacheFiles);
    })
  );
  self.skipWaiting();
});

// Activate event fires when the service worker starts up
self.addEventListener('activate', function(evt) {
  console.log('[PWA] The service worker is activated.');
  // Remove previous cached data from disk
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE) {
          console.log('[PWA] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// Fetch event provides content when offline
self.addEventListener('fetch', function(evt) {
  console.log('[PWA] The service worker is serving the asset.');
  
  // Cache images aggressively
  if (evt.request.url.includes('/assets/bible/') || evt.request.url.includes('/assets/')) {
    evt.respondWith(
      caches.open(IMAGE_CACHE).then(function(cache) {
        return cache.match(evt.request).then(function(response) {
          return response || fetch(evt.request).then(function(fetchResponse) {
            cache.put(evt.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  } else {
    evt.respondWith(
      caches.match(evt.request).then(function(response) {
        return response || fetch(evt.request);
      })
    );
  }
});
