/**
 * js/core/auth-sso.js
 * Cross-Domain Ecosystem Single Sign-On (SSO) Module for COSY Applications.
 * Manages cross-repo session handling via shared Supabase storage.
 */

(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    root.COSY_SSO = factory();
    if (!root.COSY) root.COSY = {};
    root.COSY.SSO = root.COSY_SSO;
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const SUPABASE_URL = (typeof window !== "undefined" && (window.COSY_SUPABASE_URL || window.ENV_SUPABASE_URL)) || "https://ulklvwevdegbafohqrtr.supabase.co";
  const SUPABASE_ANON_KEY = (typeof window !== "undefined" && (window.COSY_SUPABASE_ANON_KEY || window.ENV_SUPABASE_ANON_KEY)) || "sb_publishable_Er4yh5ohluWpAQUmrbzpCQ_D9Zj_EbF";

  let client = null;

  function getSupabaseClient() {
    if (client) return client;
    if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { storageKey: "cosy-auth", persistSession: true }
      });
      return client;
    }
    return null;
  }

  function cleanHashTokens() {
    if (typeof window === "undefined" || !window.location || !window.location.hash) return;
    const hash = window.location.hash;
    if (hash.includes("access_token") || hash.includes("refresh_token")) {
      if (window.history && window.history.replaceState) {
        const cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, document.title, cleanUrl);
      }
    }
  }

  function getTransferUrl(targetUrl) {
    return targetUrl;
  }

  async function initSSO() {
    if (typeof window === "undefined") return null;

    cleanHashTokens();

    const sbClient = getSupabaseClient();

    if (sbClient) {
      try {
        const { data: sessionData } = await sbClient.auth.getSession();
        if (sessionData && sessionData.session && sessionData.session.user) {
          const u = sessionData.session.user;
          const role = localStorage.getItem("cosy_user_role") || "student";
          const cosyUser = { id: u.id, email: u.email, role: role };
          localStorage.setItem("cosy_user", JSON.stringify(cosyUser));
          window.COSY_USER = cosyUser;
          return cosyUser;
        }
      } catch (err) {}
    }

    try {
      const stored = localStorage.getItem("cosy_user");
      if (stored) {
        window.COSY_USER = JSON.parse(stored);
        return window.COSY_USER;
      }
    } catch (e) {}

    return null;
  }

  async function logout() {
    const sbClient = getSupabaseClient();
    if (sbClient) {
      await sbClient.auth.signOut();
    }
    localStorage.removeItem("cosy_user");
    localStorage.removeItem("cosy_user_role");
    delete window.COSY_USER;
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }

  if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initSSO);
    } else {
      initSSO();
    }
  }

  return {
    getSupabaseClient,
    initSSO,
    getTransferUrl,
    logout
  };
});
