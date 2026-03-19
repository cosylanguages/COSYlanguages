const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Is breakfast the most important meal?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Are dogs better pets than cats?",
                "level": "starter",
                "theme": "leisure_A1"
            },
            {
                "text": "Should children have mobile phones?",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Is it better to live in a house or an apartment?",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            },
            {
                "text": "Can we live without the internet for a week?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Should everyone learn a second language?",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Is social media destroying our social skills?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Should public transport be free?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            },
            {
                "text": "Genetic engineering: Progress or peril?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Is universal basic income a solution to automation?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            },
            {
                "text": "Does free will truly exist or is it an illusion?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "The ethics of colonizing other planets.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [
            {
                "text": "I think, therefore I am.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            },
            {
                "text": "The only constant is change.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [{"topic":"The Protestant work ethic as civilisational achievement vs as the original source of adult misery — which legacy dominates today?","sideA":"Civilisational achievement","sideB":"Source of misery","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"The commodification of passion vs the liberation of turning work into meaning — is \"do what you love\" advice or a trap?","sideA":"Advice","sideB":"Trap","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Career as identity vs career as means — which is the more coherent relationship for a modern adult to have with their work?","sideA":"Identity","sideB":"Means","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"The virtuous overworker vs the strategic idler — which has been more dishonestly celebrated in Western culture?","sideA":"Overworker","sideB":"Idler","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Adult ambition as admirable vs adult ambition as a failure to accept finitude — which reading is more psychologically honest?","sideA":"Admirable","sideB":"Failure to accept finitude","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Romantic love as the organising principle of adult life vs as a historically contingent and commercially sustained myth — which is more defensible?","sideA":"Organising principle","sideB":"Commercial myth","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Radical transparency in relationships vs the necessity of a private self — can intimacy and individuation coexist?","sideA":"Transparency","sideB":"Private self","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The ethics of care as a feminist corrective vs as a reassignment of the same burdens — has the concept delivered on its promise?","sideA":"Feminist corrective","sideB":"Reassignment of burdens","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Choosing to be childless as resistance to pronatalist ideology vs as an entirely personal decision with no political dimension — can these be cleanly separated?","sideA":"Resistance","sideB":"Personal decision","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The awareness of mortality as the precondition for a meaningful adult life vs as its primary obstacle — which is the more liveable position?","sideA":"Precondition","sideB":"Obstacle","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Ageing as decline vs ageing as accumulation — which narrative is more honest, and which more useful?","sideA":"Decline","sideB":"Accumulation","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The medicalisation of ageing as progress vs as a refusal to accept the human condition — where should the line be drawn?","sideA":"Progress","sideB":"Refusal","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},
            {"topic":"Memory as the substance of adult identity vs memory as a highly unreliable narrator — what are the implications for how we construct a self?","sideA":"Substance","sideB":"Unreliable narrator","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The adult citizen's complicity in unjust systems through ordinary consumption vs the structural irrelevance of individual moral purity — which is the more honest framing?","sideA":"Complicity","sideB":"Structural irrelevance","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Political disillusionment as a rational response to available evidence vs as a form of privilege — which reading is more empirically defensible?","sideA":"Rational response","sideB":"Privilege","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Intergenerational justice as the central moral challenge of our time vs as a concept that systematically obscures present-tense class and racial inequality — which is the stronger critique?","sideA":"Moral challenge","sideB":"Obscures inequality","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Liberal democracy as the least-bad system vs as a system that has structurally exhausted its reforming capacity — which verdict does the evidence support?","sideA":"Least-bad system","sideB":"Exhausted capacity","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The capacity for self-deception as a cognitive defect vs as an adaptive mechanism — which account better serves the adult who wants to live well?","sideA":"Cognitive defect","sideB":"Adaptive mechanism","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Expertise as epistemic authority vs expertise as a form of institutional power that merits scrutiny — when does healthy scepticism become epistemic cowardice?","sideA":"Epistemic authority","sideB":"Institutional power","level":"proficiency","theme": "epistemology_truth_C2","ideasA":[],"ideasB":[]},
            {"topic":"Narrative as the primary way adults make sense of their lives vs narrative as the primary way adults mislead themselves — which function dominates?","sideA":"Sense-making","sideB":"Misleading","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Honesty as an unconditional virtue vs honesty as a contextual one — is there a coherent account of truthfulness that survives contact with real adult relationships?","sideA":"Unconditional virtue","sideB":"Contextual virtue","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"The adult who has \"finally figured it out\" vs the adult who has accepted they never will — which represents a more sophisticated relationship with reality?","sideA":"Figured it out","sideB":"Accepted never will","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Telling your therapist everything vs telling your hairdresser everything — which professional relationship is empirically more transformative, and why does the answer make us uncomfortable?","sideA":"Therapist","sideB":"Hairdresser","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},

            {"topic": "The four-day working week vs the five-day week — which model benefits workers and employers more?", "sideA": "4-day week", "sideB": "5-day week", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Universal basic income vs targeted welfare — which is the more effective safety net for working adults?", "sideA": "UBI", "sideB": "Targeted welfare", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "The gig economy vs permanent employment — which model better serves workers in the long run?", "sideA": "Gig economy", "sideB": "Permanent employment", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Meritocracy vs structural advantage — which more accurately explains career success?", "sideA": "Meritocracy", "sideB": "Structural advantage", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Pay transparency vs salary privacy — which creates a fairer workplace?", "sideA": "Transparency", "sideB": "Privacy", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Automation vs human labour — which is the bigger long-term threat to adult employment?", "sideA": "Automation", "sideB": "Human labour", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Remote work vs office presence — which is better for career progression and team culture?", "sideA": "Remote work", "sideB": "Office presence", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Equal parental leave for men and women vs longer maternity leave — which policy is fairer?", "sideA": "Equal leave", "sideB": "Longer maternity", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Choosing not to have children vs social pressure to have a family — which deserves more respect?", "sideA": "Choosing no children", "sideB": "Family pressure", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Marriage as an institution vs cohabitation without marriage — which is more relevant today?", "sideA": "Marriage", "sideB": "Cohabitation", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Dual-income households vs one partner staying home — which model is better for children and adults?", "sideA": "Dual income", "sideB": "One partner at home", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "The gender pay gap as a structural problem vs a matter of individual choices — which explanation holds more weight?", "sideA": "Structural problem", "sideB": "Individual choices", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Home ownership as the goal vs a professional rental market — which housing model suits modern adults better?", "sideA": "Ownership", "sideB": "Rental market", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Gentrification as improvement vs gentrification as displacement — which framing is more honest?", "sideA": "Improvement", "sideB": "Displacement", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Urban density vs suburban sprawl — which is the better model for liveable cities?", "sideA": "Urban density", "sideB": "Suburban sprawl", "level": "upper-intermediate", "theme": "globalisation_trade_B2", "ideasA": [], "ideasB": []},
            {"topic": "Living close to family vs moving away for opportunity — which choice produces better long-term wellbeing?", "sideA": "Living close", "sideB": "Moving away", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "An ageing population as a crisis vs as a resource — which framing is more productive?", "sideA": "Crisis", "sideB": "Resource", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Personal responsibility for health vs systemic factors — which carries more weight in explaining health outcomes?", "sideA": "Personal responsibility", "sideB": "Systemic factors", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Mental health days as a legitimate workplace right vs a source of abuse — where should employers draw the line?", "sideA": "Legitimate right", "sideB": "Source of abuse", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Preventive medicine vs curative medicine — which should receive more public funding?", "sideA": "Preventive", "sideB": "Curative", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Anti-ageing medicine vs ageing gracefully — which attitude is more coherent?", "sideA": "Anti-ageing", "sideB": "Ageing gracefully", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Surveillance technology for public safety vs the right to privacy — where should the balance lie?", "sideA": "Public safety", "sideB": "Privacy", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Social media as a tool for civic engagement vs as a driver of polarisation — which effect dominates?", "sideA": "Civic engagement", "sideB": "Polarisation", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "AI in recruitment vs human judgment — which produces fairer hiring decisions?", "sideA": "AI", "sideB": "Human judgment", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "The right to be forgotten online vs the public's right to information — which should take precedence?", "sideA": "Right to be forgotten", "sideB": "Right to info", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Compulsory voting vs voluntary voting — which produces healthier democracies?", "sideA": "Compulsory", "sideB": "Voluntary", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Political engagement through protest vs through institutional channels — which is more effective for adults today?", "sideA": "Protest", "sideB": "Institutional", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "National identity vs European or global identity — which is more meaningful for adults in 2026?", "sideA": "National identity", "sideB": "Global identity", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Tax rises to fund public services vs spending cuts — which is the more defensible political choice?", "sideA": "Tax rises", "sideB": "Spending cuts", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Admitting you have no idea how your pension works vs confidently pretending you do — which is the more universal adult experience?", "sideA": "Admitting ignorance", "sideB": "Pretending", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Being the person who always plans social events vs always being the person who just shows up — which role is more exhausting?", "sideA": "The planner", "sideB": "The guest", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Having a strong opinion about your colleagues' kitchen habits vs not caring at all — which person is more tolerable?", "sideA": "Strong opinion", "sideB": "Not caring", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Attending every optional work social event vs never attending any — which strategy is better for your career and sanity?", "sideA": "Attending all", "sideB": "Attending none", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Adults who are still confused by their tax return vs adults who enjoy doing it — which group is more trustworthy?", "sideA": "Confused", "sideB": "Enjoy it", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Complaining about the cost of living to friends vs pretending everything is fine — which is the more honest adult response?", "sideA": "Complaining", "sideB": "Pretending fine", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Flat organisational hierarchies vs vertical management structures — which better serves the adults who work within them?", "sideA": "Flat hierarchy", "sideB": "Vertical structure", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "The cult of productivity vs the case for idleness — which better reflects what humans actually need from work?", "sideA": "Productivity", "sideB": "Idleness", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Leadership as a learnable skill vs leadership as an innate quality — which account is more empirically defensible?", "sideA": "Learnable skill", "sideB": "Innate quality", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Hustle culture vs slow living — which is winning, and which should win?", "sideA": "Hustle culture", "sideB": "Slow living", "level": "advanced", "theme": "routine_A1", "ideasA": [], "ideasB": []},
            {"topic": "Corporate social responsibility as genuine commitment vs as reputational management — which framing is more honest?", "sideA": "Genuine commitment", "sideB": "Reputational management", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Adult identity as fixed vs perpetually in construction — which account better reflects lived experience?", "sideA": "Fixed identity", "sideB": "In construction", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The domestication of feminism by consumer culture vs feminism genuinely reshaping adult life — which is more true?", "sideA": "Consumer feminism", "sideB": "Genuine reshape", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Midlife crisis as pathology vs midlife crisis as legitimate reassessment — which framing is more useful?", "sideA": "Pathology", "sideB": "Reassessment", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The pressure to be extraordinary vs the dignity of an ordinary life — which is the more humane ideal to hold?", "sideA": "Extraordinary", "sideB": "Ordinary dignity", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The obligation to care for ageing parents vs the state's responsibility — where should the burden fall?", "sideA": "Family obligation", "sideB": "State responsibility", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Radical honesty in relationships vs strategic silence — which is the more ethical approach to intimacy?", "sideA": "Radical honesty", "sideB": "Strategic silence", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Choosing your social circle deliberately vs letting relationships form organically — which produces more authentic adult friendships?", "sideA": "Deliberate choice", "sideB": "Organic formation", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The nuclear family as the optimal social unit vs as a historically contingent arrangement — which view is more defensible?", "sideA": "Optimal unit", "sideB": "Historical arrangement", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Technocratic governance vs democratic populism — which poses the greater long-term risk to adult citizens?", "sideA": "Technocracy", "sideB": "Populism", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Intergenerational justice vs present welfare — which should take priority in public policy?", "sideA": "Intergenerational justice", "sideB": "Present welfare", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The obligation to vote vs the right to abstain — which is the more defensible civic position?", "sideA": "Obligation to vote", "sideB": "Right to abstain", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Patriotism as a civic virtue vs patriotism as a cognitive failure — which account is more persuasive?", "sideA": "Civic virtue", "sideB": "Cognitive failure", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Free speech absolutism vs regulated speech — which produces better outcomes for adult democratic societies?", "sideA": "Absolutism", "sideB": "Regulated speech", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "A meaningful career vs a job that funds a meaningful private life — which is the more honest adult ambition?", "sideA": "Meaningful career", "sideB": "Funding private life", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Religion vs secular philosophy — which more effectively addresses the existential needs of modern adults?", "sideA": "Religion", "sideB": "Secular philosophy", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The examined life vs the absorbed life — which is more worth living, and who gets to decide?", "sideA": "Examined life", "sideB": "Absorbed life", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Legacy vs presence — which is a more coherent thing for an adult to strive for?", "sideA": "Legacy", "sideB": "Presence", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "The adult who has \"finally figured it out\" vs the adult who has accepted they never will — which is more self-aware?", "sideA": "Figured it out", "sideB": "Accepted never will", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Telling your therapist everything vs telling your hairdresser everything — which professional relationship is more therapeutically effective?", "sideA": "Therapist", "sideB": "Hairdresser", "level": "advanced", "theme": "psychological_concepts_C1", "ideasA": [], "ideasB": []},
            {"topic": "The Sunday anxiety of an adult with a full schedule vs the Sunday anxiety of an adult with an empty one — which is more existentially troubling?", "sideA": "Full schedule", "sideB": "Empty schedule", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Overthinking every major life decision vs making them impulsively — which strategy has the better empirical track record?", "sideA": "Overthinking", "sideB": "Impulsiveness", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Adults who read self-help books vs adults who refuse to — which group is harder to talk to at a dinner party?", "sideA": "Self-help readers", "sideB": "Refuse to read", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},

            {"topic": "A high salary vs a short commute — which matters more in a job?", "sideA": "High salary", "sideB": "Short commute", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Changing jobs often vs staying in the same company — which is better for your career?", "sideA": "Changing jobs", "sideB": "Staying", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working overtime vs leaving on time every day — which is the better habit?", "sideA": "Overtime", "sideB": "On time", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?", "sideA": "Strict boss", "sideB": "Relaxed boss", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working in a big company vs a small company — which is better?", "sideA": "Big company", "sideB": "Small company", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Getting a promotion vs getting more free time — which would you choose?", "sideA": "Promotion", "sideB": "Free time", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Buying a house vs renting for life — which is the smarter financial decision?", "sideA": "Buying", "sideB": "Renting", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Living in the city centre vs living in the suburbs — which is better?", "sideA": "City centre", "sideB": "Suburbs", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Spending money on experiences vs on things — which makes you happier?", "sideA": "Experiences", "sideB": "Things", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cooking every day vs meal prepping once a week — which is more practical?", "sideA": "Daily cooking", "sideB": "Meal prepping", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Having a cleaner vs doing your own housework — which is a better choice?", "sideA": "Cleaner", "sideB": "Do it yourself", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Living with a partner vs living alone — which is better for adults?", "sideA": "With partner", "sideB": "Alone", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Having children early vs having children later in life — which is better?", "sideA": "Early", "sideB": "Later", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Close family relationships vs independence from family — which is more important as an adult?", "sideA": "Close relationships", "sideB": "Independence", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Meeting new people vs keeping old friendships — which is more valuable?", "sideA": "New people", "sideB": "Old friends", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Socialising after work vs going straight home — which is better for work relationships?", "sideA": "Socialising", "sideB": "Going home", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Going to the gym vs exercising outdoors — which is better for adults?", "sideA": "Gym", "sideB": "Outdoors", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Strict diet vs eating everything in moderation — which is healthier?", "sideA": "Strict diet", "sideB": "Moderation", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?", "sideA": "Early", "sideB": "Waiting", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?", "sideA": "8 hours", "sideB": "6 hours + exercise", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Reducing stress through sport vs through relaxation — which works better?", "sideA": "Sport", "sideB": "Relaxation", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?", "sideA": "Smartphones", "sideB": "Face-to-face", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Online banking vs going to the bank — which is better?", "sideA": "Online", "sideB": "Going to bank", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working with paper vs working digitally — which is more efficient?", "sideA": "Paper", "sideB": "Digital", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Social media for networking vs meeting people in person — which is more useful professionally?", "sideA": "Social media", "sideB": "In person", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Package holiday vs independent travel — which is better for adults?", "sideA": "Package", "sideB": "Independent", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "City break vs beach holiday — which is a better way to relax?", "sideA": "City break", "sideB": "Beach holiday", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "One long holiday a year vs several short breaks — which is better?", "sideA": "One long", "sideB": "Several short", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travelling as a couple vs travelling alone — which is more enjoyable?", "sideA": "As a couple", "sideB": "Alone", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?", "sideA": "Telling all", "sideB": "Keeping to self", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?", "sideA": "First thing", "sideB": "After breakfast", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?", "sideA": "Knowing names", "sideB": "Not knowing", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Grocery shopping with a list vs without a list — which type of person has a better life?", "sideA": "With list", "sideB": "Without list", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Telling your boss you are sick vs going to work sick — which is the braver choice?", "sideA": "Telling boss", "sideB": "Going sick", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Remote work vs office work — which is better for productivity and wellbeing?", "sideA": "Remote", "sideB": "Office", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Job security vs career growth — which should adults prioritise?", "sideA": "Security", "sideB": "Growth", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Starting your own business vs working for an employer — which is the better choice at 30?", "sideA": "Own business", "sideB": "Working for employer", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ambition vs work-life balance — can you really have both?", "sideA": "Ambition", "sideB": "Balance", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Networking vs skill-building — which advances your career more?", "sideA": "Networking", "sideB": "Skills", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Honest feedback from a manager vs being left to work independently — which motivates adults more?", "sideA": "Feedback", "sideB": "Independence", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Changing career at 40 vs staying in your field — which is the wiser decision?", "sideA": "Changing career", "sideB": "Staying", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Paying off a mortgage early vs investing that money — which is smarter?", "sideA": "Pay off early", "sideB": "Investing", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Owning a home vs renting permanently — which suits modern adult life better?", "sideA": "Owning", "sideB": "Renting", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Saving for retirement early vs enjoying money in your thirties — which is wiser?", "sideA": "Saving early", "sideB": "Enjoying now", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Living below your means vs spending to enjoy life now — which approach is healthier?", "sideA": "Below means", "sideB": "Enjoy now", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Two incomes in a household vs one partner staying home — which works better for families?", "sideA": "Two incomes", "sideB": "One staying home", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Having children vs choosing not to — which is a more fulfilling adult life?", "sideA": "Having children", "sideB": "No children", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Strict parenting vs permissive parenting — which produces happier adults?", "sideA": "Strict", "sideB": "Permissive", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Long-term relationship vs staying single — which is better for personal growth?", "sideA": "Relationship", "sideB": "Single", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Keeping work and personal life separate vs integrating them — which is healthier?", "sideA": "Separate", "sideB": "Integrated", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Moving abroad as a couple vs staying close to family — which is the right call?", "sideA": "Moving abroad", "sideB": "Staying close", "level": "intermediate", "theme": "travel_cultural_B1", "ideasA": [], "ideasB": []},
            {"topic": "Prioritising physical health vs mental health — which should adults focus on first?", "sideA": "Physical", "sideB": "Mental", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Private healthcare vs relying on the public system — which is the better adult strategy?", "sideA": "Private", "sideB": "Public", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Regular medical check-ups vs only going when ill — which is the smarter approach?", "sideA": "Regular checks", "sideB": "Only when ill", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Reducing alcohol vs reducing stress — which has a greater impact on adult health?", "sideA": "Reducing alcohol", "sideB": "Reducing stress", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Individual freedom vs community responsibility — which should guide adult decisions?", "sideA": "Freedom", "sideB": "Responsibility", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Optimism about the future vs realism — which is the more useful attitude for adults?", "sideA": "Optimism", "sideB": "Realism", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Changing the world vs building a stable personal life — which is the more honest ambition?", "sideA": "Changing world", "sideB": "Stable life", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Volunteering your time vs donating money — which does more good?", "sideA": "Volunteering", "sideB": "Donating", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Following your generation's values vs questioning them — which is more admirable?", "sideA": "Following", "sideB": "Questioning", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Knowing how much your colleagues earn vs not knowing — which is better for office harmony?", "sideA": "Knowing", "sideB": "Not knowing", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Replying to messages immediately vs taking your time — which is more respectful in adult life?", "sideA": "Immediately", "sideB": "Taking time", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Admitting you have no idea what a pension fund is vs pretending you do — which is the more relatable adult experience?", "sideA": "Admitting", "sideB": "Pretending", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Cancelling plans at the last minute vs going out when you don't want to — which is the worse adult habit?", "sideA": "Cancelling", "sideB": "Going anyway", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Talking openly about money with friends vs keeping it private — which is the more mature approach?", "sideA": "Talking openly", "sideB": "Keeping private", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},

            {"topic": "Coffee vs tea — which is a better morning drink?", "sideA": "Coffee", "sideB": "Tea", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Restaurant vs home cooking — which is better?", "sideA": "Restaurant", "sideB": "Home cooking", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Breakfast vs no breakfast — which is better for you?", "sideA": "Breakfast", "sideB": "None", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Water vs juice — which is healthier?", "sideA": "Water", "sideB": "Juice", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Meat vs vegetables — which is more important in a meal?", "sideA": "Meat", "sideB": "Vegetables", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "House vs flat — which is better to live in?", "sideA": "House", "sideB": "Flat", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "City vs village — which is a better place to live?", "sideA": "City", "sideB": "Village", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cash vs card — which is better to pay with?", "sideA": "Cash", "sideB": "Card", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Saving money vs spending money — which is better?", "sideA": "Saving", "sideB": "Spending", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Renting vs buying — which is better?", "sideA": "Renting", "sideB": "Buying", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Morning work vs evening work — which is better?", "sideA": "Morning", "sideB": "Evening", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Car vs bus — which is better to go to work?", "sideA": "Car", "sideB": "Bus", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Walking vs driving — which is better in the city?", "sideA": "Walking", "sideB": "Driving", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Office vs home — which is a better place to work?", "sideA": "Office", "sideB": "Home", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Morning person vs night person — which is better?", "sideA": "Morning", "sideB": "Night", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Summer vs winter — which season is better?", "sideA": "Summer", "sideB": "Winter", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Short holiday vs long holiday — which is better?", "sideA": "Short", "sideB": "Long", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Phone call vs message — which is better?", "sideA": "Call", "sideB": "Message", "level": "starter", "theme": "technology_A1", "ideasA": [], "ideasB": []},
            {"topic": "Morning shower vs evening shower — which is correct?", "sideA": "Morning", "sideB": "Evening", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Monday vs Friday — which day is better?", "sideA": "Monday", "sideB": "Friday", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Too hot vs too cold — which is worse?", "sideA": "Too hot", "sideB": "Too cold", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Window seat vs aisle seat — which is better on a plane?", "sideA": "Window", "sideB": "Aisle", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working full-time vs working part-time — which is better?", "sideA": "Full-time", "sideB": "Part-time", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working in an office vs working from home — which do you prefer?", "sideA": "Office", "sideB": "Home", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "A job you love vs a job that pays well — which is more important?", "sideA": "Job you love", "sideB": "Pays well", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Working with other people vs working alone — which is better?", "sideA": "With people", "sideB": "Alone", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "A short commute vs a long commute — which is more acceptable?", "sideA": "Short", "sideB": "Long", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Living alone vs living with a partner — which is better?", "sideA": "Alone", "sideB": "Partner", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Big city vs small town — which is a better place to live as an adult?", "sideA": "Big city", "sideB": "Small town", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cooking at home vs eating out — which is better for daily life?", "sideA": "At home", "sideB": "Eating out", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Having children vs not having children — which life is better?", "sideA": "Children", "sideB": "No children", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Renting a flat vs buying a house — which is better for young adults?", "sideA": "Renting", "sideB": "Buying", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Exercise every day vs rest — which is better for your health?", "sideA": "Exercise", "sideB": "Rest", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Going to the doctor vs waiting — which is better when you feel ill?", "sideA": "Doctor", "sideB": "Waiting", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?", "sideA": "8 hours", "sideB": "Less", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Walking to work vs taking the car — which is better for your health?", "sideA": "Walking", "sideB": "Car", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Online shopping vs shopping in a store — which do you prefer?", "sideA": "Online", "sideB": "Store", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Saving for the future vs enjoying money now — which is wiser?", "sideA": "Saving", "sideB": "Enjoying now", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Expensive things vs cheap things — which is better value?", "sideA": "Expensive", "sideB": "Cheap", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Buying new vs buying second-hand — which is better?", "sideA": "New", "sideB": "Second-hand", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Watching TV at home vs going out — which is a better evening?", "sideA": "TV", "sideB": "Going out", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Holidays with family vs holidays with friends — which is better?", "sideA": "Family", "sideB": "Friends", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Staying in your country vs travelling abroad — which is a better holiday?", "sideA": "Your country", "sideB": "Abroad", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Sport vs reading — which is a better hobby for adults?", "sideA": "Sport", "sideB": "Reading", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Seeing friends often vs having time alone — which is more important?", "sideA": "Friends", "sideB": "Alone", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Replying to emails immediately vs leaving them for later — which is more professional?", "sideA": "Immediately", "sideB": "Later", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?", "sideA": "Immediately", "sideB": "Tomorrow", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Being always early vs always five minutes late — which is worse at work?", "sideA": "Early", "sideB": "Late", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Having a very organised desk vs a messy desk — which person is more productive?", "sideA": "Organised", "sideB": "Messy", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?", "sideA": "Work talk", "sideB": "No work talk", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},

            {
                "topic": "Language: Constitutive vs Expressive",
                "sideA": "Constitutive",
                "sideB": "Expressive",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Shapes reality",
                    "Limits thought"
                ],
                "ideasB": [
                    "Reflects reality",
                    "Tool for thought"
                ]
            },
            {
                "topic": "Precision vs Ambiguity",
                "sideA": "Precision",
                "sideB": "Ambiguity",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Clarity",
                    "Efficiency"
                ],
                "ideasB": [
                    "Nuance",
                    "Diplomacy"
                ]
            },
            {
                "topic": "Rhetoric vs Logic",
                "sideA": "Rhetoric",
                "sideB": "Logic",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Persuasive power",
                    "Emotional appeal"
                ],
                "ideasB": [
                    "Objective truth",
                    "Structural validity"
                ]
            },
            {
                "topic": "Literal vs Interpretive Meaning",
                "sideA": "Literal",
                "sideB": "Interpretive",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Author intent",
                    "Stability"
                ],
                "ideasB": [
                    "Reader response",
                    "Evolving context"
                ]
            },
            {
                "topic": "Scientific Consensus vs Epistemic Humility",
                "sideA": "Consensus",
                "sideB": "Humility",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Established knowledge",
                    "Expert authority"
                ],
                "ideasB": [
                    "Openness to correction",
                    "Recognizing limits"
                ]
            },
            {
                "topic": "Expertise vs Lived Experience",
                "sideA": "Expertise",
                "sideB": "Lived Experience",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Scientific rigor",
                    "Objective data"
                ],
                "ideasB": [
                    "Authentic truth",
                    "Contextual insight"
                ]
            },
            {
                "topic": "Doubt: Virtue vs Paralysis",
                "sideA": "Virtue",
                "sideB": "Paralysis",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Critical thinking",
                    "Skepticism"
                ],
                "ideasB": [
                    "Indecision",
                    "Lack of action"
                ]
            },
            {
                "topic": "Narrative vs Data",
                "sideA": "Narrative",
                "sideB": "Data",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Emotional impact",
                    "Human connection"
                ],
                "ideasB": [
                    "Statistical truth",
                    "Scalability"
                ]
            },
            {
                "topic": "Legitimacy: Consent vs Outcome",
                "sideA": "Consent",
                "sideB": "Outcome",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Democratic process",
                    "Moral right"
                ],
                "ideasB": [
                    "Efficiency",
                    "Effective governance"
                ]
            },
            {
                "topic": "State: Guarantor of Liberty vs Threat",
                "sideA": "Guarantor",
                "sideB": "Threat",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rule of law",
                    "Protection of rights"
                ],
                "ideasB": [
                    "Abuse of power",
                    "Surveillance"
                ]
            },
            {
                "topic": "Rights-based vs Responsibility-based Politics",
                "sideA": "Rights",
                "sideB": "Responsibilities",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Individual liberty",
                    "Legal protection"
                ],
                "ideasB": [
                    "Collective duty",
                    "Social cohesion"
                ]
            },
            {
                "topic": "Neutrality vs Value-laden Governance",
                "sideA": "Neutrality",
                "sideB": "Value-laden",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Impartiality",
                    "Fairness"
                ],
                "ideasB": [
                    "Moral direction",
                    "Social purpose"
                ]
            },
            {
                "topic": "Intention vs Reception in Art",
                "sideA": "Intention",
                "sideB": "Reception",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Author's vision",
                    "Original context"
                ],
                "ideasB": [
                    "Audience meaning",
                    "Cultural impact"
                ]
            },
            {
                "topic": "Aesthetic vs Moral Value",
                "sideA": "Aesthetic",
                "sideB": "Moral",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Art for art's sake",
                    "Pure beauty"
                ],
                "ideasB": [
                    "Social utility",
                    "Ethical impact"
                ]
            },
            {
                "topic": "The Avant-garde vs Accessibility",
                "sideA": "Avant-garde",
                "sideB": "Accessibility",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Pushing boundaries",
                    "Intellectual challenge"
                ],
                "ideasB": [
                    "Inclusivity",
                    "Democratic art"
                ]
            },
            {
                "topic": "Institutional Art vs Outsider Art",
                "sideA": "Institutional",
                "sideB": "Outsider",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Historical preservation",
                    "Standards"
                ],
                "ideasB": [
                    "Raw authenticity",
                    "Anti-establishment"
                ]
            },
            {
                "topic": "Precautionary vs Proactionary Principle",
                "sideA": "Precautionary",
                "sideB": "Proactionary",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Risk avoidance",
                    "Safety first"
                ],
                "ideasB": [
                    "Innovation",
                    "Embracing change"
                ]
            },
            {
                "topic": "Scientific Progress: Inherently Good vs Neutral",
                "sideA": "Inherently Good",
                "sideB": "Ethically Neutral",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Enlightenment values",
                    "Solving problems"
                ],
                "ideasB": [
                    "Dual-use concern",
                    "Human responsibility"
                ]
            },
            {
                "topic": "Existential Risk vs Present Suffering",
                "sideA": "Existential Risk",
                "sideB": "Present Suffering",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Long-term survival",
                    "Future generations"
                ],
                "ideasB": [
                    "Immediate relief",
                    "Urgent poverty"
                ]
            },
            {
                "topic": "Human Consciousness vs Artificial General Intelligence",
                "sideA": "Consciousness",
                "sideB": "AGI",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Biological uniqueness",
                    "Subjective experience"
                ],
                "ideasB": [
                    "Computational power",
                    "Algorithmic logic"
                ]
            },
            {
                "topic": "Progress: Real vs Illusion",
                "sideA": "Real",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Technological advancement",
                    "Improved quality of life"
                ],
                "ideasB": [
                    "Cyclical history",
                    "New problems"
                ]
            },
            {
                "topic": "Liberal Order vs Multipolar World",
                "sideA": "Liberal Order",
                "sideB": "Multipolarity",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Universal values",
                    "Global stability"
                ],
                "ideasB": [
                    "Diverse power",
                    "Cultural sovereignty"
                ]
            },
            {
                "topic": "Memory vs Forgetting",
                "sideA": "Memory",
                "sideB": "Forgetting",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Learning from history",
                    "Identity"
                ],
                "ideasB": [
                    "Moving forward",
                    "Overcoming trauma"
                ]
            },
            {
                "topic": "Tragedy of the Commons vs Cooperation",
                "sideA": "Tragedy",
                "sideB": "Cooperation",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Self-interest",
                    "Resource depletion"
                ],
                "ideasB": [
                    "Mutual benefit",
                    "Collective management"
                ]
            },
            {
                "topic": "Red vs Blue — which colour is better?",
                "sideA": "Red",
                "sideB": "Blue",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Yellow vs Green — which colour is happier?",
                "sideA": "Yellow",
                "sideB": "Green",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Black vs White — which colour do you prefer?",
                "sideA": "Black",
                "sideB": "White",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs Purple — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Purple",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Circle vs Square — which shape is more useful?",
                "sideA": "Circle",
                "sideB": "Square",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small numbers — which are more fun?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — which shape is better?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ball vs Doll — which toy is better?",
                "sideA": "Ball",
                "sideB": "Doll",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pencil vs Pen — which is better to write with?",
                "sideA": "Pencil",
                "sideB": "Pen",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Book vs Picture — which is better to learn from?",
                "sideA": "Book",
                "sideB": "Picture",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs Floor — which is better to sit on?",
                "sideA": "Chair",
                "sideB": "Floor",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cat vs Dog — which animal is better?",
                "sideA": "Cat",
                "sideB": "Dog",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fish vs Bird — which is a better pet?",
                "sideA": "Fish",
                "sideB": "Bird",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small animals — which are nicer?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rabbit vs Hamster — which is cuter?",
                "sideA": "Rabbit",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Water vs Juice — which is better to drink?",
                "sideA": "Water",
                "sideB": "Juice",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apple vs Banana — which fruit is better?",
                "sideA": "Apple",
                "sideB": "Banana",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bread vs Rice — which is better to eat?",
                "sideA": "Bread",
                "sideB": "Rice",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Milk vs Water — which do you prefer?",
                "sideA": "Milk",
                "sideB": "Water",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with family vs Alone — which is better?",
                "sideA": "With family",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a brother vs Sister — which is better?",
                "sideA": "Brother",
                "sideB": "Sister",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small family — which is nicer?",
                "sideA": "Big family",
                "sideB": "Small family",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Oldest vs Youngest child — which is better?",
                "sideA": "Oldest",
                "sideB": "Youngest",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Afternoon school — which is better?",
                "sideA": "Morning",
                "sideB": "Afternoon",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading vs Maths — which is more fun?",
                "sideA": "Reading",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School vs Home learning — which is better?",
                "sideA": "School",
                "sideB": "Home",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Homework vs No homework — which helps more?",
                "sideA": "Homework",
                "sideB": "None",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alone vs Partner work — which do you prefer?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paper vs Computer — which is better?",
                "sideA": "Paper",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Breakfast vs Dinner — which meal is more important?",
                "sideA": "Breakfast",
                "sideB": "Dinner",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot vs Cold food — which is better?",
                "sideA": "Hot",
                "sideB": "Cold",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home vs Restaurant — which is better?",
                "sideA": "Home",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sweet vs Savoury — which do you prefer?",
                "sideA": "Sweet",
                "sideB": "Savoury",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs Buying food — which is nicer?",
                "sideA": "Cooking",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late waking — which is better?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Evening — which part of the day is nicer?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Weekdays vs Weekends — which do you prefer?",
                "sideA": "Weekdays",
                "sideB": "Weekends",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Summer vs Winter — which season is better?",
                "sideA": "Summer",
                "sideB": "Winter",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late bed — which is healthier?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "House vs Flat — which is better?",
                "sideA": "House",
                "sideB": "Flat",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "City vs Countryside — which is a better place to live?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bedroom vs Living room — which room do you prefer?",
                "sideA": "Bedroom",
                "sideB": "Living room",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Indoor vs Outdoor games — which are more fun?",
                "sideA": "Indoor",
                "sideB": "Outdoor",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Watching TV vs Book — which is better?",
                "sideA": "TV",
                "sideB": "Book",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Video game — which is more fun?",
                "sideA": "Sport",
                "sideB": "Video game",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drawing vs Singing — which hobby is better?",
                "sideA": "Drawing",
                "sideB": "Singing",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing alone vs Friends — which is more fun?",
                "sideA": "Alone",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Swimming vs Running — which sport do you prefer?",
                "sideA": "Swimming",
                "sideB": "Running",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Music vs Sport — which is a better hobby?",
                "sideA": "Music",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Farm vs Wild animals — which are more interesting?",
                "sideA": "Farm",
                "sideB": "Wild",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rain vs Sunshine — which weather do you prefer?",
                "sideA": "Rain",
                "sideB": "Sunshine",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sea vs Mountains — which is better for a holiday?",
                "sideA": "Sea",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Flowers vs Trees — which are more beautiful?",
                "sideA": "Flowers",
                "sideB": "Trees",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Car vs Bus — which is better?",
                "sideA": "Car",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Walking vs Cycling — which is better to get around?",
                "sideA": "Walking",
                "sideB": "Cycling",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short vs Long holiday — which is better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling alone vs Family — which is more fun?",
                "sideA": "Alone",
                "sideB": "Family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online vs. In-person shopping",
                "sideA": "Online",
                "sideB": "In-person",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Convenience",
                    "Better prices"
                ],
                "ideasB": [
                    "Try on items",
                    "Instant gratification"
                ]
            },
            {
                "topic": "Paper books vs. E-books",
                "sideA": "Paper",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Scent/Feel",
                    "Collectable"
                ],
                "ideasB": [
                    "Portability",
                    "Space saving"
                ]
            },
            {
                "topic": "Work from home vs. Office work",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "No commute",
                    "Flexibility"
                ],
                "ideasB": [
                    "Socializing",
                    "Better focus"
                ]
            },
            {
                "topic": "Electric cars vs. Petrol cars",
                "sideA": "Electric",
                "sideB": "Petrol",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Environment",
                    "Quiet"
                ],
                "ideasB": [
                    "Range",
                    "Charging speed"
                ]
            },
            {
                "topic": "Studying in the morning vs studying in the evening — when is it better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Strict teachers vs friendly teachers — who helps students more?",
                "sideA": "Strict",
                "sideB": "Friendly",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning with a textbook vs learning with videos — which is more effective?",
                "sideA": "Textbook",
                "sideB": "Videos",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short lessons vs long lessons — which help you learn better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Group projects vs individual assignments — which do you prefer?",
                "sideA": "Group",
                "sideB": "Individual",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School uniform vs casual clothes at school — which is better?",
                "sideA": "Uniform",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home-cooked meals vs fast food — which is better?",
                "sideA": "Home-cooked",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Three big meals vs many small snacks — which is healthier?",
                "sideA": "Big meals",
                "sideB": "Small snacks",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarian food vs meat — which diet is better?",
                "sideA": "Vegetarian",
                "sideB": "Meat",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drinking tea vs drinking coffee — which is better?",
                "sideA": "Tea",
                "sideB": "Coffee",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating alone vs eating with others — which do you prefer?",
                "sideA": "Alone",
                "sideB": "With others",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing a team sport vs playing an individual sport — which is better?",
                "sideA": "Team sport",
                "sideB": "Individual sport",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending free time indoors vs outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs theatre — which is a better night out?",
                "sideA": "Cinema",
                "sideB": "Theatre",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
                "sideA": "Listening",
                "sideB": "Playing",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Video games vs board games — which are more fun?",
                "sideA": "Video games",
                "sideB": "Board games",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
                "sideA": "Shopping",
                "sideB": "Staying home",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mobile phone vs computer — which is more useful in daily life?",
                "sideA": "Mobile",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sending a message vs making a phone call — which is better?",
                "sideA": "Message",
                "sideB": "Call",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book vs paper book — which do you prefer to read?",
                "sideA": "E-book",
                "sideB": "Paper book",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Taking photos with your phone vs with a camera — which gives better results?",
                "sideA": "Phone",
                "sideB": "Camera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
                "sideA": "Beach",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling by train vs travelling by plane — which is better?",
                "sideA": "Train",
                "sideB": "Plane",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
                "sideA": "City",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Staying in a hotel vs staying with a local family — which do you prefer?",
                "sideA": "Hotel",
                "sideB": "Local family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                "sideA": "Abroad",
                "sideB": "Own country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having many friends vs having a few close friends — which is better?",
                "sideA": "Many friends",
                "sideB": "Close friends",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
                "sideA": "In person",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with parents vs living in a student flat — which is better for young people?",
                "sideA": "With parents",
                "sideB": "Student flat",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Celebrating birthdays at home vs going out — which is nicer?",
                "sideA": "Home",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving money vs spending money — which is wiser?",
                "sideA": "Saving",
                "sideB": "Spending",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working part-time while studying vs focusing only on school — which is better?",
                "sideA": "Part-time",
                "sideB": "Focus school",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Earning a lot of money vs having free time — which matters more?",
                "sideA": "Money",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online learning vs classroom learning — which is more effective?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorising facts vs learning how to find information — which skill is more important?",
                "sideA": "Facts",
                "sideB": "Finding info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "University education vs vocational training — which is a better path?",
                "sideA": "University",
                "sideB": "Vocational",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exams vs continuous assessment — which is a fairer way to evaluate students?",
                "sideA": "Exams",
                "sideB": "Continuous",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning a foreign language at school vs living abroad — which is more effective?",
                "sideA": "School",
                "sideB": "Living abroad",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Single-sex schools vs mixed schools — which are better for students?",
                "sideA": "Single-sex",
                "sideB": "Mixed",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs face-to-face communication — which is better for staying in touch?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Streaming services vs traditional TV — which is better?",
                "sideA": "Streaming",
                "sideB": "Traditional TV",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working from home vs working in an office — which is more productive?",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading news online vs reading a newspaper — which is more reliable?",
                "sideA": "Online news",
                "sideB": "Newspaper",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending time on social media vs spending time in nature — which is better for your mental health?",
                "sideA": "Social media",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Using public transport vs driving a car — which is better for society?",
                "sideA": "Public transport",
                "sideB": "Car",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Buying second-hand clothes vs buying new clothes — which is the better habit?",
                "sideA": "Second-hand",
                "sideB": "New",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living in a city vs living in the countryside — which suits young people better?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianism vs eating meat — which is better for the planet?",
                "sideA": "Vegetarianism",
                "sideB": "Meat",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Individual lifestyle changes vs government action — which does more for the environment?",
                "sideA": "Individual",
                "sideB": "Government",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A stable job vs a creative career — which is the better life choice?",
                "sideA": "Stable job",
                "sideB": "Creative career",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting your own business vs working for a company — which is better?",
                "sideA": "Own business",
                "sideB": "Company",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "High salary vs job satisfaction — which matters more at work?",
                "sideA": "Salary",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working long hours vs having a work-life balance — which leads to more success?",
                "sideA": "Long hours",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choosing a career based on passion vs based on job prospects — which is wiser?",
                "sideA": "Passion",
                "sideB": "Prospects",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living as an individual vs putting community first — which is more important?",
                "sideA": "Individual",
                "sideB": "Community",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Traditional values vs modern values — which are more important to keep?",
                "sideA": "Traditional",
                "sideB": "Modern",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Volunteering vs donating money to charity — which helps more?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fame vs making a difference quietly — which is a better goal in life?",
                "sideA": "Fame",
                "sideB": "Quiet difference",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Following rules vs thinking for yourself — which matters more?",
                "sideA": "Rules",
                "sideB": "Self-thought",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Physical health vs mental health — which should be the priority?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevention vs treatment — which is the better approach to healthcare?",
                "sideA": "Prevention",
                "sideB": "Treatment",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Competitive sport vs exercise for fun — which is better for you?",
                "sideA": "Competitive",
                "sideB": "For fun",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Private healthcare vs public healthcare — which system is fairer?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs literature — which is a more powerful art form?",
                "sideA": "Cinema",
                "sideB": "Literature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Modern art vs classical art — which is more valuable?",
                "sideA": "Modern",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preserving old buildings vs building new ones — which matters more?",
                "sideA": "Preserving old",
                "sideB": "Building new",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Local culture vs globalisation — which enriches communities more?",
                "sideA": "Local",
                "sideB": "Globalisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs face-to-face interactions — which is better for building relationships?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Urban living vs rural living — which offers a better quality of life?",
                "sideA": "Urban",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online learning vs traditional classroom — which is the future of education?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Renewable energy vs nuclear power — which is the best solution for the climate?",
                "sideA": "Renewable",
                "sideB": "Nuclear",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fast fashion vs sustainable clothing — can we afford to be ethical?",
                "sideA": "Fast fashion",
                "sideB": "Sustainable",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "AI creativity vs human artistry — can machines truly create art?",
                "sideA": "AI creativity",
                "sideB": "Human artistry",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Space exploration vs deep sea exploration — where should we focus our resources?",
                "sideA": "Space",
                "sideB": "Deep sea",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Digital privacy vs national security — is total surveillance ever justified?",
                "sideA": "Privacy",
                "sideB": "Security",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Genetically modified food vs organic farming — how should we feed the world?",
                "sideA": "GMOs",
                "sideB": "Organic",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Universal Basic Income vs job guarantee programs — what is the best social safety net?",
                "sideA": "UBI",
                "sideB": "Job guarantee",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs orange — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Number 1 vs number 10 — which number is better?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs sofa — which is more comfortable?",
                "sideA": "Chair",
                "sideB": "Sofa",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bag vs box — which is more useful?",
                "sideA": "Bag",
                "sideB": "Box",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs elephant — which animal is better?",
                "sideA": "Lion",
                "sideB": "Elephant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolate vs sweets — which is better?",
                "sideA": "Chocolate",
                "sideB": "Sweets",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spoon vs fork — which is better?",
                "sideA": "Spoon",
                "sideB": "Fork",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hat vs shoes — which is more important?",
                "sideA": "Hat",
                "sideB": "Shoes",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sun vs moon — which is better?",
                "sideA": "Sun",
                "sideB": "Moon",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socks vs no socks — which is nicer?",
                "sideA": "Socks",
                "sideB": "No socks",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with grandparents vs not living with them — which is nicer?",
                "sideA": "With grandparents",
                "sideB": "Not living with them",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mum's cooking vs dad's cooking — which is better?",
                "sideA": "Mum's",
                "sideB": "Dad's",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — which subject is more fun?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Writing on paper vs typing on a tablet — which is better?",
                "sideA": "Paper",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — which is nicer?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ice cream vs cake — which is a better dessert?",
                "sideA": "Ice cream",
                "sideB": "Cake",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short days vs long days — which is better?",
                "sideA": "Short days",
                "sideB": "Long days",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Day at the park vs day at the beach — which is better?",
                "sideA": "Park",
                "sideB": "Beach",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Plane vs train — which is more fun?",
                "sideA": "Plane",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning shower vs evening shower — which is better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                "sideA": "Fork",
                "sideB": "Hands",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
                "sideA": "Socks on",
                "sideB": "No socks",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sandcastle vs snowman — which is more fun to build?",
                "sideA": "Sandcastle",
                "sideB": "Snowman",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lots of exams vs very few exams — which is fairer?",
                "sideA": "Lots of exams",
                "sideB": "Very few exams",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
                "sideA": "At 7",
                "sideB": "At 5",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating slowly vs eating quickly — which is better for you?",
                "sideA": "Slowly",
                "sideB": "Quickly",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking at home vs ordering food online — which is better?",
                "sideA": "Cooking at home",
                "sideB": "Ordering online",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs baking — which is more fun as a hobby?",
                "sideA": "Cooking",
                "sideB": "Baking",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going to the gym vs exercising outside — which is better?",
                "sideA": "Gym",
                "sideB": "Outside",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos on your phone vs printed photos — which is better?",
                "sideA": "Phone photos",
                "sideB": "Printed photos",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs computer screen — which is better for watching films?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot country vs cold country — which is a better holiday destination?",
                "sideA": "Hot country",
                "sideB": "Cold country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giving presents vs receiving presents — which do you prefer?",
                "sideA": "Giving",
                "sideB": "Receiving",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working indoors vs working outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                "sideA": "Pineapple",
                "sideB": "No pineapple",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Putting milk in first vs putting tea in first — which is better?",
                "sideA": "Milk first",
                "sideB": "Tea first",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Monday vs Friday — which day is actually worse?",
                "sideA": "Monday",
                "sideB": "Friday",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                "sideA": "Before alarm",
                "sideB": "Until alarm",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being too hot vs being too cold — which is worse?",
                "sideA": "Too hot",
                "sideB": "Too cold",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning from mistakes vs learning from success — which teaches more?",
                "sideA": "Mistakes",
                "sideB": "Success",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablets in class vs traditional notebooks — which help students more?",
                "sideA": "Tablets",
                "sideB": "Notebooks",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being always contactable vs having digital free time — which is better?",
                "sideA": "Contactable",
                "sideB": "Free time",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reusing things vs recycling — which is more effective?",
                "sideA": "Reusing",
                "sideB": "Recycling",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "One career for life vs changing careers often — which is better?",
                "sideA": "One career",
                "sideB": "Changing often",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleep vs exercise — which has a bigger impact on your health?",
                "sideA": "Sleep",
                "sideB": "Exercise",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pop music vs classical music — which has a bigger cultural impact?",
                "sideA": "Pop",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Knowing how something ends before watching it vs being surprised — which is better?",
                "sideA": "Knowing",
                "sideB": "Surprised",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching a series in one go vs watching one episode a week — which is the right way?",
                "sideA": "Binge-watching",
                "sideB": "Weekly",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Window seat vs aisle seat on a plane — which is objectively better?",
                "sideA": "Window seat",
                "sideB": "Aisle seat",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Skipping the gym once vs going and having a bad session — which is worse?",
                "sideA": "Skipping",
                "sideB": "Bad session",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Talking to yourself vs talking to your pet — which is more reasonable?",
                "sideA": "To yourself",
                "sideB": "To pet",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "My favorite childhood memory",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "The last vacation I took",
                "level": "elementary",
                "theme": "transport_travel_A2"
            },
            {
                "topic": "A person who inspired me",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "The future of the world in 50 years",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "The role of art in modern society",
                "level": "advanced",
                "theme": "leisure_hobbies_A2"
            },
            {
                "topic": "Complexity of human consciousness",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "topic": "The importance of mental health awareness",
                "level": "intermediate",
                "theme": "mental_health_B1"
            },
            {
                "topic": "My dream job and why",
                "level": "starter",
                "theme": "work_A1"
            },
            {
                "topic": "The impact of climate change on local communities",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            },
            {
                "topic": "Artificial Intelligence: Tool or threat?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }
        ]
    },
    "fr": {
        "opinionArena": [
            {
                "text": "Le petit-déjeuner est-il le repas le plus important ?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Les chiens sont-ils de meilleurs animaux de compagnie que les chats ?",
                "level": "starter",
                "theme": "leisure_A1"
            },
            {
                "text": "Les enfants devraient-ils avoir des téléphones portables ?",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Est-il préférable de vivre dans une maison ou un appartement ?",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            },
            {
                "text": "Pouvons-nous vivre sans Internet pendant une semaine ?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tout le monde devrait-il apprendre une deuxième langue ?",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Les transports publics devraient-ils être gratuits ?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            },
            {
                "text": "Génie génétique : progrès ou péril ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Le revenu universel est-il une solution à l'automatisation ?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            },
            {
                "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'éthique de la colonisation d'autres planètes.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Je pense, donc je suis.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            },
            {
                "text": "La seule constante est le changement.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [{"topic":"L'éthique protestante du travail comme réussite civilisationnelle vs comme source originelle de la misère adulte — quel héritage domine aujourd'hui ?","sideA":"Réussite civilisationnelle","sideB":"Source de misère","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"La marchandisation de la passion vs la libération de transformer le travail en sens — « faites ce que vous aimez » est-il un conseil ou un piège ?","sideA":"Conseil","sideB":"Piège","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"La carrière comme identité vs la carrière comme moyen — quelle est la relation la plus cohérente qu'un adulte moderne puisse entretenir avec son travail ?","sideA":"Identité","sideB":"Moyen","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Le travailleur acharné vertueux vs l'oisif stratégique — lequel a été célébré de la manière la plus malhonnête dans la culture occidentale ?","sideA":"Travailleur acharné","sideB":"Oisif","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'ambition adulte comme admirable vs l'ambition adulte comme incapacité à accepter la finitude — quelle lecture est la plus honnête psychologiquement ?","sideA":"Admirable","sideB":"Incapacité à accepter la finitude","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'amour romantique comme principe organisateur de la vie adulte vs comme mythe historiquement contingent et commercialement soutenu — lequel est le plus défendable ?","sideA":"Principe organisateur","sideB":"Mythe commercial","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La transparence radicale dans les relations vs la nécessité d'un moi privé — l'intimité et l'individuation peuvent-elles coexister ?","sideA":"Transparence","sideB":"Moi privé","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'éthique du « care » comme correctif féministe vs comme réassignation des mêmes fardeaux — le concept a-t-il tenu ses promesses ?","sideA":"Correctif féministe","sideB":"Réassignation des fardeaux","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Choisir de ne pas avoir d'enfants comme résistance à l'idéologie nataliste vs comme décision entièrement personnelle sans dimension politique — peuvent-elles être séparées proprement ?","sideA":"Résistance","sideB":"Décision personnelle","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La conscience de la mortalité comme condition préalable à une vie adulte pleine de sens vs comme son principal obstacle — quelle est la position la plus vivable ?","sideA":"Condition préalable","sideB":"Obstacle","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Le vieillissement comme déclin vs le vieillissement comme accumulation — quel récit est le plus honnête, et lequel est le plus utile ?","sideA":"Déclin","sideB":"Accumulation","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La médicalisation du vieillissement comme progrès vs comme refus d'accepter la condition humaine — où faut-il tracer la limite ?","sideA":"Progrès","sideB":"Refus","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},
            {"topic":"La mémoire comme substance de l'identité adulte vs la mémoire comme narrateur hautement peu fiable — quelles sont les implications pour la construction du soi ?","sideA":"Substance","sideB":"Narrateur peu fiable","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La complicité du citoyen adulte dans des systèmes injustes par la consommation ordinaire vs l'irrélevance structurelle de la pureté morale individuelle — quel est le cadrage le plus honnête ?","sideA":"Complicité","sideB":"Irrélevance structurelle","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Le désenchantement politique comme réponse rationnelle aux preuves disponibles vs comme forme de privilège — quelle lecture est la plus défendable empiriquement ?","sideA":"Réponse rationnelle","sideB":"Privilège","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La justice intergénérationnelle comme défi moral central de notre temps vs comme concept obscurcissant systématiquement les inégalités sociales et raciales actuelles — quelle est la critique la plus forte ?","sideA":"Défi moral","sideB":"Obscurcissement des inégalités","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La démocratie libérale comme le moins mauvais des systèmes vs comme un système ayant structurellement épuisé sa capacité de réforme — quel verdict les preuves soutiennent-elles ?","sideA":"Moins mauvais système","sideB":"Capacité épuisée","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La capacité d'auto-tromperie comme défaut cognitif vs comme mécanisme adaptatif — quel récit sert le mieux l'adulte qui veut bien vivre ?","sideA":"Défaut cognitif","sideB":"Mécanisme adaptatif","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'expertise comme autorité épistémique vs l'expertise comme forme de pouvoir institutionnel méritant examen — quand le scepticisme sain devient-il une lâcheté épistémique ?","sideA":"Autorité épistémique","sideB":"Pouvoir institutionnel","level":"proficiency","theme": "epistemology_truth_C2","ideasA":[],"ideasB":[]},
            {"topic":"Le récit comme principal moyen pour les adultes de donner un sens à leur vie vs le récit comme principal moyen pour les adultes de s'égarer — quelle fonction domine ?","sideA":"Donner du sens","sideB":"S'égarer","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'honnêteté comme vertu inconditionnelle vs l'honnêteté comme vertu contextuelle — existe-t-il un compte rendu cohérent de la véracité qui survive au contact des relations adultes réelles ?","sideA":"Vertu inconditionnelle","sideB":"Vertu contextuelle","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'adulte qui a « enfin tout compris » vs l'adulte qui a accepté qu'il ne comprendrait jamais — lequel représente une relation plus sophistiquée à la réalité ?","sideA":"Tout compris","sideB":"Accepté l'inconnu","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Tout dire à son thérapeute vs tout dire à son coiffeur — quelle relation professionnelle est empiriquement plus transformatrice, et pourquoi la réponse nous met-elle mal à l'aise ?","sideA":"Thérapeute","sideB":"Coiffeur","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},

            {"topic": "La semaine de quatre jours vs la semaine de cinq jours — quel modèle profite le plus aux travailleurs et aux employeurs ?", "sideA": "Semaine de 4 jours", "sideB": "Semaine de 5 jours", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Revenu universel de base vs aide sociale ciblée — quel est le filet de sécurité le plus efficace pour les adultes actifs ?", "sideA": "Revenu universel", "sideB": "Aide ciblée", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "L'économie à la tâche (gig economy) vs l'emploi permanent — quel modèle sert le mieux les travailleurs à long terme ?", "sideA": "Économie à la tâche", "sideB": "Emploi permanent", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Méritocratie vs avantage structurel — qu'est-ce qui explique le mieux la réussite professionnelle ?", "sideA": "Méritocratie", "sideB": "Avantage structurel", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Transparence des salaires vs confidentialité des salaires — qu'est-ce qui crée un lieu de travail plus juste ?", "sideA": "Transparence", "sideB": "Confidentialité", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Automatisation vs travail humain — quelle est la plus grande menace à long terme pour l'emploi des adultes ?", "sideA": "Automatisation", "sideB": "Travail humain", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Télétravail vs présence au bureau — qu'est-ce qui est le mieux pour la progression de carrière et la culture d'équipe ?", "sideA": "Télétravail", "sideB": "Bureau", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Congé parental égal pour les hommes et les femmes vs congé maternité plus long — quelle politique est la plus juste ?", "sideA": "Congé égal", "sideB": "Maternité plus longue", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Choisir de ne pas avoir d'enfants vs pression sociale pour avoir une famille — qu'est-ce qui mérite le plus de respect ?", "sideA": "Pas d'enfants", "sideB": "Pression sociale", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Le mariage comme institution vs la cohabitation sans mariage — qu'est-ce qui est le plus pertinent aujourd'hui ?", "sideA": "Mariage", "sideB": "Cohabitation", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Foyers à deux revenus vs un partenaire restant à la maison — quel modèle est le mieux pour les enfants et les adultes ?", "sideA": "Deux revenus", "sideB": "Un au foyer", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "L'écart salarial entre hommes et femmes comme problème structurel vs une question de choix individuels — quelle explication a le plus de poids ?", "sideA": "Problème structurel", "sideB": "Choix individuels", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "La propriété immobilière comme objectif vs un marché locatif professionnel — quel modèle de logement convient le mieux aux adultes modernes ?", "sideA": "Propriété", "sideB": "Location pro", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "La gentrification comme amélioration vs la gentrification comme déplacement — quelle approche est la plus honnête ?", "sideA": "Amélioration", "sideB": "Déplacement", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Densité urbaine vs étalement suburbain — quel est le meilleur modèle pour des villes vivables ?", "sideA": "Densité urbaine", "sideB": "Étalement", "level": "upper-intermediate", "theme": "globalisation_trade_B2", "ideasA": [], "ideasB": []},
            {"topic": "Vivre près de sa famille vs s'éloigner pour les opportunités — quel choix produit un meilleur bien-être à long terme ?", "sideA": "Proche famille", "sideB": "S'éloigner", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Une population vieillissante comme une crise vs comme une ressource — quel cadrage est le plus productif ?", "sideA": "Crise", "sideB": "Ressource", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Responsabilité personnelle pour la santé vs facteurs systémiques — qu'est-ce qui pèse le plus dans l'explication des résultats de santé ?", "sideA": "Resp. personnelle", "sideB": "Facteurs systémiques", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Les jours de santé mentale comme un droit légitime au travail vs une source d'abus — où les employeurs doivent-ils fixer la limite ?", "sideA": "Droit légitime", "sideB": "Source d'abus", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Médecine préventive vs médecine curative — laquelle devrait recevoir plus de financement public ?", "sideA": "Préventive", "sideB": "Curative", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Médecine anti-âge vs vieillir avec grâce — quelle attitude est la plus cohérente ?", "sideA": "Anti-âge", "sideB": "Vieillir avec grâce", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Technologie de surveillance pour la sécurité publique vs droit à la vie privée — où doit se situer l'équilibre ?", "sideA": "Sécurité publique", "sideB": "Vie privée", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Les réseaux sociaux comme outil d'engagement civique vs comme moteur de polarisation — quel effet domine ?", "sideA": "Engagement civique", "sideB": "Polarisation", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "L'IA dans le recrutement vs le jugement humain — qu'est-ce qui produit des décisions d'embauche plus justes ?", "sideA": "IA", "sideB": "Jugement humain", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Le droit à l'oubli en ligne vs le droit du public à l'information — qu'est-ce qui devrait primer ?", "sideA": "Droit à l'oubli", "sideB": "Droit à l'info", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Vote obligatoire vs vote volontaire — qu'est-ce qui produit des démocraties plus saines ?", "sideA": "Obligatoire", "sideB": "Volontaire", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Engagement politique par la protestation vs par les canaux institutionnels — qu'est-ce qui est le plus efficace pour les adultes aujourd'hui ?", "sideA": "Protestation", "sideB": "Institutionnel", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Identité nationale vs identité européenne ou mondiale — qu'est-ce qui a le plus de sens pour les adultes en 2026 ?", "sideA": "Identité nationale", "sideB": "Identité mondiale", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Augmentations d'impôts pour financer les services publics vs coupes budgétaires — quel est le choix politique le plus défendable ?", "sideA": "Augmentation impôts", "sideB": "Coupes budgétaires", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Admettre que vous n'avez aucune idée de la façon dont fonctionne votre retraite vs prétendre avec assurance que vous le savez — quelle est l'expérience adulte la plus universelle ?", "sideA": "Admettre ignorance", "sideB": "Prétendre savoir", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Être la personne qui planifie toujours les événements sociaux vs être toujours celle qui se contente de venir — quel rôle est le plus épuisant ?", "sideA": "L'organisateur", "sideB": "L'invité", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Avoir une opinion tranchée sur les habitudes de cuisine de vos collègues vs ne pas s'en soucier du tout — quelle personne est la plus tolérable ?", "sideA": "Opinion tranchée", "sideB": "S'en fiche", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Assister à chaque événement social facultatif au travail vs n'assister à aucun — quelle stratégie est la meilleure pour votre carrière et votre santé mentale ?", "sideA": "Tout assister", "sideB": "Rien assister", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Les adultes qui sont encore perplexes devant leur déclaration d'impôts vs les adultes qui aiment la faire — quel groupe est le plus digne de confiance ?", "sideA": "Perplexe", "sideB": "Aime ça", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Se plaindre du coût de la vie auprès de ses amis vs prétendre que tout va bien — quelle est la réponse adulte la plus honnête ?", "sideA": "Se plaindre", "sideB": "Prétendre que tout va bien", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Hiérarchies organisationnelles horizontales vs structures de gestion verticales — qu'est-ce qui sert le mieux les adultes qui y travaillent ?", "sideA": "Hiérarchie horizontale", "sideB": "Structure verticale", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Le culte de la productivité vs l'éloge de l'oisiveté — qu'est-ce qui reflète le mieux ce dont les humains ont réellement besoin au travail ?", "sideA": "Productivité", "sideB": "Oisiveté", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Le leadership comme compétence s'apprenant vs le leadership comme qualité innée — quel récit est le plus défendable empiriquement ?", "sideA": "Compétence acquise", "sideB": "Qualité innée", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Culture de la performance (hustle culture) vs slow living — qui gagne, et qui devrait gagner ?", "sideA": "Hustle culture", "sideB": "Slow living", "level": "advanced", "theme": "routine_A1", "ideasA": [], "ideasB": []},
            {"topic": "La responsabilité sociale des entreprises comme engagement sincère vs comme gestion de la réputation — quel cadrage est le plus honnête ?", "sideA": "Engagement sincère", "sideB": "Gestion réputation", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'identité adulte comme fixe vs perpétuellement en construction — quel récit reflète le mieux l'expérience vécue ?", "sideA": "Identité fixe", "sideB": "En construction", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La domestication du féminisme par la culture de consommation vs le féminisme remodelant réellement la vie adulte — qu'est-ce qui est le plus vrai ?", "sideA": "Féminisme de conso", "sideB": "Remodelage réel", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La crise de la quarantaine comme pathologie vs la crise de la quarantaine comme réévaluation légitime — quel cadrage est le plus utile ?", "sideA": "Pathologie", "sideB": "Réévaluation", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La pression d'être extraordinaire vs la dignité d'une vie ordinaire — quel est l'idéal le plus humain à défendre ?", "sideA": "Extraordinaire", "sideB": "Dignité ordinaire", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'obligation de s'occuper de parents vieillissants vs la responsabilité de l'État — où la charge doit-elle retomber ?", "sideA": "Obligation familiale", "sideB": "Resp. de l'État", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'honnêteté radicale dans les relations vs le silence stratégique — quelle est l'approche la plus éthique de l'intimité ?", "sideA": "Honnêteté radicale", "sideB": "Silence stratégique", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Choisir son cercle social délibérément vs laisser les relations se former organiquement — qu'est-ce qui produit des amitiés adultes plus authentiques ?", "sideA": "Choix délibéré", "sideB": "Formation organique", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La famille nucléaire comme unité sociale optimale vs comme arrangement historiquement contingent — quelle vue est la plus défendable ?", "sideA": "Unité optimale", "sideB": "Arrangement historique", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Gouvernance technocratique vs populisme démocratique — qu'est-ce qui pose le plus grand risque à long terme pour les citoyens adultes ?", "sideA": "Technocratie", "sideB": "Populisme", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Justice intergénérationnelle vs bien-être actuel — qu'est-ce qui devrait être prioritaire dans les politiques publiques ?", "sideA": "Justice intergén.", "sideB": "Bien-être actuel", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'obligation de voter vs le droit de s'abstenir — quelle est la position civique la plus défendable ?", "sideA": "Obligation de voter", "sideB": "Droit de s'abstenir", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Le patriotisme comme vertu civique vs le patriotisme comme défaillance cognitive — quel récit est le plus convaincant ?", "sideA": "Vertu civique", "sideB": "Défaillance cognitive", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'absolutisme de la liberté d'expression vs la parole régulée — qu'est-ce qui produit de meilleurs résultats pour les sociétés démocratiques adultes ?", "sideA": "Absolutisme", "sideB": "Parole régulée", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Une carrière pleine de sens vs un travail qui finance une vie privée pleine de sens — quelle est l'ambition adulte la plus honnête ?", "sideA": "Carrière sensée", "sideB": "Financer vie privée", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Religion vs philosophie séculière — qu'est-ce qui répond le mieux aux besoins existentiels des adultes modernes ?", "sideA": "Religion", "sideB": "Phil. séculière", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La vie examinée vs la vie absorbée — laquelle vaut le plus la peine d'être vécue, et qui peut en décider ?", "sideA": "Vie examinée", "sideB": "Vie absorbée", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'héritage (legacy) vs la présence — quelle est la chose la plus cohérente à rechercher pour un adulte ?", "sideA": "Héritage", "sideB": "Présence", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'adulte qui a « enfin compris » vs l'adulte qui a accepté qu'il ne comprendra jamais — qui est le plus conscient de soi ?", "sideA": "A enfin compris", "sideB": "Accepté l'ignorance", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Tout dire à son thérapeute vs tout dire à son coiffeur — quelle relation professionnelle est la plus efficace sur le plan thérapeutique ?", "sideA": "Thérapeute", "sideB": "Coiffeur", "level": "advanced", "theme": "psychological_concepts_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'anxiété du dimanche d'un adulte au planning chargé vs l'anxiété du dimanche d'un adulte au planning vide — qu'est-ce qui est le plus troublant existentiellement ?", "sideA": "Planning chargé", "sideB": "Planning vide", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Suranalyser chaque décision majeure de la vie vs les prendre impulsivement — quelle stratégie a le meilleur bilan empirique ?", "sideA": "Suranalyser", "sideB": "Impulsivité", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Les adultes qui lisent des livres de développement personnel vs les adultes qui refusent de le faire — quel groupe est le plus difficile à supporter lors d'un dîner ?", "sideA": "Lecteurs dév. perso", "sideB": "Refuse de lire", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},

            {"topic": "Un salaire élevé vs un court trajet — qu'est-ce qui compte le plus dans un travail ?", "sideA": "Salaire élevé", "sideB": "Court trajet", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Changer souvent d'emploi vs rester dans la même entreprise — qu'est-ce qui est le mieux pour votre carrière ?", "sideA": "Changer d'emploi", "sideB": "Rester", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Faire des heures supplémentaires vs partir à l'heure tous les jours — quelle est la meilleure habitude ?", "sideA": "Heures sup", "sideB": "À l'heure", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un patron strict vs un patron détendu — pour qui est-il préférable de travailler ?", "sideA": "Patron strict", "sideB": "Patron détendu", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travailler dans une grande entreprise vs une petite entreprise — qu'est-ce qui est mieux ?", "sideA": "Grande entreprise", "sideB": "Petite entreprise", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Obtenir une promotion vs obtenir plus de temps libre — que choisiriez-vous ?", "sideA": "Promotion", "sideB": "Temps libre", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Acheter une maison vs louer toute sa vie — quelle est la décision financière la plus intelligente ?", "sideA": "Acheter", "sideB": "Louer", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivre en centre-ville vs vivre en banlieue — qu'est-ce qui est mieux ?", "sideA": "Centre-ville", "sideB": "Banlieue", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dépenser de l'argent pour des expériences vs pour des objets — qu'est-ce qui vous rend plus heureux ?", "sideA": "Expériences", "sideB": "Objets", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cuisiner tous les jours vs préparer les repas une fois par semaine — qu'est-ce qui est le plus pratique ?", "sideA": "Cuisine quotidienne", "sideB": "Meal prepping", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avoir une femme de ménage vs faire son propre ménage — quel est le meilleur choix ?", "sideA": "Ménage pro", "sideB": "Soi-même", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivre avec un partenaire vs vivre seul — qu'est-ce qui est mieux pour les adultes ?", "sideA": "Avec partenaire", "sideB": "Seul", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avoir des enfants tôt vs avoir des enfants plus tard dans la vie — qu'est-ce qui est mieux ?", "sideA": "Tôt", "sideB": "Plus tard", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Relations familiales étroites vs indépendance vis-à-vis de la famille — qu'est-ce qui est le plus important à l'âge adulte ?", "sideA": "Relations étroites", "sideB": "Indépendance", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Rencontrer de nouvelles personnes vs garder d'anciennes amitiés — qu'est-ce qui a le plus de valeur ?", "sideA": "Nouvelles personnes", "sideB": "Anciens amis", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Socialiser après le travail vs rentrer directement à la maison — qu'est-ce qui est mieux pour les relations de travail ?", "sideA": "Socialiser", "sideB": "Rentrer", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Aller à la salle de sport vs faire de l'exercice à l'extérieur — qu'est-ce qui est mieux pour les adultes ?", "sideA": "Salle de sport", "sideB": "Extérieur", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Régime strict vs manger de tout avec modération — qu'est-ce qui est plus sain ?", "sideA": "Régime strict", "sideB": "Modération", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Voir un médecin tôt vs attendre de voir si on va mieux — qu'est-ce qui est le plus sage ?", "sideA": "Tôt", "sideB": "Attendre", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dormir huit heures vs dormir six heures mais faire de l'exercice — qu'est-ce qui est mieux pour l'énergie ?", "sideA": "8 heures", "sideB": "6h + sport", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Réduire le stress par le sport vs par la relaxation — qu'est-ce qui fonctionne le mieux ?", "sideA": "Sport", "sideB": "Relaxation", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Smartphones vs conversation en face à face — qu'utilisons-nous le plus, et est-ce un problème ?", "sideA": "Smartphones", "sideB": "Face à face", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Banque en ligne vs aller à la banque — qu'est-ce qui est mieux ?", "sideA": "En ligne", "sideB": "Aller à la banque", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travailler avec du papier vs travailler numériquement — qu'est-ce qui est le plus efficace ?", "sideA": "Papier", "sideB": "Numérique", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Réseaux sociaux pour le réseautage vs rencontrer les gens en personne — qu'est-ce qui est le plus utile professionnellement ?", "sideA": "Réseaux sociaux", "sideB": "En personne", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Voyage organisé vs voyage indépendant — qu'est-ce qui est mieux pour les adultes ?", "sideA": "Organisé", "sideB": "Indépendant", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Séjour en ville vs vacances à la plage — quelle est la meilleure façon de se détendre ?", "sideA": "Séjour en ville", "sideB": "Plage", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Une seule longue vacance par an vs plusieurs courts séjours — qu'est-ce qui est mieux ?", "sideA": "Une seule longue", "sideB": "Plusieurs courtes", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Voyager en couple vs voyager seul — qu'est-ce qui est le plus agréable ?", "sideA": "En couple", "sideB": "Seul", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Parler à son partenaire de chaque petit problème vs garder les choses pour soi — qu'est-ce qui est le plus sain ?", "sideA": "Tout dire", "sideB": "Garder pour soi", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Consulter son téléphone dès le matin vs attendre après le petit-déjeuner — quelle est la meilleure habitude ?", "sideA": "Dès le matin", "sideB": "Après petit-déj", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Connaître le nom de ses voisins vs ne pas les connaître — quelle est l'expérience adulte la plus normale aujourd'hui ?", "sideA": "Connaître", "sideB": "Ne pas connaître", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Faire les courses avec une liste vs sans liste — quel type de personne a une meilleure vie ?", "sideA": "Avec liste", "sideB": "Sans liste", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dire à son patron qu'on est malade vs aller travailler malade — quel est le choix le plus courageux ?", "sideA": "Le dire", "sideB": "Aller travailler", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Télétravail vs travail de bureau — qu'est-ce qui est le mieux pour la productivité et le bien-être ?", "sideA": "Télétravail", "sideB": "Bureau", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Sécurité d'emploi vs évolution de carrière — que devraient prioriser les adultes ?", "sideA": "Sécurité", "sideB": "Évolution", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Créer sa propre entreprise vs travailler pour un employeur — quel est le meilleur choix à 30 ans ?", "sideA": "Propre entreprise", "sideB": "Employeur", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ambition vs équilibre vie pro-vie perso — peut-on vraiment avoir les deux ?", "sideA": "Ambition", "sideB": "Équilibre", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Réseautage vs renforcement des compétences — qu'est-ce qui fait avancer votre carrière le plus ?", "sideA": "Réseautage", "sideB": "Compétences", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Commentaires honnêtes d'un manager vs être laissé à travailler de manière indépendante — qu'est-ce qui motive le plus les adultes ?", "sideA": "Commentaires", "sideB": "Indépendance", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Changer de carrière à 40 ans vs rester dans son domaine — quelle est la décision la plus sage ?", "sideA": "Changer", "sideB": "Rester", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Rembourser son prêt immobilier par anticipation vs investir cet argent — qu'est-ce qui est le plus intelligent ?", "sideA": "Rembourser", "sideB": "Investir", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Être propriétaire vs louer en permanence — qu'est-ce qui convient le mieux à la vie adulte moderne ?", "sideA": "Propriétaire", "sideB": "Locataire", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Épargner pour la retraite tôt vs profiter de l'argent dans la trentaine — qu'est-ce qui est le plus sage ?", "sideA": "Épargner tôt", "sideB": "Profiter maintenant", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Vivre en dessous de ses moyens vs dépenser pour profiter de la vie maintenant — quelle approche est la plus saine ?", "sideA": "Moins dépenser", "sideB": "Profiter maintenant", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Deux revenus dans un foyer vs un partenaire restant à la maison — qu'est-ce qui fonctionne le mieux pour les familles ?", "sideA": "Deux revenus", "sideB": "Un au foyer", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Avoir des enfants vs choisir de ne pas en avoir — qu'est-ce qui est une vie d'adulte plus épanouissante ?", "sideA": "Enfants", "sideB": "Sans enfants", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Éducation stricte vs éducation permissive — qu'est-ce qui produit des adultes plus heureux ?", "sideA": "Stricte", "sideB": "Permissive", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Relation à long terme vs rester célibataire — qu'est-ce qui est le mieux pour l'épanouissement personnel ?", "sideA": "Relation", "sideB": "Célibataire", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Séparer vie professionnelle et vie privée vs les intégrer — qu'est-ce qui est plus sain ?", "sideA": "Séparer", "sideB": "Intégrer", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Partir à l'étranger en couple vs rester proche de sa famille — quel est le bon choix ?", "sideA": "Étranger", "sideB": "Rester proche", "level": "intermediate", "theme": "travel_cultural_B1", "ideasA": [], "ideasB": []},
            {"topic": "Prioriser la santé physique vs la santé mentale — sur quoi les adultes devraient-ils se concentrer en premier ?", "sideA": "Physique", "sideB": "Mentale", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Santé privée vs s'appuyer sur le système public — quelle est la meilleure stratégie pour un adulte ?", "sideA": "Privée", "sideB": "Publique", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Examens médicaux réguliers vs n'y aller que quand on est malade — quelle est l'approche la plus intelligente ?", "sideA": "Réguliers", "sideB": "Quand malade", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Réduire l'alcool vs réduire le stress — qu'est-ce qui a le plus grand impact sur la santé des adultes ?", "sideA": "Moins d'alcool", "sideB": "Moins de stress", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Liberté individuelle vs responsabilité communautaire — qu'est-ce qui devrait guider les décisions des adultes ?", "sideA": "Liberté", "sideB": "Responsabilité", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Optimisme quant à l'avenir vs réalisme — quelle est l'attitude la plus utile pour les adultes ?", "sideA": "Optimisme", "sideB": "Réalisme", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Changer le monde vs se construire une vie personnelle stable — quelle est l'ambition la plus honnête ?", "sideA": "Changer le monde", "sideB": "Vie stable", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Consacrer son temps au bénévolat vs donner de l'argent — qu'est-ce qui fait le plus de bien ?", "sideA": "Bénévolat", "sideB": "Don d'argent", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Suivre les valeurs de sa génération vs les remettre en question — qu'est-ce qui est le plus admirable ?", "sideA": "Suivre", "sideB": "Questionner", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Savoir combien gagnent vos collègues vs ne pas le savoir — qu'est-ce qui est le mieux pour l'harmonie au bureau ?", "sideA": "Savoir", "sideB": "Ne pas savoir", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Répondre aux messages immédiatement vs prendre son temps — qu'est-ce qui est le plus respectueux dans la vie adulte ?", "sideA": "Immédiatement", "sideB": "Prendre son temps", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Admettre qu'on n'a aucune idée de ce qu'est un fonds de pension vs prétendre qu'on le sait — quelle est l'expérience adulte la plus parlante ?", "sideA": "Admettre", "sideB": "Prétendre", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Annuler des plans à la dernière minute vs sortir quand on n'en a pas envie — quelle est la pire habitude adulte ?", "sideA": "Annuler", "sideB": "Sortir quand même", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Parler ouvertement d'argent avec ses amis vs garder cela privé — quelle est l'approche la plus mature ?", "sideA": "Parler ouvertement", "sideB": "Garder privé", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},

            {"topic": "Café vs thé — quelle est la meilleure boisson du matin ?", "sideA": "Café", "sideB": "Thé", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?", "sideA": "Restaurant", "sideB": "Cuisine maison", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux pour vous ?", "sideA": "Petit-déjeuner", "sideB": "Aucun", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Eau vs jus — qu'est-ce qui est plus sain ?", "sideA": "Eau", "sideB": "Jus", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Viande vs légumes — qu'est-ce qui est le plus important dans un repas ?", "sideA": "Viande", "sideB": "Légumes", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Maison vs appartement — où est-il préférable de vivre ?", "sideA": "Maison", "sideB": "Appartement", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Ville vs village — quel est le meilleur endroit pour vivre ?", "sideA": "Ville", "sideB": "Village", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Espèces vs carte — avec quoi est-il préférable de payer ?", "sideA": "Espèces", "sideB": "Carte", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Économiser de l'argent vs dépenser de l'argent — qu'est-ce qui est mieux ?", "sideA": "Économiser", "sideB": "Dépenser", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Louer vs acheter — qu'est-ce qui est mieux ?", "sideA": "Louer", "sideB": "Acheter", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Travail du matin vs travail du soir — qu'est-ce qui est mieux ?", "sideA": "Matin", "sideB": "Soir", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Voiture vs bus — qu'est-ce qui est mieux pour aller au travail ?", "sideA": "Voiture", "sideB": "Bus", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Marcher vs conduire — qu'est-ce qui est mieux en ville ?", "sideA": "Marcher", "sideB": "Conduire", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Bureau vs maison — quel est le meilleur endroit pour travailler ?", "sideA": "Bureau", "sideB": "Maison", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?", "sideA": "Lève-tôt", "sideB": "Couche-tard", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Été vs hiver — quelle saison est la meilleure ?", "sideA": "Été", "sideB": "Hiver", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?", "sideA": "Courtes", "sideB": "Longues", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Appel téléphonique vs message — qu'est-ce qui est mieux ?", "sideA": "Appel", "sideB": "Message", "level": "starter", "theme": "technology_A1", "ideasA": [], "ideasB": []},
            {"topic": "Douche le matin vs douche le soir — qu'est-ce qui est correct ?", "sideA": "Matin", "sideB": "Soir", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Lundi vs vendredi — quel jour est le meilleur ?", "sideA": "Lundi", "sideB": "Vendredi", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Trop chaud vs trop froid — qu'est-ce qui est le pire ?", "sideA": "Trop chaud", "sideB": "Trop froid", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux dans un avion ?", "sideA": "Hublot", "sideB": "Couloir", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travailler à temps plein vs travailler à temps partiel — qu'est-ce qui est mieux ?", "sideA": "Temps plein", "sideB": "Temps partiel", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travailler dans un bureau vs travailler à domicile — que préférez-vous ?", "sideA": "Bureau", "sideB": "Domicile", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un travail qu'on aime vs un travail bien payé — qu'est-ce qui est le plus important ?", "sideA": "Travail aimé", "sideB": "Bien payé", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Travailler avec d'autres personnes vs travailler seul — qu'est-ce qui est mieux ?", "sideA": "Avec les autres", "sideB": "Seul", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un trajet court vs un trajet long — qu'est-ce qui est le plus acceptable ?", "sideA": "Court", "sideB": "Long", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivre seul vs vivre avec un partenaire — qu'est-ce qui est mieux ?", "sideA": "Seul", "sideB": "Partenaire", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Grande ville vs petite ville — quel est le meilleur endroit pour vivre en tant qu'adulte ?", "sideA": "Grande ville", "sideB": "Petite ville", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cuisiner à la maison vs manger à l'extérieur — qu'est-ce qui est mieux pour la vie quotidienne ?", "sideA": "À la maison", "sideB": "Extérieur", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avoir des enfants vs ne pas avoir d'enfants — quelle vie est la meilleure ?", "sideA": "Enfants", "sideB": "Pas d'enfants", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Louer un appartement vs acheter une maison — qu'est-ce qui est mieux pour les jeunes adultes ?", "sideA": "Louer", "sideB": "Acheter", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Faire de l'exercice tous les jours vs se reposer — qu'est-ce qui est mieux pour votre santé ?", "sideA": "Exercice", "sideB": "Repos", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Aller chez le médecin vs attendre — qu'est-ce qui est mieux quand on se sent malade ?", "sideA": "Médecin", "sideB": "Attendre", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dormir huit heures vs dormir moins — qu'est-ce qui est le plus réaliste pour les adultes ?", "sideA": "8 heures", "sideB": "Moins", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Aller au travail à pied vs prendre la voiture — qu'est-ce qui est mieux pour votre santé ?", "sideA": "À pied", "sideB": "Voiture", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Achats en ligne vs achats en magasin — que préférez-vous ?", "sideA": "En ligne", "sideB": "Magasin", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Économiser pour l'avenir vs profiter de l'argent maintenant — qu'est-ce qui est le plus sage ?", "sideA": "Économiser", "sideB": "Profiter maintenant", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Choses chères vs choses bon marché — qu'est-ce qui a le meilleur rapport qualité-prix ?", "sideA": "Chères", "sideB": "Bon marché", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Acheter neuf vs acheter d'occasion — qu'est-ce qui est mieux ?", "sideA": "Neuf", "sideB": "Occasion", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Regarder la télé à la maison vs sortir — quelle est la meilleure soirée ?", "sideA": "Télé", "sideB": "Sortir", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vacances en famille vs vacances entre amis — qu'est-ce qui est mieux ?", "sideA": "Famille", "sideB": "Amis", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Rester dans son pays vs voyager à l'étranger — quelles sont les meilleures vacances ?", "sideA": "Son pays", "sideB": "Étranger", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Le sport vs la lecture — quel est le meilleur passe-temps pour les adultes ?", "sideA": "Sport", "sideB": "Lecture", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Voir des amis souvent vs avoir du temps seul — qu'est-ce qui est le plus important ?", "sideA": "Amis", "sideB": "Seul", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Répondre aux e-mails immédiatement vs les laisser pour plus tard — qu'est-ce qui est le plus professionnel ?", "sideA": "Immédiatement", "sideB": "Plus tard", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Faire la vaisselle immédiatement vs la laisser jusqu'à demain — qu'est-ce qui est mieux ?", "sideA": "Immédiatement", "sideB": "Demain", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire au travail ?", "sideA": "En avance", "sideB": "En retard", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avoir un bureau très organisé vs un bureau en désordre — quelle personne est la plus productive ?", "sideA": "Organisé", "sideB": "Désordre", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Parler de travail au dîner vs pas de discussion de travail au dîner — quelle règle est la meilleure ?", "sideA": "Parler travail", "sideB": "Pas de travail", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},

            {
                "topic": "Langage : Constitutif vs Expressif",
                "sideA": "Constitutif",
                "sideB": "Expressif",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Façonne la réalité",
                    "Limite la pensée"
                ],
                "ideasB": [
                    "Reflète la réalité",
                    "Outil pour la pensée"
                ]
            },
            {
                "topic": "Précision vs Ambiguïté",
                "sideA": "Précision",
                "sideB": "Ambiguïté",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Clarté",
                    "Efficacité"
                ],
                "ideasB": [
                    "Nuance",
                    "Diplomatie"
                ]
            },
            {
                "topic": "Rhétorique vs Logique",
                "sideA": "Rhétorique",
                "sideB": "Logique",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pouvoir persuasif",
                    "Appel émotionnel"
                ],
                "ideasB": [
                    "Vérité objective",
                    "Validité structurelle"
                ]
            },
            {
                "topic": "Sens littéral vs Sens interprétatif",
                "sideA": "Littéral",
                "sideB": "Interprétatif",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Intention de l'auteur",
                    "Stabilité"
                ],
                "ideasB": [
                    "Réponse du lecteur",
                    "Contexte évolutif"
                ]
            },
            {
                "topic": "Consensus scientifique vs Humilité épistémique",
                "sideA": "Consensus",
                "sideB": "Humilité",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Connaissances établies",
                    "Autorité d'expert"
                ],
                "ideasB": [
                    "Ouverture à la correction",
                    "Reconnaissance des limites"
                ]
            },
            {
                "topic": "Expertise vs Expérience vécue",
                "sideA": "Expertise",
                "sideB": "Expérience vécue",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rigueur scientifique",
                    "Données objectives"
                ],
                "ideasB": [
                    "Vérité authentique",
                    "Aperçu contextuel"
                ]
            },
            {
                "topic": "Le doute : Vertu vs Paralysie",
                "sideA": "Vertu",
                "sideB": "Paralysie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pensée critique",
                    "Scepticisme"
                ],
                "ideasB": [
                    "Indécision",
                    "Manque d'action"
                ]
            },
            {
                "topic": "Récit vs Données",
                "sideA": "Récit",
                "sideB": "Données",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Impact émotionnel",
                    "Connexion humaine"
                ],
                "ideasB": [
                    "Vérité statistique",
                    "Scalabilité"
                ]
            },
            {
                "topic": "Légitimité : Consentement vs Résultat",
                "sideA": "Consentement",
                "sideB": "Résultat",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Processus démocratique",
                    "Droit moral"
                ],
                "ideasB": [
                    "Efficacité",
                    "Gouvernance efficace"
                ]
            },
            {
                "topic": "État : Garant de la liberté vs Menace",
                "sideA": "Garant",
                "sideB": "Menace",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "État de droit",
                    "Protection des droits"
                ],
                "ideasB": [
                    "Abus de pouvoir",
                    "Surveillance"
                ]
            },
            {
                "topic": "Politique des droits vs Politique des responsabilités",
                "sideA": "Droits",
                "sideB": "Responsabilités",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Liberté individuelle",
                    "Protection juridique"
                ],
                "ideasB": [
                    "Devoir collectif",
                    "Cohésion sociale"
                ]
            },
            {
                "topic": "Neutralité vs Gouvernance orientée par les valeurs",
                "sideA": "Neutralité",
                "sideB": "Orientée valeurs",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Impartialité",
                    "Équité"
                ],
                "ideasB": [
                    "Direction morale",
                    "Objectif social"
                ]
            },
            {
                "topic": "Intention vs Réception en art",
                "sideA": "Intention",
                "sideB": "Réception",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Vision de l'auteur",
                    "Contexte original"
                ],
                "ideasB": [
                    "Sens pour le public",
                    "Impact culturel"
                ]
            },
            {
                "topic": "Valeur esthétique vs Valeur morale",
                "sideA": "Esthétique",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'art pour l'art",
                    "Pure beauté"
                ],
                "ideasB": [
                    "Utilité sociale",
                    "Impact éthique"
                ]
            },
            {
                "topic": "L'avant-garde vs Accessibilité",
                "sideA": "Avant-garde",
                "sideB": "Accessibilité",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Repousser les limites",
                    "Défi intellectuel"
                ],
                "ideasB": [
                    "Inclusivité",
                    "Art démocratique"
                ]
            },
            {
                "topic": "Art institutionnel vs Art brut",
                "sideA": "Institutionnel",
                "sideB": "Art brut",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Préservation historique",
                    "Normes"
                ],
                "ideasB": [
                    "Authenticité brute",
                    "Anti-establishment"
                ]
            },
            {
                "topic": "Principe de précaution vs proaction",
                "sideA": "Précaution",
                "sideB": "Proaction",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Évitement des risques",
                    "La sécurité d'abord"
                ],
                "ideasB": [
                    "Innovation",
                    "Accepter le changement"
                ]
            },
            {
                "topic": "Progrès scientifique : Intrinsèquement bon vs Neutre",
                "sideA": "Intrinsèquement bon",
                "sideB": "Éthiquement neutre",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Valeurs des Lumières",
                    "Résolution de problèmes"
                ],
                "ideasB": [
                    "Préoccupation du double usage",
                    "Responsabilité humaine"
                ]
            },
            {
                "topic": "Risque existentiel vs Souffrance actuelle",
                "sideA": "Risque existentiel",
                "sideB": "Souffrance actuelle",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Survie à long terme",
                    "Générations futures"
                ],
                "ideasB": [
                    "Soulagement immédiat",
                    "Pauvreté urgente"
                ]
            },
            {
                "topic": "Conscience humaine vs Intelligence artificielle générale",
                "sideA": "Conscience",
                "sideB": "IA Générale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Unicité biologique",
                    "Expérience subjective"
                ],
                "ideasB": [
                    "Puissance de calcul",
                    "Logique algorithmique"
                ]
            },
            {
                "topic": "Le progrès : Réel vs Illusion",
                "sideA": "Réel",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Avancement technologique",
                    "Qualité de vie améliorée"
                ],
                "ideasB": [
                    "Histoire cyclique",
                    "Nouveaux problèmes"
                ]
            },
            {
                "topic": "Ordre libéral vs Monde multipolaire",
                "sideA": "Ordre libéral",
                "sideB": "Multipolarité",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Valeurs universelles",
                    "Stabilité mondiale"
                ],
                "ideasB": [
                    "Puissance diversifiée",
                    "Souveraineté culturelle"
                ]
            },
            {
                "topic": "Mémoire vs Oubli",
                "sideA": "Mémoire",
                "sideB": "Oubli",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Apprendre de l'histoire",
                    "Identité"
                ],
                "ideasB": [
                    "Aller de l'avant",
                    "Surmonter les traumatismes"
                ]
            },
            {
                "topic": "Tragédie des communs vs Coopération",
                "sideA": "Tragédie",
                "sideB": "Coopération",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Intérêt personnel",
                    "Épuisement des ressources"
                ],
                "ideasB": [
                    "Bénéfice mutuel",
                    "Gestion collective"
                ]
            },
            {
                "topic": "Rouge vs Bleu — quelle couleur est la meilleure ?",
                "sideA": "Rouge",
                "sideB": "Bleu",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jaune vs Vert — quelle couleur est la plus joyeuse ?",
                "sideA": "Jaune",
                "sideB": "Vert",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Noir vs Blanc — quelle couleur préférez-vous ?",
                "sideA": "Noir",
                "sideB": "Blanc",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Violet — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Violet",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cercle vs Carré — quelle forme est la plus utile ?",
                "sideA": "Cercle",
                "sideB": "Carré",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits nombres — lesquels sont les plus amusants ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — quelle forme est la meilleure ?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ballon vs Poupée — quel jouet est le meilleur ?",
                "sideA": "Ballon",
                "sideB": "Poupée",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Crayon vs Stylo — avec quoi est-il préférable d'écrire ?",
                "sideA": "Crayon",
                "sideB": "Stylo",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre vs Image — d'où est-il préférable d'apprendre ?",
                "sideA": "Livre",
                "sideB": "Image",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs Sol — où est-il préférable de s'asseoir ?",
                "sideA": "Chaise",
                "sideB": "Sol",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chat vs Chien — quel animal est le meilleur ?",
                "sideA": "Chat",
                "sideB": "Chien",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Poisson vs Oiseau — quel est le meilleur animal de compagnie ?",
                "sideA": "Poisson",
                "sideB": "Oiseau",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits animaux — lesquels sont les plus gentils ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lapin vs Hamster — lequel est le plus mignon ?",
                "sideA": "Lapin",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eau vs Jus — qu'est-il préférable de boire ?",
                "sideA": "Eau",
                "sideB": "Jus",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pomme vs Banane — quel fruit est le meilleur ?",
                "sideA": "Pomme",
                "sideB": "Banane",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pain vs Riz — qu'est-il préférable de manger ?",
                "sideA": "Pain",
                "sideB": "Riz",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lait vs Eau — lequel préférez-vous ?",
                "sideA": "Lait",
                "sideB": "Eau",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en famille vs Seul — qu'est-ce qui est mieux ?",
                "sideA": "En famille",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir un frère vs une sœur — qu'est-ce qui est mieux ?",
                "sideA": "Frère",
                "sideB": "Sœur",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grande vs Petite famille — laquelle est la plus agréable ?",
                "sideA": "Grande",
                "sideB": "Petite",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'aîné vs Le cadet — qu'est-ce qui est mieux ?",
                "sideA": "Aîné",
                "sideB": "Cadet",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École le matin vs après-midi — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Après-midi",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lecture vs Maths — lequel est le plus amusant ?",
                "sideA": "Lecture",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École vs Maison — qu'est-ce qui est mieux ?",
                "sideA": "École",
                "sideB": "Maison",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
                "sideA": "Devoirs",
                "sideB": "Aucun",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seul vs Avec un partenaire — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Papier vs Ordinateur — lequel est le mieux ?",
                "sideA": "Papier",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Dîner",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaud vs Froid — lequel est le mieux ?",
                "sideA": "Chaud",
                "sideB": "Froid",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Restaurant — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sucré vs Salé — que préférez-vous ?",
                "sideA": "Sucré",
                "sideB": "Salé",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs Acheter — qu'est-ce qui est plus agréable ?",
                "sideA": "Cuisiner",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se lever tôt vs tard — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matin vs Soir — quel moment de la journée est le plus agréable ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Semaine vs Week-end — que préférez-vous ?",
                "sideA": "Semaine",
                "sideB": "Week-end",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Été vs Hiver — quelle saison est la meilleure ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se coucher tôt vs tard — qu'est-ce qui est le plus sain ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Appartement — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ville vs Campagne — où est-il préférable de vivre ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chambre vs Salon — quelle pièce préférez-vous ?",
                "sideA": "Chambre",
                "sideB": "Salon",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux d'intérieur vs d'extérieur — lesquels sont les plus amusants ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Livre — lequel est le mieux ?",
                "sideA": "TV",
                "sideB": "Livre",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Jeu vidéo — lequel est le plus amusant ?",
                "sideA": "Sport",
                "sideB": "Jeu vidéo",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dessin vs Chant — quel passe-temps est le meilleur ?",
                "sideA": "Dessin",
                "sideB": "Chant",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jouer seul vs avec des amis — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Natation vs Course — quel sport préférez-vous ?",
                "sideA": "Natation",
                "sideB": "Course",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique vs Sport — quel passe-temps est le meilleur ?",
                "sideA": "Musique",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animaux de ferme vs sauvages — lesquels sont les plus intéressants ?",
                "sideA": "Ferme",
                "sideB": "Sauvages",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pluie vs Soleil — quel temps préférez-vous ?",
                "sideA": "Pluie",
                "sideB": "Soleil",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mer vs Montagne — lequel est le mieux pour les vacances ?",
                "sideA": "Mer",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fleurs vs Arbres — lesquels sont les plus beaux ?",
                "sideA": "Fleurs",
                "sideB": "Arbres",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voiture vs Bus — lequel est le mieux ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
                "sideA": "Marcher",
                "sideB": "Vélo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances courtes vs longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager seul vs en famille — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Famille",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Achats en ligne vs Achats en personne",
                "sideA": "En ligne",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Commodité",
                    "Meilleurs prix"
                ],
                "ideasB": [
                    "Essayer les articles",
                    "Gratification instantanée"
                ]
            },
            {
                "topic": "Livres papier vs E-books",
                "sideA": "Papier",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Odeur/Toucher",
                    "Collectionnable"
                ],
                "ideasB": [
                    "Portabilité",
                    "Gain de place"
                ]
            },
            {
                "topic": "Télétravail vs Travail au bureau",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Pas de trajet",
                    "Flexibilité"
                ],
                "ideasB": [
                    "Socialisation",
                    "Meilleure concentration"
                ]
            },
            {
                "topic": "Voitures électriques vs Voitures à essence",
                "sideA": "Électrique",
                "sideB": "Essence",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Environnement",
                    "Silencieux"
                ],
                "ideasB": [
                    "Autonomie",
                    "Vitesse de charge"
                ]
            },
            {
                "topic": "Étudier le matin ou étudier le soir — quand est-ce mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Professeurs sévères ou professeurs sympas — qui aide le plus les élèves ?",
                "sideA": "Sévères",
                "sideB": "Sympas",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre avec un manuel ou apprendre avec des vidéos — qu'est-ce qui est plus efficace ?",
                "sideA": "Manuel",
                "sideB": "Vidéos",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cours courts ou cours longs — lesquels aident à mieux apprendre ?",
                "sideA": "Courts",
                "sideB": "Longs",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Projets de groupe ou travaux individuels — que préférez-vous ?",
                "sideA": "Groupe",
                "sideB": "Individuel",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolaire ou vêtements décontractés à l'école — qu'est-ce qui est mieux ?",
                "sideA": "Uniforme",
                "sideB": "Décontracté",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Repas faits maison ou restauration rapide — qu'est-ce qui est mieux ?",
                "sideA": "Fait maison",
                "sideB": "Fast-food",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trois gros repas ou plusieurs petites collations — qu'est-ce qui est plus sain ?",
                "sideA": "Gros repas",
                "sideB": "Collations",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nourriture végétarienne ou viande — quel régime est le meilleur ?",
                "sideA": "Végétarien",
                "sideB": "Viande",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Boire du thé ou boire du café — qu'est-ce qui est mieux ?",
                "sideA": "Thé",
                "sideB": "Café",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger seul ou manger avec d'autres — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Avec d'autres",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pratiquer un sport d'équipe ou un sport individuel — qu'est-ce qui est mieux ?",
                "sideA": "Sport d'équipe",
                "sideB": "Sport individuel",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer son temps libre à l'intérieur ou à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou théâtre — quelle est la meilleure sortie ?",
                "sideA": "Cinéma",
                "sideB": "Théâtre",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écouter de la musique ou jouer d'un instrument — qu'est-ce qui est plus agréable ?",
                "sideA": "Écouter",
                "sideB": "Jouer",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux vidéo ou jeux de société — lesquels sont les plus amusants ?",
                "sideA": "Jeux vidéo",
                "sideB": "Jeux de société",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire du shopping ou rester à la maison — quelle est la meilleure façon de passer le week-end ?",
                "sideA": "Shopping",
                "sideB": "Rester chez soi",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Téléphone portable ou ordinateur — lequel est le plus utile dans la vie quotidienne ?",
                "sideA": "Portable",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Envoyer un message ou passer un appel téléphonique — qu'est-ce qui est mieux ?",
                "sideA": "Message",
                "sideB": "Appel",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre numérique ou livre papier — lequel préférez-vous lire ?",
                "sideA": "E-book",
                "sideB": "Livre papier",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prendre des photos avec son téléphone ou avec un appareil photo — lequel donne de meilleurs résultats ?",
                "sideA": "Téléphone",
                "sideB": "Appareil photo",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances à la plage ou vacances à la montagne — qu'est-ce qui est mieux ?",
                "sideA": "Plage",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager en train ou voyager en avion — qu'est-ce qui est mieux ?",
                "sideA": "Train",
                "sideB": "Avion",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiter une ville célèbre ou visiter un petit village — qu'est-ce qui est plus intéressant ?",
                "sideA": "Ville",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Séjourner à l'hôtel ou chez l'habitant — que préférez-vous ?",
                "sideA": "Hôtel",
                "sideB": "Chez l'habitant",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager à l'étranger ou explorer son propre pays — qu'est-ce qui en vaut le plus la peine ?",
                "sideA": "Étranger",
                "sideB": "Propre pays",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir beaucoup d'amis ou avoir quelques amis proches — qu'est-ce qui est mieux ?",
                "sideA": "Beaucoup",
                "sideB": "Amis proches",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rencontrer des amis en personne ou discuter en ligne — qu'est-ce qui est plus satisfaisant ?",
                "sideA": "En personne",
                "sideB": "En ligne",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre chez ses parents ou vivre dans un appartement étudiant — qu'est-ce qui est mieux pour les jeunes ?",
                "sideA": "Parents",
                "sideB": "Appartement étudiant",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fêter son anniversaire à la maison ou sortir — qu'est-ce qui est le plus sympa ?",
                "sideA": "Maison",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Économiser de l'argent ou dépenser de l'argent — qu'est-ce qui est plus sage ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à temps partiel pendant ses études ou se concentrer uniquement sur l'école — qu'est-ce qui est mieux ?",
                "sideA": "Temps partiel",
                "sideB": "Études seules",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gagner beaucoup d'argent ou avoir du temps libre — qu'est-ce qui compte le plus ?",
                "sideA": "Argent",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprentissage en ligne ou apprentissage en classe — qu'est-ce qui est plus efficace ?",
                "sideA": "En ligne",
                "sideB": "En classe",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mémoriser des faits ou apprendre à trouver l'information — quelle compétence est la plus importante ?",
                "sideA": "Faits",
                "sideB": "Trouver l'info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Études universitaires ou formation professionnelle — quelle est la meilleure voie ?",
                "sideA": "Université",
                "sideB": "Pro",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Examens ou contrôle continu — quelle est la manière la plus juste d'évaluer les élèves ?",
                "sideA": "Examens",
                "sideB": "Continu",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre une langue étrangère à l'école ou vivre à l'étranger — qu'est-ce qui est plus efficace ?",
                "sideA": "École",
                "sideB": "Vivre à l'étranger",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écoles non mixtes ou écoles mixtes — lesquelles sont meilleures pour les élèves ?",
                "sideA": "Non mixte",
                "sideB": "Mixte",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux ou communication en face à face — qu'est-ce qui est mieux pour rester en contact ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Services de streaming ou télévision traditionnelle — qu'est-ce qui est mieux ?",
                "sideA": "Streaming",
                "sideB": "TV classique",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à domicile ou travailler dans un bureau — qu'est-ce qui est plus productif ?",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lire les actualités en ligne ou lire un journal — qu'est-ce qui est plus fiable ?",
                "sideA": "Actualités en ligne",
                "sideB": "Journal papier",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer du temps sur les réseaux sociaux ou passer du temps dans la nature — qu'est-ce qui est mieux pour votre santé mentale ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Utiliser les transports en commun ou conduire une voiture — qu'est-ce qui est mieux pour la société ?",
                "sideA": "Transports publics",
                "sideB": "Voiture",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acheter des vêtements d'occasion ou acheter des vêtements neufs — quelle est la meilleure habitude ?",
                "sideA": "Occasion",
                "sideB": "Neuf",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en ville ou vivre à la campagne — qu'est-ce qui convient le mieux aux jeunes ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Végétarisme ou manger de la viande — qu'est-ce qui est mieux pour la planète ?",
                "sideA": "Végétarisme",
                "sideB": "Viande",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changements de mode de vie individuels ou action gouvernementale — qu'est-ce qui fait le plus pour l'environnement ?",
                "sideA": "Individuel",
                "sideB": "Gouvernement",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un emploi stable ou une carrière créative — quel est le meilleur choix de vie ?",
                "sideA": "Emploi stable",
                "sideB": "Carrière créative",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lancer sa propre entreprise ou travailler pour une société — qu'est-ce qui est mieux ?",
                "sideA": "Propre entreprise",
                "sideB": "Société",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salaire élevé ou satisfaction au travail — qu'est-ce qui compte le plus au travail ?",
                "sideA": "Salaire",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler de longues heures ou avoir un équilibre vie professionnelle-vie privée — qu'est-ce qui mène au succès ?",
                "sideA": "Longues heures",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choisir une carrière par passion ou en fonction des perspectives d'emploi — qu'est-ce qui est plus sage ?",
                "sideA": "Passion",
                "sideB": "Perspectives",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en tant qu'individu ou donner la priorité à la communauté — qu'est-ce qui est plus important ?",
                "sideA": "Individu",
                "sideB": "Communauté",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valeurs traditionnelles ou valeurs modernes — lesquelles est-il plus important de conserver ?",
                "sideA": "Traditionnelles",
                "sideB": "Modernes",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bénévolat ou don d'argent à une œuvre caritative — qu'est-ce qui aide le plus ?",
                "sideA": "Bénévolat",
                "sideB": "Don",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Célébrité ou faire une différence discrètement — quel est le meilleur objectif de vie ?",
                "sideA": "Célébrité",
                "sideB": "Différence discrète",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Suivre les règles ou penser par soi-même — qu'est-ce qui compte le plus ?",
                "sideA": "Règles",
                "sideB": "Pensée propre",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé physique ou santé mentale — quelle devrait être la priorité ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prévention ou traitement — quelle est la meilleure approche des soins de santé ?",
                "sideA": "Prévention",
                "sideB": "Traitement",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport de compétition ou exercice pour le plaisir — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Compétition",
                "sideB": "Plaisir",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé privée ou santé publique — quel système est le plus juste ?",
                "sideA": "Privé",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou littérature — quelle est la forme d'art la plus puissante ?",
                "sideA": "Cinéma",
                "sideB": "Littérature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Art moderne ou art classique — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Moderne",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Préserver les vieux bâtiments ou en construire de nouveaux — qu'est-ce qui compte le plus ?",
                "sideA": "Préserver",
                "sideB": "Construire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Culture locale ou mondialisation — qu'est-ce qui enrichit le plus les communautés ?",
                "sideA": "Locale",
                "sideB": "Mondialisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux vs interactions en face à face — qu'est-ce qui est mieux pour construire des relations ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vie urbaine vs vie rurale — laquelle offre une meilleure qualité de vie ?",
                "sideA": "Urbain",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprentissage en ligne vs salle de classe traditionnelle — quel est l'avenir de l'éducation ?",
                "sideA": "En ligne",
                "sideB": "Classe",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Énergie renouvelable vs énergie nucléaire — quelle est la meilleure solution pour le climat ?",
                "sideA": "Renouvelable",
                "sideB": "Nucléaire",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mode éphémère vs vêtements durables — pouvons-nous nous permettre d'être éthiques ?",
                "sideA": "Mode éphémère",
                "sideB": "Durable",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Créativité de l'IA vs art humain — les machines peuvent-elles vraiment créer de l'art ?",
                "sideA": "Créativité IA",
                "sideB": "Art humain",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exploration spatiale vs exploration des grands fonds — où devrions-nous concentrer nos ressources ?",
                "sideA": "Espace",
                "sideB": "Grands fonds",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vie privée numérique vs sécurité nationale — la surveillance totale est-elle jamais justifiée ?",
                "sideA": "Vie privée",
                "sideB": "Sécurité",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aliments génétiquement modifiés vs agriculture biologique — comment devrions-nous nourrir le monde ?",
                "sideA": "OGM",
                "sideB": "Bio",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Revenu universel vs programmes de garantie d'emploi — quel est le meilleur filet de sécurité sociale ?",
                "sideA": "Revenu universel",
                "sideB": "Garantie d'emploi",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Orange — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le chiffre 1 vs le chiffre 10 — quel chiffre est le meilleur ?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs canapé — lequel est le plus confortable ?",
                "sideA": "Chaise",
                "sideB": "Canapé",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sac vs boîte — lequel est le plus utile ?",
                "sideA": "Sac",
                "sideB": "Boîte",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs éléphant — quel animal est le meilleur ?",
                "sideA": "Lion",
                "sideB": "Éléphant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolat vs bonbons — lequel est le meilleur ?",
                "sideA": "Chocolat",
                "sideB": "Bonbons",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuillère vs fourchette — laquelle est la meilleure ?",
                "sideA": "Cuillère",
                "sideB": "Fourchette",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chapeau vs chaussures — lequel est le plus important ?",
                "sideA": "Chapeau",
                "sideB": "Chaussures",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soleil vs lune — lequel est le meilleur ?",
                "sideA": "Soleil",
                "sideB": "Lune",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaussettes vs pas de chaussettes — qu'est-ce qui est le mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans chaussettes",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre avec ses grands-parents vs ne pas vivre avec eux — qu'est-ce qui est le plus agréable ?",
                "sideA": "Avec les grands-parents",
                "sideB": "Sans les grands-parents",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La cuisine de maman vs la cuisine de papa — laquelle est la meilleure ?",
                "sideA": "Maman",
                "sideB": "Papa",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — quelle matière est la plus amusante ?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écrire sur papier vs taper sur une tablette — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Tablette",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pâtes — qu'est-ce qui est le plus bon ?",
                "sideA": "Pizza",
                "sideB": "Pâtes",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Glace vs gâteau — quel est le meilleur dessert ?",
                "sideA": "Glace",
                "sideB": "Gâteau",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jours courts vs jours longs — qu'est-ce qui est mieux ?",
                "sideA": "Jours courts",
                "sideB": "Jours longs",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Journée au parc vs journée à la plage — qu'est-ce qui est mieux ?",
                "sideA": "Parc",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avion vs train — qu'est-ce qui est le plus amusant ?",
                "sideA": "Avion",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats qui renversent des choses vs chiens qui mâchent des chaussures — quel animal est le plus agaçant ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger de la pizza avec une fourchette vs avec les mains — qu'est-ce qui est correct ?",
                "sideA": "Fourchette",
                "sideB": "Mains",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormir avec des chaussettes vs sans chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Château de sable vs bonhomme de neige — qu'est-ce qui est le plus amusant à construire ?",
                "sideA": "Château de sable",
                "sideB": "Bonhomme de neige",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Beaucoup d'examens vs très peu d'examens — qu'est-ce qui est le plus juste ?",
                "sideA": "Beaucoup d'examens",
                "sideB": "Très peu d'examens",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Commencer l'école à 7 ans vs commencer à 5 ans — qu'est-ce qui est mieux pour les enfants ?",
                "sideA": "À 7 ans",
                "sideB": "À 5 ans",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger lentement vs manger rapidement — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Lentement",
                "sideB": "Rapidement",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner à la maison vs commander en ligne — qu'est-ce qui est mieux ?",
                "sideA": "Cuisiner",
                "sideB": "Commander",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs faire de la pâtisserie — qu'est-ce qui est le plus amusant comme passe-temps ?",
                "sideA": "Cuisiner",
                "sideB": "Pâtisser",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice dehors — qu'est-ce qui est mieux ?",
                "sideA": "Salle de sport",
                "sideB": "Dehors",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos sur téléphone vs photos imprimées — qu'est-ce qui est mieux ?",
                "sideA": "Téléphone",
                "sideB": "Imprimées",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs écran d'ordinateur — qu'est-ce qui est mieux pour regarder des films ?",
                "sideA": "Smart TV",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pays chaud vs pays froid — quelle est la meilleure destination de vacances ?",
                "sideA": "Pays chaud",
                "sideB": "Pays froid",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Offrir des cadeaux vs recevoir des cadeaux — que préférez-vous ?",
                "sideA": "Offrir",
                "sideB": "Recevoir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à l'intérieur vs travailler à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sur la pizza vs pas d'ananas — qu'est-ce qui est correct ?",
                "sideA": "Ananas",
                "sideB": "Pas d'ananas",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettre le lait en premier vs mettre le thé — qu'est-ce qui est mieux ?",
                "sideA": "Lait d'abord",
                "sideB": "Thé d'abord",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lundi vs Vendredi — quel jour est réellement le pire ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se réveiller cinq minutes avant l'alarme vs dormir jusqu'à l'alarme — qu'est-ce qui est le plus agaçant ?",
                "sideA": "Avant l'alarme",
                "sideB": "Jusqu'à l'alarme",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats vs chiens — quel animal est secrètement le patron de la maison ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir trop chaud vs avoir trop froid — qu'est-ce qui est le pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre de ses erreurs vs apprendre de ses succès — qu'est-ce qui instruit le plus ?",
                "sideA": "Erreurs",
                "sideB": "Succès",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablettes en classe vs cahiers traditionnels — qu'est-ce qui aide le plus les élèves ?",
                "sideA": "Tablettes",
                "sideB": "Cahiers",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être toujours joignable vs avoir du temps libre numérique — qu'est-ce qui est mieux ?",
                "sideA": "Joignable",
                "sideB": "Temps libre",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réutiliser les objets vs recycler — qu'est-ce qui est le plus efficace ?",
                "sideA": "Réutiliser",
                "sideB": "Recycler",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Une seule carrière pour la vie vs changer de carrière souvent — qu'est-ce qui est mieux ?",
                "sideA": "Une carrière",
                "sideB": "Changer souvent",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le sommeil vs l'exercice — qu'est-ce qui a le plus d'impact sur votre santé ?",
                "sideA": "Sommeil",
                "sideB": "Exercice",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique pop vs musique classique — laquelle a le plus d'impact culturel ?",
                "sideA": "Pop",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Savoir comment quelque chose se termine vs être surpris — qu'est-ce qui est mieux ?",
                "sideA": "Savoir",
                "sideB": "Surpris",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Répondre immédiatement aux messages vs prendre son temps — qu'est-ce qui est le plus respectueux ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Regarder une série d'un coup vs regarder un épisode par semaine — quelle est la bonne manière ?",
                "sideA": "D'un coup",
                "sideB": "Hebdomadaire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Siège côté fenêtre vs siège côté couloir — lequel est objectivement le meilleur ?",
                "sideA": "Fenêtre",
                "sideB": "Couloir",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sauter la salle une fois vs y aller et avoir une mauvaise séance — qu'est-ce qui est le pire ?",
                "sideA": "Sauter",
                "sideB": "Mauvaise séance",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se parler à soi-même vs parler à son animal — qu'est-ce qui est le plus raisonnable ?",
                "sideA": "À soi-même",
                "sideB": "À son animal",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Mon souvenir d'enfance préféré",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Les dernières vacances que j'ai prises",
                "level": "elementary",
                "theme": "transport_travel_A2"
            },
            {
                "topic": "Une personne qui m'a inspiré",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "L'avenir du monde dans 50 ans",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Le rôle de l'art dans la société moderne",
                "level": "advanced",
                "theme": "leisure_hobbies_A2"
            },
            {
                "topic": "La complexité de la conscience humaine",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "topic": "L'importance de la sensibilisation à la santé mentale",
                "level": "intermediate",
                "theme": "mental_health_B1"
            },
            {
                "topic": "Le métier de mes rêves et pourquoi",
                "level": "starter",
                "theme": "work_A1"
            },
            {
                "topic": "L'impact du changement climatique sur les communautés locales",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            },
            {
                "topic": "Intelligence artificielle : outil ou menace ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }
        ]
    },
    "it": {
        "opinionArena": [
            {
                "text": "La colazione è il pasto più importante?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "I cani sono animali domestici migliori dei gatti?",
                "level": "starter",
                "theme": "leisure_A1"
            },
            {
                "text": "I bambini dovrebbero avere il cellulare?",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "È meglio vivere in una casa o in un appartamento?",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            },
            {
                "text": "Possiamo vivere senza internet per una settimana?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tutti dovrebbero imparare una seconda lingua?",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "I social media stanno distruggendo le nostre abilità sociali?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "I trasporti pubblici dovrebbero essere gratuiti?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            },
            {
                "text": "Ingegneria genetica: progresso o pericolo?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Il reddito di base universale è una soluzione all'automazione?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            },
            {
                "text": "Il libero arbitrio esiste davvero o è un'illusione?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'etica della colonizzazione di altri pianeti.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Penso, dunque sono.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            },
            {
                "text": "L'unica costante è il cambiamento.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [{"topic":"L'etica del lavoro protestante come conquista di civiltà vs come fonte originaria della miseria adulta: quale eredità domina oggi?","sideA":"Conquista di civiltà","sideB":"Fonte di miseria","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"La mercificazione della passione vs la liberazione di trasformare il lavoro in significato: \"fai ciò che ami\" è un consiglio o una trappola?","sideA":"Consiglio","sideB":"Trappola","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"La carriera come identità vs la carriera come mezzo: qual è il rapporto più coerente per un adulto moderno con il proprio lavoro?","sideA":"Identità","sideB":"Mezzo","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Il virtuoso stakanovista vs l'ozioso strategico: chi è stato celebrato in modo più disonesto nella cultura occidentale?","sideA":"Stakanovista","sideB":"Ozioso","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'ambizione adulta come ammirevole vs l'ambizione adulta come incapacità di accettare la finitezza: quale lettura è psicologicamente più onesta?","sideA":"Ammirevole","sideB":"Incapacità di accettare la finitezza","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'amore romantico come principio organizzatore della vita adulta vs come mito storicamente contingente e commercialmente sostenuto: quale posizione è più difendibile?","sideA":"Principio organizzatore","sideB":"Mito commerciale","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Trasparenza radicale nelle relazioni vs necessità di un sé privato: intimità e individuazione possono coesistere?","sideA":"Trasparenza","sideB":"Sé privato","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'etica della cura come correttivo femminista vs come riassegnazione degli stessi oneri: il concetto ha mantenuto le promesse?","sideA":"Correttivo femminista","sideB":"Riassegnazione oneri","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Scegliere di non avere figli come resistenza all'ideologia pronatalista vs come decisione interamente personale senza dimensione politica: possono essere separate nettamente?","sideA":"Resistenza","sideB":"Decisione personale","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La consapevolezza della mortalità come precondizione per una vita adulta significativa vs come suo ostacolo primario: qual è la posizione più vivibile?","sideA":"Precondizione","sideB":"Ostacolo","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'invecchiamento come declino vs l'invecchiamento come accumulo: quale narrazione è più onesta e quale più utile?","sideA":"Declino","sideB":"Accumulo","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La medicalizzazione dell'invecchiamento come progresso vs come rifiuto di accettare la condizione umana: dove tracciare il confine?","sideA":"Progresso","sideB":"Rifiuto","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},
            {"topic":"La memoria come sostanza dell'identità adulta vs la memoria come narratore altamente inaffidabile: quali sono le implicazioni per la costruzione di un sé?","sideA":"Sostanza","sideB":"Narratore inaffidabile","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La complicità del cittadino adulto in sistemi ingiusti attraverso il consumo ordinario vs l'irrilevanza strutturale della purezza morale individuale: qual è l'inquadramento più onesto?","sideA":"Complicità","sideB":"Irrilevanza strutturale","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Il disincanto politico come risposta razionale alle prove disponibili vs come forma di privilegio: quale lettura è empiricamente più difendibile?","sideA":"Risposta razionale","sideB":"Privilegio","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La giustizia intergenerazionale come sfida morale centrale del nostro tempo vs come concetto che oscura sistematicamente le disuguaglianze sociali e razziali del presente: quale critica è più forte?","sideA":"Sfida morale","sideB":"Oscuramento disuguaglianze","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La democrazia liberale come il sistema meno peggiore vs come un sistema che ha strutturalmente esaurito la sua capacità riformatrice: quale verdetto supportano le prove?","sideA":"Sistema meno peggiore","sideB":"Capacità esaurita","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"La capacità di autoinganno come difetto cognitivo vs come meccanismo adattativo: quale resoconto serve meglio l'adulto che vuole vivere bene?","sideA":"Difetto cognitivo","sideB":"Meccanismo adattativo","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'esperienza come autorità epistemica vs l'esperienza come forma di potere istituzionale che merita scrutinio: quando il sano scetticismo diventa codardia epistemica?","sideA":"Autorità epistemica","sideB":"Potere istituzionale","level":"proficiency","theme": "epistemology_truth_C2","ideasA":[],"ideasB":[]},
            {"topic":"La narrazione come modo primario in cui gli adulti danno senso alle loro vite vs la narrazione come modo primario in cui gli adulti si ingannano: quale funzione domina?","sideA":"Dare senso","sideB":"Ingannarsi","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'onestà come virtù incondizionata vs l'onestà come virtù contestuale: esiste un resoconto coerente della sincerità che sopravviva al contatto con le reali relazioni adulte?","sideA":"Virtù incondizionata","sideB":"Virtù contestuale","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"L'adulto che ha \"finalmente capito tutto\" vs l'adulto che ha accettato che non lo farà mai: chi rappresenta un rapporto più sofisticato con la realtà?","sideA":"Capito tutto","sideB":"Accettato l'ignoto","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere: quale relazione professionale è empiricamente più trasformativa e perché la risposta ci mette a disagio?","sideA":"Terapeuta","sideB":"Parrucchiere","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},

            {"topic": "La settimana lavorativa di quattro giorni vs la settimana di cinque giorni — quale modello avvantaggia maggiormente lavoratori e datori di lavoro?", "sideA": "4 giorni", "sideB": "5 giorni", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Reddito di base universale vs assistenza sociale mirata — qual è la rete di sicurezza più efficace per gli adulti che lavorano?", "sideA": "Reddito universale", "sideB": "Assistenza mirata", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "La gig economy vs l'impiego a tempo indeterminato — quale modello serve meglio i lavoratori a lungo termine?", "sideA": "Gig economy", "sideB": "Tempo indeterminato", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Meritocrazia vs vantaggio strutturale — cosa spiega più accuratamente il successo professionale?", "sideA": "Meritocrazia", "sideB": "Vantaggio strutturale", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Trasparenza retributiva vs privacy salariale — cosa crea un luogo di lavoro più equo?", "sideA": "Trasparenza", "sideB": "Privacy", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Automazione vs lavoro umano — qual è la più grande minaccia a lungo termine per l'occupazione degli adulti?", "sideA": "Automazione", "sideB": "Lavoro umano", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Lavoro da remoto vs presenza in ufficio — cosa è meglio per la progressione di carriera e la cultura del team?", "sideA": "Lavoro remoto", "sideB": "Presenza ufficio", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Congedo parentale uguale per uomini e donne vs congedo di maternità più lungo — quale politica è più equa?", "sideA": "Congedo uguale", "sideB": "Maternità lunga", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Scegliere di non avere figli vs pressione sociale per avere una famiglia — cosa merita più rispetto?", "sideA": "Niente figli", "sideB": "Pressione sociale", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Il matrimonio come istituzione vs la convivenza senza matrimonio — cosa è più rilevante oggi?", "sideA": "Matrimonio", "sideB": "Convivenza", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Nuclei familiari a doppio reddito vs un partner che resta a casa — quale modello è migliore per bambini e adulti?", "sideA": "Doppio reddito", "sideB": "Uno a casa", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Il divario retributivo di genere come problema strutturale vs una questione di scelte individuali — quale spiegazione ha più peso?", "sideA": "Prob. strutturale", "sideB": "Scelte individuali", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "La proprietà della casa come obiettivo vs un mercato degli affitti professionale — quale modello abitativo si adatta meglio agli adulti moderni?", "sideA": "Proprietà", "sideB": "Affitto pro", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "La gentrificazione come miglioramento vs la gentrificazione come spostamento — quale inquadramento è più onesto?", "sideA": "Miglioramento", "sideB": "Spostamento", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Densità urbana vs espansione suburbana — qual è il modello migliore per città vivibili?", "sideA": "Densità urbana", "sideB": "Espansione suburbana", "level": "upper-intermediate", "theme": "globalisation_trade_B2", "ideasA": [], "ideasB": []},
            {"topic": "Vivere vicino alla famiglia vs allontanarsi per opportunità — quale scelta produce un miglior benessere a lungo termine?", "sideA": "Vivere vicino", "sideB": "Allontanarsi", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Una popolazione che invecchia come una crisi vs come una risorsa — quale inquadramento è più produttivo?", "sideA": "Crisi", "sideB": "Risorsa", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Responsabilità personale per la salute vs fattori sistemici — cosa ha più peso nello spiegare i risultati di salute?", "sideA": "Resp. personale", "sideB": "Fattori sistemici", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Giornate per la salute mentale come diritto legittimo sul posto di lavoro vs fonte di abusi — dove dovrebbero tracciare il limite i datori di lavoro?", "sideA": "Diritto legittimo", "sideB": "Fonte di abusi", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Medicina preventiva vs medicina curativa — quale dovrebbe ricevere più finanziamenti pubblici?", "sideA": "Preventiva", "sideB": "Curativa", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Medicina anti-invecchiamento vs invecchiare con grazia — quale atteggiamento è più coerente?", "sideA": "Anti-age", "sideB": "Invecchiare con grazia", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Tecnologia di sorveglianza per la sicurezza pubblica vs diritto alla privacy — dove dovrebbe risiedere l'equilibrio?", "sideA": "Sicurezza pubblica", "sideB": "Privacy", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "I social media come strumento di impegno civile vs come motore di polarizzazione — quale effetto domina?", "sideA": "Impegno civile", "sideB": "Polarizzazione", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "L'IA nel reclutamento vs giudizio umano — cosa produce decisioni di assunzione più eque?", "sideA": "IA", "sideB": "Giudizio umano", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Il diritto all'oblio online vs il diritto all'informazione del pubblico — cosa dovrebbe avere la precedenza?", "sideA": "Diritto all'oblio", "sideB": "Diritto info", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Voto obbligatorio vs voto volontario — cosa produce democrazie più sane?", "sideA": "Obbligatorio", "sideB": "Volontario", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Impegno politico attraverso la protesta vs attraverso i canali istituzionali — cosa è più efficace per gli adulti di oggi?", "sideA": "Protesta", "sideB": "Istituzionale", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Identità nazionale vs identità europea o globale — cosa è più significativo per gli adulti nel 2026?", "sideA": "Identità nazionale", "sideB": "Identità globale", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Aumento delle tasse per finanziare i servizi pubblici vs tagli alla spesa — quale è la scelta politica più difendibile?", "sideA": "Aumento tasse", "sideB": "Tagli alla spesa", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ammettere di non avere idea di come funzioni la propria pensione vs fingere con sicurezza di saperlo — quale è l'esperienza adulta più universale?", "sideA": "Ammettere ignoranza", "sideB": "Fingere", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Essere la persona che pianifica sempre gli eventi sociali vs essere sempre quella che si limita a presentarsi — quale ruolo è più estenuante?", "sideA": "L'organizzatore", "sideB": "L'ospite", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Avere una forte opinione sulle abitudini culinarie dei colleghi vs non importarsene affatto — quale persona è più tollerabile?", "sideA": "Opinione forte", "sideB": "Indifferenza", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Partecipare a ogni evento sociale facoltativo di lavoro vs non partecipare mai a nessuno — quale strategia è migliore per la carriera e la salute mentale?", "sideA": "Tutti", "sideB": "Nessuno", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Adulti che sono ancora confusi dalla loro dichiarazione dei redditi vs adulti che si divertono a farla — quale gruppo è più affidabile?", "sideA": "Confusi", "sideB": "Divertiti", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Lamentarsi del costo della vita con gli amici vs fingere che tutto vada bene — quale è la risposta adulta più onesta?", "sideA": "Lamentarsi", "sideB": "Fingere tutto bene", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Gerarchie organizzative piatte vs strutture di gestione verticale — cosa serve meglio agli adulti che lavorano al loro interno?", "sideA": "Gerarchia piatta", "sideB": "Struttura verticale", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Il culto della produttività vs la difesa dell'ozio — cosa riflette meglio ciò di cui gli esseri umani hanno realmente bisogno dal lavoro?", "sideA": "Produttività", "sideB": "Ozio", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "La leadership come abilità apprendibile vs la leadership come qualità innata — quale resoconto è più difendibile empiricamente?", "sideA": "Abilità acquisita", "sideB": "Qualità innata", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Hustle culture vs slow living — chi sta vincendo e chi dovrebbe vincere?", "sideA": "Hustle culture", "sideB": "Slow living", "level": "advanced", "theme": "routine_A1", "ideasA": [], "ideasB": []},
            {"topic": "Responsabilità sociale d'impresa come impegno genuino vs come gestione della reputazione — quale inquadramento è più onesto?", "sideA": "Impegno genuino", "sideB": "Gestione reputazione", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'identità adulta come fissa vs perennemente in costruzione — quale resoconto riflette meglio l'esperienza vissuta?", "sideA": "Identità fissa", "sideB": "In costruzione", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'addomesticamento del femminismo da parte della cultura del consumo vs il femminismo che rimodella genuinamente la vita adulta — cosa è più vero?", "sideA": "Femm. di consumo", "sideB": "Rimodellamento reale", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Crisi di mezza età come patologia vs crisi di mezza età come legittima rivalutazione — quale inquadramento è più utile?", "sideA": "Patologia", "sideB": "Rivalutazione", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La pressione per essere straordinari vs la dignità di una vita ordinaria — quale è l'ideale più umano da sostenere?", "sideA": "Straordinario", "sideB": "Dignità ordinaria", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'obbligo di prendersi cura dei genitori anziani vs la responsabilità dello Stato — su chi dovrebbe ricadere l'onere?", "sideA": "Obbligo familiare", "sideB": "Resp. dello Stato", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Onestà radicale nelle relazioni vs silenzio strategico — quale è l'approccio più etico all'intimità?", "sideA": "Onestà radicale", "sideB": "Silenzio strategico", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Scegliere la propria cerchia sociale deliberatamente vs lasciare che le relazioni si formino organicamente — cosa produce amicizie adulte più autentiche?", "sideA": "Scelta deliberata", "sideB": "Formazione organica", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La famiglia nucleare come unità sociale ottimale vs come disposizione storicamente contingente — quale visione è più difendibile?", "sideA": "Unità ottimale", "sideB": "Arrang. storico", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Governance tecnocratica vs populismo democratico — cosa rappresenta il maggior rischio a lungo termine per i cittadini adulti?", "sideA": "Tecnocrazia", "sideB": "Populismo", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Giustizia intergenerazionale vs benessere attuale — cosa dovrebbe avere la priorità nelle politiche pubbliche?", "sideA": "Giustizia intergen.", "sideB": "Benessere attuale", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'obbligo di voto vs il diritto di astenersi — quale è la posizione civica più difendibile?", "sideA": "Obbligo di voto", "sideB": "Diritto astensione", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Il patriottismo come virtù civica vs il patriottismo come fallimento cognitivo — quale resoconto è più persuasivo?", "sideA": "Virtù civica", "sideB": "Fallimento cognitivo", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Assolutismo della libertà di parola vs parola regolamentata — cosa produce risultati migliori per le società democratiche adulte?", "sideA": "Assolutismo", "sideB": "Parola regolata", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Una carriera significativa vs un lavoro che finanzia una vita privata significativa — quale è la più onesta ambizione adulta?", "sideA": "Carriera signif.", "sideB": "Finanziare vita priv.", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Religione vs filosofia secolare — cosa affronta più efficacemente i bisogni esistenziali degli adulti moderni?", "sideA": "Religione", "sideB": "Filosofia secolare", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "La vita esaminata vs la vita assorbita — quale vale di più la pena di essere vissuta e chi può deciderlo?", "sideA": "Vita esaminata", "sideB": "Vita assorbita", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Eredità (legacy) vs presenza — per cosa è più coerente lottare per un adulto?", "sideA": "Eredità", "sideB": "Presenza", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'adulto che ha «finalmente capito» vs l'adulto che ha accettato che non capirà mai — chi è più consapevole di sé?", "sideA": "Ha capito", "sideB": "Accettata ignoranza", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere — quale relazione professionale è più efficace terapeuticamente?", "sideA": "Terapeuta", "sideB": "Parrucchiere", "level": "advanced", "theme": "psychological_concepts_C1", "ideasA": [], "ideasB": []},
            {"topic": "L'ansia della domenica di un adulto con un'agenda piena vs l'ansia della domenica di un adulto con un'agenda vuota — cosa è più esistenzialmente preoccupante?", "sideA": "Agenda piena", "sideB": "Agenda vuota", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Eccessiva riflessione su ogni decisione importante della vita vs prenderle impulsivamente — quale strategia ha il miglior curriculum empirico?", "sideA": "Riflessione", "sideB": "Impulsività", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Adulti che leggono libri di auto-aiuto vs adulti che si rifiutano di farlo — quale gruppo è più difficile da frequentare a una cena?", "sideA": "Lettori auto-aiuto", "sideB": "Si rifiutano", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},

            {"topic": "Uno stipendio alto vs un breve tragitto giornaliero — cosa conta di più in un lavoro?", "sideA": "Stipendio alto", "sideB": "Breve tragitto", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cambiare spesso lavoro vs restare nella stessa azienda — cosa è meglio per la tua carriera?", "sideA": "Cambiare lavoro", "sideB": "Restare", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare straordinari vs uscire in orario ogni giorno — qual è l'abitudine migliore?", "sideA": "Straordinari", "sideB": "In orario", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un capo severo vs un capo rilassato — con chi è meglio lavorare?", "sideA": "Capo severo", "sideB": "Capo rilassato", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare in una grande azienda vs una piccola azienda — cosa è meglio?", "sideA": "Grande azienda", "sideB": "Piccola azienda", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ottenere una promozione vs avere più tempo libero — cosa sceglieresti?", "sideA": "Promozione", "sideB": "Tempo libero", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Comprare casa vs affittare a vita — qual è la decisione finanziaria più intelligente?", "sideA": "Comprare", "sideB": "Affittare", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivere in centro città vs vivere in periferia — cosa è meglio?", "sideA": "Centro città", "sideB": "Periferia", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Spendere soldi per esperienze vs per oggetti — cosa ti rende più felice?", "sideA": "Esperienze", "sideB": "Oggetti", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cucinare ogni giorno vs preparare i pasti una volta a settimana — cosa è più pratico?", "sideA": "Cucinare ogni giorno", "sideB": "Meal prepping", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avere una persona per le pulizie vs fare le pulizie da soli — qual è la scelta migliore?", "sideA": "Pulizie pro", "sideB": "Da soli", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivere con un partner vs vivere da soli — cosa è meglio per gli adulti?", "sideA": "Con partner", "sideB": "Da soli", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avere figli presto vs avere figli più tardi nella vita — cosa è meglio?", "sideA": "Presto", "sideB": "Più tardi", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Legami familiari stretti vs indipendenza dalla famiglia — cosa è più importante da adulti?", "sideA": "Legami stretti", "sideB": "Indipendenza", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Incontrare nuove persone vs mantenere le vecchie amicizie — cosa ha più valore?", "sideA": "Nuove persone", "sideB": "Vecchi amici", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Socializzare dopo il lavoro vs tornare direttamente a casa — cosa è meglio per le relazioni lavorative?", "sideA": "Socializzare", "sideB": "Tornare a casa", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Andare in palestra vs fare esercizio all'aperto — cosa è meglio per gli adulti?", "sideA": "Palestra", "sideB": "All'aperto", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dieta ferrea vs mangiare tutto con moderazione — cosa è più sano?", "sideA": "Dieta ferrea", "sideB": "Moderazione", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vedere il medico subito vs aspettare per vedere se si migliora — cosa è più saggio?", "sideA": "Subito", "sideB": "Aspettare", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dormire otto ore vs dormire sei ore ma fare esercizio — cosa è meglio per l'energia?", "sideA": "8 ore", "sideB": "6 ore + sport", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ridurre lo stress attraverso lo sport vs attraverso il relax — cosa funziona meglio?", "sideA": "Sport", "sideB": "Relax", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Smartphone vs conversazione faccia a faccia — cosa usiamo di più, ed è un problema?", "sideA": "Smartphone", "sideB": "Faccia a faccia", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Banking online vs andare in banca — cosa è meglio?", "sideA": "Online", "sideB": "Andare in banca", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare con la carta vs lavorare digitalmente — cosa è più efficiente?", "sideA": "Carta", "sideB": "Digitale", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Social media per il networking vs incontrare persone di persona — cosa è più utile professionalmente?", "sideA": "Social media", "sideB": "Di persona", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Viaggio organizzato vs viaggio indipendente — cosa è meglio per gli adulti?", "sideA": "Organizzato", "sideB": "Indipendente", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Soggiorno in città vs vacanza al mare — qual è il modo migliore per rilassarsi?", "sideA": "Città", "sideB": "Mare", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Una vacanza lunga all'anno vs diversi brevi soggiorni — cosa è meglio?", "sideA": "Una lunga", "sideB": "Diverse brevi", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Viaggiare in coppia vs viaggiare da soli — cosa è più piacevole?", "sideA": "In coppia", "sideB": "Da soli", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Raccontare ogni piccolo problema al partner vs tenere le cose per sé — cosa è più sano?", "sideA": "Raccontare tutto", "sideB": "Tenere per sé", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Controllare il telefono appena svegli vs aspettare dopo colazione — quale è un'abitudine migliore?", "sideA": "Appena svegli", "sideB": "Dopo colazione", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Conoscere il nome dei vicini vs non conoscerli — qual è l'esperienza adulta più normale oggi?", "sideA": "Conoscerli", "sideB": "Non conoscerli", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Fare la spesa con una lista vs senza lista — quale tipo di persona vive meglio?", "sideA": "Con lista", "sideB": "Senza lista", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dire al capo che sei malato vs andare al lavoro malato — quale è la scelta più coraggiosa?", "sideA": "Dirlo", "sideB": "Andare malato", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavoro da remoto vs lavoro in ufficio — cosa è meglio per produttività e benessere?", "sideA": "Remoto", "sideB": "Ufficio", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Sicurezza del lavoro vs crescita professionale — cosa dovrebbero dare priorità gli adulti?", "sideA": "Sicurezza", "sideB": "Crescita", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Avviare un'attività in proprio vs lavorare per un datore di lavoro — qual è la scelta migliore a 30 anni?", "sideA": "Propria attività", "sideB": "Dipendente", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ambizione vs equilibrio vita-lavoro — si possono davvero avere entrambi?", "sideA": "Ambizione", "sideB": "Equilibrio", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Networking vs sviluppo delle competenze — cosa fa avanzare di più la tua carriera?", "sideA": "Networking", "sideB": "Competenze", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Feedback onesto da un manager vs essere lasciati a lavorare indipendentemente — cosa motiva di più gli adulti?", "sideA": "Feedback", "sideB": "Indipendenza", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Cambiare carriera a 40 anni vs restare nel proprio campo — qual è la decisione più saggia?", "sideA": "Cambiare", "sideB": "Restare", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Estinguere anticipatamente il mutuo vs investire quei soldi — cosa è più intelligente?", "sideA": "Estinguere mutuo", "sideB": "Investire", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Possedere una casa vs affittare permanentemente — cosa si adatta meglio alla vita adulta moderna?", "sideA": "Possedere", "sideB": "Affittare", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Risparmiare presto per la pensione vs godersi i soldi a trent'anni — cosa è più saggio?", "sideA": "Risparmiare presto", "sideB": "Godersi ora", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Vivere al di sotto delle proprie possibilità vs spendere per godersi la vita ora — quale approccio è più sano?", "sideA": "Sotto possibilità", "sideB": "Godersi ora", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Due redditi in una famiglia vs un partner che resta a casa — cosa funziona meglio per le famiglie?", "sideA": "Due redditi", "sideB": "Uno a casa", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Avere figli vs scegliere di non averne — cosa rende la vita adulta più appagante?", "sideA": "Avere figli", "sideB": "Niente figli", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Genitorialità severa vs genitorialità permissiva — cosa produce adulti più felici?", "sideA": "Severa", "sideB": "Permissiva", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Relazione a lungo termine vs restare single — cosa è meglio per la crescita personale?", "sideA": "Relazione", "sideB": "Single", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Mantenere vita lavorativa e privata separate vs integrarle — cosa è più sano?", "sideA": "Separate", "sideB": "Integrate", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Trasferirsi all'estero come coppia vs restare vicini alla famiglia — qual è la scelta giusta?", "sideA": "All'estero", "sideB": "Vicini alla famiglia", "level": "intermediate", "theme": "travel_cultural_B1", "ideasA": [], "ideasB": []},
            {"topic": "Dare priorità alla salute fisica vs salute mentale — su cosa dovrebbero concentrarsi prima gli adulti?", "sideA": "Fisica", "sideB": "Mentale", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Sanità privata vs affidarsi al sistema pubblico — qual è la migliore strategia per un adulto?", "sideA": "Privata", "sideB": "Pubblica", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Controlli medici regolari vs andarci solo quando si è malati — qual è l'approccio più intelligente?", "sideA": "Controlli regolari", "sideB": "Solo se malati", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ridurre l'alcol vs ridurre lo stress — cosa ha un impatto maggiore sulla salute degli adulti?", "sideA": "Meno alcol", "sideB": "Meno stress", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Libertà individuale vs responsabilità comunitaria — cosa dovrebbe guidare le decisioni degli adulti?", "sideA": "Libertà", "sideB": "Responsabilità", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ottimismo sul futuro vs realismo — qual è l'atteggiamento più utile per gli adulti?", "sideA": "Ottimismo", "sideB": "Realismo", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Cambiare il mondo vs costruirsi una vita personale stabile — quale è l'ambizione più onesta?", "sideA": "Cambiare il mondo", "sideB": "Vita stabile", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Dedicare il proprio tempo al volontariato vs donare denaro — cosa fa più bene?", "sideA": "Volontariato", "sideB": "Donare denaro", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Seguire i valori della propria generazione vs metterli in discussione — cosa è più ammirevole?", "sideA": "Seguire", "sideB": "Mettere in discussione", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Sapere quanto guadagnano i colleghi vs non saperlo — cosa è meglio per l'armonia in ufficio?", "sideA": "Saperlo", "sideB": "Non saperlo", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Rispondere ai messaggi immediatamente vs prendersi il proprio tempo — cosa è più rispettoso nella vita adulta?", "sideA": "Subito", "sideB": "Con calma", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ammettere di non avere idea di cosa sia un fondo pensione vs fingere di saperlo — quale è l'esperienza adulta più comune?", "sideA": "Ammettere", "sideB": "Fingere", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Annullare i piani all'ultimo minuto vs uscire quando non si ha voglia — quale è la peggiore abitudine adulta?", "sideA": "Annullare", "sideB": "Uscire comunque", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Parlare apertamente di soldi con gli amici vs mantenere la privacy — qual è l'approccio più maturo?", "sideA": "Parlarne apertamente", "sideB": "Mantenerlo privato", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},

            {"topic": "Caffè vs tè — qual è la migliore bevanda del mattino?", "sideA": "Caffè", "sideB": "Tè", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Ristorante vs cucina casalinga — cosa è meglio?", "sideA": "Ristorante", "sideB": "Cucina casalinga", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Colazione vs niente colazione — cosa è meglio per te?", "sideA": "Colazione", "sideB": "Niente", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Acqua vs succo — cosa è più salutare?", "sideA": "Acqua", "sideB": "Succo", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Carne vs verdure — cosa è più importante in un pasto?", "sideA": "Carne", "sideB": "Verdure", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Casa vs appartamento — dove è meglio vivere?", "sideA": "Casa", "sideB": "Appartamento", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Città vs villaggio — qual è il posto migliore dove vivere?", "sideA": "Città", "sideB": "Villaggio", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Contanti vs carta — con cosa è meglio pagare?", "sideA": "Contanti", "sideB": "Carta", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Risparmiare denaro vs spendere denaro — cosa è meglio?", "sideA": "Risparmiare", "sideB": "Spendere", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Affittare vs comprare — cosa è meglio?", "sideA": "Affittare", "sideB": "Comprare", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Lavoro al mattino vs lavoro alla sera — cosa è meglio?", "sideA": "Mattino", "sideB": "Sera", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Auto vs autobus — cosa è meglio per andare al lavoro?", "sideA": "Auto", "sideB": "Autobus", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Camminare vs guidare — cosa è meglio in città?", "sideA": "Camminare", "sideB": "Guidare", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ufficio vs casa — qual è il posto migliore per lavorare?", "sideA": "Ufficio", "sideB": "Casa", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Mattiniero vs nottambulo — cosa è meglio?", "sideA": "Mattiniero", "sideB": "Nottambulo", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Estate vs inverno — quale stagione è la migliore?", "sideA": "Estate", "sideB": "Inverno", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Vacanza breve vs vacanza lunga — cosa è meglio?", "sideA": "Breve", "sideB": "Lunga", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Telefonata vs messaggio — cosa è meglio?", "sideA": "Telefonata", "sideB": "Messaggio", "level": "starter", "theme": "technology_A1", "ideasA": [], "ideasB": []},
            {"topic": "Doccia al mattino vs doccia alla sera — qual è corretta?", "sideA": "Mattino", "sideB": "Sera", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Lunedì vs venerdì — quale giorno è il migliore?", "sideA": "Lunedì", "sideB": "Venerdì", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Troppo caldo vs troppo freddo — cosa è peggio?", "sideA": "Troppo caldo", "sideB": "Troppo freddo", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Posto finestrino vs posto corridoio — qual è meglio in aereo?", "sideA": "Finestrino", "sideB": "Corridoio", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare a tempo pieno vs lavorare a tempo parziale — cosa è meglio?", "sideA": "Tempo pieno", "sideB": "Tempo parziale", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare in ufficio vs lavorare da casa — cosa preferisci?", "sideA": "Ufficio", "sideB": "Casa", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un lavoro che ami vs un lavoro che paga bene — cosa è più importante?", "sideA": "Lavoro amato", "sideB": "Paga bene", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare con altre persone vs lavorare da soli — cosa è meglio?", "sideA": "Con altri", "sideB": "Da soli", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Un tragitto breve vs un tragitto lungo — cosa è più accettabile?", "sideA": "Breve", "sideB": "Lungo", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vivere da soli vs vivere con un partner — cosa è meglio?", "sideA": "Da soli", "sideB": "Partner", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Grande città vs piccola città — qual è il posto migliore dove vivere da adulti?", "sideA": "Grande città", "sideB": "Piccola città", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cucinare a casa vs mangiare fuori — cosa è meglio per la vita quotidiana?", "sideA": "A casa", "sideB": "Fuori", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avere figli vs non avere figli — quale vita è migliore?", "sideA": "Figli", "sideB": "Niente figli", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Affittare un appartamento vs comprare una casa — cosa è meglio per i giovani adulti?", "sideA": "Affittare", "sideB": "Comprare", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Esercizio ogni giorno vs riposo — cosa è meglio per la tua salute?", "sideA": "Esercizio", "sideB": "Riposo", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Andare dal medico vs aspettare — cosa è meglio quando ti senti male?", "sideA": "Medico", "sideB": "Aspettare", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Dormire otto ore vs dormire meno — cosa è più realistico per gli adulti?", "sideA": "8 ore", "sideB": "Meno", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Andare al lavoro a piedi vs prendere l'auto — cosa è meglio per la tua salute?", "sideA": "A piedi", "sideB": "Auto", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Acquisti online vs acquisti in un negozio — cosa preferisci?", "sideA": "Online", "sideB": "Negozio", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Risparmiare per il futuro vs godersi i soldi ora — cosa è più saggio?", "sideA": "Risparmiare", "sideB": "Godersi ora", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Cose costose vs cose economiche — cosa ha il miglior valore?", "sideA": "Costose", "sideB": "Economiche", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Comprare nuovo vs comprare di seconda mano — cosa è meglio?", "sideA": "Nuovo", "sideB": "Seconda mano", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Guardare la TV a casa vs uscire — qual è la serata migliore?", "sideA": "TV", "sideB": "Uscire", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vacanze in famiglia vs vacanze con amici — cosa è meglio?", "sideA": "Famiglia", "sideB": "Amici", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Rimanere nel proprio paese vs viaggiare all'estero — qual è la vacanza migliore?", "sideA": "Proprio paese", "sideB": "Estero", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Sport vs lettura — qual è il miglior hobby per gli adulti?", "sideA": "Sport", "sideB": "Lettura", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Vedere spesso gli amici vs avere tempo da soli — cosa è più importante?", "sideA": "Amici", "sideB": "Da soli", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Rispondere alle email immediatamente vs lasciarle per dopo — cosa è più professionale?", "sideA": "Immediatamente", "sideB": "Dopo", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Lavare i piatti immediatamente vs lasciarli fino a domani — cosa è meglio?", "sideA": "Immediatamente", "sideB": "Domani", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo — cosa è peggio al lavoro?", "sideA": "Anticipo", "sideB": "Ritardo", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Avere una scrivania molto organizzata vs una scrivania disordinata — quale persona è più produttiva?", "sideA": "Organizzata", "sideB": "Disordinata", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena — quale regola è migliore?", "sideA": "Parlare di lavoro", "sideB": "Niente lavoro", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},

            {
                "topic": "Linguaggio: Costitutivo vs Espressivo",
                "sideA": "Costitutivo",
                "sideB": "Espressivo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Modella la realtà",
                    "Limita il pensiero"
                ],
                "ideasB": [
                    "Riflette la realtà",
                    "Strumento per il pensiero"
                ]
            },
            {
                "topic": "Precisione vs Ambiguità",
                "sideA": "Precisione",
                "sideB": "Ambiguità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Chiarezza",
                    "Efficienza"
                ],
                "ideasB": [
                    "Sfumatura",
                    "Diplomazia"
                ]
            },
            {
                "topic": "Retorica vs Logica",
                "sideA": "Retorica",
                "sideB": "Logica",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Potere persuasivo",
                    "Appello emotivo"
                ],
                "ideasB": [
                    "Verità oggettiva",
                    "Validità strutturale"
                ]
            },
            {
                "topic": "Significato letterale vs Significato interpretativo",
                "sideA": "Letterale",
                "sideB": "Interpretativo",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Intenzione dell'autore",
                    "Stabilità"
                ],
                "ideasB": [
                    "Risposta del lettore",
                    "Contesto in evoluzione"
                ]
            },
            {
                "topic": "Consenso scientifico vs Umiltà epistemica",
                "sideA": "Consenso",
                "sideB": "Umiltà",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Conoscenza consolidata",
                    "Autorità esperta"
                ],
                "ideasB": [
                    "Apertura alla correzione",
                    "Riconoscimento dei limiti"
                ]
            },
            {
                "topic": "Competenza vs Esperienza vissuta",
                "sideA": "Competenza",
                "sideB": "Esperienza vissuta",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rigore scientifico",
                    "Dati oggettivi"
                ],
                "ideasB": [
                    "Verità autentica",
                    "Intuizione contestuale"
                ]
            },
            {
                "topic": "Il dubbio: Virtù vs Paralisi",
                "sideA": "Virtù",
                "sideB": "Paralisi",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pensiero critico",
                    "Scetticismo"
                ],
                "ideasB": [
                    "Indecisione",
                    "Mancanza di azione"
                ]
            },
            {
                "topic": "Narrativa vs Dati",
                "sideA": "Narrativa",
                "sideB": "Dati",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Impatto emotivo",
                    "Connessione umana"
                ],
                "ideasB": [
                    "Verità statistica",
                    "Scalabilità"
                ]
            },
            {
                "topic": "Legittimità: Consenso vs Risultato",
                "sideA": "Consenso",
                "sideB": "Risultato",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Processo democratico",
                    "Diritto morale"
                ],
                "ideasB": [
                    "Efficienza",
                    "Governance efficace"
                ]
            },
            {
                "topic": "Stato: Garante della libertà vs Minaccia",
                "sideA": "Garante",
                "sideB": "Minaccia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Stato di diritto",
                    "Protezione dei diritti"
                ],
                "ideasB": [
                    "Abuso di potere",
                    "Sorveglianza"
                ]
            },
            {
                "topic": "Politica dei diritti vs Politica delle responsabilità",
                "sideA": "Diritti",
                "sideB": "Responsabilità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Libertà individuale",
                    "Protezione legale"
                ],
                "ideasB": [
                    "Dovere collectif",
                    "Coesione sociale"
                ]
            },
            {
                "topic": "Neutralità vs Governance guidata dai valori",
                "sideA": "Neutralità",
                "sideB": "Guidata dai valori",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Imparzialità",
                    "Equità"
                ],
                "ideasB": [
                    "Direzione morale",
                    "Scopo sociale"
                ]
            },
            {
                "topic": "Intenzione vs Ricezione nell'arte",
                "sideA": "Intenzione",
                "sideB": "Ricezione",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Visione dell'autore",
                    "Contesto originale"
                ],
                "ideasB": [
                    "Significato per il pubblico",
                    "Impatto culturale"
                ]
            },
            {
                "topic": "Valore estetico vs Valore morale",
                "sideA": "Estetico",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'arte per l'arte",
                    "Pura bellezza"
                ],
                "ideasB": [
                    "Utilità sociale",
                    "Impatto etico"
                ]
            },
            {
                "topic": "L'avanguardia vs Accessibilità",
                "sideA": "Avanguardia",
                "sideB": "Accessibilità",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Spostare i confini",
                    "Sfida intellettuale"
                ],
                "ideasB": [
                    "Inclusività",
                    "Arte democratica"
                ]
            },
            {
                "topic": "Arte istituzionale vs Arte irregolare",
                "sideA": "Istituzionale",
                "sideB": "Irregolare",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Preservazione storica",
                    "Standard"
                ],
                "ideasB": [
                    "Autenticità grezza",
                    "Anti-sistema"
                ]
            },
            {
                "topic": "Principio di precauzione vs proazione",
                "sideA": "Precauzionale",
                "sideB": "Proattivo",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Evitare i rischi",
                    "Sicurezza prima di tutto"
                ],
                "ideasB": [
                    "Innovazione",
                    "Abbracciare il cambiamento"
                ]
            },
            {
                "topic": "Progresso scientifico: Intrinsecamente buono vs Neutro",
                "sideA": "Intrinsecamente buono",
                "sideB": "Eticamente neutro",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Valori dell'Illuminismo",
                    "Risoluzione dei problemi"
                ],
                "ideasB": [
                    "Preoccupazione per il doppio uso",
                    "Responsabilità umana"
                ]
            },
            {
                "topic": "Rischio esistenziale vs Sofferenza attuale",
                "sideA": "Rischio esistenziale",
                "sideB": "Sofferenza attuale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Sopravvivenza a lungo termine",
                    "Generazioni future"
                ],
                "ideasB": [
                    "Sollievo immediato",
                    "Povertà urgente"
                ]
            },
            {
                "topic": "Coscienza umana vs Intelligenza artificiale generale",
                "sideA": "Coscienza",
                "sideB": "IA Generale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Unicità biologica",
                    "Esperienza soggettiva"
                ],
                "ideasB": [
                    "Potenza di calcolo",
                    "Logica algoritmica"
                ]
            },
            {
                "topic": "Il progresso: Reale vs Illusione",
                "sideA": "Reale",
                "sideB": "Illusione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Progresso tecnologico",
                    "Migliore qualità della vita"
                ],
                "ideasB": [
                    "Storia ciclica",
                    "Nuovi problemi"
                ]
            },
            {
                "topic": "Ordine liberale vs Mondo multipolare",
                "sideA": "Ordine liberale",
                "sideB": "Multipolarità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Valori universali",
                    "Stabilità globale"
                ],
                "ideasB": [
                    "Potere diversificato",
                    "Sovranità culturale"
                ]
            },
            {
                "topic": "Memoria vs Oblio",
                "sideA": "Memoria",
                "sideB": "Oblio",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Imparare dalla storia",
                    "Identità"
                ],
                "ideasB": [
                    "Andare avanti",
                    "Superare i traumi"
                ]
            },
            {
                "topic": "Tragedia dei beni comuni vs Cooperazione",
                "sideA": "Tragedia",
                "sideB": "Cooperazione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Interesse personale",
                    "Esaurimento delle risorse"
                ],
                "ideasB": [
                    "Vantaggio reciproco",
                    "Gestione collettiva"
                ]
            },
            {
                "topic": "Rosso vs Blu — quale colore è migliore?",
                "sideA": "Rosso",
                "sideB": "Blu",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giallo vs Verde — quale colore è più allegro?",
                "sideA": "Giallo",
                "sideB": "Verde",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nero vs Bianco — quale colore preferisci?",
                "sideA": "Nero",
                "sideB": "Bianco",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Viola — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Viola",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cerchio vs Quadrato — quale forma è più utile?",
                "sideA": "Cerchio",
                "sideB": "Quadrato",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numeri grandi vs piccoli — quali sono più divertenti?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangolo vs Rettangolo — quale forma è migliore?",
                "sideA": "Triangolo",
                "sideB": "Rettangolo",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Palla vs Bambola — quale giocattolo è migliore?",
                "sideA": "Palla",
                "sideB": "Bambola",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matita vs Penna — con cosa è meglio scrivere?",
                "sideA": "Matita",
                "sideB": "Penna",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Libro vs Immagine — da cosa è meglio imparare?",
                "sideA": "Libro",
                "sideB": "Immagine",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs Pavimento — su cosa è meglio sedersi?",
                "sideA": "Sedia",
                "sideB": "Pavimento",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatto vs Cane — quale animale è migliore?",
                "sideA": "Gatto",
                "sideB": "Cane",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pesce vs Uccello — quale è un animale domestico migliore?",
                "sideA": "Pesce",
                "sideB": "Uccello",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali grandi vs piccoli — quali sono più carini?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Coniglio vs Criceto — quale è più carino?",
                "sideA": "Coniglio",
                "sideB": "Criceto",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acqua vs Succo — cosa è meglio bere?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mela vs Banana — quale frutto è migliore?",
                "sideA": "Mela",
                "sideB": "Banana",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pane vs Riso — cosa è meglio mangiare?",
                "sideA": "Pane",
                "sideB": "Riso",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Latte vs Acqua — quale preferisci?",
                "sideA": "Latte",
                "sideB": "Acqua",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in famiglia vs Da soli — cosa è meglio?",
                "sideA": "In famiglia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere un fratello vs una sorella — cosa è meglio?",
                "sideA": "Fratello",
                "sideB": "Sorella",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Famiglia grande vs piccola — quale è più bella?",
                "sideA": "Grande",
                "sideB": "Piccola",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il più grande vs Il più piccolo — cosa è meglio?",
                "sideA": "Grande",
                "sideB": "Piccolo",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola di mattina vs pomeriggio — cosa è meglio?",
                "sideA": "Mattina",
                "sideB": "Pomeriggio",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lettura vs Matematica — quale è più divertente?",
                "sideA": "Lettura",
                "sideB": "Matematica",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola vs Casa — cosa è meglio?",
                "sideA": "Scuola",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Compiti vs Niente compiti — cosa aiuta di più?",
                "sideA": "Compiti",
                "sideB": "Niente",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Da soli vs In coppia — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Coppia",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Carta vs Computer — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Colazione vs Cena — quale pasto è più importante?",
                "sideA": "Colazione",
                "sideB": "Cena",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo caldo vs freddo — cosa è meglio?",
                "sideA": "Caldo",
                "sideB": "Freddo",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Ristorante — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Ristorante",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dolce vs Salato — cosa preferisci?",
                "sideA": "Dolce",
                "sideB": "Salato",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs Comprare — cosa è più bello?",
                "sideA": "Cucinare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi presto vs tardi — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mattina vs Sera — quale parte del giorno è più bella?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni feriali vs Fine settimana — cosa preferisci?",
                "sideA": "Feriali",
                "sideB": "Fine settimana",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Estate vs Inverno — quale stagione è migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare a letto presto vs tardi — cosa è più salutare?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Appartamento — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Città vs Campagna — quale è un posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camera vs Soggiorno — quale stanza preferisci?",
                "sideA": "Camera",
                "sideB": "Soggiorno",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giochi al chiuso vs all'aperto — quali sono più divertenti?",
                "sideA": "Chiuso",
                "sideB": "Aperto",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Libro — cosa è meglio?",
                "sideA": "TV",
                "sideB": "Libro",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Videogioco — quale è più divertente?",
                "sideA": "Sport",
                "sideB": "Videogioco",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Disegno vs Canto — quale hobby è migliore?",
                "sideA": "Disegno",
                "sideB": "Canto",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giocare da soli vs con amici — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nuoto vs Corsa — quale sport preferisci?",
                "sideA": "Nuoto",
                "sideB": "Corsa",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica vs Sport — quale è un hobby migliore?",
                "sideA": "Musica",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali da fattoria vs selvatici — quali sono più interessanti?",
                "sideA": "Fattoria",
                "sideB": "Selvatici",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pioggia vs Sole — quale tempo preferisci?",
                "sideA": "Pioggia",
                "sideB": "Sole",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mare vs Montagna — quale è meglio per una vacanza?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fiori vs Alberi — quali sono più belli?",
                "sideA": "Fiori",
                "sideB": "Alberi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Auto vs Autobus — cosa è meglio?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camminare vs Bici — con cosa è meglio spostarsi?",
                "sideA": "Camminare",
                "sideB": "Bici",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze brevi vs lunghe — cosa è meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare soli vs in famiglia — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Famiglia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acquisti online vs Acquisti di persona",
                "sideA": "Online",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Comodità",
                    "Prezzi migliori"
                ],
                "ideasB": [
                    "Provare gli articoli",
                    "Gratificazione istantanea"
                ]
            },
            {
                "topic": "Libri cartacei vs E-book",
                "sideA": "Carta",
                "sideB": "E-book",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Odore/Sensazione",
                    "Collezionabile"
                ],
                "ideasB": [
                    "Portability",
                    "Risparmio di spazio"
                ]
            },
            {
                "topic": "Lavoro da casa vs Lavoro in ufficio",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Nessun tragitto",
                    "Flessibilità"
                ],
                "ideasB": [
                    "Socializzazione",
                    "Migliore concentrazione"
                ]
            },
            {
                "topic": "Auto elettriche vs Auto a benzina",
                "sideA": "Elettriche",
                "sideB": "Benzina",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Ambiente",
                    "Silenzioso"
                ],
                "ideasB": [
                    "Autonomia",
                    "Velocità di ricarica"
                ]
            },
            {
                "topic": "Studiare la mattina o studiare la sera — quando è meglio?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Insegnanti severi o insegnanti amichevoli — chi aiuta di più gli studenti?",
                "sideA": "Severi",
                "sideB": "Amichevoli",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare con un libro di testo o imparare con i video — cosa è più efficace?",
                "sideA": "Libro",
                "sideB": "Video",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lezioni brevi o lezioni lunghe — quali aiutano a imparare meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Progetti di gruppo o compiti individuali — cosa preferisci?",
                "sideA": "Gruppo",
                "sideB": "Individuale",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolastica o vestiti casual a scuola — cosa è meglio?",
                "sideA": "Uniforme",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pasti cucinati in casa o fast food — cosa è meglio?",
                "sideA": "In casa",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tre pasti abbondanti o molti piccoli spuntini — cosa è più sano?",
                "sideA": "Grandi pasti",
                "sideB": "Spuntini",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo vegetariano o carne — quale dieta è migliore?",
                "sideA": "Vegetariano",
                "sideB": "Carne",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bere tè o bere caffè — cosa è meglio?",
                "sideA": "Tè",
                "sideB": "Caffè",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare da soli o mangiare con altri — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Con altri",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Praticare uno sport di squadra o uno sport individuale — cosa è meglio?",
                "sideA": "Sport di squadra",
                "sideB": "Sport individuale",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo libero al chiuso o all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o teatro — quale è la migliore serata fuori?",
                "sideA": "Cinema",
                "sideB": "Teatro",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ascoltare musica o suonare uno strumento — cosa è più piacevole?",
                "sideA": "Ascoltare",
                "sideB": "Suonare",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Videogiochi o giochi da tavolo — quali sono più divertenti?",
                "sideA": "Videogiochi",
                "sideB": "Giochi da tavolo",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare shopping o restare a casa — quale è il modo migliore per trascorrere il fine settimana?",
                "sideA": "Shopping",
                "sideB": "Restare a casa",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cellulare o computer — quale è più utile nella vita quotidiana?",
                "sideA": "Cellulare",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Inviare un messaggio o fare una telefonata — cosa è meglio?",
                "sideA": "Messaggio",
                "sideB": "Chiamata",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book o libro cartaceo — cosa preferisci leggere?",
                "sideA": "E-book",
                "sideB": "Libro cartaceo",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scattare foto con il telefono o con una fotocamera — cosa dà risultati migliori?",
                "sideA": "Telefono",
                "sideB": "Fotocamera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze al mare o vacanze in montagna — cosa è meglio?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare in treno o viaggiare in aereo — cosa è meglio?",
                "sideA": "Treno",
                "sideB": "Aereo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visitare una città famosa o visitare un piccolo villaggio — cosa è più interessante?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soggiornare in un hotel o presso una famiglia locale — cosa preferisci?",
                "sideA": "Hotel",
                "sideB": "Famiglia locale",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare all'estero o esplorare il proprio paese — cosa vale di più la pena?",
                "sideA": "Estero",
                "sideB": "Proprio paese",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere molti amici o avere pochi amici stretti — cosa è meglio?",
                "sideA": "Molti amici",
                "sideB": "Amici stretti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Incontrare gli amici di persona o chattare online — cosa è più soddisfacente?",
                "sideA": "Di persona",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i genitori o in un appartamento per studenti — cosa è meglio per i giovani?",
                "sideA": "Genitori",
                "sideB": "Appartamento studenti",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Festeggiare il compleanno a casa o uscire — cosa è più carino?",
                "sideA": "Casa",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare denaro o spendere denaro — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare part-time mentre si studia o concentrarsi solo sulla scuola — cosa è meglio?",
                "sideA": "Part-time",
                "sideB": "Solo scuola",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Guadagnare molti soldi o avere tempo libero — cosa conta di più?",
                "sideA": "Soldi",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendimento online o apprendimento in aula — cosa è più efficace?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorizzare fatti o imparare come trovare informazioni — quale abilità è più importante?",
                "sideA": "Fatti",
                "sideB": "Trovare info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Istruzione universitaria o formazione professionale — quale è il percorso migliore?",
                "sideA": "Università",
                "sideB": "Professionale",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esami o valutazione continua — quale è il modo più giusto per valutare gli studenti?",
                "sideA": "Esami",
                "sideB": "Continua",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare una lingua straniera a scuola o vivere all'estero — cosa è più efficace?",
                "sideA": "Scuola",
                "sideB": "Vivere all'estero",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuole maschili o femminili o scuole miste — quali sono migliori per gli studenti?",
                "sideA": "Solo maschi/femmine",
                "sideB": "Mista",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media o comunicazione faccia a faccia — cosa è meglio per restare in contatto?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Servizi di streaming o TV tradizionale — cosa è meglio?",
                "sideA": "Streaming",
                "sideB": "TV classica",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare da casa o lavorare in ufficio — cosa è più produttivo?",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leggere le notizie online o leggere un giornale — cosa è più affidabile?",
                "sideA": "Notizie online",
                "sideB": "Giornale",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo sui social media o passare il tempo nella natura — cosa è meglio per la tua salute mentale?",
                "sideA": "Social media",
                "sideB": "Natura",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Usare i trasporti pubblici o guidare l'auto — cosa è meglio per la società?",
                "sideA": "Trasporti pubblici",
                "sideB": "Auto",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Comprare vestiti usati o comprare vestiti nuovi — quale è l'abitudine migliore?",
                "sideA": "Usato",
                "sideB": "Nuovo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in città o vivere in campagna — cosa si adatta meglio ai giovani?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianismo o mangiare carne — cosa è meglio per il pianeta?",
                "sideA": "Vegetarianismo",
                "sideB": "Carne",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiamenti nello stile di vita individuale o azione del governo — cosa fa di più per l'ambiente?",
                "sideA": "Individuale",
                "sideB": "Governo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un lavoro stabile o una carriera creativa — quale è la scelta di vita migliore?",
                "sideA": "Lavoro stabile",
                "sideB": "Carriera creativa",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aprire la propria attività o lavorare per un'azienda — cosa è meglio?",
                "sideA": "Propria attività",
                "sideB": "Azienda",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salario alto o soddisfazione sul lavoro — cosa conta di più al lavoro?",
                "sideA": "Salario",
                "sideB": "Soddisfazione",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare molte ore o avere un equilibrio vita-lavoro — cosa porta a un maggiore successo?",
                "sideA": "Molte ore",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere una carriera in base alla passione o in base alle prospettive di lavoro — cosa è più saggio?",
                "sideA": "Passione",
                "sideB": "Prospettive",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere come individuo o mettere al primo posto la comunità — cosa è più importante?",
                "sideA": "Individuo",
                "sideB": "Comunità",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valori tradizionali o valori moderni — quali sono più importanti da conservare?",
                "sideA": "Tradizionali",
                "sideB": "Moderni",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare volontariato o donare soldi in beneficenza — cosa aiuta di più?",
                "sideA": "Volontariato",
                "sideB": "Donare",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fama o fare la differenza in silenzio — quale è l'obiettivo migliore nella vita?",
                "sideA": "Fama",
                "sideB": "Differenza silenziosa",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seguire le regole o pensare con la propria testa — cosa conta di più?",
                "sideA": "Regole",
                "sideB": "Pensiero proprio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salute fisica o salute mentale — quale dovrebbe essere la priorità?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevenzione o cura — quale è l'approccio migliore alla sanità?",
                "sideA": "Prevenzione",
                "sideB": "Cura",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport competitivo o esercizio fisico per divertimento — cosa è meglio per te?",
                "sideA": "Competitivo",
                "sideB": "Divertimento",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sanità privata o sanità pubblica — quale sistema è più equo?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o letteratura — quale è una forma d'arte più potente?",
                "sideA": "Cinema",
                "sideB": "Letteratura",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Arte moderna o arte classica — cosa è più prezioso?",
                "sideA": "Moderna",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preservare i vecchi edifici o costruirne di nuovi — cosa conta di più?",
                "sideA": "Preservare",
                "sideB": "Costruire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cultura locale o globalizzazione — cosa arricchisce di più le comunità?",
                "sideA": "Locale",
                "sideB": "Globalizzazione",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs interazioni faccia a faccia — cosa è meglio per costruire relazioni?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vita urbana vs vita rurale — quale offre una migliore qualità della vita?",
                "sideA": "Urbana",
                "sideB": "Rurale",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendimento online vs aula tradizionale — quale è il futuro dell'istruzione?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Energia rinnovabile vs energia nucleare — quale è la soluzione migliore per il clima?",
                "sideA": "Rinnovabile",
                "sideB": "Nucleare",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fast fashion vs abbigliamento sostenibile — possiamo permetterci di essere etici?",
                "sideA": "Fast fashion",
                "sideB": "Sostenibile",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Creatività dell'IA vs arte umana — le macchine possono davvero creare arte?",
                "sideA": "Creatività IA",
                "sideB": "Arte umana",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esplorazione spaziale vs esplorazione degli abissi — dove dovremmo concentrare le nostre risorse?",
                "sideA": "Spazio",
                "sideB": "Abissi",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Privacy digitale vs sicurezza nazionale — la sorveglianza totale è mai giustificata?",
                "sideA": "Privacy",
                "sideB": "Sicurezza",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alimenti geneticamente modificati vs agricoltura biologica — come dovremmo nutrire il mondo?",
                "sideA": "OGM",
                "sideB": "Biologico",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reddito di base universale vs programmi di garanzia del lavoro — qual è la migliore rete di sicurezza sociale?",
                "sideA": "Reddito universale",
                "sideB": "Garanzia lavoro",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Arancione — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Arancione",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numero 1 vs numero 10 — quale numero è migliore?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs divano — quale è più comodo?",
                "sideA": "Sedia",
                "sideB": "Divano",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Borsa vs scatola — quale è più utile?",
                "sideA": "Borsa",
                "sideB": "Scatola",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leone vs elefante — quale animale è migliore?",
                "sideA": "Leone",
                "sideB": "Elefante",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cioccolato vs caramelle — quale è meglio?",
                "sideA": "Cioccolato",
                "sideB": "Caramelle",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucchiaio vs forchetta — quale è meglio?",
                "sideA": "Cucchiaio",
                "sideB": "Forchetta",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cappello vs scarpe — quale è più importante?",
                "sideA": "Cappello",
                "sideB": "Scarpe",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sole vs luna — quale è meglio?",
                "sideA": "Sole",
                "sideB": "Luna",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Calze vs senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i nonni vs non vivere con loro — cosa è più piacevole?",
                "sideA": "Con i nonni",
                "sideB": "Senza i nonni",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucina della mamma vs cucina del papà — quale è migliore?",
                "sideA": "Mamma",
                "sideB": "Papà",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matematica vs arte — quale materia è più divertente?",
                "sideA": "Matematica",
                "sideB": "Arte",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scrivere su carta vs scrivere su un tablet — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — cosa è più buono?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gelato vs torta — quale è il dessert migliore?",
                "sideA": "Gelato",
                "sideB": "Torta",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni brevi vs giorni lunghi — cosa è meglio?",
                "sideA": "Giorni brevi",
                "sideB": "Giorni lunghi",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorno al parco vs giorno in spiaggia — cosa è meglio?",
                "sideA": "Parco",
                "sideB": "Spiaggia",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aereo vs treno — cosa è più divertente?",
                "sideA": "Aereo",
                "sideB": "Treno",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe — quale animale è più fastidioso?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare la pizza con la forchetta vs con le mani — cosa è corretto?",
                "sideA": "Forchetta",
                "sideB": "Mani",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire con le calze vs senza calze — cosa è meglio?",
                "sideA": "Con le calze",
                "sideB": "Senza",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Castello di sabbia vs pupazzo di neve — cosa è più divertente da costruire?",
                "sideA": "Castello di sabbia",
                "sideB": "Pupazzo di neve",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Molti esami vs pochissimi esami — cosa è più giusto?",
                "sideA": "Molti esami",
                "sideB": "Pochissimi esami",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Iniziare la scuola a 7 anni vs iniziare a 5 anni — cosa è meglio per i bambini?",
                "sideA": "A 7 anni",
                "sideB": "A 5 anni",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare lentamente vs mangiare velocemente — cosa è meglio per te?",
                "sideA": "Lentamente",
                "sideB": "Velocemente",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare a casa vs ordinare online — cosa è meglio?",
                "sideA": "Cucinare a casa",
                "sideB": "Ordinare online",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs fare dolci — cosa è più divertente come hobby?",
                "sideA": "Cucinare",
                "sideB": "Pasticceria",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare in palestra vs allenarsi all'aperto — cosa è meglio?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Foto sul telefono vs foto stampate — cosa è meglio?",
                "sideA": "Sul telefono",
                "sideB": "Stampate",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs schermo del computer — cosa è meglio per guardare film?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paese caldo vs paese freddo — quale è la migliore destinazione per le vacanze?",
                "sideA": "Paese caldo",
                "sideB": "Paese freddo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare regali vs ricevere regali — cosa preferisci?",
                "sideA": "Fare regali",
                "sideB": "Ricevere regali",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare al chiuso vs lavorare all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sulla pizza vs niente ananas — cosa è corretto?",
                "sideA": "Ananas",
                "sideB": "Niente ananas",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettere prima il latte vs mettere prima il tè — cosa è meglio?",
                "sideA": "Prima il latte",
                "sideB": "Prima il tè",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lunedì vs Venerdì — quale giorno è effettivamente peggiore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi cinque minuti prima della sveglia vs dormire fino alla sveglia — cosa è più fastidioso?",
                "sideA": "Prima della sveglia",
                "sideB": "Fino alla sveglia",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti vs cani — quale animale è segretamente il capo della casa?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere troppo caldo vs avere troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare dai propri errori vs imparare dai propri successi — cosa insegna di più?",
                "sideA": "Errori",
                "sideB": "Successi",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablet in classe vs quaderni tradizionali — cosa aiuta di più gli studenti?",
                "sideA": "Tablet",
                "sideB": "Quaderni",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Essere sempre rintracciabili vs avere tempo libero digitale — cosa è meglio?",
                "sideA": "Sempre rintracciabili",
                "sideB": "Tempo libero",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Riutilizzare le cose vs riciclare — cosa è più efficace?",
                "sideA": "Riutilizzare",
                "sideB": "Riciclare",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una sola carriera per tutta la vita vs cambiare spesso carriera — cosa è meglio?",
                "sideA": "Una carriera",
                "sideB": "Cambiare spesso",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire vs fare esercizio — cosa ha un impatto maggiore sulla tua salute?",
                "sideA": "Dormire",
                "sideB": "Esercizio",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica pop vs musica classica — quale ha un impatto culturale maggiore?",
                "sideA": "Pop",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sapere come finisce qualcosa vs essere sorpresi — cosa è meglio?",
                "sideA": "Sapere",
                "sideB": "Sorpresi",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rispondere immediatamente ai messaggi vs prendersi il proprio tempo — cosa è più rispettoso?",
                "sideA": "Immediatamente",
                "sideB": "Prendersi tempo",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching vs guardare un episodio a settimana — quale è il modo giusto?",
                "sideA": "Binge-watching",
                "sideB": "Settimanale",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Posto finestrino vs posto corridoio — quale è oggettivamente migliore?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saltare la palestra una volta vs andare e fare una brutta sessione — cosa è peggio?",
                "sideA": "Saltare",
                "sideB": "Brutta sessione",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parlare con se stessi vs parlare con il proprio animale — cosa è più ragionevole?",
                "sideA": "Con se stessi",
                "sideB": "Con l'animale",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Il mio ricordo d'infanzia preferito",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "L'ultima vacanza che ho fatto",
                "level": "elementary",
                "theme": "transport_travel_A2"
            },
            {
                "topic": "Una persona che mi ha ispirato",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Il futuro del mondo tra 50 anni",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Il ruolo dell'arte nella società moderna",
                "level": "advanced",
                "theme": "leisure_hobbies_A2"
            },
            {
                "topic": "La complexité della coscienza umana",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "topic": "L'importance della consapevolezza sulla salute mentale",
                "level": "intermediate",
                "theme": "mental_health_B1"
            },
            {
                "topic": "Il lavoro dei miei sogni e perché",
                "level": "starter",
                "theme": "work_A1"
            },
            {
                "topic": "L'impatto del cambiamento climatico sulle comunità locali",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            },
            {
                "topic": "Intelligenza Artificiale: Strumento o minaccia ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }
        ]
    },
    "ru": {
        "opinionArena": [
            {
                "text": "Является ли завтрак самым важным приемом пищи?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Собаки лучше кошек в качестве питомцев?",
                "level": "starter",
                "theme": "leisure_A1"
            },
            {
                "text": "Должны ли у детей быть мобильные телефоны?",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Где лучше жить: в доме или в квартире?",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            },
            {
                "text": "Можем ли мы прожить без интернета неделю?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Нужно ли каждому учить второй язык?",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Разрушают ли социальные сети наши навыки общения?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Должен ли общественный транспорт быть бесплатным?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            },
            {
                "text": "Генная инженерия: прогресс или опасность?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Является ли безусловный базовый доход решением проблемы автоматизации?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            },
            {
                "text": "Существует ли свобода воли на самом деле или это иллюзия?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "Этика колонизации других планет.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Я мыслю, следовательно, я существую.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            },
            {
                "text": "Единственная константа — это перемены.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [{"topic":"Протестантская трудовая этика как цивилизационное достижение против неё же как первоисточника страданий взрослого человека — какое наследие доминирует сегодня?","sideA":"Цивилизационное достижение","sideB":"Источник страданий","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Коммодификация страсти против освобождения через превращение труда в поиск смысла — является ли призыв «делай то, что любишь» мудрым советом или ловушкой?","sideA":"Совет","sideB":"Ловушка","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Карьера как идентичность против карьеры как средства — какие отношения со своей работой более последовательны для современного взрослого человека?","sideA":"Идентичность","sideB":"Средство","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Добродетельный трудоголик против стратегического бездельника — кто из них более незаслуженно превозносится в западной культуре?","sideA":"Трудоголик","sideB":"Бездельник","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Взрослые амбиции как нечто достойное восхищения против амбиций как неспособности принять собственную конечность — какая интерпретация психологически честнее?","sideA":"Достойно восхищения","sideB":"Неспособность принять конечность","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Романтическая любовь как организующий принцип взрослой жизни против неё же как исторически обусловленного и коммерчески поддерживаемого мифа — что более обоснованно?","sideA":"Организующий принцип","sideB":"Коммерческий миф","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Радикальная прозрачность в отношениях против необходимости частного «я» — могут ли сосуществовать близость и индивидуация?","sideA":"Прозрачность","sideB":"Частное я","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Этика заботы как феминистская корректива против неё же как переназначения того же бремени — оправдала ли эта концепция ожидания?","sideA":"Феминистская корректива","sideB":"Переназначение бремени","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Сознательная бездетность как сопротивление пронаталистской идеологии против неё же как сугубо личного решения без политического подтекста — можно ли провести здесь четкую границу?","sideA":"Сопротивление","sideB":"Личное решение","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Осознание смертности как предварительное условие осмысленной жизни против неё же как главного препятствия — какая позиция более жизнеспособна?","sideA":"Условие","sideB":"Препятствие","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Старение как упадок против старения как накопление — какой нарратив честнее и какой полезнее?","sideA":"Упадок","sideB":"Накопление","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Медикализация старения как прогресс против неё же как отказа принимать человеческую природу — где должна проходить черта?","sideA":"Прогресс","sideB":"Отказ","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},
            {"topic":"Память как субстанция взрослой идентичности против памяти как крайне ненадежного рассказчика — каковы последствия этого для конструирования личности?","sideA":"Субстанция","sideB":"Ненадежный рассказчик","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Соучастие взрослого гражданина в несправедливых системах через повседневное потребление против структурной незначимости личной моральной чистоты — какая формулировка честнее?","sideA":"Соучастие","sideB":"Структурная незначимость","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Политическое разочарование как рациональная реакция на имеющиеся доказательства против него же как формы привилегии — какая трактовка более эмпирически обоснованна?","sideA":"Рациональная реакция","sideB":"Привилегия","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Справедливость в отношениях между поколениями как центральный моральный вызов нашего времени против неё же как концепции, систематически скрывающей классовое и расовое неравенство в настоящем — какая критика весомее?","sideA":"Моральный вызов","sideB":"Скрытие неравенства","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Либеральная демократия как «наименее плохая» система против неё же как системы, структурно исчерпавшей свой реформаторский потенциал — какой вердикт подтверждают факты?","sideA":"Наименее плохая система","sideB":"Исчерпан потенциал","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Способность к самообману как когнитивный дефект против неё же как адаптивного механизма — какая версия лучше служит взрослому человеку, стремящемуся жить полноценно?","sideA":"Когнитивный дефект","sideB":"Адаптивный механизм","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Экспертность как эпистемический авторитет против экспертности как формы институциональной власти, заслуживающей критики — когда здоровый скептицизм превращается в эпистемическую трусость?","sideA":"Эпистемический авторитет","sideB":"Институциональная власть","level":"proficiency","theme": "epistemology_truth_C2","ideasA":[],"ideasB":[]},
            {"topic":"Нарратив как основной способ осмысления жизни взрослыми против нарратива как основного способа введения себя в заблуждение — какая функция преобладает?","sideA":"Осмысление","sideB":"Заблуждение","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Честность как безусловная добродетель против честности как добродетели контекстуальной — существует ли последовательное описание правдивости, выдерживающее столкновение с реальными отношениями?","sideA":"Безусловная добродетель","sideB":"Контекстуальная добродетель","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Взрослый, который «наконец-то всё понял», против взрослого, смирившегося с тем, что этого никогда не произойдет — кто из них находится в более зрелых отношениях с реальностью?","sideA":"Всё понял","sideB":"Смирился с неизвестностью","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Рассказать всё психотерапевту против того, чтобы рассказать всё парикмахеру — какие профессиональные отношения эмпирически более трансформирующи, и почему ответ вызывает у нас дискомфорт?","sideA":"Психотерапевт","sideB":"Парикмахер","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},

            {"topic": "Четырехдневная рабочая неделя против пятидневной — какая модель больше выгодна работникам и работодателям?", "sideA": "4 дня", "sideB": "5 дней", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Безусловный базовый доход против адресной социальной помощи — что является более эффективной защитой для работающих взрослых?", "sideA": "ББД", "sideB": "Адресная помощь", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Гиг-экономика против постоянной занятости — какая модель лучше служит работникам в долгосрочной перспективе?", "sideA": "Гиг-экономика", "sideB": "Постоянная занятость", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Меритократия против структурных преимуществ — что точнее объясняет карьерный успех?", "sideA": "Меритократия", "sideB": "Структурные преимущества", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Прозрачность зарплат против конфиденциальности — что создает более справедливую рабочую среду?", "sideA": "Прозрачность", "sideB": "Конфиденциальность", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Автоматизация против человеческого труда — что является большей долгосрочной угрозой для занятости взрослых?", "sideA": "Автоматизация", "sideB": "Человеческий труд", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Удаленная работа против присутствия в офисе — что лучше для карьерного роста и командной культуры?", "sideA": "Удаленка", "sideB": "Офис", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Равный отпуск по уходу за ребенком для мужчин и женщин против более длинного декретного отпуска — какая политика справедливее?", "sideA": "Равный отпуск", "sideB": "Длинный декрет", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Выбор не иметь детей против социального давления завести семью — что заслуживает большего уважения?", "sideA": "Бездетность", "sideB": "Давление общества", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Брак как институт против сожительства без брака — что более актуально сегодня?", "sideA": "Брак", "sideB": "Сожительство", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Семьи с двумя доходами против ситуации, когда один партнер остается дома — какая модель лучше для детей и взрослых?", "sideA": "Два дохода", "sideB": "Один дома", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Гендерный разрыв в оплате труда как структурная проблема против вопроса индивидуального выбора — какое объяснение весомее?", "sideA": "Структурная проблема", "sideB": "Личный выбор", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Владение жильем как цель против профессионального рынка аренды — какая модель жилья лучше подходит современным взрослым?", "sideA": "Владение", "sideB": "Аренда", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Джентрификация как улучшение против джентрификации как вытеснение — какая формулировка честнее?", "sideA": "Улучшение", "sideB": "Вытеснение", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Городская плотность против разрастания пригородов — какая модель лучше для комфортных городов?", "sideA": "Плотность", "sideB": "Разрастание", "level": "upper-intermediate", "theme": "globalisation_trade_B2", "ideasA": [], "ideasB": []},
            {"topic": "Жизнь рядом с семьей против переезда ради возможностей — какой выбор дает лучшее самочувствие в долгосрочной перспективе?", "sideA": "Рядом с семьей", "sideB": "Переезд", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Старение населения как кризис против старения как ресурса — какая формулировка продуктивнее?", "sideA": "Кризис", "sideB": "Ресурс", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Личная ответственность за здоровье против системных факторов — что имеет больший вес в объяснении результатов для здоровья?", "sideA": "Личная отв-ть", "sideB": "Системные факторы", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Дни психологической разгрузки как законное право на рабочем месте против источника злоупотреблений — где работодатели должны провести черту?", "sideA": "Законное право", "sideB": "Злоупотребление", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Профилактическая медицина против лечебной медицины — на что должно выделяться больше государственного финансирования?", "sideA": "Профилактика", "sideB": "Лечение", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Антивозрастная медицина против грациозного старения — какая позиция более последовательна?", "sideA": "Антивозрастная", "sideB": "Грациозное старение", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Технологии наблюдения для общественной безопасности против права на частную жизнь — где должен быть баланс?", "sideA": "Безопасность", "sideB": "Частная жизнь", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Соцсети как инструмент гражданского участия против соцсетей как драйвера поляризации — какой эффект преобладает?", "sideA": "Участие", "sideB": "Поляризация", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "ИИ в найме против человеческого суждения — что дает более справедливые решения о найме?", "sideA": "ИИ", "sideB": "Человек", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Право быть забытым в интернете против права общественности на информацию — что должно иметь приоритет?", "sideA": "Право быть забытым", "sideB": "Право на инфо", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Обязательное голосование против добровольного — что создает более здоровую демократию?", "sideA": "Обязательное", "sideB": "Добровольное", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Политическое участие через протест против участия через официальные институты — что эффективнее для взрослых сегодня?", "sideA": "Протест", "sideB": "Институты", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Национальная идентичность против европейской или глобальной — что важнее для взрослых в 2026 году?", "sideA": "Национальная", "sideB": "Глобальная", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Повышение налогов для финансирования госуслуг против сокращения расходов — какой политический выбор более оправдан?", "sideA": "Налоги", "sideB": "Сокращение расходов", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Признание, что вы не представляете, как устроена ваша пенсия, против уверенной имитации знания — какой опыт более универсален для взрослого?", "sideA": "Признание", "sideB": "Имитация", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Быть человеком, который всегда планирует встречи, против того, кто просто приходит — какая роль больше утомляет?", "sideA": "Организатор", "sideB": "Гость", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Иметь твердое мнение о кухонных привычках коллег против полного безразличия — какой человек более терпим?", "sideA": "Твердое мнение", "sideB": "Безразличие", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Посещение каждого необязательного рабочего мероприятия против полного их игнорирования — какая стратегия лучше для карьеры и психики?", "sideA": "Посещать все", "sideB": "Игнорировать", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Взрослые, которые все еще путаются в налоговой декларации, против тех, кому нравится ее заполнять — какая группа заслуживает большего доверия?", "sideA": "Путаются", "sideB": "Нравится", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Жаловаться друзьям на стоимость жизни против того, чтобы делать вид, что все в порядке — какая реакция честнее?", "sideA": "Жаловаться", "sideB": "Делать вид", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Плоские организационные иерархии против вертикальных структур управления — что лучше служит работающим в них взрослым?", "sideA": "Плоская иерархия", "sideB": "Вертикальная", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Культ продуктивности против аргументов в пользу праздности — что лучше отражает реальные потребности человека в работе?", "sideA": "Продуктивность", "sideB": "Праздность", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Лидерство как навык, которому можно научиться, против лидерства как врожденного качества — какая позиция более обоснована эмпирически?", "sideA": "Навык", "sideB": "Качество", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Культ успеха (hustle culture) против медленной жизни (slow living) — кто побеждает и кто должен победить?", "sideA": "Культ успеха", "sideB": "Медленная жизнь", "level": "advanced", "theme": "routine_A1", "ideasA": [], "ideasB": []},
            {"topic": "Корпоративная социальная ответственность как искреннее обязательство против инструмента репутационного менеджмента — что честнее?", "sideA": "Искренность", "sideB": "Репутация", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Взрослая идентичность как нечто фиксированное против идентичности в процессе постоянного конструирования — что лучше отражает жизненный опыт?", "sideA": "Фиксированная", "sideB": "В процессе", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Приручение феминизма культурой потребления против феминизма, искренне меняющего взрослую жизнь — что ближе к истине?", "sideA": "Феминизм потребления", "sideB": "Искренние перемены", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Кризис среднего возраста как патология против кризиса как легитимной переоценки ценностей — какая трактовка полезнее?", "sideA": "Патология", "sideB": "Переоценка", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Давление необходимости быть необычайным против достоинства обычной жизни — какой идеал более гуманен?", "sideA": "Необычайность", "sideB": "Обычная жизнь", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Обязанность заботиться о стареющих родителях против ответственности государства — на кого должно ложиться это бремя?", "sideA": "Семья", "sideB": "Государство", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Радикальная честность в отношениях против стратегического молчания — какой подход к близости более этичен?", "sideA": "Честность", "sideB": "Молчание", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Осознанный выбор социального круга против органического формирования отношений — что создает более подлинную дружбу?", "sideA": "Осознанный выбор", "sideB": "Органически", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Нуклеарная семья как оптимальная социальная единица против исторически обусловленного соглашения — какой взгляд более обоснован?", "sideA": "Оптимальная единица", "sideB": "Исторический факт", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Технократическое управление против демократического популизма — что представляет больший долгосрочный риск для граждан?", "sideA": "Технократия", "sideB": "Популизм", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Справедливость в отношениях между поколениями против текущего благосостояния — что должно быть в приоритете государственной политики?", "sideA": "Справедливость поколений", "sideB": "Текущее благо", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Обязанность голосовать против права воздержаться — какая гражданская позиция более оправдана?", "sideA": "Обязанность", "sideB": "Право воздержаться", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Патриотизм как гражданская добродетель против патриотизма как когнитивного искажения — какая позиция убедительнее?", "sideA": "Добродетель", "sideB": "Искажение", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Абсолютизм свободы слова против регулируемой речи — что дает лучшие результаты для демократического общества?", "sideA": "Абсолютизм", "sideB": "Регулирование", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Осмысленная карьера против работы, которая финансирует осмысленную частную жизнь — какая амбиция честнее?", "sideA": "Карьера", "sideB": "Частная жизнь", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Религия против светской философии — что эффективнее отвечает на экзистенциальные потребности современных взрослых?", "sideA": "Религия", "sideB": "Светская фил.", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Осознанная жизнь против поглощенности жизнью — какую жизнь больше стоит прожить и кто это решает?", "sideA": "Осознанность", "sideB": "Поглощенность", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Наследие против присутствия — к чему взрослому человеку логичнее стремиться?", "sideA": "Наследие", "sideB": "Присутствие", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Взрослый, который «наконец-то во всем разобрался», против взрослого, который принял, что никогда не разберется — кто более самоосознан?", "sideA": "Разобрался", "sideB": "Принял", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Рассказывать все своему психологу против того, чтобы рассказывать все своему парикмахеру — какие отношения эффективнее терапевтически?", "sideA": "Психолог", "sideB": "Парикмахер", "level": "advanced", "theme": "psychological_concepts_C1", "ideasA": [], "ideasB": []},
            {"topic": "Воскресная тревога взрослого с плотным графиком против тревоги человека с пустым графиком — что экзистенциально тревожнее?", "sideA": "Плотный график", "sideB": "Пустой график", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Долгие раздумья над каждым важным решением против импульсивности — какая стратегия имеет лучший результат?", "sideA": "Раздумья", "sideB": "Импульсивность", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Взрослые, читающие книги по саморазвитию, против тех, кто принципиально их не читает — с кем сложнее общаться на ужине?", "sideA": "Читатели", "sideB": "Противники", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},

            {"topic": "Высокая зарплата или короткий путь до работы — что важнее?", "sideA": "Высокая зарплата", "sideB": "Короткий путь", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Частая смена работы или преданность одной компании — что лучше для карьеры?", "sideA": "Частая смена", "sideB": "Одна компания", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа сверхурочно или уход вовремя каждый день — какая привычка лучше?", "sideA": "Сверхурочно", "sideB": "Вовремя", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Строгий босс или мягкий босс — с кем лучше работать?", "sideA": "Строгий", "sideB": "Мягкий", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа в большой компании или в маленькой — что лучше?", "sideA": "Большая", "sideB": "Маленькая", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Получить повышение или получить больше свободного времени — что бы вы выбрали?", "sideA": "Повышение", "sideB": "Свободное время", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Покупка дома или аренда на всю жизнь — какое финансовое решение умнее?", "sideA": "Покупка", "sideB": "Аренда", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Жизнь в центре города или в пригороде — что лучше?", "sideA": "Центр города", "sideB": "Пригород", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Тратить деньги на впечатления или на вещи — что делает вас счастливее?", "sideA": "Впечатления", "sideB": "Вещи", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Готовить каждый день или готовить на неделю вперед — что практичнее?", "sideA": "Каждый день", "sideB": "На неделю", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Нанять клинера или делать уборку самому — какой выбор лучше?", "sideA": "Клинер", "sideB": "Самому", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Жить с партнером или жить одному — что лучше для взрослых людей?", "sideA": "С партнером", "sideB": "Одному", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Рожать детей рано или позже в жизни — что лучше?", "sideA": "Рано", "sideB": "Позже", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Близкие отношения с семьей или независимость от нее — что важнее во взрослом возрасте?", "sideA": "Близкие отношения", "sideB": "Независимость", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Знакомство с новыми людьми или сохранение старых друзей — что ценнее?", "sideA": "Новые люди", "sideB": "Старые друзья", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Общение с коллегами после работы или поход прямо домой — что лучше для рабочих отношений?", "sideA": "Общение", "sideB": "Домой", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ходить в спортзал или тренироваться на улице — что лучше для взрослых?", "sideA": "Спортзал", "sideB": "Улица", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Строгая диета или умеренность во всем — что здоровее?", "sideA": "Строгая диета", "sideB": "Умеренность", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Идти к врачу сразу или ждать, пока само пройдет — что мудрее?", "sideA": "Сразу", "sideB": "Ждать", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Спать по восемь часов или шесть, но заниматься спортом — что лучше для энергии?", "sideA": "8 часов", "sideB": "6 часов + спорт", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Снимать стресс спортом или релаксацией — что работает лучше?", "sideA": "Спорт", "sideB": "Релаксация", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Смартфоны или живое общение — чем мы пользуемся больше, и проблема ли это?", "sideA": "Смартфоны", "sideB": "Общение", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Онлайн-банкинг или поход в банк — что лучше?", "sideA": "Онлайн", "sideB": "Поход в банк", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа с бумагой или работа в цифровом виде — что эффективнее?", "sideA": "Бумага", "sideB": "Цифра", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Соцсети для нетворкинга или личные встречи — что полезнее для карьеры?", "sideA": "Соцсети", "sideB": "Личные встречи", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Пакетный тур или самостоятельное путешествие — что лучше для взрослых?", "sideA": "Пакетный тур", "sideB": "Самостоятельно", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Поездка в город или отдых на пляже — как лучше расслабиться?", "sideA": "Город", "sideB": "Пляж", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Один длинный отпуск в году или несколько коротких — что лучше?", "sideA": "Один длинный", "sideB": "Несколько коротких", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Путешествие парой или в одиночку — что приносит больше удовольствия?", "sideA": "Парой", "sideB": "В одиночку", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Рассказывать партнеру о каждой мелочи или держать все в себе — что здоровее?", "sideA": "Все рассказывать", "sideB": "Держать в себе", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Проверять телефон первым делом утром или после завтрака — какая привычка лучше?", "sideA": "Сразу", "sideB": "После завтрака", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Знать имена соседей или не знать их — что сейчас считается нормой для взрослого?", "sideA": "Знать имена", "sideB": "Не знать", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Поход за продуктами со списком или без него — у кого жизнь лучше?", "sideA": "Со списком", "sideB": "Без списка", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Сказать боссу, что заболел, или идти на работу больным — какой выбор смелее?", "sideA": "Сказать боссу", "sideB": "Идти больным", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Удаленка или офис — что лучше для продуктивности и благополучия?", "sideA": "Удаленка", "sideB": "Офис", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Стабильность работы или карьерный рост — что взрослым стоит приоритизировать?", "sideA": "Стабильность", "sideB": "Рост", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Свой бизнес или работа по найму — какой выбор лучше в 30 лет?", "sideA": "Свой бизнес", "sideB": "По найму", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Амбиции или баланс между работой и жизнью — можно ли действительно иметь и то, и другое?", "sideA": "Амбиции", "sideB": "Баланс", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Нетворкинг или развитие навыков — что больше продвигает вашу карьеру?", "sideA": "Нетворкинг", "sideB": "Навыки", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Честная обратная связь от начальника или полная независимость в работе — что больше мотивирует взрослых?", "sideA": "Обратная связь", "sideB": "Независимость", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Смена карьеры в 40 лет или верность своей области — какое решение мудрее?", "sideA": "Смена карьеры", "sideB": "Верность области", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Досрочное погашение ипотеки или инвестирование этих денег — что умнее?", "sideA": "Погасить ипотеку", "sideB": "Инвестировать", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Собственное жилье или пожизненная аренда — что больше подходит для современной взрослой жизни?", "sideA": "Собственное", "sideB": "Аренда", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Копить на пенсию смолоду или наслаждаться деньгами в 30 лет — что мудрее?", "sideA": "Копить смолоду", "sideB": "Наслаждаться сейчас", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Жить скромнее своих возможностей или тратить, чтобы наслаждаться жизнью сейчас — какой подход здоровее?", "sideA": "Жить скромнее", "sideB": "Наслаждаться сейчас", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Два дохода в семье или один партнер, сидящий дома — что лучше для семей?", "sideA": "Два дохода", "sideB": "Один дома", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Иметь детей или сознательно отказаться от них — какая взрослая жизнь более насыщенная?", "sideA": "С детьми", "sideB": "Без детей", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Строгое воспитание или вседозволенность — из кого вырастают более счастливые взрослые?", "sideA": "Строгое", "sideB": "Вседозволенность", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Долгосрочные отношения или жизнь в одиночку — что лучше для личностного роста?", "sideA": "Отношения", "sideB": "Одиночество", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Разделять работу и личную жизнь или объединять их — что здоровее?", "sideA": "Разделять", "sideB": "Объединять", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Переезд за границу парой или жизнь рядом с семьей — какое решение верное?", "sideA": "Переезд", "sideB": "Рядом с семьей", "level": "intermediate", "theme": "travel_cultural_B1", "ideasA": [], "ideasB": []},
            {"topic": "Приоритет физического здоровья или ментального — на чем взрослым стоит сосредоточиться в первую очередь?", "sideA": "Физическое", "sideB": "Ментальное", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Частная медицина или опора на государственную систему — какая стратегия лучше для взрослого?", "sideA": "Частная", "sideB": "Государственная", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Регулярные медосмотры или поход к врачу только во время болезни — какой подход умнее?", "sideA": "Регулярно", "sideB": "Только когда болен", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Меньше алкоголя или меньше стресса — что сильнее влияет на здоровье взрослых?", "sideA": "Меньше алкоголя", "sideB": "Меньше стресса", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Личная свобода или ответственность перед обществом — чем должны руководствоваться взрослые при принятии решений?", "sideA": "Свобода", "sideB": "Ответственность", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Оптимизм по поводу будущего или реализм — какая позиция полезнее для взрослых?", "sideA": "Оптимизм", "sideB": "Реализм", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Изменять мир или строить стабильную личную жизнь — какая амбиция более честная?", "sideA": "Изменять мир", "sideB": "Стабильная жизнь", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Тратить свое время на волонтерство или жертвовать деньги — что приносит больше пользы?", "sideA": "Волонтерство", "sideB": "Деньги", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Следовать ценностям своего поколения или ставить их под сомнение — что более достойно восхищения?", "sideA": "Следовать", "sideB": "Сомневаться", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Знать, сколько зарабатывают ваши коллеги, или не знать — что лучше для гармонии в офисе?", "sideA": "Знать", "sideB": "Не знать", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Отвечать на сообщения мгновенно или не торопиться — что более уважительно во взрослой жизни?", "sideA": "Сразу", "sideB": "Не торопясь", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Признаться, что не имеешь понятия, что такое пенсионный фонд, или притворяться, что знаешь — что больше похоже на жизнь взрослого человека?", "sideA": "Признаться", "sideB": "Притворяться", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Отменять планы в последний момент или идти куда-то через силу — какая взрослая привычка хуже?", "sideA": "Отменять", "sideB": "Идти через силу", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Открыто обсуждать деньги с друзьями или держать это в секрете — какой подход более зрелый?", "sideA": "Обсуждать", "sideB": "Держать в секрете", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},

            {"topic": "Кофе или чай — какой напиток лучше утром?", "sideA": "Кофе", "sideB": "Чай", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Ресторан или домашняя еда — что лучше?", "sideA": "Ресторан", "sideB": "Домашняя еда", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Завтрак или без завтрака — что лучше для вас?", "sideA": "Завтрак", "sideB": "Без завтрака", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Вода или сок — что полезнее?", "sideA": "Вода", "sideB": "Сок", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Мясо или овощи — что важнее в еде?", "sideA": "Мясо", "sideB": "Овощи", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Дом или квартира — где лучше жить?", "sideA": "Дом", "sideB": "Квартира", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Город или деревня — где лучше жить?", "sideA": "Город", "sideB": "Деревня", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Наличные или карта — чем лучше платить?", "sideA": "Наличные", "sideB": "Карта", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Копить деньги или тратить их — что лучше?", "sideA": "Копить", "sideB": "Тратить", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Аренда или покупка — что лучше?", "sideA": "Аренда", "sideB": "Покупка", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Работа утром или работа вечером — что лучше?", "sideA": "Утром", "sideB": "Вечером", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Машина или автобус — на чем лучше ездить на работу?", "sideA": "Машина", "sideB": "Автобус", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ходить пешком или водить машину — что лучше в городе?", "sideA": "Пешком", "sideB": "Машина", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Офис или дом — где лучше работать?", "sideA": "Офис", "sideB": "Дом", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Жаворонок или сова — что лучше?", "sideA": "Жаворонок", "sideB": "Сова", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Лето или зима — какое время года лучше?", "sideA": "Лето", "sideB": "Зима", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Короткий отпуск или длинный отпуск — что лучше?", "sideA": "Короткий", "sideB": "Длинный", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Телефонный звонок или сообщение — что лучше?", "sideA": "Звонок", "sideB": "Сообщение", "level": "starter", "theme": "technology_A1", "ideasA": [], "ideasB": []},
            {"topic": "Душ утром или душ вечером — как правильно?", "sideA": "Утром", "sideB": "Вечером", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Понедельник или пятница — какой день лучше?", "sideA": "Понедельник", "sideB": "Пятница", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Слишком жарко или слишком холодно — что хуже?", "sideA": "Жарко", "sideB": "Холодно", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Место у окна или у прохода — что лучше в самолете?", "sideA": "У окна", "sideB": "У прохода", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Полный рабочий день или частичная занятость — что лучше?", "sideA": "Полный день", "sideB": "Частичная", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа в офисе или работа из дома — что вы предпочитаете?", "sideA": "Офис", "sideB": "Дом", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа, которую вы любите, или работа, которая хорошо оплачивается — что важнее?", "sideA": "Любимая работа", "sideB": "Хорошая оплата", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Работа с другими людьми или работа в одиночку — что лучше?", "sideA": "С людьми", "sideB": "В одиночку", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Короткий путь на работу или длинный — что более приемлемо?", "sideA": "Короткий", "sideB": "Длинный", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Жить одному или жить с партнером — что лучше?", "sideA": "Одному", "sideB": "С партнером", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Большой город или маленький городок — где лучше жить взрослому человеку?", "sideA": "Большой город", "sideB": "Маленький городок", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Готовить дома или есть вне дома — что лучше для повседневной жизни?", "sideA": "Дома", "sideB": "Вне дома", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Иметь детей или не иметь — какая жизнь лучше?", "sideA": "С детьми", "sideB": "Без детей", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Снимать квартиру или покупать дом — что лучше для молодых людей?", "sideA": "Снимать", "sideB": "Покупать", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Физкультура каждый день или отдых — что лучше для здоровья?", "sideA": "Упражнения", "sideB": "Отдых", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Идти к врачу или ждать — что лучше, когда вы чувствуете себя больным?", "sideA": "Врач", "sideB": "Ждать", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Спать по восемь часов или меньше — что более реально для взрослых?", "sideA": "8 часов", "sideB": "Меньше", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ходить на работу пешком или ездить на машине — что лучше для здоровья?", "sideA": "Пешком", "sideB": "Машина", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Онлайн-покупки или покупки в магазине — что вы предпочитаете?", "sideA": "Онлайн", "sideB": "Магазин", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Копить на будущее или наслаждаться деньгами сейчас — что мудрее?", "sideA": "Копить", "sideB": "Наслаждаться сейчас", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Дорогие вещи или дешевые — что выгоднее?", "sideA": "Дорогие", "sideB": "Дешевые", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Покупка нового или покупка подержанного — что лучше?", "sideA": "Новое", "sideB": "Подержанное", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Смотреть телевизор дома или гулять — какой вечер лучше?", "sideA": "ТВ", "sideB": "Гулять", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Отпуск с семьей или отпуск с друзьями — что лучше?", "sideA": "С семьей", "sideB": "С друзьями", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Оставаться в своей стране или путешествовать за границу — какой отдых лучше?", "sideA": "Своя страна", "sideB": "За границу", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Спорт или чтение — какое хобби лучше для взрослых?", "sideA": "Спорт", "sideB": "Чтение", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Часто видеться с друзьями или проводить время в одиночестве — что важнее?", "sideA": "Друзья", "sideB": "Одиночество", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Отвечать на электронные письма сразу или оставлять их на потом — что более профессионально?", "sideA": "Сразу", "sideB": "Потом", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Мыть посуду сразу или оставить до завтра — что лучше?", "sideA": "Сразу", "sideB": "До завтра", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Всегда приходить заранее или всегда опаздывать на пять минут — что хуже на работе?", "sideA": "Заранее", "sideB": "Опоздание", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Очень организованный стол или беспорядок на столе — какой человек более продуктивен?", "sideA": "Организованный", "sideB": "Беспорядок", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Разговоры о работе за ужином или никаких разговоров о работе — какое правило лучше?", "sideA": "О работе", "sideB": "Без работы", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},

            {
                "topic": "Язык: конститутивный или экспрессивный",
                "sideA": "Конститутивный",
                "sideB": "Экспрессивный",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Формирует реальность",
                    "Ограничивает мысль"
                ],
                "ideasB": [
                    "Отражает реальность",
                    "Инструмент для мысли"
                ]
            },
            {
                "topic": "Точность против двусмысленности",
                "sideA": "Точность",
                "sideB": "Двусмысленность",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Ясность",
                    "Эффективность"
                ],
                "ideasB": [
                    "Нюансы",
                    "Дипломатия"
                ]
            },
            {
                "topic": "Риторика против логики",
                "sideA": "Риторика",
                "sideB": "Логика",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Сила убеждения",
                    "Эмоциональный призыв"
                ],
                "ideasB": [
                    "Объективная истина",
                    "Структурная обоснованность"
                ]
            },
            {
                "topic": "Буквальный смысл против интерпретации",
                "sideA": "Буквальный",
                "sideB": "Интерпретация",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Намерение автора",
                    "Стабильность"
                ],
                "ideasB": [
                    "Реакция читателя",
                    "Развивающийся контекст"
                ]
            },
            {
                "topic": "Научный консенсус против эпистемического смирения",
                "sideA": "Консенсус",
                "sideB": "Смирение",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Установленные знания",
                    "Авторитет экспертов"
                ],
                "ideasB": [
                    "Открытость к исправлениям",
                    "Признание ограничений"
                ]
            },
            {
                "topic": "Экспертиза против личного опыта",
                "sideA": "Экспертиза",
                "sideB": "Личный опыт",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Научная строгость",
                    "Объективные данные"
                ],
                "ideasB": [
                    "Подлинная правда",
                    "Контекстуальное понимание"
                ]
            },
            {
                "topic": "Сомнение: добродетель против паралича",
                "sideA": "Добродетель",
                "sideB": "Паралич",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Критическое мышление",
                    "Скептицизм"
                ],
                "ideasB": [
                    "Нерешительность",
                    "Отсутствие действий"
                ]
            },
            {
                "topic": "Повествование против данных",
                "sideA": "Повествование",
                "sideB": "Данные",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Эмоциональное воздействие",
                    "Человеческая связь"
                ],
                "ideasB": [
                    "Статистическая истина",
                    "Масштабируемость"
                ]
            },
            {
                "topic": "Легитимность: согласие против результата",
                "sideA": "Согласие",
                "sideB": "Результат",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Демократический процесс",
                    "Моральное право"
                ],
                "ideasB": [
                    "Эффективность",
                    "Эффективное управление"
                ]
            },
            {
                "topic": "Государство: гарант свободы или угроза",
                "sideA": "Гарант",
                "sideB": "Угроза",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Верховенство закона",
                    "Защита прав"
                ],
                "ideasB": [
                    "Злоуποтребление властью",
                    "Слежка"
                ]
            },
            {
                "topic": "Политика прав против политики ответственности",
                "sideA": "Права",
                "sideB": "Обязанности",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Индивидуальная свобода",
                    "Юридическая защита"
                ],
                "ideasB": [
                    "Коллективный долг",
                    "Социальная сплоченность"
                ]
            },
            {
                "topic": "Нейтралитет против ценностно-ориентированного управления",
                "sideA": "Нейтралитет",
                "sideB": "Ценностная",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Беспристрастность",
                    "Справедливость"
                ],
                "ideasB": [
                    "Моральное направление",
                    "Социальная цель"
                ]
            },
            {
                "topic": "Намерение против восприятия в искусстве",
                "sideA": "Намерение",
                "sideB": "Восприятие",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Видение автора",
                    "Оригинальный контекст"
                ],
                "ideasB": [
                    "Смысл для аудитории",
                    "Культурное влияние"
                ]
            },
            {
                "topic": "Эстетическая ценность против моральной",
                "sideA": "Эстетическая",
                "sideB": "Моральная",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Искусство ради искусства",
                    "Чистая красота"
                ],
                "ideasB": [
                    "Социальная полезность",
                    "Этическое воздействие"
                ]
            },
            {
                "topic": "Авангард против доступности",
                "sideA": "Авангард",
                "sideB": "Доступность",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Расширение границ",
                    "Интеллектуальный вызов"
                ],
                "ideasB": [
                    "Инклюзивность",
                    "Демократическое искусство"
                ]
            },
            {
                "topic": "Институциональное искусство против аутсайдерского",
                "sideA": "Институциональное",
                "sideB": "Аутсайдерское",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Историческое сохранение",
                    "Стандарты"
                ],
                "ideasB": [
                    "Сырая подлинность",
                    "Антисистемность"
                ]
            },
            {
                "topic": "Принцип предосторожности против проактивности",
                "sideA": "Предосторожность",
                "sideB": "Проактивность",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Избегание рисков",
                    "Безопасность прежде всего"
                ],
                "ideasB": [
                    "Инновации",
                    "Принятие перемен"
                ]
            },
            {
                "topic": "Научный прогресс: благо сам по себе или нейтрален",
                "sideA": "Благо сам по себе",
                "sideB": "Нейтрален",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Ценности Просвещения",
                    "Решение проблем"
                ],
                "ideasB": [
                    "Проблема двойного назначения",
                    "Ответственность человека"
                ]
            },
            {
                "topic": "Экзистенциальный риск против текущих страданий",
                "sideA": "Экзистенциальный риск",
                "sideB": "Текущие страдания",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Долгосрочное выживание",
                    "Будущие поколения"
                ],
                "ideasB": [
                    "Немедленная помощь",
                    "Острая бедность"
                ]
            },
            {
                "topic": "Человеческое сознание против сильного ИИ",
                "sideA": "Сознание",
                "sideB": "Сильный ИИ",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Биологическая уникальность",
                    "Субъективный опыт"
                ],
                "ideasB": [
                    "Вычислительная мощность",
                    "Алгоритмическая логика"
                ]
            },
            {
                "topic": "Прогресс: реальность против иллюзии",
                "sideA": "Реальность",
                "sideB": "Иλлюзия",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Технологический прогресс",
                    "Улучшение качества жизни"
                ],
                "ideasB": [
                    "Цикличность истории",
                    "Новые проблемы"
                ]
            },
            {
                "topic": "Либеральный порядок против многополярного мира",
                "sideA": "Либеральный порядок",
                "sideB": "Многополярность",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Универсальные ценности",
                    "Глобальная стабильность"
                ],
                "ideasB": [
                    "Разнообразие сил",
                    "Культурный суверенитет"
                ]
            },
            {
                "topic": "Память против забвения",
                "sideA": "Память",
                "sideB": "Забвение",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Уроки истории",
                    "Идентичность"
                ],
                "ideasB": [
                    "Движение вперед",
                    "Преодоление травм"
                ]
            },
            {
                "topic": "Трагедия общин против сотрудничества",
                "sideA": "Трагедия",
                "sideB": "Сотрудничество",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Личный интерес",
                    "Истощение ресурсов"
                ],
                "ideasB": [
                    "Взаимная выгода",
                    "Коллективное управление"
                ]
            },
            {
                "topic": "Красный против синего — какой цвет лучше?",
                "sideA": "Красный",
                "sideB": "Синий",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Желтый против зеленого — какой цвет более радостный?",
                "sideA": "Желтый",
                "sideB": "Зеленый",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Черный против белого — какой цвет вы предпочитаете?",
                "sideA": "Черный",
                "sideB": "Белый",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против фиолетового — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Фиолетовый",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Круг против квадрата — какая фигура полезнее?",
                "sideA": "Круг",
                "sideB": "Квадрат",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких чисел — какие веселее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Треугольник против прямоугольника — какая фигура лучше?",
                "sideA": "Треугольник",
                "sideB": "Прямоугольник",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мяч против куклы — какая игрушка лучше?",
                "sideA": "Мяч",
                "sideB": "Кукла",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Карандаш против ручки — чем лучше писать?",
                "sideA": "Карандаш",
                "sideB": "Ручка",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Книга против картинки — по чему лучше учиться?",
                "sideA": "Книга",
                "sideB": "Картинка",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против пола — на чем лучше сидеть?",
                "sideA": "Стул",
                "sideB": "Пол",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошка против собаки — какое животное лучше?",
                "sideA": "Кошка",
                "sideB": "Собака",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рыба против птицы — кто лучший питомец?",
                "sideA": "Рыба",
                "sideB": "Птица",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких животных — какие милее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кролик против хомяка — кто милее?",
                "sideA": "Кролик",
                "sideB": "Хомяк",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вода против сока — что лучше пить?",
                "sideA": "Вода",
                "sideB": "Сок",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Яблоко против банана — какой фрукт лучше?",
                "sideA": "Яблоко",
                "sideB": "Банан",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Хлеб против риса — что лучше есть?",
                "sideA": "Хлеб",
                "sideB": "Рис",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Молоко против воды — что вы предпочитаете?",
                "sideA": "Молоко",
                "sideB": "Вода",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с семьей против одного — что лучше?",
                "sideA": "С семьей",
                "sideB": "Один",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь брата против сестры — что лучше?",
                "sideA": "Брат",
                "sideB": "Сестра",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большая против маленькой семьи — какая лучше?",
                "sideA": "Большая",
                "sideB": "Маленькая",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Старший против младшего ребенка — что лучше?",
                "sideA": "Старший",
                "sideB": "Младший",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утренняя против дневной школы — что лучше?",
                "sideA": "Утро",
                "sideB": "День",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение против математики — что веселее?",
                "sideA": "Чтение",
                "sideB": "Математика",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школа против обучения дома — что лучше?",
                "sideA": "Школа",
                "sideB": "Дом",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашка против ее отсутствия — что больше помогает?",
                "sideA": "Домашка",
                "sideB": "Нет",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против работы в паре — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "Пара",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Бумага против компьютера — что лучше?",
                "sideA": "Бумага",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Завтрак против ужина — какой прием пищи важнее?",
                "sideA": "Завтрак",
                "sideB": "Ужин",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Горячая против холодной еды — что лучше?",
                "sideA": "Горячая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против ресторана — что лучше?",
                "sideA": "Дом",
                "sideB": "Ресторан",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сладкое против соленого — что вы предпочитаете?",
                "sideA": "Сладкое",
                "sideB": "Соленое",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить против покупать еду — что приятнее?",
                "sideA": "Готовить",
                "sideB": "Покупать",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно вставать — что лучше?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утро против вечера — какое время суток приятнее?",
                "sideA": "Утро",
                "sideB": "Вечер",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Будни против выходных — что вы предпочитаете?",
                "sideA": "Будни",
                "sideB": "Выходные",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лето против зимы — какое время года лучше?",
                "sideA": "Лето",
                "sideB": "Зима",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно ложиться — что здоровее?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против квартиры — что лучше?",
                "sideA": "Дом",
                "sideB": "Квартира",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Город против деревни — где лучше жить?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спальня против гостиной — какая комната вам больше нравится?",
                "sideA": "Спальня",
                "sideB": "Гостиная",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Игры дома против улицы — какие веселее?",
                "sideA": "Дома",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ТВ против книги — что лучше?",
                "sideA": "ТВ",
                "sideB": "Книга",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спорт против видеоигр — что веселее?",
                "sideA": "Спорт",
                "sideB": "Видеоигры",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рисование против пения — какое хобби лучше?",
                "sideA": "Рисование",
                "sideB": "Пение",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Играть одному против друзей — что веселее?",
                "sideA": "Один",
                "sideB": "Друзья",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Плавание против бега — какой спорт вы предпочитаете?",
                "sideA": "Плавание",
                "sideB": "Бег",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Музыка против спорта — какое хобби лучше?",
                "sideA": "Музыка",
                "sideB": "Спорт",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашние против диких животных — кто интереснее?",
                "sideA": "Домашние",
                "sideB": "Дикие",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дождь против солнца — какую погоду вы предпочитаете?",
                "sideA": "Дождь",
                "sideB": "Солнце",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Море против гор — что лучше для отпуска?",
                "sideA": "Море",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Цветы против деревьев — что красивее?",
                "sideA": "Цветы",
                "sideB": "Деревья",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Машина против автобуса — что лучше?",
                "sideA": "Машина",
                "sideB": "Автобус",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пешком против велосипеда — как лучше передвигаться?",
                "sideA": "Пешком",
                "sideB": "Велосипед",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткий против долгого отпуска — что лучше?",
                "sideA": "Короткий",
                "sideB": "Долгий",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против поездки с семьей — что веселее?",
                "sideA": "Один",
                "sideB": "Семья",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-шопинг против покупок в магазине",
                "sideA": "Онлайн",
                "sideB": "Лично",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Удобство",
                    "Лучшие цены"
                ],
                "ideasB": [
                    "Примерить вещи",
                    "Мгновенное удовлетворение"
                ]
            },
            {
                "topic": "Бумажные книги против электронных",
                "sideA": "Бумажные",
                "sideB": "Электронные",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Запах/Ощущение",
                    "Предмет коллекционирования"
                ],
                "ideasB": [
                    "Портативность",
                    "Экономия места"
                ]
            },
            {
                "topic": "Работа из дома против работы в офисе",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Нет поездок",
                    "Гибкость"
                ],
                "ideasB": [
                    "Общение",
                    "Лучшая концентрация"
                ]
            },
            {
                "topic": "Электромобили против бензиновых авто",
                "sideA": "Электро",
                "sideB": "Бензин",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Экология",
                    "Тишина"
                ],
                "ideasB": [
                    "Запас хода",
                    "Скорость зарядки"
                ]
            },
            {
                "topic": "Учиться утром или учиться вечером — когда лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгие учителя или добрые учителя — кто больше помогает ученикам?",
                "sideA": "Строгие",
                "sideB": "Добрые",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться по учебнику или учиться по видео — что эффективнее?",
                "sideA": "Учебник",
                "sideB": "Видео",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие уроки или длинные уроки — какие помогают учиться лучше?",
                "sideA": "Короткие",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Групповые проекты или индивидуальные задания — что вы предпочитаете?",
                "sideA": "Группа",
                "sideB": "Индивидуально",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школьная форма или повседневная одежда в школе — что лучше?",
                "sideA": "Форма",
                "sideB": "Повседневная",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашняя еда или фастфуд — что лучше?",
                "sideA": "Домашняя",
                "sideB": "Фастфуд",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Три больших приема пищи или много маленьких перекусов — что здоровее?",
                "sideA": "Три раза",
                "sideB": "Перекусы",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианская еда или мясо — какая диета лучше?",
                "sideA": "Вегетарианская",
                "sideB": "Мясо",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пить чай или пить кофе — что лучше?",
                "sideA": "Чай",
                "sideB": "Кофе",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть в одиночестве или есть с другими — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "С другими",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Заниматься командным спортом или индивидуальным — что лучше?",
                "sideA": "Командный",
                "sideB": "Индивидуальный",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить свободное время дома или на улице — что лучше?",
                "sideA": "Дома",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или театр — куда лучше сходить вечером?",
                "sideA": "Кино",
                "sideB": "Театр",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слушать музыку или играть на инструменте — что приятнее?",
                "sideA": "Слушать",
                "sideB": "Играть",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Видеоигры или настольные игры — что веселее?",
                "sideA": "Видеоигры",
                "sideB": "Настольные",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить по магазинам или оставаться дома — как лучше провести выходные?",
                "sideA": "Магазины",
                "sideB": "Дома",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мобильный телефон или компьютер — что полезнее в повседневной жизни?",
                "sideA": "Телефон",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отправить сообщение или позвонить по телефону — что лучше?",
                "sideA": "Сообщение",
                "sideB": "Звонок",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Электронная книга или бумажная — что вы предпочитаете читать?",
                "sideA": "Э-книга",
                "sideB": "Бумажная",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фотографировать на телефон или на камеру — что дает лучший результат?",
                "sideA": "Телефон",
                "sideB": "Камера",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отпуск на пляже или отпуск в горах — что лучше?",
                "sideA": "Пляж",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать на поезде или на самолете — что лучше?",
                "sideA": "Поезд",
                "sideB": "Самолет",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Посетить знаменитый город или маленькую деревню — что интереснее?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Остановиться в отеле или в местной семье — что вы предпочитаете?",
                "sideA": "Отель",
                "sideB": "В семье",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать за границу или изучать свою страну — что более стоящее?",
                "sideA": "За границу",
                "sideB": "Своя страна",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь много друзей или несколько близких друзей — что лучше?",
                "sideA": "Много друзей",
                "sideB": "Близкие друзья",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Встречаться с друзьями лично или общаться онлайн — что приносит больше удовольствия?",
                "sideA": "Лично",
                "sideB": "Онлайн",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с родителями или в студенческой квартире — что лучше для молодежи?",
                "sideA": "С родителями",
                "sideB": "Студ. квартира",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Праздновать день рождения дома или куда-то сходить — что приятнее?",
                "sideA": "Дома",
                "sideB": "Вне дома",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить деньги или тратить их — что мудрее?",
                "sideA": "Копить",
                "sideB": "Тратить",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать неполный рабочий день во время учебы или сосредоточиться только на школе — что лучше?",
                "sideA": "Подработка",
                "sideB": "Только учеба",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Зарабатывать много денег или иметь свободное время — что важнее?",
                "sideA": "Деньги",
                "sideB": "Свободное время",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-обучение или обучение в классе — что эффективнее?",
                "sideA": "Онлайн",
                "sideB": "В классе",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Запоминание фактов или умение находить информацию — какой навык важнее?",
                "sideA": "Факты",
                "sideB": "Поиск инфо",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Университетское образование или профессиональное обучение — какой путь лучше?",
                "sideA": "Университет",
                "sideB": "Колледж/ПТУ",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Экзамены или непрерывное оценивание — какой способ оценки студентов более справедлив?",
                "sideA": "Экзамены",
                "sideB": "Оценки за год",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Изучение иностранного языка в школе или жизнь за границей — что эффективнее?",
                "sideA": "Школа",
                "sideB": "За границей",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школы с раздельным обучением или смешанные школы — какие лучше для учеников?",
                "sideA": "Раздельные",
                "sideB": "Смешанные",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети или личное общение — что лучше для поддержания связи?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стриминговые сервисы или традиционное ТВ — что лучше?",
                "sideA": "Стриминг",
                "sideB": "ТВ",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа из дома или работа в офисе — что продуктивнее?",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение новостей онлайн или чтение газеты — что надежнее?",
                "sideA": "Новости онлайн",
                "sideB": "Газета",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить время в соцсетях или проводить время на природе — что лучше для вашего психического здоровья?",
                "sideA": "Соцсети",
                "sideB": "Природа",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пользоваться общественным транспортом или водить машину — что лучше для общества?",
                "sideA": "Общ. транспорт",
                "sideB": "Машина",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Покупка подержанной одежды или покупка новой — какая привычка лучше?",
                "sideA": "Б/у",
                "sideB": "Новое",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жизнь в городе или жизнь в деревне — что больше подходит молодежи?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианство или употребление мяса — что лучше для планеты?",
                "sideA": "Вегетарианство",
                "sideB": "Мясо",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Индивидуальные изменения образа жизни или действия правительства — что дает больше для экологии?",
                "sideA": "Лично",
                "sideB": "Государство",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стабильная работа или творческая карьера — какой жизненный выбор лучше?",
                "sideA": "Стабильность",
                "sideB": "Творчество",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Открытие собственного бизнеса или работа на компанию — что лучше?",
                "sideA": "Свой бизнес",
                "sideB": "Компания",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Высокая зарплата или удовлетворение от работы — что важнее в работе?",
                "sideA": "Зарплата",
                "sideB": "Удовлетворение",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать сверхурочно или иметь баланс между работой и личной жизнью — что ведет к большему успеху?",
                "sideA": "Много работы",
                "sideB": "Баланс",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Выбор карьеры по призванию или на основе перспектив трудоустройства — что мудрее?",
                "sideA": "Призвание",
                "sideB": "Перспективы",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить как индивидуальность или ставить интересы общества на первое место — что важнее?",
                "sideA": "Индивид",
                "sideB": "Общество",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Традиционные ценности или современные ценности — какие важнее сохранить?",
                "sideA": "Традиции",
                "sideB": "Модерн",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Волонтерство или пожертвование денег на благотворительность — что помогает больше?",
                "sideA": "Волонтерство",
                "sideB": "Деньги",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слава или возможность тихо менять мир к лучшему — какая цель в жизни лучше?",
                "sideA": "Слава",
                "sideB": "Тихое влияние",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Следование правилам или умение думать самостоятельно — что важнее?",
                "sideA": "Правила",
                "sideB": "Свои мысли",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Физическое здоровье или психическое здоровье — что должно быть приоритетом?",
                "sideA": "Физическое",
                "sideB": "Психическое",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Профилактика или лечение — какой подход к здравоохранению лучше?",
                "sideA": "Профилактика",
                "sideB": "Лечение",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Соревновательный спорт или упражнения для удовольствия — что лучше для вас?",
                "sideA": "Спорт",
                "sideB": "Для себя",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Частное здравоохранение или государственное — какая система справедливее?",
                "sideA": "Частное",
                "sideB": "Государственное",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или литература — какая форма искусства сильнее?",
                "sideA": "Кино",
                "sideB": "Литература",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Современное искусство или классическое — что ценнее?",
                "sideA": "Современное",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сохранение старых зданий или строительство новых — что важнее?",
                "sideA": "Сохранение",
                "sideB": "Новые здания",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Местная культура или глобализация — что больше обогащает общество?",
                "sideA": "Местная",
                "sideB": "Глобализация",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети против живого общения — что лучше для построения отношений?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Городская жизнь против сельской жизни — где качество жизни выше?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-обучение против традиционного класса — за чем будущее образования?",
                "sideA": "Онлайн",
                "sideB": "Класс",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Возобновляемая энергия против ядерной энергии — какое решение лучше для климата?",
                "sideA": "Возобновляемая",
                "sideB": "Ядерная",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быстрая мода против устойчивой моды — можем ли мы позволить себе быть этичными?",
                "sideA": "Быстрая мода",
                "sideB": "Устойчивая",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Креативность ИИ против человеческого искусства — могут ли машины по-настоящему творить?",
                "sideA": "Креативность ИИ",
                "sideB": "Искусство",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Исследование космоса против исследования морских глубин — на чем стоит сосредоточить ресурсы?",
                "sideA": "Космос",
                "sideB": "Глубины моря",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Цифровая приватность против национальной безопасности — оправдана ли когда-либо тотальная слежка?",
                "sideA": "Приватность",
                "sideB": "Безопасность",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ГМО против органического земледелия — как нам прокормить мир?",
                "sideA": "ГМО",
                "sideB": "Органика",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Безусловный базовый доход против программ гарантированной занятости — какая соцзащита лучше?",
                "sideA": "ББД",
                "sideB": "Гарантия работы",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против оранжевого — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Оранжевый",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Число 1 против числа 10 — какое число лучше?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против дивана — что удобнее?",
                "sideA": "Стул",
                "sideB": "Диван",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сумка против коробки — что полезнее?",
                "sideA": "Сумка",
                "sideB": "Коробка",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лев против слона — какое животное лучше?",
                "sideA": "Лев",
                "sideB": "Слон",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шоколад против конфет — что лучше?",
                "sideA": "Шоколад",
                "sideB": "Конфеты",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ложка против вилки — что лучше?",
                "sideA": "Ложка",
                "sideB": "Вилка",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шапка против обуви — что важнее?",
                "sideA": "Шапка",
                "sideB": "Обувь",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Солнце против луны — что лучше?",
                "sideA": "Солнце",
                "sideB": "Луна",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Носки против без носков — что приятнее?",
                "sideA": "Носки",
                "sideB": "Без носков",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с бабушкой и дедушкой против жизни без них — что приятнее?",
                "sideA": "С бабушкой и дедушкой",
                "sideB": "Без них",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мамина еда против папиной — что лучше?",
                "sideA": "Мамина",
                "sideB": "Папина",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Математика против рисования — какой предмет веселее?",
                "sideA": "Математика",
                "sideB": "Рисование",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Писать на бумаге против печати на планшете — что лучше?",
                "sideA": "Бумага",
                "sideB": "Планшет",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пицца против пасты — что вкуснее?",
                "sideA": "Пицца",
                "sideB": "Паста",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мороженое против торта — какой десерт лучше?",
                "sideA": "Мороженое",
                "sideB": "Торт",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие дни против длинных — что лучше?",
                "sideA": "Короткие дни",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "День в парке против дня на пляже — что лучше?",
                "sideA": "Парк",
                "sideB": "Пляж",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Самолет против поезда — что веселее?",
                "sideA": "Самолет",
                "sideB": "Поезд",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Душ утром против душа вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки, сбрасывающие вещи со столов, против собак, грызущих обувь — какой питомец больше раздражает?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть пиццу вилкой против того, чтобы есть ее руками — как правильно?",
                "sideA": "Вилкой",
                "sideB": "Руками",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спать в носках против того, чтобы спать без носков — что лучше?",
                "sideA": "В носках",
                "sideB": "Без носков",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Замок из песка против снеговика — что веселее строить?",
                "sideA": "Замок из песка",
                "sideB": "Снеговик",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Много экзаменов против очень малого количества — что справедливее?",
                "sideA": "Много экзаменов",
                "sideB": "Мало экзаменов",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Начало школы в 7 лет против начала в 5 лет — что лучше для детей?",
                "sideA": "В 7 лет",
                "sideB": "В 5 лет",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть медленно против того, чтобы есть быстро — что лучше для вас?",
                "sideA": "Медленно",
                "sideB": "Быстро",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить дома против заказа еды онлайн — что лучше?",
                "sideA": "Готовить дома",
                "sideB": "Заказывать онлайн",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовка еды против выпечки — что веселее как хобби?",
                "sideA": "Готовка",
                "sideB": "Выпечка",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить в спортзал против тренировок на улице — что лучше?",
                "sideA": "Спортзал",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фото в телефоне против распечатанных фото — что лучше?",
                "sideA": "В телефоне",
                "sideB": "Распечатанные",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смарт-ТВ против компьютерного монитора — на чем лучше смотреть фильмы?",
                "sideA": "Смарт-ТВ",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жаркая страна против холодной страны — где лучше отдыхать?",
                "sideA": "Жаркая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дарить подарки против того, чтобы их получать — что вы предпочитаете?",
                "sideA": "Дарить",
                "sideB": "Получать",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа в помещении против работы на улице — что лучше?",
                "sideA": "В помещении",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ананас в пицце против отсутствия ананаса — как правильно?",
                "sideA": "Ананас",
                "sideB": "Без ананаса",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Наливать сначала молоко против того, чтобы наливать сначала чай — как лучше?",
                "sideA": "Сначала молоко",
                "sideB": "Сначала чай",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Понедельник против пятницы — какой день на самом деле хуже?",
                "sideA": "Понедельник",
                "sideB": "Пятница",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проснуться за пять минут до будильника против сна до самого будильника — что больше раздражает?",
                "sideA": "До будильника",
                "sideB": "До конца",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки против собак — кто из них на самом деле хозяин в доме?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Когда слишком жарко против того, когда слишком холодно — что хуже?",
                "sideA": "Слишком жарко",
                "sideB": "Слишком холодно",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться на ошибках против того, чтобы учиться на успехе — что учит большему?",
                "sideA": "Ошибки",
                "sideB": "Успех",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Планшеты в классе против традиционных тетрадей — что больше помогает ученикам?",
                "sideA": "Планшеты",
                "sideB": "Тетради",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быть всегда на связи против наличия цифрового свободного времени — что лучше?",
                "sideA": "Всегда на связи",
                "sideB": "Свободное время",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Повторное использование вещей против переработки — что эффективнее?",
                "sideA": "Повторное использование",
                "sideB": "Переработка",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Одна карьера на всю жизнь против частой смены профессий — что лучше?",
                "sideA": "Одна карьера",
                "sideB": "Частая смена",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сон против физических упражнений — что больше влияет на ваше здоровье?",
                "sideA": "Сон",
                "sideB": "Упражнения",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Поп-музыка против классической музыки — что имеет большее культурное влияние?",
                "sideA": "Поп-музыка",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знать, чем все закончится, против того, чтобы быть застигнутым врасплох — что лучше?",
                "sideA": "Знать заранее",
                "sideB": "Сюрприз",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мгновенный ответ на сообщения против того, чтобы не торопиться — что более уважительно?",
                "sideA": "Мгновенно",
                "sideB": "Не торопясь",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Просмотр сериала запоем против просмотра одной серии в неделю — как правильно?",
                "sideA": "Запоем",
                "sideB": "По серии",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Место у окна против места у прохода в самолете — что объективно лучше?",
                "sideA": "У окна",
                "sideB": "У прохода",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один раз пропустить спортзал против того, чтобы пойти и плохо потренироваться — что хуже?",
                "sideA": "Пропустить",
                "sideB": "Плохая тренировка",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Разговаривать с самим собой против разговора со своим питомцем — что более разумно?",
                "sideA": "С собой",
                "sideB": "С питомцем",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Мое любимое воспоминание из детства",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Мой последний отпуск",
                "level": "elementary",
                "theme": "transport_travel_A2"
            },
            {
                "topic": "Человек, который меня вдохновил",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Будущее мира через 50 лет",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Роль искусства в современном обществе",
                "level": "advanced",
                "theme": "leisure_hobbies_A2"
            },
            {
                "topic": "Сложность человеческого сознания",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "topic": "Важность осведомленности о ментальном здоровье",
                "level": "intermediate",
                "theme": "mental_health_B1"
            },
            {
                "topic": "Работа моей мечты и почему",
                "level": "starter",
                "theme": "work_A1"
            },
            {
                "topic": "Влияние изменения климата на местные сообщества",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            },
            {
                "topic": "Искусственный интеллект: инструмент или угроза?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }
        ]
    },
    "el": {
        "opinionArena": [
            {
                "text": "Είναι το πρωινό το πιο σημαντικό γεύμα;",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Είναι οι σκύλοι καλύτερα κατοικίδια από τις γάτες;",
                "level": "starter",
                "theme": "leisure_A1"
            },
            {
                "text": "Πρέπει τα παιδιά να έχουν κινητά τηλέφωνα;",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Είναι καλύτερα να ζεις σε σπίτι ή σε διαμέρισμα;",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            },
            {
                "text": "Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Καταστρέφουν τα κοινωνικά δίκτυα τις κοινωνικές μας δεξιότητες;",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Πρέπει οι δημόσιες συγκοινωνίες να είναι δωρεάν;",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            },
            {
                "text": "Γενετική μηχανική: Πρόοδος ή κίνδυνος;",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Είναι το καθολικό βασικό εισόδημα λύση για την αυτοματοποίηση;",
                "level": "advanced",
                "theme": "power_institutions_C1"
            },
            {
                "text": "Υπάρχει πραγματικά η ελεύθερη βούληση ή είναι μια ψευδαίσθηση;",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "Η ηθική του αποικισμού άλλων πλανητών.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Σκέφτομαι, άρα υπάρχω.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            },
            {
                "text": "Η μόνη σταθερά είναι η αλλαγή.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [{"topic":"Η προτεσταντική ηθική της εργασίας ως πολιτισμικό επίτευγμα έναντι της ως αρχική πηγή της ενήλικης δυστυχίας — ποια κληρονομιά κυριαρχεί σήμερα;","sideA":"Πολιτισμικό επίτευγμα","sideB":"Πηγή δυστυχίας","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η εμπορευματοποίηση του πάθους έναντι της απελευθέρωσης της μετατροπής της εργασίας σε νόημα — είναι το «κάνε αυτό που αγαπάς» συμβουλή ή παγίδα;","sideA":"Συμβουλή","sideB":"Παγίδα","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η καριέρα ως ταυτότητα έναντι της καριέρας ως μέσο — ποια είναι η πιο συνεκτική σχέση που μπορεί να έχει ένας σύγχρονος ενήλικας με την εργασία του;","sideA":"Ταυτότητα","sideB":"Μέσο","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Ο ενάρετος υπερεργαζόμενος έναντι του στρατηγικού οκνηρού — ποιος έχει υμνηθεί πιο ανέντιμα στον δυτικό πολιτισμό;","sideA":"Υπερεργαζόμενος","sideB":"Οκνηρός","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ενήλικη φιλοδοξία ως αξιοθαύμαστη έναντι της ως αδυναμία αποδοχής του πεπερασμένου — ποια ανάγνωση είναι ψυχολογικά πιο ειλικρινής;","sideA":"Αξιοθαύμαστη","sideB":"Αδυναμία αποδοχής","level":"proficiency","theme": "work_meaning_C2","ideasA":[],"ideasB":[]},
            {"topic":"Ο ρομαντικός έρως ως οργανωτική αρχή της ενήλικης ζωής έναντι του ως ιστορικά ενδεχομενικός και εμπορικά συντηρούμενος μύθος — ποιο είναι πιο υπερασπίσιμο;","sideA":"Οργανωτική αρχή","sideB":"Εμπορικός μύθος","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ριζική διαφάνεια στις σχέσεις έναντι της αναγκαιότητας ενός ιδιωτικού εαυτού — μπορούν η οικειότητα και η εξατομίκευση να συνυπάρξουν;","sideA":"Διαφάνεια","sideB":"Ιδιωτικός εαυτός","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ηθική της φροντίδας ως φεμινιστική διόρθωση έναντι της ως ανακατανομή των ίδιων βαρών — έχει εκπληρώσει η έννοια την υπόσχεσή της;","sideA":"Φεμινιστική διόρθωση","sideB":"Ανακατανομή βαρών","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η επιλογή της ατεκνίας ως αντίσταση στην προγεννητική ιδεολογία έναντι της ως μια καθαρά προσωπική απόφαση χωρίς πολιτική διάσταση — μπορούν αυτά να διαχωριστούν σαφώς;","sideA":"Αντίσταση","sideB":"Προσωπική απόφαση","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η επίγνωση της θνητότητας ως προϋπόθεση για μια ενήλικη ζωή με νόημα έναντι της ως το κύριο εμπόδιο της — ποια είναι η πιο βιώσιμη θέση;","sideA":"Προϋπόθεση","sideB":"Εμπόδιο","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η γήρανση ως παρακμή έναντι της γήρανσης ως συσσώρευση — ποιο αφήγημα είναι πιο ειλικρινές και ποιο πιο χρήσιμο;","sideA":"Παρακμή","sideB":"Συσσώρευση","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ιατρικοποίηση της γήρανσης ως πρόοδος έναντι της ως άρνηση αποδοχής της ανθρώπιλης κατάστασης — πού πρέπει να χαραχθεί η γραμμή;","sideA":"Πρόοδος","sideB":"Άρνηση αποδοχής","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η μνήμη ως η ουσία της ενήλικης ταυτότητας έναντι της ως ένας άκρως αναξιόπιστος αφηγητής — ποιες είναι οι επιπτώσεις στον τρόπο που κατασκευάζουμε έναν εαυτό;","sideA":"Ουσία","sideB":"Αναξιόπιστος αφηγητής","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η συνεννοχή του ενήλικα πολίτη σε άδικα συστήματα μέσω της συνήθους κατανάλωσης έναντι της δομικής ασχετότητας της ατομικής ηθικής καθαρότητας — ποια είναι η πιο ειλικρινής πλαισίωση;","sideA":"Συνεννοχή","sideB":"Δομική ασχετότητα","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η πολιτική απογοήτευση ως ορθολογική απάντηση στα διαθέσιμα στοιχεία έναντι της ως μια μορφή προνομίου — ποια ανάγνωση είναι εμπειρικά πιο υπερασπίσιμη;","sideA":"Ορθολογική απάντηση","sideB":"Προνόμιο","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η διαγενεακή δικαιοσύνη ως η κεντρική ηθική πρόκληση της εποχής μας έναντι της ως έννοια που συστηματικά συσκοτίζει την παρούσα ταξική και φυλετική ανισότητα — ποια είναι η ισχυρότερη κριτική;","sideA":"Ηθική πρόκληση","sideB":"Συσκότιση ανισότητας","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η φιλελεύθερη δημοκρατία ως το λιγότερο κακό σύστημα έναντι της ως ένα σύστημα που έχει δομικά εξαντλήσει τη μεταρρυθμιστική του ικανότητα — ποια ετυμηγορία υποστηρίζουν τα στοιχεία;","sideA":"Λιγότερο κακό σύστημα","sideB":"Εξαντλημένη ικανότητα","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ικανότητα για αυτοαπάτη ως γνωστικό έλλειμμα έναντι της ως προσαρμοστικός μηχανισμός — ποια εκδοχή εξυπηρετεί καλύτερα τον ενήλικα που θέλει να ζει καλά;","sideA":"Γνωστικό έλλειμμα","sideB":"Προσαρμοστικός μηχανισμός","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η εμπειρογνωμοσύνη ως επιστημολογική αυθεντία έναντι της ως μια μορφή θεσμικής εξουσίας που αξίζει έλεγχο — πότε ο υγιής σκεπτικισμός γίνεται επιστημολογική δειλία;","sideA":"Επιστημολογική αυθεντία","sideB":"Θεσμική εξουσία","level":"proficiency","theme": "epistemology_truth_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η αφήγηση ως ο κύριος τρόπος με τον οποίο οι ενήλικες δίνουν νόημα στη ζωή τους έναντι της ως ο κύριος τρόπος με τον οποίο οι ενήλικες παραπλανούν τον εαυτό τους — ποια λειτουργία κυριαρχεί;","sideA":"Δίνουν νόημα","sideB":"Παραπλανούν","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Η ειλικρίνεια ως απόλυτη αρετή έναντι της ως περιστασιακή — υπάρχει μια συνεκτική περιγραφή της φιλαλήθειας που επιβιώνει από την επαφή με τις πραγματικές ενήλικες σχέσεις;","sideA":"Απόλυτη αρετή","sideB":"Περιστασιακή","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Ο ενήλικας που «επιτέλους τα κατάλαβε» έναντι του ενήλικα που έχει αποδεχτεί ότι δεν θα τα καταφέρει ποτέ — ποιος αντιπροσωπεύει μια πιο εξελιγμένη σχέση με την πραγματικότητα;","sideA":"Τα κατάλαβε","sideB":"Αποδοχή αγνώστου","level":"proficiency","theme": "ontology_metaphysics_C2","ideasA":[],"ideasB":[]},
            {"topic":"Το να λες τα πάντα στον θεραπευτή σου έναντι του να λες τα πάντα στον κομμωτή σου — ποια επαγγελματική σχέση είναι εμπειρικά πιο μετασχηματιστική και γιατί η απάντηση μας φέρνει σε δύσκολη θέση;","sideA":"Θεραπευτής","sideB":"Κομμωτής","level":"proficiency","theme": "psychoanalysis_unconscious_C2","ideasA":[],"ideasB":[]},

            {"topic": "Η τετραήμερη εβδομάδα εργασίας εναντίον της πενταήμερης — ποιο μοντέλο ωφελεί περισσότερο εργαζόμενους και εργοδότες;", "sideA": "4 ημέρες", "sideB": "5 ημέρες", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Καθολικό βασικό εισόδημα εναντίον στοχευμένης πρόνοιας — ποιο είναι το πιο αποτελεσματικό δίχτυ ασφαλείας για τους εργαζόμενους ενήλικες;", "sideA": "Καθολικό εισόδημα", "sideB": "Στοχευμένη πρόνοια", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Η οικονομία της πλατφόρμας (gig economy) εναντίον της μόνιμης απασχόλησης — ποιο μοντέλο εξυπηρετεί καλύτερα τους εργαζόμενους μακροπρόθεσμα;", "sideA": "Gig economy", "sideB": "Μόνιμη απασχόληση", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Αξιοκρατία εναντίον δομικού πλεονεκτήματος — τι εξηγεί με μεγαλύτερη ακρίβεια την επαγγελματική επιτυχία;", "sideA": "Αξιοκρατία", "sideB": "Δομικό πλεονέκτημα", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Διαφάνεια στους μισθούς εναντίον απορρήτου — τι δημιουργεί έναν δικαιότερο χώρο εργασίας;", "sideA": "Διαφάνεια", "sideB": "Απόρρητο", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Αυτοματοποίηση εναντίον ανθρώπινης εργασίας — ποια είναι η μεγαλύτερη μακροπρόθεσμη απειλή για την απασχόληση των ενηλίκων;", "sideA": "Αυτοματοποίηση", "sideB": "Ανθρώπινη εργασία", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Εξ αποστάσεως εργασία εναντίον παρουσίας στο γραφείο — τι είναι καλύτερο για την εξέλιξη της καριέρας και την κουλτούρα της ομάδας;", "sideA": "Εξ αποστάσεως", "sideB": "Γραφείο", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ίση γονική άδεια για άνδρες και γυναίκες εναντίον μεγαλύτερης άδειας μητρότητας — ποια πολιτική είναι δικαιότερη;", "sideA": "Ίση άδεια", "sideB": "Μεγαλύτερη μητρότητας", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Η επιλογή να μην έχει κανείς παιδιά εναντίον της κοινωνικής πίεσης για οικογένεια — τι αξίζει περισσότερο σεβασμό;", "sideA": "Χωρίς παιδιά", "sideB": "Κοινωνική πίεση", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ο γάμος ως θεσμός εναντίον της συμβίωσης χωρίς γάμο — τι είναι πιο σχετικό σήμερα;", "sideA": "Γάμος", "sideB": "Συμβίωση", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Νοικοκυριά με δύο εισοδήματα εναντίον ενός συντρόφου που μένει στο σπίτι — ποιο μοντέλο είναι καλύτερο για παιδιά και ενήλικες;", "sideA": "Δύο εισοδήματα", "sideB": "Ένας στο σπίτι", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Το μισθολογικό χάσμα μεταξύ των φύλων ως δομικό πρόβλημα εναντίον ζητήματος ατομικών επιλογών — ποια εξήγηση έχει μεγαλύτερη βαρύτητα;", "sideA": "Δομικό πρόβλημα", "sideB": "Ατομικές επιλογές", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Η ιδιοκτησία σπιτιού ως στόχος εναντίον μιας επαγγελματικής αγοράς ενοικίασης — ποιο μοντέλο στέγασης ταιριάζει καλύτερα στους σύγχρονους ενήλικες;", "sideA": "Ιδιοκτησία", "sideB": "Αγορά ενοικίασης", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ο εξευγενισμός (gentrification) ως βελτίωση εναντίον του εξευγενισμού ως εκτοπισμός — ποια προσέγγιση είναι πιο ειλικρινής;", "sideA": "Βελτίωση", "sideB": "Εκτοπισμός", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Αστική πυκνότητα εναντίον προαστιακής εξάπλωσης — ποιο είναι το καλύτερο μοντέλο για βιώσιμες πόλεις;", "sideA": "Αστική πυκνότητα", "sideB": "Προαστιακή εξάπλωση", "level": "upper-intermediate", "theme": "globalisation_trade_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή κοντά στην οικογένεια εναντίον μετακόμισης για ευκαιρίες — ποια επιλογή παράγει καλύτερη μακροπρόθεσμη ευημερία;", "sideA": "Κοντά στην οικογένεια", "sideB": "Μετακόμιση", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ένας γηράσκων πληθυσμός ως κρίση εναντίον ως πόρος — ποιο πλαίσιο είναι πιο παραγωγικό;", "sideA": "Κρίση", "sideB": "Πόρος", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Προσωπική ευθύνη για την υγεία εναντίον συστημικών παραγόντων — τι έχει μεγαλύτερη βαρύτητα στην εξήγηση των αποτελεσμάτων υγείας;", "sideA": "Προσωπική ευθύνη", "sideB": "Συστημικοί παράγοντες", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ημέρες ψυχικής υγείας ως νόμιμο δικαίωμα στον χώρο εργασίας εναντίον πηγής κατάχρησης — πού πρέπει οι εργοδότες να θέσουν το όριο;", "sideA": "Νόμιμο δικαίωμα", "sideB": "Πηγή κατάχρησης", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Προληπτική ιατρική εναντίον θεραπευτικής ιατρικής — ποια πρέπει να λαμβάνει περισσότερη δημόσια χρηματοδότηση;", "sideA": "Προληπτική", "sideB": "Θεραπευτική", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Αντιγηραντική ιατρική εναντίον αξιοπρεπούς γήρανσης — ποια στάση είναι πιο συνεκτική;", "sideA": "Αντιγήρανση", "sideB": "Αξιοπρεπής γήρανση", "level": "upper-intermediate", "theme": "healthcare_systems_B2", "ideasA": [], "ideasB": []},
            {"topic": "Τεχνολογία επιτήρησης για τη δημόσια ασφάλεια εναντίον του δικαιώματος στην ιδιωτικότητα — πού πρέπει να βρίσκεται η ισορροπία;", "sideA": "Δημόσια ασφάλεια", "sideB": "Ιδιωτικότητα", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Τα μέσα κοινωνικής δικτύωσης ως εργαλείο πολιτικής συμμετοχής εναντίον ως οδηγός πόλωσης — ποια επίδραση κυριαρχεί;", "sideA": "Πολιτική συμμετοχή", "sideB": "Πόλωση", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Η ΤΝ στην πρόσληψη εναντίον της ανθρώπινης κρίσης — τι παράγει δικαιότερες αποφάσεις πρόσληψης;", "sideA": "ΤΝ", "sideB": "Ανθρώπινη κρίση", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Το δικαίωμα στη λήθη στο διαδίκτυο εναντίον του δικαιώματος του κοινού στην πληροφόρηση — τι πρέπει να έχει προτεραιότητα;", "sideA": "Δικαίωμα στη λήθη", "sideB": "Δικαίωμα πληροφόρησης", "level": "upper-intermediate", "theme": "technology_privacy_B2", "ideasA": [], "ideasB": []},
            {"topic": "Υποχρεωτική ψηφοφορία εναντίον εθελοντικής ψηφοφορίας — τι παράγει υγιέστερες δημοκρατίες;", "sideA": "Υποχρεωτική", "sideB": "Εθελοντική", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Πολιτική δέσμευση μέσω διαμαρτυρίας εναντίον μέσω θεσμικών καναλιών — τι είναι πιο αποτελεσματικό για τους ενήλικες σήμερα;", "sideA": "Διαμαρτυρία", "sideB": "Θεσμικά κανάλια", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Εθνική ταυτότητα εναντίον ευρωπαϊκής ή παγκόσμιας ταυτότητας — τι είναι πιο σημαντικό για τους ενήλικες το 2026;", "sideA": "Εθνική ταυτότητα", "sideB": "Παγκόσμια ταυτότητα", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Αυξήσεις φόρων για τη χρηματοδότηση δημόσιων υπηρεσιών εναντίον περικοπών δαπανών — ποια είναι η πιο υπερασπίσιμη πολιτική επιλογή;", "sideA": "Αυξήσεις φόρων", "sideB": "Περικοπές δαπανών", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Το να παραδέχεστε ότι δεν έχετε ιδέα πώς λειτουργεί η σύνταξή σας εναντίον του να προσποιείστε με αυτοπεποίθηση ότι ξέρετε — ποια είναι η πιο καθολική εμπειρία ενήλικα;", "sideA": "Παραδοχή άγνοιας", "sideB": "Προσποίηση", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Το να είστε το άτομο που σχεδιάζει πάντα τις κοινωνικές εκδηλώσεις εναντίον του να είστε πάντα το άτομο που απλώς εμφανίζεται — ποιος ρόλος είναι πιο εξαντλητικός;", "sideA": "Ο διοργανωτής", "sideB": "Ο καλεσμένος", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Το να έχετε ισχυρή άποψη για τις συνήθειες της κουζίνας των συναδέλφων σας εναντίον του να μην σας νοιάζει καθόλου — ποιο άτομο είναι πιο υποφερτό;", "sideA": "Ισχυρή άποψη", "sideB": "Αδιαφορία", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Συμμετοχή σε κάθε προαιρετική κοινωνική εκδήλωση εργασίας εναντίον μη συμμετοχής σε καμία — ποια στρατηγική είναι καλύτερη για την καριέρα και την ψυχική σας υγεία;", "sideA": "Συμμετοχή σε όλες", "sideB": "Σε καμία", "level": "upper-intermediate", "theme": "academic_vocabulary_B2", "ideasA": [], "ideasB": []},
            {"topic": "Ενήλικες που εξακολουθούν να μπερδεύονται με τη φορολογική τους δήλωση εναντίον ενηλίκων που απολαμβάνουν να την κάνουν — ποια ομάδα είναι πιο αξιόπιστη;", "sideA": "Μπερδεμένοι", "sideB": "Απολαμβάνουν", "level": "upper-intermediate", "theme": "economy_labour_B2", "ideasA": [], "ideasB": []},
            {"topic": "Παράπονα για το κόστος ζωής σε φίλους εναντίον προσποίησης ότι όλα είναι καλά — ποια είναι η πιο ειλικρινής απάντηση ενήλικα;", "sideA": "Παράπονα", "sideB": "Προσποίηση", "level": "upper-intermediate", "theme": "politics_governance_B2", "ideasA": [], "ideasB": []},
            {"topic": "Επίπεδες οργανωτικές ιεραρχίες εναντίον κάθετων δομών διαχείρισης — τι εξυπηρετεί καλύτερα τους ενήλικες που εργάζονται σε αυτές;", "sideA": "Επίπεδη ιεραρχία", "sideB": "Κάθετη δομή", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η λατρεία της παραγωγικότητας εναντίον της υπεράσπισης της απραξίας — τι αντικατοπτρίζει καλύτερα αυτό που πραγματικά χρειάζονται οι άνθρωποι από την εργασία;", "sideA": "Παραγωγικότητα", "sideB": "Απραξία", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η ηγεσία ως δεξιότητα που μαθαίνεται εναντίον της ηγεσίας ως έμφυτη ποιότητα — ποια άποψη είναι πιο υπερασπίσιμη εμπειρικά;", "sideA": "Μαθημένη δεξιότητα", "sideB": "Έμφυτη ποιότητα", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Hustle culture εναντίον slow living — ποιο κερδίζει και ποιο πρέπει να κερδίσει;", "sideA": "Hustle culture", "sideB": "Slow living", "level": "advanced", "theme": "routine_A1", "ideasA": [], "ideasB": []},
            {"topic": "Η εταιρική κοινωνική ευθύνη ως πραγματική δέσμευση εναντίον ως διαχείριση φήμης — ποιο πλαίσιο είναι πιο ειλικρινές;", "sideA": "Πραγματική δέσμευση", "sideB": "Διαχείριση φήμης", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η ταυτότητα του ενήλικα ως σταθερή εναντίον διαρκώς υπό κατασκευή — ποια εκδοχή αντικατοπτρίζει καλύτερα τη βιωμένη εμπειρία;", "sideA": "Σταθερή ταυτότητα", "sideB": "Υπό κατασκευή", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η εξημέρωση του φεμινισμού από την καταναλωτική κουλτούρα εναντίον του φεμινισμού που αναδιαμορφώνει πραγματικά την ενήλικη ζωή — τι είναι πιο αληθινό;", "sideA": "Καταναλωτικός φεμινισμός", "sideB": "Πραγματική αναδιαμόρφωση", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η κρίση της μέσης ηλικίας ως παθολογία εναντίον ως νόμιμη επαναξιολόγηση — ποιο πλαίσιο είναι πιο χρήσιμο;", "sideA": "Παθολογία", "sideB": "Επαναξιολόγηση", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η πίεση να είσαι εξαιρετικός εναντίον της αξιοπρέπειας μιας συνηθισμένης ζωής — ποιο είναι το πιο ανθρώπινο ιδανικό;", "sideA": "Εξαιρετικός", "sideB": "Συνηθισμένη αξιοπρέπεια", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η υποχρέωση φροντίδας των ηλικιωμένων γονέων εναντίον της ευθύνης του κράτους — πού πρέπει να πέφτει το βάρος;", "sideA": "Οικογενειακή υποχρέωση", "sideB": "Κρατική ευθύνη", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η ριζική ειλικρίνεια στις σχέσεις εναντίον της στρατηγικής σιωπής — ποια είναι η πιο ηθική προσέγγιση στην οικειότητα;", "sideA": "Ριζική ειλικρίνεια", "sideB": "Στρατηγική σιωπή", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η σκόπιμη επιλογή του κοινωνικού σας κύκλου εναντίον της οργανικής δημιουργίας σχέσεων — τι παράγει πιο αυθεντικές φιλίες ενηλίκων;", "sideA": "Σκόπιμη επιλογή", "sideB": "Οργανική δημιουργία", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η πυρηνική οικογένεια ως η βέλτιστη κοινωνική μονάδα εναντίον ως μια ιστορικά συγκυριακή διευθέτηση — ποια άποψη είναι πιο υπερασπίσιμη;", "sideA": "Βέλτιστη μονάδα", "sideB": "Ιστορική διευθέτηση", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Τεχνοκρατική διακυβέρνηση εναντίον δημοκρατικού λαϊκισμού — τι ενέχει τον μεγαλύτερο μακροπρόθεσμο κίνδυνο για τους ενήλικες πολίτες;", "sideA": "Τεχνοκρατία", "sideB": "Λαϊκισμός", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Διαγενεακή δικαιοσύνη εναντίον τρέχουσας ευημερίας — τι πρέπει να έχει προτεραιότητα στη δημόσια πολιτική;", "sideA": "Διαγενεακή δικαιοσύνη", "sideB": "Τρέχουσα ευημερία", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η υποχρέωση ψήφου εναντίον του δικαιώματος αποχής — ποια είναι η πιο υπερασπίσιμη πολιτική θέση;", "sideA": "Υποχρέωση ψήφου", "sideB": "Δικαίωμα αποχής", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Ο πατριωτισμός ως πολιτική αρετή εναντίον του πατριωτισμού ως γνωστική αποτυχία — ποια εκδοχή είναι πιο πειστική;", "sideA": "Πολιτική αρετή", "sideB": "Γνωστική αποτυχία", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Ο απολυταρχισμός της ελευθερίας του λόγου εναντίον του ρυθμιζόμενου λόγου — τι παράγει καλύτερα αποτελέσματα για τις ενήλικες δημοκρατικές κοινωνίες;", "sideA": "Απολυταρχισμός", "sideB": "Ρυθμιζόμενος λόγος", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Μια καριέρα με νόημα εναντίον μιας δουλειάς που χρηματοδοτεί μια ιδιωτική ζωή με νόημα — ποια είναι η πιο ειλικρινής φιλοδοξία ενήλικα;", "sideA": "Καριέρα με νόημα", "sideB": "Χρηματοδότηση ζωής", "level": "advanced", "theme": "work_culture_C1", "ideasA": [], "ideasB": []},
            {"topic": "Θρησκεία εναντίον κοσμικής φιλοσοφίας — τι αντιμετωπίζει πιο αποτελεσματικά τις υπαρξιακές ανάγκες των σύγχρονων ενηλίκων;", "sideA": "Θρησκεία", "sideB": "Κοσμική φιλοσοφία", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Η εξετασμένη ζωή εναντίον της απορροφημένης ζωής — ποια αξίζει περισσότερο να τη ζεις και ποιος αποφασίζει;", "sideA": "Εξετασμένη ζωή", "sideB": "Απορροφημένη ζωή", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Κληρονομιά (legacy) εναντίον παρουσίας — ποιο είναι πιο συνεκτικό πράγμα για να επιδιώκει ένας ενήλικας;", "sideA": "Κληρονομιά", "sideB": "Παρουσία", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Ο ενήλικας που «επιτέλους το κατάλαβε» εναντίον του ενήλικα που έχει αποδεχτεί ότι δεν θα το καταλάβει ποτέ — ποιος έχει μεγαλύτερη αυτογνωσία;", "sideA": "Το κατάλαβε", "sideB": "Αποδέχτηκε την άγνοια", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Να τα λέτε όλα στον θεραπευτή σας εναντίον του να τα λέτε όλα στον κομμωτή σας — ποια επαγγελματική σχέση είναι πιο θεραπευτικά αποτελεσματική;", "sideA": "Θεραπευτής", "sideB": "Κομμωτής", "level": "advanced", "theme": "psychological_concepts_C1", "ideasA": [], "ideasB": []},
            {"topic": "Το άγχος της Κυριακής ενός ενήλικα με πλήρες πρόγραμμα εναντίον του άγχους ενός ενήλικα με άδειο πρόγραμμα — τι είναι πιο υπαρξιακά ανησυχητικό;", "sideA": "Πλήρες πρόγραμμα", "sideB": "Άδειο πρόγραμμα", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Υπερβολική σκέψη για κάθε σημαντική απόφαση ζωής εναντίον λήψης τους παρορμητικά — ποια στρατηγική έχει καλύτερο εμπειρικό ιστορικό;", "sideA": "Υπερβολική σκέψη", "sideB": "Παρορμητικότητα", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},
            {"topic": "Ενήλικες που διαβάζουν βιβλία αυτοβελτίωσης εναντίον ενηλίκων που αρνούνται να το κάνουν — ποια ομάδα είναι πιο δύσκολη στη συζήτηση σε ένα δείπνο;", "sideA": "Αναγνώστες αυτοβελτίωσης", "sideB": "Αρνούνται", "level": "advanced", "theme": "power_institutions_C1", "ideasA": [], "ideasB": []},

            {"topic": "Υψηλός μισθός εναντίον σύντομης διαδρομής — τι έχει μεγαλύτερη σημασία σε μια δουλειά;", "sideA": "Υψηλός μισθός", "sideB": "Σύντομη διαδρομή", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Συχνή αλλαγή εργασίας εναντίον παραμονής στην ίδια εταιρεία — τι είναι καλύτερο για την καριέρα σας;", "sideA": "Αλλαγή εργασίας", "sideB": "Παραμονή", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία υπερωριών εναντίον αποχώρησης στην ώρα σας κάθε μέρα — ποια είναι η καλύτερη συνήθεια;", "sideA": "Υπερωρίες", "sideB": "Στην ώρα μου", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ένα αφεντικό που είναι αυστηρό εναντίον ενός αφεντικού που είναι χαλαρό — για ποιον είναι καλύτερο να εργάζεστε;", "sideA": "Αυστηρό αφεντικό", "sideB": "Χαλαρό αφεντικό", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία σε μια μεγάλη εταιρεία εναντίον μιας μικρής εταιρείας — τι είναι καλύτερο;", "sideA": "Μεγάλη εταιρεία", "sideB": "Μικρή εταιρεία", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Απόκτηση προαγωγής εναντίον απόκτησης περισσότερου ελεύθερου χρόνου — τι θα επιλέγατε;", "sideA": "Προαγωγή", "sideB": "Ελεύθερος χρόνος", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Αγορά σπιτιού εναντίον ενοικίασης για μια ζωή — ποια είναι η πιο έξυπνη οικονομική απόφαση;", "sideA": "Αγορά", "sideB": "Ενοικίαση", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή στο κέντρο της πόλης εναντίον ζωής στα προάστια — τι είναι καλύτερο;", "sideA": "Κέντρο πόλης", "sideB": "Προάστια", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Δαπάνη χρημάτων σε εμπειρίες εναντίον σε πράγματα — τι σας κάνει πιο ευτυχισμένους;", "sideA": "Εμπειρίες", "sideB": "Πράγματα", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μαγειρική κάθε μέρα εναντίον προετοιμασίας γευμάτων μία φορά την εβδομάδα — τι είναι πιο πρακτικό;", "sideA": "Καθημερινή μαγειρική", "sideB": "Meal prepping", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ύπαρξη καθαριστή εναντίον προσωπικής ενασχόλησης με τις δουλειές του σπιτιού — ποια είναι η καλύτερη επιλογή;", "sideA": "Καθαριστής", "sideB": "Προσωπικά", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή με σύντροφο εναντίον ζωής μόνος — τι είναι καλύτερο για τους ενήλικες;", "sideA": "Με σύντροφο", "sideB": "Μόνος", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Απόκτηση παιδιών νωρίς εναντίον απόκτησης παιδιών αργότερα στη ζωή — τι είναι καλύτερο;", "sideA": "Νωρίς", "sideB": "Αργότερα", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Στενές οικογενειακές σχέσεις εναντίον ανεξαρτησίας από την οικογένεια — τι είναι πιο σημαντικό ως ενήλικας;", "sideA": "Στενές σχέσεις", "sideB": "Ανεξαρτησία", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Γνωριμία με νέους ανθρώπους εναντίον διατήρησης παλιών φιλιών — τι είναι πιο πολύτιμο;", "sideA": "Νέοι άνθρωποι", "sideB": "Παλιοί φίλοι", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Κοινωνικοποίηση μετά τη δουλειά εναντίον επιστροφής κατευθείαν στο σπίτι — τι είναι καλύτερο για τις εργασιακές σχέσεις;", "sideA": "Κοινωνικοποίηση", "sideB": "Σπίτι", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Πηγαίνοντας στο γυμναστήριο εναντίον άσκησης σε εξωτερικούς χώρους — τι είναι καλύτερο για τους ενήλικες;", "sideA": "Γυμναστήριο", "sideB": "Έξω", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Αυστηρή δίαιτα εναντίον κατανάλωσης των πάντων με μέτρο — τι είναι πιο υγιεινό;", "sideA": "Αυστηρή δίαιτα", "sideB": "Μέτρο", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Επίσκεψη σε γιατρό νωρίς εναντίον αναμονής για να δείτε αν θα γίνετε καλύτερα — τι είναι πιο συνετό;", "sideA": "Νωρίς", "sideB": "Αναμονή", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ύπνος οκτώ ωρών εναντίον ύπνου έξι ωρών αλλά με άσκηση — τι είναι καλύτερο για ενέργεια;", "sideA": "8 ώρες", "sideB": "6 ώρες + άσκηση", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μείωση του στρες μέσω του αθλητισμού εναντίον μέσω της χαλάρωσης — τι λειτουργεί καλύτερα;", "sideA": "Αθλητισμός", "sideB": "Χαλάρωση", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Smartphones εναντίον συνομιλίας πρόσωπο με πρόσωπο — τι χρησιμοποιούμε περισσότερο και είναι αυτό πρόβλημα;", "sideA": "Smartphones", "sideB": "Πρόσωπο με πρόσωπο", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Online banking εναντίον επίσκεψης στην τράπεζα — τι είναι καλύτερο;", "sideA": "Online", "sideB": "Στην τράπεζα", "level": "elementary", "theme": "technology_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία με χαρτί εναντίον ψηφιακής εργασίας — τι είναι πιο αποτελεσματικό;", "sideA": "Χαρτί", "sideB": "Ψηφιακά", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Social media για δικτύωση εναντίον συνάντησης ανθρώπων από κοντά — τι είναι πιο χρήσιμο επαγγελματικά;", "sideA": "Social media", "sideB": "Από κοντά", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Οργανωμένες διακοπές εναντίον ανεξάρτητου ταξιδιού — τι είναι καλύτερο για τους ενήλικες;", "sideA": "Οργανωμένες", "sideB": "Ανεξάρτητα", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Σύντομη απόδραση στην πόλη εναντίον διακοπών στην παραλία — ποιος είναι ο καλύτερος τρόπος για να χαλαρώσετε;", "sideA": "Στην πόλη", "sideB": "Στην παραλία", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μία μεγάλη διακοπή το χρόνο εναντίον αρκετών μικρών αποδράσεων — τι είναι καλύτερο;", "sideA": "Μία μεγάλη", "sideB": "Πολλές μικρές", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ταξιδεύοντας ως ζευγάρι εναντίον ταξιδεύοντας μόνος — τι είναι πιο απολαυστικό;", "sideA": "Ως ζευγάρι", "sideB": "Μόνος", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Το να λέτε στον σύντροφό σας για κάθε μικρό πρόβλημα εναντίον του να κρατάτε τα πράγματα για τον εαυτό σας — τι είναι πιο υγιές;", "sideA": "Να τα λέτε όλα", "sideB": "Να τα κρατάτε", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Έλεγχος του τηλεφώνου σας αμέσως το πρωί εναντίον αναμονής μέχρι μετά το πρωινό — ποια είναι η καλύτερη συνήθεια;", "sideA": "Αμέσως", "sideB": "Μετά το πρωινό", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Το να γνωρίζετε τα ονόματα των γειτόνων σας εναντίον του να μην τους γνωρίζετε — ποια είναι η πιο φυσιολογική εμπειρία ενήλικα σήμερα;", "sideA": "Να γνωρίζετε", "sideB": "Να μην γνωρίζετε", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ψώνια στο σούπερ μάρκετ με λίστα εναντίον χωρίς λίστα — ποιος τύπος ανθρώπου έχει καλύτερη ζωή;", "sideA": "Με λίστα", "sideB": "Χωρίς λίστα", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Το να λέτε στο αφεντικό σας ότι είστε άρρωστοι εναντίον του να πηγαίνετε στη δουλειά άρρωστοι — ποια είναι η πιο γενναία επιλογή;", "sideA": "Να το λέτε", "sideB": "Να πηγαίνετε", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εξ αποστάσεως εργασία εναντίον εργασίας στο γραφείο — τι είναι καλύτερο για την παραγωγικότητα και την ευημερία;", "sideA": "Εξ αποστάσεως", "sideB": "Γραφείο", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Εργασιακή ασφάλεια εναντίον επαγγελματικής ανέλιξης — σε τι πρέπει να δίνουν προτεραιότητα οι ενήλικες;", "sideA": "Ασφάλεια", "sideB": "Ανέλιξη", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Έναρξη δικής σας επιχείρησης εναντίον εργασίας για έναν εργοδότη — ποια είναι η καλύτερη επιλογή στα 30;", "sideA": "Δική μου επιχείρηση", "sideB": "Εργοδότης", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Φιλοδοξία εναντίον ισορροπίας μεταξύ επαγγελματικής και προσωπικής ζωής — μπορείτε πραγματικά να έχετε και τα δύο;", "sideA": "Φιλοδοξία", "sideB": "Ισορροπία", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Δικτύωση εναντίον οικοδόμησης δεξιοτήτων — τι προωθεί περισσότερο την καριέρα σας;", "sideA": "Δικτύωση", "sideB": "Δεξιότητες", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ειλικρινής ανατροφοδότηση από έναν διευθυντή εναντίον της ανεξάρτητης εργασίας — τι παρακινεί περισσότερο τους ενήλικες;", "sideA": "Ανατροφοδότηση", "sideB": "Ανεξαρτησία", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Αλλαγή καριέρας στα 40 εναντίον παραμονής στον τομέα σας — ποια είναι η πιο συνετή απόφαση;", "sideA": "Αλλαγή καριέρας", "sideB": "Παραμονή", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Πρόωρη εξόφληση στεγαστικού δανείου εναντίον επένδυσης αυτών των χρημάτων — τι είναι πιο έξυπνο;", "sideA": "Εξόφληση", "sideB": "Επένδυση", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ιδιοκτησία σπιτιού εναντίον μόνιμης ενοικίασης — τι ταιριάζει καλύτερα στη σύγχρονη ενήλικη ζωή;", "sideA": "Ιδιοκτησία", "sideB": "Ενοικίαση", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Αποταμίευση για συνταξιοδότηση νωρίς εναντίον απόλαυσης χρημάτων στα τριάντα σας — τι είναι πιο συνετό;", "sideA": "Αποταμίευση νωρίς", "sideB": "Απόλαυση τώρα", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή κάτω από τις δυνατότητές σας εναντίον δαπανών για να απολαύσετε τη ζωή τώρα — ποια προσέγγιση είναι πιο υγιής;", "sideA": "Κάτω από δυνατότητες", "sideB": "Απόλαυση τώρα", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Δύο εισοδήματα σε ένα νοικοκυριό εναντίον ενός συντρόφου που μένει στο σπίτι — τι λειτουργεί καλύτερα για τις οικογένειες;", "sideA": "Δύο εισοδήματα", "sideB": "Ένας στο σπίτι", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Απόκτηση παιδιών εναντίον επιλογής να μην αποκτήσετε — ποια είναι μια πιο γεμάτη ενήλικη ζωή;", "sideA": "Απόκτηση παιδιών", "sideB": "Χωρίς παιδιά", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Αυστηρή ανατροφή εναντίον ανεκτικής ανατροφής — τι παράγει πιο ευτυχισμένους ενήλικες;", "sideA": "Αυστηρή", "sideB": "Ανεκτική", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Μακροχρόνια σχέση εναντίον παραμονής ελεύθερου — τι είναι καλύτερο για την προσωπική ανάπτυξη;", "sideA": "Σχέση", "sideB": "Ελεύθερος", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Διατήρηση της επαγγελματικής και της προσωπικής ζωής χωριστά εναντίον ενσωμάτωσής τους — τι είναι πιο υγιές;", "sideA": "Χωριστά", "sideB": "Ενσωμάτωση", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Μετακόμιση στο εξωτερικό ως ζευγάρι εναντίον παραμονής κοντά στην οικογένεια — ποια είναι η σωστή απόφαση;", "sideA": "Εξωτερικό", "sideB": "Κοντά στην οικογένεια", "level": "intermediate", "theme": "travel_cultural_B1", "ideasA": [], "ideasB": []},
            {"topic": "Προτεραιότητα στη σωματική υγεία εναντίον της ψυχικής υγείας — σε τι πρέπει να εστιάσουν πρώτα οι ενήλικες;", "sideA": "Σωματική", "sideB": "Ψυχική", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ιδιωτική υγειονομική περίθαλψη εναντίον εξάρτησης από το δημόσιο σύστημα — ποια είναι η καλύτερη στρατηγική για έναν ενήλικα;", "sideA": "Ιδιωτική", "sideB": "Δημόσια", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Τακτικοί ιατρικοί έλεγχοι εναντίον επίσκεψης μόνο όταν είστε άρρωστοι — ποια είναι η πιο έξυπνη προσέγγιση;", "sideA": "Τακτικοί έλεγχοι", "sideB": "Μόνο αν άρρωστος", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Μείωση του αλκοόλ εναντίον μείωσης του στρες — τι έχει μεγαλύτερο αντίκτυπο στην υγεία των ενηλίκων;", "sideA": "Μείωση αλκοόλ", "sideB": "Μείωση στρες", "level": "intermediate", "theme": "mental_health_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ατομική ελευθερία εναντίον κοινοτικής ευθύνης — τι πρέπει να καθοδηγεί τις αποφάσεις των ενηλίκων;", "sideA": "Ελευθερία", "sideB": "Ευθύνη", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Αισιοδοξία για το μέλλον εναντίον ρεαλισμού — ποια είναι η πιο χρήσιμη στάση για τους ενήλικες;", "sideA": "Αισιοδοξία", "sideB": "Ρεαλισμός", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Αλλαγή του κόσμου εναντίον οικοδόμησης μιας σταθερής προσωπικής ζωής — ποια είναι η πιο ειλικρινής φιλοδοξία;", "sideA": "Αλλαγή κόσμου", "sideB": "Σταθερή ζωή", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Προσφορά του χρόνου σας για εθελοντισμό εναντίον δωρεάς χρημάτων — τι κάνει περισσότερο καλό;", "sideA": "Εθελοντισμός", "sideB": "Δωρεά χρημάτων", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ακολουθώντας τις αξίες της γενιάς σας εναντίον της αμφισβήτησής τους — τι είναι πιο αξιοθαύμαστο;", "sideA": "Ακολούθηση", "sideB": "Αμφισβήτηση", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Το να γνωρίζετε πόσα κερδίζουν οι συνάδελφοί σας εναντίον του να μην γνωρίζετε — τι είναι καλύτερο για την αρμονία στο γραφείο;", "sideA": "Να γνωρίζω", "sideB": "Να μην γνωρίζω", "level": "intermediate", "theme": "career_development_B1", "ideasA": [], "ideasB": []},
            {"topic": "Απάντηση στα μηνύματα αμέσως εναντίον του να παίρνετε το χρόνο σας — τι είναι πιο σεβαστό στην ενήλικη ζωή;", "sideA": "Αμέσως", "sideB": "Με το πάσο μου", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Το να παραδέχεστε ότι δεν έχετε ιδέα τι είναι ένα συνταξιοδοτικό ταμείο εναντίον του να προσποιείστε ότι ξέρετε — ποια είναι η πιο οικεία εμπειρία ενήλικα;", "sideA": "Παραδοχή", "sideB": "Προσποίηση", "level": "intermediate", "theme": "housing_mortgages_B1", "ideasA": [], "ideasB": []},
            {"topic": "Ακύρωση σχεδίων την τελευταία στιγμή εναντίον του να βγαίνετε έξω όταν δεν το θέλετε — ποια είναι η χειρότερη συνήθεια ενήλικα;", "sideA": "Ακύρωση", "sideB": "Έξοδος", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},
            {"topic": "Το να μιλάτε ανοιχτά για χρήματα με φίλους εναντίον του να τα κρατάτε ιδιωτικά — ποια είναι η πιο ώριμη προσέγγιση;", "sideA": "Ανοιχτά", "sideB": "Ιδιωτικά", "level": "intermediate", "theme": "society_community_B1", "ideasA": [], "ideasB": []},

            {"topic": "Καφές εναντίον τσαγιού — ποιο είναι το καλύτερο πρωινό ρόφημα;", "sideA": "Καφές", "sideB": "Τσάι", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Εστιατόριο εναντίον σπιτικού φαγητού — τι είναι καλύτερο;", "sideA": "Εστιατόριο", "sideB": "Σπιτικό φαγητό", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινό εναντίον καθόλου πρωινού — τι είναι καλύτερο για εσάς;", "sideA": "Πρωινό", "sideB": "Καθόλου", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Νερό εναντίον χυμού — τι είναι πιο υγιεινό;", "sideA": "Νερό", "sideB": "Χυμός", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Κρέας εναντίον λαχανικών — τι είναι πιο σημαντικό σε ένα γεύμα;", "sideA": "Κρέας", "sideB": "Λαχανικά", "level": "starter", "theme": "food_drink_A0", "ideasA": [], "ideasB": []},
            {"topic": "Σπίτι εναντίον διαμερίσματος — πού είναι καλύτερα να ζεις;", "sideA": "Σπίτι", "sideB": "Διαμέρισμα", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Πόλη εναντίον χωριού — ποιο είναι το καλύτερο μέρος για να ζεις;", "sideA": "Πόλη", "sideB": "Χωριό", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μετρητά εναντίον κάρτας — με τι είναι καλύτερο να πληρώνεις;", "sideA": "Μετρητά", "sideB": "Κάρτα", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Αποταμίευση χρημάτων εναντίον ξοδέματος χρημάτων — τι είναι καλύτερο;", "sideA": "Αποταμίευση", "sideB": "Ξόδεμα", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Ενοικίαση εναντίον αγοράς — τι είναι καλύτερο;", "sideA": "Ενοικίαση", "sideB": "Αγορά", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινή εργασία εναντίον βραδινής εργασίας — τι είναι καλύτερο;", "sideA": "Πρωί", "sideB": "Βράδυ", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Αυτοκίνητο εναντίον λεωφορείου — τι είναι καλύτερο για να πας στη δουλειά;", "sideA": "Αυτοκίνητο", "sideB": "Λεωφορείο", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Περπάτημα εναντίον οδήγησης — τι είναι καλύτερο στην πόλη;", "sideA": "Περπάτημα", "sideB": "Οδήγηση", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Γραφείο εναντίον σπιτιού — ποιο είναι το καλύτερο μέρος για εργασία;", "sideA": "Γραφείο", "sideB": "Σπίτι", "level": "starter", "theme": "work_A1", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινός τύπος εναντίον βραδινού τύπου — τι είναι καλύτερο;", "sideA": "Πρωινός", "sideB": "Βραδινός", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Καλοκαίρι εναντίον χειμώνα — ποια εποχή είναι καλύτερη;", "sideA": "Καλοκαίρι", "sideB": "Χειμώνας", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Σύντομες διακοπές εναντίον μεγάλων διακοπών — τι είναι καλύτερο;", "sideA": "Σύντομες", "sideB": "Μεγάλες", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Τηλεφώνημα εναντίον μηνύματος — τι είναι καλύτερο;", "sideA": "Τηλεφώνημα", "sideB": "Μήνυμα", "level": "starter", "theme": "technology_A1", "ideasA": [], "ideasB": []},
            {"topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι το σωστό;", "sideA": "Πρωί", "sideB": "Βράδυ", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι καλύτερη;", "sideA": "Δευτέρα", "sideB": "Παρασκευή", "level": "starter", "theme": "home_A0", "ideasA": [], "ideasB": []},
            {"topic": "Πολύ ζέστη εναντίον πολύ κρύου — τι είναι χειρότερο;", "sideA": "Ζέστη", "sideB": "Κρύο", "level": "starter", "theme": "weather_A0", "ideasA": [], "ideasB": []},
            {"topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — τι είναι καλύτερο στο αεροπλάνο;", "sideA": "Παράθυρο", "sideB": "Διάδρομος", "level": "starter", "theme": "places_streets_locations_A2", "ideasA": [], "ideasB": []},
            {"topic": "Πλήρης απασχόληση εναντίον μερικής απασχόλησης — τι είναι καλύτερο;", "sideA": "Πλήρης", "sideB": "Μερική", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία σε γραφείο εναντίον εργασίας από το σπίτι — τι προτιμάτε;", "sideA": "Γραφείο", "sideB": "Σπίτι", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μια δουλειά που αγαπάτε εναντίον μιας δουλειάς που πληρώνει καλά — τι είναι πιο σημαντικό;", "sideA": "Δουλειά που αγαπάτε", "sideB": "Καλή αμοιβή", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία με άλλους ανθρώπους εναντίον εργασίας μόνος — τι είναι καλύτερο;", "sideA": "Με άλλους", "sideB": "Μόνος", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μια σύντομη διαδρομή εναντίον μιας μεγάλης διαδρομής για τη δουλειά — τι είναι πιο αποδεκτό;", "sideA": "Σύντομη", "sideB": "Μεγάλη", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή μόνος εναντίον ζωής με σύντροφο — τι είναι καλύτερο;", "sideA": "Μόνος", "sideB": "Σύντροφος", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μεγάλη πόλη εναντίον μικρής πόλης — ποιο είναι το καλύτερο μέρος για να ζεις ως ενήλικας;", "sideA": "Μεγάλη πόλη", "sideB": "Μικρή πόλη", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Μαγειρική στο σπίτι εναντίον φαγητού έξω — τι είναι καλύτερο για την καθημερινή ζωή;", "sideA": "Σπίτι", "sideB": "Έξω", "level": "elementary", "theme": "food_nutrition_A2", "ideasA": [], "ideasB": []},
            {"topic": "Έχοντας παιδιά εναντίον μη έχοντας παιδιά — ποια ζωή είναι καλύτερη;", "sideA": "Παιδιά", "sideB": "Χωρίς παιδιά", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ενοικίαση διαμερίσματος εναντίον αγοράς σπιτιού — τι είναι καλύτερο για τους νέους ενήλικες;", "sideA": "Ενοικίαση", "sideB": "Αγορά", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Άσκηση κάθε μέρα εναντίον ξεκούρασης — τι είναι καλύτερο για την υγεία σας;", "sideA": "Άσκηση", "sideB": "Ξεκούραση", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Πηγαίνοντας στον γιατρό εναντίον αναμονής — τι είναι καλύτερο όταν νιώθετε άρρωστοι;", "sideA": "Γιατρός", "sideB": "Αναμονή", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ύπνος οκτώ ώρες εναντίον λιγότερου ύπνου — τι είναι πιο ρεαλιστικό για τους ενήλικες;", "sideA": "8 ώρες", "sideB": "Λιγότερο", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Περπάτημα προς τη δουλειά εναντίον χρήσης αυτοκινήτου — τι είναι καλύτερο για την υγεία σας;", "sideA": "Περπάτημα", "sideB": "Αυτοκίνητο", "level": "elementary", "theme": "health_body_A2", "ideasA": [], "ideasB": []},
            {"topic": "Online αγορές εναντίον αγορών σε κατάστημα — τι προτιμάτε;", "sideA": "Online", "sideB": "Κατάστημα", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Αποταμίευση για το μέλλον εναντίον απόλαυσης χρημάτων τώρα — τι είναι πιο συνετό;", "sideA": "Αποταμίευση", "sideB": "Απόλαυση τώρα", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Ακριβά πράγματα εναντίον φθηνών πραγμάτων — τι έχει την καλύτερη αξία;", "sideA": "Ακριβά", "sideB": "Φθηνά", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Αγορά καινούργιων εναντίον αγοράς μεταχειρισμένων — τι είναι καλύτερο;", "sideA": "Καινούργια", "sideB": "Μεταχειρισμένα", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Παρακολούθηση τηλεόρασης στο σπίτι εναντίον εξόδου — ποιο είναι το καλύτερο βράδυ;", "sideA": "Τηλεόραση", "sideB": "Έξοδος", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Διακοπές με την οικογένεια εναντίον διακοπών με φίλους — τι είναι καλύτερο;", "sideA": "Οικογένεια", "sideB": "Φίλοι", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Παραμονή στη χώρα σας εναντίον ταξιδιού στο εξωτερικό — ποιες είναι οι καλύτερες διακοπές;", "sideA": "Στη χώρα σας", "sideB": "Εξωτερικό", "level": "elementary", "theme": "transport_travel_A2", "ideasA": [], "ideasB": []},
            {"topic": "Αθλητισμός εναντίον ανάγνωσης — ποιο είναι το καλύτερο χόμπι για ενήλικες;", "sideA": "Αθλητισμός", "sideB": "Ανάγνωση", "level": "elementary", "theme": "leisure_hobbies_A2", "ideasA": [], "ideasB": []},
            {"topic": "Βλέποντας συχνά φίλους εναντίον χρόνου μόνος — τι είναι πιο σημαντικό;", "sideA": "Φίλοι", "sideB": "Χρόνος μόνος", "level": "elementary", "theme": "relationships_dating_A2", "ideasA": [], "ideasB": []},
            {"topic": "Απάντηση στα μηνύματα αμέσως εναντίον του να τα αφήνετε για αργότερα — τι είναι πιο επαγγελματικό;", "sideA": "Αμέσως", "sideB": "Αργότερα", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Πλύσιμο πιάτων αμέσως εναντίον του να τα αφήνετε μέχρι αύριο — τι είναι καλύτερο;", "sideA": "Αμέσως", "sideB": "Αύριο", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},
            {"topic": "Να είστε πάντα νωρίς εναντίον πάντα πέντε λεπτά αργά — τι είναι χειρότερο στη δουλειά;", "sideA": "Νωρίς", "sideB": "Αργά", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Έχοντας ένα πολύ οργανωμένο γραφείο εναντίον ενός ακατάστατου γραφείου — ποιο άτομο είναι πιο παραγωγικό;", "sideA": "Οργανωμένο", "sideB": "Ακατάστατο", "level": "elementary", "theme": "career_A2", "ideasA": [], "ideasB": []},
            {"topic": "Συζήτηση για τη δουλειά στο δείπνο εναντίον καθόλου συζήτησης για τη δουλειά στο δείπνο — ποιος κανόνας είναι καλύτερος;", "sideA": "Συζήτηση δουλειάς", "sideB": "Καμία συζήτηση", "level": "elementary", "theme": "neighbourhood_A2", "ideasA": [], "ideasB": []},

            {
                "topic": "Γλώσσα: Συστατική έναντι Εκφραστικής",
                "sideA": "Συστατική",
                "sideB": "Εκφραστική",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Διαμορφώνει την πραγματικότητα",
                    "Περιορίζει τη σκέψη"
                ],
                "ideasB": [
                    "Αντανακλά την πραγματικότητα",
                    "Εργαλείο για τη σκέψη"
                ]
            },
            {
                "topic": "Ακρίβεια έναντι Ασάφειας",
                "sideA": "Ακρίβεια",
                "sideB": "Ασάφεια",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Σαφήνεια",
                    "Αποτελεσματικότητα"
                ],
                "ideasB": [
                    "Απόχρωση",
                    "Διπλωματία"
                ]
            },
            {
                "topic": "Ρητορική έναντι Λογικής",
                "sideA": "Ρητορική",
                "sideB": "Λογική",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Πειστική δύναμη",
                    "Συναισθηματική έκκληση"
                ],
                "ideasB": [
                    "Αντικειμενική αλήθεια",
                    "Δομική εγκυρότητα"
                ]
            },
            {
                "topic": "Κυριολεκτική έναντι Ερμηνευτικής Σημασίας",
                "sideA": "Κυριολεκτική",
                "sideB": "Ερμηνευτική",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Πρόθεση συγγραφέα",
                    "Σταθερότητα"
                ],
                "ideasB": [
                    "Ανταπόκριση αναγνώστη",
                    "Εξελισσόμενο πλαίσιο"
                ]
            },
            {
                "topic": "Επιστημονική Συναίνεση έναντι Επιστημολογικής Ταπεινότητας",
                "sideA": "Συναίνεση",
                "sideB": "Ταπεινότητα",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Εδραιωμένη γνώση",
                    "Αυθεντία εμπειρογνωμόνων"
                ],
                "ideasB": [
                    "Δεκτικότητα στη διόρθωση",
                    "Αναγνώριση ορίων"
                ]
            },
            {
                "topic": "Εμπειρογνωμοσύνη έναντι Βιωμένης Εμπειρίας",
                "sideA": "Εμπειρογνωμοσύνη",
                "sideB": "Βιωμένη Εμπειρία",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Επιστημονική αυστηρότητα",
                    "Αντικειμενικά δεδομένα"
                ],
                "ideasB": [
                    "Αυθεντική αλήθεια",
                    "Συμφραζόμενη ενόραση"
                ]
            },
            {
                "topic": "Αμφιβολία: Αρετή έναντι Παράλυσης",
                "sideA": "Αρετή",
                "sideB": "Παράλυση",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Κριτική σκέψη",
                    "Σκεπτικισμός"
                ],
                "ideasB": [
                    "Αναποφασιστικότητα",
                    "Έλλειψη δράσης"
                ]
            },
            {
                "topic": "Αφήγηση έναντι Δεδομένων",
                "sideA": "Αφήγήση",
                "sideB": "Δεδομένα",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Συναισθηματική επίδραση",
                    "Ανθρώπινη σύνδεση"
                ],
                "ideasB": [
                    "Στατιστική αλήθεια",
                    "Επεκτασιμότητα"
                ]
            },
            {
                "topic": "Νομιμότητα: Συναίνεση έναντι Αποτελέσματος",
                "sideA": "Συναίνεση",
                "sideB": "Αποτέλεσμα",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Δημοκρατική διαδικασία",
                    "Ηθικό δικαίωμα"
                ],
                "ideasB": [
                    "Αποτελεσματικότητα",
                    "Αποτελεσματική διακυβέρνηση"
                ]
            },
            {
                "topic": "Κράτος: Εγγυητής της Ελευθερίας έναντι Απειλής",
                "sideA": "Εγγυητής",
                "sideB": "Απειλή",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Κράτος δικαίου",
                    "Προστασία δικαιωμάτων"
                ],
                "ideasB": [
                    "Κατάχρηση εξουσίας",
                    "Επιτήρηση"
                ]
            },
            {
                "topic": "Πολιτική Δικαιωμάτων έναντι Πολιτικής Ευθυνών",
                "sideA": "Δικαιώματα",
                "sideB": "Ευθύνες",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Ατομική ελευθερία",
                    "Νομική προστασία"
                ],
                "ideasB": [
                    "Συλλογικό καθήκον",
                    "Κοινωνική συνοχή"
                ]
            },
            {
                "topic": "Ουδετερότητα έναντι Διακυβέρνησης με Αξίες",
                "sideA": "Ουδετερότητα",
                "sideB": "Με αξίες",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Αμεροληψία",
                    "Δικαιοσύνη"
                ],
                "ideasB": [
                    "Ηθική κατεύθυνση",
                    "Κοινωνικός σκοπός"
                ]
            },
            {
                "topic": "Πρόθεση έναντι Υποδοχής στην Τέχνη",
                "sideA": "Πρόθεση",
                "sideB": "Υποδοχή",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Όραμα δημιουργού",
                    "Αρχικό πλαίσιο"
                ],
                "ideasB": [
                    "Σημασία για το κοινό",
                    "Πολιτιστικός αντίκτυπος"
                ]
            },
            {
                "topic": "Αισθητική έναντι Ηθικής Αξίας",
                "sideA": "Αισθητική",
                "sideB": "Ηθική",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Η τέχνη για την τέχνη",
                    "Καθαρή ομορφιά"
                ],
                "ideasB": [
                    "Κοινωνική χρησιμότητα",
                    "Ηθικός αντίκτυπος"
                ]
            },
            {
                "topic": "Πρωτοπορία έναντι Προσβασιμότητας",
                "sideA": "Πρωτοπορία",
                "sideB": "Προσβασιμότητα",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Διεύρυνση των ορίων",
                    "Πνευματική πρόκληση"
                ],
                "ideasB": [
                    "Συμπεριληπτικότητα",
                    "Δημοκρατική τέχνη"
                ]
            },
            {
                "topic": "Θεσμική Τέχνη έναντι Περιθωριακής Τέχνης",
                "sideA": "Θεσμική",
                "sideB": "Περιθωριακή",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Ιστορική διατήρηση",
                    "Πρότυπα"
                ],
                "ideasB": [
                    "Ακατέργαστη αυθεντικότητα",
                    "Αντισυστημική"
                ]
            },
            {
                "topic": "Αρχή της Πρόληψης έναντι της Προδραστικότητας",
                "sideA": "Προληπτική",
                "sideB": "Προδραστική",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Αποφυγή κινδύνου",
                    "Προτεραιότητα στην ασφάλεια"
                ],
                "ideasB": [
                    "Καινοτομία",
                    "Αποδοχή της αλλαγής"
                ]
            },
            {
                "topic": "Επιστημονική Πρόοδος: Εγγενώς Καλή έναντι Ουδέτερης",
                "sideA": "Εγγενώς Καλή",
                "sideB": "Ηθικά Ουδέτερη",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Αξίες του Διαφωτισμού",
                    "Επίλυση προβλημάτων"
                ],
                "ideasB": [
                    "Ανησυχία διπλής χρήσης",
                    "Ανθρώπινη ευθύνη"
                ]
            },
            {
                "topic": "Υπαρξιακός Κίνδυνος έναντι Τωρινού Υποφέρειν",
                "sideA": "Υπαρξιακός Κίνδυνος",
                "sideB": "Τωρινό Υποφέρειν",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Μακροπρόθεσμη επιβίωση",
                    "Μελλοντικές γενιές"
                ],
                "ideasB": [
                    "Άμεση ανακούφιση",
                    "Επείγουσα φτώχεια"
                ]
            },
            {
                "topic": "Ανθρώπινη Συνείδηση έναντι Τεχνητής Γενικής Νοημοσύνης",
                "sideA": "Συνείδηση",
                "sideB": "Τεχνητή Γενική Νοημοσύνη",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Βιολογική μοναδικότητα",
                    "Υποκειμενική εμπειρία"
                ],
                "ideasB": [
                    "Υπολογιστική ισχύς",
                    "Αλγοριθμική λογική"
                ]
            },
            {
                "topic": "Πρόοδος: Πραγματικότητα έναντι Ψευδαίσθησης",
                "sideA": "Πραγματικότητα",
                "sideB": "Ψευδαίσθηση",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Τεχνολογική πρόοδος",
                    "Βελτιωμένη ποιότητα ζωής"
                ],
                "ideasB": [
                    "Κυκλική ιστορία",
                    "Νέα προβλήματα"
                ]
            },
            {
                "topic": "Φιλελεύθερη Τάξη έναντι Πολυπολικού Κόσμου",
                "sideA": "Φιλελεύθερη Τάξη",
                "sideB": "Πολυπολικότητα",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Παγκόσμιες αξίες",
                    "Παγκόσμια σταθερότητα"
                ],
                "ideasB": [
                    "Ποικίλη ισχύς",
                    "Πολιτιστική κυριαρχία"
                ]
            },
            {
                "topic": "Μνήμη έναντι Λήθης",
                "sideA": "Μνήμη",
                "sideB": "Λήθη",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Μάθηση από την ιστορία",
                    "Ταυτότητα"
                ],
                "ideasB": [
                    "Προχώρημα μπροστά",
                    "Ξεπέρασμα τραυμάτων"
                ]
            },
            {
                "topic": "Η Τραγωδία των Κοινών έναντι της Συνεργασίας",
                "sideA": "Τραγωδία",
                "sideB": "Συνεργασία",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Προσωπικό συμφέρον",
                    "Εξάντληση πόρων"
                ],
                "ideasB": [
                    "Αμοιβαίο όφελος",
                    "Συλλογική διαχείριση"
                ]
            },
            {
                "topic": "Κόκκινο εναντίον Μπλε — ποιο χρώμα είναι καλύτερο;",
                "sideA": "Κόκκινο",
                "sideB": "Μπλε",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κίτρινο εναντίον Πράσινου — ποιο χρώμα είναι πιο χαρούμενο;",
                "sideA": "Κίτρινο",
                "sideB": "Πράσινο",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαύρο εναντίον Λευκού — ποιο χρώμα προτιμάτε;",
                "sideA": "Μαύρο",
                "sideB": "Λευκό",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Μοβ — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Μοβ",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κύκλος εναντίον Τετραγώνου — ποιο σχήμα είναι πιο χρήσιμο;",
                "sideA": "Κύκλος",
                "sideB": "Τετράγωνο",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλοι εναντίον Μικρών αριθμών — ποιοι είναι πιο διασκεδαστικοί;",
                "sideA": "Μεγάλοι",
                "sideB": "Μικροί",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρίγωνο εναντίον Ορθογωνίου — ποιο σχήμα είναι καλύτερο;",
                "sideA": "Τρίγωνο",
                "sideB": "Ορθογώνιο",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μπάλα εναντίον Κούκλας — ποιο παιχνίδι είναι καλύτερο;",
                "sideA": "Μπάλα",
                "sideB": "Κούκλα",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μολύβι εναντίον Στυλό — με ποιο είναι καλύτερο να γράφεις;",
                "sideA": "Μολύβι",
                "sideB": "Στυλό",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιβλίο εναντίον Εικόνας — από ποιο είναι καλύτερο να μαθαίνεις;",
                "sideA": "Βιβλίο",
                "sideB": "Εικόνα",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον Πατώματος — πού είναι καλύτερα να κάθεσαι;",
                "sideA": "Καρέκλα",
                "sideB": "Πάτωμα",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτα εναντίον Σκύλου — ποιο ζώο είναι καλύτερο;",
                "sideA": "Γάτα",
                "sideB": "Σκύλος",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψάρι εναντίον Πουλιού — ποιο είναι καλύτερο κατοικίδιο;",
                "sideA": "Ψάρι",
                "sideB": "Πουλί",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλα εναντίον Μικρών ζώων — ποια είναι πιο συμπαθητικά;",
                "sideA": "Μεγάλα",
                "sideB": "Μικρά",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουνέλι εναντίον Χάμστερ — ποιο είναι πιο χαριτωμένο;",
                "sideA": "Κουνέλι",
                "sideB": "Χάμστερ",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Νερό εναντίον Χυμού — ποιο είναι καλύτερο να πίνεις;",
                "sideA": "Νερό",
                "sideB": "Χυμός",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μήλο εναντίον Μπανάνας — ποιο φρούτο είναι καλύτερο;",
                "sideA": "Μήλο",
                "sideB": "Μπανάνα",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψωμί εναντίον Ρυζιού — ποιο είναι καλύτερο να τρως;",
                "sideA": "Ψωμί",
                "sideB": "Ρύζι",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα εναντίον Νερού — ποιο προτιμάτε;",
                "sideA": "Γάλα",
                "sideB": "Νερό",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με την οικογένεια εναντίον Μόνος — ποιο είναι καλύτερο;",
                "sideA": "Με οικογένεια",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αδελφός εναντίον Αδελφής — ποιο είναι καλύτερο;",
                "sideA": "Αδελφός",
                "sideB": "Αδελφή",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλη εναντίον Μικρής οικογένειας — ποια είναι πιο ωραία;",
                "sideA": "Μεγάλη",
                "sideB": "Μικρή",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγαλύτερο εναντίον Μικρότερου παιδιού — ποιο είναι καλύτερο;",
                "sideA": "Μεγαλύτερο",
                "sideB": "Μικρότερο",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Απογευματινού σχολείου — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Απόγευμα",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση εναντίον Μαθηματικών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Ανάγνωση",
                "sideB": "Μαθηματικά",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολείο εναντίον Σπιτιού — ποιο είναι καλύτερο;",
                "sideA": "Σχολείο",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασίες εναντίον Καθόλου εργασιών — ποιο βοηθάει περισσότερο;",
                "sideA": "Εργασίες",
                "sideB": "Καμία",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μόνος εναντίον Με συνεργάτη — ποιο προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Συνεργάτης",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χαρτί εναντίον Υπολογιστή — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Δείπνου — ποιο γεύμα είναι πιο σημαντικό;",
                "sideA": "Πρωινό",
                "sideB": "Δείπνο",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστό εναντίον Κρύου φαγητού — ποιο είναι καλύτερο;",
                "sideA": "Ζεστό",
                "sideB": "Κρύο",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Εστιατορίου — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Εστιατόριο",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γλυκό εναντίον Αλμυρού — ποιο προτιμάτε;",
                "sideA": "Γλυκό",
                "sideB": "Αλμυρό",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον Έτοιμου φαγητού — ποιο είναι πιο ωραίο;",
                "sideA": "Μαγειρική",
                "sideB": "Έτοιμο",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Αργοπορημένου ξυπνήματος — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωί εναντίον Βράδυ — ποιο μέρος της ημέρας είναι πιο ωραίο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθημερινές εναντίον Σαββατοκύριακου — ποιο προτιμάτε;",
                "sideA": "Καθημερινές",
                "sideB": "Σαββατοκύριακο",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καλοκαίρι εναντίον Χειμώνα — ποια εποχή είναι καλύτερη;",
                "sideA": "Καλοκαίρι",
                "sideB": "Χειμώνας",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος νωρίς εναντίον Ύπνου αργά — ποιο είναι πιο υγιεινό;",
                "sideA": "Νωρίς",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Διαμερίσματος — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Διαμέρισμα",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πόλη εναντίον Εξοχής — ποιο είναι καλύτερο μέρος για να ζεις;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπνοδωμάτιο εναντίον Καθιστικού — ποιο δωμάτιο προτιμάτε;",
                "sideA": "Υπνοδωμάτιο",
                "sideB": "Καθιστικό",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιτραπέζια εναντίον Παιχνιδιών έξω — ποια είναι πιο διασκεδαστικά;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τηλεόραση εναντίον Βιβλίου — ποιο είναι καλύτερο;",
                "sideA": "Τηλεόραση",
                "sideB": "Βιβλίο",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αθλητισμός εναντίον Βιντεοπαιχνιδιών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Αθλητισμός",
                "sideB": "Βιντεοπαιχνίδια",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωγραφική εναντίον Τραγουδιού — ποιο χόμπι είναι καλύτερο;",
                "sideA": "Ζωγραφική",
                "sideB": "Τραγούδι",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παιχνίδι μόνος εναντίον Με φίλους — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Φίλοι",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κολύμβηση εναντίον Τρεξίματος — ποιο σπορ προτιμάτε;",
                "sideA": "Κολύμβηση",
                "sideB": "Τρέξιμο",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μουσική εναντίον Αθλητισμού — ποιο είναι καλύτερο χόμπι;",
                "sideA": "Μουσική",
                "sideB": "Αθλητισμός",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώα φάρμας εναντίον Άγριων ζώων — ποια είναι πιο ενδιαφέροντα;",
                "sideA": "Φάρμα",
                "sideB": "Άγρια",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βροχή εναντίον Λιακάδας — ποιο καιρό προτιμάτε;",
                "sideA": "Βροχή",
                "sideB": "Λιακάδα",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θάλασσα εναντίον Βουνού — ποιο είναι καλύτερο για διακοπές;",
                "sideA": "Θάλασσα",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λουλούδια εναντίον Δέντρων — ποια είναι πιο όμορφα;",
                "sideA": "Λουλούδια",
                "sideB": "Δέντρα",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυτοκίνητο εναντίον Λεωφορείου — ποιο είναι καλύτερο;",
                "sideA": "Αυτοκίνητο",
                "sideB": "Λεωφορείο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περπάτημα εναντίον Ποδηλάτου — ποιο είναι καλύτερο για μετακίνηση;",
                "sideA": "Περπάτημα",
                "sideB": "Ποδήλατο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομες εναντίον Μεγάλων διακοπών — ποιο είναι καλύτερο;",
                "sideA": "Σύντομες",
                "sideB": "Μεγάλες",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξίδι μόνος εναντίον Με οικογένεια — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Οικογένεια",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online αγορές vs Αγορές με φυσική παρουσία",
                "sideA": "Online",
                "sideB": "Φυσική παρουσία",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Ευκολία",
                    "Καλύτερες τιμές"
                ],
                "ideasB": [
                    "Δοκιμή ειδών",
                    "Άμεση ικανοποίηση"
                ]
            },
            {
                "topic": "Χάρτινα βιβλία vs E-books",
                "sideA": "Χαρτί",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Μυρωδιά/Αίσθηση",
                    "Συλλεκτικό"
                ],
                "ideasB": [
                    "Φορητότητα",
                    "Εξοικονόμηση χώρου"
                ]
            },
            {
                "topic": "Τηλεργασία vs Εργασία στο γραφείο",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Όχι μετακινήσεις",
                    "Ευελιξία"
                ],
                "ideasB": [
                    "Κοινωνικοποίηση",
                    "Καλύτερη εστίαση"
                ]
            },
            {
                "topic": "Ηλεκτρικά αυτοκίνητα vs Αυτοκίνητα βενζίνης",
                "sideA": "Ηλεκτρικά",
                "sideB": "Βενζίνη",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Περιβάλλον",
                    "Ησυχία"
                ],
                "ideasB": [
                    "Αυτονομία",
                    "Ταχύτητα φόρτισης"
                ]
            },
            {
                "topic": "Μελέτη το πρωί ή μελέτη το βράδυ — πότε είναι καλύτερα;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυστηροί δάσκαλοι ή φιλικοί δάσκαλοι — ποιοι βοηθούν περισσότερο τους μαθητές;",
                "sideA": "Αυστηροί",
                "sideB": "Φιλικοί",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση με σχολικό βιβλίο ή μάθηση με βίντεο — τι είναι πιο αποτελεσματικό;",
                "sideA": "Βιβλίο",
                "sideB": "Βίντεο",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομα μαθήματα ή μεγάλα μαθήματα — ποια σε βοηθούν να μαθαίνεις καλύτερα;",
                "sideA": "Σύντομα",
                "sideB": "Μεγάλα",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ομαδικές εργασίες ή ατομικές εργασίες — τι προτιμάτε;",
                "sideA": "Ομαδικές",
                "sideB": "Ατομικές",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολική στολή ή καθημερινά ρούχα στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Στολή",
                "sideB": "Καθημερινά",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπιτικό φαγητό ή φαστ φουντ — τι είναι καλύτερο;",
                "sideA": "Σπιτικό",
                "sideB": "Φαστ φουντ",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρία μεγάλα γεύματα ή πολλά μικρά σνακ — τι είναι πιο υγιεινό;",
                "sideA": "Μεγάλα γεύματα",
                "sideB": "Σνακ",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγικό φαγητό ή κρέας — ποια διατροφή είναι καλύτερη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίνοντας τσάι ή πίνοντας καφέ — τι είναι καλύτερο;",
                "sideA": "Τσάι",
                "sideB": "Καφές",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρώγοντας μόνος ή τρώγοντας με άλλους — τι προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Με άλλους",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παίζοντας ένα ομαδικό άθλημα ή ένα ατομικό άθλημα — τι είναι καλύτερο;",
                "sideA": "Ομαδικό",
                "sideB": "Ατομικό",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας τον ελεύθερο χρόνο μέσα ή έξω — τι είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή θέατρο — ποια είναι η καλύτερη βραδινή έξοδος;",
                "sideA": "Σινεμά",
                "sideB": "Θέατρο",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακούγοντας μουσική ή παίζοντας ένα όργανο — τι είναι πιο απολαυστικό;",
                "sideA": "Ακρόαση",
                "sideB": "Εκτέλεση",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιντεοπαιχνίδια ή επιτραπέζια παιχνίδια — ποια έχουν περισσότερη πλάκα;",
                "sideA": "Βιντεοπαιχνίδια",
                "sideB": "Επιτραπέζια",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πηγαίνοντας για ψώνια ή μένοντας στο σπίτι — ποιος είναι ο καλύτερος τρόπος για να περάσετε το Σαββατοκύριακο;",
                "sideA": "Ψώνια",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινητό τηλέφωνο ή υπολογιστής — τι είναι πιο χρήσιμο στην καθημερινή ζωή;",
                "sideA": "Κινητό",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Στέλνοντας ένα μήνυμα ή κάνοντας ένα τηλεφώνημα — τι είναι καλύτερο;",
                "sideA": "Μήνυμα",
                "sideB": "Κλήση",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ηλεκτρονικό βιβλίο ή χάρτινο βιβλίο — τι προτιμάτε να διαβάζετε;",
                "sideA": "E-book",
                "sideB": "Χάρτινο βιβλίο",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βγάζοντας φωτογραφίες με το κινητό σου ή με μια κάμερα — τι δίνει καλύτερα αποτελέσματα;",
                "sideA": "Κινητό",
                "sideB": "Κάμερα",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διακοπές στην παραλία ή διακοπές στο βουνό — τι είναι καλύτερο;",
                "sideA": "Παραλία",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας με τρένο ή ταξιδεύοντας με αεροπλάνο — τι είναι καλύτερο;",
                "sideA": "Τρένο",
                "sideB": "Αεροπλάνο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επίσκεψη σε μια διάσημη πόλη ή επίσκεψη σε ένα μικρό χωριό — τι είναι πιο ενδιαφέρον;",
                "sideA": "Πόλη",
                "sideB": "Χωριό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαμονή σε ξενοδοχείο ή διαμονή σε μια τοπική οικογένεια — τι προτιμάτε;",
                "sideA": "Ξενοδοχείο",
                "sideB": "Τοπική οικογένεια",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας στο εξωτερικό ή εξερευνώντας τη δική σου χώρα — τι αξίζει περισσότερο;",
                "sideA": "Εξωτερικό",
                "sideB": "Δική σου χώρα",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έχοντας πολλούς φίλους ή έχοντας λίγους στενούς φίλους — τι είναι καλύτερο;",
                "sideA": "Πολλοί",
                "sideB": "Στενοί φίλοι",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συνάντηση με φίλους από κοντά ή συνομιλία στο διαδίκτυο — τι είναι πιο ικανοποιητικό;",
                "sideA": "Από κοντά",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας με τους γονείς ή ζώντας σε ένα φοιτητικό διαμέρισμα — τι είναι καλύτερο για τους νέους;",
                "sideA": "Γονείς",
                "sideB": "Φοιτητικό σπίτι",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γιορτάζοντας τα γενέθλια στο σπίτι ή βγαίνοντας έξω — τι είναι πιο ωραίο;",
                "sideA": "Σπίτι",
                "sideB": "Έξοδος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση χρημάτων ή δαπάνη χρημάτων — τι είναι πιο συνετό;",
                "sideA": "Αποταμίευση",
                "sideB": "Ξόδεμα",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία με μερική απασχόληση κατά τη διάρκεια των σπουδών ή εστίαση μόνο στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Μερική απασχόληση",
                "sideB": "Μόνο σχολείο",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κερδίζοντας πολλά χρήματα ή έχοντας ελεύθερο χρόνο — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Χρήματα",
                "sideB": "Ελεύθερος χρόνος",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαδικτυακή μάθηση ή μάθηση στην τάξη — τι είναι πιο αποτελεσματικό;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποστήθιση γεγονότων ή μάθηση πώς να βρίσκεις πληροφορίες — ποια δεξιότητα είναι πιο σημαντική;",
                "sideA": "Γεγονότα",
                "sideB": "Εύρεση info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πανεπιστημιακή εκπαίδευση ή επαγγελματική κατάρτιση — ποιος είναι ο καλύτερος δρόμος;",
                "sideA": "Πανεπιστήμιο",
                "sideB": "Επαγγελματική",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξετάσεις ή συνεχής αξιολόγηση — ποιος είναι ο πιο δίκαιος τρόπος αξιολόγησης των μαθητών;",
                "sideA": "Εξετάσεις",
                "sideB": "Συνεχής",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εκμάθηση μιας ξένης γλώσσας στο σχολείο ή διαμονή στο εξωτερικό — τι είναι πιο αποτελεσματικό;",
                "sideA": "Σχολείο",
                "sideB": "Εξωτερικό",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολεία αρρένων ή θηλέων εναντίον μικτών σχολείων — ποια είναι καλύτερα για τους μαθητές;",
                "sideA": "Αρρένων/Θηλέων",
                "sideB": "Μικτά",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέσα κοινωνικής δικτύωσης ή επικοινωνία πρόσωπο με πρόσωπο — τι είναι καλύτερο για τη διατήρηση της επαφής;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπηρεσίες streaming ή παραδοσιακή τηλεόραση — τι είναι καλύτερο;",
                "sideA": "Streaming",
                "sideB": "Παραδοσιακή TV",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία από το σπίτι ή εργασία σε γραφείο — τι είναι πιο παραγωγικό;",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση ειδήσεων στο διαδίκτυο ή ανάγνωση εφημερίδας — τι είναι πιο αξιόπιστο;",
                "sideA": "Online ειδήσεις",
                "sideB": "Εφημερίδα",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας χρόνο στα μέσα κοινωνικής δικτύωσης ή περνώντας χρόνο στη φύση — τι είναι καλύτερο για την ψυχική σας υγεία;",
                "sideA": "Social media",
                "sideB": "Φύση",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χρήση δημόσιων συγκοινωνιών ή οδήγηση αυτοκινήτου — τι είναι καλύτερο για την κοινωνία;",
                "sideA": "Δημόσιες συγκοινωνίες",
                "sideB": "Αυτοκίνητο",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αγορά μεταχειρισμένων ρούχων ή αγορά καινούργιων ρούχων — ποια είναι η καλύτερη συνήθεια;",
                "sideA": "Μεταχειρισμένα",
                "sideB": "Καινούργια",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή στην πόλη ή ζωή στην εξοχή — τι ταιριάζει καλύτερα στους νέους;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγία ή κατανάλωση κρέατος — τι είναι καλύτερο για τον πλανήτη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ατομικές αλλαγές στον τρόπο ζωής ή κυβερνητική δράση — τι προσφέρει περισσότερο στο περιβάλλον;",
                "sideA": "Ατομικά",
                "sideB": "Κυβέρνηση",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μια σταθερή δουλειά ή μια δημιουργική καριέρα — ποια είναι η καλύτερη επιλογή ζωής;",
                "sideA": "Σταθερή δουλειά",
                "sideB": "Δημιουργική",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξεκινώντας τη δική σου επιχείρηση ή δουλεύοντας για μια εταιρεία — τι είναι καλύτερο;",
                "sideA": "Δική σου επιχείρηση",
                "sideB": "Εταιρεία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υψηλός μισθός ή ικανοποίηση από την εργασία — τι έχει μεγαλύτερη σημασία στη δουλειά;",
                "sideA": "Μισθός",
                "sideB": "Ικανοποίηση",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δουλεύοντας πολλές ώρες ή έχοντας ισορροπία επαγγελματικής και προσωπικής ζωής — τι οδηγεί σε μεγαλύτερη επιτυχία;",
                "sideA": "Πολλές ώρες",
                "sideB": "Ισορροπία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιλογή καριέρας με βάση το πάθος ή με βάση τις προοπτικές απασχόλησης — τι είναι πιο συνετό;",
                "sideA": "Πάθος",
                "sideB": "Προοπτικές",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας ως άτομο ή δίνοντας προτεραιότητα στην κοινότητα — τι είναι πιο σημαντικό;",
                "sideA": "Άτομο",
                "sideB": "Κοινότητα",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παραδοσιακές αξίες ή σύγχρονες αξίες — ποιες είναι πιο σημαντικό να διατηρηθούν;",
                "sideA": "Παραδοσιακές",
                "sideB": "Σύγχρονες",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εθελοντισμός ή δωρεά χρημάτων σε φιλανθρωπίες — τι βοηθάει περισσότερο;",
                "sideA": "Εθελοντισμός",
                "sideB": "Δωρεά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φήμη ή κάνοντας τη διαφορά αθόρυβα — ποιος είναι ο καλύτερος στόχος στη ζωή;",
                "sideA": "Φήμη",
                "sideB": "Αθόρυβη διαφορά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακολουθώντας τους κανόνες ή σκεπτόμενος για τον εαυτό σου — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Κανόνες",
                "sideB": "Δική σου σκέψη",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σωματική υγεία ή ψυχική υγεία — ποια πρέπει να είναι η προτεραιότητα;",
                "sideA": "Σωματική",
                "sideB": "Ψυχική",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρόληψη ή θεραπεία — ποια είναι η καλύτερη προσέγγιση στην υγειονομική περίθαλψη;",
                "sideA": "Πρόληψη",
                "sideB": "Θεραπεία",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανταγωνιστικός αθλητισμός ή άσκηση για διασκέδαση — τι είναι καλύτερο για σένα;",
                "sideA": "Ανταγωνιστικός",
                "sideB": "Διασκέδαση",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ιδιωτική υγειονομική περίθαλψη ή δημόσια υγειονομική περίθαλψη — ποιο σύστημα είναι πιο δίκαιο;",
                "sideA": "Ιδιωτική",
                "sideB": "Δημόσια",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή λογοτεχνία — ποια είναι η πιο ισχυρή μορφή τέχνης;",
                "sideA": "Σινεμά",
                "sideB": "Λογοτεχνία",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μοντέρνα τέχνη ή κλασική τέχνη — τι είναι πιο πολύτιμο;",
                "sideA": "Μοντέρνα",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διατήρηση παλαιών κτιρίων ή ανέγερση νέων — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Διατήρηση παλαιών",
                "sideB": "Ανέγερση νέων",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τοπική κουλτούρα ή παγκοσμιοποίηση — τι εμπλουτίζει περισσότερο τις κοινότητες;",
                "sideA": "Τοπική",
                "sideB": "Παγκοσμιοποίηση",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κοινωνικά δίκτυα εναντίον δια ζώσης επικοινωνίας — τι είναι καλύτερο για τη δημιουργία σχέσεων;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αστική ζωή εναντίον αγροτικής ζωής — ποια προσφέρει καλύτερη ποιότητα ζωής;",
                "sideA": "Αστική",
                "sideB": "Αγροτική",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαδικτυακή μάθηση εναντίον παραδοσιακής τάξης — ποιο είναι το μέλλον της εκπαίδευσης;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανεώσιμες πηγές ενέργειας εναντίον πυρηνικής ενέργειας — ποια είναι η καλύτερη λύση για το κλίμα;",
                "sideA": "Ανανεώσιμες",
                "sideB": "Πυρηνική",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γρήγορη μόδα εναντίον βιώσιμης ένδυσης — μπορούμε να αντέξουμε οικονομικά να είμαστε ηθικοί;",
                "sideA": "Fast fashion",
                "sideB": "Βιώσιμη",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δημιουργικότητα ΤΝ εναντίον ανθρώπινης καλλιτεχνίας — μπορούν οι μηχανές να δημιουργήσουν πραγματικά τέχνη;",
                "sideA": "Δημιουργικότητα ΤΝ",
                "sideB": "Ανθρώπινη τέχνη",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξερεύνηση του διαστήματος εναντίον εξερεύνησης των βαθιών θαλασσών — πού πρέπει να εστιάσουμε τους πόρους μας;",
                "sideA": "Διάστημα",
                "sideB": "Βαθιά θάλασσα",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψηφιακό απόρρητο εναντίον εθνικής ασφάλειας — δικαιολογείται ποτέ η ολοκληρωτική παρακολούθηση;",
                "sideA": "Απόρρητο",
                "sideB": "Ασφάλεια",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γενετικά τροποποιημένα τρόφιμα εναντίον βιολογικής γεωργίας — πώς πρέπει να θρέψουμε τον κόσμο;",
                "sideA": "ΓΤΟ",
                "sideB": "Βιολογική",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθολικό βασικό εισόδημα εναντίον προγραμμάτων εγγύησης θέσεων εργασίας — ποιο είναι το καλύτερο κοινωνικό δίχτυ ασφαλείας;",
                "sideA": "ΚΒΕ",
                "sideB": "Εγγύηση εργασίας",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Πορτοκαλί — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Πορτοκαλί",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ο αριθμός 1 εναντίον του αριθμού 10 — ποιος αριθμός είναι καλύτερος;",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον καναπέ — ποιο είναι πιο άνετο;",
                "sideA": "Καρέκλα",
                "sideB": "Καναπές",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τσάντα εναντίον κουτιού — ποιο είναι πιο χρήσιμο;",
                "sideA": "Τσάντα",
                "sideB": "Κουτί",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λιοντάρι εναντίον ελέφαντα — ποιο ζώο είναι καλύτερο;",
                "sideA": "Λιοντάρι",
                "sideB": "Ελέφαντας",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σοκολάτα εναντίον γλυκών — ποιο είναι καλύτερο;",
                "sideA": "Σοκολάτα",
                "sideB": "Γλυκά",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουτάλι εναντίον πιρουνιού — ποιο είναι καλύτερο;",
                "sideA": "Κουτάλι",
                "sideB": "Πιρούνι",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καπέλο εναντίον παπουτσιών — ποιο είναι πιο σημαντικό;",
                "sideA": "Καπέλο",
                "sideB": "Παπούτσια",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ήλιος εναντίον φεγγαριού — ποιο είναι καλύτερο;",
                "sideA": "Ήλιος",
                "sideB": "Φεγγάρι",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάλτσες εναντίον χωρίς κάλτσες — ποιο είναι πιο ωραίο;",
                "sideA": "Κάλτσες",
                "sideB": "Χωρίς κάλτσες",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με τους παππούδες εναντίον χωρίς αυτούς — ποιο είναι πιο ωραίο;",
                "sideA": "Με παππούδες",
                "sideB": "Χωρίς αυτούς",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το φαγητό της μαμάς εναντίον του μπαμπά — ποιο είναι καλύτερο;",
                "sideA": "Μαμάς",
                "sideB": "Μπαμπά",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαθηματικά εναντίον καλλιτεχνικών — ποιο μάθημα έχει πιο πολλή πλάκα;",
                "sideA": "Μαθηματικά",
                "sideB": "Καλλιτεχνικά",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γράψιμο στο χαρτί εναντίον πληκτρολόγησης σε τάμπλετ — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Τάμπλετ",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα εναντίον μακαρονάδας — ποιο είναι πιο νόστιμο;",
                "sideA": "Πίτσα",
                "sideB": "Μακαρονάδα",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παγωτό εναντίον κέικ — ποιο είναι καλύτερο επιδόρπιο;",
                "sideA": "Παγωτό",
                "sideB": "Κέικ",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μικρές μέρες εναντίον μεγάλες μέρες — ποιο είναι καλύτερο;",
                "sideA": "Μικρές μέρες",
                "sideB": "Μεγάλες μέρες",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέρα στο πάρκο εναντίον μέρα στην παραλία — ποιο είναι καλύτερο;",
                "sideA": "Πάρκο",
                "sideB": "Παραλία",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αεροπλάνο εναντίον τρένου — ποιο έχει πιο πολλή πλάκα;",
                "sideA": "Αεροπλάνο",
                "sideB": "Τρένο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες που ρίχνουν πράγματα από τα τραπέζια εναντίον σκύλων που μασάνε παπούτσια — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα με πιρούνι εναντίον πίτσα με τα χέρια — ποιο είναι το σωστό;",
                "sideA": "Πιρούνι",
                "sideB": "Χέρια",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος με κάλτσες εναντίον ύπνος χωρίς κάλτσες — ποιο είναι καλύτερο;",
                "sideA": "Με κάλτσες",
                "sideB": "Χωρίς",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάστρο στην άμμο εναντίον χιονάνθρωπου — ποιο έχει πιο πολλή πλάκα να χτίζεις;",
                "sideA": "Κάστρο",
                "sideB": "Χιονάνθρωπος",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πολλές εξετάσεις εναντίον πολύ λίγων — ποιο είναι πιο δίκαιο;",
                "sideA": "Πολλές εξετάσεις",
                "sideB": "Πολύ λίγες",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έναρξη σχολείου στα 7 εναντίον στα 5 — ποιο είναι καλύτερο για τα παιδιά;",
                "sideA": "Στα 7",
                "sideB": "Στα 5",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φαγητό αργά εναντίον φαγητό γρήγορα — ποιο είναι καλύτερο για σένα;",
                "sideA": "Αργά",
                "sideB": "Γρήγορα",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική στο σπίτι εναντίον παραγγελίας online — ποιο είναι καλύτερο;",
                "sideA": "Μαγειρική",
                "sideB": "Παραγγελία",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον ζαχαροπλαστικής — ποιο είναι πιο διασκεδαστικό ως χόμπι;",
                "sideA": "Μαγειρική",
                "sideB": "Ζαχαροπλαστική",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γυμναστήριο εναντίον γυμναστικής έξω — ποιο είναι καλύτερο;",
                "sideA": "Γυμναστήριο",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φωτογραφίες στο κινητό εναντίον εκτυπωμένων — ποιο είναι καλύτερο;",
                "sideA": "Στο κινητό",
                "sideB": "Εκτυπωμένες",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV εναντίον οθόνης υπολογιστή — ποιο είναι καλύτερο για ταινίες;",
                "sideA": "Smart TV",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστή χώρα εναντίον κρύας χώρας — ποιος είναι καλύτερος προορισμός διακοπών;",
                "sideA": "Ζεστή",
                "sideB": "Κρύα",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να δίνεις δώρα εναντίον να παίρνεις δώρα — ποιο προτιμάς;",
                "sideA": "Να δίνεις",
                "sideB": "Να παίρνεις",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία μέσα εναντίον εργασίας έξω — ποιο είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανάς στην πίτσα εναντίον χωρίς ανανά — ποιο είναι το σωστό;",
                "sideA": "Ανανάς",
                "sideB": "Χωρίς ανανά",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα πρώτα εναντίον τσάι πρώτα — ποιο είναι καλύτερο;",
                "sideA": "Γάλα πρώτα",
                "sideB": "Τσάι πρώτα",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι στην πραγματικότητα χειρότερη;",
                "sideA": "Δευτέρα",
                "sideB": "Παρασκευή",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξύπνημα πέντε λεπτά πριν το ξυπνητήρι εναντίον ύπνου μέχρι το ξυπνητήρι — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Πριν το ξυπνητήρι",
                "sideB": "Μέχρι το ξυπνητήρι",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες εναντίον σκύλων — ποιο ζώο είναι κρυφά το αφεντικό του σπιτιού;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Όταν ζεσταίνεσαι πολύ εναντίον όταν κρυώνεις πολύ — ποιο είναι χειρότερο;",
                "sideA": "Πολύ ζέστη",
                "sideB": "Πολύ κρύο",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση από τα λάθη εναντίον μάθησης από την επιτυχία — ποιο διδάσκει περισσότερα;",
                "sideA": "Λάθη",
                "sideB": "Επιτυχία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τάμπλετ στην τάξη εναντίον παραδοσιακών τετραδίων — ποιο βοηθάει περισσότερο τους μαθητές;",
                "sideA": "Τάμπλετ",
                "sideB": "Τετράδια",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να είσαι πάντα διαθέσιμος εναντίον του να έχεις ψηφιακό ελεύθερο χρόνο — ποιο είναι καλύτερο;",
                "sideA": "Πάντα διαθέσιμος",
                "sideB": "Ελεύθερος χρόνος",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επαναχρησιμοποίηση πραγμάτων εναντίον ανακύκλωσης — ποιο είναι πιο αποτελεσματικό;",
                "sideA": "Επαναχρησιμοποίηση",
                "sideB": "Ανακύκλωση",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μία καριέρα για όλη τη ζωή εναντίον συχνής αλλαγής καριέρας — ποιο είναι καλύτερο;",
                "sideA": "Μία καριέρα",
                "sideB": "Συχνή αλλαγή",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος εναντίον γυμναστικής — ποιο έχει μεγαλύτερο αντίκτυπο στην υγεία σου;",
                "sideA": "Ύπνος",
                "sideB": "Γυμναστική",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ποπ μουσική εναντίον κλασικής μουσικής — ποια έχει μεγαλύτερο πολιτιστικό αντίκτυπο;",
                "sideA": "Ποπ",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να ξέρεις το τέλος εναντίον της έκπληξης — ποιο είναι καλύτερο;",
                "sideA": "Να ξέρεις",
                "sideB": "Έκπληξη",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Άμεση απάντηση στα μηνύματα εναντίον του να παίρνεις το χρόνο σου — ποιο είναι πιο σεβαστό;",
                "sideA": "Άμεσα",
                "sideB": "Με το πάσο σου",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching μιας σειράς εναντίον ενός επεισοδίου την εβδομάδα — ποιος είναι ο σωστός τρόπος;",
                "sideA": "Binge-watching",
                "sideB": "Εβδομαδιαία",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — ποιο είναι αντικειμενικά καλύτερο;",
                "sideA": "Παράθυρο",
                "sideB": "Διάδρομος",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να χάσεις το γυμναστήριο μία φορά εναντίον του να πας και να μην κάνεις καλή προπόνηση — ποιο είναι χειρότερο;",
                "sideA": "Να το χάσεις",
                "sideB": "Κακή προπόνηση",
                "level": "intermediate",
                "theme": "mental_health_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να μιλάς στον εαυτό σου εναντίον του να μιλάς στο κατοικίδιό σου — ποιο είναι πιο λογικό;",
                "sideA": "Στον εαυτό σου",
                "sideB": "Στο κατοικίδιο",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Η αγαπημένη μου ανάμνηση από την παιδική ηλικία",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Οι τελευταίες διακοπές που έκανα",
                "level": "elementary",
                "theme": "transport_travel_A2"
            },
            {
                "topic": "Ένα άτομο που με ενέπνευσε",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Το μέλλον του κόσμου σε 50 χρόνια",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Ο ρόλος της τέχνης στη σύγχρονη κοινωνία",
                "level": "advanced",
                "theme": "leisure_hobbies_A2"
            },
            {
                "topic": "Η πολυπλοκότητα της ανθρώπινης συνείδησης",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "topic": "Η σημασία της ευαισθητοποίησης για την ψυχική υγεία",
                "level": "intermediate",
                "theme": "mental_health_B1"
            },
            {
                "topic": "Η δουλειά των ονείρων μου και γιατί",
                "level": "starter",
                "theme": "work_A1"
            },
            {
                "topic": "Ο αντίκτυπος της κλιματικής αλλαγής στις τοπικές κοινότητες",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            },
            {
                "topic": "Τεχνητή Νοημοσύνη: Εργαλείο ή απειλή;",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }
        ]
    }
};
window.speakingData = speakingData;