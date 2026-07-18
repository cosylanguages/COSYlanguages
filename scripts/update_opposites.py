import os
import glob
import re

OPPOSITES_MAP = {
    # English
    "optimism": ("Optimism ≠ Pessimism", "hopefulness and confidence about the future ≠ a tendency to see the worst aspect of things.", "Her natural optimism kept her going, whereas his pessimism made him want to give up."),
    "independence": ("Independence ≠ Dependence", "self-reliance and freedom from outside control ≠ the state of relying on or being controlled by someone else.", "Striving for independence can sometimes lead to a feeling of complete isolation and dependence."),
    "resilience": ("Resilience ≠ Fragility", "the capacity to recover quickly from difficulties ≠ the quality of being easily broken or damaged.", "True resilience is forged by understanding and accepting our own emotional fragility."),
    "vulnerability": ("Vulnerability ≠ Invulnerability", "state of being exposed to the possibility of being attacked or harmed ≠ the state of being impossible to harm or defeat.", "Embracing vulnerability is a far more courageous path than pretending to possess absolute invulnerability."),
    "obsession": ("Obsession ≠ Indifference", "state of being obsessed with someone or something ≠ lack of interest, concern, or sympathy.", "Her passionate devotion bordered on obsession, while his attitude was one of complete indifference."),
    "loyalty": ("Loyalty ≠ Betrayal", "a strong feeling of support or allegiance ≠ the action of betraying one's country, a group, or a person.", "True loyalty is a rare virtue, whereas sudden betrayal can shatter a long friendship."),
    "deception": ("Deception ≠ Honesty", "the action of deceiving someone ≠ the quality of being honest and truthful.", "A web of deception was uncovered, contrasting sharply with her lifelong dedication to honesty."),
    "fame": ("Fame ≠ Obscurity", "the state of being known or talked about by many people ≠ the state of being unknown, inconspicuous, or unimportant.", "Many chase the temporary illusion of fame, only to end up longing for the peaceful comfort of obscurity."),
    "truth": ("Truth ≠ Lie", "that which is true or in accordance with fact or reality ≠ an intentional false statement.", "Always strive to tell the truth, as a single lie can destroy years of built trust."),
    "hope": ("Hope ≠ Despair", "a feeling of expectation and desire for a certain thing to happen ≠ the complete loss or absence of hope.", "Even in the darkest times, hope can light our way and prevent us from falling into absolute despair."),
    "clarity": ("Clarity ≠ Confusion", "the quality of being clear, coherent, and easy to understand ≠ lack of understanding or uncertainty.", "The explanation brought sudden clarity to a situation previously filled with complete confusion."),
    "anxiety": ("Anxiety ≠ Calm", "a feeling of worry, nervousness, or unease ≠ the state of being free from agitation or excitement.", "She worked hard to manage her social anxiety, finding peace in the soothing calm of nature."),
    "comfort": ("Comfort ≠ Pain", "a state of physical ease and freedom from pain ≠ highly unpleasant physical or emotional sensation.", "The gentle music brought immense comfort to those suffering from deep emotional pain."),
    "safe": ("Safe ≠ Dangerous", "protected from or not exposed to danger or risk ≠ able or likely to cause harm or injury.", "Keep your precious belongings in a safe place, far away from any dangerous elements."),
    "active": ("Active ≠ Passive", "engaging or ready to engage in physically energetic pursuits ≠ accepting or allowing what happens or what others do without active response.", "Taking an active role in your own life is much more rewarding than remaining a passive observer."),
    "simple": ("Simple ≠ Complex", "easily understood or done; presenting no difficulty ≠ consisting of many different and connected parts.", "The basic idea was wonderfully simple, but the actual execution turned out to be incredibly complex."),
    "freedom": ("Freedom ≠ Slavery", "the power or right to act, speak, or think as one wants ≠ the state of being a slave or completely controlled.", "They fought courageously to defend their freedom and escape from a lifetime of cruel slavery."),
    "first": ("First ≠ Last", "coming before all others in time, order, or importance ≠ coming after all others in time or order.", "His first attempt was a complete disaster, but his last try turned out to be a brilliant success."),
    "warm": ("Warm ≠ Cold", "having or showing a moderate degree of heat ≠ of or at a low or relatively low temperature.", "The warm fireplace offered a beautiful sanctuary from the freezing cold winter winds outside."),
    "winter": ("Winter ≠ Summer", "the coldest season of the year ≠ the warmest season of the year.", "She loves the quiet snow of winter, whereas he prefers the bright sunshine of summer."),
    "maternal": ("Maternal ≠ Paternal", "relating to a mother ≠ relating to a father.", "She showed a deeply protective maternal instinct, which beautifully complemented his strong paternal guidance."),
    "survival": ("Survival ≠ Extinction", "continuing to live or exist ≠ the state or process of being or becoming extinct.", "Their struggle for survival was a fight against absolute extinction."),
    "diversity": ("Diversity ≠ Uniformity", "including people from a range of backgrounds ≠ the state of being uniform or identical.", "The workplace celebrates cultural diversity instead of enforcing strict corporate uniformity."),
    "illness": ("Illness ≠ Wellness", "a disease or period of sickness affecting the body or mind ≠ the state of being in good health.", "The clinic focuses on healing chronic illness and promoting lifelong wellness."),
    "immortality": ("Immortality ≠ Mortality", "the ability to live forever ≠ the state of being subject to death.", "The vampire enjoys the gift of immortality, while lamenting the mortality of his human friends."),
    "isolation": ("Isolation ≠ Companionship", "the state of being separate or alone ≠ the sharing of life with others.", "She preferred the quiet of isolation, but eventually craved the warmth of companionship."),
    "humility": ("Humility ≠ Pride", "a modest view of one's own importance ≠ a feeling of deep pleasure or satisfaction derived from one's achievements.", "Her genuine humility endeared her to everyone, unlike his boastful pride."),
    "generosity": ("Generosity ≠ Stinginess", "the quality of being kind and sharing ≠ a lack of generosity or unwillingness to share.", "The community was saved by his immense generosity, contrasting with the stinginess of the local merchants."),
    "autonomy": ("Autonomy ≠ Dependence", "the right or condition of self-government; independence ≠ the state of relying on or being controlled by someone else.", "The colony fought for local autonomy to escape their absolute dependence on the mainland."),
    "empathy": ("Empathy ≠ Apathy", "the ability to understand and share the feelings of another ≠ lack of interest, enthusiasm, or concern.", "Showing active empathy builds bridges, whereas cold apathy tears communities apart."),

    # French (Français)
    "liberté": ("La liberté ≠ L'esclavage", "état d'une personne libre, non soumise à un maître ≠ état de celui qui est sous la domination absolue d'un autre.", "Ils se sont battus courageusement pour défendre leur liberté et fuir l'esclavage."),
    "amour": ("L'amour ≠ La haine", "sentiment d'affection et d'attirance intense ≠ sentiment d'hostilité et d'aversion profonde.", "La philosophie nous enseigne que l'amour est une force bien plus puissante et durable que la haine."),
    "tristesse": ("La tristesse ≠ La joie", "état de chagrin, de mélancolie et de déception ≠ émotion de bonheur intense et d'allégresse.", "Les larmes de tristesse ont fini par laisser la place à des éclats de joie sincère."),
    "paix": ("La paix ≠ La guerre", "état d'absence de conflit, de tranquillité et d'accord ≠ conflit armé entre plusieurs nations ou groupes.", "Toutes les nations doivent s'unir pour préserver la paix mondiale et éviter les ravages de la guerre."),
    "silence": ("Le silence ≠ Le bruit", "absence totale de bruit, de parole ou de sons ≠ ensemble de sons ou de vacarmes désagréables.", "Elle apprécie le grand silence de la bibliothèque, loin du bruit incessant de la ville."),
    "matin": ("Le matin ≠ Le soir", "première partie de la journée, lever du jour ≠ dernière partie de la journée, coucher du soleil.", "Elle adore courir dans le parc tôt le matin, alors que lui préfère se détendre le soir."),
    "soleil": ("Le soleil ≠ La lune", "étoile qui éclaire et réchauffe la Terre ≠ astre qui réfléchit la lumière du soleil la nuit.", "Le soleil brille intensément pendant la journée, laissant place à la lune à la tombée de la nuit."),
    "beauté": ("La beauté ≠ La laideur", "qualité de ce qui plaît à l'œil ou à l'esprit ≠ caractère de ce qui est laid, déplaisant ou repoussant.", "L'art nous aide à apprécier la beauté du monde tout en acceptant sa part de laideur."),
    "jeunesse": ("La jeunesse ≠ La vieillesse", "période de la vie entre l'enfance et l'âge mûr ≠ dernière période de la vie humaine, grand âge.", "La jeunesse est le temps des espoirs et des rêves, tandis que la vieillesse apporte la sagesse de l'expérience."),
    "innocence": ("L'innocence ≠ La culpabilité", "état de celui qui n'est pas coupable, pureté ≠ état de celui qui a commis une faute ou un crime.", "Le verdict a enfin prouvé son innocence, balayant ainsi tous les soupçons de culpabilité."),
    "présence": ("La présence ≠ L'absence", "fait d'être là, d'exister dans un lieu précis ≠ fait de ne pas être là, éloignement.", "Sa simple présence rassurait toute l'équipe, tandis que son absence créait un grand vide."),
    "force": ("La force ≠ La faiblesse", "puissance physique ou morale, vigueur ≠ manque de force, fragilité ou défaillance.", "Elle a trouvé la force de surmonter cette épreuve, transformant ainsi sa faiblesse en atout."),
    "pureté": ("La pureté ≠ L'impureté", "qualité de ce qui est pur, sans mélange ni souillure ≠ caractère de ce qui est altéré, mélangé ou impur.", "La pureté de l'air de la montagne contrastait fortement avec l'impureté de la pollution urbaine."),
    "clarté": ("La clarté ≠ La confusion", "qualité de ce qui est clair, facile à comprendre ≠ manque de netteté, désordre d'idées.", "La clarté de ses explications a immédiatement mis fin à la confusion générale de l'assemblée."),
    "courage": ("Le courage ≠ La lâcheté", "force morale pour affronter le danger ou la douleur ≠ manque de courage, recul devant le devoir ou le danger.", "Il a eu le courage de dire la vérité en public, refusant de céder à la lâcheté du silence."),
    "espoir": ("L'espoir ≠ Le désespoir", "sentiment qui porte à espérer avec confiance ≠ perte totale d'espoir, détresse immense.", "Nous devons toujours garder l'espoir d'un avenir meilleur et ne jamais sombrer dans le désespoir."),
    "secret": ("Le secret ≠ La transparence", "chose qui doit être gardée cachée et confidentielle ≠ qualité de ce qui est transparent, accessible et sans mystère.", "Cette affaire est protégée par le secret professionnel, malgré les demandes de transparence du public."),
    "empathie": ("Empathie ≠ Apathie", "capacité de comprendre et partager les sentiments d'autrui ≠ absence d'émotion, d'intérêt ou d'enthousiasme.", "Faire preuve d'empathie permet de créer des liens forts, alors que l'apathie mène à l'isolement."),
    "détachement": ("Détachement ≠ Attachement", "état d'indépendance d'esprit, recul par rapport aux choses ≠ sentiment d'affection et de dépendance.", "Trouver le bon équilibre entre le détachement philosophique et l'attachement émotionnel est un art difficile."),
    "vulnérabilité": ("Vulnérabilité ≠ Invulnérabilité", "caractère de ce qui est fragile et exposé aux blessures ≠ état de ce qui ne peut être blessé ou vaincu.", "Reconnaître sa propre vulnérabilité est une preuve de courage, bien loin d'une fausse invulnérabilité."),
    "conscient": ("Conscient ≠ Inconscient", "qui a la conscience de ses pensées et actes ≠ qui a perdu la conscience ou agit sans réflexion.", "Elle a pris une décision pleinement consciente, évitant ainsi un choix impulsif et inconscient."),

    # Spanish (Español)
    "aceptación": ("La aceptación ≠ El rechazo", "acción y efecto de aceptar o admitirse ≠ acción y efecto de rechazar o no admitir.", "La aceptación de la diversidad es fundamental para evitar el rechazo social."),
    "valentía": ("La valentía ≠ La cobardía", "determinación para enfrentarse a situaciones difíciles o peligrosas ≠ falta de valor y pusilanimidad ante el peligro.", "Demostró una gran valentía al defender sus derechos frente a la cobardía de los demás."),
    "distancia": ("La distancia ≠ La cercanía", "espacio o intervalo de lugar o de tiempo que separa cosas o personas ≠ cualidad de estar cerca, proximidad.", "La distancia física no disminuye la hermosa cercanía emocional de su larga amistad."),
    "olvido": ("El olvido ≠ El recuerdo", "pérdida de memoria o cese del pensamiento sobre algo ≠ imagen del pasado que se conserva en la memoria.", "Con el paso de los años, su dolor cayó en el olvido, dejando solo un hermoso recuerdo."),
    "ausencia": ("La ausencia ≠ La presencia", "falta de presencia de alguien o algo en un lugar ≠ hecho de estar presente o existir en un sitio.", "Su triste ausencia en la fiesta se hizo notar a pesar de la presencia de muchos invitados."),
    "dolor": ("El dolor ≠ El placer", "sensación molesta y aflictiva de una parte del cuerpo o del alma ≠ sensación agradable o satisfacción.", "Aceptar el dolor es parte de la vida, tanto como disfrutar del placer de las cosas sencillas."),
    "tristeza": ("La tristeza ≠ La alegría", "estado de ánimo melancólico y afligido ≠ sentimiento de placer y júbilo que se manifiesta con risas.", "La tristeza que sentía al despedirse se transformó en alegría al verlos regresar sanos y salvos."),
    "frío": ("El frío ≠ El calor", "temperatura baja o sensación de falta de calor ≠ temperatura elevada o sensación térmica cálida.", "El intenso frío de la noche contrastaba con el agradable calor de la chimenea encendida."),
    "verano": ("El verano ≠ El invierno", "la estación más calurosa del año ≠ la estación más fría del año.", "Durante el verano adoran nadar en el mar, mientras que en invierno prefieren esquiar en la montaña."),
    "vejez": ("La juventud ≠ La vejez", "período de la vida entre la infancia y la edad madura ≠ período de la vida humana de edad avanzada.", "La juventud se caracteriza por la energía del aprendizaje, mientras que la vejez aporta la calma de la experiencia."),
    "nostalgia": ("La nostalgia ≠ La modernidad", "sentimiento de pena por la lejanía o el tiempo pasado ≠ cualidad de lo moderno o actual.", "Sintió una profunda nostalgia por el pueblo antiguo, un contraste total con la fría modernidad."),
    "amigo": ("El amigo ≠ El enemigo", "persona que tiene una relación de amistad con otra ≠ persona que tiene una actitud de hostilidad o antipatía.", "Un verdadero amigo te apoyará siempre, defendiéndote de los ataques de cualquier enemigo."),

    # Italian (Italiano)
    "inizio": ("La fine ≠ L'inizio", "conclusione o parte terminale di qualcosa ≠ la parte con cui inizia una cosa, principio.", "La fine di un lungo percorso professionale ha segnato l'inizio di una nuova e splendida avventura."),
    "solitudine": ("La solitudine ≠ La compagnia", "stato di chi vive solo o si sente isolato ≠ il fatto di stare insieme ad altre persone.", "Apprezza la tranquilla solitudine per studiare, ma adora la calorosa compagnia degli amici la sera."),
    "estate": ("L'estate ≠ L'inverno", "la stagione più calda dell'anno ≠ la stagione più fredda dell'anno.", "In estate adoro nuotare nel mare azzurro, mentre in inverno preferisco guardare la neve che cade."),
    "mare": ("Il mare ≠ La terra", "grande distesa di acqua salata ≠ la terraferma o suolo.", "Il mare d'inverno ha un fascino malinconico unico, un forte contrasto con la calda terra estiva."),
    "schiavitù": ("La libertà ≠ La schiavitù", "stato di chi è libero e indipendente ≠ condizione di chi è privato della libertà personale e sottomesso.", "Hanno lottato per secoli per difendere la propria libertà e fuggire da una dura schiavitù."),
    "luce": ("La luce ≠ L'oscurità", "radiazione che rende visibili gli oggetti ≠ assenza di luce, buio fitto.", "Una piccola candela è sufficiente per portare la luce e sconfiggere l'oscurità della stanza."),
    "gioia": ("La gioia ≠ La tristezza", "intensa emozione di felicità e allegria ≠ stato d'animo malinconico e doloroso.", "La gioia di stare insieme ha cancellato in un attimo la tristezza dei mesi di lontananza."),
    "felicità": ("La felicità ≠ L'infelicità", "stato di totale benessere e soddisfazione ≠ stato di profonda insoddisfazione e dolore.", "La felicità non è una meta lontana, ma la capacità di superare l'infelicità quotidiana."),

    # Russian (Русский)
    "свобода": ("Свобода ≠ Рабство", "состояние того, кто свободен и независим ≠ состояние полной зависимости от хозяина.", "Они отважно боролись за свою свободу, чтобы навсегда покончить с рабством."),
    "мечта": ("Мечта ≠ Реальность", "заветное желание, предмет стремлений ≠ объективно существующая действительность.", "Иногда наша мечта настолько прекрасна, что суровая реальность кажется нам невыносимой."),
    "юность": ("Юность ≠ Старость", "период жизни между детством и зрелостью ≠ заключительный период жизни, преклонный возраст.", "Юность полна ярких надежд и энергии, в то время как старость приносит покой и мудрость опыта."),
    "секрет": ("Секрет ≠ Явность", "тайна, то, что скрывается от других ≠ то, что очевидно и открыто для всех.", "Этот секрет должен оставаться между нами, несмотря на стремление общества к полной явности."),
    "улыбка": ("Улыбка ≠ Гримаса", "мимика лица, показывающая расположение и радость ≠ искажение лица, выражающее недовольство или боль.", "Ее искренняя улыбка мгновенно сменила недовольную гримасу на лицах уставших собеседников."),
    "забота": ("Забота ≠ Равнодушие", "внимание, уход и беспокойство о ком-либо ≠ полное отсутствие интереса и участия.", "Искренняя забота близких помогла ему победить болезнь, растопив холодное равнодушие врачей."),
    "любовь": ("Любовь ≠ Ненависть", "глубокое чувство привязанности и симпатии ≠ сильное чувство вражды и неприязни.", "Истинная любовь способна творить чудеса и побеждать даже самую слепую ненависть."),
    "доверие": ("Доверие ≠ Подозрение", "уверенность в честности и верности кого-либо ≠ сомнение в честности и добрых намерениях.", "Взаимное доверие укрепляет дружбу, в то время как постоянное подозрение способно разрушить её."),
    "шёпот": ("Шёпот ≠ Крик", "очень тихая речь без участия голосовых связок ≠ очень громкий, резкий звук голоса.", "В тишине старой библиотеки их тихий шёпот внезапно прервал чей-то громкий крик."),
    "правда": ("Правда ≠ Ложь", "то, что соответствует действительности ≠ намеренное искажение истины, обман.", "Всегда лучше горькая правда, чем красивая ложь, которая рано или поздно раскроется."),
    "детство": ("Детство ≠ Взрослость", "начальный период жизни человека от рождения до юности ≠ состояние зрелости и самостоятельности.", "Счастливое детство закладывает прочный фундамент, помогающий нам пережить трудности во взрослости.")
}

