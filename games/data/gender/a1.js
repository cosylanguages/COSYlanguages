(function() {
    const level = "starter";
    const data = [
        {
            concept: "Cat",
            emoji: "🐈",
            translations: {
                fr: { word: "chat", article: "le", gender: "masculine" },
                es: { word: "gato", article: "el", gender: "masculine" },
                it: { word: "gatto", article: "il", gender: "masculine" },
                de: { word: "Katze", article: "die", gender: "feminine" },
                ru: { word: "кот", article: "", gender: "masculine" },
                el: { word: "γάτα", article: "η", gender: "feminine" },
                br: { word: "kazh", article: "", gender: "masculine" }
            },
            explanation: "Late Latin 'catus' was masculine, and French, Spanish, Italian, and Breton default to masculine for the general species. However, German 'Katze', Greek 'γάτα', and Russian 'кошка' default to the feminine form for the general species, highlighting how different languages choose different biological defaults!"
        },
        {
            concept: "Dog",
            emoji: "🐕",
            translations: {
                fr: { word: "chien", article: "le", gender: "masculine" },
                es: { word: "perro", article: "el", gender: "masculine" },
                it: { word: "cane", article: "il", gender: "masculine" },
                de: { word: "Hund", article: "der", gender: "masculine" },
                ru: { word: "собака", article: "", gender: "feminine" },
                el: { word: "σκύλος", article: "ο", gender: "masculine" },
                br: { word: "ki", article: "ar", gender: "masculine" }
            },
            explanation: "Most Indo-European words for dog default to the masculine gender, representing an ancient biological preference. Russian 'собака' is a notable exception, being feminine due to its '-а' suffix."
        },
        {
            concept: "Sun",
            emoji: "☀️",
            translations: {
                fr: { word: "soleil", article: "le", gender: "masculine" },
                es: { word: "sol", article: "el", gender: "masculine" },
                it: { word: "sole", article: "il", gender: "masculine" },
                de: { word: "Sonne", article: "die", gender: "feminine" },
                ru: { word: "солнце", article: "", gender: "neuter" },
                el: { word: "ήλιος", article: "ο", gender: "masculine" },
                br: { word: "heol", article: "ar", gender: "masculine" }
            },
            explanation: "Romance languages (French, Spanish, Italian) inherit their masculine gender for Sun from Latin 'sol' (m). German 'Sonne' is feminine, continuing a Germanic mythological tradition where the Sun is a goddess (Sól). Russian 'солнце' is neuter, and Greek 'ήλιος' is masculine."
        },
        {
            concept: "Moon",
            emoji: "🌙",
            translations: {
                fr: { word: "lune", article: "la", gender: "feminine" },
                es: { word: "luna", article: "la", gender: "feminine" },
                it: { word: "luna", article: "la", gender: "feminine" },
                de: { word: "Mond", article: "der", gender: "masculine" },
                ru: { word: "луна", article: "", gender: "feminine" },
                el: { word: "φεγγάρι", article: "το", gender: "neuter" },
                br: { word: "loar", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'luna' was feminine, preserving the feminine gender in Romance languages. German 'Mond' is masculine, representing the male moon deity (Máni) in Germanic mythology. Russian 'луна' is feminine, Greek 'φεγγάρι' is neuter, and Breton 'loar' is feminine."
        },
        {
            concept: "Water",
            emoji: "💧",
            translations: {
                fr: { word: "eau", article: "l'", gender: "feminine" },
                es: { word: "agua", article: "el", gender: "feminine" },
                it: { word: "acqua", article: "l'", gender: "feminine" },
                de: { word: "Wasser", article: "das", gender: "neuter" },
                ru: { word: "вода", article: "", gender: "feminine" },
                el: { word: "νερό", article: "το", gender: "neuter" },
                br: { word: "dour", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'aqua' was feminine, preserving the feminine gender in French, Spanish, and Italian (Spanish 'agua' uses the article 'el' only for pronunciation, but remains grammatically feminine). German 'Wasser' and Greek 'νερό' are neuter, Russian 'вода' is feminine, and Breton 'dour' is masculine."
        },
        {
            concept: "Book",
            emoji: "📖",
            translations: {
                fr: { word: "livre", article: "le", gender: "masculine" },
                es: { word: "libro", article: "el", gender: "masculine" },
                it: { word: "libro", article: "il", gender: "masculine" },
                de: { word: "Buch", article: "das", gender: "neuter" },
                ru: { word: "книга", article: "", gender: "feminine" },
                el: { word: "βιβλίο", article: "το", gender: "neuter" },
                br: { word: "levr", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'liber' was masculine, leading to masculine Romance and Celtic words (French 'livre', Spanish/Italian 'libro', Breton 'levr'). German 'Buch' is neuter, originally related to beechwood runes. Russian 'книга' is feminine, and Greek 'βιβλίο' is neuter."
        },
        {
            concept: "House",
            emoji: "🏠",
            translations: {
                fr: { word: "maison", article: "la", gender: "feminine" },
                es: { word: "casa", article: "la", gender: "feminine" },
                it: { word: "casa", article: "la", gender: "feminine" },
                de: { word: "Haus", article: "das", gender: "neuter" },
                ru: { word: "дом", article: "", gender: "masculine" },
                el: { word: "σπίτι", article: "το", gender: "neuter" },
                br: { word: "ti", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'casa' (hut) and 'mansio' (stay) were feminine, giving feminine words to Spanish, Italian, and French. German 'Haus' is neuter, Russian 'дом' and Breton 'ti' are masculine, and Greek 'σπίτι' is neuter (derived from Latin 'hospitium')."
        },
        {
            concept: "School",
            emoji: "🏫",
            translations: {
                fr: { word: "école", article: "l'", gender: "feminine" },
                es: { word: "escuela", article: "la", gender: "feminine" },
                it: { word: "scuola", article: "la", gender: "feminine" },
                de: { word: "Schule", article: "die", gender: "feminine" },
                ru: { word: "школа", article: "", gender: "feminine" },
                el: { word: "σχολείο", article: "το", gender: "neuter" },
                br: { word: "skol", article: "ar", gender: "feminine" }
            },
            explanation: "Derived from Ancient Greek 'schole' (originally meaning 'leisure'), this word became feminine 'schola' in Latin, preserving the feminine gender across French, Spanish, Italian, German, and Russian. Greek 'σχολείο' is neuter, and Breton 'skol' is feminine."
        },
        {
            concept: "Apple",
            emoji: "🍎",
            translations: {
                fr: { word: "pomme", article: "la", gender: "feminine" },
                es: { word: "manzana", article: "la", gender: "feminine" },
                it: { word: "mela", article: "la", gender: "feminine" },
                de: { word: "Apfel", article: "der", gender: "masculine" },
                ru: { word: "яблоко", article: "", gender: "neuter" },
                el: { word: "μήλο", article: "το", gender: "neuter" },
                br: { word: "aval", article: "an", gender: "masculine" }
            },
            explanation: "French 'pomme' and Italian 'mela' are feminine, Spanish 'manzana' is feminine (originally from Latin 'Matiiana' apples). German 'Apfel' and Breton 'aval' are masculine, while Russian 'яблоко' and Greek 'μήλο' are neuter."
        },
        {
            concept: "Bread",
            emoji: "🍞",
            translations: {
                fr: { word: "pain", article: "le", gender: "masculine" },
                es: { word: "pan", article: "el", gender: "masculine" },
                it: { word: "pane", article: "il", gender: "masculine" },
                de: { word: "Brot", article: "das", gender: "neuter" },
                ru: { word: "хлеб", article: "", gender: "masculine" },
                el: { word: "ψωμί", article: "το", gender: "neuter" },
                br: { word: "bara", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'panis' was masculine, preserving masculine gender in French, Spanish, and Italian. German 'Brot' is neuter, from Proto-Germanic '*braudą'. Russian 'хлеб' is masculine, Greek 'ψωμί' is neuter, and Breton 'bara' is masculine."
        },
        {
            concept: "Hand",
            emoji: "✋",
            translations: {
                fr: { word: "main", article: "la", gender: "feminine" },
                es: { word: "mano", article: "la", gender: "feminine" },
                it: { word: "mano", article: "la", gender: "feminine" },
                de: { word: "Hand", article: "die", gender: "feminine" },
                ru: { word: "рука", article: "", gender: "feminine" },
                el: { word: "χέρι", article: "το", gender: "neuter" },
                br: { word: "dorn", article: "an", gender: "masculine" }
            },
            explanation: "Consistently feminine! Latin 'manus' was a feminine fourth-declension noun, preserving the feminine gender in French, Spanish, and Italian (Italian 'mano' ends in -o but is feminine!). German 'Hand' and Russian 'рука' are also feminine. Greek 'χέρι' is neuter, and Breton 'dorn' is masculine."
        },
        {
            concept: "Head",
            emoji: "👤",
            translations: {
                fr: { word: "tête", article: "la", gender: "feminine" },
                es: { word: "cabeza", article: "la", gender: "feminine" },
                it: { word: "testa", article: "la", gender: "feminine" },
                de: { word: "Kopf", article: "der", gender: "masculine" },
                ru: { word: "голова", article: "", gender: "feminine" },
                el: { word: "κεφάλι", article: "το", gender: "neuter" },
                br: { word: "penn", article: "ar", gender: "masculine" }
            },
            explanation: "French 'tête' and Italian 'testa' come from Latin 'testa' (potsherd/skull) which was feminine. Spanish 'cabeza' (from 'capitia') and Russian 'голова' are also feminine. German 'Kopf' and Breton 'penn' are masculine, and Greek 'κεφάλι' is neuter."
        },
        {
            concept: "Eye",
            emoji: "👁️",
            translations: {
                fr: { word: "œil", article: "l'", gender: "masculine" },
                es: { word: "ojo", article: "el", gender: "masculine" },
                it: { word: "occhio", article: "l'", gender: "masculine" },
                de: { word: "Auge", article: "das", gender: "neuter" },
                ru: { word: "глаз", article: "", gender: "masculine" },
                el: { word: "μάτι", article: "το", gender: "neuter" },
                br: { word: "lagad", article: "al", gender: "masculine" }
            },
            explanation: "Latin 'oculus' was masculine, giving masculine words to French, Spanish, Italian, and Breton. German 'Auge' is neuter, Greek 'μάτι' is neuter, and Russian 'глаз' is masculine."
        },
        {
            concept: "City",
            emoji: "🏙️",
            translations: {
                fr: { word: "ville", article: "la", gender: "feminine" },
                es: { word: "ciudad", article: "la", gender: "feminine" },
                it: { word: "città", article: "la", gender: "feminine" },
                de: { word: "Stadt", article: "die", gender: "feminine" },
                ru: { word: "город", article: "", gender: "masculine" },
                el: { word: "πόλη", article: "η", gender: "feminine" },
                br: { word: "kêr", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'civitas' was feminine, preserving feminine gender in Romance languages. German 'Stadt', Greek 'πόλη', and Breton 'kêr' are also feminine. Russian 'город' is masculine due to its phonetic consonant ending."
        },
        {
            concept: "Tea",
            emoji: "🍵",
            translations: {
                fr: { word: "thé", article: "le", gender: "masculine" },
                es: { word: "té", article: "el", gender: "masculine" },
                it: { word: "tè", article: "il", gender: "masculine" },
                de: { word: "Tee", article: "der", gender: "masculine" },
                ru: { word: "чай", article: "", gender: "masculine" },
                el: { word: "τσάι", article: "το", gender: "neuter" },
                br: { word: "te", article: "an", gender: "masculine" }
            },
            explanation: "Borrowed from Min Chinese 'tê', the word for tea entered most European languages as masculine (French, Spanish, Italian, German, Russian, Breton). Greek 'τσάι' is neuter."
        },
        {
            concept: "Coffee",
            emoji: "☕",
            translations: {
                fr: { word: "café", article: "le", gender: "masculine" },
                es: { word: "café", article: "el", gender: "masculine" },
                it: { word: "caffè", article: "il", gender: "masculine" },
                de: { word: "Kaffee", article: "der", gender: "masculine" },
                ru: { word: "кофе", article: "", gender: "masculine" },
                el: { word: "καφές", article: "ο", gender: "masculine" },
                br: { word: "kafe", article: "ar", gender: "masculine" }
            },
            explanation: "Originating from Arabic 'qahwah', coffee is masculine across all major target languages (French, Spanish, Italian, German, Russian, Greek, Breton), maintaining a strong masculine loanword tradition."
        },
        {
            concept: "Friend",
            emoji: "👫",
            translations: {
                fr: { word: "ami", article: "l'", gender: "masculine" },
                es: { word: "amigo", article: "el", gender: "masculine" },
                it: { word: "amico", article: "l'", gender: "masculine" },
                de: { word: "Freund", article: "der", gender: "masculine" },
                ru: { word: "друг", article: "", gender: "masculine" },
                el: { word: "φίλος", article: "ο", gender: "masculine" },
                br: { word: "mignon", article: "ar", gender: "masculine" }
            },
            explanation: "Most Indo-European languages default to the masculine gender for the general concept of a friend (French 'ami', Spanish 'amigo', Italian 'amico', German 'Freund', Russian 'друг', Greek 'φίλος', Breton 'mignon')."
        },
        {
            concept: "Window",
            emoji: "🪟",
            translations: {
                fr: { word: "fenêtre", article: "la", gender: "feminine" },
                es: { word: "ventana", article: "la", gender: "feminine" },
                it: { word: "finestra", article: "la", gender: "feminine" },
                de: { word: "Fenster", article: "das", gender: "neuter" },
                ru: { word: "окно", article: "", gender: "neuter" },
                el: { word: "παράθυρο", article: "το", gender: "neuter" },
                br: { word: "prenestr", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'fenestra' was feminine, preserving feminine gender in French, Spanish, and Italian. German 'Fenster' is neuter (borrowed from Latin). Russian 'окно' and Greek 'παράθυρο' are neuter, while Breton 'prenestr' is masculine."
        },
        {
            concept: "Door",
            emoji: "🚪",
            translations: {
                fr: { word: "porte", article: "la", gender: "feminine" },
                es: { word: "puerta", article: "la", gender: "feminine" },
                it: { word: "porta", article: "la", gender: "feminine" },
                de: { word: "Tür", article: "die", gender: "feminine" },
                ru: { word: "дверь", article: "", gender: "feminine" },
                el: { word: "πόρτα", article: "η", gender: "feminine" },
                br: { word: "dor", article: "an", gender: "feminine" }
            },
            explanation: "Consistently feminine! Latin 'porta', German 'Tür', Russian 'дверь' (third declension), Greek 'πόρτα', and Breton 'dor' are all feminine, showing incredibly high stability for this household threshold concept."
        },
        {
            concept: "Key",
            emoji: "🔑",
            translations: {
                fr: { word: "clé", article: "la", gender: "feminine" },
                es: { word: "llave", article: "la", gender: "feminine" },
                it: { word: "chiave", article: "la", gender: "feminine" },
                de: { word: "Schlüssel", article: "der", gender: "masculine" },
                ru: { word: "ключ", article: "", gender: "masculine" },
                el: { word: "κλειδί", article: "το", gender: "neuter" },
                br: { word: "alc'hwez", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'clavis' was feminine, preserving feminine gender in French, Spanish, and Italian. German 'Schlüssel', Russian 'ключ', and Breton 'alc'hwez' are masculine, while Greek 'κλειδί' is neuter."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
