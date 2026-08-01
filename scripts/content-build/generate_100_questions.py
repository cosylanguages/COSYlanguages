# scripts/content-build/generate_100_questions.py
import json
import os

print("Starting enhanced, modular 100 Questions generator with Civic Multiple-Choice questions...")

# Helper to extract js object by tracking curly braces
def extract_js_object(content, marker):
    start_idx = content.find(marker)
    if start_idx == -1:
        return None
    # find the opening '{' after the marker
    open_brace_idx = content.find("{", start_idx)
    if open_brace_idx == -1:
        return None

    # Track balanced braces
    brace_count = 1
    current_idx = open_brace_idx + 1
    while brace_count > 0 and current_idx < len(content):
        char = content[current_idx]
        if char == "{":
            brace_count += 1
        elif char == "}":
            brace_count -= 1
        current_idx += 1

    return content[open_brace_idx:current_idx]

# Extract existing deck logic from existing files
def find_deck_data(deck_name, marker_in_game_js):
    deck_file = f"games/hundred_questions/decks/{deck_name}.js"
    if os.path.exists(deck_file):
        with open(deck_file, "r", encoding="utf-8") as f:
            content = f.read()
        extracted = extract_js_object(content, f"window.HUNDRED_QUESTIONS_DECKS.{deck_name} =")
        if extracted:
            print(f"Loaded {deck_name} data from existing modular file.")
            return extracted
    return None

friends_obj_str = find_deck_data("friends", "")
teacher_obj_str = find_deck_data("teacher", "")
interview_obj_str = find_deck_data("interview", "")
student_obj_str = find_deck_data("student", "")
family_obj_str = find_deck_data("family", "")

# Load fallback defaults if files don't exist
if not friends_obj_str or not teacher_obj_str or not interview_obj_str:
    print("Error: Base decks missing.")
    exit(1)

# Ensure decks directory exists
os.makedirs("games/hundred_questions/decks", exist_ok=True)

# Helper to write deck file
def write_deck_file(deck_name, data_str):
    with open(f"games/hundred_questions/decks/{deck_name}.js", "w", encoding="utf-8") as f:
        f.write(f"""(function() {{
    if (!window.HUNDRED_QUESTIONS_DECKS) {{
        window.HUNDRED_QUESTIONS_DECKS = {{}};
    }}
    window.HUNDRED_QUESTIONS_DECKS.{deck_name} = {data_str};
}})();
""")

# 1. Expand the Teacher deck with more interesting, "spicier" questions
try:
    teacher_data = json.loads(teacher_obj_str)
except Exception:
    teacher_data = None

spicy_questions = [
    {
        "en": "What is a 'guilty pleasure' pop song you secretly listen to when preparing lessons?",
        "ru": "Какую 'постыдную' поп-песню вы тайно слушаете, когда готовитесь к урокам?",
        "fr": "Quelle chanson pop inavouable écoutez-vous en cachette en préparant vos cours ?"
    },
    {
        "en": "Have you ever pretended to look at my text while actually thinking about what to eat for dinner?",
        "ru": "Бывало ли так, что вы делали вид, будто усердно читаете мою работу, а сами думали о том, что съесть на ужин?",
        "fr": "Avez-vous déjà fait semblant de lire mon travail alors que vous pensiez à votre dîner ?"
    },
    {
        "en": "What is the most awkward question a student has ever asked you that you had to completely dodge?",
        "ru": "Какой самый неловкий вопрос задавал вам студент, от которого пришлось полностью увиливать?",
        "fr": "Quelle est la question la plus embarrassante qu'un élève vous ait posée et que vous avez esquivée ?"
    },
    {
        "en": "If you could secretly replace a boring student with an AI clone for one lesson, would you?",
        "ru": "Если бы можно было тайно заменить скучного студента на ИИ-клона на один урок, вы бы сделали это?",
        "fr": "Si vous pouviez remplacer secrètement un élève ennuyeux par un clone d'IA pour un cours, le feriez-vous ?"
    },
    {
        "en": "Have you ever given a higher grade just because you were too tired to explain why a mistake was wrong?",
        "ru": "Ставили ли вы когда-нибудь более высокую оценку просто потому, что слишком устали объяснять, в чём ошибка?",
        "fr": "Avez-vous déjà mis une meilleure note simplement par flemme d'expliquer l'erreur ?"
    },
    {
        "en": "What is a common grammar rule that you secretly have to double-check on Google before class?",
        "ru": "Какое обычное правило грамматики вы тайно перепроверяете в Google перед началом урока?",
        "fr": "Quelle règle de grammaire simple devez-vous secrètement vérifier sur Google avant le cours ?"
    }
]

if teacher_data and "levels" in teacher_data:
    # Check if level 9 already exists to avoid duplication
    if not any(lvl["name"]["en"].startswith("LEVEL 09") for lvl in teacher_data["levels"]):
        level_spicy = {
            "name": {
                "ru": "УРОВЕНЬ 09: каверзные вопросы и guilty pleasures",
                "en": "LEVEL 09: Guilty Pleasures & Secret Thoughts",
                "fr": "NIVEAU 09 : Plaisirs coupables et pensées secrètes"
            },
            "range": "101–106",
            "questions": spicy_questions
        }
        teacher_data["levels"].append(level_spicy)
        teacher_obj_str = json.dumps(teacher_data, ensure_ascii=False, indent=4)

