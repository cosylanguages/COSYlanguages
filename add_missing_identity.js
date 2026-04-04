const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {} }; }
mockWindow();
const path = './js/data/germanic/en/starter/vocabulary.js';
require(path);
const data = window.vocabularyData['en'];

const missing = [
    {
        "word": "nationality",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "nationalities",
        "transcription": "[ˌnæʃəˈnæləti]",
        "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "The legal right of belonging to a particular nation.", "examples": ["What is your nationality?", "She has dual nationality."]}],
        "countability": "countable",
        "subtext": "British nationality, dual nationality"
    },
    {
        "word": "occupation",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "occupations",
        "transcription": "[ˌɒkjuˈpeɪʃn]",
        "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "A person's job or profession.", "examples": ["Please state your occupation.", "He is a teacher by occupation."]}],
        "countability": "countable",
        "subtext": "current occupation, professional occupation"
    }
];

missing.forEach(m => { if (!data.find(e => e.word === m.word)) data.push(m); });

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

fs.writeFileSync(path, output);
console.log("Missing identity words added.");
