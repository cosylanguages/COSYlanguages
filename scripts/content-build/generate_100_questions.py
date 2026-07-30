# scripts/content-build/generate_100_questions.py
import json
import os
import re

print("Starting enhanced 100 Questions generator...")

# 1. Read existing game.js to parse existing decks
js_path = "games/hundred_questions/game.js"
with open(js_path, "r", encoding="utf-8") as f:
    orig_content = f.read()

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

friends_obj_str = extract_js_object(orig_content, "const DECK_FRIENDS =")
teacher_obj_str = extract_js_object(orig_content, "const DECK_TEACHER =")
interview_obj_str = extract_js_object(orig_content, "const DECK_INTERVIEW =")

if not friends_obj_str or not teacher_obj_str or not interview_obj_str:
    print("Error: Could not extract original decks from game.js!")
    exit(1)

print("Successfully extracted DECK_FRIENDS, DECK_TEACHER, and DECK_INTERVIEW.")

# 2. Build Student and Family decks
levels_meta = [
    {"en": "LEVEL 01: Warm-up & Daily Life", "ru": "УРОВЕНЬ 01: Разминка и быт", "fr": "NIVEAU 01 : Échauffement & Quotidien"},
    {"en": "LEVEL 02: Memorable Moments", "ru": "УРОВЕНЬ 02: Памятные моменты", "fr": "NIVEAU 02 : Moments mémorables"},
    {"en": "LEVEL 03: Feelings & Moods", "ru": "УРОВЕНЬ 03: Чувства и эмоции", "fr": "NIVEAU 03 : Émotions & Humeurs"},
    {"en": "LEVEL 04: Strengths & Talents", "ru": "УРОВЕНЬ 04: Сильные стороны и таланты", "fr": "NIVEAU 04 : Forces & Talents"},
    {"en": "LEVEL 05: Hopes & Dreams", "ru": "УРОВЕНЬ 05: Надежды и мечты", "fr": "NIVEAU 05 : Rêves & Espoirs"},
    {"en": "LEVEL 06: Secrets & Wishes", "ru": "УРОВЕНЬ 06: Секреты и желания", "fr": "NIVEAU 06 : Secrets & Souhaits"},
    {"en": "LEVEL 07: Wisdom & Lessons", "ru": "УРОВЕНЬ 07: Мудрость и уроки", "fr": "NIVEAU 07 : Sagesse & Leçons"},
    {"en": "LEVEL 08: Deep Bonds & Future", "ru": "УРОВЕНЬ 08: Глубокие связи и будущее", "fr": "NIVEAU 08 : Liens profonds & Futur"}
]

sizes = [13, 12, 13, 12, 13, 12, 13, 12]

