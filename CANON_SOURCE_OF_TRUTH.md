# Ecosystem Canon Source of Truth Policy

This document establishes the official synchronization policy and authority hierarchy for canonical datasets within the COSY ecosystem (**COSYdata**, **COSYlanguages**, **COSYgames**, **COSYtools**, **COSYworld**, **COSYmanuals**).

---

## 1. Governance & Single Source of Truth Declarations

To prevent data divergence, duplicate maintenance, and drift across ecosystem repositories:

1. **Vocabulary Canon Authority**:
   - `vocabulary/en/a0_a1/*.json` (33 theme files, ~1,700 entries, ID scheme `"en:<slug>:<form>"`) in **COSYdata** is the **sole writable master copy** of the A0-A1 English vocabulary canon for the entire COSY ecosystem.
2. **Curriculum Canon Authority**:
   - `curriculum/en/general/*.json` (e.g., `A1.json`, `A2.json`, etc.) in **COSYlanguages** is the **sole writable master copy** of general-course curriculum data for the entire COSY ecosystem.
3. **Read-Only Mirror Requirement**:
   - Any other repository or application within the COSY ecosystem (**COSYlanguages**, **COSYgames**, **COSYtools**, **COSYworld**, **COSYmanuals**) holding a copy or subset of these datasets MUST treat its local copy as a **read-only mirror** and label it as such.
4. **Change Management Protocol**:
   - Downstream repositories must **NEVER** edit local mirror copies directly.
   - Proposed vocabulary changes (word additions, removals, definition edits, spelling corrections) must be submitted to **COSYdata** via a GitHub Issue or Pull Request referencing the specific entry ID (e.g., `en:<slug>:<form>`).
   - Proposed general curriculum changes must be submitted to **COSYlanguages** via a GitHub Issue or Pull Request referencing the specific `lesson` / `unit` number.
   - Once merged in the respective canonical repository, mirror repositories should update their read-only copies directly.

---

## 2. Drift Detection Utility Usage

A standalone checker tool is provided in `scripts/check-canon-drift.mjs` to detect and audit drift between local mirror files and the canonical datasets in **COSYdata** and **COSYlanguages**.

### Running the Checker

```bash
# Audit a vocabulary mirror against COSYdata canonical index
node scripts/check-canon-drift.mjs path/to/mirror_vocab.json

# Audit a curriculum mirror against curriculum/en/general/A1.json
node scripts/check-canon-drift.mjs path/to/mirror_A1.json
```

### Options & Auto-Detection
- **Automatic Schema Detection**: The script automatically detects whether the input file is a **Vocabulary Canon** dataset or a **Curriculum** dataset.
- **Explicit Canon Target**: You can optionally pass `--canon <path_to_canon_file>` to override the canonical target file.

### Output Format
The checker outputs report blocks detailing:
- **Added Elsewhere**: Words or lessons present in the mirror but missing from the canon source of truth.
- **Missing Elsewhere**: Words or lessons present in the canon source of truth but missing from the mirror.
- **Field Modifications**: Mismatched POS, definitions, topics, or lesson titles between mirror and canon.

---

## 3. Propagation Notes for Sub-Repository READMEs

The following companion note must be added manually to the READMEs of downstream repositories.

### Repositories to Update:
- `COSYlanguages` (`README.md` for vocabulary mirror context)
- `COSYgames` (`README.md`)
- `COSYtools` (`README.md`)
- `COSYworld` (`README.md`)
- `COSYmanuals` (`README.md`)

### Snippet to Copy:

```markdown
> ⚠️ **Read-Only Mirror Notice**:
> The vocabulary datasets (synced from [COSYdata](https://github.com/cosylanguages/COSYdata)) and general curriculum files (`A1.json` - `C2.json`, synced from [COSYlanguages](https://github.com/cosylanguages/COSYlanguages)) in this repository are **read-only mirrors**.
>
> **Do not edit these dataset files directly in this repository.** Proposed vocabulary changes must be submitted to [COSYdata](https://github.com/cosylanguages/COSYdata) and general curriculum changes to [COSYlanguages](https://github.com/cosylanguages/COSYlanguages). See `CANON_SOURCE_OF_TRUTH.md` in `COSYlanguages` for details.
```