def normalize_word(w):
    w = w.strip().lower()
    # Strip common articles
    for art in ["l'", "la ", "le ", "les ", "el ", "la ", "los ", "las ", "un ", "une ", "il ", "lo ", "i ", "gli ", "le ", "un'", "una ", "η ", "το ", "ο "]:
        if w.startswith(art):
            w = w[len(art):]
            break
    # Remove leading/trailing non-alphabetic/cyrillic characters
    w = re.sub(r"^[^a-zA-Zа-яА-ЯёЁ]+", "", w)
    w = re.sub(r"[^a-zA-Zа-яА-ЯёЁ]+$", "", w)
    return w.strip().lower()

def escape_js(text):
    return text.replace("'", "\\'")

def extract_vocab_cards(content):
    cards = []
    idx = 0
    while True:
        match = re.search(r'<div\s+class=["\']vocab-card["\']\s*>', content[idx:])
        if not match:
            break
        start_pos = idx + match.start()
        nesting = 0
        end_pos = -1
        curr = start_pos
        while curr < len(content):
            if content[curr:curr+4] == '<div':
                nesting += 1
                curr += 4
            elif content[curr:curr+6] == '</div>':
                nesting -= 1
                if nesting == 0:
                    end_pos = curr + 6
                    break
                curr += 6
            else:
                curr += 1
        if end_pos != -1:
            cards.append((start_pos, end_pos))
            idx = end_pos
        else:
            idx = start_pos + len(match.group(0))
    return cards

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all vocab-card blocks precisely
    cards = extract_vocab_cards(content)
    if not cards:
        return False

    changed = False
    new_content = ""
    last_idx = 0

    for start_pos, end_pos in cards:
        new_content += content[last_idx:start_pos]
        card_content = content[start_pos:end_pos]

        # Extract vocab-word
        word_match = re.search(r'<div\s+class=["\']vocab-word["\']>(.*?)</div>', card_content, re.DOTALL)
        if word_match:
            orig_word = word_match.group(1).strip()
            norm_w = normalize_word(orig_word)

            if norm_w in OPPOSITES_MAP:
                new_word, new_def, new_example = OPPOSITES_MAP[norm_w]

                # Replace vocab-word
                card_content = re.sub(
                    r'<div\s+class=["\']vocab-word["\']>(.*?)</div>',
                    f'<div class="vocab-word">{new_word}</div>',
                    card_content,
                    flags=re.DOTALL
                )

                # Replace vocab-def
                card_content = re.sub(
                    r'<div\s+class=["\']vocab-def["\']>(.*?)</div>',
                    f'<div class="vocab-def">{new_def}</div>',
                    card_content,
                    flags=re.DOTALL
                )

                # Replace vocab-example
                card_content = re.sub(
                    r'<div\s+class=["\']vocab-example["\']>(.*?)</div>',
                    f'<div class="vocab-example">{new_example}</div>',
                    card_content,
                    flags=re.DOTALL
                )

                # Update addToDict button
                card_content = re.sub(
                    r'COSY\.addToDict\(\{word:[\'\"].*?[\'\"],\s*definition:[\'\"].*?[\'\"],\s*example:[\'\"].*?[\'\"]\},\s*this\)',
                    f"COSY.addToDict({{word:'{escape_js(new_word)}', definition:'{escape_js(new_def)}', example:'{escape_js(new_example)}'}}, this)",
                    card_content,
                    flags=re.DOTALL
                )

                changed = True

        new_content += card_content
        last_idx = end_pos

    new_content += content[last_idx:]

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# List of files to process
files_to_process = (
    glob.glob('events/sessions/*.html') +
    glob.glob('events/fr/sessions/*.html') +
    glob.glob('events/ru/sessions/*.html') +
    glob.glob('templates/events/*.html')
)

processed_count = 0
for f in files_to_process:
    if process_file(f):
        processed_count += 1

print(f"Successfully processed {processed_count} session/template HTML files!")
