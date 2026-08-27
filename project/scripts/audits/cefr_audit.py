import os
import re
from bs4 import BeautifulSoup

# Heuristics for CEFR analysis
ADVANCED_WORDS = {
    "subconscious", "neuroscience", "neuroscientific", "cognitive", "dilemma", "estrangement",
    "self-actualization", "existential", "reconcile", "adaptability", "alienation", "resentment",
    "homologous", "homology", "acoustic", "articulation", "hypothesis", "hypothesis-driven",
    "unprecedented", "manifestation", "phenomenon", "regeneration", "regenerative", "therapeutic",
    "physiological", "gerontology", "psycholinguistics", "longevity", "infrastructure",
    "inversion", "subjunctive", "speculative", "sociological", "philosophical", "dissemble",
    "grapple", "shroud", "feign", "bluewashing", "pinkwashing", "purple-washing", "whitewashing",
    "sportswashing", "brainwashing", "bounded-rationality", "rationality", "anticipatory"
}

EASY_WORDS = {
    "laughter", "origin", "speech", "ape", "reveal", "sound", "play", "similar", "tickle",
    "scientist", "simple", "friend", "happy", "house", "pet", "dog", "cat", "time", "day",
    "home", "family", "car", "job", "study", "work", "city", "food", "drink", "book", "movie"
}

ADVANCED_GRAMMAR_KEYWORDS = {
    "inversion", "subjunctive", "mixed conditional", "third conditional", "past perfect",
    "participle clause", "cleft sentence", "passive with reporting", "noun clause"
}

EASY_GRAMMAR_KEYWORDS = {
    "present simple", "past simple", "comparative", "superlative", "can", "cant", "there is",
    "there are", "possessive", "pronoun", "going to", "simple future", "will"
}

