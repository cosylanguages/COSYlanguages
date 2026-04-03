const fs = require('fs');
function mockWindow() { global.window = { verbsData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/verbs.js');
const verbs = window.verbsData['en'];
const phrases = ["listen to", "look at", "wait for", "talk to", "think about", "depend on", "belong to"];
phrases.forEach(p => {
    const base = p.split(' ')[0];
    const v = verbs.find(e => e.word === base);
    if (v) {
        console.log(`Verb '${base}' subtext: ${v.subtext}`);
    } else {
        console.log(`Verb '${base}' NOT FOUND`);
    }
});
