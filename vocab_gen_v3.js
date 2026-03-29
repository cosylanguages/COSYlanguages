const fs = require('fs');

const enRef = [
    { word: "doctor", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️", def: "A person who helps people when they are sick." },
    { word: "foot", theme: "body_parts_A1", emoji: "🦶", def: "The part of the body at the bottom of the leg." },
    { word: "teacher", theme: "job_titles_professions_A1", emoji: "🧑‍🏫", def: "A person who helps you learn new things." },
    { word: "pizza", theme: "basic_foods_A1", emoji: "🍕", def: "A flat bread with cheese and tomato." },
    { word: "pasta", theme: "basic_foods_A1", emoji: "🍝", def: "A food made from flour and eggs." },
    { word: "apple", theme: "basic_foods_A1", emoji: "🍎", def: "A round fruit that can be red or green." },
    { word: "bread", theme: "basic_foods_A1", emoji: "🍞", def: "A common food made from flour and water." },
    { word: "egg", theme: "basic_foods_A1", emoji: "🥚", def: "An oval object laid by a hen." },
    { word: "milk", theme: "basic_foods_A1", emoji: "🥛", def: "A white liquid produced by cows." },
    { word: "banana", theme: "basic_foods_A1", emoji: "🍌", def: "A long yellow fruit." },
    { word: "coffee", theme: "drinks_A1", emoji: "☕", def: "A hot brown drink made from coffee beans." },
    { word: "tea", theme: "drinks_A1", emoji: "🍵", def: "A hot drink made with water and tea leaves." },
    { word: "water", theme: "drinks_A1", emoji: "🚰", def: "A clear liquid that we drink." },
    { word: "school", theme: "local_places_services_A1", emoji: "🏫", def: "A place where children go to learn." },
    { word: "t-shirt", theme: "items_of_clothing_A1", emoji: "👕", def: "A casual shirt with short sleeves." },
    { word: "pants", theme: "items_of_clothing_A1", emoji: "👖", def: "A garment covering each leg from waist to ankle." },
    { word: "shoe", theme: "items_of_clothing_A1", emoji: "👞", def: "Something you wear on your feet." },
    { word: "hat", theme: "items_of_clothing_A1", emoji: "👒", def: "Something you wear on your head." },
    { word: "chair", theme: "furniture_objects_A1", emoji: "🪑", def: "A piece of furniture for one person to sit on." },
    { word: "table", theme: "furniture_objects_A1", emoji: "🪑", def: "A piece of furniture with four legs." },
    { word: "bed", theme: "furniture_objects_A1", emoji: "🛏️", def: "A piece of furniture that you sleep on." },
    { word: "key", theme: "furniture_objects_A1", emoji: "🔑", def: "A metal object used to open a door." },
    { word: "phone", theme: "basic_technology_devices_A1", emoji: "📱", def: "A device used to talk to people far away." },
    { word: "book", theme: "furniture_objects_A1", emoji: "📚", def: "Many pages with words that you read." },
    { word: "bag", theme: "furniture_objects_A1", emoji: "👜", def: "A container used to carry things." },
    { word: "pen", theme: "furniture_objects_A1", emoji: "🖊️", def: "An object used for writing with ink." },
    { word: "cat", theme: "animals_A1", emoji: "🐈", def: "A small animal with fur." },
    { word: "dog", theme: "animals_A1", emoji: "🐕", def: "An animal often called 'man's best friend'." },
    { word: "hand", theme: "body_parts_A1", emoji: "✋", def: "The part of your arm that has fingers." },
    { word: "leg", theme: "body_parts_A1", emoji: "🦵", def: "The part of the body used for walking." },
    { word: "eye", theme: "body_parts_A1", emoji: "👁️", def: "The part of your body used for seeing." },
    { word: "nose", theme: "body_parts_A1", emoji: "👃", def: "The part of the face used for smelling." },
    { word: "mouth", theme: "body_parts_A1", emoji: "👄", def: "The part of the face used for eating and speaking." },
    { word: "ear", theme: "body_parts_A1", emoji: "👂", def: "The part of the body used for hearing." },
    { word: "mother", theme: "immediate_family_A1", emoji: "👩", def: "A woman who is your parent." },
    { word: "father", theme: "immediate_family_A1", emoji: "👨", def: "A man who is your parent." },
    { word: "work", theme: "job_titles_professions_A1", emoji: "💼", def: "A job; a place where people earn money." },
    { word: "home", theme: "rooms_of_a_home_A1", emoji: "🏠", def: "The place where you live." },
    { word: "car", theme: "modes_of_transport_A1", emoji: "🚗", def: "A vehicle with four wheels." },
    { word: "bus", theme: "modes_of_transport_A1", emoji: "🚌", def: "A large vehicle for many people." },
    { word: "train", theme: "modes_of_transport_A1", emoji: "🚆", def: "A vehicle that runs on rails." },
    { word: "money", theme: "everyday_shopping_A1", emoji: "💰", def: "Coins or notes used to buy things." },
    { word: "shop", theme: "local_places_services_A1", emoji: "🛒", def: "A place where you can buy things." },
    { word: "family", theme: "immediate_family_A1", emoji: "👪", def: "A group of people who are related." },
    { word: "friend", theme: "immediate_family_A1", emoji: "👫", def: "A person you like and know well." },
    { word: "day", theme: "times_day_A1", emoji: "☀️", def: "A period of 24 hours." },
    { word: "week", theme: "times_day_A1", emoji: "📅", def: "A period of seven days." },
    { word: "food", theme: "basic_foods_A1", emoji: "🍲", def: "Things that people eat." },
    { word: "breakfast", theme: "meals_of_the_day_A1", emoji: "🍳", def: "The first meal of the day." },
    { word: "lunch", theme: "meals_of_the_day_A1", emoji: "🍱", def: "A meal eaten in the middle of the day." },
    { word: "dinner", theme: "meals_of_the_day_A1", emoji: "🍽️", def: "The main meal, usually in the evening." },
    { word: "morning", theme: "times_day_A1", emoji: "🌅", def: "The part of the day before noon." },
    { word: "evening", theme: "times_day_A1", emoji: "🌆", def: "The part of the day after afternoon." },
    { word: "night", theme: "times_day_A1", emoji: "🌙", def: "The period of darkness." },
    { word: "today", theme: "times_day_A1", emoji: "📅", def: "On this day; the current day." },
    { word: "tomorrow", theme: "times_day_A1", emoji: "⏭️", def: "On the day after today." },
    { word: "husband", theme: "immediate_family_A1", emoji: "👨", def: "A married man." },
    { word: "wife", theme: "immediate_family_A1", emoji: "👩", def: "A married woman." },
    { word: "child", theme: "immediate_family_A1", emoji: "👶", def: "A young person; a son or daughter." },
    { word: "sun", theme: "weather_A1", emoji: "☀️", def: "The star that gives light and heat." },
    { word: "rain", theme: "weather_A1", emoji: "🌧️", def: "Water that falls from clouds." }
];

const translations = {
    de: {
        words: ["Arzt", "Fuß", "Lehrer", "Pizza", "Pasta", "Apfel", "Brot", "Ei", "Milch", "Banane", "Kaffee", "Tee", "Wasser", "Schule", "T-Shirt", "Hose", "Schuh", "Hut", "Stuhl", "Tisch", "Bett", "Schlüssel", "Telefon", "Buch", "Tasche", "Stift", "Katze", "Hund", "Hand", "Bein", "Auge", "Nase", "Mund", "Ohr", "Mutter", "Vater", "Arbeit", "Zuhause", "Auto", "Bus", "Zug", "Geld", "Geschäft", "Familie", "Freund", "Tag", "Woche", "Essen", "Frühstück", "Mittagessen", "Abendessen", "Morgen", "Abend", "Nacht", "Heute", "Morgen", "Ehemann", "Ehefrau", "Kind", "Sonne", "Regen"],
        defs: ["Eine Person, die Kranken hilft.", "Der Teil des Körpers unten am Bein.", "Eine Person, die beim Lernen hilft.", "Ein flaches Brot mit Käse und Tomaten.", "Ein Essen aus Mehl und Eiern.", "Eine runde Frucht, rot oder grün.", "Ein Essen aus Mehl und Wasser.", "Ein ovales Objekt von einer Henne.", "Eine weiße Flüssigkeit von Kühen.", "Eine lange gelbe Frucht.", "Ein heißes braunes Getränk.", "Ein heißes Getränk aus Blättern.", "Eine klare Flüssigkeit zum Trinken.", "Ein Ort zum Lernen.", "Ein Hemd mit kurzen Ärmeln.", "Ein Kleidungsstück für die Beine.", "Etwas für die Füße.", "Etwas für den Kopf.", "Ein Möbelstück zum Sitzen.", "Ein Möbelstück mit vier Beinen.", "Ein Möbelstück zum Schlafen.", "Ein Objekt zum Öffnen von Türen.", "Ein Gerät zum Sprechen.", "Viele Seiten zum Lesen.", "Ein Behälter zum Tragen.", "Ein Gegenstand zum Schreiben.", "Ein kleines Tier mit Fell.", "Der beste Freund des Menschen.", "Der Teil des Arms mit Fingern.", "Ein Teil des Körpers zum Laufen.", "Ein Teil des Körpers zum Sehen.", "Ein Teil des Gesichts zum Riechen.", "Ein Teil des Gesichts zum Essen.", "Ein Teil des Körpers zum Hören.", "Eine Frau, die ein Elternteil ist.", "Ein Mann, die ein Elternteil ist.", "Ein Job; ein Ort zum Geldverdienen.", "Der Ort, an dem man lebt.", "Ein Fahrzeug mit vier Rädern.", "Ein großes Fahrzeug für viele Leute.", "Ein Fahrzeug auf Schienen.", "Münzen oder Scheine.", "Ein Ort zum Kaufen.", "Eine Gruppe von Verwandten.", "Eine Person, die man mag.", "Ein Zeitraum von 24 Stunden.", "Ein Zeitraum von sieben Tagen.", "Dinge, die man isst.", "Die erste Mahlzeit des Tages.", "Die Mahlzeit am Mittag.", "Die Mahlzeit am Abend.", "Die Zeit vor dem Mittag.", "Die Zeit nach dem Nachmittag.", "Die Zeit der Dunkelheit.", "An diesem Tag.", "Am Tag nach heute.", "Ein verheirateter Mann.", "Eine verheiratete Frau.", "Ein junger Mensch.", "Der Stern, der Licht gibt.", "Wasser, das aus Wolken fällt."],
        articles: ["der", "der", "der", "die", "die", "der", "das", "das", "die", "die", "der", "der", "das", "die", "das", "die", "der", "der", "der", "der", "das", "der", "das", "das", "die", "der", "die", "der", "die", "das", "das", "die", "der", "das", "die", "der", "die", "das", "das", "der", "der", "das", "das", "die", "der", "der", "die", "das", "das", "das", "das", "der", "der", "die", "heute", "morgen", "der", "die", "das", "die", "der"],
        genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "neuter", "neuter", "feminine", "feminine", "masculine", "masculine", "neuter", "feminine", "neuter", "feminine", "masculine", "masculine", "masculine", "masculine", "neuter", "masculine", "neuter", "neuter", "feminine", "masculine", "feminine", "masculine", "feminine", "neuter", "neuter", "feminine", "masculine", "neuter", "feminine", "masculine", "feminine", "neuter", "neuter", "masculine", "masculine", "neuter", "neuter", "feminine", "masculine", "masculine", "feminine", "neuter", "neuter", "neuter", "neuter", "masculine", "masculine", "feminine", "neuter", "neuter", "masculine", "feminine", "neuter", "feminine", "masculine"]
    },
    es: {
        words: ["médico", "pie", "profesor", "pizza", "pasta", "manzana", "pan", "huevo", "leche", "plátano", "café", "té", "agua", "escuela", "camiseta", "pantalones", "zapato", "sombrero", "silla", "mesa", "cama", "llave", "teléfono", "libro", "bolsa", "bolígrafo", "gato", "perro", "mano", "pierna", "ojo", "nariz", "boca", "oreja", "madre", "padre", "trabajo", "hogar", "coche", "autobús", "tren", "dinero", "tienda", "familia", "amigo", "día", "semana", "comida", "desayuno", "almuerzo", "cena", "mañana", "tarde", "noche", "hoy", "mañana", "marido", "mujer", "niño", "sol", "lluvia"],
        defs: ["Persona que ayuda a los enfermos.", "Parte del cuerpo al final de la pierna.", "Persona que ayuda a aprender.", "Pan plano con queso y tomate.", "Comida hecha de harina y huevos.", "Fruta redonda, roja o verde.", "Comida común de harina y agua.", "Objeto ovalado puesto por una gallina.", "Líquido blanco de las vacas.", "Fruta larga y amarilla.", "Bebida marrón caliente.", "Bebida caliente de hojas.", "Líquido transparente para beber.", "Lugar donde los niños aprenden.", "Camisa casual de manga corta.", "Ropa para las piernas.", "Algo que se usa en los pies.", "Algo que se usa en la cabeza.", "Mueble para sentarse.", "Mueble con cuatro patas.", "Mueble para dormir.", "Objeto para abrir puertas.", "Dispositivo para hablar.", "Muchas páginas para leer.", "Contenedor para llevar cosas.", "Objeto para escribir con tinta.", "Animal pequeño con pelo.", "El mejor amigo del hombre.", "Parte del brazo con dedos.", "Parte del cuerpo para caminar.", "Parte del cuerpo para ver.", "Parte de la cara para oler.", "Parte de la cara para comer.", "Parte del cuerpo para oír.", "Mujer que es madre.", "Hombre que es padre.", "Empleo; lugar para ganar dinero.", "Lugar donde vives.", "Vehículo de cuatro ruedas.", "Vehículo grande para mucha gente.", "Vehículo sobre raíles.", "Monedas o billetes.", "Lugar para comprar.", "Grupo de parientes.", "Persona que te gusta.", "Periodo de 24 horas.", "Periodo de siete días.", "Cosas que la gente come.", "Primera comida del día.", "Comida del mediodía.", "Comida de la noche.", "Parte del día antes del mediodía.", "Parte del día después de comer.", "Periodo de oscuridad.", "En este día.", "El día después de hoy.", "Hombre casado.", "Mujer casada.", "Persona joven.", "Estrella que da luz.", "Agua que cae de las nubes."],
        articles: ["el", "el", "el", "la", "la", "la", "el", "el", "la", "el", "el", "el", "el", "la", "la", "los", "el", "el", "la", "la", "la", "la", "el", "el", "la", "el", "el", "el", "la", "la", "el", "la", "la", "la", "la", "el", "el", "el", "el", "el", "el", "el", "la", "la", "el", "el", "la", "la", "el", "el", "la", "la", "la", "la", "hoy", "mañana", "el", "la", "el", "el", "la"],
        genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "adverb", "adverb", "masculine", "feminine", "masculine", "masculine", "feminine"]
    }
};

function gen(lang, dir, transList) {
    if (!transList) return;
    const data = enRef.map((item, i) => {
        const obj = {
            word: transList.words[i],
            level: "starter",
            theme: item.theme,
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: transList.defs[i], examples: [] }]
        };
        if (transList.articles) obj.article = transList.articles[i];
        if (transList.genders) obj.gender = transList.genders[i];
        return obj;
    });
    const content = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(`js/data/${dir}/${lang}/starter/vocabulary.js`, content);
}

gen('de', 'germanic', translations.de);
gen('es', 'romance', translations.es);
