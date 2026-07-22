# Programmatic generator for new Greatest Quotes and Mind Matters sessions.
import os
import re
from bs4 import BeautifulSoup

QUOTES_DIR_EN = "events/sessions/the-greatest-quotes"
QUOTES_DIR_FR = "events/fr/sessions/the-greatest-quotes"
QUOTES_DIR_RU = "events/ru/sessions/the-greatest-quotes"
MIND_DIR_EN = "events/sessions/mind-matters"

os.makedirs(QUOTES_DIR_EN, exist_ok=True)
os.makedirs(QUOTES_DIR_FR, exist_ok=True)
os.makedirs(QUOTES_DIR_RU, exist_ok=True)
os.makedirs(MIND_DIR_EN, exist_ok=True)

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
    "Comment <strong>{word}</strong> transforme-t-il notre paysage paysage émotionnel en période de grand changement ?",
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
    "★ Comment votre compréhension personnelle de <strong>{word}</strong> a-t-elle évolué au cours des cinq dernières années ?",
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
    "La connectivité numérique mondiale rendra le véritable <strong>{word}</strong> incredibly difficile à maintenir à l'avenir. — Êtes-vous d'accord ou pas d'accord ?",
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

# High-quality conditional templates for Mind Matters Round 2
MIND_R2_EN = [
    "If a society could guarantee complete cognitive liberty, would <strong>{word}</strong> still hold any power over our choices?",
    "If you had to choose between a life of constant, safe comfort or one driven by intense, unpredictable <strong>{word}</strong>, which would you select?",
    "If we could artificially enhance our capacity for <strong>{word}</strong> using neural implants, would humanity lose its core authenticity?",
    "If you were forced to live in a world where <strong>{word}</strong> was entirely prohibited, what would you miss the most?",
    "If future generations of your family forgot the true meaning of <strong>{word}</strong>, how would their relationships change?",
    "If a machine could perfectly simulate human <strong>{word}</strong>, would you treat it as an equal conscious being?",
    "If we could erase all past memories associated with painful <strong>{word}</strong>, would our current personality still remain the same?",
    "If you were given the power to mandate the teaching of <strong>{word}</strong> in all schools, what would be the first rule you would establish?",
    "If our social obsession with <strong>{word}</strong> suddenly vanished, how would we spend our excess mental energy?",
    "If we lived in a futuristic utopia that achieved absolute balance, would <strong>{word}</strong> still have a purpose?"
]

MIND_R2_FR = [
    "Si une société pouvait garantir une liberté cognitive totale, le concept de <strong>{word}</strong> conserverait-il son pouvoir sur nos choix ?",
    "Si vous deviez choisir entre une vie de confort absolu et sécurisé ou une vie guidée par un(e) <strong>{word}</strong> intense et imprévisible, que choisiriez-vous ?",
    "Si nous pouvions améliorer artificiellement notre capacité de <strong>{word}</strong> à l'aide d'implants neuronaux, l'humanité perdrait-elle son authenticité ?",
    "Si vous étiez contraint de vivre dans un monde où toute forme de <strong>{word}</strong> était strictement interdite, qu'est-ce qui vous manquerait le plus ?",
    "Si les générations futures de votre famille oubliaient le sens véritable de <strong>{word}</strong>, comment leurs relations changeraient-elles ?",
    "Si une machine pouvait simuler parfaitement le/la <strong>{word}</strong> humain(e), la traiteriez-vous comme un être conscient égal ?",
    "Si nous pouvions effacer tous les souvenirs douloureux liés à notre <strong>{word}</strong>, notre personnalité actuelle resterait-elle la même ?",
    "Si vous aviez le pouvoir d'imposer l'enseignement de <strong>{word}</strong> dans toutes les écoles, quelle serait la première règle que vous établiriez ?",
    "Si notre obsession sociale pour <strong>{word}</strong> disparaissait soudainement, comment dépenserions-nous notre surplus d'énergie mentale ?",
    "Si nous vivions dans une utopie futuriste ayant atteint un équilibre parfait, <strong>{word}</strong> aurait-il encore sa place ?"
]

MIND_R2_RU = [
    "Если бы общество могло гарантировать полную свободу мышления, сохранил(а) бы <strong>{word}</strong> власть над нашим выбором?",
    "Если бы вам пришлось выбирать между стабильным, безопасным комфортом и жизнью, полной непредсказуемой(го) <strong>{word}</strong>, что бы вы выбрали?",
    "Если бы мы могли искусственно усилить способность к <strong>{word}</strong> с помощью чипов, потеряло бы человечество свою истинную суть?",
    "Если бы вы были вынуждены жить в мире, где полностью запрещен(а) <strong>{word}</strong>, по чему бы вы скучали больше всего?",
    "Если бы будущие поколения вашей семьи навсегда забыли истинный смысл <strong>{word}</strong>, как бы изменились их отношения?",
    "Если бы машина могла идеально симулировать человеческий(ую) <strong>{word}</strong>, относились бы вы к ней как к равному живому существу?",
    "Если бы мы могли стереть все болезненные воспоминания, связанные с <strong>{word}</strong>, осталась бы наша личность прежней?",
    "Если бы вам дали власть сделать изучение <strong>{word}</strong> обязательным во всех школах, какое первое правило вы бы ввели?",
    "Если бы наша социальная одержимость <strong>{word}</strong> внезапно исчезла, на что бы мы тратили избыточную ментальную энергию?",
    "Если бы мы жили в футуристической утопии с абсолютным балансом, имел(а) бы <strong>{word}</strong> хоть какой-то смысл?"
]

