# COSYlanguages English Vocabulary Audit: Baseline Report

This document provides a comprehensive inventory and baseline analysis of all English vocabulary sources in the repository across CEFR levels A1–C2.

## 1. Executive Summary & Source Counts

| CEFR Level | Vocab JS (Files) | Manuals (HTML) | Curriculum (JSON) | Blog (A0-A1) | COSYgames (Gender) | Total Unique Words |
|---|---|---|---|---|---|---|
| **A1** | 1262 | 493 | 437 | 378 | 119 | **1750** |
| **A2** | 2004 | 213 | 188 | 0 | 18 | **2231** |
| **B1** | 484 | 261 | 189 | 0 | 18 | **886** |
| **B2** | 404 | 187 | 192 | 0 | 18 | **757** |
| **C1** | 373 | 49 | 103 | 0 | 18 | **523** |
| **C2** | 301 | 12 | 103 | 0 | 18 | **424** |

## 2. Pairwise Source Overlap & Orphan Words

### Level A1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 333 | 67.5% |
| `vocab_js` | `curriculum` | 231 | 52.9% |
| `vocab_js` | `blog` | 246 | 65.1% |
| `vocab_js` | `gender_games` | 103 | 86.6% |
| `manuals` | `curriculum` | 104 | 23.8% |
| `manuals` | `blog` | 97 | 25.7% |
| `manuals` | `gender_games` | 60 | 50.4% |
| `curriculum` | `blog` | 74 | 19.6% |
| `curriculum` | `gender_games` | 37 | 31.1% |
| `blog` | `gender_games` | 42 | 35.3% |

- **Orphan Words (present in exactly 1 source)**: 1109 / 1750 unique words (63.4%)

### Level A2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 69 | 32.4% |
| `vocab_js` | `curriculum` | 111 | 59.0% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `manuals` | `curriculum` | 36 | 19.1% |
| `manuals` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 2063 / 2231 unique words (92.5%)

### Level B1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 16 | 6.1% |
| `vocab_js` | `curriculum` | 17 | 9.0% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `manuals` | `curriculum` | 39 | 20.6% |
| `manuals` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 826 / 886 unique words (93.2%)

### Level B2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 15 | 8.0% |
| `vocab_js` | `curriculum` | 11 | 5.7% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `manuals` | `curriculum` | 18 | 9.6% |
| `manuals` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 713 / 757 unique words (94.2%)

### Level C1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 4 | 8.2% |
| `vocab_js` | `curriculum` | 9 | 8.7% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `manuals` | `curriculum` | 8 | 16.3% |
| `manuals` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 504 / 523 unique words (96.4%)

### Level C2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 1 | 8.3% |
| `vocab_js` | `curriculum` | 7 | 6.8% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `manuals` | `curriculum` | 2 | 16.7% |
| `manuals` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 414 / 424 unique words (97.6%)

## 3. Metadata Completeness Audit (Vocabulary JS)

Checks for null or missing `theme`, `domain`, or `subcategory` fields in `vocabulary/en/` entries.

- **Total entries with missing metadata**: 1499 / 4878

