const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CANONICAL_THEMES = [
    "animals", "body", "clothes", "colours", "emotions", "food_drink", "furniture",
    "jobs", "nature", "numbers", "people", "places", "school", "shopping", "sports",
    "technology", "time", "travel", "work", "music", "art_culture", "health_medicine",
    "language", "environment", "social", "describing"
];

const THEME_MAPPING = {
    "academic_vocabulary": "language", "accommodation": "travel", "actions": "describing",
    "activities": "leisure", "adjectives": "describing", "appearance": "body",
    "appliances": "furniture", "around_the_house": "furniture", "art": "art_culture",
    "at_home": "furniture", "at_the_airport": "travel", "at_work": "work",
    "buildings": "places", "business": "work", "car": "places",
    "celebrations": "social", "character": "people", "city": "places",
    "city_life": "places", "classroom": "school", "clothing": "clothes",
    "clothes": "clothes", "communication": "technology", "computers": "technology",
    "cooking": "food_drink", "countries": "places", "daily_routine": "time",
    "describing_people": "people", "describing_places": "places", "describing_things": "describing",
    "devices": "technology", "directions": "places", "dishes": "food_drink",
    "drinks": "food_drink", "education": "school", "entertainment": "leisure",
    "everyday_objects": "furniture", "family": "people", "feelings": "emotions",
    "festivals": "social", "films": "art_culture", "finance": "shopping",
    "fitness": "sports", "food": "food_drink", "fruit": "food_drink",
    "garden": "nature", "geography": "places", "hobbies": "leisure",
    "holidays": "travel", "hospital": "health_medicine", "hotel": "travel",
    "household": "furniture", "housework": "furniture", "illness": "health_medicine",
    "instruments": "music", "internet": "technology", "jobs": "jobs",
    "kitchen": "furniture", "landscape": "nature", "leisure": "leisure",
    "literature": "art_culture", "locations": "places", "materials": "describing",
    "meals": "food_drink", "media": "technology", "medical": "health_medicine",
    "money": "shopping", "months": "time", "nationalities": "people",
    "occupations": "jobs", "office": "work", "outer_space": "nature",
    "personality": "people", "pets": "animals", "phone": "technology",
    "physical_appearance": "body", "plants": "nature", "professions": "jobs",
    "relationships": "people", "restaurant": "food_drink", "rooms": "furniture",
    "school_subjects": "school", "sea_animals": "animals", "seasons": "time",
    "senses": "body", "shades": "colours", "shapes": "describing",
    "shops": "shopping", "sickness": "health_medicine", "skills": "work",
    "space": "nature", "subjects": "school", "tools": "technology",
    "town": "places", "transport": "travel", "transportation": "travel",
    "travel": "travel", "vegetables": "food_drink", "vehicles": "travel",
    "weather": "nature", "wild_animals": "animals", "workplace": "work",
    "address_location": "places", "landscape_geography": "places", "places_geography": "places",
    "personality_character": "people", "society_community": "social", "abstract_description": "describing",
    "knowledge_epistemology": "language", "power_institutions": "work", "psychological_states": "emotions",
    "language_persuasion": "language", "advanced_register": "language", "ontology_metaphysics": "language",
    "political_theory": "social", "epistemology_knowledge": "language", "meta_argument_deconstruction": "language",
    "civilisation_history": "social", "rhetoric_persuasion": "language", "ethics_advanced": "social",
    "basic_foods": "food_drink", "hobbies": "leisure", "seasons": "time", "life": "social",
    "home": "furniture", "health": "health_medicine", "furniture_objects": "furniture",
    "work_life": "work", "education_school": "school", "tech_gadgets": "technology",
    "travel_tourism": "travel", "social_life": "social", "nature_environment": "nature",
    "animals_nature": "animals", "identity_self": "people", "relationships_dating": "people",
    "hobbies_interests": "leisure", "describing_objects": "describing", "house_home": "furniture",
    "travel_holidays": "travel", "family_friends": "people", "family_life": "people",
    "shopping_money": "shopping", "weather_nature": "nature", "grammar_elements": "language",
    "phrasal_verbs": "language", "collocations": "language", "idioms": "language"
};

