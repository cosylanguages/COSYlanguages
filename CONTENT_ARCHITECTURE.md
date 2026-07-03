# COSYlanguages Content Architecture

This document serves as the master reference for all universal distinctions, codes, and standards used across the COSYlanguages platform.

## 1. Language Registry

| Code | Language | Family | Cases? |
|------|----------|--------|--------|
| en | English | Germanic | No |
| fr | French | Romance | No |
| it | Italian | Romance | No |
| ru | Russian | Slavic | Yes |
| el | Greek | Hellenic | Yes |
| es | Spanish | Romance | No |
| de | German | Germanic | Yes |
| pt | Portuguese | Romance | No |
| hy | Armenian | Armenian | Yes |
| ka | Georgian | Kartvelian | Yes |
| tt | Tatar | Turkic | Yes |
| ba | Bashkir | Turkic | Yes |
| br | Breton | Celtic | No |

## 2. Level Normalization

| Level ID | Short Code | CEFR Name |
|----------|------------|-----------|
| starter | A1 | Starter |
| elementary | A2 | Elementary |
| intermediate | B1 | Intermediate |
| upper_intermediate | B2 | Upper-Intermediate |
| advanced | C1 | Advanced |
| proficiency | C2 | Proficiency |

## 3. Vocabulary Themes & Sub-themes

| Theme Slug | Label | Sub-theme Slugs |
|------------|-------|-----------------|
| animals | Animals | pets · farm · wild · insects · birds · sea |
| body | Body | face · limbs · organs · senses · health · appearance |
| clothes | Clothes | everyday · formal · accessories · weather_gear |
| colours | Colours | basic · shades · materials |
| describing | Describing | size_shape · texture · quality · quantity · comparing |
| emotions | Emotions | positive · negative · complex · expressing |
| environment | Environment | ecology · climate · recycling · natural_disasters |
| food_drink | Food & drink | fruit · vegetables · drinks · cooking · meals · snacks · diet |
| furniture | Furniture & home | rooms · furniture_items · appliances · household_items |
| health_medicine | Health | symptoms · treatment · hospital · wellbeing · sport_injury |
| jobs | Jobs | professions · workplace · career · business_lang |
| language | Language | grammar_terms · phonetics · discourse · learning |
| music | Music | instruments · genres · performance · listening |
| nature | Nature | landscape · weather · plants · seasons · sky |
| numbers | Numbers | cardinal · ordinal · fractions · money |
| people | People | family · relationships · nationality · physical_desc · character |
| places | Places | city · buildings · rooms · geography · landmarks · countryside |
| school | School | stationery · subjects · classroom · studying |
| shopping | Shopping | stores · items · transactions · online |
| social | Social life | celebrations · going_out · invitations · communication |
| sports | Sports | team_sports · individual · gym · outdoor · water_sports |
| technology | Technology | devices · internet · software · social_media |
| time | Time | clock · days · months · seasons · periods · frequency |
| travel | Travel | transport · accommodation · tourism · directions · documents |
| work | Work | office · meetings · career · documents · remote_work |
| art_culture | Art & culture | art · literature · film · theatre · traditions |
| psychology | Psychology | biases · cognitive_processes · behavior · psychoanalysis · concepts |

## 4. Grammar Architecture

### Layers
- **morphology**: Word formation, declension, conjugation.
- **syntax**: Sentence structure, word order, connectors.
- **phonology**: Pronunciation, intonation, alphabet.
- **particles**: Fixed markers, interjections, discourse fillers.

### Categories
Common categories used in data files:
- `verbs`, `nouns`, `adjectives`, `determiners`, `pronouns`, `adverbs`, `prepositions`, `conjunctions`, `numerals`.

## 5. Speaking Club Categories (Events)

| Club ID | Label | Primary Themes |
|---------|-------|----------------|
| science | Keeping Up with Science | `nature`, `environment`, `technology`, `health_medicine` |
| celebrate | Let's Celebrate! | `social`, `art_culture`, `people` |
| quotes | The Greatest Quotes | `psychology`, `language`, `emotions`, `art_culture` |
| mind | Mind Matters | `psychology`, `emotions`, `body` |
| life | My Life With/Without | `social`, `travel`, `furniture`, `clothes`, `food_drink` |
| debate | Debatable & Relatable | `work`, `jobs`, `environment`, `social`, `technology` |

## 6. Content Standards

### The 10-10-10 Rule (Speaking Sessions)
Every speaking session must include:
1. **10 Vocabulary Units**: Term – definition. Example: Sentence.
2. **10 Round 1 Items**: Discussion questions or quick-fire activities.
3. **10 Round 2 Items**: Deep-dive questions, future statements, or agree/disagree prompts.

### Vocabulary ID Format
`{lang}_{level}_{theme_slug}_{sequence}`
- `lang`: ISO code (en, fr, etc.)
- `level`: Full ID (starter, elementary, etc.)
- `theme_slug`: Slug from Section 3.
- `sequence`: 3-digit zero-padded integer (001, 002...).

Example: `en_starter_food_drink_001`

### Grammar ID Format
`{lang}_{layer}_{category}_{level}_{sequence}`
- `level`: Full ID (starter, elementary, etc.) from Section 2.

Example: `fr_morphology_verbs_starter_001`
