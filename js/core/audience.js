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
        updateWidgetUI();

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
            if (typeof window !== 'undefined' && window.matchMedia && !localStorage.getItem(REDUCED_MOTION_KEY)) {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    reduced = true;
                }
            }

            applyDOMAttributes(aud, scale, reduced);
            injectWidget();
        }
    };

    /* ── Audience & Accessibility Widget UI ── */
    function injectWidget() {
        if (typeof document === 'undefined') return;
        if (document.getElementById('cosy-audience-widget')) return;

        var widgetContainer = document.createElement('div');
        widgetContainer.id = 'cosy-audience-widget';
        widgetContainer.className = 'cosy-audience-widget';
        widgetContainer.setAttribute('role', 'region');
        widgetContainer.setAttribute('aria-label', 'Audience Preference and Accessibility Settings');

        document.body.appendChild(widgetContainer);
        updateWidgetUI();
    }

    function updateWidgetUI() {
        var widget = document.getElementById('cosy-audience-widget');
        if (!widget) return;

        var aud = getStoredAudience();
        var scale = getStoredTextScale();
        var reduced = getStoredReducedMotion();

        var audLabels = {
            'default': '🌐 Standard',
            'children': '🎈 Children',
            'teens': '⚡ Teens',
            'adults': '🎯 Adults',
            'seniors': '🕶️ Seniors'
        };

        var currentLabel = audLabels[aud] || audLabels['default'];

        widget.innerHTML = `
            <button id="cosy-audience-toggle" class="cosy-audience-fab" aria-label="Audience and Accessibility Settings" aria-expanded="false">
                <span class="caf-icon">⚙️</span>
                <span class="caf-label">${currentLabel}</span>
            </button>
            <div id="cosy-audience-panel" class="cosy-audience-panel" style="display: none;" role="dialog" aria-modal="false" aria-label="Audience Preferences Panel">
                <div class="cap-header">
                    <h3>⚙️ Learning Experience & Access</h3>
                    <button class="cap-close" id="cosy-audience-close" aria-label="Close preferences">✕</button>
                </div>

                <!-- Audience Preference Section -->
                <div class="cap-section">
                    <div class="cap-section-title">
                        <span>👤 Audience Mode</span>
                        <small>Adapts layout & guidance</small>
                    </div>
                    <div class="cap-btn-grid" role="radiogroup" aria-label="Audience Preference">
                        <button class="cap-option-btn ${aud === 'default' ? 'active' : ''}" data-aud="default" role="radio" aria-checked="${aud === 'default'}">
                            <span class="cob-icon">🌐</span>
                            <span class="cob-title">Standard</span>
                            <small>Neutral default</small>
                        </button>
                        <button class="cap-option-btn ${aud === 'children' ? 'active' : ''}" data-aud="children" role="radio" aria-checked="${aud === 'children'}">
                            <span class="cob-icon">🎈</span>
                            <span class="cob-title">Children</span>
                            <small>Simpler & visual</small>
                        </button>
                        <button class="cap-option-btn ${aud === 'teens' ? 'active' : ''}" data-aud="teens" role="radio" aria-checked="${aud === 'teens'}">
                            <span class="cob-icon">⚡</span>
                            <span class="cob-title">Teens</span>
                            <small>Fast & challenges</small>
                        </button>
                        <button class="cap-option-btn ${aud === 'adults' ? 'active' : ''}" data-aud="adults" role="radio" aria-checked="${aud === 'adults'}">
                            <span class="cob-icon">🎯</span>
                            <span class="cob-title">Adults</span>
                            <small>Goals & timelines</small>
                        </button>
                        <button class="cap-option-btn ${aud === 'seniors' ? 'active' : ''}" data-aud="seniors" role="radio" aria-checked="${aud === 'seniors'}">
                            <span class="cob-icon">🕶️</span>
                            <span class="cob-title">Seniors</span>
                            <small>Calm & high contrast</small>
                        </button>
                    </div>
                </div>

                <!-- Independent Accessibility Settings -->
                <div class="cap-section">
                    <div class="cap-section-title">
                        <span>♿ Independent Accessibility Settings</span>
                    </div>

                    <!-- Text Scaling -->
                    <div class="cap-field-row">
                        <label for="cap-scale-select">🔍 Text Scale:</label>
                        <select id="cap-scale-select" class="cap-select">
                            <option value="1.0" ${scale === '1.0' ? 'selected' : ''}>100% Standard</option>
                            <option value="1.15" ${scale === '1.15' ? 'selected' : ''}>115% Medium</option>
                            <option value="1.25" ${scale === '1.25' ? 'selected' : ''}>125% Large</option>
                            <option value="1.40" ${scale === '1.40' ? 'selected' : ''}>140% Extra Large</option>
                        </select>
                    </div>

                    <!-- Reduced Motion -->
                    <div class="cap-field-row">
                        <label for="cap-motion-check">🎬 Reduced Motion:</label>
                        <input type="checkbox" id="cap-motion-check" ${reduced ? 'checked' : ''}>
                    </div>
                </div>

                <div class="cap-footer">
                    <button id="cap-reset-btn" class="cap-reset-link">Reset Preferences</button>
                    <a href="privacy.html" class="cap-privacy-link">Privacy & Sovereignty Policy 🛡️</a>
                </div>
            </div>
        `;

        bindWidgetEvents();
    }

    function bindWidgetEvents() {
        var toggleBtn = document.getElementById('cosy-audience-toggle');
        var panel = document.getElementById('cosy-audience-panel');
        var closeBtn = document.getElementById('cosy-audience-close');
        var scaleSelect = document.getElementById('cap-scale-select');
        var motionCheck = document.getElementById('cap-motion-check');
        var resetBtn = document.getElementById('cap-reset-btn');

        if (!toggleBtn || !panel) return;

        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = panel.style.display !== 'none';
            panel.style.display = isOpen ? 'none' : 'block';
            toggleBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                panel.style.display = 'none';
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
        }

        // Option buttons for audience preference
        var optionBtns = panel.querySelectorAll('.cap-option-btn');
        optionBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var chosenAud = btn.getAttribute('data-aud');
                AudienceAPI.setAudience(chosenAud);
            });
        });

        // Scale Select
        if (scaleSelect) {
            scaleSelect.addEventListener('change', function () {
                AudienceAPI.setTextScale(scaleSelect.value);
            });
        }

        // Motion Checkbox
        if (motionCheck) {
            motionCheck.addEventListener('change', function () {
                AudienceAPI.setReducedMotion(motionCheck.checked);
            });
        }

        // Reset Button
        if (resetBtn) {
            resetBtn.addEventListener('click', function () {
                AudienceAPI.resetAll();
            });
        }

        // Dismiss on outside click
        document.addEventListener('click', function (e) {
            if (panel && panel.style.display !== 'none' && !panel.contains(e.target) && !toggleBtn.contains(e.target)) {
                panel.style.display = 'none';
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

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
