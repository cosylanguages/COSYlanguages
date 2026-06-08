const fs = require('fs');
const path = require('path');

const THEME_MAP = {
  'animals_A1': 'animals.js',
  'pets_A1': 'animals.js',
  'insects_A1': 'animals.js',
  'sea_animals_A1': 'animals.js',
  'basic_foods_A1': 'food.js',
  'drinks_A1': 'food.js',
  'fruits_vegetables_A1': 'food.js',
  'meals_of_the_day_A1': 'food.js',
  'tastes_textures_A1': 'food.js',
  'cooking_methods_A1': 'food.js',
  'body_parts_A1': 'body.js',
  'health_body_A1': 'body.js',
  'illnesses_symptoms_A1': 'body.js',
  'five_senses_A1': 'body.js',
  'rooms_of_a_home_A1': 'home.js',
  'rooms_indoor_spaces_A1': 'home.js',
  'rooms_of_home_A1': 'home.js',
  'furniture_objects_A1': 'home.js',
  'household_items_A1': 'home.js',
  'household_tasks_A1': 'home.js',
  'kitchen_items_A1': 'home.js',
  'items_of_clothing_A1': 'clothing.js',
  'accessories_A1': 'clothing.js',
  'modes_of_transport_A1': 'transport.js',
  'public_transport_A1': 'transport.js',
  'directions_navigation_A1': 'transport.js',
  'weather_A1': 'weather.js',
  'seasons_climate_A1': 'weather.js',
  'numbers_0_9_A1': 'numbers.js',
  'numbers_100_999_A1': 'numbers.js',
  'colours_patterns_A1': 'colours.js',
  'shapes_A1': 'colours.js',
  'immediate_family_A1': 'family.js',
  'extended_family_A1': 'family.js',
  'family_life_A1': 'family.js',
  'job_titles_professions_A1': 'jobs.js',
  'workplace_basics_A1': 'jobs.js',
  'daily_work_routines_A1': 'jobs.js',
  'local_places_services_A1': 'places.js',
  'cities_towns_A1': 'places.js',
  'countries_capitals_A1': 'places.js',
  'address_location_A1': 'places.js',
  'types_of_accommodation_A1': 'places.js',
  'hobbies_interests_A1': 'leisure.js',
  'leisure_activities_A1': 'leisure.js',
  'places_culture_leisure_A1': 'leisure.js',
  'common_sports_A1': 'leisure.js',
  'playing_watching_sport_A1': 'leisure.js',
  'sports_equipment_A1': 'leisure.js',
  'toys_games_A1': 'leisure.js',
  'cinema_film_A1': 'leisure.js',
  'music_A1': 'leisure.js',
  'musical_instruments_A1': 'leisure.js',
  'books_reading_A1': 'leisure.js',
  'greetings_social_phrases_A1': 'social.js',
  'name_greeting_A1': 'social.js',
  'giving_opinions_A1': 'social.js',
  'basic_positive_emotions_A1': 'social.js',
  'basic_negative_emotions_A1': 'social.js',
  'personality_traits_A1': 'social.js',
  'personal_identity_A1': 'social.js',
  'marital_status_A1': 'social.js',
  'age_A1': 'social.js',
  'people_A1': 'social.js',
  'physical_appearance_A1': 'social.js',
  'surprise_interest_A1': 'social.js',
  'telling_time_A1': 'time.js',
  'times_day_A1': 'time.js',
  'days_week_A1': 'time.js',
  'months_year_A1': 'time.js',
  'dates_years_A1': 'time.js',
  'duration_expressions_A1': 'time.js',
  'frequency_adverbs_A1': 'time.js',
  'prepositions_time_A1': 'time.js',
  'school_subjects_A1': 'education.js',
  'types_of_education_A1': 'education.js',
  'learning_studying_A1': 'education.js',
  'classroom_language_A1': 'education.js',
  'school_stationery_A1': 'education.js',
  'basic_technology_devices_A1': 'tech.js',
  'using_smartphone_A1': 'tech.js',
  'nature_landscapes_A1': 'nature.js',
  'plants_natural_world_A1': 'nature.js',
  'everyday_shopping_A1': 'shopping.js',
  'money_payment_A1': 'shopping.js',
  'prepositions_place_A1': 'places.js',
  'prepositions_movement_A1': 'transport.js',
  'travel_vocabulary_basics_A1': 'transport.js',
  'basic_intensifiers_A1': 'social.js',
  'contact_details_A1': 'social.js',
  'distance_A1': 'places.js',
  'size_measurements_A1': 'colours.js',
  'size_shape_A1': 'colours.js',
};

function splitFile(filePath, outputDir) {
  let content = fs.readFileSync(filePath, 'utf8');
  const langMatch = content.match(/const lang = "([^"]+)"/);
  const lang = langMatch ? langMatch[1] : 'en';

  const entries = [];
  // Aggressive extraction
  const allBlocks = [];
  let start = -1;
  let bCount = 0;
  let str = false;
  for(let i=0; i<content.length; i++) {
      if (content[i] === '"' && content[i-1] !== '\\') str = !str;
      if (!str) {
          if (content[i] === '{') {
              if (bCount === 0) start = i;
              bCount++;
          } else if (content[i] === '}') {
              bCount--;
              if (bCount === 0 && start !== -1) {
                  allBlocks.push(content.substring(start, i+1));
              }
          }
      }
  }

  function extractDeep(b) {
      if (!b.includes('"word":') && !b.includes('"text":')) return;
      if (b.includes('const data =')) {
          let innerStart = b.indexOf('[') + 1;
          let innerEnd = b.lastIndexOf(']');
          let inner = b.substring(innerStart, innerEnd);
          let subBCount = 0;
          let subStr = false;
          let subStart = -1;
          for(let j=0; j<inner.length; j++) {
              if (inner[j] === '"' && inner[j-1] !== '\\') subStr = !subStr;
              if (!subStr) {
                  if (inner[j] === '{') {
                      if (subBCount === 0) subStart = j;
                      subBCount++;
                  } else if (inner[j] === '}') {
                      subBCount--;
                      if (subBCount === 0 && subStart !== -1) {
                          extractDeep(inner.substring(subStart, j+1));
                      }
                  }
              }
          }
      } else {
          entries.push(b.trim());
      }
  }

  allBlocks.forEach(extractDeep);

  const grouped = {};
  const remaining = [];

  entries.forEach(entry => {
    const themeMatch = entry.match(/"theme":\s*"([^"]+)"/);
    const theme = themeMatch ? themeMatch[1] : null;
    const targetFile = THEME_MAP[theme];

    if (targetFile) {
      if (!grouped[targetFile]) grouped[targetFile] = [];
      grouped[targetFile].push(entry);
    } else {
      remaining.push(entry);
    }
  });

  for (const [file, data] of Object.entries(grouped)) {
    const output = `(function() {
    const data = [
${data.join(',\n')}
    ];
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(path.join(outputDir, file), output);
  }

  const remainingOutput = `// TODO: verify level classification
(function() {
    const data = [
${remaining.join(',\n')}
    ];
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
  fs.writeFileSync(path.join(outputDir, 'vocabulary.js'), remainingOutput);

  console.log(`Processed ${filePath}: Created ${Object.keys(grouped).length} theme files, ${remaining.length} entries remaining. Total entries: ${entries.length}`);
}

const sourceFile = process.argv[2];
const outputDir = process.argv[3];
if (sourceFile && outputDir) {
    splitFile(sourceFile, outputDir);
} else {
    console.error("Usage: node split_vocab.js <source> <outputDir>");
}
