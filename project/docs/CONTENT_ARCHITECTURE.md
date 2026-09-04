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

## 5. Product & Sub-Product Taxonomy

This taxonomy outlines the definitive organization and owners of the COSYlanguages ecosystem, separating the Free Platform from Paid/Premium Products.

### 5.1 Free Platform (No Gate)
*   **Path:** Root directory `/` (served via `cosylanguages.github.io`)
*   **Target Audience:** Public visitors and autonomous self-study learners.
*   **Core Offerings:**
    *   **Grammar Manuals:** High-contrast color-coded grammar references aligned with COSYlanguages Grammar Standards.
    *   **Practice Hub:** Interactive vocabulary and syntax training engine.
    *   **Vocabulary/Word Games:** 22 standalone solo games (Word Linker, Lucky Numbers, Action Hero, Battle of Wits, etc.).
    *   **Placement Quiz:** Adaptive progressive CEFR-aligned assessment.
    *   **Print Tools:** High-utility PDF card generators, zines, and box models.

### 5.2 Paid Product: Courses (`apps/premium-courses/`)
*   **Path:** `/courses/` (served via `courses.cosylanguages.com`)
*   **Target Audience:** Syllabus-driven structured academies for progressive language learning.
*   **Sub-Product / Track Taxonomy:**

| Track ID | Label | Pedagogical Focus / Primary Themes | Accent Theme |
|----------|-------|------------------------------------|--------------|
| `general` | General Course | All 4 skills growing together, structured CEFR-level progression. | Forest Green / Sage |
| `spoken` | Spoken Course | 1-to-1 short, intense speaking sessions for immediate conversational fluency. | Terracotta / Coral |
| `professional` | Professional Course | Career-ready business communication, meetings, resume/CV, interviews. | Credible Navy |
| `travelling` | Travelling Course | Practical phrases, navigation, cultural tips for travel/tourism. | Practical Fresh Green |
| `relocation` | Relocation Course | Practical integration, renting flats, bureaucracy, building local social circles. | Warm Rust / Amber |
| `exam` | Exam Preparation | Targeted preparation focusing on oral components of IELTS, DELF, DALF, etc. | Scholarly Plum |

### 5.3 Paid Product: Events (`apps/premium-events/`)
*   **Path:** `/events/` (served via `events.cosylanguages.com`)
*   **Target Audience:** Highly interactive, conversational speaking clubs and multi-sensory immersive group events.

#### 5.3.1 Sub-brand Family: Thematic Speaking Clubs
Conversational clubs designed around novelty, deep atmosphere, and community.

| Club ID | Label | Primary Themes / Visual Identity | Brand Style / Watermark |
|---------|-------|----------------------------------|-------------------------|
| `wonder` | I Couldn't Help But Wonder | Introspective Breton narratives, Carrie Bradshaw-style retro polaroid. | Translucent Washi-Tape, scattered rotation |
| `science` | Keeping Up with Science | `nature`, `environment`, `technology`, `health_medicine` (Field Journal). | High-contrast Science Green / 🦖 🧪 |
| `mind` | Mind Matters | `psychology`, `emotions`, `body` (Everyday Psychology, soft calming). | Yellow/Blue dopamine/sleep watermarks |
| `debate` | Debatable & Relatable | `work`, `jobs`, `environment`, `social` (Structured debates, high contrast). | Grey/White watermark emojis |
| `celebrate` | Let's Celebrate! | `social`, `art_culture`, `people` (Festivals, cultural events, seasonal). | Bespoke emojis, snapshot boxes |
| `life` | My Life With/Without | `social`, `travel`, `furniture`, `clothes` (Everyday life experiences). | Balance-ledger perspective boxes |
| `quotes` | The Greatest Quotes | `psychology`, `language`, `emotions` (Philosophical quotes & aphorisms). | Soft quote marks watermarks |

#### 5.3.2 Sub-brand Family: Interactive Multimedia Nights
Atmospheric, media-rich workshops centered on cinematic, musical, and literary analysis.

