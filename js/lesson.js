
var currentLesson = {
    language: 'en',
    day: '1',
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    scrambleAnswerWords: [],
    score: 0,
    tfCorrectAnswer: null,
    hintLevel: 0
};

document.addEventListener('DOMContentLoaded', async () => {
    // Initial setup
    const urlParams = new URLSearchParams(window.location.search);
    currentLesson.language = urlParams.get('lang') || 'en';
    currentLesson.day = urlParams.get('lesson') || '1';

    // UI elements
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
    const exitLessonBtn = document.getElementById('exit-lesson-btn');
    const closeDefinitionBtn = document.getElementById('close-definition-btn');
    const wordDisplay = document.getElementById('word-display');
    const questionCard = document.getElementById('question-card');

    if (wordDisplay) {
        wordDisplay.addEventListener('click', showWordDefinition);
    }
    if (questionCard) {
        questionCard.addEventListener('click', (e) => {
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

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentLesson.isCorrect) {
                currentLesson.currentIndex++;
                showNextWord();
            } else {
                showNextWord();
            }
        });
    }
    if (checkOppositeBtn) checkOppositeBtn.addEventListener('click', checkTypedAnswer);
    if (trueBtn) trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    if (falseBtn) falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    if (hintBtn) hintBtn.addEventListener('click', showHint);
    if (listenBtn) listenBtn.addEventListener('click', speakWord);
    if (clearScrambleBtn) clearScrambleBtn.addEventListener('click', clearScramble);
    if (finishConversationBtn) finishConversationBtn.addEventListener('click', () => showFeedback(true));
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            window.location.href = 'days.html';
        });
    }
    if (exitLessonBtn) {
        exitLessonBtn.addEventListener('click', () => {
            window.gameUtils.showGameConfirm("Exit lesson and return to student area?", () => {
                window.location.href = 'days.html';
            });
        });
    }

    // Global Enter Key Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            const checkBtn = document.getElementById('check-opposite-btn');
            const summaryModal = document.getElementById('summary-modal');

            // Don't trigger if summary is open
            if (summaryModal && !summaryModal.classList.contains('hidden')) {
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

    await startLesson();
});

async function loadLessonData(day) {
    const path = `js/data/lessons/day${day}.js`;
    if (document.querySelector(`script[src*="${path}"]`)) return;
    return new Promise(res => {
        const s = document.createElement("script");
        s.src = path; s.onload = res; s.onerror = res;
        document.head.appendChild(s);
    });
}
async function startLesson() {

    const lang = currentLesson.language;
    const day = currentLesson.day;
    await loadLessonData(day);

    const { showGameMessage } = window.gameUtils || {};

    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][day]) {
        let rawItems = [...window.lessonsData[lang][day].words];

        // Inject numbers if any items have a number theme but no words (centralized numbers support)
        const langNumbers = window.numbersData && window.numbersData[lang];
        if (langNumbers) {
            rawItems = rawItems.map(item => {
                if (item.theme && item.theme.startsWith('numbers_') && !item.word) {
                    const val = item.definitions && item.definitions[0] && item.definitions[0].text;
                    if (val && langNumbers[val]) {
                        return { ...item, word: langNumbers[val] };
                    }
                }
                return item;
            });
        }

        currentLesson.words = rawItems.map(item => {
            let wordCopy = { ...item, lessonTitle: window.lessonsData[lang][day].title };

            // Determine task type based on available metadata
            let possibleTypes = ['type-mc', 'type-ls', 'type-sc', 'type-tf'];
            if (wordCopy.opposite) possibleTypes.push('type-op');
            if (wordCopy.clozeText) possibleTypes.push('type-cl');
            if (wordCopy.article || wordCopy.gender) possibleTypes.push('type-ga');
            if (wordCopy.numberPlural) possibleTypes.push('type-np');
            if ((wordCopy.definitions && wordCopy.definitions.length > 0) || wordCopy.answer || wordCopy.opposite) possibleTypes.push('type-ma');
            if (wordCopy.group || wordCopy.gender || wordCopy.classification || wordCopy.form) possibleTypes.push('type-si');
            if (wordCopy.image || wordCopy.emoji) possibleTypes.push('type-lp');
            if (wordCopy.clozeText) possibleTypes.push('type-bb');

            if (wordCopy.type === 'conversation' || wordCopy.category === 'conversation') {
                possibleTypes = ['type-cv'];
            }

            const isSentence = wordCopy.word && wordCopy.word.includes(' ');
            if (isSentence) {
                // If it's a sentence, prefer word_scramble or number_plural
                if (wordCopy.numberPlural) {
                    wordCopy.type = 'type-np';
                } else {
                    wordCopy.type = 'type-ws';
                }
            } else {
                // Pick a random possible type
                wordCopy.type = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
            }

            // Specific overrides for curriculum if needed
            if (wordCopy.category === 'conversation') wordCopy.type = 'type-cv';

            return wordCopy;
        });

        currentLesson.words.sort(() => Math.random() - 0.5);
        currentLesson.currentIndex = 0;
        currentLesson.score = 0;

        if (typeof setLanguage === 'function') {
            setLanguage(lang);
        }

    if (window.GameSessionManager) {
        GameSessionManager.recordSession('Lesson ' + day, '🎓');
    }

        showNextWord();
    } else {

        const lang = currentLesson.language;
        const msg = `<h3>Coming Soon! 🚧</h3><p>Interactive practice for Day ${day} in ${lang.toUpperCase()} is being prepared.</p><p>Check back soon or message your teacher!</p>`;

        // Use a more stylized full-screen message
        const container = document.getElementById('practice-container');
        if (container) {
            container.innerHTML = `
                <div class="empty" style="padding: 4rem 2rem; background: #fff; border-radius: 20px; border: 1.5px solid var(--border); box-shadow: var(--shadow-sm);">
                    <div style="font-size: 4rem; margin-bottom: 1.5rem;">📚</div>
                    ${msg}
                    <button class="cta-button primary" onclick="window.location.href='days.html'" style="margin-top: 2rem;">Back to My Lessons 🏠</button>
                </div>
            `;
        } else {
            alert("Lesson data not found!");
            window.location.href = 'days.html';
        }
    }
}

