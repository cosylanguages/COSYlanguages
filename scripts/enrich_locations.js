const fs = require('fs');
const path = require('path');

const locationData = {
    "France": { emoji: "🇫🇷", en: "A country in Western Europe famous for its food and the Eiffel Tower.", fr: "Un pays d'Europe occidentale célèbre pour sa cuisine et la tour Eiffel.", ru: "Страна в Западной Европе, знаменитая своей кухней и Эйфелевой башней." },
    "Italy": { emoji: "🇮🇹", en: "A country in Southern Europe known for its history, art, and pasta.", it: "Un paese dell'Europa meridionale noto per la sua storia, l'arte e la pasta.", ru: "Страна в Южной Европе, известная своей историей, искусством и пастой." },
    "Russia": { emoji: "🇷🇺", en: "The largest country in the world, located in Europe and Asia.", ru: "Самая большая страна в мире, расположенная в Европе и Азии." },
    "Greece": { emoji: "🇬🇷", en: "A country in Southern Europe with many islands and ancient history.", el: "Μια χώρα στη Νότια Ευρώπη με πολλά νησιά και αρχαία ιστορία.", ru: "Страна в Южной Европе со множеством островов и древней историей." },
    "England": { emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", en: "A country that is part of the United Kingdom.", ru: "Страна, входящая в состав Соединенного Королевства." },
    "Spain": { emoji: "🇪🇸", en: "A country in Southern Europe known for its sunny weather and beaches.", es: "Un país del sur de Europa conocido por su clima soleado и sus playas.", ru: "Страна в Южной Европе, известная своей солнечной погодой и пляжами." },
    "USA": { emoji: "🇺🇸", en: "A large country in North America with 50 states.", ru: "Большая страна в Северной Америке, состоящая из 50 штатов." },
    "Paris": { emoji: "🗼", en: "The capital city of France.", fr: "La capitale de la France.", ru: "Столица Франции." },
    "London": { emoji: "🎡", en: "The capital city of England and the United Kingdom.", ru: "Столица Англии и Соединенного Королевства." },
    "Rome": { emoji: "🏛️", en: "The capital city of Italy, famous for its ancient ruins.", it: "La capitale dell'Italia, famosa per i suoi resti antichi.", ru: "Столица Италии, знаменитая своими древними руинами." },
    "Moscow": { emoji: "🏰", en: "The capital city of Russia.", ru: "Столица России." },
    "Athens": { emoji: "🏛️", en: "The capital city of Greece.", el: "Η πρωτεύουσα της Ελλάδας.", ru: "Столица Греции." },
    "New York": { emoji: "🗽", en: "A very large city in the USA, known for its tall buildings.", ru: "Очень большой город в США, известный своими небоскребами." },
    "Berlin": { emoji: "🐻", en: "The capital city of Germany.", de: "Die Hauptstadt von Deutschland.", ru: "Столица Германии." },
    "Tokyo": { emoji: "🗾", en: "The capital city of Japan.", ru: "Столица Японии." },
    "Beijing": { emoji: "⛩️", en: "The capital city of China.", ru: "Столица Китая." },
    "Sydney": { emoji: "🇦🇺", en: "A large city in Australia famous for its Opera House.", ru: "Большой город в Австралии, знаменитый своим оперным театром." }
};

const translations = {
    "el": { "Γαλλία": "France", "Ιταλία": "Italy", "Ρωσία": "Russia", "Ελλάδα": "Greece", "Αγγλία": "England", "Ισπανία": "Spain", "ΗΠΑ": "USA", "Παρίσι": "Paris", "Λονδίνο": "London", "Ρώμη": "Rome", "Μόσχα": "Moscow", "Αθήνα": "Athens", "Νέα Υόρκη": "New York" },
    "fr": { "France": "France", "Italie": "Italy", "Russie": "Russia", "Grèce": "Greece", "Angleterre": "England", "Espagne": "Spain", "États-Unis": "USA", "Paris": "Paris", "Londres": "London", "Rome": "Rome", "Moscou": "Moscow", "Athènes": "Athens", "New York": "New York" },
    "ru": { "Франция": "France", "Италия": "Italy", "Россия": "Russia", "Греция": "Greece", "Англия": "England", "Испания": "Spain", "США": "USA", "Париж": "Paris", "Лондон": "London", "Рим": "Rome", "Москва": "Moscow", "Афины": "Athens", "Нью-Йорк": "New York" }
};

function enrichFile(filePath) {
    const langMatch = filePath.match(/vocabulary\/([a-z]{2,3})\/A1/);
    if (!langMatch) return;
    const lang = langMatch[1];

    let content = fs.readFileSync(filePath, 'utf8');
    const dataMatch = content.match(/data = (\[[\s\S]*?\])/);
    if (!dataMatch) return;

    let data = new Function(`return ${dataMatch[1]}`)();
    let changed = false;

    data.forEach(entry => {
        const enKey = (translations[lang] && translations[lang][entry.word]) || entry.word;
        const info = locationData[enKey];
        if (info) {
            if (entry.emoji === '✨' || !entry.emoji) {
                entry.emoji = info.emoji;
                changed = true;
            }
            if (entry.definitions && entry.definitions[0] && (entry.definitions[0].text.startsWith("The word for") || entry.definitions[0].text === "Definition required.")) {
                entry.definitions[0].text = info[lang] || info.en;
                changed = true;
            }
        }
    });

    if (changed) {
        const newDataStr = JSON.stringify(data, null, 4);
        const newContent = content.replace(dataMatch[1], newDataStr);
        fs.writeFileSync(filePath, newContent);
        console.log(`Enriched ${filePath}`);
    }
}

const languages = ['en', 'fr', 'it', 'es', 'ru', 'de', 'pt', 'el', 'hy', 'ka', 'tt', 'ba', 'br'];
languages.forEach(lang => {
    const a1Dir = path.join('vocabulary', lang, 'A1');
    if (fs.existsSync(a1Dir)) {
        fs.readdirSync(a1Dir).forEach(f => {
            if (f.endsWith('.js')) enrichFile(path.join(a1Dir, f));
        });
    }
});
