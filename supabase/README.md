# Supabase setup

## One-time setup (James does this manually)

1. Go to https://supabase.com/dashboard and open the COSYlanguages project
2. Click **SQL Editor** in the left sidebar
3. Paste the entire contents of `supabase/schema.sql` and click **Run**
4. Confirm all 9 tables appear under **Table Editor**

## Local development

Copy `js/config.template.js` to `js/config.js` and fill in real values.
The file is gitignored — never commit it.

## GitHub Pages deployment

Secrets `COSY_SUPABASE_URL` and `COSY_SUPABASE_ANON_KEY` are set as repository
secrets. The deploy workflow injects them into `js/config.js` at build time.

## Tables

| Table | Purpose |
|-------|---------|
| `teachers` | Teacher accounts |
| `students` | Student records + access codes |
| `progress` | Points, streak, current unit |
| `sessions` | Lessons — notes and mistake log |
| `homework` | Assigned tasks + status |
| `vocab_notebook` | Words saved by students |
| `challenges` | Marathon/challenge definitions |
| `challenge_enrolments` | Which student is in which challenge |
| `broadcasts` | Teacher → all students messages |
