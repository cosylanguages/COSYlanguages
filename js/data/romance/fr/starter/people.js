(function() {
    const data = [
    {
        "word": "Napoléon Bonaparte",
        "transcription": "na.pɔ.le.ɔ̃ bɔ.na.paʁt",
        "subtext": "empereur et militaire",
        "definitions": [
            {
                "text": "Célèbre empereur des Français.",
                "examples": [
                    "Napoléon est né en Corse."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Zinedine Zidane",
        "transcription": "zi.ne.din zi.dan",
        "subtext": "footballeur et entraîneur",
        "definitions": [
            {
                "text": "L'un des plus grands joueurs de football français.",
                "examples": [
                    "Zidane a gagné la Coupe du Monde en 1998."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Victor Hugo",
        "transcription": "vik.tɔʁ y.ɡo",
        "subtext": "écrivain et poète",
        "definitions": [
            {
                "text": "L'un des plus grands écrivains de la langue française.",
                "examples": [
                    "Victor Hugo a écrit Les Misérables."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Marie Curie",
        "transcription": "ma.ʁi ky.ʁi",
        "subtext": "scientifique",
        "definitions": [
            {
                "text": "Physicienne et chimiste célèbre pour ses travaux sur la radioactivité.",
                "examples": [
                    "Marie Curie a reçu deux prix Nobel."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Édith Piaf",
        "transcription": "e.dit pjaf",
        "subtext": "chanteuse",
        "definitions": [
            {
                "text": "Chanteuse française iconique surnommée La Môme.",
                "examples": [
                    "Édith Piaf a chanté La Vie en rose."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Louis Pasteur",
        "transcription": "lwi pas.tœʁ",
        "subtext": "scientifique",
        "definitions": [
            {
                "text": "Scientifique français, inventeur du vaccin contre la rage.",
                "examples": [
                    "Pasteur a sauvé de nombreuses vies."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Claude Monet",
        "transcription": "klod mɔ.nɛ",
        "subtext": "peintre",
        "definitions": [
            {
                "text": "Peintre français, l'un des fondateurs de l'impressionnisme.",
                "examples": [
                    "Monet a peint les Nymphéas."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Jeanne d'Arc",
        "transcription": "ʒan daʁk",
        "subtext": "héroïne nationale",
        "definitions": [
            {
                "text": "Jeune paysanne qui a aidé à libérer la France au XVe siècle.",
                "examples": [
                    "Jeanne d'Arc est une figure historique importante."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Molière",
        "transcription": "mɔ.ljɛʁ",
        "subtext": "dramaturge et acteur",
        "definitions": [
            {
                "text": "Le plus célèbre auteur de comédies français.",
                "examples": [
                    "Le français est la langue de Molière."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Gustave Eiffel",
        "transcription": "ɡys.tav ɛ.fɛl",
        "subtext": "ingénieur",
        "definitions": [
            {
                "text": "Ingénieur célèbre pour la construction de la Tour Eiffel.",
                "examples": [
                    "La Tour Eiffel porte le nom de Gustave Eiffel."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    },
    {
        "word": "Coco Chanel",
        "transcription": "ko.ko ʃa.nɛl",
        "subtext": "créatrice de mode",
        "definitions": [
            {
                "text": "Célèbre couturière qui a révolutionné la mode féminine.",
                "examples": [
                    "Chanel est un nom célèbre dans le monde de la mode."
                ]
            }
        ],
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "noun"
    }
]
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
