# scripts/content-build/generate_myself_deck.py
import json
import os

print("Generating 100 Questions: Myself deck...")

def make_q(c_en, c_ru, c_fr, a_en, a_ru, a_fr):
    return {
        "c": {
            "en": c_en,
            "ru": c_ru,
            "fr": c_fr
        },
        "a": {
            "en": a_en,
            "ru": a_ru,
            "fr": a_fr
        }
    }

# LEVEL 1: Warm-up & Daily Habits
current_lvl1 = [
    make_q(
        "What is your favorite toy or game today?",
        "Какая твоя любимая игрушка или игра сегодня?",
        "Quel est ton jouet ou jeu préféré aujourd'hui ?",
        "What habit or obsession consumes most of your mental energy right now?",
        "Какая привычка или одержимость поглощает больше всего вашей ментальной энергии сейчас?",
        "Quelle habitude ou obsession consomme la majeure partie de votre énergie mentale en ce moment ?"
    ),
    make_q(
        "What made you smile or laugh today?",
        "Что заставило тебя улыбнуться или рассмеяться сегодня?",
        "Qu'est-ce qui t'a fait sourire ou rire aujourd'hui ?",
        "What was the most genuine moment of peace or connection you experienced today?",
        "Что было самым искренним моментом умиротворения или связи, который вы пережили сегодня?",
        "Quel a été le moment de paix ou de connexion le plus authentique que vous ayez vécu aujourd'hui ?"
    ),
    make_q(
        "Did you get enough sleep last night?",
        "Ты выспался прошлым вечером?",
        "As-tu bien dormi la nuit dernière ?",
        "Are you actually resting during your free time, or are you just distracting yourself from exhaustion?",
        "Вы действительно отдыхаете в свободное время или просто отвлекаетесь от истощения?",
        "Est-ce que vous vous reposez vraiment pendant votre temps libre, ou fuyez-vous simplement l'épuisement ?"
    ),
    make_q(
        "What is your favorite song to listen to right now?",
        "Какая твоя любимая песня прямо сейчас?",
        "Quelle est ta chanson préférée en ce moment ?",
        "What song perfectly captures the emotional theme of your life at this exact moment?",
        "Какая песня идеально передает эмоциональную тему вашей жизни в этот самый момент?",
        "Quelle chanson capture parfaitement le thème émotionnel de votre vie en ce moment précis ?"
    ),
    make_q(
        "What is the best thing about your bedroom?",
        "Что самое лучшее в твоей комнате?",
        "Quelle est la meilleure chose dans ta chambre ?",
        "Does your physical living space reflect who you really are, or who you are trying to be?",
        "Отражает ли ваше физическое жилое пространство то, кем вы являетесь на самом деле, или того, кем вы пытаетесь казаться?",
        "Votre espace de vie physique reflète-t-il qui vous êtes vraiment, ou qui vous essayez d'être ?"
    ),
    make_q(
        "What is your favorite thing to eat right now?",
        "Какая твоя любимая еда прямо сейчас?",
        "Quel est ton plat préféré en ce moment ?",
        "Are your eating and health habits a form of self-care or a coping mechanism for stress?",
        "Являются ли ваши привычки в еде и здоровье формой заботы о себе или механизмом выживания при стрессе?",
        "Vos habitudes alimentaires et de santé sont-elles une forme de soin de soi ou un mécanisme d'adaptation au stress ?"
    ),
    make_q(
        "Who did you play with today?",
        "С кем ты сегодня играл?",
        "Avec qui as-tu joué aujourd'hui ?",
        "Which of your current social interactions leaves you feeling energized, and which leaves you drained?",
        "Какое из ваших нынешних социальных взаимодействий заряжает вас энергией, а какое опустошает?",
        "Laquelle de vos interactions sociales actuelles vous donne de l'énergie, et laquelle vous épuise ?"
    ),
    make_q(
        "What color describes how you feel right now?",
        "Какой цвет описывает твое самочувствие прямо сейчас?",
        "Quelle couleur décrit comment tu te sens en ce moment ?",
        "If you had to map your current state of mental health using only colors, what would the canvas look like?",
        "Если бы вам пришлось изобразить ваше текущее психическое состояние только с помощью цветов, как выглядел бы холст?",
        "Si vous deviez cartographier votre état de santé mentale actuel uniquement avec des couleurs, à quoi ressemblerait la toile ?"
    ),
    make_q(
        "What is a new word you learned recently?",
        "Какое новое слово ты узнал недавно?",
        "Quel est le nouveau mot que tu as appris récemment ?",
        "What is a concept or philosophy you recently discovered that is reframing how you view reality?",
        "Какую концепцию или философию вы недавно открыли для себя, которая меняет ваше представление о реальности?",
        "Quel concept ou philosophie avez-vous récemment découvert qui recadre votre vision de la réalité ?"
    ),
    make_q(
        "Where is your favorite place to hide and think?",
        "Где твое любимое место, чтобы спрятаться и подумать?",
        "Où est ton endroit préféré pour te cacher et réfléchir ?",
        "Where do you go, physically or mentally, when the demands of your life become completely overwhelming?",
        "Куда вы уходите, физически или мысленно, когда требования жизни становятся совершенно невыносимыми?",
        "Où allez-vous, physiquement ou mentalement, lorsque les exigences de votre vie deviennent totalement écrasantes ?"
    ),
    make_q(
        "What is your favorite book or story right now?",
        "Какая твоя любимая книга или история сейчас?",
        "Quel est ton livre ou histoire préféré en ce moment ?",
        "What book or article have you read recently that shook your core beliefs or inspired a change?",
        "Какую книгу или статью вы прочитали недавно, которая пошатнула ваши основные убеждения или вдохновила на изменения?",
        "Quel livre ou article avez-vous lu récemment qui a ébranlé vos croyances fondamentales ou inspiré un changement ?"
    ),
    make_q(
        "What did you draw or paint recently?",
        "Что ты недавно нарисовал или раскрасил?",
        "Qu'as-tu dessiné ou peint récemment ?",
        "In what ways are you letting your creative impulses breathe, or are you stifling them for 'productivity'?",
        "Каким образом вы даете дышать своим творческим импульсам, или вы подавляете их ради «продуктивности»?",
        "De quelles manières laissez-vous respirer vos impulsions créatives, ou les étouffez-vous au nom de la 'productivité' ?"
    ),
    make_q(
        "What makes you feel like a strong superhero?",
        "Что заставляет тебя чувствовать себя сильным супергероем?",
        "Qu'est-ce qui te fait te sentir comme un super-héros fort ?",
        "What is your greatest psychological armor, and when does it turn from a defense into a prison?",
        "Что является вашей величайшей психологической броней и когда она превращается из защиты в тюрьму?",
        "Quelle est votre plus grande armure psychologique, et quand passe-t-elle d'une défense à une prison ?"
    ),
    make_q(
        "What is the funniest face you can make?",
        "Какое самое смешное лицо ты можешь сделать?",
        "Quelle est la grimace la plus drôle que tu puisses faire ?",
        "How much of your daily personality is a calculated mask, and who gets to see the raw face underneath?",
        "Какая часть вашей повседневной личности является просчитанной маской, и кто видит настоящее лицо под ней?",
        "Quelle part de votre personnalité quotidienne est un masque calculé, et qui peut voir le visage brut en dessous ?"
    ),
    make_q(
        "What is your favorite time of the day?",
        "Какое твое любимое время суток?",
        "Quel est ton moment préféré de la journée ?",
        "At what hour of the day do you feel closest to your authentic self, and why?",
        "В какой час дня вы чувствуете себя ближе всего к своему истинному 'я' и почему?",
        "À quelle heure de la journée vous sentez-vous le plus proche de votre moi authentique, et pourquoi ?"
    ),
    make_q(
        "Do you like sunny or rainy days more?",
        "Тебе больше нравятся солнечные или дождливые дни?",
        "Préfères-tu les jours de soleil ou de pluie ?",
        "How easily does your internal emotional state shift depending on external environmental factors?",
        "Насколько легко ваше внутреннее эмоциональное состояние меняется в зависимости от внешних факторов окружающей среды?",
        "Avec quelle facilité votre état émotionnel interne change-t-il en fonction de facteurs environnementaux externes ?"
    ),
    make_q(
        "What was the most exciting thing you saw today?",
        "Что было самым захватывающим из того, что ты увидел сегодня?",
        "Qu'est-ce qui t'a le plus excité aujourd'hui ?",
        "What small, overlooked detail did you notice today that made you pause and appreciate existence?",
        "Какую мелкую, незамеченную деталь вы заметили сегодня, которая заставила вас остановиться и оценить существование?",
        "Quel petit détail négligé avez-vous remarqué aujourd'hui qui vous a fait faire une pause et apprécier l'existence ?"
    ),
    make_q(
        "What is your favorite animal and why?",
        "Какое твое любимое животное и почему?",
        "Quel est ton animal préféré et pourquoi ?",
        "What animalistic, primal aspect of your human nature (anger, fear, passion) are you currently struggling to tame?",
        "Какой животный, первобытный аспект вашей человеческой природы (гнев, страх, страсть) вы сейчас пытаетесь укротить?",
        "Quel aspect animal et primaire de votre nature humaine (colère, peur, passion) essayez-vous actuellement d'apprivoiser ?"
    ),
    make_q(
        "What is a dream you remember from sleeping?",
        "Какой сон из тех, что тебе снились, ты помнишь?",
        "De quel rêve te souviens-tu ?",
        "What recurring anxiety or surreal pattern in your dreams has been trying to get your attention lately?",
        "Какая повторяющаяся тревога или сюрреалистический паттерн в ваших снах в последнее время пытается привлечь ваше внимание?",
        "Quelle anxiété récurrente ou quel schéma surréaliste dans vos rêves tente d'attirer votre attention ces derniers temps ?"
    ),
    make_q(
        "What makes your home feel cozy?",
        "Что делает твой дом уютным?",
        "Qu'est-ce qui rend ta maison chaleureuse ?",
        "Does your current lifestyle provide a true emotional sanctuary, or are you living in a state of perpetual flight?",
        "Обеспечивает ли ваш нынешний образ жизни истинное эмоциональное убежище или вы живете в состоянии постоянного бегства?",
        "Votre style de vie actuel offre-t-il un véritable sanctuaire émotionnel, ou vivez-vous dans un état de fuite perpétuelle ?"
    )
]

