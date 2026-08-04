# COSYlanguages Usability Testing Checklist & Analytics Proposal

This document establishes a standing usability evaluation loop for **COSYlanguages**. It includes an informal benchmarking tool against competitor patterns (Quizlet, Skyeng, Progressme), 5 core user tasks for manual testing with live testers, and our lightweight, privacy-respecting analytics instrumentation proposal.

---

## Part 1: Informal Competitor Benchmark Matrix

To validate our user experience design, we benchmark key friction points and completion times against existing industry solutions:

| Dimension / Feature | COSYlanguages Pattern | Quizlet Pattern | Skyeng Pattern | Progressme Pattern |
| :--- | :--- | :--- | :--- | :--- |
| **Onboarding & Access** | **Public Access**: 0 clicks to learn. Fully visitor-first. No passwords or accounts required. | **Registration wall**: Requires account creation / social login before any study session. | **Lead capture wall**: Forced phone number/email capture and onboarding sales representative call. | **Locked Classroom**: Requires a teacher invitation link or license key to enter a space. |
| **Practice Flow** | **Single configuration screen**: Collapsed setup panel. Interactive keyboard controls (`1-4`, `Enter`, `C`, `S`). | Multi-step flashcard flips, advertisements, and gated premium practice modes. | Heavy, structured virtual lessons requiring live video syncing and complex dashboard widgets. | Traditional PDF-style digital worksheets with manual teacher checking and less game integration. |
| **Pricing Transparency** | **Step-by-Step Configurator**: Dynamic sliding cost segments. No contact form required to see prices. | Subscription-only model with dark patterns pushing yearly plans. | Complex, hidden credit packages that require sales calls to calculate accurate rates. | Tiered SaaS pricing plans targeted primarily at teachers and language schools. |

---

## Part 2: Manual Usability Testing Checklist

Use this section to run tests with **real users** (aim for 3–5 testers per cycle). Print or copy this checklist for each tester to record completion times and observe UX friction points.

### Tester Demographics (Optional)
- **Tester Name / ID:** _______________________
- **Target Language & Level:** _________________
- **Prior Apps Used (Quizlet/Skyeng/Progressme/Other):** _________________

---

### Task 1: Find a B1-level French song and register interest
- **User Instructions:** *"Navigate to the Karaoke Club. Find any French song suitable for an Intermediate (B1) level, and locate how you would register your interest for a live session."*
- **Target Benchmark:** < 45 seconds (Skyeng / Progressme Karaoke rooms average 90s due to layered menus).
- **Metric Logs:**
  - [ ] **Completed?** (Yes / No)
  - **Completion Time:** _______ seconds
  - **Friction Rating:** ⭐⭐⭐⭐⭐ (1 = Extremely Frustrating, 5 = Seamless & Delightful)
- **Friction Points & Observations:**
  - *Did the tester use the search bar or the sticky language/level buttons?*
  - *Did the "Register Interest" button open a clear contact link?*
  - *Observations:* __________________________________________________________________

---

### Task 2: Start a vocabulary practice session in your target language
- **User Instructions:** *"Go to the Free Practice page. Set up a Vocabulary session for your target language at any specific level, and start the practice engine."*
- **Target Benchmark:** < 30 seconds (Quizlet averages 50s due to upsell prompts).
- **Metric Logs:**
  - [ ] **Completed?** (Yes / No)
  - **Completion Time:** _______ seconds
  - **Friction Rating:** ⭐⭐⭐⭐⭐
- **Friction Points & Observations:**
  - *Was the collapsed, single-panel configuration block intuitive, or did they miss some configuration fields?*
  - *Did the "Start Practice" button clearly signal it was clickable?*
  - *Observations:* __________________________________________________________________

---

### Task 3: Find pricing for 8 x 30-min Spoken Course lessons
- **User Instructions:** *"On the Homepage, use the pricing calculator to configure a Spoken Course package with 8 lessons, each lasting 30 minutes, in your target currency. Find the total price."*
- **Target Benchmark:** < 40 seconds (Skyeng/Progressme require sales interaction or login to see custom course rates).
- **Metric Logs:**
  - [ ] **Completed?** (Yes / No)
  - **Completion Time:** _______ seconds
  - **Friction Rating:** ⭐⭐⭐⭐⭐
