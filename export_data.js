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

const allData = {
    vocabulary: window.vocabularyData['en'],
    verbs: window.verbsData['en'],
    adjectives: window.adjectivesData['en']
};

fs.writeFileSync('starter_en_data.json', JSON.stringify(allData, null, 4));
