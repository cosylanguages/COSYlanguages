import os
import re
from bs4 import BeautifulSoup

# Thematic sentence generators to append based on the club category
THEMATIC_FALLBACKS = {
    "mind-matters": [
        "Cette exploration nous invite à regarder au-delà des apparences pour mieux comprendre la psychologie humaine.",
        "Nous analyserons les mécanismes inconscients qui guident nos choix au quotidien.",
        "Rejoignez-nous pour débattre de ces concepts psychologiques fascinants avec notre professeur natif."
    ],
    "keeping-up-with-science": [
        "Cette session explore les avancées récentes et les données empiriques de cette recherche fascinante.",
        "Nous discuterons des implications à long terme de cette découverte scientifique majeure.",
        "C'est l'occasion idéale d'enrichir votre vocabulaire technique et d'aiguiser votre esprit critique."
    ],
    "the-greatest-quotes": [
        "Cette citation nous pousse à réfléchir profondément sur la condition humaine et la philosophie.",
        "Nous analyserons les différentes interprétations de cette pensée avec notre groupe de discussion.",
        "Débattez de ces idées intemporelles tout en perfectionnant vos structures de communication en français."
    ],
    "lets-celebrate": [
        "Nous explorerons l'histoire culturelle, les traditions et les rituels associés à cet événement unique.",
        "Découvrez comment cette fête rassemble les gens à travers le monde moderne.",
        "Une session idéale pour partager vos propres traditions familiales et rituels personnels."
    ],
    "debatable-relatable": [
        "Préparez vos meilleurs arguments pour défendre votre point de vue sur cette controverse moderne.",
        "Cette session confronte des opinions opposées pour susciter des échanges vifs et passionnants.",
        "Une excellente opportunité de pratiquer l'art du débat et de structurer vos pensées en français."
    ],
    "my-life-with-without": [
        "Nous réfléchirons sur les choix de vie personnels et l'impact de nos habitudes quotidiennes.",
        "Comparez les avantages et les inconvénients de ce choix dans une ambiance bienveillante.",
        "Exprimez vos propres regrets et aspirations futures à travers nos exercices conversationnels."
    ],
    "i-couldnt-help-but-wonder": [
        "Cette chronique poétique nous invite à spéculer sur les mystères de notre quotidien.",
        "Nous développerons une réflexion philosophique approfondie autour de cette question intrigante.",
        "Une session immersive pour perfectionner votre aisance orale sur des sujets abstraits."
    ],
    "default": [
        "Cette session interactive vous offre l'espace idéal pour perfectionner votre aisance orale.",
        "Enrichissez votre vocabulaire cible et apprenez à formuler des opinions nuancées.",
        "Rejoignez-nous pour partager vos réflexions avec d'autres apprenants passionnés."
    ]
}

def count_sentences(text):
    if not text:
        return 0
    # Clean up whitespace and split by punctuation followed by space/end of string
    sentences = re.split(r'[.!?]\s+', text.strip())
    # Filter empty items
    sentences = [s for s in sentences if s.strip()]
    return len(sentences)

def process_file(filepath):
    print(f"Checking: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # 1. Look for description container explicitly
    desc_container = soup.find(id="description") or soup.find(class_="session-description") or soup.find(class_="description")

    target_p = None
    if desc_container:
        target_p = desc_container.find('p') or desc_container
    else:
        # Fallback: Find paragraph directly under main or content-container, ignoring meta-items
        content_main = soup.find('main') or soup.find(class_="content-container")
        if content_main:
            # Find all paragraphs under content_main
            paragraphs = content_main.find_all('p', recursive=True)
            for p in paragraphs:
                # EXCLUDE any paragraph that is inside the meta-grid or is part of a meta-item
                parent_classes = []
                curr = p.parent
                while curr and curr != content_main:
                    if curr.name == 'div' and curr.get('class'):
                        parent_classes.extend(curr.get('class'))
                    curr = curr.parent

                is_meta = any(cls in ['session-meta-grid', 'meta-item'] for cls in parent_classes)
                is_vocab = any(cls in ['vocab-grid-10', 'vocab-card'] for cls in parent_classes)
                is_round = any(cls in ['rounds-container', 'round-block', 'round-item', 'round-item-main', 'round-item-personal'] for cls in parent_classes)

                if not is_meta and not is_vocab and not is_round:
                    target_p = p
                    break

    if not target_p:
        print(f"⚠️ Warning: Could not find description paragraph in {filepath}")
        return False

    original_text = target_p.get_text().strip()
    s_count = count_sentences(original_text)

    if s_count >= 3:
        # Already has enough sentences
        return False

    # Determine thematic key based on path/content
    path_lower = filepath.lower()
    theme_key = "default"
    for key in THEMATIC_FALLBACKS.keys():
        if key in path_lower:
            theme_key = key
            break

    # Select fallback sentences that are not already present in the text
    fallbacks = THEMATIC_FALLBACKS[theme_key]
    sentences_to_add = []

    for sentence in fallbacks:
        # Avoid duplicating similar sentences
        first_few_words = " ".join(sentence.split()[:3]).lower()
        if first_few_words not in original_text.lower():
            sentences_to_add.append(sentence)
            if s_count + len(sentences_to_add) >= 3:
                break

    # If still need more, use default fallbacks
    if s_count + len(sentences_to_add) < 3:
        for sentence in THEMATIC_FALLBACKS["default"]:
            first_few_words = " ".join(sentence.split()[:3]).lower()
            if first_few_words not in original_text.lower():
                sentences_to_add.append(sentence)
                if s_count + len(sentences_to_add) >= 3:
                    break

    additional_text = " " + " ".join(sentences_to_add)

    # Append the new sentences inside the paragraph node
    if target_p.name == 'p':
        target_p.append(additional_text)
    elif desc_container:
        # If target_p is the container itself, find or wrap in a paragraph
        p = desc_container.find('p')
        if p:
            p.append(additional_text)
        else:
            new_p = soup.new_tag('p')
            new_p.string = original_text + additional_text
            desc_container.clear()
            desc_container.append(new_p)
    else:
        target_p.string = original_text + additional_text

    # Write back to file with proper formatting
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    print(f"✅ Successfully expanded description in {filepath} (Appended: '{additional_text.strip()}')")
    return True

def main():
    fr_sessions_dir = "events/fr/sessions/"
    if not os.path.exists(fr_sessions_dir):
        print(f"Error: {fr_sessions_dir} does not exist.")
        return

    modified_count = 0
    for root, dirs, files in os.walk(fr_sessions_dir):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    modified_count += 1

    print(f"\n🎉 Done! Expanded short descriptions in {modified_count} French session files.")

if __name__ == "__main__":
    main()
