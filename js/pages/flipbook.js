/**
 * COSYlanguages — Flipbook Magazine Reader for Blog Posts
 * Transforms long blog articles into structured, page-by-page magazine flipbook spreads.
 */

(function () {
    'use strict';

    const COSYFlipbook = {
        currentPage: 1,
        totalPages: 1,
        mode: 'flipbook', // 'flipbook' or 'scroll'
        pages: [],
        container: null,
        controlsEl: null,
        indicatorEl: null,
        prevBtn: null,
        nextBtn: null,
        selectEl: null,
        modeToggleBtn: null,

        init: function () {
            this.container = document.querySelector('.post-full-content');
            if (!this.container) return;

            // Find or setup pages
            let pageEls = Array.from(this.container.querySelectorAll('.flipbook-page'));

            // Fallback: If build-blog hasn't static-chunked pages, dynamically chunk by top-level section dividers or H3s
            if (pageEls.length === 0) {
                this.chunkContentIntoPages();
                pageEls = Array.from(this.container.querySelectorAll('.flipbook-page'));
            }

            if (pageEls.length <= 1) {
                // Short post or single page - no flipbook UI needed
                return;
            }

            this.pages = pageEls;
            this.totalPages = this.pages.length;

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

        chunkContentIntoPages: function () {
            const rawChildren = Array.from(this.container.children);
            if (rawChildren.length === 0) return;

            const pagesData = [[]];
            let currentPageIndex = 0;

            rawChildren.forEach((child) => {
                const tag = child.tagName.toLowerCase();
                // Break page before HR or major H2/H3 headings (except the very first element)
                if ((tag === 'hr' || tag === 'h2' || tag === 'h3') && pagesData[currentPageIndex].length > 0) {
                    currentPageIndex++;
                    pagesData[currentPageIndex] = [];
                }
                if (tag !== 'hr') {
                    pagesData[currentPageIndex].push(child);
                }
            });

            if (pagesData.length <= 1) return;

            // Reconstruct container HTML into flipbook pages
            this.container.innerHTML = '';
            pagesData.forEach((group, idx) => {
                const pageSection = document.createElement('section');
                pageSection.className = 'flipbook-page';
                pageSection.setAttribute('data-page', idx + 1);
                pageSection.setAttribute('aria-label', `Page ${idx + 1} of ${pagesData.length}`);
                group.forEach(el => pageSection.appendChild(el));
                this.container.appendChild(pageSection);
            });
        },

        renderControls: function () {
            const wrapper = document.createElement('div');
            wrapper.className = 'flipbook-toolbar';
            wrapper.setAttribute('aria-label', 'Magazine Flipbook Controls');

            wrapper.innerHTML = `
                <div class="flipbook-controls-bar">
                    <div class="flipbook-nav-group">
                        <button type="button" class="flipbook-btn flipbook-prev-btn" aria-label="Previous Page">
                            ← Prev Page
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
                            Next Page →
                        </button>
                    </div>

                    <div class="flipbook-mode-group">
                        <button type="button" class="flipbook-mode-toggle" aria-label="Toggle Flipbook or Scroll View">
                            📖 Magazine Flipbook Mode
                        </button>
                    </div>
                </div>
            `;

            // Insert toolbar above article content
            this.container.parentNode.insertBefore(wrapper, this.container);

            this.controlsEl = wrapper;
            this.prevBtn = wrapper.querySelector('.flipbook-prev-btn');
            this.nextBtn = wrapper.querySelector('.flipbook-next-btn');
            this.indicatorEl = wrapper.querySelector('.flipbook-indicator');
            this.selectEl = wrapper.querySelector('.flipbook-select');
            this.modeToggleBtn = wrapper.querySelector('.flipbook-mode-toggle');
        },

        initFounderCards: function () {
            // Find or setup Founder's Role Expandable Presentation Cards
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
                        // Don't double trigger if user clicked directly on podcast mode button
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
            let currentScale = 1.1;

            const closeZoom = () => {
                if (currentZoomedSection) {
                    currentZoomedSection.classList.remove('zoomed-in');
                    currentZoomedSection.style.transform = '';
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
                currentScale = 1.1;
                sec.classList.add('zoomed-in');
                overlay.classList.add('active');

                if (!sec.querySelector('.zoom-controls-toolbar')) {
                    const toolbar = document.createElement('div');
                    toolbar.className = 'zoom-controls-toolbar';
                    toolbar.innerHTML = `
                        <button type="button" class="zoom-ctrl-btn zoom-in-btn">🔍+ Zoom In</button>
                        <button type="button" class="zoom-ctrl-btn zoom-out-btn">🔍- Zoom Out</button>
                        <button type="button" class="zoom-ctrl-btn close-btn">✖ Exit Focus (Esc)</button>
                    `;
                    sec.insertBefore(toolbar, sec.firstChild);

                    toolbar.querySelector('.zoom-in-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        currentScale = Math.min(1.5, currentScale + 0.1);
                        sec.style.transform = `translate(-50%, -50%) scale(${currentScale.toFixed(2)})`;
                    });

                    toolbar.querySelector('.zoom-out-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        currentScale = Math.max(0.8, currentScale - 0.1);
                        sec.style.transform = `translate(-50%, -50%) scale(${currentScale.toFixed(2)})`;
                    });

                    toolbar.querySelector('.close-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        closeZoom();
                    });
                }
            };

            overlay.addEventListener('click', closeZoom);

            document.addEventListener('click', (e) => {
                const zoomBtn = e.target.closest('.section-zoom-btn');
                if (zoomBtn) {
                    e.stopPropagation();
                    const sec = zoomBtn.closest('.zoomable-section');
                    if (sec) zoomSection(sec);
                    return;
                }

                if (document.body.classList.contains('podcast-presentation-mode')) {
                    const sec = e.target.closest('.zoomable-section');
                    if (sec && !e.target.closest('.zoom-controls-toolbar') && !e.target.closest('audio') && !e.target.closest('a')) {
                        zoomSection(sec);
                    }
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && currentZoomedSection) {
                    closeZoom();
                    return;
                }
                if (currentZoomedSection) {
                    if (e.key === '+' || e.key === '=') {
                        currentScale = Math.min(1.5, currentScale + 0.1);
                        currentZoomedSection.style.transform = `translate(-50%, -50%) scale(${currentScale.toFixed(2)})`;
                    } else if (e.key === '-') {
                        currentScale = Math.max(0.8, currentScale - 0.1);
                        currentZoomedSection.style.transform = `translate(-50%, -50%) scale(${currentScale.toFixed(2)})`;
                    }
                }
            });
        },

        bindEvents: function () {
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prevPage());
            }
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.nextPage());
            }
            if (this.selectEl) {
                this.selectEl.addEventListener('change', (e) => {
                    const pageNum = parseInt(e.target.value, 10);
                    if (!isNaN(pageNum)) {
                        this.showPage(pageNum);
                    }
                });
            }
            if (this.modeToggleBtn) {
                this.modeToggleBtn.addEventListener('click', () => this.toggleMode());
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && document.body.classList.contains('podcast-presentation-mode')) {
                    this.togglePodcastMode();
                    return;
                }

                if (this.mode !== 'flipbook') return;
                // Ignore if user is inside form inputs or textareas
                if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

                if (e.key === 'ArrowLeft') {
                    this.prevPage();
                } else if (e.key === 'ArrowRight') {
                    this.nextPage();
                }
            });

            // Touch Swipe navigation on container
            let touchStartX = 0;
            let touchStartY = 0;

            this.container.addEventListener('touchstart', (e) => {
                if (this.mode !== 'flipbook') return;
                if (e.touches.length === 1) {
                    touchStartX = e.touches[0].clientX;
                    touchStartY = e.touches[0].clientY;
                }
            }, { passive: true });

            this.container.addEventListener('touchend', (e) => {
                if (this.mode !== 'flipbook') return;
                if (!touchStartX) return;

                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const diffX = touchStartX - touchEndX;
                const diffY = touchStartY - touchEndY;

                // Ensure horizontal swipe is dominant and above threshold (50px)
                if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 0) {
                        this.nextPage();
                    } else {
                        this.prevPage();
                    }
                }
                touchStartX = 0;
                touchStartY = 0;
            }, { passive: true });

            // Handle browser back/forward buttons for page hashes
            window.addEventListener('hashchange', () => {
                const match = window.location.hash.match(/^#page-(\d+)$/);
                if (match) {
                    const pNum = parseInt(match[1], 10);
                    if (pNum >= 1 && pNum <= this.totalPages && pNum !== this.currentPage) {
                        this.showPage(pNum);
                    }
                }
            });
        },

        showPage: function (pageIndex) {
            if (pageIndex < 1) pageIndex = 1;
            if (pageIndex > this.totalPages) pageIndex = this.totalPages;

            this.currentPage = pageIndex;

            if (this.mode === 'flipbook') {
                this.pages.forEach((p, i) => {
                    const audioEl = p.querySelector('audio');
                    if (i + 1 === pageIndex) {
                        p.classList.add('active');
                        p.style.display = 'block';
                    } else {
                        p.classList.remove('active');
                        p.style.display = 'none';
                        // Pause audio when switching pages
                        if (audioEl && !audioEl.paused) {
                            audioEl.pause();
                        }
                    }
                });
            }

            // Update UI elements
            if (this.indicatorEl) {
                this.indicatorEl.textContent = `Page ${pageIndex} of ${this.totalPages}`;
            }
            if (this.selectEl) {
                this.selectEl.value = pageIndex;
            }
            if (this.prevBtn) {
                this.prevBtn.disabled = pageIndex === 1;
            }
            if (this.nextBtn) {
                this.nextBtn.disabled = pageIndex === this.totalPages;
            }

            // Sync URL hash without triggering page jump reset if in flipbook mode
            if (history.replaceState) {
                history.replaceState(null, '', `#page-${pageIndex}`);
            } else {
                window.location.hash = `#page-${pageIndex}`;
            }

            // Scroll container smoothly into view if user has scrolled far down
            if (this.mode === 'flipbook' && this.container) {
                const rect = this.container.getBoundingClientRect();
                if (rect.top < 0 || rect.top > window.innerHeight) {
                    this.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        },

        nextPage: function () {
            if (this.currentPage < this.totalPages) {
                this.showPage(this.currentPage + 1);
            }
        },

        prevPage: function () {
            if (this.currentPage > 1) {
                this.showPage(this.currentPage - 1);
            }
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
                    this.modeToggleBtn.textContent = '📜 Full Article Scroll Mode';
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
