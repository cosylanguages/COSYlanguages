# COSYlanguages × ProgressMe — Integration guide

## Identity bridge

Each student has:
- A UUID `id` in the Supabase `students` table (their COSYlanguages identity)
- A `progressme_id` field that stores their ProgressMe user ID

These two values link the same person across both platforms.

## Setup steps for each new student

1. Create the student record in the COSYlanguages teacher dashboard (generates a UUID)
2. Create their ProgressMe account (or invite them)
3. Copy their ProgressMe user ID from the ProgressMe profile page
4. Paste it into the ProgressMe ID field in the COSYlanguages teacher dashboard
5. Save — both platforms now share the same logical student

## What each platform tracks

| COSYlanguages | ProgressMe |
|---------------|------------|
| Daily practice points & streak | Course unit progress |
| Vocab notebook | Course materials |
| Lesson notes & mistake log | Marathon/challenge tasks |
| Homework assignments | Achievement badges |
| Speaking club attendance | Certificates |

## Current integration (manual)

James checks both dashboards during lesson prep. The platforms do not
automatically sync — James reconciles manually.

## Future: automatic sync via webhooks

When ProgressMe exposes a webhook or API endpoint, the following can be automated:

- `challenge_enrolments.completed = true` → POST to ProgressMe to mark milestone done
- ProgressMe course unit completion → update `progress.current_unit` in Supabase

To configure, set `PROGRESSME_WEBHOOK_URL` as a GitHub repository secret and add
a Supabase Edge Function that fires on the `challenge_enrolments` update trigger.

## Security

- Student lesson notes and mistake logs never leave Supabase
- Payment information stays in WhatsApp / external booking only
- The Supabase anon key is safe to expose on the frontend (controlled by RLS policies)
- The Supabase service_role key must NEVER appear in any frontend code