# Vocab templates by theme family to ensure exactly 10 cards, all ending in periods.
VOCAB_TEMPLATES = {
    "relationships": [
        ("Acceptance", "the action of consenting to receive or undertake something offered.", "Finding true acceptance within one's family is a vital part of personal growth."),
        ("Empathy ≠ Apathy", "the ability to understand other's feelings ≠ a lack of interest, enthusiasm, or concern.", "Hearing people's thoughts taught him true empathy, replacing his lifelong cold apathy."),
        ("Validation", "recognition or affirmation that a person or their feelings are valid.", "Seeking validation from loved ones is a natural and healthy human desire."),
        ("Vulnerability", "the quality of being exposed to emotional or physical harm.", "Admitting fear is portrayed as a source of strength and emotional vulnerability."),
        ("Deception", "the action of deceiving someone or concealing the truth.", "Their relationship fell apart due to mutual, progressive deception."),
        ("Loyalty", "the quality of giving or showing firm and constant support.", "The story celebrates the deep and unbreakable loyalty of childhood friends."),
        ("Compassion", "sympathetic pity and concern for the sufferings or misfortunes of others.", "She showed great compassion toward the strangers in the community."),
        ("Intimacy", "close familiarity or friendship; closeness.", "True intimacy requires both partners to be completely honest about their fears."),
        ("Clash", "a state of conflict between incompatible people, ideas, or interests.", "A sudden clash of values made it impossible for them to cooperate."),
        ("Sincerity", "the quality of being free from pretense, deceit, or hypocrisy.", "The sincerity in her voice convinced everyone that she was telling the truth.")
    ],
    "identity": [
        ("Authenticity", "the quality of being genuine, real, or true to oneself.", "Living with absolute authenticity brings a profound sense of inner peace."),
        ("Conformity", "behavior in accordance with socially accepted conventions or standards.", "The school rules demanded strict conformity, leaving no room for self-expression."),
        ("Autonomy", "the right or condition of self-government; personal independence.", "The young artist struggled to gain complete personal and financial autonomy."),
        ("Suppression", "the act of keeping something from happening or being revealed.", "The suppression of emotional needs often leads to intense internal conflict."),
        ("Rebellion", "the action or process of resisting authority, control, or convention.", "Her teenage rebellion was a necessary step toward discovering her true self."),
        ("Subconscious", "the part of the mind which is not fully aware but influences actions.", "Our childhood experiences are deeply buried in our subconscious."),
        ("Self-discovery", "the process of acquiring insight into one's own character and potential.", "Her travels in Asia were part of a lifelong journey of self-discovery."),
        ("Persona", "the aspect of someone's character that is presented to or perceived by others.", "He adopted a confident public persona to hide his deep-seated insecurities."),
        ("Individuality", "the quality or character of a particular person that distinguishes them from others.", "The curriculum should celebrate the unique individuality of each student."),
        ("Dignity", "the state or quality of being worthy of honor or respect.", "Every human being has the right to live their life with basic dignity.")
    ],
    "humanity": [
        ("Humanity", "the quality of being humane, compassionate, or sympathetic.", "Small acts of kindness restore our faith in the future of humanity."),
        ("Indifference", "lack of interest, concern, or sympathy toward others.", "The greatest tragedy of our time is the growing public indifference to suffering."),
        ("Anonymity", "the condition of being anonymous or unknown to the public.", "She preferred the peaceful anonymity of living in a large, bustling city."),
        ("Alienation", "the state of feeling isolated or excluded from a group or society.", "Modern social technology can sometimes increase our feelings of alienation."),
        ("Solitude", "the state of being alone, especially in a quiet, pleasant way.", "He found comfort and creative inspiration in the solitude of the woods."),
        ("Empathy", "the ability to understand and share the feelings of another.", "Active listening is the most effective way to develop genuine empathy."),
        ("Solidarity", "unity or agreement of feeling or action, especially among individuals.", "The movement was built on quiet acts of human solidarity across borders."),
        ("Generosity", "the quality of being kind, helpful, and giving to others.", "Her extraordinary generosity changed the lives of many people in need."),
        ("Egoism", "an ethical theory that treats self-interest as the foundation of morality.", "His stubborn egoism made it difficult for him to maintain close friendships."),
        ("Altruism", "the belief in or practice of disinterested and selfless concern for others.", "Many volunteers are driven by a pure sense of social altruism.")
    ],
    "wisdom": [
        ("Curiosity", "a strong desire to know or learn something new.", "Childhood curiosity should be nurtured and encouraged by every teacher."),
        ("Ignorance", "lack of knowledge, education, or awareness about something.", "Admitting your own ignorance is the first step toward true wisdom."),
        ("Perception", "the ability to see, hear, or become aware of something through the senses.", "Her perception of the situation was influenced by her past experiences."),
        ("Awareness", "knowledge or perception of a situation or fact.", "The campaign aims to raise public awareness about mental health issues."),
        ("Humility", "a modest or low view of one's own importance; humbleness.", "The great scientist accepted his mistakes with admirable humility."),
        ("Insight", "a deep, intuitive understanding of a person or a complex thing.", "The article provides valuable insight into the causes of economic crises."),
        ("Skepticism", "a skeptical attitude; doubt as to the truth of something.", "Healthy skepticism is necessary when reading unverified news online."),
        ("Intellect", "the faculty of reasoning and understanding objectively.", "She possessed a brilliant intellect and a sharp, analytical mind."),
        ("Perspective", "a particular attitude toward or way of regarding something.", "Traveling abroad gives you a completely new perspective on your own culture."),
        ("Illusion", "a false idea or belief; a deceptive appearance or impression.", "He clung to the sweet illusion that everything would return to normal.")
    ],
    "society": [
        ("Prejudice", "preconceived opinion that is not based on reason or actual experience.", "Overcoming deep-seated social prejudice requires education and exposure."),
        ("Governance", "the action or manner of governing a state, organization, or society.", "Good governance requires absolute transparency, accountability, and fairness."),
        ("Inequality", "difference in size, degree, circumstances, or social status.", "The new laws aim to address the growing economic inequality in the country."),
        ("Democracy", "a system of government by the whole population; popular representation.", "A free and independent press is a fundamental pillar of any democracy."),
        ("Propaganda", "biased or misleading information used to promote a political cause.", "The state media was used to spread political propaganda during the crisis."),
        ("Tyranny", "cruel, unreasonable, or arbitrary use of power or control.", "The citizens fought courageously to liberate their country from tyranny."),
        ("Reform", "make changes in something in order to improve it.", "The education system is in desperate need of comprehensive structural reform."),
        ("Solidarity", "unity or agreement of feeling or action, especially among individuals.", "The strike was supported by a massive show of public solidarity."),
        ("Justice", "just behavior or treatment; the quality of being fair and reasonable.", "The victims of the disaster are still waiting for basic legal justice."),
        ("Corruption", "dishonest or fraudulent conduct by those in power.", "The investigation uncovered deep-seated corruption in the local government.")
    ],
    "creative": [
        ("Artistry", "creative skill or ability in a fine art or literature.", "The novel is praised for its exceptional prose and delicate artistry."),
        ("Interpretation", "the action of explaining the meaning of something.", "There are many different interpretations of this complex, symbolic painting."),
        ("Aesthetics", "a set of principles concerned with the nature and appreciation of beauty.", "The cafe's minimalist aesthetics created a calm, relaxing atmosphere."),
        ("Inspiration", "the process of being mentally stimulated to do or feel something creative.", "Nature has always been the primary source of inspiration for poets."),
        ("Expression", "the action of making known one's thoughts or feelings.", "Music is a powerful form of self-expression for people of all ages."),
        ("Imagination", "the faculty or action of forming new ideas, or images of external objects.", "Children possess a vivid imagination that should never be suppressed."),
        ("Paraphrase", "express the meaning of something using different words.", "To check your understanding, try to paraphrase the author's main argument."),
        ("Sincerity", "the quality of being free from pretense, deceit, or hypocrisy.", "The absolute sincerity of his work made it deeply moving for readers."),
        ("Ambiguity", "the quality of being open to more than one interpretation.", "The poem's rich ambiguity allows each reader to find their own meaning."),
        ("Originality", "the ability to think independently and creatively.", "The artist was celebrated for the fresh originality of her style.")
    ]
}

