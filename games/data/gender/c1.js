(function() {
    const level = "advanced";
    const data = [
        {
            concept: "Source / Origin",
            translations: {
                fr: { word: "source", article: "la", gender: "feminine" },
                es: { word: "origen", article: "el", gender: "masculine" },
                it: { word: "fonte", article: "la", gender: "feminine" },
                de: { word: "Quelle", article: "die", gender: "feminine" },
                ru: { word: "источник", article: "", gender: "masculine" },
                el: { word: "πηγή", article: "η", gender: "feminine" },
                br: { word: "mammenn", article: "ar", gender: "feminine" }
            },
            explanation: "In French ('source'), Italian ('fonte'), German ('Quelle'), Greek ('πηγή'), and Breton ('mammenn'), the word for water spring/source is feminine, traditionally associated with fertility and creation. However, Spanish 'origen' and Russian 'источник' (wellspring/source) are masculine."
        },
        {
            concept: "Art",
            translations: {
                fr: { word: "art", article: "l'", gender: "masculine" },
                es: { word: "arte", article: "el/la", gender: "both" },
                it: { word: "arte", article: "l'", gender: "feminine" },
                de: { word: "Kunst", article: "die", gender: "feminine" },
                ru: { word: "искусство", article: "", gender: "neuter" },
                el: { word: "τέχνη", article: "η", gender: "feminine" },
                br: { word: "arz", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'ars' (f) gave feminine 'arte' to Italian. In French, 'art' became masculine. Spanish 'arte' is masculine in singular ('el arte') but feminine in plural ('las artes')! German 'Kunst' is feminine, from 'können' (to know how/be able). Russian 'искусство' is neuter due to its '-о' ending. Greek 'τέχνη' is feminine."
        },
        {
            concept: "Nature",
            translations: {
                fr: { word: "nature", article: "la", gender: "feminine" },
                es: { word: "naturaleza", article: "la", gender: "feminine" },
                it: { word: "natura", article: "la", gender: "feminine" },
                de: { word: "Natur", article: "die", gender: "feminine" },
                ru: { word: "природа", article: "", gender: "feminine" },
                el: { word: "φύση", article: "η", gender: "feminine" },
                br: { word: "natur", article: "an", gender: "feminine" }
            },
            explanation: "Latin 'natura' (f) is feminine. This word was borrowed into French, Italian, Spanish, German, and Breton, retaining its feminine gender everywhere! Russian 'природа' and Greek 'φύση' are also feminine, making 'Nature' globally feminine across all these languages."
        },
        {
            concept: "System",
            translations: {
                fr: { word: "système", article: "le", gender: "masculine" },
                es: { word: "sistema", article: "el", gender: "masculine" },
                it: { word: "sistema", article: "il", gender: "masculine" },
                de: { word: "System", article: "das", gender: "neuter" },
                ru: { word: "система", article: "", gender: "feminine" },
                el: { word: "σύστημα", article: "το", gender: "neuter" },
                br: { word: "sistem", article: "ar", gender: "masculine" }
            },
            explanation: "Like 'problem', 'system' comes from Greek 'sýstēma' (neuter). German and Greek keep the neuter. Romance languages lacking neuter treated it as masculine (giving Spanish 'el sistema' despite its '-a' ending). Russian transformed it to feminine 'система' to match its phonetic ending rules."
        },
        {
            concept: "Space",
            translations: {
                fr: { word: "espace", article: "l'", gender: "masculine" },
                es: { word: "espacio", article: "el", gender: "masculine" },
                it: { word: "spazio", article: "lo", gender: "masculine" },
                de: { word: "Raum", article: "der", gender: "masculine" },
                ru: { word: "пространство", article: "", gender: "neuter" },
                el: { word: "διάστημα", article: "το", gender: "neuter" },
                br: { word: "egor", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'spatium' (neuter) became masculine 'espace/spazio/espacio' in Romance languages. German 'Raum' is masculine from Proto-Germanic '*rūmaz'. Russian 'пространство' is neuter. Greek 'διάστημα' is neuter due to the suffix '-μα'."
        },
        {
            concept: "Voice",
            translations: {
                fr: { word: "voix", article: "la", gender: "feminine" },
                es: { word: "voz", article: "la", gender: "feminine" },
                it: { word: "voce", article: "la", gender: "feminine" },
                de: { word: "Stimme", article: "die", gender: "feminine" },
                ru: { word: "голос", article: "", gender: "masculine" },
                el: { word: "φωνή", article: "η", gender: "feminine" },
                br: { word: "mouezh", article: "ar", gender: "feminine" }
            },
            explanation: "Latin 'vox' (f) gave feminine words to Romance languages. German 'Stimme', Greek 'φωνή', and Breton 'mouezh' are also feminine. However, Russian 'голос' is masculine because of its final consonant."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
