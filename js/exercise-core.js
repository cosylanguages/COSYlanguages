/**
 * Core Exercise Rendering Logic
 * Shared between practice.js and lesson.js
 */

function getExerciseContext() {
    if (typeof currentPractice !== 'undefined' && currentPractice) return currentPractice;
    if (typeof currentLesson !== 'undefined' && currentLesson) return currentLesson;
    return null;
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
        btn.onclick = () => {
            if (typeof checkMultipleChoiceAnswer === 'function') {
                checkMultipleChoiceAnswer(choice, btn);
            } else {
                if (choice.toLowerCase() === correct.toLowerCase()) {
                    btn.classList.add('correct');
                    showFeedback(true);
                } else {
                    btn.classList.add('incorrect');
                    showFeedback(false);
                }
            }
        };
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

    const pool = ctx.words.slice(ctx.currentIndex, ctx.currentIndex + 5);

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

    const words = pool.map((w, i) => ({ text: w.word || w.text, id: i }));
    const defs = pool.map((w, i) => ({
        text: (w.definitions && w.definitions[0]?.text) || w.answer || w.opposite || w.definition,
        id: i
    }));

    words.sort(() => Math.random() - 0.5).forEach(w => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = w.text;
        div.onclick = () => {
            if (typeof selectMatchItem === 'function') selectMatchItem(div, w.id, 'word');
            else if (typeof selectMatch === 'function') selectMatch(div, w.id, 'word');
        };
        container.appendChild(div);
    });

    defs.sort(() => Math.random() - 0.5).forEach(d => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = d.text;
        div.onclick = () => {
            if (typeof selectMatchItem === 'function') selectMatchItem(div, d.id, 'def');
            else if (typeof selectMatch === 'function') selectMatch(div, d.id, 'def');
        };
        defContainer.appendChild(div);
    });
}

function renderSorting() {
    const ctx = getExerciseContext();
    const bucketsEl = document.getElementById('sorting-buckets');
    if (!bucketsEl) return;
    bucketsEl.innerHTML = '';

    const pool = ctx.words.slice(ctx.currentIndex, ctx.currentIndex + 6);

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
        div.onclick = () => {
            if (typeof checkSortingItem === 'function') {
                checkSortingItem(b);
            } else {
                // Lesson-style logic
                const currentItem = ctx.sortingItems[ctx.sortingIndex];
                if ((currentItem.gender || currentItem.classification || currentItem.group) === b) {
                    ctx.sortingIndex++;
                    ctx.sortingState.currentIndex++;
                    if (ctx.sortingIndex >= ctx.sortingItems.length) {
                        showFeedback(true);
                    } else {
                        const itemEl = document.getElementById('sorting-item');
                        if (itemEl) itemEl.textContent = ctx.sortingItems[ctx.sortingIndex].word || ctx.sortingItems[ctx.sortingIndex].text;
                    }
                } else {
                    showFeedback(false);
                }
            }
        };
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
