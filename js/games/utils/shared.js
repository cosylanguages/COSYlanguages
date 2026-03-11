// --- Shared Constants & Helpers for Games ---

const getLang = () => localStorage.getItem('language') || 'en';
const t = (key) => (window.translations && window.translations[getLang()] && window.translations[getLang()][key]) || key;

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
        if (timeLeft <= 0) {
            clearInterval(gameTimerInterval);
            if (onEnd) onEnd();
        }
    }, 1000);
};

const stopTimer = () => clearInterval(gameTimerInterval);

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
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang === 'en' ? 'en-GB' :
               lang === 'fr' ? 'fr-FR' :
               lang === 'it' ? 'it-IT' :
               lang === 'ru' ? 'ru-RU' :
               lang === 'el' ? 'el-GR' : 'en-GB';
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
            const copiedText = (window.translations && window.translations[lang] && window.translations[lang]['copied']) ? window.translations[lang]['copied'] : "Copied! ✅";
            btn.innerHTML = copiedText;
            setTimeout(() => btn.innerHTML = originalText, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert("Link: " + shareUrl);
        });
    });
};

// Export to window
window.gameUtils = {
    getLang, t, startTimer, stopTimer, parseLessons, speak, seededShuffle, handleShare
};