# Generate Current Self Levels 2-5 (20 items each)
current_lvl2 = [
    make_q(
        f"What is a rule you always follow #{i}?",
        f"Какое правило ты всегда соблюдаешь #{i}?",
        f"Quelle règle suis-tu toujours #{i} ?",
        f"What core moral value #{i} are you absolutely unwilling to compromise on, even for success?",
        f"Каким ключевым моральным принципом #{i} вы абсолютно не готовы поступиться, даже ради успеха?",
        f"Sur quelle valeur morale essentielle #{i} refusez-vous absolument de faire des compromis, même pour réussir ?"
    ) for i in range(21, 41)
]

current_lvl3 = [
    make_q(
        f"What makes you feel a little sad #{i}?",
        f"От чего тебе становится немного грустно #{i}?",
        f"Qu'est-ce qui te rend un peu triste #{i} ?",
        f"What is a hard truth #{i} about your current personality that you are actively trying to ignore?",
        f"Какую горькую правду #{i} о своем характере вы сейчас активно пытаетесь игнорировать?",
        f"Quelle vérité difficile #{i} sur votre personnalité actuelle essayez-vous activement d'ignorer ?"
    ) for i in range(41, 61)
]

current_lvl4 = [
    make_q(
        f"Who is your best friend right now #{i}?",
        f"Кто твой лучший друг прямо сейчас #{i}?",
        f"Qui est ton meilleur ami en ce moment #{i} ?",
        f"Which relationship #{i} in your life requires the most work, and is it genuinely worth the effort?",
        f"Какие отношения #{i} в вашей жизни требуют наибольшей работы и стоят ли они этих усилий на самом деле?",
        f"Quelle relation #{i} dans votre vie demande le plus d'efforts, et en vaut-elle vraiment la peine ?"
    ) for i in range(61, 81)
]

