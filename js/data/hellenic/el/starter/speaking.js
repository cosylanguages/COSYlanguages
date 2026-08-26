(function() {
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "Ποιο είναι το αγαπημένο σας μεταφορικό μέσο για να πάτε στη δουλειά;",
            level: "starter",
            theme: "daily_life",
            language: "el"
        },
        {
            topic: "Ποιες δραστηριότητες σας αρέσει να κάνετε το σαββατοκύριακο;",
            level: "starter",
            theme: "hobbies",
            language: "el"
        },
        {
            topic: "Ποιο είναι το αγαπημένο σας φαγητό και γιατί σας αρέσει;",
            level: "starter",
            theme: "food",
            language: "el"
        },
        {
            topic: "Πώς προτιμάτε να περνάτε τις καλοκαιρινές σας διακοπές;",
            level: "starter",
            theme: "travel",
            language: "el"
        },
        {
            topic: "Ποια είναι η αγαπημένη σας εποχή του χρόνου και γιατί;",
            level: "starter",
            theme: "nature",
            language: "el"
        },
        {
            topic: "Πόσες γλώσσες μιλάτε ή θα θέλατε να μάθετε στο μέλλον;",
            level: "starter",
            theme: "education",
            language: "el"
        },
        {
            topic: "Τι είδος μουσικής σας αρέσει να ακούτε το βράδυ;",
            level: "starter",
            theme: "music",
            language: "el"
        },
        {
            topic: "Προτιμάτε να ζείτε σε μια μεγάλη πόλη ή στο χωριό;",
            level: "starter",
            theme: "lifestyle",
            language: "el"
        },
        {
            topic: "Ποιο είναι το αγαπημένο σας βιβλίο ή ταινία φέτος;",
            level: "starter",
            theme: "media",
            language: "el"
        },
        {
            topic: "Πώς χρησιμοποιείτε το Διαδίκτυο για να μαθαίνετε νέα πράγματα;",
            level: "starter",
            theme: "technology",
            language: "el"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
