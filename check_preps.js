const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/vocabulary.js');
const vocab = window.vocabularyData['en'];
const a1Preps = ["about", "across", "after", "along", "around", "at", "before", "behind", "below", "beside", "between", "by", "down", "for", "from", "in", "in front of", "inside", "into", "like", "near", "next to", "of", "off", "on", "opposite", "out", "outside", "over", "past", "round", "through", "to", "under", "until", "up", "with", "without"];
const found = vocab.filter(e => a1Preps.includes(e.word)).map(e => e.word);
const missing = a1Preps.filter(p => !found.includes(p));
console.log(`Found ${found.length}/${a1Preps.length} A1 prepositions.`);
console.log("Missing:", missing);
