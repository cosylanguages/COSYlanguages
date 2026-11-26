/**
 * js/core/login-redirect.js
 * Resolves where to send a user after a successful sign-in.
 *
 * The shared sign-in page lives on the same origin as every COSYlanguages site
 * (https://cosylanguages.github.io). A redirect is honoured only when it points
 * back into that origin, so the page the visitor came from is restored without
 * opening an open-redirect hole. When no usable redirect is supplied the browser
 * referrer is used, and finally a caller-provided fallback.
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COSYLoginRedirect = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // A redirect must look like a URL or a page path. A bare token such as a
  // manual id ("en-b1-grammar") must not be resolved as a relative file name.
  function looksLikeRedirect(value) {
    if (typeof value !== "string") return false;
    var raw = value.trim();
    if (!raw) return false;
    if (/^(https?:)?\/\//i.test(raw)) return true;
    if (raw.charAt(0) === "/") return true;
    if (/^\.\.?\//.test(raw)) return true;
    return /^[^/?#]+\.html(?:[?#].*)?$/i.test(raw);
  }

  function isLoginPath(pathname) {
    var value = pathname || "";
    for (var i = 0; i < 3; i += 1) {
      if (/\/login(?:\.html)?\/?$/i.test(value)) return true;
      try {
        var decoded = decodeURIComponent(value);
        if (decoded === value) break;
        value = decoded;
      } catch (e) {
        break;
      }
    }
    return /\/login(?:\.html)?\/?$/i.test(value);
  }

  function parseSafe(raw, base, origin) {
    if (!looksLikeRedirect(raw)) return null;

    var url;
    try {
      url = new URL(raw.trim(), base);
    } catch (e) {
      return null;
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (url.username || url.password) return null;
    if (url.origin !== origin) return null;
    if (isLoginPath(url.pathname)) return null;
    return url;
  }

  function resolve(raw, options) {
    var opts = options || {};
    var base = opts.base || (typeof window !== "undefined" ? window.location.href : undefined);
    var origin = opts.origin || (typeof window !== "undefined" ? window.location.origin : undefined);
    if (!base || !origin) return opts.fallback || null;

    var candidates = [raw, opts.referrer];
    for (var i = 0; i < candidates.length; i += 1) {
      var safe = parseSafe(candidates[i], base, origin);
      if (safe) return safe.href;
    }

    return opts.fallback || null;
  }

  return {
    resolve: resolve,
    isSafeRedirect: function (raw, options) {
      var opts = options || {};
      var base = opts.base || (typeof window !== "undefined" ? window.location.href : undefined);
      var origin = opts.origin || (typeof window !== "undefined" ? window.location.origin : undefined);
      return Boolean(base && origin && parseSafe(raw, base, origin));
    }
  };
});
