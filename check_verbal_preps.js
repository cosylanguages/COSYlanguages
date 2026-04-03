const fs = require('fs');
function mockWindow() { global.window = { verbsData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/verbs.js');
const verbs = window.verbsData['en'];
const verbsWithPreps = verbs.filter(v => v.subtext && v.subtext.match(/\b(on|to|for|at|with|in|of|about)\b/i));
console.log(`Verbs with prepositions in subtext: ${verbsWithPreps.length}/${verbs.length}`);
verbsWithPreps.slice(0, 10).forEach(v => console.log(`${v.word}: ${v.subtext}`));