const SUB_THEME_MAPPING = {
    "cat": "pets", "dog": "pets", "rabbit": "pets", "hamster": "pets",
    "lion": "wild", "elephant": "wild", "monkey": "wild", "bear": "wild", "tiger": "wild",
    "cow": "farm", "pig": "farm", "sheep": "farm", "chicken": "farm", "horse": "farm",
    "spider": "insects", "bee": "insects", "ant": "insects", "butterfly": "insects",
    "shark": "sea", "whale": "sea", "dolphin": "sea", "octopus": "sea", "fish": "sea",
    "red": "basic", "blue": "basic", "green": "basic", "yellow": "basic",
    "face": "face", "head": "face", "eye": "face", "nose": "face", "mouth": "face",
    "arm": "limbs", "leg": "limbs", "hand": "limbs", "foot": "limbs",
    "heart": "organs", "lung": "organs", "brain": "organs",
    "shirt": "everyday", "t-shirt": "everyday", "jeans": "everyday", "trousers": "everyday",
    "suit": "formal", "dress": "formal", "tie": "formal",
    "apple": "fruit", "banana": "fruit", "orange": "fruit",
    "carrot": "vegetables", "potato": "vegetables", "tomato": "vegetables",
    "water": "drinks", "coffee": "drinks", "tea": "drinks", "juice": "drinks"
};

const levelMap = {
    "starter": "starter", "A1": "starter", "elementary": "elementary", "A2": "elementary",
    "intermediate": "intermediate", "B1": "intermediate", "upper-intermediate": "upper_intermediate",
    "B2": "upper_intermediate", "advanced": "advanced", "C1": "advanced",
    "proficiency": "proficiency", "C2": "proficiency"
};

const globalSequences = {};

function normalizeTheme(theme) {
    if (!theme) return "describing";
    let slug = theme.toLowerCase().replace(/(_a1|_a2|_b1|_b2|_c1|_c2)$/, '').replace(/\s+/g, '_');
    if (THEME_MAPPING[slug]) return THEME_MAPPING[slug];
    if (CANONICAL_THEMES.includes(slug)) return slug;
    for (const c of CANONICAL_THEMES) if (slug.includes(c)) return c;
    return slug;
}

function getSubTheme(entry, theme) {
    if (entry.sub_theme) return entry.sub_theme;
    const word = (entry.word || entry.verb || entry.text || "").toLowerCase();
    if (SUB_THEME_MAPPING[word]) return SUB_THEME_MAPPING[word];
    return null;
}

function findArrayRange(content) {
    let start = content.indexOf('[');
    while (start !== -1) {
        let bracketCount = 0;
        for (let i = start; i < content.length; i++) {
            if (content[i] === '[') bracketCount++;
            else if (content[i] === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    const candidate = content.substring(start, i + 1);
                    if (candidate.includes('{')) return { start, end: i + 1 };
                    break;
                }
            }
        }
        start = content.indexOf('[', start + 1);
    }
    return null;
}

function findDataInSandbox(obj, seen = new Set()) {
    if (!obj || typeof obj !== 'object' || seen.has(obj)) return null;
    seen.add(obj);
    if (Array.isArray(obj)) {
        if (obj.length > 0 && (obj[0].word || obj[0].text || obj[0].topic || obj[0].q || obj[0].t || obj[0].verb || obj[0].id)) return obj;
        return null;
    }
    for (const k in obj) {
        if (k === 'COSY' || k === 'global') continue;
        if (k === 'window' && obj[k] !== obj) {
            const res = findDataInSandbox(obj[k], seen);
            if (res) return res;
        } else if (k !== 'window') {
            const res = findDataInSandbox(obj[k], seen);
            if (res) return res;
        }
    }
    return null;
}

