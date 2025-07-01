    const cache_name="my_cache";
    const urlToCache=[
        "/",
        "/index.html",
        "/script.js",
        "/style.css",
    ]
    self.addEventListener("install",(event)=>{
        event.waitUntil(
            caches.open(cache_name).then(cache=>{
                cache.addAll(urlToCache)
            })
        )
    })
    
    self.addEventListener("fetch",(event)=>{
        event.respondWith(
            caches.match(event.request).then(response=>{
                return response|| fetch(event.request)
            })
            
        )
    })