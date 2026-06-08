const fs = require('fs');
const path = require('path');

const esDirs = [
    'js/data/romance/es/starter',
    'js/data/romance/es/elementary',
    'js/data/romance/es/intermediate',
    'js/data/romance/es/upper-intermediate',
    'js/data/romance/es/advanced',
    'js/data/romance/es/proficiency',
    'vocabulary/es/A1',
    'vocabulary/es/A2',
    'vocabulary/es/B1',
    'vocabulary/es/B2',
    'vocabulary/es/C1',
    'vocabulary/es/C2'
];

const levelMap = {
    'starter': 'starter',
    'elementary': 'elementary',
    'intermediate': 'intermediate',
    'upper-intermediate': 'upper_intermediate',
    'upper_intermediate': 'upper_intermediate',
    'advanced': 'advanced',
    'proficiency': 'proficiency',
    'A1': 'starter',
    'A2': 'elementary',
    'B1': 'intermediate',
    'B2': 'upper_intermediate',
    'C1': 'advanced',
    'C2': 'proficiency'
};

const themeMapping = {
    'animals_A1': 'animals',
    'animals_B1': 'animals',
    'food_A1': 'food_drink',
    'food_B1': 'food_drink',
    'food': 'food_drink',
    'travel_A1': 'travel',
    'travel_B1': 'travel',
    'nature_A1': 'nature',
    'nature_B1': 'nature',
    'health_A1': 'health_medicine',
    'health_B1': 'health_medicine',
    'health': 'health_medicine',
    'shopping_A1': 'shopping',
    'shopping_B1': 'shopping',
    'work_A1': 'work',
    'work_B1': 'work',
    'hobbies_A1': 'social',
    'hobbies_B1': 'social',
    'hobbies': 'social',
    'education_A1': 'school',
    'education_B1': 'school',
    'education': 'school',
    'housing_A1': 'furniture',
    'housing_B1': 'furniture',
    'home_A1': 'furniture',
    'home_B1': 'furniture',
    'home': 'furniture',
    'people_A1': 'people',
    'people_B1': 'people',
    'appearance_A1': 'body',
    'appearance_B1': 'body',
    'appearance': 'body',
    'feelings_A1': 'emotions',
    'feelings_B1': 'emotions',
    'feelings': 'emotions',
    'city_A1': 'places',
    'city_B1': 'places',
    'clothes_A1': 'clothes',
    'clothes_B1': 'clothes',
    'clothes': 'clothes',
    'clothing': 'clothes',
    'weather_A1': 'nature',
    'weather_B1': 'nature',
    'weather': 'nature',
    'time_A1': 'time',
    'time_B1': 'time',
    'family_A1': 'people',
    'family_B1': 'people',
    'family': 'people',
    'sports_A1': 'sports',
    'sports_B1': 'sports',
    'sports': 'sports',
    'professions_A1': 'jobs',
    'professions_B1': 'jobs',
    'professions': 'jobs',
    'daily_routine': 'time',
    'leisure': 'social',
    'body': 'body',
    'environment': 'environment',
    'culture': 'art_culture',
    'technology': 'technology',
    'media': 'art_culture',
    'politics': 'social',
    'economy': 'work',
    'law': 'social',
    'science': 'technology',
    'society': 'social',
    'abstract': 'language',
    'grammar': 'language',
    'conjunctions': 'language',
    'prepositions': 'language',
    'adverbs': 'language',
    'determiners': 'language',
    'pronouns': 'language',
    'interrogatives': 'language',
    'numbers': 'numbers',
    'days': 'time',
    'months': 'time',
    'colors': 'colours',
    'colours': 'colours',
    'furniture': 'furniture',
    'appliances': 'furniture',
    'kitchen': 'furniture',
    'fruit': 'food_drink',
    'vegetables': 'food_drink',
    'meat': 'food_drink',
    'drinks': 'food_drink',
    'restaurant': 'food_drink',
    'hotel': 'travel',
    'airport': 'travel',
    'transport': 'travel',
    'directions': 'travel',
    'health_problems': 'health_medicine',
    'pharmacy': 'health_medicine',
    'parts_of_body': 'body',
    'emergency': 'health_medicine',
    'emotions': 'emotions',
    'character': 'people',
    'relationships': 'people',
    'dating': 'people',
    'marriage': 'people',
    'education_system': 'school',
    'university': 'school',
    'school_subjects': 'school',
    'classroom': 'school',
    'office': 'work',
    'business': 'work',
    'finance': 'work',
    'marketing': 'work',
    'internet': 'technology',
    'computers': 'technology',
    'science_nature': 'nature',
    'animals_nature': 'animals',
    'geography': 'places',
    'climate': 'nature',
    'global_warming': 'environment',
    'pollution': 'environment',
    'recycling': 'environment',
    'art': 'art_culture',
    'music': 'music',
    'cinema': 'art_culture',
    'theatre': 'art_culture',
    'literature': 'art_culture',
    'fashion': 'clothes',
    'festivals': 'social',
    'holidays': 'travel',
    'religion': 'art_culture',
    'philosophy': 'language',
    'history': 'art_culture',
    'news': 'art_culture',
    'advertising': 'work',
    'social_media': 'technology',
    'crime': 'social',
    'punishment': 'social',
    'human_rights': 'social',
    'immigration': 'social',
    'poverty': 'social',
    'war': 'social',
    'peace': 'social',
    'government': 'social',
    'elections': 'social',
    'democracy': 'social',
    // Proficiency custom themes
    'philosophy_language_C2': 'language',
    'meta_argument_deconstruction_C2': 'language',
    'linguistics_theory_C2': 'language',
    'political_theory_C2': 'social',
    'psychoanalysis_unconscious_C2': 'psychology'
};

