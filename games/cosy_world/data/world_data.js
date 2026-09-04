/**
 * games/cosy_world/data/world_data.js
 * Master Dataset for COSY World — Open-World Language Learning RPG
 * Designed around "Learn by Living, Not by Translating" (Inductive Direct Immersion).
 * Uses real-life cause-and-effect chains, visual action sequences, NPC gestures, and contextual sound cues.
 */
(function() {
    'use strict';

    window.COSY_WORLD_DATA = {
        languages: [
            { code: 'en', label: 'English', flag: '🇬🇧' },
            { code: 'fr', label: 'Français', flag: '🇫🇷' },
            { code: 'it', label: 'Italiano', flag: '🇮🇹' },
            { code: 'es', label: 'Español', flag: '🇪🇸' },
            { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
            { code: 'ru', label: 'Русский', flag: '🇷🇺' },
            { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
            { code: 'pt', label: 'Português', flag: '🇵🇹' },
            { code: 'hy', label: 'Հայերեն', flag: '🇦🇲' },
            { code: 'ka', label: 'ქართული', flag: '🇬🇪' },
            { code: 'br', label: 'Brezhoneg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
            { code: 'tt', label: 'Татарча', flag: '🐺' },
            { code: 'ba', label: 'Башҡортса', flag: '🏹' },
            { code: 'cv', label: 'Чӑвашла', flag: '🌸' }
        ],

        // Logical Real-Life Sequence Chain Progression for CEFR A0 Beginners
        causeEffectChains: [
            { id: 'chain_home', sequence: ['key', 'door', 'open', 'room', 'chair', 'sit', 'cup', 'drink'] },
            { id: 'chain_food', sequence: ['bakery', 'baguette', 'buy', 'eat', 'satisfied'] }
        ],

        districts: {
            apartment_living: {
                id: 'apartment_living',
                district: 'Residential District',
                level: 'A0',
                icon: '🛋️',
                name: {
                    en: 'Apartment Living Room',
                    fr: 'Salon de l\'appartement',
                    it: 'Salotto dell\'appartamento',
                    es: 'Salón del apartamento',
                    de: 'Wohnzimmer der Wohnung',
                    ru: 'Гостиная в квартире',
                    el: 'Σαλόνι διαμερίσματος',
                    pt: 'Sala de estar do apartamento',
                    hy: 'Բնակարանի հյուրասենյակ',
                    ka: 'ბინის მისაღები ოთახი',
                    br: 'Prizon an ti',
                    tt: 'Квартираның кунак бүлмәсе',
                    ba: 'Квартираның кунаҡ бүлмәһе',
                    cv: 'Хваттерти хăна ҫуртчĕ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_kitchen', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Kitchen 🍳', fr: 'Cuisine 🍳', it: 'Cucina 🍳', es: 'Cocina 🍳', de: 'Küche 🍳', ru: 'Кухня 🍳' } },
                    { targetId: 'apartment_bedroom', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bedroom 🛏️', fr: 'Chambre 🛏️', it: 'Camera 🛏️', es: 'Dormitorio 🛏️', de: 'Schlafzimmer 🛏️', ru: 'Спальня 🛏️' } },
                    { targetId: 'town_square', x: 360, y: 400, width: 80, height: 80, labelY: 380, labels: { en: 'Town Square 🏛️', fr: 'Place de la ville 🏛️', it: 'Piazza 🏛️', es: 'Plaza Mayor 🏛️', de: 'Stadtplatz 🏛️', ru: 'Городская площадь 🏛️' } }
                ],
                npcs: ['james_york'],
                objects: ['key', 'door_lock', 'sofa', 'coffee_table', 'tv', 'bookshelf', 'lamp']
            },
            apartment_kitchen: {
                id: 'apartment_kitchen',
                district: 'Residential District',
                level: 'A0',
                icon: '🍳',
                name: { en: 'Kitchen', fr: 'Cuisine', it: 'Cucina', es: 'Cocina', de: 'Küche', ru: 'Кухня' },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_living', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Living Room 🛋️', fr: 'Salon 🛋️', it: 'Salotto 🛋️', es: 'Salón 🛋️', de: 'Wohnzimmer 🛋️', ru: 'Гостиная 🛋️' } }
                ],
                npcs: [],
                objects: ['fridge', 'kettle', 'cup']
            },
            town_square: {
                id: 'town_square',
                district: 'City Centre',
                level: 'A0',
                icon: '🏛️',
                name: { en: 'Town Square', fr: 'Place de la ville', it: 'Piazza Centrale', es: 'Plaza Mayor', de: 'Stadtplatz', ru: 'Городская площадь' },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_living', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Apartment 🛋️', fr: 'Appartement 🛋️', it: 'Appartamento 🛋️', es: 'Apartamento 🛋️', de: 'Wohnung 🛋️', ru: 'Квартира 🛋️' } },
                    { targetId: 'bakery', x: 220, y: 200, width: 90, height: 180, labelY: 180, labels: { en: 'Bakery 🥖', fr: 'Boulangerie 🥖', it: 'Panetteria 🥖', es: 'Panadería 🥖', de: 'Bäckerei 🥖', ru: 'Пекарня 🥖' } },
                    { targetId: 'cafe', x: 380, y: 200, width: 90, height: 180, labelY: 180, labels: { en: 'Cafe ☕', fr: 'Café ☕', it: 'Caffè ☕', es: 'Cafetería ☕', de: 'Café ☕', ru: 'Кафе ☕' } }
                ],
                npcs: ['james_york', 'ella_bronx', 'anna'],
                objects: ['clock_tower', 'fountain', 'bench']
            },
            bakery: {
                id: 'bakery',
                district: 'City Centre',
                level: 'A0',
                icon: '🥖',
                name: { en: 'Bakery', fr: 'Boulangerie', it: 'Panetteria', es: 'Panadería', de: 'Bäckerei', ru: 'Пекарня' },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } }
                ],
                npcs: ['lucas_baker'],
                objects: ['baguette', 'croissant']
            },
            cafe: {
                id: 'cafe',
                district: 'City Centre',
                level: 'A0',
                icon: '☕',
                name: { en: 'Cafe', fr: 'Café', it: 'Caffè', es: 'Cafetería', de: 'Café', ru: 'Кафе' },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } }
                ],
                npcs: ['marco_barista'],
                objects: ['espresso_machine', 'coffee_cup']
            }
        },

        npcs: {
            james_york: {
                id: 'james_york',
                name: 'James York',
                role: 'Explorer Mentor',
                avatar: '👨‍💼',
                gestures: { wave: '👋 Waving welcomingly', point: '👉 Pointing to key and door', smile: '😊 Smiling warmly' },
                dialogues: {
                    en: [
                        { id: 1, text: "👋 Look! 👉 🔑 Key ➔ 🚪 Door ➔ 🔓 Open!", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 Try opening door!", questId: 'q1_key_door' }] }
                    ],
                    fr: [
                        { id: 1, text: "👋 Regardez ! 👉 🔑 Clé ➔ 🚪 Porte ➔ 🔓 Ouvrir !", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 Essayer d'ouvrir !", questId: 'q1_key_door' }] }
                    ],
                    it: [
                        { id: 1, text: "👋 Guarda! 👉 🔑 Chiave ➔ 🚪 Porta ➔ 🔓 Aprire!", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 Prova ad aprire!", questId: 'q1_key_door' }] }
                    ],
                    es: [
                        { id: 1, text: "👋 ¡Mira! 👉 🔑 Llave ➔ 🚪 Puerta ➔ 🔓 Abrir!", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 ¡Intentar abrir!", questId: 'q1_key_door' }] }
                    ],
                    de: [
                        { id: 1, text: "👋 Schau! 👉 🔑 Schlüssel ➔ 🚪 Tür ➔ 🔓 Öffnen!", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 Versuche zu öffnen!", questId: 'q1_key_door' }] }
                    ],
                    ru: [
                        { id: 1, text: "👋 Смотри! 👉 🔑 Ключ ➔ 🚪 Дверь ➔ 🔓 Открыть!", visualAction: '🔑 ➔ 🚪', options: [{ label: "👉 Попробовать открыть!", questId: 'q1_key_door' }] }
                    ]
                }
            },
            ella_bronx: {
                id: 'ella_bronx',
                name: 'Ella Bronx',
                role: 'Pronunciation Teacher',
                avatar: '👩‍🏫',
                gestures: { listen: '👂 Listening carefully', repeat: '🗣️ Modeling pronunciation', nod: '👍 Nodding encouragingly' },
                dialogues: {
                    en: [
                        { id: 1, text: "👂 Listen... 🗣️ Repeat out loud!", visualAction: '👂 ➔ 🗣️', options: [{ label: "🔊 Practice speaking!", questId: 'q2_pronunciation' }] }
                    ],
                    fr: [
                        { id: 1, text: "👂 Écoutez... 🗣️ Répétez à voix haute !", visualAction: '👂 ➔ 🗣️', options: [{ label: "🔊 Pratiquer l'oral !", questId: 'q2_pronunciation' }] }
                    ],
                    ru: [
                        { id: 1, text: "👂 Слушай... 🗣️ Повторяй вслух!", visualAction: '👂 ➔ 🗣️', options: [{ label: "🔊 Практиковать речь!", questId: 'q2_pronunciation' }] }
                    ]
                }
            },
            anna: {
                id: 'anna',
                name: 'Anna',
                role: 'Friendly Competitor',
                avatar: '👩‍🎓',
                gestures: { challenge: '⚡ Challenging gesture', smile: '😄 Cheerful smile' },
                dialogues: {
                    en: [
                        { id: 1, text: "⚡ 🔑 + 🥖 = 2 objects! Can you find 3?", visualAction: '🔍 Find 3 items', options: [{ label: "⚡ Accept challenge!", questId: 'q3_anna_challenge' }] }
                    ],
                    fr: [
                        { id: 1, text: "⚡ 🔑 + 🥖 = 2 objets ! Peux-tu en trouver 3 ?", visualAction: '🔍 Trouver 3 objets', options: [{ label: "⚡ Relever le défi !", questId: 'q3_anna_challenge' }] }
                    ],
                    ru: [
                        { id: 1, text: "⚡ 🔑 + 🥖 = 2 предмета! Сможешь найти 3?", visualAction: '🔍 Найти 3 предмета', options: [{ label: "⚡ Принять вызов!", questId: 'q3_anna_challenge' }] }
                    ]
                }
            },
            lucas_baker: {
                id: 'lucas_baker',
                name: 'Lucas',
                role: 'Artisan Baker',
                avatar: '👨‍🍳',
                gestures: { offer: '🥖 Offering fresh bread', smile: '😊 Friendly smile' },
                dialogues: {
                    en: [{ id: 1, text: "🥖 Warm baguette! 😋 Yum!", visualAction: '🥖 ➔ 😋', options: [{ label: "🥖 Take baguette!", questId: 'q4_bakery_bread' }] }]
                }
            },
            marco_barista: {
                id: 'marco_barista',
                name: 'Marco',
                role: 'Master Barista',
                avatar: '☕',
                gestures: { pour: '☕ Pouring espresso' },
                dialogues: {
                    en: [{ id: 1, text: "☕ Fresh espresso! ♨️ Hot!", visualAction: '☕ ➔ ♨️', options: [{ label: "☕ Sip coffee!", next: 1 }] }]
                }
            }
        },

        objects: {
            key: {
                id: 'key', locationId: 'apartment_living', emoji: '🔑', x: 140, y: 320, width: 60, height: 50, labelX: 170, labelY: 310,
                actionChain: { nextObject: 'door_lock', actionIcon: '🔓 Open Door' },
                soundCue: 'key_clink',
                words: { en: 'Key', fr: 'Clé', it: 'Chiave', es: 'Llave', de: 'Schlüssel', ru: 'Ключ', el: 'Κλειδί', pt: 'Chave', hy: 'Բանալի', ka: 'გასაღები', br: 'Alc\'hwez', tt: 'Төп', ba: 'Асҡос', cv: 'Уҫӑ' },
                visualSequence: '🔑 Key ➔ Inserts into Lock ➔ 🚪 Unlocks Door'
            },
            door_lock: {
                id: 'door_lock', locationId: 'apartment_living', emoji: '🚪', x: 360, y: 180, width: 80, height: 200, labelX: 400, labelY: 170,
                soundCue: 'door_open',
                words: { en: 'Door', fr: 'Porte', it: 'Porta', es: 'Puerta', de: 'Tür', ru: 'Дверь', el: 'Πόρτα', pt: 'Porta', hy: 'Դուռ', ka: 'კარი', br: 'Dor', tt: 'Ишек', ba: 'Ишек', cv: 'Алак' },
                visualSequence: '🚪 Closed Door ➔ Turn Handle ➔ 🔓 Open'
            },
            sofa: {
                id: 'sofa', locationId: 'apartment_living', emoji: '🛋️', x: 220, y: 260, width: 180, height: 100, labelX: 310, labelY: 250,
                soundCue: 'soft_cushion',
                words: { en: 'Sofa', fr: 'Canapé', it: 'Divano', es: 'Sofá', de: 'Sofa', ru: 'Диван', el: 'Καναπές', pt: 'Sofá', hy: 'Բազմոց', ka: 'დივანი', br: 'Kador-vras', tt: 'Диван', ba: 'Диван', cv: 'Диван' },
                visualSequence: '🛋️ Sofa ➔ Walk over ➔ 🧘 Sit & Rest'
            },
            coffee_table: {
                id: 'coffee_table', locationId: 'apartment_living', emoji: '🪑', x: 250, y: 360, width: 120, height: 60, labelX: 310, labelY: 350,
                words: { en: 'Coffee Table', fr: 'Table basse', it: 'Tavolino', es: 'Mesa de centro', de: 'Couchtisch', ru: 'Журнальный столик' }
            },
            tv: {
                id: 'tv', locationId: 'apartment_living', emoji: '📺', x: 480, y: 180, width: 140, height: 90, labelX: 550, labelY: 170,
                words: { en: 'Television', fr: 'Télévision', it: 'Televisione', es: 'Televisión', de: 'Fernseher', ru: 'Телевизор' }
            },
            bookshelf: {
                id: 'bookshelf', locationId: 'apartment_living', emoji: '📚', x: 80, y: 150, width: 100, height: 220, labelX: 130, labelY: 140,
                words: { en: 'Bookshelf', fr: 'Bibliothèque', it: 'Libreria', es: 'Estantería', de: 'Bücherregal', ru: 'Книжная полка' }
            },
            lamp: {
                id: 'lamp', locationId: 'apartment_living', emoji: '💡', x: 650, y: 220, width: 50, height: 120, labelX: 675, labelY: 210,
                words: { en: 'Lamp', fr: 'Lampe', it: 'Lampada', es: 'Lámpara', de: 'Lampe', ru: 'Лампа' }
            },
            fridge: {
                id: 'fridge', locationId: 'apartment_kitchen', emoji: '🧊', x: 100, y: 160, width: 110, height: 240, labelX: 155, labelY: 150,
                words: { en: 'Refrigerator', fr: 'Réfrigérateur', it: 'Frigorifero', es: 'Refrigerador', de: 'Kühlschrank', ru: 'Холодильник' }
            },
            kettle: {
                id: 'kettle', locationId: 'apartment_kitchen', emoji: '🫖', x: 320, y: 240, width: 60, height: 60, labelX: 350, labelY: 230,
                words: { en: 'Kettle', fr: 'Bouilloire', it: 'Bollitore', es: 'Hervidor', de: 'Wasserkocher', ru: 'Чайник' }
            },
            cup: {
                id: 'cup', locationId: 'apartment_kitchen', emoji: '☕', x: 420, y: 250, width: 50, height: 50, labelX: 445, labelY: 240,
                words: { en: 'Cup', fr: 'Tasse', it: 'Tazza', es: 'Taza', de: 'Tasse', ru: 'Чашка' }
            },
            clock_tower: {
                id: 'clock_tower', locationId: 'town_square', emoji: '🕰️', x: 350, y: 60, width: 100, height: 180, labelX: 400, labelY: 50,
                words: { en: 'Clock Tower', fr: 'Tour de l\'horloge', it: 'Torre dell\'orologio', es: 'Torre del reloj', de: 'Uhrturm', ru: 'Башня с часами' }
            },
            fountain: {
                id: 'fountain', locationId: 'town_square', emoji: '⛲', x: 550, y: 280, width: 120, height: 100, labelX: 610, labelY: 270,
                words: { en: 'Fountain', fr: 'Fontaine', it: 'Fontana', es: 'Fuente', de: 'Brunnen', ru: 'Фонтан' }
            },
            bench: {
                id: 'bench', locationId: 'town_square', emoji: '🪑', x: 180, y: 320, width: 100, height: 60, labelX: 230, labelY: 310,
                words: { en: 'Bench', fr: 'Banc', it: 'Panchina', es: 'Banco', de: 'Bank', ru: 'Скамейка' }
            },
            baguette: {
                id: 'baguette', locationId: 'bakery', emoji: '🥖', x: 260, y: 240, width: 90, height: 40, labelX: 305, labelY: 230,
                words: { en: 'Baguette', fr: 'Baguette', it: 'Baguette', es: 'Barra de pan', de: 'Baguette', ru: 'Багет' }
            },
            croissant: {
                id: 'croissant', locationId: 'bakery', emoji: '🥐', x: 380, y: 240, width: 70, height: 50, labelX: 415, labelY: 230,
                words: { en: 'Croissant', fr: 'Croissant', it: 'Cornetto', es: 'Cruasán', de: 'Croissant', ru: 'Круассан' }
            },
            espresso_machine: {
                id: 'espresso_machine', locationId: 'cafe', emoji: '☕', x: 280, y: 200, width: 100, height: 90, labelX: 330, labelY: 190,
                words: { en: 'Coffee Machine', fr: 'Machine à café', it: 'Macchina del caffè', es: 'Cafetera', de: 'Kaffeemaschine', ru: 'Кофемашина' }
            },
            coffee_cup: {
                id: 'coffee_cup', locationId: 'cafe', emoji: '☕', x: 420, y: 240, width: 50, height: 50, labelX: 445, labelY: 230,
                words: { en: 'Coffee Cup', fr: 'Tasse de café', it: 'Tazzina', es: 'Taza de café', de: 'Kaffeetasse', ru: 'Чашка кофе' }
            }
        },

        quests: [
            {
                id: 'q1_key_door',
                title: '🔑 Key ➔ 🚪 Door',
                description: 'Discover the Key on the table and unlock the Door!',
                district: 'Residential District',
                targetObjects: ['key', 'door_lock'],
                type: 'Action Chain',
                xpReward: 50,
                grammarUnlock: 'gt_greetings'
            },
            {
                id: 'q2_pronunciation',
                title: '👂 Listen & 🗣️ Repeat',
                description: 'Visit Ella Bronx and practice native speech out loud!',
                district: 'City Centre',
                targetNpc: 'ella_bronx',
                type: 'Speaking Mission',
                xpReward: 60,
                grammarUnlock: 'gt_there_is'
            },
            {
                id: 'q3_anna_challenge',
                title: '⚡ Discover 3 Items',
                description: 'Explore rooms and discover 3 objects in COSY Town!',
                district: 'Residential District',
                targetCount: 3,
                type: 'Vocabulary Hunt',
                xpReward: 70,
                grammarUnlock: 'gt_present_simple'
            },
            {
                id: 'q4_bakery_bread',
                title: '🥖 Bakery Freshness',
                description: 'Visit Lucas at the Bakery and inspect the fresh Baguette!',
                district: 'City Centre',
                targetObjects: ['baguette'],
                type: 'Shopping Mission',
                xpReward: 80,
                grammarUnlock: 'gt_likes'
            }
        ],

        grammarTree: [
            { id: 'gt_greetings', title: 'Greetings & Actions 👋', cefr: 'A0', desc: 'Hello, Open, Sit, Listen', unlocked: true },
            { id: 'gt_there_is', title: 'Objects & Placement 🛋️', cefr: 'A0', desc: 'Key, Door, Sofa, Table', unlocked: false },
            { id: 'gt_present_simple', title: 'Daily Actions 🏃', cefr: 'A1', desc: 'I walk, I open, I drink', unlocked: false },
            { id: 'gt_likes', title: 'Preferences & Desires ❤️', cefr: 'A1', desc: 'I like bread, I want coffee', unlocked: false }
        ],

        achievements: [
            { id: 'ach_first_key', title: 'Key Master 🔑', desc: 'Unlock your first door using direct cause-and-effect', icon: '🔓', reqCount: 1 },
            { id: 'ach_polyglot', title: 'Direct Immersion Explorer 🌍', desc: 'Discover 5 objects using visual sequences', icon: '🗺️', reqCount: 5 }
        ],

        ambientSounds: {
            piano: { title: 'Relaxing Piano 🎹', desc: 'Cozy acoustic piano chords' },
            cafe: { title: 'Coffee Shop Warmth ☕', desc: 'Soft ambient cafe atmosphere' },
            nature: { title: 'Nature Breeze 🍃', desc: 'Gentle wind and songbirds' },
            rain: { title: 'Gentle Rain 🌧️', desc: 'Soothing rain drops on leaves' }
        }
    };
})();
