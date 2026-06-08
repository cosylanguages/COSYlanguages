const fs = require('fs');
const path = require('path');

const THEMES = {
    "animals": { slug: "animals", subs: ["pets", "farm", "wild", "insects", "birds", "sea"] },
    "body": { slug: "body", subs: ["face", "limbs", "organs", "health", "appearance"] },
    "clothes": { slug: "clothes", subs: ["everyday", "formal", "accessories", "weather_gear"] },
    "colours": { slug: "colours", subs: ["basic", "shades"] },
    "emotions": { slug: "emotions", subs: ["positive", "negative", "complex"] },
    "food_drink": { slug: "food_drink", subs: ["fruit", "vegetables", "drinks", "cooking", "meals", "snacks"] },
    "furniture": { slug: "furniture", subs: ["rooms", "appliances", "household_items"] },
    "jobs": { slug: "jobs", subs: ["professions", "workplace", "career"] },
    "nature": { slug: "nature", subs: ["landscape", "weather", "plants", "seasons"] },
    "numbers": { slug: "numbers", subs: ["cardinal", "ordinal", "fractions"] },
    "people": { slug: "people", subs: ["family", "relationships", "nationalities", "physical_desc"] },
    "places": { slug: "places", subs: ["city", "buildings", "transport", "geography"] },
    "school": { slug: "school", subs: ["stationery", "subjects", "classroom"] },
    "shopping": { slug: "shopping", subs: ["money", "stores", "items"] },
    "sports": { slug: "sports", subs: ["team_sports", "individual", "gym", "outdoor"] },
    "technology": { slug: "technology", subs: ["devices", "internet", "software"] },
    "time": { slug: "time", subs: ["clock", "days", "months", "seasons", "periods"] },
    "travel": { slug: "travel", subs: ["transport", "accommodation", "tourism"] },
    "work": { slug: "work", subs: ["office", "meetings", "documents", "business_lang"] },
    "music": { slug: "music", subs: ["instruments", "genres", "performance"] },
    "art_culture": { slug: "art_culture", subs: ["art", "literature", "film", "theatre"] },
    "health_medicine": { slug: "health_medicine", subs: ["symptoms", "treatment", "hospital", "wellbeing"] },
    "language": { slug: "language", subs: ["grammar_terms", "phonetics", "discourse"] },
    "environment": { slug: "environment", subs: ["ecology", "climate", "recycling"] },
    "social": { slug: "social", subs: ["celebrations", "going_out", "invitations"] },
    "describing": { slug: "describing", subs: ["size_shape", "texture", "quality", "quantity"] }
};

const THEME_MAP = {
    "basic_foods_A1": "food_drink", "Pets": "animals", "social_life": "social", "Daily life": "social",
    "socit": "social", "thique": "social", "nature_A1": "nature", "animals_A1": "animals",
    "places_A1": "places", "time_A1": "time", "people_A1": "people", "health_A1": "health_medicine",
    "work_A1": "work", "travel_A1": "travel", "art_culture_A1": "art_culture", "art": "art_culture",
    "health": "health_medicine", "numbers_A1": "numbers", "shopping_A1": "shopping",
    "technology_A1": "technology", "grammar_elements": "language", "grammar": "language",
    "fluency": "language", "opinions": "social", "home_A1": "furniture", "transport_A1": "travel",
    "hobbies_A1": "social", "tech_A1": "technology", "ethics_philosophy": "social",
    "furniture_objects_A1": "furniture", "workplace_basics_A1": "work", "leisure_activities_A1": "social",
    "immediate_family_A1": "people", "routine_A1": "social", "relationships_dating_A2": "people",
    "psychological_concepts_C1": "emotions", "work_identity_meaning_C2": "work", "prepositions_place_A1": "places",
    "address_location_A1": "places", "seasons_A1": "time", "weather_A1": "nature"
};

function normalizeTheme(theme, file) {
    if (file === 'grammar.js' || file === 'grammar_elements.js' || file === 'verbs.js') return "language";
    if (!theme) return "social";
    let slug = theme.toLowerCase().replace(/_a[12]$|_b[12]$|_c[12]$/, "");
    if (THEME_MAP[theme]) slug = THEME_MAP[theme];
    if (THEME_MAP[slug]) slug = THEME_MAP[slug];
    if (!THEMES[slug]) {
        console.warn(`Unmapped theme: ${theme} (resolved to ${slug}) in ${file}`);
        return "social";
    }
    return slug;
}

