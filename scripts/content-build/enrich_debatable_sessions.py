import os
from bs4 import BeautifulSoup

MAPPINGS = {
    "assisted-dying.html": {
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Opponents argue that euthanasia leads to a state of moral <strong>subjugation</strong> where life's value is decided by external panels. <br/><strong>B:</strong> Proponents argue that individual <strong>autonomy</strong> should always be the ultimate authority in personal end-of-life choices.</div>
<div class="round-item-personal">★ Personal angle: How important is total <strong>autonomy</strong> to you when making critical life decisions?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Advances in medicine could find treatments for currently <strong>incurable</strong> conditions, making assisted dying a premature decision. <br/><strong>B:</strong> Refusing to allow choice forces patients with <strong>incurable</strong> illnesses to suffer in pain while waiting for hypothetical cures.</div>
<div class="round-item-personal">★ Personal angle: Do you believe medical science will eventually find a cure for almost all human diseases?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The normalization of <strong>euthanasia</strong> might make vulnerable patients feel like a burden to their families. <br/><strong>B:</strong> Banning <strong>euthanasia</strong> forces families to watch their loved ones deteriorate in agony, causing deep trauma.</div>
<div class="round-item-personal">★ Personal angle: Do you find it difficult to ask for help from your family when you are struggling?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> True <strong>compassion</strong> means improving hospice and psychological support rather than facilitating early death. <br/><strong>B:</strong> Active end-of-life choices are a form of <strong>compassion</strong> for patients with rare, untreatable neurological pain.</div>
<div class="round-item-personal">★ Personal angle: What does "compassion" look like to you in daily family or community relationships?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Slippery-slope arguments suggest that once <strong>legislation</strong> is passed, the criteria will inevitably expand. <br/><strong>B:</strong> Keeping assisted dying illegal under current <strong>legislation</strong> creates a black market and forces wealthy patients to travel abroad for care.</div>
<div class="round-item-personal">★ Personal angle: Do you think laws should be strictly rigid, or should they be flexible to adapt to personal situations?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> No medical <strong>safeguard</strong> is perfect; mistakes or subtle pressure from heirs could lead to irreversible tragedies. <br/><strong>B:</strong> Overly strict <strong>safeguard</strong> regulations violate a person's individual liberty and body ownership rights.</div>
<div class="round-item-personal">★ Personal angle: How do you usually handle situations where you feel subtle pressure or influence from others?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Patients with <strong>terminal</strong> illnesses might experience temporary depression, leading to irrational choices. <br/><strong>B:</strong> Forcing a <strong>terminal</strong> patient to endure a slow natural death can deepen their existential despair.</div>
<div class="round-item-personal">★ Personal angle: When you feel down or overwhelmed, what is your most trusted way to find clarity and comfort?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> If <strong>palliative</strong> care were universally excellent, the demand for assisted dying would drastically decrease. <br/><strong>B:</strong> Excellent <strong>palliative</strong> options are often unequally distributed, leaving low-income patients with minimal support.</div>
<div class="round-item-personal">★ Have you or your family ever experienced high-quality, comforting medical or elder care?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Society might begin to place less value on human <strong>dignity</strong> in its most frail and dependent stages. <br/><strong>B:</strong> A society that bans choice devalues the <strong>dignity</strong> of self-determination and individual conscience.</div>
<div class="round-item-personal">★ How can we as a society show greater respect and care for our elderly and frail citizens?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Establishing genuine, uncoerced <strong>consent</strong> is extremely difficult when a patient is in severe pain. <br/><strong>B:</strong> Denying choice assumes that suffering patients lack the mental capacity to give rational <strong>consent</strong> about their own bodies.</div>
<div class="round-item-personal">★ In your opinion, is pain a purely physical sensation, or is it deeply connected to our emotional state?</div>
</div></div>
"""
    },
    "l-aide-active-a-mourir.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Débat</div><div class="vim-instruction">Analysez les avantages des deux perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> L'<strong>autonomie</strong> individuelle exige que chaque personne puisse décider de sa fin de vie. <br/><strong>B:</strong> La protection de la vie par la société doit prévaloir sur les volontés individuelles.</div>
<div class="round-item-personal">★ Angle personnel : Quelle importance accordez-vous à l'<strong>autonomie</strong> dans vos choix de vie ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Permettre l'aide active à mourir pour les maladies <strong>incurables</strong> est un acte d'humanité. <br/><strong>B:</strong> Les soins de fin de vie peuvent soulager les douleurs des patients atteints de pathologies <strong>incurables</strong>.</div>
<div class="round-item-personal">★ Angle personnel : Pensez-vous que la lutte contre la souffrance doit dépasser les règles strictes ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Légaliser l'<strong>euthanasie</strong> permet d'abréger des souffrances physiques intolérables. <br/><strong>B:</strong> L'accompagnement naturel en unité de soins permet de vivre sereinement ses derniers moments.</div>
<div class="round-item-personal">★ Angle personnel : Avez-vous déjà été confronté à la fin de vie d'un proche ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> La vraie <strong>compassion</strong> consiste à respecter la volonté d'un patient qui souhaite mourir. <br/><strong>B:</strong> La <strong>compassion</strong> s'exprime par une présence humaine et des soins constants jusqu'à la fin.</div>
<div class="round-item-personal">★ Angle personnel : Comment définiriez-vous la <strong>compassion</strong> en médecine ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Une <strong>législation</strong> claire encadre strictement les pratiques de fin de vie. <br/><strong>B:</strong> Modifier la <strong>législation</strong> actuelle risque d'ouvrir la voie à des dérives éthiques majeures.</div>
<div class="round-item-personal">★ Angle personnel : Faites-vous confiance à la loi pour régler ces choix personnels ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Des protocoles médicaux stricts constituent un <strong>garde-fou</strong> efficace contre tout abus. <br/><strong>B:</strong> L'éthique médicale traditionnelle offre le meilleur <strong>garde-fou</strong> pour protéger les plus fragiles.</div>
<div class="round-item-personal">★ Angle personnel : Quel <strong>garde-fou</strong> vous semble le plus indispensable ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Pour les malades en phase <strong>terminale</strong>, choisir l'heure de sa mort offre une paix d'esprit. <br/><strong>B:</strong> La phase <strong>terminale</strong> peut être un moment de rapprochement familial précieux.</div>
<div class="round-item-personal">★ Angle personnel : Avoir le contrôle sur votre avenir vous apporte-t-il de la sérénité ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Associer l'aide active aux soins de type <strong>palliatif</strong> garantit une prise en charge complète. <br/><strong>B:</strong> Développer le réseau <strong>palliatif</strong> permet de répondre dignement à toutes les souffrances.</div>
<div class="round-item-personal">★ Angle personnel : Pensez-vous que notre société investit assez dans l'accompagnement <strong>palliatif</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Choisir sa mort permet de préserver sa <strong>dignité</strong> d'être humain jusqu'au bout. <br/><strong>B:</strong> La <strong>dignité</strong> réside dans le respect du cycle naturel de la vie et de la vulnérabilité.</div>
<div class="round-item-personal">★ Angle personnel : Que signifie pour vous mourir dans la <strong>dignité</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Le <strong>consentement</strong> explicite du patient garantit que la décision lui appartient totalement. <br/><strong>B:</strong> Le <strong>consentement</strong> peut être altéré par la douleur ou la peur d'être un fardeau.</div>
<div class="round-item-personal">★ Angle personnel : Dans quelles conditions le <strong>consentement</strong> est-il vraiment libre ?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Débat</div><div class="vim-instruction">Analysez les inconvénients des deux perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Certains craignent que l'autorisation de mourir ne porte atteinte à l'<strong>autonomie</strong> réelle des personnes vulnérables sous pression. <br/><strong>B:</strong> L'<strong>autonomie</strong> individuelle doit rester la valeur suprême lorsqu'un patient fait face à une souffrance intolérable.</div>
<div class="round-item-personal">★ Angle personnel : Dans quelle mesure l'<strong>autonomie</strong> individuelle est-elle importante pour vous dans les décisions de santé ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Les progrès de la médecine pourraient trouver des traitements pour des maladies actuellement considérées comme <strong>incurables</strong>. <br/><strong>B:</strong> Refuser le choix oblige les patients atteints de maladies <strong>incurables</strong> à souffrir en attendant des remèdes hypothétiques.</div>
<div class="round-item-personal">★ Angle personnel : Pensez-vous que la science vaincra un jour toutes les maladies <strong>incurables</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> La normalisation de l'<strong>euthanasie</strong> pourrait inciter les patients vulnérables à se sentir comme un fardeau pour leur famille. <br/><strong>B:</strong> Interdire l'<strong>euthanasie</strong> active contraint les familles à assister à l'agonie de leurs proches, causant un traumatisme profond.</div>
<div class="round-item-personal">★ Est-il difficile pour vous de demander de l'aide à vos proches lors d'une épreuve ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> La vraie <strong>compassion</strong> consiste à améliorer les soins de fin de vie plutôt qu'à faciliter une mort précoce. <br/><strong>B:</strong> Permettre le choix est un acte de pure <strong>compassion</strong> pour les patients souffrant de douleurs neurologiques intraitables.</div>
<div class="round-item-personal">★ Comment s'exprime la <strong>compassion</strong> au sein de votre communauté ou de votre famille ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Les opposants soulignent le risque de dérive dès lors que la première <strong>législation</strong> est adoptée. <br/><strong>B:</strong> L'absence de <strong>législation</strong> claire pousse les patients fortunés à se rendre à l'étranger pour obtenir de l'aide.</div>
<div class="round-item-personal">★ Pensez-vous que la <strong>législation</strong> doit s'adapter à chaque situation particulière ou rester stricte ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Aucun <strong>garde-fou</strong> médical n'est infaillible ; des pressions subtiles ou des erreurs de diagnostic peuvent mener à des tragédies irréversibles. <br/><strong>B:</strong> Des <strong>garde-fous</strong> trop rigides privent les patients de leur liberté fondamentale de choisir.</div>
<div class="round-item-personal">★ Comment réagissez-vous face à des pressions ou influences subtiles de votre entourage ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Les patients en phase <strong>terminale</strong> peuvent traverser des périodes de dépression temporaire, faussant leur jugement. <br/><strong>B:</strong> Forcer un malade en phase <strong>terminale</strong> à endurer une agonie lente aggrave son désespoir existentiel.</div>
<div class="round-item-personal">★ Quand vous vous sentez dépassé par les événements, comment retrouvez-vous la clarté d'esprit ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Si l'accès aux soins <strong>palliatifs</strong> était universel et excellent, la demande d'aide active à mourir diminuerait fortement. <br/><strong>B:</strong> Les structures de type <strong>palliatif</strong> sont souvent inégalement réparties, laissant les patients modestes sans soutien adéquat.</div>
<div class="round-item-personal">★ Avez-vous déjà constaté des différences de qualité dans les services <strong>palliatifs</strong> ou de santé ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> La société risquerait de dévaloriser la <strong>dignité</strong> humaine dans ses phases de plus grande vulnérabilité et dépendance. <br/><strong>B:</strong> Interdire le choix bafoue la <strong>dignité</strong> du patient et sa liberté de conscience.</div>
<div class="round-item-personal">★ Comment notre société peut-elle montrer un plus grand respect de la <strong>dignité</strong> de ses aînés ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Obtenir un <strong>consentement</strong> libre et éclairé est extrêmement difficile lorsque le patient est accablé par une souffrance physique extrême. <br/><strong>B:</strong> Refuser l'aide suppose que les patients ne sont pas aptes à donner leur <strong>consentement</strong> concernant leur propre corps.</div>
<div class="round-item-personal">★ Selon vous, la souffrance altère-t-elle notre capacité à donner un <strong>consentement</strong> rationnel ?</div>
</div></div>
"""
    },
    "meta-subscriptions.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A paid <strong>subscription</strong> model allows social networks to rely less on creepy targeted ads. <br/><strong>B:</strong> Free ad-supported networks remain accessible to users of all socio-economic backgrounds.</div>
<div class="round-item-personal">★ Would you pay for a monthly <strong>subscription</strong> to your favorite social platform?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Paying for service gives users more control over content <strong>personalization</strong>. <br/><strong>B:</strong> Public algorithms provide a shared cultural experience rather than isolated, hyper-filtered bubbles.</div>
<div class="round-item-personal">★ Do you enjoy platform algorithms that guess your tastes, or do you prefer zero <strong>personalization</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Subscription models offer strict user <strong>privacy</strong> and zero data-harvesting. <br/><strong>B:</strong> Free networks are fine as long as they warn users about standard data <strong>privacy</strong> rules.</div>
<div class="round-item-personal">★ How much do you actively worry about your online <strong>privacy</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Direct subscription fee <strong>revenue</strong> keeps companies focused on improving product quality. <br/><strong>B:</strong> Advertising <strong>revenue</strong> allows platforms to stay free and scale up their services.</div>
<div class="round-item-personal">★ Do you think tech companies earn too much <strong>revenue</strong> from selling user data?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Platforms can share subscription revenue directly with each verified content <strong>creator</strong>. <br/><strong>B:</strong> Creator programs on free platforms allow anyone to gain viral fame without initial fees.</div>
<div class="round-item-personal">★ Have you ever financially supported an independent content <strong>creator</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Charging a fee makes it expensive for spam operations to run an automated <strong>bot</strong> army. <br/><strong>B:</strong> Free access is essential, even if it means dealing with the occasional malicious <strong>bot</strong>.</div>
<div class="round-item-personal">★ How often do you spot an automated <strong>bot</strong> while browsing social networks?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Premium subscriptions allow deep UI <strong>customization</strong> and an ad-free experience. <br/><strong>B:</strong> Standardized, simple designs are easier to navigate and keep everyone on equal footing.</div>
<div class="round-item-personal">★ Is visual <strong>customization</strong> of your device or apps important to you?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Direct funding from users fuels faster software <strong>innovation</strong> and updates. <br/><strong>B:</strong> Advertising budgets have historically funded the grandest technological <strong>innovation</strong> projects.</div>
<div class="round-item-personal">★ What is the most exciting technological <strong>innovation</strong> you have seen recently?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Subscription features increase authentic <strong>engagement</strong> by filtering out low-quality comments. <br/><strong>B:</strong> Free systems maximize general user <strong>engagement</strong> and democratic public debate.</div>
<div class="round-item-personal">★ How has your level of social media <strong>engagement</strong> changed over the years?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Paid platforms can fund digital literacy classes, helping to close the <strong>digital divide</strong>. <br/><strong>B:</strong> Charging a fee directly widens the <strong>digital divide</strong> by locking out low-income users.</div>
<div class="round-item-personal">★ Do you see a widening <strong>digital divide</strong> in your city or country?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Monthly <strong>subscription</strong> fees can drain a student's budget, leading to digital isolation. <br/><strong>B:</strong> Free platforms force users to pay with their attention, which is worse than a <strong>subscription</strong>.</div>
<div class="round-item-personal">★ How many digital <strong>subscription</strong> services do you currently pay for?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Relying on extreme <strong>personalization</strong> can feed conspiracy theories and divide communities. <br/><strong>B:</strong> Zero <strong>personalization</strong> results in a chaotic, irrelevant feed that bores users.</div>
<div class="round-item-personal">★ Have you ever felt that platform <strong>personalization</strong> was trapping you in an echo chamber?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Tech giants might still sell user data secretly, violating their paid <strong>privacy</strong> promises. <br/><strong>B:</strong> Ad-supported models treat user <strong>privacy</strong> as a secondary commodity.</div>
<div class="round-item-personal">★ Do you trust big tech corporations to protect your digital <strong>privacy</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> If subscription <strong>revenue</strong> drops, platforms might compromise their ethics to survive. <br/><strong>B:</strong> Relying solely on ad <strong>revenue</strong> incentivizes clickbait headlines and fake news.</div>
<div class="round-item-personal">★ Do you think clickbait is ruined by the obsession with ad <strong>revenue</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A paid system might only reward the most famous <strong>creator</strong>, leaving small channels with nothing. <br/><strong>B:</strong> Ad-revenue models on free platforms offer a <strong>creator</strong> highly unpredictable and tiny payments.</div>
<div class="round-item-personal">★ If you were a content <strong>creator</strong>, would you prefer subscriptions or ad shares?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Spammers might still pay to run a sophisticated <strong>bot</strong> network on premium sites. <br/><strong>B:</strong> Free networks are easily overwhelmed by fake <strong>bot</strong> reviews and accounts.</div>
<div class="round-item-personal">★ Do you think a social network can ever be 100% free of any automated <strong>bot</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Endless options for <strong>customization</strong> can complicate apps, confusing older users. <br/><strong>B:</strong> A total lack of <strong>customization</strong> makes modern apps feel rigid and outdated.</div>
<div class="round-item-personal">★ Do you find complex app settings and <strong>customization</strong> menus annoying?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Monopolies have no incentive to focus on <strong>innovation</strong>, even with paid users. <br/><strong>B:</strong> Ad-revenue models promote psychological manipulation instead of genuine product <strong>innovation</strong>.</div>
<div class="round-item-personal">★ Do you think the tech industry is slowing down in terms of real <strong>innovation</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Lower overall <strong>engagement</strong> occurs when paid walls separate friends and families. <br/><strong>B:</strong> Relentless fight for ad <strong>engagement</strong> results in toxic online arguments and outrage.</div>
<div class="round-item-personal">★ Have you ever deleted a social media app because of toxic <strong>engagement</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Paid subscriptions create a clear class system, widening the <strong>digital divide</strong>. <br/><strong>B:</strong> Standard free ad models ignore the <strong>digital divide</strong>, leaving vulnerable users with poor security.</div>
<div class="round-item-personal">★ How can society bridge the <strong>digital divide</strong> for low-income families?</div>
</div></div>
"""
    },
    "pedagogy-and-practice.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Providing structural <strong>scaffolding</strong> helps learners perform tasks just beyond their independent level. <br/><strong>B:</strong> Allowing unstructured discovery encourages autonomous problem-solving.</div>
<div class="round-item-personal">★ How much <strong>scaffolding</strong> or guidance do you prefer when learning a difficult new skill?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Modern communicative <strong>pedagogy</strong> prioritizes functional fluency and realistic interaction. <br/><strong>B:</strong> Traditional grammar-translation methods build absolute structural accuracy and reading discipline.</div>
<div class="round-item-personal">★ Has your language-learning journey been shaped more by communicative or traditional <strong>pedagogy</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Recognizing language <strong>fossilization</strong> allows teachers to target persistent grammatical errors. <br/><strong>B:</strong> Accepting fossilized errors prevents communication blocks and reduces student anxiety.</div>
<div class="round-item-personal">★ Do you have a persistent grammar mistake that has undergone complete <strong>fossilization</strong> in your speech?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A student's developing <strong>interlanguage</strong> is a healthy sign of active grammatical hypothesis testing. <br/><strong>B:</strong> Instructors must correct errors immediately to prevent an unstable <strong>interlanguage</strong> from hardening.</div>
<div class="round-item-personal">★ Do you feel comfortable speaking in your target language even when your <strong>interlanguage</strong> is far from perfect?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Flooding the classroom with <strong>comprehensible input</strong> naturally triggers subconscious language acquisition. <br/><strong>B:</strong> Explicit grammar explanations and conscious drills are faster for adult logical minds.</div>
<div class="round-item-personal">★ Do you acquire vocabulary faster through reading <strong>comprehensible input</strong> or memorizing word lists?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Continuous <strong>formative assessment</strong> helps teachers adapt daily lessons to student needs. <br/><strong>B:</strong> Standardized final exams offer a clear, objective benchmark for academic qualifications.</div>
<div class="round-item-personal">★ Do you prefer ongoing <strong>formative assessment</strong> or a single high-stakes final exam?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Training students in <strong>metacognition</strong> teaches them how to plan and monitor their own learning. <br/><strong>B:</strong> Direct instruction is more efficient, freeing students from complex self-monitoring tasks.</div>
<div class="round-item-personal">★ How often do you reflect on your own learning strategies, practicing active <strong>metacognition</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Utilizing <strong>Total Physical Response</strong> is perfect for linking vocabulary directly to physical actions. <br/><strong>B:</strong> Abstract visual aids and texts are more appropriate for mature, analytical learners.</div>
<div class="round-item-personal">★ Have you ever used physical movement or <strong>Total Physical Response</strong> methods to learn a language?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Designing lessons around <strong>Task-Based Learning</strong> prepares students for real-world professional duties. <br/><strong>B:</strong> Deconstructing language into structural rules builds a more precise academic foundation.</div>
<div class="round-item-personal">★ Do you find <strong>Task-Based Learning</strong> projects more engaging than standard grammar lectures?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Lowering the <strong>affective filter</strong> by creating a safe environment is the key to fluent speech. <br/><strong>B:</strong> Maintaining a highly disciplined, formal atmosphere pushes students to perform their best.</div>
<div class="round-item-personal">★ What factors in a classroom help to lower your personal <strong>affective filter</strong>?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Over-reliance on instructional <strong>scaffolding</strong> can make students passive and dependent. <br/><strong>B:</strong> A complete absence of <strong>scaffolding</strong> causes extreme frustration and early dropout.</div>
<div class="round-item-personal">★ Have you ever felt lost in a class due to a total lack of <strong>scaffolding</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A purely communicative <strong>pedagogy</strong> might result in fluent but highly ungrammatical speech. <br/><strong>B:</strong> Rigidly theoretical <strong>pedagogy</strong> produces students who know grammar but cannot hold a conversation.</div>
<div class="round-item-personal">★ What do you see as the biggest flaw in modern language <strong>pedagogy</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Overemphasizing language <strong>fossilization</strong> can make students overly self-conscious and afraid to speak. <br/><strong>B:</strong> Ignoring <strong>fossilization</strong> leads to permanent, highly confusing communication habits.</div>
<div class="round-item-personal">★ Do you find it difficult to correct an error once <strong>fossilization</strong> has occurred?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An overly chaotic <strong>interlanguage</strong> can become unintelligible to native speakers of the language. <br/><strong>B:</strong> Demanding perfect grammar from day one completely suppresses natural <strong>interlanguage</strong> growth.</div>
<div class="round-item-personal">★ How do you react when you notice your <strong>interlanguage</strong> has structural gaps?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Relying only on <strong>comprehensible input</strong> can delay the active development of speaking skills. <br/><strong>B:</strong> Forcing students to read text without enough <strong>comprehensible input</strong> causes rapid burnout.</div>
<div class="round-item-personal">★ Have you ever tried to read a book that was too advanced to serve as <strong>comprehensible input</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Constant <strong>formative assessment</strong> creates ongoing stress and drains teacher energy. <br/><strong>B:</strong> Traditional testing measures memory rather than real functional skills.</div>
<div class="round-item-personal">★ Does the idea of continuous <strong>formative assessment</strong> sound exhausting to you?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Forcing learners to engage in <strong>metacognition</strong> can overcomplicate simple learning processes. <br/><strong>B:</strong> Students who lack <strong>metacognition</strong> skills often repeat the same study mistakes endlessly.</div>
<div class="round-item-personal">★ Do you think too much <strong>metacognition</strong> can cause analysis paralysis?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Using <strong>Total Physical Response</strong> can feel childish or embarrassing for adult professionals. <br/><strong>B:</strong> Relentless sitting and grammar lecturing completely ignores the benefits of physical action.</div>
<div class="round-item-personal">★ Would you feel self-conscious doing physical movements like <strong>Total Physical Response</strong> in an adult class?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Structuring everything around <strong>Task-Based Learning</strong> can neglect essential, systematic grammar lessons. <br/><strong>B:</strong> Traditional learning without real-world tasks produces zero practical communication skills.</div>
<div class="round-item-personal">★ What are the main disadvantages of a purely <strong>Task-Based Learning</strong> curriculum?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Lowering the <strong>affective filter</strong> too much can result in a lazy classroom where nobody studies. <br/><strong>B:</strong> A high <strong>affective filter</strong> caused by harsh criticism paralyzes students with fear.</div>
<div class="round-item-personal">★ Have you ever had an instructor who raised your <strong>affective filter</strong> through harsh criticism?</div>
</div></div>
"""
    },
    "the-future-proof-educator.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Prioritizing <strong>AI Literacy</strong> prepares students for an automated professional landscape. <br/><strong>B:</strong> Focusing on foundational writing and logic skills builds deep, independent intelligence first.</div>