function processFile(filepath) {
    console.log(`Processing ${filepath}...`);
    const filename = path.basename(filepath);
    const isSpecialFile = filename.includes('quotes') || filename.includes('debates') || filename.includes('fluency') || filename.includes('opinions') || filename.includes('grammar') || filename.includes('speaking');
    const content = fs.readFileSync(filepath, 'utf8');
    const pathParts = filepath.split('/');
    const levelDir = pathParts[pathParts.length - 2];
    const level = levelMap[levelDir] || levelDir.replace('-', '_');
    if (!globalSequences[level]) globalSequences[level] = {};

    const sandbox = {
        window: {
            vocabularyData: { en: [] }, verbsData: { en: [] }, speakingData: { en: {} },
            locationsData: { en: [] }, peopleData: { en: [] }, adjectivesData: { en: [] }, nationalitiesData: { en: [] },
            grammarElements: { en: [] }
        },
        COSY: { getCourseStatus: () => ({}) }
    };

    try {
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);
        let data = findDataInSandbox(sandbox);
        let range = findArrayRange(content);

        if (!data || !range) { console.log(`  No data/range in ${filepath}`); return; }

        const seenKeys = new Map();
        const deduplicatedKeys = [];
        data.forEach(entry => {
            const entryKey = (entry.word || entry.verb || entry.text || entry.q || entry.t || entry.topic || JSON.stringify(entry)).toLowerCase();
            if (seenKeys.has(entryKey)) {
                if (Object.keys(entry).length > Object.keys(seenKeys.get(entryKey)).length) seenKeys.set(entryKey, entry);
                return;
            }
            seenKeys.set(entryKey, entry);
            deduplicatedKeys.push(entryKey);
        });

        const finalData = deduplicatedKeys.map(k => seenKeys.get(k)).map(entry => {
            const rawTheme = entry.theme || entry.topic || entry.t || 'describing';
            const normalizedTheme = normalizeTheme(rawTheme);
            if (!globalSequences[level][normalizedTheme]) globalSequences[level][normalizedTheme] = 0;
            globalSequences[level][normalizedTheme]++;
            const sequence = String(globalSequences[level][normalizedTheme]).padStart(3, '0');
            const id = `en_${level}_${normalizedTheme}_${sequence}`;

            const { id: oldId, lang: oldLang, level: oldLevel, theme: oldTheme, sub_theme: oldSub, ...rest } = entry;
            const newEntry = { id, ...rest, lang: "en", level, theme: normalizedTheme, sub_theme: getSubTheme(entry, normalizedTheme) };
            if (!isSpecialFile) {
                if (!newEntry.word) newEntry.word = entry.word || entry.verb || entry.t || entry.topic || entry.q;
                if (!newEntry.form) newEntry.form = entry.form || "other";
                if (!newEntry.definitions) newEntry.definitions = entry.definitions || [{ text: newEntry.word, examples: [] }];
                delete newEntry.verb; delete newEntry.t; delete newEntry.topic; delete newEntry.q;
            }
            return newEntry;
        });

        const newContent = content.substring(0, range.start) + JSON.stringify(finalData, null, 4) + content.substring(range.end);
        fs.writeFileSync(filepath, newContent);
    } catch (e) { console.error(`  Error in ${filepath}: ${e.message}`); }
}

const targetDirs = [
    'js/data/germanic/en/starter', 'js/data/germanic/en/elementary', 'js/data/germanic/en/intermediate',
    'js/data/germanic/en/upper-intermediate', 'js/data/germanic/en/advanced', 'js/data/germanic/en/proficiency',
    'vocabulary/en/A1', 'vocabulary/en/A2', 'vocabulary/en/B1', 'vocabulary/en/B2', 'vocabulary/en/C1', 'vocabulary/en/C2'
];

targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).sort();
    files.forEach(file => { if (file.endsWith('.js')) processFile(path.join(dir, file)); });
});
