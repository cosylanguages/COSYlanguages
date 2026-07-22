import os
from bs4 import BeautifulSoup

ENGLISH_R2_REPLACEMENTS = {
    'how-to-love-your-work.html': [
        "If a society could guarantee a universal basic income, would seeking professional <strong>fulfillment</strong> still be considered a luxury of the wealthy?",
        "If you had realized earlier how much we <strong>overestimate</strong> career promotions, would you have chosen a different profession?",
        "If you were forced to choose, would you rather believe in a unique, predetermined <strong>vocation</strong> and risk misery, or view a job as just a business transaction?",
        "If we could completely suppress the instinct for chasing <strong>socioeconomic standing</strong>, would humanity have accomplished any great achievements?",
        "If the <strong>prestige</strong> of educational institutions were completely eliminated, how would employers identify top talent?",
        "If a workplace were entirely free of <strong>friction</strong>, would it stagnate and lose all capacity for innovation?",
        "If you were offered double your current salary for a role that required constant moral <strong>compromise</strong>, would you accept it?",
        "If a company could not <strong>compensate</strong> for high-stress work with a high salary, would anyone still choose to work there?",
        "If we taught children that they do not need a job to <strong>actualize</strong> their potential, would the global economy collapse?",
        "If our social <strong>obsession</strong> with work disappeared, what would people do with their excess mental energy?"
    ],
    'expert-defend-language-mistakes.html': [
        "If rigid grammar <strong>prescriptivism</strong> were completely abandoned, would it lead to a more inclusive society or the collapse of formal education?",
        "If schools adopted complete linguistic <strong>descriptivism</strong>, would it make it impossible for foreign students to learn a stable standard of language?",
        "If we forced a complete <strong>standardization</strong> of language, would regional cultures and rich historical heritage be destroyed forever?",
        "If a business did not <strong>stigmatize</strong> job applications containing basic spelling errors, would its professional reputation suffer?",
        "If you discovered that most grammar guidelines were entirely <strong>arbitrary</strong> historical accidents, would you stop following them?",
        "If grammar <strong>pedantry</strong> were socially banned, how would elitists show off their social superiority?",
        "If writing formal business documents using <strong>colloquial</strong> slang became the standard in thirty years, would you adapt to it?",
        "If we accepted that there is no 'correct' way to speak, would the concept of linguistic <strong>elitism</strong> disappear entirely?",
        "If a language stopped being corrected by <strong>academies</strong>, would it eventually evolve into absolute chaos?",
        "If our <strong>linguistic</strong> background did not determine our intellectual potential, why would governments invest so heavily in standard education?"
    ],
    'blue-eyes-brown-eyes-experiment.html': [
        "If systemic <strong>discrimination</strong> were a permanent feature of human societies, would it even be possible to build a perfectly fair democracy?",
        "If we did not accept that we have unconscious <strong>privilege</strong>, could we ever make real progress toward social justice?",
        "If you had to choose between national <strong>superiority</strong> and global cooperation during a resource crisis, which would you prioritize?",
        "If a deep sense of <strong>inferiority</strong> were completely cured by therapy, would people lose their primary motivation to achieve success?",
        "If your loyalty to your <strong>in-group</strong> were tested in a survival scenario, would you override your commitment to universal human rights?",
        "If we could eliminate the human tendency to demonize an <strong>out-group</strong>, would political systems become completely stable?",
        "If you were forced to design a society from scratch, would it be possible to do so without introducing some form of class <strong>hierarchy</strong>?",
        "If unconscious <strong>prejudice</strong> were proven to be a vital evolutionary defense mechanism, would it still be morally wrong to act on it?",
        "If we practiced radical <strong>empathy</strong> toward every single person, would we become weak and easily manipulated by malicious actors?",
        "If our <strong>conditioning</strong> were proven to be 100% effective, would the concept of 'free will' be completely ruined?"
    ],
    'guilt-moving-abroad.html': [
        "If chasing individual <strong>self-actualization</strong> were proven to be an act of extreme selfishness, would you still pursue your dreams?",
        "If physical distance made emotional <strong>estrangement</strong> from family members completely inevitable, would you still choose to move abroad?",
        "If you became a highly successful immigrant but remained permanently <strong>guilt-ridden</strong>, would you consider your relocation a success?",
        "If we could cure excessive <strong>nostalgia</strong> with a medical treatment, would you take it to help you build a happier future?",
        "If total social <strong>alienation</strong> were a mandatory trial for every immigrant, would as many people still choose to leave their homes?",
        "If your success in a new city caused intense family <strong>resentment</strong>, would you return to your hometown to restore peace?",
        "If emotional <strong>adaptability</strong> were a static genetic trait that could not be cultivated, would you advise people against relocating?",
        "If a deep sense of cultural <strong>belonging</strong> could only be built during childhood, would adult immigrants ever feel truly at home?",
        "If you had to choose between a life-changing career opportunity abroad and staying with your aging parents, which <strong>sacrifice</strong> would you regret more?",
        "If it were impossible to reconcile an ambitious lifestyle with a traditional family, would you choose <strong>independence</strong> or community?"
    ],
    'brain-discipline-dopamine.html': [
        "If we could completely block the urge for instant <strong>gratification</strong>, would modern mental health issues disappear?",
        "If you understood the biological <strong>dopamine</strong> system perfectly, would you use that knowledge to manipulate other people's choices?",
        "If mental <strong>resistance</strong> were actually a signal of doing important work, would you push through it or seek immediate comfort?",
        "If chronic <strong>procrastination</strong> were treated as a clinical medical disorder, would employers be less likely to hire those who suffer from it?",
        "If human <strong>willpower</strong> were proven to be a mythological concept, would you stop blaming yourself for failing to maintain discipline?",
        "If a week of total sensory <strong>detoxification</strong> were a mandatory requirement for all employees, would corporate productivity increase?",
        "If we protected children from any digital <strong>stimulus</strong> until age sixteen, would they grow up to be more focused and intelligent?",
        "If we made educational software completely <strong>frictionless</strong>, would we reduce the depth of a student's critical thinking?",
        "If rapid biological <strong>satiation</strong> prevents us from ever achieving lasting happiness, would you still strive to accomplish great goals?",
        "If you could not <strong>habituate</strong> your mind to enjoy boring tasks, would you choose to outsource them completely to AI?"
    ],
    'impersonation.html': [
        "If digital <strong>impersonation</strong> became indistinguishable from reality, would we have to abandon video evidence in court completely?",
        "If total <strong>mimicry</strong> of successful leaders were the fastest path to wealth, would you sacrifice your original ideas to achieve it?",
        "If a person's professional <strong>authenticity</strong> were completely irrelevant to their performance, would we still value sincere leaders?",
        "If everyone dropped their social <strong>facade</strong> tomorrow, would society collapse into chaos or transition into a peaceful utopia?",
        "If high <strong>adaptability</strong> were the only requirement for modern survival, would having a stable, 'true' personality become a disadvantage?",
        "If we could eliminate our capacity for self-<strong>deception</strong>, would we become happier or sink into deep despair?",
        "If children were taught social <strong>camouflage</strong> in schools, would we successfully eradicate bullying?",
        "If your professional <strong>persona</strong> were completely separate from your private life, would you feel like you were living a double life?",
        "If a team practiced radical <strong>vulnerability</strong>, would it build deep trust or expose individuals to severe exploitation?",
        "If you discovered that the <strong>incongruence</strong> in your lifestyle was causing your burnout, what major change would you make first?"
    ],
    'nazi-race-propaganda.html': [
        "If a state implemented high-level <strong>indoctrination</strong> from infancy, would any human brain be completely immune to it?",
        "If social media algorithms continue to accelerate the <strong>dehumanization</strong> of opponents, would a civil war become inevitable?",
        "If a society faced extreme economic hardship, would it always construct a <strong>scapegoat</strong> to avoid facing its own failures?",
        "If corporate marketing relied entirely on commercial <strong>pseudoscience</strong>, would you support strict government regulation of ads?",
        "If our evolutionary drive for <strong>conformity</strong> were stronger than logic, would true independent thinking even be possible?",
        "If you had to choose, would you rather face physical <strong>coercion</strong> or silent psychological manipulation that masquerades as free choice?",
        "If the historical <strong>subjugation</strong> of minorities had been actively resisted by the majority, how would our modern world look today?",
        "If media outlets stopped presenting complex social issues as grotesque <strong>caricatures</strong>, would public debates become more rational?",
        "If a passive <strong>bystander</strong> were held legally equivalent to an active participant in systemic injustice, how would citizens behave?",
        "If consumers were proven to share direct <strong>complicity</strong> in environmental destruction, would you support taxing individual purchases based on carbon footprint?"
    ],
    'law-of-attraction.html': [
        "If the power of <strong>manifestation</strong> were proven to be real, would it be classified as a science or remain a spiritual belief?",
        "If we stopped labeling unexplained mental phenomena as <strong>pseudoscience</strong>, what mysteries of the mind would we discover first?",
        "If a positive <strong>mindset</strong> could actually cure physical illnesses, would pharmaceutical companies try to suppress that knowledge?",
        "If you were faced with a sudden crisis, would you rather rely on blind <strong>optimism</strong> or realistic pessimism to survive?",
        "If there were no such thing as a <strong>coincidence</strong>, would that mean our lives are entirely predetermined by the universe?",
        "If we could access the <strong>subconscious</strong> mind of others, would it help us solve global conflicts or destroy our privacy?",
        "If our <strong>cognitive</strong> evolution were moving toward a greater understanding of mental energy, how would we teach children in the future?",
        "If everyone used <strong>visualization</strong> correctly, would we eliminate poverty or simply create a different kind of inequality?",
        "If <strong>synchronicity</strong> were proof that time is not linear, would you live your life differently?",
        "If an abundance of <strong>information</strong> were proven to make us less intelligent, would you choose to disconnect from the internet for a month?"
    ]
}

