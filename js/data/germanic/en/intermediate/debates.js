(function() {
    const data = [
        {
            "topic": "Remote work vs office work — which is better for productivity?",
            "sideA": "Remote",
            "sideB": "Office",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Save time on commuting", "More flexible environment"],
            "ideasB": ["Better team collaboration", "Clearer work-life boundary"]
        },
        {
            "topic": "Job security vs career growth — which matters more in the long term?",
            "sideA": "Security",
            "sideB": "Growth",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Peace of mind", "Financial stability"],
            "ideasB": ["New challenges", "Opportunity for higher income"]
        },
        {
            "topic": "Starting your own business vs working for an employer — which is better?",
            "sideA": "Own business",
            "sideB": "Working for employer",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Be your own boss", "Creative freedom"],
            "ideasB": ["Fixed salary", "Less personal risk"]
        },
        {
            "topic": "Ambition vs work-life balance — which should be the priority?",
            "sideA": "Ambition",
            "sideB": "Balance",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Professional success", "Fast career progression"],
            "ideasB": ["Mental wellbeing", "Time for personal life"]
        },
        {
            "topic": "Networking vs skill-building — which advances your career more?",
            "sideA": "Networking",
            "sideB": "Skills",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Access to hidden opportunities", "Learning from mentors"],
            "ideasB": ["Concrete value to employers", "Professional confidence"]
        },
        {
            "topic": "Honest feedback vs independent work — which motivates more?",
            "sideA": "Feedback",
            "sideB": "Independence",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Clarity on performance", "Constant improvement"],
            "ideasB": ["Trust and autonomy", "Self-management skills"]
        },
        {
            "topic": "Changing career at 40 vs staying in your field — which is wiser?",
            "sideA": "Changing career",
            "sideB": "Staying",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["New life passion", "Avoid burnout"],
            "ideasB": ["Utilise deep expertise", "Maintain seniority"]
        },
        {
            "topic": "Paying off a mortgage early vs investing — which is smarter?",
            "sideA": "Pay off early",
            "sideB": "Investing",
            "level": "intermediate",
            "theme": "buying_property_B1",
            "ideasA": ["Debt-free living", "Guaranteed return"],
            "ideasB": ["Higher potential growth", "Compound interest benefits"]
        },
        {
            "topic": "Owning a home vs renting permanently — which is better?",
            "sideA": "Owning",
            "sideB": "Renting",
            "level": "intermediate",
            "theme": "buying_property_B1",
            "ideasA": ["Asset for the future", "Stability"],
            "ideasB": ["More flexibility", "No maintenance stress"]
        },
        {
            "topic": "Saving for retirement early vs enjoying money now — which is wiser?",
            "sideA": "Saving early",
            "sideB": "Enjoying now",
            "level": "intermediate",
            "theme": "buying_property_B1",
            "ideasA": ["Long-term security", "Less stress later"],
            "ideasB": ["Unique life experiences", "Better health for travel"]
        },
        {
            "topic": "Living below your means vs spending to enjoy life — which is healthier?",
            "sideA": "Below means",
            "sideB": "Enjoy now",
            "level": "intermediate",
            "theme": "buying_property_B1",
            "ideasA": ["Financial independence", "Reduced debt stress"],
            "ideasB": ["Higher life quality", "No regrets"]
        },
        {
            "topic": "Two incomes vs one partner staying home — which works better for families?",
            "sideA": "Two incomes",
            "sideB": "One staying home",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Better lifestyle", "Shared responsibility"],
            "ideasB": ["More time for children", "Reduced childcare costs"]
        },
        {
            "topic": "Having children vs choosing not to — which is more fulfilling?",
            "sideA": "Having children",
            "sideB": "No children",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Legacy and growth", "Emotional depth"],
            "ideasB": ["Personal freedom", "Career focus"]
        },
        {
            "topic": "Strict parenting vs permissive parenting — which is better?",
            "sideA": "Strict",
            "sideB": "Permissive",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Clear boundaries", "Good discipline"],
            "ideasB": ["Creative freedom", "Better parent-child trust"]
        },
        {
            "topic": "Long-term relationship vs staying single — which is better for growth?",
            "sideA": "Relationship",
            "sideB": "Single",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Learning to compromise", "Emotional support"],
            "ideasB": ["Full independence", "Self-discovery"]
        },
        {
            "topic": "Keeping work separate vs integrating it into life — which is healthier?",
            "sideA": "Separate",
            "sideB": "Integrated",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Avoid burnout", "Personal time"],
            "ideasB": ["Passion-led work", "Flexible flow"]
        },
        {
            "topic": "Moving abroad vs staying close to family — which is the right call?",
            "sideA": "Moving abroad",
            "sideB": "Staying close",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "ideasA": ["Broaden horizons", "New opportunities"],
            "ideasB": ["Emotional support", "Strong traditions"]
        },
        {
            "topic": "Physical health vs mental health — which should we prioritise?",
            "sideA": "Physical",
            "sideB": "Mental",
            "level": "intermediate",
            "theme": "mental_health_wellbeing_B1",
            "ideasA": ["Foundation for everything", "Longevity"],
            "ideasB": ["Core of happiness", "Quality of life"]
        },
        {
            "topic": "Private healthcare vs public system — which is better?",
            "sideA": "Private",
            "sideB": "Public",
            "level": "intermediate",
            "theme": "mental_health_wellbeing_B1",
            "ideasA": ["Faster service", "Specialised care"],
            "ideasB": ["Fair for everyone", "Collective responsibility"]
        },
        {
            "topic": "Regular medical check-ups vs only when ill — which is smarter?",
            "sideA": "Regular checks",
            "sideB": "Only when ill",
            "level": "intermediate",
            "theme": "mental_health_wellbeing_B1",
            "ideasA": ["Early detection", "Prevention"],
            "ideasB": ["Less medical anxiety", "Save on costs"]
        },
        {
            "topic": "Individual freedom vs community responsibility — which matters more?",
            "sideA": "Freedom",
            "sideB": "Responsibility",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Personal choice", "Innovation"],
            "ideasB": ["Social cohesion", "Safety net"]
        },
        {
            "topic": "Optimism about the future vs realism — which is more useful?",
            "sideA": "Optimism",
            "sideB": "Realism",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Motivation to act", "Mental strength"],
            "ideasB": ["Prepared for risks", "Honest assessment"]
        },
        {
            "topic": "Changing the world vs stable personal life — which is a better ambition?",
            "sideA": "Changing world",
            "sideB": "Stable life",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Greater good", "Historic impact"],
            "ideasB": ["Support your family", "Inner peace"]
        },
        {
            "topic": "Volunteering time vs donating money — which does more good?",
            "sideA": "Volunteering",
            "sideB": "Donating",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Personal connection", "Direct impact"],
            "ideasB": ["Resources for scale", "Efficient help"]
        },
        {
            "topic": "Following your generation's values vs questioning them — which is better?",
            "sideA": "Following",
            "sideB": "Questioning",
            "level": "intermediate",
            "theme": "society_community_B1",
            "ideasA": ["Social belonging", "Shared history"],
            "ideasB": ["Critical thinking", "Personal truth"]
        },
        {
            "topic": "Electric cars vs. Petrol cars — which is better for society?",
            "sideA": "Electric",
            "sideB": "Petrol",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "ideasA": ["Environmentally friendly", "Quiet operation"],
            "ideasB": ["Greater range", "Faster refuelling"]
        },
        {
            "topic": "Online learning vs classroom learning — which is more effective?",
            "sideA": "Online",
            "sideB": "Classroom",
            "level": "intermediate",
            "theme": "career_development_B1",
            "ideasA": ["Learn anywhere", "Rewatch lessons"],
            "ideasB": ["Direct interaction", "Social atmosphere"]
        },
        {
            "topic": "Streaming services vs traditional TV — which is better?",
            "sideA": "Streaming",
            "sideB": "Traditional TV",
            "level": "intermediate",
            "theme": "media_news_B1",
            "ideasA": ["On-demand content", "No commercials"],
            "ideasB": ["Live events", "Simple to use"]
        },
        {
            "topic": "Reading news online vs in a newspaper — which is more reliable?",
            "sideA": "Online news",
            "sideB": "Newspaper",
            "level": "intermediate",
            "theme": "media_news_B1",
            "ideasA": ["Updated instantly", "Multiple sources"],
            "ideasB": ["Slower editing", "More focused"]
        },
        {
            "topic": "Lifestyle changes vs government action — which helps the environment more?",
            "sideA": "Individual",
            "sideB": "Government",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "ideasA": ["Empowers citizens", "Direct impact"],
            "ideasB": ["Large-scale policy", "Regulates industries"]
        },
        {
            "topic": "Pop music vs classical music — which has a bigger impact?",
            "sideA": "Pop",
            "sideB": "Classical",
            "level": "intermediate",
            "theme": "opinion_debate_B1",
            "ideasA": ["Reflects modern life", "Very accessible"],
            "ideasB": ["Historical depth", "Complex structure"]
        },
        {
            "topic": "Binge-watching vs watching one episode a week — which is better?",
            "sideA": "Binge-watching",
            "sideB": "Weekly",
            "level": "intermediate",
            "theme": "opinion_debate_B1",
            "ideasA": ["Immersive experience", "No waiting"],
            "ideasB": ["Builds anticipation", "Time to process"]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
