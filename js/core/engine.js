// App bootstrap: initialises global state, visitor mode, and app startup sequence.
/**
 * js/core/engine.js
 * App bootstrap, global state management, and user role detection (Free visitor).
 */
/**
 * cosy-mode.js — THE ENGINE
 * ─────────────────────────────────────────────────────────────────────────────
 * COSYlanguages shared mode system.
 * Visitor mode only.
 * ───────────────────────────────────────────────────────────────────────────── */
;(function () { 'use strict'

/* ═══════════════════════════════════════════════════════════════
   1. CONSTANTS & KEYS
   ═══════════════════════════════════════════════════════════════ */

const DEFAULT_ECOSYSTEM_URLS = {
    home: 'index.html',
    languages: 'index.html#languages',
    courses: 'index.html#courses',
    practice: 'practice/index.html',
    tools: 'https://cosylanguages.github.io/COSYtools/',
    games: 'https://cosylanguages.github.io/COSYgames/',
    events: 'https://cosylanguages.github.io/COSYevents/',
    placement_quiz: 'placement-quiz.html',
    calculator: 'index.html#calculator',
    blog: 'blog/index.html',
    join: 'index.html#start',
    login: 'login.html'
};

function getConfigModule() {
    if (typeof window !== 'undefined' && window.COSY_CONFIG_MODULE) {
        return window.COSY_CONFIG_MODULE;
    }
    if (typeof require === 'function') {
        try {
            return require('./config.js');
        } catch (e) {}
    }
    return null;
}

function getEcosystemUrls(env, overrides) {
    const cfg = getConfigModule();
    if (cfg && typeof cfg.getEcosystemConfig === 'function') {
        const repoConfig = cfg.getEcosystemConfig({ env: env, overrides: overrides });
        return {
            home: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html' : 'index.html',
            languages: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#languages' : 'index.html#languages',
            courses: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#courses' : 'index.html#courses',
            practice: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'practice/index.html' : 'practice/index.html',
            tools: repoConfig.COSYtools,
            games: repoConfig.COSYgames,
            events: repoConfig.COSYevents,
            placement_quiz: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'placement-quiz.html' : 'placement-quiz.html',
            calculator: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#calculator' : 'index.html#calculator',
            blog: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'blog/index.html' : 'blog/index.html',
            join: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#start' : 'index.html#start',
            login: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'login.html' : 'login.html'
        };
    }

    // Fallback if config module is absent
    const processEnv = (typeof process !== 'undefined' && process.env) ? process.env : {};
    const winConfig = (typeof window !== 'undefined' && window.COSY_CONFIG) ? window.COSY_CONFIG : {};
    const winUrls = (typeof window !== 'undefined' && window.COSY_ECOSYSTEM_URLS) ? window.COSY_ECOSYSTEM_URLS : {};

    let localSavedUrls = {};
    if (typeof localStorage !== 'undefined') {
        try {
            const raw = localStorage.getItem('cosy_ecosystem_urls');
            if (raw) localSavedUrls = JSON.parse(raw);
        } catch (e) {}
    }

    const activeEnv = env ||
        winConfig.env ||
        (typeof window !== 'undefined' && window.COSY_ENV) ||
        processEnv.COSY_ENV ||
        ((typeof location !== 'undefined' && location.hostname && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) ? 'development' : 'production');

    const envDefaults = Object.assign({}, DEFAULT_ECOSYSTEM_URLS);

    if (activeEnv === 'development') {
        envDefaults.home = 'index.html';
        envDefaults.languages = 'index.html#languages';
        envDefaults.courses = 'index.html#courses';
        envDefaults.practice = 'practice/index.html';
        envDefaults.placement_quiz = 'placement-quiz.html';
        envDefaults.calculator = 'index.html#calculator';
        envDefaults.blog = 'blog/index.html';
        envDefaults.join = 'index.html#start';
    }

    const procEnvUrls = {};
    if (processEnv.COSY_HOME_URL) procEnvUrls.home = processEnv.COSY_HOME_URL;
    if (processEnv.COSY_LANGUAGES_URL) procEnvUrls.languages = processEnv.COSY_LANGUAGES_URL;
    if (processEnv.COSY_COURSES_URL) procEnvUrls.courses = processEnv.COSY_COURSES_URL;
    if (processEnv.COSY_PRACTICE_URL) procEnvUrls.practice = processEnv.COSY_PRACTICE_URL;
    if (processEnv.COSY_TOOLS_URL) procEnvUrls.tools = processEnv.COSY_TOOLS_URL;
    if (processEnv.COSY_GAMES_URL) procEnvUrls.games = processEnv.COSY_GAMES_URL;
    if (processEnv.COSY_EVENTS_URL) procEnvUrls.events = processEnv.COSY_EVENTS_URL;
    if (processEnv.COSY_PLACEMENT_QUIZ_URL) procEnvUrls.placement_quiz = processEnv.COSY_PLACEMENT_QUIZ_URL;
    if (processEnv.COSY_CALCULATOR_URL) procEnvUrls.calculator = processEnv.COSY_CALCULATOR_URL;
    if (processEnv.COSY_BLOG_URL) procEnvUrls.blog = processEnv.COSY_BLOG_URL;
    if (processEnv.COSY_JOIN_URL) procEnvUrls.join = processEnv.COSY_JOIN_URL;
    if (processEnv.COSY_LOGIN_URL) procEnvUrls.login = processEnv.COSY_LOGIN_URL;

    return Object.assign({}, envDefaults, procEnvUrls, localSavedUrls, winUrls, winConfig.urls, overrides);
}

function getNavHref(itemKey) {
    const urls = getEcosystemUrls();
    const rawHref = urls[itemKey] || DEFAULT_ECOSYSTEM_URLS[itemKey] || 'index.html';
    if (!rawHref) return 'index.html';
    const isAbsolute = rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('//');
    if (isAbsolute) return rawHref;
    const p = getPrefix();
    return `${p}${rawHref.replace(/^\/+/, '')}`;
}

const NAV_CONFIG = {
    free: [
        { key: 'courses',        hrefKey: 'courses',        icon: '📚' },
        { key: 'languages',      hrefKey: 'languages',      icon: '🌍' },
        { key: 'practice',       hrefKey: 'practice',       icon: '💡' },
        { key: 'games',          hrefKey: 'games',          icon: '🎮' },
        { key: 'blog',           hrefKey: 'blog',           icon: '📰' }
    ],
    more: [
        { key: 'tools',          hrefKey: 'tools',          icon: '🔎' },
        { key: 'events',         hrefKey: 'events',         icon: '🎉' },
        { key: 'placement_quiz', hrefKey: 'placement_quiz', icon: '📝' },
        { key: 'calculator',     hrefKey: 'calculator',     icon: '🧮' }
    ]
};

const BASE_URL = (typeof window !== 'undefined' && (window.location.pathname.startsWith('/COSYlanguages/') || window.location.pathname === '/COSYlanguages'))
    ? '/COSYlanguages/'
    : '/';

const KEY_PRACTICE = 'cosy_practice'
const KEY_NOTEBOOK = 'cosy_notebook' // { [lessonId]: { notes: '', mistakes: [] } }

let vocabManifest = null;
const FALLBACK_VOCAB_FILES = [
    'vocabulary.js','verbs.js','adjectives.js','grammar_elements.js',
    'grammar.js','dishes.js','speaking.js','debates.js','opinions.js',
    'quotes.js','fluency.js','locations.js','people.js','nationalities.js'
];

/* ═══════════════════════════════════════════════════════════════
   2. STATE MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
function readState () {
    const mode = 'free'

    // Consolidate practice state from multiple keys
    const practice = tryParse(localStorage.getItem(KEY_PRACTICE)) || { totalPts: 0, streak: 0, mistakes: [] }
    practice.totalPts = parseInt(localStorage.getItem('cosy_total_points') || practice.totalPts || '0')
    practice.streak = parseInt(localStorage.getItem('practice_streak') || practice.streak || '0')

    const notebook = tryParse(localStorage.getItem(KEY_NOTEBOOK)) || {}
    return { mode, practice, notebook }
}

function tryParse (str) { try { return str ? JSON.parse(str) : null } catch { return null } }

function getPrefix() {
    return BASE_URL;
}

/* ═══════════════════════════════════════════════════════════════
   3. AUTH & LIVE SYNC (DEPRECATED)
   ═══════════════════════════════════════════════════════════════ */
// Authenticated features moved to ProgressMe.

/* ═══════════════════════════════════════════════════════════════
   4. NAV TEMPLATES
   ═══════════════════════════════════════════════════════════════ */
function isActive (href) {
    const cleanHref = href.split('?')[0].split('#')[0];
    const path = window.location.pathname;

    // Home page special case (root or index.html not in a subfolder)
    if (cleanHref === 'index.html' || cleanHref === './index.html') {
        const isSubfolder = /\/(practice|games)\//.test(path);
        if (!isSubfolder && (path.endsWith('/') || path.endsWith('index.html'))) return 'class="active"';
    }

    // Sub-app matching (e.g. "practice/index.html" matches any path containing "/practice/")
    const parts = cleanHref.split('/');
    const folder = parts.find(p => p && p !== '..' && p !== '.');
    if (folder && folder !== 'index.html') {
        if (path.includes('/' + folder + '/')) return 'class="active"';
    }

    // Direct filename match
    const filename = parts[parts.length - 1];
    if (path.endsWith(filename) && path.includes(folder || '')) return 'class="active"';

    return '';
}

function updateNavActiveState() {
    const navLinks = document.querySelectorAll('nav a, #cosy-nav a, #main-nav a, .mobile-nav a');
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(p => p);
    const currentFilename = pathParts[pathParts.length - 1] || 'index.html';
    const currentHash = currentUrl.hash;

    // Check WhatsApp floating button visibility according to prompt item 6:
    // Show only on /, courses/*, about/, languages/* and placement-quiz.html
    // Hide on practice, games, blog, privacy
    const waFab = document.querySelector('.wa-fab');
    if (waFab) {
        const path = currentUrl.pathname.toLowerCase();
        const isDisallowed = path.includes('/practice') || path.includes('/games') || path.includes('/blog') || path.includes('privacy.html');
        if (isDisallowed) {
            waFab.classList.add('hide-wa-fab');
            waFab.setAttribute('data-hidden', 'true');
        } else {
            waFab.classList.remove('hide-wa-fab');
            waFab.removeAttribute('data-hidden');
        }
    }

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

        link.classList.remove('active');

        // Resolve relative href to absolute path for comparison
        try {
            const linkUrl = new URL(href, window.location.origin + window.location.pathname);
            const linkPathParts = linkUrl.pathname.split('/').filter(p => p);
            const linkFilename = linkPathParts[linkPathParts.length - 1] || 'index.html';
            const linkHash = linkUrl.hash;

            // Simple match: filename + hash
            if (linkFilename === currentFilename) {
                if (linkHash) {
                    if (linkHash === currentHash) link.classList.add('active');
                } else if (!currentHash) {
                    link.classList.add('active');
                }
            }

            // Subfolder match for core sections
            const coreFolders = ['practice', 'games', 'events'];
            coreFolders.forEach(folder => {
                if (pathParts.includes(folder) && linkPathParts.includes(folder)) {
                    link.classList.add('active');
                }
            });

        } catch (e) {}
    });
}

