// name the cash
const shoppingList = 'shopping-list-pwa-v1';
// name the items to cash
const assets = [
    "/",
    "css/normalize.css",
    "css/style.css",
    "js/app.js"
];
// cash funtcion
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(shoppingList).then(cache => {
            cache.addAll(assets)
        })
    )
})
// fetch assets function 
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})