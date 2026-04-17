/**
 * Core Exercise Rendering Logic
 * Shared between practice.js and lesson.js
 */

function loadTotalScore() {
    return parseInt(localStorage.getItem('cosy_total_points') || 0);
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);

    // Public practice.html elements
    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    if (totalScoreEl) totalScoreEl.textContent = total;
    if (setupTotalScoreEl) setupTotalScoreEl.textContent = total;

    return total;
}

function loadStreak() {
    const streak = localStorage.getItem('practice_streak') || 0;
    const streakCountEl = document.getElementById('streak-count');
    if (streakCountEl) streakCountEl.textContent = streak;
    return parseInt(streak);
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

        if (diffDays === 1) streak++;
        else streak = 1;
    } else streak = 1;

    localStorage.setItem('practice_streak', streak);
    localStorage.setItem('last_practice_date', today);

    const streakCountEl = document.getElementById('streak-count');
    if (streakCountEl) streakCountEl.textContent = streak;
}

function getExerciseContext() {
    if (typeof currentPractice !== 'undefined' && currentPractice) return currentPractice;
    if (typeof currentLesson !== 'undefined' && currentLesson) return currentLesson;
    return null;
}

function updateProgress() {
    const ctx = getExerciseContext();
    if (!ctx) return;
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    const total = ctx.words.length;
    const current = ctx.currentIndex;

    let displayIndex = current;
    if (typeof currentPractice !== 'undefined' && currentPractice && currentPractice.isWheelMode) {
        displayIndex = total - currentPractice.wheelItems.length;
    }

    const percentage = total > 0 ? (displayIndex / total) * 100 : 0;
    if (fill) fill.style.width = percentage + '%';
    if (text) {
        const lang = ctx.language;
        const wordLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang]['progress_word']) ? translations[lang]['progress_word'] : 'Word';
        const ofLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang]['progress_of']) ? translations[lang]['progress_of'] : 'of';
        text.textContent = `${wordLabel} ${Math.min(displayIndex + 1, total)} ${ofLabel} ${total}`;
    }

    if (typeof updateProgressBar === 'function') {
        updateProgressBar(displayIndex, total);
    }
}

function showSummary() {
    const ctx = getExerciseContext();
    if (!ctx) return;

    updateStreak();

    if (typeof clearSession === 'function') clearSession();
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.classList.add('hidden');

    const finalScoreEl = document.getElementById('final-score');
    const finalTotalScoreEl = document.getElementById('final-total-score');
    const finalStreakEl = document.getElementById('final-streak');
    const streakUnitEl = document.getElementById('streak-unit');
    const summaryModal = document.getElementById('summary-modal');
    const practiceSection = document.getElementById('practice-section');

    if (finalScoreEl) finalScoreEl.textContent = ctx.score;
    if (finalTotalScoreEl) finalTotalScoreEl.textContent = loadTotalScore();

    const streak = loadStreak();
    if (finalStreakEl) finalStreakEl.textContent = streak;
    if (streakUnitEl) {
        const lang = ctx.language;
        const dayKey = streak === 1 ? 'streak_day' : 'streak_days';
        const streakLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang][dayKey]) ? translations[lang][dayKey] : (streak === 1 ? 'day' : 'days');
        streakUnitEl.textContent = streakLabel;
        streakUnitEl.setAttribute('data-translate-key', dayKey);
    }

    if (summaryModal) summaryModal.classList.remove('hidden');
    if (practiceSection) practiceSection.classList.add('hidden');

    if (window.gameUtils && window.gameUtils.createConfetti) {
        window.gameUtils.createConfetti();
    }
}

