import os
import re
from bs4 import BeautifulSoup
from remediate_french_data import VOCAB_FRENCH, VOCAB_OPPOSITES
from remediate_french_questions import SONG_QUESTIONS

OUTPUT_DIR = "events/sessions/karaoke-club"

GENIUS_URLS = {
    "je-taime-comme-je-taime": "https://genius.com/Maelle-je-taime-comme-je-taime-lyrics",
    "salut": "https://genius.com/Joe-dassin-salut-lyrics",
    "toi-mon-amour": "https://genius.com/Marc-lavoine-toi-mon-amour-lyrics",
    "oui-ou-non": "https://genius.com/Angele-oui-ou-non-lyrics",
    "balance-ton-quoi": "https://genius.com/Angele-balance-ton-quoi-lyrics",
    "laziza": "https://genius.com/Daniel-balavoine-laziza-lyrics",
    "nos-ames-sont": "https://genius.com/Zazie-nos-ames-sont-lyrics",
    "immobile": "https://genius.com/Louane-immobile-lyrics",
    "la-nuit-nen-finit-plus": "https://genius.com/Petula-clark-la-nuit-nen-finit-plus-lyrics",
    "le-soleil-noir": "https://genius.com/Barbara-le-soleil-noir-lyrics",
    "la-tour-eiffel-est-pour-moi": "https://genius.com/Angelina-wismes-la-tour-eiffel-est-pour-moi-lyrics",
    "quelquun-pour-toi": "https://genius.com/Madame-monsieur-quelquun-pour-toi-lyrics",
    "bien-plus-fort": "https://genius.com/Tereza-kesovija-bien-plus-fort-lyrics",
    "un-premier-amour": "https://genius.com/Isabelle-aubret-un-premier-amour-lyrics",
    "voila": "https://genius.com/Barbara-pravi-voila-lyrics",
    "leffet-de-masse": "https://genius.com/Maelle-leffet-de-masse-lyrics",
    "ouvrir-les-yeux": "https://genius.com/Maelle-ouvrir-les-yeux-lyrics",
    "la-complainte-de-la-serveuse-automate": "https://genius.com/Starmania-la-complainte-de-la-serveuse-automate-lyrics",
    "le-monde-est-stone": "https://www.paroles.net/starmania/paroles-le-monde-est-stone",
    "un-garcon-pas-comme-les-autres": "https://www.paroles.net/starmania/paroles-un-garcon-pas-comme-les-autres-ziggy",
    "les-uns-contre-les-autres": "https://genius.com/Fabienne-thibeault-les-uns-contre-les-autres-lyrics",
    "toutes-les-machines-ont-le-coeur": "https://genius.com/Maelle-toutes-les-machines-ont-le-coeur-lyrics"
}

SENSITIVE_WARNINGS = {
    "balance-ton-quoi": "Cette chanson d'Angèle dénonce le sexisme ordinaire, le harcèlement de rue et revendique le respect et l'égalité des genres. Veuillez aborder cette discussion avec maturité, respect et écoute bienveillante.",
    "laziza": "Ce titre de Daniel Balavoine est un hymne à la tolérance, célébrant l'amour interculturel contre le racisme et l'exclusion. Nous vous invitons à échanger avec respect, ouverture d'esprit et empathie.",
    "leffet-de-masse": "Cette œuvre poignante aborde le harcèlement scolaire, la pression du groupe et l'isolement des adolescents. La discussion requiert une grande délicatesse, une écoute respectueuse et beaucoup d'empathie.",
    "la-complainte-de-la-serveuse-automate": "Cette chanson exprime l'aliénation au travail, la routine robotique et le désir d'évasion vers une vie plus simple. Abordons ces thèmes existentiels avec sensibilité et réflexion.",
    "le-monde-est-stone": "Ce chef-d'œuvre de Starmania traite de la dépression, de la perte de sens et de l'épuisement face au chaos urbain. Veuillez mener cette réflexion avec douceur, écoute et empathie.",
    "un-garcon-pas-comme-les-autres": "Cette chanson explore l'amour non partagé, les attirances impossibles et la complexité des sentiments. La discussion doit se dérouler dans un esprit de tolérance et de respect mutuel.",
    "les-uns-contre-les-autres": "Ce titre aborde la solitude existentielle, le besoin de tendresse physique et la recherche de connexion humaine dans la foule. Échangeons avec bienveillance et sensibilité.",
    "le-soleil-noir": "Cette chanson mélancolique de Barbara exprime le deuil, la perte d'un être cher et la profonde tristesse qui l'accompagne. Abordons ce sujet sensible avec douceur et respect.",
    "la-nuit-nen-finit-plus": "Ce titre évoque l'insomnie, la solitude nocturne et la tristesse d'une attente amoureuse. La discussion se déroulera sous le signe de l'empathie et de l'écoute.",
    "ouvrir-les-yeux": "Cette chanson exprime la mélancolie, le sentiment d'être enfermé dans ses pensées et la recherche de l'espoir. Menons cet échange avec douceur et bienveillance."
}

