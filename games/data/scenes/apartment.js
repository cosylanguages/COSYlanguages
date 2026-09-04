(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['apartment'] = {
        id: 'apartment',
        title: {
            en: "The Apartment — Living Room",
            fr: "L'appartement — Le salon",
            it: "L'appartamento — Il soggiorno",
            ru: "Квартира — Гостиная",
            el: "Το διαμέρισμα — Το σαλόνι",
            es: "El apartamento — La sala de estar",
            de: "Die Wohnung — Das Wohnzimmer",
            pt: "O apartamento — A sala de estar",
            hy: "Բնակարան — Հյուրասենյակ",
            ka: "ბინა — მისაღები ოთახი",
            tt: "Пәтер — Кунак бүлмәсе",
            ba: "Фатир — Ҡунаҡ бүлмәһе",
            br: "An annez — An sal-degemer"
        },
        viewBox: "0 0 800 500",
        hotspots: [
            {
                id: "sofa",
                x: 280, y: 280, width: 240, height: 130, labelX: 400, labelY: 270,
                words: {
                    en: "Sofa", fr: "Canapé", it: "Divano", ru: "Диван", el: "Καναπές",
                    es: "Sofá", de: "Sofa", pt: "Sofá", hy: "Բազմոց", ka: "დივანი",
                    tt: "Диван", ba: "Диван", br: "Kador-vras"
                }
            },
            {
                id: "armchair",
                x: 80, y: 300, width: 140, height: 130, labelX: 150, labelY: 290,
                words: {
                    en: "Armchair", fr: "Fauteuil", it: "Poltrona", ru: "Кресло", el: "Πολυθρόνα",
                    es: "Sillón", de: "Sessel", pt: "Poltrona", hy: "Բազկաթոռ", ka: "სავარძელი",
                    tt: "Кресло", ba: "Кресло", br: "Kador-brec'h"
                }
            },
            {
                id: "coffee_table",
                x: 290, y: 400, width: 220, height: 70, labelX: 400, labelY: 420,
                words: {
                    en: "Coffee table", fr: "Table basse", it: "Tavolino", ru: "Журнальный столик", el: "Τραπεζάκι σαλονιού",
                    es: "Mesa de centro", de: "Couchtisch", pt: "Mesa de centro", hy: "Սուրճի սեղան", ka: "ჟურნალების მაგიდა",
                    tt: "Журнал өстәле", ba: "Журнал өстәле", br: "Taol vihan"
                }
            },
            {
                id: "tv",
                x: 580, y: 220, width: 150, height: 110, labelX: 655, labelY: 210,
                words: {
                    en: "Television", fr: "Télévision", it: "Televisore", ru: "Телевизор", el: "Τηλεόραση",
                    es: "Televisión", de: "Fernseher", pt: "Televisão", hy: "Հեռուստացույց", ka: "ტელევიზორი",
                    tt: "Телевизор", ba: "Телевизор", br: "Pellwoller"
                }
            },
            {
                id: "bookshelf",
                x: 60, y: 80, width: 120, height: 200, labelX: 120, labelY: 70,
                words: {
                    en: "Bookshelf", fr: "Bibliothèque", it: "Libreria", ru: "Книжная полка", el: "Βιβλιοθήκη",
                    es: "Estantería", de: "Bücherregal", pt: "Estante", hy: "Գրապահարան", ka: "წიგნების თარო",
                    tt: "Китап киштәсе", ba: "Китап кәштәһе", br: "Libreriez"
                }
            },
            {
                id: "lamp",
                x: 530, y: 260, width: 45, height: 130, labelX: 550, labelY: 250,
                words: {
                    en: "Floor lamp", fr: "Lampadaire", it: "Lampada da terra", ru: "Торшер", el: "Επιδαπέδιο φωτιστικό",
                    es: "Lámpara de pie", de: "Stehlampe", pt: "Luminária de chão", hy: "Հատակադիր ճրագ", ka: "ტორშერი",
                    tt: "Торшер", ba: "Торшер", br: "Gouloù-leur"
                }
            },
            {
                id: "plant",
                x: 210, y: 260, width: 60, height: 110, labelX: 240, labelY: 250,
                words: {
                    en: "Houseplant", fr: "Plante d'intérieur", it: "Pianta da appartamento", ru: "Комнатное растение", el: "Φυτό εσωτερικού χώρου",
                    es: "Planta de interior", de: "Zimmerpflanze", pt: "Planta de interior", hy: "Սենյակային բույս", ka: "ოთახის მცენარე",
                    tt: "Бүлмә үсемлеге", ba: "Бүлмә үҫемлеге", br: "Bliant ti"
                }
            },
            {
                id: "window",
                x: 260, y: 60, width: 200, height: 150, labelX: 360, labelY: 50,
                words: {
                    en: "Window", fr: "Fenêtre", it: "Finestra", ru: "Окно", el: "Παράθυρο",
                    es: "Ventana", de: "Fenster", pt: "Janela", hy: "Պատուհան", ka: "ფანჯარა",
                    tt: "Тәрәзә", ba: "Тәрәзә", br: "Prenestr"
                }
            },
            {
                id: "rug",
                x: 240, y: 420, width: 320, height: 70, labelX: 400, labelY: 475,
                words: {
                    en: "Rug", fr: "Tapis", it: "Tappeto", ru: "Ковер", el: "Χαλί",
                    es: "Alfombra", de: "Teppich", pt: "Tapete", hy: "Գորգ", ka: "ხალიჩა",
                    tt: "Келәм", ba: "Келәм", br: "Tapis"
                }
            },
            {
                id: "painting",
                x: 520, y: 80, width: 140, height: 100, labelX: 590, labelY: 70,
                words: {
                    en: "Painting", fr: "Tableau", it: "Quadro", ru: "Картина", el: "Πίνακας",
                    es: "Cuadro", de: "Gemälde", pt: "Quadro", hy: "Նկար", ka: "ნახატი",
                    tt: "Рәсем", ba: "Rәсем", br: "Taolenn"
                }
            }
        ]
    };
})();
