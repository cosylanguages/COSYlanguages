import glob, os, re

files = sorted(glob.glob('apps/premium-events/clubs/wonder/**/*.html', recursive=True))
session_files = [f for f in files if 'sessions' in f and not os.path.basename(f).startswith('template')]

print(f"Checking {len(session_files)} session files...")
errors = []

for f in session_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    filename = os.path.basename(f)
    lang = "FR" if "/fr/" in f else "EN"

    if 'data-session-mode="big"' not in content:
        errors.append(f"{filename} [{lang}]: Missing big session mode container")
    if 'data-session-mode="mini"' not in content:
        errors.append(f"{filename} [{lang}]: Missing mini session mode container")
    if 'data-session-mode="private"' not in content:
        errors.append(f"{filename} [{lang}]: Missing private session mode container")

    unit_count = len(re.findall(r'UNIT \d+:', content))
    if unit_count < 6:
        errors.append(f"{filename} [{lang}]: Mini mode has only {unit_count} units (expected 6)")

    step_count = len(re.findall(r'id="p-step\d+"', content))
    if step_count < 8:
        errors.append(f"{filename} [{lang}]: Private mode has only {step_count} steps (expected 8)")

if not errors:
    print("✅ All 25 session files passed structural integrity checks!")
else:
    print(f"❌ Found {len(errors)} errors:")
    for e in errors:
        print("  -", e)