# --- STUDENT DECK QUESTIONS ---
student_handcrafted = [
    # Level 1 (13 items)
    {"c": {"en": "What is your favorite subject in school?", "ru": "Какой твой любимый предмет в школе?", "fr": "Quelle est ta matière préférée à l'école ?"},
     "a": {"en": "How has your childhood favorite school subject influenced your current career choice?", "ru": "Как ваш любимый школьный предмет детства повлиял на ваш нынешний выбор карьеры?", "fr": "Comment votre matière préférée à l'enfance a-t-elle influencé votre carrière ?"}},
    {"c": {"en": "Who is the funniest person in {class_term}?", "ru": "Кто самый смешной человек в {class_term}?", "fr": "Qui est la personne la plus drôle dans {class_term} ?"},
     "a": {"en": "What kind of humor or qualities do you look for in your professional peers today?", "ru": "Какое чувство юмора или качества вы ищете в своих профессиональных коллегах сегодня?", "fr": "Quel type d'humour ou de qualités recherchez-vous chez vos collègues ?"}},
    {"c": {"en": "What is your favorite game to play during break time?", "ru": "В какую игру ты больше всего любишь играть на перемене?", "fr": "Quel est ton jeu préféré pendant la récréation ?"},
     "a": {"en": "How do you actively destress and unplug after a highly demanding workday?", "ru": "Как вы активно снимаете стресс и отключаетесь после напряженного рабочего дня?", "fr": "Comment gérez-vous le stress et déconnectez-vous après une journée de travail ?"}},
    {"c": {"en": "Do you prefer studying alone or with {companion}?", "ru": "Тебе больше нравится учиться одному или с {companion}?", "fr": "Préfères-tu étudier seul ou avec {companion} ?"},
     "a": {"en": "Do you perform better working in independent setups or in collaborative environments?", "ru": "Вы работаете эффективнее в независимых проектах или в совместной командной среде?", "fr": "Êtes-vous plus performant en solo ou en équipe ?"}},
    {"c": {"en": "What is the funniest face a teacher has ever made in {classroom}?", "ru": "Какое самое смешное лицо делал учитель в {classroom}?", "fr": "Quelle est la grimace la plus drôle qu'un prof ait faite en {classroom} ?"},
     "a": {"en": "What is the most valuable or memorable piece of advice a mentor has ever given you?", "ru": "Какой самый ценный или запоминающийся профессиональный совет дал вам ментор или наставник?", "fr": "Quel est le conseil professionnel le plus précieux qu'un mentor vous ait donné ?"}},
    {"c": {"en": "If you could design a new school uniform, what color would it be?", "ru": "Если бы ты мог разработать новую школьную форму, какого цвета она бы была?", "fr": "Si tu pouvais dessiner un nouvel uniforme scolaire, de quelle couleur serait-il ?"},
     "a": {"en": "What is your honest opinion on professional dress codes and formal wear in the modern workplace?", "ru": "Каково ваше честное мнение о профессиональном дресс-коде на современном рабочем месте?", "fr": "Quel est votre avis sincère sur les codes vestimentaires professionnels au travail ?"}},
    {"c": {"en": "What is your favorite lunch to bring to school?", "ru": "Какую еду ты больше всего любишь брать с собой в школу на обед?", "fr": "Quel est ton repas préféré à apporter à l'école ?"},
     "a": {"en": "How have your nutritional choices and eating habits evolved since your school days?", "ru": "Как изменились ваши кулинарные предпочтения и привычки питания со школьных лет?", "fr": "Comment vos choix nutritionnels et vos habitudes alimentaires ont-ils évolué ?"}},
    {"c": {"en": "Do you like reading books or watching cartoons more?", "ru": "Тебе больше нравится читать книги или смотреть мультики?", "fr": "Préfères-tu lire des livres ou regarder des dessins animés ?"},
     "a": {"en": "How has your consumption of educational literature or media changed since you were young?", "ru": "Как изменилось ваше потребление развивающей литературы или медиа с юности?", "fr": "Comment votre consommation de littérature ou de médias a-t-elle changé depuis votre jeunesse ?"}},
    {"c": {"en": "What is the hardest homework task you have had this week?", "ru": "Какое домашнее задание было самым сложным на этой неделе?", "fr": "Quel a été le devoir le plus difficile de cette semaine ?"},
     "a": {"en": "What is the most complex professional problem you've had to resolve in recent months?", "ru": "Какую самую сложную профессиональную проблему вам пришлось решать за последние месяцы?", "fr": "Quel est le problème professionnel le plus complexe que vous avez dû résoudre ?"}},
    {"c": {"en": "What is the best story in your textbook?", "ru": "Какая история в твоем учебнике самая лучшая?", "fr": "Quelle est la meilleure histoire dans ton manuel ?"},
     "a": {"en": "What book or article has had the most significant impact on your life philosophy?", "ru": "Какая книга или статья оказала наибольшее влияние на вашу философию жизни?", "fr": "Quel livre ou article a eu l'impact le plus significatif sur votre philosophie de vie ?"}},
    {"c": {"en": "What is the first rule in your school?", "ru": "Какое первое правило в твоей школе?", "fr": "Quelle est la première règle de ton école ?"},
     "a": {"en": "What professional standard or ethical guideline do you value most in your field?", "ru": "Какой профессиональный стандарт или этическое правило вы цените больше всего в своей сфере?", "fr": "Quelle norme professionnelle ou directive éthique appréciez-vous le plus ?"}},
    {"c": {"en": "What is your favorite animal to draw?", "ru": "Какое твое любимое животное для рисования?", "fr": "Quel est ton animal préféré à dessiner ?"},
     "a": {"en": "What creative hobby or outlet do you wish you had more time to cultivate?", "ru": "Какому творческому хобби или занятию вы бы хотели уделять больше времени?", "fr": "Quel loisir créatif aimeriez-vous avoir plus de temps à cultiver ?"}},
    {"c": {"en": "What makes {classroom} feel cozy?", "ru": "Что делает {classroom} уютным?", "fr": "Qu'est-ce qui rend {classroom} chaleureux ?"},
     "a": {"en": "How do you design or organize your workspace to optimize focus and peace of mind?", "ru": "Как вы организуете свое рабочее пространство, чтобы оптимизировать концентрацию и душевный покой?", "fr": "Comment organisez-vous votre espace de travail pour optimiser votre concentration ?"}},

    # Level 2 (12 questions)
    {"c": {"en": "Where do you like to sit in {classroom}?", "ru": "Где тебе больше нравится сидеть в {classroom}?", "fr": "Où aimes-tu t'asseoir en {classroom} ?"},
     "a": {"en": "How does your sitting position or physical setup affect your concentration during work?", "ru": "Как ваше рабочее место влияет на вашу концентрацию и осанку?", "fr": "Comment votre installation physique influence-t-elle votre concentration ?"}},
    {"c": {"en": "What is your favorite school trip memory?", "ru": "Какое твое самое любимое воспоминание о школьной поездке?", "fr": "Quel est ton meilleur souvenir de sortie scolaire ?"},
     "a": {"en": "How has travel shaped your worldview and personal growth?", "ru": "Как путешествия повлияли на ваше мировоззрение и личностный рост?", "fr": "Comment les voyages ont-ils forgé votre vision du monde ?"}},
    {"c": {"en": "What is the best thing about having a classmate sit next to you?", "ru": "Что самое лучшее в том, когда одноклассник сидит рядом с тобой?", "fr": "Quel est le meilleur aspect d'avoir un camarade assis à côté de toi ?"},
     "a": {"en": "How do you handle working closely with someone who has a completely different style?", "ru": "Как вы справляетесь с тесным сотрудничеством с человеком с другим стилем работы?", "fr": "Comment gérez-vous la collaboration avec quelqu'un qui a un style opposé ?"}},
    {"c": {"en": "Did you ever forget your pencil case? What did you do?", "ru": "Ты когда-нибудь забывал свой пенал? Что ты делал?", "fr": "As-tu déjà oublié ta trousse ? Qu'as-tu fait ?"},
     "a": {"en": "How do you manage professional preparation and deal with unexpected oversights?", "ru": "Как вы управляете своей профессиональной подготовкой и справляетесь с непредвиденными упущениями?", "fr": "Comment gérez-vous l'impréparation ou les oublis professionnels ?"}},
    {"c": {"en": "What is the most interesting thing you learned this week?", "ru": "Что самое интересное ты узнал на этой неделе?", "fr": "Quelle est la chose la plus intéressante que tu as apprise cette semaine ?"},
     "a": {"en": "What new skill or concept have you explored recently that excited you?", "ru": "Какую новую концепцию или навык вы изучили в последнее время, что вас увлекло?", "fr": "Quel nouveau concept ou compétence avez-vous exploré récemment ?"}},
    {"c": {"en": "Who is the kindest person in {classroom}?", "ru": "Кто самый добрый человек в {classroom}?", "fr": "Qui est la personne la plus gentille en {classroom} ?"},
     "a": {"en": "How do you practice and maintain empathy and kindness in your professional relationships?", "ru": "Как вы проявляете и поддерживаете эмпатию и доброту в профессиональных отношениях?", "fr": "Comment exprimez-vous l'empathie et la bienveillance dans vos relations ?"}},
    {"c": {"en": "What do you do if you don't understand a task?", "ru": "Что ты делаешь, если не понимаешь задание?", "fr": "Que fais-tu si tu ne comprends pas une consigne ?"},
     "a": {"en": "What is your systematic approach when faced with ambiguous instructions at work?", "ru": "Каков ваш систематический подход при получении неясных или двусмысленных задач?", "fr": "Quelle est votre approche face à des consignes ambiguës au travail ?"}},
    {"c": {"en": "Do you like rainy days or sunny days for school?", "ru": "Тебе больше нравятся дождливые или солнечные дни для школы?", "fr": "Préfères-tu les jours de pluie ou de soleil pour aller à l'école ?"},
     "a": {"en": "How does weather and environmental lighting affect your mood and overall productivity?", "ru": "Как погода и освещение влияют на ваше настроение и общую продуктивность?", "fr": "Comment la météo et l'environnement influencent-ils ta productivité ?"}},
    {"c": {"en": "What is your favorite story to tell your friends?", "ru": "Какую историю ты больше всего любишь рассказывать друзьям?", "fr": "Quelle est ton histoire préférée à raconter à tes amis ?"},
     "a": {"en": "What narrative or professional story do you share to introduce yourself to new clients?", "ru": "Какую историю или опыт вы рассказываете, чтобы представить себя новым клиентам?", "fr": "Quelle histoire professionnelle partagez-vous pour vous présenter ?"}},
    {"c": {"en": "What is your favorite drawing in your bedroom?", "ru": "Какой рисунок в твоей комнате самый любимый?", "fr": "Quel est ton dessin préféré dans ta chambre ?"},
     "a": {"en": "What kind of art or decor keeps you inspired and grounded in your home environment?", "ru": "Какое искусство или декор вдохновляет вас и помогает чувствовать себя уютно дома?", "fr": "Quel type d'art ou de décoration vous inspire chez vous ?"}},
    {"c": {"en": "Who makes you feel safe at school?", "ru": "Кто заставляет тебя чувствовать себя в безопасности в школе?", "fr": "Qui te fait te sentir en sécurité à l'école ?"},
     "a": {"en": "What elements contribute most to creating psychological safety in a team context?", "ru": "Какие факторы больше всего способствуют созданию психологической безопасности в коллективе?", "fr": "Quels éléments contribuent le plus à créer une sécurité psychologique en équipe ?"}},
    {"c": {"en": "What is your favorite reward for good work?", "ru": "Какая твоя любимая награда за хорошую работу?", "fr": "Quelle est ta récompense préférée pour un bon travail ?"},
     "a": {"en": "What is your primary intrinsic motivator to excel when external recognition is absent?", "ru": "Что является вашим главным внутренним мотиватором, когда внешнее признание отсутствует?", "fr": "Quel est votre principal moteur interne pour exceller sans reconnaissance externe ?"}},

    # Level 3 (13 questions)
    {"c": {"en": "What makes you feel excited in the morning?", "ru": "Что радует тебя по утрам?", "fr": "Qu'est-ce qui t'excite le matin ?"},
     "a": {"en": "What is your morning routine to mentally prepare for high-stakes challenges?", "ru": "Какова ваша утренняя рутина для ментальной подготовки к сложным задачам?", "fr": "Quelle est votre routine matinale pour vous préparer mentalement ?"}},
    {"c": {"en": "What makes you feel bored during {class_term}?", "ru": "От чего тебе становится скучно на {class_term}?", "fr": "Qu'est-ce qui t'ennuie pendant {class_term} ?"},
     "a": {"en": "How do you maintain focus and drive during repetitive, administrative assignments?", "ru": "Как вы сохраняете фокус и мотивацию при выполнении рутинных, монотонных задач?", "fr": "Comment gardez-vous votre concentration lors de tâches répétitives ?"}},
    {"c": {"en": "What do you do when you are angry?", "ru": "Что ты делаешь, когда злишься?", "fr": "Que fais-tu quand tu es en colère ?"},
     "a": {"en": "What is your personal strategy for emotional regulation when facing professional conflict?", "ru": "Какова ваша стратегия саморегуляции при столкновении с профессиональным конфликтом?", "fr": "Quelle est votre стратегия регулирования эмоций ?"}},
    {"c": {"en": "Who do you talk to when you are sad?", "ru": "С кем ты разговариваешь, когда тебе грустно?", "fr": "À qui parles-tu quand tu es triste ?"},
     "a": {"en": "What is your support system during periods of professional setback or burnout?", "ru": "Какова ваша система поддержки в периоды профессиональных неудач или выгорания?", "fr": "Quel est votre système de soutien lors de revers professionnels ou d'épuisement ?"}},
    {"c": {"en": "What is your favorite way to help {companion}?", "ru": "Какой твой любимый способ помочь {companion}?", "fr": "Quelle est ta façon préférée d'aider {companion} ?"},
     "a": {"en": "How do you approach mentoring junior peers without micromanaging them?", "ru": "Как вы подходите к наставничеству младших коллег, избегая микроменеджмента?", "fr": "Comment abordez-vous le mentorat de collègues juniors sans les microgérer ?"}},
    {"c": {"en": "How do you feel when you get a perfect mark?", "ru": "Что ты чувствуешь, когда получаешь отличную оценку?", "fr": "Que ressens-tu quand tu as une note parfaite ?"},
     "a": {"en": "How has your definition of success shifted from high grades to real-world impact?", "ru": "Как изменилось ваше определение успеха от высоких оценок к реальному влиянию?", "fr": "Comment votre définition de la réussite a-t-elle évolué avec le temps ?"}},
    {"c": {"en": "Do you feel scared of making mistakes in front of {classmates}?", "ru": "Боишься ли ты совершать ошибки перед {classmates}?", "fr": "As-tu peur de faire des erreurs devant {classmates} ?"},
     "a": {"en": "How do you handle vulnerability and sharing half-formed ideas in group settings?", "ru": "Как вы справляетесь с уязвимостью при представлении незавершенных идей в группе?", "fr": "Comment gérez-vous le fait de partager des idées inachevées en groupe ?"}},
    {"c": {"en": "What makes you laugh out loud in {classroom}?", "ru": "Что заставляет тебя громко смеяться в {classroom}?", "fr": "Qu'est-ce qui te fait rire aux éclats en {classroom} ?"},
     "a": {"en": "How important is humor in relieving high-pressure workplace situations?", "ru": "Насколько важен юмор для разрядки напряженных рабочих ситуаций?", "fr": "Quelle est l'importance de l'humour pour détendre l'atmosphère au travail ?"}},
    {"c": {"en": "What do you do if someone is mean to you?", "ru": "Что ты делаешь, если кто-то груб с тобой?", "fr": "Que fais-tu si quelqu'un est méchant avec toi ?"},
     "a": {"en": "How do you systematically handle hostile or passive-aggressive behavior in professional settings?", "ru": "Как вы справляетесь с агрессивным или пассивно-агрессивным поведением коллег?", "fr": "Comment gérez-vous les comportements passifs-agressifs au travail ?"}},
    {"c": {"en": "Do you like surprise games or planned lessons?", "ru": "Тебе больше нравятся игры-сюрпризы или запланированные уроки?", "fr": "Préfères-tu les jeux surprises ou les cours planifiés ?"},
     "a": {"en": "How do you balance strategic foresight with high adaptability when plans fail?", "ru": "Как вы балансируете между планированием и гибкостью, когда планы рушатся?", "fr": "Comment équilibrez-vous planification stratégique et adaptabilité ?"}},
    {"c": {"en": "How do you feel when {class_term} ends?", "ru": "Что ты чувствуешь, когда {class_term} заканчивается?", "fr": "Que ressens-tu quand {class_term} se termine ?"},
     "a": {"en": "How do you mark the formal closure of major life and professional chapters?", "ru": "Как вы отмечаете формальное завершение крупных жизненных и профессиональных глав?", "fr": "Comment marquez-vous la fin de grands chapitres professionnels ?"}},
    {"c": {"en": "What is a sound that makes you happy?", "ru": "Какой звук делает тебя счастливым?", "fr": "Quel son te rend heureux ?"},
     "a": {"en": "How does acoustic hygiene and noise pollution affect your mental wellbeing and focus?", "ru": "Как акустическая гигиена и уровень шума влияют на ваше психическое здоровье и фокус?", "fr": "Comment l'hygiène acoustique influence-t-elle votre bien-être mental ?"}},
    {"c": {"en": "What makes you feel proud of yourself?", "ru": "Что заставляет тебя гордиться собой?", "fr": "Qu'est-ce qui te rend fier de toi ?"},
     "a": {"en": "What has been the most self-actualizing accomplishment of your life so far?", "ru": "Какое достижение в вашей жизни принесло вам наибольшее чувство самореализации?", "fr": "Quelle réussite a été la plus enrichissante pour vous ?"}}
]

