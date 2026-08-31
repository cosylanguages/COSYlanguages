// TODO: verify level classification
(function() {
    const lang = "cv";
    const data = [
    {
        "word": "эпĕ",
        "level": "starter",
        "theme": "people",
        "emoji": "🙋",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Пĕрремĕш сăпат, пĕччен:",
                "examples": [
                    "Эпĕ чăваш чĕлхине юрататпăр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_001"
    },
    {
        "word": "эсĕ",
        "level": "starter",
        "theme": "people",
        "emoji": "🫵",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Иккĕмĕш сăпат, пĕччен:",
                "examples": [
                    "Эсĕ ăçта пурăнатăн?"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_002"
    },
    {
        "word": "вăл",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Виçкĕмĕш сăпат, пĕччен:",
                "examples": [
                    "Вăл шкулта вĕренет."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_003"
    },
    {
        "word": "эпир",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Пĕрремĕш сăпат, нумайлăх:",
                "examples": [
                    "Эпир ялта ĕçлетпĕр."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_004"
    },
    {
        "word": "эсир",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Иккĕмĕш сăпат, нумайлăх:",
                "examples": [
                    "Эсир ăçтан килчĕрĕр?"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_005"
    },
    {
        "word": "вĕсем",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Виçкĕмĕш сăпат, нумайлăх:",
                "examples": [
                    "Вĕсем паркра утса йөрĕвеççĕ."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_006"
    },
    {
        "word": "ку",
        "level": "starter",
        "theme": "people",
        "emoji": "👉",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Çывăхри япалана кăтартакан местоимени:",
                "examples": [
                    "Ку манăн кĕнеке."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_007"
    },
    {
        "word": "çак",
        "level": "starter",
        "theme": "people",
        "emoji": "👉",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Палăртнă япалана кăтартакан сăмах:",
                "examples": [
                    "Çак çурт питĕ пысăк."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_008"
    },
    {
        "word": "бар",
        "level": "starter",
        "theme": "people",
        "emoji": "✅",
        "form": "particle",
        "definitions": [
            {
                "text": "Пурăннине, барнине кăтартакан сăмах:",
                "examples": [
                    "Манăн йытă бар."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_009"
    },
    {
        "word": "çук",
        "level": "starter",
        "theme": "people",
        "emoji": "❌",
        "form": "particle",
        "definitions": [
            {
                "text": "Çуклăха кăтартакан сăмах:",
                "examples": [
                    "Паян ялта çумăр çук."
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_010"
    },
    {
        "word": "мĕн",
        "level": "starter",
        "theme": "people",
        "emoji": "❓",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Ыйту местоименийĕ:",
                "examples": [
                    "Ку мĕнлĕ япала?"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_011"
    },
    {
        "word": "кам",
        "level": "starter",
        "theme": "people",
        "emoji": "❓",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Çын çинчен ыйтакан сăмах:",
                "examples": [
                    "Кам урамра утать?"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_012"
    },
    {
        "word": "сывлăх пултăр",
        "level": "starter",
        "theme": "people",
        "emoji": "👋",
        "form": "phrase",
        "definitions": [
            {
                "text": "Вырăнлă саламлав сăмахĕ:",
                "examples": [
                    "Сывлăх пултăр, вĕрентĕкçĕ!"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_013"
    },
    {
        "word": "сывă пулăр",
        "level": "starter",
        "theme": "people",
        "emoji": "👋",
        "form": "phrase",
        "definitions": [
            {
                "text": "Сывпуллашмалли сăмах:",
                "examples": [
                    "Ыранччен сывă пулăр!"
                ]
            }
        ],
        "lang": "cv",
        "transcription": "",
        "id": "cv_starter_people_gram_014"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
