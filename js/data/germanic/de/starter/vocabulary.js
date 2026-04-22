(function() {
    const data = [
    {
        "word": "Arzt",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Person, die Kranken hilft.",
                "examples": ["Der Arzt arbeitet im Krankenhaus."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Fuß",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦶",
        "form": "noun",
        "definitions": [
            {
                "text": "Der Teil des Körpers unten am Bein.",
                "examples": ["Mein Fuß tut weh."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Lehrer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Person, die beim Lernen hilft.",
                "examples": ["Der Lehrer ist im Klassenzimmer."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍕",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein flaches Brot mit Käse und Tomaten.",
                "examples": ["Ich mag Pizza mit Käse."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍝",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Essen aus Mehl und Eiern.",
                "examples": ["Wir essen heute Pasta."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Apfel",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine runde Frucht, rot oder grün.",
                "examples": ["Der Apfel ist rot."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Brot",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍞",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Essen aus Mehl und Wasser.",
                "examples": ["Ich kaufe jeden Morgen Brot."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Ei",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥚",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein ovales Objekt von einer Henne.",
                "examples": ["Ein Ei zum Frühstück."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Milch",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine weiße Flüssigkeit von Kühen.",
                "examples": ["Ich trinke kalte Milch."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Banane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍌",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine lange gelbe Frucht.",
                "examples": ["Die Banane ist gelb."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Kaffee",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "☕",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein heißes braunes Getränk.",
                "examples": ["Ich trinke Kaffee ohne Zucker."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Tee",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍵",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein heißes Getränk aus Blättern.",
                "examples": ["Ein heißer Tee, bitte."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Wasser",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🚰",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine klare Flüssigkeit zum Trinken.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Schule",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Ort zum Lernen.",
                "examples": ["Die Schule öffnet um acht."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "T-Shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Hemd mit kurzen Ärmeln.",
                "examples": ["Ich trage ein blaues T-Shirt."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Hose",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Kleidungsstück für die Beine.",
                "examples": ["Diese Hose ist neu."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Schuh",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👞",
        "form": "noun",
        "definitions": [
            {
                "text": "Etwas für die Füße.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Hut",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "definitions": [
            {
                "text": "Etwas für den Kopf.",
                "examples": ["Sie trägt einen Sonnenhut."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Stuhl",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Möbelstück zum Sitzen.",
                "examples": ["Setz dich auf diesen Stuhl."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Tisch",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Möbelstück mit vier Beinen.",
                "examples": ["Das Buch liegt auf dem Tisch."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Bett",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛏️",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Möbelstück zum Schlafen.",
                "examples": ["Das Bett ist sehr groß."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Schlüssel",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔑",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Objekt zum Öffnen von Türen.",
                "examples": ["Ich habe meinen Schlüssel verloren."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Telefon",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Gerät zum Sprechen.",
                "examples": ["Mein Telefon funktioniert nicht."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Buch",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📚",
        "form": "noun",
        "definitions": [
            {
                "text": "Viele Seiten zum Lesen.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Tasche",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "👜",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Behälter zum Tragen.",
                "examples": ["Ich trage meine Sachen in der Tasche."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Stift",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖊️",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Gegenstand zum Schreiben.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Katze",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐈",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein kleines Tier mit Fell.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Hund",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐕",
        "form": "noun",
        "definitions": [
            {
                "text": "Der beste Freund des Menschen.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Hand",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "✋",
        "form": "noun",
        "definitions": [
            {
                "text": "Der Teil des Arms mit Fingern.",
                "examples": ["Wasch deine Hände."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Bein",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Laufen.",
                "examples": ["Sie hat lange Beine."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Auge",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Sehen.",
                "examples": ["Er hat grüne Augen."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Nase",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Teil des Gesichts zum Riechen.",
                "examples": ["Wir atmen durch die Nase."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Mund",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👄",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Teil des Gesichts zum Essen.",
                "examples": ["Öffne den Mund."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Ohr",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Hören.",
                "examples": ["Wir hören mit den Ohren."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Mutter",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Frau, die ein Elternteil ist.",
                "examples": ["Die Frau liest die Zeitung."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Vater",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Mann, die ein Elternteil ist.",
                "examples": ["Dieser Mann ist mein Onkel."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Arbeit",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Arbeit; ein Ort zum Geldverdienen.",
                "examples": ["Ich suche eine neue Arbeit."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Zuhause",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "Der Ort, an dem man lebt.",
                "examples": ["Ich komme spät nach Hause."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Auto",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Fahrzeug mit vier Rädern.",
                "examples": ["Ich fahre ein rotes Auto."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Bus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚌",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein großes Fahrzeug für viele Leute.",
                "examples": ["Der Bus kommt bald."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Zug",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Fahrzeug auf Schienen.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Geld",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "Münzen oder Scheine.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Geschäft",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Ort zum Kaufen.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Familie",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Gruppe von Verwandten.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Freund",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👫",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Person, die man mag.",
                "examples": ["Er ist mein bester Freund."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Tag",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Zeitraum von 24 Stunden.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Woche",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein Zeitraum von sieben Tagen.",
                "examples": ["Heute ist ein guter Tag."]
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Essen",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Dinge, die man isst.",
                "examples": ["Das Mittagessen ist fertig."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Frühstück",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Die erste Mahlzeit des Tages.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Mittagessen",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍱",
        "form": "noun",
        "definitions": [
            {
                "text": "Die Mahlzeit am Mittag.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Abendessen",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "Die Mahlzeit am Abend.",
                "examples": ["Wir essen um acht zu Abend."]
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Morgen",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
        "definitions": [
            {
                "text": "Die Zeit vor dem Mittag.",
                "examples": ["Es ist kalt heute Morgen."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Abend",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌆",
        "form": "noun",
        "definitions": [
            {
                "text": "Die Zeit nach dem Nachmittag.",
                "examples": ["Wir gehen heute Abend aus."]
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Nacht",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "noun",
        "definitions": [
            {
                "text": "Die Zeit der Dunkelheit.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Heute",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "An diesem Tag.",
                "examples": []
            }
        ],
        "article": "heute",
        "gender": "neuter"
    },
    {
        "word": "Morgen",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "noun",
        "definitions": [
            {
                "text": "Am Tag nach heute.",
                "examples": []
            }
        ],
        "article": "morgen",
        "gender": "neuter"
    },
    {
        "word": "Ehemann",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein verheirateter Mann.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    },
    {
        "word": "Ehefrau",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine verheiratete Frau.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Kind",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "definitions": [
            {
                "text": "Ein junger Mensch.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter"
    },
    {
        "word": "Sonne",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Der Stern, der Licht gibt.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine"
    },
    {
        "word": "Regen",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "noun",
        "definitions": [
            {
                "text": "Wasser, das aus Wolken fällt.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine"
    }
]
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();