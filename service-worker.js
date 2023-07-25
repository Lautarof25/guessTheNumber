importScripts('https://storage.googleapis.com/workbox-cdn/release/6.0.2/workbox-sw.js')

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
)