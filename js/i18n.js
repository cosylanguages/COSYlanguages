/**
 * js/i18n.js
 * Vanilla-JS i18n loader for COSYlanguages.
 * Controls site-wide monolingual UI chrome translation using localStorage['cosy_ui_lang'].
 */
(function() {
    'use strict';

    let currentUILang = 'en';
    let uiTranslations = {};
    let englishTranslations = {};

    function getPrefix() {
        if (window.COSY && typeof window.COSY.getPrefix === 'function') {
            return window.COSY.getPrefix();
        }
        // Fallback relative prefix detector
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length;
        // Adjust for repo root or custom directory
        const isCOSYlanguages = path.includes('/COSYlanguages/');
        const baseDepth = isCOSYlanguages ? 2 : 1;
        const relativeDepth = depth - baseDepth;
        if (relativeDepth > 0) {
            return '../'.repeat(relativeDepth);
        }
        return './';
    }

    // Helper to resolve nested or dot-separated keys
    function getValueByPath(obj, keyPath) {
        if (!obj) return null;
        if (keyPath in obj) return obj[keyPath];
        const parts = keyPath.split('.');
        let current = obj;
        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part];
            } else {
                return null;
            }
        }
        return typeof current === 'string' ? current : null;
    }

    async function loadTranslations() {
        const prefix = getPrefix();
        currentUILang = localStorage.getItem('cosy_ui_lang') || 'en';

        try {
            // Load English as standard fallback
            const enRes = await fetch(`${prefix}js/i18n/en.json?v=${Date.now()}`);
            if (enRes.ok) {
                englishTranslations = await enRes.json();
            }
        } catch (e) {
            console.error('[i18n] Failed to load English fallback translations', e);
        }

        if (currentUILang !== 'en') {
            try {
                const langRes = await fetch(`${prefix}js/i18n/${currentUILang}.json?v=${Date.now()}`);
                if (langRes.ok) {
                    uiTranslations = await langRes.json();
                } else {
                    console.warn(`[i18n] Failed to load translations for ${currentUILang}, falling back to English.`);
                    uiTranslations = {};
                }
            } catch (e) {
                console.warn(`[i18n] Error loading translations for ${currentUILang}`, e);
                uiTranslations = {};
            }
        } else {
            uiTranslations = englishTranslations;
        }

        injectCanonicalFooter();
        applyUITranslations();
    }

    function injectCanonicalFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const prefix = getPrefix();
        footer.className = footer.className || '';
        footer.innerHTML = `
          <div class="footer-inner">
            <div class="footer-brand">
              <div class="fb-logo">
                <img src="${prefix}images/logos/cosylanguages.png" alt="COSYlanguages logo">
                <span class="fb-name">COSYlanguages</span>
              </div>
              <p data-i18n="footer.description">Your friendly corner to master new languages and connect with the world. 🌍</p>
            </div>
            <div class="footer-links-col">
              <h5 data-i18n="footer.courses">Courses</h5>
              <a href="${prefix}courses/general/" data-i18n="course_general">General Course 📖</a>
              <a href="${prefix}courses/spoken/" data-i18n="course_spoken">Spoken Course 🗣️</a>
              <a href="${prefix}courses/exam/" data-i18n="course_exam">Exam Preparation 📝</a>
              <a href="${prefix}courses/travelling/" data-i18n="course_travelling">Travelling Course ✈️</a>
              <a href="${prefix}courses/professional/" data-i18n="course_professional">Professional Course 💼</a>
              <a href="${prefix}courses/relocation/" data-i18n="course_relocation">Relocation Course 🏡</a>
            </div>
            <div class="footer-links-col">
              <h5 data-i18n="footer.explore">Explore</h5>
              <a href="${prefix}#languages" data-i18n="nav.languages">Languages 🌍</a>
              <a href="${prefix}practice/index.html" data-i18n="nav.practice">Free Practice 💡</a>
              <a href="${prefix}placement-quiz.html">Placement Quiz 📝</a>
              <a href="${prefix}print-cards.html">Leitner Print Studio 🖨️</a>
              <a href="${prefix}print-zine.html">Foldable Pocket Zines 📖</a>
              <a href="${prefix}print-box.html">Leitner Box Template 📦</a>
              <a href="${prefix}print-boardgame.html">Printable Board Game 🎲</a>
              <a href="${prefix}classroom-sync.html">Classroom Synchronizer 🤝</a>
              <a href="${prefix}notebook/index.html">My Notebook 📓</a>
              <a href="${prefix}vocabulary/index.html">Vocabulary Library 📖</a>
              <a href="${prefix}grammar/index.html">Grammar Tables 📐</a>
              <a href="${prefix}events/index.html" data-i18n="nav.events">Events 🎉</a>
              <a href="${prefix}games/index.html" data-i18n="nav.games">Games 🎮</a>
            </div>
            <div class="footer-links-col">
              <h5 data-i18n="footer.project">Project</h5>
              <a href="${prefix}privacy.html" data-i18n="footer.privacy">Privacy &amp; Safety 🛡️</a>
            </div>
            <div class="footer-links-col">
              <h5 data-i18n="footer.contact">Contact</h5>
              <a href="https://wa.me/330766784195">WhatsApp 📱</a>
              <a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
              <a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
            </div>
          </div>
          <div class="footer-bottom" data-i18n="footer.allRightsReserved">© 2026 COSYlanguages — All rights reserved</div>
        `;
    }

    function applyUITranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;

            let translation = getValueByPath(uiTranslations, key);

            if (translation === undefined || translation === null) {
                if (currentUILang !== 'en') {
                    console.warn(`[i18n-dev] Key "${key}" missing in language "${currentUILang}". Falling back to English.`);
                }
                translation = getValueByPath(englishTranslations, key);
            }

            if (translation !== undefined && translation !== null) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', translation);
                    } else {
                        el.value = translation;
                    }
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Update Flag Switcher visual indication
        updateFlagPickerUI();
    }

    function updateFlagPickerUI() {
        // Desktop flag switcher
        const desktopSel = document.getElementById('cosy-language-switcher');
        if (desktopSel) {
            desktopSel.value = currentUILang;
        }
        // Mobile flag switcher
        const mobileSel = document.getElementById('cosy-language-switcher-mobile');
        if (mobileSel) {
            mobileSel.value = currentUILang;
        }
    }

    window.setUILanguage = async function(lang) {
        if (!lang) return;
        lang = lang.toLowerCase();
        localStorage.setItem('cosy_ui_lang', lang);

        // Synchronize with cosy_last_language for general platform compatibility
        localStorage.setItem('cosy_last_language', lang);

        await loadTranslations();

        // Trigger dynamic page re-rendering elements
        if (window.COSY && typeof window.COSY.refresh === 'function') {
            window.COSY.refresh();
        }

        document.dispatchEvent(new CustomEvent('cosyUILanguageChanged', { detail: { lang } }));
    };

    // Auto-run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadTranslations);
    } else {
        loadTranslations();
    }

    // Expose APIs
    window.COSY_UI_I18N = {
        get currentLang() { return currentUILang; },
        get translations() { return uiTranslations; },
        refresh: applyUITranslations,
        load: loadTranslations
    };
})();