const NAV_FALLBACKS = {
    en: { home: 'Home', languages: 'Languages', courses: 'Courses', practice: 'Practice', tools: 'Tools', games: 'Games', events: 'Events', placement_quiz: 'Placement Quiz', calculator: 'Calculator', blog: 'Blog', join: 'Join', contact: 'Contact us', login: '🔐 Log in', more: 'More ▾' },
    fr: { home: 'Accueil', languages: 'Langues', courses: 'Cours', practice: 'Entraînement', tools: 'Outils', games: 'Jeux', events: 'Événements', placement_quiz: 'Test de niveau', calculator: 'Calculateur', blog: 'Blog', join: 'Rejoindre', contact: 'Contact', login: '🔐 Connexion', more: 'Plus ▾' },
    it: { home: 'Home', languages: 'Lingue', courses: 'Corsi', practice: 'Pratica', tools: 'Strumenti', games: 'Giochi', events: 'Eventi', placement_quiz: 'Test di livello', calculator: 'Calcolatore', blog: 'Blog', join: 'Unisciti', contact: 'Contatti', login: '🔐 Accedi', more: 'Altro ▾' },
    es: { home: 'Inicio', languages: 'Idiomas', courses: 'Cursos', practice: 'Práctica', tools: 'Herramientas', games: 'Juegos', events: 'Eventos', placement_quiz: 'Test de nivel', calculator: 'Calculadora', blog: 'Blog', join: 'Unirse', contact: 'Contacto', login: '🔐 Iniciar sesión', more: 'Más ▾' },
    ru: { home: 'Главная', languages: 'Языки', courses: 'Курсы', practice: 'Практика', tools: 'Инструменты', games: 'Игры', events: 'Мероприятия', placement_quiz: 'Тест уровня', calculator: 'Калькулятор', blog: 'Блог', join: 'Начать', contact: 'Связь', login: '🔐 Вход', more: 'Ещё ▾' },
    ba: { home: 'Баш бит', languages: 'Телдәр', courses: 'Курстар', practice: 'Практика', tools: 'Ҡоралдар', games: 'Уйындар', events: 'Чаралар', placement_quiz: 'Тест', calculator: 'Калькулятор', blog: 'Блог', join: 'Ҡошулыу', contact: 'Бәйләнеш', login: '🔐 Киреү', more: 'Тағы ▾' },
    tt: { home: 'Төп бит', languages: 'Телләр', courses: 'Курслар', practice: 'Практика', tools: 'Кораллар', games: 'Уеннар', events: 'Чаралар', placement_quiz: 'Тест', calculator: 'Калькулятор', blog: 'Блог', join: 'Кушылу', contact: 'Бәйләнеш', login: '🔐 Керү', more: 'Тагын ▾' },
    el: { home: 'Αρχική', languages: 'Γλώσσες', courses: 'Μαθήματα', practice: 'Εξάσκηση', tools: 'Εργαλεία', games: 'Παιχνίδια', events: 'Εκδηλώσεις', placement_quiz: 'Τεστ επιπέδου', calculator: 'Υπολογιστής', blog: 'Ιστολόγιο', join: 'Εγγραφή', contact: 'Επικοινωνία', login: '🔐 Σύνδεση', more: 'Περισσότερα ▾' }
};

