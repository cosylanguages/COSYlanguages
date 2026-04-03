const fs = require('fs');

function mockWindow() {
    global.window = {
        adjectivesData: {}
    };
}

mockWindow();
const filepath = './js/data/germanic/en/starter/adjectives.js';
require(filepath);

const data = window.adjectivesData['en'];

const possible = {
    "word": "possible",
    "level": "starter",
    "theme": "giving_opinions_A1",
    "emoji": "✅",
    "form": "adjective",
    "opposite": "impossible",
    "transcription": "[ˈpɒsəbl]",
    "image": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80",
    "definitions": [
        {
            "text": "Able to be done or achieved.",
            "examples": [
                "Is it possible to come tomorrow?",
                "Everything is possible if you try."
            ]
        }
    ],
    "comparative": "more possible",
    "superlative": "the most possible",
    "subtext": "as soon as possible, if possible"
};

const useful = {
    "word": "useful",
    "level": "starter",
    "theme": "describing_things_A1",
    "emoji": "🛠️",
    "form": "adjective",
    "opposite": "useless",
    "transcription": "[ˈjuːsfl]",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80",
    "definitions": [
        {
            "text": "Helping you to do or achieve something.",
            "examples": [
                "This is a very useful book.",
                "The internet is useful for studying."
            ]
        }
    ],
    "comparative": "more useful",
    "superlative": "the most useful",
    "subtext": "very useful, useful information"
};

if (!data.find(e => e.word === 'possible')) data.push(possible);
if (!data.find(e => e.word === 'useful')) data.push(useful);

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

fs.writeFileSync(filepath, output);
console.log("Adjectives updated with missing words.");
