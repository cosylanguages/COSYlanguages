# Speaking Club & Karaoke Event Theme Taxonomy

This taxonomy bridges the Karaoke Club event topics and songs to filesystem-compliant categories defined in `THEMES.md`. By mapping every song to a primary overarching theme and standardizing sub-themes, we enable logical curriculum integration, cross-club navigation, and monolingual interactive games dynamically.

---

## 1. Taxonomic Alignment Rules
*   **Primary Theme Slug:** Must map to one of the authorized lowercase themes in `THEMES.md` (e.g., `technology`, `nature`, `people`).
*   **Sub-Theme Slug:** Must match the corresponding sub-themes in `THEMES.md` (e.g., `social_media`, `seasons`, `relationships`).
*   **Universal Focus:** A clear, student-facing overarching conversation topic inspired by the song.

---

## 2. Karaoke Theme & Sub-Theme Directory

| Song Title / Slug | Variety/Language | Overarching Conversation Theme | Theme Slug (Primary) | Sub-Theme Slug |
|-------------------|------------------|--------------------------------|----------------------|----------------|
| **Toutes les machines ont le cœur** | French | Technology & Humanity | `technology` | `social_media` |
| **Je t'aime comme je t'aime** | French | Unconditional Love | `people` | `relationships` |
| **Me & I** | British English | Identity & Self-Discovery | `psychology` | `concepts` |
| **Angeleyes** | British English | Appearances Can Be Deceiving | `emotions` | `negative` |
| **Salut** | French | Reconnecting with the Past | `social` | `communication` |
| **Toi Mon Amour** | French | Soulmates & Destiny | `people` | `relationships` |
| **L'uomo che amava le donne** | Italian | Love, Flirting & Attraction | `people` | `relationships` |
| **Due Grosse Lacrime Bianche** | Italian | Heartbreak & Letting Go | `emotions` | `negative` |
| **Un'altra estate** | Italian | Summer Freedom | `nature` | `seasons` |
| **Mixed Up World** | British English | Finding Your Way in a Chaotic World | `psychology` | `concepts` |
| **У мамы есть секрет** | Russian | Childhood & Family Secrets | `people` | `family` |
| **Chi sarà con te** | Italian | Lifelong Companionship | `people` | `relationships` |
| **L'amore è un attimo** | Italian | The Fleeting Nature of Love | `people` | `relationships` |
| **Κάποιες νύχτες** | Greek | Night Thoughts & Solitude | `nature` | `sky` |
| **Ο γάτος** | Greek | Freedom Through Everyday Adventures | `animals` | `pets` |
| **Amor Libre** | Spanish | Love Without Labels | `people` | `relationships` |
| **Te alejas más de mí** | Spanish | Growing Apart | `people` | `relationships` |
| **Oui ou Non** | French | Mixed Signals in Modern Dating | `people` | `relationships` |
| **Balance ton quoi** | French | Equality & Respect | `people` | `relationships` |
| **Nuevo Verano** | Spanish | The Summers That Shape Us | `nature` | `seasons` |
| **L'Aziza** | French | Diversity & Acceptance | `people` | `relationships` |
| **Nos âmes sont** | French | Human Connection Beyond Words | `people` | `relationships` |
| **Immobile** | French | When Life Stands Still | `emotions` | `complex` |
| **La nuit n'en finit plus** | French | Sleepless Nights & Longing | `emotions` | `complex` |
| **Le soleil noir** | French | Living Through Loss | `emotions` | `negative` |
| **La Tour Eiffel est pour moi** | French | Dreaming of Paris | `places` | `landmarks` |
| **Left Outside Alone** | American English | Rejection & Emotional Survival | `emotions` | `negative` |
| **Quelqu'un pour toi** | French | Finding the Right Person | `people` | `relationships` |
| **Bien plus fort** | French | Inner Strength | `emotions` | `positive` |
| **Casualties of War** | American English | The Battles We Carry Inside | `emotions` | `complex` |
| **Un premier amour** | French | The Magic of First Love | `people` | `relationships` |
| **Voilà** | French | Authenticity & Self-Expression | `emotions` | `expressing` |
| **Выше домов** | Russian | Dreaming Beyond Limits | `nature` | `sky` |
| **As It Was** | British English | Life After Change | `time` | `periods` |
| **California Dreaming** | American English | Dreams & Escapism | `nature` | `sky` |
| **Να η αγάπη να** | Greek | Simple Joys of Love | `people` | `relationships` |
| **Make Your Own Kind of Music** | American English | Being Unapologetically Yourself | `emotions` | `expressing` |
| **It's Getting Better** | American English | Hope After Hard Times | `emotions` | `positive` |
| **Overprotected** | American English | Independence & Personal Freedom | `people` | `relationships` |
| **Ma Philosophie** | French | Building Your Own Philosophy of Life | `psychology` | `concepts` |
| **Diva** | French | Confidence & Self-Worth | `emotions` | `expressing` |
| **Tu t'en iras** | French | Accepting Endings | `people` | `relationships` |
| **Second Hand Rose** | American English | Making the Most of What You Have | `shopping` | `transactions` |
| **Coming Around Again** | American English | Love That Returns | `people` | `relationships` |
| **Το ίδιο το Θεό** | Greek | When Love Becomes Obsession | `people` | `relationships` |
| **Jim Beam** | Russian | Escaping Reality | `emotions` | `negative` |
| **Army Dreamers** | British English | The Human Cost of War | `emotions` | `complex` |
| **Oh To Be in Love** | British English | The Joy of Falling in Love | `people` | `relationships` |
| **The Greatest** | American English | Nostalgia & Cultural Change | `art_culture` | `traditions` |
| **Where Is My Husband?** | British English | Escaping Loneliness | `people` | `relationships` |
| **Unlikely Lovers** | American English | Love in Difficult Times | `people` | `relationships` |
| **One of the Greats** | British English | Greatness & Legacy | `art_culture` | `literature` |
| **Un raggio di sole** | Italian | Joy & Nature | `nature` | `weather` |
| **Love Kernels** | American English | Satire & Infatuation | `people` | `relationships` |
| **Let's Generalize About Men** | American English | Generalizations & Satire | `social` | `communication` |
| **So Maternal** | American English | Parenting & Overachieving | `people` | `family` |
| **Face Your Fears** | American English | Fear & Absurd Advice | `emotions` | `complex` |

