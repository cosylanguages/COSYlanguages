# progress-sync

Called by ProgressMe when a lesson or unit is completed.
Updates the student's current_unit in Supabase and pushes new unit vocab.

## Deploy
supabase functions deploy progress-sync --project-ref iajkejcmoykubthlwfra

## ProgressMe setup
In ProgressMe → Settings → Integrations → Webhooks:
- Event: lesson marked complete
- URL: https://iajkejcmoykubthlwfra.supabase.co/functions/v1/progress-sync
- Header: x-cosy-secret: [PROGRESSME_WEBHOOK_SECRET]
- Body:
  {
    "progressme_id":   "{{student.id}}",
    "unit_ref":        "{{lesson.unit_ref}}",
    "units_completed": {{student.units_completed}},
    "event":           "unit_completed"
  }