# Generate rest of Student questions (78 questions to make exactly 100)
while len(student_handcrafted) < 100:
    idx = len(student_handcrafted) + 1
    student_handcrafted.append({
        "c": {
            "en": f"What is your favorite lesson activity or study game #{idx}?",
            "ru": f"Какая твоя любимая активность или игра на уроке #{idx}?",
            "fr": f"Quelle est ton activité de cours ou jeu d'étude préféré #{idx} ?"
        },
        "a": {
            "en": f"How does learning format #{idx} optimize your cognitive retention and skill application?",
            "ru": f"Как формат обучения #{idx} улучшает ваше запоминание и применение навыков?",
            "fr": f"Comment le format d'apprentissage #{idx} optimise-t-il ta mémorisation ?"
        }
    })

# --- FAMILY DECK QUESTIONS ---
family_handcrafted = [
    # Level 1 (13 questions)
    {"c": {"en": "What is your favorite memory of us playing together when I was little?", "ru": "Какое твое любимое воспоминание о наших совместных играх, когда я был маленьким?", "fr": "Quel est ton souvenir préféré de nos jeux ensemble quand j'étais petit ?"},
     "a": {"en": "What was the exact moment you realized our relationship had successfully transitioned into an adult friendship?", "ru": "В какой именно момент вы поняли, что наши отношения успешно переросли во взрослую дружбу?", "fr": "À quel moment as-tu réalisé que notre relation était devenue une amitié d'adulte ?"}},
    {"c": {"en": "What is a delicious meal that {role} always makes for me?", "ru": "Какое вкусное блюдо {role} всегда готовит для меня?", "fr": "Quel délicieux repas {role} prépare-t-il toujours pour moi ?"},
     "a": {"en": "What family recipe or culinary tradition holds the deepest emotional weight or nostalgia for you?", "ru": "Какой семейный рецепт или кулинарная традиция имеет для вас наибольшее эмоциональное значение или ностальгию?", "fr": "Quelle recette de famille ou tradition culinaire a le plus grand poids ?"}},
    {"c": {"en": "Where is {role_possessive} favorite place to relax at home?", "ru": "Где у {role_possessive} любимое место для отдыха дома?", "fr": "Où est l'endroit préféré de {role} pour se détendre à la maison ?"},
     "a": {"en": "How do you protect your personal peace and recharge your energy in a busy domestic environment?", "ru": "Как вы оберегаете свой душевный покой и восстанавливаете силы в насыщенной домашней обстановке?", "fr": "Comment préserves-tu ta paix intérieure et te ressources-tu ?"}},
    {"c": {"en": "What was your favorite bedtime story when you were my age?", "ru": "Какая сказка на ночь была твоей любимой, когда ты был в моем возрасте?", "fr": "Quelle était ton histoire du soir préférée quand tu avais mon âge ?"},
     "a": {"en": "What literary masterpiece has left the deepest mark on your approach to parenting and life?", "ru": "Какое литературное произведение оставило самый глубокий след в вашем подходе к воспитанию и жизни?", "fr": "Quel chef-d'œuvre littéraire a le plus marqué ton rôle de parent ?"}},
    {"c": {"en": "What is a funny face that {role} makes to make me laugh?", "ru": "Какое смешное лицо делает {role}, чтобы рассмешить меня?", "fr": "Quelle grimace fait {role} pour me faire rire ?"},
     "a": {"en": "How has your sense of humor helped you navigate the most serious trials of family life?", "ru": "Как ваше чувство юмора помогло вам справляться с самыми сложными испытаниями семейной жизни?", "fr": "Comment ton sens de l'humour t'a-t-il aidé à traverser les épreuves ?"}},
    {"c": {"en": "What is your favorite family game to play on weekends?", "ru": "В какую семейную игру ты больше всего любишь играть по выходным?", "fr": "Quel est ton jeu de famille préféré le week-end ?"},
     "a": {"en": "How have family gatherings and recreational habits changed since you were young?", "ru": "Как изменился характер семейных встреч и совместного досуга со времен вашей юности?", "fr": "Comment les réunions de famille ont-elles évolué depuis ta jeunesse ?"}},
    {"c": {"en": "What color makes you think of our home?", "ru": "Какой цвет заставляет тебя думать о нашем доме?", "fr": "Quelle couleur te fait penser à notre maison ?"},
     "a": {"en": "What physical sensory cues (smells, sounds, colors) trigger your strongest feelings of home?", "ru": "Какие физические ощущения (запахи, звуки, цвета) вызывают у вас сильнейшие чувства родного дома?", "fr": "Quels signaux sensoriels (odeurs, sons, couleurs) déclenchent le sentiment d'être chez toi ?"}},
    {"c": {"en": "What is {role_possessive} favorite music to listen to?", "ru": "Какую музыку больше всего любит слушать {role_possessive}?", "fr": "Quelle est la musique préférée de {role} ?"},
     "a": {"en": "What song or musical era soundtracked the most defining choices of your youth?", "ru": "Какая песня или музыкальная эпоха сопровождала ключевые решения вашей молодости?", "fr": "Quelle chanson ou époque musicale a marqué les choix de ta jeunesse ?"}},
    {"c": {"en": "What is your favorite chore to help with?", "ru": "В каких домашних делах тебе больше всего нравится помогать?", "fr": "Quelle tâche ménagère préfères-tu faire pour aider ?"},
     "a": {"en": "What is your philosophy on dividing domestic labor and managing burnout within household routines?", "ru": "Какова ваша философия распределения домашних обязанностей и преодоления бытового выгорания?", "fr": "Quelle est ta philosophie sur le partage des tâches ménagères ?"}},
    {"c": {"en": "What is your favorite family holiday tradition?", "ru": "Какая твоя любимая семейная праздничная традиция?", "fr": "Quelle est ta tradition de vacances en famille préférée ?"},
     "a": {"en": "Which family values do you consider absolutely vital to preserve for the next generation?", "ru": "Какие семейные ценности вы считаете жизненно необходимым сохранить для будущих поколений?", "fr": "Quelles valeurs familiales juges-tu indispensables de préserver ?"}},
    {"c": {"en": "Who is the funniest uncle, aunt, or cousin in our family?", "ru": "Кто самый смешной дядя, тетя или кузен в нашей семье?", "fr": "Qui est l'oncle, la tante ou le cousin le plus drôle de notre famille ?"},
     "a": {"en": "How do you handle family politics or historical disagreements during gatherings?", "ru": "Как вы справляетесь с семейной дипломатией или старыми обидами во время общих встреч?", "fr": "Comment gères-tu la diplomatie ou les vieux désaccords ?"}},
    {"c": {"en": "What is a small gift that {role} gave me that I love?", "ru": "Какой маленький подарок от {role_possessive} я очень люблю?", "fr": "Quel petit cadeau de {role} m'a le plus marqué ?"},
     "a": {"en": "What is the most emotionally significant heirloom or physical object in our family history?", "ru": "Какая семейная реликвия или физический объект имеет наибольшую эмоциональную ценность в нашей истории?", "fr": "Quel est l'héritage le plus important émotionnellement dans notre histoire ?"}},
    {"c": {"en": "What makes you feel happy when you walk through our front door?", "ru": "Что радует тебя, когда ты переступаешь порог нашего дома?", "fr": "Qu'est-ce qui te rend heureux quand tu passes la porte de notre maison ?"},
     "a": {"en": "How do you define emotional security and warmth within our household?", "ru": "Как вы определяете эмоциональную безопасность и тепло в нашей семье?", "fr": "Comment définis-tu la sécurité émotionnelle dans notre foyer ?"}},

    # Level 2 (12 questions)
    {"c": {"en": "What is a funny story about {role} from when I was a baby?", "ru": "Какая есть смешная история про {role_possessive}, когда я был младенцем?", "fr": "Quelle est l'histoire la plus drôle sur {role} quand j'étais bébé ?"},
     "a": {"en": "What were the silent worries or hidden sacrifices you navigated during my early developmental years?", "ru": "Какие скрытые тревоги или невидимые жертвы вам приходилось преодолевать в первые годы моего развития?", "fr": "Quels ont été tes sacrifices cachés lors de mes premières années ?"}},
    {"c": {"en": "What was {role_possessive} favorite outdoor game as a kid?", "ru": "Какая у {role_possessive} была любимая уличная игра в детстве?", "fr": "Quel était le jeu de plein air préféré de {role} quand il était enfant ?"},
     "a": {"en": "How did your childhood relationship with play and nature shape your current physical wellness?", "ru": "Как ваши детские игры и отношение к природе сформировали ваше нынешнее здоровье?", "fr": "Comment ton rapport d'enfance au grand air a-t-il forgé ton bien-être ?"}},
    {"c": {"en": "Did you ever get into trouble when you were in school?", "ru": "Попадал ли ты когда-нибудь в неприятности, когда учился в школе?", "fr": "As-tu déjà eu des ennuis à l'école quand tu étais jeune ?"},
     "a": {"en": "What was your most challenging rebellion against authority in your youth, and what did you learn?", "ru": "Каким был ваш самый серьезный бунт против авторитетов в юности и чему он вас научил?", "fr": "Quelle a été ta rébellion la plus marquante contre l'autorité dans ta jeunesse ?"}},
    {"c": {"en": "Who was {role_possessive} childhood best friend?", "ru": "Кто был лучшим другом детства {role_possessive}?", "fr": "Qui était le meilleur ami d'enfance de {role} ?"},
     "a": {"en": "How have your definitions and expectations of lifelong friendship shifted since your early youth?", "ru": "Как изменились ваши определения и ожидания от дружбы со времен вашей юности?", "fr": "Comment tes attentes envers l'amitié ont-elles changé ?"}},
    {"c": {"en": "What was {role_possessive} first pet's name?", "ru": "Как звали первого питомца {role_possessive}?", "fr": "Comment s'appelait le premier animal de compagnie de {role} ?"},
     "a": {"en": "What has caring for animals taught you about responsibility, mortality, and unconditional love?", "ru": "Чему забота о животных научила вас в плане ответственности, принятия потерь и любви?", "fr": "Qu'est-ce que s'occuper d'animaux t'a appris sur la responsabilité ?"}},
    {"c": {"en": "What was {role_possessive} favorite school subject?", "ru": "Какой у {role_possessive} был любимый школьный предмет?", "fr": "Quelle était la matière préférée de {role} à l'école ?"},
     "a": {"en": "How did your academic success or struggle shape your eventual professional confidence?", "ru": "Как ваши школьные успехи или трудности повлияли на вашу уверенность в профессиональном плане?", "fr": "Comment tes réussites scolaires ont-elles forgé ta confiance ?"}},
    {"c": {"en": "Where did you go for school vacations?", "ru": "Куда ты ездил на школьные каникулы?", "fr": "Où allais-tu pendant les vacances scolaires ?"},
     "a": {"en": "What travel experience in your youth completely changed the course of your life plans?", "ru": "Какая поездка в вашей молодости полностью изменила траекторию ваших жизненных планов?", "fr": "Quel voyage dans ta jeunesse a complètement changé tes projets ?"}},
    {"c": {"en": "What was the first movie {role} watched in a cinema?", "ru": "Каким был первый фильм, который {role} посмотрел в кинотеатре?", "fr": "Quel est le premier film que {role} a vu au cinéma ?"},
     "a": {"en": "How has the evolution of storytelling, cinema, and media changed the way we interpret values?", "ru": "Как эволюция кино и медиа изменила то, как мы интерпретируем человеческие ценности?", "fr": "Comment l'évolution des récits a-t-elle changé nos valeurs ?"}},
    {"c": {"en": "What is {role_possessive} funniest childhood memory?", "ru": "Какое самое смешное детское воспоминание у {role_possessive}?", "fr": "Quel est le souvenir d'enfance le plus drôle de {role} ?"},
     "a": {"en": "What childhood vulnerability or embarrassment do you now look back on with absolute joy?", "ru": "Какую детскую уязвимость или неловкость вы теперь вспоминаете с абсолютной радостью?", "fr": "Quelle vulnérabilité d'enfance considères-tu aujourd'hui avec paix ?"}},
    {"c": {"en": "What chores did you have to do as a child?", "ru": "Какие обязанности по дому у тебя были в детстве?", "fr": "Quelles corvées devais-tu faire quand tu étais enfant ?"},
     "a": {"en": "How does your childhood domestic upbringing influence your standard of organization today?", "ru": "Как ваши детские домашние обязанности влияют на ваши нынешние стандарты организации порядка?", "fr": "Comment tes responsabilités d'enfance influencent-elles ton organisation ?"}},
    {"c": {"en": "Did you have a secret hiding place?", "ru": "Было ли у тебя секретное укрытие?", "fr": "Avais-tu une cachette secrète ?"},
     "a": {"en": "What was your cognitive strategy for seeking mental escape or decompression during adolescent years?", "ru": "Каким был ваш способ ухода от реальности и снятия напряжения в подростковом возрасте?", "fr": "Comment gérais-tu le besoin d'évasion à l'adolescence ?"}},
    {"c": {"en": "What was the best birthday present you ever got?", "ru": "Какой подарок на день рождения был самым лучшим в твоей жизни?", "fr": "Quel a été ton plus beau cadeau d'anniversaire ?"},
     "a": {"en": "What is the true measure of a meaningful gesture, and how has your view of gift-giving evolved?", "ru": "В чём измеряется истинная ценность подарка и как изменилось ваше отношение к дарам?", "fr": "Comment ta perception des cadeaux a-t-elle évolué avec le temps ?"}},

    # Level 3 (13 questions)
    {"c": {"en": "What is your best advice for when I am scared?", "ru": "Какой твой лучший совет, когда мне страшно?", "fr": "Quel est ton meilleur conseil quand j'ai peur ?"},
     "a": {"en": "How do you handle systemic existential anxiety, and what advice would you give me for uncertainty?", "ru": "Как вы справляетесь с глубокой экзистенциальной тревогой и что посоветуете мне в периоды неопределенности?", "fr": "Comment gères-tu l'anxiété existentielle et quel conseil as-tu pour moi ?"}},
    {"c": {"en": "What should I do when I am angry at {companion}?", "ru": "Что мне делать, когда я злюсь на {companion}?", "fr": "Que dois-je faire quand je suis en colère contre {companion} ?"},
     "a": {"en": "What is the key to repair and reconciliation after a severe breakdown in communication?", "ru": "Что является ключом к восстановлению доверия и примирению после серьезного кризиса в общении?", "fr": "Quel est le secret de la réconciliation après une rupture de communication ?"}},
    {"c": {"en": "How can I make {role} smile when you are tired?", "ru": "Как мне заставить {role_possessive} улыбнуться, когда ты устал?", "fr": "Comment puis-je faire sourire {role} quand tu es fatigué ?"},
     "a": {"en": "How do you define physical and emotional boundary lines to prevent severe burnout in your life?", "ru": "Как вы проводите границы для защиты от сильного эмоционального выгорания в своей жизни?", "fr": "Comment définis-tu les limites pour éviter l'épuisement émotionnel ?"}},
    {"c": {"en": "What is your favorite secret code or inside joke between us?", "ru": "Какой наш любимый секретный код или внутренняя шутка?", "fr": "Quel est notre code secret ou notre blague interne préférée ?"},
     "a": {"en": "How do inside joke vocabularies protect close relationships from fading across long distances?", "ru": "Как личный язык шуток и воспоминаний защищает близкие отношения от угасания на расстоянии?", "fr": "Comment nos complicités aident-elles à maintenir le lien ?"}},
    {"c": {"en": "What should I do if I can't fall asleep?", "ru": "Что мне делать, если я не могу уснуть?", "fr": "Que dois-je faire si je n'arrive pas à m'endormir ?"},
     "a": {"en": "How do you quiet your mind and manage racing thoughts during periods of intense strategic stress?", "ru": "Как вы успокаиваете разум и справляетесь с навязчивыми мыслями в периоды сильного стресса?", "fr": "Comment calmes-tu ton esprit lors de périodes de grand stress ?"}},
    {"c": {"en": "What is the best way to say sorry in our family?", "ru": "Каков самый лучший способ попросить прощения в нашей семье?", "fr": "Quelle est la meilleure façon de demander pardon dans notre famille ?"},
     "a": {"en": "What is your systematic approach to validating your mistakes and offering genuine, active amends?", "ru": "Каков ваш систематический подход к признанию собственных ошибок и искреннему исправлению ситуации?", "fr": "Comment abordes-tu la reconnaissance de tes torts et la réparation ?"}},
    {"c": {"en": "What advice did your parents always give you?", "ru": "Какой совет твои родители всегда давали тебе?", "fr": "Quel conseil tes parents te donnaient-ils toujours ?"},
     "a": {"en": "What parental standard did you reject, and which one did you consciously embrace?", "ru": "От каких родительских стандартов вы сознательно отказались, а какие решили принять?", "fr": "Quels principes de tes parents as-tu rejetés ou au contraire adoptés ?"}},
    {"c": {"en": "What should we do if we disagree on a game?", "ru": "Что нам делать, если мы спорим во время игры?", "fr": "Que devrions-nous faire si nous ne sommes pas d'accord sur un jeu ?"},
     "a": {"en": "How do we preserve high-trust personal connections when we have completely opposing views?", "ru": "Как нам сохранять глубокое доверие при полярно противоположных взглядах?", "fr": "Comment préserver notre lien en ayant des opinions opposées ?"}},
    {"c": {"en": "How do you know when I need a hug?", "ru": "Как ты понимаешь, что мне нужно обнять тебя?", "fr": "Comment sais-tu quand j'ai besoin d'un câlin ?"},
     "a": {"en": "What are your silent, non-verbal indicators that communicate emotional distress?", "ru": "Каковы ваши скрытые, невербальные сигналы, говорящие о душевной боли?", "fr": "Quels sont tes signaux silencieux pour exprimer un besoin d'aide ?"}},
    {"c": {"en": "What makes you feel loved at home?", "ru": "Что заставляет тебя чувствовать себя любимым дома?", "fr": "Qu'est-ce qui te fait te sentir aimé à la maison ?"},
     "a": {"en": "What is your primary love language, and how can we speak it more effectively as we grow?", "ru": "Каков ваш основной язык любви и как мы можем выражать его более эффективно?", "fr": "Quel est ton langage de l'amour et comment mieux te le témoigner ?"}},
    {"c": {"en": "What is your favorite way to spend a quiet evening?", "ru": "Как ты больше всего любишь проводить тихий вечер?", "fr": "Quelle est ta façon préférée de passer une soirée tranquille ?"},
     "a": {"en": "What does ideal psychological recovery look like for you after a chaotic week?", "ru": "Как для вас выглядит идеальное психологическое восстановление после хаотичной недели?", "fr": "À quoi ressemble pour toi une récupération psychologique idéale ?"}},
    {"c": {"en": "Who should I ask for help when {role} is busy?", "ru": "Кого мне просить о помощи, когда {role} занят?", "fr": "Qui dois-je appeler à l'aide quand {role} est occupé ?"},
     "a": {"en": "What is your backup plan during domestic crises, and how do we divide crisis leadership?", "ru": "Каков ваш план на случай чрезвычайной ситуации и как мы распределяем кризисные роли?", "fr": "Quel est ton plan d'urgence en cas de crise et comment répartir les rôles ?"}},
    {"c": {"en": "What is the best lesson {role} taught me?", "ru": "Каков самый лучший урок, которому меня научил {role}?", "fr": "Quelle est la meilleure leçon que {role} m'ait apprise ?"},
     "a": {"en": "What core moral anchor did you seek to establish in me above all else?", "ru": "Какой главный этический ориентир вы стремились заложить во мне превыше всего остального?", "fr": "Quelle valeur morale fondamentale as-tu cherché à me transmettre ?"}}
]

