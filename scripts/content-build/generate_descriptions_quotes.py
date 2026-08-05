import os
import glob
import re
from bs4 import BeautifulSoup

# --- LOOKUPS FOR THEMES THAT DO NOT HAVE EM-DASH IN H1 ---
FALLBACKS = {
    "en": {
        "accept-gay-child.html": ("Parent Advocates", "If you don't accept having a gay child, don't become a parent."),
        "ai-opposite-of-art-intermediate.html": ("Madonna", "Algorithms and artificial intelligence are the opposite of taking risks and to me that is the opposite of making art."),
        "ai-opposite-of-art-upper-intermediate.html": ("Madonna", "Algorithms and artificial intelligence are the opposite of taking risks and to me that is the opposite of making art."),
        "dangerous-blindness-perspective.html": ("Perspective Advocates", "The most dangerous blindness is to believe that one's own perspective is the only possible reality."),
        "favorite-days-not-happened.html": ("Dreamers", "My favorite days are those that never happened, those I imagined in such detail in my mind."),
        "home-is-a-time.html": ("Nostalgic Souls", "Home is a time, not a place."),
        "must-die-first.html": ("Mystical Thinkers", "You must die first to appreciate the beauty of true rebirth."),
        "saudade.html": ("Portuguese Poets", "Saudade is a deep emotional state of nostalgic longing for an absent something or someone."),
        "sonder.html": ("John Koenig", "Sonder is the realization that each random passerby is living a life as vivid and complex as your own."),
        "women-mothers-tragedy.html": ("Oscar Wilde", "The tragedy of women is that they eventually become like their mothers."),
        "stay-free-quote.html": ("Freedom Lovers", "None of us really have a choice in anything but we do have a choice to be ourselves. Stay free.")
    },
    "fr": {
        "accept-gay-child.html": ("Défenseurs de l'acceptation", "Si vous n'acceptez pas d'avoir un enfant gay, ne devenez pas parent."),
        "ai-opposite-of-art.html": ("Madonna", "Les algorithmes et l'intelligence artificielle sont l'opposé de la prise de risque, et pour moi, c'est l'opposé de la création artistique."),
        "dangerous-blindness-perspective.html": ("Défenseurs de la perspective", "L'aveuglement le plus dangereux consiste à croire que notre propre point de vue est la seule réalité possible."),
        "favorite-days-not-happened.html": ("Rêveurs", "Mes jours préférés sont ceux qui ne se sont jamais produits, ceux que j'ai imaginés avec tant de détails dans mon esprit."),
        "home-is-a-time.html": ("Âmes nostalgiques", "Le foyer n'est pas un espace géographique, c'est une époque de notre vie que l'on ne peut jamais retrouver."),
        "la-sagesse-de-socrate.html": ("Socrate", "La seule vraie sagesse est de savoir que vous ne savez rien."),
        "must-die-first.html": ("Penseurs mystiques", "On doit mourir d'abord pour pouvoir apprécier la beauté de la véritable renaissance."),
        "saudade.html": ("Poètes portugais", "La Saudade est un état émotionnel profond de nostalgie ou de mélancolie pour quelque chose ou quelqu'un d'absent."),
        "sonder.html": ("John Koenig", "Sonder est la prise de conscience que chaque passant aléatoire mène une vie aussi intense et complexe que la nôtre."),
        "women-mothers-tragedy.html": ("Oscar Wilde", "La tragédie des femmes est qu'elles finissent par ressembler à leur mère."),
        "you-are-a-soul.html": ("C.S. Lewis", "Vous n'avez pas une âme. Vous êtes une âme. Vous avez un corps."),
        "voltaire-read-dance-quote.html": ("Voltaire", "Laissez lire, et laissez danser; ces deux amusements ne feront jamais de mal au monde."),
        "dolto-difficult-child-quote.html": ("Françoise Dolto", "L'enfant a le droit d'être difficile, c'est seulement ainsi qu'il apprend à être lui-même.")
    },
    "ru": {
        "alisa-freindlich-inner-child-elementary.html": ("Алиса Фрейндлих", "Чем дольше мы сохраняем в себе ребенка, тем дольше сохраняются данные нам от природы таланты."),
        "alisa-freindlich-inner-child-intermediate.html": ("Алиса Фрейндлих", "Чем дольше мы сохраняем в себе ребенка, тем дольше сохраняются данные нам от природы таланты."),
        "dolto-difficult-child-quote.html": ("Франсуаза Дольто", "Ребенок имеет право быть трудным, только так он учится быть собой."),
        "dostoevsky-loving-power-quote.html": ("Федор Достоевский", "Любить — значит давать кому-то силу уничтожить тебя, но верить, что он этого не сделает."),
        "dostoevsky-politics-religion-quote.html": ("Федор Достоевский", "Хочешь узнать человека — поговори с ним о политике, религии и женщинах."),
        "langle-suppressed-child-quote.html": ("Альфрид Лэнгле", "Если ребенок всегда удобен, значит, он уже подавил часть себя."),
        "neufeld-resistance-quote.html": ("Гордон Ньюфелд", "Настоящие проблемы начинаются не тогда, когда ребенок сопротивляется, а когда он перестает сопротивляться."),
        "prishvin-convenient-people-quote.html": ("Михаил Пришвин", "Наши родители с детства делали из нас 'удобных' людей, а потом всю жизнь удивлялись, почему мы такие бесхребетные."),
        "sukhomlinsky-obedience-quote.html": ("Василий Сухомлинский", "Самое страшное в ребенке — это привычка подчиняться без рассуждений. Так вырастает равнодушный и безвольный человек."),
        "think-for-yourself-quote.html": ("Неизвестный автор", "Ты так думаешь или тебе сказали так думать?")
    }
}

