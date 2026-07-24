import os
from bs4 import BeautifulSoup

TOPIC_MAP = {
    "ai-reality-delusion.html": "AI Psychology / Cognitive Biases",
    "animal-cooperation-language.html": "Animal Communication / Zoology",
    "ape-laughter-speech-origin-elementary.html": "Evolutionary Linguistics / Primatology",
    "ape-laughter-speech-origin-intermediate.html": "Evolutionary Linguistics / Primatology",
    "brain-improving-in-90s.html": "Neuroplasticity / Healthy Aging",
    "climate-scientist-warming-report.html": "Climate Change / Scientific Integrity",
    "football-beats-shamrock.html": "Cognitive Science / Psycholinguistics",
    "fusion-energy.html": "Nuclear Physics / Clean Energy",
    "grandmother-evolutionary-mystery.html": "Evolutionary Biology / Anthropology",
    "grandparents-mental-health.html": "Developmental Psychology / Family Dynamics",
    "hidden-regenerative-powers.html": "Regenerative Medicine / Tissue Biology",
    "impersonation-accounts.html": "Cybersecurity and Digital Fraud",
    "living-most-creative-time.html": "Media Studies / Creative Economy",
    "losing-spoken-words.html": "Sociolinguistics / Digital Communication",
    "mendelian-laws-broken.html": "Genetics / Heredity",
    "museums-movies-theater-stay-younger-elementary.html": "Cultural Gerontology / Public Health",
    "museums-movies-theater-stay-younger-intermediate.html": "Cultural Gerontology / Public Health",
    "ozempic-obesity-revolution.html": "Pharmacology / Metabolic Health",
    "right-handedness.html": "Neurobiology / Evolutionary Asymmetry",
    "sensory-system-pain-disease.html": "Sensory Neuroscience / Pain Management",
    "social-decisions-brain.html": "Social Neuroscience / Decision Making",
    "spider-creatures-origins-of-fatherhood.html": "Evolutionary Zoology / Parental Behavior",
    "where-you-live-shapes-dementia-risk-elementary.html": "Environmental Health / Preventative Neurology",
    "where-you-live-shapes-dementia-risk-intermediate.html": "Environmental Health / Preventative Neurology",
    "your-fingers-hold-secret-brain-evolution.html": "Evolutionary Anatomy / Motor Neuroscience"
}

WARM_UP_SUBTITLES = {
    "animal-cooperation-language.html": "Animal Communication",
    "ape-laughter-speech-origin-elementary.html": "Animal Sounds",
    "ape-laughter-speech-origin-intermediate.html": "Primate Communication",
    "brain-improving-in-90s.html": "Memory and Mind",
    "climate-scientist-warming-report.html": "Climate and Weather",
    "football-beats-shamrock.html": "Word Puzzles",
    "hidden-regenerative-powers.html": "Healing and Biology",
    "ozempic-obesity-revolution.html": "Wellness and Weight",
    "sensory-system-pain-disease.html": "Reflexes and Feelings",
    "grandmother-evolutionary-mystery.html": "Family and Upbringing",
    "mendelian-laws-broken.html": "Genetic Roots",
    "living-most-creative-time.html": "Creative Media",
    "fusion-energy.html": "Star in a Jar",
    "social-decisions-brain.html": "First Impressions",
    "losing-spoken-words.html": "Daily Words",
    "grandparents-mental-health.html": "Family Role",
    "impersonation-accounts.html": "Digital Footprint",
    "right-handedness.html": "Dominant Hand",
    "museums-movies-theater-stay-younger-elementary.html": "Art and Culture",
    "museums-movies-theater-stay-younger-intermediate.html": "Art and Culture",
    "spider-creatures-origins-of-fatherhood.html": "Evolution and Parenting",
    "your-fingers-hold-secret-brain-evolution.html": "Hands and Brain"
}

def update_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    # 1. Update Header Style background
    header = soup.find("header")
    if header and header.get("style"):
        style = header["style"]
        if "background:" in style:
            # Standardize background gradient color
            # We want background: linear-gradient(135deg, #0F6E56, #07372b);
            header["style"] = "background: linear-gradient(135deg, #0F6E56, #07372b);"

    # 2. Inject/Update Topic Metadata
    meta_grid = soup.find(class_="session-meta-grid")
    if meta_grid:
        # Check if topic already exists
        has_topic = False
        for item in meta_grid.find_all(class_="meta-item"):
            h4 = item.find("h4")
            if h4 and h4.get_text().strip().lower() == "topic":
                has_topic = True
                break

        if not has_topic and filename in TOPIC_MAP:
            topic_name = TOPIC_MAP[filename]
            # Create topic div
            topic_div = soup.new_tag("div", attrs={"class": "meta-item"})
            topic_h4 = soup.new_tag("h4")
            topic_h4.string = "Topic"
            topic_p = soup.new_tag("p")
            topic_p.string = topic_name
            topic_div.append(topic_h4)
            topic_div.append(topic_p)

            # Find Resources meta-item to insert right before it
            resources_item = None
            for item in meta_grid.find_all(class_="meta-item"):
                h4 = item.find("h4")
                if h4 and h4.get_text().strip().lower() == "resources":
                    resources_item = item
                    break

            if resources_item:
                resources_item.insert_before(topic_div)
            else:
                meta_grid.append(topic_div)

    # 3. Clean up Round 1 and Round 2 s-warm, s-r1, s-r2
    # Round 1 (s-r1)
    r1_block = soup.find("div", id="s-r1") or soup.find("div", class_="round-1")
    if r1_block:
        r1_body = r1_block.find("div", class_="round-body")
        if r1_body:
            vim_insts = r1_body.find_all("div", class_="vim-instruction")
            for inst in vim_insts:
                inst.decompose()

    # Round 2 (s-r2)
    r2_block = soup.find("div", id="s-r2") or soup.find("div", class_="round-2")
    if r2_block:
        r2_body = r2_block.find("div", class_="round-body")
        if r2_body:
            vim_insts = r2_body.find_all("div", class_="vim-instruction")
            for inst in vim_insts:
                inst.decompose()

    # Warm-up (s-warm)
    warm_block = soup.find("div", id="s-warm") or soup.find("div", class_="warm-up")
    if warm_block:
        warm_body = warm_block.find("div", class_="round-body")
        if warm_body:
            vim_inst = warm_body.find("div", class_="vim-instruction")
            if vim_inst:
                if filename in WARM_UP_SUBTITLES:
                    vim_inst.string = WARM_UP_SUBTITLES[filename]
                elif "Short introduction to" in vim_inst.get_text():
                    # If we don't have a mapped subtitle but it is placeholder, decompose
                    vim_inst.decompose()

    # Save mutated HTML back
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))
    print(f"Standardized {filename}")

def main():
    science_dir = "events/sessions/keeping-up-with-science"
    for filename in sorted(os.listdir(science_dir)):
        if filename.endswith(".html") and not filename.startswith("template"):
            filepath = os.path.join(science_dir, filename)
            update_file(filepath)

if __name__ == "__main__":
    main()
