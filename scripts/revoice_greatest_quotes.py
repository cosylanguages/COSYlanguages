import os
from bs4 import BeautifulSoup

# Templates for English
EN_R1_MAIN = [
    "How does the pursuit of <strong>{word}</strong> influence our perception of success and failure in modern life?",
    "Is it possible to find true balance when <strong>{word}</strong> is either completely absent or excessive?",
    "Why do we often struggle to cultivate <strong>{word}</strong> even when we know it is beneficial?",
    "How does <strong>{word}</strong> reshape our emotional landscape during times of intense change?",
    "Can <strong>{word}</strong> act as a silent shield against the demands of social conformity?",
    "How do our childhood experiences shape our relationship with <strong>{word}</strong> as adults?",
    "In what ways does <strong>{word}</strong> challenge the rigid boundaries of logical thinking?",
    "How does embracing <strong>{word}</strong> change the way we handle interpersonal conflict?",
    "Is <strong>{word}</strong> a quality of quiet solitude, or does it thrive in noisy communities?",
    "What is the most profound lesson that <strong>{word}</strong> can teach us about our own nature?"
]

EN_R1_PERS = [
    "★ When was the last time you had to confront <strong>{word}</strong> in your own personal journey?",
    "★ How comfortable are you with allowing <strong>{word}</strong> to guide your daily decisions?",
    "★ Have you ever felt a deep sense of conflict regarding <strong>{word}</strong> in a relationship?",
    "★ Can you share a moment from your childhood where <strong>{word}</strong> felt completely natural?",
    "★ How do you personally nurture <strong>{word}</strong> when you feel emotionally exhausted?",
    "★ Have you ever had to choose between social conformity and personal <strong>{word}</strong>?",
    "★ Who in your life best embodies the essence of <strong>{word}</strong>, and what have they taught you?",
    "★ In what area of your life do you feel <strong>{word}</strong> is most desperately needed right now?",
    "★ How has your personal understanding of <strong>{word}</strong> shifted over the last five years?",
    "★ If you had to describe your personal experience with <strong>{word}</strong> in one word, what would it be?"
]

EN_R2_MAIN = [
    "In the future, technology will enable us to digitize and share our experience of <strong>{word}</strong> directly. — Do you agree or disagree?",
    "The rapid speed of modern society will eventually make <strong>{word}</strong> an obsolete concept. — Do you agree or disagree?",
    "Future educational systems will prioritize the cultivation of <strong>{word}</strong> over traditional academic skills. — Do you agree or disagree?",
    "As artificial intelligence advances, machines will exhibit a superior capacity for <strong>{word}</strong> compared to humans. — Do you agree or disagree?",
    "In the coming decades, <strong>{word}</strong> will become a highly commercialized luxury commodity. — Do you agree or disagree?",
    "The survival of human civilization will depend on our collective ability to practice <strong>{word}</strong>. — Do you agree or disagree?",
    "Future generations will look back at our current understanding of <strong>{word}</strong> with deep skepticism. — Do you agree or disagree?",
    "Global digital connectivity will make true <strong>{word}</strong> incredibly difficult to maintain in the future. — Do you agree or disagree?",
    "In the future, social status will be determined by a person's capacity for <strong>{word}</strong> rather than wealth. — Do you agree or disagree?",
    "A world fully governed by logic will have no space left for the mystery of <strong>{word}</strong>. — Do you agree or disagree?"
]

EN_R2_PERS = [
    "★ How would you personally adapt if <strong>{word}</strong> became entirely obsolete in tomorrow's world?",
    "★ Would you be willing to use technology to artificially boost your capacity for <strong>{word}</strong>?",
    "★ How do you want future generations of your family to remember your relationship with <strong>{word}</strong>?",
    "★ If you could design a futuristic school, how would you teach the value of <strong>{word}</strong> to children?",
    "★ Do you fear a future where <strong>{word}</strong> is fully managed or monitored by digital algorithms?",
    "★ How do you personally prepare for a future where <strong>{word}</strong> is increasingly rare?",
    "★ If you could send a single message about <strong>{word}</strong> to people living 100 years in the future, what would it be?",
    "★ Would you choose to live in a futuristic utopia that completely guarantees <strong>{word}</strong> at the cost of your freedom?",
    "★ What role do you hope <strong>{word}</strong> will play in your own personal future over the next decade?",
    "★ If a machine could perfectly replicate your experience of <strong>{word}</strong>, would you still value it?"
]

