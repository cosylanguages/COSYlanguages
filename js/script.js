(function() {
    // --- Global Helper Functions ---
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    // --- Navigation Active State ---
    const updateNavActiveState = () => {
        const navLinks = document.querySelectorAll('nav a');
        const currentUrl = new URL(window.location.href);
        const currentPath = currentUrl.pathname.split('/').pop() || 'index.html';
        const currentHash = currentUrl.hash;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http')) return;

            link.classList.remove('active');

            const linkUrl = new URL(href, window.location.origin + window.location.pathname);
            const linkPath = linkUrl.pathname.split('/').pop() || 'index.html';
            const linkHash = linkUrl.hash;

            if (linkPath === currentPath) {
                if (linkHash) {
                    if (linkHash === currentHash) link.classList.add('active');
                } else if (!currentHash) {
                    link.classList.add('active');
                }
            }
        });
    };

    // --- Back to Top ---
    const setupBackToTop = () => {
        if (document.getElementById('back-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.innerHTML = '↑';
        btn.setAttribute('title', 'Back to Top');
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) btn.classList.add('visible');
            else btn.classList.remove('visible');
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // --- Calculator ---
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
        const multiplier = TYPE_M[type];
        const discount = DISC[pack];
        const sym = CUR_S[cur], rate = CUR_R[cur];

        const origBase = base * multiplier;
        const origTotal = (origBase * rate * pack).toFixed(cur === 'RUB' ? 0 : 2);
        const discountedBase = origBase * (1 - discount);
        const discountedSingle = (discountedBase * rate).toFixed(cur === 'RUB' ? 0 : 2);
        const discountedTotal = (discountedBase * rate * pack).toFixed(cur === 'RUB' ? 0 : 2);

        if (discount > 0) {
            el('calc-total').innerHTML = `
                <span class="original-price">${sym}${origTotal}</span>
                <span class="discounted-price">${sym}${discountedTotal}</span>
            `;
        } else {
            el('calc-total').textContent = `${sym}${discountedTotal}`;
        }

        if (pack === 1) {
            el('calc-detail').textContent = window.t('calc_per_session').replace('{0}', dur);
        } else {
            const packLabelMap = { 8: 'pack_starter', 16: 'pack_progress', 32: 'pack_maestro' };
            const packName = window.t(packLabelMap[pack]);
            const separator = window.t('calc_pack_separator') || ' · ';
            const perSessionSuffix = window.t('calc_per_session_suffix') || '/session';
            el('calc-detail').textContent = `${packName}${separator}${sym}${discountedSingle}${perSessionSuffix}`;
        }
        el('calc-note').textContent = discount > 0 ? window.t('calc_discount_applied').replace('{0}', (discount * 100).toFixed(0)) : '';
        el('calc-cta').textContent = window.t('calc_cta_book');
        el('calc-cta').href = 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20book%20a%20lesson.';
    };

    // --- FAQ ---
    const setupFAQ = () => {
        document.querySelectorAll('.faq-item').forEach(item => {
            const btn = item.querySelector('.faq-q');
            if (btn) btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
                if (!isOpen) item.classList.add('open');
            });
        });
    };

    // --- Scroll Reveal ---
    const setupReveal = () => {
        const io = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    e.target.style.animationDelay = (i * 0.07) + 's';
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    };

    // --- Initialize ---
    const init = () => {
        updateNavActiveState();
        setupBackToTop();
        setupReveal();
        setupFAQ();
        window.addEventListener('hashchange', updateNavActiveState);

        // Events Toggles
        const setupToggle = (btnId, contentId, showKey, hideKey) => {
            const btn = document.getElementById(btnId);
            const content = document.getElementById(contentId);
            if (btn && content) btn.addEventListener('click', () => {
                const isHidden = window.getComputedStyle(content).display === 'none';
                content.style.display = isHidden ? 'block' : 'none';
                btn.setAttribute('data-translate-key', isHidden ? hideKey : showKey);
                if (window.setLanguage) window.setLanguage(localStorage.getItem('language') || 'en');
            });
        };
        setupToggle('toggle-topics-btn', 'speaking-club-topics', 'toggle_topics_show', 'toggle_topics_hide');
        setupToggle('toggle-games-btn', 'game-nights-topics', 'toggle_games_show', 'toggle_games_hide');

        // Calculator
        if (document.getElementById('calc-lang')) {
            window.calcPrice();
            ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', window.calcPrice);
            });
        }

        // Language Switcher
        document.querySelectorAll('.nav-lang a[data-lang]').forEach(link => {
            link.addEventListener('click', (e) => {
                const lang = link.getAttribute('data-lang');
                if (!window.location.pathname.includes('/languages/')) {
                    e.preventDefault();
                    if (window.setLanguage) window.setLanguage(lang);
                }
            });
        });

        // Word/Fact of the Day
        const wotd = document.getElementById('word-of-the-day');
        if (wotd) {
            const words = {
                en: ["Hello", "Love", "Life", "Dream", "Freedom", "Joy", "Happiness", "Hope", "Star", "Light"],
                fr: ["Bonjour", "Amour", "Vie", "Rêve", "Liberté", "Joie", "Bonheur", "Espoir", "Étoile", "Lumière"],
                it: ["Ciao", "Amore", "Vita", "Sogno", "Libertà", "Gioia", "Felicità", "Speranza", "Stella", "Luce"],
                ru: ["Привет", "Любовь", "Жизнь", "Мечта", "Свобода", "Радость", "Счастье", "Надежда", "Звезда", "Свет"],
                el: ["Γειά", "Αγάπη", "Ζωή", "Όνειρο", "Ελευθερία", "Χαρά", "Ευτυχία", "Ελπίδα", "Αστέρι", "Φως"]
            };
            const pageLang = document.documentElement.lang;
            const list = words[pageLang] || words.en;
            wotd.textContent = list[getDayOfYear() % list.length];
        }

        const fact = document.getElementById('fun-fact-of-the-day');
        if (fact) {
            const pageLang = document.documentElement.lang;
            const list = window.translations?.[pageLang]?.[`fun_fact_${pageLang}`];
            if (list && list.length) fact.textContent = list[getDayOfYear() % list.length];
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also expose to window for external calls
    window.updateNavActiveState = updateNavActiveState;
})();
