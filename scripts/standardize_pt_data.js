const fs = require('fs');
const path = require('path');

const THEME_MAP = {
    // Portuguese Labels to Canonical Slugs
    'Autodesenvolvimento': 'psychology',
    'Ciência e tecnologia': 'technology',
    'Comunicação': 'language',
    'Economia': 'social',
    'Educação': 'school',
    'Entretenimento': 'social',
    'Estética': 'art_culture',
    'Família': 'people',
    'Filosofia': 'psychology',
    'Filosofia Política': 'social',
    'História & Filosofia': 'art_culture',
    'Identidade': 'people',
    'Identidade & Filosofia': 'psychology',
    'Language': 'language',
    'Lifestyle': 'social',
    'Linguística & Filosofia': 'language',
    'Media & Epistemologia': 'technology',
    'Mídia e cultura': 'art_culture',
    'Natureza humana': 'psychology',
    'Pensamento crítico': 'psychology',
    'Personalidade': 'people',
    'Pessoas': 'people',
    'Psicologia': 'psychology',
    'Relacionamentos': 'psychology',
    'Resiliência': 'psychology',
    'Saúde': 'health_medicine',
    'Social life': 'social',
    'Sociedade': 'social',
    'Society': 'social',
    'Technology': 'technology',
    'Tecnologia': 'technology',
    'Tecnologia & Epistemologia': 'technology',
    'Trabalho': 'work',
    'Travel': 'travel',
    'Viagem': 'travel',
    'Vida moderna': 'social',
    'Vida social': 'social',
    'Ética': 'psychology',
    'Ética & Espaço': 'psychology',

    // Legacy Suffix Maps
    'basic_foods_A1': 'food_drink',
    'seasons_A1': 'nature',
    'hobbies_A1': 'social',
    'transport_A1': 'travel',
    'home_A1': 'furniture',
    'time_A1': 'time',
    'travel_A1': 'travel',
    'work_A1': 'work',
    'tech_A1': 'technology',
    'clothes_A1': 'clothes',
    'social_A1': 'social',
    'life_A1': 'social',
    'nature_A1': 'nature',
    'health_A1': 'health_medicine',
    'immediate_family_A1': 'people',
    'rooms_of_a_home_A1': 'furniture',
    'daily_work_routines_A1': 'work',
    'animals_A1': 'animals',
    'leisure_activities_A1': 'social',
    'seasons_climate_A1': 'nature',
    'job_titles_professions_A1': 'jobs',
    'basic_positive_emotions_A1': 'emotions',
    'colours_patterns_A1': 'colours',
    'numbers_0_9_A1': 'numbers',
    'drinks_A1': 'food_drink',
    'countries_capitals_A1': 'places',
    'furniture_objects_A1': 'furniture',
    'local_places_services_A1': 'places',
    'music_A1': 'music',
    'frequency_adverbs_A1': 'language',
    'conjunctions_connectors_A1': 'language',
    'personal_identity_A1': 'people',
    'Pets': 'animals',
    'Daily life': 'social',
    'Drinks': 'food_drink',
    'Food': 'food_drink',
    'Weather': 'nature',
    'Places': 'places',
    'People': 'people',
    'Free time': 'social',
    'Sport': 'sports',
    'Entertainment': 'art_culture',
    'booking_planning_a_trip_A2': 'travel',
    'restaurants_ordering_A2': 'social',
    'transport_travel_A2': 'travel',
    'leisure_hobbies_A2': 'social',
    'personality_character_A2': 'people',
    'internet_social_media_A2': 'technology',
    'social_emotions_A2': 'emotions',
    'interests_hobbies_A2': 'social',
    'weather_climate_A2': 'nature',
    'customs_traditions_A2': 'social',
    'neighbourhood_local_A2': 'places',
    'daily_work_routines_A2': 'work',
    'shopping_consumerism_A2': 'shopping',
    'diet_nutrition_A2': 'health_medicine'
};

const SUB_THEME_MAP = {
    'basic_foods_A1': 'meals',
    'seasons_A1': 'seasons',
    'transport_A1': 'transport',
    'home_A1': 'rooms',
    'immediate_family_A1': 'family',
    'rooms_of_a_home_A1': 'rooms',
    'daily_work_routines_A1': 'workplace',
    'seasons_climate_A1': 'seasons',
    'job_titles_professions_A1': 'professions',
    'basic_positive_emotions_A1': 'positive',
    'colours_patterns_A1': 'basic',
    'numbers_0_9_A1': 'cardinal',
    'drinks_A1': 'drinks',
    'countries_capitals_A1': 'geography',
    'local_places_services_A1': 'city',
    'frequency_adverbs_A1': 'grammar_terms',
    'conjunctions_connectors_A1': 'grammar_terms',
    'Pets': 'pets',
    'Drinks': 'drinks',
    'Weather': 'weather',
    'Sport': 'individual',
    'booking_planning_a_trip_A2': 'tourism',
    'restaurants_ordering_A2': 'going_out',
    'transport_travel_A2': 'transport',
    'internet_social_media_A2': 'internet',
    'weather_climate_A2': 'weather',
    'customs_traditions_A2': 'celebrations',
    'Psicologia': 'behavior',
    'Relacionamentos': 'relationships'
};