function showWordDefinition() {
    const ctx = getExerciseContext();
    if (!ctx || !ctx.currentWord) return;
    const wordObj = ctx.currentWord;

    const hasDefinitions = wordObj.definitions && wordObj.definitions.length > 0;
    const isVerbRelated = (wordObj.form === 'verb' || wordObj.form === 'verb_form' || wordObj.verb);
    const hasVerbMeta = isVerbRelated && (wordObj.group || wordObj.v2 || wordObj.v3 || wordObj.past_participle);

    if (!hasDefinitions && !hasVerbMeta) return;

    const modal = document.getElementById('definition-modal');
    if (!modal) return;
    const content = document.getElementById('definition-content');
    const titleEl = document.getElementById('definition-modal-title');
    const lang = ctx.language;
    const t = (typeof translations !== 'undefined' && translations[lang]) || (typeof translations !== 'undefined' && translations['en']) || {};

    // Update Modal Title
    if (titleEl) {
        titleEl.textContent = (t['definition_modal_title'] || 'Definition');
        titleEl.removeAttribute('data-translate-key');
    }

    if (content) {
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
        if (wordObj.definitions) {
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
        }

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
    }

    modal.classList.remove('hidden');
    modal.style.display = 'flex'; // Support for lesson.html flex layout
    if (typeof setLanguage === 'function') setLanguage(lang);
}

function resetExerciseUI() {
    const containers = [
        'opposite-input-container',
        'action-buttons-container',
        'tf-buttons-container',
        'choices-grid',
        'scramble-container',
        'conversation-container',
        'matching-container',
        'sorting-container',
        'labeling-container',
        'word-bank-container'
    ];
    containers.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden');
            el.style.display = ''; // Clear any inline styles from lesson.js
        }
    });

    const feedback = document.getElementById('feedback-message');
    if (feedback) feedback.textContent = '';

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.classList.add('hidden');
        nextBtn.style.display = '';
    }
}

function showHint() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    if (!wordObj) return;
    ctx.usedHint = true;

    let targetAnswer = "";
    const taskType = wordObj.type;

    // Unify getting the target answer for hints
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
        const classLabel = (translations[ctx.language] && translations[ctx.language][`verb_classification_${wordObj.classification}`]) || wordObj.classification;
        tip += classLabel + " ";
    }
    if (wordObj.group) {
        tip += "(" + wordObj.group + ") ";
    }
    if (tip) tip = tip.trim() + ": ";

    // Support multiple correct answers
    const answers = targetAnswer.split(' / ').map(a => a.trim());
    ctx.hintLevel = (ctx.hintLevel || 0) + 1;

    const hints = answers.map(ans => {
        // Reveal up to length - 2 characters to keep some challenge
        const maxReveal = Math.max(1, ans.length - 2);
        const revealCount = Math.min(ctx.hintLevel, maxReveal);
        let hintPart = ans.substring(0, revealCount);
        if (hintPart) {
            hintPart = hintPart.charAt(0).toUpperCase() + hintPart.slice(1);
            return hintPart + "...";
        }
        return "...";
    });

    const feedbackMsg = document.getElementById('feedback-message');
    if (feedbackMsg) {
        feedbackMsg.className = 'feedback-text hint';
        feedbackMsg.textContent = "Hint: " + tip + hints.join(' / ');
    }
}

function speakWord() {
    const ctx = getExerciseContext();
    if (!ctx || !ctx.currentWord) return;
    const wordObj = ctx.currentWord;

    const text = (wordObj.type === 'type-ga' && wordObj.baseWord)
        ? wordObj.baseWord
        : (wordObj.word || wordObj.text || wordObj.topic || wordObj.baseWord);

    if (window.gameUtils && window.gameUtils.speak) {
        window.gameUtils.speak(text, ctx.language);
    }
}

function checkMultipleChoiceAnswer(choice, btn) {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const targetValue = (wordObj.answer || wordObj.word || wordObj.text || wordObj.topic).toLowerCase();
    const possibleAnswers = targetValue.split(' / ').map(a => a.trim().toLowerCase());

    const isCorrect = possibleAnswers.some(a => a === choice.toLowerCase()) || choice.toLowerCase() === targetValue;

    if (isCorrect) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('incorrect');
        // SRS integration if available
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = wordObj.word || wordObj.text || wordObj.topic || wordObj.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, wordObj.type, false, ctx.usedHint);
            }
        }
        showFeedback(false);
    }
}

