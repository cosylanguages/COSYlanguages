const fs = require('fs');

const files = {
    "en": "js/data/germanic/en/starter/verbs.js",
    "fr": "js/data/romance/fr/starter/verbs.js",
    "it": "js/data/romance/it/starter/verbs.js",
    "ru": "js/data/slavic/ru/starter/verbs.js",
    "el": "js/data/hellenic/el/starter/verbs.js"
};

function getVerbEntries(filepath) {
    if (!fs.existsSync(filepath)) return [];
    const content = fs.readFileSync(filepath, 'utf8');
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!match) return [];
    return eval(match[1]);
}

const enVerbs = getVerbEntries(files.en);
const enWords = enVerbs.map(v => v.word);

const frVerbs = getVerbEntries(files.fr);
const itVerbs = getVerbEntries(files.it);
const ruVerbs = getVerbEntries(files.ru);
const elVerbs = getVerbEntries(files.el);

console.log(`Counts: EN:${enWords.length}, FR:${frVerbs.length}, IT:${itVerbs.length}, RU:${ruVerbs.length}, EL:${elVerbs.length}`);

// We need a mapping from EN to other languages for the 113 verbs.
// I'll need to research the ones that are not in the current 39.
// But first, let's see what's in English that we don't have mappings for yet.
const core35 = ["be", "have", "do", "go", "come", "eat", "drink", "sleep", "work", "live", "like", "want", "need", "see", "hear", "feel", "know", "think", "speak", "say", "ask", "give", "take", "make", "get", "pay", "buy", "open", "close", "start", "finish", "use", "walk", "drive", "call"];
// Plus 4 more that were in the 39: wake up, watch, read, write, invite? Let's check.
const currentOtherVerbs = frVerbs.map(v => v.word);

console.log("English verbs missing in other languages' Starter:");
const missingInOthers = enWords.filter(w => !core35.includes(w) && w !== "wake up" && w !== "watch" && w !== "read" && w !== "write" && w !== "invite" && w !== "look" && w !== "play" && w !== "run" && w !== "sit" && w !== "stand" && w !== "meet" && w !== "learn" && w !== "change" && w !== "stop" && w !== "add" && w !== "win" && w !== "wait" && w !== "die" && w !== "send" && w !== "stay" && w !== "fall" && w !== "pass" && w !== "sell" && w !== "pull" && w !== "push" && w !== "carry" && w !== "break" && w !== "receive" && w !== "agree" && w !== "draw" && w !== "share" && w !== "smile" && w !== "cry" && w !== "dance" && w !== "sing" && w !== "jump" && w !== "swim" && w !== "study" && w !== "teach" && w !== "commute" && w !== "rent" && w !== "exercise" && w !== "cost");

console.log(missingInOthers);