# --- AUTHOR DESCRIPTIONS ---
AUTHOR_DESC = {
    "en": {
        "madonna": "redefined pop culture and pushed the boundaries of artistic freedom for decades",
        "alisa-freindlich": "captivated generations of theatre and cinema lovers with her unparalleled grace and profound dramatic intensity",
        "amish-tripathi": "reimagined ancient mythologies to explore the deep psychological truths of the human heart",
        "barbra-streisand": "shattered conventional Hollywood standards with her extraordinary voice and fierce, uncompromising individuality",
        "brianna-pastor": "pours raw vulnerability onto the page, capturing the delicate and painful process of healing",
        "einstein": "reconfigured our entire understanding of the cosmos while holding onto a childlike sense of wonder",
        "feynman": "unlocked the mysteries of quantum physics while passionately defending intellectual freedom, playfulness, and honesty",
        "steve-jobs": "revolutionized technology and design by merging cold engineering with the warm, rebellious spirit of art",
        "socrates": "challenged the foundation of Western thought by asking questions that exposed the limits of human certainty",
        "dolto": "revolutionized child psychoanalysis by treating children as full human beings with their own rights and voices",
        "langle": "developed existential analysis to help individuals find inner consent and live authentic lives",
        "neufeld": "deeply analyzed developmental psychology, showing that children's resistance is a natural shield for self-discovery",
        "dostoevsky": "plunged into the darkest and most beautiful depths of the human psyche through his intense novels",
        "memory-cards": "examines the subtle ways in which digital landscapes and consumer culture reshape our intimate memories",
        "robin-williams": "brought explosive joy to millions while carrying a quiet, deeply empathetic understanding of human sadness",
        "sadia-hakim": "uses poignant prose to observe the stark contrasts between crowded modern spaces and emotional isolation",
        "virginia-woolf": "captured the shifting currents of consciousness, using literature to express the unspeakable weights of existence",
        "voltaire": "defended free thought, tolerance, and the simple, harmless pleasures of life against rigid dogmas",
        "you-are-a-soul": "explored the boundaries of faith, mythology, and the transcendent nature of the human soul",
        "women-mothers": "challenged Victorian hypocrisy with his razor-sharp wit and profound aesthetic philosophy",
        "anonymous": "represents the collective, quiet wisdom of observers who find deep meaning in the fabric of everyday life"
    },
    "fr": {
        "madonna": "a redéfini la culture pop et repoussé les limites de la liberté artistique pendant des décennies",
        "alisa-freindlich": "a captivé des générations d'amateurs de théâtre et de cinéma avec sa grâce incomparable et sa profonde intensité dramatique",
        "voltaire": "a défendu la liberté de pensée, la tolérance et les plaisirs simples et inoffensifs de la vie contre les dogmes rigides",
        "socrates": "a remis en question les fondements de la pensée occidentale en posant des questions qui révélaient les limites de la certitude humaine",
        "dolto": "a révolutionné la psychanalyse de l'enfance en traitant les enfants comme des êtres humains à part entière, dotés de leurs propres droits et de leur propre voix",
        "dostoevsky": "a plongé dans les profondeurs les plus sombres et les plus belles de la psyché humaine à travers ses romans intenses",
        "you-are-a-soul": "a exploré les frontières de la foi, de la mythologie et de la nature de l'âme humaine",
        "women-mothers": "a défié l'hypocrisie de son époque avec son esprit acéré et sa profonde philosophie esthétique",
        "anonymous": "représente la sagesse collective et tranquille des observateurs qui trouvent un sens profond dans le quotidien"
    },
    "ru": {
        "alisa-freindlich": "покорила поколения любителей театра и кино своим непревзойденным изяществом и глубокой драматической силой",
        "dolto": "произвела революцию в детском психоанализе, относясь к детям как к полноценным личностям со своими собственными правами и голосом",
        "dostoevsky": "проник в самые темные и прекрасные глубины человеческой души в своих великих романах",
        "langle": "разработал экзистенциальный анализ, чтобы помочь людям обрести внутреннее согласие и жить подлинной жизнью",
        "neufeld": "глубоко проанализировал возрастную психологию, показав, что детское сопротивление — это естественный щит для самопознания",
        "prishvin": "находил глубокую мудрость в природе и человеческих отношениях, предостерегая от слепого конформизма",
        "sukhomlinsky": "посвятил жизнь гуманной педагогике, защищая право ребенка на собственное мнение и внутреннюю свободу",
        "anonymous": "олицетворяет коллективную, тихую мудрость наблюдателей, находящих глубокий смысл в повседневной жизни"
    }
}

