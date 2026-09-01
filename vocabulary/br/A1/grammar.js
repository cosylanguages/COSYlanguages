(function() {
    const lang = "br";
    const pronouns = ["me", "te", "eñ", "hi", "ni", "c'hwi", "int"];
    const data = [
        {
            "id": "br_starter_grammar_001",
            "verb": "bezañ",
            "word": "bezañ",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "bet",
            "level": "starter",
            "lang": "br",
            "theme": "language",
            "form": "verb",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["on", "out", "eo", "eo", "omp", "oc'h", "int"],
                    "negative": ["n'on ket", "n'out ket", "n'eo ket", "n'eo ket", "n'omp ket", "n'oc'h ket", "n'int ket"],
                    "question": ["ha me a zo?", "ha te a zo?", "hag eñ a zo?", "ha hi a zo?", "ha ni a zo?", "ha c'hwi a zo?", "hag int a zo?"]
                },
                "past_simple": {
                    "positive": ["oan", "oas", "oa", "oa", "oamp", "oac'h", "oant"],
                    "negative": ["n'oan ket", "n'oas ket", "n'oa ket", "n'oa ket", "n'oamp ket", "n'oac'h ket", "n'oant ket"],
                    "question": ["ha me a oa?", "ha te a oa?", "hag eñ a oa?", "ha hi a oa?", "ha ni a oa?", "ha c'hwi a oa?", "hag int a oa?"]
                },
                "future_simple": {
                    "positive": ["vin", "vi", "vo", "vo", "vimp", "vioc'h", "vint"],
                    "negative": ["ne vin ket", "ne vi ket", "ne vo ket", "ne vo ket", "ne vimp ket", "ne vioc'h ket", "ne vint ket"],
                    "question": ["ha me a vo?", "ha te a vo?", "hag eñ a vo?", "ha hi a vo?", "ha ni a vo?", "ha c'hwi a vo?", "hag int a vo?"]
                }
            },
            "definitions": [{ "text": "Bezañ (to be) ez-oberiat hag en amzerioù disheñvel.", "examples": ["Me a zo er gêr.", "Ne vo ket er skol."] }]
        },
        {
            "id": "br_starter_grammar_002",
            "verb": "kaout",
            "word": "kaout",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "bet",
            "level": "starter",
            "lang": "br",
            "theme": "language",
            "form": "verb",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["am eus", "az peus", "en deus", "he deus", "hon eus", "ho peus", "o deus"],
                    "negative": ["n'am eus ket", "n'az peus ket", "n'en deus ket", "n'he deus ket", "n'hon eus ket", "n'ho peus ket", "n'o deus ket"],
                    "question": ["hag am eus?", "hag az peus?", "hag en deus?", "hag he deus?", "hag hon eus?", "hag ho peus?", "hag o deus?"]
                },
                "past_simple": {
                    "positive": ["am boa", "az poa", "en doa", "he doa", "hor boa", "ho poa", "o doa"],
                    "negative": ["n'am boa ket", "n'az poa ket", "n'en doa ket", "n'he doa ket", "n'hor boa ket", "n'ho poa ket", "n'o doa ket"],
                    "question": ["hag am boa?", "hag az poa?", "hag en doa?", "hag he doa?", "hag hor boa?", "hag ho poa?", "hag o doa?"]
                },
                "future_simple": {
                    "positive": ["am bo", "az po", "en do", "he do", "hor bo", "ho po", "o do"],
                    "negative": ["n'am bo ket", "n'az po ket", "n'en do ket", "n'he do ket", "n'hor bo ket", "n'ho po ket", "n'o do ket"],
                    "question": ["hag am bo?", "hag az po?", "hag en do?", "hag he do?", "hag hor bo?", "hag ho po?", "hag o do?"]
                }
            },
            "definitions": [{ "text": "Kaout (to have) amzer bremañ, amzer dremenet hag amzer da zont.", "examples": ["Un ti am eus.", "N'o doa ket kalz amzer."] }]
        },
        {
            "id": "br_starter_grammar_003",
            "verb": "ober",
            "word": "ober",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "graet",
            "level": "starter",
            "lang": "br",
            "theme": "language",
            "form": "verb",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["ran", "rez", "ra", "ra", "reomp", "rit", "reont"],
                    "negative": ["ne ran ket", "ne rez ket", "ne ra ket", "ne ra ket", "ne reomp ket", "ne rit ket", "ne reont ket"],
                    "question": ["ha me a ra?", "ha te a ra?", "hag eñ a ra?", "ha hi a ra?", "ha ni a ra?", "ha c'hwi a ra?", "hag int a ra?"]
                },
                "past_simple": {
                    "positive": ["gris", "gres", "greas", "greas", "grios", "groc'h", "grijont"],
                    "negative": ["ne ris ket", "ne res ket", "ne reas ket", "ne reas ket", "ne reomp ket", "ne reoc'h ket", "ne rejont ket"],
                    "question": ["ha me a reas?", "ha te a reas?", "hag eñ a reas?", "ha hi a reas?", "ha ni a reas?", "ha c'hwi a reas?", "hag int a reas?"]
                }
            },
            "definitions": [{ "text": "Ober (to do / to make) en holl furmoù pennañ.", "examples": ["Me a ra al labour.", "Ne reas ket e oberenn."] }]
        },
        {
            "id": "br_starter_grammar_004",
            "verb": "monet",
            "word": "monet",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "aet",
            "level": "starter",
            "lang": "br",
            "theme": "language",
            "form": "verb",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["an", "ez", "a", "a", "eomp", "it", "eont"],
                    "negative": ["ned an ket", "ned ez ket", "ned a ket", "ned a ket", "ned eomp ket", "ned it ket", "ned eont ket"],
                    "question": ["ha me a ya?", "ha te a ya?", "hag eñ a ya?", "ha hi a ya?", "ha ni a ya?", "ha c'hwi a ya?", "hag int a ya?"]
                },
                "past_simple": {
                    "positive": ["is", "es", "eas", "eas", "ejomp", "ejoc'h", "ejont"],
                    "negative": ["ned is ket", "ned es ket", "ned eas ket", "ned eas ket", "ned ejomp ket", "ned ejoc'h ket", "ned ejont ket"],
                    "question": ["ha me a eas?", "ha te a eas?", "hag eñ a eas?", "ha hi a eas?", "ha ni a eas?", "ha c'hwi a eas?", "hag int a eas?"]
                }
            },
            "definitions": [{ "text": "Monet / Mont (to go) amzer bremañ hag amzer dremenet.", "examples": ["Moneo / Ya d'an ti-skol.", "Ned a ket d'ar c'hoad."] }]
        }
    ];

    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
