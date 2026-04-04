const fs = require('fs');
function mockWindow() { global.window = { adjectivesData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/adjectives.js');
const adjs = window.adjectivesData['en'];
const suspicious = adjs.filter(a => a.opposite === 'short' && a.word !== 'long' && a.word !== 'tall');
console.log(`Adjectives with 'short' opposite (excluding long/tall): ${suspicious.length}`);
suspicious.forEach(a => console.log(a.word));
