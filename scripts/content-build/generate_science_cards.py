import os
import re
from bs4 import BeautifulSoup

# Define level mappings
LEVELS = {
    "a1": {"num": "1", "symbol": "A1", "name": "Strt"},
    "a2": {"num": "2", "symbol": "A2", "name": "Elem"},
    "b1": {"num": "3", "symbol": "B1", "name": "Intm"},
    "b2": {"num": "4", "symbol": "B2", "name": "Uppr"},
    "c1": {"num": "5", "symbol": "C1", "name": "Adv"},
    "c2": {"num": "6", "symbol": "C2", "name": "Prof"}
}

LEVELS_FR = {
    "a1": {"num": "1", "symbol": "A1", "name": "Déb"},
    "a2": {"num": "2", "symbol": "A2", "name": "Élém"},
    "b1": {"num": "3", "symbol": "B1", "name": "Int"},
    "b2": {"num": "4", "symbol": "B2", "name": "Av"},
    "c1": {"num": "5", "symbol": "C1", "name": "Sup"},
    "c2": {"num": "6", "symbol": "C2", "name": "Prof"}
}

LEVELS_RU = {
    "a1": {"num": "1", "symbol": "A1", "name": "Нач"},
    "a2": {"num": "2", "symbol": "A2", "name": "Элем"},
    "b1": {"num": "3", "symbol": "B1", "name": "Сред"},
    "b2": {"num": "4", "symbol": "B2", "name": "Выш"},
    "c1": {"num": "5", "symbol": "C1", "name": "Прд"},
    "c2": {"num": "6", "symbol": "C2", "name": "Проф"}
}

