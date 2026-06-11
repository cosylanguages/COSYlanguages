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

const NAV_CONFIG = {
    free: [
        { key: 'home',     href: 'index.html',           icon: ''   },
        { key: 'practice', href: 'practice/index.html',  icon: '💡' },
        { key: 'games',    href: 'games/index.html',     icon: '🎮' },
        { key: 'events',   href: 'events/index.html',    icon: '🎉' },
        { key: 'about',    href: 'about/index.html',     icon: 'ℹ️' }
    ]
};

const BASE_URL = (window.location.pathname.startsWith('/COSYlanguages/') || window.location.pathname === '/COSYlanguages')
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
    ba: { home: 'Баш бит', practice: 'Практика', games: 'Уйындар', events: 'Чаралар', contact: 'Бәйләнеш' },
    tt: { home: 'Төп бит', practice: 'Практика', games: 'Уеннар', events: 'Чаралар', contact: 'Бәйләнеш' },
    ru: { home: 'Главная', practice: 'Практика', games: 'Игры', events: 'Мероприятия', contact: 'Связь' }
};

function getNavLabel(key, fallback) {
    const cleanKey = key.replace(/^nav\./, '');
    if (window.t) {
        const val = window.t('nav.' + cleanKey) || window.t('nav_' + cleanKey) || window.t(cleanKey);
        if (val) return val;
    }
    const lang = (document.documentElement.lang || 'en').toLowerCase();
    if (NAV_FALLBACKS[lang] && NAV_FALLBACKS[lang][cleanKey]) return NAV_FALLBACKS[lang][cleanKey];
    return fallback;
}

function renderNavLinks(mode) {
    const p = getPrefix();
    const config = NAV_CONFIG[mode] || [];
    return config.map(item => {
        const label = getNavLabel(item.key, item.key[0].toUpperCase() + item.key.slice(1));
        const key = `nav_${item.key}`;
        return `<li role="none"><a href="${p}${item.href}" ${isActive(item.href)} data-translate-key="${key}" role="menuitem">${item.icon ? item.icon + ' ' : ''}${label}</a></li>`;
    }).join('');
}

function navFree () {
    const p = getPrefix();
    const t = getNavLabel;
    return `
      <a class="nav-logo" href="${p}index.html" aria-label="${t('home_aria', 'COSYlanguages Home')}">
        <img src="${p}images/logos/cosylanguages.png" alt="COSYlanguages logo" onerror="this.style.display='none'">
        <span>COSYlanguages</span>
      </a>
      <ul class="nav-links" role="menubar">
        ${renderNavLinks('free')}
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right">
        <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank" data-translate-key="nav_contact">${t('contact', '💬 Contact us')}</a>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false">☰</button>
      </div>`
}

/* ═══════════════════════════════════════════════════════════════
   5. UI CORE (Templates)
   ═══════════════════════════════════════════════════════════════ */

function applyMode () {
    const { mode } = STATE;
    document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
    document.body.classList.add('mode-free');

    const nav = document.getElementById('cosy-nav');
    if (nav) {
        nav.className = 'nav-container';
        const t = getNavLabel;
        nav.setAttribute('aria-label', t('main_aria', 'Main Navigation'));
        nav.innerHTML = navFree();

        // Restore context if any
        if (COSY._navContext) {
            const ctx = document.getElementById('cosy-nav-context');
            if (ctx) ctx.innerHTML = COSY._navContext;
        }
    }

    const mm = document.getElementById('cosy-mobile-menu');
    if (mm) mm.innerHTML = mobileMenuHTML(mode);

    if (window.COSY_UI && typeof window.COSY_UI.updateMobileNav === 'function') {
        window.COSY_UI.updateMobileNav(mode);
    }

    document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));

    // Re-apply translations if i18n is available
    if (window.COSY_I18N && typeof window.COSY_I18N.refresh === 'function') {
        window.COSY_I18N.refresh();
    }
}

function mobileMenuHTML (mode) {
    const p = getPrefix();
    return `
      <a href="${p}index.html" data-translate-key="nav_home">Home</a>
      <a href="${p}practice/index.html" data-translate-key="nav_practice">💡 Practice</a>
      <a href="${p}games/index.html" data-translate-key="nav_games">🎮 Games</a>
      <a href="${p}events/index.html" data-translate-key="nav_events">🎉 Events</a>
      <a href="${p}about/index.html" data-translate-key="nav_about">ℹ️ About</a>
      <div class="mm-divider"></div>
      <a href="https://wa.me/330766784195" target="_blank" class="mm-cta" data-translate-key="nav_contact">💬 Contact us on WhatsApp</a>`
}

