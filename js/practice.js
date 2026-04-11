window.updateCategoryUI = function() {
    const container = document.getElementById("practice-container");
    const selected = document.querySelector('input[name="practice-cat"]:checked');
    if (!container || !selected) return;

    const categoryId = selected.id.replace('cat-', '');
    container.classList.remove('cat-vocab', 'cat-grammar', 'cat-speaking');
    container.classList.add('cat-' + categoryId);

    // Sync mobile active states
    document.querySelectorAll('.cat-pill').forEach(pill => {
        pill.classList.remove('active-vocab', 'active-grammar', 'active-speaking');
        if (pill.classList.contains('cat-' + categoryId + '-pill')) {
            pill.classList.add('active-' + categoryId);
        }
    });

    populatePracticeThemes(categoryId);

    const taskCheckboxes = document.querySelectorAll('.advanced-options input[type="checkbox"]');

    const configureTask = (id, shouldBeChecked, isAvailable) => {
        const cb = document.getElementById(id);
        if (!cb) return;
        cb.checked = shouldBeChecked;
        const label = cb.closest('.toggle-chip');
        if (label) {
            if (isAvailable) label.classList.remove('hidden');
            else label.classList.add('hidden');
        }
    };

    if (categoryId === 'speaking') {
        configureTask('type-cv', true, true);
        ['type-mc', 'type-ls', 'type-sc', 'type-op', 'type-cl', 'type-tf', 'type-ga', 'type-np', 'type-ws'].forEach(id => configureTask(id, false, false));
    } else if (categoryId === 'grammar') {
        const grammarTasks = ['type-ga', 'type-ws', 'type-cl', 'type-np', 'type-mc'];
        taskCheckboxes.forEach(cb => {
            let isGrammar = grammarTasks.includes(cb.id);
            if (currentPractice.language === 'en' && cb.id === 'type-ga') isGrammar = false;
            configureTask(cb.id, isGrammar, isGrammar);
        });
        ['type-cv', 'type-ls', 'type-sc', 'type-op', 'type-tf'].forEach(id => configureTask(id, false, false));
    } else {
        // vocab
        const vocabTasks = ['type-mc', 'type-ls', 'type-sc', 'type-op', 'type-cl', 'type-tf'];
        taskCheckboxes.forEach(cb => {
            const isVocab = vocabTasks.includes(cb.id);
            configureTask(cb.id, isVocab, isVocab);
        });
        ['type-cv', 'type-ga', 'type-np', 'type-ws'].forEach(id => configureTask(id, false, false));
    }
};

const SESSION_STORAGE_KEY = 'cosy_practice_session';

var currentPractice = {
    language: 'en',
    lessons: [],
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    score: 0,
    wheelItems: [],
    hintLevel: 0,
    usedHint: false
};

function saveSession() {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentPractice));
}

function loadSession() {
    const saved = localStorage.getItem(SESSION_STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.words && parsed.words.length > 0) {
                currentPractice = parsed;
                return true;
            }
        } catch (e) {
            console.error("Error loading session:", e);
        }
    }
    return false;
}

function clearSession() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
}