<div class="round-item-personal">★ Why do you think basic <strong>AI Literacy</strong> is considered essential for modern students?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Utilizing <strong>Differentiated Instruction</strong> ensures that every learner's unique pace is respected. <br/><strong>B:</strong> Standardized group lectures build strong collective discipline and shared timelines.</div>
<div class="round-item-personal">★ Have you ever experienced <strong>Differentiated Instruction</strong> tailored directly to your personal pace?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Embracing <strong>Translanguaging</strong> allows multilingual students to use their full linguistic repertoire. <br/><strong>B:</strong> Strict monolingual immersion forces faster adaptation to the target language.</div>
<div class="round-item-personal">★ Does the concept of <strong>Translanguaging</strong> help you feel more comfortable when learning a language?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Implementing <strong>Authentic Assessment</strong> measures real-world, practical competence and problem-solving. <br/><strong>B:</strong> Standardized multiple-choice tests are highly objective, efficient, and easy to grade.</div>
<div class="round-item-personal">★ Do you think a portfolio project is a better <strong>Authentic Assessment</strong> than a traditional exam?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Training students in <strong>Higher-Order Thinking Skills</strong> prepares them to solve complex societal issues. <br/><strong>B:</strong> Memorization of core facts provides the essential raw knowledge needed before analysis can begin.</div>
<div class="round-item-personal">★ How does your school or workplace encourage the use of <strong>Higher-Order Thinking Skills</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Activating <strong>Inquiry-Based Learning</strong> sparks natural curiosity by starting lessons with real questions. <br/><strong>B:</strong> Structured, teacher-led instruction is far more efficient for delivering complex curriculums.</div>
<div class="round-item-personal">★ Do you learn better through independent discovery in <strong>Inquiry-Based Learning</strong> or direct lectures?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Empathetic <strong>Classroom Management</strong> builds a safe, collaborative space for emotional growth. <br/><strong>B:</strong> Traditional, strict discipline maintains absolute order and minimizes class distractions.</div>
<div class="round-item-personal">★ What is the most important factor in successful <strong>Classroom Management</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Supporting <strong>Neurodiversity</strong> allows unique minds, like ADHD or autistic students, to thrive. <br/><strong>B:</strong> Designing a standardized curriculum is easier to scale across public school networks.</div>
<div class="round-item-personal">★ How can modern educational systems show greater respect and support for <strong>Neurodiversity</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Fostering a <strong>Growth Mindset</strong> teaches students that intelligence can be developed through effort. <br/><strong>B:</strong> Recognizing natural talent allows schools to fast-track exceptionally gifted students.</div>
<div class="round-item-personal">★ Has developing a <strong>Growth Mindset</strong> helped you overcome obstacles in your life?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Regular feedback without grades lowers stress and helps students focus on actual learning progress. <br/><strong>B:</strong> Standardized <strong>Summative Assessment</strong> provides clear, final qualifications for universities.</div>
<div class="round-item-personal">★ Do you think a final <strong>Summative Assessment</strong> is the best way to evaluate a student's hard work?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Over-focusing on <strong>AI Literacy</strong> might cause a decay in human critical writing and math skills. <br/><strong>B:</strong> Banning AI entirely ignores modern industrial realities, leaving students without basic <strong>AI Literacy</strong>.</div>
<div class="round-item-personal">★ Are you worried that a lack of <strong>AI Literacy</strong> will make human workers obsolete?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Designing complete <strong>Differentiated Instruction</strong> for large classes is exhausting for teachers. <br/><strong>B:</strong> Standardized group models completely ignore slower learners, leading to high dropout rates.</div>
<div class="round-item-personal">★ What are the main challenges of implementing <strong>Differentiated Instruction</strong> in public schools?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Too much <strong>Translanguaging</strong> might delay the development of advanced fluency in the target language. <br/><strong>B:</strong> Strict monolingual rules can trigger severe anxiety, locking out bilingual students from <strong>Translanguaging</strong>.</div>
<div class="round-item-personal">★ Have you ever felt frustrated in a class that strictly banned all forms of <strong>Translanguaging</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Designing a custom <strong>Authentic Assessment</strong> is highly subjective and difficult to standardize. <br/><strong>B:</strong> Relying only on multiple-choice exams fails to measure real-world skills, making it a poor assessment.</div>
<div class="round-item-personal">★ Why do you think some universities resist moving away from final exams to <strong>Authentic Assessment</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Pushing <strong>Higher-Order Thinking Skills</strong> without teaching basic facts first results in superficial arguments. <br/><strong>B:</strong> Focus on rote memorization completely kills a student's capacity for <strong>Higher-Order Thinking Skills</strong>.</div>
<div class="round-item-personal">★ Have you ever encountered an educational model that ignored all <strong>Higher-Order Thinking Skills</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Pure <strong>Inquiry-Based Learning</strong> can leave unstructured students confused and lost. <br/><strong>B:</strong> Passive lectures without <strong>Inquiry-Based Learning</strong> result in disengaged, bored students.</div>
<div class="round-item-personal">★ What is the primary disadvantage of relying solely on <strong>Inquiry-Based Learning</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Overly soft <strong>Classroom Management</strong> can lead to chaotic classrooms and lost teaching time. <br/><strong>B:</strong> Dictatorial <strong>Classroom Management</strong> breeds resentment and fear instead of respect.</div>
<div class="round-item-personal">★ Have you ever been in a class where weak <strong>Classroom Management</strong> ruined the lesson?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Schools might struggle to support extreme cases of <strong>Neurodiversity</strong> without specialized funding. <br/><strong>B:</strong> Standardized educational systems often pathologize natural <strong>Neurodiversity</strong>, harming students' self-esteem.</div>
<div class="round-item-personal">★ How can standard schools adapt to better accommodate <strong>Neurodiversity</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An obsession with a <strong>Growth Mindset</strong> can ignore genuine, natural limits of individual talent. <br/><strong>B:</strong> A fixed mindset convinces struggling students that they are naturally stupid, blocking any <strong>Growth Mindset</strong>.</div>
<div class="round-item-personal">★ What are the risks of using praise that contradicts a real <strong>Growth Mindset</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Continuous evaluation is exhausting, and final <strong>Summative Assessment</strong> remains a necessary benchmark. <br/><strong>B:</strong> High-stakes final <strong>Summative Assessment</strong> measures exam-taking stress rather than long-term knowledge.</div>
<div class="round-item-personal">★ Does preparing for a major <strong>Summative Assessment</strong> cause you severe anxiety?</div>
</div></div>
"""
    },
    "upbringing-old-vs-modern.html": {
        "r1": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Overcoming childhood difficulties builds real character and <strong>resilience</strong>. <br/><strong>B:</strong> A safe, stress-free upbringing protects a child's natural psychological vulnerability.</div>
<div class="round-item-personal">★ Do you think modern parenting styles build enough personal <strong>resilience</strong> in children?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Encouraging early self-reliance helps children develop strong <strong>independence</strong>. <br/><strong>B:</strong> Nurturing close family bonds ensures children have a stable network to rely on.</div>
<div class="round-item-personal">★ Did your upbringing focus more on early <strong>independence</strong> or close family dependency?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Exposing children to changing environments fosters outstanding <strong>adaptability</strong>. <br/><strong>B:</strong> Maintaining highly predictable routines provides a comforting sense of safety.</div>
<div class="round-item-personal">★ How has your childhood shaped your personal <strong>adaptability</strong> to new life challenges?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Clear rules and structured chores teach children long-term <strong>discipline</strong>. <br/><strong>B:</strong> Giving children total freedom allows their natural interests and talents to grow.</div>
<div class="round-item-personal">★ Was strict <strong>discipline</strong> a major part of your personal upbringing?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Listening to adult conversations teaches children mature <strong>perspective</strong>. <br/><strong>B:</strong> Protecting child-only spaces allows children to enjoy their innocent world.</div>
<div class="round-item-personal">★ How has your childhood shaped your current <strong>perspective</strong> on family values?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Growing up in a close-knit <strong>community</strong> teaches children how to cooperate with others. <br/><strong>B:</strong> Focusing on private family life protects children from negative neighborhood influences.</div>
<div class="round-item-personal">★ Did you grow up in a close <strong>community</strong>, or did you prefer a private lifestyle?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Encouraging open <strong>self-expression</strong> helps children understand and manage their emotions. <br/><strong>B:</strong> Teaching emotional self-control prevents children from becoming overly dramatic or self-centered.</div>
<div class="round-item-personal">★ Was creative <strong>self-expression</strong> encouraged when you were growing up?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Allowing children to solve their own problems builds incredible <strong>resourcefulness</strong>. <br/><strong>B:</strong> Providing instant parental help ensures children do not feel abandoned.</div>
<div class="round-item-personal">★ Can you share an example of your personal <strong>resourcefulness</strong> when handling an unexpected issue?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Gentle parental <strong>guidance</strong> helps children make moral and safe decisions. <br/><strong>B:</strong> Allowing children to learn from their own mistakes builds deep, authentic wisdom.</div>
<div class="round-item-personal">★ What is the best piece of life <strong>guidance</strong> you received from an elder?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Teaching children to listen to others' struggles develops deep <strong>empathy</strong>. <br/><strong>B:</strong> Encouraging children to focus on their own success protects them from emotional exhaustion.</div>
<div class="round-item-personal">★ Do you think the modern digital world makes it harder for children to develop real <strong>empathy</strong>?</div>
</div></div>
""",
        "r2": """
<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Demanding constant <strong>resilience</strong> can lead to repressed emotions and childhood trauma. <br/><strong>B:</strong> Protecting children from all stress can result in emotional fragility and zero <strong>resilience</strong>.</div>
<div class="round-item-personal">★ Have you ever felt that society demands too much emotional <strong>resilience</strong> from young people?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Pushing for early <strong>independence</strong> can make children feel lonely and disconnected from family. <br/><strong>B:</strong> Overprotective parenting prevents children from ever developing real <strong>independence</strong>.</div>
<div class="round-item-personal">★ Do you find it hard to maintain your <strong>independence</strong> while staying close to your family?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Forcing constant <strong>adaptability</strong> can cause chronic stress and prevent stable friendships. <br/><strong>B:</strong> Overly rigid routines make children fearful of any change, destroying their <strong>adaptability</strong>.</div>
<div class="round-item-personal">★ Does a sudden change in your daily routine require a lot of <strong>adaptability</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Harsh <strong>discipline</strong> breeds resentment, lying, and fear of parental authority. <br/><strong>B:</strong> A total lack of <strong>discipline</strong> leads to spoiled children who struggle in structured school settings.</div>
<div class="round-item-personal">★ How do you feel when someone tries to enforce strict <strong>discipline</strong> on you?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Forcing a child to adopt an adult <strong>perspective</strong> too early ruins the innocence of childhood. <br/><strong>B:</strong> Shielding children from reality results in a childish, naive <strong>perspective</strong> on serious issues.</div>
<div class="round-item-personal">★ How has your personal <strong>perspective</strong> on parenting changed since you were a teenager?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Growing up in an intense <strong>community</strong> can result in severe peer pressure and loss of individuality. <br/><strong>B:</strong> A total lack of <strong>community</strong> support leaves modern parents isolated and exhausted.</div>
<div class="round-item-personal">★ Have you ever felt overwhelmed by the social rules of a close <strong>community</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Unfiltered <strong>self-expression</strong> can lead to disrespectful behavior and poor social boundaries. <br/><strong>B:</strong> Suppressing a child's <strong>self-expression</strong> kills their self-esteem and artistic potential.</div>
<div class="round-item-personal">★ Do you think modern culture values superficial <strong>self-expression</strong> over real discipline?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Relying on extreme <strong>resourcefulness</strong> usually means a child is neglected and lacks basic support. <br/><strong>B:</strong> Providing instant solutions to every problem destroys a child's natural <strong>resourcefulness</strong>.</div>
<div class="round-item-personal">★ Do you worry that modern technology is killing children's physical <strong>resourcefulness</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Overly dominant parental <strong>guidance</strong> suffocates a child's individual path. <br/><strong>B:</strong> A complete absence of parental <strong>guidance</strong> leaves children lost in a complex world.</div>
<div class="round-item-personal">★ Have you ever rebelled against well-meaning <strong>guidance</strong> from your parents?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Forcing constant <strong>empathy</strong> can make a child neglect their own emotional health. <br/><strong>B:</strong> A total lack of <strong>empathy</strong> leads to bullying, cruelty, and anti-social behavior in schools.</div>
<div class="round-item-personal">★ How do you handle situations where you feel a complete lack of <strong>empathy</strong> from others?</div>
</div></div>
"""
    }
}