# --- REFLECTIONS ---
REFLECTIONS = {
    "en": {
        "madonna": "Why do we crave digital perfection yet feel completely untouched by it? If art is born from human error and emotional danger, does a flawless algorithm ultimately rob us of our ability to feel? Let us debate the boundary between automated brilliance and human soul.",
        "alisa-freindlich": "Why is it that growing up so often feels like a slow, quiet betrayal of who we once were? Do we bury our childhood curiosity to survive the expectations of the adult world, or can we choose to keep that early magic alive? Join us as we explore the art of preserving our natural talents.",
        "amish-tripathi": "Is indifference the ultimate, silent poison of our modern connections? Why are we so comfortable with anger, yet so terrified of real indifference? Let us look at how we protect our hearts in an age of casual connections.",
        "barbra-streisand": "Why do we allow a conformist industry to define what is beautiful and worthy? If our most unconventional traits are actually our greatest strengths, how do we build the courage to stand out? Join us for an inspiring discussion on self-acceptance.",
        "brianna-pastor": "Why are we so threatened by the joy and pride of others? Do we change the subject to protect our own insecurities, or have we forgotten how to sincerely celebrate each other's healing? Let us discuss how to cultivate real empathy.",
        "einstein": "Why does formal education so often put out the very fire of curiosity it is meant to feed? If special talent is a myth, how do we keep our passion for learning alive in a world obsessed with quick answers? Let us rediscover the beauty of the passionately curious mind.",
        "feynman": "Why do we treat learning like a rigid, disciplined chore rather than a wild, original adventure? Is there a deeper wisdom in admitting we do not know everything? Join us as we dismantle formal educational dogmas and celebrate intellectual humility.",
        "steve-jobs": "Why is it that we are so eager to settle for safety and predictability? Does the fear of looking foolish prevent us from taking the very risks that could redefine our lives? Let us explore how keeping a hungry mind can change our personal path.",
        "socrates": "Why are we so terrified of admitting we know nothing? Does our modern obsession with having an opinion on everything prevent us from acquiring true, quiet wisdom? Join us for a foundational debate on intellectual humility.",
        "dolto": "Why do we demand perfect convenience from children when resistance is the only way they learn to be themselves? Are we raising obedient followers, or are we brave enough to nurture independent thinkers? Let us discuss the fine line between loving guidance and restrictive conformity.",
        "langle": "What is the true cost of being 'convenient' for everyone else? When we suppress our emotional needs to please others, how do we eventually find our way back to our authentic selves? Join us for a profound analysis of childhood and adult mental health.",
        "neufeld": "Why do we fear a child's natural resistance when it is the very shield that protects their unfolding selfhood? Is a child who never argues actually a child in danger? Let us explore the psychological roots of autonomy and attachment.",
        "dostoevsky": "Can true connection ever exist without exposing ourselves to the absolute risk of devastation? Why do sensitive and taboo topics like politics and religion reveal our true character so instantly? Let us plunge into the intense psychology of love, trust, and human nature.",
        "memory-cards": "Why have we allowed technology to turn our personal histories and intimate memories into commercialized, paid commodities? If our memory is outsourced to the cloud, what happens to the natural weight of our past? Let us debate the consequences of digital consumerism.",
        "robin-williams": "Why is it so much easier to fake being okay than to show the messy reality of our struggles? Do we wear masks of cheerfulness to protect ourselves from judgment, or to protect others from our pain? Let us discuss how to build genuine, empathetic connections.",
        "sadia-hakim": "How can we feel so utterly alone in an ocean of eight billion people? Has our hyper-connected digital world actually isolated us from the raw essence of human empathy? Join us for a heartfelt discussion on reclaiming our humanity.",
        "virginia-woolf": "Is art the ultimate, peaceful sublimation of the pain we cannot otherwise bear? How many of our greatest creations are born from struggles that could not find a voice in any other way? Join us as we explore the therapeutic power of artistic expression.",
        "voltaire": "Why does society so often suspect the very activities that bring us harmless joy? If reading and dancing are the ultimate forms of mental and physical freedom, how do they help us resist rigid social dogmas? Let us celebrate the liberating power of simple pleasures.",
        "you-are-a-soul": "What happens when we stop treating our body as our entire identity and start seeing it as merely a vessel for the soul? Does this shift help us find deeper purpose in a highly material world? Join us for an inspiring metaphysical discussion.",
        "women-mothers": "Why is it so easy to replicate the structural habits and emotional patterns of our parents, even when we promised ourselves we would walk a completely different path? Is genetic or psychological inheritance an inescapable trap, or can we consciously choose to rewrite our destiny?",
        "anonymous": "How do we find a sense of place and belonging in a fast-paced, shifting world? Is home a geographic space, or is it a specific time frozen in our memory? Let us explore how we perceive time, direction, and the lives of those around us."
    },
    "fr": {
        "madonna": "Pourquoi recherchons-nous la perfection numérique alors qu'elle nous laisse de marbre ? Si l'art naît de l'erreur humaine et du danger émotionnel, un algorithme parfait ne nous prive-t-il pas de notre sensibilité ? Débattons de la frontière entre génie automatisé et âme humaine.",
        "alisa-freindlich": "Pourquoi grandir ressemble-t-il si souvent à une trahison lente et silencieuse de l'enfant que nous étions ? Enterrons-nous notre curiosité enfantine pour survivre aux attentes du monde adulte, ou pouvons-nous choisir de préserver cette magie première ? Rejoignez-nous pour explorer l'art de préserver nos talents naturels.",
        "voltaire": "Pourquoi la société suspecte-t-elle si souvent les activités qui nous apportent une joie inoffensive ? Si lire et danser sont les formes ultimes de liberté mentale et physique, comment nous aident-elles à résister aux dogmes sociaux rigides ? Célébrons le pouvoir libérateur des plaisirs simples.",
        "socrates": "Pourquoi avons-nous si peur d'admettre que nous ne savons rien ? Notre obsession moderne à vouloir donner un avis sur tout nous empêche-t-elle d'accéder à une sagesse authentique et tranquille ? Rejoignez-nous pour un débat fondateur sur l'humilité intellectuelle.",
        "dolto": "Pourquoi exigeons-nous une parfaite docilité des enfants alors que la résistance est le seul moyen pour eux d'apprendre à être eux-mêmes ? Élevons-nous des exécutants obéissants, ou sommes-nous assez courageux pour nourrir des esprits libres ? Discutons de la fine frontière entre guidance bienveillante et conformisme restrictif.",
        "dostoevsky": "Une véritable connexion peut-elle exister sans s'exposer au risque absolu d'être dévasté ? %Pourquoi les sujets sensibles et tabous comme la politique et la religion révèlent-ils si instantanément notre véritable nature ? Plongez avec nous dans la psychologie intense de l'amour, de la confiance et de la nature humaine.",
        "you-are-a-soul": "Que se passe-t-elle lorsque nous cessons de traiter notre corps comme notre identité entière pour y voir le simple réceptacle de notre âme ? Ce changement nous aide-t-il à trouver un sens plus profond dans un monde hautement matériel ? Rejoignez-nous pour une discussion métaphysique inspirante.",
        "women-mothers": "Pourquoi est-il si facile de reproduire les habitudes structurelles et les schémas émotionnels de nos parents, alors que nous nous étions promis de suivre une voie totalement différente ? L'héritage génétique ou psychologique est-il un piège inéluctable, ou pouvons-nous choisir de réécrire notre destin ?",
        "anonymous": "Comment trouver un sentiment d'appartenance dans un monde en mutation rapide ? Le foyer est-il un espace géographique, ou une époque figée dans notre mémoire ? Explorons ensemble notre perception du temps, de l'espace et de la vie de ceux qui nous entourent."
    },
    "ru": {
        "alisa-freindlich": "Почему взросление так часто кажется медленным и тихим предательством того ребенка, которым мы когда-то были? Подавляем ли мы свое детское любопытство, чтобы соответствовать ожиданиям взрослого мира, или мы можем сохранить эту раннюю магию? Присоединяйтесь к нам, чтобы исследовать искусство сохранения наших природных талантов.",
        "dolto": "Почему мы требуем от детей идеального послушания и удобства, когда сопротивление — это единственный способ научиться быть собой? Воспитываем ли мы послушных последователей или мы достаточно смелы, чтобы развивать независимых мыслителей? Давайте обсудим грань между любящим руководством и ограничивающим конформизмом.",
        "dostoevsky": "Может ли существовать истинная близость без риска быть полностью опустошенным? Почему такие чувствительные и табуированные темы, как политика и религия, так мгновенно раскрывают наш истинный характер? Давайте погрузимся в глубокую психологию любви, доверия и человеческой природы.",
        "langle": "Какова истинная цена того, чтобы быть 'удобным' для всех остальных? Когда мы подавляем свои эмоциональные потребности в угоду другим, как нам со временем вернуться к своему подлинному 'Я'? Присоединяйтесь к нам для глубокого анализа детства и психического здоровья взрослых.",
        "neufeld": "Почему мы боимся естественного сопротивления ребенка, когда именно оно является щитом, защищающим его развивающуюся индивидуальность? Действительно ли послушный ребенок находится в психологической опасности? Давайте исследуем психологические корни автономии и привязанности.",
        "prishvin": "Какова цена родительского стремления сделать нас удобными для общества? Не лишает ли нас такое воспитание внутреннего стержня и способности принимать самостоятельные решения во взнослой жизни? Давайте обсудим влияние родительских ожиданий на формирование характера.",
        "sukhomlinsky": "Почему слепое подчинение без размышлений является самой большой угрозой для развития личности? Как вырастить человека, способного думать самостоятельно, а не просто выполнять чужие приказы? Давайте обсудим опасность механического послушания в современном мире.",
        "anonymous": "Как нам найти чувство независимости и подлинности мышления в эпоху постоянного информационного шума? Действительно ли наши мнения принадлежат нам, или мы просто повторяем то, что нам велели думать? Давайте обсудим границы свободы мысли в современном обществе."
    }
}

