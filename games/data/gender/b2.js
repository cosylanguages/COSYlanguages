(function() {
    const level = "upper_intermediate";
    const data = [
        {
            concept: "Death",
            translations: {
                fr: { word: "mort", article: "la", gender: "feminine" },
                es: { word: "muerte", article: "la", gender: "feminine" },
                it: { word: "morte", article: "la", gender: "feminine" },
                de: { word: "Tod", article: "der", gender: "masculine" },
                ru: { word: "смерть", article: "", gender: "feminine" },
                el: { word: "θάνατος", article: "ο", gender: "masculine" },
                br: { word: "marv", article: "ar", gender: "masculine" }
            },
            explanation: "In Latin, 'mors' (f) gave feminine words to Romance languages, and Slavic 'смерть' (f) is also feminine. However, in Greek mythology, Death is personified as the male deity Thanatos, hence Greek 'θάνατος' is masculine! German 'Tod' is masculine from Proto-Germanic '*dauþuz'. Breton 'marv' is also masculine."
        },
        {
            concept: "Freedom",
            translations: {
                fr: { word: "liberté", article: "la", gender: "feminine" },
                es: { word: "libertad", article: "la", gender: "feminine" },
                it: { word: "libertà", article: "la", gender: "feminine" },
                de: { word: "Freiheit", article: "die", gender: "feminine" },
                ru: { word: "свобода", article: "", gender: "feminine" },
                el: { word: "ελευθερία", article: "η", gender: "feminine" },
                br: { word: "frankiz", article: "ar", gender: "feminine" }
            },
            explanation: "Much like 'truth', the abstract concept of 'freedom' is personified as a female virtue and is universally feminine! French, Italian, Spanish, German, Russian, Greek, and Breton are all feminine, showing incredible conceptual consistency across these languages."
        },
        {
            concept: "Love",
            translations: {
                fr: { word: "amour", article: "l'", gender: "masculine" },
                es: { word: "amor", article: "el", gender: "masculine" },
                it: { word: "amore", article: "l'", gender: "masculine" },
                de: { word: "Liebe", article: "die", gender: "feminine" },
                ru: { word: "любовь", article: "", gender: "feminine" },
                el: { word: "αγάπη", article: "η", gender: "feminine" },
                br: { word: "karantez", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'amor' was masculine, giving masculine 'amore/amor' in Italian and Spanish. French 'amour' is masculine in the singular, but in classical literary French, it could be feminine in the plural! German 'Liebe', Russian 'любовь' (third declension), Greek 'αγάπη', and Breton 'karantez' are all feminine."
        },
        {
            concept: "Peace",
            translations: {
                fr: { word: "paix", article: "la", gender: "feminine" },
                es: { word: "paz", article: "la", gender: "feminine" },
                it: { word: "pace", article: "la", gender: "feminine" },
                de: { word: "Frieden", article: "der", gender: "masculine" },
                ru: { word: "мир", article: "", gender: "masculine" },
                el: { word: "ειρήνη", article: "η", gender: "feminine" },
                br: { word: "peoc'h", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'pax' (f) gave feminine words to Romance languages. Greek 'ειρήνη' is feminine (personified as the goddess Eirene). However, German 'Frieden' is masculine (related to safety/protection), Russian 'мир' is masculine (consonant ending), and Breton 'peoc'h' is masculine."
        },
        {
            concept: "Law",
            translations: {
                fr: { word: "loi", article: "la", gender: "feminine" },
                es: { word: "ley", article: "la", gender: "feminine" },
                it: { word: "legge", article: "la", gender: "feminine" },
                de: { word: "Gesetz", article: "das", gender: "neuter" },
                ru: { word: "закон", article: "", gender: "masculine" },
                el: { word: "νόμος", article: "ο", gender: "masculine" },
                br: { word: "lezenn", article: "al", gender: "feminine" }
            },
            explanation: "Latin 'lex' (law) was feminine, hence feminine 'loi/legge/ley' in Romance languages and 'lezenn' in Breton. German 'Gesetz' is neuter, derived from 'setzen' (to set/place). Russian 'закон' is masculine. Greek 'νόμος' is masculine, from 'nemein' (to distribute)."
        },
        {
            concept: "Shadow",
            translations: {
                fr: { word: "ombre", article: "l'", gender: "feminine" },
                es: { word: "sombra", article: "la", gender: "feminine" },
                it: { word: "ombra", article: "l'", gender: "feminine" },
                de: { word: "Schatten", article: "der", gender: "masculine" },
                ru: { word: "тень", article: "", gender: "feminine" },
                el: { word: "σκιά", article: "η", gender: "feminine" },
                br: { word: "disheol", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'umbra' (f) gave feminine words to Romance languages. Russian 'тень' and Greek 'σκιά' are also feminine. But German 'Schatten' is masculine from Proto-Germanic '*skadwaz'. Breton 'disheol' (literally 'un-sun') is masculine."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
