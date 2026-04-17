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
        ['type-mc', 'type-ls', 'type-sc', 'type-op', 'type-cl', 'type-tf', 'type-ga', 'type-np', 'type-ws', 'type-ma', 'type-si', 'type-lp', 'type-bb'].forEach(id => configureTask(id, false, false));
    } else if (categoryId === 'grammar') {
        const grammarTasks = ['type-ga', 'type-ws', 'type-cl', 'type-np', 'type-mc', 'type-ma', 'type-si', 'type-bb'];
        taskCheckboxes.forEach(cb => {
            let isGrammar = grammarTasks.includes(cb.id);
            if (currentPractice.language === 'en' && cb.id === 'type-ga') isGrammar = false;
            configureTask(cb.id, isGrammar, isGrammar);
        });
        ['type-cv', 'type-ls', 'type-sc', 'type-op', 'type-tf', 'type-lp'].forEach(id => configureTask(id, false, false));
    } else {
        // vocab
        const vocabTasks = ['type-mc', 'type-ls', 'type-sc', 'type-op', 'type-cl', 'type-tf', 'type-ma', 'type-si', 'type-lp', 'type-bb'];
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
    matchState: {
        selectedWord: null,
        matchedCount: 0,
        totalPairs: 0
    },
    sortingState: {
        items: [],
        currentIndex: 0
    },
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
        // Fallback to legacy grammar themes if COMMON_GRAMMAR_THEMES is missing
        const baseThemes = [
            { value: 'grammar_plurals', key: 'theme_grammar_plurals' },
            { value: 'grammar_present_simple', key: 'theme_grammar_present_simple' },
            { value: 'grammar_future_simple', key: 'theme_grammar_future_simple' },
            { value: 'grammar_past_simple', key: 'theme_grammar_past_simple' },
            { value: 'grammar_gender', key: 'theme_grammar_gender' },
            { value: 'grammar_verb_forms', key: 'theme_grammar_verb_forms' },
            { value: 'grammar_adjectives', key: 'theme_grammar_adjectives' }
        ];

        if (lang === 'en') {
            themes = baseThemes.filter(th => th.value !== 'grammar_gender' && th.value !== 'grammar_future_simple');
            themes.push({ value: 'grammar_reg_irregular', key: 'theme_grammar_reg_irregular' });
            themes.push({ value: 'grammar_stative_action', key: 'theme_grammar_stative_action' });
        } else if (lang === 'fr' || lang === 'it') {
            themes = [...baseThemes];
            themes.push({ value: 'grammar_auxiliary', key: 'theme_grammar_auxiliary' });
        } else {
            themes = baseThemes;
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
    } else {
        const vd = vocabularyData[lang] || [];
        const availableThemes = new Set();
        vd.forEach(item => {
            if (selectedLevel === 'all' || item.level === selectedLevel) {
                if (item.theme) availableThemes.add(item.theme);
            }
        });
        Array.from(availableThemes).sort().forEach(th => {
            const opt = document.createElement('option');
            opt.value = th;
            opt.textContent = t['theme_' + th] || th;
            opt.setAttribute('data-translate-key', 'theme_' + th);
            themeSelect.appendChild(opt);
        });
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
        } else if (selectedLevel === 'all') {
            const allSubThemes = [];
            Object.values(themeConfig).forEach(lv => {
                if (lv.common_grammar_themes && lv.common_grammar_themes[selectedTheme]) {
                    Object.entries(lv.common_grammar_themes[selectedTheme]).forEach(([id, label]) => {
                        if (!allSubThemes.some(s => s.id === id)) allSubThemes.push({ id, label });
                    });
                }
            });

            if (allSubThemes.length > 0) {
                subThemeGroup.classList.remove('hidden');
                const allOpt = document.createElement('option');
                allOpt.value = 'all';
                allOpt.textContent = t['theme_all'] || 'All Themes';
                allOpt.setAttribute('data-translate-key', 'theme_all');
                subThemeSelect.appendChild(allOpt);

                allSubThemes.forEach(st => {
                    const opt = document.createElement('option');
                    opt.value = st.id;
                    opt.textContent = t['theme_' + st.id] || st.label;
                    opt.setAttribute('data-translate-key', 'theme_' + st.id);
                    subThemeSelect.appendChild(opt);
                });
                return;
            }
        }

        // Verb group sub-themes for specific grammar themes
        const tenses = ['grammar_present_simple', 'grammar_past_simple', 'grammar_future_simple'];
        if (tenses.includes(selectedTheme)) {
            subThemeGroup.classList.remove('hidden');

            const allOpt = document.createElement('option');
            allOpt.value = 'all';
            allOpt.textContent = t['theme_all'] || 'All Groups';
            allOpt.setAttribute('data-translate-key', 'theme_all');
            subThemeSelect.appendChild(allOpt);

            let groups = [];
            if (lang === 'fr') groups = ['er', 'ir', 're', 'oir', 'irregular'];
            else if (lang === 'it') groups = ['are', 'ere', 'ire', 'ire_isc', 'urre', 'riflessivo', 'irregular'];
            else if (lang === 'es' || lang === 'pt') groups = ['ar', 'er', 'ir', 'irregular'];
            else if (lang === 'de') groups = ['en', 'ln', 'rn', 'irregular'];
            else if (lang === 'en') groups = ['regular', 'irregular'];
            else if (lang === 'ru') groups = ['1st_conj', '2nd_conj', 'mixed_conj', 'irregular'];
            else if (lang === 'el') groups = ['a', 'b1', 'b2', 'a_passive', 'irregular'];

            groups.forEach(g => {
                const opt = document.createElement('option');
                const labelKey = 'verb_group_' + g;
                opt.value = labelKey;
                opt.textContent = t[labelKey] || g;
                opt.setAttribute('data-translate-key', labelKey);
                subThemeSelect.appendChild(opt);
            });
            return;
        }

        if (selectedTheme === 'grammar_adjectives') {
            subThemeGroup.classList.remove('hidden');
            const allOpt = document.createElement('option');
            allOpt.value = 'all';
            allOpt.textContent = t['theme_all'] || 'All';
            allOpt.setAttribute('data-translate-key', 'theme_all');
            subThemeSelect.appendChild(allOpt);

            const opt1 = document.createElement('option');
            opt1.value = 'grammar_comparative_superlative';
            const label1 = t['sub_theme_comparatives'] || 'Comparatives & Superlatives';
            opt1.textContent = label1;
            opt1.setAttribute('data-translate-key', 'sub_theme_comparatives');
            subThemeSelect.appendChild(opt1);

            if (lang !== 'en') {
                const opt2 = document.createElement('option');
                opt2.value = 'grammar_adjective_agreement';
                const label2 = t['sub_theme_agreement'] || 'Gender & Numbers';
                opt2.textContent = label2;
                opt2.setAttribute('data-translate-key', 'sub_theme_agreement');
                subThemeSelect.appendChild(opt2);
            }
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
    const themeSelect = document.getElementById('practice-theme');
    const subThemeSelect = document.getElementById('practice-sub-theme');
    const levelSelect = document.getElementById('practice-level');
    const descEl = document.getElementById('theme-description');
    if (!themeSelect || !levelSelect || !descEl) return;

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

    const catRadios = document.querySelectorAll('input[name="practice-cat"]');
    const container = document.getElementById('practice-container');


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
        // Adjust main padding if needed
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

    if (typeof updateCategoryUI === 'function') updateCategoryUI();

    if (modeParam === 'wheel') {
        // Auto-select Speaking category for wheel if not specified
        if (!catParam) {
            const speakingRadio = document.getElementById('cat-speaking');
            if (speakingRadio) {
                speakingRadio.checked = true;
                if (typeof updateCategoryUI === 'function') updateCategoryUI();
            }
        }
        // Start after a small delay to ensure DOM and translations are ready
        setTimeout(() => startPractice(true), 500);
    } else if (modeParam === 'linear' || (!modeParam && langParam && catParam)) {
        setTimeout(() => startPractice(false), 500);
    }

    const startBtn = document.getElementById('start-btn');
    const quickStartBtn = document.getElementById('quick-start-btn');
    const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
    const reviewMistakesBtn = document.getElementById('review-mistakes-btn');
    const wheelModeBtn = document.getElementById('wheel-mode-btn');
    const resumeBtn = document.getElementById('resume-btn');
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const hintBtn = document.getElementById('hint-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');
    const finishConversationBtn = document.getElementById('finish-conversation-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const shareLinkBtn = document.getElementById('share-link-btn');
    const pinPracticeBtn = document.getElementById('pin-practice-btn');

    if (pinPracticeBtn) {
        pinPracticeBtn.onclick = () => {
            const lang = currentPractice.language;
            const level = document.getElementById('practice-level').value;
            const theme = document.getElementById('practice-theme').value;
            const category = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');
            const baseUrl = window.location.origin + window.location.pathname;
            const deepLink = `${baseUrl}?lang=${lang}&level=${level}&theme=${theme}&cat=${category}&embed=true`;

            const catLabel = (translations[lang] && translations[lang]['cat_' + category]) || category;

            if (window.showPinModal) {
                const template = (window.t && window.t('pin_desc_template')) || "You're about to pin \"{0}\" ({1}, {2}) to your home screen.";
                const desc = template
                    .replace('{0}', catLabel)
                    .replace('{1}', lang.toUpperCase())
                    .replace('{2}', level);

                window.showPinModal(
                    (window.t && window.t('pin_title')) || 'Add to Home Screen',
                    desc,
                    deepLink
                );
            }
        };
    }
    const exitPracticeBtn = document.getElementById('exit-practice-btn');
    const closeDefinitionBtn = document.getElementById('close-definition-btn');
    const wordDisplay = document.getElementById('word-display');
    const questionCard = document.getElementById('question-card');

    if (wordDisplay) {
        wordDisplay.addEventListener('click', showWordDefinition);
    }
    if (questionCard) {
        questionCard.addEventListener('click', (e) => {
            // Only trigger if clicking the card background or neutral elements,
            // not buttons or inputs
            if (e.target.closest('.choice-btn, input, button, #next-btn')) return;
            showWordDefinition();
        });
    }

    if (closeDefinitionBtn) {
        closeDefinitionBtn.addEventListener('click', () => {
            document.getElementById('definition-modal').classList.add('hidden');
        });
    }

    const definitionModal = document.getElementById('definition-modal');
    if (definitionModal) {
        definitionModal.addEventListener('click', (e) => {
            if (e.target === definitionModal) {
                definitionModal.classList.add('hidden');
            }
        });
    }

    if (quickStartBtn) {
        quickStartBtn.addEventListener('click', () => {
            // Auto-select English Starter Vocab and start
            const enCard = document.querySelector('.lang-selection-card[data-value="en"]');
            if (enCard) enCard.click();
            document.getElementById('cat-vocab').checked = true;
            document.getElementById('practice-level').value = 'starter';
            window.updateCategoryUI();
            startPractice(false);
        });
    }

    if (dailyChallengeBtn) {
        dailyChallengeBtn.addEventListener('click', () => {
            // Pick a random language and category for the day based on date
            const langs = ['en', 'fr', 'it', 'ru', 'el'];
            const cats = ['vocab', 'grammar', 'speaking'];
            const day = new Date().getDate();
            const lang = langs[day % langs.length];
            const cat = cats[day % cats.length];

            const langCard = document.querySelector(`.lang-selection-card[data-value="${lang}"]`);
            if (langCard) langCard.click();
            document.getElementById(`cat-${cat}`).checked = true;
            window.updateCategoryUI();
            startPractice(false);
        });
    }

    if (reviewMistakesBtn) {
        reviewMistakesBtn.addEventListener('click', () => {
            const mistakes = Store.dueItems(currentPractice.language);
            if (mistakes.length === 0) {
                window.gameUtils.showGameMessage('setup-section', "No mistakes to review for this language! Good job! 🏆");
                return;
            }
            // Filter startPractice to only use these items?
            // Actually SM2.selectItems already prioritizes them.
            // Just trigger startPractice with current settings.
            startPractice(false);
        });
    }

    if (exitPracticeBtn) {
        exitPracticeBtn.addEventListener('click', () => {
            const lang = currentPractice.language;
            const confirmMsg = (translations[lang] && translations[lang]['exit_confirm']) ? translations[lang]['exit_confirm'] : "Exit practice and return to menu?";
            window.gameUtils.showGameConfirm(confirmMsg, () => {
                document.getElementById('practice-section').classList.add('hidden');
                document.getElementById('setup-section').classList.remove('hidden');
                // Update resume button visibility since we now have a saved session
                const resumeBtn = document.getElementById('resume-btn');
                if (resumeBtn) resumeBtn.classList.remove('hidden');
                window.scrollTo(0, 0);
            });
        });
    }

    if (shareLinkBtn) {
        shareLinkBtn.addEventListener('click', () => {
            const lang = currentPractice.language;
            const level = document.getElementById('practice-level').value;
            const theme = document.getElementById('practice-theme').value;
            const category = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');
            const baseUrl = window.location.href.split('?')[0];

            const shareUrl = `${baseUrl}?lang=${lang}&level=${level}&theme=${theme}&cat=${category}&embed=true`;

            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = shareLinkBtn.innerHTML;
                const lang = currentPractice.language;
                const copiedText = (translations[lang] && translations[lang]['copied']) ? translations[lang]['copied'] : "Copied! ✅";
                shareLinkBtn.innerHTML = copiedText;
                setTimeout(() => shareLinkBtn.innerHTML = originalText, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                if (window.gameUtils && window.gameUtils.showGameMessage) {
                    window.gameUtils.showGameMessage('setup-section', "Link: " + shareUrl);
                }
            });
        });
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (localStorage.getItem(SESSION_STORAGE_KEY)) {
                window.gameUtils.showGameConfirm("Starting a new practice will clear your current progress. Continue?", () => {
                    clearSession();
                    startPractice(false);
                });
            } else {
                startPractice(false);
            }
        });
    }

    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) {
        spinBtn.addEventListener('click', spinWheel);
    }

    const wheelRespondBtn = document.getElementById('wheel-respond-btn');
    if (wheelRespondBtn) {
        wheelRespondBtn.addEventListener('click', () => {
            document.getElementById('wheel-container').classList.add('hidden');
            document.getElementById('question-card').classList.remove('hidden');
            showNextWord();
        });
    }

    const wheelSkipBtn = document.getElementById('wheel-skip-btn');
    if (wheelSkipBtn) {
        wheelSkipBtn.addEventListener('click', () => {
            const currentItem = currentPractice.currentWord;
            currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
            saveSession();
            if (currentPractice.wheelItems.length === 0) {
                showSummary();
            } else {
                document.getElementById('wheel-question-area').classList.add('hidden');
                initWheel();
            }
        });
    }

    const wheelDoneBtn = document.getElementById('wheel-done-btn');
    if (wheelDoneBtn) {
        wheelDoneBtn.addEventListener('click', () => {
            const currentItem = currentPractice.currentWord;
            currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
            currentPractice.score += 20; // Bonus for completion
            document.getElementById('score-count').textContent = currentPractice.score;
            updateTotalScore(20);
            saveSession();
            if (currentPractice.wheelItems.length === 0) {
                showSummary();
            } else {
                document.getElementById('wheel-question-area').classList.add('hidden');
                initWheel();
            }
        });
    }

    if (wheelModeBtn) {
        wheelModeBtn.addEventListener('click', () => {
            if (localStorage.getItem(SESSION_STORAGE_KEY)) {
                window.gameUtils.showGameConfirm("Starting a new practice will clear your current progress. Continue?", () => {
                    clearSession();
                    startPractice(true);
                });
            } else {
                startPractice(true);
            }
        });

        // Add right-click/long-press helper to copy wheel share link directly
        const copyWheelLink = (e) => {
            if (e) e.preventDefault();
            const lang = currentPractice.language;
            const level = document.getElementById('practice-level').value;
            const theme = document.getElementById('practice-theme').value;
            const baseUrl = window.location.href.split('?')[0];
            const shareUrl = `${baseUrl}?mode=wheel&lang=${lang}&level=${level}&theme=${theme}&cat=speaking&embed=true`;

            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = wheelModeBtn.innerHTML;
                const lang = currentPractice.language;
                const copiedText = (translations[lang] && translations[lang]['copied']) ? translations[lang]['copied'] : "Copied! ✅";
                wheelModeBtn.innerHTML = copiedText;
                setTimeout(() => wheelModeBtn.innerHTML = originalText, 2000);
            }).catch(err => {
                if (window.gameUtils && window.gameUtils.showGameMessage) {
                    window.gameUtils.showGameMessage('setup-section', "Link: " + shareUrl);
                }
            });
        };

        wheelModeBtn.addEventListener('contextmenu', copyWheelLink);

        // Mobile long-press support
        let pressTimer;
        wheelModeBtn.addEventListener('touchstart', (e) => {
            pressTimer = window.setTimeout(() => copyWheelLink(e), 800);
        });
        wheelModeBtn.addEventListener('touchend', () => {
            clearTimeout(pressTimer);
        });
    }

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            resumePractice();
        });
        if (loadSession()) {
            resumeBtn.classList.remove('hidden');
        }
    }

    // Language selection cards logic
    const langCards = document.querySelectorAll('.lang-selection-card');
    langCards.forEach(card => {
        card.addEventListener('click', () => {
            langCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const newLang = card.getAttribute('data-value');
            currentPractice.language = newLang;

            const selectedCat = document.querySelector('input[name="practice-cat"]:checked');
            if (selectedCat) {
                window.updateCategoryUI();
            }

            if (typeof setLanguage === 'function') {
                setLanguage(newLang);
                const switcher = document.getElementById('language-switcher');
                if (switcher) switcher.value = newLang;
            }
        });
    });

    // Removing validateFeaturesByLesson as everything is now free access by level

    catRadios.forEach(radio => {
        radio.addEventListener('change', window.updateCategoryUI);
    });

    const levelSelect = document.getElementById('practice-level');
    if (levelSelect) {
        levelSelect.addEventListener('change', () => {
            window.updateCategoryUI();
        });
    }

    const themeSelect = document.getElementById('practice-theme');
    if (themeSelect) {
        themeSelect.addEventListener('change', () => {
            populateSubThemes();
            const val = themeSelect.value;
            const lang = currentPractice.language;
            let msg = null;

            if (val === 'numbers_math' || val.startsWith('numbers_')) {
                msg = (translations[lang] && translations[lang]['bingo_suggestion']) || "Tip: You can also practice numbers playing Bingo in the Events section! 🎲";
            } else if (['personal_identity', 'family_relationships'].includes(val)) {
                msg = (translations[lang] && translations[lang]['guess_who_suggestion']) || "Tip: You can also practice these words playing Identity Mystery in the Events section! 👤";
            } else if (['home_living', 'food_drink', 'transport_travel', 'shopping_money', 'technology_media', 'environment_nature', 'places_geography'].includes(val)) {
                msg = (translations[lang] && translations[lang]['guess_what_suggestion']) || "Tip: You can also practice these words playing Object Quest in the Events section! 📦";
            }

            if (msg) {
                window.gameUtils.showGameMessage('setup-section', msg);
            }
        });
    }

    const subThemeSelect = document.getElementById('practice-sub-theme');
    if (subThemeSelect) {
        subThemeSelect.addEventListener('change', () => {
            updateThemeDescription();
        });
    }
    window.updateCategoryUI(); // Initial call

    // Global Enter Key Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            const checkBtn = document.getElementById('check-opposite-btn');
            const setupSection = document.getElementById('setup-section');
            const summaryModal = document.getElementById('summary-modal');

            // Don't trigger if setup is visible or summary is open
            if ((setupSection && !setupSection.classList.contains('hidden')) ||
                (summaryModal && !summaryModal.classList.contains('hidden'))) {
                return;
            }

            if (nextBtn && !nextBtn.classList.contains('hidden')) {
                nextBtn.click();
                e.preventDefault();
            } else if (checkBtn && !checkBtn.classList.contains('hidden') && !checkBtn.disabled) {
                checkBtn.click();
                e.preventDefault();
            }
        }
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPractice.isCorrect) {
                if (currentPractice.isWheelMode) {
                    // Remove word from wheel after successful response
                    const currentItem = currentPractice.currentWord;
                    currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
                    saveSession();

                    if (currentPractice.wheelItems.length === 0) {
                        showSummary();
                    } else {
                        document.getElementById('question-card').classList.add('hidden');
                        document.getElementById('wheel-container').classList.remove('hidden');
                        document.getElementById('wheel-question-area').classList.add('hidden');
                        initWheel();
                    }
                } else {
                    currentPractice.currentIndex++;
                    showNextWord();
                }
            } else {
                showNextWord();
            }
        });
    }

    if (checkOppositeBtn) {
        checkOppositeBtn.addEventListener('click', checkTypedAnswer);
    }

    const clearMatching = () => {
        currentPractice.matchState.selectedWord = null;
        currentPractice.matchState.matchedCount = 0;
        renderMatching();
    };

    if (trueBtn) {
        trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    }

    if (falseBtn) {
        falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    }

    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }

    if (listenBtn) {
        listenBtn.addEventListener('click', speakWord);
    }

    if (clearScrambleBtn) {
        clearScrambleBtn.addEventListener('click', clearScramble);
    }

    if (finishConversationBtn) {
        finishConversationBtn.addEventListener('click', () => {
            showFeedback(true);
        });
    }

    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            document.getElementById('summary-modal').classList.add('hidden');
            document.getElementById('setup-section').classList.remove('hidden');
            clearSession();
            loadStreak();
            if (resumeBtn) resumeBtn.classList.add('hidden');
        });
    }

});

