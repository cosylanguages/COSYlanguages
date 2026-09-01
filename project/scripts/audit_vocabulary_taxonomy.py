import glob, re, json, os

def audit_taxonomy():
    # 1. Extract COSY_THEME_TREE from js/core/ui.js
    with open('js/core/ui.js', 'r', encoding='utf-8') as f:
        ui_code = f.read()

    match = re.search(r'window\.COSY_THEME_TREE\s*=\s*(\{.*?\}\n\s*\});', ui_code, re.DOTALL)
    if not match:
        print("Error: Could not extract COSY_THEME_TREE from js/core/ui.js")
        return

    tree_block = match.group(1)

    # Parse COSY_THEME_TREE
    cosy_theme_tree = {}
    for line in tree_block.split('\n'):
        line_clean = line.strip()
        m = re.match(r'\"?([\w_]+)\"?\s*:\s*\[(.*?)\]', line_clean)
        if m:
            key = m.group(1)
            raw_vals = m.group(2)
            vals = [v.strip(' "\'').strip() for v in raw_vals.split(',') if v.strip(' "\'').strip()]
            cosy_theme_tree[key] = vals

    tree_themes = set(cosy_theme_tree.keys())
    tree_subthemes = set(st for sub_list in cosy_theme_tree.values() for st in sub_list)

    # 2. Extract theme and sub_theme values across vocabulary/en/**/*.js
    data_themes = {}
    data_subthemes = {}

    file_count = 0
    item_count = 0

    for filepath in sorted(glob.glob('vocabulary/en/**/*.js', recursive=True)):
        file_count += 1
        rel_path = os.path.relpath(filepath)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

            # Match items
            theme_matches = re.findall(r'\"theme\":\s*\"([^\"]+)\"', content)
            sub_matches = re.findall(r'\"sub_theme\":\s*\"([^\"]+)\"', content)

            item_count += len(theme_matches)

            for t in theme_matches:
                data_themes[t] = data_themes.get(t, 0) + 1
            for st in sub_matches:
                if st and st != 'null':
                    data_subthemes[st] = data_subthemes.get(st, 0) + 1

    unique_data_themes = set(data_themes.keys())
    unique_data_subthemes = set(data_subthemes.keys())

    # 3. Analyze differences
    # A. Themes/Subthemes in data missing from COSY_THEME_TREE
    themes_in_data_not_in_tree = unique_data_themes - tree_themes
    subthemes_in_data_not_in_tree = unique_data_subthemes - tree_subthemes

    # B. COSY_THEME_TREE entries with no matching data
    tree_themes_without_data = tree_themes - unique_data_themes - unique_data_subthemes
    tree_subthemes_without_data = tree_subthemes - unique_data_subthemes - unique_data_themes

    # C. Near-duplicates and naming inconsistencies
    all_data_keys = unique_data_themes | unique_data_subthemes
    all_tree_keys = tree_themes | tree_subthemes

    near_duplicates = []

    # Look for plural vs singular, underscores vs hyphens, suffixes, etc.
    for dt in sorted(list(all_data_keys)):
        dt_norm = dt.replace('_', '').replace('-', '').rstrip('s')
        for tt in sorted(list(all_tree_keys)):
            if dt == tt:
                continue
            tt_norm = tt.replace('_', '').replace('-', '').rstrip('s')
            if dt_norm == tt_norm or dt in tt or tt in dt:
                near_duplicates.append((dt, tt))

    # Generate Markdown Report
    report = []
    report.append("# Vocabulary Theme Taxonomy Audit Report\n")
    report.append("## Overview\n")
    report.append(f"- **Audited Data Scope:** `vocabulary/en/` ({file_count} JavaScript files, {item_count} entries)")
    report.append(f"- **UI Taxonomy Reference:** `window.COSY_THEME_TREE` in `js/core/ui.js` ({len(tree_themes)} top-level themes, {len(tree_subthemes)} sub-themes)")
    report.append(f"- **Unique Theme Identifiers in Data:** {len(unique_data_themes)}")
    report.append(f"- **Unique Sub-Theme Identifiers in Data:** {len(unique_data_subthemes)}\n")

    report.append("---")
    report.append("\n## 1. Theme Values Present in Data but Missing from `COSY_THEME_TREE`\n")
    report.append("The following theme strings appear in `vocabulary/en/**/*.js` but are not registered as top-level keys in `COSY_THEME_TREE`:\n")
    report.append("| Data Theme Identifier | Frequency | Category / Level Context | Notes |")
    report.append("| :--- | :--- | :--- | :--- |")

    for t in sorted(list(themes_in_data_not_in_tree)):
        cnt = data_themes[t]
        notes = "Sub-theme in TREE" if t in tree_subthemes else "Unmapped in TREE"
        report.append(f"| `{t}` | {cnt} | English Datasets | {notes} |")

    report.append("\n### Sub-Themes in Data Missing from `COSY_THEME_TREE` Sub-Theme Lists\n")
    report.append("| Data Sub-Theme Identifier | Frequency | Notes |")
    report.append("| :--- | :--- | :--- |")
    for st in sorted(list(subthemes_in_data_not_in_tree)):
        cnt = data_subthemes[st]
        notes = "Top-level theme in TREE" if st in tree_themes else "Unmapped in TREE"
        report.append(f"| `{st}` | {cnt} | {notes} |")

    report.append("\n---")
    report.append("\n## 2. `COSY_THEME_TREE` Entries with No Matching Data in `vocabulary/en/`\n")
    report.append("The following keys or values defined in `COSY_THEME_TREE` do not match any `theme` or `sub_theme` field in English dataset files:\n")

    report.append("\n### Top-Level Themes in `COSY_THEME_TREE` Without Direct Match in English Data\n")
    for tt in sorted(list(tree_themes_without_data)):
        report.append(f"- `{tt}`")

    report.append("\n### Sub-Themes in `COSY_THEME_TREE` Without Direct Match in English Data\n")
    for tst in sorted(list(tree_subthemes_without_data)):
        report.append(f"- `{tst}`")

    report.append("\n---")
    report.append("\n## 3. Near-Duplicates and Naming Inconsistencies\n")
    report.append("The following theme or sub-theme pairs represent potential naming conflicts, singular/plural mismatches, or level-suffixed variants across the dataset and UI taxonomy:\n")
    report.append("| Data Identifier | TREE Identifier | Type of Mismatch |")
    report.append("| :--- | :--- | :--- |")

    seen = set()
    for dt, tt in near_duplicates:
        pair_key = tuple(sorted([dt, tt]))
        if pair_key in seen:
            continue
        seen.add(pair_key)

        mtype = "Exact case/separator match"
        if dt.rstrip('s') == tt.rstrip('s'):
            mtype = "Singular vs Plural (`" + dt + "` / `" + tt + "`)"
        elif '_c1' in dt or '_a1' in dt:
            mtype = "CEFR Level Suffix in Data (`" + dt + "`)"
        elif dt.replace('_', '') == tt.replace('_', ''):
            mtype = "Separator Difference (Underscore vs Hyphen/Space)"
        else:
            mtype = "Substring / Semantic Overlap"

        report.append(f"| `{dt}` | `{tt}` | {mtype} |")

    report.append("\n---")
    report.append("\n## 4. Reconcilation & Consolidation Recommendations\n")
    report.append("1. **Standardize Singular vs. Plural:** Reconcile mismatches like `clothing` vs `clothes`, `sport` vs `sports`, `insect` vs `insects`.\n")
    report.append("2. **Normalize CEFR Suffixes:** Remove level-specific suffixes in theme tags (e.g., `discourse_argument_c1` -> `discourse_argument`) so filtering works cleanly across all levels.\n")
    report.append("3. **Harmonize `COSY_THEME_TREE` Mapping:** Expand `COSY_THEME_TREE` or alias legacy data theme names to ensure 100% data coverage in Practice Hub dropdown filters.")

    report_text = "\n".join(report)

    os.makedirs('project/docs', exist_ok=True)
    with open('project/docs/vocabulary-taxonomy-audit.md', 'w', encoding='utf-8') as f:
        f.write(report_text)

    print("Report generated successfully at project/docs/vocabulary-taxonomy-audit.md")

if __name__ == "__main__":
    audit_taxonomy()