- **Friction Points & Observations:**
  - *Did the tester find the calculator easily on the landing page?*
  - *How did they interact with the segmented control buttons?*
  - *Did they understand that original selects were synchronized behind the scenes?*
  - *Observations:* __________________________________________________________________

---

### Task 4: Double-click a word to harvest it to your personal dictionary
- **User Instructions:** *"Navigate to any reading material or club page (e.g. any Speaking Club session). Double-click a word you do not know, and add it to your personal local dictionary / Notebook."*
- **Target Benchmark:** < 15 seconds (Quizlet/Skyeng require manual copy-pasting to create personal sets).
- **Metric Logs:**
  - [ ] **Completed?** (Yes / No)
  - **Completion Time:** _______ seconds
  - **Friction Rating:** ⭐⭐⭐⭐⭐
- **Friction Points & Observations:**
  - *Did the tester understand the double-click harvesting mechanic immediately?*
  - *Did the floating card align correctly relative to the selection?*
  - *Observations:* __________________________________________________________________

---

### Task 5: Take the interactive Homepage Tour and find navigation help
- **User Instructions:** *"From the Homepage, find and click the compass button to start the site-wide interactive tour, complete the first 3 steps, then close it and open the contextual Navigation Help modal."*
- **Target Benchmark:** < 60 seconds (Competitors lack guided on-page interactive tours).
- **Metric Logs:**
  - [ ] **Completed?** (Yes / No)
  - **Completion Time:** _______ seconds
  - **Friction Rating:** ⭐⭐⭐⭐⭐
- **Friction Points & Observations:**
  - *Did the tour bubble and pointer render in correct positions on their screen?*
  - *Was the floating compass button easy to discover?*
  - *Observations:* __________________________________________________________________

---

## Part 3: Lightweight, Privacy-First Analytics Proposal

We have already instrumented a lightweight, privacy-respecting client-side analytics event tracker (`js/core/analytics.js`) that operates strictly locally on your visitor's machine. It logs key funnel milestones directly to `localStorage` under `cosy_analytics_events`.

To scale this to server-side aggregates without introducing intrusive tracking cookies, we propose the following **no-cookie-banner-required** integrations:

### Option 1: Plausible Analytics (Recommended)
- **Why:** Extremely clean dashboard, fully GDPR/CCPA compliant out of the box, uses no cookies and stores no personal data.
- **Implementation:** A single lightweight script tag `<script defer data-domain="cosylanguages.github.io" src="https://plausible.io/js/script.js"></script>`.
- **Custom Events:** We can seamlessly bridge our local `window.cosyTrackEvent` call to send custom goals (e.g., `plausible('Practice Start')`).

### Option 2: GoatCounter
- **Why:** Fully open-source, ultra-minimalist, cookie-free, privacy-respecting, and free for reasonable personal/small business usage.
- **Implementation:** `<script data-goatcounter="https://cosy.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`.

> **⚠️ Awaiting Approval:** We have built the local storage tracker to serve as a robust, safe baseline. We will not add any third-party script tags (Plausible or GoatCounter) until you approve one of these options!

---

## Part 4: The Standing 2-Week Feedback Loop Process

Usability is not a single milestone, but a recurring system. We will operate on a **continuous 2-week iteration loop**:

```
        +--------------------------------------------+
        |  1. Recur Usability Test with 3-5 Users    |
        +---------------------+----------------------+
                              |
                              v
        +---------------------+----------------------+
        |  2. Collect Logs & Identify Friction Points|
        +---------------------+----------------------+
                              |
                              v
        +---------------------+----------------------+
        |  3. Submit Scoped Fixes as Focused PRs     |
        +---------------------+----------------------+
                              |
                              v
        +---------------------+----------------------+
        |  4. Verify Performance & Repetitive Tests  |
        +--------------------------------------------+
```

### Steps for the Next Cycle:
1. **You Run the Test:** Hand this markdown checklist to real testers, note down real task completion times and observed hiccups.
2. **Share Friction Logs:** Share the logged friction points back here.
3. **Iterative PR Cycle:** We will immediately implement target UI/UX remediations and custom enhancements in scoped, isolated follow-up PRs.