function showHint() {
    const wordObj = currentPractice.currentWord;
    if (!wordObj) return;
    currentPractice.usedHint = true;

    let targetAnswer = "";
    const taskType = wordObj.type;
    if (taskType === 'type-cl' || taskType === 'type-mc' || taskType === 'type-sc' || taskType === 'type-ga' || taskType === 'type-np' || taskType === 'type-ls' || taskType === 'type-ws') {
        targetAnswer = wordObj.answer || wordObj.word || wordObj.text || wordObj.topic || wordObj.article || wordObj.gender;
    } else if (taskType === 'type-op') {
        targetAnswer = wordObj.opposite;
    } else {
        return; // No hint for type-tf or type-cv
    }

    if (!targetAnswer) return;

    let tip = "";
    if (wordObj.classification) {
        const classLabel = (translations[currentPractice.language] && translations[currentPractice.language][`verb_classification_${wordObj.classification}`]) || wordObj.classification;
        tip += classLabel + " ";
    }
    if (wordObj.group) {
        tip += "(" + wordObj.group + ") ";
    }
    if (tip) tip = tip.trim() + ": ";

    // Support multiple correct answers
    const answers = targetAnswer.split(' / ').map(a => a.trim());
    currentPractice.hintLevel = (currentPractice.hintLevel || 0) + 1;

    const hints = answers.map(ans => {
        // Reveal up to length - 2 characters to keep some challenge
        const maxReveal = Math.max(1, ans.length - 2);
        const revealCount = Math.min(currentPractice.hintLevel, maxReveal);
        let hintPart = ans.substring(0, revealCount);
        if (hintPart) {
            hintPart = hintPart.charAt(0).toUpperCase() + hintPart.slice(1);
            return hintPart + "...";
        }
        return "...";
    });

    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text hint';
    feedbackMsg.textContent = "Hint: " + tip + hints.join(' / ');
}

