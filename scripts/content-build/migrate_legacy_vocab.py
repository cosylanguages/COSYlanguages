import os
import re

# Theme slug mapping dictionary
THEME_MAPPINGS = {
    "career_development": "work",
    "stress_anxiety": "psychology",
    "environment_policy": "environment",
    "politics_governance": "people",
    "serious_illness_treatment": "health_medicine",
    "ethical_dilemmas": "psychology",
    "finances_investment": "work",
    "mental_health_wellbeing": "psychology",
    "equality_rights": "people",
    "higher_education": "school",
    "healthcare_systems": "health_medicine",
    "spatial_description": "describing",
    "probability_certainty": "describing"
}

def migrate_content(content):
    # 1. Clean up "opposite": null from JS files (with possible trailing commas)
    content = re.sub(r'\s*[\'"]opposite[\'"]\s*:\s*null\s*,?\s*', '', content)

    # 2. Match non-null opposites, e.g. "opposite": "disuguaglianza" or 'opposite': 'fossil fuels'
    # We look for: 'opposite': 'value' or "opposite": "value"
    def repl_opposite(match):
        val = match.group(2)
        return f'"antonyms": ["{val}"]'

    content = re.sub(r'[\'"]opposite[\'"]\s*:\s*([\'"])(.*?)\1', repl_opposite, content)

    # 3. Standardize unregistered theme slugs
    for bad_slug, good_slug in THEME_MAPPINGS.items():
        # Match 'theme': 'bad_slug' or "theme": "bad_slug"
        content = re.sub(r'([\'"]theme[\'"]\s*:\s*([\'"]))\b' + re.escape(bad_slug) + r'\b\2', r'\1' + good_slug + r'\2', content)
        # Match 'id': '..._bad_slug_...'
        content = re.sub(r'([\'"]id[\'"]\s*:\s*([\'"])(.*?))\b' + re.escape(bad_slug) + r'\b(.*?)\2', r'\1' + good_slug + r'\4\2', content)

    return content

def main():
    vocab_dir = "vocabulary/"
    if not os.path.exists(vocab_dir):
        print(f"Error: {vocab_dir} does not exist.")
        return

    migrated_count = 0
    for root, dirs, files in os.walk(vocab_dir):
        for file in files:
            if file.endswith(".js"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                new_content = migrate_content(content)
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"✅ Migrated legacy fields and slugs in: {filepath}")
                    migrated_count += 1

    print(f"\n🎉 Completed legacy vocabulary data migration in {migrated_count} files!")

if __name__ == "__main__":
    main()
