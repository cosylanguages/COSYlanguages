(function() {
    'use strict';

    window.COSY_SCENE_DATA = window.COSY_SCENE_DATA || {};
    window.COSY_SCENE_DATA['market'] = {
        id: 'market',
        title: {
            en: "Fresh Market",
            fr: "Marché frais",
            it: "Mercato fresco",
            ru: "Рынок свежих продуктов",
            el: "Φρέσκια Αγορά",
            es: "Mercado fresco",
            de: "Frischer Markt",
            hy: "Թարմ Մթերքի Շուկա",
            ka: "ახალი პროდუქტების ბაზარი"
        },
        viewBox: "0 0 800 500",
        doors: [
            {
                targetSceneId: "cafe",
                x: 15, y: 140, width: 35, height: 230, labelX: 32, labelY: 125,
                labels: { en: "🚪 Café →", fr: "🚪 Café →", it: "🚪 Caffè →", ru: "🚪 Кафе →", el: "🚪 Καφέ →" }
            },
            {
                targetSceneId: "school_office",
                x: 750, y: 140, width: 35, height: 230, labelX: 768, labelY: 125,
                labels: { en: "🚪 School →", fr: "🚪 École →", it: "🚪 Scuola →", ru: "🚪 Школа →", el: "🚪 Σχολείο →" }
            }
        ],
        svgBackground: `
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" />
                <stop offset="100%" stop-color="#bae6fd" />
              </linearGradient>
            </defs>

            <!-- Sky & Ground -->
            <rect x="0" y="0" width="800" height="300" fill="url(#skyGrad)" />
            <rect x="0" y="300" width="800" height="200" fill="#cbd5e1" />

            <!-- Doors -->
            <rect x="15" y="140" width="35" height="220" fill="#475569" />
            <rect x="750" y="140" width="35" height="220" fill="#475569" />

            <!-- Canopy -->
            <polygon points="100,80 700,80 740,160 60,160" fill="#ef4444" />
            <polygon points="100,80 180,80 160,160 60,160" fill="#ffffff" />
            <polygon points="260,80 340,80 320,160 220,160" fill="#ffffff" />
            <polygon points="420,80 500,80 480,160 380,160" fill="#ffffff" />
            <polygon points="580,80 660,80 640,160 540,160" fill="#ffffff" />

            <!-- Market Stalls / Crates -->
            <rect x="120" y="240" width="160" height="120" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="2" />
            <rect x="320" y="240" width="160" height="120" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="2" />
            <rect x="520" y="240" width="160" height="120" fill="#854d0e" stroke="#451a03" stroke-width="3" rx="2" />

            <!-- Apples (Stall 1) -->
            <circle cx="160" cy="220" r="14" fill="#dc2626" />
            <circle cx="190" cy="220" r="14" fill="#dc2626" />
            <circle cx="220" cy="220" r="14" fill="#dc2626" />
            <circle cx="175" cy="200" r="14" fill="#dc2626" />
            <circle cx="205" cy="200" r="14" fill="#dc2626" />

            <!-- Bananas (Stall 2) -->
            <path d="M350 210 Q370 200 390 220" stroke="#facc15" stroke-width="12" fill="none" stroke-linecap="round" />
            <path d="M400 210 Q420 200 440 220" stroke="#facc15" stroke-width="12" fill="none" stroke-linecap="round" />

            <!-- Fish (Stall 3) -->
            <ellipse cx="570" cy="220" rx="25" ry="10" fill="#94a3b8" />
            <polygon points="595,220 610,210 610,230" fill="#64748b" />
            <ellipse cx="630" cy="220" rx="25" ry="10" fill="#94a3b8" />
            <polygon points="655,220 670,210 670,230" fill="#64748b" />

            <!-- Scale -->
            <rect x="380" y="170" width="40" height="50" fill="#475569" />
            <circle cx="400" cy="180" r="15" fill="#f8fafc" stroke="#334155" stroke-width="2" />
        `,
        hotspots: [
            {
                id: "apples",
                x: 140, y: 180, width: 100, height: 60, labelX: 190, labelY: 170,
                words: { en: "Apples", fr: "Pommes", it: "Mele", ru: "Яблоки", el: "Μήλα" }
            },
            {
                id: "bananas",
                x: 340, y: 180, width: 110, height: 60, labelX: 395, labelY: 170,
                words: { en: "Bananas", fr: "Bananes", it: "Banane", ru: "Бананы", el: "Μπανάνες" }
            },
            {
                id: "fish",
                x: 540, y: 180, width: 140, height: 60, labelX: 610, labelY: 170,
                words: { en: "Fish", fr: "Poisson", it: "Pesce", ru: "Рыба", el: "Ψάρι" }
            },
            {
                id: "scale",
                x: 375, y: 160, width: 50, height: 70, labelX: 400, labelY: 145,
                words: { en: "Scale", fr: "Balance", it: "Bilancia", ru: "Весы", el: "Ζυγαριά" }
            },
            {
                id: "canopy",
                x: 60, y: 80, width: 680, height: 80, labelX: 400, labelY: 65,
                words: { en: "Awaning / Canopy", fr: "Avent / Auvent", it: "Tenda da sole", ru: "Тент", el: "Τέντα" }
            }
        ]
    };
})();
