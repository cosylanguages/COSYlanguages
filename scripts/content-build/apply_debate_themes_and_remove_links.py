import os
import re

THEME_MAPPING = {
    r'4-day-work-week|la-semaine-de-4-jours|4-dnevnaya-rabochaya-nedelya': 'theme-debate-work-week',
    r'ai-and-art': 'theme-debate-ai-art',
    r'assisted-dying|l-aide-active-a-mourir': 'theme-debate-assisted-dying',
    r'homework-ban': 'theme-debate-homework-ban',
    r'human-cloning': 'theme-debate-human-cloning',
    r'meta-subscriptions': 'theme-debate-meta-subscriptions',
    r'money-vs-free-time': 'theme-debate-money-time',
    r'music-vs-songs': 'theme-debate-music-songs',
    r'pedagogy-and-practice|the-future-proof-educator': 'theme-debate-education',
    r'short-holiday-vs-long-holiday': 'theme-debate-holidays',
    r'typing-vs-handwriting': 'theme-debate-typing-writing',
    r'upbringing-old-vs-modern': 'theme-debate-upbringing',
}

def get_theme_class(filename):
    for pattern, cls in THEME_MAPPING.items():
        if re.search(pattern, filename, re.IGNORECASE):
            return cls
    return 'theme-debate-upbringing'  # fallback

def update_body_class(content, theme_cls):
    # Search for <body ...>
    body_match = re.search(r'(<body[^>]*>)', content, re.IGNORECASE)
    if not body_match:
        return content, False

    body_tag = body_match.group(1)

    # Check if class attribute exists inside body tag
    class_match = re.search(r'class\s*=\s*["\']([^"\']*)["\']', body_tag, re.IGNORECASE)
    if class_match:
        class_str = class_match.group(1)
        # Remove any theme-debate- class
        classes = class_str.split()
        classes = [c for c in classes if not c.startswith('theme-debate-')]
        classes.append(theme_cls)
        new_class_str = " ".join(classes)
        new_body_tag = re.sub(r'class\s*=\s*["\']([^"\']*)["\']', f'class="{new_class_str}"', body_tag, flags=re.IGNORECASE)
    else:
        # Insert class attribute right after '<body'
        new_body_tag = re.sub(r'<body', f'<body class="{theme_cls}"', body_tag, flags=re.IGNORECASE)

    new_content = content.replace(body_tag, new_body_tag)
    return new_content, (new_body_tag != body_tag)

def remove_resources_block(content):
    # Match the <div class="meta-item"><h4>Resources</h4>...</div> block
    # Note: it can have internal spacing, attributes, and tags
    pattern = r'<div class="meta-item">\s*<h4>(?:Resources|Ressources)</h4>.*?</div>'
    new_content, count = re.subn(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    return new_content, count > 0

def process_file(filepath):
    filename = os.path.basename(filepath)
    theme_cls = get_theme_class(filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update body class
    content, body_modified = update_body_class(content, theme_cls)

    # 2. Remove Resources block
    content, resources_removed = remove_resources_block(content)

    if body_modified or resources_removed:
        with open(filepath, 'w', encoding='utf-8') as out_f:
            out_f.write(content)
        print(f"Processed {filename}: Class='{theme_cls}', Resources removed={resources_removed}")
        return True
    return False

def main():
    dirs = [
        'events/sessions/debatable-relatable',
        'events/fr/sessions/debatable-relatable',
        'events/ru/sessions/debatable-relatable'
    ]

    count = 0
    for d in dirs:
        if not os.path.exists(d):
            print(f"Directory {d} does not exist. Skipping.")
            continue
        for filename in os.listdir(d):
            if filename.endswith('.html'):
                filepath = os.path.join(d, filename)
                if process_file(filepath):
                    count += 1
    print(f"Successfully processed {count} files.")

if __name__ == '__main__':
    main()
