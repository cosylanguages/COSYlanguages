-- COSYlanguages scheduled jobs (final version)
-- Run after all Edge Functions are deployed

-- Remove old jobs if re-running
select cron.unschedule('homework-reminders') where exists (
  select 1 from cron.job where jobname = 'homework-reminders'
);
select cron.unschedule('streak-nudge') where exists (
  select 1 from cron.job where jobname = 'streak-nudge'
);

-- Homework reminders: every day at 09:00 UTC
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
    current_setting('app.service_role_key', true)
  )
);

-- Streak nudges: every day at 20:00 UTC
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
    current_setting('app.service_role_key', true)
  )
);
