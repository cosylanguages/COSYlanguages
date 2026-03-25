const fs = require('fs');

const enVerbs = JSON.parse(fs.readFileSync('en_verbs_reference.json', 'utf8'));
const allVerbs = JSON.parse(fs.readFileSync('all_langs_verbs.json', 'utf8'));

const frMapping = {
  "be": "être", "have": "avoir", "feel": "se sentir", "give": "donner", "take": "prendre",
  "get": "obtenir", "put": "mettre", "make": "faire", "do": "faire", "use": "utiliser",
  "open": "ouvrir", "close": "fermer", "start": "commencer", "finish": "finir", "help": "aider",
  "try": "essayer", "show": "montrer", "find": "trouver", "keep": "garder", "lose": "perdre",
  "cut": "couper", "turn": "tourner", "bring": "apporter", "say": "dire", "tell": "dire",
  "ask": "demander", "speak": "parler", "talk": "parler", "call": "appeler", "write": "écrire",
  "read": "lire", "listen": "écouter", "answer": "répondre", "repeat": "répéter", "go": "aller",
  "come": "venir", "walk": "marcher", "drive": "conduire", "fly": "voler", "arrive": "arriver",
  "leave": "partir", "move": "bouger", "return": "revenir", "travel": "voyager", "eat": "manger",
  "drink": "boire", "sleep": "dormir", "cook": "cuisiner", "clean": "nettoyer", "wear": "porter",
  "wash": "laver", "buy": "acheter", "pay": "payer", "spend": "dépenser", "save": "sauvegarder",
  "work": "travailler", "live": "vivre", "think": "penser", "know": "savoir", "want": "vouloir",
  "need": "avoir besoin de", "like": "aimer", "love": "aimer", "hate": "détester", "hope": "espérer",
  "remember": "se souvenir", "forget": "oublier", "understand": "comprendre", "decide": "décider",
  "enjoy": "apprécier", "see": "voir", "hear": "entendre", "wake up": "se réveiller", "watch": "regarder",
  "look": "regarder", "play": "jouer", "run": "courir", "sit": "s'asseoir", "stand": "se tenir debout",
  "meet": "rencontrer", "learn": "apprendre", "change": "changer", "stop": "arrêter", "add": "ajouter",
  "win": "gagner", "wait": "attendre", "die": "mourir", "send": "envoyer", "stay": "rester",
  "fall": "tomber", "pass": "passer", "sell": "vendre", "pull": "tirer", "push": "pousser",
  "carry": "porter", "break": "casser", "receive": "recevoir", "agree": "être d'accord",
  "draw": "dessiner", "share": "partager", "smile": "sourire", "cry": "pleurer", "dance": "danser",
  "sing": "chanter", "jump": "sauter", "swim": "nager", "study": "étudier", "teach": "enseigner",
  "commute": "faire le trajet", "rent": "louer", "exercise": "s'exercer", "cost": "coûter", "invite": "inviter"
};

const frData = [];

enVerbs.forEach(enV => {
  const frWord = frMapping[enV.word];
  let existing = allVerbs.fr.find(v => v.word === frWord);

  if (existing) {
    // Clone and update
    const entry = JSON.parse(JSON.stringify(existing));
    entry.level = "starter";
    entry.theme = enV.theme;
    frData.push(entry);
  } else {
    // Create new entry based on English but translated (simplified for now, I'll fill in properly)
    frData.push({
      word: frWord,
      level: "starter",
      theme: enV.theme,
      emoji: enV.emoji,
      subtext: "", // To be filled if possible
      form: "verb",
      definitions: [{
        text: "", // To be translated
        examples: []
      }],
      classification: "regular", // Default
      aspect: enV.aspect
    });
  }
});

// For those created as placeholders, I should provide at least basic translations.
// This is getting complex. Let's try to just do the move/update first for those that exist.
// And for those that don't, I'll have to manually provide data.

// Actually, I'll just write a script that has the FULL data for 113 verbs in French.
// I'll take the current 39 and add the rest.