function showFeedback(isCorrect) {
    const ctx = getExerciseContext();
    const feedbackMsg = document.getElementById('feedback-message');
    if (!feedbackMsg) return;

    feedbackMsg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');

    if (typeof flashAnswer === 'function') {
        flashAnswer(isCorrect);
    }
    feedbackMsg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');

    if (typeof playSound === 'function') {
        playSound(isCorrect);
    } else if (window.gameUtils && window.gameUtils.playSound) {
        // Fallback or use shared utility if exists
    }

    if (!isCorrect && typeof triggerAnimation === 'function') {
        triggerAnimation('shake');
    }

    if (typeof setLanguage === 'function') {
        setLanguage(ctx.language);
    }

    if (isCorrect) {
        ctx.score += 10;
        const scoreEl = document.getElementById('score-count');
        if (scoreEl) scoreEl.textContent = ctx.score;

        if (typeof updateTotalScore === 'function') updateTotalScore(10);

        // SRS integration: record performance
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = ctx.currentWord.word || ctx.currentWord.text || ctx.currentWord.topic || ctx.currentWord.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, ctx.currentWord.type, true, ctx.usedHint);
            }
        }

        ctx.isCorrect = true;
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.style.display = 'block'; // Ensure visibility for both engines
        }

        if (typeof saveSession === 'function') saveSession();

        // Hide task containers
        const containers = [
            'opposite-input-container',
            'action-buttons-container',
            'tf-buttons-container',
            'choices-grid',
            'scramble-container',
            'conversation-container',
            'matching-container',
            'sorting-container',
            'labeling-container',
            'word-bank-container',
            'hint-btn'
        ];
        containers.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
    } else {
        const wordObj = ctx.currentWord;
        const lang = ctx.language;

        // Determine category for review link
        let cat = 'vocab';
        if (typeof currentPractice !== 'undefined') {
            const selected = document.querySelector('input[name="practice-cat"]:checked');
            if (selected) cat = selected.id.replace('cat-', '');
        } else if (wordObj.grammar || wordObj.form === 'verb') {
            cat = 'grammar';
        }

        let reviewURL = "";
        if (cat === 'grammar') {
            const verb = wordObj.verb || wordObj.baseWord || wordObj.word;
            reviewURL = `grammar-reference.html?lang=${lang}#verb-${verb.replace(/\s+/g, '-')}`;
        } else {
            const search = wordObj.word || wordObj.text || wordObj.topic;
            reviewURL = `vocabulary-reference.html?lang=${lang}&search=${encodeURIComponent(search)}`;
        }

        const reviewLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang]['review_ref']) || "Review in Reference 📚";
        const linkHTML = `<br><a href="${reviewURL}" target="_blank" style="color:inherit; font-size:0.85em; text-decoration:underline;">${reviewLabel}</a>`;
        feedbackMsg.innerHTML += linkHTML;
    }
}

function checkTypedAnswer() {
    const ctx = getExerciseContext();
    const normalize = (s) => s.toLowerCase().replace(/[.,!?;:\-]/g, '').replace(/\s+/g, ' ').trim();
    const inputEl = document.getElementById('opposite-answer');
    if (!inputEl) return;
    const userAnswer = normalize(inputEl.value);
    let correctAnswer;

    const type = ctx.currentWord.type;
    if (type === 'type-cl' || type === 'type-np') {
        correctAnswer = (ctx.currentWord.answer || "");
    } else if (type === 'type-op') {
        correctAnswer = (ctx.currentWord.opposite || "");
    } else {
        // Fallback for other types that might reach here
        const w = ctx.currentWord;
        correctAnswer = (w.answer || w.word || w.text || w.topic || "");
    }

    const possibleAnswers = correctAnswer.split(' / ').map(a => normalize(a));

    const isCorrect = possibleAnswers.some(a => a === userAnswer);

    if (isCorrect) {
        showFeedback(true);
    } else {
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = ctx.currentWord.word || ctx.currentWord.text || ctx.currentWord.topic || ctx.currentWord.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, ctx.currentWord.type, false, ctx.usedHint);
            }
        }
        showFeedback(false);
    }
}