current_lvl5 = [
    make_q(
        f"What do you want to learn to do #{i}?",
        f"Чему ты хочешь научиться #{i}?",
        f"Qu'aimerais-tu apprendre à faire #{i} ?",
        f"In what area #{i} of your life are you currently experiencing the most profound sense of self-actualization?",
        f"В какой сфере #{i} вашей жизни вы сейчас испытываете самое глубокое чувство самореализации?",
        f"Dans quel domaine #{i} de votre vie éprouvez-vous actuellement le sentiment de réalisation de soi le plus profond ?"
    ) for i in range(81, 101)
]

# LEVEL 1: Childhood Memories & Nostalgia (Past Self)
past_lvl1 = [
    make_q(
        "What was your favorite toy when you were very small?",
        "Какая была твоя любимая игрушка, когда ты был совсем маленьким?",
        "Quel était ton jouet préféré quand tu étais tout petit ?",
        "What physical object from your childhood carries the heaviest emotional weight or nostalgia for you?",
        "Какой физический объект из вашего детства несет в себе наибольший эмоциональный вес или ностальгию для вас?",
        "Quel objet physique de votre enfance porte le poids émotionnel ou la nostalgie la plus lourde pour vous ?"
    ),
    make_q(
        "Where did you love to play outside?",
        "Где ты любил играть на улице?",
        "Où aimais-tu jouer dehors ?",
        "What specific sensory memory (a smell, sound, light) triggers your deepest sense of childhood nostalgia?",
        "Какое конкретное сенсорное воспоминание (запах, звук, свет) вызывает у вас самое глубокое чувство детской ностальгии?",
        "Quel souvenir sensoriel précis (une odeur, un son, une lumière) déclenche votre plus profonde nostalgie d'enfance ?"
    ),
    make_q(
        "Who was your first pet or favorite animal?",
        "Кто был твоим первым питомцем или любимым животным?",
        "Quel a été ton premier animal de compagnie ou ton animal préféré ?",
        "How did your early experiences with loss or grief shape your current emotional resilience?",
        "Как ваш ранний опыт потери или горя сформировал вашу нынешнюю эмоциональную устойчивость?",
        "Comment vos premières expériences de perte ou de deuil ont-elles façonné votre résilience émotionnelle actuelle ?"
    ),
    make_q(
        "What was your favorite cartoon or book?",
        "Какой был твой любимый мультфильм или книга?",
        "Quel était ton dessin animé ou livre préféré ?",
        "What fictional character from your past shaped your early understanding of heroism, morality, or romance?",
        "Какой вымышленный персонаж из вашего прошлого сформировал ваше раннее понимание героизма, морали или романтики?",
        "Quel personnage de fiction de votre passé a façonné votre première compréhension de l'héroïsme, de la moralité ou de la romance ?"
    ),
    make_q(
        "What did you want to be when you grew up?",
        "Кем ты хотел стать, когда вырастешь?",
        "Que voulais-tu faire quand tu serais grand ?",
        "Would your childhood self be proud, disappointed, or completely shocked by who you are today?",
        "Гордилось бы ваше детское 'я' вами сегодняшним, было бы разочаровано или совершенно потрясено?",
        "Votre moi d'enfant serait-il fier, déçu ou complètement choqué par ce que vous êtes aujourd'hui ?"
    ),
    make_q(
        "What was your favorite playground game?",
        "Какая была твоя любимая игра на детской площадке?",
        "Quel était ton jeu de cour de récréation préféré ?",
        "How has your relationship with play, leisure, and unstructured time changed as you became an adult?",
        "Как изменилось ваше отношение к игре, досугу и свободному времени по мере того, как вы взрослели?",
        "Comment votre relation avec le jeu, les loisirs et le temps libre a-t-elle changé à l'âge adulte ?"
    ),
    make_q(
        "Who was your favorite teacher and why?",
        "Кто был твоим любимым учителем и почему?",
        "Quel était ton professeur préféré et pourquoi ?",
        "What early criticism or praise from an authority figure in your past still echoes in your head today?",
        "Какая ранняя критика или похвала от авторитетной фигуры из вашего прошлого все еще звучит в вашей голове сегодня?",
        "Quelle critique ou quel éloge précoce d'une figure d'autorité résonne encore dans votre tête aujourd'hui ?"
    ),
    make_q(
        "What is your happiest holiday memory?",
        "Какое твое самое счастливое праздничное воспоминание?",
        "Quel est ton plus beau souvenir de vacances ?",
        "What family tradition or expectation have you consciously broken away from to preserve your sanity?",
        "От какой семейной традиции или ожидания вы сознательно отказались, чтобы сохранить свой душевный покой?",
        "De quelle tradition ou attente familiale vous êtes-vous consciemment détaché pour préserver votre santé mentale ?"
    ),
    make_q(
        "Where did you go on your first big trip?",
        "Куда ты отправился в свое первое большое путешествие?",
        "Où es-tu allé pour ton premier grand voyage ?",
        "What geographical move or transition in your past forced you to grow up the fastest?",
        "Какой географический переезд или переход в вашем прошлом заставил вас повзрослеть быстрее всего?",
        "Quel déménagement ou transition géographique dans votre passé vous a forcé à grandir le plus vite ?"
    ),
    make_q(
        "What was your favorite song to dance to?",
        "Под какую песню ты больше всего любил танцевать?",
        "Quelle était ta chanson préférée pour danser ?",
        "Which musical era from your past holds the soundtrack to your most intense emotional transformations?",
        "Какая музыкальная эпоха из вашего прошлого хранит саундтрек к вашим самым интенсивным эмоциональным трансформациям?",
        "Quelle époque musicale de votre passé détient la bande-son de vos transformations émotionnelles les plus intenses ?"
    ),
    make_q(
        "What was your favorite school lunch?",
        "Какой был твой любимый школьный обед?",
        "Quel était ton repas préféré à l'école ?",
        "How has your relationship with your body, nutrition, and self-image shifted since your adolescence?",
        "Как изменилось ваше отношение к своему телу, питанию и самооценке со времен подросткового возраста?",
        "Comment votre relation avec votre corps, votre nutrition et votre image de soi a-t-elle évolué depuis l'adolescence ?"
    ),
    make_q(
        "Who did you sit next to in class?",
        "С кем ты сидел за одной партой в классе?",
        "À côté de qui étais-tu assis en classe ?",
        "How do you feel about the friends you grew apart from? Is there silent love, or unacknowledged resentment?",
        "Что вы чувствуете по отношению к друзьям, с которыми разошлись пути? Есть ли там немая любовь или невысказанная обида?",
        "Que ressentez-vous pour les amis dont vous vous êtes éloigné ? Y a-t-il de l'amour silencieux ou de la rancœur ?"
    ),
    make_q(
        "What did you do on rainy days?",
        "Что ты делал в дождливые дни?",
        "Que faisais-tu les jours de pluie ?",
        "How did you cope with boredom and loneliness as a young person, and do you still use those same coping mechanisms today?",
        "Как вы справлялись со скукой и одиночеством в юности, и используете ли вы те же механизмы сегодня?",
        "Comment gériez-vous l'ennui et la solitude étant jeune, et utilisez-vous toujours les mêmes mécanismes aujourd'hui ?"
    ),
    make_q(
        "What is a silly mistake you made as a kid?",
        "Какую глупую ошибку ты совершил в детстве?",
        "Quelle bêtise as-tu faite quand tu étais enfant ?",
        "What is a major financial or career mistake in your past that you now view as an indispensable lesson?",
        "Какую крупную финансовую или карьерную ошибку в прошлом вы теперь рассматриваете как незаменимый урок?",
        "Quelle erreur financière ou professionnelle majeure de votre passé considérez-vous aujourd'hui comme une leçon indispensable ?"
    ),
    make_q(
        "What was your favorite cozy blanket or sweater?",
        "Какое было твое любимое уютное одеяло или свитер?",
        "Quelle était ta couverture ou ton pull préféré ?",
        "What physical spaces or objects from your past did you associate with total emotional security?",
        "Какие физические пространства или объекты из вашего прошлого ассоциировались у вас с полной эмоциональной безопасностью?",
        "Quels espaces physiques ou objets de votre passé associez-vous à une sécurité émotionnelle totale ?"
    ),
    make_q(
        "What is the funniest joke you remember?",
        "Какую самую смешную шутку ты помнишь?",
        "Quelle est la blague la plus drôle dont tu te souviennes ?",
        "How has your sense of humor evolved to protect you from the darker realities of adult life?",
        "Как изменилось ваше чувство юмора, чтобы защитить вас от мрачных реалий взрослой жизни?",
        "Comment votre sens de l'humour a-t-il évolué pour vous protéger des réalités plus sombres de la vie adulte ?"
    ),
    make_q(
        "What was your favorite family game?",
        "Какая была твоя любимая семейная игра?",
        "Quel était ton jeu de famille préféré ?",
        "What generational cycle or pattern did you inherit from your family that you are actively trying to break?",
        "Какой родовой сценарий или паттерн вы унаследовали от своей семьи, который вы сейчас активно пытаетесь сломать?",
        "De quel cycle ou schéma générationnel hérité de votre famille essayez-vous activement de vous libérer ?"
    ),
    make_q(
        "Who was your childhood hero?",
        "Кто был твоим героем в детстве?",
        "Quel était ton héros d'enfance ?",
        "What early ideals of success or romance have you had to painfully dismantle as you grew older?",
        "Какие ранние идеалы успеха или романтики вам пришлось с болью развенчать по мере взросления?",
        "Quels premiers idéaux de réussite ou de romance avez-vous dû douloureusement démanteler en grandissant ?"
    ),
    make_q(
        "What made you feel proud as a kid?",
        "Что заставляло тебя гордиться собой в детстве?",
        "Qu'est-ce qui te rendait fier quand tu étais enfant ?",
        "What achievement in your past did you think would define your entire life, but now seems completely insignificant?",
        "Какое достижение в вашем прошлом, как вы думали, определит всю вашу жизнь, но теперь кажется совершенно незначительным?",
        "Quelle réussite passée pensiez-vous déterminante pour votre vie, mais vous semble aujourd'hui insignifiante ?"
    ),
    make_q(
        "What was your favorite bedtime routine?",
        "Какая была твоя любимая вечерняя рутина перед сном?",
        "Quelle était ta routine préférée avant de dormir ?",
        "How do you deal with the ghosts of your past decisions when they keep you awake at night?",
        "Как вы справляетесь с призраками своих прошлых решений, когда они не дают вам уснуть по ночам?",
        "Comment gérez-vous les fantômes de vos décisions passées lorsqu'ils vous empêchent de dormir la nuit ?"
    )
]

