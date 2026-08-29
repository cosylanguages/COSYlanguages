#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level C1) Interactive Web Edition.
Generates manuals/en/vocabulary/c1/index.html, 14 section hub HTML pages (part-1.html .. part-14.html),
assets (style.css, app.js), and 21 topic HTML pages in manuals/en/vocabulary/c1/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary/c1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level C1 Vocabulary Manual Stylesheet */
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

  --why-bg: #fdf3d6;
  --why-line: #c99a1f;
  --why-ink: #7a5b0c;

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
.outcome-banner { background: rgba(28,143,86,0.08); border-left: 4px solid #1c8f56; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px; }

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
.right-line { color: #1c8f56; font-weight: 700; display: none; margin-top: 6px; padding-top: 6px; border-top: 1px dashed var(--line); }
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
.qopt.correct { background: #e6f7ef; border-color: #1c8f56; color: #0e5a34; font-weight: 700; }
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

APP_JS = """/* COSYlanguages · Level C1 Vocabulary Manual Interactive Assets */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
    });
  });

  document.querySelectorAll('.checklist').forEach(box => {
    const key = 'cosy-check-en-c1-v-' + (box.dataset.key || 'default');
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
        "title": "Part 1 · Advanced Academic Discourse & Research",
        "short_title": "Part 1",
        "subtitle": "Research article genres, peer review ethics, and statistical data interpretation.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#3562e0",
        "topics": [
            "academic-genres-and-research-publications",
            "research-ethics-peer-review-and-methodology",
            "statistical-analysis-and-empirical-data-interpretation"
        ]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Part 2 · Jurisprudence, Litigation & Constitutional Law",
        "short_title": "Part 2",
        "subtitle": "Criminal proceedings, civil contracts, torts, and constitutional sovereignty.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#1c8f56",
        "topics": [
            "criminal-law-and-judicial-proceedings",
            "civil-law-contracts-and-torts",
            "constitutional-and-international-law"
        ]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Part 3 · Economics, Financial Markets & Fiscal Policy",
        "short_title": "Part 3",
        "subtitle": "Macroeconomics, behavioural nudge theory, banking leverage, and financial contagion.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#c9740a",
        "topics": [
            "microeconomics-macroeconomics-and-behavioural-economics",
            "banking-investment-cryptocurrencies-and-crises"
        ]
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "title": "Part 4 · Corporate Governance & Business Management",
        "short_title": "Part 4",
        "subtitle": "Executive leadership, organizational culture, venture capital, and agile frameworks.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#7c4fd6",
        "topics": [
            "executive-leadership-operations-and-hr",
            "risk-management-change-and-entrepreneurship"
        ]
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "title": "Part 5 · Medicine, Public Health & Bioethics",
        "short_title": "Part 5",
        "subtitle": "Clinical trials, epidemiology, bioethics safeguards, and palliative care.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#a3195b",
        "topics": [
            "diagnostics-clinical-trials-and-specialties"
        ]
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "title": "Part 6 · Natural Sciences, Neuroscience & Climate Science",
        "short_title": "Part 6",
        "subtitle": "Quantum mechanics, evolutionary genetics, neural pathways, and thermodynamic climate modeling.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#3562e0",
        "topics": [
            "physics-chemistry-biology-and-genetics"
        ]
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "title": "Part 7 · Advanced Technology, AI & Cybernetics",
        "short_title": "Part 7",
        "subtitle": "Generative AI deep learning, zero-trust cloud architecture, and quantum encryption.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#1c8f56",
        "topics": [
            "artificial-intelligence-machine-learning-and-robotics",
            "cybersecurity-big-data-and-digital-ethics"
        ]
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "title": "Part 8 · Media, Journalism & Public Discourse",
        "short_title": "Part 8",
        "subtitle": "Investigative reporting, whistleblower protections, and editorial independence.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#c9740a",
        "topics": [
            "investigative-journalism-and-press-freedom"
        ]
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "title": "Part 9 · Philosophy, Ethics & Epistemology",
        "short_title": "Part 9",
        "subtitle": "Epistemological inquiry, normative ethics, determinism, and existential philosophy.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#7c4fd6",
        "topics": [
            "morality-existentialism-and-epistemology"
        ]
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "title": "Part 10 · Psychology, Cognition & Behavior",
        "short_title": "Part 10",
        "subtitle": "Cognitive behavioural therapy, confirmation bias, and cognitive dissonance.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#a3195b",
        "topics": [
            "cognitive-biases-mental-disorders-and-therapy"
        ]
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "title": "Part 11 · Higher Education, Pedagogy & Academics",
        "short_title": "Part 11",
        "subtitle": "Pedagogical innovation, formative assessment, and academic literacy.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#3562e0",
        "topics": [
            "academic-literacy-assessment-and-pedagogy"
        ]
    },
    {
        "id": "part-12",
        "file": "part-12.html",
        "title": "Part 12 · Culture, Heritage & Fine Arts",
        "short_title": "Part 12",
        "subtitle": "Fine art curation, literary critique, and architectural heritage preservation.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#1c8f56",
        "topics": [
            "aesthetics-literature-and-architectural-heritage"
        ]
    },
    {
        "id": "part-13",
        "file": "part-13.html",
        "title": "Part 13 · International Relations & Diplomacy",
        "short_title": "Part 13",
        "subtitle": "Geopolitical soft power, economic sanctions, and multilateral diplomacy.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#c9740a",
        "topics": [
            "geopolitics-soft-power-and-peacekeeping"
        ]
    },
    {
        "id": "part-14",
        "file": "part-14.html",
        "title": "Part 14 · Environment, Ecology & Circular Economy",
        "short_title": "Part 14",
        "subtitle": "Circular economy models, carbon offset schemes, and climate adaptation.",
        "eyebrow": "Pillar I — Visual Dictionary",
        "stripe": "#7c4fd6",
        "topics": [
            "climate-adaptation-biodiversity-and-green-tech"
        ]
    }
]

TOPICS_DATA = {
    "academic-genres-and-research-publications": {
        "title": "Academic Genres & Research Publications",
        "subtitle": "Systematic reviews, meta-analyses, white papers, monographs, and peer review terminology",
        "part_id": "part-1",
        "outcome": "You can categorize academic publication genres and discuss peer-reviewed research findings.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Core Term</th><th>Category</th><th>Definition / Context</th></tr></thead>
<tbody>
<tr><td>systematic review</td><td>Genre</td><td>Exhaustive synthesis of literature addressing a specific research question.</td></tr>
<tr><td>meta-analysis</td><td>Method</td><td>Statistical combination of results from multiple empirical studies.</td></tr>
<tr><td>monograph</td><td>Publication</td><td>Detailed scholarly treatise on a single specialized subject.</td></tr>
<tr><td>substantiate</td><td>Verb</td><td>Provide empirical evidence to support or prove a claim.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The peer review panel commended the exhaustive literature synthesis.",
            "Researchers must <b>substantiate</b> their hypotheses with empirical data."
        ],
        "mistakes": [
            ("❌ The paper substantiated that no evidence was found.", "✅ The meta-analysis substantiated the hypothesis with statistical evidence."),
            ("❌ He wrote a monograph of short news articles.", "✅ He published an authoritative monograph on medieval jurisprudence.")
        ],
        "check": [
            "Distinguish systematic reviews from meta-analyses",
            "Use formal academic verbs (substantiate, synthesize, refute)"
        ],
        "quiz": [
            {
                "q": "Which genre combines statistical results from multiple independent studies?",
                "opts": ["Meta-analysis", "Editorial"],
                "exp": "A meta-analysis applies quantitative statistical procedures to pool results across studies."
            },
            {
                "q": "What does 'substantiate' mean in academic research?",
                "opts": ["To provide supporting evidence for a premise", "To reject a hypothesis without evidence"],
                "exp": "'Substantiate' means establishing truth or proving a statement with empirical evidence."
            }
        ]
    },
    "research-ethics-peer-review-and-methodology": {
        "title": "Research Ethics, Peer Review & Methodology",
        "subtitle": "Institutional Review Boards (IRB), replication crisis, informed consent, and double-blind studies",
        "part_id": "part-1",
        "outcome": "You can discuss methodological integrity, conflict of interest, and ethical protocols in research.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Role</th><th>Context</th></tr></thead>
<tbody>
<tr><td>Institutional Review Board (IRB)</td><td>Ethics</td><td>Committee approving research involving human subjects.</td></tr>
<tr><td>replication crisis</td><td>Methodology</td><td>Methodological challenge where studies fail to produce identical results upon re-testing.</td></tr>
<tr><td>double-blind study</td><td>Design</td><td>Experimental setup where neither participants nor researchers know who receives treatment.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Prior to initiating the clinical trial, researchers obtained informed consent.",
            "The journal retracted the paper due to undisclosed conflicts of interest."
        ],
        "mistakes": [
            ("❌ The double-blind trial informed patients of their dosage.", "✅ In a double-blind study, neither patients nor administrators know treatment assignments.")
        ],
        "check": [
            "Explain IRB ethical consent requirements",
            "Discuss factors contributing to the replication crisis"
        ],
        "quiz": [
            {
                "q": "What characterizes a double-blind trial?",
                "opts": ["Neither subjects nor experimenters know group assignments", "Only subjects are kept unaware"],
                "exp": "Double-blind designs prevent observer bias from both participants and administrators."
            }
        ]
    },
    "statistical-analysis-and-empirical-data-interpretation": {
        "title": "Statistical Analysis & Empirical Data Interpretation",
        "subtitle": "Standard deviation, confidence intervals, regression analysis, inverse correlation, and outliers",
        "part_id": "part-1",
        "outcome": "You can describe statistical distributions, empirical significance, and data anomalies.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Statistical Concept</th><th>Interpretation</th></tr></thead>
<tbody>
<tr><td>regression analysis</td><td>Modeling relationships between dependent and independent variables.</td></tr>
<tr><td>inverse correlation</td><td>As one variable increases, the other systematically decreases.</td></tr>
<tr><td>outlier</td><td>A data point that deviates significantly from the rest of the sample.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Regression analysis indicated a statistically significant relationship.",
            "While there is an inverse correlation, margin of error remains high."
        ],
        "mistakes": [
            ("❌ Correlation always proves causation.", "✅ Correlation indicates association, but does not prove direct causation.")
        ],
        "check": [
            "Explain the difference between correlation and causation",
            "Interpret confidence intervals in empirical reports"
        ],
        "quiz": [
            {
                "q": "What does an inverse correlation indicate?",
                "opts": ["One variable increases while the other decreases", "Both variables increase together"],
                "exp": "An inverse (negative) correlation means variables move in opposite directions."
            }
        ]
    },
    "criminal-law-and-judicial-proceedings": {
        "title": "Criminal Law & Judicial Proceedings",
        "subtitle": "Indictments, plea bargains, affidavits, cross-examinations, and subpoenas",
        "part_id": "part-2",
        "outcome": "You can explain criminal justice steps from indictment to cross-examination and verdict.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Legal Term</th><th>Function</th></tr></thead>
<tbody>
<tr><td>indictment</td><td>Formal accusation initiating criminal charges.</td></tr>
<tr><td>plea bargain</td><td>Agreement where defendant pleads guilty for reduced charges.</td></tr>
<tr><td>subpoena</td><td>Writ ordering a witness to testify or produce evidence.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The grand jury issued a formal indictment charging the suspect with felony fraud.",
            "Defense counsel cross-examined the prosecution's key witness."
        ],
        "mistakes": [
            ("❌ The court subpoenaed the plea bargain.", "✅ The judge issued a subpoena demanding internal corporate records.")
        ],
        "check": [
            "Define plea bargain mechanics",
            "Differentiate indictment from verdict"
        ],
        "quiz": [
            {
                "q": "What is a subpoena?",
                "opts": ["A legal order compelling attendance or evidence production", "A final court verdict"],
                "exp": "A subpoena commands an individual to appear in court or supply documents."
            }
        ]
    },
    "civil-law-contracts-and-torts": {
        "title": "Civil Law, Contracts & Torts",
        "subtitle": "Breach of contract, indemnification clauses, compensatory damages, and out-of-court settlements",
        "part_id": "part-2",
        "outcome": "You can discuss contractual liability, tort claims, and dispute resolution mechanisms.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>tort</td><td>Civil wrong resulting in legal liability.</td></tr>
<tr><td>indemnification clause</td><td>Contractual agreement transferring financial risk/liability.</td></tr>
<tr><td>compensatory damages</td><td>Monetary award compensating plaintiff for losses.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Both parties agreed to an out-of-court settlement including an indemnification clause.",
            "The plaintiff filed a lawsuit seeking compensatory damages for gross negligence."
        ],
        "mistakes": [
            ("❌ A tort is a criminal felony.", "✅ A tort is a civil violation leading to monetary compensation.")
        ],
        "check": [
            "Identify the purpose of an indemnification clause",
            "Explain compensatory vs punitive damages"
        ],
        "quiz": [
            {
                "q": "What is the primary objective of compensatory damages?",
                "opts": ["To compensate the injured party for actual losses incurred", "To punish the state"],
                "exp": "Compensatory damages aim to make the plaintiff whole financially."
            }
        ]
    },
    "constitutional-and-international-law": {
        "title": "Constitutional & International Law",
        "subtitle": "Sovereignty, treaty ratification, constitutional amendments, and ICJ jurisprudence",
        "part_id": "part-2",
        "outcome": "You can evaluate constitutional validity and international law treaties.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Domain</th></tr></thead>
<tbody>
<tr><td>ratify</td><td>Formal adoption and legal enactment of a multilateral treaty.</td></tr>
<tr><td>sovereignty</td><td>Supreme authority of a state to govern its territory.</td></tr>
<tr><td>unconstitutional</td><td>Violating fundamental constitutional principles.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Supreme Court ruled that the executive decree was unconstitutional.",
            "Parliament debated whether treaty terms infringe upon national sovereignty."
        ],
        "mistakes": [
            ("❌ Parliament ratified an unconstitutional misdemeanor.", "✅ Parliament ratified the international convention after constitutional review.")
        ],
        "check": [
            "Explain treaty ratification requirements",
            "Analyze national sovereignty in international law"
        ],
        "quiz": [
            {
                "q": "What occurs when a nation ratifies a treaty?",
                "opts": ["It formally approves and accepts the treaty's binding terms", "It cancels the law"],
                "exp": "Ratification is the formal consent giving legal effect to international treaties."
            }
        ]
    },
    "microeconomics-macroeconomics-and-behavioural-economics": {
        "title": "Microeconomics, Macroeconomics & Behavioural Economics",
        "subtitle": "Price elasticity, systemic risk, market equilibrium, and nudge theory",
        "part_id": "part-3",
        "outcome": "You can contrast macroeconomic interventions with behavioural nudge strategies.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Concept</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>nudge theory</td><td>Behavioural interventions altering choices without prohibiting options.</td></tr>
<tr><td>systemic risk</td><td>Possibility of total financial collapse across an entire sector.</td></tr>
<tr><td>price elasticity</td><td>Sensitivity of demand relative to changes in price.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Central banks intervened with monetary policy to mitigate systemic risk.",
            "Behavioural economists design nudges to encourage timely tax payments."
        ],
        "mistakes": [
            ("❌ Nudge theory mandates strict legal penalties.", "✅ Nudge theory uses indirect suggestions to influence choice architecture.")
        ],
        "check": [
            "Explain nudge theory applications in public policy",
            "Define systemic risk in macroeconomic stability"
        ],
        "quiz": [
            {
                "q": "How does nudge theory influence behavior?",
                "opts": ["Through subtle choice architecture without mandatory bans", "By enforcing criminal sanctions"],
                "exp": "Nudge theory relies on non-coercive design to guide decisions."
            }
        ]
    },
    "banking-investment-cryptocurrencies-and-crises": {
        "title": "Banking, Investment, Cryptocurrencies & Crises",
        "subtitle": "Portfolio diversification, financial contagion, liquidity crisis, leverage, and inflation hedges",
        "part_id": "part-3",
        "outcome": "You can articulate market volatility, capital gains strategies, and liquidity risks.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Market Impact</th></tr></thead>
<tbody>
<tr><td>financial contagion</td><td>Spread of economic shock from one market across interconnected sectors.</td></tr>
<tr><td>inflation hedge</td><td>Asset protecting purchasing power during currency devaluation.</td></tr>
<tr><td>liquidity crisis</td><td>Acute shortage of cash or easily convertible assets across institutions.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "To guard against financial contagion, firms prioritized portfolio diversification.",
            "Investors shifted capital into commodities as an inflation hedge."
        ],
        "mistakes": [
            ("❌ Liquidity crisis means having too much spare cash.", "✅ Liquidity crisis implies a severe shortage of available liquid capital.")
        ],
        "check": [
            "Define financial contagion dynamics",
            "Identify assets used as inflation hedges"
        ],
        "quiz": [
            {
                "q": "What is an inflation hedge?",
                "opts": ["An asset expected to maintain value during inflation", "A government tax penalty"],
                "exp": "Inflation hedges preserve purchasing power as general price levels rise."
            }
        ]
    },
    "executive-leadership-operations-and-hr": {
        "title": "Executive Leadership, Operations & HR",
        "subtitle": "Corporate governance, talent acquisition, performance appraisals, and change management",
        "part_id": "part-4",
        "outcome": "You can lead corporate strategy discussions regarding governance and HR appraisals.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Executive Domain</th><th>Focus Area</th></tr></thead>
<tbody>
<tr><td>corporate governance</td><td>Rules and practices balancing stakeholder interests.</td></tr>
<tr><td>change management</td><td>Structured approach for transitioning individuals and organizations.</td></tr>
<tr><td>performance appraisal</td><td>Systematic evaluation of employee job performance.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The board enforced corporate governance standards to guarantee operational transparency.",
            "Leadership executed a change management strategy focused on talent acquisition."
        ],
        "mistakes": [
            ("❌ Corporate governance is only about recruiting interns.", "✅ Corporate governance oversees executive accountability and stakeholder ethics.")
        ],
        "check": [
            "Describe corporate governance principles",
            "Evaluate change management frameworks"
        ],
        "quiz": [
            {
                "q": "What is the primary role of corporate governance?",
                "opts": ["Establishing rules and oversight to ensure executive transparency and accountability", "Writing software code"],
                "exp": "Corporate governance ensures organizations operate transparently in stakeholders' interest."
            }
        ]
    },
    "risk-management-change-and-entrepreneurship": {
        "title": "Risk Management, Change & Entrepreneurship",
        "subtitle": "Venture capital, disruptive innovation, agile frameworks, contingency planning, and business pivots",
        "part_id": "part-4",
        "outcome": "You can describe entrepreneurial scale-up, venture funding, and risk mitigation.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Entrepreneurial Meaning</th></tr></thead>
<tbody>
<tr><td>disruptive innovation</td><td>Innovation creating new markets that displace established industry leaders.</td></tr>
<tr><td>venture capital</td><td>Private equity financing provided to high-growth startups.</td></tr>
<tr><td>contingency plan</td><td>Predefined strategy for responding to potential risk events.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The startup scaled its business model after securing venture capital funding.",
            "Executing a contingency plan allowed the enterprise to survive supply chain shocks."
        ],
        "mistakes": [
            ("❌ A pivot means declaring total bankruptcy.", "✅ A business pivot is a strategic shift in corporate strategy.")
        ],
        "check": [
            "Explain disruptive innovation examples",
            "Outline key components of a risk management contingency plan"
        ],
        "quiz": [
            {
                "q": "What defines disruptive innovation?",
                "opts": ["An innovation that transforms markets and displaces legacy market leaders", "Minor routine maintenance"],
                "exp": "Disruptive innovations reshape industries by offering novel, accessible alternatives."
            }
        ]
    },
    "diagnostics-clinical-trials-and-specialties": {
        "title": "Diagnostics, Clinical Trials & Specialties",
        "subtitle": "Phase III trials, bioethics committees, pharmacology, efficacy, and palliative care",
        "part_id": "part-5",
        "outcome": "You can discuss medical clinical trial phases, bioethical oversight, and palliative treatments.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Medical Term</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>Phase III trial</td><td>Large-scale clinical trial assessing treatment efficacy against standard therapies.</td></tr>
<tr><td>palliative care</td><td>Medical care focused on providing relief from symptoms and stress of serious illness.</td></tr>
<tr><td>bioethics committee</td><td>Interdisciplinary board reviewing medical research ethics.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The drug candidate advanced to Phase III clinical trials after demonstrating high efficacy.",
            "Bioethics committees maintain strict safeguards to protect trial participant welfare."
        ],
        "mistakes": [
            ("❌ Palliative care aims to cure underlying genetic conditions.", "✅ Palliative care focuses on symptom management and patient comfort.")
        ],
        "check": [
            "Outline clinical trial stages from Phase I to Phase III",
            "Discuss ethical responsibilities of bioethics committees"
        ],
        "quiz": [
            {
                "q": "What is the primary goal of palliative care?",
                "opts": ["Symptom management and quality of life enhancement", "Surgical eradication of disease"],
                "exp": "Palliative care prioritizes comfort and quality of life for severe illnesses."
            }
        ]
    },
    "physics-chemistry-biology-and-genetics": {
        "title": "Physics, Chemistry, Biology & Genetics",
        "subtitle": "Quantum mechanics, genome mapping, thermodynamic laws, and cognitive neural pathways",
        "part_id": "part-6",
        "outcome": "You can describe natural science concepts ranging from genomic sequencing to quantum physics.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Key Concept</th><th>Context</th></tr></thead>
<tbody>
<tr><td>Genetics</td><td>genome mapping</td><td>Sequencing total DNA structure of organisms.</td></tr>
<tr><td>Neuroscience</td><td>cognitive neural pathway</td><td>Interconnected neural circuits mediating memory and cognition.</td></tr>
<tr><td>Physics</td><td>thermodynamic law</td><td>Physical principles governing heat, energy, and entropy.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Neuroscientists identified cognitive neural pathways associated with language acquisition.",
            "Advanced climate modeling incorporates atmospheric thermodynamic data."
        ],
        "mistakes": [
            ("❌ Genome mapping changes thermodynamic laws.", "✅ Genome mapping decodes biological DNA sequences.")
        ],
        "check": [
            "Explain basic principles of genome mapping",
            "Discuss neural plasticity and cognitive pathways"
        ],
        "quiz": [
            {
                "q": "What does genome mapping achieve?",
                "opts": ["Determining the exact sequence and layout of genes in DNA", "Calculating orbital velocity"],
                "exp": "Genome mapping maps gene positions across an organism's chromosomes."
            }
        ]
    },
    "artificial-intelligence-machine-learning-and-robotics": {
        "title": "Artificial Intelligence, Machine Learning & Robotics",
        "subtitle": "Deep learning architectures, natural language processing (NLP), neural networks, and generative AI",
        "part_id": "part-7",
        "outcome": "You can explain machine learning architectures, neural network training, and AI ethics.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>AI Term</th><th>Technical Function</th></tr></thead>
<tbody>
<tr><td>deep learning</td><td>Subfield of ML using multi-layered artificial neural networks.</td></tr>
<tr><td>natural language processing (NLP)</td><td>AI branch focused on enabling machines to understand human language.</td></tr>
<tr><td>neural network optimization</td><td>Fine-tuning algorithms to minimize loss during model training.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Generative AI systems rely on deep learning architecture to process massive datasets.",
            "Neural network optimization is essential for scaling natural language processing."
        ],
        "mistakes": [
            ("❌ Natural language processing only handles mechanical hardware torque.", "✅ Natural language processing analyzes human text and spoken language.")
        ],
        "check": [
            "Distinguish machine learning from deep learning",
            "Discuss training dataset bias in AI optimization"
        ],
        "quiz": [
            {
                "q": "What powers modern generative AI models?",
                "opts": ["Deep learning neural network architectures", "Simple manual database tables"],
                "exp": "Deep learning models process complex multi-layered representations for generative output."
            }
        ]
    },
    "cybersecurity-big-data-and-digital-ethics": {
        "title": "Cybersecurity, Big Data & Digital Ethics",
        "subtitle": "Zero-trust architecture, quantum-resistant encryption, cloud infrastructure, and data breaches",
        "part_id": "part-7",
        "outcome": "You can analyze zero-trust cybersecurity protocols and digital surveillance concerns.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Security Term</th><th>Protocol Purpose</th></tr></thead>
<tbody>
<tr><td>zero-trust architecture</td><td>Security paradigm requiring continuous verification for every access request.</td></tr>
<tr><td>quantum-resistant encryption</td><td>Cryptographic algorithms resilient against quantum computer decryption.</td></tr>
<tr><td>Big Data analytics</td><td>Examining massive datasets to uncover hidden patterns and correlations.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "To prevent unauthorized access, the enterprise adopted a zero-trust architecture.",
            "Cybersecurity experts are developing quantum-resistant data encryption protocols."
        ],
        "mistakes": [
            ("❌ Zero-trust architecture trusts all internal network requests automatically.", "✅ Zero-trust operates on 'never trust, always verify'.")
        ],
        "check": [
            "Explain core tenets of zero-trust architecture",
            "Discuss challenges posed by quantum computing to data encryption"
        ],
        "quiz": [
            {
                "q": "What is the core principle of Zero-Trust Architecture?",
                "opts": ["Never trust, always verify every access request", "Trust all internal network devices"],
                "exp": "Zero-trust assumes potential threats exist both outside and inside network perimeters."
            }
        ]
    },
    "investigative-journalism-and-press-freedom": {
        "title": "Investigative Journalism & Press Freedom",
        "subtitle": "Whistleblower protections, freedom of information, press freedom index, and editorial independence",
        "part_id": "part-8",
        "outcome": "You can discuss media manipulation, censorship, and investigative reporting ethics.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Journalistic Concept</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>whistleblower protection</td><td>Legal safeguards shielding individuals who expose wrongdoing.</td></tr>
<tr><td>editorial independence</td><td>Freedom of editors to report without commercial or political interference.</td></tr>
<tr><td>freedom of information</td><td>Right of citizens to access official government records.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The publication maintained total editorial independence during its fraud investigation.",
            "Whistleblower protection protocols encouraged insiders to leak incriminating documents."
        ],
        "mistakes": [
            ("❌ Editorial independence means allowing sponsors to write news articles.", "✅ Editorial independence insulates newsrooms from sponsor influence.")
        ],
        "check": [
            "Explain the importance of whistleblower protections",
            "Discuss threats to the press freedom index"
        ],
        "quiz": [
            {
                "q": "Why is editorial independence critical for investigative journalism?",
                "opts": ["It prevents sponsors and governments from censoring news coverage", "It guarantees high advertising revenue"],
                "exp": "Editorial independence ensures unbiased reporting free from external pressure."
            }
        ]
    },
    "morality-existentialism-and-epistemology": {
        "title": "Morality, Existentialism & Epistemology",
        "subtitle": "Epistemological inquiry, normative ethics, determinism, free will, and metaphysics",
        "part_id": "part-9",
        "outcome": "You can debate philosophical frameworks surrounding human knowledge and moral duty.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Branch</th><th>Focus</th></tr></thead>
<tbody>
<tr><td>epistemology</td><td>Study of the nature, origin, and limits of human knowledge.</td></tr>
<tr><td>normative ethics</td><td>Branch of ethics investigating set standards of right and wrong conduct.</td></tr>
<tr><td>determinism</td><td>Philosophical view that all events are completely determined by previously existing causes.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Philosophers engage in epistemological inquiry to determine the limits of rational belief.",
            "If actions are causally predetermined, free will becomes subject to metaphysical debate."
        ],
        "mistakes": [
            ("❌ Epistemology studies cellular biology under microscopes.", "✅ Epistemology investigates knowledge, justification, and belief structures.")
        ],
        "check": [
            "Define epistemology vs metaphysics",
            "Examine how determinism intersects with moral responsibility"
        ],
        "quiz": [
            {
                "q": "What is the subject matter of Epistemology?",
                "opts": ["The nature, scope, and justification of knowledge", "Structural engineering calculations"],
                "exp": "Epistemology explores what constitutes justified belief and genuine knowledge."
            }
        ]
    },
    "cognitive-biases-mental-disorders-and-therapy": {
        "title": "Cognitive Biases, Mental Disorders & Therapy",
        "subtitle": "Cognitive behavioural therapy (CBT), confirmation bias, cognitive dissonance, and resilience",
        "part_id": "part-10",
        "outcome": "You can explain cognitive biases, psychological dissonance, and therapeutic interventions.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Psychological Concept</th><th>Mechanism</th></tr></thead>
<tbody>
<tr><td>confirmation bias</td><td>Tendency to search for and favor information reinforcing pre-existing beliefs.</td></tr>
<tr><td>cognitive dissonance</td><td>Mental discomfort experienced when holding contradictory beliefs simultaneously.</td></tr>
<tr><td>cognitive behavioral therapy (CBT)</td><td>Psychotherapy restructuring maladaptive thought patterns.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Cognitive behavioral therapy helps patients restructure maladaptive thought patterns.",
            "Confirmation bias leads individuals to ignore contradictory evidence."
        ],
        "mistakes": [
            ("❌ Cognitive dissonance occurs when everyone agrees perfectly.", "✅ Cognitive dissonance arises from internal tension between conflicting beliefs.")
        ],
        "check": [
            "Identify examples of confirmation bias in decision-making",
            "Explain CBT cognitive restructuring"
        ],
        "quiz": [
            {
                "q": "What triggers cognitive dissonance?",
                "opts": ["Holding conflicting beliefs or values simultaneously", "Reading agreed consensus data"],
                "exp": "Cognitive dissonance is psychological discomfort caused by contradictory cognitions."
            }
        ]
    },
    "academic-literacy-assessment-and-pedagogy": {
        "title": "Academic Literacy, Assessment & Pedagogy",
        "subtitle": "Pedagogical innovation, formative assessment, scholastic achievement, and research grant funding",
        "part_id": "part-11",
        "outcome": "You can evaluate higher education policy, curriculum development, and assessment types.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Educational Term</th><th>Pedagogical Role</th></tr></thead>
<tbody>
<tr><td>formative assessment</td><td>Ongoing evaluations providing continuous feedback during learning.</td></tr>
<tr><td>academic literacy</td><td>Ability to critically analyze, synthesize, and compose academic discourse.</td></tr>
<tr><td>scholastic achievement</td><td>Attainment of academic milestones and intellectual competencies.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Universities prioritize formative assessment to support student academic literacy.",
            "Pedagogical innovation fosters active learning environments across higher education."
        ],
        "mistakes": [
            ("❌ Formative assessment happens only as a final graduation exam.", "✅ Formative assessment occurs continuously during learning, unlike summative exams.")
        ],
        "check": [
            "Compare formative assessment with summative evaluation",
            "Analyze components of higher education academic literacy"
        ],
        "quiz": [
            {
                "q": "How does formative assessment differ from summative assessment?",
                "opts": ["It provides ongoing feedback during the learning process", "It is exclusively a final pass/fail test"],
                "exp": "Formative assessment focuses on continuous improvement throughout instruction."
            }
        ]
    },
    "aesthetics-literature-and-architectural-heritage": {
        "title": "Aesthetics, Literature & Architectural Heritage",
        "subtitle": "Fine art curation, literary critique, iconographic analysis, and architectural restoration",
        "part_id": "part-12",
        "outcome": "You can analyze cultural artifacts, literary movements, and historic architecture.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Cultural Field</th><th>Term</th><th>Context</th></tr></thead>
<tbody>
<tr><td>Curation</td><td>fine art curation</td><td>Selecting and organizing artistic works for preservation and exhibition.</td></tr>
<tr><td>Literature</td><td>literary critique</td><td>Analytical evaluation of literary texts and thematic structure.</td></tr>
<tr><td>Architecture</td><td>architectural landmark</td><td>Building of significant historic or aesthetic importance.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "The museum's new exhibition combines fine art curation with historic preservation.",
            "The cathedral's gothic structural design makes it a renowned architectural landmark."
        ],
        "mistakes": [
            ("❌ Literary critique means correcting spelling mistakes in emails.", "✅ Literary critique evaluates thematic and stylistic elements of literature.")
        ],
        "check": [
            "Discuss museum curation principles",
            "Write a short literary critique excerpt using C1 terminology"
        ],
        "quiz": [
            {
                "q": "What is involved in fine art curation?",
                "opts": ["Selecting, organizing, and interpreting artistic exhibitions", "Mass manufacturing posters"],
                "exp": "Curators curate exhibitions by selecting and contextualizing artworks."
            }
        ]
    },
    "geopolitics-soft-power-and-peacekeeping": {
        "title": "Geopolitics, Soft Power & Peacekeeping",
        "subtitle": "Multilateral diplomacy, international sanctions, territorial integrity, and exercising soft power",
        "part_id": "part-13",
        "outcome": "You can debate geopolitical alliances, foreign policy sanctions, and soft power strategies.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Diplomatic Term</th><th>Strategic Meaning</th></tr></thead>
<tbody>
<tr><td>soft power</td><td>Ability to co-opt and attract through culture and values rather than coercion.</td></tr>
<tr><td>territorial integrity</td><td>Principle that nation-states should not promote border alterations in others.</td></tr>
<tr><td>multilateral treaty</td><td>Binding agreement negotiated among three or more sovereign states.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Diplomats exercise soft power and negotiate multilateral treaties.",
            "International sanctions were imposed following violations of territorial integrity."
        ],
        "mistakes": [
            ("❌ Soft power refers to military naval bombardments.", "✅ Soft power uses cultural, educational, and diplomatic influence.")
        ],
        "check": [
            "Contrast soft power with hard military power",
            "Explain legal mechanisms behind economic sanctions"
        ],
        "quiz": [
            {
                "q": "What constitutes 'soft power' in international relations?",
                "opts": ["Influencing outcomes through cultural, political, and ideological attraction", "Using military threat"],
                "exp": "Soft power relies on persuasion, diplomacy, and cultural influence."
            }
        ]
    },
    "climate-adaptation-biodiversity-and-green-tech": {
        "title": "Climate Adaptation, Biodiversity & Green Tech",
        "subtitle": "Circular economy, carbon offset schemes, ocean conservation, and zero emissions",
        "part_id": "part-14",
        "outcome": "You can evaluate sustainable circular economy models and green technology initiatives.",
        "table": """<div class="table-wrap"><table>
<thead><tr><th>Environmental Term</th><th>Sustainability Goal</th></tr></thead>
<tbody>
<tr><td>circular economy</td><td>System eliminating waste through continuous reuse, repair, and recycling.</td></tr>
<tr><td>carbon offset scheme</td><td>Reduction in GHG emissions made to compensate for emissions made elsewhere.</td></tr>
<tr><td>climate adaptation</td><td>Adjusting natural or human systems in response to actual/expected climate shocks.</td></tr>
</tbody>
</table></div>""",
        "examples": [
            "Investing in green technology is essential for long-term climate adaptation.",
            "A circular economy model decouples economic growth from finite resource consumption."
        ],
        "mistakes": [
            ("❌ Circular economy encourages single-use disposable manufacturing.", "✅ Circular economy reuses materials indefinitely to eliminate industrial waste.")
        ],
        "check": [
            "Explain core principles of a circular economy",
            "Evaluate effectiveness of carbon offset schemes"
        ],
        "quiz": [
            {
                "q": "What is the key goal of a Circular Economy?",
                "opts": ["Eliminating waste by designing products for reuse and recycling", "Increasing landfill waste"],
                "exp": "Circular models keep resources in loop systems to minimize environmental impact."
            }
        ]
    }
}

ORDERED_PART_IDS = [p["id"] for p in PARTS]

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
 <span class="brand-name">COSY<em>languages</em> · Vocab C1</span>
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
 <div>COSYlanguages · English Vocabulary Manual, Level C1 · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    # Build topic pages
    all_topic_slugs = []
    for p in PARTS:
        for tslug in p["topics"]:
            all_topic_slugs.append(tslug)

    for idx, tslug in enumerate(all_topic_slugs):
        tdata = TOPICS_DATA[tslug]
        prev_slug = all_topic_slugs[idx - 1] if idx > 0 else None
        next_slug = all_topic_slugs[idx + 1] if idx < len(all_topic_slugs) - 1 else None

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
<title>{tdata["title"]} · COSYlanguages C1 Vocabulary</title>
<meta name="description" content="{tdata["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{topbar_html}<main class="container"><div class="page-head">
 <span class="eyebrow">Level C1 Vocabulary</span>
 <h1>{tdata["title"]}</h1>
 <p class="subtitle">{tdata["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="box outcome-banner">
  <strong>🎯 What you can communicate after this page:</strong> {tdata["outcome"]}
</div>
{tdata["table"]}
<div class="examples"><span class="label">Examples</span><ul>{''.join(f'<li>{ex}</li>' for ex in tdata["examples"])}</ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
{mistakes_html}</div>
<div class="checklist" data-key="{tslug}">
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
        with open(os.path.join(TOPICS_DIR, f"{tslug}.html"), "w", encoding="utf-8") as f:
            f.write(topic_code)

    # Build part pages
    for p in PARTS:
        topbar_html = render_topbar(active_part_id=p["id"], is_topic=False)
        footer_html = render_footer(is_topic=False)

        cards_html = ""
        for tslug in p["topics"]:
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
        count = len(p["topics"])
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
<title>COSYlanguages English Vocabulary Manual (Level C1) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages Level C1 English vocabulary manual: 14 encyclopedic domains covering academic discourse, law, economics, AI, ethics, and sustainability.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level C1</span>
 <h1>English Vocabulary Manual · Level C1</h1>
 <p class="lead">Lexical Knowledge Map & Encyclopedic Domains. 14 strategic parts covering academic research, jurisprudence, economics, corporate governance, AI, ethics, and sustainability.</p>
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

    print(f"Successfully built Level C1 English Vocabulary Manual (index, 14 hubs, {len(all_topic_slugs)} topics)!")

if __name__ == "__main__":
    build_all()
