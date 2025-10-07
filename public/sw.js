
// This is the service worker with the Cache-first network
const CACHE = "pwa-cache-v5";
const IMAGE_CACHE = "pwa-images-v5";

// Add list of files to cache here.
const precacheFiles = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
  '/assets/bible/default.jpg',
  '/assets/hero-bg.jpg',
  '/BibleQuestLogo.png',
  '/BibleQuestLogoDark.png'
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
        if (key !== CACHE && key !== IMAGE_CACHE) {
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
  // Skip non-GET requests
  if (evt.request.method !== 'GET') return;
  
  // Cache images aggressively with cache-first strategy
  if (evt.request.url.includes('/assets/bible/') || evt.request.url.includes('/assets/')) {
    evt.respondWith(
      caches.open(IMAGE_CACHE).then(function(cache) {
        return cache.match(evt.request).then(function(response) {
          // Return cached version if available
          if (response) {
            return response;
          }
          // Otherwise fetch and cache
          return fetch(evt.request).then(function(fetchResponse) {
            // Only cache successful responses
            if (fetchResponse && fetchResponse.status === 200) {
              cache.put(evt.request, fetchResponse.clone());
            }
            return fetchResponse;
          }).catch(function() {
            // Return a fallback if offline and not in cache
            return cache.match('/assets/bible/default.jpg');
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
