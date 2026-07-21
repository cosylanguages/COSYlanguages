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
            ${titles.map((t, i) => `<button class="vim-tab-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" style="padding:6px 12px;border-radius:20px;border:1px solid var(--border);background:#fff;cursor:pointer;font-size:.75rem;white-space:nowrap;">${t}</button>`).join('')}
          </div>
          <div class="vim-choice-content" style="border:1px solid var(--border);border-radius:10px;padding:15px;background:#fff;">
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
        this.innerHTML = `<blockquote class="vim-bq-${importance}" style="margin:0;padding:15px;border-radius:8px;background:#f9f9f9;border-left:4px solid var(--border);font-size:.9rem;">${content}</blockquote>`;
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
        let cleanText = text.replace(/\((он|она|оно|они|м|ж|ср|м\/ж)\)/gi, '').trim();
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

    /* ─── INITIALIZATION ────────────────────────────────────────── */
    const init = () => {
        setupHeaderShrink();
        setupBackToTop();
        setupScrollReveal();
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