# Templates for French
FR_R1_MAIN = [
    "Comment la quête de <strong>{word}</strong> influence-t-elle notre perception de la réussite dans la vie moderne ?",
    "Est-il possible de trouver un équilibre lorsque <strong>{word}</strong> est complètement absent ou excessif ?",
    "Pourquoi avons-nous souvent du mal à cultiver <strong>{word}</strong> même lorsque nous savons que c'est bénéfique ?",
    "Comment <strong>{word}</strong> transforme-t-il notre paysage émotionnel en période de grand changement ?",
    "<strong>{word}</strong> peut-il agir comme un bouclier silencieux contre les exigences du conformisme social ?",
    "Comment nos expériences d'enfance façonnent-elles notre relation avec <strong>{word}</strong> à l'âge adulte ?",
    "De quelles manières <strong>{word}</strong> remet-il en question les frontières rigides de la pensée logique ?",
    "Comment le fait d'embrasser <strong>{word}</strong> change-t-il notre façon de gérer les conflits interpersonnels ?",
    "<strong>{word}</strong> est-il une qualité de solitude tranquille, ou s'épanouit-il dans les communautés bruyantes ?",
    "Quelle est la leçon la plus profonde que <strong>{word}</strong> peut nous enseigner sur notre propre nature ?"
]

FR_R1_PERS = [
    "★ Quand avez-vous dû faire face à <strong>{word}</strong> pour la dernière fois dans votre propre parcours ?",
    "★ Dans quelle mesure êtes-vous à l'aise pour laisser <strong>{word}</strong> guider vos décisions quotidiennes ?",
    "★ Avez-vous déjà ressenti un profond conflit concernant <strong>{word}</strong> dans une relation ?",
    "★ Pouvez-vous partager un moment de votre enfance où <strong>{word}</strong> vous semblait tout à fait naturel ?",
    "★ Comment nourrissez-vous personnellement <strong>{word}</strong> lorsque vous vous sentez épuisé émotionnellement ?",
    "★ Avez-vous déjà dû choisir entre le conformisme social et votre propre <strong>{word}</strong> ?",
    "★ Qui dans votre vie incarne le mieux l'essence de <strong>{word}</strong>, et qu'est-ce que cela vous a appris ?",
    "★ Dans quel domaine de votre vie pensez-vous que <strong>{word}</strong> est le plus désespérément nécessaire en ce moment ?",
    "★ Comment votre compréhension personnelle de <strong>{word}</strong> a-t-elle évolué au cours des fins de cinq dernières années ?",
    "★ Si vous deviez décrire votre expérience personnelle de <strong>{word}</strong> en un mot, quel serait-il ?"
]

FR_R2_MAIN = [
    "À l'avenir, la technologie nous permettra de numériser et de partager directement notre expérience de <strong>{word}</strong>. — Êtes-vous d'accord ou pas d'accord ?",
    "Le rythme rapide de la société moderne finira par faire de <strong>{word}</strong> un concept obsolète. — Êtes-vous d'accord ou pas d'accord ?",
    "Les futurs systèmes éducatifs donneront la priorité à la culture de <strong>{word}</strong> plutôt qu'aux compétences académiques. — Êtes-vous d'accord ou pas d'accord ?",
    "Avec les progrès de l'intelligence artificielle, les machines feront preuve d'une capacité supérieure de <strong>{word}</strong> par rapport aux humains. — Êtes-vous d'accord ou pas d'accord ?",
    "Dans les décennies à venir, <strong>{word}</strong> deviendra un produit de luxe hautement commercialisé. — Êtes-vous d'accord ou pas d'accord ?",
    "La survie de la civilisation humaine dépendra de notre capacité collective à pratiquer <strong>{word}</strong>. — Êtes-vous d'accord ou pas d'accord ?",
    "Les générations futures regarderont notre compréhension actuelle de <strong>{word}</strong> avec un profond scepticisme. — Êtes-vous d'accord ou pas d'accord ?",
    "La connectivité numérique mondiale rendra le véritable <strong>{word}</strong> incroyablement difficile à maintenir à l'avenir. — Êtes-vous d'accord ou pas d'accord ?",
    "À l'avenir, le statut social sera déterminé par la capacité d'une personne à exprimer <strong>{word}</strong> plutôt que par sa richesse. — Êtes-vous d'accord ou pas d'accord ?",
    "Un monde entièrement régi par la logique ne laissera plus de place au mystère de <strong>{word}</strong>. — Êtes-vous d'accord ou pas d'accord ?"
]

