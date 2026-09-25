import os
import json

DOMAINS = [
    {
        "num": 1,
        "id": "dom-1",
        "title": "Courtesy &amp; Communication",
        "emoji": "💬",
        "goal": "First Contact &amp; Fundamental Dialogue",
        "desc": "The starting point for every beginner. Unlocks greetings, politeness, digital actions, and core question words required on Day 1.",
        "milestone": "Can greet others, ask basic question-word queries (Who/What/Where), perform polite requests, and handle initial contact.",
        "chains": [
            {"id": 1, "title": "Greetings", "rel": "≠", "en": ["👋 Hello", "🚪 Goodbye"], "fr": ["👋 Bonjour", "🚪 Au revoir"], "es": ["👋 Hola", "🚪 Adiós"], "de": ["👋 Hallo", "🚪 Auf Wiedersehen"], "ru": ["👋 Привет", "🚪 До свидания"], "it": ["👋 Ciao", "🚪 Arrivederci"], "el": ["👋 Γεια", "🚪 Αντίο"], "pt": ["👋 Olá", "🚪 Adeus"]},
            {"id": 2, "title": "Politeness", "rel": "≠", "en": ["🙏 Please", "💐 Thank you"], "fr": ["🙏 S'il vous plaît", "💐 Merci"], "es": ["🙏 Por favor", "💐 Gracias"], "de": ["🙏 Bitte", "💐 Danke"], "ru": ["🙏 Пожалуйста", "💐 Спасибо"], "it": ["🙏 Per favore", "💐 Grazie"], "el": ["🙏 Παρακαλώ", "💐 Ευχαριστώ"], "pt": ["🙏 Por favor", "💐 Obrigado"]},
            {"id": 3, "title": "Confirmation", "rel": "≠", "en": ["✅ Yes", "❌ No"], "fr": ["✅ Oui", "❌ Non"], "es": ["✅ Sí", "❌ No"], "de": ["✅ Ja", "❌ Nein"], "ru": ["✅ Да", "❌ Нет"], "it": ["✅ Sì", "❌ No"], "el": ["✅ Ναι", "❌ Όχι"], "pt": ["✅ Sim", "❌ Não"]},
            {"id": 4, "title": "Inquiry", "rel": "≠", "en": ["❓ Ask", "💡 Answer"], "fr": ["❓ Demander", "💡 Répondre"], "es": ["❓ Preguntar", "💡 Responder"], "de": ["❓ Fragen", "💡 Antworten"], "ru": ["❓ Спрашивать", "💡 Отвечать"], "it": ["❓ Chiedere", "💡 Rispondere"], "el": ["❓ Ρωτώ", "💡 Απαντώ"], "pt": ["❓ Perguntar", "💡 Responder"]},
            {"id": 5, "title": "Oral Communication", "rel": "≠", "en": ["👂 Listen", "🗣️ Speak"], "fr": ["👂 Écouter", "🗣️ Parler"], "es": ["👂 Escuchar", "🗣️ Hablar"], "de": ["👂 Hören", "🗣️ Sprechen"], "ru": ["👂 Слушать", "🗣️ Говорить"], "it": ["👂 Ascoltare", "🗣️ Parlare"], "el": ["👂 Ακούω", "🗣️ Μιλώ"], "pt": ["👂 Ouvir", "🗣️ Falar"]},
            {"id": 6, "title": "Literacy", "rel": "≠", "en": ["📖 Read", "✍️ Write"], "fr": ["📖 Lire", "✍️ Écrire"], "es": ["📖 Leer", "✍️ Escribir"], "de": ["📖 Lesen", "✍️ Schreiben"], "ru": ["📖 Читать", "✍️ Писать"], "it": ["📖 Leggere", "✍️ Scrivere"], "el": ["📖 Διαβάζω", "✍️ Γράφω"], "pt": ["📖 Ler", "✍️ Escrever"]},
            {"id": 7, "title": "Phone Call", "rel": "➔", "en": ["📱 Call", "💬 Talk", "🤙 Hang up"], "fr": ["📱 Appeler", "💬 Parler", "🤙 Raccrocher"], "es": ["📱 Llamar", "💬 Hablar", "🤙 Colgar"], "de": ["📱 Anrufen", "💬 Sprechen", "🤙 Auflegen"], "ru": ["📱 Звонить", "💬 Говорить", "🤙 Положить трубку"], "it": ["📱 Chiamare", "💬 Parlare", "🤙 Riagganciare"], "el": ["📱 Καλώ", "💬 Μιλώ", "🤙 Κλείνω"], "pt": ["📱 Ligar", "💬 Falar", "🤙 Desligar"]},
            {"id": 8, "title": "Digital Message", "rel": "➔", "en": ["💻 Open", "⌨️ Type", "✉️ Send"], "fr": ["💻 Ouvrir", "⌨️ Taper", "✉️ Envoyer"], "es": ["💻 Abrir", "⌨️ Escribir", "✉️ Enviar"], "de": ["💻 Öffnen", "⌨️ Tippen", "✉️ Senden"], "ru": ["💻 Открыть", "⌨️ Печатать", "✉️ Отправить"], "it": ["💻 Aprire", "⌨️ Digitare", "✉️ Inviare"], "el": ["💻 Ανοίγω", "⌨️ Πληκτρολογώ", "✉️ Στέλνω"], "pt": ["💻 Abrir", "⌨️ Digitar", "✉️ Enviar"]},
            {"id": 9, "title": "Power Control", "rel": "≠", "en": ["🔌 Turn on", "💡 Turn off"], "fr": ["🔌 Allumer", "💡 Éteindre"], "es": ["🔌 Encender", "💡 Apagar"], "de": ["🔌 Einschalten", "💡 Ausschalten"], "ru": ["🔌 Включить", "💡 Выключить"], "it": ["🔌 Accendere", "💡 Spegnere"], "el": ["🔌 Ανάβω", "💡 Σβήνω"], "pt": ["🔌 Ligar", "💡 Desligar"]},
            {"id": 10, "title": "Question Primitives", "rel": "➔", "en": ["❓ Who", "What", "Where", "When", "Why 🧐"], "fr": ["❓ Qui", "Quoi", "Où", "Quand", "Pourquoi 🧐"], "es": ["❓ Quién", "Qué", "Dónde", "Cuándo", "Por qué 🧐"], "de": ["❓ Wer", "Was", "Wo", "Wann", "Warum 🧐"], "ru": ["❓ Кто", "Что", "Где", "Когда", "Почему 🧐"], "it": ["❓ Chi", "Cosa", "Dove", "Quando", "Perché 🧐"], "el": ["❓ Ποιος", "Τι", "Πού", "Πότε", "Γιατί 🧐"], "pt": ["❓ Quem", "O que", "Onde", "Quando", "Por que 🧐"]}
        ]
    },
    {
        "num": 2,
        "id": "dom-2",
        "title": "People, Family &amp; Identity",
        "emoji": "👥",
        "goal": "Self &amp; Social Connections",
        "desc": "Moves from greetings into personal identity—enabling learners to introduce themselves, state their age group, and describe family relationships.",
        "milestone": "Can introduce oneself and others, state age categories, and identify core family relationships.",
        "chains": [
            {"id": 11, "title": "Pronouns &amp; Group", "rel": "➔", "en": ["🙋 Me", "🫵 You", "👥 Us"], "fr": ["🙋 Moi", "🫵 Toi", "👥 Nous"], "es": ["🙋 Yo", "🫵 Tú", "👥 Nosotros"], "de": ["🙋 Ich", "🫵 Du", "👥 Wir"], "ru": ["🙋 Я", "🫵 Ты", "👥 Мы"], "it": ["🙋 Io", "🫵 Tu", "👥 Noi"], "el": ["🙋 Εγώ", "🫵 Εσύ", "👥 Εμείς"], "pt": ["🙋 Eu", "🫵 Tu", "👥 Nós"]},
            {"id": 12, "title": "Male Lifecycle", "rel": "➔", "en": ["👦 Boy", "👨 Man"], "fr": ["👦 Garçon", "👨 Homme"], "es": ["👦 Niño", "👨 Hombre"], "de": ["👦 Junge", "👨 Mann"], "ru": ["👦 Мальчик", "👨 Мужчина"], "it": ["👦 Ragazzo", "👨 Uomo"], "el": ["👦 Αγόρι", "👨 Άνδρας"], "pt": ["👦 Menino", "👨 Homem"]},
            {"id": 13, "title": "Female Lifecycle", "rel": "➔", "en": ["👧 Girl", "👩 Woman"], "fr": ["👧 Fille", "👩 Femme"], "es": ["👧 Niña", "👩 Mujer"], "de": ["👧 Mädchen", "👩 Frau"], "ru": ["👧 Девочка", "👩 Женщина"], "it": ["👧 Ragazza", "👩 Donna"], "el": ["👧 Κορίτσι", "👩 Γυναίκα"], "pt": ["👧 Menina", "👩 Mulher"]},
            {"id": 14, "title": "Gender Contrast", "rel": "≠", "en": ["👨 Man", "👩 Woman"], "fr": ["👨 Homme", "👩 Femme"], "es": ["👨 Hombre", "👩 Mujer"], "de": ["👨 Mann", "👩 Frau"], "ru": ["👨 Мужчина", "👩 Женщина"], "it": ["👨 Uomo", "👩 Donna"], "el": ["👨 Άνδρας", "👩 Γυναίκα"], "pt": ["👨 Homem", "👩 Mulher"]},
            {"id": 15, "title": "Age Growth", "rel": "➔", "en": ["👶 Baby", "🧒 Child", "🧑 Adult"], "fr": ["👶 Bébé", "🧒 Enfant", "🧑 Adulte"], "es": ["👶 Bebé", "🧒 Niño", "🧑 Adulto"], "de": ["👶 Baby", "🧒 Kind", "🧑 Erwachsener"], "ru": ["👶 Ребенок", "🧒 Дитя", "🧑 Взрослый"], "it": ["👶 Bambino", "🧒 Ragazzo", "🧑 Adulto"], "el": ["👶 Μωρό", "🧒 Παιδί", "🧑 Ενήλικας"], "pt": ["👶 Bebê", "🧒 Criança", "🧑 Adulto"]},
            {"id": 16, "title": "Age Spectrum", "rel": "≠", "en": ["👶 Young", "👵 Old"], "fr": ["👶 Jeune", "👵 Vieux"], "es": ["👶 Joven", "👵 Viejo"], "de": ["👶 Jung", "👵 Alt"], "ru": ["👶 Молодой", "👵 Старый"], "it": ["👶 Giovane", "👵 Vecchio"], "el": ["👶 Νέος", "👵 Γέρος"], "pt": ["👶 Jovem", "👵 Velho"]},
            {"id": 17, "title": "Spouses", "rel": "≠", "en": ["🤵 Husband", "👰 Wife"], "fr": ["🤵 Mari", "👰 Femme"], "es": ["🤵 Esposo", "👰 Esposa"], "de": ["🤵 Ehemann", "👰 Ehefrau"], "ru": ["🤵 Муж", "👰 Жена"], "it": ["🤵 Marito", "👰 Moglie"], "el": ["🤵 Σύζυγος", "👰 Γυναίκα"], "pt": ["🤵 Marido", "👰 Esposa"]},
            {"id": 18, "title": "Siblings", "rel": "≠", "en": ["👦 Brother", "👧 Sister"], "fr": ["👦 Frère", "👧 Sœur"], "es": ["👦 Hermano", "👧 Hermana"], "de": ["👦 Bruder", "👧 Schwester"], "ru": ["👦 Брат", "👧 Сестра"], "it": ["👦 Fratello", "👧 Sorella"], "el": ["👦 Αδελφός", "👧 Αδελφή"], "pt": ["👦 Irmão", "👧 Irmã"]},
            {"id": 19, "title": "Family Tree", "rel": "➔", "en": ["👴 Grandparents", "👨‍👩‍👧 Parents", "🧒 Children"], "fr": ["👴 Grands-parents", "👨‍👩‍👧 Parents", "🧒 Enfants"], "es": ["👴 Abuelos", "👨‍👩‍👧 Padres", "🧒 Hijos"], "de": ["👴 Großeltern", "👨‍👩‍👧 Eltern", "🧒 Kinder"], "ru": ["👴 Дедушка и бабушка", "👨‍👩‍👧 Родители", "🧒 Дети"], "it": ["👴 Nonni", "👨‍👩‍👧 Genitori", "🧒 Figli"], "el": ["👴 Παππούδες", "👨‍👩‍👧 Γονείς", "🧒 Παιδιά"], "pt": ["👴 Avós", "👨‍👩‍👧 Pais", "🧒 Filhos"]},
            {"id": 20, "title": "Social Relations", "rel": "≠", "en": ["🤝 Friend", "👤 Stranger"], "fr": ["🤝 Ami", "👤 Étranger"], "es": ["🤝 Amigo", "👤 Desconocido"], "de": ["🤝 Freund", "👤 Fremder"], "ru": ["🤝 Друг", "👤 Незнакомец"], "it": ["🤝 Amico", "👤 Sconosciuto"], "el": ["🤝 Φίλος", "👤 Ξένος"], "pt": ["🤝 Amigo", "👤 Estranho"]}
        ]
    },
    {
        "num": 3,
        "id": "dom-3",
        "title": "Time, Calendar &amp; Sequence",
        "emoji": "⏰",
        "goal": "Temporal Grounding &amp; Scheduling",
        "desc": "Anchors actions in time, navigation of calendars, frequency expressions, and event sequencing.",
        "milestone": "Can tell relative time, specify days/seasons, set schedules, and sequence events logically.",
        "chains": [
            {"id": 21, "title": "Immediate Timeline", "rel": "➔", "en": ["⏳ Before", "⏱️ Now", "⌛ After"], "fr": ["⏳ Avant", "⏱️ Maintenant", "⌛ Après"], "es": ["⏳ Antes", "⏱️ Ahora", "⌛ Después"], "de": ["⏳ Vorher", "⏱️ Jetzt", "⌛ Nachher"], "ru": ["⏳ До", "⏱️ Сейчас", "⌛ После"], "it": ["⏳ Prima", "⏱️ Ora", "⌛ Dopo"], "el": ["⏳ Πριν", "⏱️ Τώρα", "⌛ Μετά"], "pt": ["⏳ Antes", "⏱️ Agora", "⌛ Depois"]},
            {"id": 22, "title": "Time of Day", "rel": "➔", "en": ["🌅 Morning", "☀️ Afternoon", "🌆 Evening", "🌙 Night"], "fr": ["🌅 Matin", "☀️ Après-midi", "🌆 Soir", "🌙 Nuit"], "es": ["🌅 Mañana", "☀️ Tarde", "🌆 Noche", "🌙 Noche"], "de": ["🌅 Morgen", "☀️ Nachmittag", "🌆 Abend", "🌙 Nacht"], "ru": ["🌅 Утро", "☀️ День", "🌆 Вечер", "🌙 Ночь"], "it": ["🌅 Mattina", "☀️ Pomeriggio", "🌆 Sera", "🌙 Notte"], "el": ["🌅 Πρωί", "☀️ Απόγευμα", "🌆 Βράδυ", "🌙 Νύχτα"], "pt": ["🌅 Manhã", "☀️ Tarde", "🌆 Noite", "🌙 Noite"]},
            {"id": 23, "title": "Relative Days", "rel": "➔", "en": ["⏮️ Yesterday", "🔴 Today", "⏭️ Tomorrow"], "fr": ["⏮️ Hier", "🔴 Aujourd'hui", "⏭️ Demain"], "es": ["⏮️ Ayer", "🔴 Hoy", "⏭️ Mañana"], "de": ["⏮️ Gestern", "🔴 Heute", "⏭️ Morgen"], "ru": ["⏮️ Вчера", "🔴 Сегодня", "⏭️ Завтра"], "it": ["⏮️ Ieri", "🔴 Oggi", "⏭️ Domani"], "el": ["⏮️ Χθες", "🔴 Σήμερα", "⏭️ Αύριο"], "pt": ["⏮️ Ontem", "🔴 Hoje", "⏭️ Amanhã"]},
            {"id": 24, "title": "Duration Units", "rel": "➔", "en": ["⏱️ Minute", "⏰ Hour", "📅 Day"], "fr": ["⏱️ Minute", "⏰ Heure", "📅 Jour"], "es": ["⏱️ Minuto", "⏰ Hora", "📅 Día"], "de": ["⏱️ Minute", "⏰ Stunde", "📅 Tag"], "ru": ["⏱️ Минута", "⏰ Час", "📅 День"], "it": ["⏱️ Minuto", "⏰ Ora", "📅 Giorno"], "el": ["⏱️ Λεπτό", "⏰ Ώρα", "📅 Ημέρα"], "pt": ["⏱️ Minuto", "⏰ Hora", "📅 Dia"]},
            {"id": 25, "title": "Weekly Rhythm", "rel": "➔", "en": ["🗓️ Weekday", "🥳 Weekend"], "fr": ["🗓️ Jour de semaine", "🥳 Week-end"], "es": ["🗓️ Día laborable", "🥳 Fin de semana"], "de": ["🗓️ Werktag", "🥳 Wochenende"], "ru": ["🗓️ Будний день", "🥳 Выходные"], "it": ["🗓️ Feriale", "🥳 Fine settimana"], "el": ["🗓️ Καθημερινή", "🥳 Σαββατοκύριακο"], "pt": ["🗓️ Dia útil", "🥳 Fim de semana"]},
            {"id": 26, "title": "Four Seasons", "rel": "➔", "en": ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"], "fr": ["🌸 Printemps", "☀️ Été", "🍂 Automne", "❄️ Hiver"], "es": ["🌸 Primavera", "☀️ Verano", "🍂 Otoño", "❄️ Invierno"], "de": ["🌸 Frühling", "☀️ Sommer", "🍂 Herbst", "❄️ Winter"], "ru": ["🌸 Весна", "☀️ Лето", "🍂 Осень", "❄️ Зима"], "it": ["🌸 Primavera", "☀️ Estate", "🍂 Autunno", "❄️ Inverno"], "el": ["🌸 Άνοιξη", "☀️ Καλοκαίρι", "🍂 Φθινόπωρο", "❄️ Χειμώνας"], "pt": ["🌸 Primavera", "☀️ Verão", "🍂 Outono", "❄️ Inverno"]},
            {"id": 27, "title": "Time Horizons", "rel": "➔", "en": ["📜 Past", "📍 Present", "🔮 Future"], "fr": ["📜 Passé", "📍 Présent", "🔮 Futur"], "es": ["📜 Pasado", "📍 Presente", "🔮 Futuro"], "de": ["📜 Vergangenheit", "📍 Gegenwart", "🔮 Zukunft"], "ru": ["📜 Прошлое", "📍 Настоящее", "🔮 Будущее"], "it": ["📜 Passato", "📍 Presente", "🔮 Futuro"], "el": ["📜 Παρελθόν", "📍 Παρόν", "🔮 Μέλλον"], "pt": ["📜 Passado", "📍 Presente", "🔮 Futuro"]},
            {"id": 28, "title": "Sequential Order", "rel": "➔", "en": ["1️⃣ First", "2️⃣ Next", "🏁 Last"], "fr": ["1️⃣ Premier", "2️⃣ Ensuite", "🏁 Dernier"], "es": ["1️⃣ Primero", "2️⃣ Luego", "🏁 Último"], "de": ["1️⃣ Erstens", "2️⃣ Als Nächstes", "🏁 Zuletzt"], "ru": ["1️⃣ Сначала", "2️⃣ Затем", "🏁 В конце"], "it": ["1️⃣ Primo", "2️⃣ Poi", "🏁 Ultimo"], "el": ["1️⃣ Πρώτο", "2️⃣ Μετά", "🏁 Τελευταίο"], "pt": ["1️⃣ Primeiro", "2️⃣ Depois", "🏁 Último"]},
            {"id": 29, "title": "Speed Scale", "rel": "➔", "en": ["🐢 Slow", "🚶 Normal", "🚀 Fast"], "fr": ["🐢 Lent", "🚶 Normal", "🚀 Rapide"], "es": ["🐢 Lento", "🚶 Normal", "🚀 Rápido"], "de": ["🐢 Langsam", "🚶 Normal", "🚀 Schnell"], "ru": ["🐢 Медленно", "🚶 Нормально", "🚀 Быстро"], "it": ["🐢 Lento", "🚶 Normale", "🚀 Veloce"], "el": ["🐢 Αργά", "🚶 Κανονικά", "🚀 Γρήγορα"], "pt": ["🐢 Lento", "🚶 Normal", "🚀 Rápido"]},
            {"id": 30, "title": "Frequency Spectrum", "rel": "➔", "en": ["🔄 Always", "🔀 Sometimes", "🚫 Never"], "fr": ["🔄 Toujours", "🔀 Parfois", "🚫 Jamais"], "es": ["🔄 Siempre", "🔀 A veces", "🚫 Nunca"], "de": ["🔄 Immer", "🔀 Manchmal", "🚫 Nie"], "ru": ["🔄 Всегда", "🔀 Иногда", "🚫 Никогда"], "it": ["🔄 Sempre", "🔀 A volte", "🚫 Mai"], "el": ["🔄 Πάντα", "🔀 Κάποτε", "🚫 Ποτέ"], "pt": ["🔄 Sempre", "🔀 Às vezes", "🚫 Nunca"]}
        ]
    },
    {
        "num": 4,
        "id": "dom-4",
        "title": "Daily Routine &amp; Actions",
        "emoji": "🌅",
        "goal": "Life Habits &amp; Physical Controls",
        "desc": "Combines time and identity to describe personal habits, work schedules, and physical operational controls.",
        "milestone": "Can describe a full daily routine from waking to sleeping and manage basic physical action controls.",
        "chains": [
            {"id": 31, "title": "Morning Wakeup", "rel": "➔", "en": ["⏰ Wake up", "🛏️ Get up"], "fr": ["⏰ Se réveiller", "🛏️ Se lever"], "es": ["⏰ Despertarse", "🛏️ Levantarse"], "de": ["⏰ Aufwachen", "🛏️ Aufstehen"], "ru": ["⏰ Просыпаться", "🛏️ Вставать"], "it": ["⏰ Svegliarsi", "🛏️ Alzarsi"], "el": ["⏰ Ξυπνώ", "🛏️ Σηκώνομαι"], "pt": ["⏰ Acordar", "🛏️ Levantar-se"]},
            {"id": 32, "title": "Hygiene", "rel": "➔", "en": ["🧼 Wash", "🪥 Brush teeth"], "fr": ["🧼 Se laver", "🪥 Se brosser les dents"], "es": ["🧼 Lavarse", "🪥 Cepillarse los dientes"], "de": ["🧼 Waschen", "🪥 Zähne putzen"], "ru": ["🧼 Умываться", "🛏️ Чистить зубы"], "it": ["🧼 Lavarsi", "🪥 Lavarsi i denti"], "el": ["🧼 Πλένομαι", "🪥 Βουρτσίζω τα δόντια"], "pt": ["🧼 Lavar-se", "🪥 Escovar os dentes"]},
            {"id": 33, "title": "Clothing Actions", "rel": "≠", "en": ["👔 Put on", "🧥 Take off"], "fr": ["👔 Mettre", "🧥 Enlever"], "es": ["👔 Ponerse", "🧥 Quitarse"], "de": ["👔 Anziehen", "🧥 Ausziehen"], "ru": ["👔 Надевать", "🧥 Снимать"], "it": ["👔 Indossare", "🧥 Togliere"], "el": ["👔 Φορώ", "🧥 Βγάζω"], "pt": ["👔 Vestir", "🧥 Tirar"]},
            {"id": 34, "title": "Workday Rhythm", "rel": "➔", "en": ["💼 Start work", "☕ Break", "🏠 Finish work"], "fr": ["💼 Commencer", "☕ Pause", "🏠 Finir le travail"], "es": ["💼 Empezar", "☕ Descanso", "🏠 Terminar trabajo"], "de": ["💼 Anfangen", "☕ Pause", "🏠 Feierabend"], "ru": ["💼 Начинать", "☕ Перерыв", "🏠 Заканчивать"], "it": ["💼 Iniziare", "☕ Pausa", "🏠 Finire"], "el": ["💼 Αρχίζω", "☕ Διάλειμμα", "🏠 Τελειώνω"], "pt": ["💼 Começar", "☕ Pausa", "🏠 Terminar"]},
            {"id": 35, "title": "Evening Transition", "rel": "➔", "en": ["🏠 Go home", "🛋️ Relax"], "fr": ["🏠 Rentrer", "🛋️ Se détendre"], "es": ["🏠 Ir a casa", "🛋️ Relajarse"], "de": ["🏠 Nach Hause gehen", "🛋️ Entspannen"], "ru": ["🏠 Идти домой", "🛋️ Отдыхать"], "it": ["🏠 Andare a casa", "🛋️ Rilassarsi"], "el": ["🏠 Πάω σπίτι", "🛋️ Χαλαρώνω"], "pt": ["🏠 Ir para casa", "🛋️ Relaxar"]},
            {"id": 36, "title": "Rest Cycle", "rel": "≠", "en": ["😴 Sleep", "⏰ Wake up"], "fr": ["😴 Dormir", "⏰ Se réveiller"], "es": ["😴 Dormir", "⏰ Despertar"], "de": ["😴 Schlafen", "⏰ Aufwachen"], "ru": ["😴 Спать", "⏰ Просыпаться"], "it": ["😴 Dormire", "⏰ Svegliarsi"], "el": ["😴 Κοιμάμαι", "⏰ Ξυπνώ"], "pt": ["😴 Dormir", "⏰ Acordar"]},
            {"id": 37, "title": "Execution Control", "rel": "≠", "en": ["▶️ Start", "⏹️ Stop"], "fr": ["▶️ Commencer", "⏹️ Arrêter"], "es": ["▶️ Empezar", "⏹️ Parar"], "de": ["▶️ Starten", "⏹️ Stoppen"], "ru": ["▶️ Начинать", "⏹️ Останавливать"], "it": ["▶️ Iniziare", "⏹️ Fermare"], "el": ["▶️ Αρχίζω", "⏹️ Σταματώ"], "pt": ["▶️ Começar", "⏹️ Parar"]},
            {"id": 38, "title": "Access Control", "rel": "≠", "en": ["🔓 Open", "🔒 Close"], "fr": ["🔓 Ouvrir", "🔒 Fermer"], "es": ["🔓 Abrir", "🔒 Cerrar"], "de": ["🔓 Öffnen", "🔒 Schließen"], "ru": ["🔓 Открывать", "🔒 Закрывать"], "it": ["🔓 Aprire", "🔒 Chiudere"], "el": ["🔓 Ανοίγω", "🔒 Κλείνω"], "pt": ["🔓 Abrir", "🔒 Fechar"]},
            {"id": 39, "title": "Cleanliness State", "rel": "≠", "en": ["✨ Clean", "🧹 Dirty"], "fr": ["✨ Propre", "🧹 Sale"], "es": ["✨ Limpio", "🧹 Sucio"], "de": ["✨ Sauber", "🧹 Schmutzig"], "ru": ["✨ Чистый", "🧹 Грязный"], "it": ["✨ Pulito", "🧹 Sporco"], "el": ["✨ Καθαρός", "🧹 Βρώμικος"], "pt": ["✨ Limpo", "🧹 Sujo"]},
            {"id": 40, "title": "Moisture State", "rel": "≠", "en": ["🌵 Dry", "💧 Wet"], "fr": ["🌵 Sec", "💧 Mouillé"], "es": ["🌵 Seco", "💧 Mojado"], "de": ["🌵 Trocken", "💧 Nass"], "ru": ["🌵 Сухой", "💧 Мокрый"], "it": ["🌵 Asciutto", "💧 Bagnato"], "el": ["🌵 Στεγνός", "💧 Υγρός"], "pt": ["🌵 Seco", "💧 Molhado"]}
        ]
    },
    {
        "num": 5,
        "id": "dom-5",
        "title": "Home &amp; Living Spaces",
        "emoji": "🏡",
        "goal": "Physical Environment &amp; Living Quarters",
        "desc": "Focuses on immediate surroundings—naming house types, rooms, furniture, and indoor/outdoor boundaries.",
        "milestone": "Can describe domestic spaces, name rooms and furniture, and specify indoor or outdoor locations.",
        "chains": [
            {"id": 41, "title": "Housing Types", "rel": "≠", "en": ["🏠 House", "🏢 Apartment"], "fr": ["🏠 Maison", "🏢 Appartement"], "es": ["🏠 Casa", "🏢 Apartamento"], "de": ["🏠 Haus", "🏢 Wohnung"], "ru": ["🏠 Дом", "🏢 Квартира"], "it": ["🏠 Casa", "🏢 Appartamento"], "el": ["🏠 Σπίτι", "🏢 Διαμέρισμα"], "pt": ["🏠 Casa", "🏢 Apartamento"]},
            {"id": 42, "title": "Home Entry &amp; Rooms", "rel": "➔", "en": ["🚪 Door", "🛋️ Living room", "🛏️ Bedroom"], "fr": ["🚪 Porte", "🛋️ Salon", "🛏️ Chambre"], "es": ["🚪 Puerta", "🛋️ Sala", "🛏️ Dormitorio"], "de": ["🚪 Tür", "🛋️ Wohnzimmer", "🛏️ Schlafzimmer"], "ru": ["🚪 Дверь", "🛋️ Гостиная", "🛏️ Спальня"], "it": ["🚪 Porta", "🛋️ Soggiorno", "🛏️ Camera da letto"], "el": ["🚪 Πόρτα", "🛋️ Σαλόνι", "🛏️ Υπνοδωμάτιο"], "pt": ["🚪 Porta", "🛋️ Sala", "🛏️ Quarto"]},
            {"id": 43, "title": "Dining Quarters", "rel": "➔", "en": ["🍳 Kitchen", "🍽️ Dining room"], "fr": ["🍳 Cuisine", "🍽️ Salle à manger"], "es": ["🍳 Cocina", "🍽️ Comedor"], "de": ["🍳 Küche", "🍽️ Esszimmer"], "ru": ["🍳 Кухня", "🍽️ Столовая"], "it": ["🍳 Cucina", "🍽️ Sala da pranzo"], "el": ["🍳 Κουζίνα", "🍽️ Τραπεζαρία"], "pt": ["🍳 Cozinha", "🍽️ Sala de jantar"]},
            {"id": 44, "title": "Spatial Location", "rel": "≠", "en": ["🛋️ Inside", "🌳 Outside"], "fr": ["🛋️ À l'intérieur", "🌳 À l'extérieur"], "es": ["🛋️ Dentro", "🌳 Fuera"], "de": ["🛋️ Drinnen", "🌳 Draußen"], "ru": ["🛋️ Внутри", "🌳 Снаружи"], "it": ["🛋️ Dentro", "🌳 Fuori"], "el": ["🛋️ Μέσα", "🌳 Έξω"], "pt": ["🛋️ Dentro", "🌳 Fora"]},
            {"id": 45, "title": "Basic Furniture", "rel": "≠", "en": ["🪵 Table", "🪑 Chair"], "fr": ["🪵 Table", "🪑 Chaise"], "es": ["🪵 Mesa", "🪑 Silla"], "de": ["🪵 Tisch", "🪑 Stuhl"], "ru": ["🪵 Стол", "🪑 Стул"], "it": ["🪵 Tavolo", "🪑 Sedia"], "el": ["🪵 Τραπέζι", "🪑 Καρέκλα"], "pt": ["🪵 Mesa", "🪑 Cadeira"]},
            {"id": 46, "title": "Rest Furniture", "rel": "➔", "en": ["🛏️ Bed", "💤 Sleep"], "fr": ["🛏️ Lit", "💤 Dormir"], "es": ["🛏️ Cama", "💤 Dormir"], "de": ["🛏️ Bett", "💤 Schlafen"], "ru": ["🛏️ Кровать", "💤 Спать"], "it": ["🛏️ Letto", "💤 Dormire"], "el": ["🛏️ Κρεβάτι", "💤 Κοιμάμαι"], "pt": ["🛏️ Cama", "💤 Dormir"]},
            {"id": 47, "title": "Security Objects", "rel": "➔", "en": ["🔑 Key", "🔒 Lock"], "fr": ["🔑 Clé", "🔒 Serrure"], "es": ["🔑 Llave", "🔒 Cerradura"], "de": ["🔑 Schlüssel", "🔒 Schloss"], "ru": ["🔑 Ключ", "🔒 Замок"], "it": ["🔑 Chiave", "🔒 Serratura"], "el": ["🔑 Κλειδί", "🔒 Κλειδαριά"], "pt": ["🔑 Chave", "🔒 Fechadura"]},
            {"id": 48, "title": "Apertures", "rel": "≠", "en": ["🪟 Window", "🚪 Door"], "fr": ["🪟 Fenêtre", "🚪 Porte"], "es": ["🪟 Ventana", "🚪 Puerta"], "de": ["🪟 Fenster", "🚪 Tür"], "ru": ["🪟 Окно", "🚪 Дверь"], "it": ["🪟 Finestra", "🚪 Porta"], "el": ["🪟 Παράθυρο", "🚪 Πόρτα"], "pt": ["🪟 Janela", "🚪 Porta"]},
            {"id": 49, "title": "Room Structure", "rel": "≠", "en": ["🧱 Floor", "🏠 Ceiling"], "fr": ["🧱 Sol", "🏠 Plafond"], "es": ["🧱 Suelo", "🏠 Techo"], "de": ["🧱 Boden", "🏠 Decke"], "ru": ["🧱 Пол", "🏠 Потолок"], "it": ["🧱 Pavimento", "🏠 Soffitto"], "el": ["🧱 Πάτωμα", "🏠 Ταβάνι"], "pt": ["🧱 Chão", "🏠 Teto"]},
            {"id": 50, "title": "Illumination", "rel": "≠", "en": ["💡 Light", "🌙 Dark"], "fr": ["💡 Lumière", "🌙 Obscurité"], "es": ["💡 Luz", "🌙 Oscuridad"], "de": ["💡 Licht", "🌙 Dunkel"], "ru": ["💡 Свет", "🌙 Темнота"], "it": ["💡 Luce", "🌙 Buio"], "el": ["💡 Φως", "🌙 Σκότος"], "pt": ["💡 Luz", "🌙 Escuridão"]}
        ]
    },
    {
        "num": 6,
        "id": "dom-6",
        "title": "Food, Drink &amp; Dining",
        "emoji": "🍽️",
        "goal": "Survival Dining &amp; Taste Communication",
        "desc": "Essential survival capability for ordering meals, expressing appetite, describing basic food types, and dining out.",
        "milestone": "Can navigate café and restaurant interactions, order food/drinks, and communicate dining preferences.",
        "chains": [
            {"id": 51, "title": "Appetite Flow", "rel": "➔", "en": ["😋 Hungry", "🍽️ Eat", "🫃 Full"], "fr": ["😋 Faim", "🍽️ Manger", "🫃 Rassasié"], "es": ["😋 Hambre", "🍽️ Comer", "🫃 Lleno"], "de": ["😋 Hungrig", "🍽️ Essen", "🫃 Satt"], "ru": ["😋 Голоден", "🍽️ Есть", "🫃 Сыт"], "it": ["😋 Fame", "🍽️ Mangiare", "🫃 Sazio"], "el": ["😋 Πείνα", "🍽️ Τρώω", "🫃 Χορτάτος"], "pt": ["😋 Fome", "🍽️ Comer", "🫃 Cheio"]},
            {"id": 52, "title": "Daily Meals", "rel": "➔", "en": ["🥣 Breakfast", "🥗 Lunch", "🍲 Dinner"], "fr": ["🥣 Petit-déjeuner", "🥗 Déjeuner", "🍲 Dîner"], "es": ["🥣 Desayuno", "🥗 Almuerzo", "🍲 Cena"], "de": ["🥣 Frühstück", "🥗 Mittagessen", "🍲 Abendessen"], "ru": ["🥣 Завтрак", "🥗 Обед", "🍲 Ужин"], "it": ["🥣 Colazione", "🥗 Pranzo", "🍲 Cena"], "el": ["🥣 Πρωινό", "🥗 Μεσημεριανό", "🍲 Δείπνο"], "pt": ["🥣 Café da manhã", "🥗 Almoço", "🍲 Jantar"]},
            {"id": 53, "title": "Culinary Sequence", "rel": "➔", "en": ["🍳 Cook", "🍽️ Eat", "🧽 Wash dishes"], "fr": ["🍳 Cuisiner", "🍽️ Manger", "🧽 Laver la vaisselle"], "es": ["🍳 Cocinar", "🍽️ Comer", "🧽 Lavar los platos"], "de": ["🍳 Kochen", "🍽️ Essen", "🧽 Geschirr spülen"], "ru": ["🍳 Готовить", "🍽️ Есть", "🧽 Мыть посуду"], "it": ["🍳 Cucinare", "🍽️ Mangiare", "🧽 Lavare i piatti"], "el": ["🍳 Μαγειρεύω", "🍽️ Τρώω", "🧽 Πλένω πιάτα"], "pt": ["🍳 Cozinhar", "🍽️ Comer", "🧽 Lavar a louça"]},
            {"id": 54, "title": "Produce Categories", "rel": "≠", "en": ["🍎 Fruit", "🥦 Vegetable"], "fr": ["🍎 Fruit", "🥦 Légume"], "es": ["🍎 Fruta", "🥦 Verdura"], "de": ["🍎 Obst", "🥦 Gemüse"], "ru": ["🍎 Фрукт", "🥦 Овощ"], "it": ["🍎 Frutta", "🥦 Verdura"], "el": ["🍎 Φρούτο", "🥦 Λαχανικό"], "pt": ["🍎 Fruta", "🥦 Legume"]},
            {"id": 55, "title": "Protein Staples", "rel": "≠", "en": ["🥩 Meat", "🐟 Fish"], "fr": ["🥩 Viande", "🐟 Poisson"], "es": ["🥩 Carne", "🐟 Pescado"], "de": ["🥩 Fleisch", "🐟 Fisch"], "ru": ["🥩 Мясо", "🐟 Рыба"], "it": ["🥩 Carne", "🐟 Pesce"], "el": ["🥩 Κρέας", "🐟 Ψάρι"], "pt": ["🥩 Carne", "🐟 Peixe"]},
            {"id": 56, "title": "Food Temperature", "rel": "≠", "en": ["🔥 Hot", "🧊 Cold"], "fr": ["🔥 Chaud", "🧊 Froid"], "es": ["🔥 Caliente", "🧊 Frío"], "de": ["🔥 Heiß", "🧊 Kalt"], "ru": ["🔥 Горячий", "🧊 Холодный"], "it": ["🔥 Caldo", "🧊 Freddo"], "el": ["🔥 Ζεστό", "🧊 Κρύο"], "pt": ["🔥 Quente", "🧊 Frio"]},
            {"id": 57, "title": "Seasoning Contrast", "rel": "≠", "en": ["🧂 Salt", "🍬 Sugar"], "fr": ["🧂 Sel", "🍬 Sucre"], "es": ["🧂 Sal", "🍬 Azúcar"], "de": ["🧂 Salz", "🍬 Zucker"], "ru": ["🧂 Соль", "🍬 Сахар"], "it": ["🧂 Sale", "🍬 Zucchero"], "el": ["🧂 Αλάτι", "🍬 Ζάχαρη"], "pt": ["🧂 Sal", "🍬 Açúcar"]},
            {"id": 58, "title": "Flavor Spectrum", "rel": "≠", "en": ["🍰 Sweet", "🍋 Sour"], "fr": ["🍰 Sucré", "🍋 Acide"], "es": ["🍰 Dulce", "🍋 Agrio"], "de": ["🍰 Süß", "🍋 Sauer"], "ru": ["🍰 Сладкий", "🍋 Кислый"], "it": ["🍰 Dolce", "🍋 Aspro"], "el": ["🍰 Γλυκό", "🍋 Ξινό"], "pt": ["🍰 Doce", "🍋 Azedo"]},
            {"id": 59, "title": "Hot Beverages", "rel": "≠", "en": ["☕ Coffee", "🍵 Tea"], "fr": ["☕ Café", "🍵 Thé"], "es": ["☕ Café", "🍵 Té"], "de": ["☕ Kaffee", "🍵 Tee"], "ru": ["☕ Кофе", "🍵 Чай"], "it": ["☕ Caffè", "🍵 Tè"], "el": ["☕ Καφές", "🍵 Τσάι"], "pt": ["☕ Café", "🍵 Chá"]},
            {"id": 60, "title": "Dining Drinks", "rel": "≠", "en": ["🍷 Wine", "🍺 Beer"], "fr": ["🍷 Vin", "🍺 Bière"], "es": ["🍷 Vino", "🍺 Cerveza"], "de": ["🍷 Wein", "🍺 Bier"], "ru": ["🍷 Вино", "🍺 Пиво"], "it": ["🍷 Vino", "🍺 Birra"], "el": ["🍷 Κρασί", "🍺 Μπίρα"], "pt": ["🍷 Vinho", "🍺 Cerveja"]}
        ]
    },
    {
        "num": 7,
        "id": "dom-7",
        "title": "Shopping &amp; Money",
        "emoji": "🛒",
        "goal": "Commercial Autonomy &amp; Payments",
        "desc": "Unlocks economic independence—inquiring about prices, choosing goods, understanding discounts, and paying.",
        "milestone": "Can shop independently, ask for costs, choose between payment methods (card/cash), and handle exchanges.",
        "chains": [
            {"id": 61, "title": "Shopping Intent", "rel": "➔", "en": ["💭 Need", "🔍 Choose", "🛒 Buy"], "fr": ["💭 Avoir besoin", "🔍 Choisir", "🛒 Acheter"], "es": ["💭 Necesitar", "🔍 Elegir", "🛒 Comprar"], "de": ["💭 Brauchen", "🔍 Wählen", "🛒 Kaufen"], "ru": ["💭 Нуждаться", "🔍 Выбирать", "🛒 Покупать"], "it": ["💭 Aver bisogno", "🔍 Scegliere", "🛒 Comprare"], "el": ["💭 Χρειάζομαι", "🔍 Επιλέγω", "🛒 Αγοράζω"], "pt": ["💭 Precisar", "🔍 Escolher", "🛒 Comprar"]},
            {"id": 62, "title": "Store Venue Types", "rel": "➔", "en": ["🛒 Supermarket", "🥦 Market"], "fr": ["🛒 Supermarché", "🥦 Marché"], "es": ["🛒 Supermercado", "🥦 Mercado"], "de": ["🛒 Supermarkt", "🥦 Markt"], "ru": ["🛒 Супермаркет", "🥦 Рынок"], "it": ["🛒 Supermercato", "🥦 Mercato"], "el": ["🛒 Σούπερ μάρκετ", "🥦 Αγορά"], "pt": ["🛒 Supermercado", "🥦 Mercado"]},
            {"id": 63, "title": "Store Status", "rel": "≠", "en": ["🚪 Open", "🔒 Closed"], "fr": ["🚪 Ouvert", "🔒 Fermé"], "es": ["🚪 Abierto", "🔒 Cerrado"], "de": ["🚪 Offen", "🔒 Geschlossen"], "ru": ["🚪 Открыто", "🔒 Закрыто"], "it": ["🚪 Aperto", "🔒 Chiuso"], "el": ["🚪 Ανοιχτά", "🔒 Κλειστά"], "pt": ["🚪 Aberto", "🔒 Fechado"]},
            {"id": 64, "title": "Store Roles", "rel": "≠", "en": ["👤 Customer", "🧑‍💼 Cashier"], "fr": ["👤 Client", "🧑‍💼 Caissier"], "es": ["👤 Cliente", "🧑‍💼 Cajero"], "de": ["👤 Kunde", "🧑‍💼 Kassierer"], "ru": ["👤 Покупатель", "🧑‍💼 Кассир"], "it": ["👤 Cliente", "🧑‍💼 Cassiere"], "el": ["👤 Πελάτης", "🧑‍💼 Ταμίας"], "pt": ["👤 Cliente", "🧑‍💼 Caixa"]},
            {"id": 65, "title": "Price &amp; Sale", "rel": "≠", "en": ["🏷️ Price", "🏷️ Discount"], "fr": ["🏷️ Prix", "🏷️ Réduction"], "es": ["🏷️ Precio", "🏷️ Descuento"], "de": ["🏷️ Preis", "🏷️ Rabatt"], "ru": ["🏷️ Цена", "🏷️ Скидка"], "it": ["🏷️ Prezzo", "🏷️ Sconto"], "el": ["🏷️ Τιμή", "🏷️ Έκπτωση"], "pt": ["🏷️ Preço", "🏷️ Desconto"]},
            {"id": 66, "title": "Price Scale", "rel": "≠", "en": ["💸 Cheap", "💎 Expensive"], "fr": ["💸 Pas cher", "💎 Cher"], "es": ["💸 Barato", "💎 Caro"], "de": ["💸 Billig", "💎 Teuer"], "ru": ["💸 Дешевый", "💎 Дорогой"], "it": ["💸 Economico", "💎 Caro"], "el": ["💸 Φτηνός", "💎 Ακριβός"], "pt": ["💸 Barato", "💎 Caro"]},
            {"id": 67, "title": "Package Sizing", "rel": "≠", "en": ["🤏 Small", "🐘 Large"], "fr": ["🤏 Petit", "🐘 Grand"], "es": ["🤏 Pequeño", "🐘 Grande"], "de": ["🤏 Klein", "🐘 Groß"], "ru": ["🤏 Маленький", "🐘 Большой"], "it": ["🤏 Piccolo", "🐘 Grande"], "el": ["🤏 Μικρός", "🐘 Μεγάλος"], "pt": ["🤏 Pequeno", "🐘 Grande"]},
            {"id": 68, "title": "Payment Options", "rel": "≠", "en": ["💳 Card", "💵 Cash"], "fr": ["💳 Carte", "💵 Espèces"], "es": ["💳 Tarjeta", "💵 Efectivo"], "de": ["💳 Karte", "💵 Bargeld"], "ru": ["💳 Карта", "💵 Наличные"], "it": ["💳 Carta", "💵 Contanti"], "el": ["💳 Κάρτα", "💵 Μετρητά"], "pt": ["💳 Cartão", "💵 Dinheiro"]},
            {"id": 69, "title": "Checkout Flow", "rel": "➔", "en": ["🛍️ Buy", "🧾 Pay", "🛍️ Take home"], "fr": ["🛍️ Acheter", "🧾 Payer", "🛍️ Emporter"], "es": ["🛍️ Comprar", "🧾 Pagar", "🛍️ Llevar a casa"], "de": ["🛍️ Kaufen", "🧾 Bezahlen", "🛍️ Mitnehmen"], "ru": ["🛍️ Покупать", "🧾 Платить", "🛍️ Уносить"], "it": ["🛍️ Comprare", "🧾 Pagare", "🛍️ Portare a casa"], "el": ["🛍️ Αγοράζω", "🧾 Πληρώνω", "🛍️ Παίρνω"], "pt": ["🛍️ Comprar", "🧾 Pagar", "🛍️ Levar para casa"]},
            {"id": 70, "title": "Money Management", "rel": "➔", "en": ["💰 Earn", "🏦 Save", "🛍️ Spend"], "fr": ["💰 Gagner", "🏦 Économiser", "🛍️ Dépenser"], "es": ["💰 Ganar", "🏦 Ahorrar", "🛍️ Gastar"], "de": ["💰 Verdienen", "🏦 Sparen", "🛍️ Ausgeben"], "ru": ["💰 Зарабатывать", "🏦 Копить", "🛍️ Тратить"], "it": ["💰 Guadagnare", "🏦 Risparmiare", "🛍️ Spendere"], "el": ["💰 Κερδίζω", "🏦 Αποταμιεύω", "🛍️ Ξοδεύω"], "pt": ["💰 Ganhar", "🏦 Economizar", "🛍️ Gastar"]}
        ]
    },
    {
        "num": 8,
        "id": "dom-8",
        "title": "Travel &amp; City Navigation",
        "emoji": "🗺️",
        "goal": "Mobility &amp; Spatial Exploration",
        "desc": "Expands independence beyond home and shop to urban transit, directions, transit tickets, and accommodations.",
        "milestone": "Can navigate urban spaces, ask for and follow directions, buy transit tickets, and check into lodging.",
        "chains": [
            {"id": 71, "title": "Relative Position", "rel": "≠", "en": ["📍 Here", "🫵 There"], "fr": ["📍 Ici", "🫵 Là"], "es": ["📍 Aquí", "🫵 Allí"], "de": ["📍 Hier", "🫵 Dort"], "ru": ["📍 Здесь", "🫵 Там"], "it": ["📍 Qui", "🫵 Lì"], "el": ["📍 Εδώ", "🫵 Εκεί"], "pt": ["📍 Aqui", "🫵 Lá"]},
            {"id": 72, "title": "Distance Scale", "rel": "≠", "en": ["📏 Near", "🔭 Far"], "fr": ["📏 Près", "🔭 Loin"], "es": ["📏 Cerca", "🔭 Lejos"], "de": ["📏 Nah", "🔭 Weit"], "ru": ["📏 Близко", "🔭 Далеко"], "it": ["📏 Vicino", "🔭 Lontano"], "el": ["📏 Κοντά", "🔭 Μακριά"], "pt": ["📏 Perto", "🔭 Longe"]},
            {"id": 73, "title": "Direction Vectors", "rel": "➔", "en": ["⬅️ Left", "⬆️ Straight", "➡️ Right"], "fr": ["⬅️ Gauche", "⬆️ Tout droit", "➡️ Droite"], "es": ["⬅️ Izquierda", "⬆️ Recto", "➡️ Derecha"], "de": ["⬅️ Links", "⬆️ Geradeaus", "➡️ Rechts"], "ru": ["⬅️ Налево", "⬆️ Прямо", "➡️ Направо"], "it": ["⬅️ Sinistra", "⬆️ Dritto", "➡️ Destra"], "el": ["⬅️ Αριστερά", "⬆️ Ευθεία", "➡️ Δεξιά"], "pt": ["⬅️ Esquerda", "⬆️ Em frente", "➡️ Direita"]},
            {"id": 74, "title": "Map Search", "rel": "➔", "en": ["🗺️ Map", "📍 Location"], "fr": ["🗺️ Carte", "📍 Emplacement"], "es": ["🗺️ Mapa", "📍 Ubicación"], "de": ["🗺️ Karte", "📍 Ort"], "ru": ["🗺️ Карта", "📍 Локация"], "it": ["🗺️ Mappa", "📍 Posizione"], "el": ["🗺️ Χάρτης", "📍 Τοποθεσία"], "pt": ["🗺️ Mapa", "📍 Localização"]},
            {"id": 75, "title": "Transit Hierarchy", "rel": "➔", "en": ["🚌 Bus", "🚆 Train", "✈️ Plane"], "fr": ["🚌 Bus", "🚆 Train", "✈️ Avion"], "es": ["🚌 Autobús", "🚆 Tren", "✈️ Avión"], "de": ["🚌 Bus", "🚆 Zug", "✈️ Flugzeug"], "ru": ["🚌 Автобус", "🚆 Поезд", "✈️ Самолет"], "it": ["🚌 Autobus", "🚆 Treno", "✈️ Aereo"], "el": ["🚌 Λεωφορείο", "🚆 Τρένο", "✈️ Αεροπλάνο"], "pt": ["🚌 Ônibus", "🚆 Trem", "✈️ Avião"]},
            {"id": 76, "title": "Transit Boarding", "rel": "➔", "en": ["🚉 Station", "🚉 Platform"], "fr": ["🚉 Gare", "🚉 Quai"], "es": ["🚉 Estación", "🚉 Andén"], "de": ["🚉 Bahnhof", "🚉 Bahnsteig"], "ru": ["🚉 Станция", "🚉 Платформа"], "it": ["🚉 Stazione", "🚉 Binario"], "el": ["🚉 Σταθμός", "🚉 Αποβάθρα"], "pt": ["🚉 Estação", "🚉 Plataforma"]},
            {"id": 77, "title": "Travel Ticket", "rel": "➔", "en": ["🎟️ Ticket", "🧳 Journey"], "fr": ["🎟️ Billet", "🧳 Voyage"], "es": ["🎟️ Billete", "🧳 Viaje"], "de": ["🎟️ Fahrkarte", "🧳 Reise"], "ru": ["🎟️ Билет", "🧳 Путешествие"], "it": ["🎟️ Biglietto", "🧳 Viaggio"], "el": ["🎟️ Εισιτήριο", "🧳 Ταξίδι"], "pt": ["🎟️ Bilhete", "🧳 Viagem"]},
            {"id": 78, "title": "Trip Movement", "rel": "≠", "en": ["🛬 Arrive", "🛫 Leave"], "fr": ["🛬 Arriver", "🛫 Partir"], "es": ["🛬 Llegar", "🛫 Salir"], "de": ["🛬 Ankommen", "🛫 Abfahren"], "ru": ["🛬 Прибывать", "🛫 Уезжать"], "it": ["🛬 Arrivare", "🛫 Partire"], "el": ["🛬 Φτάνω", "🛫 Φεύγω"], "pt": ["🛬 Chegar", "🛫 Partir"]},
            {"id": 79, "title": "Settlement Scale", "rel": "≠", "en": ["🏙️ City", "🏡 Village"], "fr": ["🏙️ Ville", "🏡 Village"], "es": ["🏙️ Ciudad", "🏡 Pueblo"], "de": ["🏙️ Stadt", "🏡 Dorf"], "ru": ["🏙️ Город", "🏡 Деревня"], "it": ["🏙️ Città", "🏡 Villaggio"], "el": ["🏙️ Πόλη", "🏡 Χωριό"], "pt": ["🏙️ Cidade", "🏡 Vila"]},
            {"id": 80, "title": "Accommodation", "rel": "≠", "en": ["🏨 Hotel", "🛏️ Hostel"], "fr": ["🏨 Hôtel", "🛏️ Auberge"], "es": ["🏨 Hotel", "🛏️ Hostal"], "de": ["🏨 Hotel", "🛏️ Herberge"], "ru": ["🏨 Отель", "🛏️ Хостел"], "it": ["🏨 Hotel", "🛏️ Ostello"], "el": ["🏨 Ξενοδοχείο", "🛏️ Ξενώνας"], "pt": ["🏨 Hotel", "🛏️ Albergue"]}
        ]
    },
    {
        "num": 9,
        "id": "dom-9",
        "title": "Health &amp; Body",
        "emoji": "🩺",
        "goal": "Physical Well-Being &amp; Medical Care",
        "desc": "Critical safety net capability—identifying body parts, indicating symptoms, visiting doctors, and getting medicine.",
        "milestone": "Can explain health symptoms, point out body parts, visit pharmacies or doctors, and follow basic care steps.",
        "chains": [
            {"id": 81, "title": "Facial Anatomy", "rel": "➔", "en": ["👤 Face", "👁️ Eyes", "👃 Nose", "👄 Mouth"], "fr": ["👤 Visage", "👁️ Yeux", "👃 Nez", "👄 Bouche"], "es": ["👤 Cara", "👁️ Ojos", "👃 Nariz", "👄 Boca"], "de": ["👤 Gesicht", "👁️ Augen", "👃 Nase", "👄 Mund"], "ru": ["👤 Лицо", "👁️ Глаза", "👃 Нос", "👄 Рот"], "it": ["👤 Viso", "👁️ Occhi", "👃 Naso", "👄 Bocca"], "el": ["👤 Πρόσωπο", "👁️ Μάτια", "👃 Μύτη", "👄 Στόμα"], "pt": ["👤 Rosto", "👁️ Olhos", "👃 Nariz", "👄 Boca"]},
            {"id": 82, "title": "Upper Extremities", "rel": "➔", "en": ["🖐️ Hand", "🖐️ Fingers"], "fr": ["🖐️ Main", "🖐️ Doigts"], "es": ["🖐️ Mano", "🖐️ Dedos"], "de": ["🖐️ Hand", "🖐️ Finger"], "ru": ["🖐️ Рука", "🖐️ Пальцы"], "it": ["🖐️ Mano", "🖐️ Dita"], "el": ["🖐️ Χέρι", "🖐️ Δάχτυλα"], "pt": ["🖐️ Mão", "🖐️ Dedos"]},
            {"id": 83, "title": "Lower Extremities", "rel": "➔", "en": ["🦶 Foot", "🦶 Toes"], "fr": ["🦶 Pied", "🦶 Orteils"], "es": ["🦶 Pie", "🦶 Dedos del pie"], "de": ["🦶 Fuß", "🦶 Zehen"], "ru": ["🦶 Нога", "🦶 Пальцы ног"], "it": ["🦶 Piede", "🦶 Dita del piede"], "el": ["🦶 Πόδι", "🦶 Δάχτυλα ποδιού"], "pt": ["🦶 Pé", "🦶 Dedos do pé"]},
            {"id": 84, "title": "Limbs Contrast", "rel": "≠", "en": ["🦾 Arm", "🦵 Leg"], "fr": ["🦾 Bras", "🦵 Jambe"], "es": ["🦾 Brazo", "🦵 Pierna"], "de": ["🦾 Arm", "🦵 Bein"], "ru": ["🦾 Рука", "🦵 Нога"], "it": ["🦾 Braccio", "🦵 Gamba"], "el": ["🦾 Βραχίονας", "🦵 Πόδι"], "pt": ["🦾 Braço", "🦵 Perna"]},
            {"id": 85, "title": "Health Condition", "rel": "≠", "en": ["🏃 Healthy", "🤒 Sick"], "fr": ["🏃 En bonne santé", "🤒 Malade"], "es": ["🏃 Sano", "🤒 Enfermo"], "de": ["🏃 Gesundheit", "🤒 Krank"], "ru": ["🏃 Здоровый", "🤒 Больной"], "it": ["🏃 Sano", "🤒 Malato"], "el": ["🏃 Υγιής", "🤒 Άρρωστος"], "pt": ["🏃 Saudável", "🤒 Doente"]},
            {"id": 86, "title": "Symptom &amp; Relief", "rel": "➔", "en": ["🩺 Pain", "💊 Medicine"], "fr": ["🩺 Douleur", "💊 Médicament"], "es": ["🩺 Dolor", "💊 Medicina"], "de": ["🩺 Schmerz", "💊 Medizin"], "ru": ["🩺 Боль", "💊 Лекарство"], "it": ["🩺 Dolore", "💊 Medicina"], "el": ["🩺 Πόνος", "💊 Фάρμακο"], "pt": ["🩺 Dor", "💊 Remédio"]},
            {"id": 87, "title": "Recovery Cycle", "rel": "➔", "en": ["🌡️ Fever", "🛌 Rest", "🔋 Recover"], "fr": ["🌡️ Fièvre", "🛌 Repos", "🔋 Guérir"], "es": ["🌡️ Fiebre", "🛌 Descanso", "🔋 Recuperarse"], "de": ["🌡️ Fieber", "🛌 Ruhe", "🔋 Erholen"], "ru": ["🌡️ Лихорадка", "🛌 Отдых", "🔋 Выздоравливать"], "it": ["🌡️ Febbre", "🛌 Riposo", "🔋 Guarire"], "el": ["🌡️ Πυρετός", "🛌 Ξεκούραση", "🔋 Ανάρρωση"], "pt": ["🌡️ Febre", "🛌 Descanso", "🔋 Recuperar"]},
            {"id": 88, "title": "Medical Facility", "rel": "➔", "en": ["👨‍⚕️ Doctor", "🏥 Hospital", "💊 Pharmacy"], "fr": ["👨‍⚕️ Médecin", "🏥 Hôpital", "💊 Pharmacie"], "es": ["👨‍⚕️ Médico", "🏥 Hospital", "💊 Farmacia"], "de": ["👨‍⚕️ Arzt", "🏥 Krankenhaus", "💊 Apotheke"], "ru": ["👨‍⚕️ Врач", "🏥 Больница", "💊 Аптека"], "it": ["👨‍⚕️ Dottore", "🏥 Ospedale", "💊 Farmacia"], "el": ["👨‍⚕️ Γιατρός", "🏥 Νοσοκομείο", "💊 Φαρμακείο"], "pt": ["👨‍⚕️ Médico", "🏥 Hospital", "💊 Farmácia"]},
            {"id": 89, "title": "Care Journey", "rel": "➔", "en": ["🤒 Sick", "👨‍⚕️ Doctor", "💊 Medicine"], "fr": ["🤒 Malade", "👨‍⚕️ Médecin", "💊 Médicament"], "es": ["🤒 Enfermo", "👨‍⚕️ Médico", "💊 Medicina"], "de": ["🤒 Krank", "👨‍⚕️ Arzt", "💊 Medizin"], "ru": ["🤒 Заболеть", "👨‍⚕️ Врач", "💊 Лекарство"], "it": ["🤒 Malato", "👨‍⚕️ Dottore", "💊 Medicina"], "el": ["🤒 Άρρωστος", "👨‍⚕️ Γιατρός", "💊 Φάρμακο"], "pt": ["🤒 Doente", "👨‍⚕️ Médico", "💊 Remédio"]},
            {"id": 90, "title": "Hygiene Routine", "rel": "➔", "en": ["🧼 Wash hands", "🧻 Dry hands"], "fr": ["🧼 Se laver les mains", "🧻 Se sécher les mains"], "es": ["🧼 Lavarse las manos", "🧻 Secarse las manos"], "de": ["🧼 Hände waschen", "🧻 Hände trocknen"], "ru": ["🧼 Мыть руки", "🧻 Вытирать руки"], "it": ["🧼 Lavarsi le mani", "🧻 Asciugarsi le mani"], "el": ["🧼 Πλένω χέρια", "🧻 Στεγνώνω χέρια"], "pt": ["🧼 Lavar as mãos", "🧻 Secar as mãos"]}
        ]
    },
    {
        "num": 10,
        "id": "dom-10",
        "title": "Feelings, Qualities &amp; Opposites",
        "emoji": "🌟",
        "goal": "Descriptive Mastery &amp; Emotional Nuance",
        "desc": "Capstone domain—providing emotional depth, qualitative evaluations, intensity contrasts, and complete A0 fluency.",
        "milestone": "Possesses a complete 100-chain foundational vocabulary map across 10 progressive real-life domains!",
        "chains": [
            {"id": 91, "title": "Primary Emotions", "rel": "≠", "en": ["😄 Happy", "😢 Sad"], "fr": ["😄 Heureux", "😢 Triste"], "es": ["😄 Feliz", "😢 Triste"], "de": ["😄 Glücklich", "😢 Traurig"], "ru": ["😄 Счастливый", "😢 Грустный"], "it": ["😄 Felice", "😢 Triste"], "el": ["😄 Ευτυχισμένος", "😢 Λυπημένος"], "pt": ["😄 Feliz", "😢 Triste"]},
            {"id": 92, "title": "Emotional Intensity", "rel": "≠", "en": ["🧘 Calm", "😡 Angry"], "fr": ["🧘 Calme", "😡 En colère"], "es": ["🧘 Calmo", "😡 Enojado"], "de": ["🧘 Ruhig", "😡 Wütend"], "ru": ["🧘 Спокойный", "😡 Злой"], "it": ["🧘 Calmo", "😡 Arrabbiato"], "el": ["🧘 Ήρεμος", "😡 Θυμωμένος"], "pt": ["🧘 Calmo", "😡 Zangado"]},
            {"id": 93, "title": "Consciousness State", "rel": "≠", "en": ["😴 Awake", "💤 Asleep"], "fr": ["😴 Éveillé", "💤 Endormi"], "es": ["😴 Despierto", "💤 Dormido"], "de": ["😴 Wach", "💤 Schlafend"], "ru": ["😴 Бодрствующий", "💤 Спящий"], "it": ["😴 Sveglio", "💤 Addormentato"], "el": ["😴 Ξύπνιος", "💤 Κοιμισμένος"], "pt": ["😴 Acordado", "💤 Aboardado"]},
            {"id": 94, "title": "Basic Evaluation", "rel": "≠", "en": ["👍 Good", "👎 Bad"], "fr": ["👍 Bon", "👎 Mauvais"], "es": ["👍 Bueno", "👎 Malo"], "de": ["👍 Gut", "👎 Schlecht"], "ru": ["👍 Хороший", "👎 Плохой"], "it": ["👍 Buono", "👎 Cattivo"], "el": ["👍 Καλός", "👎 Κακός"], "pt": ["👍 Bom", "👎 Mau"]},
            {"id": 95, "title": "Task Complexity", "rel": "≠", "en": ["🟢 Easy", "🔴 Difficult"], "fr": ["🟢 Facile", "🔴 Difficile"], "es": ["🟢 Fácil", "🔴 Difícil"], "de": ["🟢 Einfach", "🔴 Schwer"], "ru": ["🟢 Легкий", "🔴 Трудный"], "it": ["🟢 Facile", "🔴 Difficile"], "el": ["🟢 Εύκολος", "🔴 Δύσκολος"], "pt": ["🟢 Fácil", "🔴 Difícil"]},
            {"id": 96, "title": "Size Scale", "rel": "≠", "en": ["🐘 Big", "🐁 Small"], "fr": ["🐘 Grand", "🐁 Petit"], "es": ["🐘 Grande", "🐁 Pequeño"], "de": ["🐘 Groß", "🐁 Klein"], "ru": ["🐘 Большой", "🐁 Маленький"], "it": ["🐘 Grande", "🐁 Piccolo"], "el": ["🐘 Μεγάλος", "🐁 Μικρός"], "pt": ["🐘 Grande", "🐁 Pequeno"]},
            {"id": 97, "title": "Stature Scale", "rel": "≠", "en": ["📏 Short", "🦒 Tall"], "fr": ["📏 Court", "🦒 Grand"], "es": ["📏 Bajo", "🦒 Alto"], "de": ["📏 Klein", "🦒 Groß"], "ru": ["📏 Низкий", "🦒 Высокий"], "it": ["📏 Basso", "🦒 Alto"], "el": ["📏 Κοντός", "🦒 Ψηλός"], "pt": ["📏 Baixo", "🦒 Alto"]},
            {"id": 98, "title": "Capacity State", "rel": "≠", "en": ["📦 Full", "📭 Empty"], "fr": ["📦 Plein", "📭 Vide"], "es": ["📦 Lleno", "📭 Vacío"], "de": ["📦 Voll", "📭 Leer"], "ru": ["📦 Полный", "📭 Пустой"], "it": ["📦 Pieno", "📭 Vuoto"], "el": ["📦 Γεμάτος", "📭 Άδειος"], "pt": ["📦 Cheio", "📭 Vazio"]},
            {"id": 99, "title": "Safety State", "rel": "≠", "en": ["🔒 Safe", "⚠️ Dangerous"], "fr": ["🔒 Sûr", "⚠️ Dangereux"], "es": ["🔒 Seguro", "⚠️ Peligroso"], "de": ["🔒 Sicher", "⚠️ Gefährlich"], "ru": ["🔒 Безопасный", "⚠️ Опасный"], "it": ["🔒 Sicuro", "⚠️ Pericoloso"], "el": ["🔒 Ασφαλής", "⚠️ Επικίνδυνος"], "pt": ["🔒 Seguro", "⚠️ Perigoso"]},
            {"id": 100, "title": "A0 Mastery Capstone", "rel": "➔", "en": ["💯 100 Words", "🎯 A0 Mastery!"], "fr": ["💯 100 Mots", "🎯 Maîtrise A0!"], "es": ["💯 100 Palabras", "🎯 Dominio A0!"], "de": ["💯 100 Wörter", "🎯 A0 Meisterschaft!"], "ru": ["💯 100 Слов", "🎯 Владение A0!"], "it": ["💯 100 Parole", "🎯 Padronanza A0!"], "el": ["💯 100 Λέξεις", "🎯 Κατάκτηση A0!"], "pt": ["💯 100 Palavras", "🎯 Domínio A0!"]}
        ]
    }
]

LANGUAGES = [
    {"code": "en", "flag": "🇬🇧", "name": "English"},
    {"code": "fr", "flag": "🇫🇷", "name": "French"},
    {"code": "it", "flag": "🇮🇹", "name": "Italian"},
    {"code": "es", "flag": "🇪🇸", "name": "Spanish"},
    {"code": "pt", "flag": "🇵🇹", "name": "Portuguese"},
    {"code": "de", "flag": "🇩🇪", "name": "German"},
    {"code": "el", "flag": "🇬🇷", "name": "Greek"},
    {"code": "ru", "flag": "🇷🇺", "name": "Russian"}
]

def render_html():
    html = []
    html.append('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 100 A0–A1 Semantic Master List (100 Chains) — COSY Blog</title>
    <meta name="description" content="The complete 100-chain A0-A1 beginner vocabulary tree across 10 progressive real-life domains with milestone goals and multi-language support.">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="#FAF7F2">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&amp;family=DM+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/blog.css">
    <style>
        .domain-section { margin-bottom: 3.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-color, #e5e7eb); }
        .domain-head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
        .domain-num { font-family: var(--font-heading, 'Fraunces', serif); font-size: 2.2rem; font-weight: 700; color: var(--teal, #0d9488); line-height: 1; }
        .domain-goal { font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--teal, #0d9488); margin-bottom: 0.25rem; }
        .domain-desc { font-size: 1rem; color: var(--text-muted, #4b5563); line-height: 1.5; margin-bottom: 1.5rem; }
        .milestone-box { background: linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0.02) 100%); border-left: 4px solid var(--teal, #0d9488); padding: 1.25rem 1.5rem; border-radius: 0 12px 12px 0; margin-top: 1.75rem; }
        .milestone-title { font-weight: 700; color: var(--teal, #0d9488); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem; }
        .chains-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .chain-card { background: var(--bg-card, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1rem 1.25rem; transition: transform 0.2s, box-shadow 0.2s; }
        .chain-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .chain-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; font-size: 0.85rem; font-weight: 700; color: var(--text-muted, #64748b); }
        .chain-badge { background: var(--bg-subtle, #f1f5f9); padding: 0.15rem 0.5rem; border-radius: 6px; font-size: 0.75rem; }
        .chain-body { font-size: 1.05rem; font-weight: 600; color: var(--text-main, #0f172a); display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem; }
        .chain-rel { font-weight: 700; padding: 0 0.2rem; }
        .rel-seq { color: var(--teal, #0d9488); }
        .rel-opp { color: #e11d48; }

        /* Language Filter Bar */
        .lang-toolbar { background: var(--bg-subtle, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 2rem; }
        .lang-toolbar-title { font-size: 0.9rem; font-weight: 700; color: var(--text-muted, #64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; }
        .lang-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .lang-pill { background: #ffffff; border: 1px solid var(--border-color, #cbd5e1); border-radius: 20px; padding: 0.35rem 0.85rem; font-size: 0.85rem; font-weight: 600; color: var(--text-main, #334155); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 0.35rem; }
        .lang-pill:hover, .lang-pill.active { background: var(--teal, #0d9488); color: #ffffff; border-color: var(--teal, #0d9488); }
        .lang-words-span { display: none; }
        .lang-words-span.active { display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem; }
    </style>
</head>
<body class="blog-page">
    <div class="reading-progress-bar" id="readingProgress"></div>

    <nav id="cosy-nav"></nav>

    <div class="blog-wrapper">
        <header class="post-header-simple">
            <div class="post-breadcrumb">
                <a href="index.html">← Back to Blog &amp; Editorial Hub</a>
            </div>
            <h1>🌍 Top 100 A0–A1 Semantic Master List (100 Progressive Knowledge Chains)</h1>
            <div class="post-header-meta-row">
                <span class="post-author-avatar">C</span>
                <span>Written by <strong>COSY Editorial Team</strong></span>
                <span>·</span>
                <span>📅 Updated September 2026</span>
                <span>·</span>
                <span>⏱️ 12 min read</span>
                <span>·</span>
                <span>💬 Multi-Language Switcher</span>
            </div>
            <p class="post-header-intro">
                Organized by real-world human experience rather than random alphabetical lists, this master guide provides <strong>100 progressive semantic chains</strong> across <strong>10 core life domains</strong> for absolute A0–A1 beginners. Each domain builds directly on the last to expand student communicative capability, ending in a concrete <strong>Can-Do Milestone Goal</strong> linked live to <strong>COSYdata</strong> across all target languages.
            </p>
            <div class="blog-header-meta" style="margin-top:1rem;">
                <a href="https://github.com/cosylanguages/COSYdata" target="_blank" rel="noopener" class="blog-meta-chip" style="text-decoration:none;">📁 COSYdata source repo</a>
                <a href="top-10-verbs.html" class="blog-meta-chip" style="text-decoration:none;">🎯 Top 10 Verbs Guide</a>
                <a href="#dom-1" class="blog-meta-chip" style="text-decoration:none;">💬 Start Domain 1</a>
            </div>
        </header>

        <!-- Interactive Language Selector Toolbar -->
        <div class="lang-toolbar">
            <div class="lang-toolbar-title">
                <span>🌐 Target Language Selector</span>
                <span id="activeLangLabel" style="color:var(--teal,#0d9488);">Target Language: 🇬🇧 English</span>
            </div>
            <div class="lang-pills">''')

    for lang in LANGUAGES:
        active_cls = "active" if lang['code'] == "en" else ""
        html.append(f'''
                <button type="button" class="lang-pill {active_cls}" data-lang="{lang['code']}" onclick="filterMasterLang('{lang['code']}', '{lang['flag']} {lang['name']}')">
                    <span>{lang['flag']}</span> <span>{lang['name']}</span>
                </button>''')

    html.append('''
            </div>
        </div>

        <div class="blog-layout">
            <main class="blog-main-col">
''')

    for dom in DOMAINS:
        num_str = f"0{dom['num']}" if dom['num'] < 10 else str(dom['num'])
        html.append(f'''
    <section class="domain-section" id="{dom['id']}">
        <div class="domain-head">
            <div class="domain-num">{num_str}</div>
            <div>
                <div class="domain-goal">{dom['emoji']} Domain {dom['num']}: {dom['goal']}</div>
                <h2>{dom['title']}</h2>
            </div>
        </div>
        <p class="domain-desc">{dom['desc']}</p>

        <div class="chains-grid">''')

        for chain in dom['chains']:
            rel_class = "rel-seq" if chain['rel'] == "➔" else "rel-opp"

            html.append(f'''
            <div class="chain-card">
                <div class="chain-head">
                    <span>Chain {chain['id']} · {chain['title']}</span>
                    <span class="chain-badge">A0 Level</span>
                </div>
                <div class="chain-body">''')

            # Render spans for each available target language
            for l_info in LANGUAGES:
                l_code = l_info['code']
                items = chain.get(l_code) or chain['en']
                items_html = []
                for idx, item in enumerate(items):
                    items_html.append(f'<span>{item}</span>')
                    if idx < len(items) - 1:
                        items_html.append(f'<span class="chain-rel {rel_class}">{chain["rel"]}</span>')

                active_str = "active" if l_code == "en" else ""
                chain_str = " ".join(items_html)
                html.append(f'                    <div class="lang-words-span {active_str}" data-lang="{l_code}">{chain_str}</div>')

            html.append('''
                </div>
            </div>''')

        html.append(f'''
        </div>

        <div class="milestone-box">
            <div class="milestone-title">🎯 Milestone {dom['num']} Can-Do Goal</div>
            <p style="margin:0; font-size:0.95rem; color:var(--text-main, #1e293b);">{dom['milestone']}</p>
        </div>
    </section>''')

    html.append('''
            </main>

            <!-- Blog Sidebar -->
            <aside class="blog-sidebar">
                <div class="sidebar-box">
                    <h3 class="sidebar-h">📚 Domain Navigation</h3>
                    <ul class="sidebar-list" style="list-style:none; padding:0; margin:0; font-size:0.9rem; line-height:1.8;">
                        <li><a href="#dom-1">💬 1. Courtesy &amp; Communication</a></li>
                        <li><a href="#dom-2">👥 2. People &amp; Family</a></li>
                        <li><a href="#dom-3">⏰ 3. Time &amp; Calendar</a></li>
                        <li><a href="#dom-4">🌅 4. Daily Routine &amp; Actions</a></li>
                        <li><a href="#dom-5">🏡 5. Home &amp; Living Spaces</a></li>
                        <li><a href="#dom-6">🍽️ 6. Food, Drink &amp; Dining</a></li>
                        <li><a href="#dom-7">🛒 7. Shopping &amp; Money</a></li>
                        <li><a href="#dom-8">🗺️ 8. Travel &amp; Navigation</a></li>
                        <li><a href="#dom-9">🩺 9. Health &amp; Body</a></li>
                        <li><a href="#dom-10">🌟 10. Feelings &amp; Qualities</a></li>
                    </ul>
                </div>

                <div class="sidebar-box" style="margin-top:1.5rem; background:var(--bg-subtle, #f8fafc); border-radius:12px; padding:1.25rem;">
                    <h3 class="sidebar-h">📁 COSYdata Integration</h3>
                    <p style="font-size:0.85rem; color:var(--text-muted, #64748b); line-height:1.5;">
                        All words in this master list link directly to canonical index entries in <strong>COSYdata</strong> across all 14 target languages (EN, FR, IT, ES, PT, DE, EL, RU, HY, KA, TT, BA, BR, CV).
                    </p>
                    <a href="https://github.com/cosylanguages/COSYdata" target="_blank" rel="noopener" class="button" style="display:inline-block; width:100%; text-align:center; margin-top:0.5rem; background:var(--teal, #0d9488); color:#fff; padding:0.5rem; border-radius:8px; text-decoration:none; font-weight:600; font-size:0.85rem;">View COSYdata Repo ↗</a>
                </div>
            </aside>
        </div>
    </div>

    <!-- Footer -->
    <footer id="cosy-footer" style="margin-top:4rem; padding:2rem 0; border-top:1px solid var(--border-color, #e2e8f0); text-align:center; font-size:0.9rem; color:var(--text-muted, #64748b);">
        <p>© 2026 COSYlanguages · 100% Free Public Ecosystem. Built for learners worldwide.</p>
    </footer>

    <script src="../js/core/engine.js"></script>
    <script>
        function filterMasterLang(langCode, langName) {
            document.querySelectorAll('.lang-pill').forEach(btn => {
                if (btn.getAttribute('data-lang') === langCode) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            document.querySelectorAll('.lang-words-span').forEach(span => {
                if (span.getAttribute('data-lang') === langCode) {
                    span.classList.add('active');
                } else {
                    span.classList.remove('active');
                }
            });
            const label = document.getElementById('activeLangLabel');
            if (label) {
                label.textContent = 'Target Language: ' + langName;
            }
        }
    </script>
</body>
</html>
''')

    with open('blog/top-100-a0-a1.html', 'w', encoding='utf-8') as f:
        f.write("".join(html))

    print("Successfully generated blog/top-100-a0-a1.html with interactive multi-language word switcher.")

if __name__ == "__main__":
    render_html()
