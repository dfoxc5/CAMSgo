// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");
var cacheName = "myapp-cache1";

self.addEventListener('install', function(event) {
  console.log("SW installed");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/sw.js',
        '/index.html',
        '/styles.css',
        '/app/app.module.js',
        '/app/my-app-database.js',
        '/app/my-app-database.service.js',
        '/app/estates.component.js',
        '/app/estate.js',
        '/app/estate.service.js',
        '/app/estate-detail.component.js',
        '/app/estate-detail.component.html',
        '/app/app.component.js',
        '/app/app-routing.module.js',
        '/main.js',
        '/node_modules/zone.js/dist/zone.min.js',
        '/node_modules/systemjs/dist/system.src.js',
        '/systemjs.config.js',
        '/node_modules/core-js/client/shim.min.js',
        '/manifest.json',
      ]);
    })
  )
  self.skipWaiting()
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
  event.waitUntil(
      caches.keys().then(function(names) {
         Promise.all(
            names.filter(function(name) {
               return name !== cacheName;
            }).map(function(name) {
               return caches.delete(name);
            })
         )
      })
   )
});

self.addEventListener('update', function(event) {
   self.skipWaiting();
})

self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!:  ", event.request.url);
  try {
   event.respondWith(
      caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
      })
   )} 
   catch (error) {
      console.log(event.request);
   }
});