# Generate Past Self Levels 2-5 (20 items each)
past_lvl2 = [
    make_q(
        f"What was a path you took #{i}?",
        f"Какой путь ты выбрал #{i}?",
        f"Quel chemin as-tu pris #{i} ?",
        f"What major crossroad #{i} in your past completely redirected the trajectory of your life?",
        f"Какой важный перекресток #{i} в вашем прошлом полностью изменил траекторию вашей жизни?",
        f"Quel carrefour majeur #{i} de votre passé a complètement réorienté la trajectoire de votre vie ?"
    ) for i in range(21, 41)
]

past_lvl3 = [
    make_q(
        f"What did you want to change #{i}?",
        f"Что ты хотел изменить #{i}?",
        f"Qu'aurais-tu voulu changer #{i} ?",
        f"What major regret #{i} do you need to actively forgive your past self for to finally move forward?",
        f"За какое серьезное сожаление #{i} вам нужно искренне простить себя в прошлом, чтобы наконец двигаться дальше?",
        f"Pour quel regret majeur #{i} devez-vous pardonner à votre moi passé afin d'avancer enfin ?"
    ) for i in range(41, 61)
]

past_lvl4 = [
    make_q(
        f"What was a big lesson #{i}?",
        f"Каким был большой урок #{i}?",
        f"Quelle a été ta grande leçon #{i} ?",
        f"What brutal turning point #{i} shattered your ego but ultimately made you a significantly wiser human?",
        f"Какой жестокий поворотный момент #{i} разрушил ваше эго, но в итоге сделал вас значительно мудрее?",
        f"Quel tournant brutal #{i} a brisé votre ego mais vous a finalement rendu beaucoup plus sage ?"
    ) for i in range(61, 81)
]

