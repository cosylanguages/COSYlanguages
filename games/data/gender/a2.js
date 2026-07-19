(function() {
    const level = "elementary";
    const data = [
        {
            concept: "Sea",
            translations: {
                fr: { word: "mer", article: "la", gender: "feminine" },
                es: { word: "mar", article: "el/la", gender: "both" },
                it: { word: "mare", article: "il", gender: "masculine" },
                de: { word: "Meer", article: "das", gender: "neuter" },
                ru: { word: "море", article: "", gender: "neuter" },
                el: { word: "θάλασσα", article: "η", gender: "feminine" },
                br: { word: "mor", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'mare' was neuter. In French, it shifted to feminine (possibly by analogy with 'terre' or plural neuter ending '-a'). Italian kept it masculine. Spanish 'mar' is famous for being used as both masculine ('el mar' - standard) and feminine ('la mar' - poetic, nautical). German 'Meer' and Russian 'море' remain neuter. Greek 'θάλασσα' has been feminine since Homeric times."
        },
        {
            concept: "Wind",
            translations: {
                fr: { word: "vent", article: "le", gender: "masculine" },
                es: { word: "viento", article: "el", gender: "masculine" },
                it: { word: "vento", article: "il", gender: "masculine" },
                de: { word: "Wind", article: "der", gender: "masculine" },
                ru: { word: "ветер", article: "", gender: "masculine" },
                el: { word: "άνεμος", article: "ο", gender: "masculine" },
                br: { word: "avel", article: "an", gender: "feminine" }
            },
            explanation: "Most Indo-European words for wind are masculine, historically associated with active, personified animacy (like the wind gods Ventus in Latin or Anemoi in Greek). French, Italian, Spanish, German, Russian, and Greek all preserve this masculine gender! Breton 'avel' is an exception, being feminine."
        },
        {
            concept: "Bread",
            translations: {
                fr: { word: "pain", article: "le", gender: "masculine" },
                es: { word: "pan", article: "el", gender: "masculine" },
                it: { word: "pane", article: "il", gender: "masculine" },
                de: { word: "Brot", article: "das", gender: "neuter" },
                ru: { word: "хлеб", article: "", gender: "masculine" },
                el: { word: "ψωμί", article: "το", gender: "neuter" },
                br: { word: "bara", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'panis' was masculine, hence masculine 'pain', 'pan', and 'pane' in Romance languages. German 'Brot' comes from Proto-Germanic neuter '*braudą'. Russian 'хлеб' is masculine by phonetic ending. Greek 'ψωμί' comes from Ancient Greek neuter diminutive 'psōmion' (morsel)."
        },
        {
            concept: "Time",
            translations: {
                fr: { word: "temps", article: "le", gender: "masculine" },
                es: { word: "tiempo", article: "el", gender: "masculine" },
                it: { word: "tempo", article: "il", gender: "masculine" },
                de: { word: "Zeit", article: "die", gender: "feminine" },
                ru: { word: "время", article: "", gender: "neuter" },
                el: { word: "χρόνος", article: "ο", gender: "masculine" },
                br: { word: "amzer", article: "an", gender: "feminine" }
            },
            explanation: "Latin 'tempus' was neuter, shifting to masculine in French, Italian, and Spanish. German 'Zeit' is feminine, inheriting its gender from Proto-Germanic '*tīdiz' (feminine, source of English 'tide/time'). Russian 'время' is an ancient neuter noun ending in '-мя'. Greek 'χρόνος' is masculine."
        },
        {
            concept: "Day",
            translations: {
                fr: { word: "jour", article: "le", gender: "masculine" },
                es: { word: "día", article: "el", gender: "masculine" },
                it: { word: "giorno", article: "il", gender: "masculine" },
                de: { word: "Tag", article: "der", gender: "masculine" },
                ru: { word: "день", article: "", gender: "masculine" },
                el: { word: "μέρα", article: "η", gender: "feminine" },
                br: { word: "devezh", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'dies' was masculine (but sometimes feminine in singular). Spanish 'día' remains masculine despite its '-a' ending because of this Latin origin. German 'Tag' comes from Proto-Germanic masculine '*dagaz'. Russian 'день' is masculine. Greek 'μέρα' is feminine (from Ancient Greek 'hēméra')."
        },
        {
            concept: "Night",
            translations: {
                fr: { word: "nuit", article: "la", gender: "feminine" },
                es: { word: "noche", article: "la", gender: "feminine" },
                it: { word: "notte", article: "la", gender: "feminine" },
                de: { word: "Nacht", article: "die", gender: "feminine" },
                ru: { word: "ночь", article: "", gender: "feminine" },
                el: { word: "νύχτα", article: "η", gender: "feminine" },
                br: { word: "noz", article: "an", gender: "feminine" }
            },
            explanation: "This concept is exceptionally stable across the entire Indo-European family (Proto-Indo-European '*nókʷts') and is virtually **always feminine**! From Latin 'nox' (f) to German 'Nacht' (f), Russian 'ночь' (f), Greek 'νύχτα' (f), and Breton 'noz' (f). It represents an ancient, universal feminine association in language."
        },
        {
            concept: "Sun",
            translations: {
                fr: { word: "soleil", article: "le", gender: "masculine" },
                es: { word: "sol", article: "el", gender: "masculine" },
                it: { word: "sole", article: "il", gender: "masculine" },
                de: { word: "Sonne", article: "die", gender: "feminine" },
                ru: { word: "солнце", article: "", gender: "neuter" },
                el: { word: "ήλιος", article: "ο", gender: "masculine" },
                br: { word: "heol", article: "ar", gender: "masculine" }
            },
            explanation: "Latin 'sol' was masculine, leading to masculine 'soleil', 'sol', and 'sole' in Romance languages. German 'Sonne' is feminine, continuing a Germanic mythological tradition where the Sun is personified as a goddess (Sól) and the Moon is her brother (Máni). Russian 'солнце' is neuter due to its '-це' ending. Greek 'ήλιος' has been masculine since ancient times (personified as Helios)."
        },
        {
            concept: "Moon",
            translations: {
                fr: { word: "lune", article: "la", gender: "feminine" },
                es: { word: "luna", article: "la", gender: "feminine" },
                it: { word: "luna", article: "la", gender: "feminine" },
                de: { word: "Mond", article: "der", gender: "masculine" },
                ru: { word: "луна", article: "", gender: "feminine" },
                el: { word: "φεγγάρι", article: "το", gender: "neuter" },
                br: { word: "loar", article: "al", gender: "feminine" }
            },
            explanation: "Latin 'luna' was feminine, preserving feminine gender in French, Spanish, and Italian. German 'Mond' is masculine, reflecting the Germanic mythological counterpart of the male moon deity (Máni). Russian 'луна' is feminine due to its phonetic ending '-а'. Greek 'φεγγάρι' (from the ancient word for 'shining') is neuter, although the classical word 'σελήνη' is feminine."
        },
        {
            concept: "Fire",
            translations: {
                fr: { word: "feu", article: "le", gender: "masculine" },
                es: { word: "fuego", article: "el", gender: "masculine" },
                it: { word: "fuoco", article: "il", gender: "masculine" },
                de: { word: "Feuer", article: "das", gender: "neuter" },
                ru: { word: "огонь", article: "", gender: "masculine" },
                el: { word: "φωτιά", article: "η", gender: "feminine" },
                br: { word: "tan", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'focus' (hearth/fireplace) was masculine, hence the masculine Romance words. German 'Feuer' comes from Proto-Germanic neuter '*fōr'. Russian 'огонь' is masculine due to its phonetic ending. Greek 'φωτιά' is feminine (derived from 'φως' - light)."
        },
        {
            concept: "Water",
            translations: {
                fr: { word: "eau", article: "l'", gender: "feminine" },
                es: { word: "agua", article: "el/la", gender: "feminine" },
                it: { word: "acqua", article: "l'", gender: "feminine" },
                de: { word: "Wasser", article: "das", gender: "neuter" },
                ru: { word: "вода", article: "", gender: "feminine" },
                el: { word: "νερό", article: "το", gender: "neuter" },
                br: { word: "dour", article: "an", gender: "masculine" }
            },
            explanation: "Latin 'aqua' was feminine, preserving feminine gender in Romance languages. Spanish 'agua' uses 'el' in the singular for phonetic reasons to avoid double 'a' sounds, but it is grammatically feminine ('el agua fría'). German 'Wasser' is neuter. Russian 'вода' ends in '-а' and is feminine. Greek 'νερό' is neuter, coming from Byzantine Greek 'neron' (fresh water)."
        },
        {
            concept: "Tree",
            translations: {
                fr: { word: "arbre", article: "l'", gender: "masculine" },
                es: { word: "árbol", article: "el", gender: "masculine" },
                it: { word: "albero", article: "l'", gender: "masculine" },
                de: { word: "Baum", article: "der", gender: "masculine" },
                ru: { word: "дерево", article: "", gender: "neuter" },
                el: { word: "δέντρο", article: "το", gender: "neuter" },
                br: { word: "gwez", article: "ar", gender: "feminine" }
            },
            explanation: "Latin trees were feminine (e.g., 'arbor'), but in French, Spanish, and Italian, they shifted to masculine. German 'Baum' is masculine, from Proto-Germanic '*baumaz'. Russian 'дерево' ends in '-о' and is neuter. Greek 'δέντρο' is also neuter. Breton 'gwez' is feminine."
        },
        {
            concept: "Mountain",
            translations: {
                fr: { word: "montagne", article: "la", gender: "feminine" },
                es: { word: "montaña", article: "la", gender: "feminine" },
                it: { word: "montagna", article: "la", gender: "feminine" },
                de: { word: "Berg", article: "der", gender: "masculine" },
                ru: { word: "гора", article: "", gender: "feminine" },
                el: { word: "βουνό", article: "το", gender: "neuter" },
                br: { word: "menez", article: "ar", gender: "masculine" }
            },
            explanation: "Vulgar Latin 'montanea' (mountainous region) was feminine, leading to feminine 'montagne', 'montaña', and 'montagna' in Romance languages. German 'Berg' is masculine from Proto-Germanic '*bergaz'. Russian 'гора' is feminine. Greek 'βουνό' is neuter. Breton 'menez' is masculine."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