# Translate templates into Russian
VOCAB_TEMPLATES_RU = {
    "relationships": [
        ("Принятие (оно)", "согласие принять человека или ситуацию без осуждения.", "Истинное принятие в семье критически важно для личностного роста."),
        ("Эмпатия ≠ Апатия (она)", "способность понимать чувства других ≠ полное отсутствие интереса и участия.", "Изучение психологии научило его эмпатии, вытеснив многолетнюю апатию."),
        ("Одобрение (оно)", "признание ценности чьих-либо чувств или поступков.", "Поиск одобрения со стороны близких — естественная потребность каждого человека."),
        ("Уязвимость (она)", "способность открыто проявлять свои слабости и страхи.", "Проявление уязвимости требует огромного мужества и доверия."),
        ("Обман (он)", "действие, направленное на введение в заблуждение.", "Их отношения разрушились из-за постоянного взаимного обмана."),
        ("Верность (она)", "стойкость и неизменность в своих чувствах и обязательствах.", "История подчеркивает верность друзей детства друг другу."),
        ("Сострадание (оно)", "жалость и сочувствие к чужому несчастью.", "Она проявила глубокое сострадание к бездомным людям."),
        ("Близость (она)", "глубокая душевная связь между людьми.", "Истинная близость невозможна без полной честности перед партнером."),
        ("Столкновение (оно)", "состояние конфликта между противоположными силами или идеями.", "Столкновение интересов привело к затяжному спору в команде."),
        ("Искренность (она)", "выражение истинных чувств и мыслей без притворства.", "Искренность в ее голосе сразу расположила к ней собеседников.")
    ],
    "identity": [
        ("Аутентичность (она)", "верность себе, своим ценностям и убеждениям.", "Жизнь в соответствии со своей аутентичностью приносит внутренний покой."),
        ("Конформизм (он)", "принятие существующего порядка вещей, приспособление к общему мнению.", "Давление общества часто вынуждает людей скатываться в конформизм."),
        ("Автономия (она)", "независимость в действиях и принятии решений.", "Подростковый возраст — это период активной борьбы за личную автономию."),
        ("Подавление (оно)", "насильственное ограничение или удержание чувств и желаний.", "Подавление эмоций может привести к серьезным психологическим проблемам."),
        ("Бунт (он)", "активное сопротивление навязанным правилам или авторитетам.", "Ее подростковый бунт был важным шагом на пути к самоопределению."),
        ("Подсознание (оно)", "область психики, которая не осознается, но влияет на поведение.", "Многие наши страхи берут свое начало в глубоком подсознании."),
        ("Самопознание (оно)", "процесс изучения своих психических и физических особенностей.", "Чтение хороших книг стимулирует наше внутреннее самопознание."),
        ("Маска (она)", "социальная роль, которую человек играет перед другими.", "За маской уверенности часто скрывается глубокая неуверенность в себе."),
        ("Индивидуальность (она)", "совокупность уникальных черт, отличающих одного человека от других.", "Школьная программа должна уважать индивидуальность каждого ребенка."),
        ("Достоинство (оно)", "уважение к себе и чувство собственной значимости.", "Каждый человек заслуживает права жить и работать с достоинством.")
    ],
    "humanity": [
        ("Человечность (она)", "гуманность, сострадательное отношение к людям.", "Проявление человечности способно растопить даже самое холодное сердце."),
        ("Равнодушие (оно)", "отсутствие интереса, участия и сочувствия к другим.", "Равнодушие прохожих поразило пострадавшего в аварии человека."),
        ("Анонимность (она)", "состояние, когда имя или личность человека неизвестны.", "Он ценил анонимность, которую давала жизнь в огромном мегаполисе."),
        ("Отчуждение (оно)", "чувство изоляции и оторванности от общества или близких.", "Современные технологии иногда усиливают наше взаимное отчуждение."),
        ("Уединение (оно)", "состояние одиночества, приносящее покой и гармонию.", "Она искала уединения в горах, чтобы закончить написание своей книги."),
        ("Эмпатия (она)", "способность понимать и разделять переживания другого человека.", "Эмпатия позволяет нам строить глубокие и доверительные отношения."),
        ("Солидарность (она)", "активное сочувствие и поддержка чьих-либо действий или мнений.", "Общественная солидарность помогла справиться с последствиями стихии."),
        ("Щедрость (она)", "готовность бескорыстно делиться с другими своими ресурсами.", "Ее щедрость спасла местный приют для животных от закрытия."),
        ("Эгоизм (он)", "поведение, целиком определяемое мыслью о собственной пользе.", "Его упрямый эгоизм мешал ему завести настоящих и верных друзей."),
        ("Альтруизм (он)", "бескорыстная забота о благополучии других людей.", "Многие волонтеры совершают свои добрые дела из чистого альтруизма.")
    ],
    "wisdom": [
        ("Любознательность (она)", "стремление к приобретению новых знаний.", "Ее детская любознательность восхищала всех школьных учителей."),
        ("Невежество (оно)", "отсутствие знаний, некультурность или неосведомленность.", "Невежество в вопросах здоровья часто ведет к опасным последствиям."),
        ("Восприятие (оно)", "процесс отражения предметов и явлений в сознании.", "Наше восприятие мира сильно зависит от нашего прошлого опыта."),
        ("Осознанность (она)", "способность концентрироваться на настоящем моменте и своих мыслях.", "Практика осознанности помогает справляться с ежедневным стрессом."),
        ("Смирение (оно)", "скромность, отсутствие гордыни и высокомерия.", "Великий ученый говорил о своих открытиях с искренним смирением."),
        ("Проницательность (она)", "способность быстро улавливать суть вещей, скрытый смысл.", "Ее проницательность помогла сразу раскрыть коварный замысел."),
        ("Скептицизм (он)", "критическое отношение к информации, сомнение в ее истинности.", "Здоровый скептицизм необходим при чтении новостей в интернете."),
        ("Интеллект (он)", "способность к мышлению, рациональному познанию.", "Она обладала острой интуицией и прекрасной памятью."),
        ("Перспектива (она)", "точка зрения, определенный взгляд на вещи.", "Путешествия дают нам новую перспективу на привычный образ жизни."),
        ("Иллюзия (она)", "обман чувств, ложное представление о действительности.", "Он долго жил в иллюзии, что ситуация решится сама собой.")
    ],
    "society": [
        ("Предрассудок (он)", "ставшее привычным ложное мнение, предвзятость.", "Трудно бороться с предрассудками, которые укоренялись веками."),
        ("Управление (оно)", "деятельность по руководству обществом или организацией.", "Эффективное управление требует прозрачности и ответственности."),
        ("Неравенство (оно)", "различие в правах, возможностях или социальном положении.", "Социальное неравенство остается одной из главных проблем современности."),
        ("Демократия (она)", "политическая система, основанная на власти народа.", "Свобода слова является важнейшей основой любой демократии."),
        ("Пропаганда (она)", "распространение идей для формирования определенного мнения.", "Информационная пропаганда часто искажает реальные факты."),
        ("Тирания (она)", "жестокое, деспотическое правление или угнетение.", "Народ восстал против тирании, требуя возвращения своих прав."),
        ("Реформа (она)", "преобразование, изменение какой-либо сферы жизни.", "Реформа образования должна повысить качество школьного обучения."),
        ("Солидарность (она)", "единство убеждений и взаимная поддержка.", "Общая беда сплотила жителей, вызвав волну солидарности."),
        ("Справедливость (она)", "беспристрастное отношение, соответствие истине и закону.", "Они продолжают бороться за юридическую справедливость."),
        ("Коррупция (она)", "злоупотребление служебным положением в личных целях.", "Борьба с коррупцией — приоритетная задача для любого государства.")
    ],
    "creative": [
        ("Мастерство (оно)", "высокое искусство в какой-либо области.", "Эта картина поражает тонким мастерством исполнения деталей."),
        ("Интерпретация (она)", "толкование, раскрытие смысла произведения или идеи.", "Существуют десятки различных интерпретаций этого романа."),
        ("Эстетика (она)", "система взглядов на красоту и искусство.", "Эстетика минимализма делает это пространство очень гармоничным."),
        ("Вдохновение (оно)", "состояние творческого подъема, прилив сил.", "Поэты часто ищут вдохновение в уединении и общении с природой."),
        ("Самовыражение (оно)", "проявление своих чувств и мыслей через творчество.", "Музыка — прекрасный способ для самовыражения подростков."),
        ("Воображение (оно)", "способность мысленно создавать новые образы и идеи.", "Детское воображение способно превратить любую коробку в замок."),
        ("Пересказ (он)", "изложение текста своими словами.", "Попробуйте сделать краткий пересказ основной идеи автора."),
        ("Искренность (она)", "выражение подлинных чувств без фальши.", "Искренность автора делает его стихи невероятно трогательными."),
        ("Двусмысленность (она)", "возможность понимать слова или действия двояко.", "Двусмысленность финала позволяет каждому найти свой смысл."),
        ("Оригинальность (она)", "самобытность, неповторимость творческого стиля.", "Критики высоко оценили оригинальность нового кинорежиссера.")
    ]
}

# Translate templates into French
VOCAB_TEMPLATES_FR = {
    "relationships": [
        ("L'acceptation (f)", "l'action de consentir à recevoir ou à tolérer quelqu'un ou quelque chose.", "Trouver une véritable acceptation au sein de sa famille est essentiel pour grandir."),
        ("L'empathie ≠ L'apathie", "la capacité de comprendre les sentiments d'autrui ≠ un manque d'intérêt ou d'enthousiasme.", "Écouter les autres lui a appris l'empathie, remplaçant son apathie habituelle."),
        ("La validation", "la reconnaissance ou l'affirmation de la valeur d'une personne ou de ses choix.", "Rechercher la validation de ses parents est d'une grande valeur."),
        ("La vulnérabilité", "le caractère d'une personne qui s'expose à des blessures émotionnelles.", "Révéler ses peurs est perçu comme une force et une belle vulnérabilité."),
        ("La déception", "le fait d'être déçu ou l'action de tromper quelqu'un.", "Leurs relations se sont détériorées en raison de déceptions mutuelles."),
        ("La loyauté", "la fidélité à ses engagements, à ses amis ou à ses principes.", "Cette histoire célèbre la loyauté indéfectible des compagnons d'enfance."),
        ("La compassion", "un sentiment de pitié et de sympathie face aux souffrances d'autrui.", "Elle a fait preuve d'une grande compassion envers les étrangers du village."),
        ("L'intimité (f)", "un rapport d'étroite familiarité ou de complicité affective.", "Une véritable intimité exige d'être totalement honnête avec son partenaire."),
        ("Le conflit", "un état d'opposition ou de désaccord sérieux entre des personnes.", "Le conflit de générations a éclaté lors de cette réunion de famille."),
        ("La sincérité", "la qualité d'une personne qui exprime ses sentiments réels sans feinte.", "La sincérité de sa démarche a fini par convaincre ses parents sceptiques.")
    ],
    "identity": [
        ("L'authenticité (f)", "la qualité d'être authentique, d'être fidèle à sa propre nature.", "Vivre avec authenticité apporte un profond sentiment de paix intérieure."),
        ("Le conformisme", "l'attitude de celui qui se soumet aux usages et aux règles du groupe.", "Le conformisme ambiant laisse peu de place à l'expression de soi."),
        ("L'autonomie (f)", "l'indépendance de pensée, de choix et d'action d'un individu.", "La recherche de l'autonomie est au cœur des luttes de l'adolescence."),
        ("La suppression", "l'action de retenir ou de dissimuler ses émotions ou ses pensées.", "La suppression prolongée de ses désirs mène souvent à d'intenses frustrations."),
        ("La rébellion", "l'action de s'opposer ouvertement à l'autorité ou aux conventions.", "Sa rébellion était une étape nécessaire pour découvrir sa propre voie."),
        ("Le subconscient", "la partie de l'esprit qui échappe à la conscience mais influence le comportement.", "Les peurs de l'enfance restent souvent gravées dans notre subconscient."),
        ("La découverte de soi", "le processus d'exploration et de compréhension de sa propre personnalité.", "Voyager seul est une excellente méthode pour accélérer la découverte de soi."),
        ("La persona", "le rôle social ou l'image de soi qu'on présente volontairement aux autres.", "Il s'est forgé une persona de leader pour masquer sa timidité."),
        ("L'individualité (f)", "ce qui distingue un individu de tous les autres; la singularité.", "L'école doit respecter et cultiver l'individualité de chaque élève."),
        ("La dignité", "le respect de soi et le sentiment de mériter la considération d'autrui.", "Chaque enfant a le droit d'être traité avec le respect de sa dignité.")
    ],
    "creative": [
        ("L'artisticité (f)", "le caractère artistique ou la qualité d'une œuvre de l'esprit.", "Ce livre est salué pour son originalité et sa profonde artisticité."),
        ("L'interprétation (f)", "l'action d'expliquer ou de donner un sens particulier à quelque chose.", "Ce texte philosophique se prête à de nombreuses interprétations."),
        ("L'esthétique (f)", "l'ensemble des principes qui définissent le beau dans une œuvre.", "L'esthétique épurée de la pièce favorise le calme et la réflexion."),
        ("L'inspiration (f)", "le souffle créateur qui stimule l'imagination et l'action.", "La nature est une source d'inspiration intarissable pour les poètes."),
        ("L'expression (f)", "l'action de faire connaître ses pensées, ses sentiments ou ses goûts.", "La danse est un moyen d'expression universel et libérateur."),
        ("L'imagination (f)", "la faculté de concevoir des idées ou de créer des images mentes.", "Les enfants possèdent une imagination débordante que l'on doit encourager."),
        ("La paraphrase", "la reformulation d'un texte ou d'une parole avec d'autres mots.", "Pour bien comprendre cette citation, essayez d'en faire une paraphrase."),
        ("La sincérité", "la fidélité à la vérité et l'absence de toute hypocrisie.", "La sincérité de l'artiste transparaît dans chacun de ses tableaux."),
        ("L'ambiguïté (f)", "le caractère d'une parole ou d'une œuvre qui comporte plusieurs sens.", "L'ambiguïté de la fin du film laisse le spectateur libre de conclure."),
        ("L'originalité (f)", "le caractère de ce qui est nouveau, singulier et novateur.", "Les critiques ont salué l'originalité absolue de cette mise en scène.")
    ]
}

