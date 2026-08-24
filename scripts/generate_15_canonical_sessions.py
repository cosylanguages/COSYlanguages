import os, json

def get_vocab_cards_html(vocab_list):
    cards = []
    for v in vocab_list:
        word = v['word']
        phonetic = v.get('phonetic', '')
        pos = v.get('pos', 'n.')
        definition = v['definition']
        example = v['example']
        antonym = v.get('antonym', '')

        phon_html = f'<span class="text-xs text-gray-500 font-mono ml-1">{phonetic}</span>' if phonetic else ''
        ant_html = f'<div class="text-xs text-gray-500 mt-1"><strong>≠ Antonym:</strong> {antonym}</div>' if antonym else ''

        clean_word = word.replace("'", "\\'")
        clean_def = definition.replace("'", "\\'")
        clean_ex = example.replace("'", "\\'")

        cards.append(f'''
        <div class="vocab-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-1">
              <h4 class="text-base font-bold text-gray-900">{word} {phon_html}</h4>
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">[{pos}]</span>
            </div>
            <p class="text-xs text-gray-700 mb-2 leading-relaxed">{definition}</p>
            <p class="text-xs italic text-gray-600 bg-gray-50 p-2 rounded border-l-2 border-emerald-400">"{example}"</p>
            {ant_html}
          </div>
          <button class="btn-add-dict mt-3 w-full py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded border border-emerald-200 transition-colors" onclick="COSY.addToDict({{word:'{clean_word}', definition:'{clean_def}', example:'{clean_ex}'}}, this)">
            ➕ Add to Dictionary
          </button>
        </div>''')
    return '\n'.join(cards)

def get_units_html(unit_list, start_idx=1):
    items = []
    for idx, u in enumerate(unit_list, start_idx):
        items.append(f'''
        <div class="round-item p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div class="round-item-main text-sm font-semibold text-gray-900 mb-2"><strong>{idx}.</strong> {u['main']}</div>
          <div class="round-item-personal text-xs text-emerald-800 bg-emerald-50 p-2 rounded border-l-2 border-emerald-500">★ {u['personal']}</div>
        </div>''')
    return '\n'.join(items)

def render_session_html(club_type, title, cefr_label, topic_summary, feature_box_title, feature_box_content, vocab_list, r1_units, r2_units, grammar_title, grammar_body, extra_action_html, article_url, filepath, rel_root="../../../../../"):
    vocab_html = get_vocab_cards_html(vocab_list)
    r1_html = get_units_html(r1_units, start_idx=1)
    r2_html = get_units_html(r2_units, start_idx=6)

    club_names = {
        'kus': ('Keeping Up with Science', '../../keeping-up-with-science.html', '🔬 Keeping Up with Science'),
        'celebrate': ("Let's Celebrate", '../../lets-celebrate.html', '🕊️ Let\'s Celebrate'),
        'quotes': ('The Greatest Quotes', '../../the-greatest-quotes.html', '☕ The Greatest Quotes'),
        'debate': ('Debatable & Relatable', '../../debatable-relatable.html', '🔥 Debatable & Relatable'),
        'life': ('My Life With & My Life Without', '../../my-life-with-without.html', '⚖️ My Life With & My Life Without'),
        'mind': ('Mind Matters', '../../mind-matters.html', '🧠 Mind Matters'),
        'wonder': ("I Couldn't Help But Wonder", '../../i-couldnt-help-but-wonder.html', '📰 I Couldn\'t Help But Wonder')
    }

    c_title, c_hub_url, c_badge = club_names[club_type]

    source_meta = f'''<div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Source Article</h4>
        <a href="{article_url}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-emerald-700 hover:underline">Reference Link 🔗</a>
      </div>''' if article_url else f'''<div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Format</h4>
        <p class="text-sm font-medium text-gray-900">Interactive Discussion</p>
      </div>'''

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — {c_title} | Cozy Speaking Club</title>
  <link rel="stylesheet" href="{rel_root}css/style.css">
  <link rel="stylesheet" href="{rel_root}css/components.css">
  <link rel="stylesheet" href="{rel_root}css/events.css">
  <script src="{rel_root}js/core/ui.js" defer></script>