function checkScrambleAnswer() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const target = (wordObj.answer || wordObj.word || wordObj.text || wordObj.topic)
        .replace(/[.,!?;:\-]/g, '')
        .replace(/\s/g, '')
        .toLowerCase();
    const current = ctx.scrambleAnswer.toLowerCase();

    if (current === target) {
        showFeedback(true);
    } else {
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = wordObj.word || wordObj.text || wordObj.topic || wordObj.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, wordObj.type, false, ctx.usedHint);
            }
        }
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function checkWordScrambleAnswer() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    // Normalize target: remove punctuation and multiple spaces
    const target = (wordObj.word || wordObj.text || wordObj.topic)
        .toLowerCase()
        .replace(/[.,!?;:\-]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    const current = ctx.scrambleAnswerWords
        .join(' ')
        .toLowerCase()
        .replace(/[.,!?;:\-]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (current === target) {
        showFeedback(true);
    } else {
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = wordObj.word || wordObj.text || wordObj.topic || wordObj.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, wordObj.type, false, ctx.usedHint);
            }
        }
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function checkTrueFalseAnswer(userAnswer) {
    const ctx = getExerciseContext();
    if (userAnswer === ctx.tfCorrectAnswer) {
        showFeedback(true);
    } else {
        if (typeof Store !== 'undefined' && Store.record) {
            const itemId = ctx.currentWord.word || ctx.currentWord.text || ctx.currentWord.topic || ctx.currentWord.digit;
            if (itemId) {
                Store.record(itemId, ctx.language, ctx.currentWord.type, false, ctx.usedHint);
            }
        }
        showFeedback(false);
    }
}

function renderMultipleChoice() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const grid = document.getElementById('choices-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const correct = wordObj.answer || wordObj.word || wordObj.text || wordObj.topic;
    let choices = [correct];

    if (wordObj.distractors && wordObj.distractors.length > 0) {
        choices.push(...wordObj.distractors.sort(() => Math.random() - 0.5).slice(0, 2));
    } else {
        const pool = ctx.words || [];
        const distractors = pool
            .map(w => w.answer || w.word || w.text || w.topic)
            .filter(val => val && val.toLowerCase() !== correct.toLowerCase());
        choices.push(...[...new Set(distractors)].sort(() => Math.random() - 0.5).slice(0, 2));
    }

    choices = [...new Set(choices)];
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => checkMultipleChoiceAnswer(choice, btn);
        grid.appendChild(btn);
    });
}

function renderGenderArticles() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const grid = document.getElementById('choices-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const lang = ctx.language;
    const config = (typeof GRAMMAR_CONFIG !== 'undefined') ? GRAMMAR_CONFIG[lang] : null;

    let choices = [];
    if (wordObj.distractors && wordObj.distractors.length > 0) {
        choices = [wordObj.answer, ...wordObj.distractors];
    } else if (config && config.articles) {
        choices = config.articles;
    } else {
        const articlesMap = {
            it: ['il', 'la', 'lo', "l'", 'i', 'gli', 'le'],
            fr: ['le', 'la', "l'", 'les'],
            el: ['ο', 'η', 'το', 'οι', 'τα'],
            ru: ['он', 'она', 'оно']
        };
        choices = articlesMap[lang] || [];
    }

    const targetValue = wordObj.answer || wordObj.article || wordObj.gender || "";
    const possibleAnswers = targetValue.split(' / ').map(a => a.trim().toLowerCase());

    choices = [...new Set(choices)].sort(() => Math.random() - 0.5);

    choices.forEach(article => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = article;
        btn.onclick = () => {
            if (possibleAnswers.includes(article.toLowerCase())) {
                btn.classList.add('correct');
                showFeedback(true);
            } else {
                btn.classList.add('incorrect');
                showFeedback(false);
            }
        };
        grid.appendChild(btn);
    });
}

