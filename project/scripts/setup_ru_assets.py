import os, shutil

levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']

for lvl in levels:
    target_dir = f"manuals/ru/grammar/{lvl}"
    os.makedirs(f"{target_dir}/topics", exist_ok=True)
    os.makedirs(f"{target_dir}/assets", exist_ok=True)

    src_css = f"manuals/en/grammar/{lvl}/assets/style.css"
    src_js = f"manuals/en/grammar/{lvl}/assets/app.js"

    # Fallback if en level assets don't exist
    if not os.path.exists(src_css):
        src_css = "manuals/en/grammar/a1/assets/style.css"
    if not os.path.exists(src_js):
        src_js = "manuals/en/grammar/a1/assets/app.js"

    dest_css = f"{target_dir}/assets/style.css"
    dest_js = f"{target_dir}/assets/app.js"

    shutil.copyfile(src_css, dest_css)
    shutil.copyfile(src_js, dest_js)

    # Adapt JS/CSS branding comments if needed
    with open(dest_js, 'r', encoding='utf-8') as f:
        js_content = f.read()
    js_content = js_content.replace('English Grammar Manual', 'Russian Grammar Manual')
    with open(dest_js, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Created assets for manuals/ru/grammar/{lvl}")