def analyze_session(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    # Get club name
    club_tag_div = soup.find(class_="club-tag")
    club = club_tag_div.get_text().strip() if club_tag_div else "Unknown Club"

    # Get session title
    title_h1 = soup.find("h1")
    title = title_h1.get_text().strip() if title_h1 else "No Title"

    # Get CEFR level
    level = "Unknown"
    level_tags = soup.find_all("h4")
    for lt in level_tags:
        if lt.get_text().strip() == "Level":
            p_val = lt.find_next_sibling("p")
            if p_val:
                level = p_val.get_text().strip()
                break

    # Extract vocabulary words
    vocab_words = []
    vocab_section = soup.find(id="vocabulary")
    if vocab_section:
        word_divs = vocab_section.find_all(class_="vocab-word")
        for wd in word_divs:
            vocab_words.append(wd.get_text().strip().lower())

    # Extract grammar topic
    grammar_topic = "None"
    grammar_section = soup.find(class_="grammar") or soup.find(id="s-grammar")
    if grammar_section:
        header = grammar_section.find(["h2", "h3"])
        if header:
            grammar_topic = header.get_text().strip()

    # Extract Round 1 and Round 2 questions
    questions = []
    for round_block in soup.find_all(class_=["round-1", "round-2"]):
        items = round_block.find_all(class_="round-item-main")
        for item in items:
            questions.append(item.get_text().strip().lower())
        items_p = round_block.find_all(class_="round-item-personal")
        for item in items_p:
            questions.append(item.get_text().strip().lower())

    # Map target simplified level
    lvl_lower = level.lower()
    is_a_level = "a1" in lvl_lower or "a2" in lvl_lower or "beginner" in lvl_lower or "starter" in lvl_lower or "elementary" in lvl_lower
    is_b_level = "b1" in lvl_lower or "b2" in lvl_lower or "intermediate" in lvl_lower or "upper-intermediate" in lvl_lower or "adults" in lvl_lower
    is_c_level = "c1" in lvl_lower or "c2" in lvl_lower or "advanced" in lvl_lower or "proficiency" in lvl_lower

    flags = []
    reasons = []

    # Heuristic 1: Vocab evaluation
    adv_vocab_count = sum(1 for w in vocab_words if any(adv in w for adv in ADVANCED_WORDS) or len(w) > 13)
    easy_vocab_count = sum(1 for w in vocab_words if w in EASY_WORDS)

    if is_a_level:
        if adv_vocab_count >= 2:
            flags.append("Too vocabulary-heavy / Too difficult")
            reasons.append(f"Contains advanced or overly long vocabulary: {[w for w in vocab_words if any(adv in w for adv in ADVANCED_WORDS) or len(w) > 13]}")
    if is_c_level:
        if easy_vocab_count >= 4:
            flags.append("Too easy")
            reasons.append(f"Vocabulary words are too basic/elementary: {[w for w in vocab_words if w in EASY_WORDS]}")

    # Heuristic 2: Grammar evaluation
    grammar_lower = grammar_topic.lower()
    has_adv_grammar = any(g in grammar_lower for g in ADVANCED_GRAMMAR_KEYWORDS)
    has_easy_grammar = any(g in grammar_lower for g in EASY_GRAMMAR_KEYWORDS)

    if is_a_level and has_adv_grammar:
        flags.append("Too grammar-heavy / Too difficult")
        reasons.append(f"Focuses on advanced grammar topic: '{grammar_topic}'")
    if is_c_level and has_easy_grammar and "inversion" not in grammar_lower and "mixed" not in grammar_lower:
        flags.append("Too easy")
        reasons.append(f"Focuses on basic/elementary grammar topic: '{grammar_topic}'")

    # Heuristic 3: Discussion questions abstractness / difficulty
    abstract_words_found = []
    abstract_triggers = {"existential", "subconscious", "metaphor", "sociology", "ethical", "evolutionary", "primatologist", "linguistics", "homologous", "profiling", "biotech"}
    for q in questions:
        for trig in abstract_triggers:
            if trig in q:
                abstract_words_found.append(trig)

    if is_a_level:
        if len(abstract_words_found) >= 2:
            flags.append("Too abstract / Too difficult")
            reasons.append(f"Discussion questions contain highly abstract/complex concepts: {list(set(abstract_words_found))}")
        # Also check for extremely long or structurally complex discussion questions
        avg_q_len = sum(len(q.split()) for q in questions) / max(1, len(questions))
        if avg_q_len > 18:
            flags.append("Too difficult")
            reasons.append(f"Average length of conversation prompts is extremely high ({avg_q_len:.1f} words per question), presenting excessive reading load for A1/A2 learners.")

    return {
        "file": filepath,
        "club": club,
        "title": title,
        "level": level,
        "vocab": vocab_words,
        "grammar": grammar_topic,
        "flags": list(set(flags)),
        "reasons": reasons
    }

def main():
    sessions_dir = "events/sessions"
    all_sessions = []

    for root, dirs, files in os.walk(sessions_dir):
        for file in files:
            if file.endswith(".html") and not file.startswith("template"):
                filepath = os.path.join(root, file)
                res = analyze_session(filepath)
                all_sessions.append(res)

    # Compile report
    output_path = "cefr_audit_results.txt"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"CEFR AUDIT RESULTS\n")
        f.write(f"Total sessions analyzed: {len(all_sessions)}\n")
        f.write("="*80 + "\n\n")

        flagged_count = 0
        for s in all_sessions:
            if s["flags"]:
                flagged_count += 1
                f.write(f"File: {s['file']}\n")
                f.write(f"Club: {s['club']}\n")
                f.write(f"Title: {s['title']}\n")
                f.write(f"Level: {s['level']}\n")
                f.write(f"Vocabulary: {', '.join(s['vocab'])}\n")
                f.write(f"Grammar Topic: {s['grammar']}\n")
                f.write(f"Flags: {', '.join(s['flags'])}\n")
                f.write("Reasons:\n")
                for r in s["reasons"]:
                    f.write(f"  - {r}\n")
                f.write("-" * 80 + "\n\n")

        f.write(f"Summary: Flagged {flagged_count} out of {len(all_sessions)} sessions.\n")

    print(f"Audit complete. Processed {len(all_sessions)} sessions. Flagged {flagged_count} files.")
    print(f"Results written to {output_path}")

if __name__ == "__main__":
    main()
