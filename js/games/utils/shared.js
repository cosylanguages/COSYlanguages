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

const speak = (text, lang) => {
    if (!window.speechSynthesis) return;

    // Cancel ongoing speech to prevent overlaps and delays
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;

    const langMap = {
        'en': 'en-GB',
        'fr': 'fr-FR',
        'it': 'it-IT',
        'ru': 'ru-RU',
        'el': 'el-GR'
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

// Export to window
window.gameUtils = {
    getLang, t, startTimer, stopTimer, playGameSound, parseLessons, speak, seededShuffle, handleShare, isEmojiSupported, filterUnsupportedEmojis, showGameMessage, showGameConfirm
};