/* ─── DICTIONARY ────────────────────────────────────────────────
   Persistence: uses localStorage['cosy_dict_free_guest']
─────────────────────────────────────────────────────────────────  */
let dictionary = {}; // { word: { definition, example, synonyms, antonyms, addedAt } }

function getDictKey() {
  return `cosy_dict_free_guest`;
}

function saveWordLocally(word, definition, language) {
  dictionary[word] = {
    word: word,
    definition: definition || '',
    language: language || 'en',
    addedAt: Date.now()
  };
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
}

function inject () {
    injectStyles();
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
    const langMatch = path.match(/vocabulary\/([^/]+)\//);
    const lang = langMatch ? langMatch[1] : 'en';

    // Ensure vocabularyData exists so files can push to it (especially people.js)
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = window.vocabularyData[lang] || [];

    const beforeCount = window.vocabularyData[lang].length;

    await new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = fullPath + '?v=' + Date.now();
        s.onload = () => { s.remove(); resolve(); };
        s.onerror = () => {
            console.warn('[COSY] vocab file not found:', fullPath);
            s.remove();
            resolve();
        };
        document.head.appendChild(s);
    });

    const after = window.vocabularyData[lang];
    return after.slice(beforeCount);
}

let STATE = readState();

window.COSY = {
    get mode() { return STATE.mode },
    get practice() { return STATE.practice },
    get notebook() { return STATE.notebook },
    get dictionary() { return dictionary },
    getPrefix,

    toggleMobileMenu () {
      const mm = document.getElementById('cosy-mobile-menu')
      if (mm) mm.classList.toggle('open')
    },
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

        dictionary[word] = data;
        saveWordLocally(word, data.definition, data.lang);

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
        // 1. Convert level ID to folder short code
        const folderCode = window.getLevelDir(levelId);

        // 2. Build the path to the level folder
        const basePath = `vocabulary/${lang}/${folderCode}/`;

        // 3. Get the list of .js files in that folder
        const files = await getVocabFileList(lang, folderCode);

        // 4. Load each file and collect all entries
        const allEntries = [];
        for (const file of files) {
            try {
                const entries = await loadVocabFile(basePath + file);
                if (entries) allEntries.push(...entries);
            } catch (e) {
                console.warn('[COSY] Error loading vocab file:', file, e);
            }
        }

        // 5. Validate: warn about entries with missing required fields
        allEntries.forEach(entry => {
            if (!entry.id || !entry.word || !entry.translation ||
                !entry.level || !entry.theme || !entry.language) {
                console.warn('[COSY] Entry missing required field:', entry);
            }
        });

        return allEntries;
    },

    async loadCurriculum(lang, level) {
        if (!lang || !level) return [];

        const prefix = getPrefix();
        const v2Path = `${prefix}curriculum/${lang}/general/${level.toUpperCase()}_v2.json`;
        try {
            const v2Res = await fetch(v2Path);
            if (v2Res.ok) {
                const v2Data = await v2Res.json();
                if (v2Data && v2Data.units) {
                    if (window.cosyDays) window.cosyDays.state.curriculum = v2Data.units;
                    return v2Data.units;
                }
            }
        } catch (e) {
            console.log("v2 curriculum not found, falling back to legacy JS data.");
        }

        const path = `${prefix}js/data/curriculum/${lang}_${level}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src*="${path}"]`)) {
                const key = `${lang}_${level}`;
                let data = (window.curriculumData && window.curriculumData[key]) || [];
                if (window.cosyDays) window.cosyDays.state.curriculum = data;
                return resolve(data);
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = async () => {
                await new Promise(r => setTimeout(r, 100));
                const key = `${lang}_${level}`;
                let data = (window.curriculumData && window.curriculumData[key]) || [];
                if (window.cosyDays) window.cosyDays.state.curriculum = data;
                resolve(data);
            };
            script.onerror = () => { resolve([]); };
            document.head.appendChild(script);
        });
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
            navigator.serviceWorker.register(p + 'sw.js').catch(e => console.log('SW:', e));
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        inject();
        COSY.registerSW();
        updateNavActiveState();
    });
} else {
    inject();
    COSY.registerSW();
    updateNavActiveState();
}
window.addEventListener('hashchange', updateNavActiveState);
window.addEventListener('popstate', updateNavActiveState);

})();
