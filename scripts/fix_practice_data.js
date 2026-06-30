const fs = require('fs');
const path = require('path');

const THEMES_FILE = 'THEMES.md';
const MANIFEST_FILE = 'vocabulary/manifest.json';

function getValidThemes() {
    if (!fs.existsSync(THEMES_FILE)) return [];
    const content = fs.readFileSync(THEMES_FILE, 'utf8');
    const themes = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        const match = line.match(/^\| ([a-z_]+) +\|/);
        if (match) themes.push(match[1]);
    });
    return themes;
}

const VALID_THEMES = getValidThemes();
const THEME_MAPPING = {
    'home': 'furniture', 'home_living': 'furniture', 'furniture_objects': 'furniture', 'rooms_of_a_home': 'furniture',
    'environment_nature': 'nature', 'nature_A1': 'nature', 'weather': 'nature', 'seasons': 'nature', 'seasons_climate': 'nature',
    'science_tech': 'technology', 'tech': 'technology', 'basic_technology_devices': 'technology', 'internet_social_media': 'technology',
    'library': 'places', 'museum': 'places', 'local_places_services': 'places', 'address_location': 'places',
    'countries_capitals': 'places', 'neighbourhood_local': 'places', 'food': 'food_drink', 'basic_foods': 'food_drink',
    'drinks': 'food_drink', 'diet_nutrition': 'food_drink', 'restaurants_ordering': 'food_drink', 'hobbies': 'social',
    'hobbies_interests': 'social', 'leisure_activities': 'social', 'leisure_hobbies': 'social', 'interests_hobbies': 'social',
    'celebrations': 'social', 'clothing': 'clothes', 'education': 'school', 'physical_appearance': 'people',
    'personality_character': 'people', 'family_life': 'people', 'immediate_family': 'people', 'personal_identity': 'people',
    'relationships_dating': 'people', 'size_shape': 'describing', 'everyday_shopping': 'shopping', 'shopping_consumerism': 'shopping',
    'basic_positive_emotions': 'emotions', 'basic_negative_emotions': 'emotions', 'social_emotions': 'emotions', 'feelings_emotions': 'emotions',
    'asking_answering_questions': 'language', 'asking_questions': 'language', 'conjunctions_connectors': 'language', 'academic_vocabulary': 'language',
    'times_day': 'time', 'transport': 'travel', 'transport_travel': 'travel', 'booking_planning_a_trip': 'travel',
    'daily_work_routines': 'work', 'workplace_basics': 'work', 'job_titles_professions': 'jobs', 'career_development': 'jobs',
    'health_body': 'health_medicine', 'health': 'health_medicine', 'numbers_0_9': 'numbers', 'culture_arts': 'art_culture',
    'aesthetics_criticism': 'art_culture', 'epistemology_truth': 'psychology', 'psychoanalysis_unconscious': 'psychology',
    'psychological_concepts': 'psychology', 'ontology_metaphysics': 'psychology', 'ethics_philosophy': 'psychology', 'life': 'social',
    'furniture_objects_A1': 'furniture', 'household_tasks_A1': 'furniture', 'physical_appearance_A1': 'people', 'family_life_A1': 'people',
    'weather_A1': 'nature', 'everyday_shopping_A1': 'shopping', 'basic_positive_emotions_A1': 'emotions', 'basic_negative_emotions_A1': 'emotions',
    'daily_work_routines_A1': 'work', 'illnesses_symptoms_A1': 'health_medicine', 'basic_technology_devices_A1': 'technology',
    'describing_things_A1': 'describing', 'colours_patterns_A1': 'art_culture', 'basic_foods_A1': 'food_drink'
};

const LEVEL_TO_FULL = {
    'A1': 'starter', 'A2': 'elementary', 'B1': 'intermediate', 'B2': 'upper_intermediate', 'C1': 'advanced', 'C2': 'proficiency',
    'starter': 'starter', 'elementary': 'elementary', 'intermediate': 'intermediate', 'upper_intermediate': 'upper_intermediate', 'advanced': 'advanced', 'proficiency': 'proficiency'
};
const FORBIDDEN_FIELDS = ['image', 'imageUrl', 'opposite'];

