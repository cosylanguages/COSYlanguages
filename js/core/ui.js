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

        // Dynamic Theme Injection for Sessions
        const metaGrid = document.querySelector('.session-meta-grid');
        if (metaGrid && !document.getElementById('dynamic-session-theme')) {
            const currentFile = window.location.pathname.split('/').pop() || 'index.html';
            const sessionThemes = {
                "ai-and-the-brain.html": "Technology &middot; Psychology",
                "ai-reality-delusion.html": "Technology &middot; Describing",
                "ape-laughter-speech-origin-intermediate.html": "Nature &middot; Language",
                "climate-scientist-warming-report.html": "Environment &middot; Social Life",
                "right-handedness.html": "Body &middot; Psychology",
                "hidden-regenerative-powers.html": "Health &middot; Nature",
                "impersonation-accounts.html": "Technology &middot; Psychology",
                "losing-spoken-words.html": "Language &middot; People",
                "mendelian-laws-broken.html": "Nature &middot; School",
                "sensory-system-pain-disease.html": "Health &middot; Body",
                "ozempic-obesity-revolution.html": "Health &middot; Social Life",
                "social-decisions-brain.html": "Psychology &middot; People",
                "fusion-energy.html": "Environment &middot; Technology",
                "grandmother-evolutionary-mystery.html": "People &middot; Nature",
                "living-most-creative-time.html": "Art & Culture &middot; Technology",
                "animal-cooperation-language.html": "Nature &middot; Language",
                "football-beats-shamrock.html": "Language &middot; Sports",
                "grandparents-mental-health.html": "People &middot; Psychology",
                "brain-improving-in-90s.html": "Health &middot; Psychology",
                "vliyanie-propagandy-deti.html": "Psychology &middot; People",
                "diwali-festival.html": "Social Life &middot; Art & Culture",
                "international-asteroid-day.html": "Nature &middot; Social Life",
                "family-remittances-day.html": "People &middot; Numbers",
                "international-peace-love-day.html": "Social Life &middot; Emotions",
                "lunar-new-year.html": "Social Life &middot; Time",
                "national-simplicity-day.html": "Psychology &middot; Social Life",
                "national-workaholics-day.html": "Work &middot; Health",
                "ai-opposite-of-art.html": "Art & Culture &middot; Technology",
                "accept-gay-child.html": "People &middot; Social Life",
                "amish-tripathi-quote.html": "Art & Culture &middot; Psychology",
                "barbra-streisand-quote.html": "Social Life &middot; Emotions",
                "dangerous-blindness-perspective.html": "Psychology &middot; Social Life",
                "feynman-education-quote.html": "School &middot; Psychology",
                "favorite-days-not-happened.html": "Time &middot; Emotions",
                "home-is-a-time.html": "Time &middot; Places",
                "jim-kwik-quote.html": "School &middot; Psychology",
                "feynman-study-hard.html": "School &middot; Psychology",
                "feynman-knowledge-isnt-free-elementary.html": "School &middot; Numbers",
                "feynman-knowledge-isnt-free-intermediate.html": "School &middot; Numbers",
                "feynman-knowledge-isnt-free.html": "School &middot; Numbers",
                "robin-williams-quote.html": "Emotions &middot; Social Life",
                "saudade.html": "Emotions &middot; Art & Culture",
                "sonder.html": "Psychology &middot; People",
                "stay-free-quote.html": "Psychology &middot; Social Life",
                "steve-jobs-quote.html": "Work &middot; Time",
                "compass-and-clock.html": "Time &middot; Travel",
                "women-mothers-tragedy.html": "People &middot; Emotions",
                "wisdom-of-socrates.html": "Psychology &middot; School",
                "you-are-a-soul.html": "Psychology &middot; Body",
                "must-die-first.html": "People &middot; Emotions",
                "anticipatory-grief.html": "Emotions &middot; Health",
                "aspiration-vs-inspiration.html": "Psychology &middot; Emotions",
                "blue-eyes-brown-eyes-experiment.html": "Psychology &middot; People",
                "bounded-rationality.html": "Psychology &middot; Work",
                "broken-children-grown-bodies.html": "Psychology &middot; People",
                "depersonalization.html": "Psychology &middot; Health",
                "finding-the-right-person.html": "People &middot; Social Life",
                "gilberts-law.html": "Work &middot; Psychology",
                "how-to-love-your-work.html": "Work &middot; Jobs",
                "impersonation.html": "Social Life &middot; Psychology",
                "kidlins-law.html": "Psychology &middot; Describing",
                "law-of-attraction.html": "Psychology &middot; Emotions",
                "limerence.html": "Emotions &middot; People",
                "murphys-law.html": "Psychology &middot; Describing",
                "nazi-race-propaganda.html": "People &middot; Psychology",
                "benjamin-franklin-effect.html": "Psychology &middot; Social Life",
                "conversations-avoid-enjoy.html": "Social Life &middot; Emotions",
                "fear-of-love-control.html": "Emotions &middot; People",
                "guilt-moving-abroad.html": "Travel &middot; Emotions",
                "maze-of-biases.html": "Psychology &middot; School",
                "power-of-habits.html": "Psychology &middot; Time",
                "psychology-of-action-bias.html": "Psychology &middot; Work",
                "psychology-of-smiles.html": "Body &middot; Social Life",
                "science-of-sleep.html": "Body &middot; Health",
                "brain-discipline-dopamine.html": "Psychology &middot; Health",
                "expert-defend-language-mistakes.html": "Language &middot; Psychology",
                "wilsons-law.html": "Work &middot; Numbers",
                "diversity-life.html": "People &middot; Social Life",
                "italian-gestures.html": "Social Life &middot; Body",
                "celebrity-life.html": "Social Life &middot; People",
                "private-cars.html": "Travel &middot; Environment",
                "high-rise-skyscrapers.html": "Places &middot; Nature",
                "pets-life.html": "Animals &middot; Emotions",
                "car-life.html": "Travel &middot; Social Life",
                "fridge-life.html": "Furniture & Home &middot; Food & Drink",
                "social-media-life.html": "Technology &middot; Psychology",
                "4-day-work-week.html": "Work &middot; Time",
                "assisted-dying.html": "Health &middot; Psychology",
                "human-cloning.html": "Technology &middot; Nature",
                "homework-ban.html": "School &middot; People",
                "the-devil-wears-prada.html": "Work &middot; Clothes",
                "fleabag.html": "Psychology &middot; People",
                "ratatouille.html": "Food & Drink &middot; Art & Culture",
                "serebryanye-konki.html": "Art & Culture &middot; Travel",
                "la-valla.html": "Places &middot; People",
                "breakfast-at-tiffanys.html": "Social Life &middot; Emotions",
                "the-queens-gambit.html": "Sports &middot; Psychology",
                "leave-the-world-behind.html": "Technology &middot; Environment",
                "gone-girl.html": "People &middot; Psychology",
                "still-alice.html": "Health &middot; People",
                "as-it-was.html": "Emotions &middot; Time",
                "bohemian-rhapsody.html": "Art & Culture &middot; Emotions",
                "voila.html": "Art & Culture &middot; Emotions",
                "salut.html": "Social Life &middot; Travel",
                "balance-ton-quoi.html": "People &middot; Social Life",
                "na-i-agapi-na.html": "Emotions &middot; People",
                "vyshe-domov.html": "Places &middot; Emotions",
                "toutes-les-machines-ont-le-coeur.html": "Technology &middot; Emotions",
                "ma-philosophie.html": "Psychology &middot; Emotions",
                "je-taime-comme-je-taime.html": "Emotions &middot; Places",
                "toi-mon-amour.html": "Emotions &middot; People",
                "oui-ou-non.html": "Emotions &middot; Social Life",
                "nos-ames-sont.html": "Psychology &middot; Time",
                "immobile.html": "Emotions &middot; Body",
                "la-nuit-nen-finit-plus.html": "Emotions &middot; Time",
                "le-soleil-noir.html": "Emotions &middot; Places",
                "la-tour-eiffel-est-pour-moi.html": "Places &middot; Social Life",
                "quelquun-pour-toi.html": "People &middot; Emotions",
                "bien-plus-fort.html": "Emotions &middot; Body",
                "un-premier-amour.html": "Emotions &middot; People",
                "one-of-the-greats.html": "Art & Culture &middot; People",
                "california-dreaming.html": "Time &middot; Emotions",
                "me-and-i.html": "Psychology &middot; Emotions",
                "angeleyes.html": "Emotions &middot; People",
                "mixed-up-world.html": "Psychology &middot; Emotions",
                "left-outside-alone.html": "Emotions &middot; Body",
                "casualties-of-war.html": "People &middot; Emotions",
                "love-kernels.html": "Psychology &middot; Emotions",
                "lets-generalize-about-men.html": "Psychology &middot; People",
                "so-maternal.html": "People &middot; Emotions",
                "face-your-fears.html": "Psychology &middot; Emotions",
                "appreciating-amy-winehouse-after-death.html": "Art & Culture &middot; Emotions",
                "does-euthanasia-reduce-suicide-rates.html": "Health &middot; Psychology",
                "ugly-produce-anti-waste.html": "Food & Drink &middot; Environment",
                "death-of-the-album.html": "Music &middot; Technology",
                "feeling-empty-after-series.html": "Art & Culture &middot; Emotions",
                "why-is-everyone-copying-me.html": "Psychology &middot; Social Life",
                "always-watched-in-a-crowd.html": "Psychology &middot; Social Life",
                "is-bad-weather-gods-anger.html": "Nature &middot; Psychology",
                "do-insects-hide-when-it-rains.html": "Nature &middot; Animals",
                "whether-raindrops-select-where-to-fall.html": "Nature &middot; Describing"
            };
            const themeLabel = sessionThemes[currentFile];
            if (themeLabel) {
                const item = document.createElement('div');
                item.id = 'dynamic-session-theme';
                item.className = 'meta-item';
                item.innerHTML = `<h4>Themes</h4><p>${themeLabel}</p>`;
                metaGrid.appendChild(item);
            }
        }
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
