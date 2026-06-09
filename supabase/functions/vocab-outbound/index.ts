import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// ProgressMe API endpoint for adding a word to a student's dictionary
// Update this URL when ProgressMe documents their API
const PROGRESSME_API_URL = Deno.env.get('PROGRESSME_API_URL') || ''
const PROGRESSME_API_KEY = Deno.env.get('PROGRESSME_API_KEY') || ''

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  // Supabase Database Webhooks send the new row as `record`
  let payload: { record: { student_id: string; word: string; definition: string; language: string } }
  try { payload = await req.json() }
  catch { return new Response('Invalid JSON', { status: 400 }) }

  const { record } = payload

  // Get the student's progressme_id
  const { data: student } = await supabase
    .from('students')
    .select('progressme_id, language')
    .eq('id', record.student_id)
    .single()

  // Skip if no ProgressMe account linked
  if (!student?.progressme_id) {
    return new Response(JSON.stringify({ skipped: 'no progressme_id' }), { status: 200 })
  }

  // If ProgressMe API URL is configured, push the word directly
  if (PROGRESSME_API_URL && PROGRESSME_API_KEY) {
    const res = await fetch(`${PROGRESSME_API_URL}/dictionary/add`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${PROGRESSME_API_KEY}`
      },
      body: JSON.stringify({
        student_id: student.progressme_id,
        word:       record.word,
        definition: record.definition,
        language:   record.language || student.language
      })
    })

    return new Response(
      JSON.stringify({ forwarded: res.ok, status: res.status }),
      { status: 200 }
    )
  }

  // Fallback: log that the word is ready to sync (manual or future API)
  console.log(`Word ready to sync to ProgressMe: ${record.word} for ${student.progressme_id}`)
  return new Response(JSON.stringify({ queued: true }), { status: 200 })
})
