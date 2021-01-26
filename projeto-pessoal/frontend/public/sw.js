const CACHE_NAME = 'todo_app';

const urlsToCache = [
    '/',
    './index.html',
    './favicon.ico',
    './todo64.png',
    './todo192.png',
    './todo512.png'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});  