function renderScramble() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const lettersDiv = document.getElementById('scramble-letters');
    const assemblyDiv = document.getElementById('word-assembly');
    if (!lettersDiv || !assemblyDiv) return;

    lettersDiv.innerHTML = '';
    assemblyDiv.textContent = '';
    ctx.scrambleAnswer = '';

    const target = (wordObj.answer || wordObj.word || wordObj.text || wordObj.topic)
        .replace(/[.,!?;:\-]/g, '')
        .replace(/\s/g, '');
    const letters = target.split('').sort(() => Math.random() - 0.5);

    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = letter;
        btn.onclick = () => {
            ctx.scrambleAnswer += letter;
            assemblyDiv.textContent = ctx.scrambleAnswer;
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (ctx.scrambleAnswer.length === target.length) {
                if (typeof checkScrambleAnswer === 'function') {
                    checkScrambleAnswer();
                } else {
                    if (ctx.scrambleAnswer.toLowerCase() === target.toLowerCase()) showFeedback(true);
                    else {
                        showFeedback(false);
                        setTimeout(renderScramble, 1000);
                    }
                }
            }
        };
        lettersDiv.appendChild(btn);
    });
}

function renderWordScramble() {
    const ctx = getExerciseContext();
    const wordObj = ctx.currentWord;
    const lettersDiv = document.getElementById('scramble-letters');
    const assemblyDiv = document.getElementById('word-assembly');
    if (!lettersDiv || !assemblyDiv) return;

    lettersDiv.innerHTML = '';
    assemblyDiv.textContent = '';
    ctx.scrambleAnswerWords = [];

    const sentence = (wordObj.word || wordObj.text || wordObj.topic).trim();
    const words = sentence.split(/\s+/).filter(w => w.length > 0);
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);

    shuffledWords.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = word;
        btn.style.width = 'auto';
        btn.style.padding = '0.5rem 1rem';
        btn.onclick = () => {
            ctx.scrambleAnswerWords.push(word);
            assemblyDiv.textContent = ctx.scrambleAnswerWords.join(' ');
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (ctx.scrambleAnswerWords.length === words.length) {
                if (typeof checkWordScrambleAnswer === 'function') {
                    checkWordScrambleAnswer();
                } else {
                    const target = sentence.toLowerCase().replace(/[.!?]/g, '').trim();
                    const current = ctx.scrambleAnswerWords.join(' ').toLowerCase().replace(/[.!?]/g, '').trim();
                    if (current === target) showFeedback(true);
                    else {
                        showFeedback(false);
                        setTimeout(renderWordScramble, 1000);
                    }
                }
            }
        };
        lettersDiv.appendChild(btn);
    });
}

