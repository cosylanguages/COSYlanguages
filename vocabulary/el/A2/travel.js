(function() {
    'use strict';

    const lang = 'el';
    const data = [
        {
            id: 'el_a2_travel_01',
            word: 'βαλίτσα',
            translation: 'suitcase',
            definitions: [{ text: 'Αντικείμενο για τη μεταφορά ρούχων σε ταξίδια.' }],
            examples: [{ text: 'Ετοίμασα τη βαλίτσα μου για τις διακοπές.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'el',
            form: 'noun'
        },
        {
            id: 'el_a2_travel_02',
            word: 'εισιτήριο',
            translation: 'ticket',
            definitions: [{ text: 'Έγγραφο που επιτρέπει τη μετακίνηση με μεταφορικό μέσο.' }],
            examples: [{ text: 'Αγόρασα ένα εισιτήριο για την Αθήνα.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'el',
            form: 'noun'
        }
    ];

    if (!window.vocabularyData) window.vocabularyData = {};
    if (!window.vocabularyData.el) window.vocabularyData.el = [];
    window.vocabularyData.el.push(...data);
})();
