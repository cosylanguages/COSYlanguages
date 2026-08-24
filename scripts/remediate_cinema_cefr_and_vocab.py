#!/usr/bin/env python3
"""
scripts/remediate_cinema_cefr_and_vocab.py

Standardizes all 113 Cinema Club session files under events/sessions/cinema-club/:
1. Lowercases <strong> highlighted vocabulary terms in discussion rounds (.round-item-main, .round-item-personal)
   unless sentence-initial, proper nouns/names (e.g. Tim, Paris, Cruella, London, etc.), acronyms (e.g. AI, TV, WWII, VPN),
   or Grammar Focus titles / multi-word grammar terms.
2. Audits target language sessions (FR, RU, ES):
   - Adds gender articles (le, la, el, la) or (m.) / (f.) for contracted articles (l') to French/Spanish noun vocabulary entries.
   - Adds parenthetical gender indicators (м.), (ж.), or (ср.) to Russian noun vocabulary entries.
3. Cleans up any remaining placeholder/fallback definition artifacts in non-English files, replacing them with
   authentic, film-grounded definitions and example sentences in the target language.
4. Synchronizes COSY.addToDict(...) parameters with updated word, definition, and example strings.
"""

import os
import glob
import re

SESSIONS_DIR = "events/sessions/cinema-club"

PROPER_NOUNS_AND_ACRONYMS = {
    "AI", "TV", "CGI", "WWII", "VPN", "NPC", "CEO", "UK", "US", "USA", "LA", "NY", "NYC",
    "Tim", "Lake", "Tim Lake", "Cornwall", "London", "Paris", "Rome", "Italy", "Cruella",
    "Cruella de Vil", "Pongo", "Perdita", "Horace", "Jasper", "Abby", "Abby Jensen",
    "Celeste", "Jay", "Krista", "Chronos", "Dalí", "Disney", "Walt Disney", "Shadow", "Chance",
    "Sassy", "Peter", "Sam", "Bob", "Hazel", "Babe", "Gerry", "Remy", "Linguini", "Colette",
    "Skinner", "Gusteau", "Anton Ego", "Ego", "Odette", "Derek", "Rothbart", "Jean-Bob",
    "Puffin", "Speed", "Alice", "Elio", "Oliver", "Sonmi-451", "Ruby", "Rebecca", "Madeline",
    "Helen", "Lisle", "Sam Greenfield", "Jackie", "Isabel", "Dolly Levi", "Miranda Priestly",
    "Katniss", "Katniss Everdeen", "Szpilman", "Władysław Szpilman", "Warsaw", "Heather", "Heather Chandler",
    "Thamesmead", "Gloucester", "Illyria", "Madrid", "Saint Petersburg", "Pères", "Mères",
    "Vespa", "Mouth of Truth", "Big Ben", "Hell Hall", "Dr. Pavlov", "Waddlesworth", "Jay Keystone", "Krista Cook",
    "Sierra Nevada", "Don Ameche", "Michael J. Fox", "Sally Field", "Babe the Dragon", "Root", "John Debney",
    "Colette Tatou", "Michael Giacchino", "Brad Bird", "Queen Uberta", "King William", "Richard Rich", "Tchaikovsky",
    "The Holy Grail", "Priory of Sion", "Opus Dei", "The Twelve", "Holy Grail", "Mouth of Truth", "Vespa"
}

