/**
 * js/core/auth-sso.js
 * Cross-Domain Ecosystem Single Sign-On (SSO) Module for COSY Applications.
 * Manages cross-repo session transfer, token restoration from hash, and link interception.
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

  const ECOSYSTEM_DOMAINS = ["COSYplatform", "COSYmanuals", "COSYevents", "COSYgames", "COSYtools", "COSYlanguages"];

  let client = null;

  function getSupabaseClient() {
    if (client) return client;
    if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      return client;
    }
    return null;
  }

  function parseHashParams() {
    if (typeof window === "undefined" || !window.location.hash) return null;
    const hash = window.location.hash.substring(1);
    if (!hash.includes("access_token")) return null;

    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken) {
      return {
        access_token: accessToken,
        refresh_token: refreshToken || ""
      };
    }
    return null;
  }

  async function getActiveSession() {
    const sbClient = getSupabaseClient();
    if (sbClient) {
      try {
        const { data } = await sbClient.auth.getSession();
        if (data && data.session) return data.session;
      } catch (e) {}
    }
    return null;
  }

  function getTransferUrl(targetUrl, session) {
    if (!targetUrl) return targetUrl;
    if (!session || !session.access_token) return targetUrl;

    const separator = targetUrl.includes("#") ? "&" : "#";
    return `${targetUrl}${separator}access_token=${encodeURIComponent(session.access_token)}&refresh_token=${encodeURIComponent(session.refresh_token || "")}&type=sso`;
  }

  function attachEcosystemLinkInterceptors() {
    if (typeof document === "undefined") return;

    document.addEventListener("click", async (event) => {
      const anchor = event.target.closest("a");
      if (!anchor || !anchor.href) return;

      const href = anchor.href;
      const isEcosystem = ECOSYSTEM_DOMAINS.some((domain) => href.includes(domain));
      if (!isEcosystem) return;

      const session = await getActiveSession();
      if (session && session.access_token) {
        // Append SSO transfer token if not already present
        if (!href.includes("access_token=")) {
          anchor.href = getTransferUrl(href, session);
        }
      }
    });
  }

  async function initSSO() {
    if (typeof window === "undefined") return null;

    attachEcosystemLinkInterceptors();

    const hashTokens = parseHashParams();
    const sbClient = getSupabaseClient();

    if (hashTokens && sbClient) {
      try {
        const { data, error } = await sbClient.auth.setSession({
          access_token: hashTokens.access_token,
          refresh_token: hashTokens.refresh_token
        });

        if (!error && data && data.user) {
          if (window.history && window.history.replaceState) {
            const cleanUrl = window.location.pathname + window.location.search;
            window.history.replaceState(null, document.title, cleanUrl);
          }

          let role = "student";
          const { data: profile } = await sbClient
            .from("profiles")
            .select("role")
            .eq("id", data.user.id)
            .single();

          if (profile && profile.role) role = profile.role;

          const cosyUser = {
            id: data.user.id,
            email: data.user.email,
            role: role
          };

          localStorage.setItem("cosy_user", JSON.stringify(cosyUser));
          localStorage.setItem("cosy_user_role", role);
          window.COSY_USER = cosyUser;

          console.log("[COSY SSO] Successfully authenticated via ecosystem SSO token transfer.");
          return cosyUser;
        }
      } catch (err) {
        console.warn("[COSY SSO] Failed to restore session from hash token:", err);
      }
    }

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
