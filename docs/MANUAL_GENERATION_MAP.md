# COSYlanguages Manual Generation Map

This document details the generation status and build commands for all 14 grammar manual directories and 12 vocabulary manual directories across the COSYlanguages repository.

The repository utilizes two distinct authoring approaches:
1. **Generated Manuals**: HTML files (index, hubs, and topics) are generated programmatically from Python data structures via build scripts located in `scripts/`. Rerunning the respective build script overwrites generated HTML files.
2. **Hand-Authored Manuals**: HTML files are hand-authored static content with no generator script in `scripts/`. Modifications to these manuals must be made directly within the HTML source files.

---

## 📘 Grammar Manual Directories (14 Total)

| Directory | Target Language | Status | Generator Script | Rebuild Command |
|---|---|---|---|---|
| `grammar/` | English | **(a) Generated** | `scripts/build_english_grammar_manual.py` | `python3 scripts/build_english_grammar_manual.py` |
| `grammaire-francaise/` | French | **(b) Hand-authored HTML** | None | N/A (Hand-authored HTML) |
| `grammatica-italiana/` | Italian | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `gramatica-espanola/` | Spanish | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `deutsche-grammatik/` | German | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `gramatica-portuguesa/` | Portuguese | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `grammatika-russkogo-yazyka/` | Russian | **(a) Generated** | `scripts/build_russian_grammar_manual.py` | `python3 scripts/build_russian_grammar_manual.py` |
| `elliniki-grammatiki/` | Greek | **(a) Generated** | `scripts/build_greek_grammar_manual.py` | `python3 scripts/build_greek_grammar_manual.py` |
| `tatar-teli-grammatikasy/` | Tatar | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `bashqort-tele-grammatikahy/` | Bashkir | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `chavash-grammatika/` | Chuvash | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `hayots-lezvi-kerakanutyun/` | Armenian | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `qartuli-gramatika/` | Georgian | **(a) Generated** | `scripts/build_monolingual_grammar_manuals.py` | `python3 scripts/build_monolingual_grammar_manuals.py` |
| `yezhadur-brezhoneg/` | Breton | **(b) Hand-authored HTML** | None | N/A (Hand-authored HTML) |

---

## 📚 Vocabulary Manual Directories (12 Total)

| Directory | Target Language | Status | Generator Script | Rebuild Command |
|---|---|---|---|---|
| `vocabulary-manual/` | English | **(b) Hand-authored HTML** | None | N/A (Hand-authored HTML) |
| `lexique-francais/` | French | **(a) Generated** | `scripts/build_french_vocab_manual.py` | `python3 scripts/build_french_vocab_manual.py` |
| `lessico-italiano/` | Italian | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `vocabulario-espanol/` | Spanish | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `deutscher-wortschatz/` | German | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `vocabulario-portugues/` | Portuguese | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `leksika-russkogo-yazyka/` | Russian | **(a) Generated** | `scripts/build_russian_vocab_manual.py` | `python3 scripts/build_russian_vocab_manual.py` |
| `tatar-teli-leksikasy/` | Tatar | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `bashqort-tele-leksikahy/` | Bashkir | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `chavash-leksiki/` | Chuvash | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `hayots-lezvi-barapashar/` | Armenian | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `qartuli-leqsika/` | Georgian | **(a) Generated** | `scripts/build_monolingual_vocab_manuals.py` | `python3 scripts/build_monolingual_vocab_manuals.py` |
| `geriou-brezhoneg/` | Breton | **(b) Hand-authored HTML** | None | N/A (Hand-authored HTML) |

---

## 🔍 Specific Hand-Authored Manual Confirmations

- **`grammaire-francaise/`** (French Grammar, 62 topics): Hand-authored static HTML with no generator script.
- **`vocabulary-manual/`** (English Vocabulary, 69 topics): Hand-authored static HTML with no generator script.
- **`yezhadur-brezhoneg/`** (Breton Grammar, 19 topics): Hand-authored static HTML with no generator script.
- **`geriou-brezhoneg/`** (Breton Vocabulary, 19 topics): Hand-authored static HTML with no generator script.

> **Note on Legacy Reference Tool (`reference-grammar/`):** The legacy multi-language grammar reference tool resides under `reference-grammar/<lang>/` (moved from `grammar/<lang>/`) and is distinct from the primary monolingual grammar manuals listed above (`grammar/` for English, `grammaire-francaise/` for French, `deutsche-grammatik/` for German, etc.).

> **Note for Content Updates:** When making content updates to generated manuals, edit the Python data structures inside the respective generator script in `scripts/` and run the rebuild command. For hand-authored manuals, edit the HTML files directly within the manual directory.
