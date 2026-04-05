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
        "transcription": "ˈælbərt ˈaɪnstaɪn",
        "synonyms": [],
        "opposite": null
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
        "transcription": "ˈteɪlər swɪft",
        "synonyms": [],
        "opposite": null
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
        "transcription": "krisˈtjɐnu ʁuˈnaɫdu",
        "synonyms": [],
        "opposite": null
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
        "transcription": "ljoˈnel ˈmesi",
        "synonyms": [],
        "opposite": null
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
        "transcription": "biˈɒnseɪ",
        "synonyms": [],
        "opposite": null
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
        "transcription": "ˈiːlɒn ˈmʌsk",
        "synonyms": [],
        "opposite": null
    },
{
        "word": "Queen Elizabeth II",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "👑",
        "form": "noun",
        "definitions": [
            {
                "text": "The former Queen of the United Kingdom.",
                "examples": [
                    "Queen Elizabeth II was the longest-reigning monarch."
                ]
            }
        ],
        "subtext": "famous person",
        "countability": "uncountable",
        "transcription": "kwin ɪˈlɪzəbəθ ðə ˈsɛkənd",
        "synonyms": [],
        "opposite": null
    }
    ];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();