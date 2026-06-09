# Supabase setup

## One-time setup (James does this manually)

1. Go to https://supabase.com/dashboard and open the COSYlanguages project
2. Click **SQL Editor** in the left sidebar
3. Paste the entire contents of `supabase/schema.sql` and click **Run**
4. Confirm all 9 tables appear under **Table Editor**

## Enabling Cron (run once in Supabase SQL Editor)

Paste and run `supabase/migrations/001_enable_extensions.sql`
Then paste and run `supabase/migrations/002_cron_jobs.sql`
(Run 002 AFTER all Edge Functions are deployed)

To view running jobs:
```sql
select * from cron.job;
```

To view job history:
```sql
select * from cron.job_run_details order by start_time desc limit 20;
```

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

## Database Webhooks (set up in Supabase dashboard)

After deploying vocab-outbound:
1. Supabase dashboard → Database → Webhooks
2. Create webhook: table=vocab_notebook, event=INSERT, function=vocab-outbound
3. That's it — Supabase fires it automatically on every new word saved
