# COSYlanguages "Storytelling" (Story Weaver) - Game Design & Curriculum Blueprint

This document serves as the official high-fidelity design proposal, architectural blueprint, and complete educational curriculum database for the brand-new immersive, creative storytelling game: **Storytelling (Story Weaver) 📖**.

Designed for both solo and collaborative group play, this game challenges students to construct cohesive narratives while reinforcing grammatical accuracy, lexical variety, and smooth logical transition links. The difficulty scales dynamically across the CEFR spectrum (A1 to C2).

---

## 1. Core Game Concept & Logical Loop

The main aspect of **Storytelling (Story Weaver)** is to develop an ongoing, creative story piece by piece, where each sentence or paragraph written is constrained by a randomly drawn grammatical structure corresponding to the player's selected CEFR level.

For an advanced challenge, players can enable a **Thematic Vocabulary Modifier**, which draws a randomized target word from a relevant lexical theme of their level.

### Standard Loop:
```
[Select Level & Language] ➔ [Toggle Thematic Vocab (On/Off)] ➔ [Start Game]
                                    │
                                    ▼
                     ┌─────────────────────────────┐
                     │   Render Game Arena:        │
                     │   - Active Storyboard       │
                     │   - Grammar Constraint Card │
                     │   - Vocab Theme Card (Opt)  │
                     └──────────────┬──────────────┘
                                    │
                                    ▼
                     ┌─────────────────────────────┐
                     │   Player Inputs Sentence    │
                     └──────────────┬──────────────┘
                                    │
                                    ▼
                      [Validate & Apply Gamification]
                      - Check Vocab Presence
                      - Self-Check Grammar / Peer Vote
                      - Play 8-bit Chime / Confetti
                      - Add to Interactive Storyboard
                                    │
                                    ▼
                       [Draw Next Card / Round]
```

---

## 2. Complete Grammar Curriculum by CEFR Level

Here is the exhaustive, full grammar curriculum mapping designed to feed the random constraint engine of the game:

### 🌟 Level A1: Beginner / Starter
*Focuses on high-frequency, concrete structures, basic statements of existence, possession, and simple habitual actions.*

1. **Verb "to be" (Positive / Negative / Questions)**
   - *Anchor:* `am/is/are` or `am not/isn't/aren't`
   - *Clue:* Introduce a character or describe an object.
   - *E.g.:* "He is a mysterious traveler, but he isn't afraid."
2. **Present Simple (Habits & Facts)**
   - *Anchor:* Regular verb stems or `-s/-es` endings for 3rd person singular.
   - *Clue:* Describe a character's routine or a universal fact in your world.
   - *E.g.:* "Every morning, the wizard wakes up at dawn."
3. **Plural Nouns (Regular & Irregular)**
   - *Anchor:* `nouns with -s/-es` or irregulars like `children / men / women / feet`
   - *Clue:* Describe multiple things in the scene.
   - *E.g.:* "There are three keys hidden in the old wooden chests."
4. **Possessive Adjectives**
   - *Anchor:* `my / your / his / her / its / our / their`
   - *Clue:* Indicate who owns a specific item in the story.
   - *E.g.:* "Her dog barks loudly when it hears footsteps."
5. **There is / There are (Existence)**
   - *Anchor:* `There is + singular` or `There are + plural`
   - *Clue:* Set up the scene or landscape.
   - *E.g.:* "There is a secret door behind the heavy bookshelf."
6. **Can / Can't (Ability)**
   - *Anchor:* `can / cannot / can't + Verb`
   - *Clue:* State what a character is physically able (or unable) to do.
   - *E.g.:* "The little bird can fly high, but it can't carry the heavy ring."
7. **Basic Imperatives (Instructions / Direct Actions)**
   - *Anchor:* `Bare infinitive (no subject)` or `Don't + verb`
   - *Clue:* Make a character shout or write a warning sign.
   - *E.g.:* "Stop! Don't enter that dark cave."
8. **Demonstratives**
   - *Anchor:* `this / that / these / those`
   - *Clue:* Contrast close items with distant ones.
   - *E.g.:* "This map is useful, but those mountains over there look dangerous."
9. **Pronouns - Subject & Object**
   - *Anchor:* `I / you / he / she / it / we / they` AND `me / you / him / her / it / us / them`
   - *Clue:* Refer back to characters already introduced.
   - *E.g.:* "The guide met them at the gate and showed them the path."
10. **Prepositions of Place (Basic)**
    - *Anchor:* `in / on / under / behind / next to / in front of`
    - *Clue:* Pinpoint the physical location of an important clue.
    - *E.g.:* "The letter was hidden under the heavy bronze candle holder."

