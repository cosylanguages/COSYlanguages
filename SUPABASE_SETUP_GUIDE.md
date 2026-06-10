# Supabase Setup & Deployment Guide

This guide documents the database schema, edge functions, and scheduled jobs required for the COSYlanguages ecosystem.

## 1. Database Schema
The system relies on a 9-table schema defined in `supabase/schema.sql`.

| Table | Purpose |
|-------|---------|
| `teachers` | Staff records and assigned languages. |
| `students` | Student profiles linked to access codes and ProgressMe IDs. |
| `progress` | Points, streaks, and current curriculum position. |
| `sessions` | Lesson history, notes, and the Mistake Log. |
| `homework` | Task assignments and status tracking. |
| `vocab_notebook` | Individual student dictionary saved from practice/lessons. |
| `challenges` | Marathon and challenge definitions. |
| `challenge_enrolments` | Student participation tracking. |
| `broadcasts` | Global notifications sent by teachers/admins. |

## 2. Edge Functions
Deploy functions using the Supabase CLI with the `--use-api` flag.

```bash
supabase functions deploy [function-name] --project-ref iajkejcmoykubthlwfra --use-api
```

### Key Functions:
- `progress-sync`: Syncs ProgressMe webhooks to the `progress` table.
- `vocab-outbound`: Pushes new `vocab_notebook` entries to ProgressMe API.
- `mistake-check`: Analyzes `mistake_log` and creates broadcasts for recurring errors.
- `send-telegram`: Shared utility for bot notifications.
- `telegram-register`: Handles student Telegram bot registration.

## 3. Scheduled Jobs (pg_cron)
Scheduled tasks are managed via `pg_cron` in the Supabase dashboard or SQL editor.

- **Homework Reminders:** Runs at 09:00 UTC daily (`homework-reminders`).
- **Streak Nudges:** Runs at 20:00 UTC daily (`streak-nudge`).

## 4. Integration Secrets
The following secrets must be set in the Supabase dashboard:
- `PROGRESSME_API_KEY`: For outbound vocabulary sync.
- `TELEGRAM_BOT_TOKEN`: For automated notifications.
- `PROGRESSME_WEBHOOK_SECRET`: To validate inbound webhooks.

## 5. Security (RLS)
Always ensure RLS is enabled:
```sql
alter table public.vocab_notebook enable row level security;
create policy "Students can only see their own vocab"
  on public.vocab_notebook for select
  using (student_id = auth.uid());
```