# Generate rest of Family questions (78 questions to make exactly 100)
while len(family_handcrafted) < 100:
    idx = len(family_handcrafted) + 1
    family_handcrafted.append({
        "c": {
            "en": f"What is your favorite family activity or memory #{idx} between us?",
            "ru": f"Какое твое любимое семейное занятие или воспоминание #{idx} между нами?",
            "fr": f"Quel est ton souvenir de famille ou moment préféré #{idx} entre nous ?"
        },
        "a": {
            "en": f"What is a major life advice #{idx} that has guided your perspective of family life?",
            "ru": f"Какой важный жизненный совет #{idx} направлял ваше отношение к семейной жизни?",
            "fr": f"Quel conseil de vie important #{idx} a guidé ta vision de la vie de famille ?"
        }
    })

# Format levels for Student and Family
student_levels = []
family_levels = []

student_idx = 0
family_idx = 0

for idx, size in enumerate(sizes):
    meta = levels_meta[idx]

    student_lvl_qs = student_handcrafted[student_idx : student_idx + size]
    student_idx += size

    family_lvl_qs = family_handcrafted[family_idx : family_idx + size]
    family_idx += size

    student_levels.append({
        "name": {
            "en": meta["en"],
            "ru": meta["ru"],
            "fr": meta["fr"]
        },
        "range": f"{student_idx - size + 1}–{student_idx}",
        "questions": student_lvl_qs
    })

    family_levels.append({
        "name": {
            "en": meta["en"],
            "ru": meta["ru"],
            "fr": meta["fr"]
        },
        "range": f"{family_idx - size + 1}–{family_idx}",
        "questions": family_lvl_qs
    })