function fixEntry(entry, lang, level, filename, index) {
    FORBIDDEN_FIELDS.forEach(field => delete entry[field]);

    if (level && LEVEL_TO_FULL[level]) entry.level = LEVEL_TO_FULL[level];
    else if (entry.level && LEVEL_TO_FULL[entry.level]) entry.level = LEVEL_TO_FULL[entry.level];
    if (!entry.level) entry.level = 'starter';

    if (entry.theme) {
        let theme = entry.theme.toLowerCase();
        theme = theme.replace(/_[ab][12]$/i, '').replace(/_starter$/i, '').replace(/_elementary$/i, '').replace(/_intermediate$/i, '').replace(/_advanced$/i, '').replace(/_proficiency$/i, '');
        if (THEME_MAPPING[theme]) theme = THEME_MAPPING[theme];
        if (VALID_THEMES.includes(theme)) entry.theme = theme;
        else {
            const match = VALID_THEMES.find(vt => theme.includes(vt) || vt.includes(theme));
            if (match) entry.theme = match;
            else entry.theme = 'social';
        }
    } else entry.theme = 'social';

    if (entry.definitions) {
        if (!Array.isArray(entry.definitions)) {
            if (typeof entry.definitions === 'string') entry.definitions = [{ text: entry.definitions, examples: [] }];
            else entry.definitions = [entry.definitions];
        }
        entry.definitions = entry.definitions.map(def => {
            if (typeof def === 'string') return { text: def, examples: [] };
            if (def && typeof def === 'object') {
                if (def.word && def.definitions && !def.text) return def.definitions[0];
                if (!def.text && def.definition) { def.text = def.definition; delete def.definition; }
                if (!def.examples) def.examples = [];
                if (Array.isArray(def.examples)) {
                    def.examples = def.examples.map(ex => typeof ex === 'object' ? (ex.text || ex.t || '') : ex).filter(ex => ex);
                }
                return { text: def.text || '', examples: def.examples };
            }
            return { text: String(def), examples: [] };
        });
    }

    if (!entry.lang) entry.lang = lang;
    if (!entry.form) {
        if (filename.includes('verb')) entry.form = 'verb';
        else if (filename.includes('adjective')) entry.form = 'adjective';
        else if (['speaking.js', 'debates.js', 'opinions.js', 'fluency.js', 'quotes.js'].includes(filename)) entry.form = 'speaking';
        else entry.form = 'noun';
    }

    if (!entry.word) entry.word = entry.topic || entry.t || entry.q || entry.phrase || '';

    if (!entry.id || typeof entry.id !== 'string' || entry.id.includes(' ') || entry.id.length < 5) {
        const seq = String(index + 1).padStart(3, '0');
        const themeSlug = entry.theme || 'misc';
        const lvlSlug = entry.level || 'starter';
        entry.id = `${lang}_${lvlSlug}_${themeSlug}_${seq}`;
    }

    if (entry.transcription && typeof entry.transcription === 'string') {
        entry.transcription = entry.transcription.replace(/[\/\[\]]/g, '');
    } else entry.transcription = '';

    if (entry.emoji === undefined) entry.emoji = '';
    if (!entry.definitions && entry.form !== 'speaking') entry.definitions = [{ text: entry.word, examples: [] }];

    return entry;
}

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    const parts = filepath.split('/');
    const lang = parts[1], levelCode = parts[2], filename = parts[parts.length - 1];

    let data;
    let dataKey = 'vocabularyData';
    if (filename.includes('verb')) dataKey = 'verbsData';
    else if (filename.includes('adjective')) dataKey = 'adjectivesData';
    else if (filename.includes('location')) dataKey = 'locationsData';
    else if (filename.includes('people')) dataKey = 'peopleData';

    try {
        const sandboxScript = `
            const window = { vocabularyData: {}, verbsData: {}, adjectivesData: {}, locationsData: {}, peopleData: {}, nationalitiesData: {}, grammarData: {}, grammarElements: {}, speakingData: {}, gameData: {} };
            const lang = "${lang}";
            (function() { ${content} })();
            let res, key;
            for (let k in window) {
                for (let l in window[k]) {
                    if (Array.isArray(window[k][l]) && window[k][l].length > 0) {
                        res = window[k][l];
                        key = k;
                    }
                }
            }
            if (!res) {
                const m = \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`.match(/const data = (\\[[\\s\\S]*?\\]);/);
                if (m) res = eval(m[1]);
            }
            ({data: res, key: key});
        `;
        const result = eval(sandboxScript);
        data = result.data;
        if (result.key) dataKey = result.key;
    } catch (e) {
        return;
    }

    if (!Array.isArray(data)) return;

    const fixedData = data.map((entry, idx) => fixEntry(entry, lang, levelCode, filename, idx));

    const newContent = `(function() {
    const data = ${JSON.stringify(fixedData, null, 4)};
    const lang = "${lang}";
    window.${dataKey} = window.${dataKey} || {};
    window.${dataKey}[lang] = [...(window.${dataKey}[lang] || []), ...data];
})();`;

    fs.writeFileSync(filepath, newContent, 'utf8');
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
Object.keys(manifest).forEach(lang => {
    Object.keys(manifest[lang]).forEach(levelCode => {
        const files = manifest[lang][levelCode];
        const basePath = levelCode === 'all' ? `vocabulary/${lang}/` : `vocabulary/${lang}/${levelCode}/`;
        files.forEach(file => {
            const filepath = path.join(basePath, file);
            if (fs.existsSync(filepath)) processFile(filepath);
        });
    });
});
console.log('Done fixing data!');