NON_EN_VOCAB_DB = {
    # French - Incendies (B2)
    "incendies.html": {
        "Trauma ≠ Healing": ("le traumatisme (m.) ≠ la guérison", "(noun) l'expérience d'un choc émotionnel profond opposée au processus de rétablissement.", "Les jumeaux traversent le traumatisme de leur passé vers la guérison."),
        "political war history": ("l'histoire de guerre (f.)", "(noun) les événements tragiques liés aux conflits armés au Moyen-Orient.", "Nawal consigne l'histoire de guerre dans son journal intime."),
        "unbreakable bonds": ("les liens incassables (m.pl.)", "(noun) l'union fraternelle et familiale que rien ne peut détruire.", "Jeanne et Simon maintiennent des liens incassables à travers leur quête."),
        "secret de famille": ("le secret de famille", "(noun) une vérité cachée transmise sous le sceau du silence.", "Le testament révèle un secret de famille bouleversant."),
        "promesse de mère": ("la promesse de mère", "(noun) l'engagement solennel pris envers ses enfants avant de mourir.", "La promesse de mère guide les démarches de Jeanne et Simon."),
        "Héritage": ("l'héritage (m.)", "(noun) ce qui est transmis par les générations précédentes; patrimoine culturel ou familial.", "Les jumeaux découvrent un profond héritage familial en lisant le testament.")
    },
    # French - L'attente (B1)
    "lattente.html": {
        "Patience": ("la patience", "(noun) la capacité à supporter les délais avec calme et sérénité.", "Anna fait preuve d'une grande patience dans sa grande demeure sicilienne."),
        "expectation": ("l'attente (f.)", "(noun) l'état d'espoir ou d'anticipation dans l'attente d'un être cher.", "L'attente prolongée intensifie la tension dramatique entre les deux femmes."),
        "subconscious illusions": ("les illusions (f.pl.)", "(noun) les représentations mentales trompeuses nourries par le chagrin.", "Jeanne se berce d'illusions en ignorant le tragique destin de Giuseppe."),
        "romantic tension": ("la tension amoureuse", "(noun) l'atmosphère chargée de désirs et d'incompréhensions.", "Une subtile tension amoureuse flotte dans les pièces silencieuses."),
        "patience et silence": ("le silence et la patience (m.)", "(noun) l'attitude retenue et digne face au deuil.", "Le silence et la patience caractérisent le quotidien de la grande maison."),
        "Attente": ("l'attente (f.)", "(noun) l'action d'attendre ou l'état de patience dans l'espoir d'un événement.", "L'attente de la vérité façonne chaque interaction durant le séjour."),
        "tension": ("la tension", "(noun) un état de raideur psychologique ou de pression émotionnelle.", "La tension monte entre Anna et Jeanne au fil des jours."),
        "illusion": ("l'illusion (f.)", "(noun) une apparence dépourvue de réalité objective.", "Conserver cette illusion protège temporairement Jeanne de la douleur."),
        "retrouvailles": ("les retrouvailles (f.pl.)", "(noun) le fait de se retrouver après une longue séparation.", "Elles espèrent toutes deux de joyeuses retrouvailles lors des fêtes de Pâques."),
        "chemin de fer": ("le chemin de fer", "(noun) la voie ferrée symbolisant le voyage et l'arrivée à la station.", "Jeanne arrive par le chemin de fer à la gare de Sicile.")
    },
    # French - Radin (B1)
    "radin.html": {
        "Extreme saving behavior": ("l'avaricie (f.)", "(noun) le souci excessif d'économiser l'argent au détriment du confort.", "François Gautier pousse l'avaricie jusqu'à couper l'électricité chez lui."),
        "hiding wealth": ("la dissimulation", "(noun) l'action de cacher ses possessions et sa fortune aux autres.", "Il pratique la dissimulation de son épargne pour éviter de payer."),
        "daughter connection": ("le lien filial (m.)", "(noun) la relation affective unissant un père à sa fille.", "François découvre la chaleur du lien filial en accueillant sa fille Laura."),
        "Obsession ≠ Indifference": ("l'obsession (f.) ≠ l'indifférence (f.)", "(noun) la fixation mentale sur l'argent opposée à l'absence de préoccupation.", "Son obsession pour le sou près s'oppose à l'indifférence de ses collègues."),
        "économie extrême": ("l'économie extrême (f.)", "(noun) la gestion financière poussée jusqu'à l'absurde.", "L'économie extrême de François provoque des situations comiques irrésistibles."),
        "Radin": ("le radin / la radine", "(noun/adjective) une personne excessivement avare et chiche.", "François est connu comme le plus grand radin de l'orchestre."),
        "gratter": ("gratter", "(verb) chercher à économiser de petites sommes de manière mesquine.", "Il cherche toujours à gratter quelques centimes sur chaque achat."),
        "radinerie": ("la radinerie", "(noun) le défaut de celui qui est excessivement attaché à l'argent.", "Sa radinerie légendaire lui isole de tous ses voisins."),
        "banquier": ("le banquier", "(noun) le conseiller financier chargé de la gestion des comptes.", "Son banquier hallucine devant le montant de son compte d'épargne inutilisé."),
        "calculateur": ("le calculateur / la calculatrice", "(noun/adjective) une personne qui prévoie tout avec intérêt et précision.", "Il se montre calculateur dès qu'il s'agit de partager l'addition au restaurant.")
    },
    # French - Ratatouille (French) (A2/B1)
    "ratatouille-french.html": {
        "Gastronomie": ("la gastronomie", "(noun) l'art de la bonne cuisine et le plaisir de la table.", "Remy possède une passion dévorante pour la grande gastronomie française."),
        "Inspiré": ("inspiré(e)", "(adjective) guidé par une grande créativité ou une intuition artistique.", "Remy prépare des sauces inspirées qui émerveillent le jeune Linguini."),
        "Préjugé": ("le préjugé", "(noun) une opinion préconçue donnée sans examen impartial.", "L'histoire montre comment surmonter les préjugés envers les plus modestes."),
        "Critique": ("le critique / la critique", "(noun) une personne qui évalue la qualité des œuvres d'art ou des repas.", "Anton Ego est le critique gastronomique le plus redouté de tout Paris."),
        "Savourer": ("savourer", "(verb) déguster lentement avec un plaisir profond.", "Remy apprend à savourer chaque association de fromage et de fruits."),
        "Cuisinier": ("le cuisinier / la cuisinière", "(noun) une personne qui prépare les repas dans un restaurant.", "Linguini tente d'agir comme un grand cuisinier grâce à l'aide secrète de Remy."),
        "Héritage": ("l'héritage (m.)", "(noun) ce qui est transmis par les générations précédentes.", "Le chef Skinner détruit l'héritage d'Auguste Gusteau en vendant des plats surgelés."),
        "Subtil": ("subtil(e)", "(adjective) délicat, raffiné et difficile à percevoir au premier coup d'œil.", "Remy cherche des mélanges de saveurs subtils et harmonieux."),
        "Épiphanie": ("l'épiphanie (f.)", "(noun) une prise de conscience soudaine et lumineuse.", "Une seule bouchée de ratatouille provoque une épiphanie nostalgique chez Ego."),
        "Équipe": ("l'équipe (f.)", "(noun) un groupe de personnes travaillant ensemble pour un même but.", "La colonie de rats forme une équipe soudée pour sauver le service du soir."),
        "Tout le monde peut cuisiner": ("tout le monde peut cuisiner", "(phrase) la célèbre devise du chef Gusteau célébrant le talent universel.", "'Tout le monde peut cuisiner' devient la devise qui guide les rêves de Remy."),
        "Petit chef": ("le petit chef", "(noun) le surnom affectueux donné à Remy caché sous la toque.", "Linguini appelle tendrement Remy son 'petit chef' durant les coups de feu en cuisine."),
        "L'héritage de Gusteau": ("l'héritage de Gusteau (m.)", "(noun) la philosophie culinaire et les recettes du grand chef parisien.", "Remy cherche à préserver l'héritage de Gusteau face à la cupidité de Skinner."),
        "Sous-chef": ("le sous-chef", "(noun) le cuisinier placé juste sous l'autorité du chef de cuisine.", "Colette occupe le poste de sous-chef avec une rigueur exemplaire."),
        "Critique gastronomique": ("le critique gastronomique", "(noun) un journaliste spécialisé dans l'évaluation des grands restaurants.", "L'arrivée du critique gastronomique met toute la brigade sous une pression immense."),
        "Rat de cuisine": ("le rat de cuisine (m.)", "(noun) l'expression désignant Remy travaillant en secret derrière les fourneaux.", "Ce petit rat de cuisine démontre un talent supérieur à celui des grands chefs."),
        "Plat de ratatouille": ("le plat de ratatouille (m.)", "(noun) la recette traditionnelle provençale à base de légumes mijotés.", "Remy choisit de cuisiner un plat de ratatouille populaire pour impressionner le critique."),
        "Souvenir d'enfance": ("le souvenir d'enfance (m.)", "(phrase) une mémoire chaleureuse liée à la jeunesse.", "La première bouchée éveille un doux souvenir d'enfance chez Anton Ego."),
        "Critique d'Anton Ego": ("la critique d'Anton Ego", "(noun) l'article légendaire publié dans le journal le lendemain du repas.", "La critique d'Anton Ego reconnaît qu'un grand artiste peut naître n'importe où."),
        "Passion culinaire": ("la passion culinaire", "(noun) l'amour profond pour la création et la dégustation des repas.", "La passion culinaire de Remy transforme la vision de tous les cuisiniers de Paris.")
    },
    # Russian - Karlik Nos (B1)
    "karlik-nos-dwarf-nose.html": {
        "Kindheartedness": ("добросердечность (ж.)", "(noun) качество человеческой души, проявляющееся в заботе и отзывчивости.", "Якоб сохраняет добросердечность вопреки жестоким испытаниям."),
        "overcoming curses": ("преодоление заклятий (ср.)", "(noun) борьба с колдовством и восстановление своего настоящего облика.", "Преодоление заклятий требует от героев верности и ума."),
        "inner beauty": ("внутренняя красота (ж.)", "(noun) душевные качества и доброта, скрытые за непривлекательной внешностью.", "Принцесса Грета распознает внутреннюю красоту Карлика Носа."),
        "Loyalty ≠ Betrayal": ("верность (ж.) ≠ предательство (ср.)", "(noun) преданность друзьям в противоположность коварному измену.", "Верность Якоба и Греты помогает им разрушить чары злодейки."),
        "ведьмино проклятие": ("ведьмино проклятие (ср.)", "(noun) злое колдовство, превратившее мальчика в горбатого карлика.", "Ведьмино проклятие лишает Якоба семьи на долгие годы."),
        "Проклятие": ("проклятие (ср.)", "(noun) заклинание, приносящее несчастье или трансформацию человека.", "Злая колдунья налагает проклятие на юного Якоба."),
        "колдовство": ("колдовство (ср.)", "(noun) применение темных волшебных сил и зелий.", "Колдовство старухи заставляет Якоба служить в её замке."),
        "доброта": ("доброта (ж.)", "(noun) душевное расположение к людям и стремление делать добро.", "Доброта героя помогает ему подружиться с заколдованной гусыней."),
        "превращение": ("превращение (ср.)", "(noun) изменение внешнего вида или формы человека под действием магии.", "Чудесное превращение возвращает Якобу его прежний облик."),
        "чудо-зелье": ("чудо-зелье (ср.)", "(noun) волшебный отвар или трава, снимающая чары.", "Особая трава 'чихотка' служит как чудо-зелье против проклятия.")
    },
    # Russian - Queendom (B2)
    "queendom.html": {
        "Reality TV aesthetics": ("эстетика реалити-шоу (ж.)", "(noun) яркий, провокационный визуальный стиль современных медиа.", "Фильм использует эстетику реалити-шоу для демонстрации протеста."),
        "competition": ("соперничество (ср.)", "(noun) борьба за признание и внимание аудитории.", "Соперничество с консервативным окружением закаляет характер артиста."),
        "Fame ≠ Obscurity": ("слава (ж.) ≠ неизвестность (ж.)", "(noun) широкая популярность в противоположность незаметному существованию.", "Гены стремится к славе через смелые публичные перформансы."),
        "Apparition": ("перформанс (м.) / появление (ср.)", "(noun) сценическое или арт-выступление перед публикой.", "Каждый перформанс становится прямым вызовом серости."),
        "Denial": ("отрицание (ср.)", "(noun) нежелание общества принимать иную индивидуальность.", "Артист сталкивается с отрицанием своей свободы со стороны прохожих."),
        "Протест": ("протест (м.)", "(noun) публичное выражение несогласия или сценический акт.", "Яркий костюм превращается в смелый протест против несправедливости."),
        "активизм": ("активизм (м.)", "(noun) активная деятельность, направленная на социальные изменения.", "Художественный активизм становится главным оружием главной героини."),
        "шоу": ("шоу (ср.)", "(noun) яркое зрелищное представление для публики.", "Каждый выход на улицу превращается в импровизированное шоу."),
        "образ": ("образ (м.)", "(noun) художественный или сценический внешний вид артиста.", "Её эпатажный образ привлекает внимание тысяч зрителей."),
        "корона": ("корона (ж.)", "(noun) символ королевского достоинства и самопринятия.", "Корона из подручных материалов символизирует внутреннее королевство.")
    },
    # Russian - Serebryanye Konki (B1)
    "serebryanye-konki.html": {
        "Class differences": ("классовые различия (м.pl.)", "(noun) социальное неравенство между беднотой и аристократией.", "Фильм подробно показывает классовые различия в Петербурге 1899 года."),
        "19th-century Saint Petersburg": ("Петербург XIX века (м.)", "(noun) историческая эпоха пышных балов и замерзших каналов.", "Петербург XIX века оживает во всем своем зимнем блеске."),
        "social change": ("социальные перемены (ж.pl.)", "(noun) стремление общества к прогрессу и образованию для женщин.", "Алиса мечтает о социальных переменах и учебе в университете."),
        "петербургские каналы": ("петербургские каналы (м.pl.)", "(noun) замерзшие водные артерии города, ставшие ярмаркой.", "На петербургских каналах разворачиваются захватывающие погони."),
        "классовые барьеры": ("классовые барьеры (м.pl.)", "(noun) социальные препятствия для любви курьера и аристократки.", "Любовь Матвея и Алисы преодолевает любые классовые барьеры."),
        "Коньки": ("коньки (м.pl.)", "(noun) серебряные коньки, доставшиеся Матвею от отца.", "Серебряные коньки становятся главным средством передвижения и работы."),
        "карманник": ("карманник (м.)", "(noun) ловкий мелкий вор, орудующий на зимних улицах.", "Матвей случайно примыкает к банде карманников на льду."),
        "аристократия": ("аристократия (ж.)", "(noun) высшее привилегированное сословие общества.", "Алиса тяготится лицемерными правилами, которые диктует аристократия."),
        "прорубь": ("прорубь (ж.)", "(noun) отверстие, прорубленное в льду реки или канала.", "Смельчаки соревнуются в скорости, огибая опасную прорубь."),
        "карманники": ("карманники (м.pl.)", "(noun) группа уличных воров, работающих в команде.", "Карманники обучают Матвея акробатическим трюкам на коньках.")
    },
    # Spanish - La Valla (B2)
    "la-valla.html": {
        "Dystopian future": ("el futuro distópico", "(noun) un mañana sombrío dominado por la escasez y el control autoritario.", "La serie presenta un futuro distópico en la España del año 2045."),
        "Surveillance ≠ Privacy": ("la vigilancia (f.) ≠ la privacidad (f.)", "(noun) el control constante del Estado opuesto a la libertad personal.", "La vigilancia militar limita cada movimiento de la familia Noval."),
        "Survival ≠ Extinction": ("la supervivencia (f.) ≠ la extinción (f.)", "(noun) la lucha por mantenerse con vida frente a la amenaza de un virus.", "La supervivencia diaria exige coraje frente a la escasez de medicinas."),
        "Solidarity ≠ Division": ("la solidaridad (f.) ≠ la división (f.)", "(noun) el apoyo mutuo entre ciudadanos frente a la barrera social.", "La solidaridad entre vecinos ayuda a superar los momentos más duros."),
        "barrera de Madrid": ("la valla de Madrid", "(noun) el muro físico que divide la capital en dos zonas desiguales.", "La valla de Madrid separa al Gobierno de los barrios desfavorecidos."),
        "Racionamiento": ("el racionamiento", "(noun) la distribución controlada de alimentos y recursos.", "La población sufre un estricto racionamiento de comida en el Sector 2."),
        "resistencia": ("la resistencia", "(noun) el grupo organizado que combate clandestinamente el régimen.", "La resistencia lucha por sacar a la luz los experimentos ilegales."),
        "clandestino": ("clandestino/a", "(adjective) que se hace de forma oculta para eludir la ley.", "Los ciudadanos mantienen reuniones de carácter clandestino por la noche."),
        "salvoconducto": ("el salvoconducto", "(noun) la autorización oficial para cruzar entre sectores.", "Conseguir un salvoconducto es vital para buscar a la pequeña Marta."),
        "toque de queda": ("el toque de queda", "(noun) la prohibición de circular por las calles a partir de cierta hora.", "El ejército patrulla estrictamente durante el toque de queda.")
    },
    # Spanish - Lending My Wings (B1)
    "lending-my-wings.html": {
        "Psychological support": ("el apoyo psicológico", "(noun) la ayuda profesional orientada al bienestar emocional.", "El tratamiento brinda un valioso apoyo psicológico durante la crisis."),
        "Empathy ≠ Apathy": ("la empatía (f.) ≠ la apatía (f.)", "(noun) la capacidad de comprender el dolor ajeno frente a la indiferencia.", "La empatía del terapeuta permite construir un diálogo sincero."),
        "therapeutic trust": ("la confianza terapéutica", "(noun) la seguridad mutua establecida entre profesional y paciente.", "La confianza terapéutica es esencial para sanar viejas heridas."),
        "Vulnerability ≠ Invulnerability": ("la vulnerabilidad (f.) ≠ la invulnerabilidad (f.)", "(noun) la apertura emocional sin miedo a la fragilidad.", "Aceptar la vulnerabilidad propia es el primer paso hacia la recuperación."),
        "vulnerabilidad mental": ("la vulnerabilidad mental", "(noun) el estado de fragilidad o sensibilidad emocional.", "El protagonista aprende a gestionar su vulnerabilidad mental sin culpa."),
        "Abrirse": ("abrirse", "(verb) expresar los sentimientos y pensamientos más íntimos con confianza.", "Al paciente le cuesta abrirse durante las primeras sesiones de terapia."),
        "vulnerabilidad": ("la vulnerabilidad", "(noun) la cualidad de mostrar las emociones con sinceridad.", "Mostrar vulnerabilidad ayuda a conectar de forma auténtica con los demás."),
        "empatía": ("la empatía", "(noun) la facultad de ponerse en el lugar de otra persona.", "La empatía compartida fortalece el vínculo affective entre los personajes."),
        "confianza": ("la confianza", "(noun) la fe o seguridad firme que se deposita en alguien.", "Recuperar la confianza exige tiempo, paciencia y pequeños pasos cotidianos."),
        "psicoterapeuta": ("el psicoterapeuta / la psicoterapeuta", "(noun) el profesional de la salud mental que guía el proceso de sanación.", "La psicoterapeuta acompaña el proceso de autodescubrimiento con gran respeto.")
    }
}

