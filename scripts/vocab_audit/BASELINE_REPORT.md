# COSYlanguages English Vocabulary Audit: Baseline Report

This document provides a comprehensive inventory and baseline analysis of all English vocabulary sources in the repository across CEFR levels A1–C2.

## 1. Executive Summary & Source Counts

| CEFR Level | Vocab JS (Files) | Manuals (HTML) | Curriculum (JSON) | Blog (A0-A1) | COSYgames (Gender) | Total Unique Words |
|---|---|---|---|---|---|---|
| **A1** | 1898 | 493 | 437 | 378 | 119 | **2313** |
| **A2** | 1168 | 0 | 188 | 0 | 18 | **1307** |
| **B1** | 329 | 0 | 189 | 0 | 18 | **519** |
| **B2** | 404 | 0 | 192 | 0 | 18 | **603** |
| **C1** | 373 | 0 | 103 | 0 | 18 | **485** |
| **C2** | 301 | 0 | 103 | 0 | 18 | **415** |

## 2. Pairwise Source Overlap & Orphan Words

### Level A1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `manuals` | 375 | 76.1% |
| `vocab_js` | `curriculum` | 246 | 56.3% |
| `vocab_js` | `blog` | 253 | 66.9% |
| `vocab_js` | `gender_games` | 118 | 99.2% |
| `manuals` | `curriculum` | 104 | 23.8% |
| `manuals` | `blog` | 97 | 25.7% |
| `manuals` | `gender_games` | 60 | 50.4% |
| `curriculum` | `blog` | 74 | 19.6% |
| `curriculum` | `gender_games` | 37 | 31.1% |
| `blog` | `gender_games` | 42 | 35.3% |

- **Orphan Words (present in exactly 1 source)**: 1603 / 2313 unique words (69.3%)

### Level A2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `curriculum` | 67 | 35.6% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 1240 / 1307 unique words (94.9%)

### Level B1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `curriculum` | 17 | 9.0% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 502 / 519 unique words (96.7%)

### Level B2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `curriculum` | 11 | 5.7% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 592 / 603 unique words (98.2%)

### Level C1

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `curriculum` | 9 | 8.7% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 476 / 485 unique words (98.1%)

### Level C2

| Source A | Source B | Overlap Count | % of Smaller Source |
|---|---|---|---|
| `vocab_js` | `curriculum` | 7 | 6.8% |
| `vocab_js` | `gender_games` | 0 | 0.0% |
| `curriculum` | `gender_games` | 0 | 0.0% |

- **Orphan Words (present in exactly 1 source)**: 408 / 415 unique words (98.3%)

## 3. Metadata Completeness Audit (Vocabulary JS)

Checks for null or missing `theme`, `domain`, or `subcategory` fields in `vocabulary/en/` entries.

- **Total entries with missing metadata**: 1628 / 4519

| ID | Word | Level | Missing Fields | Source File |
|---|---|---|---|---|
| `A1-ADJ-SEL-241` | pale | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Colours_Shades.js` |
| `A1-ADJ-SEL-242` | bald | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-243` | handsome | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-244` | neat | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-245` | slender | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-246` | slim | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-247` | wavy | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-272` | chubby | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-273` | clean-shaven | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-274` | elegant | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-275` | muscular | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-276` | overweight | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-277` | petite | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-278` | stocky | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-279` | tanned | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-280` | well-dressed | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-281` | youthful | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-282` | glamorous | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-283` | graceful | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |
| `A1-ADJ-SEL-284` | stylish | A1 | theme | `vocabulary/en/A1/Adjectives/SELF/Appearance/Descriptive_Traits.js` |

*... and 1608 more entries.*

## 4. A1 Level-Appropriateness & Quality Flags

### A1 Idioms Flagged (150 entries)
Idioms in A1 vocabulary files should be reviewed for CEFR level-appropriateness.