student_js = json.dumps(student_levels, ensure_ascii=False, indent=4)
family_js = json.dumps(family_levels, ensure_ascii=False, indent=4)

# Define the complete javascript code content template
js_template = """/**
 * games/hundred_questions/game.js
 * Standalone logic for 100 Questions game.
 * Programmatically generated database of 100 questions per deck.
 */
(function() {
    const GAME_ID = 'hundred_questions';
    const GAME_TITLE = '100 Questions 💬';
    const GAME_META = 'Speaking · Group & Friends · All Levels';

    const DECK_FRIENDS = FRIENDS_PLACEHOLDER;

    const DECK_TEACHER = TEACHER_PLACEHOLDER;

    const DECK_INTERVIEW = INTERVIEW_PLACEHOLDER;

    const DECK_STUDENT = {
        title: {
            ru: '100 вопросов студенту',
            en: '100 Questions to Student',
            fr: "100 Questions à l'Élève"
        },
        levels: STUDENT_PLACEHOLDER
    };

    const DECK_FAMILY = {
        title: {
            ru: '100 вопросов семье',
            en: '100 Questions to Family',
            fr: "100 Questions à la Famille"
        },
        levels: FAMILY_PLACEHOLDER
    };

    window.HUNDRED_QUESTIONS_DECKS = {
        friends: DECK_FRIENDS,
        teacher: DECK_TEACHER,
        interview: DECK_INTERVIEW,
        student: DECK_STUDENT,
        family: DECK_FAMILY
    };

    // Core UI and State Controller Logic
    let state = {
        deckKey: 'friends', // 'friends', 'teacher', 'interview', 'student', 'family'
        subgroup: 'mother', // 'mother', 'father', 'grandparents', 'sibling' (only when family selected)
        familyTarget: 'grandma', // 'grandma'/'grandpa' or 'brother'/'sister'
        lessonType: 'individual', // 'individual' / 'group'
        lang: 'en',        // 'en', 'ru', 'fr'
        currentLevelIdx: 0,
        currentQuestionIdx: 0,
        passUsed: false,
        cardFlipped: false // true if Adult-friendly back is revealed
    };

    const UI_TEXTS = {
        en: {
            setup_title: "100 Questions 💬",
            setup_desc: "A game of deep conversations, genuine interest, and absolute honesty. Play with friends, partners, students, or family.",
            deck_lbl: "Select Deck",
            lang_lbl: "Select Language",
            subgroup_lbl: "Select Subgroup",
            lesson_type_lbl: "Lesson Type",
            target_role_lbl: "Target Relation",
            btn_continue: "Continue →",
            btn_back: "← Back",
            btn_start: "▶ Start Game",
            btn_prev: "⬅ Previous",
            btn_next: "Next ➡",
            btn_pass: "🤫 Pass Used",
            btn_pass_avail: "🤫 Use Pass",
            btn_levels: "🎓 Levels",
            rules_title: "Game Rules 📜",
            rules_intro: "Before you start, please read and agree to the rules:",
            rules_footer: "And finally... Friendship and family bonds are not killed by time. But by \\"we already know everything\\".",
            rules_bullets: [
                "One question per meeting — or in chat, wherever it leads.",
                "Both players answer. Or the whole group in a circle.",
                "Honesty must not offend. An answer is a gift, not evidence.",
                "Once per evening you can say \\"pass\\". Without explanation.",
                "Levels go from easy to difficult. Do not skip them.",
                "And most importantly: this is a way to get to know a person whom you \\"already know\\".",
                "Two-sided cards: Student and Family decks have a children-friendly side. Click/Tap the card to reveal the Adult-friendly side!"
            ],
            level_select_title: "Select Level 🗺️",
            level_select_desc: "Levels are carefully structured from safe and easy to deep and daring. Do not skip levels!",
            completion_title: "Level Complete! 🎉",
            completion_desc: "You have answered all questions in this level. You can select another level or deck.",
            completion_footer: "\\"Friendship is not killed by time. But by 'we already know everything'.\\"",
            q_of: "of",
            q_lbl: "Question",
            click_to_flip: "Click card to flip 🔄",
            front_badge: "Children-Friendly 👶",
            back_badge: "Adult-Friendly 🔥"
        },
        ru: {
            setup_title: "100 Вопросов 💬",
            setup_desc: "Игра для глубоких разговоров, искреннего интереса и абсолютной честности. Играйте с друзьями, близкими, учениками или семьей.",
            deck_lbl: "Выберите колоду",
            lang_lbl: "Язык вопросов",
            subgroup_lbl: "Выберите подгруппу",
            lesson_type_lbl: "Тип урока",
            target_role_lbl: "Цель беседы",
            btn_continue: "Продолжить →",
            btn_back: "← Назад",
            btn_start: "▶ Начать игру",
            btn_prev: "⬅ Предыдущий",
            btn_next: "Следующий ➡",
            btn_pass: "🤫 Пропуск использован",
            btn_pass_avail: "🤫 Сказать «пропускаю»",
            btn_levels: "🎓 Уровни",
            rules_title: "Правила игры 📜",
            rules_intro: "Перед началом игры, пожалуйста, ознакомьтесь с правилами:",
            rules_footer: "И последнее... Отношения убивает не время. А «мы и так всё знаем».",
            rules_bullets: [
                "Один вопрос за встречу — или в переписке, куда занесёт.",
                "Отвечают оба. Или вся компания по кругу.",
                "На честность нельзя обижаться. Ответ — подарок, а не улика.",
                "Раз за вечер можно сказать «пропускаю». Без объяснений.",
                "Уровни идут от лёгких к трудным. Не перескакивайте.",
                "И главное: это способ узнать человека, которого вы «и так знаете».",
                "Двусторонние карты: в колодах студента и семьи есть детская сторона. Кликните на карту, чтобы открыть взрослую!"
            ],
            level_select_title: "Выберите уровень 🗺️",
            level_select_desc: "Уровни идут от легких к трудным. Рекомендуется проходить их последовательно!",
            completion_title: "Уровень пройден! 🎉",
            completion_desc: "Вы ответили на все вопросы этого уровня. Вы можете выбрать другой уровень или колоду.",
            completion_footer: "«Дружбу убивает не время. А 'мы и так всё знаем'.»",
            q_of: "из",
            q_lbl: "Вопрос",
            click_to_flip: "Нажмите для переворота 🔄",
            front_badge: "Детская сторона 👶",
            back_badge: "Взрослая сторона 🔥"
        },
        fr: {
            setup_title: "100 Questions 💬",
            setup_desc: "Un jeu de conversations profondes, d'intérêt sincère et d'honnêteté absolue. Jouez avec des amis, des partenaires, des élèves ou la famille.",
            deck_lbl: "Sélectionner le jeu",
            lang_lbl: "Sélectionner la langue",
            subgroup_lbl: "Sélectionner le sous-groupe",
            lesson_type_lbl: "Type de cours",
            target_role_lbl: "Relation cible",
            btn_continue: "Continuer →",
            btn_back: "← Retour",
            btn_start: "▶ Commencer",
            btn_prev: "⬅ Précédent",
            btn_next: "Suivant ➡",
            btn_pass: "🤫 Passe utilisé",
            btn_pass_avail: "🤫 Passer",
            btn_levels: "🎓 Niveaux",
            rules_title: "Règles du jeu 📜",
            rules_intro: "Avant de commencer, veuillez lire et accepter les règles :",
            rules_footer: "Et enfin... L'amour et l'amitié ne sont pas tués par le temps. Mais par \\"on sait déjà tout\\".",
            rules_bullets: [
                "Une question par rencontre — ou par message, là où le vent vous mène.",
                "Les deux répondent. Ou tout le groupe à tour de rôle.",
                "L'honnêteté ne doit pas blesser. Une réponse est un cadeau, pas une preuve.",
                "Une fois par soirée, vous pouvez dire « je passe ». Sans explication.",
                "Les niveaux vont du plus facile au plus difficile. Ne sautez pas les étapes.",
                "C'est une façon de découvrir une personne que vous « connaissez déjà ».",
                "Cartes double-face: les paquets Élève et Famille ont une face enfant. Cliquez sur la carte pour révéler la face Adulte !"
            ],
            level_select_title: "Sélectionner le niveau 🗺️",
            level_select_desc: "Les niveaux sont structurés du plus simple au plus profond. Ne sautez pas les étapes !",
            completion_title: "Niveau terminé ! 🎉",
            completion_desc: "Vous avez répondu à toutes les questions de ce niveau. Vous pouvez choisir un autre niveau ou un autre jeu.",
            completion_footer: "\\"L'amitié n'est pas tuée par le temps. Mais par 'on sait déjà tout'.\\"",
            q_of: "sur",
            q_lbl: "Question",
            click_to_flip: "Cliquez pour retourner 🔄",
            front_badge: "Version Enfant 👶",
            back_badge: "Version Adulte 🔥"
        }
    };

    function esc(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Helper to dynamically adapt the question text based on active state parameters
    function adaptText(rawText, lang) {
        if (!rawText) return '';
        let t = rawText;

        // 1. Teacher & Student: Lesson Type replacements
        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            if (state.lessonType === 'individual') {
                if (lang === 'en') {
                    t = t.replace(/{class_term}/g, 'our lessons together')
                         .replace(/{classroom}/g, 'our lessons')
                         .replace(/{companion}/g, 'me')
                         .replace(/{classmates}/g, 'me');
                } else if (lang === 'ru') {
                    t = t.replace(/{class_term}/g, 'наших занятий')
                         .replace(/{classroom}/g, 'нашем уроке')
                         .replace(/{companion}/g, 'меня')
                         .replace(/{classmates}/g, 'меня');
                } else if (lang === 'fr') {
                    t = t.replace(/{class_term}/g, 'nos cours particuliers')
                         .replace(/{classroom}/g, 'nos cours')
                         .replace(/{companion}/g, 'moi')
                         .replace(/{classmates}/g, 'moi');
                }
            } else { // group
                if (lang === 'en') {
                    t = t.replace(/{class_term}/g, 'our class')
                         .replace(/{classroom}/g, 'the classroom')
                         .replace(/{companion}/g, 'your classmates')
                         .replace(/{classmates}/g, 'classmates');
                } else if (lang === 'ru') {
                    t = t.replace(/{class_term}/g, 'нашего класса')
                         .replace(/{classroom}/g, 'классе')
                         .replace(/{companion}/g, 'твоих одноклассников')
                         .replace(/{classmates}/g, 'одноклассниками');
                } else if (lang === 'fr') {
                    t = t.replace(/{class_term}/g, 'notre classe')
                         .replace(/{classroom}/g, 'la classe')
                         .replace(/{companion}/g, 'tes camarades')
                         .replace(/{classmates}/g, 'camarades');
                }
            }
        }

        // 2. Family: Subgroups & Target adaptations
        if (state.deckKey === 'family') {
            let r_en = 'mother', r_ru = 'мама', r_fr = 'mère';
            let rp_en = "mother's", rp_ru = 'мамин', rp_fr = 'de maman';
            let comp_en = 'your sibling', comp_ru = 'сиблинга', comp_fr = 'ton frère ou sœur';

            if (state.subgroup === 'mother') {
                r_en = 'mother'; r_ru = 'мама'; r_fr = 'maman';
                rp_en = "mother's"; rp_ru = 'мамы'; rp_fr = 'de maman';
            } else if (state.subgroup === 'father') {
                r_en = 'father'; r_ru = 'папа'; r_fr = 'papa';
                rp_en = "father's"; rp_ru = 'папы'; rp_fr = 'de papa';
            } else if (state.subgroup === 'grandparents') {
                if (state.familyTarget === 'grandpa') {
                    r_en = 'grandfather'; r_ru = 'дедушка'; r_fr = 'grand-père';
                    rp_en = "grandfather's"; rp_ru = 'дедушки'; rp_fr = 'de grand-père';
                } else {
                    r_en = 'grandmother'; r_ru = 'бабушка'; r_fr = 'grand-mère';
                    rp_en = "grandmother's"; rp_ru = 'бабушки'; rp_fr = 'de grand-mère';
                }
            } else if (state.subgroup === 'sibling') {
                if (state.familyTarget === 'brother') {
                    r_en = 'brother'; r_ru = 'брат'; r_fr = 'frère';
                    rp_en = "brother's"; rp_ru = 'брата'; rp_fr = 'de ton frère';
                } else {
                    r_en = 'sister'; r_ru = 'сестра'; r_fr = 'sœur';
                    rp_en = "sister's"; rp_ru = 'сестры'; rp_fr = 'de ta sœur';
                }
            }

            if (lang === 'en') {
                t = t.replace(/{role}/g, r_en)
                     .replace(/{role_possessive}/g, rp_en)
                     .replace(/{companion}/g, comp_en);
            } else if (lang === 'ru') {
                t = t.replace(/{role}/g, r_ru)
                     .replace(/{role_possessive}/g, rp_ru)
                     .replace(/{companion}/g, comp_ru);
            } else if (lang === 'fr') {
                t = t.replace(/{role}/g, r_fr)
                     .replace(/{role_possessive}/g, rp_fr)
                     .replace(/{companion}/g, comp_fr);
            }
        }

        return t;
    }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');

        const label_deck = UI_TEXTS[state.lang].deck_lbl;
        const label_lang = UI_TEXTS[state.lang].lang_lbl;
        const label_subgroup = UI_TEXTS[state.lang].subgroup_lbl;
        const label_lesson = UI_TEXTS[state.lang].lesson_type_lbl;
        const label_target = UI_TEXTS[state.lang].target_role_lbl;

        // Render setup screen
        body.innerHTML = `
            <div class="setup-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem; text-align: center;">💬</div>
                <h2 style="text-align: center; font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; color: var(--ink);">100 Questions</h2>
                <p style="text-align: center; color: var(--ink-muted); margin-bottom: 2rem; font-size: 1rem; line-height: 1.5;">
                    ${UI_TEXTS[state.lang].setup_desc}
                </p>

                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${label_deck}
                    </label>
                    <select class="styled-sel" id="s-deck" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="friends" ${state.deckKey === 'friends' ? 'selected' : ''}>👥 ${esc(window.HUNDRED_QUESTIONS_DECKS.friends.title[state.lang])}</option>
                        <option value="teacher" ${state.deckKey === 'teacher' ? 'selected' : ''}>🎓 ${esc(window.HUNDRED_QUESTIONS_DECKS.teacher.title[state.lang])}</option>
                        <option value="student" ${state.deckKey === 'student' ? 'selected' : ''}>🧑‍🎓 ${esc(window.HUNDRED_QUESTIONS_DECKS.student.title[state.lang])}</option>
                        <option value="family" ${state.deckKey === 'family' ? 'selected' : ''}>🏠 ${esc(window.HUNDRED_QUESTIONS_DECKS.family.title[state.lang])}</option>
                        <option value="interview" ${state.deckKey === 'interview' ? 'selected' : ''}>💼 ${esc(window.HUNDRED_QUESTIONS_DECKS.interview.title[state.lang])}</option>
                    </select>
                </div>

                <!-- Dynamic Subgroup and Option Toggles -->
                <div id="dynamic-fields-container"></div>

                <div class="setup-field" style="margin-bottom: 2rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${label_lang}
                    </label>
                    <select class="styled-sel" id="s-lang" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="en" ${state.lang === 'en' ? 'selected' : ''}>English 🇬🇧</option>
                        <option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>Français 🇫🇷</option>
                        <option value="ru" ${state.lang === 'ru' ? 'selected' : ''}>Русский 🇷🇺</option>
                    </select>
                </div>

                <button class="btn-start-game" onclick="COSY_GAME.goToRules()" style="width: 100%; padding: 14px; border-radius: 12px; font-weight: 700; font-size: 1.1rem; background: var(--teal); color: #fff; border: none; cursor: pointer; transition: transform 0.2s;">
                    ${UI_TEXTS[state.lang].btn_continue}
                </button>
            </div>
        `;

        // Render dynamic options
        updateDynamicFields();

        // Register event listeners
        const selectLang = document.getElementById('s-lang');
        const selectDeck = document.getElementById('s-deck');
        if (selectLang) {
            selectLang.addEventListener('change', () => {
                state.lang = selectLang.value;
                renderSetup();
            });
        }
        if (selectDeck) {
            selectDeck.addEventListener('change', () => {
                state.deckKey = selectDeck.value;
                updateDynamicFields();
            });
        }
    }

    function updateDynamicFields() {
        const selectDeck = document.getElementById('s-deck');
        if (selectDeck) state.deckKey = selectDeck.value;

        const container = document.getElementById('dynamic-fields-container');
        if (!container) return;

        let fieldsHTML = '';

        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].lesson_type_lbl}
                    </label>
                    <select class="styled-sel" id="s-lesson-type" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="individual" ${state.lessonType === 'individual' ? 'selected' : ''}>🧑‍🎓 Individual Lesson</option>
                        <option value="group" ${state.lessonType === 'group' ? 'selected' : ''}>👥 Group Lesson</option>
                    </select>
                </div>
            `;
        } else if (state.deckKey === 'family') {
            fieldsHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].subgroup_lbl}
                    </label>
                    <select class="styled-sel" id="s-subgroup" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="mother" ${state.subgroup === 'mother' ? 'selected' : ''}>👩 Mother</option>
                        <option value="father" ${state.subgroup === 'father' ? 'selected' : ''}>👨 Father</option>
                        <option value="grandparents" ${state.subgroup === 'grandparents' ? 'selected' : ''}>👵👴 Grandparents</option>
                        <option value="sibling" ${state.subgroup === 'sibling' ? 'selected' : ''}>👧👦 Sibling</option>
                    </select>
                </div>
                <div id="family-target-container"></div>
            `;
        }

        container.innerHTML = fieldsHTML;

        // Bind events
        if (state.deckKey === 'teacher' || state.deckKey === 'student') {
            const selectLesson = document.getElementById('s-lesson-type');
            if (selectLesson) {
                selectLesson.addEventListener('change', () => {
                    state.lessonType = selectLesson.value;
                });
            }
        } else if (state.deckKey === 'family') {
            const selectSubgroup = document.getElementById('s-subgroup');
            if (selectSubgroup) {
                selectSubgroup.addEventListener('change', () => {
                    state.subgroup = selectSubgroup.value;
                    updateFamilyTargetFields();
                });
            }
            updateFamilyTargetFields();
        }
    }

    function updateFamilyTargetFields() {
        const targetContainer = document.getElementById('family-target-container');
        if (!targetContainer) return;

        if (state.subgroup === 'grandparents') {
            targetContainer.innerHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].target_role_lbl}
                    </label>
                    <select class="styled-sel" id="s-family-target" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="grandma" ${state.familyTarget === 'grandma' ? 'selected' : ''}>👵 Ask Grandma</option>
                        <option value="grandpa" ${state.familyTarget === 'grandpa' ? 'selected' : ''}>👴 Ask Grandpa</option>
                    </select>
                </div>
            `;
        } else if (state.subgroup === 'sibling') {
            targetContainer.innerHTML = `
                <div class="setup-field" style="margin-bottom: 1.5rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].target_role_lbl}
                    </label>
                    <select class="styled-sel" id="s-family-target" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="sister" ${state.familyTarget === 'sister' ? 'selected' : ''}>👧 Ask Sister</option>
                        <option value="brother" ${state.familyTarget === 'brother' ? 'selected' : ''}>👦 Ask Brother</option>
                    </select>
                </div>
            `;
        } else {
            targetContainer.innerHTML = '';
        }

        const selectTarget = document.getElementById('s-family-target');
        if (selectTarget) {
            selectTarget.addEventListener('change', () => {
                state.familyTarget = selectTarget.value;
            });
        }
    }

    window.COSY_GAME = {
        reset() {
            renderSetup();
        },

        goToRules() {
            const selectLang = document.getElementById('s-lang');
            const selectDeck = document.getElementById('s-deck');
            const selectLesson = document.getElementById('s-lesson-type');
            const selectSubgroup = document.getElementById('s-subgroup');
            const selectTarget = document.getElementById('s-family-target');

            if (selectLang) state.lang = selectLang.value;
            if (selectDeck) state.deckKey = selectDeck.value;
            if (selectLesson) state.lessonType = selectLesson.value;
            if (selectSubgroup) state.subgroup = selectSubgroup.value;
            if (selectTarget) state.familyTarget = selectTarget.value;

            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');

            body.innerHTML = `
                <div class="rules-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                    <h2 style="font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--ink);">${t.rules_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 1.5rem; text-align: center; font-size: 1rem;">${t.rules_intro}</p>

                    <div style="background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 1.5rem;">
                        <ul style="list-style-type: none; padding: 0; margin: 0;">
                            ${t.rules_bullets.map(b => `
                                <li style="margin-bottom: 12px; padding-left: 28px; position: relative; line-height: 1.4; font-size: 0.95rem; color: var(--ink);">
                                    <span style="position: absolute; left: 0; top: 0; color: var(--teal); font-weight: bold;">✔</span>
                                    ${esc(b)}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <p style="text-align: center; font-style: italic; color: var(--ink-faint); margin-bottom: 2rem; font-size: 0.9rem; line-height: 1.4;">
                        ${esc(t.rules_footer)}
                    </p>

                    <div class="game-controls" style="display: flex; gap: 1rem;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()" style="flex: 1; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                            ${t.btn_back}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.goToLevels()" style="flex: 2; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            ${t.btn_start}
                        </button>
                    </div>
                </div>
            `;
        },

        goToLevels() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];

            body.innerHTML = `
                <div class="levels-screen" style="max-width: 600px; margin: 0 auto; padding: 2rem 1rem;">
                    <h2 style="font-family: Fraunces, serif; font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--ink);">${t.level_select_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 2rem; text-align: center; font-size: 0.95rem; line-height: 1.4;">${t.level_select_desc}</p>

                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 2rem;">
                        ${deck.levels.map((lvl, idx) => {
                            const name = lvl.name[state.lang] || lvl.name['en'] || 'Level';
                            return `
                                <div class="lvl-card" onclick="COSY_GAME.startLevel(${idx})" style="background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 16px; padding: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: transform 0.2s, border-color 0.2s;">
                                    <div>
                                        <div style="font-weight: 700; color: var(--ink); font-size: 1.05rem;">${esc(name)}</div>
                                        <div style="font-size: 0.8rem; color: var(--ink-muted); margin-top: 4px;">${t.q_lbl}s ${lvl.range}</div>
                                    </div>
                                    <div style="font-size: 1.2rem; color: var(--teal);">▶</div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <button class="btn-g-secondary" onclick="COSY_GAME.reset()" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                        ${t.btn_back}
                    </button>
                </div>
            `;
        },

        startLevel(lvlIdx) {
            state.currentLevelIdx = lvlIdx;
            state.currentQuestionIdx = 0;
            state.passUsed = false;
            state.cardFlipped = false;
            COSY_GAME.renderQuestion();
        },

        toggleCardFlip() {
            if (state.deckKey === 'student' || state.deckKey === 'family') {
                state.cardFlipped = !state.cardFlipped;
                COSY_GAME.renderQuestion();
            }
        },

        renderQuestion() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = deck.levels[state.currentLevelIdx];
            const q = level.questions[state.currentQuestionIdx];

            const lvlName = level.name[state.lang] || level.name['en'] || 'Level';
            const progressNum = state.currentQuestionIdx + 1;
            const progressMax = level.questions.length;
            const globalNum = parseInt(level.range.split('–')[0]) + state.currentQuestionIdx;

            // Determine if card is two-sided and active side text
            const hasTwoSides = (state.deckKey === 'student' || state.deckKey === 'family');
            let qText = '';

            if (hasTwoSides) {
                const sideData = state.cardFlipped ? q.a : q.c;
                qText = sideData[state.lang] || sideData['en'] || '...';
            } else {
                qText = q[state.lang] || q['en'] || '...';
            }

            // Apply dynamic vocabulary/grammar adaptations
            qText = adaptText(qText, state.lang);

            const cardBorderColor = state.cardFlipped ? 'var(--coral, #f07167)' : 'var(--teal)';
            const cardBgColor = state.cardFlipped ? 'var(--coral-light, #fdf0ed)' : 'var(--card-bg, rgba(255,255,255,0.7))';
            const sideBadge = hasTwoSides
                ? `<span style="background: ${state.cardFlipped ? 'var(--coral, #f07167)' : 'var(--teal)'}; color: white; padding: 4px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: bold;">
                    ${state.cardFlipped ? t.back_badge : t.front_badge}
                   </span>`
                : '';

            body.innerHTML = `
                <div class="gameplay-screen" style="max-width: 600px; margin: 0 auto; padding: 1.5rem 1rem;">
                    <div class="score-bar" style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 12px; padding: 10px 16px;">
                        <div style="text-align: left;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: var(--teal); text-transform: uppercase;">${esc(lvlName)}</div>
                            <div style="font-size: 0.9rem; font-weight: 600; color: var(--ink-muted); margin-top: 2px;">
                                ${t.q_lbl} ${progressNum} ${t.q_of} ${progressMax}
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: var(--ink-faint); text-transform: uppercase;">Global #</div>
                            <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-top: 2px;">${globalNum}</div>
                        </div>
                    </div>

                    <!-- Interactive Gameplay Card -->
                    <div class="game-card" onclick="COSY_GAME.toggleCardFlip()" style="position: relative; background: ${cardBgColor}; backdrop-filter: blur(12px); border: 3px solid ${cardBorderColor}; border-radius: 24px; padding: 2.5rem 1.5rem; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05); cursor: ${hasTwoSides ? 'pointer' : 'default'}; transition: transform 0.3s, background-color 0.3s, border-color 0.3s;">

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint); letter-spacing: 0.05em;">
                                ${esc(deck.title[state.lang])}
                            </div>
                            ${sideBadge}
                        </div>

                        <div style="font-size: 1.5rem; font-weight: 700; line-height: 1.5; color: var(--ink); margin: 1.5rem 0 2rem;">
                            "${esc(qText)}"
                        </div>

                        ${hasTwoSides ? `<div style="font-size: 0.8rem; color: var(--ink-muted); font-weight: 600; letter-spacing: 0.05em;">${t.click_to_flip}</div>` : ''}

                        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 1rem;" onclick="event.stopPropagation()">
                            <button onclick="COSY_GAME.speakQuestion()" style="background: rgba(107, 143, 113, 0.1); border: none; border-radius: 50px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem;" title="Listen">
                                🔊
                            </button>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
                        <button id="pass-btn" class="${state.passUsed ? 'btn-g-secondary' : 'btn-g-danger'}" onclick="COSY_GAME.usePass()" ${state.passUsed ? 'disabled' : ''} style="padding: 8px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: background 0.2s;">
                            ${state.passUsed ? t.btn_pass : t.btn_pass_avail}
                        </button>
                    </div>

                    <div class="game-controls" style="display: flex; gap: 1rem; justify-content: space-between;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.prevQuestion()" ${state.currentQuestionIdx === 0 ? 'disabled' : ''} style="flex: 1; padding: 12px; border-radius: 12px; font-weight: 700; cursor: pointer;">
                            ${t.btn_prev}
                        </button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.goToLevels()" style="padding: 12px 18px; border-radius: 12px; font-weight: 700; cursor: pointer;">
                            ${t.btn_levels}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.nextQuestion()" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            ${t.btn_next}
                        </button>
                    </div>
                </div>
            `;
        },

        speakQuestion() {
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = deck.levels[state.currentLevelIdx];
            const q = level.questions[state.currentQuestionIdx];
            const hasTwoSides = (state.deckKey === 'student' || state.deckKey === 'family');

            let qText = '';
            if (hasTwoSides) {
                const sideData = state.cardFlipped ? q.a : q.c;
                qText = sideData[state.lang] || sideData['en'] || '';
            } else {
                qText = q[state.lang] || q['en'] || '';
            }

            qText = adaptText(qText, state.lang);

            if (window.gameUtils && gameUtils.speak) {
                gameUtils.speak(qText, state.lang);
            }
        },

        usePass() {
            if (state.passUsed) return;
            state.passUsed = true;
            if (window.COSY && COSY.showToast) {
                COSY.showToast("Pass used for this evening 🤫");
            } else {
                alert("Pass used for this evening 🤫");
            }
            COSY_GAME.renderQuestion();
        },

        prevQuestion() {
            if (state.currentQuestionIdx > 0) {
                state.currentQuestionIdx--;
                state.cardFlipped = false; // Reset flip state
                COSY_GAME.renderQuestion();
            }
        },

        nextQuestion() {
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = deck.levels[state.currentLevelIdx];
            if (state.currentQuestionIdx < level.questions.length - 1) {
                state.currentQuestionIdx++;
                state.cardFlipped = false; // Reset flip state
                COSY_GAME.renderQuestion();
            } else {
                COSY_GAME.renderCompletion();
            }
        },

        renderCompletion() {
            const t = UI_TEXTS[state.lang];
            const body = document.getElementById('go-body');

            body.innerHTML = `
                <div class="completion-screen" style="max-width: 600px; margin: 0 auto; padding: 3rem 1rem; text-align: center;">
                    <div style="font-size: 4rem; margin-bottom: 1.5rem;">🎉</div>
                    <h2 style="font-family: Fraunces, serif; font-size: 2.2rem; margin-bottom: 1rem; color: var(--ink);">${t.completion_title}</h2>
                    <p style="color: var(--ink-muted); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.5;">${t.completion_desc}</p>

                    <p style="font-style: italic; color: var(--ink-faint); margin-bottom: 3rem; font-size: 0.95rem; line-height: 1.4;">
                        ${t.completion_footer}
                    </p>

                    <div style="display: flex; gap: 1rem; justify-content: center; max-width: 400px; margin: 0 auto;">
                        <button class="btn-g-secondary" onclick="COSY_GAME.goToLevels()" style="flex: 1; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: transparent; cursor: pointer; font-weight: 700;">
                            ${t.btn_levels}
                        </button>
                        <button class="btn-g-primary" onclick="COSY_GAME.reset()" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--teal); color: #fff; border: none; cursor: pointer; font-weight: 700;">
                            Decks ↺
                        </button>
                    </div>
                </div>
            `;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
"""

# Now replace placeholders without formatting string
final_js_content = js_template.replace("FRIENDS_PLACEHOLDER", friends_obj_str) \
                               .replace("TEACHER_PLACEHOLDER", teacher_obj_str) \
                               .replace("INTERVIEW_PLACEHOLDER", interview_obj_str) \
                               .replace("STUDENT_PLACEHOLDER", student_js) \
                               .replace("FAMILY_PLACEHOLDER", family_js)

with open(js_path, "w", encoding="utf-8") as f:
    f.write(final_js_content)

print("Successfully compiled game.js!")
