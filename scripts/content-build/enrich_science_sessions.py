import os
from bs4 import BeautifulSoup

# Additional Round 2 items for the 6 files with only 5 items
ADDITIONAL_ITEMS = {
    "museums-movies-theater-stay-younger-elementary.html": [
        ("Children in the future will learn history through time-travel video games.", "★ Do you prefer learning through games or reading books?"),
        ("Art galleries in 100 years will only display art created by artificial intelligence.", "★ Would you buy a painting if you knew a computer painted it?"),
        ("People will live much longer in the future because they will have robots to entertain them.", "★ What is your favorite way to relax after a busy day?"),
        ("In the future, everyone will be able to paint or play music perfectly using brain-chips.", "★ Would you like to play an instrument perfectly without practicing?"),
        ("Physical actors will disappear, and all movie stars will be digital characters.", "★ Who is your favorite actor or movie character of all time?")
    ],
    "museums-movies-theater-stay-younger-intermediate.html": [
        ("Brain-sensing technology will allow filmmakers to change a movie's plot based on the audience's real-time emotions.", "★ Would you enjoy a movie that changes its ending depending on how you feel?"),
        ("The democratization of art creation through AI tools will eventually make traditional professional artists obsolete.", "★ Do you think artificial intelligence can ever possess genuine creative soul?"),
        ("In the future, sensory-deprivation cinema will become a standard form of deep psychological therapy.", "★ Have you ever tried sensory deprivation or meditation to quiet your mind?"),
        ("Governments will fund mandatory cultural attendance to reduce national public healthcare spending on mental health.", "★ Do you think experiencing art should be considered a basic human right?"),
        ("Future human-computer interfaces will enable us to experience the exact emotions of prehistoric cave painters.", "★ If you could experience the thoughts of any historical artist, who would you choose?")
    ],
    "spider-creatures-origins-of-fatherhood.html": [
        ("Synthetic ecosystems will allow us to observe centuries of evolutionary changes in a few weeks.", "★ Would you feel comfortable living in a city with completely artificial nature?"),
        ("Future educational systems will use animal mating and parenting patterns as the primary model for teaching ethics.", "★ What is the most important lesson about cooperation you have learned from nature?"),
        ("Human-animal neural links will enable fathers of different species to share parenting instincts directly.", "★ If you could temporarily share the consciousness of any animal parent, which would you choose?"),
        ("Bio-engineered insects will be used as domestic babysitters in futuristic smart homes.", "★ Would you trust a harmless, highly intelligent bio-engineered creature to watch your pet?"),
        ("Evolutionary forecasting algorithms will predict how human parenting styles will change over the next ten thousand years.", "★ Do you think human parenting has become easier or harder over the last century?")
    ],
    "where-you-live-shapes-dementia-risk-elementary.html": [
        ("Future houses will change their location automatically to find the best weather.", "★ What is your favorite type of weather, and how does it make you feel?"),
        ("In the future, people will only live in communities with shared gardens and parks.", "★ Do you enjoy spending time in public parks or gardens?"),
        ("Smart necklaces will monitor air pollution around us and warn us to go inside.", "★ Are you worried about air pollution in the place where you live?"),
        ("Future schools will be built entirely in the middle of forests to help children focus.", "★ Did your school have a garden or trees nearby when you were a child?"),
        ("All transportation in future cities will be completely silent and electric.", "★ What is your favorite and most peaceful way to travel around your city?")
    ],
    "where-you-live-shapes-dementia-risk-intermediate.html": [
        ("Brain-health optimization scores will be integrated into public mapping apps to recommend the healthiest walking routes.", "★ Do you choose your walking routes based on scenery, speed, or health benefits?"),
        ("Future employers will be legally required to provide outdoor green-working hours to prevent employee cognitive burnout.", "★ How does working or studying outdoors change your productivity and mood?"),
        ("In 50 years, noise-canceling architectural fields will make cities quieter than modern rural villages.", "★ What is the quietest place you have ever visited, and how did you feel there?"),
        ("Eco-taxation on luxury car use will directly fund the creation of public urban micro-forests in low-income neighborhoods.", "★ Do you think high-pollution luxury activities should face higher taxes?"),
        ("Personalized preventative neurology clinics will be built on every city block as a standard public utility.", "★ How often do you think about long-term brain health in your daily lifestyle choices?")
    ],
    "your-fingers-hold-secret-brain-evolution.html": [
        ("Virtual reality gloves will allow surgeons to perform complex remote surgeries from thousands of miles away.", "★ Would you trust a surgeon operating on you from a different country via a robot?"),
        ("Biometric hand sensors will replace all passwords, credit cards, and door keys globally.", "★ Do you feel secure using fingerprint or facial recognition on your devices?"),
        ("Human hand gestures will evolve into a universally understood global sign language.", "★ Have you ever used hand gestures to communicate with someone who didn't speak your language?"),
        ("Future children will be taught manual dexterity through virtual clay-sculpting before learning to read.", "★ What hands-on hobbies did you enjoy most when you were growing up?"),
        ("Neuro-linguistic implants will translate the subtle finger movements of pianists into spoken philosophy.", "★ Do you think music is a form of language that can express thoughts words cannot?")
    ]
}