function normalizeTheme(theme, fileName) {
    if (!theme) {
        const baseName = path.basename(fileName, '.js');
        if (baseName === 'grammar' || baseName === 'grammar_elements') return 'language';
        if (baseName === 'quotes') return 'art_culture';
        return 'social';
    }
    if (THEME_MAP[theme]) return THEME_MAP[theme];

    // Fallback: lowercase, underscores, remove suffixes
    return theme.toLowerCase()
        .replace(/ & /g, '_')
        .replace(/ e /g, '_')
        .replace(/[áàâã]/g, 'a')
        .replace(/[éê]/g, 'e')
        .replace(/[í]/g, 'i')
        .replace(/[óôõ]/g, 'o')
        .replace(/[ú]/g, 'u')
        .replace(/[ç]/g, 'c')
        .replace(/[^a-z0-9_]/g, '_')
        .replace(/_{2,}/g, '_')
        .replace(/_$/, '')
        .replace(/_[abc][12]$/, '');
}

const levelSequences = {};

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract data array - handle cases where it might have variable refs like pronouns
    const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!dataMatch) return;

    let data;
    try {
        const pronouns = ["eu", "tu", "ele", "ela", "nós", "vós", "eles", "elas"];
        // Safe enough for these specific data files
        data = eval(`(function(pronouns){ return ${dataMatch[1]}; })`)(pronouns);
    } catch (e) {
        console.error(`Error parsing ${filePath}: ${e.message}`);
        return;
    }

    const dirName = path.basename(path.dirname(filePath));
    const levelSlug = dirName.replace('-', '_');
    if (!levelSequences[levelSlug]) levelSequences[levelSlug] = {};

    const uniqueEntries = [];
    const seen = new Map();
    data.forEach(entry => {
        const word = entry.word || entry.topic || entry.t || entry.q || entry.verb;
        if (seen.has(word)) {
            const idx = seen.get(word);
            if (Object.keys(entry).length > Object.keys(uniqueEntries[idx]).length) {
                console.log(`DEDUPE: Keeping more complete entry for "${word}" in ${filePath}`);
                uniqueEntries[idx] = entry;
            } else {
                console.log(`DEDUPE: Removing duplicate entry for "${word}" in ${filePath}`);
            }
        } else {
            seen.set(word, uniqueEntries.length);
            uniqueEntries.push(entry);
        }
    });

    const processedData = uniqueEntries.map(entry => {
        const newEntry = { ...entry };
        newEntry.word = entry.word || entry.topic || entry.t || entry.q || entry.verb;
        newEntry.lang = 'pt';
        newEntry.level = levelSlug;

        const rawTheme = newEntry.theme || newEntry.tag;
        newEntry.theme = normalizeTheme(rawTheme, filePath);
        newEntry.sub_theme = newEntry.sub_theme || SUB_THEME_MAP[rawTheme] || null;
        delete newEntry.tag;

        if (!newEntry.form) {
            const base = path.basename(filePath, '.js');
            if (base === 'grammar' || newEntry.verb) newEntry.form = 'verb';
            else if (base === 'adjectives') newEntry.form = 'adjective';
            else if (base === 'nouns') newEntry.form = 'noun';
            else if (['fluency', 'opinions', 'debates', 'quotes'].includes(base)) newEntry.form = 'phrase';
            else newEntry.form = 'other';
        }

        if (!newEntry.definitions) {
            newEntry.definitions = [{ text: newEntry.word, examples: [] }];
        }

        const t = newEntry.theme;
        levelSequences[levelSlug][t] = (levelSequences[levelSlug][t] || 0) + 1;
        const seq = String(levelSequences[levelSlug][t]).padStart(3, '0');
        newEntry.id = `pt_${levelSlug}_${t}_${seq}`;

        return newEntry;
    });

    const dataStr = JSON.stringify(processedData, null, 4).replace(/"pronouns"/g, 'pronouns');
    const base = path.basename(filePath, '.js');

    let template = '';
    if (base === 'grammar') {
        template = `(function() {
    const pronouns = ["eu", "tu", "ele", "ela", "nós", "vós", "eles", "elas"];
    const data = ${dataStr};
    const lang = "pt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();`;
    } else if (base === 'grammar_elements') {
        template = `(function() {
    const data = ${dataStr};
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    } else if (['fluency', 'opinions', 'debates', 'quotes'].includes(base)) {
        const key = base === 'fluency' ? 'talkThatTalk' : base;
        template = `(function() {
    const data = ${dataStr};
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["${key}"]) window.speakingData[lang]["${key}"] = [];
    window.speakingData[lang]["${key}"].push(...data);
})();`;
    } else {
        // Fallback for any other files
        template = `(function() {
    const data = ${dataStr};
    const lang = "pt";
    // Unknown file type registration fallback
})();`;
    }

    fs.writeFileSync(filePath, template);
}

const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
levels.forEach(l => {
    const dir = `js/data/romance/pt/${l}`;
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).sort().forEach(f => {
        if (f.endsWith('.js') && !['alphabets.js', 'translations.js', 'speaking.js'].includes(f)) {
            processFile(path.join(dir, f));
        }
    });
});
