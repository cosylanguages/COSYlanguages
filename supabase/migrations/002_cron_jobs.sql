-- COSYlanguages scheduled jobs
-- Run after all Edge Functions are deployed

-- Homework reminders: every day at 09:00 UTC
select cron.schedule(
  'homework-reminders',
  '0 9 * * *',
  $$
    select net.http_post(
      url    := 'https://iajkejcmoykubthlwfra.supabase.co/functions/v1/homework-reminders',
      body   := '{}'::jsonb,
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || current_setting('app.service_role_key', true)
      )
    );
  $$
);

-- Streak nudges: every day at 20:00 UTC
select cron.schedule(
  'streak-nudge',
  '0 20 * * *',
  $$
    select net.http_post(
      url    := 'https://iajkejcmoykubthlwfra.supabase.co/functions/v1/streak-nudge',
      body   := '{}'::jsonb,
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || current_setting('app.service_role_key', true)
      )
    );
  $$
);
