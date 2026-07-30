/**
 * games/hundred_questions/game.js
 * Standalone logic for 100 Questions game.
 * Programmatically generated database of 100 questions per deck.
 */
(function() {
    const GAME_ID = 'hundred_questions';
    const GAME_TITLE = '100 Questions 💬';
    const GAME_META = 'Speaking · Group & Friends · All Levels';

    const DECK_FRIENDS = {
        title: {
            ru: '100 вопросов друзьям',
            en: '100 Questions to Friends',
            fr: '100 Questions aux Amis'
        },
        levels: [
    {
        "name": {
            "ru": "УРОВЕНЬ 01: разминка · безопасно",
            "en": "LEVEL 01: Warm-up · Safe",
            "fr": "NIVEAU 01 : Échauffement · Sans risque"
        },
        "range": "1–13",
        "questions": [
            {
                "ru": "Каким было твоё первое впечатление обо мне — честно?",
                "en": "What was your first impression of me — honestly?",
                "fr": "Quelle a été ta première impression de moi — honnêtement ?"
            },
            {
                "ru": "Почему, по-твоему, мы вообще подружились?",
                "en": "Why do you think we became friends in the first place?",
                "fr": "Pourquoi penses-tu que nous sommes devenus amis en premier lieu ?"
            },
            {
                "ru": "Какая наша общая история смешит тебя до сих пор?",
                "en": "What shared story of ours still makes you laugh?",
                "fr": "Quelle histoire commune nous fait encore rire aujourd'hui ?"
            },
            {
                "ru": "Что я делаю такого, что бесит тебя и веселит одновременно?",
                "en": "What is something I do that annoys you and amuses you at the same time?",
                "fr": "Qu'est-ce que je fais qui t'agace et t'amuse en même temps ?"
            },
            {
                "ru": "Какое моё качество тебе хотелось бы забрать себе?",
                "en": "What quality of mine would you like to have for yourself?",
                "fr": "Quelle qualité chez moi aimerais-tu t'approprier ?"
            },
            {
                "ru": "Какая песня напоминает тебе о нашей компании?",
                "en": "What song reminds you of our group?",
                "fr": "Quelle chanson te rappelle notre groupe d'amis ?"
            },
            {
                "ru": "Что ты рассказываешь обо мне людям, которые меня не знают?",
                "en": "What do you tell people about me who don't know me?",
                "fr": "Que racontes-tu de moi aux personnes qui ne me connaissent pas ?"
            },
            {
                "ru": "Какой наш общий день тебе хочется повторить?",
                "en": "Which of our shared days would you like to live again?",
                "fr": "Quel jour que nous avons passé ensemble aimerais-tu revivre ?"
            },
            {
                "ru": "Что мы делали раньше и перестали — а зря?",
                "en": "What did we use to do that we stopped doing — and shouldn't have?",
                "fr": "Qu'est-ce qu'on faisait avant et qu'on a arrêté — à tort ?"
            },
            {
                "ru": "Какое тайное прозвище мне подошло бы, по-твоему?",
                "en": "What secret nickname do you think would suit me?",
                "fr": "Quel surnom secret me conviendrait le mieux, selon toi ?"
            },
            {
                "ru": "С чего, по-твоему, началась наша дружба по-настоящему?",
                "en": "In your opinion, when did our friendship truly begin?",
                "fr": "Selon toi, quand notre amitié a-t-elle vraiment commencé ?"
            },
            {
                "ru": "Какая моя привычка кажется тебе самой странной?",
                "en": "What habit of mine seems the strangest to you?",
                "fr": "Quelle est mon habitude qui te semble la plus bizarre ?"
            },
            {
                "ru": "Куда бы мы рванули вместе, если бы всё было можно?",
                "en": "Where would we jet off to together if anything were possible?",
                "fr": "Où partirions-nous ensemble si tout était possible ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 02: наша история",
            "en": "LEVEL 02: Our Story",
            "fr": "NIVEAU 02 : Notre Histoire"
        },
        "range": "14–25",
        "questions": [
            {
                "ru": "Какой момент сделал нас настоящими друзьями?",
                "en": "What moment made us real friends?",
                "fr": "Quel moment a fait de nous de vrais amis ?"
            },
            {
                "ru": "Когда моя поддержка была для тебя важнее всего?",
                "en": "When was my support most important to you?",
                "fr": "À quel moment mon soutien a-t-il été le plus important pour toi ?"
            },
            {
                "ru": "Какую нашу авантюру ты вспоминаешь чаще всего?",
                "en": "Which of our adventures do you remember most often?",
                "fr": "Quelle aventure ensemble te revient le plus souvent à l'esprit ?"
            },
            {
                "ru": "Что из наших планов мы так и не сделали?",
                "en": "What plans of ours did we never end up doing?",
                "fr": "Qu'est-ce que nous avions prévu et que nous n'avons jamais fait ?"
            },
            {
                "ru": "Какая ссора могла нас развести — и что нас удержало?",
                "en": "What argument could have torn us apart — and what kept us together?",
                "fr": "Quelle dispute aurait pu nous séparer — et qu'est-ce qui nous a retenus ?"
            },
            {
                "ru": "Что ты помнишь из нашей дружбы, чего я уже не помню?",
                "en": "What do you remember about our friendship that I have forgotten?",
                "fr": "Que te rappelles-tu de notre amitié que j'ai déjà oublié ?"
            },
            {
                "ru": "Когда стало ясно, что мне можно доверять?",
                "en": "When did it become clear that I could be trusted?",
                "fr": "Quand est-il devenu évident que tu pouvais me faire confiance ?"
            },
            {
                "ru": "Какой подарок или жест от меня запомнился тебе больше всего?",
                "en": "What gift or gesture from me did you remember the most?",
                "fr": "Quel cadeau ou quel geste de ma part t'a le plus marqué ?"
            },
            {
                "ru": "Что тогда казалось катастрофой, а теперь — наша легенда?",
                "en": "What seemed like a disaster back then, but is now our legend?",
                "fr": "Qu'est-ce qui semblait être une catastrophe à l'époque, et est maintenant notre légende ?"
            },
            {
                "ru": "Кем мы были, когда познакомились, — и насколько изменились?",
                "en": "Who were we when we met, and how much have we changed?",
                "fr": "Qui étions-nous quand on s'est rencontrés, et à quel point avons-nous changé ?"
            },
            {
                "ru": "Какие мои слова ты помнишь до сих пор?",
                "en": "Which words of mine do you still remember?",
                "fr": "De quelles paroles de ma part te souviens-tu encore ?"
            },
            {
                "ru": "Чего тебе не хватает из тех времён?",
                "en": "What do you miss most from those times?",
                "fr": "Qu'est-ce qui te manque le plus de cette époque ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 03: дружба сегодня",
            "en": "LEVEL 03: Friendship Today",
            "fr": "NIVEAU 03 : L'Amitié Aujourd'hui"
        },
        "range": "26–38",
        "questions": [
            {
                "ru": "Хватает ли тебе меня сейчас — честно?",
                "en": "Do you get enough of me right now — honestly?",
                "fr": "Est-ce que tu me vois assez en ce moment — franchement ?"
            },
            {
                "ru": "Что изменилось в нашей дружбе за последние годы?",
                "en": "What has changed in our friendship over the last few years?",
                "fr": "Qu'est-ce qui a changé dans notre amitié ces dernières années ?"
            },
            {
                "ru": "Какие встречи тебе нужнее: шумные или один на один?",
                "en": "What kind of gatherings do you need more: noisy ones or one-on-one?",
                "fr": "De quelles rencontres as-tu le plus besoin : en groupe bruyant ou en tête-à-tête ?"
            },
            {
                "ru": "О чём мы всё время говорим — и о чём никогда?",
                "en": "What do we talk about all the time — and what do we never talk about?",
                "fr": "De quoi parle-t-on tout le temps — et de quoi ne parle-t-on jamais ?"
            },
            {
                "ru": "Что тебе даёт наша дружба такого, чего не даёт семья?",
                "en": "What does our friendship give you that family doesn't?",
                "fr": "Qu'est-ce que notre amitié t'apporte que ta famille ne t'apporte pas ?"
            },
            {
                "ru": "Когда тебе тяжело — почему ты звонишь мне или не звонишь?",
                "en": "When times are tough — why do you call me, or why don't you?",
                "fr": "Quand c'est difficile pour toi — pourquoi m'appelles-tu, ou pourquoi ne m'appelles-tu pas ?"
            },
            {
                "ru": "Какой помощи ты от меня никогда не попросишь — и почему?",
                "en": "What kind of help would you never ask me for — and why?",
                "fr": "Quelle aide ne me demanderais-tu jamais — et pourquoi ?"
            },
            {
                "ru": "Что из моей жизни тебе неинтересно, но ты слушаешь?",
                "en": "What part of my life is uninteresting to you, yet you listen anyway?",
                "fr": "Quelle partie de ma vie ne t'intéresse pas, mais tu m'écoutes quand même ?"
            },
            {
                "ru": "Как ты понимаешь, что у меня всё плохо, даже если я молчу?",
                "en": "How do you know when things are going bad for me, even if I stay silent?",
                "fr": "Comment sais-tu que je vais mal, même si je garde le silence ?"
            },
            {
                "ru": "Что для тебя «настоящий друг» — и дотягиваю ли я?",
                "en": "What does \"a real friend\" mean to you — and do I measure up?",
                "fr": "C'est quoi un « vrai ami » pour toi — et est-ce que je corresponds ?"
            },
            {
                "ru": "Какие темы для тебя закрыты даже со мной?",
                "en": "Which topics are off-limits for you, even with me?",
                "fr": "Quels sujets te sont interdits, même avec moi ?"
            },
            {
                "ru": "Сколько дружбы тебе нужно, чтобы не чувствовать одиночества?",
                "en": "How much friendship do you need not to feel lonely?",
                "fr": "De combien d'amitié as-tu besoin pour ne pas te sentir seul ?"
            },
            {
                "ru": "Чего от меня как от друга тебе хочется чаще?",
                "en": "What would you like to see from me as a friend more often?",
                "fr": "Qu'aimerais-tu recevoir de moi en tant qu'ami plus souvent ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 04: честность",
            "en": "LEVEL 04: Honesty",
            "fr": "NIVEAU 04 : L'Honnêteté"
        },
        "range": "39–50",
        "questions": [
            {
                "ru": "Что ты думаешь, но не говоришь мне в лицо?",
                "en": "What do you think, but never say to my face?",
                "fr": "Qu'est-ce que tu penses, mais ne me dis jamais en face ?"
            },
            {
                "ru": "Какая моя черта тебя раздражает, но ты терпишь?",
                "en": "What trait of mine annoys you, but you tolerate?",
                "fr": "Quel trait de mon caractère t'agace, mais tu le supportes ?"
            },
            {
                "ru": "Какую мою ошибку ты видишь, но молчишь о ней?",
                "en": "What mistake of mine do you see, but stay silent about?",
                "fr": "Quelle erreur de ma part vois-tu, tout en gardant le silence ?"
            },
            {
                "ru": "Что обо мне говорят за спиной — и что ты отвечаешь?",
                "en": "What do people say about me behind my back — and how do you respond?",
                "fr": "Que dit-on de moi dans mon dos — et que réponds-tu ?"
            },
            {
                "ru": "Какой мой выбор ты не одобряешь — молча?",
                "en": "What choice of mine do you silently disapprove of?",
                "fr": "Quel choix de ma part désapprouves-tu — en silence ?"
            },
            {
                "ru": "В чём я обманываю себя, по-твоему?",
                "en": "What do you think I am lying to myself about?",
                "fr": "Sur quoi penses-tu que je me voile la face ?"
            },
            {
                "ru": "Какой совет ты давно хочешь мне дать, но не решаешься?",
                "en": "What advice have you wanted to give me for a long time, but haven't dared to?",
                "fr": "Quel conseil as-tu envie de me donner depuis longtemps, sans oser le faire ?"
            },
            {
                "ru": "Что тебе честно не нравится в том, как я живу?",
                "en": "What do you honestly dislike about how I live my life?",
                "fr": "Qu'est-ce que tu n'aimes franchement pas dans ma façon de vivre ?"
            },
            {
                "ru": "Что со мной происходит, когда я злюсь или влюбляюсь, — со стороны?",
                "en": "From the outside, what happens to me when I get angry or fall in love?",
                "fr": "De l'extérieur, que se passe-t-il chez moi когда я злюсь или влюбляюсь, — со стороны ?"
            },
            {
                "ru": "Про какое моё решение ты втайне думаешь «зря»?",
                "en": "Which decision of mine do you secretly think was a mistake?",
                "fr": "Pour quelle décision de ma part penses-tu en secret « какой кошмар » ?"
            },
            {
                "ru": "В чём мы с тобой на самом деле не совпадаем?",
                "en": "In what ways do we actually not align?",
                "fr": "Sur quels points ne sommes-nous pas du tout sur la même longueur d'onde ?"
            },
            {
                "ru": "Что тебе труднее: сказать мне правду или промолчать?",
                "en": "What is harder for you: telling me the truth or staying silent?",
                "fr": "Qu'est-ce qui te coûte le plus : me dire la vérité ou te taire ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 05: то, о чём молчим",
            "en": "LEVEL 05: What We Keep Silent About",
            "fr": "NIVEAU 05 : Ce que nous gardons sous silence"
        },
        "range": "51–63",
        "questions": [
            {
                "ru": "О чём из своей жизни ты мне никогда не рассказываешь?",
                "en": "What part of your life do you never tell me about?",
                "fr": "De quelle partie de ta vie ne me parles-tu jamais ?"
            },
            {
                "ru": "Что в нашей дружбе тебя ранило — а я, кажется, не в курсе?",
                "en": "What has hurt you in our friendship that I seem unaware of?",
                "fr": "Qu'est-ce qui t'a blessé dans notre amitié sans que je semble le savoir ?"
            },
            {
                "ru": "Бывает ли у тебя зависть ко мне — и к чему именно?",
                "en": "Do you ever feel envious of me — and of what exactly?",
                "fr": "T'arrive-t-il de m'envier — et pour quoi précisément ?"
            },
            {
                "ru": "Была ли моя шутка, которая на самом деле обидела тебя?",
                "en": "Was there a joke of mine that actually offended or hurt you?",
                "fr": "Y a-t-il une plaisanterie de ma part qui t'a réellement blessé ?"
            },
            {
                "ru": "Когда в нашей компании тебе бывает одиноко?",
                "en": "When do you feel lonely within our group?",
                "fr": "À quel moment te sens-tu seul au sein de notre groupe ?"
            },
            {
                "ru": "Какая моя просьба была для тебя тяжелее, чем я думаю?",
                "en": "Which favor I asked of you was harder to do than I realized?",
                "fr": "Quelle demande de ma part a été plus difficile à accepter que je ne le pense ?"
            },
            {
                "ru": "Что тебе важно услышать от меня — а я этого не говорю?",
                "en": "What is important for you to hear from me that I don't say?",
                "fr": "Qu'est-ce qu'il est important pour toi d'entendre de ma part et que je ne dis pas ?"
            },
            {
                "ru": "О чём ты жалеешь в нашей дружбе?",
                "en": "What do you regret in our friendship?",
                "fr": "Que regrettes-tu dans notre amitié ?"
            },
            {
                "ru": "Что трудное тебе пришлось переживать в одиночку, хотя я рядом?",
                "en": "What difficult experience did you have to face alone, even though I was around?",
                "fr": "Quelle épreuve difficile as-tu dû traverser seul, même si j'étais là ?"
            },
            {
                "ru": "Что ты держишь в себе, чтобы не портить наши встречи?",
                "en": "What do you keep to yourself to avoid ruining our meetings?",
                "fr": "Qu'est-ce que ты держишь в себе для наших встреч ?"
            },
            {
                "ru": "Есть ли обида на меня, которая так и не прошла?",
                "en": "Is there any resentment towards me that never really faded?",
                "fr": "Y a-t-il une rancune envers moi qui n'est jamais passée ?"
            },
            {
                "ru": "О чём мы оба знаем, но делаем вид, что не замечаем?",
                "en": "What do we both know, but pretend not to notice?",
                "fr": "De quoi sommes-nous tous les deux conscients, tout en faisant semblant de не le remarquer ?"
            },
            {
                "ru": "Какого разговора ты избегаешь со мной?",
                "en": "What conversation are you avoiding with me?",
                "fr": "Quelle conversation évites-tu d'avoir avec moi ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 06: страхи и границы",
            "en": "LEVEL 06: Fears and Boundaries",
            "fr": "NIVEAU 06 : Peurs et Limites"
        },
        "range": "64–75",
        "questions": [
            {
                "ru": "Чего ты боишься в своей жизни прямо сейчас?",
                "en": "What are you afraid of in your life right now?",
                "fr": "De quoi as-tu peur dans ta vie en ce moment ?"
            },
            {
                "ru": "Какой сценарий своей жизни пугает тебя больше всего?",
                "en": "Which life scenario scares you the most?",
                "fr": "Quel scénario de vie te fait le plus peur ?"
            },
            {
                "ru": "Что могло бы разрушить нашу дружбу, если не беречь её?",
                "en": "What could destroy our friendship if we don't protect it?",
                "fr": "Qu'est-ce qui pourrait détruire notre amitié si on n'en prend pas soin ?"
            },
            {
                "ru": "Боишься ли ты, что мы разойдёмся просто от занятости?",
                "en": "Are you afraid we will drift apart simply from being too busy?",
                "fr": "As-tu peur que nous nous éloignions simplement par manque de temps ?"
            },
            {
                "ru": "Что мешает тебе говорить со мной обо всём?",
                "en": "What stops you from talking to me about absolutely everything?",
                "fr": "Qu'est-ce qui t'empêche de tout me dire ?"
            },
            {
                "ru": "В чём ты боишься моего осуждения?",
                "en": "In what ways are you afraid of my judgment?",
                "fr": "Sur quoi as-tu peur que je te juge ?"
            },
            {
                "ru": "Чего тебе будет не хватать, если мы перестаем общаться?",
                "en": "What would you miss the most if we stopped talking?",
                "fr": "Qu'est-ce qui te manquerait le plus si nous cessions de nous parler ?"
            },
            {
                "ru": "Какая мысль не даёт тебе спать по ночам?",
                "en": "What thought keeps you awake at night?",
                "fr": "Quelle pensée t'empêche de dormir la nuit ?"
            },
            {
                "ru": "Что для тебя было бы предательством в дружбе?",
                "en": "What would constitute a betrayal of friendship for you?",
                "fr": "Qu'est-ce qui constituerait une trahison en amitié pour toi ?"
            },
            {
                "ru": "Кому из нас дружба нужнее — честно?",
                "en": "Who needs this friendship more — honestly?",
                "fr": "Qui de nous deux a le plus besoin de cette amitié — honnêtement ?"
            },
            {
                "ru": "Что ты чувствуешь, когда я надолго пропадаю?",
                "en": "How do you feel when I disappear for a long time?",
                "fr": "Que ressens-tu quand je disparais pendant longtemps ?"
            },
            {
                "ru": "О чём ты не решаешься попросить меня?",
                "en": "What is something you hesitate to ask me for?",
                "fr": "Qu'est-ce que tu n'oses pas me demander ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 07: глубина",
            "en": "LEVEL 07: Depth",
            "fr": "NIVEAU 07 : Profondeur"
        },
        "range": "76–88",
        "questions": [
            {
                "ru": "Когда тебе было по-настоящему одиноко в последний раз?",
                "en": "When was the last time you felt truly lonely?",
                "fr": "À quand remonte la dernière fois où tu t'es senti vraiment seul ?"
            },
            {
                "ru": "Что тебя держит на плаву, когда всё сыпется?",
                "en": "What keeps you afloat when everything is falling apart?",
                "fr": "Qu'est-ce qui te permet de garder la tête hors de l'eau quand tout s'effondre ?"
            },
            {
                "ru": "О чём ты мечтаешь сейчас — без поправки на реальность?",
                "en": "What are you dreaming of now — without checking in with reality?",
                "fr": "À quoi rêves-tu en ce moment — sans te soucier de la réalité ?"
            },
            {
                "ru": "Что тебе во мне даёт силы — если даёт?",
                "en": "What about me gives you strength — if anything?",
                "fr": "Qu'est-ce qui, chez moi, te donne de la force — si tant est que ce soit le cas ?"
            },
            {
                "ru": "Какую свою слабость ты прячешь ото всех?",
                "en": "What weakness of yours do you hide from everyone?",
                "fr": "Quelle faiblesse caches-tu à tout le monde ?"
            },
            {
                "ru": "Перед кем ты чувствуешь вину — и молчишь об этом?",
                "en": "Who do you feel guilty towards — and stay silent about?",
                "fr": "Envers qui te sens-tu coupable — tout en le gardant pour toi ?"
            },
            {
                "ru": "Какую перемену в жизни ты откладываешь из страха?",
                "en": "What life change are you postponing out of fear?",
                "fr": "Quel changement de vie repousses-tu par peur ?"
            },
            {
                "ru": "Какая детская мечта у тебя до сих пор отзывается?",
                "en": "Which childhood dream still resonates with you?",
                "fr": "Quel rêve d'enfant résonne encore en toi aujourd'hui ?"
            },
            {
                "ru": "Что тебе труднее всего просить: помощь, прощение или внимание?",
                "en": "What is hardest for you to ask for: help, forgiveness, or attention?",
                "fr": "Qu'est-ce qui est le plus difficile à demander pour toi : de l'aide, du pardon ou de l'attention ?"
            },
            {
                "ru": "Какая потеря изменила тебя сильнее всего?",
                "en": "Which loss changed you the most?",
                "fr": "Quelle perte t'a le plus changé ?"
            },
            {
                "ru": "Во что ты веришь, о чём никогда не говоришь вслух?",
                "en": "What do you believe in that you never say out loud?",
                "fr": "En quoi crois-tu sans jamais le dire à voix haute ?"
            },
            {
                "ru": "Что тебя лечит надёжнее всего: люди, дело, одиночество?",
                "en": "What heals you most reliably: people, action, or solitude?",
                "fr": "Qu'est-ce qui te soigne le mieux : les gens, l'action ou la solitude ?"
            },
            {
                "ru": "Каким человеком тебе хочется быть — и что мешает?",
                "en": "What kind of person do you want to be — and what is stopping you?",
                "fr": "Quel genre de personne aimerais-tu être — et qu'est-ce qui t'en empêche ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 08: на свой страх и риск",
            "en": "LEVEL 08: At Your Own Risk",
            "fr": "NIVEAU 08 : À tes risques et perils"
        },
        "range": "89–100",
        "questions": [
            {
                "ru": "Если бы мы познакомились сегодня — мы бы подружились?",
                "en": "If we met for the first time today — would we become friends?",
                "fr": "Si nous nous rencontrions aujourd'hui pour la première fois — deviendrions-nous amis ?"
            },
            {
                "ru": "Что ты расскажешь обо мне своим детям?",
                "en": "What will you tell your children about me?",
                "fr": "Que raconteras-tu de moi à tes enfants ?"
            },
            {
                "ru": "Кого из нас двоих дружба изменила сильнее?",
                "en": "Which of the two of us has been changed more by this friendship?",
                "fr": "Lequel de nous deux cette amitié a-t-il le plus changé ?"
            },
            {
                "ru": "Есть ли что-то, чего я о тебе до сих пор не знаю?",
                "en": "Is there something about you that I still don't know?",
                "fr": "Y a-t-il quelque chose sur toi que je ne sais toujours pas ?"
            },
            {
                "ru": "Что ты понимаешь про мою жизнь, но боишься произнести вслух?",
                "en": "What do you understand about my life, but are afraid to say out loud?",
                "fr": "Qu'as-tu compris de ma vie sans oser le dire à voix haute ?"
            },
            {
                "ru": "Рядом со мной ты становишься лучшей версией себя — или нет?",
                "en": "Do you become a better version of yourself around me — or not?",
                "fr": "Deviens-tu une meilleure version de toi-même à mes côtés — ou non ?"
            },
            {
                "ru": "Чего тебе не хватает в нашей дружбе — только честно?",
                "en": "What is missing from our friendship — honestly?",
                "fr": "Qu'est-ce qui te manque dans notre amitié — franchement ?"
            },
            {
                "ru": "Где для тебя граница, после которой дружба заканчивается?",
                "en": "Where is the boundary for you, beyond which a friendship ends?",
                "fr": "Où se situe pour toi la limite après laquelle une amitié s'arrête ?"
            },
            {
                "ru": "Что ты хочешь успеть сделать вместе, пока мы не постарели?",
                "en": "What do you want us to do together before we grow old?",
                "fr": "Qu'aimerais-tu que nous fassions ensemble avant de vieillir ?"
            },
            {
                "ru": "Кто из нас позвонит первым после ссоры — и почему всегда так?",
                "en": "Which of us would call first after a fight — and why is it always like that?",
                "fr": "Lequel de nous deux appellerait le premier après une dispute — et pourquoi en est-il toujours ainsi ?"
            },
            {
                "ru": "Почему мы всё ещё дружим — настоящий ответ, не автоматический?",
                "en": "Why are we still friends — the real answer, not the automatic one?",
                "fr": "Pourquoi sommes-nous toujours amis — la vraie réponse, pas celle automatique ?"
            },
            {
                "ru": "Какой вопрос из этого списка тебе страшнее всего задать мне — и почему?",
                "en": "Which question on this list are you most afraid to ask me — and why?",
                "fr": "Quelle question de cette liste as-tu le plus peur de me poser — et pourquoi ?"
            }
        ]
    }
]
    };

    const DECK_TEACHER = {
        title: {
            ru: '100 вопросов учителю / студенту',
            en: '100 Questions: Teacher & Student',
            fr: '100 Questions : Enseignant & Élève'
        },
        levels: [
    {
        "name": {
            "ru": "УРОВЕНЬ 01: забавное знакомство",
            "en": "LEVEL 01: Quirky Icebreakers",
            "fr": "NIVEAU 01 : Brise-glace insolites"
        },
        "range": "1–13",
        "questions": [
            {
                "en": "If our class was a cup of coffee, what kind would it be and how much sugar is in it?",
                "ru": "Если бы наш урок был чашкой кофе, каким бы он был и сколько в нём сахара?",
                "fr": "Si notre cours était une tasse de café, quel type serait-il et combien de sucre y aurait-il ?"
            },
            {
                "en": "What is a secret superpower you think I secretly possess based on our classes?",
                "ru": "Какая секретная суперсила, по-твоему, у меня есть, судя по нашим урокам?",
                "fr": "Quel super-pouvoir penses-tu que je possède secrètement d'après nos cours ?"
            },
            {
                "en": "If an alien landed in our classroom, how would you explain grammar to them in 10 seconds?",
                "ru": "Если бы к нам на урок прилетел инопланетянин, как бы ты объяснил ему грамматику за 10 секунд?",
                "fr": "Si un extraterrestre débarquait en cours, comment lui expliquerais-tu la grammaire en 10 secondes ?"
            },
            {
                "en": "Which of our lesson topics would make the most legendary name for a rock band?",
                "ru": "Какая из тем наших уроков подошла бы на роль легендарного названия рок-группы?",
                "fr": "Quel sujet de nos cours ferait le nom le plus légendaire pour un groupe de rock ?"
            },
            {
                "en": "If you could teach one entire class completely in whispers, would you do it?",
                "ru": "Если бы можно было провести целый урок шепотом, ты бы согласился?",
                "fr": "Si tu pouvais faire un cours entier uniquement en chuchotant, le ferais-tu ?"
            },
            {
                "en": "If I fall asleep during a lesson, what is the funniest way to wake me up?",
                "ru": "Если я усну прямо во время урока, как меня веселее всего разбудить?",
                "fr": "Si je m'endors pendant un cours, quelle serait la façon la plus drôle de me réveiller ?"
            },
            {
                "en": "If we were stranded on a desert island, who would build the raft and who would panic?",
                "ru": "Если бы мы застряли на необитаемом острове, кто бы строил плот, а кто паниковал?",
                "fr": "Si on était de grands aventuriers perdus sur une île déserte, qui construirait le radeau ?"
            },
            {
                "en": "What is the most ridiculous excuse you have ever given (or heard) for missing homework?",
                "ru": "Какое самое нелепое оправдание не сделанной домашки ты когда-либо придумывал или слышал?",
                "fr": "Quelle est l'excuse la plus ridicule que tu aies jamais donnée pour ne pas avoir fait tes devoirs ?"
            },
            {
                "en": "If this language was an animal, why does it have so many irregular verbs?",
                "ru": "Если бы этот язык был животным, почему у него столько неправильных глаголов?",
                "fr": "Si cette langue était un animal, pourquoi aurait-elle autant de verbes irréguliers ?"
            },
            {
                "en": "If we replaced our vocabulary book with a culinary cookbook, what would we cook today?",
                "ru": "Если бы мы заменили учебник по лексике на кулинарную книгу, что бы мы сегодня приготовили?",
                "fr": "Si on remplaçait le livre de vocabulaire par un livre de cuisine, qu'est-ce qu'on cuisinerait aujourd'hui ?"
            },
            {
                "en": "What is the most 'illegal' but highly effective way to learn a language?",
                "ru": "Каков самый 'криминальный', но очень эффективный метод учить язык?",
                "fr": "Quelle est la méthode la plus 'illégale' mais super efficace pour apprendre une langue ?"
            },
            {
                "en": "If my accent was a character in a movie, who would play it?",
                "ru": "Если бы мой акцент был персонажем фильма, кто бы его сыграл?",
                "fr": "Si mon accent était un personnage de film, qui jouerait mon rôle ?"
            },
            {
                "en": "If we were video game characters, what would be our special attacks and ultimate moves?",
                "ru": "Если бы мы были персонажами видеоигры, какими были бы наши супер-приемы?",
                "fr": "Si on était des personnages de jeu vidéo, quelles seraient nos attaques spéciales ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 02: тайны домашней работы",
            "en": "LEVEL 02: Secrets of Homework",
            "fr": "NIVEAU 02 : Les secrets des devoirs"
        },
        "range": "14–25",
        "questions": [
            {
                "en": "Do you secretly believe homework is a subtle form of mental torture?",
                "ru": "Веришь ли ты втайне, что домашка — это изощренная психологическая пытка?",
                "fr": "Penses-tu secrètement que les devoirs sont une forme subtile de torture mentale ?"
            },
            {
                "en": "What has been the most dramatic sigh you've made while opening my exercises?",
                "ru": "Каким был твой самый драматичный вздох при виде моих упражнений?",
                "fr": "Quel a été ton soupir le plus dramatique en ouvrant mes exercices ?"
            },
            {
                "en": "If homework solved itself, what hobby would we spend our time on?",
                "ru": "Если бы домашка делалась сама, на какое хобби мы бы тратили это время?",
                "fr": "Si les devoirs se faisaient tout seuls, à quel loisir passerions-nous notre temps ?"
            },
            {
                "en": "Which grammatical rule feels like a personal insult aimed at you?",
                "ru": "Какое грамматическое правило кажется тебе личным оскорблением?",
                "fr": "Quelle règle de grammaire te semble être une insulte personnelle ?"
            },
            {
                "en": "If you could ban one single word from this language forever, which would it be?",
                "ru": "Если бы ты мог навсегда запретить одно слово в этом языке, что бы это было?",
                "fr": "Si tu pouvais bannir un seul mot de cette langue pour toujours, ce serait lequel ?"
            },
            {
                "en": "What is the funniest doodle you have ever drawn on the margin of a worksheet?",
                "ru": "Какую самую забавную закорючку ты когда-либо рисовал на полях тетради?",
                "fr": "Quel est le gribouillage le plus drôle que tu aies fait dans la marge d'un exercice ?"
            },
            {
                "en": "How many times have you blamed your internet connection to avoid a difficult question?",
                "ru": "Сколько раз ты винил плохой интернет, чтобы не отвечать на сложный вопрос?",
                "fr": "Combien de fois as-tu accusé ta connexion internet pour éviter une question difficile ?"
            },
            {
                "en": "If we could do homework in virtual reality, what setting would you choose?",
                "ru": "Если бы мы могли делать домашку в виртуальной реальности, какую локацию ты бы выбрал?",
                "fr": "Si on pouvait faire les devoirs en réalité virtuelle, quel décor choisirais-tu ?"
            },
            {
                "en": "What is your secret weapon against falling asleep during late-night study?",
                "ru": "Какое твое секретное оружие против сна во время ночной зубрежки?",
                "fr": "Quelle est ton arme secrète pour ne pas t'endormir lors des révisions ?"
            },
            {
                "en": "Do you think my dog or cat understands this language better than you?",
                "ru": "Как думаешь, моя собака или кошка понимает этот язык лучше, чем ты?",
                "fr": "Penses-tu que mon chien ou mon chat comprend cette langue mieux que toi ?"
            },
            {
                "en": "What is the absolute weirdest translation you have ever read on Google Translate?",
                "ru": "Каким был самый странный перевод, который тебе выдавал Google Переводчик?",
                "fr": "Quelle est la traduction la plus bizarre que Google Traduction t'ait jamais sortie ?"
            },
            {
                "en": "If your study desk could speak, what embarrassing secret would it reveal?",
                "ru": "Если бы твой рабочий стол умел говорить, какой постыдный секрет он бы раскрыл?",
                "fr": "Si ton bureau pouvait parler, quel secret embarrassant révélerait-il ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 03: причудливое общение",
            "en": "LEVEL 03: Quirky Dialogues",
            "fr": "NIVEAU 03 : Dialogues décalés"
        },
        "range": "26–38",
        "questions": [
            {
                "en": "If we only communicated using movie quotes for one lesson, how would it go?",
                "ru": "Если бы весь урок мы общались только цитатами из фильмов, как бы это прошло?",
                "fr": "Si on ne communiquait qu'avec des répliques de films pendant un cours, à quoi ça ressemblerait ?"
            },
            {
                "en": "Which emoji describes my teaching/learning facial expression today?",
                "ru": "Какой эмодзи лучше всего описывает выражение моего лица на уроке сегодня?",
                "fr": "Quel emoji décrit le mieux mon expression faciale pendant le cours aujourd'hui ?"
            },
            {
                "en": "If you could replace my voice with a cartoon character's voice, who would you choose?",
                "ru": "Если бы ты мог заменить мой голос на голос мультяшного героя, кого бы ты выбрал?",
                "fr": "Si tu pouvais remplacer ma voix par celle d'un personnage de dessin animé, qui choisirais-tu ?"
            },
            {
                "en": "What is the most bizarre topic we have randomly started debating in class?",
                "ru": "Какую самую дикую тему мы внезапно начали обсуждать на уроке?",
                "fr": "Quel est le sujet le plus bizarre sur lequel on a fini par débattre en cours ?"
            },
            {
                "en": "If we had to sing all our answers today, what genre would you sing in?",
                "ru": "Если бы сегодня нам пришлось петь все ответы, в каком жанре ты бы пел?",
                "fr": "Si on devait chanter toutes nos réponses aujourd'hui, quel genre musical choisirais-tu ?"
            },
            {
                "en": "Do you secretly practice speaking in front of the mirror when no one is watching?",
                "ru": "Ты втайне репетируешь речь перед зеркалом, когда никто не видит?",
                "fr": "Est-ce que tu t'entraînes secrètement à parler devant le miroir quand personne ne regarde ?"
            },
            {
                "en": "What is the most dramatic face you've pulled when you couldn't find a word?",
                "ru": "Какую самую драматичную гримасу ты состроил, когда не мог вспомнить слово?",
                "fr": "Quelle est la grimace la plus dramatique que tu aies faite en cherchant un mot ?"
            },
            {
                "en": "If our lesson was a reality TV show, what would the drama be about?",
                "ru": "Если бы наш урок был реалити-шоу, из-за чего разразился бы главный скандал?",
                "fr": "Si notre cours était une émission de téléréalité, quel serait le sujet du prochain clash ?"
            },
            {
                "en": "Have you ever nodded passionately during an explanation without having any idea what I said?",
                "ru": "Бывало ли так, что ты увлеченно кивал головой, вообще не понимая, о чём я говорю?",
                "fr": "T'est-il déjà arrivé d'acquiescer passionnément sans avoir la moindre idée de ce que je racontais ?"
            },
            {
                "en": "If you could choose a dramatic theme song for when you enter our class, what would it be?",
                "ru": "Если бы при твоем появлении на уроке играла пафосная музыка, что это был бы за трек?",
                "fr": "Si tu pouvais choisir une musique d'entrée dramatique pour notre cours, quelle serait-elle ?"
            },
            {
                "en": "What is the funniest sounding idiom we have stumbled upon so far?",
                "ru": "Какая идиома из тех, что мы проходили, звучит смешнее всего?",
                "fr": "Quel est l'idiome le plus rigolo sur lequel on soit tombé jusqu'ici ?"
            },
            {
                "en": "If you could replace one of my regular catchphrases with something absurd, what would it be?",
                "ru": "Если бы ты мог заменить мою коронную фразу на какую-то нелепость, что бы это было?",
                "fr": "Si tu pouvais remplacer une de mes expressions favorites par un truc absurde, ce serait quoi ?"
            },
            {
                "en": "Do you ever find yourself thinking in this language while doing the dishes?",
                "ru": "Бывает ли, что ты ловишь себя на мыслях на этом языке во время мытья посуды?",
                "fr": "T'arrive-t-il de penser dans cette langue en faisant la vaisselle ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 04: забавные признания",
            "en": "LEVEL 04: Funny Confessions",
            "fr": "NIVEAU 04 : Confessions hilarantes"
        },
        "range": "39–50",
        "questions": [
            {
                "en": "What is the worst pronunciation disaster you have ever had?",
                "ru": "Каким был твой самый грандиозный провал в произношении?",
                "fr": "Quel a été ton pire désastre de prononciation ?"
            },
            {
                "en": "Have you ever pretended to write down notes just to avoid making eye contact?",
                "ru": "Притворялся ли ты когда-нибудь, что что-то записываешь, просто чтобы не встречаться взглядом?",
                "fr": "As-tu déjà fait semblant de prendre des notes pour éviter mon regard ?"
            },
            {
                "en": "What is the most ridiculous rule in this language that makes you want to cry?",
                "ru": "Какое самое нелепое правило в этом языке заставляет тебя хотеть плакать?",
                "fr": "Quelle est la règle la plus absurde de cette langue qui te donne envie de pleurer ?"
            },
            {
                "en": "Have you ever translated a text message into this language just to look cool?",
                "ru": "Переводил ли ты когда-нибудь сообщение на этот язык просто для того, чтобы казаться крутым?",
                "fr": "As-tu déjà traduit un SMS dans cette langue juste pour te la raconter ?"
            },
            {
                "en": "What is a word you always mispronounce no matter how many times we practice?",
                "ru": "Какое слово ты всегда произносишь неправильно, сколько бы мы его ни тренировали?",
                "fr": "Quel est le mot que tu prononces toujours de travers malgré tous nos efforts ?"
            },
            {
                "en": "Do you secretly wish we could replace learning with eating pizza together?",
                "ru": "Ты втайне мечтаешь заменить учебу поеданием пиццы вместе?",
                "fr": "Rêves-tu secrètement de remplacer le cours par une pizza-party ?"
            },
            {
                "en": "What is the most awkward gesture you've made to explain a noun you forgot?",
                "ru": "Каким самым нелепым жестом ты пытался объяснить существительное, которое забыл?",
                "fr": "Quel a été le geste le plus embarrassant que tu aies fait pour expliquer un mot oublié ?"
            },
            {
                "en": "Have you ever used a slang word from our class in real life and failed miserably?",
                "ru": "Пробовал ли ты использовать сленг с нашего урока в реальной жизни, но потерпел фиаско?",
                "fr": "As-tu déjà essayé de placer un mot d'argot vu en cours dans la vraie vie avec un grand moment de solitude ?"
            },
            {
                "en": "What is the funniest thing you have ever muttered under your breath in class?",
                "ru": "Что самое забавное ты бормотал себе под нос во время урока?",
                "fr": "Quelle est la chose la plus drôle que tu aies marmonnée dans ta barbe en cours ?"
            },
            {
                "en": "If you could trade places with me for one lesson, what is the first thing you would do?",
                "ru": "Если бы мы поменялись местами на один урок, что бы ты сделал в первую очередь?",
                "fr": "Si on échangeait nos rôles pour un cours, quelle serait la première chose que tu ferais ?"
            },
            {
                "en": "What is a topic you secretly hope I will never bring up in our conversations?",
                "ru": "Какую тему ты втайне надеешься никогда не услышать на наших уроках?",
                "fr": "Quel est le sujet que tu espères secrètement que je n'aborderai jamais en cours ?"
            },
            {
                "en": "Have you ever laughed at a joke of mine that you didn't actually understand?",
                "ru": "Смеялся ли ты когда-нибудь над моей шуткой, которую на самом деле не понял?",
                "fr": "As-tu déjà ri à l'une de mes blagues sans l'avoir comprise ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 05: абсурдный мир языка",
            "en": "LEVEL 05: Absurd Linguistics",
            "fr": "NIVEAU 05 : Linguistique absurde"
        },
        "range": "51–63",
        "questions": [
            {
                "en": "If English, French, and Russian got into a fight, who would win?",
                "ru": "Если бы английский, французский и русский устроили драку, кто бы победил и почему?",
                "fr": "Si l'anglais, le français et le russe se battaient, qui gagnerait ?"
            },
            {
                "en": "Why do some words sound like a sneeze? Give me an example.",
                "ru": "Почему некоторые слова звучат так, будто кто-то чихнул? Приведи пример.",
                "fr": "Pourquoi certains mots sonnent-ils comme un éternuement ? Donne-moi un exemple."
            },
            {
                "en": "If we could make up a brand new word for 'homework', what would it sound like?",
                "ru": "Если бы мы могли придумать новое слово для домашки, как бы оно звучало?",
                "fr": "Si on pouvait inventer un tout nouveau mot pour 'devoirs', ça donnerait quoi ?"
            },
            {
                "en": "What punctuation mark has the most attitude, in your opinion?",
                "ru": "Какой знак препинания, по твоему мнению, самый капризный или пафосный?",
                "fr": "D'après toi, quel signe de ponctuation a le plus de caractère ?"
            },
            {
                "en": "If adjectives were clothing items, which one would be a flashy neon suit?",
                "ru": "Если бы прилагательные были одеждой, какое из них было бы кричащим неоновым костюмом?",
                "fr": "Si les adjectifs étaient des vêtements, lequel serait un costume fluo flashy ?"
            },
            {
                "en": "Why does grammatical gender make absolutely no sense for objects like tables?",
                "ru": "Почему грамматический род стола или стула не поддается никакой логике?",
                "fr": "Pourquoi le genre grammatical des tables ou des chaises n'a absolument aucun sens ?"
            },
            {
                "en": "If we could replace silent letters with emojis, how would we write silent markers?",
                "ru": "Если бы мы заменили непроизносимые буквы на эмодзи, как бы мы писали?",
                "fr": "Si on remplaçait les lettres muettes par des emojis, comment écrirait-on ?"
            },
            {
                "en": "What is the most chaotic letter in the alphabet and why is it so unpredictable?",
                "ru": "Какая буква в алфавите самая хаотичная и непредсказуемая?",
                "fr": "Quelle est la lettre la plus chaotique de l'alphabet et pourquoi est-elle si imprévisible ?"
            },
            {
                "en": "If you could change the alphabet to only have 10 letters, which ones would you keep?",
                "ru": "Если бы в алфавите осталось всего 10 букв, какие бы ты сохранил?",
                "fr": "Si tu devais réduire l'alphabet à seulement 10 lettres, lesquelles garderais-tu ?"
            },
            {
                "en": "What language family feels like a big chaotic Italian wedding?",
                "ru": "Какая языковая семья напоминает большую хаотичную итальянскую свадьбу?",
                "fr": "Quelle famille de langues ressemble à un grand mariage italien chaotique ?"
            },
            {
                "en": "If nouns could marry verbs, which of our target words would make a terrible couple?",
                "ru": "Если бы существительные могли жениться на глаголах, какая пара была бы ужасной?",
                "fr": "Si les noms pouvaient épouser des verbes, quels mots feraient un couple terrible ?"
            },
            {
                "en": "What is the most exhausting tongue twister you have ever attempted?",
                "ru": "Какая скороговорка утомила тебя больше всего в жизни?",
                "fr": "Quel est le virelangue le plus épuisant que tu aies jamais essayé ?"
            },
            {
                "en": "If you had to describe grammar using only dance moves, how would you dance grammar?",
                "ru": "Если бы грамматику нужно было станцевать, как бы выглядел твой танец?",
                "fr": "Si tu devais décrire la grammaire en dansant, à quoi ressemblerait ta danse ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 06: катастрофы произношения",
            "en": "LEVEL 06: Pronunciation Panic",
            "fr": "NIVEAU 06 : Panique de prononciation"
        },
        "range": "64–75",
        "questions": [
            {
                "en": "Do you ever worry that your accent sounds like a confused pirate?",
                "ru": "Боишься ли ты иногда, что твой акцент звучит как у запутавшегося пирата?",
                "fr": "As-tu parfois peur que ton accent ressemble à celui d'un pirate confus ?"
            },
            {
                "en": "What is a sound in this language that makes you feel like you are choking?",
                "ru": "Какой звук в этом языке заставляет тебя чувствовать себя так, будто ты подавился?",
                "fr": "Quel est le son de cette langue qui te donne l'impression de t'étouffer ?"
            },
            {
                "en": "If you could delete one phoneme (sound) from the language forever, which would it be?",
                "ru": "Если бы ты мог навсегда удалить один звук из языка, от чего бы ты избавился?",
                "fr": "Si tu pouvais supprimer un seul son de la langue pour toujours, ce serait lequel ?"
            },
            {
                "en": "What is the most embarrassing mispronunciation you have ever made in public?",
                "ru": "Каким было твое самое неловкое произношение слова на людях?",
                "fr": "Quelle a été ta pire boulette de prononciation commise en public ?"
            },
            {
                "en": "How do you feel when native speakers speak at the speed of light?",
                "ru": "Что ты чувствуешь, когда носители языка тараторят со скоростью света?",
                "fr": "Que ressens-tu quand les natifs parlent à la vitesse de la lumière ?"
            },
            {
                "en": "If you could wear a device that instantly translates your accent into a perfect native one, would you?",
                "ru": "Если бы существовал прибор, мгновенно делающий твой акцент идеальным, ты бы его носил?",
                "fr": "Si tu pouvais porter un appareil qui corrige instantanément ton accent, le ferais-tu ?"
            },
            {
                "en": "What is the funniest face you make when trying to pronounce the tricky sounds?",
                "ru": "Какую самую смешную гримасу ты строишь, пытаясь произнести сложные звуки?",
                "fr": "Quelle est la tête la plus drôle que tu fais en essayant de prononcer les sons difficiles ?"
            },
            {
                "en": "Why do some words look so beautiful on paper but sound like a broken engine when spoken?",
                "ru": "Почему некоторые слова так красивы на бумаге, а звучат как сломанный мотор?",
                "fr": "Pourquoi certains mots sont-ils si beaux sur le papier mais sonnent comme un vieux moteur cassé ?"
            },
            {
                "en": "How do you practice difficult sounds when you are alone in the shower?",
                "ru": "Как ты тренируешь сложные звуки, когда моешься в душе в одиночестве?",
                "fr": "Comment t'entraînes-tu à prononcer les sons difficiles sous la douche ?"
            },
            {
                "en": "If our language classes were a movie genre, would it be a comedy or a thriller?",
                "ru": "Если бы наши уроки были жанром кино, это была бы комедия или триллер?",
                "fr": "Si nos cours étaient un genre de cinéma, ce serait une comédie ou un thriller ?"
            },
            {
                "en": "What is your strategy when a native speaker asks you to repeat yourself three times?",
                "ru": "Какова твоя стратегия, когда носитель просит тебя повторить фразу в третий раз?",
                "fr": "Quelle est ta stratégie quand un natif te demande de répéter pour la troisième fois ?"
            },
            {
                "en": "Do you secretly believe spelling was invented by someone who hated students?",
                "ru": "Ты тоже думаешь, что орфографию придумал кто-то, кто люто ненавидел учеников?",
                "fr": "Penses-tu secrètement que l'orthographe a été inventée par quelqu'un qui détestait les élèves ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 07: убойный юмор и культурные шоки",
            "en": "LEVEL 07: Cultural Laughs",
            "fr": "NIVEAU 07 : Chocs culturels et fous rires"
        },
        "range": "76–88",
        "questions": [
            {
                "en": "What cultural stereotype about the target country is the most hilariously inaccurate?",
                "ru": "Какой культурный стереотип о стране изучаемого языка кажется самым нелепым?",
                "fr": "Quel stéréotype culturel sur le pays cible est le plus drôle et faux ?"
            },
            {
                "en": "If you had to adopt one bizarre custom of the target language country, which would it be?",
                "ru": "Если бы тебе пришлось перенять одну странную привычку жителей той страны, что бы ты выбрал?",
                "fr": "Si tu gevais adopter une habitude bizarre du pays cible, laquelle choisirais-tu ?"
            },
            {
                "en": "What is the funniest gesture native speakers make that you find totally weird?",
                "ru": "Какой самый забавный жест носителей языка кажется тебе абсолютно странным?",
                "fr": "Quel est le geste le plus rigolo ou bizarre des natifs selon toi ?"
            },
            {
                "en": "If we went to a restaurant in that country, who would do the ordering?",
                "ru": "Если бы мы пошли в ресторан в той стране, кто бы заказывал еду, а кто прятался за меню?",
                "fr": "Si on allait au resto là-bas, qui passerait la commande et qui se cacherait derrière le menu ?"
            },
            {
                "en": "What has been your absolute biggest cultural shock since learning this language?",
                "ru": "Каким был твой самый сильный культурный шок с начала изучения языка?",
                "fr": "Quel a été ton plus grand choc culturel depuis que tu as commencé cette langue ?"
            },
            {
                "en": "Do you think native speakers appreciate it when we use slang?",
                "ru": "Как думаешь, носителям нравится наш сленг или мы звучим как бабули, пытающиеся казаться крутыми?",
                "fr": "Penses-tu que les natifs aiment quand on utilise l'argot ?"
            },
            {
                "en": "If you could replace the currency of the target country with something silly, what would it be?",
                "ru": "Если бы валюту той страны можно было заменить на что-то дурацкое, что бы ты выбрал?",
                "fr": "Si on pouvait remplacer la monnaie de ce pays par un truc idiot, ce serait quoi ?"
            },
            {
                "en": "What is the most ridiculous law or regulation in the target country you've heard of?",
                "ru": "О каком самом нелепом законе или правиле в той стране тебе доводилось слышать?",
                "fr": "Quelle est la loi la plus ridicule de ce pays dont tu aies entendu de ?"
            },
            {
                "en": "What is a food from that country that looks absolutely terrifying to you?",
                "ru": "Какое блюдо той страны выглядит для тебя абсолютно пугающе?",
                "fr": "Quel plat de ce pays te semble absolument terrifiant ?"
            },
            {
                "en": "If you could change the national anthem of that country to a pop song, which would it be?",
                "ru": "Если бы гимн той страны можно было заменить на поп-песню, какой трек ты бы выбрал?",
                "fr": "Si tu pouvais remplacer l'hymne de ce pays par une chanson pop, laquelle choisirais-tu ?"
            },
            {
                "en": "What is a major misunderstanding you've had about a cultural event or holiday?",
                "ru": "Какое самое забавное недоразумение у тебя было связано с их праздниками?",
                "fr": "Quel a été ton plus grand malentendu sur une fête ou un événement culturel ?"
            },
            {
                "en": "If we designed a customized board game about our language classes, what would the penalty squares be?",
                "ru": "Если бы мы создали настолку по нашим урокам, какими были бы штрафные поля?",
                "fr": "Si on créait un jeu de société sur nos cours de langue, quelles seraient les cases de pénalité ?"
            },
            {
                "en": "Do you think learning this language makes you funnier or more dramatic?",
                "ru": "Как думаешь, изучение этого языка сделало тебя более веселым или драматичным?",
                "fr": "Penses-tu que l'apprentissage de cette langue te rend plus drôle ou plus dramatique ?"
            }
        ]
    },
    {
        "name": {
            "ru": "УРОВЕНЬ 08: великие цели и нелепые финалы",
            "en": "LEVEL 08: Funny Futures",
            "fr": "NIVEAU 08 : Futurs farfelus"
        },
        "range": "89–100",
        "questions": [
            {
                "en": "If you wake up tomorrow speaking this language perfectly but forgot your native one, what's your plan?",
                "ru": "Если завтра ты проснешься с идеальным знанием этого языка, но забудешь родной, каков твой план?",
                "fr": "Si tu te réveilles demain en parlant parfaitement cette langue mais en ayant oublié ta langue maternelle, que fais-tu ?"
            },
            {
                "en": "Where is the first place you will travel to show off your quirky language skills?",
                "ru": "Куда ты поедешь в первую очередь, чтобы хвастаться своими забавными языковыми навыками?",
                "fr": "Où iras-tu en premier pour frimer avec tes compétences linguistiques décalées ?"
            },
            {
                "en": "What is the ultimate dream of success for you that sounds totally absurd?",
                "ru": "Какова твоя абсолютная вершина успеха в языке, которая звучит нелепо?",
                "fr": "Quel est ton rêve ultime de réussite dans cette langue qui semble totalement absurde ?"
            },
            {
                "en": "If we write a comedy book about our classes, who gets the dedication page?",
                "ru": "Если мы напишем комедийную книгу о наших уроках, кому мы посвятим первую страницу?",
                "fr": "Si on écrivait un livre comique sur nos cours, à qui serait dédiée la première page ?"
            },
            {
                "en": "What is the most valuable inside joke we have created during our sessions?",
                "ru": "Какая наша общая шутка за время уроков для тебя самая дорогая?",
                "fr": "Quelle est notre blague interne la plus précieuse créée pendant nos cours ?"
            },
            {
                "en": "If you had to write a manual on 'How to survive classes with me', what would chapter one be?",
                "ru": "Если бы ты писал руководство 'Как выжить на уроках со мной', о чём была бы первая глава?",
                "fr": "Si tu devais écrire un manuel intitulé « Comment survivre aux cours avec moi », quel serait le titre du chapitre un ?"
            },
            {
                "en": "What is the next absurd challenge we are going to conquer together?",
                "ru": "Какой следующий абсурдный вызов мы бросим себе вместе?",
                "fr": "Quel est le prochain défi absurde que nous allons relever ensemble ?"
            },
            {
                "en": "If you could teleport us to a live talk show right now to speak this language, would you press the button?",
                "ru": "Если бы ты мог прямо сейчас телепортировать нас на ток-шоу, где нужно говорить на этом языке, ты бы нажал кнопку?",
                "fr": "Si tu pouvais nous téléporter instantanément sur un plateau de télévision pour parler cette langue en direct, appuierais-tu sur le bouton ?"
            },
            {
                "en": "How will our ridiculous jokes on these classes help you rule the world?",
                "ru": "Как наши нелепые шутки на уроках помогут тебе захватить мир?",
                "fr": "Comment nos blagues ridicules pendant les cours vont-elles t'aider à conquérir le monde ?"
            },
            {
                "en": "What was the most hilariously stressful minute of our sessions so far?",
                "ru": "Какая минута на наших уроках была самой уморительно напряженной?",
                "fr": "Quelle a été la minute la plus drôle et stressante de nos cours jusqu'à présent ?"
            },
            {
                "en": "What will you tell your future grandchildren about your quirky language teacher?",
                "ru": "Что ты расскажешь своим будущим внукам о своем чудаковатом учителе языка?",
                "fr": "Que raconteras-tu à tes futurs petits-enfants sur ton prof de langue décalé ?"
            },
            {
                "en": "What is the very first word you will scream if you ever win an international award?",
                "ru": "Какое самое первый слово ты прокричишь, если когда-нибудь выиграешь международную награду?",
                "fr": "Quel es le tout premier mot que tu hurleras si tu gagne un prix international ?"
            }
        ]
    }
]
    };

    const DECK_INTERVIEW = {
        title: {
            ru: '500 вопросов для интервью',
            en: 'Interview Questions Deck',
            fr: "Questions d'Entretien"
        },
        levels: [
    {
        "name": {
            "ru": "ЭТАП 01: введение · контакт",
            "en": "STAGE 01: Warm-up & Intro",
            "fr": "ÉTAPE 01 : Contact & Présentation"
        },
        "range": "1–13",
        "questions": [
            {
                "en": "Tell me about yourself in three sentences.",
                "ru": "Расскажите о себе в трех предложениях.",
                "fr": "Présentez-vous en trois phrases."
            },
            {
                "en": "Why are you interested in this specific role?",
                "ru": "Почему вас интересует именно эта вакансия?",
                "fr": "Pourquoi êtes-vous intéressé par ce poste en particulier ?"
            },
            {
                "en": "What attracted you to our company culture?",
                "ru": "Что привлекло вас в культуре нашей компании?",
                "fr": "Qu'est-ce qui vous a attiré dans la culture de notre entreprise ?"
            },
            {
                "en": "How did you hear about this position?",
                "ru": "Как вы узнали об этой вакансии?",
                "fr": "Comment avez-vous entendu parler de ce poste ?"
            },
            {
                "en": "What is your biggest professional achievement so far?",
                "ru": "Каково ваше самое большое профессиональное достижение на сегодняшний день?",
                "fr": "Quelle est votre plus grande réussite professionnelle à ce jour ?"
            },
            {
                "en": "Describe your ideal working environment.",
                "ru": "Опишите вашу идеальную рабочую среду.",
                "fr": "Décrivez votre environnement de travail idéal."
            },
            {
                "en": "What are your core professional values?",
                "ru": "Каковы ваши основные профессиональные ценности?",
                "fr": "Quelles sont vos valeurs professionnelles fondamentales ?"
            },
            {
                "en": "How do you define success in your career?",
                "ru": "Как вы определяете успех в своей карьере?",
                "fr": "Comment définissez-vous la réussite dans votre carrière ?"
            },
            {
                "en": "What is one thing not on your CV that we should know?",
                "ru": "О чем из того, чего нет в вашем резюме, нам следует знать?",
                "fr": "Quelle est la chose qui ne figure pas sur votre CV et que nous devrions savoir ?"
            },
            {
                "en": "What motivates you to get up and go to work every day?",
                "ru": "Что мотивирует вас вставать и идти на работу каждый день?",
                "fr": "Qu'est-ce qui vous motive à vous lever et à aller travailler chaque jour ?"
            },
            {
                "en": "What is your preferred style of communication with colleagues?",
                "ru": "Какому стилю общения с коллегами вы отдаете предпочтение?",
                "fr": "Quel style de communication préférez-vous avec vos collègues ?"
            },
            {
                "en": "What was the most rewarding aspect of your previous job?",
                "ru": "Что было самым приятным в вашей предыдущей работе?",
                "fr": "Quel était l'aspect le plus gratifiant de votre emploi précédent ?"
            },
            {
                "en": "If you could describe your career in one word, what would it be?",
                "ru": "Если бы вы могли описать свою карьеру одним словом, что бы это было?",
                "fr": "Si vous deviez décrire votre carrière en un seul mot, quel serait-il ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 02: профессиональный опыт",
            "en": "STAGE 02: Work Experience",
            "fr": "ÉTAPE 02 : Expérience Professionnelle"
        },
        "range": "14–25",
        "questions": [
            {
                "en": "How has your background prepared you for this role?",
                "ru": "Как ваш предыдущий опыт подготовил вас к этой роли?",
                "fr": "Comment votre parcours vous a-t-il préparé à ce poste ?"
            },
            {
                "en": "What was your most challenging project and how did you manage it?",
                "ru": "Каким был ваш самый сложный проект и как вы с ним справились?",
                "fr": "Quel a été votre projet le plus difficile et comment l'avez-vous géré ?"
            },
            {
                "en": "Have you ever made a major mistake at work and how did you fix it?",
                "ru": "Совершали ли вы когда-либо серьезную ошибку на работе и как вы ее исправили?",
                "fr": "Avez-vous déjà commis une erreur majeure au travail ?"
            },
            {
                "en": "What industries or markets do you have the most experience with?",
                "ru": "В каких отраслях или рынках у вас больше всего опыта?",
                "fr": "Dans quels secteurs ou marchés avez-vous le plus d'expérience ?"
            },
            {
                "en": "How do you stay updated with industry trends and technologies?",
                "ru": "Как вы следите за отраслевыми тенденциями и технологиями?",
                "fr": "Comment vous tenez-vous informé des tendances de votre secteur ?"
            },
            {
                "en": "Describe a time you had to learn a new tool very quickly.",
                "ru": "Опишите случай, когда вам пришлось очень быстро осваивать новый инструмент.",
                "fr": "Décrivez une situation où vous avez dû apprendre à utiliser un nouvel outil très rapidement."
            },
            {
                "en": "What is your experience with working in multidisciplinary teams?",
                "ru": "Каков ваш опыт работы в мультидисциплинарных командах?",
                "fr": "Quelle est votre expérience de travail dans des équipes pluridisciplinaires ?"
            },
            {
                "en": "Have you ever managed a budget or resources? Tell me about it.",
                "ru": "Приходилось ли вам управлять бюджетом или ресурсами? Расскажите об этом.",
                "fr": "Avez-vous déjà géré un budget ou des ressources ? Parlez-m'en."
            },
            {
                "en": "How do you prioritize multiple tasks with tight deadlines?",
                "ru": "Как вы расставляете приоритеты при выполнении нескольких задач в сжатые сроки?",
                "fr": "Comment priorisez-vous plusieurs tâches avec des délais serrés ?"
            },
            {
                "en": "What is the most complex problem you have solved recently?",
                "ru": "Какую самую сложную проблему вы решили за последнее время?",
                "fr": "Quel est le problème le plus complexe que vous ayez résolu récemment ?"
            },
            {
                "en": "How do you measure the quality of your own work output?",
                "ru": "Как вы измеряете качество результатов своей собственной работы?",
                "fr": "Comment mesurez-vous la qualité de votre propre travail ?"
            },
            {
                "en": "Why are you leaving your current employer?",
                "ru": "Почему вы уходите от своего текущего работодателя?",
                "fr": "Pourquoi quittez-vous votre employeur actuel ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 03: гибкие навыки",
            "en": "STAGE 03: Soft Skills",
            "fr": "ÉTAPE 03 : Compétences Relationnelles (Soft Skills)"
        },
        "range": "26–38",
        "questions": [
            {
                "en": "How do you handle constructive criticism from team members?",
                "ru": "Как вы относитесь к конструктивной критике со стороны членов команды?",
                "fr": "Comment gérez-vous les critiques constructives des membres de votre équipe ?"
            },
            {
                "en": "Tell me about a time you had to persuade someone at work.",
                "ru": "Расскажите о случае, когда вам пришлось кого-то убеждать на работе.",
                "fr": "Parlez-moi d'une fois où vous avez dû convaincre quelqu'un au travail."
            },
            {
                "en": "How do you build trust with new colleagues quickly?",
                "ru": "Как вы быстро выстраиваете доверие с новыми коллегами?",
                "fr": "Comment établissez-vous rapidement une relation de confiance avec de nouveaux collègues ?"
            },
            {
                "en": "What is your approach to active listening in a meeting?",
                "ru": "Каков ваш подход к активному слушанию на собраниях?",
                "fr": "Quelle est votre approche de l'écoute active en réunion ?"
            },
            {
                "en": "Describe a situation where you had to adapt to a sudden change.",
                "ru": "Опишите ситуацию, когда вам пришлось адаптироваться к внезапным изменениям.",
                "fr": "Décrivez une situation où vous avez dû vous adapter à un changement soudain."
            },
            {
                "en": "How do you keep yourself organized and focused when working remotely?",
                "ru": "Как вы поддерживаете организованность и фокус при удаленной работе?",
                "fr": "Comment restez-vous organisé et concentré lorsque vous travaillez à distance ?"
            },
            {
                "en": "What is your definition of empathy in a business environment?",
                "ru": "Каково ваше определение эмпатии в бизнес-среде?",
                "fr": "Quelle est votre définition de l'empathie dans un contexte professionnel ?"
            },
            {
                "en": "How do you support team morale during difficult periods?",
                "ru": "Как вы поддерживаете моральный дух команды в трудные периоды?",
                "fr": "Comment soutenez-vous le moral de l'équipe dans les moments difficiles ?"
            },
            {
                "en": "Give an example of how you mentored or helped a coworker.",
                "ru": "Приведите пример того, как вы наставляли или помогали коллеге.",
                "fr": "Donnez un exemple de la façon dont vous avez parrainé ou aidé un collègue."
            },
            {
                "en": "How do you ensure diverse perspectives are heard in your projects?",
                "ru": "Как вы обеспечиваете учет различных мнений в своих проектах?",
                "fr": "Comment vous assurez-vous que les points de vue divers sont entendus dans vos projets ?"
            },
            {
                "en": "What soft skill are you currently working on improving?",
                "ru": "Над развитием какого гибкого навыка вы сейчас работаете?",
                "fr": "Sur quelle compétence relationnelle travaillez-vous actuellement pour vous améliorer ?"
            },
            {
                "en": "Describe a time you had to deliver difficult news to a coworker.",
                "ru": "Опишите случай, когда вам пришлось сообщить неприятную новость коллеге.",
                "fr": "Décrivez une fois où vous avez dû annoncer une mauvaise nouvelle à un collègue."
            },
            {
                "en": "How do you maintain a positive attitude under pressure?",
                "ru": "Как вы сохраняете позитивный настрой под давлением?",
                "fr": "Comment conservez-vous une attitude positive sous la pression ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 04: технические навыки",
            "en": "STAGE 04: Technical & Problem Solving",
            "fr": "ÉTAPE 04 : Compétences Techniques & Résolution de Problèmes"
        },
        "range": "39–50",
        "questions": [
            {
                "en": "What is your preferred methodology for troubleshooting complex technical issues?",
                "ru": "Какова ваша любимая методология поиска и устранения сложных технических неполадок?",
                "fr": "Quelle est votre méthodologie préférée pour résoudre des problèmes techniques complexes ?"
            },
            {
                "en": "How do you decide which technology or tool to use for a new task?",
                "ru": "Как вы решаете, какую технологию или инструмент использовать для новой задачи?",
                "fr": "Comment décidez-vous de la technologie ou de l'outil à utiliser pour une nouvelle tâche ?"
            },
            {
                "en": "Describe a time you designed an elegant solution to a complicated problem.",
                "ru": "Опишите случай, когда вы разработали изящное решение сложной проблемы.",
                "fr": "Décrivez une fois où vous avez conçu une solution élégante à un problème compliqué."
            },
            {
                "en": "How do you ensure your code or work meets strict standards?",
                "ru": "Как вы обеспечиваете соответствие своего кода или работы строгим стандартам?",
                "fr": "Comment vous assurez-vous que votre code ou votre travail respecte des normes strictes ?"
            },
            {
                "en": "What is your approach to documentation and knowledge sharing?",
                "ru": "Каков ваш подход к ведению документации и обмену знаниями?",
                "fr": "Quelle est votre approche de la documentation et du partage des connaissances ?"
            },
            {
                "en": "How do you balance technical perfection with business deadlines?",
                "ru": "Как вы балансируете между техническим совершенством и бизнес-сроками?",
                "fr": "Comment équilibrez-vous la perfection technique avec les impératifs commerciaux ?"
            },
            {
                "en": "Describe a technological innovation that excited you recently.",
                "ru": "Опишите технологическую инновацию, которая взволновала вас в последнее время.",
                "fr": "Décrivez une innovation technologique qui vous a enthousiasmé récemment."
            },
            {
                "en": "How do you handle technical debt in long-term projects?",
                "ru": "Как вы справляетесь с техническим долгом в долгосрочных проектах?",
                "fr": "Comment gerez-vous la dette technique dans les projets à long terme ?"
            },
            {
                "en": "What is the most difficult technology stack you have ever worked with?",
                "ru": "С каким самым сложным технологическим стеком вам приходилось работать?",
                "fr": "Quel est l'écosystème technologique le plus difficile avec lequel vous ayez travaillé ?"
            },
            {
                "en": "How do you approach auditing and optimizing existing systems?",
                "ru": "Как вы подходите к аудиту и оптимизации существующих систем?",
                "fr": "Comment abordez-vous l'audit et l'optimisation des systèmes existants ?"
            },
            {
                "en": "Have you ever automated a boring manual process? Explain.",
                "ru": "Приходилось ли вам автоматизировать скучный ручной процесс? Объясните.",
                "fr": "Avez-vous déjà automatisé un processus manuel fastidieux ? Expliquez."
            },
            {
                "en": "How do you explain technical concepts to non-technical stakeholders?",
                "ru": "Как вы объясняете технические понятия нетехническим специалистам?",
                "fr": "Comment expliquez-vous des concepts techniques à des interlocuteurs non techniques ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 05: конфликты и стресс",
            "en": "STAGE 05: Conflict & Stress",
            "fr": "ÉTAPE 05 : Conflit & Stress"
        },
        "range": "51–63",
        "questions": [
            {
                "en": "How do you de-escalate a heated argument with a teammate?",
                "ru": "Как вы разряжаете горячий спор с коллегой по команде?",
                "fr": "Comment désamorcez-vous un conflit tendu avec un membre de l'équipe ?"
            },
            {
                "en": "Describe a time you had a major disagreement with your manager.",
                "ru": "Опишите случай, когда у вас возникли серьезные разногласия с руководителем.",
                "fr": "Décrivez une situation où vous avez eu un désaccord majeur avec votre responsable."
            },
            {
                "en": "What are your triggers for workplace stress and how do you manage them?",
                "ru": "Что является для вас триггером стресса на рабочем месте и как вы с этим справляетесь?",
                "fr": "Quels sont vos facteurs de stress au travail et comment les gérez-vous ?"
            },
            {
                "en": "How do you say 'no' to unreasonable requests from stakeholders?",
                "ru": "Как вы говорите 'нет' необоснованным запросам со стороны заинтересованных лиц?",
                "fr": "Comment dites-vous « non » aux demandes déraisonnables des parties prenantes ?"
            },
            {
                "en": "Tell me about a project that went completely wrong and how you reacted.",
                "ru": "Расскажите о проекте, который пошел совершенно не так, и о вашей реакции.",
                "fr": "Parlez-moi d'un projet qui a totalement échoué et de votre réaction."
            },
            {
                "en": "How do you handle a team member who is not performing well?",
                "ru": "Как вы ведете себя с членом команды, который не справляется со своими обязанностями?",
                "fr": "Comment gerez-vous un membre de l'équipe qui n'est pas performant ?"
            },
            {
                "en": "What is your approach to dealing with unhappy or angry clients?",
                "ru": "Каков ваш подход к работе с недовольными или разгневанными клиентами?",
                "fr": "Quelle est votre approche face à des clients mécontents ou en colère ?"
            },
            {
                "en": "Describe a time you had to work under extreme time constraints.",
                "ru": "Опишите случай, когда вам приходилось работать в условиях крайнего дефицита времени.",
                "fr": "Décrivez une fois où vous avez dû travailler dans des conditions de temps extrêmement limitées."
            },
            {
                "en": "How do you maintain clear boundaries between work and life?",
                "ru": "Как вы поддерживаете четкие границы между работой и личной жизнью?",
                "fr": "Comment maintenez-vous des limites claires entre travail et vie privée ?"
            },
            {
                "en": "Have you ever mediated a conflict between two colleagues?",
                "ru": "Приходилось ли вам когда-либо выступать посредником в конфликте между двумя коллегами?",
                "fr": "Avez-vous déjà joué les médiateurs dans un conflit entre deux collègues ?"
            },
            {
                "en": "How do you stay calm when everything seems to be failing at once?",
                "ru": "Как вам удается сохранять спокойствие, когда кажется, что все рушится одновременно?",
                "fr": "Comment restez-vous calme quand tout semble s'effondrer en même temps ?"
            },
            {
                "en": "What is your philosophy on professional failures?",
                "ru": "Какова ваша философия в отношении профессиональных неудач?",
                "fr": "Quelle est votre philosophie sur les échecs professionnels ?"
            },
            {
                "en": "How do you apologize when you make a mistake that affects the team?",
                "ru": "Как вы извиняетесь, если совершаете ошибку, которая влияет на команду?",
                "fr": "Comment vous excusez-vous lorsque vous commettez une erreur qui affecte l'équipe ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 06: лидерство и стратегия",
            "en": "STAGE 06: Leadership & Strategy",
            "fr": "ÉTAPE 06 : Leadership & Stratégie"
        },
        "range": "64–75",
        "questions": [
            {
                "en": "What is your personal leadership philosophy?",
                "ru": "Какова ваша личная философия лидерства?",
                "fr": "Quelle est votre philosophie personnelle en matière de leadership ?"
            },
            {
                "en": "How do you delegate tasks effectively to team members?",
                "ru": "Как вы эффективно делегируете задачи членам команды?",
                "fr": "Comment déléguez-vous efficacement des tâches aux membres de l'équipe ?"
            },
            {
                "en": "Describe a time you led a project from concept to delivery.",
                "ru": "Опишите случай, когда вы вели проект от идеи до реализации.",
                "fr": "Décrivez une fois où vous avez dirigé un projet du concept à la livraison."
            },
            {
                "en": "How do you inspire a team when motivation is low?",
                "ru": "Как вы вдохновляете команду, когда уровень мотивации низок?",
                "fr": "Comment inspirez-vous une équipe lorsque la motivation est basse ?"
            },
            {
                "en": "What is your approach to strategic planning and goal setting?",
                "ru": "Каков ваш подход к стратегическому планированию и постановке целей?",
                "fr": "Quelle est votre approche de la planification stratégique et de la définition d'objectifs ?"
            },
            {
                "en": "How do you handle making unpopular decisions?",
                "ru": "Как вы справляетесь с принятием непопулярных решений?",
                "fr": "Comment gérez-vous la prise de décisions impopulaires ?"
            },
            {
                "en": "Describe how you manage performance reviews and growth plans.",
                "ru": "Опишите, как вы проводите оценку эффективности и составляете планы роста.",
                "fr": "Décrivez comment vous gérez les évaluations de performance et les plans de développement."
            },
            {
                "en": "How do you foster innovation and creativity in a team?",
                "ru": "Как вы способствуете инновациям и творчеству в команде?",
                "fr": "Comment favorisez-vous l'innovation et la créativité au sein d'une équipe ?"
            },
            {
                "en": "What is the hardest part about being a leader?",
                "ru": "Что самое сложное в том, чтобы быть лидером?",
                "fr": "Quelle est la partie la plus difficile dans le rôle de leader ?"
            },
            {
                "en": "How do you handle managing remote or globally distributed teams?",
                "ru": "Как вы управляете удаленными или географически распределенными командами?",
                "fr": "Comment gérez-vous des équipes distantes ou réparties dans le monde entier ?"
            },
            {
                "en": "How do you define accountability in project management?",
                "ru": "Как вы определяете подотчетность в управлении проектами?",
                "fr": "Comment définissez-vous la responsabilité dans la gestion de projet ?"
            },
            {
                "en": "Describe a time you mentored a junior colleague into a senior role.",
                "ru": "Опишите случай, когда вы помогли младшему коллеге вырасти до старшей роли.",
                "fr": "Décrivez une situation où vous avez accompagné un collègue junior vers un poste senior."
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 07: культура и рост",
            "en": "STAGE 07: Culture & Growth",
            "fr": "ÉTAPE 07 : Culture & Évolution"
        },
        "range": "76–88",
        "questions": [
            {
                "en": "What kind of company culture allows you to perform best?",
                "ru": "Какая культура компании позволяет вам работать наиболее эффективно?",
                "fr": "Quel type de culture d'entreprise vous permet d'être le plus performant ?"
            },
            {
                "en": "What does professional growth mean to you?",
                "ru": "Что для вас означает профессиональный рост?",
                "fr": "Que signifie l'évolution professionnelle pour vous ?"
            },
            {
                "en": "How do you contribute to diversity and inclusion in the workplace?",
                "ru": "Как вы способствуете разнообразию и инклюзивности на рабочем месте?",
                "fr": "Comment contribuez-vous à la diversité et à l'inclusion sur le lieu de travail ?"
            },
            {
                "en": "What is the most important lesson you have learned in your career?",
                "ru": "Каков самый важный урок, который вы извлекли в своей карьере?",
                "fr": "Quelle est la leçon la plus importante que vous ayez apprise dans votre carrière ?"
            },
            {
                "en": "How do you balance learning new skills with executing your daily tasks?",
                "ru": "Как вы балансируете между освоением новых навыков и выполнением повседневных задач?",
                "fr": "Comment équilibrez-vous l'apprentissage de nouvelles compétences avec l'exécution de vos tâches quotidiennes ?"
            },
            {
                "en": "Where do you see yourself professionally in three years?",
                "ru": "Кем вы видите себя в профессиональном плане через три года?",
                "fr": "Où vous voyez-vous professionnellement dans trois ans ?"
            },
            {
                "en": "How do you handle working with people who have different work styles?",
                "ru": "Как вы работаете с людьми, у которых другие стили работы?",
                "fr": "Comment gérez-vous le travail avec des personnes ayant des styles de travail différents ?"
            },
            {
                "en": "What is your philosophy on risk-taking in business?",
                "ru": "Какова ваша философия в отношении принятия рисков в бизнесе?",
                "fr": "Quelle est votre philosophie sur la prise de risque en affaires ?"
            },
            {
                "en": "What project would you propose if you had unlimited budget?",
                "ru": "Какой проект вы бы предложили, если бы у вас был неограниченный бюджет?",
                "fr": "Quel projet proposeriez-vous si vous aviez un budget illimité ?"
            },
            {
                "en": "How do you stay inspired and avoid professional burnout?",
                "ru": "Как вы сохраняете вдохновение и избегаете профессионального выгорания?",
                "fr": "Comment restez-vous inspiré et évitez-vous le burn-out professionnel ?"
            },
            {
                "en": "What is the best professional book or article you have read?",
                "ru": "Какую лучшую профессиональную книгу или статью вы прочитали?",
                "fr": "Quel est le meilleur livre ou article professionnel que vous ayez lu ?"
            },
            {
                "en": "How do you define a great manager?",
                "ru": "Как вы определяете отличного менеджера?",
                "fr": "Comment définissez-vous un excellent manager ?"
            },
            {
                "en": "What legacy do you want to leave in your next company?",
                "ru": "Какое наследие вы хотите оставить в своей следующей компании?",
                "fr": "Quel héritage souhaitez-vous laisser dans votre prochaine entreprise ?"
            }
        ]
    },
    {
        "name": {
            "ru": "ЭТАП 08: нестандартные вопросы",
            "en": "STAGE 08: Out of the Box",
            "fr": "STAGE 08 : Questions Insolites"
        },
        "range": "89–100",
        "questions": [
            {
                "en": "If you could change one thing about our industry, what would it be?",
                "ru": "Если бы вы могли изменить одну вещь в нашей отрасли, что бы это было?",
                "fr": "Si vous pouviez changer une chose dans notre secteur, quelle serait-elle ?"
            },
            {
                "en": "What is a common belief in your field that you disagree with?",
                "ru": "Какое общепринятое убеждение в вашей области вы не разделяете?",
                "fr": "Quelle est la croyance commune dans votre domaine avec laquelle vous n'êtes pas d'accord ?"
            },
            {
                "en": "Describe a work task that you find secretly satisfying.",
                "ru": "Опишите рабочую задачу, которая приносит вам тайное удовлетворение.",
                "fr": "Décrivez une tâche professionnelle qui vous procure une satisfaction secrète."
            },
            {
                "en": "How do you explain your job to an eight-year-old child?",
                "ru": "Как бы вы объяснили свою работу восьмилетнему ребенку?",
                "fr": "Comment expliqueriez-vous votre travail à un enfant de huit ans ?"
            },
            {
                "en": "What was the most unusual question you were ever asked in an interview?",
                "ru": "Каким был самый необычный вопрос, который вам задавали на собеседовании?",
                "fr": "Quelle a été la question la plus insolite que l'on vous ait posée lors d'un entretien ?"
            },
            {
                "en": "If you could have any job in the world for one week, what would it be?",
                "ru": "Если бы вы могли выполнять любую работу в мире в течение одной недели, что бы это было?",
                "fr": "Si vous pouviez faire n'importe quel travail au monde pendant une semaine, quel serait-il ?"
            },
            {
                "en": "What is the most creative solution you have ever devised?",
                "ru": "Какое самое креативное решение вы когда-либо разрабатывали?",
                "fr": "Quelle est la solution la plus créative que vous ayez jamais imaginée ?"
            },
            {
                "en": "How do you handle situations where you have no instructions?",
                "ru": "Как вы действуете в ситуациях, когда у вас нет никаких инструкций?",
                "fr": "Comment gerez-vous les situations où vous n'avez aucune instruction ?"
            },
            {
                "en": "What is the biggest risk you have taken in your career?",
                "ru": "Каков самый большой риск, на который вы пошли в своей карьере?",
                "fr": "Quel est le plus grand risque que vous ayez pris dans votre carrière ?"
            },
            {
                "en": "What skill do you think will be most valuable in ten years?",
                "ru": "Какой навык, по вашему мнению, будет наиболее ценным через десять лет?",
                "fr": "Selon vous, quelle compétence sera la plus précieuse dans dix ans ?"
            },
            {
                "en": "If you could build your dream team of historical figures, who is on it?",
                "ru": "Если бы вы могли собрать команду мечты из исторических личностей, кто бы в нее вошел?",
                "fr": "Si vous pouviez constituer votre équipe de rêve avec des personnages historiques, qui en ferait partie ?"
            },
            {
                "en": "Why should we hire you instead of other qualified candidates?",
                "ru": "Почему мы должны нанять именно вас, а не других квалифицированных кандидатов?",
                "fr": "Pourquoi devrions-nous vous embaucher plutôt que d'autres candidats qualifiés ?"
            }
        ]
    }
]
    };

    const DECK_STUDENT = {
        title: {
            ru: '100 вопросов студенту',
            en: '100 Questions to Student',
            fr: "100 Questions à l'Élève"
        },
        levels: [
    {
        "name": {
            "en": "LEVEL 01: Warm-up & Daily Life",
            "ru": "УРОВЕНЬ 01: Разминка и быт",
            "fr": "NIVEAU 01 : Échauffement & Quotidien"
        },
        "range": "1–13",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite subject in school?",
                    "ru": "Какой твой любимый предмет в школе?",
                    "fr": "Quelle est ta matière préférée à l'école ?"
                },
                "a": {
                    "en": "How has your childhood favorite school subject influenced your current career choice?",
                    "ru": "Как ваш любимый школьный предмет детства повлиял на ваш нынешний выбор карьеры?",
                    "fr": "Comment votre matière préférée à l'enfance a-t-elle influencé votre carrière ?"
                }
            },
            {
                "c": {
                    "en": "Who is the funniest person in {class_term}?",
                    "ru": "Кто самый смешной человек в {class_term}?",
                    "fr": "Qui est la personne la plus drôle dans {class_term} ?"
                },
                "a": {
                    "en": "What kind of humor or qualities do you look for in your professional peers today?",
                    "ru": "Какое чувство юмора или качества вы ищете в своих профессиональных коллегах сегодня?",
                    "fr": "Quel type d'humour ou de qualités recherchez-vous chez vos collègues ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite game to play during break time?",
                    "ru": "В какую игру ты больше всего любишь играть на перемене?",
                    "fr": "Quel est ton jeu préféré pendant la récréation ?"
                },
                "a": {
                    "en": "How do you actively destress and unplug after a highly demanding workday?",
                    "ru": "Как вы активно снимаете стресс и отключаетесь после напряженного рабочего дня?",
                    "fr": "Comment gérez-vous le stress et déconnectez-vous après une journée de travail ?"
                }
            },
            {
                "c": {
                    "en": "Do you prefer studying alone or with {companion}?",
                    "ru": "Тебе больше нравится учиться одному или с {companion}?",
                    "fr": "Préfères-tu étudier seul ou avec {companion} ?"
                },
                "a": {
                    "en": "Do you perform better working in independent setups or in collaborative environments?",
                    "ru": "Вы работаете эффективнее в независимых проектах или в совместной командной среде?",
                    "fr": "Êtes-vous plus performant en solo ou en équipe ?"
                }
            },
            {
                "c": {
                    "en": "What is the funniest face a teacher has ever made in {classroom}?",
                    "ru": "Какое самое смешное лицо делал учитель в {classroom}?",
                    "fr": "Quelle est la grimace la plus drôle qu'un prof ait faite en {classroom} ?"
                },
                "a": {
                    "en": "What is the most valuable or memorable piece of advice a mentor has ever given you?",
                    "ru": "Какой самый ценный или запоминающийся профессиональный совет дал вам ментор или наставник?",
                    "fr": "Quel est le conseil professionnel le plus précieux qu'un mentor vous ait donné ?"
                }
            },
            {
                "c": {
                    "en": "If you could design a new school uniform, what color would it be?",
                    "ru": "Если бы ты мог разработать новую школьную форму, какого цвета она бы была?",
                    "fr": "Si tu pouvais dessiner un nouvel uniforme scolaire, de quelle couleur serait-il ?"
                },
                "a": {
                    "en": "What is your honest opinion on professional dress codes and formal wear in the modern workplace?",
                    "ru": "Каково ваше честное мнение о профессиональном дресс-коде на современном рабочем месте?",
                    "fr": "Quel est votre avis sincère sur les codes vestimentaires professionnels au travail ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lunch to bring to school?",
                    "ru": "Какую еду ты больше всего любишь брать с собой в школу на обед?",
                    "fr": "Quel est ton repas préféré à apporter à l'école ?"
                },
                "a": {
                    "en": "How have your nutritional choices and eating habits evolved since your school days?",
                    "ru": "Как изменились ваши кулинарные предпочтения и привычки питания со школьных лет?",
                    "fr": "Comment vos choix nutritionnels et vos habitudes alimentaires ont-ils évolué ?"
                }
            },
            {
                "c": {
                    "en": "Do you like reading books or watching cartoons more?",
                    "ru": "Тебе больше нравится читать книги или смотреть мультики?",
                    "fr": "Préfères-tu lire des livres ou regarder des dessins animés ?"
                },
                "a": {
                    "en": "How has your consumption of educational literature or media changed since you were young?",
                    "ru": "Как изменилось ваше потребление развивающей литературы или медиа с юности?",
                    "fr": "Comment votre consommation de littérature ou de médias a-t-elle changé depuis votre jeunesse ?"
                }
            },
            {
                "c": {
                    "en": "What is the hardest homework task you have had this week?",
                    "ru": "Какое домашнее задание было самым сложным на этой неделе?",
                    "fr": "Quel a été le devoir le plus difficile de cette semaine ?"
                },
                "a": {
                    "en": "What is the most complex professional problem you've had to resolve in recent months?",
                    "ru": "Какую самую сложную профессиональную проблему вам пришлось решать за последние месяцы?",
                    "fr": "Quel est le problème professionnel le plus complexe que vous avez dû résoudre ?"
                }
            },
            {
                "c": {
                    "en": "What is the best story in your textbook?",
                    "ru": "Какая история в твоем учебнике самая лучшая?",
                    "fr": "Quelle est la meilleure histoire dans ton manuel ?"
                },
                "a": {
                    "en": "What book or article has had the most significant impact on your life philosophy?",
                    "ru": "Какая книга или статья оказала наибольшее влияние на вашу философию жизни?",
                    "fr": "Quel livre ou article a eu l'impact le plus significatif sur votre philosophie de vie ?"
                }
            },
            {
                "c": {
                    "en": "What is the first rule in your school?",
                    "ru": "Какое первое правило в твоей школе?",
                    "fr": "Quelle est la première règle de ton école ?"
                },
                "a": {
                    "en": "What professional standard or ethical guideline do you value most in your field?",
                    "ru": "Какой профессиональный стандарт или этическое правило вы цените больше всего в своей сфере?",
                    "fr": "Quelle norme professionnelle ou directive éthique appréciez-vous le plus ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite animal to draw?",
                    "ru": "Какое твое любимое животное для рисования?",
                    "fr": "Quel est ton animal préféré à dessiner ?"
                },
                "a": {
                    "en": "What creative hobby or outlet do you wish you had more time to cultivate?",
                    "ru": "Какому творческому хобби или занятию вы бы хотели уделять больше времени?",
                    "fr": "Quel loisir créatif aimeriez-vous avoir plus de temps à cultiver ?"
                }
            },
            {
                "c": {
                    "en": "What makes {classroom} feel cozy?",
                    "ru": "Что делает {classroom} уютным?",
                    "fr": "Qu'est-ce qui rend {classroom} chaleureux ?"
                },
                "a": {
                    "en": "How do you design or organize your workspace to optimize focus and peace of mind?",
                    "ru": "Как вы организуете свое рабочее пространство, чтобы оптимизировать концентрацию и душевный покой?",
                    "fr": "Comment organisez-vous votre espace de travail pour optimiser votre concentration ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 02: Memorable Moments",
            "ru": "УРОВЕНЬ 02: Памятные моменты",
            "fr": "NIVEAU 02 : Moments mémorables"
        },
        "range": "14–25",
        "questions": [
            {
                "c": {
                    "en": "Where do you like to sit in {classroom}?",
                    "ru": "Где тебе больше нравится сидеть в {classroom}?",
                    "fr": "Où aimes-tu t'asseoir en {classroom} ?"
                },
                "a": {
                    "en": "How does your sitting position or physical setup affect your concentration during work?",
                    "ru": "Как ваше рабочее место влияет на вашу концентрацию и осанку?",
                    "fr": "Comment votre installation physique influence-t-elle votre concentration ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite school trip memory?",
                    "ru": "Какое твое самое любимое воспоминание о школьной поездке?",
                    "fr": "Quel est ton meilleur souvenir de sortie scolaire ?"
                },
                "a": {
                    "en": "How has travel shaped your worldview and personal growth?",
                    "ru": "Как путешествия повлияли на ваше мировоззрение и личностный рост?",
                    "fr": "Comment les voyages ont-ils forgé votre vision du monde ?"
                }
            },
            {
                "c": {
                    "en": "What is the best thing about having a classmate sit next to you?",
                    "ru": "Что самое лучшее в том, когда одноклассник сидит рядом с тобой?",
                    "fr": "Quel est le meilleur aspect d'avoir un camarade assis à côté de toi ?"
                },
                "a": {
                    "en": "How do you handle working closely with someone who has a completely different style?",
                    "ru": "Как вы справляетесь с тесным сотрудничеством с человеком с другим стилем работы?",
                    "fr": "Comment gérez-vous la collaboration avec quelqu'un qui a un style opposé ?"
                }
            },
            {
                "c": {
                    "en": "Did you ever forget your pencil case? What did you do?",
                    "ru": "Ты когда-нибудь забывал свой пенал? Что ты делал?",
                    "fr": "As-tu déjà oublié ta trousse ? Qu'as-tu fait ?"
                },
                "a": {
                    "en": "How do you manage professional preparation and deal with unexpected oversights?",
                    "ru": "Как вы управляете своей профессиональной подготовкой и справляетесь с непредвиденными упущениями?",
                    "fr": "Comment gérez-vous l'impréparation ou les oublis professionnels ?"
                }
            },
            {
                "c": {
                    "en": "What is the most interesting thing you learned this week?",
                    "ru": "Что самое интересное ты узнал на этой неделе?",
                    "fr": "Quelle est la chose la plus intéressante que tu as apprise cette semaine ?"
                },
                "a": {
                    "en": "What new skill or concept have you explored recently that excited you?",
                    "ru": "Какую новую концепцию или навык вы изучили в последнее время, что вас увлекло?",
                    "fr": "Quel nouveau concept ou compétence avez-vous exploré récemment ?"
                }
            },
            {
                "c": {
                    "en": "Who is the kindest person in {classroom}?",
                    "ru": "Кто самый добрый человек в {classroom}?",
                    "fr": "Qui est la personne la plus gentille en {classroom} ?"
                },
                "a": {
                    "en": "How do you practice and maintain empathy and kindness in your professional relationships?",
                    "ru": "Как вы проявляете и поддерживаете эмпатию и доброту в профессиональных отношениях?",
                    "fr": "Comment exprimez-vous l'empathie et la bienveillance dans vos relations ?"
                }
            },
            {
                "c": {
                    "en": "What do you do if you don't understand a task?",
                    "ru": "Что ты делаешь, если не понимаешь задание?",
                    "fr": "Que fais-tu si tu ne comprends pas une consigne ?"
                },
                "a": {
                    "en": "What is your systematic approach when faced with ambiguous instructions at work?",
                    "ru": "Каков ваш систематический подход при получении неясных или двусмысленных задач?",
                    "fr": "Quelle est votre approche face à des consignes ambiguës au travail ?"
                }
            },
            {
                "c": {
                    "en": "Do you like rainy days or sunny days for school?",
                    "ru": "Тебе больше нравятся дождливые или солнечные дни для школы?",
                    "fr": "Préfères-tu les jours de pluie ou de soleil pour aller à l'école ?"
                },
                "a": {
                    "en": "How does weather and environmental lighting affect your mood and overall productivity?",
                    "ru": "Как погода и освещение влияют на ваше настроение и общую продуктивность?",
                    "fr": "Comment la météo et l'environnement influencent-ils ta productivité ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite story to tell your friends?",
                    "ru": "Какую историю ты больше всего любишь рассказывать друзьям?",
                    "fr": "Quelle est ton histoire préférée à raconter à tes amis ?"
                },
                "a": {
                    "en": "What narrative or professional story do you share to introduce yourself to new clients?",
                    "ru": "Какую историю или опыт вы рассказываете, чтобы представить себя новым клиентам?",
                    "fr": "Quelle histoire professionnelle partagez-vous pour vous présenter ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite drawing in your bedroom?",
                    "ru": "Какой рисунок в твоей комнате самый любимый?",
                    "fr": "Quel est ton dessin préféré dans ta chambre ?"
                },
                "a": {
                    "en": "What kind of art or decor keeps you inspired and grounded in your home environment?",
                    "ru": "Какое искусство или декор вдохновляет вас и помогает чувствовать себя уютно дома?",
                    "fr": "Quel type d'art ou de décoration vous inspire chez vous ?"
                }
            },
            {
                "c": {
                    "en": "Who makes you feel safe at school?",
                    "ru": "Кто заставляет тебя чувствовать себя в безопасности в школе?",
                    "fr": "Qui te fait te sentir en sécurité à l'école ?"
                },
                "a": {
                    "en": "What elements contribute most to creating psychological safety in a team context?",
                    "ru": "Какие факторы больше всего способствуют созданию психологической безопасности в коллективе?",
                    "fr": "Quels éléments contribuent le plus à créer une sécurité psychologique en équipe ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite reward for good work?",
                    "ru": "Какая твоя любимая награда за хорошую работу?",
                    "fr": "Quelle est ta récompense préférée pour un bon travail ?"
                },
                "a": {
                    "en": "What is your primary intrinsic motivator to excel when external recognition is absent?",
                    "ru": "Что является вашим главным внутренним мотиватором, когда внешнее признание отсутствует?",
                    "fr": "Quel est votre principal moteur interne pour exceller sans reconnaissance externe ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 03: Feelings & Moods",
            "ru": "УРОВЕНЬ 03: Чувства и эмоции",
            "fr": "NIVEAU 03 : Émotions & Humeurs"
        },
        "range": "26–38",
        "questions": [
            {
                "c": {
                    "en": "What makes you feel excited in the morning?",
                    "ru": "Что радует тебя по утрам?",
                    "fr": "Qu'est-ce qui t'excite le matin ?"
                },
                "a": {
                    "en": "What is your morning routine to mentally prepare for high-stakes challenges?",
                    "ru": "Какова ваша утренняя рутина для ментальной подготовки к сложным задачам?",
                    "fr": "Quelle est votre routine matinale pour vous préparer mentalement ?"
                }
            },
            {
                "c": {
                    "en": "What makes you feel bored during {class_term}?",
                    "ru": "От чего тебе становится скучно на {class_term}?",
                    "fr": "Qu'est-ce qui t'ennuie pendant {class_term} ?"
                },
                "a": {
                    "en": "How do you maintain focus and drive during repetitive, administrative assignments?",
                    "ru": "Как вы сохраняете фокус и мотивацию при выполнении рутинных, монотонных задач?",
                    "fr": "Comment gardez-vous votre concentration lors de tâches répétitives ?"
                }
            },
            {
                "c": {
                    "en": "What do you do when you are angry?",
                    "ru": "Что ты делаешь, когда злишься?",
                    "fr": "Que fais-tu quand tu es en colère ?"
                },
                "a": {
                    "en": "What is your personal strategy for emotional regulation when facing professional conflict?",
                    "ru": "Какова ваша стратегия саморегуляции при столкновении с профессиональным конфликтом?",
                    "fr": "Quelle est votre стратегия регулирования эмоций ?"
                }
            },
            {
                "c": {
                    "en": "Who do you talk to when you are sad?",
                    "ru": "С кем ты разговариваешь, когда тебе грустно?",
                    "fr": "À qui parles-tu quand tu es triste ?"
                },
                "a": {
                    "en": "What is your support system during periods of professional setback or burnout?",
                    "ru": "Какова ваша система поддержки в периоды профессиональных неудач или выгорания?",
                    "fr": "Quel est votre système de soutien lors de revers professionnels ou d'épuisement ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite way to help {companion}?",
                    "ru": "Какой твой любимый способ помочь {companion}?",
                    "fr": "Quelle est ta façon préférée d'aider {companion} ?"
                },
                "a": {
                    "en": "How do you approach mentoring junior peers without micromanaging them?",
                    "ru": "Как вы подходите к наставничеству младших коллег, избегая микроменеджмента?",
                    "fr": "Comment abordez-vous le mentorat de collègues juniors sans les microgérer ?"
                }
            },
            {
                "c": {
                    "en": "How do you feel when you get a perfect mark?",
                    "ru": "Что ты чувствуешь, когда получаешь отличную оценку?",
                    "fr": "Que ressens-tu quand tu as une note parfaite ?"
                },
                "a": {
                    "en": "How has your definition of success shifted from high grades to real-world impact?",
                    "ru": "Как изменилось ваше определение успеха от высоких оценок к реальному влиянию?",
                    "fr": "Comment votre définition de la réussite a-t-elle évolué avec le temps ?"
                }
            },
            {
                "c": {
                    "en": "Do you feel scared of making mistakes in front of {classmates}?",
                    "ru": "Боишься ли ты совершать ошибки перед {classmates}?",
                    "fr": "As-tu peur de faire des erreurs devant {classmates} ?"
                },
                "a": {
                    "en": "How do you handle vulnerability and sharing half-formed ideas in group settings?",
                    "ru": "Как вы справляетесь с уязвимостью при представлении незавершенных идей в группе?",
                    "fr": "Comment gérez-vous le fait de partager des idées inachevées en groupe ?"
                }
            },
            {
                "c": {
                    "en": "What makes you laugh out loud in {classroom}?",
                    "ru": "Что заставляет тебя громко смеяться в {classroom}?",
                    "fr": "Qu'est-ce qui te fait rire aux éclats en {classroom} ?"
                },
                "a": {
                    "en": "How important is humor in relieving high-pressure workplace situations?",
                    "ru": "Насколько важен юмор для разрядки напряженных рабочих ситуаций?",
                    "fr": "Quelle est l'importance de l'humour pour détendre l'atmosphère au travail ?"
                }
            },
            {
                "c": {
                    "en": "What do you do if someone is mean to you?",
                    "ru": "Что ты делаешь, если кто-то груб с тобой?",
                    "fr": "Que fais-tu si quelqu'un est méchant avec toi ?"
                },
                "a": {
                    "en": "How do you systematically handle hostile or passive-aggressive behavior in professional settings?",
                    "ru": "Как вы справляетесь с агрессивным или пассивно-агрессивным поведением коллег?",
                    "fr": "Comment gérez-vous les comportements passifs-agressifs au travail ?"
                }
            },
            {
                "c": {
                    "en": "Do you like surprise games or planned lessons?",
                    "ru": "Тебе больше нравятся игры-сюрпризы или запланированные уроки?",
                    "fr": "Préfères-tu les jeux surprises ou les cours planifiés ?"
                },
                "a": {
                    "en": "How do you balance strategic foresight with high adaptability when plans fail?",
                    "ru": "Как вы балансируете между планированием и гибкостью, когда планы рушатся?",
                    "fr": "Comment équilibrez-vous planification stratégique et adaptabilité ?"
                }
            },
            {
                "c": {
                    "en": "How do you feel when {class_term} ends?",
                    "ru": "Что ты чувствуешь, когда {class_term} заканчивается?",
                    "fr": "Que ressens-tu quand {class_term} se termine ?"
                },
                "a": {
                    "en": "How do you mark the formal closure of major life and professional chapters?",
                    "ru": "Как вы отмечаете формальное завершение крупных жизненных и профессиональных глав?",
                    "fr": "Comment marquez-vous la fin de grands chapitres professionnels ?"
                }
            },
            {
                "c": {
                    "en": "What is a sound that makes you happy?",
                    "ru": "Какой звук делает тебя счастливым?",
                    "fr": "Quel son te rend heureux ?"
                },
                "a": {
                    "en": "How does acoustic hygiene and noise pollution affect your mental wellbeing and focus?",
                    "ru": "Как акустическая гигиена и уровень шума влияют на ваше психическое здоровье и фокус?",
                    "fr": "Comment l'hygiène acoustique influence-t-elle votre bien-être mental ?"
                }
            },
            {
                "c": {
                    "en": "What makes you feel proud of yourself?",
                    "ru": "Что заставляет тебя гордиться собой?",
                    "fr": "Qu'est-ce qui te rend fier de toi ?"
                },
                "a": {
                    "en": "What has been the most self-actualizing accomplishment of your life so far?",
                    "ru": "Какое достижение в вашей жизни принесло вам наибольшее чувство самореализации?",
                    "fr": "Quelle réussite a été la plus enrichissante pour vous ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 04: Strengths & Talents",
            "ru": "УРОВЕНЬ 04: Сильные стороны и таланты",
            "fr": "NIVEAU 04 : Forces & Talents"
        },
        "range": "39–50",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #39?",
                    "ru": "Какая твоя любимая активность или игра на уроке #39?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #39 ?"
                },
                "a": {
                    "en": "How does learning format #39 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #39 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #39 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #40?",
                    "ru": "Какая твоя любимая активность или игра на уроке #40?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #40 ?"
                },
                "a": {
                    "en": "How does learning format #40 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #40 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #40 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #41?",
                    "ru": "Какая твоя любимая активность или игра на уроке #41?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #41 ?"
                },
                "a": {
                    "en": "How does learning format #41 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #41 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #41 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #42?",
                    "ru": "Какая твоя любимая активность или игра на уроке #42?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #42 ?"
                },
                "a": {
                    "en": "How does learning format #42 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #42 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #42 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #43?",
                    "ru": "Какая твоя любимая активность или игра на уроке #43?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #43 ?"
                },
                "a": {
                    "en": "How does learning format #43 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #43 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #43 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #44?",
                    "ru": "Какая твоя любимая активность или игра на уроке #44?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #44 ?"
                },
                "a": {
                    "en": "How does learning format #44 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #44 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #44 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #45?",
                    "ru": "Какая твоя любимая активность или игра на уроке #45?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #45 ?"
                },
                "a": {
                    "en": "How does learning format #45 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #45 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #45 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #46?",
                    "ru": "Какая твоя любимая активность или игра на уроке #46?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #46 ?"
                },
                "a": {
                    "en": "How does learning format #46 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #46 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #46 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #47?",
                    "ru": "Какая твоя любимая активность или игра на уроке #47?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #47 ?"
                },
                "a": {
                    "en": "How does learning format #47 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #47 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #47 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #48?",
                    "ru": "Какая твоя любимая активность или игра на уроке #48?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #48 ?"
                },
                "a": {
                    "en": "How does learning format #48 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #48 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #48 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #49?",
                    "ru": "Какая твоя любимая активность или игра на уроке #49?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #49 ?"
                },
                "a": {
                    "en": "How does learning format #49 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #49 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #49 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #50?",
                    "ru": "Какая твоя любимая активность или игра на уроке #50?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #50 ?"
                },
                "a": {
                    "en": "How does learning format #50 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #50 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #50 optimise-t-il ta mémorisation ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 05: Hopes & Dreams",
            "ru": "УРОВЕНЬ 05: Надежды и мечты",
            "fr": "NIVEAU 05 : Rêves & Espoirs"
        },
        "range": "51–63",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #51?",
                    "ru": "Какая твоя любимая активность или игра на уроке #51?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #51 ?"
                },
                "a": {
                    "en": "How does learning format #51 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #51 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #51 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #52?",
                    "ru": "Какая твоя любимая активность или игра на уроке #52?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #52 ?"
                },
                "a": {
                    "en": "How does learning format #52 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #52 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #52 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #53?",
                    "ru": "Какая твоя любимая активность или игра на уроке #53?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #53 ?"
                },
                "a": {
                    "en": "How does learning format #53 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #53 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #53 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #54?",
                    "ru": "Какая твоя любимая активность или игра на уроке #54?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #54 ?"
                },
                "a": {
                    "en": "How does learning format #54 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #54 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #54 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #55?",
                    "ru": "Какая твоя любимая активность или игра на уроке #55?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #55 ?"
                },
                "a": {
                    "en": "How does learning format #55 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #55 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #55 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #56?",
                    "ru": "Какая твоя любимая активность или игра на уроке #56?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #56 ?"
                },
                "a": {
                    "en": "How does learning format #56 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #56 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #56 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #57?",
                    "ru": "Какая твоя любимая активность или игра на уроке #57?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #57 ?"
                },
                "a": {
                    "en": "How does learning format #57 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #57 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #57 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #58?",
                    "ru": "Какая твоя любимая активность или игра на уроке #58?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #58 ?"
                },
                "a": {
                    "en": "How does learning format #58 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #58 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #58 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #59?",
                    "ru": "Какая твоя любимая активность или игра на уроке #59?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #59 ?"
                },
                "a": {
                    "en": "How does learning format #59 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #59 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #59 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #60?",
                    "ru": "Какая твоя любимая активность или игра на уроке #60?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #60 ?"
                },
                "a": {
                    "en": "How does learning format #60 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #60 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #60 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #61?",
                    "ru": "Какая твоя любимая активность или игра на уроке #61?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #61 ?"
                },
                "a": {
                    "en": "How does learning format #61 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #61 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #61 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #62?",
                    "ru": "Какая твоя любимая активность или игра на уроке #62?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #62 ?"
                },
                "a": {
                    "en": "How does learning format #62 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #62 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #62 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #63?",
                    "ru": "Какая твоя любимая активность или игра на уроке #63?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #63 ?"
                },
                "a": {
                    "en": "How does learning format #63 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #63 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #63 optimise-t-il ta mémorisation ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 06: Secrets & Wishes",
            "ru": "УРОВЕНЬ 06: Секреты и желания",
            "fr": "NIVEAU 06 : Secrets & Souhaits"
        },
        "range": "64–75",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #64?",
                    "ru": "Какая твоя любимая активность или игра на уроке #64?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #64 ?"
                },
                "a": {
                    "en": "How does learning format #64 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #64 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #64 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #65?",
                    "ru": "Какая твоя любимая активность или игра на уроке #65?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #65 ?"
                },
                "a": {
                    "en": "How does learning format #65 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #65 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #65 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #66?",
                    "ru": "Какая твоя любимая активность или игра на уроке #66?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #66 ?"
                },
                "a": {
                    "en": "How does learning format #66 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #66 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #66 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #67?",
                    "ru": "Какая твоя любимая активность или игра на уроке #67?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #67 ?"
                },
                "a": {
                    "en": "How does learning format #67 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #67 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #67 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #68?",
                    "ru": "Какая твоя любимая активность или игра на уроке #68?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #68 ?"
                },
                "a": {
                    "en": "How does learning format #68 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #68 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #68 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #69?",
                    "ru": "Какая твоя любимая активность или игра на уроке #69?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #69 ?"
                },
                "a": {
                    "en": "How does learning format #69 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #69 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #69 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #70?",
                    "ru": "Какая твоя любимая активность или игра на уроке #70?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #70 ?"
                },
                "a": {
                    "en": "How does learning format #70 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #70 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #70 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #71?",
                    "ru": "Какая твоя любимая активность или игра на уроке #71?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #71 ?"
                },
                "a": {
                    "en": "How does learning format #71 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #71 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #71 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #72?",
                    "ru": "Какая твоя любимая активность или игра на уроке #72?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #72 ?"
                },
                "a": {
                    "en": "How does learning format #72 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #72 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #72 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #73?",
                    "ru": "Какая твоя любимая активность или игра на уроке #73?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #73 ?"
                },
                "a": {
                    "en": "How does learning format #73 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #73 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #73 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #74?",
                    "ru": "Какая твоя любимая активность или игра на уроке #74?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #74 ?"
                },
                "a": {
                    "en": "How does learning format #74 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #74 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #74 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #75?",
                    "ru": "Какая твоя любимая активность или игра на уроке #75?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #75 ?"
                },
                "a": {
                    "en": "How does learning format #75 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #75 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #75 optimise-t-il ta mémorisation ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 07: Wisdom & Lessons",
            "ru": "УРОВЕНЬ 07: Мудрость и уроки",
            "fr": "NIVEAU 07 : Sagesse & Leçons"
        },
        "range": "76–88",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #76?",
                    "ru": "Какая твоя любимая активность или игра на уроке #76?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #76 ?"
                },
                "a": {
                    "en": "How does learning format #76 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #76 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #76 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #77?",
                    "ru": "Какая твоя любимая активность или игра на уроке #77?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #77 ?"
                },
                "a": {
                    "en": "How does learning format #77 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #77 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #77 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #78?",
                    "ru": "Какая твоя любимая активность или игра на уроке #78?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #78 ?"
                },
                "a": {
                    "en": "How does learning format #78 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #78 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #78 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #79?",
                    "ru": "Какая твоя любимая активность или игра на уроке #79?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #79 ?"
                },
                "a": {
                    "en": "How does learning format #79 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #79 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #79 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #80?",
                    "ru": "Какая твоя любимая активность или игра на уроке #80?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #80 ?"
                },
                "a": {
                    "en": "How does learning format #80 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #80 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #80 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #81?",
                    "ru": "Какая твоя любимая активность или игра на уроке #81?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #81 ?"
                },
                "a": {
                    "en": "How does learning format #81 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #81 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #81 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #82?",
                    "ru": "Какая твоя любимая активность или игра на уроке #82?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #82 ?"
                },
                "a": {
                    "en": "How does learning format #82 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #82 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #82 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #83?",
                    "ru": "Какая твоя любимая активность или игра на уроке #83?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #83 ?"
                },
                "a": {
                    "en": "How does learning format #83 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #83 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #83 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #84?",
                    "ru": "Какая твоя любимая активность или игра на уроке #84?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #84 ?"
                },
                "a": {
                    "en": "How does learning format #84 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #84 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #84 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #85?",
                    "ru": "Какая твоя любимая активность или игра на уроке #85?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #85 ?"
                },
                "a": {
                    "en": "How does learning format #85 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #85 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #85 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #86?",
                    "ru": "Какая твоя любимая активность или игра на уроке #86?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #86 ?"
                },
                "a": {
                    "en": "How does learning format #86 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #86 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #86 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #87?",
                    "ru": "Какая твоя любимая активность или игра на уроке #87?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #87 ?"
                },
                "a": {
                    "en": "How does learning format #87 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #87 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #87 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #88?",
                    "ru": "Какая твоя любимая активность или игра на уроке #88?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #88 ?"
                },
                "a": {
                    "en": "How does learning format #88 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #88 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #88 optimise-t-il ta mémorisation ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 08: Deep Bonds & Future",
            "ru": "УРОВЕНЬ 08: Глубокие связи и будущее",
            "fr": "NIVEAU 08 : Liens profonds & Futur"
        },
        "range": "89–100",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #89?",
                    "ru": "Какая твоя любимая активность или игра на уроке #89?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #89 ?"
                },
                "a": {
                    "en": "How does learning format #89 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #89 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #89 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #90?",
                    "ru": "Какая твоя любимая активность или игра на уроке #90?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #90 ?"
                },
                "a": {
                    "en": "How does learning format #90 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #90 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #90 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #91?",
                    "ru": "Какая твоя любимая активность или игра на уроке #91?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #91 ?"
                },
                "a": {
                    "en": "How does learning format #91 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #91 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #91 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #92?",
                    "ru": "Какая твоя любимая активность или игра на уроке #92?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #92 ?"
                },
                "a": {
                    "en": "How does learning format #92 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #92 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #92 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #93?",
                    "ru": "Какая твоя любимая активность или игра на уроке #93?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #93 ?"
                },
                "a": {
                    "en": "How does learning format #93 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #93 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #93 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #94?",
                    "ru": "Какая твоя любимая активность или игра на уроке #94?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #94 ?"
                },
                "a": {
                    "en": "How does learning format #94 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #94 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #94 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #95?",
                    "ru": "Какая твоя любимая активность или игра на уроке #95?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #95 ?"
                },
                "a": {
                    "en": "How does learning format #95 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #95 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #95 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #96?",
                    "ru": "Какая твоя любимая активность или игра на уроке #96?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #96 ?"
                },
                "a": {
                    "en": "How does learning format #96 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #96 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #96 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #97?",
                    "ru": "Какая твоя любимая активность или игра на уроке #97?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #97 ?"
                },
                "a": {
                    "en": "How does learning format #97 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #97 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #97 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #98?",
                    "ru": "Какая твоя любимая активность или игра на уроке #98?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #98 ?"
                },
                "a": {
                    "en": "How does learning format #98 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #98 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #98 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #99?",
                    "ru": "Какая твоя любимая активность или игра на уроке #99?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #99 ?"
                },
                "a": {
                    "en": "How does learning format #99 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #99 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #99 optimise-t-il ta mémorisation ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite lesson activity or study game #100?",
                    "ru": "Какая твоя любимая активность или игра на уроке #100?",
                    "fr": "Quelle est ton activité de cours ou jeu d'étude préféré #100 ?"
                },
                "a": {
                    "en": "How does learning format #100 optimize your cognitive retention and skill application?",
                    "ru": "Как формат обучения #100 улучшает ваше запоминание и применение навыков?",
                    "fr": "Comment le format d'apprentissage #100 optimise-t-il ta mémorisation ?"
                }
            }
        ]
    }
]
    };

    const DECK_FAMILY = {
        title: {
            ru: '100 вопросов семье',
            en: '100 Questions to Family',
            fr: "100 Questions à la Famille"
        },
        levels: [
    {
        "name": {
            "en": "LEVEL 01: Warm-up & Daily Life",
            "ru": "УРОВЕНЬ 01: Разминка и быт",
            "fr": "NIVEAU 01 : Échauffement & Quotidien"
        },
        "range": "1–13",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite memory of us playing together when I was little?",
                    "ru": "Какое твое любимое воспоминание о наших совместных играх, когда я был маленьким?",
                    "fr": "Quel est ton souvenir préféré de nos jeux ensemble quand j'étais petit ?"
                },
                "a": {
                    "en": "What was the exact moment you realized our relationship had successfully transitioned into an adult friendship?",
                    "ru": "В какой именно момент вы поняли, что наши отношения успешно переросли во взрослую дружбу?",
                    "fr": "À quel moment as-tu réalisé que notre relation était devenue une amitié d'adulte ?"
                }
            },
            {
                "c": {
                    "en": "What is a delicious meal that {role} always makes for me?",
                    "ru": "Какое вкусное блюдо {role} всегда готовит для меня?",
                    "fr": "Quel délicieux repas {role} prépare-t-il toujours pour moi ?"
                },
                "a": {
                    "en": "What family recipe or culinary tradition holds the deepest emotional weight or nostalgia for you?",
                    "ru": "Какой семейный рецепт или кулинарная традиция имеет для вас наибольшее эмоциональное значение или ностальгию?",
                    "fr": "Quelle recette de famille ou tradition culinaire a le plus grand poids ?"
                }
            },
            {
                "c": {
                    "en": "Where is {role_possessive} favorite place to relax at home?",
                    "ru": "Где у {role_possessive} любимое место для отдыха дома?",
                    "fr": "Où est l'endroit préféré de {role} pour se détendre à la maison ?"
                },
                "a": {
                    "en": "How do you protect your personal peace and recharge your energy in a busy domestic environment?",
                    "ru": "Как вы оберегаете свой душевный покой и восстанавливаете силы в насыщенной домашней обстановке?",
                    "fr": "Comment préserves-tu ta paix intérieure et te ressources-tu ?"
                }
            },
            {
                "c": {
                    "en": "What was your favorite bedtime story when you were my age?",
                    "ru": "Какая сказка на ночь была твоей любимой, когда ты был в моем возрасте?",
                    "fr": "Quelle était ton histoire du soir préférée quand tu avais mon âge ?"
                },
                "a": {
                    "en": "What literary masterpiece has left the deepest mark on your approach to parenting and life?",
                    "ru": "Какое литературное произведение оставило самый глубокий след в вашем подходе к воспитанию и жизни?",
                    "fr": "Quel chef-d'œuvre littéraire a le plus marqué ton rôle de parent ?"
                }
            },
            {
                "c": {
                    "en": "What is a funny face that {role} makes to make me laugh?",
                    "ru": "Какое смешное лицо делает {role}, чтобы рассмешить меня?",
                    "fr": "Quelle grimace fait {role} pour me faire rire ?"
                },
                "a": {
                    "en": "How has your sense of humor helped you navigate the most serious trials of family life?",
                    "ru": "Как ваше чувство юмора помогло вам справляться с самыми сложными испытаниями семейной жизни?",
                    "fr": "Comment ton sens de l'humour t'a-t-il aidé à traverser les épreuves ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family game to play on weekends?",
                    "ru": "В какую семейную игру ты больше всего любишь играть по выходным?",
                    "fr": "Quel est ton jeu de famille préféré le week-end ?"
                },
                "a": {
                    "en": "How have family gatherings and recreational habits changed since you were young?",
                    "ru": "Как изменился характер семейных встреч и совместного досуга со времен вашей юности?",
                    "fr": "Comment les réunions de famille ont-elles évolué depuis ta jeunesse ?"
                }
            },
            {
                "c": {
                    "en": "What color makes you think of our home?",
                    "ru": "Какой цвет заставляет тебя думать о нашем доме?",
                    "fr": "Quelle couleur te fait penser à notre maison ?"
                },
                "a": {
                    "en": "What physical sensory cues (smells, sounds, colors) trigger your strongest feelings of home?",
                    "ru": "Какие физические ощущения (запахи, звуки, цвета) вызывают у вас сильнейшие чувства родного дома?",
                    "fr": "Quels signaux sensoriels (odeurs, sons, couleurs) déclenchent le sentiment d'être chez toi ?"
                }
            },
            {
                "c": {
                    "en": "What is {role_possessive} favorite music to listen to?",
                    "ru": "Какую музыку больше всего любит слушать {role_possessive}?",
                    "fr": "Quelle est la musique préférée de {role} ?"
                },
                "a": {
                    "en": "What song or musical era soundtracked the most defining choices of your youth?",
                    "ru": "Какая песня или музыкальная эпоха сопровождала ключевые решения вашей молодости?",
                    "fr": "Quelle chanson ou époque musicale a marqué les choix de ta jeunesse ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite chore to help with?",
                    "ru": "В каких домашних делах тебе больше всего нравится помогать?",
                    "fr": "Quelle tâche ménagère préfères-tu faire pour aider ?"
                },
                "a": {
                    "en": "What is your philosophy on dividing domestic labor and managing burnout within household routines?",
                    "ru": "Какова ваша философия распределения домашних обязанностей и преодоления бытового выгорания?",
                    "fr": "Quelle est ta philosophie sur le partage des tâches ménagères ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family holiday tradition?",
                    "ru": "Какая твоя любимая семейная праздничная традиция?",
                    "fr": "Quelle est ta tradition de vacances en famille préférée ?"
                },
                "a": {
                    "en": "Which family values do you consider absolutely vital to preserve for the next generation?",
                    "ru": "Какие семейные ценности вы считаете жизненно необходимым сохранить для будущих поколений?",
                    "fr": "Quelles valeurs familiales juges-tu indispensables de préserver ?"
                }
            },
            {
                "c": {
                    "en": "Who is the funniest uncle, aunt, or cousin in our family?",
                    "ru": "Кто самый смешной дядя, тетя или кузен в нашей семье?",
                    "fr": "Qui est l'oncle, la tante ou le cousin le plus drôle de notre famille ?"
                },
                "a": {
                    "en": "How do you handle family politics or historical disagreements during gatherings?",
                    "ru": "Как вы справляетесь с семейной дипломатией или старыми обидами во время общих встреч?",
                    "fr": "Comment gères-tu la diplomatie ou les vieux désaccords ?"
                }
            },
            {
                "c": {
                    "en": "What is a small gift that {role} gave me that I love?",
                    "ru": "Какой маленький подарок от {role_possessive} я очень люблю?",
                    "fr": "Quel petit cadeau de {role} m'a le plus marqué ?"
                },
                "a": {
                    "en": "What is the most emotionally significant heirloom or physical object in our family history?",
                    "ru": "Какая семейная реликвия или физический объект имеет наибольшую эмоциональную ценность в нашей истории?",
                    "fr": "Quel est l'héritage le plus important émotionnellement dans notre histoire ?"
                }
            },
            {
                "c": {
                    "en": "What makes you feel happy when you walk through our front door?",
                    "ru": "Что радует тебя, когда ты переступаешь порог нашего дома?",
                    "fr": "Qu'est-ce qui te rend heureux quand tu passes la porte de notre maison ?"
                },
                "a": {
                    "en": "How do you define emotional security and warmth within our household?",
                    "ru": "Как вы определяете эмоциональную безопасность и тепло в нашей семье?",
                    "fr": "Comment définis-tu la sécurité émotionnelle dans notre foyer ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 02: Memorable Moments",
            "ru": "УРОВЕНЬ 02: Памятные моменты",
            "fr": "NIVEAU 02 : Moments mémorables"
        },
        "range": "14–25",
        "questions": [
            {
                "c": {
                    "en": "What is a funny story about {role} from when I was a baby?",
                    "ru": "Какая есть смешная история про {role_possessive}, когда я был младенцем?",
                    "fr": "Quelle est l'histoire la plus drôle sur {role} quand j'étais bébé ?"
                },
                "a": {
                    "en": "What were the silent worries or hidden sacrifices you navigated during my early developmental years?",
                    "ru": "Какие скрытые тревоги или невидимые жертвы вам приходилось преодолевать в первые годы моего развития?",
                    "fr": "Quels ont été tes sacrifices cachés lors de mes premières années ?"
                }
            },
            {
                "c": {
                    "en": "What was {role_possessive} favorite outdoor game as a kid?",
                    "ru": "Какая у {role_possessive} была любимая уличная игра в детстве?",
                    "fr": "Quel était le jeu de plein air préféré de {role} quand il était enfant ?"
                },
                "a": {
                    "en": "How did your childhood relationship with play and nature shape your current physical wellness?",
                    "ru": "Как ваши детские игры и отношение к природе сформировали ваше нынешнее здоровье?",
                    "fr": "Comment ton rapport d'enfance au grand air a-t-il forgé ton bien-être ?"
                }
            },
            {
                "c": {
                    "en": "Did you ever get into trouble when you were in school?",
                    "ru": "Попадал ли ты когда-нибудь в неприятности, когда учился в школе?",
                    "fr": "As-tu déjà eu des ennuis à l'école quand tu étais jeune ?"
                },
                "a": {
                    "en": "What was your most challenging rebellion against authority in your youth, and what did you learn?",
                    "ru": "Каким был ваш самый серьезный бунт против авторитетов в юности и чему он вас научил?",
                    "fr": "Quelle a été ta rébellion la plus marquante contre l'autorité dans ta jeunesse ?"
                }
            },
            {
                "c": {
                    "en": "Who was {role_possessive} childhood best friend?",
                    "ru": "Кто был лучшим другом детства {role_possessive}?",
                    "fr": "Qui était le meilleur ami d'enfance de {role} ?"
                },
                "a": {
                    "en": "How have your definitions and expectations of lifelong friendship shifted since your early youth?",
                    "ru": "Как изменились ваши определения и ожидания от дружбы со времен вашей юности?",
                    "fr": "Comment tes attentes envers l'amitié ont-elles changé ?"
                }
            },
            {
                "c": {
                    "en": "What was {role_possessive} first pet's name?",
                    "ru": "Как звали первого питомца {role_possessive}?",
                    "fr": "Comment s'appelait le premier animal de compagnie de {role} ?"
                },
                "a": {
                    "en": "What has caring for animals taught you about responsibility, mortality, and unconditional love?",
                    "ru": "Чему забота о животных научила вас в плане ответственности, принятия потерь и любви?",
                    "fr": "Qu'est-ce que s'occuper d'animaux t'a appris sur la responsabilité ?"
                }
            },
            {
                "c": {
                    "en": "What was {role_possessive} favorite school subject?",
                    "ru": "Какой у {role_possessive} был любимый школьный предмет?",
                    "fr": "Quelle était la matière préférée de {role} à l'école ?"
                },
                "a": {
                    "en": "How did your academic success or struggle shape your eventual professional confidence?",
                    "ru": "Как ваши школьные успехи или трудности повлияли на вашу уверенность в профессиональном плане?",
                    "fr": "Comment tes réussites scolaires ont-elles forgé ta confiance ?"
                }
            },
            {
                "c": {
                    "en": "Where did you go for school vacations?",
                    "ru": "Куда ты ездил на школьные каникулы?",
                    "fr": "Où allais-tu pendant les vacances scolaires ?"
                },
                "a": {
                    "en": "What travel experience in your youth completely changed the course of your life plans?",
                    "ru": "Какая поездка в вашей молодости полностью изменила траекторию ваших жизненных планов?",
                    "fr": "Quel voyage dans ta jeunesse a complètement changé tes projets ?"
                }
            },
            {
                "c": {
                    "en": "What was the first movie {role} watched in a cinema?",
                    "ru": "Каким был первый фильм, который {role} посмотрел в кинотеатре?",
                    "fr": "Quel est le premier film que {role} a vu au cinéma ?"
                },
                "a": {
                    "en": "How has the evolution of storytelling, cinema, and media changed the way we interpret values?",
                    "ru": "Как эволюция кино и медиа изменила то, как мы интерпретируем человеческие ценности?",
                    "fr": "Comment l'évolution des récits a-t-elle changé nos valeurs ?"
                }
            },
            {
                "c": {
                    "en": "What is {role_possessive} funniest childhood memory?",
                    "ru": "Какое самое смешное детское воспоминание у {role_possessive}?",
                    "fr": "Quel est le souvenir d'enfance le plus drôle de {role} ?"
                },
                "a": {
                    "en": "What childhood vulnerability or embarrassment do you now look back on with absolute joy?",
                    "ru": "Какую детскую уязвимость или неловкость вы теперь вспоминаете с абсолютной радостью?",
                    "fr": "Quelle vulnérabilité d'enfance considères-tu aujourd'hui avec paix ?"
                }
            },
            {
                "c": {
                    "en": "What chores did you have to do as a child?",
                    "ru": "Какие обязанности по дому у тебя были в детстве?",
                    "fr": "Quelles corvées devais-tu faire quand tu étais enfant ?"
                },
                "a": {
                    "en": "How does your childhood domestic upbringing influence your standard of organization today?",
                    "ru": "Как ваши детские домашние обязанности влияют на ваши нынешние стандарты организации порядка?",
                    "fr": "Comment tes responsabilités d'enfance influencent-elles ton organisation ?"
                }
            },
            {
                "c": {
                    "en": "Did you have a secret hiding place?",
                    "ru": "Было ли у тебя секретное укрытие?",
                    "fr": "Avais-tu une cachette secrète ?"
                },
                "a": {
                    "en": "What was your cognitive strategy for seeking mental escape or decompression during adolescent years?",
                    "ru": "Каким был ваш способ ухода от реальности и снятия напряжения в подростковом возрасте?",
                    "fr": "Comment gérais-tu le besoin d'évasion à l'adolescence ?"
                }
            },
            {
                "c": {
                    "en": "What was the best birthday present you ever got?",
                    "ru": "Какой подарок на день рождения был самым лучшим в твоей жизни?",
                    "fr": "Quel a été ton plus beau cadeau d'anniversaire ?"
                },
                "a": {
                    "en": "What is the true measure of a meaningful gesture, and how has your view of gift-giving evolved?",
                    "ru": "В чём измеряется истинная ценность подарка и как изменилось ваше отношение к дарам?",
                    "fr": "Comment ta perception des cadeaux a-t-elle évolué avec le temps ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 03: Feelings & Moods",
            "ru": "УРОВЕНЬ 03: Чувства и эмоции",
            "fr": "NIVEAU 03 : Émotions & Humeurs"
        },
        "range": "26–38",
        "questions": [
            {
                "c": {
                    "en": "What is your best advice for when I am scared?",
                    "ru": "Какой твой лучший совет, когда мне страшно?",
                    "fr": "Quel est ton meilleur conseil quand j'ai peur ?"
                },
                "a": {
                    "en": "How do you handle systemic existential anxiety, and what advice would you give me for uncertainty?",
                    "ru": "Как вы справляетесь с глубокой экзистенциальной тревогой и что посоветуете мне в периоды неопределенности?",
                    "fr": "Comment gères-tu l'anxiété existentielle et quel conseil as-tu pour moi ?"
                }
            },
            {
                "c": {
                    "en": "What should I do when I am angry at {companion}?",
                    "ru": "Что мне делать, когда я злюсь на {companion}?",
                    "fr": "Que dois-je faire quand je suis en colère contre {companion} ?"
                },
                "a": {
                    "en": "What is the key to repair and reconciliation after a severe breakdown in communication?",
                    "ru": "Что является ключом к восстановлению доверия и примирению после серьезного кризиса в общении?",
                    "fr": "Quel est le secret de la réconciliation après une rupture de communication ?"
                }
            },
            {
                "c": {
                    "en": "How can I make {role} smile when you are tired?",
                    "ru": "Как мне заставить {role_possessive} улыбнуться, когда ты устал?",
                    "fr": "Comment puis-je faire sourire {role} quand tu es fatigué ?"
                },
                "a": {
                    "en": "How do you define physical and emotional boundary lines to prevent severe burnout in your life?",
                    "ru": "Как вы проводите границы для защиты от сильного эмоционального выгорания в своей жизни?",
                    "fr": "Comment définis-tu les limites pour éviter l'épuisement émotionnel ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite secret code or inside joke between us?",
                    "ru": "Какой наш любимый секретный код или внутренняя шутка?",
                    "fr": "Quel est notre code secret ou notre blague interne préférée ?"
                },
                "a": {
                    "en": "How do inside joke vocabularies protect close relationships from fading across long distances?",
                    "ru": "Как личный язык шуток и воспоминаний защищает близкие отношения от угасания на расстоянии?",
                    "fr": "Comment nos complicités aident-elles à maintenir le lien ?"
                }
            },
            {
                "c": {
                    "en": "What should I do if I can't fall asleep?",
                    "ru": "Что мне делать, если я не могу уснуть?",
                    "fr": "Que dois-je faire si je n'arrive pas à m'endormir ?"
                },
                "a": {
                    "en": "How do you quiet your mind and manage racing thoughts during periods of intense strategic stress?",
                    "ru": "Как вы успокаиваете разум и справляетесь с навязчивыми мыслями в периоды сильного стресса?",
                    "fr": "Comment calmes-tu ton esprit lors de périodes de grand stress ?"
                }
            },
            {
                "c": {
                    "en": "What is the best way to say sorry in our family?",
                    "ru": "Каков самый лучший способ попросить прощения в нашей семье?",
                    "fr": "Quelle est la meilleure façon de demander pardon dans notre famille ?"
                },
                "a": {
                    "en": "What is your systematic approach to validating your mistakes and offering genuine, active amends?",
                    "ru": "Каков ваш систематический подход к признанию собственных ошибок и искреннему исправлению ситуации?",
                    "fr": "Comment abordes-tu la reconnaissance de tes torts et la réparation ?"
                }
            },
            {
                "c": {
                    "en": "What advice did your parents always give you?",
                    "ru": "Какой совет твои родители всегда давали тебе?",
                    "fr": "Quel conseil tes parents te donnaient-ils toujours ?"
                },
                "a": {
                    "en": "What parental standard did you reject, and which one did you consciously embrace?",
                    "ru": "От каких родительских стандартов вы сознательно отказались, а какие решили принять?",
                    "fr": "Quels principes de tes parents as-tu rejetés ou au contraire adoptés ?"
                }
            },
            {
                "c": {
                    "en": "What should we do if we disagree on a game?",
                    "ru": "Что нам делать, если мы спорим во время игры?",
                    "fr": "Que devrions-nous faire si nous ne sommes pas d'accord sur un jeu ?"
                },
                "a": {
                    "en": "How do we preserve high-trust personal connections when we have completely opposing views?",
                    "ru": "Как нам сохранять глубокое доверие при полярно противоположных взглядах?",
                    "fr": "Comment préserver notre lien en ayant des opinions opposées ?"
                }
            },
            {
                "c": {
                    "en": "How do you know when I need a hug?",
                    "ru": "Как ты понимаешь, что мне нужно обнять тебя?",
                    "fr": "Comment sais-tu quand j'ai besoin d'un câlin ?"
                },
                "a": {
                    "en": "What are your silent, non-verbal indicators that communicate emotional distress?",
                    "ru": "Каковы ваши скрытые, невербальные сигналы, говорящие о душевной боли?",
                    "fr": "Quels sont tes signaux silencieux pour exprimer un besoin d'aide ?"
                }
            },
            {
                "c": {
                    "en": "What makes you feel loved at home?",
                    "ru": "Что заставляет тебя чувствовать себя любимым дома?",
                    "fr": "Qu'est-ce qui te fait te sentir aimé à la maison ?"
                },
                "a": {
                    "en": "What is your primary love language, and how can we speak it more effectively as we grow?",
                    "ru": "Каков ваш основной язык любви и как мы можем выражать его более эффективно?",
                    "fr": "Quel est ton langage de l'amour et comment mieux te le témoigner ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite way to spend a quiet evening?",
                    "ru": "Как ты больше всего любишь проводить тихий вечер?",
                    "fr": "Quelle est ta façon préférée de passer une soirée tranquille ?"
                },
                "a": {
                    "en": "What does ideal psychological recovery look like for you after a chaotic week?",
                    "ru": "Как для вас выглядит идеальное психологическое восстановление после хаотичной недели?",
                    "fr": "À quoi ressemble pour toi une récupération psychologique idéale ?"
                }
            },
            {
                "c": {
                    "en": "Who should I ask for help when {role} is busy?",
                    "ru": "Кого мне просить о помощи, когда {role} занят?",
                    "fr": "Qui dois-je appeler à l'aide quand {role} est occupé ?"
                },
                "a": {
                    "en": "What is your backup plan during domestic crises, and how do we divide crisis leadership?",
                    "ru": "Каков ваш план на случай чрезвычайной ситуации и как мы распределяем кризисные роли?",
                    "fr": "Quel est ton plan d'urgence en cas de crise et comment répartir les rôles ?"
                }
            },
            {
                "c": {
                    "en": "What is the best lesson {role} taught me?",
                    "ru": "Каков самый лучший урок, которому меня научил {role}?",
                    "fr": "Quelle est la meilleure leçon que {role} m'ait apprise ?"
                },
                "a": {
                    "en": "What core moral anchor did you seek to establish in me above all else?",
                    "ru": "Какой главный этический ориентир вы стремились заложить во мне превыше всего остального?",
                    "fr": "Quelle valeur morale fondamentale as-tu cherché à me transmettre ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 04: Strengths & Talents",
            "ru": "УРОВЕНЬ 04: Сильные стороны и таланты",
            "fr": "NIVEAU 04 : Forces & Talents"
        },
        "range": "39–50",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite family activity or memory #39 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #39 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #39 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #39 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #39 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #39 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #40 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #40 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #40 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #40 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #40 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #40 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #41 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #41 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #41 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #41 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #41 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #41 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #42 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #42 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #42 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #42 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #42 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #42 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #43 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #43 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #43 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #43 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #43 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #43 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #44 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #44 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #44 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #44 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #44 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #44 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #45 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #45 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #45 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #45 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #45 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #45 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #46 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #46 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #46 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #46 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #46 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #46 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #47 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #47 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #47 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #47 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #47 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #47 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #48 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #48 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #48 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #48 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #48 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #48 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #49 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #49 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #49 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #49 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #49 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #49 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #50 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #50 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #50 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #50 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #50 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #50 a guidé ta vision de la vie de famille ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 05: Hopes & Dreams",
            "ru": "УРОВЕНЬ 05: Надежды и мечты",
            "fr": "NIVEAU 05 : Rêves & Espoirs"
        },
        "range": "51–63",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite family activity or memory #51 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #51 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #51 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #51 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #51 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #51 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #52 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #52 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #52 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #52 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #52 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #52 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #53 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #53 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #53 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #53 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #53 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #53 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #54 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #54 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #54 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #54 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #54 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #54 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #55 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #55 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #55 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #55 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #55 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #55 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #56 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #56 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #56 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #56 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #56 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #56 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #57 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #57 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #57 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #57 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #57 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #57 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #58 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #58 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #58 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #58 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #58 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #58 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #59 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #59 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #59 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #59 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #59 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #59 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #60 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #60 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #60 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #60 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #60 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #60 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #61 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #61 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #61 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #61 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #61 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #61 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #62 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #62 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #62 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #62 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #62 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #62 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #63 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #63 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #63 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #63 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #63 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #63 a guidé ta vision de la vie de famille ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 06: Secrets & Wishes",
            "ru": "УРОВЕНЬ 06: Секреты и желания",
            "fr": "NIVEAU 06 : Secrets & Souhaits"
        },
        "range": "64–75",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite family activity or memory #64 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #64 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #64 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #64 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #64 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #64 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #65 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #65 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #65 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #65 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #65 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #65 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #66 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #66 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #66 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #66 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #66 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #66 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #67 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #67 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #67 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #67 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #67 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #67 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #68 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #68 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #68 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #68 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #68 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #68 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #69 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #69 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #69 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #69 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #69 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #69 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #70 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #70 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #70 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #70 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #70 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #70 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #71 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #71 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #71 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #71 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #71 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #71 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #72 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #72 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #72 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #72 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #72 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #72 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #73 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #73 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #73 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #73 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #73 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #73 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #74 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #74 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #74 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #74 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #74 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #74 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #75 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #75 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #75 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #75 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #75 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #75 a guidé ta vision de la vie de famille ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 07: Wisdom & Lessons",
            "ru": "УРОВЕНЬ 07: Мудрость и уроки",
            "fr": "NIVEAU 07 : Sagesse & Leçons"
        },
        "range": "76–88",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite family activity or memory #76 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #76 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #76 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #76 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #76 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #76 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #77 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #77 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #77 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #77 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #77 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #77 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #78 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #78 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #78 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #78 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #78 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #78 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #79 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #79 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #79 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #79 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #79 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #79 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #80 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #80 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #80 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #80 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #80 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #80 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #81 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #81 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #81 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #81 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #81 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #81 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #82 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #82 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #82 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #82 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #82 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #82 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #83 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #83 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #83 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #83 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #83 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #83 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #84 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #84 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #84 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #84 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #84 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #84 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #85 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #85 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #85 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #85 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #85 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #85 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #86 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #86 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #86 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #86 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #86 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #86 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #87 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #87 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #87 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #87 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #87 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #87 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #88 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #88 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #88 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #88 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #88 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #88 a guidé ta vision de la vie de famille ?"
                }
            }
        ]
    },
    {
        "name": {
            "en": "LEVEL 08: Deep Bonds & Future",
            "ru": "УРОВЕНЬ 08: Глубокие связи и будущее",
            "fr": "NIVEAU 08 : Liens profonds & Futur"
        },
        "range": "89–100",
        "questions": [
            {
                "c": {
                    "en": "What is your favorite family activity or memory #89 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #89 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #89 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #89 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #89 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #89 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #90 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #90 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #90 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #90 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #90 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #90 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #91 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #91 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #91 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #91 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #91 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #91 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #92 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #92 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #92 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #92 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #92 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #92 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #93 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #93 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #93 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #93 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #93 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #93 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #94 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #94 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #94 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #94 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #94 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #94 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #95 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #95 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #95 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #95 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #95 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #95 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #96 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #96 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #96 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #96 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #96 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #96 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #97 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #97 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #97 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #97 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #97 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #97 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #98 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #98 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #98 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #98 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #98 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #98 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #99 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #99 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #99 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #99 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #99 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #99 a guidé ta vision de la vie de famille ?"
                }
            },
            {
                "c": {
                    "en": "What is your favorite family activity or memory #100 between us?",
                    "ru": "Какое твое любимое семейное занятие или воспоминание #100 между нами?",
                    "fr": "Quel est ton souvenir de famille ou moment préféré #100 entre nous ?"
                },
                "a": {
                    "en": "What is a major life advice #100 that has guided your perspective of family life?",
                    "ru": "Какой важный жизненный совет #100 направлял ваше отношение к семейной жизни?",
                    "fr": "Quel conseil de vie important #100 a guidé ta vision de la vie de famille ?"
                }
            }
        ]
    }
]
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
            rules_footer: "And finally... Friendship and family bonds are not killed by time. But by \"we already know everything\".",
            rules_bullets: [
                "One question per meeting — or in chat, wherever it leads.",
                "Both players answer. Or the whole group in a circle.",
                "Honesty must not offend. An answer is a gift, not evidence.",
                "Once per evening you can say \"pass\". Without explanation.",
                "Levels go from easy to difficult. Do not skip them.",
                "And most importantly: this is a way to get to know a person whom you \"already know\".",
                "Two-sided cards: Student and Family decks have a children-friendly side. Click/Tap the card to reveal the Adult-friendly side!"
            ],
            level_select_title: "Select Level 🗺️",
            level_select_desc: "Levels are carefully structured from safe and easy to deep and daring. Do not skip levels!",
            completion_title: "Level Complete! 🎉",
            completion_desc: "You have answered all questions in this level. You can select another level or deck.",
            completion_footer: "\"Friendship is not killed by time. But by 'we already know everything'.\"",
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
            rules_footer: "Et enfin... L'amour et l'amitié ne sont pas tués par le temps. Mais par \"on sait déjà tout\".",
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
            completion_footer: "\"L'amitié n'est pas tuée par le temps. Mais par 'on sait déjà tout'.\"",
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