# Smart keyword generator for matching personal questions
KEYWORDS_PERSONAL_MAP = [
    (["brain", "cognitive", "neurological", "memory", "mental"],
     "★ Have you ever tried any brain-training exercises or noticed how your memory changes with stress?"),
    (["ai", "machine", "technology", "algorithm", "computer", "digital", "robotic", "online", "network"],
     "★ How much of your daily communication relies on digital technology rather than face-to-face interaction?"),
    (["climate", "warming", "environment", "pollution", "nature", "forest", "weather", "city", "cities", "urban"],
     "★ What is one small environmental or lifestyle change you have personally made in your daily life recently?"),
    (["animal", "species", "nature", "spider", "dog", "laughter", "ape", "pet", "creature", "bird", "insect", "wasp"],
     "★ Have you ever felt a deep non-verbal connection with a pet or an animal in nature?"),
    (["language", "speech", "words", "linguistic", "talk", "vocabulary"],
     "★ Do you express your deepest emotions differently when speaking your native language versus a foreign one?"),
    (["energy", "fusion", "power", "electricity"],
     "★ How conscious are you of your daily energy consumption at home or at your workplace?"),
    (["museum", "movie", "theater", "art", "culture", "performance", "creative", "artist"],
     "★ What is the most emotionally moving piece of art, movie, or live performance you have ever experienced?"),
    (["health", "dementia", "disease", "obesity", "pain", "doctor", "medical", "treatment", "drug", "somatic"],
     "★ How do you personally balance physical exercise and mental rest to maintain your daily health?"),
    (["family", "parent", "grandparent", "children", "elder", "nurturing", "fatherhood"],
     "★ What is the most valuable piece of advice or life lesson you have learned from an older relative?"),
    (["hand", "finger", "dexterity", "typing", "grip", "coordination", "thumb", "gesture"],
     "★ Do you feel more focused when writing with a physical pen or typing on a digital keyboard?")
]

GENERAL_PERSONAL_QUESTIONS = [
    "★ What is your own perspective on how this scientific discovery might affect your immediate community?",
    "★ Do you feel optimistic or concerned about this rapid scientific progression?",
    "★ Have you ever had a personal experience that made you think deeply about this concept?",
    "★ How do you personally adapt when modern progress challenges your traditional way of thinking?",
    "★ What aspect of this scientific topic do you find most relatable to your daily life?",
    "★ If you could spend a day discussing this with a leading scientist, what question would you ask first?"
]

def generate_personal_question(main_text, idx):
    text_lower = main_text.lower()
    for kw_list, question in KEYWORDS_PERSONAL_MAP:
        for kw in kw_list:
            if kw in text_lower:
                return question
    # Return a fallback from the general list based on index
    return GENERAL_PERSONAL_QUESTIONS[idx % len(GENERAL_PERSONAL_QUESTIONS)]