def get_author_key(filename):
    for k in AUTHOR_DESC["en"].keys():
        if k in filename:
            return k
    if "socrate" in filename:
        return "socrates"
    if "dostoïevski" in filename:
        return "dostoevsky"
    return "anonymous"

def generate_description_text(filename, lang, author_name, quote_text):
    author_key = get_author_key(filename)

    # Get descriptions
    lang_descs = AUTHOR_DESC.get(lang, AUTHOR_DESC["en"])
    author_desc_phrase = lang_descs.get(author_key, lang_descs["anonymous"])

    # Get reflections
    lang_reflections = REFLECTIONS.get(lang, REFLECTIONS["en"])
    reflection = lang_reflections.get(author_key, lang_reflections["anonymous"])

    # Format quote correctly (remove surrounding quotes first, then wrap cleanly)
    clean_quote = quote_text.strip().strip('"').strip('“').strip('”').strip('«').strip('»').strip()

    if lang == "fr":
        desc = f"{author_name} est la personne qui {author_desc_phrase}, et dans cette session, ils se concentrent sur la citation suivante : « {clean_quote} » {reflection}"
    elif lang == "ru":
        desc = f"{author_name} — это человек, который {author_desc_phrase}, и в этой сессии они сосредоточены на следующей цитате: «{clean_quote}» {reflection}"
    else:
        desc = f"{author_name} is the person who {author_desc_phrase}, and in this session they focus on the following quote: \"{clean_quote}\" {reflection}"

    return desc

