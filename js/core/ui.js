/**
 * js/core/ui.js
 * Hub UI helpers: scroll effects, reviews carousel, mobile navigation,
 * pin-to-home modal, daily dose and language-page country tabs.
 *
 * Events, speaking-club, Wonder/Science-club, vocabulary-hover and session
 * features lived here before the ecosystem split; they now belong to COSYevents.
 */
(function() {
    'use strict';

    window.COSY = window.COSY || {};

    /* ─── GLOBAL HELPERS ────────────────────────────────────────── */
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    /* ─── SCROLL & VISUAL EFFECTS ───────────────────────────────── */
    /* ─── SCROLL PROGRESS LINE & SIDE DOTS ─────────────────────── */
    const setupScrollProgress = () => {
        let bar = document.querySelector('.cosy-scroll-progress-bar');
        if (!bar) {
            bar = document.createElement('div');
            bar.className = 'cosy-scroll-progress-bar';
            bar.setAttribute('aria-hidden', 'true');
            const nav = document.getElementById('cosy-nav') || document.querySelector('.cosy-navbar') || document.body;
            if (nav && nav.nextSibling) {
                nav.parentNode.insertBefore(bar, nav.nextSibling);
            } else {
                document.body.prepend(bar);
            }
        }

        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            const winHeight = window.innerHeight || document.documentElement.clientHeight;
            const scrollable = docHeight - winHeight;

            if (scrollable > 0) {
                const pct = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
                bar.style.width = pct + '%';
            } else {
                bar.style.width = '0%';
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress, { passive: true });
        updateProgress();
    };

    const setupSideSectionDots = () => {
        const existingDots = document.querySelector('.cosy-side-dots');
        if (existingDots) existingDots.remove();

        // Target main sections with explicit IDs
        const main = document.querySelector('main.page, main.content-container, main, article, #main-content') || document.body;
        if (!main) return;

        const candidateElements = main.querySelectorAll('section[id], div[id].sec-block, #how, #languages, #courses, #events, #tools, #calculator, #reviews, #start');
        const sections = [];
        const seen = new Set();

        const cleanLabelText = (rawText) => {
            if (!rawText) return '';
            let t = rawText.replace(/[▲▼]/g, '').replace(/\s*\d+\s*(games|sessions|words|items)\s*$/gi, '').trim();
            if (t.length > 28) {
                const shortText = t.split(/\s*[\u2014\-–:]\s*/)[0].trim();
                if (shortText && shortText.length <= 28) {
                    return shortText;
                }
                return t.substring(0, 25) + '...';
            }
            return t;
        };

        candidateElements.forEach(el => {
            const id = el.id;
            if (!id || seen.has(id)) return;
            if (el.closest('#cosy-nav, #cosy-nav-drawer, footer, header, #pin-modal, #back-to-top')) return;
            // Skip inner anchor divs without standalone content (such as <div id="courses"></div>)
            if (el.tagName === 'DIV' && !el.textContent.trim() && el.parentElement && el.parentElement.tagName === 'SECTION') return;

            const headerEl = el.querySelector('.sec-h2, .section-title, h2, h3, .sec-tag') || (el.matches('h2, h3') ? el : null);
            let rawTitle = headerEl ? headerEl.textContent.trim() : '';

            if (!rawTitle) {
                const cleanId = id.replace(/^[smp]-/, '').replace(/-/g, ' ').trim();
                rawTitle = cleanId.charAt(0).toUpperCase() + cleanId.slice(1);
            }

            const label = cleanLabelText(rawTitle);
            if (!label) return;

            seen.add(id);
            sections.push({ id, label, el });
        });

        if (sections.length < 2) return;

        const dotsContainer = document.createElement('nav');
        dotsContainer.className = 'cosy-side-dots';
        dotsContainer.setAttribute('aria-label', 'Section navigation dots');

        const dotButtons = [];

        sections.forEach((sec, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'cosy-side-dot' + (idx === 0 ? ' active' : '');
            btn.setAttribute('aria-label', `Navigate to ${sec.label}`);
            btn.setAttribute('data-target-id', sec.id);

            const tooltip = document.createElement('span');
            tooltip.className = 'cosy-dot-tooltip';
            tooltip.textContent = sec.label;
            btn.appendChild(tooltip);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const targetEl = document.getElementById(sec.id);
                if (targetEl) {
                    const offset = 80;
                    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            });

            dotsContainer.appendChild(btn);
            dotButtons.push({ id: sec.id, btn, el: sec.el });
        });

        document.body.appendChild(dotsContainer);

        // IntersectionObserver for tracking active section
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.id;
                    dotButtons.forEach(item => {
                        if (item.id === activeId) {
                            item.btn.classList.add('active');
                            item.btn.setAttribute('aria-current', 'true');
                        } else {
                            item.btn.classList.remove('active');
                            item.btn.removeAttribute('aria-current');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec.el));
    };

    const setupHeaderShrink = () => {
        const nav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
        if (!nav) return;
        if (!window.cosyHeaderShrinkSetup) {
            window.cosyHeaderShrinkSetup = true;
            window.addEventListener('scroll', () => {
                const activeNav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
                if (!activeNav) return;
                if (window.scrollY > 50) activeNav.classList.add('shrunk');
                else activeNav.classList.remove('shrunk');
            });
        }
    };

    const setupBackToTop = () => {
        if (document.getElementById('back-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'back-to-top'; btn.innerHTML = '↑'; btn.setAttribute('title', 'Back to Top');
        btn.setAttribute('aria-label', 'Back to Top');
        document.body.appendChild(btn);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) btn.classList.add('visible');
            else btn.classList.remove('visible');
        });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };


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

    const setupReviewsCarousel = () => {
        const track = document.getElementById('reviews-track');
        const prevBtn = document.getElementById('reviews-prev');
        const nextBtn = document.getElementById('reviews-next');
        const slides = document.querySelectorAll('.review-slide');

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        const goToSlide = (index) => {
            currentIndex = (index + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentIndex);
            });
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        // Touch Swipe Support
        let startX = 0;
        let isSwiping = false;

        const carousel = document.getElementById('reviews-carousel');
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                if (e.touches.length === 1) {
                    startX = e.touches[0].clientX;
                    isSwiping = true;
                }
            }, { passive: true });

            carousel.addEventListener('touchend', (e) => {
                if (!isSwiping || e.changedTouches.length === 0) return;
                const endX = e.changedTouches[0].clientX;
                const diffX = startX - endX;

                if (Math.abs(diffX) > 40) {
                    if (diffX > 0) goToSlide(currentIndex + 1);
                    else goToSlide(currentIndex - 1);
                }
                isSwiping = false;
            }, { passive: true });
        }
    };


    /* ─── MOBILE & PWA UTILITIES ────────────────────────────────── */
    window.updateMobileNav = function() {
      const mobileNav = document.querySelector('.mobile-nav');
      if (!mobileNav) return;

      const getNavHref = (window.COSY && typeof window.COSY.getNavHref === 'function')
          ? window.COSY.getNavHref
          : (key => (key === 'home' ? 'index.html' : key === 'courses' ? 'index.html#courses' : `https://cosylanguages.github.io/COSY${key}/`));

      const homeHref = getNavHref('home');
      const practiceHref = getNavHref('practice');
      const gamesHref = getNavHref('games');
      const eventsHref = getNavHref('events');
      const coursesHref = getNavHref('courses');

      mobileNav.innerHTML = `
        <a href="${practiceHref}" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span data-i18n="nav.practice">Practice</span></a>
        <a href="${gamesHref}" ${gamesHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span data-i18n="nav.games">Games</span></a>
        <a href="${eventsHref}" ${eventsHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-events"><span class="mn-icon">🎉</span><span data-i18n="nav.events">Events</span></a>
        <a href="${coursesHref}" class="mobile-nav-item" id="mnav-courses"><span class="mn-icon">📚</span><span data-i18n="nav.courses">Courses</span></a>
        <a href="${homeHref}" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span data-i18n="nav.home">Home</span></a>`;

      const path = window.location.pathname;
      const currentFilename = path.split('/').pop() || 'index.html';
      const items = document.querySelectorAll('.mobile-nav-item');

      items.forEach(item => {
        const href = item.getAttribute('href') || '';
        const linkFilename = href.split('#')[0].split('/').pop() || 'index.html';
        let active = (currentFilename === linkFilename);

        if (currentFilename === 'index.html' || currentFilename === '/') {
            active = (item.id === 'mnav-home');
        }

        if (path.includes('/games/') || path.includes('COSYgames')) {
            active = (item.id === 'mnav-games');
        } else if (path.includes('/events/') || path.includes('COSYevents')) {
            active = (item.id === 'mnav-events');
        }

        item.classList.toggle('active', active);
      });
    };


    /* ─── PIN MODAL (Add to Home Screen) ────────────────────────── */
    window.showPinModal = function(title, desc, url) {
        const pinModal = document.getElementById('pin-modal');
        if (!pinModal) return;
        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

        const el = id => document.getElementById(id);
        if (el('pin-title')) el('pin-title').textContent = title;
        if (el('pin-desc')) el('pin-desc').textContent = desc;
        if (el('pin-step-ios')) el('pin-step-ios').style.display = isIOS ? 'block' : 'none';
        if (el('pin-step-android')) el('pin-step-android').style.display = isIOS ? 'none' : 'block';

        window.history.replaceState({}, '', url);
        pinModal.style.display = 'flex';
        const closePin = () => { pinModal.style.display = 'none'; };
        const btn = pinModal.querySelector('button');
        if (btn) btn.onclick = closePin;
    };


    /* ─── INITIALIZATION ────────────────────────────────────────── */
    const init = () => {
        if (window.COSY) {
            window.COSY.reinit = init;
        }

        // Activate role="button" elements with Space/Enter
        if (!window.cosyRoleButtonKeyboardHandlerSetup) {
            window.cosyRoleButtonKeyboardHandlerSetup = true;
            document.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    const active = document.activeElement;
                    if (active && active.getAttribute('role') === 'button') {
                        e.preventDefault();
                        active.click();
                    }
                }
            });
        }

        setupScrollProgress();
        setupSideSectionDots();
        setupHeaderShrink();
        setupBackToTop();
        setupScrollReveal();
        setupReviewsCarousel();
        if (window.COSY && window.COSY.updateNavActiveState) window.COSY.updateNavActiveState();

        // FAQ toggle + ARIA
        document.querySelectorAll('.faq-item').forEach(item => {
            const btn = item.querySelector('.faq-q');
            if (!btn) return;
            btn.setAttribute('role', 'button');
            btn.setAttribute('tabindex', '0');
            btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
            btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item').forEach(i => {
                    i.classList.remove('open');
                    const b = i.querySelector('.faq-q');
                    if (b) b.setAttribute('aria-expanded', 'false');
                });
                if (!isOpen) {
                    item.classList.add('open');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Mobile bottom navigation (built once, labels via data-i18n)
        if (!document.querySelector('.mobile-nav')) {
            const nav = document.createElement('nav');
            nav.className = 'mobile-nav';
            nav.setAttribute('aria-label', 'Quick navigation');
            document.body.appendChild(nav);
        }
        window.updateMobileNav();

        window.updateDailyDose();
        document.addEventListener('cosyLanguageChanged', window.updateDailyDose);
        if (window.COSY && window.COSY.renderDict) window.COSY.renderDict();

        // First country tab on language pages
        const firstTab = document.querySelector('.ctab');
        if (firstTab) {
            const firstCountry = firstTab.getAttribute('data-country');
            if (firstCountry) window.showCountry(firstCountry);
        }
    };

    window.showCountry = function(code) {
        const panels = document.querySelectorAll('.country-panel');
        panels.forEach(p => p.classList.remove('show'));

        const tabs = document.querySelectorAll('.ctab');
        tabs.forEach(t => t.classList.remove('active'));

        const targetPanel = document.getElementById(`country-${code}`);
        if (targetPanel) targetPanel.classList.add('show');

        const targetTab = document.querySelector(`.ctab[data-country="${code}"]`);
        if (targetTab) targetTab.classList.add('active');
    };

    window.updateDailyDose = function() {
        const htmlLang = document.documentElement.lang || (document.body && document.body.dataset ? document.body.dataset.langTheme : '');
        const lang = (htmlLang || localStorage.getItem('cosy_user_lang') || 'en').toLowerCase();

        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));

        const fact = document.getElementById('fun-fact-of-the-day');
        if (fact) {
            const factList = (window.COSY_DAILY_FACTS && window.COSY_DAILY_FACTS[lang]) ? window.COSY_DAILY_FACTS[lang] : [
                "Languages connect people across cultures and time."
            ];
            const factItem = factList[dayOfYear % factList.length];
            fact.innerHTML = factItem;
        }

        const idiom = document.getElementById('idiom-of-the-day');
        if (idiom) {
            const idiomList = (window.COSY_DAILY_IDIOMS && window.COSY_DAILY_IDIOMS[lang]) ? window.COSY_DAILY_IDIOMS[lang] : [
                { idiom: "Piece of cake", level: "A1", meaning: "Very easy to do", example: "Don't worry, learning languages is a piece of cake with practice!" }
            ];
            const item = idiomList[dayOfYear % idiomList.length];

            // Resolve proper relative or absolute practice URL based on page depth
            const practiceUrl = `https://cosylanguages.github.io/COSYpractice/?lang=${lang.toUpperCase()}&topic=idioms`;

            idiom.innerHTML = `
                <div class="idiom-box">
                    <div class="idiom-header">
                        <div class="idiom-phrase">💡 "${item.idiom}"</div>
                        <span class="idiom-badge" data-level="${item.level}">${item.level}</span>
                    </div>
                    <div class="idiom-meaning"><strong>Meaning:</strong> ${item.meaning}</div>
                    <div class="idiom-example">💬 "${item.example}"</div>
                    <div class="idiom-footer">
                        <a href="${practiceUrl}" class="idiom-practice-btn">Practice this Idiom 💡 →</a>
                    </div>
                </div>
            `;
        }
    };


    /* "Notify me" forms on upcoming-language pages.
       There is no backend, so we open the visitor's mail app with a ready-made message
       instead of pretending to store the address. */
    window.captureLead = function(lang) {
        const trigger = (window.event && window.event.target) || document.activeElement;
        const container = trigger && trigger.closest
            ? (trigger.closest('.lang-card-soon') || trigger.closest('.start-strip') || trigger.parentElement)
            : null;
        const input = container ? container.querySelector('.lead-email') : null;
        const email = input ? input.value.trim() : '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (input) { input.focus(); input.setAttribute('aria-invalid', 'true'); }
            return;
        }
        const subject = encodeURIComponent('Notify me when ' + lang + ' opens');
        const body = encodeURIComponent(
            'Hello COSYlanguages,\n\nPlease let me know when ' + lang + ' lessons open.\nMy email: ' + email + '\n'
        );
        window.location.href = 'mailto:cosylanguages@gmail.com?subject=' + subject + '&body=' + body;
        const holder = container && (container.querySelector('.lead-capture') || container);
        if (holder) holder.innerHTML = '<span role="status">Your mail app is opening ✉️ Just press send.</span>';
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