</head>
<body class="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <nav class="sd-sticky-header flex items-center gap-4">
        <div class="cosy-breadcrumbs text-sm text-gray-600">
          <a href="{rel_root}index.html" class="hover:text-emerald-600">Home</a> &gt;
          <a href="{rel_root}events/speaking-clubs.html" class="hover:text-emerald-600">Speaking Clubs</a> &gt;
          <a href="{c_hub_url}" class="hover:text-emerald-600">{c_title}</a> &gt;
          <span class="text-gray-900 font-medium">{title}</span>
        </div>
      </nav>
      <div class="flex items-center gap-3">
        <a href="{c_hub_url}" class="text-sm font-medium text-emerald-700 hover:text-emerald-800">← Back to Club</a>
      </div>
    </div>
  </header>

  <main class="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
    <div class="mb-8">
      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
        <span>{c_badge}</span> • <span>{cefr_label}</span>
      </div>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{title}</h1>
      <p class="mt-3 text-lg text-gray-600">{topic_summary}</p>
    </div>

    <div class="session-meta-grid grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-emerald-50 rounded-xl mb-8 border border-emerald-100">
      <div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Duration</h4>
        <p class="text-sm font-medium text-gray-900">60 mins</p>
      </div>
      <div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Languages</h4>
        <p class="text-sm font-medium text-gray-900">English</p>
      </div>
      <div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Level</h4>
        <p class="text-sm font-medium text-gray-900">{cefr_label}</p>
      </div>
      {source_meta}
    </div>

    <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
      <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">{feature_box_title}</h3>
      <div class="text-gray-700 leading-relaxed text-sm space-y-2">{feature_box_content}</div>
    </div>

    <section id="vocabulary" class="mb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">📖 Session Vocabulary</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vocab_html}
      </div>
    </section>

    <section id="structure" class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">🎙️ Discussion Structure</h2>

      <div class="round-block warm-up open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-lg text-emerald-900 mb-2">🟠 Warm-up (10 mins)</div>
        <p class="text-gray-700 text-sm">Welcome! Share your initial thoughts on this topic. What personal experiences or observations come to mind right away?</p>
      </div>

      <div class="round-block grammar open bg-emerald-50 p-6 rounded-xl border border-emerald-200">
        <div class="round-header font-bold text-lg text-emerald-950 mb-2">⚡ Grammar Explanation ({grammar_title})</div>
        <div class="text-gray-800 space-y-2 text-sm leading-relaxed">
          {grammar_body}
        </div>
      </div>

      <div class="round-block round-1 open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-xl text-gray-900 mb-4">🔵 Round 1: Core Exploration (Units 1–5)</div>
        <div class="space-y-4">
          {r1_html}
        </div>
      </div>

      <div class="round-block round-2 open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-xl text-gray-900 mb-4">🟢 Round 2: Deep Speculation & Future Horizon (Units 6–10)</div>
        <div class="space-y-4">
          {r2_html}
        </div>
      </div>

      {extra_action_html}
    </section>
  </main>

  <footer class="bg-gray-900 text-gray-400 py-12 mt-16 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h4 class="text-white font-bold mb-3">Courses</h4>
        <ul class="space-y-2">
          <li><a href="{rel_root}curriculum/index.html" class="hover:text-white">Curriculum Roadmap</a></li>
          <li><a href="{rel_root}practice/index.html" class="hover:text-white">Practice Lab</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3">Explore</h4>
        <ul class="space-y-2">
          <li><a href="{rel_root}events/index.html" class="hover:text-white">Events Hub</a></li>
          <li><a href="{rel_root}events/speaking-clubs.html" class="hover:text-white">Speaking Clubs</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3">Project</h4>
        <ul class="space-y-2">
          <li><a href="{rel_root}about.html" class="hover:text-white">About Cozy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3">Contact</h4>
        <p class="text-xs text-gray-500">Cozy Language Practice Community</p>
      </div>
    </div>
  </footer>
</body>
</html>'''

    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {filepath}")
