import os
import glob
import re

def update_html_file(html_file, prefix=""):
    base_dir = "vocabulary/en"
    js_files = sorted(glob.glob(os.path.join(base_dir, "**", "*.js"), recursive=True))

    script_tags = []
    for js in js_files:
        rel_path = js.replace("vocabulary/en/", "")
        script_tags.append(f'    <script src="{prefix}{rel_path}"></script>')

    scripts_html = "\n".join(script_tags)

    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace scripts in head or body data section
    if "<!-- English Data Files -->" in content:
        new_content = re.sub(
            r"<!-- English Data Files -->[\s\S]*?(?=\s*<style|\s*</head>)",
            f"<!-- English Data Files -->\n{scripts_html}\n",
            content
        )
    elif "<!-- Vocabulary Data Files -->" in content:
        new_content = re.sub(
            r"<!-- Vocabulary Data Files -->[\s\S]*?(?=\s*<p><a href=\"index\.html\")",
            f"<!-- Vocabulary Data Files -->\n{scripts_html}\n",
            content
        )
    else:
        new_content = content

    with open(html_file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {html_file}")

def main():
    update_html_file("vocabulary/en/en.html", prefix="")
    update_html_file("languages/en/vocabulary.html", prefix="../../vocabulary/en/")

if __name__ == "__main__":
    main()
