#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Grammar Manual (Level C1) Interactive Web Edition.
Generates manuals/en/grammar/c1/index.html, section hub HTML pages (part-1.html, part-2.html),
assets (style.css, app.js), and topic HTML pages in manuals/en/grammar/c1/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/grammar/c1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* ==========================================================================
 COSYlanguages · English Grammar Manual Level C1 (interactive web edition)
 Cozy, friendly design system for teens and adults.
 ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0c3f38;
  --teal-800: #0f5c50;
  --teal-700: #157c6c;
  --teal-600: #1c9483;
  --teal-500: #25a894;
  --teal-100: #e4f4f0;
  --teal-050: #f2faf8;

  --ink: #132321;
  --ink-soft: #3c5450;
  --paper: #faf8f3;
  --panel: #ffffff;
  --line: #e6e2d8;

  --role-subject: #3562e0;
  --role-verb: #1c8f56;
  --role-noun: #c9740a;
  --role-adj: #7c4fd6;

  --why-bg: #fdf3d6;
  --why-line: #c99a1f;
  --why-ink: #7a5b0c;

  --native-bg: #f1e9fb;
  --native-line: #8b5cf6;
  --native-ink: #5b3aa8;

  --mistake-bg: #fdf0f0;
  --mistake-line: #e55353;
  --mistake-ink: #9c1c1c;

  --mint-bg: #eaf6f1;
  --mint-line: #1c9483;
  --mint-ink: #0f5c50;

  --radius-s: 10px;
  --radius-m: 16px;
  --radius-l: 24px;
  --shadow-card: 0 2px 4px rgba(19,35,33,.03), 0 10px 28px -8px rgba(19,35,33,.12);
  --shadow-hover: 0 4px 8px rgba(19,35,33,.05), 0 16px 36px -8px rgba(19,35,33,.20);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; max-width: 100%; }

.topbar {
  background: var(--teal-900); color: #fff; padding: 12px 20px;
  position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,.15);
}
.topbar-inner {
  max-width: 1080px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
}
.brand {
  display: flex; align-items: center; gap: 10px; text-decoration: none; color: #fff;
}
.brand-mark {
  background: var(--teal-500); color: var(--teal-900); font-weight: 900;
  font-family: var(--font-display); width: 32px; height: 32px; border-radius: 8px;
  display: grid; place-items: center; font-size: 15px;
}
.brand-name { font-family: var(--font-display); font-weight: 800; font-size: 17px; }
.topbar-nav { display: flex; gap: 6px; flex-wrap: wrap; }
.topbar-nav a {
  color: var(--teal-100); text-decoration: none; font-size: 13px; font-weight: 600;
  padding: 4px 10px; border-radius: 6px; transition: background .15s;
}
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.12); color: #fff; }

.hero {
  background: linear-gradient(135deg, var(--teal-900), var(--teal-800));
  color: #fff; padding: 48px 20px 40px; text-align: center;
}
.hero-kicker {
  display: inline-block; background: rgba(255,255,255,.15); color: #fff;
  font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.hero h1 {
  font-family: var(--font-display); font-size: clamp(28px, 4.5vw, 42px);
  margin: 0 0 12px; font-weight: 900; line-height: 1.2;
}
.hero p.lead {
  max-width: 680px; margin: 0 auto; font-size: 17px; opacity: .92; line-height: 1.5;
}

.container { max-width: 1000px; margin: 0 auto; padding: 32px 20px 60px; }

.parts-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 20px;
}
.part-card {
  background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m);
  padding: 24px; text-decoration: none; color: inherit; display: flex; flex-direction: column;
  box-shadow: var(--shadow-card); transition: transform .2s, box-shadow .2s; position: relative; overflow: hidden;
}
.part-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); }
.part-card .stripe { position: absolute; top: 0; left: 0; right: 0; height: 5px; }
.part-card .pnum { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--teal-700); margin-bottom: 6px; }
.part-card h2 { font-family: var(--font-display); font-size: 19px; margin: 0 0 8px; color: var(--teal-900); }
.part-card p { font-size: 14px; color: var(--ink-soft); margin: 0 0 16px; flex-grow: 1; }
.part-card .topics-count { font-size: 13px; font-weight: 700; color: var(--teal-600); }