# Detailed list of English sessions with descriptions
PAST_SESSIONS_EN = [
    {
        "title": "Why Your Grandmother Is an Evolutionary Mystery",
        "desc": "Analyze the biological and evolutionary mystery of human grandmothers and the 'Grandmother Hypothesis'.",
        "level": "c1",
        "date": "10 August 2026",
        "file": "grandmother-evolutionary-mystery.html"
    },
    {
        "title": "We Are Living in the Most Creative Time Ever",
        "desc": "Deconstruct collective human creativity, cultural scaling, and open-source innovation networks.",
        "level": "c1",
        "date": "30 July 2026",
        "file": "living-most-creative-time.html"
    },
    {
        "title": "Your Fingers Hold a Secret of Human Brain Evolution",
        "desc": "Explore how the anatomy of thumb opposition and precision grip accelerated early human tool-making.",
        "level": "b1",
        "date": "17 July 2026",
        "file": "your-fingers-hold-secret-brain-evolution-intermediate.html"
    },
    {
        "title": "Your Fingers Hold a Secret of Human Brain Evolution",
        "desc": "Deconstruct how precise hand opposition and motor dexterity co-evolved with speech and cognitive complexity.",
        "level": "b2",
        "date": "17 July 2026",
        "file": "your-fingers-hold-secret-brain-evolution-upper-intermediate.html"
    },
    {
        "title": "Culture Helps Your Body Stay Younger",
        "desc": "Analyze how active cultural and artistic engagement helps reduce stress and promotes physical longevity.",
        "level": "b1",
        "date": "14 July 2026",
        "file": "museums-movies-theater-stay-younger-intermediate.html"
    },
    {
        "title": "Culture Helps Your Body Stay Younger",
        "desc": "Examine the endocrine and somatic effects of regular museum and theater attendance on cortisol levels.",
        "level": "b2",
        "date": "14 July 2026",
        "file": "museums-movies-theater-stay-younger-upper-intermediate.html"
    },
    {
        "title": "Culture Helps Your Body Stay Younger",
        "desc": "Learn how visiting museums, movies, and theater can keep our body and mind healthy and young.",
        "level": "a2",
        "date": "14 July 2026",
        "file": "museums-movies-theater-stay-younger-elementary.html"
    },
    {
        "title": "Where You Live Shapes Your Dementia Risk",
        "desc": "Discuss how local environmental factors and neighborhood greenery affect cognitive health.",
        "level": "b1",
        "date": "13 July 2026",
        "file": "where-you-live-shapes-dementia-risk-intermediate.html"
    },
    {
        "title": "Where You Live Shapes Your Dementia Risk",
        "desc": "Deconstruct the spatial epidemiology of cognitive decline and environmental neurology in cities.",
        "level": "b2",
        "date": "13 July 2026",
        "file": "where-you-live-shapes-dementia-risk-upper-intermediate.html"
    },
    {
        "title": "Where You Live Shapes Your Dementia Risk",
        "desc": "Learn how our neighborhoods and parks help protect our brains and keep our memory strong.",
        "level": "a2",
        "date": "13 July 2026",
        "file": "where-you-live-shapes-dementia-risk-elementary.html"
    },
    {
        "title": "Spider-like Creatures and the Origins of Fatherhood",
        "desc": "Analyze the unusual paternal care and nesting behaviors observed in harvestmen arachnids.",
        "level": "b1",
        "date": "12 July 2026",
        "file": "spider-creatures-origins-of-fatherhood-intermediate.html"
    },
    {
        "title": "Spider-like Creatures and the Origins of Fatherhood",
        "desc": "Deconstruct paternal investment, nesting territory defense, and behavioral ecology milestones.",
        "level": "b2",
        "date": "12 July 2026",
        "file": "spider-creatures-origins-of-fatherhood-upper-intermediate.html"
    },
    {
        "title": "Nervous System Networks & Pain",
        "desc": "Explore how our sensory nervous system transmits discomfort signals and pain sensitivity.",
        "level": "b1",
        "date": "09 July 2026",
        "file": "sensory-system-pain-disease-intermediate.html"
    },
    {
        "title": "Nervous System Networks & Pain",
        "desc": "Deconstruct chronic pathological pain, synaptic transmission, and system network attenuation.",
        "level": "b2",
        "date": "09 July 2026",
        "file": "sensory-system-pain-disease-upper-intermediate.html"
    },
    {
        "title": "Great Ape Laughter & Human Speech",
        "desc": "Learn how laughter in wild apes shows a fun connection to human language and speech.",
        "level": "a2",
        "date": "26 June 2026",
        "file": "ape-laughter-speech-origin-elementary.html"
    },
    {
        "title": "Great Ape Laughter & Human Speech",
        "desc": "Explore the comparative primatology of ape tickle-laughter and early phonetic evolution.",
        "level": "b1",
        "date": "26 June 2026",
        "file": "ape-laughter-speech-origin-intermediate.html"
    },
    {
        "title": "Climate Scientist Warming Controversy",
        "desc": "Analyze the public debate and scientific consensus surrounding rising global temperatures.",
        "level": "b1",
        "date": "25 June 2026",
        "file": "climate-scientist-warming-report-intermediate.html"
    },
    {
        "title": "Climate Scientist Warming Controversy",
        "desc": "Examine self-censorship, socio-political pressures, and mitigation consensus in climate modeling.",
        "level": "b2",
        "date": "25 June 2026",
        "file": "climate-scientist-warming-report-upper-intermediate.html"
    },
    {
        "title": "Ozempic & the Obesity Revolution",
        "desc": "Discuss the weight loss hormone therapy taking the world by storm and its health results.",
        "level": "b1",
        "date": "19 June 2026",
        "file": "ozempic-obesity-revolution-intermediate.html"
    },
    {
        "title": "Ozempic & the Obesity Revolution",
        "desc": "Deconstruct GLP-1 satiety agonists, hypothalamic reward circuitry, and metabolic endocrine therapy.",
        "level": "b2",
        "date": "19 June 2026",
        "file": "ozempic-obesity-revolution-upper-intermediate.html"
    },
    {
        "title": "The Secret Language Behind Animal Cooperation",
        "desc": "Learn how meerkats, birds, and other animals use voice calls to cooperate and warn of danger.",
        "level": "b1",
        "date": "19 June 2026",
        "file": "animal-cooperation-language-intermediate.html"
    },
    {
        "title": "The Secret Language Behind Animal Cooperation",
        "desc": "Examine predator-specific warning signals, contextual syntax, and cognitive communication syntax.",
        "level": "b2",
        "date": "19 June 2026",
        "file": "animal-cooperation-language-upper-intermediate.html"
    },
    {
        "title": "Humans May Have Hidden Regenerative Powers",
        "desc": "Explore how our bodies heal skin wounds and our potential for biological regeneration.",
        "level": "b1",
        "date": "17 June 2026",
        "file": "hidden-regenerative-powers-intermediate.html"
    },
    {
        "title": "Humans May Have Hidden Regenerative Powers",
        "desc": "Analyze blastema reactivation, cellular signaling cascades, and somatic growth-factor pathways.",
        "level": "b2",
        "date": "17 June 2026",
        "file": "hidden-regenerative-powers-upper-intermediate.html"
    },
    {
        "title": "Your Brain Can Keep Improving Into Your 90s",
        "desc": "Discuss how reading, puzzle-solving, and clean lifestyles help keep our memory sharp as we age.",
        "level": "b1",
        "date": "14 June 2026",
        "file": "brain-improving-in-90s-intermediate.html"
    },
    {
        "title": "Your Brain Can Keep Improving Into Your 90s",
        "desc": "Analyze hippocampal neurogenesis, lifelong neuroplasticity, and cognitive reserve in nonagenarians.",
        "level": "b2",
        "date": "14 June 2026",
        "file": "brain-improving-in-90s-upper-intermediate.html"
    },
    {
        "title": "Why Grandparents Matter",
        "desc": "Examine how close intergenerational contact improves the mental health and stability of youngsters.",
        "level": "b1",
        "date": "13 June 2026",
        "file": "grandparents-mental-health.html"
    },
    {
        "title": "Social Decisions & the Brain",
        "desc": "Explore game theory, neuroeconomics, and amygdala responses during unfair resource negotiations.",
        "level": "c1",
        "date": "02 June 2026",
        "file": "social-decisions-brain.html"
    },
    {
        "title": "Mendelian Laws Broken",
        "desc": "Deconstruct selfish gene drives and meiotic drive mechanisms bypassing classical Mendelian genetics.",
        "level": "c1",
        "date": "30 May 2026",
        "file": "mendelian-laws-broken.html"
    },
    {
        "title": "Why 'Football' Beats 'Shamrock'",
        "desc": "Learn why concrete real nouns are much easier to store and recall than abstract symbols.",
        "level": "b1",
        "date": "20 May 2026",
        "file": "football-beats-shamrock-intermediate.html"
    },
    {
        "title": "Why 'Football' Beats 'Shamrock'",
        "desc": "Analyze recall latency, hierarchical semantic networking, and sensory-motor word retention.",
        "level": "b2",
        "date": "20 May 2026",
        "file": "football-beats-shamrock-upper-intermediate.html"
    },
    {
        "title": "Human Right-Handedness",
        "desc": "Explore neurological lateralization and why hand dominance exists stably in human populations.",
        "level": "b1",
        "date": "17 May 2026",
        "file": "right-handedness.html"
    },
    {
        "title": "AI: Reality or Delusion",
        "desc": "Analyze statistical predictions, model hallucination rates, and semantic grounding in LLMs.",
        "level": "b2",
        "date": "09 May 2026",
        "file": "ai-reality-delusion.html"
    },
    {
        "title": "Impersonation Accounts",
        "desc": "Examine social media trust indicators, identity fraud, and online bot verification.",
        "level": "b1",
        "date": "30 November 2025",
        "file": "impersonation-accounts.html"
    },
    {
        "title": "The Future of Fusion Energy",
        "desc": "Discuss controlled thermonuclear fusion, Tokamaks, and laser ignition thresholds.",
        "level": "b2",
        "date": "15 August 2025",
        "file": "fusion-energy.html"
    },
    {
        "title": "Losing Spoken Words",
        "desc": "Deconstruct lexical attrition, screen time saturation, and linguistic contraction in teenagers.",
        "level": "b1",
        "date": "30 June 2025",
        "file": "losing-spoken-words.html"
    },
    {
        "title": "AI & the Brain",
        "desc": "Compare biological neural networks and digital learning systems from an energy standpoint.",
        "level": "b1",
        "date": "12 May 2025",
        "file": "ai-and-the-brain-intermediate.html"
    },
    {
        "title": "AI & the Brain",
        "desc": "Analyze backpropagation, sparse spike coding, and the thermodynamics of biological learning.",
        "level": "b2",
        "date": "12 May 2025",
        "file": "ai-and-the-brain-upper-intermediate.html"
    }
]

