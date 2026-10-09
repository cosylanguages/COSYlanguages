/**
 * COSYlanguages — Flipbook Magazine Reader for Blog Posts
 * Transforms long blog articles into structured, 3D two-page spreads on desktop and touch-swipe slides on mobile.
 */

(function () {
    'use strict';

    const COSYFlipbook = {
        currentPage: 1,
        totalPages: 1,
        spreads: [],
        mode: 'flipbook', // 'flipbook' or 'scroll'
        container: null,
        controlsEl: null,
        indicatorEl: null,
        prevBtn: null,
        nextBtn: null,
        selectEl: null,
        modeToggleBtn: null,
        liveAnnouncerEl: null,

        init: function () {
            this.container = document.querySelector('.post-full-content');
            if (!this.container) return;

            // Setup ARIA Live region for screen readers
            this.initLiveAnnouncer();

            // Intelligent chunker to split content without cutting headings/tables in half
            this.chunkContentIntoPages();

            const pageEls = Array.from(this.container.querySelectorAll('.flipbook-page'));
            if (pageEls.length <= 1) return;

            this.pages = pageEls;
            this.totalPages = this.pages.length;

            // Build 3D two-page spreads
            this.buildSpreads();

            // Restore view mode preference if saved
            const savedMode = localStorage.getItem('cosy_blog_view_mode');
            if (savedMode === 'scroll' || savedMode === 'flipbook') {
                this.mode = savedMode;
            }

            this.renderControls();
            this.initFounderCards();
            this.bindEvents();
            this.initZoomControls();

            // Handle URL hash on load (e.g. #page-3)
            const hashMatch = window.location.hash.match(/^#page-(\d+)$/);
            if (hashMatch) {
                const requestedPage = parseInt(hashMatch[1], 10);
                if (requestedPage >= 1 && requestedPage <= this.totalPages) {
                    this.currentPage = requestedPage;
                }
            }

            this.applyMode();
            this.showPage(this.currentPage);
        },

        initLiveAnnouncer: function () {
            let live = document.getElementById('flipbook-live-announcer');
            if (!live) {
                live = document.createElement('div');
                live.id = 'flipbook-live-announcer';
                live.setAttribute('aria-live', 'polite');
                live.setAttribute('aria-atomic', 'true');
                live.className = 'sr-only';
                live.style.position = 'absolute';
                live.style.width = '1px';
                live.style.height = '1px';
                live.style.overflow = 'hidden';
                live.style.clip = 'rect(0,0,0,0)';
                document.body.appendChild(live);
            }
            this.liveAnnouncerEl = live;
        },

        chunkContentIntoPages: function () {
            let existingPages = Array.from(this.container.querySelectorAll('.flipbook-page'));
            let children = [];

            if (existingPages.length > 0) {
                existingPages.forEach(p => {
                    children.push(...Array.from(p.children));
                });
            } else {
                children = Array.from(this.container.children);
            }

            if (children.length === 0) return;

            const pagesData = [[]];
            let currentPageIndex = 0;
            let currentItemCount = 0;

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const tag = child.tagName.toLowerCase();

                // Prevent orphan headings: if element is heading and next element exists, keep together
                const isHeading = ['h2', 'h3', 'h4'].includes(tag);
                const isHr = tag === 'hr';
                const isSpreadBlock = child.classList.contains('instead-try-spread') || child.classList.contains('phrase-upgrade-grid');

                // Page break condition
                if ((isHr || isHeading || isSpreadBlock || currentItemCount >= 5) && pagesData[currentPageIndex].length > 0) {
                    currentPageIndex++;
                    pagesData[currentPageIndex] = [];
                    currentItemCount = 0;
                }

                if (!isHr) {
                    pagesData[currentPageIndex].push(child);
                    currentItemCount++;
                }
            }

            if (pagesData.length <= 1) return;

            // Reconstruct container HTML into flipbook pages
            this.container.innerHTML = '';
            pagesData.forEach((group, idx) => {
                const pageSection = document.createElement('section');
                pageSection.className = 'flipbook-page';
                pageSection.setAttribute('data-page', idx + 1);
                pageSection.setAttribute('aria-label', `Page ${idx + 1} of ${pagesData.length}`);
                pageSection.setAttribute('tabindex', '-1');
                group.forEach(el => pageSection.appendChild(el));
                this.container.appendChild(pageSection);
            });
        },

        buildSpreads: function () {
            const isMobile = window.innerWidth <= 860;
            this.container.classList.add('flipbook-3d-stage');
            if (isMobile) {
                this.container.classList.add('mobile-single-view');
                this.container.classList.remove('desktop-spread-view');
            } else {
                this.container.classList.remove('mobile-single-view');
                this.container.classList.add('desktop-spread-view');
            }
        },

        renderControls: function () {
            const wrapper = document.createElement('div');
            wrapper.className = 'flipbook-toolbar';
            wrapper.setAttribute('aria-label', 'Magazine Flipbook Controls');

            wrapper.innerHTML = `
                <div class="flipbook-controls-bar">
                    <div class="flipbook-nav-group">
                        <button type="button" class="flipbook-btn flipbook-prev-btn" aria-label="Previous Page">
                            ← Prev
                        </button>
                        <div class="flipbook-page-selector">
                            <span class="flipbook-indicator">Page 1 of ${this.totalPages}</span>
                            <select class="flipbook-select" aria-label="Jump to page">
                                ${this.pages.map((p, i) => {
                                    const heading = p.querySelector('h2, h3, h4')?.textContent || `Page ${i + 1}`;
                                    const shortTitle = heading.length > 30 ? heading.substring(0, 30) + '…' : heading;
                                    return `<option value="${i + 1}">Page ${i + 1}: ${shortTitle}</option>`;
                                }).join('')}
                            </select>
                        </div>
                        <button type="button" class="flipbook-btn flipbook-next-btn" aria-label="Next Page">
                            Next →
                        </button>
                    </div>

                    <div class="flipbook-mode-group">
                        <button type="button" class="flipbook-mode-toggle" aria-label="Toggle Read as One Page or Flipbook View">
                            📖 Magazine Flipbook Mode
                        </button>
                    </div>
                </div>
            `;

            this.container.parentNode.insertBefore(wrapper, this.container);

            this.controlsEl = wrapper;
            this.prevBtn = wrapper.querySelector('.flipbook-prev-btn');
            this.nextBtn = wrapper.querySelector('.flipbook-next-btn');
            this.indicatorEl = wrapper.querySelector('.flipbook-indicator');
            this.selectEl = wrapper.querySelector('.flipbook-select');
            this.modeToggleBtn = wrapper.querySelector('.flipbook-mode-toggle');
        },

        initFounderCards: function () {
            const cards = document.querySelectorAll('.founder-presentation-card');
            cards.forEach(card => {
                const header = card.querySelector('.founder-card-header');
                const expandBtn = card.querySelector('.founder-expand-btn');
                const podcastBtn = card.querySelector('.podcast-mode-btn');

                const toggleExpand = () => {
                    const isExpanded = card.classList.toggle('expanded');
                    if (expandBtn) {
                        expandBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
                        expandBtn.innerHTML = isExpanded
                            ? '<span>🎙️ Collapse Founder Deck</span>'
                            : '<span>🎙️ Expand Founder Deck</span>';
                    }
                };

                if (header) {
                    header.addEventListener('click', (e) => {
                        if (e.target.closest('.podcast-mode-btn')) return;
                        toggleExpand();
                    });
                }

                if (podcastBtn) {
                    podcastBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.togglePodcastMode();
                    });
                }
            });
        },

        togglePodcastMode: function () {
            const isPodcast = document.body.classList.toggle('podcast-presentation-mode');
            const podcastBtn = document.querySelector('.podcast-mode-btn');
            if (podcastBtn) {
                podcastBtn.innerHTML = isPodcast
                    ? '<span>📺 Exit Podcast View</span>'
                    : '<span>🎙️ Podcast View Mode</span>';
            }
        },

        initZoomControls: function () {
            let overlay = document.querySelector('.zoom-focus-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'zoom-focus-overlay';
                document.body.appendChild(overlay);
            }

            let currentZoomedSection = null;

            const closeZoom = () => {
                if (currentZoomedSection) {
                    currentZoomedSection.classList.remove('zoomed-in', 'focal-zoomed');
                    currentZoomedSection.style.transform = '';
                    const parentContainer = currentZoomedSection.closest('.post-full-content') || document.querySelector('.post-full-content');
                    if (parentContainer) parentContainer.classList.remove('section-is-zoomed');
                    const toolbar = currentZoomedSection.querySelector('.zoom-controls-toolbar');
                    if (toolbar) toolbar.remove();
                    currentZoomedSection = null;
                }
                overlay.classList.remove('active');
            };

            const zoomSection = (sec) => {
                if (currentZoomedSection === sec) return;
                if (currentZoomedSection) closeZoom();

                currentZoomedSection = sec;
                sec.classList.add('focal-zoomed');
                const parentContainer = sec.closest('.post-full-content') || document.querySelector('.post-full-content');
                if (parentContainer) parentContainer.classList.add('section-is-zoomed');
            };

            overlay.addEventListener('click', closeZoom);
        },

        bindEvents: function () {
            if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevPage());
            if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextPage());
            if (this.selectEl) {
                this.selectEl.addEventListener('change', (e) => {
                    const p = parseInt(e.target.value, 10);
                    if (!isNaN(p)) this.showPage(p);
                });
            }
            if (this.modeToggleBtn) this.modeToggleBtn.addEventListener('click', () => this.toggleMode());

            // Edge clicks on page boundaries
            this.container.addEventListener('click', (e) => {
                if (this.mode !== 'flipbook') return;
                if (e.target.closest('a, button, audio, select, input, details')) return;

                const rect = this.container.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                if (clickX < rect.width * 0.2) {
                    this.prevPage();
                } else if (clickX > rect.width * 0.8) {
                    this.nextPage();
                }
            });

            // Hashchange navigation support for browser back/forward buttons & deep links
            window.addEventListener('hashchange', () => {
                const match = window.location.hash.match(/^#page-(\d+)$/);
                if (match) {
                    const p = parseInt(match[1], 10);
                    if (p >= 1 && p <= this.totalPages && p !== this.currentPage) {
                        this.showPage(p, false);
                    }
                }
            });

            // Keyboard navigation & PgUp/PgDn
            document.addEventListener('keydown', (e) => {
                if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
                if (this.mode !== 'flipbook') return;

                if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                    this.prevPage();
                } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                    this.nextPage();
                }
            });

            // Touch Swipe Gesture
            let startX = 0;
            let startY = 0;

            this.container.addEventListener('touchstart', (e) => {
                if (this.mode !== 'flipbook') return;
                if (e.touches.length === 1) {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }
            }, { passive: true });

            this.container.addEventListener('touchend', (e) => {
                if (this.mode !== 'flipbook' || !startX) return;
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const diffX = startX - endX;
                const diffY = startY - endY;

                if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 0) this.nextPage();
                    else this.prevPage();
                }
                startX = 0;
                startY = 0;
            }, { passive: true });

            window.addEventListener('resize', () => this.buildSpreads());
        },

        showPage: function (pageIndex, updateHistory = true) {
            if (pageIndex < 1) pageIndex = 1;
            if (pageIndex > this.totalPages) pageIndex = this.totalPages;

            const isMobile = window.innerWidth <= 860;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const updateDOM = () => {
                this.currentPage = pageIndex;

                if (this.mode === 'flipbook') {
                    if (!isMobile) {
                        // Desktop Spread View: display two-page spread (pageIndex and pageIndex + 1 if even/odd alignment)
                        // If pageIndex is odd, left page = pageIndex, right page = pageIndex + 1
                        const leftPageNum = pageIndex % 2 === 0 ? pageIndex - 1 : pageIndex;
                        const rightPageNum = leftPageNum + 1;

                        this.pages.forEach((p, idx) => {
                            const pNum = idx + 1;
                            if (pNum === leftPageNum || pNum === rightPageNum) {
                                p.classList.add('active');
                                p.style.display = 'block';
                                p.style.opacity = '1';
                                p.classList.toggle('spread-left', pNum === leftPageNum);
                                p.classList.toggle('spread-right', pNum === rightPageNum);
                            } else {
                                p.classList.remove('active', 'spread-left', 'spread-right');
                                p.style.display = 'none';
                            }
                        });
                    } else {
                        // Mobile View: Single Page Slide
                        this.pages.forEach((p, idx) => {
                            if (idx + 1 === pageIndex) {
                                p.classList.add('active');
                                p.style.display = 'block';
                                p.style.opacity = '1';
                                p.focus();
                            } else {
                                p.classList.remove('active', 'spread-left', 'spread-right');
                                p.style.display = 'none';
                            }
                        });
                    }
                }

                // Update UI
                if (this.indicatorEl) this.indicatorEl.textContent = `Page ${pageIndex} of ${this.totalPages}`;
                if (this.selectEl) this.selectEl.value = pageIndex;
                if (this.prevBtn) this.prevBtn.disabled = pageIndex === 1;
                if (this.nextBtn) this.nextBtn.disabled = pageIndex === this.totalPages;

                if (this.liveAnnouncerEl) {
                    this.liveAnnouncerEl.textContent = `Page ${pageIndex} of ${this.totalPages}`;
                }
            };

            if (document.startViewTransition && !prefersReducedMotion) {
                document.startViewTransition(() => updateDOM());
            } else {
                updateDOM();
            }

            if (updateHistory) {
                if (window.location.hash !== `#page-${pageIndex}`) {
                    history.pushState(null, '', `#page-${pageIndex}`);
                }
            }
        },

        nextPage: function () {
            if (this.currentPage < this.totalPages) this.showPage(this.currentPage + 1);
        },

        prevPage: function () {
            if (this.currentPage > 1) this.showPage(this.currentPage - 1);
        },

        toggleMode: function () {
            this.mode = this.mode === 'flipbook' ? 'scroll' : 'flipbook';
            localStorage.setItem('cosy_blog_view_mode', this.mode);
            this.applyMode();
            this.showPage(this.currentPage);
        },

        applyMode: function () {
            if (this.mode === 'scroll') {
                this.container.classList.remove('flipbook-mode');
                this.container.classList.add('scroll-mode');
                this.pages.forEach(p => {
                    p.style.display = 'block';
                    p.classList.add('active');
                });
                if (this.modeToggleBtn) {
                    this.modeToggleBtn.textContent = '📜 Read as One Page';
                    this.modeToggleBtn.classList.add('active-scroll');
                }
                if (this.prevBtn) this.prevBtn.style.display = 'none';
                if (this.nextBtn) this.nextBtn.style.display = 'none';
                if (this.indicatorEl) this.indicatorEl.style.display = 'none';
            } else {
                this.container.classList.remove('scroll-mode');
                this.container.classList.add('flipbook-mode');
                if (this.modeToggleBtn) {
                    this.modeToggleBtn.textContent = '📖 Magazine Flipbook Mode';
                    this.modeToggleBtn.classList.remove('active-scroll');
                }
                if (this.prevBtn) this.prevBtn.style.display = 'inline-flex';
                if (this.nextBtn) this.nextBtn.style.display = 'inline-flex';
                if (this.indicatorEl) this.indicatorEl.style.display = 'inline';
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => COSYFlipbook.init());
    } else {
        COSYFlipbook.init();
    }

    window.COSYFlipbook = COSYFlipbook;
})();
