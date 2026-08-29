#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level A2).
Generates manuals/en/vocabulary-a2/index.html and assets.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary-a2"))
os.makedirs(BASE_DIR, exist_ok=True)

INDEX_HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>English Vocabulary Manual (Level A2) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages Level A2 English Vocabulary Manual: thematic vocabulary, collocations, regional variations, and flashcards.">
<link rel="stylesheet" href="../grammar/a2/assets/style.css">
</head>
<body>
<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="../../index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Vocabulary A2</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-a2.html">&larr; Back to Level A2 Hub</a>
 </nav>
 </div>
</header>
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A2</span>
 <h1>English Vocabulary Manual · Level A2</h1>
 <p class="lead">Essential thematic wordlists, collocations, prepositions, UK/US regional variations, and interactive flashcards across 20 modules.</p>
 </div>
</section>
<main class="container">
 <div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:16px; margin-bottom:24px; border-radius:8px;">
   <strong>🎯 Communicative Outcome:</strong> Express yourself clearly in daily situations including travel, shopping, housing, work, health, and free time.
 </div>
 <div class="topic-grid">
  <div class="topic-card">
   <div class="tnum">MODULE 1</div>
   <div class="ttl">Travel & Directions</div>
   <div class="sub">Airport vocabulary, asking for directions, public transport</div>
  </div>
  <div class="topic-card">
   <div class="tnum">MODULE 2</div>
   <div class="ttl">Housing & Appliances</div>
   <div class="sub">Rooms, furniture, household chores, home electronics</div>
  </div>
  <div class="topic-card">
   <div class="tnum">MODULE 3</div>
   <div class="ttl">Work & Office Routine</div>
   <div class="sub">Jobs, office items, emailing, daily schedules</div>
  </div>
  <div class="topic-card">
   <div class="tnum">MODULE 4</div>
   <div class="ttl">Shopping & Clothes</div>
   <div class="sub">Clothing items, sizes, payments, store interactions</div>
  </div>
 </div>
</main>
<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Vocabulary Manual, Level A2</div>
 </div>
</footer>
</body>
</html>
"""

def build_all():
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(INDEX_HTML)
    print("Successfully built Level A2 English Vocabulary Manual!")

if __name__ == "__main__":
    build_all()