function getNavLabel(key, fallback) {
    const cleanKey = key.replace(/^nav\./, '');
    if (typeof window !== 'undefined' && window.t) {
        const val = window.t('nav.' + cleanKey) || window.t('nav_' + cleanKey) || window.t(cleanKey);
        if (val) return val;
    }
    const docLang = (typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) ? document.documentElement.lang.toLowerCase() : 'en';
    if (NAV_FALLBACKS[docLang] && NAV_FALLBACKS[docLang][cleanKey]) return NAV_FALLBACKS[docLang][cleanKey];
    if (NAV_FALLBACKS.en[cleanKey]) return NAV_FALLBACKS.en[cleanKey];
    return fallback;
}

function renderNavLinks(mode) {
    const config = NAV_CONFIG[mode] || [];
    const mainLinks = config.map(item => {
        const fallbackLabel = item.key[0].toUpperCase() + item.key.slice(1);
        const label = getNavLabel(item.key, fallbackLabel);
        const key = `nav_${item.key}`;
        const href = getNavHref(item.hrefKey || item.key);
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<li role="none"><a href="${href}" ${isActive(href)} data-translate-key="${key}" data-i18n="nav.${item.key}" role="menuitem"${targetAttr}>${item.icon ? item.icon + ' ' : ''}${label}</a></li>`;
    }).join('');

    const moreItems = NAV_CONFIG.more || [];
    const moreMenuHtml = moreItems.map(item => {
        const fallbackLabel = item.key[0].toUpperCase() + item.key.slice(1);
        const label = getNavLabel(item.key, fallbackLabel);
        const key = `nav_${item.key}`;
        const href = getNavHref(item.hrefKey || item.key);
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<li role="none"><a href="${href}" ${isActive(href)} data-translate-key="${key}" data-i18n="nav.${item.key}" role="menuitem"${targetAttr}>${item.icon ? item.icon + ' ' : ''}${label}</a></li>`;
    }).join('');

    const moreLabel = getNavLabel('more', 'More ▾');

    const moreDropdown = `
      <li role="none" class="cosy-nav-more-wrap">
        <button type="button" class="cosy-nav-more-btn" aria-expanded="false" aria-controls="cosy-nav-more-menu" data-i18n="nav.more" onclick="COSY.toggleMoreMenu(this)">${moreLabel}</button>
        <ul id="cosy-nav-more-menu" class="cosy-nav-more-dropdown" role="menu">
          ${moreMenuHtml}
        </ul>
      </li>`;

    return mainLinks + moreDropdown;
}

