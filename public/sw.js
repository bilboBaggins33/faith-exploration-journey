
// This is the service worker with network-first for pages, cache-first for assets
const CACHE = "pwa-cache-v7";
const IMAGE_CACHE = "pwa-images-v7";

// Add list of files to cache here.
const precacheFiles = [
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
  
  const url = new URL(evt.request.url);
  
  // For navigation requests (HTML pages) - use network-first strategy
  if (evt.request.mode === 'navigate' || 
      evt.request.destination === 'document' ||
      url.pathname === '/' ||
      url.pathname.endsWith('.html')) {
    evt.respondWith(
      fetch(evt.request)
        .then(function(response) {
          // Cache the fresh response for offline use
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE).then(function(cache) {
              cache.put(evt.request, responseClone);
            });
          }
          return response;
        })
        .catch(function() {
          // Fallback to cache if network fails
          return caches.match(evt.request).then(function(response) {
            return response || caches.match('/');
          });
        })
    );
    return;
  }
  
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
    return;
  }
  
  // For other static assets - cache-first
  evt.respondWith(
    caches.match(evt.request).then(function(response) {
      return response || fetch(evt.request).then(function(fetchResponse) {
        if (fetchResponse && fetchResponse.status === 200) {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(evt.request, responseClone);
          });
        }
        return fetchResponse;
      });
    })
  );
});
