import os
import re
from bs4 import BeautifulSoup

MM_DIR = "events/sessions/mind-matters"

BATCH2_THEMES = {
    "bluewashing": {
        "title": "Bluewashing: The Corporate Shield of Global Pacts",
        "h1": "Bluewashing — The Corporate Shield of Global Pacts",
        "desc": "This session dissects the psychological mechanics of bluewashing—the strategic association with universal ethical symbols, such as UN covenants, to mask standard corporate malpractice. We will analyze how aligning with global prestige acts as a moral license, shielding institutions from domestic audits and critical public inspection.",
        "profile": {
            "tendency": "Seeking Ethical Reassurance",
            "trigger": "Corporate Sustainability Pledges",
            "phenomenon": "Moral Licensing",
            "anchor": "Discerning True Corporate Intent"
        },
        "vocab": [
            ("Bluewashing", "leveraging a partnership with the UN or global pacts to mask corporate malpractice.", "By plastering the UN logo on its website, the mining company was accused of bluewashing its chemical dumping record."),
            ("Malpractice", "improper, negligent, or illegal professional activity or treatment by an organization.", "The independent journalist exposed severe safety malpractice inside the lithium battery factory."),
            ("Covenant", "an agreement, contract, or solemn promise between parties.", "Signing the global safety covenant was supposed to guarantee better working conditions for the employees."),
            ("Accountability", "the obligation to explain, justify, or take responsibility for one's decisions and actions.", "Without external enforcement, voluntary agreements rarely lead to true corporate accountability."),
            ("Compliance", "the state or fact of meeting rules, standards, or international guidelines.", "The auditor checked if the oil company was in full compliance with the new ocean protection treaty."),
            ("Shield", "a person, thing, or strategy that defends or protects against criticism or accusation.", "The corporation used its charitable foundation as a shield against public anger during the spill."),
            ("Subversive", "seeking or intended to undermine or subvert an established system, treaty, or values.", "Signing a treaty while secretly lobbying to weaken it is a highly subversive business tactic."),
            ("Unregulated", "not controlled or supervised by any external regulatory authority or laws.", "The offshore drilling operations remained unregulated due to jurisdictional loopholes."),
            ("Credibility", "the quality of being trusted, believed in, and respected.", "The regulatory agency lost all credibility when it approved the flawed safety reports."),
            ("Audit", "an official, systematic inspection of an organization's accounts, ethics, or practices.", "An independent environmental audit revealed that the factory had been underreporting its emissions.")
        ],
        "warmup": [
            "Do you find that associating with prestigious international bodies like the UN makes a brand seem automatically trustworthy?",
            "How can global institutions ensure their symbols are not used as cheap marketing props?"
        ],
        "r1": [
            ("How does <strong>Bluewashing</strong> exploit our subconscious need for ethical reassurance to hide corporate greed?", "★ Have you ever preferred a brand because it claimed to align with UN global goals?"),
            ("Why does corporate <strong>Malpractice</strong> continue even after a company publicly signs a global ethics pact?", "★ Have you ever noticed a major disconnect between a company's slogans and its actual practices?"),
            ("Why are voluntary covenants rarely effective at preventing unethical behavior in <strong>Unregulated</strong> markets?", "★ How do you personally keep yourself accountable to your goals?"),
            ("Why is true <strong>Accountability</strong> so difficult to enforce on multinational corporations without external audits?", "★ Have you ever had to take responsibility for a significant mistake in your career?"),
            ("What distinguishes genuine <strong>Compliance</strong> from a clever public relations stunt to gain public trust?", "★ Does your company have strict <strong>Compliance</strong> rules that you find helpful or tedious?"),
            ("How do companies use philanthropic actions as a psychological <strong>Shield</strong> against public criticism?", "★ Have you ever forgiven a brand's mistakes because of their charity work?"),
            ("In what ways can corporate lobbying be considered a <strong>Subversive</strong> activity aimed at weakening environmental laws?", "★ How do you react when you discover a public figure is privately lobbying against their public statements?"),
            ("What are the environmental risks of leaving multinational maritime operations entirely <strong>Unregulated</strong>?", "★ Do you believe that more laws are needed to protect our shared environment?"),
            ("Why is public <strong>Credibility</strong> so fragile and easy to lose for global regulatory agencies?", "★ What is one institution in your country that you trust completely?"),
            ("What makes an independent ethical <strong>Audit</strong> highly valuable for discerning consumer habits?", "★ Do you read <strong>Audit</strong> reports or consumer reviews before making major purchases?")
        ],
        "lst": "The Global Pact Audit: Imagine you have been hired to audit a multinational corporation that uses a UN covenant to shield its chemical dumping. Present your findings to the board, explaining the consequences of their actions using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a corporation used superficial <strong>Bluewashing</strong> to hide environmental damage tomorrow, do you think consumers would notice it faster today?",
            "If we did not legally mandate independent audits, would we ever be able to hold multinationals accountable for corporate <strong>Malpractice</strong>?",
            "If global institutions refused to sign any ethical <strong>Covenant</strong> with corporate sponsors, would they lose their funding or gain moral authority?",
            "If you had been asked to design a system of global <strong>Accountability</strong> back then, would you have relied on strict legal penalties or voluntary public shaming?",
            "If they had met perfect legal <strong>Compliance</strong> years ago, would they have avoided the devastating oil spill?",
            "If the company had not used a beautiful humanitarian <strong>Shield</strong>, would the public have boycotted them much sooner?",
            "If a highly <strong>Subversive</strong> activist group had not exposed those corporate secrets, would the public still believe their lies today?",
            "If those maritime operations had been <strong>Unregulated</strong> for decades, would our oceans now be completely devoid of life today?",
            "If the regulator had lost its public <strong>Credibility</strong> last year, would citizens trust their green certificates today?",
            "If you had been appointed to lead an independent ethical <strong>Audit</strong> of a close friend's startup, would you now report their minor <strong>Compliance</strong> errors?"
        ]
    },
    "pinkwashing": {
        "title": "Pinkwashing: The Commodification of Diversity",
        "h1": "Pinkwashing — The Commodification of Diversity",
        "desc": "This session explores the psychological phenomenon of pinkwashing—the practice of leveraging LGBTQIA+ advocacy or 'rainbow capitalism' to deflect public scrutiny from labor exploitation or controversial practices. We will discuss how corporate empathy can be commercialized to burnish reputations, and how to differentiate between authentic allyship and performative gestures.",
        "profile": {
            "tendency": "Compassion for Minority Groups",
            "trigger": "LGBTQ+ Pride Campaign Commercials",
            "phenomenon": "Rainbow Capitalism",
            "anchor": "Genuine Allyship vs. Profit Motives"
        },
        "vocab": [
            ("Pinkwashing", "promoting LGBTQ+ rights to distract from other issues or mask corporate exploitation.", "Many firms are accused of pinkwashing during Pride month to boost sales."),
            ("Commodity", "a raw material, primary product, or abstract value that is bought and sold.", "In a hyper-capitalist economy, even social justice can become a valuable commodity."),
            ("Tokenism", "doing something only to show that you are inclusive or diverse.", "Hiring just one minority on the board felt like simple tokenism rather than genuine reform."),
            ("Burnish", "to polish, improve, or enhance one's public reputation.", "The airline sponsored minority art programs in an attempt to burnish its damaged image."),
            ("Incongruous", "not in harmony or keeping with the surroundings or other aspects of something.", "Their sudden vocal support for equality seemed incongruous with their history of labor exploitation."),
            ("Co-opt", "to take an idea or movement and use it for your own commercial goals.", "The major company tried to co-opt the local art style to appeal to youth."),
            ("Performative", "done just for public show rather than from real belief or conviction.", "Her donation felt performative because she filmed it for social media metrics."),
            ("Pandering", "the act of expressing or acting on policies merely to please a specific progressive audience.", "Politicians are often accused of pandering to progressive voters without enacting real change."),
            ("Sanitise", "to make something dirty, unethical, or controversial appear acceptable or clean.", "The public relations firm was hired to sanitise the dictator's human rights record."),
            ("Hypocrisy", "the practice of claiming to have moral beliefs to which one's behavior does not conform.", "There is deep hypocrisy in selling rainbow shirts while underpaying workers in developing nations.")
        ],
        "warmup": [
            "Why do we feel a sense of skepticism when a multi-billion-dollar brand changes its logo to a rainbow during June?",
            "Where does authentic allyship end and corporate marketing begin?"
        ],
        "r1": [
            ("How does <strong>Pinkwashing</strong> exploit our empathy for minority groups to deflect attention from labor abuses?", "★ Have you ever bought a product because of its socially progressive branding?"),
            ("How does turning human equality into a commercial <strong>Commodity</strong> diminish its political value?", "★ What is one thing in life you feel should never be turned into a <strong>Commodity</strong>?"),
            ("Why does corporate <strong>Tokenism</strong> feel so emotionally exhausting for marginalized employees?", "★ Have you ever felt like you were placed in a group just for symbolic representation?"),
            ("Why do companies invest millions to <strong>Burnish</strong> their images rather than fixing their internal wage structures?", "★ How do you personally assess if a company is genuinely ethical?"),
            ("How can we spot <strong>Incongruous</strong> corporate behavior where actions contradict progressive public statements?", "★ Have you ever stopped supporting a brand after discovering its unethical practices?"),
            ("How do power structures <strong>Co-opt</strong> the language of protest to preserve the status quo?", "★ Do you find corporate slogans about social justice inspiring or frustrating?"),
            ("What are the psychological dangers of living in a highly <strong>Performative</strong> culture?", "★ Do you ever feel pressured to post <strong>Performative</strong> opinions on social media?"),
            ("How does corporate <strong>Pandering</strong> to social groups erode trust in authentic social progress?", "★ Can you easily sense when a public speaker is <strong>Pandering</strong> to you?"),
            ("What public relations tactics do brands use to <strong>Sanitise</strong> their environmental impacts?", "★ How deep do you research before purchasing from a controversial brand?"),
            ("How does systemic <strong>Hypocrisy</strong> damage public faith in social activism?", "★ How do you personally handle <strong>Hypocrisy</strong> in your professional circle?")
        ],
        "lst": "The Diversity Panel: Imagine you are a diversity officer speaking at a corporate summit. Critique a performative rainbow campaign versus a genuine corporate reform, explaining how you would guide the company using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a corporation used <strong>Performative</strong> <strong>Pinkwashing</strong> tomorrow to boost sales, do you think progressive consumers would boycott them?",
            "If human rights were treated as a simple corporate <strong>Commodity</strong>, do you think social movements would lose their revolutionary power?",
            "If you were the only minority hired at a prestigious firm, would you stay to open doors or resign to avoid <strong>Tokenism</strong>?",
            "If the bank had not spent millions to <strong>Burnish</strong> its reputation last year, would its stock price have collapsed?",
            "If they had not launched such an <strong>Incongruous</strong> campaign, would they have avoided the public relations backlash?",
            "If major brands had not tried to <strong>Co-opt</strong> the civil rights movement, would activists have achieved more systemic reforms?",
            "If that <strong>Performative</strong> gesture had not raised public awareness back then, would we be as comfortable discussing diversity today?",
            "If the politician had not been accused of <strong>Pandering</strong> to minority groups, would they still hold their office today?",
            "If they had not hired a PR firm to <strong>Sanitise</strong> their human rights record, would their brand still enjoy credibility today?",
            "If you had to choose between polite corporate <strong>Hypocrisy</strong> and unfiltered prejudice, which would you want to live with today?"
        ]
    },
    "purple-washing": {
        "title": "Purple Washing: The Instrumentalisation of Feminism",
        "h1": "Purple Washing — The Instrumentalisation of Feminism",
        "desc": "This session deconstructs purple washing—the practice of co-opting feminist language and gender equality goals to sanitize corporate reputations or justify restrictive state policies. We will examine how superficial empowerment narratives like 'girl boss' mask systemic wage disparities and labor exploitation, and discuss how to discern genuine equity from public relations.",
        "profile": {
            "tendency": "Support for Equality",
            "trigger": "Feminist Branding & Marketing Slogans",
            "phenomenon": "Performative Allyship & Tokenism",
            "anchor": "Actions vs. Stated Progressive Values"
        },
        "vocab": [
            ("Purplewashing", "marketing or political strategy of using feminist rhetoric to burnish corporate reputations.", "Many activists accused the fashion brand of purplewashing when they released 'feminist' shirts made in sweatshops."),
            ("Empowerment", "to give someone the power and confidence to succeed and make their own choices.", "Education can empower young girls to build bright, independent careers."),
            ("Exploitation", "to use someone or something unfairly for your own advantage or profit.", "Some bad firms exploit young workers by paying extremely low wages under the guise of training."),
            ("Instrumentalise", "to use someone or something as a tool or instrument to achieve a selfish end.", "Politicians often instrumentalise women's safety to pass harsh, restrictive immigration laws."),
            ("Superficial", "existing or occurring only on the surface; not deep, thorough, or sincere.", "Changing the corporate banner to purple is a superficial gesture if the gender wage gap remains."),
            ("Rhetoric", "persuasive or impressive language, which is often lacking in sincerity or substance.", "We must look past the company's progressive rhetoric and examine their actual hiring practices."),
            ("Subvert", "to undermine, corrupt, or reverse the power and values of an established movement.", "Corporate interests often subvert radical protests by turning them into harmless marketing campaigns."),
            ("Matriarchy", "a social system or form of government ruled primarily by women.", "Anthropologists study whether true matriarchy has ever existed in historical civilizations."),
            ("Disparity", "a great, unfair difference, especially relating to pay, wealth, or social status.", "The significant pay disparity between male and female executives must be actively resolved."),
            ("Sincerity", "the quality of being open, honest, genuine, and free from hypocrisy.", "We trust him because we can feel his true sincerity in every action.")
        ],
        "warmup": [
            "What does the term 'girl boss' mean to you, and do you find it empowering or patronizing?",
            "How can we ensure that gender equality is treated as a fundamental right rather than a marketing trend?"
        ],
        "r1": [
            ("What is the central purpose of <strong>Purplewashing</strong> in modern corporate public relations?", "★ Have you ever noticed feminist slogans used to sell cosmetics or fashion?"),
            ("How does corporate marketing redefine the meaning of female <strong>Empowerment</strong> to sell more products?", "★ When in your life have you felt a genuine sense of <strong>Empowerment</strong>?"),
            ("Why is the <strong>Exploitation</strong> of low-wage female workers so often ignored in feminist branding campaigns?", "★ Do you check if the brands you buy have fair labor conditions for women?"),
            ("How do state authorities <strong>Instrumentalise</strong> gender equality to justify restrictive immigration policies?", "★ Have you ever seen politicians use women's rights to justify harsh policies?"),
            ("What makes a corporate diversity report merely <strong>Superficial</strong> without structural changes?", "★ What structural changes would you like to see for women in your workplace?"),
            ("Why does progressive <strong>Rhetoric</strong> lose its impact when it is not backed by objective wage parity?", "★ How do you react when you hear public figures talk about equality?"),
            ("How does commercial culture <strong>Subvert</strong> the revolutionary goals of gender justice movements?", "★ Do you feel that commercialized feminism has helped or harmed the cause?"),
            ("How does a family or societal dynamic change when it adopts elements of a <strong>Matriarchy</strong>?", "★ Who was the most influential female figure in your childhood?"),
            ("What psychological toll does a persistent wage <strong>Disparity</strong> take on professional women over their careers?", "★ Have you ever experienced or witnessed a significant <strong>Disparity</strong> in your field?"),
            ("Why is absolute <strong>Sincerity</strong> so hard to find in institutional advocacy and brand campaigns?", "★ How do you personally express your support for gender equality?")
        ],
        "lst": "The Boardroom Audit: Imagine you are auditing a bank that promotes women's financial independence while maintaining a large gender wage gap internally. Challenge the board and propose a reform using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a makeup brand used <strong>Purplewashing</strong> to sell lipstick tomorrow, do you think you would boycott their products?",
            "If corporate campaigns for female <strong>Empowerment</strong> were proven to be mere marketing tricks, do you think they would still have a positive impact?",
            "If a company had zero female executives but paid double the minimum wage, would you view it as a form of <strong>Exploitation</strong>?",
            "If the government had not tried to <strong>Instrumentalise</strong> women's safety back then, would citizens have accepted those laws?",
            "If they had implemented more than a <strong>Superficial</strong> diversity initiative years ago, would they still be facing a major lawsuit today?",
            "If their progressive <strong>Rhetoric</strong> had matched their actual executive pay, would the company have retained its key talent?",
            "If they had not tried to <strong>Subvert</strong> the union strike with a feminist ad campaign, would their reputation be stronger today?",
            "If we had completely replaced our patriarchal systems with a strict <strong>Matriarchy</strong> decades ago, would our society be more peaceful today?",
            "If a significant wage <strong>Disparity</strong> had not existed in your previous job, would you still be working there today?",
            "If you could measure the absolute <strong>Sincerity</strong> of every brand's moral claims, would you shop exclusively at local stores today?"
        ]
    },
    "redwashing": {
        "title": "Redwashing: The Illusion of Solidarity",
        "h1": "Redwashing — The Illusion of Solidarity",
        "desc": "This session explores the psychological mechanics of redwashing—the practice of presenting a corporation or political entity as pro-worker, socialist, or deeply progressive to mask capitalistic exploitation or greed. We will discuss how worker-centric narratives are co-opted to neutralize unionization demands and lower salaries, and reflect on true employee solidarity.",
        "profile": {
            "tendency": "Empathy Exploitation",
            "trigger": "Pro-Social or Socialist Slogans",
            "phenomenon": "Virtue Signaling & Co-optation",
            "anchor": "Discerning Genuine Social Solidarity"
        },
        "vocab": [
            ("Redwashing", "pretending to care about social equality and labor rights for corporate profit.", "The brand was accused of redwashing during the labor protests to pacify workers."),
            ("Progressive", "favoring or promoting social reform, equality, or liberal ideas.", "The university prides itself on its progressive policies and open-minded curriculum."),
            ("Exploitation", "to use someone or something unfairly for your own advantage or profit.", "Some bad firms exploit young workers by paying extremely low wages under the guise of internships."),
            ("Solidarity", "support or agreement between people with common goals and mutual interests.", "The workers showed deep solidarity during the long factory strike."),
            ("Capitalist", "relating to an economic system favoring private ownership and free markets.", "A capitalist model prioritizes shareholder profit above all other considerations."),
            ("Unionize", "to organize workers into a labor union to collectively negotiate and protect their rights.", "The warehouse staff voted to unionize in order to secure safer working conditions."),
            ("Corporatism", "the control of a state, society, or organization by large corporate interest groups.", "Critics argue that modern democracy has been replaced by a subtle form of corporatism."),
            ("Co-opt", "to take an idea or movement and use it for your own commercial goals.", "The major company tried to co-opt the local art style to make profits."),
            ("Benevolent", "well-meaning, kindly, charitable, or expressing goodwill.", "They want the public to see them as a benevolent employer that cares about the community."),
            ("Slogan", "a short and striking phrase used in advertising or political campaigns.", "The company's new slogan is simple and easy to remember.")
        ],
        "warmup": [
            "Have you ever worked at a company that called its employees a 'family'? Did it feel genuine or manipulative?",
            "How can we ensure that worker appreciation is expressed through fair wages rather than symbolic slogans?"
        ],
        "r1": [
            ("What is the main psychological objective behind <strong>Redwashing</strong> in modern employment relations?", "★ Have you ever noticed <strong>Progressive</strong> slogans in your own workplace?"),
            ("Why do companies want to be perceived as <strong>Progressive</strong> while fighting labor organization efforts?", "★ Do you consider your current professional environment to be <strong>Progressive</strong>?"),
            ("How does modern corporate culture hide ongoing worker <strong>Exploitation</strong> behind beautiful office perks?", "★ Have you ever felt taken advantage of by an employer?"),
            ("How can true employee <strong>Solidarity</strong> be built when a company discourages union organizing?", "★ When have you felt a strong sense of <strong>Solidarity</strong> with your colleagues?"),
            ("What are the core differences between a social democratic model and a hyper-<strong>Capitalist</strong> model of employment?", "★ Which economic system do you believe provides the best balance of freedom and safety?"),
            ("Why is there such strong corporate resistance when workers attempt to <strong>Unionize</strong> in modern warehouses?", "★ Is unionization common or encouraged in your industry?"),
            ("How does creeping <strong>Corporatism</strong> slowly undermine the power of local labor communities?", "★ Do you feel that large corporations have too much influence in your country?"),
            ("How do institutions <strong>Co-opt</strong> the history of labor struggles to sell products during public holidays?", "★ What is your opinion on brands using political symbols in their advertisements?"),
            ("What are the characteristics of a genuinely <strong>Benevolent</strong> employer in an unregulated market?", "★ Have you ever had a boss who went out of their way to support you?"),
            ("Why do simple marketing <strong>Slogans</strong> hold such a powerful psychological sway over consumers?", "★ What is one corporate <strong>Slogan</strong> you find particularly memorable?")
        ],
        "lst": "The Union Meeting: Imagine you are organizing warehouse workers after a company announcement that praises workers as 'heroes' while cutting bonuses. Deliver a speech to build solidarity, utilizing at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a corporation engaged in <strong>Redwashing</strong> tomorrow by using socialist symbols while underpaying staff, would you boycott them?",
            "If a highly <strong>Progressive</strong> tech firm banned its employees from unionizing but offered free meals, would you apply for a job there?",
            "If you found out that your clothing was made through severe worker <strong>Exploitation</strong>, would you throw it away out of principle?",
            "If you had been asked to show <strong>Solidarity</strong> with a local strike last year, would you have complied despite the major inconvenience?",
            "If a pure <strong>Capitalist</strong> system had been proven to be completely fair, would you have opposed any regulatory interventions?",
            "If your previous colleagues had decided to <strong>Unionize</strong> to demand better benefits, would you have joined them back then?",
            "If unchecked <strong>Corporatism</strong> had not replaced local democracy decades ago, would citizens have more power in their communities today?",
            "If the corporation had not tried to <strong>Co-opt</strong> local struggles, would those activist movements be more independent today?",
            "If they had always had a genuinely <strong>Benevolent</strong> owner, would the employees feel the need to form a union today?",
            "If that <strong>Progressive</strong> <strong>Slogan</strong> had not been printed on your company's walls, would you feel less frustrated by their current actions?"
        ]
    },
    "sportswashing": {
        "title": "Sportswashing: Prestige, Power, and Play",
        "h1": "Sportswashing — Prestige, Power, and Play",
        "desc": "This session explores the psychology of sportswashing—the systematic use of sporting spectacles, team ownership, and global sponsorships to soften the image of authoritarian regimes or controversial corporations. We will examine how athletic prestige and shared joy can be leveraged to deflect public criticism and distract from human rights violations, and reflect on our own emotional complicity as spectators.",
        "profile": {
            "tendency": "Hero & Spectacle Adoration",
            "trigger": "Elite Athletic Wins & Sports Events",
            "phenomenon": "Halo Effect & Associative Distraction",
            "anchor": "Separating Entertainment from Ethics"
        },
        "vocab": [
            ("Sportswashing", "using sports events to improve a bad reputation or deflect public criticism.", "The government used the football cup as a blatant form of sportswashing to mask human rights issues."),
            ("Prestige", "respect or admiration gained through success, status, or high quality.", "Winning the international championship brought great prestige to the local school."),
            ("Deflect", "to turn something aside, changing its direction or redirecting public focus.", "The politician tried to deflect attention from his economic failures by organizing a giant athletic parade."),
            ("Altruism", "the belief in or practice of disinterested and selfless concern for others.", "The billionaire's funding of local youth sports clubs was marketed as pure altruism."),
            ("Oligarch", "a very rich business leader with great, informal political influence.", "The foreign oligarch bought the football club to secure his status in high society."),
            ("Spectacle", "a visually striking performance, public show, or athletic display.", "The opening ceremony of the sports event was an incredibly beautiful spectacle."),
            ("Legitimize", "to make something dirty, unethical, or controversial appear acceptable and lawful.", "They hoped that associating with famous athletes would help legitimize their mineral operations."),
            ("Distraction", "something that diverts attention or stops you from focusing on core issues.", "Watching matches was a perfect distraction for citizens from the hyperinflation crisis."),
            ("Endorsement", "an act of giving one's public approval, support, or brand association.", "Securing a famous player's endorsement can instantly double a brand's credibility."),
            ("Collusion", "secret or illegal cooperation or conspiracy, especially in order to deceive the public.", "Journalists uncovered a systematic collusion between sports officials and the corrupt government.")
        ],
        "warmup": [
            "Can we separate our love for a sport or a team from our moral values when we discover who funds them?",
            "Why does sports have such a unique power to unite people and make them forget current controversies?"
        ],
        "r1": [
            ("What is the central psychological goal of <strong>Sportswashing</strong> on a global entertainment stage?", "★ Have you ever watched a tournament hosted in a country with a terrible human rights record?"),
            ("Why is international athletic <strong>Prestige</strong> so attractive to controversial political regimes?", "★ What sporting event or achievement has made you feel most proud of your country?"),
            ("How does a massive sports tournament help governments <strong>Deflect</strong> criticism from their internal policies?", "★ How do you personally handle distractions when trying to focus on important news?"),
            ("When does corporate sports sponsorship cross the line from genuine <strong>Altruism</strong> to reputation laundering?", "★ Do you believe that wealthy team owners ever act out of pure <strong>Altruism</strong>?"),
            ("How does the arrival of a foreign <strong>Oligarch</strong> change the historical identity of a local sports club?", "★ How would you feel if your favorite sports team was bought by a controversial billionaire?"),
            ("Why do humans find the collective emotional <strong>Spectacle</strong> of sports so intoxicating and unifying?", "★ What is the most emotionally intense sporting match you have ever watched?"),
            ("How does hosting a major event help to <strong>Legitimize</strong> an authoritarian regime in the eyes of tourists?", "★ Do you think athletic organizations should boycott hosting events in oppressive states?"),
            ("How do modern media companies use entertainment as a calculated <strong>Distraction</strong> from critical societal issues?", "★ What is your favorite way to disconnect from the stress of global news?"),
            ("What is the moral responsibility of an athlete when offered a lucrative brand <strong>Endorsement</strong>?", "★ Would you accept a high-paying job from a company with questionable morals?"),
            ("What are the long-term dangers of systematic <strong>Collusion</strong> between sports officials and political propaganda?", "★ How do you verify if a story about a sports scandal is accurate?")
        ],
        "lst": "The Press Conference: Imagine you are an elite athlete at a global tournament held in a country accused of human rights abuses. Address the media on sportswashing, explaining your position using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a controversial regime used <strong>Sportswashing</strong> tomorrow to host a major tournament, do you think you would boycott the games?",
            "If an authoritarian state bought your favorite football club to boost its international <strong>Prestige</strong>, do you think you would stop supporting the team?",
            "If a multi-millionaire used sports sponsorship to <strong>Deflect</strong> attention from tax evasion, would you still celebrate their contributions?",
            "If you had been a famous athlete back then, would you have refused that lucrative contract from a dictatorship?",
            "If an infamous <strong>Oligarch</strong> had invested in your local youth sports academy years ago, would you have allowed your child to train there?",
            "If a massive sports <strong>Spectacle</strong> had been used to cover up corruption, would you have blamed the organizers or the fans?",
            "If they had not hosted international tournaments to <strong>Legitimize</strong> their actions, would they face more global sanctions today?",
            "If you had not realized that elite sports were a political <strong>Distraction</strong>, would you still feel completely comfortable watching them today?",
            "If your favorite athlete had not signed that controversial <strong>Endorsement</strong> deal, would they still enjoy high public respect today?",
            "If there had always been systematic <strong>Collusion</strong> in that league, would fans still trust the match results today?"
        ]
    },
    "whitewashing": {
        "title": "Whitewashing: The Sanitization of History",
        "h1": "Whitewashing — The Sanitization of History",
        "desc": "This session examines the psychology of whitewashing—the deliberate concealing of historical injustices, systematic crimes, or institutional failures to preserve a clean reputation. We will discuss how nations, corporations, and families construct comfortable myths to protect their egos from the reality of their past, and analyze the psychological courage required to face the unvarnished truth.",
        "profile": {
            "tendency": "Discomfort with Historic Injustice",
            "trigger": "Revisionist Narratives & Media Portrayals",
            "phenomenon": "Cognitive Reframing",
            "anchor": "Embracing Uncomfortable Historical Truths"
        },
        "vocab": [
            ("Whitewash", "to deliberately conceal unpleasant facts, historical truths, or wrongdoings.", "The committee attempted to whitewash the systemic corruption in the department to save face."),
            ("Narrative", "a story or a specific way of explaining historical or personal events.", "The museum created a beautiful narrative about early explorers, omitting the brutal colonial realities."),
            ("Revisionism", "the conscious, politically motivated distortion of established historical records.", "The dictator's regime engaged in historical revisionism to glorify their origins."),
            ("Exculpate", "to declare or show that someone is not guilty of wrongdoing.", "The biased inquiry was clearly designed to exculpate the military leaders from blame."),
            ("Obfuscate", "to deliberately make something unclear, confusing, or difficult to understand.", "They used highly complex legal terms to obfuscate the truth from the voting public."),
            ("Complicity", "the state of being involved with others in an illegal activity or moral wrongdoing.", "By remaining silent, the board of directors showed their complicity in the environmental scandal."),
            ("Hegemony", "leadership, dominance, or systematic control by one country or social group.", "Western media hegemony has long dictated what stories are told on a global stage."),
            ("Expunge", "to erase, delete, or remove completely something unwanted or unpleasant.", "They tried to expunge all records of the pre-revolutionary protests from official textbooks."),
            ("Veneer", "an attractive, polite appearance that covers or disguises a darker true nature.", "Beneath his polite veneer lay a deeply manipulative and calculating personality."),
            ("Distortion", "changing or misrepresenting something to make it false or misleading.", "The news article was a complete distortion of what actually happened during the incident.")
        ],
        "warmup": [
            "Why do we find it easier to remember our past triumphs and forget our failures or mistakes?",
            "How does a family or a nation decide which historical stories are fit to be told?"
        ],
        "r1": [
            ("What are the psychological motives that drive an institution to <strong>Whitewash</strong> its past actions?", "★ Have you ever tried to gloss over a personal mistake to save face?"),
            ("How does a dominant cultural <strong>Narrative</strong> shape our view of minor history and marginalized voices?", "★ What is a historical <strong>Narrative</strong> you accepted in school but later questioned?"),
            ("Where is the boundary between genuine historical debate and political <strong>Revisionism</strong>?", "★ How do you react when someone tries to rewrite the history of your personal relationships?"),
            ("Why do powerful groups use biased inquiries to <strong>Exculpate</strong> themselves from historical blame?", "★ Have you ever been unfairly blamed for something, or let off too easily?"),
            ("How do public relations professionals use complex language to <strong>Obfuscate</strong> corporate scandals?", "★ When was the last time you felt a corporate statement was deliberately confusing?"),
            ("Why is admitting moral <strong>Complicity</strong> in systemic injustice so difficult for ordinary citizens?", "★ Have you ever stayed silent during an unfair situation at work or school?"),
            ("How does global media <strong>Hegemony</strong> affect which international struggles receive public empathy?", "★ Do you actively seek out news from diverse and non-traditional sources?"),
            ("Why is it nearly impossible to completely <strong>Expunge</strong> an event from collective memory?", "★ What is an event from your childhood that you wish you could <strong>Expunge</strong> from your mind?"),
            ("How do we recognize when a corporate ethical statement is just a superficial <strong>Veneer</strong>?", "★ What is a brand you feel has a <strong>Veneer</strong> of goodness but a dark core?"),
            ("What is the long-term psychological impact of systematic <strong>Distortion</strong> of the truth on a society?", "★ How do you feel when you realize you have been told a distorted story by a friend?")
        ],
        "lst": "The History Debate: Imagine you are a historian lecturing on a controversial event that the state has tried to whitewash. Deliver your analysis, explaining the mechanism of history sanitization using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If a powerful institution tried to <strong>Whitewash</strong> its colonial history today, do you think citizens would protest?",
            "If a school board chose to simplify the national <strong>Narrative</strong> to protect patriotism, would you support them?",
            "If we completely banned historical <strong>Revisionism</strong>, do you think we would restrict academic freedom?",
            "If you had been hired to write a biography of a famous leader, would you have tried to <strong>Exculpate</strong> their dark choices?",
            "If the government had not decided to <strong>Obfuscate</strong> its role in that disaster, would the truth have emerged sooner?",
            "If you had stayed silent while your colleague stole credit, would you have felt a deep sense of <strong>Complicity</strong>?",
            "If global media giants had not established their <strong>Hegemony</strong> decades ago, would we have more diverse news sources today?",
            "If the digital archive had not quietly decided to <strong>Expunge</strong> those photos, would they still cause public anger today?",
            "If they had always displayed a comforting <strong>Veneer</strong> of harmony, would we still feel this underlying tension today?",
            "If your memories of past trauma had not been a gross <strong>Distortion</strong>, would you feel more confident in your self-concept today?"
        ]
    },
    "brainwashing": {
        "title": "Brainwashing: The Architecture of Coercive Persuasion",
        "h1": "Brainwashing — The Architecture of Coercive Persuasion",
        "desc": "This session explores the unsettling history and psychology of coercive persuasion and cognitive manipulation. We will examine how systematic environments can quietly alter an individual's core beliefs, trigger deep cognitive dissonance, and dismantle their sense of autonomy. Together, we will reflect on the fragile boundary between educational guidance and psychological subjugation.",
        "profile": {
            "tendency": "Social Conformity & Compliance",
            "trigger": "High-Pressure Group Environments",
            "phenomenon": "Coercive Persuasion",
            "anchor": "Safeguarding Independent Critical Thought"
        },
        "vocab": [
            ("Indoctrinate", "to teach someone to accept a set of beliefs uncritically or without question.", "Extreme groups seek to indoctrinate recruits before they can question the rules."),
            ("Coercion", "the practice of persuading someone to do something by using force or threats.", "True, deeply-held belief cannot be successfully formed through coercion and fear."),
            ("Subjugate", "to bring under domination or control, especially by psychological means.", "The regime sought to subjugate all independent thinkers in the country."),
            ("Malleable", "easily influenced, shaped, or trained by external pressures.", "Young minds are highly malleable and receptive to external, repetitive narratives."),
            ("Cognitive dissonance", "the state of having inconsistent, conflicting thoughts, beliefs, or attitudes.", "Experiencing cognitive dissonance makes us uncomfortable enough to justify wrong choices."),
            ("Systemic", "relating to a system as a whole, rather than just some of its individual parts.", "The systemic nature of the propaganda made escape from it nearly impossible."),
            ("Gaslight", "to manipulate someone by psychological means into doubting their own reality and memory.", "They attempt to gaslight citizens into believing that the failing economy is actually thriving."),
            ("Compliance", "the state or fact of meeting rules, standards, or yielding to group expectations.", "The strict institution demands total compliance rather than independent thinking."),
            ("Deprogram", "to release someone from the psychological influence of a cult or brainwashing.", "It takes months of careful counseling to deprogram individuals who have left the sect."),
            ("Insidious", "proceeding in a gradual, subtle way, but with very harmful, cumulative effects.", "Insidious advertisements target our deepest insecurities without our conscious awareness.")
        ],
        "warmup": [
            "Have you ever realized that a belief you held deeply was actually just something you were taught to think?",
            "How do we differentiate between being thoroughly educated and being slowly indoctrinated?"
        ],
        "r1": [
            ("What psychological environments make a person easy to <strong>Indoctrinate</strong> without their awareness?", "★ Have you ever felt pressured to accept a belief system?"),
            ("Why is subtle manipulation often far more effective than direct physical <strong>Coercion</strong>?", "★ How do you react when someone tries to force you into <strong>Compliance</strong>?"),
            ("How do modern social media algorithms seek to <strong>Subjugate</strong> our attention and behavior?", "★ Do you feel in control of your digital consumption habits?"),
            ("In what ways are our daily consumer opinions more <strong>Malleable</strong> than we like to admit?", "★ Can you recall an opinion of yours that changed completely?"),
            ("How does <strong>Cognitive dissonance</strong> prevent us from admitting we were manipulated?", "★ When was the last time you felt uncomfortable due to conflicting beliefs?"),
            ("What is the risk of <strong>Systemic</strong> bias within modern educational and political institutions?", "★ Did your school encourage open, respectful debate on controversial societal issues?"),
            ("How can an individual protect their mental boundaries against efforts to <strong>Gaslight</strong> their memory?", "★ Have you ever had to firmly trust your own memory over someone else's insistent claims?"),
            ("Why do societies place such an incredibly high premium on behavioral <strong>Compliance</strong> and conformity?", "★ Do you find it easy or difficult to voice a disagreement when the group consensus is against you?"),
            ("What psychological challenges must be overcome when trying to <strong>Deprogram</strong> an ideological extremist?", "★ What is one cultural or familial myth you have successfully deprogrammed from your mind?"),
            ("Why are <strong>Insidious</strong> marketing campaigns far harder to counter than obvious, high-pressure propaganda?", "★ Have you ever discovered a highly <strong>Insidious</strong> hidden motive behind an advertisement or brand slogan?")
        ],
        "lst": "The Propaganda Audit: Imagine you have been hired to audit an insidious digital platform. Explain how it manipulates minds using at least one second conditional, one third conditional, and one mixed conditional.",
        "r2_cond": [
            "If you moved to another country tomorrow, do you think young minds would be easier to <strong>Indoctrinate</strong> there than here?",
            "If psychological <strong>Coercion</strong> were proven to be the only way to save the planet, would you support its subtle use?",
            "If a powerful leader sought to <strong>Subjugate</strong> public opinion by banning media, do you think citizens would fight back?",
            "If our personal values had not been so <strong>Malleable</strong> back then, would we have conformed to that group's expectations?",
            "If you had not experienced intense <strong>Cognitive dissonance</strong> during that job, would you have resigned years ago?",
            "If they had not built a <strong>Systemic</strong> propaganda machine, would the citizens have realized the truth sooner?",
            "If they had not tried to <strong>Gaslight</strong> your memories of that event, would you still trust their intentions today?",
            "If the institution had always demanded absolute <strong>Compliance</strong>, would employees feel so creative today?",
            "If you had successfully managed to <strong>Deprogram</strong> your family member back then, would your relationship be more peaceful today?",
            "If that <strong>Insidious</strong> influence had not been operating in your life for a decade, would you have a different self-concept today?"
        ]
    }
}

