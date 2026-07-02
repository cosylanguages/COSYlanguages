const fs = require('fs');
const path = require('path');

const vocabDir = path.join(__dirname, '..', 'vocabulary');
const manifestPath = path.join(vocabDir, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const themeMap = {
    'food_A1': 'food_drink', 'basic_foods_A1': 'food_drink', 'drinks_A1': 'food_drink',
    'size_shape_A1': 'describing', 'weather_A1': 'nature', 'everyday_shopping_A1': 'shopping',
    'household_tasks_A1': 'furniture', 'local_places_services_A1': 'places',
    'family_life_A1': 'people', 'basic_positive_emotions_A1': 'emotions',
    'basic_negative_emotions_A1': 'emotions', 'daily_work_routines_A1': 'work',
    'illnesses_symptoms_A1': 'health_medicine', 'basic_technology_devices_A1': 'technology',
    'describing_things_A1': 'describing', 'colours_patterns_A1': 'colours',
    'times_day_A1': 'time', 'marital_status_A1': 'people', 'personal_identity_A1': 'people',
    'health_body_A1': 'body', 'physical_appearance_A1': 'people', 'shapes_A1': 'describing',
    'distance_A1': 'describing', 'money_payment_A1': 'work', 'surprise_interest_A1': 'emotions',
    'tastes_textures_A1': 'describing', 'furniture_objects_A1': 'furniture',
    'plants_natural_world_A1': 'nature', 'name_greeting_A1': 'social'
};

const levelMap = {
    'A1': 'starter', 'A2': 'elementary', 'B1': 'intermediate',
    'B2': 'upper_intermediate', 'C1': 'advanced', 'C2': 'proficiency'
};

const counters = {};

function getNextId(lang, level, theme) {
    const key = `${lang}_${level}_${theme}`;
    counters[key] = (counters[key] || 0) + 1;
    return `${key}_${counters[key].toString().padStart(3, '0')}`;
}

function processFile(filePath, lang, folderLevel) {
    let content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    const match = content.match(/const data = (\[[\s\S]*?\])(?:\s*;|\s+const)/) || content.match(/const data = (\[[\s\S]*?\])$[\s\S]*?}\)\(\);/m);
    let dataStr;
    if (match) dataStr = match[1];
    else {
        const simpleMatch = content.match(/const data = (\[[\s\S]*?\])/);
        if (!simpleMatch) return;
        dataStr = simpleMatch[1];
    }

    let data;
    try {
        const safeStr = dataStr.replace(/window\.\w+/g, 'null');
        data = eval(`(${safeStr})`);
    } catch (e) { return; }

    if (!Array.isArray(data)) return;
    const internalLevel = levelMap[folderLevel] || folderLevel;
    let modified = false;

    data.forEach(item => {
        if (item.language) { item.lang = item.language; delete item.language; modified = true; }
        if (!item.lang) { item.lang = lang; modified = true; }
        if (!item.level) { item.level = internalLevel; modified = true; }
        else if (levelMap[item.level]) { item.level = levelMap[item.level]; modified = true; }
        if (item.theme && themeMap[item.theme]) { item.theme = themeMap[item.theme]; modified = true; }
        if (!item.theme) { item.theme = fileName.replace('.js', ''); modified = true; }
        if (!item.id) { item.id = getNextId(item.lang, item.level, item.theme); modified = true; }
    });

    if (modified) {
        const newDataStr = JSON.stringify(data, null, 4);
        let newContent;
        if (fileName === 'fluency.js' || fileName === 'speaking.js') {
            newContent = `(function() {
    const data = ${newDataStr};
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();`;
        } else if (fileName === 'opinions.js') {
            newContent = `(function() {
    const data = ${newDataStr};
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();`;
        } else if (fileName === 'debates.js') {
             newContent = `(function() {
    const data = ${newDataStr};
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();`;
        } else if (fileName === 'quotes.js') {
             newContent = `(function() {
    const data = ${newDataStr};
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();`;
        } else {
            const keyMap = { 'verbs.js': 'verbsData', 'adjectives.js': 'adjectivesData', 'locations.js': 'locationsData', 'people.js': 'peopleData', 'nationalities.js': 'nationalitiesData', 'grammar.js': 'grammarData', 'grammar_elements.js': 'grammarElements' };
            const key = keyMap[fileName] || 'vocabularyData';
            newContent = `(function() {
    const data = ${newDataStr};
    const lang = "${lang}";
    window.${key} = window.${key} || {};
    window.${key}[lang] = [...(window.${key}[lang] || []), ...data];
})();`;
        }
        fs.writeFileSync(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}

function runFix() {
    let fixCount = 0;
    for (const [lang, levels] of Object.entries(manifest)) {
        for (const [level, files] of Object.entries(levels)) {
            files.forEach(file => {
                const filePath = path.join(vocabDir, lang, level, file);
                if (fs.existsSync(filePath)) { if (processFile(filePath, lang, level)) fixCount++; }
            });
        }
    }
    console.log(`Standardization complete. Modified ${fixCount} files.`);
}
runFix();
