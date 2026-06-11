import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const THRESHOLD = 3 // alert James after this many occurrences

serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let body: { student_id: string; mistake_log: string[] }
  try { body = await req.json() }
  catch { return new Response('Invalid JSON', { status: 400 }) }

  // Count occurrences of each mistake across all sessions for this student
  const { data: allSessions } = await supabase
    .from('sessions')
    .select('mistake_log')
    .eq('student_id', body.student_id)

  const counts: Record<string, number> = {}
  for (const session of allSessions || []) {
    for (const mistake of (session.mistake_log || [])) {
      counts[mistake] = (counts[mistake] || 0) + 1
    }
  }

  // Find any mistake that just crossed the threshold
  const alerts = Object.entries(counts)
    .filter(([, count]) => count >= THRESHOLD)

  if (alerts.length === 0) {
    return new Response(JSON.stringify({ alerts: 0 }), { status: 200 })
  }

  // Write a broadcast for James to see in the teacher dashboard
  for (const [mistake, count] of alerts) {
    const { data: existing } = await supabase
      .from('broadcasts')
      .select('id')
      .ilike('message', `%${mistake}%`)
      .eq('active', true)
      .maybeSingle()

    // Only create broadcast if not already active for this mistake
    if (!existing) {
      const { data: student } = await supabase
        .from('students')
        .select('access_code, progressme_id')
        .eq('id', body.student_id)
        .single()

      await supabase.from('broadcasts').insert({
        message: `⚠️ Persistent mistake for ${student?.access_code}: "${mistake}" (${count}x). Consider a targeted ProgressMe exercise.`,
        active:  true
      })

      // Optionally forward to ProgressMe if API is configured
      const pmUrl = Deno.env.get('PROGRESSME_API_URL')
      const pmKey = Deno.env.get('PROGRESSME_API_KEY')
      if (pmUrl && pmKey && student?.progressme_id) {
        await fetch(`${pmUrl}/assignments/create`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${pmKey}` },
          body: JSON.stringify({
            student_id: student.progressme_id,
            topic:      mistake,
            type:       'grammar_drill'
          })
        })
      }
    }
  }

  return new Response(JSON.stringify({ alerts: alerts.length }), { status: 200 })
})
