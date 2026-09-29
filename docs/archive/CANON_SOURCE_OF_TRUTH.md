# Ecosystem Canon Source of Truth Policy

This document establishes the official synchronization policy and authority hierarchy for canonical datasets within the COSY ecosystem (**COSYdata**, **COSYplatform**, **COSYmanuals**, **COSYtools**, **COSYlanguages**, **COSYgames**, **COSYevents**).

---

## 1. Governance & Single Source of Truth Declarations

To prevent data divergence, duplicate maintenance, and drift across ecosystem repositories, each primary content category is assigned a single writable master repository:

1. **Vocabulary Canon Authority**:
   - `vocabulary/en/a0_a1/*.json` (33 theme files, ~1,700 entries, ID scheme `"en:<slug>:<form>"`) in **COSYdata** is the **sole writable master copy** of the A0-A1 English vocabulary canon for the entire COSY ecosystem.
2. **Curriculum Canon Authority**:
   - `curriculums/{lang}/{course_type}/{level}.json` in **COSYplatform** is the **sole writable master copy** of all CEFR curriculum progressions (general, spoken, professional, travelling, relocation, exam) across target languages.
3. **Grammar Reference Data Authority**:
   - `data/grammar/reference/{lang}/` (containing CCQs, morphology, syntax, phonology, and confusions data) in **COSYmanuals** is the **sole writable master copy** of machine-readable reference grammar datasets.
4. **Verb Patterns & Particles Authority**:
   - `verb-patterns/` and `particles/` in **COSYtools** serve as the **sole writable master copy** for verb conjugation patterns and preposition datasets.
5. **COSYlanguages Remote Consumption**:
   - **COSYlanguages** acts as the 100% free, public entry portal and client application. It holds **no writable local copies** of curriculum, reference grammar, CCQ, or verb pattern datasets. All runtime tools, Practice Hub engines, and manuals fetch these datasets remotely from raw GitHub URLs on `COSYplatform`, `COSYmanuals`, `COSYdata`, and `COSYtools`.

---

## 2. Change Management Protocol

- Downstream client repositories (such as **COSYlanguages**, **COSYgames**, **COSYevents**) must **NEVER** attempt to host or edit local copies of canonical datasets.
- **Vocabulary changes**: Submit to [COSYdata](https://github.com/cosylanguages/COSYdata) via Pull Request or Issue referencing specific entry IDs.
- **Curriculum changes**: Submit to [COSYplatform](https://github.com/cosylanguages/COSYplatform) via Pull Request referencing target language, course track, and lesson IDs.
- **Reference Grammar & CCQs**: Submit to [COSYmanuals](https://github.com/cosylanguages/COSYmanuals) via Pull Request under `data/grammar/reference/`.
- **Verb & Preposition Patterns**: Submit to [COSYtools](https://github.com/cosylanguages/COSYtools) via Pull Request.

---

## 3. Propagation Notice for Sub-Repository Documentation

```markdown
> ⚠️ **Remote Data Fetch Notice**:
> Datasets (vocabulary, curriculums, reference grammar, CCQs, and verb patterns) in the COSY ecosystem are maintained centrally in their respective canonical repositories ([COSYdata](https://github.com/cosylanguages/COSYdata), [COSYplatform](https://github.com/cosylanguages/COSYplatform), [COSYmanuals](https://github.com/cosylanguages/COSYmanuals), [COSYtools](https://github.com/cosylanguages/COSYtools)).
>
> Do not add or edit local copies of these datasets in client repositories. See `CANON_SOURCE_OF_TRUTH.md` for details.
```
