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
            explanation: "This concept is exceptionally stable across the entire Indo-European family (Proto-Indo-European '*nókʷts') and is virtually **always feminine**! From Latin 'nox' (f) to German 'Nacht' (f), Russian 'ночь' (f), Greek 'νύχτα' (f), and Breton 'noz' (f). It represents a ancient, universal feminine association in language."
        }
    ];
    window.genderGameData = window.genderGameData || {};
    window.genderGameData[level] = data;
})();
