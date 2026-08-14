import os
import sys
import re

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA
from generate_karaoke_sessions import CHALLENGE_MAP, NEW_CHALLENGES_METADATA

HUB_PATH = "apps/premium-events/nights/karaoke/karaoke-club.html"
BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club"

# Sensitive tags map
SENSITIVE_MAP = {
    "esteman-challenge": True,
    "angele-challenge": True,
    "angelina-wismes-challenge": True,
    "fabienne-thibeault-challenge": True,
    "crazy-ex-girlfriend-challenge": True,
    "u-mamy-est-sekret": True,
    "amor-libre": True,
    "te-alejas-mas-de-mi": True,
    "balance-ton-quoi": True,
    "laziza": True,
    "la-nuit-nen-finit-plus": True,
    "le-soleil-noir": True,
    "an-einai-i-agapi-amartia": True,
    "to-idio-to-theo": True,
    "fovamai": True,
    "la-complainte-de-la-serveuse-automate": True,
    "le-monde-est-stone": True,
    "un-garcon-pas-comme-les-autres": True,
    "les-uns-contre-les-autres": True,
    "jim-beam": True
}

def get_level_tag_html(level):
    lvl = level.upper()
    if lvl == "A2":
        return f'<span class="club-tag" style="background:#FAEEE8; color:#C0392B; border-color:#F5CBA7; border:1px solid #F5CBA7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">{lvl}</span>'
    elif lvl == "B2":
        return f'<span class="club-tag" style="background:#EBF8FF; color:#2B6CB0; border-color:#BEE3F8; border:1px solid #BEE3F8; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">{lvl}</span>'
    elif lvl == "C1":
        return f'<span class="club-tag" style="background:#F3E8FF; color:#6B21A8; border-color:#E9D5FF; border:1px solid #E9D5FF; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">{lvl}</span>'
    else:
        return f'<span class="club-tag" style="background:#E1F5EE; color:#1A7A4A; border-color:#A3E4D7; border:1px solid #A3E4D7; font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">B1</span>'

def get_sensitive_tag_html(lang):
    label = "🔞 18+ / Sensitive"
    if lang == "fr":
        label = "🔞 18+ / Sensible"
    return f' <span class="club-tag" style="background: var(--sensitive-tag-bg); color: var(--sensitive-tag-color); border: 1px solid var(--sensitive-tag-color); font-weight:600; font-size:0.75rem; padding: 2px 6px; border-radius: 4px;">{label}</span>'

# Build 21 challenges
challenges_cards_html = []

