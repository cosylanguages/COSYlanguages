const fs = require('fs');
function mockWindow() { global.window = { vocabularyData: {} }; }
mockWindow();
require('./js/data/germanic/en/starter/vocabulary.js');
const vocab = window.vocabularyData['en'];
const identityWords = ["address", "nationality", "language", "clothes", "occupation", "furniture", "information", "nature", "weather", "temperature", "first name", "surname"];
identityWords.forEach(w => {
    const e = vocab.find(x => x.word === w);
    if (e) {
        console.log(`${w}: image=${!!e.image}, transcription=${!!e.transcription}, subtext=${!!e.subtext}`);
    } else {
        console.log(`${w}: NOT FOUND`);
    }
});