function speakWord() {
    if (!currentPractice.currentWord) return;
    const text = (currentPractice.currentWord.type === 'type-ga' && currentPractice.currentWord.baseWord)
        ? currentPractice.currentWord.baseWord
        : (currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.baseWord);
    window.gameUtils.speak(text, currentPractice.language);
}

function playSound(isCorrect) {
    const successUrl = 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3';
    const failUrl = 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3';

    const audio = new Audio(isCorrect ? successUrl : failUrl);
    audio.play().catch(e => {});
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    if (!progressFill || !progressText) return;

    const total = currentPractice.words.length;
    let current = currentPractice.currentIndex;

    if (currentPractice.isWheelMode) {
        current = total - currentPractice.wheelItems.length;
    }

    const displayIndex = current < total ? current + 1 : total;
    const percentage = total > 0 ? (current / total) * 100 : 0;

    progressFill.style.width = percentage + '%';

    const lang = currentPractice.language;
    const wordLabel = (translations[lang] && translations[lang]['progress_word']) ? translations[lang]['progress_word'] : 'Word';
    const ofLabel = (translations[lang] && translations[lang]['progress_of']) ? translations[lang]['progress_of'] : 'of';

    progressText.textContent = `${wordLabel} ${displayIndex} ${ofLabel} ${total}`;

    // Mobile UX: update progress bar
    if (typeof updateProgressBar === 'function') {
        updateProgressBar(current, total);
    }
}

function loadStreak() {
    const streak = localStorage.getItem('practice_streak') || 0;
    const streakCountEl = document.getElementById('streak-count');
    if (streakCountEl) {
        streakCountEl.textContent = streak;
    }
    return parseInt(streak);
}

function loadTotalScore() {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    if (totalScoreEl) {
        totalScoreEl.textContent = total;
    }
    if (setupTotalScoreEl) {
        setupTotalScoreEl.textContent = total;
    }
    return total;
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);
    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    if (totalScoreEl) {
        totalScoreEl.textContent = total;
    }
    if (setupTotalScoreEl) {
        setupTotalScoreEl.textContent = total;
    }
    return total;
}

function updateStreak() {
    const lastDate = localStorage.getItem('last_practice_date');
    const today = new Date().toDateString();

    if (lastDate === today) return;

    let streak = parseInt(localStorage.getItem('practice_streak') || 0);

    if (lastDate) {
        const lastPractice = new Date(lastDate);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastPractice);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streak++;
        } else {
            streak = 1;
        }
    } else {
        streak = 1;
    }

    localStorage.setItem('practice_streak', streak);
    localStorage.setItem('last_practice_date', today);
    loadStreak();
}

function triggerAnimation(type) {
    const card = document.getElementById('question-card');
    if (!card) return;

    if (type === 'fadeIn') {
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        card.style.animation = null;
    } else if (type === 'shake') {
        card.classList.remove('shake');
        card.offsetHeight; /* trigger reflow */
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
    }
}

const GRAMMAR_CONFIG = {
    fr: {
        articles: ['le', 'la', "l'", 'les'],
        pronouns: ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles']
    },
    it: {
        articles: ['il', 'lo', 'la', "l'", 'i', 'gli', 'le'],
        pronouns: ['io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro']
    },
    ru: {
        articles: ['он', 'она', 'оно', 'они'],
        pronouns: ['я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они']
    },
    el: {
        articles: ['ο', 'η', 'το', 'οι', 'τα'],
        pronouns: ['εγώ', 'εσύ', 'αυτός', 'αυτή', 'αυτό', 'εμείς', 'εσείς', 'αυτοί', 'αυτές', 'αυτά']
    },
    en: {
        articles: ['the'],
        pronouns: ['I', 'you', 'he', 'she', 'it', 'we', 'they']
    },
    es: {
        articles: ['el', 'la', 'los', 'las'],
        pronouns: ['yo', 'tú', 'él', 'ella', 'nosotros', 'vosotros', 'ellos', 'ellas']
    },
    pt: {
        articles: ['o', 'a', 'os', 'as'],
        pronouns: ['eu', 'tu', 'ele', 'ela', 'nós', 'vós', 'eles', 'elas']
    },
    de: {
        articles: ['der', 'die', 'das'],
        pronouns: ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie']
    },
    hy: {
        articles: [],
        pronouns: ['ես', 'դու', 'նա', 'մենք', 'դուք', 'նրանք']
    },
    ka: {
        articles: [],
        pronouns: ['მე', 'შენ', 'ის', 'ჩვენ', 'თქვენ', 'ისინი']
    },
    tt: {
        articles: [],
        pronouns: ['мин', 'син', 'ул', 'без', 'сез', 'алар']
    },
    ba: {
        articles: [],
        pronouns: ['мин', 'син', 'ул', 'беҙ', 'һеҙ', 'алар']
    },
    br: {
        articles: ['an', 'al', 'ar'],
        pronouns: ["me", "te", "eñ", "hi", "ni", "c'hwi", "int"]
    }
};