function populatePracticeThemes(categoryId) {
    const themeSelect = document.getElementById('practice-theme');
    const levelSelect = document.getElementById('practice-level');
    if (!themeSelect || !levelSelect) return;

    const lang = currentPractice.language || 'en';
    const selectedLevel = levelSelect.value;

    if (typeof translations === 'undefined') {
        console.warn("Translations object not found");
        return;
    }
    const t = translations[lang] || translations['en'] || {};

    themeSelect.innerHTML = '';
    const subThemeSelect = document.getElementById('practice-sub-theme');
    const subThemeGroup = document.querySelector('.sub-theme-group');
    if (subThemeSelect) subThemeSelect.innerHTML = '';
    if (subThemeGroup) subThemeGroup.classList.add('hidden');

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = t['theme_all'] || 'All Themes';
    allOpt.setAttribute('data-translate-key', 'theme_all');
    themeSelect.appendChild(allOpt);

    let themes = [];

    if (categoryId === 'grammar') {
        if (typeof COMMON_GRAMMAR_THEMES !== 'undefined') {
            COMMON_GRAMMAR_THEMES.forEach(ct => {
                const opt = document.createElement('option');
                opt.value = ct.id;
                opt.textContent = t[ct.label] || ct.id;
                opt.setAttribute('data-translate-key', ct.label);
                themeSelect.appendChild(opt);
            });
            populateSubThemes();
            return;
        }
    } else if (categoryId === 'speaking') {
        const sd = speakingData[lang] || {};
        const availableThemes = new Set();
        for (const list of Object.values(sd)) {
            if (Array.isArray(list)) {
                list.forEach(item => {
                    if (selectedLevel === 'all' || item.level === selectedLevel) {
                        availableThemes.add(item.theme);
                    }
                });
            }
        }
        Array.from(availableThemes).sort().forEach(val => {
            themes.push({ value: val, key: 'theme_' + val });
        });
    } else if (categoryId === 'vocab' && typeof themeConfig !== 'undefined') {
        COMMON_THEMES.forEach(ct => {
            const opt = document.createElement('option');
            opt.value = ct.id;
            opt.textContent = t[ct.label] || ct.id;
            opt.setAttribute('data-translate-key', ct.label);
            themeSelect.appendChild(opt);
        });
        populateSubThemes();
        return;
    }

    themes.forEach(th => {
        const opt = document.createElement('option');
        opt.value = th.value;
        opt.textContent = t[th.key] || th.value;
        opt.setAttribute('data-translate-key', th.key);
        themeSelect.appendChild(opt);
    });

    populateSubThemes();
    updateThemeDescription();
}

function populateSubThemes() {
    const themeSelect = document.getElementById('practice-theme');
    const subThemeSelect = document.getElementById('practice-sub-theme');
    const subThemeGroup = document.querySelector('.sub-theme-group');
    const levelSelect = document.getElementById('practice-level');
    const categoryId = document.querySelector('input[name="practice-cat"]:checked')?.id.replace('cat-', '');

    if (!themeSelect || !subThemeSelect || !subThemeGroup || !levelSelect) return;

    const lang = currentPractice.language;
    if (typeof translations === 'undefined') return;
    const t = translations[lang] || translations['en'] || {};
    const selectedLevel = levelSelect.value;
    const selectedTheme = themeSelect.value;

    subThemeSelect.innerHTML = '';

    if (selectedTheme === 'all') {
        subThemeGroup.classList.add('hidden');
        updateThemeDescription();
        return;
    }

    if (categoryId === 'grammar') {
        const config = themeConfig[selectedLevel];
        if (config && config.common_grammar_themes && config.common_grammar_themes[selectedTheme]) {
            subThemeGroup.classList.remove('hidden');

            const allOpt = document.createElement('option');
            allOpt.value = 'all';
            allOpt.textContent = t['theme_all'] || 'All Themes';
            allOpt.setAttribute('data-translate-key', 'theme_all');
            subThemeSelect.appendChild(allOpt);

            const subThemes = config.common_grammar_themes[selectedTheme];
            Object.entries(subThemes).forEach(([id, label]) => {
                const opt = document.createElement('option');
                opt.value = id;
                opt.textContent = t['theme_' + id] || label;
                opt.setAttribute('data-translate-key', 'theme_' + id);
                subThemeSelect.appendChild(opt);
            });
            return;
        }
    }

    if (selectedLevel === 'all') {
        subThemeGroup.classList.add('hidden');
        updateThemeDescription();
        return;
    }

    const config = themeConfig[selectedLevel];
    if (config && config.common_themes && config.common_themes[selectedTheme]) {
        subThemeGroup.classList.remove('hidden');

        // Add "All Sub-Themes"
        const allOpt = document.createElement('option');
        allOpt.value = 'all';
        allOpt.textContent = t['theme_all'] || 'All Themes';
        allOpt.setAttribute('data-translate-key', 'theme_all');
        subThemeSelect.appendChild(allOpt);

        const subThemes = config.common_themes[selectedTheme];
        Object.entries(subThemes).forEach(([id, label]) => {
            const opt = document.createElement('option');
            opt.value = id;
            opt.textContent = t['theme_' + id] || label;
            opt.setAttribute('data-translate-key', 'theme_' + id);
            subThemeSelect.appendChild(opt);
        });
    } else {
        subThemeGroup.classList.add('hidden');
    }

    updateThemeDescription();
}