def extract_quote_and_author_from_h1(h1_text, filename, lang):
    # Check fallback lookup
    fallbacks = FALLBACKS.get(lang, FALLBACKS["en"])
    if filename in fallbacks:
        return fallbacks[filename]

    # Try different em-dashes and en-dashes
    for sep in [' — ', ' — ', ' — ', ' -- ', ' - ']:
        if sep in h1_text:
            parts = h1_text.split(sep, 1)
            quote = parts[0].strip().strip('"').strip('“').strip('”').strip('«').strip('»')
            author = parts[1].strip()
            # If author has further parts like " (B2)" or similar, clean it
            author = re.sub(r'\s*\([^)]*\)', '', author)
            return author, quote

    # Default fallback
    return "Anonymous", h1_text

def process_file(filepath, lang):
    filename = os.path.basename(filepath)
    if filename.startswith("template"):
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Extract from H1
    h1 = soup.find('h1')
    h1_text = h1.get_text(strip=True) if h1 else ""

    author_name, quote_text = extract_quote_and_author_from_h1(h1_text, filename, lang)

    # Generate the beautiful, interesting, author-centric description
    new_desc = generate_description_text(filename, lang, author_name, quote_text)

    # Find the target description element
    desc_element = soup.find(id="description") or soup.find(class_="session-description")
    if not desc_element:
        # Fallback to the div with 'margin-bottom: 2rem' style but NOT containing sensitive class
        for div in soup.find_all('div'):
            style = div.get('style', '')
            classes = div.get('class', [])
            if 'margin-bottom: 2rem' in style and 'line-height' in style:
                if 'sensitive-topic-warning' not in classes:
                    desc_element = div
                    break

    if desc_element:
        # Check if there is already a <p> tag inside
        p_tag = desc_element.find('p')
        if p_tag:
            p_tag.clear()
            p_tag.string = new_desc
        else:
            desc_element.clear()
            new_p = soup.new_tag('p')
            new_p.string = new_desc
            desc_element.append(new_p)

        # Save changes
        with open(filepath, 'w', encoding='utf-8') as f:
            html_str = str(soup)
            if not html_str.strip().startswith("<!DOCTYPE html>"):
                html_str = "<!DOCTYPE html>\n" + html_str
            f.write(html_str)
        print(f"[{lang.upper()}] Successfully updated description for: {filename}")
    else:
        print(f"[{lang.upper()}] Warning: Description element not found in {filename}")

def run():
    folders = [
        ('events/sessions/the-greatest-quotes', 'en'),
        ('events/fr/sessions/the-greatest-quotes', 'fr'),
        ('events/ru/sessions/the-greatest-quotes', 'ru')
    ]

    for folder, lang in folders:
        if not os.path.exists(folder):
            continue
        print(f"\nProcessing directory: {folder}")
        files = glob.glob(os.path.join(folder, "*.html"))
        for filepath in sorted(files):
            process_file(filepath, lang)

if __name__ == "__main__":
    run()
