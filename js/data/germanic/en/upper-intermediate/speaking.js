(function() {
    const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Is social media destroying our social skills?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Should public transport be free?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }
        ],
        "criticsCorner": [
            {
                "text": "The only constant is change.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [
            {
                "topic": "The four-day working week vs the five-day week — which model benefits workers and employers more?",
                "sideA": "4-day week",
                "sideB": "5-day week",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Universal basic income vs targeted welfare — which is the more effective safety net for working adults?",
                "sideA": "UBI",
                "sideB": "Targeted welfare",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "The gig economy vs permanent employment — which model better serves workers in the long run?",
                "sideA": "Gig economy",
                "sideB": "Permanent employment",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meritocracy vs structural advantage — which more accurately explains career success?",
                "sideA": "Meritocracy",
                "sideB": "Structural advantage",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pay transparency vs salary privacy — which creates a fairer workplace?",
                "sideA": "Transparency",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Automation vs human labour — which is the bigger long-term threat to adult employment?",
                "sideA": "Automation",
                "sideB": "Human labour",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Remote work vs office presence — which is better for career progression and team culture?",
                "sideA": "Remote work",
                "sideB": "Office presence",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Equal parental leave for men and women vs longer maternity leave — which policy is fairer?",
                "sideA": "Equal leave",
                "sideB": "Longer maternity",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choosing not to have children vs social pressure to have a family — which deserves more respect?",
                "sideA": "Choosing no children",
                "sideB": "Family pressure",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Marriage as an institution vs cohabitation without marriage — which is more relevant today?",
                "sideA": "Marriage",
                "sideB": "Cohabitation",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dual-income households vs one partner staying home — which model is better for children and adults?",
                "sideA": "Dual income",
                "sideB": "One partner at home",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "The gender pay gap as a structural problem vs a matter of individual choices — which explanation holds more weight?",
                "sideA": "Structural problem",
                "sideB": "Individual choices",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home ownership as the goal vs a professional rental market — which housing model suits modern adults better?",
                "sideA": "Ownership",
                "sideB": "Rental market",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gentrification as improvement vs gentrification as displacement — which framing is more honest?",
                "sideA": "Improvement",
                "sideB": "Displacement",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Urban density vs suburban sprawl — which is the better model for liveable cities?",
                "sideA": "Urban density",
                "sideB": "Suburban sprawl",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living close to family vs moving away for opportunity — which choice produces better long-term wellbeing?",
                "sideA": "Living close",
                "sideB": "Moving away",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "An ageing population as a crisis vs as a resource — which framing is more productive?",
                "sideA": "Crisis",
                "sideB": "Resource",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Personal responsibility for health vs systemic factors — which carries more weight in explaining health outcomes?",
                "sideA": "Personal responsibility",
                "sideB": "Systemic factors",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mental health days as a legitimate workplace right vs a source of abuse — where should employers draw the line?",
                "sideA": "Legitimate right",
                "sideB": "Source of abuse",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preventive medicine vs curative medicine — which should receive more public funding?",
                "sideA": "Preventive",
                "sideB": "Curative",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Anti-ageing medicine vs ageing gracefully — which attitude is more coherent?",
                "sideA": "Anti-ageing",
                "sideB": "Ageing gracefully",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Surveillance technology for public safety vs the right to privacy — where should the balance lie?",
                "sideA": "Public safety",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media as a tool for civic engagement vs as a driver of polarisation — which effect dominates?",
                "sideA": "Civic engagement",
                "sideB": "Polarisation",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "AI in recruitment vs human judgment — which produces fairer hiring decisions?",
                "sideA": "AI",
                "sideB": "Human judgment",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "The right to be forgotten online vs the public's right to information — which should take precedence?",
                "sideA": "Right to be forgotten",
                "sideB": "Right to info",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Compulsory voting vs voluntary voting — which produces healthier democracies?",
                "sideA": "Compulsory",
                "sideB": "Voluntary",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Political engagement through protest vs through institutional channels — which is more effective for adults today?",
                "sideA": "Protest",
                "sideB": "Institutional",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "National identity vs European or global identity — which is more meaningful for adults in 2026?",
                "sideA": "National identity",
                "sideB": "Global identity",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tax rises to fund public services vs spending cuts — which is the more defensible political choice?",
                "sideA": "Tax rises",
                "sideB": "Spending cuts",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Admitting you have no idea how your pension works vs confidently pretending you do — which is the more universal adult experience?",
                "sideA": "Admitting ignorance",
                "sideB": "Pretending",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being the person who always plans social events vs always being the person who just shows up — which role is more exhausting?",
                "sideA": "The planner",
                "sideB": "The guest",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a strong opinion about your colleagues' kitchen habits vs not caring at all — which person is more tolerable?",
                "sideA": "Strong opinion",
                "sideB": "Not caring",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Attending every optional work social event vs never attending any — which strategy is better for your career and sanity?",
                "sideA": "Attending all",
                "sideB": "Attending none",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Adults who are still confused by their tax return vs adults who enjoy doing it — which group is more trustworthy?",
                "sideA": "Confused",
                "sideB": "Enjoy it",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Complaining about the cost of living to friends vs pretending everything is fine — which is the more honest adult response?",
                "sideA": "Complaining",
                "sideB": "Pretending fine",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
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
            }
        ],
        "talkThatTalk": [
            {
                "topic": "The future of the world in 50 years",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "The impact of climate change on local communities",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};

    for (const cat in speakingData["en"]) {
        if (!window.speakingData["en"][cat]) window.speakingData["en"][cat] = [];
        window.speakingData["en"][cat].push(...speakingData["en"][cat]);
    }
})();