# Cloned vocabulary group French files
FR_CLONED_R2 = [
    "Si l'excès d'<strong>empathie</strong> s'avérait destructeur pour notre équilibre, devrions-nous apprendre à limiter notre compassion ?",
    "Si vivre de manière totalement <strong>consciente</strong> demandait trop d'énergie, choisiriez-vous de vivre en pilote automatique ?",
    "Si le secret du bonheur résidait dans le <strong>détachement</strong>, devrions-nous cesser de nous attacher aux autres ?",
    "Si nous acceptions notre totale <strong>vulnérabilité</strong>, nos relations deviendraient-elles plus sincères ?",
    "Si nos jugements sur autrui n'étaient que des <strong>projections</strong>, comment pourrions-nous un jour nous comprendre ?",
    "Si notre <strong>subconscient</strong> dirigeait nos vies, le concept de libre arbitre existerait-il encore ?",
    "Si notre <strong>état d'esprit</strong> dictait entièrement notre réalité, serions-nous les seuls responsables de notre malheur ?",
    "Si notre cerveau avait besoin de <strong>biais</strong> pour survivre, serait-il possible de prendre une décision purement objective ?",
    "Si l'<strong>intuition</strong> n'était qu'un traitement subconscient de données passées, devrions-nous toujours lui faire confiance ?",
    "Si l'intelligence artificielle nous dépassait sur le plan <strong>cognitif</strong>, quelle qualité resterait-elle propre à l'être humain ?"
]

