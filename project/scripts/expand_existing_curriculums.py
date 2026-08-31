import json

def expand_file(filepath, additional_units):
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    current_units = data.get("units", [])
    max_u = max([u.get("unit", 0) for u in current_units], default=0)

    for add_u in additional_units:
        max_u += 1
        add_u["unit"] = max_u
        current_units.append(add_u)

    data["units"] = current_units

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Expanded {filepath} to {len(current_units)} units.")

# French A2 additions
fr_a2_add = [
    {
        "title": "Unité 3 : Faire des achats et la cuisine",
        "lessons": [
            {
                "lesson": 1,
                "title": "Articles partitifs et quantités",
                "grammar": ["Du, de la, des, de"],
                "vocabulary": ["Nourriture", "Marché", "Quantités"],
                "teacher_notes": "code: \"FR-A2-004\"\ncando: \"Peut faire des courses au marché\""
            }
        ]
    },
    {
        "title": "Unité 4 : La santé et le corps humain",
        "lessons": [
            {
                "lesson": 1,
                "title": "Chez le médecin",
                "grammar": ["Avoir mal à", "Il faut + infinitif"],
                "vocabulary": ["Symptômes", "Symptômes", "Corps"],
                "teacher_notes": "code: \"FR-A2-005\"\ncando: \"Peut décrire des symptômes chez le médecin\""
            }
        ]
    },
    {
        "title": "Unité 5 : Voyages et hébergement",
        "lessons": [
            {
                "lesson": 1,
                "title": "Réserver une chambre d'hôtel",
                "grammar": ["Verbes modaux (pouvoir, vouloir, devoir)"],
                "vocabulary": ["Hôtel", "Réservation", "Services"],
                "teacher_notes": "code: \"FR-A2-006\"\ncando: \"Peut réserver un hébergement\""
            }
        ]
    },
    {
        "title": "Unité 6 : Le monde du travail",
        "lessons": [
            {
                "lesson": 1,
                "title": "Parler de sa profession et de ses tâches",
                "grammar": ["Pronoms relatifs simples (qui, que, où)"],
                "vocabulary": ["Bureau", "Professions", "Tâches"],
                "teacher_notes": "code: \"FR-A2-007\"\ncando: \"Peut présenter ses responsabilités professionnelles\""
            }
        ]
    }
]

# French B1 additions
fr_b1_add = [
    {
        "title": "Unité 3 : Exprimer une opinion et débattre",
        "lessons": [
            {
                "lesson": 1,
                "title": "Le subjonctif présent pour l'opinion et le doute",
                "grammar": ["Formation du subjonctif", "Je ne pense pas que..."],
                "vocabulary": ["Argumentation", "Débat", "Société"],
                "teacher_notes": "code: \"FR-B1-003\"\ncando: \"Peut donner son avis dans un débat\""
            }
        ]
    },
    {
        "title": "Unité 4 : Médias et nouvelles technologies",
        "lessons": [
            {
                "lesson": 1,
                "title": "La presse et Internet",
                "grammar": ["Le discours rapporté au présent"],
                "vocabulary": ["Information", "Réseaux sociaux", "Presse"],
                "teacher_notes": "code: \"FR-B1-004\"\ncando: \"Peut résumer un article de presse\""
            }
        ]
    },
    {
        "title": "Unité 5 : Environnement et écologie",
        "lessons": [
            {
                "lesson": 1,
                "title": "Proposer des solutions écologiques",
                "grammar": ["Le conditionnel présent pour les propositions"],
                "vocabulary": ["Climat", "Recyclage", "Énergie"],
                "teacher_notes": "code: \"FR-B1-005\"\ncando: \"Peut proposer des initiatives vertes\""
            }
        ]
    },
    {
        "title": "Unité 6 : Culture et patrimoine",
        "lessons": [
            {
                "lesson": 1,
                "title": "Raconter une histoire ou un film",
                "grammar": ["Les pronoms démonstratifs et possessifs"],
                "vocabulary": ["Cinéma", "Littérature", "Art"],
                "teacher_notes": "code: \"FR-B1-006\"\ncando: \"Peut faire la critique d'un livre ou d'un film\""
            }
        ]
    }
]

# Italian A2 additions
it_a2_add = [
    {
        "title": "Unità 2: Passato prossimo e Imperfetto",
        "lessons": [{"lesson": 1, "title": "Raccontare il passato", "grammar": ["Passato prossimo vs Imperfetto"], "vocabulary": ["Ieri", "Ricordi"], "teacher_notes": "cando: \"Raccontare eventi passati\""}]
    },
    {
        "title": "Unità 3: Feste e Tradizioni",
        "lessons": [{"lesson": 1, "title": "Tradizioni italiane", "grammar": ["Pronomi diretti e indiretti"], "vocabulary": ["Feste", "Famiglia"], "teacher_notes": "cando: \"Parlare delle festività\""}]
    },
    {
        "title": "Unità 4: Fare la spesa e cucinare",
        "lessons": [{"lesson": 1, "title": "Al mercato", "grammar": ["Ne partitivo e ci locativo"], "vocabulary": ["Cibo", "Ricette"], "teacher_notes": "cando: \"Fare acquisti alimentari\""}]
    },
    {
        "title": "Unità 5: Salute e benessere",
        "lessons": [{"lesson": 1, "title": "Dal medico", "grammar": ["Imperativo informale"], "vocabulary": ["Corpo umano", "Salute"], "teacher_notes": "cando: \"Descrivere sintomi\""}]
    },
    {
        "title": "Unità 6: Il lavoro e il futuro",
        "lessons": [{"lesson": 1, "title": "Progetti per il futuro", "grammar": ["Futuro semplice"], "vocabulary": ["Lavoro", "Ufficio"], "teacher_notes": "cando: \"Esprimere progetti futuri\""}]
    }
]

