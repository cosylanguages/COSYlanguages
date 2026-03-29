(function() {
    const data = [
    {
        "word": "sein",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "müde sein / glücklich sein / bei der Arbeit sein / bereit sein",
        "form": "verb",
        "definitions": [
            {
                "text": "Existieren; eine Eigenschaft oder einen Zustand haben.",
                "examples": [
                    "Ich bin müde.",
                    "Sie ist Ärztin.",
                    "Wir sind spät dran."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": null,
        "v3": "gewesen",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "haben",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas besitzen; etwas erleben.",
                "examples": [
                    "Ich habe einen Job.",
                    "Er hat ein Auto.",
                    "Sie hat Kopfschmerzen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "hatte",
        "v3": "gehabt",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "fühlen",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen körperlichen oder emotionalen Zustand erleben.",
                "examples": [
                    "Sie fühlt sich nach einer langen Woche erschöpft."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "fühlte",
        "v3": "gefühlt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "geben",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "nehmen",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemandem etwas überreichen oder übertragen.",
                "examples": [
                    "Er gibt mir viel Arbeit.",
                    "Sie gibt Ratschläge."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gab",
        "v3": "gegeben",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "nehmen",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "geben",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas halten und bewegen; benutzen oder konsumieren.",
                "examples": [
                    "Ich nehme den Bus zur Arbeit.",
                    "Sie nimmt Medikamente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "nahm",
        "v3": "genommen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "bekommen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "Erhalten, bekommen oder werden.",
                "examples": [
                    "Ich bekomme ein gutes Gehalt.",
                    "Er wird schnell müde.",
                    "Sie bekommt eine Beförderung."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bekam",
        "v3": "bekommen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "stellen",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas in eine Position bringen.",
                "examples": [
                    "Stell deine Tasche hierhin.",
                    "Sie legt Geld auf die Bank."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stellte",
        "v3": "gestellt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "machen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas erschaffen oder produzieren; etwas verursachen.",
                "examples": [
                    "Ich mache morgens Kaffee.",
                    "Sie trifft eine Entscheidung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "machte",
        "v3": "gemacht",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "tun",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Handlung oder Tätigkeit ausführen.",
                "examples": [
                    "Ich tue jeden Tag meine Arbeit.",
                    "Sie macht die Einkäufe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "getan",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "benutzen",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas für einen Zweck einsetzen.",
                "examples": [
                    "Ich benutze mein Handy für alles.",
                    "Sie nutzt öffentliche Verkehrsmittel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "benutzte",
        "v3": "benutzt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "öffnen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "schließen",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas nicht geschlossen machen; oder beginnen.",
                "examples": [
                    "Er öffnet das Büro um acht.",
                    "Sie eröffnet ein Bankkonto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "öffnete",
        "v3": "geöffnet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "schließen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "öffnen",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas nicht offen machen; oder beenden.",
                "examples": [
                    "Das Büro schließt um sechs.",
                    "Sie schließt ihren Laptop."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schloss",
        "v3": "geschlossen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "beginnen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "beenden",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Tätigkeit oder einen Zeitraum anfangen.",
                "examples": [
                    "Ich beginne um acht Uhr dreißig mit der Arbeit.",
                    "Sie fängt nächsten Monat eine neue Stelle an."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "begann",
        "v3": "begonnen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "beenden",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "beginnen",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas abschließen.",
                "examples": [
                    "Er beendet die Arbeit um fünf.",
                    "Sie stellt den Bericht bis Mittag fertig."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "beendete",
        "v3": "beendet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "helfen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "Es jemandem erleichtern, etwas zu tun.",
                "examples": [
                    "Er hilft neuen Kollegen, die Systeme zu verstehen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "half",
        "v3": "geholfen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "versuchen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "Versuchen, etwas zu tun; etwas testen.",
                "examples": [
                    "Ich versuche immer, alle Nachrichten innerhalb einer Stunde zu beantworten."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "versuchte",
        "v3": "versucht",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "zeigen",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden etwas sehen lassen oder etwas vorführen.",
                "examples": [
                    "Kannst du mir zeigen, wie das System funktioniert?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "zeigte",
        "v3": "gezeigt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "finden",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas entdecken oder ausfindig machen.",
                "examples": [
                    "Ich finde die Arbeit interessant.",
                    "Sie hat einen neuen Job gefunden."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fand",
        "v3": "gefunden",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "behalten",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas weiterhin haben oder tun.",
                "examples": [
                    "Behalten Sie die Quittung.",
                    "Sie lässt ihr Handy den ganzen Tag an."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "behielt",
        "v3": "behalten",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "verlieren",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "gewinnen",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas nicht mehr haben; nicht gewinnen.",
                "examples": [
                    "Ich habe meine Schlüssel verloren.",
                    "Sie hat ihren Job verloren.",
                    "Er verliert nie."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "verlor",
        "v3": "verloren",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "schneiden",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "Mit etwas Scharfem teilen; reduzieren.",
                "examples": [
                    "Sie kürzt ihre Mittagspause ab.",
                    "Es senkt die Kosten."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schnitt",
        "v3": "geschnitten",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "drehen",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich in eine Richtung bewegen; den Zustand ändern.",
                "examples": [
                    "Biegen Sie am Büro links ab.",
                    "Sie schaltet das Licht aus."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "drehte",
        "v3": "gedreht",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bringen",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas an einen Ort tragen.",
                "examples": [
                    "Bringen Sie Ihren Ausweis zum Vorstellungsgespräch mit.",
                    "Er bringt das Mittagessen mit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brachte",
        "v3": "gebracht",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "sagen",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas in Worten ausdrücken.",
                "examples": [
                    "Sie sagt jeden Morgen Hallo.",
                    "Er sagt, es sei schwierig."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sagte",
        "v3": "gesagt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "erzählen",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemandem Informationen oder Anweisungen geben.",
                "examples": [
                    "Sie erzählt dem Team von Änderungen, bevor sie eintreten."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "erzählte",
        "v3": "erzählt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "fragen",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Frage stellen oder eine Bitte äußern.",
                "examples": [
                    "Sie bittet nach jeder Präsentation um Feedback."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fragte",
        "v3": "gefragt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "sprechen",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "Worte sagen; mündlich kommunizieren.",
                "examples": [
                    "Er spricht Französisch.",
                    "Sie spricht jeden Tag mit ihrem Manager."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sprach",
        "v3": "gesprochen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "reden",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "Durch Sprechen kommunizieren.",
                "examples": [
                    "Er redet mit seinem Manager über das Problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "redete",
        "v3": "geredet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "anrufen",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden telefonisch kontaktieren.",
                "examples": [
                    "Ich rufe meine Kunden jeden Morgen an, bevor ich E-Mails prüfe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rief an",
        "v3": "angerufen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "schreiben",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write an email / write a report / write a letter / write notes",
        "opposite": "lesen",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Worte auf Papier oder Bildschirm bringen.",
                "examples": [
                    "Ich schreibe den ganzen Tag E-Mails.",
                    "Sie schreibt jeden Freitag einen Bericht."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schrieb",
        "v3": "geschrieben",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "lesen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "schreiben",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Geschriebene Worte ansehen und verstehen.",
                "examples": [
                    "Sie liest jeden Morgen die Nachrichten.",
                    "Er liest Verträge."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "las",
        "v3": "gelesen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "hören",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Auf Geräusche oder Sprache achten.",
                "examples": [
                    "Ich höre bei der Arbeit Podcasts.",
                    "Sie hört aufmerksam zu."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hörte",
        "v3": "gehört",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "antworten",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "Auf eine Frage oder Mitteilung reagieren.",
                "examples": [
                    "Er antwortet schnell auf alle E-Mails.",
                    "Sie ging ans Telefon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "antwortete",
        "v3": "geantwortet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "wiederholen",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas noch einmal sagen oder tun.",
                "examples": [
                    "Bitte wiederholen Sie das.",
                    "Er wiederholte die Anweisung zweimal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wiederholte",
        "v3": "wiederholt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "gehen",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich von einem Ort zum anderen bewegen.",
                "examples": [
                    "Ich gehe mit dem Bus zur Arbeit.",
                    "Sie geht zum Arzt."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ging",
        "v3": "gegangen",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "kommen",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "gehen",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich auf einen Ort oder eine Person zubewegen.",
                "examples": [
                    "Er kommt um neun ins Büro.",
                    "Sie kommt spät nach Hause."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "kam",
        "v3": "gekommen",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "laufen",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich zu Fuß in normalem Tempo bewegen.",
                "examples": [
                    "Er läuft jeden Tag zur Arbeit.",
                    "Sie läuft in ihrer Mittagspause."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lief",
        "v3": "gelaufen",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "fahren",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Fahrzeug führen.",
                "examples": [
                    "Sie fährt zur Arbeit.",
                    "Er fährt einen Firmenwagen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fuhr",
        "v3": "gefahren",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "fliegen",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "Mit dem Flugzeug reisen.",
                "examples": [
                    "Sie fliegt für Besprechungen nach Paris.",
                    "Er hasst Fliegen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flog",
        "v3": "geflogen",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "ankommen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen Bestimmungsort erreichen.",
                "examples": [
                    "Er kommt um neun im Büro an. Der Zug kommt pünktlich an."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "kam an",
        "v3": "angekommen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "verlassen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich von einem Ort entfernen.",
                "examples": [
                    "Ich verlasse das Haus um acht Uhr fünfzehn. Sie verlässt die Arbeit um sechs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "verließ",
        "v3": "verlassen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "umziehen",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "An einen anderen Ort ziehen, um dort zu wohnen oder zu arbeiten.",
                "examples": [
                    "Sie sind in eine größere Wohnung umgezogen, als sie Kinder bekamen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "zog um",
        "v3": "umgezogen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "zurückkehren",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "An einen Ort zurückkommen oder -gehen.",
                "examples": [
                    "Er kehrt am Freitag von einer Reise zurück.",
                    "Sie rief zurück."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kehrte zurück",
        "v3": "zurückgekehrt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "reisen",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "Von einem Ort zum anderen reisen, besonders weit.",
                "examples": [
                    "Sie reist dreimal im Monat geschäftlich."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reiste",
        "v3": "gereist",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "essen",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "trinken",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Nahrung in den Mund nehmen und schlucken.",
                "examples": [
                    "Wir essen um sieben Uhr zu Abend.",
                    "Er isst sein Mittagessen am Schreibtisch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "aß",
        "v3": "gegessen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "trinken",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "essen",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Flüssigkeit in den Mund nehmen und schlucken.",
                "examples": [
                    "Sie trinkt jeden Morgen Kaffee.",
                    "Ich trinke Wasser."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "trank",
        "v3": "getrunken",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "schlafen",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "aufwachen",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Mit geschlossenen Augen in einem natürlichen Zustand der Bewusstlosigkeit ruhen.",
                "examples": [
                    "Er schläft sieben Stunden pro Nacht.",
                    "Ich schlafe schlecht."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schlief",
        "v3": "geschlafen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "kochen",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Essen durch Erhitzen zubereiten.",
                "examples": [
                    "Sie kocht jeden Abend das Abendessen. Ich koche nicht — ich bestelle Essen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kochte",
        "v3": "gekocht",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "reinigen",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "Schmutz von etwas entfernen.",
                "examples": [
                    "Ich reinige die Wohnung jeden Samstag. Er reinigt jeden Morgen seinen Schreibtisch."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reinigte",
        "v3": "gereinigt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "tragen",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "Kleidung oder Accessoires am Körper haben.",
                "examples": [
                    "Sie trägt einen Anzug zur Arbeit.",
                    "Er trägt eine Brille."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "trug",
        "v3": "getragen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "waschen",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas mit Wasser reinigen.",
                "examples": [
                    "Er wäscht jeden Sonntag sein Auto.",
                    "Wasch deine Hände."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wusch",
        "v3": "gewaschen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "kaufen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "verkaufen",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas im Austausch gegen Geld erhalten.",
                "examples": [
                    "Sie kauft Lebensmittel online.",
                    "Er möchte eine Wohnung kaufen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kaufte",
        "v3": "gekauft",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bezahlen",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "Geld im Austausch für etwas geben.",
                "examples": [
                    "Ich bezahle meine Rechnungen per Lastschrift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bezahlte",
        "v3": "bezahlt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "ausgeben",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "Geld verwenden, um für Dinge zu bezahlen.",
                "examples": [
                    "Er gibt zu viel Geld für Essen zum Mitnehmen aus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gab aus",
        "v3": "ausgegeben",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "sparen",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "ausgeben",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Geld behalten, anstatt es auszugeben.",
                "examples": [
                    "Sie spart jeden Monat hundert Euro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sparte",
        "v3": "gespart",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "arbeiten",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "Aufgaben als Teil eines Jobs erledigen.",
                "examples": [
                    "Sie arbeitet drei Tage die Woche von zu Hause aus."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arbeitete",
        "v3": "gearbeitete",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "leben",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "sterben",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Sein Zuhause an einem Ort haben; am Leben sein.",
                "examples": [
                    "Er lebt in einer Wohnung in der Nähe des Zentrums.",
                    "Wir leben zusammen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lebte",
        "v3": "gelebt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "denken",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Überzeugung oder Meinung haben; den Verstand benutzen.",
                "examples": [
                    "Ich denke, es ist eine gute Idee.",
                    "Sie denkt über ihren Job nach."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "dachte",
        "v3": "gedacht",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "wissen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "Informationen oder Bewusstsein über etwas haben.",
                "examples": [
                    "Ich weiß seinen Namen.",
                    "Sie weiß die Antwort.",
                    "Kennst du ihn?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "wusste",
        "v3": "gewusst",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "wollen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas begehren oder wünschen.",
                "examples": [
                    "Ich will einen Kaffee.",
                    "Sie will einen besseren Job.",
                    "Er will in Rente gehen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "wollte",
        "v3": "gewollt",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "brauchen",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas benötigen; das Gefühl haben, dass etwas notwendig ist.",
                "examples": [
                    "Ich brauche eine Pause.",
                    "Sie braucht Hilfe.",
                    "Wir brauchen mehr Zeit."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "brauchte",
        "v3": "gebraucht",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "mögen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas angenehm finden; genießen.",
                "examples": [
                    "Ich mag meinen Job.",
                    "Sie kocht gerne.",
                    "Er mag Kaffee."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "mochte",
        "v3": "gemocht",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "lieben",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Starke Zuneigung haben; sehr genießen.",
                "examples": [
                    "Sie liebt ihren Job.",
                    "Er liebt es, geschäftlich zu reisen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liebte",
        "v3": "geliebt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "hassen",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "Starke Abneigung empfinden.",
                "examples": [
                    "Er hasst das Pendeln mit dem Bus.",
                    "Sie hasst lange Besprechungen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hasste",
        "v3": "gehasst",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "hoffen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich wünschen, dass etwas passiert.",
                "examples": [
                    "Ich hoffe, dieses Jahr eine Beförderung zu bekommen.",
                    "Sie hofft auf bessere Bezahlung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoffte",
        "v3": "gehofft",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "erinnern",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Erinnerung an etwas haben; nicht vergessen.",
                "examples": [
                    "Bitte erinnere dich an die Frist.",
                    "Sie erinnert sich an jeden Kunden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "erinnerte",
        "v3": "erinnert",
        "group": "rn",
        "auxiliary": "haben"
    },
    {
        "word": "vergessen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich nicht erinnern.",
                "examples": [
                    "Vergiss die Besprechung nicht.",
                    "Er vergisst immer Passwörter."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "vergaß",
        "v3": "vergessen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "verstehen",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Bedeutung von etwas erfassen.",
                "examples": [
                    "Ich verstehe den Vertrag.",
                    "Sie versteht Französisch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "verstand",
        "v3": "verstanden",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "entscheiden",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Wahl treffen.",
                "examples": [
                    "Sie hat sich entschieden, die Karriere zu wechseln.",
                    "Er entscheidet schnell."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "entschied",
        "v3": "entschieden",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "genießen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "An etwas Vergnügen finden.",
                "examples": [
                    "Sie genießt es wirklich, drei Tage die Woche von zu Hause aus zu arbeiten."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "genoss",
        "v3": "genossen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "sehen",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Mit den Augen bemerken oder wahrnehmen.",
                "examples": [
                    "Ich sehe morgen meinen Arzt.",
                    "Sie sieht das Problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "sah",
        "v3": "gesehen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "hören",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "Geräusche durch die Ohren wahrnehmen.",
                "examples": [
                    "Ich höre jeden Morgen den Wecker.",
                    "Kannst du mich hören?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "hörte",
        "v3": "gehört",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "aufwachen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "opposite": "schlafen",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Aufhören zu schlafen; nach dem Schlaf bei Bewusstsein werden.",
                "examples": [
                    "Ich wache jeden Morgen um sechs Uhr dreißig auf."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wachte auf",
        "v3": "aufgewacht",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "schauen",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "Etwas eine Zeit lang ansehen.",
                "examples": [
                    "Sie schaut jeden Morgen vor der Arbeit die Marktnachrichten."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "schaute",
        "v3": "geschaut",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "sehen",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "Die Augen auf etwas richten.",
                "examples": [
                    "Sieh dir dieses Foto an.",
                    "Er sucht nach seinen Schlüsseln."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "sah",
        "v3": "gesehen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "spielen",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "An einem Spiel oder Sport teilnehmen; Musik erzeugen.",
                "examples": [
                    "Er spielt am Wochenende Fußball, um Stress abzubauen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "spielte",
        "v3": "gespielt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "rennen",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich sehr schnell auf den Beinen bewegen.",
                "examples": [
                    "Ich renne im Park.",
                    "Er rennt, um den Bus zu erwischen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rannte",
        "v3": "gerannt",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "sitzen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "opposite": "stehen",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "In einer sitzenden Position sein oder eine solche einnehmen.",
                "examples": [
                    "Er sitzt acht Stunden am Tag an seinem Schreibtisch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "saß",
        "v3": "gesessen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "stehen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "opposite": "sitzen",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "In einer aufrechten Position sein oder sich erheben.",
                "examples": [
                    "Sie steht, wenn sie präsentiert, um ihre Energie hochzuhalten."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stand",
        "v3": "gestanden",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "treffen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Mit jemandem zusammenkommen, besonders aus einem geplanten Grund.",
                "examples": [
                    "Wir treffen uns jeden Montag, um die Woche zu besprechen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "traf",
        "v3": "getroffen",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "lernen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "form": "verb",
        "definitions": [
            {
                "text": "Wissen oder Fähigkeiten erwerben.",
                "examples": [
                    "Sie lernt Spanisch für ihren neuen Job im Ausland."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lernte",
        "v3": "gelernt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "ändern",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "Anders werden; etwas anders machen.",
                "examples": [
                    "Sie hat in drei Jahren zweimal den Job gewechselt. Dinge ändern sich schnell."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "änderte",
        "v3": "geändert",
        "group": "rn",
        "auxiliary": "haben"
    },
    {
        "word": "stoppen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Tätigkeit oder Bewegung beenden.",
                "examples": [
                    "Sie hat aufgehört, den Bus zu nehmen, und fährt jetzt mit dem Rad zur Arbeit."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stoppte",
        "v3": "gestoppt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "hinzufügen",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "form": "verb",
        "definitions": [
            {
                "text": "Dinge zusammenbringen, um eine größere Gruppe zu bilden.",
                "examples": [
                    "Geben Sie etwas Zucker in den Tee.",
                    "Was ist fünf plus fünf?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fügte hinzu",
        "v3": "hinzugefügt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "gewinnen",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "opposite": "verlieren",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Der Beste in einem Spiel oder Wettbewerb sein.",
                "examples": [
                    "Wir wollen das Spiel gewinnen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gewann",
        "v3": "gewonnen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "warten",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "An einem Ort bleiben, bis etwas passiert.",
                "examples": [
                    "Er hat zwanzig Minuten gewartet, bis die Besprechung begann."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wartete",
        "v3": "gewartet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "sterben",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "opposite": "leben",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Aufhören zu leben.",
                "examples": [
                    "Pflanzen sterben ohne Wasser."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "starb",
        "v3": "gestorben",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "senden",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas an jemanden übermitteln, besonders elektronisch.",
                "examples": [
                    "Sie verschickt vor dem Mittagessen zwanzig E-Mails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sandte",
        "v3": "gesendet",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bleiben",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Weiterhin an einem Ort sein.",
                "examples": [
                    "Sonntags bleibe ich zu Hause.",
                    "Wir übernachten in einem Hotel."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "blieb",
        "v3": "geblieben",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "fallen",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich nach unten zum Boden bewegen.",
                "examples": [
                    "Im Herbst fallen die Blätter.",
                    "Pass auf, fall nicht."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fiel",
        "v3": "gefallen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "bestehen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "form": "verb",
        "definitions": [
            {
                "text": "An etwas vorbeigehen oder eine Prüfung bestehen.",
                "examples": [
                    "Ich komme auf dem Heimweg am Park vorbei.",
                    "Ich hoffe, ich bestehe den Test."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bestand",
        "v3": "bestanden",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "verkaufen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market / best seller",
        "opposite": "kaufen",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemandem etwas gegen Geld geben.",
                "examples": [
                    "Sie verkaufen Obst auf dem Markt."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "verkaufte",
        "v3": "verkauft",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "ziehen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "opposite": "drücken",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas auf sich zu bewegen.",
                "examples": [
                    "Zieh an der Tür, um sie zu öffnen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "zog",
        "v3": "gezogen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "drücken",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "opposite": "ziehen",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas von sich weg bewegen.",
                "examples": [
                    "Drück den Knopf.",
                    "Ich schiebe den Einkaufswagen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "gedrückte",
        "v3": "gedrückt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "tragen",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas halten und mitnehmen.",
                "examples": [
                    "Ich trage meinen Laptop und meine Notizen zu jeder Besprechung."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "trug",
        "v3": "getragen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "brechen",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas in zwei oder mehr Teile trennen.",
                "examples": [
                    "Zerbrich das Glas nicht.",
                    "Er hat sich das Bein gebrochen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brach",
        "v3": "gebrochen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "empfangen",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas bekommen, das jemand einem gegeben oder geschickt hat.",
                "examples": [
                    "Ich erhalte viel Post.",
                    "Sie hat ein Geschenk bekommen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "empfing",
        "v3": "empfangen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "zustimmen",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "form": "verb",
        "definitions": [
            {
                "text": "Die gleiche Meinung wie jemand anderes haben.",
                "examples": [
                    "Ich stimme dir zu.",
                    "Wir sind uns über den Plan einig."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "stimmte zu",
        "v3": "zugestimmt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "zeichnen",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "Ein Bild mit einem Stift oder Bleistift machen.",
                "examples": [
                    "Ich zeichne gerne Vögel.",
                    "Kannst du eine Karte zeichnen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "zeichnete",
        "v3": "gezeichnet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "teilen",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen Teil von etwas an andere geben.",
                "examples": [
                    "Lass uns die Pizza teilen.",
                    "Ich teile mir ein Zimmer mit meinem Bruder."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "teilte",
        "v3": "geteilt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "lächeln",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "weinen",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen glücklichen Ausdruck mit dem Mund machen.",
                "examples": [
                    "Sie hat ein schönes Lächeln.",
                    "Lächle für die Kamera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lächelte",
        "v3": "gelächelt",
        "group": "ln",
        "auxiliary": "haben"
    },
    {
        "word": "weinen",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / start crying / cry about something",
        "opposite": "lächeln",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Tränen vergießen, weil man traurig ist oder Schmerzen hat.",
                "examples": [
                    "Das Baby weint.",
                    "Weine nicht."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "weinte",
        "v3": "geweint",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "tanzen",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / go dancing / dance together / slow dance",
        "form": "verb",
        "definitions": [
            {
                "text": "Seinen Körper zur Musik bewegen.",
                "examples": [
                    "Ich liebe es zu tanzen.",
                    "Sie tanzen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tanzte",
        "v3": "getanzt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "singen",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well / lead singer",
        "form": "verb",
        "definitions": [
            {
                "text": "Musikalische Klänge mit der Stimme erzeugen.",
                "examples": [
                    "Ich singe gerne unter der Dusche.",
                    "Sie singt sehr gut."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "gesungen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "springen",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich mit den Beinen vom Boden abstoßen.",
                "examples": [
                    "Kannst du hoch springen?",
                    "Die Katze sprang auf den Tisch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sprang",
        "v3": "gesprungen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "schwimmen",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "go swimming / swim across / swim laps / swim well",
        "form": "verb",
        "definitions": [
            {
                "text": "Sich mit Armen und Beinen durch Wasser bewegen.",
                "examples": [
                    "Ich schwimme jeden Morgen.",
                    "Kannst du schwimmen?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "schwamm",
        "v3": "geschwommen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "studieren",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "Lesen und üben, um Wissen zu erwerben.",
                "examples": [
                    "Er lernt für eine berufliche Qualifikation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studierte",
        "v3": "studiert",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "lehren",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "In einem Fach unterrichten.",
                "examples": [
                    "Sie lehrt Kommunikationsfähigkeiten für Führungskräfte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lehrte",
        "v3": "gelehrt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "pendeln",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "commute to work / daily commute / long commute / commute by train",
        "form": "verb",
        "definitions": [
            {
                "text": "Regelmäßig eine gewisse Distanz zwischen Wohnung und Arbeitsplatz reisen.",
                "examples": [
                    "Ich pendle mit dem Zug in die Stadt."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pendelte",
        "v3": "gependelt",
        "group": "ln",
        "auxiliary": "haben"
    },
    {
        "word": "mieten",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "Geld bezahlen, um Eigentum zu nutzen, das jemand anderem gehört.",
                "examples": [
                    "Sie mieten eine Zwei-Zimmer-Wohnung in der Nähe des Stadtzentrums."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mietete",
        "v3": "gemietet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "trainieren",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Körperliche Aktivität für Gesundheit und Fitness betreiben.",
                "examples": [
                    "Er trainiert viermal pro Woche im Fitnessstudio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "trainierte",
        "v3": "trainiert",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "kosten",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Einen Preis haben von.",
                "examples": [
                    "Die Wohnung kostet zwölfhundert Euro im Monat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "kostete",
        "v3": "gekostet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "einladen",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden bitten, zu einer Veranstaltung oder an einen Ort zu kommen.",
                "examples": [
                    "Sie haben alle ihre Kollegen zur Party eingeladen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lud ein",
        "v3": "eingeladen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "aufstehen",
        "definitions": [
            {
                "text": "Nach dem Aufwachen aus dem Bett steigen.",
                "examples": [
                    "Er steht um sieben Uhr auf und macht sofort Kaffee."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "stand auf",
        "v3": "aufgestanden",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "frühstücken",
        "definitions": [
            {
                "text": "Die Morgenmahlzeit einnehmen.",
                "examples": [
                    "Sie frühstückt immer, bevor sie das Haus verlässt."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast / skip breakfast",
        "classification": "regular",
        "aspect": "action",
        "v2": "frühstückte",
        "v3": "gefrühstückt",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "zurückkommen",
        "definitions": [
            {
                "text": "An einen Ort zurückkehren.",
                "examples": [
                    "Sie kommt um zwei Uhr aus der Mittagspause zurück. Er kommt müde nach Hause zurück."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "kam zurück",
        "v3": "zurückgekommen",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "ins Bett gehen",
        "definitions": [
            {
                "text": "Sich ins Bett legen, um zu schlafen.",
                "examples": [
                    "Sie gehen jeden Abend um elf ins Bett."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": "ging ins Bett",
        "v3": "ins Bett gegangen",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "prüfen",
        "definitions": [
            {
                "text": "Etwas untersuchen oder verifizieren.",
                "examples": [
                    "Ich prüfe jeden Morgen als Erstes meine E-Mails."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "prüfte",
        "v3": "geprüft",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "antworten",
        "definitions": [
            {
                "text": "Auf eine Nachricht oder Frage antworten.",
                "examples": [
                    "Er antwortet E-Mails immer am selben Tag."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "antwortete",
        "v3": "geantwortet",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "präsentieren",
        "definitions": [
            {
                "text": "Einer Gruppe etwas zeigen oder erklären.",
                "examples": [
                    "Sie präsentiert jeden Freitagnachmittag die Ergebnisse."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "präsentierte",
        "v3": "präsentiert",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "besuchen",
        "definitions": [
            {
                "text": "Zu einer Veranstaltung oder Besprechung gehen.",
                "examples": [
                    "Ich besuche jeden Montag eine Management-Besprechung."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "besuchte",
        "v3": "besucht",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "leiten",
        "definitions": [
            {
                "text": "Verantwortlich sein für Menschen oder eine Situation.",
                "examples": [
                    "Sie leitet ein Team von acht Personen."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "leitete",
        "v3": "geleitet",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "berechnen",
        "definitions": [
            {
                "text": "Einen Geldbetrag für eine Dienstleistung verlangen.",
                "examples": [
                    "Der Mechaniker berechnete dreihundert Euro."
                ]
            }
        ],
        "subtext": "charge a fee / charge for a service / charge extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "berechnete",
        "v3": "berechnet",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "sich leisten",
        "definitions": [
            {
                "text": "Genug Geld für etwas haben.",
                "examples": [
                    "Sie können es sich nicht leisten, eine Wohnung im Stadtzentrum zu kaufen."
                ]
            }
        ],
        "subtext": "afford a house / afford to travel / afford something",
        "classification": "regular",
        "aspect": "stative",
        "v2": "leistete",
        "v3": "geleistet",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "schulden",
        "definitions": [
            {
                "text": "Verpflichtet sein, jemandem Geld zu zahlen.",
                "examples": [
                    "Er schuldet der Bank fünfzigtausend Euro."
                ]
            }
        ],
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "classification": "regular",
        "aspect": "stative",
        "v2": "schuldete",
        "v3": "geschuldet",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "verdienen",
        "definitions": [
            {
                "text": "Geld für geleistete Arbeit erhalten.",
                "examples": [
                    "Sie verdient ein gutes Gehalt als Projektleiterin."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "verdiente",
        "v3": "verdient",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "besuchen",
        "definitions": [
            {
                "text": "Zu einer Person oder an einen Ort gehen, um sie/ihn zu sehen.",
                "examples": [
                    "Sie besucht jedes zweite Wochenende ihre Eltern."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "besuchte",
        "v3": "besucht",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "feiern",
        "definitions": [
            {
                "text": "Etwas Angenehmes für einen besonderen Anlass tun.",
                "examples": [
                    "Sie feiern jedes Arbeitsjubiläum zusammen."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "feierte",
        "v3": "gefeiert",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "rn",
        "auxiliary": "haben"
    },
    {
        "word": "empfehlen",
        "definitions": [
            {
                "text": "Etwas als gut oder geeignet vorschlagen.",
                "examples": [
                    "Können Sie ein gutes Restaurant in der Nähe des Büros empfehlen?"
                ]
            }
        ],
        "subtext": "recommend a place / recommend someone / recommend a film",
        "classification": "irregular",
        "aspect": "action",
        "v2": "empfahl",
        "v3": "empfohlen",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "weh tun",
        "definitions": [
            {
                "text": "Schmerzen verursachen; oder Schmerzen empfinden.",
                "examples": [
                    "Mein Rücken tut nach dem ganzen Tag Sitzen weh."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "tat weh",
        "v3": "weh getan",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "ruhen",
        "definitions": [
            {
                "text": "Aufhören zu arbeiten und sich entspannen, um Energie zurückzugewinnen.",
                "examples": [
                    "Er ruht sich jeden Tag eine Stunde nach dem Mittagessen aus."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "ruhte",
        "v3": "geruht",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "erholen",
        "definitions": [
            {
                "text": "Nach einer Krankheit oder Verletzung zur Gesundheit zurückkehren.",
                "examples": [
                    "Sie erholt sich von einer Rückenverletzung."
                ]
            }
        ],
        "subtext": "recover from illness / recover quickly / recover fully",
        "classification": "regular",
        "aspect": "action",
        "v2": "erholte",
        "v3": "erholt",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "buchen",
        "definitions": [
            {
                "text": "Einen Platz, ein Ticket oder eine Dienstleistung im Voraus reservieren.",
                "examples": [
                    "Ich buche Hotels immer online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "buchte",
        "v3": "gebucht",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "packen",
        "definitions": [
            {
                "text": "Gegenstände für eine Reise in eine Tasche oder einen Koffer legen.",
                "examples": [
                    "Er packt seine Tasche am Abend vor einer Reise."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packte",
        "v3": "gepackt",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "stornieren",
        "definitions": [
            {
                "text": "Entscheiden, dass etwas Geplantes nicht stattfinden wird.",
                "examples": [
                    "Sie musste ihren Flug wegen Krankheit stornieren."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "stornierte",
        "v3": "storniert",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "verpassen",
        "definitions": [
            {
                "text": "Eine Verkehrsverbindung nicht erreichen; oder Traurigkeit über Abwesenheit empfinden.",
                "examples": [
                    "Er hat seinen Zug verpasst und musste eine Stunde warten."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "verpasste",
        "v3": "verpasst",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bestellen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas formell anfordern, besonders Essen oder Waren.",
                "examples": [
                    "Ich bestelle mein Mittagessen immer am gleichen Ort in der Nähe des Büros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bestellte",
        "v3": "bestellt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "erklären",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "explain a process / explain clearly / explain to someone",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas durch Angabe von Details verdeutlichen.",
                "examples": [
                    "Er erklärt neuen Teammitgliedern immer den Prozess."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "erklärte",
        "v3": "erklärt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "danken",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemandem Dankbarkeit ausdrücken.",
                "examples": [
                    "Er dankte dem Team für seine harte Arbeit an dem Projekt."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dankte",
        "v3": "gedankt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "vorstellen",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "Jemanden einer anderen Person vorstellen.",
                "examples": [
                    "Sie stellte sich zu Beginn der Besprechung vor."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stellte vor",
        "v3": "vorgestellt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "entspannen",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "Aufhören zu arbeiten und ruhen; weniger angespannt werden.",
                "examples": [
                    "Ich entspanne mich am Wochenende und prüfe nie E-Mails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "entspannte",
        "v3": "entspannt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "reparieren",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas reparieren, das kaputt ist.",
                "examples": [
                    "Der Vermieter repariert Dinge in der Wohnung nur langsam."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reparierte",
        "v3": "repariert",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "passieren",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "what happened / happen to someone / it happens / happen again",
        "form": "verb",
        "definitions": [
            {
                "text": "Stattfinden; eintreten.",
                "examples": [
                    "Was ist bei der Besprechung passiert? Etwas ist schiefgelaufen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passierte",
        "v3": "passiert",
        "group": "en",
        "auxiliary": "sein"
    },
    {
        "word": "scheinen",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "seem fine / seem worried / seem happy / seem like",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas zu sein scheinen; einen Eindruck erwecken.",
                "examples": [
                    "Sie scheint bei Kundenbesprechungen sehr sicher zu sein."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "schien",
        "v3": "geschienen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "bedeuten",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "Eine bestimmte Bedeutung haben; beabsichtigen.",
                "examples": [
                    "Was bedeutet diese Klausel im Vertrag?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "bedeutete",
        "v3": "bedeutet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "folgen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "form": "verb",
        "definitions": [
            {
                "text": "Danach kommen; Regeln oder Anweisungen befolgen.",
                "examples": [
                    "Bitte folgen Sie den Anweisungen sorgfältig. Er verfolgt die Nachrichten."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "folgte",
        "v3": "gefolgt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "fortsetzen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continue working / continue to do / continue with / continue a task",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas ohne Unterbrechung weiter tun.",
                "examples": [
                    "Er setzte die Arbeit nach sechs Uhr fort, obwohl er sich krank fühlte."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fortgesetzt",
        "v3": "fortgesetzt",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "wachsen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "An Größe oder Menge zunehmen; sich entwickeln.",
                "examples": [
                    "Das Unternehmen wuchs letztes Jahr um zwanzig Prozent."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wuchs",
        "v3": "gewachsen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "beinhalten",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "include something / include in / not included / price includes",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas zum Teil eines Ganzen machen.",
                "examples": [
                    "Der Preis beinhaltet Frühstück und Abendessen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "beinhaltete",
        "v3": "beinhaltet",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "werden",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "Anfangen, etwas zu sein.",
                "examples": [
                    "Sie wurde nach nur zwei Jahren im Amt Managerin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wurde",
        "v3": "geworden",
        "group": "irregular",
        "auxiliary": "sein"
    },
    {
        "word": "gehören",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "belong to someone / belong in / feel like you belong",
        "form": "verb",
        "definitions": [
            {
                "text": "Eigentum von jemandem sein; ein Mitglied sein.",
                "examples": [
                    "Dieses Konto gehört zur Finanzabteilung."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "gehörte",
        "v3": "gehört",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "wählen",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "Aus Optionen auswählen.",
                "examples": [
                    "Er wählte eine Teilzeitarbeit, um mehr Zeit mit der Familie zu verbringen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "wählte",
        "v3": "gewählt",
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bauen",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "build a career / build a team / build experience / build trust",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas konstruieren; etwas im Laufe der Zeit entwickeln.",
                "examples": [
                    "Sie hat sich über zehn Jahre einen guten Ruf aufgebaut."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "baute",
        "v3": "gebaut",
        "group": "en",
        "auxiliary": "haben"
    }
];
    const lang = "de";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
