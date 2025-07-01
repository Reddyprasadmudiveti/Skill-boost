# Service Workers Learning

## Overview

This project demonstrates the implementation of Service Workers for offline capabilities and improved performance in web applications.

## What are Service Workers?

Service Workers are JavaScript files that run in the background, separate from the web page, enabling features that don't need a web page or user interaction. They can:

- Intercept network requests
- Cache resources
- Enable offline functionality
- Handle push notifications
- Manage background sync

## Project Structure

- `index.js` - Express server setup
- `Global/index.html` - Main HTML file
- `Global/script.js` - Client-side JavaScript with Service Worker registration
- `Global/sw.js` - Service Worker implementation
- `Global/style.css` - Styling for the application

## Service Worker Implementation

The Service Worker in this project:

1. Caches essential files during installation
2. Intercepts fetch requests
3. Returns cached responses when available
4. Falls back to network requests when cache misses occur

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `node index.js`
3. Navigate to `http://localhost:3030` in your browser

## Learning Resources

- [MDN Web Docs: Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Google Developers: Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Service Workies Game](https://serviceworkies.com/) - Learn Service Workers through a game

## Daily Learning Notes

- Day 1: Set up basic Service Worker registration and installation
- Day 2: Implemented cache strategy for offline functionality
- Day 3: Tested offline capabilities and improved error handling

## Next Steps

- Implement versioning for cache management
- Add background sync capabilities
- Explore push notifications
