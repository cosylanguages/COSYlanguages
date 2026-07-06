import re
from datetime import datetime
import os
import html

def get_session_info(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    title_match = re.search(r'<title>(.*?) — COSYlanguages</title>', content)
    title = title_match.group(1).strip() if title_match else os.path.basename(filepath)

    if title == "Session Title":
        h1_match = re.search(r'<h1>(.*?)</h1>', content)
        if h1_match:
            title = h1_match.group(1).strip()

    date_match = re.search(r'<p class="session-date">(.*?)</p>', content)
    date_str = date_match.group(1).strip() if date_match else "01 January 2025"

    tag_match = re.search(r'<div class="club-tag">(.*?)</div>', content)
    tag = html.unescape(tag_match.group(1).strip()) if tag_match else "NO TAG"

    return title, date_str, tag

def get_date_val(date_str):
    try:
        parts = date_str.split()
        day = int(parts[0])
        year = int(parts[2])
        months = {
            'january': 1, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6,
            'july': 7, 'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12,
            'января': 1, 'февраля': 2, 'марта': 3, 'апреля': 4, 'мая': 5, 'июня': 6,
            'июля': 7, 'августа': 8, 'сентября': 9, 'октября': 10, 'ноября': 11, 'декабря': 12,
            'janvier': 1, 'février': 2, 'mars': 3, 'avril': 4, 'mai': 5, 'juin': 6,
            'juillet': 7, 'août': 8, 'septembre': 9, 'octobre': 10, 'novembre': 11, 'décembre': 12
        }
        month_str = parts[1].lower().rstrip(',')
        month = months.get(month_str, 1)
        return datetime(year, month, day)
    except:
        return datetime(1970, 1, 1)

def format_session(title, date_str, link, btn_text):
    return f"""            <div class="history-session" style="margin-bottom:1rem;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#FAF7F2;padding:1rem;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <h4 style="margin:0;font-size:1rem;">{title}</h4>
                <span class="history-date" style="font-size:.8rem;color:var(--muted);">{date_str}</span>
              </div>
              <a href="sessions/{link}" class="view-btn" style="background:var(--indigo);">{btn_text}</a>
            </div>"""

tag_to_index = {
    'Debatable & Relatable': 'debatable-relatable.html',
    'The Greatest Quotes': 'the-greatest-quotes.html',
    'Mind Matters': 'mind-matters.html',
    'Keeping Up with Science': 'keeping-up-with-science.html',
    'My Life With & Without': 'my-life-with-without.html',
    'Let\'s Celebrate': 'lets-celebrate.html'
}

# Special mapping for localized filenames that don't match English
localized_to_en = {
    '4-dnevnaya-rabochaya-nedelya.html': '4-day-work-week.html',
    'la-semaine-de-4-jours.html': '4-day-work-week.html',
    'iskusstvennyj-intellekt.html': 'ai-reality-delusion.html',
    'la-sagesse-de-socrate.html': 'wisdom-of-socrates.html'
}

def process_lang(lang_dir):
    session_dir = os.path.join(lang_dir, 'sessions')
    if not os.path.exists(session_dir): return

    sessions = [f for f in os.listdir(session_dir) if f.endswith('.html') and 'template' not in f]

    clubs = {}
    for s_file in sessions:
        title, date_str, tag = get_session_info(os.path.join(session_dir, s_file))

        # Check if we should use the English tag
        en_filename = localized_to_en.get(s_file, s_file)
        en_path = os.path.join('events/sessions', en_filename)
        if os.path.exists(en_path):
            _, _, en_tag = get_session_info(en_path)
            tag = en_tag # Force consistency with English mapping

        index_file = tag_to_index.get(tag)
        if index_file:
            if index_file not in clubs: clubs[index_file] = []

            btn_text = "View Full Session →"
            if 'ru' in lang_dir: btn_text = "Полная сессия →"
            elif 'fr' in lang_dir: btn_text = "Voir la session complète →"

            clubs[index_file].append({
                'title': title,
                'date_str': date_str,
                'link': s_file,
                'btn_text': btn_text
            })

    indices = ['debatable-relatable.html', 'the-greatest-quotes.html', 'mind-matters.html', 'keeping-up-with-science.html', 'my-life-with-without.html', 'lets-celebrate.html']
    for idx_file in indices:
        path = os.path.join(lang_dir, idx_file)
        if not os.path.exists(path): continue

        with open(path, 'r') as f:
            content = f.read()

        history_match = re.search(r'(<div class="history-body".*?>)(.*?)(</div>\s*</div>)', content, re.DOTALL)
        if not history_match:
             history_match = re.search(r'(<!-- HISTORY -->.*?<div class="section-header".*?</div>)(.*?)(</div>\s*</div>)', content, re.DOTALL)

        if history_match:
            club_sessions = clubs.get(idx_file, [])
            club_sessions.sort(key=lambda x: get_date_val(x['date_str']), reverse=True)

            if not club_sessions:
                 if 'fr' in lang_dir and idx_file == 'keeping-up-with-science.html':
                      new_history = "\n          <p style=\"color: var(--muted); font-style: italic;\">Pas encore de sessions passées en français.</p>\n        "
                 elif 'ru' in lang_dir and idx_file == 'lets-celebrate.html':
                      new_history = "\n          <p style=\"color: var(--muted); font-style: italic;\">Прошедших сессий пока нет.</p>\n        "
                 else:
                      new_history = "\n          <p style=\"color: var(--muted); font-style: italic;\">No past sessions yet.</p>\n        "
            else:
                new_history = "\n" + "\n".join([format_session(s['title'], s['date_str'], s['link'], s['btn_text']) for s in club_sessions]) + "\n          "

            new_content = content[:history_match.start(2)] + new_history + content[history_match.end(2):]

            if '<div class="history-body"' not in history_match.group(1) and club_sessions:
                wrapped_history = "\n          <div class=\"history-body\" style=\"display: block; padding: 0; border: none;\">" + new_history + "</div>\n"
                new_content = content[:history_match.start(2)] + wrapped_history + content[history_match.end(2):]

            with open(path, 'w') as f:
                f.write(new_content)
            print(f"Updated {path}")

process_lang('events')
process_lang('events/ru')
process_lang('events/fr')