for c_slug, sub_slugs in CHALLENGE_MAP.items():
    index_rel_path = ""
    for root, dirs, files in os.walk(BASE_DIR):
        if root.endswith(c_slug) and "index.html" in files:
            index_rel_path = os.path.relpath(os.path.join(root, "index.html"), "apps/premium-events/nights/karaoke")
            break

    meta = NEW_CHALLENGES_METADATA.get(c_slug, {})
    title = meta.get("title", c_slug.replace("-", " ").title())
    artist = meta.get("artist", "Various Artists")
    level = meta.get("level", "B1")
    lang = meta.get("lang", "en")
    focus = meta.get("focus", "")

    sub_links = []
    sub_titles = []
    for s_slug in sub_slugs:
        s_rel_path = ""
        for root, dirs, files in os.walk(BASE_DIR):
            if root.endswith(c_slug) and f"{s_slug}.html" in files:
                s_rel_path = os.path.relpath(os.path.join(root, f"{s_slug}.html"), "apps/premium-events/nights/karaoke")
                break

        full_s_path = os.path.join("apps/premium-events/nights/karaoke", s_rel_path) if s_rel_path else ""
        s_title = s_slug.replace("-", " ").title()
        if full_s_path and os.path.exists(full_s_path):
            with open(full_s_path, "r", encoding="utf-8") as f:
                h_content = f.read()
            m_t = re.search(r"<h1>(.*?)</h1>", h_content)
            if m_t:
                s_title = m_t.group(1).strip()

        sub_titles.append(s_title)
        if s_rel_path:
            sub_links.append(f'<a href="{s_rel_path}" style="color:var(--teal); text-decoration:underline; font-weight:600;">{s_title}</a>')

    if lang == "fr":
        desc_prefix = f"Notre défi musical spécial de {len(sub_slugs)} chansons : {', '.join(sub_titles[:-1])} et {sub_titles[-1]}." if len(sub_titles) > 1 else f"Notre défi musical spécial : {sub_titles[0]}."
        study_prefix = "Étudier séparément : "
    elif lang == "it":
        desc_prefix = f"Il nostro speciale sfida musicale di {len(sub_slugs)} canzoni : {', '.join(sub_titles[:-1])} e {sub_titles[-1]}." if len(sub_titles) > 1 else f"Il nostro speciale sfida musicale : {sub_titles[0]}."
        study_prefix = "Studiare separatamente : "
    elif lang == "es":
        desc_prefix = f"Nuestro desafío musical especial de {len(sub_slugs)} canciones : {', '.join(sub_titles[:-1])} y {sub_titles[-1]}." if len(sub_titles) > 1 else f"Nuestro desafío musical especial : {sub_titles[0]}."
        study_prefix = "Estudiar por separado : "
    elif lang == "ru":
        desc_prefix = f"Наш специальный караоке-челлендж из {len(sub_slugs)} песен: {', '.join(sub_titles[:-1])} и {sub_titles[-1]}." if len(sub_titles) > 1 else f"Наш специальный караоке-челлендж: {sub_titles[0]}."
        study_prefix = "Изучать отдельно: "
    elif lang == "el":
        desc_prefix = f"Η ειδική μουσική μας πρόκληση {len(sub_slugs)} τραγουδιών: {', '.join(sub_titles[:-1])} και {sub_titles[-1]}." if len(sub_titles) > 1 else f"Η ειδική μουσική μας πρόκληση: {sub_titles[0]}."
        study_prefix = "Μελέτη ξεχωριστά: "
    else:
        desc_prefix = f"Our special {len(sub_slugs)}-song musical challenge: {', '.join(sub_titles[:-1])} and {sub_titles[-1]}." if len(sub_titles) > 1 else f"Our special musical challenge: {sub_titles[0]}."
        study_prefix = "Study separately: "

    links_str = " • ".join(sub_links)
    card_desc_html = f'{desc_prefix}<br/><span style="font-size:0.82rem; display:block; margin-top:0.4rem;">{study_prefix}{links_str}</span>'

    level_tag = get_level_tag_html(level)
    sensitive_tag = get_sensitive_tag_html(lang) if SENSITIVE_MAP.get(c_slug) else ""

    card_html = f"""          <div class="history-session" data-level="{level.lower()}" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="karaoke-card-meta">
              {level_tag}{sensitive_tag}
            </div>
            <div class="karaoke-card-body">
              <h4 class="karaoke-card-title">{title}</h4>
              <span class="karaoke-card-artist">by Dedicated Page</span>
              <p class="karaoke-card-desc" title="{focus}">{card_desc_html}</p>
            </div>
            <div class="karaoke-card-action">
              <a class="btn-primary" href="{index_rel_path}">Enter Challenge →</a>
            </div>
          </div>"""

    challenges_cards_html.append(card_html)

# Build 35 standalone songs
standalone_cards_html = []
all_challenge_songs = set(s for sub in CHALLENGE_MAP.values() for s in sub)

