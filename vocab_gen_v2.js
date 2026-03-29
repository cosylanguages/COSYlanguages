const fs = require('fs');

const enRef = [
    { word: "doctor", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️" },
    { word: "foot", theme: "body_parts_A1", emoji: "🦶" },
    { word: "teacher", theme: "job_titles_professions_A1", emoji: "🧑‍🏫" },
    { word: "pizza", theme: "basic_foods_A1", emoji: "🍕" },
    { word: "pasta", theme: "basic_foods_A1", emoji: "🍝" },
    { word: "apple", theme: "basic_foods_A1", emoji: "🍎" },
    { word: "bread", theme: "basic_foods_A1", emoji: "🍞" },
    { word: "egg", theme: "basic_foods_A1", emoji: "🥚" },
    { word: "milk", theme: "basic_foods_A1", emoji: "🥛" },
    { word: "banana", theme: "basic_foods_A1", emoji: "🍌" },
    { word: "coffee", theme: "drinks_A1", emoji: "☕" },
    { word: "tea", theme: "drinks_A1", emoji: "🍵" },
    { word: "water", theme: "drinks_A1", emoji: "🚰" },
    { word: "school", theme: "local_places_services_A1", emoji: "🏫" },
    { word: "t-shirt", theme: "items_of_clothing_A1", emoji: "👕" },
    { word: "pants", theme: "items_of_clothing_A1", emoji: "👖" },
    { word: "shoe", theme: "items_of_clothing_A1", emoji: "👞" },
    { word: "hat", theme: "items_of_clothing_A1", emoji: "👒" },
    { word: "chair", theme: "furniture_objects_A1", emoji: "🪑" },
    { word: "table", theme: "furniture_objects_A1", emoji: "🪑" },
    { word: "bed", theme: "furniture_objects_A1", emoji: "🛏️" },
    { word: "key", theme: "furniture_objects_A1", emoji: "🔑" },
    { word: "phone", theme: "basic_technology_devices_A1", emoji: "📱" },
    { word: "book", theme: "furniture_objects_A1", emoji: "📚" },
    { word: "bag", theme: "furniture_objects_A1", emoji: "👜" },
    { word: "pen", theme: "furniture_objects_A1", emoji: "🖊️" },
    { word: "cat", theme: "animals_A1", emoji: "🐈" },
    { word: "dog", theme: "animals_A1", emoji: "🐕" },
    { word: "hand", theme: "body_parts_A1", emoji: "✋" },
    { word: "leg", theme: "body_parts_A1", emoji: "🦵" },
    { word: "eye", theme: "body_parts_A1", emoji: "👁️" },
    { word: "nose", theme: "body_parts_A1", emoji: "👃" },
    { word: "mouth", theme: "body_parts_A1", emoji: "👄" },
    { word: "ear", theme: "body_parts_A1", emoji: "👂" },
    { word: "mother", theme: "immediate_family_A1", emoji: "👩" },
    { word: "father", theme: "immediate_family_A1", emoji: "👨" },
    { word: "work", theme: "job_titles_professions_A1", emoji: "💼" },
    { word: "office", theme: "rooms_indoor_spaces_A1", emoji: "🏢" },
    { word: "home", theme: "rooms_of_a_home_A1", emoji: "🏠" },
    { word: "car", theme: "modes_of_transport_A1", emoji: "🚗" },
    { word: "bus", theme: "modes_of_transport_A1", emoji: "🚌" },
    { word: "train", theme: "modes_of_transport_A1", emoji: "🚆" },
    { word: "money", theme: "everyday_shopping_A1", emoji: "💰" },
    { word: "shop", theme: "local_places_services_A1", emoji: "🛒" },
    { word: "family", theme: "immediate_family_A1", emoji: "👪" },
    { word: "friend", theme: "immediate_family_A1", emoji: "👫" },
    { word: "day", theme: "times_day_A1", emoji: "☀️" },
    { word: "week", theme: "times_day_A1", emoji: "📅" },
    { word: "city", theme: "cities_towns_A1", emoji: "🏙️" },
    { word: "food", theme: "basic_foods_A1", emoji: "🍲" },
    { word: "rice", theme: "basic_foods_A1", emoji: "🍚" },
    { word: "meat", theme: "basic_foods_A1", emoji: "🥩" },
    { word: "breakfast", theme: "meals_of_the_day_A1", emoji: "🍳" },
    { word: "dinner", theme: "meals_of_the_day_A1", emoji: "🍽️" },
    { word: "morning", theme: "times_day_A1", emoji: "🌅" },
    { word: "evening", theme: "times_day_A1", emoji: "🌆" },
    { word: "lunch", theme: "meals_of_the_day_A1", emoji: "🍱" },
    { word: "boss", theme: "workplace_basics_A1", emoji: "💼" },
    { word: "colleague", theme: "workplace_basics_A1", emoji: "🧑‍💼" },
    { word: "salary", theme: "money_payment_A1", emoji: "💸" },
    { word: "meeting", theme: "workplace_basics_A1", emoji: "🤝" },
    { word: "rent", theme: "types_of_accommodation_A1", emoji: "🏠" },
    { word: "neighbour", theme: "address_location_A1", emoji: "🏘️" },
    { word: "room", theme: "rooms_of_a_home_A1", emoji: "🚪" },
    { word: "kitchen", theme: "rooms_of_a_home_A1", emoji: "🍳" },
    { word: "price", theme: "money_payment_A1", emoji: "🏷️" },
    { word: "hotel", theme: "public_transport_A1", emoji: "🏨" },
    { word: "travel", theme: "travel_vocabulary_basics_A1", emoji: "✈️" },
    { word: "fruit", theme: "basic_foods_A1", emoji: "🍎" },
    { word: "vegetable", theme: "basic_foods_A1", emoji: "🥦" },
    { word: "door", theme: "furniture_objects_A1", emoji: "🚪" },
    { word: "window", theme: "furniture_objects_A1", emoji: "🪟" },
    { word: "nurse", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️" },
    { word: "hospital", theme: "local_places_services_A1", emoji: "🏥" },
    { word: "restaurant", theme: "local_places_services_A1", emoji: "🍴" },
    { word: "bank", theme: "local_places_services_A1", emoji: "🏦" },
    { word: "supermarket", theme: "local_places_services_A1", emoji: "🛒" },
    { word: "sun", theme: "weather_A1", emoji: "☀️" },
    { word: "rain", theme: "weather_A1", emoji: "🌧️" },
    { word: "tomorrow", theme: "times_day_A1", emoji: "⏭️" }
];

const translations = {
    de: {
        words: ["Arzt", "Fuß", "Lehrer", "Pizza", "Pasta", "Apfel", "Brot", "Ei", "Milch", "Banane", "Kaffee", "Tee", "Wasser", "Schule", "T-Shirt", "Hose", "Schuh", "Hut", "Stuhl", "Tisch", "Bett", "Schlüssel", "Telefon", "Buch", "Tasche", "Stift", "Katze", "Hund", "Hand", "Bein", "Auge", "Nase", "Mund", "Ohr", "Mutter", "Vater", "Arbeit", "Büro", "Zuhause", "Auto", "Bus", "Zug", "Geld", "Geschäft", "Familie", "Freund", "Tag", "Woche", "Stadt", "Essen", "Reis", "Fleisch", "Frühstück", "Abendessen", "Morgen", "Abend", "Mittagessen", "Chef", "Kollege", "Gehalt", "Besprechung", "Miete", "Nachbar", "Zimmer", "Küche", "Preis", "Hotel", "Reise", "Obst", "Gemüse", "Tür", "Fenster", "Krankenschwester", "Krankenhaus", "Restaurant", "Bank", "Supermarkt", "Sonne", "Regen", "Morgen"],
        articles: ["der", "der", "der", "die", "die", "der", "das", "das", "die", "die", "der", "der", "das", "die", "das", "die", "der", "der", "der", "der", "das", "der", "das", "das", "die", "der", "die", "der", "die", "das", "das", "die", "der", "das", "die", "der", "die", "das", "das", "das", "der", "der", "das", "das", "die", "der", "der", "die", "die", "das", "der", "das", "das", "das", "der", "der", "das", "der", "der", "das", "die", "die", "der", "das", "die", "der", "das", "die", "das", "das", "die", "das", "die", "das", "das", "die", "der", "die", "der", "der"],
        genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "neuter", "neuter", "feminine", "feminine", "masculine", "masculine", "neuter", "feminine", "neuter", "feminine", "masculine", "masculine", "masculine", "masculine", "neuter", "masculine", "neuter", "neuter", "feminine", "masculine", "feminine", "masculine", "feminine", "neuter", "neuter", "feminine", "masculine", "neuter", "feminine", "masculine", "feminine", "neuter", "neuter", "neuter", "masculine", "masculine", "neuter", "neuter", "feminine", "masculine", "masculine", "feminine", "feminine", "neuter", "masculine", "neuter", "neuter", "neuter", "masculine", "masculine", "neuter", "masculine", "masculine", "neuter", "feminine", "feminine", "masculine", "neuter", "feminine", "masculine", "neuter", "feminine", "neuter", "neuter", "feminine", "neuter", "feminine", "neuter", "neuter", "feminine", "masculine", "feminine", "masculine", "masculine"]
    },
    es: {
        words: ["médico", "pie", "profesor", "pizza", "pasta", "manzana", "pan", "huevo", "leche", "plátano", "café", "té", "agua", "escuela", "camiseta", "pantalones", "zapato", "sombrero", "silla", "mesa", "cama", "llave", "teléfono", "libro", "bolsa", "bolígrafo", "gato", "perro", "mano", "pierna", "ojo", "nariz", "boca", "oreja", "madre", "padre", "trabajo", "oficina", "hogar", "coche", "autobús", "tren", "dinero", "tienda", "familia", "amigo", "día", "semana", "ciudad", "comida", "arroz", "carne", "desayuno", "cena", "mañana", "tarde", "almuerzo", "jefe", "colega", "salario", "reunión", "alquiler", "vecino", "habitación", "cocina", "precio", "hotel", "viaje", "fruta", "verdura", "puerta", "ventana", "enfermera", "hospital", "restaurante", "banco", "supermercado", "sol", "lluvia", "mañana"],
        articles: ["el", "el", "el", "la", "la", "la", "el", "el", "la", "el", "el", "el", "el", "la", "la", "los", "el", "el", "la", "la", "la", "la", "el", "el", "la", "el", "el", "el", "la", "la", "el", "la", "la", "la", "la", "el", "el", "la", "el", "el", "el", "el", "el", "la", "la", "el", "el", "la", "la", "la", "el", "la", "el", "la", "la", "la", "el", "el", "el", "el", "la", "el", "el", "la", "la", "el", "el", "el", "la", "la", "la", "la", "la", "el", "el", "el", "el", "el", "la", "la"],
        genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "feminine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine"]
    },
    pt: {
        words: ["médico", "pé", "professor", "pizza", "massa", "maçã", "pão", "ovo", "leite", "banana", "café", "chá", "água", "escola", "t-shirt", "calças", "sapato", "chapéu", "cadeira", "mesa", "cama", "chave", "telefone", "livro", "mala", "caneta", "gato", "cão", "mão", "perna", "olho", "nariz", "boca", "orelha", "mãe", "pai", "trabalho", "escritório", "casa", "carro", "autocarro", "comboio", "dinheiro", "loja", "família", "amigo", "dia", "semana", "cidade", "comida", "arroz", "carne", "pequeno-almoço", "jantar", "manhã", "noite", "almoço", "chefe", "colega", "salário", "reunião", "aluguel", "vizinho", "quarto", "cozinha", "preço", "hotel", "viagem", "fruta", "legume", "porta", "janela", "enfermeira", "hospital", "restaurante", "banco", "supermercado", "sol", "chuva", "amanhã"],
        articles: ["o", "o", "o", "a", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "a", "as", "o", "o", "a", "a", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "o", "a", "a", "a", "a", "o", "o", "o", "a", "o", "o", "o", "o", "a", "a", "o", "o", "a", "a", "a", "o", "a", "o", "o", "a", "a", "o", "o", "o", "o", "a", "o", "o", "o", "a", "o", "o", "a", "a", "o", "a", "a", "a", "o", "o", "o", "o", "o", "a", "o"],
        genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "masculine", "masculine", "feminine", "masculine"]
    }
};