---

### 🌟 Level A2: Elementary / Primary
*Introduces narrative past events, continuous actions, comparisons, and basic obligations.*

1. **Past Simple (Regular & Irregular)**
   - *Anchor:* `Verb + -ed` or irregular past forms (e.g. `went / bought / saw / took`)
   - *Clue:* Tell a completed action that happened in the past.
   - *E.g.:* "The king saw the golden crown and smiled."
2. **Past Continuous (Actions in Progress)**
   - *Anchor:* `was/were + Verb-ing`
   - *Clue:* Describe the background atmosphere when something else happened.
   - *E.g.:* "The rain was falling heavily while they walked through the forest."
3. **Used to (Past Habits / Changed States)**
   - *Anchor:* `used to + Infinitive`
   - *Clue:* Detail how a character or place was different in the old days.
   - *E.g.:* "The old man used to be a brave knight in his youth."
4. **Basic Comparatives & Superlatives**
   - *Anchor:* `Adjective-er + than` / `more Adjective than` / `the Adjective-est`
   - *Clue:* Compare two characters, items, or locations.
   - *E.g.:* "The silver sword was sharper than the bronze spear."
5. **Modals of Obligation / Necessity**
   - *Anchor:* `have to / must / don't have to`
   - *Clue:* Frame a strict rule or task a character faces.
   - *E.g.:* "The hero must find the magical potion before midnight."
6. **Modals of Advice**
   - *Anchor:* `should / shouldn't + Verb`
   - *Clue:* Give warning advice to a character.
   - *E.g.:* "You should not drink water from the glowing river."
7. **Be going to (Future Intentions)**
   - *Anchor:* `am/is/are + going to + Verb`
   - *Clue:* Detail a character's immediate plan or upcoming action.
   - *E.g.:* "They are going to cross the bridge tomorrow morning."
8. **Infinitive of Purpose**
   - *Anchor:* `to + Verb` (meaning "in order to")
   - *Clue:* Describe the motive behind a character's physical travel or action.
   - *E.g.:* "He climbed the tallest tree to see the distant city."
9. **Adjectives ending in -ed vs -ing**
   - *Anchor:* `tired / tiring / bored / boring / excited / exciting`
   - *Clue:* Express both how a character feels and the situation causing it.
   - *E.g.:* "The long walk was tiring, so the exhausted traveler rested."
10. **Prepositions of Time**
    - *Anchor:* `at / on / in`
    - *Clue:* Specify the exact hour, day, or season of a major plot point.
    - *E.g.:* "In the winter, they stayed indoors, but at midnight they went outside."

---

### 🌟 Level B1: Intermediate
*Encourages connecting events via relative clauses, expressing experiences, passivity, and speculative possibilities.*

1. **Present Perfect Simple (Experience & Recent Actions)**
   - *Anchor:* `have/has + Past Participle (ever / never / already / yet / just)`
   - *Clue:* Mention whether a character has experienced something in their life.
   - *E.g.:* "The explorer has traveled to many mysterious islands, but has never seen a dragon."
2. **Present Perfect with For & Since (Duration)**
   - *Anchor:* `have/has + Past Participle + for/since`
   - *Clue:* State an ongoing situation that started in the past.
   - *E.g.:* "The magical sword has remained in the stone for three centuries."
3. **First Conditional (Real Future Scenarios)**
   - *Anchor:* `If + Present Simple, will + Verb`
   - *Clue:* Formulate a realistic cause-and-effect warning or prediction.
   - *E.g.:* "If you touch the crystal, the castle will collapse."
4. **Second Conditional (Hypothetical / Imagined Situations)**
   - *Anchor:* `If + Past Simple, would + Verb`
   - *Clue:* Describe an unrealistic, dream, or highly unlikely scenario.
   - *E.g.:* "If they had a key, they would open the golden gates."
5. **Passive Voice (Present & Past)**
   - *Anchor:* `is/are/was/were + Past Participle`
   - *Clue:* Shift focus from who did the action to what happened to the object.
   - *E.g.:* "The ancient book of spells was stolen during the storm."
6. **Defining Relative Clauses**
   - *Anchor:* `who / which / that / where / whose`
   - *Clue:* Define a specific person, place, or object in detail.
   - *E.g.:* "The guide who led them into the valley looked extremely suspicious."
7. **Modals of Deduction (Present Probability)**
   - *Anchor:* `must be / might be / can't be + Adjective/Noun`
   - *Clue:* Make a character guess or reason about a mystery.
   - *E.g.:* "The fire is still warm, so someone must be nearby."
