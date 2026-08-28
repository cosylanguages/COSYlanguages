import re

# 1. Update hybrid/index.html
with open('hybrid/index.html', 'r', encoding='utf-8') as f:
    hybrid_html = f.read()

# Redesign Hybrid hero-stats / stat strip
old_stats = '''      <div class="hero-stats">
        <div class="hstat"><span class="hs-num">3</span><span class="hs-lbl">Core Pillars</span></div>
        <div class="hstat"><span class="hs-num">4</span><span class="hs-lbl">Print Formats</span></div>
        <div class="hstat"><span class="hs-num">100%</span><span class="hs-lbl">Offline Ready</span></div>
        <div class="hstat"><span class="hs-num">A2–B1</span><span class="hs-lbl">Target CEFR</span></div>
      </div>'''

new_stats = '''      <div class="hybrid-prose-summary" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 1.25rem; color: rgba(255, 255, 255, 0.95); font-size: 0.95rem; line-height: 1.6; backdrop-filter: blur(8px);">
        <p style="margin: 0;">Designed around <strong>3 core pillars</strong> (Bridge Tools, COSYzine, and COSY Radio) across <strong>4 printable formats</strong>. Everything is <strong>100% offline-ready</strong> for A2–B1 language learners who want tangible progress off-screen.</p>
      </div>'''

hybrid_html = hybrid_html.replace(old_stats, new_stats)

# Rewrite "How Hybrid Works" section
old_how = '''<section id="overview">
  <span class="sec-tag">🔄 How Hybrid Works</span>
  <h2 class="sec-h2">The Online ↔ Offline Habit Loop</h2>
  <p class="sec-p">Language learning flourishes when it moves between screen time and physical space.</p>

  <div class="steps">
    <div class="step reveal step-1">
      <div class="step-num">1</div>
      <h3>Live Conversation &amp; Digital Practice</h3>
      <p>Attend online 1-to-1 lessons, Speaking Clubs, or play interactive games on your phone or laptop.</p>
    </div>
    <div class="step reveal step-2">
      <div class="step-num">2</div>
      <h3>Printable Bridge &amp; Pocket Cards</h3>
      <p>Print Leitner flashcards, 8-page pocket zines, or board games to review vocabulary away from screens.</p>
    </div>
    <div class="step reveal step-3">
      <div class="step-num">3</div>
      <h3>Audio Immersion &amp; Learner Voices</h3>
      <p>Listen to 5–10 minute slow-speech podcast recaps or submit your own written stories for our reader newspaper.</p>
    </div>
  </div>
</section>'''

new_how = '''<section id="overview">
  <span class="sec-tag">How Hybrid Works</span>
  <h2 class="sec-h2">The Online ↔ Offline Rhythm</h2>
  <div style="background: var(--cream-dark); border: 1px solid var(--border); border-radius: 20px; padding: 2rem; max-width: 820px; margin: 1.5rem auto 0; text-align: left; box-shadow: var(--shadow-sm);">
    <p style="font-size: 1.05rem; line-height: 1.7; color: var(--ink); margin: 0 0 1.25rem 0;">
      Real fluency isn't built solely in front of a monitor. At COSYlanguages, your digital lessons and Speaking Clubs naturally extend into physical objects you can touch, fold, and listen to on the go.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-top: 1rem;">
      <div style="background: var(--warm-white); padding: 1.25rem; border-radius: 14px; border: 1px solid var(--border);">
        <h3 style="font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: var(--sage-dark);">Digital Sessions</h3>
        <p style="font-size: 0.9rem; color: var(--ink-muted); margin: 0; line-height: 1.5;">Build confidence during live 1-to-1 lessons and interactive Speaking Clubs.</p>
      </div>
      <div style="background: var(--warm-white); padding: 1.25rem; border-radius: 14px; border: 1px solid var(--border);">
        <h3 style="font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: var(--sage-dark);">Paper &amp; Tactile Tools</h3>
        <p style="font-size: 0.9rem; color: var(--ink-muted); margin: 0; line-height: 1.5;">Print double-sided Leitner cards or 8-page pocket zines for kitchen table practice.</p>
      </div>
      <div style="background: var(--warm-white); padding: 1.25rem; border-radius: 14px; border: 1px solid var(--border);">
        <h3 style="font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: var(--sage-dark);">Slow-Speech Audio</h3>
        <p style="font-size: 0.9rem; color: var(--ink-muted); margin: 0; line-height: 1.5;">Tune into 5-minute podcast recaps on evening walks to solidify spoken structures.</p>
      </div>
    </div>
  </div>
</section>'''

hybrid_html = hybrid_html.replace(old_how, new_how)

# Remove decorative emojis from section tags / headings in hybrid/index.html
hybrid_html = hybrid_html.replace('🌙 Why this exists', 'Why this exists')
hybrid_html = hybrid_html.replace('🎁 Three Initiatives', 'Three Initiatives')
hybrid_html = hybrid_html.replace('🖨️ Offline Studio', 'Offline Studio')
hybrid_html = hybrid_html.replace('Leitner Print Studio 🖨️', 'Leitner Print Studio')
hybrid_html = hybrid_html.replace('Foldable Pocket Zines 📖', 'Foldable Pocket Zines')
hybrid_html = hybrid_html.replace('Leitner Box Template 📦', 'Leitner Box Template')
hybrid_html = hybrid_html.replace('Printable Board Game 🎲', 'Printable Board Game')
hybrid_html = hybrid_html.replace('Ready to mix online &amp; offline learning? 🌱', 'Ready to mix online &amp; offline learning?')

with open('hybrid/index.html', 'w', encoding='utf-8') as f:
    f.write(hybrid_html)

# 2. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

index_html = index_html.replace('🌱 Simple process', 'Simple process')
index_html = index_html.replace('📚 What we offer', 'What we offer')
index_html = index_html.replace('🌍 Languages', 'Languages')
index_html = index_html.replace('🎁 Free to use', 'Free to use')
index_html = index_html.replace('🧮 Transparent pricing', 'Transparent pricing')
index_html = index_html.replace('Ready to start? 🌱', 'Ready to start?')
index_html = index_html.replace('No grammar tables. No worksheets. Just you, your teacher and a real conversation in 15 or 30 minute sessions.', 'Experience real conversation with your teacher in 15 or 30 minute focused sessions, free from rigid grammar tables and repetitive worksheets.')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)

# 3. Update apps/premium-courses/spoken/index.html & apps/premium-courses/index.html if exists
spoken_path = 'apps/premium-courses/spoken/index.html'
try:
    with open(spoken_path, 'r', encoding='utf-8') as f:
        spoken_html = f.read()
    spoken_html = spoken_html.replace('No grammar tables. No worksheets. Just you, your teacher and a real conversation', 'Experience pure conversation with your teacher, built around real life rather than grammar tables and worksheets')
    with open(spoken_path, 'w', encoding='utf-8') as f:
        f.write(spoken_html)
except Exception as e:
    print("Spoken path error:", e)

print("Pattern de-templatization complete!")