function renderMatching() {
    const ctx = getExerciseContext();
    const container = document.getElementById('match-words');
    const defContainer = document.getElementById('match-defs');
    if (!container || !defContainer) return;
    container.innerHTML = '';
    defContainer.innerHTML = '';

    // Find items starting from currentIndex that haven't been used yet and are suitable for matching
    const pool = [];
    const usedIndices = [];

    for (let i = ctx.currentIndex; i < ctx.words.length && pool.length < 5; i++) {
        const w = ctx.words[i];
        if (w.used) continue;
        if ((w.definitions && w.definitions[0]?.text) || w.answer || w.opposite || w.definition) {
            pool.push(w);
            usedIndices.push(i);
        }
    }

    if (pool.length < 2) {
        ctx.currentWord.type = 'type-mc';
        if (typeof showNextWord === 'function') showNextWord();
        return;
    }

    // Mark items as used (except the first one which is consumed by the engine naturally)
    usedIndices.slice(1).forEach(idx => {
        ctx.words[idx].used = true;
    });

    // Unify state
    ctx.matchState = {
        total: pool.length,
        count: 0,
        selected: null,
        // Practice legacy keys
        totalPairs: pool.length,
        matchedCount: 0,
        selectedWord: null
    };

    const words = pool.map((w, i) => ({ text: w.word || w.text || w.primaryPrompt, id: i }));
    const defs = pool.map((w, i) => ({
        text: (w.definitions && w.definitions[0]?.text) || w.answer || w.opposite || w.definition || w.secondaryContext,
        id: i
    }));

    words.sort(() => Math.random() - 0.5).forEach(w => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = w.text;
        div.onclick = () => selectMatchItem(div, w.id, 'word');
        container.appendChild(div);
    });

    defs.sort(() => Math.random() - 0.5).forEach(d => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = d.text;
        div.onclick = () => selectMatchItem(div, d.id, 'def');
        defContainer.appendChild(div);
    });
}

function showNextSortingItem() {
    const ctx = getExerciseContext();
    const itemEl = document.getElementById('sorting-item');
    if (!itemEl) return;
    if (ctx.sortingState.currentIndex >= ctx.sortingState.items.length) {
        showFeedback(true);
        return;
    }
    const item = ctx.sortingState.items[ctx.sortingState.currentIndex];
    itemEl.textContent = item.word || item.text;
}

function checkSortingItem(bucket) {
    const ctx = getExerciseContext();
    const item = ctx.sortingState.items[ctx.sortingState.currentIndex];
    const correct = item.gender || item.classification || item.group || item.form;
    if (correct === bucket) {
        ctx.sortingState.currentIndex++;
        showNextSortingItem();
    } else {
        showFeedback(false);
    }
}

function renderSorting() {
    const ctx = getExerciseContext();
    const bucketsEl = document.getElementById('sorting-buckets');
    if (!bucketsEl) return;
    bucketsEl.innerHTML = '';

    // Find items starting from currentIndex that haven't been used yet and are suitable for sorting
    const pool = [];
    const usedIndices = [];

    for (let i = ctx.currentIndex; i < ctx.words.length && pool.length < 6; i++) {
        const w = ctx.words[i];
        if (w.used) continue;
        if (w.group || w.gender || w.classification || w.form) {
            pool.push(w);
            usedIndices.push(i);
        }
    }

    if (pool.length < 2) {
        ctx.currentWord.type = 'type-mc';
        if (typeof showNextWord === 'function') showNextWord();
        return;
    }

    // Mark items as used (except the first one)
    usedIndices.slice(1).forEach(idx => {
        ctx.words[idx].used = true;
    });

    // Unify state
    ctx.sortingState = { items: pool, currentIndex: 0 };
    ctx.sortingItems = pool; // Lesson legacy
    ctx.sortingIndex = 0;   // Lesson legacy

    let buckets = [];
    if (ctx.language === 'fr' || ctx.language === 'it') {
        buckets = ['m', 'f'];
    } else if (ctx.language === 'en') {
        buckets = ['regular', 'irregular'];
    } else {
        buckets = [...new Set(pool.map(w => w.group || w.gender || w.classification || 'Other'))];
    }

    buckets.forEach(b => {
        const div = document.createElement('div');
        div.className = 'sorting-bucket';
        const label = (typeof translations !== 'undefined' && translations[ctx.language] && translations[ctx.language]['verb_group_' + b]) || b;
        div.textContent = label;
        div.onclick = () => checkSortingItem(b);
        bucketsEl.appendChild(div);
    });

    if (typeof showNextSortingItem === 'function') {
        showNextSortingItem();
    } else {
        const itemEl = document.getElementById('sorting-item');
        if (itemEl) itemEl.textContent = pool[0].word || pool[0].text;
    }
}

