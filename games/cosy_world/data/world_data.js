/**
 * games/cosy_world/data/world_data.js
 * Master Dataset for COSY World — Open-World Language Learning RPG
 * Contains districts, locations, NPCs, objects, dictionary, quests, grammar tree, and achievements.
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

        districts: {
            // --- RESIDENTIAL DISTRICT ---
            apartment_living: {
                id: 'apartment_living',
                district: 'Residential District',
                level: 'A0-A1',
                reqXP: 0,
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
                objects: ['sofa', 'coffee_table', 'tv', 'bookshelf', 'window_plant', 'lamp', 'rug', 'armchair']
            },
            apartment_kitchen: {
                id: 'apartment_kitchen',
                district: 'Residential District',
                level: 'A0-A1',
                reqXP: 0,
                icon: '🍳',
                name: {
                    en: 'Kitchen',
                    fr: 'Cuisine',
                    it: 'Cucina',
                    es: 'Cocina',
                    de: 'Küche',
                    ru: 'Кухня',
                    el: 'Κουζίνα',
                    pt: 'Cozinha',
                    hy: 'Խոհանոց',
                    ka: 'სამზარეულო',
                    br: 'Kegin',
                    tt: 'Ашбүлмә',
                    ba: 'Ашбүлмә',
                    cv: 'Ашпӳлĕм'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_living', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Living Room 🛋️', fr: 'Salon 🛋️', it: 'Salotto 🛋️', es: 'Salón 🛋️', de: 'Wohnzimmer 🛋️', ru: 'Гостиная 🛋️' } },
                    { targetId: 'apartment_bathroom', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bathroom 🚿', fr: 'Salle de bain 🚿', it: 'Bagno 🚿', es: 'Baño 🚿', de: 'Badezimmer 🚿', ru: 'Ванная 🚿' } }
                ],
                npcs: [],
                objects: ['fridge', 'oven', 'sink', 'kettle', 'frying_pan', 'dining_table', 'chair', 'coffee_maker']
            },
            apartment_bedroom: {
                id: 'apartment_bedroom',
                district: 'Residential District',
                level: 'A0-A1',
                reqXP: 0,
                icon: '🛏️',
                name: {
                    en: 'Bedroom',
                    fr: 'Chambre à coucher',
                    it: 'Camera da letto',
                    es: 'Dormitorio',
                    de: 'Schlafzimmer',
                    ru: 'Спальня',
                    el: 'Υπνοδωμάτιο',
                    pt: 'Quarto',
                    hy: 'Ննջասենյակ',
                    ka: 'საძინებელი',
                    br: 'Kambr',
                    tt: 'Йокы бүлмәсе',
                    ba: 'Йоҡо бүлмәһе',
                    cv: 'Ҫӑвӑн пӳлĕмĕ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_living', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Living Room 🛋️', fr: 'Salon 🛋️', it: 'Salotto 🛋️', es: 'Salón 🛋️', de: 'Wohnzimmer 🛋️', ru: 'Гостиная 🛋️' } },
                    { targetId: 'garden', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Garden 🌿', fr: 'Jardin 🌿', it: 'Giardino 🌿', es: 'Jardín 🌿', de: 'Garten 🌿', ru: 'Сад 🌿' } }
                ],
                npcs: [],
                objects: ['bed', 'wardrobe', 'desk', 'laptop', 'pillow', 'alarm_clock', 'mirror', 'curtains']
            },
            apartment_bathroom: {
                id: 'apartment_bathroom',
                district: 'Residential District',
                level: 'A0-A1',
                reqXP: 0,
                icon: '🚿',
                name: {
                    en: 'Bathroom',
                    fr: 'Salle de bains',
                    it: 'Stanza da bagno',
                    es: 'Cuarto de baño',
                    de: 'Badezimmer',
                    ru: 'Ванная комната',
                    el: 'Μπάνιο',
                    pt: 'Casa de banho',
                    hy: 'Լոգարան',
                    ka: 'აბაზანა',
                    br: 'Kambr-dour',
                    tt: 'Ванна бүлмәсе',
                    ba: 'Ванна бүлмәһе',
                    cv: 'Ванна пӳлĕмĕ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_kitchen', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Kitchen 🍳', fr: 'Cuisine 🍳', it: 'Cucina 🍳', es: 'Cocina 🍳', de: 'Küche 🍳', ru: 'Кухня 🍳' } }
                ],
                npcs: [],
                objects: ['bathtub', 'shower', 'towel', 'soap', 'toothbrush', 'mirror_bath', 'washbasin', 'shampoo']
            },
            garden: {
                id: 'garden',
                district: 'Residential District',
                level: 'A0-A1',
                reqXP: 10,
                icon: '🌿',
                name: {
                    en: 'Garden',
                    fr: 'Jardin',
                    it: 'Giardino',
                    es: 'Jardín',
                    de: 'Garten',
                    ru: 'Сад',
                    el: 'Κήπος',
                    pt: 'Jardim',
                    hy: 'Այգի',
                    ka: 'ბაღი',
                    br: 'Liorzh',
                    tt: 'Бакча',
                    ba: 'Бакса',
                    cv: 'Пахча'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_bedroom', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bedroom 🛏️', fr: 'Chambre 🛏️', it: 'Camera 🛏️', es: 'Dormitorio 🛏️', de: 'Schlafzimmer 🛏️', ru: 'Спальня 🛏️' } },
                    { targetId: 'park', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Park & Nature 🌲', fr: 'Parc & Nature 🌲', it: 'Parco 🌲', es: 'Parque 🌲', de: 'Park 🌲', ru: 'Парк 🌲' } }
                ],
                npcs: [],
                objects: ['flower_bed', 'bench', 'watering_can', 'tree', 'sunflower', 'lawnmower', 'bird_house', 'fountain']
            },

            // --- CITY CENTRE ---
            town_square: {
                id: 'town_square',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 0,
                icon: '🏛️',
                name: {
                    en: 'Town Square',
                    fr: 'Place de la ville',
                    it: 'Piazza Centrale',
                    es: 'Plaza Mayor',
                    de: 'Stadtplatz',
                    ru: 'Городская площадь',
                    el: 'Κεντρική Πλατεία',
                    pt: 'Praça Central',
                    hy: 'Քաղաքային հրապարակ',
                    ka: 'ქალაქის მოედანი',
                    br: 'Plasenn ar Gêr',
                    tt: 'Шәһәр мәйданы',
                    ba: 'Шәһәр майҙаны',
                    cv: 'Хула лапачĕ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'apartment_living', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Apartment 🛋️', fr: 'Appartement 🛋️', it: 'Appartamento 🛋️', es: 'Apartamento 🛋️', de: 'Wohnung 🛋️', ru: 'Квартира 🛋️' } },
                    { targetId: 'bakery', x: 200, y: 200, width: 90, height: 180, labelY: 180, labels: { en: 'Bakery 🥖', fr: 'Boulangerie 🥖', it: 'Panetteria 🥖', es: 'Panadería 🥖', de: 'Bäckerei 🥖', ru: 'Пекарня 🥖' } },
                    { targetId: 'cafe', x: 350, y: 200, width: 90, height: 180, labelY: 180, labels: { en: 'Cafe ☕', fr: 'Café ☕', it: 'Caffè ☕', es: 'Cafetería ☕', de: 'Café ☕', ru: 'Кафе ☕' } },
                    { targetId: 'supermarket', x: 500, y: 200, width: 90, height: 180, labelY: 180, labels: { en: 'Supermarket 🛒', fr: 'Supermarché 🛒', it: 'Supermercato 🛒', es: 'Supermercado 🛒', de: 'Supermarkt 🛒', ru: 'Супермаркет 🛒' } },
                    { targetId: 'school', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'School 🏫', fr: 'École 🏫', it: 'Scuola 🏫', es: 'Escuela 🏫', de: 'Schule 🏫', ru: 'Школа 🏫' } }
                ],
                npcs: ['james_york', 'anna'],
                objects: ['clock_tower', 'statue', 'street_lamp', 'notice_board', 'post_box', 'bicycle', 'bus_stop_sign', 'pigeon']
            },
            bakery: {
                id: 'bakery',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 20,
                icon: '🥖',
                name: {
                    en: 'Bakery',
                    fr: 'Boulangerie',
                    it: 'Panetteria',
                    es: 'Panadería',
                    de: 'Bäckerei',
                    ru: 'Пекарня',
                    el: 'Αρτοποιείο',
                    pt: 'Padaria',
                    hy: 'Հացատուն',
                    ka: 'საცხობი',
                    br: 'Boulanjeri',
                    tt: 'Икмәк кибете',
                    ba: 'Икмәк кибете',
                    cv: 'Ҫӑкӑр лавкки'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } }
                ],
                npcs: ['lucas_baker'],
                objects: ['baguette', 'croissant', 'bread_basket', 'pie', 'cake_display', 'cash_register', 'baker_hat', 'apron']
            },
            cafe: {
                id: 'cafe',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 30,
                icon: '☕',
                name: {
                    en: 'Cafe',
                    fr: 'Café',
                    it: 'Caffè',
                    es: 'Cafetería',
                    de: 'Café',
                    ru: 'Кафе',
                    el: 'Καφετέρια',
                    pt: 'Café',
                    hy: 'Սրճարան',
                    ka: 'კაფე',
                    br: 'Kafedi',
                    tt: 'Кафе',
                    ba: 'Кафе',
                    cv: 'Кафе'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } },
                    { targetId: 'bookshop', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bookshop 📚', fr: 'Librairie 📚', it: 'Libreria 📚', es: 'Librería 📚', de: 'Buchhandlung 📚', ru: 'Книжный 📚' } }
                ],
                npcs: ['marco_barista'],
                objects: ['espresso_machine', 'coffee_cup', 'tea_pot', 'menu_board', 'muffin', 'terrace_table', 'sugar_bowl', 'bar_stool']
            },
            supermarket: {
                id: 'supermarket',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 40,
                icon: '🛒',
                name: {
                    en: 'Supermarket',
                    fr: 'Supermarché',
                    it: 'Supermercato',
                    es: 'Supermercado',
                    de: 'Supermarkt',
                    ru: 'Супермаркет',
                    el: 'Σούπερ Μάρκετ',
                    pt: 'Supermercado',
                    hy: 'Սուպերմարկետ',
                    ka: 'სუპერმარკეტი',
                    br: 'Marmarc\'had',
                    tt: 'Супермаркет',
                    ba: 'Супермаркет',
                    cv: 'Супермаркет'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } }
                ],
                npcs: ['anna'],
                objects: ['shopping_cart', 'apple', 'milk_carton', 'cheese_wheel', 'orange_juice', 'cereal_box', 'checkout_counter', 'scale']
            },
            bookshop: {
                id: 'bookshop',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 50,
                icon: '📚',
                name: {
                    en: 'Bookshop',
                    fr: 'Librairie',
                    it: 'Libreria',
                    es: 'Librería',
                    de: 'Buchhandlung',
                    ru: 'Книжный магазин',
                    el: 'Βιβλιοπωλείο',
                    pt: 'Livraria',
                    hy: 'Գրանութ',
                    ka: 'წიგნის მაღაზია',
                    br: 'Levrdi',
                    tt: 'Китап кибете',
                    ba: 'Китап кибете',
                    cv: 'Кӗнеке лавкки'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'cafe', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Cafe ☕', fr: 'Café ☕', it: 'Caffè ☕', es: 'Cafetería ☕', de: 'Café ☕', ru: 'Кафе ☕' } },
                    { targetId: 'library', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Library 📖', fr: 'Bibliothèque 📖', it: 'Biblioteca 📖', es: 'Biblioteca 📖', de: 'Bibliothek 📖', ru: 'Библиотека 📖' } }
                ],
                npcs: ['sophie_librarian'],
                objects: ['novel', 'dictionary', 'bookmark', 'reading_glasses', 'globe', 'magnifying_glass', 'feather_pen', 'notebook']
            },
            library: {
                id: 'library',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 60,
                icon: '📖',
                name: {
                    en: 'Library',
                    fr: 'Bibliothèque',
                    it: 'Biblioteca',
                    es: 'Biblioteca',
                    de: 'Bibliothek',
                    ru: 'Библиотека',
                    el: 'Βιβλιοθήκη',
                    pt: 'Biblioteca',
                    hy: 'Գրադարան',
                    ka: 'ბიბლიოთეკა',
                    br: 'Levraoueg',
                    tt: 'Китапханә',
                    ba: 'Китапхана',
                    cv: 'Кӗнекелӗх'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'bookshop', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bookshop 📚', fr: 'Librairie 📚', it: 'Libreria 📚', es: 'Librería 📚', de: 'Buchhandlung 📚', ru: 'Книжный 📚' } }
                ],
                npcs: ['sophie_librarian'],
                objects: ['encyclopedia', 'study_desk', 'desk_lamp', 'quiet_sign', 'catalog_cabinet', 'e_reader', 'map', 'scroll']
            },
            school: {
                id: 'school',
                district: 'City Centre',
                level: 'A0-A1',
                reqXP: 30,
                icon: '🏫',
                name: {
                    en: 'School',
                    fr: 'École',
                    it: 'Scuola',
                    es: 'Escuela',
                    de: 'Schule',
                    ru: 'Школа',
                    el: 'Σχολείο',
                    pt: 'Escola',
                    hy: 'Դպրոց',
                    ka: 'სკოლა',
                    br: 'Skol',
                    tt: 'Мәктәп',
                    ba: 'Мәктәп',
                    cv: 'Шкул'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } },
                    { targetId: 'cosy_hq', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'COSY HQ 🏢', fr: 'QG COSY 🏢', it: 'HQ COSY 🏢', es: 'HQ COSY 🏢', de: 'COSY HQ 🏢', ru: 'Штаб COSY 🏢' } }
                ],
                npcs: ['ella_bronx'],
                objects: ['blackboard', 'chalk', 'school_desk', 'backpack', 'pencase', 'ruler', 'textbook', 'diploma']
            },
            pharmacy: {
                id: 'pharmacy',
                district: 'City Centre',
                level: 'A1',
                reqXP: 70,
                icon: '💊',
                name: {
                    en: 'Pharmacy',
                    fr: 'Pharmacie',
                    it: 'Farmacia',
                    es: 'Farmacia',
                    de: 'Apotheke',
                    ru: 'Аптека',
                    el: 'Φαρμακείο',
                    pt: 'Farmácia',
                    hy: 'Դեղատուն',
                    ka: 'აფთიაქი',
                    br: 'Lec\'h-louzoù',
                    tt: 'Аптека',
                    ba: 'Аптека',
                    cv: 'Аптека'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } },
                    { targetId: 'clinic', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Clinic 🏥', fr: 'Clinique 🏥', it: 'Clinica 🏥', es: 'Clínica 🏥', de: 'Klinik 🏥', ru: 'Клиника 🏥' } }
                ],
                npcs: ['dr_elena'],
                objects: ['medicine_bottle', 'thermometer', 'bandage', 'pills', 'first_aid_kit', 'vitamins', 'cross_sign', 'prescription']
            },
            clinic: {
                id: 'clinic',
                district: 'City Centre',
                level: 'A1',
                reqXP: 80,
                icon: '🏥',
                name: {
                    en: 'Clinic',
                    fr: 'Clinique',
                    it: 'Clinica',
                    es: 'Clínica',
                    de: 'Klinik',
                    ru: 'Клиника',
                    el: 'Κλινική',
                    pt: 'Clínica',
                    hy: 'Կլինիկա',
                    ka: 'კლინიკა',
                    br: 'Ti-klañv',
                    tt: 'Клиника',
                    ba: 'Клиника',
                    cv: 'Клиника'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'pharmacy', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Pharmacy 💊', fr: 'Pharmacie 💊', it: 'Farmacia 💊', es: 'Farmacia 💊', de: 'Apotheke 💊', ru: 'Аптека 💊' } }
                ],
                npcs: ['dr_elena'],
                objects: ['stethoscope', 'doctor_desk', 'waiting_chair', 'medical_chart', 'height_chart', 'blood_pressure_monitor', 'white_coat', 'sanitizer']
            },

            // --- NATURE & LEISURE ---
            park: {
                id: 'park',
                district: 'Nature & Leisure',
                level: 'A0-A1',
                reqXP: 10,
                icon: '🌲',
                name: {
                    en: 'Park',
                    fr: 'Parc',
                    it: 'Parco',
                    es: 'Parque',
                    de: 'Park',
                    ru: 'Парк',
                    el: 'Πάρκο',
                    pt: 'Parque',
                    hy: 'Զբոսայգի',
                    ka: 'პარკი',
                    br: 'Park',
                    tt: 'Парк',
                    ba: 'Парк',
                    cv: 'Парк'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'garden', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Garden 🌿', fr: 'Jardin 🌿', it: 'Giardino 🌿', es: 'Jardín 🌿', de: 'Garten 🌿', ru: 'Сад 🌿' } },
                    { targetId: 'lake', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Lake 🏞️', fr: 'Lac 🏞️', it: 'Lago 🏞️', es: 'Lago 🏞️', de: 'See 🏞️', ru: 'Озеро 🏞️' } }
                ],
                npcs: ['ella_bronx'],
                objects: ['park_bench', 'duck_pond', 'picnic_blanket', 'kool_bridge', 'trees', 'flower_garden', 'trash_bin', 'walking_path']
            },
            lake: {
                id: 'lake',
                district: 'Nature & Leisure',
                level: 'A1',
                reqXP: 90,
                icon: '🏞️',
                name: {
                    en: 'Lake',
                    fr: 'Lac',
                    it: 'Lago',
                    es: 'Lago',
                    de: 'See',
                    ru: 'Озеро',
                    el: 'Λίμνη',
                    pt: 'Lago',
                    hy: 'Լիճ',
                    ka: 'ტბა',
                    br: 'Lenn',
                    tt: 'Күл',
                    ba: 'Күл',
                    cv: 'Кӳлӗ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'park', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Park 🌲', fr: 'Parc 🌲', it: 'Parco 🌲', es: 'Parque 🌲', de: 'Park 🌲', ru: 'Парк 🌲' } }
                ],
                npcs: [],
                objects: ['row_boat', 'wooden_pier', 'swan', 'water_lily', 'fishing_rod', 'life_buoy', 'reed', 'mountain_view']
            },

            // --- TRANSPORT & HQ ---
            bus_station: {
                id: 'bus_station',
                district: 'Transport & HQ',
                level: 'A1',
                reqXP: 100,
                icon: '🚌',
                name: {
                    en: 'Bus Station',
                    fr: 'Gare routière',
                    it: 'Stazione degli autobus',
                    es: 'Estación de autobuses',
                    de: 'Busbahnhof',
                    ru: 'Автовокзал',
                    el: 'Σταθμός Λεωφορείων',
                    pt: 'Estação de autocarros',
                    hy: 'Ավտոկայան',
                    ka: 'ავტოსადგური',
                    br: 'Garez bus',
                    tt: 'Автовокзал',
                    ba: 'Автовокзал',
                    cv: 'Автовокзал'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'town_square', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } },
                    { targetId: 'train_station', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Train Station 🚆', fr: 'Gare 🚆', it: 'Stazione 🚆', es: 'Estación 🚆', de: 'Bahnhof 🚆', ru: 'Вокзал 🚆' } }
                ],
                npcs: [],
                objects: ['city_bus', 'bus_shelter', 'ticket_machine', 'timetable_board', 'passenger_bench', 'suitcase', 'bus_driver_cap', 'route_map']
            },
            train_station: {
                id: 'train_station',
                district: 'Transport & HQ',
                level: 'A1',
                reqXP: 110,
                icon: '🚆',
                name: {
                    en: 'Train Station',
                    fr: 'Gare ferroviaire',
                    it: 'Stazione ferroviaria',
                    es: 'Estación de tren',
                    de: 'Bahnhof',
                    ru: 'Железнодорожный вокзал',
                    el: 'Σιδηροδρομικός Σταθμός',
                    pt: 'Estação de comboios',
                    hy: 'Կայարան',
                    ka: 'რკინიგზის სადგური',
                    br: 'Garez trein',
                    tt: 'Тимер юл вокзалы',
                    ba: 'Тимер юл вокзалы',
                    cv: 'Тимӗр ҫул вокзалӗ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'bus_station', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Bus Station 🚌', fr: 'Gare routière 🚌', it: 'Autobus 🚌', es: 'Autobuses 🚌', de: 'Busbahnhof 🚌', ru: 'Автовокзал 🚌' } }
                ],
                npcs: [],
                objects: ['express_train', 'platform', 'railway_track', 'station_clock', 'information_desk', 'departure_board', 'ticket_barrier', 'luggage_trolley']
            },
            cosy_hq: {
                id: 'cosy_hq',
                district: 'Transport & HQ',
                level: 'A0-A1',
                reqXP: 0,
                icon: '🏢',
                name: {
                    en: 'COSYlanguages Headquarters',
                    fr: 'Siège COSYlanguages',
                    it: 'Sede COSYlanguages',
                    es: 'Sede COSYlanguages',
                    de: 'COSYlanguages Zentrale',
                    ru: 'Штаб-квартира COSYlanguages',
                    el: 'Αρχηγείο COSYlanguages',
                    pt: 'Sede COSYlanguages',
                    hy: 'COSYlanguages Գլխամաս',
                    ka: 'COSYlanguages შტაბი',
                    br: 'Penc\'hêr COSYlanguages',
                    tt: 'COSYlanguages штаб-квартирасы',
                    ba: 'COSYlanguages штаб-квартираһы',
                    cv: 'COSYlanguages тӗп килӗ'
                },
                viewBox: '0 0 800 500',
                doors: [
                    { targetId: 'school', x: 20, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'School 🏫', fr: 'École 🏫', it: 'Scuola 🏫', es: 'Escuela 🏫', de: 'Schule 🏫', ru: 'Школа 🏫' } },
                    { targetId: 'town_square', x: 710, y: 180, width: 70, height: 220, labelY: 160, labels: { en: 'Town Square 🏛️', fr: 'Place 🏛️', it: 'Piazza 🏛️', es: 'Plaza 🏛️', de: 'Stadtplatz 🏛️', ru: 'Площадь 🏛️' } }
                ],
                npcs: ['james_york', 'ella_bronx', 'anna'],
                objects: ['founder_desk', 'world_map_wall', 'award_trophy', 'podcast_mic', 'polyglot_banner', 'whiteboard', 'coffee_machine_hq', 'lounge_sofa']
            }
        },

        npcs: {
            james_york: {
                id: 'james_york',
                name: 'James York',
                role: 'Founder & Explorer Mentor',
                avatar: '👨‍💼',
                locationId: 'town_square',
                schedule: {
                    morning: 'town_square',
                    afternoon: 'cosy_hq',
                    evening: 'cafe'
                },
                relationshipTiers: ['Stranger', 'Acquaintance', 'Friend', 'Trusted Citizen', 'Best Ally'],
                dialogues: {
                    en: [
                        { id: 1, text: "Welcome to COSY Town! I am James York, founder of COSYlanguages. You arrive without knowing the language, but by exploring every object, building, and person here, you will become a full citizen!", options: [{ label: "Thank you, James! Where should I start?", next: 2 }] },
                        { id: 2, text: "Start by exploring your Apartment Living Room or finding objects around the Town Square. Click on any item to learn its name, pronunciation, and grammar! Speak to Ella Bronx for speaking practice or challenge Anna!", options: [{ label: "Got it! I am ready to explore.", questId: 'q1_welcome' }] }
                    ],
                    fr: [
                        { id: 1, text: "Bienvenue à COSY Town ! Je suis James York, fondateur de COSYlanguages. Vous arrivez sans connaître la langue, mais en explorant chaque objet et personnage, vous deviendrez un vrai citoyen !", options: [{ label: "Merci James ! Par quoi commencer ?", next: 2 }] },
                        { id: 2, text: "Commencez par votre salon ou la place centrale ! Cliquez sur les objets pour apprendre leur nom, prononciation et grammaire.", options: [{ label: "C'est parti !", questId: 'q1_welcome' }] }
                    ],
                    it: [
                        { id: 1, text: "Benvenuto a COSY Town! Sono James York, fondatore di COSYlanguages. Imparerai la lingua esplorando ogni angolo di questa splendida città!", options: [{ label: "Grazie James! Da dove inizio?", next: 2 }] },
                        { id: 2, text: "Esplora il tuo appartamento o la piazza centrale! Clicca sugli oggetti per ascoltare la pronuncia e imparare la grammatica.", options: [{ label: "Pronto ad iniziare!", questId: 'q1_welcome' }] }
                    ],
                    ru: [
                        { id: 1, text: "Добро пожаловать в COSY Town! Я Джеймс Йорк, основатель COSYlanguages. Здесь язык усваивается естественным путём через исследование и общение!", options: [{ label: "Спасибо, Джеймс! С чего начать?", next: 2 }] },
                        { id: 2, text: "Исследуйте гостиную или городскую площадь! Нажимайте на предметы, учите слова, слушайте произношение и выполняйте задания.", options: [{ label: "Я готов!", questId: 'q1_welcome' }] }
                    ]
                }
            },
            ella_bronx: {
                id: 'ella_bronx',
                name: 'Ella Bronx',
                role: 'Speaking & Pronunciation Teacher',
                avatar: '👩‍🏫',
                locationId: 'school',
                schedule: {
                    morning: 'school',
                    afternoon: 'park',
                    evening: 'cosy_hq'
                },
                relationshipTiers: ['Stranger', 'Acquaintance', 'Friend', 'Trusted Citizen', 'Best Ally'],
                dialogues: {
                    en: [
                        { id: 1, text: "Hello there! I'm Ella. Speaking is all about confidence and natural rhythm. Never worry about perfection — let's practice speaking together!", options: [{ label: "Hi Ella! Can you help me practice pronunciation?", next: 2 }] },
                        { id: 2, text: "With pleasure! Listen closely to the native pronunciation of every object you collect in your Vocabulary Encyclopedia. Try repeating out loud!", options: [{ label: "I will repeat out loud!", questId: 'q3_pronunciation' }] }
                    ],
                    fr: [
                        { id: 1, text: "Bonjour ! Je suis Ella. L'expression orale est une question de confiance. La perfection n'est pas nécessaire, l'essentiel est de pratiquer !", options: [{ label: "Bonjour Ella ! Pouvez-vous m'aider à prononcer ?", next: 2 }] },
                        { id: 2, text: "Avec plaisir ! Écoutez attentivement chaque mot dans votre encyclopédie et répétez à voix haute.", options: [{ label: "Je répéterai à voix haute !", questId: 'q3_pronunciation' }] }
                    ],
                    ru: [
                        { id: 1, text: "Здравствуйте! Я Элла. Главное в речи — уверенность и естественный ритм. Не бойтесь ошибок, давайте практиковаться вместе!", options: [{ label: "Привет, Элла! Поможешь мне с произношением?", next: 2 }] },
                        { id: 2, text: "С удовольствием! Слушайте аудио в энциклопедии и повторяйте вслух за нами!", options: [{ label: "Буду повторять вслух!", questId: 'q3_pronunciation' }] }
                    ]
                }
            },
            anna: {
                id: 'anna',
                name: 'Anna',
                role: 'Rival & Competitive Learner',
                avatar: '👩‍🎓',
                locationId: 'town_square',
                schedule: {
                    morning: 'supermarket',
                    afternoon: 'town_square',
                    evening: 'library'
                },
                relationshipTiers: ['Rival', 'Challenger', 'Respected Rival', 'Study Partner', 'Best Ally'],
                dialogues: {
                    en: [
                        { id: 1, text: "Oh, a new citizen? I've already collected 30 vocabulary items today! Think you can match my learning speed?", options: [{ label: "Challenge accepted, Anna!", next: 2 }] },
                        { id: 2, text: "Let's see! Race through the Supermarket and Bakery to collect 5 food items before me!", options: [{ label: "Watch me win!", questId: 'q5_anna_race' }] }
                    ],
                    fr: [
                        { id: 1, text: "Oh, un nouveau citoyen ? J'ai déjà appris 30 mots aujourd'hui ! Tu penses pouvoir me battre ?", options: [{ label: "Défi accepté, Anna !", next: 2 }] },
                        { id: 2, text: "Voyons ça ! Découvre 5 mots dans la boulangerie et le supermarché !", options: [{ label: "C'est parti !", questId: 'q5_anna_race' }] }
                    ],
                    ru: [
                        { id: 1, text: "О, новый житель? Я уже выучила 30 слов за сегодня! Думаешь, сможешь обогнать меня?", options: [{ label: "Вызов принят, Анна!", next: 2 }] },
                        { id: 2, text: "Посмотрим! Найди 5 продуктов в супермаркете и пекарне быстрее меня!", options: [{ label: "Я побежу!", questId: 'q5_anna_race' }] }
                    ]
                }
            },
            lucas_baker: {
                id: 'lucas_baker',
                name: 'Lucas',
                role: 'Town Artisan Baker',
                avatar: '👨‍🍳',
                locationId: 'bakery',
                schedule: { morning: 'bakery', afternoon: 'bakery', evening: 'park' },
                relationshipTiers: ['Stranger', 'Regular Customer', 'Dear Friend'],
                dialogues: {
                    en: [{ id: 1, text: "Fresh baguettes and warm croissants! Practice ordering in the local language!", options: [{ label: "One croissant, please!", questId: 'q4_bakery_shopping' }] }],
                    fr: [{ id: 1, text: "Des baguettes fraîches et des croissants chauds ! Passez commande !", options: [{ label: "Un croissant, s'il vous plaît !", questId: 'q4_bakery_shopping' }] }],
                    ru: [{ id: 1, text: "Свежие багеты и горячие круассаны! Попробуйте сделать заказ на местном языке!", options: [{ label: "Один круассан, пожалуйста!", questId: 'q4_bakery_shopping' }] }]
                }
            },
            sophie_librarian: {
                id: 'sophie_librarian',
                name: 'Sophie',
                role: 'Head Librarian',
                avatar: '👩‍💼',
                locationId: 'library',
                schedule: { morning: 'bookshop', afternoon: 'library', evening: 'cafe' },
                relationshipTiers: ['Reader', 'Avid Scholar', 'Master Polyglot'],
                dialogues: {
                    en: [{ id: 1, text: "Welcome to the quiet sanctuary of knowledge. Books are the ultimate bridge between cultures.", options: [{ label: "Show me the dictionary shelf!", next: 1 }] }],
                    fr: [{ id: 1, text: "Bienvenue dans notre havre de savoir. Les livres rapprochent les cultures.", options: [{ label: "Montrez-moi les dictionnaires !", next: 1 }] }]
                }
            },
            marco_barista: {
                id: 'marco_barista',
                name: 'Marco',
                role: 'Master Barista',
                avatar: '☕',
                locationId: 'cafe',
                schedule: { morning: 'cafe', afternoon: 'cafe', evening: 'town_square' },
                relationshipTiers: ['Coffee Lover', 'Cafe Regular', 'Honorary Italian'],
                dialogues: {
                    en: [{ id: 1, text: "A fresh espresso for the language learner! What can I craft for you today?", options: [{ label: "An espresso, please!", next: 1 }] }]
                }
            },
            dr_elena: {
                id: 'dr_elena',
                name: 'Dr. Elena',
                role: 'Town Physician',
                avatar: '👩‍⚕️',
                locationId: 'clinic',
                schedule: { morning: 'clinic', afternoon: 'pharmacy', evening: 'park' },
                relationshipTiers: ['Patient', 'Healthy Citizen', 'Trusted Doctor'],
                dialogues: {
                    en: [{ id: 1, text: "Health and wellness are vital. Learning medical vocabulary helps in any country!", options: [{ label: "Thank you doctor!", next: 1 }] }]
                }
            }
        },

        objects: {
            // Apartment Living Room
            sofa: {
                id: 'sofa', locationId: 'apartment_living', emoji: '🛋️', x: 220, y: 260, width: 180, height: 100, labelX: 310, labelY: 250,
                category: 'furniture',
                words: { en: 'Sofa', fr: 'Canapé', it: 'Divano', es: 'Sofá', de: 'Sofa', ru: 'Диван', el: 'Καναπές', pt: 'Sofá', hy: 'Բազմոց', ka: 'დივანი', br: 'Kador-vras', tt: 'Диван', ba: 'Диван', cv: 'Диван' },
                phonetics: { en: '/ˈsoʊ.fə/', fr: '/ka.na.pe/', it: '/diˈva.no/', es: '/soˈfa/', de: '/ˈzoːfa/', ru: '/dʲɪˈvan/' },
                examples: { en: 'The sofa is very comfortable.', fr: 'Le canapé est très confortable.', ru: 'Диван очень удобный.' },
                grammarNotes: { en: 'Countable Noun. Plural: sofas.', fr: 'Nom masculin : le canapé.', ru: 'Существительное мужского рода.' },
                collocations: { en: ['leather sofa', 'sit on the sofa'], fr: ['canapé en cuir', 's\'asseoir sur le canapé'] }
            },
            coffee_table: {
                id: 'coffee_table', locationId: 'apartment_living', emoji: '🪑', x: 250, y: 360, width: 120, height: 60, labelX: 310, labelY: 350,
                category: 'furniture',
                words: { en: 'Coffee Table', fr: 'Table basse', it: 'Tavolino', es: 'Mesa de centro', de: 'Couchtisch', ru: 'Журнальный столик', el: 'Τραπεζάκι', pt: 'Mesa de centro', hy: 'Սուրճի սեղան', ka: 'ყავის მაგიდა', br: 'Taol-gava', tt: 'Журнал өстәле', ba: 'Журнал өстәле', cv: 'Журнал сӗтелӗ' },
                phonetics: { en: '/ˈkɔː.fi ˈteɪ.bəl/', fr: '/tabl bas/', ru: '/ʐʊrˈnalʲ.nɨj ˈsto.lʲɪk/' },
                examples: { en: 'A book is on the coffee table.', fr: 'Un livre est sur la table basse.', ru: 'Книга лежит на журнальном столике.' },
                grammarNotes: { en: 'Compound Noun.', fr: 'Nom féminin : la table basse.', ru: 'Мужской род, единственное число.' }
            },
            tv: {
                id: 'tv', locationId: 'apartment_living', emoji: '📺', x: 480, y: 180, width: 140, height: 90, labelX: 550, labelY: 170,
                category: 'technology',
                words: { en: 'Television', fr: 'Télévision', it: 'Televisione', es: 'Televisión', de: 'Fernseher', ru: 'Телевизор', el: 'Τηλεόραση', pt: 'Televisão', hy: 'Հեռուստացույց', ka: 'ტელევიზორი', br: 'Skinwel', tt: 'Телевизор', ba: 'Телевизор', cv: 'Телевизор' },
                phonetics: { en: '/ˈtel.ə.vɪʒ.ən/', fr: '/te.le.vi.zjɔ̃/', ru: '/tʲɪlʲɪˈvʲizər/' },
                examples: { en: 'We watch news on the television.', fr: 'Nous regardons la télévision.', ru: 'Мы смотрим телевизор.' }
            },
            bookshelf: {
                id: 'bookshelf', locationId: 'apartment_living', emoji: '📚', x: 80, y: 150, width: 100, height: 220, labelX: 130, labelY: 140,
                category: 'furniture',
                words: { en: 'Bookshelf', fr: 'Bibliothèque', it: 'Libreria', es: 'Estantería', de: 'Bücherregal', ru: 'Книжная полка', el: 'Ράφι βιβλίων', pt: 'Estante', hy: 'Գրապահարան', ka: 'წიგნის თარო', br: 'Tirgarez-levrioù', tt: 'Китап сәкесе', ba: 'Китап кәштәһе', cv: 'Кӗнеке сӑппи' },
                phonetics: { en: '/ˈbʊk.ʃelf/', fr: '/bi.bli.ɔ.tɛk/', ru: '/ˈknʲiʐ.nəjə ˈpol.kə/' }
            },
            lamp: {
                id: 'lamp', locationId: 'apartment_living', emoji: '💡', x: 650, y: 220, width: 50, height: 120, labelX: 675, labelY: 210,
                category: 'furniture',
                words: { en: 'Lamp', fr: 'Lampe', it: 'Lampada', es: 'Lámpara', de: 'Lampe', ru: 'Лампа', el: 'Λάμπα', pt: 'Lâmpada', hy: 'Լամպ', ka: 'ლამპა', br: 'Lampa', tt: 'Лампа', ba: 'Лампа', cv: 'Лампа' },
                phonetics: { en: '/læmp/', fr: '/lɑ̃p/', ru: '/ˈlam.pə/' }
            },

            // Kitchen
            fridge: {
                id: 'fridge', locationId: 'apartment_kitchen', emoji: '🧊', x: 100, y: 160, width: 110, height: 240, labelX: 155, labelY: 150,
                category: 'kitchen',
                words: { en: 'Refrigerator', fr: 'Réfrigérateur', it: 'Frigorifero', es: 'Refrigerador', de: 'Kühlschrank', ru: 'Холодильник', el: 'Ψυγείο', pt: 'Frigorífico', hy: 'Սառնարան', ka: 'მაცივარი', br: 'Kastell-skorn', tt: 'Холодильник', ba: 'Холодильник', cv: 'Холодильник' },
                phonetics: { en: '/rɪˈfrɪdʒ.ə.reɪ.tər/', fr: '/ʁe.fʁi.ʒe.ʁa.tœʁ/', ru: '/xələˈdʲilʲ.nʲɪk/' }
            },
            kettle: {
                id: 'kettle', locationId: 'apartment_kitchen', emoji: '🫖', x: 320, y: 240, width: 60, height: 60, labelX: 350, labelY: 230,
                category: 'kitchen',
                words: { en: 'Kettle', fr: 'Bouilloire', it: 'Bollitore', es: 'Hervidor', de: 'Wasserkocher', ru: 'Чайник', el: 'Βραστήρας', pt: 'Jarro elétrico', hy: 'Թեյնիկ', ka: 'ჩაიდანი', br: 'Krochan-kafe', tt: 'Чәйнек', ba: 'Чәйнек', cv: 'Чайник' },
                phonetics: { en: '/ˈket.əl/', fr: '/bu.jwaʁ/', ru: '/ˈtɕaj.nʲɪk/' }
            },

            // Town Square & City
            clock_tower: {
                id: 'clock_tower', locationId: 'town_square', emoji: '🕰️', x: 350, y: 60, width: 100, height: 180, labelX: 400, labelY: 50,
                category: 'city',
                words: { en: 'Clock Tower', fr: 'Tour de l\'horloge', it: 'Torre dell\'orologio', es: 'Torre del reloj', de: 'Uhrturm', ru: 'Башня с часами', el: 'Πύργος του ρολογιού', pt: 'Torre do relógio', hy: 'Ժամացույցի աշտարակ', ka: 'საათის კოშკი', br: 'Tourete-eurier', tt: 'Сәгать башнясы', ba: 'Сәғәт башняһы', cv: 'Сехет башнийӗ' },
                phonetics: { en: '/klɒk ˈtaʊ.ər/', fr: '/tuʁ də lɔʁ.lɔʒ/', ru: '/ˈbaʂ.nʲə s tɕəˈsa.mʲɪ/' }
            },
            baguette: {
                id: 'baguette', locationId: 'bakery', emoji: '🥖', x: 260, y: 240, width: 90, height: 40, labelX: 305, labelY: 230,
                category: 'food',
                words: { en: 'Baguette', fr: 'Baguette', it: 'Baguette', es: 'Barra de pan', de: 'Baguette', ru: 'Багет', el: 'Μπαγκέτα', pt: 'Baguete', hy: 'Բագետ', ka: 'ბაგეტი', br: 'Baguette', tt: 'Багет', ba: 'Багет', cv: 'Багет' },
                phonetics: { en: '/bæɡˈet/', fr: '/ba.ɡɛt/', ru: '/bɐˈɡʲet/' }
            },
            croissant: {
                id: 'croissant', locationId: 'bakery', emoji: '🥐', x: 380, y: 240, width: 70, height: 50, labelX: 415, labelY: 230,
                category: 'food',
                words: { en: 'Croissant', fr: 'Croissant', it: 'Cornetto', es: 'Cruasán', de: 'Croissant', ru: 'Круассан', el: 'Κρουασάν', pt: 'Croissant', hy: 'Կրուասան', ka: 'კრუასანი', br: 'Kroasantez', tt: 'Круассан', ba: 'Круассан', cv: 'Круассан' },
                phonetics: { en: '/ˈkwæs.ɒ̃/', fr: '/kʁwa.sɑ̃/', ru: '/krʊɐˈsan/' }
            },
            espresso_machine: {
                id: 'espresso_machine', locationId: 'cafe', emoji: '☕', x: 280, y: 200, width: 100, height: 90, labelX: 330, labelY: 190,
                category: 'kitchen',
                words: { en: 'Coffee Machine', fr: 'Machine à café', it: 'Macchina del caffè', es: 'Cafetera', de: 'Kaffeemaschine', ru: 'Кофемашина', el: 'Καφετιέρα', pt: 'Máquina de café', hy: 'Սուրճի մեքենա', ka: 'ყავის აპარატი', br: 'Maching-kafe', tt: 'Кофе машинасы', ba: 'Кофе машинаһы', cv: 'Кофе машини' },
                phonetics: { en: '/ˈkɒf.i məˈʃiːn/', fr: '/ma.ʃin a ka.fe/', ru: '/kəˈfʲe.mɐ.ʂɨ.nə/' }
            },
            blackboard: {
                id: 'blackboard', locationId: 'school', emoji: '🟫', x: 250, y: 120, width: 300, height: 160, labelX: 400, labelY: 110,
                category: 'school',
                words: { en: 'Blackboard', fr: 'Tableau noir', it: 'Lavagna', es: 'Pizarra', de: 'Schulwandtafel', ru: 'Школьная доска', el: 'Μαυροπίνακας', pt: 'Quadro-negro', hy: 'Գրատախտակ', ka: 'დაფა', br: 'Taolenn-du', tt: 'Мәктәп ташы', ba: 'Мәктәп таҡтаһы', cv: 'Шкул таски' },
                phonetics: { en: '/ˈblæk.bɔːd/', fr: '/ta.blo nwaʁ/', ru: '/ˈʂkolʲ.nəjə dɐsˈka/' }
            }
        },

        quests: [
            {
                id: 'q1_welcome',
                title: 'Arrival in COSY Town 🏛️',
                description: 'Talk with James York at the Town Square to receive your citizenship journal!',
                district: 'City Centre',
                targetNpc: 'james_york',
                type: 'Dialogue Mission',
                xpReward: 50,
                grammarUnlock: 'gt_greetings'
            },
            {
                id: 'q2_home_vocab',
                title: 'Everyday Haven 🛋️',
                description: 'Explore the Apartment Living Room and discover 3 furniture objects!',
                district: 'Residential District',
                targetObjects: ['sofa', 'coffee_table', 'tv'],
                type: 'Vocabulary Hunt',
                xpReward: 60,
                grammarUnlock: 'gt_there_is'
            },
            {
                id: 'q3_pronunciation',
                title: 'Vocal Harmony 🗣️',
                description: 'Visit Ella Bronx at the School and practice pronunciation!',
                district: 'City Centre',
                targetNpc: 'ella_bronx',
                type: 'Speaking Mission',
                xpReward: 70,
                grammarUnlock: 'gt_present_simple'
            },
            {
                id: 'q4_bakery_shopping',
                title: 'Morning Croissant 🥐',
                description: 'Visit Lucas at the Bakery and inspect the fresh Baguette and Croissant!',
                district: 'City Centre',
                targetObjects: ['baguette', 'croissant'],
                type: 'Shopping Mission',
                xpReward: 80,
                grammarUnlock: 'gt_likes'
            },
            {
                id: 'q5_anna_race',
                title: 'The Speed Challenge ⚡',
                description: 'Race with Anna! Collect 5 vocabulary words across town locations!',
                district: 'City Centre',
                targetCount: 5,
                type: 'Vocabulary Hunt',
                xpReward: 100,
                grammarUnlock: 'gt_questions'
            }
        ],

        grammarTree: [
            { id: 'gt_greetings', title: 'Greetings & Introductions 👋', cefr: 'A0', desc: 'Hello, Goodbye, My name is...', unlocked: true },
            { id: 'gt_there_is', title: 'There is / There are 🛋️', cefr: 'A0', desc: 'Describing objects in a room (There is a sofa...)', unlocked: false },
            { id: 'gt_present_simple', title: 'Present Simple Verbs 🏃', cefr: 'A1', desc: 'Habits and state (I live, you explore, he speaks)', unlocked: false },
            { id: 'gt_prepositions', title: 'Prepositions of Place 📍', cefr: 'A1', desc: 'in, on, under, next to, in front of', unlocked: false },
            { id: 'gt_questions', title: 'Asking Questions ❓', cefr: 'A1', desc: 'Who, What, Where, When, Why', unlocked: false },
            { id: 'gt_likes', title: 'Expressing Likes & Dislikes ❤️', cefr: 'A1', desc: 'I like croissants, I love coffee', unlocked: false }
        ],

        achievements: [
            { id: 'ach_first_steps', title: 'First Steps 🐾', desc: 'Discover your first vocabulary object in COSY Town', icon: '🌱', reqCount: 1 },
            { id: 'ach_polyglot', title: 'Polyglot Explorer 🌍', desc: 'Switch target language 3 times in COSY World', icon: '🗺️', reqCount: 3 },
            { id: 'ach_socialite', title: 'Town Socialite 🤝', desc: 'Reach Friend tier with James York, Ella, or Anna', icon: '💬', reqCount: 1 },
            { id: 'ach_collector', title: 'Encyclopedia Explorer 📚', desc: 'Collect 10 vocabulary words in your encyclopedia', icon: '📖', reqCount: 10 }
        ],

        ambientSounds: {
            piano: { title: 'Relaxing Piano 🎹', desc: 'Cozy acoustic piano chords' },
            cafe: { title: 'Coffee Shop Warmth ☕', desc: 'Soft ambient cafe atmosphere' },
            nature: { title: 'Nature Breeze 🍃', desc: 'Gentle wind and songbirds' },
            rain: { title: 'Gentle Rain 🌧️', desc: 'Soothing rain drops on leaves' }
        }
    };
})();
