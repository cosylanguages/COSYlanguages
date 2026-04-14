(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ˈælbərt ˈaɪnstaɪn"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ˈteɪlər swɪft"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "krisˈtjɐnu ʁuˈnaɫdu"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ljoˈnel ˈmesi"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "🇬🇧 biˈɒnseɪ | 🇺🇸 biˈɑːnseɪ"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "🇬🇧 ˈiːlɒn ˈmʌsk | 🇺🇸 ˈiːlɑːn ˈmʌsk"
    },
    {
        "word": "Queen Elizabeth II",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "kwiːn ɪˈlɪzəbəθ ðə ˈsɛkənd"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "mərˈi ˈkjʊri"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ˌliəˈnɑrdoʊ ˈdiˈeɪ ˈvɪnʧi"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ˈnɛlsən ˌmænˈdɛlə"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "transcription": "ˈwɪljəm ˈʃeɪkˌspir"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
