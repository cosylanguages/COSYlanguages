// --- Shared Constants & Helpers for Games ---

(function() {
    'use strict';

    const COSY_THEME_TREE = {
      animals:['pets','farm','wild','insects','birds','sea'],
      body:['face','limbs','organs','senses','health','appearance'],
      clothes:['everyday','formal','accessories','weather_gear'],
      colours:['basic','shades','materials'],
      describing:['size_shape','texture','quality','quantity','comparing'],
      emotions:['positive','negative','complex','expressing'],
      environment:['ecology','climate','recycling','natural_disasters'],
      food_drink:['fruit','vegetables','drinks','cooking','meals','snacks','diet'],
      furniture:['rooms','furniture_items','appliances','household_items'],
      health_medicine:['symptoms','treatment','hospital','wellbeing','sport_injury'],
      jobs:['professions','workplace','career','business_lang'],
      language:['grammar_terms','phonetics','discourse','learning'],
      music:['instruments','genres','performance','listening'],
      nature:['landscape','weather','plants','seasons','sky'],
      numbers:['cardinal','ordinal','fractions','money'],
      people:['family','relationships','nationality','physical_desc','character'],
      places:['city','buildings','rooms','geography','landmarks','countryside'],
      school:['stationery','subjects','classroom','studying'],
      shopping:['stores','items','transactions','online'],
      social:['celebrations','going_out','invitations','communication'],
      sports:['team_sports','individual','gym','outdoor','water_sports'],
      technology:['devices','internet','software','social_media'],
      time:['clock','days','months','seasons','periods','frequency'],
      travel:['transport','accommodation','tourism','directions','documents'],
      work:['office','meetings','career','documents','remote_work'],
      art_culture:['art','literature','film','theatre','traditions'],
      psychology:['biases','cognitive_processes','behavior','psychoanalysis','concepts']
    };

    const getLang = () => localStorage.getItem('language') || 'en';
    const t = (key) => (typeof translations !== 'undefined' && translations[getLang()] && translations[getLang()][key]) || key;

    let gameTimerInterval = null;

    const renderTimerRing = (seconds, total) => {
        const r = 36, circ = 2 * Math.PI * r;
        const offset = circ * (1 - seconds / total);
        const style = getComputedStyle(document.documentElement);
        const color = seconds > total * 0.4 ? (style.getPropertyValue('--sage') || '#6b8f71') :
                      seconds > total * 0.2 ? (style.getPropertyValue('--honey') || '#e8a838') : '#a32d2d';
        return `
          <div class="timer-ring-wrap">
            <div class="timer-ring">
              <svg width="90" height="90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r="${r}" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="6"/>
                <circle class="timer-ring-progress" cx="45" cy="45" r="${r}" fill="none" stroke="${color}" stroke-width="6"
                  stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
                  style="transition:stroke-dashoffset .9s linear,stroke .3s"/>
              </svg>
              <div class="timer-inner">
                <div class="timer-val">${seconds}</div>
                <div class="timer-lbl">sec</div>
              </div>
            </div>
          </div>`;
    };

    const updateTimerRing = (container, seconds, total) => {
        if (!container) return;
        const r = 36, circ = 2 * Math.PI * r;
        const offset = circ * (1 - seconds / total);
        const style = getComputedStyle(document.documentElement);
        const color = seconds > total * 0.4 ? (style.getPropertyValue('--sage') || '#6b8f71') :
                      seconds > total * 0.2 ? (style.getPropertyValue('--honey') || '#e8a838') : '#a32d2d';
        const valDisplay = container.querySelector('.timer-val');
        if (valDisplay) valDisplay.textContent = seconds;
        const progressCircle = container.querySelector('.timer-ring-progress');
        if (progressCircle) {
            progressCircle.setAttribute('stroke-dashoffset', offset);
            progressCircle.setAttribute('stroke', color);
        }
    };

    const startTimer = (displayId, duration, onEnd) => {
        clearInterval(gameTimerInterval);
        let timeLeft = duration;
        let totalTime = duration;
        const display = document.getElementById(displayId);
        if (!display) return;

        const updateDisplay = () => {
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;

            if (display.classList.contains('timer-val')) {
                 display.textContent = timeLeft;
            } else {
                 display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            if (timeLeft <= 10) display.style.color = 'var(--accent-color)';
            else display.style.color = 'inherit';

            const ringWrap = display.closest('.timer-ring-wrap');
            if (ringWrap) {
                updateTimerRing(ringWrap, timeLeft, totalTime);
            }
        };

        updateDisplay();
        gameTimerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft > 0 && timeLeft <= 5) {
                playGameSound('timer-tick');
            }
            if (timeLeft <= 0) {
                clearInterval(gameTimerInterval);
                playGameSound('error');
                if (onEnd) onEnd();
            }
        }, 1000);
    };

    const stopTimer = () => clearInterval(gameTimerInterval);

    let audioCtx = null;
    const initAudio = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    };

    const playGameSound = (type) => {
        try {
            initAudio();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            const now = audioCtx.currentTime;

            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'success') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
                osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'error') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(150, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                osc.start(now);
                osc.stop(now + 0.2);
            } else if (type === 'timer-tick') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1200, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            }
        } catch (e) {
            console.warn("Sound playback failed", e);
        }
    };

    const parseLessons = (input) => {
        const lessons = new Set();
        if (!input) return lessons;
        input.split(',').forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) lessons.add(i);
            } else {
                lessons.add(Number(part));
            }
        });
        return lessons;
    };

    const speak = (text, lang, rate) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance();
        let textToSpeak = text;
        if (/^\d+$/.test(text) && typeof window.numbersData !== 'undefined' && window.numbersData[lang]) {
            const langData = window.numbersData[lang];
            if (langData[text]) textToSpeak = langData[text];
        }
        msg.text = textToSpeak;
        if (rate) {
            msg.rate = rate;
        } else {
            const isSlow = localStorage.getItem('cosy_slow_speech') === 'true';
            msg.rate = isSlow ? 0.6 : 1.0;
        }
        const pitch = localStorage.getItem('cosy_voice_pitch');
        if (pitch) msg.pitch = parseFloat(pitch);
        const langMap = {
            'en': 'en-GB', 'fr': 'fr-FR', 'it': 'it-IT', 'ru': 'ru-RU', 'el': 'el-GR',
            'es': 'es-ES', 'de': 'de-DE', 'pt': 'pt-PT', 'hy': 'hy-AM', 'ka': 'ka-GE',
            'tt': 'ru-RU', 'ba': 'ru-RU', 'br': 'fr-FR'
        };
        const targetLang = langMap[lang] || lang || 'en-GB';
        msg.lang = targetLang;
        const voices = window.speechSynthesis.getVoices();
        const preferredVoiceName = localStorage.getItem('cosy_preferred_voice');
        if (voices.length > 0) {
            let voice = null;
            if (preferredVoiceName) voice = voices.find(v => v.name === preferredVoiceName);
            if (!voice) voice = voices.find(v => v.lang === targetLang);
            if (!voice) voice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
            if (voice) msg.voice = voice;
        }
        window.speechSynthesis.speak(msg);
    };

    const createConfetti = () => {
        const emojis = ['🎉', '✨', '🎈', '🎊', '🥳', '🌟'];
        const container = document.body;
        for (let i = 0; i < 40; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            container.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    };

    const mulberry32 = (a) => {
        return function() {
            let t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    };

    const seededShuffle = (array, seed) => {
        const rng = mulberry32(seed);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleShare = (btnId, params) => {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        btn.addEventListener('click', () => {
            const baseUrl = window.location.href.split('?')[0];
            const queryParts = [];
            if (!params.seed) {
                const modal = btn.closest('.modal-overlay') || btn.closest('.modal-content');
                if (modal) {
                    const seedInput = modal.querySelector('.game-seed');
                    if (seedInput) params.seed = () => seedInput.value || Math.floor(Math.random() * 1000000);
                }
            }
            for (const [k, v] of Object.entries(params)) {
                const val = typeof v === 'function' ? v() : v;
                if (val) queryParts.push(`${k}=${encodeURIComponent(val)}`);
            }
            queryParts.push('embed=true');
            const shareUrl = `${baseUrl}?${queryParts.join('&')}`;
            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = btn.innerHTML;
                const lang = getLang();
                const copiedText = (typeof translations !== 'undefined' && translations[lang] && translations[lang]['copied']) ? translations[lang]['copied'] : "Copied! ✅";
                btn.innerHTML = copiedText;
                setTimeout(() => btn.innerHTML = originalText, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                showGameMessage(btn.parentElement, "Link: " + shareUrl);
            });
        });
    };

    let supportCanvas, supportCtx;
    const isEmojiSupported = (emoji) => {
        if (typeof document === 'undefined') return true;
        try {
            if (!supportCanvas) {
                supportCanvas = document.createElement('canvas');
                supportCtx = supportCanvas.getContext('2d', { willReadFrequently: true });
            }
            const size = 20;
            supportCanvas.width = size * 2;
            supportCanvas.height = size;
            supportCtx.font = size + 'px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Arial, sans-serif';
            supportCtx.textBaseline = 'top';
            supportCtx.clearRect(0, 0, size * 2, size);
            supportCtx.fillText(emoji, 0, 0);
            const emojiData = supportCtx.getImageData(0, 0, size, size).data;
            supportCtx.fillText('\uffff', size, 0);
            const tofuData = supportCtx.getImageData(size, 0, size, size).data;
            for (let i = 0; i < emojiData.length; i++) {
                if (emojiData[i] !== tofuData[i]) return true;
            }
            return false;
        } catch (e) { return true; }
    };

    const filterUnsupportedEmojis = () => {
        try {
            if (window.emojiData) window.emojiData = window.emojiData.filter(isEmojiSupported);
            if (window.vocabularyData) {
                Object.keys(window.vocabularyData).forEach(lang => {
                    window.vocabularyData[lang].forEach(item => { if (item.emoji && !isEmojiSupported(item.emoji)) item.emoji = ''; });
                });
            }
            if (window.lessonsData) {
                Object.keys(window.lessonsData).forEach(lang => {
                    Object.keys(window.lessonsData[lang]).forEach(day => {
                        const lesson = window.lessonsData[lang][day];
                        if (lesson.words) lesson.words.forEach(item => { if (item.emoji && !isEmojiSupported(item.emoji)) item.emoji = ''; });
                    });
                });
            }
        } catch (e) { console.warn("Emoji filtering failed", e); }
    };

    if (typeof document !== 'undefined') {
        const onReady = () => {
            filterUnsupportedEmojis();
            if (window.speechSynthesis) {
                window.speechSynthesis.getVoices();
                if (window.speechSynthesis.onvoiceschanged !== undefined) {
                    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
                }
            }
        };
        if (document.readyState === 'complete') onReady();
        else window.addEventListener('load', onReady);
    }

    const showGameMessage = (containerOrId, message, type = 'info') => {
        const container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;
        if (!container) return;
        const existing = container.querySelector('.game-message-overlay');
        if (existing) existing.remove();
        const msgDiv = document.createElement('div');
        msgDiv.className = `game-message-overlay ${type}`;
        msgDiv.textContent = message;
        container.appendChild(msgDiv);
        setTimeout(() => {
            if (msgDiv.parentElement) {
                msgDiv.style.opacity = '0';
                msgDiv.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => msgDiv.remove(), 500);
            }
        }, 3000);
    };

    const showGameConfirm = (message, onConfirm) => {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.style.display = 'flex';
        overlay.style.zIndex = '20000';
        const content = document.createElement('div');
        content.className = 'modal-content glass';
        content.style.maxWidth = '400px';
        content.style.padding = '2rem';
        const msg = document.createElement('p');
        msg.textContent = message;
        msg.style.marginBottom = '2rem';
        msg.style.fontSize = '1.1rem';
        msg.style.fontWeight = '600';
        const actions = document.createElement('div');
        actions.style.display = 'flex';
        actions.style.gap = '1rem';
        actions.style.justifyContent = 'center';
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'cta-button primary';
        confirmBtn.textContent = 'Yes';
        confirmBtn.onclick = () => { overlay.remove(); if (onConfirm) onConfirm(); };
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cta-button secondary';
        cancelBtn.textContent = 'No';
        cancelBtn.onclick = () => overlay.remove();
        actions.appendChild(confirmBtn);
        actions.appendChild(cancelBtn);
        content.appendChild(msg);
        content.appendChild(actions);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
    };

    const getNumberWord = (n, lang) => {
        if (typeof window.getNumberWord === 'function') return window.getNumberWord(n, lang);
        return n.toString();
    };

    const populateThemes = (themeSelect, levelSelect, lang, dataSourceType = 'vocab') => {
        if (!themeSelect) return;
        const level = levelSelect ? levelSelect.value : 'all';
        const currentVal = themeSelect.value;
        themeSelect.innerHTML = '<option value="all" data-translate-key="theme_all">' + t('theme_all') + '</option>';
        let themes = new Set();
        if (dataSourceType === 'speaking') {
            const speaking = window.speakingData && window.speakingData[lang];
            if (speaking) {
                ['debates', 'opinionArena', 'criticsCorner', 'talkThatTalk'].forEach(cat => {
                    if (speaking[cat]) speaking[cat].forEach(item => { if (level === 'all' || item.level === level) if (item.theme) themes.add(item.theme); });
                });
            }
        } else if (dataSourceType === 'pronunciation') {
            const currKey = `${lang.toLowerCase()}_${level === 'starter' || level === 'all' ? 'a1' : (level === 'elementary' ? 'a2' : level)}`;
            const currData = window.curriculumData?.[currKey] || [];
            currData.forEach(unit => {
                (unit.lessons || []).forEach(lesson => {
                    if (lesson.pronunciation) lesson.pronunciation.forEach(p => { if (p.point) themes.add(p.point); });
                });
            });
        } else {
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            const levelId = (level && level !== "all") ? window.levelShortToId(level) : "all";
            vocab.forEach(item => { if (levelId === 'all' || item.level === levelId) if (item.theme) themes.add(item.theme); });
        }
        const themeList = Array.from(themes).sort();
        const subToCommon = {};
        if (typeof themeConfig !== 'undefined') {
            Object.values(themeConfig).forEach(levelData => {
                if (levelData.common_themes) {
                    Object.entries(levelData.common_themes).forEach(([commonId, subThemes]) => {
                        Object.keys(subThemes).forEach(subId => { subToCommon[subId] = commonId; });
                    });
                }
            });
        }
        const grouped = {}, ungrouped = [];
        themeList.forEach(th => {
            const commonId = subToCommon[th];
            if (commonId) { if (!grouped[commonId]) grouped[commonId] = []; grouped[commonId].push(th); }
            else if (typeof COMMON_THEMES !== 'undefined' && COMMON_THEMES.some(ct => ct.id === th)) { if (!grouped[th]) grouped[th] = []; if (!grouped[th].includes(th)) grouped[th].push(th); }
            else { ungrouped.push(th); }
        });
        ungrouped.forEach(th => {
            const opt = document.createElement('option'); opt.value = th; opt.textContent = t('theme_' + th);
            opt.setAttribute('data-translate-key', 'theme_' + th); themeSelect.appendChild(opt);
        });
        if (typeof COMMON_THEMES !== 'undefined') {
            COMMON_THEMES.forEach(ct => {
                const subThemes = grouped[ct.id];
                if (subThemes && subThemes.length > 0) {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = t(ct.label) || ct.id;
                    const groupAllOpt = document.createElement('option');
                    groupAllOpt.value = 'group:' + ct.id;
                    groupAllOpt.textContent = 'All ' + (t(ct.label) || ct.id);
                    optgroup.appendChild(groupAllOpt);
                    subThemes.forEach(th => {
                        const opt = document.createElement('option'); opt.value = th; opt.textContent = t('theme_' + th);
                        opt.setAttribute('data-translate-key', 'theme_' + th); optgroup.appendChild(opt);
                    });
                    themeSelect.appendChild(optgroup);
                }
            });
        } else {
            themeList.forEach(th => {
                if (!ungrouped.includes(th)) {
                    const opt = document.createElement('option'); opt.value = th; opt.textContent = t('theme_' + th);
                    opt.setAttribute('data-translate-key', 'theme_' + th); themeSelect.appendChild(opt);
                }
            });
        }
        if (Array.from(themeSelect.options).some(opt => opt.value === currentVal)) themeSelect.value = currentVal;
    };

    const isThemeMatch = (itemTheme, selectedTheme) => {
        if (!selectedTheme || selectedTheme === 'all') return true;
        if (!itemTheme) return false;
        if (!selectedTheme.includes(':')) return itemTheme === selectedTheme;
        if (selectedTheme.startsWith('group:')) {
            const parentTheme = selectedTheme.replace('group:', '');
            const children = COSY_THEME_TREE[parentTheme] || [];
            return itemTheme === parentTheme || children.includes(itemTheme);
        }
        return false;
    };

    function toFullLevelId(val) {
      const byShort = (window.COSY_LEVELS || []).find(l => l.short === val.toUpperCase());
      if (byShort) return byShort.id;
      return val.toLowerCase().replace(/-/g, '_');
    }

    function filterVocabulary(entries, { lang, level, theme, subTheme, category, strict }) {
        const categoryToForm = {
            'Vocabulary': (strict && category === 'Vocabulary') ? ['noun', 'adjective'] : ['noun', 'adjective', 'other'],
            'Grammar': ['verb', 'preposition', 'conjunction', 'determiner', 'pronoun', 'adverb'],
            'Speaking': ['speaking'],
            'Pronunciation': ['pronunciation']
        };
        const targetForms = categoryToForm[category];
        const levelId = (level && level !== "all") ? (typeof window.levelShortToId === 'function' ? window.levelShortToId(level) : level) : "all";
        return entries.filter(entry => {
            if (lang && entry.language && entry.language.toLowerCase() !== lang.toLowerCase()) if (!entry.lang || entry.lang.toLowerCase() !== lang.toLowerCase()) return false;
            if (levelId && levelId !== 'all' && entry.level) {
                const eLevel = entry.level.toLowerCase();
                const tLevel = levelId.toLowerCase();
                if (eLevel !== tLevel) {
                    const eId = (typeof window.levelShortToId === 'function') ? window.levelShortToId(eLevel) : eLevel;
                    const tId = (typeof window.levelShortToId === 'function') ? window.levelShortToId(tLevel) : tLevel;
                    if (eId !== tId) return false;
                }
            }
            if (category && targetForms && entry.form && !targetForms.includes(entry.form)) return false;
            if (theme && theme !== 'all' && !isThemeMatch(entry.theme, theme)) return false;
            if (subTheme && subTheme !== 'all' && (entry.sub_theme || '') !== subTheme) return false;
            return true;
        });
    }

    const getVocabPool = (lang, level, theme, subTheme, options = {}) => {
      let keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'nationalitiesData', 'grammarData', 'grammarElements'];
      if (!options.excludeExtra) keys.push('locationsData', 'peopleData');
      let pool = [];
      keys.forEach(key => { if (window[key] && window[key][lang]) pool = pool.concat(window[key][lang]); });
      const norm = v => v.toLowerCase().replace(/-/g, '_');
      const normalizedLevel = (level && level !== 'all') ? toFullLevelId(level) : 'all';
      return pool.filter(item => {
        if (lang && item.language && item.language.toLowerCase() !== lang.toLowerCase()) if (!item.lang || item.lang.toLowerCase() !== lang.toLowerCase()) return false;
        const levelMatch = normalizedLevel === 'all' || (item.level && norm(item.level) === normalizedLevel);
        const themeMatch = isThemeMatch(item.theme, theme);
        const subThemeMatch = !subTheme || subTheme === 'all' || (item.sub_theme && item.sub_theme === subTheme);
        return levelMatch && themeMatch && subThemeMatch;
      });
    };

    const addGamePoints = (points) => {
        const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
        const newTotal = total + points;
        localStorage.setItem('cosy_total_points', newTotal);
        ['total-pts', 'nav-pts', 'points-val'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = newTotal.toLocaleString(); });
        const lastDate = localStorage.getItem('last_practice_date'), today = new Date().toDateString();
        if (lastDate !== today) {
            let streak = parseInt(localStorage.getItem('practice_streak') || 0);
            if (lastDate) {
                const lastPractice = new Date(lastDate), todayDate = new Date(today);
                const diffTime = Math.abs(todayDate - lastPractice);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays === 1) streak++; else streak = 1;
            } else streak = 1;
            localStorage.setItem('practice_streak', streak);
            localStorage.setItem('last_practice_date', today);
            ['streak-val', 'nav-streak', 'streak-count'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = streak; });
        }
    };

    async function loadLevelData(lang, level) {
        if (window.COSY && window.COSY.loadLanguageData) await window.COSY.loadLanguageData(lang, level);
        if (window.location.pathname.includes('/games/')) {
            const prefix = (window.COSY && window.COSY.getPrefix) ? window.COSY.getPrefix() : '../';
            const l = window.getLangCode(lang);
            const gameDataPath = `${prefix}games/data/${l}/game_data.js`;
            if (!document.querySelector(`script[src*="${gameDataPath}"]`)) {
                await new Promise((resolve) => {
                    const s = document.createElement('script');
                    s.src = gameDataPath; s.onload = () => resolve(); s.onerror = () => resolve();
                    document.head.appendChild(s);
                });
            }
        }
    }

    function getGameData(targetLang) {
        const lang = targetLang || localStorage.getItem('language') || 'en';
        const enData = window.gameData?.['en'] || { fluency: [], opinions: [], battle: [], critic: [] };
        const langData = window.gameData?.[lang] || { fluency: [], opinions: [], battle: [], critic: [] };

        const isEnglishFallback = (lang === 'en' || !window.gameData?.[lang]);

        if (langData.opinion && !langData.opinions) langData.opinions = langData.opinion;

        const getPool = (key) => {
            const pool = langData[key];
            if (Array.isArray(pool) && pool.length > 0) return JSON.parse(JSON.stringify(pool));
            if (langData[key] && !Array.isArray(pool) && Object.keys(pool).length > 0) return JSON.parse(JSON.stringify(pool));
            return JSON.parse(JSON.stringify(enData[key] || []));
        };

        const data = {
            fluency: getPool('fluency'), opinions: getPool('opinions'), battle: getPool('battle'),
            critic: getPool('critic'), action: getPool('action'), identity: getPool('identity'),
            wordlinker: getPool('wordlinker'), etymology: getPool('etymology'), storychain: getPool('storychain')
        };

        const s = window.speakingData?.[lang] || {};
        const extractText = (item) => typeof item === 'string' ? item : (item.topic || item.text || item.t || item.word || '');
        const mergeSpecialized = (key, specializedArray) => {
            if (!specializedArray || specializedArray.length === 0) return;
            const items = specializedArray.map(item => ['battle', 'fluency', 'opinions', 'critic'].includes(key) ? item : extractText(item));
            data[key] = [...(data[key] || []), ...items];
        };
        mergeSpecialized('fluency', s.talkThatTalk); mergeSpecialized('opinions', s.opinions);
        mergeSpecialized('battle', s.debates); mergeSpecialized('critic', s.quotes);

        let vocab = (window.vocabularyData && window.vocabularyData[lang]) ? [...window.vocabularyData[lang]] : [];
        if (window.phrasesData && window.phrasesData[lang]) {
            Object.values(window.phrasesData[lang]).flat().forEach(p => {
                vocab.push({ word: p.phrase, definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
            });
        }
        if (vocab.length > 0) {
            const professions = vocab.filter(v => v.theme && v.theme.includes('professions')).map(v => ({
                person: (v.article ? v.article + ' ' : '') + v.word,
                clue: v.definitions && v.definitions[0] ? v.definitions[0].text : ''
            }));
            if (professions.length > 5) {
                if (isEnglishFallback) data.identity = professions;
                else data.identity = [...(data.identity || []), ...professions];
            }
            const themes = { 'A1': ['animals', 'home', 'food', 'nature'], 'A2': ['local_places', 'education', 'hobbies'], 'B1': ['workplace', 'shopping', 'transport'], 'B2': ['culture', 'abstract', 'society'] };
            for (let lvl in themes) {
                const words = vocab.filter(v => themes[lvl].some(t => v.theme && v.theme.includes(t))).map(v => v.word);
                if (words.length > 10) {
                    if (!data.action) data.action = {};
                    if (isEnglishFallback) data.action[lvl] = words;
                    else data.action[lvl] = [...(data.action[lvl] || []), ...words];
                }
            }
            const etymVocab = vocab.filter(v => v.etymology).map(v => {
                if (typeof v.etymology === 'object') {
                    const answer = v.etymology.origin_lang;
                    const options = [answer, 'Germanic', 'Latin', 'Greek', 'French', 'Arabic', 'Italian'].filter((val, index, self) => self.indexOf(val) === index);
                    while (options.length < 4) options.push('Unknown');
                    let path = `${v.etymology.origin_word || v.word} (${v.etymology.origin_lang})`;
                    if (v.etymology.entered_via) path = `${path} via ${v.etymology.entered_via}`;
                    return { word: v.word, answer: answer, options: options.slice(0, 4).sort(() => Math.random() - 0.5), level: 'easy', path: path, detail: v.etymology.origin_meaning ? `Originally meaning "${v.etymology.origin_meaning}".` : `Traceable to ${answer} roots.` };
                }
                const parts = v.etymology.split(' → ');
                let answer = 'Unknown';
                for (let i = parts.length - 1; i >= 0; i--) {
                    const match = parts[i].match(/\(([^)]+)\)/);
                    if (match) { answer = match[1].split(/[/?]/)[0].trim(); break; }
                }
                const options = [answer, 'Germanic', 'Latin', 'Greek', 'French', 'Arabic', 'Italian'].filter((val, index, self) => self.indexOf(val) === index);
                while (options.length < 4) options.push('Unknown');
                return { word: v.word, answer: answer, options: options.slice(0, 4).sort(() => Math.random() - 0.5), level: 'easy', path: v.etymology, detail: `Traceable to ${answer} roots.` };
            });
            if (etymVocab.length > 0) data.etymology = [...(data.etymology || []), ...etymVocab];
        }
        return data;
    }

    window.gameUtils = {
        getLang, t, startTimer, stopTimer, renderTimerRing, updateTimerRing, playGameSound, parseLessons, speak, createConfetti, seededShuffle, handleShare, isEmojiSupported, filterUnsupportedEmojis, getVocabPool, filterVocabulary, showGameMessage, showGameConfirm, getNumberWord, gameSpeak: speak, mulberry32, populateThemes, isThemeMatch, addGamePoints,
        loadLevelData, getGameData
    };
})();
