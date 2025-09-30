
// This is the service worker with the Cache-first network
const CACHE = "pwa-cache-v2";
const IMAGE_CACHE = "pwa-images-v1";

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
  const url = new URL(evt.request.url);
  
  // Cache images from /assets/bible/ with cache-first strategy
  if (url.pathname.includes('/assets/bible/')) {
    evt.respondWith(
      caches.open(IMAGE_CACHE).then(function(cache) {
        return cache.match(evt.request).then(function(response) {
          return response || fetch(evt.request).then(function(networkResponse) {
            // Cache the fetched image for future use
            cache.put(evt.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }
  
  // Default cache-first strategy for other assets
  evt.respondWith(
    caches.match(evt.request).then(function(response) {
      return response || fetch(evt.request);
    })
  );
});