function showNextWord() {
    while (currentLesson.currentIndex < currentLesson.words.length && currentLesson.words[currentLesson.currentIndex].used) {
        currentLesson.currentIndex++;
    }

    if (currentLesson.currentIndex >= currentLesson.words.length) {
        showSummary();
        return;
    }

    currentLesson.hintLevel = 0; // Reset hint level for new word
    currentLesson.currentWord = currentLesson.words[currentLesson.currentIndex];
    const wordObj = currentLesson.currentWord;
    currentLesson.isCorrect = false;

    updateProgress();

    if (typeof resetExerciseUI === 'function') {
        resetExerciseUI();
    }

    document.getElementById('opposite-answer').value = '';
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) {
        hintBtn.classList.toggle('hidden', wordObj.type === 'type-tf' || wordObj.type === 'type-cv');
    }
    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    // Show "What to do" instruction
    const wtdEl = document.getElementById('task-what-to-do');
    if (wtdEl) {
        const lang = currentLesson.language;
        const typeKey = wordObj.form === 'verb_form' ? 'vf' :
                        wordObj.form === 'verb' ? 'gv' :
                        wordObj.form === 'pronoun' ? 'gp' :
                        wordObj.type === 'type-ws' ? 'ws' :
                        wordObj.type === 'type-mc' ? 'mc' :
                        wordObj.type === 'type-ls' ? 'ls' :
                        wordObj.type === 'type-sc' ? 'sc' :
                        wordObj.type === 'type-op' ? 'op' :
                        wordObj.type === 'type-cl' ? 'cl' :
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

    // Task Example
    const exampleEl = document.getElementById('task-example');
    if (exampleEl) {
        const lang = currentLesson.language;
        let typeKey = "";
        if (wordObj.form === 'verb_form') {
            typeKey = 'vf';
        } else if (wordObj.form === 'verb') {
            typeKey = 'gv';
        } else if (wordObj.form === 'pronoun') {
            typeKey = 'gp';
        } else if (wordObj.type === 'type-cv') {
            typeKey = 'cv';
        } else {
            typeKey = wordObj.type === 'type-ws' ? 'ws' :
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

    // Subtext
    const subtextEl = document.getElementById('subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.classList.remove('hidden');
        } else {
            subtextEl.classList.add('hidden');
        }
    }

    // Render Task
    const wordDisplay = document.getElementById('word-display');
    const choicesGrid = document.getElementById('choices-grid');
    const actionBtns = document.getElementById('action-buttons-container');
    const checkBtn = document.getElementById('check-opposite-btn');
    const oppositeInput = document.getElementById('opposite-input-container');

    if (wordObj.type === 'type-mc' || wordObj.type === 'type-ls') {
        const isListen = wordObj.type === 'type-ls';
        wordDisplay.textContent = isListen ? '???' : ((wordObj.emoji && wordObj.category === 'vocabulary') ? '???' : (wordObj.clozeText || wordObj.word));
        document.getElementById('emoji-display').textContent = isListen ? '👂' : (wordObj.emoji || '💡');
        document.getElementById('task-instruction').setAttribute('data-translate-key', isListen ? 'task_listen_select' : 'task_multiple_choice');
        choicesGrid.classList.remove('hidden');
        choicesGrid.style.display = 'grid';
        actionBtns.classList.remove('hidden');
        actionBtns.style.display = 'flex';
        checkBtn.classList.add('hidden');
        renderMultipleChoice();
        if (isListen) setTimeout(speakWord, 500);
    } else if (wordObj.type === 'type-cl' || wordObj.type === 'type-np') {
        wordDisplay.textContent = wordObj.type === 'type-np' ? wordObj.numberPlural || wordObj.word : wordObj.clozeText || wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'type-np' ? 'task_number_plural' : 'task_cloze');
        oppositeInput.classList.remove('hidden');
        oppositeInput.style.display = 'flex';
        actionBtns.classList.remove('hidden');
        actionBtns.style.display = 'flex';
        checkBtn.classList.remove('hidden');
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'type-sc' || wordObj.type === 'type-ws') {
        wordDisplay.textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'type-ws' ? 'task_word_scramble' : 'task_scramble');
        const sc = document.getElementById('scramble-container');
        sc.classList.remove('hidden');
        sc.style.display = 'block';
        actionBtns.classList.remove('hidden');
        actionBtns.style.display = 'flex';
        checkBtn.classList.add('hidden');
        if (wordObj.type === 'type-ws') renderWordScramble();
        else renderScramble();
    } else if (wordObj.type === 'type-ga') {
        wordDisplay.textContent = wordObj.baseWord;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_gender_articles');
        choicesGrid.classList.remove('hidden');
        choicesGrid.style.display = 'grid';
        actionBtns.classList.remove('hidden');
        actionBtns.style.display = 'flex';
        checkBtn.classList.add('hidden');
        renderGenderArticles();
    } else if (wordObj.type === 'type-tf') {
        wordDisplay.textContent = wordObj.word;
        const isTrue = Math.random() > 0.5;
        currentLesson.tfCorrectAnswer = isTrue;
        if (isTrue) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            document.getElementById('emoji-display').textContent = '❓';
        }
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        const tf = document.getElementById('tf-buttons-container');
        tf.classList.remove('hidden');
        tf.style.display = 'flex';
    } else if (wordObj.type === 'type-cv') {
        wordDisplay.textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💬';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_conversation');
        const cv = document.getElementById('conversation-container');
        cv.classList.remove('hidden');
        cv.style.display = 'block';
    } else if (wordObj.type === 'type-ma') {
        wordDisplay.classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🧩';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_matching');
        const ma = document.getElementById('matching-container');
        ma.classList.remove('hidden');
        ma.style.display = 'block';
        renderMatching();
    } else if (wordObj.type === 'type-si') {
        wordDisplay.classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🗂️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_sorting');
        const si = document.getElementById('sorting-container');
        si.classList.remove('hidden');
        si.style.display = 'block';
        renderSorting();
    } else if (wordObj.type === 'type-lp') {
        wordDisplay.classList.add('hidden');
        document.getElementById('emoji-display').textContent = '🖼️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_labeling');
        const lp = document.getElementById('labeling-container');
        lp.classList.remove('hidden');
        lp.style.display = 'block';
        renderLabeling();
    } else if (wordObj.type === 'type-bb') {
        wordDisplay.classList.add('hidden');
        document.getElementById('emoji-display').textContent = '📥';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_word_bank');
        const bb = document.getElementById('word-bank-container');
        bb.classList.remove('hidden');
        bb.style.display = 'block';
        renderWordBank();
    } else {
        // type-op (opposite)
        wordObj.type = 'type-op';
        wordDisplay.textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        oppositeInput.classList.remove('hidden');
        oppositeInput.style.display = 'flex';
        actionBtns.classList.remove('hidden');
        actionBtns.style.display = 'flex';
        checkBtn.classList.remove('hidden');
        document.getElementById('opposite-answer').focus();
    }

    if (typeof setLanguage === 'function') setLanguage(currentLesson.language);

    // Add definition hint
    const wordDisplay = document.getElementById('word-display');
    if (wordDisplay) {
        if (wordObj.definitions && wordObj.definitions.length > 0) {
            wordDisplay.classList.add('has-definition');
            wordDisplay.title = (translations[currentLesson.language] && translations[currentLesson.language]['click_for_definition']) || "Click for definition";
        } else {
            wordDisplay.classList.remove('has-definition');
            wordDisplay.removeAttribute('title');
        }
    }
}






