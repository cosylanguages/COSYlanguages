// --- Global Helper Functions ---

// Helper function to get the day of the year
const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

// --- Page-specific code for index.html (Pricing Calculator) ---
// Moved outside DOMContentLoaded to ensure it's available for js/translate.js
const RATES = {
    en: { 15: 6, 30: 11, 60: 20, 90: 28, 120: 35 },
    fr: { 15: 6, 30: 11, 60: 20, 90: 28, 120: 35 },
    it: { 15: 6, 30: 11, 60: 20, 90: 28, 120: 35 },
    ru: { 15: 5, 30: 9, 60: 16, 90: 22, 120: 28 },
    el: { 15: 6, 30: 11, 60: 20, 90: 28, 120: 35 },
};
const TYPE_M = { general: 1.0, spoken: 0.9, exam: 1.15 };
const DISC = { 1: 0, 8: .05, 16: .10, 32: .15 };
const CUR_R = { EUR: 1, USD: 1.08, RUB: 92 };
const CUR_S = { EUR: '€', USD: '$', RUB: '₽' };
const GRP_LG = { en: 'English 🇬🇧', fr: 'Français 🇫🇷', it: 'Italiano 🇮🇹', ru: 'Русский 🇷🇺' };

window.calcPrice = function() {
    const langSelect = document.getElementById('calc-lang');
    if (!langSelect) return;

    const lang = langSelect.value;
    const type = document.getElementById('calc-type').value;
    const dur = parseInt(document.getElementById('calc-dur').value);
    const pack = parseInt(document.getElementById('calc-pack').value);
    const cur = document.getElementById('calc-cur').value;
    const el = id => document.getElementById(id);
    const durField = document.getElementById('dur-field');
    const packField = document.getElementById('pack-field');

    if (type === 'group') {
        durField.style.opacity = '.4';
        packField.style.opacity = '.4';
        durField.style.pointerEvents = 'none';
        packField.style.pointerEvents = 'none';
        const avail = GRP_LG[lang];
        if (avail) {
            el('calc-total').textContent = window.t('calc_contact_us');
            el('calc-detail').textContent = window.t('calc_group_pricing_desc');
            el('calc-note').textContent = avail + window.t('calc_group_avail_suffix');
        } else {
            el('calc-total').textContent = window.t('calc_not_yet_avail');
            el('calc-detail').textContent = window.t('calc_group_avail_langs');
            el('calc-note').textContent = '';
        }
        el('calc-cta').textContent = window.t('calc_ask_groups');
        el('calc-cta').href = `https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20group%20lessons%20in%20${encodeURIComponent(avail || 'this language')}.`;
        return;
    }

    durField.style.opacity = '';
    packField.style.opacity = '';
    durField.style.pointerEvents = '';
    packField.style.pointerEvents = '';

    if (lang === 'el') {
        el('calc-total').textContent = window.t('lang_coming_soon');
        el('calc-detail').textContent = window.t('calc_greek_soon');
        el('calc-note').textContent = '';
        el('calc-cta').textContent = window.t('calc_get_notified');
        el('calc-cta').href = 'https://wa.me/330766784195?text=Hi!%20Please%20notify%20me%20when%20Greek%20lessons%20are%20available.';
        return;
    }

    const base = RATES[lang][dur];
    const after = base * TYPE_M[type] * (1 - DISC[pack]);
    const sym = CUR_S[cur], rate = CUR_R[cur];
    const single = (after * rate).toFixed(cur === 'RUB' ? 0 : 2);
    const total = (after * rate * pack).toFixed(cur === 'RUB' ? 0 : 2);

    el('calc-total').textContent = pack === 1 ? `${sym}${single}` : `${sym}${total}`;

    if (pack === 1) {
        el('calc-detail').textContent = window.t('calc_per_session').replace('{0}', dur);
    } else {
        const packLabelMap = {
            8: 'pack_starter',
            16: 'pack_progress',
            32: 'pack_maestro'
        };
        const packName = window.t(packLabelMap[pack]);
        const separator = window.t('calc_pack_separator') || ' · ';
        const perSessionSuffix = window.t('calc_per_session_suffix') || '/session';
        el('calc-detail').textContent = `${packName}${separator}${sym}${single}${perSessionSuffix}`;
    }

    el('calc-note').textContent = DISC[pack] > 0 ? window.t('calc_discount_applied').replace('{0}', (DISC[pack] * 100).toFixed(0)) : '';
    el('calc-cta').textContent = window.t('calc_cta_book');
    el('calc-cta').href = 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20book%20a%20lesson.';
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggle functionality for events page
    const setupToggleButton = (btnId, contentId, showKey, hideKey) => {
        const toggleBtn = document.getElementById(btnId);
        const contentDiv = document.getElementById(contentId);

        if (toggleBtn && contentDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = window.getComputedStyle(contentDiv).display === 'none';
                contentDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.setAttribute('data-translate-key', isHidden ? hideKey : showKey);
                if (window.setLanguage) {
                    window.setLanguage(localStorage.getItem('language') || 'en');
                }
            });
        }
    };

    setupToggleButton('toggle-topics-btn', 'speaking-club-topics', 'toggle_topics_show', 'toggle_topics_hide');
    setupToggleButton('toggle-games-btn', 'game-nights-topics', 'toggle_games_show', 'toggle_games_hide');

    // Deep Linking for Events
    const eventUrlParams = new URLSearchParams(window.location.search);
    const eventEmbedParam = eventUrlParams.get('embed');

    if (eventEmbedParam === 'true') {
        document.body.classList.add('embedded-mode');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';
        const main = document.querySelector('main');
        if (main) main.style.paddingTop = '20px';
    }

    // Initialize Calculator if present
    if (document.getElementById('calc-lang')) {
        window.calcPrice();
        ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', window.calcPrice);
        });
    }

    // New navigation language switcher logic
    const navLangLinks = document.querySelectorAll('.nav-lang a[data-lang]');
    navLangLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            if (window.setLanguage) {
                window.setLanguage(lang);
            }
        });
    });

    // Page-specific code for language pages
    const wordOfTheDayElement = document.getElementById('word-of-the-day');
    if (wordOfTheDayElement) {
        const words = {
            en: ["Hello", "Love", "Life", "Dream", "Freedom", "Joy", "Happiness", "Hope", "Star", "Light"],
            fr: ["Bonjour", "Amour", "Vie", "Rêve", "Liberté", "Joie", "Bonheur", "Espoir", "Étoile", "Lumière"],
            it: ["Ciao", "Amore", "Vita", "Sogno", "Libertà", "Gioia", "Felicità", "Sπeranza", "Stella", "Luce"],
            ru: ["Привет", "Любовь", "Жизнь", "Мечта", "Свобода", "Радость", "Счастье", "Надежда", "Звезда", "Свет"],
            el: ["Γειά", "Αγάπη", "Ζωή", "Όνειρο", "Ελευθερία", "Χαρά", "Ευτυχία", "Ελπίδα", "Αστέρι", "Φως"]
        };
        const pageLang = document.documentElement.lang;
        const wordList = words[pageLang] || words.en;
        const dayOfYear = getDayOfYear();
        const dailyIndex = dayOfYear % wordList.length;
        wordOfTheDayElement.textContent = wordList[dailyIndex];
    }

    const funFactElement = document.getElementById('fun-fact-of-the-day');
    if (funFactElement) {
        const pageLang = document.documentElement.lang;
        const factListKey = `fun_fact_${pageLang}`;
        const factList = translations[pageLang]?.[factListKey];
        if (factList && factList.length > 0) {
            const dayOfYear = getDayOfYear();
            const dailyIndex = dayOfYear % factList.length;
            funFactElement.textContent = factList[dailyIndex];
        }
    }
});
