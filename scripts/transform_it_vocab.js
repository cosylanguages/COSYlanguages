const fs = require('fs');
const path = require('path');

const themeMap = {
    'academic_vocabulary': 'language',
    'address_location': 'places',
    'aesthetics_criticism': 'art_culture',
    'animals_nature': 'nature',
    'asking_answering_questions': 'language',
    'basic_foods': 'food_drink',
    'basic_intensifiers': 'describing',
    'basic_technology_devices': 'technology',
    'buying_property': 'shopping',
    'career_development': 'jobs',
    'colours_patterns': 'colours',
    'conjunctions_connectors': 'language',
    'diet_nutrition': 'food_drink',
    'economy_labour_market': 'work',
    'environment_policy': 'environment',
    'environment_sustainability': 'environment',
    'epistemology_truth': 'language',
    'frequency_adverbs': 'time',
    'furniture_objects': 'furniture',
    'giving_opinions': 'language',
    'globalisation_trade': 'work',
    'health_body': 'body',
    'healthcare_systems': 'health_medicine',
    'hobbies': 'social',
    'home': 'furniture',
    'immediate_family': 'people',
    'interests_hobbies': 'social',
    'leisure_activities': 'social',
    'media_news': 'technology',
    'mental_health_wellbeing': 'health_medicine',
    'neighbourhood_local': 'places',
    'numbers_0_9': 'numbers',
    'ontology_metaphysics': 'language',
    'opinion_debate': 'language',
    'organisational_culture': 'work',
    'personal_identity': 'people',
    'politics_governance': 'work',
    'power_institutions': 'work',
    'prepositions_place': 'language',
    'prepositions_time': 'language',
    'psychoanalysis_unconscious': 'health_medicine',
    'psychological_concepts': 'health_medicine',
    'relationships_dating': 'people',
    'routine': 'time',
    'science_tech_society': 'technology',
    'seasons': 'time',
    'social_life': 'social',
    'society_community': 'social',
    'tech': 'technology',
    'technology_privacy': 'technology',
    'transport': 'travel',
    'transport_travel': 'travel',
    'travel_cultural': 'travel',
    'weather': 'nature',
    'work_identity_meaning': 'work',
    'workplace_basics': 'work',
    'basic_positive_emotions': 'emotions',
    'booking_planning_a_trip': 'travel',
    'countries_capitals': 'places',
    'culture_arts': 'art_culture',
    'customs_traditions': 'social',
    'daily_work_routines': 'work',
    'drinks': 'food_drink',
    'ethics_philosophy': 'art_culture',
    'feelings_emotions': 'emotions',
    'internet_social_media': 'technology',
    'job_titles_professions': 'jobs',
    'leisure_hobbies': 'social',
    'local_places_services': 'places',
    'personality_character': 'people',
    'restaurants_ordering': 'food_drink',
    'rooms_of_a_home': 'furniture',
    'seasons_climate': 'nature',
    'shopping_consumerism': 'shopping',
    'social_emotions': 'emotions',
    'society_politics': 'work',
    'weather_climate': 'nature',
    'work_employment': 'work',
    'health': 'health_medicine',
    'other': 'social'
};

const approvedThemes = new Set([
    'animals', 'body', 'clothes', 'colours', 'emotions', 'food_drink', 'furniture', 'jobs', 'nature', 'numbers', 'people', 'places', 'school', 'shopping', 'sports', 'technology', 'time', 'travel', 'work', 'music', 'art_culture', 'health_medicine', 'language', 'environment', 'social', 'describing'
]);

function normalizeTheme(theme, file) {
    if (!theme || theme === 'other') {
        if (file === 'verbs.js' || file === 'grammar.js' || file === 'grammar_elements.js') return 'language';
        if (file === 'adjectives.js') return 'describing';
        if (file === 'animals.js') return 'animals';
        if (file === 'food.js' || file === 'drinks.js') return 'food_drink';
        if (file === 'people.js' || file === 'family.js') return 'people';
        if (file === 'places.js' || file === 'locations.js') return 'places';
        return 'social';
    }

    let slug = theme.replace(/_[ABC][12]$/, '');

    if (approvedThemes.has(slug)) return slug;
    if (themeMap[theme]) return themeMap[theme];
    if (themeMap[slug]) return themeMap[slug];

    for (const approved of approvedThemes) {
        if (slug.includes(approved)) return approved;
    }

    return 'social';
}

