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
        },
        {
            concept: "Age",
            translations: {
                fr: { word: "âge", article: "l'", gender: "masculine" },
                es: { word: "edad", article: "la", gender: "feminine" },
                it: { word: "età", article: "l'", gender: "feminine" },
                de: { word: "Alter", article: "das", gender: "neuter" },
                ru: { word: "возраст", article: "", gender: "masculine" },
                el: { word: "ηλικία", article: "η", gender: "feminine" },
                br: { word: "oad", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'aetas' (f) gave feminine 'edad' and 'età' in Spanish and Italian. French 'âge' comes from 'aetaticum' (neuter) and became masculine. German 'Alter' is neuter. Russian 'возраст' is masculine. Greek 'ηλικία' is feminine."
        },
        {
            concept: "Justice",
            translations: {
                fr: { word: "justice", article: "la", gender: "feminine" },
                es: { word: "justicia", article: "la", gender: "feminine" },
                it: { word: "giustizia", article: "la", gender: "feminine" },
                de: { word: "Gerechtigkeit", article: "die", gender: "feminine" },
                ru: { word: "справедливость", article: "", gender: "feminine" },
                el: { word: "δικαιοσύνη", article: "η", gender: "feminine" },
                br: { word: "reizhded", article: "ar", gender: "feminine" }
            },
            explanation: "Universally personified as Lady Justice (Justitia), this abstract concept is beautifully and consistently feminine across French, Spanish, Italian, German ('-keit' suffix), Russian (3rd declension ending in a soft sign), Greek, and Breton ('-ded' suffix)!"
        },
        {
            concept: "Reason",
            translations: {
                fr: { word: "raison", article: "la", gender: "feminine" },
                es: { word: "razón", article: "la", gender: "feminine" },
                it: { word: "ragione", article: "la", gender: "feminine" },
                de: { word: "Vernunft", article: "die", gender: "feminine" },
                ru: { word: "разум", article: "", gender: "masculine" },
                el: { word: "λογική", article: "η", gender: "feminine" },
                br: { word: "poell", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'ratio' (f) gave feminine words to Romance languages. German 'Vernunft' is feminine. Greek 'λογική' is feminine (originally 'the logical art'). Russian 'разум' is masculine."
        },
        {
            concept: "Science",
            translations: {
                fr: { word: "science", article: "la", gender: "feminine" },
                es: { word: "ciencia", article: "la", gender: "feminine" },
                it: { word: "scienza", article: "la", gender: "feminine" },
                de: { word: "Wissenschaft", article: "die", gender: "feminine" },
                ru: { word: "наука", article: "", gender: "feminine" },
                el: { word: "επιστήμη", article: "η", gender: "feminine" },
                br: { word: "skiant", article: "ar", gender: "feminine" }
            },
            explanation: "Abstract disciplines of knowledge are historically feminine! Latin 'scientia' (f) led to feminine words in Romance, and Greek 'επιστήμη' (f) represents organized knowledge. Russian 'наука' is feminine. German 'Wissenschaft' forms feminine nouns using the suffix '-schaft'."
        },
        {
            concept: "Music",
            translations: {
                fr: { word: "musique", article: "la", gender: "feminine" },
                es: { word: "música", article: "la", gender: "feminine" },
                it: { word: "musica", article: "la", gender: "feminine" },
                de: { word: "Musik", article: "die", gender: "feminine" },
                ru: { word: "музыка", article: "", gender: "feminine" },
                el: { word: "μουσική", article: "η", gender: "feminine" },
                br: { word: "sonerezh", article: "ar", gender: "masculine" }
            },
            explanation: "Greek 'mousikē' (of the Muses) was feminine, borrowed as feminine into Latin ('musica'), and then preserved as feminine in Romance languages, German, Russian, and Greek. Breton 'sonerezh' is masculine."
        },
        {
            concept: "Universe",
            translations: {
                fr: { word: "univers", article: "l'", gender: "masculine" },
                es: { word: "universo", article: "el", gender: "masculine" },
                it: { word: "universo", article: "l'", gender: "masculine" },
                de: { word: "Universum", article: "das", gender: "neuter" },
                ru: { word: "вселенная", article: "", gender: "feminine" },
                el: { word: "σύμπαν", article: "το", gender: "neuter" },
                br: { word: "hollved", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'universum' (neuter) became masculine 'univers/universo' in Romance. German keeps 'Universum' neuter. Greek 'σύμπαν' (literally 'all-together') is neuter. Russian 'вселенная' is feminine because it is historically a substantivized feminine adjective meaning 'the inhabited (world)'."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
