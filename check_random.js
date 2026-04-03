const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {}, verbsData: {}, adjectivesData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/vocabulary.js');
require('./js/data/germanic/en/starter/verbs.js');
require('./js/data/germanic/en/starter/adjectives.js');
const all = [...window.vocabularyData['en'], ...window.verbsData['en'], ...window.adjectivesData['en']];
const sample = all.filter(e => !e.image || !e.transcription).slice(0, 10);
console.log("Sample missing metadata:");
sample.forEach(e => console.log(`${e.word}: image=${!!e.image}, transcription=${!!e.transcription}`));