.page-head { margin-bottom: 28px; }
.page-head .eyebrow { font-size: 13px; font-weight: 800; color: var(--teal-600); text-transform: uppercase; letter-spacing: .5px; }
.page-head h1 { font-family: var(--font-display); font-size: 32px; margin: 4px 0 8px; color: var(--teal-900); }
.page-head .subtitle { font-size: 17px; color: var(--ink-soft); margin: 0; }
.page-head hr.rule { border: 0; height: 2px; background: var(--line); margin-top: 20px; }

.box {
  background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m);
  padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow-card);
}
.rule-box { border-left: 5px solid var(--teal-600); }
.outcome-banner { background: rgba(28,143,86,0.08); border-left: 4px solid var(--role-verb); padding: 12px 16px; margin-bottom: 20px; border-radius: 4px; }

.table-wrap { overflow-x: auto; margin: 16px 0; }
table { width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; }
th, td { padding: 10px 14px; border-bottom: 1px solid var(--line); }
th { background: var(--teal-050); color: var(--teal-900); font-weight: 700; }

.examples { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 16px; border-radius: var(--radius-s); margin-bottom: 24px; }
.examples .label { font-weight: 800; color: var(--mint-ink); font-size: 13px; text-transform: uppercase; letter-spacing: .5px; display: block; margin-bottom: 8px; }
.examples ul { margin: 0; padding-left: 20px; color: var(--ink); }
.examples li { margin-bottom: 6px; }

