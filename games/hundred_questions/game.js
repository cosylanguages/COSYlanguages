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

    window.HUNDRED_QUESTIONS_DECKS = {
        friends: DECK_FRIENDS,
        teacher: DECK_TEACHER,
        interview: DECK_INTERVIEW
    };

    // Core UI and State Controller Logic
    let state = {
        deckKey: 'friends', // 'friends', 'teacher', 'interview'
        lang: 'en',        // 'en', 'ru', 'fr'
        currentLevelIdx: 0,
        currentQuestionIdx: 0,
        passUsed: false
    };

    const UI_TEXTS = {
        en: {
            setup_title: "100 Questions 💬",
            setup_desc: "A game of deep conversations, genuine interest, and absolute honesty. Play with friends, partners, students, or colleagues.",
            deck_lbl: "Select Deck",
            lang_lbl: "Select Language",
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
            rules_footer: "And finally... Friendship is not killed by time. But by \"we already know everything\".",
            rules_bullets: [
                "One question per meeting — or in chat, wherever it leads.",
                "Both players answer. Or the whole group in a circle.",
                "Honesty must not offend. An answer is a gift, not evidence.",
                "Once per evening you can say \"pass\". Without explanation.",
                "Levels go from easy to difficult. Do not skip them.",
                "And most importantly: this is not a friendship test.",
                "It is a way to get to know a person whom you \"already know\"."
            ],
            level_select_title: "Select Level 🗺️",
            level_select_desc: "Levels are carefully structured from safe and easy to deep and daring. Do not skip levels!",
            completion_title: "Level Complete! 🎉",
            completion_desc: "You have answered all questions in this level. You can select another level or deck.",
            completion_footer: "\"Friendship is not killed by time. But by 'we already know everything'.\"",
            q_of: "of",
            q_lbl: "Question"
        },
        ru: {
            setup_title: "100 Вопросов 💬",
            setup_desc: "Игра для глубоких разговоров, искреннего интереса и абсолютной честности. Играйте с друзьями, близкими, учениками или коллегами.",
            deck_lbl: "Выберите колоду",
            lang_lbl: "Язык вопросов",
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
            rules_footer: "И последнее... Дружбу убивает не время. А «мы и так всё знаем».",
            rules_bullets: [
                "Один вопрос за встречу — или в переписке, куда занесёт.",
                "Отвечают оба. Или вся компания по кругу.",
                "На честность нельзя обижаться. Ответ — подарок, а не улика.",
                "Раз за вечер можно сказать «пропускаю». Без объяснений.",
                "Уровни идут от лёгких к трудным. Не перескакивайте.",
                "И главное: это не проверка дружбы.",
                "Это способ узнать человека, которого вы «и так знаете»."
            ],
            level_select_title: "Выберите уровень 🗺️",
            level_select_desc: "Уровни идут от легких к трудным. Рекомендуется проходить их последовательно!",
            completion_title: "Уровень пройден! 🎉",
            completion_desc: "Вы ответили на все вопросы этого уровня. Вы можете выбрать другой уровень или колоду.",
            completion_footer: "«Дружбу убивает не время. А 'мы и так всё знаем'.»",
            q_of: "из",
            q_lbl: "Вопрос"
        },
        fr: {
            setup_title: "100 Questions 💬",
            setup_desc: "Un jeu de conversations profondes, d'intérêt sincère et d'honnêteté absolue. Jouez avec des amis, des partenaires, des élèves ou des collègues.",
            deck_lbl: "Sélectionner le jeu",
            lang_lbl: "Sélectionner la langue",
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
            rules_footer: "Et enfin... L'amitié n'est pas tuée par le temps. Mais par \"on sait déjà tout\".",
            rules_bullets: [
                "Une question par rencontre — ou par message, là où le vent vous mène.",
                "Les deux répondent. Ou tout le groupe à tour de rôle.",
                "L'honnêteté ne doit pas blesser. Une réponse est un cadeau, pas une preuve.",
                "Une fois par soirée, vous pouvez dire « je passe ». Sans explication.",
                "Les niveaux vont du plus facile au plus difficile. Ne sautez pas les étapes.",
                "Et surtout : ce n'est pas un test d'amitié.",
                "C'est une façon de découvrir une personne que vous « connaissez déjà »."
            ],
            level_select_title: "Sélectionner le niveau 🗺️",
            level_select_desc: "Les niveaux sont structurés du plus simple au plus profond. Ne sautez pas les étapes !",
            completion_title: "Niveau terminé ! 🎉",
            completion_desc: "Vous avez répondu à toutes les questions de ce niveau. Vous pouvez choisir un autre niveau ou un autre jeu.",
            completion_footer: "\"L'amitié n'est pas tuée par le temps. Mais par 'on sait déjà tout'.\"",
            q_of: "sur",
            q_lbl: "Question"
        }
    };

    function esc(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');

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
                        ${UI_TEXTS[state.lang].deck_lbl}
                    </label>
                    <select class="styled-sel" id="s-deck" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: var(--card-bg); color: var(--ink); font-size: 1rem; cursor: pointer;">
                        <option value="friends" ${state.deckKey === 'friends' ? 'selected' : ''}>👥 ${esc(window.HUNDRED_QUESTIONS_DECKS.friends.title[state.lang])}</option>
                        <option value="teacher" ${state.deckKey === 'teacher' ? 'selected' : ''}>🎓 ${esc(window.HUNDRED_QUESTIONS_DECKS.teacher.title[state.lang])}</option>
                        <option value="interview" ${state.deckKey === 'interview' ? 'selected' : ''}>💼 ${esc(window.HUNDRED_QUESTIONS_DECKS.interview.title[state.lang])}</option>
                    </select>
                </div>

                <div class="setup-field" style="margin-bottom: 2rem;">
                    <label style="font-weight: 700; margin-bottom: 0.5rem; display: block; font-size: 0.9rem; color: var(--ink-muted); text-transform: uppercase;">
                        ${UI_TEXTS[state.lang].lang_lbl}
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

        // Add change listener to s-lang to dynamically update setup texts
        const selectLang = document.getElementById('s-lang');
        const selectDeck = document.getElementById('s-deck');
        if (selectLang) {
            selectLang.addEventListener('change', () => {
                state.lang = selectLang.value;
                state.deckKey = selectDeck.value;
                renderSetup();
            });
        }
        if (selectDeck) {
            selectDeck.addEventListener('change', () => {
                state.deckKey = selectDeck.value;
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
            if (selectLang) state.lang = selectLang.value;
            if (selectDeck) state.deckKey = selectDeck.value;

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
            COSY_GAME.renderQuestion();
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

            const qText = q[state.lang] || q['en'] || '...';

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

                    <div class="game-card" style="position: relative; background: var(--card-bg, rgba(255,255,255,0.7)); backdrop-filter: blur(12px); border: 2px solid var(--teal); border-radius: 24px; padding: 2.5rem 1.5rem; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;">
                        <div style="position: absolute; top: 1rem; left: 1.5rem; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint); letter-spacing: 0.05em;">
                            ${esc(deck.title[state.lang])}
                        </div>

                        <div style="font-size: 1.5rem; font-weight: 700; line-height: 1.5; color: var(--ink); margin: 1.5rem 0 2rem;">
                            "${esc(qText)}"
                        </div>

                        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 1rem;">
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
            const qText = q[state.lang] || q['en'] || '';
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
                COSY_GAME.renderQuestion();
            }
        },

        nextQuestion() {
            const deck = window.HUNDRED_QUESTIONS_DECKS[state.deckKey];
            const level = deck.levels[state.currentLevelIdx];
            if (state.currentQuestionIdx < level.questions.length - 1) {
                state.currentQuestionIdx++;
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
