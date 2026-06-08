# Planned PWA and offline improvements

## Current state
- sw.js exists (service worker registered)
- manifest.json exists
- Caching strategy unknown or possibly too aggressive

## Known risk
Without a defined caching strategy, the service worker may serve stale versions
of grammar, vocabulary, and curriculum JSON files to students even after updates.
Students see old content and do not know it. This is a silent bug.

## Planned improvements
| Improvement | Priority | Notes |
|-------------|----------|-------|
| Define cache strategy in sw.js | High | Cache-first for CSS/JS/fonts. Network-first for JSON data files |
| Version the cache name | High | e.g. cosy-cache-v3 — increment on each deploy to bust old cache |
| New version available notification | Medium | Banner when SW detects update, prompt user to refresh |
| Offline fallback page | Medium | Friendly offline.html when network unavailable |
| Cache grammar/vocab JSON for offline practice | Medium | Let students practice offline with cached data |
| Test install prompt on iOS and Android | Medium | PWA install currently untested on mobile |