def enrich_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Standardize Round 1 header
    r1_block = soup.find('div', id='s-r1') or soup.find('div', class_='round-1')
    if r1_block:
        r1_header = r1_block.find('div', class_='round-header')
        if r1_header:
            r1_header.clear()
            # Construct standard header structure:
            # <span>🔵 Round 1 — Theoretical Discussion</span><span class="round-toggle">▲</span>
            span1 = soup.new_tag('span')
            span1.string = "🔵 Round 1 — Theoretical Discussion"
            span2 = soup.new_tag('span', attrs={'class': 'round-toggle'})
            span2.string = "▲"
            r1_header.append(span1)
            r1_header.append(span2)

        # Standardize items
        r1_body = r1_block.find('div', class_='round-body')
        if r1_body:
            r1_items = r1_body.find_all('div', class_='round-item')
            for i, item in enumerate(r1_items):
                main_div = item.find('div', class_='round-item-main')
                if not main_div:
                    # Item doesn't have structure, wrap its current contents
                    inner_html = "".join([str(c) for c in item.contents])
                    item.clear()
                    main_div = soup.new_tag('div', attrs={'class': 'round-item-main'})
                    main_div.append(BeautifulSoup(inner_html, 'html.parser'))
                    item.append(main_div)

                pers_div = item.find('div', class_='round-item-personal')
                if not pers_div:
                    clean_main = main_div.get_text().strip()
                    pers_q = generate_personal_question(clean_main, i)
                    pers_div = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                    pers_div.string = pers_q
                    item.append(pers_div)
                elif not pers_div.get_text().strip():
                    clean_main = main_div.get_text().strip()
                    pers_q = generate_personal_question(clean_main, i)
                    pers_div.string = pers_q

    # Standardize Round 2 header
    r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')
    if r2_block:
        r2_header = r2_block.find('div', class_='round-header')
        if r2_header:
            r2_header.clear()
            # Construct standard header structure:
            # <span>🟢 Round 2 — The Future: Agree or Disagree?</span><span class="round-toggle">▲</span>
            span1 = soup.new_tag('span')
            span1.string = "🟢 Round 2 — The Future: Agree or Disagree?"
            span2 = soup.new_tag('span', attrs={'class': 'round-toggle'})
            span2.string = "▲"
            r2_header.append(span1)
            r2_header.append(span2)

        r2_body = r2_block.find('div', class_='round-body')
        if r2_body:
            # If the session is in ADDITIONAL_ITEMS and currently has less than 10 items, append
            current_r2_items = r2_body.find_all('div', class_='round-item')
            if filename in ADDITIONAL_ITEMS and len(current_r2_items) < 10:
                extra = ADDITIONAL_ITEMS[filename]
                for main_t, pers_t in extra:
                    if len(r2_body.find_all('div', class_='round-item')) < 10:
                        new_item = soup.new_tag('div', attrs={'class': 'round-item'})
                        m_div = soup.new_tag('div', attrs={'class': 'round-item-main'})
                        m_div.string = main_t
                        p_div = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                        p_div.string = pers_t
                        new_item.append(m_div)
                        new_item.append(p_div)
                        r2_body.append(new_item)

            # Standardize items
            r2_items = r2_body.find_all('div', class_='round-item')
            for i, item in enumerate(r2_items):
                main_div = item.find('div', class_='round-item-main')
                if not main_div:
                    # Item doesn't have structure, wrap its current contents
                    inner_html = "".join([str(c) for c in item.contents])
                    item.clear()
                    main_div = soup.new_tag('div', attrs={'class': 'round-item-main'})
                    main_div.append(BeautifulSoup(inner_html, 'html.parser'))
                    item.append(main_div)

                pers_div = item.find('div', class_='round-item-personal')
                if not pers_div:
                    clean_main = main_div.get_text().strip()
                    pers_q = generate_personal_question(clean_main, i + 5)
                    pers_div = soup.new_tag('div', attrs={'class': 'round-item-personal'})
                    pers_div.string = pers_q
                    item.append(pers_div)
                elif not pers_div.get_text().strip():
                    clean_main = main_div.get_text().strip()
                    pers_q = generate_personal_question(clean_main, i + 5)
                    pers_div.string = pers_q

    # Save mutated HTML back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"✔️ Fully enriched and formatted {filename}")

def main():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    for filename in files:
        filepath = os.path.join(science_dir, filename)
        enrich_file(filepath)

if __name__ == '__main__':
    main()
