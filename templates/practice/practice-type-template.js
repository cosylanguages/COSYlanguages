/**
 * templates/practice/practice-type-template.js
 *
 * Template for creating new practice types in COSYlanguages.
 * Practice types are responsible for:
 * 1. Loading required language data.
 * 2. Filtering and preparing a pool of items (words, phrases, questions).
 * 3. Generating task objects for the practice engine.
 */

(function() {
    'use strict';

    /**
     * Optional: Map internal level names to CEFR codes if needed
     */
    const LEVEL_MAP = {
        'starter': 'a1',
        'elementary': 'a2',
        'intermediate': 'b1',
        'upper_intermediate': 'b2',
        'advanced': 'c1',
        'proficiency': 'c2'
    };

    /**
     * 1. DATA LOADING
     * Prepares all necessary data files before the session starts.
     */
    async function ensureDataLoaded(lang, level) {
        if (window.COSY && window.COSY.loadLanguageData) {
            // Load vocabulary/speaking data
            await window.COSY.loadLanguageData(lang, level);
        }

        // Load other specific data if necessary (e.g., curriculum)
        if (window.COSY && window.COSY.loadCurriculum && level !== 'all') {
            await window.COSY.loadCurriculum(lang, LEVEL_MAP[level] || level);
        }
    }

    /**
     * 2. TASK GENERATION & SESSION START
     * This is called when the user clicks "Start Practice".
     */
    function beginSession(lang, category, level, theme, isChallenge, customQs, subTheme) {
        console.log(`[Practice: ${category}] Starting session...`);

        // If custom questions are already provided (e.g., from a specific lesson), use them directly
        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, category, level, theme, isChallenge, customQs);
            return;
        }

        // 3. FILTERING DATA
        // Use gameUtils.getVocabPool or similar to get a base list of items
        let pool = [];
        if (window.gameUtils) {
            pool = window.gameUtils.getVocabPool(lang, level, theme, subTheme || 'all');
        }

        if (pool.length === 0) {
            showError("No items found for this selection.");
            return;
        }

        // 4. TRANSFORMING ITEMS INTO TASKS
        // The engine expects task objects with specific fields based on 'form':
        // - form: 'mc' (Multiple Choice) -> requires 'opts' array and 'ans' index
        // - form: 'tf' (True/False) -> requires 'ans' boolean
        // - form: 'type' (Typing) -> requires 'ans' string
        // - form: 'sc' (Scramble) -> requires 'ans' string (sentence)
        // - form: 'conv' (Conversation) -> simple prompt in 'q'

        const tasks = pool.map(item => {
            return {
                form: 'mc', // Default to Multiple Choice
                q: `Question about ${item.word}?`,
                item: item,
                opts: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                ans: 0,
                level: item.level,
                theme: item.theme
            };
        });

        // Shuffle and limit (usually 10 tasks)
        const sessionTasks = tasks.sort(() => Math.random() - 0.5).slice(0, 10);

        // 5. START THE ENGINE
        window.cosyPracticeEngine.startSession(lang, category, level, theme, isChallenge, sessionTasks);
    }

    function showError(msg) {
        if (window.COSY && window.COSY.showToast) {
            window.COSY.showToast(msg, true);
        } else {
            alert(msg);
        }
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