| ID | Word / Phrase | Sub-theme | Source File |
|---|---|---|---|
| `en_starter_idioms_001` | Piece of cake | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_002` | Break a leg | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_003` | So far so good | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_004` | Time flies | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_005` | Easy come, easy go | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_006` | Better late than never | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_007` | Make up your mind | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_008` | Keep in touch | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_009` | Step by step | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_010` | Day in, day out | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_011` | All in all | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_012` | Safe and sound | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_013` | First come, first served | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_014` | Give it a try | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_015` | Cross your fingers | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_016` | Never mind | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_017` | No problem | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_018` | Long time no see | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_019` | Make yourself at home | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_020` | Take it easy | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_021` | As good as new | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_022` | Take your time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_023` | Sooner or later | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_024` | Over and over | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_025` | Here and there | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_026` | Right now | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_027` | Good luck | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_028` | Have a good time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_029` | You are welcome | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_030` | By the way | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_031` | In fact | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_032` | At last | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_033` | On time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_034` | In time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_035` | For ever | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_036` | All day long | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_037` | From time to time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_038` | Again and again | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_039` | Little by little | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_040` | Side by side | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_041` | Hand in hand | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_042` | Face to face | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_043` | Out of order | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_044` | At home | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_045` | At work | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_046` | In a hurry | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_047` | In love | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_048` | In trouble | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_049` | On foot | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_050` | On holiday | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_051` | On sale | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_052` | On TV | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_053` | On the phone | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_054` | Out of town | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_055` | Up to date | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_056` | As soon as possible | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_057` | All the best | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_058` | Take a break | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_059` | Take a seat | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_060` | Take care | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_061` | Have fun | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_062` | Have a look | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_063` | A big deal | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_064` | Make a decision | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_065` | Make a mistake | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_066` | Make friends | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_067` | Make noise | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_068` | Pay attention | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_069` | Keep quiet | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_070` | Keep clean | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_071` | Get ready | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_072` | Get lost | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_073` | Get married | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_074` | Get up | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_075` | Go home | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_076` | Go shopping | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_077` | Go to sleep | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_078` | Come in | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_079` | Come on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_080` | Call back | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_081` | Turn on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_082` | Turn off | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_083` | Look for | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_084` | Look at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_085` | Listen to | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_086` | Wait for | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_087` | Ask for | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_088` | Talk about | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_089` | Think about | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_090` | Worry about | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_091` | Care about | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_092` | Belong to | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_093` | Depend on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_094` | Laugh at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_095` | Smile at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_096` | Shout at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_097` | Point at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_098` | Arrive at | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_099` | Arrive in | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_100` | Believe in | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_101` | Fill in | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_102` | Find out | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_103` | A change of mind | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_104` | Grow up | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_105` | Pick up | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_106` | Put on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_107` | Take off | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_108` | Throw away | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_109` | Try on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_110` | Wake up | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_111` | Write down | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_112` | At first | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_113` | At least | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_114` | At once | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_115` | At night | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_116` | By car | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_117` | By train | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_118` | By chance | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_119` | By mistake | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_120` | In a good mood | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_121` | In a bad mood | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_122` | In general | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_123` | In future | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_124` | In person | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_125` | In public | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_126` | On purpose | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_127` | On the way | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_128` | Out of stock | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_129` | Under control | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_130` | Without doubt | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_131` | All the time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_132` | And so on | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_133` | As well | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_134` | As well as | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_135` | At the moment | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_136` | At the same time | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_137` | For example | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_138` | In the end | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_139` | In my opinion | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_140` | To sum up | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_141` | Ups and downs | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_142` | Fair and square | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_143` | Clean and tidy | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_144` | More or less | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_145` | So-so | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_146` | Short and sweet | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_147` | Pros and cons | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_148` | Sooner than expected | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_149` | First of all | N/A | `vocabulary/en/A1/idioms.js` |
| `en_starter_idioms_150` | Last but not least | N/A | `vocabulary/en/A1/idioms.js` |

### Unusually Long A1 Words / High Syllable Counts (77 entries)
- **Character Length**: Mean = 6.45, Std = 2.79, Threshold (+2 std) = 12.02
- **Syllable Count**: Mean = 2.00, Std = 1.03, Threshold (+2 std) = 4.05