function expandGrammarItems(items, lang) {
    let expanded = [];
    const config = GRAMMAR_CONFIG[lang] || { articles: [], pronouns: [] };

    let globalVerbForms = [];
    items.forEach(it => {
        const infinitive = it.verb || it.word;
        if (infinitive && it.tenses) {
            Object.values(it.tenses).forEach(tense => {
                Object.values(tense).forEach(forms => {
                    globalVerbForms.push(...forms.map(f => f.toLowerCase()));
                });
            });
        }
    });
    globalVerbForms = [...new Set(globalVerbForms)];

    items.forEach(item => {
        const infinitive = item.verb || item.word;
        if (lang === 'en' && item.form === 'verb' && item.aspect && item.aspect !== 'both') {
            const actionLabel = (translations[lang] && translations[lang]['verb_aspect_action']) || 'Action';
            const stativeLabel = (translations[lang] && translations[lang]['verb_aspect_stative']) || 'Stative';
            expanded.push({
                ...item,
                type: 'type-mc',
                primaryPrompt: infinitive,
                secondaryContext: 'stative_vs_action',
                answer: item.aspect === 'action' ? actionLabel : stativeLabel,
                distractors: [item.aspect === 'action' ? stativeLabel : actionLabel],
                theme: 'grammar_stative_action'
            });
        }
        if ((lang === 'fr' || lang === 'it') && item.form === 'verb' && item.auxiliary) {
            const auxLabel = lang === 'fr' ? 'Avoir vs. Être' : 'Avere vs. Essere';
            const choices = lang === 'fr' ? ['avoir', 'être'] : ['avere', 'essere'];
            expanded.push({
                ...item,
                type: 'type-mc',
                primaryPrompt: infinitive,
                secondaryContext: auxLabel,
                answer: item.auxiliary,
                distractors: choices.filter(c => c !== item.auxiliary),
                theme: 'grammar_auxiliary'
            });
        }

        if (infinitive && item.tenses) {
            const pronouns = item.pronouns || config.pronouns;
            let itemVerbForms = [];
            for (const tense of Object.values(item.tenses)) {
                for (const forms of Object.values(tense)) {
                    itemVerbForms.push(...forms);
                }
            }
            itemVerbForms = [...new Set(itemVerbForms.map(v => v.toLowerCase()))];

            for (const [tense, forms] of Object.entries(item.tenses)) {
                if (lang === 'en' && tense === 'future_simple') continue;

                // Map internal tense keys to the new CEFR-specific grammar sub-themes
                let theme = 'grammar_' + tense;
                if (item.level === 'starter') {
                    if (tense === 'present_simple') theme = 'grammar_present_simple_A1';
                    else if (tense === 'past_simple') theme = 'grammar_past_simple_A1';
                    else if (tense === 'future_going_to') theme = 'grammar_future_going_to_A1';
                } else if (item.level === 'elementary') {
                    if (tense === 'present_perfect') theme = 'grammar_present_perfect_A2';
                    else if (tense === 'past_continuous') theme = 'grammar_past_continuous_A2';
                } else if (item.level === 'intermediate') {
                    if (tense === 'present_perfect_continuous') theme = 'grammar_present_perfect_continuous_B1';
                    else if (tense === 'past_perfect') theme = 'grammar_past_perfect_B1';
                    else if (tense === 'future_continuous') theme = 'grammar_future_continuous_B1';
                } else if (item.level === 'upper-intermediate') {
                    if (tense === 'past_perfect_continuous') theme = 'grammar_past_perfect_continuous_B2';
                    else if (tense === 'future_perfect') theme = 'grammar_future_perfect_B2';
                }

                for (const [formType, conjugations] of Object.entries(forms)) {
                    conjugations.forEach((conj, idx) => {
                        const pronoun = pronouns[idx];
                        if (lang === 'en' && tense === 'present_simple' && !['he', 'she', 'it'].includes(pronoun.toLowerCase()) && Math.random() > 0.4) {
                            return;
                        }
                        const cleanInf = infinitive.replace(/^to\s+/i, '');
                        const label = (translations[lang] && translations[lang]['label_' + formType]) ? ` (${translations[lang]['label_' + formType]})` : '';
                        let verbPrompt = "";
                        if (formType === 'question') {
                            if (lang === 'en') verbPrompt = `____ (${pronoun} / ${cleanInf})?`;
                            else if (lang === 'es') verbPrompt = `¿____? (${pronoun} + ${cleanInf})`;
                            else verbPrompt = `____? (${pronoun} + ${cleanInf})`;
                        } else if (formType === 'negative') {
                            if (lang === 'en') verbPrompt = `${pronoun} ____ (not / ${cleanInf})`;
                            else verbPrompt = `${pronoun} ____ (${cleanInf} -)`;
                        } else {
                            verbPrompt = `${pronoun} ____ (${cleanInf})`;
                        }
                        let distractors = itemVerbForms.filter(v => v !== conj.toLowerCase());
                        if (lang === 'en') {
                            const beForms = ['am', 'is', 'are', 'was', 'were', 'am not', 'is not', 'are not', 'was not', 'were not'];
                            const auxForms = ['do', 'does', 'did', "don't", "doesn't", "didn't"];
                            if (infinitive.toLowerCase() === 'to be') {
                                distractors.push(...auxForms.filter(v => !distractors.includes(v)));
                            } else {
                                distractors.push(...beForms.filter(v => !distractors.includes(v)));
                            }
                        }
                        if (distractors.length < 3) {
                            distractors.push(...globalVerbForms.filter(v => v !== conj.toLowerCase() && !distractors.includes(v)).sort(() => 0.5 - Math.random()).slice(0, 3));
                        }
                        expanded.push({
                            ...item,
                            type: 'type-cl',
                            primaryPrompt: pronoun,
                            secondaryContext: `${infinitive}${label}`,
                            clozeText: verbPrompt,
                            answer: conj,
                            word: conj,
                            distractors: [...new Set(distractors)],
                            theme: theme,
                            form: 'verb'
                        });
                        if (formType !== 'question' && lang !== 'en') {
                            const correctPronouns = pronouns.filter((p, pIdx) => conjugations[pIdx] === conj);
                            expanded.push({
                                ...item,
                                type: 'type-cl',
                                primaryPrompt: conj,
                                secondaryContext: infinitive,
                                clozeText: `____ ${conj} (${infinitive})`,
                                answer: correctPronouns.join(' / '),
                                word: pronoun,
                                distractors: pronouns.filter(p => !correctPronouns.includes(p)),
                                theme: theme,
                                form: 'pronoun'
                            });
                        }
                    });
                }
            }
        }
        // English special: Regular vs Irregular
        if (lang === 'en' && item.form === 'verb' && item.classification) {
            const regLabel = (translations[lang] && translations[lang]['verb_classification_regular']) || 'Regular';
            const irregLabel = (translations[lang] && translations[lang]['verb_classification_irregular']) || 'Irregular';

            // Map to A1 Word Families if Starter
            const theme = (item.level === 'starter') ? 'grammar_word_families_basic_A1' : 'grammar_reg_irregular';

            expanded.push({
                ...item,
                type: 'type-mc',
                primaryPrompt: infinitive,
                secondaryContext: 'reg_vs_irregular',
                answer: item.classification === 'regular' ? regLabel : irregLabel,
                distractors: [item.classification === 'regular' ? irregLabel : regLabel],
                theme: theme
            });
        }

        if (item.past_participle || item.v3 || item.v2) {
            const v1 = (infinitive || "").replace(/^to\s+/i, '');
            const v3 = item.past_participle || item.v3;
            // Map verb forms to Past Simple theme for non-English languages
            const targetTheme = (lang === 'en') ? 'grammar_verb_forms' : 'grammar_past_simple';

            if (v3) {
                const labelKey = (lang === 'en') ? 'label_v3' : 'label_past_participle';
                const label = (translations[lang] && translations[lang][labelKey]) || "Past Participle";
                expanded.push({
                    ...item,
                    type: 'type-cl',
                    primaryPrompt: v1,
                    secondaryContext: label,
                    clozeText: `${v1} (${label}) -> ____`,
                    answer: v3,
                    theme: targetTheme,
                    form: 'verb_form'
                });
            }
            if (item.v2) {
                const v2Label = (translations[lang] && translations[lang]['label_v2']) || "V2 (Past Simple)";
                expanded.push({
                    ...item,
                    type: 'type-cl',
                    primaryPrompt: v1,
                    secondaryContext: v2Label,
                    clozeText: `${v1} (${v2Label}) -> ____`,
                    answer: item.v2,
                    theme: targetTheme,
                    form: 'verb_form'
                });
            }
        }
        if (item.form === 'adjective') {
            const baseAdj = item.word;
            if (item.comparative && item.superlative) {
                const compLabel = (translations[lang] && translations[lang]['label_comparative']) || "Comparative";
                const superLabel = (translations[lang] && translations[lang]['label_superlative']) || "Superlative";

                expanded.push({
                    ...item,
                    type: 'type-cl',
                    primaryPrompt: baseAdj,
                    secondaryContext: compLabel,
                    clozeText: `${baseAdj} (${compLabel}) -> ____`,
                    answer: item.comparative,
                    theme: 'grammar_adjectives',
                    subTheme: 'grammar_comparative_superlative'
                });
                expanded.push({
                    ...item,
                    type: 'type-cl',
                    primaryPrompt: baseAdj,
                    secondaryContext: superLabel,
                    clozeText: `${baseAdj} (${superLabel}) -> ____`,
                    answer: item.superlative,
                    theme: 'grammar_adjectives',
                    subTheme: 'grammar_comparative_superlative'
                });
            }

            // Gender & Number Agreement context sentences
            const agreementContexts = {
                fr: [
                    { key: 'm', label: 'm.', noun: 'Le garçon', verb: 'est' },
                    { key: 'f', label: 'f.', noun: 'La fille', verb: 'est' },
                    { key: 'mp', label: 'm.pl.', noun: 'Les garçons', verb: 'sont' },
                    { key: 'fp', label: 'f.pl.', noun: 'Les filles', verb: 'sont' }
                ],
                it: [
                    { key: 'm', label: 'm.', noun: 'Il ragazzo', verb: 'è' },
                    { key: 'f', label: 'f.', noun: 'La ragazza', verb: 'è' },
                    { key: 'mp', label: 'm.pl.', noun: 'I ragazzi', verb: 'sono' },
                    { key: 'fp', label: 'f.pl.', noun: 'Le ragazze', verb: 'sono' }
                ],
                ru: [
                    { key: 'm', label: 'он', noun: 'Этот дом', verb: '' },
                    { key: 'f', label: 'она', noun: 'Эта машина', verb: '' },
                    { key: 'n', label: 'оно', noun: 'Это окно', verb: '' },
                    { key: 'p', label: 'они', noun: 'Эти люди', verb: '' }
                ],
                el: [
                    { key: 'm', label: 'm.', noun: 'Ο άντρας', verb: 'είναι' },
                    { key: 'f', label: 'f.', noun: 'Η γυναίκα', verb: 'είναι' },
                    { key: 'n', label: 'n.', noun: 'Το παιδί', verb: 'είναι' },
                    { key: 'mp', label: 'm.pl.', noun: 'Οι άντρες', verb: 'είναι' },
                    { key: 'fp', label: 'f.pl.', noun: 'Οι γυναίκες', verb: 'είναι' },
                    { key: 'np', label: 'n.pl.', noun: 'Τα παιδιά', verb: 'είναι' }
                ]
            };

            const langContexts = agreementContexts[lang];
            if (langContexts) {
                langContexts.forEach(ctx => {
                    let answer = null;
                    if (ctx.key === 'm') answer = item.word;
                    else if (ctx.key === 'f') answer = item.feminine;
                    else if (ctx.key === 'n') answer = item.neuter;
                    else if (ctx.key === 'p') answer = item.plural;
                    else if (ctx.key === 'mp') answer = item.plural;
                    else if (ctx.key === 'fp') answer = item.femininePlural || item.plural;
                    else if (ctx.key === 'np') answer = item.neuterPlural || item.plural;

                    if (answer) {
                        expanded.push({
                            ...item,
                            type: 'type-cl',
                            primaryPrompt: `${ctx.noun} ${ctx.verb}`.trim(),
                            secondaryContext: `(${item.word})`,
                            clozeText: `${ctx.noun} ${ctx.verb} ____ (${item.word})`.trim().replace(/\s+/g, ' '),
                            answer: answer,
                            theme: 'grammar_adjectives',
                            subTheme: 'grammar_adjective_agreement'
                        });
                    }
                });
            }
        }

        if (item.article || item.gender || item.plural) {
            if (item.article || item.gender) {
                const correctAnswer = item.article || item.gender;
                const baseWord = item.baseWord || item.word;
                let distractors = config.articles.filter(a => a.toLowerCase() !== correctAnswer.toLowerCase());
                if (distractors.length === 0) {
                    const articlesMap = { it: ['il', 'la', 'lo', "l'", 'i', 'gli', 'le'], fr: ['le', 'la', "l'", 'les'], el: ['ο', 'η', 'το', 'οι', 'τα'], ru: ['он', 'она', 'оно'] };
                    const fallbackArticles = articlesMap[lang] || [];
                    distractors = fallbackArticles.filter(a => a.toLowerCase() !== correctAnswer.toLowerCase());
                }
                expanded.push({ ...item, type: 'type-ga', baseWord: baseWord, primaryPrompt: baseWord, clozeText: `____ ${baseWord}`, answer: correctAnswer, distractors: distractors, theme: 'grammar_gender' });
            }
            if (item.plural) {
                const singular = item.word;
                const plural = item.plural;
                let distractorsSP = [];
                if (lang === 'en') { distractorsSP = [singular + "s", singular + "es", singular + "ies", singular]; }
                else { distractorsSP = [singular]; const otherPlurals = items.filter(i => i.plural && i !== item).map(i => i.plural); if (otherPlurals.length > 0) { distractorsSP.push(...otherPlurals.sort(() => 0.5 - Math.random()).slice(0, 3)); } }
                expanded.push({ ...item, type: 'type-np', primaryPrompt: singular, secondaryContext: 'plural', clozeText: `${singular} -> ____`, answer: plural, distractors: [...new Set(distractorsSP.map(d => d.toLowerCase()).filter(d => d !== plural.toLowerCase()))], theme: 'grammar_plurals', form: 'singular_to_plural' });
                let distractorsPS = [];
                if (lang === 'en') { distractorsPS = [plural.replace(/s$/i, ''), plural.replace(/es$/i, ''), plural.replace(/ies$/i, 'y'), plural]; }
                else { distractorsPS = [plural]; const otherSingulars = items.filter(i => i.word && i !== item).map(i => i.word); if (otherSingulars.length > 0) { distractorsPS.push(...otherSingulars.sort(() => 0.5 - Math.random()).slice(0, 3)); } }
                expanded.push({ ...item, type: 'type-np', primaryPrompt: plural, secondaryContext: 'singular', clozeText: `${plural} -> ____`, answer: singular, distractors: [...new Set(distractorsPS.map(d => d.toLowerCase()).filter(d => d !== singular.toLowerCase()))], theme: 'grammar_plurals', form: 'plural_to_singular' });
            }
        }
    });
    return expanded;
}


const LANG_PATH_MAP = {
    'en': 'germanic/en',
    'de': 'germanic/de',
    'fr': 'romance/fr',
    'it': 'romance/it',
    'es': 'romance/es',
    'pt': 'romance/pt',
    'ru': 'slavic/ru',
    'el': 'hellenic/el',
    'hy': 'armenian/hy',
    'ka': 'kartvelian/ka',
    'tt': 'turkic/tt',
    'ba': 'turkic/ba',
    'br': 'celtic/br'
};

async function loadPracticeData(lang, level, cat) {
    const levels = level === "all" ? ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"] : [level];
    const familyPath = LANG_PATH_MAP[lang];
    if (!familyPath) return;

    const categories = {
        'vocab': ['vocabulary', 'locations', 'people', 'nationalities'],
        'grammar': ['grammar', 'verbs', 'adjectives'],
        'speaking': ['speaking']
    };

    const files = categories[cat] || [];
    const promises = [];

    // Base path adjustment if needed
    const prefix = ""; // practice.html is at root

    for (const file of files) {
        levels.forEach(lv => { const path = `${prefix}js/data/${familyPath}/${lv}/${file}.js`; promises.push(loadScript(path)); });
    }

    if (levels.includes('starter')) {
        promises.push(loadScript(`${prefix}js/data/${familyPath}/alphabets.js`));
    }

    if (!window.numbersData) promises.push(loadScript(`${prefix}js/data/numbers.js`));

    await Promise.allSettled(promises);
}

function loadScript(path) {
    return new Promise((resolve) => {
        if (document.querySelector(`script[src*="${path}"]`)) return resolve();
        const script = document.createElement('script');
        script.src = path;
        script.async = true;
        script.onload = resolve;
        script.onerror = resolve;
        document.head.appendChild(script);
    });
}

