/**
 * js/core/audience.js
 * Privacy-first Audience Preference & Independent Accessibility Engine for COSYlanguages.
 *
 * Supported Audience Preferences:
 * - 'default'  : Standard neutral layout (Safe default, no forced audience selection)
 * - 'children' : Simpler entry points, larger touch controls, visual guidance
 * - 'teens'    : Fast navigation, challenges, gamified streak/autonomy badges
 * - 'adults'   : Clear learning goals, time commitment estimates, practical outcomes
 * - 'seniors'  : Larger text, high contrast, calm presentation with generous spacing
 *
 * Independent Accessibility Settings:
 * - Text Scaling    : '1.0', '1.15', '1.25', '1.40'
 * - Reduced Motion  : 'false', 'true'
 *
 * Data Sovereignty & Privacy:
 * - Zero age or birthdate collection.
 * - Zero behavioral tracking or AI profiling.
 * - Local-only storage in browser localStorage.
 */

(function () {
    'use strict';

    window.COSY = window.COSY || {};

    var AUDIENCE_KEY = 'cosy_audience_preference';
    var TEXT_SCALE_KEY = 'cosy_accessibility_text_scale';
    var REDUCED_MOTION_KEY = 'cosy_accessibility_reduced_motion';

    var VALID_AUDIENCES = ['default', 'children', 'teens', 'adults', 'seniors'];
    var VALID_SCALES = ['1.0', '1.15', '1.25', '1.40'];

    /* ── State Helpers ── */
    function getStoredAudience() {
        try {
            var val = localStorage.getItem(AUDIENCE_KEY);
            return (val && VALID_AUDIENCES.indexOf(val) !== -1) ? val : 'default';
        } catch (e) {
            return 'default';
        }
    }

    function getStoredTextScale() {
        try {
            var val = localStorage.getItem(TEXT_SCALE_KEY);
            return (val && VALID_SCALES.indexOf(val) !== -1) ? val : '1.0';
        } catch (e) {
            return '1.0';
        }
    }

    function getStoredReducedMotion() {
        try {
            var val = localStorage.getItem(REDUCED_MOTION_KEY);
            return val === 'true';
        } catch (e) {
            return false;
        }
    }

    function applyDOMAttributes(audience, scale, reducedMotion) {
        var root = document.documentElement;

        // Set Audience attribute
        root.setAttribute('data-audience', audience);

        // Set Text Scale attribute
        root.setAttribute('data-text-scale', scale);

        // Set Reduced Motion attribute
        root.setAttribute('data-reduced-motion', reducedMotion ? 'true' : 'false');
    }

    function notifyChange(audience, scale, reducedMotion) {
        applyDOMAttributes(audience, scale, reducedMotion);
        if (typeof document !== 'undefined') {
            var event = new CustomEvent('cosyAudienceChanged', {
                detail: {
                    audience: audience,
                    textScale: scale,
                    reducedMotion: reducedMotion
                }
            });
            document.dispatchEvent(event);
        }
    }

    /* ── Audience Engine API ── */
    var AudienceAPI = {
        VALID_AUDIENCES: VALID_AUDIENCES,
        VALID_SCALES: VALID_SCALES,

        getAudience: function () {
            return getStoredAudience();
        },

        setAudience: function (pref) {
            if (VALID_AUDIENCES.indexOf(pref) === -1) pref = 'default';
            try {
                localStorage.setItem(AUDIENCE_KEY, pref);
            } catch (e) {}
            notifyChange(pref, getStoredTextScale(), getStoredReducedMotion());
            return pref;
        },

        getTextScale: function () {
            return getStoredTextScale();
        },

        setTextScale: function (scale) {
            if (VALID_SCALES.indexOf(scale) === -1) scale = '1.0';
            try {
                localStorage.setItem(TEXT_SCALE_KEY, scale);
            } catch (e) {}
            notifyChange(getStoredAudience(), scale, getStoredReducedMotion());
            return scale;
        },

        getReducedMotion: function () {
            return getStoredReducedMotion();
        },

        setReducedMotion: function (bool) {
            var isReduced = !!bool;
            try {
                localStorage.setItem(REDUCED_MOTION_KEY, isReduced ? 'true' : 'false');
            } catch (e) {}
            notifyChange(getStoredAudience(), getStoredTextScale(), isReduced);
            return isReduced;
        },

        resetAll: function () {
            try {
                localStorage.removeItem(AUDIENCE_KEY);
                localStorage.removeItem(TEXT_SCALE_KEY);
                localStorage.removeItem(REDUCED_MOTION_KEY);
            } catch (e) {}
            notifyChange('default', '1.0', false);
        },

        init: function () {
            var aud = getStoredAudience();
            var scale = getStoredTextScale();
            var reduced = getStoredReducedMotion();

            // Detect system prefers-reduced-motion if not explicitly stored
            var hasStoredMotion = false;
            try { hasStoredMotion = !!localStorage.getItem(REDUCED_MOTION_KEY); } catch (e) {}
            if (typeof window !== 'undefined' && window.matchMedia && !hasStoredMotion) {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    reduced = true;
                }
            }

            applyDOMAttributes(aud, scale, reduced);
        }
    };

    // Attach to global window.COSY
    window.COSY.Audience = AudienceAPI;

    // Self-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            AudienceAPI.init();
        });
    } else {
        AudienceAPI.init();
    }

})();