.mistakes { background: var(--mistake-bg); border-left: 4px solid var(--mistake-line); padding: 16px; border-radius: var(--radius-s); margin-bottom: 24px; }
.mistakes .m-title { font-weight: 800; color: var(--mistake-ink); font-size: 14px; margin-bottom: 12px; }
.mflip { background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; cursor: pointer; user-select: none; transition: background .15s; }
.mflip:hover { background: #fffdfd; }
.wrong-line { color: var(--mistake-ink); font-weight: 600; margin-bottom: 4px; }
.right-line { color: var(--role-verb); font-weight: 700; display: none; margin-top: 6px; padding-top: 6px; border-top: 1px dashed var(--line); }
.mflip.revealed .right-line { display: block; }
.mflip .hint { font-size: 12px; color: #888; font-style: italic; }
.mflip.revealed .hint { display: none; }

.checklist { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; margin-bottom: 24px; }
.checklist h3 { margin: 0 0 14px; font-size: 16px; font-family: var(--font-display); color: var(--teal-900); }
.check-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; cursor: pointer; font-size: 14.5px; }
.check-item input { margin-top: 3px; accent-color: var(--teal-600); width: 16px; height: 16px; }
.check-progress { height: 6px; background: var(--line); border-radius: 3px; margin-top: 14px; overflow: hidden; }
.check-progress-bar { height: 100%; background: var(--teal-500); width: 0%; transition: width .3s; }

.quiz-panel { background: var(--panel); border: 2px solid var(--teal-600); border-radius: var(--radius-m); padding: 24px; margin-bottom: 32px; }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.quiz-head h2 { margin: 0; font-family: var(--font-display); font-size: 18px; color: var(--teal-900); }
.quiz-score { font-weight: 800; color: var(--teal-700); font-size: 14px; }
.qitem { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px dashed var(--line); }
.qitem:last-child { border-bottom: none; }
.qtext { font-weight: 700; margin-bottom: 10px; font-size: 15px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt {
  background: var(--paper); border: 1px solid var(--line); padding: 10px 14px; border-radius: 8px;
  text-align: left; font-size: 14px; font-family: inherit; cursor: pointer; transition: all .15s;
}
.qopt:hover { background: var(--teal-050); border-color: var(--teal-500); }
.qopt.correct { background: #e6f7ef; border-color: var(--role-verb); color: #0e5a34; font-weight: 700; }
.qopt.wrong { background: var(--mistake-bg); border-color: var(--mistake-line); color: var(--mistake-ink); }
.qexplain { font-size: 13px; color: var(--ink-soft); margin-top: 8px; display: none; padding: 8px 12px; background: var(--paper); border-radius: 6px; }
.quiz-reset { background: var(--teal-700); color: #fff; border: 0; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 40px; }
.pager a {
  flex: 1; background: var(--panel); border: 1px solid var(--line); padding: 14px 18px; border-radius: var(--radius-m);
  text-decoration: none; color: inherit; display: flex; flex-direction: column; box-shadow: var(--shadow-card); transition: all .15s;
}
.pager a:hover { border-color: var(--teal-500); transform: translateY(-2px); }
.pager .dir { font-size: 12px; font-weight: 800; color: var(--teal-600); text-transform: uppercase; margin-bottom: 4px; }
.pager .ttl { font-weight: 700; font-size: 15px; color: var(--teal-900); }
.pager a.next { text-align: right; }

footer.site {
  background: var(--teal-900); color: var(--teal-100); padding: 24px 20px; text-align: center; font-size: 13.5px; margin-top: 60px;
}
footer.site a { color: #fff; text-decoration: underline; }
"""

APP_JS = """/* COSYlanguages · Level C1 Grammar Manual Interactive Assets */
document.addEventListener('DOMContentLoaded', () => {
  // Mistake flip cards
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
    });
  });

  // Skill Checklists with LocalStorage
  document.querySelectorAll('.checklist').forEach(box => {
    const key = 'cosy-check-en-c1-g-' + (box.dataset.key || 'default');
    const checkboxes = box.querySelectorAll('input[type="checkbox"]');
    const progressBar = box.querySelector('.check-progress');
    let barInner = box.querySelector('.check-progress-bar');
    if (progressBar && !barInner) {
      barInner = document.createElement('div');
      barInner.className = 'check-progress-bar';
      progressBar.appendChild(barInner);
    }

    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    checkboxes.forEach((cb, idx) => {
      if (saved[idx]) cb.checked = true;
      cb.addEventListener('change', () => {
        const state = Array.from(checkboxes).map(c => c.checked);
        localStorage.setItem(key, JSON.stringify(state));
        updateProgress();
      });
    });

    function updateProgress() {
      const checked = Array.from(checkboxes).filter(c => c.checked).length;
      const total = checkboxes.length;
      const pct = total ? Math.round((checked / total) * 100) : 0;
      if (barInner) barInner.style.width = pct + '%';
    }
    updateProgress();
  });

  // Diagnostic Quizzes
  document.querySelectorAll('.quiz-panel').forEach(quiz => {
    const qitems = quiz.querySelectorAll('.qitem');
    const scoreEl = quiz.querySelector('.quiz-score');
    const resetBtn = quiz.querySelector('.quiz-reset');
    let score = 0;

    qitems.forEach((item, qidx) => {
      const opts = item.querySelectorAll('.qopt');
      const explain = item.querySelector('.qexplain');
      opts.forEach((opt, oidx) => {
        opt.addEventListener('click', () => {
          if (item.dataset.answered) return;
          item.dataset.answered = 'true';
          const isCorrect = (oidx === 0 && !opt.classList.contains('incorrect-target')) || opt.dataset.correct === 'true';
          if (isCorrect) {
            opt.classList.add('correct');
            score++;
          } else {
            opt.classList.add('wrong');
            opts.forEach(o => {
              if (o.dataset.correct === 'true' || o === opts[0]) o.classList.add('correct');
            });
          }
          if (explain) explain.style.display = 'block';
          if (scoreEl) scoreEl.textContent = `Score: ${score} / ${qitems.length}`;
        });
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        score = 0;
        if (scoreEl) scoreEl.textContent = `Score: 0 / ${qitems.length}`;
        qitems.forEach(item => {
          delete item.dataset.answered;
          item.querySelectorAll('.qopt').forEach(o => {
            o.classList.remove('correct', 'wrong');
          });
          const explain = item.querySelector('.qexplain');
          if (explain) explain.style.display = 'none';
        });
      });
    }
  });
});
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Part 1 · Advanced Hedging, Nuance & Modality",
        "short_title": "Part 1",
        "subtitle": "Mastering academic stance devices, nuance control, and complex deduction mechanics.",
        "eyebrow": "Pillar II — Grammar Knowledge Tree",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Hedging & Modality",
                "topics": [
                    "advanced-hedging-and-academic-stance-devices",
                    "modality-for-speculation-deduction-and-certainty"
                ]
            }
        ]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Part 2 · Information Packaging, Cohesion & Sentence Variety",
        "short_title": "Part 2",
        "subtitle": "Theme/rheme alignment, syntactic inversion, substitution devices, periodic sentences, and punctuation cadence.",
        "eyebrow": "Pillar II — Grammar Knowledge Tree",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Syntactic & Cohesive Control",
                "topics": [
                    "theme-rheme-and-information-packaging",
                    "cohesion-ellipsis-and-lexical-substitution",
                    "sentence-variety-periodic-loose-and-balanced",
                    "advanced-punctuation-mechanics"
                ]
            }
        ]
    }
]