function updateThemeDescription() {
    const levelSelect = document.getElementById('practice-level');
    const descEl = document.getElementById('theme-description');
    if (!levelSelect || !descEl) return;

    const level = levelSelect.value;
    const lang = currentPractice.language;
    if (typeof translations === 'undefined') return;
    const t = translations[lang] || translations['en'] || {};

    if (level === 'all') {
        descEl.classList.add('hidden');
        return;
    }

    const mapping = {
        'starter': 'desc_a1',
        'elementary': 'desc_a2',
        'intermediate': 'desc_b1',
        'upper-intermediate': 'desc_b2',
        'advanced': 'desc_c1',
        'proficiency': 'desc_c2'
    };

    let descKey = mapping[level];

    if (descKey && t[descKey]) {
        descEl.textContent = t[descKey];
        descEl.classList.remove('hidden');
    } else {
        descEl.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadStreak();
    loadTotalScore();

    // Deep Linking Support
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode'); // 'wheel' or 'linear'
    const langParam = urlParams.get('lang'); // 'en', 'fr', 'it', 'ru', 'el'
    const catParam = urlParams.get('cat'); // 'vocab', 'grammar', 'speaking'
    const embedParam = urlParams.get('embed'); // 'true'

    if (embedParam === 'true') {
        document.body.classList.add('embedded-mode');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (header) header.classList.add('hidden');
        if (footer) footer.classList.add('hidden');
        const main = document.querySelector('main');
        if (main) main.style.paddingTop = '20px';
    }

    if (langParam) {
        const langCard = document.querySelector(`.lang-selection-card[data-value="${langParam}"]`);
        if (langCard) {
            document.querySelectorAll('.lang-selection-card').forEach(c => c.classList.remove('active'));
            langCard.classList.add('active');
            currentPractice.language = langParam;
        }
    }

    if (catParam) {
        const catRadio = document.getElementById(`cat-${catParam}`);
        if (catRadio) {
            catRadio.checked = true;
        }
    }

    window.updateCategoryUI();

    if (modeParam === 'wheel') {
        setTimeout(() => startPractice(true), 500);
    } else if (modeParam === 'linear' || (!modeParam && langParam && catParam)) {
        setTimeout(() => startPractice(false), 500);
    }

    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => startPractice(false));
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextWord);
    }

    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            document.getElementById('summary-modal').classList.add('hidden');
            document.getElementById('setup-section').classList.remove('hidden');
            clearSession();
        });
    }
});

function startPractice(isWheelMode = false) {
    const activeLangCard = document.querySelector('.lang-selection-card.active');
    const lang = activeLangCard ? activeLangCard.getAttribute('data-value') : 'en';
    currentPractice.language = lang;

    const selectedLevel = document.getElementById('practice-level').value;
    const selectedTheme = document.getElementById('practice-theme').value;
    const selectedCat = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');

    let rawItems = [];
    if (selectedCat === 'vocab') {
        rawItems = [...(vocabularyData[lang] || [])];
    } else if (selectedCat === 'speaking') {
        const sd = speakingData[lang] || {};
        for (const list of Object.values(sd)) {
            if (Array.isArray(list)) rawItems.push(...list);
        }
    }

    if (selectedLevel !== 'all') {
        rawItems = rawItems.filter(item => item.level === selectedLevel);
    }
    if (selectedTheme !== 'all') {
        rawItems = rawItems.filter(item => item.theme === selectedTheme);
    }

    if (rawItems.length === 0) {
        alert("No items found!");
        return;
    }

    currentPractice.words = rawItems.sort(() => 0.5 - Math.random()).slice(0, 20);
    currentPractice.currentIndex = 0;
    currentPractice.score = 0;
    currentPractice.isWheelMode = isWheelMode;

    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');

    updateProgress();
    showNextWord();
}