function navFree () {
    const t = getNavLabel;
    const homeHref = getNavHref('home');
    const loginHref = getNavHref('login');
    const isDark = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy_theme') || 'light') === 'dark');

    const isLocked = (typeof localStorage !== 'undefined' && localStorage.getItem('cosy_ui_lang_locked') === 'true');
    const currentLang = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy_ui_lang') || localStorage.getItem('cosy_last_language'))) || 'en';
    const langOptions = [
        { code: 'en', flag: '🇬🇧', label: 'EN' },
        { code: 'fr', flag: '🇫🇷', label: 'FR' },
        { code: 'it', flag: '🇮🇹', label: 'IT' },
        { code: 'ru', flag: '🇷🇺', label: 'RU' },
        { code: 'el', flag: '🇬🇷', label: 'EL' }
    ].map(l => `<option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>${l.flag} ${l.label}</option>`).join('');

    const logoPrefix = getPrefix();
    const lockTitle = isLocked
        ? 'Interface language is locked on this device. Click to unlock.'
        : 'Pin interface language on this device.';

    return `
      <a class="nav-logo" href="${homeHref}" aria-label="${t('home_aria', 'COSYlanguages Home')}">
        <img src="${logoPrefix}images/logos/cosylanguages.png" alt="COSYlanguages logo" onerror="this.style.display='none'">
        <span>COSYlanguages</span>
      </a>
      <ul class="nav-links" role="menubar">
        ${renderNavLinks('free')}
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right" style="display:flex; align-items:center; gap:8px;">
        <div class="cosy-lang-lock-wrap" style="display:inline-flex; align-items:center; gap:4px;">
          <select id="cosy-language-switcher" onchange="setLanguage(this.value)" class="styled-sel" ${isLocked ? 'disabled' : ''} style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 32px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;" aria-label="Select Interface Language">
            ${langOptions}
          </select>
          <button id="cosy-lang-lock-btn" type="button" onclick="if(window.toggleLanguageLock)window.toggleLanguageLock()" class="cosy-lang-lock-btn ${isLocked ? 'locked' : ''}" title="${lockTitle}" aria-label="${lockTitle}" style="background:none; border:1px solid var(--border); border-radius:var(--r-sm); padding:2px 4px; font-size:0.75rem; height:28px; cursor:pointer; display:inline-flex; align-items:center; justify-content:center;">
            📌
          </button>
        </div>
        <button class="theme-toggle-btn" onclick="COSY.toggleTheme()" aria-label="Toggle Theme" style="background:none; border:none; font-size:1.2rem; cursor:pointer; padding:6px; display:inline-flex; align-items:center;">
            ${isDark ? '☀️' : '🌙'}
        </button>
        <a href="${loginHref}" class="nav-login" data-translate-key="nav_login" data-i18n="nav.login">${t('login', '🔐 Log in')}</a>
        <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank" data-translate-key="nav_contact" data-i18n="nav.contact">${t('contact', '💬 Contact us')}</a>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false" aria-controls="cosy-mobile-menu">☰</button>
      </div>`
}

/* ═══════════════════════════════════════════════════════════════
   5. UI CORE (Templates)
   ═══════════════════════════════════════════════════════════════ */