for s_slug in sorted(set(LYRICS_DATA.keys()) - all_challenge_songs):
    s_rel_path = ""
    for root, dirs, files in os.walk(BASE_DIR):
        if "challenges" in root:
            continue
        if f"{s_slug}.html" in files:
            s_rel_path = os.path.relpath(os.path.join(root, f"{s_slug}.html"), "apps/premium-events/nights/karaoke")
            break

    full_path = os.path.join("apps/premium-events/nights/karaoke", s_rel_path) if s_rel_path else ""
    title = s_slug.replace("-", " ").title()
    artist = ""
    level = "B1"
    lang = "en"
    focus = ""

    if full_path and os.path.exists(full_path):
        with open(full_path, "r", encoding="utf-8") as f:
            h_content = f.read()

        m_t = re.search(r"<h1>(.*?)</h1>", h_content)
        if m_t:
            title = m_t.group(1).strip()

        m_d = re.search(r'<p class="session-date">(.*?) • (.*?)</p>', h_content)
        if m_d:
            artist = m_d.group(1).strip()
            level_raw = m_d.group(2).strip()
            if "A2" in level_raw: level = "A2"
            elif "B2" in level_raw: level = "B2"
            elif "C1" in level_raw: level = "C1"
            else: level = "B1"

        m_l = re.search(r'<html lang="(.*?)">', h_content)
        if m_l:
            lang = m_l.group(1).strip()

        m_f = re.search(r'<h4>(?:Thematic Focus|Focus|Thème|Тема|Tema|Θέμα)</h4>\s*<p>(.*?)</p>', h_content, re.DOTALL)
        if m_f:
            focus = m_f.group(1).strip()

    if lang == "fr":
        desc = f"Explorez le magnifique titre '{title}' de {artist}. Cette session se concentre sur le vocabulaire de '{focus}' et l'analyse des paroles."
    elif lang == "ru":
        desc = f"Разберите прекрасную песню '{title}' исполнителя {artist}. Сессия посвящена изучению лексики по теме '{focus}'."
    elif lang == "it":
        desc = f"Esplora il brano '{title}' di {artist}. Questa sessione si concentra sul vocabolario legato a '{focus}'."
    elif lang == "es":
        desc = f"Explora la canción '{title}' de {artist}. Esta sesión se centra en el vocabulario de '{focus}'."
    elif lang == "el":
        desc = f"Ανακαλύψτε το τραγούδι '{title}' του καλλιτέχνη {artist} γύρω από το θέμα '{focus}'."
    else:
        desc = f"Explore '{title}' by {artist}. This session focuses on the vocabulary of '{focus}' and lyrical analysis."

    level_tag = get_level_tag_html(level)
    sensitive_tag = get_sensitive_tag_html(lang) if SENSITIVE_MAP.get(s_slug) else ""

    card_html = f"""          <div class="history-session" data-level="{level.lower()}" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="karaoke-card-meta">
              {level_tag}{sensitive_tag}
            </div>
            <div class="karaoke-card-body">
              <h4 class="karaoke-card-title">{title}</h4>
              <span class="karaoke-card-artist">by {artist}</span>
              <p class="karaoke-card-desc" title="{desc}">{desc}</p>
            </div>
            <div class="karaoke-card-action">
              <a class="btn-secondary" href="{s_rel_path}">View Session →</a>
            </div>
          </div>"""

    standalone_cards_html.append(card_html)

# Read current karaoke-club.html as base for template structure
with open(HUB_PATH, "r", encoding="utf-8") as fh:
    content = fh.fh = fh.read()

# Replace pinned challenges and standalone sessions in karaoke-club.html
start_tag = '<div class="history-body" style="display: block; padding: 0; border: none;">'
start_idx = content.find(start_tag)

tag_pattern = re.compile(r'<(/?div\b[^>]*)>')
depth = 1
idx = start_idx + len(start_tag)
closing_div_idx = -1
while True:
    tag_match = tag_pattern.search(content, idx)
    if not tag_match:
        break
    tag_text = tag_match.group(1)
    if tag_text.startswith('/'):
        depth -= 1
    else:
        if not tag_text.endswith('/'):
            depth += 1

    idx = tag_match.end()
    if depth == 0:
        closing_div_idx = tag_match.start()
        break

new_history_body = f"""{start_tag}
          <!-- 📌 PINNED ARTIST CHALLENGES -->
          <div class="pinned-challenges-section" style="margin-bottom: 3.5rem; background: rgba(74, 21, 75, 0.03); border: 2px dashed #4A154B; border-radius: 28px; padding: 2rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; font-size: 1.5rem; display: flex; align-items: center; gap: 0.75rem; color: #4A154B;">
              <span>📌</span> Pinned Artist Challenges (90 min)
            </h3>
            <div class="karaoke-grid">
{chr(10).join(challenges_cards_html)}
            </div>
          </div>

          <!-- 🎵 STANDALONE SONG SESSIONS -->
          <h3 style="font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; color: var(--ink);">
            🎵 Standalone Song Sessions (90-120 min)
          </h3>
          <div class="karaoke-grid">
{chr(10).join(standalone_cards_html)}
          </div>
        """

final_html = content[:start_idx] + new_history_body + content[closing_div_idx:]

with open(HUB_PATH, "w", encoding="utf-8") as fw:
    fw.write(final_html)

print(f"Successfully rebuilt {HUB_PATH} with {len(challenges_cards_html)} challenge cards and {len(standalone_cards_html)} standalone cards!")
