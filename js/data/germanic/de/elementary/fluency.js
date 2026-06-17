(function() {
    const data = [
    {
        "id": "de_elementary_travel_001",
        "word": "Ein Urlaub, an den du dich erinnerst",
        "lang": "de",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ein Urlaub, an den du dich erinnerst",
                "examples": [
                    "Wohin bist du gefahren?",
                    "Mit wem bist du gefahren?",
                    "Was hast du dort gemacht?",
                    "Wie war das Wetter?",
                    "Was war der beste Moment?"
                ]
            }
        ],
        "h": [
            "Wohin bist du gefahren?",
            "Mit wem bist du gefahren?",
            "Was hast du dort gemacht?",
            "Wie war das Wetter?",
            "Was war der beste Moment?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_food_drink_001",
        "word": "Dein Lieblingsrestaurant oder -café",
        "lang": "de",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dein Lieblingsrestaurant oder -café",
                "examples": [
                    "Wo ist es?",
                    "Welches Essen servieren sie?",
                    "Warum magst du es?",
                    "Mit wem gehst du dorthin?",
                    "Wann warst du das letzte Mal dort?"
                ]
            }
        ],
        "h": [
            "Wo ist es?",
            "Welches Essen servieren sie?",
            "Warum magst du es?",
            "Mit wem gehst du dorthin?",
            "Wann warst du das letzte Mal dort?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_travel_002",
        "word": "Wie du zur Arbeit oder Schule kommst",
        "lang": "de",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Wie du zur Arbeit oder Schule kommst",
                "examples": [
                    "Wie reist du — Bus, Auto, Fahrrad?",
                    "Wie lange dauert es?",
                    "Genießt du die Fahrt?",
                    "Ist es teuer?",
                    "Was machst du unterwegs?"
                ]
            }
        ],
        "h": [
            "Wie reist du — Bus, Auto, Fahrrad?",
            "Wie lange dauert es?",
            "Genießt du die Fahrt?",
            "Ist es teuer?",
            "Was machst du unterwegs?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_social_001",
        "word": "Was du tust, um dich zu entspannen",
        "lang": "de",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Was du tust, um dich zu entspannen",
                "examples": [
                    "Was hilft dir beim Entspannen?",
                    "Bist du lieber allein oder mit Leuten zusammen?",
                    "Wie oft entspannst du dich richtig?",
                    "Hast du einen Lieblingsort zum Entspannen?",
                    "Ist es einfach zu entspannen oder findest du es schwierig?"
                ]
            }
        ],
        "h": [
            "Was hilft dir beim Entspannen?",
            "Bist du lieber allein oder mit Leuten zusammen?",
            "Wie oft entspannst du dich richtig?",
            "Hast du einen Lieblingsort zum Entspannen?",
            "Ist es einfach zu entspannen oder findest du es schwierig?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_social_002",
        "word": "Ein Film, den du vor Kurzem gesehen hast",
        "lang": "de",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ein Film, den du vor Kurzem gesehen hast",
                "examples": [
                    "Wie hieß der Film?",
                    "Wovon handelte er?",
                    "Hat er dir gefallen?",
                    "Wer hat mitgespielt?",
                    "Würdest du ihn empfehlen?"
                ]
            }
        ],
        "h": [
            "Wie hieß der Film?",
            "Wovon handelte er?",
            "Hat er dir gefallen?",
            "Wer hat mitgespielt?",
            "Würdest du ihn empfehlen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_social_003",
        "word": "Dein ideales Wochenende",
        "lang": "de",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dein ideales Wochenende",
                "examples": [
                    "Was würdest du am Freitagabend machen?",
                    "Würdest du ausgehen oder zu Hause bleiben?",
                    "Würdest du irgendwohin reisen?",
                    "Mit wem würdest du Zeit verbringen?",
                    "Was würdest du essen?"
                ]
            }
        ],
        "h": [
            "Was würdest du am Freitagabend machen?",
            "Würdest du ausgehen oder zu Hause bleiben?",
            "Würdest du irgendwohin reisen?",
            "Mit wem würdest du Zeit verbringen?",
            "Was würdest du essen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_people_001",
        "word": "Eine Person, die du bewunderst",
        "lang": "de",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Eine Person, die du bewunderst",
                "examples": [
                    "Wer ist diese Person?",
                    "Was macht sie?",
                    "Warum bewunderst du sie?",
                    "Hast du sie schon mal getroffen?",
                    "Was kannst du von ihr lernen?"
                ]
            }
        ],
        "h": [
            "Wer ist diese Person?",
            "Was macht sie?",
            "Warum bewunderst du sie?",
            "Hast du sie schon mal getroffen?",
            "Was kannst du von ihr lernen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_travel_003",
        "word": "Dein Traum-Urlaubsziel",
        "lang": "de",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dein Traum-Urlaubsziel",
                "examples": [
                    "Wohin würdest du reisen?",
                    "Warum dieser Ort?",
                    "Mit wem würdest du reisen?",
                    "Was würdest du dort machen?",
                    "Wie lange würdest du bleiben?"
                ]
            }
        ],
        "h": [
            "Wohin würdest du reisen?",
            "Warum dieser Ort?",
            "Mit wem würdest du reisen?",
            "Was würdest du dort machen?",
            "Wie lange würdest du bleiben?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_technology_001",
        "word": "Deine Beziehung zu deinem Handy",
        "lang": "de",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Deine Beziehung zu deinem Handy",
                "examples": [
                    "Wie viele Stunden am Tag benutzt du dein Handy?",
                    "Wofür benutzt du es am meisten?",
                    "Könntest du eine Woche ohne es auskommen?",
                    "Hilft es dir oder lenkt es dich ab?",
                    "Checkst du es als Erstes am Morgen?"
                ]
            }
        ],
        "h": [
            "Wie viele Stunden am Tag benutzt du dein Handy?",
            "Wofür benutzt du es am meisten?",
            "Könntest du eine Woche ohne es auskommen?",
            "Hilft es dir oder lenkt es dich ab?",
            "Checkst du es als Erstes am Morgen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_emotions_001",
        "word": "Etwas Lustiges, das dir passiert ist",
        "lang": "de",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Etwas Lustiges, das dir passiert ist",
                "examples": [
                    "Wann ist das passiert?",
                    "Wo warst du?",
                    "Mit wem warst du zusammen?",
                    "Was genau ist passiert?",
                    "Lachst du heute noch darüber?"
                ]
            }
        ],
        "h": [
            "Wann ist das passiert?",
            "Wo warst du?",
            "Mit wem warst du zusammen?",
            "Was genau ist passiert?",
            "Lachst du heute noch darüber?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_social_004",
        "word": "Deine Hobbys",
        "lang": "de",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Deine Hobbys",
                "examples": [
                    "Was machst du in deiner Freizeit?",
                    "Wann hast du mit diesem Hobby angefangen?",
                    "Machst du es allein oder mit anderen?",
                    "Ist es teuer?",
                    "Was liebst du daran?"
                ]
            }
        ],
        "h": [
            "Was machst du in deiner Freizeit?",
            "Wann hast du mit diesem Hobby angefangen?",
            "Machst du es allein oder mit anderen?",
            "Ist es teuer?",
            "Was liebst du daran?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_nature_001",
        "word": "Das Wetter, wo du wohnst",
        "lang": "de",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Das Wetter, wo du wohnst",
                "examples": [
                    "Wie ist das Wetter normalerweise?",
                    "Was ist deine Lieblingswetterart?",
                    "Beeinflusst das Wetter deine Stimmung?",
                    "Was ist das schlimmste Wetter, an das du dich erinnerst?",
                    "Was machst du an Regentagen?"
                ]
            }
        ],
        "h": [
            "Wie ist das Wetter normalerweise?",
            "Was ist deine Lieblingswetterart?",
            "Beeinflusst das Wetter deine Stimmung?",
            "Was ist das schlimmste Wetter, an das du dich erinnerst?",
            "Was machst du an Regentagen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_art_culture_001",
        "word": "Ein Geburtstag, an den du dich erinnerst",
        "lang": "de",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ein Geburtstag, an den du dich erinnerst",
                "examples": [
                    "Wessen Geburtstag war es?",
                    "Wo war die Feier?",
                    "Was habt ihr gemacht?",
                    "Gab es eine Überraschung?",
                    "Was hat ihn besonders gemacht?"
                ]
            }
        ],
        "h": [
            "Wessen Geburtstag war es?",
            "Wo war die Feier?",
            "Was habt ihr gemacht?",
            "Gab es eine Überraschung?",
            "Was hat ihn besonders gemacht?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_places_001",
        "word": "Dinge, die du an deinem Wohnort liebst",
        "lang": "de",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dinge, die du an deinem Wohnort liebst",
                "examples": [
                    "Was ist deine Lieblingssache an deiner Stadt?",
                    "Ist es ein guter Ort für Familien?",
                    "Was kann man dort machen?",
                    "Was würdest du ändern?",
                    "Würdest du es einem Freund empfehlen?"
                ]
            }
        ],
        "h": [
            "Was ist deine Lieblingssache an deiner Stadt?",
            "Ist es ein guter Ort für Familien?",
            "Was kann man dort machen?",
            "Was würdest du ändern?",
            "Würdest du es einem Freund empfehlen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_work_001",
        "word": "Ein typischer Sonntag",
        "lang": "de",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ein typischer Sonntag",
                "examples": [
                    "Wann wachst du am Sonntag auf?",
                    "Hast du eine Routine?",
                    "Kochst du eine große Mahlzeit?",
                    "Ruhst du dich aus oder bleibst du beschäftigt?",
                    "Ist Sonntag dein Lieblingstag?"
                ]
            }
        ],
        "h": [
            "Wann wachst du am Sonntag auf?",
            "Hast du eine Routine?",
            "Kochst du eine große Mahlzeit?",
            "Ruhst du dich aus oder bleibst du beschäftigt?",
            "Ist Sonntag dein Lieblingstag?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_art_culture_002",
        "word": "Essen aus deinem Land",
        "lang": "de",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Essen aus deinem Land",
                "examples": [
                    "Was ist ein traditionelles Gericht?",
                    "Kochst du es zu Hause?",
                    "Wann essen die Leute es?",
                    "Ist es schwierig zuzubereiten?",
                    "Würdest du es einem Ausländer empfehlen?"
                ]
            }
        ],
        "h": [
            "Was ist ein traditionelles Gericht?",
            "Kochst du es zu Hause?",
            "Wann essen die Leute es?",
            "Ist es schwierig zuzubereiten?",
            "Würdest du es einem Ausländer empfehlen?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_shopping_001",
        "word": "Etwas, das du vor Kurzem gekauft hast",
        "lang": "de",
        "level": "elementary",
        "theme": "shopping",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Etwas, das du vor Kurzem gekauft hast",
                "examples": [
                    "Was hast du gekauft?",
                    "Wo hast du es gekauft?",
                    "War es teuer?",
                    "Hast du es gebraucht oder nur gewollt?",
                    "Bist du zufrieden mit dem Kauf?"
                ]
            }
        ],
        "h": [
            "Was hast du gekauft?",
            "Wo hast du es gekauft?",
            "War es teuer?",
            "Hast du es gebraucht oder nur gewollt?",
            "Bist du zufrieden mit dem Kauf?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_technology_002",
        "word": "Deine Lieblings-App",
        "lang": "de",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Deine Lieblings-App",
                "examples": [
                    "Welche App benutzt du am meisten?",
                    "Wofür benutzt du sie?",
                    "Wann hast du angefangen, sie zu benutzen?",
                    "Würdest du sie empfehlen?",
                    "Könntest du ohne sie leben?"
                ]
            }
        ],
        "h": [
            "Welche App benutzt du am meisten?",
            "Wofür benutzt du sie?",
            "Wann hast du angefangen, sie zu benutzen?",
            "Würdest du sie empfehlen?",
            "Könntest du ohne sie leben?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_emotions_002",
        "word": "Eine Kindheitserinnerung",
        "lang": "de",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Eine Kindheitserinnerung",
                "examples": [
                    "Wie alt warst du?",
                    "Wo warst du?",
                    "Mit wem warst du zusammen?",
                    "Was ist passiert?",
                    "Warum erinnerst du dich daran?"
                ]
            }
        ],
        "h": [
            "Wie alt warst du?",
            "Wo warst du?",
            "Mit wem warst du zusammen?",
            "Was ist passiert?",
            "Warum erinnerst du dich daran?"
        ],
        "emoji": "💬"
    },
    {
        "id": "de_elementary_health_medicine_001",
        "word": "Was du gestern gegessen hast",
        "lang": "de",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Was du gestern gegessen hast",
                "examples": [
                    "Was hattest du zum Frühstück?",
                    "Was hast du zu Mittag gegessen?",
                    "Hast du gekocht oder bist du essen gegangen?",
                    "War es ein typischer Essenstag?",
                    "Was war das Beste, das du gegessen hast?"
                ]
            }
        ],
        "h": [
            "Was hattest du zum Frühstück?",
            "Was hast du zu Mittag gegessen?",
            "Hast du gekocht oder bist du essen gegangen?",
            "War es ein typischer Essenstag?",
            "Was war das Beste, das du gegessen hast?"
        ],
        "emoji": "💬"
    }
];
    const lang = "de";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();