def clean_word(word):
    # Strip whitespace and standard separators
    return word.strip().replace("’", "'")

def get_base_noun(w):
    w = w.lower().strip().replace("’", "'")
    w = w.split("≠")[0].strip()
    for art in ["le ", "la ", "l'", "les ", "un ", "une ", "des "]:
        if w.startswith(art):
            w = w[len(art):]
            break
    return w.strip()

def escape_js(text):
    return text.replace("'", "\\'")

def process_song_file(filename):
    slug = filename.replace(".html", "")
    filepath = os.path.join(OUTPUT_DIR, filename)

    with open(filepath, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")

    # 1. Update Duration Metadata
    meta_dur = soup.find("div", class_="meta-item")
    if meta_dur:
        # Re-write the duration item to always be 90-120 minutes in French
        dur_h4 = meta_dur.find("h4")
        if dur_h4 and ("dur" in dur_h4.text.lower() or "duration" in dur_h4.text.lower()):
            dur_h4.string = "Durée"
            dur_p = meta_dur.find("p")
            if dur_p:
                dur_p.string = "90–120 minutes"

    # Also double check if there are other meta-items with English headers
    for mi in soup.find_all("div", class_="meta-item"):
        h4 = mi.find("h4")
        if h4:
            if h4.text.strip().lower() == "language":
                h4.string = "Langue"
            elif h4.text.strip().lower() == "level":
                h4.string = "Niveau"
            elif h4.text.strip().lower() == "theme":
                h4.string = "Thème"

    # 2. Handle Sensitive Topic Warning
    # Remove existing sensitive topic warning if any, and inject our clean custom one
    existing_warn = soup.find("div", class_="sensitive-topic-warning")
    if existing_warn:
        existing_warn.decompose()

    q_data = SONG_QUESTIONS.get(slug)
    if q_data and q_data.get("sensitive", False) or slug in SENSITIVE_WARNINGS:
        warning_text = SENSITIVE_WARNINGS[slug]
        warn_html = f"""
  <!-- SENSITIVE TOPIC ALERT -->
  <div class="sensitive-topic-warning" style="margin-bottom: 2rem; padding: 1.25rem; background: rgba(229, 62, 62, 0.05); border-left: 4px solid #E53E3E; border-radius: 12px; font-size: 0.92rem; line-height: 1.5; color: #9B2C2C; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm);">
    <span style="font-size: 1.4rem; line-height: 1;">🔞</span>
    <div>
      <strong style="color: #9B2C2C;">Note sur le thème sensible :</strong> {warning_text}
    </div>
  </div>
"""
        # Inject warning right after the .theme-box
        theme_box = soup.find("div", class_="theme-box")
        if theme_box:
            theme_box.insert_after(BeautifulSoup(warn_html, "html.parser"))

    # 3. Rebuild Vocabulary Section (overwrite definitions/examples)
    vocab_grid = soup.find("div", class_="vocab-grid-10")
    if vocab_grid:
        # Extract existing vocabulary words and rebuild the cards
        cards = vocab_grid.find_all("div", class_="vocab-card")
        new_cards_html = []
        for card in cards:
            word_div = card.find("div", class_="vocab-word")
            if not word_div:
                continue
            word_raw = word_div.text.strip()
            word_clean = clean_word(word_raw)

            # Lookup in VOCAB_FRENCH using the smart base noun matching helper
            lookup_key = None
            for k in VOCAB_FRENCH:
                if get_base_noun(k) == get_base_noun(word_clean):
                    lookup_key = k
                    break

            if lookup_key:
                definition, example = VOCAB_FRENCH[lookup_key]
                word_display = lookup_key
            else:
                # Fallback if somehow not defined
                definition = card.find("div", class_="vocab-def").text.strip() if card.find("div", class_="vocab-def") else "Définition à compléter."
                example = card.find("div", class_="vocab-example").text.strip() if card.find("div", class_="vocab-example") else "Exemple à compléter."
                word_display = word_raw

            # Check opposite
            opposite_html = ""
            opp_word = None
            # Extract opposite from dict or card
            for k_opp in VOCAB_OPPOSITES:
                if k_opp.lower() in word_clean.lower():
                    opp_word = VOCAB_OPPOSITES[k_opp]
                    break
            if opp_word:
                opposite_html = f"""<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{opp_word}</span></div>"""
            else:
                # Retain existing opposite if any
                existing_opp = card.find("div", class_="vocab-opposite")
                if existing_opp:
                    opposite_html = str(existing_opp)

            escaped_word = escape_js(word_display)
            escaped_def = escape_js(definition)
            escaped_ex = escape_js(example)

            card_html = f"""<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{word_display}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>
{opposite_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">+ Dictionnaire</button>
</div>"""
            new_cards_html.append(card_html)

        # Re-inject the beautiful cleaned cards
        vocab_grid.clear()

        # We can also add category titles if present originally, or just inject cards
        header1 = soup.new_tag("h3", style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);")
        header1.string = "❤️ Concepts clés & Émotions"
        vocab_grid.append(header1)
        for c_html in new_cards_html[:5]:
            vocab_grid.append(BeautifulSoup(c_html, "html.parser"))

        header2 = soup.new_tag("h3", style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);")
        header2.string = "🗣️ Vie, Actions & Connexion"
        vocab_grid.append(header2)
        for c_html in new_cards_html[5:]:
            vocab_grid.append(BeautifulSoup(c_html, "html.parser"))

    # 4. Prune Lyrics to Short Excerpt containing Gaps
    lyrics_p = soup.find("div", class_="lyrics-container")
    if lyrics_p:
        p_tag = lyrics_p.find("p")
        if p_tag:
            p_str = "".join(str(c) for c in p_tag.contents)
            paragraphs = re.split(r'<br\s*/?>\s*<br\s*/?>', p_str, flags=re.IGNORECASE)
            kept_paragraphs = []

            for idx, para in enumerate(paragraphs):
                p_soup = BeautifulSoup(para, "html.parser")
                # Keep paragraph if it has an input gap
                if p_soup.find("input"):
                    # Check if there is an preceding paragraph header (like [Couplet 1])
                    header_line = ""
                    if idx > 0:
                        prev_para = paragraphs[idx - 1].strip()
                        if prev_para.startswith("[") and prev_para.endswith("]") and not BeautifulSoup(prev_para, "html.parser").find("input"):
                            header_line = prev_para + "<br>"
                    kept_paragraphs.append(header_line + para.strip())

            if not kept_paragraphs and paragraphs:
                kept_paragraphs.append(paragraphs[0].strip())

            new_p_str = "<br><br>".join(kept_paragraphs)
            p_tag.clear()
            p_tag.append(BeautifulSoup(new_p_str, "html.parser"))

            # Let's ensure there is the lyrics disclaimer at the bottom of the lyrics container
            disclaimer = p_tag.find("span", class_="lyrics-disclaimer")
            if disclaimer:
                disclaimer.decompose()
            p_tag.append(BeautifulSoup('\n<span class="lyrics-disclaimer" style="display: block; margin-top: 1.5rem; font-size: 0.8rem; color: var(--muted); border-top: 1px solid var(--border); padding-top: 0.75rem; font-family: \'Nunito\', sans-serif; font-style: normal;">Paroles extraites uniquement à des fins éducatives.</span>', "html.parser"))

    # 4.5 Localize Speaking Time Gauge
    gauge = soup.find("div", class_="speaking-time-gauge")
    if gauge:
        # replace any span text
        for span in gauge.find_all("span"):
            text = span.text.strip()
            if "Speaking Time Gauge" in text:
                span.string = "🗣️ Répartition du temps de parole"
            elif "Session" in text:
                span.string = text.replace("Session", "").strip() + " de session"
            elif "Warm-up" in text:
                span.string = text.replace("Warm-up", "Échauffement")
            elif "Vocabulary" in text:
                span.string = text.replace("Vocabulary", "Vocabulaire")
            elif "Listening" in text:
                span.string = text.replace("Listening", "Écoute")
            elif "Discussion" in text:
                span.string = text.replace("Discussion", "Discussion")
            elif "Language Focus" in text:
                span.string = text.replace("Language Focus", "Point de langue")
            elif "Final Challenge" in text:
                span.string = text.replace("Final Challenge", "Défi final")
        # replace any title attributes in the bar divs
        for div in gauge.find_all("div", title=True):
            title = div["title"]
            if "Warm-up" in title:
                div["title"] = title.replace("Warm-up", "Échauffement")
            elif "Vocabulary" in title:
                div["title"] = title.replace("Vocabulary", "Vocabulaire")
            elif "Listening" in title:
                div["title"] = title.replace("Listening", "Écoute")
            elif "Discussion" in title:
                div["title"] = title.replace("Discussion", "Discussion")
            elif "Language Focus" in title:
                div["title"] = title.replace("Language Focus", "Point de langue")
            elif "Final Challenge" in title:
                div["title"] = title.replace("Final Challenge", "Défi final")

    # 5. Overwrite Discussion Rounds
    disc_block = soup.find("div", id="discussion")
    if disc_block:
        r1_container = disc_block.find("div", class_="round-1")
        r2_container = disc_block.find("div", class_="round-2")

        song_q = SONG_QUESTIONS.get(slug)
        if song_q:
            # Overwrite Round 1
            if r1_container:
                r1_container.clear()
                h3 = soup.new_tag("h3", style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;")
                h3.string = "🔵 Round 1 — Lyric Analysis & Discussion"
                r1_container.append(h3)

                for main_q, pers_q in song_q["r1"]:
                    item_html = f"""<div class="round-item"><div class="round-item-main">{main_q}</div>
<div class="round-item-personal">{pers_q}</div>
</div>\n"""
                    r1_container.append(BeautifulSoup(item_html, "html.parser"))

            # Overwrite Round 2
            if r2_container:
                r2_container.clear()
                h3 = soup.new_tag("h3", style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;")
                h3.string = "🟢 Round 2 — Broad Themes & Philosophy Debate"
                r2_container.append(h3)

                for stmt in song_q["r2"]:
                    item_html = f"""<div class="round-item"><div class="round-item-main">{stmt}</div>
</div>\n"""
                    r2_container.append(BeautifulSoup(item_html, "html.parser"))

    # 6. Overwrite Language Focus and Final Challenge with correct French localized text
    lf_block = soup.find("div", id="lang-focus")
    if lf_block:
        for strong_tag in lf_block.find_all("strong"):
            if "Let's Practise" in strong_tag.text or "Let’s Practise" in strong_tag.text:
                strong_tag.string = "Mise en pratique — Trois exemples :"

    # 7. Add Works Cited / Sources Section
    existing_sources = soup.find("section", class_="sources-section")
    if existing_sources:
        existing_sources.decompose()

    genius_url = GENIUS_URLS.get(slug, f"https://genius.com/{slug}-lyrics")
    yt_links = []
    for a in soup.find_all("a", href=True):
        if "youtube.com" in a["href"] or "youtu.be" in a["href"]:
            yt_links.append(a["href"])
    yt_url = yt_links[0] if yt_links else "https://www.youtube.com"

    artist_name = soup.find("p", class_="session-date")
    artist_str = artist_name.text.split("•")[0].strip() if artist_name else "Artiste"
    title_str = soup.find("h1").text.strip() if soup.find("h1") else slug.replace("-", " ").title()

    if "Bloom" in artist_str or "Rebecca" in artist_str:
        artist_str = "Rachel Bloom"

    works_cited_html = f"""
  <!-- Sources Section -->
  <section class="sources-section" style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border); font-size: 0.85rem; color: var(--muted); line-height: 1.6;">
    <h4 style="margin-bottom: 0.5rem; color: var(--ink);">Sources &amp; Citations</h4>
    <ul style="list-style-type: none; padding-left: 0; margin-bottom: 1rem;">
      <li style="margin-bottom: 0.4rem;">Genius. « {artist_str} – {title_str} (Paroles) » <em>Genius</em>, <a href="{genius_url}" target="_blank" style="color: var(--teal);">{genius_url}</a>. Consulté le 30 juillet 2026.</li>
      <li>« {title_str} » <em>YouTube</em>, téléchargé par {artist_str}, <a href="{yt_url}" target="_blank" style="color: var(--teal);">{yt_url}</a>.</li>
    </ul>
    <p style="font-style: italic; margin-top: 0.5rem; border-top: 1px dashed var(--border); padding-top: 0.5rem;">
      Paroles extraites uniquement à des fins éducatives. Tous les droits sur les paroles et l'enregistrement appartiennent aux auteurs-compositeurs, interprètes et détenteurs de droits d'origine.
    </p>
  </section>
"""
    main_tag = soup.find("main")
    if main_tag:
        mistake_b = main_tag.find("div", class_="mistake-block")
        if mistake_b:
            mistake_b.insert_before(BeautifulSoup(works_cited_html, "html.parser"))
        else:
            main_tag.append(BeautifulSoup(works_cited_html, "html.parser"))

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))

    print(f"✓ Fixed {filename}")

def sync_challenge_file(challenge_slug, sub_slugs):
    filepath = os.path.join(OUTPUT_DIR, f"{challenge_slug}.html")
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    # Rebuild duration inside meta-grid to be exactly 90 minutes
    meta_dur = soup.find("div", class_="meta-item")
    if meta_dur:
        dur_h4 = meta_dur.find("h4")
        if dur_h4 and ("dur" in dur_h4.text.lower() or "duration" in dur_h4.text.lower()):
            dur_h4.string = "Durée"
            dur_p = meta_dur.find("p")
            if dur_p:
                dur_p.string = "90 minutes"

    # Also double check meta-items headers
    for mi in soup.find_all("div", class_="meta-item"):
        h4 = mi.find("h4")
        if h4:
            if h4.text.strip().lower() == "language":
                h4.string = "Langue"
            elif h4.text.strip().lower() == "level":
                h4.string = "Niveau"
            elif h4.text.strip().lower() == "theme":
                h4.string = "Thème"

    # Find <vim-choice-option> tabs
    tabs = soup.find_all("vim-choice-option")
    if len(tabs) != len(sub_slugs):
        print(f"Mismatch in tabs count for {challenge_slug}!")
        return

    for tab, sub_slug in zip(tabs, sub_slugs):
        sub_filepath = os.path.join(OUTPUT_DIR, f"{sub_slug}.html")
        with open(sub_filepath, "r", encoding="utf-8") as f_sub:
            sub_soup = BeautifulSoup(f_sub.read(), "html.parser")

        # Extract components from the updated standalone song page
        meta_grid = sub_soup.find("div", class_="session-meta-grid")
        warn_block = sub_soup.find("div", class_="sensitive-topic-warning")
        theme_box = sub_soup.find("div", class_="theme-box")
        gauge_block = sub_soup.find("div", class_="speaking-time-gauge")
        rounds_container = sub_soup.find("div", class_="rounds-container")

        # Clone them to avoid modifying original soup tree structure
        if meta_grid:
            # Change any full absolute links in the resource block within challenge tabs to remain clear
            pass

        # Re-suffix IDs and onclick toggleRound handlers within challenge rounds to prevent tab conflicts
        if rounds_container:
            for div in rounds_container.find_all("div", class_="round-block"):
                original_id = div.get("id")
                if original_id and not original_id.endswith(f"-{sub_slug}"):
                    new_id = f"{original_id}-{sub_slug}"
                    div["id"] = new_id
                    # Update header click toggler
                    header = div.find("div", class_="round-header")
                    if header:
                        header["onclick"] = f"COSY.toggleRound('{new_id}')"
            for div in rounds_container.find_all("div", class_="mistake-block"):
                original_id = div.get("id")
                if original_id and not original_id.endswith(f"-{sub_slug}"):
                    new_id = f"{original_id}-{sub_slug}"
                    div["id"] = new_id
                    header = div.find("div", class_="mistake-header")
                    if header:
                        header["onclick"] = f"COSY.toggleBlock('{new_id}')"

        # Now clear and inject these updated components into the tab option content
        content_div = tab.find("vim-choice-option-content")
        if content_div:
            content_div.clear()

            # Reconstruct the tab body nicely
            if meta_grid:
                content_div.append(BeautifulSoup(str(meta_grid), "html.parser"))
            if theme_box:
                content_div.append(BeautifulSoup(str(theme_box), "html.parser"))
            if warn_block:
                content_div.append(BeautifulSoup(str(warn_block), "html.parser"))
            if gauge_block:
                content_div.append(BeautifulSoup(str(gauge_block), "html.parser"))
            if rounds_container:
                content_div.append(BeautifulSoup(str(rounds_container), "html.parser"))

    # Save the synchronized challenge file
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))

    print(f"★ Synchronized Challenge Page: {challenge_slug}.html")