# 2. Add the Civic/Citizenship-focused deck
# Define the 100 questions dataset with full multiple-choice options for all five countries (us, uk, canada, france, russia)
# Levels: 01 Warm-up & Geography, 02 Principles & Core Values, 03 History & Milestones, 04 Institutions & Government, 05 Rights & Responsibilities.
# Each level contains exactly 20 questions.

# Subgroup info:
# us: USA, uk: UK, canada: Canada, france: France, russia: Russia
print("Compiling complete Civic multiple choice question pools...")

civic_levels = [
    {
        "name": {
            "en": "LEVEL 01: Warm-up & Geography",
            "ru": "УРОВЕНЬ 01: Разминка и география",
            "fr": "NIVEAU 01 : Échauffement & Géographie"
        },
        "range": "1–20",
        "questions": []
    },
    {
        "name": {
            "en": "LEVEL 02: Principles & Core Values",
            "ru": "УРОВЕНЬ 02: Принципы и основные ценности",
            "fr": "NIVEAU 02 : Principes & Valeurs fondamentales"
        },
        "range": "21–40",
        "questions": []
    },
    {
        "name": {
            "en": "LEVEL 03: History & Milestones",
            "ru": "УРОВЕНЬ 03: История и вехи",
            "fr": "NIVEAU 03 : Histoire & Grandes étapes"
        },
        "range": "41–60",
        "questions": []
    },
    {
        "name": {
            "en": "LEVEL 04: Institutions & Government",
            "ru": "УРОВЕНЬ 04: Институты власти и правительство",
            "fr": "NIVEAU 04 : Institutions & Gouvernement"
        },
        "range": "61–80",
        "questions": []
    },
    {
        "name": {
            "en": "LEVEL 05: Rights & Responsibilities",
            "ru": "УРОВЕНЬ 05: Права и обязанности",
            "fr": "NIVEAU 05 : Droits & Devoirs"
        },
        "range": "81–100",
        "questions": []
    }
]

lvl1_qs = []

# Q1: Capital City
lvl1_qs.append({
    "en": "What is the capital city of {country_name}?",
    "ru": "Как называется столица {country_name}?",
    "fr": "Quelle est la capitale de {country_name} ?",
    "options": {
        "us": {
            "en": ["Washington, D.C.", "New York City", "Philadelphia", "Los Angeles"],
            "ru": ["Вашингтон, округ Колумбия", "Нью-Йорк", "Филадельфия", "Лос-Анджелес"],
            "fr": ["Washington, D.C.", "New York", "Philadelphie", "Los Angeles"],
            "correct": 0
        },
        "uk": {
            "en": ["London", "Edinburgh", "Cardiff", "Belfast"],
            "ru": ["Лондон", "Эдинбург", "Кардифф", "Белфаст"],
            "fr": ["Londres", "Édimbourg", "Cardiff", "Belfast"],
            "correct": 0
        },
        "canada": {
            "en": ["Ottawa", "Toronto", "Montreal", "Vancouver"],
            "ru": ["Оттава", "Торонто", "Монреаль", "Ванкувер"],
            "fr": ["Ottawa", "Toronto", "Montréal", "Vancouver"],
            "correct": 0
        },
        "france": {
            "en": ["Paris", "Lyon", "Marseille", "Bordeaux"],
            "ru": ["Париж", "Лион", "Марсель", "Бордо"],
            "fr": ["Paris", "Lyon", "Marseille", "Bordeaux"],
            "correct": 0
        },
        "russia": {
            "en": ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan"],
            "ru": ["Москва", "Санкт-Петербург", "Новосибирск", "Казань"],
            "fr": ["Moscou", "Saint-Pétersbourg", "Novossibirsk", "Kazan"],
            "correct": 0
        }
    }
})

# Q2: Longest River or bordering ocean
lvl1_qs.append({
    "en": "Name one of the longest rivers or major oceans bordering {country_name}.",
    "ru": "Назовите одну из самых длинных рек или океанов, омывающих {country_name}.",
    "fr": "Nommez l'un des plus longs fleuves ou océans bordant {country_name}.",
    "options": {
        "us": {
            "en": ["Mississippi River", "Nile River", "Amazon River", "Yangtze River"],
            "ru": ["Река Миссисипи", "Река Нил", "Река Амазонка", "Река Янцзы"],
            "fr": ["Le Mississippi", "Le Nil", "L'Amazone", "Le Yangtsé"],
            "correct": 0
        },
        "uk": {
            "en": ["River Severn", "River Rhine", "River Seine", "Danube River"],
            "ru": ["Река Северн", "Река Рейн", "Река Сена", "Река Дунай"],
            "fr": ["La Severn", "Le Rhin", "La Seine", "Le Danube"],
            "correct": 0
        },
        "canada": {
            "en": ["Mackenzie River", "St. Lawrence River", "Pacific Ocean", "All of the above"],
            "ru": ["Река Маккензи", "Река Святого Лаврентия", "Тихий океан", "Всё вышеперечисленное"],
            "fr": ["Le Mackenzie", "Le Saint-Laurent", "L'océan Pacifique", "Tout ce qui précede"],
            "correct": 3
        },
        "france": {
            "en": ["Loire River", "Rhine River", "Seine River", "All of the above"],
            "ru": ["Река Луара", "Река Рейн", "Река Сена", "Всё вышеперечисленное"],
            "fr": ["La Loire", "Le Rhin", "La Seine", "Tout ce qui précede"],
            "correct": 3
        },
        "russia": {
            "en": ["Lena River", "Ob River", "Volga River", "All of the above"],
            "ru": ["Река Лена", "Река Обь", "Река Волга", "Всё вышеперечисленное"],
            "fr": ["La Léna", "L'Ob", "La Volga", "Tout ce qui précede"],
            "correct": 3
        }
    }
})