# Italian B1 additions
it_b1_add = [
    {
        "title": "Unità 2: Il Congiuntivo presente",
        "lessons": [{"lesson": 1, "title": "Esprimere opinioni e desideri", "grammar": ["Congiuntivo presente"], "vocabulary": ["Opinione", "Dubbio"], "teacher_notes": "cando: \"Esprimere opinioni personali\""}]
    },
    {
        "title": "Unità 3: Il Periodo ipotetico della possibilità",
        "lessons": [{"lesson": 1, "title": "Se fossi ricchissimo...", "grammar": ["Condizionale e Congiuntivo imperfetto"], "vocabulary": ["Ipotesi", "Sogni"], "teacher_notes": "cando: \"Fare ipotesi sulla realtà\""}]
    },
    {
        "title": "Unità 4: Ambiente ed Ecologia",
        "lessons": [{"lesson": 1, "title": "Proteggere il pianeta", "grammar": ["Forma passiva e si passivante"], "vocabulary": ["Natura", "Riciclaggio"], "teacher_notes": "cando: \"Discutere di problemi ambientali\""}]
    },
    {
        "title": "Unità 5: Media e Società",
        "lessons": [{"lesson": 1, "title": "Attualità e notizie", "grammar": ["Discorso indiretto"], "vocabulary": ["Giornale", "Internet"], "teacher_notes": "cando: \"Riferire notizie e interviste\""}]
    },
    {
        "title": "Unità 6: Arte e Spettacolo",
        "lessons": [{"lesson": 1, "title": "Cinema e Teatro", "grammar": ["Pronomi relativi (che, cui)"], "vocabulary": ["Spettacolo", "Recensione"], "teacher_notes": "cando: \"Scrivere la recensione di un film\""}]
    }
]

# Russian A2 additions
ru_a2_add = [
    {
        "title": "Модуль 2: Прошедшее время и воспоминания",
        "lessons": [{"lesson": 1, "title": "Как я провёл лето", "grammar": ["Глаголы прошедшего времени"], "vocabulary": ["Каникулы", "Отпуск"], "teacher_notes": "cando: \"Рассказывать о прошлом\""}]
    },
    {
        "title": "Модуль 3: Покупки и одежда",
        "lessons": [{"lesson": 1, "title": "В магазине", "grammar": ["Винительный падеж неодушевлённых существительных"], "vocabulary": ["Одежда", "Цены"], "teacher_notes": "cando: \"Делать покупки\""}]
    },
    {
        "title": "Модуль 4: Здоровье и спорт",
        "lessons": [{"lesson": 1, "title": "У врача", "grammar": ["Конструкция \"У меня болит...\""], "vocabulary": ["Здоровье", "Тело"], "teacher_notes": "cando: \"Описывать самочувствие\""}]
    },
    {
        "title": "Модуль 5: Город и транспорт",
        "lessons": [{"lesson": 1, "title": "Как проехать...", "grammar": ["Глаголы движения (идти/ехать)"], "vocabulary": ["Транспорт", "Улица"], "teacher_notes": "cando: \"Ориентироваться в городе\""}]
    },
    {
        "title": "Модуль 6: Работа и планы",
        "lessons": [{"lesson": 1, "title": "Моя профессия", "grammar": ["Творительный падеж профессии"], "vocabulary": ["Профессии", "Работа"], "teacher_notes": "cando: \"Рассказывать о своей работе\""}]
    }
]

# Russian B1 additions
ru_b1_add = [
    {
        "title": "Модуль 2: Виды глагола (НСВ и СВ)",
        "lessons": [{"lesson": 1, "title": "Процесс и результат", "grammar": ["Видовые пары глаголов"], "vocabulary": ["Результат", "Действие"], "teacher_notes": "cando: \"Различать процесс и результат\""}]
    },
    {
        "title": "Модуль 3: Причастия и деепричастия",
        "lessons": [{"lesson": 1, "title": "Описательные обороты", "grammar": ["Действительные и страдательные причастия"], "vocabulary": ["Литература", "Текст"], "teacher_notes": "cando: \"Понимать сложные тексты\""}]
    },
    {
        "title": "Модуль 4: Выражение мнения и дискуссия",
        "lessons": [{"lesson": 1, "title": "Я считаю, что...", "grammar": ["Союзные слова и вводные слова"], "vocabulary": ["Дискуссия", "Мнение"], "teacher_notes": "cando: \"Аргументированно выражать мнение\""}]
    },
    {
        "title": "Модуль 5: Экология и общество",
        "lessons": [{"lesson": 1, "title": "Защита окружающей среды", "grammar": ["Сложноподчинённые предложения"], "vocabulary": ["Природа", "Экология"], "teacher_notes": "cando: \"Обсуждать социальные темы\""}]
    },
    {
        "title": "Модуль 6: Культура и искусственный интеллект",
        "lessons": [{"lesson": 1, "title": "Будущее технологий", "grammar": ["Условное наклонение (бы)"], "vocabulary": ["Технологии", "Будущее"], "teacher_notes": "cando: \"Строить гипотезы о будущем\""}]
    }
]