# Nostalgia vocabulary group French files
FR_NOSTALGIA_R2 = [
    "Si la <strong>nostalgie</strong> n'était qu'une illusion dorée, devrions-nous cesser de nous remémorer le passé pour avancer ?",
    "Si vous deviez faire un choix crucial, préféreriez-vous accepter <strong>l'ambiguïté</strong> de la vie ou chercher une clarté absolue ?",
    "Si vous changiez de <strong>perspective</strong> sur votre passé, parviendriez-vous à guérir de vos anciens regrets ?",
    "Si une idée ne <strong>résonnait</strong> pas avec vos émotions profondes, seriez-vous capable d'y adhérer par pure logique ?",
    "Si la vérité humaine résidait toujours dans le <strong>paradoxe</strong>, les dogmes simplistes perdraient-ils tout intérêt ?",
    "Si la quête d'<strong>authenticité</strong> menait inévitablement à l'isolement, préféreriez-vous le conformisme social ?",
    "Si nous nous contentions d'un simple <strong>aperçu</strong> superficiel des choses, perdrions-nous notre esprit critique ?",
    "Si vous étiez confronté à un choix moral difficile, feriez-vous confiance à une <strong>paraphrase</strong> ou chercheriez-vous la source ?",
    "Si la <strong>sincérité</strong> totale détruisait les relations sociales, devrions-nous encourager le mensonge poli ?",
    "Si l'<strong>originalité</strong> absolue était impossible à atteindre, devrions-nous nous contenter d'imiter nos modèles ?"
]

