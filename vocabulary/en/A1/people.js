// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_starter_places_067",
        "word": "Albert Einstein",
        "emoji": "👨‍🔬",
        "definitions": [
            {
                "text": "A very famous scientist from Germany who lived in the USA.",
                "examples": [
                    "Albert Einstein was a very clever man."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "ˈælbərt ˈaɪnstaɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_068",
        "word": "Taylor Swift",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "A famous singer and songwriter from the USA.",
                "examples": [
                    "Taylor Swift has many popular songs."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "ˈteɪlər swɪft",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_069",
        "word": "Cristiano Ronaldo",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "A famous football player from Portugal.",
                "examples": [
                    "Cristiano Ronaldo is a very fast athlete."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "krisˈtjɐnu ʁuˈnaɫdu",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_070",
        "word": "Lionel Messi",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "A famous football player from Argentina.",
                "examples": [
                    "Lionel Messi plays for a team in the USA now."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "ljoˈnel ˈmesi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_071",
        "word": "Beyoncé",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "A famous singer and dancer from the USA.",
                "examples": [
                    "Beyoncé is a very successful artist."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "🇬🇧 biˈɒnseɪ | 🇺🇸 biˈɑːnseɪ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_072",
        "word": "Elon Musk",
        "emoji": "🚀",
        "definitions": [
            {
                "text": "A famous businessman who builds electric cars and rockets.",
                "examples": [
                    "Elon Musk is the boss of Tesla and SpaceX."
                ]
            }
        ],
        "subtext": "famous businessman",
        "transcription": "🇬🇧 ˈiːlɒn ˈmʌsk | 🇺🇸 ˈiːlɑːn ˈmʌsk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_073",
        "word": "Queen Elizabeth II",
        "emoji": "👑",
        "definitions": [
            {
                "text": "The famous Queen of the United Kingdom for a very long time.",
                "examples": [
                    "Queen Elizabeth II lived in Buckingham Palace."
                ]
            }
        ],
        "subtext": "famous queen",
        "transcription": "kwiːn ɪˈlɪzəbəθ ðə ˈsɛkənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_074",
        "word": "Marie Curie",
        "emoji": "🧪",
        "definitions": [
            {
                "text": "A famous scientist from Poland and France who studied radiation.",
                "examples": [
                    "Marie Curie was the first woman to win a Nobel Prize."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "mərˈi ˈkjʊri",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_075",
        "word": "Leonardo da Vinci",
        "emoji": "🎨",
        "definitions": [
            {
                "text": "A famous artist and inventor from Italy who painted the Mona Lisa.",
                "examples": [
                    "Leonardo da Vinci was a genius of the Renaissance."
                ]
            }
        ],
        "subtext": "famous artist",
        "transcription": "ˌliəˈnɑrdoʊ ˈdiˈeɪ ˈvɪnʧi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_076",
        "word": "Nelson Mandela",
        "emoji": "🇿🇦",
        "definitions": [
            {
                "text": "A famous leader from South Africa who fought for peace and equality.",
                "examples": [
                    "Nelson Mandela was the first black president of South Africa."
                ]
            }
        ],
        "subtext": "famous leader",
        "transcription": "ˈnɛlsən ˌmænˈdɛlə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_077",
        "word": "William Shakespeare",
        "emoji": "✍️",
        "definitions": [
            {
                "text": "A famous writer from England who wrote many plays and poems.",
                "examples": [
                    "William Shakespeare wrote Romeo and Juliet."
                ]
            }
        ],
        "subtext": "famous writer",
        "transcription": "ˈwɪljəm ˈʃeɪkˌspir",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    }
]
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
