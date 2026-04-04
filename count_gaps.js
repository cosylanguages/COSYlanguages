const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {}, verbsData: {}, adjectivesData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/vocabulary.js');
require('./js/data/germanic/en/starter/verbs.js');
require('./js/data/germanic/en/starter/adjectives.js');
const all = [...window.vocabularyData['en'], ...window.verbsData['en'], ...window.adjectivesData['en']];
const noImg = all.filter(e => !e.image).length;
const noIpa = all.filter(e => !e.transcription).length;
console.log(`Total entries: ${all.length}`);
console.log(`Missing images: ${noImg}`);
console.log(`Missing IPA: ${noIpa}`);