# Impersonation French file
FR_IMPERSONATION_R2 = [
    "Si l'intelligence artificielle dépassait l'être humain sur le plan de la <strong>cognition</strong> pure, comment définirions-nous notre propre valeur ?",
    "Si vous deviez cultiver une plus grande <strong>résilience</strong> face aux épreuves de la vie, par quel changement d'habitudes commenceriez-vous ?",
    "Si l'<strong>anxiété</strong> collective continuait d'augmenter dans notre société numérique, comment les gouvernements réagiraient-ils ?",
    "Si notre <strong>subconscient</strong> dictait 90% de nos choix de vie, serions-nous réellement responsables de notre destin ?",
    "Si vous preniez une décision pleinement <strong>consciente</strong> d'ignorer les conventions sociales, quel impact cela aurait-il sur votre entourage ?",
    "Si le <strong>détachement</strong> émotionnel total était nécessaire pour survivre à une crise, accepteriez-vous de perdre une part d'empathie ?",
    "Si vous deviez révéler votre entière <strong>vulnérabilité</strong> à un parfait inconnu pour construire une amitié, le feriez-vous sans hésiter ?",
    "Si notre cerveau mettait en place un <strong>mécanisme</strong> de défense pour bloquer tous les mauvais souvenirs, seriez-vous plus heureux ?",
    "Si vos jugements sur les autres n'étaient en fait qu'une <strong>projection</strong> de vos propres peurs, comment cela changerait-il vos relations ?",
    "Si vous consacriez une heure par jour à une profonde <strong>introspection</strong> sans aucun écran, comment votre état d'esprit évoluerait-il ?"
]

# Russian replacements
RUSSIAN_R2_REPLACEMENTS = {
    'ne-ispravlyay-rech.html': [
        "Если бы постоянное языковое <strong>исправление</strong> в школах было полностью отменено, ухудшилось бы качество общения между людьми?",
        "Если бы мы признали, что языковой <strong>снобизм</strong> разделяет общество, стали бы мы более терпимыми к чужим ошибкам?",
        "Если бы вы могли говорить на любом редком языковом <strong>диалекте</strong>, использовали бы вы его в официальной беседе?",
        "Если бы единая языковая <strong>норма</strong> исчезла, смогли бы люди из разных регионов понимать друг друга через пятьдесят лет?",
        "Если бы всеобщая <strong>грамотность</strong> перестала быть критерием при приеме на работу, как бы работодатели оценивали кандидатов?",
        "Если бы мы могли стереть каждый культурный <strong>предрассудок</strong>, связанный с акцентом, стала бы наша речь более естественной?",
        "Если бы ваш родной язык определял вашу личную <strong>идентичность</strong> на 100%, согласились бы вы выучить новый язык?",
        "Если бы интеллектуальная <strong>элитарность</strong> больше не поощрялась обществом, какие ценности пришли бы ей на смену?",
        "Если бы языковое <strong>разнообразие</strong> ценилось выше, чем стандартизация, как бы изменилась школьная программа?",
        "Если бы абсолютная <strong>естественность</strong> речи стала главным правилом этикета, отказались бы вы от вежливых формальностей?"
    ],
    'syn-vlyubilsya-v-druga.html': [
        "Если бы полное родительское <strong>принятие</strong> зависело только от наших ожиданий, было бы нам легче поддерживать своих детей?",
        "Если бы сексуальная <strong>ориентация</strong> человека никогда не была темой для публичного обсуждения, стало бы наше общество более гармоничным?",
        "Если бы мы могли преодолеть любое общественное <strong>предубеждение</strong> за одно поколение, с какой проблемы вы бы начали?",
        "Если бы глубокое взаимное <strong>доверие</strong> между родителями и детьми было гарантировано природой, нуждались бы мы в психологах?",
        "Если бы каждый семейный <strong>конфликт</strong> решался мирным путем без криков, научились бы дети отстаивать свои границы в реальном мире?",
        "Если бы публичное <strong>осуждение</strong> полностью исчезло из социальных сетей, стали бы люди добрее друг к другу?",
        "Если бы избыточная родительская <strong>эмпатия</strong> мешала ребенку взрослеть, как бы вы установили здоровые границы в общении?",
        "Если бы дружеская <strong>поддержка</strong> была единственным способом справиться с депрессией, ценили бы мы друзей сильнее?",
        "Если бы вы столкнулись со страхом полного <strong>отвержения</strong> со стороны близких, решились бы вы на искренний разговор?",
        "Если бы абсолютная <strong>откровенность</strong> в отношениях была обязательным правилом, разрушило бы это большинство современных семей?"
    ]
}