# 3-5 Standard corrections for English, Russian, French to be inserted dynamically and avoid static catalog errors
MISTAKES_CATALOG_EN = [
    ("He <u>have</u> went to Paris", "He has gone to Paris", "Present perfect third-person singular 'has' + past participle 'gone'."),
    ("We discussed <u>about the problem</u>", "We discussed the problem / had a discussion <strong>about</strong> the problem", "'Discuss' is transitive and takes no preposition, or use 'have a discussion about'."),
    ("I am <u>agree</u> with you", "I agree with you", "Use 'agree' directly as a verb rather than using it with the auxiliary 'am'.")
]

MISTAKES_CATALOG_RU = [
    ("Я согласен <u>с вами</u>", "Я согласен с вами / разделяю ваше мнение", "Для большего разнообразия речи используйте выражение «я разделяю ваше мнение»."),
    ("Это делает меня <u>более счастливый</u>", "Это делает меня более счастливым", "После глагола «делать» требуется творительный падеж («счастливым»)."),
    ("Люди опасаются <u>о будущем</u>", "Люди опасаются будущего", "Глагол «опасаться» управляет родительным падежом без предлога.")
]

MISTAKES_CATALOG_FR = [
    ("Je suis <u>d'accord avec</u> vous", "Je partage votre avis / je suis d'accord avec vous", "Pour enrichir votre expression, préférez 'je partage votre avis'."),
    ("Il est important de réfléchir <u>à ce sujet</u>", "Il est important de réfléchir sur ce sujet", "Pour un examen approfondi ou philosophique, on utilise la préposition 'sur'."),
    ("C'est une <u>bonne</u> question", "C'est une question pertinente / intéressante", "Évitez l'adjectif générique 'bon' et utilisez des qualificatifs plus précis.")
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

def get_discussion_rounds(lang, vocab_list, is_mind_matters=False):
    if lang == "fr":
        r1_main_tpl = FR_R1_MAIN
        r1_pers_tpl = FR_R1_PERS
        r2_main_tpl = FR_R2_MAIN if not is_mind_matters else MIND_R2_FR
        r2_pers_tpl = FR_R2_PERS
    elif lang == "ru":
        r1_main_tpl = RU_R1_MAIN
        r1_pers_tpl = RU_R1_PERS
        r2_main_tpl = RU_R2_MAIN if not is_mind_matters else MIND_R2_RU
        r2_pers_tpl = RU_R2_PERS
    else:
        r1_main_tpl = EN_R1_MAIN
        r1_pers_tpl = EN_R1_PERS
        r2_main_tpl = EN_R2_MAIN if not is_mind_matters else MIND_R2_EN
        r2_pers_tpl = EN_R2_PERS

    round_1 = []
    round_2 = []
    for i, (word, _, _) in enumerate(vocab_list):
        clean_word = clean_vocab_word(word, lang)
        main_q = r1_main_tpl[i % len(r1_main_tpl)].format(word=clean_word)
        pers_q = r1_pers_tpl[i % len(r1_pers_tpl)].format(word=clean_word)
        r2_main = r2_main_tpl[i % len(r2_main_tpl)].format(word=clean_word)
        r2_pers = r2_pers_tpl[i % len(r2_pers_tpl)].format(word=clean_word) if not is_mind_matters else ""
        round_1.append((main_q, pers_q))
        round_2.append((r2_main, r2_pers))
    return round_1, round_2

def make_session_html(lang, title, heading, date, meta_info, desc, vocab_list, warm_up_questions, round_1_items, lst_text, round_2_items, mistakes, depth_prefix, is_mind_matters=False):
    club_tag = "Mind Matters" if is_mind_matters else "The Greatest Quotes"
    club_link = "../mind-matters.html" if is_mind_matters else "../the-greatest-quotes.html"
    if lang == "fr":
        back_label = "← Retour au club"
        breadcrumbs_html = f"""<a href="{depth_prefix}index.html">Accueil</a> <span class="sep">/</span>
    <a href="{depth_prefix}events/index.html">Événements</a> <span class="sep">/</span>
    <a href="{club_link}">{ "The Greatest Quotes" if not is_mind_matters else "Mind Matters" }</a> <span class="sep">/</span>
    <span class="current">{title}</span>"""
        vocab_section_title = "📖 Vocabulaire de la session"
        disc_section_title = "🎙️ Structure de la discussion"
        warmup_title = "🟠 Échauffement"
        r1_title = "🔵 Round 1 — Analyse"
        lst_title = "🟣 Parlons ensemble"
        r2_title = "🟢 Round 2 — Application philosophique"
        mistake_header = "✏️ Note de l'enseignant (Corrections linguistiques)"
        add_dict_label = "Ajouter au dictionnaire"
    elif lang == "ru":
        back_label = "← Вернуться в клуб"
        breadcrumbs_html = f"""<a href="{depth_prefix}index.html">Главная</a> <span class="sep">/</span>
    <a href="{depth_prefix}events/index.html">События</a> <span class="sep">/</span>
    <a href="{club_link}">{ "Великие цитаты" if not is_mind_matters else "Mind Matters" }</a> <span class="sep">/</span>
    <span class="current">{title}</span>"""
        vocab_section_title = "📖 Словарь сессии"
        disc_section_title = "🎙️ Обсуждение"
        warmup_title = "🟠 Разминка"
        r1_title = "🔵 Раунд 1 — Анализ"
        lst_title = "🟣 Обсудим вместе"
        r2_title = "🟢 Раунд 2 — Философское применение"
        mistake_header = "✏️ Заметки преподавателя (Исправление ошибок)"
        add_dict_label = "Добавить в словарь"
    else: # en
        back_label = "← Back to Club"
        breadcrumbs_html = f"""<a href="{depth_prefix}index.html">Home</a> <span class="sep">/</span>
    <a href="{depth_prefix}events/index.html">Events</a> <span class="sep">/</span>
    <a href="{club_link}">{club_tag}</a> <span class="sep">/</span>
    <span class="current">{title}</span>"""
        vocab_section_title = "📖 Session Vocabulary"
        disc_section_title = "🎙️ Discussion Structure"
        warmup_title = "🟠 Warm-up"
        r1_title = "🔵 Round 1 — Analysis"
        lst_title = "🟣 Let's Speak Together"
        r2_title = "🟢 Round 2 — Philosophical Application"
        if is_mind_matters:
            r2_title = "🟢 Round 2 — Dilemmas / Future"
        mistake_header = "✏️ Teacher's Note (Linguistic Corrections)"
        add_dict_label = "Add to Dictionary"

    vocab_html = ""
    for w, d, ex in vocab_list:
        escaped_w = w.replace("'", "\\'")
        escaped_d = d.replace("'", "\\'")
        escaped_ex = ex.replace("'", "\\'")
        vocab_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{w}</div>
        <div class="vocab-def">{d}</div>
        <div class="vocab-example">{ex}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_w}', definition:'{escaped_d}', example:'{escaped_ex}'}}, this)">{add_dict_label}</button>
      </div>\n"""

    warmup_html = ""
    for q in warm_up_questions:
        warmup_html += f"            <li>{q}</li>\n"

    r1_html = ""
    for main_item, pers_item in round_1_items:
        r1_html += f"""          <div class="round-item">
            <div class="round-item-main">{main_item}</div>
            <div class="round-item-personal">{pers_item}</div>
          </div>\n"""

    r2_html = ""
    for main_item, pers_item in round_2_items:
        if is_mind_matters:
            r2_html += f"""          <div class="round-item">
            <div class="round-item-main">{main_item}</div>
          </div>\n"""
        else:
            r2_html += f"""          <div class="round-item">
            <div class="round-item-main">{main_item}</div>
            <div class="round-item-personal">{pers_item}</div>
          </div>\n"""

    mistakes_html = ""
    for wrong, right, note in mistakes:
        mistakes_html += f"""          <div class="mistake-item">
            <span class="mistake-wrong">{wrong}</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">{right}</span>
            <span class="mistake-note-text">({note})</span>
          </div>\n"""

    ledger_html = ""
    if not is_mind_matters:
        ledger_html = """  <!-- PHILOSOPHERS' LEDGER INTERACTIVE CARD -->
  <div class="philosophers-ledger" style="background: #FFFDF9; border: 2px solid #5D4037; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-sm); font-family: 'Playfair Display', serif; font-style: italic; color: #3E2723;">
    <h4 style="margin: 0 0 0.5rem; font-family: 'DM Sans', sans-serif; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #5D4037; font-style: normal; font-weight: 700;">☕ The Philosophers' Ledger: Café Debates</h4>
    <p id="ledger-quote" style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1rem;">"Let us see how many interpretations exist! There is never only one correct answer to any profound human question." — Oscar Wilde</p>
    <button class="btn-primary" id="ledger-next-btn" style="background: #5D4037; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.8rem; font-family: 'DM Sans', sans-serif; font-style: normal; cursor: pointer; font-weight: 700; transition: background 0.2s;">Next Page in Ledger 📖</button>
  </div>"""

    hero_bg = "linear-gradient(135deg, #993556, #4d1a2b)" if is_mind_matters else "linear-gradient(135deg, #5D4037, #3E2723)"

    html = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="{depth_prefix}images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{depth_prefix}css/tokens.css">
<link rel="stylesheet" href="{depth_prefix}css/base.css">
<link rel="stylesheet" href="{depth_prefix}css/components.css">
<link rel="stylesheet" href="{depth_prefix}css/layout.css">
<link rel="stylesheet" href="{depth_prefix}css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: {hero_bg};">
  <div class="club-tag">{club_tag}</div>
  <h1>{heading}</h1>
  <p class="session-date">{date}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    {breadcrumbs_html}
  </nav>
  <a href="{club_link}" class="back-link">{back_label}</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>{ "Duration" if lang=="en" else ("Durée" if lang=="fr" else "Продолжительность") }</h4><p>{meta_info.get("duration", "60 minutes")}</p></div>
    <div class="meta-item"><h4>{ "Languages" if lang=="en" else ("Langues" if lang=="fr" else "Языки") }</h4><p>{meta_info.get("languages", "🇬🇧 🇫🇷 🇷🇺")}</p></div>
    <div class="meta-item"><h4>{ "Level" if lang=="en" else ("Niveau" if lang=="fr" else "Уровень") }</h4><p>{meta_info.get("level", "Intermediate (B1)")}</p></div>
    <div class="meta-item"><h4>{ "Theme" if lang=="en" else ("Thème" if lang=="fr" else "Тема") }</h4><p>{meta_info.get("theme", "Philosophy")}</p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>{desc}</p>
  </div>

{ledger_html}

  <section id="vocabulary">
    <h2 class="section-title">{vocab_section_title}</h2>
    <div class="vocab-grid-10">
{vocab_html}
    </div>
  </section>
  <section id="structure">
    <h2 class="section-title">{disc_section_title}</h2>
    <div class="rounds-container">
      <div class="round-block warm-up open" id="s-warm">
        <div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-warm')">
          <span>{warmup_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <ul class="round-questions">
{warmup_html}
          </ul>
        </div>
      </div>
      <div class="round-block round-1 open" id="s-r1">
        <div class="round-header" style="background:#E1F5EE;" onclick="COSY.toggleRound('s-r1')">
          <span>{r1_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
{r1_html}
        </div>
      </div>
      <div class="round-block lst open" id="s-lst">
        <div class="round-header" style="background:#EEEDFE;" onclick="COSY.toggleRound('s-lst')">
          <span>{lst_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <p class="round-note">{lst_text}</p>
        </div>
      </div>
      <div class="round-block round-2 open" id="s-r2">
        <div class="round-header" style="background:#EAF3DE;" onclick="COSY.toggleRound('s-r2')">
          <span>{r2_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
{r2_html}
        </div>
      </div>
      <div class="mistake-block open" id="s-mistakes">
        <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
          <span>{mistake_header}</span><span class="round-toggle">▲</span>
        </div>
        <div class="mistake-body" style="display:block;">
{mistakes_html}
        </div>
      </div>
    </div>
  </section>
</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="{depth_prefix}index.html" style="color:var(--muted);text-decoration:none;">{ "Home" if lang=="en" else ("Accueil" if lang=="fr" else "Главная") }</a>
    <a href="{depth_prefix}practice/index.html" style="color:var(--muted);text-decoration:none;">{ "Practice" if lang=="en" else ("Pratique" if lang=="fr" else "Практика") }</a>
    <a href="{depth_prefix}games/index.html" style="color:var(--muted);text-decoration:none;">{ "Games" if lang=="en" else ("Jeux" if lang=="fr" else "Игры") }</a>
    <a href="{depth_prefix}events/index.html" style="color:var(--muted);text-decoration:none;">{ "Events" if lang=="en" else ("Événements" if lang=="fr" else "События") }</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="{depth_prefix}js/core/engine.js"></script>
<script src="{depth_prefix}js/core/ui.js"></script>
{ f'<script>document.addEventListener("DOMContentLoaded", () => {{ const quotes = ["{heading.replace('"', '\\"')}"]; let index = 0; const quoteText = document.getElementById("ledger-quote"); if (quoteText) quoteText.innerText = quotes[0]; }});</script>' if not is_mind_matters else '' }
</body>
</html>"""
    return html

