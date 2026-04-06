(function() {
    const data = [
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "artista e scienziato",
        "definitions": [
            {
                "text": "Famoso artista e scienziato italiano del Rinascimento.",
                "examples": []
            }
        ]
    },
    {
        "word": "Monica Bellucci",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "attrice",
        "definitions": [
            {
                "text": "Famosa attrice italiana.",
                "examples": []
            }
        ]
    },
    {
        "word": "Dante Alighieri",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "poeta",
        "definitions": [
            {
                "text": "Famoso poeta italiano, autore della Divina Commedia.",
                "examples": []
            }
        ]
    },
    {
        "word": "Galileo Galilei",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "scienziato",
        "definitions": [
            {
                "text": "Famoso scienziato e astronomo italiano.",
                "examples": []
            }
        ]
    },
    {
        "word": "Marco Polo",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "esploratore",
        "definitions": [
            {
                "text": "Famoso esploratore veneziano.",
                "examples": []
            }
        ]
    },
    {
        "word": "Christopher Columbus",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "esploratore",
        "definitions": [
            {
                "text": "Esploratore italiano che scoprì l'America.",
                "examples": []
            }
        ]
    },
    {
        "word": "Re Carlo III",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "re",
        "definitions": [
            {
                "text": "Il Re del Regno Unito.",
                "examples": []
            }
        ]
    },
    {
        "word": "Papa Francesco",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "papa",
        "definitions": [
            {
                "text": "Il capo della Chiesa cattolica.",
                "examples": []
            }
        ]
    },
    {
        "word": "Sofia Loren",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "attrice",
        "definitions": [
            {
                "text": "Famosa attrice cinematografica italiana.",
                "examples": []
            }
        ]
    },
    {
        "word": "Luciano Pavarotti",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "tenore",
        "definitions": [
            {
                "text": "Famoso cantante d'opera italiano.",
                "examples": []
            }
        ]
    },
    {
        "word": "Giacomo Casanova",
        "level": "starter",
        "theme": "people_A1",
        "subtext": "scrittore",
        "definitions": [
            {
                "text": "Famoso avventuriero e scrittore veneziano.",
                "examples": []
            }
        ]
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();