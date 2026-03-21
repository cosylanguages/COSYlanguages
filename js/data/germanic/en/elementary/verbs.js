(function() {
    const data = [
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🪥",
        "form": "verb"
    },
    {
        "word": "shower",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚿",
        "form": "verb"
    },
    {
        "word": "drawing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "cooking",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "👨‍🍳",
        "form": "verb"
    },
    {
        "word": "dancing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "singing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "seem",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "become",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb"
    },
    {
        "word": "move",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📦",
        "form": "verb"
    },
    {
        "word": "believe",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "happen",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚡",
        "form": "verb"
    },
    {
        "word": "include",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "continue",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "➡️",
        "form": "verb"
    },
    {
        "word": "set",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "⚙️",
        "form": "verb"
    },
    {
        "word": "lead",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb"
    },
    {
        "word": "follow",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "👣",
        "form": "verb"
    },
    {
        "word": "create",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb"
    },
    {
        "word": "allow",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb"
    },
    {
        "word": "grow",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "🌱",
        "form": "verb"
    },
    {
        "word": "offer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb"
    },
    {
        "word": "consider",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "serve",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "expect",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "build",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "reach",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "kill",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "remain",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "suggest",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "raise",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "require",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "report",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "decide",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "explain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "develop",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "support",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "hit",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "produce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "face",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "cover",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "describe",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "catch",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