function getSubTheme(theme, word, existingSubTheme) {
    if (existingSubTheme) return existingSubTheme;
    const lowerWord = word ? String(word).toLowerCase() : '';
    if (theme === 'food_drink') {
        if (lowerWord.match(/bevanda|caffè|tè|acqua|succo|vino|latte|birra|juice|coffee|tea|water|drinks/i)) return 'drinks';
        if (lowerWord.match(/mela|banana|arancia|frutta|apple|orange|fruit/i)) return 'fruit';
        if (lowerWord.match(/carota|verdura|pomodoro|vegetable|tomato/i)) return 'vegetables';
        if (lowerWord.match(/pizza|pasta|lasagna|risotto/i)) return 'meals';
    }
    if (theme === 'animals') {
        if (lowerWord.match(/cane|gatto|coniglio|criceto|dog|cat|rabbit|hamster/i)) return 'pets';
        if (lowerWord.match(/mucca|maiale|pecora|gallina|cow|pig|sheep|chicken/i)) return 'farm';
        if (lowerWord.match(/leone|tigre|elefante|lion|tiger|elephant/i)) return 'wild';
    }
    if (theme === 'people') {
        if (lowerWord.match(/madre|padre|fratello|sorella|nonno|nonna|figlio|figlia|mamma|papà/i)) return 'family';
        if (lowerWord.match(/amico|amica|fidanzato|fidanzata/i)) return 'relationships';
    }
    if (theme === 'places') {
        if (lowerWord.match(/città|paese|villaggio|city|town|village/i)) return 'city';
        if (lowerWord.match(/casa|appartamento|edificio|house|apartment|building/i)) return 'buildings';
        if (lowerWord.match(/treno|autobus|aereo|auto|macchina|train|bus|plane|car/i)) return 'transport';
    }
    if (theme === 'time') {
        if (lowerWord.match(/lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica/i)) return 'days';
        if (lowerWord.match(/gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre/i)) return 'months';
        if (lowerWord.match(/estate|inverno|primavera|autunno|summer|winter|spring|autumn/i)) return 'seasons';
    }
    return null;
}

const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
const baseDir = 'js/data/romance/it';
const globalThemeSequences = {};

levels.forEach(levelDir => {
    const dirPath = path.join(baseDir, levelDir);
    if (!fs.existsSync(dirPath)) return;

    const levelSlug = levelDir.replace('-', '_');
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js') && f !== 'speaking.js');

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const dataMatch = content.match(/(?:const data|window\.[a-zA-Z0-9.]+)\s*=\s*(\[\s*\{[\s\S]*\}\s*\])/);
        if (!dataMatch) return;

        let dataStr = dataMatch[1];
        let bracketCount = 0;
        let endIndex = -1;
        for (let i = 0; i < dataStr.length; i++) {
            if (dataStr[i] === '[') bracketCount++;
            else if (dataStr[i] === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    endIndex = i + 1;
                    break;
                }
            }
        }
        if (endIndex !== -1) {
            dataStr = dataStr.substring(0, endIndex);
        }

        let data;
        try {
            data = eval(`(${dataStr})`);
        } catch (e) {
            console.error(`Error parsing ${filePath}: ${e.message}`);
            return;
        }

        const seenWords = new Map();
        const newData = [];

        data.forEach(entry => {
            const originalWord = entry.word || entry.verb || entry.topic || entry.t || entry.phrase || entry.q || entry.text;
            if (!entry.word) entry.word = originalWord;

            if (!entry.definitions) {
                entry.definitions = [{ text: entry.word || '', examples: entry.h || [] }];
            } else if (Array.isArray(entry.definitions)) {
                entry.definitions.forEach(d => {
                    if (!d.text) d.text = entry.word || '';
                    if (!d.examples) d.examples = [];
                });
            }

            if (!entry.form || (entry.form === 'phrase' && (file === 'verbs.js' || file === 'grammar.js'))) {
                if (file === 'verbs.js' || file === 'grammar.js') entry.form = 'verb';
                else if (file === 'adjectives.js') entry.form = 'adjective';
                else if (file === 'nouns.js') entry.form = 'noun';
                else if (!entry.form) entry.form = 'phrase';
            }

            const wordKey = entry.word || 'undefined';
            if (seenWords.has(wordKey)) {
                const existing = seenWords.get(wordKey);
                const entryScore = Object.keys(entry).filter(k => entry[k]).length;
                const existingScore = Object.keys(existing).filter(k => existing[k]).length;
                if (entryScore > existingScore) {
                    const idx = newData.indexOf(existing);
                    newData[idx] = entry;
                    seenWords.set(wordKey, entry);
                }
                return;
            }
            seenWords.set(wordKey, entry);
            newData.push(entry);
        });

        newData.forEach(entry => {
            entry.lang = 'it';
            entry.level = levelSlug;
            entry.theme = normalizeTheme(entry.theme, file);
            entry.sub_theme = getSubTheme(entry.theme, entry.word, entry.sub_theme);

            const levelThemeKey = `${levelSlug}_${entry.theme}`;
            if (!globalThemeSequences[levelThemeKey]) globalThemeSequences[levelThemeKey] = 0;
            globalThemeSequences[levelThemeKey]++;
            const sequence = String(globalThemeSequences[levelThemeKey]).padStart(3, '0');
            entry.id = `it_${levelSlug}_${entry.theme}_${sequence}`;
        });

        const newArrayStr = JSON.stringify(newData, null, 4);
        const newContent = content.replace(dataStr, newArrayStr);
        fs.writeFileSync(filePath, newContent);
        console.log(`Processed ${filePath}`);
    });
});
