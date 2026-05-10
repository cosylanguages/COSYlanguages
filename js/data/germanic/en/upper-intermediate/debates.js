(function() {
    const data = [
        {
            "topic": "Universal Basic Income vs targeted welfare — which is the more effective solution to poverty?",
            "sideA": "Universal Basic Income",
            "sideB": "Targeted welfare",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Eliminates poverty trap", "Simplifies bureaucracy", "Empowers workers"],
            "ideasB": ["Efficient use of resources", "Supports those most in need", "Fiscally responsible"]
        },
        {
            "topic": "Living close to family vs moving away for better opportunities — which choice leads to a more fulfilling life?",
            "sideA": "Living close",
            "sideB": "Moving away",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Strong support network", "Intergenerational bonds", "Lower childcare costs"],
            "ideasB": ["Broadens perspectives", "Greater career prospects", "Increases independence"]
        },
        {
            "topic": "An ageing population as a crisis vs as a resource — which framing is more productive?",
            "sideA": "Crisis",
            "sideB": "Resource",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Strain on healthcare", "Shrinking workforce", "Pension funding issues"],
            "ideasB": ["Deep life experience", "Volunteering potential", "Stability and wisdom"]
        },
        {
            "topic": "Personal responsibility for health vs systemic factors — which carries more weight?",
            "sideA": "Personal responsibility",
            "sideB": "Systemic factors",
            "level": "upper-intermediate",
            "theme": "healthcare_systems_B1",
            "ideasA": ["Individual agency", "Motivation for change", "Accountability for habits"],
            "ideasB": ["Socio-economic status", "Access to healthy food", "Environmental quality"]
        },
        {
            "topic": "Preventive medicine vs curative medicine — which should receive more public funding?",
            "sideA": "Preventive",
            "sideB": "Curative",
            "level": "upper-intermediate",
            "theme": "healthcare_systems_B1",
            "ideasA": ["Long-term cost savings", "Improved quality of life", "Prevents suffering"],
            "ideasB": ["Urgent life-saving needs", "Advanced technology research", "Direct results"]
        },
        {
            "topic": "Anti-ageing medicine vs ageing gracefully — which attitude is more coherent?",
            "sideA": "Anti-ageing",
            "sideB": "Ageing gracefully",
            "level": "upper-intermediate",
            "theme": "healthcare_systems_B1",
            "ideasA": ["Progress in science", "Maintaining vitality", "Extending healthy lifespan"],
            "ideasB": ["Natural process", "Emotional maturity", "Countering vanity"]
        },
        {
            "topic": "Surveillance technology vs the right to privacy — where should the balance lie?",
            "sideA": "Public safety",
            "sideB": "Privacy",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "ideasA": ["Crime prevention", "Quick incident response", "Counter-terrorism"],
            "ideasB": ["Freedom of expression", "Protects against abuse", "Individual dignity"]
        },
        {
            "topic": "Social media as a tool for engagement vs driver of polarisation — which effect is stronger?",
            "sideA": "Civic engagement",
            "sideB": "Polarisation",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "ideasA": ["Organise social movements", "Voice for minorities", "Direct access to info"],
            "ideasB": ["Echo chambers", "Spread of misinformation", "Algorithmic bias"]
        },
        {
            "topic": "AI in recruitment vs human judgment — which produces fairer hiring decisions?",
            "sideA": "AI",
            "sideB": "Human judgment",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "ideasA": ["Standardised criteria", "Removes unconscious bias", "Analyses large datasets"],
            "ideasB": ["Contextual understanding", "Assessing soft skills", "Intuition and empathy"]
        },
        {
            "topic": "The right to be forgotten online vs the public's right to information — which should take precedence?",
            "sideA": "Right to be forgotten",
            "sideB": "Right to info",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "ideasA": ["Protects reputation", "Room for change", "Personal data control"],
            "ideasB": ["Historical record", "Accountability", "Transparency for society"]
        },
        {
            "topic": "Compulsory voting vs voluntary voting — which produces healthier democracies?",
            "sideA": "Compulsory",
            "sideB": "Voluntary",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Full representation", "Engages all citizens", "Higher legitimacy"],
            "ideasB": ["Respects freedom of choice", "Incentive for better campaigns", "Genuine interest"]
        },
        {
            "topic": "Protest vs institutional channels — which is more effective for political change?",
            "sideA": "Protest",
            "sideB": "Institutional",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Immediate visibility", "Public awareness", "Challenges status quo"],
            "ideasB": ["Sustainable policy making", "Legal framework", "Nuanced compromise"]
        },
        {
            "topic": "National identity vs global identity — which is more meaningful in 2026?",
            "sideA": "National identity",
            "sideB": "Global identity",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Cultural heritage", "Local social cohesion", "Political accountability"],
            "ideasB": ["Human commonality", "Solving global problems", "Inclusive values"]
        },
        {
            "topic": "Tax rises vs spending cuts — which is the more defensible choice to fund public services?",
            "sideA": "Tax rises",
            "sideB": "Spending cuts",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "ideasA": ["Protect social services", "Reduce inequality", "Invest in infrastructure"],
            "ideasB": ["Fiscal discipline", "Efficiency gains", "Lower individual burden"]
        },
        {
            "topic": "Urban living vs rural living — which offers a better quality of life?",
            "sideA": "Urban",
            "sideB": "Rural",
            "level": "upper-intermediate",
            "theme": "globalisation_trade_B2",
            "ideasA": ["Cultural abundance", "Modern infrastructure", "Career diversity"],
            "ideasB": ["Peace and space", "Lower cost of living", "Closer to nature"]
        },
        {
            "topic": "Renewable energy vs nuclear power — which is the best solution for the climate?",
            "sideA": "Renewable",
            "sideB": "Nuclear",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "ideasA": ["Infinite resources", "Zero dangerous waste", "Falling costs"],
            "ideasB": ["Stable baseload power", "High energy density", "Proven technology"]
        },
        {
            "topic": "Fast fashion vs sustainable clothing — can we afford to be ethical?",
            "sideA": "Fast fashion",
            "sideB": "Sustainable",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "ideasA": ["Affordable for all", "Fast-moving trends", "Mass employment"],
            "ideasB": ["Lower ecological impact", "Better worker rights", "Quality over quantity"]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