function bindNavKeyboardHandlers() {
    const nav = document.getElementById('cosy-nav');
    if (nav && !nav.dataset.kbdBound) {
        nav.dataset.kbdBound = 'true';
        nav.addEventListener('keydown', (e) => {
            const menuItems = Array.from(nav.querySelectorAll('[role="menuitem"], .cosy-nav-more-btn'));
            if (menuItems.length === 0) return;
            const currentIndex = menuItems.indexOf(document.activeElement);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                if (currentIndex !== -1) {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % menuItems.length;
                    menuItems[nextIndex].focus();
                }
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                if (currentIndex !== -1) {
                    e.preventDefault();
                    const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                    menuItems[prevIndex].focus();
                }
            } else if (e.key === 'Home') {
                e.preventDefault();
                menuItems[0].focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                menuItems[menuItems.length - 1].focus();
            }
        });
    }

    if (typeof document !== 'undefined' && !window.cosyNavOutsideHandlerSetup) {
        window.cosyNavOutsideHandlerSetup = true;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const moreDropdown = document.querySelector('.cosy-nav-more-wrap.open');
                if (moreDropdown) {
                    moreDropdown.classList.remove('open');
                    const btn = moreDropdown.querySelector('.cosy-nav-more-btn');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                        btn.focus();
                    }
                }

                const mm = document.getElementById('cosy-mobile-menu');
                if (mm && mm.classList.contains('open')) {
                    mm.classList.remove('open');
                    const btn = document.querySelector('.nav-menu-btn');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                        btn.focus();
                    }
                }
            }
        });

        document.addEventListener('click', (e) => {
            const moreDropdown = document.querySelector('.cosy-nav-more-wrap.open');
            if (moreDropdown && !moreDropdown.contains(e.target)) {
                moreDropdown.classList.remove('open');
                const btn = moreDropdown.querySelector('.cosy-nav-more-btn');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function applyMode () {
    const { mode } = STATE;
    if (typeof document !== 'undefined' && document.body) {
        document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
        document.body.classList.add('mode-free');
    }

    const nav = typeof document !== 'undefined' ? document.getElementById('cosy-nav') : null;
    if (nav) {
        if (!document.querySelector('.cosy-ecosystem-strip')) {
            const stripEl = document.createElement('nav');
            const homeUrl = getNavHref('home');
            stripEl.className = 'cosy-ecosystem-strip';
            stripEl.setAttribute('aria-label', 'COSY Ecosystem Products');
            stripEl.innerHTML = `
              <div class="cosy-strip-inner">
                <span class="cosy-strip-brand">🌐 COSY Ecosystem:</span>
                <ul class="cosy-strip-links">
                  <li><a href="${homeUrl}" class="cosy-strip-link active">COSYlanguages</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYtools/" target="_blank" rel="noopener" class="cosy-strip-link">COSYtools 🔎</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="cosy-strip-link">COSYgames 🎮</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYevents/" target="_blank" rel="noopener" class="cosy-strip-link">COSYevents 🎉</a></li>
                </ul>
              </div>`;
            nav.parentNode.insertBefore(stripEl, nav);
        }
        nav.className = 'nav-container';
        const t = getNavLabel;
        nav.setAttribute('aria-label', t('main_aria', 'Main Navigation'));
        nav.innerHTML = navFree();
        bindNavKeyboardHandlers();

        // Restore context if any
        if (typeof COSY !== 'undefined' && COSY._navContext) {
            const ctx = document.getElementById('cosy-nav-context');
            if (ctx) ctx.innerHTML = COSY._navContext;
        }
    }

    const mm = typeof document !== 'undefined' ? document.getElementById('cosy-mobile-menu') : null;
    if (mm) mm.innerHTML = mobileMenuHTML(mode);

    if (typeof window !== 'undefined' && window.COSY_UI && typeof window.COSY_UI.updateMobileNav === 'function') {
        window.COSY_UI.updateMobileNav(mode);
    }

    if (typeof document !== 'undefined') {
        document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));
    }

    // Re-apply translations if i18n is available
    if (typeof window !== 'undefined' && window.COSY_I18N && typeof window.COSY_I18N.refresh === 'function') {
        window.COSY_I18N.refresh();
    }
}

function mobileMenuHTML (mode) {
    const t = getNavLabel;
    const loginHref = getNavHref('login');

    const isLocked = (typeof localStorage !== 'undefined' && localStorage.getItem('cosy_ui_lang_locked') === 'true');
    const currentLang = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy_ui_lang') || localStorage.getItem('cosy_last_language'))) || 'en';
    const langOptions = [
        { code: 'en', flag: '🇬🇧', label: 'EN' },
        { code: 'fr', flag: '🇫🇷', label: 'FR' },
        { code: 'it', flag: '🇮🇹', label: 'IT' },
        { code: 'ru', flag: '🇷🇺', label: 'RU' },
        { code: 'el', flag: '🇬🇷', label: 'EL' },
        { code: 'es', flag: '🇪🇸', label: 'ES' }
    ].map(l => `<option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>${l.flag} ${l.label}</option>`).join('');

    const freeItems = NAV_CONFIG.free || [];
    const moreItems = NAV_CONFIG.more || [];
    const allItems = [...freeItems, ...moreItems];

    const linksHtml = allItems.map(item => {
        const fallbackLabel = item.key[0].toUpperCase() + item.key.slice(1);
        const label = t(item.key, fallbackLabel);
        const href = getNavHref(item.hrefKey || item.key);
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${href}" ${targetAttr} class="cosy-mobile-nav-link" data-translate-key="nav_${item.key}" data-i18n="nav.${item.key}">${item.icon ? item.icon + ' ' : ''}${label}</a>`;
    }).join('\n      ');

    const lockTitle = isLocked
        ? 'Interface language is locked on this device. Click to unlock.'
        : 'Pin interface language on this device.';

    const homeUrl = getNavHref('home');

    return `
      <a href="${homeUrl}" class="cosy-mobile-nav-link" data-translate-key="nav_home" data-i18n="nav.home">🏡 ${t('home', 'Home')}</a>
      ${linksHtml}
      <a href="${loginHref}" class="cosy-mobile-nav-link" data-translate-key="nav_login" data-i18n="nav.login">${t('login', '🔐 Log in')}</a>

      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>

      <div class="cosy-mobile-eco-section" style="padding: 4px 12px;">
        <span class="cosy-mobile-eco-title" style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-soft, #666); display: block; margin-bottom: 6px;">COSY ecosystem</span>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <a href="${homeUrl}" class="cosy-mobile-eco-link active" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYlanguages</a>
          <a href="https://cosylanguages.github.io/COSYtools/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYtools 🔎</a>
          <a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYgames 🎮</a>
          <a href="https://cosylanguages.github.io/COSYevents/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYevents 🎉</a>
        </div>
      </div>

      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>

      <a href="#" onclick="event.preventDefault(); COSY.toggleTheme();" class="cosy-mobile-nav-link mobile-theme-toggle-a" style="display: flex; align-items: center; gap: 8px;">🌓 Toggle Dark Mode</a>
      <div style="padding: 8px 12px; display: flex; align-items: center; gap: 8px; min-height: 44px;">
         <span style="font-size: 0.9rem; color: var(--ink-soft);" data-i18n="label.language">Language 🌍</span>
         <select id="cosy-language-switcher-mobile" onchange="setLanguage(this.value)" class="styled-sel" ${isLocked ? 'disabled' : ''} style="width: auto; padding: 4px 8px; font-size: 0.8rem; border-radius: var(--r-sm); height: 36px; background: var(--warm-white); border: 1px solid var(--border); color: var(--ink); cursor: pointer;" aria-label="Select Interface Language">
            ${langOptions}
         </select>
         <button id="cosy-lang-lock-btn-mobile" type="button" onclick="if(window.toggleLanguageLock)window.toggleLanguageLock()" class="cosy-lang-lock-btn ${isLocked ? 'locked' : ''}" title="${lockTitle}" aria-label="${lockTitle}" style="background:none; border:1px solid var(--border); border-radius:var(--r-sm); padding:2px 4px; font-size:0.75rem; height:28px; cursor:pointer; display:inline-flex; align-items:center; justify-content:center;">
            📌
         </button>
      </div>
      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>
      <a href="https://wa.me/330766784195" target="_blank" class="mm-cta cosy-mobile-nav-link" style="background: var(--sage, #416b49); color: #fff; font-weight: 700; border-radius: 100px; text-align: center; justify-content: center;" data-translate-key="nav_contact">💬 Contact us on WhatsApp</a>`
}

/* ─── DICTIONARY ────────────────────────────────────────────────
   Persistence: uses localStorage['cosy_dict_free_guest']
─────────────────────────────────────────────────────────────────  */
let dictionary = {}; // { word: { definition, example, synonyms, antonyms, addedAt } }

function getDictKey() {
  return `cosy_dict_free_guest`;
}

function saveWordLocally(word, data) {
  if (data && !data.addedAt) data.addedAt = Date.now();
  dictionary[word] = data;
  saveDict();
}

function loadVocabLocally() {
  return Object.values(dictionary);
}

function loadDict() {
  const key = getDictKey();
  const saved = localStorage.getItem(key);
  dictionary = saved ? JSON.parse(saved) : {};

  // Data Migration
  let migrated = false;

  // 1. Migrate legacy string-based dictionary entries
  Object.entries(dictionary).forEach(([word, data]) => {
    if (typeof data === 'string') {
      dictionary[word] = {
        word: word,
        definition: data,
        addedAt: Date.now()
      };
      migrated = true;
    }
  });

  if (migrated) saveDict();

  refreshDictUI();
  refreshVocabButtons();
}

function saveDict() {
  const key = getDictKey();
  localStorage.setItem(key, JSON.stringify(dictionary));
}

function refreshDictUI() {
  const count = Object.keys(dictionary).length;
  const countEl = document.getElementById('dict-count');
  if (countEl) countEl.textContent = count;

  const body = document.getElementById('dict-body');
  const empty = document.getElementById('dict-empty-msg');
  if (!body) return;

  body.querySelectorAll('.dict-entry').forEach(e => e.remove());
  if (count === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  Object.entries(dictionary).forEach(([word, data]) => {
    const el = document.createElement('div');
    el.className = 'dict-entry';
    const def = typeof data === 'string' ? data : (data.definition || '');
    el.innerHTML = `<div><div class="dict-entry-word">${word}</div><div class="dict-entry-def">${def}</div></div><button class="dict-remove" onclick="COSY.removeFromDict('${word.replace(/'/g,"\\'")}')">✕</button>`;
    body.appendChild(el);
  });
}

function renderDictUI() {
    const t = getNavLabel;
    return `
      <button id="dict-fab" onclick="COSY.toggleDict()">📖 ${t('dictionary', 'My Dictionary')} (<span id="dict-count">0</span>)</button>
      <div id="dict-panel">
        <div class="dict-panel-header">
          <span class="dict-panel-title">📖 ${t('dictionary', 'My Dictionary')}</span>
          <button class="dict-panel-toggle" onclick="COSY.toggleDict()">✕ ${t('close', 'Close')}</button>
        </div>
        <div class="dict-panel-body" id="dict-body">
          <p class="dict-empty" id="dict-empty-msg" style="font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:1rem 0;">${t('dict_empty', 'No words saved yet.')}</p>
        </div>
        <div class="dict-panel-footer" style="padding:.6rem 1rem;border-top:1px solid var(--border);background:var(--cream);">
          <button class="dict-export-btn" onclick="COSY.exportDict()">⬇️ ${t('dict_export', 'Export as text file')}</button>
        </div>
      </div>`;
}

function refreshVocabButtons() {
  document.querySelectorAll('.vocab-add-btn, .btn-add-dict').forEach(btn => {
    const oc = btn.getAttribute('onclick') || '';
    const wordMatch = oc.match(/addToDict\(['"]([^'"]+)['"]/);
    const word = wordMatch ? wordMatch[1] : null;

    if (word && dictionary[word]) {
      btn.textContent = '✓ Saved';
      btn.classList.add('saved');
    } else {
      btn.classList.remove('saved');
      if (word && !dictionary[word]) btn.textContent = '+ Dictionary';
    }
  });
}

function injectStyles() {
    const p = getPrefix();
    if (!document.querySelector(`link[href*="css/components.css"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = p + 'css/components.css';
        document.head.appendChild(link);
    }

    // Modular dynamic CSS loading
    if (document.body && document.body.className && document.body.className.includes('theme-mind')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/mind/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/mind/style.css';
            document.head.appendChild(link);
        }
    }
    if (document.body && document.body.className && document.body.className.includes('theme-quotes')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/quotes/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/quotes/style.css';
            document.head.appendChild(link);
        }
    }
    if (document.body && document.body.className && document.body.className.includes('theme-celebrate')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/celebrate/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/celebrate/style.css';
            document.head.appendChild(link);
        }
    }
}

function ensureI18nLoaded() {
    if (window.COSY_I18N || window.setLanguage) return;

    // Check if script is already present in DOM
    const existing = document.querySelector('script[src*="js/core/i18n.js"]');
    if (existing) return;

    const p = getPrefix();
    const s = document.createElement('script');
    s.src = p + 'js/core/i18n.js';
    document.head.appendChild(s);
}

function inject () {
    injectStyles();
    ensureI18nLoaded();
    if (!document.getElementById('cosy-mobile-menu')) {
        const m = document.createElement('div'); m.id = 'cosy-mobile-menu'; document.body.appendChild(m);
    }
    if (!document.getElementById('dict-panel') && !document.getElementById('dict-fab')) {
        const d = document.createElement('div');
        d.innerHTML = renderDictUI();
        while (d.firstChild) {
            document.body.appendChild(d.firstChild);
        }
    }
    applyMode();
    loadDict();
    loadDict();
}

/* ═══════════════════════════════════════════════════════════════
   6. PUBLIC API
   ═══════════════════════════════════════════════════════════════ */

async function getVocabFileList(lang, folderCode) {
    const prefix = getPrefix();
    if (!vocabManifest) {
        try {
            const res = await fetch(prefix + 'vocabulary/manifest.json');
            if (res.ok) {
                vocabManifest = await res.json();
            } else {
                console.warn('[COSY] vocabulary/manifest.json missing, using fallback list');
            }
        } catch (e) {
            console.warn('[COSY] Failed to fetch manifest, using fallback list', e);
        }
    }

    if (vocabManifest && vocabManifest[lang] && vocabManifest[lang][folderCode]) {
        return vocabManifest[lang][folderCode];
    }
    return FALLBACK_VOCAB_FILES;
}

async function loadVocabFile(path) {
    const prefix = getPrefix();
    const fullPath = prefix + path;

    return new Promise((resolve) => {
        const s = document.createElement('script');
        // Removed cache-buster to allow browser/SW caching
        s.src = fullPath;
        s.onload = () => { s.remove(); resolve(); };
        s.onerror = () => {
            console.warn('[COSY] vocab file not found:', fullPath);
            s.remove();
            resolve();
        };
        document.head.appendChild(s);
    });
}

let STATE = readState();

window.COSY = {
    get mode() { return STATE.mode },
    get practice() { return STATE.practice },
    get notebook() { return STATE.notebook },
    get dictionary() { return dictionary },
    getPrefix,

    initTheme() {
        const theme = localStorage.getItem('cosy_theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
        }
    },

    toggleTheme() {
        const currentTheme = localStorage.getItem('cosy_theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('cosy_theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        if (newTheme === 'dark') {
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
        }
        const toggles = document.querySelectorAll('.theme-toggle-btn');
        toggles.forEach(btn => {
            btn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        });
        if (window.COSY && typeof window.COSY.showToast === 'function') {
            window.COSY.showToast(`Theme switched to ${newTheme}!`);
        }
    },

    toggleMoreMenu(btn) {
      if (!btn) return;
      const wrap = btn.closest('.cosy-nav-more-wrap');
      if (!wrap) return;
      wrap.classList.toggle('open');
      const isOpen = wrap.classList.contains('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        const firstLink = wrap.querySelector('.cosy-nav-more-dropdown a');
        if (firstLink) firstLink.focus();
      }
    },

    toggleMobileMenu () {
      const mm = typeof document !== 'undefined' ? document.getElementById('cosy-mobile-menu') : null;
      const btn = typeof document !== 'undefined' ? document.querySelector('.nav-menu-btn') : null;
      if (mm) {
        mm.classList.toggle('open');
        const isOpen = mm.classList.contains('open');
        if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) {
            const firstLink = mm.querySelector('a');
            if (firstLink) firstLink.focus();
        }
      }
    },
    getEcosystemUrls,
    getNavHref,
    DEFAULT_ECOSYSTEM_URLS,
    NAV_CONFIG,
    NAV_FALLBACKS,
    // Dictionary
    async addToDict(wordData, maybeDef, btnEl) {
        let word, data;
        let btn = btnEl;

        if (typeof wordData === 'string') {
            word = wordData;
            // Handle legacy signature: addToDict(word, def, btn)
            data = {
                word: word,
                definition: typeof maybeDef === 'string' ? maybeDef : '',
                addedAt: Date.now()
            };
            if (maybeDef instanceof HTMLElement) btn = maybeDef;
        } else if (wordData && typeof wordData === 'object') {
            // Handle object signature: addToDict(wordObj, btn)
            word = wordData.word || wordData.text;
            data = {
                word: word,
                definition: wordData.definition || wordData.definitions?.[0]?.text || '',
                example: wordData.example || wordData.definitions?.[0]?.examples?.[0] || '',
                synonyms: wordData.synonyms || [],
                antonyms: wordData.antonyms || [],
                lang: wordData.lang || localStorage.getItem('cosy_user_lang') || 'en',
                level: wordData.level,
                addedAt: Date.now()
            };
            if (maybeDef instanceof HTMLElement) btn = maybeDef;
        }

        if (!word) return;

        if (dictionary[word]) {
            if (btn && btn instanceof HTMLElement) {
                btn.textContent = '✓ Saved';
                btn.classList.add('saved');
            }
            return;
        }

        saveWordLocally(word, data);

        if (btn && btn instanceof HTMLElement) {
            btn.textContent = '✓ Saved';
            btn.classList.add('saved');
        }
        refreshDictUI();
    },
    async removeFromDict(word) {
        delete dictionary[word];
        saveDict();
        refreshDictUI();
        refreshVocabButtons();
    },
    exportDict() {
        const lines = Object.entries(dictionary).map(([w,d]) => {
            const def = typeof d === 'string' ? d : (d.definition || '');
            return `${w} — ${def}`;
        }).join('\n');
        const blob = new Blob(['MY COSY DICTIONARY\n\n' + lines], {type:'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'cosy-dictionary.txt';
        a.click();
    },

    refresh: () => { STATE = readState(); applyMode(); },

    showToast(msg, isError = false) {
        const t = document.getElementById('toast');
        if (!t) {
            const toast = document.createElement('div');
            toast.id = 'toast';
            toast.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); padding:12px 24px; border-radius:30px; color:#fff; font-weight:800; font-size:0.85rem; z-index:10000; opacity:0; pointer-events:none; transition:opacity 0.3s;';
            document.body.appendChild(toast);
        }
        const toastEl = document.getElementById('toast');
        toastEl.textContent = msg;
        toastEl.style.background = isError ? '#c0392b' : '#333';
        toastEl.style.opacity = '1';
        toastEl.style.pointerEvents = 'auto';
        setTimeout(() => {
            toastEl.style.opacity = '0';
            toastEl.style.pointerEvents = 'none';
        }, 3000);
    },

    toggleDict() {
      const panel = document.getElementById('dict-panel');
      if (panel) panel.classList.toggle('open');
    },

    async loadLanguageData(lang, levelId) {
        const COSYDATA_BASE = 'https://cosylanguages.github.io/COSYdata/';
        const levelsToLoad = (levelId === 'all')
            ? (window.COSY_LEVELS ? window.COSY_LEVELS.map(l => l.id) : ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'])
            : [levelId];

        const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData', 'grammarElements', 'dishesData'];
        keys.forEach(key => {
            window[key] = window[key] || {};
            window[key][lang] = window[key][lang] || [];
        });

        // Attempt remote COSYdata fetch first for centralized vocabulary
        try {
            const indexRes = await fetch(`${COSYDATA_BASE}vocabulary/${lang}/index.json`);
            if (indexRes.ok) {
                const indexData = await indexRes.json();
                const themeFiles = [...new Set(Object.values(indexData))];
                const themeFetches = themeFiles.map(tf =>
                    fetch(`${COSYDATA_BASE}vocabulary/${lang}/${tf}`)
                        .then(r => r.ok ? r.json() : null)
                        .catch(() => null)
                );
                const themeResults = await Promise.all(themeFetches);
                const loadedEntries = [];
                const seenIds = new Set(window.vocabularyData[lang].map(e => e.id || e.word));

                for (const tData of themeResults) {
                    if (!tData) continue;
                    const items = Array.isArray(tData) ? tData : (tData.id ? [tData] : Object.values(tData));
                    for (const item of items) {
                        if (!item || !item.word) continue;
                        const keyId = item.id || `${item.word.toLowerCase()}|${item.level || ''}`;
                        if (seenIds.has(keyId)) continue;
                        seenIds.add(keyId);

                        // Normalize level and level_code
                        if (!item.level && item.level_code) item.level = item.level_code;
                        if (!item.level_code && item.level) item.level_code = item.level;

                        // Check level filter if applicable
                        if (levelId && levelId !== 'all') {
                            const itemLvl = (item.level_code || item.level || '').toLowerCase();
                            const folderCode = window.getLevelDir ? window.getLevelDir(levelId).toLowerCase() : levelId.toLowerCase();
                            const shortCode = window.levelIdToShort ? window.levelIdToShort(levelId).toLowerCase() : levelId.toLowerCase();
                            if (itemLvl !== levelId.toLowerCase() && itemLvl !== folderCode && itemLvl !== shortCode) {
                                const aliases = { 'starter': 'a1', 'elementary': 'a2', 'intermediate': 'b1', 'upper-intermediate': 'b2', 'advanced': 'c1', 'proficiency': 'c2' };
                                if (aliases[itemLvl] !== shortCode && itemLvl !== shortCode) continue;
                            }
                        }

                        window.vocabularyData[lang].push(item);
                        loadedEntries.push(item);

                        if (item.form === 'verb' || item.pos === 'verb') window.verbsData[lang].push(item);
                        if (item.form === 'adjective' || item.pos === 'adjective') window.adjectivesData[lang].push(item);
                        if (item.theme === 'locations' || item.pos_section === 'locations') window.locationsData[lang].push(item);
                        if (item.theme === 'people' || item.pos_section === 'people') window.peopleData[lang].push(item);
                        if (item.theme === 'nationalities') window.nationalitiesData[lang].push(item);
                        if (item.theme === 'dishes') window.dishesData[lang].push(item);
                    }
                }

                if (loadedEntries.length > 0) {
                    return loadedEntries;
                }
            }
        } catch (err) {
            console.warn(`[COSYdata] COSYdata fetch failed for ${lang}, falling back to local files:`, err);
        }

        // Fallback to local script loading for non-migrated languages or offline mode
        const allEntries = [];
        const beforeCounts = {};
        keys.forEach(key => { beforeCounts[key] = window[key][lang].length; });

        const loadPromises = [];
        for (const lid of levelsToLoad) {
            const folderCode = window.getLevelDir ? window.getLevelDir(lid) : lid;
            const basePath = lid === 'all' ? `vocabulary/${lang}/` : `vocabulary/${lang}/${folderCode}/`;
            const files = await getVocabFileList(lang, folderCode);
            for (const file of files) {
                loadPromises.push(loadVocabFile(basePath + file));
            }
        }

        await Promise.all(loadPromises);

        keys.forEach(key => {
            const after = window[key][lang];
            allEntries.push(...after.slice(beforeCounts[key]));
        });

        return allEntries;
    },

    async loadCurriculum(lang, level) {
        if (!lang || !level) return [];

        const prefix = getPrefix();
        const levelUp = level.toUpperCase();
        const levelLow = level.toLowerCase();
        const langLow = lang.toLowerCase();

        const standardPath = `https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/${lang}/general/${levelUp}.json`;
        const v2Path = `https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/${lang}/general/${levelUp}_v2.json`;

        try {
            const res = await fetch(standardPath);
            const data = res.ok ? await res.json() : await fetch(v2Path).then(r => r.ok ? r.json() : null);
            if (data && data.units) {
                const units = data.units;
                window.curriculumData = window.curriculumData || {};
                const key = `${langLow}_${levelLow}`;
                window.curriculumData[key] = units;
                if (window.cosyDays) window.cosyDays.state.curriculum = units;
                return units;
            }
        } catch (e) {
            console.warn(`Failed to load curriculum for ${lang} ${level}:`, e);
        }

        const key = `${langLow}_${levelLow}`;
        return (window.curriculumData && window.curriculumData[key]) || [];
    },

    async loadMorphologyData(lang) {
        if (!lang) return [];

        const langLow = lang.toLowerCase();
        window.morphologyData = window.morphologyData || {};
        window.morphologyData[langLow] = window.morphologyData[langLow] || [];

        const prefix = getPrefix();
        const files = ['verbs.json', 'nouns.json', 'pronouns.json', 'determiners.json', 'adjectives.json', 'numerals.json'];

        const loadPromises = files.map(file => {
            const path = `${prefix}grammar/${langLow}/morphology/${file}`;
            return fetch(path)
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data && data.groups) {
                        data.groups.forEach(group => {
                            const items = group.items || [group];
                            items.forEach(item => {
                                if (!item.id) return;
                                const entry = {
                                    ...item,
                                    group: group.id,
                                    group_label: group.label || group.id,
                                    category: data.category || 'morphology',
                                    language: langLow
                                };
                                window.morphologyData[langLow].push(entry);
                            });
                        });
                    }
                })
                .catch(err => console.warn(`[COSY Morphology Loader] Failed to load ${path}:`, err));
        });

        await Promise.all(loadPromises);
        return window.morphologyData[langLow];
    },

    setNavContext(html) {
        const ctx = document.getElementById('cosy-nav-context');
        if (ctx) ctx.innerHTML = html;
        this._navContext = html; // Persist across refreshes in current session
    },
    updateNavActiveState,

    registerSW() {
        if ('serviceWorker' in navigator) {
            const p = getPrefix();
            // Register root service worker for Free Portal
            navigator.serviceWorker.register(p + 'sw.js').catch(e => console.log('SW (Root):', e));
        }
    }
};

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            COSY.initTheme();
            inject();
            COSY.registerSW();
            updateNavActiveState();
        });
    } else {
        COSY.initTheme();
        inject();
        COSY.registerSW();
        updateNavActiveState();
    }
}
if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', updateNavActiveState);
    window.addEventListener('popstate', updateNavActiveState);
}

})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getEcosystemUrls,
        getNavHref,
        DEFAULT_ECOSYSTEM_URLS,
        NAV_CONFIG,
        NAV_FALLBACKS
    };
}