TOPICS_DATA = {
    "advanced-hedging-and-academic-stance-devices": {
        "title": "Advanced Hedging & Academic Stance Devices",
        "subtitle": "Nuance control, probability adverbs, distance verbs, modal past expressions, and noun hedging phrases",
        "part_id": "part-1",
        "part_title": "Part 1 · Advanced Hedging, Nuance & Modality",
        "outcome": "You can express cautious academic assertions and modulate claim strength with precision.",
        "rule": "Use distance verbs (<em>appear to, tend to, suggest</em>), probability adverbs (<em>arguably, conceivably, presumably</em>), and modal past structures (<em>would seem to indicate</em>) to avoid overgeneralization.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Device Type</th><th>Grammar Pattern</th><th>Example Sentence</th></tr></thead>
<tbody>
<tr><td>Probability Adverbs</td><td>arguably / conceivably / presumably</td><td>The policy is <b>arguably</b> the most effective intervention to date.</td></tr>
<tr><td>Distance Verbs</td><td>appear to / tend to / suggest</td><td>The preliminary findings <b>tend to suggest</b> a gradual shift.</td></tr>
<tr><td>Modal Past Expressions</td><td>would seem to + Base / Have V3</td><td>The preliminary dataset <b>would seem to indicate</b> structural change.</td></tr>
<tr><td>Noun Hedging Phrases</td><td>There is reason to believe that...</td><td><b>There is reason to believe that</b> regulatory updates will follow.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The research data <b>would seem to indicate</b> a gradual shift in consumer behavior toward sustainable alternatives.",
            "It is <b>arguably</b> premature to draw definitive conclusions from initial clinical trials."
        ],
        "mistakes": [
            ("❌ The data proves beyond any doubt that the policy caused the crisis.", "✅ The data would seem to indicate a correlation between the policy and the crisis."),
            ("❌ It appears clearly that everyone agreed.", "✅ It would appear that consensus was reached among the committee members.")
        ],
        "check": [
            "Use distance verbs to soften academic claims",
            "Apply modal past hedging expressions in formal reports"
        ],
        "quiz": [
            {
                "q": "Which sentence demonstrates appropriate academic hedging?",
                "opts": [
                    "The findings would seem to indicate a positive trend.",
                    "The findings prove without question that we are 100% correct."
                ],
                "exp": "Academic stance devices use modal past hedging to avoid overgeneralization."
            },
            {
                "q": "Choose the hedged probability adverb:",
                "opts": [
                    "Presumably",
                    "Definitely without exception"
                ],
                "exp": "'Presumably' indicates probable inference without absolute assertion."
            }
        ]
    },
    "modality-for-speculation-deduction-and-certainty": {
        "title": "Modality for Speculation, Deduction & Certainty",
        "subtitle": "Must have, cannot have, might conceivably, open to question, and past modal deductions",
        "part_id": "part-1",
        "part_title": "Part 1 · Advanced Hedging, Nuance & Modality",
        "outcome": "You can express fine-grained degrees of past and present certainty, impossibility, and speculation.",
        "rule": "Apply <em>must have + V3</em> for logical necessity, <em>cannot/couldn't have + V3</em> for negative certainty, and <em>might conceivably</em> for theoretical possibilities.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Deduction Level</th><th>Structure</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Past Certainty (+)</td><td>must have + V3</td><td>The system <b>must have encountered</b> an unhandled exception.</td></tr>
<tr><td>Past Certainty (-)</td><td>cannot / couldn't have + V3</td><td>The security breach <b>couldn't have originated</b> from the internal server.</td></tr>
<tr><td>Theoretical Possibility</td><td>might conceivably + V3 / Base</td><td>The board <b>might conceivably approve</b> the merger.</td></tr>
<tr><td>Open Certainty</td><td>It remains to be seen / open to question</td><td>Whether this strategy will succeed <b>remains to be seen</b>.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The auditors <b>must have overlooked</b> the anomaly in the Q3 ledger.",
            "Whether the legislation will achieve its intended goals <b>remains open to question</b>."
        ],
        "mistakes": [
            ("❌ The team mustn't have received the updated memo.", "✅ The team couldn't have received the updated memo."),
            ("❌ It might conceivably happened yesterday.", "✅ It might conceivably have happened yesterday.")
        ],
        "check": [
            "Differentiate couldn't have + V3 from mustn't have",
            "Use 'remains to be seen' and 'open to question' for open speculation"
        ],
        "quiz": [
            {
                "q": "Which phrase correctly expresses past negative certainty?",
                "opts": [
                    "The leak couldn't have come from the primary database.",
                    "The leak mustn't have come from the primary database."
                ],
                "exp": "In English deduction, 'couldn't have + V3' (not 'mustn't have') expresses past negative certainty."
            },
            {
                "q": "Complete: The executive committee _____ approve the proposal under strict conditions.",
                "opts": [
                    "might conceivably",
                    "couldn't conceives"
                ],
                "exp": "'Might conceivably' expresses a theoretical modal possibility."
            }
        ]
    },
    "theme-rheme-and-information-packaging": {
        "title": "Theme, Rheme & Information Packaging",
        "subtitle": "Optimizing discourse flow via Theme/Rheme alignment, syntactic fronting, inversion, and end-weight",
        "part_id": "part-2",
        "part_title": "Part 2 · Information Packaging, Cohesion & Sentence Variety",
        "outcome": "You can structure complex sentences so that known context leads smoothly into prominent new information.",
        "rule": "Position familiar context in the sentence Theme (start) and heavy, high-impact new details in the Rheme (end) using inversion and fronting.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Technique</th><th>Syntactic Pattern</th><th>Example Sentence</th></tr></thead>
<tbody>
<tr><td>Syntactic Inversion</td><td>Negative Adverbial + Auxiliary + S + V</td><td><b>Not until the full report was published did</b> the board realize the risk.</td></tr>
<tr><td>Fronting</td><td>Prepositional / Adverbial + Verb + Subject</td><td><b>In no small measure did</b> the economic stimulus contribute to recovery.</td></tr>
<tr><td>End-Weight Principle</td><td>Place heavy noun clause at sentence end</td><td>The committee evaluated <b>the extensive evidence collected across fifteen independent trials</b>.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Not until the audit concluded <b>did the board comprehend</b> the magnitude of the deficit.",
            "Seldom <b>have we witnessed</b> such rapid consensus on constitutional policy."
        ],
        "mistakes": [
            ("❌ Not until yesterday the director realized his mistake.", "✅ Not until yesterday did the director realize his mistake."),
            ("❌ In no circumstances we can accept this clause.", "✅ Under no circumstances can we accept this clause.")
        ],
        "check": [
            "Apply subject-auxiliary inversion after negative fronted adverbials",
            "Utilize the end-weight principle for heavy complex object clauses"
        ],
        "quiz": [
            {
                "q": "Which sentence correctly applies syntactic inversion?",
                "opts": [
                    "Rarely have researchers encountered such consistent data.",
                    "Rarely researchers have encountered such consistent data."
                ],
                "exp": "Fronted negative adverbials require subject-auxiliary inversion (Rarely have researchers...)."
            },
            {
                "q": "What is the primary function of the End-Weight principle?",
                "opts": [
                    "Placing long, complex, heavy clauses at sentence termination for rhetorical impact.",
                    "Starting every sentence with an auxiliary verb regardless of context."
                ],
                "exp": "End-weight optimizes readability by ending sentences with heavy informative clauses."
            }
        ]
    },
    "cohesion-ellipsis-and-lexical-substitution": {
        "title": "Cohesion, Ellipsis & Lexical Substitution",
        "subtitle": "Cohesive connectors, substitution devices (do so, such, the former / the latter), and ellipsis",
        "part_id": "part-2",
        "part_title": "Part 2 · Information Packaging, Cohesion & Sentence Variety",
        "outcome": "You can connect complex ideas seamlessly without repetitive phrasing across paragraphs and essays.",
        "rule": "Use cohesive connectors (<em>notwithstanding, subsequently, accordingly</em>) and substitution markers (<em>do so, the former / the latter</em>) for elegant discourse continuity.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Device</th><th>Cohesive Function</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Cohesive Connectors</td><td>notwithstanding / subsequently / accordingly</td><td><b>Notwithstanding</b> initial setbacks, the venture secured funding.</td></tr>
<tr><td>Substitution (Nominal)</td><td>the former / the latter</td><td>The report analyzed solar and wind energy; <b>the former</b> showed higher growth.</td></tr>
<tr><td>Substitution (Verbal)</td><td>do so / doing so</td><td>If members wish to vote, they must <b>do so</b> in writing.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The board evaluated two proposals; <b>the former</b> prioritized cost efficiency, while <b>the latter</b> emphasized rapid expansion.",
            "Employees were asked to sign the revised protocol, and all senior managers <b>did so</b> promptly."
        ],
        "mistakes": [
            ("❌ The company wanted to expand, but to expand was too risky.", "✅ The company wanted to expand, but doing so was deemed too risky."),
            ("❌ In spite of the rain, but we went outside.", "✅ Notwithstanding the rain, we proceeded with the survey.")
        ],
        "check": [
            "Use 'the former' and 'the latter' to refer back to two previously mentioned items",
            "Substitute repeated VP structures with 'do so' or 'doing so'"
        ],
        "quiz": [
            {
                "q": "Choose the sentence that correctly uses verbal substitution:",
                "opts": [
                    "Should you wish to submit an application, please do so before Friday.",
                    "Should you wish to submit an application, please submit application before Friday."
                ],
                "exp": "'Do so' replaces the repeated verb phrase 'submit an application'."
            },
            {
                "q": "In 'We reviewed Option A and Option B; the latter was selected', what does 'the latter' refer to?",
                "opts": [
                    "Option B",
                    "Option A"
                ],
                "exp": "'The latter' refers to the second of two mentioned items (Option B)."
            }
        ]
    },
    "sentence-variety-periodic-loose-and-balanced": {
        "title": "Sentence Variety (Periodic, Loose & Balanced Sentences)",
        "subtitle": "Modulating rhetorical cadence with periodic delays, cumulative expansions, and balanced antithesis",
        "part_id": "part-2",
        "part_title": "Part 2 · Information Packaging, Cohesion & Sentence Variety",
        "outcome": "You can alternate sentence architecture deliberately to create suspense, detail, or balanced contrast.",
        "rule": "Use <strong>periodic sentences</strong> (delaying main clause until the end) for drama/suspense, <strong>loose sentences</strong> for detail layering, and <strong>balanced sentences</strong> for antithetical symmetry.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Sentence Type</th><th>Structural Characteristic</th><th>Example Sentence</th></tr></thead>
<tbody>
<tr><td>Periodic Sentence</td><td>Main clause delayed to sentence end</td><td>Having reviewed the data, consulted experts, and weighed the risks, <b>the board approved the proposal</b>.</td></tr>
<tr><td>Loose (Cumulative)</td><td>Main clause first, followed by dependent modifiers</td><td><b>The market collapsed</b>, triggering widespread panic, forcing emergency liquidations, and depressing consumer confidence.</td></tr>
<tr><td>Balanced Sentence</td><td>Symmetrical parallel syntactic structures</td><td><b>To invest without research is risky</b>; <b>to research without investing is futile</b>.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "After months of intense debate, exhaustive peer review, and continuous revisions, <b>the manuscript was finally accepted</b>.",
            "Knowledge speaks, but wisdom listens."
        ],
        "mistakes": [
            ("❌ Having arrived late, the train had already left.", "✅ Having arrived late, we discovered that the train had already left."),
            ("❌ To write clearly is good, but reading fast is better.", "✅ To write clearly is demanding; to read critically is essential.")
        ],
        "check": [
            "Draft a periodic sentence that holds the main predicate until the sentence conclusion",
            "Construct a balanced sentence using parallel infinitive or clause structures"
        ],
        "quiz": [
            {
                "q": "Identify the Periodic Sentence structure:",
                "opts": [
                    "Despite rising costs and severe logistical delays, the engineers completed the bridge on schedule.",
                    "The engineers completed the bridge on schedule despite rising costs."
                ],
                "exp": "Periodic sentences delay the main independent clause until the final position."
            },
            {
                "q": "What characterizes a Balanced Sentence?",
                "opts": [
                    "Symmetrical, parallel syntactic structures balancing complementary or contrasting ideas.",
                    "Ending every sentence with a random preparticiple clause."
                ],
                "exp": "Balanced sentences use parallel syntactic construction for rhetorical symmetry."
            }
        ]
    },
    "advanced-punctuation-mechanics": {
        "title": "Advanced Punctuation Mechanics",
        "subtitle": "Semicolons, colons, em dashes, and parenthetical phrasing for nuanced prose cadence",
        "part_id": "part-2",
        "part_title": "Part 2 · Information Packaging, Cohesion & Sentence Variety",
        "outcome": "You can punctuate complex academic and executive prose with stylistic precision and rhythmic control.",
        "rule": "Use semicolons (`;`) to join closely linked independent clauses, colons (`:`) to introduce expansions or explanations, and em dashes (`—`) for emphatic parenthetical insertions.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Punctuation Mark</th><th>Syntactic Function</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Semicolon ( ; )</td><td>Connects independent clauses without conjunctions</td><td>The evidence is compelling<b>;</b> nevertheless, caution is required.</td></tr>
<tr><td>Colon ( : )</td><td>Introduces an elaboration, list, or definitive summary</td><td>The report highlighted one major flaw<b>:</b> systemic oversight failure.</td></tr>
<tr><td>Em Dash ( — )</td><td>Injects emphatic parenthetical commentary or abrupt shift</td><td>The reform package<b>—</b>despite intense lobbying against it<b>—</b>passed easily.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The original hypothesis was disproven<b>;</b> consequently, the research team redesigned the trial protocol.",
            "Three core principles guided the negotiation<b>:</b> transparency, reciprocity, and strict confidentiality."
        ],
        "mistakes": [
            ("❌ The project failed; because budget was cut.", "✅ The project failed; the budget had been slashed drastically."),
            ("❌ He had one goal, to win the championship.", "✅ He had one goal: to win the championship.")
        ],
        "check": [
            "Use semicolons alongside conjunctive adverbs (e.g. ; however, / ; consequently,)",
            "Employ em dashes for stylistic emphasis in formal essays"
        ],
        "quiz": [
            {
                "q": "Which sentence correctly uses a semicolon to join independent clauses?",
                "opts": [
                    "The methodology was sound; however, the sample size was insufficient.",
                    "The methodology was sound; because the sample size was big."
                ],
                "exp": "Semicolons join complete independent clauses, often followed by conjunctive adverbs like 'however'."
            },
            {
                "q": "When is a colon appropriate in formal writing?",
                "opts": [
                    "To introduce an amplification, explanation, or formal listing following an independent clause.",
                    "Between a verb and its direct object in every simple clause."
                ],
                "exp": "Colons follow a complete independent clause to introduce an elaboration or list."
            }
        ]
    }
}