const subThemeMap = {
    'animals': {
        'perro': 'pets', 'gato': 'pets', 'pájaro': 'birds', 'pez': 'sea',
        'león': 'wild', 'tigre': 'wild', 'elefante': 'wild',
        'vaca': 'farm', 'cerdo': 'farm', 'oveja': 'farm'
    },
    'food_drink': {
        'manzana': 'fruit', 'plátano': 'fruit', 'naranja': 'fruit',
        'tomate': 'vegetables', 'zanahoria': 'vegetables',
        'pollo': 'meat', 'carne': 'meat',
        'agua': 'drinks', 'leche': 'drinks', 'café': 'drinks', 'té': 'drinks'
    },
    'clothes': {
        'camisa': 'everyday', 'camiseta': 'everyday',
        'pantalones': 'everyday', 'falda': 'everyday',
        'zapatos': 'everyday', 'botas': 'everyday'
    }
};

function guessTheme(word, existingTheme, level) {
    if (existingTheme && themeMapping[existingTheme]) return themeMapping[existingTheme];
    const validSlugs = ['animals', 'body', 'clothes', 'colours', 'emotions', 'food_drink', 'furniture', 'jobs', 'nature', 'numbers', 'people', 'places', 'school', 'shopping', 'sports', 'technology', 'time', 'travel', 'work', 'music', 'art_culture', 'health_medicine', 'language', 'environment', 'social', 'describing', 'psychology'];
    if (existingTheme && validSlugs.includes(existingTheme)) return existingTheme;

    const lowerWord = word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (lowerWord.match(/perro|gato|animal|leon|tigre|vaca/)) return 'animals';
    if (lowerWord.match(/comida|pan|fruta|manzana|beber|agua|restaurante/)) return 'food_drink';
    if (lowerWord.match(/casa|habitacion|cocina|silla|mesa/)) return 'furniture';
    if (lowerWord.match(/viaje|avion|tren|hotel|turista/)) return 'travel';
    if (lowerWord.match(/trabajo|oficina|empresa|negocio|profesor/)) return 'work';
    if (lowerWord.match(/escuela|universidad|estudiar|libro|examen/)) return 'school';
    if (lowerWord.match(/salud|medico|hospital|enfermo|cuerpo/)) return 'health_medicine';
    if (lowerWord.match(/tiempo|reloj|dia|semana|mes|año/)) return 'time';
    if (lowerWord.match(/ropa|camisa|pantalon|zapato/)) return 'clothes';
    if (lowerWord.match(/amigo|familia|padre|madre|persona/)) return 'people';
    if (lowerWord.match(/naturaleza|arbol|flor|mar|rio|clima/)) return 'nature';
    if (lowerWord.match(/dinero|comprar|tienda|precio/)) return 'shopping';
    if (lowerWord.match(/musica|arte|pelicula|teatro/)) return 'art_culture';
    if (lowerWord.match(/deporte|futbol|juego|hacer/)) return 'sports';
    if (lowerWord.match(/decir|hablar|palabra|lengua/)) return 'language';

    return existingTheme || 'language';
}

function guessSubTheme(word, theme) {
    if (subThemeMap[theme] && subThemeMap[theme][word.toLowerCase()]) {
        return subThemeMap[theme][word.toLowerCase()];
    }
    return null;
}

const globalSequence = {};

function processFile(filepath) {
    console.log(`Processing ${filepath}...`);
    let content = fs.readFileSync(filepath, 'utf8');

    const dirname = path.basename(path.dirname(filepath));
    const levelSlug = levelMap[dirname] || dirname;

    const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!dataMatch) {
        console.warn(`No data array found in ${filepath}`);
        return;
    }

    let data;
    try {
        data = JSON.parse(dataMatch[1]);
    } catch (e) {
        try {
            data = eval(dataMatch[1]);
        } catch (e2) {
            console.error(`Failed to parse data in ${filepath}: ${e2.message}`);
            return;
        }
    }

    const seenWords = new Set();
    const newData = [];

    data.forEach(entry => {
        if (seenWords.has(entry.word)) {
            return;
        }

        entry.lang = 'es';
        entry.level = levelSlug;

        entry.theme = guessTheme(entry.word, entry.theme, levelSlug);

        if (!entry.sub_theme) {
            entry.sub_theme = guessSubTheme(entry.word, entry.theme);
        }

        const idKey = `${levelSlug}_${entry.theme}`;
        globalSequence[idKey] = (globalSequence[idKey] || 0) + 1;
        const seqStr = String(globalSequence[idKey]).padStart(3, '0');
        entry.id = `es_${levelSlug}_${entry.theme}_${seqStr}`;

        seenWords.add(entry.word);
        newData.push(entry);
    });

    const newContent = content.replace(/const data = \[[\s\S]*?\];/, `const data = ${JSON.stringify(newData, null, 4)};`);
    fs.writeFileSync(filepath, newContent);
}

esDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
        files.forEach(file => processFile(path.join(dir, file)));
    } else {
        console.warn(`Directory not found: ${dir}`);
    }
});

console.log('Processing complete.');