async function showNextWord() {
    if (currentPractice.currentIndex >= currentPractice.words.length) {
        showSummary();
        return;
    }

    const wordObj = currentPractice.words[currentPractice.currentIndex];
    currentPractice.currentWord = wordObj;
    const lang = currentPractice.language;
    const cat = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');

    const exArea = document.getElementById('exercise-area');
    const qCard = document.getElementById('question-card');

    if (cat === 'vocab' && typeof selectExercise === 'function') {
        qCard.classList.add('hidden');
        exArea.classList.remove('hidden');
        const srsData = Store.load();
        const history = (srsData[lang] && srsData[lang][wordObj.id || wordObj.word]) || null;
        window.currentExercise = selectExercise(wordObj, currentPractice.words, history, lang);
        exArea.innerHTML = currentExercise.html;
    } else {
        exArea.classList.add('hidden');
        qCard.classList.remove('hidden');
        document.getElementById('word-display').textContent = wordObj.word || wordObj.text;
    }

    document.getElementById('next-btn').classList.add('hidden');
    currentPractice.currentIndex++;
    updateProgress();
}

function onVocabEngineAnswer(result) {
    const isCorrect = result === 'correct' || result === 'exact' || result === 'close';
    const points = isCorrect ? (result === 'close' ? 5 : 10) : 0;

    currentPractice.score += points;
    document.getElementById('score-count').textContent = currentPractice.score;
    updateTotalScore(points);

    const itemId = currentPractice.currentWord.id || currentPractice.currentWord.word;
    Store.record(itemId, currentPractice.language, 'vocab-engine', isCorrect, false);

    if (isCorrect) {
        document.getElementById('next-btn').classList.remove('hidden');
    } else {
        playSound(false);
    }
}

function showSummary() {
    document.getElementById('practice-section').classList.add('hidden');
    document.getElementById('summary-modal').classList.remove('hidden');
    document.getElementById('final-score').textContent = currentPractice.score;
    if (window.gameUtils && window.gameUtils.createConfetti) window.gameUtils.createConfetti();
}

function updateProgress() {
    const total = currentPractice.words.length;
    const current = currentPractice.currentIndex;
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = ((current / total) * 100) + '%';
}

function loadStreak() {
    const streak = localStorage.getItem('practice_streak') || 0;
    document.getElementById('streak-count').textContent = streak;
}

function loadTotalScore() {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    document.getElementById('total-score-count').textContent = total;
    return total;
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);
    document.getElementById('total-score-count').textContent = total;
}

function playSound(isCorrect) {
    const audio = new Audio(isCorrect ? 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3' : 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
    audio.play().catch(e => {});
}

window.startSpeedRound = function() {
    const lang = currentPractice.language;
    const pool = vocabularyData[lang] || [];
    const speedItems = pool.sort(() => 0.5 - Math.random()).slice(0, 15);
    const exercise = exerciseSpeedRound(speedItems, lang);

    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');
    document.getElementById('question-card').classList.add('hidden');
    const exArea = document.getElementById('exercise-area');
    exArea.classList.remove('hidden');
    exArea.innerHTML = exercise.html;

    let timeLeft = 60;
    const timer = setInterval(() => {
        const el = document.getElementById('speed-timer');
        if (!el) { clearInterval(timer); return; }
        timeLeft--;
        el.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showSummary();
        }
    }, 1000);
};

window.startCategorySort = function() {
    const lang = currentPractice.language;
    const pool = vocabularyData[lang] || [];
    const themes = [...new Set(pool.map(i => i.theme).filter(Boolean))].slice(0, 2);
    const groups = themes.map(t => ({ label: t, items: pool.filter(i => i.theme === t).slice(0, 5) }));
    const exercise = exerciseCategorySort(groups);

    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');
    document.getElementById('question-card').classList.add('hidden');
    const exArea = document.getElementById('exercise-area');
    exArea.classList.remove('hidden');
    exArea.innerHTML = exercise.html;

    const btn = document.createElement('button');
    btn.className = 'cta-button primary';
    btn.textContent = 'Check Sort ✓';
    btn.onclick = () => { exercise.check(); showSummary(); };
    exArea.appendChild(btn);
};