ORDERED_TOPIC_SLUGS = [
    "advanced-hedging-and-academic-stance-devices",
    "modality-for-speculation-deduction-and-certainty",
    "theme-rheme-and-information-packaging",
    "cohesion-ellipsis-and-lexical-substitution",
    "sentence-variety-periodic-loose-and-balanced",
    "advanced-punctuation-mechanics"
]

def render_topbar(active_part_id=None, is_topic=False):
    prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{prefix}../../english-c1.html" style="font-weight:700;">← English Hub</a>']
    for p in PARTS:
        cls = "active" if p["id"] == active_part_id else ""
        nav_links.append(f'<a class="{cls}" href="{prefix}{p["file"]}">{p["short_title"]}</a>')
    nav_html = "\n ".join(nav_links)
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Grammar C1</span>
 </a>
 <nav class="topbar-nav">
 {nav_html}
 </nav>
 </div>
</header>"""

def render_footer(is_topic=False):
    prefix = "../" if is_topic else ""
    return f"""<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual, Level C1 · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    # Build topics
    for idx, slug in enumerate(ORDERED_TOPIC_SLUGS):
        tdata = TOPICS_DATA[slug]
        prev_slug = ORDERED_TOPIC_SLUGS[idx - 1] if idx > 0 else None
        next_slug = ORDERED_TOPIC_SLUGS[idx + 1] if idx < len(ORDERED_TOPIC_SLUGS) - 1 else None

        prev_html = ""
        if prev_slug:
            pt = TOPICS_DATA[prev_slug]
            prev_html = f'<a class="prev" href="{prev_slug}.html"><span class="dir">&larr; Previous</span><span class="ttl">{pt["title"]}</span></a>'

        next_html = ""
        if next_slug:
            nt = TOPICS_DATA[next_slug]
            next_html = f'<a class="next" href="{next_slug}.html"><span class="dir">Next &rarr;</span><span class="ttl">{nt["title"]}</span></a>'

        pager_html = f'<div class="pager">{prev_html}{next_html}</div>'

        mistakes_html = ""
        for w, r in tdata["mistakes"]:
            mistakes_html += f""" <div class="mflip">
  <div class="wrong-line"><span class="wrong-text">{w}</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span>{r}</span></div>
 </div>\n"""

        check_html = ""
        for citem in tdata["check"]:
            check_html += f' <label class="check-item"><input type="checkbox"><span>{citem}</span></label>\n'

        quiz_html = ""
        for qidx, qitem in enumerate(tdata["quiz"]):
            opts_html = ""
            for oidx, opt in enumerate(qitem["opts"]):
                corr_attr = ' data-correct="true"' if oidx == 0 else ''
                opts_html += f'<button class="qopt"{corr_attr}>{opt}</button>'
            quiz_html += f""" <div class="qitem">
  <div class="qtext">{qidx + 1}. {qitem["q"]}</div>
  <div class="qopts">{opts_html}</div>
  <div class="qexplain">{qitem["exp"]}</div>
 </div>\n"""

        topbar_html = render_topbar(active_part_id=tdata["part_id"], is_topic=True)
        footer_html = render_footer(is_topic=True)

        topic_code = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{tdata["title"]} · COSYlanguages C1 Grammar</title>
