(function() {
    const peopleData = {
    "en": [
        {
            "word": "Albert Einstein",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Leonardo da Vinci",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "William Shakespeare",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Elon Musk",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marilyn Monroe",
            "level": "proficiency",
            "theme": "identity_self_C1"
        },
        {
            "word": "Taylor Swift",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Barack Obama",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Stephen Hawking",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Virginia Woolf",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Nelson Mandela",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Aristotle",
            "level": "proficiency",
            "theme": "identity_self_C1"
        }
    ],
    "fr": [
        {
            "word": "Napoléon Bonaparte",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Victor Hugo",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Edith Piaf",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Claude Monet",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Zinedine Zidane",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Simone de Beauvoir",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Jean-Paul Sartre",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Molière",
            "level": "proficiency",
            "theme": "identity_self_C1"
        }
    ],
    "it": [
        {
            "word": "Leonardo da Vinci",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Dante Alighieri",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Galileo Galilei",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Sophia Loren",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Federico Fellini",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Umberto Eco",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Monica Bellucci",
            "level": "starter",
            "theme": "identity_self_C1"
        }
    ],
    "ru": [
        {
            "word": "Александр Пушкин",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Лев Толстой",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Юрий Гагарин",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Пётр I",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Мария Шарапова",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Фёдор Достоевский",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Анна Ахматова",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Виктор Цой",
            "level": "elementary",
            "theme": "identity_self_C1"
        }
    ],
    "el": [
        {
            "word": "Σωκράτης",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μέγας Αλέξανδρος",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Πλάτωνας",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μαρία Κάλλας",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Νίκος Καζαντζάκης",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μελίνα Μερκούρη",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Οδυσσέας Ελύτης",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
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