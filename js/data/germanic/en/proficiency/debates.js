(function() {
    const data = [{
                "topic": "The Protestant work ethic as civilisational achievement vs as the original source of adult misery — which legacy dominates today?",
                "sideA": "Civilisational achievement",
                "sideB": "Source of misery",
                "level": "proficiency",
                "theme": "work_identity_meaning_C2",
                "ideasA": [
                    "It catalyzed unprecedented socioeconomic development by institutionalizing diligence as a cardinal virtue.",
                    "The internalized drive for industriousness provides a coherent framework for individual purpose and societal stability."
                ],
                "ideasB": [
                    "It has entrenched a relentless cycle of performative productivity that precipitates widespread burnout and existential ennui.",
                    "Tethering human dignity exclusively to economic output facilitates the systemic erosion of leisure and the contemplative life."
                ]
            },
            {
                "topic": "The commodification of passion vs the liberation of turning work into meaning — is \"do what you love\" advice or a trap?",
                "sideA": "Advice",
                "sideB": "Trap",
                "level": "proficiency",
                "theme": "work_identity_meaning_C2",
                "ideasA": [
                    "Aligning professional pursuits with intrinsic interests fosters a state of 'flow' and profound psychological fulfillment.",
                    "The pursuit of meaningful work transcends mere subsistence, allowing for a more integrated and authentic existence."
                ],
                "ideasB": [
                    "Turning a hobby into a career subjects one's most cherished sanctuaries to the unforgiving logic of market valuation.",
                    "The 'passion' narrative often serves as a smokescreen for precarious labor conditions and self-exploitation."
                ]
            },
            {
                "topic": "Career as identity vs career as means — which is the more coherent relationship for a modern adult to have with their work?",
                "sideA": "Identity",
                "sideB": "Means",
                "level": "proficiency",
                "theme": "work_identity_meaning_C2",
                "ideasA": [
                    "Professional excellence provides a tangible metric for self-actualization and social contribution in a secular world.",
                    "An identity rooted in mastery and vocational calling offers resilience and a sense of continuity across the lifespan."
                ],
                "ideasB": [
                    "Maintaining a clear demarcation between the self and the role prevents identity collapse during periods of unemployment or retirement.",
                    "Viewing work as a purely instrumental utility preserves the cognitive and emotional bandwidth necessary for life's non-market dimensions."
                ]
            },
            {
                "topic": "The virtuous overworker vs the strategic idler — which has been more dishonestly celebrated in Western culture?",
                "sideA": "Overworker",
                "sideB": "Idler",
                "level": "proficiency",
                "theme": "work_identity_meaning_C2",
                "ideasA": [
                    "The glorification of 'hustle culture' obscures the diminishing returns of exhaustion and the systemic neglect of social reproduction.",
                    "Heroic narratives of overwork often serve to normalize exploitative organizational demands under the guise of individual merit."
                ],
                "ideasB": [
                    "The romanticization of the 'leisured class' or 'strategic slacker' often conceals the underlying economic privilege that makes idleness viable.",
                    "Celebrating non-productivity as a radical act can be a disingenuous aestheticization of passivity in the face of urgent collective challenges."
                ]
            },
            {
                "topic": "Adult ambition as admirable vs adult ambition as a failure to accept finitude — which reading is more psychologically honest?",
                "sideA": "Admirable",
                "sideB": "Failure to accept finitude",
                "level": "proficiency",
                "theme": "work_identity_meaning_C2",
                "ideasA": [
                    "Ambition represents the courageous refusal to stagnate, driving the expansion of human capability and creative boundaries.",
                    "The strive for excellence is a vital expression of the human will to leave a lasting, meaningful imprint on the world."
                ],
                "ideasB": [
                    "Incessant striving often functions as a neurotic defense mechanism against the terrifying reality of our inevitable insignificance and mortality.",
                    "A life of constant 'becoming' precludes the possibility of 'being,' leading to a perpetual state of future-oriented dissatisfaction."
                ]
            },
            {
                "topic": "Romantic love as the organising principle of adult life vs as a historically contingent and commercially sustained myth — which is more defensible?",
                "sideA": "Organising principle",
                "sideB": "Commercial myth",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Intimate partnership offers a unique locus of meaning, providing emotional sanctuary and a shared narrative in an atomized society.",
                    "The profound vulnerability of love serves as a powerful catalyst for moral growth and the transcendence of the ego."
                ],
                "ideasB": [
                    "The contemporary cult of romance places an unsustainable burden on a single relationship to fulfill all psychological and social needs.",
                    "Romanticism has been co-opted by consumer capitalism to sell an idealized lifestyle that prioritizes individual gratification over communal bonds."
                ]
            },
            {
                "topic": "Radical transparency in relationships vs the necessity of a private self — can intimacy and individuation coexist?",
                "sideA": "Transparency",
                "sideB": "Private self",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Absolute vulnerability is the only pathway to genuine intimacy, dismantling the defensive barriers that preclude true connection.",
                    "The removal of secrets fosters a culture of radical trust and precludes the slow rot of unexpressed grievances."
                ],
                "ideasB": [
                    "A degree of internal opacity is essential for maintaining a separate identity and preventing the 'emotional enmeshment' that stifles desire.",
                    "The 'total disclosure' mandate can be a subtle form of surveillance that erodes the sacredness of the individual's inner world."
                ]
            },
            {
                "topic": "The ethics of care as a feminist corrective vs as a reassignment of the same burdens — has the concept delivered on its promise?",
                "sideA": "Feminist corrective",
                "sideB": "Reassignment of burdens",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "It challenges the dominant patriarchal focus on abstract rights by prioritizing relationality and the fundamental fact of human dependency.",
                    "Centering care work elevates activities traditionally relegated to the private sphere to their rightful status as the bedrock of civilization."
                ],
                "ideasB": [
                    "Without radical structural redistribution, the rhetoric of 'care' often serves to romanticize and perpetuate gendered labor inequalities.",
                    "Focusing on care as an inherent virtue can inadvertently essentialize traits that have been socialized into marginalized groups for the benefit of the powerful."
                ]
            },
            {
                "topic": "Choosing to be childless as resistance to pronatalist ideology vs as an entirely personal decision with no political dimension — can these be cleanly separated?",
                "sideA": "Resistance",
                "sideB": "Personal decision",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "In a society that treats reproduction as a default moral duty, the choice to remain childless is an inherently subversive act of autonomy.",
                    "Refusing to participate in the generational reproduction of labor and capital constitutes a legitimate critique of contemporary socioeconomic structures."
                ],
                "ideasB": [
                    "Politicizing reproductive choices can be an invasive overreach that ignores the complex, often idiosyncratic personal factors at play.",
                    "Many individuals reach this decision through a process of private self-reflection that has little to do with broader ideological frameworks."
                ]
            },
            {
                "topic": "The awareness of mortality as the precondition for a meaningful adult life vs as its primary obstacle — which is the more liveable position?",
                "sideA": "Precondition",
                "sideB": "Obstacle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The finitude of time imbues our choices with gravity and urgency, preventing the drift into a state of perpetual procrastination.",
                    "Acknowledging death fosters a profound appreciation for the ephemeral beauty of the present and encourages the prioritization of what truly matters."
                ],
                "ideasB": [
                    "The omnipresent shadow of non-existence can induce a paralyzing nihilism that renders all human endeavor seemingly futile.",
                    "A preoccupation with mortality may preclude the joyful spontaneity and long-term investment required for a flourishing life."
                ]
            },
            {
                "topic": "Ageing as decline vs ageing as accumulation — which narrative is more honest, and which more useful?",
                "sideA": "Decline",
                "sideB": "Accumulation",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The physiological and cognitive erosion associated with ageing is a harsh biological reality that requires courageous confrontation rather than euphemism.",
                    "Accepting decline allows for a realistic adjustment of expectations and the cultivation of grace in the face of inevitable loss."
                ],
                "ideasB": [
                    "Ageing provides an unparalleled depth of perspective, emotional regulation, and a synthesis of experience that constitutes true wisdom.",
                    "The accumulation narrative empowers the elderly as vital repositories of cultural memory and advisors to subsequent generations."
                ]
            },
            {
                "topic": "The medicalisation of ageing as progress vs as a refusal to accept the human condition — where should the line be drawn?",
                "sideA": "Progress",
                "sideB": "Refusal",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "Technological interventions that extend the 'healthspan' alleviate immense human suffering and allow for longer periods of societal contribution.",
                    "Viewing ageing as a biological problem to be solved is the logical extension of the scientific quest to master nature for human benefit."
                ],
                "ideasB": [
                    "Pathologizing a natural life stage reflects a profound cultural phobia of vulnerability and a hubristic attempt to evade our inherent limitations.",
                    "The pursuit of immortality through medicine may lead to a stagnant society that lacks the regenerative vitality provided by the succession of generations."
                ]
            },
            {
                "topic": "Memory as the substance of adult identity vs memory as a highly unreliable narrator — what are the implications for how we construct a self?",
                "sideA": "Substance",
                "sideB": "Unreliable narrator",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The continuity of the self depends on a coherent autobiographical narrative that links our past actions to our present values.",
                    "Shared memories form the foundation of our most significant relationships and provide a stable sense of belonging."
                ],
                "ideasB": [
                    "The malleable nature of memory suggests that our 'identity' is a perpetual, often self-serving reconstruction rather than an objective record.",
                    "Recognizing the fallibility of our personal history allows for a more flexible and forgiving relationship with the person we used to be."
                ]
            },
            {
                "topic": "The adult citizen's complicity in unjust systems through ordinary consumption vs the structural irrelevance of individual moral purity — which is the more honest framing?",
                "sideA": "Complicity",
                "sideB": "Structural irrelevance",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Individual choices aggregate into market signals; refusing to acknowledge this causal link is a form of ethical abdication.",
                    "The 'ethical consumer' framework restores agency to the individual, insisting that no action is too small to carry moral weight."
                ],
                "ideasB": [
                    "Fixating on personal lifestyle choices often distracts from the large-scale institutional and regulatory changes required to address systemic injustice.",
                    "In a globalized economy, total moral purity is a logistical impossibility that serves only to induce debilitating guilt rather than effective action."
                ]
            },
            {
                "topic": "Political disillusionment as a rational response to available evidence vs as a form of privilege — which reading is more empirically defensible?",
                "sideA": "Rational response",
                "sideB": "Privilege",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Withdrawal from the political process may be a lucid acknowledgement of the systemic capture of institutions by entrenched interests.",
                    "The persistent failure of political systems to address existential threats makes skepticism the most evidence-based intellectual position."
                ],
                "ideasB": [
                    "The ability to 'opt-out' of politics is a luxury afforded only to those whose basic rights and needs are not currently under direct threat.",
                    "Cynicism often functions as a sophisticated excuse for apathy, abdicating the responsibility to protect those more vulnerable to policy shifts."
                ]
            },
            {
                "topic": "Intergenerational justice as the central moral challenge of our time vs as a concept that systematically obscures present-tense class and racial inequality — which is the stronger critique?",
                "sideA": "Moral challenge",
                "sideB": "Obscures inequality",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The unprecedented scale of environmental degradation creates a non-reciprocal obligation to future beings who cannot represent themselves.",
                    "Failing to account for the long-term consequences of current consumption constitutes a systemic theft from the unborn."
                ],
                "ideasB": [
                    "Rhetoric about 'future generations' is often used to defer urgent redistributive actions that would benefit the marginalized today.",
                    "An abstract focus on chronological justice can overlook the fact that the 'future' will be inherited by groups who are already starting from vastly different positions of power."
                ]
            },
            {
                "topic": "Liberal democracy as the least-bad system vs as a system that has structurally exhausted its reforming capacity — which verdict does the evidence support?",
                "sideA": "Least-bad system",
                "sideB": "Exhausted capacity",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The mechanisms of peaceful succession and institutionalized dissent remain the most effective safeguards against tyranny.",
                    "The historical adaptability of liberal systems suggests they possess an unparalleled capacity for self-correction over the long term."
                ],
                "ideasB": [
                    "The paralysis of democratic institutions in the face of escalating inequality and climate collapse suggests a terminal systemic failure.",
                    "Contemporary democracy has been hollowed out by technocratic governance and the overwhelming influence of concentrated capital."
                ]
            },
            {
                "topic": "The capacity for self-deception as a cognitive defect vs as an adaptive mechanism — which account better serves the adult who wants to live well?",
                "sideA": "Cognitive defect",
                "sideB": "Adaptive mechanism",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "A commitment to radical truth-telling is essential for making informed decisions and building authentic relationships based on reality.",
                    "Systematic self-deception precludes the possibility of genuine self-knowledge and the resolution of underlying psychological conflicts."
                ],
                "ideasB": [
                    "A degree of 'positive illusion' is often necessary to maintain the motivation and resilience required to face life's inherent hardships.",
                    "The human mind evolved to prioritize social cohesion and survival over the cold, objective processing of information."
                ]
            },
            {
                "topic": "Expertise as epistemic authority vs expertise as a form of institutional power that merits scrutiny — when does healthy scepticism become epistemic cowardice?",
                "sideA": "Epistemic authority",
                "sideB": "Institutional power",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "In an increasingly complex world, deference to specialized knowledge is a necessary cognitive labor-saving device and a prerequisite for effective policy.",
                    "The rigorous peer-review and empirical standards of expert communities provide the most reliable approximation of objective truth available."
                ],
                "ideasB": [
                    "The 'expert' class often reflects the biases and interests of the institutions that fund and legitimize their credentials.",
                    "Democratizing knowledge requires challenging the monopoly of credentialed elites on what counts as valid evidence or lived reality."
                ]
            },
            {
                "topic": "Narrative as the primary way adults make sense of their lives vs narrative as the primary way adults mislead themselves — which function dominates?",
                "sideA": "Sense-making",
                "sideB": "Misleading",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Storytelling allows us to synthesize disparate experiences into a meaningful whole, fostering psychological coherence and agency.",
                    "Human culture is fundamentally narrative; without it, we would inhabit a world of 'one damn thing after another' without purpose."
                ],
                "ideasB": [
                    "The desire for a 'tidy plot' often leads us to ignore data points that contradict our preferred self-image or ideological commitments.",
                    "Narrative structures impose a false teleology on life, masking the role of pure contingency and chaotic randomness in our personal histories."
                ]
            },
            {
                "topic": "Honesty as an unconditional virtue vs honesty as a contextual one — is there a coherent account of truthfulness that survives contact with real adult relationships?",
                "sideA": "Unconditional virtue",
                "sideB": "Contextual virtue",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Deception, however well-intentioned, erodes the intersubjective reality required for genuine human connection and trust.",
                    "A commitment to the truth reflects a fundamental respect for the autonomy of others, allowing them to respond to the world as it actually is."
                ],
                "ideasB": [
                    "The rigid application of 'brutal honesty' can be a form of cruelty that prioritizes one's own moral purity over the well-being of others.",
                    "Pragmatic 'social lubricants' and the selective sharing of information are essential for navigating the complexities of communal life and professional tact."
                ]
            },
            {
                "topic": "The adult who has \"finally figured it out\" vs the adult who has accepted they never will — which represents a more sophisticated relationship with reality?",
                "sideA": "Figured it out",
                "sideB": "Accepted never will",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Attaining a stable set of values and a clear understanding of one's place in the world is the hallmark of psychological maturity.",
                    "The synthesis of experience into actionable wisdom allows for a more effective and decisive engagement with life's challenges."
                ],
                "ideasB": [
                    "Wisdom consists in the Socratic recognition of the vastness of our ignorance and the radical contingency of our perspectives.",
                    "An openness to perpetual revision and the 'beginner's mind' prevents the intellectual calcification that often accompanies aging."
                ]
            },
            {
                "topic": "Telling your therapist everything vs telling your hairdresser everything — which professional relationship is empirically more transformative, and why does the answer make us uncomfortable?",
                "sideA": "Therapist",
                "sideB": "Hairdresser",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "The clinical setting provides a structured, theory-driven environment specifically designed for the deconstruction of deep-seated psychic patterns.",
                    "The therapist's professional neutrality and training in the 'unconscious' allow for insights that are impossible in casual conversation."
                ],
                "ideasB": [
                    "The low-stakes, tactile nature of the salon often facilitates a spontaneous and authentic vulnerability that clinical interventions can stifle.",
                    "The hairdresser represents a form of communal, 'everyday' care that is more integrated into the fabric of life than the artificiality of the fifty-minute hour."
                ]
            },
            {
                "topic": "Language as constitutive of thought vs language as merely expressive — does language shape or reflect reality?",
                "sideA": "Constitutive",
                "sideB": "Expressive",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The lexical and grammatical structures of our native tongue provide the very categories through which we perceive and conceptualize the world.",
                    "Linguistic relativity suggests that concepts for which we lack words remain effectively unthinkable or significantly more difficult to grasp."
                ],
                "ideasB": [
                    "Language is a downstream tool for communicating pre-linguistic cognitive processes and sensory experiences that are universal to the species.",
                    "The ability to invent new terminology to describe previously unmapped phenomena proves that thought precedes its linguistic articulation."
                ]
            },
            {
                "topic": "Precision vs ambiguity — which is the more valuable property of language in public discourse?",
                "sideA": "Precision",
                "sideB": "Ambiguity",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rigorous terminological clarity is the only defense against the intentional obfuscation and 'double-speak' used to manipulate public opinion.",
                    "Technical precision allows for the evidence-based debate and specific policy formulations required to solve complex societal problems."
                ],
                "ideasB": [
                    "Productive ambiguity allows for the formation of broad coalitions and the 'strategic vagueness' necessary for diplomatic compromise.",
                    "Nuanced, polysemic language is better suited to capturing the inherent contradictions and complexities of human social reality."
                ]
            },
            {
                "topic": "Rhetoric vs logic — which is ultimately more persuasive, and which should be?",
                "sideA": "Rhetoric",
                "sideB": "Logic",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Human beings are fundamentally narrative and emotional creatures; even the most sound argument fails if it does not resonate with the audience's values.",
                    "Eloquence and framing can bridge the gap between abstract truth and collective action, mobilizing people in ways that cold syllogisms cannot."
                ],
                "ideasB": [
                    "Logic provides the only objective, universal standard for validity, protecting discourse from the manipulative power of charismatic demagoguery.",
                    "A society that prioritizes style over substance is structurally vulnerable to misinformation and the erosion of epistemic standards."
                ]
            },
            {
                "topic": "Literal meaning vs interpretive meaning — who owns the meaning of a text?",
                "sideA": "Literal",
                "sideB": "Interpretive",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "The author's intent and the historical-grammatical context of a work's creation provide the only stable anchor for communication.",
                    "Radical subjectivism in interpretation renders the act of writing futile, as the text becomes merely a mirror for the reader's existing biases."
                ],
                "ideasB": [
                    "The 'death of the author' liberates the text to generate new meanings through its encounter with diverse cultural and temporal contexts.",
                    "Meaning is a co-creative process; a work only truly lives when it is filtered through the unique lived experience of the recipient."
                ]
            },
            {
                "topic": "Scientific consensus vs epistemic humility — when is deference to expertise warranted?",
                "sideA": "Consensus",
                "sideB": "Humility",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "The collective weight of peer-reviewed evidence is the most reliable guide for public policy, especially concerning existential risks like pandemics or climate change.",
                    "Dissent for its own sake, without rigorous counter-evidence, is often an exercise in vanity that jeopardizes public safety."
                ],
                "ideasB": [
                    "History is littered with 'scientific consensuses' that were later overturned; maintaining a degree of skepticism is essential for intellectual progress.",
                    "Deference to authority can become a form of 'scientism' that ignores the ethical, social, and philosophical dimensions of complex issues."
                ]
            },
            {
                "topic": "Expertise vs lived experience — which carries more evidential weight in public debate?",
                "sideA": "Expertise",
                "sideB": "Lived Experience",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Specialized training and data-driven analysis provide a panoramic view of systemic issues that personal anecdotes cannot capture.",
                    "Objective expertise is necessary to separate generalizable trends from the emotional intensity of individual, idiosyncratic events."
                ],
                "ideasB": [
                    "Those directly impacted by a policy possess a granular, qualitative understanding of its effects that abstract models often miss.",
                    "Privileging academic credentials over the testimony of marginalized groups can reinforce existing power imbalances and silence vital truths."
                ]
            },
            {
                "topic": "Doubt as intellectual virtue vs doubt as paralysis — when does scepticism become irresponsible?",
                "sideA": "Virtue",
                "sideB": "Paralysis",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "A persistent willingness to question one's own assumptions is the only safeguard against the dangers of ideological dogmatism.",
                    "Intellectual integrity requires the suspension of judgment until sufficient evidence has been gathered, regardless of social pressure."
                ],
                "ideasB": [
                    "Manufactured doubt is a common tactic used to stall urgent action on issues where the evidence is already overwhelmingly clear.",
                    "A refusal to commit to any position can be a form of epistemic cowardice that abdicates the responsibility to act in a world of uncertainty."
                ]
            },
            {
                "topic": "Narrative vs data — which more reliably moves people toward truth?",
                "sideA": "Narrative",
                "sideB": "Data",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Abstract statistics are often psychologically inert; we need 'the human story' to provide the moral salience necessary for genuine understanding.",
                    "Parables and histories contextualize raw facts, giving them a significance that allows for their integration into our worldview."
                ],
                "ideasB": [
                    "Narratives are susceptible to 'confirmation bias' and the 'availability heuristic,' leading us to overgeneralize from compelling but unrepresentative stories.",
                    "Quantitative data provides the only scale-accurate map of reality, protecting us from the manipulative power of emotionally charged anecdotes."
                ]
            },
            {
                "topic": "Legitimacy through consent vs legitimacy through outcome — what truly justifies political authority?",
                "sideA": "Consent",
                "sideB": "Outcome",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Political authority is only morally defensible when it is derived from the explicit and ongoing will of the governed.",
                    "The procedural fairness of the democratic process is the primary source of a state's right to demand obedience."
                ],
                "ideasB": [
                    "A government's primary justification is its ability to provide security, prosperity, and the efficient delivery of essential services.",
                    "Procedural legitimacy is hollow if the system consistently fails to produce the material conditions necessary for a flourishing society."
                ]
            },
            {
                "topic": "The state as guarantor of liberty vs the state as its primary threat — which is the more historically defensible view?",
                "sideA": "Guarantor",
                "sideB": "Threat",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Without the 'monopoly on the legitimate use of force' to enforce contracts and protect rights, life would be a state of chaotic private predation.",
                    "The modern state is the only entity capable of protecting the individual from the overwhelming power of corporations and other non-state actors."
                ],
                "ideasB": [
                    "History demonstrates that the state's capacity for surveillance, mass mobilization, and violence makes it the most dangerous predator of all.",
                    "The expansion of state bureaucracy inevitably leads to the 'iron cage' of technocratic control, eroding individual agency and local autonomy."
                ]
            },
            {
                "topic": "Rights-based politics vs responsibility-based politics — which makes for a more coherent public culture?",
                "sideA": "Rights",
                "sideB": "Responsibilities",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Focusing on inalienable individual rights provides a robust shield against the 'tyranny of the majority' and state overreach.",
                    "A rights-centric framework empowers marginalized groups to demand equal treatment and protection under the law."
                ],
                "ideasB": [
                    "An exclusive focus on rights fosters an atomized, litigious culture that ignores the reciprocal duties we owe to our community.",
                    "A coherent society requires a shared recognition of the collective burdens and moral obligations necessary to sustain the common good."
                ]
            },
            {
                "topic": "The ideal of neutrality vs the inevitability of value-laden governance — can the liberal state be truly neutral?",
                "sideA": "Neutrality",
                "sideB": "Value-laden",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The state must remain strictly agnostic toward 'the good life' to ensure that all citizens can pursue their own diverse conceptions of flourishing.",
                    "Procedural neutrality is the only way to maintain social peace in a pluralistic society with competing moral and religious frameworks."
                ],
                "ideasB": [
                    "Every law and policy implicitly embodies a specific set of moral priorities and visions of what constitutes a desirable society.",
                    "The claim of 'neutrality' is often a rhetorical mask for the dominant culture's values, presenting them as universal and beyond debate."
                ]
            },
            {
                "topic": "Intention vs reception — whose reading of a work is authoritative?",
                "sideA": "Intention",
                "sideB": "Reception",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "An artwork is a communicative act; ignoring the creator's specific aims leads to a profound failure of understanding and historical distortion.",
                    "Recovering the author's intent provides a necessary boundary against the 'anything goes' approach to critical interpretation."
                ],
                "ideasB": [
                    "Once a work enters the public sphere, it becomes independent of its creator, accruing new meanings based on the audience's response.",
                    "The 'authoritative' reading of a text is often used as a tool of cultural gatekeeping to suppress subversive or unorthodox interpretations."
                ]
            },
            {
                "topic": "Aesthetic value vs moral value — can a beautiful work also be an evil one?",
                "sideA": "Aesthetic",
                "sideB": "Moral",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Art should be judged by its internal formal qualities and expressive power, independent of the moral character of its creator or subject matter.",
                    "Conflating aesthetics with ethics leads to a didactic, moralizing culture that stifles creative exploration and complexity."
                ],
                "ideasB": [
                    "The power of beauty can be used to glamorize harmful ideologies, making the artist's moral responsibility inseparable from their aesthetic choices.",
                    "True 'artistic greatness' is incompatible with a worldview that fundamentally devalues human dignity or celebrates suffering."
                ]
            },
            {
                "topic": "The avant-garde vs accessibility — should art challenge or include?",
                "sideA": "Avant-garde",
                "sideB": "Accessibility",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Art's primary function is to disrupt habitual perception and expand the boundaries of the possible, even if this results in initial alienation.",
                    "The 'difficulty' of the avant-garde is a necessary resistance against the shallow, formulaic products of the commercial culture industry."
                ],
                "ideasB": [
                    "Art that requires an elite education to decipher is a form of class distinction that reinforces social exclusion.",
                    "The most profound works of art are those that achieve a universal resonance, speaking to shared human experiences across cultural divides."
                ]
            },
            {
                "topic": "Institutionalised art vs outsider art — which carries more authentic cultural weight?",
                "sideA": "Institutionalised",
                "sideB": "Outsider",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Institutions provide the necessary curation, conservation, and scholarly context that allow art to be understood as part of a historical tradition.",
                    "The rigorous standards of major museums and academies ensure that we preserve the highest achievements of human creativity."
                ],
                "ideasB": [
                    "Art produced outside the 'art world' system possesses a raw, unmediated intensity that is often sanitized by institutional recognition.",
                    "The 'outsider' perspective is essential for challenging the stale conventions and insular hierarchies of the cultural establishment."
                ]
            },
            {
                "topic": "The precautionary principle vs proactionary principle — which should govern emerging technologies?",
                "sideA": "Precautionary",
                "sideB": "Proactionary",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "When dealing with potentially existential or irreversible risks, the burden of proof must lie with those proposing the innovation to demonstrate its safety.",
                    "A cautious approach prevents the 'blind technological momentum' that has led to previous ecological and social catastrophes."
                ],
                "ideasB": [
                    "Hyper-precaution can stifle the very innovations needed to solve current crises, essentially choosing the certainty of present suffering over hypothetical future risks.",
                    "Human progress requires an 'active management' approach that prioritizes experimentation, iteration, and the courageous embrace of the unknown."
                ]
            },
            {
                "topic": "Scientific progress as inherently good vs progress as ethically neutral — who bears responsibility for the uses of knowledge?",
                "sideA": "Inherently Good",
                "sideB": "Ethically Neutral",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "The expansion of human knowledge is a foundational good that inevitably leads to the reduction of suffering and the expansion of freedom.",
                    "Even 'dangerous' discoveries are preferable to a state of forced ignorance, which merely cedes power to those willing to pursue knowledge in secret."
                ],
                "ideasB": [
                    "Scientific tools are morally 'dual-use'; their value depends entirely on the political and ethical frameworks in which they are deployed.",
                    "Scientists must accept an 'extended responsibility' for the foreseeable social and environmental impacts of their research."
                ]
            },
            {
                "topic": "Existential risk mitigation vs present suffering reduction — where should humanity's moral priorities lie?",
                "sideA": "Existential Risk",
                "sideB": "Present Suffering",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "The moral weight of trillions of potential future lives outweighs the immediate needs of the current generation; we must ensure the 'long-term' survival of the species.",
                    "Focusing on the present is a form of 'temporal parochialism' that risks the permanent termination of the human experiment."
                ],
                "ideasB": [
                    "Our primary moral obligation is to the concrete, breathing individuals suffering today, not to hypothetical beings in a speculative future.",
                    "The most effective way to ensure a stable future is to solve the systemic inequalities and ecological crises that are currently unfolding."
                ]
            },
            {
                "topic": "Human consciousness vs artificial general intelligence — could a machine ever be a moral patient?",
                "sideA": "Consciousness",
                "sideB": "AGI",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Moral status requires the capacity for 'sentience'—the subjective, qualitative experience of pain and pleasure—which is uniquely biological.",
                    "An AGI, however sophisticated, is ultimately a set of sophisticated algorithms lacking the 'inner life' that justifies moral concern."
                ],
                "ideasB": [
                    "If a machine exhibits behavioral markers of intelligence and suffering that are indistinguishable from a human's, denying it moral status is a form of 'carbon chauvinism.'",
                    "We should adopt a 'precautionary' approach to machine ethics, granting rights to sufficiently complex systems to avoid the risk of mass synthetic suffering."
                ]
            },
            {
                "topic": "Progress as real vs progress as illusion — is history moving anywhere?",
                "sideA": "Real",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The clear upward trend in life expectancy, literacy, and the global reduction of extreme poverty constitutes undeniable objective progress.",
                    "The expansion of the 'moral circle' to include previously marginalized groups suggests a slow but real civilizational maturation."
                ],
                "ideasB": [
                    "Technological advancement often merely changes the scale of our problems rather than solving them, leading to new forms of alienation and destructive capacity.",
                    "The 'myth of progress' is a secularized teleology that blinds us to the cyclical nature of history and the constant threat of regression."
                ]
            },
            {
                "topic": "Western liberal order vs multipolar world — which is the more stable basis for international relations?",
                "sideA": "Liberal Order",
                "sideB": "Multipolarity",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "A system based on universal human rights and international law provides the most reliable framework for global peace and cooperation.",
                    "The leadership of a dominant liberal coalition prevents the 'security dilemmas' and great-power conflicts typical of multipolar systems."
                ],
                "ideasB": [
                    "A multipolar world more accurately reflects the diversity of global values and interests, preventing the perceived imperialism of a single 'hegemon.'",
                    "Stability is best achieved through a realistic 'balance of power' and mutual respect for cultural and political sovereignty."
                ]
            },
            {
                "topic": "Memory vs forgetting — which is more essential to a healthy collective identity?",
                "sideA": "Memory",
                "sideB": "Forgetting",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "The refusal to forget past injustices is the only way to ensure accountability and prevent the repetition of historical atrocities.",
                    "A robust collective memory provides the shared narrative and cultural continuity necessary for social cohesion and identity."
                ],
                "ideasB": [
                    "A degree of 'strategic forgetting' is often required to move past long-standing communal grievances and achieve civil reconciliation.",
                    "Obsessive rumination on past glory or trauma can trap a society in the past, preventing the innovative adaptation required for the future."
                ]
            },
            {
                "topic": "The tragedy of the commons vs the possibility of cooperation — what does history tell us about human nature?",
                "sideA": "Tragedy",
                "sideB": "Cooperation",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Without coercive regulation or private ownership, individuals will inevitably prioritize their own short-term interests, leading to the depletion of shared resources.",
                    "The persistent failure to address global environmental challenges confirms the inherent difficulty of coordinating action at scale."
                ],
                "ideasB": [
                    "History is replete with examples of communities successfully managing 'the commons' through complex systems of social norms and mutual monitoring.",
                    "Human beings are 'obligate cooperators'; our greatest achievements are the result of our unique capacity for large-scale, flexible collaboration."
                ]
            },
            {
            "topic": "Silence vs speech — which carries more communicative power in moments of crisis?",
            "sideA": "Silence",
            "sideB": "Speech",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "Strategic silence can serve as a profound form of restraint, preventing the escalation of volatility and preserving the dignity of the unspeakable.",
                        "The refusal to participate in the 'cacophony of the moment' allows for the necessary space for reflection and the eventual emergence of more tempered truths."
            ],
            "ideasB": [
                        "Articulated speech is essential for providing clarity, directing collective action, and countering the spread of destabilizing misinformation.",
                        "The courageous act of speaking out provides a moral anchor for others, transforming private distress into a public, manageable narrative."
            ]
},
            {
            "topic": "Translation as fidelity vs translation as creative act — which is the more honest approach?",
            "sideA": "Fidelity",
            "sideB": "Creative act",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                        "The translator's primary moral obligation is to the author's original intent and the specific cultural-linguistic 'strangeness' of the source text.",
                        "Attempting to 'improve' or overly domesticate a work erodes its historical integrity and denies the reader a genuine encounter with the 'Other'."
            ],
            "ideasB": [
                        "A literalist approach often results in a dead text; true fidelity requires the creative recreation of the work's emotional and aesthetic impact in the target language.",
                        "Translation is an act of metamorphosis; the translator must be an artist in their own right to ensure the work's continued vitality in a new context."
            ]
},
            {
            "topic": "Institutional knowledge vs distributed knowledge — which is more robust against error?",
            "sideA": "Institutional knowledge",
            "sideB": "Distributed knowledge",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "Formal institutions provide the necessary structure, archival memory, and peer-reviewed rigor to filter out idiosyncratic or ephemeral errors.",
                        "The continuity of established protocols and specialized hierarchies ensures that knowledge remains stable and transferable across generations."
            ],
            "ideasB": [
                        "The 'wisdom of the crowd' and decentralized networks are less susceptible to the cognitive biases and systemic capture that plague insular institutions.",
                        "Distributed systems facilitate rapid error-correction through parallel processing and the diverse perspectives of independent actors."
            ]
},
            {
            "topic": "The map vs the territory — when does our model of reality become a prison?",
            "sideA": "The Map (Models)",
            "sideB": "The Territory (Reality)",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Abstract models are indispensable cognitive tools that allow us to navigate an otherwise overwhelming and chaotic sensory reality.",
                        "Model-building is the hallmark of human intelligence, enabling the prediction and manipulation of the environment for collective benefit."
            ],
            "ideasB": [
                        "Mistaking the model for the reality leads to a 'conceptual capture' where we ignore evidence that doesn't fit our pre-existing theoretical frameworks.",
                        "The richness of lived experience is inevitably flattened by abstraction; we must remain perpetually aware of the 'loss of signal' inherent in all representation."
            ]
},
            {
            "topic": "Revolution vs reform — which is the more effective engine of lasting change?",
            "sideA": "Revolution",
            "sideB": "Reform",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Systemic injustice often requires a radical rupture to dismantle entrenched power structures that are structurally incapable of self-correction.",
                        "A revolutionary moment reconfigures the 'horizon of the possible,' allowing for the birth of entirely new social and political imaginaries."
            ],
            "ideasB": [
                        "Incremental reform is more sustainable and less prone to the catastrophic violence and reactionary backlash that follow sudden upheavals.",
                        "Lasting change is built through the patient work of institution-building and the gradual shifting of cultural norms and legal precedents."
            ]
},
            {
            "topic": "Justice as procedure vs justice as outcome — what should we be aiming at?",
            "sideA": "Procedure",
            "sideB": "Outcome",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Fairness depends on the strict adherence to impartial rules; a system that prioritizes specific results risks becoming an instrument of arbitrary power.",
                        "Procedural justice ensures the long-term legitimacy of institutions by providing a predictable framework that respects individual rights regardless of the verdict."
            ],
            "ideasB": [
                        "A process is hollow if it consistently produces results that are manifestly unjust or perpetuate systemic inequality.",
                        "True justice requires the proactive rectification of historical wrongs and the achievement of substantive equity in material and social conditions."
            ]
},
            {
            "topic": "Form vs content — which is the truer measure of artistic achievement?",
            "sideA": "Form",
            "sideB": "Content",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                        "Artistic mastery is defined by the innovative manipulation of the medium; content is merely the occasion for the exercise of formal brilliance.",
                        "The aesthetic power of a work lies in its 'how' rather than its 'what,' transcending the mundane world through pure style and structure."
            ],
            "ideasB": [
                        "Art is fundamentally a communicative act; formal experimentation is empty virtuosity if it does not serve to deepen our understanding of the human condition.",
                        "The 'weight' of a work comes from its moral, social, or philosophical substance—the truth it reveals about the world we inhabit."
            ]
},
            {
            "topic": "The death of the author vs the author's continued relevance — has Barthes won?",
            "sideA": "Death of the Author",
            "sideB": "Author's Relevance",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                        "Interpretation belongs to the reader; the author's biography and stated intentions are irrelevant to the multi-dimensional meanings generated by the text itself.",
                        "Severing the work from its creator prevents the 'author-god' from imposing a single, authoritative meaning, allowing for radical hermeneutic freedom."
            ],
            "ideasB": [
                        "Art is an act of witness; understanding the creator's specific historical and personal context is essential for a responsible and ethical reading.",
                        "The 'authorial voice' provides a unique perspective and a set of intentional choices that constitute the work's primary source of value and meaning."
            ]
},
            {
            "topic": "Enhancement ethics vs the sanctity of natural limits — should humans be free to augment their capacities?",
            "sideA": "Enhancement",
            "sideB": "Natural Limits",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "The human condition has always been defined by the technological transcendence of biological constraints; augmentation is the logical continuation of this journey.",
                        "Enhancing cognitive or physical traits is a proactive expression of morphological freedom, allowing individuals to define their own version of flourishing."
            ],
            "ideasB": [
                        "Abandoning natural limits risks creating a permanent biological class divide and eroding the shared human experience of vulnerability and struggle.",
                        "There is an inherent 'wisdom of the body' and of evolution; hubristic interference with the genetic lottery may lead to unforeseen and irreversible consequences."
            ]
},
            {
            "topic": "Long-termism vs present-focused ethics — which should guide our most consequential decisions?",
            "sideA": "Long-termism",
            "sideB": "Present-focused",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "Future people have the same moral value as those alive today; we must prioritize the mitigation of existential risks to ensure the flourishing of trillions of potential lives.",
                        "Taking the 'long view' prevents the temporal parochialism that leads to the depletion of resources and the destabilization of the planetary biosystems."
            ],
            "ideasB": [
                        "Fixating on speculative future scenarios can be an excuse to ignore the acute suffering and systemic injustices currently facing the living.",
                        "The future is fundamentally unpredictable; our primary responsibility is to create a just and resilient present, which is the only reliable foundation for any future."
            ]
},
            {
            "topic": "Animal rights vs human exceptionalism — on what grounds can different moral status ever be justified?",
            "sideA": "Animal Rights",
            "sideB": "Human Exceptionalism",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "The capacity for sentience and the experience of pain should be the only relevant criteria for moral consideration, regardless of species.",
                        "Maintaining the human-animal hierarchy is an arbitrary form of 'speciesism' that justifies the systemic exploitation and industrial slaughter of conscious beings."
            ],
            "ideasB": [
                        "Humans possess unique capacities for moral agency, self-reflection, and cultural creation that ground a distinct and superior moral status.",
                        "The social contract and our deepest ethical obligations are fundamentally reciprocal; we have duties *regarding* animals, but not *to* them in the same sense as to other persons."
            ]
},
            {
            "topic": "Tragedy as the dominant mode of history vs comedy — which more accurately describes the human story?",
            "sideA": "Tragedy",
            "sideB": "Comedy",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "History is defined by the inevitable hubris of civilizations, the persistence of suffering, and the recurring failure of our most noble ideals.",
                        "The tragic lens captures the gravity of human finitude and the 'unbearable lightness' of being in a world indifferent to our desires."
            ],
            "ideasB": [
                        "The human story is one of absurd resilience, unexpected adaptation, and the persistent triumph of the 'small' over the 'grand' narrative.",
                        "Viewing history as comedy allows for a more forgiving and life-affirming perspective on our shared follies and the inherent randomness of fate."
            ]
},
            {
            "topic": "Civilisational decline as inevitable vs contingent — are we doomed by structure or by choices?",
            "sideA": "Inevitable",
            "sideB": "Contingent",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Civilizations are organic entities subject to the same laws of entropy, resource depletion, and institutional calcification as any complex system.",
                        "The 'iron law of oligarchy' and the accumulation of 'social fat' make the eventual collapse of large-scale societies a structural certainty."
            ],
            "ideasB": [
                        "Decline is a result of specific political failures and cultural choices; we possess the reflexive capacity to learn from history and innovate our way out of crisis.",
                        "Fatalism is a self-fulfilling prophecy; the belief in our agency is the primary prerequisite for the radical adaptation required to sustain civilization."
            ]
},
            {
            "topic": "The Socratic method vs just telling people the answer — is productive ignorance a kindness or a cruelty?",
            "sideA": "Socratic Method",
            "sideB": "Just telling the answer",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "True learning requires the active deconstruction of one's own assumptions; the discomfort of 'aporia' is the birth pang of genuine wisdom.",
                        "Guided inquiry fosters the critical thinking skills and intellectual autonomy necessary for an adult to navigate a world of competing truths."
            ],
            "ideasB": [
                        "Withholding known information can be a form of gatekeeping or intellectual elitism that wastes time and resources in an era of urgent challenges.",
                        "Direct instruction is an act of epistemic generosity, providing the necessary foundations for others to build upon rather than forcing them to reinvent the wheel."
            ]
},
            {
            "topic": "The Ship of Theseus vs your childhood self — at what point does gradual replacement become a different person, and does it matter?",
            "sideA": "Continuity of Self",
            "sideB": "Radical Discontinuity",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Identity is not found in the material substrate, but in the continuity of the pattern—the stream of memories, values, and relational commitments.",
                        "The self is a narrative project; as long as the story can be coherently told, the 'person' remains fundamentally the same across time."
            ],
            "ideasB": [
                        "The radical physiological and psychological shifts between childhood and adulthood suggest that we are a succession of different beings linked by a mere label.",
                        "Accepting the 'death' of our former selves allows for a more authentic engagement with the person we are becoming, free from the burden of an illusory permanence."
            ]
},
            {
            "topic": "Infinite wisdom vs infinite contentment — if forced to choose, which would constitute the better life and why can't we have both?",
            "sideA": "Infinite Wisdom",
            "sideB": "Infinite Contentment",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "The pursuit of truth is the highest human calling; a life of blissful ignorance is a diminished existence that lacks genuine dignity and agency.",
                        "Wisdom allows for a profound, if often painful, engagement with the reality of the world, which is inherently more valuable than a state of manufactured serenity."
            ],
            "ideasB": [
                        "The ultimate goal of all striving is the cessation of suffering; contentment is the only state that offers a final and absolute resolution to the human condition.",
                        "A life of peace and satisfaction is the only rational choice; wisdom that brings only misery is a self-defeating burden rather than a virtue."
            ]
},
            {
            "topic": "The word \"moist\" vs the concept of \"moist\" — is widespread phonaesthetic aversion a linguistic phenomenon or a cultural one?",
            "sideA": "Linguistic",
            "sideB": "Cultural",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "The physical articulation of the word—the combination of the nasal 'm' and the 'oi' diphthong—triggers an inherent sensory discomfort regardless of meaning.",
                        "Phonaesthesia suggests a deep-coded relationship between sound and feeling; certain phonemes possess a natural 'texture' that can be universally repellant."
            ],
            "ideasB": [
                        "The aversion is entirely socially constructed, driven by the word's association with bodily fluids and a collective 'meme-ification' of the disgust.",
                        "Language is an arbitrary system of signs; no sound is inherently 'gross' without the psychological baggage of cultural taboo and context."
            ]
},
            {
            "topic": "Being right and ignored vs being wrong and celebrated — which is the more accurate description of the human condition?",
            "sideA": "Right and Ignored",
            "sideB": "Wrong and Celebrated",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                        "Truth is often inconvenient or aesthetically unpleasing, leading to the systemic marginalization of those who refuse to flatter the consensus.",
                        "The history of science and philosophy is a long record of 'prophets in their own land' whose insights were only recognized long after their destruction."
            ],
            "ideasB": [
                        "Social cohesion and the 'agreeable lie' are more vital to human survival than cold, objective facts; we are evolved for status rather than for truth.",
                        "The charismatic delivery of a falsehood often carries more social utility and persuasive power than the clumsy articulation of a reality."
            ]
},
            {
            "topic": "Hot takes vs no takes — in an age of epistemic saturation, is silence the most radical intellectual act?",
            "sideA": "Hot Takes",
            "sideB": "No Takes",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                        "The rapid-fire exchange of provocative opinions is a vital form of intellectual play and a way to stress-test ideas in a hyper-connected public square.",
                        "Even 'shallow' engagement is better than withdrawal; the friction of competing perspectives is the only way to spark genuine collective insight."
            ],
            "ideasB": [
                        "The constant demand for 'reaction' erodes the capacity for deep thought; the refusal to have an immediate opinion is an act of cognitive sovereignty.",
                        "Strategic silence counters the 'attention economy' and prevents the dilution of discourse into a performance of performative certainty."
            ]
},
            {
            "topic": "Procrastination as pathology vs procrastination as philosophy — is delayed action ever the wisest form of agency?",
            "sideA": "Pathology",
            "sideB": "Philosophy",
            "level": "proficiency",
            "theme": "work_identity_meaning_C2",
            "ideasA": [
                        "Chronic delay is a failure of self-regulation and a form of self-sabotage that causes immense psychological distress and reduces societal contribution.",
                        "The 'optimistic' procrastinator is trapped in a cycle of avoidance that prevents the mastery and achievement necessary for a flourishing adult life."
            ],
            "ideasB": [
                        "Delaying action allows for the subconscious 'incubation' of ideas and ensures that we only commit our limited energy to what truly matters.",
                        "Procrastination can be a radical refusal to submit to the artificial 'urgency' of the market, preserving the space for a more organic and contemplative life."
            ]
}];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