FR_R2_PERS = [
    "★ Comment vous adapteriez-vous personnellement si <strong>{word}</strong> devenait totalement obsolète dans le monde de demain ?",
    "★ Seriez-vous prêt à utiliser la technologie pour stimuler artificiellement votre capacité de <strong>{word}</strong> ?",
    "★ Comment voulez-vous que les futures générations de votre famille se souviennent de votre relation avec <strong>{word}</strong> ?",
    "★ Si vous deviez concevoir une école du futur, comment enseigneriez-vous la valeur de <strong>{word}</strong> aux enfants ?",
    "★ Craignez-vous un avenir où <strong>{word}</strong> serait entièrement géré ou surveillé par des algorithmes numériques ?",
    "★ Comment vous préparez-vous personnellement à un avenir où <strong>{word}</strong> se fera de plus en plus rare ?",
    "★ Si vous pouviez envoyer un message unique concernant <strong>{word}</strong> aux personnes vivant dans 100 ans, quel serait-il ?",
    "★ Choisiriez-vous de vivre dans une utopie futuriste qui garantit pleinement <strong>{word}</strong> au détriment de votre liberté ?",
    "★ Quel rôle espérez-vous que <strong>{word}</strong> jouera dans votre propre avenir au cours de la prochaine décennie ?",
    "★ Si une machine pouvait reproduire parfaitement votre expérience de <strong>{word}</strong>, y accorderiez-vous toujours de la valeur ?"
]

# Templates for Russian
RU_R1_MAIN = [
    "Как стремление к <strong>{word}</strong> влияет на наше восприятие успеха и неудач в современной жизни?",
    "Возможно ли найти истинный баланс, если <strong>{word}</strong> полностью отсутствует или проявляется в избытке?",
    "Почему мы часто изо всех сил пытаемся развивать в себе <strong>{word}</strong>, даже когда знаем, что это полезно?",
    "Как <strong>{word}</strong> меняет наш эмоциональный ландшафт в периоды серьезных жизненных перемен?",
    "Может ли <strong>{word}</strong> выступать в роли невидимого щита против требований социального конформизма?",
    "Как наши детские переживания формируют наше отношение к <strong>{word}</strong> во взрослом возрасте?",
    "Каким образом <strong>{word}</strong> бросает вызов жестким границам логического мышления?",
    "Как принятие <strong>{word}</strong> меняет то, как мы справляемся с межличностными конфликтами?",
    "Является ли <strong>{word}</strong> качеством тихого уединения или оно лучше всего расцветает в шумном обществе?",
    "Какой самый глубокий урок <strong>{word}</strong> может преподать нам о нашей собственной природе?"
]

RU_R1_PERS = [
    "★ Когда в последний раз вам приходилось сталкиваться с <strong>{word}</strong> на своем жизненном пути?",
    "★ Насколько вам комфортно позволять <strong>{word}</strong> направлять ваши повседневные решения?",
    "★ Чувствовали ли вы когда-нибудь глубокий внутренний конфликт из-за <strong>{word}</strong> в отношениях?",
    "★ Можете ли вы вспомнить момент из детства, когда <strong>{word}</strong> казалось чем-то совершенно естественным?",
    "★ Как вы лично восстанавливаете в себе <strong>{word}</strong>, когда чувствуете эмоциональное истощение?",
    "★ Приходилось ли вам когда-нибудь выбирать между общественным одобрением и личным <strong>{word}</strong>?",
    "★ Кто в вашей жизни лучше всего воплощает суть <strong>{word}</strong>, и чему вы у него научились?",
    "★ В какой сфере вашей жизни, по вашему мнению, <strong>{word}</strong> больше всего необходимо прямо сейчас?",
    "★ Как изменилось ваше личное понимание <strong>{word}</strong> за последние пять лет?",
    "★ Если бы вам пришлось описать свой личный опыт общения с <strong>{word}</strong> одним словом, какое бы это было слово?"
]

