import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const WEBHOOK_SECRET = Deno.env.get('PROGRESSME_WEBHOOK_SECRET') || ''

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  // Verify shared secret ProgressMe sends in a header
  const secret = req.headers.get('x-cosy-secret')
  if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  let body: {
    progressme_id: string
    word:          string
    definition?:   string
    language:      string
  }

  try { body = await req.json() }
  catch { return new Response('Invalid JSON', { status: 400 }) }

  if (!body.progressme_id || !body.word || !body.language) {
    return new Response('Missing: progressme_id, word, language', { status: 422 })
  }

  // Find the student
  const { data: student } = await supabase
    .from('students')
    .select('id')
    .eq('progressme_id', body.progressme_id)
    .single()

  if (!student) {
    return new Response('Student not found', { status: 404 })
  }

  // Skip duplicates
  const { data: existing } = await supabase
    .from('vocab_notebook')
    .select('id')
    .eq('student_id', student.id)
    .eq('word',       body.word)
    .eq('language',   body.language)
    .maybeSingle()

  if (existing) {
    return new Response(JSON.stringify({ skipped: true }), { status: 200 })
  }

  // Insert
  const { error } = await supabase.from('vocab_notebook').insert({
    student_id: student.id,
    word:       body.word,
    definition: body.definition || '',
    language:   body.language
  })

  if (error) return new Response(error.message, { status: 500 })

  return new Response(JSON.stringify({ ok: true, word: body.word }), { status: 201 })
})
