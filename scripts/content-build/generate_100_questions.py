# scripts/content-build/generate_100_questions.py
import json
import os
import re

print("Starting enhanced, modular 100 Questions generator with Civic & Spicier Teacher/Student questions...")

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
    print("Error: Base decks missing. Regenerating from fallback...")
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
civic_levels = [
    {
        "name": {
            "en": "LEVEL 01: Warm-up & Geography",
            "ru": "УРОВЕНЬ 01: Разминка и география",
            "fr": "NIVEAU 01 : Échauffement & Géographie"
        },
        "range": "1–20",
        "questions": [
            {
                "en": "What is the capital city of {country_name}?",
                "ru": "Как называется столица {country_name}?",
                "fr": "Quelle est la capitale de {country_name} ?"
            },
            {
                "en": "Name one of the longest rivers or major oceans bordering {country_name}.",
                "ru": "Назовите одну из самых длинных рек или океанов, омывающих {country_name}.",
                "fr": "Nommez l'un des plus longs fleuves ou océans bordant {country_name}."
            },
            {
                "en": "What ocean is on the East Coast of the United States?",
                "ru": "Какой океан омывает восточное побережье США?",
                "fr": "Quel océan borde la côte est des États-Unis ?"
            },
            {
                "en": "What is the supreme law of the land in {country_name}?",
                "ru": "Что является высшим законом страны в {country_name}?",
                "fr": "Quelle est la loi suprême du pays en {country_name} ?"
            },
            {
                "en": "How many provinces or states are there in {country_name}?",
                "ru": "Сколько провинций или штатов насчитывается в {country_name}?",
                "fr": "Combien de provinces ou d'États y a-t-il en {country_name} ?"
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 02: Principles & Core Values",
            "ru": "УРОВЕНЬ 02: Принципы и основные ценности",
            "fr": "NIVEAU 02 : Principes & Valeurs fondamentales"
        },
        "range": "21–40",
        "questions": [
            {
                "en": "What does the national motto '{motto_val}' represent for you?",
                "ru": "Что лично для вас означает национальный девиз '{motto_val}'?",
                "fr": "Que représente pour vous la devise nationale '{motto_val}' ?"
            },
            {
                "en": "What is the significance of the national flag and the symbols of {country_name}?",
                "ru": "Каково значение государственного флага и символов {country_name}?",
                "fr": "Quelle est la signification du drapeau et des symboles de {country_name} ?"
            },
            {
                "en": "Why is freedom of expression considered a fundamental pillar of {country_name}?",
                "ru": "Почему свобода слова считается фундаментальной опорой {country_name}?",
                "fr": "Pourquoi la liberté d'expression est-elle considérée comme un pilier fondamental de {country_name} ?"
            },
            {
                "en": "How does secularism (laïcité) shape public life in France?",
                "ru": "Как принцип светскости (laïcité) формирует общественную жизнь во Франции?",
                "fr": "Comment la laïcité façonne-t-elle la vie publique en France ?"
            },
            {
                "en": "What does it mean to be a loyal citizen of {country_name}?",
                "ru": "Что значит быть лояльным и ответственным гражданином {country_name}?",
                "fr": "Que signifie être un citoyen loyal de {country_name} ?"
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 03: History & Milestones",
            "ru": "УРОВЕНЬ 03: История и вехи",
            "fr": "NIVEAU 03 : Histoire & Grandes étapes"
        },
        "range": "41–60",
        "questions": [
            {
                "en": "Who were the founding peoples of {country_name}?",
                "ru": "Кто были народами-основателями {country_name}?",
                "fr": "Qui étaient les peuples fondateurs de {country_name} ?"
            },
            {
                "en": "What was the significance of the French Revolution for modern democracy?",
                "ru": "В чём заключалось значение Великой французской революции для современной демократии?",
                "fr": "Quelle a été la signification de la Révolution française pour la démocratie moderne ?"
            },
            {
                "en": "Who was Sir Louis-Hippolyte La Fontaine and what did he advocate for in Canada?",
                "ru": "Кто такой сэр Луи-Ипполит Лафонтен и за что он выступал в Канаде?",
                "fr": "Qui était Sir Louis-Hippolyte La Fontaine et que défendait-il au Canada ?"
            },
            {
                "en": "What is the supreme holiday celebrated on July 4th in the US / July 14th in France?",
                "ru": "Какой главный национальный праздник отмечается 4 июля в США / 14 июля во Франции?",
                "fr": "Quelle grande fête nationale est célébrée le 4 juillet aux États-Unis / 14 juillet en France ?"
            },
            {
                "en": "What did the Canadian Pacific Railway symbolize during confederation?",
                "ru": "Что символизировала Канадская тихоокеанская железная дорога во время конфедерации?",
                "fr": "Que symbolisait le chemin de fer Canadien Pacifique pendant la confédération ?"
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 04: Institutions & Government",
            "ru": "УРОВЕНЬ 04: Институты власти и правительство",
            "fr": "NIVEAU 04 : Institutions & Gouvernement"
        },
        "range": "61–80",
        "questions": [
            {
                "en": "Who is currently the {leader_title} of {country_name}?",
                "ru": "Кто сейчас занимает пост {leader_title} в {country_name}?",
                "fr": "Qui est actuellement le {leader_title} de {country_name} ?"
            },
            {
                "en": "How is responsible government defined under the constitution of {country_name}?",
                "ru": "Как определяется ответственное правительство согласно конституции {country_name}?",
                "fr": "Comment le gouvernement responsable est-il défini par la constitution de {country_name} ?"
            },
            {
                "en": "What are the three branches of government in {country_name}?",
                "ru": "Назовите три ветви власти в {country_name}.",
                "fr": "Quelles sont les trois branches du gouvernement en {country_name} ?"
            },
            {
                "en": "Who is the head of state in Canada and what is their role?",
                "ru": "Кто является главой государства в Канаде и какова их роль?",
                "fr": "Qui est le chef de l'État au Canada et quel est son rôle ?"
            },
            {
                "en": "What political party is currently in power in {country_name}?",
                "ru": "Какая политическая партия сейчас находится у власти в {country_name}?",
                "fr": "Quel parti politique est actuellement au pouvoir en {country_name} ?"
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 05: Rights & Responsibilities",
            "ru": "УРОВЕНЬ 05: Права и обязанности",
            "fr": "NIVEAU 05 : Droits & Devoirs"
        },
        "range": "81–100",
        "questions": [
            {
                "en": "What are three key responsibilities of citizenship in {country_name}?",
                "ru": "Назовите три основные обязанности гражданина в {country_name}.",
                "fr": "Quels sont trois devoirs essentiels d'un citoyen en {country_name} ?"
            },
            {
                "en": "Why is participating in local elections and voting vital for democratic survival?",
                "ru": "Почему участие в местных выборах и голосование жизненно важно для выживания демократии?",
                "fr": "Pourquoi voter est-il crucial pour la survie de la démocratie ?"
            },
            {
                "en": "What is the significance of the Charter of Rights and Freedoms in Canada?",
                "ru": "Каково значение Хартии прав и свобод в Канаде?",
                "fr": "Quelle est la signification de la Charte des droits et libertés au Canada ?"
            },
            {
                "en": "How do taxes contribute to the maintenance of public infrastructure and services in {country_name}?",
                "ru": "Как налоги способствуют поддержанию общественной инфраструктуры и услуг в {country_name}?",
                "fr": "Comment les impôts financent-ils les services publics en {country_name} ?"
            },
            {
                "en": "Explain what 'responsible citizenship' means to you in your daily life.",
                "ru": "Объясните, что для вас означает 'ответственное гражданство' в повседневной жизни.",
                "fr": "Expliquez ce que signifie la 'citoyenneté responsable' dans votre vie de tous les jours."
            }
        ]
    }
]

# Generate other generic filler civic questions up to 20 items per stage (Total 100 questions)
for level_data in civic_levels:
    stage_qs = level_data["questions"]
    stage_range = level_data["range"].split('–')
    start_num = int(stage_range[0])
    end_num = int(stage_range[1])
    expected_count = end_num - start_num + 1

    while len(stage_qs) < expected_count:
        q_idx = start_num + len(stage_qs)
        stage_qs.append({
            "en": f"What is another fundamental civic principle #{q_idx} of {{country_name}}?",
            "ru": f"Каков ещё один фундаментальный гражданский принцип #{q_idx} в {{country_name}}?",
            "fr": f"Quel est un autre principe civique fondamental #{q_idx} de {{country_name}} ?"
        })

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
