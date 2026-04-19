// --- Shared Constants & Helpers for Games ---

const getLang = () => localStorage.getItem('language') || 'en';
const t = (key) => (typeof translations !== 'undefined' && translations[getLang()] && translations[getLang()][key]) || key;

let gameTimerInterval = null;

const startTimer = (displayId, duration, onEnd) => {
    clearInterval(gameTimerInterval);
    let timeLeft = duration;
    const display = document.getElementById(displayId);
    if (!display) return;

    const updateDisplay = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        if (timeLeft <= 10) display.style.color = 'var(--accent-color)';
        else display.style.color = 'inherit';
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
            playGameSound('error'); // Time's up sound
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

    // Cancel ongoing speech to prevent overlaps and delays
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    let textToSpeak = text;

    // Enhance number speaking for languages with fallbacks (like Tatar, Bashkir, Breton)
    // If the text is a pure digit string, try to find the word in numbersData
    if (/^\d+$/.test(text) && typeof window.numbersData !== 'undefined' && window.numbersData[lang]) {
        const langData = window.numbersData[lang];
        if (langData[text]) {
            textToSpeak = langData[text];
        }
    }

    msg.text = textToSpeak;

    // Use provided rate, or check localStorage, or default to 1.0
    if (rate) {
        msg.rate = rate;
    } else {
        const isSlow = localStorage.getItem('cosy_slow_speech') === 'true';
        msg.rate = isSlow ? 0.6 : 1.0;
    }

    const langMap = {
        'en': 'en-GB',
        'fr': 'fr-FR',
        'it': 'it-IT',
        'ru': 'ru-RU',
        'el': 'el-GR',
        'es': 'es-ES',
        'de': 'de-DE',
        'pt': 'pt-PT',
        'hy': 'hy-AM',
        'ka': 'ka-GE',
        'tt': 'ru-RU', // Fallback for Tatar/Bashkir to Russian voice if specific not available
        'ba': 'ru-RU',
        'br': 'fr-FR'  // Fallback for Breton to French
    };

    const targetLang = langMap[lang] || lang || 'en-GB';
    msg.lang = targetLang;

    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        let voice = voices.find(v => v.lang === targetLang);
        if (!voice) {
            voice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
        }
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

// Mulberry32 algorithm for deterministic random number generation
const mulberry32 = (a) => {
    return function() {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
};

// Helper to shuffle array with a seed
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

        // Find seed if not provided
        if (!params.seed) {
            const modal = btn.closest('.modal-overlay') || btn.closest('.modal-content');
            if (modal) {
                const seedInput = modal.querySelector('.game-seed');
                if (seedInput) {
                    params.seed = () => seedInput.value || Math.floor(Math.random() * 1000000);
                }
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

let supportCanvas;
let supportCtx;
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
    } catch (e) {
        return true;
    }
};

const filterUnsupportedEmojis = () => {
    try {
        if (window.emojiData) {
            window.emojiData = window.emojiData.filter(isEmojiSupported);
        }
        if (window.vocabularyData) {
            Object.keys(window.vocabularyData).forEach(lang => {
                window.vocabularyData[lang].forEach(item => {
                    if (item.emoji && !isEmojiSupported(item.emoji)) {
                        item.emoji = '';
                    }
                });
            });
        }
        if (window.lessonsData) {
            Object.keys(window.lessonsData).forEach(lang => {
                Object.keys(window.lessonsData[lang]).forEach(day => {
                    const lesson = window.lessonsData[lang][day];
                    if (lesson.words) {
                        lesson.words.forEach(item => {
                            if (item.emoji && !isEmojiSupported(item.emoji)) {
                                item.emoji = '';
                            }
                        });
                    }
                });
            });
        }
    } catch (e) {
        console.warn("Emoji filtering failed", e);
    }
};

// Automatically filter when loaded
if (typeof document !== 'undefined') {
    const onReady = () => {
        filterUnsupportedEmojis();
        // Pre-load voices for TTS
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

    // Remove existing message if any
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
    confirmBtn.onclick = () => {
        overlay.remove();
        if (onConfirm) onConfirm();
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cta-button secondary';
    cancelBtn.textContent = 'No';
    cancelBtn.onclick = () => {
        overlay.remove();
    };

    actions.appendChild(confirmBtn);
    actions.appendChild(cancelBtn);
    content.appendChild(msg);
    content.appendChild(actions);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
};

// Number word logic is now centralized in js/data/numbers.js
const getNumberWord = (n, lang) => {
    if (typeof window.getNumberWord === 'function') {
        return window.getNumberWord(n, lang);
    }
    return n.toString();
};


const populateThemes = (themeSelect, levelSelect, lang, dataSourceType = 'vocab') => {
    if (!themeSelect) return;
    const level = levelSelect ? levelSelect.value : 'all';
    const t = (key) => (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) || key;

    const currentVal = themeSelect.value;
    themeSelect.innerHTML = '<option value="all" data-translate-key="theme_all">' + t('theme_all') + '</option>';

    let themes = new Set();
    if (dataSourceType === 'speaking') {
        const speaking = window.speakingData && window.speakingData[lang];
        if (speaking) {
            ['debates', 'opinionArena', 'criticsCorner', 'talkThatTalk'].forEach(cat => {
                if (speaking[cat]) {
                    speaking[cat].forEach(item => {
                        if (level === 'all' || item.level === level) {
                            if (item.theme) themes.add(item.theme);
                        }
                    });
                }
            });
        }
    } else {
        const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
        vocab.forEach(item => {
            if (level === 'all' || item.level === level) {
                if (item.theme) themes.add(item.theme);
            }
        });
    }

    const themeList = Array.from(themes).sort();

    // Build mapping from sub-theme to common theme
    const subToCommon = {};
    if (typeof themeConfig !== 'undefined') {
        Object.values(themeConfig).forEach(levelData => {
            if (levelData.common_themes) {
                Object.entries(levelData.common_themes).forEach(([commonId, subThemes]) => {
                    Object.keys(subThemes).forEach(subId => {
                        subToCommon[subId] = commonId;
                    });
                });
            }
        });
    }

    // Group found themes by their common theme
    const grouped = {}; // commonThemeId -> [subThemeIds]
    const ungrouped = [];

    themeList.forEach(th => {
        const commonId = subToCommon[th];
        if (commonId) {
            if (!grouped[commonId]) grouped[commonId] = [];
            grouped[commonId].push(th);
        } else if (typeof COMMON_THEMES !== 'undefined' && COMMON_THEMES.some(ct => ct.id === th)) {
            // If the theme ID itself is a common theme ID (common in speaking data)
            if (!grouped[th]) grouped[th] = [];
            // We don't necessarily add the sub-theme here if it's already the common theme,
            // but we might want to allow it.
            if (!grouped[th].includes(th)) grouped[th].push(th);
        } else {
            ungrouped.push(th);
        }
    });

    // 1. Add Ungrouped Themes first
    ungrouped.forEach(th => {
        const opt = document.createElement('option');
        opt.value = th;
        opt.textContent = t('theme_' + th);
        opt.setAttribute('data-translate-key', 'theme_' + th);
        themeSelect.appendChild(opt);
    });

    // 2. Add Grouped Themes using <optgroup>
    if (typeof COMMON_THEMES !== 'undefined') {
        COMMON_THEMES.forEach(ct => {
            const subThemes = grouped[ct.id];
            if (subThemes && subThemes.length > 0) {
                const optgroup = document.createElement('optgroup');
                // Use localized label for the group
                optgroup.label = t(ct.label) || ct.id;

                // Add a "Group: [Common Theme]" option for random/all selection within the group
                const groupAllOpt = document.createElement('option');
                groupAllOpt.value = 'group:' + ct.id;
                groupAllOpt.textContent = 'All ' + (t(ct.label) || ct.id);
                optgroup.appendChild(groupAllOpt);

                subThemes.forEach(th => {
                    const opt = document.createElement('option');
                    opt.value = th;
                    opt.textContent = t('theme_' + th);
                    opt.setAttribute('data-translate-key', 'theme_' + th);
                    optgroup.appendChild(opt);
                });
                themeSelect.appendChild(optgroup);
            }
        });
    } else {
        // Fallback for missing COMMON_THEMES
        themeList.forEach(th => {
            if (!ungrouped.includes(th)) {
                const opt = document.createElement('option');
                opt.value = th;
                opt.textContent = t('theme_' + th);
                opt.setAttribute('data-translate-key', 'theme_' + th);
                themeSelect.appendChild(opt);
            }
        });
    }

    if (Array.from(themeSelect.options).some(opt => opt.value === currentVal)) {
        themeSelect.value = currentVal;
    }
};

const isThemeMatch = (itemTheme, selectedTheme) => {
    if (!selectedTheme || selectedTheme === 'all') return true;
    if (!itemTheme) return false;

    if (selectedTheme.startsWith('group:')) {
        const commonId = selectedTheme.replace('group:', '');
        // Check themeConfig for sub-themes belonging to this group
        if (typeof themeConfig !== 'undefined') {
            for (const lvData of Object.values(themeConfig)) {
                if (lvData.common_themes && lvData.common_themes[commonId]) {
                    if (Object.keys(lvData.common_themes[commonId]).includes(itemTheme)) return true;
                }
            }
        }
        // Fallback: if the item's theme is the common ID itself (common in speaking data)
        if (itemTheme === commonId) return true;

        // Final fallback for legacy common theme prefixes
        if (commonId === 'numbers_math' && itemTheme.startsWith('numbers_')) return true;
        if (commonId === 'places_geography' && itemTheme.startsWith('places_')) return true;

        return false;
    }

    // Legacy hardcoded group fallbacks
    if (selectedTheme === 'numbers_all') return itemTheme.startsWith('numbers_');
    if (selectedTheme === 'places_all') return itemTheme.startsWith('places_');

    return itemTheme === selectedTheme;
};

const getVocabPool = (lang, level, theme) => {
  const pool = (window.vocabularyData?.[lang] || []);
  const levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];
  const targetIdx = levels.indexOf(level);

  return pool.filter(item => {
    const levelMatch = level === "all" || (levels.indexOf(item.level || "starter") <= targetIdx);
    const themeMatch = !theme || theme === "all" || isThemeMatch(item.theme, theme);
    return levelMatch && themeMatch;
  });
};

const gameSpeak = (text, lang) => speak(text, lang);

const addGamePoints = (points) => {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    localStorage.setItem('cosy_total_points', total + points);
    // Maybe show a mini notification
};

window.gameUtils = {
    getLang, t, startTimer, stopTimer, playGameSound, parseLessons, speak, createConfetti, seededShuffle, handleShare, isEmojiSupported, filterUnsupportedEmojis, getVocabPool, showGameMessage, showGameConfirm, getNumberWord, gameSpeak, mulberry32, populateThemes, isThemeMatch, addGamePoints
};
