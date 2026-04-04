const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {} }; }
mockWindow();
const path = './js/data/germanic/en/starter/vocabulary.js';
require(path);
const data = window.vocabularyData['en'];

const missing = [
    { "word": "about", "level": "starter", "theme": "prepositions_time_A1", "form": "preposition", "definitions": [{"text": "On the subject of; or approximately.", "examples": ["A book about animals.", "It is about six o'clock."]}], "emoji": "📖", "transcription": "[əˈbaʊt]" },
    { "word": "around", "level": "starter", "theme": "prepositions_place_A1", "form": "preposition", "definitions": [{"text": "In a circle or in various places.", "examples": ["We sat around the table.", "Walk around the city."]}], "emoji": "⭕", "transcription": "[əˈraʊnd]" },
    { "word": "by", "level": "starter", "theme": "modes_of_transport_A1", "form": "preposition", "definitions": [{"text": "Used to show how someone travels or how something is done.", "examples": ["I go to work by bus.", "He is standing by the door."]}], "emoji": "🚌", "transcription": "[baɪ]" },
    { "word": "for", "level": "starter", "theme": "prepositions_time_A1", "form": "preposition", "definitions": [{"text": "Used to show purpose or duration.", "examples": ["This is for you.", "I work for eight hours."]}], "emoji": "🎁", "transcription": "[fɔː(r)]" },
    { "word": "from", "level": "starter", "theme": "prepositions_place_A1", "form": "preposition", "definitions": [{"text": "Used to show the place where someone or something starts.", "examples": ["I am from London.", "This letter is from my mother."]}], "emoji": "🛫", "transcription": "[frɒm]" },
    { "word": "of", "level": "starter", "theme": "prepositions_place_A1", "form": "preposition", "definitions": [{"text": "Belonging to or connected with.", "examples": ["The capital of England.", "A cup of tea."]}], "emoji": "🔗", "transcription": "[ɒv]" },
    { "word": "to", "level": "starter", "theme": "prepositions_movement_A1", "form": "preposition", "definitions": [{"text": "In the direction of.", "examples": ["I go to school.", "Give it to me."]}], "emoji": "➡️", "transcription": "[tuː]" },
    { "word": "with", "level": "starter", "theme": "prepositions_place_A1", "form": "preposition", "definitions": [{"text": "In the company of; or using something.", "examples": ["I live with my parents.", "Write with a pen."]}], "emoji": "👫", "transcription": "[wɪð]" }
];

missing.forEach(m => { if (!data.find(e => e.word === m.word)) data.push(m); });

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

fs.writeFileSync(path, output);
console.log("Common prepositions added.");
