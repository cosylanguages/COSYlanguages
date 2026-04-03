const fs = require('fs');
function mockWindow() { global.window = { verbsData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/verbs.js');
const verbs = window.verbsData['en'];
const newVerbs = ["explain", "prepare", "depend", "belong"];
newVerbs.forEach(w => {
    const v = verbs.find(e => e.word === w);
    console.log(`Verb '${w}':`, JSON.stringify({
        v2: v.v2, v3: v.v3, ipa: v.transcription, image: !!v.image
    }));
});
