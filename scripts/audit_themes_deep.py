import os
import re
import json

def get_config_themes():
    with open('js/data/theme_config.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract themeConfig object
    match = re.search(r'const themeConfig = ({.*?});', content, re.DOTALL)
    if not match:
        return {}

    config = json.loads(re.sub(r'//.*', '', match.group(1))) # Minimal cleanup

    all_subthemes = set()
    for level in config.values():
        if 'common_themes' in level:
            for common in level['common_themes'].values():
                for sub in common.keys():
                    all_subthemes.add(sub)
    return all_subthemes

def audit_data_themes():
    valid_themes = get_config_themes()
    print(f"Valid sub-themes from config: {len(valid_themes)}")

    data_root = 'js/data'
    categories = ['vocabulary.js', 'verbs.js', 'locations.js', 'people.js']

    mismatched = {}

    for root, dirs, files in os.walk(data_root):
        for file in files:
            if file in categories:
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                list_match = re.search(r'const data = (\[.*?\]);', content, re.DOTALL)
                if list_match:
                    try:
                        data = json.loads(list_match.group(1))
                        for item in data:
                            theme = item.get('theme')
                            if theme and theme not in valid_themes:
                                if theme not in mismatched:
                                    mismatched[theme] = []
                                mismatched[theme].append(path)
                    except:
                        pass

    if mismatched:
        print("\n--- Mismatched Themes found ---")
        for theme in sorted(mismatched.keys()):
            count = len(mismatched[theme])
            print(f"Theme '{theme}' ({count} items) - Example file: {mismatched[theme][0]}")
    else:
        print("\nAll themes in data match theme_config.js!")

if __name__ == "__main__":
    audit_data_themes()