RU_R2_MAIN = [
    "В будущем технологии позволят нам оцифровывать и передавать свой опыт <strong>{word}</strong> напрямую другим. — Вы согласны или не согласны?",
    "Стремительный темп современного общества со временем превратит <strong>{word}</strong> в устаревшее понятие. — Вы согласны или не согласны?",
    "Будущие образовательные системы будут уделять приоритетное внимание развитию <strong>{word}</strong>, а не стандартным академическим навыкам. — Вы согласны или не согласны?",
    "По мере развития искусственного интеллекта машины продемонстрируют превосходную способность к <strong>{word}</strong> по сравнению с людьми. — Вы согласны или не согласны?",
    "В ближайшие десятилетия <strong>{word}</strong> превратится в коммерциализированный предмет роскоши. — Вы согласны или не согласны?",
    "Выживание человеческой цивилизации будет зависеть от нашей коллективной способности проявлять <strong>{word}</strong>. — Вы согласны или не согласны?",
    "Будущие поколения будут смотреть на наше нынешнее понимание <strong>{word}</strong> с глубоким скептицизмом. — Вы согласны или не согласны?",
    "Глобальная цифровая связь сделает истинное сохранение <strong>{word}</strong> невероятно сложной задачей в будущем. — Вы согласны или не согласны?",
    "В будущем социальный статус человека будет определяться его способностью к <strong>{word}</strong>, а не богатством. — Вы согласны или не согласны?",
    "В мире, полностью управляемом логикой, не останется места для тайны <strong>{word}</strong>. — Вы согласны или не согласны?"
]

RU_R2_PERS = [
    "★ Как бы вы лично приспособились, если бы <strong>{word}</strong> полностью исчезло в завтрашнем мире?",
    "★ Согласились бы вы использовать технологии для искусственного повышения вашей способности к <strong>{word}</strong>?",
    "★ Каким бы вы хотели, чтобы будущие поколения вашей семьи помнили ваше отношение к <strong>{word}</strong>?",
    "★ Если бы вы могли спроектировать футуристическую школу, как бы вы обучали детей ценности <strong>{word}</strong>?",
    "★ Боитесь ли вы будущего, в котором <strong>{word}</strong> будет полностью управляться или контролироваться цифровыми алгоритмами?",
    "★ Как вы лично готовитесь к будущему, в котором <strong>{word}</strong> становится все большей редкостью?",
    "★ Если бы вы могли отправить одно послание о важности <strong>{word}</strong> людям, живущим через 100 лет, что бы вы им сказали?",
    "★ Выбрали ли бы вы жизнь в футуристической утопии, которая гарантирует <strong>{word}</strong> ценой вашей личной свободы?",
    "★ Какую роль, по вашему мнению, <strong>{word}</strong> сыграет в вашей личной жизни в течение следующего десятилетия?",
    "★ Если бы машина могла идеально воспроизвести ваш опыт переживания <strong>{word}</strong>, стали бы вы по-прежнему ценить его?"
]

def clean_vocab_word(word, lang):
    clean = word.split("≠")[0].strip()
    clean = clean.replace(" (f)", "").replace(" (он)", "").replace(" (она)", "").replace(" (оно)", "").replace(" (они)", "").replace(" (м)", "").replace(" (ж)", "")
    if lang == 'fr':
        if clean.lower().startswith("l'"):
            clean = clean[2:]
        elif clean.lower().startswith("l’"):
            clean = clean[2:]
        elif clean.lower().startswith("la "):
            clean = clean[3:]
        elif clean.lower().startswith("le "):
            clean = clean[3:]
        elif clean.lower().startswith("les "):
            clean = clean[4:]
    return clean.strip()

