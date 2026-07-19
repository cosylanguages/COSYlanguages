(function() {
    const level = "proficiency";
    const data = [
        {
            concept: "Destiny / Fate",
            translations: {
                fr: { word: "destin", article: "le", gender: "masculine" },
                es: { word: "destino", article: "el", gender: "masculine" },
                it: { word: "destino", article: "il", gender: "masculine" },
                de: { word: "Schicksal", article: "das", gender: "neuter" },
                ru: { word: "судьба", article: "", gender: "feminine" },
                el: { word: "πεπρωμένο", article: "το", gender: "neuter" },
                br: { word: "tonkad", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'destinare' gave masculine 'destin/destino' in Romance. German 'Schicksal' is neuter, containing the suffix '-sal'. Russian 'судьба' is feminine. Greek 'πεπρωμένο' is neuter because it is grammatically a substantivized neuter perfect participle."
        },
        {
            concept: "Chaos",
            translations: {
                fr: { word: "chaos", article: "le", gender: "masculine" },
                es: { word: "caos", article: "el", gender: "masculine" },
                it: { word: "caos", article: "il", gender: "masculine" },
                de: { word: "Chaos", article: "das", gender: "neuter" },
                ru: { word: "хаос", article: "", gender: "masculine" },
                el: { word: "χάος", article: "το", gender: "neuter" },
                br: { word: "reuz", article: "ar", gender: "masculine" }
            },
            explanation: "Ancient Greek 'chaos' (neuter) denoted the primeval abyss. German and Greek keep the neuter. French, Italian, Spanish, Russian, and Breton treated it as masculine."
        },
        {
            concept: "Immortality",
            translations: {
                fr: { word: "immortalité", article: "l'", gender: "feminine" },
                es: { word: "inmortalidad", article: "la", gender: "feminine" },
                it: { word: "immortalità", article: "l'", gender: "feminine" },
                de: { word: "Unsterblichkeit", article: "die", gender: "feminine" },
                ru: { word: "бессмертие", article: "", gender: "neuter" },
                el: { word: "αθανασία", article: "η", gender: "feminine" },
                br: { word: "nemarvelezh", article: "an", gender: "feminine" }
            },
            explanation: "Suffixes like French '-ité', Spanish '-idad', Italian '-ità', German '-keit', and Breton '-ezh' all denote feminine abstract nouns. Greek 'αθανασία' is also feminine. Russian 'бессмертие' is neuter because of its ending in '-ие'."
        },
        {
            concept: "Wisdom",
            translations: {
                fr: { word: "sagesse", article: "la", gender: "feminine" },
                es: { word: "sabiduría", article: "la", gender: "feminine" },
                it: { word: "saggezza", article: "la", gender: "feminine" },
                de: { word: "Weisheit", article: "die", gender: "feminine" },
                ru: { word: "мудрость", article: "", gender: "feminine" },
                el: { word: "σοφία", article: "η", gender: "feminine" },
                br: { word: "furnez", article: "ar", gender: "feminine" }
            },
            explanation: "Universally feminine across almost all Indo-European languages! The personification of Wisdom (like the Greek goddess Sophia) has made this word feminine in French, Italian, Spanish, German, Russian, Greek, and Breton."
        },
        {
            concept: "Abyss",
            translations: {
                fr: { word: "abîme", article: "l'", gender: "masculine" },
                es: { word: "abismo", article: "el", gender: "masculine" },
                it: { word: "abisso", article: "l'", gender: "masculine" },
                de: { word: "Abgrund", article: "der", gender: "masculine" },
                ru: { word: "бездна", article: "", gender: "feminine" },
                el: { word: "άβυσσος", article: "η", gender: "feminine" },
                br: { word: "islonk", article: "an", gender: "masculine" }
            },
            explanation: "Greek 'ábyssos' was a feminine adjective/noun (meaning 'bottomless'), which is still feminine in Greek. French, Italian, and Spanish transformed it into masculine 'abîme/abisso/abismo'. German 'Abgrund' is masculine. Russian 'бездна' is feminine."
        },
        {
            concept: "Soul",
            translations: {
                fr: { word: "âme", article: "l'", gender: "feminine" },
                es: { word: "alma", article: "el/la", gender: "feminine" },
                it: { word: "anima", article: "l'", gender: "feminine" },
                de: { word: "Seele", article: "die", gender: "feminine" },
                ru: { word: "душа", article: "", gender: "feminine" },
                el: { word: "ψυχή", article: "η", gender: "feminine" },
                br: { word: "ene", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'anima' (f) was feminine, giving rise to feminine 'âme', 'anima', and 'alma' (Spanish uses 'el' for singular phonetic reasons, but the word is feminine: 'el alma pura'). German 'Seele', Russian 'душа', and Greek 'ψυχή' are also feminine. Breton 'ene' is masculine."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
