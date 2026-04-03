const fs = require('fs');
function mockWindow() { global.window = { verbsData: {} }; }
mockWindow();
const filepath = './js/data/germanic/en/starter/verbs.js';
require(filepath);
const data = window.verbsData['en'];

const additions = [
    {
        "word": "explain",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "[ɪkˈspleɪn]",
        "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To make something clear or easy to understand by describing or giving information about it.", "examples": ["Can you explain this rule?", "The teacher explained the lesson."]}],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone"
    },
    {
        "word": "prepare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📝",
        "form": "verb",
        "transcription": "[prɪˈpeə(r)]",
        "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To get someone or something ready for something that will happen in the future.", "examples": ["I need to prepare for my exam.", "She is preparing dinner."]}],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something"
    },
    {
        "word": "depend",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "[dɪˈpend]",
        "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To be decided by or to change according to something else.", "examples": ["It depends on the weather.", "Our plans depend on your answer."]}],
        "v2": "depended",
        "v3": "depended",
        "classification": "regular",
        "group": "regular",
        "subtext": "depend ON someone/something"
    },
    {
        "word": "belong",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏠",
        "form": "verb",
        "transcription": "[bɪˈlɒŋ]",
        "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "definitions": [{"text": "To be the property of someone.", "examples": ["This book belongs to me.", "Who does this bag belong to?"]}],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something"
    }
];

additions.forEach(v => {
    if (!data.find(e => e.word === v.word)) data.push(v);
});

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();`;

fs.writeFileSync(filepath, output);
console.log("Verbs updated with missing words.");