async function startPractice(isWheelMode = false) {
    const activeLangCard = document.querySelector('.lang-selection-card.active');
    const lang = activeLangCard ? activeLangCard.getAttribute('data-value') : 'en';
    currentPractice.language = lang;

    const selectedLevel = document.getElementById('practice-level').value;
    const selectedCat = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');

    // Dynamic loading
    const loadingMsg = (window.translations && window.translations[lang] && window.translations[lang]['loading']) || "Loading data...";
    if (window.gameUtils && window.gameUtils.showGameMessage) {
        window.gameUtils.showGameMessage('setup-section', loadingMsg);
    }

    await loadPracticeData(lang, selectedLevel, selectedCat);


    const urlParams = new URLSearchParams(window.location.search);
    const selectedTheme = urlParams.get('theme') || document.getElementById('practice-theme').value;
    const selectedSubTheme = urlParams.get('subTheme') || document.getElementById('practice-sub-theme').value;

    currentPractice.words = [];

    let enabledTypes = [];
    if (document.getElementById('type-mc').checked) enabledTypes.push('type-mc');
    if (document.getElementById('type-ls').checked) enabledTypes.push('type-ls');
    if (document.getElementById('type-sc').checked) enabledTypes.push('type-sc');
    if (document.getElementById('type-ws').checked) enabledTypes.push('type-ws');
    if (document.getElementById('type-op').checked) enabledTypes.push('type-op');
    if (document.getElementById('type-cl').checked) enabledTypes.push('type-cl');
    if (document.getElementById('type-tf').checked) enabledTypes.push('type-tf');
    if (document.getElementById('type-ga').checked) enabledTypes.push('type-ga');
    if (document.getElementById('type-cv').checked) enabledTypes.push('type-cv');
    if (document.getElementById('type-np').checked) enabledTypes.push('type-np');
    if (document.getElementById('type-ma').checked) enabledTypes.push('type-ma');
    if (document.getElementById('type-si').checked) enabledTypes.push('type-si');
    if (document.getElementById('type-lp').checked) enabledTypes.push('type-lp');
    if (document.getElementById('type-bb').checked) enabledTypes.push('type-bb');

    if (enabledTypes.length === 0) {
        const msg = translations[lang]['alert_no_task_type'] || "Please select at least one task type!";
        if (window.gameUtils && window.gameUtils.showGameMessage) {
            window.gameUtils.showGameMessage('setup-section', msg, 'error');
        }
        return;
    }


    let rawItems = [];

    if (selectedCat === 'speaking' || isWheelMode) {
        const sd = speakingData[lang] || {};
        // For general practice, we use all categories from speakingData
        for (const [subCat, list] of Object.entries(sd)) {
            if (Array.isArray(list)) {
                list.forEach(item => rawItems.push({
                    ...item,
                    category: 'conversation',
                    type: 'type-cv',
                    originalTheme: item.theme, // preserve original theme if needed
                    subCategory: subCat
                }));
            }
        }
    } else if (selectedCat === 'grammar') {
        const gd = grammarData[lang] || [];
        const vd = (vocabularyData[lang] || []).filter(item =>
            item.article || item.gender || item.plural ||
            item.v2 || item.v3 || item.past_participle ||
            item.aspect || item.auxiliary || item.form === 'adjective'
        );
        rawItems = expandGrammarItems([...gd, ...vd], lang);
    } else {
        rawItems = [...(vocabularyData[lang] || [])];

        // Enhanced procedural numbers logic for variety
        const langData = window.numbersData && window.numbersData[lang];
        if (langData) {
            const addNum = (n, theme, level = 'starter') => {
                const word = window.gameUtils.getNumberWord(n, lang);
                // Check if already in rawItems to avoid duplicates (static numbers are already in vocabularyData)
                if (rawItems.some(item => item.word === word)) return;

                rawItems.push({
                    word: word,
                    digit: n.toString(),
                    level: level,
                    theme: theme,
                    form: 'noun'
                });
            };

            // 101-999 Procedural (0-100 are already in numbersVocab)
            for(let i=0; i<15; i++) {
                const n = Math.floor(Math.random() * 898) + 101;
                addNum(n, 'numbers_100_999_A1', 'starter');
            }
            // 1,001+ Procedural (1000 is already in numbersVocab)
            for(let i=0; i<10; i++) {
                const n = Math.floor(Math.random() * 8998) + 1001;
                addNum(n, 'numbers_1000_plus_A1', 'starter');
            }
        }
    }

    // Filter by Level & Theme
    if (selectedLevel !== 'all') {
        rawItems = rawItems.filter(item => item.level === selectedLevel);
    }

    if (selectedTheme !== 'all') {
        if (selectedTheme === 'numbers_math') {
            rawItems = rawItems.filter(item => item.theme.startsWith('numbers_') || item.theme.startsWith('fractions_') || item.theme.startsWith('decimals_') || item.theme.startsWith('percentages_') || item.theme.startsWith('basic_arithmetic_') || item.theme.startsWith('approximation_') || item.theme.startsWith('mathematical_'));
        } else if (selectedCat === 'grammar') {
            // Filter by any sub-theme belonging to the common grammar theme
            const config = themeConfig[selectedLevel];
            if (config && config.common_grammar_themes && config.common_grammar_themes[selectedTheme]) {
                const subThemes = Object.keys(config.common_grammar_themes[selectedTheme]);
                rawItems = rawItems.filter(item => subThemes.includes(item.theme) || subThemes.includes(item.originalTheme) || subThemes.includes(item.subTheme));
            } else if (selectedLevel === 'all') {
                const allSubThemes = [];
                Object.values(themeConfig).forEach(lv => {
                    if (lv.common_grammar_themes && lv.common_grammar_themes[selectedTheme]) {
                        allSubThemes.push(...Object.keys(lv.common_grammar_themes[selectedTheme]));
                    }
                });
                if (allSubThemes.length > 0) {
                    rawItems = rawItems.filter(item => allSubThemes.includes(item.theme) || allSubThemes.includes(item.originalTheme) || allSubThemes.includes(item.subTheme));
                } else {
                    rawItems = rawItems.filter(item => (item.theme === selectedTheme || item.originalTheme === selectedTheme || item.subTheme === selectedTheme));
                }
            } else {
                rawItems = rawItems.filter(item => (item.theme === selectedTheme || item.originalTheme === selectedTheme || item.subTheme === selectedTheme));
            }

            // Secondary Grammar theme filter (Group or specific sub-theme)
            if (selectedSubTheme && selectedSubTheme !== 'all' && selectedSubTheme !== '') {
                if (selectedSubTheme.startsWith('verb_group_')) {
                    const targetGroup = selectedSubTheme.replace('verb_group_', '');
                    rawItems = rawItems.filter(item => {
                        const itemGroup = item.group ? item.group.toLowerCase().replace(/^-/, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/, '') : null;
                        const isIrreg = (item.classification === 'irregular' || item.group === 'irregular' || itemGroup === 'irregular');
                        if (targetGroup === 'irregular') return isIrreg;
                        if (targetGroup === 'regular' && item.classification === 'regular') return true;
                        return itemGroup === targetGroup;
                    });
                } else {
                    rawItems = rawItems.filter(item => (item.theme === selectedSubTheme || item.originalTheme === selectedSubTheme || item.subTheme === selectedSubTheme));
                }
            }
        } else if (selectedSubTheme && selectedSubTheme !== 'all' && selectedSubTheme !== '') {
            rawItems = rawItems.filter(item => (item.theme === selectedSubTheme || item.originalTheme === selectedSubTheme));
        } else {
            // Filter by any sub-theme belonging to the common theme
            const config = themeConfig[selectedLevel];
            if (config && config.common_themes && config.common_themes[selectedTheme]) {
                const subThemes = Object.keys(config.common_themes[selectedTheme]);
                rawItems = rawItems.filter(item => subThemes.includes(item.theme) || subThemes.includes(item.originalTheme));
            } else if (selectedLevel === 'all') {
                // If level is "all", filter by theme across all levels
                const allSubThemes = [];
                Object.values(themeConfig).forEach(lv => {
                    if (lv.common_themes && lv.common_themes[selectedTheme]) {
                        allSubThemes.push(...Object.keys(lv.common_themes[selectedTheme]));
                    }
                });
                if (allSubThemes.length > 0) {
                    rawItems = rawItems.filter(item => allSubThemes.includes(item.theme) || allSubThemes.includes(item.originalTheme));
                } else {
                    // Fallback for simple string themes (e.g. Speaking category)
                    rawItems = rawItems.filter(item => (item.theme === selectedTheme || item.originalTheme === selectedTheme));
                }
            } else {
                // Fallback for categories not yet using the new common themes structure
                rawItems = rawItems.filter(item => (item.theme === selectedTheme || item.originalTheme === selectedTheme));
            }
        }
    }

    if (rawItems.length === 0) {
        const msg = translations[lang]['alert_no_items'] || "No items found for the selected filters!";
        if (window.gameUtils && window.gameUtils.showGameMessage) {
            window.gameUtils.showGameMessage('setup-section', msg, 'error');
        }
        return;
    }

    // Process items into tasks
    currentPractice.words = rawItems.map(item => {
        let wordCopy = { ...item };
        let possibleTypes = [...enabledTypes];

        if (wordCopy.category === 'conversation' || wordCopy.type === 'type-cv') {
            return { ...wordCopy, type: 'type-cv' };
        }

        // Respect preferred type from grammar expansion if it's enabled
        if (wordCopy.type && enabledTypes.includes(wordCopy.type)) {
            // Verbs can be either Cloze or Multiple Choice
            if (wordCopy.form === 'verb' && (enabledTypes.includes('type-mc') || enabledTypes.includes('type-cl'))) {
                // If it's a classification or auxiliary task, keep it as MC for better UX
                const isClassification = wordCopy.secondaryContext === 'reg_vs_irregular' ||
                                       wordCopy.secondaryContext === 'stative_vs_action' ||
                                       wordCopy.secondaryContext === 'Avere vs. Essere' ||
                                       wordCopy.secondaryContext === 'Avoir vs. Être';

                if (isClassification) {
                    wordCopy.type = 'type-mc';
                } else if (enabledTypes.includes('type-mc') && enabledTypes.includes('type-cl')) {
                    wordCopy.type = Math.random() > 0.5 ? 'type-mc' : 'type-cl';
                }
            }
            return wordCopy;
        }

        possibleTypes = possibleTypes.filter(t => t !== 'type-cv');
        if (wordCopy.opposite && Math.random() > 0.5) {
            const originalWord = wordCopy.word;
            wordCopy.word = wordCopy.opposite;
            wordCopy.opposite = originalWord;
        }

        if (!wordCopy.opposite) possibleTypes = possibleTypes.filter(t => t !== 'type-op');
        if (!wordCopy.clozeText && !wordCopy.answer) possibleTypes = possibleTypes.filter(t => t !== 'type-cl');

        // Grammar category specific filtering to avoid task type mismatch
        if (wordCopy.form === 'verb' || wordCopy.form === 'pronoun') {
            possibleTypes = possibleTypes.filter(t => t !== 'type-ga' && t !== 'type-np');
        } else if (wordCopy.form === 'singular_to_plural' || wordCopy.form === 'plural_to_singular') {
            possibleTypes = possibleTypes.filter(t => t === 'type-np' || t === 'type-mc' || t === 'type-cl');
        } else {
            if (!wordCopy.article && !wordCopy.gender) possibleTypes = possibleTypes.filter(t => t !== 'type-ga');
            if (!wordCopy.plural) possibleTypes = possibleTypes.filter(t => t !== 'type-np');
        }

        const isSentence = wordCopy.word && wordCopy.word.includes(' ');
        if (isSentence) {
            possibleTypes = possibleTypes.filter(t => t !== 'type-sc');
            if (wordCopy.numberPlural) possibleTypes = possibleTypes.filter(t => t !== 'type-ws');
        } else {
            possibleTypes = possibleTypes.filter(t => t !== 'type-ws');
        }

        if (possibleTypes.length === 0) return null;
        let selectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];

        // SRS integration: check for smart task type upgrade/downgrade
        const itemId = wordCopy.word || wordCopy.text || wordCopy.topic || wordCopy.digit;
        selectedType = smartTaskType(itemId, currentPractice.language, selectedType);

        // Ensure the smart type is actually enabled/possible
        if (!possibleTypes.includes(selectedType)) {
            selectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        }

        return { ...wordCopy, type: selectedType };
    }).filter(w => w !== null);

    if (currentPractice.words.length === 0) {
        const msg = translations[lang]['alert_no_tasks_generated'] || "Could not generate tasks for these items. Try enabling more task types!";
        if (window.gameUtils && window.gameUtils.showGameMessage) {
            window.gameUtils.showGameMessage('setup-section', msg, 'error');
        }
        return;
    }

    // SRS integration: prioritise due and difficult items
    const srsData = Store.load();
    currentPractice.words = SM2.selectItems(srsData, currentPractice.words, currentPractice.language, 20);

    currentPractice.currentIndex = 0;
    currentPractice.score = 0;
    currentPractice.isWheelMode = isWheelMode;
    document.getElementById('score-count').textContent = '0';

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');

    if (window.GameSessionManager) {
        GameSessionManager.recordSession('Practice', '💡');
    }

    if (isWheelMode) {
        document.getElementById('wheel-container').classList.remove('hidden');
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('practice-progress').classList.add('hidden');
        document.getElementById('progress-text').classList.add('hidden');
        currentPractice.wheelItems = [...currentPractice.words];
        initWheel();
    } else {
        document.getElementById('wheel-container').classList.add('hidden');
        document.getElementById('question-card').classList.remove('hidden');
        document.getElementById('practice-progress').classList.remove('hidden');
        document.getElementById('progress-text').classList.remove('hidden');
        updateProgress();
        showNextWord();
    }
    saveSession();
}