const otherTranslations = {
    hy: ["բժիշկ", "ոտք", "ուսուցիչ", "պիցցա", "մակարոն", "խնձոր", "հաց", "ձու", "կաթ", "բանան", "սուրճ", "թեյ", "ջուր", "դպրոց", "շապիկ", "տաբատ", "կոշիկ", "գլխարկ", "աթոռ", "սեղան", "մահճակալ", "բանալի", "հեռախոս", "գիրք", "պայուսակ", "գրիչ", "կատու", "շուն", "ձեռք", "ոտք", "աչք", "քիթ", "բերան", "ականջ", "մայր", "հայր", "աշխատանք", "գրասենյակ", "տուն", "մեքենա", "ավտոբուս", "գնացք", "փող", "խանութ", "ընտանիք", "ընկեր", "օր", "շաբաթ", "քաղաք", "ուտելիք", "բրինձ", "միս", "նախաճաշ", "ընթրիք", "առավոտ", "երեկո", "ճաշ", "տնօրեն", "գործընկեր", "աշխատավարձ", "հանդիպում", "վարձ", "հարևան", "սենյակ", "խոհանոց", "գին", "հյուրանոց", "ճամփորդություն", "միրգ", "բանջարեղեն", "դուռ", "պատուհան", "բուժքույր", "հիվանդանոց", "ռեստորան", "բանկ", "սուպերմարկետ", "արև", "անձրև", "վաղը"],
    ka: ["ექიმი", "ფეხი", "მასწავლებელი", "პიცა", "პასტა", "ვაშლი", "პური", "კვერცხი", "რძე", "ბანანი", "ყავა", "ჩაი", "წყალი", "სკოლა", "მაისური", "შარვალი", "ფეხსაცმელი", "ქუდი", "სკამი", "მაგიდა", "საწოლი", "გასაღები", "ტელეფონი", "წიგნი", "ჩანთა", "კალამი", "კატა", "ძაღლი", "ხელი", "ფეხი", "თვალი", "ცხვირი", "პირი", "ყური", "დედა", "მამა", "მუშაობა", "ოფისი", "სახლი", "მანქანა", "ავტობუსი", "მატარებელი", "ფული", "მაღაზია", "ოჯახი", "მეგობარი", "დღე", "კვირა", "ქალაქი", "საჭმელი", "ბრინჯი", "ხორცი", "საუზმე", "ვახშამი", "დილა", "საღამო", "სადილი", "უფროსი", "კოლეგა", "ხელფასი", "შეხვედრა", "ქირა", "მეზობელი", "ოთახი", "სამზარეულო", "ფასი", "სასტუმრო", "მოგზაურობა", "ხილი", "ბოსტნეული", "კარი", "ფანჯარა", "ექთანი", "საავადმყოფო", "რესტორანი", "ბანკი", "სუპერმარკეტი", "მზე", "წვიმა", "ხვალ"],
    tt: ["врач", "аяк", "укытучы", "пицца", "паста", "алма", "икмәк", "йомырка", "сөт", "банан", "кофе", "чәй", "су", "мәктәп", "футболка", "чалбар", "аяк киеме", "баш киеме", "урындык", "өстәл", "карават", "ачкыч", "телефон", "китап", "сумка", "ручка", "мәче", "эт", "кул", "аяк", "күз", "борын", "авыз", "колак", "әни", "әти", "эш", "офис", "өй", "машина", "автобус", "поезд", "акча", "кибет", "гаилә", "дус", "көн", "атна", "шәһәр", "ризык", "дөге", "ит", "иртәнге аш", "кичке аш", "иртә", "кич", "төшке аш", "башлык", "хезмәттәш", "хезмәт хакы", "очрашу", "аренда", "күрше", "бөлмә", "ашханә", "бәя", "кунакханә", "сәяхәт", "җиләк-җимеш", "яшелчә", "ишек", "тәрәзә", "шәфкать туташы", "хастаханә", "ресторан", "банк", "супермаркет", "кояш", "яңгыр", "иртәгә"],
    ba: ["врач", "аяк", "уҡытыусы", "пицца", "паста", "алма", "икмәк", "йомортҡа", "һөт", "банан", "кофе", "сәй", "һыу", "мәктәп", "футболка", "салбар", "аяк киеме", "баш кейеме", "олтырғыс", "өҫтәл", "карауат", "асҡыс", "телефон", "китап", "сумка", "ручка", "беше", "эт", "ҡул", "аяк", "күҙ", "борон", "ауыҙ", "ҡолаҡ", "әсәй", "атай", "эш", "офис", "өй", "машина", "автобус", "поезд", "аҡса", "кибет", "ғаилә", "дуҫ", "көн", "аҙна", "ҡала", "аҙыҡ", "дөгө", "ит", "иртәнге аш", "киске аш", "иртә", "кис", "төшке аш", "башлыҡ", "хеҙмәттәш", "хеҙмәт хаҡы", "осрашыу", "аренда", "күрше", "бөлмә", "ашхана", "бәя", "ҡунаҡхана", "сәйәхәт", "емеш-йәләк", "йәшелсә", "ишек", "тәрәзә", "шәфҡәт туташы", "хастахана", "ресторан", "банк", "супермаркет", "ҡояш", "яңғыр", "иртәгә"],
    br: ["medisin", "troad", "kelenner", "pizza", "pasta", "aval", "bara", "vi", "laezh", "banana", "kafe", "te", "dour", "skol", "t-shirt", "bragoù", "botez", "tog", "kador", "taol", "gwele", "alc'hwez", "pellgomz", "levr", "sac'h", "stilo", "kazh", "ki", "dorn", "gar", "lagad", "fri", "genou", "skouarn", "mamm", "tad", "labour", "burev", "ti", "karr", "karr-boutin", "tren", "arc'hant", "stal", "familh", "mignon", "deiz", "sizhun", "kêr", "boued", "riz", "kig", "lein", "koan", "mintin", "noz", "merenn", "penn", "kenlabourer", "gopr", "emvod", "feurm", "amezeg", "kambr", "kegin", "priz", "ostaleri", "beaj", "frouezh", "legumaj", "dor", "prenestr", "infirmourez", "ospital", "pretis", "bank", "stal-veur", "heol", "glav", "warc'hoazh"]
};

const otherDirs = { hy: 'armenian', ka: 'kartvelian', tt: 'turkic', ba: 'turkic', br: 'celtic' };

function gen(lang, dir, transList, meta) {
    const data = enRef.map((item, i) => {
        const obj = {
            word: transList.words ? transList.words[i] : transList[i],
            level: "starter",
            theme: item.theme,
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: "Starter noun", examples: [] }]
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
gen('pt', 'romance', translations.pt);

Object.entries(otherTranslations).forEach(([lang, words]) => {
    gen(lang, otherDirs[lang], words);
});