def process_file(filepath, lang):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Get vocabulary words
    vocab_cards = soup.find_all('div', class_='vocab-card')
    vocab_words = []
    for card in vocab_cards:
        word_div = card.find('div', class_='vocab-word')
        if word_div:
            vocab_words.append(word_div.get_text(strip=True))

    if not vocab_words:
        print(f"No vocab words found in {filepath}. Skipping.")
        return

    # Clean words
    cleaned_words = [clean_vocab_word(w, lang) for w in vocab_words]

    # Select templates
    if lang == 'fr':
        r1_main_tpl = FR_R1_MAIN
        r1_pers_tpl = FR_R1_PERS
        r2_main_tpl = FR_R2_MAIN
        r2_pers_tpl = FR_R2_PERS
    elif lang == 'ru':
        r1_main_tpl = RU_R1_MAIN
        r1_pers_tpl = RU_R1_PERS
        r2_main_tpl = RU_R2_MAIN
        r2_pers_tpl = RU_R2_PERS
    else:
        r1_main_tpl = EN_R1_MAIN
        r1_pers_tpl = EN_R1_PERS
        r2_main_tpl = EN_R2_MAIN
        r2_pers_tpl = EN_R2_PERS

    # Is this a generated file or hand-written?
    is_generated = False
    text_content = soup.get_text()
    if ("navigate modern societal expectations and personal integrity" in text_content or
        "undergo a profound cultural shift" in text_content or
        "Comment le concept de" in text_content and "influence-t-il nos choix quotidiens" in text_content or
        "Как понятие" in text_content and "связано с психологической свободой" in text_content):
        is_generated = True

    # 1. Update Round 1
    r1_block = soup.find(id='s-r1')
    if r1_block:
        r1_body = r1_block.find('div', class_='round-body')
        if r1_body:
            existing_items = r1_body.find_all('div', class_='round-item')

            if is_generated or not existing_items:
                for item in existing_items:
                    item.decompose()

                # Append 10 new items
                for i in range(10):
                    word_idx = i % len(cleaned_words)
                    word = cleaned_words[word_idx]
                    main_text = r1_main_tpl[i % len(r1_main_tpl)].format(word=word)
                    pers_text = r1_pers_tpl[i % len(r1_pers_tpl)].format(word=word)

                    new_item_html = f"""          <div class="round-item">
            <div class="round-item-main">{main_text}</div>
            <div class="round-item-personal">{pers_text}</div>
          </div>"""
                    new_item = BeautifulSoup(new_item_html, 'html.parser')
                    r1_body.append(new_item)
            else:
                for i, item in enumerate(existing_items):
                    main_div = item.find('div', class_='round-item-main')
                    if not main_div:
                        inner_html = "".join([str(c) for c in item.contents])
                        item.clear()
                        main_div = soup.new_tag('div', attrs={'class': 'round-item-main'})
                        main_div.append(BeautifulSoup(inner_html, 'html.parser'))
                        item.append(main_div)

                    pers_div = item.find('div', class_='round-item-personal')
                    if not pers_div:
                        word_idx = i % len(cleaned_words)
                        word = cleaned_words[word_idx]
                        pers_text = r1_pers_tpl[i % len(r1_pers_tpl)].format(word=word)
                        new_pers_div = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                        new_pers_div.append(BeautifulSoup(pers_text, 'html.parser'))
                        item.append(new_pers_div)

    # 2. Update Round 2
    r2_block = soup.find(id='s-r2')
    if r2_block:
        r2_body = r2_block.find('div', class_='round-body')
        if r2_body:
            existing_items = r2_body.find_all('div', class_='round-item')

            # To absolutely guarantee that 100% of the files have Round 2 main statements
            # that are future-focused and in agree/disagree format, we always replace Round 2
            # with our beautiful future-focused speculative templates.
            for item in existing_items:
                item.decompose()

            # Append 10 new items
            for i in range(10):
                word_idx = i % len(cleaned_words)
                word = cleaned_words[word_idx]
                main_text = r2_main_tpl[i % len(r2_main_tpl)].format(word=word)
                pers_text = r2_pers_tpl[i % len(r2_pers_tpl)].format(word=word)

                new_item_html = f"""          <div class="round-item">
            <div class="round-item-main">{main_text}</div>
            <div class="round-item-personal">{pers_text}</div>
          </div>"""
                new_item = BeautifulSoup(new_item_html, 'html.parser')
                r2_body.append(new_item)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Successfully processed {filepath} ({'generated' if is_generated else 'hand-written'})")

def run():
    paths = [
        ('events/sessions/the-greatest-quotes', 'en'),
        ('events/fr/sessions/the-greatest-quotes', 'fr'),
        ('events/ru/sessions/the-greatest-quotes', 'ru')
    ]

    for path, lang in paths:
        if not os.path.exists(path):
            continue
        for filename in os.listdir(path):
            if filename.endswith('.html') and not filename.startswith('template'):
                filepath = os.path.join(path, filename)
                process_file(filepath, lang)

if __name__ == '__main__':
    run()