8. **Verbs followed by Gerund or Infinitive (with change in meaning)**
   - *Anchor:* `remember / forget / stop / try + -ing or to-Verb`
   - *Clue:* Focus on a character's mental attempt or memory.
   - *E.g.:* "He tried to open the window, but the rusty hinges wouldn't move."
9. **Past Continuous contrasting Past Simple**
   - *Anchor:* `was/were + -ing contrasting with past -ed`
   - *Clue:* Present a sudden interruption during an ongoing event.
   - *E.g.:* "They were eating dinner when a knock sounded at the door."
10. **Quantifiers (Expressing amounts)**
    - *Anchor:* `much / many / plenty of / a few / a little / too many / not enough`
    - *Clue:* Detail the supply, assets, or resources your characters possess.
    - *E.g.:* "They had plenty of gold coins but not enough fresh water."

---

### 🌟 Level B2: Upper-Intermediate
*Deepens complexity with past regrets, reported speech, passive reporting, continuous tenses, and relative clauses.*

1. **Past Perfect Simple (Chronological Sequencing)**
   - *Anchor:* `had + Past Participle`
   - *Clue:* Show that one past event happened strictly before another past event.
   - *E.g.:* "By the time the search party arrived, the treasure had already disappeared."
2. **Third Conditional (Past Hypotheses & Regrets)**
   - *Anchor:* `If + had + V3, would have + V3`
   - *Clue:* Speculate about how a past situation could have turned out differently.
   - *E.g.:* "If the warrior had worn his armor, the arrow would not have injured him."
3. **Reported Speech (Tense Shifts & Reporting Verbs)**
   - *Anchor:* `reported verbs like claimed / warned / agreed / denied + shifted past tense`
   - *Clue:* State what a character said without quoting them directly.
   - *E.g.:* "The merchant claimed that the map was authentic, but nobody believed him."
4. **Mixed Conditionals (Past Cause, Present Effect & Vice Versa)**
   - *Anchor:* `If + had + V3, would + Verb` / `If + Past Simple, would have + V3`
   - *Clue:* Connect a past decision or state with a current, ongoing consequence.
   - *E.g.:* "If he hadn't lost his compass yesterday, he wouldn't be lost in the desert now."
5. **Non-Defining Relative Clauses**
   - *Anchor:* `, who/which/whose/where [extra information] ,` (with commas)
   - *Clue:* Add non-essential parenthetical information about a character or place.
   - *E.g.:* "The Dark Mountains, which are covered in perpetual snow, are home to wild beasts."
