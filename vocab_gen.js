const fs = require('fs');

const enRef = [
    { word: "doctor", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️" },
    { word: "foot", theme: "body_parts_A1", emoji: "🦶" },
    { word: "teacher", theme: "job_titles_professions_A1", emoji: "🧑‍🏫" },
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
    { word: "man", theme: "physical_appearance_A1", emoji: "👨" },
    { word: "woman", theme: "physical_appearance_A1", emoji: "👩" },
    { word: "work", theme: "job_titles_professions_A1", emoji: "💼" },
    { word: "office", theme: "rooms_indoor_spaces_A1", emoji: "🏢" },
    { word: "home", theme: "rooms_of_a_home_A1", emoji: "🏠" },
    { word: "house", theme: "rooms_of_a_home_A1", emoji: "🏡" },
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
    { word: "food", theme: "basic_foods_A1", emoji: "🍲" }
];

const translations = {
    de: {
        words: ["Arzt", "Fuß", "Lehrer", "Apfel", "Brot", "Ei", "Milch", "Banane", "Kaffee", "Tee", "Wasser", "Schule", "T-Shirt", "Hose", "Schuh", "Stuhl", "Tisch", "Bett", "Schlüssel", "Telefon", "Buch", "Tasche", "Stift", "Katze", "Hund", "Hand", "Bein", "Auge", "Nase", "Mund", "Ohr", "Mutter", "Vater", "Mann", "Frau", "Arbeit", "Büro", "Zuhause", "Haus", "Auto", "Bus", "Zug", "Geld", "Geschäft", "Familie", "Freund", "Tag", "Woche", "Stadt", "Essen"],
        articles: ["der", "der", "der", "der", "das", "das", "die", "die", "der", "der", "das", "die", "das", "die", "der", "der", "der", "das", "der", "das", "das", "die", "der", "die", "der", "die", "das", "das", "die", "der", "das", "die", "der", "der", "die", "die", "das", "das", "das", "das", "der", "der", "das", "das", "die", "der", "der", "die", "die", "das"],
        genders: ["masculine", "masculine", "masculine", "masculine", "neuter", "neuter", "feminine", "feminine", "masculine", "masculine", "neuter", "feminine", "neuter", "feminine", "masculine", "masculine", "masculine", "neuter", "masculine", "neuter", "neuter", "feminine", "masculine", "feminine", "masculine", "feminine", "neuter", "neuter", "feminine", "masculine", "neuter", "feminine", "masculine", "masculine", "feminine", "feminine", "neuter", "neuter", "neuter", "neuter", "masculine", "masculine", "neuter", "neuter", "feminine", "masculine", "masculine", "feminine", "feminine", "neuter"]
    },
    es: {
        words: ["médico", "pie", "profesor", "manzana", "pan", "huevo", "leche", "plátano", "café", "té", "agua", "escuela", "camiseta", "pantalones", "zapato", "silla", "mesa", "cama", "llave", "teléfono", "libro", "bolsa", "bolígrafo", "gato", "perro", "mano", "pierna", "ojo", "nariz", "boca", "oreja", "madre", "padre", "hombre", "mujer", "trabajo", "oficina", "hogar", "casa", "coche", "autobús", "tren", "dinero", "tienda", "familia", "amigo", "día", "semana", "ciudad", "comida"],
        articles: ["el", "el", "el", "la", "el", "el", "la", "el", "el", "el", "el", "la", "la", "los", "el", "la", "la", "la", "la", "el", "el", "la", "el", "el", "el", "la", "la", "el", "la", "la", "la", "la", "el", "el", "la", "el", "la", "el", "la", "el", "el", "el", "el", "la", "la", "el", "el", "la", "la", "la"],
        genders: ["masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "feminine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine"]
    },
    pt: {
        words: ["médico", "pé", "professor", "maçã", "pão", "ovo", "leite", "banana", "café", "chá", "água", "escola", "t-shirt", "calças", "sapato", "cadeira", "mesa", "cama", "chave", "telefone", "livro", "mala", "caneta", "gato", "cão", "mão", "perna", "olho", "nariz", "boca", "orelha", "mãe", "pai", "homem", "mulher", "trabalho", "escritório", "lar", "casa", "carro", "autocarro", "comboio", "dinheiro", "loja", "família", "amigo", "dia", "semana", "cidade", "comida"],
        articles: ["o", "o", "o", "a", "o", "o", "a", "a", "o", "o", "a", "a", "a", "as", "o", "a", "a", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "a", "o", "o", "a", "o", "o", "o", "a", "o", "o", "o", "o", "a", "a", "o", "o", "a", "a", "a"],
        genders: ["masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine"]
    }
};

function gen(lang, dir) {
    const trans = translations[lang];
    if (!trans) return;
    const data = enRef.map((item, i) => {
        return {
            word: trans.words[i],
            level: "starter",
            theme: item.theme,
            article: trans.articles[i],
            gender: trans.genders[i],
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: "Starter noun", examples: [] }]
        };
    });
    const content = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(`js/data/${dir}/${lang}/starter/vocabulary.js`, content);
}