if __name__ == "__main__":
    # Fix songs first
    files = [
        'toutes-les-machines-ont-le-coeur.html',
        'je-taime-comme-je-taime.html',
        'salut.html',
        'toi-mon-amour.html',
        'oui-ou-non.html',
        'balance-ton-quoi.html',
        'laziza.html',
        'nos-ames-sont.html',
        'immobile.html',
        'la-nuit-nen-finit-plus.html',
        'le-soleil-noir.html',
        'la-tour-eiffel-est-pour-moi.html',
        'quelquun-pour-toi.html',
        'bien-plus-fort.html',
        'un-premier-amour.html',
        'voila.html',
        'leffet-de-masse.html',
        'ouvrir-les-yeux.html',
        'la-complainte-de-la-serveuse-automate.html',
        'le-monde-est-stone.html',
        'un-garcon-pas-comme-les-autres.html',
        'les-uns-contre-les-autres.html'
    ]
    for f in files:
        process_song_file(f)

    # Sync the 4 challenge files
    challenges = {
        "maelle-challenge": ["toutes-les-machines-ont-le-coeur", "je-taime-comme-je-taime"],
        "angele-challenge": ["oui-ou-non", "balance-ton-quoi"],
        "angelina-wismes-challenge": ["le-soleil-noir", "la-tour-eiffel-est-pour-moi"],
        "fabienne-thibeault-challenge": [
            "la-complainte-de-la-serveuse-automate", "le-monde-est-stone",
            "un-garcon-pas-comme-les-autres", "les-uns-contre-les-autres"
        ]
    }

    for c_slug, subs in challenges.items():
        sync_challenge_file(c_slug, subs)

    # Localize parent page descriptions to French
    FRENCH_CARD_DESCRIPTIONS = {
        "toutes-les-machines-ont-le-coeur.html": "Discutez de la connexion émotionnelle, des sentiments humains dans un monde numérique et de la résilience dans ce chef-d'œuvre mélancolique de Maëlle.",
        "je-taime-comme-je-taime.html": "Analysez l'attachement profond, le doux fardeau du romantisme et la complexité de l'amour moderne dans ce superbe titre pop de Maëlle.",
        "salut.html": "Déconstruisez la nostalgie, le temps qui passe, les retrouvailles douces-amères et l'art du récit de la chanson française classique.",
        "toi-mon-amour.html": "Explorez la dévotion amoureuse, le destin partagé, l'intimité émotionnelle et la beauté de la narration en duo.",
        "oui-ou-non.html": "Analysez l'hésitation, les messages modernes, l'anxiété de l'attente et l'ambiguïté amoureuse dans ce hit pop spirituel d'Angèle.",
        "balance-ton-quoi.html": "Discutez du respect, du féminisme, de l'égalité et de la lutte contre le sexisme dans ce hit français spirituel et engagé d'Angèle.",
        "laziza.html": "Analysez la tolérance interculturelle, la diversité, la paix et l'engagement contre l'exclusion dans cet hymne légendaire de Balavoine.",
        "nos-ames-sont.html": "Déconstruisez les connexions spirituelles profondes, les liens invisibles, la sensibilité et le mystère de l'empathie humaine.",
        "immobile.html": "Analysez la vulnérabilité émotionnelle, la peur du changement et le pouvoir de l'immobilité dans cette ballade passionnée de Louane.",
        "la-nuit-nen-finit-plus.html": "Explorez la mélancolie pensive, l'insomnie de minuit, la solitude et le son intemporel de la pop française des années 1960.",
        "le-soleil-noir.html": "Déconstruisez le deuil, la perte, l'ombre de la tristesse et le symbolisme poétique profond de cette chanson classique de Barbara.",
        "la-tour-eiffel-est-pour-moi.html": "Célébrez Paris, le romantisme architectural, la fierté et la joie de trouver la beauté dans les rues de la ville.",
        "quelquun-pour-toi.html": "Discutez du soutien profond, de l'empathie, de la solidarité envers les autres et de la présence humaine inconditionnelle.",
        "bien-plus-fort.html": "Analysez l'intensité émotionnelle, la passion débordante, la dévotion absolue et la force d'une connexion sincère.",
        "un-premier-amour.html": "Explorez la jeunesse, l'innocence, la pureté amoureuse et le souvenir doux-amer d'un tout premier amour.",
        "voila.html": "Déconstruisez la vulnérabilité artistique, la présentation de soi sans fard et le désir intense d'être entendu et vu.",
        "la-complainte-de-la-serveuse-automate.html": "Déconstruisez la routine, l'aliénation et les rêves simples dans cette touchante ballade acoustique de Starmania.",
        "le-monde-est-stone.html": "Analysez l'épuisement, le désespoir et l'engourdissement existentiel dans ce magnifique et dramatique chef-d'œuvre de Starmania.",
        "un-garcon-pas-comme-les-autres.html": "Discutez de l'amour non partagé, des attractions interdites et de l'amitié profonde dans ce classique emblématique de Starmania.",
        "les-uns-contre-les-autres.html": "Déconstruisez la connexion réciproque et la solitude existentielle dans ce magnifique et touchant morceau."
    }

    parent_path = "events/karaoke-club.html"
    with open(parent_path, "r", encoding="utf-8") as f:
        parent_soup = BeautifulSoup(f.read(), "html.parser")

    sessions = parent_soup.find_all("div", class_="history-session")
    modified = 0
    for s in sessions:
        links = s.find_all("a")
        for link in links:
            href = link.get("href", "")
            for filename, french_desc in FRENCH_CARD_DESCRIPTIONS.items():
                if filename in href:
                    p_tag = s.find("p")
                    if p_tag and not p_tag.text.strip().startswith("Notre défi") and not p_tag.text.strip().startswith("Notre "):
                        p_tag.string = french_desc
                        modified += 1
                        break

    if modified > 0:
        with open(parent_path, "w", encoding="utf-8") as f:
            f.write(str(parent_soup))
        print(f"✓ Localised {modified} parent card descriptions in {parent_path}")
