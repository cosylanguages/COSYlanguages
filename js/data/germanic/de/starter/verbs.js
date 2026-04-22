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
        "subtext": "eine Arbeit haben / ein Problem haben / Zeit haben",
        "synonyms": ["zu Mittag essen"],
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas besitzen; etwas erleben.",
                "examples": [
                    "Ich habe eine Arbeit.",
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
        "subtext": "sich müde fühlen / sich besser fühlen / sich krank fühlen / sich gestresst fühlen",
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
        "subtext": "Ratschläge geben / Geld geben / ein Geschenk geben / Informationen geben",
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
        "subtext": "den Bus nehmen / Medikamente nehmen / Zeit in Anspruch nehmen",
        "synonyms": ["eine Pause machen"],
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
        "subtext": "eine Stelle bekommen",
        "synonyms": ["müde werden", "gesund werden", "nach Hause kommen"],
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
        "subtext": "stellen",
        "synonyms": ["wegräumen", "das Telefon weglegen", "Geld beiseite legen"],
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
        "subtext": "Kaffee machen / einen Fehler machen",
        "synonyms": ["eine Entscheidung treffen", "Geld verdienen"],
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
        "subtext": "nichts tun",
        "synonyms": ["Arbeit verrichten", "Einkäufe erledigen", "Sport treiben"],
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
        "subtext": "ein Telefon benutzen / einen Computer benutzen",
        "synonyms": ["öffentliche Verkehrsmittel nutzen", "Zeit nutzen"],
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
        "subtext": "eine Tür öffnen / um neun öffnen",
        "synonyms": ["ein Konto eröffnen", "ein Geschäft eröffnen"],
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
        "subtext": "eine Tür schließen / um sechs schließen / ein Konto schließen",
        "synonyms": ["die Besprechung beenden"],
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
        "subtext": "mit der Arbeit beginnen / eine Besprechung beginnen / eine neue Arbeit anfangen",
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
        "subtext": "Arbeit beenden",
        "synonyms": ["ein Projekt abschließen", "früh fertig sein", "spät fertig sein"],
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
        "subtext": "jemandem helfen / bei einer Aufgabe helfen",
        "synonyms": ["aushelfen", "um Hilfe bitten"],
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
        "subtext": "versuchen zu tun",
        "synonyms": ["sich anstrengen", "etwas Neues ausprobieren", "einen Versuch wagen"],
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
        "subtext": "jemandem zeigen wie / Interesse zeigen",
        "synonyms": ["ein Dokument vorzeigen"],
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
        "subtext": "eine Stelle finden / es schwierig finden / Zeit finden",
        "synonyms": ["herausfinden"],
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas entdecken oder ausfindig machen.",
                "examples": [
                    "Ich finde die Arbeit interessant.",
                    "Sie hat eine neue Stelle gefunden."
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
        "subtext": "",
        "synonyms": ["weitermachen", "leise sein", "Buch führen", "in Kontakt bleiben"],
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
        "subtext": "eine Arbeit verlieren / Geld verlieren / Gewicht verlieren / Zeit verlieren",
        "opposite": "gewinnen",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas nicht mehr haben; nicht gewinnen.",
                "examples": [
                    "Ich habe meine Schlüssel verloren.",
                    "Sie hat ihre Arbeit verloren.",
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
        "subtext": "in der Mitte durchschneiden",
        "synonyms": ["Kosten senken", "Ausgaben kürzen", "abkürzen"],
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
        "subtext": "",
        "synonyms": ["einschalten", "ausschalten", "links abbiegen", "rechts abbiegen"],
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
        "subtext": "jemanden bringen / Essen bringen / ein Dokument bringen / zur Sprache bringen",
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
        "subtext": "Hallo sagen / Ja sagen / Nein sagen / etwas sagen",
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
        "subtext": "jemandem erzählen / eine Geschichte erzählen / jemandem von ... erzählen",
        "synonyms": ["die Wahrheit sagen"],
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
        "subtext": "nach etwas fragen / jemanden fragen",
        "synonyms": ["eine Frage stellen", "um Hilfe bitten"],
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
        "subtext": "mit jemandem sprechen / Englisch sprechen / deutlich sprechen / bei einer Besprechung sprechen",
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
        "subtext": "mit jemandem reden / über etwas reden / offen reden / lange Zeit reden",
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
        "subtext": "jemanden anrufen",
        "synonyms": ["zurückrufen", "eine Besprechung einberufen", "sich krankmelden"],
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
        "subtext": "eine E-Mail schreiben / einen Bericht schreiben / einen Brief schreiben / Notizen schreiben",
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
        "subtext": "ein Buch lesen / die Nachrichten lesen / einen Vertrag lesen / aufmerksam lesen",
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
        "subtext": "Musik hören / einen Podcast hören",
        "synonyms": ["aufmerksam zuhören"],
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
        "subtext": "auf eine E-Mail antworten",
        "synonyms": ["eine Frage beantworten", "ans Telefon gehen"],
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
        "subtext": "das wiederholen / sich wiederholen / eine Bestellung wiederholen",
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
        "subtext": "zur Arbeit gehen / nach Hause gehen / einkaufen gehen",
        "synonyms": ["ausgehen"],
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
        "subtext": "nach Hause kommen / zur Arbeit kommen / hierher kommen",
        "synonyms": ["zurückkommen"],
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
        "subtext": "zur Arbeit laufen / nach Hause laufen / langsam laufen / jeden Tag laufen",
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
        "subtext": "zur Arbeit fahren / ein Auto fahren / nach Hause fahren / vorsichtig fahren",
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
        "subtext": "in eine Stadt fliegen / Business Class fliegen / Economy fliegen",
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
        "subtext": "bei der Arbeit ankommen / spät ankommen / pünktlich ankommen / zu Hause ankommen",
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
        "subtext": "das Haus verlassen / die Arbeit verlassen",
        "synonyms": ["früh gehen", "spät gehen"],
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
        "subtext": "an einen neuen Ort ziehen",
        "synonyms": ["einziehen", "ausziehen", "das Haus wechseln"],
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
        "subtext": "nach Hause zurückkehren / zur Arbeit zurückkehren / zurückkehren von",
        "synonyms": ["einen Anruf erwidern"],
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
        "subtext": "geschäftlich reisen / ins Ausland reisen / mit dem Zug reisen",
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
        "subtext": "zu Mittag essen / zu Abend essen / auswärts essen",
        "synonyms": ["frühstücken"],
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
        "subtext": "Kaffee trinken / Tee trinken / Wasser trinken / Bier trinken",
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
        "subtext": "gut schlafen / schlecht schlafen / acht Stunden schlafen / lange schlafen",
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
        "subtext": "Abendessen kochen / eine Mahlzeit kochen / zu Hause kochen / für jemanden kochen",
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
        "subtext": "die Wohnung reinigen / die Küche reinigen / regelmäßig reinigen",
        "synonyms": ["aufräumen"],
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
        "subtext": "einen Anzug tragen / eine Brille tragen / Freizeitkleidung tragen",
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
        "subtext": "Kleidung waschen / sich die Hände waschen",
        "synonyms": ["das Geschirr spülen"],
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
        "subtext": "Essen kaufen / ein Ticket kaufen / online kaufen / ein Haus kaufen",
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
        "subtext": "eine Rechnung bezahlen / Miete bezahlen / mit Karte bezahlen / bar bezahlen",
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
        "subtext": "Geld ausgeben / für Essen ausgeben / für Miete ausgeben / Zeit verbringen",
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
        "subtext": "Geld sparen / für einen Urlaub sparen / für ein Haus sparen",
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
        "subtext": "von zu Hause aus arbeiten / Vollzeit arbeiten / hart arbeiten / bis spät arbeiten",
        "form": "verb",
        "definitions": [
            {
                "text": "Aufgaben als Teil einer Arbeit erledigen.",
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
        "subtext": "in einer Wohnung leben / alleine leben / mit jemandem leben / im Ausland leben",
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
        "subtext": "denken an / glauben, dass es ... ist",
        "synonyms": ["nachdenken über", "sorgfältig nachdenken"],
        "form": "verb",
        "definitions": [
            {
                "text": "Eine Überzeugung oder Meinung haben; den Verstand benutzen.",
                "examples": [
                    "Ich denke, es ist eine gute Idee.",
                    "Sie denkt über ihre Arbeit nach."
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
        "subtext": "die Antwort wissen / wissen wie",
        "synonyms": ["jemanden kennen", "einen Ort kennen"],
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
        "subtext": "eine Arbeit wollen / gehen wollen / mehr Geld wollen / Hilfe wollen",
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas begehren oder wünschen.",
                "examples": [
                    "Ich will einen Kaffee.",
                    "Sie will eine bessere Stelle.",
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
        "subtext": "Hilfe brauchen / Zeit brauchen / Geld brauchen",
        "synonyms": ["sich ausruhen müssen"],
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
        "subtext": "die Arbeit mögen / jemanden mögen / die Idee mögen",
        "synonyms": ["gerne reisen"],
        "form": "verb",
        "definitions": [
            {
                "text": "Etwas angenehm finden; genießen.",
                "examples": [
                    "Ich mag meine Arbeit.",
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
        "subtext": "jemanden lieben / es lieben zu tun / einen Ort lieben / die Idee lieben",
        "form": "verb",
        "definitions": [
            {
                "text": "Starke Zuneigung haben; sehr genießen.",
                "examples": [
                    "Sie liebt ihre Arbeit.",
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
        "subtext": "es hassen zu tun / jemanden hassen / Besprechungen hassen / das Pendeln hassen",
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
        "subtext": "hoffen auf / hoffen zu tun / hoffen, dass",
        "synonyms": ["ich hoffe es"],
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
        "subtext": "sich erinnern zu tun / sich an einen Namen erinnern / sich deutlich erinnern",
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
        "subtext": "einen Namen vergessen / vergessen zu tun / vergessen / komplett vergessen",
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
        "subtext": "ein Problem verstehen / jemanden verstehen / deutlich verstehen",
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
        "subtext": "entscheiden zu tun / sich entscheiden für / schwer zu entscheiden",
        "synonyms": ["eine Entscheidung treffen"],
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
        "subtext": "es genießen zu tun / eine Mahlzeit genießen / die Arbeit genießen / das Leben genießen",
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
        "subtext": "einen Arzt sehen / Freunde sehen / das Problem sehen / deutlich sehen",
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
        "subtext": "Neuigkeiten hören / von jemandem hören / ein Geräusch hören / deutlich hören",
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
        "subtext": "früh aufwachen / spät aufwachen / müde aufwachen",
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
        "subtext": "einen Film schauen / Nachrichten schauen",
        "synonyms": ["fernsehen", "genau hinschauen"],
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
        "subtext": "",
        "synonyms": ["anschauen", "suchen nach", "aussehen wie", "glücklich aussehen"],
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
        "subtext": "ein Spiel spielen / Musik spielen / eine Rolle spielen",
        "synonyms": ["Sport treiben"],
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
        "subtext": "ein Rennen laufen",
        "synonyms": ["ein Geschäft führen", "ausgehen (Vorrat)", "spät dran sein"],
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
        "subtext": "an einem Schreibtisch sitzen / in einer Besprechung sitzen",
        "synonyms": ["sich hinsetzen", "ruhig dasitzen"],
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
        "subtext": "in einer Schlange stehen / daneben stehen",
        "synonyms": ["aufstehen", "herausstechen"],
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
        "subtext": "einen Kunden treffen / einen Kollegen treffen / sich zum Mittagessen treffen / sich online treffen",
        "group": "irregular",
        "auxiliary": "haben"
    },
    {
        "word": "lernen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "eine Sprache lernen / eine Fertigkeit lernen / lernen von / lernen wie",
        "form": "verb",
        "definitions": [
            {
                "text": "Wissen oder Fähigkeiten erwerben.",
                "examples": [
                    "Sie lernt Spanisch für ihre neue Stelle im Ausland."
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
        "subtext": "seine Meinung ändern / den Plan ändern / etwas ändern",
        "synonyms": ["die Stelle wechseln"],
        "form": "verb",
        "definitions": [
            {
                "text": "Anders werden; etwas anders machen.",
                "examples": [
                    "Sie hat in drei Jahren zweimal die Stelle gewechselt. Dinge ändern sich schnell."
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
        "subtext": "jemanden stoppen",
        "synonyms": ["aufhören zu tun", "aufhören zu arbeiten", "eine Gewohnheit beenden"],
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
        "subtext": "etwas Zucker hinzufügen / hinzufügen zu / einen Kommentar hinzufügen",
        "synonyms": ["zusammenzählen"],
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
        "subtext": "ein Spiel gewinnen / einen Preis gewinnen / eine Auszeichnung gewinnen / einen Auftrag gewinnen",
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
        "subtext": "auf jemanden warten / in einer Schlange warten / einen Moment warten",
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
        "subtext": "sterben an / sterben für / sterben vor",
        "synonyms": ["aussterben"],
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
        "subtext": "",
        "synonyms": ["send an email", "send a message", "send a report", "send a file"],
        "group": "en",
        "auxiliary": "haben"
    },
    {
        "word": "bleiben",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "zu Hause bleiben / in einem Hotel übernachten / bei jemandem bleiben",
        "synonyms": ["lange aufbleiben"],
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
        "subtext": "",
        "synonyms": ["hinfallen", "herunterfallen", "sich verlieben", "einschlafen"],
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
        "subtext": "eine Prüfung bestehen / Zeit verbringen",
        "synonyms": ["den Ball abgeben", "den Zucker reichen"],
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
        "subtext": "Produkte verkaufen / online verkaufen / auf dem Markt verkaufen",
        "synonyms": ["Bestseller"],
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
        "subtext": "an der Tür ziehen / an etwas ziehen",
        "synonyms": ["anhalten", "wegfahren"],
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
        "subtext": "den Knopf drücken",
        "synonyms": ["einen Wagen schieben", "wegdrücken", "sich durchsetzen"],
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
        "subtext": "eine Tasche tragen / Notizen mit sich führen",
        "synonyms": ["ausführen", "weitermachen"],
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
        "subtext": "gegen ein Gesetz verstoßen",
        "synonyms": ["das Glas zerbrechen", "eine Pause machen", "kaputtgehen"],
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
        "subtext": "eine E-Mail empfangen / Nachrichten empfangen",
        "synonyms": ["ein Geschenk erhalten", "eine Zahlung erhalten"],
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
        "subtext": "jemandem zustimmen / zustimmen zu tun",
        "synonyms": ["sich einigen auf", "ich stimme zu"],
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
        "subtext": "ein Bild zeichnen",
        "synonyms": ["eine Schlussfolgerung ziehen", "Aufmerksamkeit erregen", "eine Linie ziehen"],
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
        "subtext": "ein Zimmer teilen / Informationen teilen / eine Idee teilen / teilen mit",
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
        "subtext": "ein breites Lächeln / übers ganze Gesicht lächeln",
        "synonyms": ["jemanden anlächeln"],
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
        "subtext": "zu weinen beginnen / über etwas weinen",
        "synonyms": ["um Hilfe rufen", "aufschreien"],
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
        "subtext": "zu Musik tanzen / tanzen gehen / zusammen tanzen",
        "synonyms": ["Stehblues"],
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
        "subtext": "ein Lied singen / gut singen",
        "synonyms": ["mitsingen", "Leadsänger"],
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
        "subtext": "hoch springen / über etwas springen",
        "synonyms": ["aufspringen", "hineinspringen"],
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
        "subtext": "schwimmen gehen / Bahnen schwimmen / gut schwimmen",
        "synonyms": ["hinüberschwimmen"],
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
        "subtext": "Englisch studieren / für eine Prüfung lernen",
        "synonyms": ["fleißig lernen", "Selbststudium"],
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
        "subtext": "jemanden lehren / lehren wie",
        "synonyms": ["ein Fach unterrichten", "eine Klasse unterrichten"],
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
        "subtext": "zur Arbeit pendeln / tägliches Pendeln / mit dem Zug pendeln",
        "synonyms": ["langer Arbeitsweg"],
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
        "subtext": "eine Wohnung mieten / eine Immobilie mieten",
        "synonyms": ["ein Zimmer vermieten"],
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
        "subtext": "regelmäßig trainieren / im Fitnessstudio trainieren / im Freien trainieren",
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
        "subtext": "viel kosten / Geld kosten / zu viel kosten / weniger kosten",
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
        "subtext": "jemanden einladen / zum Essen einladen / zu einer Party einladen",
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
        "subtext": "früh aufstehen / spät aufstehen / schnell aufstehen",
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
        "subtext": "zu Hause frühstücken / ein schnelles Frühstück haben / das Frühstück ausfallen lassen",
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
        "subtext": "nach Hause zurückkommen / spät zurückkommen / von einer Reise zurückkehren",
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
        "subtext": "früh ins Bett gehen / spät ins Bett gehen / müde ins Bett gehen",
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
        "subtext": "E-Mails prüfen / Nachrichten prüfen / ein Dokument prüfen / die Uhrzeit prüfen",
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
        "subtext": "auf eine E-Mail antworten / schnell antworten / auf eine Nachricht antworten",
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
        "subtext": "einen Bericht präsentieren / Ideen präsentieren / einem Kunden präsentieren",
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
        "subtext": "an einer Besprechung teilnehmen / einen Kurs besuchen / eine Veranstaltung besuchen",
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
        "subtext": "ein Team leiten / ein Projekt leiten",
        "synonyms": ["Zeit managen", "Stress bewältigen"],
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
        "subtext": "eine Gebühr berechnen / für eine Dienstleistung berechnen / extra berechnen",
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
        "subtext": "sich ein Haus leisten / sich leisten zu reisen",
        "synonyms": ["sich etwas leisten"],
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
        "subtext": "Geld schulden / jemandem schulden / viel schulden / nichts schulden",
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
        "subtext": "ein Gehalt verdienen / Geld verdienen / mehr verdienen / genug verdienen",
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
        "subtext": "die Familie besuchen / einen Freund besuchen / eine Stadt besuchen / regelmäßig besuchen",
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
        "subtext": "einen Geburtstag feiern / Erfolg feiern / zusammen feiern",
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
        "subtext": "einen Ort empfehlen / jemanden empfehlen / einen Film empfehlen",
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
        "subtext": "",
        "synonyms": ["Rückenschmerzen haben", "jemandem wehtun", "sich wehtun", "es tut weh"],
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
        "subtext": "nach der Arbeit ausruhen",
        "synonyms": ["zu Hause ausruhen", "Ruhe brauchen", "sich etwas ausruhen"],
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
        "subtext": "sich von einer Krankheit erholen / sich schnell erholen / sich vollständig erholen",
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
        "subtext": "ein Hotel buchen / einen Flug buchen / im Voraus buchen",
        "synonyms": ["einen Tisch reservieren"],
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
        "subtext": "eine Tasche packen / einen Koffer packen",
        "synonyms": ["leicht gepackt reisen"],
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
        "subtext": "einen Flug stornieren / eine Buchung stornieren",
        "synonyms": ["eine Besprechung absagen"],
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
        "subtext": "einen Zug verpassen / einen Flug verpassen / die Arbeit verpassen",
        "synonyms": ["jemanden vermissen"],
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
        "subtext": "Essen bestellen / ein Getränk bestellen / online bestellen / Material bestellen",
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
        "subtext": "einen Prozess erklären / klar erklären / jemandem erklären",
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
        "subtext": "jemandem danken / danken für",
        "synonyms": ["vielen Dank"],
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
        "subtext": "sich vorstellen / jemanden vorstellen / ein Thema vorstellen",
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
        "subtext": "zu Hause entspannen / nach der Arbeit entspannen / im Urlaub entspannen",
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
        "subtext": "",
        "synonyms": ["repair something", "get repaired", "repair costs"],
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
        "subtext": "jemandem passieren / wieder passieren",
        "synonyms": ["was ist passiert", "es passiert"],
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
        "subtext": "seem like",
        "synonyms": ["seem fine", "seem worried", "seem happy"],
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
        "subtext": "etwas bedeuten",
        "synonyms": ["was bedeutet das", "beabsichtigen", "ich wollte nicht"],
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
        "subtext": "Anweisungen folgen / jemandem folgen",
        "synonyms": ["die Nachrichten verfolgen", "nachfassen"],
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
        "subtext": "eine Aufgabe fortsetzen",
        "synonyms": ["weiterarbeiten", "fortfahren zu tun", "weitermachen mit"],
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
        "subtext": "schnell wachsen / wachsen um",
        "synonyms": ["ein Geschäft ausbauen", "hineinwachsen"],
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
        "subtext": "etwas beinhalten",
        "synonyms": ["einbeziehen in", "nicht enthalten", "Preis beinhaltet"],
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
        "subtext": "Manager werden / beliebt werden / klar werden / wichtig werden",
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
        "subtext": "jemandem gehören",
        "synonyms": ["hingehören", "sich zugehörig fühlen"],
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
        "subtext": "wählen zwischen / wählen zu tun / sorgfältig wählen / eine Karriere wählen",
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
        "subtext": "",
        "synonyms": ["eine Karriere aufbauen", "ein Team aufbauen", "Erfahrung aufbauen", "Vertrauen aufbauen"],
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
]
    const lang = "de";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