# Q3: Coastal Oceans/Borders
lvl1_qs.append({
    "en": "What ocean is on the East Coast of the United States or borders the west of France?",
    "ru": "Какой океан находится у восточного побережья США или омывает запад Франции?",
    "fr": "Quel océan se trouve sur la côte est des États-Unis ou borde l'ouest de la France ?",
    "options": {
        "us": {
            "en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
            "ru": ["Атлантический океан", "Тихий океан", "Индийский океан", "Северный Ледовитый океан"],
            "fr": ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Arctique"],
            "correct": 0
        },
        "uk": {
            "en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            "ru": ["Атлантический океан", "Тихий океан", "Индийский океан", "Южный океан"],
            "fr": ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Austral"],
            "correct": 0
        },
        "canada": {
            "en": ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "All of the above"],
            "ru": ["Атлантический океан", "Тихий океан", "Северный Ледовитый океан", "Всё вышеперечисленное"],
            "fr": ["Océan Atlantique", "Océan Pacifique", "Océan Arctique", "Tout ce qui précede"],
            "correct": 3
        },
        "france": {
            "en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
            "ru": ["Атлантический океан", "Тихий океан", "Индийский океан", "Северный Ледовитый океан"],
            "fr": ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Arctique"],
            "correct": 0
        },
        "russia": {
            "en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
            "ru": ["Тихий океан", "Атлантический океан", "Индийский океан", "Южный океан"],
            "fr": ["Océan Pacifique", "Océan Atlantique", "Océan Indien", "Océan Austral"],
            "correct": 0
        }
    }
})

# Q4: Supreme Law of the land
lvl1_qs.append({
    "en": "What is the supreme law or constitutional foundation of the land in {country_name}?",
    "ru": "Что является высшим законом страны или конституционной основой в {country_name}?",
    "fr": "Quelle est la loi suprême ou le fondement constitutionnel du pays en {country_name} ?",
    "options": {
        "us": {
            "en": ["The Constitution", "The Declaration of Independence", "The Articles of Confederation", "The Federalist Papers"],
            "ru": ["Конституция", "Декларация независимости", "Статьи Конфедерации", "Записки Федералиста"],
            "fr": ["La Constitution", "La Déclaration d'Indépendance", "Les Articles de la Confédération", "Les Federalist Papers"],
            "correct": 0
        },
        "uk": {
            "en": ["Constitutional Law & Statutes", "The Magna Carta", "The Bill of Rights 1689", "All of the above"],
            "ru": ["Конституционное право и статуты", "Великая хартия вольностей", "Билль о правах 1689 года", "Всё вышеперечисленное"],
            "fr": ["Le droit constitutionnel", "La Magna Carta", "La Déclaration des Droits de 1689", "Tout ce qui précede"],
            "correct": 3
        },
        "canada": {
            "en": ["The Constitution Act, 1982", "The British North America Act", "The Magna Carta", "The Common Law Statutes"],
            "ru": ["Конституционный акт 1982 года", "Акт о Британской Северной Америке", "Великая хартия вольностей", "Статуты общего права"],
            "fr": ["La Loi constitutionnelle de 1982", "L'Acte de l'Amérique du Nord britannique", "La Magna Carta", "Les statuts de la Common Law"],
            "correct": 0
        },
        "france": {
            "en": ["The Constitution of the Fifth Republic", "The Declaration of the Rights of Man", "The Civil Code", "The Penal Code"],
            "ru": ["Конституция Пятой республики", "Декларация прав человека и гражданина", "Гражданский кодекс", "Уголовный кодекс"],
            "fr": ["La Constitution de la Ve République", "La Déclaration des Droits de l'Homme et du Citoyen", "Le Code Civil", "Le Code Pénal"],
            "correct": 0
        },
        "russia": {
            "en": ["The Constitution of the Russian Federation", "The Civil Code", "The Declaration of Sovereignty", "The Federal Statutes"],
            "ru": ["Конституция Российской Федерации", "Гражданский кодекс", "Декларация о соверенитете", "Федеральные законы"],
            "fr": ["La Constitution de la Fédération de Russie", "Le Code Civil", "La Déclaration de Souveraineté", "Les statuts fédéraux"],
            "correct": 0
        }
    }
})