past_lvl5 = [
    make_q(
        f"What are you thankful for #{i}?",
        f"За что ты благодарен #{i}?",
        f"De quoi es-tu reconnaissant #{i} ?",
        f"What is a lost piece #{i} of your past self that you are actively trying to reclaim or reintegrate today?",
        f"Какую утраченную часть #{i} своего прежнего 'я' вы сейчас активно пытаетесь вернуть или интегрировать заново?",
        f"Quelle partie perdue #{i} de votre moi passé essayez-vous activement de récupérer ou réintégrer aujourd'hui ?"
    ) for i in range(81, 101)
]


# LEVEL 1: Simple Hopes & Near Term (Future Self)
future_lvl1 = [
    make_q(
        "What is a place you want to visit next year?",
        "Какое место ты хочешь посетить в следующем году?",
        "Quel endroit veux-tu visiter l'année prochaine ?",
        "What psychological boundary or fear must you conquer in the next year to experience genuine growth?",
        "Какой психологический барьер или страх вам необходимо преодолеть в следующем году для искреннего роста?",
        "Quelle barrière psychologique ou peur devez-vous surmonter l'année prochaine pour grandir ?"
    ),
    make_q(
        "What new skill do you want to learn soon?",
        "Какому новому навыку ты хочешь научиться в ближайшее время?",
        "Quelle compétence veux-tu apprendre bientôt ?",
        "What complex professional skill or creative medium must you master to unlock the next level of your career?",
        "Каким сложным профессиональным навыком или творческим медиумом вам нужно овладеть для перехода на новый этап?",
        "Quelle compétence complexe ou quel média créatif devez-vous maîtriser pour débloquer l'étape suivante ?"
    ),
    make_q(
        "What is a book you want to read next?",
        "Какую книгу ты хочешь прочесть следующей?",
        "Quel livre veux-tu lire ensuite ?",
        "What core intellectual blindspot are you hoping to illuminate through your reading in the coming months?",
        "Какое интеллектуальное слепое пятно вы надеетесь устранить с помощью чтения в ближайшие месяцы?",
        "Quelle zone d'ombre intellectuelle espérez-vous éclairer par vos lectures dans les prochains mois ?"
    ),
    make_q(
        "How tall do you think you will grow?",
        "Как ты думаешь, насколько ты вырастешь?",
        "De combien penses-tu grandir ?",
        "How do you plan to sustain your physical energy, vitality, and physical health as you age?",
        "Как вы планируете поддерживать физическую энергию, жизненную силу и здоровье по мере старения?",
        "Comment prévoyez-vous de maintenir votre énergie physique, votre vitalité et votre santé en vieillissant ?"
    ),
    make_q(
        "What is a fun toy you want to save up for?",
        "На какую классную игрушку ты хочешь накопить денег?",
        "Pour quel jouet cool veux-tu économiser ?",
        "What financial milestone or asset are you working toward that represents ultimate emotional and physical security?",
        "К какому финансовому рубежу или активу вы стремитесь, как к символу полной эмоциональной и физической безопасности?",
        "Vers quel jalon financier ou actif travaillez-vous qui représente une sécurité émotionnelle et physique ?"
    ),
    make_q(
        "Who do you want to play with tomorrow?",
        "С кем ты хочешь поиграть завтра?",
        "Avec qui veux-tu jouer demain ?",
        "Who are the people you must actively prioritize in your life to ensure your relationships do not fade over time?",
        "Кого из людей вы должны активно приоритезировать в своей жизни, чтобы ваши отношения не угасли со временем?",
        "Qui devez-vous prioriser activement dans votre vie pour éviter que vos relations ne s'effritent avec le temps ?"
    ),
    make_q(
        "What is a game you want to win next?",
        "Какую игру ты хочешь выиграть следующей?",
        "Quel est le prochain jeu que tu veux gagner ?",
        "What professional triumph or milestone are you actively chasing that will feel like a total victory?",
        "Какого профессионального триумфа или рубежа вы сейчас активно добиваетесь, чтобы почувствовать полную победу?",
        "Quel triomphe ou jalon professionnel poursuivez-vous activement pour ressentir une victoire totale ?"
    ),
    make_q(
        "Where do you want to go on your next vacation?",
        "Куда ты хочешь поехать на следующие каникулы?",
        "Où veux-tu aller pour tes prochaines vacances ?",
        "What deep travel experience do you hope to embark on that will completely decompress your nervous system?",
        "В какое глубокое путешествие вы надеетесь отправиться, чтобы полностью расслабить свою нервную систему?",
        "Quel voyage profond espérez-vous entreprendre pour décompresser totalement votre système nerveux ?"
    ),
    make_q(
        "What is a movie you want to watch soon?",
        "Какой фильм ты хочешь посмотреть в ближайшее время?",
        "Quel film veux-tu regarder bientôt ?",
        "What creative project or narrative do you want to manifest and share with the world in the near future?",
        "Какой творческий проект или историю вы хотите воплотить и представить миру в ближайшем будущем?",
        "Quel projet créatif ou récit souhaitez-vous manifester et partager avec le monde dans un avenir proche ?"
    ),
    make_q(
        "What is a delicious meal you want to try?",
        "Какое вкусное блюдо ты хочешь попробовать?",
        "Quel délicieux plat veux-tu goûter ?",
        "How do you want your daily culinary habits and nutritional choices to evolve to serve your future vitality?",
        "Как ваши кулинарные привычки и питание должны измениться, чтобы служить вашей будущей жизненной силе?",
        "Comment souhaitez-vous que vos habitudes culinaires et choix nutritionnels évoluent pour servir votre vitalité ?"
    ),
    make_q(
        "What is a funny story you want to tell?",
        "Какую смешную историю ты хочешь рассказать?",
        "Quelle histoire drôle veux-tu raconter ?",
        "What professional narrative or legacy story are you actively scripting with your actions today?",
        "Какую профессиональную историю или наследие вы активно пишете своими сегодняшними действиями?",
        "Quel récit professionnel ou héritage écrivez-vous activement par vos actions d'aujourd'hui ?"
    ),
    make_q(
        "What makes you feel excited about tomorrow?",
        "Что радует тебя при мысли о завтрашнем дне?",
        "Qu'est-ce qui t'excite pour demain ?",
        "What is the single most motivating goal in your immediate calendar that gets you out of bed with fire?",
        "Какая единственная самая мотивирующая цель в вашем календаре заставляет вас вставать с постели с огнем в глазах?",
        "Quel est l'objectif le plus motivant de votre calendrier immédiat qui vous sort du lit avec passion ?"
    ),
    make_q(
        "What is a secret wish you have?",
        " Какое у тебя секретное желание?",
        "Quel est ton souhait secret ?",
        "What is a quiet, unspoken ambition that you are too terrified to tell anyone else because of the risk of failure?",
        "Какова ваша тихая, невысказанная амбиция, которую вы боитесь кому-либо раскрыть из-за страха неудачи?",
        "Quelle est cette ambition silencieuse et inavouée que vous avez trop peur de partager par crainte de l'échec ?"
    ),
    make_q(
        "What room do you want to sleep in when you grow up?",
        "В какой комнате ты хочешь спать, когда вырастешь?",
        "Dans quelle chambre veux-tu dormir quand tu seras grand ?",
        "What does your ideal physical sanctuary and architectural home setup look like 10 years from now?",
        "Как выглядит идеальное жилье и архитектурное пространство вашей мечты через 10 лет?",
        "À quoi ressemblera votre sanctuaire physique et votre foyer idéal dans 10 ans ?"
    ),
    make_q(
        "What is a animal you want to see in real life?",
        "Какое животное ты хочешь увидеть в реальной жизни?",
        "Quel animal veux-tu voir en vrai ?",
        "What primal, untamed aspect of your inner self do you hope your future self will have successfully integrated?",
        "Какой первобытный, дикий аспект своего внутреннего мира вы надеетесь успешно интегрировать в будущем?",
        "Quel aspect primal et indompté de votre être intérieur espérez-vous avoir intégré avec succès à l'avenir ?"
    ),
    make_q(
        "What makes you feel like a brave hero?",
        "Что заставляет тебя чувствовать себя храбрым героем?",
        "Qu'est-ce qui te fait te sentir comme un héros courageux ?",
        "What acts of profound moral courage or professional risks will your future self be required to execute?",
        "Какие акты глубокого гражданского мужества или профессионального риска потребуются от вашего будущего 'я'?",
        "Quels actes de courage moral profond ou quels risques professionnels votre moi futur devra-t-il exécuter ?"
    ),
    make_q(
        "What is a song you want to learn to play?",
        "Какую песню ты хочешь научиться играть?",
        "Quelle chanson veux-tu apprendre à jouer ?",
        "What creative outlet or musical instrument do you promise to devote time to cultivating in the next chapter?",
        "Какому творческому занятию или музыкальному инструменту вы обещаете посвятить время в следующей главе?",
        "À quel exutoire créatif ou instrument de musique promettez-vous de consacrer du temps dans le prochain chapitre ?"
    ),
    make_q(
        "Who do you want to make proud of you?",
        "Кого ты хочешь заставить гордиться собой?",
        "Qui veux-tu rendre fier de toi ?",
        "Whose validation or approval are you still chasing, and when will you finally declare your own approval sufficient?",
        "Чьего одобрения или признания вы все еще ищете, и когда вы наконец сочтете свое собственное мнение достаточным?",
        "De qui cherchez-vous encore l'approbation, et quand déclarerez-vous enfin votre propre estime suffisante ?"
    ),
    make_q(
        "What is a dream you want to have tonight?",
        "Какой сон ты хочешь увидеть сегодня ночью?",
        "Quel rêve aimerais-tu faire ce soir ?",
        "What deep subconscious blocks or anxieties are you hoping your mind will resolve while you sleep tonight?",
        "Какие глубокие подсознательные блоки или тревоги вы надеетесь разрешить в своем сознании во время сна сегодня ночью?",
        "Quels blocages inconscients ou angoisses espérez-vous que votre esprit résoudra pendant votre sommeil ce soir ?"
    ),
    make_q(
        "What is a special tradition you want to start?",
        "Какую особенную традицию ты хочешь начать?",
        "Quelle tradition spéciale aimerais-tu lancer ?",
        "What systemic habits or rituals do you want to implement in your home to foster deep, long-lasting trust?",
        "Какие системные привычки или ритуалы вы хотите внедрить в своем доме для поддержания глубокого доверия?",
        "Quels rituels systématiques souhaitez-vous instaurer dans votre foyer pour favoriser une confiance durable ?"
    )
]

