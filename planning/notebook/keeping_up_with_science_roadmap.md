# Keeping Up with Science — Unified Pedagogical Roadmap

This document outlines the standard developmental roadmap and pedagogical philosophy for all **Keeping Up with Science** speaking club sessions. It serves as a blueprint for creating, auditing, and upgrading any science-based discussion session in English, French, Russian, or other languages.

---

## 1. Core Pedagogical Philosophy

Unlike generic conversation clubs, *Keeping Up with Science* is engineered to be **educative, rigorous, and highly contextualized**. Every session must follow a cohesive narrative arc structured around **one key scientific discovery or hypothesis** rather than a loose collection of random facts.

Our main goals are:
- **Linguistic Rigor:** Students must learn and actively deploy theme-appropriate scientific lexicon (e.g., C1 advanced vocabulary) and targeted grammar structures.
- **Scientific Progression:** Discussions must remain tightly coupled with the consequences of scientific advancement, further research, and biological/biotechnological progression.
- **Authentic Evidence Evaluation:** Students should evaluate science as an empirical, evidence-based discipline.

---

## 2. Structured Session Framework

To maintain a consistent, recognizable brand, every session page must strictly adhere to the following 4-part framework:

### Part A: understand the Discovery (Round 1 — Theoretical Discussion)
- **Focus:** Comprehension, analysis, and evaluation of the core article/scientific paper.
- **Rules:**
  - Every question must explicitly prompt the student to refer to the research (e.g., *"According to the article...", "What evidence presented in the study..."*).
  - Vocabulary terms must be systematically integrated into the questions using `<strong>` tags.
  - Avoid general or generic conversational prompts; ensure students are evaluating the science itself.

### Part B: Project the Discovery (Round 2 — The Future: Agree or Disagree?)
- **Focus:** Speculative and progressive consequences of the discovery continuing to develop.
- **Rules:**
  - Every prompt/question **must grow directly from the scientific discovery** or technological development.
  - **The Drift Test:** Ask yourself, *"Could this question still exist if the scientific discovery had never been made?"* If the answer is yes (e.g., general political debates, tax structures, generic government funding), it is a drift and must be removed. If the answer is no, it is tightly connected to the science.
  - **Standardized Question Structures:** Standardize future speculative statements to begin with:
    - *"Imagine future research proves that..."*
    - *"Imagine biotechnology allows..."*
    - *"Imagine AI models simulate..."*
    - *"If future research continues to support this hypothesis..."*
    - *"As our understanding of this discovery develops..."*
  - Vocabulary terms must be natively integrated into each debate statement using `<strong>` tags.

### Part C: Real Scientific thinking & Creative Tasks
- **Evaluating Evidence:** Introduce a dedicated prompt asking *"What evidence would convince you?"* to challenge students to think like actual researchers (e.g., what experiment, genetic data, or fossil discovery would prove or disprove the hypothesis).
- **Creative Headlines:** Include a completing-the-headline game (e.g., *"Scientists finally prove...", "New fossil evidence reveals..."*) to let students invent speculative discoveries.

### Part D: Memorable Final Challenge (The 2080 TED Talk)
- **Focus:** Synthesizing ideas, practicing public speaking, and active lexical recall under mild time constraint.
- **Format:**
  - Ask students to deliver a **1-minute TED Talk set in the year 2080**, explaining how the mystery behind the session's topic was solved and how it transformed humanity's future.

---

## 3. Structural and Asset Integration Guidelines

1. **Field Journal Research Log (`.science-journal-box`):** Every page must display high-contrast field journal metadata directly alongside the main description to summarize:
   - *Specimen / Topic*
   - *Primary Hypothesis*
   - *Experimental Findings*
   - *Linguistic Focus*
2. **Grammar Integration Engine:** Interactive grammar practices (e.g., Word Banks, Rule Formulation, and Structured Practice chips) must be programmatically injected and mapped to specific CEFR targets using the central grammar configuration tables (`scripts/content-build/add_grammar_to_science.py`).
3. **No Redundant Scripts:** Exclude any general site-wide or generic marketing scripts. Stick to the core `engine.js` and `ui.js` scripts.
4. **Nesting Asset Resolution:** Enforce the nesting asset directory rules (e.g., `../../../../` prefix for deeply nested localized directories) to guarantee zero 404 pathing failures.