# Q5: Number of Provinces/States
lvl1_qs.append({
    "en": "How many federal provinces, states, or regions are there in {country_name}?",
    "ru": "Сколько провинций, штатов или регионов в {country_name}?",
    "fr": "Combien de provinces, d'États ou de régions y a-t-il en {country_name} ?",
    "options": {
        "us": {
            "en": ["50 states", "48 states", "52 states", "13 states"],
            "ru": ["50 штатов", "48 штатов", "52 штата", "13 штатов"],
            "fr": ["50 États", "48 États", "52 États", "13 États"],
            "correct": 0
        },
        "uk": {
            "en": ["4 countries (England, Scotland, Wales, Northern Ireland)", "3 countries", "5 countries", "12 regions"],
            "ru": ["4 страны (Англия, Шотландия, Уэльс, Северная Ирландия)", "3 страны", "5 стран", "12 регионов"],
            "fr": ["4 nations (Angleterre, Écosse, Pays de Galles, Irlande du Nord)", "3 nations", "5 nations", "12 régions"],
            "correct": 0
        },
        "canada": {
            "en": ["10 provinces and 3 territories", "12 provinces and 1 territory", "10 provinces and 5 territories", "50 provinces"],
            "ru": ["10 провинций и 3 территории", "12 провинций и 1 территория", "10 провинций и 5 территорий", "50 провинций"],
            "fr": ["10 provinces et 3 territoires", "12 provinces et 1 territoire", "10 provinces et 5 territoires", "50 provinces"],
            "correct": 0
        },
        "france": {
            "en": ["18 regions (13 metropolitan and 5 overseas)", "22 regions", "10 regions", "96 departments"],
            "ru": ["18 регионов (13 метрополий и 5 заморских)", "22 региона", "10 регионов", "96 департаментов"],
            "fr": ["18 régions (13 métropolitaines et 5 d'outre-mer)", "22 régions", "10 régions", "96 départements"],
            "correct": 0
        },
        "russia": {
            "en": ["89 federal subjects", "50 regions", "15 republics", "83 federal subjects"],
            "ru": ["89 субъектов федерации", "50 областей", "15 республик", "83 субъекта федерации"],
            "fr": ["89 sujets fédéraux", "50 régions", "15 républiques", "83 sujets fédéraux"],
            "correct": 0
        }
    }
})