# Database of sessions to generate
SESSIONS = [
    # English Greatest Quotes
    {
        "lang": "en",
        "slug": "brianna-pastor-proud-quote",
        "title": "Pay Attention",
        "heading": "Pay attention to who changes the subject when you try to talk about something you're proud of.",
        "author": "Brianna Pastor",
        "date": "05 October 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Relationships / Support"},
        "desc": "We explore Brianna Pastor's advice on noticing how people react to our achievements. It is a session focused on support, active listening, and relationship dynamics. We will discuss how to identify genuine friendship and handle passive indifference.",
        "vocab_family": "relationships",
        "warm_up_questions": [
            "Do you find it easy to celebrate your friends' successes?",
            "What is something you are proud of that you achieved recently?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "dolto-difficult-child-quote",
        "title": "Difficult Children",
        "heading": "A child has the right to be difficult, that is the only way they learn to be themselves.",
        "author": "Françoise Dolto",
        "date": "20 October 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇫🇷 🇷🇺", "level": "Intermediate (B1)", "theme": "Parenting & Identity"},
        "desc": "We unpack Françoise Dolto's famous belief about difficult behaviors in childhood. This session explores how expressing disagreement and challenge is necessary for healthy identity development. We will discuss the fine line between loving guidance and restrictive conformity.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Why do you think some children are labeled as 'difficult'?",
            "Should parents let children express their difficult feelings freely?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "neufeld-resistance-quote",
        "title": "When Kids Stop Resisting",
        "heading": "The real problems start not when a child resists, but when they stop resisting.",
        "author": "Gordon Neufeld",
        "date": "25 October 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇷🇺", "level": "Upper-Intermediate (B2)", "theme": "Parenting & Psychology"},
        "desc": "We discuss Gordon Neufeld's insightful observation on children's resistance. This session focuses on the psychological meaning of rebellion and why total compliance is a sign of suppression. We will explore how to build trust that permits healthy resistance.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Is resistance always a negative behavior in a growing child?",
            "What happens when a child completely stops sharing their disagreement?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "langle-suppressed-child-quote",
        "title": "The Convenient Child",
        "heading": "If a child is always convenient, it means they have already suppressed a part of themselves.",
        "author": "Alfried Längle",
        "date": "28 October 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇷🇺", "level": "Upper-Intermediate (B2)", "theme": "Parenting & Psychology"},
        "desc": "We examine Alfried Längle's quote about the 'convenient' child. This session dissects why highly obedient behaviors often mask deep suppression of emotional needs. We will debate the long-term impact of childhood convenience on adult mental health.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Why is an 'always convenient' child highly praised by society?",
            "How does suppressing emotions in childhood affect adult psychological health?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "sadia-hakim-humanity-quote",
        "title": "Ocean of People",
        "heading": "People, people, people, an ocean of people, but I can't find even a drop of humanity.",
        "author": "Sadia Hakim",
        "date": "01 November 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Society & Empathy"},
        "desc": "We dissect Sadia Hakim's powerful metaphor comparing a crowded world to a desert of genuine empathy. We will explore themes of urban isolation, public indifference, and how to preserve our own humanity. Join us for a deep philosophical debate on modern collective empathy.",
        "vocab_family": "humanity",
        "warm_up_questions": [
            "Have you ever felt completely lonely while standing in a massive crowd?",
            "How do you define 'humanity' in small, everyday actions?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "einstein-passionately-curious-quote",
        "title": "Passionately Curious",
        "heading": "I have no special talents, I am only passionately curious.",
        "author": "Albert Einstein",
        "date": "05 November 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Elementary (A2)", "theme": "Learning & Passion"},
        "desc": "Albert Einstein's famous humble claim invites us to reconsider the nature of genius. In this session, we discuss how curiosity drives learning much more effectively than natural talent. We will share our own passionate interests and how we keep our curiosity alive.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "What is something you are very curious about right now?",
            "Do you believe that anyone can learn anything with enough curiosity?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "rain-seller-umbrella-quote",
        "title": "The Same Rain",
        "heading": "The same rain that hurts the ice cream seller helps the umbrella seller.",
        "author": "Proverb",
        "date": "10 November 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Perspective & Fortune"},
        "desc": "We explore the dual nature of events through this classic, elegant proverb. This session focuses on cognitive framing, business perspectives, and finding positivity in difficult situations. We will discuss how a single change can bring both distress and great fortune depending on our standpoint.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "How do you react when plans are suddenly ruined by bad weather?",
            "Can you think of a setback in your life that ended up helping you?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "think-for-yourself-quote",
        "title": "Who Told You to Think So?",
        "heading": "Do you think so, or were you told to think so?",
        "author": "Anonymous",
        "date": "15 November 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇷🇺", "level": "Intermediate (B1)", "theme": "Independent Thought"},
        "desc": "This session questions the authenticity of our modern opinions and beliefs. We explore how social media, upbringing, and political propaganda shape our mental landscape without our conscious realization. We will discuss how to cultivate true critical thinking.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "How often do you question the source of your opinions?",
            "Is it possible to have a completely independent thought in the digital age?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "ability-to-notice-beauty-quote",
        "title": "Ability to Notice Beauty",
        "heading": "The amount of beautiful things in your life depends on your ability to notice them.",
        "author": "Anonymous",
        "date": "25 November 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Gratitude & Mindfulness"},
        "desc": "We discuss the profound connection between mindfulness and our enjoyment of life. This session explores how our attention dictates our reality, focusing on gratitude and beauty. We will share practical ways to slow down and notice the small, beautiful things around us.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "What is the most beautiful thing you saw on your way to our session today?",
            "Do you believe that happiness is a choice of where we focus our attention?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "dostoevsky-loving-power-quote",
        "title": "Loving Means Power",
        "heading": "Loving someone means giving them the power to destroy you, but trusting they won't.",
        "author": "Fedor Dostoevsky",
        "date": "01 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇷🇺", "level": "Upper-Intermediate (B2)", "theme": "Love & Vulnerability"},
        "desc": "We explore Dostoevsky's intense observation on love and trust. This session focuses on the psychological link between vulnerability and romantic connection. We will debate whether true love can ever exist without exposing ourselves to the risk of devastation.",
        "vocab_family": "relationships",
        "warm_up_questions": [
            "Do you agree that love and vulnerability are inseparable?",
            "Is trust more important than love in a long-term relationship?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "memory-cards-storage-quote",
        "title": "Pay for Storage",
        "heading": "They took memory cards from us and then made us pay for storage.",
        "author": "Nithya Shri",
        "date": "05 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Technology & Consumerism"},
        "desc": "We explore Nithya Shri's witty critique of the subscription-based modern digital economy. This session unpacks corporate control, consumer rights, and how technology companies monetize our basic needs. We will debate whether digital convenience has made us willing captives of tech platforms.",
        "vocab_family": "society",
        "warm_up_questions": [
            "How many monthly digital subscriptions do you currently pay for?",
            "Do you feel like you truly own your digital photos and personal memories?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "virginia-woolf-trigger-quote",
        "title": "Pen or Paintbrush",
        "heading": "How many times have people used a pen or a paintbrush because they couldn't pull the trigger?",
        "author": "Virginia Woolf",
        "date": "10 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Art & Sublimation"},
        "desc": "We explore Virginia Woolf's intense reflection on art as a peaceful sublimation of pain, anger, or despair. This session discusses the psychological purpose of creativity, mental health, and artistic expression. We will debate how turning suffering into beauty can save us from destructive impulses.",
        "vocab_family": "creative",
        "warm_up_questions": [
            "Do you use writing, drawing, or music to cope with difficult emotions?",
            "Why do some of the greatest artists have such tragic and painful lives?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "turn-off-ai-quote",
        "title": "Turn Off AI",
        "heading": "We should turn off AI for a week to see if people's brains still work.",
        "author": "Anonymous",
        "date": "12 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Technology & Cognitive Independence"},
        "desc": "This session explores our growing intellectual reliance on artificial intelligence tools. We discuss how outsourcing our thinking might affect our problem-solving skills and long-term memory. We will debate whether a temporary digital detox would help restore our cognitive independence.",
        "vocab_family": "society",
        "warm_up_questions": [
            "What is the last thing you asked an AI to write or solve for you?",
            "Could you survive a full week without using any internet search engines?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "voltaire-read-dance-quote",
        "title": "Read and Dance",
        "heading": "Let us read, and let us dance, those two amusements will never do any harm to the world.",
        "author": "Voltaire",
        "date": "15 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇫🇷", "level": "Intermediate (B1)", "theme": "Art & Freedom"},
        "desc": "We celebrate Voltaire's defense of reading and dancing as harmless, liberating joys of life. This session discusses the historic power of literature and physical expression in challenging authority. We will explore how these amusements promote empathy and mental well-being.",
        "vocab_family": "creative",
        "warm_up_questions": [
            "Why do authoritarian regimes often try to restrict reading and dancing?",
            "How do books and dance help you relax after a stressful week?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "disappear-with-art-quote",
        "title": "Disappear with Art",
        "heading": "The older you get the more you understand why people disappear with art, music, books and quiet living.",
        "author": "Anonymous",
        "date": "22 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Upper-Intermediate (B2)", "theme": "Quiet Living & Aging"},
        "desc": "We discuss the natural transition toward quiet living and artistic immersion as we age. This session explores the value of slowing down, social media detachment, and finding deep satisfaction in solitude. We will debate whether societal ambition is eventually replaced by a quest for quiet peace.",
        "vocab_family": "creative",
        "warm_up_questions": [
            "Do you prefer quiet, solitary hobbies or busy social gatherings?",
            "How has your preference for social noise changed over the past five years?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "weird-people-dreams-quote",
        "title": "Weird People with Big Dreams",
        "heading": "I will always prefer weird people with big dreams and poetic personalities.",
        "author": "Anonymous",
        "date": "28 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Personality & Non-conformity"},
        "desc": "This session celebrates non-conformity, passion, and poetic ways of experiencing the world. We will discuss why 'weirdness' is often highly attractive and essential for major social and artistic breakthroughs. We will also share our own unusual habits and what big dreams keep us going.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "How do you define a 'normal' person, and is there actually any such thing?",
            "What is a unique or unusual belief that you secretly hold?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "dostoevsky-politics-religion-quote",
        "title": "Politics and Religion",
        "heading": "If you want to know a person, discuss politics, religion, and women with him.",
        "author": "Fedor Dostoevsky",
        "date": "30 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇷🇺", "level": "Upper-Intermediate (B2)", "theme": "Character & Taboo Topics"},
        "desc": "We analyze Dostoevsky's famous advice on how to truly understand someone's values and temperament. This session discusses the psychology of debates and why sensitive topics reveal our true character. We will debate whether taboo conversations build deeper connections or simply burn bridges.",
        "vocab_family": "relationships",
        "warm_up_questions": [
            "Why are politics and religion considered taboo topics in polite conversation?",
            "Do you agree that discussing extreme topics is the fastest way to see a person's true character?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "underpaid-politicians-teachers-quote",
        "title": "Politicians and Teachers",
        "heading": "Maybe if we underpaid politicians and overpaid teachers, there would be smarter people and less stupid laws.",
        "author": "Anonymous",
        "date": "30 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Upper-Intermediate (B2)", "theme": "Society & Education Values"},
        "desc": "We debate this popular societal critique of wage structures and political priorities. This session discusses the value of educators, the motivation of politicians, and how social priorities shape our future laws. We will analyze the long-term impact of investing heavily in childhood education.",
        "vocab_family": "society",
        "warm_up_questions": [
            "Do you think politicians in your country are paid too much or too little?",
            "If teachers were paid like professional athletes, how would our society change?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "en",
        "slug": "feynman-no-shame-knowing-quote",
        "title": "No Shame in Not Knowing",
        "heading": "There is no shame in not knowing things! It's okay to say 'I don't know'. The one shame is to pretend that we know everything.",
        "author": "Richard Feynman",
        "date": "31 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Intermediate (B1)", "theme": "Humility & Learning"},
        "desc": "We explore Richard Feynman's beautiful reminder of the joy and honesty of learning. This session focuses on intellectual humility, the fear of judgment, and the danger of pretending to have all answers. We will discuss how creating a safe space for curiosity changes our learning speed.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "How comfortable are you admitting 'I don't know' in front of your colleagues?",
            "Why is pretending to know everything so common in professional environments?"
        ],
        "is_mind_matters": False
    },

    # French Greatest Quotes (Dolto & Voltaire)
    {
        "lang": "fr",
        "slug": "dolto-difficult-child-quote",
        "title": "L'enfant difficile",
        "heading": "L'enfant a le droit d'être difficile, c'est seulement ainsi qu'il apprend à être lui-même.",
        "author": "Françoise Dolto",
        "date": "20 October 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇫🇷 🇷🇺", "level": "Intermédiaire (B1)", "theme": "Éducation & Identité"},
        "desc": "Nous analysons la pensée révolutionnaire de la psychanalyste Françoise Dolto sur le comportement des enfants. Cette session explore pourquoi l'opposition et la difficulté sont nécessaires au développement de l'identité de l'enfant. Nous débattrons de la frontière entre éducation bienveillante et conformisme imposé.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Pourquoi pensez-vous que certains enfants sont qualifiés de 'difficiles' ?",
            "Les parents doivent-ils laisser les enfants exprimer librement leurs émotions difficiles ?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "fr",
        "slug": "voltaire-read-dance-quote",
        "title": "Lire et danser",
        "heading": "Laissez lire, et laissez danser; ces deux amusements ne feront jamais de mal au monde.",
        "author": "Voltaire",
        "date": "15 December 2026",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 🇫🇷", "level": "Intermédiaire (B1)", "theme": "Art & Liberté"},
        "desc": "Nous célébrons le plaidoyer de Voltaire en faveur de la lecture et de la danse comme libertés fondamentales de l'esprit humain. Cette session discute de l'importance de la culture et de l'expression corporelle face à l'autorité morale. Nous explorerons comment ces loisirs favorisent la créativité et le bien-être.",
        "vocab_family": "creative",
        "warm_up_questions": [
            "Pourquoi les régimes autoritaires tentent-ils souvent d'interdire les livres et la danse ?",
            "Comment la lecture et la danse vous aident-elles à décompresser après une semaine chargée ?"
        ],
        "is_mind_matters": False
    },

    # Russian Greatest Quotes (Sukhomlinsky, Prishvin, Dolto, Neufeld, Längle, Think, Dostoevsky 12 & 20)
    {
        "lang": "ru",
        "slug": "sukhomlinsky-obedience-quote",
        "title": "Привычка подчиняться",
        "heading": "Самое страшное в ребенке — это привычка подчиняться без рассуждений. Так вырастает равнодушный и безвольный человек.",
        "author": "Василий Сухомлинский",
        "date": "10 October 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇷🇺 Русский", "level": "Выше среднего (B2)", "theme": "Воспитание & Психология"},
        "desc": "Сессия посвящена глубокому высказыванию педагога Василия Сухомлинского об опасности слепого послушания у детей. Мы обсудим последствия подавления воли в процессе воспитания и то, как формируется сильная, критически мыслящая личность. Мы также проанализируем разницу между уважением к авторитету и бездумной покорностью.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Считаете ли вы послушание главным качеством хорошего ребенка?",
            "Были ли в вашем детстве моменты, когда вы бунтовали против правил?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "prishvin-convenient-people-quote",
        "title": "Удобные люди",
        "heading": "Наши родители с детства делали из нас \"удобных\" людей, а потом всю жизнь удивлялись, почему мы такие бесхребетные.",
        "author": "Михаил Пришвин",
        "date": "15 October 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇷🇺 Русский", "level": "Выше среднего (B2)", "theme": "Отношения & Самопознание"},
        "desc": "В этой сессии мы обсудим высказывание Михаила Пришвина об «удобных людях». Мы исследуем влияние родительских ожиданий на формирование характера во взрослом возрасте. Обсудим, почему воспитание послушных детей часто приводит к нерешительности и бесхребетности в зрелости.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Что для вас означает понятие «удобный человек»?",
            "Легко ли вам говорить «нет» в ответ на просьбы других людей?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "dolto-difficult-child-quote",
        "title": "Право быть трудным",
        "heading": "Ребенок имеет право быть трудным, только так он учится быть собой.",
        "author": "Франсуаза Дольто",
        "date": "20 October 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇫🇷 🇷🇺", "level": "Выше среднего (B2)", "theme": "Воспитание & Личность"},
        "desc": "Мы анализируем высказывание французского психоаналитика Франсуазы Дольто о праве ребенка быть трудным. Обсудим, как проявление характера и несогласия помогает формированию здоровой самооценки и индивидуальности. Также исследуем границы между поддержкой и воспитанием дисциплины.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Почему, по вашему мнению, некоторых детей называют «трудными»?",
            "Должны ли родители позволять детям свободно выражать свои негативные эмоции?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "neufeld-resistance-quote",
        "title": "Когда ребенок перестает сопротивляться",
        "heading": "Настоящие проблемы начинаются не тогда, когда ребенок сопротивляется, а когда он перестает сопротивляться.",
        "author": "Гордон Ньюфелд",
        "date": "25 October 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇷🇺", "level": "Выше среднего (B2)", "theme": "Воспитание & Психология"},
        "desc": "Обсуждаем глубокую идею психолога Гордона Ньюфелда о детском сопротивлении. Эта сессия исследует психологические причины бунта и опасности полного детского послушания. Мы обсудим, как родителям правильно реагировать на сопротивление, сохраняя эмоциональную близость.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Всегда ли сопротивление является негативным поведением у растущего ребенка?",
            "Что происходит, когда ребенок полностью перестает выражать свое несогласие?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "langle-suppressed-child-quote",
        "title": "Удобный ребенок",
        "heading": "Если ребенок всегда удобен, значит, он уже подавил часть себя.",
        "author": "Альфрид Лэнгле",
        "date": "28 October 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇷🇺", "level": "Выше среднего (B2)", "theme": "Воспитание & Психология"},
        "desc": "Анализируем высказывание австрийского психотерапевта Альфрида Лэнгле. Мы разберем, как стремление всегда соответствовать ожиданиям взрослых приводит к глубокому подавлению собственных желаний. Также обсудим долгосрочные последствия детского конформизма для взрослой жизни.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Почему «всегда удобный» ребенок получает так много похвалы от общества?",
            "Как подавление эмоций в детстве влияет на психическое здоровье взрослого человека?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "think-for-yourself-quote",
        "title": "Ты так думаешь?",
        "heading": "Ты так думаешь или тебе сказали так думать?",
        "author": "Неизвестный автор",
        "date": "15 November 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇷🇺", "level": "Средний (B1)", "theme": "Критическое мышление"},
        "desc": "Сессия посвящена вопросу независимости нашего мышления в эпоху медиа и социальных сетей. Мы обсудим, насколько наши личные мнения действительно принадлежат нам, а не навязаны обществом или алгоритмами. Научимся распознавать внешнее влияние и развивать интеллектуальную автономию.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "Как часто вы ставите под сомнение источники своих убеждений?",
            "Возможно ли иметь абсолютно независимое мнение в цифровую эпоху?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "dostoevsky-loving-power-quote",
        "title": "Любовь и доверие",
        "heading": "Любить — значит давать кому-то силу уничтожить тебя, но верить, что он этого не сделает.",
        "author": "Федор Достоевский",
        "date": "25 November 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇷🇺", "level": "Выше среднего (B2)", "theme": "Отношения & Доверие"},
        "desc": "Разбираем эмоционально сильное суждение Достоевского о природе любви. Мы обсудим неизбежность уязвимости в глубоких человеческих отношениях. Будем дискутировать на тему того, возможно ли настоящее чувство без полного открытия себя перед партнером.",
        "vocab_family": "relationships",
        "warm_up_questions": [
            "Согласны ли вы, что любовь и уязвимость неразделимы?",
            "Является ли доверие более важным фактором в отношениях, чем любовь?"
        ],
        "is_mind_matters": False
    },
    {
        "lang": "ru",
        "slug": "dostoevsky-politics-religion-quote",
        "title": "Политика и религия",
        "heading": "Хочешь узнать человека — поговори с ним о политике, религии и женщинах.",
        "author": "Федор Достоевский",
        "date": "30 December 2026",
        "meta_info": {"duration": "60 минут", "languages": "🇬🇧 🇷🇺", "level": "Выше среднего (B2)", "theme": "Характер & Запретные темы"},
        "desc": "Анализируем знаменитый совет Достоевского о познании человеческой натуры через острые дискуссии. Мы обсудим психологию споров и причины, почему именно отношение к табуированным темам раскрывает характер. Обсудим, сближают ли такие разговоры или сжигают мосты.",
        "vocab_family": "relationships",
        "warm_up_questions": [
            "Почему политика и религия считаются запретными темами в светской беседе?",
            "Согласны ли вы, что обсуждение острых тем — самый быстрый способ узнать характер человека?"
        ],
        "is_mind_matters": False
    },

    # English Mind Matters
    {
        "lang": "en",
        "slug": "mind-great-literature",
        "title": "Mind and Great Literature",
        "heading": "What happens inside your mind when you read great literature.",
        "author": "Cognitive Psychology",
        "date": "10 January 2027",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Brain & Narrative Empathy"},
        "desc": "We explore how reading masterpieces of world literature fundamentally rewires our brain's neural pathways. This session adopts a deeply reflective, gentle, and psychological voice to analyze narrative empathy, mental visualization, and emotional resonance. We will explore how books act as mirrors for our hidden feelings.",
        "vocab_family": "wisdom",
        "warm_up_questions": [
            "What book has had the deepest psychological impact on how you see yourself?",
            "Do you feel a deep, physical reaction in your body when reading tense scenes?"
        ],
        "is_mind_matters": True
    },
    {
        "lang": "en",
        "slug": "simmel-objective-freedom",
        "title": "Georg Simmel: Objective Freedom",
        "heading": "Entering a new space as 'strangers' grants us a unique form of 'objective freedom'.",
        "author": "Georg Simmel",
        "date": "15 January 2027",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Sociology of the Stranger"},
        "desc": "We unpack Georg Simmel's famous theory of 'The Stranger' and the quiet liberation of entering new communities. This session explores how being unbound by local history or tradition allows us to shed the heavy weight of community judgment. We will discuss how being an outsider can help us discover a pristine, authentic self.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "Have you ever traveled to a place where absolutely nobody knew your name?",
            "Is it easier to be completely honest with a stranger than with a close family member?"
        ],
        "is_mind_matters": True
    },
    {
        "lang": "en",
        "slug": "moving-new-city-true-self",
        "title": "Moving and the True Self",
        "heading": "Why is it that every time we move to a new city, we feel like we finally found our 'true self'?",
        "author": "Urban Psychology",
        "date": "20 January 2027",
        "meta_info": {"duration": "60 minutes", "languages": "🇬🇧 English", "level": "Advanced (C1)", "theme": "Geographical Relocation & Renewal"},
        "desc": "This session explores the psychological fantasy of geographical relocation as a catalyst for identity renewal. We will discuss whether moving actually transforms us or if we simply carry our old anxieties into new streets. Join us for a deeply reflective conversation about the geography of happiness and inner peace.",
        "vocab_family": "identity",
        "warm_up_questions": [
            "How many different cities have you lived in throughout your lifetime?",
            "Do you believe that changing your physical environment can cure inner unhappiness?"
        ],
        "is_mind_matters": True
    }
]

