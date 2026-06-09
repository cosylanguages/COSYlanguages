# Supabase & ProgressMe Setup Guide

This guide provides the manual steps required to complete the integration between COSYlanguages, Supabase, and ProgressMe.

## 1. Run Supabase Migrations
Go to the [Supabase SQL Editor](https://supabase.com/dashboard/project/iajkejcmoykubthlwfra/sql) and run the following scripts in order:

### Part A: Enable Extensions
```sql
-- Enable scheduling and HTTP from within Postgres
create extension if not exists pg_net;
create extension if not exists pg_cron;

-- Grant pg_cron usage to postgres role
grant usage on schema cron to postgres;
grant all privileges on all tables in schema cron to postgres;
```

### Part B: Schedule Cron Jobs
```sql
-- COSYlanguages scheduled jobs
-- Remove old jobs if re-running
select cron.unschedule('homework-reminders') where exists (
  select 1 from cron.job where jobname = 'homework-reminders'
);
select cron.unschedule('streak-nudge') where exists (
  select 1 from cron.job where jobname = 'streak-nudge'
);

-- Homework reminders: every day at 09:00 UTC
-- IMPORTANT: Replace 'YOUR_SERVICE_ROLE_KEY' with your real secret key from Settings -> API
select cron.schedule(
  'homework-reminders',
  '0 9 * * *',
  format(
    $sql$
      select net.http_post(
        url     := 'https://iajkejcmoykubthlwfra.supabase.co/functions/v1/homework-reminders',
        body    := '{}'::jsonb,
        headers := '{"Content-Type":"application/json","Authorization":"Bearer %s"}'::jsonb
      );
    $sql$,
    'YOUR_SERVICE_ROLE_KEY'
  )
);

-- Streak nudges: every day at 20:00 UTC
-- IMPORTANT: Replace 'YOUR_SERVICE_ROLE_KEY' with your real secret key from Settings -> API
select cron.schedule(
  'streak-nudge',
  '0 20 * * *',
  format(
    $sql$
      select net.http_post(
        url     := 'https://iajkejcmoykubthlwfra.supabase.co/functions/v1/streak-nudge',
        body    := '{}'::jsonb,
        headers := '{"Content-Type":"application/json","Authorization":"Bearer %s"}'::jsonb
      );
    $sql$,
    'YOUR_SERVICE_ROLE_KEY'
  )
);
```

## 2. Set Up Database Webhook for Outbound Vocabulary
This webhook automatically pushes new words saved by students to ProgressMe.

1. Go to **Database** → **Webhooks** in the Supabase Dashboard.
2. Click **Enable Webhooks** (if not already enabled).
3. Click **Create a new webhook**:
   - **Name**: `vocab-outbound`
   - **Table**: `vocab_notebook`
   - **Events**: `INSERT`
   - **Type**: `HTTP Request`
   - **Method**: `POST`
   - **URL**: `https://iajkejcmoykubthlwfra.supabase.co/functions/v1/vocab-outbound`
   - **HTTP Headers**:
     - `Content-Type`: `application/json`
     - `Authorization`: `Bearer [YOUR_SERVICE_ROLE_KEY]` (found in Settings → API)
4. Click **Create**.

## 3. Configure ProgressMe (Edvibe) via Albato
To connect ProgressMe to your Supabase backend, you need to create two "Scenarios" in Albato.

### Scenario 1: Vocabulary Sync (Inbound)
This pushes words from ProgressMe to COSYlanguages.

1. **Trigger**: ProgressMe → "New word added to dictionary".
2. **Action**: HTTP Request → **POST**.
3. **URL**: `https://iajkejcmoykubthlwfra.supabase.co/functions/v1/vocab-inbound`
4. **Headers**:
   - `Content-Type`: `application/json`
   - `x-cosy-secret`: `uPSXsTCaDqO709aeauEYz8W4C/ptphlTVNIwuHtTosY=`
5. **Body (JSON)**:
   ```json
   {
     "progressme_id": "{Student ID from ProgressMe}",
     "word": "{Word}",
     "definition": "{Definition}",
     "language": "{Language code}"
   }
   ```
   *(Note: Replace the `{}` placeholders with the corresponding fields from Albato's selector)*

### Scenario 2: Progress Tracking
This updates student streaks and unit progress in COSYlanguages.

1. **Trigger**: ProgressMe → "Unit completed" (or "Lesson finished").
2. **Action**: HTTP Request → **POST**.
3. **URL**: `https://iajkejcmoykubthlwfra.supabase.co/functions/v1/progress-sync`
4. **Headers**:
   - `Content-Type`: `application/json`
   - `x-cosy-secret`: `uPSXsTCaDqO709aeauEYz8W4C/ptphlTVNIwuHtTosY=`
5. **Body (JSON)**:
   ```json
   {
     "progressme_id": "{Student ID from ProgressMe}",
     "unit_ref": "{Unit name or ID}",
     "units_completed": {Total units finished},
     "event": "unit_completed"
   }
   ```
   *(Note: Map `{Student ID}` to the student ID field and `{Total units finished}` to the count field from Albato)*

## 4. Student Registration
Tell each student to message [@cosylanguages_bot](https://t.me/cosylanguages_bot) with their access code (e.g., `MARIE-FR-2024`) to start receiving Telegram reminders.

## 5. End-to-End Test
1. Create/Use a test student account in Supabase.
2. Message the bot with the test student's access code.
3. Mark a unit as completed in ProgressMe and verify the student's progress updates in Supabase.
4. Add a word to the student's dictionary in ProgressMe and verify it appears in `vocab_notebook`.