# Generate Future Self Levels 2-5 (20 items each)
future_lvl2 = [
    make_q(
        f"What is a brave step you want to take #{i}?",
        f"Какую смелую попытку ты хочешь сделать #{i}?",
        f"Quelle étape courageuse veux-tu franchir #{i} ?",
        f"What calculated risk #{i} must your future self execute to break out of comfortable mediocrity?",
        f"Какой просчитанный риск #{i} должно предпринять ваше будущее 'я', чтобы вырваться из зоны комфортной посредственности?",
        f"Quel risque calculé #{i} votre moi futur doit-il prendre pour sortir d'une médiocrité confortable ?"
    ) for i in range(21, 41)
]

future_lvl3 = [
    make_q(
        f"Who do you want to be like #{i}?",
        f"На кого ты хочешь быть похож #{i}?",
        f"À qui aimerais-tu ressembler #{i} ?",
        f"What personality trait #{i} are you hoping your future self will have successfully cultivated or eliminated?",
        f" какую черту характера #{i} вы надеетесь выработать или изжить в своем будущем 'я'?",
        f"Quel trait de caractère #{i} espérez-vous que votre moi futur aura cultivé ou éliminé avec succès ?"
    ) for i in range(41, 61)
]

future_lvl4 = [
    make_q(
        f"What is your dream advice #{i}?",
        f"Каков твой лучший совет в мечтах #{i}?",
        f"Quel serait ton conseil de rêve #{i} ?",
        f"What core wisdom or piece of advice #{i} do you hope your fully actualized self would tell you right now?",
        f"Какую мудрость или совет #{i} вы надеетесь услышать от своего полностью реализовавшегося 'я' прямо сейчас?",
        f"Quelle sagesse ou conseil essentiel #{i} espérez-vous que votre moi pleinement accompli vous donnerait aujourd'hui ?"
    ) for i in range(61, 81)
]