def generate_sessions():
    print("Generating sessions...")
    for s in SESSIONS:
        lang = s["lang"]
        slug = s["slug"]
        is_mind_matters = s["is_mind_matters"]

        # Select correct vocab templates
        if lang == "fr":
            vocab_list = VOCAB_TEMPLATES_FR[s["vocab_family"]]
            mistakes = MISTAKES_CATALOG_FR
            lst_text = "Une réflexion comparative sur nos habitudes et notre vision de nous-mêmes."
            depth_prefix = "../../../../"
        elif lang == "ru":
            vocab_list = VOCAB_TEMPLATES_RU[s["vocab_family"]]
            mistakes = MISTAKES_CATALOG_RU
            lst_text = "Сравнительный анализ наших привычек и восприятия себя."
            depth_prefix = "../../../../"
        else: # en
            vocab_list = VOCAB_TEMPLATES[s["vocab_family"]]
            mistakes = MISTAKES_CATALOG_EN
            lst_text = "A comparative reflection on our habits and self-perceptions."
            depth_prefix = "../../../"

        # Construct rounds items
        round_1_items, round_2_items = get_discussion_rounds(lang, vocab_list, is_mind_matters)

        # Build complete HTML
        html = make_session_html(
            lang=lang,
            title=s["title"],
            heading=f"\"{s['heading']}\" — {s['author']}" if not is_mind_matters else s["heading"],
            date=s["date"],
            meta_info=s["meta_info"],
            desc=s["desc"],
            vocab_list=vocab_list,
            warm_up_questions=s["warm_up_questions"],
            round_1_items=round_1_items,
            lst_text=lst_text,
            round_2_items=round_2_items,
            mistakes=mistakes,
            depth_prefix=depth_prefix,
            is_mind_matters=is_mind_matters
        )

        # Define file path
        if is_mind_matters:
            filepath = os.path.join(MIND_DIR_EN, f"{slug}.html")
        else:
            if lang == "fr":
                filepath = os.path.join(QUOTES_DIR_FR, f"{slug}.html")
            elif lang == "ru":
                filepath = os.path.join(QUOTES_DIR_RU, f"{slug}.html")
            else:
                filepath = os.path.join(QUOTES_DIR_EN, f"{slug}.html")

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Generated: {filepath}")

