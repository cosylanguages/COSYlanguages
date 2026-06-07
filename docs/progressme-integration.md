# COSYlanguages × ProgressMe integration

## How identity is shared

Each student has a `id` (UUID) in Supabase and a `progressme_id` field.

When a student enrols in a course or challenge on ProgressMe:
1. James creates their account on ProgressMe manually (or via ProgressMe's invite flow)
2. James pastes the ProgressMe user ID into the student record in the COSYlanguages teacher dashboard
3. From that point, both platforms share the same logical student — COSYlanguages tracks
   daily practice, streaks, vocab, and homework; ProgressMe tracks course progress and marathon tasks

## What syncs (manual phase)
- James checks both dashboards during lesson prep
- Student's `challenge_enrolments` on COSYlanguages maps 1:1 to their marathon enrolment on ProgressMe

## Future: webhook sync
When ProgressMe exposes a webhook or API:
- On `challenge_enrolment.completed = true`, POST to ProgressMe to mark milestone complete
- On ProgressMe course unit completion, update `progress.current_unit` in Supabase
- Endpoint config: set `PROGRESSME_WEBHOOK_URL` in environment variables

## Data never shared
- Lesson notes and mistake logs stay in Supabase only
- Payment info stays in WhatsApp / external booking system
