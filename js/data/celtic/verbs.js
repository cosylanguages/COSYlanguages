(function() {
    const data = {
    "br": []
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            } else {
                window.vocabularyData[lang] = data[lang];
            }
        }
    }
    window.verbsData = { ...window.verbsData, ...data };
})();
