const fs = require('fs');
const path = require('path');

const targetWords = [
  "be", "have", "feel", "give", "take", "get", "put", "make", "do", "use", "open", "close", "start", "finish", "help", "try", "show", "find", "keep", "lose", "cut", "turn", "bring", "say", "tell", "ask", "speak", "talk", "call", "write", "read", "listen", "answer", "repeat", "go", "come", "walk", "drive", "fly", "arrive", "leave", "move", "return", "travel", "eat", "drink", "sleep", "cook", "clean", "wear", "wash", "buy", "pay", "spend", "save", "work", "live", "think", "know", "want", "need", "like", "love", "hate", "hope", "remember", "forget", "understand", "decide", "enjoy", "see", "hear", "wake up", "watch", "look", "play", "run", "sit", "stand", "meet", "learn", "change", "stop", "add", "win", "wait", "die", "send", "stay", "fall", "pass", "sell", "pull", "push", "carry", "break", "receive", "agree", "draw", "share", "smile", "cry", "dance", "sing", "jump", "swim", "study", "teach", "commute", "rent", "exercise", "cost", "invite"
];

const langPaths = {
    "fr": "js/data/romance/fr",
    "it": "js/data/romance/it",
    "ru": "js/data/slavic/ru",
    "el": "js/data/hellenic/el"
};

const levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];

function findVerbLocation(lang, englishWord) {
    // This requires a translation map. For now let's just see how many are in Starter.
    // I already know only 39 are in Starter for each.
}