def fix_file(filepath, questions, r2_header_text):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    r2 = soup.find(class_='round-2') or soup.find(id='s-r2')
    if not r2:
        print(f"Skipping {filepath} (no round-2 found)")
        return

    # Update round header
    header_span = r2.find(class_='round-header').find('span')
    if header_span:
        header_span.string = r2_header_text

    # Locate round-body
    body = r2.find(class_='round-body')
    if not body:
        # Round body could be directly inside if no round-body class exists
        body = r2

    # Find the round-type-badge if it exists, so we can preserve it
    badge = body.find(class_='round-type-badge')
    badge_html = str(badge) if badge else ""

    # Find instructions if they exist
    inst = body.find(class_='vim-instruction')
    inst_html = str(inst) if inst else ""

    # Clear everything inside body
    body.clear()

    # Re-inject badge and instructions if they existed
    if badge_html:
        body.append(BeautifulSoup(badge_html, 'html.parser'))
    if inst_html:
        body.append(BeautifulSoup(inst_html, 'html.parser'))

    # Append the 10 round items
    for q in questions:
        item_html = f"""          <div class="round-item">
            <div class="round-item-main">{q}</div>
          </div>\n"""
        body.append(BeautifulSoup(item_html, 'html.parser'))

    # Save file
    # We must write in exactly beautiful format, but keeping it clean
    with open(filepath, 'w', encoding='utf-8') as f:
        # Use simple str() or soup.prettify() or preserve original encoding
        # Since bs4's str() might add some spacing, we write it back
        f.write(str(soup))
    print(f"Fixed {filepath}")

def run():
    print("Fixing English files...")
    for filename, questions in ENGLISH_R2_REPLACEMENTS.items():
        filepath = os.path.join('events/sessions/mind-matters', filename)
        if os.path.exists(filepath):
            fix_file(filepath, questions, "🟢 Round 2 — Dilemmas / Future")

    print("Fixing French files...")
    french_dir = 'events/fr/sessions/mind-matters'
    for filename in os.listdir(french_dir):
        if filename.endswith('.html') and not filename.startswith('template'):
            filepath = os.path.join(french_dir, filename)
            # Decide vocabulary family
            if filename == 'impersonation.html':
                questions = FR_IMPERSONATION_R2
            elif filename in ['broken-children-grown-bodies.html', 'fear-of-love-control.html', 'finding-the-right-person.html']:
                questions = FR_NOSTALGIA_R2
            else:
                questions = FR_CLONED_R2
            fix_file(filepath, questions, "🟢 Round 2 — Pratique conditionnelle")

    print("Fixing Russian files...")
    for filename, questions in RUSSIAN_R2_REPLACEMENTS.items():
        filepath = os.path.join('events/ru/sessions/mind-matters', filename)
        if os.path.exists(filepath):
            fix_file(filepath, questions, "🟢 Раунд 2 — Условные гипотезы")

if __name__ == '__main__':
    run()