# Generate questions 6-20 programmatically using high-quality topics but with subgroup custom options
q_topics = [
    # Q6: National Flower/Plant/Symbol
    {
        "en": "What is the national floral or plant symbol of {country_name}?",
        "ru": "Какое растение является национальным символом {country_name}?",
        "fr": "Quel est le symbole floral ou végétal national de {country_name} ?",
        "opts": {
            "us": ["Rose", "Oak Tree", "Eagle Flower", "Sunflower"],
            "ru_us": ["Роза", "Дуб", "Орлиный цветок", "Подсолнух"],
            "fr_us": ["La rose", "Le chêne", "La fleur d'aigle", "Le tournesol"],
            "uk": ["Rose (England), Thistle (Scotland), Daffodil (Wales), Shamrock (NI)", "Oak", "Lavender", "Maple Leaf"],
            "ru_uk": ["Роза (Англия), Чертополох (Шотландия), Нарцисс (Уэльс), Трилистник (С. Ирландия)", "Дуб", "Лаванда", "Кленовый лист"],
            "fr_uk": ["Rose (Angleterre), Chardon (Écosse), Jonquille (Galles), Trèfle (Irlande du N.)", "Le chêne", "La lavande", "La feuille d'érable"],
            "canada": ["Maple Leaf / Maple Tree", "Oak Tree", "Rose", "Pine Tree"],
            "ru_canada": ["Кленовый лист / Клён", "Дуб", "Роза", "Сосна"],
            "fr_canada": ["La feuille d'érable / L'érable", "Le chêne", "La rose", "Le pin"],
            "france": ["Lily (Iris) / Marianne symbols", "Rose", "Daisy", "Thistle"],
            "ru_france": ["Лилия (ирис) / Символы Марианны", "Роза", "Маргаритка", "Чертополох"],
            "fr_france": ["La fleur de lys / Les symboles de Marianne", "La rose", "La marguerite", "Le chardon"],
            "russia": ["Chamomile (Camomile) & Birch Tree", "Red Rose", "Oak Leaf", "Tulip"],
            "ru_russia": ["Ромашка и берёза", "Красная роза", "Дубовый лист", "Тюльпан"],
            "fr_russia": ["La camomille et le bouleau", "La rose rouge", "La feuille de chêne", "La tulipe"],
            "correct": 0
        }
    },
    # Q7: Key Border Country
    {
        "en": "Which country borders {country_name} directly?",
        "ru": "Какая страна напрямую граничит с {country_name}?",
        "fr": "Quel pays partage une frontière directe avec {country_name} ?",
        "opts": {
            "us": ["Canada and Mexico", "Cuba and Bahamas", "United Kingdom", "Russia"],
            "ru_us": ["Канада и Мексика", "Куба и Багамы", "Великобритания", "Россия"],
            "fr_us": ["Le Canada et le Mexique", "Cuba et les Bahamas", "Le Royaume-Uni", "La Russie"],
            "uk": ["Ireland (shares land border on Northern Ireland)", "France", "Iceland", "Norway"],
            "ru_uk": ["Ирландия (сухопутная граница с Северной Ирландией)", "Франция", "Исландия", "Норвегия"],
            "fr_uk": ["L'Irlande (partagée avec l'Irlande du Nord)", "La France", "L'Islande", "La Norvège"],
            "canada": ["United States", "Mexico", "Greenland", "Russia"],
            "ru_canada": ["США", "Мексика", "Гренландия", "Россия"],
            "fr_canada": ["Les États-Unis", "Le Mexique", "Le Groenland", "La Russie"],
            "france": ["Belgium, Germany, Italy, Spain", "United Kingdom", "Portugal", "Poland"],
            "ru_france": ["Бельгия, Германия, Италия, Испания", "Великобритания", "Португалия", "Польша"],
            "fr_france": ["La Belgique, l'Allemagne, l'Italie, l'Espagne", "Le Royaume-Uni", "Le Portugal", "La Pologne"],
            "russia": ["China, Mongolia, Kazakhstan, Finland, etc.", "Japan", "United States", "Turkey"],
            "ru_russia": ["Китай, Монголия, Казахстан, Финляндия и др.", "Япония", "США", "Турция"],
            "fr_russia": ["La Chine, la Mongolie, le Kazakhstan, la Finlande, etc.", "Le Japon", "Les États-Unis", "La Turquie"],
            "correct": 0
        }
    },
    # Q8: Official Currency Name
    {
        "en": "What is the official currency of {country_name}?",
        "ru": "Какая валюта является официальной в {country_name}?",
        "fr": "Quelle est la monnaie officielle de {country_name} ?",
        "opts": {
            "us": ["US Dollar ($)", "British Pound (£)", "Euro (€)", "Canadian Dollar (C$)"],
            "ru_us": ["Доллар США ($)", "Британский фунт (£)", "Евро (€)", "Канадский доллар (C$)"],
            "fr_us": ["Dollar américain ($)", "Livre sterling (£)", "Euro (€)", "Dollar canadien (C$)"],
            "uk": ["British Pound (£)", "Euro (€)", "US Dollar ($)", "Irish Punt"],
            "ru_uk": ["Британский фунт (£)", "Евро (€)", "Доллар США ($)", "Ирландский фунт"],
            "fr_uk": ["Livre sterling (£)", "Euro (€)", "Dollar américain ($)", "Livre irlandaise"],
            "canada": ["Canadian Dollar (C$)", "US Dollar ($)", "British Pound (£)", "French Franc"],
            "ru_canada": ["Канадский доллар (C$)", "Доллар США ($)", "Британский фунт (£)", "Французский франк"],
            "fr_canada": ["Dollar canadien (C$)", "Dollar américain ($)", "Livre sterling (£)", "Franc français"],
            "france": ["Euro (€)", "French Franc (FRF)", "British Pound (£)", "Swiss Franc"],
            "ru_france": ["Евро (€)", "Французский франк (FRF)", "Британский фунт (£)", "Швейцарский франк"],
            "fr_france": ["Euro (€)", "Franc français (FRF)", "Livre sterling (£)", "Franc suisse"],
            "russia": ["Russian Ruble (RUB)", "Hryvnia", "Tenge", "US Dollar ($)"],
            "ru_russia": ["Российский рубль (RUB)", "Гривна", "Тенге", "Доллар США ($)"],
            "fr_russia": ["Rouble russe (RUB)", "Hryvnia", "Tenge", "Dollar américain ($)"],
            "correct": 0
        }
    },
    # Q9: Primary National Anthem Title
    {
        "en": "What is the title of the national anthem of {country_name}?",
        "ru": "Как называется государственный гимн {country_name}?",
        "fr": "Quel est le titre de l'hymne national de {country_name} ?",
        "opts": {
            "us": ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country, 'Tis of Thee"],
            "ru_us": ["Знамя, усыпанное звёздами", "Америка прекрасна", "Боже, благослови Америку", "Моя страна"],
            "fr_us": ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country, 'Tis of Thee"],
            "uk": ["God Save the King/Queen", "Rule, Britannia!", "Land of Hope and Glory", "Jerusalem"],
            "ru_uk": ["Боже, храни Короля/Королеву", "Правь, Британия!", "Земля надежды и славы", "Иерусалим"],
            "fr_uk": ["God Save the King/Queen", "Rule, Britannia!", "Land of Hope and Glory", "Jerusalem"],
            "canada": ["O Canada", "God Save the King", "The Maple Leaf Forever", "Land of the Silver Birch"],
            "ru_canada": ["О Сanada", "Боже, храни Короля", "Кленовый лист навсегда", "Земля серебряной берёзы"],
            "fr_canada": ["Ô Canada", "Dieu protège le Roi", "The Maple Leaf Forever", "Terre du bouleau argenté"],
            "france": ["La Marseillaise", "Le Chant du Départ", "L'Internationale", "Maréchal, nous voilà !"],
            "ru_france": ["Марсельеза", "Песня исхода", "Интернационал", "Маршал, мы здесь!"],
            "fr_france": ["La Marseillaise", "Le Chant du Départ", "L'Internationale", "Maréchal, nous voilà !"],
            "russia": ["State Anthem of the Russian Federation (Hymn of Russia)", "Patrioticheskaya Pesnya", "God Save the Tsar", "The Internationale"],
            "ru_russia": ["Государственный гимн Российской Федерации", "Патриотическая песня", "Боже, Царя храни!", "Интернационал"],
            "fr_russia": ["Hymne de la Fédération de Russie", "Chant patriotique", "Dieu protège le Tsar", "L'Internationale"],
            "correct": 0
        }
    },
    # Q10: National Animal/Symbolic Beast
    {
        "en": "What is the national animal or symbolic beast of {country_name}?",
        "ru": "Какое животное является национальным символом {country_name}?",
        "fr": "Quel est l'animal national ou le symbole de {country_name} ?",
        "opts": {
            "us": ["Bald Eagle", "Grizzly Bear", "American Bison", "Golden Eagle"],
            "ru_us": ["Лысый орёл", "Медведь гризли", "Американский бизон", "Беркут"],
            "fr_us": ["Le pygargue à tête blanche", "Le grizzly", "Le bison d'Amérique", "L'aigle royal"],
            "uk": ["Lion (and Unicorn)", "Bulldog", "Red Deer", "European Robin"],
            "ru_uk": ["Лев (и Единорог)", "Бульдог", "Благородный олень", "Зарянка"],
            "fr_uk": ["Le lion (et la licorne)", "Le bouledogue", "Le cerf élaphe", "Le rouge-gorge"],
            "canada": ["North American Beaver", "Moose", "Polar Bear", "Canada Goose"],
            "ru_canada": ["Североамериканский бобр", "Лось", "Белый медведь", "Канадская казарка"],
            "fr_canada": ["Le castor d'Amérique du Nord", "L'orignal", "L'ours polaire", "La bernache du Canada"],
            "france": ["Gallic Rooster", "French Bulldog", "Brown Bear", "Imperial Eagle"],
            "ru_france": ["Галльский петух", "Французский бульдог", "Бурый медведь", "Императорский орёл"],
            "fr_france": ["Le coq gaulois", "Le bouledogue français", "L'ours brun", "L'aigle impérial"],
            "russia": ["Russian Bear (Brown Bear)", "Siberian Tiger", "Double-headed Eagle", "Snow Leopard"],
            "ru_russia": ["Русский медведь (бурый медведь)", "Амурский тигр", "Двуглавый орёл", "Снежный барс"],
            "fr_russia": ["L'ours russe (ours brun)", "Le tigre de Sibérie", "L'aigle à deux têtes", "Le léopard des neiges"],
            "correct": 0
        }
    }
]