def is_sentence_start_proper_or_grammar_title(text, full_item_text, grammar_focus):
    """Determines if the text inside <strong> should remain capitalized."""
    clean_text = text.strip()
    if not clean_text:
        return True

    # 1. Do not lowercase Grammar Focus title match or multi-word grammatical titles
    if grammar_focus and (clean_text.lower() in grammar_focus.lower() or grammar_focus.lower() in clean_text.lower()):
        return True

    # Any multi-word capitalized phrase that looks like a title (e.g., Grammar Focus titles or key thematic headings)
    words = clean_text.split()
    if len(words) > 1 and all(w[0].isupper() or w in ["&", "/", "and", "or", "of", "in", "for", "vs.", "to", "with"] for w in words):
        return True

    # 2. Check if exact match to proper noun/acronym or starts with proper noun
    if clean_text in PROPER_NOUNS_AND_ACRONYMS:
        return True

    first_word = clean_text.split()[0].strip(".,!?:;\"'()[]")
    if first_word in PROPER_NOUNS_AND_ACRONYMS:
        return True

    # 3. Check if it appears right after sentence ending punctuation (. ! ?) in the full item text
    pattern = r'(?:^|[.!?]\s+|\"\s*|\'\s*)<strong>' + re.escape(text) + r'</strong>'
    if re.search(pattern, full_item_text):
        return True

    return False