---

## 3. Benefits of Centralized Taxonomy
1.  **Monolingual Dynamic Scaling:** Allows interactive vocabulary/fluency games to query exact related items from standard databases dynamically using `primary_theme` or `sub_theme` keys.
2.  **Cross-Club Connections:** Suggests highly relevant spoken materials to students (e.g. connecting a discussion about "Technology & Humanity" in Karaoke Club to "AI & Art" in Cinema Club).

---

## 4. Cinema Club Theme Taxonomy & DNA

To capture the multi-faceted nature of films and series, COSYlanguages utilizes a **Theme DNA** model for each cinema session: one Primary Theme supported by four Secondary Themes. This ensures thematic consistency across our film catalogue while enabling deep, visual connection snapshots.

### Handcrafted Catalog Flagships (Top 10)

| Film / Series | Slug | Primary Theme | Secondary Theme 1 | Secondary Theme 2 | Secondary Theme 3 | Secondary Theme 4 |
|---|---|---|---|---|---|---|
| **The Queen's Gambit** | `the-queens-gambit` | 🏆 Ambition & Perfectionism | 👤 Identity & Self-Discovery | 🧠 Addiction & Recovery | ♀️ Women Breaking Barriers | ♟ Competition & Strategy |
| **Black Mirror** | `black-mirror` | 🤖 Technology & Human Nature | ⚖️ Ethics | 📱 Digital Society | 🔒 Privacy | 🔮 The Future |
| **Mamma Mia!** | `mamma-mia` | ❤️ Family & Relationships | 💍 Weddings | 🤝 Friendship | 👩 Motherhood | 👤 Identity |
| **Don't Look Up** | `dont-look-up` | 🌍 Science, Politics & Media | 🌱 Climate Change | 📢 Public Opinion | 📰 Fake News | 🎭 Satire |
| **The Devil Wears Prada** | `the-devil-wears-prada` | 💼 Work, Success & Identity | 👤 Identity | 👠 Fashion | ⚖️ Leadership | 🏙️ New York |
| **Fleabag** | `fleabag` | ❤️ Modern Relationships & Emotional Honesty | 🧠 Grief & Loneliness | 👨 Family Dynamics | ⛪ Religion & Humor | 👤 Self-Awareness |
| **Breakfast at Tiffany's** | `breakfast-at-tiffanys` | ✨ Dreams, Independence & Reinvention | 🏙️ New York | 👤 Identity | 💎 Social Status & Romance | 🕊️ Freedom |
| **Silver Skates** | `serebryanye-konki` | 🌍 Social Class & Freedom | 📜 History & Revolution | 👨 Family Dynamics | ❤️ Love | ⚖️ Justice |
| **La Valla** | `la-valla` | ⚖️ Freedom Under Oppression | 🛡️ Resistance & Government | 👨 Family Dynamics | 🧪 Survival & Ethics | 🔮 Dystopia |
| **Ratatouille** | `ratatouille` | ✨ Passion & Creativity | 🍴 Food | 🏙️ Paris | 🤝 Teamwork | 🌱 Following Your Dreams |

---

## 5. Official COSYlanguages Theme Families

Our curriculum maps all vocabulary and discussion events to **8 Official Theme Families**. This unifies our content across clubs (Speaking, Karaoke, Cinema) and creates an interconnected, highly structured monolingual learning taxonomy.

1.  **❤️ Human Relationships:** Love, Family, Friendship, Parenthood, Marriage
2.  **👤 Identity:** Self-discovery, Confidence, Belonging, Authenticity
3.  **💪 Growth:** Resilience, Ambition, Success, Failure, Dreams
4.  **🌍 Society:** Equality, Diversity, Politics, Class, Culture
5.  **🤖 Modern World:** Technology, AI, Media, Consumerism, Digital Life
6.  **⚖️ Values:** Ethics, Justice, Responsibility, Freedom
7.  **🎨 Lifestyle:** Food, Fashion, Travel, Art, Music
8.  **🧠 Psychology:** Grief, Addiction, Loneliness, Fear, Happiness