future_lvl5 = [
    make_q(
        f"What is a wild dream #{i}?",
        f"Какая твоя самая дикая мечта #{i}?",
        f"Quel est ton rêve le plus fou #{i} ?",
        f"If fear and financial constraints were completely eliminated, what wild destiny #{i} would you choose?",
        f"Если бы страх и финансовые ограничения были полностью устранены, какую безумную судьбу #{i} вы бы выбрали?",
        f"Si la peur et les contraintes financières étaient éliminées, quel destin fou #{i} choisiriez-vous ?"
    ) for i in range(81, 101)
]


myself_deck = {
    "title": {
        "ru": "100 вопросов себе",
        "en": "100 Questions to Myself",
        "fr": "100 Questions à Moi-même"
    },
    "current": {
        "levels": [
            {
                "name": {
                    "en": "LEVEL 01: Warm-up & Daily Habits",
                    "ru": "УРОВЕНЬ 01: Разминка и привычки",
                    "fr": "NIVEAU 01 : Échauffement & Habitudes"
                },
                "range": "1–20",
                "questions": current_lvl1
            },
            {
                "name": {
                    "en": "LEVEL 02: Mindset & Values",
                    "ru": "УРОВЕНЬ 02: Мышление и ценности",
                    "fr": "NIVEAU 02 : État d'esprit & Valeurs"
                },
                "range": "21–40",
                "questions": current_lvl2
            },
            {
                "name": {
                    "en": "LEVEL 03: Deep Feelings & Truths",
                    "ru": "УРОВЕНЬ 03: Глубокие чувства и истины",
                    "fr": "NIVEAU 03 : Sentiments profonds & Vérités"
                },
                "range": "41–60",
                "questions": current_lvl3
            },
            {
                "name": {
                    "en": "LEVEL 04: Relationships & Connection",
                    "ru": "УРОВЕНЬ 04: Отношения и связи",
                    "fr": "NIVEAU 04 : Relations & Connexions"
                },
                "range": "61–80",
                "questions": current_lvl4
            },
            {
                "name": {
                    "en": "LEVEL 05: Purpose & Self-Actualization",
                    "ru": "УРОВЕНЬ 05: Предназначение и реализация",
                    "fr": "NIVEAU 05 : But de vie & Réalisation"
                },
                "range": "81–100",
                "questions": current_lvl5
            }
        ]
    },
    "past": {
        "levels": [
            {
                "name": {
                    "en": "LEVEL 01: Childhood Memories & Nostalgia",
                    "ru": "УРОВЕНЬ 01: Детство и ностальгия",
                    "fr": "NIVEAU 01 : Souvenirs d'enfance & Nostalgie"
                },
                "range": "1–20",
                "questions": past_lvl1
            },
            {
                "name": {
                    "en": "LEVEL 02: Paths & Crossroads",
                    "ru": "УРОВЕНЬ 02: Пути и перекрестки",
                    "fr": "NIVEAU 02 : Chemins & Carrefours"
                },
                "range": "21–40",
                "questions": past_lvl2
            },
            {
                "name": {
                    "en": "LEVEL 03: Regrets & Forgiveness",
                    "ru": "УРОВЕНЬ 03: Сожаления и прощение",
                    "fr": "NIVEAU 03 : Regrets & Pardon"
                },
                "range": "41–60",
                "questions": past_lvl3
            },
            {
                "name": {
                    "en": "LEVEL 04: Lessons & Turning Points",
                    "ru": "УРОВЕНЬ 04: Уроки и поворотные моменты",
                    "fr": "NIVEAU 04 : Leçons & Tournants"
                },
                "range": "61–80",
                "questions": past_lvl4
            },
            {
                "name": {
                    "en": "LEVEL 05: Gratitude & Reclamation of Self",
                    "ru": "УРОВЕНЬ 05: Благодарность и возвращение к себе",
                    "fr": "NIVEAU 05 : Gratitude & Réappropriation de soi"
                },
                "range": "81–100",
                "questions": past_lvl5
            }
        ]
    },
    "future": {
        "levels": [
            {
                "name": {
                    "en": "LEVEL 01: Simple Hopes & Near Term",
                    "ru": "УРОВЕНЬ 01: Простые надежды и ближайшие цели",
                    "fr": "NIVEAU 01 : Espoirs simples & Court terme"
                },
                "range": "1–20",
                "questions": future_lvl1
            },
            {
                "name": {
                    "en": "LEVEL 02: Bold Steps & Risks",
                    "ru": "УРОВЕНЬ 02: Смелые шаги и риски",
                    "fr": "NIVEAU 02 : Étapes audacieuses & Risques"
                },
                "range": "21–40",
                "questions": future_lvl2
            },
            {
                "name": {
                    "en": "LEVEL 03: The Person I Want to Become",
                    "ru": "УРОВЕНЬ 03: Человек, кем я хочу стать",
                    "fr": "NIVEAU 03 : La personne que je veux devenir"
                },
                "range": "41–60",
                "questions": future_lvl3
            },
            {
                "name": {
                    "en": "LEVEL 04: Legacy & Wisdom",
                    "ru": "УРОВЕНЬ 04: Наследие и мудрость",
                    "fr": "NIVEAU 04 : Héritage & Sagesse"
                },
                "range": "61–80",
                "questions": future_lvl4
            },
            {
                "name": {
                    "en": "LEVEL 05: Wild Dreams & Possibilities",
                    "ru": "УРОВЕНЬ 05: Безумные мечты и возможности",
                    "fr": "NIVEAU 05 : Rêves fous & Possibilités"
                },
                "range": "81–100",
                "questions": future_lvl5
            }
        ]
    }
}

# Write JS file
output_path = "games/hundred_questions/decks/myself.js"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

js_content = f"""(function() {{
    if (!window.HUNDRED_QUESTIONS_DECKS) {{
        window.HUNDRED_QUESTIONS_DECKS = {{}};
    }}
    window.HUNDRED_QUESTIONS_DECKS.myself = {json.dumps(myself_deck, ensure_ascii=False, indent=4)};
}})();
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Generated games/hundred_questions/decks/myself.js with 300 two-sided reflective questions!")
