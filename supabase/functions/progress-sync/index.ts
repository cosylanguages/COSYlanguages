import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  const secret = req.headers.get('x-cosy-secret')
  if (Deno.env.get('PROGRESSME_WEBHOOK_SECRET') &&
      secret !== Deno.env.get('PROGRESSME_WEBHOOK_SECRET')) {
    return new Response('Unauthorized', { status: 401 })
  }

  let body: {
    progressme_id:   string
    unit_ref:        string
    units_completed: number
    event:           'unit_completed' | 'lesson_started'
  }

  try { body = await req.json() }
  catch { return new Response('Invalid JSON', { status: 400 }) }

  // Find student
  const { data: student } = await supabase
    .from('students')
    .select('id, language, course_type, level')
    .eq('progressme_id', body.progressme_id)
    .single()

  if (!student) return new Response('Student not found', { status: 404 })

  // Update progress
  const { data: existing } = await supabase
    .from('progress')
    .select('id, units_completed')
    .eq('student_id', student.id)
    .single()

  if (existing) {
    await supabase.from('progress').update({
      current_unit:    body.unit_ref,
      units_completed: Math.max(existing.units_completed || 0, body.units_completed || 0),
      updated_at:      new Date().toISOString()
    }).eq('id', existing.id)
  } else {
    await supabase.from('progress').insert({
      student_id:      student.id,
      current_unit:    body.unit_ref,
      units_completed: body.units_completed || 1
    })
  }

  // On unit_completed — auto-push next unit vocab to student notebook
  if (body.event === 'unit_completed') {
    const { data: vocab } = await supabase
      .from('unit_vocabulary')
      .select('word, definition')
      .eq('language',    student.language)
      .eq('course_type', student.course_type)
      .eq('level',       student.level)
      .eq('unit_ref',    body.unit_ref)

    if (vocab && vocab.length > 0) {
      const rows = vocab.map(w => ({
        student_id: student.id,
        word:       w.word,
        definition: w.definition || '',
        language:   student.language
      }))
      await supabase
        .from('vocab_notebook')
        .upsert(rows, { onConflict: 'student_id,word,language', ignoreDuplicates: true })
    }
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 })
})
