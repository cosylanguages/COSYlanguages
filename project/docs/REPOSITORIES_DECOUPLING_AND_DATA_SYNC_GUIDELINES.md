# COSY Ecosystem Decoupling & Cross-Repository Data Sync Guidelines

This document establishes the operational rules, decoupling principles, and data synchronization standards across the **6 companion repositories** in the COSY ecosystem.

---

## 1. Zero Duplication Principle

To prevent code drift, maintainability overhead, and broken links:
1. **`COSYlanguages`**: Primary gateway. Contains no standalone games, standalone reference micro-apps, or event decks.
2. **`COSYmanuals`**: Stores raw textbooks (`manuals/`), curriculums (`curriculum/`), and datasets (`vocabulary/`, `reference-grammar/`).
3. **`COSYevents`**: Stores speaking club decks and event night materials.
4. **`COSYworld`**: Stores open-world RPG assets and scene drivers.
5. **`COSYgames`**: Stores the 22+ practice minigames.
6. **`COSYtools`**: Stores the 12 reference engines (conjugators, gender, cases, prepositions).

---

## 2. Universal Passport Sync (`cosy-passport.json`)

Learners' study progress, Leitner Leitner SRS mastery levels, streak counters, and points are synchronized accountlessly across `COSYlanguages`, `COSYtools`, `COSYgames`, and `COSYmanuals` using **COSY Passport**:

```json
{
  "version": "1.0.0",
  "exportedAt": "2026-09-10T12:00:00.000Z",
  "sources": {
    "COSYtools": {
      "srs_fr_conjugeur": { ... },
      "srs_it_genere": { ... }
    },
    "COSYlanguages": {
      "practice_points": 450,
      "streak_days": 12
    },
    "COSYgames": {
      "unlocked_badges": ["crossword_master", "fluency_flow_gold"]
    }
  }
}
```

### Sync Principles:
- **Non-Destructive Import**: Importing a passport into any app only updates or appends progress without overwriting data from other sources.
- **Leitner Interval Standard**: All Leitner SRS engines across `COSYtools` and `COSYlanguages` follow fixed review intervals: `[0, 1, 3, 7, 14, 30]` days.

---

## 3. URL Parameter Handoff Protocol

When redirecting learners from `COSYmanuals` or `COSYlanguages` to `COSYgames` or `COSYtools`:
- **Topic Context Handoff**: `https://cosylanguages.github.io/COSYgames/?topic={topic_id}&lang={iso}`
- **Target Mode Handoff**: `https://cosylanguages.github.io/COSYtools/fr-conjugeur/?verb={verb_id}`

This ensures that learners transition smoothly into practice mode pre-configured for the exact grammar or vocabulary topic they were reading in their manual.