def generate_html_en():
    cards_html = []
    for s in PAST_SESSIONS_EN:
        lvl = LEVELS[s["level"]]
        card = f"""
<div class="science-card history-session" data-level="{s["level"]}">
  <div class="science-ruler"></div>
  <div class="science-card-header">
    <div class="periodic-element">
      <span class="elem-num">{lvl["num"]}</span>
      <span class="elem-symbol">{lvl["symbol"]}</span>
      <span class="elem-name">{lvl["name"]}</span>
    </div>
    <span class="science-lang-flag">🇬🇧</span>
  </div>
  <div class="science-card-body">
    <h4 class="science-card-title">{s["title"]}</h4>
    <p class="science-card-desc">{s["desc"]}</p>
    <div class="wonder-modes-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 1rem;">
      <a class="mode-btn btn-big" href="sessions/keeping-up-with-science/{s["file"]}">🗣️ BIG GROUP</a>
      <a class="mode-btn btn-mini" href="sessions/keeping-up-with-science/{s["file"]}?mode=mini">👥 MINI GROUP</a>
      <a class="mode-btn btn-private" href="sessions/keeping-up-with-science/{s["file"]}?mode=private">🎓 PRIVATE</a>
    </div>
    <div class="science-card-footer" style="margin-top: 1rem;">
      <span class="science-date">{s["date"]}</span>
    </div>
  </div>
</div>"""
        cards_html.append(card)
    return "\n".join(cards_html)