def refactor_file(filename, spec_key):
    filepath = os.path.join(MM_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        return

    spec = BATCH2_THEMES[spec_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Detect level B1 or B2
    is_b1 = "-intermediate.html" in filename or "brainwashing-intermediate" in filename
    level_suffix = " (B1)" if is_b1 else " (B2)"
    level_full = "Intermediate (B1)" if is_b1 else "Upper-Intermediate (B2)"

    # Update Title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = f"{spec['title']} — COSYlanguages"

    # Update H1
    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = spec['h1']

    # Update Breadcrumb current level text
    breadcrumbs = soup.find(class_='cosy-breadcrumbs')
    if breadcrumbs:
        current_span = breadcrumbs.find(class_='current')
        if current_span:
            # e.g., 'Bluewashing (B1)'
            base_name = spec_key.replace("-", " ").title().replace("washing", "washing")
            current_span.string = f"{base_name}{level_suffix}"

    # Update Meta Level
    meta_grid = soup.find(class_='session-meta-grid')
    if meta_grid:
        for item in meta_grid.find_all(class_='meta-item'):
            h4 = item.find('h4')
            if h4 and h4.string == "Level":
                p = item.find('p')
                if p:
                    p.string = level_full

    # Update Description Box (the div under metadata with inline style containing margin-bottom)
    desc_p = soup.find(style=re.compile("margin-bottom: 2rem;"))
    if desc_p:
        inner_p = desc_p.find('p')
        if inner_p:
            inner_p.string = spec['desc']
        else:
            desc_p.string = spec['desc']

    # Update Profile Box
    profile_box = soup.find(class_='mind-profile-box')
    if profile_box:
        grid = profile_box.find(class_='mind-profile-grid')
        if grid:
            items = grid.find_all(class_='mind-profile-item')
            if len(items) >= 4:
                items[0].find('span').string = spec['profile']['tendency']
                items[1].find('span').string = spec['profile']['trigger']
                items[2].find('span').string = spec['profile']['phenomenon']
                items[3].find('span').string = spec['profile']['anchor']

    # Update Vocabulary Section
    vocab_grid = soup.find(class_='vocab-grid-10')
    if vocab_grid:
        vocab_grid.clear()
        for word, definition, example in spec['vocab']:
            card_html = f"""<div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word.replace("'", "\\'")}', definition:'{definition.replace("'", "\\'")}', example:'{example.replace("'", "\\'")}'}}, this)">Add to Dictionary</button>
      </div>"""
            card_soup = BeautifulSoup(card_html, 'html.parser')
            vocab_grid.append(card_soup)

    # Update Warm-up Block
    warmup_el = soup.find(id='s-warm')
    if warmup_el:
        body = warmup_el.find(class_='round-body')
        if body:
            questions_ul = body.find('ul', class_='round-questions')
            if questions_ul:
                questions_ul.clear()
                for q in spec['warmup']:
                    li = soup.new_tag('li')
                    li.string = q
                    questions_ul.append(li)

    # Update Round 1 Block
    r1_el = soup.find(id='s-r1')
    if r1_el:
        body = r1_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Questions"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Use .round-item-main and .round-item-personal."
            body.append(vi)

            for main_q, pers_q in spec['r1']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                pers_div = soup.new_tag('div', attrs={"class": "round-item-personal"})
                pers_soup = BeautifulSoup(pers_q, 'html.parser')
                for el in list(pers_soup.contents):
                    pers_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                item_div.append(pers_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Update Let's Speak Together Block
    lst_el = soup.find(id='s-lst')
    if lst_el:
        body = lst_el.find(class_='round-body')
        if body:
            body.clear()
            p_note = soup.new_tag('p', attrs={"class": "round-note"})
            # parse bold strings
            p_soup = BeautifulSoup(spec['lst'], 'html.parser')
            for el in list(p_soup.contents):
                p_note.append(el)
            body.append(p_note)

    # Update Round 2 Block
    r2_el = soup.find(id='s-r2')
    if r2_el:
        body = r2_el.find(class_='round-body')
        if body:
            # Clear previous round items
            for item in body.find_all(class_='round-item'):
                item.decompose()
            for rtb in body.find_all(class_='round-type-badge'):
                rtb.decompose()
            for vi in body.find_all(class_='vim-instruction'):
                vi.decompose()

            # Add badge and instruction
            badge = soup.new_tag('div', attrs={"class": "round-type-badge"})
            badge.string = "Dilemmas & Projections"
            body.append(badge)

            vi = soup.new_tag('div', attrs={"class": "vim-instruction"})
            vi.string = "10 items required. Speculate, brainstorm, and share your personal opinions and ideas."
            body.append(vi)

            for main_q in spec['r2_cond']:
                item_div = soup.new_tag('div', attrs={"class": "round-item"})

                main_div = soup.new_tag('div', attrs={"class": "round-item-main"})
                main_soup = BeautifulSoup(main_q, 'html.parser')
                for el in list(main_soup.contents):
                    main_div.append(el)

                item_div.append(main_div)
                item_div.append('\n')
                body.append(item_div)
                body.append('\n')

    # Save file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.prettify(formatter=None))
    print(f"Refactored: {filepath}")

def main():
    print("Beginning Mind Matters Batch 2 Full Refactoring...")
    # Loop over all files in Batch 2
    for spec_key, spec in BATCH2_THEMES.items():
        # Match files that have the theme prefix
        if spec_key == "brainwashing":
            files = ["brainwashing-intermediate.html", "brainwashing-upper-intermediate.html"]
        else:
            files = [f"{spec_key}-intermediate.html", f"{spec_key}-upper-intermediate.html"]

        for filename in files:
            refactor_file(filename, spec_key)

    print("Batch 2 completed successfully!")

if __name__ == "__main__":
    main()