// I need to build the translation map first.
const translations = {
    "be": { "fr": "être", "it": "essere", "ru": "быть", "el": "είμαι" },
    "have": { "fr": "avoir", "it": "avere", "ru": "иметь", "el": "έχω" },
    "feel": { "fr": "se sentir", "it": "sentire", "ru": "чувствовать", "el": "νιώθω" },
    "give": { "fr": "donner", "it": "dare", "ru": "давать", "el": "δίνω" },
    "take": { "fr": "prendre", "it": "prendere", "ru": "брать", "el": "παίρνω" },
    "get": { "fr": "obtenir", "it": "ottenere", "ru": "получать", "el": "παίρνω" },
    "put": { "fr": "mettre", "it": "mettere", "ru": "класть", "el": "βάζω" },
    "make": { "fr": "faire", "it": "fare", "ru": "делать", "el": "κάνω" },
    "do": { "fr": "faire", "it": "fare", "ru": "делать", "el": "κάνω" },
    "use": { "fr": "utiliser", "it": "usare", "ru": "использовать", "el": "χρησιμοποιώ" },
    "open": { "fr": "ouvrir", "it": "aprire", "ru": "открывать", "el": "ανοίγω" },
    "close": { "fr": "fermer", "it": "chiudere", "ru": "закрывать", "el": "κλείνω" },
    "start": { "fr": "commencer", "it": "iniziare", "ru": "начинать", "el": "ξεκινάω" },
    "finish": { "fr": "finir", "it": "finire", "ru": "заканчивать", "el": "τελειώνω" },
    "help": { "fr": "aider", "it": "aiutare", "ru": "помогать", "el": "βοηθάω" },
    "try": { "fr": "essayer", "it": "provare", "ru": "пробовать", "el": "προσπαθώ" },
    "show": { "fr": "montrer", "it": "mostrare", "ru": "показывать", "el": "δείχνω" },
    "find": { "fr": "trouver", "it": "trovare", "ru": "находить", "el": "βρίσκω" },
    "keep": { "fr": "garder", "it": "tenere", "ru": "хранить", "el": "κρατάω" },
    "lose": { "fr": "perdre", "it": "perdere", "ru": "терять", "el": "χάνω" },
    "cut": { "fr": "couper", "it": "tagliare", "ru": "резать", "el": "κόβω" },
    "turn": { "fr": "tourner", "it": "girare", "ru": "поворачивать", "el": "στρίβω" },
    "bring": { "fr": "apporter", "it": "portare", "ru": "приносить", "el": "φέρνω" },
    "say": { "fr": "dire", "it": "dire", "ru": "сказать", "el": "λέω" },
    "tell": { "fr": "dire", "it": "dire", "ru": "рассказывать", "el": "λέω" },
    "ask": { "fr": "demander", "it": "chiedere", "ru": "спрашивать", "el": "ρωτάω" },
    "speak": { "fr": "parler", "it": "parlare", "ru": "говорить", "el": "μιλάω" },
    "talk": { "fr": "parler", "it": "parlare", "ru": "разговаривать", "el": "μιλάω" },
    "call": { "fr": "appeler", "it": "chiamare", "ru": "звонить", "el": "καλώ" },
    "write": { "fr": "écrire", "it": "scrivere", "ru": "писать", "el": "γράφω" },
    "read": { "fr": "lire", "it": "leggere", "ru": "читать", "el": "διαβάζω" },
    "listen": { "fr": "écouter", "it": "ascoltare", "ru": "слушать", "el": "ακούω" },
    "answer": { "fr": "répondre", "it": "rispondere", "ru": "отвечать", "el": "απαντάω" },
    "repeat": { "fr": "répéter", "it": "ripetere", "ru": "повторять", "el": "επαναλαμβάνω" },
    "go": { "fr": "aller", "it": "andare", "ru": "идти", "el": "πηγαίνω" },
    "come": { "fr": "venir", "it": "venire", "ru": "приходить", "el": "έρχομαι" },
    "walk": { "fr": "marcher", "it": "camminare", "ru": "гулять", "el": "περπατάω" },
    "drive": { "fr": "conduire", "it": "guidare", "ru": "водить", "el": "οδηγώ" },
    "fly": { "fr": "voler", "it": "volare", "ru": "летать", "el": "πετάω" },
    "arrive": { "fr": "arriver", "it": "arrivare", "ru": "приезжать", "el": "φτάνω" },
    "leave": { "fr": "partir", "it": "partire", "ru": "уходить", "el": "φεύγω" },
    "move": { "fr": "bouger", "it": "muovere", "ru": "двигаться", "el": "κουνάω" },
    "return": { "fr": "revenir", "it": "tornare", "ru": "возвращаться", "el": "επιστρέφω" },
    "travel": { "fr": "voyager", "it": "viaggiare", "ru": "путешествовать", "el": "ταξιδεύω" },
    "eat": { "fr": "manger", "it": "mangiare", "ru": "есть", "el": "τρώω" },
    "drink": { "fr": "boire", "it": "bere", "ru": "пить", "el": "πίνω" },
    "sleep": { "fr": "dormir", "it": "dormire", "ru": "спать", "el": "κοιμάμαι" },
    "cook": { "fr": "cuisiner", "it": "cucinare", "ru": "готовить", "el": "μαγειρεύω" },
    "clean": { "fr": "nettoyer", "it": "pulire", "ru": "чистить", "el": "καθαρίζω" },
    "wear": { "fr": "porter", "it": "indossare", "ru": "носить", "el": "φοράω" },
    "wash": { "fr": "laver", "it": "lavare", "ru": "мыть", "el": "πλένω" },
    "buy": { "fr": "acheter", "it": "comprare", "ru": "покупать", "el": "αγοράζω" },
    "pay": { "fr": "payer", "it": "pagare", "ru": "платить", "el": "πληρώνω" },
    "spend": { "fr": "dépenser", "it": "spendere", "ru": "тратить", "el": "ξοδεύω" },
    "save": { "fr": "sauvegarder", "it": "risparmiare", "ru": "сохранять", "el": "αποθηκεύω" },
    "work": { "fr": "travailler", "it": "lavorare", "ru": "работать", "el": "δουλεύω" },
    "live": { "fr": "vivre", "it": "vivere", "ru": "жить", "el": "ζω" },
    "think": { "fr": "penser", "it": "pensare", "ru": "думать", "el": "νομίζω" },
    "know": { "fr": "savoir", "it": "sapere", "ru": "знать", "el": "ξέρω" },
    "want": { "fr": "vouloir", "it": "volere", "ru": "хотеть", "el": "θέλω" },
    "need": { "fr": "avoir besoin de", "it": "avere bisogno di", "ru": "нуждаться", "el": "χρειάζομαι" },
    "like": { "fr": "aimer", "it": "piacere", "ru": "нравиться", "el": "μου αρέσει" },
    "love": { "fr": "aimer", "it": "amare", "ru": "любить", "el": "αγαπάω" },
    "hate": { "fr": "détester", "it": "odiare", "ru": "ненавидеть", "el": "μισώ" },
    "hope": { "fr": "espérer", "it": "sperare", "ru": "надеяться", "el": "ελπίζω" },
    "remember": { "fr": "se souvenir", "it": "ricordare", "ru": "помнить", "el": "θυμάμαι" },
    "forget": { "fr": "oublier", "it": "dimenticare", "ru": "забывать", "el": "ξεχνάω" },
    "understand": { "fr": "comprendre", "it": "capire", "ru": "понимать", "el": "καταλαβαίνω" },
    "decide": { "fr": "décider", "it": "decidere", "ru": "решать", "el": "αποφασίζω" },
    "enjoy": { "fr": "apprécier", "it": "godere", "ru": "наслаждаться", "el": "απολαμβάνω" },
    "see": { "fr": "voir", "it": "vedere", "ru": "видеть", "el": "βλέπω" },
    "hear": { "fr": "entendre", "it": "udire", "ru": "слышать", "el": "ακούω" },
    "wake up": { "fr": "se réveiller", "it": "svegliarsi", "ru": "просыпаться", "el": "ξυπνάω" },
    "watch": { "fr": "regarder", "it": "guardare", "ru": "смотреть", "el": "βλέπω" },
    "look": { "fr": "regarder", "it": "guardare", "ru": "смотреть", "el": "κοιτάζω" },
    "play": { "fr": "jouer", "it": "giocare", "ru": "играть", "el": "παίζω" },
    "run": { "fr": "courir", "it": "correre", "ru": "бегать", "el": "τρέχω" },
    "sit": { "fr": "s'asseoir", "it": "sedersi", "ru": "сидеть", "el": "κάθομαι" },
    "stand": { "fr": "se tenir debout", "it": "stare in piedi", "ru": "стоять", "el": "στέκομαι" },
    "meet": { "fr": "rencontrer", "it": "incontrare", "ru": "встречать", "el": "συναντώ" },
    "learn": { "fr": "apprendre", "it": "imparare", "ru": "учить", "el": "μαθαίνω" },
    "change": { "fr": "changer", "it": "cambiare", "ru": "менять", "el": "αλλάζω" },
    "stop": { "fr": "arrêter", "it": "fermare", "ru": "останавливать", "el": "σταματάω" },
    "add": { "fr": "ajouter", "it": "aggiungere", "ru": "добавлять", "el": "προσθέτω" },
    "win": { "fr": "gagner", "it": "vincere", "ru": "побеждать", "el": "νικάω" },
    "wait": { "fr": "attendre", "it": "aspettare", "ru": "ждать", "el": "περιμένω" },
    "die": { "fr": "mourir", "it": "morire", "ru": "умирать", "el": "πεθαίνω" },
    "send": { "fr": "envoyer", "it": "inviare", "ru": "посылать", "el": "στέλνω" },
    "stay": { "fr": "rester", "it": "restare", "ru": "оставаться", "el": "μένω" },
    "fall": { "fr": "tomber", "it": "cadere", "ru": "падать", "el": "πέφτω" },
    "pass": { "fr": "passer", "it": "passare", "ru": "проходить", "el": "περνάω" },
    "sell": { "fr": "vendre", "it": "vendere", "ru": "продавать", "el": "πουλάω" },
    "pull": { "fr": "tirer", "it": "tirare", "ru": "тянуть", "el": "τραβάω" },
    "push": { "fr": "pousser", "it": "spingere", "ru": "толкать", "el": "σπρώχνω" },
    "carry": { "fr": "porter", "it": "trasportare", "ru": "нести", "el": "κουβαλάω" },
    "break": { "fr": "casser", "it": "rompere", "ru": "ломать", "el": "σπάω" },
    "receive": { "fr": "recevoir", "it": "ricevere", "ru": "получать", "el": "λαμβάνω" },
    "agree": { "fr": "être d'accord", "it": "essere d'accordo", "ru": "соглашаться", "el": "συμφωνώ" },
    "draw": { "fr": "dessiner", "it": "disegnare", "ru": "рисовать", "el": "σχεδιάζω" },
    "share": { "fr": "partager", "it": "condividere", "ru": "делиться", "el": "μοιράζομαι" },
    "smile": { "fr": "sourire", "it": "sorridere", "ru": "улыбаться", "el": "χαμογελάω" },
    "cry": { "fr": "pleurer", "it": "piangere", "ru": "плакать", "el": "κλαίω" },
    "dance": { "fr": "danser", "it": "ballare", "ru": "танцевать", "el": "χορεύω" },
    "sing": { "fr": "chanter", "it": "cantare", "ru": "петь", "el": "τραγουδάω" },
    "jump": { "fr": "suter", "it": "saltare", "ru": "прыгать", "el": "πηδάω" },
    "swim": { "fr": "nager", "it": "nuotare", "ru": "плавать", "el": "κολυμπάω" },
    "study": { "fr": "étudier", "it": "studiare", "ru": "изучать", "el": "σπουδάζω" },
    "teach": { "fr": "enseigner", "it": "insegnare", "ru": "учить", "el": "διδάσκω" },
    "commute": { "fr": "faire le trajet", "it": "fare il pendolare", "ru": "ездить на работу", "el": "πηγαινοέρχομαι" },
    "rent": { "fr": "louer", "it": "affittare", "ru": "арендовать", "el": "νοικιάζω" },
    "exercise": { "fr": "s'exercer", "it": "esercitarsi", "ru": "тренироваться", "el": "ασκούμαι" },
    "cost": { "fr": "coûter", "it": "costare", "ru": "стоить", "el": "κοστίζω" },
    "invite": { "fr": "inviter", "it": "invitare", "ru": "приглашать", "el": "προσκαλώ" }
};

const results = {};

Object.entries(langPaths).forEach(([lang, basePath]) => {
    results[lang] = { starter: [], other: [], missing: [] };
    const starterVerbs = eval(fs.readFileSync(path.join(basePath, "starter/verbs.js"), 'utf8').match(/const data = (\[[\s\S]*?\]);/)[1]).map(v => v.word);

    targetWords.forEach(word => {
        const trans = translations[word][lang];
        if (starterVerbs.includes(trans)) {
            results[lang].starter.push(word);
        } else {
            // Check other levels
            let found = false;
            levels.slice(1).forEach(lvl => {
                const lvlFile = path.join(basePath, lvl, "verbs.js");
                if (fs.existsSync(lvlFile)) {
                    const verbs = eval(fs.readFileSync(lvlFile, 'utf8').match(/const data = (\[[\s\S]*?\]);/)[1]).map(v => v.word);
                    if (verbs.includes(trans)) {
                        found = true;
                        results[lang].other.push({ word, level: lvl });
                    }
                }
            });
            if (!found) {
                results[lang].missing.push(word);
            }
        }
    });
});

console.log(JSON.stringify(results, null, 2));