const SUB_THEME_MAP = {
    "pomme": "fruit", "banane": "fruit", "orange": "fruit", "fraise": "fruit", "raisin": "fruit",
    "carotte": "vegetables", "tomate": "vegetables", "pomme de terre": "vegetables",
    "eau": "drinks", "café": "drinks", "thé": "drinks", "vin": "drinks", "bière": "drinks",
    "chien": "pets", "chat": "pets", "lapin": "pets",
    "lundi": "days", "mardi": "days", "mercredi": "days", "jeudi": "days", "vendredi": "days", "samedi": "days", "dimanche": "days",
    "janvier": "months", "février": "months", "mars": "months", "avril": "months", "mai": "months", "juin": "months",
    "juillet": "months", "août": "months", "septembre": "months", "octobre": "months", "novembre": "months", "décembre": "months"
};

function detectSubTheme(word, theme) {
    if (!word) return null;
    const lower = word.toLowerCase();
    for (const [kw, sub] of Object.entries(SUB_THEME_MAP)) {
        if (lower.includes(kw)) {
            if (THEMES[theme] && THEMES[theme].subs.includes(sub)) return sub;
        }
    }
    return null;
}

const levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];
const rootDir = "js/data/romance/fr";

levels.forEach(level => {
    const levelPath = path.join(rootDir, level);
    if (!fs.existsSync(levelPath)) return;
    const levelSlug = level.replace("-", "_");
    const files = fs.readdirSync(levelPath).filter(f => f.endsWith('.js')).sort();

    files.forEach(file => {
        if (file === 'speaking.js') return;
        const filePath = path.join(levelPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const arrayStart = content.indexOf('[');
        if (arrayStart === -1) return;
        let arrayEnd = -1, depth = 0;
        for (let i = arrayStart; i < content.length; i++) {
            if (content[i] === '[') depth++;
            else if (content[i] === ']') depth--;
            if (depth === 0) { arrayEnd = i; break; }
        }
        if (arrayEnd === -1) return;

        const arrayContentStr = content.substring(arrayStart, arrayEnd + 1);
        let entries;
        try {
            entries = new Function(`return ${arrayContentStr}`)();
        } catch (e) { return; }

        if (!Array.isArray(entries) || entries.length === 0) return;

        const seenWords = new Set();
        const deduplicated = [];
        entries.forEach(e => {
            const w = e.word || e.topic || e.t || e.q || e.quote || e.verb || e.phrase || e.text || e.id;
            if (!w) return;
            const key = String(w).toLowerCase();
            if (seenWords.has(key)) {
                const i = deduplicated.findIndex(prev => String(prev.word || prev.topic || prev.t || prev.q || prev.quote || prev.verb || prev.phrase || prev.text || prev.id).toLowerCase() === key);
                console.log(`Deleting duplicate: "${w}" in ${filePath}`);
                if (Object.keys(e).length > Object.keys(deduplicated[i]).length) deduplicated[i] = e;
            } else {
                seenWords.add(key);
                deduplicated.push(e);
            }
        });

        const fileThemeCounters = {};

        const processed = deduplicated.map(e => {
            const theme = normalizeTheme(e.theme || e.tag || (e.tags ? e.tags[0] : null), file);
            const word = e.word || e.topic || e.t || e.q || e.quote || e.verb || e.phrase || e.text || e.id;

            fileThemeCounters[theme] = (fileThemeCounters[theme] || 0) + 1;
            const seq = String(fileThemeCounters[theme]).padStart(3, '0');

            const newEntry = {
                id: `fr_${levelSlug}_${theme}_${seq}`,
                word: word,
                lang: "fr",
                level: levelSlug,
                theme: theme,
                sub_theme: e.sub_theme || detectSubTheme(word, theme) || null,
                form: e.form || (file === 'verbs.js' ? 'verb' : (file === 'adjectives.js' ? 'adjective' : (file === 'vocabulary.js' ? 'noun' : 'phrase'))),
                definitions: e.definitions || [{ text: e.definition || e.meaning || e.translation || word, examples: e.examples || [] }]
            };

            for (const key in e) {
                if (!['id', 'theme', 'tag', 'tags', 'word', 'topic', 't', 'q', 'quote', 'verb', 'phrase', 'text', 'definitions', 'definition', 'meaning', 'translation', 'examples', 'lang', 'level', 'sub_theme', 'form'].includes(key)) {
                    newEntry[key] = e[key];
                } else if (['form', 'definitions'].includes(key) && e[key]) {
                   newEntry[key] = e[key];
                }
            }
            return newEntry;
        });

        const newArrayStr = JSON.stringify(processed, null, 4);
        const newContent = content.substring(0, arrayStart) + newArrayStr + content.substring(arrayEnd + 1);
        fs.writeFileSync(filePath, newContent);
    });
});
console.log("Transformation complete.");