var wheelRotation = 0;
var isSpinning = false;

function initWheel() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) return;
    drawWheel();
}

function drawWheel() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const items = currentPractice.wheelItems;
    if (!items || items.length === 0) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const sliceAngle = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, i) => {
        const startAngle = i * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        // Alternating colors
        const colors = ['#00A896', '#FFC107', '#FF6B6B', '#4CAF50', '#2196F3', '#9C27B0'];
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add text/emoji
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Georgia";

        // Handle different property names for text
        const itemText = item.word || item.text || item.topic || "";
        // Use emoji + text if space allows, or just emoji
        const displayText = (items.length > 10) ? item.emoji : ((item.emoji || "💬") + " " + itemText);

        ctx.fillText(displayText, radius - 20, 10);
        ctx.restore();
    });
}

function spinWheel() {
    if (isSpinning || currentPractice.wheelItems.length === 0) return;
    isSpinning = true;

    const canvas = document.getElementById('wheel-canvas');
    const extraSpins = 5 + Math.random() * 5; // 5 to 10 full spins
    const randomAngle = Math.random() * (2 * Math.PI);
    const totalRotation = extraSpins * 2 * Math.PI + randomAngle;

    wheelRotation += totalRotation;
    canvas.style.transform = `rotate(${wheelRotation}rad)`;

    setTimeout(() => {
        isSpinning = false;
        // Calculate selected item
        // The pointer is at the top (3/2 * PI)
        // Adjust for current rotation
        const normalizedRotation = wheelRotation % (2 * Math.PI);

        // Pointer is at 12 o'clock, which is -PI/2 in canvas arc logic
        // But the canvas rotates clockwise.
        // Rotation = R. Point at Top = 12 o'clock = -PI/2.
        // Word at top = Index such that (Index * sliceAngle + R) % 2PI = -PI/2? No.
        // It's easier:
        // angle_on_canvas = (-PI/2 - R) % 2PI
        // adjust to positive
        let angleOnCanvas = (-Math.PI/2 - normalizedRotation) % (2 * Math.PI);
        if (angleOnCanvas < 0) angleOnCanvas += (2 * Math.PI);

        const items = currentPractice.wheelItems;
        const sliceAngle = (2 * Math.PI) / items.length;
        const selectedIndex = Math.floor(angleOnCanvas / sliceAngle);
        const selectedWord = items[selectedIndex];

        currentPractice.currentWord = selectedWord;
        showWheelQuestion(selectedWord);
    }, 4000);
}

function showWheelQuestion(wordObj) {
    document.getElementById('wheel-question-area').classList.remove('hidden');
    document.getElementById('wheel-emoji-display').textContent = wordObj.emoji || "💬";
    document.getElementById('wheel-word-display').textContent = wordObj.word || wordObj.text || wordObj.topic;

    const subtextEl = document.getElementById('wheel-subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.classList.remove('hidden');
        } else {
            subtextEl.classList.add('hidden');
        }
    }

    // Scroll to question
    document.getElementById('wheel-question-area').scrollIntoView({ behavior: 'smooth' });
}