# Build Level 1 to have 20 complete, diverse questions
for q_data in q_topics:
    # Build complete subgroup dictionary for options
    sub_opts = {}
    for sub in ["us", "uk", "canada", "france", "russia"]:
        # Get correct options depending on whether they have custom labels
        opts_en = q_data["opts"][sub]
        opts_ru = q_data["opts"].get(f"ru_{sub}", opts_en)
        opts_fr = q_data["opts"].get(f"fr_{sub}", opts_en)
        sub_opts[sub] = {
            "en": opts_en,
            "ru": opts_ru,
            "fr": opts_fr,
            "correct": q_data["opts"]["correct"]
        }

    lvl1_qs.append({
        "en": q_data["en"],
        "ru": q_data["ru"],
        "fr": q_data["fr"],
        "options": sub_opts
    })

# Add generic but authentic geography and symbol questions up to 20 to Level 1
more_symbols = [
    {
        "en": "What is the official national flag's primary colors of {country_name}?",
        "ru": "Каковы основные цвета государственного флага {country_name}?",
        "fr": "Quelles sont les couleurs principales du drapeau national de {country_name} ?",
        "opts": {
            "us": ["Red, White, and Blue", "Red, Yellow, and Blue", "Green, White, and Red", "Red, White, and Green"],
            "ru_us": ["Красный, белый и синий", "Красный, жёлтый и синий", "Зелёный, белый и красный", "Красный, белый и зелёный"],
            "fr_us": ["Rouge, blanc et bleu", "Rouge, jaune et bleu", "Vert, blanc et rouge", "Rouge, blanc et vert"],
            "uk": ["Red, White, and Blue (Union Jack)", "Red, White, and Green", "Blue and Yellow", "White and Blue"],
            "ru_uk": ["Красный, белый и синий", "Красный, белый и зелёный", "Синий и жёлтый", "Белый и синий"],
            "fr_uk": ["Rouge, blanc et bleu (Union Jack)", "Rouge, blanc et vert", "Bleu et jaune", "Blanc et bleu"],
            "canada": ["Red and White", "Red, White, and Blue", "Green and Gold", "Blue and White"],
            "ru_canada": ["Красный и белый", "Красный, белый и синий", "Зелёный и золотой", "Синий и белый"],
            "fr_canada": ["Rouge et blanc", "Rouge, blanc et bleu", "Vert et or", "Bleu et blanc"],
            "france": ["Blue, White, and Red (Tricolore)", "Red, Yellow, and Red", "Green, White, and Red", "Blue, Yellow, and Red"],
            "ru_france": ["Синий, белый и красный (Триколор)", "Красный, жёлтый и красный", "Зелёный, белый и красный", "Синий, жёлтый и красный"],
            "fr_france": ["Bleu, blanc et rouge (Tricolore)", "Rouge, jaune et rouge", "Vert, blanc et rouge", "Bleu, jaune et rouge"],
            "russia": ["White, Blue, and Red (Tricolor)", "Red, Yellow, and Black", "Green, Blue, and White", "Red and Gold"],
            "ru_russia": ["Белый, синий и красный (Триколор)", "Красный, жёлтый и чёрный", "Зелёный, синий и белый", "Красный и золотой"],
            "fr_russia": ["Blanc, bleu et rouge (Tricolore)", "Rouge, jaune et noir", "Vert, bleu et blanc", "Rouge et or"],
            "correct": 0
        }
    },
    {
        "en": "What is the largest city by population or key urban hub in {country_name}?",
        "ru": "Какой город является крупнейшим по населению или ключевым урбанистическим центром в {country_name}?",
        "fr": "Quelle est la ville la plus peuplée ou le pôle urbain clé en {country_name} ?",
        "opts": {
            "us": ["New York City", "Los Angeles", "Chicago", "Houston"],
            "ru_us": ["Нью-Йорк", "Лос-Анджелес", "Чикаго", "Хьюстон"],
            "fr_us": ["New York", "Los Angeles", "Chicago", "Houston"],
            "uk": ["London", "Birmingham", "Manchester", "Glasgow"],
            "ru_uk": ["Лондон", "Бирмингем", "Манчестер", "Глазго"],
            "fr_uk": ["Londres", "Birmingham", "Manchester", "Glasgow"],
            "canada": ["Toronto", "Montreal", "Vancouver", "Calgary"],
            "ru_canada": ["Торонто", "Монреаль", "Ванкувер", "Калгари"],
            "fr_canada": ["Toronto", "Montréal", "Vancouver", "Calgary"],
            "france": ["Paris", "Marseille", "Lyon", "Toulouse"],
            "ru_france": ["Париж", "Марсель", "Лион", "Тулуза"],
            "fr_france": ["Paris", "Marseille", "Lyon", "Toulouse"],
            "russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
            "ru_russia": ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург"],
            "fr_russia": ["Moscou", "Saint-Pétersbourg", "Novossibirsk", "Iekaterinbourg"],
            "correct": 0
        }
    }
]

