const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button is clicked");
});

// Check if service worker is supported in the browser
if ("serviceWorker" in navigator) {
    // Register the service worker directly with the sw.js file path
    navigator.serviceWorker.register("./sw.js")
        .then((registration) => {
            console.log(
                "Service Worker registered with scope:", registration.scope
            );
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}