function resumePractice() {
    if (currentPractice.isWheelMode) {
        document.getElementById('wheel-container').classList.remove('hidden');
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('practice-progress').classList.add('hidden');
        document.getElementById('progress-text').classList.add('hidden');
        initWheel();
    } else {
        document.getElementById('wheel-container').classList.add('hidden');
        document.getElementById('question-card').classList.remove('hidden');
        document.getElementById('practice-progress').classList.remove('hidden');
        document.getElementById('progress-text').classList.remove('hidden');
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    document.getElementById('score-count').textContent = currentPractice.score;
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');

    if (!currentPractice.isWheelMode) {
        updateProgress();
        showNextWord();
    }
}

function showWordDefinition() {
    const wordObj = currentPractice.currentWord;
    if (!wordObj) return;

    const hasDefinitions = wordObj.definitions && wordObj.definitions.length > 0;
    const isVerbRelated = (wordObj.form === 'verb' || wordObj.form === 'verb_form' || wordObj.verb);
    const hasVerbMeta = isVerbRelated && (wordObj.group || wordObj.v2 || wordObj.v3 || wordObj.past_participle);

    if (!hasDefinitions && !hasVerbMeta) return;

    const modal = document.getElementById('definition-modal');
    const content = document.getElementById('definition-content');
    const titleEl = document.getElementById('definition-modal-title');
    const lang = currentPractice.language;
    const t = translations[lang] || translations['en'];

    // Update Modal Title
    titleEl.textContent = (t['definition_modal_title'] || 'Definition');
    titleEl.removeAttribute('data-translate-key');

    content.innerHTML = '';

    // 1. Header (Image + Word + Transcription + Verb Info)
    const header = document.createElement('div');
    header.className = 'definition-header';

    // Visual asset logic (Emoji priority, then Image)
    const imgContainer = document.createElement('div');
    imgContainer.className = 'definition-image-container';
    const displayWord = wordObj.word || wordObj.text || wordObj.topic || "";

    if (wordObj.emoji) {
        const emojiEl = document.createElement('div');
        emojiEl.className = 'definition-emoji-large';
        emojiEl.textContent = wordObj.emoji;
        imgContainer.appendChild(emojiEl);
        header.appendChild(imgContainer);
    } else if (wordObj.image) {
        const img = document.createElement('img');
        img.className = 'definition-image';
        img.src = wordObj.image;
        img.alt = displayWord;
        imgContainer.appendChild(img);
        header.appendChild(imgContainer);
    } else {
        // No visual asset: skip imgContainer
    }

    // Word Info
    const wordInfo = document.createElement('div');
    wordInfo.className = 'definition-word-info';

    const wordTitle = document.createElement('h3');
    wordTitle.className = 'word-title-main';
    wordTitle.textContent = displayWord;
    wordInfo.appendChild(wordTitle);

    if (wordObj.transcription) {
        const trans = document.createElement('div');
        trans.className = 'definition-transcription';
        trans.textContent = `[${wordObj.transcription}]`;
        wordInfo.appendChild(trans);
    }

    // Verb Info (Irregular forms + Group)
    if (wordObj.form === 'verb') {
        const verbInfo = document.createElement('div');
        verbInfo.className = 'definition-verb-info';

        if (wordObj.v2 || wordObj.v3) {
            const irreg = document.createElement('span');
            irreg.className = 'irregular-forms';
            let irregText = "";
            if (wordObj.v2) irregText += wordObj.v2;
            if (wordObj.v2 && wordObj.v3) irregText += " / ";
            if (wordObj.v3) irregText += wordObj.v3;
            irreg.textContent = irregText;
            verbInfo.appendChild(irreg);
        }

        if (wordObj.group) {
            const groupBadge = document.createElement('span');
            groupBadge.className = 'verb-group-badge';
            const groupKey = 'verb_group_' + wordObj.group.toLowerCase().replace(/^-/, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/, '');
            groupBadge.textContent = t[groupKey] || wordObj.group;
            verbInfo.appendChild(groupBadge);
        }

        if (verbInfo.children.length > 0) {
            wordInfo.appendChild(verbInfo);
        }
    }
    header.appendChild(wordInfo);
    content.appendChild(header);

    // 2. Definitions
    wordObj.definitions.forEach((def, index) => {
        const defDiv = document.createElement('div');
        defDiv.className = index === 0 ? 'main-definition' : 'sub-definition';

        const textPara = document.createElement('p');
        textPara.className = 'definition-text';
        textPara.textContent = def.text;
        defDiv.appendChild(textPara);

        // 3. Examples (inside definition block)
        if (def.examples && def.examples.length > 0) {
            const exList = document.createElement('ul');
            exList.className = 'examples-list';
            def.examples.forEach(ex => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="example-prefix">e.g.</span> ${ex}`;
                exList.appendChild(li);
            });
            defDiv.appendChild(exList);
        }
        content.appendChild(defDiv);
    });

    // 4. Footer (Collocations, Antonyms, Synonyms)
    if (wordObj.subtext || wordObj.opposite || (wordObj.synonyms && wordObj.synonyms.length > 0)) {
        const footer = document.createElement('div');
        footer.className = 'definition-footer';

        if (wordObj.subtext) {
            const collPara = document.createElement('div');
            collPara.className = 'synonym-antonym-item';
            collPara.innerHTML = `<span class="synonym-symbol">🔗</span>${wordObj.subtext}`;
            footer.appendChild(collPara);
        }

        if (wordObj.opposite) {
            const antPara = document.createElement('div');
            antPara.className = 'synonym-antonym-item';
            antPara.innerHTML = `<span class="antonym-symbol">≠</span>${wordObj.opposite}`;
            footer.appendChild(antPara);
        }

        if (wordObj.synonyms && wordObj.synonyms.length > 0) {
            const synPara = document.createElement('div');
            synPara.className = 'synonym-antonym-item';
            synPara.innerHTML = `<span class="synonym-symbol">=</span>${wordObj.synonyms.join(', ')}`;
            footer.appendChild(synPara);
        }

        content.appendChild(footer);
    }

    modal.classList.remove('hidden');
    if (typeof setLanguage === 'function') setLanguage(lang);
}

function showNextWord() {
    if (!currentPractice.isWheelMode) {
        if (currentPractice.currentIndex >= currentPractice.words.length) {
            updateProgress();
            showSummary();
            return;
        }
        currentPractice.currentWord = currentPractice.words[currentPractice.currentIndex];
    }

    currentPractice.hintLevel = 0; // Reset hint level for new word
    currentPractice.usedHint = false;
    updateProgress();
    triggerAnimation('fadeIn');

    const wordObj = currentPractice.currentWord;
    currentPractice.isCorrect = false;

    document.getElementById('feedback-message').textContent = '';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('word-display').classList.remove('hidden');
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').classList.add('hidden');
    document.getElementById('action-buttons-container').classList.add('hidden');
    document.getElementById('tf-buttons-container').classList.add('hidden');
    document.getElementById('choices-grid').classList.add('hidden');
    document.getElementById('scramble-container').classList.add('hidden');
    document.getElementById('conversation-container').classList.add('hidden');
    document.getElementById('matching-container').classList.add('hidden');
    document.getElementById('sorting-container').classList.add('hidden');
    document.getElementById('labeling-container').classList.add('hidden');
    document.getElementById('word-bank-container').classList.add('hidden');

    if (wordObj.type === 'type-tf' || wordObj.type === 'type-cv') {
        document.getElementById('hint-btn').classList.add('hidden');
    } else {
        document.getElementById('hint-btn').classList.remove('hidden');
    }

    // Show "What to do" instruction
    const wtdEl = document.getElementById('task-what-to-do');
    if (wtdEl) {
        const lang = currentPractice.language;
        let typeKey = (wordObj.subTheme === 'grammar_comparative_superlative' || wordObj.theme === 'grammar_comparative_superlative') ? 'ac' :
                      (wordObj.subTheme === 'grammar_adjective_agreement' || wordObj.theme === 'grammar_adjective_agreement') ? 'aa' :
                      wordObj.secondaryContext === 'reg_vs_irregular' ? 'ri' :
                      wordObj.secondaryContext === 'stative_vs_action' ? 'vs' :
                      wordObj.form === 'verb_form' ? 'vf' :
                      wordObj.form === 'verb' ? 'gv' :
                      wordObj.form === 'pronoun' ? 'gp' :
                      wordObj.type === 'type-ws' ? 'ws' :
                      wordObj.type === 'type-op' ? 'op' :
                      wordObj.type === 'type-cl' ? 'cl' :
                      wordObj.type === 'type-mc' ? 'mc' :
                      wordObj.type === 'type-ls' ? 'ls' :
                      wordObj.type === 'type-sc' ? 'sc' :
                      wordObj.type === 'type-tf' ? 'tf' :
                      wordObj.type === 'type-ga' ? 'ga' :
                      wordObj.type === 'type-np' ? 'np' : '';

        const wtdKey = `wtd_${typeKey}`;
        if (translations[lang] && translations[lang][wtdKey]) {
            wtdEl.textContent = translations[lang][wtdKey];
            wtdEl.classList.remove('hidden');
            wtdEl.setAttribute('data-translate-key', wtdKey);
        } else {
            wtdEl.classList.add('hidden');
        }
    }

    // Show Example
    const exampleEl = document.getElementById('task-example');
    if (exampleEl) {
        const lang = currentPractice.language;
        let typeKey = "";
        if (wordObj.subTheme === 'grammar_comparative_superlative' || wordObj.theme === 'grammar_comparative_superlative') {
            typeKey = 'ac';
        } else if (wordObj.subTheme === 'grammar_adjective_agreement' || wordObj.theme === 'grammar_adjective_agreement') {
            typeKey = 'aa';
        } else if (wordObj.form === 'verb_form') {
            typeKey = 'vf';
        } else if (wordObj.form === 'verb') {
            typeKey = 'gv';
        } else if (wordObj.form === 'pronoun') {
            typeKey = 'gp';
        } else if (wordObj.type === 'type-cv') {
            typeKey = 'cv';
        } else {
            typeKey = wordObj.secondaryContext === 'reg_vs_irregular' ? 'ri' :
                      wordObj.secondaryContext === 'stative_vs_action' ? 'vs' :
                      wordObj.type === 'type-ws' ? 'ws' :
                      wordObj.type === 'type-mc' ? 'mc' :
                      wordObj.type === 'type-ls' ? 'ls' :
                      wordObj.type === 'type-sc' ? 'sc' :
                      wordObj.type === 'type-op' ? 'op' :
                      wordObj.type === 'type-cl' ? 'cl' :
                      wordObj.type === 'type-tf' ? 'tf' :
                      wordObj.type === 'type-ga' ? 'ga' :
                      wordObj.type === 'type-np' ? 'np' : '';
        }
        const exampleKey = `example_${typeKey}`;
        if (translations[lang] && translations[lang][exampleKey]) {
            exampleEl.textContent = translations[lang][exampleKey];
            exampleEl.classList.remove('hidden');
        } else {
            exampleEl.classList.add('hidden');
        }
    }

    const subtextEl = document.getElementById('subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.classList.remove('hidden');
        } else {
            subtextEl.classList.add('hidden');
        }
    }

    // Display metadata (form and level)
    const metaContainer = document.getElementById('word-meta');
    const formBadge = document.getElementById('word-form');
    const levelBadge = document.getElementById('word-level');

    if (wordObj.form || wordObj.level || wordObj.classification || wordObj.aspect || wordObj.group) {
        metaContainer.classList.remove('hidden');
        metaContainer.innerHTML = ''; // Clear existing badges
        const lang = currentPractice.language;

        const addBadge = (text, className, translateKey) => {
            const span = document.createElement('span');
            span.className = 'meta-badge ' + className;
            span.textContent = (translateKey && translations[lang] && translations[lang][translateKey]) ? translations[lang][translateKey] : text;
            if (translateKey) span.setAttribute('data-translate-key', translateKey);
            metaContainer.appendChild(span);
        };

        if (wordObj.form) {
            addBadge(wordObj.form, 'form-badge', `form_${wordObj.form}`);
        } else if (wordObj.type === 'type-ga' || wordObj.type === 'type-np') {
            addBadge('noun', 'form-badge', 'form_noun');
        }
        if (wordObj.classification) {
            addBadge(wordObj.classification, 'class-badge', `verb_classification_${wordObj.classification}`);
        }
        if (wordObj.aspect) {
            addBadge(wordObj.aspect, 'aspect-badge', `verb_aspect_${wordObj.aspect}`);
        }
        if (wordObj.group) {
            let groupKey = 'verb_group_' + wordObj.group.toLowerCase().replace(/^-/, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/, '');
            addBadge(wordObj.group, 'group-badge', groupKey);
        }
        if (wordObj.level) {
            const levelLabel = (translations[lang] && translations[lang]['level_label']) ? translations[lang]['level_label'] : 'Level';
            addBadge(`${levelLabel}: ${wordObj.level}`, 'level-badge');
        }
    } else {
        metaContainer.classList.add('hidden');
    }

    const subtextDisplay = document.getElementById('subtext-display');
    if (subtextDisplay) subtextDisplay.classList.add('hidden'); // Default hide

    if (wordObj.type === 'type-mc' || wordObj.type === 'type-ls') {
        const isListen = wordObj.type === 'type-ls';
        let text = isListen ? '???' : (wordObj.clozeText || wordObj.primaryPrompt || wordObj.digit || wordObj.word || wordObj.text || wordObj.topic);
        let sub = wordObj.secondaryContext || (isListen ? "" : wordObj.subtext);

        // Fix redundancy: hide target word for MC vocab if emoji is present
        if (!isListen && (wordObj.category === 'vocabulary' || !wordObj.category || wordObj.category === 'conversation') && wordObj.emoji && !wordObj.primaryPrompt && !wordObj.clozeText && !wordObj.digit) {
            text = "???";
        }

        document.getElementById('word-display').textContent = text;
        const subDisplay = document.getElementById('subtext-display');
        if (subDisplay) {
            subDisplay.textContent = sub || "";
            if (sub) subDisplay.classList.remove('hidden');
            else subDisplay.classList.add('hidden');
        }
        document.getElementById('emoji-display').textContent = isListen ? '👂' : (wordObj.emoji || '💡');
        document.getElementById('task-instruction').setAttribute('data-translate-key', isListen ? 'task_listen_select' : 'task_multiple_choice');
        document.getElementById('choices-grid').classList.remove('hidden');
        document.getElementById('action-buttons-container').classList.remove('hidden');
        document.getElementById('check-opposite-btn').classList.add('hidden'); // Not needed for MC
        renderMultipleChoice();
        if (isListen) {
            setTimeout(speakWord, 500);
        }
    } else if (wordObj.type === 'type-cl' || wordObj.type === 'type-np') {
        const isNP = wordObj.type === 'type-np';
        let text = wordObj.clozeText || wordObj.primaryPrompt || wordObj.digit || wordObj.word || wordObj.text || wordObj.topic || (isNP ? wordObj.numberPlural || "" : "");
        let sub = wordObj.secondaryContext || "";

        // Fix redundancy for typing tasks too
        if ((wordObj.category === 'vocabulary' || !wordObj.category) && wordObj.emoji && !wordObj.primaryPrompt && !wordObj.clozeText && !wordObj.digit) {
            text = "???";
        }

        document.getElementById('word-display').textContent = text;
        const subDisplay = document.getElementById('subtext-display');
        if (subDisplay) {
            subDisplay.textContent = sub || "";
            if (sub) subDisplay.classList.remove('hidden');
            else subDisplay.classList.add('hidden');
        }
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', isNP ? 'task_number_plural' : 'task_cloze');
        document.getElementById('opposite-input-container').classList.remove('hidden');
        document.getElementById('action-buttons-container').classList.remove('hidden');
        document.getElementById('check-opposite-btn').classList.remove('hidden');
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'type-sc' || wordObj.type === 'type-ws') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'type-ws' ? 'task_word_scramble' : 'task_scramble');
        document.getElementById('scramble-container').classList.remove('hidden');
        document.getElementById('action-buttons-container').classList.remove('hidden');
        document.getElementById('check-opposite-btn').classList.add('hidden'); // Auto-checked
        if (wordObj.type === 'type-ws') {
            renderWordScramble();
        } else {
            renderScramble();
        }
    } else if (wordObj.type === 'type-ga') {
        document.getElementById('word-display').textContent = wordObj.baseWord || wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_gender_articles');
        document.getElementById('choices-grid').classList.remove('hidden');
        document.getElementById('action-buttons-container').classList.remove('hidden');
        document.getElementById('check-opposite-btn').classList.add('hidden');
        renderGenderArticles();
    } else if (wordObj.type === 'type-tf') {
        document.getElementById('word-display').textContent = wordObj.word || wordObj.text || wordObj.topic;
        const isTrueQuestion = Math.random() > 0.5;
        currentPractice.tfCorrectAnswer = isTrueQuestion;

        if (isTrueQuestion) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            const pool = vocabularyData[currentPractice.language] || [];
            const distractors = pool.filter(v => v.emoji && v.emoji !== wordObj.emoji);
            const distractor = distractors[Math.floor(Math.random() * distractors.length)];
            document.getElementById('emoji-display').textContent = (distractor ? distractor.emoji : "❓");
        }

        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        document.getElementById('tf-buttons-container').classList.remove('hidden');
    } else if (wordObj.type === 'type-cv') {
        document.getElementById('word-display').textContent = wordObj.word || wordObj.text || wordObj.topic;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💬';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_conversation');
        document.getElementById('conversation-container').classList.remove('hidden');
        document.getElementById('conversation-response').value = '';
        document.getElementById('conversation-response').focus();
    } else if (wordObj.type === 'type-op') {
        document.getElementById('word-display').textContent = wordObj.word || wordObj.text || wordObj.topic;
        document.getElementById('emoji-display').textContent = wordObj.emoji || "💡";
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        document.getElementById('opposite-input-container').classList.remove('hidden');
        document.getElementById('action-buttons-container').classList.remove('hidden');
        document.getElementById('check-opposite-btn').classList.remove('hidden');
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'type-ma') {
        document.getElementById('word-display').classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🧩';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_matching');
        document.getElementById('matching-container').classList.remove('hidden');
        renderMatching();
    } else if (wordObj.type === 'type-si') {
        document.getElementById('word-display').classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🗂️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_sorting');
        document.getElementById('sorting-container').classList.remove('hidden');
        renderSorting();
    } else if (wordObj.type === 'type-lp') {
        document.getElementById('word-display').classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🖼️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_labeling');
        document.getElementById('labeling-container').classList.remove('hidden');
        renderLabeling();
    } else if (wordObj.type === 'type-bb') {
        document.getElementById('word-display').classList.add('hidden');
        document.getElementById('emoji-display').textContent = '📥';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_word_bank');
        document.getElementById('word-bank-container').classList.remove('hidden');
        renderWordBank();
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    // Add definition hint
    const wordDisplay = document.getElementById('word-display');
    if (wordDisplay) {
        const hasDefinitions = wordObj.definitions && wordObj.definitions.length > 0;
        const isVerbRelated = (wordObj.form === 'verb' || wordObj.form === 'verb_form' || wordObj.verb);
        const hasVerbMeta = isVerbRelated && (wordObj.group || wordObj.v2 || wordObj.v3 || wordObj.past_participle);

        if (hasDefinitions || hasVerbMeta) {
            wordDisplay.classList.add('has-definition');
            wordDisplay.title = (translations[currentPractice.language] && translations[currentPractice.language]['click_for_definition']) || "Click for definition";
        } else {
            wordDisplay.classList.remove('has-definition');
            wordDisplay.removeAttribute('title');
        }
    }
}


function checkMultipleChoiceAnswer(choice, btn) {
    const wordObj = currentPractice.currentWord;
    const targetValue = (wordObj.answer || wordObj.word || wordObj.text || wordObj.topic).toLowerCase();
    const possibleAnswers = targetValue.split(' / ').map(a => a.trim().toLowerCase());

    // In MC mode, the choice could be a single correct variant OR the full concatenated answer string.
    // We check if the clicked button's text is one of the valid single answers or matches the full string.
    const isCorrect = possibleAnswers.some(a => a === choice.toLowerCase()) || choice.toLowerCase() === targetValue;

    if (isCorrect) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('incorrect');
        // SRS integration: record incorrect
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, false, currentPractice.usedHint);
        }
        showFeedback(false);
    }
}



function checkScrambleAnswer() {
    const wordObj = currentPractice.currentWord;
    const target = (wordObj.answer || wordObj.word || wordObj.text || wordObj.topic)
        .replace(/[.,!?;:\-]/g, '')
        .replace(/\s/g, '')
        .toLowerCase();
    const current = currentPractice.scrambleAnswer.toLowerCase();

    if (current === target) {
        showFeedback(true);
    } else {
        // SRS integration: record incorrect
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, false, currentPractice.usedHint);
        }
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function checkWordScrambleAnswer() {
    const wordObj = currentPractice.currentWord;
    // Normalize target: remove punctuation and multiple spaces
    const target = (wordObj.word || wordObj.text || wordObj.topic)
        .toLowerCase()
        .replace(/[.,!?;:\-]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    const current = currentPractice.scrambleAnswerWords
        .join(' ')
        .toLowerCase()
        .replace(/[.,!?;:\-]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (current === target) {
        showFeedback(true);
    } else {
        // SRS integration: record incorrect
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, false, currentPractice.usedHint);
        }
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function checkTypedAnswer() {
    const normalize = (s) => s.toLowerCase().replace(/[.,!?;:\-]/g, '').replace(/\s+/g, ' ').trim();
    const userAnswer = normalize(document.getElementById('opposite-answer').value);
    let correctAnswer;

    const type = currentPractice.currentWord.type;
    if (type === 'type-cl' || type === 'type-np') {
        correctAnswer = (currentPractice.currentWord.answer || "");
    } else if (type === 'type-op') {
        correctAnswer = (currentPractice.currentWord.opposite || "");
    } else {
        // Fallback for other types that might reach here
        const w = currentPractice.currentWord;
        correctAnswer = (w.answer || w.word || w.text || w.topic || "");
    }

    const possibleAnswers = correctAnswer.split(' / ').map(a => normalize(a));

    // User is correct if they type any of the valid alternatives
    const isCorrect = possibleAnswers.some(a => a === userAnswer);

    if (isCorrect) {
        showFeedback(true);
    } else {
        // SRS integration: record incorrect
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, false, currentPractice.usedHint);
        }
        showFeedback(false);
    }
}

function checkTrueFalseAnswer(userAnswer) {
    if (userAnswer === currentPractice.tfCorrectAnswer) {
        showFeedback(true);
    } else {
        // SRS integration: record incorrect
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, false, currentPractice.usedHint);
        }
        showFeedback(false);
    }
}

function showSummary() {
    updateStreak();
    clearSession();
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.classList.add('hidden');

    const finalScoreEl = document.getElementById('final-score');
    const finalTotalScoreEl = document.getElementById('final-total-score');
    const finalStreakEl = document.getElementById('final-streak');
    const streakUnitEl = document.getElementById('streak-unit');
    const summaryModal = document.getElementById('summary-modal');
    const practiceSection = document.getElementById('practice-section');

    if (finalScoreEl) finalScoreEl.textContent = currentPractice.score;
    if (finalTotalScoreEl) finalTotalScoreEl.textContent = loadTotalScore();

    const streak = loadStreak();
    if (finalStreakEl) finalStreakEl.textContent = streak;
    if (streakUnitEl) {
        const lang = currentPractice.language;
        const dayKey = streak === 1 ? 'streak_day' : 'streak_days';
        streakUnitEl.textContent = (translations[lang] && translations[lang][dayKey]) ? translations[lang][dayKey] : 'days';
        streakUnitEl.setAttribute('data-translate-key', dayKey);
    }

    if (summaryModal) summaryModal.classList.remove('hidden');
    if (practiceSection) practiceSection.classList.add('hidden');

    window.gameUtils.createConfetti();
}

function showFeedback(isCorrect) {
    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');

    if (typeof flashAnswer === 'function') {
        flashAnswer(isCorrect);
    }
    feedbackMsg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');

    // Mobile UX: flash feedback
    if (typeof flashAnswer === 'function') {
        flashAnswer(isCorrect);
    }

    playSound(isCorrect);
    if (!isCorrect) {
        triggerAnimation('shake');
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    if (isCorrect) {
        currentPractice.score += 10;
        document.getElementById('score-count').textContent = currentPractice.score;
        updateTotalScore(10);

        // SRS integration: record performance
        const itemId = currentPractice.currentWord.word || currentPractice.currentWord.text || currentPractice.currentWord.topic || currentPractice.currentWord.digit;
        if (itemId) {
            Store.record(itemId, currentPractice.language, currentPractice.currentWord.type, true, currentPractice.usedHint);
        }

        currentPractice.isCorrect = true;
        document.getElementById('next-btn').classList.remove('hidden');

        saveSession();
        document.getElementById('opposite-input-container').classList.add('hidden');
        document.getElementById('action-buttons-container').classList.add('hidden');
        document.getElementById('tf-buttons-container').classList.add('hidden');
        document.getElementById('choices-grid').classList.add('hidden');
        document.getElementById('scramble-container').classList.add('hidden');
        document.getElementById('conversation-container').classList.add('hidden');
        document.getElementById('matching-container').classList.add('hidden');
        document.getElementById('sorting-container').classList.add('hidden');
        document.getElementById('labeling-container').classList.add('hidden');
        document.getElementById('word-bank-container').classList.add('hidden');
        document.getElementById('hint-btn').classList.add('hidden');
    } else {
        const wordObj = currentPractice.currentWord;
        const lang = currentPractice.language;
        let reviewURL = "";
        const cat = document.querySelector('input[name="practice-cat"]:checked')?.id.replace('cat-', '');

        if (cat === 'grammar') {
            const verb = wordObj.verb || wordObj.baseWord || wordObj.word;
            reviewURL = `grammar-reference.html?lang=${lang}#verb-${verb.replace(/\s+/g, '-')}`;
        } else {
            const search = wordObj.word || wordObj.text || wordObj.topic;
            reviewURL = `vocabulary-reference.html?lang=${lang}&search=${encodeURIComponent(search)}`;
        }

        const reviewLabel = (translations[lang] && translations[lang]['review_ref']) || "Review in Reference 📚";
        const linkHTML = `<br><a href="${reviewURL}" target="_blank" style="color:inherit; font-size:0.85em; text-decoration:underline;">${reviewLabel}</a>`;
        feedbackMsg.innerHTML += linkHTML;
    }
}


function selectMatchItem(el, id, type) {
    if (el.classList.contains('matched')) return;

    if (!currentPractice.matchState.selectedWord) {
        currentPractice.matchState.selectedWord = { el, id, type };
        el.classList.add('selected');
    } else {
        const prev = currentPractice.matchState.selectedWord;
        if (prev.type === type) {
            prev.el.classList.remove('selected');
            currentPractice.matchState.selectedWord = { el, id, type };
            el.classList.add('selected');
        } else {
            if (prev.id === id) {
                prev.el.classList.remove('selected');
                prev.el.classList.add('matched');
                el.classList.add('matched');
                currentPractice.matchState.selectedWord = null;
                currentPractice.matchState.matchedCount++;
                if (currentPractice.matchState.matchedCount === currentPractice.matchState.totalPairs) {
                    showFeedback(true);
                }
            } else {
                prev.el.classList.remove('selected');
                prev.el.classList.add('incorrect');
                el.classList.add('incorrect');
                setTimeout(() => {
                    prev.el.classList.remove('incorrect');
                    el.classList.remove('incorrect');
                }, 500);
                currentPractice.matchState.selectedWord = null;
            }
        }
    }
}

function showNextSortingItem() {
    const itemEl = document.getElementById('sorting-item');
    if (currentPractice.sortingState.currentIndex >= currentPractice.sortingState.items.length) {
        showFeedback(true);
        return;
    }
    const item = currentPractice.sortingState.items[currentPractice.sortingState.currentIndex];
    itemEl.textContent = item.word || item.text;
}

function checkSortingItem(bucket) {
    const item = currentPractice.sortingState.items[currentPractice.sortingState.currentIndex];
    const correct = item.gender || item.classification || item.group;
    if (correct === bucket) {
        currentPractice.sortingState.currentIndex++;
        showNextSortingItem();
    } else {
        showFeedback(false);
    }
}


