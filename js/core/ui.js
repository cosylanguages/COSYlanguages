/**
 * js/core/ui.js
 * Shared UI helpers including toasts, modals, FAQ toggles, and scroll effects.
 */
(function() {
    // --- Global Helper Functions ---
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    // --- Header Shrink on Scroll ---
    const setupHeaderShrink = () => {
        const nav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
        if (!nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shrunk');
            } else {
                nav.classList.remove('shrunk');
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

    // --- Scroll Reveal ---
    const setupScrollReveal = () => {
        const io = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    e.target.style.animationDelay = (i * 0.1) + 's';
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
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

    // --- Initialize ---
    const init = () => {
        setupHeaderShrink();
        if (window.updateNavActiveState) window.updateNavActiveState();
        setupBackToTop();
        setupFAQ();
        setupScrollReveal();

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

        // Game Level Filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        const gameCards = document.querySelectorAll('.game-card-lobby');
        if (filterBtns.length && gameCards.length) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');
                    filterBtns.forEach(b => {
                        b.classList.toggle('active', b === btn);
                        b.style.background = b === btn ? 'var(--sage)' : '#fff';
                        b.style.color = b === btn ? '#fff' : 'var(--ink-soft)';
                        b.style.borderColor = b === btn ? 'var(--sage)' : 'var(--border)';
                    });

                    gameCards.forEach(card => {
                        const level = card.getAttribute('data-level');
                        if (filter === 'all' || level === filter) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
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
        window.updateDailyDose();
    };

    window.captureLead = function(lang, customContainer = null) {
        const container = customContainer || event.target.closest('.lang-card-soon') || event.target.closest('.start-strip');
        const emailInput = container.querySelector('.lead-email');
        const email = emailInput.value.trim();

        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Mocking the capture for now
        console.log(`Lead captured for ${lang}: ${email}`);

        const captureDiv = container.querySelector('.lead-capture');
        captureDiv.innerHTML = `<span style="font-size: 0.65rem; color: var(--sage-dark); font-weight: 800;">Thanks! We'll notify you. ✅</span>`;
    };

    window.updateDailyDose = function() {
        const pageLang = document.documentElement.lang || localStorage.getItem('language') || 'en';

        const wotd = document.getElementById('word-of-the-day');
        if (wotd) {
            const words = {
                en: ["Hello", "Love", "Life", "Dream", "Freedom", "Joy", "Happiness", "Hope", "Star", "Light"],
                fr: ["Bonjour", "Amour", "Vie", "Rêve", "Liberté", "Joie", "Bonheur", "Espoir", "Étoile", "Lumière"],
                it: ["Ciao", "Amore", "Vita", "Sogno", "Libertà", "Gioia", "Felicità", "Speranza", "Stella", "Luce"],
                ru: ["Привет", "Любовь", "Жизнь", "Мечта", "Свобода", "Радость", "Счастье", "Надежда", "Звезда", "Свет"],
                el: ["Γειά", "Αγάπη", "Ζωή", "Όνειρο", "Ελευθερία", "Χαρά", "Ευτυχία", "Ελπίδα", "Αστέρι", "Φως"],
                es: ["Hola", "Amor", "Vida", "Sueño", "Libertad", "Alegría", "Felicidad", "Esperanza", "Estrella", "Luz"],
                de: ["Hallo", "Liebe", "Leben", "Traum", "Freiheit", "Freude", "Glück", "Hoffnung", "Stern", "Licht"],
                pt: ["Olá", "Amor", "Vida", "Sonho", "Liberdade", "Alegria", "Felicidade", "Esperança", "Estrela", "Luz"],
                hy: ["Բարև", "Սեր", "Կյանք", "Երազանք", "Ազատություն", "Ուրախություն", "Երջանկություն", "Հույս", "Աստղ", "Լույս"],
                ka: ["გამარჯობა", "სიყვარული", "ცხოვრება", "ოცნება", "თავისუფლება", "სიხარული", "ბედნიერება", "იმედი", "ვარსკვლავი", "სინათლე"],
                tt: ["Исәнмесез", "Мөхәббәт", "Тормыш", "Хыял", "Азатлык", "Шатлык", "Бәхет", "Өмет", "Йолдыз", "Яктылык"],
                ba: ["Һаумыһығыҙ", "Мөхәббәт", "Тормош", "Хыял", "Азатлыҡ", "Шатлыҡ", "Бәхет", "Өмөт", "Йондоҙ", "Яҡтылыҡ"],
                br: ["Demat", "Karantez", "Buhez", "Hunvre", "Frankiz", "Joa", "Eurvad", "Spi", "Steredenn", "Goulou"]
            };
            const list = words[pageLang] || words.en;
            wotd.textContent = list[getDayOfYear() % list.length];
        }

        const fact = document.getElementById('fun-fact-of-the-day');
        if (fact) {
            const list = window.translations?.[pageLang]?.[`fun_fact_${pageLang}`];
            if (list && list.length) {
                fact.textContent = list[getDayOfYear() % list.length];
            } else {
                // Fallback to English if not available for current lang
                const enList = window.translations?.['en']?.[`fun_fact_en`];
                if (enList && enList.length) {
                    fact.textContent = enList[getDayOfYear() % enList.length];
                }
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
