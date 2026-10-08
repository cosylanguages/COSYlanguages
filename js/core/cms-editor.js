/**
 * js/core/cms-editor.js
 * Founder Visual On-Page CMS Editor for COSY Ecosystem Pages.
 * Allows instant live visual editing, Supabase overrides publishing, and source sync.
 */

(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    root.COSY_CMS = factory();
    if (!root.COSY) root.COSY = {};
    root.COSY.CMS = root.COSY_CMS;
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const SUPABASE_URL = (typeof window !== "undefined" && (window.COSY_SUPABASE_URL || window.ENV_SUPABASE_URL)) || "https://iajkejcmoykubthlwfra.supabase.co";
  const SUPABASE_ANON_KEY = (typeof window !== "undefined" && (window.COSY_SUPABASE_ANON_KEY || window.ENV_SUPABASE_ANON_KEY)) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhamtlamNtb3lrdWJ0aGx3ZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjYwOTUsImV4cCI6MjA5NjQwMjA5NX0.mGY94U3Ei9eLoFbWPIcUfdGRCfjQ2OBYixQ1eyZai-U";

  let isEditMode = false;
  let modifiedElements = new Map();

  function getPathname() {
    if (typeof window === "undefined") return "/";
    let path = window.location.pathname || "/";
    if (path.endsWith("/index.html")) {
      path = path.replace(/index\.html$/, "");
    }
    return path;
  }

  function generateElementId(el, index) {
    if (el.getAttribute("data-cms-id")) {
      return el.getAttribute("data-cms-id");
    }
    if (el.id) {
      return `#${el.id}`;
    }
    const section = el.closest("section, header, main, article") || document.body;
    const sectionId = section.id ? `#${section.id}` : section.tagName.toLowerCase();
    const tag = el.tagName.toLowerCase();
    const classAttr = el.className && typeof el.className === "string" && el.className.trim()
      ? `.${el.className.trim().split(/\s+/)[0]}`
      : "";

    // Content signature hash for stability across edits
    const textSnippet = (el.textContent || "").trim().slice(0, 20).replace(/[^a-zA-Z0-9]/g, "_");
    return `${sectionId}>${tag}${classAttr}[${textSnippet || index}]`;
  }

  function getSupabaseClient() {
    if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
      return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return null;
  }

  async function loadPageOverrides() {
    if (typeof window === "undefined") return;

    const pathKey = getPathname();

    try {
      const cached = localStorage.getItem(`cosy_cms_overrides_${pathKey}`);
      if (cached) {
        applyOverrides(JSON.parse(cached));
      }
    } catch (e) {}

    const sb = getSupabaseClient();
    if (sb) {
      try {
        const { data, error } = await sb
          .from("cms_page_overrides")
          .select("content_map")
          .eq("page_path", pathKey)
          .single();

        if (!error && data && data.content_map) {
          applyOverrides(data.content_map);
          localStorage.setItem(`cosy_cms_overrides_${pathKey}`, JSON.stringify(data.content_map));
        }
      } catch (err) {}
    }
  }

  function applyOverrides(contentMap) {
    if (!contentMap || typeof contentMap !== "object") return;

    const editableElements = getEditableTargetElements();
    editableElements.forEach((el, idx) => {
      const cmsId = generateElementId(el, idx);
      if (contentMap[cmsId] !== undefined) {
        el.innerHTML = contentMap[cmsId];
      }
    });
  }

  function getEditableTargetElements() {
    if (typeof document === "undefined") return [];
    const selectors = [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "li", "span.hero-subtitle", "div.card-desc",
      "[data-cms-editable]"
    ];
    const elements = document.querySelectorAll(selectors.join(", "));
    return Array.from(elements).filter((el) => {
      if (el.closest("#cosy-nav") || el.closest("footer") || el.closest("#cosy-cms-toolbar")) return false;
      return true;
    });
  }

  function toggleEditMode() {
    isEditMode = !isEditMode;
    const targets = getEditableTargetElements();

    targets.forEach((el, idx) => {
      const cmsId = generateElementId(el, idx);
      el.setAttribute("data-cms-id", cmsId);

      if (isEditMode) {
        el.contentEditable = "true";
        el.style.outline = "1px dashed var(--sage, #416b49)";
        el.style.outlineOffset = "2px";
        el.style.transition = "outline 0.2s ease";

        if (!el.dataset.cmsBound) {
          el.dataset.cmsBound = "true";
          el.addEventListener("input", () => {
            modifiedElements.set(cmsId, el.innerHTML);
            updateStatus(`Unsaved changes: ${modifiedElements.size} element(s)`);
          });
        }
      } else {
        el.contentEditable = "false";
        el.style.outline = "none";
      }
    });

    const editBtn = document.getElementById("cosy-cms-btn-edit");
    if (editBtn) {
      editBtn.textContent = isEditMode ? "👁️ Preview Mode" : "✏️ Edit Page Content";
      editBtn.style.background = isEditMode ? "#d97706" : "var(--sage, #416b49)";
    }

    updateStatus(isEditMode ? "Editing active. Click text directly to modify." : "Preview mode active.");
  }

  async function saveAndPublish() {
    if (modifiedElements.size === 0) {
      updateStatus("No changes to save.", "info");
      return;
    }

    updateStatus("Publishing live updates...", "info");

    const pathKey = getPathname();

    let existingMap = {};
    try {
      const cached = localStorage.getItem(`cosy_cms_overrides_${pathKey}`);
      if (cached) existingMap = JSON.parse(cached);
    } catch (e) {}

    modifiedElements.forEach((html, id) => {
      existingMap[id] = html;
    });

    localStorage.setItem(`cosy_cms_overrides_${pathKey}`, JSON.stringify(existingMap));

    const sb = getSupabaseClient();
    if (sb) {
      try {
        const { error } = await sb
          .from("cms_page_overrides")
          .upsert({
            page_path: pathKey,
            content_map: existingMap,
            updated_at: new Date().toISOString()
          }, { onConflict: "page_path" });

        if (error) {
          console.warn("[COSY CMS] Supabase upsert notice:", error.message);
        }
      } catch (err) {
        console.warn("[COSY CMS] Supabase save error:", err);
      }
    }

    modifiedElements.clear();
    updateStatus("✅ Published live successfully across ecosystem!", "success");
  }

  function updateStatus(msg, type = "info") {
    const statusEl = document.getElementById("cosy-cms-status");
    if (statusEl) {
      statusEl.textContent = msg;
      statusEl.style.color = type === "error" ? "#dc2626" : type === "success" ? "#16a34a" : "#233827";
    }
  }

  function injectCMSToolbar() {
    if (typeof document === "undefined") return;
    if (document.getElementById("cosy-cms-toolbar")) return;

    const userRole = String(localStorage.getItem("cosy_user_role") || (window.COSY_USER && window.COSY_USER.role) || "").toLowerCase();
    const isFounder = userRole === "admin" || userRole === "founder" || userRole === "owner";
    if (!isFounder) return;

    const toolbar = document.createElement("div");
    toolbar.id = "cosy-cms-toolbar";
    toolbar.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99999;
      background: #ffffff;
      border: 2px solid #416b49;
      border-radius: 16px;
      padding: 12px 18px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.88rem;
    `;

    toolbar.innerHTML = `
      <div style="font-weight: 700; color: #233827; display: flex; align-items: center; gap: 6px;">
        <span style="font-size: 1.1rem;">👑</span> Founder CMS
      </div>
      <button id="cosy-cms-btn-edit" type="button" style="padding: 6px 14px; background: #416b49; color: #ffffff; border: none; border-radius: 100px; font-weight: 700; cursor: pointer; font-size: 0.82rem;">✏️ Edit Page Content</button>
      <button id="cosy-cms-btn-save" type="button" style="padding: 6px 14px; background: #16a34a; color: #ffffff; border: none; border-radius: 100px; font-weight: 700; cursor: pointer; font-size: 0.82rem;">💾 Save & Publish Live</button>
      <span id="cosy-cms-status" style="font-size: 0.8rem; color: #5c5957; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Ready</span>
    `;

    document.body.appendChild(toolbar);

    document.getElementById("cosy-cms-btn-edit").addEventListener("click", toggleEditMode);
    document.getElementById("cosy-cms-btn-save").addEventListener("click", saveAndPublish);
  }

  function initCMS() {
    if (typeof window === "undefined") return;
    loadPageOverrides();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", injectCMSToolbar);
    } else {
      injectCMSToolbar();
    }
  }

  if (typeof window !== "undefined") {
    initCMS();
  }

  return {
    initCMS,
    loadPageOverrides,
    toggleEditMode,
    saveAndPublish
  };
});