def update_file_rounds(filepath, r1_html, r2_html):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Update Round 1
    r1_block = soup.find(class_='round-1')
    if r1_block and r1_html:
        r1_body = r1_block.find(class_='round-body')
        if r1_body:
            new_body = BeautifulSoup(r1_html, 'html.parser')
            r1_body.clear()
            r1_body.append(new_body)

    # Update Round 2
    r2_block = soup.find(class_='round-2')
    if r2_block and r2_html:
        r2_body = r2_block.find(class_='round-body')
        if r2_body:
            new_body = BeautifulSoup(r2_html, 'html.parser')
            r2_body.clear()
            r2_body.append(new_body)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Updated rounds in {filepath}")

def main():
    # 1. 4-day-work-week.html
    r1_4day = """<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A 4-day work week significantly reduces professional <strong>burnout</strong>. <br/><strong>B:</strong> A 5-day week distributes tasks over more days, preventing daily exhaustion.</div>
<div class="round-item-personal">★ Have you ever suffered from work-related <strong>burnout</strong>, and how did you recover?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Shorter working weeks increase overall <strong>productivity</strong> because employees waste less time. <br/><strong>B:</strong> A 5-day week ensures constant availability for clients.</div>
<div class="round-item-personal">★ Do you feel your personal <strong>productivity</strong> is higher when you have a structured schedule?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An extra day off directly improves mental <strong>well-being</strong> and reduces stress. <br/><strong>B:</strong> A standard 5-day routine provides stable habits that support physical health.</div>
<div class="round-item-personal">★ What activities contribute most to your personal <strong>well-being</strong> during the weekend?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Offering 4-day schedules dramatically boosts staff <strong>retention</strong>. <br/><strong>B:</strong> Traditional schedules ensure predictable staffing and corporate stability.</div>
<div class="round-item-personal">★ Would the promise of a 4-day week influence your choice to stay with a company, affecting employee <strong>retention</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Closing the office for an extra day reduces corporate <strong>overhead</strong> costs like electricity. <br/><strong>B:</strong> Spreading operations over 5 days maximizes the value of office lease investments.</div>
<div class="round-item-personal">★ Do you think cutting corporate <strong>overhead</strong> is a good enough reason to work from home?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Employees love the extreme <strong>flexibility</strong> of a three-day weekend. <br/><strong>B:</strong> Fixed schedules make planning meetings and collaborative teamwork much simpler.</div>
<div class="round-item-personal">★ How much <strong>flexibility</strong> do you currently have in your working hours?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Starting a 4-day <strong>trial</strong> allows the company to test results safely. <br/><strong>B:</strong> Consistent long-term schedules are safer for business than constant trials.</div>
<div class="round-item-personal">★ Would you like to participate in a temporary <strong>trial</strong> of a shorter work week?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> It forces managers to focus on results and <strong>output</strong> rather than hours spent at a desk. <br/><strong>B:</strong> Physical presence for 5 days maximizes opportunities for creative collaboration.</div>
<div class="round-item-personal">★ Is your job performance measured by your physical hours or by your actual <strong>output</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Eliminating one working day reduces weekly <strong>commute</strong> stress and carbon emissions. <br/><strong>B:</strong> Spreading travel over 5 days makes public transport schedules more predictable.</div>
<div class="round-item-personal">★ How long is your daily <strong>commute</strong>, and does it drain your energy?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The successful <strong>implementation</strong> of a 4-day week modernizes the company. <br/><strong>B:</strong> Changing established working models requires expensive and risky operational <strong>implementation</strong>.</div>
<div class="round-item-personal">★ What challenges would you expect during the <strong>implementation</strong> of a 4-day schedule in your workplace?</div>
</div></div>"""

    r2_4day = """<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Compressing 40 hours into 4 days can increase daily <strong>burnout</strong> and fatigue. <br/><strong>B:</strong> Working 5 days keeps the daily hours short and manageable.</div>
<div class="round-item-personal">★ Do you think working 10 hours a day would cause you greater <strong>burnout</strong> than working 8 hours?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A shorter week might harm national <strong>productivity</strong> in sectors like healthcare. <br/><strong>B:</strong> Forcing people to work 5 days leads to 'presenteeism' where actual <strong>productivity</strong> drops.</div>
<div class="round-item-personal">★ In your opinion, does working longer hours always result in lower <strong>productivity</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An extra day off might lead to unhealthy habits, reducing overall physical <strong>well-being</strong>. <br/><strong>B:</strong> Relentless 5-day schedules leave zero time for self-care and mental <strong>well-being</strong>.</div>
<div class="round-item-personal">★ How does a long working week impact your physical and emotional <strong>well-being</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> High employee turnover occurs when 4-day compressed hours harm staff <strong>retention</strong>. <br/><strong>B:</strong> Failing to offer modern schedules causes companies to lose talent, destroying long-term <strong>retention</strong>.</div>
<div class="round-item-personal">★ Have you ever left a job because the rigid schedule affected your personal life and <strong>retention</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Businesses might face higher <strong>overhead</strong> if they have to hire extra staff to cover Fridays. <br/><strong>B:</strong> Keeping offices open 5 days a week increases unnecessary building <strong>overhead</strong>.</div>
<div class="round-item-personal">★ Do you think business owners worry more about staff happiness or monthly <strong>overhead</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Extreme <strong>flexibility</strong> can lead to chaotic schedules where nobody is available. <br/><strong>B:</strong> Standard 5-day schedules offer no <strong>flexibility</strong> for emergencies.</div>
<div class="round-item-personal">★ When a schedule lacks <strong>flexibility</strong>, how do you handle unexpected personal events?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A failed 4-day <strong>trial</strong> can damage company culture and client trust. <br/><strong>B:</strong> Refusing to start a simple <strong>trial</strong> keeps the company stuck in outdated habits.</div>
<div class="round-item-personal">★ Why do you think some traditional managers are afraid to launch a 4-day <strong>trial</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Measuring performance strictly by <strong>output</strong> might create a high-pressure environment. <br/><strong>B:</strong> Focusing on hours instead of <strong>output</strong> rewards slow and lazy working habits.</div>
<div class="round-item-personal">★ Do you prefer a relaxed environment or one focused strictly on high <strong>output</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> An extra day off might encourage people to travel more, increasing leisure <strong>commute</strong> emissions. <br/><strong>B:</strong> Forcing employees to <strong>commute</strong> every day causes unnecessary highway congestion.</div>
<div class="round-item-personal">★ Would you accept a lower salary if it meant you did not have to <strong>commute</strong> at all?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The chaotic <strong>implementation</strong> of a 4-day week could cause a temporary drop in service quality. <br/><strong>B:</strong> Refusing the <strong>implementation</strong> of modern schedules makes a country less competitive globally.</div>
<div class="round-item-personal">★ Do you think the <strong>implementation</strong> of a 4-day week is inevitable in the future?</div>
</div></div>"""

    update_file_rounds('events/sessions/debatable-relatable/4-day-work-week.html', r1_4day, r2_4day)

    # la-semaine-de-4-jours.html (French)
    r1_4day_fr = """<div class="round-body" style="display:block;"><div class="round-type-badge">Débat</div><div class="vim-instruction">Analysez les avantages des deux perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Une semaine de 4 jours réduit considérablement le <strong>surmenage</strong> professionnel. <br/><strong>B:</strong> Une semaine de 5 jours répartit les tâches, évitant l'épuisement quotidien.</div>
<div class="round-item-personal">★ Avez-vous déjà souffert de <strong>surmenage</strong> au travail et comment avez-vous récupéré ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Des semaines de travail plus courtes augmentent la <strong>productivité</strong> globale car les employés perdent moins de temps. <br/><strong>B:</strong> Une semaine de 5 jours garantit une disponibilité constante pour les clients.</div>
<div class="round-item-personal">★ Pensez-vous que votre <strong>productivité</strong> personnelle est plus élevée avec un emploi du temps structuré ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Un jour de congé supplémentaire améliore directement le <strong>bien-être</strong> mental et réduit le stress. <br/><strong>B:</strong> Une routine standard de 5 jours offre des habitudes stables qui soutiennent la santé physique.</div>
<div class="round-item-personal">★ Quelles activités contribuent le plus à votre <strong>bien-être</strong> personnel pendant le week-end ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Offrir des horaires sur 4 jours améliore considérablement la <strong>rétention</strong> du personnel. <br/><strong>B:</strong> Les horaires traditionnels assurent une planification prévisible et la stabilité de l'entreprise.</div>
<div class="round-item-personal">★ La promesse d'une semaine de 4 jours influencerait-elle votre choix de rester, affectant ainsi la <strong>rétention</strong> du personnel ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Fermer le bureau un jour de plus réduit les <strong>frais généraux</strong> comme l'électricité. <br/><strong>B:</strong> Répartir les opérations sur 5 jours permet de rentabiliser au mieux les locaux professionnels.</div>
<div class="round-item-personal">★ Pensez-vous que réduire les <strong>frais généraux</strong> des entreprises justifie le travail à distance ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Les employés apprécient la grande <strong>flexibilité</strong> qu'offre un week-end de trois jours. <br/><strong>B:</strong> Des horaires fixes facilitent grandement la planification des réunions et le travail d'équipe.</div>
<div class="round-item-personal">★ De quelle <strong>flexibilité</strong> disposez-vous actuellement dans vos horaires de travail ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Lancer un <strong>essai</strong> de 4 jours permet à l'entreprise de tester les résultats en toute sécurité. <br/><strong>B:</strong> Des horaires stables et à long terme sont plus rassurants qu'un <strong>essai</strong> permanent.</div>
<div class="round-item-personal">★ Souhaiteriez-vous participer à un <strong>essai</strong> temporaire d'une semaine de travail raccourcie ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Cela oblige les managers à mesurer le <strong>rendement</strong> réel plutôt que les heures passées au bureau. <br/><strong>B:</strong> La présence physique sur 5 jours maximise les opportunités de collaboration créative.</div>
<div class="round-item-personal">★ Votre performance est-elle mesurée par vos heures de présence ou par votre <strong>rendement</strong> réel ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Éliminer un jour de travail réduit le stress lié au <strong>trajet</strong> quotidien et les émissions de carbone. <br/><strong>B:</strong> Répartir les déplacements sur 5 jours rend les transports publics plus prévisibles.</div>
<div class="round-item-personal">★ Combien de temps dure votre <strong>trajet</strong> quotidien et épuise-t-il votre énergie ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> La réussite de la <strong>mise en œuvre</strong> d'une semaine de 4 jours modernise l'entreprise. <br/><strong>B:</strong> Changer les modèles de travail établis exige une <strong>mise en œuvre</strong> opérationnelle coûteuse et risquée.</div>
<div class="round-item-personal">★ Quels défis anticipez-vous lors de la <strong>mise en œuvre</strong> d'un tel projet dans votre entreprise ?</div>
</div></div>"""

    r2_4day_fr = """<div class="round-body" style="display:block;"><div class="round-type-badge">Débat</div><div class="vim-instruction">Analysez les inconvénients des deux perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Compresser 40 heures en 4 jours peut aggraver le <strong>surmenage</strong> quotidien et la fatigue. <br/><strong>B:</strong> Travailler 5 jours permet de garder des journées de travail courtes et gérables.</div>
<div class="round-item-personal">★ Pensez-vous que travailler 10 heures par jour provoquerait plus de <strong>surmenage</strong> qu'un rythme de 8 heures ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Une semaine plus courte pourrait nuire à la <strong>productivité</strong> nationale dans des secteurs comme la santé. <br/><strong>B:</strong> Forcer les gens à travailler 5 jours entraîne du présentéisme, ce qui fait chuter la <strong>productivité</strong> réelle.</div>
<div class="round-item-personal">★ Selon vous, travailler de longues heures entraîne-t-il toujours une baisse de <strong>productivité</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Un jour de congé de plus peut encourager des habitudes de via passives, nuisant au <strong>bien-être</strong> physique. <br/><strong>B:</strong> Les semaines de 5 jours sans relâche ne laissent aucun temps pour le <strong>bien-être</strong> mental.</div>
<div class="round-item-personal">★ Quel est l'impact d'une longue semaine de travail sur votre <strong>bien-être</strong> général ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Un taux de rotation élevé se produit lorsque des horaires compressés sur 4 jours nuisent à la <strong>rétention</strong>. <br/><strong>B:</strong> Ne pas proposer d'horaires modernes fait perdre des talents, détruisant la <strong>rétention</strong> à long terme.</div>
<div class="round-item-personal">★ Avez-vous déjà quitté un emploi parce que les horaires stricts affectaient votre <strong>rétention</strong> personnelle ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Les entreprises peuvent voir leurs <strong>frais généraux</strong> augmenter si elles doivent embaucher pour couvrir le vendredi. <br/><strong>B:</strong> Garder les bureaux ouverts 5 jours par semaine augmente inutilement les <strong>frais généraux</strong> des bâtiments.</div>
<div class="round-item-personal">★ Pensez-vous que les dirigeants d'entreprise se soucient plus du bonheur des salariés ou de leurs <strong>frais généraux</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Une trop grande <strong>flexibilité</strong> peut mener à des plannings chaotiques où personne n'est disponible. <br/><strong>B:</strong> Les horaires standard sur 5 jours n'offrent aucune <strong>flexibilité</strong> pour les urgences.</div>
<div class="round-item-personal">★ Lorsqu'un emploi du temps manque de <strong>flexibilité</strong>, comment gérez-vous les imprévus ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Un <strong>essai</strong> manqué de semaine de 4 jours peut nuire à la culture d'entreprise et à la confiance des clients. <br/><strong>B:</strong> Refuser de lancer un simple <strong>essai</strong> maintient l'entreprise dans des habitudes obsolètes.</div>
<div class="round-item-personal">★ Pourquoi pensez-vous que certains managers traditionnels ont peur de lancer un tel <strong>essai</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Mesurer les performances uniquement par le <strong>rendement</strong> peut créer un environnement de travail sous haute pression. <br/><strong>B:</strong> Se focaliser sur les heures plutôt que sur le <strong>rendement</strong> récompense les habitudes de travail lentes.</div>
<div class="round-item-personal">★ Préférez-vous un environnement de travail détendu ou axé strictement sur un fort <strong>rendement</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Ce jour libre supplémentaire peut pousser les gens à voyager davantage, augmentant les émissions liées au <strong>trajet</strong> de loisir. <br/><strong>B:</strong> Obliger les salariés à faire le <strong>trajet</strong> chaque jour provoque des embouteillages inutiles.</div>
<div class="round-item-personal">★ Accepteriez-vous un salaire inférieur si cela vous évitait tout <strong>trajet</strong> quotidien ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Une <strong>mise en œuvre</strong> chaotique de la semaine de 4 jours pourrait entraîner une baisse temporaire de la qualité de service. <br/><strong>B:</strong> Refuser la <strong>mise en œuvre</strong> de plannings modernes rend un pays moins compétitif à l'échelle mondiale.</div>
<div class="round-item-personal">★ Pensez-vous que la <strong>mise en œuvre</strong> de la semaine de 4 jours est inévitable à l'avenir ?</div>
</div></div>"""

    update_file_rounds('events/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html', r1_4day_fr, r2_4day_fr)

    # 4-dnevnaya-rabochaya-nedelya.html (Russian)
    r1_4day_ru = """<div class="round-body" style="display:block;"><div class="round-type-badge">Дебаты</div><div class="vim-instruction">Проанализируйте преимущества обеих перспектив.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Четырехдневная рабочая неделя существенно снижает профессиональное <strong>выгорание</strong>. <br/><strong>B:</strong> Пятидневная неделя распределяет задачи на большее количество дней, предотвращая ежедневное истощение.</div>
<div class="round-item-personal">★ Сталкивались ли вы когда-либо с профессиональным <strong>выгоранием</strong> и как вы восстанавливались?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Сокращение рабочей недели повышает общую <strong>продуктивность</strong>, так как сотрудники меньше отвлекаются. <br/><strong>B:</strong> Пятидневка гарантирует постоянную доступность для клиентов и партнеров.</div>
<div class="round-item-personal">★ Считаете ли вы, что ваша личная <strong>продуктивность</strong> выше при четком пятидневном графике?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Дополнительный выходной напрямую улучшает эмоциональное <strong>благополучие</strong> и снижает уровень стресса. <br/><strong>B:</strong> Стабильный пятидневный режим поддерживает физическое здоровье за счет привычного ритма.</div>
<div class="round-item-personal">★ Какие занятия больше всего улучшают ваше личное <strong>благополучие</strong> в выходные дни?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Переход на четырехдневный график значительно облегчает <strong>удержание кадров</strong> в компании. <br/><strong>B:</strong> Традиционный формат обеспечивает стабильность бизнеса и предсказуемость кадрового планирования.</div>
<div class="round-item-personal">★ Повлияет ли четырехдневный график на ваше решение остаться в компании, улучшив <strong>удержание кадров</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Рост мотивации сотрудников может увеличить общий <strong>доход</strong> бизнеса. <br/><strong>B:</strong> Стабильные 5 дней работы гарантируют бесперебойные продажи, защищая привычный <strong>доход</strong>.</div>
<div class="round-item-personal">★ Считаете ли вы, что <strong>доход</strong> компании важнее, чем комфорт ее сотрудников?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Сжатые сроки мотивируют сотрудников работать эффективнее, так как ежедневная <strong>нагрузка</strong> распределяется более разумно. <br/><strong>B:</strong> Пятидневка гарантирует, что рабочая <strong>нагрузка</strong> не будет слишком высокой в отдельные дни.</div>
<div class="round-item-personal">★ Комфортна ли для вас высокая рабочая <strong>нагрузка</strong>, если взамен вы получаете длинные выходные?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Четырехдневка — это инновационный <strong>подход</strong> к балансу работы и личной жизни. <br/><strong>B:</strong> Традиционный пятидневный <strong>подход</strong> проверен временем и гарантирует стабильность процессов.</div>
<div class="round-item-personal">★ Какой <strong>подход</strong> к организации труда вы считаете наиболее перспективным?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Современные условия труда повышают <strong>конкурентоспособность</strong> компании на рынке труда. <br/><strong>B:</strong> Пятидневный график поддерживает общую экономическую <strong>конкурентоспособность</strong> бизнеса.</div>
<div class="round-item-personal">★ Важна ли для вас высокая <strong>конкурентоспособность</strong> вашей компании среди других работодателей?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Закрытие офиса на дополнительный день снижает операционные <strong>затраты</strong> на коммунальные услуги. <br/><strong>B:</strong> Сжатие графика может увеличить <strong>затраты</strong> на аренду оборудования из-за простоев.</div>
<div class="round-item-personal">★ Заботит ли вас то, какие <strong>затраты</strong> несет ваш работодатель на содержание офиса?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Правильное планирование исключает <strong>сверхурочные</strong> часы и переработки. <br/><strong>B:</strong> Привычная пятидневка позволяет решать срочные задачи, не требуя оплачивать <strong>сверхурочные</strong>.</div>
<div class="round-item-personal">★ Часто ли вам приходится работать <strong>сверхурочные</strong> часы, чтобы успеть выполнить задачи?</div>
</div></div>"""

    r2_4day_ru = """<div class="round-body" style="display:block;"><div class="round-type-badge">Дебаты</div><div class="vim-instruction">Проанализируйте недостатки обеих перспектив.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Попытка уместить 40 часов работы в 4 дня может вызвать еще большее <strong>выгорание</strong> и усталость. <br/><strong>B:</strong> Пятидневка удерживает продолжительность рабочего дня в разумных рамках, снижая риск <strong>выгорания</strong>.</div>
<div class="round-item-personal">★ Считаете ли вы, что 10-часовой рабочий день приблизит ваше профессиональное <strong>выгорание</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> В некоторых сферах, например в медицине, сокращение дней может критически снизить общую <strong>продуктивность</strong>. <br/><strong>B:</strong> Пятидневка способствует «презентеизму», когда присутствие есть, но реальная <strong>продуктивность</strong> падает.</div>
<div class="round-item-personal">★ Считаете ли вы, что долгие часы работы неизбежно снижают личную <strong>продуктивность</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Лишний выходной может привести к пассивному образу жизни, ухудшая физическое <strong>благополучие</strong>. <br/><strong>B:</strong> Пятидневный стресс не оставляет времени на заботу о здоровье, разрушая <strong>благополучие</strong> человека.</div>
<div class="round-item-personal">★ Как долгая рабочая неделя влияет на ваше физическое и эмоциональное <strong>благополучие</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Если сжатый график вызовет переутомление, это может ухудшить <strong>удержание кадров</strong> в долгосрочной перспективе. <br/><strong>B:</strong> Отказ от гибкости заставляет лучших специалистов уходить, делая <strong>удержание кадров</strong> невозможным.</div>
<div class="round-item-personal">★ Увольнялись ли вы когда-нибудь с работы из-за того, что жесткий график мешал вашей личной жизни?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Падение темпов производства в пятницу может снизить <strong>доход</strong> и прибыль всей компании. <br/><strong>B:</strong> Усталые и неэффективные сотрудники на пятидневке приносят меньше пользы, снижая потенциальный <strong>доход</strong>.</div>
<div class="round-item-personal">★ Беспокоит ли вас личный <strong>доход</strong> больше, чем количество свободного времени?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Слишком высокая ежедневная <strong>нагрузка</strong> при 4-дневке может привести к критическим ошибкам в работе. <br/><strong>B:</strong> Постоянная пятидневная <strong>нагрузка</strong> не дает сотрудникам возможности полноценно восстановиться.</div>
<div class="round-item-personal">★ Как высокая рабочая <strong>нагрузка</strong> влияет на ваше умение концентрироваться?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Поспешный переход на четырехдневку — это сырой и непродуманный <strong>подход</strong> к реформе труда. <br/><strong>B:</strong> Отказ от изменений показывает консервативный <strong>подход</strong>, мешающий развитию бизнеса.</div>
<div class="round-item-personal">★ Пугает ли вас радикальный <strong>подход</strong> к изменению привычных жизненных устоев?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Страна, перешедшая на 4 дня работы, может потерять экономическую <strong>конкурентоспособность</strong> на мировой арене. <br/><strong>B:</strong> Отказ от внедрения современных стандартов снижает общую <strong>конкурентоспособность</strong> государства.</div>
<div class="round-item-personal">★ Считаете ли вы, что инновации — это единственный способ сохранить <strong>конкурентоспособность</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Компании могут понести дополнительные <strong>затраты</strong> на наем персонала для покрытия пустых дней. <br/><strong>B:</strong> Пятидневное содержание пустующих по выходным зданий увеличивает ненужные <strong>затраты</strong>.</div>
<div class="round-item-personal">★ Как вы думаете, готовы ли компании нести дополнительные <strong>затраты</strong> ради счастья сотрудников?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Чтобы уложиться в 4 дня, сотрудникам придется работать <strong>сверхурочные</strong> часы без дополнительной оплаты. <br/><strong>B:</strong> Постоянные <strong>сверхурочные</strong> на пятидневке истощают бюджет компании и силы сотрудников.</div>
<div class="round-item-personal">★ Согласились бы вы работать <strong>сверхурочные</strong> часы ради более длинных выходных?</div>
</div></div>"""

    update_file_rounds('events/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html', r1_4day_ru, r2_4day_ru)

    # ai-and-art.html
    r1_ai = """<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the advantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> AI can generate unexpected combinations, sparking a new kind of creative <strong>originality</strong>. <br/><strong>B:</strong> True <strong>originality</strong> requires human consciousness, emotion, and life experience.</div>
<div class="round-item-personal">★ How do you define <strong>originality</strong> when evaluating a piece of art?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Machine algorithms can analyze millions of images to produce a perfect <strong>aesthetic</strong> balance. <br/><strong>B:</strong> A refined <strong>aesthetic</strong> sensibility is a uniquely human quality developed over centuries of culture.</div>
<div class="round-item-personal">★ What kind of visual <strong>aesthetic</strong> appeals to you the most in modern design?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Digital screens serve as a limitless, modern <strong>canvas</strong> for complex algorithmic art. <br/><strong>B:</strong> The physical texture of paint on a real <strong>canvas</strong> connects the viewer directly to the artist's touch.</div>
<div class="round-item-personal">★ Do you prefer digital illustrations or traditional paintings on a physical <strong>canvas</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> AI can help amateur creators produce a visual <strong>masterpiece</strong> with minimal technical training. <br/><strong>B:</strong> A true <strong>masterpiece</strong> requires years of dedicated struggle, discipline, and human genius.</div>
<div class="round-item-personal">★ Have you ever stood in front of a famous <strong>masterpiece</strong> and felt deep emotion?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Artists can use generative tools as a source of instant <strong>inspiration</strong> to overcome creative blocks. <br/><strong>B:</strong> Genuine <strong>inspiration</strong> comes from real-world interactions, suffering, and existential reflection.</div>
<div class="round-item-personal">★ Where do you find your greatest creative <strong>inspiration</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Modern <strong>generative</strong> models democratize the creative process, allowing everyone to build art. <br/><strong>B:</strong> Relying on <strong>generative</strong> systems turns art into a repetitive commodity.</div>
<div class="round-item-personal">★ Have you ever experimented with any <strong>generative</strong> AI tools to create images or text?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Art is highly <strong>subjective</strong>, so machine-made art is just as valid as human-made art. <br/><strong>B:</strong> The <strong>subjective</strong> depth of human communication through art cannot be replicated by numbers.</div>
<div class="round-item-personal">★ Do you agree that the value of any artwork is entirely <strong>subjective</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> AI can replicate complex historical styles with flawless digital <strong>craftsmanship</strong>. <br/><strong>B:</strong> Real human <strong>craftsmanship</strong> lies in the beautiful imperfections of physical labor.</div>
<div class="round-item-personal">★ Do you value technical <strong>craftsmanship</strong> or the underlying concept more in art?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Open-source AI models promote collaborative creativity by moving past rigid <strong>copyright</strong> laws. <br/><strong>B:</strong> Protecting intellectual property via strict <strong>copyright</strong> is essential for artists to survive financially.</div>
<div class="round-item-personal">★ Do you think AI companies should pay royalties for using <strong>copyright</strong> material in their training?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Algorithmic art can be highly <strong>provocative</strong>, forcing us to redefine what creativity means. <br/><strong>B:</strong> True art should be <strong>provocative</strong> through human intention, not random mathematical variation.</div>
<div class="round-item-personal">★ What is the most <strong>provocative</strong> or challenging artwork you have ever seen?</div>
</div></div>"""

    r2_ai = """<div class="round-body" style="display:block;"><div class="round-type-badge">Debate</div><div class="vim-instruction">Analyze the disadvantages of both perspectives.</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> AI art is based on pattern replication, which destroys the very concept of <strong>originality</strong>. <br/><strong>B:</strong> Human artists often copy their mentors, which is no different from AI <strong>originality</strong> limits.</div>
<div class="round-item-personal">★ If an AI mimics a human style perfectly, does it possess any genuine <strong>originality</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Algorithms tend to produce a standardized, lifeless <strong>aesthetic</strong> that makes all art look similar. <br/><strong>B:</strong> Human taste is also shaped by media trends, creating a highly commercialized <strong>aesthetic</strong>.</div>
<div class="round-item-personal">★ Does the standard <strong>aesthetic</strong> of AI-generated images feel cold or artificial to you?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> The death of the physical <strong>canvas</strong> isolates viewers from the tactile nature of real artwork. <br/><strong>B:</strong> Traditional <strong>canvas</strong> materials are expensive and limit art accessibility to wealthy classes.</div>
<div class="round-item-personal">★ Do you think the physical <strong>canvas</strong> will eventually disappear in favor of digital screens?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Flooding the market with cheap digital files devalues the status of a classic <strong>masterpiece</strong>. <br/><strong>B:</strong> The elitist art market artificially inflates the price of any human-made <strong>masterpiece</strong>.</div>
<div class="round-item-personal">★ Does a digital image have the potential to be considered a historical <strong>masterpiece</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Laziness increases when creators rely on AI prompts rather than internal <strong>inspiration</strong>. <br/><strong>B:</strong> Modern life is so exhausting that artists need technological tools to spark their <strong>inspiration</strong>.</div>
<div class="round-item-personal">★ Do you worry that over-reliance on technology will dry up human <strong>inspiration</strong>?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Uncontrolled <strong>generative</strong> tools threaten to replace professional graphic designers and illustrators. <br/><strong>B:</strong> Resisting <strong>generative</strong> technology is futile and harms the development of modern digital design.</div>
<div class="round-item-personal">★ Should schools ban the use of <strong>generative</strong> models in art and design classes?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Removing the <strong>subjective</strong> soul of the artist leaves AI art empty and meaningless. <br/><strong>B:</strong> Human interpretation is so <strong>subjective</strong> that the creator's true identity is irrelevant to the viewer.</div>
<div class="round-item-personal">★ Can you appreciate an artwork even if you know nothing about its <strong>subjective</strong> origin?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> A society that relies on algorithms will lose the physical skill of manual <strong>craftsmanship</strong>. <br/><strong>B:</strong> Traditional <strong>craftsmanship</strong> can be slow, inefficient, and inaccessible for urgent commercial projects.</div>
<div class="round-item-personal">★ Do you worry that manual <strong>craftsmanship</strong> is becoming a lost art in our digital age?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> AI models are built on massive, unauthorized <strong>copyright</strong> infringement. <br/><strong>B:</strong> Outdated <strong>copyright</strong> laws block scientific and creative progress in the digital era.</div>
<div class="round-item-personal">★ How should society protect artists' <strong>copyright</strong> in the age of neural networks?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>A:</strong> Randomly generated images are often offensive or empty rather than genuinely <strong>provocative</strong>. <br/><strong>B:</strong> Keeping art safe and non-<strong>provocative</strong> leads to cultural stagnation.</div>
<div class="round-item-personal">★ Do you think art has a responsibility to be <strong>provocative</strong>, or should it focus on beauty?</div>
</div></div>"""

    update_file_rounds('events/sessions/debatable-relatable/ai-and-art.html', r1_ai, r2_ai)

    # 5. assisted-dying.html
    update_file_rounds('events/sessions/debatable-relatable/assisted-dying.html', None, MAPPINGS["assisted-dying.html"]["r2"])

    # 6. l-aide-active-a-mourir.html
    update_file_rounds('events/fr/sessions/debatable-relatable/l-aide-active-a-mourir.html', MAPPINGS["l-aide-active-a-mourir.html"]["r1"], MAPPINGS["l-aide-active-a-mourir.html"]["r2"])

    # 7. meta-subscriptions.html
    update_file_rounds('events/sessions/debatable-relatable/meta-subscriptions.html', MAPPINGS["meta-subscriptions.html"]["r1"], MAPPINGS["meta-subscriptions.html"]["r2"])

    # 8. pedagogy-and-practice.html
    update_file_rounds('events/sessions/debatable-relatable/pedagogy-and-practice.html', MAPPINGS["pedagogy-and-practice.html"]["r1"], MAPPINGS["pedagogy-and-practice.html"]["r2"])

    # 9. the-future-proof-educator.html
    update_file_rounds('events/sessions/debatable-relatable/the-future-proof-educator.html', MAPPINGS["the-future-proof-educator.html"]["r1"], MAPPINGS["the-future-proof-educator.html"]["r2"])

    # 10. upbringing-old-vs-modern.html
    update_file_rounds('events/sessions/debatable-relatable/upbringing-old-vs-modern.html', MAPPINGS["upbringing-old-vs-modern.html"]["r1"], MAPPINGS["upbringing-old-vs-modern.html"]["r2"])

if __name__ == "__main__":
    main()