gen('de', 'germanic');
gen('es', 'romance');
gen('pt', 'romance');

// For non-gendered/non-article languages, simpler gen
const otherTranslations = {
    hy: ["բժիշկ", "ոտք", "ուսուցիչ", "խնձոր", "հաց", "ձու", "կաթ", "բանան", "սուրճ", "թեյ", "ջուր", "դպրոց", "շապիկ", "տաբատ", "կոշիկ", "աթոռ", "սեղան", "մահճակալ", "բանալի", "հեռախոս", "գիրք", "պայուսակ", "գրիչ", "կատու", "շուն", "ձեռք", "ոտք", "աչք", "քիթ", "բերան", "ականջ", "մայր", "հայր", "տղամարդ", "կին", "աշխատանք", "գրասենյակ", "տուն", "տուն", "մեքենա", "ավտոբուս", "գնացք", "փող", "խանութ", "ընտանիք", "ընկեր", "օր", "շաբաթ", "քաղաք", "ուտելիք"],
    ka: ["ექიმი", "ფეხი", "მასწავლებელი", "ვაშლი", "პური", "კვერცხი", "რძე", "ბანანი", "ყავა", "ჩაი", "წყალი", "სკოლა", "მაისური", "შარვალი", "ფეხსაცმელი", "სკამი", "მაგიდა", "საწოლი", "გასაღები", "ტელეფონი", "წიგნი", "ჩანთა", "კალამი", "კატა", "ძაღლი", "ხელი", "ფეხი", "თვალი", "ცხვირი", "პირი", "ყური", "დედა", "მამა", "კაცი", "ქალი", "მუშაობა", "ოფისი", "სახლი", "სახლი", "მანქანა", "ავტობუსი", "მატარებელი", "ფული", "მაღაზია", "ოჯახი", "მეგობარი", "დღე", "კვირა", "ქალაქი", "საჭმელი"],
    tt: ["врач", "аяк", "укытучы", "алма", "икмәк", "йомырка", "сөт", "банан", "кофе", "чәй", "су", "мәктәп", "футболка", "чалбар", "аяк киеме", "урындык", "өстәл", "карават", "ачкыч", "телефон", "китап", "сумка", "ручка", "мәче", "эт", "кул", "аяк", "күз", "борын", "авыз", "колак", "әни", "әти", "ират", "хатын", "эш", "офис", "өй", "йорт", "машина", "автобус", "поезд", "акча", "кибет", "гаилә", "дус", "көн", "атна", "шәһәр", "ризык"],
    ba: ["врач", "аяк", "уҡытыусы", "алма", "икмәк", "йомортҡа", "һөт", "банан", "кофе", "сәй", "һыу", "мәктәп", "футболка", "салбар", "аяк киеме", "олтырғыс", "өҫтәл", "карауат", "асҡыс", "телефон", "китап", "сумка", "ручка", "беше", "эт", "ҡул", "аяк", "күҙ", "борон", "ауыҙ", "ҡолаҡ", "әсәй", "атай", "ират", "ҡатын", "эш", "офис", "өй", "йорт", "машина", "автобус", "поезд", "аҡса", "кибет", "ғаилә", "дуҫ", "көн", "аҙна", "ҡала", "аҙыҡ"],
    br: ["medisin", "troad", "kelenner", "aval", "bara", "vi", "laezh", "banana", "kafe", "te", "dour", "skol", "t-shirt", "bragoù", "botez", "kador", "taol", "gwele", "alc'hwez", "pellgomz", "levr", "sac'h", "stilo", "kazh", "ki", "dorn", "gar", "lagad", "fri", "genou", "skouarn", "mamm", "tad", "den", "maouez", "labour", "burev", "gêr", "ti", "karr", "karr-boutin", "tren", "arc'hant", "stal", "familh", "mignon", "deiz", "sizhun", "kêr", "boued"]
};

const otherDirs = { hy: 'armenian', ka: 'kartvelian', tt: 'turkic', ba: 'turkic', br: 'celtic' };

Object.entries(otherTranslations).forEach(([lang, words]) => {
    const data = enRef.map((item, i) => {
        return {
            word: words[i],
            level: "starter",
            theme: item.theme,
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: "Starter noun", examples: [] }]
        };
    });
    const content = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(`js/data/${otherDirs[lang]}/${lang}/starter/vocabulary.js`, content);
});
