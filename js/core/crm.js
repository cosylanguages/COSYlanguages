/**
 * js/core/crm.js
 * Founder CRM Lead Submission & Management Helper Module for COSYlanguages.
 * Handles public lead ingestion and founder CRM API calls via Supabase JS Client.
 */

(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    root.COSY_CRM = factory();
    if (!root.COSY) root.COSY = {};
    root.COSY.CRM = root.COSY_CRM;
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const SUPABASE_URL = (typeof window !== "undefined" && (window.COSY_SUPABASE_URL || window.ENV_SUPABASE_URL)) || "https://iajkejcmoykubthlwfra.supabase.co";
  const SUPABASE_ANON_KEY = (typeof window !== "undefined" && (window.COSY_SUPABASE_ANON_KEY || window.ENV_SUPABASE_ANON_KEY)) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhamtlamNtb3lrdWJ0aGx3ZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjYwOTUsImV4cCI6MjA5NjQwMjA5NX0.mGY94U3Ei9eLoFbWPIcUfdGRCfjQ2OBYixQ1eyZai-U";

  function getSupabaseClient() {
    if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
      return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return null;
  }

  /**
   * Public function to submit a new lead from contact forms, placement quiz, or landing pages.
   * @param {Object} leadData
   * @param {string} leadData.full_name
   * @param {string} [leadData.email]
   * @param {string} [leadData.phone]
   * @param {string} [leadData.telegram]
   * @param {string} [leadData.source] e.g., 'placement_quiz', 'website_form', 'whatsapp'
   * @param {string} [leadData.target_language] e.g., 'French', 'English'
   * @param {string} [leadData.notes]
   * @returns {Promise<{success: boolean, data?: any, error?: string}>}
   */
  async function submitLead(leadData) {
    if (!leadData || !leadData.full_name) {
      return { success: false, error: "Name is required." };
    }

    const sb = getSupabaseClient();
    if (!sb) {
      console.warn("[COSY CRM] Supabase SDK client not loaded; lead saved locally.");
      saveLocalLeadFallback(leadData);
      return { success: true, localOnly: true };
    }

    try {
      const payload = {
        full_name: String(leadData.full_name).trim(),
        email: leadData.email ? String(leadData.email).trim() : null,
        phone: leadData.phone ? String(leadData.phone).trim() : null,
        telegram: leadData.telegram ? String(leadData.telegram).trim() : null,
        source: leadData.source || "website_form",
        target_language: leadData.target_language || "General",
        status: "new_lead",
        notes: leadData.notes || ""
      };

      const { data, error } = await sb.from("crm_contacts").insert([payload]).select();

      if (error) {
        console.warn("[COSY CRM] Supabase lead insertion notice:", error.message);
        saveLocalLeadFallback(payload);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err) {
      console.error("[COSY CRM] Error submitting lead:", err);
      saveLocalLeadFallback(leadData);
      return { success: false, error: err.message || "Unknown error" };
    }
  }

  function saveLocalLeadFallback(leadData) {
    try {
      const stored = JSON.parse(localStorage.getItem("cosy_crm_pending_leads") || "[]");
      stored.push({ ...leadData, timestamp: new Date().toISOString() });
      localStorage.setItem("cosy_crm_pending_leads", JSON.stringify(stored));
    } catch (e) {}
  }

  return {
    submitLead,
    getSupabaseClient
  };
});