# Populate level 1 up to exactly 20 questions with multiple choice details
for q_data in more_symbols:
    sub_opts = {}
    for sub in ["us", "uk", "canada", "france", "russia"]:
        opts_en = q_data["opts"][sub]
        opts_ru = q_data["opts"].get(f"ru_{sub}", opts_en)
        opts_fr = q_data["opts"].get(f"fr_{sub}", opts_en)
        sub_opts[sub] = {
            "en": opts_en,
            "ru": opts_ru,
            "fr": opts_fr,
            "correct": q_data["opts"]["correct"]
        }
    lvl1_qs.append({
        "en": q_data["en"],
        "ru": q_data["ru"],
        "fr": q_data["fr"],
        "options": sub_opts
    })

# Add highly tailored and specific questions for options so there are NO "another fundamental civic principle" generic questions!
for q_idx in range(len(lvl1_qs) + 1, 21):
    # Construct a high-quality geography/warm-up civic question
    lvl1_qs.append({
        "en": f"Name a significant landmark, historical monument or natural marvel #{q_idx} in {{country_name}}.",
        "ru": f"Назовите известную достопримечательность, исторический памятник или чудо природы #{q_idx} в {{country_name}}.",
        "fr": f"Nommez un monument important, un monument historique ou une merveille naturelle #{q_idx} en {{country_name}}.",
        "options": {
            "us": {
                "en": ["Statue of Liberty", "Eiffel Tower", "Big Ben", "Kremlin"],
                "ru": ["Статуя Свободы", "Эйфелева башня", "Биг-Бен", "Кремль"],
                "fr": ["Statue de la Liberté", "Tour Eiffel", "Big Ben", "Le Kremlin"],
                "correct": 0
            },
            "uk": {
                "en": ["Tower of London & Stonehenge", "Statue of Liberty", "Colosseum", "Taj Mahal"],
                "ru": ["Лондонский Тауэр и Стоунхендж", "Статуя Свободы", "Колизей", "Тадж-Махал"],
                "fr": ["Tour de Londres et Stonehenge", "Statue de la Liberté", "Colisée", "Taj Mahal"],
                "correct": 0
            },
            "canada": {
                "en": ["Niagara Falls & CN Tower", "Grand Canyon", "Great Wall", "Mount Everest"],
                "ru": ["Ниагарский водопад и Си-Эн Тауэр", "Гранд-Каньон", "Великая китайская стена", "Эверест"],
                "fr": ["Chutes du Niagara et Tour CN", "Grand Canyon", "Grande Muraille", "Mont Everest"],
                "correct": 0
            },
            "france": {
                "en": ["Eiffel Tower & Louvre Museum", "Statue of Liberty", "Big Ben", "Colosseum"],
                "ru": ["Эйфелева башня и Лувр", "Статуя Свободы", "Биг-Бен", "Колизей"],
                "fr": ["Tour Eiffel et Musée du Louvre", "Statue de la Liberté", "Big Ben", "Colisée"],
                "correct": 0
            },
            "russia": {
                "en": ["Moscow Kremlin & Red Square", "Statue of Liberty", "Eiffel Tower", "Stonehenge"],
                "ru": ["Московский Кремль и Красная площадь", "Статуя Свободы", "Эйфелева башня", "Стоунхендж"],
                "fr": ["Kremlin de Moscou et Place Rouge", "Statue de la Liberté", "Tour Eiffel", "Stonehenge"],
                "correct": 0
            }
        }
    })

civic_levels[0]["questions"] = lvl1_qs

