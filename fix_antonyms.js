const fs = require('fs');

function mockWindow() {
    global.window = {
        adjectivesData: {}
    };
}

mockWindow();
const filepath = './js/data/germanic/en/starter/adjectives.js';
require(filepath);

const data = window.adjectivesData['en'];
const wordToEntry = {};
data.forEach(e => { wordToEntry[e.word] = e; });

// Establishing symmetry
data.forEach(entry => {
    const word = entry.word;
    const opp = entry.opposite;
    if (opp && wordToEntry[opp]) {
        const target = wordToEntry[opp];
        if (target.opposite !== word) {
            console.log(`Fixing symmetry: ${opp} -> ${word}`);
            target.opposite = word;
        }
    }
});

const symmetryPairs = [
    ["sunny", "cloudy"],
    ["sunny", "rainy"],
    ["happy", "sad"],
    ["hot", "cold"],
    ["big", "small"],
    ["large", "small"],
    ["long", "short"],
    ["tall", "short"],
    ["easy", "difficult"],
    ["expensive", "cheap"],
    ["good", "bad"],
    ["new", "old"],
    ["clean", "dirty"],
    ["healthy", "unhealthy"],
    ["rich", "poor"],
    ["early", "late"],
    ["fast", "slow"],
    ["loud", "quiet"],
    ["safe", "dangerous"],
    ["strong", "weak"],
    ["beautiful", "ugly"],
    ["honest", "dishonest"],
    ["possible", "impossible"],
    ["useful", "useless"]
];

symmetryPairs.forEach(([w1, w2]) => {
    if (wordToEntry[w1] && wordToEntry[w2]) {
        wordToEntry[w1].opposite = w2;
        wordToEntry[w2].opposite = w1;
    }
});

const output = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

fs.writeFileSync(filepath, output);
console.log("Antonym symmetry updated via Node.js");
