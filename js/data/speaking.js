const speakingData = {
    "en": {
        "opinionArena": [
            { "text": "Is breakfast the most important meal?", "level": "starter", "theme": "food_drinks" },
            { "text": "Are dogs better pets than cats?", "level": "starter", "theme": "leisure_hobbies" },
            { "text": "Should children have mobile phones?", "level": "elementary", "theme": "science_technology" },
            { "text": "Is it better to live in a house or an apartment?", "level": "elementary", "theme": "daily_life" },
            { "text": "Can we live without the internet for a week?", "level": "intermediate", "theme": "science_technology" },
            { "text": "Should everyone learn a second language?", "level": "intermediate", "theme": "people_society" },
            { "text": "Is social media destroying our social skills?", "level": "upper-intermediate", "theme": "science_technology" },
            { "text": "Should public transport be free?", "level": "upper-intermediate", "theme": "travel_places" },
            { "text": "Genetic engineering: Progress or peril?", "level": "advanced", "theme": "science_technology" },
            { "text": "Is universal basic income a solution to automation?", "level": "advanced", "theme": "people_society" },
            { "text": "Does free will truly exist or is it an illusion?", "level": "proficiency", "theme": "people_society" },
            { "text": "The ethics of colonizing other planets.", "level": "proficiency", "theme": "science_technology" },
            { "text": "Can money buy happiness?", "level": "upper-intermediate", "theme": "people_society" },
            { "text": "Is AI a threat to our jobs?", "level": "upper-intermediate", "theme": "science_technology" }
        ],
        "criticsCorner": [
            { "text": "I think, therefore I am.", "author": "Descartes", "level": "intermediate", "theme": "people_society" },
            { "text": "Life is what happens when you're busy making other plans.", "author": "John Lennon", "level": "elementary", "theme": "people_society" },
            { "text": "The only constant is change.", "author": "Heraclitus", "level": "upper-intermediate", "theme": "people_society" }
        ],
        "debates": [
            {
                "topic": "Online vs. In-person shopping",
                "sideA": "Online", "sideB": "In-person",
                "level": "elementary", "theme": "daily_life",
                "ideasA": ["Convenience", "Better prices"],
                "ideasB": ["Try on items", "Instant gratification"]
            },
            {
                "topic": "Paper books vs. E-books",
                "sideA": "Paper", "sideB": "E-books",
                "level": "elementary", "theme": "leisure_hobbies",
                "ideasA": ["Scent/Feel", "Collectable"],
                "ideasB": ["Portability", "Space saving"]
            },
            {
                "topic": "Work from home vs. Office work",
                "sideA": "Home", "sideB": "Office",
                "level": "intermediate", "theme": "people_society",
                "ideasA": ["No commute", "Flexibility"],
                "ideasB": ["Socializing", "Better focus"]
            },
            {
                "topic": "Electric cars vs. Petrol cars",
                "sideA": "Electric", "sideB": "Petrol",
                "level": "intermediate", "theme": "nature_environment",
                "ideasA": ["Environment", "Quiet"],
                "ideasB": ["Range", "Charging speed"]
            },
            {
                "topic": "Solo vs. Group travel",
                "sideA": "Solo", "sideB": "Group",
                "level": "intermediate", "theme": "travel_places",
                "ideasA": ["Freedom", "Independence"],
                "ideasB": ["Safety", "Shared memories"]
            },
            {
                "topic": "Urban vs. Rural life",
                "sideA": "Urban", "sideB": "Rural",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Opportunities", "Culture"],
                "ideasB": ["Nature", "Tranquility"]
            },
            {
                "topic": "Career vs. Family",
                "sideA": "Career", "sideB": "Family",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Ambition", "Status"],
                "ideasB": ["Love", "Support"]
            }
        ],
        "talkThatTalk": [
            { "topic": "Basic introductions: my name, hometown, and job.", "level": "starter", "theme": "people_society" },
            { "topic": "My family: describing my parents and siblings.", "level": "starter", "theme": "people_society" },
            { "topic": "My daily routine: work, school, and schedule.", "level": "starter", "theme": "daily_life" },
            { "topic": "Favorite food and drinks.", "level": "starter", "theme": "food_drinks" },
            { "topic": "Hobbies: what I like and what I don't like.", "level": "starter", "theme": "leisure_hobbies" },
            { "topic": "Weather and my favorite season.", "level": "starter", "theme": "nature_environment" },
            { "topic": "Travel: my past trips and weekend getaways.", "level": "elementary", "theme": "travel_places" },
            { "topic": "Shopping habits and my favorite stores.", "level": "elementary", "theme": "daily_life" },
            { "topic": "Food and recipes: sharing a simple dish.", "level": "elementary", "theme": "food_drinks" },
            { "topic": "Holidays and traditions: birthday or New Year customs.", "level": "elementary", "theme": "people_society" },
            { "topic": "School or work: describing classes or professional tasks.", "level": "elementary", "theme": "education_work" },
            { "topic": "Hobbies and free time: sports, music, and arts.", "level": "elementary", "theme": "leisure_hobbies" },
            { "topic": "Travel stories: sharing adventure experiences.", "level": "intermediate", "theme": "travel_places" },
            { "topic": "Technology: impact of social media and favorite apps.", "level": "intermediate", "theme": "science_technology" },
            { "topic": "Culture and traditions: comparing customs and holidays.", "level": "intermediate", "theme": "people_society" },
            { "topic": "Recommendations: my favorite movies, books, and music.", "level": "intermediate", "theme": "leisure_hobbies" },
            { "topic": "Nature and environment: habits to help the planet.", "level": "intermediate", "theme": "nature_environment" },
            { "topic": "Education and work: career goals and study plans.", "level": "intermediate", "theme": "education_work" },
            { "topic": "Current events: discussing recent developments.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Society and social issues: urban vs rural life.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Science and innovation: AI and technology's future.", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Art and culture: the role of arts in society.", "level": "upper-intermediate", "theme": "leisure_hobbies" },
            { "topic": "Personal values: success and happiness.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "My favorite childhood memory", "level": "starter", "theme": "people_society" },
            { "topic": "The last vacation I took", "level": "elementary", "theme": "travel_places" },
            { "topic": "A person who inspired me", "level": "intermediate", "theme": "people_society" },
            { "topic": "The future of the world in 50 years", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "The role of art in modern society", "level": "advanced", "theme": "leisure_hobbies" },
            { "topic": "Complexity of human consciousness", "level": "proficiency", "theme": "people_society" },
            { "topic": "The importance of mental health awareness", "level": "intermediate", "theme": "health_body" },
            { "topic": "My dream job and why", "level": "starter", "theme": "education_work" },
            { "topic": "The impact of climate change on local communities", "level": "upper-intermediate", "theme": "nature_environment" },
            { "topic": "Artificial Intelligence: Tool or threat?", "level": "advanced", "theme": "science_technology" }
        ]
    },
    "fr": {
        "opinionArena": [
            { "text": "Le petit-déjeuner est-il le repas le plus important ?", "level": "starter", "theme": "food_drinks" },
            { "text": "Les chiens sont-ils de meilleurs animaux de compagnie que les chats ?", "level": "starter", "theme": "leisure_hobbies" },
            { "text": "Les enfants devraient-ils avoir des téléphones portables ?", "level": "elementary", "theme": "science_technology" },
            { "text": "Est-il préférable de vivre dans une maison ou un appartement ?", "level": "elementary", "theme": "daily_life" },
            { "text": "Pouvons-nous vivre sans Internet pendant une semaine ?", "level": "intermediate", "theme": "science_technology" },
            { "text": "Tout le monde devrait-il apprendre une deuxième langue ?", "level": "intermediate", "theme": "people_society" },
            { "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?", "level": "upper-intermediate", "theme": "science_technology" },
            { "text": "Les transports publics devraient-ils être gratuits ?", "level": "upper-intermediate", "theme": "travel_places" },
            { "text": "Génie génétique : progrès ou péril ?", "level": "advanced", "theme": "science_technology" },
            { "text": "Le revenu universel est-il une solution à l'automatisation ?", "level": "advanced", "theme": "people_society" },
            { "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?", "level": "proficiency", "theme": "people_society" },
            { "text": "L'éthique de la colonisation d'autres planètes.", "level": "proficiency", "theme": "science_technology" },
            { "text": "L'argent peut-il acheter le bonheur ?", "level": "upper-intermediate", "theme": "people_society" },
            { "text": "L'IA est-elle une menace pour nos emplois ?", "level": "upper-intermediate", "theme": "science_technology" }
        ],
        "criticsCorner": [
            { "text": "Je pense, donc je suis.", "author": "Descartes", "level": "intermediate", "theme": "people_society" },
            { "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.", "author": "John Lennon", "level": "elementary", "theme": "people_society" },
            { "text": "La seule constante est le changement.", "author": "Heraclitus", "level": "upper-intermediate", "theme": "people_society" }
        ],
        "debates": [
            {
                "topic": "Achats en ligne vs Achats en personne",
                "sideA": "En ligne", "sideB": "En personne",
                "level": "elementary", "theme": "daily_life",
                "ideasA": ["Commodité", "Meilleurs prix"],
                "ideasB": ["Essayer les articles", "Gratification instantanée"]
            },
            {
                "topic": "Livres papier vs E-books",
                "sideA": "Papier", "sideB": "E-books",
                "level": "elementary", "theme": "leisure_hobbies",
                "ideasA": ["Odeur/Toucher", "Collectionnable"],
                "ideasB": ["Portabilité", "Gain de place"]
            },
            {
                "topic": "Télétravail vs Travail au bureau",
                "sideA": "Maison", "sideB": "Bureau",
                "level": "intermediate", "theme": "people_society",
                "ideasA": ["Pas de trajet", "Flexibilité"],
                "ideasB": ["Socialisation", "Meilleure concentration"]
            },
            {
                "topic": "Voitures électriques vs Voitures à essence",
                "sideA": "Électrique", "sideB": "Essence",
                "level": "intermediate", "theme": "nature_environment",
                "ideasA": ["Environnement", "Silencieux"],
                "ideasB": ["Autonomie", "Vitesse de charge"]
            },
            {
                "topic": "Voyage en solo vs en groupe",
                "sideA": "Solo", "sideB": "Groupe",
                "level": "intermediate", "theme": "travel_places",
                "ideasA": ["Liberté", "Indépendance"],
                "ideasB": ["Sécurité", "Souvenirs partagés"]
            },
            {
                "topic": "Vie urbaine vs rurale",
                "sideA": "Urbain", "sideB": "Rural",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Opportunités", "Culture"],
                "ideasB": ["Nature", "Tranquillité"]
            },
            {
                "topic": "Carrière vs Famille",
                "sideA": "Carrière", "sideB": "Famille",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Ambition", "Statut"],
                "ideasB": ["Amour", "Soutien"]
            }
        ],
        "talkThatTalk": [
            { "topic": "Présentations de base : mon nom, ma ville et mon travail.", "level": "starter", "theme": "people_society" },
            { "topic": "Ma famille : décrire mes parents et mes frères et sœurs.", "level": "starter", "theme": "people_society" },
            { "topic": "Ma routine quotidienne : travail, école et emploi du temps.", "level": "starter", "theme": "daily_life" },
            { "topic": "Plats et boissons préférés.", "level": "starter", "theme": "food_drinks" },
            { "topic": "Loisirs : ce que j'aime et ce que je n'aime pas.", "level": "starter", "theme": "leisure_hobbies" },
            { "topic": "La météo et ma saison préférée.", "level": "starter", "theme": "nature_environment" },
            { "topic": "Voyages : mes voyages passés et escapades de week-end.", "level": "elementary", "theme": "travel_places" },
            { "topic": "Habitudes d'achat et mes magasins préférés.", "level": "elementary", "theme": "daily_life" },
            { "topic": "Cuisine et recettes : partager un plat simple.", "level": "elementary", "theme": "food_drinks" },
            { "topic": "Fêtes et traditions : anniversaires ou coutumes du Nouvel An.", "level": "elementary", "theme": "people_society" },
            { "topic": "École ou travail : décrire les cours ou les tâches professionnelles.", "level": "elementary", "theme": "education_work" },
            { "topic": "Loisirs et temps libre : sport, musique et arts.", "level": "elementary", "theme": "leisure_hobbies" },
            { "topic": "Histoires de voyage : partager des expériences d'aventure.", "level": "intermediate", "theme": "travel_places" },
            { "topic": "Technologie : impact des réseaux sociaux et applications préférées.", "level": "intermediate", "theme": "science_technology" },
            { "topic": "Culture et traditions : comparer les coutumes et les fêtes.", "level": "intermediate", "theme": "people_society" },
            { "topic": "Recommandations : mes films, livres et musiques préférés.", "level": "intermediate", "theme": "leisure_hobbies" },
            { "topic": "Nature et environnement : habitudes pour aider la planète.", "level": "intermediate", "theme": "nature_environment" },
            { "topic": "Éducation et travail : objectifs de carrière et plans d'études.", "level": "intermediate", "theme": "education_work" },
            { "topic": "Actualités : discuter des développements récents.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Société et enjeux sociaux : vie urbaine vs rurale.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Science et innovation : l'IA et l'avenir de la technologie.", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Art et culture : le rôle des arts dans la société.", "level": "upper-intermediate", "theme": "leisure_hobbies" },
            { "topic": "Valeurs personnelles : succès et bonheur.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Mon souvenir d'enfance préféré", "level": "starter", "theme": "people_society" },
            { "topic": "Les dernières vacances que j'ai prises", "level": "elementary", "theme": "travel_places" },
            { "topic": "Une personne qui m'a inspiré", "level": "intermediate", "theme": "people_society" },
            { "topic": "L'avenir du monde dans 50 ans", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Le rôle de l'art dans la société moderne", "level": "advanced", "theme": "leisure_hobbies" },
            { "topic": "La complexité de la conscience humaine", "level": "proficiency", "theme": "people_society" },
            { "topic": "L'importance de la sensibilisation à la santé mentale", "level": "intermediate", "theme": "health_body" },
            { "topic": "Le métier de mes rêves et pourquoi", "level": "starter", "theme": "education_work" },
            { "topic": "L'impact du changement climatique sur les communautés locales", "level": "upper-intermediate", "theme": "nature_environment" },
            { "topic": "Intelligence artificielle : outil ou menace ?", "level": "advanced", "theme": "science_technology" }
        ]
    },
    "it": {
        "opinionArena": [
            { "text": "La colazione è il pasto più importante?", "level": "starter", "theme": "food_drinks" },
            { "text": "I cani sono animali domestici migliori dei gatti?", "level": "starter", "theme": "leisure_hobbies" },
            { "text": "I bambini dovrebbero avere il cellulare?", "level": "elementary", "theme": "science_technology" },
            { "text": "È meglio vivere in una casa o in un appartamento?", "level": "elementary", "theme": "daily_life" },
            { "text": "Possiamo vivere senza internet per una settimana?", "level": "intermediate", "theme": "science_technology" },
            { "text": "Tutti dovrebbero imparare una seconda lingua?", "level": "intermediate", "theme": "people_society" },
            { "text": "I social media stanno distruggendo le nostre abilità sociali?", "level": "upper-intermediate", "theme": "science_technology" },
            { "text": "I trasporti pubblici dovrebbero essere gratuiti?", "level": "upper-intermediate", "theme": "travel_places" },
            { "text": "Ingegneria genetica: progresso o pericolo?", "level": "advanced", "theme": "science_technology" },
            { "text": "Il reddito di base universale è una soluzione all'automazione?", "level": "advanced", "theme": "people_society" },
            { "text": "Il libero arbitrio esiste davvero o è un'illusione?", "level": "proficiency", "theme": "people_society" },
            { "text": "L'etica della colonizzazione di altri pianeti.", "level": "proficiency", "theme": "science_technology" },
            { "text": "I soldi possono comprare la felicità?", "level": "upper-intermediate", "theme": "people_society" },
            { "text": "L'IA è una minaccia per i nostri lavori?", "level": "upper-intermediate", "theme": "science_technology" }
        ],
        "criticsCorner": [
            { "text": "Penso, dunque sono.", "author": "Descartes", "level": "intermediate", "theme": "people_society" },
            { "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.", "author": "John Lennon", "level": "elementary", "theme": "people_society" },
            { "text": "L'unica costante è il cambiamento.", "author": "Heraclitus", "level": "upper-intermediate", "theme": "people_society" }
        ],
        "debates": [
            {
                "topic": "Acquisti online vs Acquisti di persona",
                "sideA": "Online", "sideB": "Di persona",
                "level": "elementary", "theme": "daily_life",
                "ideasA": ["Comodità", "Prezzi migliori"],
                "ideasB": ["Provare gli articoli", "Gratificazione istantanea"]
            },
            {
                "topic": "Libri cartacei vs E-book",
                "sideA": "Carta", "sideB": "E-book",
                "level": "elementary", "theme": "leisure_hobbies",
                "ideasA": ["Odore/Sensazione", "Collezionabile"],
                "ideasB": ["Portabilità", "Risparmio di spazio"]
            },
            {
                "topic": "Lavoro da casa vs Lavoro in ufficio",
                "sideA": "Casa", "sideB": "Ufficio",
                "level": "intermediate", "theme": "people_society",
                "ideasA": ["Nessun tragitto", "Flessibilità"],
                "ideasB": ["Socializzazione", "Migliore concentrazione"]
            },
            {
                "topic": "Auto elettriche vs Auto a benzina",
                "sideA": "Elettriche", "sideB": "Benzina",
                "level": "intermediate", "theme": "nature_environment",
                "ideasA": ["Ambiente", "Silenzioso"],
                "ideasB": ["Autonomia", "Velocità di ricarica"]
            },
            {
                "topic": "Viaggio da soli vs in gruppo",
                "sideA": "Da soli", "sideB": "In gruppo",
                "level": "intermediate", "theme": "travel_places",
                "ideasA": ["Libertà", "Indipendenza"],
                "ideasB": ["Sicurezza", "Ricordi condivisi"]
            },
            {
                "topic": "Vita urbana vs rurale",
                "sideA": "Urbana", "sideB": "Rurale",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Opportunità", "Cultura"],
                "ideasB": ["Natura", "Tranquillità"]
            },
            {
                "topic": "Carriera vs Famiglia",
                "sideA": "Carriera", "sideB": "Famiglia",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Ambizione", "Status"],
                "ideasB": ["Amore", "Sostegno"]
            }
        ],
        "talkThatTalk": [
            { "topic": "Presentazioni di base: il mio nome, la mia città e il mio lavoro.", "level": "starter", "theme": "people_society" },
            { "topic": "La mia famiglia: descrivere i miei genitori e fratelli.", "level": "starter", "theme": "people_society" },
            { "topic": "La mia routine quotidiana: lavoro, scuola e orari.", "level": "starter", "theme": "daily_life" },
            { "topic": "Cibi e bevande preferiti.", "level": "starter", "theme": "food_drinks" },
            { "topic": "Hobby: cosa mi piace e cosa non mi piace.", "level": "starter", "theme": "leisure_hobbies" },
            { "topic": "Il tempo e la mia stagione preferita.", "level": "starter", "theme": "nature_environment" },
            { "topic": "Viaggi: i miei viaggi passati e fughe del fine settimana.", "level": "elementary", "theme": "travel_places" },
            { "topic": "Abitudini di acquisto e i miei negozi preferiti.", "level": "elementary", "theme": "daily_life" },
            { "topic": "Cibo e ricette: condividere un piatto semplice.", "level": "elementary", "theme": "food_drinks" },
            { "topic": "Feste e tradizioni: compleanni o usanze di Capodanno.", "level": "elementary", "theme": "people_society" },
            { "topic": "Scuola o lavoro: descrivere lezioni o compiti professionali.", "level": "elementary", "theme": "education_work" },
            { "topic": "Hobby e tempo libero: sport, musica e arte.", "level": "elementary", "theme": "leisure_hobbies" },
            { "topic": "Storie di viaggio: condividere esperienze di avventura.", "level": "intermediate", "theme": "travel_places" },
            { "topic": "Tecnologia: impatto dei social media e app preferite.", "level": "intermediate", "theme": "science_technology" },
            { "topic": "Cultura e tradizioni: confrontare usanze e festività.", "level": "intermediate", "theme": "people_society" },
            { "topic": "Raccomandazioni: i miei film, libri e musica preferiti.", "level": "intermediate", "theme": "leisure_hobbies" },
            { "topic": "Natura e ambiente: abitudini per aiutare il pianeta.", "level": "intermediate", "theme": "nature_environment" },
            { "topic": "Educazione e lavoro: obiettivi di carriera e piani di studio.", "level": "intermediate", "theme": "education_work" },
            { "topic": "Attualità: discutere degli sviluppi recenti.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Società e questioni sociali: vita urbana vs rurale.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Scienza e innovazione: l'IA e il futuro della tecnologia.", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Arte e cultura: il ruolo delle arti nella società.", "level": "upper-intermediate", "theme": "leisure_hobbies" },
            { "topic": "Valori personali: successo e felicità.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Il mio ricordo d'infanzia preferito", "level": "starter", "theme": "people_society" },
            { "topic": "L'ultima vacanza che ho fatto", "level": "elementary", "theme": "travel_places" },
            { "topic": "Una persona che mi ha ispirato", "level": "intermediate", "theme": "people_society" },
            { "topic": "Il futuro del mondo tra 50 anni", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Il ruolo dell'arte nella società moderna", "level": "advanced", "theme": "leisure_hobbies" },
            { "topic": "La complessità della coscienza umana", "level": "proficiency", "theme": "people_society" },
            { "topic": "L'importance della consapevolezza sulla salute mentale", "level": "intermediate", "theme": "health_body" },
            { "topic": "Il lavoro dei miei sogni e perché", "level": "starter", "theme": "education_work" },
            { "topic": "L'impatto del cambiamento climatico sulle comunità locali", "level": "upper-intermediate", "theme": "nature_environment" },
            { "topic": "Intelligenza Artificiale: Strumento o minaccia?", "level": "advanced", "theme": "science_technology" }
        ]
    },
    "ru": {
        "opinionArena": [
            { "text": "Является ли завтрак самым важным приемом пищи?", "level": "starter", "theme": "food_drinks" },
            { "text": "Собаки лучше кошек в качестве питомцев?", "level": "starter", "theme": "leisure_hobbies" },
            { "text": "Должны ли у детей быть мобильные телефоны?", "level": "elementary", "theme": "science_technology" },
            { "text": "Где лучше жить: в доме или в квартире?", "level": "elementary", "theme": "daily_life" },
            { "text": "Можем ли мы прожить без интернета неделю?", "level": "intermediate", "theme": "science_technology" },
            { "text": "Нужно ли каждому учить второй язык?", "level": "intermediate", "theme": "people_society" },
            { "text": "Разрушают ли социальные сети наши навыки общения?", "level": "upper-intermediate", "theme": "science_technology" },
            { "text": "Должен ли общественный транспорт быть бесплатным?", "level": "upper-intermediate", "theme": "travel_places" },
            { "text": "Генная инженерия: прогресс или опасность?", "level": "advanced", "theme": "science_technology" },
            { "text": "Является ли безусловный базовый доход решением проблемы автоматизации?", "level": "advanced", "theme": "people_society" },
            { "text": "Существует ли свобода воли на самом деле или это иллюзия?", "level": "proficiency", "theme": "people_society" },
            { "text": "Этика колонизации других планет.", "level": "proficiency", "theme": "science_technology" },
            { "text": "Могут ли деньги купить счастье?", "level": "upper-intermediate", "theme": "people_society" },
            { "text": "Является ли ИИ угрозой для наших рабочих мест?", "level": "upper-intermediate", "theme": "science_technology" }
        ],
        "criticsCorner": [
            { "text": "Я мыслю, следовательно, я существую.", "author": "Descartes", "level": "intermediate", "theme": "people_society" },
            { "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.", "author": "John Lennon", "level": "elementary", "theme": "people_society" },
            { "text": "Единственная константа — это перемены.", "author": "Heraclitus", "level": "upper-intermediate", "theme": "people_society" }
        ],
        "debates": [
            {
                "topic": "Онлайн-шопинг против покупок в магазине",
                "sideA": "Онлайн", "sideB": "Лично",
                "level": "elementary", "theme": "daily_life",
                "ideasA": ["Удобство", "Лучшие цены"],
                "ideasB": ["Примерить вещи", "Мгновенное удовлетворение"]
            },
            {
                "topic": "Бумажные книги против электронных",
                "sideA": "Бумажные", "sideB": "Электронные",
                "level": "elementary", "theme": "leisure_hobbies",
                "ideasA": ["Запах/Ощущение", "Предмет коллекционирования"],
                "ideasB": ["Портативность", "Экономия места"]
            },
            {
                "topic": "Работа из дома против работы в офисе",
                "sideA": "Дом", "sideB": "Офис",
                "level": "intermediate", "theme": "people_society",
                "ideasA": ["Нет поездок", "Гибкость"],
                "ideasB": ["Общение", "Лучшая концентрация"]
            },
            {
                "topic": "Электромобили против бензиновых авто",
                "sideA": "Электро", "sideB": "Бензин",
                "level": "intermediate", "theme": "nature_environment",
                "ideasA": ["Экология", "Тишина"],
                "ideasB": ["Запас хода", "Скорость зарядки"]
            },
            {
                "topic": "Путешествие в одиночку против группы",
                "sideA": "Одиночку", "sideB": "Группой",
                "level": "intermediate", "theme": "travel_places",
                "ideasA": ["Свобода", "Независимость"],
                "ideasB": ["Безопасность", "Общие воспоминания"]
            },
            {
                "topic": "Городская жизнь против сельской",
                "sideA": "Город", "sideB": "Деревня",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Возможности", "Культура"],
                "ideasB": ["Природа", "Спокойствие"]
            },
            {
                "topic": "Карьера против семьи",
                "sideA": "Карьера", "sideB": "Семья",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Амбиции", "Статус"],
                "ideasB": ["Любовь", "Поддержка"]
            }
        ],
        "talkThatTalk": [
            { "topic": "Базовое представление: моё имя, город и работа.", "level": "starter", "theme": "people_society" },
            { "topic": "Моя семья: описание родителей, братьев и сестер.", "level": "starter", "theme": "people_society" },
            { "topic": "Мой распорядок дня: работа, школа и график.", "level": "starter", "theme": "daily_life" },
            { "topic": "Любимая еда и напитки.", "level": "starter", "theme": "food_drinks" },
            { "topic": "Хобби: что мне нравится и что не нравится.", "level": "starter", "theme": "leisure_hobbies" },
            { "topic": "Погода и моё любимое время года.", "level": "starter", "theme": "nature_environment" },
            { "topic": "Путешествия: мои прошлые поездки и поездки на выходные.", "level": "elementary", "theme": "travel_places" },
            { "topic": "Шопинг и мои любимые магазины.", "level": "elementary", "theme": "daily_life" },
            { "topic": "Еда и рецепты: простой рецепт блюда.", "level": "elementary", "theme": "food_drinks" },
            { "topic": "Праздники и традиции: день рождения или Новый год.", "level": "elementary", "theme": "people_society" },
            { "topic": "Школа или работа: описание занятий или рабочих задач.", "level": "elementary", "theme": "education_work" },
            { "topic": "Хобби и свободное время: спорт, музыка и искусство.", "level": "elementary", "theme": "leisure_hobbies" },
            { "topic": "Истории из путешествий: приключения и опыт.", "level": "intermediate", "theme": "travel_places" },
            { "topic": "Технологии: влияние соцсетей и любимые приложения.", "level": "intermediate", "theme": "science_technology" },
            { "topic": "Культура и традиции: сравнение обычаев и праздников.", "level": "intermediate", "theme": "people_society" },
            { "topic": "Рекомендации: любимые фильмы, книги и музыка.", "level": "intermediate", "theme": "leisure_hobbies" },
            { "topic": "Природа и экология: привычки, помогающие планете.", "level": "intermediate", "theme": "nature_environment" },
            { "topic": "Образование и работа: карьерные цели и планы на учебу.", "level": "intermediate", "theme": "education_work" },
            { "topic": "Текущие события: обсуждение последних новостей.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Общество и социальные проблемы: городская жизнь против сельской.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Наука и инновации: ИИ и будущее технологий.", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Арт и культура: роль искусства в обществе.", "level": "upper-intermediate", "theme": "leisure_hobbies" },
            { "topic": "Личные ценности: успех и счастье.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Мое любимое воспоминание из детства", "level": "starter", "theme": "people_society" },
            { "topic": "Мой последний отпуск", "level": "elementary", "theme": "travel_places" },
            { "topic": "Человек, который меня вдохновил", "level": "intermediate", "theme": "people_society" },
            { "topic": "Будущее мира через 50 лет", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Роль искусства в современном обществе", "level": "advanced", "theme": "leisure_hobbies" },
            { "topic": "Сложность человеческого сознания", "level": "proficiency", "theme": "people_society" },
            { "topic": "Важность осведомленности о ментальном здоровье", "level": "intermediate", "theme": "health_body" },
            { "topic": "Работа моей мечты и почему", "level": "starter", "theme": "education_work" },
            { "topic": "Влияние изменения климата на местные сообщества", "level": "upper-intermediate", "theme": "nature_environment" },
            { "topic": "Искусственный интеллект: инструмент или угроза?", "level": "advanced", "theme": "science_technology" }
        ]
    },
    "el": {
        "opinionArena": [
            { "text": "Είναι το πρωινό το πιο σημαντικό γεύμα;", "level": "starter", "theme": "food_drinks" },
            { "text": "Είναι οι σκύλοι καλύτερα κατοικίδια από τις γάτες;", "level": "starter", "theme": "leisure_hobbies" },
            { "text": "Πρέπει τα παιδιά να έχουν κινητά τηλέφωνα;", "level": "elementary", "theme": "science_technology" },
            { "text": "Είναι καλύτερα να ζεις σε σπίτι ή σε διαμέρισμα;", "level": "elementary", "theme": "daily_life" },
            { "text": "Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;", "level": "intermediate", "theme": "science_technology" },
            { "text": "Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;", "level": "intermediate", "theme": "people_society" },
            { "text": "Καταστρέφουν τα κοινωνικά δίκτυα τις κοινωνικές μας δεξιότητες;", "level": "upper-intermediate", "theme": "science_technology" },
            { "text": "Πρέπει οι δημόσιες συγκοινωνίες να είναι δωρεάν;", "level": "upper-intermediate", "theme": "travel_places" },
            { "text": "Γενετική μηχανική: Πρόοδος ή κίνδυνος;", "level": "advanced", "theme": "science_technology" },
            { "text": "Είναι το καθολικό βασικό εισόδημα λύση για την αυτοματοποίηση;", "level": "advanced", "theme": "people_society" },
            { "text": "Υπάρχει πραγματικά η ελεύθερη βούληση ή είναι μια ψευδαίσθηση;", "level": "proficiency", "theme": "people_society" },
            { "text": "Η ηθική του αποικισμού άλλων πλανητών.", "level": "proficiency", "theme": "science_technology" },
            { "text": "Μπορούν τα χρήματα να αγοράσουν την ευτυχία;", "level": "upper-intermediate", "theme": "people_society" },
            { "text": "Είναι η τεχνητή νοημοσύνη απειλή για τις δουλειές μας;", "level": "upper-intermediate", "theme": "science_technology" }
        ],
        "criticsCorner": [
            { "text": "Σκέφτομαι, άρα υπάρχω.", "author": "Descartes", "level": "intermediate", "theme": "people_society" },
            { "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.", "author": "John Lennon", "level": "elementary", "theme": "people_society" },
            { "text": "Η μόνη σταθερά είναι η αλλαγή.", "author": "Heraclitus", "level": "upper-intermediate", "theme": "people_society" }
        ],
        "debates": [
            {
                "topic": "Online αγορές vs Αγορές με φυσική παρουσία",
                "sideA": "Online", "sideB": "Φυσική παρουσία",
                "level": "elementary", "theme": "daily_life",
                "ideasA": ["Ευκολία", "Καλύτερες τιμές"],
                "ideasB": ["Δοκιμή ειδών", "Άμεση ικανοποίηση"]
            },
            {
                "topic": "Χάρτινα βιβλία vs E-books",
                "sideA": "Χαρτί", "sideB": "E-books",
                "level": "elementary", "theme": "leisure_hobbies",
                "ideasA": ["Μυρωδιά/Αίσθηση", "Συλλεκτικό"],
                "ideasB": ["Φορητότητα", "Εξοικονόμηση χώρου"]
            },
            {
                "topic": "Τηλεργασία vs Εργασία στο γραφείο",
                "sideA": "Σπίτι", "sideB": "Γραφείο",
                "level": "intermediate", "theme": "people_society",
                "ideasA": ["Όχι μετακινήσεις", "Ευελιξία"],
                "ideasB": ["Κοινωνικοποίηση", "Καλύτερη εστίαση"]
            },
            {
                "topic": "Ηλεκτρικά αυτοκίνητα vs Αυτοκίνητα βενζίνης",
                "sideA": "Ηλεκτρικά", "sideB": "Βενζίνη",
                "level": "intermediate", "theme": "nature_environment",
                "ideasA": ["Περιβάλλον", "Ησυχία"],
                "ideasB": ["Αυτονομία", "Ταχύτητα φόρτισης"]
            },
            {
                "topic": "Ταξίδι μόνος vs με γκρουπ",
                "sideA": "Μόνος", "sideB": "Με γκρουπ",
                "level": "intermediate", "theme": "travel_places",
                "ideasA": ["Ελευθερία", "Ανεξαρτησία"],
                "ideasB": ["Ασφάλεια", "Κοινές αναμνήσεις"]
            },
            {
                "topic": "Αστική vs Αγροτική ζωή",
                "sideA": "Πόλη", "sideB": "Χωριό",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Ευκαιρίες", "Πολιτισμός"],
                "ideasB": ["Φύση", "Ηρεμία"]
            },
            {
                "topic": "Καριέρα vs Οικογένεια",
                "sideA": "Καριέρα", "sideB": "Οικογένεια",
                "level": "upper-intermediate", "theme": "people_society",
                "ideasA": ["Φιλοδοξία", "Κύρος"],
                "ideasB": ["Αγάπη", "Υποστήριξη"]
            }
        ],
        "talkThatTalk": [
            { "topic": "Βασικές συστάσεις: το όνομά μου, η πόλη μου και η δουλειά μου.", "level": "starter", "theme": "people_society" },
            { "topic": "Η οικογένειά μου: περιγραφή των γονιών και των αδερφιών μου.", "level": "starter", "theme": "people_society" },
            { "topic": "Η καθημερινή μου ρουτίνα: δουλειά, σχολείο και πρόγραμμα.", "level": "starter", "theme": "daily_life" },
            { "topic": "Αγαπημένα φαγητά και ποτά.", "level": "starter", "theme": "food_drinks" },
            { "topic": "Χόμπι: τι μου αρέσει και τι δεν μου αρέσει.", "level": "starter", "theme": "leisure_hobbies" },
            { "topic": "Ο καιρός και η αγαπημένη μου εποχή.", "level": "starter", "theme": "nature_environment" },
            { "topic": "Ταξίδια: προηγούμενα ταξίδια και αποδράσεις του Σαββατοκύριακου.", "level": "elementary", "theme": "travel_places" },
            { "topic": "Συνήθειες αγορών και τα αγαπημένα μου καταστήματα.", "level": "elementary", "theme": "daily_life" },
            { "topic": "Φαγητό και συνταγές: μοιραστείτε ένα απλό πιάτο.", "level": "elementary", "theme": "food_drinks" },
            { "topic": "Γιορτές και παραδόσεις: γενέθλια ή έθιμα Πρωτοχρονιάς.", "level": "elementary", "theme": "people_society" },
            { "topic": "Σχολείο ή εργασία: περιγραφή μαθημάτων ή επαγγελματικών καθηκόντων.", "level": "elementary", "theme": "education_work" },
            { "topic": "Χόμπι και ελεύθερος χρόνος: αθλητισμός, μουσική και τέχνες.", "level": "elementary", "theme": "leisure_hobbies" },
            { "topic": "Ταξιδιωτικές ιστορίες: μοιραστείτε εμπειρίες περιπέτειας.", "level": "intermediate", "theme": "travel_places" },
            { "topic": "Τεχνολογία: αντίκτυπος των κοινωνικών δικτύων και αγαπημένες εφαρμογές.", "level": "intermediate", "theme": "science_technology" },
            { "topic": "Πολιτισμός και παραδόσεις: σύγκριση εθίμων και γιορτών.", "level": "intermediate", "theme": "people_society" },
            { "topic": "Συστάσεις: αγαπημένες ταινίες, βιβλία και μουσική.", "level": "intermediate", "theme": "leisure_hobbies" },
            { "topic": "Φύση και περιβάλλον: συνήθειες για να βοηθήσουμε τον πλανήτη.", "level": "intermediate", "theme": "nature_environment" },
            { "topic": "Εκπαίδευση και εργασία: επαγγελματικοί στόχοι και σχέδια σπουδών.", "level": "intermediate", "theme": "education_work" },
            { "topic": "Τρέχοντα γεγονότα: συζήτηση πρόσφατων εξελίξεων.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Κοινωνία και κοινωνικά ζητήματα: αστική vs αγροτική ζωή.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Επιστήμη και καινοτομία: η τεχνητή νοημοσύνη και το μέλλον της τεχνολογίας.", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Τέχνη και πολιτισμός: ο ρόλος των τεχνών στην κοινωνία.", "level": "upper-intermediate", "theme": "leisure_hobbies" },
            { "topic": "Προσωπικές αξίες: επιτυχία και ευτυχία.", "level": "upper-intermediate", "theme": "people_society" },
            { "topic": "Η αγαπημένη μου ανάμνηση από την παιδική ηλικία", "level": "starter", "theme": "people_society" },
            { "topic": "Οι τελευταίες διακοπές που έκανα", "level": "elementary", "theme": "travel_places" },
            { "topic": "Ένα άτομο που με ενέπνευσε", "level": "intermediate", "theme": "people_society" },
            { "topic": "Το μέλλον του κόσμου σε 50 χρόνια", "level": "upper-intermediate", "theme": "science_technology" },
            { "topic": "Ο ρόλος της τέχνης στη σύγχρονη κοινωνία", "level": "advanced", "theme": "leisure_hobbies" },
            { "topic": "Η πολυπλοκότητα της ανθρώπινης συνείδησης", "level": "proficiency", "theme": "people_society" },
            { "topic": "Η σημασία της ευαισθητοποίησης για την ψυχική υγεία", "level": "intermediate", "theme": "health_body" },
            { "topic": "Η δουλειά των ονείρων μου και γιατί", "level": "starter", "theme": "education_work" },
            { "topic": "Ο αντίκτυπος της κλιματικής αλλαγής στις τοπικές κοινότητες", "level": "upper-intermediate", "theme": "nature_environment" },
            { "topic": "Τεχνητή Νοημοσύνη: Εργαλείο ή απειλή;", "level": "advanced", "theme": "science_technology" }
        ]
    }
};