| ID | Word | Characters | Syllables | Domain / Subcategory | Source File |
|---|---|---|---|---|---|
| `A1-ADJ-HOM-003` | uncomfortable | 13 | 5 | HOME/Furniture | `vocabulary/en/A1/Adjectives/HOME/Furniture/Living_Furniture.js` |
| `A1-NOUN-COM-147` | advertisement | 13 | 5 | COMMUNICATION/Social | `vocabulary/en/A1/Nouns/COMMUNICATION/Social/Interactions.js` |
| `A1-NOUN-COM-163` | bulletin board | 14 | 4 | COMMUNICATION/Social | `vocabulary/en/A1/Nouns/COMMUNICATION/Social/Interactions.js` |
| `A1-NOUN-COM-165` | press release | 13 | 3 | COMMUNICATION/Social | `vocabulary/en/A1/Nouns/COMMUNICATION/Social/Interactions.js` |
| `A1-NOUN-FOO-155` | sparkling water | 15 | 4 | FOOD/Ingredients | `vocabulary/en/A1/Nouns/FOOD/Ingredients/Food_Beverages.js` |
| `A1-NOUN-HOM-084` | refrigerator | 12 | 5 | HOME/Appliances | `vocabulary/en/A1/Nouns/HOME/Appliances/Kitchen_Appliances.js` |
| `A1-NOUN-HOM-012` | remote control | 14 | 5 | HOME/Furniture | `vocabulary/en/A1/Nouns/HOME/Furniture/Household_Goods.js` |
| `A1-NOUN-HOM-016` | washing machine | 15 | 4 | HOME/Furniture | `vocabulary/en/A1/Nouns/HOME/Furniture/Household_Goods.js` |
| `A1-NOUN-SEL-180` | personality | 11 | 5 | SELF/Identity | `vocabulary/en/A1/Nouns/SELF/Identity/General_Identity.js` |
| `A1-NOUN-SEL-094` | nationality | 11 | 5 | SELF/Identity | `vocabulary/en/A1/Nouns/SELF/Identity/Identity_Details.js` |
| `A1-NOUN-TRA-108` | botanical garden | 16 | 6 | TRAVEL/Places | `vocabulary/en/A1/Nouns/TRAVEL/Places/Locations_Venues.js` |
| `A1-NOUN-TRA-148` | information desk | 16 | 5 | TRAVEL/Places | `vocabulary/en/A1/Nouns/TRAVEL/Places/Locations_Venues.js` |
| `A1-NOUN-TRA-150` | railway station | 15 | 4 | TRAVEL/Places | `vocabulary/en/A1/Nouns/TRAVEL/Places/Locations_Venues.js` |
| `A1-NOUN-TRA-152` | subway station | 14 | 4 | TRAVEL/Places | `vocabulary/en/A1/Nouns/TRAVEL/Places/Locations_Venues.js` |
| `A1-NOUN-TRA-127` | itinerary | 9 | 5 | TRAVEL/Transport | `vocabulary/en/A1/Nouns/TRAVEL/Transport/Travel_Journeys.js` |
| `A1-NOUN-WOR-002` | university | 10 | 5 | WORK_SCHOOL/Education | `vocabulary/en/A1/Nouns/WORK_SCHOOL/Education/Education_Systems.js` |
| `A1-NOUN-WOR-135` | flight attendant | 16 | 4 | WORK_SCHOOL/Work | `vocabulary/en/A1/Nouns/WORK_SCHOOL/Work/Jobs_Careers.js` |
| `A1-NOUN-WOR-144` | veterinarian | 12 | 5 | WORK_SCHOOL/Work | `vocabulary/en/A1/Nouns/WORK_SCHOOL/Work/Jobs_Careers.js` |
| `A1-NOUN-WOR-145` | administrator | 13 | 5 | WORK_SCHOOL/Work | `vocabulary/en/A1/Nouns/WORK_SCHOOL/Work/Jobs_Careers.js` |
| `A1-NOUN-WOR-057` | police officer | 14 | 6 | WORK_SCHOOL/Work | `vocabulary/en/A1/Nouns/WORK_SCHOOL/Work/Professions.js` |
| `A1-OTH-TIM-011` | immediately | 11 | 5 | TIME_NUMBERS/Time | `vocabulary/en/A1/Other_POS/TIME_NUMBERS/Time/Clocks_Periods.js` |
| `A1-OTH-TIM-026` | occasionally | 12 | 5 | TIME_NUMBERS/Time | `vocabulary/en/A1/Other_POS/TIME_NUMBERS/Time/Clocks_Periods.js` |
| `A1-OTH-TIM-029` | continuously | 12 | 5 | TIME_NUMBERS/Time | `vocabulary/en/A1/Other_POS/TIME_NUMBERS/Time/Clocks_Periods.js` |
| `A1-OTH-TRA-004` | Albert Einstein | 15 | 4 | TRAVEL/Places | `vocabulary/en/A1/Other_POS/TRAVEL/Places/Locations_Venues.js` |
| `A1-OTH-TRA-018` | Cristiano Ronaldo | 17 | 6 | TRAVEL/Places | `vocabulary/en/A1/Other_POS/TRAVEL/Places/Locations_Venues.js` |

*... and 52 more long/complex entries.*