| Night ID | Label | Primary Themes / Visual Identity | Brand Style / Watermark |
|----------|-------|----------------------------------|-------------------------|
| `cinema` | Cinema Club | Protagonist dialogue deconstruction, character conflict, screenplays. | High-contrast, dark-mode first, pensive chalk-gold |
| `karaoke` | Karaoke Club | Hand-coded lyrics, retro cassette liner notes, pronunciation metrics. | Vintage plum/warm cream retro cassette theme |
| `game-evening` | Game Evening | Multiplayer/group dynamics, boardgame-inspired cozy social games. | Cozy boardgame orange/cream theme |
| `long-reads` | Long Reads | Literary parlor, active book curriculum, reader ledgers. | Cozy dark-mahogany, interactive typewriter |
| `if-you-were` | If You Were | Hypothetical subjective states, Perspective Mirror box columns. | High-contrast dark backgrounds, light text rules |

## 6. Communication Architecture

### The 10 Communication Systems

| System ID | Label | Communication Question |
|-----------|-------|------------------------|
| `starting` | Starting Conversations | How do I enter a conversation smoothly? |
| `keeping_alive` | Keeping Conversations Alive | How do I keep talking without awkward silences? |
| `showing_feelings` | Showing Feelings & Reacting | How do I show surprise, empathy, or enthusiasm? |
| `giving_opinions` | Giving Opinions | How do I express my personal perspective? |
| `agreeing` | Agreeing | How do I validate someone's point enthusiastically? |
| `disagreeing_politely` | Disagreeing Politely | How do I challenge an idea without being rude? |
| `explaining` | Explaining & Paraphrasing | How do I rephrase when I am misunderstood? |
| `clarifying` | Clarifying & Repairing | How do I deal with missing words or fast speech? |
| `managing_floor` | Managing the Floor | How do I interrupt politely or hold my turn? |
| `ending` | Ending Conversations | How do I wrap up and leave gracefully? |

### Communication Unit ID Format
`{lang}_{system_id}_{level}_{sequence}`
- `lang`: ISO code (en, fr, etc.)
- `system_id`: System slug from table above.
- `level`: Full level ID (`starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, `proficiency`).
- `sequence`: 3-digit zero-padded integer (`001`, `002`...).

Example: `en_starting_starter_001`

## 7. Content Standards

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

## 8. Taxonomy-Driven Course Track Integration Matrix

To ensure systematic pedagogical alignment, every course track applies specific weighting and cross-referencing across the three unified taxonomies (**Vocabulary**, **Grammar**, and **Communication**):

| Track ID | Course Track | Primary Taxonomy Focus | Secondary Taxonomy Focus | Functional Register | Key Interlinking Objective |
|----------|--------------|------------------------|--------------------------|---------------------|----------------------------|
| `general` | General Course | Balanced 1:1:1 Tripartite Matrix | All 12 Macro Domains | Neutral & Informal | Complete 4-skill CEFR progression (A1–C2) with systematic grammar, vocabulary, and discourse mechanics. |
| `spoken` | Spoken Course | Communication (10 Systems) | Vocabulary (`social`, `emotions`, `people`) | Informal & Neutral | Fluency, floor-management, repair strategies, and rapid-response conversational maps. |
| `professional` | Professional Course | Vocabulary (`work`, `jobs`, `technology`) | Communication (`managing_floor`, `disagreeing_politely`) | Professional & Formal | Workplace negotiation, executive presentations, formal correspondence, and corporate jargon. |
| `travelling` | Travelling Course | Vocabulary (`travel`, `food_drink`, `places`) | Communication (`clarifying`, `explaining`) | Practical Neutral | Transit navigation, emergency requests, lodging, dining dialogues, and cultural etiquette. |
| `relocation` | Relocation Course | Vocabulary (`furniture`, `shopping`, `law_order`) | Communication (`clarifying`, `explaining`, `giving_opinions`) | Neutral & Formal | Housing administration, local civic bureaucracy, banking, medical visits, and community integration. |
| `exam` | Exam Preparation | Grammar (`syntax`, `conditionals_moods`) | Communication (`giving_opinions`, `explaining`) | Formal & Academic | High-level argumentation, essay coherence, complex sentence structures, and academic register (DELF/DALF, CILS, TORFL, IELTS). |