<meta name="description" content="{tdata["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{topbar_html}<main class="container"><div class="page-head">
 <span class="eyebrow">Level C1 Grammar</span>
 <h1>{tdata["title"]}</h1>
 <p class="subtitle">{tdata["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="box outcome-banner">
  <strong>🎯 What you can communicate after this page:</strong> {tdata["outcome"]}
</div>
<div class="box rule-box">
  <p><strong>Core Rule:</strong> {tdata["rule"]}</p>
</div>
{tdata["table"]}
<div class="examples"><span class="label">Examples</span><ul>{''.join(f'<li>{ex}</li>' for ex in tdata["examples"])}</ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
{mistakes_html}</div>
<div class="checklist" data-key="{slug}">
 <h3>🎯 Can you already use this?</h3>
{check_html} <div class="check-progress"></div>
</div>
<div class="quiz-panel">
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / {len(tdata["quiz"])}</span></div>
{quiz_html} <button class="quiz-reset">Reset quiz</button>
</div>{pager_html}</main>{footer_html}
<script src="../assets/app.js"></script>
</body>
</html>
"""
        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(topic_code)

    # Build part pages
    for p in PARTS:
        topbar_html = render_topbar(active_part_id=p["id"], is_topic=False)
        footer_html = render_footer(is_topic=False)

        cards_html = ""
        for g in p["groups"]:
            cards_html += f'<h3 style="grid-column:1/-1; margin: 20px 0 10px; font-family:var(--font-display); color:var(--teal-900);">{g["label"]}</h3>\n'
            for tslug in g["topics"]:
                tdata = TOPICS_DATA[tslug]
                cards_html += f"""<a class="part-card" href="topics/{tslug}.html">
 <div class="stripe" style="background:{p["stripe"]};"></div>
 <span class="pnum">{p["short_title"]}</span>
 <h2>{tdata["title"]}</h2>
 <p>{tdata["subtitle"]}</p>
 <span class="topics-count">Explore Topic &rarr;</span>
</a>\n"""

        part_page_code = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages Level C1</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<main class="container">
<div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="parts-grid">
{cards_html}</div>
</main>{footer_html}
<script src="assets/app.js"></script>
</body>
</html>
"""
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_page_code)

    # Build index.html
    topbar_html = render_topbar(active_part_id=None, is_topic=False)
    footer_html = render_footer(is_topic=False)

    parts_grid_cards = []
    for p in PARTS:
        count = sum(len(g["topics"]) for g in p["groups"])
        topic_plural = "topics" if count != 1 else "topic"
        parts_grid_cards.append(f"""<a class="part-card" href="{p["file"]}">
 <div class="stripe" style="background:{p["stripe"]};"></div>
 <div class="pnum">{p["short_title"]}</div>
 <h2>{p["title"]}</h2>
 <p>{p["subtitle"]}</p>
 <span class="topics-count">{count} {topic_plural} &rarr;</span>
 </a>""")

    parts_grid_html = "\n".join(parts_grid_cards)

    index_code = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Grammar Manual (Level C1) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages Level C1 English grammar manual: hedging, nuance, discourse cohesion, sentence packaging, and advanced punctuation.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level C1</span>
 <h1>English Grammar Manual · Level C1</h1>
 <p class="lead">Syntactic sophistication, hedging, information packaging, and rhetorical control. An interactive companion for advanced C1 academic and professional mastery.</p>
 </div>
</section><main class="container">
 <div class="parts-grid">
 {parts_grid_html}
 </div>
</main>{footer_html}
<script src="assets/app.js"></script>
</body>
</html>
"""
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_code)

    print(f"Successfully built Level C1 English Grammar Manual (index, 2 hubs, {len(ORDERED_TOPIC_SLUGS)} topics)!")

if __name__ == "__main__":
    build_all()