def update_parent_files():
    # 1. Update English Index
    en_path = "events/keeping-up-with-science.html"
    if os.path.exists(en_path):
        with open(en_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Find <div class="history-body" ...> ... </div>
        # replace inner contents with our new grid
        en_cards = generate_html_en()

        soup = BeautifulSoup(content, "html.parser")
        hist_body = soup.find(class_="history-body")
        if hist_body:
            hist_body.clear()
            grid_soup = BeautifulSoup(f'<div class="science-history-grid" id="science-history-grid">{en_cards}</div>', "html.parser")
            hist_body.append(grid_soup)
            # Remove inline padding from history-body
            hist_body["style"] = "display: block; padding: 0; border: none;"

            with open(en_path, "w", encoding="utf-8") as f_out:
                f_out.write(str(soup))
            print(f"Successfully updated English index page: {en_path}")

    # 2. Update French Index
    fr_path = "events/fr/keeping-up-with-science.html"
    if os.path.exists(fr_path):
        with open(fr_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")

        hist_body = soup.find(class_="history-body")
        if hist_body:
            lvl_fr = LEVELS_FR["b1"]
            fr_card = f"""
<div class="science-card history-session" data-level="b1">
  <div class="science-ruler"></div>
  <div class="science-card-header">
    <div class="periodic-element">
      <span class="elem-num">{lvl_fr["num"]}</span>
      <span class="elem-symbol">{lvl_fr["symbol"]}</span>
      <span class="elem-name">{lvl_fr["name"]}</span>
    </div>
    <span class="science-lang-flag">🇫🇷</span>
  </div>
  <div class="science-card-body">
    <h4 class="science-card-title">Comptes d'usurpation d'identité</h4>
    <p class="science-card-desc">Explorez les mécanismes de l'usurpation d'identité en ligne, de la fraude d'identité et de la cybersécurité moderne.</p>
    <div class="wonder-modes-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 1rem;">
      <a class="mode-btn btn-big" href="sessions/keeping-up-with-science/impersonation-accounts.html">🗣️ GRAND GROUPE</a>
      <a class="mode-btn btn-mini" href="sessions/keeping-up-with-science/impersonation-accounts.html?mode=mini">👥 MINI GROUPE</a>
      <a class="mode-btn btn-private" href="sessions/keeping-up-with-science/impersonation-accounts.html?mode=private">🎓 INDIVIDUEL</a>
    </div>
    <div class="science-card-footer" style="margin-top: 1rem;">
      <span class="science-date">01 January 2025</span>
    </div>
  </div>
</div>"""
            hist_body.clear()
            grid_soup = BeautifulSoup(f'<div class="science-history-grid" id="science-history-grid">{fr_card}</div>', "html.parser")
            hist_body.append(grid_soup)
            hist_body["style"] = "display: block; padding: 0; border: none;"

            with open(fr_path, "w", encoding="utf-8") as f_out:
                f_out.write(str(soup))
            print(f"Successfully updated French index page: {fr_path}")

    # 3. Update Russian Index
    ru_path = "events/ru/keeping-up-with-science.html"
    if os.path.exists(ru_path):
        with open(ru_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")

        hist_body = soup.find(class_="history-body")
        if hist_body:
            lvl_ru = LEVELS_RU["c1"]
            ru_card = f"""
<div class="science-card history-session" data-level="c1">
  <div class="science-ruler"></div>
  <div class="science-card-header">
    <div class="periodic-element">
      <span class="elem-num">{lvl_ru["num"]}</span>
      <span class="elem-symbol">{lvl_ru["symbol"]}</span>
      <span class="elem-name">{lvl_ru["name"]}</span>
    </div>
    <span class="science-lang-flag">🇷🇺</span>
  </div>
  <div class="science-card-body">
    <h4 class="science-card-title">Влияние пропаганды на детей и подростков</h4>
    <p class="science-card-desc">Анализ психологического влияния пропаганды, медиа-воздействия и методов манипуляции сознанием.</p>
    <div class="wonder-modes-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 1rem;">
      <a class="mode-btn btn-big" href="sessions/keeping-up-with-science/vliyanie-propagandy-deti.html">🗣️ БОЛЬШАЯ ГРУППА</a>
      <a class="mode-btn btn-mini" href="sessions/keeping-up-with-science/vliyanie-propagandy-deti.html?mode=mini">👥 МИНИ ГРУППА</a>
      <a class="mode-btn btn-private" href="sessions/keeping-up-with-science/vliyanie-propagandy-deti.html?mode=private">🎓 ЧАСТНЫЙ</a>
    </div>
    <div class="science-card-footer" style="margin-top: 1rem;">
      <span class="science-date">12 августа 2026</span>
    </div>
  </div>
</div>"""
            hist_body.clear()
            grid_soup = BeautifulSoup(f'<div class="science-history-grid" id="science-history-grid">{ru_card}</div>', "html.parser")
            hist_body.append(grid_soup)
            hist_body["style"] = "display: block; padding: 0; border: none;"

            with open(ru_path, "w", encoding="utf-8") as f_out:
                f_out.write(str(soup))
            print(f"Successfully updated Russian index page: {ru_path}")

if __name__ == "__main__":
    update_parent_files()