def fix_strong_tags(content, grammar_focus):
    """Lowercases <strong> tags in discussion items unless sentence initial, proper noun, or grammar title."""
    def replace_item(match):
        item_type = match.group(1) # main or personal
        item_text = match.group(2)

        def replace_strong(s_match):
            strong_inside = s_match.group(1)
            clean_s = strong_inside.strip()

            if is_sentence_start_proper_or_grammar_title(clean_s, item_text, grammar_focus):
                return s_match.group(0) # Keep as is

            # Lowercase single vocabulary terms cleanly
            lowered = clean_s.lower()
            return f"<strong>{lowered}</strong>"

        new_item_text = re.sub(r'<strong>(.*?)</strong>', replace_strong, item_text)
        return f'<div class="{item_type}">{new_item_text}</div>'

    return re.sub(r'<div class=[\"\'](round-item-(?:main|personal))[\"\']>(.*?)</div>', replace_item, content, flags=re.DOTALL)

def process_session_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    original_content = content

    # Get grammar focus title if present (strip inner HTML tags if any)
    gf_match = re.search(r'<h4>Grammar Focus</h4>\s*<p>(.*?)</p>', content, flags=re.DOTALL)
    grammar_focus = ""
    if gf_match:
        grammar_focus = re.sub(r'<[^>]+>', '', gf_match.group(1)).strip()

    # 1. Lowercase strong tags in discussion rounds appropriately
    content = fix_strong_tags(content, grammar_focus)

    # 2. Process non-English vocabulary definitions and genders if in DB
    if fname in NON_EN_VOCAB_DB:
        vocab_map = NON_EN_VOCAB_DB[fname]

        def replace_vocab_card(match):
            card_html = match.group(0)
            word_match = re.search(r'<div class=[\"\']vocab-word[\"\']>(.*?)</div>', card_html)
            if word_match:
                word_raw = word_match.group(1).strip()
                if word_raw in vocab_map:
                    new_word, new_def, new_ex = vocab_map[word_raw]

                    escaped_word = new_word.replace("'", "\\'")
                    escaped_def = new_def.replace("'", "\\'")
                    escaped_ex = new_ex.replace("'", "\\'")

                    new_card = f"""<div class="vocab-card"><div class="vocab-word">{new_word}</div>
<div class="vocab-def">{new_def}</div>
<div class="vocab-example">{new_ex}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
</div>"""
                    return new_card
            return card_html

        content = re.sub(r'<div class=[\"\']vocab-card[\"\']>.*?<button.*?</button>\s*</div>', replace_vocab_card, content, flags=re.DOTALL)

    if content != original_content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

def main():
    files = sorted(glob.glob(os.path.join(SESSIONS_DIR, "*.html")))
    print(f"Processing {len(files)} Cinema Club session files for CEFR level adaptation, strong tag case, and gender markers...")

    updated_count = 0
    for fpath in files:
        if process_session_file(fpath):
            updated_count += 1

    print(f"Successfully updated {updated_count} files out of {len(files)}!")

if __name__ == "__main__":
    main()