| ID | Word | Level | Missing Fields | Source File |
|---|---|---|---|---|
| `A2-ADJ-SEL-241` | pale | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Colours_Shades.js` |
| `A2-ADJ-SEL-242` | bald | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-244` | neat | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-245` | slender | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-246` | slim | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-247` | wavy | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-272` | chubby | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-273` | clean-shaven | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-274` | elegant | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-275` | muscular | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-276` | overweight | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-277` | petite | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-278` | stocky | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-279` | tanned | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-280` | well-dressed | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-281` | youthful | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-282` | glamorous | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-283` | graceful | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-284` | stylish | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A2-ADJ-SEL-285` | toned | A2 | theme | `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` |

*... and 1479 more entries.*

## 4. A1 Level-Appropriateness & Quality Flags

### A1 Idioms Flagged (0 entries)
Idioms in A1 vocabulary files should be reviewed for CEFR level-appropriateness.

### Unusually Long A1 Words / High Syllable Counts (55 entries)
- **Character Length**: Mean = 5.44, Std = 1.98, Threshold (+2 std) = 9.40
- **Syllable Count**: Mean = 1.65, Std = 0.80, Threshold (+2 std) = 3.25

| ID | Word | Characters | Syllables | Domain / Subcategory | Source File |
|---|---|---|---|---|---|
| `A1-ADJ-SEL-037` | beautiful | 9 | 4 | SELF/Appearance | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-063` | delicious | 9 | 4 | SELF/Appearance | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-093` | interesting | 11 | 4 | SELF/Appearance | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-NEW-044` | complicated | 11 | 4 | HOME/General | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-NEW-323` | traditional | 11 | 4 | HOME/General | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-224` | American | 8 | 4 | SELF/Identity | `vocabulary/en/A1/Adjectives/SELF/Identity/Personal_Identity.js` |
| `A1-NEW-009` | america | 7 | 4 | HOME/General | `vocabulary/en/A1/Nouns/COMMUNICATION/Language/Countries_Languages.js` |
| `A1-NOUN-COM-003` | basketball | 10 | 3 | COMMUNICATION/Leisure | `vocabulary/en/A1/Nouns/COMMUNICATION/Leisure/Athletic_Sports.js` |
| `A1-NOUN-COM-095` | photography | 11 | 4 | COMMUNICATION/Leisure | `vocabulary/en/A1/Nouns/COMMUNICATION/Leisure/Hobbies_Pastimes.js` |
| `A1-NOUN-COM-073` | smartphone | 10 | 2 | COMMUNICATION/Technology | `vocabulary/en/A1/Nouns/COMMUNICATION/Technology/Digital_Devices.js` |
| `A1-NOUN-COM-074` | television | 10 | 4 | COMMUNICATION/Technology | `vocabulary/en/A1/Nouns/COMMUNICATION/Technology/Digital_Devices.js` |
| `A1-NEW-195` | mobile phone | 12 | 4 | HOME/General | `vocabulary/en/A1/Nouns/COMMUNICATION/Technology/Digital_Devices.js` |
| `A1-NOUN-COM-075` | information | 11 | 4 | COMMUNICATION/Technology | `vocabulary/en/A1/Nouns/COMMUNICATION/Technology/Mobile_Apps.js` |
| `A1-NOUN-FOO-062` | strawberry | 10 | 3 | FOOD/Ingredients | `vocabulary/en/A1/Nouns/FOOD/Ingredients/Food_Beverages.js` |
| `A1-NOUN-FOO-066` | vegetable | 9 | 4 | FOOD/Ingredients | `vocabulary/en/A1/Nouns/FOOD/Ingredients/Food_Beverages.js` |
| `A1-NOUN-HOM-084` | refrigerator | 12 | 5 | HOME/Appliances | `vocabulary/en/A1/Nouns/HOME/Appliances/Kitchen_Appliances.js` |
| `A1-NOUN-HOM-049` | living room | 11 | 3 | HOME/Furniture | `vocabulary/en/A1/Nouns/HOME/Furniture/Living_Furniture.js` |
| `A1-NOUN-HOM-068` | toothbrush | 10 | 2 | HOME/Furniture | `vocabulary/en/A1/Nouns/HOME/Furniture/Living_Furniture.js` |
| `A1-NOUN-NAT-035` | temperature | 11 | 4 | NATURE/Environment | `vocabulary/en/A1/Nouns/NATURE/Environment/Natural_World.js` |
| `A1-NOUN-SEL-008` | sunglasses | 10 | 2 | SELF/Appearance | `vocabulary/en/A1/Nouns/SELF/Appearance/Accessories_Fashion.js` |
| `A1-NEW-103` | game console | 12 | 5 | HOME/General | `vocabulary/en/A1/Nouns/SELF/Emotions/Recreation_Interests.js` |
| `A1-NOUN-SEL-058` | grandfather | 11 | 3 | SELF/Family | `vocabulary/en/A1/Nouns/SELF/Family/Extended_Family.js` |
| `A1-NOUN-SEL-059` | grandmother | 11 | 3 | SELF/Family | `vocabulary/en/A1/Nouns/SELF/Family/Extended_Family.js` |
| `A1-NEW-108` | girlfriend | 10 | 2 | HOME/General | `vocabulary/en/A1/Nouns/SELF/Family/Nuclear_Family.js` |
| `A1-NEW-115` | granddaughter | 13 | 3 | HOME/General | `vocabulary/en/A1/Nouns/SELF/Family/Nuclear_Family.js` |

*... and 30 more long/complex entries.*