function renderLabeling() {
    const ctx = getExerciseContext();
    const imgArea = document.getElementById('labeling-image-area');
    const inputArea = document.getElementById('labeling-input-area');
    if (!imgArea || !inputArea) return;
    imgArea.innerHTML = '';
    inputArea.innerHTML = '';

    const wordObj = ctx.currentWord;
    if (wordObj.image) {
        const img = document.createElement('img');
        img.src = wordObj.image;
        img.style.maxWidth = '100%';
        img.style.borderRadius = '10px';
        imgArea.appendChild(img);
    } else if (wordObj.emoji) {
        const emojiEl = document.createElement('div');
        emojiEl.className = 'labeling-emoji';
        emojiEl.style.fontSize = '5rem';
        emojiEl.style.textAlign = 'center';
        emojiEl.style.marginBottom = '1rem';
        emojiEl.textContent = wordObj.emoji;
        imgArea.appendChild(emojiEl);
    }

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'app-input';
    input.placeholder = 'Type the word...';
    input.onkeyup = (e) => {
        if (e.key === 'Enter') {
            const target = (wordObj.word || wordObj.text).toLowerCase();
            if (input.value.toLowerCase() === target) showFeedback(true);
            else showFeedback(false);
        }
    };
    inputArea.appendChild(input);
    input.focus();
}

function clearScramble() {
    const ctx = getExerciseContext();
    if (ctx.currentWord.type === 'type-ws') renderWordScramble();
    else renderScramble();
}

function selectMatchItem(el, id, type) {
    const ctx = getExerciseContext();
    if (el.classList.contains('matched')) return;

    if (!ctx.matchState.selectedWord && !ctx.matchState.selected) {
        ctx.matchState.selectedWord = { el, id, type };
        ctx.matchState.selected = { el, id, type }; // lesson fallback
        el.classList.add('selected');
    } else {
        const prev = ctx.matchState.selectedWord || ctx.matchState.selected;
        if (prev.type === type) {
            prev.el.classList.remove('selected');
            ctx.matchState.selectedWord = { el, id, type };
            ctx.matchState.selected = { el, id, type };
            el.classList.add('selected');
        } else {
            if (prev.id === id) {
                prev.el.classList.remove('selected');
                prev.el.classList.add('matched');
                el.classList.add('matched');
                ctx.matchState.selectedWord = null;
                ctx.matchState.selected = null;
                ctx.matchState.matchedCount++;
                ctx.matchState.count++;
                if (ctx.matchState.matchedCount === ctx.matchState.totalPairs || ctx.matchState.count === ctx.matchState.total) {
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
                ctx.matchState.selectedWord = null;
                ctx.matchState.selected = null;
            }
        }
    }
}

function renderWordBank() {
    const ctx = getExerciseContext();
    const sentenceEl = document.getElementById('word-bank-sentence');
    const boxEl = document.getElementById('word-bank-box');
    if (!sentenceEl || !boxEl) return;
    sentenceEl.innerHTML = '';
    boxEl.innerHTML = '';

    const wordObj = ctx.currentWord;
    const sentence = wordObj.clozeText || wordObj.word || "";
    const parts = sentence.split('____');

    parts.forEach((p, i) => {
        sentenceEl.appendChild(document.createTextNode(p));
        if (i < parts.length - 1) {
            const span = document.createElement('span');
            span.className = 'blank';
            span.textContent = '____';
            sentenceEl.appendChild(span);
        }
    });

    const correct = wordObj.answer || wordObj.word;
    const choices = [correct];
    const distractors = ctx.words
        .map(w => w.answer || w.word)
        .filter(v => v && v !== correct)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    choices.push(...distractors);
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c;
        btn.onclick = () => {
            if (c.toLowerCase() === correct.toLowerCase()) {
                const blank = sentenceEl.querySelector('.blank');
                if (blank) blank.textContent = c;
                showFeedback(true);
            } else {
                showFeedback(false);
            }
        };
        boxEl.appendChild(btn);
    });
}
