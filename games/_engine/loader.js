/**
 * games/_engine/loader.js
 * Logic for dynamic data loading in standalone game pages.
 */
(function () {
    'use strict';

    async function loadLevelData(lang, level) {
        const familyMap = {
            'en': 'germanic', 'de': 'germanic',
            'fr': 'romance', 'it': 'romance', 'es': 'romance', 'pt': 'romance',
            'ru': 'slavic', 'el': 'hellenic',
            'hy': 'armenian', 'ka': 'kartvelian',
            'tt': 'turkic', 'ba': 'turkic', 'br': 'celtic'
        };
        const family = familyMap[lang.toLowerCase()];
        if (!family) return;

        const levelPath = (level === 'all' || !level) ? 'starter' : level;
        const files = [
            'vocabulary.js', 'verbs.js', 'adjectives.js', 'grammar_elements.js', 'grammar.js',
            'dishes.js', 'speaking.js', 'debates.js', 'opinions.js', 'quotes.js', 'fluency.js',
            'locations.js', 'people.js', 'nationalities.js'
        ];

        const prefix = '../../'; // Depth from games/[game]/
        const promises = files.map(file => {
            const path = `${prefix}js/data/${family}/${lang.toLowerCase()}/${levelPath}/${file}`;
            if (document.querySelector(`script[src*="${path}"]`)) return Promise.resolve();
            return new Promise((resolve) => {
                const s = document.createElement('script');
                s.src = path;
                s.onload = () => resolve();
                s.onerror = () => resolve(); // Resolve anyway to not block the game
                document.head.appendChild(s);
            });
        });

        // Language-root files
        const rootFiles = ['phrases.js', 'alphabets.js', 'translations.js'];
        rootFiles.forEach(file => {
            const path = `${prefix}js/data/${family}/${lang.toLowerCase()}/${file}`;
            if (!document.querySelector(`script[src*="${path}"]`)) {
                promises.push(new Promise((resolve) => {
                    const s = document.createElement('script');
                    s.src = path;
                    s.onload = () => resolve();
                    s.onerror = () => resolve();
                    document.head.appendChild(s);
                }));
            }
        });

        // Game specific data from games/data/
        const gameDataPath = `../data/${lang.toLowerCase()}/game_data.js`;
        promises.push(new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = gameDataPath;
            s.onload = () => resolve();
            s.onerror = () => resolve();
            document.head.appendChild(s);
        }));

        await Promise.all(promises);
    }

    function getGameData(targetLang) {
        const lang = targetLang || localStorage.getItem('language') || 'en';
        const isEnglishFallback = lang !== 'en' && (!window.gameData || !window.gameData[lang]);

        // Attempt to get specific language data, fallback to English
        const source = (window.gameData && window.gameData[lang]) ? window.gameData[lang] : (window.gameData ? window.gameData['en'] : { fluency: [], opinions: [], battle: [], critic: [] });

        // Clone to prevent mutation of the global gameData
        const data = JSON.parse(JSON.stringify(source));

        // Merge specialized speaking data if available
        const s = window.speakingData?.[lang] || {};
        const extractText = (item) => typeof item === 'string' ? item : (item.topic || item.text || '');

        const mergeOrReplace = (key, specializedArray) => {
            if (!specializedArray || specializedArray.length === 0) return;
            const items = specializedArray.map(item => ['battle', 'fluency', 'opinions', 'critic'].includes(key) ? item : extractText(item));
            if (isEnglishFallback) {
                data[key] = items;
            } else {
                data[key] = [...(data[key] || []), ...items];
            }
        };

        mergeOrReplace('fluency', s.talkThatTalk);
        mergeOrReplace('opinions', s.opinions);
        mergeOrReplace('battle', s.debates);
        mergeOrReplace('critic', s.quotes);

        // Dynamic extraction from window.vocabularyData for specific games
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

            const themes = {
                'A1': ['animals', 'home', 'food', 'nature'],
                'A2': ['local_places', 'education', 'hobbies'],
                'B1': ['workplace', 'shopping', 'transport'],
                'B2': ['culture', 'abstract', 'society']
            };

            for (let lvl in themes) {
                const words = vocab.filter(v => themes[lvl].some(t => v.theme && v.theme.includes(t))).map(v => v.word);
                if (words.length > 10) {
                    if (!data.action) data.action = {};
                    if (isEnglishFallback) data.action[lvl] = words;
                    else data.action[lvl] = [...(data.action[lvl] || []), ...words];
                }
            }
        }

        return data;
    }

    window.COSYLoader = {
        loadLevelData,
        getGameData,
        getLangCode(val) {
            if (!val) return localStorage.getItem('language') || 'en';
            const v = val.toLowerCase();
            if (v.includes('english')) return 'en';
            if (v.includes('français')) return 'fr';
            if (v.includes('italiano')) return 'it';
            if (v.includes('русский')) return 'ru';
            if (v.includes('ελληνικά')) return 'el';
            return 'en';
        },
        getLevelCode(val) {
            if (!val) return 'starter';
            const v = val.toLowerCase();
            if (v.includes('a1') || v.includes('starter')) return 'starter';
            if (v.includes('a2') || v.includes('primary') || v.includes('elementary')) return 'elementary';
            if (v.includes('b1') || v.includes('intermediate')) return 'intermediate';
            if (v.includes('b2') || v.includes('upper')) return 'upper-intermediate';
            if (v.includes('c1') || v.includes('advanced')) return 'advanced';
            if (v.includes('c2') || v.includes('proficiency')) return 'proficiency';
            return 'starter';
        }
    };
})();
