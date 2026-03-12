(function() {
    const peopleData = {
    "en": [
        {
            "word": "Albert Einstein",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Leonardo da Vinci",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "William Shakespeare",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Elon Musk",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Marilyn Monroe",
            "level": "proficiency",
            "theme": "people_society"
        },
        {
            "word": "Taylor Swift",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Barack Obama",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Stephen Hawking",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Virginia Woolf",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Nelson Mandela",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Aristotle",
            "level": "proficiency",
            "theme": "people_society"
        }
    ],
    "fr": [
        {
            "word": "Napoléon Bonaparte",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Victor Hugo",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Edith Piaf",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Claude Monet",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Zinedine Zidane",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Simone de Beauvoir",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Jean-Paul Sartre",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Molière",
            "level": "proficiency",
            "theme": "people_society"
        }
    ],
    "it": [
        {
            "word": "Leonardo da Vinci",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Dante Alighieri",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Galileo Galilei",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Sophia Loren",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Federico Fellini",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Umberto Eco",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Monica Bellucci",
            "level": "starter",
            "theme": "people_society"
        }
    ],
    "ru": [
        {
            "word": "Александр Пушкин",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Лев Толстой",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Юрий Гагарин",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Пётр I",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Мария Шарапова",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Фёдор Достоевский",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Анна Ахматова",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Виктор Цой",
            "level": "elementary",
            "theme": "people_society"
        }
    ],
    "el": [
        {
            "word": "Σωκράτης",
            "level": "starter",
            "theme": "people_society"
        },
        {
            "word": "Μέγας Αλέξανδρος",
            "level": "elementary",
            "theme": "people_society"
        },
        {
            "word": "Πλάτωνας",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Μαρία Κάλλας",
            "level": "upper-intermediate",
            "theme": "people_society"
        },
        {
            "word": "Νίκος Καζαντζάκης",
            "level": "advanced",
            "theme": "people_society"
        },
        {
            "word": "Μελίνα Μερκούρη",
            "level": "intermediate",
            "theme": "people_society"
        },
        {
            "word": "Οδυσσέας Ελύτης",
            "level": "upper-intermediate",
            "theme": "people_society"
        }
    ]
};

    if (window.vocabularyData) {
        for (let lang in peopleData) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...peopleData[lang].map(p => ({...p, theme: 'famous_people'}))];
            }
        }
    }

    window.peopleData = peopleData;
})();