import os, sys, re

# Define helper functions to construct canonical HTML templates for each club type.

def make_kus_html(title, cefr_label, level_code, topic_summary, journal_text, vocab_items, round1_units, round2_units, grammar_title, grammar_body, article_url, filename):
    vocab_cards_html = ""
    for v in vocab_items:
        word = v['word']
        phonetic = v.get('phonetic', '')
        pos = v.get('pos', 'n.')
        def_text = v['definition']
        ex_text = v['example']
        ant = v.get('antonym', '')
        ant_html = f'<div class="vocab-antonym"><strong>≠ Antonym:</strong> {ant}</div>' if ant else ''
        phon_html = f'<span class="vocab-phonetic">{phonetic}</span>' if phonetic else ''

        # escaped quotes for inline JS
        clean_word = word.replace("'", "\\'")
        clean_def = def_text.replace("'", "\\'")
        clean_ex = ex_text.replace("'", "\\'")

        vocab_cards_html += f'''
        <div class="vocab-card">
          <div class="vocab-word-header">
            <span class="vocab-word">{word}</span>
            {phon_html}
            <span class="vocab-pos">[{pos}]</span>
          </div>
          <div class="vocab-def">{def_text}</div>
          <div class="vocab-example">"{ex_text}"</div>
          {ant_html}
          <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{clean_word}', definition:'{clean_def}', example:'{clean_ex}'}}, this)">➕ Add to Dictionary</button>
        </div>'''

    r1_items_html = ""
    for i, u in enumerate(round1_units, 1):
        r1_items_html += f'''
        <div class="round-item">
          <div class="round-item-main"><strong>{i}.</strong> {u['main']}</div>
          <div class="round-item-personal">★ {u['personal']}</div>
        </div>'''

    r2_items_html = ""
    for i, u in enumerate(round2_units, 1):
        r2_items_html += f'''
        <div class="round-item">
          <div class="round-item-main"><strong>{i}.</strong> {u['main']}</div>
          <div class="round-item-personal">★ {u['personal']}</div>
        </div>'''

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Keeping Up with Science | Cozy Speaking Club</title>
  <link rel="stylesheet" href="../../../../../css/style.css">
  <link rel="stylesheet" href="../../../../../css/components.css">
  <link rel="stylesheet" href="../../../../../css/events.css">
</head>
<body class="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <nav class="sd-sticky-header flex items-center gap-4">
        <div class="cosy-breadcrumbs text-sm text-gray-600">
          <a href="../../../../../index.html" class="hover:text-emerald-600">Home</a> &gt;
          <a href="../../../../speaking-clubs.html" class="hover:text-emerald-600">Speaking Clubs</a> &gt;
          <a href="../../keeping-up-with-science.html" class="hover:text-emerald-600">Keeping Up with Science</a> &gt;
          <span class="text-gray-900 font-medium">{title}</span>
        </div>
      </nav>
      <div class="flex items-center gap-3">
        <a href="../../keeping-up-with-science.html" class="text-sm font-medium text-emerald-700 hover:text-emerald-800">← Back to Club</a>
      </div>
    </div>
  </header>

  <main class="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
    <div class="mb-8">
      <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
        <span>🔬 Keeping Up with Science</span> • <span>{cefr_label}</span>
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
      <div>
        <h4 class="text-xs text-emerald-800 font-semibold uppercase">Source Article</h4>
        <a href="{article_url}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-emerald-700 hover:underline">ScienceDaily Brief 🔗</a>
      </div>
    </div>

    <div class="science-journal-box p-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
      <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">🔬 Field Journal Research Log</h3>
      <p class="text-gray-700 leading-relaxed mb-4">{journal_text}</p>
      <div class="p-3 bg-gray-50 border-l-4 border-emerald-500 text-xs text-gray-600">
        <strong>Reference Citation:</strong> ScienceDaily Recent Advances in Biological & Behavioral Sciences (2026).
      </div>
    </div>

    <section id="vocabulary" class="mb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">📖 Session Vocabulary</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vocab_cards_html}
      </div>
    </section>

    <section id="structure" class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">🎙️ Discussion Structure</h2>

      <div class="round-block warm-up open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-lg text-emerald-900 mb-2">🟠 Warm-up (10 mins)</div>
        <p class="text-gray-700">Share your initial impressions of the research findings. Have you noticed similar patterns in your daily life or surrounding environment?</p>
      </div>

      <div class="round-block grammar open bg-emerald-50 p-6 rounded-xl border border-emerald-200">
        <div class="round-header font-bold text-lg text-emerald-950 mb-2">⚡ Grammar Explanation ({grammar_title})</div>
        <div class="text-gray-800 space-y-2 text-sm leading-relaxed">
          {grammar_body}
        </div>
      </div>

      <div class="round-block round-1 open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-xl text-gray-900 mb-4">🔵 Round 1: Understand the Discovery (20 mins)</div>
        <div class="space-y-4">
          {r1_items_html}
        </div>
      </div>

      <div class="round-block round-2 open bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div class="round-header font-bold text-xl text-gray-900 mb-4">🟢 Round 2: The Future: Speculative Projections (20 mins)</div>
        <div class="space-y-4">
          {r2_items_html}
        </div>
      </div>

      <div class="round-block bg-emerald-900 text-white p-6 rounded-xl shadow-md">
        <div class="round-header font-bold text-xl mb-2">🔬 Real Scientific Thinking: Evaluating Evidence</div>
        <p class="text-emerald-100 text-sm leading-relaxed mb-4">How should researchers refine their methodologies to eliminate confounding variables in longitudinal studies of human health and behavior?</p>
        <div class="p-4 bg-emerald-800 rounded-lg text-xs text-emerald-200">
          <strong>Closing Task:</strong> Deliver a concise 1-minute summary explaining what practical lifestyle or policy adjustment this study suggests for modern society.
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-900 text-gray-400 py-12 mt-16 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h4 class="text-white font-bold mb-3">Courses</h4>
        <ul class="space-y-2">
          <li><a href="../../../../../curriculum/index.html" class="hover:text-white">Curriculum Roadmap</a></li>
          <li><a href="../../../../../practice/index.html" class="hover:text-white">Practice Lab</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3">Explore</h4>
        <ul class="space-y-2">
          <li><a href="../../../../index.html" class="hover:text-white">Events Hub</a></li>
          <li><a href="../../../../speaking-clubs.html" class="hover:text-white">Speaking Clubs</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3">Project</h4>
        <ul class="space-y-2">
          <li><a href="../../../../../about.html" class="hover:text-white">About Cozy</a></li>
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

    full_path = f"apps/premium-events/clubs/kus/sessions/keeping-up-with-science/{filename}"
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Updated {full_path}")
