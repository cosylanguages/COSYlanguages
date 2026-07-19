(function() {
    const level = "intermediate";
    const data = [
        {
            concept: "City",
            translations: {
                fr: { word: "ville", article: "la", gender: "feminine" },
                es: { word: "ciudad", article: "la", gender: "feminine" },
                it: { word: "città", article: "la", gender: "feminine" },
                de: { word: "Stadt", article: "die", gender: "feminine" },
                ru: { word: "город", article: "", gender: "masculine" },
                el: { word: "πόλη", article: "η", gender: "feminine" },
                br: { word: "kêr", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'civitas' (citizenship, city) was feminine, leading to feminine words in Romance languages. German 'Stadt' is feminine from Proto-Germanic '*stads' (place, town). Greek 'πόλη' is feminine (from Ancient 'polis'). Russian 'город' is masculine because it phonetically ends in a consonant."
        },
        {
            concept: "Language / Tongue",
            translations: {
                fr: { word: "langue", article: "la", gender: "feminine" },
                es: { word: "lengua", article: "la", gender: "feminine" },
                it: { word: "lingua", article: "la", gender: "feminine" },
                de: { word: "Sprache", article: "die", gender: "feminine" },
                ru: { word: "язык", article: "", gender: "masculine" },
                el: { word: "γλώσσα", article: "η", gender: "feminine" },
                br: { word: "yezh", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'lingua' (tongue, language) was feminine, so Romance languages kept it feminine. German 'Sprache' is feminine, derived from 'sprechen' (to speak). Greek 'γλώσσα' is feminine. Russian 'язык' (tongue/language) is masculine because of its ending in a consonant."
        },
        {
            concept: "Bridge",
            translations: {
                fr: { word: "pont", article: "le", gender: "masculine" },
                es: { word: "puente", article: "el", gender: "masculine" },
                it: { word: "ponte", article: "il", gender: "masculine" },
                de: { word: "Brücke", article: "die", gender: "feminine" },
                ru: { word: "мост", article: "", gender: "masculine" },
                el: { word: "γέφυρα", article: "η", gender: "feminine" },
                br: { word: "pont", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'pons' (bridge) was masculine, preserving masculine gender in French, Italian, Spanish, and Breton. German 'Brücke' is feminine from Old High German 'brucca'. Russian 'мост' is masculine. Greek 'γέφυρα' has been feminine since antiquity."
        },
        {
            concept: "Heart",
            translations: {
                fr: { word: "cœur", article: "le", gender: "masculine" },
                es: { word: "corazón", article: "el", gender: "masculine" },
                it: { word: "cuore", article: "il", gender: "masculine" },
                de: { word: "Herz", article: "das", gender: "neuter" },
                ru: { word: "сердце", article: "", gender: "neuter" },
                el: { word: "καρδιά", article: "η", gender: "feminine" },
                br: { word: "kalon", article: "ar", gender: "feminine" }
            },
            explanation: "Proto-Indo-European '*kērd' was neuter. Latin 'cor' (neuter) shifted to masculine in Romance languages ('cœur', 'cuore', 'corazón'). German 'Herz' and Russian 'сердце' preserved the original neuter gender. Greek 'καρδιά' evolved into a feminine noun, as did Breton 'kalon'."
        },
        {
            concept: "Truth",
            translations: {
                fr: { word: "vérité", article: "la", gender: "feminine" },
                es: { word: "verdad", article: "la", gender: "feminine" },
                it: { word: "verità", article: "la", gender: "feminine" },
                de: { word: "Wahrheit", article: "die", gender: "feminine" },
                ru: { word: "правда", article: "", gender: "feminine" },
                el: { word: "αλήθεια", article: "η", gender: "feminine" },
                br: { word: "gwirionez", article: "ar", gender: "feminine" }
            },
            explanation: "Abstract virtues are overwhelmingly feminine across Indo-European languages! Latin 'veritas' (f) gave feminine words in Romance. German suffix '-heit' forms feminine nouns. Russian 'правда' ends in '-а' (f). Greek 'αλήθεια' and Breton 'gwirionez' are also feminine, reinforcing this cross-linguistic pattern."
        },
        {
            concept: "Problem",
            translations: {
                fr: { word: "problème", article: "le", gender: "masculine" },
                es: { word: "problema", article: "el", gender: "masculine" },
                it: { word: "problema", article: "il", gender: "masculine" },
                de: { word: "Problem", article: "das", gender: "neuter" },
                ru: { word: "проблема", article: "", gender: "feminine" },
                el: { word: "πρόβλημα", article: "το", gender: "neuter" },
                br: { word: "kudenn", article: "ar", gender: "feminine" }
            },
            explanation: "Originally Greek 'próblēma' (neuter), meaning 'something thrown forward'. German and Greek keep the neuter. Because French, Italian, and Spanish lack neuter genders, they treated it as masculine (giving 'el problema' in Spanish, an exception to the '-a' feminine rule!). Russian, however, transformed it into a feminine noun ('проблема') due to the '-а' ending."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
