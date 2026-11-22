/**
 * DELF/DALF theme bank renderer for the Exam Preparation course page.
 *
 * Mount with:
 *   <div data-exam-themes="fr"></div>
 *   <script src="../js/exam-themes.js" defer></script>
 *
 * The catalogue lives in COSYpractice, which owns the French daily prompts:
 * https://cosylanguages.github.io/COSYpractice/data/exam/fr/delf-dalf-themes.json
 * The file is cached in sessionStorage so switching pages does not refetch it.
 */
(function () {
    'use strict';

    var BASE = 'https://cosylanguages.github.io/COSYpractice/data/exam/';
    var CACHE_PREFIX = 'cosy_exam_themes_';
    var LEVELS = ['B1', 'B2', 'C1', 'C2'];

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function readCache(lang) {
        try {
            var raw = sessionStorage.getItem(CACHE_PREFIX + lang);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function writeCache(lang, data) {
        try {
            sessionStorage.setItem(CACHE_PREFIX + lang, JSON.stringify(data));
        } catch (e) {
            /* storage may be full or disabled; rendering still works */
        }
    }

    function partsLine(parts, label) {
        if (!Array.isArray(parts) || !parts.length) return '';
        var items = parts.map(function (part) {
            var minutes = part.minutes ? ' (' + part.minutes + ')' : '';
            return '<strong>' + escapeHtml(part.part) + '</strong>' + escapeHtml(minutes) + ' — ' + escapeHtml(part.task);
        });
        return '<p class="exam-theme-parts"><strong>' + label + '</strong> ' + items.join(' · ') + '</p>';
    }

    function renderLevel(level, data) {
        var oral = data.speaking || {};
        var written = data.writing || {};
        var chips = [];
        if (oral.duration) chips.push('🗣️ Oral ' + oral.duration + (oral.preparation ? ' · ' + oral.preparation + ' prep' : ''));
        if (written.duration) chips.push('✍️ Écrit ' + written.duration + (written.words ? ' · ' + written.words : ''));

        var categories = (data.categories || []).map(function (category, index) {
            var themes = (category.themes || []).map(function (theme) {
                return '<li>' + escapeHtml(theme) + '</li>';
            }).join('');
            return '<details class="exam-theme-category"' + (index === 0 ? ' open' : '') + '>' +
                '<summary>' + escapeHtml(category.label) + ' <span class="exam-theme-count">' + (category.themes || []).length + '</span></summary>' +
                '<ul>' + themes + '</ul>' +
                '</details>';
        }).join('');

        return '<div class="exam-theme-level" data-level="' + escapeHtml(level) + '">' +
            '<h3>' + escapeHtml(data.exam || level) + ' · ' + escapeHtml(level) + '</h3>' +
            '<div class="exam-theme-meta">' + chips.map(function (chip) {
                return '<span class="exam-theme-chip">' + escapeHtml(chip) + '</span>';
            }).join('') + '</div>' +
            partsLine(oral.parts, 'Oral :') +
            partsLine(written.parts, 'Écrit :') +
            '<div class="exam-theme-grid">' + categories + '</div>' +
            '</div>';
    }

    function render(target, data) {
        var levels = LEVELS.filter(function (level) {
            return data.levels && data.levels[level];
        });
        if (!levels.length) {
            target.innerHTML = '<p class="exam-theme-error">No themes are available yet. <a href="' + BASE + 'fr/delf-dalf-themes.json">Open the catalogue</a>.</p>';
            return;
        }
        target.innerHTML = levels.map(function (level) {
            return renderLevel(level, data.levels[level]);
        }).join('');
    }

    function load(lang, target) {
        var cached = readCache(lang);
        if (cached) {
            render(target, cached);
            return;
        }
        fetch(BASE + lang + '/delf-dalf-themes.json', { credentials: 'omit' })
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(function (data) {
                writeCache(lang, data);
                render(target, data);
            })
            .catch(function () {
                target.innerHTML = '<p class="exam-theme-error">The theme bank could not be loaded. ' +
                    '<a href="' + BASE + lang + '/delf-dalf-themes.json" target="_blank" rel="noopener">Open the source catalogue</a> or ' +
                    '<a href="https://cosylanguages.github.io/COSYpractice/" target="_blank" rel="noopener">practise a French prompt</a>.</p>';
            });
    }

    function init() {
        var targets = document.querySelectorAll('[data-exam-themes]');
        for (var i = 0; i < targets.length; i += 1) {
            var lang = targets[i].getAttribute('data-exam-themes') || 'fr';
            load(lang, targets[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
