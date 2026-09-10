/**
 * js/core/config.js
 * Central Configuration Layer for COSY Repository URLs and Ecosystem Routes.
 * Single source of truth across COSYlanguages, COSYmanuals, COSYevents, COSYworld, COSYgames, and COSYtools.
 */

(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    root.COSY_CONFIG_MODULE = factory();
    if (!root.COSY_CONFIG) {
      root.COSY_CONFIG = root.COSY_CONFIG_MODULE;
    }
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Production base URLs for the 6 core COSY repositories
  const PRODUCTION_URLS = {
    COSYlanguages: "https://cosylanguages.github.io/COSYlanguages/",
    COSYmanuals: "https://cosylanguages.github.io/COSYmanuals/",
    COSYevents: "https://cosylanguages.github.io/COSYevents/",
    COSYworld: "https://cosylanguages.github.io/COSYworld/",
    COSYgames: "https://cosylanguages.github.io/COSYgames/",
    COSYtools: "https://cosylanguages.github.io/COSYtools/"
  };

  // Development localhost port mappings (fallback to relative if not running standalone)
  const DEV_URLS = {
    COSYlanguages: "http://localhost:3000/",
    COSYmanuals: "http://localhost:3001/",
    COSYevents: "http://localhost:3002/",
    COSYworld: "http://localhost:3003/",
    COSYgames: "http://localhost:3004/",
    COSYtools: "http://localhost:3005/"
  };

  // Preview staging environment template/map
  const PREVIEW_URLS = {
    COSYlanguages: "https://preview.cosylanguages.com/",
    COSYmanuals: "https://preview-manuals.cosylanguages.com/",
    COSYevents: "https://preview-events.cosylanguages.com/",
    COSYworld: "https://preview-world.cosylanguages.com/",
    COSYgames: "https://preview-games.cosylanguages.com/",
    COSYtools: "https://preview-tools.cosylanguages.com/"
  };

  /**
   * Detect current active environment: 'development', 'preview', or 'production'.
   * @param {Object} [opts]
   * @returns {string}
   */
  function detectEnvironment(opts) {
    opts = opts || {};
    if (opts.env) return opts.env;

    if (typeof process !== "undefined" && process.env) {
      if (process.env.COSY_ENV) return process.env.COSY_ENV;
      if (process.env.NODE_ENV === "development") return "development";
    }

    if (typeof window !== "undefined") {
      if (window.COSY_ENV) return window.COSY_ENV;
      const host = window.location ? window.location.hostname : "";
      if (host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.")) {
        return "development";
      }
      if (host.includes("preview") || host.includes("staging") || host.includes("vercel.app") || host.includes("netlify.app")) {
        return "preview";
      }
    }

    return "production";
  }

  /**
   * Check whether current user is authorized to view restricted COSYmanuals endpoints.
   * @param {Object} [authContext]
   * @returns {boolean}
   */
  function isManualsAuthorized(authContext) {
    if (authContext && typeof authContext.isTeacher === "boolean") {
      return authContext.isTeacher || authContext.isAdmin === true;
    }

    if (typeof window !== "undefined") {
      try {
        if (window.COSY_USER && (window.COSY_USER.role === "teacher" || window.COSY_USER.role === "admin" || window.COSY_USER.isTeacher)) {
          return true;
        }
        const role = window.localStorage ? window.localStorage.getItem("cosy_user_role") : null;
        if (role === "teacher" || role === "admin") {
          return true;
        }
        const teacherCode = window.localStorage ? window.localStorage.getItem("cosy_teacher_passcode") : null;
        if (teacherCode && teacherCode.length > 0) {
          return true;
        }
      } catch (e) {
        // Fail safely on storage access errors
      }
    }

    return false;
  }

  /**
   * Resolve all ecosystem base URLs for given env and context.
   * @param {Object} [options]
   * @returns {Object} Map of repo keys to base URLs (or null for unauthorized restricted repos)
   */
  function getEcosystemConfig(options) {
    options = options || {};
    const env = detectEnvironment(options);

    let baseSet = Object.assign({}, PRODUCTION_URLS);
    if (env === "development") {
      baseSet = Object.assign({}, DEV_URLS);
    } else if (env === "preview") {
      baseSet = Object.assign({}, PREVIEW_URLS);
    }

    // Process env overrides
    if (typeof process !== "undefined" && process.env) {
      if (process.env.COSY_LANGUAGES_URL) baseSet.COSYlanguages = process.env.COSY_LANGUAGES_URL;
      if (process.env.COSY_MANUALS_URL) baseSet.COSYmanuals = process.env.COSY_MANUALS_URL;
      if (process.env.COSY_EVENTS_URL) baseSet.COSYevents = process.env.COSY_EVENTS_URL;
      if (process.env.COSY_WORLD_URL) baseSet.COSYworld = process.env.COSY_WORLD_URL;
      if (process.env.COSY_GAMES_URL) baseSet.COSYgames = process.env.COSY_GAMES_URL;
      if (process.env.COSY_TOOLS_URL) baseSet.COSYtools = process.env.COSY_TOOLS_URL;
    }

    // Window config overrides
    if (typeof window !== "undefined" && window.COSY_CONFIG && window.COSY_CONFIG.urls) {
      Object.assign(baseSet, window.COSY_CONFIG.urls);
    }

    // Explicit options overrides
    if (options.overrides) {
      Object.assign(baseSet, options.overrides);
    }

    // Normalize trailing slashes
    const result = {};
    Object.keys(baseSet).forEach((key) => {
      let val = baseSet[key];
      if (val && typeof val === "string") {
        if (!val.endsWith("/")) val += "/";
        result[key] = val;
      } else {
        result[key] = null;
      }
    });

    // Security check: Restricted COSYmanuals access check
    if (!options.allowRestricted && !isManualsAuthorized(options.auth)) {
      result.COSYmanuals = null;
    }

    return result;
  }

  /**
   * Retrieve single repository base URL safely.
   * @param {string} repoKey - 'COSYlanguages' | 'COSYmanuals' | 'COSYevents' | 'COSYworld' | 'COSYgames' | 'COSYtools'
   * @param {Object} [options]
   * @returns {string|null}
   */
  function getRepoUrl(repoKey, options) {
    if (!repoKey || typeof repoKey !== "string") return null;
    const config = getEcosystemConfig(options);
    return config[repoKey] || null;
  }

  /**
   * Helper to safely join route path and query parameters to repo base URL.
   * @param {string} repoKey
   * @param {string} [path]
   * @param {Object|string} [queryParams]
   * @param {Object} [options]
   * @returns {string|null}
   */
  function joinRoute(repoKey, path, queryParams, options) {
    const baseUrl = getRepoUrl(repoKey, options);
    if (!baseUrl) return null;

    let cleanPath = (path || "").toString().trim();
    if (cleanPath.startsWith("/")) {
      cleanPath = cleanPath.substring(1);
    }

    let url = baseUrl + cleanPath;

    if (queryParams) {
      let queryString = "";
      if (typeof queryParams === "string") {
        queryString = queryParams.startsWith("?") ? queryParams.substring(1) : queryParams;
      } else if (typeof queryParams === "object") {
        const parts = [];
        Object.keys(queryParams).forEach((k) => {
          if (queryParams[k] !== undefined && queryParams[k] !== null) {
            parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(queryParams[k]));
          }
        });
        queryString = parts.join("&");
      }

      if (queryString) {
        url += (url.includes("?") ? "&" : "?") + queryString;
      }
    }

    return url;
  }

  /**
   * Get canonical URL for a repository route.
   * @param {string} repoKey
   * @param {string} [path]
   * @returns {string|null}
   */
  function getCanonicalUrl(repoKey, path) {
    // Canonical URLs use production environment and bypass authorization masking
    const prodBase = PRODUCTION_URLS[repoKey];
    if (!prodBase) return null;

    let cleanPath = (path || "").toString().trim();
    if (cleanPath.startsWith("/")) {
      cleanPath = cleanPath.substring(1);
    }
    return prodBase + cleanPath;
  }

  return {
    PRODUCTION_URLS,
    DEV_URLS,
    PREVIEW_URLS,
    detectEnvironment,
    isManualsAuthorized,
    getEcosystemConfig,
    getRepoUrl,
    joinRoute,
    getCanonicalUrl
  };
});