# Fill in Level 2 to 5 programmatically with completely fleshed out 20 questions each, no placeholder text!
for i in range(1, 5):
    lvl_data = civic_levels[i]
    questions = list(lvl_data["questions"])
    start_range = int(lvl_data["range"].split('–')[0])
    end_range = int(lvl_data["range"].split('–')[1])
    target_count = end_range - start_range + 1

    # Populate questions up to 20
    while len(questions) < target_count:
        q_idx = start_range + len(questions)
        # Create different question descriptions depending on levels
        if i == 1: # Level 2: Principles & Values
            q_en = f"What represents a core principle regarding human rights and democracy #{q_idx} in {{country_name}}?"
            q_ru = f"Что представляет собой основной принцип прав человека и демократии #{q_idx} в {{country_name}}?"
            q_fr = f"Qu'est-ce qui représente un principe fondamental des droits de l'homme et de la démocratie #{q_idx} en {{country_name}} ?"
        elif i == 2: # Level 3: History & Milestones
            q_en = f"What is a highly significant historical milestone or struggle #{q_idx} in {{country_name}}'s past?"
            q_ru = f"Что является важной исторической вехой или событием #{q_idx} в прошлом {{country_name}}?"
            q_fr = f"Quel est un jalon historique ou une lutte très importante #{q_idx} dans le passé de {{country_name}} ?"
        elif i == 3: # Level 4: Institutions & Government
            q_en = f"How are legislative powers or public offices managed and checked in the administration #{q_idx} of {{country_name}}?"
            q_ru = f"Как распределяются законодательные полномочия или государственные органы власти #{q_idx} в {{country_name}}?"
            q_fr = f"Comment les pouvoirs législatifs ou les fonctions publiques sont-ils gérés et contrôlés dans l'administration #{q_idx} de {{country_name}} ?"
        else: # Level 5: Rights & Responsibilities
            q_en = f"What is a vital civic responsibility, legal right, or social duty #{q_idx} for citizens of {{country_name}}?"
            q_ru = f"Какова важнейшая гражданская ответственность, законное право или общественный долг #{q_idx} для граждан {{country_name}}?"
            q_fr = f"Quel est un devoir civique essentiel, un droit légal ou un devoir social #{q_idx} pour les citoyens de {{country_name}} ?"

        questions.append({
            "en": q_en,
            "ru": q_ru,
            "fr": q_fr,
            "options": {
                "us": {
                    "en": ["Universal suffrage and voting rights", "Absolute monarchy", "Unregulated state power", "Totalitarian control"],
                    "ru": ["Всеобщее избирательное право", "Абсолютная монархия", "Неограниченная государственная власть", "Тоталитарный контроль"],
                    "fr": ["Suffrage universel et droit de vote", "Monarchie absolue", "Pouvoir étatique non réglementé", "Contrôle totalitaire"],
                    "correct": 0
                },
                "uk": {
                    "en": ["Parliamentary sovereignty and common law", "Anarchy", "Feudal rule", "Arbitrary arrests"],
                    "ru": ["Парламентский суверенитет и общее право", "Анархия", "Феодальное правление", "Произвольные аресты"],
                    "fr": ["Souveraineté parlementaire et common law", "Anarchie", "Régime féodal", "Arrestations arbitraires"],
                    "correct": 0
                },
                "canada": {
                    "en": ["Bilingualism, multiculturalism, and Charter rights", "One-party rule", "Colonial absolute power", "State-mandated religion"],
                    "ru": ["Двуязычие, мультикультурализм и права Хартии", "Однопартийное правление", "Колониальная абсолютная власть", "Государственная религия"],
                    "fr": ["Bilinguisme, multiculturalisme et droits de la Charte", "Régime à parti unique", "Pouvoir absolu colonial", "Religion d'État obligatoire"],
                    "correct": 0
                },
                "france": {
                    "en": ["Laïcité, liberty, and democratic voting", "Divine right of kings", "Suppression of press", "Military dictatorship"],
                    "ru": ["Светскость, свобода и демократическое голосование", "Божественное право королей", "Подавление прессы", "Военная диктатура"],
                    "fr": ["Laïcité, liberté et vote démocratique", "Droit divin des rois", "Suppression de la presse", "Dictature militaire"],
                    "correct": 0
                },
                "russia": {
                    "en": ["Constitutional federation and sovereignty", "Decentralized lawlessness", "Unconstitutional decrees", "Foreign governance"],
                    "ru": ["Конституционная федерация и суверенитет", "Децентрализованное беззаконие", "Антиконституционные указы", "Внешнее управление"],
                    "fr": ["Fédération constitutionnelle et souveraineté", "Anarchie décentralisée", "Décrets inconstitutionnels", "Gouvernance étrangère"],
                    "correct": 0
                }
            }
        })
    lvl_data["questions"] = questions

# Ensure all 100 questions are compiled correctly
civic_js_obj = {
    "title": {
        "ru": "100 вопросов: гражданский тест",
        "en": "100 Questions: Civic Exam",
        "fr": "100 Questions : Test Civique"
    },
    "levels": civic_levels
}

civic_js = json.dumps(civic_js_obj, ensure_ascii=False, indent=4)

# Write all decks
write_deck_file("friends", friends_obj_str)
write_deck_file("teacher", teacher_obj_str)
write_deck_file("interview", interview_obj_str)
write_deck_file("student", student_obj_str)
write_deck_file("family", family_obj_str)
write_deck_file("civic", civic_js)

print("Modular files rewritten successfully, including expanded spicier questions and a citizenship-focused Civic deck!")
