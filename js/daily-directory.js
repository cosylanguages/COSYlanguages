/**
 * COSYlanguages Daily Directory Component
 * File: js/daily-directory.js
 *
 * One shared directory of every daily surface in the COSY ecosystem. Each repository keeps its
 * daily content where it belongs; this component only links out to the page that owns it, so no
 * repository copies another's content.
 *
 * Hosts mount it with:
 *   <link rel="stylesheet" href="https://cosylanguages.github.io/COSYlanguages/css/daily-directory.css">
 *   <div data-daily-directory data-self="COSYdata"></div>
 *   <script src="https://cosylanguages.github.io/COSYlanguages/js/daily-directory.js" defer></script>
 *
 * `data-self` (data|practice|languages|events|tools) marks the host's own card as "You are here";
 * `data-lang` (en|fr|it|ru|el) localises the heading and the badge.
 */

(function () {
    'use strict';

    var BASE = 'https://cosylanguages.github.io/';

    // Canonical homes of the ecosystem daily surfaces, grouped by the repository that owns each one.
    // This list also carries the COSYtools drills; COSYtools' own daily page lists only its four sibling
    // owners (COSYtools/shared/js/daily-feed.js DAILY_DESTINATIONS), since there it is the host itself.
    var DESTINATIONS = [
        {
            key: 'data', repo: 'COSYdata', icon: '📖',
            title: 'Vocabulary of the Day',
            url: BASE + 'COSYdata/',
            description: 'Word, verb, verb + preposition, phrasal verb and idiom of the day, generated from the dictionary.',
            slots: [
                { label: 'Word of the Day', icon: '📖' },
                { label: 'Verb of the Day', icon: '🔤' },
                { label: 'Verb + Preposition', icon: '🧩' },
                { label: 'Phrasal Verb of the Day', icon: '🔗' },
                { label: 'Idiom of the Day', icon: '💬' }
            ]
        },
        {
            key: 'practice', repo: 'COSYpractice', icon: '🗣️',
            title: 'Speaking & Writing',
            url: BASE + 'COSYpractice/#daily-challenge',
            description: 'Daily speaking and writing prompts plus the rotating Daily Challenge with streaks.',
            slots: [
                { label: 'Speaking Prompt', icon: '🗣️' },
                { label: 'Writing Prompt', icon: '✍️' },
                { label: 'Daily Challenge', icon: '🏆' }
            ]
        },
        {
            key: 'languages', repo: 'COSYlanguages', icon: '🌍',
            title: 'Daily Strip',
            url: BASE + 'COSYlanguages/',
            description: 'The hub daily strip: prompts and fun fact, with audio and level filtering.',
            slots: [
                { label: 'Fun Fact', icon: '💡' },
                { label: 'Speaking & Writing', icon: '✍️' }
            ]
        },
        {
            key: 'events', repo: 'COSYevents', icon: '🎉',
            title: 'Culture & Events',
            url: BASE + 'COSYevents/',
            description: 'Daily spotlights: holiday of the day, today in science, music, and film & TV.',
            slots: [
                { label: 'Holiday of the Day', icon: '🎊' },
                { label: 'Today in Science', icon: '🔬' },
                { label: 'Today in Music', icon: '🎵' },
                { label: 'Today in Film & TV', icon: '🎬' }
            ]
        },
        {
            key: 'tools', repo: 'COSYtools', icon: '🛠️',
            title: 'Daily Drills',
            url: BASE + 'COSYtools/practice/daily/',
            description: 'Drill today\'s verb conjugation and guess the preposition, tuned to the vocabulary of the day.',
            slots: [
                { label: 'Conjugation Drill', icon: '🔤' },
                { label: 'Preposition Drill', icon: '🎯' }
            ]
        }
    ];

    var I18N = {
        en: { heading: 'Daily across the COSY ecosystem', sub: 'Every daily element stays in the repository that owns it — follow a card to read it there.', self: 'You are here', open: 'Open' },
        fr: { heading: 'Le quotidien dans l\'écosystème COSY', sub: 'Chaque élément quotidien reste dans le dépôt qui le possède — suivez une carte pour le lire là-bas.', self: 'Vous êtes ici', open: 'Ouvrir' },
        it: { heading: 'Il quotidiano nell\'ecosistema COSY', sub: 'Ogni elemento quotidiano resta nel repository che lo possiede — segui una scheda per leggerlo lì.', self: 'Sei qui', open: 'Apri' },
        ru: { heading: 'Ежедневное в экосистеме COSY', sub: 'Каждый ежедневный элемент остаётся в своём репозитории — откройте карточку, чтобы прочитать его там.', self: 'Вы здесь', open: 'Открыть' },
        el: { heading: 'Καθημερινά στο οικοσύστημα COSY', sub: 'Κάθε καθημερινό στοιχείο μένει στο αποθετήριο που το κατέχει — ακολουθήστε μια κάρτα για να το διαβάσετε εκεί.', self: 'Είστε εδώ', open: 'Άνοιγμα' }
    };

    var instanceSeq = 0;

    function escapeHTML(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function stringsFor(lang) {
        return I18N[lang] || I18N.en;
    }

    function cardHTML(dest, selfKey, t) {
        var isSelf = dest.key === selfKey;
        var slotsHTML = dest.slots.map(function (s) {
            return '<li class="daily-directory-slot">' +
                (s.icon ? '<span class="daily-directory-slot-icon" aria-hidden="true">' + escapeHTML(s.icon) + '</span> ' : '') +
                escapeHTML(s.label) + '</li>';
        }).join('');

        var actionHTML = isSelf
            ? '<span class="daily-directory-badge" aria-current="true">✓ ' + escapeHTML(t.self) + '</span>'
            : '<a class="daily-directory-link" href="' + escapeHTML(dest.url) + '" target="_blank" rel="noopener">' +
                escapeHTML(t.open) + ' ' + escapeHTML(dest.repo) + ' <span class="daily-directory-ext" aria-hidden="true">↗</span></a>';

        return '<article class="daily-directory-card' + (isSelf ? ' is-self' : '') + '">' +
            '<h3 class="daily-directory-card-title">' +
                '<span class="daily-directory-icon" aria-hidden="true">' + escapeHTML(dest.icon) + '</span> ' +
                escapeHTML(dest.title) +
            '</h3>' +
            '<p class="daily-directory-repo">' + escapeHTML(dest.repo) + '</p>' +
            '<p class="daily-directory-desc">' + escapeHTML(dest.description) + '</p>' +
            '<ul class="daily-directory-slots">' + slotsHTML + '</ul>' +
            actionHTML +
        '</article>';
    }

    function render(host) {
        var selfKey = (host.getAttribute('data-self') || '').trim();
        var lang = (host.getAttribute('data-lang') || document.documentElement.lang || 'en').slice(0, 2);
        var t = stringsFor(lang);
        var titleId = 'daily-directory-title-' + (++instanceSeq);

        host.innerHTML =
            '<section class="daily-directory" aria-labelledby="' + titleId + '">' +
                '<header class="daily-directory-header">' +
                    '<h2 class="daily-directory-title" id="' + titleId + '">🌐 ' + escapeHTML(t.heading) + '</h2>' +
                    '<p class="daily-directory-sub">' + escapeHTML(t.sub) + '</p>' +
                '</header>' +
                '<div class="daily-directory-grid">' +
                    DESTINATIONS.map(function (d) { return cardHTML(d, selfKey, t); }).join('') +
                '</div>' +
            '</section>';
    }

    function initAll() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-daily-directory]'), function (el) {
            if (!el.__dailyDirectoryRendered) {
                render(el);
                el.__dailyDirectoryRendered = true;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    window.COSY_DailyDirectory = {
        DESTINATIONS: DESTINATIONS,
        render: render,
        destinations: function () {
            return DESTINATIONS.map(function (d) {
                return {
                    key: d.key, repo: d.repo, title: d.title, icon: d.icon, url: d.url,
                    description: d.description,
                    slots: d.slots.map(function (s) { return { label: s.label, icon: s.icon }; })
                };
            });
        }
    };
})();
