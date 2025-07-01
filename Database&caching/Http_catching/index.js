import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()

const PORT = 5050


app.use((req,res,next)=>{
    // The console.log("server") is executed on every request because middleware runs
    // for each request that comes to the server, regardless of caching.
    // Browser caching happens on the client side, not the server side.
    // Even when a browser uses a cached response, it still sends a request to the server
    // to validate if the cache is still valid (using If-Modified-Since or If-None-Match headers)
    
    // res.setHeader('cache-control', 'public,max-age=36000');
    res.setHeader("expires", new Date(Date.now() + 3600000).toUTCString());
    
    // Log if the request is using cache validation
    if (req.headers['if-modified-since'] || req.headers['if-none-match']) {
        console.log(`Cache validation request from ${req.ip} for ${req.url}`);
    } else {
        console.log(`Fresh request (no cache) from ${req.ip} for ${req.url}`);
    }
    
    console.log("server") // This runs for every request that reaches the server
    next()
})

// Set up static file serving
app.use(express.static(path.join(__dirname, "Global"),{
    etag: false,  // ETag is disabled, so can't use If-None-Match for validation
    cacheControl: false, // Not sending Cache-Control headers from static middleware
    lastModified: true,  // Using Last-Modified for cache validation
}))
// Define a route for the root path
app.get("/", (req, res) => {
    // For a proper 304 Not Modified response, you should check If-Modified-Since header
    // and return 304 without sending the full file if it hasn't changed
    const ifModifiedSince = req.headers['if-modified-since'];
    if (ifModifiedSince) {
        console.log("Browser is using cached content, sending 304 Not Modified");
        res.status(304).end();
    } else {
        console.log("Sending full content (not cached by browser)");
        res.sendFile(path.join(__dirname, "Global", "index.html"));
    }
})

// app.get("/remove",(req,res,next)=>{
//     res.setHeader("clear-site-data", '*')
//     res.send("Cache has been cleared")
// })

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


// if you want to see the cache data then go to http://localhost:5050/remove if you inspect the network tab you will see the cache data
// Note: Even with caching, the server still receives requests and runs middleware.
// The browser might receive a 304 Not Modified response instead of the full content,
// but the server code still executes for each request.