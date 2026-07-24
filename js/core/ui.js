/**
 * js/core/ui.js
 * Shared UI helpers including toasts, modals, FAQ toggles, and scroll effects.
 * Consolidated with mobile handlers and theme configuration.
 */
(function() {
    'use strict';

    /* ─── THEME CONFIGURATION ────────────────────────────────────── */
    window.COMMON_THEMES = [
        { id: "numbers_math", label: "common_theme_numbers_math" },
        { id: "time", label: "common_theme_time" },
        { id: "personal_identity", label: "common_theme_personal_identity" },
        { id: "family_relationships", label: "common_theme_family_relationships" },
        { id: "home_living", label: "common_theme_home_living" },
        { id: "food_drink", label: "common_theme_food_drink" },
        { id: "health_body", label: "common_theme_health_body" },
        { id: "work_employment", label: "common_theme_work_employment" },
        { id: "education_learning", label: "common_theme_education_learning" },
        { id: "transport_travel", label: "common_theme_transport_travel" },
        { id: "shopping_money", label: "common_theme_shopping_money" },
        { id: "technology_media", label: "common_theme_technology_media" },
        { id: "environment_nature", label: "common_theme_environment_nature" },
        { id: "society_politics", label: "common_theme_society_politics" },
        { id: "culture_arts", label: "common_theme_culture_arts" },
        { id: "science_tech", label: "common_theme_science_tech" },
        { id: "language_communication", label: "common_theme_language_communication" },
        { id: "sport_leisure", label: "common_theme_sport_leisure" },
        { id: "feelings_emotions", label: "common_theme_feelings_emotions" },
        { id: "places_geography", label: "common_theme_places_geography" },
        { id: "describing_things", label: "common_theme_describing_things" },
        { id: "clothes_appearance", label: "common_theme_clothes_appearance" },
        { id: "prepositions_grammar", label: "common_theme_prepositions_grammar" },
        { id: "modifiers_intensifiers", label: "common_theme_modifiers_intensifiers" },
        { id: "ethics_philosophy", label: "common_theme_ethics_philosophy" },
        { id: "opinion_debate", label: "common_theme_opinion_debate" }
    ];

    window.COSY_THEME_TREE = {
      animals:         ['pets','farm','wild','insects','birds','sea'],
      body:            ['face','limbs','organs','senses','health','appearance'],
      clothes:         ['everyday','formal','accessories','weather_gear'],
      colours:         ['basic','shades','materials'],
      describing:      ['size_shape','texture','quality','quantity','comparing'],
      emotions:        ['positive','negative','complex','expressing'],
      environment:     ['ecology','climate','recycling','natural_disasters'],
      food_drink:      ['fruit','vegetables','drinks','cooking','meals','snacks','diet'],
      furniture:       ['rooms','furniture_items','appliances','household_items'],
      health_medicine: ['symptoms','treatment','hospital','wellbeing','sport_injury'],
      jobs:            ['professions','workplace','career','business_lang'],
      language:        ['grammar_terms','phonetics','discourse','learning'],
      music:           ['instruments','genres','performance','listening'],
      nature:          ['landscape','weather','plants','seasons','sky'],
      numbers:         ['cardinal','ordinal','fractions','money'],
      people:          ['family','relationships','nationality','physical_desc','character'],
      places:          ['city','buildings','rooms','geography','landmarks','countryside'],
      school:          ['stationery','subjects','classroom','studying'],
      shopping:        ['stores','items','transactions','online'],
      social:          ['celebrations','going_out','invitations','communication'],
      sports:          ['team_sports','individual','gym','outdoor','water_sports'],
      technology:      ['devices','internet','software','social_media'],
      time:            ['clock','days','months','seasons','periods','frequency'],
      travel:          ['transport','accommodation','tourism','directions','documents'],
      work:            ['office','meetings','career','documents','remote_work'],
      art_culture:     ['art','literature','film','theatre','traditions'],
      psychology:      ['biases','cognitive_processes','behavior','psychoanalysis','concepts']
    };

    window.COSY_GAMES = {
      'Action Hero':      { id: 'action_hero',    prefix: 'charades',      icon: '🎭' },
      'Emoji Odyssey':    { id: 'emoji_odyssey',  prefix: 'emoji',         icon: '📖' },
      'Lucky Numbers':    { id: 'bingo',          prefix: 'bingo',         icon: '🔢' },
      'Last Letter':      { id: 'last_letter',    prefix: 'last-letter',   icon: '🔤' },
      'Object Quest':     { id: 'guess-what',     prefix: 'guess-what',    icon: '📦' },
      'Identity Mystery': { id: 'guess-who',      prefix: 'guess-who',     icon: '👤' },
      'Cosy Crossword':   { id: 'crossword',      prefix: 'crossword',     icon: '🧩' },
      'Fluency Flow':     { id: 'talk-talk',      prefix: 'talk-talk',     icon: '🗣️' },
      'Battle of Wits':   { id: 'debates',        prefix: 'debates',       icon: '⚖️' },
      'Opinion Arena':    { id: 'opinion_arena',  prefix: 'opinion-arena', icon: '🏟️' },
      'Word Linker':      { id: 'word_linker',    prefix: 'linker',        icon: '🔗' },
      "Critic's Corner":  { id: 'critics_corner', prefix: 'critics-corner',icon: '🎭' },
      'Story Chain':      { id: 'story-chain',    prefix: 'story-chain',   icon: '🃏' },
      'Hot Seat':         { id: 'hot-seat',       prefix: 'hot-seat',      icon: '🎯' }
    };

    /* ─── GLOBAL HELPERS ────────────────────────────────────────── */
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    /* ─── SCROLL & VISUAL EFFECTS ───────────────────────────────── */
    const setupHeaderShrink = () => {
        const nav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
        if (!nav) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) nav.classList.add('shrunk');
            else nav.classList.remove('shrunk');
        });
    };

    const setupBackToTop = () => {
        if (document.getElementById('back-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'back-to-top'; btn.innerHTML = '↑'; btn.setAttribute('title', 'Back to Top');
        document.body.appendChild(btn);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) btn.classList.add('visible');
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

    /* ─── MOBILE & PWA UTILITIES ────────────────────────────────── */
    window.updateMobileNav = function() {
      const mobileNav = document.querySelector('.mobile-nav');
      if (!mobileNav) return;

      const p = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '';

      mobileNav.innerHTML = `
        <a href="${p}practice/index.html" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span>Practice</span></a>
        <a href="${p}games/index.html" class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span>Games</span></a>
        <a href="${p}index.html#languages" class="mobile-nav-item" id="mnav-languages"><span class="mn-icon">🌍</span><span>Languages</span></a>
        <a href="${p}index.html" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span>Home</span></a>`;

      const path = window.location.pathname;
      const hash = window.location.hash || '';
      const currentFilename = path.split('/').pop() || 'index.html';
      const items = document.querySelectorAll('.mobile-nav-item');

      items.forEach(item => {
        const href = item.getAttribute('href') || '';
        const linkFilename = href.split('#')[0].split('/').pop() || 'index.html';
        let active = (currentFilename === linkFilename);

        // Special case for home
        if (currentFilename === 'index.html' || currentFilename === '/') {
            if (hash.includes('languages')) active = (item.id === 'mnav-languages');
            else if (!hash) active = (item.id === 'mnav-home');
        }

        item.classList.toggle('active', active);
      });
    };

    window.flashAnswer = function(correct) {
      const flash = document.getElementById('answer-flash');
      if (!flash) return;
      flash.className = 'answer-flash ' + (correct ? 'correct-flash' : 'incorrect-flash') + ' show';
      flash.textContent = correct ? '✅' : '❌';
      if (navigator.vibrate) navigator.vibrate(correct ? [50] : [80, 40, 80]);
      setTimeout(() => flash.classList.remove('show'), 400);
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

    /* ─── EVENTS & SPEAKING CLUBS ───────────────────────────────── */
    if (window.COSY) {
        window.COSY.toggleBlock = function(id) {
          const el = document.getElementById(id);
          if (!el) return;
          el.classList.toggle('open');
          const body = el.querySelector('.vocab-body, .history-body, .history-session-body, .mistake-body');
          const toggle = el.querySelector('.round-toggle');
          if (!body) return;
          const isVisible = el.classList.contains('open');
          body.style.display = isVisible ? 'block' : 'none';
          if (toggle) toggle.textContent = isVisible ? '▲' : '▼';
        };

        window.COSY.toggleRound = function(id) {
          const el = document.getElementById(id);
          if (!el) return;
          el.classList.toggle('open');
          const body = el.querySelector('.round-body');
          const toggle = el.querySelector('.round-toggle');
          if (!body) return;
          const isVisible = el.classList.contains('open');
          body.style.display = isVisible ? 'block' : 'none';
          if (toggle) toggle.textContent = isVisible ? '▲' : '▼';
        };

        window.COSY.toggleDict = function() {
          const panel = document.getElementById('dict-panel');
          if (panel) panel.classList.toggle('open');
        };

        window.COSY.checkGap = function(inputEl) {
            const typed = inputEl.value.trim();
            const ans = inputEl.getAttribute('data-answer') || '';

            if (typed === '') {
                inputEl.style.background = 'transparent';
                inputEl.style.borderColor = 'var(--border)';
                return;
            }

            const normalize = (str) => {
                return str.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()
                          .replace(/œ/g, "oe")
                          .replace(/æ/g, "ae")
                          .replace(/[^a-z0-9а-яёα-ωίϊΐόάέύϋΰήώ]/gi, "")
                          .trim();
            };

            if (normalize(typed) === normalize(ans)) {
                inputEl.style.background = '#E1F5EE';
                inputEl.style.borderColor = '#1A7A4A';
                inputEl.style.color = '#1A7A4A';
            } else {
                inputEl.style.background = '#FAEEE8';
                inputEl.style.borderColor = '#C0392B';
                inputEl.style.color = '#C0392B';
            }
        };
    }

    /* ─── VIM CUSTOM ELEMENTS ──────────────────────────────────── */
    class VimChoice extends HTMLElement {
      connectedCallback() {
        this.render();
      }
      render() {
        const options = Array.from(this.querySelectorAll('vim-choice-option'));
        const titles = options.map(opt => opt.querySelector('vim-choice-option-title')?.textContent || 'Option');
        const contents = options.map(opt => opt.querySelector('vim-choice-option-content')?.innerHTML || '');

        this.innerHTML = `
          <div class="vim-choice-tabs" style="display:flex;gap:5px;margin-bottom:10px;overflow-x:auto;padding-bottom:5px;">
            ${titles.map((t, i) => `<button class="vim-tab-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" style="padding:6px 12px;border-radius:20px;border:1px solid var(--border);background:var(--surface-color);color:var(--ink);cursor:pointer;font-size:.75rem;white-space:nowrap;">${t}</button>`).join('')}
          </div>
          <div class="vim-choice-content" style="border:1px solid var(--border);border-radius:10px;padding:15px;background:var(--surface-color);color:var(--ink);">
            ${contents.map((c, i) => `<div class="vim-tab-pane" style="display:${i === 0 ? 'block' : 'none'};">${c}</div>`).join('')}
          </div>
        `;

        this.querySelectorAll('.vim-tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = btn.dataset.idx;
            this.querySelectorAll('.vim-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.querySelectorAll('.vim-tab-pane').forEach((p, i) => p.style.display = i == idx ? 'block' : 'none');
          });
        });
      }
    }

    class VimInstruction extends HTMLElement {
      connectedCallback() {
        const text = this.textContent;
        this.innerHTML = `<div style="background:var(--cream);padding:10px 15px;border-left:4px solid var(--indigo);margin-bottom:15px;font-weight:600;font-size:.85rem;border-radius:0 8px 8px 0;">${text}</div>`;
      }
    }

    class VimBlockquote extends HTMLElement {
      connectedCallback() {
        const importance = this.getAttribute('importance') || 'basic';
        const content = this.innerHTML;
        this.innerHTML = `<blockquote class="vim-bq-${importance}" style="margin:0;padding:15px;border-radius:8px;background:var(--cream-dark);border-left:4px solid var(--border);font-size:.9rem;color:var(--ink);">${content}</blockquote>`;
      }
    }

    class VimImage extends HTMLElement {
      connectedCallback() {
        const resId = this.getAttribute('resource-id');
        this.innerHTML = `<img src="https://api.cosylanguages.com/assets/${resId}" style="width:100%;border-radius:10px;margin-bottom:10px;" onerror="this.src='../images/ui/placeholder.png'">`;
      }
    }

    customElements.define('vim-choice', VimChoice);
    customElements.define('vim-instruction', VimInstruction);
    customElements.define('vim-blockquote', VimBlockquote);
    customElements.define('vim-image', VimImage);

    /* ─── VOCABULARY PRONUNCIATION ──────────────────────────────── */
    const setupVocabPronunciation = () => {
        const vocabWords = document.querySelectorAll('.vocab-word');
        if (vocabWords.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const langMap = {
            'en': 'en-GB', 'fr': 'fr-FR', 'it': 'it-IT', 'ru': 'ru-RU', 'el': 'el-GR',
            'es': 'es-ES', 'de': 'de-DE', 'pt': 'pt-PT', 'hy': 'hy-AM', 'ka': 'ka-GE',
            'tt': 'ru-RU', 'ba': 'ru-RU', 'br': 'fr-FR'
        };
        const targetLang = langMap[docLang.toLowerCase()] || docLang || 'en-GB';

        vocabWords.forEach(wordEl => {
            if (wordEl.querySelector('.btn-pronounce')) return;

            const originalText = wordEl.textContent.trim();
            if (!originalText) return;

            const btn = document.createElement('button');
            btn.className = 'btn-pronounce';
            btn.innerHTML = '🔊';
            btn.title = 'Listen Pronunciation';
            btn.setAttribute('aria-label', `Listen pronunciation of ${originalText}`);

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                speakVocab(originalText, targetLang);
            });

            wordEl.appendChild(btn);
        });
    };

    const speakVocab = (text, langCode) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        // Clean up formatting indicators or brackets for clearer pronunciation
        let cleanText = text.replace(/\((он|она|оно|они|м|ж|ср|м\/ж|f|m)\)/gi, '').trim();
        cleanText = cleanText.replace(/\s*≠\s*/g, ', ').trim();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = langCode;

        if (window.speechSynthesis.getVoices) {
            const voices = window.speechSynthesis.getVoices();
            let voice = voices.find(v => v.lang === langCode);
            if (!voice) voice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
            if (voice) utterance.voice = voice;
        }

        window.speechSynthesis.speak(utterance);
    };

    /* ─── VIDEO PLAYER & DISCLAIMER INJECTION ────────────────────── */
    const setupEmbeddedVideoPlayers = () => {
        // Prevent duplicate setups
        if (document.querySelector('.cosy-video-wrapper')) return;

        // Find all links to YouTube on the page
        const links = Array.from(document.querySelectorAll('a'));
        const youtubeLinks = links.filter(link => {
            const href = link.getAttribute('href') || '';
            return href.includes('youtube.com') || href.includes('youtu.be') || href.includes('youtube-nocookie.com');
        });

        if (youtubeLinks.length === 0) return;

        const getYouTubeId = (url) => {
            if (!url) return null;
            try {
                const regExp = /(?:https?:)?\/\/(?:[0-9A-Z-]+\.)?(?:youtube|youtu|youtube-nocookie)\.(?:com|be)\/(?:watch\?v=|embed\/|v\/|shorts\/|ytscreeningroom\?v=|v=|\/)?([0-9A-Za-z_-]{11})/i;
                const match = url.match(regExp);
                if (match && match[1]) {
                    return match[1];
                }
            } catch (e) {}
            return null;
        };

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Source: YouTube. This material is used strictly for educational purposes only.',
            'fr': 'Source : YouTube. Ce matériel est utilisé uniquement à des fins éducatives.',
            'ru': 'Источник: YouTube. Данный материал используется исключительно в образовательных целях.',
            'es': 'Fuente: YouTube. Este material se utiliza únicamente con fines educativos.',
            'it': 'Fonte: YouTube. Questo materiale viene utilizzato esclusivamente a scopo didattico.',
            'el': 'Πηγή: YouTube. Αυτό το υλικό χρησιμοποιείται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        // Find any .lyrics-container (Karaoke Club Pages)
        const lyricContainers = Array.from(document.querySelectorAll('.lyrics-container'));

        if (lyricContainers.length > 0) {
            lyricContainers.forEach(container => {
                // Find nearest YouTube link for this lyrics block (inside the same vim-choice-option if exists)
                const choiceParent = container.closest('.vim-tab-pane') || container.closest('vim-choice-option-content') || container.closest('vim-choice-option');
                let targetLink = null;
                if (choiceParent) {
                    const parentLinks = Array.from(choiceParent.querySelectorAll('a'));
                    targetLink = parentLinks.find(link => getYouTubeId(link.getAttribute('href')));
                }
                if (!targetLink) {
                    // Fallback to first available YouTube link on the page that has a valid ID
                    targetLink = youtubeLinks.find(link => getYouTubeId(link.getAttribute('href')));
                }

                const videoId = getYouTubeId(targetLink?.getAttribute('href'));
                if (videoId) {
                    const playerWrapper = document.createElement('div');
                    playerWrapper.className = 'cosy-video-wrapper';
                    playerWrapper.innerHTML = `
                        <div class="cosy-video-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                        </div>
                        <div class="cosy-video-disclaimer">
                            <span>ℹ️ ${disclaimerText}</span>
                        </div>
                    `;
                    container.parentNode.insertBefore(playerWrapper, container);
                }
            });
        } else {
            // For other pages (like Speaking Club pages with a single YouTube source), find the meta grid
            const metaGrid = document.querySelector('.session-meta-grid');
            if (metaGrid) {
                // Find the first YouTube link on the page that has a valid ID
                const targetLink = youtubeLinks.find(link => getYouTubeId(link.getAttribute('href')));
                const videoId = getYouTubeId(targetLink?.getAttribute('href'));
                if (videoId) {
                    const playerWrapper = document.createElement('div');
                    playerWrapper.className = 'cosy-video-wrapper';
                    playerWrapper.innerHTML = `
                        <div class="cosy-video-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                        </div>
                        <div class="cosy-video-disclaimer">
                            <span>ℹ️ ${disclaimerText}</span>
                        </div>
                    `;
                    metaGrid.parentNode.insertBefore(playerWrapper, metaGrid.nextSibling);
                }
            }
        }
    };

    /* ─── ARTICLE READER & DISCLAIMER INJECTION ──────────────────── */
    const setupEmbeddedArticles = () => {
        // Prevent duplicate setups
        if (document.querySelector('.cosy-article-wrapper')) return;

        // Find all links on the page
        const links = Array.from(document.querySelectorAll('a'));
        const articleLinks = links.filter(link => {
            const href = link.getAttribute('href') || '';
            const text = (link.textContent || '').toLowerCase();
            const isExternal = href.startsWith('http://') || href.startsWith('https://');
            const isVideo = href.includes('youtube.com') || href.includes('youtu.be') || href.includes('youtube-nocookie.com');
            const isMedia = href.match(/\.(png|jpg|jpeg|gif|pdf|mp3|mp4|webm)$/i);

            // Check if link matches keywords (article, text, read, reading)
            const matchesKeyword = text.includes('article') || text.includes('text') || text.includes('read') || text.includes('reading');

            return isExternal && !isVideo && !isMedia && matchesKeyword;
        });

        if (articleLinks.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Source: External Article. This material is used strictly for educational purposes only.',
            'fr': 'Source : Article externe. Ce matériel est utilisé uniquement à des fins éducatives.',
            'ru': 'Источник: Внешняя статья. Данный материал используется исключительно в образовательных целях.',
            'es': 'Fuente: Artículo externo. Este material se utiliza únicamente con fines educativos.',
            'it': 'Fonte: Articolo esterno. Questo materiale viene utilizzato esclusivamente a scopo didattico.',
            'el': 'Πηγή: Εξωτερικό άρθρο. Αυτό το υλικό χρησιμοποιείται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        articleLinks.forEach(link => {
            const articleUrl = link.getAttribute('href');
            if (!articleUrl) return;

            const playerWrapper = document.createElement('div');
            playerWrapper.className = 'cosy-article-wrapper';
            playerWrapper.style.margin = '2rem 0';
            playerWrapper.innerHTML = `
                <div class="cosy-article-header" style="background: var(--cream); border: 1px solid var(--border); border-bottom: none; border-radius: 12px 12px 0 0; padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
                    <span style="font-weight: 600; font-family: 'Playfair Display', serif; color: var(--indigo); font-size: 1rem;">📖 Embedded Reader</span>
                    <a href="${articleUrl}" target="_blank" style="background: var(--indigo); color: white; border: none; padding: 0.35rem 0.75rem; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.8rem; text-decoration: none;">Open in New Tab ↗</a>
                </div>
                <div class="cosy-article-container" style="position: relative; width: 100%; height: 500px; border: 1px solid var(--border); border-radius: 0 0 12px 12px; overflow: hidden; background: #fff; box-sizing: border-box;">
                    <iframe src="${articleUrl}" style="width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
                </div>
                <div class="cosy-article-disclaimer" style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--muted); display: flex; align-items: center; gap: 0.25rem;">
                    <span>ℹ️ ${disclaimerText}</span>
                </div>
            `;

            // Inject the wrapper after the meta grid
            const metaGrid = document.querySelector('.session-meta-grid');
            if (metaGrid) {
                metaGrid.parentNode.insertBefore(playerWrapper, metaGrid.nextSibling);
            } else {
                // Fallback: insert before the link's parent container or paragraph
                const parent = link.closest('p') || link.closest('div') || link;
                parent.parentNode.insertBefore(playerWrapper, parent.nextSibling);
            }
        });
    };

    /* ─── LYRICS DISCLAIMER INJECTION ────────────────────────── */
    const setupLyricsDisclaimers = () => {
        // Find all .lyrics-container
        const lyricContainers = Array.from(document.querySelectorAll('.lyrics-container'));
        if (lyricContainers.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Disclaimer: These song lyrics are used strictly for educational purposes only.',
            'fr': 'Avertissement : Les paroles de ces chansons sont utilisées uniquement à des fins éducatives.',
            'ru': 'Предупреждение: Текст этой песни используется исключительно в образовательных целях.',
            'es': 'Descargo de responsabilidad: Las letras de estas canciones se utilizan únicamente con fines educativos.',
            'it': 'Dichiarazione di non responsabilità: I testi di queste canzoni sono utilizzati esclusivamente a scopo didattico.',
            'el': 'Αποποίηση ευθύνης: Οι στίχοι αυτών των τραγουδιών χρησιμοποιούνται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        lyricContainers.forEach(container => {
            // Prevent duplicate disclaimers
            if (container.querySelector('.cosy-lyrics-disclaimer')) return;

            const disclaimerDiv = document.createElement('div');
            disclaimerDiv.className = 'cosy-lyrics-disclaimer';
            disclaimerDiv.style.marginTop = '1.5rem';
            disclaimerDiv.style.paddingTop = '1rem';
            disclaimerDiv.style.borderTop = '1px dashed var(--border)';
            disclaimerDiv.style.fontSize = '0.8rem';
            disclaimerDiv.style.color = 'var(--muted)';
            disclaimerDiv.style.fontStyle = 'italic';
            disclaimerDiv.innerHTML = `ℹ️ ${disclaimerText}`;
            container.appendChild(disclaimerDiv);
        });
    };

    /* ─── DOUBLE-CLICK VOCABULARY HARVESTING ──────────────────────── */
    const setupDoubleClickHarvesting = () => {
        document.addEventListener('dblclick', (e) => {
            // Avoid inputs, links, buttons, select boxes
            const target = e.target;
            if (target.closest('input, textarea, button, select, a, option, .btn-add-dict, .btn-pronounce, .cosy-harvest-card')) {
                return;
            }

            const selection = window.getSelection();
            const text = selection.toString().trim();
            if (!text || text.length < 2 || text.length > 50 || text.split(/\s+/).length > 6) {
                return;
            }

            // Remove existing harvest card if any
            const existing = document.getElementById('cosy-harvest-card');
            if (existing) existing.remove();

            // Create beautiful floating card
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            const card = document.createElement('div');
            card.id = 'cosy-harvest-card';
            card.className = 'cosy-harvest-card';

            // Position card above or below selection
            const topPos = rect.top + window.scrollY - 105;
            const leftPos = rect.left + window.scrollX + (rect.width / 2) - 125; // center 250px wide card

            card.style.top = `${Math.max(10, topPos)}px`;
            card.style.left = `${Math.max(10, Math.min(window.innerWidth - 270, leftPos))}px`;

            card.innerHTML = `
                <div class="chc-header">
                    <span>✨ Harvest Word</span>
                    <button class="chc-close" onclick="this.closest('.cosy-harvest-card').remove()">×</button>
                </div>
                <div class="chc-body">
                    <div class="chc-word">${text}</div>
                    <div class="chc-actions">
                        <button class="chc-add-btn">Add to Notebook 📓</button>
                    </div>
                </div>
            `;

            document.body.appendChild(card);

            // Bind click event to add to dictionary
            const addBtn = card.querySelector('.chc-add-btn');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.COSY && typeof window.COSY.addToDict === 'function') {
                    window.COSY.addToDict({
                        word: text,
                        definition: 'Harvested via double-click reader.',
                        example: 'Added from current page context.'
                    }, addBtn);

                    addBtn.textContent = 'Saved! ✅';
                    addBtn.style.background = 'var(--sage-dark)';
                    addBtn.disabled = true;
                    setTimeout(() => {
                        card.remove();
                    }, 1000);
                } else {
                    alert('Dictionary engine not loaded.');
                }
            });
        });

        // Remove card when clicking outside
        document.addEventListener('click', (e) => {
            const card = document.getElementById('cosy-harvest-card');
            if (card && !card.contains(e.target) && !window.getSelection().toString().trim()) {
                card.remove();
            }
        });
    };

    /* ─── COSY TOUR GUIDE & NAV HELP SYSTEM ───────────────────────── */
    const TOUR_TRANSLATIONS = {
        en: {
            guide: "Guide",
            skip: "Skip",
            back: "← Back",
            next: "Next →",
            finish: "Finish 🎉",
            close: "Close",
            help_title: "🧭 COSY Navigation Help & Guide",
            help_intro: "Welcome! Need help finding your way around COSYlanguages? Here is a quick guide to our main sections: ✨",
            home_title: "Home Page",
            home_desc: "Our main gateway. Explore our courses, transparent pricing calculator, and meet our active languages grid.",
            practice_title: "Free Practice Hub",
            practice_desc: "Interactive self-paced exercises for grammar, vocabulary, and daily speaking habits.",
            games_title: "Language Games",
            games_desc: "Play 14 interactive multiplayer & solo games like Action Hero or Fluency Flow to build speaking confidence.",
            events_title: "Live Events & Clubs",
            events_desc: "Speaking clubs and foreign-language film nights with native-level teachers.",
            dict_title: "Double-Click Reader",
            dict_desc: "Double-click *any word* on *any page* on our site to immediately harvest it to your personal Vocabulary Notebook!",
            btn_take_tour: "🏡 Take Interactive Homepage Tour →",
            step: "Step",
            of: "of",
            tour_completed: "Tour completed! Enjoy learning! 🎉",

            // Custom contextual guides
            games_intro_title: "How to Play Language Games 🎮",
            games_intro_desc: "Welcome to the Games Arena! Challenge yourself or play with friends. Choose a game, pick a theme, and practice your speaking naturally. No pressure, just pure fun! 🚀",
            practice_intro_title: "How to Use the Practice Hub 💡",
            practice_intro_desc: "Hone your grammar, vocabulary, and daily listening habits. Accumulate points, hit daily targets, maintain your streak, and boost your memory using our Cognitive & Immersion Accelerator! 🧠",
            events_intro_title: "Our Speaking Club Format 🎉",
            events_intro_desc: "Join conversations about daily life, cinema, science, and philosophy! Every session runs a structured format with 10 key vocabulary cards, 10 discussion questions, and 10 agree/disagree speculative future statements. Double-click any word to save it! 🗣️",

            // Steps
            step1_title: 'Main Navigation 🧭',
            step1_desc: 'Explore all major sections of COSYlanguages from here: Free Practice, Games, Events, and more! ☝️',
            step2_title: 'Start Your Journey 📝',
            step2_desc: 'Chat with us directly on WhatsApp, take our quick Placement Quiz to find your level, or pin the app to your Home Screen! 👇',
            step3_title: 'Free Practice Hub 💡',
            step3_desc: 'Master vocabulary, grammar, and speaking exercises at your own pace. Keep up your streak and earn COSY points! 👈',
            step4_title: 'Interactive Language Games 🎮',
            step4_desc: 'Boost your fluency with 14 interactive multiplayer and solo games like Action Hero, Fluency Flow, and Word Linker! 👉',
            step5_title: 'Live Speaking Clubs & Cinema 🎉',
            step5_desc: 'Join live conversational speaking clubs and original language movie nights led by real native and expert teachers! ☝️',
            step6_title: 'Learn 5+ Beautiful Languages 🌍',
            step6_desc: 'Explore English, French, Italian, Russian, Greek, and upcoming languages, along with free learning materials for each! 👇',
            step7_title: 'Transparent Pricing Calculator 🧮',
            step7_desc: 'See exactly what you will pay. Customise your language, course type, lesson duration, package size, and currency. No hidden fees! 👇',
            step8_title: 'Interactive Dictionary Harvesting 📖',
            step8_desc: 'See any word you do not know? Just **double-click** it anywhere on any page on our site to harvest it into your dictionary! 💡',
            step9_title: 'Always Here to Help! ✨',
            step9_desc: 'Whenever you want to retake this tour or need general navigation help on other pages, just click this friendly compass! 🧭'
        },
        fr: {
            guide: "Guide",
            skip: "Passer",
            back: "← Retour",
            next: "Suivant →",
            finish: "Terminer 🎉",
            close: "Fermer",
            help_title: "🧭 Aide à la navigation COSY",
            help_intro: "Bienvenue ! Besoin d'aide pour naviguer sur COSYlanguages ? Voici un guide rapide de nos sections principales : ✨",
            home_title: "Page d'accueil",
            home_desc: "Notre portail principal. Découvrez nos cours, notre calculateur de tarifs transparents et notre grille de langues actives.",
            practice_title: "Espace d'entraînement",
            practice_desc: "Des exercices interactifs en autonomie pour la grammaire, le vocabulaire et la pratique orale quotidienne.",
            games_title: "Jeux linguistiques",
            games_desc: "Jouez à 14 jeux interactifs en solo ou à plusieurs, comme Action Hero ou Fluency Flow, pour renforcer votre aisance.",
            events_title: "Événements en direct & clubs",
            events_desc: "Clubs de conversation et soirées cinéma en version originale animés par des enseignants natifs.",
            dict_title: "Lecteur double-clic",
            dict_desc: "Double-cliquez sur *n'importe quel mot* de *n'importe quelle page* pour l'ajouter directement à votre carnet de vocabulaire !",
            btn_take_tour: "🏡 Faire la visite guidée de l'accueil →",
            step: "Étape",
            of: "sur",
            tour_completed: "Visite terminée ! Bon apprentissage ! 🎉",

            games_intro_title: "Comment jouer aux jeux linguistiques 🎮",
            games_intro_desc: "Bienvenue dans l'arène des jeux ! Relevez des défis seul ou jouez avec des amis. Choisissez un jeu, un thème et pratiquez la langue naturellement. Pas de pression, juste du plaisir ! 🚀",
            practice_intro_title: "Comment utiliser l'espace d'entraînement 💡",
            practice_intro_desc: "Perfectionnez votre grammaire, votre vocabulaire et vos habitudes d'écoute. Cumulez des points, atteignez vos objectifs, maintenez votre série et stimulez votre mémoire avec notre accélérateur cognitif d'immersion ! 🧠",
            events_intro_title: "Format de nos clubs de conversation 🎉",
            events_intro_desc: "Participez à des discussions sur la vie quotidienne, le cinéma, la science et la philosophie ! Chaque session suit un format structuré avec 10 cartes de vocabulaire, 10 questions de discussion et 10 affirmations spéculatives sur le futur. Double-cliquez sur un mot pour le sauvegarder ! 🗣️",

            step1_title: 'Navigation principale 🧭',
            step1_desc: 'Découvrez toutes les sections majeures de COSYlanguages d\'ici : Entraînement gratuit, Jeux, Événements, et bien plus encore ! ☝️',
            step2_title: 'Commencez votre voyage 📝',
            step2_desc: 'Discutez directement avec nous sur WhatsApp, passez notre test de niveau rapide ou épinglez l\'application sur votre écran d\'accueil ! 👇',
            step3_title: 'Espace d\'entraînement 💡',
            step3_desc: 'Maîtrisez le vocabulaire, la grammaire et la prononciation à votre propre rythme. Maintenez votre série quotidienne et gagnez des points ! 👈',
            step4_title: 'Jeux linguistiques interactifs 🎮',
            step4_desc: 'Améliorez votre aisance grâce à 14 jeux interactifs en solo et en équipe comme Action Hero, Fluency Flow ou Word Linker ! 👉',
            step5_title: 'Clubs de conversation & Cinéma 🎉',
            step5_desc: 'Rejoignez des clubs de conversation conviviaux et des soirées cinéma en langue originale animés par des professeurs natifs ! ☝️',
            step6_title: 'Apprenez plus de 5 langues 🌍',
            step6_desc: 'Explorez l\'anglais, le français, l\'italien, le russe, le grec et les langues à venir, avec des ressources gratuites pour chacune ! 👇',
            step7_title: 'Calculateur de tarifs 🧮',
            step7_desc: 'Visualisez exactement votre budget. Personnalisez la langue, le type de cours, la durée, le volume de cours et la devise. Sans frais cachés ! 👇',
            step8_title: 'Dictionnaire interactif double-clic 📖',
            step8_desc: 'Un mot inconnu ? Double-cliquez dessus sur n\'importe quelle page du site pour l\'ajouter instantanément à votre dictionnaire personnel ! 💡',
            step9_title: 'Toujours là pour vous aider ! ✨',
            step9_desc: 'Pour refaire cette visite guidée ou obtenir de l\'aide sur d\'autres pages, cliquez simplement sur cette boussole amicale ! 🧭'
        },
        it: {
            guide: "Guida",
            skip: "Salta",
            back: "← Indietro",
            next: "Avanti →",
            finish: "Fine 🎉",
            close: "Chiudi",
            help_title: "🧭 Guida alla navigazione COSY",
            help_intro: "Benvenuto! Hai bisogno di aiuto per orientarti su COSYlanguages? Ecco una guida rapida alle nostre sezioni principali: ✨",
            home_title: "Pagina iniziale",
            home_desc: "Il nostro portale principale. Esplora i nostri corsi, il calcolatore di prezzi trasparente e scopri le nostre lingue attive.",
            practice_title: "Area di pratica",
            practice_desc: "Esercizi interattivi indipendenti per grammatica, vocabolario e abitudini di conversazione quotidiane.",
            games_title: "Giochi linguistici",
            games_desc: "Gioca a 14 giochi interattivi in modalità singola o multiplayer, come Action Hero o Fluency Flow, per migliorare l'affidabilità parlata.",
            events_title: "Eventi dal vivo e club",
            events_desc: "Club di conversazione e serate cinema in lingua originale guidati da insegnanti madrelingua.",
            dict_title: "Lettore con doppio clic",
            dict_desc: "Fai doppio clic su *qualsiasi parola* su *qualsiasi pagina* per aggiungerla immediatamente al tuo quaderno dei vocaboli!",
            btn_take_tour: "🏡 Fai il tour guidato dell'homepage →",
            step: "Passo",
            of: "di",
            tour_completed: "Tour completato! Buon apprendimento! 🎉",

            games_intro_title: "Come giocare ai giochi linguistici 🎮",
            games_intro_desc: "Benvenuto nell'arena dei giochi! Mettiti alla prova o gioca con gli amici. Scegli un gioco, seleziona un tema e fai pratica parlando in modo naturale. Nessuna pressione, solo puro divertimento! 🚀",
            practice_intro_title: "Come usare l'area di pratica 💡",
            practice_intro_desc: "Perfeziona la tua grammatica, il tuo vocabolario e le tue abitudini di ascolto. Accumula punti, raggiungi i tuoi obiettivi quotidiani, mantieni la tua serie e stimola la tua memoria con il nostro acceleratore di immersione cognitiva! 🧠",
            events_intro_title: "Il nostro formato Speaking Club 🎉",
            events_intro_desc: "Partecipa a conversazioni su vita quotidiana, cinema, scienza e filosofia! Ogni sessione segue un formato strutturato con 10 schede di vocaboli, 10 domande di discussione e 10 affermazioni future. Fai doppio clic su qualsiasi parola per salvarla! 🗣️",

            step1_title: 'Navigazione principale 🧭',
            step1_desc: 'Esplora tutte le sezioni principali di COSYlanguages da qui: Pratica gratuita, Giochi, Eventi e molto altro! ☝️',
            step2_title: 'Inizia il tuo viaggio 📝',
            step2_desc: 'Chatta direttamente con noi su WhatsApp, fai il nostro quiz di livello rapido o aggiungi l\'app alla tua schermata principale! 👇',
            step3_title: 'Area di pratica gratuita 💡',
            step3_desc: 'Impara vocaboli, grammatica ed esercizi di conversazione al tuo ritmo. Mantieni la tua serie giornaliera e ottieni punti COSY! 👈',
            step4_title: 'Giochi di lingua interattivi 🎮',
            step4_desc: 'Migliora la tua fluidità con 14 giochi interattivi da solo o con amici come Action Hero, Fluency Flow e Word Linker! 👉',
            step5_title: 'Conversazione dal vivo e cinema 🎉',
            step5_desc: 'Partecipa a club di conversazione stimolanti e serate di cinema in lingua originale con insegnanti esperti! ☝️',
            step6_title: 'Impara più di 5 lingue 🌍',
            step6_desc: 'Esplora inglese, francese, italiano, russo, greco e altre lingue in arrivo, con materiali gratuiti per ognuna! 👇',
            step7_title: 'Calcolatore dei prezzi 🧮',
            step7_desc: 'Scopri esattamente quanto pagherai. Personalizza lingua, tipo di corso, durata della lezione, pacchetto e valuta. Nessun costo nascosto! 👇',
            step8_title: 'Raccolta vocaboli con doppio clic 📖',
            step8_desc: 'Vedi una parola che non conosci? Fai doppio clic su di essa in qualsiasi pagina per aggiungerla al tuo dizionario personale! 💡',
            step9_title: 'Sempre qui per aiutarti! ✨',
            step9_desc: 'Se vuoi rifare questo tour o hai bisogno di aiuto per navigare in altre pagine, fai clic su questa simpatica bussola! 🧭'
        },
        ru: {
            guide: "Гид",
            skip: "Пропустить",
            back: "← Назад",
            next: "Далее →",
            finish: "Готово 🎉",
            close: "Закрыть",
            help_title: "🧭 Помощник по навигации COSY",
            help_intro: "Добро пожаловать! Нужна помощь в навигации по COSYlanguages? Вот краткое руководство по нашим основным разделам: ✨",
            home_title: "Главная страница",
            home_desc: "Наш главный портал. Ознакомьтесь с курсами, прозрачным калькулятором цен и сеткой активных языков.",
            practice_title: "Бесплатная практика",
            practice_desc: "Интерактивные упражнения для самостоятельного изучения грамматики, лексики и разговорных привычек.",
            games_title: "Языковые игры",
            games_desc: "14 интерактивных игр для одного или компании, включая Action Hero и Fluency Flow, для уверенности в общении.",
            events_title: "Мероприятия и клубы",
            events_desc: "Разговорные клубы и кинопоказы на языке оригинала с профессиональными преподавателями.",
            dict_title: "Чтение с двойным кликом",
            dict_desc: "Дважды кликните по *любому слову* на *любой странице*, чтобы мгновенно добавить его в личный словарь!",
            btn_take_tour: "🏡 Начать интерактивный гид по главной →",
            step: "Шаг",
            of: "из",
            tour_completed: "Тур завершен! Приятного обучения! 🎉",

            games_intro_title: "Как играть в языковые игры 🎮",
            games_intro_desc: "Добро пожаловать на Игровую Арену! Тренируйтесь в одиночку или соревнуйтесь с друзьями. Выберите игру, выберите тему и практикуйте речь в естественной и непринужденной форме! 🚀",
            practice_intro_title: "Как использовать центр практики 💡",
            practice_intro_desc: "Оттачивайте грамматику, пополняйте словарный запас и тренируйте аудирование. Копите очки, достигайте дневных целей, держите ударную серию и улучшайте память с помощью нашего когнитивного акселератора погружения! 🧠",
            events_intro_title: "Формат наших разговорных клубов 🎉",
            events_intro_desc: "Присоединяйтесь к беседам о жизни, кино, науке и философии! Каждая встреча проходит в структурированном формате: 10 тематических слов, 10 разговорных вопросов и 10 дискуссионных утверждений о будущем. Дважды кликните по слову, чтобы сохранить! 🗣️",

            step1_title: 'Главное меню 🧭',
            step1_desc: 'Отсюда вы можете перейти во все основные разделы COSYlanguages: Практика, Игры, Клубы и многое другое! ☝️',
            step2_title: 'Начните ваше путешествие 📝',
            step2_desc: 'Напишите нам напрямую в WhatsApp, пройдите быстрый языковой тест или добавьте приложение на главный экран! 👇',
            step3_title: 'Центр бесплатной практики 💡',
            step3_desc: 'Учите слова, тренируйте грамматику и говорение в своем темпе. Держите ежедневную серию и зарабатывайте очки! 👈',
            step4_title: 'Интерактивные языковые игры 🎮',
            step4_desc: 'Развивайте беглость речи в 14 играх соло или с друзьями, таких как Action Hero, Fluency Flow и Word Linker! 👉',
            step5_title: 'Разговорные клубы и кино 🎉',
            step5_desc: 'Присоединяйтесь к увлекательным разговорным сессиям и кинопоказам с носителями языка и опытными преподавателями! ☝️',
            step6_title: 'Изучайте более 5 языков 🌍',
            step6_desc: 'Откройте для себя английский, французский, итальянский, русский, греческий и другие языки с бесплатными материалами! 👇',
            step7_title: 'Прозрачный калькулятор цен 🧮',
            step7_desc: 'Узнайте точную стоимость занятий. Настройте язык, тип курса, длительность, размер пакета и валюту. Никаких скрытых комиссий! 👇',
            step8_title: 'Интерактивный перевод по двойному клику 📖',
            step8_desc: 'Встретили незнакомое слово? Просто кликните по нему дважды в любом месте сайта, чтобы добавить в личный словарь! 💡',
            step9_title: 'Всегда готовы помочь! ✨',
            step9_desc: 'Если захотите повторить этот тур или понадобится помощь на других страницах, просто нажмите на этот компас! 🧭'
        },
        el: {
            guide: "Οδηγός",
            skip: "Παράλειψη",
            back: "← Πίσω",
            next: "Επόμενο →",
            finish: "Τέλος 🎉",
            close: "Κλείσιμο",
            help_title: "🧭 Βοήθεια Πλοήγησης COSY",
            help_intro: "Καλώς ορίσατε! Χρειάζεστε βοήθεια για να βρείτε τον δρόμο σας στο COSYlanguages; Δείτε έναν γρήγορο οδηγό για τις κύριες ενότητες μας: ✨",
            home_title: "Αρχική Σελίδα",
            home_desc: "Η κύρια πύλη μας. Εξερευνήστε τα μαθήματά μας, τον διαφανή υπολογιστή τιμών και γνωρίστε τον πίνακα γλωσσών.",
            practice_title: "Δωρεάν Εξάσκηση",
            practice_desc: "Διαδραστικές ασκήσεις γραμματικής, λεξιλογίου και καθημερινής ομιλίας με τον δικό σας ρυθμό.",
            games_title: "Γλωσσικά Παιχνίδια",
            games_desc: "Παίξτε 14 διαδραστικά παιχνίδια (ατομικά ή με παρέα), όπως το Action Hero ή το Fluency Flow, για να αποκτήσετε αυτοπεποίθηση.",
            events_title: "Ζωντανές Εκδηλώσεις & Λέσχες",
            events_desc: "Λέσχες συζήτησης και βραδιές κινηματογράφου με καθηγητές που είναι φυσικοί ομιλητές της γλώσσας.",
            dict_title: "Ανάγνωση με Διπλό Κλικ",
            dict_desc: "Κάντε διπλό κλικ σε *οποιαδήποτε λέξη* σε *οποιαδήποτε σελίδα* για να την προσθέσετε αμέσως στο προσωπικό σας Λεξιλόγιο!",
            btn_take_tour: "🏡 Ξεκινήστε τον Διαδραστικό Οδηγό της Αρχικής →",
            step: "Βήμα",
            of: "από",
            tour_completed: "Ο οδηγός ολοκληρώθηκε! Καλή εκμάθηση! 🎉",

            games_intro_title: "Πώς να παίξετε Γλωσσικά Παιχνίδια 🎮",
            games_intro_desc: "Καλώς ορίσατε στην Αρένα Παιχνιδιών! Προκαλέστε τον εαυτό σας ή παίξτε με φίλους. Διαλέξτε παιχνίδι και θέμα, και εξασκηθείτε στην ομιλία με απόλυτα φυσικό τρόπο! 🚀",
            practice_intro_title: "Πώς να χρησιμοποιήσετε το Κέντρο Εξάσκησης 💡",
            practice_intro_desc: "Βελτιώστε τη γραμματική, το λεξιλόγιο και την ακρόαση. Συγκεντρώστε πόντους, πετύχετε καθημερινούς στόχους, διατηρήστε το σερί σας και ενισχύστε τη μνήμη σας με τον Επιταχυντή Γνωστικής Εμβύθισης! 🧠",
            events_intro_title: "Η δομή των Λεσχών Συζήτησης 🎉",
            events_intro_desc: "Συμμετάσχετε σε συζητήσεις για την καθημερινότητα, το σινεμά, την επιστήμη και τη φιλοσοφία! Κάθε συνεδρία ακολουθεί μια δομημένη μορφή: 10 κάρτες λεξιλογίου, 10 ερωτήσεις συζήτησης και 10 υποθετικές προτάσεις για το μέλλον. Κάντε διπλό κλικ σε οποιαδήποτε λέξη για αποθήκευση! 🗣️",

            step1_title: 'Κύρια Πλοήγηση 🧭',
            step1_desc: 'Εξερευνήστε όλες τις σημαντικές ενότητες του COSYlanguages από εδώ: Δωρεάν Εξάσκηση, Παιχνίδια, Εκδηλώσεις και άλλα! ☝️',
            step2_title: 'Ξεκινήστε το Ταξίδι σας 📝',
            step2_desc: 'Συνομιλήστε μαζί μας απευθείας στο WhatsApp, κάντε το γρήγορο τεστ κατάταξης ή καρφιτσώστε την εφαρμογή στην Αρχική Σελίδα σας! 👇',
            step3_title: 'Κέντρο Δωρεάν Εξάσκησης 💡',
            step3_desc: 'Μάθετε λεξιλόγιο, γραμματική και ομιλία με τον δικό σας ρυθμό. Διατηρήστε το καθημερινό σας σερί και κερδίστε πόντους! 👈',
            step4_title: 'Διαδραστικά Γλωσσικά Παιχνίδια 🎮',
            step4_desc: 'Βελτιώστε την ευχέρειά σας με 14 διαδραστικά παιχνίδια όπως Action Hero, Fluency Flow και Word Linker! 👉',
            step5_title: 'Λέσχες Συζήτησης & Κινηματογράφος 🎉',
            step5_desc: 'Συμμετάσχετε σε ζωντανές λέσχες συζήτησης και βραδιές ξενόγλωσσου κινηματογράφου με έμπειρους καθηγητές! ☝️',
            step6_title: 'Μάθετε 5+ Πανέμορφες Γλώσσες 🌍',
            step6_desc: 'Εξερευνήστε Αγγλικά, Γαλλικά, Ιταλικά, Ρωσικά, Ελληνικά και άλλες γλώσσες, με δωρεάν υλικό για κάθε μία! 👇',
            step7_title: 'Υπολογιστής Τιμών 🧮',
            step7_desc: 'Δείτε ακριβώς τι θα πληρώσετε. Προσαρμόστε γλώσσα, τύπο μαθήματος, διάρκεια, πακέτο και νόμισμα. Χαρακτηριστικά χωρίς κρυφές χρεώσεις! 👇',
            step8_title: 'Διπλό Κλικ για Συλλογή Λεξιλογίου 📖',
            step8_desc: 'Βλέπετε μια άγνωστη λέξη; Κάντε διπλό κλικ πάνω της σε οποιαδήποτε σελίδα για να την προσθέσετε στο λεξικό σας! 💡',
            step9_title: 'Πάντα εδώ για να βοηθήσουμε! ✨',
            step9_desc: 'Αν θέλετε να επαναλάβετε αυτόν τον οδηγό ή χρειάζεστε βοήθεια πλοήγησης σε άλλες σελίδες, κάντε κλικ σε αυτήν την πυξίδα! 🧭'
        }
    };

    const TOUR_STEPS = [
        {
            target: '#cosy-nav',
            titleKey: 'step1_title',
            descKey: 'step1_desc',
            position: 'bottom'
        },
        {
            target: '.hero-ctas',
            titleKey: 'step2_title',
            descKey: 'step2_desc',
            position: 'bottom'
        },
        {
            target: '#tools .tool-card:nth-child(1) .tool-link',
            titleKey: 'step3_title',
            descKey: 'step3_desc',
            position: 'top'
        },
        {
            target: '#tools .tool-card:nth-child(2) .tool-link',
            titleKey: 'step4_title',
            descKey: 'step4_desc',
            position: 'top'
        },
        {
            target: '.events-row',
            titleKey: 'step5_title',
            descKey: 'step5_desc',
            position: 'top'
        },
        {
            target: '#languages',
            titleKey: 'step6_title',
            descKey: 'step6_desc',
            position: 'top'
        },
        {
            target: '#calculator',
            titleKey: 'step7_title',
            descKey: 'step7_desc',
            position: 'top'
        },
        {
            target: '#dict-fab',
            titleKey: 'step8_title',
            descKey: 'step8_desc',
            position: 'top'
        },
        {
            target: '#cosy-tour-fab',
            titleKey: 'step9_title',
            descKey: 'step9_desc',
            position: 'top'
        }
    ];

    let currentTourStep = 0;
    let activeHighlightedEl = null;

    const getActiveLang = () => {
        let lang = document.documentElement.lang || 'en';
        lang = lang.toLowerCase();
        if (['en', 'fr', 'it', 'ru', 'el'].includes(lang)) {
            return lang;
        }
        const local = localStorage.getItem('cosy_user_lang') || localStorage.getItem('cosy_last_language');
        if (local && ['en', 'fr', 'it', 'ru', 'el'].includes(local.toLowerCase())) {
            return local.toLowerCase();
        }
        return 'en';
    };

    const getTourText = (key) => {
        const lang = getActiveLang();
        const set = TOUR_TRANSLATIONS[lang] || TOUR_TRANSLATIONS['en'];
        return set[key] || TOUR_TRANSLATIONS['en'][key] || '';
    };

    const positionTooltip = (targetEl, position) => {
        const rect = targetEl.getBoundingClientRect();
        const tooltip = document.getElementById('cosy-tour-tooltip');
        if (!tooltip) return;

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        let top = 0;
        let left = 0;

        if (position === 'bottom') {
            top = rect.bottom + scrollY + 15;
            left = rect.left + scrollX + rect.width / 2 - tooltip.offsetWidth / 2;
        } else if (position === 'top') {
            top = rect.top + scrollY - tooltip.offsetHeight - 15;
            left = rect.left + scrollX + rect.width / 2 - tooltip.offsetWidth / 2;
        } else if (position === 'left') {
            top = rect.top + scrollY + rect.height / 2 - tooltip.offsetHeight / 2;
            left = rect.left + scrollX - tooltip.offsetWidth - 15;
        } else if (position === 'right') {
            top = rect.top + scrollY + rect.height / 2 - tooltip.offsetHeight / 2;
            left = rect.right + scrollX + 15;
        }

        // Prevent tooltip from overflowing left/right of screen
        const padding = 15;
        if (left < padding) {
            left = padding;
        } else if (left + tooltip.offsetWidth > window.innerWidth - padding) {
            left = window.innerWidth - tooltip.offsetWidth - padding;
        }

        // Prevent tooltip from overflowing top of screen
        if (top < padding) {
            top = padding;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.display = 'block';
    };

    const positionPointer = (targetEl, position) => {
        const rect = targetEl.getBoundingClientRect();
        const pointer = document.getElementById('cosy-tour-pointer');
        if (!pointer) return;

        let top = 0;
        let left = 0;
        let emoji = '👇';
        let bounceClass = 'bounce-down';

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        if (position === 'bottom') {
            top = rect.top + scrollY - 50;
            left = rect.left + scrollX + rect.width / 2 - 20;
            emoji = '👇';
            bounceClass = 'bounce-down';
        } else if (position === 'top') {
            top = rect.bottom + scrollY + 10;
            left = rect.left + scrollX + rect.width / 2 - 20;
            emoji = '☝️';
            bounceClass = 'bounce-up';
        } else if (position === 'left') {
            top = rect.top + scrollY + rect.height / 2 - 20;
            left = rect.right + scrollX + 10;
            emoji = '👈';
            bounceClass = 'bounce-left';
        } else if (position === 'right') {
            top = rect.top + scrollY + rect.height / 2 - 20;
            left = rect.left + scrollX - 50;
            emoji = '👉';
            bounceClass = 'bounce-right';
        }

        pointer.style.top = `${top}px`;
        pointer.style.left = `${left}px`;
        pointer.innerHTML = emoji;
        pointer.className = `cosy-tour-pointer ${bounceClass}`;
        pointer.style.display = 'block';
    };

    window.startHomepageTour = function() {
        currentTourStep = 0;

        let tooltip = document.getElementById('cosy-tour-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'cosy-tour-tooltip';
            tooltip.className = 'cosy-tour-bubble';
            document.body.appendChild(tooltip);
        }

        let pointer = document.getElementById('cosy-tour-pointer');
        if (!pointer) {
            pointer = document.createElement('div');
            pointer.id = 'cosy-tour-pointer';
            pointer.className = 'cosy-tour-pointer';
            document.body.appendChild(pointer);
        }

        let backdrop = document.getElementById('cosy-tour-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'cosy-tour-backdrop';
            backdrop.className = 'cosy-tour-backdrop-overlay';
            document.body.appendChild(backdrop);
        }

        backdrop.style.display = 'block';
        showTourStep(0);
    };

    window.endHomepageTour = function() {
        if (activeHighlightedEl) {
            activeHighlightedEl.classList.remove('cosy-tour-highlight');
            activeHighlightedEl = null;
        }

        const tooltip = document.getElementById('cosy-tour-tooltip');
        if (tooltip) tooltip.style.display = 'none';

        const pointer = document.getElementById('cosy-tour-pointer');
        if (pointer) pointer.style.display = 'none';

        const backdrop = document.getElementById('cosy-tour-backdrop');
        if (backdrop) backdrop.style.display = 'none';

        try {
            const url = new URL(window.location);
            if (url.searchParams.has('startTour')) {
                url.searchParams.delete('startTour');
                window.history.replaceState({}, '', url);
            }
        } catch (e) {}
    };

    window.nextTourStep = function() {
        if (currentTourStep < TOUR_STEPS.length - 1) {
            currentTourStep++;
            showTourStep(currentTourStep);
        } else {
            window.endHomepageTour();
            if (window.COSY && typeof window.COSY.showToast === 'function') {
                window.COSY.showToast(getTourText('tour_completed'));
            }
        }
    };

    window.prevTourStep = function() {
        if (currentTourStep > 0) {
            currentTourStep--;
            showTourStep(currentTourStep);
        }
    };

    function showTourStep(index) {
        const step = TOUR_STEPS[index];
        if (!step) return;

        if (activeHighlightedEl) {
            activeHighlightedEl.classList.remove('cosy-tour-highlight');
        }

        const targetEl = document.querySelector(step.target);
        if (!targetEl) {
            console.warn(`[COSY Tour] Target element not found: ${step.target}`);
            if (index > currentTourStep) {
                currentTourStep = index;
                window.nextTourStep();
            } else {
                currentTourStep = index;
                window.prevTourStep();
            }
            return;
        }

        currentTourStep = index;
        activeHighlightedEl = targetEl;
        targetEl.classList.add('cosy-tour-highlight');

        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            const tooltip = document.getElementById('cosy-tour-tooltip');
            const pointer = document.getElementById('cosy-tour-pointer');
            if (!tooltip || !pointer) return;

            tooltip.innerHTML = `
                <div class="ctb-header">
                    <span class="ctb-step-tag">✨ ${getTourText('step')} ${index + 1} ${getTourText('of')} ${TOUR_STEPS.length}</span>
                    <button class="ctb-close" onclick="window.endHomepageTour()">✕</button>
                </div>
                <h4 class="ctb-title">${getTourText(step.titleKey)}</h4>
                <p class="ctb-desc">${getTourText(step.descKey)}</p>
                <div class="ctb-actions">
                    <button class="ctb-btn-skip" onclick="window.endHomepageTour()">${getTourText('skip')}</button>
                    <div style="display:flex; gap: 8px;">
                        ${index > 0 ? `<button class="ctb-btn-back" onclick="window.prevTourStep()">${getTourText('back')}</button>` : ''}
                        <button class="ctb-btn-next" onclick="window.nextTourStep()">${index === TOUR_STEPS.length - 1 ? getTourText('finish') : getTourText('next')}</button>
                    </div>
                </div>
            `;

            positionTooltip(targetEl, step.position);
            positionPointer(targetEl, step.position);
        }, 300);
    }

    window.showNavigationHelpModal = function() {
        let modal = document.getElementById('cosy-nav-help-modal');
        if (modal) {
            modal.remove(); // Re-create to pick up current localized strings & contextual settings dynamically!
        }

        modal = document.createElement('div');
        modal.id = 'cosy-nav-help-modal';
        modal.className = 'cosy-tour-modal-overlay';

        const p = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '/';

        // Detect Context: games, practice, events, or general
        const pathname = window.location.pathname.toLowerCase();
        let context = 'general';
        if (pathname.includes('/games/')) {
            context = 'games';
        } else if (pathname.includes('/practice/')) {
            context = 'practice';
        } else if (pathname.includes('/events/')) {
            context = 'events';
        }

        let contextIntroHtml = '';
        if (context === 'games') {
            contextIntroHtml = `
                <div style="background: rgba(46,74,51,0.05); padding: 15px; border-radius: 12px; border-left: 4px solid var(--sage-dark); margin-bottom: 20px;">
                    <h4 style="margin:0 0 5px 0; font-family:'Fraunces', serif; font-size:1.05rem; color:var(--sage-dark);">${getTourText('games_intro_title')}</h4>
                    <p style="margin:0; font-size:0.85rem; line-height:1.4; color:#3f4e41;">${getTourText('games_intro_desc')}</p>
                </div>
            `;
        } else if (context === 'practice') {
            contextIntroHtml = `
                <div style="background: rgba(46,74,51,0.05); padding: 15px; border-radius: 12px; border-left: 4px solid var(--sage-dark); margin-bottom: 20px;">
                    <h4 style="margin:0 0 5px 0; font-family:'Fraunces', serif; font-size:1.05rem; color:var(--sage-dark);">${getTourText('practice_intro_title')}</h4>
                    <p style="margin:0; font-size:0.85rem; line-height:1.4; color:#3f4e41;">${getTourText('practice_intro_desc')}</p>
                </div>
            `;
        } else if (context === 'events') {
            contextIntroHtml = `
                <div style="background: rgba(46,74,51,0.05); padding: 15px; border-radius: 12px; border-left: 4px solid var(--sage-dark); margin-bottom: 20px;">
                    <h4 style="margin:0 0 5px 0; font-family:'Fraunces', serif; font-size:1.05rem; color:var(--sage-dark);">${getTourText('events_intro_title')}</h4>
                    <p style="margin:0; font-size:0.85rem; line-height:1.4; color:#3f4e41;">${getTourText('events_intro_desc')}</p>
                </div>
            `;
        }

        modal.innerHTML = `
            <div class="cosy-tour-modal">
                <div class="ctm-header">
                    <h3>${getTourText('help_title')}</h3>
                    <button class="ctm-close-btn" onclick="document.getElementById('cosy-nav-help-modal').style.display='none'">×</button>
                </div>
                <div class="ctm-body">
                    ${contextIntroHtml}
                    <p class="ctm-intro">${getTourText('help_intro')}</p>
                    <div class="ctm-map">
                        <div class="ctm-map-item">
                            <span class="cmi-icon">🏡</span>
                            <div class="cmi-content">
                                <strong><a href="${p}index.html">${getTourText('home_title')}</a></strong>
                                <p>${getTourText('home_desc')}</p>
                            </div>
                        </div>
                        <div class="ctm-map-item">
                            <span class="cmi-icon">💡</span>
                            <div class="cmi-content">
                                <strong><a href="${p}practice/index.html">${getTourText('practice_title')}</a></strong>
                                <p>${getTourText('practice_desc')}</p>
                            </div>
                        </div>
                        <div class="ctm-map-item">
                            <span class="cmi-icon">🎮</span>
                            <div class="cmi-content">
                                <strong><a href="${p}games/index.html">${getTourText('games_title')}</a></strong>
                                <p>${getTourText('games_desc')}</p>
                            </div>
                        </div>
                        <div class="ctm-map-item">
                            <span class="cmi-icon">🎉</span>
                            <div class="cmi-content">
                                <strong><a href="${p}events/index.html">${getTourText('events_title')}</a></strong>
                                <p>${getTourText('events_desc')}</p>
                            </div>
                        </div>
                        <div class="ctm-map-item">
                            <span class="cmi-icon">📖</span>
                            <div class="cmi-content">
                                <strong>${getTourText('dict_title')}</strong>
                                <p>${getTourText('dict_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ctm-footer">
                    <button class="btn-secondary" onclick="document.getElementById('cosy-nav-help-modal').style.display='none'">${getTourText('close')}</button>
                    <a href="${p}index.html?startTour=true" class="btn-primary" style="text-decoration:none;">${getTourText('btn_take_tour')}</a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    };

    window.addEventListener('resize', () => {
        const tooltip = document.getElementById('cosy-tour-tooltip');
        if (tooltip && tooltip.style.display === 'block' && activeHighlightedEl) {
            const step = TOUR_STEPS[currentTourStep];
            if (step) {
                positionTooltip(activeHighlightedEl, step.position);
                positionPointer(activeHighlightedEl, step.position);
            }
        }
    });

    window.addEventListener('keydown', (e) => {
        const tooltip = document.getElementById('cosy-tour-tooltip');
        if (tooltip && tooltip.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                window.nextTourStep();
            } else if (e.key === 'ArrowLeft') {
                window.prevTourStep();
            } else if (e.key === 'Escape') {
                window.endHomepageTour();
            }
        }
    });

    /* ─── CLUB FILTER EMPTY STATE LOGIC ─────────────────────────── */
    const setupClubFilters = () => {
        const buttons = document.querySelectorAll('.filter-btn');
        const sessions = document.querySelectorAll('.history-session');
        const historyBody = document.querySelector('.history-body');

        if (buttons.length > 0 && sessions.length > 0 && historyBody) {
            // Check if we already created the message
            let noSessionsMsg = document.getElementById('no-sessions-msg');
            if (!noSessionsMsg) {
                noSessionsMsg = document.createElement('div');
                noSessionsMsg.id = 'no-sessions-msg';
                noSessionsMsg.style.cssText = 'text-align: center; padding: 3rem 1.5rem; background: var(--cream, #FAF7F2); border-radius: 16px; border: 1.5px dashed var(--border); margin: 1.5rem 0; width: 100%; box-sizing: border-box;';

                const docLang = document.documentElement.lang || 'en';
                const msgs = {
                    en: {
                        title: 'No past sessions found',
                        desc: 'Please try selecting a different language level or check back later!'
                    },
                    fr: {
                        title: 'Aucune session passée trouvée',
                        desc: 'Veuillez essayer de sélectionner un autre niveau de langue !'
                    },
                    ru: {
                        title: 'Прошедшие сессии не найдены',
                        desc: 'Пожалуйста, попробуйте выбрать другой языковой уровень!'
                    }
                };
                const msg = msgs[docLang.toLowerCase()] || msgs['en'];

                noSessionsMsg.innerHTML = `
                    <span style="font-size: 2.5rem; display: block; margin-bottom: 1rem; animation: pulse 2s infinite ease-in-out;">🔍</span>
                    <h4 style="margin: 0 0 0.5rem; color: var(--ink-soft); font-family: 'Playfair Display', serif; font-size: 1.3rem;">${msg.title}</h4>
                    <p style="margin: 0; font-size: 0.9rem; color: var(--muted);">${msg.desc}</p>
                `;
                noSessionsMsg.style.display = 'none';
                historyBody.appendChild(noSessionsMsg);
            }

            buttons.forEach(btn => {
                if (btn.dataset.filterBound === 'true') return;
                btn.dataset.filterBound = 'true';

                btn.addEventListener('click', () => {
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const selectedLevel = btn.getAttribute('data-level');
                    let visibleCount = 0;

                    sessions.forEach(sess => {
                        const levelsAttr = sess.getAttribute('data-level') || '';
                        const levels = levelsAttr.split(/\s+/);
                        if (selectedLevel === 'all' || levels.includes(selectedLevel)) {
                            sess.style.display = 'flex';
                            visibleCount++;
                        } else {
                            sess.style.display = 'none';
                        }
                    });

                    if (noSessionsMsg) {
                        noSessionsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
                    }
                });
            });
        }
    };

    /* ─── SESSION SWITCHER ENGINE ───────────────────────────────── */
    const SWITCHER_LOCALES = {
        en: {
            languages: "Available Languages:",
            levels: "Available Levels:"
        },
        fr: {
            languages: "Langues disponibles :",
            levels: "Niveaux disponibles :"
        },
        ru: {
            languages: "Доступные языки:",
            levels: "Доступные уровни:"
        }
    };

    const SWITCHER_GROUPS = [
        {
            id: "4-day-work-week",
            pages: [
                { lang: "en", path: "events/sessions/debatable-relatable/4-day-work-week.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "events/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "assisted-dying",
            pages: [
                { lang: "en", path: "events/sessions/debatable-relatable/assisted-dying.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/debatable-relatable/l-aide-active-a-mourir.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "short-holiday-vs-long-holiday",
            pages: [
                { lang: "en", path: "events/sessions/debatable-relatable/short-holiday-vs-long-holiday-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/debatable-relatable/short-holiday-vs-long-holiday-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "typing-vs-handwriting",
            pages: [
                { lang: "en", path: "events/sessions/debatable-relatable/typing-vs-handwriting-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/debatable-relatable/typing-vs-handwriting-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "ape-laughter-speech-origin",
            pages: [
                { lang: "en", path: "events/sessions/keeping-up-with-science/ape-laughter-speech-origin-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/keeping-up-with-science/ape-laughter-speech-origin-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "museums-movies-theater-stay-younger",
            pages: [
                { lang: "en", path: "events/sessions/keeping-up-with-science/museums-movies-theater-stay-younger-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/keeping-up-with-science/museums-movies-theater-stay-younger-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "where-you-live-shapes-dementia-risk",
            pages: [
                { lang: "en", path: "events/sessions/keeping-up-with-science/where-you-live-shapes-dementia-risk-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/keeping-up-with-science/where-you-live-shapes-dementia-risk-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "impersonation-accounts",
            pages: [
                { lang: "en", path: "events/sessions/keeping-up-with-science/impersonation-accounts.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/keeping-up-with-science/impersonation-accounts.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "feynman-knowledge-isnt-free",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/feynman-knowledge-isnt-free-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/the-greatest-quotes/feynman-knowledge-isnt-free-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "feynman-study-hard",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/feynman-study-hard.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/the-greatest-quotes/feynman-study-hard-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "madonna-ai-art-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/madonna-ai-art-quote-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "events/sessions/the-greatest-quotes/madonna-ai-art-quote-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "dolto-difficult-child-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "accept-gay-child",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/accept-gay-child.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/accept-gay-child.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "events/ru/sessions/mind-matters/syn-vlyubilsya-v-druga.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "ai-opposite-of-art",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/ai-opposite-of-art.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/ai-opposite-of-art.html", level: "C1", label: "🇫🇷 Français", levelLabel: "Avancé (C1)" }
            ]
        },
        {
            id: "dangerous-blindness-perspective",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/dangerous-blindness-perspective.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/dangerous-blindness-perspective.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "favorite-days-not-happened",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/favorite-days-not-happened.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/favorite-days-not-happened.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "home-is-a-time",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/home-is-a-time.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/home-is-a-time.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "must-die-first",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/must-die-first.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/must-die-first.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "saudade",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/saudade.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/saudade.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "sonder",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/sonder.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/sonder.html", level: "C1", label: "🇫🇷 Français", levelLabel: "Avancé (C1)" }
            ]
        },
        {
            id: "women-mothers-tragedy",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/women-mothers-tragedy.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/women-mothers-tragedy.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "you-are-a-soul",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/you-are-a-soul.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/you-are-a-soul.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "voltaire-read-dance-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/voltaire-read-dance-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/voltaire-read-dance-quote.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "anticipatory-grief",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/anticipatory-grief.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/anticipatory-grief.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "broken-children-grown-bodies",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/broken-children-grown-bodies.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/broken-children-grown-bodies.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "depersonalization",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/depersonalization.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/depersonalization.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "fear-of-love-control",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/fear-of-love-control.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/fear-of-love-control.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "finding-the-right-person",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/finding-the-right-person.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/finding-the-right-person.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "gilberts-law",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/gilberts-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/gilberts-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "impersonation",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/impersonation.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/impersonation.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "kidlins-law",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/kidlins-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/kidlins-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "law-of-attraction",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/law-of-attraction.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/law-of-attraction.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "limerence",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/limerence.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/limerence.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "murphys-law",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/murphys-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/murphys-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "wilsons-law",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/wilsons-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/mind-matters/wilsons-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "dostoevsky-loving-power-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/dostoevsky-loving-power-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/dostoevsky-loving-power-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "dostoevsky-politics-religion-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "neufeld-resistance-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/neufeld-resistance-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/neufeld-resistance-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "langle-suppressed-child-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/langle-suppressed-child-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/langle-suppressed-child-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "think-for-yourself-quote",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/think-for-yourself-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "ru", path: "events/ru/sessions/the-greatest-quotes/think-for-yourself-quote.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "wisdom-of-socrates",
            pages: [
                { lang: "en", path: "events/sessions/the-greatest-quotes/wisdom-of-socrates.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "events/fr/sessions/the-greatest-quotes/la-sagesse-de-socrate.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "expert-defend-language-mistakes",
            pages: [
                { lang: "en", path: "events/sessions/mind-matters/expert-defend-language-mistakes.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "events/ru/sessions/mind-matters/ne-ispravlyay-rech.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        }
    ];

    const setupSessionSwitcher = () => {
        const currentPathname = window.location.pathname;
        const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';

        let relativePath = currentPathname;
        if (relativePath.startsWith(prefix)) {
            relativePath = relativePath.slice(prefix.length);
        }

        // Normalize path separators to forward slashes
        relativePath = relativePath.replace(/\\/g, '/');
        if (relativePath.startsWith('/')) {
            relativePath = relativePath.slice(1);
        }

        // Find if current path is in one of our switcher groups
        const matchedGroup = SWITCHER_GROUPS.find(group =>
            group.pages.some(page => page.path === relativePath)
        );

        if (!matchedGroup) return; // No multi-level or multilingual session detected

        // Ensure <main class="content-container"> is present
        const mainContainer = document.querySelector('main.content-container');
        if (!mainContainer) return;

        // Determine current document language
        let docLang = (document.documentElement.lang || 'en').toLowerCase().split('-')[0];
        if (!['en', 'fr', 'ru'].includes(docLang)) {
            docLang = 'en';
        }

        const loc = SWITCHER_LOCALES[docLang] || SWITCHER_LOCALES['en'];

        // Create switcher element
        const switcherEl = document.createElement('div');
        switcherEl.className = 'session-switcher';

        // Check if there are multiple languages
        const uniqueLangs = new Set(matchedGroup.pages.map(p => p.lang));
        const hasMultilingual = uniqueLangs.size > 1;

        // Check if there are multiple levels
        const uniqueLevels = new Set(matchedGroup.pages.map(p => p.level));
        const hasMultiLevel = uniqueLevels.size > 1;

        let htmlContent = '';

        // 1. Languages Row
        if (hasMultilingual) {
            htmlContent += `
                <div class="session-switcher-row">
                    <span class="session-switcher-label">${loc.languages}</span>
                    <div class="session-switcher-btn-group">
            `;

            // Get unique languages and map to their representing pages
            const langPages = [];
            const seenLangs = new Set();
            matchedGroup.pages.forEach(p => {
                if (!seenLangs.has(p.lang)) {
                    seenLangs.add(p.lang);
                    langPages.push(p);
                }
            });

            langPages.forEach(p => {
                const isActive = p.path === relativePath;
                const activeClass = isActive ? 'active' : '';
                const url = prefix + p.path;
                htmlContent += `
                    <a href="${isActive ? '#' : url}" class="session-switcher-btn ${activeClass}" aria-label="Switch language to ${p.label}">
                        ${p.label}
                    </a>
                `;
            });

            htmlContent += `
                    </div>
                </div>
            `;
        }

        // 2. Levels Row
        if (hasMultiLevel) {
            htmlContent += `
                <div class="session-switcher-row" style="${hasMultilingual ? 'margin-top: 0.5rem;' : ''}">
                    <span class="session-switcher-label">${loc.levels}</span>
                    <div class="session-switcher-btn-group">
            `;

            matchedGroup.pages.forEach(p => {
                const isActive = p.path === relativePath;
                const activeClass = isActive ? 'active' : '';
                const url = prefix + p.path;
                htmlContent += `
                    <a href="${isActive ? '#' : url}" class="session-switcher-btn ${activeClass}" aria-label="Switch level to ${p.levelLabel}">
                        ${p.levelLabel}
                    </a>
                `;
            });

            htmlContent += `
                    </div>
                </div>
            `;
        }

        switcherEl.innerHTML = htmlContent;

        // Inject styles to head
        const styleId = 'cosy-session-switcher-styles';
        if (!document.getElementById(styleId)) {
            const styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
                .session-switcher {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    background: var(--cream-dark);
                    border: 1px solid var(--border);
                    padding: 1rem 1.5rem;
                    border-radius: var(--r-md, 14px);
                    margin-top: 1rem;
                    margin-bottom: 2rem;
                    box-sizing: border-box;
                }
                .session-switcher-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .session-switcher-label {
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--muted);
                    min-width: 140px;
                    margin: 0;
                }
                .session-switcher-btn-group {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
                .session-switcher-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.35rem 0.9rem;
                    background: var(--surface-color, #ffffff);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--ink-soft);
                    text-decoration: none !important;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
                .session-switcher-btn:hover {
                    background: var(--sage-pale);
                    border-color: var(--sage-soft);
                    color: var(--sage-dark);
                    transform: translateY(-1px);
                    box-shadow: var(--shadow-sm);
                }
                .session-switcher-btn.active {
                    background: var(--sage-dark);
                    border-color: var(--sage-dark);
                    color: white !important;
                    cursor: default;
                    pointer-events: none;
                    box-shadow: var(--shadow-sm);
                }
            `;
            document.head.appendChild(styleEl);
        }

        // Find best place to inject the switcher in main container
        const targetAnchor = mainContainer.querySelector('.back-link') || mainContainer.querySelector('.cosy-breadcrumbs') || mainContainer.firstElementChild;
        if (targetAnchor) {
            targetAnchor.parentNode.insertBefore(switcherEl, targetAnchor.nextSibling);
        } else {
            mainContainer.prepend(switcherEl);
        }
    };

    /* ─── INITIALIZATION ────────────────────────────────────────── */
    const init = () => {
        setupHeaderShrink();
        setupBackToTop();
        setupScrollReveal();
        setupClubFilters();
        setupSessionSwitcher();
        if (window.COSY && window.COSY.updateNavActiveState) window.COSY.updateNavActiveState();

        // FAQ Toggle
        document.querySelectorAll('.faq-item').forEach(item => {
            const btn = item.querySelector('.faq-q');
            if (btn) btn.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
                if (!isOpen) item.classList.add('open');
            });
        });

        // Mobile Nav Injection
        if (!document.querySelector('.mobile-nav')) {
            const nav = document.createElement('nav');
            const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '';
            nav.className = 'mobile-nav';
            nav.innerHTML = `
                <a href="${prefix}practice/index.html" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span>Practice</span></a>
                <a href="${prefix}games/index.html" class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span>Games</span></a>
                <a href="${prefix}index.html#languages" class="mobile-nav-item" id="mnav-languages"><span class="mn-icon">🌍</span><span>Languages</span></a>
                <a href="${prefix}index.html" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span>Home</span></a>`;
            document.body.appendChild(nav);
        }

        window.updateMobileNav();
        window.updateDailyDose();
        if (window.COSY && window.COSY.renderDict) window.COSY.renderDict();
        setupVocabPronunciation();
        setupEmbeddedVideoPlayers();
        setupEmbeddedArticles();
        setupLyricsDisclaimers();
        setupDoubleClickHarvesting();

        // Initialize first country tab on language pages if present
        const firstTab = document.querySelector('.ctab');
        if (firstTab) {
            const firstCountry = firstTab.getAttribute('data-country');
            if (firstCountry) {
                window.showCountry(firstCountry);
            }
        }

        // Floating Guide Button Injection
        if (!document.getElementById('cosy-tour-fab')) {
            const btn = document.createElement('button');
            btn.id = 'cosy-tour-fab';
            btn.className = 'cosy-tour-fab';
            btn.title = 'Take a site tour! 🧭';
            const labelText = getTourText('guide') || 'Guide';
            btn.innerHTML = `<span class="ct-fab-icon">🧭</span> ${labelText}`;
            document.body.appendChild(btn);

            btn.addEventListener('click', () => {
                const isHomepage = document.getElementById('calculator') !== null;
                if (isHomepage) {
                    window.startHomepageTour();
                } else {
                    window.showNavigationHelpModal();
                }
            });

            // Check for tour query param on homepage
            const isHomepage = document.getElementById('calculator') !== null;
            if (isHomepage) {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('startTour') === 'true') {
                    setTimeout(() => {
                        window.startHomepageTour();
                    }, 800);
                }
            }
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
        const lang = localStorage.getItem('cosy_user_lang') || 'en';
        const wotd = document.getElementById('word-of-the-day');
        if (wotd) {
            const list = { en:["Hello"], fr:["Bonjour"], it:["Ciao"], ru:["Привет"], el:["Γειά"] }[lang] || ["Hello"];
            wotd.textContent = list[getDayOfYear() % list.length];
        }
    };

    window.captureLead = function(lang) {
        const container = event.target.closest('.lang-card-soon') || event.target.closest('.start-strip');
        const email = container.querySelector('.lead-email')?.value.trim();
        if (!email || !email.includes('@')) return alert('Valid email required.');
        container.querySelector('.lead-capture').innerHTML = `<span>Thanks! ✅</span>`;
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
