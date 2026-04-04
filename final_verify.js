const fs = require('fs');

function mockWindow() {
    global.window = {
        vocabularyData: {},
        verbsData: {},
        adjectivesData: {}
    };
}

mockWindow();
require('./js/data/germanic/en/starter/vocabulary.js');
require('./js/data/germanic/en/starter/verbs.js');
require('./js/data/germanic/en/starter/adjectives.js');

const vocab = window.vocabularyData['en'];
const verbs = window.verbsData['en'];
const adjs = window.adjectivesData['en'];

console.log(`Vocab length: ${vocab.length}`);
console.log(`Verbs length: ${verbs.length}`);
console.log(`Adjectives length: ${adjs.length}`);

// Check specific words
const wordsToCheck = ["nurse", "chef", "explain", "possible", "in", "on", "at", "doctor"];
wordsToCheck.forEach(w => {
    const entry = vocab.find(e => e.word === w) || verbs.find(e => e.word === w) || adjs.find(e => e.word === w);
    if (entry) {
        console.log(`Entry found for '${w}':`, JSON.stringify({
            word: entry.word,
            countability: entry.countability,
            defs: entry.definitions ? entry.definitions.length : 0,
            ipa: entry.transcription,
            image: !!entry.image
        }));
    } else {
        console.log(`Entry NOT found for '${w}'`);
    }
});

// Check antonym symmetry
const sunny = adjs.find(e => e.word === 'sunny');
const cloudy = adjs.find(e => e.word === 'cloudy');
if (sunny && cloudy) {
    console.log(`Symmetry - Sunny opp: ${sunny.opposite}, Cloudy opp: ${cloudy.opposite}`);
}