6. **Modals of Deduction (Past Probability)**
   - *Anchor:* `must have been / could have been / can't have been + V3`
   - *Clue:* Infer what definitely (or definitely didn't) happen in the past.
   - *E.g.:* "The iron gates were bent; a massive creature must have escaped."
7. **Passive Reporting Structures (Impersonal Passive)**
   - *Anchor:* `It is said that / [Subject] is believed to be`
   - *Clue:* Introduce a myth, legend, or rumor circulating in your world.
   - *E.g.:* "The forest is believed to be guarded by ancient woodland spirits."
8. **Future Continuous & Future Perfect**
   - *Anchor:* `will be + Verb-ing` / `will have + Past Participle`
   - *Clue:* Project into the future of the story to mark a milestone or action in progress.
   - *E.g.:* "By tomorrow evening, the explorers will have reached the summit."
9. **Wish & If Only (Present / Future regret)**
   - *Anchor:* `I wish / If only + Past Simple / would + Verb`
   - *Clue:* Express current annoyance or frustration about a scenario.
   - *E.g.:* "I wish the guard would stop checking the gate every ten minutes."
10. **Adjectives with dependent prepositions (advanced)**
    - *Anchor:* `good at / responsible for / worried about / interested in / keen on / obsessed with`
    - *Clue:* Attribute strong psychological or technical traits to characters.
    - *E.g.:* "She was obsessed with ancient runes and was keen on translating them."

---

### 🌟 Level C1: Advanced
*Introduces expressive emphasis, cleft formatting, negative inversions, and advanced unreal structures.*

1. **Negative Adverbial Inversions (Emphasis & Dramatic Effect)**
   - *Anchor:* `Rarely / Seldom / No sooner / Not only / Little + Auxiliary + Subject + Verb`
   - *Clue:* Build intense suspense or drama in your narrative.
   - *E.g.:* "Little did the princess know that her closest advisor was plotting a rebellion."
2. **Cleft Sentences (Focus Shifts)**
   - *Anchor:* `What [Subject] [Verb] is/was` / `It is/was [Focus] that`
   - *Clue:* Focus the reader's attention on a single, crucial element in the sentence.
   - *E.g.:* "What alarmed the horses was the sudden, dead silence of the woods."
3. **Unreal Past / Regrets & Desires**
   - *Anchor:* `I wish + Past Perfect` / `If only + Past Perfect` / `It's high time + Subject + Past Simple`
   - *Clue:* Express deep despair, longing, or critical feedback.
   - *E.g.:* "If only they had listened to the old sailor's warning before embarking."
4. **Inverted Conditionals (Omission of "If")**
   - *Anchor:* `Had [Subject] + V3` / `Should you + Verb` / `Were I + Infinitive`
   - *Clue:* Draft a formal pact, prophecy, or solemn promise.
   - *E.g.:* "Had she known the price of the magical medallion, she would never have bought it."
5. **Participle Clauses (Active / Passive / Perfect)**
   - *Anchor:* `Verb-ing (Active)` / `Past Participle (Passive)` / `Having + Past Participle (Perfect)`
   - *Clue:* Combine two actions by starting the sentence with a participle clause.
   - *E.g.:* "Having secured the horses, the guards cautiously entered the ruined tower."
6. **Subjunctive Mood (Formal Demands & Urgency)**
   - *Anchor:* `demand / insist / request / crucial + that + Subject + Base Verb`
   - *Clue:* Describe a formal decree, command, or imperative counsel.
   - *E.g.:* "The council insisted that the stranger leave the town before nightfall."
7. **Adverbial Clauses of Concession & Contrast (Advanced)**
   - *Anchor:* `Much as / Albeit / Even so / Notwithstanding`
   - *Clue:* Express a major obstacle that doesn't stop the main event.
   - *E.g.:* "Much as they wanted to rest, they had to press onward through the dark."
8. **Future in the Past**
   - *Anchor:* `was/were about to` / `was/were destined to` / `was/were due to`
   - *Clue:* Portend a future tragic or historic event that was inevitable.
   - *E.g.:* "They laughed around the campfire, unaware that they were about to face their greatest test."
9. **Modal Verbs of Past Duty / Regret**
   - *Anchor:* `should have / shouldn't have / could have / might have + V3`
   - *Clue:* Point out past mistakes made by your protagonists.
   - *E.g.:* "The archers should have checked their arrows before the fight."
10. **Verbs of Sensation with Infinitive or Gerund**
    - *Anchor:* `hear / see / feel / watch + bare infinitive vs -ing`
    - *Clue:* Describe sensory perception of completed actions vs actions in progress.
    - *E.g.:* "We watched the ancient bridge collapse and heard the rocks crashing below."

---

### 🌟 Level C2: Mastery
*Achieves native-level stylistic range, highly complex structures, modal expressions, and absolute syntactic precision.*

1. **Inversion after Prepositional / Locational Phrases**
   - *Anchor:* `Prepositional Phrase + Verb + Subject` (no auxiliary)
   - *Clue:* Set an elegant, cinematic scene.
   - *E.g.:* "On the edge of the dark cliff stood the mysterious castle."
2. **Double Comparatives for Progression & Correlation**
   - *Anchor:* `The comparative..., the comparative...`
   - *Clue:* Show a direct relationship between two rising tensions or scales.
   - *E.g.:* "The deeper they ventured into the cave, the heavier the air became."
3. **Concessive Inversions (Adjective / Adverb + "As" / "Though")**
   - *Anchor:* `Adjective + as/though + Subject + be`
   - *Clue:* Show a character defying their apparent physical limitations.
   - *E.g.:* "Exhausted though they were, they managed to carry the wounded wolf to safety."
4. **Advanced Passive Infinitive & Gerund**
   - *Anchor:* `to have been + V3` / `having been + V3`
   - *Clue:* Describe a state of affairs after undergoing a major experience.
   - *E.g.:* "He resented having been kept in the dark about his family's royal heritage."
5. **Complex Modal Expressions of Past Regret & Relief**
   - *Anchor:* `need not have + V3` vs `did not need to + Verb`
   - *Clue:* Compare an unnecessary action that was done with one that was avoided.
   - *E.g.:* "They need not have brought torches, as the crystals illuminated the entire pathway."
6. **Nominalization (Expressive Noun-Headed Syntax)**
   - *Anchor:* `Turning verbs/adjectives into nouns` (e.g., "The sudden discovery of..." instead of "They suddenly discovered...")
   - *Clue:* Write in an epic, formal, or historic chronicle tone.
   - *E.g.:* "The sudden collapse of the alliance plunged the realm into immediate chaos."
7. **Syntactic Redundancy / Emphatic "Do" in Past/Future Hypotheses**
   - *Anchor:* `If + Subject + should/were to + Verb`
   - *Clue:* Formulate a highly precise prophecy of warning.
   - *E.g.:* "Should the seal be broken, a curse of immense power would be unleashed."
8. **Parenthetical Hypallage or Transferred Epithet Contexts**
   - *Anchor:* `Highly advanced metaphorical adjective placement` (e.g., "a sleepless night", "thoughtful silences")
   - *Clue:* Write deep literary prose describing a character's state.
   - *E.g.:* "They spent a sleepless night listening to the suspicious howling of the wolves."
9. **Conditional Clauses with "but for"**
   - *Anchor:* `But for + noun phrase, subject would (have)...`
   - *Clue:* Express that a single critical detail was the sole reason a major event didn't fail.
   - *E.g.:* "But for his timely arrival, the secret map would have been burnt."
10. **Preposed Adverbs with Subject-Verb Inversion**
    - *Anchor:* `Adverb (e.g., Away / Up / Off) + Verb + Subject`
    - *Clue:* Build high-paced kinetic movement in your narrative.
    - *E.g.:* "Away rode the mysterious messenger, vanishing into the mist."

---

## 3. Complete Vocabulary Themes & Target Lists by CEFR Level

When players activate the **Thematic Vocabulary Modifier**, the game draws an age-appropriate, CEFR-calibrated word from the target theme.

### 🏷️ Level A1: Beginner
*   **Theme 1: Animals**
    *   *Vocabulary:* `dog`, `cat`, `bird`, `fish`, `horse`, `cow`, `pig`, `sheep`, `mouse`, `lion`
*   **Theme 2: Furniture & Household**
    *   *Vocabulary:* `table`, `chair`, `bed`, `door`, `window`, `desk`, `sofa`, `shelf`, `lamp`, `box`
*   **Theme 3: Food & Drink**
    *   *Vocabulary:* `apple`, `bread`, `milk`, `water`, `tea`, `cheese`, `egg`, `fruit`, `meat`, `rice`
*   **Theme 4: Nature & Weather**
    *   *Vocabulary:* `sun`, `rain`, `wind`, `tree`, `flower`, `river`, `sea`, `star`, `sky`, `fire`
*   **Theme 5: Colors & Shapes**
    *   *Vocabulary:* `red`, `blue`, `green`, `yellow`, `black`, `white`, `circle`, `square`, `round`, `line`
*   **Theme 6: Everyday Objects**
    *   *Vocabulary:* `key`, `book`, `bag`, `pen`, `phone`, `clock`, `cup`, `plate`, `hat`, `shoe`
*   **Theme 7: Family & People**
    *   *Vocabulary:* `mother`, `father`, `brother`, `sister`, `baby`, `man`, `woman`, `child`, `friend`, `family`
*   **Theme 8: Time & Seasons**
    *   *Vocabulary:* `day`, `night`, `week`, `month`, `year`, `morning`, `evening`, `summer`, `winter`, `clock`

### 🏷️ Level A2: Elementary
*   **Theme 1: Places & Buildings**
    *   *Vocabulary:* `castle`, `bridge`, `forest`, `mountain`, `shop`, `library`, `palace`, `hospital`, `market`, `village`
*   **Theme 2: Work & Careers**
    *   *Vocabulary:* `worker`, `doctor`, `captain`, `soldier`, `farmer`, `teacher`, `manager`, `artist`, `driver`, `guide`
*   **Theme 3: Social & Leisure**
    *   *Vocabulary:* `party`, `holiday`, `hobby`, `friend`, `game`, `gift`, `music`, `dinner`, `invitation`, `walk`
*   **Theme 4: Describing People**
    *   *Vocabulary:* `brave`, `clever`, `quiet`, `tired`, `friendly`, `angry`, `happy`, `sad`, `tall`, `young`
*   **Theme 5: Transport & Travel**
    *   *Vocabulary:* `train`, `plane`, `bus`, `boat`, `ticket`, `station`, `hotel`, `map`, `baggage`, `trip`
*   **Theme 6: Health & Body**
    *   *Vocabulary:* `head`, `hand`, `foot`, `heart`, `pain`, `medicine', `ill`, `well`, `doctor`, `sleep`
*   **Theme 7: Shopping & Clothes**
    *   *Vocabulary:* `coat`, `shirt`, `trousers`, `dress`, `cost`, `buy`, `price`, `market`, `shop`, `money`
*   **Theme 8: Sports & Activities**
    *   *Vocabulary:* `play`, `run`, `swim`, `game`, `ball`, `team`, `win`, `lose`, `sport`, `walk`

### 🏷️ Level B1: Intermediate
*   **Theme 1: Tech & Digital Life**
    *   *Vocabulary:* `internet`, `device`, `password`, `screen`, `application`, `connection`, `network`, `software`, `online`, `update`
*   **Theme 2: Travel & Exploration**
    *   *Vocabulary:* `commute`, `journey`, `delay`, `passenger`, `destination`, `ticket`, `luggage`, `adventure`, `route`, `map`
*   **Theme 3: Emotions & Moods**
    *   *Vocabulary:* `surprised`, `worried`, `excited`, `disappointed`, `nervous`, `confident`, `confused`, `relaxed`, `embarrassed`, `bored`
*   **Theme 4: Environment**
    *   *Vocabulary:* `ecology`, `climate`, `pollution`, `nature`, `resource`, `energy`, `planet`, `protect`, `wildlife`, `scenery`
*   **Theme 5: Commerce & Finance**
    *   *Vocabulary:* `budget`, `salary`, `tax`, `account`, `transaction`, `expense`, `debt`, `invest`, `profit`, `save`
*   **Theme 6: Health & Lifestyle**
    *   *Vocabulary:* `nutrition`, `exercise`, `stress`, `disease`, `treatment`, `wellness`, `diet`, `recovery`, `muscle`, `clinic`
*   **Theme 7: Education & Study**
    *   *Vocabulary:* `subject`, `degree`, `lecture`, `exam`, `research`, `science`, `scholar`, `skills`, `course`, `lesson`
*   **Theme 8: Society & Culture**
    *   *Vocabulary:* `community`, `tradition`, `custom`, `citizen`, `government`, `celebration`, `event`, `opinion`, `law`, `justice`

### 🏷️ Level B2: Upper-Intermediate
*   **Theme 1: Art, Literature & Media**
    *   *Vocabulary:* `masterpiece`, `sculpture`, `critic`, `novel`, `character`, `plot`, `exhibition`, `portrait`, `genre`, `performance`
*   **Theme 2: Relationships & Society**
    *   *Vocabulary:* `colleague`, `promotion`, `salary`, `landlord`, `tenant`, `neighbour`, `community`, `tradition`, `respect`, `rebellion`
*   **Theme 3: Abstract Psychology**
    *   *Vocabulary:* `ambition`, `tolerance`, `stubbornness`, `generosity`, `confidence`, `patience`, `honesty`, `sensitivity`, `reliability`, `anxiety`
*   **Theme 4: Problem Narration**
    *   *Vocabulary:* `challenge`, `mistake`, `consequence`, `solution`, `decision`, `crisis`, `obstacle`, `progress`, `compromise`, `disaster`
*   **Theme 5: Technology & Innovation**
    *   *Vocabulary:* `automation`, `intelligence`, `virtual`, `cybersecurity`, `efficiency`, `pioneering`, `infrastructure`, `developer`, `invention`, `gadget`
*   **Theme 6: Environment & Energy**
    *   *Vocabulary:* `sustainability`, `renewable`, `biodiversity`, `conservation`, `extinction`, `emissions`, `habitat`, `ecosystem`, `fossil`, `disposal`
*   **Theme 7: Business & Management**
    *   *Vocabulary:* `negotiation`, `strategy`, `colleague`, `corporation`, `merger`, `leadership`, `market`, `contract`, `profitability`, `bankruptcy`
*   **Theme 8: Crime & Justice**
    *   *Vocabulary:* `investigation`, `evidence`, `suspect`, `verdict`, `accuse`, `witness`, `trial`, `crime`, `punishment`, `prison`

### 🏷️ Level C1: Advanced
*   **Theme 1: Philosophy & Existential Themes**
    *   *Vocabulary:* `absurdity`, `loneliness`, `mortality`, `solitude`, `fate`, `destiny`, `conscience`, `morality`, `legacy`, `free_will`
*   **Theme 2: Advanced Science & Technology**
    *   *Vocabulary:* `hypothesis`, `anomaly`, `synthesis`, `innovative`, `correlation`, `breakthrough`, `artificial`, `equilibrium`, `evolution`, `mechanism`
*   **Theme 3: Complex Emotions & States**
    *   *Vocabulary:* `apprehensive`, `vulnerable`, `resilient`, `skeptical`, `reluctant`, `indifferent`, `melancholy`, `passionate`, `bewildered`, `exhilarated`
*   **Theme 4: Rhetoric & Debate**
    *   *Vocabulary:* `controversial`, `perspective`, `contradiction`, `advocate`, `assert`, `refute`, `implication`, `consensus`, `fallacy`, `paradox`
*   **Theme 5: Politics & Governance**
    *   *Vocabulary:* `legislative`, `constituency`, `referendum`, `ideology`, `autocracy`, `diplomacy`, `treaty`, `bureaucratic`, `lobbyist`, `governance`
*   **Theme 6: Art & Aesthetics**
    *   *Vocabulary:* `abstract`, `avant-garde`, `critique`, `medium`, `expressionism`, `sensory`, `provocative`, `symmetry`, `interpretation`, `aesthetic`
*   **Theme 7: Economics & Markets**
    *   *Vocabulary:* `monopoly`, `recession`, `inflation`, `deficit`, `liquidity`, `commodities`, `fiscal`, `prosperity`, `equilibrium`, `infrastructure`
*   **Theme 8: Sociology & Behavior**
    *   *Vocabulary:* `demographics`, `integration`, `prejudice`, `acculturation`, `hierarchy`, `paradigm`, `phenomenon`, `customary`, `marginalization`, `behavior`

### 🏷️ Level C2: Mastery
*   **Theme 1: Nuanced Human Behavior**
    *   *Vocabulary:* `mercurial`, `unwavering`, `idiosyncrasy`, `altruism`, `malevolence`, `indolence`, `meticulous`, `capricious`, `dogmatic`, `pragmatism`
*   **Theme 2: High Literature & Poetics**
    *   *Vocabulary:* `ephemeral`, `ethereal`, `soliloquy`, `allusion`, `cacophony`, `juxtaposition`, `melancholic`, `melodramatic`, `resonance`, `verisimilitude`
*   **Theme 3: Global Systems & Geopolitics**
    *   *Vocabulary:* `sovereignty`, `hegemony`, `globalization`, `bureaucracy`, `infrastructure`, `diplomacy`, `sanction`, `jurisdiction`, `alignment`, `autonomy`
*   **Theme 4: Philosophical Concepts**
    *   *Vocabulary:* `determinism`, `solipsism`, `nihilism`, `existentialism`, `stoicism`, `empiricism`, `dualism`, `transcendence`, `altruistic`, `pragmatic`
*   **Theme 5: Natural Disasters & Cosmic Phenomena**
    *   *Vocabulary:* `cataclysmic`, `supernova`, `conflagration`, `vortex`, `dessecation`, `obliteration`, `apocalyptic`, `celestial`, `equilibrium`, `phenomenon`
*   **Theme 6: Law & Jurisprudence**
    *   *Vocabulary:* `indictment`, `litigation`, `acquittal`, `nullification`, `precedent`, `codification`, `testimony`, `jurisdiction`, `statute`, `sanction`
*   **Theme 7: Medicine & Pathology**
    *   *Vocabulary:* `pathogen`, `asymptomatic`, `neurological`, `congenital`, `prognosis`, `malignancy`, `efficacy`, `pandemic`, `syndrome`, `treatment`
*   **Theme 8: Advanced Finance & Speculation**
    *   *Vocabulary:* `arbitrage`, `amortization`, `diversification`, `insolvency`, `portfolio`, `speculator`, `valuation`, `volatility`, `capitalization`, `fiscal`

---

## 4. Comprehensive Linking Words / Discourse Connectors by Level

To support students during gameplay, the UI includes a **"Linking Words Help Drawer"** containing level-calibrated logical connectors. Using these words grants an automatic **"Complexity Bonus! +5 XP"** to their turn score.

### 🔗 Level A1: Basic Connections
*Useful for basic conjunctions, listing, and direct reason.*

*   **and** - *Usage:* Adds information.
    *   *E.g.:* "He got up **and** opened the door."
*   **but** - *Usage:* Introduces contrast.
    *   *E.g.:* "She was tired, **but** she continued reading."
*   **because** - *Usage:* States a reason.
    *   *E.g.:* "They stopped **because** it was raining."
*   **or** - *Usage:* Gives choices.
    *   *E.g.:* "Should we turn left **or** right?"
*   **then** - *Usage:* Marks chronological sequence.
    *   *E.g.:* "First, she ate dinner, **then** she fell asleep."

---

### 🔗 Level A2: Chronology & Basic Contrast
*Enables chronological storytelling and simple transitions.*

*   **after that** - *Usage:* Moves to the next event in a timeline.
    *   *E.g.:* "They reached the river; **after that**, they set up camp."
*   **also** - *Usage:* Adds another positive point.
    *   *E.g.:* "The book was exciting, and it was **also** quite short."
*   **while** - *Usage:* Shows simultaneous actions.
    *   *E.g.:* "He played music **while** she was cooking."
*   **firstly / secondly** - *Usage:* Enumerates sequential points.
    *   *E.g.:* "**Firstly**, we need wood; **secondly**, we need a match."
*   **so** - *Usage:* Expresses result.
    *   *E.g.:* "The bridge was broken, **so** they had to swim."

---

### 🔗 Level B1: Logical Cause, Effect & Concession
*Introduces professional and formal structures of concession and argument structuring.*

*   **although** - *Usage:* Concedes a point before introducing the main clause.
    *   *E.g.:* "**Although** the sun was shining, the wind was freezing."
*   **however** - *Usage:* Smoothly transitions to a counter-argument.
    *   *E.g.:* "The plan was perfect; **however**, they lacked resources."
*   **therefore** - *Usage:* Draws a strong logical consequence.
    *   *E.g.:* "He had lost his sword; **therefore**, he had to retreat."
*   **since** - *Usage:* Expresses cause (similar to 'because' but more formal).
    *   *E.g.:* "**Since** you are here, help me open this door."
*   **besides** - *Usage:* Adds an extra, highly persuasive argument.
    *   *E.g.:* "It is too late; **besides**, we don't know the way."

---

### 🔗 Level B2: Nuanced Comparison & Refinement
*Supports advanced structuring, emphasis, and conditional transitions.*

*   **furthermore** - *Usage:* Adds major supplementary evidence.
    *   *E.g.:* "The forest is dark; **furthermore**, it is filled with traps."
*   **on the other hand** - *Usage:* Presents a contrasting perspective or alternative.
    *   *E.g.:* "The mountain path is fast; **on the other hand**, it is dangerous."
*   **unless** - *Usage:* Expresses negative condition.
    *   *E.g.:* "We will fail **unless** we work together."
*   **as long as** - *Usage:* Establishes a strict condition for success.
    *   *E.g.:* "You can borrow the map **as long as** you return it tomorrow."
*   **consequently** - *Usage:* Expresses formal outcome of a situation.
    *   *E.g.:* "The castle gate was unlocked; **consequently**, they walked in."

---

### 🔗 Level C1: Advanced Rhetoric & Concession
*Enables seamless prose, subtle contradictions, and formal academic flow.*

*   **nevertheless** - *Usage:* Stands in strong defiance of preceding obstacles.
    *   *E.g.:* "The odds were hopeless; **nevertheless**, they fought on."
*   **whereas** - *Usage:* Highlights precise, balanced comparison between two subjects.
    *   *E.g.:* "He preferred raw action, **whereas** she favored cautious dialogue."
*   **despite / in spite of** - *Usage:* Followed directly by a noun phrase or gerund for concession.
    *   *E.g.:* "**Despite** having no weapons, she walked boldly toward the guard."
*   **nonetheless** - *Usage:* Defies previous negative conditions (extremely elegant).
    *   *E.g.:* "It was risky; **nonetheless**, the reward was too great to ignore."
*   **consequently** / **accordingly** - *Usage:* Aligns actions in exact conformity with a premise.
    *   *E.g.:* "The king demanded silence; **accordingly**, everyone stopped whispering."

---

### 🔗 Level C2: Absolute Literary & Precise Mastery
*Provides the ultimate syntactic polish for fluid, native-level master storytelling.*

*   **albeit** - *Usage:* Concedes a single descriptive modifier (means "although it be").
    *   *E.g.:* "He agreed to lead them, **albeit** with deep reluctance."
*   **notwithstanding** - *Usage:* Means "despite" but can be placed before or *after* the noun.
    *   *E.g.:* "Their mutual suspicion **notwithstanding**, they formed a tight alliance."
*   **much as** - *Usage:* Strong concessive verbal prefix (means "although I want to very much").
    *   *E.g.:* "**Much as** she wanted to believe him, suspicion held her back."
*   **by the same token** - *Usage:* Introduces a closely related, equally true point.
    *   *E.g.:* "Trust must be earned; **by the same token**, respect is mutual."
*   **be that as it may** - *Usage:* Dismisses previous arguments completely to make a final point.
    *   *E.g.:* "It may be a trap. **Be that as it may**, we have no other choice."
