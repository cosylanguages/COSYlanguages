import os
import re
import urllib.request
import html

# Map filename to its direct article URL
ARTICLE_MAP = {
    "ai-reality-delusion.html": "https://www.sciencedaily.com/releases/2026/05/260509210652.htm",
    "animal-cooperation-language.html": "https://www.sciencedaily.com/releases/2026/06/260619101328.htm",
    "ape-laughter-speech-origin-elementary.html": "https://www.sciencedaily.com/releases/2026/06/260626124704.htm",
    "ape-laughter-speech-origin-intermediate.html": "https://www.sciencedaily.com/releases/2026/06/260626124704.htm",
    "brain-improving-in-90s.html": "https://www.sciencedaily.com/releases/2026/06/260613034222.htm",
    "climate-scientist-warming-report.html": "https://www.sciencedaily.com/releases/2026/06/260625060214.htm",
    "football-beats-shamrock.html": "https://sciencex.com/news/2026-05-football-shamrock-brain-dismantling-word.html",
    "fusion-energy.html": "https://www.iter.org/sci/whatisfusion",
    "grandmother-evolutionary-mystery.html": "https://youtu.be/iKLwzmjfcW4?is=1l2lHNLpRdMBvJjZ", # Youtube, we might not fetch easily
    "grandparents-mental-health.html": "https://www.sciencedaily.com/releases/2026/06/260613034206.htm",
    "hidden-regenerative-powers.html": "https://www.sciencedaily.com/releases/2026/06/260617032207.htm",
    "impersonation-accounts.html": "", # No link
    "living-most-creative-time.html": "https://youtu.be/-9y7OGNmqQw?is=eWcoEDp2xbB6-9-D", # Youtube
    "losing-spoken-words.html": "https://www.sciencefocus.com/news/losing-spoken-words",
    "mendelian-laws-broken.html": "https://www.sciencedaily.com/releases/2026/05/260530053420.htm",
    "museums-movies-theater-stay-younger-elementary.html": "https://www.sciencedaily.com/releases/2026/07/260714225526.htm",
    "museums-movies-theater-stay-younger-intermediate.html": "https://www.sciencedaily.com/releases/2026/07/260714225526.htm",
    "ozempic-obesity-revolution.html": "https://www.sciencedaily.com/releases/2026/06/260619020504.htm",
    "right-handedness.html": "https://www.sciencedaily.com/releases/2026/05/260517211429.htm",
    "sensory-system-pain-disease.html": "https://www.sciencedaily.com/releases/2026/07/260709160641.htm",
    "social-decisions-brain.html": "https://www.sciencedaily.com/releases/2026/06/260602021629.htm",
    "spider-creatures-origins-of-fatherhood.html": "https://www.sciencedaily.com/releases/2026/07/260712011737.htm",
    "where-you-live-shapes-dementia-risk-elementary.html": "https://www.sciencedaily.com/releases/2026/07/260713000753.htm",
    "where-you-live-shapes-dementia-risk-intermediate.html": "https://www.sciencedaily.com/releases/2026/07/260713000753.htm",
    "your-fingers-hold-secret-brain-evolution.html": "https://www.sciencedaily.com/releases/2026/07/260717033350.htm",
}

def clean_html(html_content):
    # Remove script and style elements
    html_content = re.sub(r'<script.*?>.*?</script>', '', html_content, flags=re.DOTALL | re.IGNORECASE)
    html_content = re.sub(r'<style.*?>.*?</style>', '', html_content, flags=re.DOTALL | re.IGNORECASE)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', html_content)
    # Unescape HTML entities
    text = html.unescape(text)
    # Normalize whitespace
    text = " ".join(text.split())
    return text.lower()

def fetch_article_text(url):
    if not url or url.startswith("https://youtu.be"):
        return ""
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html_content = response.read().decode('utf-8', errors='ignore')
            return clean_html(html_content)
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def check_word_in_text(word, text):
    # Normalize word
    word_clean = word.lower().strip()
    # Check if word contains ≠ (antonym pair) or is a multi-word phrase
    if "≠" in word_clean:
        parts = [p.strip() for p in word_clean.split("≠")]
        # Check if first part or both parts are in the text
        return any(check_word_in_text(p, text) for p in parts)

    # Basic substring/word boundary check
    # We want to check if the word or a substantial part of it exists
    # e.g., "vulnerability" -> "vulnerable"
    # Let's clean up punctuation and check as a substring or with regex
    word_esc = re.escape(word_clean)
    if re.search(r'\b' + word_esc + r'\w*\b', text):
        return True

    # Try word parts if it's a multi-word phrase (e.g. "confirmation bias" -> both "confirmation" and "bias")
    if " " in word_clean:
        parts = word_clean.split()
        if all(re.search(r'\b' + re.escape(p) + r'\w*\b', text) for p in parts):
            return True

    # Try common lemmatizations/stems (e.g., "dismantle" -> "dismantling", "handedness" -> "handed")
    # If the word is long enough, check if its first 5-6 letters exist
    if len(word_clean) > 5:
        stem = word_clean[:5]
        if stem in text:
            return True

    return False

def extract_vocab(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Find level
    level_match = re.search(r'<h4>Level</h4>\s*<p>(.*?)</p>', content, re.IGNORECASE | re.DOTALL)
    level = level_match.group(1).strip() if level_match else "Unknown"
    # Find vocabulary words
    words = re.findall(r'<div class="vocab-word">([^<]+)</div>', content)
    return level, words

def main():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    print("Auditing Science Vocabulary extraction against referred articles...\n")
    for filename in files:
        filepath = os.path.join(science_dir, filename)
        level, words = extract_vocab(filepath)
        url = ARTICLE_MAP.get(filename, "")

        print(f"File: {filename} ({level})")
        if not url:
            print("  ⚠️ No direct/valid article URL for automated check.")
            print(f"  Words: {', '.join(words)}")
            print("-" * 60)
            continue

        print(f"  Fetching: {url}")
        text = fetch_article_text(url)
        if not text:
            print("  ⚠️ Could not retrieve article text.")
            print("-" * 60)
            continue

        not_found = []
        for word in words:
            if not check_word_in_text(word, text):
                not_found.append(word)

        if not_found:
            print(f"  ❌ Vocab words NOT clearly found in article: {not_found}")
        else:
            print("  ✅ All vocab words successfully matched to the article!")
        print("-" * 60)

if __name__ == '__main__':
    main()