def update_index_page(filepath, lang, is_mind_matters):
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    history_body = soup.find(class_="history-body")
    if not history_body:
        print(f"Error: .history-body not found in {filepath}")
        return

    # Clear placeholder text if found (like "История сессий скоро появится." or similar)
    for p in list(history_body.find_all("p")):
         p_text = p.get_text()
         if "История сессий" in p_text or "history" in p_text or "soon" in p_text or "bientôt" in p_text:
             p.decompose()

    # Filter sessions matching this lang and is_mind_matters
    target_sessions = [s for s in SESSIONS if s["lang"] == lang and s["is_mind_matters"] == is_mind_matters]

    # Remove any existing history-session tags matching our targets to avoid duplicates
    existing_sessions = history_body.find_all(class_="history-session")
    for es in existing_sessions:
        link = es.find("a")
        if link and link.get("href"):
            for s in target_sessions:
                target_href = f"sessions/mind-matters/{s['slug']}.html" if is_mind_matters else f"sessions/the-greatest-quotes/{s['slug']}.html"
                if target_href in link.get("href"):
                    es.decompose()
                    break

    # Re-insert the target sessions in chronological order (newest at the top)
    for s in reversed(target_sessions):
        href = f"sessions/mind-matters/{s['slug']}.html" if is_mind_matters else f"sessions/the-greatest-quotes/{s['slug']}.html"
        if lang == "fr":
            btn_text = "Voir la session complète →"
        elif lang == "ru":
            btn_text = "Полная сессия →"
        else:
            btn_text = "View Full Session →"

        new_item_html = f"""<div class="history-session" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#FAF7F2;padding:1rem;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <h4 style="margin:0;font-size:1rem;">{s['title']}</h4>
                <span class="history-date" style="font-size:.8rem;color:var(--muted);">{s['date']}</span>
              </div>
              <a href="{href}" class="view-btn" style="background:var(--indigo);">{btn_text}</a>
            </div>"""
        new_tag = BeautifulSoup(new_item_html, "html.parser").div
        history_body.insert(0, new_tag)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))
    print(f"Updated index page: {filepath}")

if __name__ == "__main__":
    generate_sessions()
    update_index_page("events/the-greatest-quotes.html", lang="en", is_mind_matters=False)
    update_index_page("events/fr/the-greatest-quotes.html", lang="fr", is_mind_matters=False)
    update_index_page("events/ru/the-greatest-quotes.html", lang="ru", is_mind_matters=False)
    update_index_page("events/mind-matters.html", lang="en", is_mind_matters=True)
    print("All additions generated and linked successfully!")