# Greek A2 additions
el_a2_add = [
    {
        "title": "Ενότητα 2: Παρατατικός και Αόριστος",
        "lessons": [{"lesson": 1, "title": "Διηγήσεις από το παρελθόν", "grammar": ["Αόριστος ρημάτων"], "vocabulary": ["Χθες", "Ταξίδι"], "teacher_notes": "cando: \"Περιγραφή παρελθόντων γεγονότων\""}]
    },
    {
        "title": "Ενότητα 3: Αγορές και καθημερινότητα",
        "lessons": [{"lesson": 1, "title": "Στο σούπερ μάρκετ", "grammar": ["Αιτιατική πτώση"], "vocabulary": ["Τρόφιμα", "Τιμές"], "teacher_notes": "cando: \"Αγορές αγαθών\""}]
    },
    {
        "title": "Ενότητα 4: Υγεία και σώμα",
        "lessons": [{"lesson": 1, "title": "Στον γιατρό", "grammar": ["Υποτακτική έγκλιση"], "vocabulary": ["Σώμα", "Υγεία"], "teacher_notes": "cando: \"Περιγραφή συμπτωμάτων\""}]
    },
    {
        "title": "Ενότητα 5: Σπίτι και διαμονή",
        "lessons": [{"lesson": 1, "title": "Ενοικίαση σπιτιού", "grammar": ["Τοπικές προθέσεις"], "vocabulary": ["Σπίτι", "Έπιπλα"], "teacher_notes": "cando: \"Αναζήτηση κατοικίας\""}]
    },
    {
        "title": "Ενότητα 6: Εργασία και μέλλον",
        "lessons": [{"lesson": 1, "title": "Επαγγέλματα", "grammar": ["Συνεχής και Στιγμιαίος Μέλλοντας"], "vocabulary": ["Εργασία", "Καριέρα"], "teacher_notes": "cando: \"Σχέδια για το μέλλον\""}]
    }
]

# Greek B1 additions
el_b1_add = [
    {
        "title": "Ενότητα 2: Παθητική Φωνή",
        "lessons": [{"lesson": 1, "title": "Ρήματα παθητικής φωνής", "grammar": ["Κλίση παθητικής φωνής"], "vocabulary": ["Κοινωνία", "Ειδήσεις"], "teacher_notes": "cando: \"Χρήση παθητικής φωνής\""}]
    },
    {
        "title": "Ενότητα 3: Έκφραση γνώμης",
        "lessons": [{"lesson": 1, "title": "Πιστεύω ότι...", "grammar": ["Aιτιολογικές και Αποτελεσματικές προτάσεις"], "vocabulary": ["Διάλογος", "Γνώμη"], "teacher_notes": "cando: \"Έκφραση προσωπικής άποψης\""}]
    },
    {
        "title": "Ενότητα 4: Περιβάλλον και τεχνολογία",
        "lessons": [{"lesson": 1, "title": "Προστασία της φύσης", "grammar": ["Υποθετικοί λόγοι"], "vocabulary": ["Φύση", "Ανακύκλωση"], "teacher_notes": "cando: \"Συζήτηση για το περιβάλλον\""}]
    },
    {
        "title": "Ενότητα 5: Πολιτισμός και τέχνες",
        "lessons": [{"lesson": 1, "title": "Θέατρο και κινηματογράφος", "grammar": ["Αναφορικές προτάσεις"], "vocabulary": ["Τέχνη", "Μουσική"], "teacher_notes": "cando: \"Κριτική ταινίας\""}]
    },
    {
        "title": "Ενότητα 6: Επαγγελματική ζωή",
        "lessons": [{"lesson": 1, "title": "Συνέντευξη για δουλειά", "grammar": ["Πλάγιος λόγος"], "vocabulary": ["Βιογραφικό", "Συνέντευξη"], "teacher_notes": "cando: \"Συμμετοχή σε συνέντευξη\""}]
    }
]

expand_file("curriculum/fr/general/A2.json", fr_a2_add)
expand_file("curriculum/fr/general/B1.json", fr_b1_add)

expand_file("curriculum/it/general/A2.json", it_a2_add)
expand_file("curriculum/it/general/B1.json", it_b1_add)

expand_file("curriculum/ru/general/A2.json", ru_a2_add)
expand_file("curriculum/ru/general/B1.json", ru_b1_add)

expand_file("curriculum/el/general/A2.json", el_a2_add)
expand_file("curriculum/el/general/B1.json", el_b1_add)
